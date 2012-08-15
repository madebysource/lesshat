LESS Hat - a bunch of smart Less mixins
----------------------------------  
    
  Why our mixins are smart? Because they are universal.   
  You could have gradient with 2 stops or 20 and it's still okey.  
    
  Petr Brzek & Jan Kuca  
  From creators of http://csshat.com  
  
  
TABLE OF MIXINS

  @Shadow  
  @Gradient  
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
            
  @Gradient
  
    - Hex, Rgb, Rgba, Hsl, Hsla colors supported
    
    - The mixin automatically creates gradient syntax for other browsers just like colorzilla.com/gradient-editor/.
      FF3.6+, IE9 SVG in progress, Chrome, Safari4+, Opera 11.10+,  W3C syntax. NOT IE6 - IE8 http://stackoverflow.com/questions/2503920/css-gradients-in-ie7-ie8-is-causing-text-to-become-aliased/2710452#2710452
    
    
    .gradient(@arguments);
    
    .gradient(~"linear-gradient(to bottom, #fefcea 0%,#f1da36 100%), radial-gradient(center, ellipse cover, hsla(212,67%,36%,1) 0%,hsla(207,69%,51%,1) 50%,hsla(208,73%,46%,1) 60%,hsla(206,70%,70%,1) 100%)");
    
    result: background-image: -moz-linear-gradient(top, #fefcea 0%,#f1da36 100%), -moz-radial-gradient(center, ellipse cover, hsla(212,67%,36%,1) 0%,hsla(207,69%,51%,1) 50%,hsla(208,73%,46%,1) 60%,hsla(206,70%,70%,1) 100%);
            background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0%,#fefcea),color-stop(100%,#f1da36)),radial-gradient(center,ellipse cover,color-stop(0%,hsla(212,67%,36%,1)),color-stop(50%,hsla(207,69%,51%,1)),color-stop(60%,hsla(208,73%,46%,1)),color-stop(100%,hsla(206,70%,70%,1)));
            background-image: -webkit-linear-gradient(top, #fefcea 0%,#f1da36 100%), -webkit-radial-gradient(center, ellipse cover, hsla(212,67%,36%,1) 0%,hsla(207,69%,51%,1) 50%,hsla(208,73%,46%,1) 60%,hsla(206,70%,70%,1) 100%);
            background-image: -o-linear-gradient(top, #fefcea 0%,#f1da36 100%), -o-radial-gradient(center, ellipse cover, hsla(212,67%,36%,1) 0%,hsla(207,69%,51%,1) 50%,hsla(208,73%,46%,1) 60%,hsla(206,70%,70%,1) 100%);
            background-image: linear-gradient(to bottom, #fefcea 0%,#f1da36 100%), radial-gradient(center, ellipse cover, hsla(212,67%,36%,1) 0%,hsla(207,69%,51%,1) 50%,hsla(208,73%,46%,1) 60%,hsla(206,70%,70%,1) 100%);

            
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

