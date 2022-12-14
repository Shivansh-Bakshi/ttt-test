import * as React from 'react';
import { Container } from '../styled-components/global';

const Page = ({ children }) => {
    return(
        <div>
            <Container>
                {children}
            </Container>
        </div>
    )
}

export default Page