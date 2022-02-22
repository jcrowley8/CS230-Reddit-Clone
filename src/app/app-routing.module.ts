import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from 'src/trendingtoday/home-layout.component';
import { PremiumLayoutComponent } from 'src/Navigation/premium-layout.component';
import { PowerupsLayoutComponent } from 'src/Navigation/powerups-layout.component';
import { TalkLayoutComponent } from 'src/Navigation/talk-layout.component';
import { PredictionsLayoutComponent } from 'src/Navigation/predictions-layout.component';
import { HelpCenterLayoutComponent } from 'src/Navigation/help-center-layout.component';
import { CoinsLayoutLoopComponent } from 'src/Navigation/coinsLayoutLoop.component';

const routes:Routes = [ 
  {
    path: '', component: HomeLayoutComponent
  },
  {path:'coins', component: CoinsLayoutLoopComponent},
  {path:'premium', component: PremiumLayoutComponent},
  {path:'powerups', component: PowerupsLayoutComponent},
  {path:'talk', component: TalkLayoutComponent},
  {path: 'predictions', component: PredictionsLayoutComponent},
  {path: 'help', component: HelpCenterLayoutComponent},
  {path:'home', component: HomeLayoutComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule { }
