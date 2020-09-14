import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Test Server 1', 'Test Server 2'];

  @ViewChild('serverIdInput', { static: true })
  serverIdIn;

  constructor(private route: ActivatedRoute) {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
    console.clear();
    this.route.data.subscribe((data: Data) => {
      console.log(data['server']);
    });
  }

  onCreateServer() {
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onServerDeleted(serverName: string) {
    this.servers.splice(this.servers.indexOf(serverName), 1);
  }
}
