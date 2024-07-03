function updateTime() {
    const now = new Date();

   
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 

    
    const strTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
  
    const options = { weekday: 'long' };
    const day = new Intl.DateTimeFormat('en-US', options).format(now);
    
   
    document.getElementById('currentTime').innerText = strTime;
    document.getElementById('currentDay').innerText = day;
}

setInterval(updateTime, 1000); 
updateTime();  
