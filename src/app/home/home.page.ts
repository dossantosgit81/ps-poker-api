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
  page: number = 0;
  ngOnInit(){
    this.pokemonsService.getPokemons(this.page).subscribe(res =>{
    this.pokemons = res.results;
   });
  }

  loadMore(){
    this.page++;
     this.pokemonsService.getPokemons(this.page).subscribe(res =>{
     this.pokemons = res.results;
   });
  }
  
  getIdPokemon(url: string){
    const parts = url.split("/");
    const id = parts[parts.length - 2]; 
    console.log(id); // "1"
    return id;
  }
}
