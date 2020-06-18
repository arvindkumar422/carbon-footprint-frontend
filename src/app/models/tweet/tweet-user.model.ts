export class TweetUser {
    id: string;
    name: string;
    dp: string;
    screen_name: string;

    constructor(id: string, name: string, dp: string, screen_name: string) {
        this.id = id;
        this.name = name;
        this.dp = dp;
        this.screen_name = "https://twitter.com/" + screen_name;
    }
}