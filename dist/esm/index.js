import { jsxs } from 'react/jsx-runtime';

const HelloWorld = ({ name = 'World' }) => {
    return jsxs("h1", { style: { whiteSpace: 'nowarp' }, children: ["Test 108 ", name] });
};

export { HelloWorld };
