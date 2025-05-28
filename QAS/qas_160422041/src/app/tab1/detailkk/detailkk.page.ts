import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IAnggotaKeluarga, KartuKeluargaService} from "../../kartu-keluarga.service";

@Component({
  selector: 'app-detailkk',
  templateUrl: './detailkk.page.html',
  styleUrls: ['./detailkk.page.scss'],
  standalone: false
})
export class DetailkkPage implements OnInit {

  id: number = 0;
  kk!: any;

  anggota: IAnggotaKeluarga = {
    nik: "",
    nama: "",
    jenisKelamin: "",
  }

  constructor(
    private route: ActivatedRoute,
    private kartuKeluargaService: KartuKeluargaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.kartuKeluargaService.detailKK(this.id).subscribe((data) => {
        this.kk = this.kartuKeluargaService.parseDetailKK(data);
        console.log(this.kk);
      });
    })
  }

  add() {
    this.kartuKeluargaService.addAnggota(this.anggota, this.kk).subscribe((data) => {
      console.log(data);
    });
    console.log(this.kk);
    this.router.navigate(['/tabs/tab1']);
  }

  delete(id: number) {
    this.kartuKeluargaService.deleteAnggota(id, this.kk).subscribe((data) => {
      console.log(data);
    });

    this.router.navigate(['/tabs/tab1']);
  }

}
