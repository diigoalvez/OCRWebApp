import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageSenderService } from './image-sender.service';

@Component({
  selector: 'app-image-sender',
  templateUrl: './image-sender.component.html',
  styleUrls: ['./image-sender.component.css']
})
export class ImageSenderComponent implements OnInit {

  @ViewChild('fileInput') fileInput;
  jsonResult: any;

  constructor(private imageSenderService: ImageSenderService) { }

  ngOnInit() {
  }

  public sendOcrRequest(files: FileList): void {
    const formData = new FormData();
    console.log(files);
    if (files.length == 0) {
      alert('no image selected');
    }
    else {
      this.jsonResult = 'Sending...';
      let file = files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSenderService.sendOcrRequest(reader.result).
        subscribe(result => this.jsonResult = JSON.parse(JSON.stringify(result)))
      }
    }
  }
}
