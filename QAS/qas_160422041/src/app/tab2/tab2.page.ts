import { Component } from '@angular/core';
import {IAnggotaKeluarga, IKartuKeluarga, KartuKeluargaService} from "../kartu-keluarga.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  kk: IKartuKeluarga = {
    nomorKK: "",
    namaKepalaKeluarga: "",
    alamat: ""
  }

  kepalaKeluarga: IAnggotaKeluarga = {
    nik: "",
    nama: "",
    jenisKelamin: ""
  }

  constructor(
    private kartuKeluargaService: KartuKeluargaService,
    private router: Router,
  ) {}

  add() {
    this.kartuKeluargaService.addKK(this.kk, this.kepalaKeluarga).subscribe((data) => {
      console.log(data);
    });
    console.log(this.kk);
    console.log(this.kepalaKeluarga);
    this.router.navigate(['/tabs/tab1']);
  }

}
