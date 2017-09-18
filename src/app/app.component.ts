import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { APP_TITLE } from './shared/constants';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Title } from '@angular/platform-browser';
import { NgServiceWorker } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public title$: BehaviorSubject<string>;
  public agreeToUpdate = true;

  constructor(
    private appService: AppService,
    private titleService: Title,
    private sw: NgServiceWorker
  ) {
    this.appService.setTitle(APP_TITLE);
    this.setTitle();
  }

  ngOnInit() {
    this.registerTitle();
    this.updateApp();
    // this.registerNotification();
    // this.listenNotification();
  }

  public updateApp() {
    this.sw.updates.subscribe(event => {
      console.log('update App');
      if (event.type === 'pending') {
        console.log('pending');
        // Ask user if they want to update?
        // if (this.agreeToUpdate) {
          this.sw.activateUpdate(event.version);
        // }
      } else {
        console.log('reload');
        // event.type === 'activation'
        // NGSW is now serving a new version
        location.reload();
      }
    });
  }

  /*public checkForUpdate() {
    this.sw.checkForUpdate().subscribe((e) => {
      console.log(e);
    });
  }*/

  private registerTitle() {
    this.title$ = this.appService.getTitle();
  }

  private setTitle() {
    this.titleService.setTitle(APP_TITLE);
  }

  /*private listenNotification() {
    this.sw.push.subscribe(notificationPayload => {
      // Process notification data
      console.log(notificationPayload);
    });
  }

  private registerNotification() {
    this.sw.registerForPush().subscribe(subscriptionObject => {
      // Send subscription data to the server
      console.log(subscriptionObject);
    });
  }*/
}
