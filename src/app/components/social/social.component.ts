import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Tweet } from 'src/app/models/tweet/tweet.model';
import { TweetUser } from 'src/app/models/tweet/tweet-user.model';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

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
            const temp = new Tweet(item._id, item._source.text, new TweetUser(item._source.user.id, item._source.user.name, item._source.user.profile_image_url_https));
            this.ids.push(item._id);
            this.tweets.unshift(temp);
          }
        );
      }
    );
  }

}
