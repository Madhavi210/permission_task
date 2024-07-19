import { Component, OnInit, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ViewChild } from '@angular/core';

export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  profilePic?: string; 
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  totalUsers: number = 0;
  totalProducts: number = 0;
  totalCategories: number = 0;
  dynamicRowHeight = '2:1'; 
  dynamicCol = '2';

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setRowHeight(event.target.innerWidth);
  }

  constructor() { 
    this.setRowHeight(window.innerWidth);
  }

  ngOnInit(): void {
    
  }

  private setRowHeight(width: number) {
    if (width <= 480) {
      this.dynamicCol = '1'
      this.dynamicRowHeight = '1:1'; // Set to 1:1 for smaller screens
    } else {
      this.dynamicCol = '2'
      this.dynamicRowHeight = '2:1'; // Default to 2:1 for larger screens
    }
  }

  chartData = [
    { name: 'Category A', value: 10 },
    { name: 'Category B', value: 20 },
    { name: 'Category C', value: 15 },
    { name: 'Category D', value: 30 }
  ];

  categories: Category[] = [
    { id: '1', name: 'Category 1' },
    { id: '2', name: 'Category 2' },
    { id: '3', name: 'Category 3' },
  ];

  products: Product[] = [
    { id: 1, name: 'Product 1', price: 100, category: 'Category A' },
    { id: 2, name: 'Product 2', price: 150, category: 'Category B' },
    { id: 3, name: 'Product 3', price: 200, category: 'Category A' },
  ];

  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', profilePic: 'https://example.com/profiles/john.jpg' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', profilePic: 'https://example.com/profiles/jane.jpg' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'User', profilePic: 'https://example.com/profiles/jane.jpg' },
  ];

  displayedColumnsCategory: string[] = ['categoryId', 'categoryName', 'actions'];

  displayedColumnsProduct: string[] = ['id','productName', 'price', 'category'];

  displayedColumnsUser: string[] = ['id', 'name', 'email', 'role', 'profilePic'];


  editCategory(category: Category) {
    console.log('Edit category:', category);
  }

  deleteCategory(category: Category) {
    console.log('Delete category:', category);
  }


}
