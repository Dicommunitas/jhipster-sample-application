import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared/shared.module';
import { TrabalhoComponent } from './trabalho.component';
import { TrabalhoDetailComponent } from './trabalho-detail.component';
import { TrabalhoUpdateComponent } from './trabalho-update.component';
import { TrabalhoDeleteDialogComponent } from './trabalho-delete-dialog.component';
import { trabalhoRoute } from './trabalho.route';

@NgModule({
  imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(trabalhoRoute)],
  declarations: [TrabalhoComponent, TrabalhoDetailComponent, TrabalhoUpdateComponent, TrabalhoDeleteDialogComponent],
  entryComponents: [TrabalhoDeleteDialogComponent],
})
export class JhipsterSampleApplicationTrabalhoModule {}
