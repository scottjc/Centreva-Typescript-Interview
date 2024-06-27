import { Component, Input, OnInit } from '@angular/core';
import {CUSTOMER_RECORDS, CustomerRecord} from "../../constants/customer-records";

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.scss']
})
export class TableDetailsComponent implements OnInit {


  @Input() selectedRecord: CustomerRecord | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
