import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ToolsComponent } from './modules/tools/tools.component';
import { NotfoundComponent } from './modules/notfound/notfound.component';
import { CoopComponent } from './modules/coop/coop.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }, {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'tools',
        component: ToolsComponent
      },
      {
        path: 'coops',
        component: CoopComponent
      },
      { path: '**', component: NotfoundComponent}
    ],
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
