import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SharedMaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';


@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  exports: [
    ConfirmDialogComponent,
    CommonModule, SharedMaterialModule,
    FormsModule
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ]
})
export class SharedModule { }
