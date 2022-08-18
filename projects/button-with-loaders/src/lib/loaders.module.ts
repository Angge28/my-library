import { NgModule } from "@angular/core";
import { CircleLineLoaderComponent } from "./circle-line-loader.component";
import { SearchLoaderComponent } from "./search-loader.component";


@NgModule({
  declarations: [
    SearchLoaderComponent, 
    CircleLineLoaderComponent
  ],
  exports: [
    SearchLoaderComponent, 
    CircleLineLoaderComponent
  ]
})
export class LoadersModule {}