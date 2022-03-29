import { Component, OnInit } from "@angular/core";
import { TrendingService } from "./trending.service";
import { TrendingTodayModel } from "./trendingtoday_model";


@Component({
    selector: 'reddit-trending-backend',
    templateUrl: './trending-backend.component.html',
    
})
export class TrendingBackendComponent implements OnInit{

    constructor(public ts: TrendingService) {}

    ngOnInit(): void { 
    }
    addTrending(trending: TrendingTodayModel){
        console.log("You clicked submit");
        console.log(trending);
        this.ts.addTrending(trending);
    }
}