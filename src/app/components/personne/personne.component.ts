import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  personnes: Array<Personne> = [];
  constructor(private ps: PersonneService) { }

  ngOnInit(): void {
    this.ps.getAllPersonnes().subscribe(res => {
      this.personnes = res;
    })
  }

}
