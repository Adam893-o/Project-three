function JupiterFunction(){
  var button = document.JupiterID('entrybutton');

  function showMeText(){
    var textbox = document.JupiterId('entryinput');
    document.JupiterId('textoutput').innerHTML = textbox.value;
    alert("User: " + textbox.value);
  }

  button.addEventListener('click', showMeText);
  }
  
window.addEventListener('load', init);
