import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports: [
        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule,
    ],
    exports: [
        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule,
    ]
})
export class MaterialModule { }
