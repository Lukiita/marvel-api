import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import 'rxjs/add/operator/map';
import { resolve } from 'url';

const BACKEND_URL = 'https://gateway.marvel.com:443/v1/public/series';
const PRIVATE_KEY = '52c56ebaf487eef3a5d47971423a839365a554e4'
const PUBLIC_KEY = '61968222f197919a880c18427a2e811c'

@Injectable()
export class SeriesService {

  data: any;
  dataArray: [{}];

  constructor(public http: HttpClient) {
    this.getDescricao(18454);
  }

  getUrl(){
    let md5 = new Md5();

    var timestamp = Number(new Date());
    var hash = Md5.hashStr(timestamp + PRIVATE_KEY + PUBLIC_KEY);

    return `?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;
  }

  load():Promise<{}>{
    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(`${BACKEND_URL}${this.getUrl()}`)
      .subscribe(data=>{
        this.data = data;
        console.log(data);
        resolve(data);
      });
    });
  }

  getDescricao(id: number):Promise<{}>{
    return new Promise(resolve => {
      this.http.get(`${BACKEND_URL}/${id}${this.getUrl()}`)
      .subscribe(data => {
        resolve(data);
      });
    });
  }
}
