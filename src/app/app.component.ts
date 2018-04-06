import { Component } from "@angular/core";
import { SeriesService } from "./series.service";
import { Router } from "@angular/router";
import { Input } from "@angular/compiler/src/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public router: Router, public series:SeriesService) {}
  goToList() {
    this.router.navigate([""]);
  }
  filterSeries(e:Event){
    let text = e.target.value;
    console.log(this.series.dataArray);
    let filterd = this.series.dataArray.filter((element:{id:number,title:string})=>{
      console.log(element);
      return element.title.includes(text);
    });
    //console.log(filterd);
  }
}
