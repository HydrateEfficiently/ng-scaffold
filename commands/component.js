(() => {
    'use strict';

    let fs = require('fs');
    let path = require('path');

    let stringUtils = require('./../utility/string-utility');

    module.exports = function (program) {
        program
            .command('component <name>')
            .action(function (name) {
                let dashedName = stringUtils.camelCaseToDashed(name);

                let componentDir = `components/${dashedName}`;
                try {
                    fs.mkdirSync(componentDir);
                } catch (e) {
                    if (e.code === 'EEXIST') {
                        console.log('Component directory already exists');
                        return;
                    }
                    throw e;
                }

                let controllerName = `${stringUtils.capitalizeFirstLetter(name)}Controller`;
                fs.writeFile(
                    `${componentDir}/${dashedName}.js`,

`import { componentFactory } from './../../utility/component-factory';
import { ${controllerName} } from './${dashedName}-controller';

export let ${name} = componentFactory(
    '${name}',
    ${controllerName});`);

                fs.writeFile(
                    `${componentDir}/${dashedName}-controller.js`,

`import { Injectable } from './../../utility/injectable';

export class ${controllerName} extends Injectable {
    static get $inject() {
        return [];
    }

    constructor(...deps) {
        super(...deps);
    }
}`);

                fs.writeFile(`${componentDir}/${dashedName}.html`, '');
            });
    };
    
} ());

