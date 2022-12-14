import parse from "../parser/core";
import { Element, Button, HeaderText } from "../styled-components/global";
import Page from "../ui-components/Page";
import { useNavigate } from "react-router";


const Home = () => {
    const navigate = useNavigate();

    const submitAction = (e) => {
        e.preventDefault();
        fetch('https://www.terriblytinytales.com/test.txt')
            .then(response => response.text())
            .then((text) => {
                parse(text);
                const sortedWordOccurance = parse(text);
                navigate('histogram', {state:sortedWordOccurance});
            })
    }

    return(
        <Page>
            <Element>
                <HeaderText>TerriblyTinyTales-TTT Assignment</HeaderText>
                <Button onClick={submitAction}>Submit</Button>
            </Element>
        </Page>
    )
}

export default Home;