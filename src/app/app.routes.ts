import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user-profile', component: UserProfileComponent },
  // { path: '**', component: PageNotFoundComponent }
];
