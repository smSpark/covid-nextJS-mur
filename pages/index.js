import { createGlobalStyle } from 'styled-components';
import Countries from '../components/Countries';

const GlobalStyle = createGlobalStyle`
    html {
        font-family: 'Roboto', sans-serif;
    }
    h2 {
        margin: 0 0 10px;
    }
`;

export default function Index() {

    return <div>
        <GlobalStyle />
        <Countries />
    </div>
}
