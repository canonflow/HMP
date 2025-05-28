import { Component } from '@angular/core';
import {IKartuKeluarga, KartuKeluargaService} from "../kartu-keluarga.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  kk: any[] = [];

  constructor(
    private kartuKeluargaService: KartuKeluargaService,
  ) {}

  ngOnInit(): void {
    this.kartuKeluargaService.listKK().subscribe((data) => {
      this.kk = this.kartuKeluargaService.parseListKK(data);
    })
    // this.kk = [
    //   {
    //     id: 1,
    //     nomorKK: '1',
    //     alamat: "sdasd",
    //     namaKepalaKeluarga: "Sd"
    //   }
    // ]
  }

}
