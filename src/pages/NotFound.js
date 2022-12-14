import { Element, Button, HeaderText } from "../styled-components/global";
import Page from "../ui-components/Page";
import { useNavigate } from "react-router";

const NotFound = () => {
    const navigate = useNavigate();

    const homeAction = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return(
        <Page>
            <Element>
                <HeaderText>404! Go Home</HeaderText>
                <Button onClick={homeAction}>Home</Button>
            </Element>
        </Page>
    )
}

export default NotFound;