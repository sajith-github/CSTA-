function saveToSheet(title, text) {
  fetch("YOUR_WEB_APP_URL", {
    method: "POST",
    body: JSON.stringify({ title, text }),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.text())
  .then(msg => console.log(msg))
  .catch(err => console.error(err));
}

function addNote() {
  const title = document.getElementById("note-title").value;
  const text = document.getElementById("note-text").value;
  if (title && text) {
    saveToSheet(title, text);  // send to Google Sheet
    document.getElementById("note-title").value = "";
    document.getElementById("note-text").value = "";
  }
}
