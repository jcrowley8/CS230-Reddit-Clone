export class TrendingTodayModel{
    img: string;
    title: string;
    maintext: string;
    logo: string;
    subreddit: string;

    constructor(img: string, 
        title: string, 
        maintext: string, 
        logo: string,
        subreddit: string){

            this.img = img;
            this.title = title;
            this.maintext = maintext;
            this.logo = logo;
            this.subreddit = subreddit;
    }
}