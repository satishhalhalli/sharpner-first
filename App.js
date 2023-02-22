var headerTitle=document.getElementById("header-title");
headerTitle.style.borderBottom="solid 3px #000 ";

var titles=document.querySelector(".title");
titles.style.fontWeight='bold';
titles.style.color='green';


const thirdItem=document.querySelector('#items li:nth-child(3)');
thirdItem.style.backgroundColor='green';
// const thirdListItem = document.querySelector('#items li:nth-child(3)');
// thirdListItem.style.backgroundColor = 'green';
 const listItems=document.querySelectorAll('#items li');
 for(let i=0;i<listItems.length;i++)
 {
    listItems[i].style.fontWeight='bold';
 }