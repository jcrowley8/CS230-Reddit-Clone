import { Component, Input, OnInit } from "@angular/core";
import { mock_trendingtoday_list } from "./mock_trendingtoday_list";
import { TrendingService } from "./trending.service";
import { TrendingTodayModel } from "./trendingtoday_model";

@Component({
  selector: 'reddit-trendingtodaylayout',
  templateUrl: 'trendinglayout.component.html',
  styleUrls: ['trendingtoday.component.css']
})

export class TrendingTodayLayoutComponent implements OnInit {
  trendingtoday: TrendingTodayModel[] = [];
  constructor(private trendingservice: TrendingService) {
  }
  ngOnInit(): void {
    this.trendingservice.getTrending().subscribe(data => {
      console.log("Fetching trending today data");
      for (var trending of data) {
        console.log(trending);
        this.trendingtoday.push(trending);
      }
    })
  }
}