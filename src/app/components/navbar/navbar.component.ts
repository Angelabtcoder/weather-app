import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en','es']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use('en');
  }

  ngOnInit(): void {
    this.translate.use('en');
  }

  public selectLanguage(event:any): void {
    this.translate.use(event.target.value);

  }

}
