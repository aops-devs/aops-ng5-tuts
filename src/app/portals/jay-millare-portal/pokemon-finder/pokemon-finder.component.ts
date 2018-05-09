import { Router, ActivatedRoute } from '@angular/router';
import { JayMillarePortalService } from './../../../shared/services/jay-millare-portal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-finder',
  templateUrl: './pokemon-finder.component.html',
  styleUrls: ['./pokemon-finder.component.scss']
})
export class PokemonFinderComponent implements OnInit {
  pokemonList = [];
  constructor(
    private jayMillarePortalService: JayMillarePortalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.jayMillarePortalService.getPokemonList().subscribe(res => {
      this.pokemonList = res.results;
      console.log('MY POKEMONS: ', res.results);
    });
  }

  onPokemonSelectChange(pokemonIndex: string) {
    const id = parseInt(pokemonIndex, 10) + 1;
    this.router.navigate(['pokemon', id], { relativeTo: this.route });
  }
}
