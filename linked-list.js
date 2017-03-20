function linkedList(){
  this.head = null;
}

function appened(ll,val){
  var node = {data: val,next: null};
  if(!ll.head){
    ll.head = node;
  }else{
    var current = ll.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }
}

function prePend(ll,val){
  var node = {data: val,next: null};
  if(!ll.head){
    ll.head = node;
  }else{
    var current = ll.head;
    var temp = current;
    current = node;
    current.next = temp;
    ll.head = current;
  }
}

function find(ll, val){
  if(!ll.head){
    return false;
  }else{
    var current = ll.head;
    while(current.next){
      if(current.data === val){
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

function concat(ll1,ll2){
  if(!ll1.head){
    ll1.head = ll2;
  }else{
    var current = ll1.head;
    while(current.next){
      current = current.next;
    }
    current.next = ll2.head;
  }
}

function replace(ll,oldVal, newVal){
  var node = {data: newVal,next: null};
  if(!ll.head){
    ll.head = node;
  }else{
    var current = ll.head;
    while(current.next){
      if(current.data === oldVal){
        current.data = newVal;
      }
      current = current.next;
    }
  }
}

var test = new linkedList();
var test2 = new linkedList();
appened(test, 2);
appened(test, 3);
appened(test2, 4);
appened(test2, 5);
prePend(test, "test");
prePend(test, 105);
concat(test,test2);
find(test,105);
replace(test,105,10);
test.head;

//https://repl.it/GYSU/1



