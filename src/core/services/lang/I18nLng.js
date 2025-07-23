import { I18nService } from "@/core/services/lang/I18nService";


const I18nLng = {
    useEnglish: () => I18nService.use('en'),
    useFrench: () => I18nService.use('fr'),
}

export default I18nLng;