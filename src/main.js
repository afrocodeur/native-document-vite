import {I18nService} from "@/core/services/lang/I18nService";
import {default as DefaultRouter} from '@/routes';

import './index.css';

const root = document.getElementById('root');

I18nService.init();
DefaultRouter.mount(root);