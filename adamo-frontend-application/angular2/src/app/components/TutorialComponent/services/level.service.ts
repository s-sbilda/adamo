import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Tutorial } from "../modules/level.module";

@Injectable()
export class LevelService {

    constructor(private httpService: HttpClient) { }

    private BACKEND_URI: string = environment.SERVER_HOST + ':' + environment.SERVER_PORT;
    private CAMUNDA_ENGINE_URI: string = environment.CAMUNDA_ENGINE_HOST;

    /**
     * returns all relevant stuff for the start view,
     * Relevant stuff:
     *      - all modelling processes of each categorie
     *      - introduction name
     *      - multiple choice name
     * 
     * @returns all modelling tasks for each categorie
     */
    public getStartview() {
        return this.httpService.get(this.BACKEND_URI + '/categorie')
        // return this.httpService.get("/assets/fixtures/overview.json")
    }

    /**
     * Funktion Introduction related to every Categorie,
     * so as param send the categorie name and get back an Array with all intro content
     * of the related Categorie
     * @param catName
     * @returns 
     */
    public getIntro(catName: string) {
        return this.httpService.get(this.BACKEND_URI + '/intro/' + catName)
    }

    /**
     * get a multiple choice test group of one categorie
     * @param categorie 
     * @returns five random questions out of a pool of questions
     */
    public getMultipleChoiceTest(catName: string, userID) {
        console.log(this.BACKEND_URI + '/randomByLeveL/' + catName + '/' + userID)
        return this.httpService.get(this.BACKEND_URI + '/randomByLeveL/' + catName + '/' + userID)

        // return this.httpService.get("/assets/fixtures/mctest.json")
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