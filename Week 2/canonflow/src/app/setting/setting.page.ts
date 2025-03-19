import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
  standalone: false,
})
export class SettingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  photoUrl: string = "";
  password: string = "";
  isMoreThanSix: boolean = false;
  isIncludeNumber: boolean = false;
  isIncludeSpecialCharacter: boolean = false;

  checkPassword() {
    this.isMoreThanSix = (this.password.length > 6) ? true : false;
    this.isIncludeNumber = (/\d/.test(this.password)) ? true : false;
    this.isIncludeSpecialCharacter = (/[!@#$%^&*]+/.test(this.password)) ? true : false;
  }

}
