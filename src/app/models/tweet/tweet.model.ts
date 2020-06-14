import { TweetUser } from './tweet-user.model';

export class Tweet {
    id: string;
    text: string;
    user: TweetUser;

    constructor(id: string, text: string, user: TweetUser) {
        this.id = id;
        this.text = text;
        this.user = user;
    }

}
