let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function displayNotes() {
  const container = document.getElementById("notes-container");
  container.innerHTML = "";

  notes.forEach((note, index) => {
    container.innerHTML += `
      <div class="note">
        <h3>${note.title}</h3>
        <p>${note.text}</p>
        <button onclick="editNote(${index})">Edit</button>
        <button onclick="deleteNote(${index})">Delete</button>
      </div>
    `;
  });
}

function addNote() {
  const title = document.getElementById("note-title").value;
  const text = document.getElementById("note-text").value;

  if (title && text) {
    notes.push({ title, text });
    saveNotes();
    displayNotes();
    document.getElementById("note-title").value = "";
    document.getElementById("note-text").value = "";
  }
}

function deleteNote(index) {
  notes.splice(index, 1);
  saveNotes();
  displayNotes();
}

function editNote(index) {
  const newTitle = prompt("Edit title:", notes[index].title);
  const newText = prompt("Edit text:", notes[index].text);

  if (newTitle && newText) {
    notes[index] = { title: newTitle, text: newText };
    saveNotes();
    displayNotes();
  }
}

displayNotes();
