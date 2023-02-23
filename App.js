

var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
console.log('form');
form.addEventListener('submit',addItem);

itemList.addEventListener('click',removeItem);

function addItem(e){
    e.preventDefault();
   
    var newItem=document.getElementById('item').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));

  
    var deletebtn=document.createElement('button');
    deletebtn.className='btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('X'));

   
    var editbtn=document.createElement('button');
    editbtn.className='btn btn-secondary btn-sm float-right edit ml-2';
    editbtn.appendChild(document.createTextNode('Edit'));


    li.appendChild(deletebtn);
    li.appendChild(editbtn);

    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete'))
    {
          var li=e.target.parentElement;
          itemList.removeChild(li);
    }
}
