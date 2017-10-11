import {NgModule} from "@angular/core";
import { MessageComponent } from "./message.component"
import {messageListComponent} from "./message-list.component";
import {MessagesComponent} from "./messages.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MessageService} from "./message.service";

@NgModule({
    declarations:[
        MessageComponent,
        messageListComponent,
        MessagesComponent,
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        MessageService
    ]
})

export class MessageModule{}