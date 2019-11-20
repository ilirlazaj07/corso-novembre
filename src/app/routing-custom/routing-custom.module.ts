import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CarsRoutingComponent } from '../cars-routing/cars-routing.component';
import { CarGuard } from '../car.guard';
import { CarRoutingComponent } from '../car-routing/car-routing.component';
import { InfoComponent } from '../info/info.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { LazyLoadedModule } from '../lazy-loaded/lazy-loaded.module';

const rotte: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cars', component: CarsRoutingComponent, canActivateChild: [CarGuard],
    canActivate: [CarGuard], children: [
      { path: ':id', component: CarRoutingComponent }
    ]
  },
  { path: 'info', component: InfoComponent },
  { path: 'tests', loadChildren: () => import('../lazy-loaded/lazy-loaded.module').then(e => e.LazyLoadedModule) },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LazyLoadedModule,
    RouterModule.forRoot(rotte)
  ],
  exports: [RouterModule]
})
export class RoutingCustomModule { }
