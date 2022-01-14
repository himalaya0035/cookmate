import React from 'react'
import Button from '../Button/Button'
import Searchbar from '../Searchbar/Searchbar'

function Header() {
    return (
        <div className='flex flex-sb flex-ac'>
            <div className='flex'>
                <Searchbar/>
                <Button icon={'fa fa-plus'} text={'Add Recipe'}/>
            </div>
            <div className='flex center' style={{width:"40px", height:"40px", background:"#fb9300", borderRadius:"10px"}} >
                <i className="fa fa-user" style={{color:"white"}}></i>
            </div>
        </div>
    )
}

export default Header
