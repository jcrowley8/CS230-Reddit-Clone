import { Component, Input } from "@angular/core";

@Component({
    selector: 'reddit-coinsLayout',
    templateUrl: 'coinsLayout.component.html',
    styleUrls: ['coinsLayout.component.css'],
})


export class CoinsLayoutComponent{
    
    @Input() img: string;
    @Input() title: string;
    @Input() subtext: string;

    constructor(){
        this.img = "/assets/silver-award-large.png";
        this.title = "Error 404";
        this.subtext = "Missing Information";
    }

}