import {Message} from './message.model';
import {Http, Response, Headers} from "@angular/http";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()

export class MessageService {
    private messages: Message[] = [];
    messageIsExpired = new EventEmitter<Message>();
    private headers: Headers =  new Headers({'content-type':'application/json'});

    constructor(private http:Http){

    }

    getMessages() {
        return this.http.get('http://localhost:3000/message')
            .map((res:Response) => {
                const messages = res.json().obj;
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    let transformedContent = '';
                    if (message.type !== 'image') {
                        transformedContent = atob(message.content);
                    } else {
                        transformedContent = message.content;
                    }
                    transformedMessages.push(new Message(transformedContent,
                                                         message.type,
                                                         message.expirationDate,
                                                         message._id
                                                         )
                                            )
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) => {
                console.log(error);
            });
    }

    expireMessage(messageId) {

    }
}