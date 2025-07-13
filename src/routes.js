import { Router } from 'native-document/router';
import Home from "@/pages/home/Home";

export default Router.create({ name: 'default', mode: 'history' }, (router) => {

    router.add('/', Home);
});