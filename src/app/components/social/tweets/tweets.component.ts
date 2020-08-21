import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet/tweet.model';
import { HttpService } from 'src/app/services/http.service';
import { TweetUser } from 'src/app/models/tweet/tweet-user.model';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  tweets: Tweet[] = [];
  ids: string[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getTweets();
    setInterval(() => this.getTweets(), 10000);
  }

  getTweets() {
    this.httpService.getTweets().subscribe(
      (res: any) => {
        res.hits.hits.filter(
          element => !this.ids.includes(element._id)
        ).forEach(
          item => {
            const temp = new Tweet(item._id, 
              item._source.extended_tweet === undefined ? item._source.text : item._source.extended_tweet.full_text,
              new TweetUser(item._source.user.id, item._source.user.name, item._source.user.profile_image_url_https,
                item._source.user.screen_name));
            this.ids.push(item._id);
            this.tweets.unshift(temp);
          }
        );
      }
    );
  }

  routeToTweet(tweet_id, tweetuser_id) {
    return "http://twitter.com/" + tweetuser_id + "/status/" + tweet_id;
  }
}
