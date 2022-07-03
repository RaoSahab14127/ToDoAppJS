var list = document.getElementById("todo_list");

function addTodo() {
  var _inputVal = document.getElementById("todo_data").value;
  if (_inputVal!==""){
  var _li = document.createElement("li")
  var liText = document.createTextNode(_inputVal)
  var db = document.createElement("button")
  var dba = document.createTextNode("Delete")
  db.setAttribute("onclick","deletetodo(this)")
  var eb = document.createElement("button")
  var eba = document.createTextNode("edit")
  eb.setAttribute("onclick","edittodo(this)")


  db.appendChild(dba);
  eb.appendChild(eba);
  _li.appendChild(liText);
  _li.appendChild(db);
  _li.appendChild(eb);
  list.appendChild(_li);
  
  
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
  z.parentNode.remove();
}

function edittodo(z){
  var a =prompt("enter Your value","Value")
  var parent = z.parentNode;
  parent.firstChild.data =a;

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
