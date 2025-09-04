import {Button} from "native-document/src/elements";
import {I18nService} from "native-document-i18n";


export default function LangButton(label, lang, onClick) {
    return Button({ class: { active: I18nService.current.when(lang) } }, label)
        .nd.onClick(onClick);
};