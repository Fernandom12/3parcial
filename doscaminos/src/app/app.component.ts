import { Component } from '@angular/core';
import { Estado } from './estado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  carreras = ["manto","tic","tur","ga","te"];

  estados=[ new Estado (1,"aguasCalientes","ags"),
  new Estado(2,"BajaCalifornia","Bcf"),
  new Estado(3,"Chiapas","Chis"),
  new Estado(4,"Durango","Durg")
];
}
