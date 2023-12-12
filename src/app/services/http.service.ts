import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingService } from './setting.service';

@Injectable()
export class HttpService {
  constructor(
    private _http: HttpClient,
    private _settingService: SettingService
  ) {}

  postData(url: string, payload: any) {
    return this._http.post(
      this._settingService.serverAddresses.serverAddress + url,
      payload
    );
  }
}
