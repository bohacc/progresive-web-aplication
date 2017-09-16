import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppService {
  private title$: BehaviorSubject<string> = new BehaviorSubject(null);

  public setTitle(title: string) {
    this.title$.next(title);
  }

  public getTitle(): BehaviorSubject<string> {
    return this.title$;
  }
}
