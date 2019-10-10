import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  hero$;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) { }

  ngOnInit() {
    // 1era forma si detail hero es reutilizable en la misma vista
    // this.hero$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => this.service.getHero(params.get('id')))
    // );
    // 2da forma si detail hero se usa en otra vista aparte y navega la ruta hacia su componente
    let id = this.route.snapshot.paramMap.get('id');

    this.hero$ = this.service.getHero(id);
  }

  gotoHeroes() {
    this.router.navigate(['/heroes']);
  }
}
