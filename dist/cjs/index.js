'use strict';

var jsxRuntime = require('react/jsx-runtime');

const HelloWorld = ({ name = 'World' }) => {
    return jsxRuntime.jsxs("h1", { children: ["Good morning, ", name] });
};

exports.HelloWorld = HelloWorld;
