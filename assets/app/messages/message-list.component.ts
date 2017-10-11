import {Component, OnInit} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service";
import { Observable } from "rxjs";

@Component({
    selector: "app-message-list",
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-message
               [message] = "message"
                *ngFor="let message of messages">
            </app-message>
        </div>
    `
})
export class messageListComponent implements OnInit{
    private alive: boolean;

    private timer: Observable<number>;
    private interval: number;

    messages : Message[];
    constructor(private messageService:MessageService) {
        this.alive = true;
        this.interval = 10000;
        this.timer = Observable.timer(0, this.interval);
    }
    ngOnInit(){
        var currentDate = new Date();
        console.log(new Date(currentDate.getTime() + (4 * 60 * 1000)).getTime());
        this.timer
            .takeWhile(() => this.alive)
            .subscribe(() => {

        this.messageService.getMessages()
            .subscribe((messages:Message[]) => {
            this.messages = messages;
        });
            });
    }
}