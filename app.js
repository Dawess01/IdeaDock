<script>
function currentUser() {
  return localStorage.getItem("currentUser");
}

function requireLogin() {
  if (!currentUser()) location.href = "login.html";
}

function logout() {
  localStorage.removeItem("currentUser");
  location.href = "homepage.html";
}

function getNotes() {
  return JSON.parse(localStorage.getItem("notes_" + currentUser()) || "[]");
}

function saveNotes(notes) {
  localStorage.setItem("notes_" + currentUser(), JSON.stringify(notes));
}

function createNote() {
  const notes = getNotes();
  const id = Date.now();
  notes.push({
    id,
    title: "New Note",
    content: "",
    updated: new Date().toLocaleString()
  });
  saveNotes(notes);
  location.href = "editor.html?id=" + id;
}

function findNote(id) {
  return getNotes().find(n => n.id == id);
}
</script>
