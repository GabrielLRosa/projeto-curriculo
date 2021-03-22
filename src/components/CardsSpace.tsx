import React from 'react'
import { ColorContext } from '../Contexts/ColorContext'
import styles from '../styles/CardsSpace.module.css'
import Cards from './Cards'
import { CurriculoInfosProps } from '../Interfaces/Interfaces'

const CardsSpace = () => {

    const { curriculoInfos, siteColors } = React.useContext(ColorContext);

    return (
        <div className={styles.main} style={{ backgroundColor: siteColors.bgMain }}>
            <section className={styles.cardsSpace}>
                {curriculoInfos && curriculoInfos.map((infos: CurriculoInfosProps, index: number) => {
                    return (
                        <Cards infos={infos}  key={`info-${index}`} />
                    )
                })}
            </section>
        </div>
    )

}
export default CardsSpace
