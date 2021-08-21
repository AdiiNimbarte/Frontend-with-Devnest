

const inputName=(name)=>{
    return {
        type: "DISPLAY_NAME", 
        payload: name,
} }

const inputEmail=(email)=>{
    return {
        type: "DISPLAY_EMAIL",
        payload: email,
} }

export {inputName, inputEmail};