function init(){
    // create alert box containing text field
    function showName(){
        // get input information
        var input=getElementById('entryinput').value;
        alert("Sophia Robles:"+input);
        // get output information 
        var ouput=getElementById('textoutput');
        output.innerHTML=input;
    }
    // create button
    var button=document.getElementById('entrybutton');
    button.addEventListener('click',showName);
}
    window.addEventListener('load', init);