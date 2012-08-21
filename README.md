//  LESS Hat 0.4.2
//  CSSHat.com
//  2012
//  Petr Brzek & Jan Kuca


//  TABLE OF MIXINS:
//    .animation
    //    .animationDelay
    //    .animationDirection
    //    .animationDuration
    //    .animationTimingFunction
    //    .animationIterationCount
    //    .animationName
    //    .animationPlayState
    //    .keyframes - in future
//    .appearance
//    .backfaceVisibility
//    .backgroundClip
//    .backgroundOrigin
//    .backgroundSize
//    .borderRadius
    //    .borderTopLeftRadius
    //    .borderTopRightRadius
    //    .borderBottomLeftRadius
    //    .borderBottomRightRadius
//    .borderImage
//    .boxShadow
//    .boxSizing
//    .columns
    //    .columnCount
    //    .columnGap
    //    .columnRule 
    //    .columnWidth
//    .fontFace
//    .gradient
//    .opacity
//    .perspective
//    .size
//    .transform
    //    .transformOrigin
    //    .transformStyle


//  @GlobalConfig 

  // Config supported browsers for your project

    @w3c: true; // Unprefixed W3C syntax
    @webkit: true; // Chrome 7+, Safari 5+, iOS5, Android
    @moz: true; //  Firefox 4+  
    @opera: true; // Opera 10.5+
    @ms: true;  // IE 10+
    //@IE9: true; // SVG for linear and radial gradients
    @oldWebkit: true; // iOS4, Safari 4, Chrome < 6. Old webkit gradient syntax, shadow spread

  // Signals

    @webkitSignal: 1;
    @mozSignal: 2;
    @operaSignal: 3;
    @msSignal: 4;
    @w3cSignal: 5;


// .animation

  .animation(@arguments: none){

    //  Local config for disabling properties

    @w3cLocal: true; // Unprefixed W3C syntax
    @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
    @mozLocal: true; //  Firefox 4+  
    @operaLocal: true; // Opera 10.5+
    @msLocal: true;  // IE 10+

    .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
      .inception (@signal, @arguments) when (@signal = 1) { -webkit-animation: @arguments;}
      .inception (@signal, @arguments) when (@signal = 2) { -moz-animation: @arguments;}
      .inception (@signal, @arguments) when (@signal = 3) { -o-animation: @arguments;}
      .inception (@signal, @arguments) when (@signal = 4) { -ms-animation: @arguments;}
      .inception (@signal, @arguments) when (@signal = 5) { animation: @arguments;}
      .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
      .inception(@signal, @arguments);
    }
    .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @operaSignal, @opera, @operaLocal);
      // --
      .result(@arguments, @msSignal, @ms, @msLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);
  }

    //  .animation(~"yourAnimation1 6s backwards 2s, yourAnimation2 3s linear alternate infinite");


  //  .animationDelay

  .animationDelay(@arguments: 0){

    //  Local config for disabling properties

    @w3cLocal: true; // Unprefixed W3C syntax
    @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
    @mozLocal: true; //  Firefox 4+  
    @operaLocal: true; // Opera 10.5+
    @msLocal: true;  // IE 10+

    .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
      .inception (@signal, @arguments) when (@signal = 1) { -webkit-animation-delay: @arguments;}
      .inception (@signal, @arguments) when (@signal = 2) { -moz-animation-delay: @arguments;}
      .inception (@signal, @arguments) when (@signal = 3) { -o-animation-delay: @arguments;}
      .inception (@signal, @arguments) when (@signal = 4) { -ms-animation-delay: @arguments;}
      .inception (@signal, @arguments) when (@signal = 5) { animation-delay: @arguments;}
      .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
      .inception(@signal, @arguments);
    }
    .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @operaSignal, @opera, @operaLocal);
      // --
      .result(@arguments, @msSignal, @ms, @msLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);
  }

    //  .animationDelay(1s);
    //  .animationDelay(~"750ms, 2s"); // For multiple animation


  //  .animationDirection

    .animationDirection(@arguments: normal){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  
      @operaLocal: true; // Opera 10.5+
      @msLocal: true;  // IE 10+

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-animation-direction: @arguments;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-animation-direction: @arguments;}
        .inception (@signal, @arguments) when (@signal = 3) { -o-animation-direction: @arguments;}
        .inception (@signal, @arguments) when (@signal = 4) { -ms-animation-direction: @arguments;}
        .inception (@signal, @arguments) when (@signal = 5) { animation-direction: @arguments;}
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @operaSignal, @opera, @operaLocal);
      // --
      .result(@arguments, @msSignal, @ms, @msLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);
  }

    //  .animationDirection();
    //  .animationDirection(~"normal, alternate");


  //  .animationDuration

    .animationDuration(@arguments: 0){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  
      @operaLocal: true; // Opera 10.5+
      @msLocal: true;  // IE 10+

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-animation-duration: @arguments;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-animation-duration: @arguments;}
        .inception (@signal, @arguments) when (@signal = 3) { -o-animation-duration: @arguments;}
        .inception (@signal, @arguments) when (@signal = 4) { -ms-animation-duration: @arguments;}
        .inception (@signal, @arguments) when (@signal = 5) { animation-duration: @arguments;}
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @operaSignal, @opera, @operaLocal);
      // --
      .result(@arguments, @msSignal, @ms, @msLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);
  }

    //  .animationDuration(2s);


  //  .animationTimingFunction

    .animationTimingFunction(@arguments: ease){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  
      @operaLocal: true; // Opera 10.5+
      @msLocal: true;  // IE 10+

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-animation-timing-function: @arguments;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-animation-timing-function: @arguments;}
        .inception (@signal, @arguments) when (@signal = 3) { -o-animation-timing-function: @arguments;}
        .inception (@signal, @arguments) when (@signal = 4) { -ms-animation-timing-function: @arguments;}
        .inception (@signal, @arguments) when (@signal = 5) { animation-timing-function: @arguments;}
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @operaSignal, @opera, @operaLocal);
      // --
      .result(@arguments, @msSignal, @ms, @msLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);
    }

    //  .animationTimingFunction(ease-in-out);


  //  .animationIterationCount

    .animationIterationCount(@arguments: 0){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  
      @operaLocal: true; // Opera 10.5+
      @msLocal: true;  // IE 10+

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-animation-iteration-count: @arguments;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-animation-iteration-count: @arguments;}
        .inception (@signal, @arguments) when (@signal = 3) { -o-animation-iteration-count: @arguments;}
        .inception (@signal, @arguments) when (@signal = 4) { -ms-animation-iteration-count: @arguments;}
        .inception (@signal, @arguments) when (@signal = 5) { animation-iteration-count: @arguments;}
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @operaSignal, @opera, @operaLocal);
      // --
      .result(@arguments, @msSignal, @ms, @msLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);
    }

      //  .animationIterationCount(3);


  //  .animationName

    .animationName(@arguments: none){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  
      @operaLocal: true; // Opera 10.5+
      @msLocal: true;  // IE 10+

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-animation-name: @arguments;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-animation-name: @arguments;}
        .inception (@signal, @arguments) when (@signal = 3) { -o-animation-name: @arguments;}
        .inception (@signal, @arguments) when (@signal = 4) { -ms-animation-name: @arguments;}
        .inception (@signal, @arguments) when (@signal = 5) { animation-name: @arguments;}
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @operaSignal, @opera, @operaLocal);
      // --
      .result(@arguments, @msSignal, @ms, @msLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);
    }

      //  .animationName(myReallyCoolAnimationName);


  //  .animationPlayState

    .animationPlayState(@arguments: running){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  
      @operaLocal: true; // Opera 10.5+
      @msLocal: true;  // IE 10+

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-animation-play-state: @arguments;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-animation-play-state: @arguments;}
        .inception (@signal, @arguments) when (@signal = 3) { -o-animation-play-state: @arguments;}
        .inception (@signal, @arguments) when (@signal = 4) { -ms-animation-play-state: @arguments;}
        .inception (@signal, @arguments) when (@signal = 5) { animation-play-state: @arguments;}
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @operaSignal, @opera, @operaLocal);
      // --
      .result(@arguments, @msSignal, @ms, @msLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);   
    }

      //  .animationPlayState(paused);


//  .appearance

  .appearance(@argument:none){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @argument) when (@signal = 1) { -webkit-appearance: @argument;}
        .inception (@signal, @argument) when (@signal = 2) { -moz-appearance: @argument;}
        .inception (@signal, @argument) when (@signal = 5) { appearance: @argument;}
        .inception (@signal, @argument) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @argument);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);  
  }

    //  .appearance(button);


//  .backfaceVisibility

  .backfaceVisibility(@argument:visible){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @argument) when (@signal = 1) { -webkit-backface-visibility: @argument;}
        .inception (@signal, @argument) when (@signal = 2) { -moz-backface-visibility: @argument;}
        .inception (@signal, @argument) when (@signal = 5) { backface-visibility: @argument;}
        .inception (@signal, @argument) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @argument);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);  
  }

    //  .backfaceVisibility(hidden);


//  .backgroundClip

  .backgroundClip(@arguments:border-box){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-background-clip: @arguments;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-background-clip: @arguments;}
        .inception (@signal, @arguments) when (@signal = 5) { background-clip: @arguments;}
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);  
  }

    //  .backgroundClip(padding-box);


//  .backgroundOrigin

  .backgroundOrigin(@arguments:padding){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-background-origin: @arguments;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-background-origin: @arguments;}
        .inception (@signal, @arguments) when (@signal = 5) { background-origin: @arguments;}
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);  
  }

    //  .backgroundOrigin(content-box);


//  .backgroundSize

  .backgroundSize(@arguments:auto){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-background-size: @arguments;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-background-size: @arguments;}
        .inception (@signal, @arguments) when (@signal = 5) { background-size: @arguments;}
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);  
  }

    //  .backgroundSize(~"auto, 100%");


// .borderRadius

  .borderRadius(@arguments) {

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-border-radius: @arguments; -webkit-background-clip: padding-box;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-border-radius: @arguments; -moz-background-clip: padding;}
        .inception (@signal, @arguments) when (@signal = 5) { border-radius: @arguments; background-clip: padding-box; }
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal); 
  }

    //  .borderRadius(10px); //  all corner rounded
    //  .borderRadius(~"10px / 20px"); //  horizontal and vertical rounded differently
    //  .borderRadius(~"0 10px 0 0"); // only top right corner rounded


// .borderTopLeftRadius

  .borderTopLeftRadius(@arguments) {

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-border-top-left-radius: @arguments; -webkit-background-clip: padding-box;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-border-radius-topleft: @arguments; -moz-background-clip: padding;}
        .inception (@signal, @arguments) when (@signal = 5) { border-top-left-radius: @arguments; background-clip: padding-box; }
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal); 
  }

    //  .borderTopLeftRadius(10px);


// .borderTopRightRadius

  .borderTopRightRadius(@arguments) {

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-border-top-right-radius: @arguments; -webkit-background-clip: padding-box;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-border-radius-topright: @arguments; -moz-background-clip: padding;}
        .inception (@signal, @arguments) when (@signal = 5) { border-top-right-radius: @arguments; background-clip: padding-box; }
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal); 
  }

    //  .borderTopRightRadius(10px);


// .borderBottomLeftRadius

  .borderBottomLeftRadius(@arguments) {

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-border-bottom-left-radius: @arguments; -webkit-background-clip: padding-box;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-border-radius-bottomleft: @arguments; -moz-background-clip: padding;}
        .inception (@signal, @arguments) when (@signal = 5) { border-bottom-left-radius: @arguments; background-clip: padding-box; }
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal); 
  }

    //  .borderBottomLeftRadius(10px);


// .borderBottomRightRadius

  .borderBottomRightRadius(@arguments) {

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-border-bottom-right-radius: @arguments; -webkit-background-clip: padding-box;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-border-radius-bottomright: @arguments; -moz-background-clip: padding;}
        .inception (@signal, @arguments) when (@signal = 5) { border-bottom-right-radius: @arguments; background-clip: padding-box; }
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal); 
  }

    //  .borderBottomRightRadius(10px);


// .borderImage

  .borderImage(@arguments:none) {

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  
      @operaLocal: true; // Opera 10.5+

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-border-image: @arguments;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-border-image: @arguments;}
        .inception (@signal, @arguments) when (@signal = 3) { -o-border-image: @arguments;}
        .inception (@signal, @arguments) when (@signal = 5) { border-image: @arguments; }
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @operaSignal, @opera, @operaLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal); 
  }

    //  .borderImage(url(border.png) 30 30 round);


//  .boxShadow

  .boxShadow(@arguments:none){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-box-shadow: @arguments;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-box-shadow: @arguments;}
        .inception (@signal, @arguments) when (@signal = 5) { box-shadow: @arguments;}
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);  
  }

    //  .boxShadow(~"0 1px 10px #000, inset 0 -2px 5px red");


//  .boxSizing

  .boxSizing(@arguments:content-box){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-box-sizing: @arguments;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-box-sizing: @arguments;}
        .inception (@signal, @arguments) when (@signal = 5) { box-sizing: @arguments;}
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);  
  }

    //  .boxSizing(border-box);


//  .columns

  .columns(@arguments:auto auto){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-columns: @arguments;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-columns: @arguments;}
        .inception (@signal, @arguments) when (@signal = 5) { columns: @arguments;}
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);  
  }

    //  .columns(100px 3);


//  .columnCount

  .columnCount(@arguments:auto){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-column-count: @arguments;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-column-count: @arguments;}
        .inception (@signal, @arguments) when (@signal = 5) { column-count: @arguments;}
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);  
  }

    //  .columnCount(3);


//  .columnGap

  .columnGap(@arguments:normal){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-column-gap: @arguments;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-column-gap: @arguments;}
        .inception (@signal, @arguments) when (@signal = 5) { column-gap: @arguments;}
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);  
  }

    //  .columnGap(40px);


//  .columnRule

  .columnRule(@arguments:medium none black){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-column-rule: @arguments;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-column-rule: @arguments;}
        .inception (@signal, @arguments) when (@signal = 5) { column-rule: @arguments;}
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);  
  }

    //  .columnRule(3px outset #ff00ff);


//  .columnWidth

  .columnWidth(@arguments:auto){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-column-width: @arguments;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-column-width: @arguments;}
        .inception (@signal, @arguments) when (@signal = 5) { column-width: @arguments;}
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);  
  }

    //  .columnWidth(100px);


//  .fontFace

  .fontFace(@fontname, @fontfile) {

    font-family: "@{fontname}";
    src: url("@{fontfile}-webfont.eot");
    src: url("@{fontfile}-webfont.eot?#iefix") format("embedded-opentype"),
         url("@{fontfile}-webfont.woff") format("woff"),
         url("@{fontfile}-webfont.ttf") format("truetype"),
         url("@{fontfile}-webfont.svg#@{fontname}") format("svg");
    font-weight: normal;
    font-style: normal;
  }

    //  .fontFace(ZendaRegular, zenda-webfont);


//  .gradient

  .gradient(@arguments){  

      //  Local config for disabling properties

      @mozLocal: true; //  Firefox 4+ 
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @operaLocal: true; // Opera 10.5+
      @w3cLocal: true; // Unprefixed W3C syntax

      /* The magic */
      
      @gradientMoz: ~`(function(){ var $source = "@{arguments}"; var exist = null; var gradientSteps = $source.split(/,(?=\s*(?:linear|radial))/g); var gradientStepsLength = gradientSteps.length; var toTop = /to\s*top/; var toRight = /to\s*right/; var toBottom = /to\s*bottom/; var toLeft = /to\s*left/; var angle = /\d*deg/; for (var i = 0; i< gradientStepsLength; i++) { if ( /linear/.test(gradientSteps[i])) { gradientSteps[i] = gradientSteps[i].replace(/linear-gradient/, "-moz-linear-gradient"); if ( toTop.test(gradientSteps[i]) ) { gradientSteps[i] = gradientSteps[i].replace(toTop, "bottom"); } else if ( toRight.test(gradientSteps[i]) ) { gradientSteps[i] = gradientSteps[i].replace(toRight, "left"); } else if ( toBottom.test(gradientSteps[i]) ) { gradientSteps[i] = gradientSteps[i].replace(toBottom, "top"); } else if ( toLeft.test(gradientSteps[i]) ) { gradientSteps[i] = gradientSteps[i].replace(toLeft, "right" );} else if ( angle.test(gradientSteps[i]) ) { var newAngle = gradientSteps[i].match(/\d*deg/); newAngle = (parseInt(newAngle) - 90) * -1 + "deg"; gradientSteps[i] = gradientSteps[i].replace(angle, newAngle); } } else{ gradientSteps[i] = gradientSteps[i].replace(/radial-gradient/, "-moz-radial-gradient").replace(/,\s* \d*(px|%) \d*(px|%)/,", circle");   }; try { "".trim(); exist = true; } catch(e) { exist = false; } if ( exist ) {  gradientSteps[i] = gradientSteps[i].trim(); } } return gradientSteps; }())`;
      @gradientOldWebkit: ~`(function(){ var $source = "@{arguments}"; var exist = null; var gradientSteps = $source.split(/,(?=\s*(?:linear|radial))/g); var gradientStepsLength = gradientSteps.length; var top = /top/; var right = /right/; var bottom = /bottom/; var left = /left/; var toTop = /to\s*top/; var toRight = /to\s*right/; var toBottom = /to\s*bottom/; var toLeft = /to\s*left/; var diagonal1 = /45deg/; var diagonal2 = /-45deg/ ;var angle = /\d*deg/;  for (var i = 0; i< gradientStepsLength; i++) { if (/linear/.test(gradientSteps[i])) { gradientSteps[i] = gradientSteps[i].replace(/linear-gradient\s*\(/, "-webkit-gradient(linear, "); if (top.test(gradientSteps[i]) || toBottom.test(gradientSteps[i])) { var substitute = gradientSteps[i].match(top) ? top : toBottom; gradientSteps[i] = gradientSteps[i].replace(substitute, "left top, left bottom");} else if ( right.test(gradientSteps[i]) || toLeft.test(gradientSteps[i]) ) { var substitute = gradientSteps[i].match(right) ? right : toLeft; gradientSteps[i] = gradientSteps[i].replace(substitute, "right top, left top"); } else if( bottom.test(gradientSteps[i]) || toTop.test(gradientSteps[i])) { var substitute = gradientSteps[i].match(bottom) ? bottom : toTop; gradientSteps[i] = gradientSteps[i].replace(substitute, "left bottom, left top"); } else if ( left.test(gradientSteps[i]) || toRight.test(gradientSteps[i])) { var substitute = gradientSteps[i].match(left) ? left : toRight; gradientSteps[i] = gradientSteps[i].replace(substitute, "left top, right top"); } else if ( diagonal1.test(gradientSteps[i]) ) { gradientSteps[i] = gradientSteps[i].replace(diagonal1, "left bottom, right top"); } else if ( diagonal2.test(gradientSteps[i]) ) { gradientSteps[i] = gradientSteps[i].replace(diagonal2, "left top, right bottom"); } else { gradientSteps[i].replace(angle, "left top, left bottom");}} var syntax = gradientSteps.toString(); var rgbaArray = syntax.match(/rgba?\(\d+,\s*\d+,\s*\d+,\s*(?:0|1|\.\d+|0\.\d+)\)\s*\d*%*/g) || 0; var hslaArray = syntax.match(/hsla?\(\d+,\s*\d+%,\s*\d+%,\s*(?:0|1|\.\d+|0\.\d+)\)\s*\d*%*/g) || 0; var rgbaArraySugar = []; var hslaArraySugar = []; for (var j = 0; j < rgbaArray.length; j++) { rgbaArraySugar[j] = rgbaArray[j].replace(/,/g,"--");} for(var n = 0; n < hslaArray.length; n++) { hslaArraySugar[n] = hslaArray[n].replace(/,/g,"--"); } for(var k = 0; k < rgbaArray.length; k++) { syntax = syntax.replace(rgbaArray[k],rgbaArraySugar[k]); } for(var o = 0; o < hslaArray.length; o++) { syntax = syntax.replace(hslaArray[o],hslaArraySugar[o]);} syntax = syntax.substring(0, syntax.length - 1); var gradientArray = syntax.split(","); for( var m = 0; m < gradientArray.length; m++ ) { gradientArray[m] = gradientArray[m].replace(/(#\w{3,6})\s*(\d*%*)/g, "color-stop($2,$1)").replace(/(rgba?\(\d+--\s*\d+--\s*\d+--\s*(?:0|1|\.\d+|0\.\d+)\))\s*(\d*%)*/g, "color-stop($2,$1)").replace(/(hsla?\(\d+--\s*\d+%--\s*\d+%--\s*(?:0|1|\.\d+|0\.\d+)\))\s*(\d*%)*/g, "color-stop($2,$1)").replace(/--/g,",").replace(/((?:aqua|black|blue|fuchsia|gray|grey|green|lime|maroon|navy|olive|purple|red|silver|teal|white|yellow))\s*(\d*%)*/g, "color-stop($2,$1)");  try { "".trim(); exist = true; } catch(e) { exist = false; } if ( exist ) {  gradientArray[m] = gradientArray[m].trim(); } }  } gradientArray = gradientArray.join(",").replace(/radial-gradient\(.*?color/g, "-webkit-gradient(radial, center center, 0px, center center, 100%, color"); return gradientArray; }())`;
      @gradientWebkit: ~`(function(){ var $source = "@{arguments}"; var exist = null; var gradientSteps = $source.split(/,(?=\s*(?:linear|radial))/g); var gradientStepsLength = gradientSteps.length; var toTop = /to\s*top/; var toRight = /to\s*right/; var toBottom = /to\s*bottom/; var toLeft = /to\s*left/; var angle = /\d*deg/; for (var i = 0; i< gradientStepsLength; i++) { if ( /linear/.test(gradientSteps[i])) { gradientSteps[i] = gradientSteps[i].replace(/linear-gradient/, "-webkit-linear-gradient"); if ( toTop.test(gradientSteps[i]) ) { gradientSteps[i] = gradientSteps[i].replace(toTop, "bottom"); } else if ( toRight.test(gradientSteps[i]) ) { gradientSteps[i] = gradientSteps[i].replace(toRight, "left"); } else if ( toBottom.test(gradientSteps[i]) ) { gradientSteps[i] = gradientSteps[i].replace(toBottom, "top"); } else if ( toLeft.test(gradientSteps[i]) ) { gradientSteps[i] = gradientSteps[i].replace(toLeft, "right" );} else if ( angle.test(gradientSteps[i]) ) { var newAngle = gradientSteps[i].match(/\d*deg/); newAngle = (parseInt(newAngle) - 90) * -1 + "deg"; gradientSteps[i] = gradientSteps[i].replace(angle, newAngle); } } else{ gradientSteps[i] = gradientSteps[i].replace(/radial-gradient/, "-webkit-radial-gradient");   }; try { "".trim(); exist = true; } catch(e) { exist = false; } if ( exist ) {  gradientSteps[i] = gradientSteps[i].trim(); } } return gradientSteps; }())`;
      @gradientOpera: ~`(function(){ var $source = "@{arguments}"; var exist = null; var gradientSteps = $source.split(/,(?=\s*(?:linear|radial))/g); var gradientStepsLength = gradientSteps.length; var toTop = /to\s*top/; var toRight = /to\s*right/; var toBottom = /to\s*bottom/; var toLeft = /to\s*left/; var angle = /\d*deg/; for (var i = 0; i< gradientStepsLength; i++) { if ( /linear/.test(gradientSteps[i])) { gradientSteps[i] = gradientSteps[i].replace(/linear-gradient/, "-o-linear-gradient"); if ( toTop.test(gradientSteps[i]) ) { gradientSteps[i] = gradientSteps[i].replace(toTop, "bottom"); } else if ( toRight.test(gradientSteps[i]) ) { gradientSteps[i] = gradientSteps[i].replace(toRight, "left"); } else if ( toBottom.test(gradientSteps[i]) ) { gradientSteps[i] = gradientSteps[i].replace(toBottom, "top"); } else if ( toLeft.test(gradientSteps[i]) ) { gradientSteps[i] = gradientSteps[i].replace(toLeft, "right" );} else if ( angle.test(gradientSteps[i]) ) { var newAngle = gradientSteps[i].match(/\d*deg/); newAngle = (parseInt(newAngle) - 90) * -1 + "deg"; gradientSteps[i] = gradientSteps[i].replace(angle, newAngle); } } else{ gradientSteps[i] = gradientSteps[i].replace(/radial-gradient/, "-o-radial-gradient");   }; try { "".trim(); exist = true; } catch(e) { exist = false; } if ( exist ) {  gradientSteps[i] = gradientSteps[i].trim(); } } return gradientSteps; }())`;
      @gradientW3C: ~`(function(){ var $source = "@{arguments}"; var exist = null; var gradientSteps = $source.split(/,(?=\s*(?:linear|radial))/g); var gradientStepsLength = gradientSteps.length; for (var i = 0; i< gradientStepsLength; i++) { try { "".trim(); exist = true; } catch(e) { exist = false; } if ( exist ) {  gradientSteps[i] = gradientSteps[i].trim(); } } return gradientSteps; }())`; 

      .result(@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { background-image: @arguments; }
      .result(@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@gradientMoz, @mozSignal, @moz, @mozLocal);
      // --  this comment must be here because of LESS bug 
      .result(@gradientOldWebkit, @webkitSignal, @webkit, @webkitLocal);
      // --
      .result(@gradientWebkit, @webkitSignal, @webkit, @webkitLocal);
      // --
      .result(@gradientOpera, @operaSignal, @opera, @operaLocal);
      // --
      .result(@gradientW3C, @w3cSignal, @w3c, @w3cLocal); 

}

  .gradient(~"radial-gradient(center, ellipse cover, hsla(212,67%,36%,1) 0%,hsla(207,69%,51%,1) 50%,hsla(208,73%,46%,1) 60%,hsla(206,70%,70%,1) 100%);");


//  .opacity

  .opacity(@arguments:1){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-opacity: @arguments;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-opacity: @arguments;}
        .inception (@signal, @arguments) when (@signal = 5) { opacity: @arguments;}
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);  
  }

    //  .opacity(.5);


//  .perspective

  .perspective(@arguments:none){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-perspective: @arguments;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-perspective: @arguments;}
        .inception (@signal, @arguments) when (@signal = 5) { perspective: @arguments;}
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);  
  }

    //  .perspective(350px);


//  .size

  .size(@square){
    width: @square;
    height: @square;
  }

  .size(@width, @height){
    width: @width;
    height: @height;
  }

    //  .size(10px);  //  render width:10px; height:10px;
    //  .size(10px, 20px);  //  render width:10px; height: 20px;


//  .transform

  .transform(@arguments:none){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  
      @operaLocal: true; // Opera 10.5+
      @msLocal: true;  // IE 10+

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-transform: @arguments;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-transform: @arguments;}
        .inception (@signal, @arguments) when (@signal = 3) { -o-transform: @arguments;}
        .inception (@signal, @arguments) when (@signal = 4) { -ms-transform: @arguments;}
        .inception (@signal, @arguments) when (@signal = 5) { transform: @arguments;}
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @operaSignal, @opera, @operaLocal);
      // --
      .result(@arguments, @msSignal, @ms, @msLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);
  }

    //  .transform(~"scale(.5) translate(10px, 20px)");


//  .transformOrigin

  .transformOrigin(@arguments:50% 50% 0){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  
      @operaLocal: true; // Opera 10.5+
      @msLocal: true;  // IE 10+

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-transform-origin: @arguments;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-transform-origin: @arguments;}
        .inception (@signal, @arguments) when (@signal = 3) { -o-transform-origin: @arguments;}
        .inception (@signal, @arguments) when (@signal = 4) { -ms-transform-origin: @arguments;}
        .inception (@signal, @arguments) when (@signal = 5) { transform-origin: @arguments;}
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @operaSignal, @opera, @operaLocal);
      // --
      .result(@arguments, @msSignal, @ms, @msLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);
  }

    //  .transformOrigin(20% 40%);


//  .transformStyle

  .transformStyle(@arguments:flat){

      //  Local config for disabling properties

      @w3cLocal: true; // Unprefixed W3C syntax
      @webkitLocal: true; // Chrome 7+, Safari 5+, iOS5, Android
      @mozLocal: true; //  Firefox 4+  
      @msLocal: true;  // IE 10+

      .result (@arguments, @signal, @boolean, @localBoolean) when (@boolean = true) and (@localBoolean = true) { 
        .inception (@signal, @arguments) when (@signal = 1) { -webkit-transform-origin: @arguments;}
        .inception (@signal, @arguments) when (@signal = 2) { -moz-transform-origin: @arguments;}
        .inception (@signal, @arguments) when (@signal = 4) { -ms-transform-origin: @arguments;}
        .inception (@signal, @arguments) when (@signal = 5) { transform-origin: @arguments;}
        .inception (@signal, @arguments) when (@signal > 5),(@signal < 1) { error: "Signal is out of range"; }
        .inception(@signal, @arguments);
      }
      .result (@arguments, @signal, @boolean, @localBoolean) when not (@boolean = true), not (@localBoolean = true) { }

      .result(@arguments, @webkitSignal, @webkit, @webkitLocal);
      // --  this comment must be here because of LESS bug 
      .result(@arguments, @mozSignal, @moz, @mozLocal);
      // --
      .result(@arguments, @msSignal, @ms, @msLocal);
      // --
      .result(@arguments, @w3cSignal, @w3c, @w3cLocal);
  }

    //  .transformStyle(preserve-3d);
