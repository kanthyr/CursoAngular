import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Country } from 'src/app/core/interfaces/country';
import { CounterService } from 'src/app/services/counter.service';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name','capital','area','flag']
  dataSource = new MatTableDataSource<Country>();

  //@ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  showProgress: boolean = false;

  constructor(private _countriesService: CountriesService, private _counterService: CounterService) { }

  ngOnInit(): void {
    this.onGetCountries();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; 
  }

  onGetCountries(): void{
    this.showProgress = true;
    this._countriesService.getCountries().subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Country>(data);
        this.dataSource.paginator = this.paginator;
        this._counterService.change(data.length);
        this.showProgress = false;
      },
      error => {
        console.log(error);
        this.showProgress = false;
      }
    );
  }

  onApplyFilterFather(event: string): void{
    this.dataSource.filter = event.trim().toLowerCase();
    this._counterService.change(this.dataSource.filteredData.length);
    if (this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
    
  }
}
