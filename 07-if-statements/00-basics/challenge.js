module.exports.favoriteNumber = function(fav, guess){
  if (guess > fav){
    return "Too high";
  }
  else if (guess < fav){
    return "Too low";
  } else {
    return "You got it!";
  }
};

module.exports.checkLock = function(num1, num2, num3, num4) {
  if (num1 !== 3 || 5 || 7){
    return "incorrect";
  } 
  else if (num2 !== 2){
    return "incorrect"; 
  } 
  else if (num3 < 5 || 100 < num3){
    return "incorrect";
  }
  else if (num4 >= 9 || num4 <= 20) {
    return "incorrect";
  } else {
    return "correct";
  }
};

module.exports.canIGet = function(item, money){
  
};
/*
            - 'MacBook Air' - $999
            - 'MacBook Pro' - $1299
            - 'Mac Pro' - $2499
            - 'Apple Sticker' - $1
*/
module.exports.canIGet = function(item, money){
  if(item === 'MacBook Air') {
    return money >= 999;
  } else if (item === 'MacBook Pro') {
    return money >= 1299;
  } else if (item === 'Mac Pro') {
    return money >= 2499;
  } else if (item === 'Apple Sticker') {
    return money >= 1;
  } else {
    return false;
  }
};