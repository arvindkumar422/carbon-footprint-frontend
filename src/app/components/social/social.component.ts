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


  ngOnInit(): void {
    
  }

}
