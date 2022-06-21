import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-details-personne',
  templateUrl: './details-personne.component.html',
  styleUrls: ['./details-personne.component.css']
})
export class DetailsPersonneComponent implements OnInit {
  personne: Personne = {};
  idPersonne: number = 0;
  constructor(
    private route: ActivatedRoute,
    private ps: PersonneService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      this.idPersonne = +(res.get('id') ?? "0");
      this.ps.getOnePersonne(this.idPersonne).subscribe(p => {
        this.personne = p;
      })
    })
  }
  modifierPersonne() {
    this.ps.editPersonne(this.personne).subscribe(res => {
      this.router.navigateByUrl('/personne');
    })
  }

}
