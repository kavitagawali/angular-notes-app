import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNotesComponent } from './add-notes.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{
  path: '',
  component: AddNotesComponent
}]

@NgModule({
  declarations: [AddNotesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class AddNotesModule { }
