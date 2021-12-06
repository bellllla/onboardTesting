import React from 'react'
import styles from './Header.module.scss'

function Header() {
    return (
        <header className = {styles.header_container}>
            <h3>Onboard Testing</h3>
            <p>Next.js / Typescript / Storybook / Scss</p>
        </header>
    )
}

export default Header
