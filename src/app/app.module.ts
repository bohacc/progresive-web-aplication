import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppShellModule } from '@angular/app-shell';
import {
  MdProgressBarModule,
  MdToolbarModule,
  MdMenuModule,
  MdProgressSpinnerModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileModule } from './components/user-profile/user-profile.module';
import { AppMenuComponent } from './components/app-menu/app-menu.component';
import { HomeComponent } from './components/home/home.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppShellModule.runtime(),
    RouterModule.forRoot(
      ROUTES,
      {
        useHash: false,
        // preloadingStrategy: PreloadAllModules,
        initialNavigation: 'enabled'
      }
    ),
    MdProgressBarModule,
    MdToolbarModule,
    MdMenuModule,
    MdProgressSpinnerModule,
    BrowserAnimationsModule,
    UserProfileModule
  ],
  providers: [ AppService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
