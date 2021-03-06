import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { NewService } from './new.service';

@NgModule({
  declarations: [NewComponent],
  imports: [CommonModule, FormsModule, NewRoutingModule, SharedModule],
  providers: [
    {
      provide: NewService,
      useClass: NewService,
    },
  ],
})
export class NewModule {}
