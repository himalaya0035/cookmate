import React from 'react'
import Brandname from '../Brandname/Brandname'
import Menu from '../Menu/Menu'
import Sitelinks from '../Sitelinks/Sitelinks'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className='sidebarWrapper'>
            <Brandname/>
            <Menu/>
            <Sitelinks/>
        </div>
    )
}

export default Sidebar
