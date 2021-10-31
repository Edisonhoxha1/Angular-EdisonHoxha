import {Component, ViewChild, TemplateRef, OnInit,} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarView,} from 'angular-calendar';
import dataJson from '../file-JSON/data.json';
import { MatDialog } from "@angular/material/dialog";
import { SongListComponent } from "../song-list/song-list.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{

  constructor(private modal: NgbModal, public dialog: MatDialog, public router: Router) {}

  //get data from JSON file
  public songsList:{ artist:string, title:string, album:string, release_date:number }[] = dataJson;

  view: CalendarView = CalendarView.Month;

  //current date
  viewDate: Date = new Date();

  ngOnInit():void{
  }

  //sharing data with SongListComponent
  dayClicked({ date }: { date: Date }): void {
    const dialogRef = this.dialog.open(SongListComponent, {
      data: {
        date: date,
        songList: this.songsList,
      },
      disableClose: true,
    });
  }

  logOut() {
    localStorage.removeItem('loginForm');
    this.router.navigate(['login']);
  }

}
