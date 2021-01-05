
//funksioni qe e ndryshon ngjyren e background varesisht ores

var t = new Date().getHours();
 if (t>6 && t <= 12 ) {
      document.body.style.backgroundColor="yellow";
 }else if (t>12 && t <= 18) {
      document.body.style.backgroundColor="white";
 }else {
      document.body.style.backgroundColor="red";
 }
