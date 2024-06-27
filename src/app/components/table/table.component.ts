import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CustomerRecord, CUSTOMER_RECORDS } from 'src/app/constants/customer-records';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Output() recordSelected  = new EventEmitter<CustomerRecord>();

  public records: CustomerRecord[] = CUSTOMER_RECORDS;

  constructor() { }

  ngOnInit(): void {
  }

  sortByAge() {
    return this.records.sort((a, b) => a.Age > b.Age ? 1 : -1);
  }

}
