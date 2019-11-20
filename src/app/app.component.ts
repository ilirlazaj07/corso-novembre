import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { CarsService } from './cars.service';
import { API_URL } from './injectionRootCarsUrl';
import { resolve } from 'url';
import { from, Observable, Observer, fromEvent, concat, timer, interval, BehaviorSubject, AsyncSubject, ReplaySubject } from 'rxjs';
import  { take, skip, map, concatMap, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Car } from './Car';
import { AsyncService } from './async.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  
  ngAfterViewInit(): void {
    console.log(' messaggio da ngAfterViewInit')
  }

  constructor(
    private asyncService: AsyncService,
    private http : HttpClient,
    private carsService: CarsService,
    @Inject(API_URL) private carsUrl: string 
  ) {
    console.log(' messaggio da constructor')
  }

  prova: string = '';


  testoAsync;

  ngOnInit(): void {


    const replaySubject$ = new ReplaySubject<string>()

    replaySubject$.subscribe(console.log);

    replaySubject$.next('PRIMO');

    replaySubject$.next('SECONDO');

    //replaySubject$.complete();

    replaySubject$.subscribe(console.log);

/** 
    const ayncSubject$ = new AsyncSubject<string>();

    ayncSubject$.subscribe(console.log);

    ayncSubject$.next('PRIMO');

    ayncSubject$.next('SECONDO');

    ayncSubject$.complete();

    ayncSubject$.subscribe(console.log);

   const behaveourSubject$ = new BehaviorSubject('INIT VALUE');

    behaveourSubject$.subscribe(
      valore => console.log("Primo sottoScrittore: " + valore)
    );

    behaveourSubject$.next('PRIMO');

    behaveourSubject$.next('SECONDO');

    behaveourSubject$.complete();

    behaveourSubject$.subscribe(
      valore => console.log("Secondo sottoScrittore: " + valore)
    );

    behaveourSubject$.next('TERZO');

    **/

    const chiamata1$ = this.http.get<Array<Car>>(this.carsUrl);

    

    const obs6$ = fromEvent(document.querySelector('.inputApp'), 'input')
    .pipe( 
      map((e : Event) => {
         return (e.target as HTMLInputElement).value;
      }),
      switchMap(() => chiamata1$)
    );

    

   // const a = obs6$.subscribe(input =>{
    //  console.log('input  ' , input)
   // })

    const obs4$ = concat(timer(2000), interval(1000)).pipe(
      skip(1),
      take(10)

    );

    // obs4$.subscribe(value => {
    //   console.log('value   ',value);
    // })

    // console.log(' messaggio da ngOnInit')
    
    this.asyncService.getSubject().subscribe(res => {
      // console.log('service', res);
    })



    // const original$ = fromEvent(document.querySelector('.classe'), 'click');

    // original$.toPromise().then( res => {
    //   console.log("SUBSCRIBE", res);
    // })
    // original$.subscribe(res => {
    //   console.log("SUBSCRIBE", res);
    // })
    // const chiamata1$ = this.http.get<Array<Car>>(this.carsUrl);
    
    // const prom1 = chiamata1$.toPromise();

    // prom1.then( a => {
    //   alert('OK funziona')
    // })

    // function interceptEvent(elem, evento) {
    //   return new Observable(observer => {
    //     const handler = (e: Event) => {
    //       // console.log('sono nell\'handler')
    //       observer.next('EVENTO INTERCETTATO');
    //     }
    //     elem.addEventListener(evento, handler);
    //     return () => {
    //       elem.removeEventListener(evento, handler);
    //     }
    //   })
    // }

    // const int1$= interceptEvent(document.querySelector('.classe'), 'click');

    // console.log(int1$);
    // //setTimeout(() => {
    // const retPro = int1$.toPromise();
    // console.log(retPro);

    // retPro.then(rea => {
    //   console.log('PROMISE')
    //   console.log(rea);
    // })
      
    //}, 2000);
    // const sub1 = int1$.subscribe(next => {
    //   console.log(next);
    // });

    // const custom$ = new Observable<number>(
    //   (observer: Observer<number>) => {

    //     setTimeout(
    //       () => {
    //         observer.next(2)
    //       }, 2000
    //     );

    //     setTimeout(
    //       () => {
    //         observer.next(4)
    //       }, 4000
    //     );

    //     setTimeout(
    //       () => { observer.complete() }, 5000
    //     );

    //     setTimeout(
    //       () => { observer.next(7) }, 7000
    //     );

        // return ({unsubscribe: ()=> console.log('SEI STATO CANCELLATO')})

      // }
    // );


    // const customSubs = custom$.subscribe({
    //   next: (valore) => console.log('OBS: ' + valore),
    //   error: (error) => {
    //     console.error(error)
    //   },
    //   complete: () =>
    //     console.log('COMPLETATA OBS')
    // });

    // setTimeout(() => {
    //   customSubs.unsubscribe();
    //   // sub1.unsubscribe();

    // }, 10000);

    /**
    custom$.subscribe(
      (valore) => console.log('OBS: ' + valore),
      (error) => {
        console.error(error)
      },
      () => { console.log('COMPLETATA OBS') }

    );
    
     */
    // const that = this;
    // const getCars = function () {
    //   const promise = fetch(that.carsUrl).then(
    //     data => data.json()
    //   );
    //   console.log(promise);
    //   return promise;
    // };

    // getCars().then(
    //   qualcosa => {
    //     console.log('QUALCOSA =>>>>>>>>> ' + qualcosa);
    //     console.log(qualcosa);
    //   } 
    // ).catch(console.error);

    // const obs1$ = from(getCars()).subscribe((res) => {
    //   console.log('RES =>>>>>>>>> ' + res);
    //   console.log(res);
    // });

    // function getFirst<T>(param: T, param2: T): Promise<T> {
    //   return new Promise((res, rej) => {
    //     console.log("Sto testando con " + param + ' e ' + param2);
    //     if (param == param2) {
    //       res(param);
    //     } else {
    //       rej(console.error("Errore"));
    //     }

    //   });
    // };

    // const promise1 = getFirst<number>(5, 3);
    // const promise2 = getFirst<string>('5', '5');
    // //const all = Promise.all([promise1, promise2]);
    // const all = Promise.race([promise1, promise2]);

    //all.then(console.log).catch(console.error).finally(() => {console.log('Fatto tutto')});



    // this.testoAsync = new Promise(
    //   (resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(
    //         new Promise(
    //           (res, rej) => {
    //             setTimeout(() => {
    //               res('La Fine !')
    //             }, 2000)
    //           }
    //         )
    //       )

    //     }, 3000);
    //   }
    // );


    // this.emulaObservable();


  //   console.log('URL: ' + this.carsUrl);

  //   console.log(this.carsService.getTimeStamp());

  //   setTimeout(
  //     (function () {
  //       this.title = "ALTRO";
  //       console.log(this.title);
  //     }).bind(this), 3000
  //   );

  // }
  // title = 'corso-novembre';

  // async emulaObservable() {

  //   const qualcosa = await this.testoAsync;

  //   console.log('ASYNC TEST OK !!!: ' + qualcosa);

  }


}
// IIFE