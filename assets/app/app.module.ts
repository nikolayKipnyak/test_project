import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import {HeaderComponent} from "./header.component";
import {routing} from "./app.routing";
import {HttpModule} from "@angular/http";
import {MessageModule} from "./messages/message.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
    ],
    imports: [BrowserModule,
              routing,
              HttpModule,
              MessageModule
            ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
