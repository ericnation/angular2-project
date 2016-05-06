import {Http} from "angular2/http";
import {Injectable} from "angular2/core";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class UsersService {
  private _baseUrl = 'http://jsonplaceholder.typicode.com/';

  constructor(private _http: Http){
  }

  getUsers(){
    return this._http.get(this._baseUrl + 'users')
      .map(res => res.json());
  }

  getUser(userId) {
    return this._http.get(this.getUserUrl(userId))
        .map(res => res.json());
  }

  addUser(user) {
    return this._http.post(this._baseUrl + 'users', JSON.stringify(user))
      .map(res => res.json());
  }

  updateUser(user) {
    return this._http.post(this.getUserUrl(user.id), JSON.stringify(user))
      .map(res => res.json());
  }

  private getUserUrl(userId) {
    return this._baseUrl + 'users/' + userId;
  }
}