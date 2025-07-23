import {Button, Div, H2, Strong} from "native-document/src/elements";
import Counter from "@/components/counter/Counter";

import './home.css';
import I18nLng from "@/core/services/lang/I18nLng";
import {I18nService, tr} from "@/core/services/lang/I18nService";
import LangButton from "@/components/lang-button/LangButton";


export default function Home() {

    const changeLanguageToFrench = () =>  I18nLng.useFrench()
    const changeLanguageToEnglish = () => I18nLng.useEnglish()

    return Div([
        H2(tr('Welcome to Native Document')),
        Counter({ min: 0 }),
        Div({ class: 'language-switch-container' }, [
            LangButton(tr('French'), 'fr', changeLanguageToFrench),
            LangButton(tr('English'), 'en', changeLanguageToEnglish)
        ])
    ]);
}