'use strict';

var jsxRuntime = require('react/jsx-runtime');

const HelloWorld = ({ name = 'World' }) => {
    return jsxRuntime.jsxs("h1", { style: { whiteSpace: 'nowarp' }, children: ["Test 108 ", name] });
};

exports.HelloWorld = HelloWorld;
