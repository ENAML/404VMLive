window.onload=function(){var e=["#00ff00","#ffff00","#2d42ff","#882dff","#fff","#ff0000"];var t=function(e){return e[Math.floor(Math.random()*e.length)]};var n=Snap("#svg");Snap.load("../images/VM_Splash02.svg",function(r){var i=r.select("#vm404");var o=r.select("#circle1");var u=r.select("#circle2");var a=r.select("#face");var f=r.selectAll(".facePath");o.animate({fill:"#000"},0);f.forEach(function(n){n.animate({fill:t(e)},600)});var l=setInterval(function(){f.forEach(function(n){n.animate({fill:t(e)},1e3)})},500);n.append(r)})}