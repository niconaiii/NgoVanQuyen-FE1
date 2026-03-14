import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories = [
    {id: 1,title: 'One Piece', author: 'oda', views: 100000, release: 2014, category: "Phieu Luu", image: "https://upload.wikimedia.org/wikipedia/vi/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg"},
    {id: 2,title: 'Naruto', author: 'Kishimoto', views: 90001, release: 2015, category: "Ninja", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqIaD4wuVHsK6dbGQlEC4MBycX72MfyVLoMg&s"},
    {id: 3,title: 'Doraemon', author: 'Fujiko F Fujio', views: 70000, release: 2016, category: "Tre em", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqlW5qSxZUmGuvKQvpeO4U4FM-eSyv-85Aqw&s"},
    {id: 4,title: 'Dragon Ball', author: 'Fujiko F Fujio', views: 10000000, release: 2017, category: "Vo thuat", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDKmPkKz7qe4UF0X5eHIFM1Qwe-AY2bRaq6g&s"},
    {id: 5,title: 'Attack On Titan', author: 'Fujiko F Fujio', views: 80000, release: 2018, category: "Hoa thu", image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v9_ah.jpg"},
    {id: 6,title: 'Bleach', author: 'Fujiko F Fujio', views: 70000, release: 2019, category: "Danh nhau", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz66h28fXjxilp7vuLO_QCy8SKhqsBZKTcbQ&s"},
  ];
  handleClick(title:string){
    alert(`Hello from Stories component! You clicked on "${title}"`)
  }
}
