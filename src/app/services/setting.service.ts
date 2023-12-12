import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map, tap } from 'rxjs';
import { Setting } from '../models/setting';
import { CONFIG_FILE_PATH } from '../consts/configs';

@Injectable()
export class SettingService {
  private _serverAddresses!: Setting;
  get serverAddresses() {
    return this._serverAddresses;
  }

  constructor(private _http: HttpClient) {}

  init(): () => Promise<Setting> {
    return () =>
      lastValueFrom(
        this._http.get(CONFIG_FILE_PATH).pipe(
          map((res) => res as Setting),
          tap((res) => (this._serverAddresses = res))
        )
      );
  }
}
