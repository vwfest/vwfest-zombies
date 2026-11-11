var qf=0,Pu=1,Yf=2;var Ws=1,Zf=2,Nr=3,vs=0,vn=1,cn=2,jt=0,Ii=1,Qt=2,Iu=3,Du=4,sc=5;var si=100,$f=101,Jf=102,Kf=103,jf=104,Xs=200,Qf=201,ep=202,tp=203,Lu=204,Nu=205,Wa=206,np=207,Xa=208,ip=209,sp=210,rp=211,ap=212,op=213,lp=214,El=0,wl=1,Tl=2,_r=3,Al=4,Rl=5,Cl=6,Pl=7,Uu=0,cp=1,hp=2,gi=0,qa=1,Ya=2,Za=3,qs=4,$a=5,Ja=6,Ka=7,mu="attached",up="detached",Fu=300,_s=301,Ys=302,rc=303,ac=304,ja=306,Bn=1e3,ii=1001,Il=1002,Kt=1003,dp=1004;var Qa=1005;var xn=1006,oc=1007;var ys=1008;var En=1009,Bu=1010,Ou=1011,Ur=1012,lc=1013,xi=1014,jn=1015,Yt=1016,cc=1017,hc=1018,Ms=1020,zu=35902,ku=35899,Hu=1021,Vu=1022,Pn=1023,Ti=1026,Di=1027,uc=1028,dc=1029,bs=1030,fc=1031;var pc=1033,eo=33776,to=33777,no=33778,io=33779,mc=35840,gc=35841,xc=35842,vc=35843,_c=36196,yc=37492,Mc=37496,bc=37488,Sc=37489,so=37490,Ec=37491,wc=37808,Tc=37809,Ac=37810,Rc=37811,Cc=37812,Pc=37813,Ic=37814,Dc=37815,Lc=37816,Nc=37817,Uc=37818,Fc=37819,Bc=37820,Oc=37821,zc=36492,kc=36494,Hc=36495,Vc=36283,Gc=36284,ro=36285,Wc=36286;var ha=2300,Dl=2301,bl=2302,gu=2303,xu=2400,vu=2401,_u=2402;var fp=3200;var ao=0,pp=1,Ki="",Ut="srgb",ua="srgb-linear",da="linear",bt="srgb";var Sl=7680;var mp=519,gp=512,xp=513,vp=514,Xc=515,_p=516,yp=517,qc=518,Mp=519,Gu=35044,oo=35048;var Wu="300 es",di=2e3,yr=2001;function bm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Sm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bp(){let i=fa("canvas");return i.style.display="block",i}var lf={},Mr=null;function pa(...i){let e="THREE."+i.shift();Mr?Mr("log",e,...i):console.log(e,...i)}function Sp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Je(...i){i=Sp(i);let e="THREE."+i.shift();if(Mr)Mr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Qe(...i){i=Sp(i);let e="THREE."+i.shift();if(Mr)Mr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Fs(...i){let e=i.join(" ");e in lf||(lf[e]=!0,Je(...i))}function Ep(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var wp={[El]:wl,[Tl]:Cl,[Al]:Pl,[_r]:Rl,[wl]:El,[Cl]:Tl,[Pl]:Al,[Rl]:_r},Ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var kh=Math.PI/180,ma=180/Math.PI;function wi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function Em(i,e){return(i%e+e)%e}function Hh(i,e,t){return(1-t)*i+t*e}function Ei(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var le=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},On=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,l){let c=n[s+0],o=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],p=r[a+2],v=r[a+3];if(d!==v||c!==u||o!==f||h!==p){let g=c*u+o*f+h*p+d*v;g<0&&(u=-u,f=-f,p=-p,v=-v,g=-g);let m=1-l;if(g<.9995){let M=Math.acos(g),A=Math.sin(M);m=Math.sin(m*M)/A,l=Math.sin(l*M)/A,c=c*m+u*l,o=o*m+f*l,h=h*m+p*l,d=d*m+v*l}else{c=c*m+u*l,o=o*m+f*l,h=h*m+p*l,d=d*m+v*l;let M=1/Math.sqrt(c*c+o*o+h*h+d*d);c*=M,o*=M,h*=M,d*=M}}e[t]=c,e[t+1]=o,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let l=n[s],c=n[s+1],o=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return e[t]=l*p+h*d+c*f-o*u,e[t+1]=c*p+h*u+o*d-l*f,e[t+2]=o*p+h*f+l*u-c*d,e[t+3]=h*p-l*d-c*u-o*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,l=Math.cos,c=Math.sin,o=l(n/2),h=l(s/2),d=l(r/2),u=c(n/2),f=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=u*h*d+o*f*p,this._y=o*f*d-u*h*p,this._z=o*h*p+u*f*d,this._w=o*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+o*f*p,this._y=o*f*d-u*h*p,this._z=o*h*p-u*f*d,this._w=o*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-o*f*p,this._y=o*f*d+u*h*p,this._z=o*h*p+u*f*d,this._w=o*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-o*f*p,this._y=o*f*d+u*h*p,this._z=o*h*p-u*f*d,this._w=o*h*d+u*f*p;break;case"YZX":this._x=u*h*d+o*f*p,this._y=o*f*d+u*h*p,this._z=o*h*p-u*f*d,this._w=o*h*d-u*f*p;break;case"XZY":this._x=u*h*d-o*f*p,this._y=o*f*d-u*h*p,this._z=o*h*p+u*f*d,this._w=o*h*d+u*f*p;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],l=t[5],c=t[9],o=t[2],h=t[6],d=t[10],u=n+l+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-o)*f,this._z=(a-s)*f}else if(n>l&&n>d){let f=2*Math.sqrt(1+n-l-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+o)/f}else if(l>d){let f=2*Math.sqrt(1+l-n-d);this._w=(r-o)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-l);this._w=(a-s)/f,this._x=(r+o)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,l=t._x,c=t._y,o=t._z,h=t._w;return this._x=n*h+a*l+s*o-r*c,this._y=s*h+a*c+r*l-n*o,this._z=r*h+a*o+n*c-s*l,this._w=a*h-n*l-s*c-r*o,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let c=1-t;if(l<.9995){let o=Math.acos(l),h=Math.sin(o);c=Math.sin(c*o)/h,t=Math.sin(t*o)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,l=e.z,c=e.w,o=2*(a*s-l*n),h=2*(l*t-r*s),d=2*(r*n-a*t);return this.x=t+c*o+a*d-l*h,this.y=n+c*h+l*o-r*d,this.z=s+c*d+r*h-a*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,l=t.y,c=t.z;return this.x=s*c-r*l,this.y=r*a-n*c,this.z=n*l-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vh.copy(this).projectOnVector(e),this.sub(Vh)}reflect(e){return this.sub(Vh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vh=new D,cf=new On,st=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,l,c,o){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,l,c,o)}set(e,t,n,s,r,a,l,c,o){let h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],l=n[3],c=n[6],o=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],v=s[0],g=s[3],m=s[6],M=s[1],A=s[4],_=s[7],E=s[2],w=s[5],C=s[8];return r[0]=a*v+l*M+c*E,r[3]=a*g+l*A+c*w,r[6]=a*m+l*_+c*C,r[1]=o*v+h*M+d*E,r[4]=o*g+h*A+d*w,r[7]=o*m+h*_+d*C,r[2]=u*v+f*M+p*E,r[5]=u*g+f*A+p*w,r[8]=u*m+f*_+p*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8];return t*a*h-t*l*o-n*r*h+n*l*c+s*r*o-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8],d=h*a-l*o,u=l*c-h*r,f=o*r-a*c,p=t*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=d*v,e[1]=(s*o-h*n)*v,e[2]=(l*n-s*a)*v,e[3]=u*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-l*t)*v,e[6]=f*v,e[7]=(n*c-o*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,l){let c=Math.cos(r),o=Math.sin(r);return this.set(n*c,n*o,-n*(c*a+o*l)+a+e,-s*o,s*c,-s*(-o*a+c*l)+l+t,0,0,1),this}scale(e,t){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gh.makeScale(e,t)),this}rotate(e){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gh.makeRotation(-e)),this}translate(e,t){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Gh=new st,hf=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uf=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wm(){let i={enabled:!0,workingColorSpace:ua,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===bt&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(s.r=vr(s.r),s.g=vr(s.g),s.b=vr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ki?da:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ua]:{primaries:e,whitePoint:n,transfer:da,toXYZ:hf,fromXYZ:uf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:hf,fromXYZ:uf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),i}var dt=wm();function $i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var er,Ll=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{er===void 0&&(er=fa("canvas")),er.width=e.width,er.height=e.height;let s=er.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=er}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$i(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($i(t[n]/255)*255):t[n]=$i(t[n]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Tm=0,br=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(Wh(s[a].image)):r.push(Wh(s[a]))}else r=Wh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Wh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ll.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}var Am=0,Xh=new D,Cn=class i extends Ai{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ii,s=ii,r=xn,a=ys,l=Pn,c=En,o=i.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=wi(),this.name="",this.source=new br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=o,this.format=l,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xh).x}get height(){return this.source.getSize(Xh).y}get depth(){return this.source.getSize(Xh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bn:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bn:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Fu;Cn.DEFAULT_ANISOTROPY=1;var Ct=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,o=c[0],h=c[4],d=c[8],u=c[1],f=c[5],p=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(p+g)<.1&&Math.abs(o+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(o+1)/2,_=(f+1)/2,E=(m+1)/2,w=(h+u)/4,C=(d+v)/4,x=(p+g)/4;return A>_&&A>E?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=w/n,r=C/n):_>E?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=x/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=C/r,s=x/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-p)*(g-p)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(d-v)/M,this.z=(u-h)/M,this.w=Math.acos((o+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nl=class extends Ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Cn(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new br(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vt=class extends Nl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ga=class extends Cn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ul=class extends Cn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var nt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,l,c,o,h,d,u,f,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,l,c,o,h,d,u,f,p,v,g)}set(e,t,n,s,r,a,l,c,o,h,d,u,f,p,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=l,m[13]=c,m[2]=o,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),a=1/tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),o=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,p=l*h,v=l*d;t[0]=c*h,t[4]=-c*d,t[8]=o,t[1]=f+p*o,t[5]=u-v*o,t[9]=-l*c,t[2]=v-u*o,t[6]=p+f*o,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,p=o*h,v=o*d;t[0]=u+v*l,t[4]=p*l-f,t[8]=a*o,t[1]=a*d,t[5]=a*h,t[9]=-l,t[2]=f*l-p,t[6]=v+u*l,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,p=o*h,v=o*d;t[0]=u-v*l,t[4]=-a*d,t[8]=p+f*l,t[1]=f+p*l,t[5]=a*h,t[9]=v-u*l,t[2]=-a*o,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,f=a*d,p=l*h,v=l*d;t[0]=c*h,t[4]=p*o-f,t[8]=u*o+v,t[1]=c*d,t[5]=v*o+u,t[9]=f*o-p,t[2]=-o,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,f=a*o,p=l*c,v=l*o;t[0]=c*h,t[4]=v-u*d,t[8]=p*d+f,t[1]=d,t[5]=a*h,t[9]=-l*h,t[2]=-o*h,t[6]=f*d+p,t[10]=u-v*d}else if(e.order==="XZY"){let u=a*c,f=a*o,p=l*c,v=l*o;t[0]=c*h,t[4]=-d,t[8]=o*h,t[1]=u*d+v,t[5]=a*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=l*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rm,e,Cm)}lookAt(e,t,n){let s=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),os.crossVectors(n,Xn),os.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),os.crossVectors(n,Xn)),os.normalize(),Zo.crossVectors(Xn,os),s[0]=os.x,s[4]=Zo.x,s[8]=Xn.x,s[1]=os.y,s[5]=Zo.y,s[9]=Xn.y,s[2]=os.z,s[6]=Zo.z,s[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],l=n[4],c=n[8],o=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],M=n[3],A=n[7],_=n[11],E=n[15],w=s[0],C=s[4],x=s[8],b=s[12],S=s[1],P=s[5],N=s[9],z=s[13],F=s[2],k=s[6],L=s[10],U=s[14],W=s[3],B=s[7],X=s[11],j=s[15];return r[0]=a*w+l*S+c*F+o*W,r[4]=a*C+l*P+c*k+o*B,r[8]=a*x+l*N+c*L+o*X,r[12]=a*b+l*z+c*U+o*j,r[1]=h*w+d*S+u*F+f*W,r[5]=h*C+d*P+u*k+f*B,r[9]=h*x+d*N+u*L+f*X,r[13]=h*b+d*z+u*U+f*j,r[2]=p*w+v*S+g*F+m*W,r[6]=p*C+v*P+g*k+m*B,r[10]=p*x+v*N+g*L+m*X,r[14]=p*b+v*z+g*U+m*j,r[3]=M*w+A*S+_*F+E*W,r[7]=M*C+A*P+_*k+E*B,r[11]=M*x+A*N+_*L+E*X,r[15]=M*b+A*z+_*U+E*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],l=e[5],c=e[9],o=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],v=e[7],g=e[11],m=e[15],M=c*f-o*u,A=l*f-o*d,_=l*u-c*d,E=a*f-o*h,w=a*u-c*h,C=a*d-l*h;return t*(v*M-g*A+m*_)-n*(p*M-g*E+m*w)+s*(p*A-v*E+m*C)-r*(p*_-v*w+g*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],o=e[6],h=e[10];return t*(a*h-l*o)-n*(r*h-l*c)+s*(r*o-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],v=e[13],g=e[14],m=e[15],M=t*l-n*a,A=t*c-s*a,_=t*o-r*a,E=n*c-s*l,w=n*o-r*l,C=s*o-r*c,x=h*v-d*p,b=h*g-u*p,S=h*m-f*p,P=d*g-u*v,N=d*m-f*v,z=u*m-f*g,F=M*z-A*N+_*P+E*S-w*b+C*x;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/F;return e[0]=(l*z-c*N+o*P)*k,e[1]=(s*N-n*z-r*P)*k,e[2]=(v*C-g*w+m*E)*k,e[3]=(u*w-d*C-f*E)*k,e[4]=(c*S-a*z-o*b)*k,e[5]=(t*z-s*S+r*b)*k,e[6]=(g*_-p*C-m*A)*k,e[7]=(h*C-u*_+f*A)*k,e[8]=(a*N-l*S+o*x)*k,e[9]=(n*S-t*N-r*x)*k,e[10]=(p*w-v*_+m*M)*k,e[11]=(d*_-h*w-f*M)*k,e[12]=(l*b-a*P-c*x)*k,e[13]=(t*P-n*b+s*x)*k,e[14]=(v*A-p*E-g*M)*k,e[15]=(h*E-d*A+u*M)*k,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,l=e.y,c=e.z,o=r*a,h=r*l;return this.set(o*a+n,o*l-s*c,o*c+s*l,0,o*l+s*c,h*l+n,h*c-s*a,0,o*c-s*l,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,l=t._z,c=t._w,o=r+r,h=a+a,d=l+l,u=r*o,f=r*h,p=r*d,v=a*h,g=a*d,m=l*d,M=c*o,A=c*h,_=c*d,E=n.x,w=n.y,C=n.z;return s[0]=(1-(v+m))*E,s[1]=(f+_)*E,s[2]=(p-A)*E,s[3]=0,s[4]=(f-_)*w,s[5]=(1-(u+m))*w,s[6]=(g+M)*w,s[7]=0,s[8]=(p+A)*C,s[9]=(g-M)*C,s[10]=(1-(u+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=tr.set(s[0],s[1],s[2]).length(),l=tr.set(s[4],s[5],s[6]).length(),c=tr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),li.copy(this);let o=1/a,h=1/l,d=1/c;return li.elements[0]*=o,li.elements[1]*=o,li.elements[2]*=o,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=d,li.elements[9]*=d,li.elements[10]*=d,t.setFromRotationMatrix(li),n.x=a,n.y=l,n.z=c,this}makePerspective(e,t,n,s,r,a,l=di,c=!1){let o=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,v;if(c)p=r/(a-r),v=a*r/(a-r);else if(l===di)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(l===yr)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return o[0]=h,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=d,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=p,o[14]=v,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,s,r,a,l=di,c=!1){let o=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),p,v;if(c)p=1/(a-r),v=a/(a-r);else if(l===di)p=-2/(a-r),v=-(a+r)/(a-r);else if(l===yr)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return o[0]=h,o[4]=0,o[8]=0,o[12]=u,o[1]=0,o[5]=d,o[9]=0,o[13]=f,o[2]=0,o[6]=0,o[10]=p,o[14]=v,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},tr=new D,li=new nt,Rm=new D(0,0,0),Cm=new D(1,1,1),os=new D,Zo=new D,Xn=new D,df=new nt,ff=new On,Yn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],l=s[8],c=s[1],o=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,o),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(c,o)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,o),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,o),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return df.makeRotationFromQuaternion(e),this.setFromRotationMatrix(df,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ff.setFromEuler(this),this.setFromQuaternion(ff,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var xa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Pm=0,pf=new D,nr=new On,Gi=new nt,$o=new D,Kr=new D,Im=new D,Dm=new On,mf=new D(1,0,0),gf=new D(0,1,0),xf=new D(0,0,1),vf={type:"added"},Lm={type:"removed"},ir={type:"childadded",child:null},qh={type:"childremoved",child:null},Tt=class i extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Yn,n=new On,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new st}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(mf,e)}rotateY(e){return this.rotateOnAxis(gf,e)}rotateZ(e){return this.rotateOnAxis(xf,e)}translateOnAxis(e,t){return pf.copy(e).applyQuaternion(this.quaternion),this.position.add(pf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mf,e)}translateY(e){return this.translateOnAxis(gf,e)}translateZ(e){return this.translateOnAxis(xf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$o.copy(e):$o.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Kr,$o,this.up):Gi.lookAt($o,Kr,this.up),this.quaternion.setFromRotationMatrix(Gi),s&&(Gi.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(Gi),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vf),ir.child=e,this.dispatchEvent(ir),ir.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lm),qh.child=e,this.dispatchEvent(qh),qh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vf),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,Im),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,Dm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let o=0,h=c.length;o<h;o++){let d=c[o];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,o=this.material.length;c<o;c++)l.push(r(e.materials,this.material[c]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(e.animations,c))}}if(t){let l=a(e.geometries),c=a(e.materials),o=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),p=a(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),o.length>0&&(n.textures=o),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(l){let c=[];for(let o in l){let h=l[o];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Tt.DEFAULT_UP=new D(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var He=class extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nm={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,l=this._targetRay,c=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),m=this._getHandJoint(o,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=o.joints["index-finger-tip"],d=o.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;o.inputState.pinching&&u>f+p?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&u<=f-p&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Nm)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new He;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function Yh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=Em(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Yh(a,r,e+1/3),this.g=Yh(a,r,e),this.b=Yh(a,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let n=Tp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return dt.workingToColorSpace(Sn.copy(this),e),Math.round(pt(Sn.r*255,0,255))*65536+Math.round(pt(Sn.g*255,0,255))*256+Math.round(pt(Sn.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Sn.copy(this),t);let n=Sn.r,s=Sn.g,r=Sn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),c,o,h=(l+a)/2;if(l===a)c=0,o=0;else{let d=a-l;switch(o=h<=.5?d/(a+l):d/(2-a-l),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=o,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Ut){dt.workingToColorSpace(Sn.copy(this),e);let t=Sn.r,n=Sn.g,s=Sn.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+t,ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL(Jo);let n=Hh(ls.h,Jo.h,t),s=Hh(ls.s,Jo.s,t),r=Hh(ls.l,Jo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new fe;fe.NAMES=Tp;var va=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new fe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Bs=class extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ci=new D,Wi=new D,Zh=new D,Xi=new D,sr=new D,rr=new D,_f=new D,$h=new D,Jh=new D,Kh=new D,jh=new Ct,Qh=new Ct,eu=new Ct,Zi=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ci.subVectors(e,t),s.cross(ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ci.subVectors(s,t),Wi.subVectors(n,t),Zh.subVectors(e,t);let a=ci.dot(ci),l=ci.dot(Wi),c=ci.dot(Zh),o=Wi.dot(Wi),h=Wi.dot(Zh),d=a*o-l*l;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(o*c-l*h)*u,p=(a*h-l*c)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,n,s,r,a,l,c){return this.getBarycoord(e,t,n,s,Xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xi.x),c.addScaledVector(a,Xi.y),c.addScaledVector(l,Xi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return jh.setScalar(0),Qh.setScalar(0),eu.setScalar(0),jh.fromBufferAttribute(e,t),Qh.fromBufferAttribute(e,n),eu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(jh,r.x),a.addScaledVector(Qh,r.y),a.addScaledVector(eu,r.z),a}static isFrontFacing(e,t,n,s){return ci.subVectors(n,t),Wi.subVectors(e,t),ci.cross(Wi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),ci.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,l;sr.subVectors(s,n),rr.subVectors(r,n),$h.subVectors(e,n);let c=sr.dot($h),o=rr.dot($h);if(c<=0&&o<=0)return t.copy(n);Jh.subVectors(e,s);let h=sr.dot(Jh),d=rr.dot(Jh);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*o;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(sr,a);Kh.subVectors(e,r);let f=sr.dot(Kh),p=rr.dot(Kh);if(p>=0&&f<=p)return t.copy(r);let v=f*o-c*p;if(v<=0&&o>=0&&p<=0)return l=o/(o-p),t.copy(n).addScaledVector(rr,l);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return _f.subVectors(r,s),l=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(_f,l);let m=1/(g+v+u);return a=v*m,l=u*m,t.copy(n).addScaledVector(sr,a).addScaledVector(rr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fi=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(r,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ko.copy(n.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),jo.subVectors(this.max,jr),ar.subVectors(e.a,jr),or.subVectors(e.b,jr),lr.subVectors(e.c,jr),cs.subVectors(or,ar),hs.subVectors(lr,or),Is.subVectors(ar,lr);let t=[0,-cs.z,cs.y,0,-hs.z,hs.y,0,-Is.z,Is.y,cs.z,0,-cs.x,hs.z,0,-hs.x,Is.z,0,-Is.x,-cs.y,cs.x,0,-hs.y,hs.x,0,-Is.y,Is.x,0];return!tu(t,ar,or,lr,jo)||(t=[1,0,0,0,1,0,0,0,1],!tu(t,ar,or,lr,jo))?!1:(Qo.crossVectors(cs,hs),t=[Qo.x,Qo.y,Qo.z],tu(t,ar,or,lr,jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},qi=[new D,new D,new D,new D,new D,new D,new D,new D],hi=new D,Ko=new fi,ar=new D,or=new D,lr=new D,cs=new D,hs=new D,Is=new D,jr=new D,jo=new D,Qo=new D,Ds=new D;function tu(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ds.fromArray(i,r);let l=s.x*Math.abs(Ds.x)+s.y*Math.abs(Ds.y)+s.z*Math.abs(Ds.z),c=e.dot(Ds),o=t.dot(Ds),h=n.dot(Ds);if(Math.max(-Math.max(c,o,h),Math.min(c,o,h))>l)return!1}return!0}var nn=new D,el=new le,Um=0,gt=class extends Ai{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Um++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gu,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)el.fromBufferAttribute(this,t),el.applyMatrix3(e),this.setXY(t,el.x,el.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var _a=class extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ya=class extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Fm=new fi,Qr=new D,nu=new D,pi=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Fm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);let t=Qr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Qr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(nu)),this.expandByPoint(Qr.copy(e.center).sub(nu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Bm=0,ni=new nt,iu=new Tt,cr=new D,qn=new fi,ea=new fi,fn=new D,St=class i extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bm(e)?ya:_a)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return iu.lookAt(e),iu.updateMatrix(),this.applyMatrix4(iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];qn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let l=t[r];ea.setFromBufferAttribute(l),this.morphTargetsRelative?(fn.addVectors(qn.min,ea.min),qn.expandByPoint(fn),fn.addVectors(qn.max,ea.max),qn.expandByPoint(fn)):(qn.expandByPoint(ea.min),qn.expandByPoint(ea.max))}qn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)fn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(fn));if(t)for(let r=0,a=t.length;r<a;r++){let l=t[r],c=this.morphTargetsRelative;for(let o=0,h=l.count;o<h;o++)fn.fromBufferAttribute(l,o),c&&(cr.fromBufferAttribute(e,o),fn.add(cr)),s=Math.max(s,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new gt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let x=0;x<n.count;x++)l[x]=new D,c[x]=new D;let o=new D,h=new D,d=new D,u=new le,f=new le,p=new le,v=new D,g=new D;function m(x,b,S){o.fromBufferAttribute(n,x),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,S),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,b),p.fromBufferAttribute(r,S),h.sub(o),d.sub(o),f.sub(u),p.sub(u);let P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(P),l[x].add(v),l[b].add(v),l[S].add(v),c[x].add(g),c[b].add(g),c[S].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,b=M.length;x<b;++x){let S=M[x],P=S.start,N=S.count;for(let z=P,F=P+N;z<F;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let A=new D,_=new D,E=new D,w=new D;function C(x){E.fromBufferAttribute(s,x),w.copy(E);let b=l[x];A.copy(b),A.sub(E.multiplyScalar(E.dot(b))).normalize(),_.crossVectors(w,b);let P=_.dot(c[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,P)}for(let x=0,b=M.length;x<b;++x){let S=M[x],P=S.start,N=S.count;for(let z=P,F=P+N;z<F;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,a=new D,l=new D,c=new D,o=new D,h=new D,d=new D;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),v=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,v),o.fromBufferAttribute(n,g),l.add(h),c.add(h),o.add(h),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,o.x,o.y,o.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(l,c){let o=l.array,h=l.itemSize,d=l.normalized,u=new o.constructor(c.length*h),f=0,p=0;for(let v=0,g=c.length;v<g;v++){l.isInterleavedBufferAttribute?f=c[v]*l.data.stride+l.offset:f=c[v]*h;for(let m=0;m<h;m++)u[p++]=o[f++]}return new gt(u,h,d)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let c=s[l],o=e(c,n);t.setAttribute(l,o)}let r=this.morphAttributes;for(let l in r){let c=[],o=r[l];for(let h=0,d=o.length;h<d;h++){let u=o[h],f=e(u,n);c.push(f)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let o=a[l];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let o in c)c[o]!==void 0&&(e[o]=c[o]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let o=n[c];e.data.attributes[c]=o.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let o=this.morphAttributes[c],h=[];for(let d=0,u=o.length;d<u;d++){let f=o[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let o in s){let h=s[o];this.setAttribute(o,h.clone(t))}let r=e.morphAttributes;for(let o in r){let h=[],d=r[o];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[o]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let o=0,h=a.length;o<h;o++){let d=a[o];this.addGroup(d.start,d.count,d.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ma=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gu,this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Rn=new D,Er=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ei(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){pa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){pa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},su=new D,Om=new D,zm=new st,ui=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=su.subVectors(n,t).cross(Om.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(su),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||zm.getNormalMatrix(e),s=this.coplanarPoint(su).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},km=0,mi=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=Ii,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lu,this.blendDst=Nu,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sl,this.stencilZFail=Sl,this.stencilZPass=Sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let c=r[l];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ui().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},zn=class extends mi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hr,ta=new D,ur=new D,dr=new D,fr=new le,na=new le,Ap=new nt,tl=new D,ia=new D,nl=new D,yf=new le,ru=new le,Mf=new le,Zn=class extends Tt{constructor(e=new zn){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new St;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ma(t,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new Er(n,3,0,!1)),hr.setAttribute("uv",new Er(n,2,3,!1))}this.geometry=hr,this.material=e,this.center=new le(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ur.setFromMatrixScale(this.matrixWorld),Ap.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ur.multiplyScalar(-dr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;il(tl.set(-.5,-.5,0),dr,a,ur,s,r),il(ia.set(.5,-.5,0),dr,a,ur,s,r),il(nl.set(.5,.5,0),dr,a,ur,s,r),yf.set(0,0),ru.set(1,0),Mf.set(1,1);let l=e.ray.intersectTriangle(tl,ia,nl,!1,ta);if(l===null&&(il(ia.set(-.5,.5,0),dr,a,ur,s,r),ru.set(0,1),l=e.ray.intersectTriangle(tl,nl,ia,!1,ta),l===null))return;let c=e.ray.origin.distanceTo(ta);c<e.near||c>e.far||t.push({distance:c,point:ta.clone(),uv:Zi.getInterpolation(ta,tl,ia,nl,yf,ru,Mf,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function il(i,e,t,n,s,r){fr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(na.x=r*fr.x-s*fr.y,na.y=s*fr.x+r*fr.y):na.copy(fr),i.copy(e),i.x+=na.x,i.y+=na.y,i.applyMatrix4(Ap)}var Yi=new D,au=new D,sl=new D,rl=new D,wr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){au.copy(e).add(t).multiplyScalar(.5),sl.copy(t).sub(e).normalize(),rl.copy(this.origin).sub(au);let r=e.distanceTo(t)*.5,a=-this.direction.dot(sl),l=rl.dot(this.direction),c=-rl.dot(sl),o=rl.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*c-l,u=a*l-c,p=r*h,d>=0)if(u>=-p)if(u<=p){let v=1/h;d*=v,u*=v,f=d*(d+a*u+2*l)+u*(a*d+u+2*c)+o}else u=r,d=Math.max(0,-(a*u+l)),f=-d*d+u*(u+2*c)+o;else u=-r,d=Math.max(0,-(a*u+l)),f=-d*d+u*(u+2*c)+o;else u<=-p?(d=Math.max(0,-(-a*r+l)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+o):u<=p?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+o):(d=Math.max(0,-(a*r+l)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+o);else u=a>0?-r:r,d=Math.max(0,-(a*u+l)),f=-d*d+u*(u+2*c)+o;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(au).addScaledVector(sl,u),f}intersectSphere(e,t){if(e.radius<0)return null;Yi.subVectors(e.center,this.origin);let n=Yi.dot(this.direction),s=Yi.dot(Yi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,l,c,o=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return o>=0?(n=(e.min.x-u.x)*o,s=(e.max.x-u.x)*o):(n=(e.max.x-u.x)*o,s=(e.min.x-u.x)*o),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(l=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(l=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,l=this.direction,c=l.x,o=l.y,h=l.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,p=t.x-a.x,v=t.y-a.y,g=t.z-a.z,m=n.x-a.x,M=n.y-a.y,A=n.z-a.z,_=Math.abs(c),E=Math.abs(o),w=Math.abs(h),C,x,b,S,P,N,z,F,k,L,U,W;if(_>=E&&_>=w?(b=c,N=d,k=p,W=m,c>=0?(C=o,x=h,S=u,P=f,z=v,F=g,L=M,U=A):(C=h,x=o,S=f,P=u,z=g,F=v,L=A,U=M)):E>=w?(b=o,N=u,k=v,W=M,o>=0?(C=h,x=c,S=f,P=d,z=g,F=p,L=A,U=m):(C=c,x=h,S=d,P=f,z=p,F=g,L=m,U=A)):(b=h,N=f,k=g,W=A,h>=0?(C=c,x=o,S=d,P=u,z=p,F=v,L=m,U=M):(C=o,x=c,S=u,P=d,z=v,F=p,L=M,U=m)),b===0)return null;let B=C/b,X=x/b,j=1/b,Re=S-B*N,ge=P-X*N,ie=z-B*k,_e=F-X*k,Le=L-B*W,K=U-X*W,re=Le*_e-K*ie,ve=Re*K-ge*Le,Ve=ie*ge-_e*Re;if(s){if(re<0||ve<0||Ve<0)return null}else if((re<0||ve<0||Ve<0)&&(re>0||ve>0||Ve>0))return null;let Me=re+ve+Ve;if(Me===0)return null;let Be=j*(re*N+ve*k+Ve*W);return(Me>0?Be<0:Be>0)?null:this.at(Be/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bf=new nt,Ls=new wr,al=new pi,Sf=new D,ol=new D,ll=new D,cl=new D,ou=new D,hl=new D,Ef=new D,ul=new D,he=class extends Tt{constructor(e=new St,t=new lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){hl.set(0,0,0);for(let c=0,o=r.length;c<o;c++){let h=l[c],d=r[c];h!==0&&(ou.fromBufferAttribute(d,e),a?hl.addScaledVector(ou,h):hl.addScaledVector(ou.sub(t),h))}t.add(hl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),al.copy(n.boundingSphere),al.applyMatrix4(r),Ls.copy(e.ray).recast(e.near),!(al.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(al,Sf)===null||Ls.origin.distanceToSquared(Sf)>(e.far-e.near)**2))&&(bf.copy(r).invert(),Ls.copy(e.ray).applyMatrix4(bf),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,o=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(l!==null)if(Array.isArray(a))for(let p=0,v=u.length;p<v;p++){let g=u[p],m=a[g.materialIndex],M=Math.max(g.start,f.start),A=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,E=A;_<E;_+=3){let w=l.getX(_),C=l.getX(_+1),x=l.getX(_+2);s=dl(this,m,e,n,o,h,d,w,C,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let M=l.getX(g),A=l.getX(g+1),_=l.getX(g+2);s=dl(this,a,e,n,o,h,d,M,A,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,v=u.length;p<v;p++){let g=u[p],m=a[g.materialIndex],M=Math.max(g.start,f.start),A=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,E=A;_<E;_+=3){let w=_,C=_+1,x=_+2;s=dl(this,m,e,n,o,h,d,w,C,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let M=g,A=g+1,_=g+2;s=dl(this,a,e,n,o,h,d,M,A,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Hm(i,e,t,n,s,r,a,l){let c;if(e.side===vn?c=n.intersectTriangle(a,r,s,!0,l):c=n.intersectTriangle(s,r,a,e.side===vs,l),c===null)return null;ul.copy(l),ul.applyMatrix4(i.matrixWorld);let o=t.ray.origin.distanceTo(ul);return o<t.near||o>t.far?null:{distance:o,point:ul.clone(),object:i}}function dl(i,e,t,n,s,r,a,l,c,o){i.getVertexPosition(l,ol),i.getVertexPosition(c,ll),i.getVertexPosition(o,cl);let h=Hm(i,e,t,n,ol,ll,cl,Ef);if(h){let d=new D;Zi.getBarycoord(Ef,ol,ll,cl,d),s&&(h.uv=Zi.getInterpolatedAttribute(s,l,c,o,d,new le)),r&&(h.uv1=Zi.getInterpolatedAttribute(r,l,c,o,d,new le)),a&&(h.normal=Zi.getInterpolatedAttribute(a,l,c,o,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:l,b:c,c:o,normal:new D,materialIndex:0};Zi.getNormal(ol,ll,cl,u.normal),h.face=u,h.barycoord=d}return h}var sa=new Ct,wf=new Ct,Tf=new Ct,Vm=new Ct,Af=new nt,fl=new D,lu=new pi,Rf=new nt,cu=new wr,ba=class extends he{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=mu,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fl),this.boundingBox.expandByPoint(fl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fl),this.boundingSphere.expandByPoint(fl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lu.copy(this.boundingSphere),lu.applyMatrix4(s),e.ray.intersectsSphere(lu)!==!1&&(Rf.copy(s).invert(),cu.copy(e.ray).applyMatrix4(Rf),!(this.boundingBox!==null&&cu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,cu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ct,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===mu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===up?this.bindMatrixInverse.copy(this.bindMatrix).invert():Je("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;wf.fromBufferAttribute(s.attributes.skinIndex,e),Tf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(sa.copy(t),t.set(0,0,0,0)):(sa.set(...t,1),t.set(0,0,0)),sa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Tf.getComponent(r);if(a!==0){let l=wf.getComponent(r);Af.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(Vm.copy(sa).applyMatrix4(Af),a)}}return t.isVector4&&(t.w=sa.w),t.applyMatrix4(this.bindMatrixInverse)}},Tr=class extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ri=class extends Cn{constructor(e=null,t=1,n=1,s,r,a,l,c,o=Kt,h=Kt,d,u){super(null,a,l,c,o,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Cf=new nt,Gm=new nt,Sa=class i{constructor(e=[],t=[]){this.uuid=wi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Je("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let l=e[r]?e[r].matrixWorld:Gm;Cf.multiplyMatrices(l,t[r]),Cf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ri(t,e,e,Pn,jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Je("Skeleton: No bone found with UUID:",r),a=new Tr),this.bones.push(a),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let l=n[s];e.boneInverses.push(l.toArray())}return e}},ds=class extends gt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},pr=new nt,Pf=new nt,pl=[],If=new fi,Wm=new nt,ra=new he,aa=new pi,fs=class extends he{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ds(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pr),If.copy(e.boundingBox).applyMatrix4(pr),this.boundingBox.union(If)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pr),aa.copy(e.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ra.geometry=this.geometry,ra.material=this.material,ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),aa.copy(this.boundingSphere),aa.applyMatrix4(n),e.ray.intersectsSphere(aa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pr),Pf.multiplyMatrices(n,pr),ra.matrixWorld=Pf,ra.raycast(e,pl);for(let a=0,l=pl.length;a<l;a++){let c=pl[a];c.instanceId=r,c.object=this,t.push(c)}pl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ds(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ri(new Float32Array(s*this.count),s,this.count,uc,jn));let r=this.morphTexture.source.data.data,a=0;for(let o=0;o<n.length;o++)a+=n[o];let l=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=l,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ns=new pi,Xm=new le(.5,.5),ml=new D,Ar=class{constructor(e=new ui,t=new ui,n=new ui,s=new ui,r=new ui,a=new ui){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=di,n=!1){let s=this.planes,r=e.elements,a=r[0],l=r[1],c=r[2],o=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],v=r[9],g=r[10],m=r[11],M=r[12],A=r[13],_=r[14],E=r[15];if(s[0].setComponents(o-a,f-h,m-p,E-M).normalize(),s[1].setComponents(o+a,f+h,m+p,E+M).normalize(),s[2].setComponents(o+l,f+d,m+v,E+A).normalize(),s[3].setComponents(o-l,f-d,m-v,E-A).normalize(),n)s[4].setComponents(c,u,g,_).normalize(),s[5].setComponents(o-c,f-u,m-g,E-_).normalize();else if(s[4].setComponents(o-c,f-u,m-g,E-_).normalize(),t===di)s[5].setComponents(o+c,f+u,m+g,E+_).normalize();else if(t===yr)s[5].setComponents(c,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){Ns.center.set(0,0,0);let t=Xm.distanceTo(e.center);return Ns.radius=.7071067811865476+t,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ml.x=s.normal.x>0?e.max.x:e.min.x,ml.y=s.normal.y>0?e.max.y:e.min.y,ml.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ml)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Fl=class extends mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Df=new nt,yu=new wr,gl=new pi,xl=new D,Ea=class extends Tt{constructor(e=new St,t=new Fl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gl.copy(n.boundingSphere),gl.applyMatrix4(s),gl.radius+=r,e.ray.intersectsSphere(gl)===!1)return;Df.copy(s).invert(),yu.copy(e.ray).applyMatrix4(Df);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,o=n.index,d=n.attributes.position;if(o!==null){let u=Math.max(0,a.start),f=Math.min(o.count,a.start+a.count);for(let p=u,v=f;p<v;p++){let g=o.getX(p);xl.fromBufferAttribute(d,g),Lf(xl,g,c,s,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,v=f;p<v;p++)xl.fromBufferAttribute(d,p),Lf(xl,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Lf(i,e,t,n,s,r,a){let l=yu.distanceSqToPoint(i);if(l<t){let c=new D;yu.closestPointToPoint(i,c),c.applyMatrix4(n);let o=s.ray.origin.distanceTo(c);if(o<s.near||o>s.far)return;r.push({distance:o,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var wa=class extends Cn{constructor(e=[],t=_s,n,s,r,a,l,c,o,h){super(e,t,n,s,r,a,l,c,o,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},an=class extends Cn{constructor(e,t,n,s,r,a,l,c,o){super(e,t,n,s,r,a,l,c,o),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ci=class extends Cn{constructor(e,t,n=xi,s,r,a,l=Kt,c=Kt,o,h=Ti,d=1){if(h!==Ti&&h!==Di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,l,c,h,n,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Bl=class extends Ci{constructor(e,t=xi,n=_s,s,r,a=Kt,l=Kt,c,o=Ti){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,l,c,o),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ta=class extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},it=class i extends St{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],o=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(d,2));function p(v,g,m,M,A,_,E,w,C,x,b){let S=_/C,P=E/x,N=_/2,z=E/2,F=w/2,k=C+1,L=x+1,U=0,W=0,B=new D;for(let X=0;X<L;X++){let j=X*P-z;for(let Re=0;Re<k;Re++){let ge=Re*S-N;B[v]=ge*M,B[g]=j*A,B[m]=F,o.push(B.x,B.y,B.z),B[v]=0,B[g]=0,B[m]=w>0?1:-1,h.push(B.x,B.y,B.z),d.push(Re/C),d.push(1-X/x),U+=1}}for(let X=0;X<x;X++)for(let j=0;j<C;j++){let Re=u+j+k*X,ge=u+j+k*(X+1),ie=u+(j+1)+k*(X+1),_e=u+(j+1)+k*X;c.push(Re,ge,_e),c.push(ge,ie,_e),W+=6}l.addGroup(f,W,b),f+=W,u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Aa=class i extends St{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],l=[],c=[],o=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,p=n*2+r,v=s+1,g=new D,m=new D;for(let M=0;M<=p;M++){let A=0,_=0,E=0,w=0;if(M<=n){let b=M/n,S=b*Math.PI/2;_=-h-e*Math.cos(S),E=e*Math.sin(S),w=-e*Math.cos(S),A=b*d}else if(M<=n+r){let b=(M-n)/r;_=-h+b*t,E=e,w=0,A=d+b*u}else{let b=(M-n-r)/n,S=b*Math.PI/2;_=h+e*Math.sin(S),E=e*Math.cos(S),w=e*Math.sin(S),A=d+u+b*d}let C=Math.max(0,Math.min(1,A/f)),x=0;M===0?x=.5/s:M===p&&(x=-.5/s);for(let b=0;b<=s;b++){let S=b/s,P=S*Math.PI*2,N=Math.sin(P),z=Math.cos(P);m.x=-E*z,m.y=_,m.z=E*N,l.push(m.x,m.y,m.z),g.set(-E*z,w,E*N),g.normalize(),c.push(g.x,g.y,g.z),o.push(S+x,C)}if(M>0){let b=(M-1)*v;for(let S=0;S<s;S++){let P=b+S,N=b+S+1,z=M*v+S,F=M*v+S+1;a.push(P,N,z),a.push(N,F,z)}}}this.setIndex(a),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Os=class i extends St{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],l=[],c=[],o=new D,h=new le;a.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;o.x=e*Math.cos(f),o.y=e*Math.sin(f),a.push(o.x,o.y,o.z),l.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},At=class i extends St{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:c};let o=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,v=[],g=n/2,m=0;M(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(f,2));function M(){let _=new D,E=new D,w=0,C=(t-e)/n;for(let x=0;x<=r;x++){let b=[],S=x/r,P=S*(t-e)+e;for(let N=0;N<=s;N++){let z=N/s,F=z*c+l,k=Math.sin(F),L=Math.cos(F);E.x=P*k,E.y=-S*n+g,E.z=P*L,d.push(E.x,E.y,E.z),_.set(k,C,L).normalize(),u.push(_.x,_.y,_.z),f.push(z,1-S),b.push(p++)}v.push(b)}for(let x=0;x<s;x++)for(let b=0;b<r;b++){let S=v[b][x],P=v[b+1][x],N=v[b+1][x+1],z=v[b][x+1];(e>0||b!==0)&&(h.push(S,P,z),w+=3),(t>0||b!==r-1)&&(h.push(P,N,z),w+=3)}o.addGroup(m,w,0),m+=w}function A(_){let E=p,w=new le,C=new D,x=0,b=_===!0?e:t,S=_===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,g*S,0),u.push(0,S,0),f.push(.5,.5),p++;let P=p;for(let N=0;N<=s;N++){let F=N/s*c+l,k=Math.cos(F),L=Math.sin(F);C.x=b*L,C.y=g*S,C.z=b*k,d.push(C.x,C.y,C.z),u.push(0,S,0),w.x=k*.5+.5,w.y=L*.5*S+.5,f.push(w.x,w.y),p++}for(let N=0;N<s;N++){let z=E+N,F=P+N;_===!0?h.push(F,F+1,z):h.push(F+1,F,z),x+=3}o.addGroup(m,x,_===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ji=class i extends At{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,l=Math.PI*2){super(0,e,t,n,s,r,a,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rr=class i extends St{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];l(s),o(n),h(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(M){let A=new D,_=new D,E=new D;for(let w=0;w<t.length;w+=3)f(t[w+0],A),f(t[w+1],_),f(t[w+2],E),c(A,_,E,M)}function c(M,A,_,E){let w=E+1,C=[];for(let x=0;x<=w;x++){C[x]=[];let b=M.clone().lerp(_,x/w),S=A.clone().lerp(_,x/w),P=w-x;for(let N=0;N<=P;N++)N===0&&x===w?C[x][N]=b:C[x][N]=b.clone().lerp(S,N/P)}for(let x=0;x<w;x++)for(let b=0;b<2*(w-x)-1;b++){let S=Math.floor(b/2);b%2===0?(u(C[x][S+1]),u(C[x+1][S]),u(C[x][S])):(u(C[x][S+1]),u(C[x+1][S+1]),u(C[x+1][S]))}}function o(M){let A=new D;for(let _=0;_<r.length;_+=3)A.x=r[_+0],A.y=r[_+1],A.z=r[_+2],A.normalize().multiplyScalar(M),r[_+0]=A.x,r[_+1]=A.y,r[_+2]=A.z}function h(){let M=new D;for(let A=0;A<r.length;A+=3){M.x=r[A+0],M.y=r[A+1],M.z=r[A+2];let _=g(M)/2/Math.PI+.5,E=m(M)/Math.PI+.5;a.push(_,1-E)}p(),d()}function d(){for(let M=0;M<a.length;M+=6){let A=a[M+0],_=a[M+2],E=a[M+4],w=Math.max(A,_,E),C=Math.min(A,_,E);w>.9&&C<.1&&(A<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),E<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,A){let _=M*3;A.x=e[_+0],A.y=e[_+1],A.z=e[_+2]}function p(){let M=new D,A=new D,_=new D,E=new D,w=new le,C=new le,x=new le;for(let b=0,S=0;b<r.length;b+=9,S+=6){M.set(r[b+0],r[b+1],r[b+2]),A.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),w.set(a[S+0],a[S+1]),C.set(a[S+2],a[S+3]),x.set(a[S+4],a[S+5]),E.copy(M).add(A).add(_).divideScalar(3);let P=g(E);v(w,S+0,M,P),v(C,S+2,A,P),v(x,S+4,_,P)}}function v(M,A,_,E){E<0&&M.x===1&&(a[A]=M.x-1),_.x===0&&_.z===0&&(a[A]=E/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Ra=class i extends Rr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var $n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let l=0,c=r-1,o;for(;l<=c;)if(s=Math.floor(l+(c-l)/2),o=n[s]-a,o<0)l=s+1;else if(o>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),l=this.getPoint(r),c=t||(a.isVector2?new le:new D);return c.copy(l).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],a=[],l=new D,c=new nt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new D)}r[0]=new D,a[0]=new D;let o=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=o&&(o=h,n.set(1,0,0)),d<=o&&(o=d,n.set(0,1,0)),u<=o&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),l.crossVectors(s[f-1],s[f]),l.length()>Number.EPSILON){l.normalize();let p=Math.acos(pt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(l,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(pt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(l.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Cr=class extends $n{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=l,this.aRotation=c}getPoint(e,t=new le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(l),o=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=o-this.aY;c=u*h-f*d+this.aX,o=u*d+f*h+this.aY}return n.set(c,o)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ol=class extends Cr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Xu(){let i=0,e=0,t=0,n=0;function s(r,a,l,c){i=r,e=l,t=-3*r+3*a-2*l-c,n=2*r-2*a+l+c}return{initCatmullRom:function(r,a,l,c,o){s(a,l,o*(l-r),o*(c-a))},initNonuniformCatmullRom:function(r,a,l,c,o,h,d){let u=(a-r)/o-(l-r)/(o+h)+(l-a)/h,f=(l-a)/h-(c-a)/(h+d)+(c-l)/d;u*=h,f*=h,s(a,l,u,f)},calc:function(r){let a=r*r,l=a*r;return i+e*r+t*a+n*l}}}var Nf=new D,Uf=new D,hu=new Xu,uu=new Xu,du=new Xu,zl=class extends $n{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,l=Math.floor(a),c=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:c===0&&l===r-1&&(l=r-2,c=1);let o,h;this.closed||l>0?o=s[(l-1)%r]:(Uf.subVectors(s[0],s[1]).add(s[0]),o=Uf);let d=s[l%r],u=s[(l+1)%r];if(this.closed||l+2<r?h=s[(l+2)%r]:(Nf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Nf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(o.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),hu.initNonuniformCatmullRom(o.x,d.x,u.x,h.x,p,v,g),uu.initNonuniformCatmullRom(o.y,d.y,u.y,h.y,p,v,g),du.initNonuniformCatmullRom(o.z,d.z,u.z,h.z,p,v,g)}else this.curveType==="catmullrom"&&(hu.initCatmullRom(o.x,d.x,u.x,h.x,this.tension),uu.initCatmullRom(o.y,d.y,u.y,h.y,this.tension),du.initCatmullRom(o.z,d.z,u.z,h.z,this.tension));return n.set(hu.calc(c),uu.calc(c),du.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ff(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,l=i*i,c=i*l;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*l+r*i+t}function qm(i,e){let t=1-i;return t*t*e}function Ym(i,e){return 2*(1-i)*i*e}function Zm(i,e){return i*i*e}function la(i,e,t,n){return qm(i,e)+Ym(i,t)+Zm(i,n)}function $m(i,e){let t=1-i;return t*t*t*e}function Jm(i,e){let t=1-i;return 3*t*t*i*e}function Km(i,e){return 3*(1-i)*i*i*e}function jm(i,e){return i*i*i*e}function ca(i,e,t,n,s){return $m(i,e)+Jm(i,t)+Km(i,n)+jm(i,s)}var Ca=class extends $n{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(ca(e,s.x,r.x,a.x,l.x),ca(e,s.y,r.y,a.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},kl=class extends $n{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(ca(e,s.x,r.x,a.x,l.x),ca(e,s.y,r.y,a.y,l.y),ca(e,s.z,r.z,a.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pa=class extends $n{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hl=class extends $n{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ia=class extends $n{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(la(e,s.x,r.x,a.x),la(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vl=class extends $n{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(la(e,s.x,r.x,a.x),la(e,s.y,r.y,a.y),la(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Da=class extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),l=r-a,c=s[a===0?a:a-1],o=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Ff(l,c.x,o.x,h.x,d.x),Ff(l,c.y,o.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},Mu=Object.freeze({__proto__:null,ArcCurve:Ol,CatmullRomCurve3:zl,CubicBezierCurve:Ca,CubicBezierCurve3:kl,EllipseCurve:Cr,LineCurve:Pa,LineCurve3:Hl,QuadraticBezierCurve:Ia,QuadraticBezierCurve3:Vl,SplineCurve:Da}),Gl=class extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,l=this.curves[r],c=l.getLength(),o=c===0?0:1-a/c;return l.getPointAt(o,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],l=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(l);for(let o=0;o<c.length;o++){let h=c[o];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Mu[s.type]().fromJSON(s))}return this}},La=class extends Gl{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Pa(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ia(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let l=new Ca(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Da(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+l,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,l,c){let o=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+o,t+h,n,s,r,a,l,c),this}absellipse(e,t,n,s,r,a,l,c){let o=new Cr(e,t,n,s,r,a,l,c);if(this.curves.length>0){let d=o.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(o);let h=o.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Pr=class extends La{constructor(e){super(e),this.uuid=wi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new La().fromJSON(s))}return this}};function Qm(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Rp(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let l,c,o;if(n&&(r=sg(i,e,r,t)),i.length>80*t){l=i[0],c=i[1];let h=l,d=c;for(let u=t;u<s;u+=t){let f=i[u],p=i[u+1];f<l&&(l=f),p<c&&(c=p),f>h&&(h=f),p>d&&(d=p)}o=Math.max(h-l,d-c),o=o!==0?32767/o:0}return Na(r,a,t,l,c,o,0),a}function Rp(i,e,t,n,s){let r;if(s===mg(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Bf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Bf(a/n|0,i[a],i[a+1],r);return r&&Ir(r,r.next)&&(Fa(r),r=r.next),r}function zs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ir(t,t.next)||qt(t.prev,t,t.next)===0)){if(Fa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Na(i,e,t,n,s,r,a){if(!i)return;!a&&r&&cg(i,n,s,r);let l=i;for(;i.prev!==i.next;){let c=i.prev,o=i.next;if(r?tg(i,n,s,r):eg(i)){e.push(c.i,i.i,o.i),Fa(i),i=o.next,l=o.next;continue}if(i=o,i===l){a?a===1?(i=ng(zs(i),e),Na(i,e,t,n,s,r,2)):a===2&&ig(i,e,t,n,s,r):Na(zs(i),e,t,n,s,r,1);break}}}function eg(i){let e=i.prev,t=i,n=i.next;if(qt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,l=e.y,c=t.y,o=n.y,h=Math.min(s,r,a),d=Math.min(l,c,o),u=Math.max(s,r,a),f=Math.max(l,c,o),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&oa(s,l,r,c,a,o,p.x,p.y)&&qt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function tg(i,e,t,n){let s=i.prev,r=i,a=i.next;if(qt(s,r,a)>=0)return!1;let l=s.x,c=r.x,o=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(l,c,o),p=Math.min(h,d,u),v=Math.max(l,c,o),g=Math.max(h,d,u),m=bu(f,p,e,t,n),M=bu(v,g,e,t,n),A=i.prevZ,_=i.nextZ;for(;A&&A.z>=m&&_&&_.z<=M;){if(A.x>=f&&A.x<=v&&A.y>=p&&A.y<=g&&A!==s&&A!==a&&oa(l,h,c,d,o,u,A.x,A.y)&&qt(A.prev,A,A.next)>=0||(A=A.prevZ,_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==s&&_!==a&&oa(l,h,c,d,o,u,_.x,_.y)&&qt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;A&&A.z>=m;){if(A.x>=f&&A.x<=v&&A.y>=p&&A.y<=g&&A!==s&&A!==a&&oa(l,h,c,d,o,u,A.x,A.y)&&qt(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==s&&_!==a&&oa(l,h,c,d,o,u,_.x,_.y)&&qt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ng(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ir(n,s)&&Pp(n,t,t.next,s)&&Ua(n,s)&&Ua(s,n)&&(e.push(n.i,t.i,s.i),Fa(t),Fa(t.next),t=i=s),t=t.next}while(t!==i);return zs(t)}function ig(i,e,t,n,s,r){let a=i;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&dg(a,l)){let c=Ip(a,l);a=zs(a,a.next),c=zs(c,c.next),Na(a,e,t,n,s,r,0),Na(c,e,t,n,s,r,0);return}l=l.next}a=a.next}while(a!==i)}function sg(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let l=e[r]*n,c=r<a-1?e[r+1]*n:i.length,o=Rp(i,l,c,n,!1);o===o.next&&(o.steiner=!0),s.push(ug(o))}s.sort(rg);for(let r=0;r<s.length;r++)t=ag(s[r],t);return t}function rg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ag(i,e){let t=og(i,e);if(!t)return e;let n=Ip(t,i);return zs(n,n.next),zs(t,t.next)}function og(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Ir(i,t))return t;do{if(Ir(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let l=a,c=a.x,o=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Cp(s<o?n:r,s,c,o,s<o?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Ua(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&lg(a,t)))&&(a=t,h=d)}t=t.next}while(t!==l);return a}function lg(i,e){return qt(i.prev,i,e.prev)<0&&qt(e.next,i,i.next)<0}function cg(i,e,t,n){let s=i;do s.z===0&&(s.z=bu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,hg(s)}function hg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,l=0;for(let o=0;o<t&&(l++,a=a.nextZ,!!a);o++);let c=t;for(;l>0||c>0&&a;)l!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,l--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function bu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ug(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Cp(i,e,t,n,s,r,a,l){return(s-a)*(e-l)>=(i-a)*(r-l)&&(i-a)*(n-l)>=(t-a)*(e-l)&&(t-a)*(r-l)>=(s-a)*(n-l)}function oa(i,e,t,n,s,r,a,l){return!(i===a&&e===l)&&Cp(i,e,t,n,s,r,a,l)}function dg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!fg(i,e)&&(Ua(i,e)&&Ua(e,i)&&pg(i,e)&&(qt(i.prev,i,e.prev)||qt(i,e.prev,e))||Ir(i,e)&&qt(i.prev,i,i.next)>0&&qt(e.prev,e,e.next)>0)}function qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ir(i,e){return i.x===e.x&&i.y===e.y}function Pp(i,e,t,n){let s=_l(qt(i,e,t)),r=_l(qt(i,e,n)),a=_l(qt(t,n,i)),l=_l(qt(t,n,e));return!!(s!==r&&a!==l||s===0&&vl(i,t,e)||r===0&&vl(i,n,e)||a===0&&vl(t,i,n)||l===0&&vl(t,e,n))}function vl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function _l(i){return i>0?1:i<0?-1:0}function fg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Pp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ua(i,e){return qt(i.prev,i,i.next)<0?qt(i,e,i.next)>=0&&qt(i,i.prev,e)>=0:qt(i,e,i.prev)<0||qt(i,i.next,e)<0}function pg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ip(i,e){let t=Su(i.i,i.x,i.y),n=Su(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Bf(i,e,t,n){let s=Su(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Su(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mg(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Eu=class{static triangulate(e,t,n=2){return Qm(e,t,n)}},Us=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Of(e),zf(n,e);let a=e.length;t.forEach(Of);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,zf(n,t[c]);let l=Eu.triangulate(n,s);for(let c=0;c<l.length;c+=3)r.push(l.slice(c,c+3));return r}};function Of(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function zf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ba=class i extends St{constructor(e=new Pr([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let l=0,c=e.length;l<c;l++){let o=e[l];a(o)}this.setAttribute("position",new xt(s,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function a(l){let c=[],o=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:gg,A,_=!1,E,w,C,x;if(m){A=m.getSpacedPoints(h),_=!0,u=!1;let se=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(h,se),w=new D,C=new D,x=new D}u||(g=0,f=0,p=0,v=0);let b=l.extractPoints(o),S=b.shape,P=b.holes;if(!Us.isClockWise(S)){S=S.reverse();for(let se=0,ce=P.length;se<ce;se++){let de=P[se];Us.isClockWise(de)&&(P[se]=de.reverse())}}function z(se){let de=10000000000000001e-36,pe=se[0];for(let ye=1;ye<=se.length;ye++){let $e=ye%se.length,qe=se[$e],Ke=qe.x-pe.x,et=qe.y-pe.y,O=Ke*Ke+et*et,_t=Math.max(Math.abs(qe.x),Math.abs(qe.y),Math.abs(pe.x),Math.abs(pe.y)),ot=de*_t*_t;if(O<=ot){se.splice($e,1),ye--;continue}pe=qe}}z(S),P.forEach(z);let F=P.length,k=S;for(let se=0;se<F;se++){let ce=P[se];S=S.concat(ce)}function L(se,ce,de){return ce||Qe("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(ce,de)}let U=S.length;function W(se,ce,de){let pe,ye,$e,qe=se.x-ce.x,Ke=se.y-ce.y,et=de.x-se.x,O=de.y-se.y,_t=qe*qe+Ke*Ke,ot=qe*O-Ke*et;if(Math.abs(ot)>Number.EPSILON){let I=Math.sqrt(_t),y=Math.sqrt(et*et+O*O),G=ce.x-Ke/I,Y=ce.y+qe/I,te=de.x-O/y,me=de.y+et/y,be=((te-G)*O-(me-Y)*et)/(qe*O-Ke*et);pe=G+qe*be-se.x,ye=Y+Ke*be-se.y;let ne=pe*pe+ye*ye;if(ne<=2)return new le(pe,ye);$e=Math.sqrt(ne/2)}else{let I=!1;qe>Number.EPSILON?et>Number.EPSILON&&(I=!0):qe<-Number.EPSILON?et<-Number.EPSILON&&(I=!0):Math.sign(Ke)===Math.sign(O)&&(I=!0),I?(pe=-Ke,ye=qe,$e=Math.sqrt(_t)):(pe=qe,ye=Ke,$e=Math.sqrt(_t/2))}return new le(pe/$e,ye/$e)}let B=[];for(let se=0,ce=k.length,de=ce-1,pe=se+1;se<ce;se++,de++,pe++)de===ce&&(de=0),pe===ce&&(pe=0),B[se]=W(k[se],k[de],k[pe]);let X=[],j,Re=B.concat();for(let se=0,ce=F;se<ce;se++){let de=P[se];j=[];for(let pe=0,ye=de.length,$e=ye-1,qe=pe+1;pe<ye;pe++,$e++,qe++)$e===ye&&($e=0),qe===ye&&(qe=0),j[pe]=W(de[pe],de[$e],de[qe]);X.push(j),Re=Re.concat(j)}let ge;if(g===0)ge=Us.triangulateShape(k,P);else{let se=[],ce=[];for(let de=0;de<g;de++){let pe=de/g,ye=f*Math.cos(pe*Math.PI/2),$e=p*Math.sin(pe*Math.PI/2)+v;for(let qe=0,Ke=k.length;qe<Ke;qe++){let et=L(k[qe],B[qe],$e);ve(et.x,et.y,-ye),pe===0&&se.push(et)}for(let qe=0,Ke=F;qe<Ke;qe++){let et=P[qe];j=X[qe];let O=[];for(let _t=0,ot=et.length;_t<ot;_t++){let I=L(et[_t],j[_t],$e);ve(I.x,I.y,-ye),pe===0&&O.push(I)}pe===0&&ce.push(O)}}ge=Us.triangulateShape(se,ce)}let ie=ge.length,_e=p+v;for(let se=0;se<U;se++){let ce=u?L(S[se],Re[se],_e):S[se];_?(C.copy(E.normals[0]).multiplyScalar(ce.x),w.copy(E.binormals[0]).multiplyScalar(ce.y),x.copy(A[0]).add(C).add(w),ve(x.x,x.y,x.z)):ve(ce.x,ce.y,0)}for(let se=1;se<=h;se++)for(let ce=0;ce<U;ce++){let de=u?L(S[ce],Re[ce],_e):S[ce];_?(C.copy(E.normals[se]).multiplyScalar(de.x),w.copy(E.binormals[se]).multiplyScalar(de.y),x.copy(A[se]).add(C).add(w),ve(x.x,x.y,x.z)):ve(de.x,de.y,d/h*se)}for(let se=g-1;se>=0;se--){let ce=se/g,de=f*Math.cos(ce*Math.PI/2),pe=p*Math.sin(ce*Math.PI/2)+v;for(let ye=0,$e=k.length;ye<$e;ye++){let qe=L(k[ye],B[ye],pe);ve(qe.x,qe.y,d+de)}for(let ye=0,$e=P.length;ye<$e;ye++){let qe=P[ye];j=X[ye];for(let Ke=0,et=qe.length;Ke<et;Ke++){let O=L(qe[Ke],j[Ke],pe);_?ve(O.x,O.y+A[h-1].y,A[h-1].x+de):ve(O.x,O.y,d+de)}}}Le(),K();function Le(){let se=s.length/3;if(u){let ce=0,de=U*ce;for(let pe=0;pe<ie;pe++){let ye=ge[pe];Ve(ye[2]+de,ye[1]+de,ye[0]+de)}ce=h+g*2,de=U*ce;for(let pe=0;pe<ie;pe++){let ye=ge[pe];Ve(ye[0]+de,ye[1]+de,ye[2]+de)}}else{for(let ce=0;ce<ie;ce++){let de=ge[ce];Ve(de[2],de[1],de[0])}for(let ce=0;ce<ie;ce++){let de=ge[ce];Ve(de[0]+U*h,de[1]+U*h,de[2]+U*h)}}n.addGroup(se,s.length/3-se,0)}function K(){let se=s.length/3,ce=0;re(k,ce),ce+=k.length;for(let de=0,pe=P.length;de<pe;de++){let ye=P[de];re(ye,ce),ce+=ye.length}n.addGroup(se,s.length/3-se,1)}function re(se,ce){let de=se.length;for(;--de>=0;){let pe=de,ye=de-1;ye<0&&(ye=se.length-1);for(let $e=0,qe=h+g*2;$e<qe;$e++){let Ke=U*$e,et=U*($e+1),O=ce+pe+Ke,_t=ce+ye+Ke,ot=ce+ye+et,I=ce+pe+et;Me(O,_t,ot,I)}}}function ve(se,ce,de){c.push(se),c.push(ce),c.push(de)}function Ve(se,ce,de){Be(se),Be(ce),Be(de);let pe=s.length/3,ye=M.generateTopUV(n,s,pe-3,pe-2,pe-1);rt(ye[0]),rt(ye[1]),rt(ye[2])}function Me(se,ce,de,pe){Be(se),Be(ce),Be(pe),Be(ce),Be(de),Be(pe);let ye=s.length/3,$e=M.generateSideWallUV(n,s,ye-6,ye-3,ye-2,ye-1);rt($e[0]),rt($e[1]),rt($e[3]),rt($e[1]),rt($e[2]),rt($e[3])}function Be(se){s.push(c[se*3+0]),s.push(c[se*3+1]),s.push(c[se*3+2])}function rt(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return xg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let l=t[e.shapes[r]];n.push(l)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Mu[s.type]().fromJSON(s)),new i(n,e.options)}},gg={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],l=e[n*3],c=e[n*3+1],o=e[s*3],h=e[s*3+1];return[new le(r,a),new le(l,c),new le(o,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],l=e[t*3+1],c=e[t*3+2],o=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],p=e[s*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(l-h)<Math.abs(a-o)?[new le(a,1-c),new le(o,1-d),new le(u,1-p),new le(v,1-m)]:[new le(l,1-c),new le(h,1-d),new le(f,1-p),new le(g,1-m)]}};function xg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ks=class i extends Rr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Oa=class i extends Rr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},on=class i extends St{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,l=Math.floor(n),c=Math.floor(s),o=l+1,h=c+1,d=e/l,u=t/c,f=[],p=[],v=[],g=[];for(let m=0;m<h;m++){let M=m*u-a;for(let A=0;A<o;A++){let _=A*d-r;p.push(_,-M,0),v.push(0,0,1),g.push(A/l),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<l;M++){let A=M+o*m,_=M+o*(m+1),E=M+1+o*(m+1),w=M+1+o*m;f.push(A,_,w),f.push(_,E,w)}this.setIndex(f),this.setAttribute("position",new xt(p,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ln=class i extends St{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+l,Math.PI),o=0,h=[],d=new D,u=new D,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){let M=[],A=m/n,_=a+A*l,E=e*Math.cos(_),w=Math.sqrt(e*e-E*E),C=0;m===0&&a===0?C=.5/t:m===n&&c===Math.PI&&(C=-.5/t);for(let x=0;x<=t;x++){let b=x/t,S=s+b*r;d.x=-w*Math.cos(S),d.y=E,d.z=w*Math.sin(S),p.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),g.push(b+C,1-A),M.push(o++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let A=h[m][M+1],_=h[m][M],E=h[m+1][M],w=h[m+1][M+1];(m!==0||a>0)&&f.push(A,_,w),(m!==n-1||c<Math.PI)&&f.push(_,E,w)}this.setIndex(f),this.setAttribute("position",new xt(p,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Jn=class i extends St{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:l},n=Math.floor(n),s=Math.floor(s);let c=[],o=[],h=[],d=[],u=new D,f=new D,p=new D;for(let v=0;v<=n;v++){let g=a+v/n*l;for(let m=0;m<=s;m++){let M=m/s*r;f.x=(e+t*Math.cos(g))*Math.cos(M),f.y=(e+t*Math.cos(g))*Math.sin(M),f.z=t*Math.sin(g),o.push(f.x,f.y,f.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=s;g++){let m=(s+1)*v+g-1,M=(s+1)*(v-1)+g-1,A=(s+1)*(v-1)+g,_=(s+1)*v+g;c.push(m,M,_),c.push(M,A,_)}this.setIndex(c),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Zs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(kf(s))s.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(kf(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function wn(i){let e={};for(let t=0;t<i.length;t++){let n=Zs(i[t]);for(let s in n)e[s]=n[s]}return e}function kf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function vg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var In={clone:Zs,merge:wn},_g=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vt=class extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_g,this.fragmentShader=yg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=vg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ct().fromArray(s.value);break;case"m3":this.uniforms[n].value=new st().fromArray(s.value);break;case"m4":this.uniforms[n].value=new nt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Dr=class extends vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},je=class extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var za=class extends mi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Wl=class extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xl=class extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function mr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function fu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ps=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let l=n+a>>>1;e<t[l]?a=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ql=class extends ps{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xu,endingEnd:xu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,l=s[r],c=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case vu:r=e,l=2*t-n;break;case _u:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case vu:a=e,c=2*n-t;break;case _u:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let o=(n-t)*.5,h=this.valueSize;this._weightPrev=o/(t-l),this._weightNext=o/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),v=p*p,g=v*p,m=-u*g+2*u*v-u*p,M=(1+u)*g+(-1.5-2*u)*v+(-.5+u)*p+1,A=(-1-f)*g+(1.5+f)*v+.5*p,_=f*g-f*v;for(let E=0;E!==l;++E)r[E]=m*a[h+E]+M*a[o+E]+A*a[c+E]+_*a[d+E];return r}},Yl=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==l;++u)r[u]=a[o+u]*d+a[c+u]*h;return r}},Zl=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},$l=class extends ps{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(s-t),v=1-p;for(let g=0;g!==l;++g)r[g]=a[o+g]*v+a[c+g]*p;return r}let u=l*2,f=e-1;for(let p=0;p!==l;++p){let v=a[o+p],g=a[c+p],m=f*u+p*2,M=d[m],A=d[m+1],_=e*u+p*2,E=h[_],w=h[_+1],C=bg(n,t,M,E,s);r[p]=Dp(C,v,A,w,g)}return r}};function Dp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Mg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function bg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let l=Dp(r,e,t,n,s)-i;if(Math.abs(l)<1e-10)break;let c=Mg(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var Kn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mr(t,this.TimeBufferType),this.values=mr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:mr(e.times,Array),values:mr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),fu(e.settings)&&(n.settings={inTangents:mr(e.settings.inTangents,Array),outTangents:mr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new $l(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ha:t=this.InterpolantFactoryMethodDiscrete;break;case Dl:t=this.InterpolantFactoryMethodLinear;break;case bl:t=this.InterpolantFactoryMethodSmooth;break;case gu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ha;case this.InterpolantFactoryMethodLinear:return Dl;case this.InterpolantFactoryMethodSmooth:return bl;case this.InterpolantFactoryMethodBezier:return gu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;fu(this.settings)&&(Hf(this.settings.inTangents,e),Hf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==r;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){Qe("KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){Qe("KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(s!==void 0&&Sm(s))for(let l=0,c=s.length;l!==c;++l){let o=s[l];if(isNaN(o)){Qe("KeyframeTrack: Value is not a valid number.",this,l,o),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===bl,r=e.length-1,a=1;for(let l=1;l<r;++l){let c=!1,o=e[l],h=e[l+1];if(o!==h&&(l!==1||o!==e[0]))if(s)c=!0;else{let d=l*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let v=t[d+p];if(v!==t[u+p]||v!==t[f+p]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];let d=l*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let l=r*n,c=a*n,o=0;o!==n;++o)t[c+o]=t[l+o];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,fu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Hf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Kn.prototype.ValueTypeName="";Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=Dl;var ms=class extends Kn{constructor(e,t,n){super(e,t,n)}};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=ha;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends Kn{constructor(e,t,n,s){super(e,t,n,s)}};Jl.prototype.ValueTypeName="color";var Kl=class extends Kn{constructor(e,t,n,s){super(e,t,n,s)}};Kl.prototype.ValueTypeName="number";var jl=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(n-t)/(s-t),o=e*l;for(let h=o+l;o!==h;o+=4)On.slerpFlat(r,0,a,o-l,a,o,c);return r}},ka=class extends Kn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new jl(this.times,this.values,this.getValueSize(),e)}};ka.prototype.ValueTypeName="quaternion";ka.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends Kn{constructor(e,t,n){super(e,t,n)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=ha;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ql=class extends Kn{constructor(e,t,n,s){super(e,t,n,s)}};Ql.prototype.ValueTypeName="vector";var ec=class{constructor(e,t,n){let s=this,r=!1,a=0,l=0,c,o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,l),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return o.push(h,d),this},this.removeHandler=function(h){let d=o.indexOf(h);return d!==-1&&o.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=o.length;d<u;d+=2){let f=o[d],p=o[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lp=new ec,tc=class{constructor(e){this.manager=e!==void 0?e:Lp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};tc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hs=class extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Vs=class extends Hs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},pu=new nt,Vf=new D,Gf=new D,Lr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Vf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vf),Gf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){pu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(pu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,o=s?s.y/r.y:0;e.coordinateSystem===yr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+o,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+o,0,0,.5,.5,0,0,0,1),t.multiply(pu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yl=new D,Ml=new On,Si=new D,Ha=class extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yl,Ml,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yl,Ml,Si.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(yl,Ml,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yl,Ml,Si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},us=new D,Wf=new le,Xf=new le,pn=class extends Ha{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(kh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(kh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,Wf,Xf),t.subVectors(Xf,Wf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(kh*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,o=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/o,s*=a.width/c,n*=a.height/o}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wu=class extends Lr{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ma*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Va=class extends Hs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new wu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Tu=class extends Lr{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0}},Pi=class extends Hs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Tu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},xs=class extends Ha{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let o=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=o*this.view.offsetX,a=r+o*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Au=class extends Lr{constructor(){super(new xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gs=class extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Au}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var gr=-90,xr=1,nc=class extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(gr,xr,e,t);s.layers=this.layers,this.add(s);let r=new pn(gr,xr,e,t);r.layers=this.layers,this.add(r);let a=new pn(gr,xr,e,t);a.layers=this.layers,this.add(a);let l=new pn(gr,xr,e,t);l.layers=this.layers,this.add(l);let c=new pn(gr,xr,e,t);c.layers=this.layers,this.add(c);let o=new pn(gr,xr,e,t);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,l,c]=t;for(let o of t)this.remove(o);if(e===di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let o of t)this.add(o),o.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,c,o,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ic=class extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ga=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Sg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Sg(){this._document.hidden===!1&&this.reset()}var Yu="\\[\\]\\.:\\/",Eg=new RegExp("["+Yu+"]","g"),Zu="[^"+Yu+"]",wg="[^"+Yu.replace("\\.","")+"]",Tg=/((?:WC+[\/:])*)/.source.replace("WC",Zu),Ag=/(WCOD+)?/.source.replace("WCOD",wg),Rg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zu),Cg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zu),Pg=new RegExp("^"+Tg+Ag+Rg+Cg+"$"),Ig=["material","materials","bones","map"],Ru=class{constructor(e,t,n){let s=n||Ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ht=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Eg,"")}static parseTrackName(e){let t=Pg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ig.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===t||l.uuid===t)return l;let c=n(l.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let o=t.objectIndex;switch(n){case"materials":if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===o){o=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(o!==void 0){if(e[o]===void 0){Qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[o]}}let a=e[s];if(a===void 0){let o=t.nodeName;Qe("PropertyBinding: Trying to update property for track: "+o+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ht.Composite=Ru;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cb=new Float32Array(1);var Cu=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function $u(i,e,t,n){let s=Dg(n);switch(t){case Hu:return i*e;case uc:return i*e/s.components*s.byteLength;case dc:return i*e/s.components*s.byteLength;case bs:return i*e*2/s.components*s.byteLength;case fc:return i*e*2/s.components*s.byteLength;case Vu:return i*e*3/s.components*s.byteLength;case Pn:return i*e*4/s.components*s.byteLength;case pc:return i*e*4/s.components*s.byteLength;case eo:case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case no:case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:case vc:return Math.max(i,16)*Math.max(e,8)/4;case mc:case xc:return Math.max(i,8)*Math.max(e,8)/2;case _c:case yc:case bc:case Sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mc:case so:case Ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Bc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case zc:case kc:case Hc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Vc:case Gc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ro:case Wc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dg(i){switch(i){case En:case Bu:return{byteLength:1,components:1};case Ur:case Ou:case Yt:return{byteLength:2,components:1};case cc:case hc:return{byteLength:2,components:4};case xi:case lc:case jn:return{byteLength:4,components:1};case zu:case ku:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function t0(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Bg(i){let e=new WeakMap;function t(l,c){let o=l.array,h=l.usage,d=o.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,o,h),l.onUploadCallback();let f;if(o instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)f=i.HALF_FLOAT;else if(o instanceof Uint16Array)l.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(o instanceof Int16Array)f=i.SHORT;else if(o instanceof Uint32Array)f=i.UNSIGNED_INT;else if(o instanceof Int32Array)f=i.INT;else if(o instanceof Int8Array)f=i.BYTE;else if(o instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:u,type:f,bytesPerElement:o.BYTES_PER_ELEMENT,version:l.version,size:d}}function n(l,c,o){let h=c.array,d=c.updateRanges;if(i.bindBuffer(o,l),d.length===0)i.bufferSubData(o,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],v=d[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let v=d[f];i.bufferSubData(o,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let o=e.get(l);if(o===void 0)e.set(l,t(l,c));else if(o.version<l.version){if(o.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(o.buffer,l,c),o.version=l.version}}return{get:s,remove:r,update:a}}var Og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Yg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ox=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,hx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,px="gl_FragColor = linearToOutputTexel( gl_FragColor );",mx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,xx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ex=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ax=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Px=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ux=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ox=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Hx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$x=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ev=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,av=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ov=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,pv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_v=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Mv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ev=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Av=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ov=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,c_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,f_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:Og,alphahash_pars_fragment:zg,alphamap_fragment:kg,alphamap_pars_fragment:Hg,alphatest_fragment:Vg,alphatest_pars_fragment:Gg,aomap_fragment:Wg,aomap_pars_fragment:Xg,batching_pars_vertex:qg,batching_vertex:Yg,begin_vertex:Zg,beginnormal_vertex:$g,bsdfs:Jg,iridescence_fragment:Kg,bumpmap_pars_fragment:jg,clipping_planes_fragment:Qg,clipping_planes_pars_fragment:ex,clipping_planes_pars_vertex:tx,clipping_planes_vertex:nx,color_fragment:ix,color_pars_fragment:sx,color_pars_vertex:rx,color_vertex:ax,common:ox,cube_uv_reflection_fragment:lx,defaultnormal_vertex:cx,displacementmap_pars_vertex:hx,displacementmap_vertex:ux,emissivemap_fragment:dx,emissivemap_pars_fragment:fx,colorspace_fragment:px,colorspace_pars_fragment:mx,envmap_fragment:gx,envmap_common_pars_fragment:xx,envmap_pars_fragment:vx,envmap_pars_vertex:_x,envmap_physical_pars_fragment:Px,envmap_vertex:yx,fog_vertex:Mx,fog_pars_vertex:bx,fog_fragment:Sx,fog_pars_fragment:Ex,gradientmap_pars_fragment:wx,lightmap_pars_fragment:Tx,lights_lambert_fragment:Ax,lights_lambert_pars_fragment:Rx,lights_pars_begin:Cx,lights_toon_fragment:Ix,lights_toon_pars_fragment:Dx,lights_phong_fragment:Lx,lights_phong_pars_fragment:Nx,lights_physical_fragment:Ux,lights_physical_pars_fragment:Fx,lights_fragment_begin:Bx,lights_fragment_maps:Ox,lights_fragment_end:zx,lightprobes_pars_fragment:kx,logdepthbuf_fragment:Hx,logdepthbuf_pars_fragment:Vx,logdepthbuf_pars_vertex:Gx,logdepthbuf_vertex:Wx,map_fragment:Xx,map_pars_fragment:qx,map_particle_fragment:Yx,map_particle_pars_fragment:Zx,metalnessmap_fragment:$x,metalnessmap_pars_fragment:Jx,morphinstance_vertex:Kx,morphcolor_vertex:jx,morphnormal_vertex:Qx,morphtarget_pars_vertex:ev,morphtarget_vertex:tv,normal_fragment_begin:nv,normal_fragment_maps:iv,normal_pars_fragment:sv,normal_pars_vertex:rv,normal_vertex:av,normalmap_pars_fragment:ov,clearcoat_normal_fragment_begin:lv,clearcoat_normal_fragment_maps:cv,clearcoat_pars_fragment:hv,iridescence_pars_fragment:uv,opaque_fragment:dv,packing:fv,premultiplied_alpha_fragment:pv,project_vertex:mv,dithering_fragment:gv,dithering_pars_fragment:xv,roughnessmap_fragment:vv,roughnessmap_pars_fragment:_v,shadowmap_pars_fragment:yv,shadowmap_pars_vertex:Mv,shadowmap_vertex:bv,shadowmask_pars_fragment:Sv,skinbase_vertex:Ev,skinning_pars_vertex:wv,skinning_vertex:Tv,skinnormal_vertex:Av,specularmap_fragment:Rv,specularmap_pars_fragment:Cv,tonemapping_fragment:Pv,tonemapping_pars_fragment:Iv,transmission_fragment:Dv,transmission_pars_fragment:Lv,uv_pars_fragment:Nv,uv_pars_vertex:Uv,uv_vertex:Fv,worldpos_vertex:Bv,background_vert:Ov,background_frag:zv,backgroundCube_vert:kv,backgroundCube_frag:Hv,cube_vert:Vv,cube_frag:Gv,depth_vert:Wv,depth_frag:Xv,distance_vert:qv,distance_frag:Yv,equirect_vert:Zv,equirect_frag:$v,linedashed_vert:Jv,linedashed_frag:Kv,meshbasic_vert:jv,meshbasic_frag:Qv,meshlambert_vert:e_,meshlambert_frag:t_,meshmatcap_vert:n_,meshmatcap_frag:i_,meshnormal_vert:s_,meshnormal_frag:r_,meshphong_vert:a_,meshphong_frag:o_,meshphysical_vert:l_,meshphysical_frag:c_,meshtoon_vert:h_,meshtoon_frag:u_,points_vert:d_,points_frag:f_,shadow_vert:p_,shadow_frag:m_,sprite_vert:g_,sprite_frag:x_},Ce={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Ni={basic:{uniforms:wn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:wn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:wn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:wn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:wn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new fe(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:wn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:wn([Ce.points,Ce.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:wn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:wn([Ce.common,Ce.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:wn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:wn([Ce.sprite,Ce.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:wn([Ce.common,Ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:wn([Ce.lights,Ce.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ni.physical={uniforms:wn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Yc={r:0,b:0,g:0},v_=new nt,n0=new st;n0.set(-1,0,0,0,1,0,0,0,1);function __(i,e,t,n,s,r){let a=new fe(0),l=s===!0?0:1,c,o,h=null,d=0,u=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let _=M.backgroundBlurriness>0;A=e.get(A,_)}return A}function p(M){let A=!1,_=f(M);_===null?g(a,l):_&&_.isColor&&(g(_,1),A=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,A){let _=f(A);_&&(_.isCubeTexture||_.mapping===ja)?(o===void 0&&(o=new he(new it(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:Zs(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(E,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(o)),o.material.uniforms.envMap.value=_,o.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(v_.makeRotationFromEuler(A.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&o.material.uniforms.backgroundRotation.value.premultiply(n0),o.material.toneMapped=dt.getTransfer(_.colorSpace)!==bt,(h!==_||d!==_.version||u!==i.toneMapping)&&(o.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),o.layers.enableAll(),M.unshift(o,o.geometry,o.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new he(new on(2,2),new vt({name:"BackgroundMaterial",uniforms:Zs(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=dt.getTransfer(_.colorSpace)!==bt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,A){M.getRGB(Yc,qu(i)),t.buffers.color.setClear(Yc.r,Yc.g,Yc.b,A,r)}function m(){o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),l=A,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,g(a,l)},render:p,addToRenderList:v,dispose:m}}function y_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function l(P,N,z,F,k){let L=!1,U=d(P,F,z,N);r!==U&&(r=U,o(r.object)),L=f(P,F,z,k),L&&p(P,F,z,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,_(P,N,z,F),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function o(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function d(P,N,z,F){let k=F.wireframe===!0,L=n[N.id];L===void 0&&(L={},n[N.id]=L);let U=P.isInstancedMesh===!0?P.id:0,W=L[U];W===void 0&&(W={},L[U]=W);let B=W[z.id];B===void 0&&(B={},W[z.id]=B);let X=B[k];return X===void 0&&(X=u(c()),B[k]=X),X}function u(P){let N=[],z=[],F=[];for(let k=0;k<t;k++)N[k]=0,z[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:F,object:P,attributes:{},index:null}}function f(P,N,z,F){let k=r.attributes,L=N.attributes,U=0,W=z.getAttributes();for(let B in W)if(W[B].location>=0){let j=k[B],Re=L[B];if(Re===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(Re=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(Re=P.instanceColor)),j===void 0||j.attribute!==Re||Re&&j.data!==Re.data)return!0;U++}return r.attributesNum!==U||r.index!==F}function p(P,N,z,F){let k={},L=N.attributes,U=0,W=z.getAttributes();for(let B in W)if(W[B].location>=0){let j=L[B];j===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));let Re={};Re.attribute=j,j&&j.data&&(Re.data=j.data),k[B]=Re,U++}r.attributes=k,r.attributesNum=U,r.index=F}function v(){let P=r.newAttributes;for(let N=0,z=P.length;N<z;N++)P[N]=0}function g(P){m(P,0)}function m(P,N){let z=r.newAttributes,F=r.enabledAttributes,k=r.attributeDivisors;z[P]=1,F[P]===0&&(i.enableVertexAttribArray(P),F[P]=1),k[P]!==N&&(i.vertexAttribDivisor(P,N),k[P]=N)}function M(){let P=r.newAttributes,N=r.enabledAttributes;for(let z=0,F=N.length;z<F;z++)N[z]!==P[z]&&(i.disableVertexAttribArray(z),N[z]=0)}function A(P,N,z,F,k,L,U){U===!0?i.vertexAttribIPointer(P,N,z,k,L):i.vertexAttribPointer(P,N,z,F,k,L)}function _(P,N,z,F){v();let k=F.attributes,L=z.getAttributes(),U=N.defaultAttributeValues;for(let W in L){let B=L[W];if(B.location>=0){let X=k[W];if(X===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){let j=X.normalized,Re=X.itemSize,ge=e.get(X);if(ge===void 0)continue;let ie=ge.buffer,_e=ge.type,Le=ge.bytesPerElement,K=_e===i.INT||_e===i.UNSIGNED_INT||X.gpuType===lc;if(X.isInterleavedBufferAttribute){let re=X.data,ve=re.stride,Ve=X.offset;if(re.isInstancedInterleavedBuffer){for(let Me=0;Me<B.locationSize;Me++)m(B.location+Me,re.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Me=0;Me<B.locationSize;Me++)g(B.location+Me);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let Me=0;Me<B.locationSize;Me++)A(B.location+Me,Re/B.locationSize,_e,j,ve*Le,(Ve+Re/B.locationSize*Me)*Le,K)}else{if(X.isInstancedBufferAttribute){for(let re=0;re<B.locationSize;re++)m(B.location+re,X.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let re=0;re<B.locationSize;re++)g(B.location+re);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let re=0;re<B.locationSize;re++)A(B.location+re,Re/B.locationSize,_e,j,Re*Le,Re/B.locationSize*re*Le,K)}}else if(U!==void 0){let j=U[W];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(B.location,j);break;case 3:i.vertexAttrib3fv(B.location,j);break;case 4:i.vertexAttrib4fv(B.location,j);break;default:i.vertexAttrib1fv(B.location,j)}}}}M()}function E(){b();for(let P in n){let N=n[P];for(let z in N){let F=N[z];for(let k in F){let L=F[k];for(let U in L)h(L[U].object),delete L[U];delete F[k]}}delete n[P]}}function w(P){if(n[P.id]===void 0)return;let N=n[P.id];for(let z in N){let F=N[z];for(let k in F){let L=F[k];for(let U in L)h(L[U].object),delete L[U];delete F[k]}}delete n[P.id]}function C(P){for(let N in n){let z=n[N];for(let F in z){let k=z[F];if(k[P.id]===void 0)continue;let L=k[P.id];for(let U in L)h(L[U].object),delete L[U];delete k[P.id]}}}function x(P){for(let N in n){let z=n[N],F=P.isInstancedMesh===!0?P.id:0,k=z[F];if(k!==void 0){for(let L in k){let U=k[L];for(let W in U)h(U[W].object),delete U[W];delete k[L]}delete z[F],Object.keys(z).length===0&&delete n[N]}}}function b(){S(),a=!0,r!==s&&(r=s,o(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:b,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function M_(i,e,t){let n;function s(c){n=c}function r(c,o){i.drawArrays(n,c,o),t.update(o,n,1)}function a(c,o,h){h!==0&&(i.drawArraysInstanced(n,c,o,h),t.update(o,n,h))}function l(c,o,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,o,0,h);let u=0;for(let f=0;f<h;f++)u+=o[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function b_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Pn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(C){let x=C===Yt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==En&&C!==jn&&!x&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp",h=c(o);h!==o&&(Je("WebGLRenderer:",o,"not supported, using",h,"instead."),o=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:o,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:_,maxSamples:E,samples:w}}function S_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ui,l=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):o();else{let M=r?0:n,A=M*4,_=m.clippingState||null;c.value=_,_=h(p,u,A,f);for(let E=0;E!==A;++E)_[E]=t[E];m.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function o(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let v=d!==null?d.length:0,g=null;if(v!==0){if(g=c.value,p!==!0||g===null){let m=f+v*4,M=u.matrixWorldInverse;l.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let A=0,_=f;A!==v;++A,_+=4)a.copy(d[A]).applyMatrix4(M,l),a.normal.toArray(g,_),g[_+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}var Br=4,E_=6,w_=20,T_=256,lo=new xs,Np=new fe,Ju=null,Ku=0,ju=0,Qu=!1,A_=new D,$s=new D,zr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:l=A_}=r;Ju=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ju,Ku,ju),this._renderer.xr.enabled=Qu,e.scissorTest=!1,Fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ju=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Yt,format:Pn,colorSpace:ua,depthBuffer:!1},s=Up(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Up(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=R_(r)),this._blurMaterial=P_(r,e,t),this._ggxMaterial=C_(r,e,t)}return s}_compileMaterial(e){let t=new he(new St,e);this._renderer.compile(t,lo)}_sceneToCubeUV(e,t,n,s,r){let c=new pn(90,1,t,n),o=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Np),d.toneMapping=gi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new he(new it,new lt({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,m=!1,M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,m=!0):(g.color.copy(Np),m=!0);for(let A=0;A<6;A++){let _=A%3;_===0?(c.up.set(0,o[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[A],r.y,r.z)):_===1?(c.up.set(0,0,o[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[A],r.z)):(c.up.set(0,o[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[A]));let E=this._cubeSize;Fr(s,_*E,A>2?E:0,E,E),d.setRenderTarget(s),m&&d.render(v,c),d.render(e,c)}d.toneMapping=f,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===_s||e.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=e;let c=this._cubeSize;Fr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,lo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let c=a.uniforms,o=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(o*o-h*h),u=o*1.25,f=d*u,{_lodMax:p}=this,v=this._sizeLods[n],g=3*v*(n>p-Br?n-p+Br:0),m=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=p-t,Fr(r,g,m,3*v,2*v),s.setRenderTarget(r),s.render(l,lo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,Fr(e,g,m,3*v,2*v),s.setRenderTarget(e),s.render(l,lo)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let o=l.uniforms;o.envMap.value=e.texture,o.sigma.value=r,o.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Br?s-this._lodMax+Br:0),u=4*(this._cubeSize-h);Fr(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(c,lo)}};function R_(i){let e=[],t=[],n=i,s=i-Br+1+E_;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let l=1/(a-2),c=-l,o=1+l,h=[c,c,o,c,o,o,c,c,o,o,c,o],d=6,u=6,f=3,p=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let m=0;m<d;m++){let M=m%3*2/3-1,A=m>2?0:-1,_=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];p.set(_,f*u*m);for(let E=0;E<u;E++){let w=h[E*2]*2-1,C=h[E*2+1]*2-1;m===0?$s.set(1,C,w):m===1?$s.set(-w,1,-C):m===2?$s.set(-w,C,1):m===3?$s.set(-1,C,-w):m===4?$s.set(-w,-1,C):$s.set(w,C,-1),$s.toArray(v,(m*u+E)*f)}}let g=new St;g.setAttribute("position",new gt(p,f)),g.setAttribute("outputDirection",new gt(v,f)),t.push(new he(g,null)),n>Br&&n--}return{lodMeshes:t,sizeLods:e}}function Up(i,e,t){let n=new Vt(i,e,t);return n.texture.mapping=ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function C_(i,e,t){return new vt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:T_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}function P_(i,e,t){return new vt({name:"SphericalGaussianBlur",defines:{SAMPLES:w_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}function Fp(){return new vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}function Bp(){return new vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}function Kc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var $c=class extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new wa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new it(5,5,5),r=new vt({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:jt});r.uniforms.tEquirect.value=t;let a=new he(s,r),l=t.minFilter;return t.minFilter===ys&&(t.minFilter=xn),new nc(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function I_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===rc||f===ac)if(e.has(u)){let p=e.get(u).texture;return l(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let v=new $c(p.height);return v.fromEquirectangularTexture(i,u),e.set(u,v),u.addEventListener("dispose",o),l(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,p=f===rc||f===ac,v=f===_s||f===Ys;if(p||v){let g=t.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new zr(i)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return p&&M&&M.height>0||v&&M&&c(M)?(n===null&&(n=new zr(i)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function l(u,f){return f===rc?u.mapping=_s:f===ac&&(u.mapping=Ys),u}function c(u){let f=0,p=6;for(let v=0;v<p;v++)u[v]!==void 0&&f++;return f===p}function o(u){let f=u.target;f.removeEventListener("dispose",o);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function D_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Fs("WebGLRenderer: "+n+" extension not supported."),s}}}function L_(i,e,t,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function l(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function o(d){let u=[],f=d.index,p=d.attributes.position,v=0;if(p===void 0)return;if(f!==null){let M=f.array;v=f.version;for(let A=0,_=M.length;A<_;A+=3){let E=M[A+0],w=M[A+1],C=M[A+2];u.push(E,w,w,C,C,E)}}else{let M=p.array;v=p.version;for(let A=0,_=M.length/3-1;A<_;A+=3){let E=A+0,w=A+1,C=A+2;u.push(E,w,w,C,C,E)}}let g=new(p.count>=65535?ya:_a)(u,1);g.version=v;let m=r.get(d);m&&e.remove(m),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&o(d)}else o(d);return r.get(d)}return{get:l,update:c,getWireframeAttribute:h}}function N_(i,e,t){let n;function s(d){n=d}let r,a;function l(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function o(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let g=0;g<f;g++)v+=u[g];t.update(v,n,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=o,this.renderMultiDraw=h}function U_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function F_(i,e,t){let n=new WeakMap,s=new Ct;function r(a,l,c){let o=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(l);if(u===void 0||u.count!==d){let b=function(){C.dispose(),n.delete(l),l.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();let f=l.morphAttributes.position!==void 0,p=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],M=l.morphAttributes.color||[],A=0;f===!0&&(A=1),p===!0&&(A=2),v===!0&&(A=3);let _=l.attributes.position.count*A,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let w=new Float32Array(_*E*4*d),C=new ga(w,_,E,d);C.type=jn,C.needsUpdate=!0;let x=A*4;for(let S=0;S<d;S++){let P=g[S],N=m[S],z=M[S],F=_*E*4*S;for(let k=0;k<P.count;k++){let L=k*x;f===!0&&(s.fromBufferAttribute(P,k),w[F+L+0]=s.x,w[F+L+1]=s.y,w[F+L+2]=s.z,w[F+L+3]=0),p===!0&&(s.fromBufferAttribute(N,k),w[F+L+4]=s.x,w[F+L+5]=s.y,w[F+L+6]=s.z,w[F+L+7]=0),v===!0&&(s.fromBufferAttribute(z,k),w[F+L+8]=s.x,w[F+L+9]=s.y,w[F+L+10]=s.z,w[F+L+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new le(_,E)},n.set(l,u),l.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<o.length;v++)f+=o[v];let p=l.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",o)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function B_(i,e,t,n,s){let r=new WeakMap;function a(o){let h=s.render.frame,d=o.geometry,u=e.get(o,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),o.isInstancedMesh&&(o.hasEventListener("dispose",c)===!1&&o.addEventListener("dispose",c),r.get(o)!==h&&(t.update(o.instanceMatrix,i.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,i.ARRAY_BUFFER),r.set(o,h))),o.isSkinnedMesh){let f=o.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function l(){r=new WeakMap}function c(o){let h=o.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:l}}var O_={[qa]:"LINEAR_TONE_MAPPING",[Ya]:"REINHARD_TONE_MAPPING",[Za]:"CINEON_TONE_MAPPING",[qs]:"ACES_FILMIC_TONE_MAPPING",[Ja]:"AGX_TONE_MAPPING",[Ka]:"NEUTRAL_TONE_MAPPING",[$a]:"CUSTOM_TONE_MAPPING"};function z_(i,e,t,n,s,r){let a=new Vt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,o=new St;o.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new xt([0,2,0,0,2,0],2));let h=new Dr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new he(o,h),u=new xs(-1,1,1,-1,0,1),f=null,p=null,v=!1,g,m=null,M=[],A=!1;this.setSize=function(_,E){a.setSize(_,E),l!==null&&l.setSize(_,E),c!==null&&c.setSize(_,E);for(let w=0;w<M.length;w++){let C=M[w];C.setSize&&C.setSize(_,E)}},this.setEffects=function(_){M=_,A=M.length>0&&M[0].isRenderPass===!0;let E=a.width,w=a.height;M.length>0&&l===null&&(l=new Vt(E,w,{type:Yt,depthBuffer:!1,stencilBuffer:!1}),c=new Vt(E,w,{type:Yt,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<M.length;C++){let x=M[C];x.setSize&&x.setSize(E,w)}},this.begin=function(_,E){if(v||_.toneMapping===gi&&M.length===0)return!1;if(m=E,E!==null){let w=E.width,C=E.height;(a.width!==w||a.height!==C)&&this.setSize(w,C)}return A===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=gi,!0},this.hasRenderPass=function(){return A},this.end=function(_,E){_.toneMapping=g,v=!0;let w=a,C=l;for(let x=0;x<M.length;x++){let b=M[x];b.enabled!==!1&&(b.render(_,C,w,E),b.needsSwap!==!1&&(w=C,C=C===l?c:l))}if(f!==_.outputColorSpace||p!==_.toneMapping){f=_.outputColorSpace,p=_.toneMapping,h.defines={},dt.getTransfer(f)===bt&&(h.defines.SRGB_TRANSFER="");let x=O_[p];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(m),_.render(d,u),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),o.dispose(),h.dispose()}}var i0=new Cn,nd=new Ci(1,1),s0=new ga,r0=new Ul,a0=new wa,Op=[],zp=[],kp=new Float32Array(16),Hp=new Float32Array(9),Vp=new Float32Array(4);function kr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Op[s];if(r===void 0&&(r=new Float32Array(s),Op[s]=r),e!==0){n.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(r,l)}return r}function hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function un(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jc(i,e){let t=zp[e];t===void 0&&(t=new Int32Array(e),zp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function k_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function H_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2fv(this.addr,e),un(t,e)}}function V_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;i.uniform3fv(this.addr,e),un(t,e)}}function G_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4fv(this.addr,e),un(t,e)}}function W_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;Vp.set(n),i.uniformMatrix2fv(this.addr,!1,Vp),un(t,n)}}function X_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;Hp.set(n),i.uniformMatrix3fv(this.addr,!1,Hp),un(t,n)}}function q_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;kp.set(n),i.uniformMatrix4fv(this.addr,!1,kp),un(t,n)}}function Y_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2iv(this.addr,e),un(t,e)}}function $_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3iv(this.addr,e),un(t,e)}}function J_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4iv(this.addr,e),un(t,e)}}function K_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function j_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2uiv(this.addr,e),un(t,e)}}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3uiv(this.addr,e),un(t,e)}}function ey(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4uiv(this.addr,e),un(t,e)}}function ty(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nd.compareFunction=t.isReversedDepthBuffer()?qc:Xc,r=nd):r=i0,t.setTexture2D(e||r,s)}function ny(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||r0,s)}function iy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||a0,s)}function sy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||s0,s)}function ry(i){switch(i){case 5126:return k_;case 35664:return H_;case 35665:return V_;case 35666:return G_;case 35674:return W_;case 35675:return X_;case 35676:return q_;case 5124:case 35670:return Y_;case 35667:case 35671:return Z_;case 35668:case 35672:return $_;case 35669:case 35673:return J_;case 5125:return K_;case 36294:return j_;case 36295:return Q_;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ny;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return sy}}function ay(i,e){i.uniform1fv(this.addr,e)}function oy(i,e){let t=kr(e,this.size,2);i.uniform2fv(this.addr,t)}function ly(i,e){let t=kr(e,this.size,3);i.uniform3fv(this.addr,t)}function cy(i,e){let t=kr(e,this.size,4);i.uniform4fv(this.addr,t)}function hy(i,e){let t=kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function uy(i,e){let t=kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function dy(i,e){let t=kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fy(i,e){i.uniform1iv(this.addr,e)}function py(i,e){i.uniform2iv(this.addr,e)}function my(i,e){i.uniform3iv(this.addr,e)}function gy(i,e){i.uniform4iv(this.addr,e)}function xy(i,e){i.uniform1uiv(this.addr,e)}function vy(i,e){i.uniform2uiv(this.addr,e)}function _y(i,e){i.uniform3uiv(this.addr,e)}function yy(i,e){i.uniform4uiv(this.addr,e)}function My(i,e,t){let n=this.cache,s=e.length,r=jc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=nd:a=i0;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||a,r[l])}function by(i,e,t){let n=this.cache,s=e.length,r=jc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||r0,r[a])}function Sy(i,e,t){let n=this.cache,s=e.length,r=jc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||a0,r[a])}function Ey(i,e,t){let n=this.cache,s=e.length,r=jc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||s0,r[a])}function wy(i){switch(i){case 5126:return ay;case 35664:return oy;case 35665:return ly;case 35666:return cy;case 35674:return hy;case 35675:return uy;case 35676:return dy;case 5124:case 35670:return fy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return gy;case 5125:return xy;case 36294:return vy;case 36295:return _y;case 36296:return yy;case 35678:case 36198:case 36298:case 36306:case 35682:return My;case 35679:case 36299:case 36307:return by;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return Ey}}var id=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ry(t.type)}},sd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wy(t.type)}},rd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},ed=/(\w+)(\])?(\[|\.)?/g;function Gp(i,e){i.seq.push(e),i.map[e.id]=e}function Ty(i,e,t){let n=i.name,s=n.length;for(ed.lastIndex=0;;){let r=ed.exec(n),a=ed.lastIndex,l=r[1],c=r[2]==="]",o=r[3];if(c&&(l=l|0),o===void 0||o==="["&&a+2===s){Gp(t,o===void 0?new id(l,i,e):new sd(l,i,e));break}else{let d=t.map[l];d===void 0&&(d=new rd(l),Gp(t,d)),t=d}}}var Or=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);Ty(l,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let l=t[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Wp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ay=37297,Ry=0;function Cy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}var Xp=new st;function Py(i){dt._getMatrix(Xp,dt.workingColorSpace,i);let e=`mat3( ${Xp.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case da:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function qp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Cy(i.getShaderSource(e),l)}else return r}function Iy(i,e){let t=Py(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Dy={[qa]:"Linear",[Ya]:"Reinhard",[Za]:"Cineon",[qs]:"ACESFilmic",[Ja]:"AgX",[Ka]:"Neutral",[$a]:"Custom"};function Ly(i,e){let t=Dy[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Zc=new D;function Ny(){dt.getLuminanceCoefficients(Zc);let i=Zc.x.toFixed(4),e=Zc.y.toFixed(4),t=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function Fy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function By(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function ho(i){return i!==""}function Yp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(i){return i.replace(Oy,ky)}var zy=new Map;function ky(i,e){let t=ht[e];if(t===void 0){let n=zy.get(e);if(n!==void 0)t=ht[n],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ad(t)}var Hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $p(i){return i.replace(Hy,Vy)}function Vy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Gy={[Ws]:"SHADOWMAP_TYPE_PCF",[Nr]:"SHADOWMAP_TYPE_VSM"};function Wy(i){return Gy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Xy={[_s]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[ja]:"ENVMAP_TYPE_CUBE_UV"};function qy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Xy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Yy={[Ys]:"ENVMAP_MODE_REFRACTION"};function Zy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Yy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $y={[Uu]:"ENVMAP_BLENDING_MULTIPLY",[cp]:"ENVMAP_BLENDING_MIX",[hp]:"ENVMAP_BLENDING_ADD"};function Jy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":$y[i.combine]||"ENVMAP_BLENDING_NONE"}function Ky(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function jy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,l=t.fragmentShader,c=Wy(t),o=qy(t),h=Zy(t),d=Jy(t),u=Ky(t),f=Uy(t),p=Fy(r),v=s.createProgram(),g,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ho).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ho).join(`
`),m.length>0&&(m+=`
`)):(g=[Jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),m=[Jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?ht.tonemapping_pars_fragment:"",t.toneMapping!==gi?Ly("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Iy("linearToOutputTexel",t.outputColorSpace),Ny(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ho).join(`
`)),a=ad(a),a=Yp(a,t),a=Zp(a,t),l=ad(l),l=Yp(l,t),l=Zp(l,t),a=$p(a),l=$p(l),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=M+g+a,_=M+m+l,E=Wp(s,s.VERTEX_SHADER,A),w=Wp(s,s.FRAGMENT_SHADER,_);s.attachShader(v,E),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(P){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(v)||"",z=s.getShaderInfoLog(E)||"",F=s.getShaderInfoLog(w)||"",k=N.trim(),L=z.trim(),U=F.trim(),W=!0,B=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,E,w);else{let X=qp(s,E,"vertex"),j=qp(s,w,"fragment");Qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+X+`
`+j)}else k!==""?Je("WebGLProgram: Program Info Log:",k):(L===""||U==="")&&(B=!1);B&&(P.diagnostics={runnable:W,programLog:k,vertexShader:{log:L,prefix:g},fragmentShader:{log:U,prefix:m}})}s.deleteShader(E),s.deleteShader(w),x=new Or(s,v),b=By(s,v)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,Ay)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ry++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=w,this}var Qy=0,od=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ld(e),t.set(e,n)),n}},ld=class{constructor(e){this.id=Qy++,this.code=e,this.usedTimes=0}};function e1(i){return i===bs||i===so||i===ro}function t1(i,e,t,n,s,r){let a=new xa,l=new od,c=new Set,o=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,b,S,P,N,z){let F=P.fog,k=N.geometry,L=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=e.get(x.envMap||L,U),B=W&&W.mapping===ja?W.image.height:null,X=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Je("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let j=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Re=j!==void 0?j.length:0,ge=0;k.morphAttributes.position!==void 0&&(ge=1),k.morphAttributes.normal!==void 0&&(ge=2),k.morphAttributes.color!==void 0&&(ge=3);let ie,_e,Le,K;if(X){let Ft=Ni[X];ie=Ft.vertexShader,_e=Ft.fragmentShader}else{ie=x.vertexShader,_e=x.fragmentShader;let Ft=l.getVertexShaderStage(x),Et=l.getFragmentShaderStage(x);l.update(x,Ft,Et),Le=Ft.id,K=Et.id}let re=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Ve=N.isInstancedMesh===!0,Me=N.isBatchedMesh===!0,Be=!!x.map,rt=!!x.matcap,se=!!W,ce=!!x.aoMap,de=!!x.lightMap,pe=!!x.bumpMap&&x.wireframe===!1,ye=!!x.normalMap,$e=!!x.displacementMap,qe=!!x.emissiveMap,Ke=!!x.metalnessMap,et=!!x.roughnessMap,O=x.anisotropy>0,_t=x.clearcoat>0,ot=x.dispersion>0,I=x.retroreflectivity>0,y=x.iridescence>0,G=x.sheen>0,Y=x.transmission>0,te=O&&!!x.anisotropyMap,me=_t&&!!x.clearcoatMap,be=_t&&!!x.clearcoatNormalMap,ne=_t&&!!x.clearcoatRoughnessMap,oe=y&&!!x.iridescenceMap,we=y&&!!x.iridescenceThicknessMap,We=G&&!!x.sheenColorMap,Ee=G&&!!x.sheenRoughnessMap,Se=!!x.specularMap,Oe=!!x.specularColorMap,Ye=!!x.specularIntensityMap,tt=Y&&!!x.transmissionMap,V=Y&&!!x.thicknessMap,Te=!!x.gradientMap,ae=!!x.alphaMap,Ae=x.alphaTest>0,De=!!x.alphaHash,ue=!!x.extensions,Ze=gi;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Ze=i.toneMapping);let Ge={shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:ie,fragmentShader:_e,defines:x.defines,customVertexShaderID:Le,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Me,batchingColor:Me&&N._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&N.instanceColor!==null,instancingMorph:Ve&&N.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Be,matcap:rt,envMap:se,envMapMode:se&&W.mapping,envMapCubeUVHeight:B,aoMap:ce,lightMap:de,bumpMap:pe,normalMap:ye,displacementMap:$e,emissiveMap:qe,normalMapObjectSpace:ye&&x.normalMapType===pp,normalMapTangentSpace:ye&&x.normalMapType===ao,packedNormalMap:ye&&x.normalMapType===ao&&e1(x.normalMap.format),metalnessMap:Ke,roughnessMap:et,anisotropy:O,anisotropyMap:te,clearcoat:_t,clearcoatMap:me,clearcoatNormalMap:be,clearcoatRoughnessMap:ne,dispersion:ot,retroreflection:I,iridescence:y,iridescenceMap:oe,iridescenceThicknessMap:we,sheen:G,sheenColorMap:We,sheenRoughnessMap:Ee,specularMap:Se,specularColorMap:Oe,specularIntensityMap:Ye,transmission:Y,transmissionMap:tt,thicknessMap:V,gradientMap:Te,opaque:x.transparent===!1&&x.blending===Ii&&x.alphaToCoverage===!1,alphaMap:ae,alphaTest:Ae,alphaHash:De,combine:x.combine,mapUv:Be&&p(x.map.channel),aoMapUv:ce&&p(x.aoMap.channel),lightMapUv:de&&p(x.lightMap.channel),bumpMapUv:pe&&p(x.bumpMap.channel),normalMapUv:ye&&p(x.normalMap.channel),displacementMapUv:$e&&p(x.displacementMap.channel),emissiveMapUv:qe&&p(x.emissiveMap.channel),metalnessMapUv:Ke&&p(x.metalnessMap.channel),roughnessMapUv:et&&p(x.roughnessMap.channel),anisotropyMapUv:te&&p(x.anisotropyMap.channel),clearcoatMapUv:me&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:be&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:we&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:We&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&p(x.sheenRoughnessMap.channel),specularMapUv:Se&&p(x.specularMap.channel),specularColorMapUv:Oe&&p(x.specularColorMap.channel),specularIntensityMapUv:Ye&&p(x.specularIntensityMap.channel),transmissionMapUv:tt&&p(x.transmissionMap.channel),thicknessMapUv:V&&p(x.thicknessMap.channel),alphaMapUv:ae&&p(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ye||O),vertexNormals:!!k.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(Be||ae),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&ye===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:ge,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,decodeVideoTexture:Be&&x.map.isVideoTexture===!0&&dt.getTransfer(x.map.colorSpace)===bt,decodeVideoTextureEmissive:qe&&x.emissiveMap.isVideoTexture===!0&&dt.getTransfer(x.emissiveMap.colorSpace)===bt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===cn,flipSided:x.side===vn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ue&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&x.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function g(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let S in x.defines)b.push(S),b.push(x.defines[S]);return x.isRawShaderMaterial===!1&&(m(b,x),M(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let b=f[x.type],S;if(b){let P=Ni[b];S=In.clone(P.uniforms)}else S=x.uniforms;return S}function _(x,b){let S=h.get(b);return S!==void 0?++S.usedTimes:(S=new jy(i,b,x,s),o.push(S),h.set(b,S)),S}function E(x){if(--x.usedTimes===0){let b=o.indexOf(x);o[b]=o[o.length-1],o.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){l.remove(x)}function C(){l.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:A,acquireProgram:_,releaseProgram:E,releaseShaderCache:w,programs:o,dispose:C}}function n1(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,c){i.get(a)[l]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function i1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Kp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function jp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function l(u,f,p,v,g,m){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:g,group:m},i[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=p,M.materialVariant=a(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=g,M.group=m),e++,M}function c(u,f,p,v,g,m,M){M.reversedDepth===!0&&(g=-g);let A=l(u,f,p,v,g,m);p.transmission>0?n.push(A):p.transparent===!0?s.push(A):t.push(A)}function o(u,f,p,v,g,m){let M=l(u,f,p,v,g,m);p.transmission>0?n.unshift(M):p.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,f){t.length>1&&t.sort(u||i1),n.length>1&&n.sort(f||Kp),s.length>1&&s.sort(f||Kp)}function d(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:o,finish:d,sort:h}}function s1(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new jp,i.set(n,[a])):s>=r.length?(a=new jp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function r1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new fe};break;case"SpotLight":t={position:new D,direction:new D,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function a1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var o1=0;function l1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function c1(i){let e=new r1,t=a1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new D);let s=new D,r=new nt,a=new nt;function l(o){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,M=0,A=0,_=0,E=0,w=0,C=0,x=0,b=0,S=0;o.sort(l1);for(let N=0,z=o.length;N<z;N++){let F=o[N],k=F.color,L=F.intensity,U=F.distance,W=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===bs?W=F.shadow.map.texture:W=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=k.r*L,d+=k.g*L,u+=k.b*L;else if(F.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(F.sh.coefficients[B],L);S++}else if(F.isSunLight){let B=e.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let X=F.shadow,j=t.get(F);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[p]=j,n.sunShadowMap[p]=W;let Re=X.getViewportCount();for(let ge=0;ge<Re;ge++)n.sunShadowMatrix[v+ge]=X.getMatrix(ge),n.sunShadowCascade[v+ge]=X._cascadeData[ge];v+=Re,p++}n.sun[f]=B,f++}else if(F.isDirectionalLight){let B=e.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let X=F.shadow,j=t.get(F);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=W,n.directionalShadowMatrix[g]=F.shadow.matrix,E++}n.directional[g]=B,g++}else if(F.isSpotLight){let B=e.get(F);B.position.setFromMatrixPosition(F.matrixWorld),B.color.copy(k).multiplyScalar(L),B.distance=U,B.coneCos=Math.cos(F.angle),B.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),B.decay=F.decay,n.spot[M]=B;let X=F.shadow;if(F.map&&(n.spotLightMap[x]=F.map,x++,X.updateMatrices(F),F.castShadow&&b++),n.spotLightMatrix[M]=X.matrix,F.castShadow){let j=t.get(F);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=W,C++}M++}else if(F.isRectAreaLight){let B=e.get(F);B.color.copy(k).multiplyScalar(L),B.halfWidth.set(F.width*.5,0,0),B.halfHeight.set(0,F.height*.5,0),n.rectArea[A]=B,A++}else if(F.isPointLight){let B=e.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity),B.distance=F.distance,B.decay=F.decay,F.castShadow){let X=F.shadow,j=t.get(F);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,j.shadowCameraNear=X.camera.near,j.shadowCameraFar=X.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=W,n.pointShadowMatrix[m]=F.shadow.matrix,w++}n.point[m]=B,m++}else if(F.isHemisphereLight){let B=e.get(F);B.skyColor.copy(F.color).multiplyScalar(L),B.groundColor.copy(F.groundColor).multiplyScalar(L),n.hemi[_]=B,_++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let P=n.hash;(P.sunLength!==f||P.directionalLength!==g||P.pointLength!==m||P.spotLength!==M||P.rectAreaLength!==A||P.hemiLength!==_||P.numSunShadows!==p||P.numDirectionalShadows!==E||P.numPointShadows!==w||P.numSpotShadows!==C||P.numSpotMaps!==x||P.numLightProbes!==S)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=A,n.point.length=m,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-b,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=S,P.sunLength=f,P.directionalLength=g,P.pointLength=m,P.spotLength=M,P.rectAreaLength=A,P.hemiLength=_,P.numSunShadows=p,P.numDirectionalShadows=E,P.numPointShadows=w,P.numSpotShadows=C,P.numSpotMaps=x,P.numLightProbes=S,n.version=o1++)}function c(o,h){let d=0,u=0,f=0,p=0,v=0,g=0,m=h.matrixWorldInverse;for(let M=0,A=o.length;M<A;M++){let _=o[M];if(_.isSunLight){let E=n.sun[d];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(m),d++}else if(_.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(_.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let E=n.rectArea[v];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let E=n.hemi[g];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:l,setupView:c,state:n}}function Qp(i){let e=new c1(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function l(u){n.push(u)}function c(u){s.push(u)}function o(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:o,setupLightsView:h,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function h1(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),l;return a===void 0?(l=new Qp(i),e.set(s,[l])):r>=a.length?(l=new Qp(i),a.push(l)):l=a[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var u1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,f1=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],p1=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],e0=new nt,co=new D,td=new D;function m1(i,e,t){let n=new Ar,s=new le,r=new le,a=new Ct,l=new Wl,c=new Xl,o={},h=t.maxTextureSize,d={[vs]:vn,[vn]:vs,[cn]:cn},u=new vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:u1,fragmentShader:d1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new St;p.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new he(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ws;let m=this.type;this.render=function(w,C,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Zf&&(Je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ws);let b=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(jt),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let z=m!==this.type;z&&C.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(k=>k.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,k=w.length;F<k;F++){let L=w[F],U=L.shadow;if(U===void 0){Je("WebGLShadowMap:",L,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let W=U.getFrameExtents();s.multiply(W),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,U.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=B,U.map===null||z===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Nr){if(L.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Vt(s.x,s.y,{format:bs,type:Yt,minFilter:xn,magFilter:xn,generateMipmaps:!1}),U.map.texture.name=L.name+".shadowMap",U.map.depthTexture=new Ci(s.x,s.y,jn),U.map.depthTexture.name=L.name+".shadowMapDepth",U.map.depthTexture.format=Ti,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Kt,U.map.depthTexture.magFilter=Kt}else L.isPointLight?(U.map=new $c(s.x),U.map.depthTexture=new Bl(s.x,xi)):(U.map=new Vt(s.x,s.y),U.map.depthTexture=new Ci(s.x,s.y,xi)),U.map.depthTexture.name=L.name+".shadowMap",U.map.depthTexture.format=Ti,this.type===Ws?(U.map.depthTexture.compareFunction=B?qc:Xc,U.map.depthTexture.minFilter=xn,U.map.depthTexture.magFilter=xn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Kt,U.map.depthTexture.magFilter=Kt);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==s.x||U.map.height!==s.y)&&U.map.setSize(s.x,s.y);let X=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();L.isPointLight!==!0&&U.updateMatrices(L,x);for(let j=0;j<X;j++){let Re=U.getCamera(j);if(L.isPointLight){let ge=U.camera,ie=U.matrix,_e=L.distance||ge.far;_e!==ge.far&&(ge.far=_e,ge.updateProjectionMatrix()),co.setFromMatrixPosition(L.matrixWorld),ge.position.copy(co),td.copy(ge.position),td.add(f1[j]),ge.up.copy(p1[j]),ge.lookAt(td),ge.updateMatrixWorld(),ie.makeTranslation(-co.x,-co.y,-co.z),e0.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),U._frustum.setFromProjectionMatrix(e0,ge.coordinateSystem,ge.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,j),i.clear();else{j===0&&(i.setRenderTarget(U.map),i.clear());let ge=U.getViewport(j);a.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),N.viewport(a)}n=U.getFrustum(j),_(C,x,Re,L,this.type)}U.isPointLightShadow!==!0&&this.type===Nr&&M(U,x),U.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(b,S,P)};function M(w,C){let x=e.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Vt(s.x,s.y,{format:bs,type:Yt}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,x,u,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,x,f,v,null)}function A(w,C,x,b){let S=null,P=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)S=P;else if(S=x.isPointLight===!0?c:l,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let N=S.uuid,z=C.uuid,F=o[N];F===void 0&&(F={},o[N]=F);let k=F[z];k===void 0&&(k=S.clone(),F[z]=k,C.addEventListener("dispose",E)),S=k}if(S.visible=C.visible,S.wireframe=C.wireframe,b===Nr?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:d[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,x.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let N=i.properties.get(S);N.light=x}return S}function _(w,C,x,b,S){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Nr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let z=e.update(w),F=w.material;if(Array.isArray(F)){let k=z.groups;for(let L=0,U=k.length;L<U;L++){let W=k[L],B=F[W.materialIndex];if(B&&B.visible){let X=A(w,B,b,S);w.onBeforeShadow(i,w,C,x,z,X,W),i.renderBufferDirect(x,null,z,X,w,W),w.onAfterShadow(i,w,C,x,z,X,W)}}}else if(F.visible){let k=A(w,F,b,S);w.onBeforeShadow(i,w,C,x,z,k,null),i.renderBufferDirect(x,null,z,k,w,null),w.onAfterShadow(i,w,C,x,z,k,null)}}let N=w.children;for(let z=0,F=N.length;z<F;z++)_(N[z],C,x,b,S)}function E(w){w.target.removeEventListener("dispose",E);for(let x in o){let b=o[x],S=w.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function g1(i,e){function t(){let V=!1,Te=new Ct,ae=null,Ae=new Ct(0,0,0,0);return{setMask:function(De){ae!==De&&!V&&(i.colorMask(De,De,De,De),ae=De)},setLocked:function(De){V=De},setClear:function(De,ue,Ze,Ge,Ft){Ft===!0&&(De*=Ge,ue*=Ge,Ze*=Ge),Te.set(De,ue,Ze,Ge),Ae.equals(Te)===!1&&(i.clearColor(De,ue,Ze,Ge),Ae.copy(Te))},reset:function(){V=!1,ae=null,Ae.set(-1,0,0,0)}}}function n(){let V=!1,Te=!1,ae=null,Ae=null,De=null;return{setReversed:function(ue){if(Te!==ue){let Ze=e.get("EXT_clip_control");ue?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Te=ue;let Ge=De;De=null,this.setClear(Ge)}},getReversed:function(){return Te},setTest:function(ue){ue?re(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(ue){ae!==ue&&!V&&(i.depthMask(ue),ae=ue)},setFunc:function(ue){if(Te&&(ue=wp[ue]),Ae!==ue){switch(ue){case El:i.depthFunc(i.NEVER);break;case wl:i.depthFunc(i.ALWAYS);break;case Tl:i.depthFunc(i.LESS);break;case _r:i.depthFunc(i.LEQUAL);break;case Al:i.depthFunc(i.EQUAL);break;case Rl:i.depthFunc(i.GEQUAL);break;case Cl:i.depthFunc(i.GREATER);break;case Pl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=ue}},setLocked:function(ue){V=ue},setClear:function(ue){De!==ue&&(De=ue,Te&&(ue=1-ue),i.clearDepth(ue))},reset:function(){V=!1,ae=null,Ae=null,De=null,Te=!1}}}function s(){let V=!1,Te=null,ae=null,Ae=null,De=null,ue=null,Ze=null,Ge=null,Ft=null;return{setTest:function(Et){V||(Et?re(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(Et){Te!==Et&&!V&&(i.stencilMask(Et),Te=Et)},setFunc:function(Et,oi,Mi){(ae!==Et||Ae!==oi||De!==Mi)&&(i.stencilFunc(Et,oi,Mi),ae=Et,Ae=oi,De=Mi)},setOp:function(Et,oi,Mi){(ue!==Et||Ze!==oi||Ge!==Mi)&&(i.stencilOp(Et,oi,Mi),ue=Et,Ze=oi,Ge=Mi)},setLocked:function(Et){V=Et},setClear:function(Et){Ft!==Et&&(i.clearStencil(Et),Ft=Et)},reset:function(){V=!1,Te=null,ae=null,Ae=null,De=null,ue=null,Ze=null,Ge=null,Ft=null}}}let r=new t,a=new n,l=new s,c=new WeakMap,o=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],v=null,g=!1,m=null,M=null,A=null,_=null,E=null,w=null,C=null,x=new fe(0,0,0),b=0,S=!1,P=null,N=null,z=null,F=null,k=null,L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,W=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),U=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),U=W>=2);let X=null,j={},Re=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),ie=new Ct().fromArray(Re),_e=new Ct().fromArray(ge);function Le(V,Te,ae,Ae){let De=new Uint8Array(4),ue=i.createTexture();i.bindTexture(V,ue),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<ae;Ze++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(Te+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return ue}let K={};K[i.TEXTURE_2D]=Le(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),re(i.DEPTH_TEST),a.setFunc(_r),pe(!1),ye(Pu),re(i.CULL_FACE),ce(jt);function re(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function ve(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function Ve(V,Te){return u[V]!==Te?(i.bindFramebuffer(V,Te),u[V]=Te,V===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Te),V===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function Me(V,Te){let ae=p,Ae=!1;if(V){ae=f.get(Te),ae===void 0&&(ae=[],f.set(Te,ae));let De=V.textures;if(ae.length!==De.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Ze=De.length;ue<Ze;ue++)ae[ue]=i.COLOR_ATTACHMENT0+ue;ae.length=De.length,Ae=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(ae)}function Be(V){return v!==V?(i.useProgram(V),v=V,!0):!1}let rt={[si]:i.FUNC_ADD,[$f]:i.FUNC_SUBTRACT,[Jf]:i.FUNC_REVERSE_SUBTRACT};rt[Kf]=i.MIN,rt[jf]=i.MAX;let se={[Xs]:i.ZERO,[Qf]:i.ONE,[ep]:i.SRC_COLOR,[Lu]:i.SRC_ALPHA,[sp]:i.SRC_ALPHA_SATURATE,[Xa]:i.DST_COLOR,[Wa]:i.DST_ALPHA,[tp]:i.ONE_MINUS_SRC_COLOR,[Nu]:i.ONE_MINUS_SRC_ALPHA,[ip]:i.ONE_MINUS_DST_COLOR,[np]:i.ONE_MINUS_DST_ALPHA,[rp]:i.CONSTANT_COLOR,[ap]:i.ONE_MINUS_CONSTANT_COLOR,[op]:i.CONSTANT_ALPHA,[lp]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(V,Te,ae,Ae,De,ue,Ze,Ge,Ft,Et){if(V===jt){g===!0&&(ve(i.BLEND),g=!1);return}if(g===!1&&(re(i.BLEND),g=!0),V!==sc){if(V!==m||Et!==S){if((M!==si||E!==si)&&(i.blendEquation(i.FUNC_ADD),M=si,E=si),Et)switch(V){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qt:i.blendFunc(i.ONE,i.ONE);break;case Iu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Du:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qe("WebGLState: Invalid blending: ",V);break}else switch(V){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Iu:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Du:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",V);break}A=null,_=null,w=null,C=null,x.set(0,0,0),b=0,m=V,S=Et}return}De=De||Te,ue=ue||ae,Ze=Ze||Ae,(Te!==M||De!==E)&&(i.blendEquationSeparate(rt[Te],rt[De]),M=Te,E=De),(ae!==A||Ae!==_||ue!==w||Ze!==C)&&(i.blendFuncSeparate(se[ae],se[Ae],se[ue],se[Ze]),A=ae,_=Ae,w=ue,C=Ze),(Ge.equals(x)===!1||Ft!==b)&&(i.blendColor(Ge.r,Ge.g,Ge.b,Ft),x.copy(Ge),b=Ft),m=V,S=!1}function de(V,Te){V.side===cn?ve(i.CULL_FACE):re(i.CULL_FACE);let ae=V.side===vn;Te&&(ae=!ae),pe(ae),V.blending===Ii&&V.transparent===!1?ce(jt):ce(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);let Ae=V.stencilWrite;l.setTest(Ae),Ae&&(l.setMask(V.stencilWriteMask),l.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),l.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),qe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function pe(V){P!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),P=V)}function ye(V){V!==qf?(re(i.CULL_FACE),V!==N&&(V===Pu?i.cullFace(i.BACK):V===Yf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),N=V}function $e(V){V!==z&&(U&&i.lineWidth(V),z=V)}function qe(V,Te,ae){V?(re(i.POLYGON_OFFSET_FILL),(F!==Te||k!==ae)&&(F=Te,k=ae,a.getReversed()&&(Te=-Te),i.polygonOffset(Te,ae))):ve(i.POLYGON_OFFSET_FILL)}function Ke(V){V?re(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function et(V){V===void 0&&(V=i.TEXTURE0+L-1),X!==V&&(i.activeTexture(V),X=V)}function O(V,Te,ae){ae===void 0&&(X===null?ae=i.TEXTURE0+L-1:ae=X);let Ae=j[ae];Ae===void 0&&(Ae={type:void 0,texture:void 0},j[ae]=Ae),(Ae.type!==V||Ae.texture!==Te)&&(X!==ae&&(i.activeTexture(ae),X=ae),i.bindTexture(V,Te||K[V]),Ae.type=V,Ae.texture=Te)}function _t(){let V=j[X];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ot(){try{i.compressedTexImage2D(...arguments)}catch(V){Qe("WebGLState:",V)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(V){Qe("WebGLState:",V)}}function y(){try{i.texSubImage2D(...arguments)}catch(V){Qe("WebGLState:",V)}}function G(){try{i.texSubImage3D(...arguments)}catch(V){Qe("WebGLState:",V)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(V){Qe("WebGLState:",V)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(V){Qe("WebGLState:",V)}}function me(){try{i.texStorage2D(...arguments)}catch(V){Qe("WebGLState:",V)}}function be(){try{i.texStorage3D(...arguments)}catch(V){Qe("WebGLState:",V)}}function ne(){try{i.texImage2D(...arguments)}catch(V){Qe("WebGLState:",V)}}function oe(){try{i.texImage3D(...arguments)}catch(V){Qe("WebGLState:",V)}}function we(V){return d[V]!==void 0?d[V]:i.getParameter(V)}function We(V,Te){d[V]!==Te&&(i.pixelStorei(V,Te),d[V]=Te)}function Ee(V){ie.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),ie.copy(V))}function Se(V){_e.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),_e.copy(V))}function Oe(V,Te){let ae=o.get(Te);ae===void 0&&(ae=new WeakMap,o.set(Te,ae));let Ae=ae.get(V);Ae===void 0&&(Ae=i.getUniformBlockIndex(Te,V.name),ae.set(V,Ae))}function Ye(V,Te){let Ae=o.get(Te).get(V);c.get(Te)!==Ae&&(i.uniformBlockBinding(Te,Ae,V.__bindingPointIndex),c.set(Te,Ae))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},X=null,j={},u={},f=new WeakMap,p=[],v=null,g=!1,m=null,M=null,A=null,_=null,E=null,w=null,C=null,x=new fe(0,0,0),b=0,S=!1,P=null,N=null,z=null,F=null,k=null,ie.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:re,disable:ve,bindFramebuffer:Ve,drawBuffers:Me,useProgram:Be,setBlending:ce,setMaterial:de,setFlipSided:pe,setCullFace:ye,setLineWidth:$e,setPolygonOffset:qe,setScissorTest:Ke,activeTexture:et,bindTexture:O,unbindTexture:_t,compressedTexImage2D:ot,compressedTexImage3D:I,texImage2D:ne,texImage3D:oe,pixelStorei:We,getParameter:we,updateUBOMapping:Oe,uniformBlockBinding:Ye,texStorage2D:me,texStorage3D:be,texSubImage2D:y,texSubImage3D:G,compressedTexSubImage2D:Y,compressedTexSubImage3D:te,scissor:Ee,viewport:Se,reset:tt}}function x1(i,e,t,n,s,r,a){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new le,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,y){return p?new OffscreenCanvas(I,y):fa("canvas")}function g(I,y,G){let Y=1,te=ot(I);if((te.width>G||te.height>G)&&(Y=G/Math.max(te.width,te.height)),Y<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let me=Math.floor(Y*te.width),be=Math.floor(Y*te.height);u===void 0&&(u=v(me,be));let ne=y?v(me,be):u;return ne.width=me,ne.height=be,ne.getContext("2d").drawImage(I,0,0,me,be),Je("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+me+"x"+be+")."),ne}else return"data"in I&&Je("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),I;return I}function m(I){return I.generateMipmaps}function M(I){i.generateMipmap(I)}function A(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,y,G,Y,te,me=!1){if(I!==null){if(i[I]!==void 0)return i[I];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let be;Y&&(be=e.get("EXT_texture_norm16"),be||Je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=y;if(y===i.RED&&(G===i.FLOAT&&(ne=i.R32F),G===i.HALF_FLOAT&&(ne=i.R16F),G===i.UNSIGNED_BYTE&&(ne=i.R8),G===i.UNSIGNED_SHORT&&be&&(ne=be.R16_EXT),G===i.SHORT&&be&&(ne=be.R16_SNORM_EXT)),y===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.R8UI),G===i.UNSIGNED_SHORT&&(ne=i.R16UI),G===i.UNSIGNED_INT&&(ne=i.R32UI),G===i.BYTE&&(ne=i.R8I),G===i.SHORT&&(ne=i.R16I),G===i.INT&&(ne=i.R32I)),y===i.RG&&(G===i.FLOAT&&(ne=i.RG32F),G===i.HALF_FLOAT&&(ne=i.RG16F),G===i.UNSIGNED_BYTE&&(ne=i.RG8),G===i.UNSIGNED_SHORT&&be&&(ne=be.RG16_EXT),G===i.SHORT&&be&&(ne=be.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RG8UI),G===i.UNSIGNED_SHORT&&(ne=i.RG16UI),G===i.UNSIGNED_INT&&(ne=i.RG32UI),G===i.BYTE&&(ne=i.RG8I),G===i.SHORT&&(ne=i.RG16I),G===i.INT&&(ne=i.RG32I)),y===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),G===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),G===i.UNSIGNED_INT&&(ne=i.RGB32UI),G===i.BYTE&&(ne=i.RGB8I),G===i.SHORT&&(ne=i.RGB16I),G===i.INT&&(ne=i.RGB32I)),y===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),G===i.UNSIGNED_INT&&(ne=i.RGBA32UI),G===i.BYTE&&(ne=i.RGBA8I),G===i.SHORT&&(ne=i.RGBA16I),G===i.INT&&(ne=i.RGBA32I)),y===i.RGB&&(G===i.UNSIGNED_SHORT&&be&&(ne=be.RGB16_EXT),G===i.SHORT&&be&&(ne=be.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),y===i.RGBA){let oe=me?da:dt.getTransfer(te);G===i.FLOAT&&(ne=i.RGBA32F),G===i.HALF_FLOAT&&(ne=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ne=oe===bt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&be&&(ne=be.RGBA16_EXT),G===i.SHORT&&be&&(ne=be.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function E(I,y){let G;return I?y===null||y===xi||y===Ms?G=i.DEPTH24_STENCIL8:y===jn?G=i.DEPTH32F_STENCIL8:y===Ur&&(G=i.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===xi||y===Ms?G=i.DEPTH_COMPONENT24:y===jn?G=i.DEPTH_COMPONENT32F:y===Ur&&(G=i.DEPTH_COMPONENT16),G}function w(I,y){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Kt&&I.minFilter!==xn?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function C(I){let y=I.target;y.removeEventListener("dispose",C),b(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function x(I){let y=I.target;y.removeEventListener("dispose",x),P(y)}function b(I){let y=n.get(I);if(y.__webglInit===void 0)return;let G=I.source,Y=f.get(G);if(Y){let te=Y[y.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(I),Object.keys(Y).length===0&&f.delete(G)}n.remove(I)}function S(I){let y=n.get(I);i.deleteTexture(y.__webglTexture);let G=I.source,Y=f.get(G);delete Y[y.__cacheKey],a.memory.textures--}function P(I){let y=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let te=0;te<y.__webglFramebuffer[Y].length;te++)i.deleteFramebuffer(y.__webglFramebuffer[Y][te]);else i.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)i.deleteFramebuffer(y.__webglFramebuffer[Y]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let G=I.textures;for(let Y=0,te=G.length;Y<te;Y++){let me=n.get(G[Y]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(G[Y])}n.remove(I)}let N=0;function z(){N=0}function F(){return N}function k(I){N=I}function L(){let I=N;return I>=s.maxTextures&&Je("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,I}function U(I){let y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function W(I,y){let G=n.get(I);if(I.isVideoTexture&&O(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&G.__version!==I.version){let Y=I.image;if(Y===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(G,I,y);return}}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+y)}function B(I,y){let G=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){ve(G,I,y);return}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+y)}function X(I,y){let G=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){ve(G,I,y);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+y)}function j(I,y){let G=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&G.__version!==I.version){Ve(G,I,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+y)}let Re={[Bn]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[Il]:i.MIRRORED_REPEAT},ge={[Kt]:i.NEAREST,[dp]:i.NEAREST_MIPMAP_NEAREST,[Qa]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[oc]:i.LINEAR_MIPMAP_NEAREST,[ys]:i.LINEAR_MIPMAP_LINEAR},ie={[gp]:i.NEVER,[Mp]:i.ALWAYS,[xp]:i.LESS,[Xc]:i.LEQUAL,[vp]:i.EQUAL,[qc]:i.GEQUAL,[_p]:i.GREATER,[yp]:i.NOTEQUAL};function _e(I,y){if(y.type===jn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===xn||y.magFilter===oc||y.magFilter===Qa||y.magFilter===ys||y.minFilter===xn||y.minFilter===oc||y.minFilter===Qa||y.minFilter===ys)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Re[y.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Re[y.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Re[y.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ge[y.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ge[y.minFilter]),y.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Kt||y.minFilter!==Qa&&y.minFilter!==ys||y.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Le(I,y){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",C));let Y=y.source,te=f.get(Y);te===void 0&&(te={},f.set(Y,te));let me=U(y);if(me!==I.__cacheKey){te[me]===void 0&&(te[me]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),te[me].usedTimes++;let be=te[I.__cacheKey];be!==void 0&&(te[I.__cacheKey].usedTimes--,be.usedTimes===0&&S(y)),I.__cacheKey=me,I.__webglTexture=te[me].texture}return G}function K(I,y,G){return Math.floor(Math.floor(I/G)/y)}function re(I,y,G,Y){let me=I.updateRanges;if(me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,G,Y,y.data);else{me.sort((We,Ee)=>We.start-Ee.start);let be=0;for(let We=1;We<me.length;We++){let Ee=me[be],Se=me[We],Oe=Ee.start+Ee.count,Ye=K(Se.start,y.width,4),tt=K(Ee.start,y.width,4);Se.start<=Oe+1&&Ye===tt&&K(Se.start+Se.count-1,y.width,4)===Ye?Ee.count=Math.max(Ee.count,Se.start+Se.count-Ee.start):(++be,me[be]=Se)}me.length=be+1;let ne=t.getParameter(i.UNPACK_ROW_LENGTH),oe=t.getParameter(i.UNPACK_SKIP_PIXELS),we=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let We=0,Ee=me.length;We<Ee;We++){let Se=me[We],Oe=Math.floor(Se.start/4),Ye=Math.ceil(Se.count/4),tt=Oe%y.width,V=Math.floor(Oe/y.width),Te=Ye,ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),t.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,tt,V,Te,ae,G,Y,y.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function ve(I,y,G){let Y=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=i.TEXTURE_3D);let te=Le(I,y),me=y.source;t.bindTexture(Y,I.__webglTexture,i.TEXTURE0+G);let be=n.get(me);if(me.version!==be.__version||te===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ae=dt.getPrimaries(dt.workingColorSpace),Ae=y.colorSpace===Ki?null:dt.getPrimaries(y.colorSpace),De=y.colorSpace===Ki||ae===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let oe=g(y.image,!1,s.maxTextureSize);oe=_t(y,oe);let we=r.convert(y.format,y.colorSpace),We=r.convert(y.type),Ee=_(y.internalFormat,we,We,y.normalized,y.colorSpace,y.isVideoTexture);_e(Y,y);let Se,Oe=y.mipmaps,Ye=y.isVideoTexture!==!0,tt=be.__version===void 0||te===!0,V=me.dataReady,Te=w(y,oe);if(y.isDepthTexture)Ee=E(y.format===Di,y.type),tt&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,Ee,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Ee,oe.width,oe.height,0,we,We,null));else if(y.isDataTexture)if(Oe.length>0){Ye&&tt&&t.texStorage2D(i.TEXTURE_2D,Te,Ee,Oe[0].width,Oe[0].height);for(let ae=0,Ae=Oe.length;ae<Ae;ae++)Se=Oe[ae],Ye?V&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Se.width,Se.height,we,We,Se.data):t.texImage2D(i.TEXTURE_2D,ae,Ee,Se.width,Se.height,0,we,We,Se.data);y.generateMipmaps=!1}else Ye?(tt&&t.texStorage2D(i.TEXTURE_2D,Te,Ee,oe.width,oe.height),V&&re(y,oe,we,We)):t.texImage2D(i.TEXTURE_2D,0,Ee,oe.width,oe.height,0,we,We,oe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ye&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ee,Oe[0].width,Oe[0].height,oe.depth);for(let ae=0,Ae=Oe.length;ae<Ae;ae++)if(Se=Oe[ae],y.format!==Pn)if(we!==null)if(Ye){if(V)if(y.layerUpdates.size>0){let De=$u(Se.width,Se.height,y.format,y.type);for(let ue of y.layerUpdates){let Ze=Se.data.subarray(ue*De/Se.data.BYTES_PER_ELEMENT,(ue+1)*De/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,ue,Se.width,Se.height,1,we,Ze)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,oe.depth,we,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Ee,Se.width,Se.height,oe.depth,0,Se.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,oe.depth,we,We,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Ee,Se.width,Se.height,oe.depth,0,we,We,Se.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ye&&tt&&t.texStorage2D(i.TEXTURE_2D,Te,Ee,Oe[0].width,Oe[0].height);for(let ae=0,Ae=Oe.length;ae<Ae;ae++)Se=Oe[ae],y.format!==Pn?we!==null?Ye?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,Se.width,Se.height,we,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Ee,Se.width,Se.height,0,Se.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?V&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Se.width,Se.height,we,We,Se.data):t.texImage2D(i.TEXTURE_2D,ae,Ee,Se.width,Se.height,0,we,We,Se.data)}else if(y.isDataArrayTexture)if(Ye){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ee,oe.width,oe.height,oe.depth),V)if(y.layerUpdates.size>0){let ae=$u(oe.width,oe.height,y.format,y.type);for(let Ae of y.layerUpdates){let De=oe.data.subarray(Ae*ae/oe.data.BYTES_PER_ELEMENT,(Ae+1)*ae/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,oe.width,oe.height,1,we,We,De)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,we,We,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,oe.width,oe.height,oe.depth,0,we,We,oe.data);else if(y.isData3DTexture)Ye?(tt&&t.texStorage3D(i.TEXTURE_3D,Te,Ee,oe.width,oe.height,oe.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,we,We,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,oe.width,oe.height,oe.depth,0,we,We,oe.data);else if(y.isFramebufferTexture){if(tt)if(Ye)t.texStorage2D(i.TEXTURE_2D,Te,Ee,oe.width,oe.height);else{let ae=oe.width,Ae=oe.height;for(let De=0;De<Te;De++)t.texImage2D(i.TEXTURE_2D,De,Ee,ae,Ae,0,we,We,null),ae>>=1,Ae>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),oe.parentNode!==ae){ae.appendChild(oe),d.add(y),ae.onpaint=Ae=>{let De=Ae.changedElements;for(let ue of d)De.includes(ue.image)&&(ue.needsUpdate=!0)},ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,oe);else{let De=i.RGBA,ue=i.RGBA,Ze=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,De,ue,Ze,oe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Ye&&tt){let ae=ot(Oe[0]);t.texStorage2D(i.TEXTURE_2D,Te,Ee,ae.width,ae.height)}for(let ae=0,Ae=Oe.length;ae<Ae;ae++)Se=Oe[ae],Ye?V&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,we,We,Se):t.texImage2D(i.TEXTURE_2D,ae,Ee,we,We,Se);y.generateMipmaps=!1}else if(Ye){if(tt){let ae=ot(oe);t.texStorage2D(i.TEXTURE_2D,Te,Ee,ae.width,ae.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,We,oe)}else t.texImage2D(i.TEXTURE_2D,0,Ee,we,We,oe);m(y)&&M(Y),be.__version=me.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Ve(I,y,G){if(y.image.length!==6)return;let Y=Le(I,y),te=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+G);let me=n.get(te);if(te.version!==me.__version||Y===!0){t.activeTexture(i.TEXTURE0+G);let be=dt.getPrimaries(dt.workingColorSpace),ne=y.colorSpace===Ki?null:dt.getPrimaries(y.colorSpace),oe=y.colorSpace===Ki||be===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let we=y.isCompressedTexture||y.image[0].isCompressedTexture,We=y.image[0]&&y.image[0].isDataTexture,Ee=[];for(let ue=0;ue<6;ue++)!we&&!We?Ee[ue]=g(y.image[ue],!0,s.maxCubemapSize):Ee[ue]=We?y.image[ue].image:y.image[ue],Ee[ue]=_t(y,Ee[ue]);let Se=Ee[0],Oe=r.convert(y.format,y.colorSpace),Ye=r.convert(y.type),tt=_(y.internalFormat,Oe,Ye,y.normalized,y.colorSpace),V=y.isVideoTexture!==!0,Te=me.__version===void 0||Y===!0,ae=te.dataReady,Ae=w(y,Se);_e(i.TEXTURE_CUBE_MAP,y);let De;if(we){V&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,tt,Se.width,Se.height);for(let ue=0;ue<6;ue++){De=Ee[ue].mipmaps;for(let Ze=0;Ze<De.length;Ze++){let Ge=De[Ze];y.format!==Pn?Oe!==null?V?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze,0,0,Ge.width,Ge.height,Oe,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze,tt,Ge.width,Ge.height,0,Ge.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze,0,0,Ge.width,Ge.height,Oe,Ye,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze,tt,Ge.width,Ge.height,0,Oe,Ye,Ge.data)}}}else{if(De=y.mipmaps,V&&Te){De.length>0&&Ae++;let ue=ot(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,tt,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(We){V?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ee[ue].width,Ee[ue].height,Oe,Ye,Ee[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,tt,Ee[ue].width,Ee[ue].height,0,Oe,Ye,Ee[ue].data);for(let Ze=0;Ze<De.length;Ze++){let Ft=De[Ze].image[ue].image;V?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze+1,0,0,Ft.width,Ft.height,Oe,Ye,Ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze+1,tt,Ft.width,Ft.height,0,Oe,Ye,Ft.data)}}else{V?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Oe,Ye,Ee[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,tt,Oe,Ye,Ee[ue]);for(let Ze=0;Ze<De.length;Ze++){let Ge=De[Ze];V?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze+1,0,0,Oe,Ye,Ge.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze+1,tt,Oe,Ye,Ge.image[ue])}}}m(y)&&M(i.TEXTURE_CUBE_MAP),me.__version=te.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Me(I,y,G,Y,te,me){let be=r.convert(G.format,G.colorSpace),ne=r.convert(G.type),oe=_(G.internalFormat,be,ne,G.normalized,G.colorSpace),we=n.get(y),We=n.get(G);if(We.__renderTarget=y,!we.__hasExternalTextures){let Ee=Math.max(1,y.width>>me),Se=Math.max(1,y.height>>me);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,me,oe,Ee,Se,y.depth,0,be,ne,null):t.texImage2D(te,me,oe,Ee,Se,0,be,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),et(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,te,We.__webglTexture,0,Ke(y)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,te,We.__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(I,y,G){if(i.bindRenderbuffer(i.RENDERBUFFER,I),y.depthBuffer){let Y=y.depthTexture,te=Y&&Y.isDepthTexture?Y.type:null,me=E(y.stencilBuffer,te),be=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;et(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke(y),me,y.width,y.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke(y),me,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,me,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,I)}else{let Y=y.textures;for(let te=0;te<Y.length;te++){let me=Y[te],be=r.convert(me.format,me.colorSpace),ne=r.convert(me.type),oe=_(me.internalFormat,be,ne,me.normalized,me.colorSpace);et(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke(y),oe,y.width,y.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke(y),oe,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,oe,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(I,y,G){let Y=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(y.depthTexture);if(te.__renderTarget=y,(!te.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y){if(te.__webglInit===void 0&&(te.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),_e(i.TEXTURE_CUBE_MAP,y.depthTexture);let we=r.convert(y.depthTexture.format),We=r.convert(y.depthTexture.type),Ee;y.depthTexture.format===Ti?Ee=i.DEPTH_COMPONENT24:y.depthTexture.format===Di&&(Ee=i.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ee,y.width,y.height,0,we,We,null)}}else W(y.depthTexture,0);let me=te.__webglTexture,be=Ke(y),ne=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,oe=y.depthTexture.format===Di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ti)et(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,ne,me,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,oe,ne,me,0);else if(y.depthTexture.format===Di)et(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,ne,me,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,oe,ne,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(I){let y=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){let Y=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){let te=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",te)};Y.addEventListener("dispose",te),y.__depthDisposeCallback=te}y.__boundDepthTexture=Y}if(I.depthTexture&&!y.__autoAllocateDepthBuffer)if(G)for(let Y=0;Y<6;Y++)rt(y.__webglFramebuffer[Y],I,Y);else{let Y=I.texture.mipmaps;Y&&Y.length>0?rt(y.__webglFramebuffer[0],I,0):rt(y.__webglFramebuffer,I,0)}else if(G){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=i.createRenderbuffer(),Be(y.__webglDepthbuffer[Y],I,!1);else{let te=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=y.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,me)}}else{let Y=I.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Be(y.__webglDepthbuffer,I,!1);else{let te=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,me)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(I,y,G){let Y=n.get(I);y!==void 0&&Me(Y.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&se(I)}function de(I){let y=I.texture,G=n.get(I),Y=n.get(y);I.addEventListener("dispose",x);let te=I.textures,me=I.isWebGLCubeRenderTarget===!0,be=te.length>1;if(be||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=y.version,a.memory.textures++),me){G.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[ne]=[];for(let oe=0;oe<y.mipmaps.length;oe++)G.__webglFramebuffer[ne][oe]=i.createFramebuffer()}else G.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let ne=0;ne<y.mipmaps.length;ne++)G.__webglFramebuffer[ne]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(be)for(let ne=0,oe=te.length;ne<oe;ne++){let we=n.get(te[ne]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&et(I)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ne=0;ne<te.length;ne++){let oe=te[ne];G.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ne]);let we=r.convert(oe.format,oe.colorSpace),We=r.convert(oe.type),Ee=_(oe.internalFormat,we,We,oe.normalized,oe.colorSpace,I.isXRRenderTarget===!0),Se=Ke(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,Ee,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,G.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),_e(i.TEXTURE_CUBE_MAP,y);for(let ne=0;ne<6;ne++)if(y.mipmaps&&y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)Me(G.__webglFramebuffer[ne][oe],I,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe);else Me(G.__webglFramebuffer[ne],I,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(y)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ne=0,oe=te.length;ne<oe;ne++){let we=te[ne],We=n.get(we),Ee=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ee=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,We.__webglTexture),_e(Ee,we),Me(G.__webglFramebuffer,I,we,i.COLOR_ATTACHMENT0+ne,Ee,0),m(we)&&M(Ee)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ne=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,Y.__webglTexture),_e(ne,y),y.mipmaps&&y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)Me(G.__webglFramebuffer[oe],I,y,i.COLOR_ATTACHMENT0,ne,oe);else Me(G.__webglFramebuffer,I,y,i.COLOR_ATTACHMENT0,ne,0);m(y)&&M(ne),t.unbindTexture()}I.depthBuffer&&se(I)}function pe(I){let y=I.textures;for(let G=0,Y=y.length;G<Y;G++){let te=y[G];if(m(te)){let me=A(I),be=n.get(te).__webglTexture;t.bindTexture(me,be),M(me),t.unbindTexture()}}}let ye=[],$e=[];function qe(I){if(I.samples>0){if(et(I)===!1){let y=I.textures,G=I.width,Y=I.height,te=i.COLOR_BUFFER_BIT,me=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(I),ne=y.length>1;if(ne)for(let we=0;we<y.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);let oe=I.texture.mipmaps;oe&&oe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let we=0;we<y.length;we++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[we]);let We=n.get(y[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,We,0)}i.blitFramebuffer(0,0,G,Y,0,0,G,Y,te,i.NEAREST),c===!0&&(ye.length=0,$e.length=0,ye.push(i.COLOR_ATTACHMENT0+we),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(ye.push(me),$e.push(me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let we=0;we<y.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,be.__webglColorRenderbuffer[we]);let We=n.get(y[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let y=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ke(I){return Math.min(s.maxSamples,I.samples)}function et(I){let y=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function O(I){let y=a.render.frame;h.get(I)!==y&&(h.set(I,y),I.update())}function _t(I,y){let G=I.colorSpace,Y=I.format,te=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==ua&&G!==Ki&&(dt.getTransfer(G)===bt?(Y!==Pn||te!==En)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",G)),y}function ot(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(o.width=I.naturalWidth||I.width,o.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(o.width=I.displayWidth,o.height=I.displayHeight):(o.width=I.width,o.height=I.height),o}this.allocateTextureUnit=L,this.resetTextureUnits=z,this.getTextureUnits=F,this.setTextureUnits=k,this.setTexture2D=W,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=j,this.rebindTextures=ce,this.setupRenderTarget=de,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function v1(i,e){function t(n,s=Ki){let r,a=dt.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ku)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bu)return i.BYTE;if(n===Ou)return i.SHORT;if(n===Ur)return i.UNSIGNED_SHORT;if(n===lc)return i.INT;if(n===xi)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===Yt)return i.HALF_FLOAT;if(n===Hu)return i.ALPHA;if(n===Vu)return i.RGB;if(n===Pn)return i.RGBA;if(n===Ti)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===uc)return i.RED;if(n===dc)return i.RED_INTEGER;if(n===bs)return i.RG;if(n===fc)return i.RG_INTEGER;if(n===pc)return i.RGBA_INTEGER;if(n===eo||n===to||n===no||n===io)if(a===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mc||n===gc||n===xc||n===vc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_c||n===yc||n===Mc||n===bc||n===Sc||n===so||n===Ec)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_c||n===yc)return a===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Mc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===bc)return r.COMPRESSED_R11_EAC;if(n===Sc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===so)return r.COMPRESSED_RG11_EAC;if(n===Ec)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wc||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Dc||n===Lc||n===Nc||n===Uc||n===Fc||n===Bc||n===Oc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ac)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ic)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zc||n===kc||n===Hc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===zc)return a===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vc||n===Gc||n===ro||n===Wc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var _1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,cd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ta(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new vt({vertexShader:_1,fragmentShader:y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new he(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hd=class extends Ai{constructor(e,t){super();let n=this,s=null,r=1,a=null,l="local-floor",c=1,o=null,h=null,d=null,u=null,f=null,p=null,v=typeof XRWebGLBinding<"u",g=new cd,m={},M=t.getContextAttributes(),A=null,_=null,E=[],w=[],C=new le,x=null,b=null,S=new pn;S.viewport=new Ct;let P=new pn;P.viewport=new Ct;let N=[S,P],z=new ic,F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let re=E[K];return re===void 0&&(re=new Sr,E[K]=re),re.getTargetRaySpace()},this.getControllerGrip=function(K){let re=E[K];return re===void 0&&(re=new Sr,E[K]=re),re.getGripSpace()},this.getHand=function(K){let re=E[K];return re===void 0&&(re=new Sr,E[K]=re),re.getHandSpace()};function L(K){let re=w.indexOf(K.inputSource);if(re===-1)return;let ve=E[re];ve!==void 0&&(ve.update(K.inputSource,K.frame,o||a),ve.dispatchEvent({type:K.type,data:K.inputSource}))}function U(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",W);for(let K=0;K<E.length;K++){let re=w[K];re!==null&&(w[K]=null,E[K].disconnect(re))}F=null,k=null,g.reset();for(let K in m)delete m[K];if(e.setRenderTarget(A),f=null,u=null,d=null,s=null,_=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),b!==null){let K=b.camera;K.fov=b.fov,K.zoom=b.zoom,K.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){l=K,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(K){o=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",U),s.addEventListener("inputsourceschange",W),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ve=null,Me=null;M.depth&&(Me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=M.stencil?Di:Ti,Ve=M.stencil?Ms:xi);let Be={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Be),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Vt(u.textureWidth,u.textureHeight,{format:Pn,type:En,depthTexture:new Ci(u.textureWidth,u.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ve={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Vt(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),o=null,a=await s.requestReferenceSpace(l),Le.setContext(s),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(K){for(let re=0;re<K.removed.length;re++){let ve=K.removed[re],Ve=w.indexOf(ve);Ve>=0&&(w[Ve]=null,E[Ve].disconnect(ve))}for(let re=0;re<K.added.length;re++){let ve=K.added[re],Ve=w.indexOf(ve);if(Ve===-1){for(let Be=0;Be<E.length;Be++)if(Be>=w.length){w.push(ve),Ve=Be;break}else if(w[Be]===null){w[Be]=ve,Ve=Be;break}if(Ve===-1)break}let Me=E[Ve];Me&&Me.connect(ve)}}let B=new D,X=new D;function j(K,re,ve){B.setFromMatrixPosition(re.matrixWorld),X.setFromMatrixPosition(ve.matrixWorld);let Ve=B.distanceTo(X),Me=re.projectionMatrix.elements,Be=ve.projectionMatrix.elements,rt=Me[14]/(Me[10]-1),se=Me[14]/(Me[10]+1),ce=(Me[9]+1)/Me[5],de=(Me[9]-1)/Me[5],pe=(Me[8]-1)/Me[0],ye=(Be[8]+1)/Be[0],$e=rt*pe,qe=rt*ye,Ke=Ve/(-pe+ye),et=Ke*-pe;if(re.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(et),K.translateZ(Ke),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Me[10]===-1)K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let O=rt+Ke,_t=se+Ke,ot=$e-et,I=qe+(Ve-et),y=ce*se/_t*O,G=de*se/_t*O;K.projectionMatrix.makePerspective(ot,I,y,G,O,_t),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Re(K,re){re===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(re.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let re=K.near,ve=K.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(ve=g.depthFar)),z.near=P.near=S.near=re,z.far=P.far=S.far=ve,(F!==z.near||k!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),F=z.near,k=z.far),z.layers.mask=K.layers.mask|6,S.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;let Ve=K.parent,Me=z.cameras;Re(z,Ve);for(let Be=0;Be<Me.length;Be++)Re(Me[Be],Ve);Me.length===2?j(z,S,P):z.projectionMatrix.copy(S.projectionMatrix),b===null&&K.isPerspectiveCamera&&(b={camera:K,fov:K.fov,zoom:K.zoom}),ge(K,z,Ve)};function ge(K,re,ve){ve===null?K.matrix.copy(re.matrixWorld):(K.matrix.copy(ve.matrixWorld),K.matrix.invert(),K.matrix.multiply(re.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ma*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(K){return m[K]};let ie=null;function _e(K,re){if(h=re.getViewerPose(o||a),p=re,h!==null){let ve=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Ve=!1;ve.length!==z.cameras.length&&(z.cameras.length=0,Ve=!0);for(let se=0;se<ve.length;se++){let ce=ve[se],de=null;if(f!==null)de=f.getViewport(ce);else{let ye=d.getViewSubImage(u,ce);de=ye.viewport,se===0&&(e.setRenderTargetTextures(_,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(_))}let pe=N[se];pe===void 0&&(pe=new pn,pe.layers.enable(se),pe.viewport=new Ct,N[se]=pe),pe.matrix.fromArray(ce.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(ce.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(de.x,de.y,de.width,de.height),se===0&&(z.matrix.copy(pe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ve===!0&&z.cameras.push(pe)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let se=d.getDepthInformation(ve[0]);se&&se.isValid&&se.texture&&g.init(se,s.renderState)}if(Me&&Me.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let se=0;se<ve.length;se++){let ce=ve[se].camera;if(ce){let de=m[ce];de||(de=new Ta,m[ce]=de);let pe=d.getCameraImage(ce);de.sourceTexture=pe}}}}for(let ve=0;ve<E.length;ve++){let Ve=w[ve],Me=E[ve];Ve!==null&&Me!==void 0&&Me.update(Ve,re,o||a)}ie&&ie(K,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),p=null}let Le=new t0;Le.setAnimationLoop(_e),this.setAnimationLoop=function(K){ie=K},this.dispose=function(){}}},M1=new nt,o0=new st;o0.set(-1,0,0,0,1,0,0,0,1);function b1(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,qu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,A,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&l(g,m)):m.isPointsMaterial?c(g,m,M,A):m.isSpriteMaterial?o(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===vn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===vn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=e.get(m),A=M.envMap,_=M.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(M1.makeRotationFromEuler(_)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(o0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function l(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,M,A){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=A*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===vn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function S1(i,e,t,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,E){let w=E.program;n.uniformBlockBinding(_,w)}function o(_,E){let w=s[_.id];w===void 0&&(g(_),w=h(_),s[_.id]=w,_.addEventListener("dispose",M));let C=E.program;n.updateUBOMapping(_,C);let x=e.render.frame;r[_.id]!==x&&(u(_),r[_.id]=x)}function h(_){let E=d();_.__bindingPointIndex=E;let w=i.createBuffer(),C=_.__size,x=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,w),w}function d(){for(let _=0;_<l;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let E=s[_.id],w=_.uniforms,C=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let x=0,b=w.length;x<b;x++){let S=w[x];if(Array.isArray(S))for(let P=0,N=S.length;P<N;P++)f(S[P],x,P,C);else f(S,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,E,w,C){if(v(_,E,w,C)===!0){let x=_.__offset,b=_.value;if(Array.isArray(b)){let S=0;for(let P=0;P<b.length;P++){let N=b[P],z=m(N);p(N,_.__data,S),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(S+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(b,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,_.__data)}}function p(_,E,w){typeof _=="number"||typeof _=="boolean"?E[0]=_:_.isMatrix3?(E[0]=_.elements[0],E[1]=_.elements[1],E[2]=_.elements[2],E[3]=0,E[4]=_.elements[3],E[5]=_.elements[4],E[6]=_.elements[5],E[7]=0,E[8]=_.elements[6],E[9]=_.elements[7],E[10]=_.elements[8],E[11]=0):ArrayBuffer.isView(_)?E.set(new _.constructor(_.buffer,_.byteOffset,E.length)):_.toArray(E,w)}function v(_,E,w,C){let x=_.value,b=E+"_"+w;if(C[b]===void 0)return typeof x=="number"||typeof x=="boolean"?C[b]=x:ArrayBuffer.isView(x)?C[b]=x.slice():C[b]=x.clone(),!0;{let S=C[b];if(typeof x=="number"||typeof x=="boolean"){if(S!==x)return C[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(S.equals(x)===!1)return S.copy(x),!0}}return!1}function g(_){let E=_.uniforms,w=0,C=16;for(let b=0,S=E.length;b<S;b++){let P=Array.isArray(E[b])?E[b]:[E[b]];for(let N=0,z=P.length;N<z;N++){let F=P[N],k=Array.isArray(F.value)?F.value:[F.value];for(let L=0,U=k.length;L<U;L++){let W=k[L],B=m(W),X=w%C,j=X%B.boundary,Re=X+j;w+=j,Re!==0&&C-Re<B.storage&&(w+=C-Re),F.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=w,w+=B.storage}}}let x=w%C;return x>0&&(w+=C-x),_.__size=w,_.__cache={},this}function m(_){let E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(E.boundary=16,E.storage=_.byteLength):Je("WebGLRenderer: Unsupported uniform value type.",_),E}function M(_){let E=_.target;E.removeEventListener("dispose",M);let w=a.indexOf(E.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function A(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:o,dispose:A}}var E1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Li=null;function w1(){return Li===null&&(Li=new Ri(E1,16,16,bs,Yt),Li.name="DFG_LUT",Li.minFilter=xn,Li.magFilter=xn,Li.wrapS=ii,Li.wrapT=ii,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}var Jc=class{constructor(e={}){let{canvas:t=bp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:o=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=En}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let v=f,g=new Set([pc,fc,dc]),m=new Set([En,xi,Ur,Ms,cc,hc]),M=new Uint32Array(4),A=new Int32Array(4),_=new D,E=null,w=null,C=[],x=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,P=!1,N=null,z=null,F=null,k=null;this._outputColorSpace=Ut;let L=0,U=0,W=null,B=-1,X=null,j=new Ct,Re=new Ct,ge=null,ie=new fe(0),_e=0,Le=t.width,K=t.height,re=1,ve=null,Ve=null,Me=new Ct(0,0,Le,K),Be=new Ct(0,0,Le,K),rt=!1,se=new Ar,ce=!1,de=!1,pe=new nt,ye=new D,$e=new Ct,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ke=!1;function et(){return W===null?re:1}let O=n;function _t(T,H){return t.getContext(T,H)}let ot,I,y,G,Y,te,me,be,ne,oe,we,We,Ee,Se,Oe,Ye,tt,V,Te,ae,Ae,De,ue;try{let T={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:o,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ft,!1),t.addEventListener("webglcontextrestored",Et,!1),t.addEventListener("webglcontextcreationerror",oi,!1),O===null){let H="webgl2";if(O=_t(H,T),O===null)throw _t(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(T){throw t.removeEventListener("webglcontextlost",Ft,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",oi,!1),Qe("WebGLRenderer: "+T.message),T}function Ze(){ot=new D_(O),ot.init(),Ae=new v1(O,ot),I=new b_(O,ot,e,Ae),y=new g1(O,ot),I.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),z=O.createFramebuffer(),F=O.createFramebuffer(),k=O.createFramebuffer(),G=new U_(O),Y=new n1,te=new x1(O,ot,y,Y,I,Ae,G),me=new I_(S),be=new Bg(O),De=new y_(O,be),ne=new L_(O,be,G,De),oe=new B_(O,ne,be,De,G),V=new F_(O,I,te),Oe=new S_(Y),we=new t1(S,me,ot,I,De,Oe),We=new b1(S,Y),Ee=new s1,Se=new h1(ot),tt=new __(S,me,y,oe,p,c),Ye=new m1(S,oe,I),ue=new S1(O,G,I,y),Te=new M_(O,ot,G),ae=new N_(O,ot,G),G.programs=we.programs,S.capabilities=I,S.extensions=ot,S.properties=Y,S.renderLists=Ee,S.shadowMap=Ye,S.state=y,S.info=G}v!==En&&(b=new z_(v,t.width,t.height,l,s,r));let Ge=new hd(S,O);this.xr=Ge,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let T=ot.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ot.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(T){T!==void 0&&(re=T,this.setSize(Le,K,!1))},this.getSize=function(T){return T.set(Le,K)},this.setSize=function(T,H,Q=!0){if(Ge.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}Le=T,K=H,t.width=Math.floor(T*re),t.height=Math.floor(H*re),Q===!0&&(t.style.width=T+"px",t.style.height=H+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(Le*re,K*re).floor()},this.setDrawingBufferSize=function(T,H,Q){Le=T,K=H,re=Q,t.width=Math.floor(T*Q),t.height=Math.floor(H*Q),this.setViewport(0,0,T,H)},this.setEffects=function(T){if(v===En){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let H=0;H<T.length;H++)if(T[H].isOutputPass===!0){Je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(j)},this.getViewport=function(T){return T.copy(Me)},this.setViewport=function(T,H,Q,Z){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,H,Q,Z),y.viewport(j.copy(Me).multiplyScalar(re).round())},this.getScissor=function(T){return T.copy(Be)},this.setScissor=function(T,H,Q,Z){T.isVector4?Be.set(T.x,T.y,T.z,T.w):Be.set(T,H,Q,Z),y.scissor(Re.copy(Be).multiplyScalar(re).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(T){y.setScissorTest(rt=T)},this.setOpaqueSort=function(T){ve=T},this.setTransparentSort=function(T){Ve=T},this.getClearColor=function(T){return T.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,Q=!0){let Z=0;if(T){let $=!1;if(W!==null){let Ie=W.texture.format;$=g.has(Ie)}if($){let Ie=W.texture.type,Ue=m.has(Ie),Pe=tt.getClearColor(),ze=tt.getClearAlpha(),Xe=Pe.r,ct=Pe.g,ft=Pe.b;Ue?(M[0]=Xe,M[1]=ct,M[2]=ft,M[3]=ze,O.clearBufferuiv(O.COLOR,0,M)):(A[0]=Xe,A[1]=ct,A[2]=ft,A[3]=ze,O.clearBufferiv(O.COLOR,0,A))}else Z|=O.COLOR_BUFFER_BIT}H&&(Z|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&O.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),N=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ft,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",oi,!1),tt.dispose(),Ee.dispose(),Se.dispose(),Y.dispose(),me.dispose(),oe.dispose(),De.dispose(),ue.dispose(),we.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",jd),Ge.removeEventListener("sessionend",Qd),Ps.stop()};function Ft(T){T.preventDefault(),pa("WebGLRenderer: Context Lost."),P=!0}function Et(){pa("WebGLRenderer: Context Restored."),P=!1;let T=G.autoReset,H=Ye.enabled,Q=Ye.autoUpdate,Z=Ye.needsUpdate,$=Ye.type;Ze(),G.autoReset=T,Ye.enabled=H,Ye.autoUpdate=Q,Ye.needsUpdate=Z,Ye.type=$}function oi(T){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Mi(T){let H=T.target;H.removeEventListener("dispose",Mi),mm(H)}function mm(T){gm(T),Y.remove(T)}function gm(T){let H=Y.get(T).programs;H!==void 0&&(H.forEach(function(Q){we.releaseProgram(Q)}),T.isShaderMaterial&&we.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,Q,Z,$,Ie){H===null&&(H=qe);let Ue=$.isMesh&&$.matrixWorld.determinantAffine()<0,Pe=_m(T,H,Q,Z,$);y.setMaterial(Z,Ue);let ze=Q.index,Xe=1;if(Z.wireframe===!0){if(ze=ne.getWireframeAttribute(Q),ze===void 0)return;Xe=2}let ct=Q.drawRange,ft=Q.attributes.position,ke=ct.start*Xe,wt=(ct.start+ct.count)*Xe;Ie!==null&&(ke=Math.max(ke,Ie.start*Xe),wt=Math.min(wt,(Ie.start+Ie.count)*Xe)),ze!==null?(ke=Math.max(ke,0),wt=Math.min(wt,ze.count)):ft!=null&&(ke=Math.max(ke,0),wt=Math.min(wt,ft.count));let tn=wt-ke;if(tn<0||tn===1/0)return;De.setup($,Z,Pe,Q,ze);let kt,Nt=Te;if(ze!==null&&(kt=be.get(ze),Nt=ae,Nt.setIndex(kt)),$.isMesh)Z.wireframe===!0?(y.setLineWidth(Z.wireframeLinewidth*et()),Nt.setMode(O.LINES)):Nt.setMode(O.TRIANGLES);else if($.isLine){let Mn=Z.linewidth;Mn===void 0&&(Mn=1),y.setLineWidth(Mn*et()),$.isLineSegments?Nt.setMode(O.LINES):$.isLineLoop?Nt.setMode(O.LINE_LOOP):Nt.setMode(O.LINE_STRIP)}else $.isPoints?Nt.setMode(O.POINTS):$.isSprite&&Nt.setMode(O.TRIANGLES);if($.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))Nt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Mn=$._multiDrawStarts,Ne=$._multiDrawCounts,An=$._multiDrawCount,yt=ze?be.get(ze).bytesPerElement:1,ti=Y.get(Z).currentProgram.getUniforms();for(let bi=0;bi<An;bi++)ti.setValue(O,"_gl_DrawID",bi),Nt.render(Mn[bi]/yt,Ne[bi])}else if($.isInstancedMesh)Nt.renderInstances(ke,tn,$.count);else if(Q.isInstancedBufferGeometry){let Mn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ne=Math.min(Q.instanceCount,Mn);Nt.renderInstances(ke,tn,Ne)}else Nt.render(ke,tn)};function Kd(T,H,Q,Z){N!==null&&T.isNodeMaterial&&N.setObject(Z,T),ce===!0&&Oe.setState(T,Q,!1),T.transparent===!0&&T.side===cn&&T.forceSinglePass===!1?(T.side=vn,T.needsUpdate=!0,Yo(T,H,Z),T.side=vs,T.needsUpdate=!0,Yo(T,H,Z),T.side=cn):Yo(T,H,Z)}this.compile=function(T,H,Q=null){Q===null&&(Q=T),N!==null&&N.renderStart(T,H,Q),w=Se.get(Q),w.init(H),x.push(w),Q.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),T!==Q&&T.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),de=this.localClippingEnabled,ce=Oe.init(this.clippingPlanes,de),ce===!0&&Oe.setGlobalState(this.clippingPlanes,H),N!==null&&Ye.render(w.state.shadowsArray,Q,H);let Z=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Ie=$.material;if(Ie)if(Array.isArray(Ie))for(let Ue=0;Ue<Ie.length;Ue++){let Pe=Ie[Ue];Kd(Pe,Q,H,$),Z.add(Pe)}else Kd(Ie,Q,H,$),Z.add(Ie)}),w=x.pop(),N!==null&&N.renderEnd(),Z},this.compileAsync=function(T,H,Q=null){let Z=this.compile(T,H,Q);return new Promise($=>{function Ie(){if(Z.forEach(function(Ue){let ze=Y.get(Ue).currentProgram;(ze===void 0||ze.isReady())&&Z.delete(Ue)}),Z.size===0){$(T);return}setTimeout(Ie,10)}ot.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Oh=null;function xm(T){Oh&&Oh(T)}function jd(){Ps.stop()}function Qd(){Ps.start()}let Ps=new t0;Ps.setAnimationLoop(xm),typeof self<"u"&&Ps.setContext(self),this.setAnimationLoop=function(T){Oh=T,Ge.setAnimationLoop(T),T===null?Ps.stop():Ps.start()},Ge.addEventListener("sessionstart",jd),Ge.addEventListener("sessionend",Qd),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(T,H);let Q=Ge.enabled===!0&&Ge.isPresenting===!0,Z=b!==null&&(W===null||Q)&&b.begin(S,W);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(H),H=Ge.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,H,W),w=Se.get(T,x.length),w.init(H),w.state.textureUnits=te.getTextureUnits(),x.push(w),pe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),se.setFromProjectionMatrix(pe,di,H.reversedDepth),de=this.localClippingEnabled,ce=Oe.init(this.clippingPlanes,de),E=Ee.get(T,C.length),E.init(),C.push(E),Ge.enabled===!0&&Ge.isPresenting===!0){let Ue=S.xr.getDepthSensingMesh();Ue!==null&&zh(Ue,H,-1/0,S.sortObjects)}zh(T,H,0,S.sortObjects),E.finish(),N!==null&&N.updateLights(w.state.lightsArray),S.sortObjects===!0&&E.sort(ve,Ve),Ke=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,Ke&&tt.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ce===!0&&Oe.beginShadows();let $=w.state.shadowsArray;if(Ye.render($,T,H),ce===!0&&Oe.endShadows(),(Z&&b.hasRenderPass())===!1){let Ue=E.opaque,Pe=E.transmissive;if(w.setupLights(),H.isArrayCamera){let ze=H.cameras;if(Pe.length>0)for(let Xe=0,ct=ze.length;Xe<ct;Xe++){let ft=ze[Xe];tf(Ue,Pe,T,ft)}Ke&&tt.render(T);for(let Xe=0,ct=ze.length;Xe<ct;Xe++){let ft=ze[Xe];ef(E,T,ft,ft.viewport)}}else Pe.length>0&&tf(Ue,Pe,T,H),Ke&&tt.render(T),ef(E,T,H)}W!==null&&U===0&&(te.updateMultisampleRenderTarget(W),te.updateRenderTargetMipmap(W)),Z&&b.end(S),T.isScene===!0&&T.onAfterRender(S,T,H),De.resetDefaultState(),B=-1,X=null,x.pop(),x.length>0?(w=x[x.length-1],te.setTextureUnits(w.state.textureUnits),ce===!0&&Oe.setGlobalState(S.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,N!==null&&N.renderEnd()};function zh(T,H,Q,Z){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)Q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(se)){Z&&$e.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pe);let Ue=oe.update(T),Pe=T.material;Pe.visible&&E.push(T,Ue,Pe,Q,$e.z,null,H)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(se))){let Ue=oe.update(T),Pe=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),$e.copy(T.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),$e.copy(Ue.boundingSphere.center)),$e.applyMatrix4(T.matrixWorld).applyMatrix4(pe)),Array.isArray(Pe)){let ze=Ue.groups;for(let Xe=0,ct=ze.length;Xe<ct;Xe++){let ft=ze[Xe],ke=Pe[ft.materialIndex];ke&&ke.visible&&E.push(T,Ue,ke,Q,$e.z,ft,H)}}else Pe.visible&&E.push(T,Ue,Pe,Q,$e.z,null,H)}}let Ie=T.children;for(let Ue=0,Pe=Ie.length;Ue<Pe;Ue++)zh(Ie[Ue],H,Q,Z)}function ef(T,H,Q,Z){let{opaque:$,transmissive:Ie,transparent:Ue}=T;w.setupLightsView(Q),ce===!0&&Oe.setGlobalState(S.clippingPlanes,Q),Z&&y.viewport(j.copy(Z)),$.length>0&&qo($,H,Q),Ie.length>0&&qo(Ie,H,Q),Ue.length>0&&qo(Ue,H,Q),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function tf(T,H,Q,Z){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Z.id]===void 0){let ke=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Z.id]=new Vt(1,1,{generateMipmaps:!0,type:ke?Yt:En,minFilter:ys,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let Ie=w.state.transmissionRenderTarget[Z.id],Ue=Z.viewport||j;Ie.setSize(Ue.z*S.transmissionResolutionScale,Ue.w*S.transmissionResolutionScale);let Pe=S.getRenderTarget(),ze=S.getActiveCubeFace(),Xe=S.getActiveMipmapLevel();S.setRenderTarget(Ie),S.getClearColor(ie),_e=S.getClearAlpha(),_e<1&&S.setClearColor(16777215,.5),S.clear(),Ke&&tt.render(Q);let ct=S.toneMapping;S.toneMapping=gi;let ft=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),w.setupLightsView(Z),ce===!0&&Oe.setGlobalState(S.clippingPlanes,Z),qo(T,Q,Z),te.updateMultisampleRenderTarget(Ie),te.updateRenderTargetMipmap(Ie),ot.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let wt=0,tn=H.length;wt<tn;wt++){let kt=H[wt],{object:Nt,geometry:Mn,material:Ne,group:An}=kt;if(Ne.side===cn&&Nt.layers.test(Z.layers)){let yt=Ne.side;Ne.side=vn,Ne.needsUpdate=!0,nf(Nt,Q,Z,Mn,Ne,An),Ne.side=yt,Ne.needsUpdate=!0,ke=!0}}ke===!0&&(te.updateMultisampleRenderTarget(Ie),te.updateRenderTargetMipmap(Ie))}S.setRenderTarget(Pe,ze,Xe),S.setClearColor(ie,_e),ft!==void 0&&(Z.viewport=ft),S.toneMapping=ct}function qo(T,H,Q){let Z=H.isScene===!0?H.overrideMaterial:null;for(let $=0,Ie=T.length;$<Ie;$++){let Ue=T[$],{object:Pe,geometry:ze,group:Xe}=Ue,ct=Ue.material;ct.allowOverride===!0&&Z!==null&&(ct=Z),Pe.layers.test(Q.layers)&&nf(Pe,H,Q,ze,ct,Xe)}}function nf(T,H,Q,Z,$,Ie){N!==null&&$.isNodeMaterial&&N.setObject(T,$),T.onBeforeRender(S,H,Q,Z,$,Ie),T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(S,H,Q,Z,T,Ie),$.transparent===!0&&$.side===cn&&$.forceSinglePass===!1?($.side=vn,$.needsUpdate=!0,S.renderBufferDirect(Q,H,Z,$,T,Ie),$.side=vs,$.needsUpdate=!0,S.renderBufferDirect(Q,H,Z,$,T,Ie),$.side=cn):S.renderBufferDirect(Q,H,Z,$,T,Ie),T.onAfterRender(S,H,Q,Z,$,Ie)}function Yo(T,H,Q){H.isScene!==!0&&(H=qe);let Z=Y.get(T),$=w.state.lights,Ie=w.state.shadowsArray,Ue=$.state.version,Pe=we.getParameters(T,$.state,Ie,H,Q,w.state.lightProbeGridArray),ze=we.getProgramCacheKey(Pe),Xe=Z.programs;Z.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,Z.fog=H.fog;let ct=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Z.envMap=me.get(T.envMap||Z.environment,ct),Z.envMapRotation=Z.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,Xe===void 0&&(T.addEventListener("dispose",Mi),Xe=new Map,Z.programs=Xe);let ft=Xe.get(ze);if(ft!==void 0){if(Z.currentProgram===ft&&Z.lightsStateVersion===Ue)return rf(T,Pe),ft}else Pe.uniforms=we.getUniforms(T),N!==null&&T.isNodeMaterial&&N.build(T,Q,Pe),T.onBeforeCompile(Pe,S),ft=we.acquireProgram(Pe,ze),Xe.set(ze,ft),Z.uniforms=Pe.uniforms;let ke=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=Oe.uniform),rf(T,Pe),Z.needsLights=Mm(T),Z.lightsStateVersion=Ue,Z.needsLights&&(ke.ambientLightColor.value=$.state.ambient,ke.lightProbe.value=$.state.probe,ke.sunLights.value=$.state.sun,ke.sunLightShadows.value=$.state.sunShadow,ke.directionalLights.value=$.state.directional,ke.directionalLightShadows.value=$.state.directionalShadow,ke.spotLights.value=$.state.spot,ke.spotLightShadows.value=$.state.spotShadow,ke.rectAreaLights.value=$.state.rectArea,ke.ltc_1.value=$.state.rectAreaLTC1,ke.ltc_2.value=$.state.rectAreaLTC2,ke.pointLights.value=$.state.point,ke.pointLightShadows.value=$.state.pointShadow,ke.hemisphereLights.value=$.state.hemi,ke.sunShadowMatrix.value=$.state.sunShadowMatrix,ke.sunShadowCascade.value=$.state.sunShadowCascade,ke.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ke.spotLightMatrix.value=$.state.spotLightMatrix,ke.spotLightMap.value=$.state.spotLightMap,ke.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.lightProbeGrid=w.state.lightProbeGridArray.length>0,Z.currentProgram=ft,Z.uniformsList=null,ft}function sf(T){if(T.uniformsList===null){let H=T.currentProgram.getUniforms();T.uniformsList=Or.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function rf(T,H){let Q=Y.get(T);Q.outputColorSpace=H.outputColorSpace,Q.batching=H.batching,Q.batchingColor=H.batchingColor,Q.instancing=H.instancing,Q.instancingColor=H.instancingColor,Q.instancingMorph=H.instancingMorph,Q.skinning=H.skinning,Q.morphTargets=H.morphTargets,Q.morphNormals=H.morphNormals,Q.morphColors=H.morphColors,Q.morphTargetsCount=H.morphTargetsCount,Q.numClippingPlanes=H.numClippingPlanes,Q.numIntersection=H.numClipIntersection,Q.vertexAlphas=H.vertexAlphas,Q.vertexTangents=H.vertexTangents,Q.toneMapping=H.toneMapping}function vm(T,H){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;_.setFromMatrixPosition(H.matrixWorld);for(let Q=0,Z=T.length;Q<Z;Q++){let $=T[Q];if($.texture!==null&&$.boundingBox.containsPoint(_))return $}return null}function _m(T,H,Q,Z,$){H.isScene!==!0&&(H=qe),te.resetTextureUnits();let Ie=H.fog,Ue=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?H.environment:null,Pe=W===null?S.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:dt.workingColorSpace,ze=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Xe=me.get(Z.envMap||Ue,ze),ct=Z.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ft=!!Q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),ke=!!Q.morphAttributes.position,wt=!!Q.morphAttributes.normal,tn=!!Q.morphAttributes.color,kt=gi;Z.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(kt=S.toneMapping);let Nt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Mn=Nt!==void 0?Nt.length:0,Ne=Y.get(Z),An=w.state.lights;if(ce===!0&&(de===!0||T!==X)){let Bt=T===X&&Z.id===B;Oe.setState(Z,T,Bt)}let yt=!1;Z.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==An.state.version||Ne.outputColorSpace!==Pe||$.isBatchedMesh&&Ne.batching===!1||!$.isBatchedMesh&&Ne.batching===!0||$.isBatchedMesh&&Ne.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Ne.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Ne.instancing===!1||!$.isInstancedMesh&&Ne.instancing===!0||$.isSkinnedMesh&&Ne.skinning===!1||!$.isSkinnedMesh&&Ne.skinning===!0||$.isInstancedMesh&&Ne.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ne.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ne.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ne.instancingMorph===!1&&$.morphTexture!==null||Ne.envMap!==Xe||Z.fog===!0&&Ne.fog!==Ie||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Oe.numPlanes||Ne.numIntersection!==Oe.numIntersection)||Ne.vertexAlphas!==ct||Ne.vertexTangents!==ft||Ne.morphTargets!==ke||Ne.morphNormals!==wt||Ne.morphColors!==tn||Ne.toneMapping!==kt||Ne.morphTargetsCount!==Mn||!!Ne.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Ne.__version=Z.version);let ti=Ne.currentProgram;yt===!0&&(ti=Yo(Z,H,$),N&&Z.isNodeMaterial&&N.onUpdateProgram(Z,ti,Ne));let bi=!1,ss=!1,js=!1,Dt=ti.getUniforms(),Jt=Ne.uniforms;if(y.useProgram(ti.program)&&(bi=!0,ss=!0,js=!0),Z.id!==B&&(B=Z.id,ss=!0),Ne.needsLights){let Bt=vm(w.state.lightProbeGridArray,$);Ne.lightProbeGrid!==Bt&&(Ne.lightProbeGrid=Bt,ss=!0)}if(bi||X!==T){y.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Dt.setValue(O,"projectionMatrix",T.projectionMatrix),Dt.setValue(O,"viewMatrix",T.matrixWorldInverse);let as=Dt.map.cameraPosition;as!==void 0&&as.setValue(O,ye.setFromMatrixPosition(T.matrixWorld)),I.logarithmicDepthBuffer&&Dt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Dt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),X!==T&&(X=T,ss=!0,js=!0)}if(Ne.needsLights&&(An.state.sunShadowMap.length>0&&Dt.setValue(O,"sunShadowMap",An.state.sunShadowMap,te),An.state.directionalShadowMap.length>0&&Dt.setValue(O,"directionalShadowMap",An.state.directionalShadowMap,te),An.state.spotShadowMap.length>0&&Dt.setValue(O,"spotShadowMap",An.state.spotShadowMap,te),An.state.pointShadowMap.length>0&&Dt.setValue(O,"pointShadowMap",An.state.pointShadowMap,te)),$.isSkinnedMesh){Dt.setOptional(O,$,"bindMatrix"),Dt.setOptional(O,$,"bindMatrixInverse");let Bt=$.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Dt.setValue(O,"boneTexture",Bt.boneTexture,te))}$.isBatchedMesh&&(Dt.setOptional(O,$,"batchingTexture"),Dt.setValue(O,"batchingTexture",$._matricesTexture,te),Dt.setOptional(O,$,"batchingIdTexture"),Dt.setValue(O,"batchingIdTexture",$._indirectTexture,te),Dt.setOptional(O,$,"batchingColorTexture"),$._colorsTexture!==null&&Dt.setValue(O,"batchingColorTexture",$._colorsTexture,te));let rs=Q.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0)&&V.update($,Q,ti),(ss||Ne.receiveShadow!==$.receiveShadow)&&(Ne.receiveShadow=$.receiveShadow,Dt.setValue(O,"receiveShadow",$.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&H.environment!==null&&(Jt.envMapIntensity.value=H.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=w1()),ss){if(Dt.setValue(O,"toneMappingExposure",S.toneMappingExposure),Ne.needsLights&&ym(Jt,js),Ie&&Z.fog===!0&&We.refreshFogUniforms(Jt,Ie),We.refreshMaterialUniforms(Jt,Z,re,K,w.state.transmissionRenderTarget[T.id]),Ne.needsLights&&Ne.lightProbeGrid){let Bt=Ne.lightProbeGrid;Jt.probesSH.value=Bt.texture,Jt.probesMin.value.copy(Bt.boundingBox.min),Jt.probesMax.value.copy(Bt.boundingBox.max),Jt.probesResolution.value.copy(Bt.resolution)}Or.upload(O,sf(Ne),Jt,te)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Or.upload(O,sf(Ne),Jt,te),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Dt.setValue(O,"center",$.center),Dt.setValue(O,"modelViewMatrix",$.modelViewMatrix),Dt.setValue(O,"normalMatrix",$.normalMatrix),Dt.setValue(O,"modelMatrix",$.matrixWorld),Z.uniformsGroups!==void 0){let Bt=Z.uniformsGroups;for(let as=0,Qs=Bt.length;as<Qs;as++){let of=Bt[as];ue.update(of,ti),ue.bind(of,ti)}}return ti}function ym(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.sunLights.needsUpdate=H,T.sunLightShadows.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function Mm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(T,H,Q){let Z=Y.get(T);Z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Y.get(T.texture).__webglTexture=H,Y.get(T.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){let Q=Y.get(T);Q.__webglFramebuffer=H,Q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,Q=0){W=T,L=H,U=Q;let Z=null,$=!1,Ie=!1;if(T){let Pe=Y.get(T);if(Pe.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(O.FRAMEBUFFER,Pe.__webglFramebuffer),j.copy(T.viewport),Re.copy(T.scissor),ge=T.scissorTest,y.viewport(j),y.scissor(Re),y.setScissorTest(ge),B=-1;return}else if(Pe.__webglFramebuffer===void 0)te.setupRenderTarget(T);else if(Pe.__hasExternalTextures)te.rebindTextures(T,Y.get(T.texture).__webglTexture,Y.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ct=T.depthTexture;if(Pe.__boundDepthTexture!==ct){if(ct!==null&&Y.has(ct)&&(T.width!==ct.image.width||T.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(T)}}let ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ie=!0);let Xe=Y.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xe[H])?Z=Xe[H][Q]:Z=Xe[H],$=!0):T.samples>0&&te.useMultisampledRTT(T)===!1?Z=Y.get(T).__webglMultisampledFramebuffer:Array.isArray(Xe)?Z=Xe[Q]:Z=Xe,j.copy(T.viewport),Re.copy(T.scissor),ge=T.scissorTest}else j.copy(Me).multiplyScalar(re).floor(),Re.copy(Be).multiplyScalar(re).floor(),ge=rt;if(Q!==0&&(Z=z),y.bindFramebuffer(O.FRAMEBUFFER,Z)&&y.drawBuffers(T,Z),y.viewport(j),y.scissor(Re),y.setScissorTest(ge),$){let Pe=Y.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,Pe.__webglTexture,Q)}else if(Ie){let Pe=H;for(let ze=0;ze<T.textures.length;ze++){let Xe=Y.get(T.textures[ze]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+ze,Xe.__webglTexture,Q,Pe)}}else if(T!==null&&Q!==0){let Pe=Y.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Pe.__webglTexture,Q)}B=-1};function af(T){let H=Y.get(T);return(H.__readFormat!==T.format||H.__readType!==T.type)&&(H.__readFormat=T.format,H.__readType=T.type,H.__formatReadable=I.textureFormatReadable(T.format),H.__typeReadable=I.textureTypeReadable(T.type)),H}this.readRenderTargetPixels=function(T,H,Q,Z,$,Ie,Ue,Pe=0){if(!(T&&T.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze){y.bindFramebuffer(O.FRAMEBUFFER,ze);try{let Xe=T.textures[Pe],ct=Xe.format,ft=Xe.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Pe);let ke=af(Xe);if(ke.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ke.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-Z&&Q>=0&&Q<=T.height-$&&O.readPixels(H,Q,Z,$,Ae.convert(ct),Ae.convert(ft),Ie)}finally{let Xe=W!==null?Y.get(W).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(T,H,Q,Z,$,Ie,Ue,Pe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze)if(H>=0&&H<=T.width-Z&&Q>=0&&Q<=T.height-$){y.bindFramebuffer(O.FRAMEBUFFER,ze);let Xe=T.textures[Pe],ct=Xe.format,ft=Xe.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Pe);let ke=af(Xe);if(ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let wt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,wt),O.bufferData(O.PIXEL_PACK_BUFFER,Ie.byteLength,O.STREAM_READ),O.readPixels(H,Q,Z,$,Ae.convert(ct),Ae.convert(ft),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let tn=W!==null?Y.get(W).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,tn);let kt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Ep(O,kt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,wt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ie),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(wt),O.deleteSync(kt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,Q=0){let Z=Math.pow(2,-Q),$=Math.floor(T.image.width*Z),Ie=Math.floor(T.image.height*Z),Ue=H!==null?H.x:0,Pe=H!==null?H.y:0;te.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,Ue,Pe,$,Ie),y.unbindTexture()},this.copyTextureToTexture=function(T,H,Q=null,Z=null,$=0,Ie=0){let Ue,Pe,ze,Xe,ct,ft,ke,wt,tn,kt=T.isCompressedTexture?T.mipmaps[Ie]:T.image;if(Q!==null)Ue=Q.max.x-Q.min.x,Pe=Q.max.y-Q.min.y,ze=Q.isBox3?Q.max.z-Q.min.z:1,Xe=Q.min.x,ct=Q.min.y,ft=Q.isBox3?Q.min.z:0;else{let Jt=Math.pow(2,-$);Ue=Math.floor(kt.width*Jt),Pe=Math.floor(kt.height*Jt),T.isDataArrayTexture?ze=kt.depth:T.isData3DTexture?ze=Math.floor(kt.depth*Jt):ze=1,Xe=0,ct=0,ft=0}Z!==null?(ke=Z.x,wt=Z.y,tn=Z.z):(ke=0,wt=0,tn=0);let Nt=Ae.convert(H.format),Mn=Ae.convert(H.type),Ne;H.isData3DTexture?(te.setTexture3D(H,0),Ne=O.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(te.setTexture2DArray(H,0),Ne=O.TEXTURE_2D_ARRAY):(te.setTexture2D(H,0),Ne=O.TEXTURE_2D),y.activeTexture(O.TEXTURE0),y.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),y.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),y.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);let An=y.getParameter(O.UNPACK_ROW_LENGTH),yt=y.getParameter(O.UNPACK_IMAGE_HEIGHT),ti=y.getParameter(O.UNPACK_SKIP_PIXELS),bi=y.getParameter(O.UNPACK_SKIP_ROWS),ss=y.getParameter(O.UNPACK_SKIP_IMAGES);y.pixelStorei(O.UNPACK_ROW_LENGTH,kt.width),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,kt.height),y.pixelStorei(O.UNPACK_SKIP_PIXELS,Xe),y.pixelStorei(O.UNPACK_SKIP_ROWS,ct),y.pixelStorei(O.UNPACK_SKIP_IMAGES,ft);let js=T.isDataArrayTexture||T.isData3DTexture,Dt=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){let Jt=Y.get(T),rs=Y.get(H),Bt=Y.get(Jt.__renderTarget),as=Y.get(rs.__renderTarget);y.bindFramebuffer(O.READ_FRAMEBUFFER,Bt.__webglFramebuffer),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,as.__webglFramebuffer);for(let Qs=0;Qs<ze;Qs++)js&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Y.get(T).__webglTexture,$,ft+Qs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Y.get(H).__webglTexture,Ie,tn+Qs)),O.blitFramebuffer(Xe,ct,Ue,Pe,ke,wt,Ue,Pe,O.DEPTH_BUFFER_BIT,O.NEAREST);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||Y.has(T)){let Jt=Y.get(T),rs=Y.get(H);y.bindFramebuffer(O.READ_FRAMEBUFFER,F),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let Bt=0;Bt<ze;Bt++)js?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Jt.__webglTexture,$,ft+Bt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Jt.__webglTexture,$),Dt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,rs.__webglTexture,Ie,tn+Bt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,rs.__webglTexture,Ie),$!==0?O.blitFramebuffer(Xe,ct,Ue,Pe,ke,wt,Ue,Pe,O.COLOR_BUFFER_BIT,O.NEAREST):Dt?O.copyTexSubImage3D(Ne,Ie,ke,wt,tn+Bt,Xe,ct,Ue,Pe):O.copyTexSubImage2D(Ne,Ie,ke,wt,Xe,ct,Ue,Pe);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Dt?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Ne,Ie,ke,wt,tn,Ue,Pe,ze,Nt,Mn,kt.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(Ne,Ie,ke,wt,tn,Ue,Pe,ze,Nt,kt.data):O.texSubImage3D(Ne,Ie,ke,wt,tn,Ue,Pe,ze,Nt,Mn,kt):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Ie,ke,wt,Ue,Pe,Nt,Mn,kt.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Ie,ke,wt,kt.width,kt.height,Nt,kt.data):O.texSubImage2D(O.TEXTURE_2D,Ie,ke,wt,Ue,Pe,Nt,Mn,kt);y.pixelStorei(O.UNPACK_ROW_LENGTH,An),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,yt),y.pixelStorei(O.UNPACK_SKIP_PIXELS,ti),y.pixelStorei(O.UNPACK_SKIP_ROWS,bi),y.pixelStorei(O.UNPACK_SKIP_IMAGES,ss),Ie===0&&H.generateMipmaps&&O.generateMipmap(Ne),y.unbindTexture()},this.initRenderTarget=function(T){Y.get(T).__webglFramebuffer===void 0&&te.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?te.setTextureCube(T,0):T.isData3DTexture?te.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?te.setTexture2DArray(T,0):te.setTexture2D(T,0),y.unbindTexture()},this.resetState=function(){L=0,U=0,W=null,y.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var ud="https://race.vwfestmemecoin.com/api/arcade/zombies",uo=null,dd=i=>i.json(),Ui={start(){return uo=null,fetch(ud+"/start",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}).then(dd).then(i=>{i.ok&&(uo=i.token)}).catch(()=>{})},hasToken(){return!!uo},top(){return fetch(ud+"/top").then(dd).then(i=>i.ok?i.top:null).catch(()=>null)},submit(i,e,t,n){return fetch(ud+"/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:uo,nickname:i,score:e,pts:t,kills:n})}).then(dd).then(s=>(s.ok&&(uo=null),s)).catch(()=>({ok:!1,error:"Network hiccup. Try again."}))},render(i,e,t){if(i.replaceChildren(),!e){let n=document.createElement("li");n.className="muted",n.textContent="Leaderboard unavailable.",i.append(n);return}if(!e.length){let n=document.createElement("li");n.className="muted",n.textContent="No survivors yet. Be first.",i.append(n);return}for(let n of e.slice(0,10)){let s=document.createElement("li");t&&n.nickname===t&&(s.className="me");let r=document.createElement("b");r.textContent=String(n.nickname),s.append(r," \xB7 Round "+(n.score|0)+" \xB7 "+(n.aux|0).toLocaleString()+" pts"),i.append(s)}}};var Zt=Math.PI*2,Gt=(i,e,t)=>i<e?e:i>t?t:i,Fi=(i,e,t)=>i+(e-i)*t,J=(i=1,e)=>e===void 0?Math.random()*i:i+Math.random()*(e-i),mn=i=>i[Math.random()*i.length|0],l0=i=>i*i*(3-2*i);function Qc(i,e,t){let n=i*374761393+e*668265263+t*144665|0;return n=(n^n>>>13)*1274126177,n=n^n>>>16,(n>>>0)%1e5/1e5}function T1(i,e,t=0){let n=Math.floor(i),s=Math.floor(e),r=l0(i-n),a=l0(e-s),l=Qc(n,s,t),c=Qc(n+1,s,t),o=Qc(n,s+1,t),h=Qc(n+1,s+1,t);return Fi(Fi(l,c,r),Fi(o,h,r),a)}function Ln(i,e,t=4,n=0){let s=0,r=.5,a=1;for(let l=0;l<t;l++)s+=r*T1(i*a,e*a,n+l*17),a*=2,r*=.5;return s}function Ss(i,e,t={}){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),r=s.createImageData(i,i),a=r.data;for(let c=0;c<i;c++)for(let o=0;o<i;o++){let h=(c*i+o)*4,d=e(o/i,c/i,o,c);a[h]=d[0],a[h+1]=d[1],a[h+2]=d[2],a[h+3]=255}s.putImageData(r,0,0),t.after&&t.after(s,i);let l=new an(n);return l.wrapS=l.wrapT=Bn,l.anisotropy=t.aniso||4,t.srgb!==!1&&(l.colorSpace=Ut),l.needsUpdate=!0,l}var eh=(i,e,t)=>[Fi(i[0],e[0],t),Fi(i[1],e[1],t),Fi(i[2],e[2],t)];function c0(i=512){let e={};e.sand=Ss(i,(l,c)=>{let o=Ln(l*24,c*24,5,1),h=Ln(l*6+o*1.5,c*60,3,9),d=Gt(o*.7+h*.5,0,1);return eh([112,86,58],[186,150,104],d)}),e.sandBump=Ss(i,(l,c)=>{let o=Ln(l*24,c*24,5,1),h=Ln(l*6+o*1.5,c*60,3,9),d=Gt(o*.6+h*.7,0,1)*255;return[d,d,d]},{srgb:!1}),e.concrete=Ss(i,(l,c,o,h)=>{let d=Ln(l*18,c*18,5,3),u=Ln(l*80,c*80,2,4),f=.35+d*.5+(u-.5)*.15,p=Math.abs(Ln(l*7,c*7,3,12)-.5)<.012?.5:1;return f*=p,eh([48,50,54],[128,126,120],Gt(f,0,1))}),e.concreteBump=Ss(i,(l,c)=>{let o=Ln(l*18,c*18,5,3)*255;return[o,o,o]},{srgb:!1}),e.rust=Ss(i,(l,c)=>{let o=Ln(l*10,c*10,5,5),h=Ln(l*3,c*40,3,7),d=Gt((o-.42)*3.2+(h-.5)*.8,0,1),u=.62+(Ln(l*60,c*60,2,2)-.5)*.25;return eh([u*255,u*255,u*255],[150,70,28],d*.85)}),e.rustRough=Ss(i,(l,c)=>{let o=Ln(l*10,c*10,5,5),h=Ln(l*3,c*40,3,7);return[0,(.45+Gt((o-.42)*3.2+(h-.5)*.8,0,1)*.5)*255,0]},{srgb:!1}),e.corr=Ss(256,(l,c)=>{let o=(Math.sin(l*Zt*16)*.5+.5)*255;return[o,o,o]},{srgb:!1}),e.corr.repeat.set(1,1),e.wood=Ss(256,(l,c)=>{let o=Ln(l*4,c*60,4,21),h=Ln(l*12,c*12,2,4);return eh([66,42,24],[150,108,66],Gt(o*.9+h*.2,0,1))});let t=document.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d"),s=n.createRadialGradient(32,32,0,32,32,32);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.25,"rgba(255,255,255,.55)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,64,64),e.glow=new an(t),e.glow.colorSpace=Ut;let r=document.createElement("canvas");r.width=1024,r.height=256;let a=r.getContext("2d");return a.fillStyle="#05070b",a.fillRect(0,0,1024,256),a.textAlign="center",a.textBaseline="middle",a.font="900 150px system-ui, Arial Black, sans-serif",a.shadowColor="#18ffb0",a.shadowBlur=40,a.fillStyle="#c8fff0",a.fillText("VW FEST",512,120),a.shadowBlur=20,a.font="700 46px system-ui, Arial, sans-serif",a.fillStyle="#ffb347",a.shadowColor="#ff7a00",a.fillText("AIR-COOLED SALVAGE  \xB7  $VWFEST",512,222),e.sign=new an(r),e.sign.colorSpace=Ut,e.sign.anisotropy=4,e}function u0(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},l=i[0].morphTargetsRelative,c=new St,o=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(o,f,h),o+=f}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=h0(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][u]);let p=h0(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function h0(i){let e,t,n,s=-1,r=0;for(let o=0;o<i.length;++o){let h=i[o];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),l=new gt(a,t,n),c=0;for(let o=0;o<i.length;++o){let h=i[o];if(h.isInterleavedBufferAttribute){let d=c/t;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<t;p++){let v=h.getComponent(u,p);l.setComponent(u+d,p,v)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(l.gpuType=s),l}function th(i){let t=new DataView(i.buffer,i.byteOffset,i.byteLength).getUint32(0,!0),n=JSON.parse(new TextDecoder().decode(i.subarray(4,4+t))),s=i.byteOffset+4+t+(4-t%4)%4;return{meta:n,view:(a,[l,c])=>new a(i.buffer.slice(s+l,s+l+c*a.BYTES_PER_ELEMENT))}}function nh(i,e){let t=i(Uint16Array,e.pos),n=new Float32Array(t.length);for(let s=0;s<t.length;s++){let r=s%3;n[s]=e.min[r]+t[s]/65535*e.size[r]}return new gt(n,3)}var ih=(i,e)=>new gt(i(Int8Array,e.nrm),3,!0),fo={};async function d0(){await Promise.all(["zombies","cars"].map(async i=>{let e=await fetch("assets/"+i+".bin");if(!e.ok)throw new Error("missing assets/"+i+".bin");fo[i]=new Uint8Array(await e.arrayBuffer())}))}var md={},pd={},A1={},f0=!1;function R1(){if(f0)return;f0=!0;let{meta:i,view:e}=th(fo.cars);for(let t of i){A1[t.tag]=t.tris;let n=new St;if(n.setAttribute("position",nh(e,t)),n.setAttribute("normal",ih(e,t)),n.setAttribute("color",new gt(e(Uint8Array,t.col),3,!0)),n.setIndex(new gt(e(Uint16Array,t.idx),1)),n.computeBoundingBox(),md[t.tag]=n,t.plate){let s=new St;s.setAttribute("position",new gt(e(Float32Array,t.plate.pos),3)),s.setAttribute("normal",new gt(e(Float32Array,t.plate.nrm),3)),s.setAttribute("uv",new gt(e(Float32Array,t.plate.uv),2)),pd[t.tag]=s}}}var fd;function C1(){if(fd)return fd;let i=document.createElement("canvas");i.width=256,i.height=96;let e=i.getContext("2d");e.fillStyle="#e9e4d4",e.fillRect(0,0,256,96),e.strokeStyle="#1d3557",e.lineWidth=6,e.strokeRect(5,5,246,86),e.fillStyle="#1d3557",e.font="900 46px Arial Black, Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("VWFEST",128,50);let t=new an(i);return t.colorSpace=Ut,fd=new je({map:t,roughness:.6})}var sh=new Map,P1=()=>sh.get(0)||(sh.set(0,new je({vertexColors:!0,roughness:.55,metalness:.15})),sh.get(0));function m0(i){let e=sh.get(0);if(!e)return;let t=i>0;e.roughness=t?.34:.55,e.metalness=t?.4:.15}var p0=new Map;function I1(i,e,t){let n=i+e+"/"+t,s=p0.get(n);if(s)return s;s=md[i].clone();let r=s.attributes.color,a=s.attributes.position,l=new fe(e),c=new fe(t??15129792),o=i==="camper";for(let h=0;h<r.count;h++){let d=r.getX(h),u=r.getY(h),f=r.getZ(h);if(Math.abs(d-.247)<.01&&Math.abs(u-.247)<.01&&Math.abs(f-.247)<.01){let p=o&&a.getY(h)>1.04?c:l;r.setXYZ(h,p.r*.85,p.g*.85,p.b*.85)}else d>.975&&u>.975&&f>.975&&r.setXYZ(h,c.r,c.g,c.b)}return p0.set(n,s),s}var D1=["bug","baja","ghia"],L1=["camper","wagon","safari"],N1=0,U1=0;function gd(i,e,t,n={}){R1();let s=i==="big"?L1[U1++%3]:D1[N1++%3],r=new He;r.rotation.y=Math.PI;let a=new he(I1(s,e,t),P1());if(a.userData.noBatch=!0,r.add(a),pd[s]){let o=new he(pd[s],C1());o.userData.noBatch=!0,r.add(o)}let l=new He;l.add(r),n.tilt&&(l.rotation.z=n.tilt);let c=md[s].boundingBox.getSize(new D);return l.userData.size=[c.x,c.y,c.z],l}var rh=class{constructor(e){this.T=e,this.cache={};let t=n=>new je(n);this.sand=t({map:e.sand,bumpMap:e.sandBump,bumpScale:3,roughness:.97,metalness:0,color:13615792}),e.sand.repeat.set(90,90),e.sandBump.repeat.set(90,90),this.concrete=t({map:e.concrete,bumpMap:e.concreteBump,bumpScale:1.5,roughness:.88,metalness:.02}),e.concrete.repeat.set(10,10),e.concreteBump.repeat.set(10,10),this.fence=t({color:9281190,map:e.rust,roughnessMap:e.rustRough,bumpMap:e.corr,bumpScale:2.5,metalness:.75,roughness:1}),this.fenceDark=t({color:3818056,map:e.rust,roughnessMap:e.rustRough,metalness:.7,roughness:1}),this.wood=t({color:16777215,map:e.wood,roughness:.85,metalness:0}),this.tire=t({color:1381655,roughness:.92,metalness:0}),this.glass=t({color:660761,roughness:.08,metalness:.95}),this.chrome=t({color:13620954,roughness:.18,metalness:1}),this.lampBulb=new lt({color:new fe(5,3.2,1.4),toneMapped:!1}),this.lampBulbT=new lt({color:new fe(1.2,4.5,3.4),toneMapped:!1}),this.headlight=t({color:15328456,emissive:4867120,emissiveIntensity:.6,roughness:.2,metalness:.2}),this.tarp=t({color:4151882,roughness:.95})}paint(e){let t="p"+e;if(this.cache[t])return this.cache[t];let n=new je({color:e,map:this.T.rust,roughnessMap:this.T.rustRough,metalness:.55,roughness:1});return n.userData.paint=1,this.cache[t]=n}flat(e,t=.8,n=.1){let s="f"+e+t+n;return this.cache[s]||(this.cache[s]=new je({color:e,roughness:t,metalness:n}))}},F1=[6010272,14733722,14252330,11680302,6197184,13619140,9087050,13803834],xd=()=>mn(F1),Js=(i,e,t,n,s,r,a,l,c=14,o=9)=>{let h=new he(new ln(i,c,o),l);return h.scale.set(e,t,n),h.position.set(s,r,a),h},dn=(i,e,t,n,s,r,a)=>{let l=new he(new it(i,e,t),a);return l.position.set(n,s,r),l},ji=(i,e,t,n,s,r,a=!0,l=12)=>{let c=new he(new At(i,i,e,l),r);return a&&(c.rotation.z=Math.PI/2),c.position.set(t,n,s),c};function g0(i,e,t,n,s=.34){let r=new He;return r.add(ji(s,.22,0,0,0,i.tire,!0,14)),r.add(ji(s*.55,.24,0,0,0,i.chrome,!0,8)),r.position.set(e,t,n),r}function x0(i,e,t={}){let n=new He,s=i.paint(e);n.add(Js(1,.9,.5,1.95,0,.78,0,s,18,10)),n.add(Js(1,.72,.42,.95,0,1.17,.12,i.glass,16,8)),n.add(Js(1,.74,.28,.95,0,1.42,.12,s,16,8));for(let r of[-1,1])for(let a of[-1,1])n.add(Js(1,.22,.32,.55,r*.86,.5,a*1.2,s,10,8)),t.missing&&r===1&&a===1||n.add(g0(i,r*.84,.34,a*1.2));for(let r of[-1,1])n.add(Js(.12,1,1,1,r*.55,.92,-1.78,i.headlight,8,6));if(n.add(dn(1.5,.08,.1,0,.44,-2.02,i.chrome)),n.add(dn(1.5,.08,.1,0,.44,2.02,i.chrome)),n.add(dn(.5,.1,.05,0,.78,1.92,i.fenceDark)),t.door){let r=dn(.05,.5,1,.92,.9,-.2,s);r.rotation.y=.9,r.position.x=1.25,r.position.z=-.85,n.add(r)}return t.tilt&&(n.rotation.z=t.tilt),n.userData.size=[1.9,1.7,4.1],n}function v0(i,e,t=15129792,n={}){let s=new He,r=i.paint(e),a=i.paint(t);s.add(dn(2,.85,4.5,0,.78,0,r)),s.add(dn(1.96,.9,4.4,0,1.66,0,a)),s.add(dn(2.04,.1,4.55,0,1.19,0,r)),s.add(dn(2,.08,4.5,0,2.15,0,r));for(let h of[-1,1])s.add(dn(.03,.55,3.8,h*.99,1.7,.1,i.glass)),s.add(dn(.03,.14,.7,h*1.01,.82,.8,i.fenceDark));s.add(dn(1.7,.6,.04,0,1.68,-2.2,i.glass));let l=dn(1.1,.8,.1,-.5,.78,-2.28,r);l.rotation.y=.3;let c=dn(1.1,.8,.1,.5,.78,-2.28,r);c.rotation.y=-.3,s.add(l,c);let o=ji(.17,.04,0,.85,-2.43,i.chrome,!1,14);o.rotation.x=Math.PI/2,s.add(o);for(let h of[-1,1]){s.add(Js(.13,1,1,.6,h*.72,.8,-2.36,i.headlight,8,6));for(let d of[-1.4,1.5])n.missing&&h===1&&d===1.5||s.add(g0(i,h*.95,.38,d,.38))}return s.add(dn(2.1,.1,.12,0,.45,-2.45,i.chrome)),s.add(dn(2.1,.1,.12,0,.45,2.3,i.chrome)),n.tilt&&(s.rotation.z=n.tilt),s.userData.size=[2.1,2.2,4.6],s}function po(i,e=4){let t=new He;for(let n=0;n<e;n++){let s=new he(new Jn(.4,.18,8,14),i.tire);s.rotation.x=Math.PI/2,s.position.set(J(-.04,.04),.18+n*.3,J(-.04,.04)),t.add(s)}return t.userData.size=[1,.3*e+.1,1],t}function Es(i,e){let t=new He;t.add(ji(.3,.9,0,.45,0,i.paint(e),!1,12));for(let n of[.2,.7])t.add(ji(.31,.04,0,n,0,i.fenceDark,!1,12));return t.userData.size=[.62,.9,.62],t}function Nn(i,e=1){let t=new He;t.add(dn(e,e,e,0,e/2,0,i.wood));for(let[n,s]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(dn(.07,e*1.02,.07,n*e/2,e/2,s*e/2,i.fenceDark));return t.userData.size=[e,e,e],t}function mo(i,e){let t=new He;t.add(ji(.09,5.2,0,2.6,0,i.fenceDark,!1,8)),t.add(dn(.12,.12,1.1,0,5.15,-.5,i.fenceDark)),t.add(dn(.5,.12,.3,0,5.08,-1.1,i.fenceDark));let n=new he(new ln(.17,8,6),e?i.lampBulbT:i.lampBulb);return n.position.set(0,4.98,-1.1),n.userData.bulb=!0,t.add(n),t.userData.size=[.4,5.2,.4],t.userData.bulbPos=new D(0,4.9,-1.1),t}function _0(i){let e=new He,t=i.flat(3103288,.9,0),n=J(1.6,3.2);if(e.add(ji(.22,n,0,n/2,0,t,!1,8)),e.add(Js(.22,1,1,1,0,n,0,t,8,5)),Math.random()<.8){let s=ji(.13,.7,.4,n*.6,0,t,!1,6);e.add(s),e.add(ji(.13,.5,.4+.32,n*.6+.3,0,t,!1,6)),e.children[e.children.length-1].rotation.z=0}return e}function y0(i,e){let t=new he(new Ra(e,0),i.flat(7035464,.95,0));t.scale.set(J(.9,1.5),J(.5,.9),J(.9,1.4)),t.rotation.set(J(3),J(3),J(3)),t.position.y=e*.3;let n=new He;return n.add(t),n}var Qn=(i,e,t={})=>gd("small",e,null,t),ri=(i,e,t,n={})=>gd("big",e,t,n);var go=new D;function ai(i,e,t,n,s,r){let a=2*Math.PI*s/4,l=Math.max(r-2*s,0),c=Math.PI/4;go.copy(e),go[n]=0,go.normalize();let o=.5*a/(a+l),h=1-go.angleTo(i)/c;return Math.sign(go[t])===1?h*o:l/(a+l)+o+o*(1-h)}var ah=class i extends it{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let c=new D,o=new D,h=new D(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,v=new D,g=.5/a;for(let m=0,M=0;m<d.length;m+=3,M+=2)switch(c.fromArray(d,m),o.copy(c),o.x-=Math.sign(o.x)*g,o.y-=Math.sign(o.y)*g,o.z-=Math.sign(o.z)*g,o.normalize(),d[m+0]=h.x*Math.sign(c.x)+o.x*r,d[m+1]=h.y*Math.sign(c.y)+o.y*r,d[m+2]=h.z*Math.sign(c.z)+o.z*r,u[m+0]=o.x,u[m+1]=o.y,u[m+2]=o.z,Math.floor(m/p)){case 0:v.set(1,0,0),f[M+0]=ai(v,o,"z","y",r,n),f[M+1]=1-ai(v,o,"y","z",r,t);break;case 1:v.set(-1,0,0),f[M+0]=1-ai(v,o,"z","y",r,n),f[M+1]=1-ai(v,o,"y","z",r,t);break;case 2:v.set(0,1,0),f[M+0]=1-ai(v,o,"x","z",r,e),f[M+1]=ai(v,o,"z","x",r,n);break;case 3:v.set(0,-1,0),f[M+0]=1-ai(v,o,"x","z",r,e),f[M+1]=1-ai(v,o,"z","x",r,n);break;case 4:v.set(0,0,1),f[M+0]=1-ai(v,o,"x","y",r,e),f[M+1]=1-ai(v,o,"y","x",r,t);break;case 5:v.set(0,0,-1),f[M+0]=ai(v,o,"x","y",r,e),f[M+1]=1-ai(v,o,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var It=(i,e)=>i+Math.random()*(e-i);function _o(i,e){let t=document.createElement("canvas");t.width=t.height=i,e(t.getContext("2d"),i);let n=new an(t);return n.wrapS=n.wrapT=Bn,n.anisotropy=4,n}var B1=(i,e)=>_o(512,(t,n)=>{t.fillStyle=i,t.fillRect(0,0,n,n);for(let s=0;s<2600;s++){t.strokeStyle=`rgba(255,255,255,${It(.01,.04)})`;let r=It(0,n);t.beginPath(),t.moveTo(It(0,n),r),t.lineTo(It(0,n),r+It(-2,2)),t.stroke()}for(let s=0;s<160;s++){t.strokeStyle=e,t.globalAlpha=It(.15,.5),t.lineWidth=It(.5,1.6);let r=It(0,n),a=It(0,n);t.beginPath(),t.moveTo(r,a),t.lineTo(r+It(-30,30),a+It(-6,6)),t.stroke()}t.globalAlpha=1;for(let s=0;s<900;s++)t.fillStyle=`rgba(0,0,0,${It(.1,.35)})`,t.fillRect(It(0,n),It(0,n),1.5,1.5)}),O1=()=>_o(256,(i,e)=>{let t=i.createImageData(e,e);for(let n=0;n<t.data.length;n+=4){let s=120+Math.random()*90;t.data[n]=t.data[n+1]=t.data[n+2]=s,t.data[n+3]=255}i.putImageData(t,0,0)}),z1=()=>_o(256,(i,e)=>{i.fillStyle="rgb(128,128,255)",i.fillRect(0,0,e,e);for(let t=0;t<5e3;t++){let n=It(0,e),s=It(0,e),r=It(1,2.2),a=i.createRadialGradient(n-r*.4,s-r*.4,0,n,s,r);a.addColorStop(0,"rgb(90,90,255)"),a.addColorStop(1,"rgba(170,170,255,0)"),i.fillStyle=a,i.beginPath(),i.arc(n,s,r,0,7),i.fill()}}),k1=()=>_o(512,(i,e)=>{i.fillStyle="#4a2c17",i.fillRect(0,0,e,e);for(let t=0;t<260;t++){i.strokeStyle=`rgba(${It(20,60)},${It(10,30)},5,${It(.15,.45)})`,i.lineWidth=It(.5,3),i.beginPath();let n=It(0,e);i.moveTo(0,n);for(let s=0;s<=16;s++)i.lineTo(s/16*e,n+=It(-3,3)+Math.sin(s*.7+t)*1.4);i.stroke()}for(let t=0;t<40;t++)i.fillStyle="rgba(210,170,120,0.08)",i.fillRect(It(0,e),It(0,e),It(10,60),It(1,3))}),xo;function H1(){if(xo)return xo;let i=O1(),e=z1(),t=(n,s,r,a)=>new je({map:B1(n,s),roughnessMap:i,roughness:r,metalness:a,color:16777215});xo={blued:t("#1b1e24","#9aa3ad",.42,.9),park:t("#34372f","#8d9184",.78,.55),steel:t("#4a4e54","#cfd4da",.3,.95),poly:new je({color:1908256,roughness:.72,metalness:0,normalMap:e,normalScale:new le(.9,.9)}),polyTan:new je({color:7299146,roughness:.75,normalMap:e,normalScale:new le(.6,.6)}),wood:new je({map:k1(),roughness:.5,metalness:0,color:16777215}),brass:new je({color:11569722,metalness:1,roughness:.3}),dot:new lt({color:new fe(.4,2.2,.8),toneMapped:!1}),dotR:new lt({color:new fe(2.4,.3,.2),toneMapped:!1}),glass:new je({color:727586,metalness:.9,roughness:.05,emissive:401456}),glove:new je({color:1974306,roughness:.85,normalMap:e,normalScale:new le(.4,.4)}),sleeve:new je({color:3884598,roughness:.95,normalMap:e,normalScale:new le(.25,.25)})};for(let n of Object.values(xo))n.map&&(n.map.colorSpace=Ut);return xo}function _n(i,e,t,n,{x:s=0,bevel:r=.0025,curve:a=6}={}){let l=new Pr;e.forEach(([d,u],f)=>f?l.lineTo(d,u):l.moveTo(d,u));let c=new Ba(l,{depth:t-r*2,bevelEnabled:!0,bevelThickness:r,bevelSize:r,bevelSegments:2,curveSegments:a});c.translate(0,0,-(t-r*2)/2),c.rotateY(-Math.PI/2);let o=c.attributes.uv;for(let d=0;d<o.count;d++)o.setXY(d,o.getX(d)*4,o.getY(d)*4);let h=new he(c,n);return h.position.x=s,i.add(h),h}var ut=(i,e,t,n,s,r,a,l,c=.004,o=0)=>{let h=new he(new ah(e,t,n,2,c),l);return h.position.set(s,r,a),h.rotation.x=o,i.add(h),h},vd=(i,e,t,n,s,r,a,l,c=0)=>{let o=new he(new it(e,t,n),l);return o.position.set(s,r,a),o.rotation.x=c,i.add(o),o},Pt=(i,e,t,n,s,r,a,l=20,c)=>{let o=new he(new At(c??e,e,t,l,1),a);return o.rotation.x=Math.PI/2,o.position.set(n,s,r),i.add(o),o},_d=(i,e,t,n,s,r,a)=>{let l=new he(new Jn(e,t,8,24),a);return l.position.set(n,s,r),i.add(l),l};function vo(i,e,t,n){let s=new he(new Jn(.022,.0035,6,18,Math.PI*1.15),n.poly);s.rotation.set(0,Math.PI/2,Math.PI*.93),s.position.set(0,t,e),i.add(s);let r=new he(new Jn(.012,.003,6,10,Math.PI*.6),n.steel);r.rotation.set(0,Math.PI/2,Math.PI*1.15),r.position.set(0,t+.006,e+.004),i.add(r)}function oh(i,e,t,n,s){ut(i,.004,.009,.006,0,n+.004,e,s.blued,.001);let r=Pt(i,.0016,.002,0,n+.006,e+.003,s.dot,8);r.rotation.x=0,r.rotation.z=Math.PI/2,r.rotation.y=Math.PI/2;for(let a of[-1,1]){ut(i,.005,.009,.008,a*.0055,n+.004,t,s.blued,.001);let l=Pt(i,.0013,.002,a*.0055,n+.006,t-.0045,s.dotR,8);l.rotation.x=0}}var lh={pistol(i,e){let t=new He;i.add(t),i.userData.slide=t,_n(t,[[.02,0],[-.17,0],[-.172,.022],[-.165,.03],[.012,.03],[.02,.022]],.026,e.blued,{bevel:.002}),ut(t,.0262,.012,.032,0,.014,-.045,e.steel,.001);for(let n of[-1,1])for(let s=0;s<9;s++)ut(t,.0015,.022,.0016,n*.0132,.014,.008-s*.0036,e.steel,4e-4);for(let n of[-1,1])for(let s=0;s<6;s++)ut(t,.0015,.016,.0016,n*.0132,.012,-.13-s*.0036,e.steel,4e-4);oh(t,-.16,.008,.03,e),Pt(t,.0075,.012,0,.012,-.172,e.steel,20),Pt(t,.0045,.014,0,.012,-.175,e.poly,12),_n(i,[[.03,-.002],[-.16,-.002],[-.16,-.012],[-.06,-.016],[-.05,-.022],[0,-.018],[.006,-.03],[.022,-.13],[.06,-.13],[.045,-.02],[.034,-.008]],.028,e.poly,{bevel:.003});for(let n=0;n<4;n++)ut(i,.0285,.003,.012,0,-.012,-.075-n*.012,e.poly,.001);return vo(i,-.02,-.03,e),ut(i,.03,.006,.042,0,-.133,.042,e.blued,.002,-.2),ut(i,.004,.006,.014,.0145,-.008,-.02,e.steel,.001),ut(i,.0035,.008,.02,.0145,.005,.02,e.steel,.001),ut(i,.012,.014,.008,0,.018,.032,e.steel,.002),{muzzle:-.18,eject:-.045,pos:[.17,-.17,-.38],lz:-.04}},smg(i,e){_n(i,[[.09,0],[-.2,0],[-.2,.05],[.09,.05]],.05,e.park,{bevel:.004}),Pt(i,.016,.12,0,.026,-.26,e.blued,20);for(let t=0;t<6;t++)_d(i,.017,.0022,0,.026,-.22-t*.015,e.steel).rotation.y=0;for(let t=0;t<6;t++)ut(i,.052,.003,.012,0,.051,-.18+t*.03,e.blued,.001);oh(i,-.19,.06,.052,e),ut(i,.036,.16,.026,0,-.08,-.06,e.blued,.004,.12);for(let t=0;t<8;t++)ut(i,.038,.004,.028,0,-.01-t*.018,-.06+t*.002,e.steel,.001,.12);return _n(i,[[0,0],[.03,0],[.05,-.11],[.02,-.11]],.032,e.poly,{bevel:.004}),vo(i,-.005,-.012,e),Pt(i,.006,.2,.018,.02,.18,e.steel,10),Pt(i,.006,.2,-.018,.02,.18,e.steel,10),ut(i,.05,.07,.012,0,0,.28,e.poly,.004),ut(i,.012,.012,.03,.03,.03,.02,e.steel,.003),{muzzle:-.33,eject:-.05,pos:[.19,-.19,-.4],lz:-.2}},shotgun(i,e){_n(i,[[.06,-.01],[-.14,-.01],[-.14,.055],[.04,.055],[.06,.04]],.05,e.blued,{bevel:.004}),Pt(i,.0125,.6,0,.038,-.44,e.blued,22),Pt(i,.0145,.52,0,0,-.4,e.blued,22),_d(i,.016,.003,0,0,-.66,e.steel);let t=new he(new ln(.003,10,8),e.brass);t.position.set(0,.052,-.735),i.add(t);let n=_n(i,[[-.28,-.02],[-.46,-.02],[-.46,.02],[-.28,.02]],.05,e.wood,{bevel:.008});for(let s=0;s<9;s++)ut(i,.052,.004,.006,0,-.022,-.3-s*.017,e.wood,.002);return i.userData.pump=n,_n(i,[[.06,.04],[.32,.03],[.34,.05],[.36,-.1],[.3,-.11],[.1,-.03],[.06,-.01]],.042,e.wood,{bevel:.008}),ut(i,.044,.15,.02,0,-.03,.355,e.poly,.006,-.12),vo(i,.035,-.02,e),ut(i,.051,.012,.05,0,.022,-.05,e.steel,.002),{muzzle:-.75,eject:-.05,pos:[.2,-.2,-.4],lz:-.38}},rifle(i,e){_n(i,[[.12,0],[-.17,0],[-.17,.045],[.12,.045]],.052,e.park,{bevel:.004});for(let n=0;n<18;n++)vd(i,.042,.004,.006,0,.049,-.16+n*.016,e.blued);_n(i,[[-.17,-.005],[-.44,-.005],[-.44,.05],[-.17,.05]],.056,e.polyTan,{bevel:.006});for(let n=0;n<7;n++)for(let s of[-1,1])vd(i,.004,.018,.022,s*.028,.022,-.2-n*.034,e.poly);Pt(i,.0095,.26,0,.022,-.56,e.blued,18),Pt(i,.016,.05,0,.022,-.71,e.park,6);for(let n=0;n<3;n++)ut(i,.004,.006,.03,.017,.03,-.71,e.poly,.001).rotation.z=n;ut(i,.008,.045,.012,0,.07,-.43,e.park,.002),Pt(i,.019,.1,0,.1,-.05,e.blued,24),Pt(i,.023,.03,0,.1,-.11,e.blued,24),Pt(i,.021,.025,0,.1,.01,e.blued,24);let t=Pt(i,.019,.002,0,.1,-.126,e.glass,24);ut(i,.024,.03,.05,0,.068,-.05,e.park,.003),_n(i,[[0,0],[-.06,0],[-.06,-.12],[-.03,-.14],[0,-.12]],.03,e.park,{bevel:.003}).rotation.x=-.15;for(let n=0;n<6;n++)vd(i,.032,.003,.03,0,-.03-n*.02,-.03+n*.003,e.blued,-.15);return _n(i,[[.03,-0],[.07,-0],[.09,-.11],[.055,-.115]],.032,e.poly,{bevel:.004}),vo(i,0,-.012,e),Pt(i,.014,.14,0,.025,.19,e.poly,16),_n(i,[[.2,.05],[.36,.045],[.36,-.07],[.33,-.08],[.2,0]],.044,e.polyTan,{bevel:.006}),ut(i,.046,.13,.014,0,-.012,.365,e.poly,.005),ut(i,.014,.014,.034,.03,.03,0,e.steel,.003),{muzzle:-.74,eject:-.03,pos:[.2,-.2,-.4],lz:-.3}},lmg(i,e){_n(i,[[.12,-.01],[-.2,-.01],[-.2,.06],[.12,.06]],.07,e.park,{bevel:.005}),ut(i,.075,.03,.2,0,.075,-.06,e.park,.004);for(let t=0;t<12;t++)ut(i,.05,.005,.008,0,.093,-.15+t*.016,e.blued,.001);Pt(i,.024,.36,0,.025,-.38,e.blued,22);for(let t=0;t<14;t++)_d(i,.026,.004,0,.025,-.24-t*.02,e.park);Pt(i,.012,.16,0,.025,-.64,e.blued,16),Pt(i,.018,.06,0,.025,-.73,e.park,8),ut(i,.13,.13,.15,0,-.1,-.03,e.polyTan,.012);for(let t=0;t<5;t++)ut(i,.132,.006,.152,0,-.15+t*.025,-.03,e.poly,.002);for(let t=0;t<6;t++)Pt(i,.005,.03,.04,.05,-.01+t*.011,e.brass,8).rotation.set(0,0,Math.PI/2);_n(i,[[.04,-.01],[.08,-.01],[.1,-.12],[.065,-.125]],.034,e.poly,{bevel:.004}),vo(i,.01,-.02,e),_n(i,[[.12,.05],[.4,.04],[.4,-.08],[.36,-.09],[.12,-.01]],.05,e.poly,{bevel:.007}),oh(i,-.66,.08,.093,e);for(let t of[-1,1]){let n=Pt(i,.005,.18,t*.03,-.05,-.62,e.steel,8);n.rotation.x=Math.PI/2+.35}return{muzzle:-.76,eject:-.02,pos:[.2,-.21,-.4],lz:-.3}},akimbo(i,e){let t=new He;t.position.set(-.12,-.01,.02),t.rotation.y=.22,t.rotation.z=.08;let n=new He;n.position.set(.12,-.01,0),n.rotation.y=-.12,n.rotation.z=-.04,i.add(t,n);let s=lh.pistol(t,e),r=lh.pistol(n,e),a=new Tt;a.position.set(0,.012,s.muzzle),t.add(a);let l=new Tt;l.position.set(0,.012,r.muzzle),n.add(l),ut(t,.048,.04,.07,.01,-.09,.01,e.glove,.012),ut(n,.048,.04,.07,-.01,-.09,0,e.glove,.012);let c=new he(new At(.032,.04,.28,12),e.sleeve);c.rotation.set(Math.PI/2,.4,.2),c.position.set(-.08,-.16,.16),i.add(c);let o=new he(new At(.032,.04,.28,12),e.sleeve);return o.rotation.set(Math.PI/2,-.2,-.15),o.position.set(.08,-.16,.16),i.add(o),{muzzle:r.muzzle,eject:-.04,pos:[0,-.16,-.36],lz:0,akimbo:!0,muzzles:[a,l],slides:[t.userData.slide,n.userData.slide]}},lever(i,e){Pt(i,.011,.62,0,.03,-.42,e.blued,18),Pt(i,.016,.18,0,.012,-.22,e.steel,16),_n(i,[[.02,.02],[.28,.015],[.3,-.08],[.24,-.09],[.06,-.01]],.04,e.wood,{bevel:.006}),ut(i,.038,.12,.016,0,-.02,.29,e.poly,.004);let t=new he(new Jn(.045,.004,6,16,Math.PI),e.steel);return t.rotation.set(0,Math.PI/2,Math.PI),t.position.set(0,-.04,.02),i.add(t),i.userData.pump=t,oh(i,-.7,.02,.045,e),Pt(i,.008,.04,0,.03,-.74,e.blued,12),ut(i,.03,.05,.04,0,-.02,.04,e.wood,.004),{muzzle:-.76,eject:0,pos:[.18,-.18,-.42],lz:-.28}},nailer(i,e){ut(i,.09,.11,.22,0,0,-.02,e.park,.008),ut(i,.07,.06,.16,0,-.02,.12,e.polyTan,.006),Pt(i,.012,.16,0,.01,-.2,e.steel,14),Pt(i,.02,.04,0,.01,-.28,e.blued,12);for(let s=0;s<5;s++)ut(i,.004,.012,.05,.048,.02-s*.012,-.02,e.brass,.001);let t=new he(new Jn(.05,.006,6,14),e.poly);t.rotation.x=Math.PI/2,t.position.set(.02,-.02,.2),i.add(t),ut(i,.035,.08,.04,0,-.08,.02,e.poly,.004,.3);let n=Pt(i,.004,.02,0,.01,-.31,e.dot,8);return n.material=e.dot,{muzzle:-.32,eject:-.02,pos:[.2,-.18,-.36],lz:-.08}},sawed(i,e){Pt(i,.014,.28,.012,.02,-.16,e.blued,16),Pt(i,.014,.28,-.012,.02,-.16,e.blued,16),ut(i,.05,.04,.08,0,0,-.02,e.steel,.004),_n(i,[[0,0],[.02,-.02],[.05,-.12],[.02,-.13],[-.01,-.02]],.032,e.wood,{bevel:.005}),ut(i,.02,.03,.02,.03,.03,0,e.steel,.002);let t=new he(new ln(.004,8,6),e.brass);return t.position.set(0,.04,-.3),i.add(t),{muzzle:-.31,eject:-.02,pos:[.18,-.16,-.34],lz:-.02}}},yd;function V1(){if(yd)return yd;let i=_o(128,(e,t)=>{let n=t/2,s=e.createRadialGradient(n,n,0,n,n,n);s.addColorStop(0,"rgba(255,250,230,1)"),s.addColorStop(.25,"rgba(255,190,90,0.9)"),s.addColorStop(1,"rgba(255,90,20,0)"),e.fillStyle=s;for(let r=0;r<7;r++)e.save(),e.translate(n,n),e.rotate(r/7*6.283+It(-.2,.2)),e.beginPath(),e.moveTo(0,-6),e.lineTo(n*It(.7,1),0),e.lineTo(0,6),e.fill(),e.restore();e.beginPath(),e.arc(n,n,n*.35,0,7),e.fill()});return i.wrapS=i.wrapT=ii,yd=new lt({map:i,color:new fe(3,2.2,1.2),blending:Qt,transparent:!0,depthWrite:!1,side:cn,toneMapped:!1})}function M0(i,e=!0){let t=H1(),n=new He,s=(lh[i]||lh.rifle)(n,t);if(!e){let d=new Tt;return n.userData={muzzle:d,eject:d,base:new D},n}if(!s.akimbo){ut(n,.05,.08,.075,0,-.065,.035,t.glove,.018).rotation.x=.25;for(let p=0;p<3;p++)ut(n,.052,.016,.03,.002,-.04-p*.02,0,t.glove,.007);let d=new he(new At(.034,.042,.32,16),t.sleeve);d.rotation.x=Math.PI/2-.25,d.position.set(.02,-.13,.22),n.add(d);let u=ut(n,.055,.05,.09,i==="pistol"?-.018:-.028,i==="pistol"?-.07:-.03,s.lz,t.glove,.016),f=new he(new At(.034,.042,.34,16),t.sleeve);f.rotation.set(Math.PI/2-.1,.35,0),f.position.set(-.1,-.12,s.lz+.22),n.add(f)}n.traverse(d=>{d.isMesh&&(d.castShadow=!1)});let r=new Tt;r.position.set(0,i==="pistol"?.012:.022,s.muzzle),n.add(r);let a=new Tt;a.position.set(.04,.03,s.eject),n.add(a);let l=new He,c=V1();for(let d=0;d<2;d++){let u=new he(new on(.06,.16),c);u.rotation.set(Math.PI/2,d*Math.PI/2,0),u.position.z=-.07,l.add(u)}let o=new he(new on(.12,.12),c);l.add(o),l.position.copy(r.position),l.visible=!1,n.add(l);let h=0;return n.traverse(d=>{d.isMesh&&(h+=(d.geometry.index?d.geometry.index.count:d.geometry.attributes.position.count)/3)}),n.userData={muzzle:r,eject:a,flash:l,slide:n.userData.slide,slides:s.slides||null,muzzles:s.muzzles||null,pump:n.userData.pump,base:new D(...s.pos),tris:Math.round(h)},n.userData.base.z-=.1,n.userData.base.x-=.03,n.position.copy(n.userData.base),n.scale.setScalar(.9),n}var Ot={pistol:{id:"pistol",name:"Dustdevil .45",dmg:30,rpm:380,auto:!1,mag:12,reserve:60,reload:1.25,spread:.004,pellets:1,kick:.01,shake:.12,price:0,head:3.2,snd:"pistol",range:90},smg:{id:"smg",name:"Rattler SMG",dmg:22,rpm:820,auto:!0,mag:32,reserve:160,reload:1.6,spread:.014,pellets:1,kick:.006,shake:.08,price:600,head:2.4,snd:"smg",range:80},shotgun:{id:"shotgun",name:"Sidewinder 12g",dmg:17,rpm:78,auto:!1,mag:6,reserve:42,reload:.5,perShell:!0,spread:.055,pellets:9,kick:.04,shake:.4,price:1200,head:2,snd:"shotgun",range:30},rifle:{id:"rifle",name:"Ridgeback AR",dmg:42,rpm:620,auto:!0,mag:30,reserve:150,reload:1.9,spread:.007,pellets:1,kick:.013,shake:.18,price:1800,head:2.6,snd:"rifle",range:120},lmg:{id:"lmg",name:"Hog Hammer LMG",dmg:40,rpm:700,auto:!0,mag:100,reserve:300,reload:3.8,spread:.012,pellets:1,kick:.012,shake:.2,price:0,crateOnly:!0,head:2.4,snd:"lmg",range:110},akimbo:{id:"akimbo",name:"Twin Dustdevils",dmg:26,rpm:500,auto:!1,mag:24,reserve:96,reload:1.7,spread:.009,pellets:1,kick:.008,shake:.1,price:750,head:2.6,snd:"akimbo",range:70,akimbo:!0},lever:{id:"lever",name:"Barn Lever",dmg:70,rpm:55,auto:!1,mag:7,reserve:35,reload:.48,perShell:!0,spread:.002,pellets:1,kick:.02,shake:.16,price:1500,head:3,snd:"lever",range:110},nailer:{id:"nailer",name:"Shop Nailer",dmg:14,rpm:900,auto:!0,mag:36,reserve:144,reload:1.5,spread:.022,pellets:1,kick:.003,shake:.05,price:800,head:1.4,snd:"nailer",range:22},sawed:{id:"sawed",name:"Sawed-off",dmg:24,rpm:200,auto:!1,mag:2,reserve:20,reload:1.7,spread:.11,pellets:8,kick:.06,shake:.55,price:0,crateOnly:!0,head:1.5,snd:"sawed",range:14}},yo=["smg","shotgun","rifle","lmg","sawed","lever"],mw=new je({color:2895669,metalness:.9,roughness:.34}),gw=new je({color:5593439,metalness:.85,roughness:.28}),xw=new je({color:4072982,metalness:0,roughness:.55}),vw=new je({color:1626528,metalness:.4,roughness:.3,emissive:678469,emissiveIntensity:.8}),_w=new je({color:12946539,roughness:.7}),yw=new je({color:4016698,roughness:.9}),Mw=new je({color:1776928,roughness:.8});function Mo(i,e=!0){return M0(i,e)}var Md={discount:.5,pickup:1.35,deliver:1.9,board:1.7,radio:3.6,decay:.5,lots:{C:{x0:24,x1:50.4,z0:2,z1:22},D:{x0:-50.4,x1:-24,z0:-34,z1:-2},E:{x0:4,x1:24.4,z0:-76.4,z1:-52}},gates:[{id:"AB",price:1250,name:"Back lot",blurb:"The back lot awaits",areas:["A","B"],x:0,z:-24,w:6,axis:"x",stand:{A:{x:0,z:-22.2},B:{x:0,z:-25.8}}},{id:"AC",price:1500,name:"Lot C",blurb:"Fuel yard open",areas:["A","C"],x:24,z:12,w:5,axis:"z",stand:{A:{x:22.2,z:12},C:{x:25.8,z:12}}},{id:"AD",price:1750,name:"Lot D",blurb:"Bus barn open",areas:["A","D"],x:-24,z:-14,w:5,axis:"z",stand:{A:{x:-22.2,z:-14},D:{x:-25.8,z:-14}}},{id:"SD",price:900,name:"Side access",blurb:"Side gate open",areas:["B","D"],x:-24,z:-30,w:4.2,axis:"z",stand:{B:{x:-22.2,z:-30},D:{x:-25.8,z:-30}}},{id:"BE",price:2e3,name:"Lot E",blurb:"Radio yard open",areas:["B","E"],x:12,z:-52,w:5,axis:"x",stand:{B:{x:12,z:-50.2},E:{x:12,z:-53.8}}}],jobs:[{id:"fuel",title:"Fuel Run",kind:"carry",gate:"AC",area:"A",need:3,pts:400,power:"double",pad:{x:19.2,z:12},items:[{id:"f0",x:15,z:19},{id:"f1",x:-16,z:18},{id:"f2",x:6,z:4}]},{id:"bus",title:"Board the Bus",kind:"board",gate:"AD",area:"A",need:4,pts:500,power:"ammo",pad:{x:-15,z:4.2},items:[{id:"b0",x:-16.45,z:.2},{id:"b1",x:-16.45,z:2.1},{id:"b2",x:-13.55,z:.2},{id:"b3",x:-13.55,z:2.1}]},{id:"carb",title:"Carb Hunt",kind:"carry",gate:"SD",area:"B",need:1,pts:350,power:"double",pad:{x:-18.2,z:-30},items:[{id:"carb",x:-6,z:20}]},{id:"radio",title:"Radio Hold",kind:"radio",gate:"BE",area:"B",need:20,pts:600,power:"ammo",pad:{x:8,z:-42},items:[]},{id:"parts",title:"Part Collection",kind:"carry",gate:"",area:"C",need:3,pts:450,power:"double",pad:{x:40,z:5.5},items:[{id:"p0",x:32,z:18},{id:"p1",x:46,z:16},{id:"p2",x:36,z:9}]},{id:"clear",title:"Clear Lot D",kind:"clear",gate:"",area:"D",need:8,pts:500,power:"ammo",pad:{x:-37,z:-18},items:[]}]};var gn=Md,bd=-24;function Qi(i,e,t="junkyard"){if(typeof e!="number")return i>bd?"A":"B";if(t!=="junkyard")return e>bd?"A":"B";let n=Md.lots;for(let s of["C","D","E"]){let r=n[s];if(i>r.x0&&i<r.x1&&e>r.z0&&e<r.z1)return s}return e>bd?"A":(e>=-52,"B")}function ch(i){let e=new Set((i||[]).filter(n=>n&&n.open).map(n=>n.id)),t=new Set(["A"]);return e.has("AB")&&t.add("B"),e.has("AC")&&t.add("C"),(e.has("AD")||e.has("SD"))&&t.add("D"),e.has("BE")&&t.add("E"),t}function b0(i,e){return i.stand&&i.stand[e]||{x:i.x,z:i.z}}function W1(i,e,t){if(!i||!e||i===e)return i===e?[]:null;let n=new Map;for(let c of t||[]){if(!c||!c.open||!c.areas||c.areas.length<2)continue;let[o,h]=c.areas;n.has(o)||n.set(o,[]),n.has(h)||n.set(h,[]),n.get(o).push(c),n.get(h).push(c)}let s=[i],r=new Map([[i,null]]);for(;s.length;){let c=s.shift();if(c===e)break;for(let o of n.get(c)||[]){let h=o.areas[0]===c?o.areas[1]:o.areas[0];r.has(h)||(r.set(h,{via:o,from:c}),s.push(h))}}if(!r.has(e))return null;let a=[],l=e;for(;r.get(l);)a.push(r.get(l).via),l=r.get(l).from;return a.reverse(),a}function S0(i,e,t,n,s,r=0){let a=Qi(i,e,t);if(!n||a===n)return null;let l=W1(a,n,s);if(!l||!l.length)return null;let c=l[0],o=c.areas[0]===a?c.areas[1]:c.areas[0],h=c.axis!=="z",d=b0(c,a),u=b0(c,o),f=h?Math.sign(u.z-d.z)||-1:Math.sign(u.x-d.x)||1,p=h?e:i,v=h?c.z:c.x,g=(p-v)*f,m=Math.max(.25,(c.w||6)/2-1.05),M=Math.max(-m,Math.min(m,r||0)),A=v+f*1.55;return{x:h?c.x+M:A,z:h?A:c.z+M,ex:h?c.x:A,ez:h?A:c.z,gate:c.id,next:o,progress:g,crossZ:h,gx:c.x,gz:c.z}}var yn=-24;function hh(i,e="#18d1a0",t=512,n=256){let s=document.createElement("canvas");s.width=t,s.height=n;let r=s.getContext("2d");r.fillStyle="rgba(8,12,16,0.82)",r.fillRect(0,0,t,n),r.strokeStyle=e,r.lineWidth=6,r.strokeRect(8,8,t-16,n-16),r.textAlign="center",r.textBaseline="middle",i.forEach((l,c)=>{r.font=`${l.w||700} ${l.s}px system-ui, "Segoe UI", Arial, sans-serif`,r.fillStyle=l.c||"#fff",r.fillText(l.t,t/2,l.y)});let a=new an(s);return a.colorSpace=Ut,a.anisotropy=4,a}var bo=class{constructor(e,t,n){this.scene=e,this.T=t,this.M=new rh(t),this.tier=n,this.colliders=[],this.windows=[],this.buys=[],this.lamps=[],this.dyn=[],this.fall=[],this.doorInfos=[],this.doors=[],this.missionMeshes=new Map,this.mapId="junkyard",this.staticGroup=new He,this.root=new He,e.add(this.root),this.build(),this.batch(),this.dress(n)}dress(e=this.tier){let t=e>0,n=this.M;n.sand.color.setHex(t?11047032:13615792),n.sand.bumpScale=t?5.5:3,n.sand.roughness=t?.96:.97,n.concrete.color.setHex(t?13154984:16777215),n.concrete.bumpScale=t?2.8:1.5,n.concrete.roughness=t?.96:.88,n.concrete.metalness=t?0:.02,n.fence.roughness=t?.42:1,n.fence.metalness=t?.84:.75,n.fence.bumpScale=t?4.2:2.5,n.fenceDark.roughness=t?.6:1,n.fenceDark.metalness=t?.55:.7;for(let s of Object.values(n.cache))s.userData.paint&&(s.roughness=t?.4:1,s.metalness=t?.25:.55);if(this.lampReach=t?18:30,this.lampDecay=t?2:1.7,this.lampBase=t?90:95,this.moon&&(this.moon.intensity=t?1.4:1.7),this.lampPool)for(let s of this.lampPool)s.distance=this.lampReach,s.decay=this.lampDecay;m0(e)}addCol(e,t,n,s,r=3,a={}){let l={x0:e,x1:t,z0:n,z1:s,y0:a.y0||0,y1:r,...a};return this.colliders.push(l),l}box(e,t,n,s,r,a,l,c={}){let o=new he(new it(e,t,n),l);return o.position.set(s,r,a),o.castShadow=c.cast!==!1,o.receiveShadow=!0,(c.dynamic?this.root:this.staticGroup).add(o),o}place(e,t,n,s=0,r=!0){if(e.position.x+=t,e.position.z+=n,e.rotation.y=s,e.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),this.staticGroup.add(e),r&&e.userData.size){let[a,l,c]=e.userData.size;Math.abs(Math.sin(s))>.7&&([a,c]=[c,a]),this.addCol(t-a/2+.05,t+a/2-.05,n-c/2+.05,n+c/2-.05,l)}return e}build(){let{M:e,T:t,scene:n}=this;this.mapId="junkyard",this.buildSky(),this.buildGround();let s=3.2,r=.4,a=(d,u,f,p=[],v=e.fence)=>this.wall("x",d,u,f,p,s,r,v),l=(d,u,f,p=[],v=e.fence)=>this.wall("z",d,u,f,p,s,r,v),c=d=>{let u=gn.gates.find(f=>f.id===d);return{c:u.axis==="x"?u.x:u.z,id:u.id,door:!0,w:u.w,price:u.price,name:u.name,blurb:u.blurb,areas:u.areas,stand:u.stand}};a(24,-24,24,[{c:-10,id:"S1",area:"A"},{c:11,id:"S2",area:"A"}]),l(24,-24,24,[{c:-4,id:"E1",area:"A"},c("AC")]),l(-24,-24,24,[{c:6,id:"W1",area:"A"},c("AD")]),a(-24,-24,24,[c("AB")]),l(24,-52,-24,[{c:-40,id:"E2",area:"B"}]),l(-24,-52,-24,[{c:-38,id:"W2",area:"B"},c("SD")]),a(-52,-24,24,[{c:-12,id:"N1",area:"B"},c("BE")]);let o=(d,u,f,p)=>{let v=new he(new on(d,u),e.concrete);v.rotation.x=-Math.PI/2,v.position.set(f,.015,p),v.receiveShadow=!0,this.staticGroup.add(v)};o(48,48,0,0),o(48,28,0,-38),this.buildLots(a,l,o),this.buildGate();let h=this.place.bind(this);h(Qn(e,6010272,{door:!0}),-9,-9,.2*0),h(Qn(e,14252330,{missing:!0,tilt:.04}),13,-10,Math.PI/2),h(ri(e,6197184),9,11,Math.PI/2),h(ri(e,14252330,15129792,{missing:!0}),-15,1,0),h(Qn(e,14733722),-4,16,Math.PI/2+0),h(Qn(e,11680302,{tilt:-.05}),19,16,0),h(ri(e,9087050,15129792),3,-14,Math.PI/2);for(let[d,u,f]of[[17,2,5],[-20,-5,4],[-3,-4,3],[-19,19,6],[21,-20,4]])h(po(e,f),d,u);for(let[d,u,f]of[[5,19,3829413],[6.2,19.8,11680302],[4.4,20.6,9087050],[-1,-19,14252330],[.2,-20,3829413]])h(Es(e,f),d,u);h(Nn(e,1.1),-21,12),h(Nn(e,.9),-20.8,13.2),h(Nn(e,1.3),21,9),h(Nn(e,1),20.4,10.4),this.shack(18,-17,6,5),h(Qn(e,13619140,{missing:!0}),-12,-36,Math.PI/2),h(Qn(e,6010272,{tilt:.05}),14,-46,.3*0),h(ri(e,11680302,15129792),6,-35,0),h(ri(e,6010272,15129792,{tilt:.04}),-10,-47,Math.PI/2),h(Qn(e,13803834,{door:!0}),0,-43,Math.PI/2);for(let[d,u,f]of[[18,-30,5],[-20,-29,3],[19,-36,4],[-3,-30,4]])h(po(e,f),d,u);for(let[d,u,f]of[[-19,-49,14252330],[-18,-50,3829413],[20,-50,11680302]])h(Es(e,f),d,u);h(Nn(e,1.2),21,-46),h(Nn(e,1),-21,-42),h(Nn(e,.9),20.6,-47.4);for(let[d,u,f,p]of[[-11,11,0,.6],[14,5,0,2.6],[-13,-12,1,-.5],[10,-19,0,3.4],[-8,-30,0,.3],[11,-40,1,3],[-4,-49,0,1.4]]){let v=mo(this.M,!!f);v.position.set(d,0,u),v.rotation.y=p,v.traverse(m=>{m.isMesh&&(m.castShadow=!m.userData.bulb)}),v.updateMatrixWorld(!0),this.addCol(d-.2,d+.2,u-.2,u+.2,5);let g=v.userData.bulbPos.clone().applyMatrix4(v.matrixWorld);this.lamps.push({pos:g,teal:!!f,ph:J(100)}),this.staticGroup.add(v)}this.wallBuy("smg",-14,yn+.25,0),this.wallBuy("shotgun",23.75,-15,-Math.PI/2),this.wallBuy("rifle",-23.75,-44,Math.PI/2),this.wallBuy("akimbo",23.75,8,-Math.PI/2),this.wallBuy("lever",-23.75,-32,Math.PI/2),this.wallBuy("nailer",10,23.65,Math.PI),this.nadeBuy(4,16.2,0),this.wallBuy("smg",49.65,12,-Math.PI/2),this.wallBuy("shotgun",-49.65,-16,Math.PI/2),this.wallBuy("rifle",18,-75.65,0),this.buildCrate(-17.5,14.5),this.scenery(),this.buildLights()}wall(e,t,n,s,r,a,l,c){let{M:o}=this,h=p=>p.w||3.2,d=[...r].sort((p,v)=>p.c-v.c),u=n,f=(p,v)=>{if(v-p<.05)return;let g=v-p,m=(p+v)/2,M=Math.max(1,Math.ceil(g/8));for(let A=0;A<M;A++){let _=p+g*A/M,E=p+g*(A+1)/M;this.wseg(e,t,_,E,a,l,c)}};for(let p of d)f(u,p.c-h(p)/2),this.opening(e,t,p,a,l,c),u=p.c+h(p)/2;f(u,s)}wseg(e,t,n,s,r,a,l){let c=s-n,o=(n+s)/2;e==="x"?(this.box(c,r,a,o,r/2,t,l),this.addCol(n,s,t-a/2,t+a/2,r),this.box(.35,r+.5,.55,n,(r+.5)/2,t,this.M.fenceDark),this.box(c,.1,.12,o,r+.4,t,this.M.fenceDark)):(this.box(a,r,c,t,r/2,o,l),this.addCol(t-a/2,t+a/2,n,s,r),this.box(.55,r+.5,.35,t,(r+.5)/2,n,this.M.fenceDark),this.box(.12,.1,c,t,r+.4,o,this.M.fenceDark))}opening(e,t,n,s,r,a){let{M:l}=this,c=n.w||3.2;if(n.door){let S=e==="x"?n.c:t,P=e==="x"?t:n.c;e==="x"?(this.box(.5,s+.8,.7,S-c/2,(s+.8)/2,P,l.fenceDark),this.box(.5,s+.8,.7,S+c/2,(s+.8)/2,P,l.fenceDark)):(this.box(.7,s+.8,.5,S,(s+.8)/2,P-c/2,l.fenceDark),this.box(.7,s+.8,.5,S,(s+.8)/2,P+c/2,l.fenceDark));let N=n.id==="DOOR"?"AB":n.id||"AB",z=n.areas||["A","B"],F=n.stand||(e==="x"?{A:{x:S,z:P+1.8},B:{x:S,z:P-1.8}}:{A:{x:S-1.8,z:P},B:{x:S+1.8,z:P}});this.doorInfos.push({id:N,x:S,z:P,w:c,axis:e,price:n.price||1250,name:n.name||"Back lot",blurb:n.blurb||"The back lot awaits",areas:z,stand:F});return}let o=e==="x"?{x:0,z:t>0?1:-1}:{x:t>0?1:-1,z:0};e==="x"&&t===-52&&(o.z=-1),n.outN&&(o=e==="x"?{x:0,z:n.outN}:{x:n.outN,z:0});let h=e==="x"?n.c:t,d=e==="x"?t:n.c,u=.95,f=2.5,p=c,v=(S,P,N)=>e==="x"?[S,P,r]:[r,P,S],[g,m,M]=v(p,u,0);this.box(g,m,M,h,u/2,d,a);let[A,_,E]=v(p,s-f,0);this.box(A,_,E,h,(s+f)/2,d,a);let w=l.wood;for(let S of[-1,1]){let[P,N,z]=v(.2,f-u,0);this.box(e==="x"?.2:r+.12,f-u,e==="x"?r+.12:.2,e==="x"?h+S*(p/2-.1):h,(u+f)/2,e==="x"?d:d+S*(p/2-.1),w)}this.addCol(e==="x"?h-p/2:h-r/2,e==="x"?h+p/2:h+r/2,e==="x"?d-r/2:d-p/2,e==="x"?d+r/2:d+p/2,u,{bulletOnly:!1}),this.addCol(e==="x"?h-p/2:h-r/2,e==="x"?h+p/2:h+r/2,e==="x"?d-r/2:d-p/2,e==="x"?d+r/2:d+p/2,s,{y0:f,bulletOnly:!0}),this.addCol(e==="x"?h-p/2:h-r/2,e==="x"?h+p/2:h+r/2,e==="x"?d-r/2-.02:d-p/2,e==="x"?d+r/2+.02:d+p/2,s,{noBullet:!0});let C=[],x=Math.atan2(o.x,o.z);for(let S=0;S<6;S++){let P=new he(new it(p-.15,.2,.07),l.wood),N=new D(h+o.x*.23,u+.16+S*.255,d+o.z*.23);P.position.copy(N),P.rotation.set(0,x,J(-.05,.05)),P.castShadow=!0,P.receiveShadow=!0,P.userData={home:N,rotZ:P.rotation.z,ry:x},this.root.add(P),C.push(P)}let b=new he(new it(e==="x"?.3:.06,.06,e==="x"?.06:.3),new lt({color:new fe(1.8,.3,.15),toneMapped:!1}));b.position.set(h-o.x*.3,2.85,d-o.z*.3),b.userData.noAO=!0,this.root.add(b),this.windows.push({id:n.id,area:n.area||Qi(h,d,this.mapId),c:new D(h,0,d),n:o,t:{x:-o.z,z:o.x},out:{x:h+o.x*1.5,z:d+o.z*1.5},in:{x:h-o.x*1.6,z:d-o.z*1.6},planks:C,count:6,attackers:0,cool:0,axis:e,lamp:b})}removePlank(e){if(e.count<=0)return!1;let t=e.planks[e.count-1];return e.count--,t.userData.fall={vx:e.n.x*J(1,3)+J(-1,1),vy:J(1,3),vz:e.n.z*J(1,3)+J(-1,1),t:0,rx:J(-6,6),rz:J(-6,6)},this.fall.push(t),!0}addPlank(e){if(e.count>=6)return!1;let t=e.planks[e.count];e.count++,t.userData.fall=null;let n=this.fall.indexOf(t);return n>=0&&this.fall.splice(n,1),t.visible=!0,t.position.copy(t.userData.home),t.rotation.set(0,t.userData.ry,t.userData.rotZ),!0}buildGate(){this.buildGates()}buildGates(){let{M:e}=this,t=new je({color:15251502,roughness:.6,metalness:.3});this.doors=[];for(let n of this.doorInfos){let s=n.axis!=="z",r=new He,a=new he(new it(s?n.w:.25,3.4,s?.25:n.w),e.fence);a.position.y=1.7,a.castShadow=a.receiveShadow=!0,r.add(a);let l=Math.max(3,Math.round(n.w));for(let h=0;h<l;h++){let d=new he(new it(s?.42:.05,3.4,s?.05:.42),h%2?t:e.fenceDark),u=-n.w/2+n.w*(h+.5)/l;d.position.set(s?u:.15,1.7,s?.15:u),r.add(d)}r.position.set(n.x,0,n.z),this.root.add(r);let c=s?this.addCol(n.x-n.w/2,n.x+n.w/2,n.z-.2,n.z+.2,3.4,{door:!0,gate:n.id}):this.addCol(n.x-.2,n.x+.2,n.z-n.w/2,n.z+n.w/2,3.4,{door:!0,gate:n.id}),o={id:n.id,mesh:r,open:!1,t:0,price:n.price,name:n.name,blurb:n.blurb,areas:n.areas,stand:n.stand,axis:n.axis,col:c,pos:{x:n.x,z:n.z},x:n.x,z:n.z};if(this.doors.push(o),n.id==="AB"){let h=new he(new on(7.5,1.9),new lt({map:this.T.sign,color:new fe(1.9,1.9,1.9),toneMapped:!1}));h.position.set(n.x,5,n.z+.45),this.staticGroup.add(h);for(let d of[-1,1])this.box(.18,4.4,.18,n.x+d*3.5,2.5,n.z+.4,e.fenceDark);this.signPos=new D(n.x,5,n.z+1)}else{let h=n.axis==="z"?Math.PI/2:0,d=new he(new on(3.4,.7),new lt({map:hh([{t:n.name.toUpperCase(),s:64,y:128,w:800,c:"#ffd36b"}],"#ffd36b",512,256),toneMapped:!1,color:new fe(.9,.9,.9)}));d.position.set(n.x,4.15,n.z),d.rotation.y=h,this.root.add(d)}}this.door=this.doors.find(n=>n.id==="AB")||this.doors[0]}buildLots(e,t,n){let{M:s}=this,r=this.place.bind(this);t(50,2,22,[{c:8,id:"C1",area:"C"},{c:16,id:"C2",area:"C"}]),e(22,24,50,[{c:36,id:"C3",area:"C"}]),e(2,24,50,[]),n(26,20,37,12),r(Qn(s,13803834,{missing:!0}),32,16,.4),r(ri(s,12868138,15129792),30,8,Math.PI/2);for(let[a,l,c]of[[40,18,11680302],[41.2,17.2,14252330],[39.2,18.8,3829413],[44,7,9087050]])r(Es(s,c),a,l);r(Nn(s,1.1),46,14),r(Nn(s,.9),46.8,15.1),this.lampAt(44,14,1,1.2),t(-50,-34,-2,[{c:-10,id:"D1",area:"D"},{c:-24,id:"D2",area:"D"}]),e(-2,-50,-24,[]),e(-34,-50,-24,[{c:-38,id:"D3",area:"D"}]),n(26,32,-37,-18),r(ri(s,6197184,15129792),-38,-10,0),r(ri(s,14252330,13616814,{tilt:.03}),-38,-24,0),r(Qn(s,9087050,{door:!0}),-44,-16,Math.PI/2),r(Nn(s,1.2),-46,-6),r(Nn(s,1),-32,-30),this.lampAt(-44,-22,0,.4),e(-76,4,24,[{c:8,id:"EN",area:"E"}]),t(4,-76,-52,[{c:-68,id:"EW",area:"E",outN:-1}]),t(24,-76,-52,[{c:-64,id:"EE",area:"E"}]),n(20,24,14,-64),r(Qn(s,13619140,{missing:!0,tilt:-.04}),10,-64,.6),r(ri(s,3829413,15129792),18,-68,Math.PI/2),r(Nn(s,1),8,-72),r(Es(s,14252330),20,-58),r(Es(s,3829413),21,-57.2),this.lampAt(10,-70,1,2.2),this.buildDressing()}lampAt(e,t,n,s){let r=mo(this.M,!!n);r.position.set(e,0,t),r.rotation.y=s,r.traverse(l=>{l.isMesh&&(l.castShadow=!l.userData.bulb)}),r.updateMatrixWorld(!0),this.addCol(e-.2,e+.2,t-.2,t+.2,5);let a=r.userData.bulbPos.clone().applyMatrix4(r.matrixWorld);this.lamps.push({pos:a,teal:!!n,ph:J(100)}),this.staticGroup.add(r)}buildDressing(){let{M:e}=this,t=f=>gn.jobs.find(p=>p.id===f),n=t("fuel").pad,s=t("carb").pad,r=t("radio").pad,a=t("parts").pad;this.box(1.5,.9,.9,21.05,.45,12,e.fenceDark),this.box(1.6,.12,1,21.05,.96,12,e.fence),this.addCol(20.3,21.8,11.55,12.45,1.05);let l=new he(new it(.28,.16,.16),new lt({color:new fe(.2,2.4,1.2),toneMapped:!1}));l.position.set(20.2,1.05,12),l.userData.noAO=!0,this.root.add(l),this.box(1.3,.75,.7,-19.5,.38,-31.15,e.wood),this.addCol(-20.2,-18.8,-31.55,-30.75,.9),this.box(1.4,.8,.7,42.2,.4,6.3,e.wood),this.addCol(41.5,42.9,5.95,6.65,.95),this.box(.18,5.2,.18,9.4,2.6,-43.4,e.fenceDark),this.box(1.1,.16,.16,9.4,4.9,-43.4,e.fence),this.box(.7,.45,.4,6.7,.9,-43.1,e.fenceDark),this.addCol(9.25,9.55,-43.55,-43.25,5.2);let c=new he(new ln(.12,8,6),new lt({color:new fe(2.2,.35,.25),toneMapped:!1}));c.position.set(9.9,5.05,-43.4),c.userData.noAO=!0,this.root.add(c),this.box(.16,6.4,.16,16,3.2,-62,e.fenceDark),this.box(1.4,.1,.1,16,6.2,-62,e.fence),this.addCol(15.85,16.15,-62.15,-61.85,6.4);let o=(f,p,v,g)=>{g.position.set(p,0,v),g.traverse(m=>{m.isMesh&&(m.castShadow=!0,m.receiveShadow=!0)}),this.root.add(g),this.missionMeshes.set(f,g)},h=()=>{let f=new He;f.add(new he(new At(.16,.18,.42,8),e.paint(11680302))),f.children[0].position.y=.22;let p=new he(new At(.07,.07,.12,6),e.fenceDark);return p.position.y=.46,f.add(p),f};for(let f of t("fuel").items)o(f.id,f.x,f.z,h());let d=new He;d.add(new he(new it(.28,.16,.2),e.chrome)),d.children[0].position.y=.2;let u=new he(new At(.05,.08,.22,6),e.paint(13803834));u.position.set(0,.28,0),d.add(u),o("carb",t("carb").items[0].x,t("carb").items[0].z,d);for(let f of t("parts").items){let p=new He,v=new he(new Jn(.16,.05,6,10),e.chrome);v.rotation.x=Math.PI/2,v.position.y=.12,p.add(v),o(f.id,f.x,f.z,p)}for(let f of t("bus").items){let p=new He,v=new he(new it(.08,.55,.7),e.wood);v.position.y=1.35,p.add(v),o(f.id,f.x,f.z,p)}for(let[f,p]of this.missionMeshes)p.visible=f.startsWith("f");this._dress={fuel:n,carb:s,radio:r,parts:a}}resetDoors(){for(let e of this.doors)e.open=!1,e.t=0,e.mesh.position.y=0,e.col.off=!1}shack(e,t,n,s){let{M:r}=this;this.box(n,3,s,e,1.5,t,r.fence),this.box(n+.5,.2,s+.5,e,3.1,t,r.fenceDark),this.addCol(e-n/2,e+n/2,t-s/2,t+s/2,3.2),this.box(1.4,2.1,.1,e-1.2,1.05,t+s/2+.05,r.wood,{cast:!1});let a=new he(new on(1.4,.9),new lt({color:new fe(2.6,1.7,.7),toneMapped:!1}));a.position.set(e+1.5,1.8,t+s/2+.03),this.staticGroup.add(a)}nadeBuy(e,t,n){let s=new He;s.position.set(e,1.7,t),s.rotation.y=n;let r=new he(new ln(.22,10,8),new je({color:9048088,roughness:.4}));r.position.set(0,.35,.2);let a=new he(new At(.06,.06,.1,6),new je({color:16722490,emissive:4849672}));a.position.set(0,.58,.2);let l=new he(new on(2.4,1.2),new lt({map:hh([{t:"BLOOD BAIT",s:48,y:88,w:800,c:"#ff5a6e"},{t:"$250  \xB7  G TO THROW",s:32,y:168,c:"#ffd36b"}],"#ff5a6e"),toneMapped:!1}));l.position.set(0,-.35,.04);let c=new he(new it(2.6,2.2,.08),this.M.fenceDark);c.position.set(0,.05,0),s.add(c,l,r,a),this.root.add(s);let o=Math.sin(n),h=Math.cos(n);this.buys.push({id:"nade",price:250,pos:{x:e+o*.9,z:t+h*.9},name:"Blood Bait"})}wallBuy(e,t,n,s){if(e==="nade"){this.nadeBuy(t,n,s);return}let r=Ot[e],a=new He;a.position.set(t,1.7,n),a.rotation.y=s;let l=new he(new on(2.4,1.2),new lt({map:hh([{t:r.name.toUpperCase(),s:44,y:88,w:800},{t:"$"+r.price+"  \xB7  AMMO $"+Math.floor(r.price/2),s:36,y:168,c:"#ffd36b"}]),toneMapped:!1,color:new fe(.9,.9,.9)}));l.position.set(0,-.35,.04);let c=Mo(e,!1);c.position.set(0,.35,.18),c.rotation.y=Math.PI/2,c.scale.setScalar(1.7),c.userData.base=null;let o=new he(new it(2.6,2.2,.08),this.M.fenceDark);o.position.set(0,.05,0),a.add(o,l,c),a.traverse(u=>{u.isMesh&&(u.castShadow=!1)}),this.root.add(a);let h=Math.sin(s),d=Math.cos(s);this.buys.push({id:e,price:r.price,pos:{x:t+h*.9,z:n+d*.9},name:r.name})}buildCrate(e,t){let{M:n}=this,s=new He;s.position.set(e,0,t),s.rotation.y=.5;let r=n.paint(2078874),a=new he(new it(1.3,.7,.8),r);a.position.y=.35,s.add(a);let l=new He;l.position.set(0,.7,-.4);let c=new he(new it(1.3,.2,.8),r);c.position.set(0,.1,.4),l.add(c),s.add(l);for(let f of[-.45,.45]){let p=new he(new it(.1,.92,.84),n.fenceDark);p.position.set(f,.46,0),s.add(p)}let o=new he(new it(.4,.06,.06),n.chrome);o.position.set(0,.8,.43),s.add(o);let h=new he(new on(.8,.4),new lt({map:hh([{t:"LUCKY",s:70,y:70,w:900,c:"#18ffb0"},{t:"TOOLBOX",s:62,y:150,w:900,c:"#fff"},{t:"950",s:52,y:215,c:"#ffd36b"}],"#18ffb0",384,256),toneMapped:!1,color:new fe(.9,.9,.9)}));h.position.set(0,.38,.41),s.add(h),s.traverse(f=>{f.isMesh&&!f.material.isMeshBasicMaterial&&(f.castShadow=!0,f.receiveShadow=!0)});let d=new he(new At(.5,.65,9,16,1,!0),new vt({transparent:!0,depthWrite:!1,blending:Qt,side:cn,uniforms:{c:{value:new fe(.1,1,.7)},k:{value:.35}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(1.-vy,2.2)*pow(f,2.5)*k); }"}));d.position.set(0,4.5,0),d.userData.noAO=!0,s.add(d),this.root.add(s),this.addCol(e-.8,e+.8,t-.8,t+.8,1);let u=new He;u.position.set(0,1.5,.1),s.add(u),this.crate={group:s,lid:l,hold:u,beam:d,pos:{x:e,z:t},price:950,state:"idle",t:0,weapon:null,shown:null,model:null,x:e,z:t}}buildSky(){let e=new vt({side:vn,depthWrite:!1,fog:!1,uniforms:{moonDir:{value:new D(-.55,.6,.58).normalize()}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vP; uniform vec3 moonDir;
        float h(vec3 p){ return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ vec3 d=normalize(vP); float y=clamp(d.y,-.2,1.);
          vec3 hor=vec3(.20,.12,.16), mid=vec3(.025,.045,.10), top=vec3(.004,.008,.03);
          vec3 c=mix(hor,mid,smoothstep(0.,.25,y)); c=mix(c,top,smoothstep(.2,.9,y)); c+=vec3(.5,.18,.1)*pow(max(0.,1.-abs(y)*4.),3.)*.35;
          vec3 g=floor(d*220.); float s=step(.9975,h(g))*smoothstep(.05,.3,y); c+=vec3(.9,.95,1.)*s*(.4+.4*h(g+3.))*0.8;
          float md=dot(d,moonDir); c+=vec3(.75,.85,1.)*smoothstep(.9992,.9996,md)*2.5; c+=vec3(.25,.35,.6)*pow(max(0.,md),60.)*.5+vec3(.1,.15,.3)*pow(max(0.,md),8.)*.25;
          gl_FragColor=vec4(c,1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.sky=new he(new ln(500,32,16),e),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.sky.userData.noAO=!0,this.scene.add(this.sky),this.moonDir=e.uniforms.moonDir.value}buildGround(){let e=new he(new on(1200,1200),this.M.sand);e.rotation.x=-Math.PI/2,e.receiveShadow=!0,this.scene.add(e),this.ground=e}scenery(){let{M:e}=this,t=this.staticGroup,n=(c,o)=>c>-26&&c<26&&o>-54&&o<26||c>22&&c<52&&o>0&&o<24||c<-22&&c>-52&&o>-36&&o<0||c>2&&c<26&&o<-50&&o>-78,s=e.sand.clone();s.map=e.sand.map.clone(),s.map.repeat.set(6,3),s.bumpMap=e.sand.bumpMap.clone(),s.bumpMap.repeat.set(6,3),s.color=new fe(12034436),s.bumpScale=1.5;let r,a=()=>r||(r=(()=>{let c=new ln(1,40,14,0,Zt,0,Math.PI/2),o=c.attributes.position;for(let h=0;h<o.count;h++){let d=o.getX(h),u=o.getY(h),f=o.getZ(h),p=Math.atan2(f,d),v=u*(.75+.25*Math.sin(p*3+1)+.12*Math.sin(p*7));o.setXYZ(h,d*(1+.08*Math.sin(p*5)),Math.pow(Math.max(v,0),1.6),f)}return c.computeVertexNormals(),c})());for(let c=0;c<26;c++){let o=J(Zt),h=J(60,190),d=Math.cos(o)*h,u=-14+Math.sin(o)*h,f=Math.min(J(14,38),(h-48)/2.1);if(f<6)continue;let p=new he(a(),s);p.scale.set(f*J(1.2,2),f*J(.12,.28),f*J(1,1.6)),p.position.set(d,0,u),p.rotation.y=J(3),p.receiveShadow=!0,t.add(p)}let l=e.flat(2762292,1,0);for(let c=0;c<12;c++){let o=c/12*Zt+J(-.2,.2),h=J(230,330),d=J(30,70),u=J(25,60),f=new he(new At(d*.55,d*.8,u,6),l);f.position.set(Math.cos(o)*h,u/2-2,-14+Math.sin(o)*h),f.rotation.y=J(3),t.add(f)}for(let c=0;c<38;c++){let o,h,d=0;do{let f=J(Zt),p=J(34,90);o=Math.cos(f)*p,h=-14+Math.sin(f)*p*.9}while(n(o,h)&&++d<20);let u=_0(e);u.position.set(o,0,h),u.rotation.y=J(3),u.traverse(f=>{f.isMesh&&(f.castShadow=!0)}),t.add(u)}for(let c=0;c<40;c++){let o,h,d=0;do{let f=J(Zt),p=J(30,110);o=Math.cos(f)*p,h=-14+Math.sin(f)*p*.9}while(n(o,h)&&++d<20);let u=y0(e,J(.4,1.8));u.position.set(o,0,h),u.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0)}),t.add(u)}for(let c=0;c<9;c++){let o=J(Zt),h=J(34,70),d=Math.cos(o)*h,u=-14+Math.sin(o)*h*.9;if(n(d,u))continue;let f=Math.random()<.35?v0(e,xd(),15129792,{tilt:J(-.08,.08)}):x0(e,xd(),{tilt:J(-.1,.1),missing:Math.random()<.5});f.position.set(d,0,u),f.rotation.y=J(3),f.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.receiveShadow=!0)}),t.add(f)}}buildLights(){let e=this.scene;this.hemi=new Vs(7309e3,3812386,.85),e.add(this.hemi),this.moon=new Gs(10335487,1.7),this.moon.castShadow=!0,this.moon.position.set(0,0,0),e.add(this.moon,this.moon.target);let t=this.moon.shadow;t.camera.left=t.camera.bottom=-34,t.camera.right=t.camera.top=34,t.camera.near=1,t.camera.far=140,t.bias=-4e-4,t.normalBias=.04,t.mapSize.set(2048,2048),this.lampPool=[];for(let s=0;s<7;s++){let r=new Pi(16756838,95,30,1.7);e.add(r),this.lampPool.push(r)}this.halos=[],this.cones=[];let n=s=>new vt({transparent:!0,depthWrite:!1,blending:Qt,side:cn,uniforms:{c:{value:s},k:{value:.22}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(vy,1.5)*pow(f,1.6)*k); }"});for(let s of this.lamps){let r=s.teal?new fe(.2,.9,.7):new fe(1,.62,.28),a=new Zn(new zn({map:this.T.glow,color:s.teal?new fe(.5,3,2.4):new fe(3,1.8,.7),blending:Qt,depthWrite:!1,transparent:!0,fog:!1}));a.scale.setScalar(3.4),a.position.copy(s.pos),a.userData.noAO=!0,this.scene.add(a),this.halos.push(a);let l=new he(new Ji(4.2,5,24,1,!0),n(r));l.position.copy(s.pos).add(new D(0,-2.5,0)),l.userData.noAO=!0,this.scene.add(l),this.cones.push(l),s.light=r}}setTier(e){this.tier=e,this.dress(e);let t=[3,5,7][e];this.lampPool.forEach((s,r)=>s.visible=r<t),this.cones.forEach(s=>s.visible=e>0),this.moon.castShadow=e>0;let n=e===2?2048:1024;this.moon.shadow.mapSize.x!==n&&(this.moon.shadow.mapSize.set(n,n),this.moon.shadow.map?.dispose(),this.moon.shadow.map=null)}batch(){let e=this.staticGroup;e.updateMatrixWorld(!0);let t=new Map,n=[];e.traverse(s=>{if(!s.isMesh)return;if(s.userData.bulb||s.userData.noBatch){n.push(s);return}let r=s.material.uuid+(s.castShadow?"c":"n")+(s.receiveShadow?"r":"n"),a=t.get(r);a||(a={mat:s.material,cast:s.castShadow,rec:s.receiveShadow,geos:[]},t.set(r,a));let l=s.geometry.clone();l.applyMatrix4(s.matrixWorld);for(let c of Object.keys(l.attributes))["position","normal","uv"].includes(c)||l.deleteAttribute(c);a.geos.push(l)});for(let s of t.values()){let r=u0(s.geos,!1);if(!r){console.warn("merge failed");continue}let a=new he(r,s.mat);a.castShadow=s.cast,a.receiveShadow=s.rec,a.frustumCulled=!1,this.root.add(a),s.geos.forEach(l=>l.dispose())}for(let s of n){if(s.userData.noBatch){let a=s.clone();a.matrixAutoUpdate=!1,a.matrix.copy(s.matrixWorld),a.matrixWorldNeedsUpdate=!0,this.root.add(a);continue}let r=new he(s.geometry,s.material);r.applyMatrix4(s.matrixWorld),r.matrixAutoUpdate=!0,r.position.setFromMatrixPosition(s.matrixWorld),r.rotation.set(0,0,0),r.scale.setScalar(1),this.root.add(r)}this.staticGroup=null}resolve(e,t,n=!1){let s=!1;for(let r of this.colliders){if(r.bulletOnly||r.off)continue;let a=Gt(e.x,r.x0,r.x1),l=Gt(e.z,r.z0,r.z1),c=e.x-a,o=e.z-l,h=c*c+o*o;if(!(h>=t*t))if(s=!0,h>1e-8){let d=Math.sqrt(h),u=(t-d)/d;e.x+=c*u,e.z+=o*u}else{let d=e.x-r.x0,u=r.x1-e.x,f=e.z-r.z0,p=r.z1-e.z,v=Math.min(d,u,f,p);v===d?e.x=r.x0-t:v===u?e.x=r.x1+t:v===f?e.z=r.z0-t:e.z=r.z1+t}}return s}ray(e,t,n){let s=n,r=null,a=null;if(t.y<-1e-5){let l=-e.y/t.y;l>0&&l<s&&(s=l,r={x:0,y:1,z:0},a="ground")}for(let l of this.colliders){if(l.noBullet||l.off)continue;let c=0,o=s,h=-1,d=0,u=(f,p,v,g,m)=>{if(Math.abs(p)<1e-9)return f>=v&&f<=g;let M=(v-f)/p,A=(g-f)/p,_=-1;if(M>A){let E=M;M=A,A=E,_=1}return M>c&&(c=M,h=m,d=_),A<o&&(o=A),c<=o};u(e.x,t.x,l.x0,l.x1,0)&&u(e.y,t.y,l.y0,l.y1,1)&&u(e.z,t.z,l.z0,l.z1,2)&&c>0&&c<s&&(s=c,r={x:h===0?d:0,y:h===1?d:0,z:h===2?d:0},a="wall")}return r?{t:s,n:r,kind:a}:null}update(e,t,n){for(let c=this.fall.length-1;c>=0;c--){let o=this.fall[c],h=o.userData.fall;if(!h){this.fall.splice(c,1);continue}h.t+=e,h.vy-=9.8*e,o.position.x+=h.vx*e,o.position.y+=h.vy*e,o.position.z+=h.vz*e,o.rotation.x+=h.rx*e,o.rotation.z+=h.rz*e,o.position.y<.08&&(o.position.y=.08,h.vy=0,h.vx*=.5,h.vz*=.5),h.t>1.4&&(o.visible=!1,this.fall.splice(c,1))}for(let c of this.doors)c.open&&c.t<1&&(c.t=Math.min(1,c.t+e/2.4),c.mesh.position.y=c.t*3.6,c.t>.5&&(c.col.off=!0));let s=n.x,r=n.z,a=this.lamps.map((c,o)=>({i:o,d:(c.pos.x-s)**2+(c.pos.z-r)**2})).sort((c,o)=>c.d-o.d);this.lampPool.forEach((c,o)=>{let h=this.lamps[a[o].i];c.position.copy(h.pos),c.color.copy(h.teal?new fe(.35,1,.8):new fe(1,.7,.4));let d=.85+.15*Math.sin(t*9+h.ph)*Math.sin(t*3.7+h.ph*2)+(Math.sin(t*31+h.ph)>.97?-.5:0);c.intensity=(this.lampBase||95)*Math.max(.2,d)}),this.halos.forEach((c,o)=>{let h=Math.hypot(this.lamps[o].pos.x-s,this.lamps[o].pos.z-r);c.visible=h<70});let l=this.crate;l.beam.material.uniforms.k.value=.22+.1*Math.sin(t*2);for(let c of this.windows){if(!c.lamp)continue;let o=6-c.count,h=o<=0?.55+.08*Math.sin(t*2.2+c.c.x):.3+.7*Math.abs(Math.sin(t*(3.2+o)));c.lamp.material.color.setRGB(1.85*h,.22*h,.07*h)}l.model&&(l.model.rotation.y+=e*2,l.model.position.y=Math.sin(t*3)*.04),this.moon.position.set(s+this.moonDir.x*60,this.moonDir.y*60,r+this.moonDir.z*60),this.moon.target.position.set(s,0,r),this.moon.target.updateMatrixWorld(),this.sky.position.set(s,0,r)}};var Hr=i=>document.getElementById(i),Sd=[{id:"fuel",wave:1},{id:"carb",wave:2},{id:"bus",wave:3},{id:"parts",wave:4},{id:"radio",wave:5},{id:"clear",wave:5}];function X1(i){let e=gn.jobs[i];return e?{index:i,id:e.id,title:e.title,kind:e.kind,gate:e.gate||"",area:e.area,need:e.need,pts:e.pts,power:e.power||"",pad:{x:e.pad.x,z:e.pad.z},have:0,items:(e.items||[]).map(t=>({id:t.id,x:t.x,z:t.z,done:!1,carried:null})),carry:{}}:null}function q1(i,e){let t=!!(i.carry&&i.carry[e]);return i.id==="fuel"?t?"Carry the can to the generator":`Fuel cans ${i.have}/${i.need}`:i.id==="carb"?t?"Deliver the carb to the side bench":"Find the carburetor":i.id==="parts"?t?"Deliver scrap to the Lot C bench":`Scrap parts ${i.have}/${i.need}`:i.id==="bus"?`Board the orange bus ${i.have}/${i.need}`:i.id==="radio"?`Hold the radio ${Math.min(i.need,Math.floor(i.have))}/${i.need}s`:i.id==="clear"?`Clear Lot D ${i.have}/${i.need}`:`${i.have}/${i.need}`}function E0(i){let{world:e,P:t,G:n,sfx:s,banner:r,toast:a,popText:l,spawnPower:c}=i,o={mode:"sp",job:null,pid:"you",unlocked:[],done:new Set,gap:!1,gapWave:0,lastArea:"",waves:0},h=new He,d=new he(new At(.045,.045,7,5),new lt({color:16765803,transparent:!0,opacity:.9,depthWrite:!1}));d.position.y=3.5,d.userData.noAO=!0;let u=new Zn(new zn({map:e.T&&e.T.glow,color:new fe(3,2.1,.4),blending:Qt,depthWrite:!1,transparent:!0,fog:!1}));u.scale.setScalar(1.6),u.position.y=6.6,u.userData.noAO=!0,h.add(d,u),h.visible=!1,e.scene.add(h);let f=Hr("objArrow"),p=Hr("mission"),v=new D;function g(){let L=new Set;if(o.job)for(let U of o.job.items)!U.done&&!U.carried&&L.add(U.id);for(let[U,W]of e.missionMeshes){let B=o.job&&o.job.items.find(X=>X.id===U);W.visible=L.has(U),B&&W.visible&&(W.position.x=B.x,W.position.z=B.z)}}function m(L){o.job=X1(L),g(),!o.job&&o.mode==="sp"&&a("All objectives complete")}function M(){if(o.job||o.gap||o.mode!=="sp"||e.mapId!=="junkyard")return!1;let L=Sd.find(U=>o.unlocked.includes(U.id)&&!o.done.has(U.id));return L?(m(gn.jobs.findIndex(U=>U.id===L.id)),!!o.job):!1}function A(L){if(o.mode!=="sp"||e.mapId!=="junkyard")return!1;o.waves=Math.max(o.waves,L|0);for(let U of Sd)U.wave<=o.waves&&!o.unlocked.includes(U.id)&&o.unlocked.push(U.id);if(o.gap){let U=Sd.find(X=>o.unlocked.includes(X.id)&&!o.done.has(X.id)),W=U&&gn.jobs.find(X=>X.id===U.id);(!!(W&&W.area===o.lastArea)?o.waves>o.gapWave:o.waves>=o.gapWave)&&(o.gap=!1)}return M()?(r("NEW MISSION AVAILABLE",o.job.title),s.announce?.(s.lineFor?.("mission",o.job.id,n.round)),!0):!1}function _(){let L=o.job;if(!L||o.mode!=="sp")return;let U=L.gate&&e.doors.find(B=>B.id===L.gate);U&&!U.open&&(U.open=!0);let W=L.pts*(n.double>0?2:1);t.pts+=W;for(let B of t.slots)B&&i.weapons[B.id]&&(B.mag=i.weapons[B.id].mag,B.reserve=i.weapons[B.id].reserve);L.power&&c(L.power,L.pad.x,L.pad.z),l("+"+W),r(L.title.toUpperCase(),U?U.blurb:"Objective complete"),s.cash(),U&&s.door(),s.announce?.(s.lineFor?.("done",L.id,n.round)),o.done.add(L.id),o.lastArea=L.area,o.gap=!0,o.gapWave=n.round,o.job=null,g()}function E(){o.mode="sp",o.pid="you",o.job=null,o.unlocked=[],o.done=new Set,o.gap=!1,o.gapWave=0,o.lastArea="",o.waves=0,g()}function w(L){if(o.mode!=="sp"||!o.job||n.state!=="playing")return;let U=o.job;if(U.kind==="carry"&&!U.carry.you){let W=null,B=gn.pickup;for(let X of U.items)if(!X.done&&!X.carried){let j=Math.hypot(t.x-X.x,t.z-X.z);j<=B&&(B=j,W=X)}W&&(W.carried="you",U.carry.you=W.id,s.click(0,880,.28))}else if(U.kind==="radio"&&n.phase==="round"){let W=Math.hypot(t.x-U.pad.x,t.z-U.pad.z)<=gn.radio;U.have=W?U.have+L:Math.max(0,U.have-L*gn.decay)}U.have>=U.need&&_(),g()}function C(){let L=o.job;if(!L||o.mode!=="sp")return!1;if(L.kind==="carry"){if(!L.carry.you)return a("Pick it up first"),!1;if(Math.hypot(t.x-L.pad.x,t.z-L.pad.z)>gn.deliver)return!1;let U=L.items.find(W=>W.id===L.carry.you);return U&&(U.done=!0,U.carried=null),delete L.carry.you,L.have++,s.repair(),L.have>=L.need?_():g(),!0}if(L.kind==="board"){let U=L.items.find(W=>!W.done&&Math.hypot(t.x-W.x,t.z-W.z)<=gn.board);return U?(U.done=!0,L.have++,s.repair(),L.have>=L.need?_():g(),!0):!1}return!1}function x(L){if(o.mode!=="sp"||!o.job||o.job.kind!=="clear"||!L)return;let U=L.win,W=!!(U&&U.area===o.job.area&&Math.hypot(L.pos.x-U.c.x,L.pos.z-U.c.z)<12);Qi(L.pos.x,L.pos.z,e.mapId)!==o.job.area&&!W||(o.job.have++,o.job.have>=o.job.need&&_())}function b(){if(o.mode!=="sp"||!o.job||!o.job.carry.you)return;let L=o.job.items.find(U=>U.id===o.job.carry.you);L&&!L.done&&(L.x=t.x,L.z=t.z,L.carried=null),delete o.job.carry.you,g()}function S(L,U,W,B){if(o.mode="net",o.pid=B||o.pid,!L){o.job=null,g();return}let X=gn.jobs.find(ge=>ge.id===L[0]);if(!X){o.job=null,g();return}let j={};for(let ge of W||[])j[ge[0]]=ge[1];let Re=new Set(Object.values(j));o.job={index:gn.jobs.indexOf(X),id:X.id,title:X.title,kind:X.kind,gate:X.gate||"",area:X.area,need:L[2],pts:X.pts,power:X.power||"",pad:{x:L[3],z:L[4]},have:L[1],carry:j,items:(U||[]).filter(ge=>!Re.has(ge[0])).map(ge=>({id:ge[0],x:ge[1],z:ge[2],done:!1,carried:null}))},g()}function P(L){if(!L||L.e!=="mission")return;let U=gn.jobs.find(W=>W.id===L.id);if(L.start){r("NEW MISSION AVAILABLE",U?U.title:""),s.announce?.(s.lineFor?.("mission",L.id,n.round));return}r((U?U.title:"OBJECTIVE").toUpperCase(),U&&U.gate?"Gate open":"Objective complete"),s.announce?.(s.lineFor?.("done",L.id,n.round)),s.cash(),U&&U.gate&&s.door();for(let W of t.slots)W&&i.weapons[W.id]&&(W.mag=i.weapons[W.id].mag,W.reserve=i.weapons[W.id].reserve)}function N(L,U){let W=o.job;if(!W)return null;if(W.kind==="board"){let B=null;for(let X of W.items)if(!X.done&&!X.carried){let j=Math.hypot(L-X.x,U-X.z);j<=gn.board&&(!B||j<B.d)&&(B={d:j,name:"Board this window"})}return B&&{type:"job",d:B.d,hold:!0,name:B.name}}if(W.kind==="carry"&&W.carry[o.pid]){let B=Math.hypot(L-W.pad.x,U-W.pad.z);if(B<=gn.deliver)return{type:"job",d:B,hold:!1,name:W.id==="carb"?"Install the carb":"Deliver"}}return null}function z(L){return L?o.job&&o.job.gate===L.id?Math.floor(L.price*gn.discount):L.price:0}function F(){let L=o.job;if(!L)return null;if(L.carry&&L.carry[o.pid])return L.pad;let U=null,W=1e9;for(let B of L.items)if(!B.done&&!B.carried){let X=Math.hypot((t.x||0)-B.x,(t.z||0)-B.z);X<W&&(W=X,U=B)}return U||L.pad}function k(L){let U=n.state==="playing"&&o.job;if(p&&p.classList.toggle("hidden",!U),!U){h.visible=!1,f&&f.classList.add("hidden"),e.marker=null;return}let W=o.job,B=F();Hr("msTitle").textContent=W.title,Hr("msDetail").textContent=q1(W,o.pid),Hr("msCount").textContent=Math.min(W.need,Math.floor(W.have))+"/"+W.need;let X=Hr("msBar");if(X&&(X.style.width=Math.max(0,Math.min(100,W.have/W.need*100))+"%"),e.marker=B,h.visible=!0,h.position.set(B.x,0,B.z),u.position.y=6.2+Math.sin(n.time*3)*.25,!f||!L)return;v.set(B.x,2.2,B.z).project(L);let j=v.z>1,Re=j?-v.x:v.x,ge=j?-v.y:v.y,ie=(Re*.5+.5)*innerWidth,_e=(-ge*.5+.5)*innerHeight;if(!j&&ie>48&&ie<innerWidth-48&&_e>48&&_e<innerHeight-48){f.classList.add("hidden");return}let K=Math.atan2(_e-innerHeight/2,ie-innerWidth/2),re=innerWidth/2+Math.cos(K)*Math.min(innerWidth,innerHeight)*.38,ve=innerHeight/2+Math.sin(K)*Math.min(innerWidth,innerHeight)*.38;f.classList.remove("hidden"),f.style.left=re+"px",f.style.top=ve+"px",f.style.transform=`translate(-50%,-50%) rotate(${K+Math.PI/4}rad)`}return E(),{reset:E,update:w,use:C,onKill:x,drop:b,applyNet:S,onNetEvent:P,onWave:A,focus:N,price:z,frame:k,get job(){return o.job}}}var Y1=5,Z1=16,Ed=4.6,wd=14;function w0(i){let{scene:e,world:t,fx:n}=i,s=new Map,r=new Map,a=[],l=0,c=1,o=new je({color:9048088,roughness:.45,metalness:.2}),h=new je({color:16722490,roughness:.3,emissive:4849672,emissiveIntensity:.6});function d(_){let E=r.get(_);if(E)return E;E=new He;let w=new he(new ln(.16,10,8),o),C=new he(new At(.05,.05,.08,6),h);C.position.y=.16;let x=new Pi(16720452,0,3.5);return x.position.y=.2,E.add(w,C,x),E.userData.light=x,e.add(E),r.set(_,E),E}function u(_){let E=r.get(_);E&&(e.remove(E),r.delete(_))}function f(_,E){for(let w=0;w<7;w++){let C=new he(new Os(.18+Math.random()*.45,6),new lt({color:6948880,transparent:!0,opacity:.85,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.position.set(_+(Math.random()-.5)*3.2,.04,E+(Math.random()-.5)*3.2),C.rotation.z=Math.random()*6,e.add(C),a.push({s:C,t:6+Math.random()*4})}n.dust?.(new D(_,.4,E),{x:0,y:1,z:0},10,[.6,.05,.08])}function p(_,E,w,C,x){let b=Math.max(-1.1,Math.min(.9,x||0)),S=Math.cos(b),P={id:c++,x:_,y:E,z:w,vx:-Math.sin(C)*S*wd,vy:Math.sin(b)*wd+2.2,vz:-Math.cos(C)*S*wd,fuse:Y1,landed:!1};return s.set(P.id,P),P}function v(_){let E=new Set;for(let w of _||[]){let[C,x,b,S,P,N]=w;E.add(C);let z=s.get(C);s.set(C,{id:C,x,y:b,z:S,landed:!!P,fuse:N,vx:0,vy:0,vz:0})}for(let w of[...s.keys()])E.has(w)||(s.get(w)?.fuse<=.2&&f(s.get(w).x,s.get(w).z),s.delete(w),u(w))}function g(_,E){if(s.delete(_.id),u(_.id),f(_.x,_.z),t.bait=null,i.sfx?.boom?.(),!E)return;let w=i.zombies;if(w)for(let x of w.list){if(x.state==="dead"||x.state==="dying")continue;let b=Math.hypot(x.pos.x-_.x,x.pos.z-_.z);if(b>Ed)continue;let S=200*(1-b/Ed)+50;w.damage(x,S,!1)?.killed&&i.onKill?.(x)}let C=i.P;if(C){let x=Math.hypot(C.x-_.x,C.z-_.z);x<3.2&&i.onSelf?.(55*(1-x/3.2))}}function m(_){l-=_;let E=null;for(let C of[...s.values()])if(C.fuse!=null){if(C.fuse-=_,!C.landed&&C.vx!=null){let x=C.x,b=C.z;if(C.vy-=18*_,C.x+=C.vx*_,C.y+=C.vy*_,C.z+=C.vz*_,t.ray){let S=(t.segBlock,null)}if(typeof t.resolve=="function"){let S={x:C.x,z:C.z},P=Math.hypot(C.x-x,C.z-b);t.resolve(S,.16)&&P>.01&&(C.x=x,C.z=b,C.vx*=-.25,C.vz*=-.25)}C.y<=.16&&(C.y=.16,C.landed=!0,C.vx=C.vz=C.vy=0)}C.fuse<=0?g(C,!0):C.landed&&(!E||C.fuse<E.fuse)&&(E=C)}t.bait=E?{x:E.x,z:E.z}:null;let w=[...s.values()].reduce((C,x)=>Math.min(C,x.fuse??9),9);w<5&&l<=0&&s.size&&(i.sfx?.beep?.(w),l=w<1.2?.14:w<2.5?.28:.55);for(let C=a.length-1;C>=0;C--)a[C].t-=_,a[C].s.material.opacity=Math.max(0,a[C].t/8),a[C].t<=0&&(e.remove(a[C].s),a.splice(C,1))}function M(){for(let _ of s.values()){let E=d(_.id);E.position.set(_.x,Math.max(.16,_.y||.16),_.z),E.rotation.y+=.02;let w=_.fuse??5;E.userData.light.intensity=_.landed?(w<1.2?6:1.5)*(.5+.5*Math.sin(w*18)):.4}}function A(){for(let _ of[...r.keys()])u(_);s.clear(),t.bait=null}return{throwLocal:p,sync:v,step:m,frame:M,reset:A,splatter:f,items:s,BLAST:Ed,LURE:Z1}}var uh={junkyard:{id:"junkyard",name:"Junkyard",blurb:"The original yard",cap:[16,26],spawn:{x:0,z:12}},motel:{id:"motel",name:"Salt Motel",blurb:"Tight courtyard, close quarters",cap:[12,20],spawn:{x:0,z:0}},drivein:{id:"drivein",name:"Drive-In",blurb:"Wide open lot, big hordes",cap:[18,30],spawn:{x:0,z:18}}},Ad=i=>uh[i]||uh.junkyard,Td=class i extends bo{constructor(e,t,n,s){i.prototype._def=s,super(e,t,n)}lamps_(e){for(let[t,n,s,r]of e){let a=mo(this.M,!!s);a.position.set(t,0,n),a.rotation.y=r,a.traverse(c=>{c.isMesh&&(c.castShadow=!c.userData.bulb)}),a.updateMatrixWorld(!0),this.addCol(t-.2,t+.2,n-.2,n+.2,5);let l=a.userData.bulbPos.clone().applyMatrix4(a.matrixWorld);this.lamps.push({pos:l,teal:!!s,ph:J(100)}),this.staticGroup.add(a)}}floor(e,t,n,s){this.box(e,.03,t,n,0,s,this.M.concrete,{cast:!1})}build(){this.mapId=this._def.id||"motel";let e=this._def.L,t=this.M,n=3.2,s=.4;this.buildSky(),this.buildGround();let r=(u,f,p,v=[],g=t.fence)=>this.wall("x",u,f,p,v,n,s,g),a=(u,f,p,v=[],g=t.fence)=>this.wall("z",u,f,p,v,n,s,g),{w:l,s:c,n:o,wb:h}=e;r(c,-l,l,e.south),a(l,yn,c,e.eastA),a(-l,yn,c,e.westA),r(yn,-l,l,[{c:0,id:"DOOR",door:!0,w:6}]),h!==l&&(r(yn,l,h),r(yn,-h,-l)),a(h,o,yn,e.eastB),a(-h,o,yn,e.westB),r(o,-h,h,e.north),this.floor(2*l,c-yn,0,(c+yn)/2),this.floor(2*h,yn-o,0,(yn+o)/2),this.buildGate();let d=this.place.bind(this);for(let[u,f,p,v,g,m]of e.props)d(u==="bus"?ri(t,f,15129792,m||{}):u==="beetle"?Qn(t,f,m||{}):u==="tires"?po(t,f):u==="drum"?Es(t,f):Nn(t,f),p,v,g||0);for(let u of e.shacks||[])this.shack(...u);this.lamps_(e.lamps);for(let u of e.buys)this.wallBuy(...u);this.buildCrate(...e.crate),this.scenery(),this.buildLights()}},$1={motel:{w:16,s:6,n:-44,wb:18,south:[{c:-7,id:"S1"},{c:7,id:"S2"}],eastA:[{c:-10,id:"E1"}],westA:[{c:-14,id:"W1"}],eastB:[{c:-36,id:"E2"}],westB:[{c:-32,id:"W2"}],north:[{c:6,id:"N1"}],props:[["beetle",6010272,-9,-4,0],["bus",14252330,10,-12,Math.PI/2],["tires",4,-12,-16],["drum",3829413,12,2],["drum",11680302,13,3],["crate",1.1,-13,2],["beetle",13619140,-10,-34,Math.PI/2,{missing:!0}],["bus",9087050,8,-38,0],["tires",5,14,-28],["crate",1,-15,-41]],shacks:[[0,-10,8,3]],lamps:[[-14,-20,0,.2],[14,-20,1,2.9],[-8,2,0,.5],[9,-6,1,2.6],[-6,-18,0,0],[0,-34,1,1.2],[12,-42,0,3]],buys:[["smg",-10,yn+.25,0],["akimbo",8,yn+.25,0],["nade",-2,2,Math.PI],["shotgun",15.75,-4,-Math.PI/2],["rifle",-17.75,-36,Math.PI/2]],crate:[-12,-8]},drivein:{w:32,s:22,n:-50,wb:32,south:[{c:-18,id:"S1"},{c:0,id:"S2"},{c:18,id:"S3"}],eastA:[{c:6,id:"E1"},{c:-14,id:"E1b"}],westA:[{c:8,id:"W1"},{c:-12,id:"W1b"}],eastB:[{c:-38,id:"E2"}],westB:[{c:-40,id:"W2"}],north:[{c:-14,id:"N1"},{c:14,id:"N2"}],props:[["bus",6197184,-18,4,0],["bus",11680302,18,4,0],["beetle",14733722,-8,-6,0],["beetle",6010272,8,-6,0,{door:!0}],["beetle",14252330,0,8,Math.PI/2],["tires",5,-26,14],["tires",3,26,-16],["drum",14252330,24,16],["crate",1.2,-26,-16],["bus",9087050,-14,-38,Math.PI/2],["beetle",13619140,14,-36,0,{missing:!0}],["tires",4,0,-44],["crate",1,26,-46]],shacks:[[0,-16,10,4]],lamps:[[-24,18,0,.6],[24,18,0,2.6],[-20,-8,1,0],[20,-8,1,3],[0,0,0,1],[-20,-36,0,.3],[20,-44,1,3]],buys:[["smg",-14,yn+.25,0],["akimbo",6,yn+.25,0],["nade",2,8,0],["shotgun",31.75,-4,-Math.PI/2],["rifle",-31.75,-30,Math.PI/2]],crate:[-24,4]}};function T0(i,e,t,n){let s=Ad(n);return s.id==="junkyard"?new bo(i,e,t):new Td(i,e,t,{L:$1[s.id],id:s.id})}var A0={easy:{id:"easy",name:"Easy",count:.7,hp:.75,speed:.85,dmg:.6,drop:2,maxDrops:3,inter:10,spawnGap:1.3,brute:.5,startPts:750},medium:{id:"medium",name:"Medium",count:1,hp:1,speed:1,dmg:1,drop:1,maxDrops:2,inter:7,spawnGap:1,brute:1,startPts:500},hard:{id:"hard",name:"Hard",count:1.35,hp:1.3,speed:1.15,dmg:1.4,drop:.6,maxDrops:1,inter:5,spawnGap:.75,brute:1.6,startPts:400}};function Rd(i,e=1){e=Math.max(1,Math.min(4,e|0));let t=[1,1.6,2.2,2.8][e-1];return{...i,count:i.count*t,hp:i.hp*(1+.1*(e-1))}}function Cd(i){return A0[i]||A0.medium}var Tn={torso:new it(.52,.62,.3),hip:new it(.46,.2,.28),leg:new it(.2,.9,.22),arm:new it(.15,.62,.16),head:new ks(.27,1),eye:new it(.07,.04,.03),jaw:new it(.2,.08,.16),rag:new it(.12,.28,.03),hand:new it(.17,.14,.17)},R0=new lt({color:new fe(1.7,.22,.1),toneMapped:!1}),C0=new je({color:7213080,roughness:.6}),j1=new je({color:1708564,roughness:1}),Q1=[6191698,6980704,5798498,7439722,5206104],eM=[8007471,3099258,5921322,3816004,9071146,2068344,11687466],tM=[2764602,3813156,2106922,2898474],Pd=class{constructor(){this.root=new He,this.sk=new je({roughness:.75,emissive:0}),this.sh=new je({roughness:.95,emissive:0}),this.pa=new je({roughness:.95,emissive:0});let e=(a,l,c,o,h)=>{let d=new he(a,l);return d.position.set(c,o,h),d.castShadow=!0,d};this.pelvis=new He,this.pelvis.position.y=.95,this.root.add(this.pelvis),this.legL=new He,this.legL.position.set(-.13,0,0),this.legL.add(e(Tn.leg,this.pa,0,-.45,0)),this.legR=new He,this.legR.position.set(.13,0,0),this.legR.add(e(Tn.leg,this.pa,0,-.45,0)),this.pelvis.add(this.legL,this.legR,e(Tn.hip,this.pa,0,0,0)),this.upper=new He,this.pelvis.add(this.upper),this.upper.add(e(Tn.torso,this.sh,0,.36,0));let t=e(Tn.rag,this.sh,.12,0,.15);t.rotation.z=.2;let n=e(Tn.rag,this.sh,-.1,.02,-.15);n.rotation.z=-.15,this.upper.add(t,n);let s=e(Tn.rag,C0,-.1,.45,.155);s.scale.set(1.6,1,1),s.rotation.z=.5;let r=e(Tn.rag,C0,.14,.2,.156);r.scale.set(1,.7,1),this.upper.add(s,r),this.head=new He,this.head.position.set(0,.88,.03),this.head.add(e(Tn.head,this.sk,0,0,0)),this.head.add(e(Tn.eye,R0,-.1,.04,.24),e(Tn.eye,R0,.1,.04,.24),e(Tn.jaw,j1,0,-.14,.18)),this.head.scale.set(1.05,1.1,1),this.upper.add(this.head),this.armL=new He,this.armL.position.set(-.35,.58,0),this.armL.add(e(Tn.arm,this.sk,0,-.28,0),e(Tn.hand,this.sk,0,-.64,0)),this.armR=new He,this.armR.position.set(.35,.58,0),this.armR.add(e(Tn.arm,this.sk,0,-.28,0),e(Tn.hand,this.sk,0,-.64,0)),this.upper.add(this.armL,this.armR),this.root.visible=!1,this.state="dead",this.pos=this.root.position}},fh=class{constructor(e,t,n){this.world=t,this.scene=e,this.list=[],this.max=n>0?26:16;for(let s=0;s<this.max+4;s++){let r=new Pd;e.add(r.root),this.list.push(r)}this.alive=0,this.t=0,this.hooks={}}setTier(e){this.max=e>0?26:16}reset(){for(let e of this.list)e.state="dead",e.root.visible=!1;this.alive=0}stats(e){let t=e<10?80+35*e:430*Math.pow(1.1,e-9),n=Math.min(5,1.5+e*.24);return{hp:t,sp:n}}spawn(e,t,n=!1){let s=this.list.find(c=>c.state==="dead"&&!c.root.visible);if(!s)return null;let r=this.stats(t),a=t>=3&&Math.random()<Math.min(.55,(t-2)*.09);s.brute=n,s.scale=n?1.38:J(.94,1.06),s.root.scale.setScalar(s.scale),s.maxHp=s.hp=r.hp*(n?3.3:1),s.speed=r.sp*J(.82,1.12)*(a?1.45:1)*(n?.78:1),s.speed=Math.min(s.speed,6),s.runner=a,s.dmg=n?44:22,s.value=n?150:60,s.sk.color.setHex(n?10121050:mn(Q1)),s.sh.color.setHex(mn(eM)),s.pa.color.setHex(mn(tM));for(let c of[s.sk,s.sh,s.pa])c.emissive.setHex(0);s.win=e,s.state="approach",s.slot=J(-1.2,1.2),s.phase=J(Zt),s.attackT=0,s.cool=0,s.stuck=0,s.stuckTot=0,s.side=1,s.flash=0,s.hitT=0,s.groanT=J(1,4),s.dieT=0,s.climbT=0,s.chk=0,s.chkX=0,s.chkZ=0,s.limp=Math.random()<.3,s.lane=J(-.55,.55);let l=J(4,9);return s.pos.set(e.out.x+e.n.x*l+e.t.x*J(-3,3),0,e.out.z+e.n.z*l+e.t.z*J(-3,3)),s.yaw=Math.atan2(-e.n.x,-e.n.z),s.root.rotation.set(0,s.yaw,0),s.root.visible=!0,s.pelvis.rotation.set(0,0,0),s.root.position.y=0,this.alive++,s}rayHit(e,t,n){let s=null;for(let r of this.list){if(r.state==="dead"||r.state==="dying")continue;let a=r.scale,l={x:r.pos.x,y:(r.climbY||0)+1.66*a,z:r.pos.z},c=.3*a,o=nM(e,t,l,c),h=null,d=e.x-r.pos.x,u=e.z-r.pos.z,f=t.x*t.x+t.z*t.z,p=.42*a;if(f>1e-8){let m=2*(d*t.x+u*t.z),M=d*d+u*u-p*p,A=m*m-4*f*M;if(A>=0){let _=Math.sqrt(A);for(let E of[(-m-_)/(2*f),(-m+_)/(2*f)])if(E>0){let w=e.y+t.y*E-(r.climbY||0);if(w>=0&&w<=1.45*a){h=E;break}}}}else d*d+u*u<p*p&&(h=.01);let v=null,g=!1;o!==null&&(h===null||o<=h+.15)?(v=o,g=!0):h!==null&&(v=h),v!==null&&v<n&&(!s||v<s.t)&&(s={z:r,t:v,head:g})}return s}damage(e,t,n,s,r){if(e.state==="dead"||e.state==="dying")return null;e.hp-=t,e.flash=.2,e.hitT=.22;let a=e.hp<=0;return a?(e.state="dying",e.dieT=0,this.alive--,e.dieDir=J(-.4,.4)):e.state==="attack"||e.state,{killed:a,head:n}}killAll(){let e=[];for(let t of this.list)t.state!=="dead"&&t.state!=="dying"&&(t.hp=0,t.state="dying",t.dieT=0,t.dieDir=J(-.4,.4),this.alive--,e.push(t));return e}update(e,t,n,s,r){let a=this.world;this.t=t;for(let c of a.windows)c.cool>0&&(c.cool-=e);let l=Qi(n.x,n.z,a.mapId);for(let c=0;c<this.list.length;c++){let o=this.list[c];if(o.state==="dead")continue;let h=o.scale;if(o.flash>0){o.flash-=e;let S=Math.max(0,o.flash/.2);for(let P of[o.sk,o.sh,o.pa])P.emissive.setRGB(1.15*S,.16*S,.05*S)}if(o.state==="dying"){o.dieT+=e;let S=Math.min(1,o.dieT/.55);o.pelvis.rotation.x=-S*1.5*(1-.1),o.pelvis.rotation.z=o.dieDir*S,o.pelvis.position.y=.95-S*.55,o.armL.rotation.x=-1.4+S*2.2,o.armR.rotation.x=-1.4+S*2.2,o.dieT>2.2&&(o.root.position.y=-(o.dieT-2.2)*.9),o.dieT>3.2&&(o.state="dead",o.root.visible=!1,o.root.position.y=0,o.pelvis.position.y=.95,o.pelvis.rotation.set(0,0,0));continue}if(o.groanT-=e,o.groanT<=0){o.groanT=J(2.5,6);let S=o.pos.x-n.x,P=o.pos.z-n.z,N=Math.hypot(S,P);N<40&&r.groan?.(o,N)}let d=0,u=0,f=0,p=n.x,v=n.z;if(o.state==="approach"){let S=o.win,P=S.out.x+S.t.x*o.slot*.8,N=S.out.z+S.t.z*o.slot*.8,z=P-o.pos.x,F=N-o.pos.z,k=Math.hypot(z,F);k<.25?(o.state=S.count>0?"attack":"climb",o.climbT=0,o.cool=J(.6,1.6)):(d=z/k,u=F/k,f=o.speed,o.pos.x+=d*f*e,o.pos.z+=u*f*e,o.yaw=dh(o.yaw,Math.atan2(d,u),Math.min(1,e*8)))}else if(o.state==="attack"){let S=o.win;o.yaw=dh(o.yaw,Math.atan2(-S.n.x,-S.n.z),Math.min(1,e*8)),o.cool-=e,S.count<=0?(o.state="climb",o.climbT=0):(o.attackT+=e,o.cool<=0&&S.count>0&&(o.cool=J(1.2,2),S.cool<=0&&a.removePlank(S)&&(S.cool=J(2.2,3.2),r.plank?.(S,!0))))}else if(o.state==="climb"){let S=o.win;o.climbT+=e/1.25;let P=Math.min(1,o.climbT),N=S.out.x+S.t.x*o.slot*.8,z=S.out.z+S.t.z*o.slot*.8,F=S.in.x+S.t.x*o.slot*.5,k=S.in.z+S.t.z*o.slot*.5;o.pos.x=N+(F-N)*P,o.pos.z=z+(k-z)*P,o.climbY=Math.sin(P*Math.PI)*.75,o.root.position.y=o.climbY,o.yaw=dh(o.yaw,Math.atan2(-S.n.x,-S.n.z),Math.min(1,e*8)),f=1.5,P>=1&&(o.state="chase",o.climbY=0,o.root.position.y=0)}else{let S=a.bait,P=S?Math.hypot(S.x-o.pos.x,S.z-o.pos.z):99,N=S&&P<16,z=N?S.x:p,F=N?S.z:v,k=N?Qi(z,F,a.mapId):l,L=Qi(o.pos.x,o.pos.z,a.mapId),U=z,W=F,B=null;if(L!==k){let Me=a.doors&&a.doors.length?a.doors:s?[s]:[];B=S0(o.pos.x,o.pos.z,a.mapId,k,Me,o.lane||0),B&&(U=B.x,W=B.z)}let X=U-o.pos.x,j=W-o.pos.z,Re=Math.hypot(X,j)||1;X/=Re,j/=Re;let ge=Math.hypot(p-o.pos.x,v-o.pos.z);if(o.stuck>0&&!B){o.stuck-=e;let Me=.7*o.side,Be=Math.cos(Me),rt=Math.sin(Me),se=X*Be-j*rt,ce=X*rt+j*Be;X=se,j=ce}let ie=0,_e=0;for(let Me=0;Me<this.list.length;Me++){if(Me===c)continue;let Be=this.list[Me];if(Be.state!=="chase"&&Be.state!=="attack")continue;let rt=o.pos.x-Be.pos.x,se=o.pos.z-Be.pos.z,ce=rt*rt+se*se;if(ce<.62&&ce>1e-4){let de=1/Math.sqrt(ce);ie+=rt*de*(.78-Math.sqrt(ce)),_e+=se*de*(.78-Math.sqrt(ce))}}B&&(B.crossZ?ie*=.12:_e*=.12),X+=ie*1.15,j+=_e*1.15;let Le=Math.hypot(X,j)||1;X/=Le,j/=Le;let K=Math.hypot(z-o.pos.x,F-o.pos.z);f=!B&&(N?K<.9:ge<1&&L===l)||o.speed<=0?0:o.speed,o.cool-=e,!N&&ge<1.35&&L===l&&!B&&o.attackT<=0&&o.cool<=0&&(o.attackT=.01),o.attackT>0&&(o.attackT+=e,o.attackT>.42&&(!N&&ge<1.7&&L===l&&r.hitPlayer?.(o),o.attackT=0,o.cool=1.05),f*=.3),o.pos.x+=X*f*e,o.pos.z+=j*f*e,d=X,u=j,f>0&&a.resolve(o.pos,.36*h);let ve=B?X:z-o.pos.x,Ve=B?j:F-o.pos.z;if(o.yaw=dh(o.yaw,Math.atan2(ve,Ve),Math.min(1,e*9)),o.chk+=e,o.chk>.45){let Me=Math.hypot(o.pos.x-o.chkX,o.pos.z-o.chkZ);if(f>.4&&Me<.1){if(o.stuck=B?0:.45,o.side=Math.random()<.5?-1:1,o.stuckTot+=.45,B){let Be=B.gx-o.pos.x,rt=B.gz-o.pos.z,se=Math.hypot(Be,rt)||1;o.pos.x+=Be/se*.28,o.pos.z+=rt/se*.28,a.resolve(o.pos,.36*h)}}else o.stuckTot=Math.max(0,o.stuckTot-.3);o.chkX=o.pos.x,o.chkZ=o.pos.z,o.chk=0,o.stuckTot>1.8&&B?(o.pos.x=B.ex,o.pos.z=B.ez,a.resolve(o.pos,.36*h),o.stuckTot=0):o.stuckTot>6&&this.reroute(o)}}o.root.rotation.y=o.yaw,o.state!=="climb"&&(o.root.position.y=0);let g=f>.1?f:0;o.phase+=g*e*(o.runner?2.4:2.7)/Math.max(.6,h);let m=Math.sin(o.phase),M=Math.min(.8,.28+g*.13);o.legL.rotation.x=m*M,o.legR.rotation.x=-m*M*(o.limp?.35:1),o.hitT>0&&(o.hitT=Math.max(0,o.hitT-e));let A=o.hitT>0?o.hitT/.22:0,_=.1+Math.min(.28,g*.05)+(o.runner?.16:0)+(o.brute?.1:0)-A*.42;o.upper.rotation.x=_+Math.abs(m)*.035,o.upper.rotation.z=Math.sin(o.phase*.5)*.07*(o.limp?2:1),o.upper.rotation.y=Math.sin(o.phase*.5)*.16;let E=o.brute?-.58:-.74,w=Math.min(.62,.2+g*.1)*(o.runner?1.28:1),C,x;if(o.state==="climb")C=x=-1.5;else if(o.state==="attack")x=-.5+Math.sin(o.attackT*7)*.95,C=E+.12;else if(o.attackT>0){let S=Math.sin(Math.min(1,o.attackT/.42)*Math.PI);x=E-S*1.15,C=E+m*w*.3}else C=E-m*w,x=E+m*w*(o.limp?.4:1);o.armL.rotation.x=C+A*.3,o.armR.rotation.x=x+A*.3;let b=o.brute?.28:.16;o.armL.rotation.z=b,o.armR.rotation.z=-b,o.head.rotation.x=.08+Math.sin(o.phase*.5)*.05-A*.5,o.head.rotation.y=Math.sin(o.phase*.5)*.1,o.head.rotation.z=Math.sin(o.phase*.5+1)*.1+A*.15,o.pelvis.position.y=.95+Math.abs(m)*(g>.2?.05:.02)}}reroute(e){let t=ch(this.world.doors&&this.world.doors.length?this.world.doors:[this.world.door]),n=this.world.windows.filter(r=>t.has(r.area)),s=mn(n.length?n:this.world.windows);e.win=s,e.state="approach",e.stuckTot=0,e.stuck=0,e.pos.set(s.out.x+s.n.x*3,0,s.out.z+s.n.z*3)}};function nM(i,e,t,n){let s=i.x-t.x,r=i.y-t.y,a=i.z-t.z,l=s*e.x+r*e.y+a*e.z,c=s*s+r*r+a*a-n*n,o=l*l-c;if(o<0)return null;let h=-l-Math.sqrt(o);return h>0?h:null}function dh(i,e,t){let n=((e-i+Math.PI)%Zt+Zt)%Zt-Math.PI;return i+n*t}var xh={},Dd;function iM(){let i=th(fo.zombies),e=i.view;Dd=i.meta;for(let t of Dd){let n=new St;n.setAttribute("position",nh(e,t)),n.setAttribute("normal",ih(e,t)),n.setAttribute("skinIndex",new gt(e(Uint8Array,t.si),4)),n.setAttribute("skinWeight",new gt(e(Uint8Array,t.sw),4,!0));let s=e(Uint16Array,t.idx);sM(s,n.attributes.position.array,t),n.setIndex(new gt(s,1)),t.groups.forEach(r=>n.addGroup(r.start,r.count,r.slot>=0?r.slot:3)),n.computeBoundingSphere(),xh[t.tag]={g:n,m:t}}}function sM(i,e,t){let n=t.groups.filter(s=>s.slot<0);for(let s of n){let r=-9;for(let c=s.start;c<s.start+s.count;c++)r=Math.max(r,e[i[c]*3+1]);if(r<1.75||s.count<200)continue;s.hair=!0;let a=new Set;for(let c=s.start;c<s.start+s.count;c++)a.add(i[c]);let l=0;for(let c of a)l=Math.max(l,Math.abs(e[c*3]));if(l>.12){let c=.12/l;for(let o of a)e[o*3]*=c,e[o*3+2]=(e[o*3+2]+.01)*c-.01,e[o*3+1]=1.66+(e[o*3+1]-1.66)*(e[o*3+1]>1.66?.72:c)}for(let c=s.start;c<s.start+s.count;c+=3){let o=0,h=0;for(let d=0;d<3;d++)o+=e[i[c+d]*3+1]/3,h+=e[i[c+d]*3+2]/3;(h>.035&&o<1.715||h>.075&&o<1.74||o<1.6)&&(i[c+1]=i[c+2]=i[c])}}}var I0=4,rM=["near","mid","far"],P0=new Map,aM=(i,e)=>{let t=P0.get(i);if(!t){let n=new fe("#"+i).multiplyScalar(e?.85:.6);e&&n.offsetHSL(0,0,.04),t=new je({color:n,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),P0.set(i,t)}return t},oM="float zh(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);} float zn(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(zh(i),zh(i+vec3(1,0,0)),f.x),mix(zh(i+vec3(0,1,0)),zh(i+vec3(1,1,0)),f.x),f.y),mix(mix(zh(i+vec3(0,0,1)),zh(i+vec3(1,0,1)),f.x),mix(zh(i+vec3(0,1,1)),zh(i+vec3(1,1,1)),f.x),f.y),f.z);}";function Id(i,e){let t=new je({roughness:i===0?.7:.95,polygonOffset:i!==0,polygonOffsetFactor:-1.5,polygonOffsetUnits:-4});return t.userData.seed={value:e},t.onBeforeCompile=n=>{n.uniforms.zSeed=t.userData.seed,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vZ = position;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vZ; uniform float zSeed;
`+oM).replace("#include <color_fragment>",`#include <color_fragment>
      vec3 q = vZ*vec3(18.)+zSeed; float n = zn(q)*0.6+zn(q*2.3)*0.4;
      ${i===0?"diffuseColor.rgb *= mix(vec3(0.55,0.62,0.5), vec3(1.0), smoothstep(0.25,0.75,n)); float b = smoothstep(0.78,0.86,zn(q*0.7+3.)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.25,0.03,0.04), b*0.8);":"float m2 = zn(vZ*7.+zSeed)*0.65+zn(vZ*15.+zSeed)*0.35; float t = smoothstep(0.70,0.78,m2)*0.8; float e = smoothstep(0.62,0.70,m2)*0.5-t*0.5; diffuseColor.rgb *= 0.85+0.2*zn(q*2.); diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb*0.35, e); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.075,0.095,0.06)*mix(1.,0.6,zn(q*3.)), t); float bl = smoothstep(0.8,0.9,zn(q*0.5+7.)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.22,0.03,0.03), bl*0.7);"}`)},t.customProgramCacheKey=()=>"zmat"+i,t}var D0=1.1,ph=new D,mh=new fe,sn=new Tt,lM=new fe(1,.92,.75),gh=new Array(I0);function cM(){let i=document.createElement("canvas");i.width=i.height=32;let e=i.getContext("2d"),t=e.createRadialGradient(16,16,1,16,16,16);t.addColorStop(0,"#fff"),t.addColorStop(.28,"rgba(255,255,255,.7)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32);let n=new an(i);return n.colorSpace=Ut,n}function hM(i){let e=i.geometry.attributes.position,t=i.geometry.attributes.skinIndex,n=i.geometry.attributes.skinWeight,s=i.skeleton.bones.findIndex(u=>u.name==="head"),r=i.skeleton.boneInverses[s],a=i.bindMatrix,l=new D,c=null,o=null,h=-1e9,d=-1e9;for(let u=0;u<e.count;u++){let f=0;for(let v=0;v<4;v++)t.getComponent(u,v)===s&&(f=Math.max(f,n.getComponent(u,v)));if(f<.45||(l.fromBufferAttribute(e,u).applyMatrix4(a).applyMatrix4(r),l.z<.015))continue;let p=l.z-Math.abs(Math.abs(l.x)-.032)*2.4-Math.abs(l.y-.012)*2.2;l.x<-.01&&p>h?(h=p,c=l.clone()):l.x>.01&&p>d&&(d=p,o=l.clone())}return c=c||new D(-.034,.02,.08),o=o||new D(.034,.02,.08),c.y+=.022,o.y+=.022,c.z+=.01,o.z+=.01,{L:c,R:o}}function uM(i,e,t){sn.position.set(0,-20,0),sn.scale.set(0,0,0),sn.rotation.set(0,0,0),sn.updateMatrix(),i.setMatrixAt(t*2,sn.matrix),i.setMatrixAt(t*2+1,sn.matrix),e.setMatrixAt(t,sn.matrix)}function dM(i,e){let t=i.eyeMesh,n=i.blob,s=i.list,r=i.cam,a=r&&r.quaternion,l=!1;for(let c=0;c<s.length;c++){let o=s[c];if(!(o.root.visible&&o.state!=="dead"&&o.eyeL)){o._eyeOn&&(o._eyeOn=!1,l=!0,uM(t,n,c));continue}o._eyeOn=!0,l=!0,o.bones.head.updateWorldMatrix(!0,!1);let d=o.bones.head.matrixWorld,f=.05*(1+.12*Math.sin(e*(o.runner?9:3.1)+o.phase))*(o.flash>0?1.35:1)*(o.brute?1.22:1);mh.setRGB(o.brute?.85:o.runner?1:.95,o.brute?.08:o.runner?.42:.16,.04),o.flash>0&&mh.lerp(lM,Math.min(.65,o.flash*2.5)),a&&sn.quaternion.copy(a),ph.copy(o.eyeL).applyMatrix4(d),sn.position.copy(ph),sn.scale.setScalar(f),sn.updateMatrix(),t.setMatrixAt(c*2,sn.matrix),t.setColorAt(c*2,mh),ph.copy(o.eyeR).applyMatrix4(d),sn.position.copy(ph),sn.updateMatrix(),t.setMatrixAt(c*2+1,sn.matrix),t.setColorAt(c*2+1,mh);let p=o.state==="dying"?Math.min(.85,o.dieT*.45):0;sn.position.set(o.pos.x,.04,o.pos.z),sn.rotation.set(-Math.PI/2,0,0),sn.scale.setScalar(Math.max(.01,o.scale*(o.brute?1.15:.92)*(1-p))),sn.updateMatrix(),n.setMatrixAt(c,sn.matrix)}l&&(t.instanceMatrix.needsUpdate=!0,t.instanceColor.needsUpdate=!0,n.instanceMatrix.needsUpdate=!0)}function L0(i){iM(),i.list.forEach((c,o)=>{let h=o%I0,d=xh[h+":near"].m.bones,u=d.map(v=>{let g=new Tr;return g.name=v.n,g.position.fromArray(v.t),g});d.forEach((v,g)=>{v.p>=0&&u[v.p].add(u[g])});let f=new He;f.add(u[0]),f.scale.setScalar(xh[h+":near"].m.scale*D0),f.updateMatrixWorld(!0);let p=new Sa(u);c.sk=Id(0,o*7.3),c.sh=Id(1,o*3.1),c.pa=Id(1,o*5.7+2),c.lods=rM.map(v=>{let g=xh[h+":"+v],m=[c.sk,c.sh,c.pa],M=g.m.groups.map(E=>E.slot>=0?[c.sk,c.sh,c.pa][E.slot]:aM(E.col,E.hair)),A=g.g.clone();A.clearGroups(),g.m.groups.forEach((E,w)=>A.addGroup(E.start,E.count,w));let _=new ba(A,M);return _.frustumCulled=!1,_.castShadow=!0,_.bind(p),_.visible=!1,f.add(_),_}),c.bones=Object.fromEntries(u.map(v=>[v.name,v])),c.hipY=c.bones.hips.position.y,c.root.add(f),c.pelvis.traverse(v=>{v.isMesh&&(v.visible=!1)}),c.variant=h,gh[h]||(gh[h]=hM(c.lods[0])),c.eyeL=gh[h].L,c.eyeR=gh[h].R});let e=i.list.length,t=new fs(new on(1,1),new lt({map:cM(),color:16777215,transparent:!0,depthWrite:!1,blending:Ii,toneMapped:!0,fog:!0,side:cn}),e*2);t.frustumCulled=!1,t.userData.noAO=!0,t.renderOrder=6,t.instanceColor=new ds(new Float32Array(e*6),3);let n=new lt({color:0,transparent:!0,opacity:.28,depthWrite:!1}),s=new fs(new Os(.7,14),n,e);s.frustumCulled=!1,s.userData.noAO=!0,s.renderOrder=1,s.receiveShadow=!1,i.scene.add(t,s),i.eyeMesh=t,i.blob=s;let r=i.setTier.bind(i);i.setTier=c=>{i.tier=c,n.opacity=c===0?.5:.26,r(c)};let a=i.update.bind(i),l=[];return i.update=(c,o,h,...d)=>{a(c,o,h,...d),l.length=0;for(let u of i.list)u.root.visible&&(u.d=Math.hypot(u.pos.x-h.x,u.pos.z-h.z),l.push(u));l.sort((u,f)=>u.d-f.d),l.forEach((u,f)=>{let p=f<2&&u.d<7?0:f<5&&u.d<16?1:2;u.lods.forEach((v,g)=>v.visible=g===p),fM(u)}),dM(i,o)},i.lodCounts=()=>{let c=[0,0,0];for(let o of i.list)o.root.visible&&o.lods.forEach((h,d)=>{h.visible&&c[d]++});return c},Object.fromEntries(Dd.map(c=>[c.tag,c.tris]))}function fM(i){let e=i.bones;e.hips.position.y=i.hipY+(i.pelvis.position.y-.95)/D0,e.hips.rotation.set(i.pelvis.rotation.x,0,i.pelvis.rotation.z),e.chest.rotation.set(i.upper.rotation.x+.18+(i.brute?.1:0),i.upper.rotation.y,i.upper.rotation.z),e.spine.rotation.x=.1+(i.brute?.05:0),e.head.rotation.set(i.head.rotation.x+.15,.1+(i.head.rotation.y||0),i.head.rotation.z+.22),e.thighL.rotation.set(i.legL.rotation.x,0,.03),e.thighR.rotation.set(i.legR.rotation.x,0,-.03),e.shinL.rotation.x=Math.max(0,-i.legL.rotation.x)*1.25+.1,e.shinR.rotation.x=Math.max(0,-i.legR.rotation.x)*1.25+.1,e.upperArmL.rotation.set(i.armL.rotation.x,0,i.armL.rotation.z),e.upperArmR.rotation.set(i.armR.rotation.x,0,i.armR.rotation.z);let t=n=>-.4-Math.max(0,-n-.32)*.42;if(e.foreArmL.rotation.x=t(i.armL.rotation.x),e.foreArmR.rotation.x=t(i.armR.rotation.x),e.handL.rotation.x=.22,e.handR.rotation.x=.28,i.state==="dying"){let n=Math.min(1,i.dieT/.55);e.foreArmL.rotation.x=-.35-n,e.foreArmR.rotation.x=-.3-n}}var pM=i=>new fe(i);function ei(i,e,t,n,s,r=0,a=0,l=0,c=1,o=1,h=1){i=i.index?i.toNonIndexed():i.clone();let d=new nt().compose(new D(t,n,s),new On().setFromEuler(new Yn(r,a,l)),new D(c,o,h));i.applyMatrix4(d);let u=i.attributes.position.count,f=new Float32Array(u*3),p=pM(e);for(let v=0;v<u;v++){let g=.85+.3*Math.random();f[v*3]=p.r*g,f[v*3+1]=p.g*g,f[v*3+2]=p.b*g}i.setAttribute("color",new gt(f,3));for(let v of Object.keys(i.attributes))["position","normal","color"].includes(v)||i.deleteAttribute(v);return i}function Ld(i){let e=new St;for(let t of["position","normal","color"]){let n=i.map(a=>a.attributes[t].array),s=new Float32Array(n.reduce((a,l)=>a+l.length,0)),r=0;for(let a of n)s.set(a,r),r+=a.length;e.setAttribute(t,new gt(s,3))}return e.computeBoundingSphere(),e}var N0=7234898,U0=11049580,F0=3015944,B0=1966596,O0=4852236,mM=[1840914,3811866,5921362,2761760,7031338],es=(i,e,t)=>new it(i,e,t),gM=(i,e)=>new Ji(i,e,4),z0=i=>new ks(i,0);function xM(i,e){let t=[],n=i.c,s=i.r,r=n.z+s.z*.86,a=n.y-s.y*.42;for(let o=0;o<6;o++)t.push(ei(es(s.x*.12,s.y*.11,.008),U0,(o-2.5)*s.x*.14,a+s.y*.04,r-Math.abs(o-2.5)*.004,0,0,J(-.2,.2)));t.push(ei(es(s.x*.9,s.y*.07,s.z*.25),F0,0,a+s.y*.1,r-s.z*.12)),t.push(ei(z0(s.x*.38),O0,n.x+J(-.3,.3)*s.x,n.y+s.y*.9,n.z+s.z*.15,0,0,0,1.2,.3,1)),t.push(ei(es(s.x*.35,.005,.005),B0,n.x+s.x*.62,n.y-s.y*.1,n.z+s.z*.8,0,.6,1.1));let l=6+(Math.random()*5|0),c=mn(mM);if(e)for(let o=0;o<l;o++){let h=J(0,Math.PI*2),d=J(.35,1.2),u=Math.cos(h)*Math.cos(d),f=Math.sin(d),p=Math.sin(h)*Math.cos(d)-.25;t.push(ei(gM(s.x*.12,s.y*J(.35,.6)),c,n.x+u*s.x*.95,n.y+f*s.y*.95,n.z+p*s.z*.9,p*.9,0,-u*.9))}return Ld(t)}function vM(i,e){let t=i.r,n=t.x*.9,s=t.z*.6,r=[ei(es(n,t.y*.16,s),e,0,-t.y*.08,s/2),ei(es(n*.82,t.y*.06,s*.8),F0,0,t.y*.01,s/2)];for(let a=0;a<5;a++)r.push(ei(es(n*.13,t.y*.11,.008),U0,(a-2)*n*.17,t.y*.05,s-.006-Math.abs(a-2)*.004));return Ld(r)}function _M(i,e){let t=[ei(z0(.06),B0,.035,i.y,i.z-.012,0,0,0,1.1,1.15,.25)];for(let n=0;n<4;n++){let s=i.y+.04-n*.026;t.push(ei(new At(.0055,.0055,.085-n*.008,5),N0,.04,s,i.z+.002,0,0,Math.PI/2+.22))}if(t.push(ei(es(.012,.1,.01),N0,-.006,i.y,i.z+.002)),t.push(ei(es(.04,.02,.01),O0,.06,i.y-.07,i.z,0,0,.6)),e)for(let n=0;n<4;n++)t.push(ei(es(J(.03,.05),J(.1,.18),.006),e,J(-.1,.1),i.y-.2-J(0,.04),i.z-.01,J(-.1,.1),0,J(-.25,.25)));return Ld(t)}function yM(i,e){let t=i.geometry.attributes.position,n=i.geometry.attributes.skinIndex,s=i.geometry.attributes.skinWeight,r=i.skeleton.bones.findIndex(h=>h.name===e),a=i.skeleton.boneInverses[r],l=new D,c=new D(9,9,9),o=new D(-9,-9,-9);for(let h=0;h<t.count;h++){let d=0;for(let u=0;u<4;u++)n.getComponent(h,u)===r&&(d=Math.max(d,s.getComponent(h,u)));d<.6||(l.fromBufferAttribute(t,h).applyMatrix4(i.bindMatrix).applyMatrix4(a),c.min(l),o.max(l))}return{mn:c,mx:o,c:c.clone().add(o).multiplyScalar(.5),r:o.clone().sub(c).multiplyScalar(.5)}}function MM(i,e){let t=i.geometry.attributes.position,n=i.geometry.attributes.skinIndex,s=i.geometry.attributes.skinWeight,r=i.skeleton.bones.findIndex(d=>d.name===e),a=i.skeleton.boneInverses[r],l=new D,c=-1,o=0,h=0;for(let d=0;d<t.count;d++){let u=0;for(let f=0;f<4;f++)n.getComponent(d,f)===r&&(u=Math.max(u,s.getComponent(d,f)));u<.5||(l.fromBufferAttribute(t,d).applyMatrix4(i.bindMatrix).applyMatrix4(a),Math.abs(l.x)<.06&&(c=Math.max(c,l.z),o+=l.y,h++))}return{y:h?o/h:.05,z:c>0?c:.12}}var bM=[6191698,6980704,9081976,10133668,8022666,10525290,7232074,9207664],SM=[8007471,3099258,5921322,3816004,9071146,2068344,11687466,14209216,4860490,2771498,10127968],EM=[2764602,3813156,2106922,2898474,4604218,2766160];function k0(i){let e=new je({vertexColors:!0,roughness:.85}),t={},n={};i.list.forEach(a=>{let l=a.lods[0];t[a.variant]=t[a.variant]||MM(l,"chest");let c=n[a.variant]=n[a.variant]||yM(l,"head");a.gHead=new he(xM(c,Math.random()<.8),e),a.gJaw=new he(vM(c,5660746),e),a.gJaw.position.set(c.c.x,c.c.y-c.r.y*.5,c.c.z+c.r.z*.25),a.gChest=new he(_M(t[a.variant],null),e),a.gChest.position.z=.004;for(let o of[a.gHead,a.gJaw,a.gChest])o.frustumCulled=!1,o.visible=!1,o.castShadow=!1;a.bones.head.add(a.gHead,a.gJaw),a.bones.chest.add(a.gChest),a.lodRoot=l.parent});let s=i.spawn.bind(i);i.spawn=(...a)=>{let l=s(...a);if(!l)return l;l.style=Math.random()*3|0,l.jawOpen=J(.18,.45),l.ribs=Math.random()<.45,l.skull=Math.random()<.9,l.brute||l.sk.color.setHex(mn(bM)),l.sh.color.setHex(mn(SM)),l.pa.color.setHex(mn(EM));let c=l.brute?1.1:J(.9,1.14),o=l.brute?1:J(.92,1.08);return l.lodRoot&&(l.lodRoot.scale.set(c,o,Math.min(1.12,c)),l.lodRoot.position.y=0),l.twitch=J(8,14),l};let r=i.update.bind(i);i.update=(a,l,c,...o)=>{r(a,l,c,...o);for(let h of i.list){let d=h.root.visible&&h.state!=="dead"&&(h.lods[0].visible||h.lods[1].visible);if(h.gHead.visible=h.gJaw.visible=d&&h.skull!==!1,h.gChest.visible=d&&!!h.ribs,!h.root.visible||h.state==="dead")continue;let u=h.bones,f=h.style|0,p=h.phase||0;h.gJaw.rotation.x=(h.jawOpen||.4)+Math.max(0,Math.sin(l*6+p))*.25+(h.attackT>0?.3:0),h.state!=="dying"&&(f===1?(u.upperArmL.rotation.set(.15+Math.sin(p)*.1,0,.12),u.foreArmL.rotation.x=-.1,u.head.rotation.z+=.35,u.shinR.rotation.x+=.35,u.chest.rotation.z+=.12):f===2?(u.head.rotation.y+=Math.sin(l*h.twitch)*.12*(Math.sin(l*1.7+p)>.4?1:0),u.chest.rotation.x+=.22,u.chest.rotation.z+=Math.sin(p*.5)*.22,u.spine.rotation.z=Math.sin(p*.5)*.12,u.head.rotation.x-=.25):u.spine.rotation.z=0)}}}var wM=100,TM=50;function H0(i){let{scene:e,zombies:t,P:n,G:s,cam:r}=i,a={on:!1,ws:null,id:null,room:null,token:null,snaps:[],remotes:new Map,slot:new Map,lastSend:0,over:!1,retry:0,url:null,name:"Survivor",status:"",alive:!0},l=(x,b,S)=>x+(b-x)*S,c=(x,b,S)=>{let P=((b-x+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return x+P*S},o=[1638320,16757575,7059711,16739285];function h(x,b){let S=new He,P=new je({color:o[b%4],roughness:.6}),N=new he(new Aa(.3,.9,4,10),P);N.position.y=.95;let z=new he(new ln(.2,12,10),new je({color:14267276}));z.position.y=1.68;let F=new he(new it(.08,.1,.5),new je({color:546}));F.position.set(.25,1.35,-.3);let k=F.clone();k.position.set(-.22,1.32,-.26),k.visible=!1;let L=document.createElement("canvas");L.width=256,L.height=64;let U=L.getContext("2d");U.font="800 34px system-ui,sans-serif",U.textAlign="center",U.fillStyle="#"+o[b%4].toString(16).padStart(6,"0"),U.fillText(x,128,44);let W=new Zn(new zn({map:new an(L),transparent:!0,depthWrite:!1}));W.scale.set(1.2,.3,1),W.position.y=2.2;let B=new he(new ln(.07,8,6),new lt({color:1638320}));return B.position.y=2.45,B.visible=!1,S.add(N,z,F,k,W,B),S.userData={body:N,gun:F,gun2:k,name:x,talk:B,gunId:"pistol"},e.add(S),S}let d={pistol:[.7,.8,.55,2236962],akimbo:[.7,.8,.5,13158600],smg:[.85,1,.85,3355443],shotgun:[.8,.8,1.4,3811868],sawed:[1.3,.9,.62,2236962],rifle:[.7,.9,1.55,2763306],lever:[.65,.8,1.7,7027231],nailer:[1.2,1.2,.7,14252330],lmg:[1.2,1.2,1.6,1710618]};function u(x,b){let S=d[b]?b:"pistol";if(x.userData.gunId===S)return;x.userData.gunId=S;let P=d[S];x.userData.gun.scale.set(P[0],P[1],P[2]),x.userData.gun.material.color.setHex(P[3]),x.userData.gun2.visible=S==="akimbo",S==="akimbo"&&x.userData.gun2.material.color.setHex(P[3])}function f(x){a.url=x.url,a.name=x.name||a.name,a.joinMsg=x.join,p()}function p(){let x;try{x=new WebSocket(a.url)}catch{return v("bad server url")}a.ws=x,a.status="connecting",x.onopen=()=>{a.retry=0,x.send(JSON.stringify(a.token?{t:"join",token:a.token}:{t:"join",name:a.name,...a.joinMsg}))},x.onmessage=b=>{let S;try{S=JSON.parse(b.data)}catch{return}g(S)},x.onclose=b=>{if(a.ws===x){if(a.ws=null,!a.on&&!a.token){i.onStatus?.("Could not connect to the co-op server");return}a.over||b.code===4001||(a.retry++<8?(a.status="reconnecting",i.onStatus?.("Connection lost, reconnecting\u2026"),setTimeout(p,Math.min(8e3,500*2**a.retry))):(i.onStatus?.("Disconnected from co-op server"),M(),i.onQuit?.()))}},x.onerror=()=>{}}function v(x){i.onStatus?.(x)}function g(x){if(x.t==="joined"){let b=!a.on;a.id=x.id,a.room=x.room,a.token=x.token,a.status="ok",b?(a.on=!0,a.over=!1,i.onJoined?.(x)):i.onStatus?.("Reconnected")}else if(x.t==="err")i.onStatus?.({"no-room":"No room with that code","room-full":"That room is full",full:"Server is full",rate:"Too many messages"}[x.m]||x.m),a.on||a.ws?.close();else if(x.t==="s"){x.recv=performance.now(),a.snaps.push(x),a.snaps.length>30&&a.snaps.shift();for(let b of x.ev||[])i.onEvent?.(b,b.p===a.id||b.by===a.id);i.onLobby?.(x),x.over&&!a.over&&(a.over=!0,i.onOver?.(x))}else x.t==="hits"?i.onHits?.(x.h):x.t==="act"?(a.lastAct=x,i.onAct?.(x)):x.t==="sig"&&i.onSig?.(x)}function m(x){a.ws&&a.ws.readyState===1&&a.ws.send(JSON.stringify(x))}function M(){if(a.on=!1,a.ws)try{m({t:"leave"}),a.ws.close()}catch{}a.ws=null,a.token=null,a.snaps=[];for(let x of a.remotes.values())e.remove(x);a.remotes.clear(),a.slot.clear(),t.reset()}function A(x){let b=x-wM,S=a.snaps;if(!S.length)return null;let P=S.length-1;for(;P>0&&S[P-1].recv>b;)P--;let N=S[P],z=S[Math.max(0,P-1)];return z===N||N.recv<=z.recv?{s0:N,s1:N,k:1}:{s0:z,s1:N,k:Math.max(0,Math.min(1,(b-z.recv)/(N.recv-z.recv)))}}function _(x,b,S){let P=performance.now();P-a.lastSend>TM&&!n.dead&&(a.lastSend=P,m({t:"in",x:+n.x.toFixed(2),z:+n.z.toFixed(2),yaw:+n.yaw.toFixed(3),pitch:+n.pitch.toFixed(3),w:i.held?.()||"pistol"}));let N=A(P);if(!N){t.update(x,b,n,i.world.door,S);return}let{s0:z,s1:F,k}=N,L=a.snaps[a.snaps.length-1],U=L.p.find(ie=>ie[0]===a.id);if(U){let ie=U[6];if(ie<n.hp-.5&&i.onHurt?.(n.hp-ie),n.hp=ie,n.pts=U[7],n.kills=U[8],U[9]&&!n.dead?i.onDown?.():!U[9]&&n.dead&&i.onRevive?.(),Math.hypot(U[2]-n.x,U[3]-n.z)>2.5&&(n.x=U[2],n.z=U[3]),Array.isArray(U[12]))for(let _e of U[12]){let Le=n.slots.find(K=>K&&K.id===_e[0]);Le&&(Le.mag=_e[1],Le.reserve=_e[2])}}L.round!==s.round&&L.round>0&&i.onRound?.(L.round),s.mpPhase=L.phase;let W=i.world;L.win&&L.win.forEach((ie,_e)=>{let Le=W.windows[_e];if(Le){for(;Le.count>ie;)W.removePlank(Le),i.onPlank?.(Le,!0);for(;Le.count<ie;)W.addPlank(Le),i.onPlank?.(Le,!1)}});let B=new Set(L.go||[]);L.door&&B.add("AB");for(let ie of W.doors||[W.door])ie&&B.has(ie.id)&&!ie.open&&(ie.open=!0,i.onDoor?.(ie));L.ms!==void 0&&i.onMission?.(L.ms,L.mi,L.mc),L.crate&&i.onCrate?.(L.crate[0],L.crate[1],L.crate[2]===a.id),L.up&&i.syncUps?.(L.up),s.double=L.dbl?1:0,U&&(a.owned=U[11]);let X=new Set,j=new Map(z.p.map(ie=>[ie[0],ie]));F.p.forEach((ie,_e)=>{if(ie[0]===a.id)return;X.add(ie[0]);let Le=a.remotes.get(ie[0]);Le||(Le=h(ie[1],_e),a.remotes.set(ie[0],Le));let K=j.get(ie[0])||ie;Le.position.set(l(K[2],ie[2],k),0,l(K[3],ie[3],k)),Le.rotation.y=c(K[4],ie[4],k),u(Le,ie[14]),Le.userData.body.rotation.x=ie[9]?-1.4:0,Le.position.y=ie[9]?.3:0,Le.visible=!0,Le.userData.body.material.opacity=ie[10]?1:.4,Le.userData.body.material.transparent=!ie[10]});for(let[ie,_e]of a.remotes)X.has(ie)||(e.remove(_e),a.remotes.delete(ie));let Re=new Map(z.z.map(ie=>[ie[0],ie])),ge=new Set;for(let ie of F.z){ge.add(ie[0]);let _e=a.slot.get(ie[0]);if(!_e){if(_e=t.spawn({out:{x:ie[1],z:ie[2]},n:{x:0,z:1},t:{x:1,z:0},count:0},Math.max(1,L.round),!!ie[6]),!_e)continue;a.slot.set(ie[0],_e),_e.runner=!!ie[7],_e.mpX=ie[1],_e.mpZ=ie[2],_e.state="chase"}let Le=Re.get(ie[0])||ie;_e.mpX=l(Le[1],ie[1],k),_e.mpZ=l(Le[2],ie[2],k),_e.mpYaw=c(Le[3],ie[3],k),_e.mpClimb=ie[5],ie[8]&&_e.attackT<=0&&(_e.attackT=.01)}for(let[ie,_e]of a.slot)ge.has(ie)||(a.slot.delete(ie),_e.state!=="dead"&&_e.state!=="dying"&&(_e.state="dying",_e.dieT=0,_e.dieDir=Math.random()*.8-.4,i.onZDie?.(_e)));for(let ie of a.slot.values()){let _e=Math.hypot(ie.mpX-ie.pos.x,ie.mpZ-ie.pos.z);ie.pos.x=ie.mpX,ie.pos.z=ie.mpZ,ie.speed=0,ie.cool=99,ie.phase+=Math.min(.6,_e*2.6),ie.stuckTot=0}t.update(x,b,n,i.world.door,{...S,hitPlayer:()=>{}});for(let ie of a.slot.values())ie.pos.x=ie.mpX,ie.pos.z=ie.mpZ,ie.yaw=ie.mpYaw,ie.root.rotation.y=ie.mpYaw,ie.root.position.y=ie.mpClimb||0,ie.climbY=ie.mpClimb||0;t.alive=a.slot.size}let E=new D;function w(x){let b=[...a.remotes.values()].filter(k=>k.position.y<.1&&k.visible);if(!b.length)return null;let S=Math.floor(performance.now()/6e3)%b.length,P=b[S],N=P.rotation.y,z=P.position.x+Math.sin(N)*3.4,F=P.position.z+Math.cos(N)*3.4;return E.set(z,2.6,F),x.position.lerp(E,.2),x.lookAt(P.position.x,1.4,P.position.z),P.userData.name}function C(x,b){let S=a.remotes.get(x);S&&S.userData.talk&&(S.userData.talk.visible=!!b)}return{S:a,spectate:w,connect:f,stop:M,update:_,send:m,setTalking:C,get on(){return a.on}}}function V0(i,e,t){let s=Math.min(2,window.devicePixelRatio||1),r=document.createElement("canvas");r.id="minimap",r.width=r.height=104*s,document.getElementById("hud").appendChild(r);let a=r.getContext("2d"),l={x0:1e9,x1:-1e9,z0:1e9,z1:-1e9};for(let M of i.colliders)M.y1>=2.5&&M.x1-M.x0+(M.z1-M.z0)>3&&(l.x0=Math.min(l.x0,M.x0),l.x1=Math.max(l.x1,M.x1),l.z0=Math.min(l.z0,M.z0),l.z1=Math.max(l.z1,M.z1));let c=3,o=Math.max(l.x1-l.x0,l.z1-l.z0)+c*2,h=104*s/o,d=(l.x0+l.x1)/2,u=(l.z0+l.z1)/2,f=M=>(M-d)*h+104*s/2,p=M=>(M-u)*h+104*s/2,v=document.createElement("canvas");v.width=v.height=104*s;let g=v.getContext("2d");g.fillStyle="rgba(200,230,240,0.55)";for(let M of i.colliders)M.y1>=1&&g.fillRect(f(M.x0),p(M.z0),Math.max(1,(M.x1-M.x0)*h),Math.max(1,(M.z1-M.z0)*h));let m=0;return function(A){if(m+=A,m<.08)return;m=0;let _=104*s;a.clearRect(0,0,_,_),a.drawImage(v,0,0),a.fillStyle="#ff3b4e";let E=2.4*s;for(let P of e.list)P.state!=="dead"&&P.root.visible&&(a.beginPath(),a.arc(f(P.pos.x),p(P.pos.z),E,0,6.283),a.fill());let w=f(t.x),C=p(t.z),x=-Math.sin(t.yaw),b=-Math.cos(t.yaw),S=6*s;i.marker&&(a.fillStyle="#ffd36b",a.fillRect(f(i.marker.x)-3*s,p(i.marker.z)-3*s,6*s,6*s)),a.fillStyle="#3cf0c0",a.strokeStyle="#04241c",a.lineWidth=s,a.beginPath(),a.moveTo(w+x*S,C+b*S),a.lineTo(w-x*S*.6-b*S*.6,C-b*S*.6+x*S*.6),a.lineTo(w-x*S*.6+b*S*.6,C-b*S*.6-x*S*.6),a.closePath(),a.fill(),a.stroke()}}var Bi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Un=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},AM=new xs(-1,1,1,-1,0,1),Nd=class extends St{constructor(){super(),this.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xt([0,2,0,0,2,0],2))}},RM=new Nd,Oi=class{constructor(e){this._mesh=new he(RM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,AM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Vr=class extends Un{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=In.clone(e.uniforms),this.material=new vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Oi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var So=class extends Un{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},vh=class extends Un{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var _h=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new Vt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Yt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vr(Bi),this.copyPass.material.blending=jt,this.timer=new Ga}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}So!==void 0&&(a instanceof So?n=!0:a instanceof vh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Eo=class extends Un{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new fe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var G0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new fe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Gr=class i extends Un{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new fe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Vt(r,a,{type:Yt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Vt(r,a,{type:Yt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Vt(r,a,{type:Yt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let l=G0;this.highPassUniforms=In.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vt({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new le(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let o=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=o,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=In.clone(Bi.uniforms),this.blendMaterial=new vt({uniforms:this.copyUniforms,vertexShader:Bi.vertexShader,fragmentShader:Bi.fragmentShader,premultipliedAlpha:!0,blending:Qt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new fe,this._oldClearAlpha=1,this._basic=new lt,this._fsQuad=new Oi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let l=t[a],c=a+1<e?t[a+1]:0,o=l+c;s.push((a*l+(a+1)*c)/o),r.push(o)}return new vt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Gr.BlurDirectionX=new le(1,0);Gr.BlurDirectionY=new le(0,1);var wo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new le},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new nt},cameraProjectionMatrixInverse:{value:new nt},cameraWorldMatrix:{value:new nt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},To={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},yh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function W0(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=CM(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let l=t[a],c=2*Math.PI*l/n,o=new D(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(o.x*.5+.5)*255,s[a*4+1]=(o.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Ri(s,e,e);return r.wrapS=Bn,r.wrapT=Bn,r.needsUpdate=!0,r}function CM(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var Ao={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Ud(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new le},cameraProjectionMatrixInverse:{value:new nt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Ud(i,e,t){let n=PM(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function PM(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new D(Math.cos(r),Math.sin(r),a))}return n}var Mh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),l=(e+t)*a,c=Math.floor(e+l),o=Math.floor(t+l),h=(3-Math.sqrt(3))/6,d=(c+o)*h,u=c-d,f=o-d,p=e-u,v=t-f,g,m;p>v?(g=1,m=0):(g=0,m=1);let M=p-g+h,A=v-m+h,_=p-1+2*h,E=v-1+2*h,w=c&255,C=o&255,x=this.perm[w+this.perm[C]]%12,b=this.perm[w+g+this.perm[C+m]]%12,S=this.perm[w+1+this.perm[C+1]]%12,P=.5-p*p-v*v;P<0?n=0:(P*=P,n=P*P*this._dot(this.grad3[x],p,v));let N=.5-M*M-A*A;N<0?s=0:(N*=N,s=N*N*this._dot(this.grad3[b],M,A));let z=.5-_*_-E*E;return z<0?r=0:(z*=z,r=z*z*this._dot(this.grad3[S],_,E)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,l,o=(e+t+n)*.3333333333333333,h=Math.floor(e+o),d=Math.floor(t+o),u=Math.floor(n+o),f=1/6,p=(h+d+u)*f,v=h-p,g=d-p,m=u-p,M=e-v,A=t-g,_=n-m,E,w,C,x,b,S;M>=A?A>=_?(E=1,w=0,C=0,x=1,b=1,S=0):M>=_?(E=1,w=0,C=0,x=1,b=0,S=1):(E=0,w=0,C=1,x=1,b=0,S=1):A<_?(E=0,w=0,C=1,x=0,b=1,S=1):M<_?(E=0,w=1,C=0,x=0,b=1,S=1):(E=0,w=1,C=0,x=1,b=1,S=0);let P=M-E+f,N=A-w+f,z=_-C+f,F=M-x+2*f,k=A-b+2*f,L=_-S+2*f,U=M-1+3*f,W=A-1+3*f,B=_-1+3*f,X=h&255,j=d&255,Re=u&255,ge=this.perm[X+this.perm[j+this.perm[Re]]]%12,ie=this.perm[X+E+this.perm[j+w+this.perm[Re+C]]]%12,_e=this.perm[X+x+this.perm[j+b+this.perm[Re+S]]]%12,Le=this.perm[X+1+this.perm[j+1+this.perm[Re+1]]]%12,K=.6-M*M-A*A-_*_;K<0?s=0:(K*=K,s=K*K*this._dot3(this.grad3[ge],M,A,_));let re=.6-P*P-N*N-z*z;re<0?r=0:(re*=re,r=re*re*this._dot3(this.grad3[ie],P,N,z));let ve=.6-F*F-k*k-L*L;ve<0?a=0:(ve*=ve,a=ve*ve*this._dot3(this.grad3[_e],F,k,L));let Ve=.6-U*U-W*W-B*B;return Ve<0?l=0:(Ve*=Ve,l=Ve*Ve*this._dot3(this.grad3[Le],U,W,B)),32*(s+r+a+l)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,l=this.perm,c=(Math.sqrt(5)-1)/4,o=(5-Math.sqrt(5))/20,h,d,u,f,p,v=(e+t+n+s)*c,g=Math.floor(e+v),m=Math.floor(t+v),M=Math.floor(n+v),A=Math.floor(s+v),_=(g+m+M+A)*o,E=g-_,w=m-_,C=M-_,x=A-_,b=e-E,S=t-w,P=n-C,N=s-x,z=b>S?32:0,F=b>P?16:0,k=S>P?8:0,L=b>N?4:0,U=S>N?2:0,W=P>N?1:0,B=z+F+k+L+U+W,X=a[B][0]>=3?1:0,j=a[B][1]>=3?1:0,Re=a[B][2]>=3?1:0,ge=a[B][3]>=3?1:0,ie=a[B][0]>=2?1:0,_e=a[B][1]>=2?1:0,Le=a[B][2]>=2?1:0,K=a[B][3]>=2?1:0,re=a[B][0]>=1?1:0,ve=a[B][1]>=1?1:0,Ve=a[B][2]>=1?1:0,Me=a[B][3]>=1?1:0,Be=b-X+o,rt=S-j+o,se=P-Re+o,ce=N-ge+o,de=b-ie+2*o,pe=S-_e+2*o,ye=P-Le+2*o,$e=N-K+2*o,qe=b-re+3*o,Ke=S-ve+3*o,et=P-Ve+3*o,O=N-Me+3*o,_t=b-1+4*o,ot=S-1+4*o,I=P-1+4*o,y=N-1+4*o,G=g&255,Y=m&255,te=M&255,me=A&255,be=l[G+l[Y+l[te+l[me]]]]%32,ne=l[G+X+l[Y+j+l[te+Re+l[me+ge]]]]%32,oe=l[G+ie+l[Y+_e+l[te+Le+l[me+K]]]]%32,we=l[G+re+l[Y+ve+l[te+Ve+l[me+Me]]]]%32,We=l[G+1+l[Y+1+l[te+1+l[me+1]]]]%32,Ee=.6-b*b-S*S-P*P-N*N;Ee<0?h=0:(Ee*=Ee,h=Ee*Ee*this._dot4(r[be],b,S,P,N));let Se=.6-Be*Be-rt*rt-se*se-ce*ce;Se<0?d=0:(Se*=Se,d=Se*Se*this._dot4(r[ne],Be,rt,se,ce));let Oe=.6-de*de-pe*pe-ye*ye-$e*$e;Oe<0?u=0:(Oe*=Oe,u=Oe*Oe*this._dot4(r[oe],de,pe,ye,$e));let Ye=.6-qe*qe-Ke*Ke-et*et-O*O;Ye<0?f=0:(Ye*=Ye,f=Ye*Ye*this._dot4(r[we],qe,Ke,et,O));let tt=.6-_t*_t-ot*ot-I*I-y*y;return tt<0?p=0:(tt*=tt,p=tt*tt*this._dot4(r[We],_t,ot,I,y)),27*(h+d+u+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Wr=class i extends Un{constructor(e,t,n=512,s=512,r,a,l){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=W0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Vt(this.width,this.height,{type:Yt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new vt({defines:Object.assign({},wo.defines),uniforms:In.clone(wo.uniforms),vertexShader:wo.vertexShader,fragmentShader:wo.fragmentShader,blending:jt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new za,this.normalMaterial.blending=jt,this.pdMaterial=new vt({defines:Object.assign({},Ao.defines),uniforms:In.clone(Ao.uniforms),vertexShader:Ao.vertexShader,fragmentShader:Ao.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new vt({defines:Object.assign({},To.defines),uniforms:In.clone(To.uniforms),vertexShader:To.vertexShader,fragmentShader:To.fragmentShader,blending:jt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new vt({uniforms:In.clone(Bi.uniforms),vertexShader:Bi.vertexShader,fragmentShader:Bi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Xa,blendDst:Xs,blendEquation:si,blendSrcAlpha:Wa,blendDstAlpha:Xs,blendEquationAlpha:si}),this.blendMaterial=new vt({uniforms:In.clone(yh.uniforms),vertexShader:yh.vertexShader,fragmentShader:yh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:sc,blendSrc:Xa,blendDst:Xs,blendEquation:si,blendSrcAlpha:Wa,blendDstAlpha:Xs,blendEquationAlpha:si}),this._fsQuad=new Oi(null),this._originalClearColor=new fe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),l!==void 0&&this.updatePdMaterial(l)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Ci,this.depthTexture.format=Di,this.depthTexture.type=Ms,this.normalRenderTarget=new Vt(this.width,this.height,{minFilter:Kt,magFilter:Kt,type:Yt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ud(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=l,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=l,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Mh,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let l=0;l<e;l++){let c=a,o=l;s[(a*e+l)*4]=(t.noise(c,o)*.5+.5)*255,s[(a*e+l)*4+1]=(t.noise(c+e,o)*.5+.5)*255,s[(a*e+l)*4+2]=(t.noise(c,o+e)*.5+.5)*255,s[(a*e+l)*4+3]=(t.noise(c+e,o+e)*.5+.5)*255}let r=new Ri(s,e,e,Pn,En);return r.wrapS=Bn,r.wrapT=Bn,r.needsUpdate=!0,r}};Wr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Ro={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var bh=class extends Un{constructor(){super(),this.isOutputPass=!0,this.uniforms=In.clone(Ro.uniforms),this.material=new Dr({name:Ro.name,uniforms:this.uniforms,vertexShader:Ro.vertexShader,fragmentShader:Ro.fragmentShader}),this._fsQuad=new Oi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===qa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ya?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Za?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===qs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ja?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ka?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===$a&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Co=class{constructor(e,t,n){this.max=e,this.n=0,this.next=0;let s=this.geo=new St;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.siz=new Float32Array(e),s.setAttribute("position",new gt(this.pos,3).setUsage(oo)),s.setAttribute("aColor",new gt(this.col,4).setUsage(oo)),s.setAttribute("aSize",new gt(this.siz,1).setUsage(oo)),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.s0=new Float32Array(e),this.s1=new Float32Array(e),this.c0=new Float32Array(e*4),this.uniforms={map:{value:n},uScale:{value:800}};let r=this.mat=new vt({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:t?Qt:Ii,vertexShader:`attribute float aSize; attribute vec4 aColor; varying vec4 vC; uniform float uScale;
        void main(){ vec4 mv = modelViewMatrix*vec4(position,1.); gl_Position = projectionMatrix*mv; gl_PointSize = clamp(aSize*uScale/max(-mv.z,0.1), 0., 300.); vC = aColor; }`,fragmentShader:`uniform sampler2D map; varying vec4 vC;
        void main(){ float a = texture2D(map, gl_PointCoord).a * vC.a; if(a<0.004) discard; gl_FragColor = vec4(vC.rgb, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        }`});this.points=new Ea(s,r),this.points.frustumCulled=!1,this.points.renderOrder=5,this.points.userData.noAO=!0}emit(e,t,n,s,r,a,l,c,o,h,d,u,f,p=0,v=0){let g=this.next;this.next=(this.next+1)%this.max,this.pos[g*3]=e,this.pos[g*3+1]=t,this.pos[g*3+2]=n,this.vel[g*3]=s,this.vel[g*3+1]=r,this.vel[g*3+2]=a,this.life[g]=this.maxLife[g]=l,this.s0[g]=c,this.s1[g]=o,this.grav[g]=p,this.drag[g]=v,this.c0[g*4]=h,this.c0[g*4+1]=d,this.c0[g*4+2]=u,this.c0[g*4+3]=f}update(e){let{pos:t,vel:n,life:s,maxLife:r,col:a,siz:l,c0:c}=this;for(let o=0;o<this.max;o++){if(s[o]<=0){l[o]=0,a[o*4+3]=0;continue}if(s[o]-=e,s[o]<=0){l[o]=0,a[o*4+3]=0;continue}let h=1-s[o]/r[o],d=o*3,u=Math.max(0,1-this.drag[o]*e);n[d]*=u,n[d+1]=n[d+1]*u-this.grav[o]*e,n[d+2]*=u,t[d]+=n[d]*e,t[d+1]+=n[d+1]*e,t[d+2]+=n[d+2]*e,t[d+1]<.02&&this.grav[o]>0&&(t[d+1]=.02,n[d]*=.4,n[d+2]*=.4,n[d+1]*=-.25),l[o]=this.s0[o]+(this.s1[o]-this.s0[o])*h;let f=h<.1?h*10:1-(h-.1)/.9;a[o*4]=c[o*4],a[o*4+1]=c[o*4+1],a[o*4+2]=c[o*4+2],a[o*4+3]=c[o*4+3]*f}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0}clear(){this.life.fill(0)}},Sh=class{constructor(e,t,n){this.scene=e,this.tier=n;let s=n>0?1:.4;this.soft=new Co(Math.floor(900*s)+100,!1,t.glow),this.add=new Co(Math.floor(900*s)+100,!0,t.glow),e.add(this.soft.points,this.add.points),this.tracers=[];let r=new it(1,1,1);for(let a=0;a<24;a++){let l=new he(r,new lt({color:new fe(5,3.6,1.4),transparent:!0,blending:Qt,depthWrite:!1,toneMapped:!1}));l.visible=!1,l.userData.noAO=!0,l.userData.t=0,e.add(l),this.tracers.push(l)}this.tn=0,this.maxCas=n>0?80:16,this.cas=new fs(new At(.009,.009,.034,6),new je({color:14066743,metalness:1,roughness:.3}),this.maxCas),this.cas.frustumCulled=!1,this.cas.castShadow=!1,e.add(this.cas),this.casData=Array.from({length:this.maxCas},()=>({t:0,p:new D,v:new D,r:new Yn,w:new D})),this.casNext=0,this._m=new nt,this._q=new On,this._s=new D(1,1,1);for(let a=0;a<this.maxCas;a++)this._m.makeScale(0,0,0),this.cas.setMatrixAt(a,this._m)}setScale(e,t){let n=e/(2*Math.tan(t*Math.PI/360));this.soft.uniforms.uScale.value=n,this.add.uniforms.uScale.value=n}tracer(e,t,n=.012){let s=this.tracers[this.tn++%this.tracers.length],r=e.distanceTo(t);r<.5||(s.position.copy(e).lerp(t,.5),s.lookAt(t),s.scale.set(n,n,r),s.visible=!0,s.userData.t=.06,s.material.opacity=1)}casing(e,t){let n=this.casData[this.casNext++%this.maxCas];n.t=2.5,n.p.copy(e),n.v.copy(t),n.r.set(J(Zt),J(Zt),J(Zt)),n.w.set(J(-30,30),J(-30,30),J(-30,30))}blood(e,t,n,s=1){let r=this.tier>0?1:.5;n=Math.ceil(n*r);for(let a=0;a<n;a++){let l=J(.6,3.2)*s;this.soft.emit(e.x,e.y,e.z,t.x*l+J(-1,1),t.y*l+J(-.2,1.4),t.z*l+J(-1,1),J(.35,.8),J(.12,.2)*s,J(.45,.8)*s,J(.55,.9),J(.02,.07),J(.04,.12),J(.35,.65),4,2.5)}for(let a=0;a<Math.ceil(n*.6);a++){let l=J(1.5,5)*s;this.soft.emit(e.x,e.y,e.z,t.x*l+J(-1.5,1.5),t.y*l+J(0,2.5),t.z*l+J(-1.5,1.5),J(.5,1),.05,.04,.6,0,.03,.9,11,.4)}}sparks(e,t,n){n=Math.ceil(n*(this.tier>0?1:.5));for(let s=0;s<n;s++){let r=J(2,7);this.add.emit(e.x,e.y,e.z,t.x*r+J(-2,2),t.y*r+J(-1,2.5),t.z*r+J(-2,2),J(.2,.5),.07,.015,4,J(1.6,2.6),.5,1,9,.8)}}dust(e,t,n,s=[.45,.36,.26]){n=Math.ceil(n*(this.tier>0?1:.5));for(let r=0;r<n;r++)this.soft.emit(e.x,e.y,e.z,t.x*J(.3,1.5)+J(-.5,.5),t.y*J(.2,1)+J(0,.6),t.z*J(.3,1.5)+J(-.5,.5),J(.6,1.3),.2,J(.8,1.4),s[0],s[1],s[2],.35,-.2,1.8)}smoke(e,t,n=2){for(let s=0;s<n;s++)this.soft.emit(e.x,e.y,e.z,t.x*1.2+J(-.2,.2),t.y*1.2+J(.1,.5),t.z*1.2+J(-.2,.2),J(.5,1),.05,.28,.55,.55,.58,.25,-.4,2)}flash(e,t){this.add.emit(e.x,e.y,e.z,t.x*1,t.y*1,t.z*1,.06,.45,.8,5,3.4,1.4,1,0,0);for(let n=0;n<3;n++)this.add.emit(e.x,e.y,e.z,t.x*J(3,9)+J(-2,2),t.y*J(3,9)+J(-2,2),t.z*J(3,9)+J(-2,2),J(.08,.18),.1,.02,4,2.2,.6,1,2,1)}glowBurst(e,t,n,s,r=24,a=4){for(let l=0;l<r;l++){let c=J(Zt),o=J(-.6,1),h=J(.4,1)*a;this.add.emit(e.x,e.y,e.z,Math.cos(c)*h,o*h,Math.sin(c)*h,J(.5,1.1),.18,.02,t,n,s,1,2,1.2)}}update(e){this.soft.update(e),this.add.update(e);for(let n of this.tracers)n.visible&&(n.userData.t-=e,n.material.opacity=Math.max(0,n.userData.t/.06),n.userData.t<=0&&(n.visible=!1));let t=!1;for(let n=0;n<this.maxCas;n++){let s=this.casData[n];if(s.t<=0)continue;t=!0,s.t-=e,s.v.y-=9.8*e,s.p.addScaledVector(s.v,e),s.p.y<.02&&(s.p.y=.02,s.v.y*=-.35,s.v.x*=.6,s.v.z*=.6,s.w.multiplyScalar(.5)),s.r.x+=s.w.x*e,s.r.y+=s.w.y*e,s.r.z+=s.w.z*e;let r=Math.min(1,s.t*2);this._q.setFromEuler(s.r),this._s.setScalar(s.t>0?r:0),this._m.compose(s.p,this._q,this._s),this.cas.setMatrixAt(n,this._m),s.t<=0&&(this._m.makeScale(0,0,0),this.cas.setMatrixAt(n,this._m))}(t||this._anyBefore)&&(this.cas.instanceMatrix.needsUpdate=!0),this._anyBefore=t}reset(){this.soft.clear(),this.add.clear();for(let e of this.casData)e.t=0;for(let e of this.tracers)e.visible=!1}},Po=class{constructor(e,t,n={}){this.o=Object.assign({R:22,y0:.2,y1:6,size:.06,alpha:.2,col:[.9,.75,.55],additive:!0,speed:1},n),this.ps=new Co(t,this.o.additive,e.glow),this.n=t,this.R=this.o.R,this.t=0;for(let s=0;s<t;s++)this.ps.pos[s*3]=J(-this.R,this.R),this.ps.pos[s*3+1]=J(this.o.y0,this.o.y1),this.ps.pos[s*3+2]=J(-this.R,this.R);this.ps.update=s=>this.upd(s),this.points=this.ps.points,this.center={x:0,z:0}}upd(e){let t=this.ps,n=this.o;this.t+=e;let s=this.center;for(let r=0;r<this.n;r++){let a=r*3,l=n.speed;t.pos[a]+=(Math.sin(this.t*.3+r)*.25+.35)*e*l,t.pos[a+1]+=Math.sin(this.t*.4+r*1.7)*.06*e*l,t.pos[a+2]+=Math.cos(this.t*.25+r*.7)*.2*e*l,t.pos[a]-s.x>this.R?t.pos[a]-=this.R*2:t.pos[a]-s.x<-this.R&&(t.pos[a]+=this.R*2),t.pos[a+2]-s.z>this.R?t.pos[a+2]-=this.R*2:t.pos[a+2]-s.z<-this.R&&(t.pos[a+2]+=this.R*2),t.siz[r]=n.size*(1+r%3*.4),t.col[r*4]=n.col[0],t.col[r*4+1]=n.col[1],t.col[r*4+2]=n.col[2],t.col[r*4+3]=n.alpha*(.6+.4*(r%4/3))}t.geo.attributes.position.needsUpdate=!0,t.geo.attributes.aColor.needsUpdate=!0,t.geo.attributes.aSize.needsUpdate=!0}},IM={uniforms:{tDiffuse:{value:null},uTime:{value:0},uDamage:{value:0},uVig:{value:.55},uGrain:{value:.07},uSat:{value:1.1},uAberr:{value:.6},uRes:{value:new le(1,1)},uLow:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime,uDamage,uVig,uGrain,uSat,uAberr,uLow; uniform vec2 uRes; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453); }
    void main(){
      vec2 c=vUv-.5; float d=dot(c,c);
      vec2 off=c*(d*uAberr*0.03 + uDamage*0.012);
      vec3 col; col.r=texture2D(tDiffuse,vUv+off).r; col.g=texture2D(tDiffuse,vUv).g; col.b=texture2D(tDiffuse,vUv-off).b;
      float l=dot(col,vec3(.299,.587,.114));
      col=mix(vec3(l),col,uSat*(1.-uDamage*.35-uLow*.5));
      col=(col-.5)*1.1+.5;
      col+=vec3(-.012,.006,.03)*(1.-l)+vec3(.035,.014,-.02)*l*l;
      float r=length(c*vec2(1.,.85));
      col*=1.-smoothstep(.28,.95,r)*uVig;
      float dm=smoothstep(.25,.85,r);
      col.r+=(uDamage+uLow*.35*(.5+.5*sin(uTime*6.)))*dm*.55; col.gb*=1.-(uDamage+uLow*.3)*dm*.6;
      col+=(h(vUv*uRes+fract(uTime)*100.)-.5)*uGrain;
      gl_FragColor=vec4(max(col,0.),1.);
    }`},Eh=class{constructor(e,t,n,s){this.r=e,this.scene=t,this.camera=n,this.viewScene=s,this.mode="direct",this.w=1,this.h=1,this.pr=1}build(e){if(this.mode=e,this.composer&&(this.composer.dispose?.(),this.composer=null),e==="direct")return;let t=new Vt(this.w,this.h,{type:Yt,samples:e==="full"?0:4}),n=this.composer=new _h(this.r,t);if(n.setPixelRatio?.(this.pr),n.setSize(this.w,this.h),n.addPass(new Eo(this.scene,this.camera)),e==="full"){let r=this.gtao=new Wr(this.scene,this.camera,this.w*this.pr,this.h*this.pr);r.output=Wr.OUTPUT.Default,r.blendIntensity=1,r.updateGtaoMaterial({radius:.7,distanceExponent:1.5,thickness:1.5,scale:1.2,samples:10,distanceFallOff:1,screenSpaceRadius:!1}),r.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,radiusExponent:1,rings:2,samples:8});let a=r._overrideVisibility.bind(r);r._overrideVisibility=()=>{a(),this.scene.traverse(l=>{l.userData.noAO&&l.visible&&(l.visible=!1,r._visibilityCache.push(l))})},n.addPass(r)}let s=new Eo(this.viewScene,this.camera);s.clear=!1,s.clearDepth=!0,n.addPass(s),this.bloom=new Gr(new le(this.w,this.h),.42,.55,.9),n.addPass(this.bloom),n.addPass(new bh),this.grade=new Vr(IM),this.grade.uniforms.uRes.value.set(this.w*this.pr,this.h*this.pr),n.addPass(this.grade)}setSize(e,t,n){this.w=e,this.h=t,this.pr=n,this.composer&&(this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.gtao?.setSize(e*n,t*n),this.grade.uniforms.uRes.value.set(e*n,t*n))}render(e,t,n,s){if(!this.composer){let a=this.r;a.autoClear=!1,a.clear(),a.render(this.scene,this.camera),a.clearDepth(),a.render(this.viewScene,this.camera),a.autoClear=!0;return}let r=this.grade.uniforms;r.uTime.value=t,r.uDamage.value=n,r.uLow.value=s,this.composer.render(e)}};var wh=class{constructor(){this.ctx=null,this.muted=!1,this.lastGroan=0,this.lastTick=0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=this.muted?0:.8;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,n.attack.value=.003,n.release.value=.2,this.master.connect(n),n.connect(t.destination);let s=t.createBuffer(1,t.sampleRate*2,t.sampleRate),r=s.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=Math.random()*2-1;this.noise=s;let a=t.sampleRate*1.8,l=t.createBuffer(2,a,t.sampleRate);for(let c=0;c<2;c++){let o=l.getChannelData(c);for(let h=0;h<a;h++)o[h]=(Math.random()*2-1)*Math.pow(1-h/a,3.2)}this.verb=t.createConvolver(),this.verb.buffer=l,this.verbIn=t.createGain(),this.verbIn.gain.value=.35,this.verbIn.connect(this.verb),this.verb.connect(this.master),this.startAmbient()}setMuted(e){this.muted=e,this.master&&this.master.gain.setTargetAtTime(e?0:.8,this.ctx.currentTime,.03)}get ok(){return this.ctx&&!this.muted&&this.ctx.state==="running"}out(e=0,t=.3){let n=this.ctx,s=n.createGain(),r=s;if(n.createStereoPanner){let l=n.createStereoPanner();l.pan.value=Gt(e,-1,1),s.connect(l),r=l}r.connect(this.master);let a=n.createGain();return a.gain.value=t,r.connect(a),a.connect(this.verbIn),s}nz(e,t,n,s,r,a,l,c=1){let o=this.ctx,h=o.createBufferSource();h.buffer=this.noise,h.loop=!0;let d=o.createBiquadFilter();d.type=n,d.Q.value=c,d.frequency.setValueAtTime(s,e),d.frequency.exponentialRampToValueAtTime(Math.max(20,r),e+t);let u=o.createGain();u.gain.setValueAtTime(a,e),u.gain.exponentialRampToValueAtTime(8e-4,e+t),h.connect(d),d.connect(u),u.connect(l),h.start(e,J(1)),h.stop(e+t+.05)}tone(e,t,n,s,r,a,l,c=.003){let o=this.ctx,h=o.createOscillator();h.type=n,h.frequency.setValueAtTime(s,e),h.frequency.exponentialRampToValueAtTime(Math.max(10,r),e+t);let d=o.createGain();d.gain.setValueAtTime(1e-4,e),d.gain.linearRampToValueAtTime(a,e+c),d.gain.exponentialRampToValueAtTime(8e-4,e+t),h.connect(d),d.connect(l),h.start(e),h.stop(e+t+.05)}shot(e){if(!this.ok)return;let t=this.ctx,n=t.currentTime,s=this.out(0,e==="shotgun"||e==="lmg"?.5:.3),r={pistol:[.13,2600,.7,150,.9,.55],akimbo:[.1,2800,.55,170,.75,.45],smg:[.09,3400,.5,190,.7,.45],shotgun:[.34,1800,1,85,1.2,.9],sawed:[.28,1500,1.1,70,1.3,1],rifle:[.16,2200,.8,120,1,.7],lever:[.2,1800,.75,110,1.15,.7],nailer:[.045,4200,.28,240,.25,.2],lmg:[.2,1900,.9,95,1.2,.8]}[e]||[.12,2500,.7,150,1,.6];this.nz(n,r[0],"lowpass",r[1],220,r[2],s,.7),this.nz(n,.025,"highpass",3e3,6e3,.6,s),this.tone(n,r[0]*1.2,"sine",r[3],r[3]*.3,r[4]*.9,s),this.tone(n,.05,"square",r[3]*4,r[3]*1.5,.15,s)}click(e=0,t=3200,n=.35,s=0){if(!this.ok)return;let r=this.ctx.currentTime+e,a=this.out(s,.1);this.nz(r,.03,"bandpass",t,t*.7,n,a,3),this.tone(r,.025,"square",t*.3,t*.2,.05,a)}reload(e){if(!this.ok)return;let t=e==="lmg"?3.4:e==="rifle"?1.7:e==="smg"?1.4:1;this.click(.12,2400,.4),this.click(t*.55,1800,.5),this.click(t*.8,3600,.45),e!=="pistol"&&this.click(t*.92,1400,.5)}pump(){this.click(0,900,.6),this.click(.18,1500,.55)}shell(){this.click(0,2e3,.45)}empty(){this.click(0,1500,.3)}groan(e=0,t=.5,n=1,s=1){if(!this.ok)return;let r=this.ctx,a=r.currentTime;if(a-this.lastGroan<.09)return;this.lastGroan=a;let l=a,c=this.out(e,.45),o=J(70,105)*n,h=r.createOscillator();h.type="sawtooth",h.frequency.setValueAtTime(o*1.25,l),h.frequency.linearRampToValueAtTime(o,l+s*.3),h.frequency.linearRampToValueAtTime(o*.7,l+s);let d=r.createOscillator();d.frequency.value=J(5,9);let u=r.createGain();u.gain.value=6,d.connect(u),u.connect(h.frequency);let f=r.createBiquadFilter();f.type="bandpass",f.Q.value=5,f.frequency.setValueAtTime(J(450,700),l),f.frequency.linearRampToValueAtTime(J(900,1300),l+s*.6);let p=r.createBiquadFilter();p.type="lowpass",p.frequency.value=1600;let v=r.createGain();v.gain.setValueAtTime(1e-4,l),v.gain.linearRampToValueAtTime(t*.5,l+s*.15),v.gain.exponentialRampToValueAtTime(.001,l+s),h.connect(f),f.connect(p),p.connect(v),v.connect(c),h.start(l),d.start(l),h.stop(l+s+.05),d.stop(l+s+.05),this.nz(l,s*.8,"bandpass",900,500,t*.15,c,2)}zhit(e=0,t=!1){if(!this.ok)return;let n=this.ctx.currentTime,s=this.out(e,.2);this.nz(n,.09,"lowpass",700,120,.5,s),this.tone(n,.1,"sine",120,50,.4,s),t&&this.tone(n,.08,"triangle",900,500,.12,s)}zdie(e=0,t=.4){if(!this.ok)return;this.groan(e,t,.75,.7);let n=this.ctx.currentTime+.15,s=this.out(e,.25);this.nz(n,.25,"lowpass",500,60,.6,s),this.tone(n,.3,"sine",90,35,.5,s)}tick(e){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,0);this.tone(t,.05,"square",e?900:1500,e?600:1300,e?.12:.07,n)}cash(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.2);this.tone(e,.12,"triangle",1250,1250,.22,t),this.tone(e+.07,.25,"triangle",1880,1880,.22,t),this.nz(e,.05,"highpass",5e3,8e3,.15,t)}deny(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,0);this.tone(e,.22,"sawtooth",130,90,.2,t),this.tone(e+.1,.22,"sawtooth",110,80,.2,t)}hurt(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.2);this.nz(e,.18,"lowpass",600,90,.9,t),this.tone(e,.25,"sine",80,40,.8,t),this.tone(e,.2,"sawtooth",220,110,.12,t)}heart(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,0);this.tone(e,.14,"sine",62,38,.7,t),this.tone(e+.18,.14,"sine",56,34,.5,t)}plank(e){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,.3);this.nz(t,e?.16:.08,"bandpass",e?500:800,250,.7,n,2),this.tone(t,.1,"triangle",220,90,.4,n),e&&this.nz(t+.03,.12,"highpass",1500,3e3,.3,n)}repair(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.2);this.nz(e,.07,"bandpass",1100,600,.6,t,2),this.tone(e,.08,"square",300,120,.15,t),this.tone(e+.1,.1,"triangle",1500,1500,.1,t)}door(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.5);this.nz(e,2.2,"lowpass",900,150,.7,t,1),this.tone(e,2.2,"sawtooth",55,42,.2,t,.3);for(let n=0;n<5;n++)this.click(.2+n*.35,700+n*120,.7);this.nz(e+2,.4,"lowpass",400,60,.9,t)}boom(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.7);this.nz(e,2.4,"lowpass",2400,50,1.4,t,.7),this.tone(e,1.6,"sine",90,24,1.3,t),this.tone(e+.05,.8,"sawtooth",50,25,.3,t)}power(e){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,.4);(e==="nuke"?[220,277,330,440]:e==="double"?[392,494,587,784]:[330,440,554,659]).forEach((r,a)=>{this.tone(t+a*.07,.4,"triangle",r,r,.2,n),this.tone(t+a*.07,.4,"sine",r*2,r*2,.08,n)})}medkit(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.5);[523,659,784,1047].forEach((n,s)=>{this.tone(e+s*.08,.5,"sine",n,n,.2,t),this.tone(e+s*.08,.5,"triangle",n*2,n*2,.05,t)}),this.tone(e,.9,"sine",300,600,.12,t,.1)}spawnPower(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.5);this.tone(e,.7,"sine",600,1200,.25,t,.05),this.tone(e+.1,.7,"sine",900,1800,.12,t,.05)}round(e){if(!this.ok)return;let t=this.ctx,n=t.currentTime,s=this.out(0,.8);[55,82.4,98,130.8].forEach((a,l)=>{let c=t.createOscillator();c.type="sawtooth",c.frequency.value=a;let o=t.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(200,n),o.frequency.linearRampToValueAtTime(1400,n+1.1),o.frequency.linearRampToValueAtTime(150,n+3.2);let h=t.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.linearRampToValueAtTime(.16,n+.9),h.gain.exponentialRampToValueAtTime(.001,n+3.4),c.connect(o),o.connect(h),h.connect(s),c.start(n),c.stop(n+3.5)}),[440,415,392,330,294].forEach((a,l)=>{this.tone(n+.5+l*.32,1.3,"sine",a,a,.14,s,.01),this.tone(n+.5+l*.32,1.3,"sine",a*2.01,a*2.01,.04,s,.01)}),this.tone(n,.5,"sine",70,28,.9,s),this.nz(n,.35,"lowpass",700,70,.5,s)}over(){if(!this.ok)return;let e=this.ctx,t=e.currentTime,n=this.out(0,.9);[110,130.8,164.8].forEach(s=>{this.tone(t,3.6,"sawtooth",s,s*.5,.12,n,.4)}),this.tone(t,1.5,"sine",60,25,1,n),this.nz(t,1.2,"lowpass",900,60,.7,n)}jingle(e=4){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,.5),s=[523,659,784,659,587,740,880,740];for(let r=0;r<e*4;r++){let a=s[r%s.length]*(r>8?1.12:1);this.tone(t+r*.2,.32,"triangle",a,a,.1,n,.005)}this.nz(t,.4,"bandpass",600,300,.4,n)}open(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.4);this.nz(e,.5,"bandpass",500,900,.4,t,4),this.tone(e,.5,"sawtooth",120,220,.1,t)}startAmbient(){let e=this.ctx,t=e.createGain();t.gain.value=.5,t.connect(this.master);let n=e.createBufferSource();n.buffer=this.noise,n.loop=!0;let s=e.createBiquadFilter();s.type="bandpass",s.Q.value=.8,s.frequency.value=380;let r=e.createGain();r.gain.value=.07;let a=e.createOscillator();a.frequency.value=.11;let l=e.createGain();l.gain.value=.045,a.connect(l),l.connect(r.gain);let c=e.createOscillator();c.frequency.value=.07;let o=e.createGain();o.gain.value=140,c.connect(o),o.connect(s.frequency),n.connect(s),s.connect(r),r.connect(t),n.start(),a.start(),c.start();let h=e.createOscillator();h.type="sawtooth",h.frequency.value=36;let d=e.createBiquadFilter();d.type="lowpass",d.frequency.value=90;let u=e.createGain();u.gain.value=.04,h.connect(d),d.connect(u),u.connect(t),h.start();let f=e.createOscillator();f.type="sine",f.frequency.value=4300;let p=e.createGain();p.gain.value=0;let v=e.createOscillator();v.type="square",v.frequency.value=28;let g=e.createGain();g.gain.value=.003,v.connect(g),g.connect(p.gain);let m=e.createOscillator();m.frequency.value=.3;let M=e.createGain();M.gain.value=.002,m.connect(M),M.connect(p.gain),f.connect(p),p.connect(t),f.start(),v.start(),m.start()}beep(e=3){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,0),s=e<1.2?1480:860;this.tone(t,.04,"square",s,s,e<1.2?.1:.05,n)}_distort(e){let n=new Float32Array(256);for(let s=0;s<256;s++){let r=s/255*2-1;n[s]=Math.tanh(r*e)}return n}ensureMusic(){if(!this.ctx||this.musicBus)return;let e=this.ctx;this.musicBus=e.createGain(),this.musicBus.gain.value=.2,this.musicBus.connect(this.master),this.musicFilter=e.createBiquadFilter(),this.musicFilter.type="lowpass",this.musicFilter.frequency.value=1200,this.musicFilter.connect(this.musicBus),this.guitarShaper=e.createWaveShaper(),this.guitarShaper.curve=this._distort(14),this.guitarShaper.oversample="2x";let t=e.createBiquadFilter();t.type="lowpass",t.frequency.value=2400,this.guitarShaper.connect(t),t.connect(this.musicFilter),this.guitarIn=e.createGain(),this.guitarIn.gain.value=.2,this.guitarIn.connect(this.guitarShaper),this.musicOn=!0,this.musicPlaying=!1,this.musicMood="calm",this.musicLow=!1,this._nextMus=0,this._duckUntil=0,this._six=0}setMusicDetail(e){this.musicLow=!!e,this.guitarShaper&&(this.guitarShaper.oversample=e?"none":"2x")}setMusicOn(e){this.musicOn=!!e,this.musicBus&&this.musicBus.gain.setTargetAtTime(this.musicOn?.2:0,this.ctx.currentTime,.05)}musicStart(){this.init(),this.ensureMusic(),this.musicPlaying=!0,this._nextMus=0,this._six=0}musicStop(){this.musicPlaying=!1,this._nextMus=0}setMusicPhase(e){this.musicMood=e==="hot"||e==="round"?"hot":"calm",this.musicFilter&&this.musicFilter.frequency.setTargetAtTime(this.musicMood==="hot"?this.musicLow?1600:3400:1e3,this.ctx.currentTime,.35)}pumpMusic(){if(!this.ctx||!this.musicPlaying||!this.musicOn||this.muted||this.ctx.state!=="running")return;this.ensureMusic();let e=this.ctx.currentTime,t=e+(this.musicLow?.28:.2);(!this._nextMus||this._nextMus<e-.05)&&(this._nextMus=e+.04);let n=this.musicMood==="hot"?146:96,s=60/n/4;e<(this._duckUntil||0)?this.musicBus.gain.setTargetAtTime(.05,e,.04):this.musicBus.gain.setTargetAtTime(this.musicMood==="hot"?.24:.14,e,.25);let a=(c,o,h,d,u,f,p=this.musicFilter)=>this.tone(c,o,h,d,u,f,p,.004),l=(c,o,h,d,u,f)=>this.nz(c,o,h,d,u,f,this.musicFilter);for(;this._nextMus<t;)this._riffStep(a,l,this._nextMus,s,this._six++,this.musicMood==="hot",this.musicLow),this._nextMus+=s}_riffStep(e,t,n,s,r,a,l,c){let o=c||this.guitarIn,h=(r%16+16)%16,d=Math.floor(r/16)%4,f=[[164.81,246.94,41.2],[196,293.66,49],[146.83,220,36.71],[164.81,246.94,41.2]][d],p=a?h===0||h===3||h===6||h===10:h===0||h===7,v=a?h===4||h===12:h===8;if(p&&(e(n,.14,"sine",160,46,a?.72:.5),t(n,.018,"highpass",2400,700,.16)),v&&(t(n,l?.06:.1,"bandpass",1900,700,a?.32:.18),l||e(n,.04,"triangle",240,150,.07)),!l&&(a||h%2===0)){let m=a&&(h===6||h===14);t(n,m?.07:.018,"highpass",m?5500:8e3,4200,a?h%2?.045:.08:.03)}if((l?h===0:a?h%2===0:h===0||h===8||h===12)&&o){let m=l?s*10:a?s*1.5:s*5,M=a?.11:.06;t(n,.012,"highpass",3e3,1200,.05),e(n,m,"sawtooth",f[0],f[0]*.985,M,o),l||e(n,m,"sawtooth",f[1]*1.005,f[1],M*.55,o)}if(h===0||a&&!l&&(h===8||h===11)){let m=a&&h!==0,M=m?f[2]*1.5:f[2]*1.04,A=f[2];e(n,m?s*4:s*(a?7:12),"sine",M,A,a?.42:.26)}}duck(e){this.ctx&&(this._duckUntil=this.ctx.currentTime+e)}lineFor(e,t,n){let s=["Wave one. The yard is waking.","Wave two. They heard the metal.","Wave three. Do not blink.","Wave four. The fence is tired.","Wave five. They smell you."],r=["The yard remembers.","More of them. Always more.","Keep the lights on."],a={fuel:["The cans are bleeding. Bring them in.","Fuel the generator. They hate the light."],bus:["Board the bus. It still knows the road.","Four windows, then the barn."],carb:["Something in the back lot is missing a heart.","Find the carburetor. It is still warm."],radio:["Hold the signal. They hunt the quiet.","Stay on the mast."],parts:["The side yard wants its pieces back.","Scrap. Three pieces. Do not linger."],clear:["Lot D is full of them. Empty it.","Clear the barn. Leave none standing."]},l={fuel:"The generator drinks. They smelled it.",bus:"The bus is boarded. They know.",carb:"The heart is back in the engine.",radio:"The signal held. Something answered.",parts:"The yard has its pieces.",clear:"Lot D is quiet. For now."};if(e==="wave")return n>=1&&n<=5?s[n-1]:r[(n||0)%r.length];if(e==="done")return l[t]||"The yard remembers.";let c=a[t]||r;return c[(n||0)%c.length]}announce(e){e&&(this._aq=this._aq||[],this._aq.push(String(e)),this._ab||this._drainAnn())}_drainAnn(){let e=(this._aq||[]).shift();if(!e){this._ab=!1;return}this._ab=!0;let t=Math.min(3.4,.6+e.length*.04);if(this.duck(t+.2),this.ctx&&!this.muted&&this.ctx.state==="running"&&this.growl(t),!this.muted&&typeof speechSynthesis<"u")try{let n=new SpeechSynthesisUtterance(e);n.rate=.76,n.pitch=.42,n.volume=.8,speechSynthesis.cancel(),speechSynthesis.speak(n)}catch{}setTimeout(()=>this._drainAnn(),t*1e3+160)}growl(e){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,.55),s=this.ctx.createWaveShaper(),r=new Float32Array(64);for(let l=0;l<64;l++){let c=l/63*2-1;r[l]=Math.tanh(c*4)}s.curve=r;let a=this.ctx.createBiquadFilter();a.type="bandpass",a.Q.value=6,a.frequency.setValueAtTime(180,t),a.frequency.linearRampToValueAtTime(420,t+e*.45),a.frequency.linearRampToValueAtTime(140,t+e),this.tone(t,e,"sawtooth",70,48,.22,s),s.connect(a),a.connect(n),this.nz(t,e*.8,"bandpass",500,220,.08,n,3)}async renderSample(e=8){let n=new OfflineAudioContext(1,Math.floor(22050*e),22050),s=n.createGain();s.gain.value=.85,s.connect(n.destination);let r=n.createBiquadFilter();r.type="lowpass",r.frequency.value=3400,r.connect(s);let a=n.createWaveShaper();a.curve=this._distort(14);let l=n.createBiquadFilter();l.type="lowpass",l.frequency.value=2400,a.connect(l),l.connect(r);let c=n.createGain();c.gain.value=.2,c.connect(a);let o=22050*2,h=n.createBuffer(1,o,22050),d=h.getChannelData(0);for(let b=0;b<o;b++)d[b]=Math.random()*2-1;let u=(b,S,P,N,z,F,k=r)=>{let L=n.createOscillator();L.type=P,L.frequency.setValueAtTime(Math.max(20,N),b),L.frequency.exponentialRampToValueAtTime(Math.max(20,z),b+Math.max(.02,S));let U=n.createGain();U.gain.setValueAtTime(1e-4,b),U.gain.linearRampToValueAtTime(F,b+.006),U.gain.exponentialRampToValueAtTime(8e-4,b+S),L.connect(U),U.connect(k),L.start(b),L.stop(b+S+.03)},f=(b,S,P,N,z,F)=>{let k=n.createBufferSource();k.buffer=h;let L=n.createBiquadFilter();L.type=P,L.frequency.setValueAtTime(N,b),L.frequency.exponentialRampToValueAtTime(Math.max(40,z),b+S);let U=n.createGain();U.gain.setValueAtTime(F,b),U.gain.exponentialRampToValueAtTime(8e-4,b+S),k.connect(L),L.connect(U),U.connect(r),k.start(b),k.stop(b+S+.02)},p=e*.62,v=.05,g=0;for(;v<e-.05;){let b=v<p,S=60/(b?146:96)/4;this._riffStep(u,f,v,S,g++,b,!1,c),v+=S}let m=await n.startRendering(),M=m.getChannelData(0),A=M.length,_=new ArrayBuffer(44+A*2),E=new DataView(_),w=(b,S)=>{for(let P=0;P<S.length;P++)E.setUint8(b+P,S.charCodeAt(P))};w(0,"RIFF"),E.setUint32(4,36+A*2,!0),w(8,"WAVE"),w(12,"fmt "),E.setUint32(16,16,!0),E.setUint16(20,1,!0),E.setUint16(22,1,!0),E.setUint32(24,22050,!0),E.setUint32(28,22050*2,!0),E.setUint16(32,2,!0),E.setUint16(34,16,!0),w(36,"data"),E.setUint32(40,A*2,!0);for(let b=0;b<A;b++){let S=Math.max(-1,Math.min(1,M[b]));E.setInt16(44+b*2,S<0?S*32768:S*32767,!0)}let C="",x=new Uint8Array(_);for(let b=0;b<x.length;b++)C+=String.fromCharCode(x[b]);return btoa(C)}};var Fe=null,Xt=null,Fn=null;await d0();var zo=200,DM=4.5,LM=.38*zo,ko=.4,J0=.5,K0=20,j0=.5,NM=40,ee=i=>document.getElementById(i),Wn=new URLSearchParams(location.search),$t=Wn.has("touch")||matchMedia("(pointer:coarse)").matches&&"ontouchstart"in window||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);document.body.classList.toggle("touch",$t);var xe=new wh;try{xe.muted=localStorage.getItem("vwz_mute")==="1"}catch{}var is=ee("c"),Hn=new Jc({canvas:is,antialias:!$t,powerPreference:"high-performance",preserveDrawingBuffer:Wn.has("test")});Hn.toneMapping=qs;Hn.toneMappingExposure=1.05;Hn.outputColorSpace=Ut;Hn.shadowMap.type=Ws;var en=new Bs,UM=3812412;en.fog=new va(UM,.026);var Od=$t?76:72,zt=new pn(Od,1,.05,700);zt.rotation.order="YXZ";en.add(zt);var zi=Wn.get("quality")||(()=>{try{return localStorage.getItem("vwz_q")||"auto"}catch{return"auto"}})(),Gn=zi==="high"?2:zi==="medium"?1:zi==="low"||$t?0:2,Zr=c0($t?256:512),Vi=Ad(Wn.get("map")||(()=>{try{return localStorage.getItem("vwz_map")}catch{return null}})()),Vn=Rd(Cd(Wn.get("mode")||(()=>{try{return localStorage.getItem("vwz_mode")}catch{return null}})()),1),mt=T0(en,Zr,Gn,Vi.id),Rt=new Sh(en,Zr,Gn),ts=new Po(Zr,260,{R:20,y0:.3,y1:6,size:.07,alpha:.22});en.add(ts.points);var Ts=new Po(Zr,46,{R:55,y0:.4,y1:2.2,size:5.5,alpha:.045,col:[.55,.5,.62],additive:!1,speed:.7});en.add(Ts.points);var Wt=new fh(en,mt,Gn),As=w0({scene:en,world:mt,fx:Rt,zombies:Wt,sfx:xe,get P(){return R},onKill:i=>{Fe?.on||Xt?.onKill(i)},onSelf:i=>{R.dead||(R.hp-=i,R.lastHit=q.time,R.hp<=0&&Bh())}});window.__hd=L0(Wt);k0(Wt);Wt.cam=zt;var X0,FM=i=>(X0||(X0=V0(mt,Wt,R)))(i),Ih=new Bs,qr=new Eh(Hn,en,zt,Ih);{let i=new zr(Hn),e=new Bs,t=new he(mt.sky.geometry,mt.sky.material.clone());t.scale.setScalar(.12),e.add(t);let n=i.fromScene(e,0,.1,100);en.environment=n.texture,en.environmentIntensity=.45,Ih.environment=n.texture,Ih.environmentIntensity=.9,i.dispose()}var _i=new Va(14674687,40,55,.46,.75,1.25);_i.position.set(.16,-.1,-.1);_i.target.position.set(.16,-.1,-10);zt.add(_i,_i.target);_i.shadow.mapSize.set(1024,1024);_i.shadow.camera.near=.3;_i.shadow.camera.far=40;_i.shadow.bias=-6e-4;_i.shadow.normalBias=.03;var ws=new Pi(16758886,0,20,2);zt.add(ws);ws.position.set(.15,-.05,-3.2);var yi=new he(new Ji(3.4,14,28,1,!0),new vt({transparent:!0,depthWrite:!1,blending:Qt,side:cn,uniforms:{c:{value:new fe(.75,.85,1)},k:{value:.05}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(vy,1.2)*pow(f,2.)*k); }"}));yi.geometry.translate(0,-7,0);yi.geometry.rotateX(-Math.PI/2);yi.position.set(.16,-.1,-.2);yi.userData.noAO=!0;yi.renderOrder=6;zt.add(yi);var Rs=new He;Rs.matrixAutoUpdate=!1;Ih.add(Rs);var BM=new Vs(12175615,4864556,1.5),zd=new Gs(16773341,2.2),Nh=new Pi(16758886,0,3,2);zd.position.set(1.5,2,1);Rs.add(BM,zd,zd.target,Nh);Nh.position.set(.15,-.05,-.9);var Fo={},Hi=new Zn(new zn({map:Zr.glow,color:new fe(6,4,1.6),blending:Qt,depthWrite:!1,transparent:!0,fog:!1}));Hi.scale.setScalar(.3);Hi.visible=!1;Hi.userData.noAO=!0;function OM(i){i.querySelectorAll("[data-w]").forEach(e=>{e.style.width=e.dataset.w+"%"})}function zM(i){if(!Fo[i]){let e=Mo(i);e.visible=!1,Rs.add(e),Fo[i]=e}return Fo[i]}var R={x:0,z:12,yaw:0,pitch:0,vx:0,vz:0,hp:zo,maxHp:zo,lastHit:-99,pts:500,kills:0,heads:0,bob:0,rP:0,rY:0,shake:0,dmg:0,flashlight:!0,slots:[],cur:0,fireCd:0,reloadT:0,reloadTot:0,switchT:0,kick:0,mv:0,sprint:!1,heat:0,dead:!1,deadT:0,sx:0,sy:0,nades:1},q={state:"menu",time:0,runTime:0,round:0,toSpawn:0,spawnT:0,interT:0,phase:"wait",drops:0,lastDrop:-99,kills:0,double:0,powers:[],ups:[],repairT:0,healBeat:0,lastMed:-99,orbit:0,menuSpawn:0,flashT:0,muzzleT:0,nadeCd:0},at={f:0,s:0,l:0,r:0,fire:!1,reload:!1,interact:!1,interactEdge:!1,sprint:!1},Dh=i=>({id:i,mag:Ot[i].mag,reserve:Ot[i].reserve}),Cs=()=>R.slots[R.cur];function Uh(i){Gn=i;let e=window.devicePixelRatio||1,t=i===2?Math.min(e,1.75):i===1?Math.min(e,1.25):Gt(e*.7,.6,1);Hn.setPixelRatio(t),qr.pr=t,Hn.shadowMap.enabled=i>0,Hn.shadowMap.needsUpdate=!0,qr.build(["direct","bloom","full"][i]),Vo(),mt.setTier(i),Wt.setTier(i),Wt.max=Vi.cap[i>0?1:0],Rt.tier=i,ts.points.visible=i>0,Ts.points.visible=!0,Ts.o.alpha=i===0?.03:.045,yi.visible=i>0&&R.flashlight,en.environmentIntensity=i===0?.45:.3,_i.castShadow=i===2;for(let n of Wt.list)n.root.traverse(s=>{s.isMesh&&(s.castShadow=i>0)});en.traverse(n=>{n.material&&!Array.isArray(n.material)&&(n.material.needsUpdate=!0)}),document.body.classList.toggle("lowq",i===0),xe.setMusicDetail?.(i===0||$t),Hn.toneMappingExposure=i===0?1.15:1.05,ee("fx-damage").style.display=i===0?"":"none"}function Vo(){let i=window.innerWidth,e=window.innerHeight;Hn.setSize(i,e,!1),is.style.width=i+"px",is.style.height=e+"px",zt.aspect=i/e,zt.fov=i/e<.9?Od+14:Od,zt.updateProjectionMatrix(),qr.setSize(i,e,Hn.getPixelRatio()),Rt.setScale(e*Hn.getPixelRatio(),zt.fov),Ts.ps.uniforms.uScale.value=Rt.soft.uniforms.uScale.value,ts.ps.uniforms.uScale.value=Rt.soft.uniforms.uScale.value}window.addEventListener("resize",Vo);window.visualViewport?.addEventListener("resize",Vo);screen.orientation?.addEventListener?.("change",()=>setTimeout(Vo,120));var Bo=document.documentElement,kM=!!(Bo.requestFullscreen||Bo.webkitRequestFullscreen);document.body.classList.toggle("nofs",!kM);async function Q0(){try{!document.fullscreenElement&&!document.webkitFullscreenElement&&await(Bo.requestFullscreen?Bo.requestFullscreen({navigationUI:"hide"}):Bo.webkitRequestFullscreen?.())?.catch?.(()=>{})}catch{}try{await screen.orientation?.lock?.("landscape")}catch{}setTimeout(Vo,150)}["btnFull","btnFull2"].forEach(i=>{let e=document.getElementById(i);e&&e.addEventListener("click",t=>{t.stopPropagation(),Q0()})});var Lo=0,Ch=0,Ph=3;function HM(i){if(!(q.state!=="playing"||zi!=="auto"||Wn.has("noadapt"))){if(Ph>0){Ph-=i;return}if(Lo+=i,Ch++,Lo>=2.5){let e=Ch/Lo;Lo=0,Ch=0,e<28&&Gn>0&&(Uh(Gn-1),Ph=3,rn("Graphics lowered for smoother play"))}}}var Mt={hp:-1,pts:-1,mag:-1,res:-1,name:"",prompt:"",round:-1,alt:"",lobby:!1},kd=0;function rn(i){let e=ee("toast");e.textContent=i,e.classList.add("on"),clearTimeout(kd),kd=setTimeout(()=>e.classList.remove("on"),2600)}function ki(i,e=""){let t=ee("banner");t.innerHTML=i+(e?`<small>${e}</small>`:""),t.classList.remove("on"),t.offsetWidth,t.classList.add("on")}function Yr(i,e,t){let n=document.createElement("span");n.textContent=i,e==="heal"?n.className="g":e&&(n.className="h"),n.style.setProperty("--x",J(-80,80)+"px"),n.style.top=J(10,50)+"px",ee("pop").appendChild(n),setTimeout(()=>n.remove(),950)}function VM(){let i=Math.max(0,Math.round(R.hp));i!==Mt.hp&&(Mt.hp=i,ee("hpFill").style.width=100*i/R.maxHp+"%",ee("hpFill").classList.toggle("low",i<R.maxHp*ko),ee("hpNum").textContent=i);let e=Vd();if(e!==Mt.med&&(Mt.med=e,ee("medCue").classList.toggle("on",e)),R.pts!==Mt.pts){if(Mt.pts>=0&&R.pts>Mt.pts){let d=ee("pts");d.classList.remove("bump"),d.offsetWidth,d.classList.add("bump")}Mt.pts=R.pts,ee("pts").textContent=R.pts.toLocaleString()}let t=Cs(),n=Ot[t.id];n.name!==Mt.name&&(Mt.name=n.name,ee("wName").textContent=n.name),t.mag!==Mt.mag&&(Mt.mag=t.mag,ee("ammoMag").textContent=t.mag,ee("ammoMag").classList.toggle("empty",t.mag===0)),t.reserve!==Mt.res&&(Mt.res=t.reserve,ee("ammoRes").textContent="/ "+t.reserve);let s=R.slots[1-R.cur],r=s?Ot[s.id].name+"  "+s.mag+"/"+s.reserve:"";r!==Mt.alt&&(Mt.alt=r,ee("wAlt").textContent=r);let a=!!(Fe?.on&&q.mpPhase==="lobby");if(a!==Mt.lobby&&(Mt.lobby=a,ee("roundBox").classList.toggle("waiting",a),ee("roundBox").querySelector(".lbl").textContent=a?"":"ROUND",a?ee("roundNum").textContent="WAITING":Mt.round=-1),!a&&q.round!==Mt.round){Mt.round=q.round;let d=ee("roundNum");d.textContent=q.round||1,d.classList.remove("pulse"),d.offsetWidth,d.classList.add("pulse")}if((R.nades||0)!==Mt.nades){Mt.nades=R.nades||0;let d=ee("nadeCnt");d&&(d.textContent="BAIT "+Mt.nades)}let l=ee("reloadBar");R.reloadT>0?(l.classList.add("on"),l.firstElementChild.style.width=100*(1-R.reloadT/R.reloadTot)+"%"):l.classList.remove("on");let c=Gt(R.dmg,0,1);ee("fx-damage").style.opacity=Gn===0?Math.min(1,c+(R.hp<R.maxHp*ko?.25:0)):0;let o=ee("powers"),h="";q.double>0&&(h+=`<div class="pw pw2x glass${q.double<5?" blink":""}">2\xD7 CASH <b>${Math.ceil(q.double)}</b></div>`),o._h!==h&&(o._h=h,o.innerHTML=h)}function ns(i,e=!0){let t=ee("prompt");i!==Mt.prompt&&(Mt.prompt=i,t.innerHTML=i,OM(t),t.classList.toggle("on",!!i))}function $r(){for(let e in Fo)Fo[e].visible=!1;let i=zM(Cs().id);i.visible=q.state==="playing"||R.dead,i.scale.setScalar($t?.78:.9),i.add(Hi),Hi.position.copy(i.userData.muzzle.position).add(new D(0,0,-.04)),R.gun=i}function Xr(i){i===R.cur||!R.slots[i]||R.switchT>0||(R.cur=i,R.reloadT=0,R.switchT=.32,$r(),xe.click(0,2500,.3))}function Ho(i){let e=R.slots.findIndex(t=>t&&t.id===i);if(e>=0){let t=R.slots[e];t.mag=Ot[i].mag,t.reserve=Ot[i].reserve;return}R.slots[1]?R.slots[R.cur]=Dh(i):(R.slots[1]=Dh(i),R.cur=1),R.reloadT=0,R.switchT=.4,$r()}function Lh(){if(Fe?.on&&q.mpPhase==="lobby")return;let i=Cs(),e=Ot[i.id];R.reloadT>0||R.switchT>0||i.mag>=e.mag||i.reserve<=0||(R.reloadTot=R.reloadT=e.perShell?e.reload*(e.mag-i.mag)+.4:e.reload,R.shellT=e.reload,Fe?.on&&Fe.send({t:"reload",w:i.id}),xe.reload(e.perShell?"pistol":i.id))}function GM(){let i=Cs(),e=Ot[i.id];if(Fe?.on){R.reloadT=0,e.perShell&&xe.pump();return}let t=Math.min(e.mag-i.mag,i.reserve);i.mag+=t,i.reserve-=t,R.reloadT=0,e.perShell&&xe.pump()}var Th=new D,Io=new D,Do=new D,Ah=new D,Rh=new D,q0=new D,Fd=new D;function WM(i){let e=R.yaw+R.rY,t=R.pitch+R.rP;return i.set(-Math.sin(e)*Math.cos(t),Math.sin(t),-Math.cos(e)*Math.cos(t))}function Hd(){return 1.7-(R.dead?Math.min(1.1,R.deadT*1.6):0)+Math.sin(R.bob*2)*.035*R.mv}function em(){if(Fe?.on&&q.mpPhase==="lobby")return;let i=Cs(),e=Ot[i.id];if(i.mag<=0){xe.empty(),R.fireCd=.25,Lh();return}i.mag--,R.fireCd=60/e.rpm,R.kick=Math.min(1.6,R.kick+1),R.heat=Math.min(1,R.heat+.12),xe.shot(e.snd),WM(Io),Th.set(R.x,Hd(),R.z),Do.set(Math.cos(R.yaw),0,-Math.sin(R.yaw)),Ah.crossVectors(Do,Io).normalize(),Do.crossVectors(Io,Ah).normalize();let t=e.spread*(1+R.mv*.9+R.heat*.8),n=Io.clone();zt.updateMatrixWorld(!0);let s=R.gun.userData.muzzle;if(e.akimbo&&R.gun.userData.muzzles){i.side=i.side?0:1,s=R.gun.userData.muzzles[i.side],R.gun.userData.slideSide=i.side;let c=s.parent;R.gun.userData.flash&&c&&R.gun.userData.flash.position.set(c.position.x+s.position.x,c.position.y+s.position.y,c.position.z+s.position.z)}s.getWorldPosition(Rh),R.gun.userData.eject.getWorldPosition(q0);let r=new Map,a=0,l=[];for(let c=0;c<e.pellets;c++){let o=J(Zt),h=Math.sqrt(Math.random())*t,d=Io.clone().copy(n).addScaledVector(Do,Math.cos(o)*h).addScaledVector(Ah,Math.sin(o)*h).normalize();l.push([+d.x.toFixed(4),+d.y.toFixed(4),+d.z.toFixed(4)]);let u=Wt.rayHit(Th,d,e.range),f=mt.ray(Th,d,e.range),p=e.range,v=null,g=null;u&&(!f||u.t<f.t)?(p=u.t,g=u):f&&(p=f.t,v=f.n);let m=new D().copy(d).multiplyScalar(p).add(Th);if((c<(e.pellets>1?3:1)||Rt.tier>0)&&Rt.tracer(Rh,m,e.pellets>1?.006:.011),g){let M=r.get(g.z)||{dmg:0,head:!1,p:m,n:d.clone().negate()},A=e.pellets>1?Gt(1.25-g.t/16,.25,1):1;M.dmg+=e.dmg*(g.head?e.head:1)*A,M.head=M.head||g.head,M.p=m,r.set(g.z,M)}else v&&a<4&&(a++,Fd.set(v.x,v.y,v.z),Rt.sparks(m,Fd,7),Rt.dust(m,Fd,2))}ws.intensity=55,Nh.intensity=6,q.muzzleT=.06,Hi.visible=!0;{let c=R.gun.userData.flash;c&&(c.visible=!0,c.rotation.z=J(Zt),c.scale.setScalar(J(.8,1.3)*(e.id==="shotgun"?1.5:1))),R.gun.userData.slideT=1}if(Hi.material.rotation=J(Zt),Hi.scale.setScalar(J(.25,.42)*(e.id==="shotgun"?1.4:1)),Rt.flash(Rh,n),Rt.smoke(Rh,n,1),Rt.maxCas){let c=new D().copy(Do).multiplyScalar(J(1.2,2.4)).addScaledVector(Ah,J(1.2,2.2)).addScaledVector(n,J(-.3,.5));Rt.casing(q0,c)}if(R.rP+=e.kick*J(.85,1.15),R.rY+=J(-1,1)*e.kick*.45,R.shake=Math.min(1,R.shake+e.shake*.5),e.perShell===!0&&i.mag>0&&setTimeout(()=>xe.pump(),260),Fe?.on){Fe.send({t:"shot",w:i.id,dirs:l});for(let[c,o]of r)Rt.blood(o.p,o.n,o.head?14:8),xe.zhit(Oo(c.pos),o.head)}else for(let[c,o]of r){let h=Wt.damage(c,o.dmg,o.head,o.p,o.n);if(!h)continue;let d=q.double>0?2:1;xe.zhit(Oo(c.pos),o.head),Rt.blood(o.p,o.n,o.head?14:8),Rt.sparks(o.p,o.n,2);let u=10*d,f=ee("hitm");f.classList.remove("on","kill"),f.offsetWidth,f.classList.add("on"),xe.tick(!1),h.killed&&(u=(o.head?100:c.value)*d,R.kills++,q.kills++,o.head&&R.heads++,f.classList.add("kill"),xe.tick(!0),xe.zdie(Oo(c.pos),.5),Rt.blood(o.p,o.n,26,1.4),Rt.dust(new D(c.pos.x,.3,c.pos.z),{x:0,y:1,z:0},5),R.shake=Math.min(1,R.shake+.1),XM(c),tm(c),Xt.onKill(c)),setTimeout(()=>f.classList.remove("on"),h.killed?280:190),R.pts+=u,Yr("+"+u,o.head&&h.killed)}i.mag===0&&!R.reloadT&&setTimeout(()=>q.state==="playing"&&Lh(),220)}var Oo=i=>{let e=i.x-R.x,t=i.z-R.z,n=Math.hypot(e,t)||1;return(e*Math.cos(R.yaw)-t*Math.sin(R.yaw))/n};function XM(i){q.round<2||q.drops>=Vn.maxDrops||q.time-q.lastDrop<18||Math.random()<.05*Vn.drop&&Go(mn(["ammo","double","nuke"]),i.pos.x,i.pos.z)}var vi={ammo:{name:"FULL MAGS",col:[.3,.7,2.4],sub:"All ammo refilled",hex:"#6bb8ff"},double:{name:"2\xD7 CASH",col:[3,2.2,.4],sub:"Double points for 30s",hex:"#ffd36b"},nuke:{name:"KABOOM",col:[3,.4,.4],sub:"Every zombie goes down",hex:"#ff6b6b"},health:{name:"MED KIT",col:[.25,2.6,.9],sub:"+50% health",hex:"#4dffb0"}};function Go(i,e,t){let n=vi[i].col,s=new He;s.position.set(e,1,t);let r=i==="health",a;if(r){let u=new lt({color:new fe(...n),toneMapped:!1});a=new He,a.add(new he(new it(.46,.14,.14),u),new he(new it(.14,.46,.14),u),new he(new it(.14,.14,.46),u)),a.traverse(f=>f.userData.noAO=!0)}else a=new he(new Oa(.28,0),new lt({color:new fe(...n),toneMapped:!1}));a.userData.noAO=!0;let l=document.createElement("canvas");l.width=256,l.height=64;let c=l.getContext("2d");c.font="900 40px system-ui, sans-serif",c.textAlign="center",c.fillStyle=vi[i].hex,c.shadowColor=vi[i].hex,c.shadowBlur=14,c.fillText(vi[i].name,128,44);let o=new Zn(new zn({map:new an(l),transparent:!0,depthWrite:!1,fog:!1}));o.scale.set(1.5,.375,1),o.position.y=.6,o.userData.noAO=!0;let h=new Zn(new zn({map:Zr.glow,color:new fe(n[0]*.55,n[1]*.55,n[2]*.55),blending:Qt,depthWrite:!1,transparent:!0}));h.scale.setScalar(1.25),h.userData.noAO=!0;let d=new he(new At(.12,.12,12,8,1,!0),new lt({color:new fe(n[0]*.3,n[1]*.3,n[2]*.3),transparent:!0,opacity:.35,blending:Qt,depthWrite:!1}));d.position.y=5,d.userData.noAO=!0,s.add(a,o,h,d),en.add(s),q.ups.push({type:i,g:s,core:a,label:o,t:r?NM:28,x:e,z:t}),r?q.lastMed=q.time:(q.drops++,q.lastDrop=q.time),xe.spawnPower()}function Vd(){return q.state==="playing"&&!R.dead&&R.hp<=R.maxHp*J0&&q.time-q.lastMed>=K0&&!q.ups.some(i=>i.type==="health")}function tm(i){Vd()&&Go("health",i.pos.x,i.pos.z)}function nm(i){if(i.type==="health"){let t=R.maxHp*j0,n=R.hp;R.hp=Math.min(R.maxHp,R.hp+t),R.lastHit=Math.max(R.lastHit,q.time-1),xe.medkit(),ki(vi.health.name,"+"+Math.round(R.hp-n)+" health"),Yr("+"+Math.round(R.hp-n)+" HP","heal"),en.remove(i.g),Rt.glowBurst(new D(i.x,1,i.z),...vi.health.col.map(s=>s*.7),24,4);return}xe.power(i.type);let e=0;if(ki(vi[i.type].name,vi[i.type].sub),i.type==="ammo")for(let t of R.slots)t&&(t.mag=Ot[t.id].mag,t.reserve=Ot[t.id].reserve);else if(i.type==="double")q.double=30;else if(i.type==="nuke"){let t=Wt.killAll();for(let n of t)Fe?.on||Xt.onKill(n),Rt.blood(new D(n.pos.x,1.2,n.pos.z),{x:0,y:1,z:0},22,1.4),Rt.glowBurst(new D(n.pos.x,1.2,n.pos.z),3,1.5,.4,10,5);R.pts+=400*(q.double>0?2:1),xe.boom(),R.shake=1,ee("fx-flash").style.transition="none",ee("fx-flash").style.opacity=.85,requestAnimationFrame(()=>{ee("fx-flash").style.transition="opacity 1.2s",ee("fx-flash").style.opacity=0}),q.kills+=t.length,R.kills+=t.length}en.remove(i.g),Rt.glowBurst(new D(i.x,1,i.z),...vi[i.type].col.map(t=>t*.7),24,4)}Xt=E0({world:mt,P:R,G:q,sfx:xe,banner:ki,toast:rn,popText:Yr,spawnPower:Go,weapons:Ot});var Ks={};function qM(i){if(!Ks[i]){let e=Mo(i,!1);e.scale.setScalar(1.6),e.rotation.y=0,e.visible=!1,mt.crate.hold.add(e),Ks[i]=e}return Ks[i]}function YM(){let i=mt.crate;if(i.state==="idle"){if(R.pts<i.price){xe.deny(),rn("Not enough points");return}R.pts-=i.price,xe.cash(),xe.open(),xe.jingle(4),i.state="roll",i.t=0,i.pick=mn(yo.filter(e=>!R.slots.some(t=>t&&t.id===e)).concat(["smg"].filter(()=>!1))),i.pick=i.pick||mn(yo)}else i.state==="ready"&&(Ho(i.weapon),xe.cash(),xe.click(0,2e3,.5),ki(Ot[i.weapon].name.toUpperCase()),Fh())}function Fh(){let i=mt.crate;i.state="idle",i.t=0;for(let e in Ks)Ks[e].visible=!1;i.model=null}function ZM(i){let e=mt.crate,t=e.state==="idle"?0:-1.25;if(e.lid.rotation.x+=(t-e.lid.rotation.x)*Math.min(1,i*6),e.state==="roll"){e.t+=i;let n=Math.floor(e.t/.14)%yo.length,s=e.t>3.6?e.pick:yo[n];for(let a in Ks)Ks[a].visible=!1;let r=qM(s);r.visible=!0,e.model=r,e.t>3.6&&(e.state="ready",e.weapon=e.pick,e.t=0,xe.power("ammo"))}else e.state==="ready"&&(e.t+=i,e.t>9&&(xe.open(),Fh(),rn("The toolbox slammed shut")))}function $M(i){return Math.max(3,Math.round((6+i*2.3+i*i*.12)*Vn.count))}function Y0(i){q.round=i,q.toSpawn=$M(i),q.brutes=i>=5?i%5===0?Math.min(4,1+(i/5|0)):i>=7?1:0:0,q.brutes=Math.round(q.brutes*Vn.brute),q.phase="round",q.spawnT=1.5,q.drops=0,(R.nades||0)<1&&(R.nades=1);let e=xe.lineFor("wave","",i);xe.round(i),xe.setMusicPhase("hot"),ki("ROUND "+i,e),Fe?.on||xe.announce(e);let t=ee("roundNum");t.classList.remove("pulse"),t.offsetWidth,t.classList.add("pulse")}function JM(){let i=ch(mt.doors);return mt.windows.filter(e=>i.has(e.area))}function KM(i){if(q.phase!=="round"||q.toSpawn<=0||(q.spawnT-=i,q.spawnT>0))return;if(Wt.alive>=Wt.max){q.spawnT=.3;return}let e=JM();e.sort((r,a)=>(r.c.x-R.x)**2+(r.c.z-R.z)**2-((a.c.x-R.x)**2+(a.c.z-R.z)**2));let t=Math.random()<.6?e[Math.min(e.length-1,Math.random()*2|0)]:mn(e),n=q.brutes>0&&q.toSpawn<=q.brutes,s=Wt.spawn(t,q.round,n);s&&(q.toSpawn--,s.hp=s.maxHp=s.maxHp*Vn.hp,s.speed=Math.min(6.5,s.speed*Vn.speed),s.dmg=Math.round(s.dmg*Vn.dmg)),q.spawnT=Math.max(.3,2-q.round*.13)*J(.7,1.2)*Vn.spawnGap}function im(){let i=null,e=(s,r,a)=>{r<a&&(!i||r<i.d)&&(i={...s,d:r})};for(let s of mt.windows)s.count<6&&e({type:"win",w:s},Math.hypot(R.x-s.in.x,R.z-s.in.z),2.1);for(let s of mt.buys)e({type:"buy",b:s},Math.hypot(R.x-s.pos.x,R.z-s.pos.z),1.9);for(let s of mt.doors)if(!s.open){let r=s.stand?Object.values(s.stand):[s.pos];for(let a of r)e({type:"door",door:s},Math.hypot(R.x-a.x,R.z-a.z),2.4)}let t=Xt&&Xt.focus(R.x,R.z);t&&e(t,t.d,t.d+.01);let n=mt.crate;return(n.state==="idle"||n.state==="ready")&&e({type:"crate"},Math.hypot(R.x-n.x,R.z-n.z),2.2),i}function sm(i,e,t){if(Fe?.on)return ob(i,e,t);if(i.type==="win"){e&&(q.repairT+=t,q.repairT>.5&&(q.repairT=0,mt.addPlank(i.w)&&(xe.repair(),R.pts+=10*(q.double>0?2:1),Yr("+10"))));return}if(i.type==="job"&&i.hold){e&&(q.repairT+=t,q.repairT>.5&&(q.repairT=0,Xt.use()));return}if(at.interactEdge)if(i.type==="buy"){if(i.b.id==="nade"){if((R.nades||0)>=2){rn("Bait pouch is full");return}if(R.pts<i.b.price){xe.deny(),rn("Not enough points");return}R.pts-=i.b.price,R.nades++,xe.cash();return}let n=R.slots.find(r=>r&&r.id===i.b.id),s=n?Math.floor(i.b.price/2):i.b.price;if(n&&n.mag===Ot[n.id].mag&&n.reserve===Ot[n.id].reserve){rn("Ammo already full");return}if(R.pts<s){xe.deny(),rn("Not enough points");return}R.pts-=s,xe.cash(),Ho(i.b.id)}else if(i.type==="door"){let n=i.door,s=Xt.price(n);if(R.pts<s){xe.deny(),rn("Not enough points");return}R.pts-=s,xe.cash(),xe.door(),n.open=!0,ki(n.id==="AB"?"GATE OPEN":n.name.toUpperCase(),n.blurb)}else i.type==="job"?Xt.use():i.type==="crate"&&YM()}function jM(i){if(!i)return ns("");let e="<kbd>E</kbd>",t=n=>`<span class="cost${R.pts<n?" poor":""}">${n}</span>`;if(i.type==="win")ns(`${e}Hold to repair barricade<span class="prog"><i data-w="${Math.round(i.w.count/6*100)}"></i></span>`);else if(i.type==="buy"){let n=R.slots.find(s=>s&&s.id===i.b.id);ns(n?`${e}Refill ${i.b.name}${t(Math.floor(i.b.price/2))}`:`${e}Buy ${i.b.name}${t(i.b.price)}`)}else if(i.type==="door"){let n=Xt.price(i.door);ns(`${e}${i.door.id==="AB"?"Open the gate":"Open "+i.door.name}${t(n)}`)}else i.type==="job"?ns(`${e}${i.hold?"Hold to board the window":i.name}`):i.type==="crate"&&ns(mt.crate.state==="ready"?`${e}Take ${Ot[mt.crate.weapon].name}`:`${e}Lucky Toolbox${t(mt.crate.price)}`)}function QM(i){let e=at.f,t=at.s,n=0,s=0;if(e||t){let o=Math.sin(R.yaw),h=Math.cos(R.yaw);n=-o*e+h*t,s=-h*e-o*t;let d=Math.hypot(n,s)||1;n/=d,s/=d}let r=Math.min(1,Math.hypot(e,t));R.sprint=(at.sprint||r>.92&&$t)&&e>.3&&R.reloadT<=0;let a=(R.sprint?6.6:4.5)*(R.switchT>0?.9:1)*r,l=Math.min(1,i*10);R.vx+=(n*a-R.vx)*l,R.vz+=(s*a-R.vz)*l,R.x+=R.vx*i,R.z+=R.vz*i,mt.resolve(R,.42);let c=Math.hypot(R.vx,R.vz);R.mv=Gt(c/4.5,0,1.4),R.bob+=c*i*1.7}function eb(i){R.fireCd>0&&(R.fireCd-=i),R.switchT>0&&(R.switchT-=i),R.heat=Math.max(0,R.heat-i*1.4),R.kick=Math.max(0,R.kick-i*8);let e=Cs(),t=Ot[e.id];if(R.reloadT>0){let n=R.reloadT;R.reloadT-=i,t.perShell?(R.shellT-=i,!Fe?.on&&R.shellT<=0&&e.mag<t.mag&&e.reserve>0?(e.mag++,e.reserve--,R.shellT=t.reload,xe.shell()):Fe?.on&&R.shellT<=0&&(R.shellT=t.reload,xe.shell()),at.fire&&e.mag>0?R.reloadT=0:(e.mag>=t.mag||e.reserve<=0)&&(R.reloadT=0,xe.pump())):R.reloadT<=0&&GM()}at.fire&&R.fireCd<=0&&R.switchT<=0&&(R.reloadT<=0||t.perShell)&&!R.sprintBlock&&((t.auto||!R.fired)&&em(),R.fired=!0),at.fire||(R.fired=!1),at.reload&&(at.reload=!1,Lh())}function Z0(i,e){R.rP*=Math.exp(-i*9),R.rY*=Math.exp(-i*9),R.shake=Math.max(0,R.shake-i*2.2),R.dmg=Math.max(0,R.dmg-i*.8);let t=R.shake*R.shake,n=(Math.sin(e*61)+Math.sin(e*37.3))*.5,s=(Math.sin(e*53.1)+Math.cos(e*41))*.5,r=R.dead?Math.min(1,R.deadT*1.4):0,a=Gt(R.vx*Math.cos(R.yaw)-R.vz*Math.sin(R.yaw),-6,6);zt.position.set(R.x+n*t*.06,Hd()+s*t*.05,R.z),zt.rotation.set(Gt(R.pitch+R.rP+s*t*.035-r*.4,-1.5,1.5),R.yaw+R.rY+n*t*.035,-a*.0045+n*t*.02+r*.9),zt.updateMatrixWorld(!0),Rs.matrix.copy(zt.matrixWorld);let l=R.gun;if(!l)return;let c=l.userData.base,o=R.kick,h=o*.05,d=0,u=0,f=0,p=0,v=o*.04;if(f+=Math.cos(R.bob)*.006*R.mv,p+=Math.abs(Math.sin(R.bob))*.008*R.mv*-1,f+=-Gt(R.sx,-1,1)*.02,p+=Gt(R.sy,-1,1)*.02,R.sprint&&(d+=.45,h-=.25,p-=.05,f-=.03),R.reloadT>0&&!Ot[Cs().id].perShell){let A=1-R.reloadT/R.reloadTot,_=Math.sin(A*Math.PI);h-=_*.5,p-=_*.12,u+=_*.35,f-=_*.04}else if(R.reloadT>0){let A=Math.abs(Math.sin(e*6))*.5+.3;h-=.25,p-=.05,d+=.1*A}if(R.switchT>0){let A=R.switchT/.32;p-=Math.sin(Gt(A,0,1)*Math.PI/2)*.35,h-=A*.5}let g=1-Math.exp(-i*18);if(l.userData.rx=Fi(l.userData.rx||0,h,g),l.userData.ry=Fi(l.userData.ry||0,d,g),l.userData.rz=Fi(l.userData.rz||0,u,g),l.rotation.set(l.userData.rx,l.userData.ry,l.userData.rz),l.userData.slideT>0){l.userData.slideT=Math.max(0,l.userData.slideT-i*14);let A=Math.sin(l.userData.slideT*Math.PI);if(l.userData.slides){let _=l.userData.slideSide||0;l.userData.slides[_]&&(l.userData.slides[_].position.z=A*.028)}else l.userData.slide&&(l.userData.slide.position.z=A*.028);l.userData.pump&&(l.userData.pump.position.z=0)}l.position.set(c.x+f,c.y+p,c.z+v),R.sx*=Math.exp(-i*8),R.sy*=Math.exp(-i*8),q.muzzleT>0&&(q.muzzleT-=i,q.muzzleT<=0&&(Hi.visible=!1,R.gun?.userData.flash&&(R.gun.userData.flash.visible=!1))),ws.intensity*=Math.exp(-i*40),ws.intensity<.5&&(ws.intensity=0),Nh.intensity=ws.intensity>0?ws.intensity/9:0;let m=ee("cross"),M=6+Ot[Cs().id].spread*650*(1+R.mv*.9+R.heat*.8)*.5;m._sp!==Math.round(M)&&(m._sp=Math.round(M),m.style.setProperty("--s",m._sp+"px"),m.children[0].style.left=-(m._sp+9)+"px",m.children[0].style.top="-1px",m.children[1].style.left=m._sp+"px",m.children[1].style.top="-1px",m.children[2].style.top=-(m._sp+9)+"px",m.children[2].style.left="-1px",m.children[3].style.top=m._sp+"px",m.children[3].style.left="-1px")}function tb(i){if(R.dead||q.state!=="playing")return;R.hp-=i.dmg,R.lastHit=q.time,R.dmg=Math.max(R.dmg,.65+.35*(1-Math.max(0,R.hp)/R.maxHp)),R.shake=1,xe.hurt();let e=i.pos.x-R.x,t=i.pos.z-R.z,n=Math.atan2(e,-t)- -R.yaw,s=ee("fx-dir");s.style.display="block",s.firstElementChild.style.transform=`rotate(${n*180/Math.PI}deg)`,s.style.opacity=1,setTimeout(()=>s.style.opacity=0,500),setTimeout(()=>s.style.display="none",900),R.hp<=0&&Bh()}function Bh(){R.hp=0,R.dead=!0,R.deadT=0,!Fe?.on&&Xt&&Xt.drop(),xe.over(),at.fire=!1,ee("hud").classList.add("hud-dead"),ns(""),document.pointerLockElement&&document.exitPointerLock?.()}function Gd(){try{return JSON.parse(localStorage.getItem("vwz_scores")||"[]")}catch{return[]}}function nb(i){let e=Gd();e.push(i),e.sort((t,n)=>n.round-t.round||n.pts-t.pts);try{localStorage.setItem("vwz_scores",JSON.stringify(e.slice(0,5)))}catch{}return e.slice(0,5)}var No=null;function Wd(){Ui.top().then(i=>{Ui.render(ee("globalList"),i,localStorage.getItem("vwfest_nick")),Ui.render(ee("oGlobal"),i,localStorage.getItem("vwfest_nick"))})}function ib(){No={round:Math.max(1,q.round),pts:R.pts,kills:R.kills},ee("nick").value=localStorage.getItem("vwfest_nick")||"",ee("postMsg").textContent="",ee("postMsg").className="postMsg",ee("fPost").classList.toggle("hidden",!Ui.hasToken()),ee("bPost").disabled=!1,Ui.hasToken()||(ee("postMsg").textContent="Leaderboard offline: score saved on this device."),Wd()}ee("fPost").onsubmit=i=>{if(i.preventDefault(),!No)return;let e=ee("nick").value.trim();ee("bPost").disabled=!0;try{localStorage.setItem("vwfest_nick",e)}catch{}Ui.submit(e,No.round,No.pts,No.kills).then(t=>{t.ok?(ee("fPost").classList.add("hidden"),ee("postMsg").className="postMsg ok",ee("postMsg").textContent="Posted! You are #"+t.rank+" on the survivor board.",Ui.render(ee("oGlobal"),t.top,e),Ui.render(ee("globalList"),t.top,e)):(ee("postMsg").textContent=t.error||"Could not post.",ee("bPost").disabled=!1)})};function Xd(i,e){i.innerHTML=e.length?e.map((t,n)=>`<li>Round <b>${t.round}</b> \xB7 ${t.kills} kills \xB7 ${t.pts.toLocaleString()} pts</li>`).join(""):'<li class="muted">No runs yet \u2014 be the first.</li>'}function sb(){Object.assign(R,{x:Vi.spawn.x,z:Vi.spawn.z,yaw:0,pitch:0,vx:0,vz:0,hp:zo,lastHit:-99,pts:Vn.startPts,kills:0,heads:0,rP:0,rY:0,shake:0,dmg:0,cur:0,fireCd:0,reloadT:0,switchT:0,kick:0,dead:!1,deadT:0,slots:[Dh("pistol"),null],nades:1}),Object.assign(q,{time:0,runTime:0,round:0,toSpawn:0,phase:"wait",interT:2.6,drops:0,double:0,kills:0,repairT:0,lastMed:-99}),Wt.reset(),Rt.reset();for(let i of q.ups)en.remove(i.g);q.ups=[],Fh(),mt.crate.lid.rotation.x=0;for(let i of mt.windows)for(;i.count<6;)mt.addPlank(i);Mt.hp=Mt.pts=Mt.mag=Mt.res=-1,Mt.name=Mt.alt="",Mt.round=-1,ee("hud").classList.remove("hud-dead"),mt.resetDoors(),Xt&&Xt.reset(),As&&As.reset(),$r()}function Jr(){if(xe.init(),xe.musicStart(),xe.setMusicDetail(Gn===0||$t),sb(),Ui.start(),q.state="playing",$r(),["menu","over","pause"].forEach(i=>ee(i).classList.add("hidden")),ee("hud").classList.remove("hidden"),ee("touch").classList.toggle("hidden",!$t),yi.visible=Gn>0&&R.flashlight,Ph=3,Lo=0,Ch=0,!$t&&!Wn.has("test")&&q.mpPhase!=="lobby")try{is.requestPointerLock?.()?.catch?.(()=>{})}catch{}else $t&&q.mpPhase!=="lobby"&&Q0();rn("Hold E at windows to repair \xB7 Open the gate for new guns")}function Wo(){q.state!=="playing"||R.dead||(q.state="paused",ee("pause").classList.remove("hidden"),at.fire=!1,at.f=at.s=0,document.pointerLockElement&&document.exitPointerLock?.(),ns(""))}function qd(){if(q.state==="paused"&&(q.state="playing",ee("pause").classList.add("hidden"),xe.init(),!$t&&!Wn.has("test")))try{is.requestPointerLock?.()?.catch?.(()=>{})}catch{}}function Xo(){xe.musicStop(),Fn&&Fn.leave(),ee("btnVoice").classList.add("hidden"),ee("voiceList").classList.add("hidden"),Fe?.on&&(Fe.stop(),ee("mpTag").classList.add("hidden")),q.mpPhase="",q.state="menu",["pause","over","lobby"].forEach(i=>ee(i).classList.add("hidden")),ee("menu").classList.remove("hidden"),ee("hud").classList.add("hidden"),ee("touch").classList.add("hidden"),Xd(ee("scoreList"),Gd()),Wd(),Wt.reset(),R.gun&&(R.gun.visible=!1),ns(""),R.dead=!1,Hi.visible=!1}function rm(){xe.musicStop(),q.state="over";let i=nb({round:Math.max(1,q.round),kills:R.kills,pts:R.pts,t:Date.now()});ee("oRound").textContent=Math.max(1,q.round),ee("oKills").textContent=R.kills,ee("oHeads").textContent=R.heads,ee("oPts").textContent=R.pts.toLocaleString();let e=Math.floor(q.runTime);ee("oTime").textContent=Math.floor(e/60)+":"+String(e%60).padStart(2,"0"),ee("oMsg").textContent=q.round>=10?"Legendary run. The yard remembers.":q.round>=5?"Solid stand. They got you in the end.":"The dead took the yard. Try again.",Xd(ee("oScores"),i),ib(),ee("over").classList.remove("hidden"),ee("hud").classList.add("hidden"),ee("touch").classList.add("hidden"),R.gun&&(R.gun.visible=!1)}var Bd={x:0,z:8},Uo={groan:(i,e)=>xe.groan(Oo(i.pos),Gt(1-e/40,.1,.8)*.8,i.brute?.6:i.runner?1.25:J(.9,1.1),i.brute?1.4:J(.8,1.3)),plank:(i,e)=>{xe.plank(!0),Rt.dust(new D(i.c.x+i.n.x*.3,1.4,i.c.z+i.n.z*.3),i.n,6,[.5,.4,.3])},hitPlayer:tb},rb={groan:()=>{},plank:()=>{},hitPlayer:()=>{}};function Yd(i){q.time+=i;let e=q.time;if(q.state==="menu"){q.orbit+=i*.12;let n=q.orbit,s=9.5;if(zt.position.set(Math.sin(n)*s,2.6+Math.sin(n*.7)*.4,6+Math.cos(n)*s*.8),zt.lookAt(0,1.8,3),zt.rotation.z=0,q.menuSpawn-=i,q.menuSpawn<=0&&Wt.alive<5){q.menuSpawn=2.2;let r=Wt.spawn(mn(mt.windows.filter(a=>a.area==="A")),2);r&&(r.state="chase",r.pos.set(J(-14,14),0,J(-18,-4)),r.speed=J(.9,1.5),r.dmg=0)}Bd.x=0,Bd.z=6,Wt.update(i,e,Bd,mt.door,rb),mt.update(i,e,{x:zt.position.x,z:zt.position.z}),Rt.update(i),Xt&&Xt.frame(zt),ts.center={x:0,z:6},Ts.center=ts.center,ts.ps.update(i),Ts.ps.update(i),Rs.visible=!1,yi.visible=!1;return}if(Rs.visible=!0,yi.visible=Gn>0&&R.flashlight&&!R.dead,q.state==="paused")return;if(q.state==="over"){Rt.update(i);return}if(q.runTime+=i,R.dead){if(R.deadT+=i,Fe?.on?Fe.update(i,e,Uo):Wt.update(i,e,R,mt.door,{...Uo,hitPlayer:()=>{}}),mt.update(i,e,R),Rt.update(i),Z0(i,e),Fe?.on&&R.deadT>.8){let n=Fe.spectate(zt);Rs.visible=!1,ee("specTag").textContent=n?"DOWN \xB7 SPECTATING "+n:"DOWN \xB7 waiting for the round to end",ee("specTag").classList.remove("hidden")}R.deadT>2.4&&!Fe?.on&&rm();return}if(QM(i),eb(i),!Fe?.on&&R.hp<R.maxHp&&e-R.lastHit>DM&&(R.hp=Math.min(R.maxHp,R.hp+LM*i)),R.hp<R.maxHp*ko&&e-q.healBeat>.85&&(q.healBeat=e,xe.heart()),Fe?.on)Fe.update(i,e,Uo);else if(q.phase==="wait")q.interT-=i,q.interT<=0&&Y0(1);else if(q.phase==="round"){if(KM(i),q.toSpawn<=0&&Wt.alive<=0){let n=q.round;q.phase="inter",q.interT=Vn.inter,xe.setMusicPhase("calm"),!Fe?.on&&Xt&&Xt.onWave(n)}}else q.phase==="inter"&&(q.interT-=i,q.interT<=0&&Y0(q.round+1));if(q.state==="playing"){let n=q.phase==="round"?"hot":"calm";xe.musicMood!==n&&xe.setMusicPhase(n),xe.pumpMusic()}if(!Fe?.on)As.step(i),Wt.update(i,e,R,mt.door,Uo),Xt.update(i);else if(Fe.S&&Fe.S.snaps&&Fe.S.snaps.length){let n=Fe.S.snaps[Fe.S.snaps.length-1];As.sync(n.ng);let s=n.p&&n.p.find(r=>r[0]===Fe.S.id);s&&s.length>15&&q.nadeCd<=0&&(R.nades=s[15])}As.frame(),q.nadeCd>0&&(q.nadeCd-=i),mt.update(i,e,R),FM(i),Xt&&Xt.frame(zt),Fn&&Fn.joined&&Fn.tick(),ts.center={x:R.x,z:R.z},Ts.center=ts.center,ts.ps.update(i),Ts.ps.update(i),Rt.update(i),ZM(i),q.double>0&&(q.double-=i);for(let n=q.ups.length-1;n>=0;n--){let s=q.ups[n];s.t-=i,s.core.rotation.y+=i*2.5,s.type!=="health"&&(s.core.rotation.x+=i*1.1),s.g.position.y=1+Math.sin(e*3+n)*.15,s.g.visible=s.t>5||Math.sin(e*16)>-.2,!Fe?.on&&(Math.hypot(s.x-R.x,s.z-R.z)<1.5?(nm(s),q.ups.splice(n,1)):s.t<=0&&(en.remove(s.g),q.ups.splice(n,1)))}let t=im();jM(t),t?sm(t,at.interact,i):q.repairT=0,at.interactEdge=!1,Z0(i,e),VM()}var $0=performance.now();function am(i){requestAnimationFrame(am);let e=Math.min(.25,(i-$0)/1e3);$0=i,HM(e),Yd(Math.min(e,.05)*(q.state==="menu"?.6:1));let t=q.state==="playing"&&R.hp<R.maxHp*ko?1-R.hp/(R.maxHp*ko):0;qr.render(e,q.time,Gt(R.dmg,0,1),t)}function ab(){qr.render(.016,q.time,Gt(R.dmg,0,1),0)}var kn={};function Zd(){at.f=(kn.KeyW||kn.ArrowUp?1:0)-(kn.KeyS||kn.ArrowDown?1:0),at.s=(kn.KeyD||kn.ArrowRight?1:0)-(kn.KeyA||kn.ArrowLeft?1:0),at.sprint=!!(kn.ShiftLeft||kn.ShiftRight)}addEventListener("keydown",i=>{i.target&&i.target.tagName==="INPUT"||i.repeat||(kn[i.code]=!0,q.state==="playing"&&!R.dead?q.mpPhase==="lobby"||(i.code==="KeyR"&&(at.reload=!0),i.code==="KeyE"&&(at.interact=!0,at.interactEdge=!0),i.code==="Digit1"&&Xr(0),i.code==="Digit2"&&Xr(1),i.code==="KeyQ"&&Xr(1-R.cur),i.code==="KeyF"&&cm(!R.flashlight),i.code==="KeyP"&&Wo(),i.code==="KeyV"&&Fe?.on&&Fn&&Fn.toggle(),i.code==="KeyG"&&fm()):q.state==="paused"&&i.code==="KeyP"&&qd(),i.code==="KeyM"&&hm(),i.code==="KeyN"&&um(),i.code==="Enter"&&(q.state==="menu"||q.state==="over")&&Jr(),Zd())});addEventListener("keyup",i=>{kn[i.code]=!1,i.code==="KeyE"&&(at.interact=!1),Zd()});addEventListener("blur",()=>{for(let i in kn)kn[i]=!1;Zd(),at.fire=!1,at.interact=!1});var om=!1;document.addEventListener("pointerlockerror",()=>{om=!0});addEventListener("mousemove",i=>{q.state!=="playing"||R.dead||document.pointerLockElement!==is&&!om&&!Wn.has("test")||lm(i.movementX,i.movementY,.0022)});function lm(i,e,t){R.yaw-=i*t,R.pitch=Gt(R.pitch-e*t,-1.45,1.45),R.sx+=i*.01,R.sy+=e*.01}is.addEventListener("mousedown",i=>{i.button===0&&q.state==="playing"&&(!$t&&!document.pointerLockElement&&!Wn.has("test")&&is.requestPointerLock?.(),at.fire=!0)});addEventListener("mouseup",i=>{i.button===0&&(at.fire=!1)});addEventListener("wheel",i=>{q.state==="playing"&&Math.abs(i.deltaY)>4&&Xr(1-R.cur)},{passive:!0});addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&q.state==="playing"&&!R.dead&&!$t&&!Wn.has("test")&&q.mpPhase!=="lobby"&&Wo()});document.addEventListener("visibilitychange",()=>{document.hidden&&q.mpPhase!=="lobby"&&Wo()});if($t){let i=null,e=null,t=0,n=0,s=ee("stick"),r=ee("knob"),a={x:0,y:0},l=ee("touch");l.addEventListener("touchstart",d=>{for(let u of d.changedTouches){if(d.target.closest("button"))continue;let f=s.getBoundingClientRect();i===null&&u.clientX<innerWidth*.45?(i=u.identifier,a={x:f.left+f.width/2,y:f.top+f.height/2},c(u)):e===null&&(e=u.identifier,t=u.clientX,n=u.clientY)}d.preventDefault()},{passive:!1});let c=d=>{let u=d.clientX-a.x,f=d.clientY-a.y,p=Math.hypot(u,f),v=55;p>v&&(u=u/p*v,f=f/p*v),r.style.transform=`translate(${u}px,${f}px)`,at.s=u/v,at.f=-f/v,Math.hypot(at.s,at.f)<.12&&(at.s=at.f=0)};l.addEventListener("touchmove",d=>{for(let u of d.changedTouches)u.identifier===i?c(u):u.identifier===e&&(q.state==="playing"&&!R.dead&&lm(u.clientX-t,u.clientY-n,.0048),t=u.clientX,n=u.clientY);d.preventDefault()},{passive:!1});let o=d=>{for(let u of d.changedTouches)u.identifier===i?(i=null,r.style.transform="",at.s=at.f=0):u.identifier===e&&(e=null)};l.addEventListener("touchend",o),l.addEventListener("touchcancel",o);let h=(d,u,f)=>{let p=ee(d);p.addEventListener("touchstart",g=>{p.classList.add("down"),u(),g.preventDefault(),g.stopPropagation()},{passive:!1});let v=g=>{p.classList.remove("down"),f?.(),g.preventDefault()};p.addEventListener("touchend",v),p.addEventListener("touchcancel",v)};h("bFire",()=>at.fire=!0,()=>at.fire=!1),h("bReload",()=>at.reload=!0),h("bUse",()=>{at.interact=!0,at.interactEdge=!0},()=>at.interact=!1),h("bSwap",()=>Xr(1-R.cur)),h("bLamp",()=>cm(!R.flashlight)),h("bNade",()=>fm())}function cm(i){R.flashlight=i,_i.visible=i,yi.visible=!!i&&Gn>0&&q.state==="playing"&&!R.dead;let e=ee("bLamp");e&&e.classList.toggle("off",!i),xe.click(0,i?1500:800,.32)}function hm(){xe.setMuted(!xe.muted);try{localStorage.setItem("vwz_mute",xe.muted?"1":"0")}catch{}pm()}function um(){xe.setMusicOn(xe.musicOn===!1);try{localStorage.setItem("vwz_music",xe.musicOn?"1":"0")}catch{}dm()}function dm(){let i=xe.musicOn!==!1,e=ee("btnMusic");e&&(e.textContent=i?"\u266A":"\u266A\u0338",e.classList.toggle("on",i))}function fm(){if(q.state!=="playing"||R.dead||(R.nades||0)<=0||q.nadeCd>0){q.state==="playing"&&(R.nades||0)<=0&&xe.deny();return}q.nadeCd=.4,R.nades--,Fe?.on?Fe.send({t:"nade",yaw:+R.yaw.toFixed(3),pitch:+R.pitch.toFixed(3)}):As.throwLocal(R.x,Hd(),R.z,R.yaw,R.pitch-.15),xe.click(0,180,.4)}function pm(){ee("btnMute").textContent=xe.muted?"\u{1F507}":"\u{1F50A}",ee("btnMute2").textContent=xe.muted?"\u{1F507} Sound off":"\u{1F50A} Sound on"}ee("btnMute").onclick=ee("btnMute2").onclick=i=>{i.stopPropagation(),hm()};try{localStorage.getItem("vwz_music")==="0"&&(xe.musicOn=!1)}catch{}ee("btnMusic")&&(ee("btnMusic").onclick=i=>{i.stopPropagation(),um()});ee("btnPause").onclick=i=>{i.stopPropagation(),Wo()};ee("btnPlay").onclick=Jr;ee("btnAgain").onclick=Jr;ee("btnMenu").onclick=Xo;ee("btnResume").onclick=qd;ee("btnQuit").onclick=Xo;ee("btnPlay").addEventListener("touchend",i=>{i.preventDefault(),Jr()});ee("qSeg").addEventListener("click",i=>{let e=i.target.closest("button");if(e){zi=e.dataset.q;try{localStorage.setItem("vwz_q",zi)}catch{}[...ee("qSeg").querySelectorAll("button")].forEach(t=>t.classList.toggle("on",t===e)),Uh(zi==="high"?2:zi==="medium"?1:zi==="low"||$t?0:2)}});[...ee("qSeg").querySelectorAll("button")].forEach(i=>i.classList.toggle("on",i.dataset.q===zi));ee("modeSeg").addEventListener("click",i=>{let e=i.target.closest("button");if(e){Vn=Rd(Cd(e.dataset.m),1);try{localStorage.setItem("vwz_mode",Vn.id)}catch{}[...ee("modeSeg").querySelectorAll("button")].forEach(t=>t.classList.toggle("on",t===e))}});[...ee("modeSeg").querySelectorAll("button")].forEach(i=>i.classList.toggle("on",i.dataset.m===Vn.id));ee("mapSeg").addEventListener("click",i=>{let e=i.target.closest("button");if(!e||e.dataset.map===Vi.id)return;try{localStorage.setItem("vwz_map",e.dataset.map)}catch{}let t=new URL(location.href);t.searchParams.set("map",e.dataset.map),location.href=t.toString()});[...ee("mapSeg").querySelectorAll("button")].forEach(i=>i.classList.toggle("on",i.dataset.map===Vi.id));R.slots=[Dh("pistol"),null];$r();Uh(Gn);pm();dm();Xd(ee("scoreList"),Gd());Wd();Wt.max=Vi.cap[Gn>0?1:0];for(let i=0;i<40;i++)Yd(.05);requestAnimationFrame(()=>{qr.render(.016,0,0,0),ee("loading").classList.add("done"),setTimeout(()=>ee("loading").remove(),800)});requestAnimationFrame(am);"serviceWorker"in navigator&&location.protocol!=="file:"&&!Wn.has("nosw")&&navigator.serviceWorker.register("sw.js").catch(()=>{});function ob(i,e,t){if(i.type==="win"){e&&(q.repairT+=t,q.repairT>.5&&(q.repairT=0,Fe.send({t:"repair",w:i.w.id})));return}if(i.type==="job"&&i.hold){e&&(q.repairT+=t,q.repairT>.5&&(q.repairT=0,Fe.send({t:"obj"})));return}at.interactEdge&&(i.type==="buy"?Fe.send({t:"buy",w:i.b.id}):i.type==="door"?Fe.send({t:"door",id:i.door.id}):i.type==="job"?Fe.send({t:"obj"}):i.type==="crate"&&Fe.send({t:"crate"}))}var $d=Wn.get("server")||"wss://vwfest-zombies-coop.onrender.com";Fe=H0({scene:en,zombies:Wt,P:R,G:q,cam:zt,world:mt,held:()=>R.slots[R.cur]&&R.slots[R.cur].id||"pistol",onJoined:i=>{q.mpPhase=i.phase||"",Jr(),q.round=0,ee("mpTag").textContent="CO-OP \xB7 ROOM "+i.room,ee("mpTag").classList.remove("hidden"),lb(),i.phase==="lobby"?(ee("lobbyCode").textContent=i.room,ee("lobby").classList.remove("hidden"),ee("toast").classList.remove("on"),clearTimeout(kd)):rn("Co-op room "+i.room+" \xB7 share the code with friends")},onLobby:i=>{let e=q.mpPhase;q.mpPhase=i.phase;let t=i.phase==="lobby";if(ee("lobby").classList.toggle("hidden",!t),e==="lobby"&&!t&&!$t&&!Wn.has("test"))try{is.requestPointerLock?.()?.catch?.(()=>{})}catch{}if(!t)return;ee("lobbyCode").textContent=i.room||Fe.S.room||"-----";let n=i.p.find(s=>s[0]===Fe.S.id);ee("lobbyReady").textContent=n&&n[13]?"UNREADY":"READY",ee("lobbyRoster").innerHTML=i.p.map(s=>{let r=s[10]?s[13]?"ready":"waiting":"disconnected",a=String(s[1]).replace(/[&<>]/g,l=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[l]);return`<li class="${s[13]?"ok":"wait"}">${a}${s[0]===Fe.S.id?" (you)":""} \xB7 ${r}</li>`}).join("")},onStatus:i=>{rn(String(i));let e=ee("coMsg");e&&(e.textContent=String(i)),i==="Reconnected"&&Fn&&Fn.rebuild()},onRound:i=>{q.round=i,q.phase="round";let e=xe.lineFor("wave","",i);xe.round(i),xe.setMusicPhase("hot"),ki("ROUND "+i,e),xe.announce(e),(R.nades||0)<1&&(R.nades=1)},onHurt:i=>{R.lastHit=q.time,R.dmg=Math.max(R.dmg,.65+.35*(1-Math.max(0,R.hp)/R.maxHp)),R.shake=1,xe.hurt()},onDown:()=>{Bh(),rn("You are down. Teammates revive you if they clear the round")},onRevive:()=>{ee("specTag").classList.add("hidden"),R.dead=!1,R.deadT=0,ee("hud").classList.remove("hud-dead"),$r(),rn("Back on your feet")},onZDie:i=>xe.zdie(Oo(i.pos),.5),onHits:i=>{for(let e of i){let t=ee("hitm");t.classList.remove("on","kill"),t.offsetWidth,t.classList.add("on"),e.killed&&(t.classList.add("kill"),xe.tick(!0),q.kills++,e.head&&R.heads++),Yr("+"+e.gain,e.head&&e.killed)}},onEvent:(i,e)=>{if(i.e==="pick"){let t=vi[i.type];if(t&&ki(t.name,i.p===Fe.S.id?t.sub:"A teammate grabbed it"),xe.power(i.type==="health"?"ammo":i.type),i.type==="ammo"&&i.p===Fe.S.id)for(let n of R.slots)n&&(n.mag=Ot[n.id].mag,n.reserve=Ot[n.id].reserve);i.type==="nuke"&&(xe.boom(),R.shake=1,ee("fx-flash").style.transition="none",ee("fx-flash").style.opacity=.85,requestAnimationFrame(()=>{ee("fx-flash").style.transition="opacity 1.2s",ee("fx-flash").style.opacity=0}))}else i.e==="plank"&&i.by===Fe.S.id?(q.mpRepairs=(q.mpRepairs||0)+1,xe.repair(),Yr("+10")):i.e==="mission"?Xt.onNetEvent(i):i.e==="boom"?As.splatter(i.x,i.z):i.e==="crate"&&i.s==="shut"&&rn("The toolbox slammed shut")},onAct:i=>{if(!i.ok){i.a==="nade"&&R.nades++,i.why==="pts"?(xe.deny(),rn("Not enough points")):i.why==="full"?rn("Bait pouch is full"):i.why==="not-yours"&&rn("That weapon belongs to a teammate");return}i.a==="buy"?(xe.cash(),i.w==="nade"?R.nades=i.nades:Ho(i.w)):i.a==="door"?xe.cash():i.a==="crate"&&(xe.cash(),i.s==="roll"?(xe.open(),xe.jingle(4)):i.s==="take"&&(Ho(i.w),ki(Ot[i.w].name.toUpperCase())))},onPlank:(i,e)=>{e&&Uo.plank(i,!0)},onDoor:i=>{xe.door(),ki(!i||i.id==="AB"?"GATE OPEN":i.name.toUpperCase(),i&&i.blurb||"Gate open")},onMission:(i,e,t)=>Xt.applyNet(i,e,t,Fe.S.id),onSig:i=>{Fn&&Fn.onSignal(i)},onCrate:(i,e,t)=>{let n=mt.crate;i==="idle"?n.state!=="idle"&&Fh():i==="roll"&&n.state==="idle"?(n.state="roll",n.t=0,n.pick=e):i==="ready"&&(n.state==="idle"||n.state==="roll"&&n.t<3.4)&&(n.state="roll",n.t=3.61,n.pick=e),n.mine=t},syncUps:i=>{let e=new Set(i.map(t=>t[0]));for(let t=q.ups.length-1;t>=0;t--){let n=q.ups[t];n.sid&&!e.has(n.sid)&&(en.remove(n.g),Rt.glowBurst(new D(n.x,1,n.z),...vi[n.type].col.map(s=>s*.7),24,4),q.ups.splice(t,1))}for(let[t,n,s,r]of i)q.ups.some(a=>a.sid===t)||(Go(n,s,r),q.ups[q.ups.length-1].sid=t)},onOver:()=>{setTimeout(()=>{R.dead=!0,rm(),Fe.stop(),ee("mpTag").classList.add("hidden")},1500)},onQuit:()=>Xo()});async function lb(){if(Fe?.on){if(!Fn)try{Fn=(await import(new URL("voice.js",import.meta.url).href)).attach({selfId:()=>Fe.S.id,selfName:()=>Fe.S.name,send:t=>Fe.send(t),peers:()=>[...Fe.S.remotes.keys()],names:()=>{let t=new Map;for(let[n,s]of Fe.S.remotes)t.set(n,s.userData.name);return t},setTalking:(t,n)=>Fe.setTalking(t,n),toast:rn,list:ee("voiceList"),button:ee("btnVoice")})}catch{rn("Voice chat failed to load");return}ee("btnVoice").classList.remove("hidden")}}ee("btnVoice").onclick=i=>{i.stopPropagation(),Fn&&Fn.toggle()};var Jd=()=>(ee("coName").value||"Survivor").trim().slice(0,16);ee("lobbyReady").onclick=()=>{let i=Fe.S.snaps.at(-1),e=i&&i.p.find(t=>t[0]===Fe.S.id);Fe.send({t:"ready",on:!(e&&e[13])})};ee("lobbyLeave").onclick=()=>{ee("lobby").classList.add("hidden"),Xo()};ee("coQuick").onclick=()=>Fe.connect({url:$d,name:Jd(),join:{map:Vi.id}});ee("coCreate").onclick=()=>Fe.connect({url:$d,name:Jd(),join:{create:!0,map:Vi.id}});ee("coJoin").onclick=()=>{let i=ee("coCode").value.trim().toUpperCase();if(!/^[A-Z2-9]{5}$/.test(i)){ee("coMsg").textContent="Room codes are 5 letters/numbers";return}Fe.connect({url:$d,name:Jd(),join:{code:i}})};window.__game={MP:Fe,missions:Xt,grenades:As,get MODE(){return Vn},MAP:Vi,MAPS:uh,PLAYER_MAX_HP:zo,MEDKIT_HP_FRAC:J0,MEDKIT_COOLDOWN:K0,MEDKIT_HEAL_FRAC:j0,medKitReady:Vd,medKitOnKill:tm,G:q,P:R,world:mt,zombies:Wt,fx:Rt,input:at,tick:Yd,startGame:Jr,shoot:em,applyTier:Uh,switchTo:Xr,startReload:Lh,pause:Wo,resume:qd,toMenu:Xo,giveWeapon:Ho,spawnPower:Go,pickPower:nm,interact:sm,findFocus:im,die:Bh,get tier(){return Gn},cam:zt,renderer:Hn,scene:en,WEAPONS:Ot,sfx:xe,renderOnce:ab,aimAt(i,e=!1){let t=i.pos.x-R.x,n=i.pos.z-R.z,s=(e?1.66:1)*i.scale-1.7;R.yaw=Math.atan2(-t,-n),R.pitch=Math.atan2(s,Math.hypot(t,n)),R.rP=R.rY=0},isTouch:$t};
