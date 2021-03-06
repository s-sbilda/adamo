import { Component, OnInit } from '@angular/core';
// import { MultipleChoice } from '../../modules/level.module';
import { ActivatedRoute } from '@angular/router';
import { LevelService } from '../../services/level.service';

@Component({
  selector: 'app-test-mc',
  templateUrl: './multiplechoice.component.html',
  styleUrls: ['./multiplechoice.component.css']
})
export class TestMCComponent implements OnInit {

  catName: string
  userid: string
  questionid: number
  //multipleChoiceTest: MultipleChoice
  useranswers: Map<number, number[]>

  constructor(private route: ActivatedRoute, private levelService: LevelService) { 
    this.questionid = 0
    this.useranswers = new Map()
  }
  
  ngOnInit() {
    // this.multipleChoiceTest = new MultipleChoice()

    this.route.params.subscribe(params => this.catName = params['catid'])
    this.levelService.getMultipleChoiceTest(this.catName, this.userid).subscribe(mc => {
      // console.log(mc)
      // this.multipleChoiceTest.deserialize(mc)
    })
  }

  CheckCorrectness() {
    // if (this.questionid < this.multipleChoiceTest.m_MultipleChoice.length) {

      this.questionid += 1;

    // } else {
      // Test abgeben und request zum server, auf dem die Antowrten ausgewertet werden
    // }
    console.log("currentQuestID: " + this.questionid);
  }

}
