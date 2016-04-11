#!/usr/bin/env node
'use strict';

let program = require('commander');

require('./commands/component')(program);

program.parse(process.argv);