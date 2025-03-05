import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

interface Product {
  productName: string,
  productDate: Date,
  productPrice: number,
  productQuantity: number,
  decrease: boolean,
  increase: boolean,
}


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: false,
})
export class ListPage implements OnInit {

  // Interpolation Binding with Variable
  today: string = "March 5, 2025";
  currentDate: Date = new Date();

  is5DaysAgo = false;
  is5DaysNext = false;
  numberClicked = 0;

  // Object Binding
  product: Product = {
    productName: 'Iphone 15 Pro',
    productDate: new Date(),
    productPrice: 21_000_000,
    productQuantity: 0,
    increase: true,
    decrease: false,
  }
  totalAmount: number = this.product.productQuantity * this.product.productPrice;

  constructor() { }

  ngOnInit() {
  }

  // Interpolation Binding with Method / Function
  today_ind() {

    // ===== EXERCISE 1 =====
    const monthNames: Array<string> = [
      'Januari', 'Februari', 'Maret', 
      'April', 'Mei', 'Juni', 'Juli',
      'Agustus', 'September', 'Oktober',
      'November', 'Desember'
    ];

    const dayNames: Array<string> = [
      'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis',
      'Jumat', 'Sabtu',
    ];

    const day: string = dayNames[this.currentDate.getDay()]; 

    const date: number = this.currentDate.getDate();

    const month: number = this.currentDate.getMonth() + 1;  // By default, 0 is January and 11 is December
    const monthName = monthNames[month - 1];

    const year: number = this.currentDate.getFullYear();  // 4-digit year

    return `${day}, ${date}-${monthName}-${year}`;
  }


  // ===== EXERCISE 2 and 3 =====
  goYesterday() {
    this.currentDate.setDate(this.currentDate.getDate() - 1);
    this.numberClicked++;
    this.is5DaysNext = false;
    if (this.numberClicked == 5) this.is5DaysAgo = true;
  }

  goTomorrow() {
    this.currentDate.setDate(this.currentDate.getDate() + 1);
    this.numberClicked--;
    this.is5DaysAgo = false;
    if (this.numberClicked == -5) this.is5DaysNext = true;
  }

  resetDate() {
    this.currentDate = new Date();
    this.numberClicked = 0;
    this.is5DaysAgo = false;
    this.is5DaysNext = false;
  }

  // ===== EXERCISE 4 =====
  increaseProduct() {
    this.product.productQuantity++;
    this.product.decrease = true;
    if (this.product.productQuantity == 10) this.product.increase = false;

    this.totalAmount = this.product.productPrice * this.product.productQuantity;
  }

  decreaseProduct() {
    this.product.productQuantity--;
    this.product.increase = true;
    if (this.product.productQuantity == 0) this.product.decrease = false;

    this.totalAmount = this.product.productPrice * this.product.productQuantity;
  }
}
