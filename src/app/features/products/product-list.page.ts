// Angular framework imports
import { Component, inject, OnInit, signal } from '@angular/core';

// Rxjs
import { finalize } from 'rxjs';

// Services
import { ProductService } from './services/product.service';

// intefaces
import { Product } from './interfaces';

// Shared
import { DatatableComponent } from '@shared/components/datatable/datatable.component';

@Component({
  selector: 'product-list-page',
  imports: [DatatableComponent],
  template: `
    <datatable
      [dataSource]="products()"
      [headerTitles]="headerTitles"
      [bodyTemplate]="productRow"
      [isLoading]="isLoading()">
      <ng-template #productRow let-product>
        <td>{{ product.id }}</td>
        <td>{{ product.title }}</td>
        <td>
          <img [src]="product.images[0]" [alt]="product.title" class="w-24 rounded" />
        </td>
      </ng-template>
    </datatable>
  `,
})
export class ProductListPage implements OnInit {
  headerTitles = ['ID', 'Name', 'Image'];
  private _productService = inject(ProductService);

  products = signal<Product[]>([]);
  isLoading = signal<boolean>(false);

  ngOnInit(): void {
    this._loadProducts();
  }

  private _loadProducts(): void {
    this.isLoading.set(true);
    this._productService.getProducts()
    .pipe(
      finalize(() => this.isLoading.set(false))
    )
    .subscribe((products) => {
      this.products.set(products);
    });
  }
}
