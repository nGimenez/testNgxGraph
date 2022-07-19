import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxGraphModule } from "@swimlane/ngx-graph";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxGraphModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
