//Accessing using the classname
var test = document.getElementsByClassName('well');

//checking is it array or not
console.log(Array.isArray(test));
//converting to array and checking it is array or not
console.log(Array.isArray(Array.from(test)));

//iterating using the classname
Array.from(test).forEach(function(item){
    console.log(item);
});


//Accessing & iterating using the tagname
var tag = document.getElementsByTagName('p');

Array.from(tag).forEach(function(item){
    console.log(item);
});


//Selecting the particular element by query selector
var dis = document.querySelectorAll('#panel .well p');

Array.from(dis).forEach(function(item){
    console.log(item);
});

//changing the html content
var sel = document.querySelectorAll('#panel .well p');

Array.from(sel).forEach(function(select){
    select.textContent += ' hey guys';
});


//Changing the HTML element by selecting using nodes
var we = document.querySelector('#panel .well');
we.nextElementSibling.nextElementSibling.querySelector('p').innerHTML+=' changed';



const list = document.querySelector('#panel .list');

list.addEventListener('click',function(e){
    
    if(e.target.id=='delete')
    {
        const well = e.target.parentElement;
        list.removeChild(well);
    }
});

var add = document.forms['add-form'];

add.addEventListener('submit',function(e){
    e.preventDefault();

var got = add.querySelector('input[type="text"]').value;

    //creating an element
const div = document.createElement('div');
const edit = document.createElement('i');
const delbtn = document.createElement('i');
const para = document.createElement('p');

    //appending the element
div.appendChild(edit);
div.appendChild(delbtn);
div.appendChild(para); 
list.appendChild(div);

    //Giving value to element
para.textContent = got;

//this is a way of adding classes in internal/external CSS [method-2]
div.classList.add('well');

delbtn.classList.add('fa');
delbtn.classList.add('fa-times-circle-o');
delbtn.classList.add('delete');
delbtn.id = 'delete';

edit.classList.add('fa');
edit.classList.add('fa-pencil-square-o');
edit.classList.add('edit');
});

//change event for checkbox
var check = document.querySelector('#check');
check.addEventListener('change',function(e){
    if(check.checked)
    {
        list.style.display = "none";
    }
    else
    {
        list.style.display = "block";
    }
});

//filtering the list
listContainer = document.querySelector('#panel .list');

const search = document.forms['search-form'].querySelector('input[type="text"]');
search.addEventListener('keyup',function(e){
    const val = e.target.value.toLowerCase();
    const listBook = document.querySelectorAll('.well');

    Array.from(listBook).forEach(function(funBook){
        const listVal = funBook.lastElementChild.textContent;
        if(listVal.toLowerCase().indexOf(val)!= -1)
        {
            funBook.style.display = "block";
        }
        else
        {
            funBook.style.display = "none";
        }
    });
});







//[own idea] adding new text and click add, that new data will stored inside the panel
/* 
var call = document.querySelector('#add-container button');

call.addEventListener('click', function adding()
{
    var getdata = document.getElementById('add').value;

    var setdata = document.querySelector('#panel');
    setdata.innerHTML += '<div class="well"><i class="fa fa-times-circle-o delete" id="delete" aria-hidden="true"></i><i class="fa fa-pencil-square-o edit" aria-hidden="true" style="padding-right: 20px;"></i><p>'+getdata+'</p></div>';
});
*/


//Deleting the element by traversing
/*
 var del = document.querySelectorAll('#panel .well i.delete');

 Array.from(del).forEach(function(btn){
    btn.addEventListener('click',function(e){
        
        const get = e.target.parentElement;

        get.parentElement.removeChild(get);
    });
 });
 */

//this is a way of adding classes in internal/external CSS [method-1]
/*
div.className = 'well';

delbtn.className = 'fa';
delbtn.className += ' fa-times-circle-o';
delbtn.className += ' delete';
delbtn.id = 'delete';

edit.className= 'fa';
edit.className += ' fa-pencil-square-o';
edit.className += ' edit';
*/





