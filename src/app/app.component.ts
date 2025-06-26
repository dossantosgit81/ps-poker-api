import { Component } from '@angular/core';
import { IonApp, 
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonTitle
 } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle],
})
export class AppComponent {
  constructor() {}
    getIdPokemon(url: string){
    const parts = url.split("/");
    const id = parts[parts.length - 2]; 
    console.log(id); // "1"
    return id;
  }
}
