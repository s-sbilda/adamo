import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TutIntro } from '../../models/level.module'
import { LevelService } from '../../services/level.service'
import { DialogFinishedComponent } from '../dlgFinished/dlgFinished.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})


export class IntroductionComponent implements OnInit {

  currentpage; allpages: number
  tutIntro: TutIntro
  catid: number;

  constructor(
    private route: ActivatedRoute,
    private levelService: LevelService,
    private dlg: MatDialog) {

  }

  ngOnInit() {
    this.tutIntro = new TutIntro()

    this.route.params.subscribe(params => this.catid = params['catid'])
    this.levelService.getIntro(this.catid).subscribe((intro) => {
      this.tutIntro.deserialize(intro)
      this.currentpage = 1
      this.allpages = this.tutIntro.m_Introduction.length
    })
  }

  clickNext() {
    if (this.currentpage < this.allpages) {
      this.currentpage += 1;
    } 
  }

  clickPrevious() {
    if (this.currentpage > 1) {
      this.currentpage -= 1;
    }
  }

  openFinishDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      userid: this.getUserID(),
      cat: this.catid,
      type: 'intro'
    }

    this.dlg.open(DialogFinishedComponent, dialogConfig);
  }

  getUserID(): string {
    return "blabla-blabla"
  }
}
