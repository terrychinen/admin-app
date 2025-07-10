// Angular framework imports
import { Component, input } from '@angular/core';

// Primeng
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'table-skeleton',
  imports: [SkeletonModule, TableModule],
  template: `
  <div class="h-full min-h-0">
      <p-table
        [value]="values()"
        [tableStyle]="{ 'min-width': '40rem' }"
        [rows]="rows()"
      >
        <ng-template pTemplate="header">
          <tr>
            @for (title of headerTitles(); track title) {
              <th><p-skeleton width="80%" height="2rem"></p-skeleton></th>
            }
          </tr>
        </ng-template>
        <ng-template pTemplate="body" let-rowData>
          <tr>
            @for (title of headerTitles(); track title) {
              <td><p-skeleton width="90%" height="4rem"></p-skeleton></td>
            }
          </tr>
        </ng-template>
      </p-table>
    </div>
  `
})
export class TableSkeletonComponent {
  headerTitles = input.required<string[]>();
  rows = input.required<number>();
  values = input([1,2,3,4,5,6,7,8,9,10]);
}
