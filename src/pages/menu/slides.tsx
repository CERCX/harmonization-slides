import Image from "next/image";
import React, {useState} from "react";
import Typography from "@mui/material/Typography";

interface IProps {
    slides: string[];
    musicoNome: string;
}

const Slides: React.FC<IProps> = ({ slides, musicoNome }) => {

    const [cifraId, setCifraId] = useState(0)
    const [showSlide, setShowSlide] = useState(false)

    const handleShowSlide = (slideId: number) => {
        console.log(slideId)
        setCifraId(slideId)
        setShowSlide(true)
    };

    return (
        <div>
            {showSlide}
            <h1 onClick={()=>{setShowSlide(false)}}><a href="#"> ÍNDICE </a></h1>
            <ul style={{columns: 4, listStyleType:"none", WebkitColumns: 4, MozColumns: 4, MozColumnWidth: "300px", WebkitColumnWidth: "300px"}}>
                {!showSlide && slides && slides.length && slides.map((slideInfo, index) => {
                    return (
                        <li key={index} style={{padding: "5px"}}>
                            <Typography style={{fontSize:"x-large"}}><b>{index + 1}</b> - <button style={{fontSize: "x-large",  cursor: "pointer"}} onClick={() => handleShowSlide(index+2)}>{slideInfo}</button></Typography>
                        </li>
                    );
                })}
            </ul>
            {showSlide && <div>
                {cifraId && musicoNome && <Image src={require('../../assets/cifras/' + musicoNome + '/' +  cifraId + '.png')} alt={'img'} quality="100" sizes="110vw"
                                                 style={{
                                                     width: '70%',
                                                     height: 'auto',
                                                 }}	></Image>}
                </div>
            }
        </div>
    );
};

export default Slides;
