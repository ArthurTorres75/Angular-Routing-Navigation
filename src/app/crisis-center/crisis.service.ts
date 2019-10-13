import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { MessageService } from '../message.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {
  static nextCrisisId = 100;
  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISES);

  constructor(private messageService: MessageService) { }

  getCrises() { return this.crises$; }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      // (+) before `id` turns the string into a number
      map((crisis: Crisis[]) => crisis.find(crisis => crisis.id === +id))
    );
  }
}
