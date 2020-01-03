export class Introduction {
    
    createdAt: any
    id: any
    intro_categories: any
    intro_currently_last_intropage: any
    intro_id: any
    intro_is_first: any
    intro_next_id: any
    intro_text: any
    updatedAt: any

    
    deserialize(data){
        Object.assign(this, data)
    }
}
