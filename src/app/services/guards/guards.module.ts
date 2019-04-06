import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaitenanceGuard } from './maitenance.guard';

@NgModule({
  imports: [CommonModule],
  providers: [MaitenanceGuard],
  declarations: [],
})
export class GuardsModule {}
