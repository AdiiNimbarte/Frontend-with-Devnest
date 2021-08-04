import React,{useState} from "react";
import { saveAs } from 'file-saver';
const Meme = ({ meme, setMeme }) => {
    const [form, setForm] = useState({
        template_id:meme.id,
        username:"teasty",
        password:"PPS$Asr52ttCfaF",
        boxes:[],

    });
    const generateMeme =()=>{
        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;

         // eslint-disable-next-line array-callback-return
         form.boxes.map((box,index) => {
          url+=`&boxes[${index}][text]=${box.text}` ;
       });

       fetch(url)
       .then((res)=>res.json())
       .then((data)=>{
        if(data.success===true){
            setMeme({...meme, url: data.data.url});
            
              }
  
              else{
                  alert(`All boxes must be filled`);
              }
       }
       );
       console.log({generateMeme})
        
    }
    return (<div className="meme">
        <img src={meme.url} alt="" />
        <div>
            {[...Array(meme.box_count)].map((_, index) => (<input 
           key={index} type="text" placeholder={`Enter Caption ${index + 1}`} onChange={(e)=>{
                const newBoxes=form.boxes;
                newBoxes[index]={text:e.target.value}
                setForm({...form,boxes:newBoxes});
            }} />))}
        </div>
        <div className="">
            <button onClick={generateMeme}>Generate  Meme</button>
            <button onClick={() => {setMeme(null)}}>Choose Template</button></div>
            <button onClick={ ()=> {saveAs(meme.url, `${meme.name}`)}}>Download Meme</button>
            </div>
            
            )
}
export default Meme;