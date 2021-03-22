import React from 'react'
import { ColorContext } from '../Contexts/ColorContext';
import ShowColor from './ShowColor';
import styles from '../styles/PeakColors.module.css'
import { PeakColorsProps } from '../Interfaces/Interfaces'

const PeakColors = ({colors, group, isUserColors}: PeakColorsProps) => {

    const { setNewSiteColors, userColors } = React.useContext(ColorContext);

    function handleChange({target}: React.ChangeEvent<HTMLInputElement>) {
        const newColors = [...target.value.split(',')];
        setNewSiteColors(newColors);
    }

    return (
        <>
            {isUserColors && userColors ? userColors.map((itemColors, index) => {
                return (
                    <label className={styles.labelContainer} htmlFor={`grouClors-${index}`}>
                        <input id={`grouClors-${index}`} type="checkbox"  onChange={handleChange} value={itemColors} />
                        <ShowColor group={group}  itemColors={itemColors}/>
                    </label>)
            }) : colors.map((itemColors, index) => {
                return (
                    <label className={styles.labelContainer} htmlFor={`grouClors-${index}`}>
                        <input id={`grouClors-${index}`} type="checkbox"  onChange={handleChange} value={itemColors} />
                        <ShowColor group={group}  itemColors={itemColors}/>
                    </label>)
            })}

        </>
    )
}

export default PeakColors
