import {Div, H2} from "native-document/src/elements";
import Counter from "@/components/counter/Counter";

import './home.css';


export default function Home() {

    return Div([
        H2('Welcome to Native Document'),
        Counter({ min: 0 })
    ]);
}