import React from 'react'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import './Layout.css'

function Layout({children, isHeader=true}) {
    return (
        <div>
            <Sidebar/>
            <div className="pageWrapper">
                {isHeader && <Header/>}
                {children}
            </div>
        </div>
    )
}

export default Layout
