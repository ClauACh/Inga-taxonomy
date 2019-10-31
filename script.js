

/*document.getElementById('opcion-1a').addEventListener('click', function(){
    document.getElementById('blank-uno').innerHTML="<span id='sp-show'>Inga macrophila</span>";
    console.log("ascc");
});

document.getElementById('opcion-1b').addEventListener('click', function(){
    document.getElementById('char-two').style.display = "block";
});*/



function toggle_visibility(id) {
    var e = document.getElementById(id);
    e.style.display = ((e.style.display!='none') ? 'none' : 'block');
    }


    var resetButton = document.querySelector("#reset");

    resetButton.addEventListener("click", function(){
        reset();
    });

   

    function reset(){
        e.style.display = 'none';
    }