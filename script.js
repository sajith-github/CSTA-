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

displayNotes();

