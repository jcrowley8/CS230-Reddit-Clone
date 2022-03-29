import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from 'src/Footer/footer.component';
import { CommunitiesNearYouComponent } from 'src/growingcommunities/communitiesnearyou.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NavigationBarComponent } from 'src/Navigation/navigationbar.component';
import { TrendingTodayLayoutComponent } from 'src/trendingtoday/trendinglayout.component';
import { TrendingTodayComponent } from 'src/trendingtoday/trendingtoday.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PopularPostsComponent } from 'src/popularposts/popularposts.component';
import { CoinsLayoutComponent } from 'src/Navigation/coinsLayout.component';
import { HomeLayoutComponent } from 'src/trendingtoday/home-layout.component';
import { CoinsLayoutLoopComponent } from 'src/Navigation/coinsLayoutLoop.component';
import { UserInfoComponent } from './user-info/user-info.component';
import {HttpClientModule} from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { TrendingBackendComponent } from 'src/trendingtoday/trending-backend.component';



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
    TrendingBackendComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
