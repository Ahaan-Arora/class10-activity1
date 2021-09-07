var weights=[30,38,47,100,10]



function setup() 
{
  createCanvas(400,400);

  
  Weight_average()
}

function draw() 
{
background(51);

}

function Weight_average() {

var sum = weights [0]+weights [1]+weights [2]+ weights [3]+ weights [4]
var avg = sum / weights.length
console.log (avg)
}