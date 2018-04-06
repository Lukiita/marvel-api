import { Component, OnInit } from "@angular/core";
import { SeriesService } from "../series.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-series-list",
  templateUrl: "./series-list.component.html",
  styleUrls: ["./series-list.component.css"]
})
export class SeriesListComponent {
  data: any;

  constructor(public series: SeriesService, public router: Router) {
    this.series.load().then((data: { data: { results: [{}] } }) => {
      this.series.dataArray = data.data.results;
    });
  }

  getDescription(id: number) {
    this.router.navigate(["serie", id]);
  }
}
