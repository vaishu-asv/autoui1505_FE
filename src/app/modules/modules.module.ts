import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ActualDataDashBoardComponent } from './actual-data-dash-board/actual-data-dash-board.component';


@NgModule({
  declarations: [
    ActualDataDashBoardComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ,	QuickUiModule,
]
})
export class ModulesModule { }
