import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url:'https://cdn-cv.r4you.co/wp-content/uploads/2018/10/iStock-486755202.jpg',
      description:'cachoeria'
    },
    {
      url:'https://cdn-cv.r4you.co/wp-content/uploads/2018/10/iStock-505868962.jpg',
      description:'floresta'
    },
    {
      url:'https://cdn-cv.r4you.co/wp-content/uploads/2018/10/iStock-827826138.jpg',
      description:'mar'
    },
    {
      url:'https://cdn-cv.r4you.co/wp-content/uploads/2018/10/iStock-909106260.jpg',
      description:'gato'
    },

  ];
}
