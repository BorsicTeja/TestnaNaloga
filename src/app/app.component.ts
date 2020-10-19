import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  columns: any[];

  @ViewChild('userTable') table: Table;
  
  constructor(){
  }

  public users = [
    {
      firstName: 'Teja',
      lastName: 'Boršić',
      post: {
        postalCode: '3250',
        city: 'Rogaška Slatina'
      }
    },
    {
      firstName: 'Andrej',
      lastName: 'Novak',
      post: {
        postalCode: '1000',
        city: 'Ljubljana'
      }
    },
    {
      firstName: 'Teja',
      lastName: 'Novak',
      post: {
        postalCode: '2000',
        city: 'Maribor'
      }
    },
    {
      firstName: 'Teja',
      lastName: 'Ferme',
      post: {
        postalCode: '2000',
        city: 'Maribor'
      }
    },
    {
      firstName: 'Katja',
      lastName: 'Ferme',
      post: {
        postalCode: '9000',
        city: 'Ljutomer'
    }
  }]

  ngOnInit(){
    this.columns = [
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'post', header: 'Address' }
    ];
  }
  
  public showTeja(){
    this.table.filter('Teja', 'firstName', 'equals');
  }
}