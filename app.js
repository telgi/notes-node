const fs = require('fs');
const os = require('os');
const yargs = require('yargs');

const notes = require('./notes.js')

const titleOptions = {
  describe: 'title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'body of note',
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

if (command === 'add') {
  try {
    var note = notes.addNote(argv.title, argv.body);
    console.log('Note created');
    notes.logNote(note);
  } catch (e) {
    console.log(e);
  }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
      console.log('Note found');
      notes.logNote(note);
    } else {
      console.log("Note not found");
    }
    var message = note ? `Title: ${note.title}` : "Note not found";
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "Note was removed" : "Note not found";
    console.log(message);
} else {
    console.log('Not recognised');
};
