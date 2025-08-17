

const API_URL = "https://script.google.com/macros/s/AKfycbxjb13QApao2sQ-tJnx4uDqFidUPyiQ4BOJDMSpAq1p4H0kFIfdov1mLvyBylzG12F5/exec";  // replace with your Apps Script URL

// Fetch notes from Google Sheet and display
async function displayNotes() {
  const container = document.getElementById("notes-container");
  container.innerHTML = "<p>Loading...</p>";

  try {
    let res = await fetch(API_URL);
    let notes = await res.json();
    container.innerHTML = "";

    notes.forEach((note, index) => {
      container.innerHTML += `
        <div class="note">
          <h3>${note.title}</h3>
          <p>${note.text}</p>
          <small>${note.date}</small>
        </div>
      `;
    });
  } catch (err) {
    container.innerHTML = "<p style='color:red;'>Error loading notes.</p>";
    console.error(err);
  }
}

// Add a new note to Google Sheet
async function addNote() {
  const title = document.getElementById("note-title").value;
  const text = document.getElementById("note-text").value;

  if (title && text) {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, text })
    });
    document.getElementById("note-title").value = "";
    document.getElementById("note-text").value = "";
    displayNotes(); // refresh list
  }
}

// Load notes on page open
displayNotes();
