/**
 * Created by Kh Akash on 3/17/2017.
 */
const yargs = require('yargs');
const studentinfo = require('./studentinfo');

const argv = yargs
    .command('add', 'add student', {
        name: {
            alias: 'n',
            describe: 'write student name',
            demandOption: true
        },
        email: {
            alias: 'e',
            describe: 'write email address',
            demandOption: true
        },
        address: {
            alias: 'a',
            describe: 'write your address',
            demandOption: true
        }
    })
    .command('show_all', 'show all students', {

    })
    .command('show', 'show a student', {
        email: {
            alias: 'e',
            describe: 'write your email address',
            demandOption: true
        }
    })
    .command('update', 'update a student', {
        previous_email: {
            alias: 'pe',
            describe: 'write your existing email address',
            demandOption: true
        },
        new_email: {
            alias: 'ne',
            describe: 'write your new email address',
            demandOption: true
        },
        name: {
            alias: 'n',
            describe: 'write your name'
        },
        address: {
            alias: 'a',
            describe: 'write your address'
        }
    })
    .command('delete', 'delete a student', {
        email: {
            alias: 'e',
            describe: 'write your email address',
            demandOption: true
        }
    })
    .demandCommand(1, 'You need at least one command before moving on')
    .help()
    .alias('help', 'h')
    .argv;

var methodName = argv._[0];

if (methodName === "add"){
    studentinfo.add(argv.name, argv.email, argv.address);
}else if (methodName === "show_all"){
    studentinfo.show_all();
}