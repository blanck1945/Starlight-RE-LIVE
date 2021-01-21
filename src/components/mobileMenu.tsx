import { func } from 'prop-types'
import React from 'react'
import styles from "./mobileMenu.module.scss"

const mobileMenu = ({func, compState}) => {
    return (
        <div className={compState ? styles.bg : styles.bgClose}>
            <span onClick={() => func(!compState)} >close</span>
        </div>
    )
}

export default mobileMenu
