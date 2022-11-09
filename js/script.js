function init(){
    // create alert box containing text field
    function showName(){
        // get input information
        var input=document.getElementById('entryinput');
        alert("Sophia Robles:"+input.value);
        // get output information 
        var ouput=document.getElementById('textoutput');
        output.innerHTML=input.value;
    }
    // create button
    var button=document.getElementById('entrybutton');
    button.addEventListener('click',showName);
}
    window.addEventListener('load', init);