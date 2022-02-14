import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from 'src/Footer/footer.component';
import { CommunitiesNearYouComponent } from 'src/growingcommunities/communitiesnearyou.component';

import { NavigationBarComponent } from 'src/Navigation/navigationbar.component';
import { TrendingTodayLayoutComponent } from 'src/trendingtoday/trendinglayout.component';
import { TrendingTodayComponent } from 'src/trendingtoday/trendingtoday.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PopularPostsComponent } from 'src/popularposts/popularposts.component';
import { CoinsLayoutComponent } from 'src/Navigation/coins-layout.component';
import { HomeLayoutComponent } from 'src/trendingtoday/home-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    TrendingTodayComponent,
    CommunitiesNearYouComponent,
    TrendingTodayLayoutComponent,
    PopularPostsComponent,
    CoinsLayoutComponent,
    HomeLayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
