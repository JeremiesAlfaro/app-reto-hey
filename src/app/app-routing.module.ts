import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: WelcomeComponent
}, {
  path: 'signin',
  component: SignInComponent
}, {
  path: 'menu',
  component: MenuComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
