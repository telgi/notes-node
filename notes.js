console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  try {
    var noteString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(noteString);
  } catch (e) {

  }

  duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  };
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Fetching note', title);
};

var removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
