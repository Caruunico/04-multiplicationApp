import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
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
.option('n',{
    alias: 'name',
    type: 'string',
    default: 'multiplication-table',
    describe: 'File name'
  })
  .option('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'File destination'
  })
.check((argv, options) => {
    console.log(argv)
    if(argv.b < 1) throw 'Error: la base tiene que ser mayor a 0'
    return true;
})
.parseSync()
