var list = document.getElementById("todo_list");

function addTodo() {
  var _inputVal = document.getElementById("todo_data").value;
  if (_inputVal!==""){
  var _li = document.createElement("li")
  var p = document.createElement("span")
  var divv = document.createElement("span")
  var liText = document.createTextNode(_inputVal)
  var db = document.createElement("button")
  var dba = document.createTextNode("Delete")
  db.setAttribute("onclick","deletetodo(this)")
  var eb = document.createElement("button")
  var eba = document.createTextNode("edit")
  eb.setAttribute("onclick","edittodo(this)")
  p.setAttribute("id","cc")


  db.appendChild(dba);
  eb.appendChild(eba);
  divv.appendChild(db);
  divv.appendChild(eb);

  p.appendChild(liText)
  _li.appendChild(p);
  
  _li.appendChild(divv);
  list.appendChild(_li);
  console.log(list)
  
  
  clearall()
  }
  else{
    alert("input some Task")
  }
  

}

function clearall(){
  var _inputVal = document.getElementById("todo_data");
  _inputVal.value="";

}
function deletetodo(z){
  (z.parentNode).parentNode.remove();
}

function edittodo(z){
  var a =prompt("enter Your value","Value")
  var parent = z.parentNode;
  (parent).parentNode.firstChild.innerHTML=a;

  // var db = document.createElement("button")
  // var dba = document.createTextNode("Delete")
  // db.setAttribute("onclick","deletetodo(this)")
  // var eb = document.createElement("button")
  // var eba = document.createTextNode("edit")
  // eb.setAttribute("onclick","edittodo(this)")
  
  // db.appendChild(dba);
  // eb.appendChild(eba);
  
  // z.parentNode.appendChild(db);
  // z.parentNode.appendChild(eb);

}

function deleteall(){
  var node = document.getElementById('todo_list');
  node.innerHTML = "";
}
