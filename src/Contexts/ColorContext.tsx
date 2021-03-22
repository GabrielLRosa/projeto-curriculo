import React, { ReactNode } from 'react'
import groupColors from '../api/coresPorEsquema.json';
import singleColors from '../api/coresIndividuais.json';
import infos from '../api/infos.json';
import { ColorsContextData } from '../Interfaces/Interfaces'

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ColorContext = React.createContext({} as ColorsContextData);

export function ColorProvider({children}: ChallengesProviderProps) {

    const colors = groupColors;
    const color = singleColors;
    const curriculoInfos = infos;
    const steps = ['bgAside','bgMain','bgCard', 'fontColor', 'boxShaddow'];
    const [showColorExemple, setShowColorExemple] = React.useState(false);
    const [currentStep, setCurrentStep] = React.useState(0);
    const [siteColors, setSiteColors] = React.useState({
        bgAside: '',
        bgMain: '',
        bgCard: '',
        fontColor: '',
        boxShaddow: '',

    })
    const [userColors, setUserColors] = React.useState(null);

    function setNewSiteColors(newColors: string[]) {
        const colorsObj = {
            bgAside: newColors[0],
            bgMain: newColors[1],
            bgCard: newColors[2],
            fontColor: newColors[3],
            boxShaddow: newColors[4],
        }
        setSiteColors(colorsObj);
    }

    function setNewSiteColor(value: string) {
        // if(currentStep === 4) {setCurrentStep(-1)};
        setSiteColors((colors) => {
            return {...colors, [steps[currentStep]]: value};
        }); 
        // Passa para a próxima cor a ser escolida 
        // setCurrentStep((currentStep) => currentStep + 1);
    }

    function changeCurrentStep(newstep: string) {
        setCurrentStep(steps.indexOf(newstep));
    }

    function OpenMenuExmepleColors() {
        setShowColorExemple(!showColorExemple)
    }

    function compareColorsToSave(colors: [], cores: string[]) {
        let cont = 0;
        for(let i = 0; i < colors.length; i++) {
            for(let j = 0; j < cores.length; j++) {
                if(colors[i][j] === cores[j]) {
                    cont++;
                    if(cont >= 5) { return false; }
                }
            }
            cont = 0;
        };
        cont = 0;
        return true;
    }

    function saveUserColor() {
        const userSavedColors = window.localStorage.getItem('userColors');
        const siteSavedColors = Object.values(siteColors);
        if(userSavedColors) {
            const parseSavedColors = JSON.parse(userSavedColors)
            if(compareColorsToSave(parseSavedColors, siteSavedColors)) {
                const finalColors = [...parseSavedColors, siteSavedColors]
                window.localStorage.removeItem('userColors');
                window.localStorage.setItem('userColors', JSON.stringify(finalColors));
                setUserColors(finalColors);
        } 
        }else {
            const finalColors = [siteSavedColors];
            window.localStorage.setItem('userColors', JSON.stringify(finalColors));
            setUserColors(finalColors);
        }
    }

    React.useEffect(() => {
        const savedColors = window.localStorage.getItem('userColors') || false;
        if(savedColors) {
            setUserColors(JSON.parse(savedColors));
        }
    }, [])

    return (
        <ColorContext.Provider value={{
            colors,
            color,
            siteColors,
            userColors,
            steps,
            currentStep,
            showColorExemple,
            curriculoInfos,
            OpenMenuExmepleColors,
            changeCurrentStep,
            setNewSiteColors,
            setNewSiteColor,
            saveUserColor

        }}>
            {children}
        </ColorContext.Provider>
    )

};