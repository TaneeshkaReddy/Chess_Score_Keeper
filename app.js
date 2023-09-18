p1={
  score:0,
  display:document.querySelector('#p1display'),
  button:document.querySelector('#p1button')
};

p2={
  score:0,
  display:document.querySelector('#p2display'),
  button:document.querySelector('#p2button')
};

const winningscoreselect=document.querySelector('#playto');
const resetbutton=document.querySelector('#reset');
let winningScore=3;
let gameover=false;

p1.button.addEventListener('click',()=>{
  if(!gameover){
 p1.score+=1;
 if(p1.score===winningScore)
 {
  isgameover=true;
  p1.button.disabled=true;
  p2.button.disabled=true;
  p1.display.classList.add('has-text-success');
  p2.display.classList.add('has-text-danger');
 }
 p1.display.textContent=p1.score;

  }
});

p2.button.addEventListener('click',()=>{
  if(!gameover){
 p2.score+=1;
 if(p2.score===winningScore)
 {
  isgameover=true;
  p1.button.disabled=true;
  p2.button.disabled=true;
  p2.display.classList.add('has-text-success');
  p1.display.classList.add('has-text-danger');
 }
 }
 p2.display.textContent=p2.score;

  }
);

resetbutton.addEventListener('click',reset);

winningscoreselect.addEventListener('change',function (){
  winningScore=parseInt(this.value);
  
  reset();
  // alert(`${winningScore}`);
});
// IMP** -REMEMBER YOU CANNOT USE ARROW FUNTION AND 'THIS' KEYWORD TOGETHER

function reset() {
  isgameover=false;
  for(let p of [p1,p2]){
    
    p.score=0;
    p.display.textContent=0;
    p.button.disabled=false;
    p.display.classList.remove('has-text-success','has-text-danger');
   
  }

}
