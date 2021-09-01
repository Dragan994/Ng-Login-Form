import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { StarComponent } from "../shared/star.component";

@NgModule({
    declarations:[
        StarComponent
    ],
    imports: [
        SharedModule
    ]
})

export class ProductDetailModule {}