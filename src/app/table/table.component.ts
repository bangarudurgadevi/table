import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  tabledata=[
    {
      id:1,
      name:'devi',
      email:'devi.bangaru24@gmail.com',
      branch:'ece',
      mobilenumber:9234507899
    },
    {
      id:2,
      name:'durga',
      email:'devi.bangaru24@gmail.com',
      branch:'ece',
      mobilenumber:9234507899
    }
  ]
}
