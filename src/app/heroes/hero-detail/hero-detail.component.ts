import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) { }

  ngOnInit() {
    // 1era forma si detail hero es reutilizable en la misma vista
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getHero(params.get('id')))
    );
    // this.hero$.subscribe((data) => console.log(data)); // si no te suscribes al observable no lo puedes ver o usar
    // aqui el async del lado del html hace la suscripcion sin necesidad de hacer desde el codigo y le agrega un alias
    // 2da forma si detail hero se usa en otra vista aparte y navega la ruta hacia su componente
    // let id = this.route.snapshot.paramMap.get('id');

    // this.hero$ = this.service.getHero(id);
  }

  gotoHeroes(hero: Hero) {
    let heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', {id: heroId, foo: 'foo'}]);
  }
}
