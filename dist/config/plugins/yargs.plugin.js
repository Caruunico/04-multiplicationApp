"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.yarg = void 0;
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
exports.yarg = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .options('b', {
    alias: 'base',
    type: 'number',
    demandOptions: true,
    describe: 'Multiplication table Base'
})
    .options('l', {
    alias: 'limit',
    type: 'number',
    demandOptions: true,
    describe: 'Multiplication table limit'
})
    .options('s', {
    alias: 'show',
    type: 'boolean',
    demandOptions: false,
    describe: 'show Multiplication table'
})
    .check((argv, options) => {
    console.log(argv);
    if (argv.b < 1)
        throw 'Error: la base tiene que ser mayor a 0';
    return true;
})
    .parseSync();
