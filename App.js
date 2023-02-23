
function Item(name, description) {
    this.name = name;
    this.description = description;
  }
  

  const items = [
    new Item('Item 1', 'Description 1'),
    new Item('Item 2', 'Description 2'),
    new Item('Item 3', 'Description 3'),
    new Item('Item 4', 'Description 4')
  ];
  

  const form = document.getElementById('addForm');
  const itemList = document.getElementById('items');
  const filter = document.getElementById('filter');
  

  function populateItemList(items) {
    itemList.innerHTML = '';
    items.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.appendChild(document.createTextNode(`${item.name} - ${item.description}`));
  
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
      deleteBtn.appendChild(document.createTextNode('X'));
      li.appendChild(deleteBtn);
  
      const editBtn = document.createElement('button');
      editBtn.className = 'btn btn-secondary btn-sm float-right edit ml-2';
      editBtn.appendChild(document.createTextNode('Edit'));
      li.appendChild(editBtn);
  
      itemList.appendChild(li);
    });
  }
  

  function addItem(e) {
    e.preventDefault();
    const newItemName = document.getElementById('item').value;
    const newItemDesc = document.getElementById('description').value;
  
    if (newItemName.trim() === '' || newItemDesc.trim() === '') {
      alert('Please enter both item name and description.');
      return;
    }
  
    const newItem = new Item(newItemName, newItemDesc);
    items.push(newItem);
    populateItemList(items);
  

    document.getElementById('item').value = '';
    document.getElementById('description').value = '';
  }
  

  function removeItem(e) {
    if (e.target.classList.contains('delete')) {
      const li = e.target.parentElement;
      const itemName = li.textContent.split(' - ')[0];
      items.splice(items.findIndex(item => item.name === itemName), 1);
      li.remove();
    }
  }
  

  function filterItems(e) {
    const searchText = e.target.value.toLowerCase();
    const filteredItems = items.filter(item => {
      const itemName = item.name.toLowerCase();
      const itemDesc = item.description.toLowerCase();
      return itemName.includes(searchText) || itemDesc.includes(searchText);
    });
    populateItemList(filteredItems);
  }
  

  form.addEventListener('submit', addItem);
  itemList.addEventListener('click', removeItem);
  filter.addEventListener('input', filterItems);
  

  populateItemList(items);
  