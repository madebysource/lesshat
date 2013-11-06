### <a name="keyframes"></a> &#8226; keyframes
**Summary:**

The @keyframes CSS at-rule lets authors control the intermediate steps in a CSS animation sequence by establishing keyframes (or waypoints) along the animation sequence that must be reached by certain points during the animation.  
  
LESS CSS isn't great for complicated mixin like this one, so it's little bit tricky.
LESS CSS compiler doesn't allow to have properties in the root. It's better to understand the problem on the example.

    // There is no selector
    color: red;
  
    SyntaxError: properties must be inside selector blocks, they cannot be in the root. 
  
    div { color: red; } // This is correct

Therefore LESS Hat generates **placeholder** selector `lesshat-selector { -lh-property: 0; }` with unknown property, which browsers ignore and after that, there is actually keyframes syntax.  
  
And also because of bad architecture of LESS CSS language, keyframes definition has to be on single line.

**THIS MIXIN MUST BE INTERPOLATED `~''`**

Resources: **[WebPlatform](http://docs.webplatform.org/wiki/css/atrules/@keyframes)**, **[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)**

**Syntax:**

    .keyframes(~'<keyframes-name>, <keyframes-definition>') 

**Tips and tricks:**

  Properties inside `<keyframes-definition>` are automatically prefixed, if it's needed.
  
**Example:**

    .keyframes(~'animationName, 0%{ transform: scale(1.5); color: blue; } 100%{ transform: scale(2); color: red }');
    
    // Result
     lesshat-selector {-lh-property: 0; } 
     @-webkit-keyframes animationName{ 0%{ -webkit-transform: scale(1.5); color: blue; } 100%{ -webkit-transform: scale(2); color: red }}
     @-moz-keyframes animationName{ 0%{ -moz-transform: scale(1.5); color: blue; } 100%{ -moz-transform: scale(2); color: red }}
     @-o-keyframes animationName{ 0%{ -o-transform: scale(1.5); color: blue; } 100%{ -o-transform: scale(2); color: red }}
     @keyframes animationName{ 0%{ transform: scale(1.5); color: blue; } 100%{ transform: scale(2); color: red };} 


