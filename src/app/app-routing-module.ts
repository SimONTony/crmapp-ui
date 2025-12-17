import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth-module').then(m => m.AuthModule)
    },
    {
        path: 'persons',
        loadChildren: () => import('./pages/user/user-module').then(m => m.UserModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
