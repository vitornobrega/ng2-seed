import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [CommonModule,Ng2BootstrapModule],
    declarations: [AboutComponent],
    exports: [AboutComponent]
})

export class AboutModule { }
