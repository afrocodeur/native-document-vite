import {Button} from "native-document/src/elements";
import {I18nService} from "native-document-i18n";
import {Observable} from "native-document";


export default function LangButton(label, lang, onClick) {
    const isSelected = Observable(lang === I18nService.current.$value);
    I18nService.current.on(lang, () => isSelected.set(true), () => isSelected.set(false));

    return Button({ class: { active: isSelected } }, label)
        .nd.onClick(onClick);
};