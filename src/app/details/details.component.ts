import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent  implements OnInit {
  private pokemonsService = inject(PokemonsService);

  constructor(private route: ActivatedRoute) { }
  pokemonDetail: any = {};
  ngOnInit() {
    const url = this.route.snapshot.paramMap.get('url');
    if(url !== null){
      this.pokemonDetail = this.pokemonsService.getPokemon(this.getIdPokemon(url)).subscribe(res => {
        console.log(res);
      });
    }
  }

  getIdPokemon(url: string){
    const parts = url.split("/");
    const id = parts[parts.length - 2]; 
    console.log(id); // "1"
    return id;
  }

}
