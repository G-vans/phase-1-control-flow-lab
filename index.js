  // Write your code here!
  function scuberGreetingForFeet(rideDistance){
    if (rideDistance <= 400) {
      return "This one is on me!"
      
    } else if(rideDistance >= 2000 && rideDistance <= 2500) {
      return "I will gladly take your thirty bucks."
    } else if(rideDistance > 2500) {
      return 'No can do.'
    }
  }
  scuberGreetingForFeet(199);
  scuberGreetingForFeet(2001);
  scuberGreetingForFeet(2501);

  function ternaryCheckCity(city){
    return city === 'NYC'? 'Ok, sounds good.' :'No go.'
   }
   
   ternaryCheckCity('NYC');
   ternaryCheckCity('Pittsburgh');


  function switchOnCharmFromTip(tip){
    switch (tip) {
      case 'generous':
        return 'Thank you so much.'
        
        case 'not as generous':
          return 'Thank you.'
    
      default:
        return 'Bye.'
      
    }
  }
