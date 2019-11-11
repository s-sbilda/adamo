import { Component, OnInit, Output } from '@angular/core';
import { LevelService } from '../../services/level.service';
import { Tutorial } from '../../models/level.module';
import { SnackBarService } from '../../../../services/snackbar.service';

@Component({
  selector: 'app-tutorialview',
  templateUrl: './tutorialview.component.html',
  styleUrls: ['./tutorialview.component.css']
})

export class TutorialViewComponent implements OnInit {

  public tutorial: Tutorial

  constructor(
    private levelService: LevelService,
    private snackbarService: SnackBarService
  ) { }

  ngOnInit() {
    // console.log(this.levelService.createJSON())
    this.tutorial = new Tutorial()
    this.getTutorialView()
  }


  public getTutorialView() {
    this.levelService.getCompleteTutorial().subscribe(x => {
      this.tutorial.deserialize(x) 
    })

    // this.levelService.getCompleteTutorial().subscribe(
    //   (response: { success: any; data: any; _body: string }) => {
    //     if (response.success) {
    //       this.tutorial.deserialize(response.data)
    //     } else {
    //       this.snackbarService.error(response._body)
    //     }
    //   },
    //   (error: { _body: string }) => {
    //     this.snackbarService.error(JSON.parse(error._body).status)
    //   }
    // );
  }
}
