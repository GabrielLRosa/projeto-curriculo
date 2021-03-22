//CURRICULO
export interface CurriculoInfosProps  { 
    title: string; 
    description?: string; 
    detailDescription?: string[]; 
    cetificates?: {}[]; 
    resume?: string; 
    jobsDescription?: {}[]; 
    
}

export interface JobsDescriptionProps {
    jobTitle: string;
    jobDescription: string[];
}

export interface CertificatesProps {
    link: string;
    img: string;
}

//CARDS
export interface CardsProps {
    infos: CurriculoInfosProps
}

export interface showColorProps {
    itemColors?: string[],
    itemColor?: string,
    group: boolean
    
}

export interface PeakColorsProps {
    colors: string[][],
    isUserColors?: boolean
    group: boolean
}

export interface MenuItemProps {
    group: boolean,
    isUserColors?: boolean
    title: string
}

export interface DefineNewColorsProps {
    color: string[],
    group: boolean
}

//CONTEXT
export interface SiteColorsProps {
    bgAside: string,
    bgMain: string,
    bgCard: string,
    fontColor: string,
    boxShaddow: string

}

export interface ColorsContextData {
    colors: string[][];
    color: string[];
    siteColors: SiteColorsProps;
    userColors: string[][] | null;
    steps: string[];
    currentStep: number;
    showColorExemple: boolean;
    curriculoInfos: CurriculoInfosProps[];
    changeCurrentStep: (arg :string) => void;
    setNewSiteColors: (arg :string[]) => void;
    setNewSiteColor: (arg : string) => void;
    OpenMenuExmepleColors : () => void;
    saveUserColor: () => void;
}

