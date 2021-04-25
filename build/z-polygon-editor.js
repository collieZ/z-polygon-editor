!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).ZMark=t()}(this,(function(){"use strict";var e=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();var t=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.observerListeners={},this.observerToken=0}return e(t,[{key:"publish",value:function(e){if(!e||!this.observerListeners[e])return!1;for(var t=this.observerListeners[e],i=arguments.length,n=Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];for(var s=0;s<t.length;s++)t[s].context?t[s].fn.apply(t[s].context,n):t[s].fn.apply(t[s].fn,n)}},{key:"subscribe",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return this.observerListeners[e]||(this.observerListeners[e]=[]),this.observerToken++,this.observerListeners[e].push({fn:t,context:i,token:this.observerToken}),this.observerToken}},{key:"unsubscribe",value:function(e){if(!e)return!1;for(var t in this.observerListeners)if(this.observerListeners.hasOwnProperty(t))for(var i=0;i<this.observerListeners[t].length;i++)this.observerListeners[t][i].token===e&&this.observerListeners[t].splice(i,1)}},{key:"clearTopic",value:function(e){if(!e)return!1;for(var t in this.observerListeners)this.observerListeners.hasOwnProperty(t)&&t===e&&delete this.observerListeners[t]}},{key:"clearAll",value:function(){this.observerListeners={},this.observerToken=0}}]),t}();function i(e,t,i,n){var r,s=[];if(e===i)for(var o=Math.abs(n-t),a=Math.min(t,n),h=0;h<=o;h++)s.push([e,a+h]);else{var l,u;u=0-1*t-(l=(t-n)/(i-e))*e;for(var c=Math.abs(i-e),v=Math.min(e,i),f=0;f<=c;f++)s.push([v+f,(r=v+f,(0-u-l*r)/1)])}return s}function n(e,t,i,n){return Math.sqrt(Math.pow(e-i,2)+Math.pow(t-n,2))}var r={checkLineSegmentCross:function(e,t,i,n){var r=!1,s=[t.x-e.x,t.y-e.y],o=[i.x-e.x,i.y-e.y],a=[n.x-e.x,n.y-e.y],h=s[0]*o[1]-s[1]*o[0],l=s[0]*a[1]-s[1]*a[0],u=[i.x-n.x,i.y-n.y],c=[e.x-n.x,e.y-n.y],v=[t.x-n.x,t.y-n.y];return h*l<0&&(u[0]*c[1]-u[1]*c[0])*(u[0]*v[1]-u[1]*v[0])<0&&(r=!0),r},loadImage:function(e){return new Promise((function(t,i){var n=new Image;n.onload=function(){t(n)},n.onerror=function(e){i(e)},n.src=e}))},getTwoPointDistance:n,getLinePointYByX:function(e,t,i,n,r){return e===i?Math.min(t,n):(o=0-1*t-(s=(t-n)/(i-e))*e,function(e){return(0-o-s*e)/1}(r));var s,o},getLineAllPoint:i,getLinePointDistance:function(e,t,i,n,r,s){return e===i?Math.abs(r-e):(a=0-1*t-(o=(t-n)/(i-e))*e,Math.abs((o*r+1*s+a)/Math.sqrt(o*o+1)));var o,a},getAngle:function(e,t,i,n){var r=180*Math.atan2(n-t,i-e)/Math.PI;return r>0?r-360:r},getNearestPointFromLine:function(e,t,r,s,o,a){var h=i(e,t,r,s),l=1/0,u=null;return h.forEach((function(e){var t=n(e[0],e[1],o,a);t<l&&(l=t,u=e)})),u},noop:function(e,t,i){}},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var h={lineWidth:3,strokeColor:"rgba(0, 136, 255, 1)",lineJoin:"round",frontLineWidth:3,frontStrokeColor:"rgba(0, 136, 255, 1)",frontLineJoin:"round",dashOffset:[5,10]},l="rgba(0, 136, 255, 0.5)",u={lineWidth:3,strokeColor:"rgba(0, 136, 255, 1)",fillColor:"rgba(0, 136, 255, 0.5)"},c={showPoint:!0,pointType:"square",pointWidth:3,lineType:"line",isDash:!1},v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e),this.ctx=t,this.opt=s({},c,i),this.data=i.data||null,this.strokeStyle=i.strokeStyle?s({},h,i.strokeStyle):h,this.fillColor=i.fillColor||l,this.pointStyle=i.pointStyle?s({},u,i.pointStyle):u,this.pointArr=i.pointArr||[],this.updatePointFn=i.updatePoint,this.isClosePath=!1,this.isEditing=!1,this.isDragging=!1,this.dragPointIndex=-1,this.dragCachePointArr=[],this.hoverActive=!1,this.area=i.area||!1,this.areaToPointPos=null,this.enableAddPoint=i.enableAddPoint||!1}return o(e,[{key:"enable",value:function(){this.isEditing=!0,this.insertFictitiousPoints()}},{key:"disable",value:function(){this.isEditing=!1,this.removeFictitiousPoints()}},{key:"getTruePointArr",value:function(){return this.pointArr.filter((function(e){return!e.fictitious}))}},{key:"getPointLength",value:function(){return this.getTruePointArr().length}},{key:"pushPoint",value:function(e,t){this.isEditing&&!this.isClosePath&&this.pointArr.push({x:e,y:t})}},{key:"removePoint",value:function(e){this.pointArr[e].fictitious||(this.pointArr.splice(e,1),this.removeFictitiousPoints(),this.insertFictitiousPoints())}},{key:"areaToPoint",value:function(e,t){this.areaToPointPos={x:e,y:t}}},{key:"render",value:function(){(this.isClosePath||this.area)&&this.renderArea(),"custom"===this.opt.lineType?this.opt.customRenderLine&&this.opt.customRenderLine(this):"borderLine"===this.opt.lineType?(this.renderLines(this.strokeStyle),this.renderLines(s({},this.strokeStyle,{lineWidth:this.strokeStyle.frontLineWidth,strokeColor:this.strokeStyle.frontStrokeColor,lineJoin:this.strokeStyle.frontLineJoin}))):this.renderLines(this.strokeStyle),this.renderPoints()}},{key:"renderArea",value:function(){this.ctx.save(),this.ctx.fillStyle=this.fillColor,this.ctx.beginPath();for(var e=this.pointArr.concat(this.area&&this.areaToPointPos?[this.areaToPointPos]:[]),t=0;t<e.length;t++){var i=e[t].x,n=e[t].y;0===t?this.ctx.moveTo(i,n):this.ctx.lineTo(i,n)}this.ctx.closePath(),this.ctx.fill(),this.ctx.restore()}},{key:"renderLines",value:function(e,t){var i=e.lineWidth,n=e.strokeColor,s=e.lineJoin,o=e.dashOffset;this.ctx.save(),this.ctx.lineWidth=i,this.ctx.strokeStyle=n,this.ctx.lineJoin=s,this.ctx.beginPath(),this.opt.isDash?this.ctx.setLineDash(o):r.noop();for(var a=this.pointArr.concat(this.area&&this.areaToPointPos?[this.areaToPointPos]:[]),h=0;h<a.length;h++){var l=a[h].x,u=a[h].y;0===h?this.ctx.moveTo(l,u):this.ctx.lineTo(l,u)}(this.isClosePath||this.area)&&this.ctx.closePath(),t||this.ctx.stroke(),this.ctx.restore()}},{key:"renderPoints",value:function(e,t){for(var i=0;i<this.pointArr.length;i++){this.ctx.beginPath();var n=this.pointArr[i].x,r=this.pointArr[i].y;(this.isEditing||e||this.hoverActive)&&(this.drawPoint(n,r,e,!1,this.pointArr[i].fictitious),t&&t(i))}}},{key:"insertFictitiousPoints",value:function(){if(this.isEditing&&this.isClosePath&&this.enableAddPoint){this.removeFictitiousPoints();for(var e=[],t=this.pointArr,i=t.length,n=0;n<i-1;n++){var r=t[n],s=t[n+1];e.push({x:(r.x+s.x)/2,y:(r.y+s.y)/2,fictitious:!0})}e.push({x:(t[i-1].x+t[0].x)/2,y:(t[i-1].y+t[0].y)/2,fictitious:!0});for(var o=[],a=0;a<this.pointArr.length;a++)o.push(this.pointArr[a]),o.push(e.shift());this.pointArr=o}}},{key:"removeFictitiousPoints",value:function(){this.pointArr=this.getTruePointArr()}},{key:"drawPoint",value:function(e,t,i,n,r){var s=this.opt,o=s.customRenderPoint,a=s.showPoint,h=s.pointType,l=s.pointWidth;if(n&&this.ctx.beginPath(),o)o(this.ctx,e,t,i,this.pointStyle);else{switch(this.ctx.save(),this.ctx.lineWidth=this.pointStyle.lineWidth,this.ctx.strokeStyle=this.pointStyle.strokeColor,this.ctx.fillStyle=this.pointStyle.fillColor,r&&(this.ctx.strokeStyle=this.pointStyle.fillColor,this.ctx.fillStyle=this.pointStyle.strokeColor),h){case"square":this.ctx.rect(e-l,t-l,2*l,2*l);break;case"circle":this.ctx.arc(e,t,2*l,0,2*Math.PI)}i||a&&(this.ctx.fill(),this.ctx.stroke()),this.ctx.restore()}}},{key:"checkInPath",value:function(e,t){return this.renderLines(this.strokeStyle,!0),this.ctx.isPointInPath(e,t)}},{key:"checkInPoints",value:function(e,t){var i=this,n=-1;return this.renderPoints(!0,(function(r){i.ctx.isPointInPath(e,t)&&(n=r)})),n}},{key:"closePath",value:function(){this.areaToPointPos=null,this.isClosePath=!0}},{key:"enableDrag",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;this.isDragging=!0,this.dragPointIndex=e,this.dragCachePointArr=JSON.parse(JSON.stringify(this.pointArr))}},{key:"getTruePointIndex",value:function(e){if(-1===e||this.pointArr[e].fictitious)return e;for(var t=0,i=0;i<e;i++)this.pointArr[i].fictitious&&t++;return e-t}},{key:"disableDrag",value:function(){this.isDragging=!1,this.dragPointIndex=-1,this.dragCachePointArr=[],this.insertFictitiousPoints()}},{key:"dragPoint",value:function(e,t){this.isDragging&&-1!==this.dragPointIndex&&(this.pointArr[this.dragPointIndex].fictitious&&delete this.pointArr[this.dragPointIndex].fictitious,this.dragPointIndex=this.getTruePointIndex(this.dragPointIndex),this.removeFictitiousPoints(),this.updatePointFn?this.updatePointFn(this,e,t):this.pointArr.splice(this.dragPointIndex,1,s({},this.pointArr[this.dragPointIndex],{x:e,y:t})))}},{key:"dragAll",value:function(e,t){this.isDragging&&(this.pointArr=this.dragCachePointArr.map((function(i){return s({},i,{x:i.x+e,y:i.y+t})})))}},{key:"enableHoverActive",value:function(){this.hoverActive=!0}},{key:"disableHoverActive",value:function(){this.hoverActive=!1}},{key:"checkLineSegmentCross",value:function(){if(!this.checkCrossPrevCheck())return!1;for(var e=this.createLineSegments(!0),t=e.length,i=!1,n=0;n<t;n++){var r=e[n];this.checkCrossWithLineSegments(r[0],r[1],!0)&&(i=!0)}return i}},{key:"checkNextLineSegmentCross",value:function(e,t){if(!this.checkCrossPrevCheck())return!1;var i=this.getTruePointArr(),n={x:e,y:t},r=i[i.length-1];return this.checkCrossWithLineSegments(n,r)}},{key:"checkEndLineSegmentCross",value:function(){if(!this.checkCrossPrevCheck())return!1;var e=this.getTruePointArr(),t=e[e.length-1],i=e[0];return this.checkCrossWithLineSegments(t,i)}},{key:"checkCrossWithLineSegments",value:function(e,t,i){for(var n=this.createLineSegments(i),s=!1,o=0;o<n.length;o++){var a=n[o],h=a[0],l=a[1];r.checkLineSegmentCross(h,l,e,t)&&(s=!0)}return s}},{key:"createLineSegments",value:function(e){for(var t=this.getTruePointArr(),i=t.length,n=[],r=0;r<i-1;r++)n.push([t[r],t[r+1]]);return e&&n.push([t[i-1],t[0]]),n}},{key:"checkCrossPrevCheck",value:function(){return!(this.getTruePointArr().length<=2)}},{key:"getPintNearestLine",value:function(e,t){var i=this.createLineSegments(this.isClosePath);if(i.length<=0)return null;-1!==this.dragPointIndex&&(0===this.dragPointIndex?(i.splice(0,1),i.splice(-1,1)):i.splice(this.dragPointIndex-1,2));for(var n=1/0,s=void 0,o=0;o<i.length;o++){var a=i[o],h=a[0],l=a[1],u=r.getLinePointDistance(h.x,h.y,l.x,l.y,e,t);u<n&&(n=u,s=a)}return[n,s]}}]),e}(),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};function d(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}var g={value:[],max:-1,hoverActive:!1,readonly:!1,single:!1,noCrossing:!1,dbClickRemovePoint:!1,area:!1,adsorbent:!0,adsorbentNum:5,adsorbentLine:!0,dbClickActive:!1,singleClickComplete:!0,enableAddPoint:!1};var p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},y=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var k={dbClickTime:200},P=function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(b(this,e),!i.el)throw new Error("el属性为空");if(this.opt=p({},k,i),this.el="string"==typeof i.el?document.querySelector(i.el):i.el,!this.el)throw new Error("容器元素获取失败");this.elRectInfo=null,this.canvasEle=null,this.canvasEleRectInfo=null,this.ctx=null,this.clickTimer=null,this.observer=new t,this.mousedownPos={x:0,y:0},this.mouseupPos={x:0,y:0},this.lastClickTime=0,this.bindEventCallback(),this.init(),this.usePlugins()}return y(e,null,[{key:"use",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;if(t){if(t.used)return this;t.used=!0,-1===i?e.pluginList.push(t):e.pluginList.splice(i,0,t)}}}]),y(e,[{key:"usePlugins",value:function(){var t=this,i=0,n=e.pluginList.length;!function s(){i>=n||(0,e.pluginList[i])(t,r).then((function(){i++,s()}))}()}},{key:"on",value:function(e,t){return this.observer.subscribe(e,t)}},{key:"off",value:function(e){this.observer.unsubscribe(e)}},{key:"init",value:function(){this.createElement(),this.ctx=this.canvasEle.getContext("2d"),this.bindEvent()}},{key:"destroy",value:function(){this.unbindEvent(),this.el.removeChild(this.canvasEle),this.observer.publish("DESTORY"),this.observer.clearAll()}},{key:"createElement",value:function(){this.elRectInfo=this.el.getBoundingClientRect();var e=this.elRectInfo,t=e.width,i=e.height;this.canvasEle=document.createElement("canvas"),this.canvasEle.width=t,this.canvasEle.height=i,this.canvasEleRectInfo={width:t,height:i},this.el.appendChild(this.canvasEle)}},{key:"bindEventCallback",value:function(){this.onclick=this.onclick.bind(this),this.onmousedown=this.onmousedown.bind(this),this.onmousemove=this.onmousemove.bind(this),this.onmouseup=this.onmouseup.bind(this),this.onmouseenter=this.onmouseenter.bind(this),this.onmouseleave=this.onmouseleave.bind(this),this.onWindowClick=this.onWindowClick.bind(this)}},{key:"bindEvent",value:function(){this.canvasEle.addEventListener("click",this.onclick),this.canvasEle.addEventListener("mousedown",this.onmousedown),this.canvasEle.addEventListener("mousemove",this.onmousemove),window.addEventListener("mouseup",this.onmouseup),this.canvasEle.addEventListener("mouseenter",this.onmouseenter),this.canvasEle.addEventListener("mouseleave",this.onmouseleave),window.addEventListener("click",this.onWindowClick)}},{key:"unbindEvent",value:function(){this.canvasEle.removeEventListener("click",this.onclick),this.canvasEle.removeEventListener("mousedown",this.onmousedown),this.canvasEle.removeEventListener("mousemove",this.onmousemove),window.removeEventListener("mouseup",this.onmouseup),this.canvasEle.removeEventListener("mouseenter",this.onmouseenter),this.canvasEle.removeEventListener("mouseleave",this.onmouseleave),window.removeEventListener("click",this.onWindowClick)}},{key:"onclick",value:function(e){var t=this;this.clickTimer&&(clearTimeout(this.clickTimer),this.clickTimer=null),this.clickTimer=setTimeout((function(){t.observer.publish("CLICK",e)}),this.opt.dbClickTime),Date.now()-this.lastClickTime<=this.opt.dbClickTime&&(clearTimeout(this.clickTimer),this.clickTimer=null,this.lastClickTime=0,this.observer.publish("DOUBLE-CLICK",e)),this.lastClickTime=Date.now()}},{key:"onmousedown",value:function(e){this.mousedownPos={x:e.clientX,y:e.clientY},this.observer.publish("MOUSEDOWN",e)}},{key:"onmousemove",value:function(e){this.observer.publish("MOUSEMOVE",e)}},{key:"onmouseup",value:function(e){this.mouseupPos={x:e.clientX,y:e.clientY},this.observer.publish("MOUSEUP",e)}},{key:"onmouseenter",value:function(e){this.observer.publish("MOUSEENTER",e)}},{key:"onmouseleave",value:function(e){this.observer.publish("MOUSELEAVE",e)}},{key:"onWindowClick",value:function(e){this.observer.publish("WINDOW-CLICK",e)}},{key:"clearCanvas",value:function(){this.ctx.clearRect(0,0,this.canvasEle.width,this.canvasEle.height)}},{key:"toCanvasPos",value:function(e){var t=e.clientX,i=e.clientY,n=this.canvasEle.getBoundingClientRect();return{x:t-n.left,y:i-n.top}}}]),e}();return P.pluginList=[],P.use((function(e,t){var i=null,n=new Promise((function(e){i=e})),r=f({},g,e.opt);r.dbClickActive&&(e.opt.cursorTips?e.opt.cursorTips.HOVER||(e.opt.cursorTips.HOVER="双击激活该区域并进入编辑状态"):e.opt.cursorTips={HOVER:"双击激活该区域并进入编辑状态"});var s=[],o=null,a={x:0,y:0},h={x:0,y:0},l=r.readonly,u=!1,c=null,p=null,y=0,b=null,k=[0,0],P={x:0,y:0},m=!1,x=E();function E(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new v(e.ctx,f({id:y++},r,c,t,{area:r.area}))}function C(){e.clearCanvas(),r.single&&(o||u)?o&&o.render():s.forEach((function(e){e.render()})),b&&x.drawPoint(b[0],b[1],!1,!0)}function L(){s.forEach((function(e){e.disable()}))}function A(){s.forEach((function(e){e.disableHoverActive()}))}function I(e,t){for(var i=s.length-1;i>=0;i--){var n=s[i];if(n.checkInPath(e,t)||-1!==n.checkInPoints(e,t))return n}}function T(e,t){for(var i=[],n=s.length-1;n>=0;n--){var r=s[n];(r.checkInPath(e,t)||-1!==r.checkInPoints(e,t))&&i.push(r)}return i}function w(){return o&&!o.isClosePath}function S(){A(),L(),M(null),C()}function O(t){return!l&&(u=t,e.observer.publish("IS-CREATE-MARKING-CHANGE",t),!0)}function M(t){return!l&&(o=t,e.observer.publish("CURRENT-MARK-ITEM-CHANGE",t),!0)}function N(e,i){if(!r.adsorbent)return[e,i];var n=1/0,a=e,h=i,l=null;return s.forEach((function(s){if(s.pointArr.forEach((function(u,c){if(!o||s!==o||s.dragPointIndex!==c){var v=t.getTwoPointDistance(u.x,u.y,e,i);v<=r.adsorbentNum&&v<n&&(n=v,a=u.x,h=u.y,l=[a,h])}})),r.adsorbentLine){var u=s.getPintNearestLine(e,i);if(u&&u[0]<=r.adsorbentNum){var c=u[1],v=c[0],f=c[1],d=Math.min(v.x,f.x),g=Math.max(v.x,f.x);if(e>=d&&e<=g){var p=t.getNearestPointFromLine(v.x,v.y,f.x,f.y,e,i);a=p[0],h=p[1],l=[a,h]}}}})),b=l,[a,h]}return r.value.length>0&&(r.value.forEach((function(t){var i=new v(e.ctx,f({id:y++},r,t,{pointArr:t.pointArr.map((function(t){return{x:t.x*e.canvasEleRectInfo.width,y:t.y*e.canvasEleRectInfo.height}}))}));i.closePath(),s.push(i)})),C()),e.on("CLICK",(function(t){if(!l)if(m)m=!1;else{var i=e.toCanvasPos(t),n=i.x,a=i.y,h=null;if(u){var c=n,v=a;if(b&&(c=b[0],v=b[1],b=null),o)if(r.noCrossing)o.checkNextLineSegmentCross(c,v)?e.observer.publish("LINE-CROSS",o):o.pushPoint(c,v);else o.pushPoint(c,v);else-1===r.max||s.length<r.max?(L(),M(E()),o.enable(),o.pushPoint(c,v),s.push(o)):(e.observer.publish("COUNT-LIMIT",o),O(!1))}else(h=I(n,a))?r.dbClickActive||T(n,a).includes(o)||(!r.single||r.single&&!o)&&(L(),h.enable(),M(h)):!r.single&&r.singleClickComplete&&S();C()}})),e.on("DOUBLE-CLICK",(function(t){if(!l){var i=e.toCanvasPos(t),n=i.x,s=i.y,a=!0,h=I(n,s),c=!(!h||!o)&&h===o;if(o){var v=o.checkInPoints(n,s);r.dbClickRemovePoint&&-1!==v?(a=!1,o.getPointLength()>3?(o.removePoint(v),C()):e.observer.publish("NOT-ENOUGH-POINTS-REMOVE",o)):o.getPointLength()<3?(a=!1,e.observer.publish("NOT-ENOUGH-END-POINTS",o)):r.noCrossing&&o.checkEndLineSegmentCross()?(a=!1,e.observer.publish("LINE-CROSS",o)):(u&&e.observer.publish("COMPLETE-CREATE-ITEM",o,t),O(!1),o.closePath(),o.disable(),b=null,M(null),C(),e.observer.publish("COMPLETE-EDIT-ITEM",o,t))}r.dbClickActive&&!u&&a&&h&&!c&&(L(),h.enable(),M(h),C())}})),e.on("MOUSEDOWN",(function(t){if(!l){var i=e.toCanvasPos(t),n=i.x,s=i.y;if(o&&o.isEditing&&o.isClosePath){var u=o.checkInPoints(n,s);(o.checkInPath(n,s)||-1!==u)&&(r.noCrossing&&(p=JSON.parse(JSON.stringify(o.pointArr))),a.x=n,a.y=s,h.x=n,h.y=s,o.enableDrag(u))}}})),e.on("MOUSEMOVE",(function(i){if(!l){var n=e.toCanvasPos(i),c=n.x,v=n.y;if(o&&o.isDragging){if(-1!==o.dragPointIndex){var f;(f=o).dragPoint.apply(f,d(N(c,v)))}else{!function(e,i){if(!r.adsorbent)return[e,i];var n=1/0,h=null,l=null;o.pointArr.forEach((function(e){s.forEach((function(i){i!==o&&i.pointArr.forEach((function(i){var r=t.getTwoPointDistance(e.x,e.y,i.x,i.y);r<n&&(n=r,h=e,l=i)}))}))})),n<=r.adsorbentNum&&(k=[l.x-h.x,l.y-h.y],a.x-=k[0],a.y-=k[1])}(),0!==k[0]&&0!==k[1]&&0===P.x&&0===P.y&&(P.x=c,P.y=v),0!==P.x&&0!==P.y&&t.getTwoPointDistance(P.x,P.y,c,v)>r.adsorbentNum&&(k=[0,0],a.x=h.x,a.y=h.y,P.x=0,P.y=0);var g=c-a.x,p=v-a.y;o.dragAll(g,p)}C();var y=o.checkInPoints(c,v);e.observer.publish("HOVER-ITEM",o,o,T(c,v),i,y)}else if(u){var b,m=N(c-a.x,v-a.y);if(r.area&&o)(b=o).areaToPoint.apply(b,d(m));C()}else if(!u){var x=I(c,v);if(!r.hoverActive||o&&!o.isClosePath||(A(),x&&x.enableHoverActive(),C()),x&&x.isClosePath){var E=x.checkInPoints(c,v);e.observer.publish("HOVER-ITEM",x,o,T(c,v),i,E)}}}})),e.on("MOUSEUP",(function(t){l||o&&o.isDragging&&(m=!0,o.disableDrag(),a.x=0,a.y=0,h.x=0,h.y=0,r.noCrossing&&o.checkLineSegmentCross()&&(e.observer.publish("LINE-CROSS",o),o.pointArr=p,p=null),C())})),e._disableAllItemsEdit=L,e._setMarkEditItem=M,e._createNewMarkItem=E,e._setIsCreateMarking=O,e._render=C,e._disableAllItemsHoverActive=A,e._checkInPathItem=I,e._checkInPathAllItems=T,e._getIsCreateIngMarkItem=w,e.getState=function(){return{markItemList:s,curEditingMarkItem:o,isReadonly:l,isCreateMarking:u}},e.getMarkData=function(){return s.map((function(t){var i=t.pointArr.map((function(t){return{x:t.x/e.canvasEleRectInfo.width,y:t.y/e.canvasEleRectInfo.height}}));return{data:t.data,pointArr:i}}))},e.enableEdit=function(){l=!1},e.disableEdit=function(){return!w()&&(S(),l=!0,!0)},e.deleteMarkItem=function(t){if(!t)return!1;var i=s.findIndex((function(e){return e===t}));if(-1!==i){o===t&&M(null);var n=s.splice(i,1);return C(),e.observer.publish("DELETE-MARKING-ITEM",n[0],i),!0}return!1},e.deleteAllMarkItem=function(){s=[],M(null),C(),e.observer.publish("DELETE-ALL-MARKING-ITEM")},e.createMarkItem=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return!w()&&!l&&(S(),c=t,O(!0),r.single&&e.clearCanvas(),!0)},e.exitCreate=function(){if(!u)return!1;if(O(!1),w()){var e=s.findIndex((function(e){return e===o}));s.splice(e,1)}S()},e.reset=S,i(),n})),P}));
//# sourceMappingURL=z-polygon-editor.js.map
