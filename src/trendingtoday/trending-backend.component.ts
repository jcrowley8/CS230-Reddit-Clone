import { Component, OnInit } from "@angular/core";
import { TrendingTodayModel } from "./trendingtoday_model";


@Component({
    selector: 'reddit-trending-backend',
    templateUrl: './trending-backend.component.html',
})
export class TrendingBackendComponent implements OnInit{
    constructor() {}
    ngOnInit(): void { 
    }
    addTrending(img: TrendingTodayModel){
        console.log("You clicked submit")
    }
}