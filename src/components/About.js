import React, { useState } from 'react'

export default function About() {

  const [myStyle,setMyStyle]=useState({
        color:'black',
        backgroundColor:'white'
    })



    return (
        <div className='container' style={myStyle}>
            <h2 className='my-3'>About Us</h2>
            <div className="accordion accordion-flush" id="accordionFlushExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                           <strong>Analyze Your text</strong> 
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>TextUtils gives you a way to analyze your text very quickly and 
                        efficiently. Be it word count or character count </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          <strong>Free to Use</strong> 
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text.TextUtils reports the number of word and characters. 
                        Thus it is suitable for writing text with word/character limit.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                           <strong>Browser Compatible</strong> 
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle} >
                            This Word counter software in any web browser such as Chrome, Firefox,Internet Explorer,Opera,Safari.It suits to count the characters in facebook,blog,books,excel document,pdf document,essays etc.
                    
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}