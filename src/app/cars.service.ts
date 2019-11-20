import { Car } from './Car';

export class CarsService {

  dat = Date.now();

  constructor() { }

  getCars(): Car[] {
    return [{ id: 1, name: 'Volvo' }, { id: 2, name: 'Opel' },
    { id: 3, name: 'Fiat' }];
  }

  getTimeStamp() {
    return this.dat;
  }
}
