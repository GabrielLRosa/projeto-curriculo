import React from 'react'
import styles from '../styles/ShowColor.module.css'
import { showColorProps } from '../Interfaces/Interfaces'

const ShowColor = ({itemColors, itemColor, group}: showColorProps) => {

        if(group)
            return (
                <>
                    {itemColors && itemColors.map((color, index) => {
                        return (
                            <div className={styles.showColor} key={color + '-' + index} style={{ backgroundColor: color}} />
                            )
                    }) } 
                </>
            )
        else {
            return <div className={styles.showColor} key={itemColor} style={{ backgroundColor: itemColor ? itemColor: 'black'}} />
                        
        }
}

export default ShowColor
