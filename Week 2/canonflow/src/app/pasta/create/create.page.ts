import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodserviceService, IPasta } from 'src/app/foodservice.service';

// Camera
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  standalone: false
})
export class CreatePage implements OnInit {

  pasta: IPasta = {
    name: "",
    url: "",
    description: "",
    price: 0,
    isSpicy: false
  };

  listOfPrices: number[] = [];
  listOfSpicies: any[] = [
    {
      label: 'Spicy',
      value: true
    },
    {
      label: 'Not Spicy',
      value: false
    }
  ];

  public alertButtons = ['OK'];

  base64:any
  imageType:string='URL'
  new_url: string = ""
  
  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 50,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });
    const base64Image = 'data:image/png;base64,' + image.base64String;
    this.base64 = base64Image;

    console.log(this.base64);
  }


  constructor(
    private foodservice: FoodserviceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listOfPrices = this.generateNumberOption(30_000, 50_000, 2000)
  }

  generateNumberOption(start: number, end: number, step: number): number[] {
    const options: number[] = [];

    for (let i = start; i <= end; i += step) {
      options.push(i);
    }

    return options;
  }

  submitPasta() {
    alert(this.base64);
    return;
    this.foodservice.addPasta(this.pasta);
    this.pasta = {
      name: "",
      url: "",
      description: "",
      price: 0,
      isSpicy: false
    }
    this.router.navigate(['/pasta']);
  }

}
