import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficaComponent } from '../grafica/grafica.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProgressComponent } from '../progress/progress.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GraficaComponent,
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
  ],
  exports:[
    GraficaComponent,
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
