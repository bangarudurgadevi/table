import { Component } from '@angular/core';
import { TabledataService } from '../service/tabledata.service';
import { Tabledata } from '../models/tabledata';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  tabledata:Tabledata[]=[];
constructor(private service:TabledataService) {}
ngOnInit() {
  this.service.onsubmit().subscribe(data => this.tabledata=data);
}
}
