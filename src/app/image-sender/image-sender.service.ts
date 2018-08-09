import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiURL } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class ImageSenderService {

  constructor(private http: HttpClient) { }

  public sendOcrRequest(image: string) {
    return this.http.post(ApiURL + '/ocr/sendimage', image);
  }
}
