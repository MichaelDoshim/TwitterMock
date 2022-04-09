//rfce
import React from 'react'
import './SidebarOption.css';

// We can pass in a icon/styling/text as an argument for the function by using props
// {} means destructing, es6 to desturcture 
// Active state
function SidebarOption({active, text, Icon}) {
    return (
        // if there has been an active prop that has been passed through then
        // add 'sidebarOption__active' in css
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <Icon />
            <h2> {text} </h2>
        </div>
    )
}

export default SidebarOption
