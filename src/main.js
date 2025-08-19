import {I18nService} from "native-document-i18n";
import {default as DefaultRouter} from '@/routes';
import resources from "@/lang/resources";

import './index.css';

const root = document.getElementById('root');

I18nService.init(resources);
DefaultRouter.mount(root);