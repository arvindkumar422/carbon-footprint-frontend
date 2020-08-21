import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { News } from 'src/app/models/news/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.httpService.getNews().subscribe(
      (res: any) => {
        res.articles.forEach(
          item => {
            const temp = new News(item.author, item.description, new Date(item.publishedAt).toLocaleString(), item.source.name, item.title, item.url, item.urlToImage);
            this.news.push(temp);
          }
        );
        console.log(this.news);
      }
    );
  }

  routeToNews(url: string) {

  }

}
