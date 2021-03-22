import React from 'react'
import { ColorContext } from '../Contexts/ColorContext'
import styles from '../styles/ColorsExemple.module.css'
import ShowColor from './ShowColor'

const ColorsExemple = () => {

    const { currentStep, changeCurrentStep, siteColors, saveUserColor } = React.useContext(ColorContext);

    function handleSaveClick() {
        saveUserColor();
    }

    function handleClick({target}:  React.ChangeEvent<HTMLInputElement>) {
        changeCurrentStep(target.value);
    }

    return (
        <div className={`${styles.container} animeLeft`}>
            <label  className={`${styles.colorSelector} ${currentStep === 0 ? styles.selected  : ''}`}  htmlFor="bgAside">
                <input id="bgAside" type="checkbox"  onChange={handleClick} value="bgAside" />
                <ShowColor group={false} itemColor={siteColors.bgAside} /> Cor Lateral
            </label>
            <label className={`${styles.colorSelector} ${currentStep === 1 ? styles.selected  : ''}`}  htmlFor="bgMain">
                <input id="bgMain" type="checkbox"  onChange={handleClick} value="bgMain" />
                <ShowColor group={false} itemColor={siteColors.bgMain} /> Cor Princpical
            </label>
            <label className={`${styles.colorSelector} ${currentStep === 2 ? styles.selected  : ''}`}  htmlFor="bgCard">
                <input id="bgCard" type="checkbox"  onChange={handleClick} value="bgCard" />
                <ShowColor group={false} itemColor={siteColors.bgCard} />  Cor do Card
            </label>
            <label className={`${styles.colorSelector} ${currentStep === 3 ? styles.selected  : ''}`}  htmlFor="fontColor">
                <input id="fontColor" type="checkbox"  onChange={handleClick} value="fontColor" />
                <ShowColor group={false} itemColor={siteColors.fontColor} /> Cor da Fonte
            </label>
            <label className={`${styles.colorSelector} ${currentStep === 4 ? styles.selected  : ''}`}  htmlFor="boxShaddow">
                <input id="boxShaddow" type="checkbox"  onChange={handleClick} value="boxShaddow" />
                <ShowColor group={false} itemColor={siteColors.boxShaddow} /> Cor da Sombra
            </label>
            <button onClick={handleSaveClick} className={styles.saveButton}>Salvar</button>
        </div>
    )
}

export default ColorsExemple
