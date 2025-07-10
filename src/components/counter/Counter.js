import {Observable} from "native-document";
import {Button, Div, H3, ShowIf} from "native-document/src/elements";

import './counter.css';

export default function Counter({ min }) {
    const count = Observable(0);
    const minError = Observable(false);

    const increment = () => {
        count.set(count.val() + 1);
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

    return Div({class: 'counter-container'}, [
        Div({class: 'counter-value'}, count),
        ShowIf(minError, () => Div({class: 'counter-error'}, 'Minimum value is 0'), 'Show error if value is bellow '+min),
        Div({class: 'counter-controls'}, [
            Button('Decrement').nd.on.click(decrement),
            Button('Increment').nd.on.click(increment)
        ]),
    ])
};