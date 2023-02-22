function search(){
    placename=cname.value
    console.log(placename);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placename}&appid=5b4bee0ba241d092159faf007e166080`).then(data=>data.json())
    .then(data=>displayWeather(data))
  }


  function displayWeather(WeatherDetails){
  cname1=cname.value
  code=WeatherDetails.cod
  if(cname1){
    if(code==200)
    {
    error1.innerHTML=" "
    error2.innerHTML=" "
    placename=WeatherDetails.name
    temperature=WeatherDetails.main.temp
    temperature=Math.round(WeatherDetails.main.temp-273.15)
    console.log( temperature);
    console.log(temperature);
    feelslike=Math.round(WeatherDetails.main.feels_like-273.15)
    cloud=WeatherDetails.weather[0].description
    icon=WeatherDetails.weather[0].icon
     wind=WeatherDetails.wind.speed
     humidity=WeatherDetails.main.humidity
     prussure=WeatherDetails.main.pressure
     visibility=WeatherDetails.visibility
    console.log(placename);
  

 
  result.innerHTML= `<div class="box1">
        <div class="font1"><i class="fa-solid fa-droplet"></i></div>
        <div class="humidity"><p id="humidity">${humidity}%</p></div>
      <div><p class="humidityp">humidity</p></div>
        
    </div>  
    <div class="vl"></div>
    <div class="box2">
        <div class="font1"><i class="fa-solid fa-wind"></i></div>
        <div class="humidity"><p id="wind">${wind}kmph</p></div>
           <div></div> <p class="humidityp">Wind</p>
        </div>
    
    <div class="vl2"></div>
    <div class="box3">
        <div class="font1"><i class="fa-solid fa-eye"></i></div>
        <div class="humidity"><p id="visi">${visibility}</p> </div>
           <div><p class="humidityp">Visibility</p></div>
    
    </div>
    <div class="vl"></div>
    <div class="box4">
        <div class="font1"><i class="fa-solid fa-gauge-high"></i></div>
        <div class="humidity"> <p id="pressure">${ prussure}hpa</p></div> 
          <div class="humidityp"><p>Pressure</p></div>
    </div>`

    document.getElementById("city").innerHTML=placename
    document.getElementById("temp").innerHTML=temperature
    document.getElementById("cloud").innerHTML=cloud
    document.getElementById("feels").innerHTML=feelslike
    document.getElementById("temp1").style.backgroundImage=`url('http://openweathermap.org/img/w/${icon}.png')`
    }
    else{
      error2.innerHTML=`  <p>Invalid Input....</p>`
      error1.innerHTML=" "
      result.innerHTML=" "
      document.getElementById("city").innerHTML="---"
      document.getElementById("temp").innerHTML="---"
      document.getElementById("cloud").innerHTML="---"
      document.getElementById("feels").innerHTML="---"
      document.getElementById("temp1").style.backgroundImage=""
    }
}
else{
  error1.innerHTML=`  <p>Enter The Place Name....</p> `
  error2.innerHTML=" "
  result.innerHTML=" "
  document.getElementById("city").innerHTML="---"
  document.getElementById("temp").innerHTML="---"
  document.getElementById("cloud").innerHTML="---"
  document.getElementById("feels").innerHTML="---"
  document.getElementById("temp1").style.backgroundImage=""
  }
  
  }
