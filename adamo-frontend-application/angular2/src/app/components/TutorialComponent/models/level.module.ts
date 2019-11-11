export class Tutorial {
    m_Categorie: Categorie[]

    constructor() {
        this.m_Categorie = []
    }

    deserialize(data){
        Object.assign(this, data)
    }
}

export class Categorie {
    m_ID: number
    m_Name: string
    m_MultipleChoiceFinished: boolean
    m_IntroductionFinished: boolean
    m_ModellerTask: ModellerTask[]

    constructor() {}    
}

class ModellerTask {
    m_TaskID: string
    m_TaskName: string
    m_TaskFinished: boolean
}

export class TutIntro {
    m_Introduction: Introduction[]

    constructor(){
        this.m_Introduction = []
    }

    deserialize(data){
        Object.assign(this, data)
    }
}

class Introduction {
    m_Page: number
    m_Content: string

    constructor() {}
}

export class MultipleChoice {
    m_MultipleChoice: MultiChoice[]

    constructor(){
        this.m_MultipleChoice = []
    }

    deserialize(data){
        Object.assign(this, data)
    }
}

class MultiChoice {
    m_Question: string
    m_Answers: string[]

    constructor() {}
}







