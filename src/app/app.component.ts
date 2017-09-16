import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { APP_TITLE } from './shared/constants';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public title$: BehaviorSubject<string>;

  constructor(
    private appService: AppService,
    private titleService: Title
  ) {
    this.appService.setTitle(APP_TITLE);
  }

  ngOnInit() {
    this.title$ = this.appService.getTitle();
  }

  setTitle() {
    this.titleService.setTitle(APP_TITLE);
  }
}
