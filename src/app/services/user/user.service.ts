import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { USER_SIGNUP } from 'src/app/consts/userAPIs';
import { Response } from 'src/app/models/signupResponse';
import { User } from 'src/app/models/user';
import { HttpService } from 'src/app/services/http.service';

@Injectable()
export class UserService {
  constructor(private _httpService: HttpService) {}

  signupUser(payload: User) {
    return this._httpService
      .postData(USER_SIGNUP, payload)
      .pipe(map((res) => res as Response));
  }
}
