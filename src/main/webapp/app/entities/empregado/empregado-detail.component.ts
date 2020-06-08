import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEmpregado } from 'app/shared/model/empregado.model';

@Component({
  selector: 'jhi-empregado-detail',
  templateUrl: './empregado-detail.component.html',
})
export class EmpregadoDetailComponent implements OnInit {
  empregado: IEmpregado | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ empregado }) => (this.empregado = empregado));
  }

  previousState(): void {
    window.history.back();
  }
}
