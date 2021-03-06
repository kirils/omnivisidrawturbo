import React from 'react'
import styles from "./mainmenu.module.scss"

function Mainmenu() {
    return (
            <div className={styles.navbar}>
                <a href="/home">Home</a>
                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>File
                    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={styles.dropdowncontent}>
                    <a href="/">New...</a>
                    <a href="/">Open from</a>
                    <a href="/">Open recent</a>
                    <a href="/">Save</a>
                    <a href="/">Save as</a>
                    <a href="/">Rename</a>
                    <a href="/">Make a copy</a>
                    <a href="/">Import from</a>
                    <a href="/">Export as</a>
                    <a href="/">New library</a>
                    <a href="/">Open library from</a>
                    <a href="/">Page setup...</a>
                    <a href="/">Print...</a>
                    <a href="/">Close</a>
                    </div>
                </div>
                <a href="/">Edit</a>
                <a href="/">View</a>
                <a href="/">Extras</a>
                <a href="/">Help</a>
            </div>
    )
}

export default Mainmenu
