import { Component, OnInit } from '@angular/core';
import { CustomerRecord } from "../../constants/customer-records";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public selectedRecord: CustomerRecord | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public populateRecord(selectedRecord: CustomerRecord): void {
    this.selectedRecord = selectedRecord;
  }

}
