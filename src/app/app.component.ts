import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthService2Service } from './services/auth-service2.service';
import { MessageService } from './services/message.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [AuthService]
})
export class AppComponent implements OnInit {
    name = 'Chau';

    constructor(private messageService: MessageService, private authService: AuthService2Service) {}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.messageService.addMessage('welcome', 'Welcome to the message service');
        console.log(this.messageService.displayMessage('welcome'));
    }

    logIn() {
        this.authService.logIn();
    }
}
