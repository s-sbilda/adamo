import { TutorialComponent } from './tutorial.component';
import { TutorialViewComponent } from './components/tutorialview/tutorialview.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { TestMCComponent } from './components/multiplechoice/multiplechoice.component';
import { TestModComponent } from './components/modelling/modelling.component';


export const TutorialRoutes = [{
    path: '', component: TutorialComponent,
    children: [
        { path: '', redirectTo: 'start', pathMatch: 'full' },
        { path: 'start', component: TutorialViewComponent },
        { path: 'introduction/:catid', component: IntroductionComponent },
        { path: 'testmc/:catid', component: TestMCComponent },
        { path: 'testmod/:taskid', component: TestModComponent },
        
    ]
}]

export const TutorialRoutingModule = []