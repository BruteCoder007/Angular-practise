import {Component} from '@angular/core';

@Component({
    selector:`.app-server`,
    templateUrl:'./server.component.html',
    styleUrl:'./server.component.css',
    styles:`
    .online{
        color:white;
    }`
})

export class ServerComponent{
    bool : boolean = false;
    isdisable : string = 'servers cannot be created';
    variable ;
    status : string = 'offline'
    timebool: boolean =false;
    constructor(){
        setTimeout(()=>{ this.bool=true;},2000)
        this.status= Math.random() > 0.5 ? 'online' : 'offline' ;
    }
     handler(){
        this.isdisable='server can be  created';
    }
    onchange=(event: Event)=>{
        console.log(event);
        this.variable= (<HTMLInputElement>event.target).value;

    }
    isTime(){

        this.timebool = new Date().getHours()<12 ? true : false
        console.log(new Date().getHours());
        return this.timebool;
    }
    getColor(){
        return this.status == 'online' ? 'green' : ' red';
    }

    
}