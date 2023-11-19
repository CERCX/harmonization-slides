import React, {useEffect, useState} from "react";
import { NextPage } from "next";
import { io } from "socket.io-client";
import Image from "next/image";

interface DataProps {}

const MichelSlides: NextPage<DataProps> = ({}) => {

    const [slideId, setSlideId] = useState(0)

    useEffect(() => {

        const socketIo = io("wss://woctools-socketio.gogeo.io")

        // socketIo.on('message', (msg) => console.log(msg))
        socketIo.on('reply-data', (newSlide) => {
            console.log("Received message!")
            console.log(newSlide)
            setSlideId(newSlide['teste'])
        })

        return () => {
            socketIo.disconnect()
        }
    }, []);

    return (
        <div>
            {slideId && <Image src={require('../../../assets/slides/michel/img' +  slideId + '.png')} alt={'img'} quality="100" fill={true}>

            </Image>}
        </div>
    )
}

export default MichelSlides;