import { Component, OnInit } from '@angular/core';
import { Malls } from '../malls'; // use class definition src/app
import { MallsService } from '../malls.service';  // use malls service

@Component({
  selector: 'app-malls',
  templateUrl: './malls.component.html',
  styleUrls: ['./malls.component.css']
})
export class MallsComponent implements OnInit {
  mallsearch: Malls = new Malls();
  malls: Malls[];

  findmalls(malldata){
        this.mallsService.getMalls(malldata).subscribe(results => this.malls = results);
  }

  constructor(private mallsService: MallsService) { }

  ngOnInit() {

        this.mallsService.getMalls().subscribe(data => this.malls = data);
  }

}
