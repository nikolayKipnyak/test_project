import {Component, Input} from "@angular/core";

import { Message } from "./message.model";
import {MessageService} from "./message.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
})

export class MessageComponent {
  @Input() message: Message;

  constructor(private messageService: MessageService) {

  }
}
