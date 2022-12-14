import parse from "./parser/core";
import { Element, Button } from "./styled-components/global";
import Page from "./ui-components/Page";

const App = () => {
    const submitAction = (e) => {
        e.preventDefault();
        fetch('https://www.terriblytinytales.com/test.txt')
            .then(response => response.text())
            .then((text) => {
                parse(text);
                const sortedWordOccurance = parse(text);
                console.log(sortedWordOccurance);
            })
    }

    return(
        <Page>
            <Element>
                <Button onClick={submitAction}>Submit</Button>
            </Element>
        </Page>
    )
}

export default App;