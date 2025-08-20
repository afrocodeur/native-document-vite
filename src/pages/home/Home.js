import { Div, H2 } from "native-document/src/elements";
import Counter from "@/components/counter/Counter";

import './home.css';
import {I18nService, tr} from "native-document-i18n";
import LangButton from "@/components/lang-button/LangButton";


export default function Home() {

    const changeLanguageToFrench = () => I18nService.use('fr');
    const changeLanguageToEnglish = () => I18nService.use('en');

    return Div([
        H2(tr('Welcome to Native Document')),
        Counter({ min: 5 }),
        Div({ class: 'language-switch-container' }, [
            LangButton(tr('French'), 'fr', changeLanguageToFrench),
            LangButton(tr('English'), 'en', changeLanguageToEnglish)
        ])
    ]);
}