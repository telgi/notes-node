console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  } else {
    throw "Note title already exists."
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Fetching note', title);
};

var removeNote = (title) => {
  var notes = fetchNotes();
  newNotes = notes.filter((note) => note.title !== title);
  saveNotes(newNotes);
  return notes.length !== newNotes.length
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
