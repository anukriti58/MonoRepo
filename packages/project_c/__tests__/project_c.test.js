'use strict';

const projectC = require('..');
const assert = require('assert').strict;

assert.strictEqual(projectC(), 'Hello from projectC');
console.info('projectC tests passed');
