import {useState, useEffect} from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import {h} from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

export function Counter() {
    const [count, setCount] = useState(0);
    return (
        html`
                <div>
                    ${count}
                    <br />
                    <button onclick=${() => setCount(count + 1)}>increment</button>
                    <button onclick=${() => setCount(count - 1)}>decrement</button>
                </div>
            `
    )
}
