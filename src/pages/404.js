import parse from "../parser/core";
import { Element, Button, HeaderText } from "../styled-components/global";
import Page from "../ui-components/Page";
import { useNavigate } from "react-router";


const Home = () => {
    const navigate = useNavigate();

    const homeAction = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return(
        <Page>
            <Element>
                <HeaderText>Oops! Invalid Page</HeaderText>
                <Button onClick={homeAction}>Home</Button>
            </Element>
        </Page>
    )
}

export default Home;