import { Component } from '@angular/core';
import { mock_trendingtoday_list } from 'src/trendingtoday/mock_trendingtoday_list';
import { TrendingTodayModel } from 'src/trendingtoday/trendingtoday_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reddit-website';
  
}
