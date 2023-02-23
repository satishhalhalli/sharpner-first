// var headerTitle=document.getElementById("header-title");
// headerTitle.style.borderBottom="solid 3px #000 ";

// var titles=document.querySelector(".title");
// titles.style.fontWeight='bold';
// titles.style.color='green';


// const thirdItem=document.querySelector('#items li:nth-child(3)');
// thirdItem.style.backgroundColor='green';
// const thirdListItem = document.querySelector('#items li:nth-child(3)');
// thirdListItem.style.backgroundColor = 'green';
//  const listItems=document.querySelectorAll('#items li');
//  for(let i=0;i<listItems.length;i++)
//  {
//     listItems[i].style.fontWeight='bold';
//  }
// 

// const newItem=document.createElement('li');
// newItem.textContent='New Item';
// document.querySelector('#items').appendChild(newItem);



//this is by tagname
// const allItems = document.getElementsByTagName('li');
// const newItemIndex = Array.from(allItems).findIndex(item => item.textContent === 'New Item');
// allItems[newItemIndex].textContent = 'Edited Item';


//by class name
// newItem.classList.add('new-class');
// const itemsWithNewClass = document.getElementsByClassName('new-class');
// itemsWithNewClass[0].textContent = 'Edited Item';


const listItems=document.querySelectorAll('#items li');
listItems[1].style.color='green';

var odd=document.querySelectorAll('#items li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}