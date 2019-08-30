function _asyncToGenerator(e){return function(){var c=e.apply(this,arguments);return new Promise(function(o,s){return function t(e,n){try{var r=c[e](n),a=r.value}catch(e){return void s(e)}if(!r.done)return Promise.resolve(a).then(function(e){t("next",e)},function(e){t("throw",e)});o(a)}("next")})}}!function(e){"use strict";var l,i=Object.prototype.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},a=t.iterator||"@@iterator",n=t.toStringTag||"@@toStringTag",r="object"==typeof module,o=e.regeneratorRuntime;if(o)r&&(module.exports=o);else{(o=e.regeneratorRuntime=r?module.exports:{}).wrap=c;var x="suspendedStart",p="suspendedYield",h="executing",f="completed",d={},s=g.prototype=u.prototype;y.prototype=s.constructor=g,g.constructor=y,g[n]=y.displayName="GeneratorFunction",o.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},o.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,n in e||(e[n]="GeneratorFunction")),e.prototype=Object.create(s),e},o.awrap=function(e){return new A(e)},w(S.prototype),o.async=function(e,t,n,r){var a=new S(c(e,t,n,r));return o.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},w(s),s[a]=function(){return this},s[n]="Generator",s.toString=function(){return"[object Generator]"},o.keys=function(n){var r=[];for(var e in n)r.push(e);return r.reverse(),function e(){for(;r.length;){var t=r.pop();if(t in n)return e.value=t,e.done=!1,e}return e.done=!0,e}},o.values=m,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=l,this.done=!1,this.delegate=null,this.tryEntries.forEach(v),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=l)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function e(e,t){return o.type="throw",o.arg=n,r.next=e,!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var a=this.tryEntries[t],o=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?this.next=a.finallyLoc:this.complete(o),d},complete:function(e,t){if("throw"===e.type)throw e.arg;"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=e.arg,this.next="end"):"normal"===e.type&&t&&(this.next=t)},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),v(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;v(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:m(e),resultName:t,nextLoc:n},d}}}function c(e,t,n,r){var a=t&&t.prototype instanceof u?t:u,o=Object.create(a.prototype),s=new k(r||[]);return o._invoke=function(s,c,i){var u=x;return function(e,t){if(u===h)throw new Error("Generator is already running");if(u===f){if("throw"===e)throw t;return b()}for(;;){var n=i.delegate;if(n){if("return"===e||"throw"===e&&n.iterator[e]===l){i.delegate=null;var r=n.iterator.return;if(r){var a=P(r,n.iterator,t);if("throw"===a.type){e="throw",t=a.arg;continue}}if("return"===e)continue}var a=P(n.iterator[e],n.iterator,t);if("throw"===a.type){i.delegate=null,e="throw",t=a.arg;continue}e="next",t=l;var o=a.arg;if(!o.done)return u=p,o;i[n.resultName]=o.value,i.next=n.nextLoc,i.delegate=null}if("next"===e)i.sent=i._sent=t;else if("throw"===e){if(u===x)throw u=f,t;i.dispatchException(t)&&(e="next",t=l)}else"return"===e&&i.abrupt("return",t);u=h;var a=P(s,c,i);if("normal"===a.type){u=i.done?f:p;var o={value:a.arg,done:i.done};if(a.arg!==d)return o;i.delegate&&"next"===e&&(t=l)}else"throw"===a.type&&(u=f,e="throw",t=a.arg)}}}(e,n,s),o}function P(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function u(){}function y(){}function g(){}function w(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function A(e){this.arg=e}function S(c){function i(e,t,n,r){var a=P(c[e],c,t);if("throw"!==a.type){var o=a.arg,s=o.value;return s instanceof A?Promise.resolve(s.arg).then(function(e){i("next",e,n,r)},function(e){i("throw",e,n,r)}):Promise.resolve(s).then(function(e){o.value=e,n(o)},r)}r(a.arg)}var t;"object"==typeof process&&process.domain&&(i=process.domain.bind(i)),this._invoke=function(n,r){function e(){return new Promise(function(e,t){i(n,r,e,t)})}return t=t?t.then(e,e):e()}}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function v(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function m(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=l,e.done=!0,e};return r.next=r}}return{next:b}}function b(){return{value:l,done:!0}}}("object"==typeof global?global:"object"==typeof window?window:"object"==typeof self?self:this),function(n){"use strict";n.runAnnotationTest=_asyncToGenerator(regeneratorRuntime.mark(function e(){var he,c,i,u,t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:he=n.PDFNet,c=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r,a,o,s,c,i,u,l,x,p,h,f;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,he.startDeallocateStack();case 3:return console.log("running LowLevelAPI"),e.next=6,t.getPageIterator(1);case 6:return n=e.sent,e.next=9,n.current();case 9:return r=e.sent,e.next=12,r.getAnnots();case 12:if(null==(a=e.sent))return e.next=16,t.createIndirectArray();e.next=22;break;case 16:return a=e.sent,e.next=19,r.getSDFObj();case 19:return o=e.sent,e.next=22,o.put("Annots",a);case 22:return e.next=24,t.createIndirectDict();case 24:return s=e.sent,e.next=27,s.putName("Subtype","Text");case 27:return e.next=29,s.putBool("Open",!0);case 29:return e.next=31,s.putString("Contents","The quick brown fox ate the lazy mouse.");case 31:return e.next=33,s.putRect("Rect",266,116,430,204);case 33:return e.next=35,a.pushBack(s);case 35:return e.next=37,t.createIndirectDict();case 37:return c=e.sent,e.next=40,c.putName("Subtype","Link");case 40:return e.t0=he.Destination,e.next=43,t.getPage(2);case 43:return e.t1=e.sent,e.next=46,e.t0.createFit.call(e.t0,e.t1);case 46:return i=e.sent,e.t2=c,e.next=50,i.getSDFObj();case 50:return e.t3=e.sent,e.next=53,e.t2.put.call(e.t2,"Dest",e.t3);case 53:return e.next=55,c.putRect("Rect",85,705,503,661);case 55:return e.next=57,a.pushBack(c);case 57:return e.next=59,t.createIndirectDict();case 59:return u=e.sent,e.next=62,u.putName("Subtype","Link");case 62:return e.t4=he.Destination,e.next=65,t.getPage(3);case 65:return e.t5=e.sent,e.next=68,e.t4.createFit.call(e.t4,e.t5);case 68:return l=e.sent,e.t6=u,e.next=72,l.getSDFObj();case 72:return e.t7=e.sent,e.next=75,e.t6.put.call(e.t6,"Dest",e.t7);case 75:return e.next=77,u.putRect("Rect",85,638,503,594);case 77:return e.next=79,a.pushBack(u);case 79:return e.next=81,t.getPage(10);case 81:return x=e.sent,e.next=84,he.Destination.createXYZ(x,100,722,10);case 84:return p=e.sent,e.t8=u,e.next=88,p.getSDFObj();case 88:return e.t9=e.sent,e.next=91,e.t8.put.call(e.t8,"Dest",e.t9);case 91:return e.next=93,t.createIndirectDict();case 93:return h=e.sent,e.next=96,h.putName("Subtype","Link");case 96:return e.next=98,h.putRect("Rect",85,570,503,524);case 98:return e.next=100,h.putDict("A");case 100:return f=e.sent,e.next=103,f.putName("S","URI");case 103:return e.next=105,f.putString("URI","http://www.pdftron.com");case 105:return e.next=107,a.pushBack(h);case 107:return console.log("AnnotationLowLevel Done."),e.next=110,he.endDeallocateStack();case 110:e.next=115;break;case 112:e.prev=112,e.t10=e.catch(0),console.log(e.t10);case 115:case"end":return e.stop()}},e,void 0,[[0,112]])}));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r,a,o,s,c,i,u,l,x,p,h,f,d,P,y,g,w,A,S,C,v,k,m,b,L,B,R,_,E,D,F,T;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he.startDeallocateStack();case 2:return e.next=4,t.getPage(1);case 4:return n=e.sent,console.log("Traversing all annotations in the document..."),r=0,e.next=9,t.getPageIterator(1);case 9:a=e.sent;case 11:return e.next=13,a.hasNext();case 13:if(e.sent)return r+=1,console.log("Page "+r+": "),e.next=18,a.current();e.next=119;break;case 18:return o=e.sent,e.next=21,o.getNumAnnots();case 21:s=e.sent,c=0;case 23:if(c<s)return e.next=26,o.getAnnot(c);e.next=115;break;case 26:return i=e.sent,e.next=29,i.isValid();case 29:if(e.sent){e.next=31;break}return e.abrupt("continue",112);case 31:return e.next=33,i.getSDFObj();case 33:return u=e.sent,e.next=36,u.get("Subtype");case 36:return l=e.sent,e.next=39,l.value();case 39:return x=e.sent,e.next=42,x.getName();case 42:return e.t0=e.sent,p="Annot Type: "+e.t0,e.next=46,i.getRect();case 46:return h=e.sent,p+=";  Position: "+h.x1+", "+h.y1+", "+h.x2+", "+h.y2,console.log(p),e.next=51,i.getType();case 51:f=e.sent,e.t1=f,e.next=e.t1===he.Annot.Type.e_Link?55:e.t1===he.Annot.Type.e_Widget?107:e.t1===he.Annot.Type.e_FileAttachment?108:109;break;case 55:return e.next=57,he.LinkAnnot.createFromAnnot(i);case 57:return d=e.sent,e.next=60,d.getAction();case 60:return P=e.sent,e.next=63,P.isValid();case 63:if(e.sent){e.next=65;break}return e.abrupt("continue",112);case 65:return e.next=67,P.getType();case 67:if(e.t2=e.sent,e.t3=he.Action.Type.e_GoTo,e.t2===e.t3)return e.next=72,P.getDest();e.next=87;break;case 72:return y=e.sent,e.next=75,y.isValid();case 75:if(e.sent){e.next=79;break}console.log("  Destination is not valid"),e.next=85;break;case 79:return e.next=81,y.getPage();case 81:return e.next=83,e.sent.getIndex();case 83:g=e.sent,console.log("  Links to: page number "+g+" in this document");case 85:e.next=106;break;case 87:return e.next=89,P.getType();case 89:if(e.t4=e.sent,e.t5=he.Action.Type.e_URI,e.t4===e.t5)return e.next=94,P.getSDFObj();e.next=106;break;case 94:return w=e.sent,e.next=97,w.get("URI");case 97:return A=e.sent,e.next=100,A.value();case 100:return S=e.sent,e.next=103,S.getAsPDFText();case 103:C=e.sent,console.log(" Links to: "+C),A.destroy();case 106:case 107:case 108:case 109:return e.abrupt("break",110);case 110:return e.next=112,l.destroy();case 112:++c,e.next=23;break;case 115:return e.next=117,a.next();case 117:e.next=11;break;case 119:return e.next=121,t.getPage(1);case 121:return n=e.sent,e.next=124,he.Action.createURI(t,"http://www.pdftron.com");case 124:return v=e.sent,k=new he.Rect(85,570,503,524),e.next=128,he.LinkAnnot.create(t,k);case 128:return m=e.sent,e.next=131,m.setAction(v);case 131:return e.next=133,n.annotPushBack(m);case 133:return e.next=135,t.getPage(3);case 135:return b=e.sent,e.t6=he.Action,e.next=139,he.Destination.createFitH(b,0);case 139:return e.t7=e.sent,e.next=142,e.t6.createGoto.call(e.t6,e.t7);case 142:return L=e.sent,e.next=145,he.LinkAnnot.create(t,new he.Rect(85,458,503,502));case 145:return B=e.sent,e.next=148,B.setAction(L);case 148:return e.next=150,he.AnnotBorderStyle.create(he.AnnotBorderStyle.Style.e_solid,3,0,0);case 150:return R=e.sent,B.setBorderStyle(R,!1),e.next=154,he.ColorPt.init(0,0,1,0);case 154:return _=e.sent,e.next=157,B.setColorDefault(_);case 157:return e.next=159,n.annotPushBack(B);case 159:return e.next=161,he.RubberStampAnnot.create(t,new he.Rect(30,30,300,200));case 161:return E=e.sent,e.next=164,E.setIconName("Draft");case 164:return e.next=166,n.annotPushBack(E);case 166:return e.next=168,he.InkAnnot.create(t,new he.Rect(110,10,300,200));case 168:return D=e.sent,F=new he.Point(110,10),e.next=172,D.setPoint(0,0,F);case 172:return F.x=150,F.y=50,e.next=176,D.setPoint(0,1,F);case 176:return F.x=190,F.y=60,e.next=180,D.setPoint(0,2,F);case 180:return F.x=180,F.y=90,e.next=184,D.setPoint(1,0,F);case 184:return F.x=190,F.y=95,e.next=188,D.setPoint(1,1,F);case 188:return F.x=200,F.y=100,e.next=192,D.setPoint(1,2,F);case 192:return F.x=166,F.y=86,e.next=196,D.setPoint(2,0,F);case 196:return F.x=196,F.y=96,e.next=200,D.setPoint(2,1,F);case 200:return F.x=221,F.y=121,e.next=204,D.setPoint(2,2,F);case 204:return F.x=288,F.y=188,e.next=208,D.setPoint(2,3,F);case 208:return e.next=210,he.ColorPt.init(0,1,1,0);case 210:return T=e.sent,e.next=213,D.setColor(T,3);case 213:return n.annotPushBack(D),e.next=216,he.endDeallocateStack();case 216:case"end":return e.stop()}},e,void 0)}));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r,a,o,s,c,i,u,l,x,p,h,f,d,P,y,g,w,A,S,C,v,k,m,b,L,B,R,_,E,D,F,T,I,O,N,j,G,V,W,U,z,M,q,H,Q,Y,X,Z,J,K,$,ee,te,ne,re,ae,oe,se,ce,ie,ue,le,xe,pe;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he.startDeallocateStack();case 2:return e.next=4,he.ElementWriter.create();case 4:return n=e.sent,e.next=7,he.ElementBuilder.create();case 7:return r=e.sent,a=void 0,e.next=11,t.pageCreate(new he.Rect(0,0,600,600));case 11:return o=e.sent,t.pagePushBack(o),n.beginOnPage(o,he.ElementWriter.WriteMode.e_overlay,!1),n.end(),e.next=17,he.FreeTextAnnot.create(t,new he.Rect(10,400,160,570));case 17:return s=e.sent,e.next=20,s.setContents("\n\nSome swift brown fox snatched a gray hare out of the air by freezing it with an angry glare.\n\nAha!\n\nAnd there was much rejoicing!");case 20:return e.next=22,he.AnnotBorderStyle.create(he.AnnotBorderStyle.Style.e_solid,1,10,20);case 22:return c=e.sent,e.next=25,s.setBorderStyle(c,!0);case 25:return e.next=27,s.setQuaddingFormat(0);case 27:return e.next=29,o.annotPushBack(s);case 29:return e.next=31,s.refreshAppearance();case 31:return e.next=33,he.FreeTextAnnot.create(t,new he.Rect(100,100,350,500));case 33:return i=e.sent,e.next=36,i.setContentRect(new he.Rect(200,200,350,500));case 36:return e.next=38,i.setContents("\n\nSome swift brown fox snatched a gray hare out of the air by freezing it with an angry glare.\n\nAha!\n\nAnd there was much rejoicing!");case 38:return e.next=40,i.setCalloutLinePoints(new he.Point(200,300),new he.Point(150,290),new he.Point(110,110));case 40:return e.next=42,he.AnnotBorderStyle.create(he.AnnotBorderStyle.Style.e_solid,1,10,20);case 42:return u=e.sent,e.next=45,i.setBorderStyle(u,!0);case 45:return e.next=47,i.setEndingStyle(he.LineAnnot.EndingStyle.e_ClosedArrow);case 47:return e.next=49,he.ColorPt.init(0,1,0,0);case 49:return l=e.sent,e.next=52,i.setColorDefault(l);case 52:return e.next=54,i.setQuaddingFormat(1);case 54:return e.next=56,o.annotPushBack(i);case 56:return e.next=58,i.refreshAppearance();case 58:return e.next=60,he.FreeTextAnnot.create(t,new he.Rect(400,10,550,400));case 60:return x=e.sent,e.next=63,x.setContents("\n\nSome swift brown fox snatched a gray hare out of the air by freezing it with an angry glare.\n\nAha!\n\nAnd there was much rejoicing!");case 63:return e.next=65,he.AnnotBorderStyle.create(he.AnnotBorderStyle.Style.e_solid,1,10,20);case 65:return p=e.sent,e.next=68,x.setBorderStyle(p,!0);case 68:return e.next=70,he.ColorPt.init(0,0,1,0);case 70:return h=e.sent,e.next=73,x.setColorDefault(h);case 73:return e.next=75,x.setOpacity(.2);case 75:return e.next=77,x.setQuaddingFormat(2);case 77:return e.next=79,o.annotPushBack(x);case 79:return e.next=81,x.refreshAppearance();case 81:return e.next=83,t.pageCreate(new he.Rect(0,0,600,600));case 83:return f=e.sent,t.pagePushBack(f),e.next=87,n.beginOnPage(f,he.ElementWriter.WriteMode.e_overlay,!1);case 87:return e.next=89,r.reset(new he.GState("0"));case 89:return e.next=91,n.end();case 91:return e.next=93,he.LineAnnot.create(t,new he.Rect(250,250,400,400));case 93:return d=e.sent,e.next=96,d.setStartPoint(new he.Point(350,270));case 96:return e.next=98,d.setEndPoint(new he.Point(260,370));case 98:return e.next=100,d.setStartStyle(he.LineAnnot.EndingStyle.e_Square);case 100:return e.next=102,d.setEndStyle(he.LineAnnot.EndingStyle.e_Circle);case 102:return e.next=104,he.ColorPt.init(.3,.5,0,0);case 104:return P=e.sent,e.next=107,d.setColor(P,3);case 107:return e.next=109,d.setContents("Dashed Captioned");case 109:return e.next=111,d.setShowCaption(!0);case 111:return e.next=113,d.setCapPos(he.LineAnnot.CapPos.e_Top);case 113:return y=new Float64Array([2,2]),e.next=116,he.AnnotBorderStyle.createWithDashPattern(he.AnnotBorderStyle.Style.e_dashed,2,0,0,y);case 116:return g=e.sent,d.setBorderStyle(g,!1),d.refreshAppearance(),f.annotPushBack(d),e.next=122,he.LineAnnot.create(t,new he.Rect(347,377,600,600));case 122:return w=e.sent,e.next=125,w.setStartPoint(new he.Point(385,410));case 125:return e.next=127,w.setEndPoint(new he.Point(540,555));case 127:return e.next=129,w.setStartStyle(he.LineAnnot.EndingStyle.e_Circle);case 129:return e.next=131,w.setEndStyle(he.LineAnnot.EndingStyle.e_OpenArrow);case 131:return e.next=133,he.ColorPt.init(1,0,0,0);case 133:return A=e.sent,e.next=136,w.setColor(A,3);case 136:return e.next=138,he.ColorPt.init(0,1,0,0);case 138:return S=e.sent,e.next=141,w.setInteriorColor(S,3);case 141:return e.next=143,w.setContents("Inline Caption");case 143:return e.next=145,w.setShowCaption(!0);case 145:return e.next=147,w.setCapPos(he.LineAnnot.CapPos.e_Inline);case 147:return e.next=149,w.setLeaderLineExtensionLength(-4);case 149:return e.next=151,w.setLeaderLineLength(-12);case 151:return e.next=153,w.setLeaderLineOffset(2);case 153:return e.next=155,w.refreshAppearance();case 155:return f.annotPushBack(w),e.next=158,he.LineAnnot.create(t,new he.Rect(10,400,200,600));case 158:return C=e.sent,e.next=161,C.setStartPoint(new he.Point(25,426));case 161:return e.next=163,C.setEndPoint(new he.Point(180,555));case 163:return e.next=165,C.setStartStyle(he.LineAnnot.EndingStyle.e_Circle);case 165:return e.next=167,C.setEndStyle(he.LineAnnot.EndingStyle.e_Square);case 167:return e.next=169,he.ColorPt.init(0,0,1,0);case 169:return v=e.sent,e.next=172,C.setColor(v,3);case 172:return e.next=174,he.ColorPt.init(1,0,0,0);case 174:return k=e.sent,e.next=177,C.setInteriorColor(k,3);case 177:return e.next=179,C.setContents("Offset Caption");case 179:return e.next=181,C.setShowCaption(!0);case 181:return e.next=183,C.setCapPos(he.LineAnnot.CapPos.e_Top);case 183:return e.next=185,C.setTextHOffset(-60);case 185:return e.next=187,C.setTextVOffset(10);case 187:return e.next=189,C.refreshAppearance();case 189:return f.annotPushBack(C),e.next=192,he.LineAnnot.create(t,new he.Rect(200,10,400,70));case 192:return(m=e.sent).setStartPoint(new he.Point(220,25)),m.setEndPoint(new he.Point(370,60)),m.setStartStyle(he.LineAnnot.EndingStyle.e_Butt),m.setEndStyle(he.LineAnnot.EndingStyle.e_OpenArrow),e.t0=m,e.next=200,he.ColorPt.init(0,0,1);case 200:return e.t1=e.sent,e.t0.setColor.call(e.t0,e.t1,3),m.setContents("Regular Caption"),m.setShowCaption(!0),m.setCapPos(he.LineAnnot.CapPos.e_Top),e.next=207,m.refreshAppearance();case 207:return f.annotPushBack(m),e.next=210,he.LineAnnot.create(t,new he.Rect(200,70,400,130));case 210:return(b=e.sent).setStartPoint(new he.Point(220,111)),b.setEndPoint(new he.Point(370,78)),b.setStartStyle(he.LineAnnot.EndingStyle.e_Circle),b.setEndStyle(he.LineAnnot.EndingStyle.e_Diamond),b.setContents("Circle to Diamond"),e.t2=b,e.next=219,he.ColorPt.init(0,0,1);case 219:return e.t3=e.sent,e.t2.setColor.call(e.t2,e.t3,3),e.t4=b,e.next=224,he.ColorPt.init(0,1,0);case 224:return e.t5=e.sent,e.t4.setInteriorColor.call(e.t4,e.t5,3),b.setShowCaption(!0),b.setCapPos(he.LineAnnot.CapPos.e_Top),b.refreshAppearance(),f.annotPushBack(b),e.next=232,he.LineAnnot.create(t,new he.Rect(10,100,160,200));case 232:return(L=e.sent).setStartPoint(new he.Point(15,110)),L.setEndPoint(new he.Point(150,190)),L.setStartStyle(he.LineAnnot.EndingStyle.e_Slash),L.setEndStyle(he.LineAnnot.EndingStyle.e_ClosedArrow),L.setContents("Slash to CArrow"),e.t6=L,e.next=241,he.ColorPt.init(1,0,0);case 241:return e.t7=e.sent,e.t6.setColor.call(e.t6,e.t7,3),e.t8=L,e.next=246,he.ColorPt.init(0,1,1);case 246:return e.t9=e.sent,e.t8.setInteriorColor.call(e.t8,e.t9,3),L.setShowCaption(!0),L.setCapPos(he.LineAnnot.CapPos.e_Top),L.refreshAppearance(),f.annotPushBack(L),e.next=254,he.LineAnnot.create(t,new he.Rect(270,270,570,433));case 254:return(B=e.sent).setStartPoint(new he.Point(300,400)),B.setEndPoint(new he.Point(550,300)),B.setStartStyle(he.LineAnnot.EndingStyle.e_RClosedArrow),B.setEndStyle(he.LineAnnot.EndingStyle.e_ROpenArrow),B.setContents("ROpen & RClosed arrows"),e.t10=B,e.next=263,he.ColorPt.init(0,0,1);case 263:return e.t11=e.sent,e.t10.setColor.call(e.t10,e.t11,3),e.t12=B,e.next=268,he.ColorPt.init(0,1,0);case 268:return e.t13=e.sent,e.t12.setInteriorColor.call(e.t12,e.t13,3),B.setShowCaption(!0),B.setCapPos(he.LineAnnot.CapPos.e_Top),B.refreshAppearance(),f.annotPushBack(B),e.next=276,he.LineAnnot.create(t,new he.Rect(195,395,205,505));case 276:return(R=e.sent).setStartPoint(new he.Point(200,400)),R.setEndPoint(new he.Point(200,500)),R.refreshAppearance(),f.annotPushBack(R),e.next=283,he.LineAnnot.create(t,new he.Rect(55,299,150,301));case 283:return(_=e.sent).setStartPoint(new he.Point(55,300)),_.setEndPoint(new he.Point(155,300)),_.setStartStyle(he.LineAnnot.EndingStyle.e_Circle),_.setEndStyle(he.LineAnnot.EndingStyle.e_Circle),_.setContents("Caption that's longer than its line."),e.t14=_,e.next=292,he.ColorPt.init(1,0,1);case 292:return e.t15=e.sent,e.t14.setColor.call(e.t14,e.t15,3),e.t16=_,e.next=297,he.ColorPt.init(0,1,0);case 297:return e.t17=e.sent,e.t16.setInteriorColor.call(e.t16,e.t17,3),_.setShowCaption(!0),_.setCapPos(he.LineAnnot.CapPos.e_Top),_.refreshAppearance(),f.annotPushBack(_),e.next=305,he.LineAnnot.create(t,new he.Rect(300,200,390,234));case 305:return(E=e.sent).setStartPoint(new he.Point(310,210)),E.setEndPoint(new he.Point(380,220)),e.t18=E,e.next=311,he.ColorPt.init(0,0,0);case 311:return e.t19=e.sent,e.t18.setColor.call(e.t18,e.t19,3),E.refreshAppearance(),f.annotPushBack(E),e.next=317,t.pageCreate(new he.Rect(0,0,600,600));case 317:return D=e.sent,n.beginOnPage(D),n.end(),t.pagePushBack(D),e.next=323,he.CircleAnnot.create(t,new he.Rect(300,300,390,350));case 323:return F=e.sent,e.t20=F,e.next=327,he.ColorPt.init(0,0,0);case 327:return e.t21=e.sent,e.t20.setColor.call(e.t20,e.t21,3),F.refreshAppearance(),D.annotPushBack(F),e.next=333,he.CircleAnnot.create(t,new he.Rect(100,100,200,200));case 333:return T=e.sent,e.t22=T,e.next=337,he.ColorPt.init(0,1,0);case 337:return e.t23=e.sent,e.t22.setColor.call(e.t22,e.t23,3),e.t24=T,e.next=342,he.ColorPt.init(0,0,1);case 342:return e.t25=e.sent,e.t24.setInteriorColor.call(e.t24,e.t25,3),I=[2,4],e.t26=T,e.next=348,he.AnnotBorderStyle.createWithDashPattern(he.AnnotBorderStyle.Style.e_dashed,3,0,0,I);case 348:return e.t27=e.sent,e.t26.setBorderStyle.call(e.t26,e.t27),T.setPadding(new he.Rect(2,2,2,2)),T.refreshAppearance(),D.annotPushBack(T),e.next=355,he.SquareAnnot.create(t,new he.Rect(10,200,80,300));case 355:return O=e.sent,e.t28=O,e.next=359,he.ColorPt.init(0,0,0);case 359:return e.t29=e.sent,e.t28.setColor.call(e.t28,e.t29,3),O.refreshAppearance(),D.annotPushBack(O),e.next=365,he.SquareAnnot.create(t,new he.Rect(500,200,580,300));case 365:return N=e.sent,e.t30=N,e.next=369,he.ColorPt.init(1,0,0);case 369:return e.t31=e.sent,e.t30.setColor.call(e.t30,e.t31,3),e.t32=N,e.next=374,he.ColorPt.init(0,1,1);case 374:return e.t33=e.sent,e.t32.setInteriorColor.call(e.t32,e.t33,3),j=[4,2],e.t34=N,e.next=380,he.AnnotBorderStyle.createWithDashPattern(he.AnnotBorderStyle.Style.e_dashed,6,0,0,j);case 380:return e.t35=e.sent,e.t34.setBorderStyle.call(e.t34,e.t35),N.setPadding(new he.Rect(4,4,4,4)),N.refreshAppearance(),D.annotPushBack(N),e.next=387,he.PolygonAnnot.create(t,new he.Rect(5,500,125,590));case 387:return G=e.sent,e.t36=G,e.next=391,he.ColorPt.init(1,0,0);case 391:return e.t37=e.sent,e.t36.setColor.call(e.t36,e.t37,3),e.t38=G,e.next=396,he.ColorPt.init(1,1,0);case 396:return e.t39=e.sent,e.t38.setInteriorColor.call(e.t38,e.t39,3),G.setVertex(0,new he.Point(12,510)),G.setVertex(1,new he.Point(100,510)),G.setVertex(2,new he.Point(100,555)),G.setVertex(3,new he.Point(35,544)),e.next=404,he.AnnotBorderStyle.create(he.AnnotBorderStyle.Style.e_solid,4,0,0);case 404:return V=e.sent,G.setBorderStyle(V),G.setPadding(new he.Rect(4,4,4,4)),G.refreshAppearance(),D.annotPushBack(G),e.next=411,he.PolyLineAnnot.create(t,new he.Rect(400,10,500,90));case 411:return W=e.sent,e.t40=W,e.next=415,he.ColorPt.init(1,0,0);case 415:return e.t41=e.sent,e.t40.setColor.call(e.t40,e.t41,3),e.t42=W,e.next=420,he.ColorPt.init(0,1,0);case 420:return e.t43=e.sent,e.t42.setInteriorColor.call(e.t42,e.t43,3),W.setVertex(0,new he.Point(405,20)),W.setVertex(1,new he.Point(440,40)),W.setVertex(2,new he.Point(410,60)),W.setVertex(3,new he.Point(470,80)),e.t44=W,e.next=429,he.AnnotBorderStyle.create(he.AnnotBorderStyle.Style.e_solid,2,0,0);case 429:return e.t45=e.sent,e.t44.setBorderStyle.call(e.t44,e.t45),W.setPadding(new he.Rect(4,4,4,4)),W.setStartStyle(he.LineAnnot.EndingStyle.e_RClosedArrow),W.setEndStyle(he.LineAnnot.EndingStyle.e_ClosedArrow),W.refreshAppearance(),D.annotPushBack(W),e.next=438,he.LinkAnnot.create(t,new he.Rect(5,5,55,24));case 438:return(U=e.sent).refreshAppearance(),D.annotPushBack(U),e.next=443,t.pageCreate(new he.Rect(0,0,600,600));case 443:return z=e.sent,n.beginOnPage(z),n.end(),t.pagePushBack(z),n.beginOnPage(z),e.next=450,he.Font.create(t,he.Font.StandardType1Font.e_helvetica);case 450:return M=e.sent,e.next=453,r.createTextBeginWithFont(M,16);case 453:return(a=e.sent).setPathFill(!0),n.writeElement(a),e.next=458,r.createTextRun("Some random text on the page",M,16);case 458:return(a=e.sent).setTextMatrixEntries(1,0,0,1,100,500),n.writeElement(a),e.t46=n,e.next=464,r.createTextEnd();case 464:return e.t47=e.sent,e.t46.writeElement.call(e.t46,e.t47),n.end(),e.next=469,he.HighlightAnnot.create(t,new he.Rect(100,490,150,515));case 469:return q=e.sent,e.t48=q,e.next=473,he.ColorPt.init(0,1,0);case 473:return e.t49=e.sent,e.t48.setColor.call(e.t48,e.t49,3),q.refreshAppearance(),z.annotPushBack(q),e.next=479,he.SquigglyAnnot.create(t,new he.Rect(100,450,250,600));case 479:return(H=e.sent).setQuadPoint(0,he.QuadPoint(122,455,240,545,230,595,101,500)),H.refreshAppearance(),z.annotPushBack(H),e.next=485,he.CaretAnnot.create(t,new he.Rect(100,40,129,69));case 485:return Q=e.sent,e.t50=Q,e.next=489,he.ColorPt.init(0,0,1);case 489:return e.t51=e.sent,e.t50.setColor.call(e.t50,e.t51,3),Q.setSymbol("P"),Q.refreshAppearance(),z.annotPushBack(Q),e.next=496,t.pageCreate(new he.Rect(0,0,600,600));case 496:return Y=e.sent,n.beginOnPage(Y),n.end(),t.pagePushBack(Y),e.next=502,he.FileSpec.create(t,"../TestFiles/butterfly.png",!1);case 502:return X=e.sent,e.next=505,t.pageCreate(new he.Rect(0,0,600,600));case 505:Z=e.sent,n.beginOnPage(Z),n.end(),t.pagePushBack(Z),J=0;case 510:if(!(J<2)){e.next=550;break}K=0;case 512:if(!(K<100)){e.next=547;break}if(K>he.FileAttachmentAnnot.Icon.e_Tag){e.next=525;break}return e.next=516,he.FileAttachmentAnnot.createWithFileSpec(t,new he.Rect(50+50*K,100,70+50*K,120),X,K);case 516:if($=e.sent,J)return e.t52=$,e.next=521,he.ColorPt.init(1,1,0);e.next=523;break;case 521:e.t53=e.sent,e.t52.setColor.call(e.t52,e.t53);case 523:$.refreshAppearance(),0===J?Y.annotPushBack($):Z.annotPushBack($);case 525:if(K>he.TextAnnot.Icon.e_Note)return e.abrupt("break",547);e.next=527;break;case 527:return e.next=529,he.TextAnnot.create(t,new he.Rect(10+50*K,200,30+50*K,220));case 529:return(ee=e.sent).setIcon(K),e.t54=ee,e.next=534,ee.getIconName();case 534:if(e.t55=e.sent,e.t54.setContents.call(e.t54,e.t55),J)return e.t56=ee,e.next=540,he.ColorPt.init(1,1,0);e.next=542;break;case 540:e.t57=e.sent,e.t56.setColor.call(e.t56,e.t57);case 542:ee.refreshAppearance(),0===J?Y.annotPushBack(ee):Z.annotPushBack(ee);case 544:K++,e.next=512;break;case 547:++J,e.next=510;break;case 550:return e.next=552,he.TextAnnot.create(t,new he.Rect(10,20,30,40));case 552:return(te=e.sent).setIconName("UserIcon"),te.setContents("User defined icon, unrecognized by appearance generator"),e.t58=te,e.next=558,he.ColorPt.init(0,1,0);case 558:return e.t59=e.sent,e.t58.setColor.call(e.t58,e.t59),te.refreshAppearance(),Z.annotPushBack(te),e.next=564,he.InkAnnot.create(t,new he.Rect(100,400,200,550));case 564:return ne=e.sent,e.t60=ne,e.next=568,he.ColorPt.init(0,0,1);case 568:return e.t61=e.sent,e.t60.setColor.call(e.t60,e.t61),ne.setPoint(1,3,new he.Point(220,505)),ne.setPoint(1,0,new he.Point(100,490)),ne.setPoint(0,1,new he.Point(120,410)),ne.setPoint(0,0,new he.Point(100,400)),ne.setPoint(1,2,new he.Point(180,490)),ne.setPoint(1,1,new he.Point(140,440)),e.t62=ne,e.next=579,he.AnnotBorderStyle.create(he.AnnotBorderStyle.Style.e_solid,3,0,0);case 579:return e.t63=e.sent,e.t62.setBorderStyle.call(e.t62,e.t63),ne.refreshAppearance(),Z.annotPushBack(ne),e.next=585,t.pageCreate(new he.Rect(0,0,600,600));case 585:return re=e.sent,n.beginOnPage(re),n.end(),t.pagePushBack(re),e.next=591,he.SoundAnnot.create(t,new he.Rect(100,500,120,520));case 591:return ae=e.sent,e.t64=ae,e.next=595,he.ColorPt.init(1,1,0);case 595:return e.t65=e.sent,e.t64.setColor.call(e.t64,e.t65),ae.setIcon(he.SoundAnnot.Icon.e_Speaker),ae.refreshAppearance(),re.annotPushBack(ae),e.next=602,he.SoundAnnot.create(t,new he.Rect(200,500,220,520));case 602:return oe=e.sent,e.t66=oe,e.next=606,he.ColorPt.init(1,1,0);case 606:return e.t67=e.sent,e.t66.setColor.call(e.t66,e.t67),oe.setIcon(he.SoundAnnot.Icon.e_Mic),oe.refreshAppearance(),re.annotPushBack(oe),e.next=613,t.pageCreate(new he.Rect(0,0,600,600));case 613:se=e.sent,n.beginOnPage(se),n.end(),t.pagePushBack(se),ce=0;case 618:if(!(ce<2)){e.next=642;break}ie=5,ue=520,le=he.RubberStampAnnot.Icon.e_Approved;case 622:if(le<=he.RubberStampAnnot.Icon.e_Draft)return e.next=625,he.RubberStampAnnot.create(t,new he.Rect(1,1,100,100));e.next=639;break;case 625:return(xe=e.sent).setIcon(le),e.t68=xe,e.next=630,xe.getIconName();case 630:e.t69=e.sent,e.t68.setContents.call(e.t68,e.t69),xe.setRect(new he.Rect(ie,ue,ie+100,ue+25)),(ue-=100)<0&&(ue=520,ie+=200),0===ce||(se.annotPushBack(xe),xe.refreshAppearance());case 636:le++,e.next=622;break;case 639:++ce,e.next=618;break;case 642:return e.next=644,he.RubberStampAnnot.create(t,new he.Rect(400,5,550,45));case 644:return(pe=e.sent).setIconName("UserStamp"),pe.setContents("User defined stamp"),se.annotPushBack(pe),pe.refreshAppearance(),e.next=651,he.endDeallocateStack();case 651:case"end":return e.stop()}},e,void 0)}));return function(e){return t.apply(this,arguments)}}(),t=function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,a,o,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Beginning Annotation Test. This test will add different annotations to PDF documents."),t=0,"../TestFiles/",e.next=6,he.PDFDoc.createFromURL("../TestFiles/numbered.pdf");case 6:return(n=e.sent).initSecurityHandler(),n.lock(),console.log("PDFNet and PDF document initialized and locked"),e.next=12,c(n);case 12:return e.next=14,n.saveMemoryBuffer(he.SDFDoc.SaveOptions.e_linearized);case 14:return r=e.sent,saveBufferAsPDFDoc(r,"annotation_testLowLevel.pdf"),e.next=18,n.getPage(1);case 18:return e.sent,e.next=21,i(n);case 21:return e.next=23,n.saveMemoryBuffer(he.SDFDoc.SaveOptions.e_linearized);case 23:return a=e.sent,saveBufferAsPDFDoc(a,"annotation_testHighLevel.pdf"),e.next=27,he.PDFDoc.create();case 27:return(o=e.sent).lock(),e.next=31,u(o);case 31:return e.next=33,o.saveMemoryBuffer(he.SDFDoc.SaveOptions.e_linearized);case 33:return s=e.sent,saveBufferAsPDFDoc(s,"new_annot_test_api.pdf"),console.log("Done."),e.abrupt("return",t);case 39:e.prev=39,e.t0=e.catch(0),console.log(e.t0);case 42:case"end":return e.stop()}},e,void 0,[[0,39]])}));return function(){return e.apply(this,arguments)}}(),he.runWithCleanup(t,window.sampleL);case 6:case"end":return e.stop()}},e,void 0)}))}(window);