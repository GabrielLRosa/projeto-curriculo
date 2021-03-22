import React from "react";
import { ColorContext } from "../Contexts/ColorContext";
import styles from '../styles/Cards.module.css';
import { JobsDescriptionProps, CertificatesProps, CardsProps } from '../Interfaces/Interfaces'

const Cards = ( {infos}: CardsProps) => {

    const { siteColors } = React.useContext(ColorContext);
    const [openInfo, setOpenInfo] = React.useState(false);

  function handleClick(event: React.MouseEvent) {
      if(event.target === event.currentTarget){
        setOpenInfo((openInfo) => !openInfo); 
      }
  }

  return (
    <div onClick={handleClick} 
        style={{ 
            color: siteColors.fontColor, 
            backgroundColor: siteColors.bgCard, 
            boxShadow: `${siteColors.boxShaddow} 1px 1px 10px 2px` }}
        className={`${styles.cardsContainer} ${openInfo && styles.cardsContainerOpen}`}>

      <h2 style={{ cursor: 'initial' }}>{infos.title}</h2>

      {openInfo && infos.description && <p className={`${styles.infoResume} `}>{infos.description}</p>}

      {openInfo && infos.resume && <p className={`${styles.infoResume} `}>{infos.resume}</p>}

      {openInfo && infos.detailDescription && (
        <ul className={`${styles.listInfo} `}>
          {infos.detailDescription.map((details: string, index: number) => {
            return <li key={`detail-${index}`}>{details}</li>;
          })}
        </ul> 
      )}
      
      {openInfo && infos.jobsDescription && (
          infos.jobsDescription.map((job: JobsDescriptionProps, index: number) => {
            return (
                <span key={`job-${index}`} className={`${styles.jobsContainer} `}>
                    <h3>{job.jobTitle}</h3>
                    <ul className={styles.listInfo}>
                        {job.jobDescription.map((description: string, index: number) => {
                            return <li key={`jobDesc-${index}`}>{description}</li>
                        })}
                    </ul>
                </span>
                 
            );
          })
      )}
        
        {openInfo && infos.cetificates && (
          <div>
            {infos.cetificates.map((certificate: CertificatesProps, index: number) => {
              return (
                <a target="_blank" rel="noreferrer" key={`certificate-${index}`} href={certificate.link}>
                  <img src={`/assets/${certificate.img}`} alt="Certificado" />
                </a>
              )
            })}
          </div>
        )}

    </div>
  );
};

export default Cards;
