//   var cnt= 2;
//     function CountNote(){
//      cnt=parseInt(cnt)+parseInt(1);
//      var divData=document.getElementById("Count");
//      divData.innerHTML="You have "+cnt +" notes";
//     }

let pNode = document.createElement ('p');

let BoxNote = document.querySelector('#boxnote');
let article = document.querySelectorAll('article');
let addBtn = document.querySelector('#button');
document.querySelector('main');

let counter = 1;
let articleLength = document.querySelectorAll('article').length;
let textNode = `You have ${counter + articleLength} notes.`;
let main = document.querySelector('main');
// console.log(articleLength);


window.addEventListener('load', () => {
  BoxNote.appendChild(pNode).innerHTML = textNode;
});

function prompter() {
  let title = prompt('Enter date and Title')
  let noteBody = prompt('Enter new note here');
  return{title, noteBody};
}

function noteCreator (titleOfNote, noteBody){
  let pNote = document.createElement('p');
  pNote.className = "writing-content"
  let h2Note = document.createElement('h2');
  let divNote = document.createElement('div');
  divNote.className = "first-writing";
  let articleNote = document.createElement('article');
  let title = titleOfNote;
  let body = noteBody;

  h2Note.innerText = titleOfNote;
  pNote.innerText = noteBody;

  divNote.appendChild(h2Note);
  divNote.appendChild(pNote);

  articleNote.appendChild(divNote);
  main.insertBefore(articleNote, article[0]);


}


addBtn.addEventListener('click', () => {
  counter++;
  let {title, noteBody} = prompter();

  noteCreator(title, noteBody);
  pNode.textContent = `You have ${counter + articleLength} notes.`
});