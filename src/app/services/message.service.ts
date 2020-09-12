import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: { name: string, msg: string }[] = [];

  constructor() { }

  addMessage(name: string, msg: string) {
    this.messages.push({name, msg});
  }

  displayMessage(name: string) {
    const retrieveMessage = this.messages.filter(message => message.name === name);
    if (retrieveMessage) {
      return retrieveMessage[0].msg;
    }
    return 'Cannot find the message with that name';
  }
}
