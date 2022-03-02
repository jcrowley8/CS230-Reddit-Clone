import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TrendingTodayModel } from "./trendingtoday_model";


@Injectable({
    providedIn: 'root'
})
export class TrendingService{
    private baseUrl: string = "https://reddit-6f039-default-rtdb.firebaseio.com/";
    private trendingEndpoint: string = "trendingToday.json";

    constructor(private http:HttpClient){
    }
    public getTrending(){
        return this.http.get<TrendingTodayModel []>(this.baseUrl + this.trendingEndpoint);
    }

    public getTrendings(index:number){
        return this.http.get<TrendingTodayModel>(this.baseUrl + 'trendingToday/' + index + '.json');
    }

}