import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodserviceService, IPasta } from 'src/app/foodservice.service';

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
