// Pixrin versi pertama, oleh Adi Nugraha Y
//
function PixRin(a){function b(a,b,c){a.fillRect(b.x,b.y,c.pixelW,c.pixelH)}function c(a,b,c,d){a.font=d.pixelLabelSize+"px "+d.pixelLabelFont,a.fillStyle=d.pixelLabelColor,a.fillText("("+c.x+","+c.y+")",b.x,d.pixelLabelSize+b.y)}function d(){o.clearRect(0,0,a.canvasW,a.canvasH)}function e(b,c){return 0>b||b>=a.lengthX?(console.error("nilai X diluar batas"),!0):!!(0>c||c>=a.lengthY)&&(console.error("nilai Y diluar batas"),!0)}function f(){return!o&&(console.error("No Context Found"),!0)}function g(){p=0,q=a.canvasH-a.pixelH-a.pixelGap}function h(){a.canvasW=a.lengthX*(a.pixelW+a.pixelGap),a.canvasH=a.lengthY*(a.pixelH+a.pixelGap),n.width=a.canvasW-a.pixelGap,n.height=a.canvasH-a.pixelGap}function i(d,g,h){if(!(f()||e(d,g))){o.fillStyle=h?h:a.pixelColor;var i=p+d*(a.pixelW+a.pixelGap),j=q-g*(a.pixelH+a.pixelGap);"function"==typeof a.pixelRenderer?a.pixelRenderer(o,{x:i,y:j},a):b(o,{x:i,y:j},a),a.pixelLabelEnable&&("function"==typeof a.pixelLabelRenderer?a.pixelLabelRenderer(o,{x:i,y:j},{x:d,y:g},a):c(o,{x:i,y:j},{x:d,y:g},a))}}function j(b,c,d,g,h){if(!(f()||e(b,c)||e(d,g))){o.strokeStyle=h?h:"#f00";var i=Math.round(a.pixelW/2),j=Math.round(a.pixelH/2),k=p+b*(a.pixelW+square_gap)+i,l=q-c*(a.pixelH+square_gap)+j,m=p+d*(a.pixelW+square_gap)+i,n=q-g*(a.pixelH+square_gap)+j;o.moveTo(k,l),o.lineTo(m,n),o.stroke(),o.moveTo(0,0)}}function k(){if(!f()){d();for(var b=0;b<a.lengthY;b++)for(var c=0;c<a.lengthX;c++)i(c,b)}}function l(b,c){if(f()||e(b,c))return!1;var d=a.pixelColor,g=a.pixelLabelColor;return a.pixelColor=a.pixelActiveColor,a.pixelLabelColor=a.pixelLabelActiveColor,i(b,c),a.pixelColor=d,a.pixelLabelColor=g,!0}function m(){for(;0<r.length;){var a=r.pop();i(a.x,a.y)}}if(!(this instanceof PixRin))throw new Error("unable to run, require constructor with argument.");var n,o,p,q,a=Object.assign({target:"body",canvasAuto:!0,canvasW:629,canvasH:630,lengthX:7,lengthY:5,pixelW:51,pixelH:51,pixelGap:1,pixelColor:"#0A1C1F",pixelActiveColor:"#CFDF9F",pixelRenderer:null,pixelLabelEnable:!1,pixelLabelFont:"Consolas",pixelLabelColor:"#CFDF9F",pixelLabelSize:9,pixelLabelActiveColor:"#0A1C1F",pixelLabelRenderer:null},a),r=[];if(n=document.querySelector(a.target),!n)return void console.error("DOM target ["+a.target+"] not found");if(!n.getContext){console.warn("Canvas not found, create it automatically.");var s=document.createElement("canvas");s.width=a.canvasW,s.height=a.canvasH,n.append(s),n=s}o=n.getContext("2d"),this.putPixel=function(a,b){return r.push({x:a,y:b}),l(a,b)},this.clearPixel=function(a,b){i(a,b)},this.clearPixelHistory=function(){m()},this.plotLine=function(a,b,c,d,e){j(a,b,c,d,e)},a.canvasAuto&&h(),g(),k()}
