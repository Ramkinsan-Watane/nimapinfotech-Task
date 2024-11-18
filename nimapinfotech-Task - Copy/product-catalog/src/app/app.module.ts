import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Ensure FormsModule is imported for ngModel
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoryMasterComponent } from './components/category-master/category-master.component';
import { ProductMasterComponent } from './components/product-master/product-master.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryMasterComponent,  // Declaring CategoryMasterComponent here
    ProductMasterComponent    // Declaring ProductMasterComponent here
  ],
  imports: [
    BrowserModule,
    FormsModule,              // Import FormsModule for ngModel to work
    HttpClientModule          // Import HttpClientModule for making HTTP requests
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrapping AppComponent
})
export class AppModule {}
