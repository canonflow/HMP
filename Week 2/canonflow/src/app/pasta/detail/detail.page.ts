import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PastaPage } from '../pasta.page';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: false,
})
export class DetailPage implements OnInit {
  index = 0;

  pasta: any = null;

  pastas = [
    {
      name: "SHRIMP SCAMPI",
      url: "https://www.unos.com/images/menus/pasta/Pasta_ShrimpScampi_8-20_300.jpg",
      description: "Shrimp sautéed with garlic, diced tomatoes and basil in a white wine sauce on vermicelli with parmesan",
      price: 42000
    },
    {
      name: "CHICKEN SPINOCCOLI",
      url: "https://www.unos.com/images/menus/pasta/Pasta_ChickenSpinoccoli_8-20_300.jpg",
      description: "Our housemade chicken roulade filled with mozzarella, feta, broccoli, spinach, tomatoes, garlic and basil, on top of penne tossed with sautéed pesto, alfredo and our chunky vine-ripened tomato sauce.",
      price: 35000,
    },
    {
      name: "CHICKEN & BROCCOLI ALFREDO",
      url: "https://www.unos.com/images/menus/whatsnew/CHICKEN_BROCCOLI_ALFREDO.png",
      description: "Cavatappi, chicken and broccoli tossed in alfredo sauce topped with parmesan cheese.",
      price: 38000,
    }, 
    {
      name: "DEEP DISH MAC & CHEESE",
      url: "https://www.unos.com/images/menus/pasta/Pasta_MacCheese_8-20_300.jpg",
      description: "Ooey, gooey, cheesy goodness penne with aged cheddar and parmesan baked in a deep dish pan.",
      price: 42000,
    }, 
    {
      name: "RATTLESNAKE PASTA",
      url: "https://www.unos.com/images/menus/pasta/Pasta_Rattlesnake_8-20_300.jpg",
      description: "Sautéed chicken and spicy alfredo tossed with penne pasta and topped with cheddar and slices of jalapeño. It may just bite back.",
      price: 36000,
    },
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = params['id'];
      this.pasta = this.pastas[this.index];
    });
  }

}
