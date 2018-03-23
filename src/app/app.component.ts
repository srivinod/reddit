import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  articles: Article[];
  
  constructor(){
    this.articles = [
      new Article('Angular 5', 'http://angular.io', 3),
      new Article('Github', 'https://github.com/', 2),
      new Article('React JS', 'https://reactjs.org/', 11)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    // Note how `(backtick) single allows angular variables below
    console.log(`Adding title: ${title.value} and link :${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[]{ // Sort ascending based on vote points
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }



}
