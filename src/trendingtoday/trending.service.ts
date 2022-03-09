import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TrendingTodayModel } from "./trendingtoday_model";
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
    providedIn: 'root'
})
export class TrendingService {
    
    constructor(private db: AngularFireDatabase) {
    }
    public getTrending() {
        return this.db.list<TrendingTodayModel>("trendingToday").valueChanges();
    }
    public getTrendings(index: number) {
        
    }
}