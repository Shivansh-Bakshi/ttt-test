import { useLocation, useNavigate } from "react-router";
import { Button, Element, Text } from "../styled-components/global";
import Chart from "../ui-components/Chart";
import Page from "../ui-components/Page";

const Histogram = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const homeAction = (e) => {
        e.preventDefault();
        navigate('/');
    }

    if (!location.state) {
        return(
            <Page>
                <Element>
                    <Text>Looks like you navigated here directly. Press the submit button from home</Text>
                    <Button onClick={homeAction}>Home</Button>
                </Element>
            </Page>
        )
    }

    return(
        <Page>
            <Element>
                <Text>Word Occurance Histogram</Text>
                <Chart data={location.state.slice(0, 20)} />
            </Element>
        </Page>
    )
}

export default Histogram;