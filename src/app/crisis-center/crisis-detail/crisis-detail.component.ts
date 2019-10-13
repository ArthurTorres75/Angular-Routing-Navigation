import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Crisis } from '../crisis';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { CrisisService } from '../crisis.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  crisis$: Observable<Crisis>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) { }

  ngOnInit() {
    // 1era forma si detail hero es reutilizable en la misma vista
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getCrisis(params.get('id')))
    );
    // this.hero$.subscribe((data) => console.log(data)); // si no te suscribes al observable no lo puedes ver o usar
    // aqui el async del lado del html hace la suscripcion sin necesidad de hacer desde el codigo y le agrega un alias
    // 2da forma si detail hero se usa en otra vista aparte y navega la ruta hacia su componente
    // let id = this.route.snapshot.paramMap.get('id');

    // this.hero$ = this.service.getHero(id);
  }

  gotoCrises(crisis: Crisis) {
    let crisisId = crisis ? crisis.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['../', {id: crisisId, foo: 'foo'}], { relativeTo: this.route });
  }
}
