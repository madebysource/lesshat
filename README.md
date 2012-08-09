LESS Hat - a bunch of smart Less mixins
----------------------------------  
    
  Why our mixins are smart? Because they are universal.   
  You could have gradient with 2 stops or 20 and it's still okey.  
    
  Petr Brzek & Jan Kuca  
  From creators of http://csshat.com  
  
  
TABLE OF MIXINS

  @Shadow  
  @LinearGradient  
  @RadialGradient  
  @Rounded  
  @Opacity  
  @Size  
  @Transition
  @Animation
  
----------------------------------

USIGN MIXINS

  @Shadow
  
    .shadow(@arguments);

    .shadow(~"0 1px 10px #000, inset 0 -2px 5px red");
    
    result: -webkit-box-shadow: 0 1px 10px #000, inset 0 -2px 5px red;
            -moz-box-shadow: 0 1px 10px #000, inset 0 -2px 5px red;
            box-shadow: 0 1px 10px #000, inset 0 -2px 5px red;
            
  @LinearGradient
  
    - Only hex or rgba colors
    
    - Direction can be express by keyword (top, left, right, bottom) or degress (45deg)
    
    - The mixin automatically creates gradient syntax for other browsers just like colorzilla.com/gradient-editor/.
      FF3.6+, IE9 SVG, Chrome, Safari4+, Opera 11.10+,  W3C syntax. NOT IE6 - IE8 http://stackoverflow.com/questions/2503920/css-gradients-in-ie7-ie8-is-causing-text-to-become-aliased/2710452#2710452
    
    
    .l-gradient(@arguments);
    
    .l-gradient(~" top ,rgba(30, 87 , 153 , .5) 0%,rgba(41,137,216, .2) 50%,rgba(32,124,202, .8) 100%");
    
    result: background-image: url(' data:image/svg+xml;utf8,<?xml version="1.0" ?><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none"><linearGradient id="grad-ucgg-generated" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="0%" y2="100%"> <stop stop-opacity=".5 " stop-color="rgb(30,87,153)" offset="0%" /><stop stop-opacity=".2 " stop-color="rgb(41,137,216)" offset="50%" /><stop stop-opacity=".8 " stop-color="rgb(32,124,202)" offset="100%" /> </linearGradient><rect x="0" y="0" width="1" height="1" fill="url(#grad-ucgg-generated)" /></svg> ');
            background-image: -moz-linear-gradient(top,rgba(30,87,153,.5) 0%,rgba(41,137,216,.2) 50%,rgba(32,124,202,.8) 100%);
            background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(30,87,153,.5)), color-stop(50%, rgba(41,137,216,.2)), color-stop(100%, rgba(32,124,202,.8)));
            background-image: -webkit-linear-gradient(top,rgba(30,87,153,.5) 0%,rgba(41,137,216,.2) 50%,rgba(32,124,202,.8) 100%);
            background-image: -o-linear-gradient(top,rgba(30,87,153,.5) 0%,rgba(41,137,216,.2) 50%,rgba(32,124,202,.8) 100%);
            background-image: linear-gradient(to bottom, rgba(30, 87 , 153 , .5) 0%,rgba(41,137,216, .2) 50%,rgba(32,124,202, .8) 100%);

  @RadialGradient
  
    .r-gradient(@arguments);
    
    .r-gradient(~"65% 38%, 100px 100px, #000 0%, #fff 100%");
    
    result: background-image: -moz-radial-gradient(65% 38%, circle, #000 0%, #fff 100%);
            background-image: -o-radial-gradient(65% 38%, 100px 100px, #000 0%, #fff 100%);
            background-image: -webkit-radial-gradient(65% 38%, 100px 100px, #000 0%, #fff 100%);
            background-image: -o-radial-gradient(65% 38%, 100px 100px, #000 0%, #fff 100%);
            background-image: radial-gradient(65% 38%, 100px 100px, #000 0%, #fff 100%);
            
  @Rounded
  
    .rounded(@radius);
    
    .rounded(10px); // all corner rounded
    .rounded(~"10px / 20px"); // horizontal and vertical rounded differently
    .rounded(~"0 10px 0 0"); // only top right corner rounded
    
    result: -webkit-border-radius: 10px;
            -moz-border-radius: 10px;
            border-radius: 10px;

            -webkit-border-radius: 10px / 20px;
            -moz-border-radius: 10px / 20px;
            border-radius: 10px / 20px;

            -webkit-border-radius: 0 10px 0 0;
            -moz-border-radius: 0 10px 0 0;
            border-radius: 0 10px 0 0;
            
            -moz-background-clip: padding;
            -webkit-background-clip: padding-box;
            background-clip: padding-box;
            
   @Opacity
   
    .opacity(.5);
    
    result: -moz-opacity: 0.5;
            -webkit-opacity: 0.5;
            opacity: 0.5;

  @Size
    
    .size(@square);
    
    .size(10px);
    
    result: width: 10px;
            height: 10px;
            
    .size(@width, @height);
    
    .size(10px, 20px);
    
    result: width: 10px;
            height: 20px;
            
  @Transition
  
    .transition(@arguments);
    
    .transition(~"color .5s ease-in, background .3s 1s ease-in-out");
    
    result: -webkit-transition: color .5s ease-in, background .3s 1s ease-in-out;
            -moz-transition: color .5s ease-in, background .3s 1s ease-in-out;
            -o-transition: color .5s ease-in, background .3s 1s ease-in-out;
            transition: color .5s ease-in, background .3s 1s ease-in-out;
            
  @Animation
  
    .animation(@arguments);
    
    .animation(~"animation1 6s backwards 2s, animation2 3s linear alternate infinite");
            
    result: -webkit-animation: animation1 6s backwards 2s, animation2 3s linear alternate infinite;
            -moz-animation: animation1 6s backwards 2s, animation2 3s linear alternate infinite;
            -o-animation: animation1 6s backwards 2s, animation2 3s linear alternate infinite;
            animation: animation1 6s backwards 2s, animation2 3s linear alternate infinite;
            
----------------------------------

