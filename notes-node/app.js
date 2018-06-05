// console.log('Starting app.js')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const argv = yargs.argv;
var command = argv._[0]
// console.log('Command: ', command)
// console.log('Yargs', argv)

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body)
    if (note) {
        notes.logNote(note);
    }
    else {
        console.log('Note Title Taken')
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        notes.logNote(note);
    }
    else {
        console.log('Note not Found')
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note removed' : 'Note not found';
    console.log(message);
} else {
    console.log('not recognized')
}