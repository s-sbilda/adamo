import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Tutorial, Categorie } from "../models/level.module";

@Injectable()
export class LevelService {

    constructor(private httpService: HttpClient) { }

    private BACKEND_URI: string = environment.SERVER_HOST + ':' + environment.SERVER_PORT;
    private CAMUNDA_ENGINE_URI: string = environment.CAMUNDA_ENGINE_HOST;

    /**
     * returns all relevant stuff for the start view,
     * 
     * @returns all modelling tasks for earch categorie
     */
    public getCompleteTutorial() {
        // return this.httpService.get(this.BACKEND_URI + '/tutorial/startview', options)
        return this.httpService.get("/assets/fixtures/overview.json")
    }

    /**
     * get only one introduction of one categorie
     * @param categorie 
     * @returns pages and content of the choosen categorie
     */
    public getIntro(categorie: number) {
        // POST to Nest with the Categorie Number
        return this.httpService.get("/assets/fixtures/intro.json")
    }

    /**
     * 
     * @param categorie 
     */
    public getMultipleChoiceTest(categorie: number) {
        return this.httpService.get("/assets/fixtures/mctest.json")
    }

    /**
     * 
     * @param modTaskID 
     */
    public getModellingTask(modTaskID: number) {

    }

    /**
     * Update Database from Tutorial for Finished Intro, MultipleChoice and ModellingTasks
     * 
     * @param userid 
     * @param categorieid 
     * @param type 
     * @param modellingTaskid 
     */
    public updateFinished(userid: string, categorieid: string, type: string, modellingTaskid?: number){
        if(modellingTaskid == null){
            console.log("POST to Server")
            if(type == 'intro'){
                console.log("Update introduction")
            } else {
                console.log("Update MultipleChoice")
            }
            // console.log(userid + categorieid + type + modellingTaskid)
        } else {
            console.log("POST to Server. Update the modelling task for finish")
        }
        
    }

    private CompleteTutorialHandler(response) {
        console.log(response)
    }

    private ErrorHandler() {

    }

    
}