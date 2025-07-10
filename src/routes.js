import { Router, Link } from 'native-document/router';
import {Div} from "native-document/src/elements";
import Home from "@/pages/home/Home";

export default Router.create({ name: 'default', mode: 'history' }, (router) => {

    router.add('/', Home);

    router.add('/about', () => {
        return Div([
            'About this codde',
            Link({to: '/'}, 'Home'),
        ]);
    })

});