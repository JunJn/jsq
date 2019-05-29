import React from 'react';
import './App.css';
var numresult;
var str;

document.onkeydown=function(event){
  
  var e = event || window.event || arguments.callee.caller.arguments[0];
 
  if(e && e.keyCode==96){ 
    str = document.getElementById("nummessege");
  //显示运算结果
    str.value = str.value + '0';
  //进行运算
  }
  if(e && e.keyCode==97){ 
    str = document.getElementById("nummessege");
  
    str.value = str.value + '1';
  
 }  
 if(e && e.keyCode==98){ 
  str = document.getElementById("nummessege");
  
  str.value = str.value + '2';
}
if(e && e.keyCode==99){ 
  //要做的事情
  str = document.getElementById("nummessege");
 str.value = str.value + '3';
}
if(e && e.keyCode==100){ 
  //要做的事情
  str = document.getElementById("nummessege");
 str.value = str.value + '4';
}
   
if(e && e.keyCode==101){ 
  str = document.getElementById("nummessege");
  //要做的事情
 str.value = str.value + '5';
}
if(e && e.keyCode==102){ 
  str = document.getElementById("nummessege");
  //要做的事情
 str.value = str.value + '6';
}
if(e && e.keyCode==103){ 
  str = document.getElementById("nummessege");
  //要做的事情
 str.value = str.value + '7';
}
if(e && e.keyCode==104){ 
  str = document.getElementById("nummessege");
  //要做的事情
 str.value = str.value + '8';
}
if(e && e.keyCode==105){ 
  str = document.getElementById("nummessege");
  //要做的事情
 str.value = str.value + '9';
}
if(e && e.keyCode==110){ 
  //要做的事情
 str = document.getElementById("nummessege")
 str.value = str.value + '.';
}


if(e && e.keyCode==106){ 
  str = document.getElementById("nummessege");
  //要做的事情
 
  str.value = str.value + '*';

 
}
 if(e && e.keyCode==107){ 
  //要做的事情
  str = document.getElementById("nummessege");
   str.value = str.value + '+';
}

if(e && e.keyCode==109){ 
  //要做的事情
 str = document.getElementById("nummessege")
 str.value = str.value + '-';
 var a = str.value

alert(a[a.lenght])

}


if(e && e.keyCode==111){ 
  //要做的事情
 str = document.getElementById("nummessege")
 str.value = str.value + '/';
}


if(e && e.keyCode==8){ 
  //要做的事情
 str = document.getElementById("nummessege")
 str.value = str.value.replace(/.$/,'')
}
if(e && e.keyCode==13){ 
  //要做的事情
 str = document.getElementById("nummessege")

 numresult = eval(str.value);
 //运算结果进行运算
 str.value = numresult;
 //输出运算后的结果
}
}






function onClicknum(nums) {
  str = document.getElementById("nummessege");
  //显示运算结果
  str.value = str.value + nums;
  //进行运算
}


function onClickclear() {
  str = document.getElementById("nummessege");
  //显示运算结果
  str.value = str.value.replace(/.$/,'')
  //退格
}
function onClickresult() {
  str = document.getElementById("nummessege");
  //显示运算结果
  numresult = eval(str.value);
  //运算结果进行运算
  str.value = numresult;
  //输出运算后的结果
}


function App() {

  return (

    <div className="App">

      <header className="App-header">
        <div className='xsq'>
          <input id='nummessege' value=""  className='xsq1'/>
        </div>
        <div>
        </div>
        <div className='jsq'>
        <div className='jsq1'>
          <div className='nub1' type="button" value="Del" id="clear" onClick={onClickclear.bind(this, 'Del')}>Delete</div>
          </div>
          <div className='jsq1'>
            <div className='nub' type="button" value="." id="."      onClick={onClicknum.bind(this, '.')}>.</div>
            <div className='nub' type="button" value="0" id="0"      onClick={onClicknum.bind(this,  0 )}>0</div>
            <div className='nub' type="button" value="=" id="result" onClick={onClickresult.bind(this, '=')}>=</div>
            <div className='nub' type="button" value="-" id="sub"    onClick={onClicknum.bind(this, '-')}>-</div>
          </div>
          <div className='jsq1'>
            <div className='nub' type="button" value="1" id="1"      onClick={onClicknum.bind(this,  1 )}>1</div>
            <div className='nub' type="button" value="2" id="2"      onClick={onClicknum.bind(this,  2 )}>2</div>
            <div className='nub' type="button" value="3" id="3"      onClick={onClicknum.bind(this,  3 )}>3</div>
            <div className='nub' type="button" value="+" id="add"    onClick={onClicknum.bind(this, '+')}>+</div>
          </div>
          <div className='jsq1'>
            <div className='nub' type="button" value="4" id="4"      onClick={onClicknum.bind(this,  4 )}>4</div>
            <div className='nub' type="button" value="5" id="5"      onClick={onClicknum.bind(this,  5 )}>5</div>
            <div className='nub' type="button" value="6" id="6"      onClick={onClicknum.bind(this,  6 )}>6</div>
            <div className='nub' type="button" value="*" id="mul"    onClick={onClicknum.bind(this, '*')}>*</div>
          </div>
          <div className='jsq1'>
            <div className='nub' type="button" value="7" id="7"           onClick={onClicknum.bind(this,  7 )}>7</div>
            <div className='nub' type="button" value="8" id="8"           onClick={onClicknum.bind(this,  8 )}>8</div>
            <div className='nub' type="button" value="9" id="9"           onClick={onClicknum.bind(this,  9 )}>9</div>
            <div className='nub' type="button" value="/" id="division"    onClick={onClicknum.bind(this, '/')}>/</div>
          </div>

        </div>
   

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
 */}
      </header>
    </div>
  );
}

export default App;
