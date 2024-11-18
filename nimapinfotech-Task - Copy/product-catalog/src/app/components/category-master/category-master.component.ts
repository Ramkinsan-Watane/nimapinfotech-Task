import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-master',
  templateUrl: './category-master.component.html',
  styleUrls: ['./category-master.component.css']
})
export class CategoryMasterComponent implements OnInit {
  categories: any[] = [];
  newCategoryName = '';

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  addCategory(): void {
    if (this.newCategoryName.trim()) {
      this.categoryService.addCategory(this.newCategoryName).subscribe(() => {
        this.newCategoryName = '';
        this.loadCategories();
      });
    }
  }
}
