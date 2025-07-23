import {Button} from "native-document/src/elements";
import {I18nService} from "@/core/services/lang/I18nService";


export default function LangButton(label, lang, onClick) {
    return Button({ class: { active: I18nService.current.is(lang) } }, label)
        .nd.on.click(onClick);
};