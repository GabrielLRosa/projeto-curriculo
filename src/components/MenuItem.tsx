import React from 'react'
import { ColorContext } from '../Contexts/ColorContext';
import styles from '../styles/MenuItem.module.css';
import Peakcolors from '../components/PeakColors'
import DefineNewColors from './DefineNewColors';
import useMedia from '../Hooks/useMedia'
import { MenuItemProps } from '../Interfaces/Interfaces'



const MenuItem = ({group, isUserColors, title}: MenuItemProps) => {

    const { siteColors, colors, color, OpenMenuExmepleColors, saveUserColor} = React.useContext(ColorContext);
    const mobile = useMedia('(max-width: 970px)')
    const [openMenu, setOpenMenu] = React.useState(false);

    function handleClick() {
        if(!mobile){ 
            setOpenMenu(!openMenu);
        }else {
            saveUserColor();
        }
        if(!group && !mobile) OpenMenuExmepleColors();
    }

    React.useEffect(() => {
        if(mobile) {
            setOpenMenu(true);
        }
    }, [mobile])

    return (
        <div className={styles.menu}>
            <button onClick={handleClick} className={`${styles.title} ${openMenu && styles.openTitle}`} >{ mobile && title === 'Escolher cores' ? `${title} | Salvar` : title }</button>
            {openMenu && 
            <div className={styles.mainColor} style={{ boxShadow: `${siteColors.boxShaddow} 1px 1px 6px 3px` }}>
                {group ? <Peakcolors group={group} colors={colors} isUserColors={isUserColors}/> : <DefineNewColors group={group} color={color}/> }
            </div>}
        </div>
    )
}

export default MenuItem
