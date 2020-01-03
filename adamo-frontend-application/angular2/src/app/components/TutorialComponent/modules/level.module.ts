export class Tutorial {
    catName: string
    catIntro: boolean
    catMultipleChoice: boolean
    
    catMod: Modelling[]

    constructor(){
        this.catMod = new Array()
    }

}


class Modelling {
    mod_id
    mod_name
    mod_score

    deserialize(data){
        Object.assign(this, data)
    }
}







