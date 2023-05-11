function generateList(items){
  let ul = document.createElement('ul');
    items.forEach(function createList(item) {
      let li = document.createElement('li');
      if(Array.isArray(item)){
        li.appendChild(generateList(item));
      } else {
          li.innerHTML = item;
      }
      ul.appendChild(li);
    });
    return ul;
  }
  
let arr = [1, [1.1, 1.2, [1.21, 1.22, 1.23], 1.3], 2, 3];
 
document.body.appendChild(generateList(arr));