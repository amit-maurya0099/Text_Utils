import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
       props.showAlert("Converted to UpperCase",'success')
    }
    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase",'success')
        
    }
    const handleclearClick= (event) => {
         let newtext='';
        setText(newtext);
        props.showAlert("Text has been Cleared!",'success')
        
    }
    const handleonchange = (event) => {

        setText(event.target.value)
    }
    const handlespeechClick=()=>{
        
            let newtext =text;
          
            // Create a new SpeechSynthesisUtterance object
            let utterance = new SpeechSynthesisUtterance();
          
            // Set the text and voice of the utterance
            utterance.text = newtext;
            utterance.voice = window.speechSynthesis.getVoices()[0];
          
            // Speak the utterance
            window.speechSynthesis.speak(utterance);
            props.showAlert("Speech mode ON",'success')
        
    }
    const handleCopy = () => {
        let text=document.getElementById("exampleFormControlTextarea1")
        text.select();
        navigator.clipboard.writeText(text.value);  
        props.showAlert("Copied to Clipboard",'success')
        
    }
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#053149'}}> 
            <h1 >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#053149'}} id="exampleFormControlTextarea1" onChange={handleonchange} rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button  className="btn btn-primary mx-2 my-1" onClick={handleloClick}>Convert to LowerCase</button>
            <button  className="btn btn-primary mx-2 my-1" onClick={handlespeechClick}>textTospeech</button>
            <button  className="btn btn-primary mx-2 my-1" onClick={handleclearClick}>clear text</button>
            <button  className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy text</button>

        </div>
        <div className="container my-4" style={{color:props.mode==='dark'?'white':'#053149'}}>
            <h1>Summary</h1>
            <p>Total word: {text.split(" ").filter((element)=>{return element.length!==0 }).length}</p>
            <p>Total characters:{text.length}</p>
            <p>Avg time to read :{0.008* text.split(" ").length}</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter your text in textbox to preview it here'}</p>
        </div>
        </>
    )
}
