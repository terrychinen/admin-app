// Angular framework imports
import { NgTemplateOutlet } from '@angular/common';
import { Component, input, TemplateRef } from '@angular/core';

// Primeng
import { TableModule } from 'primeng/table';

// Components
import { TableSkeletonComponent } from './components/skeleton/table-skeleton.component';

@Component({
  selector: 'datatable',
  imports: [
    NgTemplateOutlet,
    TableModule,
    TableSkeletonComponent,
  ],

  template: `
    @if (!isLoading()) {
      <div class="h-full min-h-0 paginator-container">
        <p-table
        [value]="dataSource()"
        [scrollable]="isScrollable()"
        scrollHeight="flex"
        [tableStyle]="{ 'min-width': '40rem' }"
        [paginator]="hasPaginator()"
        [rows]="rowsByDefault()"
        [rowsPerPageOptions]="rowsPerPageOptions()">
          <ng-template #header>
              <tr>
                  @for (title of headerTitles(); track title) {
                    <th>{{ title }}</th>
                  }
              </tr>
          </ng-template>
          <ng-template #body let-item>
              <tr>
                <ng-container
                  [ngTemplateOutlet]="bodyTemplate()"
                  [ngTemplateOutletContext]="{ $implicit: item }"
                ></ng-container>
              </tr>
          </ng-template>
        </p-table>
      </div>
    } @else {
      <table-skeleton
        [headerTitles]="headerTitles()"
        [rows]="rowsByDefault()" />
    }
  `
})
export class DatatableComponent<T> {
  headerTitles = input.required<string[]>();
  dataSource = input.required<T[]>();
  bodyTemplate = input<TemplateRef<{ $implicit: T }>>();
  rowsPerPageOptions = input([10, 50, 100]);
  rowsByDefault = input(10);

  isScrollable = input(true);
  hasPaginator = input(true);

  isLoading = input(false);
}
