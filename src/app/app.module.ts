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
import { CoinsLayoutComponent } from 'src/Navigation/coinsLayout.component';
import { HomeLayoutComponent } from 'src/trendingtoday/home-layout.component';
import { CoinsLayoutLoopComponent } from 'src/Navigation/coinsLayoutLoop.component';
import { UserInfoComponent } from './user-info/user-info.component';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    TrendingTodayComponent,
    CommunitiesNearYouComponent,
    TrendingTodayLayoutComponent,
    PopularPostsComponent,
    HomeLayoutComponent,
    CoinsLayoutComponent,
    CoinsLayoutLoopComponent,
    UserInfoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
