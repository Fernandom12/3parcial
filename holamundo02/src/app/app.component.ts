import { Component } from '@angular/core';
import { ComponenteUnoComponent }from './componente-uno/componente-uno.component';
import { ComponentDosComponent } from './component-dos/component-dos.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app  fernando!';
  autor = "Luis Fernando Morales Maldonado";
}
