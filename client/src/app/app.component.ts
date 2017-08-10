import { Component } from '@angular/core';
import {SessionService} from '../services/session.service'
import $ from 'jquery';
import './js/init.js'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private session:SessionService){ }


  ngOnVIWInit() {      }

  logout(){
    this.session.logout().subscribe();
}
}
