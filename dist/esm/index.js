import { jsxs } from 'react/jsx-runtime';

const HelloWorld = ({ name = 'World' }) => {
    return jsxs("h1", { children: ["Good morning, ", name] });
};

export { HelloWorld };
