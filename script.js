// Calling all heart icons and adding point in navbar when clicked
     const hearts = document.querySelectorAll('.card-heart');
     for (const heart of hearts) {
     heart.addEventListener('click', function() {
     const navbarHeart = document.getElementById("navbar-heart");
     const navbarHeartNumber = parseInt(navbarHeart.innerText);
     navbarHeart.innerText = navbarHeartNumber + 1;
  });
}

// Calling Button giving alert

// function Part

    function callButton(serviceID, NumberID){
    const coin = document.getElementById("navbar-coin").innerText;
        if(coin < 20){
        alert('❌ You have not sufficient coin');
    }
    else{
        const serviceName = document.getElementById(serviceID).innerText;
        const serviceNumber = document.getElementById(NumberID).innerText;
    
        alert('📞 Calling ' + serviceName  + ' ' + serviceNumber + '...');
    
        const newCoin = parseInt(coin) - 20;
        document.getElementById("navbar-coin").innerText = newCoin;

            // Add to history 
            const time = new Date().toLocaleTimeString();
            const div = document.createElement('div');
            div.innerHTML = `
               <div class="bg-gray-100 flex gap-6 p-4 justify-between items-center mt-5">
                  <div>
                     <h1 class="font-semibold">${serviceName}</h1>
                     <p class="text-sm">${serviceNumber}</p>
                  </div>
                  <div>
                     <p>${time}</p>
                  </div>
               </div>
            `;

            document.getElementById('history-container').appendChild(div.firstElementChild);

      // Clear history button functionality
      const clearButton = document.getElementById('clear-button');
      if (clearButton) {
         clearButton.addEventListener('click', function() {
            document.getElementById('history-container').innerHTML = '';
         });
      }
    }
    
}

// Button Calling Part
//    First call button
   document.getElementById('first-call-button').addEventListener('click', function(){
   callButton('national-service', 'national-number'); 
   });

//     Second call Button

 document.getElementById('second-call-button').addEventListener('click', function(){
   callButton('police-service', 'police-number');   
   });
//     third call Button

 document.getElementById('third-call-button').addEventListener('click', function(){
   callButton('fire-service', 'fire-number');   
   });
//     fourth call Button

 document.getElementById('fourth-call-button').addEventListener('click', function(){
   callButton('ambulance-service', 'ambulance-number');   
   });
//     fifth call Button

 document.getElementById('fifth-call-button').addEventListener('click', function(){
   callButton('child-service', 'child-number');   
   });
//     sixth call Button

 document.getElementById('sixth-call-button').addEventListener('click', function(){
   callButton('corrupt-service', 'corrupt-number');   
   });
//     seventh call Button

 document.getElementById('seventh-call-button').addEventListener('click', function(){
   callButton('electricity-service', 'electricity-number');   
   });

//     eighth call Button

document.getElementById('eighth-call-button').addEventListener('click', function(){
   callButton('brac-service', 'brac-number');   
   });
//     ninth call Button

document.getElementById('ninth-call-button').addEventListener('click', function(){
   callButton('railway-service', 'railway-number');   
   });



// Copy Button Giving Alert and Copied the Service Number and Growing Point


// function Part
 function copyButton(serviceNumberAlert){

    const serviceNumberAlertValue = document.getElementById(serviceNumberAlert).innerText;

    navigator.clipboard.writeText(serviceNumberAlertValue);
    alert('✅ Copied the number: ' + serviceNumberAlertValue);
    const navbarCopy = document.getElementById("navbar-copy");
     const navbarCopyNumber = parseInt(navbarCopy.innerText);
     navbarCopy.innerText = navbarCopyNumber + 1;
    
}

// Function Calling part

//    First Copy button
  document.getElementById('first-copy-button').addEventListener('click', function(){
   copyButton('national-number'); 
   });
//    second Copy button
  document.getElementById('second-copy-button').addEventListener('click', function(){
   copyButton('police-number'); 
   });
//    third Copy button
  document.getElementById('third-copy-button').addEventListener('click', function(){
   copyButton('fire-number'); 
   });
//    Fourth Copy button
  document.getElementById('fourth-copy-button').addEventListener('click', function(){
   copyButton('ambulance-number'); 
   });
//    Fifth Copy button
  document.getElementById('fifth-copy-button').addEventListener('click', function(){
   copyButton('child-number'); 
   });
//    sixth Copy button
  document.getElementById('sixth-copy-button').addEventListener('click', function(){
   copyButton('corrupt-number'); 
   });
//    seventh Copy button
  document.getElementById('seventh-copy-button').addEventListener('click', function(){
   copyButton('electricity-number'); 
   });
//    eighth Copy button
  document.getElementById('eighth-copy-button').addEventListener('click', function(){
   copyButton('brac-number'); 
   });
//    ninth Copy button
  document.getElementById('ninth-copy-button').addEventListener('click', function(){
   copyButton('railway-number'); 
   });


    
                   
    