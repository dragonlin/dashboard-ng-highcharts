import { Component, OnInit, SimpleChanges, Input, OnChanges, EventEmitter, Output } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { WebSocketService } from "src/app/web-socket.service";
import {animate, state, style, transition, trigger} from '@angular/animations';
// import { MatCheckboxChange } from '@angular/material';

//                  ___====-_  _-====___
//            _--^^^#####//      \\#####^^^--_
//         _-^##########// (    ) \\##########^-_
//        -############//  |\^^/|  \\############-
//      _/############//   (@::@)   \\############\_
//     /#############((     \\//     ))#############\
//    -###############\\    (oo)    //###############-
//   -#################\\  / VV \  //#################-
//  -###################\\/      \//###################-
// _#/|##########/\######(   /\   )######/\##########|\#_
// |/ |#/\#/\#/\/  \#/\##\  |  |  /##/\#/  \/\#/\#/\#| \|
// `  |/  V  V  `   V  \#\| |  | |/#/  V   '  V  V  \|  '
//    `   `  `      `   / | |  | | \   '      '  '   '
//                     (  | |  | |  )
//                    __\ | |  | | /__
//                   (vvv(Dragon lin)vvv)
//                      神兽保佑
//                        代码无BUG!
// import { MustMatch } from './_helpers/must-match.validator';
export interface Response {
  status: string,
  input: any,
  result: any
}

export interface PeriodicElement {
  domain: string;
  rangeFrom: string;
  rangeTo: string;
  commit_nums: number;
  commits: any;
} 
const ELEMENT_DATA: PeriodicElement[] = [
// { domain: "ADMIN", rangeFrom: "43825", rangeTo: "43820", commits: [ { "rev": "r43825", "author": "kapitanoam", "time": 1587694869000 }, { "rev": "r43820", "author": "kapitanoam", "time": 1587647440000 } ], commit_nums: 2 }, 
// { domain: "DCS", rangeFrom: "108211", rangeTo: "108181", commits: [ { "rev": "r108211", "author": "kapitanoam", "time": 1587694869000 }, { "rev": "r108204", "author": "hliwa", "time": 1587654898000 }, { "rev": "r108181", "author": "kapitanoam", "time": 1587647440000 } ], commit_nums: 3 },
]

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: "app-tools",
  templateUrl: "./tools.component.html",
  styleUrls: ["./tools.component.less"],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ToolsComponent implements OnInit {
  color: ThemePalette = "accent";
  // checked = false;
  // disabled = false;
  displayedColumns: string[] = ['domain', 'rangeFrom', 'rangeTo', 'commit_nums'];
  dataSource = ELEMENT_DATA;
  author_filter: boolean = false;
  total_commits: number = 0;
  submitted = false;
  compares: FormGroup;
  webService: WebSocketService;
  filterControl: FormControl = new FormControl(true)
  result: any = {};
  expandedElement: PeriodicElement | null;

  constructor(private fb: FormBuilder, webService: WebSocketService) {
    this.compares = this.fb.group(
      {
        compare_from: ["35730", Validators.required],
        compare_to: ["35736", Validators.required],

      },
      // {
      //   validator: MustMatch("compare_from", "compare_to"),
      // }
    );
    this.webService = webService;
  }

  ngOnInit() {
    this.compares.addControl('filter', this.filterControl);
    this.webService.listen('ecl_check_result').subscribe((resp:Response)=>{
      console.log(resp);
      this.result = resp;
      this.dataSource = resp.result
      this.dataSource.forEach(item=>this.total_commits+=item.commit_nums);
      this.submitted = false;
    })
  }

  updateData(){
    console.log('ngOnChanges' + this.author_filter)
    const data  = this.result.result;
    let newData = JSON.parse(JSON.stringify(data))
    this.total_commits = 0;
    if(this.author_filter) {
      const author_list = ['kapitanoam'] 
      
      newData.map(item => {
        let new_commits = item.commits.filter(commit=> !author_list.includes(commit.author));
        new_commits = new_commits.filter(commit => commit.rev.slice(1,) !== item.rangeFrom)
        item.commits = new_commits;
        item.commit_nums = new_commits.length;
        this.total_commits += new_commits.length
      })
      newData = newData.filter(item => item.commit_nums !== 0)
    } else {
      newData.forEach(item=>this.total_commits+=item.commit_nums);
    }
    this.dataSource = newData;
  }
  
  onSubmit() {
    console.log(this.compares)
    console.log(this.compares.value)
    this.submitted = true;
    this.resetData();
    // stop here if form is invalid
    if (this.compares.invalid) {
      return;
    }
    console.log(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.compares.value, null, 4)
    );
    
    const { compare_from, compare_to } = this.compares.value;
    console.log(compare_from + " " + compare_to);
    this.webService.emit('ecl_check', this.compares.value)
  }

  onReset() {
    this.submitted = false;
    // this.compares.patchValue({'filter':false})
    this.compares.reset();
  }
  resetData(){
    this.author_filter = false;
    this.dataSource = [];
    this.total_commits = 0;
  }
  clear(){
    this.filterControl.setValue(false)
  }
}
