import { Component } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
    servernames : string[] = ['server1','server2'];
    count=3;
    createServers(){
      this.servernames.push('server'+this.count);
    }
}
