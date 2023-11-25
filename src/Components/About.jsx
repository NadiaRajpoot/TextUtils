import React from 'react'

const About = (props) => {
  return (
    <div class = "container my-5" style={{backgroundColor: props.mode === 'light'? 'white':'#18191A',color: props.mode === 'light'? 'black':'white'}}>
       <h1>About <i>TextUtils!</i></h1>
       <p><i><b>TextUtils</b></i>, a dynamic ReactJS website, redefines the landscape of text editing. Unlike traditional editors like WordPad or NotePad, TextUtils offers an array of advanced functionalities to enhance your text manipulation experience. Seamlessly converting text cases, providing a playful text reversal, efficiently removing unnecessary whitespaces, and offering detailed text analysis, <i>TextUtils</i> caters to a diverse range of user needs. Its open-source nature ensures ongoing innovation, making it a standout choice in the realm of text editing. Every interaction with TextUtils unveils new possibilities, reflecting its commitment to continuous improvement.</p>
       
      <div className="accordion" id="accordionExample" style={{backgroundColor: props.mode === 'light'? 'white':'#18191A',color: props.mode === 'light'? 'black':'white'}}>
  <div className="accordion-item" style={{backgroundColor: props.mode === 'light'? 'white':'#18191A',color: props.mode === 'light'? 'black':'white'}}>
     
    <h2 className="accordion-header">
      <button className="accordion-button" style={{backgroundColor: props.mode === 'light'? 'white':'#18191A',color: props.mode === 'light'? 'black':'white'}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">  <strong>Analyze Your Text</strong></button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       Beyond basic editing, <strong>TextUtils</strong> analyzes text, providing word and character counts, estimating reading time for enhanced productivity.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor: props.mode === 'light'? 'white':'#18191A',color: props.mode === 'light'? 'black':'white'}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={{backgroundColor: props.mode === 'light'? 'white':'#18191A',color: props.mode === 'light'? 'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free Utility</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      It is completely <strong>free</strong> to use. No credit cards required. Use as much as you want!!
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor: props.mode === 'light'? 'white':'#18191A',color: props.mode === 'light'? 'black':'white'}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={{backgroundColor: props.mode === 'light'? 'white':'#18191A',color: props.mode === 'light'? 'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
   <strong>Browser compatiblity</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      It is compatible with all of your favorite browsers.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
