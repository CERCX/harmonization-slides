import React, {useState} from "react";
import { NextPage } from "next";
import Slides from "../slides";
interface DataProps {}

const Menu: NextPage<DataProps> = ({}) => {

    const [listOfSlidesMichel, setListOfSlidesMichel] = useState(['A Casa-Lar', 'A Melhor Oração', 'A Minha Luz', 'Alfabeto Cristão (D)', 'Alfabeto Cristão (E)', 'Alguém Que lhe quer', 'Alívio ', 'Aos Pés do Monte', 'Aprendiz (C)', 'Aprendiz (E)', 'Arco-Íris', 'Asas (C)', 'Asas (D)', 'As Bem-Aventuranças', 'Ascensão', 'Assim seja', 'Atitudes de Amor', 'Aura Rosa', 'Aurora', 'Ave ', 'Azul', 'Bom Dia', 'Buscai Primeiro', 'Cântaro', 'Cante', 'Cativar (1)', 'Cativar (2)', 'Chamas', 'Com Cristo', 'Com Jesus', 'Concepção Astral', 'Confia', 'Consciência Pura', 'Cristo estou aqui', 'De bem com a Vida', 'Desperta', 'Do lado de lá', 'Doce é sentir', 'Duplo Eterno', 'Encontro Marcado', 'Família Ninguém Vive', 'Família Universal ', 'Flor de Luz', 'Fraternidade', 'Fronteiras', 'Hino a B. de Menezes (1)', 'Hino a B. de Menezes (2)', 'Hino a Emmanuel (A)', 'Hino a Emmanuel (G)', 'História de Madalena (1)', 'História de Madalena (2)', 'Homem de Bem', 'Irmã Sheila', 'Irmão Sol Irmã Lua', 'Jesus Aos Doze Anos', 'Jesus Gosta de Você', 'Lições do Cristo', 'Luzes da Luz', 'Mãe Santíssima', 'Mandamento Maior', 'Meditação', 'Médiuns', 'Menino Jesus', 'Mestre do Coração', 'Minha Oração ', 'Mundo-Escola (D)', 'Mundo-Escola (G)', 'Nascido Para Amar', 'Natal o Ano Inteiro', 'Noite Igual', 'O Semeador (A)', 'O Semeador (G)', 'Obrigado Senhor', 'Olhe Para o Céu', 'Olhos no Espelho', 'Oração (Querido Jesus)', 'Outras Moradas', 'Pai Nosso', 'Pedro (Tim)', 'Pedro (Franklin)', 'Perdoa', 'Perfume no Ar', 'Pingo de Gente ', 'Planeta Coração', 'Porto Amor', 'Prece (J. Cabete)', 'Prece (Agradecemos)', 'Prece (J. de Deus)', 'Prece ao Consolador', 'Quando P. em Jesus', 'Quanta Luz', 'Ramas', 'Raízes', 'Salmo 23', 'Saudades de Jesus', 'Sê', 'Segredo', 'Semente', 'Senhor das Estrelas', 'Senhor, Que Queres...', 'Shairuá', 'Silêncio', 'Simpatia', 'Vaso Escolhido (1)', 'Vaso Escolhido (2)', 'Verbos', 'Zaqueu', 'Zum-Zum-Zum'])

    return (
        <div>
             <Slides
                slides={listOfSlidesMichel}
                musicoNome='michel'
            />
        </div>
    )
}

export default Menu;