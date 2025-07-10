import {Div, H2} from "native-document/src/elements";
import {Link} from "native-document/router";
import Counter from "../../components/counter/Counter";

import './home.css';


export default function Home() {

    return Div([
        H2('Welcome to Native Document'),
        Counter({ min: 0 })
    ]);
}