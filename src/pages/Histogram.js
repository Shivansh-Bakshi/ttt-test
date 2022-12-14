import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { Button, Element, Text } from "../styled-components/global";
import Page from "../ui-components/Page";

const Histogram = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(location)
    }, [])

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
                <Text>Histogram Displayed Here</Text>
            </Element>
        </Page>
    )
}

export default Histogram;