import React from 'react'

function Button({text,icon,onClickFunction}) {

    function handleClick(){
        onClickFunction();
    }

    return (
        <button onClick={handleClick} className='flex flex-ac' style={{padding:"10px 20px",marginRight:"15px",fontSize:"14px", fontWeight:"500", letterSpacing:"0.5px" ,  color:"#a49ebe" , borderRadius:"20px",border:"none",background:"white", boxShadow:"1px 2px 5px 0px rgba(0,0,0,0.15)"}}>
            {icon && <i className={icon} style={{marginRight:"15px"}}></i>}
            {text}
        </button>
    )
}

export default Button
