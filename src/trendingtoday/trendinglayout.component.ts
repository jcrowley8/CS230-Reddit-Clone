import { Component, Input } from "@angular/core";
import { mock_trendingtoday_list } from "./mock_trendingtoday_list";
import { TrendingTodayModel } from "./trendingtoday_model";

@Component({
    selector: 'reddit-trendingtodaylayout',
    templateUrl: 'trendinglayout.component.html',
    styleUrls: ['trendingtoday.component.css']
})



export class TrendingTodayLayoutComponent{
    trendingtoday: TrendingTodayModel [] = [];

    constructor(){
      for (var trending of mock_trendingtoday_list){
        console.log(trending);
        this.trendingtoday.push(trending);
      }
    }
}