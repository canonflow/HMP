import { Injectable } from '@angular/core';

// Web Service
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface IPasta {
  id?: number,
  name: string,
  url: string,
  description: string,
  price: number,
  isSpicy?: boolean
}

@Injectable({
  providedIn: 'root'
})

export class FoodserviceService {

  constructor(
    private http: HttpClient
  ) { }

  pastaList(): Observable<any> {
    // let data = this.http.get("https://ubaya.xyz/hybrid/160422041/pastas.php")
    return this.http.get("https://ubaya.xyz/hybrid/160422041/pastas.php");
  }

  searchPasta(name: string): Observable<any> {
    return this.http.get("https://ubaya.xyz/hybrid/160422041/pastas.php?search=" + name);
  }

  position_xy(): Observable<any> {
    return this
      .http
      .get("https://ubaya.xyz/hybrid/160422041/posisi_xy.php")
  }

  parsePastaList(data: IPasta[]) {
    let newData =  data.map((d: any) => {
      const { is_spicy, ...rest } = d;
      return {
        ...rest,
        isSpicy: (is_spicy == 1) ? true : false
      }
    });

    return newData;
  }

  pastaDetail(id: number): Observable<any> {
    return this.http.get("https://ubaya.xyz/hybrid/160422041/pasta_detail.php?id=" + id);
  }

  parsePasta(pasta: any) {
    const { is_spicy, ...rest } = pasta;
    return {
      ...rest,
      isSpicy: (is_spicy == 1) ? true : false
    };
  }

  // pastas: IPasta[] = [
  //   {
  //     name: "SHRIMP SCAMPI",
  //     url: "https://www.unos.com/images/menus/pasta/Pasta_ShrimpScampi_8-20_300.jpg",
  //     description: "Shrimp sautéed with garlic, diced tomatoes and basil in a white wine sauce on vermicelli with parmesan",
  //     price: 42000,
  //     isSpicy: true,
  //   },
  //   {
  //     name: "CHICKEN SPINOCCOLI",
  //     url: "https://www.unos.com/images/menus/pasta/Pasta_ChickenSpinoccoli_8-20_300.jpg",
  //     description: "Our housemade chicken roulade filled with mozzarella, feta, broccoli, spinach, tomatoes, garlic and basil, on top of penne tossed with sautéed pesto, alfredo and our chunky vine-ripened tomato sauce.",
  //     price: 35000,
  //     isSpicy: true,
  //   },
  //   {
  //     name: "CHICKEN & BROCCOLI ALFREDO",
  //     url: "https://www.unos.com/images/menus/whatsnew/CHICKEN_BROCCOLI_ALFREDO.png",
  //     description: "Cavatappi, chicken and broccoli tossed in alfredo sauce topped with parmesan cheese.",
  //     price: 38000,
  //     isSpicy: false,
  //   },
  //   {
  //     name: "DEEP DISH MAC & CHEESE",
  //     url: "https://www.unos.com/images/menus/pasta/Pasta_MacCheese_8-20_300.jpg",
  //     description: "Ooey, gooey, cheesy goodness penne with aged cheddar and parmesan baked in a deep dish pan.",
  //     price: 42000,
  //     isSpicy: false,
  //   },
  //   {
  //     name: "RATTLESNAKE PASTA",
  //     url: "https://www.unos.com/images/menus/pasta/Pasta_Rattlesnake_8-20_300.jpg",
  //     description: "Sautéed chicken and spicy alfredo tossed with penne pasta and topped with cheddar and slices of jalapeño. It may just bite back.",
  //     price: 36000,
  //     isSpicy: false,
  //   },
  // ];

  addPasta(pasta: IPasta) {
    // this.pastas.push(pasta);
  }
}
