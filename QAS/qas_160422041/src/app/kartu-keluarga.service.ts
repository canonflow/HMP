import { Injectable } from '@angular/core';

// Web Service
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export interface IKartuKeluarga {
  id?: number,
  nomorKK: string;
  alamat: string;
  namaKepalaKeluarga: string;
  anggota?: any[]
}

export interface IAnggotaKeluarga {
  id?: number;
  nik: string;
  nama: string;
  jenisKelamin: string;
}

const BASE_URL = "https://ubaya.xyz/hybrid/160422041/";

@Injectable({
  providedIn: 'root'
})
export class KartuKeluargaService {

  constructor(
    private http: HttpClient
  ) { }

  listKK(): Observable<any> {
    return this
      .http.get(BASE_URL + "daftar_kk.php")
  }

  parseListKK(data: IKartuKeluarga[]) {
    let newData = data.map((d: any) => {
      const {id, nomor, alamat, nama_kepala_keluarga, anggota } = d;
      console.log(d);
      return {
        id: id,
        alamat: alamat,
        nomor: nomor,
        namaKepalaKeluarga: nama_kepala_keluarga,
        anggota: anggota
      }
    });

    return newData;
  }

  detailKK(id: number): Observable<any> {
    return this
      .http.get(BASE_URL + "detail_kk.php?nomor_kk=" + id);
  }

  parseDetailKK(kartuKeluarga: any) {
    const {id, nomor, alamat, nama_kepala_keluarga, anggota } = kartuKeluarga;
    return {
      id: id,
      alamat: alamat,
      nomor: nomor,
      namaKepalaKeluarga: nama_kepala_keluarga,
      anggota: anggota
    }
  }

  addKK(kartuKeluarga: IKartuKeluarga, kepalaKeluarga: IAnggotaKeluarga): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set("nomor_kk", kartuKeluarga.nomorKK);
    body.set("alamat", kartuKeluarga.alamat);
    body.set("nik_kepala", kepalaKeluarga.nik);
    body.set("nama_kepala", kepalaKeluarga.nama);
    body.set("jenis_kelamin", kepalaKeluarga.jenisKelamin);
    const urlEncodedData = body.toString();
    return this
      .http
      .post(BASE_URL + "tambah_kk.php", urlEncodedData, { headers })
  }

  addAnggota(anggotaKeluarga: IAnggotaKeluarga, kartuKeluarga: IKartuKeluarga): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set("nik", anggotaKeluarga.nik);
    body.set("nama", anggotaKeluarga.nama);
    body.set("jenis_kelamin", anggotaKeluarga.jenisKelamin);
    body.set("id_kk", kartuKeluarga.id!.toString());

    const urlEncodedData = body.toString();
    return this
      .http
      .post(BASE_URL + "tambah_anggota.php", urlEncodedData, { headers})
  }

  deleteAnggota(id_anggota: number, kartuKeluarga: IKartuKeluarga): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set("id_anggota", id_anggota.toString());
    body.set("id_kk", kartuKeluarga.id!.toString());

    const urlEncodedData = body.toString();
    return this
      .http
      .post(BASE_URL + "hapus_anggota.php", urlEncodedData, { headers });
  }
}
