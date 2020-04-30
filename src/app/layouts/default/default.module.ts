import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatSlideToggleModule, MatCardModule, 
  MatFormFieldModule, MatCheckboxModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatTableModule
} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { ToolsComponent } from 'src/app/modules/tools/tools.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotfoundComponent } from 'src/app/modules/notfound/notfound.component';
import { CoopComponent } from 'src/app/modules/coop/coop.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    ToolsComponent,
    CoopComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}
  ]
})
export class DefaultModule { }
