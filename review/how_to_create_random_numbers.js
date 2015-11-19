rand = (function(){
  var today = new Date();
  var seed = today.getTime();
  function rnd(){
    seed = ( seed * 9301 + 49297 ) % 233280;
    return seed / ( 233280.0 );
  };
  return function (number){
    return Math.ceil(rnd(seed) * number);
  };
})();
myNum = (rand(5));


/* * * * * * * * * * *
 *    normal  way    *
 * * * * * * * * * * */

function rnd( seed ){
    seed = ( seed * 9301 + 49297 ) % 233280;
    return seed / ( 233280.0 );
};

function rand(number){
    today = new Date();
    seed = today.getTime();
    return Math.ceil( rnd( seed ) * number );
};

myNum=(rand(5));