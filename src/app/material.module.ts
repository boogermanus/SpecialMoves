import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatButtonModule,
        MatSelectModule,
    ]
})
export class MaterialModule { }
