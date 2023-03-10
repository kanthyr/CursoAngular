import { Component, OnInit } from '@angular/core';
import {Camera, CameraDirection, CameraResultType, CameraSource} from '@capacitor/camera';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async takePhoto(): Promise<void> {
    const image = await Camera.getPhoto({
      quality: 50,
      width: 512,
      height: 512,
      allowEditing: false,
      source: CameraSource.Prompt,
      resultType: CameraResultType.DataUrl,
      direction: CameraDirection.Front
    });
    const imageUrl = image.dataUrl;
    console.log(imageUrl);
  }

}
