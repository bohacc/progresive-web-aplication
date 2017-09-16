import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'home',
  templateUrl: 'home.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent implements OnInit {
  public title$: BehaviorSubject<string>;

  constructor(private appService: AppService) {
    this.title$ = this.appService.getTitle();
  }

  ngOnInit() {
  }
}
