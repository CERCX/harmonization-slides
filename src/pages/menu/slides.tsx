import Image from "next/image";
import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import {io} from "socket.io-client";
import {Col, Row} from "react-bootstrap";
import { Checkbox } from "@mui/material";

interface IProps {
    slides: string[];
    musicoNome: string;
}

const Slides: React.FC<IProps> = ({ slides, musicoNome }) => {

    const [cifraId, setCifraId] = useState(0)
    const [showSlide, setShowSlide] = useState(false)
    const [showCifraHere, setSHowCifraHere] = useState(false)

    const handleShowSlide = (slideId: number) => {
        console.log(slideId)
        setCifraId(slideId+1)
        setShowSlide(true)

        const socketIo = io("wss://woctools-socketio.gogeo.io")

        socketIo.emit('reply-data', {
            teste: slideId
        })
    };

    return (
        <div>
            <Row>
                <Col>
                    <h2 onClick={()=>{setShowSlide(false)}}><a href="#"> ÍNDICE </a></h2>
                </Col>
                <Col>
                    <Checkbox id={"formCheck2"} checked={showCifraHere} onChange={(e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; })=>{setSHowCifraHere(e.target.checked)}}></Checkbox>
                    <label className="form-check-label" htmlFor="formCheck2">
                        Vizualizar as cifras nesta página
                    </label>
                </Col>
            </Row>
            <ul style={{columns: 4, listStyleType:"none", WebkitColumns: 4, MozColumns: 4, MozColumnWidth: "300px", WebkitColumnWidth: "300px"}}>
                {(!(showCifraHere && showSlide) || (showCifraHere && !showSlide)) && slides && slides.length && slides.map((slideInfo, index) => {
                    return (
                        <li key={index} style={{padding: "5px"}}>
                            <Typography style={{fontSize:"x-large"}}><b>{index + 1}</b> - <button style={{fontSize: "x-large",  cursor: "pointer"}} onClick={() => handleShowSlide(index+1)}>{slideInfo}</button></Typography>
                        </li>
                    );
                })}
            </ul>
            {showSlide && showCifraHere && <div>
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
