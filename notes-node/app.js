// console.log('Starting app.js')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

const bodyOptions = {
    describe: 'The body of the note',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];
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
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`)

    allNotes.forEach((note) => {
        notes.logNote(note)
    });
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