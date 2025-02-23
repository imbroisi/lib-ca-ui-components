'use strict';

var jsxRuntime = require('react/jsx-runtime');

const HelloWorld = ({ name = 'World' }) => {
    return jsxRuntime.jsxs("h1", { style: { whiteSpace: 'nowarp' }, children: ["Hi ", name] });
};

exports.HelloWorld = HelloWorld;
