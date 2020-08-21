
export class News {
    author: string;
    description: string;
    publishedAt: string;
    source: string;
    title: string;
    url: string;
    urlToImage: string;

    constructor(author: string, description: string, publishedAt: string, source: string, title: string, url: string, urlToImage: string) {
        this.author = author;
        this.description = description;
        this.publishedAt = publishedAt;
        this.source = source;
        this.title = title;
        this.url = url;
        this.urlToImage = urlToImage;
    }

}
