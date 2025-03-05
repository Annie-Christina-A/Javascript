const containerElement = document.querySelector(".container");
const btnAdd = document.getElementsByClassName("btn-add")[0];

function getAppStorage() {
  return JSON.parse(localStorage.getItem("Sticky_Notes") || "[]");
}
getAppStorage().forEach((element) => {
  const textElement = createTextElement(element.id, element.content);
  containerElement.insertBefore(textElement, btnAdd);
});
function createTextElement(id, content) {
  const textElement = document.createElement("textarea");
  textElement.classList.add("sticky");
  textElement.value = content;
  textElement.placeholder = "Enter your Notes";
  textElement.addEventListener("change", () => {
    updateNotes(id, textElement.value);
  });
  textElement.addEventListener("dblclick",()=>{
    const check=confirm("Are You Sure to Delete?")
    if(check){
        deleteNotes(id,textElement)
    }
  })
  return textElement;
}

function addSticky() {
  const notes = getAppStorage();
  const notesObj = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };
  const textElement = createTextElement(notesObj.id, notesObj.content);
  containerElement.insertBefore(textElement, btnAdd);
  notes.push(notesObj);
  saveNotes(notes);
}
btnAdd.addEventListener("click", () => addSticky());

function saveNotes(notes) {
  localStorage.setItem("Sticky_Notes", JSON.stringify(notes));
}

function updateNotes(id, content) {
  const notes = getAppStorage();
  const updateElement = notes.filter((note) => note.id == id)[0];
  updateElement.content=content
  saveNotes(notes)
}
function deleteNotes(id,textElement){
    const notes=getAppStorage().filter((note)=>note.id!=id)
    saveNotes(notes)
    containerElement.removeChild(textElement);
}
console.log(getAppStorage())