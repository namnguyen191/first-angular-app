import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    name = 'Chau';

    constructor(private messageService: MessageService) {}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.messageService.addMessage('welcome', 'Welcome to the message service');
        console.log(this.messageService.displayMessage('welcome'));
    }
}
