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
  IonRouterLink,
  IonCol } from '@ionic/angular/standalone';
  import { PokemonsService } from '../services/pokemons.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [  
    IonContent, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonButton,
    RouterLink
     ],
})
export class HomePage {
 private pokemonsService = inject(PokemonsService);
  pokemons: any[] = [];
  ngOnInit(){
    this.pokemonsService.getPokemons(0).subscribe(res =>{
    this.pokemons = res.results;
   });
  }

}
