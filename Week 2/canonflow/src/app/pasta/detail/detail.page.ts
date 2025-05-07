import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PastaPage } from '../pasta.page';
import { FoodserviceService, IPasta } from 'src/app/foodservice.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: false,
})
export class DetailPage implements OnInit {
  index = 0;

  pasta!: any;


  constructor(private route: ActivatedRoute, private foodservice: FoodserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = params['id'];
      // this.pasta = this.foodservice.pastas[this.index]
      this.foodservice.pastaDetail(this.index).subscribe((data) => {
        // this.pasta = this.foodservice.parsePastaList(data)[this.index]
        this.pasta = this.foodservice.parsePasta(data);
        console.log(this.pasta)
      })
    });
  }

}
