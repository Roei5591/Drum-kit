for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds\\snare.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds\\tom-1.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds\\tom-2.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds\\tom-3.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds\\tom-4.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds\\kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds\\crash.mp3");
      audio.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey)
{
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
}, 100);
}



const v = [1,2 ,3 ,4 ,5 , 6 ];
const d =  15;


const e = Array(v.length).fill(0);


for(let i = 28 ; i <= 28 ; i++)
{
  console.time("a" + i);
  var c = p(i ,v);
  console.timeEnd("a" + i);

  console.time("b" + i);
  var g = m(i , v ,e ,0 ,0);
  console.timeEnd("b" + i);
}


//console.log("old: " + c + " | new: " + g);
//console.log(g)


function p(d , v)
{

  if(d < 0) return 0;
  if (d === 0) return 1;

  let  paths = 0;
  for(let i = 0 ; i < v.length; i++)
  {
    paths += p(d - v[i] , v);
  }


  return paths;
}

function m(d , v , a , c , index)
{
  if(d < 0)
  {
    return 0;
  }

  if (d === 0)
  {
    //console.log(a[0]+ " " + a[1] + " " + c);
    return ans(a , c);

  }
  let  paths = 0;

  for(let i = index ; i < v.length; i++)
  {
    a[i]++;
    c++;
    paths += m(d - v[i] , v , a , c , i );
    a[i]--;
    c--;

  }
  return paths;
}

function ans(a ,c)
{
  let ans = 1;
  for(let i = 0 ; i < a.length ; i++)
  {
    ans *= pro(c , a[i]);
    c -= a[i];
  }
  return ans;
}

function pro(n, k)
{
  let a1 ,a2;
  let s1 = 1 , s2 = 1;
  if(k > n-k)
  {
    a1 = k;
    a2 = n-k;
  }
  else
  {
    a1 = n-k;
    a2 = k;
  }
   for(let i = a1 + 1 ; i <= n ; i++ )
   {
    s1 *= i;
   }

   for(let i = 1 ; i <= a2 ; i++ )
   {
    s2 *= i;
   }

return s1/s2;
}
