$(document).ready(function(){
  var value = '';
  var result = '';
  $('#b0,#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#bDt,#AC,#CE,#bPl,#bMn,#bMl,#bDv,#bEq').click(function(evn) {
    if (evn.target.value === '.' && value.includes(evn.target.value)) {
      alert('Invalid Input'); 
    }
      else if (evn.target.value === 'AC') {
        value = '';
        result = '';
        update(value);
      }
        else if (evn.target.value === 'CE') {
          if (result.length > 0) {
            value = '';
            result = '';
            update(value);
          }else {
            var tmp = value.split(''); 
            tmp.pop();
            value = tmp.join('');
            update(value);  
          }
        }
          else if ((evn.target.value === '+'||evn.target.value === '-'||evn.target.value ===                           '*'||evn.target.value === '/') && (value.split('')[value.length-1] ===                             '+'||value.split('')[value.length-1] === '-'||value.split('')[value.length-1]                       === '*'||value.split('')[value.length-1] === '/')) {
             alert('Invalid Input');
          }
          else if ((evn.target.value === '+'||evn.target.value === '-'||evn.target.value ===                           '*'||evn.target.value === '/') && result.length > 0){
            result += evn.target.value;
            value = result
            update(value);
            result = '';
          }
             else if (evn.target.value === '=') {
               result = getEval(value);
               update(result);
             }
              else{
                if (result.length > 0) {
                  result = '';
                  value = '';
                  value += evn.target.value;
                }else {
                  value += evn.target.value;
                }
                update(value);
              }
  });
});

function getEval(input) {
    var x = eval(input);
    return x.toString();
    //console.log(result);
  }

function update(input) {
    $('#oput').html(input);
    //console.log(input);
  }