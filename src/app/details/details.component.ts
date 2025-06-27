import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../services/pokemons.service';
import { 
  IonContent, 
 } from '@ionic/angular/standalone';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  imports: [IonContent]
  
})
export class DetailsComponent  implements OnInit {
  private pokemonsService = inject(PokemonsService);

  constructor(private route: ActivatedRoute) { }
  pokemonDetail: any = {};
  ngOnInit() {
    const url = this.route.snapshot.paramMap.get('url');
    if(url !== null){
       this.pokemonsService.getPokemon(this.getIdPokemon(url)).subscribe(res => {
        console.log(res);
        console.log(res.abilities[0].ability.name)
        this.pokemonDetail = res;
      });
    }
  }

  getIdPokemon(url: string){
    const parts = url.split("/");
    const id = parts[parts.length - 2]; 
    return id;
  }

}
