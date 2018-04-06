import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../series.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-serie',
  templateUrl: './selected-serie.component.html',
  styleUrls: ['./selected-serie.component.css']
})
export class SelectedSerieComponent implements OnInit {

  description:any;
  characters: string[] = [];
  creators: string[] = [];
  stories: string[] = [];
  comics: number;

  constructor(public series: SeriesService, public route: ActivatedRoute) {
    route.params.subscribe((data)=>{
      this.getDescription(data.id);
    });
   }

  ngOnInit() {
  }

  getDescription(id: number) {
    this.series.getDescricao(id).then((data: { data: { results: {} } }) => {
      console.log(data.data.results[0]);
      this.description = data.data.results[0];
      //Criadores
      this.description.creators.items.forEach(element => {
        this.creators.push(element.name)
      });
      //Personagens
      this.description.characters.items.forEach(element => {
        this.characters.push(element.name)
      });
      //Histórias em Quadrinhos
      this.comics = this.description.comics.items.length;

      //Historias
      this.description.stories.items.forEach(element => {
        this.stories.push(element.name)
      });



    });
  }
}
