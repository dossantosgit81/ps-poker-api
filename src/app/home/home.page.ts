import { Component, inject } from '@angular/core';
import { IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent,
  IonGrid,
  IonRow,
  IonButton,
  IonCol } from '@ionic/angular/standalone';
  import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonButton,
     ],
})
export class HomePage {
 private pokemonsService = inject(PokemonsService);
  pokemons: any[] = [];
  ngOnInit(){
    this.pokemonsService.getPokemons(0).subscribe(res =>{
    this.pokemons = res.results;
   });
    console.log("hello");
  }
}
