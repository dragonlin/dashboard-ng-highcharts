import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  
  title = 'dashboard';
  
  constructor(private websocketService: WebSocketService){}

  ngOnInit(){
    this.websocketService.listen('test').subscribe((data)=>{
      console.log(data);
    })
  }

  onLogin(){
    this.websocketService.emit('user_login', {'tokenId':'fda', 'userId':'hello', 'socketId':'fda'})
  }
}