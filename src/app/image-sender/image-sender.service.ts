import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageSenderService {

  constructor(private http: HttpClient) { }

  public sendOcrRequest(image: string) {
    return this.http.post('http://localhost:55966/api/ocr/sendimage', image);
  }
}
