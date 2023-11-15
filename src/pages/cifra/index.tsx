import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {NextPage} from "next";
import Image from 'next/image'

interface DataProps {
}

const Cifra: NextPage<DataProps> = ({ }) => {

    const router = useRouter();

    const {
        query: { cifraId , musicoNome},
    } = router;

    return (
        <Image src={require('../../assets/cifras/' + musicoNome + '/' +  cifraId + '.png')} alt={'img'} quality="100" layout="fill"></Image>
    );
};

export default Cifra;
