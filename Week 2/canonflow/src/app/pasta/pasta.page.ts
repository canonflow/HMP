import { Component, OnInit } from '@angular/core';
import { FoodserviceService, IPasta } from '../foodservice.service';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.page.html',
  styleUrls: ['./pasta.page.scss'],
  standalone: false,
})
export class PastaPage implements OnInit {

  jenistampilan = "card";

  pastas: IPasta[] = [];

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
  

  constructor(private foodservice: FoodserviceService) { }

  ngOnInit() {
    this.pastas = this.foodservice.pastas;
  }

}
