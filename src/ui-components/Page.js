import * as React from 'react';
import { Container, GlobalStyle } from '../styled-components/global';

const Page = ({ children }) => {
    return(
        <div>
            <GlobalStyle />
            <Container>
                {children}
            </Container>
        </div>
    )
}

export default Page