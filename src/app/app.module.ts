import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './cars/car/car.component';
import { FormsModule } from '@angular/forms';
import { CarsService } from './cars.service';
import { HttpClientModule } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { API_URL } from './injectionRootCarsUrl';
import { AsyncService } from './async.service';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { CarsRoutingComponent } from './cars-routing/cars-routing.component';
import { CarRoutingComponent } from './car-routing/car-routing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoutingCustomModule } from './routing-custom/routing-custom.module';
import { LazyLoadedModule } from './lazy-loaded/lazy-loaded.module';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    HomeComponent,
    InfoComponent,
    CarsRoutingComponent,
    CarRoutingComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingCustomModule
  ],
  providers: [AsyncService, { provide: CarsService, useClass: CarsService },
    { provide: API_URL, useValue: environment.carUrl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
