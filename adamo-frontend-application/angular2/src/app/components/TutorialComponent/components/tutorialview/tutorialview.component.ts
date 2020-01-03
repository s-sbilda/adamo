import { Component, OnInit, Output } from '@angular/core';
import { LevelService } from '../../services/level.service';
import { Tutorial } from '../../modules/level.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorialview',
  templateUrl: './tutorialview.component.html',
  styleUrls: ['./tutorialview.component.css']
})

export class TutorialViewComponent implements OnInit {

  tutorial: Tutorial[]

  constructor(private route: ActivatedRoute, private levelService: LevelService) {}

  ngOnInit() {
    this.levelService.getStartview().subscribe((view) => {
      console.log(view)
      Object.assign(this.tutorial, view)
    })
  }

  public test(){

  }

}
