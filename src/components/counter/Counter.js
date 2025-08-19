import {Observable} from "native-document";
import {Button, Div, H3, ShowIf, Strong} from "native-document/src/elements";

import './counter.css';
import {tr} from "native-document-i18n";

export default function Counter({ min }) {
    const count = Observable(min);
    const minError = Observable(false);

    const increment = () => {
        count.set(count.$value + 1);
        minError.set(false);
    };

    const decrement = () => {
        count.set((currentValue) => {
            if(currentValue > min) {
                return currentValue - 1;
            }
            minError.set(true);
            return currentValue;
        });
    };

    console.log(Button(tr('Decrement')).nd)

    return Div({class: 'counter-container'}, [
        Div({class: 'counter-value'}, count),
        Strong(tr('ClickCount', { count })),
        ShowIf(minError, () => Div({class: 'counter-error'}, tr('Minimum value is {{ min }}', {min}))),
        Div({class: 'counter-controls'}, [
            Button(tr('Decrement')).nd.onClick(decrement),
            Button(tr('Increment')).nd.onClick(increment)
        ]),
    ])
};