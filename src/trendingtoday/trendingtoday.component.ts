import { Component, Input } from "@angular/core";

@Component({
    selector: 'reddit-trendingtoday',
    templateUrl: 'trendingtoday.component.html',
    styleUrls: ['trendingtoday.component.css']
})


export class TrendingTodayComponent{

    @Input() img: string;
    @Input() title: string;
    @Input() maintext: string;
    @Input() logo: string;
    @Input() subreddit: string;

    constructor(){
        this.img = "/assets/neilYoung.jpeg";
        this.title = "Error 404";
        this.maintext = "XXXX";
        this.logo = "/assets/rTechnologyLogo.png";
        this.subreddit = "Missing Information";
    }
}