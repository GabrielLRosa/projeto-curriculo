import React from 'react'
import { ColorContext } from '../Contexts/ColorContext';
import ShowColor from './ShowColor'
import styles from '../styles/DefineNewColors.module.css'
import { DefineNewColorsProps } from '../Interfaces/Interfaces'



const DefineNewColors = ({color, group}: DefineNewColorsProps) => {

    const { setNewSiteColor } = React.useContext(ColorContext);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewSiteColor(event.target.value); 
    }
    return (
        <div className={`${styles.container} colorsExempleActive`}>
            {color.map((itemColor, index) => {
                return (
                    <label className={styles.colorSelector} key={`individualColor-${index}`} htmlFor={`individualColor-${index}`}>
                        <input id={`individualColor-${index}`} type="checkbox"  onChange={handleChange} value={itemColor} />
                        <ShowColor group={group} itemColor={itemColor}/>
                    </label>)
            })}

            
        </div>
    )
}

export default DefineNewColors
