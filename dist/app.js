/*!
 * less-hat-website
 * http://lesshat.com/
 * team@madebysource.com
 * 
 * Copyright 2013 Piffle LLC - All Rights Reserved
 * 
 * Author:
 * Marek Hrabe <marekhrabe@abdoc.net> (http://github.com/marekhrabe)
 * 
 * Build v2.0.0 - 2013-11-01
 */

window.onload=function(){var download=document.getElementById("download"),logo=document.getElementById("logo"),downloaded=!1;download.addEventListener("mouseover",function(){logo.classList.add("arrow")}),download.addEventListener("mouseout",function(){downloaded||logo.classList.remove("arrow")}),download.addEventListener("click",function(){download.classList.add("downloaded"),logo.classList.add("downloaded"),downloaded=!0})};