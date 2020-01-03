import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Introduction } from '../../modules/intro.module'
import { LevelService } from '../../services/level.service'
import { DialogFinishedComponent } from '../dlgFinished/dlgFinished.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})


export class IntroductionComponent implements OnInit {

  introArr: Introduction[]
  catName: string
  content: string
  nextID: string
  currentID: string
  currentpage: number = 1

  constructor(
    private route: ActivatedRoute,
    private levelService: LevelService,
    private dlg: MatDialog) {
      this.introArr = new Array
  }

  ngOnInit() {

    this.route.params.subscribe(params => this.catName = params['catName'])
    // console.log(this.catName)
    this.levelService.getIntro(this.catName).subscribe((intro) => {
      Object.assign(this.introArr, intro)
      this.introArr.forEach(element => { 
        if(element.intro_is_first)
          this.content = element.intro_text
          this.nextID = element.intro_next_id
          this.currentID = element.intro_id
      });
      // console.log("CurrentID: " + this.currentID + " NextID: " + this.nextID)

    })
  }

  upperCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

  clickNext() {
    for (let index = 0; index < this.introArr.length; index++){
      if(this.introArr[index].intro_id === this.nextID){
        this.content = this.introArr[index].intro_text
        this.nextID = this.introArr[index].intro_next_id
        this.currentID = this.introArr[index].intro_id
        this.currentpage++
        // console.log("CurrentID: " + this.currentID + " NextID: " + this.nextID)
        break
      }
    }
  }

  clickPrevious() {
    for (let index = 0; index < this.introArr.length; index++){
      if(this.introArr[index].intro_next_id === this.currentID){
        this.content = this.introArr[index].intro_text
        this.nextID = this.introArr[index].intro_next_id
        this.currentID = this.introArr[index].intro_id
        this.currentpage--
        // console.log("CurrentID: " + this.currentID + " NextID: " + this.nextID)
        break
      }
    }
  }

  openFinishDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      userid: this.getUserID(),
      cat: this.catName,
      type: 'intro'
    }

    this.dlg.open(DialogFinishedComponent, dialogConfig);
  }

  getUserID(): string {
    return "blabla-blabla"
  }
}
