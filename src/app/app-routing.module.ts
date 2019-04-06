import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test1Component } from './modules/components/test1/test1.component';
import { Test2Component } from './modules/components/test2/test2.component';
import { MaitenanceGuard } from './services/guards/maitenance.guard';

const routes: Routes = [
  {
    path: 'test1',
    component: Test1Component,
    canActivate: [MaitenanceGuard],
  },
  {
    path: 'test2',
    component: Test2Component,
    canActivate: [MaitenanceGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        initialNavigation: 'enabled',
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
