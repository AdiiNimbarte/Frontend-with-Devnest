const nameReducer= (state = " ", action) => {
    
    if(action.type === 'DISPLAY_NAME' ){
        return action.payload
        
    } else {
        return state;
    }

}

const mailReducer = (state = " ", action) => {
    if (action.type === "DISPLAY_EMAIL") {
        return action.payload
    }
    else {
        return state;
    }

}

export {nameReducer, mailReducer} ;