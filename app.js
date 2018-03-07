console.log("Starting App");

const fs = require('fs');
const os = require('os');
const yargs = require('yargs');

const notes = require('./notes.js')

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  try {
    var note = notes.addNote(argv.title, argv.body);
    console.log('Note created')
    console.log('---')
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } catch (e) {
    console.log(e);
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Not recognised');
};
