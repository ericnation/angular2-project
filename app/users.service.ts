import {Http} from "angular2/http";
import {Injectable} from "angular2/core";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class UsersService {
  private _baseUrl = 'http://jsonplaceholder.typicode.com/';

  constructor(private _http: Http){
  }

  getUsers() {
    return this._http.get(this._baseUrl + 'users')
        .map(res => res.json());
  }
}