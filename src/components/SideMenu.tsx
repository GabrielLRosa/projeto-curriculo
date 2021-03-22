import React from 'react'
import { ColorContext } from '../Contexts/ColorContext'
import styles from '../styles/SideMenu.module.css'
import ColorsExemple from './ColorsExemple';
import MenuItem from './MenuItem';

const SideMenu = () => {

    const {siteColors, showColorExemple, userColors} = React.useContext(ColorContext);

    return (
        <div style={{ backgroundColor: siteColors.bgAside, boxShadow: `${siteColors.boxShaddow} 1px 1px 25px 2.5px` , color: siteColors.fontColor}} className={styles.aside}>
            <div className={styles.navContainer}>
                <MenuItem group={true} title={'Cores Padrão'}/>
                {userColors ? <MenuItem group={true} isUserColors={true} title={'Cores do usuário'}/> : null}
                <MenuItem group={false} title={'Escolher cores'}/>
            </div>
            { showColorExemple && <ColorsExemple />}
        </div>
    )
}

export default SideMenu
