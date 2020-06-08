import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { RegiaoDetailComponent } from 'app/entities/regiao/regiao-detail.component';
import { Regiao } from 'app/shared/model/regiao.model';

describe('Component Tests', () => {
  describe('Regiao Management Detail Component', () => {
    let comp: RegiaoDetailComponent;
    let fixture: ComponentFixture<RegiaoDetailComponent>;
    const route = ({ data: of({ regiao: new Regiao(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [JhipsterSampleApplicationTestModule],
        declarations: [RegiaoDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(RegiaoDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(RegiaoDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load regiao on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.regiao).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
