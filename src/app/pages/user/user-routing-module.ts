import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllUsers} from './all/all-users';

const routes: Routes = [
    {
        path: '',
        component: AllUsers
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule {
}

