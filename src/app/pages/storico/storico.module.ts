import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { DemoMaterialModule } from "../../demo-material-module";
import { FlexLayoutModule } from "@angular/flex-layout";

import { StoricoRoutes } from "./storico.routing";
import { StoricoComponent } from "./storico.component";

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(StoricoRoutes),
  ],
  declarations: [StoricoComponent],
})
export class StoricoModule {}
