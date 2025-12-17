import {Injectable} from '@angular/core';
import {HttpService} from '../../core/http.service';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpService: HttpService) {
    }

    getAllUsers() {
        return this.httpService.get({
            url: `${environment.api.path}/user/all`,
        });
    }
}
