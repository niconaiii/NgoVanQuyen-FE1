import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  products: any[] = [];

  loading = false;
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this.error = '';

    this.http.get<any[]>(`http://localhost:3000/products`).subscribe({
      next: (data) => {
        this.loading = false;
        this.products = data;
      },
      error: () => {
        this.loading = false;
        this.error = 'Ko thể tải dữ liệu';
      },
    });
  }

  deletePro(id: number) {
    const confirmDelete = confirm('Suy nghĩ cho kĩ đi!');
    if (!confirmDelete) return;

    this.http.delete(`http://localhost:3000/products/${id}`).subscribe({
      next: () => {
        this.products = this.products.filter((pro) => pro.id !== id);
        alert('Xoa thanh cong');
      },
      error: () => {
        alert('Xoa that bai');
      },
    });
  }
}
