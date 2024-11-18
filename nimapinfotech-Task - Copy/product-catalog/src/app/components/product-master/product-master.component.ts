import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.css']
})
export class ProductMasterComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  newProductName = '';
  selectedCategoryId: number | null = null;
  page = 1;
  pageSize = 10;

  constructor(private productService: ProductService, private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts(): void {
    this.productService.getProducts(this.page, this.pageSize).subscribe((data) => {
      console.log('Received Products:', data); // Logging the received data
      if (Array.isArray(data)) {
        this.products = data; // Ensure data is an array
      } else {
        console.error('Data is not in expected array format', data);
      }
    }, error => {
      console.error('Error loading products:', error);
    });
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    }, error => {
      console.error('Error loading categories:', error);
    });
  }

  addProduct(): void {
    if (this.newProductName.trim() && this.selectedCategoryId) {
      this.productService.addProduct(this.newProductName, this.selectedCategoryId).subscribe(() => {
        this.newProductName = '';
        this.selectedCategoryId = null;
        this.loadProducts();  // Reload the products after adding
      });
    }
  }

  changePage(next: boolean): void {
    this.page = next ? this.page + 1 : Math.max(1, this.page - 1);
    this.loadProducts();
  }
}
