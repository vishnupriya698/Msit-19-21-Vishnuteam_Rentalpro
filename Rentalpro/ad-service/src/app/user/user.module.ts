import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  declarations: [SignUpComponent, UserComponent, SignInComponent, UserProfileComponent]
})
export class UserModule { }
