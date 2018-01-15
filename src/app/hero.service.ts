import { Injectable } from '@angular/core';
import { Hero } from './model/hero';
import { HEROES } from './model/hero-mock';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');    
    return of(HEROES);
  }

}
