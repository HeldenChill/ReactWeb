import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']
const COLORS = ['black', 'white']

const Button = ({children,type,onClick,link,buttonStyle,buttonSize,buttonColor}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkButtonColor = COLORS.includes(buttonColor) ? buttonColor : COLORS[0];
    const checkLink = link == undefined ? '' : link
    return (
        <Link to={checkLink} className='btn-mobile'>
            <button 
                className={`${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
                onClick = {onClick}
                type = {type}
            >
                {children}
            </button>
        </Link>
    )
}

export default Button