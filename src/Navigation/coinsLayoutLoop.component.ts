import { Component } from "@angular/core";
import { CoinsLayoutModel } from "./coinsLayout_model";
import { mock_coinsLayout_list } from "./mock_coinsLayout_list";


@Component({
    selector: 'reddit-coinsLayoutLoop',
    templateUrl: 'coinsLayoutLoop.component.html',
    styleUrls: ['coinsLayout.component.css']
})

export class CoinsLayoutLoopComponent{
    coinsLayout: CoinsLayoutModel [] = [];

    constructor(){
        for(var coins of mock_coinsLayout_list){
            console.log(coins);
            this.coinsLayout.push(coins);
        }
    }
}