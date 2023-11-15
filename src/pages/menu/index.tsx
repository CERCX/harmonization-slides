import React, {useState, useEffect} from "react";
import Head from "next/head";
import { NextPage } from "next";
import {
    Col,
    Row,
} from "react-bootstrap"
import Link from "next/link";
import Slides from "./slides";
import {useRouter} from "next/router";

interface DataProps {}
interface DataProps {
}

const Menu: NextPage<DataProps> = ({}) => {
    const router = useRouter();

    const {
        query: { nomeDoMusico},
    } = router;

    const [listOfSlidesMichel, setListOfSlidesMichel] = useState(['A Casa-Lar', 'A Melhor Oração', 'A Minha Luz', 'Alfabeto Cristão', 'Alguém Que lhe quer', 'Alívio ', 'Aos Pés do Monte', 'Aprendiz', 'Arco-Íris', 'Asas', 'As Bem-Aventuranças', 'Ascensão', 'Assim seja', 'Atitudes de Amor', 'Aura Rosa', 'Aurora', 'Ave ', 'Azul', 'Bom Dia', 'Buscai Primeiro', 'Cântaro', 'Cante', 'Cativar', 'Chamas', 'Com Cristo', 'Com Jesus', 'Concepção Astral', 'Confia', 'Consciência Pura', 'Cristo estou aqui', 'De bem com a Vida', 'Desperta', 'Do lado de lá', 'Doce é sentir', 'Duplo Eterno', 'Encontro Marcado', 'Família Ninguém Vive', 'Família Universal ', 'Flor de Luz', 'Fraternidade', 'Hino a B. de Menezes ', 'Hino a Emmanuel', 'História de Madalena', 'Homem de Bem', 'Irmã Sheila', 'Irmão Sol Irmã Lua', 'Jesus Aos Doze Anos', 'Jesus Gosta de Você', 'Lições do Cristo', 'Luzes da Luz', 'Mãe Santíssima', 'Mandamento Maior', 'Médiuns', 'Menino Jesus', 'Mestre do Coração', 'Minha Oração ', 'Mundo-Escola', 'Nascido Para Amar', 'Natal o Ano Inteiro', 'Noite Igual', 'O Semeador', 'Obrigado Senhor', 'Olhe Para o Céu', 'Olhos no Espelho', 'Oração (Querido Jesus)', 'Outras Moradas', 'Pai Nosso', 'Pedro (Tim)', 'Pedro (Franklin)', 'Perdoa', 'Perfume no Ar', 'Pingo de Gente ', 'Planeta Coração', 'Porto Amor', 'Prece (J. Cabete)', 'Prece (Agradecemos)', 'Prece (J. de Deus)', 'Prece ao Consolador', 'Quando P. em Jesus', 'Quanta Luz', 'Ramas', 'Raízes', 'Salmo 23', 'Saudades de Jesus', 'Sê', 'Segredo', 'Semente', 'Senhor das Estrelas', 'Senhor, Que Queres...', 'Shairuá', 'Silêncio', 'Simpatia', 'Vaso Escolhido', 'Verbos', 'Zaqueu', 'Zum-Zum-Zum'])

    return (
        <div>
            <h1>ÍNDICE</h1>
            <Slides
                slides={listOfSlidesMichel}
            />
        </div>
    )
}

export default Menu;