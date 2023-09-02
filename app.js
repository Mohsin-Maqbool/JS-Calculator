function press(e){
    document.getElementById('input').value+=e;
  }
  function eq(){
    var a = document.getElementById('input')
    a.value = eval(a.value)
  }
  function clr() {
      document.getElementById('input').value = ''
   }
  function ccc(){
    var display = document.getElementById('input')
    display.value = display.value.slice(0,-1)
  }
  
  