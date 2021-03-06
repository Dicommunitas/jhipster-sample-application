import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ITarefa, Tarefa } from 'app/shared/model/tarefa.model';
import { TarefaService } from './tarefa.service';

@Component({
  selector: 'jhi-tarefa-update',
  templateUrl: './tarefa-update.component.html',
})
export class TarefaUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    titulo: [],
    descricao: [],
  });

  constructor(protected tarefaService: TarefaService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ tarefa }) => {
      this.updateForm(tarefa);
    });
  }

  updateForm(tarefa: ITarefa): void {
    this.editForm.patchValue({
      id: tarefa.id,
      titulo: tarefa.titulo,
      descricao: tarefa.descricao,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const tarefa = this.createFromForm();
    if (tarefa.id !== undefined) {
      this.subscribeToSaveResponse(this.tarefaService.update(tarefa));
    } else {
      this.subscribeToSaveResponse(this.tarefaService.create(tarefa));
    }
  }

  private createFromForm(): ITarefa {
    return {
      ...new Tarefa(),
      id: this.editForm.get(['id'])!.value,
      titulo: this.editForm.get(['titulo'])!.value,
      descricao: this.editForm.get(['descricao'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITarefa>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
