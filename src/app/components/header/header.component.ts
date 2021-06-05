import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, public http: HttpClient) {}

  makeHttpCall() {
    this.http.get('https://www.reddit.com/r/javascript.json').subscribe(r => {
      console.log(r);
    });
  }

  ngOnInit(): void {}

  home() {
    this.router.navigateByUrl('./home');
  }
  isHomeRoute() {
    return this.router.url === '/home';
  }
}
