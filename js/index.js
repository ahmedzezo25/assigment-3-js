var bookname = document.getElementById("bookname");
var inputurl = document.getElementById("inputurl");

var inner = document.querySelector(".inner");
var parent = document.querySelector(".parent")
var close = document.querySelector(".close")


var prodata ;

if(localStorage.getItem('product') != null) {
    prodata = JSON.parse(localStorage.getItem('product')) 

}else { 
    prodata = [];
}




    
    function add(){

        if(bookname.classList.contains("is-valid")&&
        inputurl.classList.contains("is-valid") )
            {
            var pronew = {
                bookname: bookname.value,
                inputurl: inputurl.value,
               
            }
        
            prodata.push(pronew);
        localStorage.setItem('product', JSON.stringify(prodata));
        clear ();
        display();
        
       
        }else {
         
        
       
            inner.classList.replace("d-none", "d-block");
            parent.classList.replace("d-none", "d-block");
            
       
     
    }
}
 
        

    
    function hideclose() {
        inner.classList.replace("d-block", "d-none");
        parent.classList.replace("d-block", "d-none");
    }




// clear 

function clear () {
    bookname.value = null;
    inputurl.value = null;
}


// display
function display(){
    var cartona = "";
    for(var i = 1; i < prodata.length;i++){

        cartona += `
        <tr>
        <td>${i}</td>
        <td>${prodata[i].bookname}</td>
        <td><a href="${prodata[i].inputurl}" id="visit"><i class="fa-solid fa-eye pe-2"></i>Visit</a></td>
        <td><button onclick=" deletee(${i})" id="delete"> <i class="fa-solid fa-trash-can"></i> Delete</button></td>
    </tr>
        
        
        `

    }

    document.getElementById("tbody").innerHTML = cartona;

}


// delete 

function deletee(i) {
prodata.splice(i,1);
localStorage.setItem('product', JSON.stringify(prodata))
display();
}


//   regex 
    function vallidd(element) {
      var regex = {
        bookname:/^[a-z]{2,6}$/i,
        inputurl:/^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/,
      }

      if(regex[element.id].test(element.value) == true) {
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");

        console.log("much");

      }else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        console.log("no much")
      }

    }













    

