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
  user:Tabledata=new Tabledata();
constructor(private service:TabledataService) {}
ngOnInit() {
  this.service.onsubmit().subscribe(data => this.tabledata=data);
}
addition(){
  this.service.add(this.user).subscribe(()=> {
    alert("successfully added")
  });
}
delete(id:number){
  this.service.delete(id).subscribe(()=>{
    alert("successfully deleted")
  });
}

}
  


