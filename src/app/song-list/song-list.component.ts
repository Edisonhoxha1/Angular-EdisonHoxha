import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DatePipe} from "@angular/common";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

export interface DialogData {
  date: any,
  songList: SongModel[]
}

export interface SongModel {
  artist:string,
  title:string,
  album:string,
  release_date:number
}

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['artist', 'title', 'album', 'release_date', 'remove'];
  dataSource: MatTableDataSource<SongModel> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | null;
  @ViewChild(MatSort) sort: MatSort | null;

  selectedDate: any;

  selectedSongList: SongModel[] = []

  constructor(public dialogRef: MatDialogRef<SongListComponent>,
              @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,
              public datepipe: DatePipe) {
  }

  //check the selected date
  ngOnInit(): void {
    this.selectedDate = this.datepipe.transform(new Date(this.dialogData.date), 'yyyy-MM-dd');
    this.dialogData?.songList?.forEach(song => {
      if(song.release_date === this.selectedDate){
        this.selectedSongList.push(song)
      }
    })
    this.dataSource = new MatTableDataSource(this.selectedSongList);
    console.log(this.selectedSongList);
  }

  //paginate and sort after push song
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //delete song
  deleteSong(index:any){
    this.selectedSongList.splice(index,1);
    //after delete song
    this.dataSource = new MatTableDataSource(this.selectedSongList)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  closeModal() {
    this.dialogRef.close()
  }

}
