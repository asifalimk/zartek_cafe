import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DishCategoriesService } from './dish-categories/dish-categories.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  cartItemCount: number=0;
  subscription: Subscription;

  constructor(private dishCategoriesService: DishCategoriesService) { 
    this.subscription = this.dishCategoriesService.getCount().subscribe(count => {
        this.cartItemCount=count;
    });
  }

  ngOnInit(): void {

  }

}
