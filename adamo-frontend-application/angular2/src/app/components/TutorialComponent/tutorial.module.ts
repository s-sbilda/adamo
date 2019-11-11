import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TutorialRoutingModule } from './tutorial-routing.module';

import { MatExpansionModule, MatDialogModule } from '@angular/material/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResizableModule } from 'angular-resizable-element';
import { AngularSplitModule } from 'angular-split';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TutorialComponent } from './tutorial.component'
import { IntroductionComponent } from './components/introduction/introduction.component';
import { TutorialViewComponent } from './components/tutorialview/tutorialview.component';
import { TestMCComponent } from './components/multiplechoice/multiplechoice.component';
import { TestModComponent } from './components/modelling/modelling.component';
import { DialogFinishedComponent } from './components/dlgFinished/dlgFinished.component'
import { SharedModule } from '../../shared.module';
import { LevelService } from './services/level.service';
// import { ModelerComponent } from '../../ModelerComponent/modeler.component';

@NgModule({
  declarations: [
    IntroductionComponent,
    TutorialViewComponent,
    TestMCComponent,
    TestModComponent,
    TutorialComponent,
    DialogFinishedComponent
    // ModelerComponent
  ],
  imports: [
    RouterModule,
    MatExpansionModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ResizableModule,
    AngularSplitModule,
    TutorialRoutingModule, 
    SharedModule
  ],
  providers: [
    LevelService
  ],
  entryComponents: [DialogFinishedComponent]
})

export class TutorialModule {}
