import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Movie } from '../../interfaces/movie';
import { MovieService } from '../../services/movie.service';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['title','year','cast','genres'];
  dataSource = new MatTableDataSource<Movie>();

  //@ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  //@ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _movieService: MovieService,
              private _router: Router) { }

  ngOnInit(): void {
    this.onGetMovies();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onGetMovies(): void {
    this._movieService.getMovies().subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Movie>(data);
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.log(error);
      }
    );
  }

  onContact(): void{
    this._router.navigateByUrl('contact');
  }

}
