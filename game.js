    // Create a parent function that generates a random number between 19 & 120

$(document) . ready (function() {
    let Random = Math.floor (Math.random () * 101 + 19);

    // Print random number from above function to the computerNumber class

    $(".computerNumber").text("Number to Match: " + Random);
    

    //Declare variables, use 'let' instead of 'var' 

    let wins = 0;
    let losses = 0;
    let userTotal = 0; 


    // Generate random numbers for each clickable gem
    // Random number has to be between 1 - 12
    // Console log to make sure they are working correctly

  let num1 = Math.floor(Math.random()*11+1);
  let num2 = Math.floor(Math.random()*11+1);
  let num3 = Math.floor(Math.random()*11+1);
  let num4 = Math.floor(Math.random()*11+1);
  console.log(num1, num2, num3, num4)

    //use .text to print into the win/loss divs

  $(".userWins").text("Wins: " + wins);
  $(".userLosses").text("Losses: " + losses);

  // Create a function to reset 

  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $(".computerNumber").text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('.resultsDiv').text(userTotal);
        } 

  //print +1 win to the userTotal
  function good(){
  alert("You won!");
    wins++; 
    $('.userWins').text(" Wins: " + wins);
    reset();
  }

  //print +1 loss to the userTotal
  function bad(){
  alert ("You lose!");
    losses++;
    $('.userLosses').text("Losses: " + losses);
    reset()
  }

  //set up on click event for each crystal
    //set win/loss conditionals

    $('.crystalOne').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('.resultsDiv').text(userTotal); 

          if (userTotal === Random){
            good();
          }
          else if ( userTotal > Random){
            bad();
          }   
    }) 

    $('.crystalTwo').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('.resultsDiv').text(userTotal); 
          if (userTotal === Random){
            good();
          }
          else if ( userTotal > Random){
            bad();
          } 
    })

    $('.crystalThree').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('.resultsDiv').text(userTotal);

            if (userTotal === Random){
            good();
          }
          else if ( userTotal > Random){
            bad();
          } 
    })

    $('.crystalFour').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('.resultsDiv').text(userTotal); 
        
            if (userTotal === Random){
            good();
          }
          else if ( userTotal > Random){
            bad();
          }
    });   
  }); 