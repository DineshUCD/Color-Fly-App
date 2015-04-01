/* If you understand this fully, then great job! Here is some ascii art for you.
I didn't make the ascii art though...
                ^    ^
                       / \  //\
         |\___/|      /   \//  .\
         /O  O  \__  /    //  | \ \
        /     /  \/_/    //   |  \  \
        @___@'    \/_   //    |   \   \ 
           |       \/_ //     |    \    \ 
           |        \///      |     \     \ 
          _|_ /   )  //       |      \     _\
         '/,_ _ _/  ( ; -.    |    _ _\.-~        .-~~~^-.
         ,-{        _      `-.|.-~-.           .~         `.
          '/\      /                 ~-. _ .-~      .-~^-.  \
             `.   {            }                   /      \  \
           .----~-.\        \-'                 .~         \  `. \^-.
          ///.----..>    c   \             _ -~             `.  ^-`   ^-_
            ///-._ _ _ _ _ _ _}^ - - - - ~                     ~--,   .-~
            

*/

//I should be studying....
var globalVar = 3;

for (replicate = 0; replicate < 60; replicate++) 
{
  $("<div class='box' onmouseover='changeColor(this)'></div>").appendTo("body");
  $("<a class='fake'></a>").appendTo("body"); //Very important for cloning later on.
}

/* Dinesh's custom crazy append hack. Since we have a 100 fake 
   attribute tags, we clone a box to each one! */
var clone=$('.box');
var target=$('.fake');
target.append(clone.clone(true));

function reset()
{
  var elements = document.getElementsByClassName("box");
  for (var reset = 0; reset < elements.length; reset++) 
  {
    elements[reset].style.background="rgba(255, 255, 240, 1.0)";
    elements[reset].style.opacity="1";
  }
  globalVar = 3;
}


function getColorCode(limit, lowerBound) {
  var today = new Date();
  var seed = today.getSeconds();
  var random = Math.floor(Math.random(seed) * limit) + lowerBound;
  return random;
};

function setSun()     { globalVar = 1; }
function setNormal()  { globalVar = 3; }
function setLight()   { globalVar = 4; }
function lightStart() { globalVar = 2; }

function getColorString()
{
  if (globalVar == 3 || globalVar == 2)
  {
    var colorCode = [getColorCode(255, 1),
                   getColorCode(255, 1),
                   getColorCode(255, 1),
                  ];
    var fruits = [colorCode[0] ,colorCode[1],colorCode[2]];
  }
  else if (globalVar == 1)
  {
    var colorCode = [getColorCode(255, 200),
                     getColorCode(100, 78),
                     getColorCode(100, 25),
                    ];
    var fruits = [colorCode[0] ,colorCode[1],colorCode[2]];
  }
  else if (globalVar == 4)
  {
    var colorCode = [getColorCode(230, 130),
                     getColorCode(255, 100),
                     getColorCode(230, 130),
                    ];0
    var fruits = [colorCode[0] ,colorCode[1],colorCode[2]];
  }
  return fruits.join();
};

/* I have to change real rgba numbers to a string as input. */

changeColor = function(box) { 
  $(document).ready(function(){ $(box).slideUp("medium"); return false; });
  box.style.background= "rgba(" + getColorString() + "," + "1)";
  
  $(document).ready(function(){ 
    $(box).slideDown("medium"); 
    if (globalVar == 2)
    {
       $(document).ready(function(){
          $(box).fadeTo("slow", 0.1);
       });
    }
    else
    {
        $(document).ready(function(){
          $(box).animate({opacity: 1});
       });
    }
    return false; 
  });

  
};
