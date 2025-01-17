import { Routes } from '@angular/router';
import { FaceLivenessComponent } from './components/face-liveness/face-liveness.component';
import { StatusSuccessComponent } from './components/status-success/status-success.component';
import { StatusFailureComponent } from './components/status-failure/status-failure.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: LandingPageComponent },
      { path: 'recognize', component: FaceLivenessComponent },
      { path: 'success', component: StatusSuccessComponent },
      { path: 'failure', component: StatusFailureComponent },
    ]
},
// if no valid route redirect to landing page
{ path: '**', redirectTo: '' },
];
