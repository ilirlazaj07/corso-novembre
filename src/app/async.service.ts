import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

export class AsyncService implements OnInit {
  
  private subject: Subject<number> = new Subject();
  private counter: number = 0;

  ngOnInit(): void {
    
  }

  constructor() { 
    // console.log('cosruttire service')

    // console.log('SERVICE')
    setInterval(() => {
      // console.log('set interval')
      this.counter ++;
      this.subject.next(this.counter);
    }, 1000);
  }

  getSubject() {
    return this.subject;
  }
}
