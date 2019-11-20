import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestLazyLoadingComponent } from './test-lazy-loading/test-lazy-loading.component';
import { Routes, RouterModule } from '@angular/router';

const rotte: Routes = [
  { path: 'tests', component: TestLazyLoadingComponent }
]

@NgModule({
  declarations: [TestLazyLoadingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(rotte)
  ]
})
export class LazyLoadedModule { }
