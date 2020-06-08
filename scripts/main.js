let item = document.getElementById('item');
let itemButton = document.getElementById('itemButton');

let shoppingListUL = document.getElementById('shoppingListUL');

let checkedOffUL = document.getElementById('checkedOffUL');


itemButton.onclick = function() {

    if (item.value === '') {
        // Nothing.
    } else {

        let shoppingListLI = document.createElement('li');
        shoppingListLI.setAttribute('class', 'list-group-item list-group-item-light clearfix text-left');
        shoppingListLI.textContent = item.value;


        item.value = '';
        item.focus();


        let shoppingListLIDelete = document.createElement('button');
        shoppingListLIDelete.setAttribute('type', 'button');
        shoppingListLIDelete.setAttribute('class', 'btn btn-danger float-right mx-1');

        let trash = document.createElement('img');
        trash.setAttribute('src', 'images/trash.svg');

        shoppingListLIDelete.appendChild(trash);

        shoppingListLIDelete.onclick = function() {
            shoppingListUL.removeChild(shoppingListLI);
        }

        shoppingListLI.appendChild(shoppingListLIDelete);


        let shoppingListLICheckOff = document.createElement('button');
        shoppingListLICheckOff.setAttribute('type', 'button');
        shoppingListLICheckOff.setAttribute('class', 'btn btn-success float-right mx-1');

        let check = document.createElement('img');
        check.setAttribute('src', 'images/check.svg');

        shoppingListLICheckOff.appendChild(check);

        shoppingListLICheckOff.onclick = function() {
            shoppingListLI.removeChild(shoppingListLICheckOff);
            checkedOffUL.appendChild(shoppingListLI);

            shoppingListLIDelete.onclick = function() {
                checkedOffUL.removeChild(shoppingListLI);
            }
        }

        shoppingListLI.appendChild(shoppingListLICheckOff);


        shoppingListUL.appendChild(shoppingListLI);

    }
}