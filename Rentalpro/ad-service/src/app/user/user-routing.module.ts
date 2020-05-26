import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { SignUpComponent } from './sign-up/sign-up.component'
import { SignInComponent } from './sign-in/sign-in.component'
import { UserProfileComponent } from './user-profile/user-profile.component'
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: UserComponent,
    children: [
      {
        path: "register",
        component: SignUpComponent
      },
      {
        path: "login",
        component: SignInComponent
      },
      {
        path: "userProfile",
        component: UserProfileComponent,
        canActivate:[AuthGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
