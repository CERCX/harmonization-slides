import { Center } from "../../styles/components/Slides.style";
import Container from 'react-bootstrap/Container';
import ListSlide from "./slide";

interface IProps {
    slides: String[];
    musicoNome: String;
}

const Slides: React.FC<IProps> = ({ slides, musicoNome }) => {
    return (
        <Container>
            <Center>
                {slides.map((slideInfo, index) => {
                    return (
                        <ListSlide
                            key={index}
                            slideId={index}
                            slideNome={slideInfo}
                            musicoNome={musicoNome}
                        />
                    );
                })}
            </Center>
        </Container>
    );
};

export default Slides;
