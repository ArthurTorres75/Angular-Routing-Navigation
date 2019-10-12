import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisHomeComponent } from './crisis-home/crisis-home.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';


const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '', component: CrisisListComponent,
        children: [
          {
            path: ':id', component: CrisisDetailComponent
          },
          {
            path: '', component: CrisisHomeComponent 
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(crisisCenterRoutes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }
