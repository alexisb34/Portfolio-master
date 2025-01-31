import React, { forwardRef } from "react";
import { saveAs } from "file-saver";
import { API_URL } from "../config";
import { AiOutlineLinkedin } from "react-icons/ai";
import photoPortrait from '../assets/images/portrait.jpg';

const AboutMe = (props,ref) => {

  const saveFile = () => {
    saveAs(
      API_URL + "/uploads/CV_Alexis_BENGEL_1dc5913ad0.pdf",
      "CV_Alexis_BENGEL.pdf"
    );
  };
  
  return (
    
    <div className = "block justify-center items-center fadeIn"> 
      <div className="justify-center pt-28">
        <div className="block">
          <div className="lg:flex justify-center">
            <img className= "rounded-lg m-auto mb-10 block h-72 lg:mt-20 lg:m-10  fadeIn"src= {photoPortrait} alt="portrait"/>
            <div>      
              <span ref={ref} className="text-my-yellow lg:text-4xl text-2xl lg:pr-48 font-canvasBlack">Qui suis-je<br/></span>
              <p className="text-white w-[300px] pt-8">
                Bonjour, je m'appelle Alexis j'ai 32 ans et je suis originaire du sud
                de la France.
                Je me suis installé récemment à Nantes pour entreprendre une reconversion
                professionnel dans le métier de développeur web.

                J'adore voyager, découvrir de nouveaux endroits et les photographier.
                Dans la vie j'aime faire du Softball et du Baseball.
                J'adore sortir avec des amis et leur faire découvrir ma passion pour les 
                boissons houblonnées. Il m'arrive même d'en brasser moi-même. 

              </p>
            </div> 
          </div>
          <div className="flex justify-center">
            <button onClick={saveFile} className="glow-on-hover border-2 border-my-yellow mb-8 hover:text-my-yellow transition duration-700 ease-in-out">&nbsp;Mon CV&nbsp;</button>
            <a href="https://www.linkedin.com/in/alexis-bengel/" target="_blank" className="glow-on-hover-button ml-5">
              <AiOutlineLinkedin className="lkd-icon justify-items-center" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(AboutMe);

