const tempF = document.getElementById('tempF');
const tempK = document.getElementById('tempK');



// use conditionals to swap the thermometer emoji depicting/correlating to that temp the user types in  


let index;

tempF.addEventListener('input', function(e){
  let fahrenheit = this.value;
  conversion(fahrenheit, index = 1);
});

tempK.addEventListener('input', function(e){
  let kelvin = this.value;
  conversion(kelvin, index = 2);
});


function conversion(temp, index){
  if(index === 1){
    const result = (temp - 32) * 5/9 + 273.15;
    fahrenheitEmoji(temp);
    tempK.value = result.toFixed(2);
  }

  if(index === 2){
    const result = (temp - 273.15) * 9/5 + 32;
    fahrenheitEmoji(result);
    tempF.value = result.toFixed(2);
  }


// if box empty make it look empty :) 
  if(!tempF.value){
    tempK.value = "";
  }

  if(!tempK.value){
    tempF.value = "";
  }

}


function fahrenheitEmoji(temp){
  //console.log(tempF.value ? true : false);

  if(!tempF.value){
    document.getElementById('emoji').innerHTML = '🌡️';
  }else if(!tempK.value){
    document.getElementById('emoji').innerHTML = ' 🌡️';
  }else if(temp > 80){
    document.getElementById('emoji').innerHTML = '🔥';
  }else if(temp <= 32){
    document.getElementById('emoji').innerHTML = '❄️';
  }else{
    document.getElementById('emoji').innerHTML = '🌡️';
  }
}


