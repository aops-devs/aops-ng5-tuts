import { ActivatedRoute, ParamMap } from '@angular/router';
import { JayMillarePortalService } from './../../../shared/services/jay-millare-portal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemonId = '';
  pokemonDetails = [];
  constructor(
    private route: ActivatedRoute,
    private jayMillarePortalService: JayMillarePortalService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.pokemonId = params.get('id');
      console.log('Pokemon ID param: ', this.pokemonId);
      this.pokemonId !== ''
        ? this.getPokemonDetails()
        : console.log('Pokemon is null!');
    });

    console.log('--NG ON INIT--');
  }

  getPokemonDetails() {
    this.jayMillarePortalService
      .getPokemonDetailsById(this.pokemonId)
      .subscribe(
        res => {
          this.pokemonDetails = [res];
          console.log(this.pokemonDetails);
        },
        (error: any) => {
          this.pokemonDetails = [];
        },
        () => {}
      );
  }
}
