import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  serverID = Math.floor(Math.random() * 10000);
  serverStatus: string = 'offline';
  @Output('svDel')
  serverDeleted = new EventEmitter<string>();
  @Input('serverElement')
  serverName: string;
  @ViewChild('testRef', { static: true })
  paratext: ElementRef;
  @ContentChild('header3Ref', {static: true})
  header3: ElementRef;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    console.log('Constructor Called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('Paragraph Content: ', this.paratext.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy Called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('NgOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('Ngoninit called!');
    console.log('Paragraph Content: ', this.paratext.nativeElement.textContent);
    console.log('Header 3 content: ', this.header3.nativeElement.textContent);
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('ngAfterContentInit called');
    console.log('Header 3 content: ', this.header3.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked called');
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  onDeleteServer() {
    this.serverDeleted.emit(this.serverName);
  }
}
