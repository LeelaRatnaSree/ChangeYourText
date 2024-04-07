import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("enter your text here");
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showalerts("text is capitalized","success");
    }
    const handlelowClick=()=>{
        let newText1=text.toLowerCase();
        setText(newText1);
        props.showalerts("text is converted to lowercase","success");
    }
    const handleClearClick=()=>{
        let newText2="";
        setText(newText2);
        props.showalerts("text cleared","success");
    }
    const handleCopyClick=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalerts("text copied","success");
    }
  return (
    <>
    <div className="container my-3"  style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3" style={{backgroundColor:props.mode==='light'?'white':'#07224a',color:props.mode==='light'?'black':'white'}} ></textarea>
        <button  disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleUpClick}>convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handlelowClick}>convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleClearClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleCopyClick}>Copy text</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}} >
        <h2>your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0;}).length}words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"write your text to preview"}</p>
    </div>
    </>
  )
}
