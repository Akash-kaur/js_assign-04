// JavaScript Document
    function get_todolist() {
        var todolist = new Array;
        var todolist_str = localStorage.getItem('todo');
        if (todolist_str !== null) {
            todolist = JSON.parse(todolist_str); 
        }
        return todolist;
    }

    function add() {
        var task = document.getElementById('task').value;
     if (task === '') {
    alert("You must write something!");
	return true;
  } else {
        var task = document.getElementById('task').value;
        var todolist = get_todolist();
        todolist.push(task);
        localStorage.setItem('todo', JSON.stringify(todolist));
     
        show();
     
        return false;
    }
	}
     
    function remove() {
        var id = this.getAttribute('id');
        var todolist = get_todolist();
        todolist.splice(id, 1);
        localStorage.setItem('todo', JSON.stringify(todolist));
     
        show();
     
        return false;
    }
     
    function show() {
        var todolist = get_todolist();
     
        var html = '<ul>';
        for(var i=0; i<todolist.length; i++) {
            html += '<li>' + todolist[i] + '<span class="remove" id="' + i  + '" style="float:right;color:red;">Delete</span></li>';
        };
        html += '</ul>';
     
        document.getElementById('todolist').innerHTML = html;
     
        var buttons = document.getElementsByClassName('remove');
        for (var i=0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', remove);
        };
    }
	
     
    document.getElementById('add').addEventListener('click', add);
    show();