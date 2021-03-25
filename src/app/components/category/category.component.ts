import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { categoryService } from 'src/app/sercices/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Category[]=[]
  constructor(private categoryService:categoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response.data
    })
    }
}
