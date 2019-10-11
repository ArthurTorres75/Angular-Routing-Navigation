import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const crisisCenterRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(crisisCenterRoutes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }
