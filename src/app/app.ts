import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inicio } from "./componetes/inicio/inicio";
import { Nabvar } from "./componetes/interface/nabvar/nabvar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nabvar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portafolio_tpy');
}
