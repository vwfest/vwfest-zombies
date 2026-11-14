var Em=0,of=1,Tm=2;var Hr=1,wm=2,Go=3,os=0,Sn=1,Ot=2,dn=0,as=1,ln=2,af=3,lf=4,bh=5;var Ai=100,Am=101,Rm=102,Cm=103,Pm=104,Gr=200,Im=201,Lm=202,Dm=203,cf=204,hf=205,sl=206,Nm=207,rl=208,Um=209,Om=210,Fm=211,Bm=212,km=213,zm=214,Xc=0,qc=1,Yc=2,wo=3,Zc=4,jc=5,Kc=6,$c=7,uf=0,Hm=1,Gm=2,Hi=0,ol=1,al=2,ll=3,Vr=4,cl=5,hl=6,ul=7,qd="attached",Vm="detached",df=300,rr=301,Wr=302,Xr=303,Sh=304,dl=306,en=1e3,Cn=1001,Ao=1002,tn=1003,Eh=1004;var qr=1005;var Xt=1006,Vo=1007;var di=1008;var Wn=1009,ff=1010,pf=1011,Wo=1012,Th=1013,Gi=1014,Xn=1015,Zt=1016,wh=1017,Ah=1018,or=1020,mf=35902,gf=35899,xf=1021,vf=1022,Qn=1023,Qi=1026,ls=1027,Rh=1028,Ch=1029,ar=1030,Ph=1031;var Ih=1033,fl=33776,pl=33777,ml=33778,gl=33779,Lh=35840,Dh=35841,Nh=35842,Uh=35843,Oh=36196,Fh=37492,Bh=37496,kh=37488,zh=37489,xl=37490,Hh=37491,Gh=37808,Vh=37809,Wh=37810,Xh=37811,qh=37812,Yh=37813,Zh=37814,jh=37815,Kh=37816,$h=37817,Jh=37818,Qh=37819,eu=37820,tu=37821,nu=36492,iu=36494,su=36495,ru=36283,ou=36284,vl=36285,au=36286,Xo=2200,lu=2201,Wm=2202,wr=2300,Ar=2301,Gc=2302,Yd=2303,br=2400,Sr=2401,Ra=2402,cu=2500,Xm=2501,_f=0,_l=1,qo=2,qm=3200;var yl=0,Ym=1,Dn="",ft="srgb",Ln="srgb-linear",Ca="linear",Ct="srgb";var Vc=7680;var Zm=519,jm=512,Km=513,$m=514,hu=515,Jm=516,Qm=517,uu=518,eg=519,yf=35044,Ml=35048;var Mf="300 es",Bi=2e3,Ro=2001;function Gv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Vv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Co(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tg(){let i=Co("canvas");return i.style.display="block",i}var D0={},Po=null;function Pa(...i){let e="THREE."+i.shift();Po?Po("log",e,...i):console.log(e,...i)}function ng(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qe(...i){i=ng(i);let e="THREE."+i.shift();if(Po)Po("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ot(...i){i=ng(i);let e="THREE."+i.shift();if(Po)Po("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Tr(...i){let e=i.join(" ");e in D0||(D0[e]=!0,Qe(...i))}function ig(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var sg={[Xc]:qc,[Yc]:Kc,[Zc]:$c,[wo]:jc,[qc]:Xc,[Kc]:Yc,[$c]:Zc,[jc]:wo},ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],N0=1234567,Ea=Math.PI/180,Rr=180/Math.PI;function Ti(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kn[i&255]+kn[i>>8&255]+kn[i>>16&255]+kn[i>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[n&255]+kn[n>>8&255]+kn[n>>16&255]+kn[n>>24&255]).toLowerCase()}function xt(i,e,t){return Math.max(e,Math.min(t,i))}function bf(i,e){return(i%e+e)%e}function Wv(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Xv(i,e,t){return i!==e?(t-i)/(e-i):0}function Ta(i,e,t){return(1-t)*i+t*e}function qv(i,e,t,n){return Ta(i,e,1-Math.exp(-t*n))}function Yv(i,e=1){return e-Math.abs(bf(i,e*2)-e)}function Zv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function jv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Kv(i,e){return i+Math.floor(Math.random()*(e-i+1))}function $v(i,e){return i+Math.random()*(e-i)}function Jv(i){return i*(.5-Math.random())}function Qv(i){i!==void 0&&(N0=i);let e=N0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function e_(i){return i*Ea}function t_(i){return i*Rr}function n_(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function i_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function s_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function r_(i,e,t,n,s){let r=Math.cos,o=Math.sin,l=r(t/2),c=o(t/2),a=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(l*h,c*d,c*u,l*a);break;case"YZY":i.set(c*u,l*h,c*d,l*a);break;case"ZXZ":i.set(c*d,c*u,l*h,l*a);break;case"XZX":i.set(l*h,c*p,c*f,l*a);break;case"YXY":i.set(c*f,l*h,c*p,l*a);break;case"ZYZ":i.set(c*p,c*f,l*h,l*a);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Vi={DEG2RAD:Ea,RAD2DEG:Rr,generateUUID:Ti,clamp:xt,euclideanModulo:bf,mapLinear:Wv,inverseLerp:Xv,lerp:Ta,damp:qv,pingpong:Yv,smoothstep:Zv,smootherstep:jv,randInt:Kv,randFloat:$v,randFloatSpread:Jv,seededRandom:Qv,degToRad:e_,radToDeg:t_,isPowerOfTwo:n_,ceilPowerOfTwo:i_,floorPowerOfTwo:s_,setQuaternionFromProperEuler:r_,normalize:Ut,denormalize:Fi},ae=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},on=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,l){let c=n[s+0],a=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||c!==u||a!==f||h!==p){let g=c*u+a*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-l;if(g<.9995){let v=Math.acos(g),S=Math.sin(v);m=Math.sin(m*v)/S,l=Math.sin(l*v)/S,c=c*m+u*l,a=a*m+f*l,h=h*m+p*l,d=d*m+x*l}else{c=c*m+u*l,a=a*m+f*l,h=h*m+p*l,d=d*m+x*l;let v=1/Math.sqrt(c*c+a*a+h*h+d*d);c*=v,a*=v,h*=v,d*=v}}e[t]=c,e[t+1]=a,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let l=n[s],c=n[s+1],a=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return e[t]=l*p+h*d+c*f-a*u,e[t+1]=c*p+h*u+a*d-l*f,e[t+2]=a*p+h*f+l*u-c*d,e[t+3]=h*p-l*d-c*u-a*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,l=Math.cos,c=Math.sin,a=l(n/2),h=l(s/2),d=l(r/2),u=c(n/2),f=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=u*h*d+a*f*p,this._y=a*f*d-u*h*p,this._z=a*h*p+u*f*d,this._w=a*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+a*f*p,this._y=a*f*d-u*h*p,this._z=a*h*p-u*f*d,this._w=a*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-a*f*p,this._y=a*f*d+u*h*p,this._z=a*h*p+u*f*d,this._w=a*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-a*f*p,this._y=a*f*d+u*h*p,this._z=a*h*p-u*f*d,this._w=a*h*d+u*f*p;break;case"YZX":this._x=u*h*d+a*f*p,this._y=a*f*d+u*h*p,this._z=a*h*p-u*f*d,this._w=a*h*d-u*f*p;break;case"XZY":this._x=u*h*d-a*f*p,this._y=a*f*d-u*h*p,this._z=a*h*p+u*f*d,this._w=a*h*d+u*f*p;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],l=t[5],c=t[9],a=t[2],h=t[6],d=t[10],u=n+l+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-a)*f,this._z=(o-s)*f}else if(n>l&&n>d){let f=2*Math.sqrt(1+n-l-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+a)/f}else if(l>d){let f=2*Math.sqrt(1+l-n-d);this._w=(r-a)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-l);this._w=(o-s)/f,this._x=(r+a)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=t._x,c=t._y,a=t._z,h=t._w;return this._x=n*h+o*l+s*a-r*c,this._y=s*h+o*c+r*l-n*a,this._z=r*h+o*a+n*c-s*l,this._w=o*h-n*l-s*c-r*a,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,o=-o,l=-l);let c=1-t;if(l<.9995){let a=Math.acos(l),h=Math.sin(a);c=Math.sin(c*a)/h,t=Math.sin(t*a)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(U0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(U0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,l=e.z,c=e.w,a=2*(o*s-l*n),h=2*(l*t-r*s),d=2*(r*n-o*t);return this.x=t+c*a+o*d-l*h,this.y=n+c*h+l*a-r*d,this.z=s+c*d+r*h-o*a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,l=t.y,c=t.z;return this.x=s*c-r*l,this.y=r*o-n*c,this.z=n*l-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vd.copy(this).projectOnVector(e),this.sub(vd)}reflect(e){return this.sub(vd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vd=new U,U0=new on,ut=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,l,c,a){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,c,a)}set(e,t,n,s,r,o,l,c,a){let h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[3],c=n[6],a=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=s[0],g=s[3],m=s[6],v=s[1],S=s[4],y=s[7],w=s[2],T=s[5],I=s[8];return r[0]=o*x+l*v+c*w,r[3]=o*g+l*S+c*T,r[6]=o*m+l*y+c*I,r[1]=a*x+h*v+d*w,r[4]=a*g+h*S+d*T,r[7]=a*m+h*y+d*I,r[2]=u*x+f*v+p*w,r[5]=u*g+f*S+p*T,r[8]=u*m+f*y+p*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],h=e[8];return t*o*h-t*l*a-n*r*h+n*l*c+s*r*a-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],h=e[8],d=h*o-l*a,u=l*c-h*r,f=a*r-o*c,p=t*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*a-h*n)*x,e[2]=(l*n-s*o)*x,e[3]=u*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-l*t)*x,e[6]=f*x,e[7]=(n*c-a*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,l){let c=Math.cos(r),a=Math.sin(r);return this.set(n*c,n*a,-n*(c*o+a*l)+o+e,-s*a,s*c,-s*(-a*o+c*l)+l+t,0,0,1),this}scale(e,t){return Tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_d.makeScale(e,t)),this}rotate(e){return Tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_d.makeRotation(-e)),this}translate(e,t){return Tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_d.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_d=new ut,O0=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),F0=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function o_(){let i={enabled:!0,workingColorSpace:Ln,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ct&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(s.r=To(s.r),s.g=To(s.g),s.b=To(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Dn?Ca:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ln]:{primaries:e,whitePoint:n,transfer:Ca,toXYZ:O0,fromXYZ:F0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:O0,fromXYZ:F0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}}),i}var gt=o_();function As(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function To(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var oo,Jc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{oo===void 0&&(oo=Co("canvas")),oo.width=e.width,oo.height=e.height;let s=oo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=oo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Co("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=As(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(As(t[n]/255)*255):t[n]=As(t[n]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},a_=0,Io=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=Ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(yd(s[o].image)):r.push(yd(s[o]))}else r=yd(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function yd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}var l_=0,Md=new U,Mn=class i extends ki{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Cn,s=Cn,r=Xt,o=di,l=Qn,c=Wn,a=i.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=Ti(),this.name="",this.source=new Io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=a,this.format=l,this.internalFormat=null,this.type=c,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Md).x}get height(){return this.source.getSize(Md).y}get depth(){return this.source.getSize(Md).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==df)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case en:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case en:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=df;Mn.DEFAULT_ANISOTROPY=1;var At=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,a=c[0],h=c[4],d=c[8],u=c[1],f=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(a+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(a+1)/2,y=(f+1)/2,w=(m+1)/2,T=(h+u)/4,I=(d+x)/4,_=(p+g)/4;return S>y&&S>w?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=I/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=_/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=I/r,s=_/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((a+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qc=class extends ki{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Mn(s),o=n.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Io(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$t=class extends Qc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ia=class extends Mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var eh=class extends Mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ze=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,l,c,a,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,c,a,h,d,u,f,p,x,g)}set(e,t,n,s,r,o,l,c,a,h,d,u,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=l,m[13]=c,m[2]=a,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ao.setFromMatrixColumn(e,0).length(),r=1/ao.setFromMatrixColumn(e,1).length(),o=1/ao.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(s),a=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,p=l*h,x=l*d;t[0]=c*h,t[4]=-c*d,t[8]=a,t[1]=f+p*a,t[5]=u-x*a,t[9]=-l*c,t[2]=x-u*a,t[6]=p+f*a,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,p=a*h,x=a*d;t[0]=u+x*l,t[4]=p*l-f,t[8]=o*a,t[1]=o*d,t[5]=o*h,t[9]=-l,t[2]=f*l-p,t[6]=x+u*l,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,p=a*h,x=a*d;t[0]=u-x*l,t[4]=-o*d,t[8]=p+f*l,t[1]=f+p*l,t[5]=o*h,t[9]=x-u*l,t[2]=-o*a,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,f=o*d,p=l*h,x=l*d;t[0]=c*h,t[4]=p*a-f,t[8]=u*a+x,t[1]=c*d,t[5]=x*a+u,t[9]=f*a-p,t[2]=-a,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,f=o*a,p=l*c,x=l*a;t[0]=c*h,t[4]=x-u*d,t[8]=p*d+f,t[1]=d,t[5]=o*h,t[9]=-l*h,t[2]=-a*h,t[6]=f*d+p,t[10]=u-x*d}else if(e.order==="XZY"){let u=o*c,f=o*a,p=l*c,x=l*a;t[0]=c*h,t[4]=-d,t[8]=a*h,t[1]=u*d+x,t[5]=o*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=l*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c_,e,h_)}lookAt(e,t,n){let s=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),js.crossVectors(n,mi),js.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),js.crossVectors(n,mi)),js.normalize(),dc.crossVectors(mi,js),s[0]=js.x,s[4]=dc.x,s[8]=mi.x,s[1]=js.y,s[5]=dc.y,s[9]=mi.y,s[2]=js.z,s[6]=dc.z,s[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[4],c=n[8],a=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],v=n[3],S=n[7],y=n[11],w=n[15],T=s[0],I=s[4],_=s[8],M=s[12],b=s[1],D=s[5],k=s[9],L=s[13],R=s[2],N=s[6],P=s[10],O=s[14],G=s[3],F=s[7],z=s[11],Z=s[15];return r[0]=o*T+l*b+c*R+a*G,r[4]=o*I+l*D+c*N+a*F,r[8]=o*_+l*k+c*P+a*z,r[12]=o*M+l*L+c*O+a*Z,r[1]=h*T+d*b+u*R+f*G,r[5]=h*I+d*D+u*N+f*F,r[9]=h*_+d*k+u*P+f*z,r[13]=h*M+d*L+u*O+f*Z,r[2]=p*T+x*b+g*R+m*G,r[6]=p*I+x*D+g*N+m*F,r[10]=p*_+x*k+g*P+m*z,r[14]=p*M+x*L+g*O+m*Z,r[3]=v*T+S*b+y*R+w*G,r[7]=v*I+S*D+y*N+w*F,r[11]=v*_+S*k+y*P+w*z,r[15]=v*M+S*L+y*O+w*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],l=e[5],c=e[9],a=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15],v=c*f-a*u,S=l*f-a*d,y=l*u-c*d,w=o*f-a*h,T=o*u-c*h,I=o*d-l*h;return t*(x*v-g*S+m*y)-n*(p*v-g*w+m*T)+s*(p*S-x*w+m*I)-r*(p*y-x*T+g*I)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],l=e[9],c=e[2],a=e[6],h=e[10];return t*(o*h-l*a)-n*(r*h-l*c)+s*(r*a-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],v=t*l-n*o,S=t*c-s*o,y=t*a-r*o,w=n*c-s*l,T=n*a-r*l,I=s*a-r*c,_=h*x-d*p,M=h*g-u*p,b=h*m-f*p,D=d*g-u*x,k=d*m-f*x,L=u*m-f*g,R=v*L-S*k+y*D+w*b-T*M+I*_;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/R;return e[0]=(l*L-c*k+a*D)*N,e[1]=(s*k-n*L-r*D)*N,e[2]=(x*I-g*T+m*w)*N,e[3]=(u*T-d*I-f*w)*N,e[4]=(c*b-o*L-a*M)*N,e[5]=(t*L-s*b+r*M)*N,e[6]=(g*y-p*I-m*S)*N,e[7]=(h*I-u*y+f*S)*N,e[8]=(o*k-l*b+a*_)*N,e[9]=(n*b-t*k-r*_)*N,e[10]=(p*T-x*y+m*v)*N,e[11]=(d*y-h*T-f*v)*N,e[12]=(l*M-o*D-c*_)*N,e[13]=(t*D-n*M+s*_)*N,e[14]=(x*S-p*w-g*v)*N,e[15]=(h*w-d*S+u*v)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,l=e.y,c=e.z,a=r*o,h=r*l;return this.set(a*o+n,a*l-s*c,a*c+s*l,0,a*l+s*c,h*l+n,h*c-s*o,0,a*c-s*l,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,l=t._z,c=t._w,a=r+r,h=o+o,d=l+l,u=r*a,f=r*h,p=r*d,x=o*h,g=o*d,m=l*d,v=c*a,S=c*h,y=c*d,w=n.x,T=n.y,I=n.z;return s[0]=(1-(x+m))*w,s[1]=(f+y)*w,s[2]=(p-S)*w,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(u+m))*T,s[6]=(g+v)*T,s[7]=0,s[8]=(p+S)*I,s[9]=(g-v)*I,s[10]=(1-(u+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=ao.set(s[0],s[1],s[2]).length(),l=ao.set(s[4],s[5],s[6]).length(),c=ao.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Di.copy(this);let a=1/o,h=1/l,d=1/c;return Di.elements[0]*=a,Di.elements[1]*=a,Di.elements[2]*=a,Di.elements[4]*=h,Di.elements[5]*=h,Di.elements[6]*=h,Di.elements[8]*=d,Di.elements[9]*=d,Di.elements[10]*=d,t.setFromRotationMatrix(Di),n.x=o,n.y=l,n.z=c,this}makePerspective(e,t,n,s,r,o,l=Bi,c=!1){let a=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,x;if(c)p=r/(o-r),x=o*r/(o-r);else if(l===Bi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(l===Ro)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=d,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=p,a[14]=x,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o,l=Bi,c=!1){let a=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),p,x;if(c)p=1/(o-r),x=o/(o-r);else if(l===Bi)p=-2/(o-r),x=-(o+r)/(o-r);else if(l===Ro)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=0,a[12]=u,a[1]=0,a[5]=d,a[9]=0,a[13]=f,a[2]=0,a[6]=0,a[10]=p,a[14]=x,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ao=new U,Di=new Ze,c_=new U(0,0,0),h_=new U(1,1,1),js=new U,dc=new U,mi=new U,B0=new Ze,k0=new on,$n=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],l=s[8],c=s[1],a=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,a),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(c,a)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,a)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,a));break;case"YZX":this._z=Math.asin(xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,a),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,a),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return B0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(B0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return k0.setFromEuler(this),this.setFromQuaternion(k0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var La=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},u_=0,z0=new U,lo=new on,_s=new Ze,fc=new U,da=new U,d_=new U,f_=new on,H0=new U(1,0,0),G0=new U(0,1,0),V0=new U(0,0,1),W0={type:"added"},p_={type:"removed"},co={type:"childadded",child:null},bd={type:"childremoved",child:null},pt=class i extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new $n,n=new on,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new ut}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new La,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lo.setFromAxisAngle(e,t),this.quaternion.multiply(lo),this}rotateOnWorldAxis(e,t){return lo.setFromAxisAngle(e,t),this.quaternion.premultiply(lo),this}rotateX(e){return this.rotateOnAxis(H0,e)}rotateY(e){return this.rotateOnAxis(G0,e)}rotateZ(e){return this.rotateOnAxis(V0,e)}translateOnAxis(e,t){return z0.copy(e).applyQuaternion(this.quaternion),this.position.add(z0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(H0,e)}translateY(e){return this.translateOnAxis(G0,e)}translateZ(e){return this.translateOnAxis(V0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_s.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fc.copy(e):fc.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_s.lookAt(da,fc,this.up):_s.lookAt(fc,da,this.up),this.quaternion.setFromRotationMatrix(_s),s&&(_s.extractRotation(s.matrixWorld),lo.setFromRotationMatrix(_s),this.quaternion.premultiply(lo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(W0),co.child=e,this.dispatchEvent(co),co.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(p_),bd.child=e,this.dispatchEvent(bd),bd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_s.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_s.multiply(e.parent.matrixWorld)),e.applyMatrix4(_s),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(W0),co.child=e,this.dispatchEvent(co),co.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,d_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,f_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let a=0,h=c.length;a<h;a++){let d=c[a];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,a=this.material.length;c<a;c++)l.push(r(e.materials,this.material[c]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(e.animations,c))}}if(t){let l=o(e.geometries),c=o(e.materials),a=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),a.length>0&&(n.textures=a),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(l){let c=[];for(let a in l){let h=l[a];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pt.DEFAULT_UP=new U(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var De=class extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},m_={type:"move"},Lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,l=this._targetRay,c=this._grip,a=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(a&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(a,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=a.joints["index-finger-tip"],d=a.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;a.inputState.pinching&&u>f+p?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!a.inputState.pinching&&u<=f-p&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(m_)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),a!==null&&(a.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new De;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},rg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ks={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Sd(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=gt.workingColorSpace){if(e=bf(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Sd(o,r,e+1/3),this.g=Sd(o,r,e),this.b=Sd(o,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,t=ft){function n(r){r!==void 0&&parseFloat(r)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let n=rg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=To(e.r),this.g=To(e.g),this.b=To(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return gt.workingToColorSpace(zn.copy(this),e),Math.round(xt(zn.r*255,0,255))*65536+Math.round(xt(zn.g*255,0,255))*256+Math.round(xt(zn.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(zn.copy(this),t);let n=zn.r,s=zn.g,r=zn.b,o=Math.max(n,s,r),l=Math.min(n,s,r),c,a,h=(l+o)/2;if(l===o)c=0,a=0;else{let d=o-l;switch(a=h<=.5?d/(o+l):d/(2-o-l),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=a,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(zn.copy(this),t),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=ft){gt.workingToColorSpace(zn.copy(this),e);let t=zn.r,n=zn.g,s=zn.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ks),this.setHSL(Ks.h+e,Ks.s+t,Ks.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ks),e.getHSL(pc);let n=Ta(Ks.h,pc.h,t),s=Ta(Ks.s,pc.s,t),r=Ta(Ks.l,pc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zn=new me;me.NAMES=rg;var Da=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new me(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Cr=class extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ni=new U,ys=new U,Ed=new U,Ms=new U,ho=new U,uo=new U,X0=new U,Td=new U,wd=new U,Ad=new U,Rd=new At,Cd=new At,Pd=new At,Ts=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ni.subVectors(e,t),s.cross(Ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ni.subVectors(s,t),ys.subVectors(n,t),Ed.subVectors(e,t);let o=Ni.dot(Ni),l=Ni.dot(ys),c=Ni.dot(Ed),a=ys.dot(ys),h=ys.dot(Ed),d=o*a-l*l;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(a*c-l*h)*u,p=(o*h-l*c)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ms)===null?!1:Ms.x>=0&&Ms.y>=0&&Ms.x+Ms.y<=1}static getInterpolation(e,t,n,s,r,o,l,c){return this.getBarycoord(e,t,n,s,Ms)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ms.x),c.addScaledVector(o,Ms.y),c.addScaledVector(l,Ms.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Rd.setScalar(0),Cd.setScalar(0),Pd.setScalar(0),Rd.fromBufferAttribute(e,t),Cd.fromBufferAttribute(e,n),Pd.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Rd,r.x),o.addScaledVector(Cd,r.y),o.addScaledVector(Pd,r.z),o}static isFrontFacing(e,t,n,s){return Ni.subVectors(n,t),ys.subVectors(e,t),Ni.cross(ys).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),ys.subVectors(this.a,this.b),Ni.cross(ys).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,l;ho.subVectors(s,n),uo.subVectors(r,n),Td.subVectors(e,n);let c=ho.dot(Td),a=uo.dot(Td);if(c<=0&&a<=0)return t.copy(n);wd.subVectors(e,s);let h=ho.dot(wd),d=uo.dot(wd);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*a;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ho,o);Ad.subVectors(e,r);let f=ho.dot(Ad),p=uo.dot(Ad);if(p>=0&&f<=p)return t.copy(r);let x=f*a-c*p;if(x<=0&&a>=0&&p<=0)return l=a/(a-p),t.copy(n).addScaledVector(uo,l);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return X0.subVectors(r,s),l=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(X0,l);let m=1/(g+x+u);return o=x*m,l=u*m,t.copy(n).addScaledVector(ho,o).addScaledVector(uo,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,Ui):Ui.fromBufferAttribute(r,o),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mc.copy(n.boundingBox)),mc.applyMatrix4(e.matrixWorld),this.union(mc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),gc.subVectors(this.max,fa),fo.subVectors(e.a,fa),po.subVectors(e.b,fa),mo.subVectors(e.c,fa),$s.subVectors(po,fo),Js.subVectors(mo,po),vr.subVectors(fo,mo);let t=[0,-$s.z,$s.y,0,-Js.z,Js.y,0,-vr.z,vr.y,$s.z,0,-$s.x,Js.z,0,-Js.x,vr.z,0,-vr.x,-$s.y,$s.x,0,-Js.y,Js.x,0,-vr.y,vr.x,0];return!Id(t,fo,po,mo,gc)||(t=[1,0,0,0,1,0,0,0,1],!Id(t,fo,po,mo,gc))?!1:(xc.crossVectors($s,Js),t=[xc.x,xc.y,xc.z],Id(t,fo,po,mo,gc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},bs=[new U,new U,new U,new U,new U,new U,new U,new U],Ui=new U,mc=new bn,fo=new U,po=new U,mo=new U,$s=new U,Js=new U,vr=new U,fa=new U,gc=new U,xc=new U,_r=new U;function Id(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){_r.fromArray(i,r);let l=s.x*Math.abs(_r.x)+s.y*Math.abs(_r.y)+s.z*Math.abs(_r.z),c=e.dot(_r),a=t.dot(_r),h=n.dot(_r);if(Math.max(-Math.max(c,a,h),Math.min(c,a,h))>l)return!1}return!0}var ws=g_();function g_(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let a=c-127;a<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):a<-14?(n[c]=1024>>-a-14,n[c|256]=1024>>-a-14|32768,s[c]=-a-1,s[c|256]=-a-1):a<=15?(n[c]=a+15<<10,n[c|256]=a+15<<10|32768,s[c]=13,s[c|256]=13):a<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),l=new Uint32Array(64);for(let c=1;c<1024;++c){let a=c<<13,h=0;for(;(a&8388608)===0;)a<<=1,h-=8388608;a&=-8388609,h+=947912704,r[c]=a|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(l[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:l}}function x_(i){Math.abs(i)>65504&&Qe("DataUtils.toHalfFloat(): Value out of range."),i=xt(i,-65504,65504),ws.floatView[0]=i;let e=ws.uint32View[0],t=e>>23&511;return ws.baseTable[t]+((e&8388607)>>ws.shiftTable[t])}function v_(i){let e=i>>10;return ws.uint32View[0]=ws.mantissaTable[ws.offsetTable[e]+(i&1023)]+ws.exponentTable[e],ws.floatView[0]}var tr=class{static toHalfFloat(e){return x_(e)}static fromHalfFloat(e){return v_(e)}},mn=new U,vc=new ae,__=0,ht=class extends ki{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:__++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yf,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vc.fromBufferAttribute(this,t),vc.applyMatrix3(e),this.setXY(t,vc.x,vc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var nr=class extends ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Na=class extends ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},y_=new bn,pa=new U,Ld=new U,ai=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):y_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pa.subVectors(e,this.center);let t=pa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(pa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pa.copy(e.center).add(Ld)),this.expandByPoint(pa.copy(e.center).sub(Ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},M_=0,Ei=new Ze,Dd=new pt,go=new U,gi=new bn,ma=new bn,Rn=new U,vt=class i extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gv(e)?Na:nr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ut().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,n){return Ei.makeTranslation(e,t,n),this.applyMatrix4(Ei),this}scale(e,t,n){return Ei.makeScale(e,t,n),this.applyMatrix4(Ei),this}lookAt(e){return Dd.lookAt(e),Dd.updateMatrix(),this.applyMatrix4(Dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(go).negate(),this.translate(go.x,go.y,go.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];gi.setFromBufferAttribute(r),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let l=t[r];ma.setFromBufferAttribute(l),this.morphTargetsRelative?(Rn.addVectors(gi.min,ma.min),gi.expandByPoint(Rn),Rn.addVectors(gi.max,ma.max),gi.expandByPoint(Rn)):(gi.expandByPoint(ma.min),gi.expandByPoint(ma.max))}gi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Rn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rn));if(t)for(let r=0,o=t.length;r<o;r++){let l=t[r],c=this.morphTargetsRelative;for(let a=0,h=l.count;a<h;a++)Rn.fromBufferAttribute(l,a),c&&(go.fromBufferAttribute(e,a),Rn.add(go)),s=Math.max(s,n.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ht(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let l=[],c=[];for(let _=0;_<n.count;_++)l[_]=new U,c[_]=new U;let a=new U,h=new U,d=new U,u=new ae,f=new ae,p=new ae,x=new U,g=new U;function m(_,M,b){a.fromBufferAttribute(n,_),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,b),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,b),h.sub(a),d.sub(a),f.sub(u),p.sub(u);let D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(D),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(D),l[_].add(x),l[M].add(x),l[b].add(x),c[_].add(g),c[M].add(g),c[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,M=v.length;_<M;++_){let b=v[_],D=b.start,k=b.count;for(let L=D,R=D+k;L<R;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let S=new U,y=new U,w=new U,T=new U;function I(_){w.fromBufferAttribute(s,_),T.copy(w);let M=l[_];S.copy(M),S.sub(w.multiplyScalar(w.dot(M))).normalize(),y.crossVectors(T,M);let D=y.dot(c[_])<0?-1:1;o.setXYZW(_,S.x,S.y,S.z,D)}for(let _=0,M=v.length;_<M;++_){let b=v[_],D=b.start,k=b.count;for(let L=D,R=D+k;L<R;L+=3)I(e.getX(L+0)),I(e.getX(L+1)),I(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,o=new U,l=new U,c=new U,a=new U,h=new U,d=new U;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),x=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),a.fromBufferAttribute(n,g),l.add(h),c.add(h),a.add(h),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,a.x,a.y,a.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rn.fromBufferAttribute(e,t),Rn.normalize(),e.setXYZ(t,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(l,c){let a=l.array,h=l.itemSize,d=l.normalized,u=new a.constructor(c.length*h),f=0,p=0;for(let x=0,g=c.length;x<g;x++){l.isInterleavedBufferAttribute?f=c[x]*l.data.stride+l.offset:f=c[x]*h;for(let m=0;m<h;m++)u[p++]=a[f++]}return new ht(u,h,d)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let c=s[l],a=e(c,n);t.setAttribute(l,a)}let r=this.morphAttributes;for(let l in r){let c=[],a=r[l];for(let h=0,d=a.length;h<d;h++){let u=a[h],f=e(u,n);c.push(f)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,c=o.length;l<c;l++){let a=o[l];t.addGroup(a.start,a.count,a.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let a in c)c[a]!==void 0&&(e[a]=c[a]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let a=n[c];e.data.attributes[c]=a.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let a=this.morphAttributes[c],h=[];for(let d=0,u=a.length;d<u;d++){let f=a[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let a in s){let h=s[a];this.setAttribute(a,h.clone(t))}let r=e.morphAttributes;for(let a in r){let h=[],d=r[a];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[a]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let a=0,h=o.length;a<h;a++){let d=o[a];this.addGroup(d.start,d.count,d.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yf,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Kn=new U,ir=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.applyMatrix4(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.applyNormalMatrix(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.transformDirection(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array),r=Ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Pa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Pa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Nd=new U,b_=new U,S_=new ut,Oi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Nd.subVectors(n,t).cross(b_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Nd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||S_.getNormalMatrix(e),s=this.coplanarPoint(Nd).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},E_=0,Hn=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=as,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cf,this.blendDst=hf,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vc,this.stencilZFail=Vc,this.stencilZPass=Vc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let l in r){let c=r[l];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new me().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Oi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ae().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Gn=class extends Hn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xo,ga=new U,vo=new U,_o=new U,yo=new ae,xa=new ae,og=new Ze,_c=new U,va=new U,yc=new U,q0=new ae,Ud=new ae,Y0=new ae,Jn=class extends pt{constructor(e=new Gn){if(super(),this.isSprite=!0,this.type="Sprite",xo===void 0){xo=new vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Pr(t,5);xo.setIndex([0,1,2,0,2,3]),xo.setAttribute("position",new ir(n,3,0,!1)),xo.setAttribute("uv",new ir(n,2,3,!1))}this.geometry=xo,this.material=e,this.center=new ae(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ot('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vo.setFromMatrixScale(this.matrixWorld),og.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_o.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vo.multiplyScalar(-_o.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Mc(_c.set(-.5,-.5,0),_o,o,vo,s,r),Mc(va.set(.5,-.5,0),_o,o,vo,s,r),Mc(yc.set(.5,.5,0),_o,o,vo,s,r),q0.set(0,0),Ud.set(1,0),Y0.set(1,1);let l=e.ray.intersectTriangle(_c,va,yc,!1,ga);if(l===null&&(Mc(va.set(-.5,.5,0),_o,o,vo,s,r),Ud.set(0,1),l=e.ray.intersectTriangle(_c,yc,va,!1,ga),l===null))return;let c=e.ray.origin.distanceTo(ga);c<e.near||c>e.far||t.push({distance:c,point:ga.clone(),uv:Ts.getInterpolation(ga,_c,va,yc,q0,Ud,Y0,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Mc(i,e,t,n,s,r){yo.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(xa.x=r*yo.x-s*yo.y,xa.y=s*yo.x+r*yo.y):xa.copy(yo),i.copy(e),i.x+=xa.x,i.y+=xa.y,i.applyMatrix4(og)}var Ss=new U,Od=new U,bc=new U,Sc=new U,Ir=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ss)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ss.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ss.copy(this.origin).addScaledVector(this.direction,t),Ss.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Od.copy(e).add(t).multiplyScalar(.5),bc.copy(t).sub(e).normalize(),Sc.copy(this.origin).sub(Od);let r=e.distanceTo(t)*.5,o=-this.direction.dot(bc),l=Sc.dot(this.direction),c=-Sc.dot(bc),a=Sc.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*c-l,u=o*l-c,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*l)+u*(o*d+u+2*c)+a}else u=r,d=Math.max(0,-(o*u+l)),f=-d*d+u*(u+2*c)+a;else u=-r,d=Math.max(0,-(o*u+l)),f=-d*d+u*(u+2*c)+a;else u<=-p?(d=Math.max(0,-(-o*r+l)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+a):u<=p?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+a):(d=Math.max(0,-(o*r+l)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+a);else u=o>0?-r:r,d=Math.max(0,-(o*u+l)),f=-d*d+u*(u+2*c)+a;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Od).addScaledVector(bc,u),f}intersectSphere(e,t){if(e.radius<0)return null;Ss.subVectors(e.center,this.origin);let n=Ss.dot(this.direction),s=Ss.dot(Ss)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,l,c,a=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return a>=0?(n=(e.min.x-u.x)*a,s=(e.max.x-u.x)*a):(n=(e.max.x-u.x)*a,s=(e.min.x-u.x)*a),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(l=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(l=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ss)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,l=this.direction,c=l.x,a=l.y,h=l.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,p=t.x-o.x,x=t.y-o.y,g=t.z-o.z,m=n.x-o.x,v=n.y-o.y,S=n.z-o.z,y=Math.abs(c),w=Math.abs(a),T=Math.abs(h),I,_,M,b,D,k,L,R,N,P,O,G;if(y>=w&&y>=T?(M=c,k=d,N=p,G=m,c>=0?(I=a,_=h,b=u,D=f,L=x,R=g,P=v,O=S):(I=h,_=a,b=f,D=u,L=g,R=x,P=S,O=v)):w>=T?(M=a,k=u,N=x,G=v,a>=0?(I=h,_=c,b=f,D=d,L=g,R=p,P=S,O=m):(I=c,_=h,b=d,D=f,L=p,R=g,P=m,O=S)):(M=h,k=f,N=g,G=S,h>=0?(I=c,_=a,b=d,D=u,L=p,R=x,P=m,O=v):(I=a,_=c,b=u,D=d,L=x,R=p,P=v,O=m)),M===0)return null;let F=I/M,z=_/M,Z=1/M,se=b-F*k,ce=D-z*k,Ce=L-F*N,X=R-z*N,Te=P-F*G,V=O-z*G,te=Te*X-V*Ce,be=se*V-ce*Te,Pe=Ce*ce-X*se;if(s){if(te<0||be<0||Pe<0)return null}else if((te<0||be<0||Pe<0)&&(te>0||be>0||Pe>0))return null;let $=te+be+Pe;if($===0)return null;let he=Z*(te*k+be*N+Pe*G);return($>0?he<0:he>0)?null:this.at(he/$,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},st=class extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=uf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Z0=new Ze,yr=new Ir,Ec=new ai,j0=new U,Tc=new U,wc=new U,Ac=new U,Fd=new U,Rc=new U,K0=new U,Cc=new U,ge=class extends pt{constructor(e=new vt,t=new st){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){Rc.set(0,0,0);for(let c=0,a=r.length;c<a;c++){let h=l[c],d=r[c];h!==0&&(Fd.fromBufferAttribute(d,e),o?Rc.addScaledVector(Fd,h):Rc.addScaledVector(Fd.sub(t),h))}t.add(Rc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ec.copy(n.boundingSphere),Ec.applyMatrix4(r),yr.copy(e.ray).recast(e.near),!(Ec.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Ec,j0)===null||yr.origin.distanceToSquared(j0)>(e.far-e.near)**2))&&(Z0.copy(r).invert(),yr.copy(e.ray).applyMatrix4(Z0),!(n.boundingBox!==null&&yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,l=r.index,c=r.attributes.position,a=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(l!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,w=S;y<w;y+=3){let T=l.getX(y),I=l.getX(y+1),_=l.getX(y+2);s=Pc(this,m,e,n,a,h,d,T,I,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=l.getX(g),S=l.getX(g+1),y=l.getX(g+2);s=Pc(this,o,e,n,a,h,d,v,S,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),S=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,w=S;y<w;y+=3){let T=y,I=y+1,_=y+2;s=Pc(this,m,e,n,a,h,d,T,I,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=g,S=g+1,y=g+2;s=Pc(this,o,e,n,a,h,d,v,S,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function T_(i,e,t,n,s,r,o,l){let c;if(e.side===Sn?c=n.intersectTriangle(o,r,s,!0,l):c=n.intersectTriangle(s,r,o,e.side===os,l),c===null)return null;Cc.copy(l),Cc.applyMatrix4(i.matrixWorld);let a=t.ray.origin.distanceTo(Cc);return a<t.near||a>t.far?null:{distance:a,point:Cc.clone(),object:i}}function Pc(i,e,t,n,s,r,o,l,c,a){i.getVertexPosition(l,Tc),i.getVertexPosition(c,wc),i.getVertexPosition(a,Ac);let h=T_(i,e,t,n,Tc,wc,Ac,K0);if(h){let d=new U;Ts.getBarycoord(K0,Tc,wc,Ac,d),s&&(h.uv=Ts.getInterpolatedAttribute(s,l,c,a,d,new ae)),r&&(h.uv1=Ts.getInterpolatedAttribute(r,l,c,a,d,new ae)),o&&(h.normal=Ts.getInterpolatedAttribute(o,l,c,a,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:l,b:c,c:a,normal:new U,materialIndex:0};Ts.getNormal(Tc,wc,Ac,u.normal),h.face=u,h.barycoord=d}return h}var _a=new At,$0=new At,J0=new At,w_=new At,Q0=new Ze,Ic=new U,Bd=new ai,em=new Ze,kd=new Ir,Rs=class extends ge{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qd,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ic),this.boundingBox.expandByPoint(Ic)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ai),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ic),this.boundingSphere.expandByPoint(Ic)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bd.copy(this.boundingSphere),Bd.applyMatrix4(s),e.ray.intersectsSphere(Bd)!==!1&&(em.copy(s).invert(),kd.copy(e.ray).applyMatrix4(em),!(this.boundingBox!==null&&kd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,kd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;$0.fromBufferAttribute(s.attributes.skinIndex,e),J0.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(_a.copy(t),t.set(0,0,0,0)):(_a.set(...t,1),t.set(0,0,0)),_a.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=J0.getComponent(r);if(o!==0){let l=$0.getComponent(r);Q0.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(w_.copy(_a).applyMatrix4(Q0),o)}}return t.isVector4&&(t.w=_a.w),t.applyMatrix4(this.bindMatrixInverse)}},es=class extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}},wi=class extends Mn{constructor(e=null,t=1,n=1,s,r,o,l,c,a=tn,h=tn,d,u){super(null,o,l,c,a,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},tm=new Ze,A_=new Ze,Cs=class i{constructor(e=[],t=[]){this.uuid=Ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let l=e[r]?e[r].matrixWorld:A_;tm.multiplyMatrices(l,t[r]),tm.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new wi(t,e,e,Qn,Xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Qe("Skeleton: No bone found with UUID:",r),o=new es),this.bones.push(o),this.boneInverses.push(new Ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let l=n[s];e.boneInverses.push(l.toArray())}return e}},xi=class extends ht{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Mo=new Ze,nm=new Ze,Lc=[],im=new bn,R_=new Ze,ya=new ge,Ma=new ai,Vn=class extends ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,R_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mo),im.copy(e.boundingBox).applyMatrix4(Mo),this.boundingBox.union(im)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mo),Ma.copy(e.boundingSphere).applyMatrix4(Mo),this.boundingSphere.union(Ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[o+l]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ya.geometry=this.geometry,ya.material=this.material,ya.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ma.copy(this.boundingSphere),Ma.applyMatrix4(n),e.ray.intersectsSphere(Ma)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mo),nm.multiplyMatrices(n,Mo),ya.matrixWorld=nm,ya.raycast(e,Lc);for(let o=0,l=Lc.length;o<l;o++){let c=Lc[o];c.instanceId=r,c.object=this,t.push(c)}Lc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wi(new Float32Array(s*this.count),s,this.count,Rh,Xn));let r=this.morphTexture.source.data.data,o=0;for(let a=0;a<n.length;a++)o+=n[a];let l=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=l,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Mr=new ai,C_=new ae(.5,.5),Dc=new U,Do=class{constructor(e=new Oi,t=new Oi,n=new Oi,s=new Oi,r=new Oi,o=new Oi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bi,n=!1){let s=this.planes,r=e.elements,o=r[0],l=r[1],c=r[2],a=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],v=r[12],S=r[13],y=r[14],w=r[15];if(s[0].setComponents(a-o,f-h,m-p,w-v).normalize(),s[1].setComponents(a+o,f+h,m+p,w+v).normalize(),s[2].setComponents(a+l,f+d,m+x,w+S).normalize(),s[3].setComponents(a-l,f-d,m-x,w-S).normalize(),n)s[4].setComponents(c,u,g,y).normalize(),s[5].setComponents(a-c,f-u,m-g,w-y).normalize();else if(s[4].setComponents(a-c,f-u,m-g,w-y).normalize(),t===Bi)s[5].setComponents(a+c,f+u,m+g,w+y).normalize();else if(t===Ro)s[5].setComponents(c,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){Mr.center.set(0,0,0);let t=C_.distanceTo(e.center);return Mr.radius=.7071067811865476+t,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Dc.x=s.normal.x>0?e.max.x:e.min.x,Dc.y=s.normal.y>0?e.max.y:e.min.y,Dc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var No=class extends Hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},th=new U,nh=new U,sm=new Ze,ba=new Ir,Nc=new ai,zd=new U,rm=new U,Lr=class extends pt{constructor(e=new vt,t=new No){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)th.fromBufferAttribute(t,s-1),nh.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=th.distanceTo(nh);e.setAttribute("lineDistance",new lt(n,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nc.copy(n.boundingSphere),Nc.applyMatrix4(s),Nc.radius+=r,e.ray.intersectsSphere(Nc)===!1)return;sm.copy(s).invert(),ba.copy(e.ray).applyMatrix4(sm);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,a=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=a){let m=h.getX(x),v=h.getX(x+1),S=Uc(this,e,ba,c,m,v,x);S&&t.push(S)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(f),m=Uc(this,e,ba,c,x,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=a){let m=Uc(this,e,ba,c,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Uc(this,e,ba,c,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Uc(i,e,t,n,s,r,o){let l=i.geometry.attributes.position;if(th.fromBufferAttribute(l,s),nh.fromBufferAttribute(l,r),t.distanceSqToSegment(th,nh,zd,rm)>n)return;zd.applyMatrix4(i.matrixWorld);let a=e.ray.origin.distanceTo(zd);if(!(a<e.near||a>e.far))return{distance:a,point:rm.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var om=new U,am=new U,Ua=class extends Lr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)om.fromBufferAttribute(t,s),am.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+om.distanceTo(am);e.setAttribute("lineDistance",new lt(n,1))}else Qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Oa=class extends Lr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Uo=class extends Hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lm=new Ze,Zd=new Ir,Oc=new ai,Fc=new U,Ps=class extends pt{constructor(e=new vt,t=new Uo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oc.copy(n.boundingSphere),Oc.applyMatrix4(s),Oc.radius+=r,e.ray.intersectsSphere(Oc)===!1)return;lm.copy(s).invert(),Zd.copy(e.ray).applyMatrix4(lm);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,a=n.index,d=n.attributes.position;if(a!==null){let u=Math.max(0,o.start),f=Math.min(a.count,o.start+o.count);for(let p=u,x=f;p<x;p++){let g=a.getX(p);Fc.fromBufferAttribute(d,g),cm(Fc,g,c,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,x=f;p<x;p++)Fc.fromBufferAttribute(d,p),cm(Fc,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function cm(i,e,t,n,s,r,o){let l=Zd.distanceSqToPoint(i);if(l<t){let c=new U;Zd.closestPointToPoint(i,c),c.applyMatrix4(n);let a=s.ray.origin.distanceTo(c);if(a<s.near||a>s.far)return;r.push({distance:a,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Fa=class extends Mn{constructor(e=[],t=rr,n,s,r,o,l,c,a,h){super(e,t,n,s,r,o,l,c,a,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gt=class extends Mn{constructor(e,t,n,s,r,o,l,c,a){super(e,t,n,s,r,o,l,c,a),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ts=class extends Mn{constructor(e,t,n=Gi,s,r,o,l=tn,c=tn,a,h=Qi,d=1){if(h!==Qi&&h!==ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,l,c,h,n,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Io(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ih=class extends ts{constructor(e,t=Gi,n=rr,s,r,o=tn,l=tn,c,a=Qi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,l,c,a),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ba=class extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ct=class i extends vt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],a=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(d,2));function p(x,g,m,v,S,y,w,T,I,_,M){let b=y/I,D=w/_,k=y/2,L=w/2,R=T/2,N=I+1,P=_+1,O=0,G=0,F=new U;for(let z=0;z<P;z++){let Z=z*D-L;for(let se=0;se<N;se++){let ce=se*b-k;F[x]=ce*v,F[g]=Z*S,F[m]=R,a.push(F.x,F.y,F.z),F[x]=0,F[g]=0,F[m]=T>0?1:-1,h.push(F.x,F.y,F.z),d.push(se/I),d.push(1-z/_),O+=1}}for(let z=0;z<_;z++)for(let Z=0;Z<I;Z++){let se=u+Z+N*z,ce=u+Z+N*(z+1),Ce=u+(Z+1)+N*(z+1),X=u+(Z+1)+N*z;c.push(se,ce,X),c.push(ce,Ce,X),G+=6}l.addGroup(f,G,M),f+=G,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var li=class i extends vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],l=[],c=[],a=new U,h=new ae;o.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;a.x=e*Math.cos(f),a.y=e*Math.sin(f),o.push(a.x,a.y,a.z),l.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},It=class i extends vt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:c};let a=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],g=n/2,m=0;v(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new lt(d,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(f,2));function v(){let y=new U,w=new U,T=0,I=(t-e)/n;for(let _=0;_<=r;_++){let M=[],b=_/r,D=b*(t-e)+e;for(let k=0;k<=s;k++){let L=k/s,R=L*c+l,N=Math.sin(R),P=Math.cos(R);w.x=D*N,w.y=-b*n+g,w.z=D*P,d.push(w.x,w.y,w.z),y.set(N,I,P).normalize(),u.push(y.x,y.y,y.z),f.push(L,1-b),M.push(p++)}x.push(M)}for(let _=0;_<s;_++)for(let M=0;M<r;M++){let b=x[M][_],D=x[M+1][_],k=x[M+1][_+1],L=x[M][_+1];(e>0||M!==0)&&(h.push(b,D,L),T+=3),(t>0||M!==r-1)&&(h.push(D,k,L),T+=3)}a.addGroup(m,T,0),m+=T}function S(y){let w=p,T=new ae,I=new U,_=0,M=y===!0?e:t,b=y===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,g*b,0),u.push(0,b,0),f.push(.5,.5),p++;let D=p;for(let k=0;k<=s;k++){let R=k/s*c+l,N=Math.cos(R),P=Math.sin(R);I.x=M*P,I.y=g*b,I.z=M*N,d.push(I.x,I.y,I.z),u.push(0,b,0),T.x=N*.5+.5,T.y=P*.5*b+.5,f.push(T.x,T.y),p++}for(let k=0;k<s;k++){let L=w+k,R=D+k;y===!0?h.push(R,R+1,L):h.push(R+1,R,L),_+=3}a.addGroup(m,_,y===!0?1:2),m+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Is=class i extends It{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,l=Math.PI*2){super(0,e,t,n,s,r,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Oo=class i extends vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];l(s),a(n),h(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(v){let S=new U,y=new U,w=new U;for(let T=0;T<t.length;T+=3)f(t[T+0],S),f(t[T+1],y),f(t[T+2],w),c(S,y,w,v)}function c(v,S,y,w){let T=w+1,I=[];for(let _=0;_<=T;_++){I[_]=[];let M=v.clone().lerp(y,_/T),b=S.clone().lerp(y,_/T),D=T-_;for(let k=0;k<=D;k++)k===0&&_===T?I[_][k]=M:I[_][k]=M.clone().lerp(b,k/D)}for(let _=0;_<T;_++)for(let M=0;M<2*(T-_)-1;M++){let b=Math.floor(M/2);M%2===0?(u(I[_][b+1]),u(I[_+1][b]),u(I[_][b])):(u(I[_][b+1]),u(I[_+1][b+1]),u(I[_+1][b]))}}function a(v){let S=new U;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(v),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function h(){let v=new U;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];let y=g(v)/2/Math.PI+.5,w=m(v)/Math.PI+.5;o.push(y,1-w)}p(),d()}function d(){for(let v=0;v<o.length;v+=6){let S=o[v+0],y=o[v+2],w=o[v+4],T=Math.max(S,y,w),I=Math.min(S,y,w);T>.9&&I<.1&&(S<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),w<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,S){let y=v*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function p(){let v=new U,S=new U,y=new U,w=new U,T=new ae,I=new ae,_=new ae;for(let M=0,b=0;M<r.length;M+=9,b+=6){v.set(r[M+0],r[M+1],r[M+2]),S.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),T.set(o[b+0],o[b+1]),I.set(o[b+2],o[b+3]),_.set(o[b+4],o[b+5]),w.copy(v).add(S).add(y).divideScalar(3);let D=g(w);x(T,b+0,v,D),x(I,b+2,S,D),x(_,b+4,y,D)}}function x(v,S,y,w){w<0&&v.x===1&&(o[S]=v.x-1),y.x===0&&y.z===0&&(o[S]=w/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},ka=class i extends Oo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let l=0,c=r-1,a;for(;l<=c;)if(s=Math.floor(l+(c-l)/2),a=n[s]-o,a<0)l=s+1;else if(a>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),l=this.getPoint(r),c=t||(o.isVector2?new ae:new U);return c.copy(l).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,s=[],r=[],o=[],l=new U,c=new Ze;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new U)}r[0]=new U,o[0]=new U;let a=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=a&&(a=h,n.set(1,0,0)),d<=a&&(a=d,n.set(0,1,0)),u<=a&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),l.crossVectors(s[f-1],s[f]),l.length()>Number.EPSILON){l.normalize();let p=Math.acos(xt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(l,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(xt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(l.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Fo=class extends vi{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=c}getPoint(e,t=new ae){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(l),a=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=a-this.aY;c=u*h-f*d+this.aX,a=u*d+f*h+this.aY}return n.set(c,a)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},sh=class extends Fo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Sf(){let i=0,e=0,t=0,n=0;function s(r,o,l,c){i=r,e=l,t=-3*r+3*o-2*l-c,n=2*r-2*o+l+c}return{initCatmullRom:function(r,o,l,c,a){s(o,l,a*(l-r),a*(c-o))},initNonuniformCatmullRom:function(r,o,l,c,a,h,d){let u=(o-r)/a-(l-r)/(a+h)+(l-o)/h,f=(l-o)/h-(c-o)/(h+d)+(c-l)/d;u*=h,f*=h,s(o,l,u,f)},calc:function(r){let o=r*r,l=o*r;return i+e*r+t*o+n*l}}}var hm=new U,um=new U,Hd=new Sf,Gd=new Sf,Vd=new Sf,rh=class extends vi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,l=Math.floor(o),c=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:c===0&&l===r-1&&(l=r-2,c=1);let a,h;this.closed||l>0?a=s[(l-1)%r]:(um.subVectors(s[0],s[1]).add(s[0]),a=um);let d=s[l%r],u=s[(l+1)%r];if(this.closed||l+2<r?h=s[(l+2)%r]:(hm.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=hm),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(a.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Hd.initNonuniformCatmullRom(a.x,d.x,u.x,h.x,p,x,g),Gd.initNonuniformCatmullRom(a.y,d.y,u.y,h.y,p,x,g),Vd.initNonuniformCatmullRom(a.z,d.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Hd.initCatmullRom(a.x,d.x,u.x,h.x,this.tension),Gd.initCatmullRom(a.y,d.y,u.y,h.y,this.tension),Vd.initCatmullRom(a.z,d.z,u.z,h.z,this.tension));return n.set(Hd.calc(c),Gd.calc(c),Vd.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function dm(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,l=i*i,c=i*l;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*l+r*i+t}function P_(i,e){let t=1-i;return t*t*e}function I_(i,e){return 2*(1-i)*i*e}function L_(i,e){return i*i*e}function wa(i,e,t,n){return P_(i,e)+I_(i,t)+L_(i,n)}function D_(i,e){let t=1-i;return t*t*t*e}function N_(i,e){let t=1-i;return 3*t*t*i*e}function U_(i,e){return 3*(1-i)*i*i*e}function O_(i,e){return i*i*i*e}function Aa(i,e,t,n,s){return D_(i,e)+N_(i,t)+U_(i,n)+O_(i,s)}var za=class extends vi{constructor(e=new ae,t=new ae,n=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ae){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Aa(e,s.x,r.x,o.x,l.x),Aa(e,s.y,r.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oh=class extends vi{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Aa(e,s.x,r.x,o.x,l.x),Aa(e,s.y,r.y,o.y,l.y),Aa(e,s.z,r.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ha=class extends vi{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ah=class extends vi{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ga=class extends vi{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(wa(e,s.x,r.x,o.x),wa(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lh=class extends vi{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(wa(e,s.x,r.x,o.x),wa(e,s.y,r.y,o.y),wa(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Va=class extends vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),l=r-o,c=s[o===0?o:o-1],a=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(dm(l,c.x,a.x,h.x,d.x),dm(l,c.y,a.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},jd=Object.freeze({__proto__:null,ArcCurve:sh,CatmullRomCurve3:rh,CubicBezierCurve:za,CubicBezierCurve3:oh,EllipseCurve:Fo,LineCurve:Ha,LineCurve3:ah,QuadraticBezierCurve:Ga,QuadraticBezierCurve3:lh,SplineCurve:Va}),ch=class extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,l=this.curves[r],c=l.getLength(),a=c===0?0:1-o/c;return l.getPointAt(a,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(l);for(let a=0;a<c.length;a++){let h=c[a];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new jd[s.type]().fromJSON(s))}return this}},Wa=class extends ch{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ha(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ga(this.currentPoint.clone(),new ae(e,t),new ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let l=new za(this.currentPoint.clone(),new ae(e,t),new ae(n,s),new ae(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Va(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+l,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,l,c){let a=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+a,t+h,n,s,r,o,l,c),this}absellipse(e,t,n,s,r,o,l,c){let a=new Fo(e,t,n,s,r,o,l,c);if(this.curves.length>0){let d=a.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(a);let h=a.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Bo=class extends Wa{constructor(e){super(e),this.uuid=Ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Wa().fromJSON(s))}return this}};function F_(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=ag(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let l,c,a;if(n&&(r=G_(i,e,r,t)),i.length>80*t){l=i[0],c=i[1];let h=l,d=c;for(let u=t;u<s;u+=t){let f=i[u],p=i[u+1];f<l&&(l=f),p<c&&(c=p),f>h&&(h=f),p>d&&(d=p)}a=Math.max(h-l,d-c),a=a!==0?32767/a:0}return Xa(r,o,t,l,c,a,0),o}function ag(i,e,t,n,s){let r;if(s===Q_(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=fm(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=fm(o/n|0,i[o],i[o+1],r);return r&&ko(r,r.next)&&(Ya(r),r=r.next),r}function Dr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ko(t,t.next)||rn(t.prev,t,t.next)===0)){if(Ya(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Xa(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Y_(i,n,s,r);let l=i;for(;i.prev!==i.next;){let c=i.prev,a=i.next;if(r?k_(i,n,s,r):B_(i)){e.push(c.i,i.i,a.i),Ya(i),i=a.next,l=a.next;continue}if(i=a,i===l){o?o===1?(i=z_(Dr(i),e),Xa(i,e,t,n,s,r,2)):o===2&&H_(i,e,t,n,s,r):Xa(Dr(i),e,t,n,s,r,1);break}}}function B_(i){let e=i.prev,t=i,n=i.next;if(rn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,l=e.y,c=t.y,a=n.y,h=Math.min(s,r,o),d=Math.min(l,c,a),u=Math.max(s,r,o),f=Math.max(l,c,a),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Sa(s,l,r,c,o,a,p.x,p.y)&&rn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function k_(i,e,t,n){let s=i.prev,r=i,o=i.next;if(rn(s,r,o)>=0)return!1;let l=s.x,c=r.x,a=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(l,c,a),p=Math.min(h,d,u),x=Math.max(l,c,a),g=Math.max(h,d,u),m=Kd(f,p,e,t,n),v=Kd(x,g,e,t,n),S=i.prevZ,y=i.nextZ;for(;S&&S.z>=m&&y&&y.z<=v;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=g&&S!==s&&S!==o&&Sa(l,h,c,d,a,u,S.x,S.y)&&rn(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&Sa(l,h,c,d,a,u,y.x,y.y)&&rn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=m;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=g&&S!==s&&S!==o&&Sa(l,h,c,d,a,u,S.x,S.y)&&rn(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&Sa(l,h,c,d,a,u,y.x,y.y)&&rn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function z_(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ko(n,s)&&cg(n,t,t.next,s)&&qa(n,s)&&qa(s,n)&&(e.push(n.i,t.i,s.i),Ya(t),Ya(t.next),t=i=s),t=t.next}while(t!==i);return Dr(t)}function H_(i,e,t,n,s,r){let o=i;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&K_(o,l)){let c=hg(o,l);o=Dr(o,o.next),c=Dr(c,c.next),Xa(o,e,t,n,s,r,0),Xa(c,e,t,n,s,r,0);return}l=l.next}o=o.next}while(o!==i)}function G_(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let l=e[r]*n,c=r<o-1?e[r+1]*n:i.length,a=ag(i,l,c,n,!1);a===a.next&&(a.steiner=!0),s.push(j_(a))}s.sort(V_);for(let r=0;r<s.length;r++)t=W_(s[r],t);return t}function V_(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function W_(i,e){let t=X_(i,e);if(!t)return e;let n=hg(t,i);return Dr(n,n.next),Dr(t,t.next)}function X_(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(ko(i,t))return t;do{if(ko(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let l=o,c=o.x,a=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&lg(s<a?n:r,s,c,a,s<a?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);qa(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&q_(o,t)))&&(o=t,h=d)}t=t.next}while(t!==l);return o}function q_(i,e){return rn(i.prev,i,e.prev)<0&&rn(e.next,i,i.next)<0}function Y_(i,e,t,n){let s=i;do s.z===0&&(s.z=Kd(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Z_(s)}function Z_(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,l=0;for(let a=0;a<t&&(l++,o=o.nextZ,!!o);a++);let c=t;for(;l>0||c>0&&o;)l!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,l--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Kd(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function j_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function lg(i,e,t,n,s,r,o,l){return(s-o)*(e-l)>=(i-o)*(r-l)&&(i-o)*(n-l)>=(t-o)*(e-l)&&(t-o)*(r-l)>=(s-o)*(n-l)}function Sa(i,e,t,n,s,r,o,l){return!(i===o&&e===l)&&lg(i,e,t,n,s,r,o,l)}function K_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!$_(i,e)&&(qa(i,e)&&qa(e,i)&&J_(i,e)&&(rn(i.prev,i,e.prev)||rn(i,e.prev,e))||ko(i,e)&&rn(i.prev,i,i.next)>0&&rn(e.prev,e,e.next)>0)}function rn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ko(i,e){return i.x===e.x&&i.y===e.y}function cg(i,e,t,n){let s=kc(rn(i,e,t)),r=kc(rn(i,e,n)),o=kc(rn(t,n,i)),l=kc(rn(t,n,e));return!!(s!==r&&o!==l||s===0&&Bc(i,t,e)||r===0&&Bc(i,n,e)||o===0&&Bc(t,i,n)||l===0&&Bc(t,e,n))}function Bc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function kc(i){return i>0?1:i<0?-1:0}function $_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&cg(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function qa(i,e){return rn(i.prev,i,i.next)<0?rn(i,e,i.next)>=0&&rn(i,i.prev,e)>=0:rn(i,e,i.prev)<0||rn(i,i.next,e)<0}function J_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function hg(i,e){let t=$d(i.i,i.x,i.y),n=$d(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function fm(i,e,t,n){let s=$d(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ya(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $d(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Q_(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Jd=class{static triangulate(e,t,n=2){return F_(e,t,n)}},Er=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];pm(e),mm(n,e);let o=e.length;t.forEach(pm);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,mm(n,t[c]);let l=Jd.triangulate(n,s);for(let c=0;c<l.length;c+=3)r.push(l.slice(c,c+3));return r}};function pm(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function mm(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Za=class i extends vt{constructor(e=new Bo([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let l=0,c=e.length;l<c;l++){let a=e[l];o(a)}this.setAttribute("position",new lt(s,3)),this.setAttribute("uv",new lt(r,2)),this.computeVertexNormals();function o(l){let c=[],a=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:ey,S,y=!1,w,T,I,_;if(m){S=m.getSpacedPoints(h),y=!0,u=!1;let ie=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(h,ie),T=new U,I=new U,_=new U}u||(g=0,f=0,p=0,x=0);let M=l.extractPoints(a),b=M.shape,D=M.holes;if(!Er.isClockWise(b)){b=b.reverse();for(let ie=0,ue=D.length;ie<ue;ie++){let ve=D[ie];Er.isClockWise(ve)&&(D[ie]=ve.reverse())}}function L(ie){let ve=10000000000000001e-36,de=ie[0];for(let Se=1;Se<=ie.length;Se++){let We=Se%ie.length,ze=ie[We],je=ze.x-de.x,et=ze.y-de.y,H=je*je+et*et,dt=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(de.x),Math.abs(de.y)),rt=ve*dt*dt;if(H<=rt){ie.splice(We,1),Se--;continue}de=ze}}L(b),D.forEach(L);let R=D.length,N=b;for(let ie=0;ie<R;ie++){let ue=D[ie];b=b.concat(ue)}function P(ie,ue,ve){return ue||ot("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(ue,ve)}let O=b.length;function G(ie,ue,ve){let de,Se,We,ze=ie.x-ue.x,je=ie.y-ue.y,et=ve.x-ie.x,H=ve.y-ie.y,dt=ze*ze+je*je,rt=ze*H-je*et;if(Math.abs(rt)>Number.EPSILON){let B=Math.sqrt(dt),E=Math.sqrt(et*et+H*H),Y=ue.x-je/B,K=ue.y+ze/B,ne=ve.x-H/E,Ee=ve.y+et/E,Re=((ne-Y)*H-(Ee-K)*et)/(ze*H-je*et);de=Y+ze*Re-ie.x,Se=K+je*Re-ie.y;let le=de*de+Se*Se;if(le<=2)return new ae(de,Se);We=Math.sqrt(le/2)}else{let B=!1;ze>Number.EPSILON?et>Number.EPSILON&&(B=!0):ze<-Number.EPSILON?et<-Number.EPSILON&&(B=!0):Math.sign(je)===Math.sign(H)&&(B=!0),B?(de=-je,Se=ze,We=Math.sqrt(dt)):(de=ze,Se=je,We=Math.sqrt(dt/2))}return new ae(de/We,Se/We)}let F=[];for(let ie=0,ue=N.length,ve=ue-1,de=ie+1;ie<ue;ie++,ve++,de++)ve===ue&&(ve=0),de===ue&&(de=0),F[ie]=G(N[ie],N[ve],N[de]);let z=[],Z,se=F.concat();for(let ie=0,ue=R;ie<ue;ie++){let ve=D[ie];Z=[];for(let de=0,Se=ve.length,We=Se-1,ze=de+1;de<Se;de++,We++,ze++)We===Se&&(We=0),ze===Se&&(ze=0),Z[de]=G(ve[de],ve[We],ve[ze]);z.push(Z),se=se.concat(Z)}let ce;if(g===0)ce=Er.triangulateShape(N,D);else{let ie=[],ue=[];for(let ve=0;ve<g;ve++){let de=ve/g,Se=f*Math.cos(de*Math.PI/2),We=p*Math.sin(de*Math.PI/2)+x;for(let ze=0,je=N.length;ze<je;ze++){let et=P(N[ze],F[ze],We);be(et.x,et.y,-Se),de===0&&ie.push(et)}for(let ze=0,je=R;ze<je;ze++){let et=D[ze];Z=z[ze];let H=[];for(let dt=0,rt=et.length;dt<rt;dt++){let B=P(et[dt],Z[dt],We);be(B.x,B.y,-Se),de===0&&H.push(B)}de===0&&ue.push(H)}}ce=Er.triangulateShape(ie,ue)}let Ce=ce.length,X=p+x;for(let ie=0;ie<O;ie++){let ue=u?P(b[ie],se[ie],X):b[ie];y?(I.copy(w.normals[0]).multiplyScalar(ue.x),T.copy(w.binormals[0]).multiplyScalar(ue.y),_.copy(S[0]).add(I).add(T),be(_.x,_.y,_.z)):be(ue.x,ue.y,0)}for(let ie=1;ie<=h;ie++)for(let ue=0;ue<O;ue++){let ve=u?P(b[ue],se[ue],X):b[ue];y?(I.copy(w.normals[ie]).multiplyScalar(ve.x),T.copy(w.binormals[ie]).multiplyScalar(ve.y),_.copy(S[ie]).add(I).add(T),be(_.x,_.y,_.z)):be(ve.x,ve.y,d/h*ie)}for(let ie=g-1;ie>=0;ie--){let ue=ie/g,ve=f*Math.cos(ue*Math.PI/2),de=p*Math.sin(ue*Math.PI/2)+x;for(let Se=0,We=N.length;Se<We;Se++){let ze=P(N[Se],F[Se],de);be(ze.x,ze.y,d+ve)}for(let Se=0,We=D.length;Se<We;Se++){let ze=D[Se];Z=z[Se];for(let je=0,et=ze.length;je<et;je++){let H=P(ze[je],Z[je],de);y?be(H.x,H.y+S[h-1].y,S[h-1].x+ve):be(H.x,H.y,d+ve)}}}Te(),V();function Te(){let ie=s.length/3;if(u){let ue=0,ve=O*ue;for(let de=0;de<Ce;de++){let Se=ce[de];Pe(Se[2]+ve,Se[1]+ve,Se[0]+ve)}ue=h+g*2,ve=O*ue;for(let de=0;de<Ce;de++){let Se=ce[de];Pe(Se[0]+ve,Se[1]+ve,Se[2]+ve)}}else{for(let ue=0;ue<Ce;ue++){let ve=ce[ue];Pe(ve[2],ve[1],ve[0])}for(let ue=0;ue<Ce;ue++){let ve=ce[ue];Pe(ve[0]+O*h,ve[1]+O*h,ve[2]+O*h)}}n.addGroup(ie,s.length/3-ie,0)}function V(){let ie=s.length/3,ue=0;te(N,ue),ue+=N.length;for(let ve=0,de=D.length;ve<de;ve++){let Se=D[ve];te(Se,ue),ue+=Se.length}n.addGroup(ie,s.length/3-ie,1)}function te(ie,ue){let ve=ie.length;for(;--ve>=0;){let de=ve,Se=ve-1;Se<0&&(Se=ie.length-1);for(let We=0,ze=h+g*2;We<ze;We++){let je=O*We,et=O*(We+1),H=ue+de+je,dt=ue+Se+je,rt=ue+Se+et,B=ue+de+et;$(H,dt,rt,B)}}}function be(ie,ue,ve){c.push(ie),c.push(ue),c.push(ve)}function Pe(ie,ue,ve){he(ie),he(ue),he(ve);let de=s.length/3,Se=v.generateTopUV(n,s,de-3,de-2,de-1);_e(Se[0]),_e(Se[1]),_e(Se[2])}function $(ie,ue,ve,de){he(ie),he(ue),he(de),he(ue),he(ve),he(de);let Se=s.length/3,We=v.generateSideWallUV(n,s,Se-6,Se-3,Se-2,Se-1);_e(We[0]),_e(We[1]),_e(We[3]),_e(We[1]),_e(We[2]),_e(We[3])}function he(ie){s.push(c[ie*3+0]),s.push(c[ie*3+1]),s.push(c[ie*3+2])}function _e(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ty(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let l=t[e.shapes[r]];n.push(l)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new jd[s.type]().fromJSON(s)),new i(n,e.options)}},ey={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],l=e[n*3],c=e[n*3+1],a=e[s*3],h=e[s*3+1];return[new ae(r,o),new ae(l,c),new ae(a,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],l=e[t*3+1],c=e[t*3+2],a=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(l-h)<Math.abs(o-a)?[new ae(o,1-c),new ae(a,1-d),new ae(u,1-p),new ae(x,1-m)]:[new ae(l,1-c),new ae(h,1-d),new ae(f,1-p),new ae(g,1-m)]}};function ty(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Nr=class i extends Oo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ja=class i extends vt{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=xt(s,0,Math.PI*2);let r=[],o=[],l=[],c=[],a=[],h=1/t,d=new U,u=new ae,f=new U,p=new U,x=new U,g=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(p)}for(let v=0;v<=t;v++){let S=n+v*h*s,y=Math.sin(S),w=Math.cos(S);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*y,d.y=e[T].y,d.z=e[T].x*w,o.push(d.x,d.y,d.z),u.x=v/t,u.y=T/(e.length-1),l.push(u.x,u.y);let I=c[3*T+0]*y,_=c[3*T+1],M=c[3*T+0]*w;a.push(I,_,M)}}for(let v=0;v<t;v++)for(let S=0;S<e.length-1;S++){let y=S+v*e.length,w=y,T=y+e.length,I=y+e.length+1,_=y+1;r.push(w,T,_),r.push(I,_,T)}this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("uv",new lt(l,2)),this.setAttribute("normal",new lt(a,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Ka=class i extends Oo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},an=class i extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,l=Math.floor(n),c=Math.floor(s),a=l+1,h=c+1,d=e/l,u=t/c,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let v=m*u-o;for(let S=0;S<a;S++){let y=S*d-r;p.push(y,-v,0),x.push(0,0,1),g.push(S/l),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<l;v++){let S=v+a*m,y=v+a*(m+1),w=v+1+a*(m+1),T=v+1+a*m;f.push(S,y,T),f.push(y,w,T)}this.setIndex(f),this.setAttribute("position",new lt(p,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ns=class i extends vt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let l=[],c=[],a=[],h=[],d=e,u=(t-e)/s,f=new U,p=new ae;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let m=r+g/n*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),a.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}d+=u}for(let x=0;x<s;x++){let g=x*(n+1);for(let m=0;m<n;m++){let v=m+g,S=v,y=v+n+1,w=v+n+2,T=v+1;l.push(S,y,T),l.push(y,w,T)}}this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(a,3)),this.setAttribute("uv",new lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Jt=class i extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+l,Math.PI),a=0,h=[],d=new U,u=new U,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let v=[],S=m/n,y=o+S*l,w=e*Math.cos(y),T=Math.sqrt(e*e-w*w),I=0;m===0&&o===0?I=.5/t:m===n&&c===Math.PI&&(I=-.5/t);for(let _=0;_<=t;_++){let M=_/t,b=s+M*r;d.x=-T*Math.cos(b),d.y=w,d.z=T*Math.sin(b),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(M+I,1-S),v.push(a++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let S=h[m][v+1],y=h[m][v],w=h[m+1][v],T=h[m+1][v+1];(m!==0||o>0)&&f.push(S,y,T),(m!==n-1||c<Math.PI)&&f.push(y,w,T)}this.setIndex(f),this.setAttribute("position",new lt(p,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var _i=class i extends vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:l},n=Math.floor(n),s=Math.floor(s);let c=[],a=[],h=[],d=[],u=new U,f=new U,p=new U;for(let x=0;x<=n;x++){let g=o+x/n*l;for(let m=0;m<=s;m++){let v=m/s*r;f.x=(e+t*Math.cos(g))*Math.cos(v),f.y=(e+t*Math.cos(g))*Math.sin(v),f.z=t*Math.sin(g),a.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,v=(s+1)*(x-1)+g-1,S=(s+1)*(x-1)+g,y=(s+1)*x+g;c.push(m,v,y),c.push(v,S,y)}this.setIndex(c),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Yr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(gm(s))s.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(gm(s[0])){let r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function qn(i){let e={};for(let t=0;t<i.length;t++){let n=Yr(i[t]);for(let s in n)e[s]=n[s]}return e}function gm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ny(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ef(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var Nn={clone:Yr,merge:qn},iy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bt=class extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iy,this.fragmentShader=sy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=ny(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new me().setHex(s.value);break;case"v2":this.uniforms[n].value=new ae().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new At().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ut().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ze().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},zo=class extends bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ge=class extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ci=class extends Ge{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var $a=class extends Hn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var hh=class extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},uh=class extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function er(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Wc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function ry(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function xm(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let l=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[l+c]}return s}function oy(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var is=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let l=n+o>>>1;e<t[l]?o=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dh=class extends is{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:br,endingEnd:br}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,l=s[r],c=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case Sr:r=e,l=2*t-n;break;case Ra:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Sr:o=e,c=2*n-t;break;case Ra:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let a=(n-t)*.5,h=this.valueSize;this._weightPrev=a/(t-l),this._weightNext=a/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,a=c-l,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,v=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,S=(-1-f)*g+(1.5+f)*x+.5*p,y=f*g-f*x;for(let w=0;w!==l;++w)r[w]=m*o[h+w]+v*o[a+w]+S*o[c+w]+y*o[d+w];return r}},Ja=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,a=c-l,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==l;++u)r[u]=o[a+u]*d+o[c+u]*h;return r}},fh=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ph=class extends is{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,a=c-l,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(s-t),x=1-p;for(let g=0;g!==l;++g)r[g]=o[a+g]*x+o[c+g]*p;return r}let u=l*2,f=e-1;for(let p=0;p!==l;++p){let x=o[a+p],g=o[c+p],m=f*u+p*2,v=d[m],S=d[m+1],y=e*u+p*2,w=h[y],T=h[y+1],I=ly(n,t,v,w,s);r[p]=ug(I,x,S,T,g)}return r}};function ug(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function ay(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function ly(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let l=ug(r,e,t,n,s)-i;if(Math.abs(l)<1e-10)break;let c=ay(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var hi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=er(t,this.TimeBufferType),this.values=er(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:er(e.times,Array),values:er(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Wc(e.settings)&&(n.settings={inTangents:er(e.settings.inTangents,Array),outTangents:er(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ph(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case wr:t=this.InterpolantFactoryMethodDiscrete;break;case Ar:t=this.InterpolantFactoryMethodLinear;break;case Gc:t=this.InterpolantFactoryMethodSmooth;break;case Yd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wr;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return Gc;case this.InterpolantFactoryMethodBezier:return Yd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Wc(this.settings)&&(vm(this.settings.inTangents,e),vm(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){ot("KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(o!==null&&o>c){ot("KeyframeTrack: Out of order keys.",this,l,c,o),e=!1;break}o=c}if(s!==void 0&&Vv(s))for(let l=0,c=s.length;l!==c;++l){let a=s[l];if(isNaN(a)){ot("KeyframeTrack: Value is not a valid number.",this,l,a),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Gc,r=e.length-1,o=1;for(let l=1;l<r;++l){let c=!1,a=e[l],h=e[l+1];if(a!==h&&(l!==1||a!==e[0]))if(s)c=!0;else{let d=l*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=t[d+p];if(x!==t[u+p]||x!==t[f+p]){c=!0;break}}}if(c){if(l!==o){e[o]=e[l];let d=l*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,c=o*n,a=0;a!==n;++a)t[c+a]=t[l+a];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Wc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function vm(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}hi.prototype.ValueTypeName="";hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=Ar;var Ls=class extends hi{constructor(e,t,n){super(e,t,n)}};Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=wr;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}};Qa.prototype.ValueTypeName="color";var Ds=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}};Ds.prototype.ValueTypeName="number";var mh=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=(n-t)/(s-t),a=e*l;for(let h=a+l;a!==h;a+=4)on.slerpFlat(r,0,o,a-l,o,a,c);return r}},Ns=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new mh(this.times,this.values,this.getValueSize(),e)}};Ns.prototype.ValueTypeName="quaternion";Ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Us=class extends hi{constructor(e,t,n){super(e,t,n)}};Us.prototype.ValueTypeName="string";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=wr;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;var sr=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}};sr.prototype.ValueTypeName="vector";var Ur=class{constructor(e="",t=-1,n=[],s=cu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Ti(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,l=n.length;o!==l;++o)t.push(hy(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(hi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let l=0;l<r;l++){let c=[],a=[];c.push((l+r-1)%r,l,(l+1)%r),a.push(0,1,0);let h=ry(c);c=xm(c,1,h),a=xm(a,1,h),!s&&c[0]===0&&(c.push(r),a.push(a[0])),o.push(new Ds(".morphTargetInfluences["+t[l].name+"]",c,a).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let l=0,c=e.length;l<c;l++){let a=e[l],h=a.name.match(r);if(h&&h.length>1){let d=h[1],u=s[d];u||(s[d]=u=[]),u.push(a)}}let o=[];for(let l in s)o.push(this.CreateFromMorphTargetSequence(l,s[l],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function cy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ds;case"vector":case"vector2":case"vector3":case"vector4":return sr;case"color":return Qa;case"quaternion":return Ns;case"bool":case"boolean":return Ls;case"string":return Us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function hy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=cy(i.type);if(i.times===void 0){let n=[],s=[];oy(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Wc(i.settings)&&(t.settings={inTangents:er(i.settings.inTangents,Float32Array),outTangents:er(i.settings.outTangents,Float32Array)}),t}var Ji={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(_m(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!_m(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function _m(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var gh=class{constructor(e,t,n){let s=this,r=!1,o=0,l=0,c,a=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,l),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return a.push(h,d),this},this.removeHandler=function(h){let d=a.indexOf(h);return d!==-1&&a.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=a.length;d<u;d+=2){let f=a[d],p=a[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},dg=new gh,zi=class{constructor(e){this.manager=e!==void 0?e:dg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};zi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Es={},Qd=class extends Error{constructor(e,t){super(e),this.response=t}},Or=class extends zi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ji.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Es[e]!==void 0){Es[e].push({onLoad:t,onProgress:n,onError:s});return}Es[e]=[],Es[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),l=this.mimeType,c=this.responseType;fetch(o).then(a=>{if(a.status===200||a.status===0){if(a.status===0&&Qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||a.body===void 0||a.body.getReader===void 0)return a;let h=Es[e],d=a.body.getReader(),u=a.headers.get("X-File-Size")||a.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0,x=0,g=new ReadableStream({start(m){v();function v(){d.read().then(({done:S,value:y})=>{if(S)m.close();else{x+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let T=0,I=h.length;T<I;T++){let _=h[T];_.onProgress&&_.onProgress(w)}m.enqueue(y),v()}},S=>{m.error(S)})}}});return new Response(g)}else throw new Qd(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`,a)}).then(a=>{switch(c){case"arraybuffer":return a.arrayBuffer();case"blob":return a.blob();case"document":return a.text().then(h=>new DOMParser().parseFromString(h,l));case"json":return a.json();default:if(l==="")return a.text();{let d=/charset="?([^;"\s]*)"?/i.exec(l),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return a.arrayBuffer().then(p=>f.decode(p))}}}).then(a=>{Ji.add(`file:${e}`,a);let h=Es[e];delete Es[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(a)}}).catch(a=>{let h=Es[e];if(h===void 0)throw this.manager.itemError(e),a;delete Es[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(a)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var bo=new WeakMap,xh=class extends zi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ji.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=bo.get(o);d===void 0&&(d=[],bo.set(o,d)),d.push({onLoad:t,onError:s})}return o}let l=Co("img");function c(){h(),t&&t(this);let d=bo.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}bo.delete(this),r.manager.itemEnd(e)}function a(d){h(),s&&s(d),Ji.remove(`image:${e}`);let u=bo.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}bo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){l.removeEventListener("load",c,!1),l.removeEventListener("error",a,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",a,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),Ji.add(`image:${e}`,l),r.manager.itemStart(e),l.src=e,l}};var el=class extends zi{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new wi,l=new Or(this.manager);return l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setPath(this.path),l.setWithCredentials(r.withCredentials),l.load(e,function(c){let a;try{a=r.parse(c)}catch(h){s!==void 0?s(h):ot(h);return}r._applyTexData(o,a),t&&t(o,a)},n,s),o}createDataTexture(e){let t=new wi;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Cn,e.wrapT=t.wrapT!==void 0?t.wrapT:Cn,e.magFilter=t.magFilter!==void 0?t.magFilter:Xt,e.minFilter=t.minFilter!==void 0?t.minFilter:Xt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=di),t.mipmapCount===1&&(e.minFilter=Xt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},ui=class extends zi{constructor(e){super(e)}load(e,t,n,s){let r=new Mn,o=new xh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Fr=class extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Br=class extends Fr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Wd=new Ze,ym=new U,Mm=new U,Ho=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Do,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ym.setFromMatrixPosition(e.matrixWorld),t.position.copy(ym),Mm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Wd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Wd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,a=s?s.y/r.y:0;e.coordinateSystem===Ro||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+a,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+a,0,0,.5,.5,0,0,0,1),t.multiply(Wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},zc=new U,Hc=new on,$i=new U,tl=class extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zc,Hc,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Hc,$i.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(zc,Hc,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Hc,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qs=new U,bm=new ae,Sm=new ae,gn=class extends tl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qs.x,Qs.y).multiplyScalar(-e/Qs.z),Qs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qs.x,Qs.y).multiplyScalar(-e/Qs.z)}getViewSize(e,t){return this.getViewBounds(e,bm,Sm),t.subVectors(Sm,bm)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ea*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,a=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/a,s*=o.width/c,n*=o.height/a}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ef=class extends Ho{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Rr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},kr=class extends Fr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ef}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},tf=class extends Ho{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}},ss=class extends Fr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new tf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},rs=class extends tl{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let a=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=a*this.view.offsetX,o=r+a*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nf=class extends Ho{constructor(){super(new rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Os=class extends Fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new nf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Fs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Xd=new WeakMap,nl=class extends zi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ji.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(a=>{Xd.has(o)===!0?(s&&s(Xd.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(a),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader,l.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,l).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(a){return Ji.add(`image-bitmap:${e}`,a),t&&t(a),r.manager.itemEnd(e),a}).catch(function(a){s&&s(a),Xd.set(c,a),Ji.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ji.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var So=-90,Eo=1,vh=class extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(So,Eo,e,t);s.layers=this.layers,this.add(s);let r=new gn(So,Eo,e,t);r.layers=this.layers,this.add(r);let o=new gn(So,Eo,e,t);o.layers=this.layers,this.add(o);let l=new gn(So,Eo,e,t);l.layers=this.layers,this.add(l);let c=new gn(So,Eo,e,t);c.layers=this.layers,this.add(c);let a=new gn(So,Eo,e,t);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,l,c]=t;for(let a of t)this.remove(a);if(e===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let a of t)this.add(a),a.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,l,c,a,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},_h=class extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},il=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=uy.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function uy(){this._document.hidden===!1&&this.reset()}var yh=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let l=0;l!==s;++l)n[r+l]=n[l];o=t}else{o+=t;let l=t/o;this._mixBufferRegion(n,r,0,l,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,l=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,a=t+t;c!==a;++c)if(n[c]!==n[c+t]){l.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){on.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;on.multiplyQuaternionsFlat(e,o,e,t,e,n),on.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let l=0;l!==r;++l){let c=t+l;e[c]=e[c]*o+e[n+l]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]+e[n+o]*s}}},Tf="\\[\\]\\.:\\/",dy=new RegExp("["+Tf+"]","g"),wf="[^"+Tf+"]",fy="[^"+Tf.replace("\\.","")+"]",py=/((?:WC+[\/:])*)/.source.replace("WC",wf),my=/(WCOD+)?/.source.replace("WCOD",fy),gy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wf),xy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wf),vy=new RegExp("^"+py+my+gy+xy+"$"),_y=["material","materials","bones","map"],sf=class{constructor(e,t,n){let s=n||Ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ht=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dy,"")}static parseTrackName(e){let t=vy.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_y.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===t||l.uuid===t)return l;let c=n(l.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let a=t.objectIndex;switch(n){case"materials":if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===a){a=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(a!==void 0){if(e[a]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[a]}}let o=e[s];if(o===void 0){let a=t.nodeName;ot("PropertyBinding: Trying to update property for track: "+a+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ht.Composite=sf;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mh=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,l=new Array(o),c={endingStart:br,endingEnd:br};for(let a=0;a!==o;++a){let h=r[a].createInterpolant(null);l[a]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=l,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=lu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,l=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(l,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,l=this._timeScaleInterpolant;l===null&&(l=s._lendControlInterpolant(),this._timeScaleInterpolant=l);let c=l.parameterPositions,a=l.sampleValues;return c[0]=r,c[1]=r+n,a[0]=e/o,a[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),l=this._updateWeight(e);if(l>0){let c=this._interpolants,a=this._propertyBindings;switch(this.blendMode){case Xm:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(o),a[h].accumulateAdditive(l);break;case cu:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(o),a[h].accumulate(s,l)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===Wm;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Xo){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let l=Math.floor(s/t);s-=t*l,r+=Math.abs(l);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let a=e<0;this._setEndings(a,!a,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:l})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Sr,s.endingEnd=Sr):(e?s.endingStart=this.zeroSlopeAtStart?Sr:br:s.endingStart=Ra,t?s.endingEnd=this.zeroSlopeAtEnd?Sr:br:s.endingEnd=Ra)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,c[0]=t,l[1]=r+e,c[1]=n,this}},yy=new Float32Array(1),zr=class extends ki{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,l=e._interpolants,c=n.uuid,a=this._bindingsByRootAndName,h=a[c];h===void 0&&(h={},a[c]=h);for(let d=0;d!==r;++d){let u=s[d],f=u.name,p=h[f];if(p!==void 0)++p.referenceCount,o[d]=p;else{if(p=o[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}let x=t&&t._propertyBindings[d].binding.parsedPath;p=new yh(Ht.create(n,f,x),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),o[d]=p}l[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let l=o.knownActions;e._byClipCacheIndex=l.length,l.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,l=o[r],c=l.knownActions,a=c[c.length-1],h=e._byClipCacheIndex;a._byClipCacheIndex=h,c[h]=a,c.pop(),e._byClipCacheIndex=null;let d=l.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,l=o[s],c=t[t.length-1],a=e._cacheIndex;c._cacheIndex=a,t[a]=c,t.pop(),delete l[r],Object.keys(l).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ja(new Float32Array(2),new Float32Array(2),1,yy),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Ur.findByName(s,e):e,l=o!==null?o.uuid:e,c=this._actionsByClip[l],a=null;if(n===void 0&&(o!==null?n=o.blendMode:n=cu),c!==void 0){let d=c.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;a=c.knownActions[0],o===null&&(o=a._clip)}if(o===null)return null;let h=new Mh(this,o,t,n);return this._bindAction(h,a),this._addInactiveAction(h,l,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Ur.findByName(n,e):e,o=r?r.uuid:e,l=this._actionsByClip[o];return l!==void 0&&l.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let a=0;a!==n;++a)t[a]._update(s,e,r,o);let l=this._bindings,c=this._nActiveBindings;for(let a=0;a!==c;++a)l[a].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let l=0,c=o.length;l!==c;++l){let a=o[l];this._deactivateAction(a);let h=a._cacheIndex,d=t[t.length-1];a._cacheIndex=null,a._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(a)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let l=n[o].actionByRoot,c=l[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let l=r[o];l.restoreOriginalState(),this._removeInactiveBinding(l)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var rf=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Af(i,e,t,n){let s=My(n);switch(t){case xf:return i*e;case Rh:return i*e/s.components*s.byteLength;case Ch:return i*e/s.components*s.byteLength;case ar:return i*e*2/s.components*s.byteLength;case Ph:return i*e*2/s.components*s.byteLength;case vf:return i*e*3/s.components*s.byteLength;case Qn:return i*e*4/s.components*s.byteLength;case Ih:return i*e*4/s.components*s.byteLength;case fl:case pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ml:case gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dh:case Uh:return Math.max(i,16)*Math.max(e,8)/4;case Lh:case Nh:return Math.max(i,8)*Math.max(e,8)/2;case Oh:case Fh:case kh:case zh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Bh:case xl:case Hh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case qh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $h:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case eu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case tu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case nu:case iu:case su:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ru:case ou:return Math.ceil(i/4)*Math.ceil(e/4)*8;case vl:case au:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function My(i){switch(i){case Wn:case ff:return{byteLength:1,components:1};case Wo:case pf:case Zt:return{byteLength:2,components:1};case wh:case Ah:return{byteLength:2,components:4};case Gi:case Th:case Xn:return{byteLength:4,components:1};case mf:case gf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ng(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Sy(i){let e=new WeakMap;function t(l,c){let a=l.array,h=l.usage,d=a.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,a,h),l.onUploadCallback();let f;if(a instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)f=i.HALF_FLOAT;else if(a instanceof Uint16Array)l.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(a instanceof Int16Array)f=i.SHORT;else if(a instanceof Uint32Array)f=i.UNSIGNED_INT;else if(a instanceof Int32Array)f=i.INT;else if(a instanceof Int8Array)f=i.BYTE;else if(a instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:u,type:f,bytesPerElement:a.BYTES_PER_ELEMENT,version:l.version,size:d}}function n(l,c,a){let h=c.array,d=c.updateRanges;if(i.bindBuffer(a,l),d.length===0)i.bufferSubData(a,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];i.bufferSubData(a,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let a=e.get(l);if(a===void 0)e.set(l,t(l,c));else if(a.version<l.version){if(a.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(a.buffer,l,c),a.version=l.version}}return{get:s,remove:r,update:o}}var Ey=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ty=`#ifdef USE_ALPHAHASH
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
#endif`,wy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ay=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ry=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Py=`#ifdef USE_AOMAP
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
#endif`,Iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ly=`#ifdef USE_BATCHING
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
#endif`,Dy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ny=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Oy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fy=`#ifdef USE_IRIDESCENCE
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
#endif`,By=`#ifdef USE_BUMPMAP
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
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Yy=`#define PI 3.141592653589793
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
} // validated`,Zy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jy=`vec3 transformedNormal = objectNormal;
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
#endif`,Ky=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e1="gl_FragColor = linearToOutputTexel( gl_FragColor );",t1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n1=`#ifdef USE_ENVMAP
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
#endif`,i1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,s1=`#ifdef USE_ENVMAP
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
#endif`,r1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o1=`#ifdef USE_ENVMAP
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
#endif`,a1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u1=`#ifdef USE_GRADIENTMAP
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
}`,d1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,g1=`#ifdef USE_ENVMAP
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
#endif`,x1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M1=`PhysicalMaterial material;
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
#endif`,b1=`uniform sampler2D dfgLUT;
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
}`,S1=`
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
#endif`,E1=`#if defined( RE_IndirectDiffuse )
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
#endif`,T1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,A1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N1=`#if defined( USE_POINTS_UV )
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
#endif`,U1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z1=`#ifdef USE_MORPHTARGETS
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
#endif`,H1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,V1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Y1=`#ifdef USE_NORMALMAP
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
#endif`,Z1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cM=`float getShadowMask() {
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
}`,hM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uM=`#ifdef USE_SKINNING
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
#endif`,dM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fM=`#ifdef USE_SKINNING
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
#endif`,pM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vM=`#ifdef USE_TRANSMISSION
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
#endif`,_M=`#ifdef USE_TRANSMISSION
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
#endif`,yM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,EM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TM=`uniform sampler2D t2D;
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
}`,wM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,RM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`#include <common>
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
}`,IM=`#if DEPTH_PACKING == 3200
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
}`,LM=`#define DISTANCE
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
}`,DM=`#define DISTANCE
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
}`,NM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`uniform float scale;
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
}`,FM=`uniform vec3 diffuse;
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
}`,BM=`#include <common>
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
}`,kM=`uniform vec3 diffuse;
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
}`,zM=`#define LAMBERT
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
}`,HM=`#define LAMBERT
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
}`,GM=`#define MATCAP
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
}`,VM=`#define MATCAP
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
}`,WM=`#define NORMAL
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
}`,XM=`#define NORMAL
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
}`,qM=`#define PHONG
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
}`,YM=`#define PHONG
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
}`,ZM=`#define STANDARD
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
}`,jM=`#define STANDARD
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
}`,KM=`#define TOON
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
}`,$M=`#define TOON
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
}`,JM=`uniform float size;
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
}`,QM=`uniform vec3 diffuse;
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
}`,eb=`#include <common>
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
}`,tb=`uniform vec3 color;
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
}`,nb=`uniform float rotation;
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
}`,ib=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:Ey,alphahash_pars_fragment:Ty,alphamap_fragment:wy,alphamap_pars_fragment:Ay,alphatest_fragment:Ry,alphatest_pars_fragment:Cy,aomap_fragment:Py,aomap_pars_fragment:Iy,batching_pars_vertex:Ly,batching_vertex:Dy,begin_vertex:Ny,beginnormal_vertex:Uy,bsdfs:Oy,iridescence_fragment:Fy,bumpmap_pars_fragment:By,clipping_planes_fragment:ky,clipping_planes_pars_fragment:zy,clipping_planes_pars_vertex:Hy,clipping_planes_vertex:Gy,color_fragment:Vy,color_pars_fragment:Wy,color_pars_vertex:Xy,color_vertex:qy,common:Yy,cube_uv_reflection_fragment:Zy,defaultnormal_vertex:jy,displacementmap_pars_vertex:Ky,displacementmap_vertex:$y,emissivemap_fragment:Jy,emissivemap_pars_fragment:Qy,colorspace_fragment:e1,colorspace_pars_fragment:t1,envmap_fragment:n1,envmap_common_pars_fragment:i1,envmap_pars_fragment:s1,envmap_pars_vertex:r1,envmap_physical_pars_fragment:g1,envmap_vertex:o1,fog_vertex:a1,fog_pars_vertex:l1,fog_fragment:c1,fog_pars_fragment:h1,gradientmap_pars_fragment:u1,lightmap_pars_fragment:d1,lights_lambert_fragment:f1,lights_lambert_pars_fragment:p1,lights_pars_begin:m1,lights_toon_fragment:x1,lights_toon_pars_fragment:v1,lights_phong_fragment:_1,lights_phong_pars_fragment:y1,lights_physical_fragment:M1,lights_physical_pars_fragment:b1,lights_fragment_begin:S1,lights_fragment_maps:E1,lights_fragment_end:T1,lightprobes_pars_fragment:w1,logdepthbuf_fragment:A1,logdepthbuf_pars_fragment:R1,logdepthbuf_pars_vertex:C1,logdepthbuf_vertex:P1,map_fragment:I1,map_pars_fragment:L1,map_particle_fragment:D1,map_particle_pars_fragment:N1,metalnessmap_fragment:U1,metalnessmap_pars_fragment:O1,morphinstance_vertex:F1,morphcolor_vertex:B1,morphnormal_vertex:k1,morphtarget_pars_vertex:z1,morphtarget_vertex:H1,normal_fragment_begin:G1,normal_fragment_maps:V1,normal_pars_fragment:W1,normal_pars_vertex:X1,normal_vertex:q1,normalmap_pars_fragment:Y1,clearcoat_normal_fragment_begin:Z1,clearcoat_normal_fragment_maps:j1,clearcoat_pars_fragment:K1,iridescence_pars_fragment:$1,opaque_fragment:J1,packing:Q1,premultiplied_alpha_fragment:eM,project_vertex:tM,dithering_fragment:nM,dithering_pars_fragment:iM,roughnessmap_fragment:sM,roughnessmap_pars_fragment:rM,shadowmap_pars_fragment:oM,shadowmap_pars_vertex:aM,shadowmap_vertex:lM,shadowmask_pars_fragment:cM,skinbase_vertex:hM,skinning_pars_vertex:uM,skinning_vertex:dM,skinnormal_vertex:fM,specularmap_fragment:pM,specularmap_pars_fragment:mM,tonemapping_fragment:gM,tonemapping_pars_fragment:xM,transmission_fragment:vM,transmission_pars_fragment:_M,uv_pars_fragment:yM,uv_pars_vertex:MM,uv_vertex:bM,worldpos_vertex:SM,background_vert:EM,background_frag:TM,backgroundCube_vert:wM,backgroundCube_frag:AM,cube_vert:RM,cube_frag:CM,depth_vert:PM,depth_frag:IM,distance_vert:LM,distance_frag:DM,equirect_vert:NM,equirect_frag:UM,linedashed_vert:OM,linedashed_frag:FM,meshbasic_vert:BM,meshbasic_frag:kM,meshlambert_vert:zM,meshlambert_frag:HM,meshmatcap_vert:GM,meshmatcap_frag:VM,meshnormal_vert:WM,meshnormal_frag:XM,meshphong_vert:qM,meshphong_frag:YM,meshphysical_vert:ZM,meshphysical_frag:jM,meshtoon_vert:KM,meshtoon_frag:$M,points_vert:JM,points_frag:QM,shadow_vert:eb,shadow_frag:tb,sprite_vert:nb,sprite_frag:ib},Fe={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},hs={basic:{uniforms:qn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:qn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new me(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:qn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:qn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:qn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new me(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:qn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:qn([Fe.points,Fe.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:qn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:qn([Fe.common,Fe.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:qn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:qn([Fe.sprite,Fe.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:qn([Fe.common,Fe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:qn([Fe.lights,Fe.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};hs.physical={uniforms:qn([hs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};var du={r:0,b:0,g:0},sb=new Ze,Ug=new ut;Ug.set(-1,0,0,0,1,0,0,0,1);function rb(i,e,t,n,s,r){let o=new me(0),l=s===!0?0:1,c,a,h=null,d=0,u=null;function f(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let y=v.backgroundBlurriness>0;S=e.get(S,y)}return S}function p(v){let S=!1,y=f(v);y===null?g(o,l):y&&y.isColor&&(g(y,1),S=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,S){let y=f(S);y&&(y.isCubeTexture||y.mapping===dl)?(a===void 0&&(a=new ge(new ct(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:Yr(hs.backgroundCube.uniforms),vertexShader:hs.backgroundCube.vertexShader,fragmentShader:hs.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),a.geometry.deleteAttribute("uv"),a.onBeforeRender=function(w,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(a.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(a)),a.material.uniforms.envMap.value=y,a.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,a.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,a.material.uniforms.backgroundRotation.value.setFromMatrix4(sb.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&a.material.uniforms.backgroundRotation.value.premultiply(Ug),a.material.toneMapped=gt.getTransfer(y.colorSpace)!==Ct,(h!==y||d!==y.version||u!==i.toneMapping)&&(a.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),a.layers.enableAll(),v.unshift(a,a.geometry,a.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ge(new an(2,2),new bt({name:"BackgroundMaterial",uniforms:Yr(hs.background.uniforms),vertexShader:hs.background.vertexShader,fragmentShader:hs.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=gt.getTransfer(y.colorSpace)!==Ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function g(v,S){v.getRGB(du,Ef(i)),t.buffers.color.setClear(du.r,du.g,du.b,S,r)}function m(){a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),l=S,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,g(o,l)},render:p,addToRenderList:x,dispose:m}}function ob(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function l(D,k,L,R,N){let P=!1,O=d(D,R,L,k);r!==O&&(r=O,a(r.object)),P=f(D,R,L,N),P&&p(D,R,L,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(P||o)&&(o=!1,y(D,k,L,R),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return i.createVertexArray()}function a(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,k,L,R){let N=R.wireframe===!0,P=n[k.id];P===void 0&&(P={},n[k.id]=P);let O=D.isInstancedMesh===!0?D.id:0,G=P[O];G===void 0&&(G={},P[O]=G);let F=G[L.id];F===void 0&&(F={},G[L.id]=F);let z=F[N];return z===void 0&&(z=u(c()),F[N]=z),z}function u(D){let k=[],L=[],R=[];for(let N=0;N<t;N++)k[N]=0,L[N]=0,R[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:L,attributeDivisors:R,object:D,attributes:{},index:null}}function f(D,k,L,R){let N=r.attributes,P=k.attributes,O=0,G=L.getAttributes();for(let F in G)if(G[F].location>=0){let Z=N[F],se=P[F];if(se===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),Z===void 0||Z.attribute!==se||se&&Z.data!==se.data)return!0;O++}return r.attributesNum!==O||r.index!==R}function p(D,k,L,R){let N={},P=k.attributes,O=0,G=L.getAttributes();for(let F in G)if(G[F].location>=0){let Z=P[F];Z===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));let se={};se.attribute=Z,Z&&Z.data&&(se.data=Z.data),N[F]=se,O++}r.attributes=N,r.attributesNum=O,r.index=R}function x(){let D=r.newAttributes;for(let k=0,L=D.length;k<L;k++)D[k]=0}function g(D){m(D,0)}function m(D,k){let L=r.newAttributes,R=r.enabledAttributes,N=r.attributeDivisors;L[D]=1,R[D]===0&&(i.enableVertexAttribArray(D),R[D]=1),N[D]!==k&&(i.vertexAttribDivisor(D,k),N[D]=k)}function v(){let D=r.newAttributes,k=r.enabledAttributes;for(let L=0,R=k.length;L<R;L++)k[L]!==D[L]&&(i.disableVertexAttribArray(L),k[L]=0)}function S(D,k,L,R,N,P,O){O===!0?i.vertexAttribIPointer(D,k,L,N,P):i.vertexAttribPointer(D,k,L,R,N,P)}function y(D,k,L,R){x();let N=R.attributes,P=L.getAttributes(),O=k.defaultAttributeValues;for(let G in P){let F=P[G];if(F.location>=0){let z=N[G];if(z===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(z=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(z=D.instanceColor)),z!==void 0){let Z=z.normalized,se=z.itemSize,ce=e.get(z);if(ce===void 0)continue;let Ce=ce.buffer,X=ce.type,Te=ce.bytesPerElement,V=X===i.INT||X===i.UNSIGNED_INT||z.gpuType===Th;if(z.isInterleavedBufferAttribute){let te=z.data,be=te.stride,Pe=z.offset;if(te.isInstancedInterleavedBuffer){for(let $=0;$<F.locationSize;$++)m(F.location+$,te.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let $=0;$<F.locationSize;$++)g(F.location+$);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let $=0;$<F.locationSize;$++)S(F.location+$,se/F.locationSize,X,Z,be*Te,(Pe+se/F.locationSize*$)*Te,V)}else{if(z.isInstancedBufferAttribute){for(let te=0;te<F.locationSize;te++)m(F.location+te,z.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let te=0;te<F.locationSize;te++)g(F.location+te);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let te=0;te<F.locationSize;te++)S(F.location+te,se/F.locationSize,X,Z,se*Te,se/F.locationSize*te*Te,V)}}else if(O!==void 0){let Z=O[G];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(F.location,Z);break;case 3:i.vertexAttrib3fv(F.location,Z);break;case 4:i.vertexAttrib4fv(F.location,Z);break;default:i.vertexAttrib1fv(F.location,Z)}}}}v()}function w(){M();for(let D in n){let k=n[D];for(let L in k){let R=k[L];for(let N in R){let P=R[N];for(let O in P)h(P[O].object),delete P[O];delete R[N]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;let k=n[D.id];for(let L in k){let R=k[L];for(let N in R){let P=R[N];for(let O in P)h(P[O].object),delete P[O];delete R[N]}}delete n[D.id]}function I(D){for(let k in n){let L=n[k];for(let R in L){let N=L[R];if(N[D.id]===void 0)continue;let P=N[D.id];for(let O in P)h(P[O].object),delete P[O];delete N[D.id]}}}function _(D){for(let k in n){let L=n[k],R=D.isInstancedMesh===!0?D.id:0,N=L[R];if(N!==void 0){for(let P in N){let O=N[P];for(let G in O)h(O[G].object),delete O[G];delete N[P]}delete L[R],Object.keys(L).length===0&&delete n[k]}}}function M(){b(),o=!0,r!==s&&(r=s,a(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:M,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function ab(i,e,t){let n;function s(c){n=c}function r(c,a){i.drawArrays(n,c,a),t.update(a,n,1)}function o(c,a,h){h!==0&&(i.drawArraysInstanced(n,c,a,h),t.update(a,n,h))}function l(c,a,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,a,0,h);let u=0;for(let f=0;f<h;f++)u+=a[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function lb(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Qn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(I){let _=I===Zt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Wn&&I!==Xn&&!_&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",h=c(a);h!==a&&(Qe("WebGLRenderer:",a,"not supported, using",h,"instead."),a=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:a,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:y,maxSamples:w,samples:T}}function cb(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Oi,l=new ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):a();else{let v=r?0:n,S=v*4,y=m.clippingState||null;c.value=y,y=h(p,u,S,f);for(let w=0;w!==S;++w)y[w]=t[w];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function a(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=c.value,p!==!0||g===null){let m=f+x*4,v=u.matrixWorldInverse;l.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,y=f;S!==x;++S,y+=4)o.copy(d[S]).applyMatrix4(v,l),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Zo=4,hb=6,ub=20,db=256,bl=new rs,fg=new me,Rf=null,Cf=0,Pf=0,If=!1,fb=new U,Zr=new U,Bs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:l=fb}=r;Rf=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),If=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rf,Cf,Pf),this._renderer.xr.enabled=If,e.scissorTest=!1,Yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rr||e.mapping===Wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rf=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),If=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Zt,format:Qn,colorSpace:Ln,depthBuffer:!1},s=pg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pg(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=pb(r)),this._blurMaterial=gb(r,e,t),this._ggxMaterial=mb(r,e,t)}return s}_compileMaterial(e){let t=new ge(new vt,e);this._renderer.compile(t,bl)}_sceneToCubeUV(e,t,n,s,r){let c=new gn(90,1,t,n),a=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(fg),d.toneMapping=Hi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ge(new ct,new st({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,m=!0):(g.color.copy(fg),m=!0);for(let S=0;S<6;S++){let y=S%3;y===0?(c.up.set(0,a[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[S],r.y,r.z)):y===1?(c.up.set(0,0,a[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[S],r.z)):(c.up.set(0,a[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[S]));let w=this._cubeSize;Yo(s,y*w,S>2?w:0,w,w),d.setRenderTarget(s),m&&d.render(x,c),d.render(e,c)}d.toneMapping=f,d.autoClear=u,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===rr||e.mapping===Wr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let l=r.uniforms;l.envMap.value=e;let c=this._cubeSize;Yo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,bl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[n];l.material=o;let c=o.uniforms,a=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(a*a-h*h),u=a*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-Zo?n-p+Zo:0),m=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=p-t,Yo(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(l,bl),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,Yo(e,g,m,3*x,2*x),s.setRenderTarget(e),s.render(l,bl)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let a=l.uniforms;a.envMap.value=e.texture,a.sigma.value=r,a.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Zo?s-this._lodMax+Zo:0),u=4*(this._cubeSize-h);Yo(t,d,u,3*h,2*h),o.setRenderTarget(t),o.render(c,bl)}};function pb(i){let e=[],t=[],n=i,s=i-Zo+1+hb;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let l=1/(o-2),c=-l,a=1+l,h=[c,c,a,c,a,a,c,c,a,a,c,a],d=6,u=6,f=3,p=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let m=0;m<d;m++){let v=m%3*2/3-1,S=m>2?0:-1,y=[v,S,0,v+2/3,S,0,v+2/3,S+1,0,v,S,0,v+2/3,S+1,0,v,S+1,0];p.set(y,f*u*m);for(let w=0;w<u;w++){let T=h[w*2]*2-1,I=h[w*2+1]*2-1;m===0?Zr.set(1,I,T):m===1?Zr.set(-T,1,-I):m===2?Zr.set(-T,I,1):m===3?Zr.set(-1,I,-T):m===4?Zr.set(-T,-1,I):Zr.set(T,I,-1),Zr.toArray(x,(m*u+w)*f)}}let g=new vt;g.setAttribute("position",new ht(p,f)),g.setAttribute("outputDirection",new ht(x,f)),t.push(new ge(g,null)),n>Zo&&n--}return{lodMeshes:t,sizeLods:e}}function pg(i,e,t){let n=new $t(i,e,t);return n.texture.mapping=dl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function mb(i,e,t){return new bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:db,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gu(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function gb(i,e,t){return new bt({name:"SphericalGaussianBlur",defines:{SAMPLES:ub,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gu(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function mg(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function gg(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function gu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var pu=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Fa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ct(5,5,5),r=new bt({name:"CubemapFromEquirect",uniforms:Yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:dn});r.uniforms.tEquirect.value=t;let o=new ge(s,r),l=t.minFilter;return t.minFilter===di&&(t.minFilter=Xt),new vh(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function xb(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Xr||f===Sh)if(e.has(u)){let p=e.get(u).texture;return l(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new pu(p.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",a),l(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,p=f===Xr||f===Sh,x=f===rr||f===Wr;if(p||x){let g=t.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Bs(i)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let v=u.image;return p&&v&&v.height>0||x&&v&&c(v)?(n===null&&(n=new Bs(i)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function l(u,f){return f===Xr?u.mapping=rr:f===Sh&&(u.mapping=Wr),u}function c(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function a(u){let f=u.target;f.removeEventListener("dispose",a);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function vb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Tr("WebGLRenderer: "+n+" extension not supported."),s}}}function _b(i,e,t,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function l(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function a(d){let u=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let v=f.array;x=f.version;for(let S=0,y=v.length;S<y;S+=3){let w=v[S+0],T=v[S+1],I=v[S+2];u.push(w,T,T,I,I,w)}}else{let v=p.array;x=p.version;for(let S=0,y=v.length/3-1;S<y;S+=3){let w=S+0,T=S+1,I=S+2;u.push(w,T,T,I,I,w)}}let g=new(p.count>=65535?Na:nr)(u,1);g.version=x;let m=r.get(d);m&&e.remove(m),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&a(d)}else a(d);return r.get(d)}return{get:l,update:c,getWireframeAttribute:h}}function yb(i,e,t){let n;function s(d){n=d}let r,o;function l(d){r=d.type,o=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function a(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];t.update(x,n,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=a,this.renderMultiDraw=h}function Mb(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:ot("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function bb(i,e,t){let n=new WeakMap,s=new At;function r(o,l,c){let a=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(l);if(u===void 0||u.count!==d){let M=function(){I.dispose(),n.delete(l),l.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();let f=l.morphAttributes.position!==void 0,p=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],v=l.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),x===!0&&(S=3);let y=l.attributes.position.count*S,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*w*4*d),I=new Ia(T,y,w,d);I.type=Xn,I.needsUpdate=!0;let _=S*4;for(let b=0;b<d;b++){let D=g[b],k=m[b],L=v[b],R=y*w*4*b;for(let N=0;N<D.count;N++){let P=N*_;f===!0&&(s.fromBufferAttribute(D,N),T[R+P+0]=s.x,T[R+P+1]=s.y,T[R+P+2]=s.z,T[R+P+3]=0),p===!0&&(s.fromBufferAttribute(k,N),T[R+P+4]=s.x,T[R+P+5]=s.y,T[R+P+6]=s.z,T[R+P+7]=0),x===!0&&(s.fromBufferAttribute(L,N),T[R+P+8]=s.x,T[R+P+9]=s.y,T[R+P+10]=s.z,T[R+P+11]=L.itemSize===4?s.w:1)}}u={count:d,texture:I,size:new ae(y,w)},n.set(l,u),l.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<a.length;x++)f+=a[x];let p=l.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",a)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Sb(i,e,t,n,s){let r=new WeakMap;function o(a){let h=s.render.frame,d=a.geometry,u=e.get(a,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),a.isInstancedMesh&&(a.hasEventListener("dispose",c)===!1&&a.addEventListener("dispose",c),r.get(a)!==h&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,h))),a.isSkinnedMesh){let f=a.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function l(){r=new WeakMap}function c(a){let h=a.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}var Eb={[ol]:"LINEAR_TONE_MAPPING",[al]:"REINHARD_TONE_MAPPING",[ll]:"CINEON_TONE_MAPPING",[Vr]:"ACES_FILMIC_TONE_MAPPING",[hl]:"AGX_TONE_MAPPING",[ul]:"NEUTRAL_TONE_MAPPING",[cl]:"CUSTOM_TONE_MAPPING"};function Tb(i,e,t,n,s,r){let o=new $t(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,a=new vt;a.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new lt([0,2,0,0,2,0],2));let h=new zo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ge(a,h),u=new rs(-1,1,1,-1,0,1),f=null,p=null,x=!1,g,m=null,v=[],S=!1;this.setSize=function(y,w){o.setSize(y,w),l!==null&&l.setSize(y,w),c!==null&&c.setSize(y,w);for(let T=0;T<v.length;T++){let I=v[T];I.setSize&&I.setSize(y,w)}},this.setEffects=function(y){v=y,S=v.length>0&&v[0].isRenderPass===!0;let w=o.width,T=o.height;v.length>0&&l===null&&(l=new $t(w,T,{type:Zt,depthBuffer:!1,stencilBuffer:!1}),c=new $t(w,T,{type:Zt,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<v.length;I++){let _=v[I];_.setSize&&_.setSize(w,T)}},this.begin=function(y,w){if(x||y.toneMapping===Hi&&v.length===0)return!1;if(m=w,w!==null){let T=w.width,I=w.height;(o.width!==T||o.height!==I)&&this.setSize(T,I)}return S===!1&&y.setRenderTarget(o),g=y.toneMapping,y.toneMapping=Hi,!0},this.hasRenderPass=function(){return S},this.end=function(y,w){y.toneMapping=g,x=!0;let T=o,I=l;for(let _=0;_<v.length;_++){let M=v[_];M.enabled!==!1&&(M.render(y,I,T,w),M.needsSwap!==!1&&(T=I,I=I===l?c:l))}if(f!==y.outputColorSpace||p!==y.toneMapping){f=y.outputColorSpace,p=y.toneMapping,h.defines={},gt.getTransfer(f)===Ct&&(h.defines.SRGB_TRANSFER="");let _=Eb[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(m),y.render(d,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),a.dispose(),h.dispose()}}var Og=new Mn,Nf=new ts(1,1),Fg=new Ia,Bg=new eh,kg=new Fa,xg=[],vg=[],_g=new Float32Array(16),yg=new Float32Array(9),Mg=new Float32Array(4);function Ko(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=xg[s];if(r===void 0&&(r=new Float32Array(s),xg[s]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(r,l)}return r}function En(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xu(i,e){let t=vg[e];t===void 0&&(t=new Int32Array(e),vg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ab(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;i.uniform2fv(this.addr,e),Tn(t,e)}}function Rb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(En(t,e))return;i.uniform3fv(this.addr,e),Tn(t,e)}}function Cb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;i.uniform4fv(this.addr,e),Tn(t,e)}}function Pb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(En(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tn(t,e)}else{if(En(t,n))return;Mg.set(n),i.uniformMatrix2fv(this.addr,!1,Mg),Tn(t,n)}}function Ib(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(En(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tn(t,e)}else{if(En(t,n))return;yg.set(n),i.uniformMatrix3fv(this.addr,!1,yg),Tn(t,n)}}function Lb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(En(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tn(t,e)}else{if(En(t,n))return;_g.set(n),i.uniformMatrix4fv(this.addr,!1,_g),Tn(t,n)}}function Db(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Nb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;i.uniform2iv(this.addr,e),Tn(t,e)}}function Ub(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;i.uniform3iv(this.addr,e),Tn(t,e)}}function Ob(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;i.uniform4iv(this.addr,e),Tn(t,e)}}function Fb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Bb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;i.uniform2uiv(this.addr,e),Tn(t,e)}}function kb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;i.uniform3uiv(this.addr,e),Tn(t,e)}}function zb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;i.uniform4uiv(this.addr,e),Tn(t,e)}}function Hb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Nf.compareFunction=t.isReversedDepthBuffer()?uu:hu,r=Nf):r=Og,t.setTexture2D(e||r,s)}function Gb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Bg,s)}function Vb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||kg,s)}function Wb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Fg,s)}function Xb(i){switch(i){case 5126:return wb;case 35664:return Ab;case 35665:return Rb;case 35666:return Cb;case 35674:return Pb;case 35675:return Ib;case 35676:return Lb;case 5124:case 35670:return Db;case 35667:case 35671:return Nb;case 35668:case 35672:return Ub;case 35669:case 35673:return Ob;case 5125:return Fb;case 36294:return Bb;case 36295:return kb;case 36296:return zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Hb;case 35679:case 36299:case 36307:return Gb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return Wb}}function qb(i,e){i.uniform1fv(this.addr,e)}function Yb(i,e){let t=Ko(e,this.size,2);i.uniform2fv(this.addr,t)}function Zb(i,e){let t=Ko(e,this.size,3);i.uniform3fv(this.addr,t)}function jb(i,e){let t=Ko(e,this.size,4);i.uniform4fv(this.addr,t)}function Kb(i,e){let t=Ko(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $b(i,e){let t=Ko(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Jb(i,e){let t=Ko(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qb(i,e){i.uniform1iv(this.addr,e)}function eS(i,e){i.uniform2iv(this.addr,e)}function tS(i,e){i.uniform3iv(this.addr,e)}function nS(i,e){i.uniform4iv(this.addr,e)}function iS(i,e){i.uniform1uiv(this.addr,e)}function sS(i,e){i.uniform2uiv(this.addr,e)}function rS(i,e){i.uniform3uiv(this.addr,e)}function oS(i,e){i.uniform4uiv(this.addr,e)}function aS(i,e,t){let n=this.cache,s=e.length,r=xu(t,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Nf:o=Og;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||o,r[l])}function lS(i,e,t){let n=this.cache,s=e.length,r=xu(t,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Bg,r[o])}function cS(i,e,t){let n=this.cache,s=e.length,r=xu(t,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||kg,r[o])}function hS(i,e,t){let n=this.cache,s=e.length,r=xu(t,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Fg,r[o])}function uS(i){switch(i){case 5126:return qb;case 35664:return Yb;case 35665:return Zb;case 35666:return jb;case 35674:return Kb;case 35675:return $b;case 35676:return Jb;case 5124:case 35670:return Qb;case 35667:case 35671:return eS;case 35668:case 35672:return tS;case 35669:case 35673:return nS;case 5125:return iS;case 36294:return sS;case 36295:return rS;case 36296:return oS;case 35678:case 36198:case 36298:case 36306:case 35682:return aS;case 35679:case 36299:case 36307:return lS;case 35680:case 36300:case 36308:case 36293:return cS;case 36289:case 36303:case 36311:case 36292:return hS}}var Uf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xb(t.type)}},Of=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uS(t.type)}},Ff=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},Lf=/(\w+)(\])?(\[|\.)?/g;function bg(i,e){i.seq.push(e),i.map[e.id]=e}function dS(i,e,t){let n=i.name,s=n.length;for(Lf.lastIndex=0;;){let r=Lf.exec(n),o=Lf.lastIndex,l=r[1],c=r[2]==="]",a=r[3];if(c&&(l=l|0),a===void 0||a==="["&&o+2===s){bg(t,a===void 0?new Uf(l,i,e):new Of(l,i,e));break}else{let d=t.map[l];d===void 0&&(d=new Ff(l),bg(t,d)),t=d}}}var jo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);dS(l,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let l=t[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Sg(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var fS=37297,pS=0;function mS(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}var Eg=new ut;function gS(i){gt._getMatrix(Eg,gt.workingColorSpace,i);let e=`mat3( ${Eg.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case Ca:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Tg(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+mS(i.getShaderSource(e),l)}else return r}function xS(i,e){let t=gS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var vS={[ol]:"Linear",[al]:"Reinhard",[ll]:"Cineon",[Vr]:"ACESFilmic",[hl]:"AgX",[ul]:"Neutral",[cl]:"Custom"};function _S(i,e){let t=vS[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fu=new U;function yS(){gt.getLuminanceCoefficients(fu);let i=fu.x.toFixed(4),e=fu.y.toFixed(4),t=fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(El).join(`
`)}function bS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function SS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function El(i){return i!==""}function wg(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ag(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ES=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bf(i){return i.replace(ES,wS)}var TS=new Map;function wS(i,e){let t=yt[e];if(t===void 0){let n=TS.get(e);if(n!==void 0)t=yt[n],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Bf(t)}var AS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rg(i){return i.replace(AS,RS)}function RS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cg(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var CS={[Hr]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function PS(i){return CS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var IS={[rr]:"ENVMAP_TYPE_CUBE",[Wr]:"ENVMAP_TYPE_CUBE",[dl]:"ENVMAP_TYPE_CUBE_UV"};function LS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":IS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var DS={[Wr]:"ENVMAP_MODE_REFRACTION"};function NS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":DS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var US={[uf]:"ENVMAP_BLENDING_MULTIPLY",[Hm]:"ENVMAP_BLENDING_MIX",[Gm]:"ENVMAP_BLENDING_ADD"};function OS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":US[i.combine]||"ENVMAP_BLENDING_NONE"}function FS(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function BS(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,l=t.fragmentShader,c=PS(t),a=LS(t),h=NS(t),d=OS(t),u=FS(t),f=MS(t),p=bS(r),x=s.createProgram(),g,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(El).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(El).join(`
`),m.length>0&&(m+=`
`)):(g=[Cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(El).join(`
`),m=[Cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+a:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?yt.tonemapping_pars_fragment:"",t.toneMapping!==Hi?_S("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,xS("linearToOutputTexel",t.outputColorSpace),yS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(El).join(`
`)),o=Bf(o),o=wg(o,t),o=Ag(o,t),l=Bf(l),l=wg(l,t),l=Ag(l,t),o=Rg(o),l=Rg(l),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=v+g+o,y=v+m+l,w=Sg(s,s.VERTEX_SHADER,S),T=Sg(s,s.FRAGMENT_SHADER,y);s.attachShader(x,w),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(D){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(x)||"",L=s.getShaderInfoLog(w)||"",R=s.getShaderInfoLog(T)||"",N=k.trim(),P=L.trim(),O=R.trim(),G=!0,F=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,T);else{let z=Tg(s,w,"vertex"),Z=Tg(s,T,"fragment");ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+z+`
`+Z)}else N!==""?Qe("WebGLProgram: Program Info Log:",N):(P===""||O==="")&&(F=!1);F&&(D.diagnostics={runnable:G,programLog:N,vertexShader:{log:P,prefix:g},fragmentShader:{log:O,prefix:m}})}s.deleteShader(w),s.deleteShader(T),_=new jo(s,x),M=SS(s,x)}let _;this.getUniforms=function(){return _===void 0&&I(this),_};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,fS)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=T,this}var kS=0,kf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new zf(e),t.set(e,n)),n}},zf=class{constructor(e){this.id=kS++,this.code=e,this.usedTimes=0}};function zS(i){return i===ar||i===xl||i===vl}function HS(i,e,t,n,s,r){let o=new La,l=new kf,c=new Set,a=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,M,b,D,k,L){let R=D.fog,N=k.geometry,P=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=e.get(_.envMap||P,O),F=G&&G.mapping===dl?G.image.height:null,z=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Qe("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,se=Z!==void 0?Z.length:0,ce=0;N.morphAttributes.position!==void 0&&(ce=1),N.morphAttributes.normal!==void 0&&(ce=2),N.morphAttributes.color!==void 0&&(ce=3);let Ce,X,Te,V;if(z){let qt=hs[z];Ce=qt.vertexShader,X=qt.fragmentShader}else{Ce=_.vertexShader,X=_.fragmentShader;let qt=l.getVertexShaderStage(_),Lt=l.getFragmentShaderStage(_);l.update(_,qt,Lt),Te=qt.id,V=Lt.id}let te=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Pe=k.isInstancedMesh===!0,$=k.isBatchedMesh===!0,he=!!_.map,_e=!!_.matcap,ie=!!G,ue=!!_.aoMap,ve=!!_.lightMap,de=!!_.bumpMap&&_.wireframe===!1,Se=!!_.normalMap,We=!!_.displacementMap,ze=!!_.emissiveMap,je=!!_.metalnessMap,et=!!_.roughnessMap,H=_.anisotropy>0,dt=_.clearcoat>0,rt=_.dispersion>0,B=_.retroreflectivity>0,E=_.iridescence>0,Y=_.sheen>0,K=_.transmission>0,ne=H&&!!_.anisotropyMap,Ee=dt&&!!_.clearcoatMap,Re=dt&&!!_.clearcoatNormalMap,le=dt&&!!_.clearcoatRoughnessMap,fe=E&&!!_.iridescenceMap,Le=E&&!!_.iridescenceThicknessMap,we=Y&&!!_.sheenColorMap,ye=Y&&!!_.sheenRoughnessMap,Me=!!_.specularMap,Ue=!!_.specularColorMap,Ye=!!_.specularIntensityMap,at=K&&!!_.transmissionMap,q=K&&!!_.thicknessMap,Ne=!!_.gradientMap,pe=!!_.alphaMap,Ie=_.alphaTest>0,Oe=!!_.alphaHash,xe=!!_.extensions,nt=Hi;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(nt=i.toneMapping);let Ke={shaderID:z,shaderType:_.type,shaderName:_.name,vertexShader:Ce,fragmentShader:X,defines:_.defines,customVertexShaderID:Te,customFragmentShaderID:V,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:$,batchingColor:$&&k._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&k.instanceColor!==null,instancingMorph:Pe&&k.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:he,matcap:_e,envMap:ie,envMapMode:ie&&G.mapping,envMapCubeUVHeight:F,aoMap:ue,lightMap:ve,bumpMap:de,normalMap:Se,displacementMap:We,emissiveMap:ze,normalMapObjectSpace:Se&&_.normalMapType===Ym,normalMapTangentSpace:Se&&_.normalMapType===yl,packedNormalMap:Se&&_.normalMapType===yl&&zS(_.normalMap.format),metalnessMap:je,roughnessMap:et,anisotropy:H,anisotropyMap:ne,clearcoat:dt,clearcoatMap:Ee,clearcoatNormalMap:Re,clearcoatRoughnessMap:le,dispersion:rt,retroreflection:B,iridescence:E,iridescenceMap:fe,iridescenceThicknessMap:Le,sheen:Y,sheenColorMap:we,sheenRoughnessMap:ye,specularMap:Me,specularColorMap:Ue,specularIntensityMap:Ye,transmission:K,transmissionMap:at,thicknessMap:q,gradientMap:Ne,opaque:_.transparent===!1&&_.blending===as&&_.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ie,alphaHash:Oe,combine:_.combine,mapUv:he&&p(_.map.channel),aoMapUv:ue&&p(_.aoMap.channel),lightMapUv:ve&&p(_.lightMap.channel),bumpMapUv:de&&p(_.bumpMap.channel),normalMapUv:Se&&p(_.normalMap.channel),displacementMapUv:We&&p(_.displacementMap.channel),emissiveMapUv:ze&&p(_.emissiveMap.channel),metalnessMapUv:je&&p(_.metalnessMap.channel),roughnessMapUv:et&&p(_.roughnessMap.channel),anisotropyMapUv:ne&&p(_.anisotropyMap.channel),clearcoatMapUv:Ee&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:Re&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:we&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:ye&&p(_.sheenRoughnessMap.channel),specularMapUv:Me&&p(_.specularMap.channel),specularColorMapUv:Ue&&p(_.specularColorMap.channel),specularIntensityMapUv:Ye&&p(_.specularIntensityMap.channel),transmissionMapUv:at&&p(_.transmissionMap.channel),thicknessMapUv:q&&p(_.thicknessMap.channel),alphaMapUv:pe&&p(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Se||H),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!N.attributes.uv&&(he||pe),fog:!!R,useFog:_.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&Se===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ce,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,decodeVideoTexture:he&&_.map.isVideoTexture===!0&&gt.getTransfer(_.map.colorSpace)===Ct,decodeVideoTextureEmissive:ze&&_.emissiveMap.isVideoTexture===!0&&gt.getTransfer(_.emissiveMap.colorSpace)===Ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ot,flipSided:_.side===Sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:xe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&_.extensions.multiDraw===!0||$)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function g(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let b in _.defines)M.push(b),M.push(_.defines[b]);return _.isRawShaderMaterial===!1&&(m(M,_),v(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function m(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function v(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function S(_){let M=f[_.type],b;if(M){let D=hs[M];b=Nn.clone(D.uniforms)}else b=_.uniforms;return b}function y(_,M){let b=h.get(M);return b!==void 0?++b.usedTimes:(b=new BS(i,M,_,s),a.push(b),h.set(M,b)),b}function w(_){if(--_.usedTimes===0){let M=a.indexOf(_);a[M]=a[a.length-1],a.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){l.remove(_)}function I(){l.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:S,acquireProgram:y,releaseProgram:w,releaseShaderCache:T,programs:a,dispose:I}}function GS(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,c){i.get(o)[l]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function VS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Pg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ig(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function l(u,f,p,x,g,m){let v=i[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},i[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=o(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=g,v.group=m),e++,v}function c(u,f,p,x,g,m,v){v.reversedDepth===!0&&(g=-g);let S=l(u,f,p,x,g,m);p.transmission>0?n.push(S):p.transparent===!0?s.push(S):t.push(S)}function a(u,f,p,x,g,m){let v=l(u,f,p,x,g,m);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function h(u,f){t.length>1&&t.sort(u||VS),n.length>1&&n.sort(f||Pg),s.length>1&&s.sort(f||Pg)}function d(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:a,finish:d,sort:h}}function WS(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Ig,i.set(n,[o])):s>=r.length?(o=new Ig,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function XS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new me};break;case"SpotLight":t={position:new U,direction:new U,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function qS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var YS=0;function ZS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function jS(i){let e=new XS,t=qS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)n.probe.push(new U);let s=new U,r=new Ze,o=new Ze;function l(a){let h=0,d=0,u=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,v=0,S=0,y=0,w=0,T=0,I=0,_=0,M=0,b=0;a.sort(ZS);for(let k=0,L=a.length;k<L;k++){let R=a[k],N=R.color,P=R.intensity,O=R.distance,G=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ar?G=R.shadow.map.texture:G=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=N.r*P,d+=N.g*P,u+=N.b*P;else if(R.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(R.sh.coefficients[F],P);b++}else if(R.isSunLight){let F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let z=R.shadow,Z=t.get(R);Z.shadowIntensity=z.intensity,Z.shadowBias=z.bias,Z.shadowNormalBias=z.normalBias,Z.shadowRadius=z.radius,Z.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[p]=Z,n.sunShadowMap[p]=G;let se=z.getViewportCount();for(let ce=0;ce<se;ce++)n.sunShadowMatrix[x+ce]=z.getMatrix(ce),n.sunShadowCascade[x+ce]=z._cascadeData[ce];x+=se,p++}n.sun[f]=F,f++}else if(R.isDirectionalLight){let F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let z=R.shadow,Z=t.get(R);Z.shadowIntensity=z.intensity,Z.shadowBias=z.bias,Z.shadowNormalBias=z.normalBias,Z.shadowRadius=z.radius,Z.shadowMapSize=z.mapSize,n.directionalShadow[g]=Z,n.directionalShadowMap[g]=G,n.directionalShadowMatrix[g]=R.shadow.matrix,w++}n.directional[g]=F,g++}else if(R.isSpotLight){let F=e.get(R);F.position.setFromMatrixPosition(R.matrixWorld),F.color.copy(N).multiplyScalar(P),F.distance=O,F.coneCos=Math.cos(R.angle),F.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),F.decay=R.decay,n.spot[v]=F;let z=R.shadow;if(R.map&&(n.spotLightMap[_]=R.map,_++,z.updateMatrices(R),R.castShadow&&M++),n.spotLightMatrix[v]=z.matrix,R.castShadow){let Z=t.get(R);Z.shadowIntensity=z.intensity,Z.shadowBias=z.bias,Z.shadowNormalBias=z.normalBias,Z.shadowRadius=z.radius,Z.shadowMapSize=z.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=G,I++}v++}else if(R.isRectAreaLight){let F=e.get(R);F.color.copy(N).multiplyScalar(P),F.halfWidth.set(R.width*.5,0,0),F.halfHeight.set(0,R.height*.5,0),n.rectArea[S]=F,S++}else if(R.isPointLight){let F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),F.distance=R.distance,F.decay=R.decay,R.castShadow){let z=R.shadow,Z=t.get(R);Z.shadowIntensity=z.intensity,Z.shadowBias=z.bias,Z.shadowNormalBias=z.normalBias,Z.shadowRadius=z.radius,Z.shadowMapSize=z.mapSize,Z.shadowCameraNear=z.camera.near,Z.shadowCameraFar=z.camera.far,n.pointShadow[m]=Z,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=R.shadow.matrix,T++}n.point[m]=F,m++}else if(R.isHemisphereLight){let F=e.get(R);F.skyColor.copy(R.color).multiplyScalar(P),F.groundColor.copy(R.groundColor).multiplyScalar(P),n.hemi[y]=F,y++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==g||D.pointLength!==m||D.spotLength!==v||D.rectAreaLength!==S||D.hemiLength!==y||D.numSunShadows!==p||D.numDirectionalShadows!==w||D.numPointShadows!==T||D.numSpotShadows!==I||D.numSpotMaps!==_||D.numLightProbes!==b)&&(n.sun.length=f,n.directional.length=g,n.spot.length=v,n.rectArea.length=S,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=I,n.spotShadowMap.length=I,n.spotLightMatrix.length=I+_-M,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=b,D.sunLength=f,D.directionalLength=g,D.pointLength=m,D.spotLength=v,D.rectAreaLength=S,D.hemiLength=y,D.numSunShadows=p,D.numDirectionalShadows=w,D.numPointShadows=T,D.numSpotShadows=I,D.numSpotMaps=_,D.numLightProbes=b,n.version=YS++)}function c(a,h){let d=0,u=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let v=0,S=a.length;v<S;v++){let y=a[v];if(y.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(y.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:l,setupView:c,state:n}}function Lg(i){let e=new jS(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function o(u){t.push(u)}function l(u){n.push(u)}function c(u){s.push(u)}function a(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:a,setupLightsView:h,pushLight:o,pushShadow:l,pushLightProbeGrid:c}}function KS(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),l;return o===void 0?(l=new Lg(i),e.set(s,[l])):r>=o.length?(l=new Lg(i),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var $S=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JS=`uniform sampler2D shadow_pass;
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
}`,QS=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],eE=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Dg=new Ze,Sl=new U,Df=new U;function tE(i,e,t){let n=new Do,s=new ae,r=new ae,o=new At,l=new hh,c=new uh,a={},h=t.maxTextureSize,d={[os]:Sn,[Sn]:os,[Ot]:Ot},u=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:$S,fragmentShader:JS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new vt;p.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ge(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hr;let m=this.type;this.render=function(T,I,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===wm&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hr);let M=i.getRenderTarget(),b=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),k=i.state;k.setBlending(dn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let L=m!==this.type;L&&I.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(N=>N.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,N=T.length;R<N;R++){let P=T[R],O=P.shadow;if(O===void 0){Qe("WebGLShadowMap:",P,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let G=O.getFrameExtents();s.multiply(G),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,O.mapSize.y=r.y));let F=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=F,O.map===null||L===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Go){if(P.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new $t(s.x,s.y,{format:ar,type:Zt,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),O.map.texture.name=P.name+".shadowMap",O.map.depthTexture=new ts(s.x,s.y,Xn),O.map.depthTexture.name=P.name+".shadowMapDepth",O.map.depthTexture.format=Qi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=tn,O.map.depthTexture.magFilter=tn}else P.isPointLight?(O.map=new pu(s.x),O.map.depthTexture=new ih(s.x,Gi)):(O.map=new $t(s.x,s.y),O.map.depthTexture=new ts(s.x,s.y,Gi)),O.map.depthTexture.name=P.name+".shadowMap",O.map.depthTexture.format=Qi,this.type===Hr?(O.map.depthTexture.compareFunction=F?uu:hu,O.map.depthTexture.minFilter=Xt,O.map.depthTexture.magFilter=Xt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=tn,O.map.depthTexture.magFilter=tn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let z=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();P.isPointLight!==!0&&O.updateMatrices(P,_);for(let Z=0;Z<z;Z++){let se=O.getCamera(Z);if(P.isPointLight){let ce=O.camera,Ce=O.matrix,X=P.distance||ce.far;X!==ce.far&&(ce.far=X,ce.updateProjectionMatrix()),Sl.setFromMatrixPosition(P.matrixWorld),ce.position.copy(Sl),Df.copy(ce.position),Df.add(QS[Z]),ce.up.copy(eE[Z]),ce.lookAt(Df),ce.updateMatrixWorld(),Ce.makeTranslation(-Sl.x,-Sl.y,-Sl.z),Dg.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Dg,ce.coordinateSystem,ce.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(O.map),i.clear());let ce=O.getViewport(Z);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),k.viewport(o)}n=O.getFrustum(Z),y(I,_,se,P,this.type)}O.isPointLightShadow!==!0&&this.type===Go&&v(O,_),O.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(M,b,D)};function v(T,I){let _=e.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new $t(s.x,s.y,{format:ar,type:Zt}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(I,null,_,u,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(I,null,_,f,x,null)}function S(T,I,_,M){let b=null,D=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)b=D;else if(b=_.isPointLight===!0?c:l,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let k=b.uuid,L=I.uuid,R=a[k];R===void 0&&(R={},a[k]=R);let N=R[L];N===void 0&&(N=b.clone(),R[L]=N,I.addEventListener("dispose",w)),b=N}if(b.visible=I.visible,b.wireframe=I.wireframe,M===Go?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:d[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,_.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let k=i.properties.get(b);k.light=_}return b}function y(T,I,_,M,b){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Go)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let L=e.update(T),R=T.material;if(Array.isArray(R)){let N=L.groups;for(let P=0,O=N.length;P<O;P++){let G=N[P],F=R[G.materialIndex];if(F&&F.visible){let z=S(T,F,M,b);T.onBeforeShadow(i,T,I,_,L,z,G),i.renderBufferDirect(_,null,L,z,T,G),T.onAfterShadow(i,T,I,_,L,z,G)}}}else if(R.visible){let N=S(T,R,M,b);T.onBeforeShadow(i,T,I,_,L,N,null),i.renderBufferDirect(_,null,L,N,T,null),T.onAfterShadow(i,T,I,_,L,N,null)}}let k=T.children;for(let L=0,R=k.length;L<R;L++)y(k[L],I,_,M,b)}function w(T){T.target.removeEventListener("dispose",w);for(let _ in a){let M=a[_],b=T.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function nE(i,e){function t(){let q=!1,Ne=new At,pe=null,Ie=new At(0,0,0,0);return{setMask:function(Oe){pe!==Oe&&!q&&(i.colorMask(Oe,Oe,Oe,Oe),pe=Oe)},setLocked:function(Oe){q=Oe},setClear:function(Oe,xe,nt,Ke,qt){qt===!0&&(Oe*=Ke,xe*=Ke,nt*=Ke),Ne.set(Oe,xe,nt,Ke),Ie.equals(Ne)===!1&&(i.clearColor(Oe,xe,nt,Ke),Ie.copy(Ne))},reset:function(){q=!1,pe=null,Ie.set(-1,0,0,0)}}}function n(){let q=!1,Ne=!1,pe=null,Ie=null,Oe=null;return{setReversed:function(xe){if(Ne!==xe){let nt=e.get("EXT_clip_control");xe?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),Ne=xe;let Ke=Oe;Oe=null,this.setClear(Ke)}},getReversed:function(){return Ne},setTest:function(xe){xe?te(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(xe){pe!==xe&&!q&&(i.depthMask(xe),pe=xe)},setFunc:function(xe){if(Ne&&(xe=sg[xe]),Ie!==xe){switch(xe){case Xc:i.depthFunc(i.NEVER);break;case qc:i.depthFunc(i.ALWAYS);break;case Yc:i.depthFunc(i.LESS);break;case wo:i.depthFunc(i.LEQUAL);break;case Zc:i.depthFunc(i.EQUAL);break;case jc:i.depthFunc(i.GEQUAL);break;case Kc:i.depthFunc(i.GREATER);break;case $c:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=xe}},setLocked:function(xe){q=xe},setClear:function(xe){Oe!==xe&&(Oe=xe,Ne&&(xe=1-xe),i.clearDepth(xe))},reset:function(){q=!1,pe=null,Ie=null,Oe=null,Ne=!1}}}function s(){let q=!1,Ne=null,pe=null,Ie=null,Oe=null,xe=null,nt=null,Ke=null,qt=null;return{setTest:function(Lt){q||(Lt?te(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Lt){Ne!==Lt&&!q&&(i.stencilMask(Lt),Ne=Lt)},setFunc:function(Lt,Li,ji){(pe!==Lt||Ie!==Li||Oe!==ji)&&(i.stencilFunc(Lt,Li,ji),pe=Lt,Ie=Li,Oe=ji)},setOp:function(Lt,Li,ji){(xe!==Lt||nt!==Li||Ke!==ji)&&(i.stencilOp(Lt,Li,ji),xe=Lt,nt=Li,Ke=ji)},setLocked:function(Lt){q=Lt},setClear:function(Lt){qt!==Lt&&(i.clearStencil(Lt),qt=Lt)},reset:function(){q=!1,Ne=null,pe=null,Ie=null,Oe=null,xe=null,nt=null,Ke=null,qt=null}}}let r=new t,o=new n,l=new s,c=new WeakMap,a=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,v=null,S=null,y=null,w=null,T=null,I=null,_=new me(0,0,0),M=0,b=!1,D=null,k=null,L=null,R=null,N=null,P=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,G=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(F)[1]),O=G>=1):F.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),O=G>=2);let z=null,Z={},se=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),Ce=new At().fromArray(se),X=new At().fromArray(ce);function Te(q,Ne,pe,Ie){let Oe=new Uint8Array(4),xe=i.createTexture();i.bindTexture(q,xe),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let nt=0;nt<pe;nt++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Ne,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,Oe):i.texImage2D(Ne+nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Oe);return xe}let V={};V[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),te(i.DEPTH_TEST),o.setFunc(wo),de(!1),Se(of),te(i.CULL_FACE),ue(dn);function te(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function be(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function Pe(q,Ne){return u[q]!==Ne?(i.bindFramebuffer(q,Ne),u[q]=Ne,q===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ne),q===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ne),!0):!1}function $(q,Ne){let pe=p,Ie=!1;if(q){pe=f.get(Ne),pe===void 0&&(pe=[],f.set(Ne,pe));let Oe=q.textures;if(pe.length!==Oe.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,nt=Oe.length;xe<nt;xe++)pe[xe]=i.COLOR_ATTACHMENT0+xe;pe.length=Oe.length,Ie=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(pe)}function he(q){return x!==q?(i.useProgram(q),x=q,!0):!1}let _e={[Ai]:i.FUNC_ADD,[Am]:i.FUNC_SUBTRACT,[Rm]:i.FUNC_REVERSE_SUBTRACT};_e[Cm]=i.MIN,_e[Pm]=i.MAX;let ie={[Gr]:i.ZERO,[Im]:i.ONE,[Lm]:i.SRC_COLOR,[cf]:i.SRC_ALPHA,[Om]:i.SRC_ALPHA_SATURATE,[rl]:i.DST_COLOR,[sl]:i.DST_ALPHA,[Dm]:i.ONE_MINUS_SRC_COLOR,[hf]:i.ONE_MINUS_SRC_ALPHA,[Um]:i.ONE_MINUS_DST_COLOR,[Nm]:i.ONE_MINUS_DST_ALPHA,[Fm]:i.CONSTANT_COLOR,[Bm]:i.ONE_MINUS_CONSTANT_COLOR,[km]:i.CONSTANT_ALPHA,[zm]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(q,Ne,pe,Ie,Oe,xe,nt,Ke,qt,Lt){if(q===dn){g===!0&&(be(i.BLEND),g=!1);return}if(g===!1&&(te(i.BLEND),g=!0),q!==bh){if(q!==m||Lt!==b){if((v!==Ai||w!==Ai)&&(i.blendEquation(i.FUNC_ADD),v=Ai,w=Ai),Lt)switch(q){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ln:i.blendFunc(i.ONE,i.ONE);break;case af:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lf:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ot("WebGLState: Invalid blending: ",q);break}else switch(q){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ln:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case af:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lf:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",q);break}S=null,y=null,T=null,I=null,_.set(0,0,0),M=0,m=q,b=Lt}return}Oe=Oe||Ne,xe=xe||pe,nt=nt||Ie,(Ne!==v||Oe!==w)&&(i.blendEquationSeparate(_e[Ne],_e[Oe]),v=Ne,w=Oe),(pe!==S||Ie!==y||xe!==T||nt!==I)&&(i.blendFuncSeparate(ie[pe],ie[Ie],ie[xe],ie[nt]),S=pe,y=Ie,T=xe,I=nt),(Ke.equals(_)===!1||qt!==M)&&(i.blendColor(Ke.r,Ke.g,Ke.b,qt),_.copy(Ke),M=qt),m=q,b=!1}function ve(q,Ne){q.side===Ot?be(i.CULL_FACE):te(i.CULL_FACE);let pe=q.side===Sn;Ne&&(pe=!pe),de(pe),q.blending===as&&q.transparent===!1?ue(dn):ue(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),r.setMask(q.colorWrite);let Ie=q.stencilWrite;l.setTest(Ie),Ie&&(l.setMask(q.stencilWriteMask),l.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),l.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ze(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function de(q){D!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),D=q)}function Se(q){q!==Em?(te(i.CULL_FACE),q!==k&&(q===of?i.cullFace(i.BACK):q===Tm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),k=q}function We(q){q!==L&&(O&&i.lineWidth(q),L=q)}function ze(q,Ne,pe){q?(te(i.POLYGON_OFFSET_FILL),(R!==Ne||N!==pe)&&(R=Ne,N=pe,o.getReversed()&&(Ne=-Ne),i.polygonOffset(Ne,pe))):be(i.POLYGON_OFFSET_FILL)}function je(q){q?te(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function et(q){q===void 0&&(q=i.TEXTURE0+P-1),z!==q&&(i.activeTexture(q),z=q)}function H(q,Ne,pe){pe===void 0&&(z===null?pe=i.TEXTURE0+P-1:pe=z);let Ie=Z[pe];Ie===void 0&&(Ie={type:void 0,texture:void 0},Z[pe]=Ie),(Ie.type!==q||Ie.texture!==Ne)&&(z!==pe&&(i.activeTexture(pe),z=pe),i.bindTexture(q,Ne||V[q]),Ie.type=q,Ie.texture=Ne)}function dt(){let q=Z[z];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function rt(){try{i.compressedTexImage2D(...arguments)}catch(q){ot("WebGLState:",q)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(q){ot("WebGLState:",q)}}function E(){try{i.texSubImage2D(...arguments)}catch(q){ot("WebGLState:",q)}}function Y(){try{i.texSubImage3D(...arguments)}catch(q){ot("WebGLState:",q)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(q){ot("WebGLState:",q)}}function ne(){try{i.compressedTexSubImage3D(...arguments)}catch(q){ot("WebGLState:",q)}}function Ee(){try{i.texStorage2D(...arguments)}catch(q){ot("WebGLState:",q)}}function Re(){try{i.texStorage3D(...arguments)}catch(q){ot("WebGLState:",q)}}function le(){try{i.texImage2D(...arguments)}catch(q){ot("WebGLState:",q)}}function fe(){try{i.texImage3D(...arguments)}catch(q){ot("WebGLState:",q)}}function Le(q){return d[q]!==void 0?d[q]:i.getParameter(q)}function we(q,Ne){d[q]!==Ne&&(i.pixelStorei(q,Ne),d[q]=Ne)}function ye(q){Ce.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),Ce.copy(q))}function Me(q){X.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),X.copy(q))}function Ue(q,Ne){let pe=a.get(Ne);pe===void 0&&(pe=new WeakMap,a.set(Ne,pe));let Ie=pe.get(q);Ie===void 0&&(Ie=i.getUniformBlockIndex(Ne,q.name),pe.set(q,Ie))}function Ye(q,Ne){let Ie=a.get(Ne).get(q);c.get(Ne)!==Ie&&(i.uniformBlockBinding(Ne,Ie,q.__bindingPointIndex),c.set(Ne,Ie))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},z=null,Z={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,v=null,S=null,y=null,w=null,T=null,I=null,_=new me(0,0,0),M=0,b=!1,D=null,k=null,L=null,R=null,N=null,Ce.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:te,disable:be,bindFramebuffer:Pe,drawBuffers:$,useProgram:he,setBlending:ue,setMaterial:ve,setFlipSided:de,setCullFace:Se,setLineWidth:We,setPolygonOffset:ze,setScissorTest:je,activeTexture:et,bindTexture:H,unbindTexture:dt,compressedTexImage2D:rt,compressedTexImage3D:B,texImage2D:le,texImage3D:fe,pixelStorei:we,getParameter:Le,updateUBOMapping:Ue,uniformBlockBinding:Ye,texStorage2D:Ee,texStorage3D:Re,texSubImage2D:E,texSubImage3D:Y,compressedTexSubImage2D:K,compressedTexSubImage3D:ne,scissor:ye,viewport:Me,reset:at}}function iE(i,e,t,n,s,r,o){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new ae,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(B,E){return p?new OffscreenCanvas(B,E):Co("canvas")}function g(B,E,Y){let K=1,ne=rt(B);if((ne.width>Y||ne.height>Y)&&(K=Y/Math.max(ne.width,ne.height)),K<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let Ee=Math.floor(K*ne.width),Re=Math.floor(K*ne.height);u===void 0&&(u=x(Ee,Re));let le=E?x(Ee,Re):u;return le.width=Ee,le.height=Re,le.getContext("2d").drawImage(B,0,0,Ee,Re),Qe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Ee+"x"+Re+")."),le}else return"data"in B&&Qe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),B;return B}function m(B){return B.generateMipmaps}function v(B){i.generateMipmap(B)}function S(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(B,E,Y,K,ne,Ee=!1){if(B!==null){if(i[B]!==void 0)return i[B];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Re;K&&(Re=e.get("EXT_texture_norm16"),Re||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let le=E;if(E===i.RED&&(Y===i.FLOAT&&(le=i.R32F),Y===i.HALF_FLOAT&&(le=i.R16F),Y===i.UNSIGNED_BYTE&&(le=i.R8),Y===i.UNSIGNED_SHORT&&Re&&(le=Re.R16_EXT),Y===i.SHORT&&Re&&(le=Re.R16_SNORM_EXT)),E===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(le=i.R8UI),Y===i.UNSIGNED_SHORT&&(le=i.R16UI),Y===i.UNSIGNED_INT&&(le=i.R32UI),Y===i.BYTE&&(le=i.R8I),Y===i.SHORT&&(le=i.R16I),Y===i.INT&&(le=i.R32I)),E===i.RG&&(Y===i.FLOAT&&(le=i.RG32F),Y===i.HALF_FLOAT&&(le=i.RG16F),Y===i.UNSIGNED_BYTE&&(le=i.RG8),Y===i.UNSIGNED_SHORT&&Re&&(le=Re.RG16_EXT),Y===i.SHORT&&Re&&(le=Re.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(le=i.RG8UI),Y===i.UNSIGNED_SHORT&&(le=i.RG16UI),Y===i.UNSIGNED_INT&&(le=i.RG32UI),Y===i.BYTE&&(le=i.RG8I),Y===i.SHORT&&(le=i.RG16I),Y===i.INT&&(le=i.RG32I)),E===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(le=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(le=i.RGB16UI),Y===i.UNSIGNED_INT&&(le=i.RGB32UI),Y===i.BYTE&&(le=i.RGB8I),Y===i.SHORT&&(le=i.RGB16I),Y===i.INT&&(le=i.RGB32I)),E===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),Y===i.UNSIGNED_INT&&(le=i.RGBA32UI),Y===i.BYTE&&(le=i.RGBA8I),Y===i.SHORT&&(le=i.RGBA16I),Y===i.INT&&(le=i.RGBA32I)),E===i.RGB&&(Y===i.UNSIGNED_SHORT&&Re&&(le=Re.RGB16_EXT),Y===i.SHORT&&Re&&(le=Re.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(le=i.R11F_G11F_B10F)),E===i.RGBA){let fe=Ee?Ca:gt.getTransfer(ne);Y===i.FLOAT&&(le=i.RGBA32F),Y===i.HALF_FLOAT&&(le=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(le=fe===Ct?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&Re&&(le=Re.RGBA16_EXT),Y===i.SHORT&&Re&&(le=Re.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function w(B,E){let Y;return B?E===null||E===Gi||E===or?Y=i.DEPTH24_STENCIL8:E===Xn?Y=i.DEPTH32F_STENCIL8:E===Wo&&(Y=i.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Gi||E===or?Y=i.DEPTH_COMPONENT24:E===Xn?Y=i.DEPTH_COMPONENT32F:E===Wo&&(Y=i.DEPTH_COMPONENT16),Y}function T(B,E){return m(B)===!0||B.isFramebufferTexture&&B.minFilter!==tn&&B.minFilter!==Xt?Math.log2(Math.max(E.width,E.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?E.mipmaps.length:1}function I(B){let E=B.target;E.removeEventListener("dispose",I),M(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&d.delete(E)}function _(B){let E=B.target;E.removeEventListener("dispose",_),D(E)}function M(B){let E=n.get(B);if(E.__webglInit===void 0)return;let Y=B.source,K=f.get(Y);if(K){let ne=K[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(B),Object.keys(K).length===0&&f.delete(Y)}n.remove(B)}function b(B){let E=n.get(B);i.deleteTexture(E.__webglTexture);let Y=B.source,K=f.get(Y);delete K[E.__cacheKey],o.memory.textures--}function D(B){let E=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let ne=0;ne<E.__webglFramebuffer[K].length;ne++)i.deleteFramebuffer(E.__webglFramebuffer[K][ne]);else i.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)i.deleteFramebuffer(E.__webglFramebuffer[K]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let Y=B.textures;for(let K=0,ne=Y.length;K<ne;K++){let Ee=n.get(Y[K]);Ee.__webglTexture&&(i.deleteTexture(Ee.__webglTexture),o.memory.textures--),n.remove(Y[K])}n.remove(B)}let k=0;function L(){k=0}function R(){return k}function N(B){k=B}function P(){let B=k;return B>=s.maxTextures&&Qe("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,B}function O(B){let E=[];return E.push(B.wrapS),E.push(B.wrapT),E.push(B.wrapR||0),E.push(B.magFilter),E.push(B.minFilter),E.push(B.anisotropy),E.push(B.internalFormat),E.push(B.format),E.push(B.type),E.push(B.generateMipmaps),E.push(B.premultiplyAlpha),E.push(B.flipY),E.push(B.unpackAlignment),E.push(B.colorSpace),E.join()}function G(B,E){let Y=n.get(B);if(B.isVideoTexture&&H(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&Y.__version!==B.version){let K=B.image;if(K===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{be(Y,B,E);return}}else B.isExternalTexture&&(Y.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+E)}function F(B,E){let Y=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&Y.__version!==B.version){be(Y,B,E);return}else B.isExternalTexture&&(Y.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+E)}function z(B,E){let Y=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&Y.__version!==B.version){be(Y,B,E);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+E)}function Z(B,E){let Y=n.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&Y.__version!==B.version){Pe(Y,B,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+E)}let se={[en]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[Ao]:i.MIRRORED_REPEAT},ce={[tn]:i.NEAREST,[Eh]:i.NEAREST_MIPMAP_NEAREST,[qr]:i.NEAREST_MIPMAP_LINEAR,[Xt]:i.LINEAR,[Vo]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},Ce={[jm]:i.NEVER,[eg]:i.ALWAYS,[Km]:i.LESS,[hu]:i.LEQUAL,[$m]:i.EQUAL,[uu]:i.GEQUAL,[Jm]:i.GREATER,[Qm]:i.NOTEQUAL};function X(B,E){if(E.type===Xn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Xt||E.magFilter===Vo||E.magFilter===qr||E.magFilter===di||E.minFilter===Xt||E.minFilter===Vo||E.minFilter===qr||E.minFilter===di)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,se[E.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,se[E.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,se[E.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,ce[E.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,ce[E.minFilter]),E.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,Ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===tn||E.minFilter!==qr&&E.minFilter!==di||E.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(B,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Te(B,E){let Y=!1;B.__webglInit===void 0&&(B.__webglInit=!0,E.addEventListener("dispose",I));let K=E.source,ne=f.get(K);ne===void 0&&(ne={},f.set(K,ne));let Ee=O(E);if(Ee!==B.__cacheKey){ne[Ee]===void 0&&(ne[Ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ne[Ee].usedTimes++;let Re=ne[B.__cacheKey];Re!==void 0&&(ne[B.__cacheKey].usedTimes--,Re.usedTimes===0&&b(E)),B.__cacheKey=Ee,B.__webglTexture=ne[Ee].texture}return Y}function V(B,E,Y){return Math.floor(Math.floor(B/Y)/E)}function te(B,E,Y,K){let Ee=B.updateRanges;if(Ee.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,Y,K,E.data);else{Ee.sort((we,ye)=>we.start-ye.start);let Re=0;for(let we=1;we<Ee.length;we++){let ye=Ee[Re],Me=Ee[we],Ue=ye.start+ye.count,Ye=V(Me.start,E.width,4),at=V(ye.start,E.width,4);Me.start<=Ue+1&&Ye===at&&V(Me.start+Me.count-1,E.width,4)===Ye?ye.count=Math.max(ye.count,Me.start+Me.count-ye.start):(++Re,Ee[Re]=Me)}Ee.length=Re+1;let le=t.getParameter(i.UNPACK_ROW_LENGTH),fe=t.getParameter(i.UNPACK_SKIP_PIXELS),Le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let we=0,ye=Ee.length;we<ye;we++){let Me=Ee[we],Ue=Math.floor(Me.start/4),Ye=Math.ceil(Me.count/4),at=Ue%E.width,q=Math.floor(Ue/E.width),Ne=Ye,pe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,at),t.pixelStorei(i.UNPACK_SKIP_ROWS,q),t.texSubImage2D(i.TEXTURE_2D,0,at,q,Ne,pe,Y,K,E.data)}B.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,le),t.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Le)}}function be(B,E,Y){let K=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=i.TEXTURE_3D);let ne=Te(B,E),Ee=E.source;t.bindTexture(K,B.__webglTexture,i.TEXTURE0+Y);let Re=n.get(Ee);if(Ee.version!==Re.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let pe=gt.getPrimaries(gt.workingColorSpace),Ie=E.colorSpace===Dn?null:gt.getPrimaries(E.colorSpace),Oe=E.colorSpace===Dn||pe===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let fe=g(E.image,!1,s.maxTextureSize);fe=dt(E,fe);let Le=r.convert(E.format,E.colorSpace),we=r.convert(E.type),ye=y(E.internalFormat,Le,we,E.normalized,E.colorSpace,E.isVideoTexture);X(K,E);let Me,Ue=E.mipmaps,Ye=E.isVideoTexture!==!0,at=Re.__version===void 0||ne===!0,q=Ee.dataReady,Ne=T(E,fe);if(E.isDepthTexture)ye=w(E.format===ls,E.type),at&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,ye,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,ye,fe.width,fe.height,0,Le,we,null));else if(E.isDataTexture)if(Ue.length>0){Ye&&at&&t.texStorage2D(i.TEXTURE_2D,Ne,ye,Ue[0].width,Ue[0].height);for(let pe=0,Ie=Ue.length;pe<Ie;pe++)Me=Ue[pe],Ye?q&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,Me.width,Me.height,Le,we,Me.data):t.texImage2D(i.TEXTURE_2D,pe,ye,Me.width,Me.height,0,Le,we,Me.data);E.generateMipmaps=!1}else Ye?(at&&t.texStorage2D(i.TEXTURE_2D,Ne,ye,fe.width,fe.height),q&&te(E,fe,Le,we)):t.texImage2D(i.TEXTURE_2D,0,ye,fe.width,fe.height,0,Le,we,fe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ye&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,ye,Ue[0].width,Ue[0].height,fe.depth);for(let pe=0,Ie=Ue.length;pe<Ie;pe++)if(Me=Ue[pe],E.format!==Qn)if(Le!==null)if(Ye){if(q)if(E.layerUpdates.size>0){let Oe=Af(Me.width,Me.height,E.format,E.type);for(let xe of E.layerUpdates){let nt=Me.data.subarray(xe*Oe/Me.data.BYTES_PER_ELEMENT,(xe+1)*Oe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,xe,Me.width,Me.height,1,Le,nt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,Me.width,Me.height,fe.depth,Le,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,ye,Me.width,Me.height,fe.depth,0,Me.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,Me.width,Me.height,fe.depth,Le,we,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,ye,Me.width,Me.height,fe.depth,0,Le,we,Me.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ye&&at&&t.texStorage2D(i.TEXTURE_2D,Ne,ye,Ue[0].width,Ue[0].height);for(let pe=0,Ie=Ue.length;pe<Ie;pe++)Me=Ue[pe],E.format!==Qn?Le!==null?Ye?q&&t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,Me.width,Me.height,Le,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,ye,Me.width,Me.height,0,Me.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?q&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,Me.width,Me.height,Le,we,Me.data):t.texImage2D(i.TEXTURE_2D,pe,ye,Me.width,Me.height,0,Le,we,Me.data)}else if(E.isDataArrayTexture)if(Ye){if(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,ye,fe.width,fe.height,fe.depth),q)if(E.layerUpdates.size>0){let pe=Af(fe.width,fe.height,E.format,E.type);for(let Ie of E.layerUpdates){let Oe=fe.data.subarray(Ie*pe/fe.data.BYTES_PER_ELEMENT,(Ie+1)*pe/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ie,fe.width,fe.height,1,Le,we,Oe)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Le,we,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,fe.width,fe.height,fe.depth,0,Le,we,fe.data);else if(E.isData3DTexture)Ye?(at&&t.texStorage3D(i.TEXTURE_3D,Ne,ye,fe.width,fe.height,fe.depth),q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Le,we,fe.data)):t.texImage3D(i.TEXTURE_3D,0,ye,fe.width,fe.height,fe.depth,0,Le,we,fe.data);else if(E.isFramebufferTexture){if(at)if(Ye)t.texStorage2D(i.TEXTURE_2D,Ne,ye,fe.width,fe.height);else{let pe=fe.width,Ie=fe.height;for(let Oe=0;Oe<Ne;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,ye,pe,Ie,0,Le,we,null),pe>>=1,Ie>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let pe=i.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),fe.parentNode!==pe){pe.appendChild(fe),d.add(E),pe.onpaint=Ie=>{let Oe=Ie.changedElements;for(let xe of d)Oe.includes(xe.image)&&(xe.needsUpdate=!0)},pe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,fe);else{let Oe=i.RGBA,xe=i.RGBA,nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Oe,xe,nt,fe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Ye&&at){let pe=rt(Ue[0]);t.texStorage2D(i.TEXTURE_2D,Ne,ye,pe.width,pe.height)}for(let pe=0,Ie=Ue.length;pe<Ie;pe++)Me=Ue[pe],Ye?q&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,Le,we,Me):t.texImage2D(i.TEXTURE_2D,pe,ye,Le,we,Me);E.generateMipmaps=!1}else if(Ye){if(at){let pe=rt(fe);t.texStorage2D(i.TEXTURE_2D,Ne,ye,pe.width,pe.height)}q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,we,fe)}else t.texImage2D(i.TEXTURE_2D,0,ye,Le,we,fe);m(E)&&v(K),Re.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}B.__version=E.version}function Pe(B,E,Y){if(E.image.length!==6)return;let K=Te(B,E),ne=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+Y);let Ee=n.get(ne);if(ne.version!==Ee.__version||K===!0){t.activeTexture(i.TEXTURE0+Y);let Re=gt.getPrimaries(gt.workingColorSpace),le=E.colorSpace===Dn?null:gt.getPrimaries(E.colorSpace),fe=E.colorSpace===Dn||Re===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Le=E.isCompressedTexture||E.image[0].isCompressedTexture,we=E.image[0]&&E.image[0].isDataTexture,ye=[];for(let xe=0;xe<6;xe++)!Le&&!we?ye[xe]=g(E.image[xe],!0,s.maxCubemapSize):ye[xe]=we?E.image[xe].image:E.image[xe],ye[xe]=dt(E,ye[xe]);let Me=ye[0],Ue=r.convert(E.format,E.colorSpace),Ye=r.convert(E.type),at=y(E.internalFormat,Ue,Ye,E.normalized,E.colorSpace),q=E.isVideoTexture!==!0,Ne=Ee.__version===void 0||K===!0,pe=ne.dataReady,Ie=T(E,Me);X(i.TEXTURE_CUBE_MAP,E);let Oe;if(Le){q&&Ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,at,Me.width,Me.height);for(let xe=0;xe<6;xe++){Oe=ye[xe].mipmaps;for(let nt=0;nt<Oe.length;nt++){let Ke=Oe[nt];E.format!==Qn?Ue!==null?q?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt,0,0,Ke.width,Ke.height,Ue,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt,at,Ke.width,Ke.height,0,Ke.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt,0,0,Ke.width,Ke.height,Ue,Ye,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt,at,Ke.width,Ke.height,0,Ue,Ye,Ke.data)}}}else{if(Oe=E.mipmaps,q&&Ne){Oe.length>0&&Ie++;let xe=rt(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,at,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(we){q?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ye[xe].width,ye[xe].height,Ue,Ye,ye[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,at,ye[xe].width,ye[xe].height,0,Ue,Ye,ye[xe].data);for(let nt=0;nt<Oe.length;nt++){let qt=Oe[nt].image[xe].image;q?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt+1,0,0,qt.width,qt.height,Ue,Ye,qt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt+1,at,qt.width,qt.height,0,Ue,Ye,qt.data)}}else{q?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ue,Ye,ye[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,at,Ue,Ye,ye[xe]);for(let nt=0;nt<Oe.length;nt++){let Ke=Oe[nt];q?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt+1,0,0,Ue,Ye,Ke.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt+1,at,Ue,Ye,Ke.image[xe])}}}m(E)&&v(i.TEXTURE_CUBE_MAP),Ee.__version=ne.version,E.onUpdate&&E.onUpdate(E)}B.__version=E.version}function $(B,E,Y,K,ne,Ee){let Re=r.convert(Y.format,Y.colorSpace),le=r.convert(Y.type),fe=y(Y.internalFormat,Re,le,Y.normalized,Y.colorSpace),Le=n.get(E),we=n.get(Y);if(we.__renderTarget=E,!Le.__hasExternalTextures){let ye=Math.max(1,E.width>>Ee),Me=Math.max(1,E.height>>Ee);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,Ee,fe,ye,Me,E.depth,0,Re,le,null):t.texImage2D(ne,Ee,fe,ye,Me,0,Re,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,B),et(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,ne,we.__webglTexture,0,je(E)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,ne,we.__webglTexture,Ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(B,E,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,B),E.depthBuffer){let K=E.depthTexture,ne=K&&K.isDepthTexture?K.type:null,Ee=w(E.stencilBuffer,ne),Re=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;et(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je(E),Ee,E.width,E.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,je(E),Ee,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,B)}else{let K=E.textures;for(let ne=0;ne<K.length;ne++){let Ee=K[ne],Re=r.convert(Ee.format,Ee.colorSpace),le=r.convert(Ee.type),fe=y(Ee.internalFormat,Re,le,Ee.normalized,Ee.colorSpace);et(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je(E),fe,E.width,E.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,je(E),fe,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,fe,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(B,E,Y){let K=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,B),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(E.depthTexture);if(ne.__renderTarget=E,(!ne.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),ne.__webglTexture===void 0){ne.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),X(i.TEXTURE_CUBE_MAP,E.depthTexture);let Le=r.convert(E.depthTexture.format),we=r.convert(E.depthTexture.type),ye;E.depthTexture.format===Qi?ye=i.DEPTH_COMPONENT24:E.depthTexture.format===ls&&(ye=i.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ye,E.width,E.height,0,Le,we,null)}}else G(E.depthTexture,0);let Ee=ne.__webglTexture,Re=je(E),le=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,fe=E.depthTexture.format===ls?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Qi)et(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,le,Ee,0,Re):i.framebufferTexture2D(i.FRAMEBUFFER,fe,le,Ee,0);else if(E.depthTexture.format===ls)et(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,le,Ee,0,Re):i.framebufferTexture2D(i.FRAMEBUFFER,fe,le,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(B){let E=n.get(B),Y=B.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==B.depthTexture){let K=B.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){let ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",ne)};K.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=K}if(B.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let K=0;K<6;K++)_e(E.__webglFramebuffer[K],B,K);else{let K=B.texture.mipmaps;K&&K.length>0?_e(E.__webglFramebuffer[0],B,0):_e(E.__webglFramebuffer,B,0)}else if(Y){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=i.createRenderbuffer(),he(E.__webglDepthbuffer[K],B,!1);else{let ne=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,Ee)}}else{let K=B.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),he(E.__webglDepthbuffer,B,!1);else{let ne=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,Ee)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(B,E,Y){let K=n.get(B);E!==void 0&&$(K.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&ie(B)}function ve(B){let E=B.texture,Y=n.get(B),K=n.get(E);B.addEventListener("dispose",_);let ne=B.textures,Ee=B.isWebGLCubeRenderTarget===!0,Re=ne.length>1;if(Re||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=E.version,o.memory.textures++),Ee){Y.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[le]=[];for(let fe=0;fe<E.mipmaps.length;fe++)Y.__webglFramebuffer[le][fe]=i.createFramebuffer()}else Y.__webglFramebuffer[le]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)Y.__webglFramebuffer[le]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Re)for(let le=0,fe=ne.length;le<fe;le++){let Le=n.get(ne[le]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),o.memory.textures++)}if(B.samples>0&&et(B)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let le=0;le<ne.length;le++){let fe=ne[le];Y.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[le]);let Le=r.convert(fe.format,fe.colorSpace),we=r.convert(fe.type),ye=y(fe.internalFormat,Le,we,fe.normalized,fe.colorSpace,B.isXRRenderTarget===!0),Me=je(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,ye,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,Y.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),he(Y.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),X(i.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)$(Y.__webglFramebuffer[le][fe],B,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,fe);else $(Y.__webglFramebuffer[le],B,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(E)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let le=0,fe=ne.length;le<fe;le++){let Le=ne[le],we=n.get(Le),ye=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(ye=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,we.__webglTexture),X(ye,Le),$(Y.__webglFramebuffer,B,Le,i.COLOR_ATTACHMENT0+le,ye,0),m(Le)&&v(ye)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(le=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,K.__webglTexture),X(le,E),E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)$(Y.__webglFramebuffer[fe],B,E,i.COLOR_ATTACHMENT0,le,fe);else $(Y.__webglFramebuffer,B,E,i.COLOR_ATTACHMENT0,le,0);m(E)&&v(le),t.unbindTexture()}B.depthBuffer&&ie(B)}function de(B){let E=B.textures;for(let Y=0,K=E.length;Y<K;Y++){let ne=E[Y];if(m(ne)){let Ee=S(B),Re=n.get(ne).__webglTexture;t.bindTexture(Ee,Re),v(Ee),t.unbindTexture()}}}let Se=[],We=[];function ze(B){if(B.samples>0){if(et(B)===!1){let E=B.textures,Y=B.width,K=B.height,ne=i.COLOR_BUFFER_BIT,Ee=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(B),le=E.length>1;if(le)for(let Le=0;Le<E.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let fe=B.texture.mipmaps;fe&&fe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Le=0;Le<E.length;Le++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Le]);let we=n.get(E[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,Y,K,0,0,Y,K,ne,i.NEAREST),c===!0&&(Se.length=0,We.length=0,Se.push(i.COLOR_ATTACHMENT0+Le),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(Se.push(Ee),We.push(Ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,We)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let Le=0;Le<E.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Le]);let we=n.get(E[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,we,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&c){let E=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function je(B){return Math.min(s.maxSamples,B.samples)}function et(B){let E=n.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function H(B){let E=o.render.frame;h.get(B)!==E&&(h.set(B,E),B.update())}function dt(B,E){let Y=B.colorSpace,K=B.format,ne=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||Y!==Ln&&Y!==Dn&&(gt.getTransfer(Y)===Ct?(K!==Qn||ne!==Wn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",Y)),E}function rt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(a.width=B.naturalWidth||B.width,a.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(a.width=B.displayWidth,a.height=B.displayHeight):(a.width=B.width,a.height=B.height),a}this.allocateTextureUnit=P,this.resetTextureUnits=L,this.getTextureUnits=R,this.setTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=F,this.setTexture3D=z,this.setTextureCube=Z,this.rebindTextures=ue,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=$,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function sE(i,e){function t(n,s=Dn){let r,o=gt.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===wh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ah)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ff)return i.BYTE;if(n===pf)return i.SHORT;if(n===Wo)return i.UNSIGNED_SHORT;if(n===Th)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===Zt)return i.HALF_FLOAT;if(n===xf)return i.ALPHA;if(n===vf)return i.RGB;if(n===Qn)return i.RGBA;if(n===Qi)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===Rh)return i.RED;if(n===Ch)return i.RED_INTEGER;if(n===ar)return i.RG;if(n===Ph)return i.RG_INTEGER;if(n===Ih)return i.RGBA_INTEGER;if(n===fl||n===pl||n===ml||n===gl)if(o===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ml)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lh||n===Dh||n===Nh||n===Uh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oh||n===Fh||n===Bh||n===kh||n===zh||n===xl||n===Hh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oh||n===Fh)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===kh)return r.COMPRESSED_R11_EAC;if(n===zh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xl)return r.COMPRESSED_RG11_EAC;if(n===Hh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Gh||n===Vh||n===Wh||n===Xh||n===qh||n===Yh||n===Zh||n===jh||n===Kh||n===$h||n===Jh||n===Qh||n===eu||n===tu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$h)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nu||n===iu||n===su)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===nu)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===iu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===su)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ru||n===ou||n===vl||n===au)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ru)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ou)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===au)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var rE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oE=`
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

}`,Hf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ba(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new bt({vertexShader:rE,fragmentShader:oE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ge(new an(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gf=class extends ki{constructor(e,t){super();let n=this,s=null,r=1,o=null,l="local-floor",c=1,a=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new Hf,m={},v=t.getContextAttributes(),S=null,y=null,w=[],T=[],I=new ae,_=null,M=null,b=new gn;b.viewport=new At;let D=new gn;D.viewport=new At;let k=[b,D],L=new _h,R=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let te=w[V];return te===void 0&&(te=new Lo,w[V]=te),te.getTargetRaySpace()},this.getControllerGrip=function(V){let te=w[V];return te===void 0&&(te=new Lo,w[V]=te),te.getGripSpace()},this.getHand=function(V){let te=w[V];return te===void 0&&(te=new Lo,w[V]=te),te.getHandSpace()};function P(V){let te=T.indexOf(V.inputSource);if(te===-1)return;let be=w[te];be!==void 0&&(be.update(V.inputSource,V.frame,a||o),be.dispatchEvent({type:V.type,data:V.inputSource}))}function O(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",G);for(let V=0;V<w.length;V++){let te=T[V];te!==null&&(T[V]=null,w[V].disconnect(te))}R=null,N=null,g.reset();for(let V in m)delete m[V];if(e.setRenderTarget(S),f=null,u=null,d=null,s=null,y=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(I.width,I.height,!1),M!==null){let V=M.camera;V.fov=M.fov,V.zoom=M.zoom,V.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){l=V,n.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||o},this.setReferenceSpace=function(V){a=V},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",O),s.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Pe=null,$=null;v.depth&&($=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=v.stencil?ls:Qi,Pe=v.stencil?or:Gi);let he={colorFormat:t.RGBA8,depthFormat:$,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(he),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new $t(u.textureWidth,u.textureHeight,{format:Qn,type:Wn,depthTexture:new ts(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let be={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new $t(f.framebufferWidth,f.framebufferHeight,{format:Qn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),a=null,o=await s.requestReferenceSpace(l),Te.setContext(s),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(V){for(let te=0;te<V.removed.length;te++){let be=V.removed[te],Pe=T.indexOf(be);Pe>=0&&(T[Pe]=null,w[Pe].disconnect(be))}for(let te=0;te<V.added.length;te++){let be=V.added[te],Pe=T.indexOf(be);if(Pe===-1){for(let he=0;he<w.length;he++)if(he>=T.length){T.push(be),Pe=he;break}else if(T[he]===null){T[he]=be,Pe=he;break}if(Pe===-1)break}let $=w[Pe];$&&$.connect(be)}}let F=new U,z=new U;function Z(V,te,be){F.setFromMatrixPosition(te.matrixWorld),z.setFromMatrixPosition(be.matrixWorld);let Pe=F.distanceTo(z),$=te.projectionMatrix.elements,he=be.projectionMatrix.elements,_e=$[14]/($[10]-1),ie=$[14]/($[10]+1),ue=($[9]+1)/$[5],ve=($[9]-1)/$[5],de=($[8]-1)/$[0],Se=(he[8]+1)/he[0],We=_e*de,ze=_e*Se,je=Pe/(-de+Se),et=je*-de;if(te.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(et),V.translateZ(je),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),$[10]===-1)V.projectionMatrix.copy(te.projectionMatrix),V.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let H=_e+je,dt=ie+je,rt=We-et,B=ze+(Pe-et),E=ue*ie/dt*H,Y=ve*ie/dt*H;V.projectionMatrix.makePerspective(rt,B,E,Y,H,dt),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function se(V,te){te===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(te.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let te=V.near,be=V.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(be=g.depthFar)),L.near=D.near=b.near=te,L.far=D.far=b.far=be,(R!==L.near||N!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),R=L.near,N=L.far),L.layers.mask=V.layers.mask|6,b.layers.mask=L.layers.mask&-5,D.layers.mask=L.layers.mask&-3;let Pe=V.parent,$=L.cameras;se(L,Pe);for(let he=0;he<$.length;he++)se($[he],Pe);$.length===2?Z(L,b,D):L.projectionMatrix.copy(b.projectionMatrix),M===null&&V.isPerspectiveCamera&&(M={camera:V,fov:V.fov,zoom:V.zoom}),ce(V,L,Pe)};function ce(V,te,be){be===null?V.matrix.copy(te.matrixWorld):(V.matrix.copy(be.matrixWorld),V.matrix.invert(),V.matrix.multiply(te.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(te.projectionMatrix),V.projectionMatrixInverse.copy(te.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Rr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(V){c=V,u!==null&&(u.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(V){return m[V]};let Ce=null;function X(V,te){if(h=te.getViewerPose(a||o),p=te,h!==null){let be=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Pe=!1;be.length!==L.cameras.length&&(L.cameras.length=0,Pe=!0);for(let ie=0;ie<be.length;ie++){let ue=be[ie],ve=null;if(f!==null)ve=f.getViewport(ue);else{let Se=d.getViewSubImage(u,ue);ve=Se.viewport,ie===0&&(e.setRenderTargetTextures(y,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(y))}let de=k[ie];de===void 0&&(de=new gn,de.layers.enable(ie),de.viewport=new At,k[ie]=de),de.matrix.fromArray(ue.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(ue.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(ve.x,ve.y,ve.width,ve.height),ie===0&&(L.matrix.copy(de.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Pe===!0&&L.cameras.push(de)}let $=s.enabledFeatures;if($&&$.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let ie=d.getDepthInformation(be[0]);ie&&ie.isValid&&ie.texture&&g.init(ie,s.renderState)}if($&&$.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let ie=0;ie<be.length;ie++){let ue=be[ie].camera;if(ue){let ve=m[ue];ve||(ve=new Ba,m[ue]=ve);let de=d.getCameraImage(ue);ve.sourceTexture=de}}}}for(let be=0;be<w.length;be++){let Pe=T[be],$=w[be];Pe!==null&&$!==void 0&&$.update(Pe,te,a||o)}Ce&&Ce(V,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),p=null}let Te=new Ng;Te.setAnimationLoop(X),this.setAnimationLoop=function(V){Ce=V},this.dispose=function(){}}},aE=new Ze,zg=new ut;zg.set(-1,0,0,0,1,0,0,0,1);function lE(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Ef(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,S,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&l(g,m)):m.isPointsMaterial?c(g,m,v,S):m.isSpriteMaterial?a(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Sn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Sn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=e.get(m),S=v.envMap,y=v.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(aE.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(zg),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function l(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,v,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=S*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Sn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cE(i,e,t,n){let s={},r={},o=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,w){let T=w.program;n.uniformBlockBinding(y,T)}function a(y,w){let T=s[y.id];T===void 0&&(g(y),T=h(y),s[y.id]=T,y.addEventListener("dispose",v));let I=w.program;n.updateUBOMapping(y,I);let _=e.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let w=d();y.__bindingPointIndex=w;let T=i.createBuffer(),I=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,I,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,T),T}function d(){for(let y=0;y<l;y++)if(o.indexOf(y)===-1)return o.push(y),y;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let w=s[y.id],T=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let _=0,M=T.length;_<M;_++){let b=T[_];if(Array.isArray(b))for(let D=0,k=b.length;D<k;D++)f(b[D],_,D,I);else f(b,_,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,w,T,I){if(x(y,w,T,I)===!0){let _=y.__offset,M=y.value;if(Array.isArray(M)){let b=0;for(let D=0;D<M.length;D++){let k=M[D],L=m(k);p(k,y.__data,b),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(b+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(M,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function p(y,w,T){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,T)}function x(y,w,T,I){let _=y.value,M=w+"_"+T;if(I[M]===void 0)return typeof _=="number"||typeof _=="boolean"?I[M]=_:ArrayBuffer.isView(_)?I[M]=_.slice():I[M]=_.clone(),!0;{let b=I[M];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return I[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function g(y){let w=y.uniforms,T=0,I=16;for(let M=0,b=w.length;M<b;M++){let D=Array.isArray(w[M])?w[M]:[w[M]];for(let k=0,L=D.length;k<L;k++){let R=D[k],N=Array.isArray(R.value)?R.value:[R.value];for(let P=0,O=N.length;P<O;P++){let G=N[P],F=m(G),z=T%I,Z=z%F.boundary,se=z+Z;T+=Z,se!==0&&I-se<F.storage&&(T+=I-se),R.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=T,T+=F.storage}}}let _=T%I;return _>0&&(T+=I-_),y.__size=T,y.__cache={},this}function m(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",y),w}function v(y){let w=y.target;w.removeEventListener("dispose",v);let T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function S(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:a,dispose:S}}var hE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),cs=null;function uE(){return cs===null&&(cs=new wi(hE,16,16,ar,Zt),cs.name="DFG_LUT",cs.minFilter=Xt,cs.magFilter=Xt,cs.wrapS=Cn,cs.wrapT=Cn,cs.generateMipmaps=!1,cs.needsUpdate=!0),cs}var mu=class{constructor(e={}){let{canvas:t=tg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:a=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Wn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,g=new Set([Ih,Ph,Ch]),m=new Set([Wn,Gi,Wo,or,wh,Ah]),v=new Uint32Array(4),S=new Int32Array(4),y=new U,w=null,T=null,I=[],_=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,D=!1,k=null,L=null,R=null,N=null;this._outputColorSpace=ft;let P=0,O=0,G=null,F=-1,z=null,Z=new At,se=new At,ce=null,Ce=new me(0),X=0,Te=t.width,V=t.height,te=1,be=null,Pe=null,$=new At(0,0,Te,V),he=new At(0,0,Te,V),_e=!1,ie=new Do,ue=!1,ve=!1,de=new Ze,Se=new U,We=new At,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function et(){return G===null?te:1}let H=n;function dt(A,W){return t.getContext(A,W)}let rt,B,E,Y,K,ne,Ee,Re,le,fe,Le,we,ye,Me,Ue,Ye,at,q,Ne,pe,Ie,Oe,xe;try{let A={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:a,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",qt,!1),t.addEventListener("webglcontextrestored",Lt,!1),t.addEventListener("webglcontextcreationerror",Li,!1),H===null){let W="webgl2";if(H=dt(W,A),H===null)throw dt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(A){throw t.removeEventListener("webglcontextlost",qt,!1),t.removeEventListener("webglcontextrestored",Lt,!1),t.removeEventListener("webglcontextcreationerror",Li,!1),ot("WebGLRenderer: "+A.message),A}function nt(){rt=new vb(H),rt.init(),Ie=new sE(H,rt),B=new lb(H,rt,e,Ie),E=new nE(H,rt),B.reversedDepthBuffer&&u&&E.buffers.depth.setReversed(!0),L=H.createFramebuffer(),R=H.createFramebuffer(),N=H.createFramebuffer(),Y=new Mb(H),K=new GS,ne=new iE(H,rt,E,K,B,Ie,Y),Ee=new xb(b),Re=new Sy(H),Oe=new ob(H,Re),le=new _b(H,Re,Y,Oe),fe=new Sb(H,le,Re,Oe,Y),q=new bb(H,B,ne),Ue=new cb(K),Le=new HS(b,Ee,rt,B,Oe,Ue),we=new lE(b,K),ye=new WS,Me=new KS(rt),at=new rb(b,Ee,E,fe,p,c),Ye=new tE(b,fe,B),xe=new cE(H,Y,B,E),Ne=new ab(H,rt,Y),pe=new yb(H,rt,Y),Y.programs=Le.programs,b.capabilities=B,b.extensions=rt,b.properties=K,b.renderLists=ye,b.shadowMap=Ye,b.state=E,b.info=Y}x!==Wn&&(M=new Tb(x,t.width,t.height,l,s,r));let Ke=new Gf(b,H);this.xr=Ke,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let A=rt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=rt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(A){A!==void 0&&(te=A,this.setSize(Te,V,!1))},this.getSize=function(A){return A.set(Te,V)},this.setSize=function(A,W,re=!0){if(Ke.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=A,V=W,t.width=Math.floor(A*te),t.height=Math.floor(W*te),re===!0&&(t.style.width=A+"px",t.style.height=W+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(Te*te,V*te).floor()},this.setDrawingBufferSize=function(A,W,re){Te=A,V=W,te=re,t.width=Math.floor(A*re),t.height=Math.floor(W*re),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(x===Wn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Z)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,W,re,J){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,W,re,J),E.viewport(Z.copy($).multiplyScalar(te).round())},this.getScissor=function(A){return A.copy(he)},this.setScissor=function(A,W,re,J){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,W,re,J),E.scissor(se.copy(he).multiplyScalar(te).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(A){E.setScissorTest(_e=A)},this.setOpaqueSort=function(A){be=A},this.setTransparentSort=function(A){Pe=A},this.getClearColor=function(A){return A.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,re=!0){let J=0;if(A){let Q=!1;if(G!==null){let He=G.texture.format;Q=g.has(He)}if(Q){let He=G.texture.type,qe=m.has(He),ke=at.getClearColor(),$e=at.getClearAlpha(),tt=ke.r,_t=ke.g,Tt=ke.b;qe?(v[0]=tt,v[1]=_t,v[2]=Tt,v[3]=$e,H.clearBufferuiv(H.COLOR,0,v)):(S[0]=tt,S[1]=_t,S[2]=Tt,S[3]=$e,H.clearBufferiv(H.COLOR,0,S))}else J|=H.COLOR_BUFFER_BIT}W&&(J|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(J|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&H.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),k=A},this.dispose=function(){t.removeEventListener("webglcontextlost",qt,!1),t.removeEventListener("webglcontextrestored",Lt,!1),t.removeEventListener("webglcontextcreationerror",Li,!1),at.dispose(),ye.dispose(),Me.dispose(),K.dispose(),Ee.dispose(),fe.dispose(),Oe.dispose(),xe.dispose(),Le.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",E0),Ke.removeEventListener("sessionend",T0),xr.stop()};function qt(A){A.preventDefault(),Pa("WebGLRenderer: Context Lost."),D=!0}function Lt(){Pa("WebGLRenderer: Context Restored."),D=!1;let A=Y.autoReset,W=Ye.enabled,re=Ye.autoUpdate,J=Ye.needsUpdate,Q=Ye.type;nt(),Y.autoReset=A,Ye.enabled=W,Ye.autoUpdate=re,Ye.needsUpdate=J,Ye.type=Q}function Li(A){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ji(A){let W=A.target;W.removeEventListener("dispose",ji),Uv(W)}function Uv(A){Ov(A),K.remove(A)}function Ov(A){let W=K.get(A).programs;W!==void 0&&(W.forEach(function(re){Le.releaseProgram(re)}),A.isShaderMaterial&&Le.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,re,J,Q,He){W===null&&(W=ze);let qe=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,ke=kv(A,W,re,J,Q);E.setMaterial(J,qe);let $e=re.index,tt=1;if(J.wireframe===!0){if($e=le.getWireframeAttribute(re),$e===void 0)return;tt=2}let _t=re.drawRange,Tt=re.attributes.position,Je=_t.start*tt,Dt=(_t.start+_t.count)*tt;He!==null&&(Je=Math.max(Je,He.start*tt),Dt=Math.min(Dt,(He.start+He.count)*tt)),$e!==null?(Je=Math.max(Je,0),Dt=Math.min(Dt,$e.count)):Tt!=null&&(Je=Math.max(Je,0),Dt=Math.min(Dt,Tt.count));let pn=Dt-Je;if(pn<0||pn===1/0)return;Oe.setup(Q,J,ke,re,$e);let Kt,Wt=Ne;if($e!==null&&(Kt=Re.get($e),Wt=pe,Wt.setIndex(Kt)),Q.isMesh)J.wireframe===!0?(E.setLineWidth(J.wireframeLinewidth*et()),Wt.setMode(H.LINES)):Wt.setMode(H.TRIANGLES);else if(Q.isLine){let Bn=J.linewidth;Bn===void 0&&(Bn=1),E.setLineWidth(Bn*et()),Q.isLineSegments?Wt.setMode(H.LINES):Q.isLineLoop?Wt.setMode(H.LINE_LOOP):Wt.setMode(H.LINE_STRIP)}else Q.isPoints?Wt.setMode(H.POINTS):Q.isSprite&&Wt.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))Wt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Bn=Q._multiDrawStarts,Xe=Q._multiDrawCounts,jn=Q._multiDrawCount,wt=$e?Re.get($e).bytesPerElement:1,Si=K.get(J).currentProgram.getUniforms();for(let Ki=0;Ki<jn;Ki++)Si.setValue(H,"_gl_DrawID",Ki),Wt.render(Bn[Ki]/wt,Xe[Ki])}else if(Q.isInstancedMesh)Wt.renderInstances(Je,pn,Q.count);else if(re.isInstancedBufferGeometry){let Bn=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Xe=Math.min(re.instanceCount,Bn);Wt.renderInstances(Je,pn,Xe)}else Wt.render(Je,pn)};function S0(A,W,re,J){k!==null&&A.isNodeMaterial&&k.setObject(J,A),ue===!0&&Ue.setState(A,re,!1),A.transparent===!0&&A.side===Ot&&A.forceSinglePass===!1?(A.side=Sn,A.needsUpdate=!0,uc(A,W,J),A.side=os,A.needsUpdate=!0,uc(A,W,J),A.side=Ot):uc(A,W,J)}this.compile=function(A,W,re=null){re===null&&(re=A),k!==null&&k.renderStart(A,W,re),T=Me.get(re),T.init(W),_.push(T),re.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),A!==re&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),T.setupLights(),k!==null&&k.updateLights(T.state.lightsArray),ve=this.localClippingEnabled,ue=Ue.init(this.clippingPlanes,ve),ue===!0&&Ue.setGlobalState(this.clippingPlanes,W),k!==null&&Ye.render(T.state.shadowsArray,re,W);let J=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let He=Q.material;if(He)if(Array.isArray(He))for(let qe=0;qe<He.length;qe++){let ke=He[qe];S0(ke,re,W,Q),J.add(ke)}else S0(He,re,W,Q),J.add(He)}),T=_.pop(),k!==null&&k.renderEnd(),J},this.compileAsync=function(A,W,re=null){let J=this.compile(A,W,re);return new Promise(Q=>{function He(){if(J.forEach(function(qe){let $e=K.get(qe).currentProgram;($e===void 0||$e.isReady())&&J.delete(qe)}),J.size===0){Q(A);return}setTimeout(He,10)}rt.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let gd=null;function Fv(A){gd&&gd(A)}function E0(){xr.stop()}function T0(){xr.start()}let xr=new Ng;xr.setAnimationLoop(Fv),typeof self<"u"&&xr.setContext(self),this.setAnimationLoop=function(A){gd=A,Ke.setAnimationLoop(A),A===null?xr.stop():xr.start()},Ke.addEventListener("sessionstart",E0),Ke.addEventListener("sessionend",T0),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(A,W);let re=Ke.enabled===!0&&Ke.isPresenting===!0,J=M!==null&&(G===null||re)&&M.begin(b,G);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(W),W=Ke.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,W,G),T=Me.get(A,_.length),T.init(W),T.state.textureUnits=ne.getTextureUnits(),_.push(T),de.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ie.setFromProjectionMatrix(de,Bi,W.reversedDepth),ve=this.localClippingEnabled,ue=Ue.init(this.clippingPlanes,ve),w=ye.get(A,I.length),w.init(),I.push(w),Ke.enabled===!0&&Ke.isPresenting===!0){let qe=b.xr.getDepthSensingMesh();qe!==null&&xd(qe,W,-1/0,b.sortObjects)}xd(A,W,0,b.sortObjects),w.finish(),k!==null&&k.updateLights(T.state.lightsArray),b.sortObjects===!0&&w.sort(be,Pe),je=Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1,je&&at.addToRenderList(w,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ue===!0&&Ue.beginShadows();let Q=T.state.shadowsArray;if(Ye.render(Q,A,W),ue===!0&&Ue.endShadows(),(J&&M.hasRenderPass())===!1){let qe=w.opaque,ke=w.transmissive;if(T.setupLights(),W.isArrayCamera){let $e=W.cameras;if(ke.length>0)for(let tt=0,_t=$e.length;tt<_t;tt++){let Tt=$e[tt];A0(qe,ke,A,Tt)}je&&at.render(A);for(let tt=0,_t=$e.length;tt<_t;tt++){let Tt=$e[tt];w0(w,A,Tt,Tt.viewport)}}else ke.length>0&&A0(qe,ke,A,W),je&&at.render(A),w0(w,A,W)}G!==null&&O===0&&(ne.updateMultisampleRenderTarget(G),ne.updateRenderTargetMipmap(G)),J&&M.end(b),A.isScene===!0&&A.onAfterRender(b,A,W),Oe.resetDefaultState(),F=-1,z=null,_.pop(),_.length>0?(T=_[_.length-1],ne.setTextureUnits(T.state.textureUnits),ue===!0&&Ue.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,I.pop(),I.length>0?w=I[I.length-1]:w=null,k!==null&&k.renderEnd()};function xd(A,W,re,J){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)T.pushLightProbeGrid(A);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ie)){J&&We.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);let qe=fe.update(A),ke=A.material;ke.visible&&w.push(A,qe,ke,re,We.z,null,W)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ie))){let qe=fe.update(A),ke=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),We.copy(A.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),We.copy(qe.boundingSphere.center)),We.applyMatrix4(A.matrixWorld).applyMatrix4(de)),Array.isArray(ke)){let $e=qe.groups;for(let tt=0,_t=$e.length;tt<_t;tt++){let Tt=$e[tt],Je=ke[Tt.materialIndex];Je&&Je.visible&&w.push(A,qe,Je,re,We.z,Tt,W)}}else ke.visible&&w.push(A,qe,ke,re,We.z,null,W)}}let He=A.children;for(let qe=0,ke=He.length;qe<ke;qe++)xd(He[qe],W,re,J)}function w0(A,W,re,J){let{opaque:Q,transmissive:He,transparent:qe}=A;T.setupLightsView(re),ue===!0&&Ue.setGlobalState(b.clippingPlanes,re),J&&E.viewport(Z.copy(J)),Q.length>0&&hc(Q,W,re),He.length>0&&hc(He,W,re),qe.length>0&&hc(qe,W,re),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function A0(A,W,re,J){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[J.id]===void 0){let Je=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[J.id]=new $t(1,1,{generateMipmaps:!0,type:Je?Zt:Wn,minFilter:di,samples:Math.max(4,B.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let He=T.state.transmissionRenderTarget[J.id],qe=J.viewport||Z;He.setSize(qe.z*b.transmissionResolutionScale,qe.w*b.transmissionResolutionScale);let ke=b.getRenderTarget(),$e=b.getActiveCubeFace(),tt=b.getActiveMipmapLevel();b.setRenderTarget(He),b.getClearColor(Ce),X=b.getClearAlpha(),X<1&&b.setClearColor(16777215,.5),b.clear(),je&&at.render(re);let _t=b.toneMapping;b.toneMapping=Hi;let Tt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),T.setupLightsView(J),ue===!0&&Ue.setGlobalState(b.clippingPlanes,J),hc(A,re,J),ne.updateMultisampleRenderTarget(He),ne.updateRenderTargetMipmap(He),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Dt=0,pn=W.length;Dt<pn;Dt++){let Kt=W[Dt],{object:Wt,geometry:Bn,material:Xe,group:jn}=Kt;if(Xe.side===Ot&&Wt.layers.test(J.layers)){let wt=Xe.side;Xe.side=Sn,Xe.needsUpdate=!0,R0(Wt,re,J,Bn,Xe,jn),Xe.side=wt,Xe.needsUpdate=!0,Je=!0}}Je===!0&&(ne.updateMultisampleRenderTarget(He),ne.updateRenderTargetMipmap(He))}b.setRenderTarget(ke,$e,tt),b.setClearColor(Ce,X),Tt!==void 0&&(J.viewport=Tt),b.toneMapping=_t}function hc(A,W,re){let J=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,He=A.length;Q<He;Q++){let qe=A[Q],{object:ke,geometry:$e,group:tt}=qe,_t=qe.material;_t.allowOverride===!0&&J!==null&&(_t=J),ke.layers.test(re.layers)&&R0(ke,W,re,$e,_t,tt)}}function R0(A,W,re,J,Q,He){k!==null&&Q.isNodeMaterial&&k.setObject(A,Q),A.onBeforeRender(b,W,re,J,Q,He),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(b,W,re,J,A,He),Q.transparent===!0&&Q.side===Ot&&Q.forceSinglePass===!1?(Q.side=Sn,Q.needsUpdate=!0,b.renderBufferDirect(re,W,J,Q,A,He),Q.side=os,Q.needsUpdate=!0,b.renderBufferDirect(re,W,J,Q,A,He),Q.side=Ot):b.renderBufferDirect(re,W,J,Q,A,He),A.onAfterRender(b,W,re,J,Q,He)}function uc(A,W,re){W.isScene!==!0&&(W=ze);let J=K.get(A),Q=T.state.lights,He=T.state.shadowsArray,qe=Q.state.version,ke=Le.getParameters(A,Q.state,He,W,re,T.state.lightProbeGridArray),$e=Le.getProgramCacheKey(ke),tt=J.programs;J.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,J.fog=W.fog;let _t=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;J.envMap=Ee.get(A.envMap||J.environment,_t),J.envMapRotation=J.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,tt===void 0&&(A.addEventListener("dispose",ji),tt=new Map,J.programs=tt);let Tt=tt.get($e);if(Tt!==void 0){if(J.currentProgram===Tt&&J.lightsStateVersion===qe)return P0(A,ke),Tt}else ke.uniforms=Le.getUniforms(A),k!==null&&A.isNodeMaterial&&k.build(A,re,ke),A.onBeforeCompile(ke,b),Tt=Le.acquireProgram(ke,$e),tt.set($e,Tt),J.uniforms=ke.uniforms;let Je=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=Ue.uniform),P0(A,ke),J.needsLights=Hv(A),J.lightsStateVersion=qe,J.needsLights&&(Je.ambientLightColor.value=Q.state.ambient,Je.lightProbe.value=Q.state.probe,Je.sunLights.value=Q.state.sun,Je.sunLightShadows.value=Q.state.sunShadow,Je.directionalLights.value=Q.state.directional,Je.directionalLightShadows.value=Q.state.directionalShadow,Je.spotLights.value=Q.state.spot,Je.spotLightShadows.value=Q.state.spotShadow,Je.rectAreaLights.value=Q.state.rectArea,Je.ltc_1.value=Q.state.rectAreaLTC1,Je.ltc_2.value=Q.state.rectAreaLTC2,Je.pointLights.value=Q.state.point,Je.pointLightShadows.value=Q.state.pointShadow,Je.hemisphereLights.value=Q.state.hemi,Je.sunShadowMatrix.value=Q.state.sunShadowMatrix,Je.sunShadowCascade.value=Q.state.sunShadowCascade,Je.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Je.spotLightMatrix.value=Q.state.spotLightMatrix,Je.spotLightMap.value=Q.state.spotLightMap,Je.pointShadowMatrix.value=Q.state.pointShadowMatrix),J.lightProbeGrid=T.state.lightProbeGridArray.length>0,J.currentProgram=Tt,J.uniformsList=null,Tt}function C0(A){if(A.uniformsList===null){let W=A.currentProgram.getUniforms();A.uniformsList=jo.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function P0(A,W){let re=K.get(A);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function Bv(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;y.setFromMatrixPosition(W.matrixWorld);for(let re=0,J=A.length;re<J;re++){let Q=A[re];if(Q.texture!==null&&Q.boundingBox.containsPoint(y))return Q}return null}function kv(A,W,re,J,Q){W.isScene!==!0&&(W=ze),ne.resetTextureUnits();let He=W.fog,qe=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?W.environment:null,ke=G===null?b.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:gt.workingColorSpace,$e=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,tt=Ee.get(J.envMap||qe,$e),_t=J.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Tt=!!re.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Je=!!re.morphAttributes.position,Dt=!!re.morphAttributes.normal,pn=!!re.morphAttributes.color,Kt=Hi;J.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Kt=b.toneMapping);let Wt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Bn=Wt!==void 0?Wt.length:0,Xe=K.get(J),jn=T.state.lights;if(ue===!0&&(ve===!0||A!==z)){let Yt=A===z&&J.id===F;Ue.setState(J,A,Yt)}let wt=!1;J.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==jn.state.version||Xe.outputColorSpace!==ke||Q.isBatchedMesh&&Xe.batching===!1||!Q.isBatchedMesh&&Xe.batching===!0||Q.isBatchedMesh&&Xe.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Xe.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Xe.instancing===!1||!Q.isInstancedMesh&&Xe.instancing===!0||Q.isSkinnedMesh&&Xe.skinning===!1||!Q.isSkinnedMesh&&Xe.skinning===!0||Q.isInstancedMesh&&Xe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Xe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Xe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Xe.instancingMorph===!1&&Q.morphTexture!==null||Xe.envMap!==tt||J.fog===!0&&Xe.fog!==He||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ue.numPlanes||Xe.numIntersection!==Ue.numIntersection)||Xe.vertexAlphas!==_t||Xe.vertexTangents!==Tt||Xe.morphTargets!==Je||Xe.morphNormals!==Dt||Xe.morphColors!==pn||Xe.toneMapping!==Kt||Xe.morphTargetsCount!==Bn||!!Xe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(wt=!0):(wt=!0,Xe.__version=J.version);let Si=Xe.currentProgram;wt===!0&&(Si=uc(J,W,Q),k&&J.isNodeMaterial&&k.onUpdateProgram(J,Si,Xe));let Ki=!1,qs=!1,so=!1,zt=Si.getUniforms(),un=Xe.uniforms;if(E.useProgram(Si.program)&&(Ki=!0,qs=!0,so=!0),J.id!==F&&(F=J.id,qs=!0),Xe.needsLights){let Yt=Bv(T.state.lightProbeGridArray,Q);Xe.lightProbeGrid!==Yt&&(Xe.lightProbeGrid=Yt,qs=!0)}if(Ki||z!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),zt.setValue(H,"projectionMatrix",A.projectionMatrix),zt.setValue(H,"viewMatrix",A.matrixWorldInverse);let Zs=zt.map.cameraPosition;Zs!==void 0&&Zs.setValue(H,Se.setFromMatrixPosition(A.matrixWorld)),B.logarithmicDepthBuffer&&zt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&zt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),z!==A&&(z=A,qs=!0,so=!0)}if(Xe.needsLights&&(jn.state.sunShadowMap.length>0&&zt.setValue(H,"sunShadowMap",jn.state.sunShadowMap,ne),jn.state.directionalShadowMap.length>0&&zt.setValue(H,"directionalShadowMap",jn.state.directionalShadowMap,ne),jn.state.spotShadowMap.length>0&&zt.setValue(H,"spotShadowMap",jn.state.spotShadowMap,ne),jn.state.pointShadowMap.length>0&&zt.setValue(H,"pointShadowMap",jn.state.pointShadowMap,ne)),Q.isSkinnedMesh){zt.setOptional(H,Q,"bindMatrix"),zt.setOptional(H,Q,"bindMatrixInverse");let Yt=Q.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),zt.setValue(H,"boneTexture",Yt.boneTexture,ne))}Q.isBatchedMesh&&(zt.setOptional(H,Q,"batchingTexture"),zt.setValue(H,"batchingTexture",Q._matricesTexture,ne),zt.setOptional(H,Q,"batchingIdTexture"),zt.setValue(H,"batchingIdTexture",Q._indirectTexture,ne),zt.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&zt.setValue(H,"batchingColorTexture",Q._colorsTexture,ne));let Ys=re.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0)&&q.update(Q,re,Si),(qs||Xe.receiveShadow!==Q.receiveShadow)&&(Xe.receiveShadow=Q.receiveShadow,zt.setValue(H,"receiveShadow",Q.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&W.environment!==null&&(un.envMapIntensity.value=W.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=uE()),qs){if(zt.setValue(H,"toneMappingExposure",b.toneMappingExposure),Xe.needsLights&&zv(un,so),He&&J.fog===!0&&we.refreshFogUniforms(un,He),we.refreshMaterialUniforms(un,J,te,V,T.state.transmissionRenderTarget[A.id]),Xe.needsLights&&Xe.lightProbeGrid){let Yt=Xe.lightProbeGrid;un.probesSH.value=Yt.texture,un.probesMin.value.copy(Yt.boundingBox.min),un.probesMax.value.copy(Yt.boundingBox.max),un.probesResolution.value.copy(Yt.resolution)}jo.upload(H,C0(Xe),un,ne)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(jo.upload(H,C0(Xe),un,ne),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&zt.setValue(H,"center",Q.center),zt.setValue(H,"modelViewMatrix",Q.modelViewMatrix),zt.setValue(H,"normalMatrix",Q.normalMatrix),zt.setValue(H,"modelMatrix",Q.matrixWorld),J.uniformsGroups!==void 0){let Yt=J.uniformsGroups;for(let Zs=0,ro=Yt.length;Zs<ro;Zs++){let L0=Yt[Zs];xe.update(L0,Si),xe.bind(L0,Si)}}return Si}function zv(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.sunLights.needsUpdate=W,A.sunLightShadows.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Hv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(A,W,re){let J=K.get(A);J.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),K.get(A.texture).__webglTexture=W,K.get(A.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:re,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){let re=K.get(A);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,re=0){G=A,P=W,O=re;let J=null,Q=!1,He=!1;if(A){let ke=K.get(A);if(ke.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(H.FRAMEBUFFER,ke.__webglFramebuffer),Z.copy(A.viewport),se.copy(A.scissor),ce=A.scissorTest,E.viewport(Z),E.scissor(se),E.setScissorTest(ce),F=-1;return}else if(ke.__webglFramebuffer===void 0)ne.setupRenderTarget(A);else if(ke.__hasExternalTextures)ne.rebindTextures(A,K.get(A.texture).__webglTexture,K.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let _t=A.depthTexture;if(ke.__boundDepthTexture!==_t){if(_t!==null&&K.has(_t)&&(A.width!==_t.image.width||A.height!==_t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(A)}}let $e=A.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(He=!0);let tt=K.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[W])?J=tt[W][re]:J=tt[W],Q=!0):A.samples>0&&ne.useMultisampledRTT(A)===!1?J=K.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?J=tt[re]:J=tt,Z.copy(A.viewport),se.copy(A.scissor),ce=A.scissorTest}else Z.copy($).multiplyScalar(te).floor(),se.copy(he).multiplyScalar(te).floor(),ce=_e;if(re!==0&&(J=L),E.bindFramebuffer(H.FRAMEBUFFER,J)&&E.drawBuffers(A,J),E.viewport(Z),E.scissor(se),E.setScissorTest(ce),Q){let ke=K.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,ke.__webglTexture,re)}else if(He){let ke=W;for(let $e=0;$e<A.textures.length;$e++){let tt=K.get(A.textures[$e]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+$e,tt.__webglTexture,re,ke)}}else if(A!==null&&re!==0){let ke=K.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ke.__webglTexture,re)}F=-1};function I0(A){let W=K.get(A);return(W.__readFormat!==A.format||W.__readType!==A.type)&&(W.__readFormat=A.format,W.__readType=A.type,W.__formatReadable=B.textureFormatReadable(A.format),W.__typeReadable=B.textureTypeReadable(A.type)),W}this.readRenderTargetPixels=function(A,W,re,J,Q,He,qe,ke=0){if(!(A&&A.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&($e=$e[qe]),$e){E.bindFramebuffer(H.FRAMEBUFFER,$e);try{let tt=A.textures[ke],_t=tt.format,Tt=tt.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ke);let Je=I0(tt);if(Je.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Je.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-J&&re>=0&&re<=A.height-Q&&H.readPixels(W,re,J,Q,Ie.convert(_t),Ie.convert(Tt),He)}finally{let tt=G!==null?K.get(G).__webglFramebuffer:null;E.bindFramebuffer(H.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(A,W,re,J,Q,He,qe,ke=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&($e=$e[qe]),$e)if(W>=0&&W<=A.width-J&&re>=0&&re<=A.height-Q){E.bindFramebuffer(H.FRAMEBUFFER,$e);let tt=A.textures[ke],_t=tt.format,Tt=tt.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ke);let Je=I0(tt);if(Je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Dt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Dt),H.bufferData(H.PIXEL_PACK_BUFFER,He.byteLength,H.STREAM_READ),H.readPixels(W,re,J,Q,Ie.convert(_t),Ie.convert(Tt),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let pn=G!==null?K.get(G).__webglFramebuffer:null;E.bindFramebuffer(H.FRAMEBUFFER,pn);let Kt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await ig(H,Kt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Dt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,He),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Dt),H.deleteSync(Kt),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,re=0){let J=Math.pow(2,-re),Q=Math.floor(A.image.width*J),He=Math.floor(A.image.height*J),qe=W!==null?W.x:0,ke=W!==null?W.y:0;ne.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,qe,ke,Q,He),E.unbindTexture()},this.copyTextureToTexture=function(A,W,re=null,J=null,Q=0,He=0){let qe,ke,$e,tt,_t,Tt,Je,Dt,pn,Kt=A.isCompressedTexture?A.mipmaps[He]:A.image;if(re!==null)qe=re.max.x-re.min.x,ke=re.max.y-re.min.y,$e=re.isBox3?re.max.z-re.min.z:1,tt=re.min.x,_t=re.min.y,Tt=re.isBox3?re.min.z:0;else{let un=Math.pow(2,-Q);qe=Math.floor(Kt.width*un),ke=Math.floor(Kt.height*un),A.isDataArrayTexture?$e=Kt.depth:A.isData3DTexture?$e=Math.floor(Kt.depth*un):$e=1,tt=0,_t=0,Tt=0}J!==null?(Je=J.x,Dt=J.y,pn=J.z):(Je=0,Dt=0,pn=0);let Wt=Ie.convert(W.format),Bn=Ie.convert(W.type),Xe;W.isData3DTexture?(ne.setTexture3D(W,0),Xe=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ne.setTexture2DArray(W,0),Xe=H.TEXTURE_2D_ARRAY):(ne.setTexture2D(W,0),Xe=H.TEXTURE_2D),E.activeTexture(H.TEXTURE0),E.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),E.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),E.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);let jn=E.getParameter(H.UNPACK_ROW_LENGTH),wt=E.getParameter(H.UNPACK_IMAGE_HEIGHT),Si=E.getParameter(H.UNPACK_SKIP_PIXELS),Ki=E.getParameter(H.UNPACK_SKIP_ROWS),qs=E.getParameter(H.UNPACK_SKIP_IMAGES);E.pixelStorei(H.UNPACK_ROW_LENGTH,Kt.width),E.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Kt.height),E.pixelStorei(H.UNPACK_SKIP_PIXELS,tt),E.pixelStorei(H.UNPACK_SKIP_ROWS,_t),E.pixelStorei(H.UNPACK_SKIP_IMAGES,Tt);let so=A.isDataArrayTexture||A.isData3DTexture,zt=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){let un=K.get(A),Ys=K.get(W),Yt=K.get(un.__renderTarget),Zs=K.get(Ys.__renderTarget);E.bindFramebuffer(H.READ_FRAMEBUFFER,Yt.__webglFramebuffer),E.bindFramebuffer(H.DRAW_FRAMEBUFFER,Zs.__webglFramebuffer);for(let ro=0;ro<$e;ro++)so&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,K.get(A).__webglTexture,Q,Tt+ro),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,K.get(W).__webglTexture,He,pn+ro)),H.blitFramebuffer(tt,_t,qe,ke,Je,Dt,qe,ke,H.DEPTH_BUFFER_BIT,H.NEAREST);E.bindFramebuffer(H.READ_FRAMEBUFFER,null),E.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||K.has(A)){let un=K.get(A),Ys=K.get(W);E.bindFramebuffer(H.READ_FRAMEBUFFER,R),E.bindFramebuffer(H.DRAW_FRAMEBUFFER,N);for(let Yt=0;Yt<$e;Yt++)so?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,un.__webglTexture,Q,Tt+Yt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,un.__webglTexture,Q),zt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ys.__webglTexture,He,pn+Yt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ys.__webglTexture,He),Q!==0?H.blitFramebuffer(tt,_t,qe,ke,Je,Dt,qe,ke,H.COLOR_BUFFER_BIT,H.NEAREST):zt?H.copyTexSubImage3D(Xe,He,Je,Dt,pn+Yt,tt,_t,qe,ke):H.copyTexSubImage2D(Xe,He,Je,Dt,tt,_t,qe,ke);E.bindFramebuffer(H.READ_FRAMEBUFFER,null),E.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else zt?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Xe,He,Je,Dt,pn,qe,ke,$e,Wt,Bn,Kt.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(Xe,He,Je,Dt,pn,qe,ke,$e,Wt,Kt.data):H.texSubImage3D(Xe,He,Je,Dt,pn,qe,ke,$e,Wt,Bn,Kt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,He,Je,Dt,qe,ke,Wt,Bn,Kt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,He,Je,Dt,Kt.width,Kt.height,Wt,Kt.data):H.texSubImage2D(H.TEXTURE_2D,He,Je,Dt,qe,ke,Wt,Bn,Kt);E.pixelStorei(H.UNPACK_ROW_LENGTH,jn),E.pixelStorei(H.UNPACK_IMAGE_HEIGHT,wt),E.pixelStorei(H.UNPACK_SKIP_PIXELS,Si),E.pixelStorei(H.UNPACK_SKIP_ROWS,Ki),E.pixelStorei(H.UNPACK_SKIP_IMAGES,qs),He===0&&W.generateMipmaps&&H.generateMipmap(Xe),E.unbindTexture()},this.initRenderTarget=function(A){K.get(A).__webglFramebuffer===void 0&&ne.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ne.setTextureCube(A,0):A.isData3DTexture?ne.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ne.setTexture2DArray(A,0):ne.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){P=0,O=0,G=null,E.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};var Vf="https://race.vwfestmemecoin.com/api/arcade/zombies",Tl=null,Wf=i=>i.json(),us={start(){return Tl=null,fetch(Vf+"/start",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}).then(Wf).then(i=>{i.ok&&(Tl=i.token)}).catch(()=>{})},hasToken(){return!!Tl},top(){return fetch(Vf+"/top").then(Wf).then(i=>i.ok?i.top:null).catch(()=>null)},submit(i,e,t,n){return fetch(Vf+"/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:Tl,nickname:i,score:e,pts:t,kills:n})}).then(Wf).then(s=>(s.ok&&(Tl=null),s)).catch(()=>({ok:!1,error:"Network hiccup. Try again."}))},render(i,e,t){if(i.replaceChildren(),!e){let n=document.createElement("li");n.className="muted",n.textContent="Leaderboard unavailable.",i.append(n);return}if(!e.length){let n=document.createElement("li");n.className="muted",n.textContent="No survivors yet. Be first.",i.append(n);return}for(let n of e.slice(0,5)){let s=document.createElement("li");t&&n.nickname===t&&(s.className="me");let r=document.createElement("b");r.textContent=String(n.nickname),s.append(r," \xB7 Round "+(n.score|0)+" \xB7 "+(n.aux|0).toLocaleString()+" pts"),i.append(s)}}};var cn=Math.PI*2,Qt=(i,e,t)=>i<e?e:i>t?t:i,ds=(i,e,t)=>i+(e-i)*t,ee=(i=1,e)=>e===void 0?Math.random()*i:i+Math.random()*(e-i),In=i=>i[Math.random()*i.length|0],Hg=i=>i*i*(3-2*i);function vu(i,e,t){let n=i*374761393+e*668265263+t*144665|0;return n=(n^n>>>13)*1274126177,n=n^n>>>16,(n>>>0)%1e5/1e5}function dE(i,e,t=0){let n=Math.floor(i),s=Math.floor(e),r=Hg(i-n),o=Hg(e-s),l=vu(n,s,t),c=vu(n+1,s,t),a=vu(n,s+1,t),h=vu(n+1,s+1,t);return ds(ds(l,c,r),ds(a,h,r),o)}function ei(i,e,t=4,n=0){let s=0,r=.5,o=1;for(let l=0;l<t;l++)s+=r*dE(i*o,e*o,n+l*17),o*=2,r*=.5;return s}function lr(i,e,t={}){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),r=s.createImageData(i,i),o=r.data;for(let c=0;c<i;c++)for(let a=0;a<i;a++){let h=(c*i+a)*4,d=e(a/i,c/i,a,c);o[h]=d[0],o[h+1]=d[1],o[h+2]=d[2],o[h+3]=255}s.putImageData(r,0,0),t.after&&t.after(s,i);let l=new Gt(n);return l.wrapS=l.wrapT=en,l.anisotropy=t.aniso||4,t.srgb!==!1&&(l.colorSpace=ft),l.needsUpdate=!0,l}var _u=(i,e,t)=>[ds(i[0],e[0],t),ds(i[1],e[1],t),ds(i[2],e[2],t)];function Gg(i=512){let e={};e.sand=lr(i,(l,c)=>{let a=ei(l*24,c*24,5,1),h=ei(l*6+a*1.5,c*60,3,9),d=Qt(a*.7+h*.5,0,1);return _u([112,86,58],[186,150,104],d)}),e.sandBump=lr(i,(l,c)=>{let a=ei(l*24,c*24,5,1),h=ei(l*6+a*1.5,c*60,3,9),d=Qt(a*.6+h*.7,0,1)*255;return[d,d,d]},{srgb:!1}),e.concrete=lr(i,(l,c,a,h)=>{let d=ei(l*18,c*18,5,3),u=ei(l*80,c*80,2,4),f=.35+d*.5+(u-.5)*.15,p=Math.abs(ei(l*7,c*7,3,12)-.5)<.012?.5:1;return f*=p,_u([48,50,54],[128,126,120],Qt(f,0,1))}),e.concreteBump=lr(i,(l,c)=>{let a=ei(l*18,c*18,5,3)*255;return[a,a,a]},{srgb:!1}),e.rust=lr(i,(l,c)=>{let a=ei(l*10,c*10,5,5),h=ei(l*3,c*40,3,7),d=Qt((a-.42)*3.2+(h-.5)*.8,0,1),u=.62+(ei(l*60,c*60,2,2)-.5)*.25;return _u([u*255,u*255,u*255],[150,70,28],d*.85)}),e.rustRough=lr(i,(l,c)=>{let a=ei(l*10,c*10,5,5),h=ei(l*3,c*40,3,7);return[0,(.45+Qt((a-.42)*3.2+(h-.5)*.8,0,1)*.5)*255,0]},{srgb:!1}),e.corr=lr(256,(l,c)=>{let a=(Math.sin(l*cn*16)*.5+.5)*255;return[a,a,a]},{srgb:!1}),e.corr.repeat.set(1,1),e.wood=lr(256,(l,c)=>{let a=ei(l*4,c*60,4,21),h=ei(l*12,c*12,2,4);return _u([66,42,24],[150,108,66],Qt(a*.9+h*.2,0,1))});let t=document.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d"),s=n.createRadialGradient(32,32,0,32,32,32);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.25,"rgba(255,255,255,.55)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,64,64),e.glow=new Gt(t),e.glow.colorSpace=ft;let r=document.createElement("canvas");r.width=1024,r.height=256;let o=r.getContext("2d");return o.fillStyle="#05070b",o.fillRect(0,0,1024,256),o.textAlign="center",o.textBaseline="middle",o.font="900 150px system-ui, Arial Black, sans-serif",o.shadowColor="#18ffb0",o.shadowBlur=40,o.fillStyle="#c8fff0",o.fillText("VW FEST",512,120),o.shadowBlur=20,o.font="700 46px system-ui, Arial, sans-serif",o.fillStyle="#ffb347",o.shadowColor="#ff7a00",o.fillText("AIR-COOLED SALVAGE  \xB7  $VWFEST",512,222),e.sign=new Gt(r),e.sign.colorSpace=ft,e.sign.anisotropy=4,e}function yu(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},l=i[0].morphTargetsRelative,c=new vt,a=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(a,f,h),a+=f}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Vg(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);let p=Vg(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function Vg(i){let e,t,n,s=-1,r=0;for(let a=0;a<i.length;++a){let h=i[a];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),l=new ht(o,t,n),c=0;for(let a=0;a<i.length;++a){let h=i[a];if(h.isInterleavedBufferAttribute){let d=c/t;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<t;p++){let x=h.getComponent(u,p);l.setComponent(u+d,p,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(l.gpuType=s),l}function Xf(i,e){if(e===_f)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===qo||e===_l){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===qo)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Mu(i){let t=new DataView(i.buffer,i.byteOffset,i.byteLength).getUint32(0,!0),n=JSON.parse(new TextDecoder().decode(i.subarray(4,4+t))),s=i.byteOffset+4+t+(4-t%4)%4;return{meta:n,view:(o,[l,c])=>new o(i.buffer.slice(s+l,s+l+c*o.BYTES_PER_ELEMENT))}}function bu(i,e){let t=i(Uint16Array,e.pos),n=new Float32Array(t.length);for(let s=0;s<t.length;s++){let r=s%3;n[s]=e.min[r]+t[s]/65535*e.size[r]}return new ht(n,3)}var Su=(i,e)=>new ht(i(Int8Array,e.nrm),3,!0),$o={};async function qf(i=["zombies","cars"]){await Promise.all(i.filter(e=>!$o[e]).map(async e=>{let t=await fetch("assets/"+e+".bin");if(!t.ok)throw new Error("missing assets/"+e+".bin");$o[e]=new Uint8Array(await t.arrayBuffer())}))}var jf={},Zf={},fE={},Wg=!1;function pE(){if(Wg)return;Wg=!0;let{meta:i,view:e}=Mu($o.cars);for(let t of i){fE[t.tag]=t.tris;let n=new vt;if(n.setAttribute("position",bu(e,t)),n.setAttribute("normal",Su(e,t)),n.setAttribute("color",new ht(e(Uint8Array,t.col),3,!0)),n.setIndex(new ht(e(Uint16Array,t.idx),1)),n.computeBoundingBox(),jf[t.tag]=n,t.plate){let s=new vt;s.setAttribute("position",new ht(e(Float32Array,t.plate.pos),3)),s.setAttribute("normal",new ht(e(Float32Array,t.plate.nrm),3)),s.setAttribute("uv",new ht(e(Float32Array,t.plate.uv),2)),Zf[t.tag]=s}}}var Yf;function mE(){if(Yf)return Yf;let i=document.createElement("canvas");i.width=256,i.height=96;let e=i.getContext("2d");e.fillStyle="#e9e4d4",e.fillRect(0,0,256,96),e.strokeStyle="#1d3557",e.lineWidth=6,e.strokeRect(5,5,246,86),e.fillStyle="#1d3557",e.font="900 46px Arial Black, Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("VWFEST",128,50);let t=new Gt(i);return t.colorSpace=ft,Yf=new Ge({map:t,roughness:.6})}var Eu=new Map,gE=()=>Eu.get(0)||(Eu.set(0,new Ge({vertexColors:!0,roughness:.55,metalness:.15})),Eu.get(0));function qg(i){let e=Eu.get(0);if(!e)return;let t=i>0;e.roughness=t?.34:.55,e.metalness=t?.4:.15}var Xg=new Map;function xE(i,e,t){let n=i+e+"/"+t,s=Xg.get(n);if(s)return s;s=jf[i].clone();let r=s.attributes.color,o=s.attributes.position,l=new me(e),c=new me(t??15129792),a=i==="camper";for(let h=0;h<r.count;h++){let d=r.getX(h),u=r.getY(h),f=r.getZ(h);if(Math.abs(d-.247)<.01&&Math.abs(u-.247)<.01&&Math.abs(f-.247)<.01){let p=a&&o.getY(h)>1.04?c:l;r.setXYZ(h,p.r*.85,p.g*.85,p.b*.85)}else d>.975&&u>.975&&f>.975&&r.setXYZ(h,c.r,c.g,c.b)}return Xg.set(n,s),s}var vE=["bug","baja","ghia"],_E=["camper","wagon","safari"],yE=0,ME=0;function Kf(i,e,t,n={}){pE();let s=i==="big"?_E[ME++%3]:vE[yE++%3],r=new De;r.rotation.y=Math.PI;let o=new ge(xE(s,e,t),gE());if(o.userData.noBatch=!0,r.add(o),Zf[s]){let a=new ge(Zf[s],mE());a.userData.noBatch=!0,r.add(a)}let l=new De;l.add(r),n.tilt&&(l.rotation.z=n.tilt);let c=jf[s].boundingBox.getSize(new U);return l.userData.size=[c.x,c.y,c.z],l}var Tu=class{constructor(e){this.T=e,this.cache={};let t=n=>new Ge(n);this.sand=t({map:e.sand,bumpMap:e.sandBump,bumpScale:3,roughness:.97,metalness:0,color:13615792}),e.sand.repeat.set(90,90),e.sandBump.repeat.set(90,90),this.concrete=t({map:e.concrete,bumpMap:e.concreteBump,bumpScale:1.5,roughness:.88,metalness:.02}),e.concrete.repeat.set(10,10),e.concreteBump.repeat.set(10,10),this.fence=t({color:9281190,map:e.rust,roughnessMap:e.rustRough,bumpMap:e.corr,bumpScale:2.5,metalness:.75,roughness:1}),this.fenceDark=t({color:3818056,map:e.rust,roughnessMap:e.rustRough,metalness:.7,roughness:1}),this.wood=t({color:16777215,map:e.wood,roughness:.85,metalness:0}),this.tire=t({color:1381655,roughness:.92,metalness:0}),this.glass=t({color:660761,roughness:.08,metalness:.95}),this.chrome=t({color:13620954,roughness:.18,metalness:1}),this.lampBulb=new st({color:new me(5,3.2,1.4),toneMapped:!1}),this.lampBulbT=new st({color:new me(1.2,4.5,3.4),toneMapped:!1}),this.headlight=t({color:15328456,emissive:4867120,emissiveIntensity:.6,roughness:.2,metalness:.2}),this.tarp=t({color:4151882,roughness:.95})}paint(e){let t="p"+e;if(this.cache[t])return this.cache[t];let n=new Ge({color:e,map:this.T.rust,roughnessMap:this.T.rustRough,metalness:.55,roughness:1});return n.userData.paint=1,this.cache[t]=n}flat(e,t=.8,n=.1){let s="f"+e+t+n;return this.cache[s]||(this.cache[s]=new Ge({color:e,roughness:t,metalness:n}))}},bE=[6010272,14733722,14252330,11680302,6197184,13619140,9087050,13803834],$f=()=>In(bE),jr=(i,e,t,n,s,r,o,l,c=14,a=9)=>{let h=new ge(new Jt(i,c,a),l);return h.scale.set(e,t,n),h.position.set(s,r,o),h},wn=(i,e,t,n,s,r,o)=>{let l=new ge(new ct(i,e,t),o);return l.position.set(n,s,r),l},ks=(i,e,t,n,s,r,o=!0,l=12)=>{let c=new ge(new It(i,i,e,l),r);return o&&(c.rotation.z=Math.PI/2),c.position.set(t,n,s),c};function Yg(i,e,t,n,s=.34){let r=new De;return r.add(ks(s,.22,0,0,0,i.tire,!0,14)),r.add(ks(s*.55,.24,0,0,0,i.chrome,!0,8)),r.position.set(e,t,n),r}function Zg(i,e,t={}){let n=new De,s=i.paint(e);n.add(jr(1,.9,.5,1.95,0,.78,0,s,18,10)),n.add(jr(1,.72,.42,.95,0,1.17,.12,i.glass,16,8)),n.add(jr(1,.74,.28,.95,0,1.42,.12,s,16,8));for(let r of[-1,1])for(let o of[-1,1])n.add(jr(1,.22,.32,.55,r*.86,.5,o*1.2,s,10,8)),t.missing&&r===1&&o===1||n.add(Yg(i,r*.84,.34,o*1.2));for(let r of[-1,1])n.add(jr(.12,1,1,1,r*.55,.92,-1.78,i.headlight,8,6));if(n.add(wn(1.5,.08,.1,0,.44,-2.02,i.chrome)),n.add(wn(1.5,.08,.1,0,.44,2.02,i.chrome)),n.add(wn(.5,.1,.05,0,.78,1.92,i.fenceDark)),t.door){let r=wn(.05,.5,1,.92,.9,-.2,s);r.rotation.y=.9,r.position.x=1.25,r.position.z=-.85,n.add(r)}return t.tilt&&(n.rotation.z=t.tilt),n.userData.size=[1.9,1.7,4.1],n}function jg(i,e,t=15129792,n={}){let s=new De,r=i.paint(e),o=i.paint(t);s.add(wn(2,.85,4.5,0,.78,0,r)),s.add(wn(1.96,.9,4.4,0,1.66,0,o)),s.add(wn(2.04,.1,4.55,0,1.19,0,r)),s.add(wn(2,.08,4.5,0,2.15,0,r));for(let h of[-1,1])s.add(wn(.03,.55,3.8,h*.99,1.7,.1,i.glass)),s.add(wn(.03,.14,.7,h*1.01,.82,.8,i.fenceDark));s.add(wn(1.7,.6,.04,0,1.68,-2.2,i.glass));let l=wn(1.1,.8,.1,-.5,.78,-2.28,r);l.rotation.y=.3;let c=wn(1.1,.8,.1,.5,.78,-2.28,r);c.rotation.y=-.3,s.add(l,c);let a=ks(.17,.04,0,.85,-2.43,i.chrome,!1,14);a.rotation.x=Math.PI/2,s.add(a);for(let h of[-1,1]){s.add(jr(.13,1,1,.6,h*.72,.8,-2.36,i.headlight,8,6));for(let d of[-1.4,1.5])n.missing&&h===1&&d===1.5||s.add(Yg(i,h*.95,.38,d,.38))}return s.add(wn(2.1,.1,.12,0,.45,-2.45,i.chrome)),s.add(wn(2.1,.1,.12,0,.45,2.3,i.chrome)),n.tilt&&(s.rotation.z=n.tilt),s.userData.size=[2.1,2.2,4.6],s}function wl(i,e=4){let t=new De;for(let n=0;n<e;n++){let s=new ge(new _i(.4,.18,8,14),i.tire);s.rotation.x=Math.PI/2,s.position.set(ee(-.04,.04),.18+n*.3,ee(-.04,.04)),t.add(s)}return t.userData.size=[1,.3*e+.1,1],t.userData.hd={kind:"tyre"},t}function cr(i,e){let t=new De;t.add(ks(.3,.9,0,.45,0,i.paint(e),!1,12));for(let n of[.2,.7])t.add(ks(.31,.04,0,n,0,i.fenceDark,!1,12));return t.userData.size=[.62,.9,.62],t.userData.hd={kind:"drum",color:e},t}function ti(i,e=1){let t=new De;t.add(wn(e,e,e,0,e/2,0,i.wood));for(let[n,s]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(wn(.07,e*1.02,.07,n*e/2,e/2,s*e/2,i.fenceDark));return t.userData.size=[e,e,e],t.userData.hd={kind:"crate",s:e},t}function Al(i,e){let t=new De;t.add(ks(.09,5.2,0,2.6,0,i.fenceDark,!1,8)),t.add(wn(.12,.12,1.1,0,5.15,-.5,i.fenceDark)),t.add(wn(.5,.12,.3,0,5.08,-1.1,i.fenceDark));let n=new ge(new Jt(.17,8,6),e?i.lampBulbT:i.lampBulb);return n.position.set(0,4.98,-1.1),n.userData.bulb=!0,t.add(n),t.userData.size=[.4,5.2,.4],t.userData.bulbPos=new U(0,4.9,-1.1),t}function Kg(i){let e=new De,t=i.flat(3103288,.9,0),n=ee(1.6,3.2);if(e.add(ks(.22,n,0,n/2,0,t,!1,8)),e.add(jr(.22,1,1,1,0,n,0,t,8,5)),Math.random()<.8){let s=ks(.13,.7,.4,n*.6,0,t,!1,6);e.add(s),e.add(ks(.13,.5,.4+.32,n*.6+.3,0,t,!1,6)),e.children[e.children.length-1].rotation.z=0}return e}function $g(i,e){let t=new ge(new ka(e,0),i.flat(7035464,.95,0));t.scale.set(ee(.9,1.5),ee(.5,.9),ee(.9,1.4)),t.rotation.set(ee(3),ee(3),ee(3)),t.position.y=e*.3;let n=new De;return n.add(t),n}var yi=(i,e,t={})=>Kf("small",e,null,t),Ri=(i,e,t,n={})=>Kf("big",e,t,n);var Rl=new U;function Ci(i,e,t,n,s,r){let o=2*Math.PI*s/4,l=Math.max(r-2*s,0),c=Math.PI/4;Rl.copy(e),Rl[n]=0,Rl.normalize();let a=.5*o/(o+l),h=1-Rl.angleTo(i)/c;return Math.sign(Rl[t])===1?h*a:l/(o+l)+a+a*(1-h)}var Jo=class i extends ct{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let c=new U,a=new U,h=new U(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,x=new U,g=.5/o;for(let m=0,v=0;m<d.length;m+=3,v+=2)switch(c.fromArray(d,m),a.copy(c),a.x-=Math.sign(a.x)*g,a.y-=Math.sign(a.y)*g,a.z-=Math.sign(a.z)*g,a.normalize(),d[m+0]=h.x*Math.sign(c.x)+a.x*r,d[m+1]=h.y*Math.sign(c.y)+a.y*r,d[m+2]=h.z*Math.sign(c.z)+a.z*r,u[m+0]=a.x,u[m+1]=a.y,u[m+2]=a.z,Math.floor(m/p)){case 0:x.set(1,0,0),f[v+0]=Ci(x,a,"z","y",r,n),f[v+1]=1-Ci(x,a,"y","z",r,t);break;case 1:x.set(-1,0,0),f[v+0]=1-Ci(x,a,"z","y",r,n),f[v+1]=1-Ci(x,a,"y","z",r,t);break;case 2:x.set(0,1,0),f[v+0]=1-Ci(x,a,"x","z",r,e),f[v+1]=Ci(x,a,"z","x",r,n);break;case 3:x.set(0,-1,0),f[v+0]=1-Ci(x,a,"x","z",r,e),f[v+1]=1-Ci(x,a,"z","x",r,n);break;case 4:x.set(0,0,1),f[v+0]=1-Ci(x,a,"x","y",r,e),f[v+1]=1-Ci(x,a,"y","x",r,t);break;case 5:x.set(0,0,-1),f[v+0]=Ci(x,a,"x","y",r,e),f[v+1]=1-Ci(x,a,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Bt=(i,e)=>i+Math.random()*(e-i);function Il(i,e){let t=document.createElement("canvas");t.width=t.height=i,e(t.getContext("2d"),i);let n=new Gt(t);return n.wrapS=n.wrapT=en,n.anisotropy=4,n}var SE=(i,e)=>Il(512,(t,n)=>{t.fillStyle=i,t.fillRect(0,0,n,n);for(let s=0;s<2600;s++){t.strokeStyle=`rgba(255,255,255,${Bt(.01,.04)})`;let r=Bt(0,n);t.beginPath(),t.moveTo(Bt(0,n),r),t.lineTo(Bt(0,n),r+Bt(-2,2)),t.stroke()}for(let s=0;s<160;s++){t.strokeStyle=e,t.globalAlpha=Bt(.15,.5),t.lineWidth=Bt(.5,1.6);let r=Bt(0,n),o=Bt(0,n);t.beginPath(),t.moveTo(r,o),t.lineTo(r+Bt(-30,30),o+Bt(-6,6)),t.stroke()}t.globalAlpha=1;for(let s=0;s<900;s++)t.fillStyle=`rgba(0,0,0,${Bt(.1,.35)})`,t.fillRect(Bt(0,n),Bt(0,n),1.5,1.5)}),EE=()=>Il(256,(i,e)=>{let t=i.createImageData(e,e);for(let n=0;n<t.data.length;n+=4){let s=120+Math.random()*90;t.data[n]=t.data[n+1]=t.data[n+2]=s,t.data[n+3]=255}i.putImageData(t,0,0)}),TE=()=>Il(256,(i,e)=>{i.fillStyle="rgb(128,128,255)",i.fillRect(0,0,e,e);for(let t=0;t<5e3;t++){let n=Bt(0,e),s=Bt(0,e),r=Bt(1,2.2),o=i.createRadialGradient(n-r*.4,s-r*.4,0,n,s,r);o.addColorStop(0,"rgb(90,90,255)"),o.addColorStop(1,"rgba(170,170,255,0)"),i.fillStyle=o,i.beginPath(),i.arc(n,s,r,0,7),i.fill()}}),wE=()=>Il(512,(i,e)=>{i.fillStyle="#4a2c17",i.fillRect(0,0,e,e);for(let t=0;t<260;t++){i.strokeStyle=`rgba(${Bt(20,60)},${Bt(10,30)},5,${Bt(.15,.45)})`,i.lineWidth=Bt(.5,3),i.beginPath();let n=Bt(0,e);i.moveTo(0,n);for(let s=0;s<=16;s++)i.lineTo(s/16*e,n+=Bt(-3,3)+Math.sin(s*.7+t)*1.4);i.stroke()}for(let t=0;t<40;t++)i.fillStyle="rgba(210,170,120,0.08)",i.fillRect(Bt(0,e),Bt(0,e),Bt(10,60),Bt(1,3))}),Cl;function AE(){if(Cl)return Cl;let i=EE(),e=TE(),t=(n,s,r,o)=>new Ge({map:SE(n,s),roughnessMap:i,roughness:r,metalness:o,color:16777215});Cl={blued:t("#1b1e24","#9aa3ad",.42,.9),park:t("#34372f","#8d9184",.78,.55),steel:t("#4a4e54","#cfd4da",.3,.95),poly:new Ge({color:1908256,roughness:.72,metalness:0,normalMap:e,normalScale:new ae(.9,.9)}),polyTan:new Ge({color:7299146,roughness:.75,normalMap:e,normalScale:new ae(.6,.6)}),wood:new Ge({map:wE(),roughness:.5,metalness:0,color:16777215}),brass:new Ge({color:11569722,metalness:1,roughness:.3}),dot:new st({color:new me(.4,2.2,.8),toneMapped:!1}),dotR:new st({color:new me(2.4,.3,.2),toneMapped:!1}),glass:new Ge({color:727586,metalness:.9,roughness:.05,emissive:401456}),glove:new Ge({color:1974306,roughness:.85,normalMap:e,normalScale:new ae(.4,.4)}),sleeve:new Ge({color:3884598,roughness:.95,normalMap:e,normalScale:new ae(.25,.25)})};for(let n of Object.values(Cl))n.map&&(n.map.colorSpace=ft);return Cl}function Un(i,e,t,n,{x:s=0,bevel:r=.0025,curve:o=6}={}){let l=new Bo;e.forEach(([d,u],f)=>f?l.lineTo(d,u):l.moveTo(d,u));let c=new Za(l,{depth:t-r*2,bevelEnabled:!0,bevelThickness:r,bevelSize:r,bevelSegments:2,curveSegments:o});c.translate(0,0,-(t-r*2)/2),c.rotateY(-Math.PI/2);let a=c.attributes.uv;for(let d=0;d<a.count;d++)a.setXY(d,a.getX(d)*4,a.getY(d)*4);let h=new ge(c,n);return h.position.x=s,i.add(h),h}var Mt=(i,e,t,n,s,r,o,l,c=.004,a=0)=>{let h=new ge(new Jo(e,t,n,2,c),l);return h.position.set(s,r,o),h.rotation.x=a,i.add(h),h},Jf=(i,e,t,n,s,r,o,l,c=0)=>{let a=new ge(new ct(e,t,n),l);return a.position.set(s,r,o),a.rotation.x=c,i.add(a),a},Ft=(i,e,t,n,s,r,o,l=20,c)=>{let a=new ge(new It(c??e,e,t,l,1),o);return a.rotation.x=Math.PI/2,a.position.set(n,s,r),i.add(a),a},Qf=(i,e,t,n,s,r,o)=>{let l=new ge(new _i(e,t,8,24),o);return l.position.set(n,s,r),i.add(l),l};function Pl(i,e,t,n){let s=new ge(new _i(.022,.0035,6,18,Math.PI*1.15),n.poly);s.rotation.set(0,Math.PI/2,Math.PI*.93),s.position.set(0,t,e),i.add(s);let r=new ge(new _i(.012,.003,6,10,Math.PI*.6),n.steel);r.rotation.set(0,Math.PI/2,Math.PI*1.15),r.position.set(0,t+.006,e+.004),i.add(r)}function wu(i,e,t,n,s){Mt(i,.004,.009,.006,0,n+.004,e,s.blued,.001);let r=Ft(i,.0016,.002,0,n+.006,e+.003,s.dot,8);r.rotation.x=0,r.rotation.z=Math.PI/2,r.rotation.y=Math.PI/2;for(let o of[-1,1]){Mt(i,.005,.009,.008,o*.0055,n+.004,t,s.blued,.001);let l=Ft(i,.0013,.002,o*.0055,n+.006,t-.0045,s.dotR,8);l.rotation.x=0}}var Au={pistol(i,e){let t=new De;i.add(t),i.userData.slide=t,Un(t,[[.02,0],[-.17,0],[-.172,.022],[-.165,.03],[.012,.03],[.02,.022]],.026,e.blued,{bevel:.002}),Mt(t,.0262,.012,.032,0,.014,-.045,e.steel,.001);for(let n of[-1,1])for(let s=0;s<9;s++)Mt(t,.0015,.022,.0016,n*.0132,.014,.008-s*.0036,e.steel,4e-4);for(let n of[-1,1])for(let s=0;s<6;s++)Mt(t,.0015,.016,.0016,n*.0132,.012,-.13-s*.0036,e.steel,4e-4);wu(t,-.16,.008,.03,e),Ft(t,.0075,.012,0,.012,-.172,e.steel,20),Ft(t,.0045,.014,0,.012,-.175,e.poly,12),Un(i,[[.03,-.002],[-.16,-.002],[-.16,-.012],[-.06,-.016],[-.05,-.022],[0,-.018],[.006,-.03],[.022,-.13],[.06,-.13],[.045,-.02],[.034,-.008]],.028,e.poly,{bevel:.003});for(let n=0;n<4;n++)Mt(i,.0285,.003,.012,0,-.012,-.075-n*.012,e.poly,.001);return Pl(i,-.02,-.03,e),Mt(i,.03,.006,.042,0,-.133,.042,e.blued,.002,-.2),Mt(i,.004,.006,.014,.0145,-.008,-.02,e.steel,.001),Mt(i,.0035,.008,.02,.0145,.005,.02,e.steel,.001),Mt(i,.012,.014,.008,0,.018,.032,e.steel,.002),{muzzle:-.18,eject:-.045,pos:[.17,-.17,-.38],lz:-.04}},smg(i,e){Un(i,[[.09,0],[-.2,0],[-.2,.05],[.09,.05]],.05,e.park,{bevel:.004}),Ft(i,.016,.12,0,.026,-.26,e.blued,20);for(let t=0;t<6;t++)Qf(i,.017,.0022,0,.026,-.22-t*.015,e.steel).rotation.y=0;for(let t=0;t<6;t++)Mt(i,.052,.003,.012,0,.051,-.18+t*.03,e.blued,.001);wu(i,-.19,.06,.052,e),Mt(i,.036,.16,.026,0,-.08,-.06,e.blued,.004,.12);for(let t=0;t<8;t++)Mt(i,.038,.004,.028,0,-.01-t*.018,-.06+t*.002,e.steel,.001,.12);return Un(i,[[0,0],[.03,0],[.05,-.11],[.02,-.11]],.032,e.poly,{bevel:.004}),Pl(i,-.005,-.012,e),Ft(i,.006,.2,.018,.02,.18,e.steel,10),Ft(i,.006,.2,-.018,.02,.18,e.steel,10),Mt(i,.05,.07,.012,0,0,.28,e.poly,.004),Mt(i,.012,.012,.03,.03,.03,.02,e.steel,.003),{muzzle:-.33,eject:-.05,pos:[.19,-.19,-.4],lz:-.2}},shotgun(i,e){Un(i,[[.06,-.01],[-.14,-.01],[-.14,.055],[.04,.055],[.06,.04]],.05,e.blued,{bevel:.004}),Ft(i,.0125,.6,0,.038,-.44,e.blued,22),Ft(i,.0145,.52,0,0,-.4,e.blued,22),Qf(i,.016,.003,0,0,-.66,e.steel);let t=new ge(new Jt(.003,10,8),e.brass);t.position.set(0,.052,-.735),i.add(t);let n=Un(i,[[-.28,-.02],[-.46,-.02],[-.46,.02],[-.28,.02]],.05,e.wood,{bevel:.008});for(let s=0;s<9;s++)Mt(i,.052,.004,.006,0,-.022,-.3-s*.017,e.wood,.002);return i.userData.pump=n,Un(i,[[.06,.04],[.32,.03],[.34,.05],[.36,-.1],[.3,-.11],[.1,-.03],[.06,-.01]],.042,e.wood,{bevel:.008}),Mt(i,.044,.15,.02,0,-.03,.355,e.poly,.006,-.12),Pl(i,.035,-.02,e),Mt(i,.051,.012,.05,0,.022,-.05,e.steel,.002),{muzzle:-.75,eject:-.05,pos:[.2,-.2,-.4],lz:-.38}},rifle(i,e){Un(i,[[.12,0],[-.17,0],[-.17,.045],[.12,.045]],.052,e.park,{bevel:.004});for(let n=0;n<18;n++)Jf(i,.042,.004,.006,0,.049,-.16+n*.016,e.blued);Un(i,[[-.17,-.005],[-.44,-.005],[-.44,.05],[-.17,.05]],.056,e.polyTan,{bevel:.006});for(let n=0;n<7;n++)for(let s of[-1,1])Jf(i,.004,.018,.022,s*.028,.022,-.2-n*.034,e.poly);Ft(i,.0095,.26,0,.022,-.56,e.blued,18),Ft(i,.016,.05,0,.022,-.71,e.park,6);for(let n=0;n<3;n++)Mt(i,.004,.006,.03,.017,.03,-.71,e.poly,.001).rotation.z=n;Mt(i,.008,.045,.012,0,.07,-.43,e.park,.002),Ft(i,.019,.1,0,.1,-.05,e.blued,24),Ft(i,.023,.03,0,.1,-.11,e.blued,24),Ft(i,.021,.025,0,.1,.01,e.blued,24);let t=Ft(i,.019,.002,0,.1,-.126,e.glass,24);Mt(i,.024,.03,.05,0,.068,-.05,e.park,.003),Un(i,[[0,0],[-.06,0],[-.06,-.12],[-.03,-.14],[0,-.12]],.03,e.park,{bevel:.003}).rotation.x=-.15;for(let n=0;n<6;n++)Jf(i,.032,.003,.03,0,-.03-n*.02,-.03+n*.003,e.blued,-.15);return Un(i,[[.03,-0],[.07,-0],[.09,-.11],[.055,-.115]],.032,e.poly,{bevel:.004}),Pl(i,0,-.012,e),Ft(i,.014,.14,0,.025,.19,e.poly,16),Un(i,[[.2,.05],[.36,.045],[.36,-.07],[.33,-.08],[.2,0]],.044,e.polyTan,{bevel:.006}),Mt(i,.046,.13,.014,0,-.012,.365,e.poly,.005),Mt(i,.014,.014,.034,.03,.03,0,e.steel,.003),{muzzle:-.74,eject:-.03,pos:[.2,-.2,-.4],lz:-.3}},lmg(i,e){Un(i,[[.12,-.01],[-.2,-.01],[-.2,.06],[.12,.06]],.07,e.park,{bevel:.005}),Mt(i,.075,.03,.2,0,.075,-.06,e.park,.004);for(let t=0;t<12;t++)Mt(i,.05,.005,.008,0,.093,-.15+t*.016,e.blued,.001);Ft(i,.024,.36,0,.025,-.38,e.blued,22);for(let t=0;t<14;t++)Qf(i,.026,.004,0,.025,-.24-t*.02,e.park);Ft(i,.012,.16,0,.025,-.64,e.blued,16),Ft(i,.018,.06,0,.025,-.73,e.park,8),Mt(i,.13,.13,.15,0,-.1,-.03,e.polyTan,.012);for(let t=0;t<5;t++)Mt(i,.132,.006,.152,0,-.15+t*.025,-.03,e.poly,.002);for(let t=0;t<6;t++)Ft(i,.005,.03,.04,.05,-.01+t*.011,e.brass,8).rotation.set(0,0,Math.PI/2);Un(i,[[.04,-.01],[.08,-.01],[.1,-.12],[.065,-.125]],.034,e.poly,{bevel:.004}),Pl(i,.01,-.02,e),Un(i,[[.12,.05],[.4,.04],[.4,-.08],[.36,-.09],[.12,-.01]],.05,e.poly,{bevel:.007}),wu(i,-.66,.08,.093,e);for(let t of[-1,1]){let n=Ft(i,.005,.18,t*.03,-.05,-.62,e.steel,8);n.rotation.x=Math.PI/2+.35}return{muzzle:-.76,eject:-.02,pos:[.2,-.21,-.4],lz:-.3}},akimbo(i,e){let t=new De;t.position.set(-.12,-.01,.02),t.rotation.y=.22,t.rotation.z=.08;let n=new De;n.position.set(.12,-.01,0),n.rotation.y=-.12,n.rotation.z=-.04,i.add(t,n);let s=Au.pistol(t,e),r=Au.pistol(n,e),o=new pt;o.position.set(0,.012,s.muzzle),t.add(o);let l=new pt;l.position.set(0,.012,r.muzzle),n.add(l),Mt(t,.048,.04,.07,.01,-.09,.01,e.glove,.012),Mt(n,.048,.04,.07,-.01,-.09,0,e.glove,.012);let c=new ge(new It(.032,.04,.28,12),e.sleeve);c.rotation.set(Math.PI/2,.4,.2),c.position.set(-.08,-.16,.16),i.add(c);let a=new ge(new It(.032,.04,.28,12),e.sleeve);return a.rotation.set(Math.PI/2,-.2,-.15),a.position.set(.08,-.16,.16),i.add(a),{muzzle:r.muzzle,eject:-.04,pos:[0,-.16,-.36],lz:0,akimbo:!0,muzzles:[o,l],slides:[t.userData.slide,n.userData.slide]}},lever(i,e){Ft(i,.011,.62,0,.03,-.42,e.blued,18),Ft(i,.016,.18,0,.012,-.22,e.steel,16),Un(i,[[.02,.02],[.28,.015],[.3,-.08],[.24,-.09],[.06,-.01]],.04,e.wood,{bevel:.006}),Mt(i,.038,.12,.016,0,-.02,.29,e.poly,.004);let t=new ge(new _i(.045,.004,6,16,Math.PI),e.steel);return t.rotation.set(0,Math.PI/2,Math.PI),t.position.set(0,-.04,.02),i.add(t),i.userData.pump=t,wu(i,-.7,.02,.045,e),Ft(i,.008,.04,0,.03,-.74,e.blued,12),Mt(i,.03,.05,.04,0,-.02,.04,e.wood,.004),{muzzle:-.76,eject:0,pos:[.18,-.18,-.42],lz:-.28}},nailer(i,e){Mt(i,.09,.11,.22,0,0,-.02,e.park,.008),Mt(i,.07,.06,.16,0,-.02,.12,e.polyTan,.006),Ft(i,.012,.16,0,.01,-.2,e.steel,14),Ft(i,.02,.04,0,.01,-.28,e.blued,12);for(let s=0;s<5;s++)Mt(i,.004,.012,.05,.048,.02-s*.012,-.02,e.brass,.001);let t=new ge(new _i(.05,.006,6,14),e.poly);t.rotation.x=Math.PI/2,t.position.set(.02,-.02,.2),i.add(t),Mt(i,.035,.08,.04,0,-.08,.02,e.poly,.004,.3);let n=Ft(i,.004,.02,0,.01,-.31,e.dot,8);return n.material=e.dot,{muzzle:-.32,eject:-.02,pos:[.2,-.18,-.36],lz:-.08}},sawed(i,e){Ft(i,.014,.28,.012,.02,-.16,e.blued,16),Ft(i,.014,.28,-.012,.02,-.16,e.blued,16),Mt(i,.05,.04,.08,0,0,-.02,e.steel,.004),Un(i,[[0,0],[.02,-.02],[.05,-.12],[.02,-.13],[-.01,-.02]],.032,e.wood,{bevel:.005}),Mt(i,.02,.03,.02,.03,.03,0,e.steel,.002);let t=new ge(new Jt(.004,8,6),e.brass);return t.position.set(0,.04,-.3),i.add(t),{muzzle:-.31,eject:-.02,pos:[.18,-.16,-.34],lz:-.02}}},ep;function RE(){if(ep)return ep;let i=Il(128,(e,t)=>{let n=t/2,s=e.createRadialGradient(n,n,0,n,n,n);s.addColorStop(0,"rgba(255,250,230,1)"),s.addColorStop(.25,"rgba(255,190,90,0.9)"),s.addColorStop(1,"rgba(255,90,20,0)"),e.fillStyle=s;for(let r=0;r<7;r++)e.save(),e.translate(n,n),e.rotate(r/7*6.283+Bt(-.2,.2)),e.beginPath(),e.moveTo(0,-6),e.lineTo(n*Bt(.7,1),0),e.lineTo(0,6),e.fill(),e.restore();e.beginPath(),e.arc(n,n,n*.35,0,7),e.fill()});return i.wrapS=i.wrapT=Cn,ep=new st({map:i,color:new me(3,2.2,1.2),blending:ln,transparent:!0,depthWrite:!1,side:Ot,toneMapped:!1})}function Jg(i,e=!0){let t=AE(),n=new De,s=(Au[i]||Au.rifle)(n,t);if(!e){let d=new pt;return n.userData={muzzle:d,eject:d,base:new U},n}if(!s.akimbo){Mt(n,.05,.08,.075,0,-.065,.035,t.glove,.018).rotation.x=.25;for(let p=0;p<3;p++)Mt(n,.052,.016,.03,.002,-.04-p*.02,0,t.glove,.007);let d=new ge(new It(.034,.042,.32,16),t.sleeve);d.rotation.x=Math.PI/2-.25,d.position.set(.02,-.13,.22),n.add(d);let u=Mt(n,.055,.05,.09,i==="pistol"?-.018:-.028,i==="pistol"?-.07:-.03,s.lz,t.glove,.016),f=new ge(new It(.034,.042,.34,16),t.sleeve);f.rotation.set(Math.PI/2-.1,.35,0),f.position.set(-.1,-.12,s.lz+.22),n.add(f)}n.traverse(d=>{d.isMesh&&(d.castShadow=!1)});let r=new pt;r.position.set(0,i==="pistol"?.012:.022,s.muzzle),n.add(r);let o=new pt;o.position.set(.04,.03,s.eject),n.add(o);let l=new De,c=RE();for(let d=0;d<2;d++){let u=new ge(new an(.06,.16),c);u.rotation.set(Math.PI/2,d*Math.PI/2,0),u.position.z=-.07,l.add(u)}let a=new ge(new an(.12,.12),c);l.add(a),l.position.copy(r.position),l.visible=!1,n.add(l);let h=0;return n.traverse(d=>{d.isMesh&&(h+=(d.geometry.index?d.geometry.index.count:d.geometry.attributes.position.count)/3)}),n.userData={muzzle:r,eject:o,flash:l,slide:n.userData.slide,slides:s.slides||null,muzzles:s.muzzles||null,pump:n.userData.pump,base:new U(...s.pos),tris:Math.round(h)},n.userData.base.z-=.1,n.userData.base.x-=.03,n.position.copy(n.userData.base),n.scale.setScalar(.9),n}var jt={pistol:{id:"pistol",name:"Dustdevil .45",dmg:30,rpm:380,auto:!1,mag:12,reserve:60,reload:1.25,spread:.004,pellets:1,kick:.01,shake:.12,price:0,head:3.2,snd:"pistol",range:90},smg:{id:"smg",name:"Rattler SMG",dmg:22,rpm:820,auto:!0,mag:32,reserve:160,reload:1.6,spread:.014,pellets:1,kick:.006,shake:.08,price:600,head:2.4,snd:"smg",range:80},shotgun:{id:"shotgun",name:"Sidewinder 12g",dmg:17,rpm:78,auto:!1,mag:6,reserve:42,reload:.5,perShell:!0,spread:.055,pellets:9,kick:.04,shake:.4,price:1200,head:2,snd:"shotgun",range:30},rifle:{id:"rifle",name:"Ridgeback AR",dmg:42,rpm:620,auto:!0,mag:30,reserve:150,reload:1.9,spread:.007,pellets:1,kick:.013,shake:.18,price:1800,head:2.6,snd:"rifle",range:120},lmg:{id:"lmg",name:"Hog Hammer LMG",dmg:40,rpm:700,auto:!0,mag:100,reserve:300,reload:3.8,spread:.012,pellets:1,kick:.012,shake:.2,price:0,crateOnly:!0,head:2.4,snd:"lmg",range:110},akimbo:{id:"akimbo",name:"Twin Dustdevils",dmg:26,rpm:500,auto:!1,mag:24,reserve:96,reload:1.7,spread:.009,pellets:1,kick:.008,shake:.1,price:750,head:2.6,snd:"akimbo",range:70,akimbo:!0},lever:{id:"lever",name:"Barn Lever",dmg:70,rpm:55,auto:!1,mag:7,reserve:35,reload:.48,perShell:!0,spread:.002,pellets:1,kick:.02,shake:.16,price:1500,head:3,snd:"lever",range:110},nailer:{id:"nailer",name:"Shop Nailer",dmg:14,rpm:900,auto:!0,mag:36,reserve:144,reload:1.5,spread:.022,pellets:1,kick:.003,shake:.05,price:800,head:1.4,snd:"nailer",range:22},sawed:{id:"sawed",name:"Sawed-off",dmg:24,rpm:200,auto:!1,mag:2,reserve:20,reload:1.7,spread:.11,pellets:8,kick:.06,shake:.55,price:0,crateOnly:!0,head:1.5,snd:"sawed",range:14}},Ll=["smg","shotgun","rifle","lmg","sawed","lever"],OR=new Ge({color:2895669,metalness:.9,roughness:.34}),FR=new Ge({color:5593439,metalness:.85,roughness:.28}),BR=new Ge({color:4072982,metalness:0,roughness:.55}),kR=new Ge({color:1626528,metalness:.4,roughness:.3,emissive:678469,emissiveIntensity:.8}),zR=new Ge({color:12946539,roughness:.7}),HR=new Ge({color:4016698,roughness:.9}),GR=new Ge({color:1776928,roughness:.8});function Dl(i,e=!0){return Jg(i,e)}var tp={discount:.5,pickup:1.35,deliver:1.9,board:1.7,radio:3.6,decay:.5,lots:{C:{x0:24,x1:50.4,z0:2,z1:22},D:{x0:-50.4,x1:-24,z0:-34,z1:-2},E:{x0:4,x1:24.4,z0:-76.4,z1:-52}},gates:[{id:"AB",price:1250,name:"Back lot",blurb:"The back lot awaits",areas:["A","B"],x:0,z:-24,w:6,axis:"x",stand:{A:{x:0,z:-22.2},B:{x:0,z:-25.8}}},{id:"AC",price:1500,name:"Lot C",blurb:"Fuel yard open",areas:["A","C"],x:24,z:12,w:5,axis:"z",stand:{A:{x:22.2,z:12},C:{x:25.8,z:12}}},{id:"AD",price:1750,name:"Lot D",blurb:"Bus barn open",areas:["A","D"],x:-24,z:-14,w:5,axis:"z",stand:{A:{x:-22.2,z:-14},D:{x:-25.8,z:-14}}},{id:"SD",price:900,name:"Side access",blurb:"Side gate open",areas:["B","D"],x:-24,z:-30,w:4.2,axis:"z",stand:{B:{x:-22.2,z:-30},D:{x:-25.8,z:-30}}},{id:"BE",price:2e3,name:"Lot E",blurb:"Radio yard open",areas:["B","E"],x:12,z:-52,w:5,axis:"x",stand:{B:{x:12,z:-50.2},E:{x:12,z:-53.8}}}],jobs:[{id:"fuel",title:"Fuel Run",kind:"carry",gate:"AC",area:"A",need:3,pts:400,power:"double",pad:{x:19.2,z:12},items:[{id:"f0",x:15,z:19},{id:"f1",x:-16,z:18},{id:"f2",x:6,z:4}]},{id:"bus",title:"Board the Bus",kind:"board",gate:"AD",area:"A",need:4,pts:500,power:"ammo",pad:{x:-15,z:4.2},items:[{id:"b0",x:-16.45,z:.2},{id:"b1",x:-16.45,z:2.1},{id:"b2",x:-13.55,z:.2},{id:"b3",x:-13.55,z:2.1}]},{id:"carb",title:"Carb Hunt",kind:"carry",gate:"SD",area:"B",need:1,pts:350,power:"double",pad:{x:-18.2,z:-30},items:[{id:"carb",x:-6,z:20}]},{id:"radio",title:"Radio Hold",kind:"radio",gate:"BE",area:"B",need:20,pts:600,power:"ammo",pad:{x:8,z:-42},items:[]},{id:"parts",title:"Part Collection",kind:"carry",gate:"",area:"C",need:3,pts:450,power:"double",pad:{x:40,z:5.5},items:[{id:"p0",x:32,z:18},{id:"p1",x:46,z:16},{id:"p2",x:36,z:9}]},{id:"clear",title:"Clear Lot D",kind:"clear",gate:"",area:"D",need:8,pts:500,power:"ammo",pad:{x:-37,z:-18},items:[]}]};var Vt=tp,np=-24;function Wi(i,e,t="junkyard"){if(typeof e!="number")return i>np?"A":"B";if(t!=="junkyard")return e>np?"A":"B";let n=tp.lots;for(let s of["C","D","E"]){let r=n[s];if(i>r.x0&&i<r.x1&&e>r.z0&&e<r.z1)return s}return e>np?"A":(e>=-52,"B")}function Qo(i){let e=new Set((i||[]).filter(n=>n&&n.open).map(n=>n.id)),t=new Set(["A"]);return e.has("AB")&&t.add("B"),e.has("AC")&&t.add("C"),(e.has("AD")||e.has("SD"))&&t.add("D"),e.has("BE")&&t.add("E"),t}function Qg(i,e){return i.stand&&i.stand[e]||{x:i.x,z:i.z}}function PE(i,e,t){if(!i||!e||i===e)return i===e?[]:null;let n=new Map;for(let c of t||[]){if(!c||!c.open||!c.areas||c.areas.length<2)continue;let[a,h]=c.areas;n.has(a)||n.set(a,[]),n.has(h)||n.set(h,[]),n.get(a).push(c),n.get(h).push(c)}let s=[i],r=new Map([[i,null]]);for(;s.length;){let c=s.shift();if(c===e)break;for(let a of n.get(c)||[]){let h=a.areas[0]===c?a.areas[1]:a.areas[0];r.has(h)||(r.set(h,{via:a,from:c}),s.push(h))}}if(!r.has(e))return null;let o=[],l=e;for(;r.get(l);)o.push(r.get(l).via),l=r.get(l).from;return o.reverse(),o}function ex(i,e,t,n,s,r=0){let o=Wi(i,e,t);if(!n||o===n)return null;let l=PE(o,n,s);if(!l||!l.length)return null;let c=l[0],a=c.areas[0]===o?c.areas[1]:c.areas[0],h=c.axis!=="z",d=Qg(c,o),u=Qg(c,a),f=h?Math.sign(u.z-d.z)||-1:Math.sign(u.x-d.x)||1,p=h?e:i,x=h?c.z:c.x,g=(p-x)*f,m=Math.max(.25,(c.w||6)/2-1.05),v=Math.max(-m,Math.min(m,r||0)),S=x+f*1.55;return{x:h?c.x+v:S,z:h?S:c.z+v,ex:h?c.x:S,ez:h?S:c.z,gate:c.id,next:a,progress:g,crossZ:h,gx:c.x,gz:c.z}}var On=-24;function Ru(i,e="#18d1a0",t=512,n=256){let s=document.createElement("canvas");s.width=t,s.height=n;let r=s.getContext("2d");r.fillStyle="rgba(8,12,16,0.82)",r.fillRect(0,0,t,n),r.strokeStyle=e,r.lineWidth=6,r.strokeRect(8,8,t-16,n-16),r.textAlign="center",r.textBaseline="middle",i.forEach((l,c)=>{r.font=`${l.w||700} ${l.s}px system-ui, "Segoe UI", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji"`,r.fillStyle=l.c||"#fff",r.fillText(l.t,t/2,l.y)});let o=new Gt(s);return o.colorSpace=ft,o.anisotropy=4,o}function IE(){try{let i=document.createElement("canvas");i.width=i.height=32;let e=i.getContext("2d");e.textBaseline="middle",e.textAlign="center",e.font='28px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",system-ui,sans-serif',e.fillStyle="#ffffff",e.fillText("\u{1F4A3}",16,16);let t=e.getImageData(0,0,32,32).data,n=0;for(let s=0;s<t.length;s+=4)t[s+3]>60&&Math.max(t[s],t[s+1],t[s+2])-Math.min(t[s],t[s+1],t[s+2])>40&&n++;return n>12}catch{return!1}}var Nl=class{constructor(e,t,n){this.scene=e,this.T=t,this.M=new Tu(t),this.tier=n,this.colliders=[],this.windows=[],this.buys=[],this.lamps=[],this.dyn=[],this.fall=[],this.doorInfos=[],this.doors=[],this.missionMeshes=new Map,this.mapId="junkyard",this.staticGroup=new De,this.root=new De,e.add(this.root),this.build(),this.batch(),this.dress(n)}dress(e=this.tier){let t=e>0,n=this.M;n.sand.color.setHex(t?11047032:13615792),n.sand.bumpScale=t?5.5:3,n.sand.roughness=t?.96:.97,n.concrete.color.setHex(t?13154984:16777215),n.concrete.bumpScale=t?2.8:1.5,n.concrete.roughness=t?.96:.88,n.concrete.metalness=t?0:.02,n.fence.roughness=t?.42:1,n.fence.metalness=t?.84:.75,n.fence.bumpScale=t?4.2:2.5,n.fenceDark.roughness=t?.6:1,n.fenceDark.metalness=t?.55:.7;for(let s of Object.values(n.cache))s.userData.paint&&(s.roughness=t?.4:1,s.metalness=t?.25:.55);if(this.lampReach=t?18:30,this.lampDecay=t?2:1.7,this.lampBase=t?90:95,this.moon&&(this.moon.intensity=t?1.4:1.7),this.lampPool)for(let s of this.lampPool)s.distance=this.lampReach,s.decay=this.lampDecay;qg(e)}addCol(e,t,n,s,r=3,o={}){let l={x0:e,x1:t,z0:n,z1:s,y0:o.y0||0,y1:r,...o};return this.colliders.push(l),l}box(e,t,n,s,r,o,l,c={}){let a=new ge(new ct(e,t,n),l);return a.position.set(s,r,o),a.castShadow=c.cast!==!1,a.receiveShadow=!0,(c.dynamic?this.root:this.staticGroup).add(a),a}place(e,t,n,s=0,r=!0){e.position.x+=t,e.position.z+=n,e.rotation.y=s,e.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0)}),this.staticGroup.add(e);let o=e.userData.hd;if(o){e.updateMatrix(),e.traverse(c=>{c.isMesh&&(c.userData.hdProp=!0)});let l=o.kind==="tyre"?e.children.map(c=>new Ze().makeTranslation(c.position.x,c.position.y,c.position.z).premultiply(e.matrix).multiply(new Ze().makeRotationY(ee(cn)))):[e.matrix.clone()];for(let c of l)(this.hdProps||(this.hdProps=[])).push({...o,m:c})}if(r&&e.userData.size){let[l,c,a]=e.userData.size;Math.abs(Math.sin(s))>.7&&([l,a]=[a,l]),this.addCol(t-l/2+.05,t+l/2-.05,n-a/2+.05,n+a/2-.05,c)}return e}build(){let{M:e,T:t,scene:n}=this;this.mapId="junkyard",this.buildSky(),this.buildGround();let s=3.2,r=.4,o=(d,u,f,p=[],x=e.fence)=>this.wall("x",d,u,f,p,s,r,x),l=(d,u,f,p=[],x=e.fence)=>this.wall("z",d,u,f,p,s,r,x),c=d=>{let u=Vt.gates.find(f=>f.id===d);return{c:u.axis==="x"?u.x:u.z,id:u.id,door:!0,w:u.w,price:u.price,name:u.name,blurb:u.blurb,areas:u.areas,stand:u.stand}};o(24,-24,24,[{c:-10,id:"S1",area:"A"},{c:11,id:"S2",area:"A"}]),l(24,-24,24,[{c:-4,id:"E1",area:"A"},c("AC")]),l(-24,-24,24,[{c:6,id:"W1",area:"A"},c("AD")]),o(-24,-24,24,[c("AB")]),l(24,-52,-24,[{c:-40,id:"E2",area:"B"}]),l(-24,-52,-24,[{c:-38,id:"W2",area:"B"},c("SD")]),o(-52,-24,24,[{c:-12,id:"N1",area:"B"},c("BE")]);let a=(d,u,f,p)=>{let x=new ge(new an(d,u),e.concrete);x.rotation.x=-Math.PI/2,x.position.set(f,.015,p),x.receiveShadow=!0,this.staticGroup.add(x)};a(48,48,0,0),a(48,28,0,-38),this.buildLots(o,l,a),this.buildGate();let h=this.place.bind(this);h(yi(e,6010272,{door:!0}),-9,-9,.2*0),h(yi(e,14252330,{missing:!0,tilt:.04}),13,-10,Math.PI/2),h(Ri(e,6197184),9,11,Math.PI/2),h(Ri(e,14252330,15129792,{missing:!0}),-15,1,0),h(yi(e,14733722),-4,16,Math.PI/2+0),h(yi(e,11680302,{tilt:-.05}),19,16,0),h(Ri(e,9087050,15129792),3,-14,Math.PI/2);for(let[d,u,f]of[[17,2,5],[-20,-5,4],[-3,-4,3],[-19,19,6],[21,-20,4]])h(wl(e,f),d,u);for(let[d,u,f]of[[5,19,3829413],[6.2,19.8,11680302],[4.4,20.6,9087050],[-1,-19,14252330],[.2,-20,3829413]])h(cr(e,f),d,u);h(ti(e,1.1),-21,12),h(ti(e,.9),-20.8,13.2),h(ti(e,1.3),21,9),h(ti(e,1),20.4,10.4),this.shack(18,-17,6,5),h(yi(e,13619140,{missing:!0}),-12,-36,Math.PI/2),h(yi(e,6010272,{tilt:.05}),14,-46,.3*0),h(Ri(e,11680302,15129792),6,-35,0),h(Ri(e,6010272,15129792,{tilt:.04}),-10,-47,Math.PI/2),h(yi(e,13803834,{door:!0}),0,-43,Math.PI/2);for(let[d,u,f]of[[18,-30,5],[-20,-29,3],[19,-36,4],[-3,-30,4]])h(wl(e,f),d,u);for(let[d,u,f]of[[-19,-49,14252330],[-18,-50,3829413],[20,-50,11680302]])h(cr(e,f),d,u);h(ti(e,1.2),21,-46),h(ti(e,1),-21,-42),h(ti(e,.9),20.6,-47.4);for(let[d,u,f,p]of[[-11,11,0,.6],[14,5,0,2.6],[-13,-12,1,-.5],[10,-19,0,3.4],[-8,-30,0,.3],[11,-40,1,3],[-4,-49,0,1.4]]){let x=Al(this.M,!!f);x.position.set(d,0,u),x.rotation.y=p,x.traverse(m=>{m.isMesh&&(m.castShadow=!m.userData.bulb)}),x.updateMatrixWorld(!0),this.addCol(d-.2,d+.2,u-.2,u+.2,5);let g=x.userData.bulbPos.clone().applyMatrix4(x.matrixWorld);this.lamps.push({pos:g,teal:!!f,ph:ee(100)}),this.staticGroup.add(x)}this.wallBuy("smg",-14,On+.25,0),this.wallBuy("shotgun",23.75,-15,-Math.PI/2),this.wallBuy("rifle",-23.75,-44,Math.PI/2),this.wallBuy("akimbo",23.75,8,-Math.PI/2),this.wallBuy("lever",-23.75,-32,Math.PI/2),this.wallBuy("nailer",10,23.65,Math.PI),this.nadeBuy(4,16.2,0),this.wallBuy("smg",49.65,12,-Math.PI/2),this.wallBuy("shotgun",-49.65,-16,Math.PI/2),this.wallBuy("rifle",18,-75.65,0),this.buildCrate(-17.5,14.5),this.scenery(),this.buildLights()}wall(e,t,n,s,r,o,l,c){let{M:a}=this,h=p=>p.w||3.2,d=[...r].sort((p,x)=>p.c-x.c),u=n,f=(p,x)=>{if(x-p<.05)return;let g=x-p,m=(p+x)/2,v=Math.max(1,Math.ceil(g/8));for(let S=0;S<v;S++){let y=p+g*S/v,w=p+g*(S+1)/v;this.wseg(e,t,y,w,o,l,c)}};for(let p of d)f(u,p.c-h(p)/2),this.opening(e,t,p,o,l,c),u=p.c+h(p)/2;f(u,s)}wseg(e,t,n,s,r,o,l){let c=s-n,a=(n+s)/2;e==="x"?(this.box(c,r,o,a,r/2,t,l),this.addCol(n,s,t-o/2,t+o/2,r),this.box(.35,r+.5,.55,n,(r+.5)/2,t,this.M.fenceDark),this.box(c,.1,.12,a,r+.4,t,this.M.fenceDark)):(this.box(o,r,c,t,r/2,a,l),this.addCol(t-o/2,t+o/2,n,s,r),this.box(.55,r+.5,.35,t,(r+.5)/2,n,this.M.fenceDark),this.box(.12,.1,c,t,r+.4,a,this.M.fenceDark))}opening(e,t,n,s,r,o){let{M:l}=this,c=n.w||3.2;if(n.door){let b=e==="x"?n.c:t,D=e==="x"?t:n.c;e==="x"?(this.box(.5,s+.8,.7,b-c/2,(s+.8)/2,D,l.fenceDark),this.box(.5,s+.8,.7,b+c/2,(s+.8)/2,D,l.fenceDark)):(this.box(.7,s+.8,.5,b,(s+.8)/2,D-c/2,l.fenceDark),this.box(.7,s+.8,.5,b,(s+.8)/2,D+c/2,l.fenceDark));let k=n.id==="DOOR"?"AB":n.id||"AB",L=n.areas||["A","B"],R=n.stand||(e==="x"?{A:{x:b,z:D+1.8},B:{x:b,z:D-1.8}}:{A:{x:b-1.8,z:D},B:{x:b+1.8,z:D}});this.doorInfos.push({id:k,x:b,z:D,w:c,axis:e,price:n.price||1250,name:n.name||"Back lot",blurb:n.blurb||"The back lot awaits",areas:L,stand:R});return}let a=e==="x"?{x:0,z:t>0?1:-1}:{x:t>0?1:-1,z:0};e==="x"&&t===-52&&(a.z=-1),n.outN&&(a=e==="x"?{x:0,z:n.outN}:{x:n.outN,z:0});let h=e==="x"?n.c:t,d=e==="x"?t:n.c,u=.95,f=2.5,p=c,x=(b,D,k)=>e==="x"?[b,D,r]:[r,D,b],[g,m,v]=x(p,u,0);this.box(g,m,v,h,u/2,d,o);let[S,y,w]=x(p,s-f,0);this.box(S,y,w,h,(s+f)/2,d,o);let T=l.wood;for(let b of[-1,1]){let[D,k,L]=x(.2,f-u,0);this.box(e==="x"?.2:r+.12,f-u,e==="x"?r+.12:.2,e==="x"?h+b*(p/2-.1):h,(u+f)/2,e==="x"?d:d+b*(p/2-.1),T)}this.addCol(e==="x"?h-p/2:h-r/2,e==="x"?h+p/2:h+r/2,e==="x"?d-r/2:d-p/2,e==="x"?d+r/2:d+p/2,u,{bulletOnly:!1}),this.addCol(e==="x"?h-p/2:h-r/2,e==="x"?h+p/2:h+r/2,e==="x"?d-r/2:d-p/2,e==="x"?d+r/2:d+p/2,s,{y0:f,bulletOnly:!0}),this.addCol(e==="x"?h-p/2:h-r/2,e==="x"?h+p/2:h+r/2,e==="x"?d-r/2-.02:d-p/2,e==="x"?d+r/2+.02:d+p/2,s,{noBullet:!0});let I=[],_=Math.atan2(a.x,a.z);for(let b=0;b<6;b++){let D=new ge(new ct(p-.15,.2,.07),l.wood),k=new U(h+a.x*.23,u+.16+b*.255,d+a.z*.23);D.position.copy(k),D.rotation.set(0,_,ee(-.05,.05)),D.castShadow=!0,D.receiveShadow=!0,D.userData={home:k,rotZ:D.rotation.z,ry:_},this.root.add(D),I.push(D)}let M=new ge(new ct(e==="x"?.3:.06,.06,e==="x"?.06:.3),new st({color:new me(1.8,.3,.15),toneMapped:!1}));M.position.set(h-a.x*.3,2.85,d-a.z*.3),M.userData.noAO=!0,this.root.add(M),this.windows.push({id:n.id,area:n.area||Wi(h,d,this.mapId),c:new U(h,0,d),n:a,t:{x:-a.z,z:a.x},out:{x:h+a.x*1.5,z:d+a.z*1.5},in:{x:h-a.x*1.6,z:d-a.z*1.6},planks:I,count:6,attackers:0,cool:0,axis:e,lamp:M})}removePlank(e){if(e.count<=0)return!1;let t=e.planks[e.count-1];return e.count--,t.userData.fall={vx:e.n.x*ee(1,3)+ee(-1,1),vy:ee(1,3),vz:e.n.z*ee(1,3)+ee(-1,1),t:0,rx:ee(-6,6),rz:ee(-6,6)},this.fall.push(t),!0}addPlank(e){if(e.count>=6)return!1;let t=e.planks[e.count];e.count++,t.userData.fall=null;let n=this.fall.indexOf(t);return n>=0&&this.fall.splice(n,1),t.visible=!0,t.position.copy(t.userData.home),t.rotation.set(0,t.userData.ry,t.userData.rotZ),!0}buildGate(){this.buildGates()}buildGates(){let{M:e}=this,t=new Ge({color:15251502,roughness:.6,metalness:.3});this.doors=[];for(let n of this.doorInfos){let s=n.axis!=="z",r=new De,o=new ge(new ct(s?n.w:.25,3.4,s?.25:n.w),e.fence);o.position.y=1.7,o.castShadow=o.receiveShadow=!0,r.add(o);let l=Math.max(3,Math.round(n.w));for(let h=0;h<l;h++){let d=new ge(new ct(s?.42:.05,3.4,s?.05:.42),h%2?t:e.fenceDark),u=-n.w/2+n.w*(h+.5)/l;d.position.set(s?u:.15,1.7,s?.15:u),r.add(d)}r.position.set(n.x,0,n.z),this.root.add(r);let c=s?this.addCol(n.x-n.w/2,n.x+n.w/2,n.z-.2,n.z+.2,3.4,{door:!0,gate:n.id}):this.addCol(n.x-.2,n.x+.2,n.z-n.w/2,n.z+n.w/2,3.4,{door:!0,gate:n.id}),a={id:n.id,mesh:r,open:!1,t:0,price:n.price,name:n.name,blurb:n.blurb,areas:n.areas,stand:n.stand,axis:n.axis,col:c,pos:{x:n.x,z:n.z},x:n.x,z:n.z};if(this.doors.push(a),n.id==="AB"){let h=new ge(new an(7.5,1.9),new st({map:this.T.sign,color:new me(1.9,1.9,1.9),toneMapped:!1}));h.position.set(n.x,5,n.z+.45),this.staticGroup.add(h);for(let d of[-1,1])this.box(.18,4.4,.18,n.x+d*3.5,2.5,n.z+.4,e.fenceDark);this.signPos=new U(n.x,5,n.z+1)}else{let h=n.axis==="z"?Math.PI/2:0,d=new ge(new an(3.4,.7),new st({map:Ru([{t:n.name.toUpperCase(),s:64,y:128,w:800,c:"#ffd36b"}],"#ffd36b",512,256),toneMapped:!1,color:new me(.9,.9,.9)}));d.position.set(n.x,4.15,n.z),d.rotation.y=h,this.root.add(d)}}this.door=this.doors.find(n=>n.id==="AB")||this.doors[0]}buildLots(e,t,n){let{M:s}=this,r=this.place.bind(this);t(50,2,22,[{c:8,id:"C1",area:"C"},{c:16,id:"C2",area:"C"}]),e(22,24,50,[{c:36,id:"C3",area:"C"}]),e(2,24,50,[]),n(26,20,37,12),r(yi(s,13803834,{missing:!0}),32,16,.4),r(Ri(s,12868138,15129792),30,8,Math.PI/2);for(let[o,l,c]of[[40,18,11680302],[41.2,17.2,14252330],[39.2,18.8,3829413],[44,7,9087050]])r(cr(s,c),o,l);r(ti(s,1.1),46,14),r(ti(s,.9),46.8,15.1),this.lampAt(44,14,1,1.2),t(-50,-34,-2,[{c:-10,id:"D1",area:"D"},{c:-24,id:"D2",area:"D"}]),e(-2,-50,-24,[]),e(-34,-50,-24,[{c:-38,id:"D3",area:"D"}]),n(26,32,-37,-18),r(Ri(s,6197184,15129792),-38,-10,0),r(Ri(s,14252330,13616814,{tilt:.03}),-38,-24,0),r(yi(s,9087050,{door:!0}),-44,-16,Math.PI/2),r(ti(s,1.2),-46,-6),r(ti(s,1),-32,-30),this.lampAt(-44,-22,0,.4),e(-76,4,24,[{c:8,id:"EN",area:"E"}]),t(4,-76,-52,[{c:-68,id:"EW",area:"E",outN:-1}]),t(24,-76,-52,[{c:-64,id:"EE",area:"E"}]),n(20,24,14,-64),r(yi(s,13619140,{missing:!0,tilt:-.04}),10,-64,.6),r(Ri(s,3829413,15129792),18,-68,Math.PI/2),r(ti(s,1),8,-72),r(cr(s,14252330),20,-58),r(cr(s,3829413),21,-57.2),this.lampAt(10,-70,1,2.2),this.buildDressing()}lampAt(e,t,n,s){let r=Al(this.M,!!n);r.position.set(e,0,t),r.rotation.y=s,r.traverse(l=>{l.isMesh&&(l.castShadow=!l.userData.bulb)}),r.updateMatrixWorld(!0),this.addCol(e-.2,e+.2,t-.2,t+.2,5);let o=r.userData.bulbPos.clone().applyMatrix4(r.matrixWorld);this.lamps.push({pos:o,teal:!!n,ph:ee(100)}),this.staticGroup.add(r)}buildDressing(){let{M:e}=this,t=f=>Vt.jobs.find(p=>p.id===f),n=t("fuel").pad,s=t("carb").pad,r=t("radio").pad,o=t("parts").pad;this.box(1.5,.9,.9,21.05,.45,12,e.fenceDark),this.box(1.6,.12,1,21.05,.96,12,e.fence),this.addCol(20.3,21.8,11.55,12.45,1.05);let l=new ge(new ct(.28,.16,.16),new st({color:new me(.2,2.4,1.2),toneMapped:!1}));l.position.set(20.2,1.05,12),l.userData.noAO=!0,this.root.add(l),this.box(1.3,.75,.7,-19.5,.38,-31.15,e.wood),this.addCol(-20.2,-18.8,-31.55,-30.75,.9),this.box(1.4,.8,.7,42.2,.4,6.3,e.wood),this.addCol(41.5,42.9,5.95,6.65,.95),this.box(.18,5.2,.18,9.4,2.6,-43.4,e.fenceDark),this.box(1.1,.16,.16,9.4,4.9,-43.4,e.fence),this.box(.7,.45,.4,6.7,.9,-43.1,e.fenceDark),this.addCol(9.25,9.55,-43.55,-43.25,5.2);let c=new ge(new Jt(.12,8,6),new st({color:new me(2.2,.35,.25),toneMapped:!1}));c.position.set(9.9,5.05,-43.4),c.userData.noAO=!0,this.root.add(c),this.box(.16,6.4,.16,16,3.2,-62,e.fenceDark),this.box(1.4,.1,.1,16,6.2,-62,e.fence),this.addCol(15.85,16.15,-62.15,-61.85,6.4);let a=(f,p,x,g)=>{g.position.set(p,0,x),g.traverse(m=>{m.isMesh&&(m.castShadow=!0,m.receiveShadow=!0)}),this.root.add(g),this.missionMeshes.set(f,g)},h=()=>{let f=new De;f.add(new ge(new It(.16,.18,.42,8),e.paint(11680302))),f.children[0].position.y=.22;let p=new ge(new It(.07,.07,.12,6),e.fenceDark);return p.position.y=.46,f.add(p),f};for(let f of t("fuel").items){let p=h();p.userData.hdKind="jerry",a(f.id,f.x,f.z,p)}let d=new De;d.add(new ge(new ct(.28,.16,.2),e.chrome)),d.children[0].position.y=.2;let u=new ge(new It(.05,.08,.22,6),e.paint(13803834));u.position.set(0,.28,0),d.add(u),a("carb",t("carb").items[0].x,t("carb").items[0].z,d);for(let f of t("parts").items){let p=new De,x=new ge(new _i(.16,.05,6,10),e.chrome);x.rotation.x=Math.PI/2,x.position.y=.12,p.add(x),a(f.id,f.x,f.z,p)}for(let f of t("bus").items){let p=new De,x=new ge(new ct(.08,.55,.7),e.wood);x.position.y=1.35,p.add(x),a(f.id,f.x,f.z,p)}for(let[f,p]of this.missionMeshes)p.visible=f.startsWith("f");this._dress={fuel:n,carb:s,radio:r,parts:o}}resetDoors(){for(let e of this.doors)e.open=!1,e.t=0,e.mesh.position.y=0,e.col.off=!1}shack(e,t,n,s){let{M:r}=this;this.box(n,3,s,e,1.5,t,r.fence),this.box(n+.5,.2,s+.5,e,3.1,t,r.fenceDark),this.addCol(e-n/2,e+n/2,t-s/2,t+s/2,3.2),this.box(1.4,2.1,.1,e-1.2,1.05,t+s/2+.05,r.wood,{cast:!1});let o=new ge(new an(1.4,.9),new st({color:new me(2.6,1.7,.7),toneMapped:!1}));o.position.set(e+1.5,1.8,t+s/2+.03),this.staticGroup.add(o)}nadeBuy(e,t,n){let s=new De;s.position.set(e,1.7,t),s.rotation.y=n;let r=new ge(new Jt(.22,10,8),new Ge({color:9048088,roughness:.4}));r.position.set(0,.35,.2);let o=new ge(new It(.06,.06,.1,6),new Ge({color:16722490,emissive:4849672}));o.position.set(0,.58,.2);let l=new ge(new an(2.4,1.2),new st({map:Ru([{t:"BLOOD BAIT",s:48,y:88,w:800,c:"#ff5a6e"},{t:"$250  \xB7  "+(document.body.classList.contains("touch")?IE()?"\u{1F4A3} TO THROW":"TAP BAIT TO THROW":"G TO THROW"),s:32,y:168,c:"#ffd36b"}],"#ff5a6e"),toneMapped:!1}));l.position.set(0,-.35,.04);let c=new ge(new ct(2.6,2.2,.08),this.M.fenceDark);c.position.set(0,.05,0);let a=new ge(l.geometry,l.material);a.position.set(0,-.35,-.04),a.rotation.y=Math.PI;let h=r.clone();h.position.z=-.2;let d=o.clone();d.position.z=-.2,s.add(c,l,r,o,a,h,d),this.root.add(s);let u=Math.sin(n),f=Math.cos(n);this.buys.push({id:"nade",price:250,pos:{x:e+u*.9,z:t+f*.9},back:{x:e-u*.25,z:t-f*.25},name:"Blood Bait"})}wallBuy(e,t,n,s){if(e==="nade"){this.nadeBuy(t,n,s);return}let r=jt[e],o=new De;o.position.set(t,1.7,n),o.rotation.y=s;let l=new ge(new an(2.4,1.2),new st({map:Ru([{t:r.name.toUpperCase(),s:44,y:88,w:800},{t:"$"+r.price+"  \xB7  AMMO $"+Math.floor(r.price/2),s:36,y:168,c:"#ffd36b"}]),toneMapped:!1,color:new me(.9,.9,.9)}));l.position.set(0,-.35,.04);let c=Dl(e,!1);c.position.set(0,.35,.18),c.rotation.y=Math.PI/2,c.scale.setScalar(1.7),c.userData.base=null;let a=new ge(new ct(2.6,2.2,.08),this.M.fenceDark);a.position.set(0,.05,0),o.add(a,l,c),o.traverse(u=>{u.isMesh&&(u.castShadow=!1)}),this.root.add(o);let h=Math.sin(s),d=Math.cos(s);this.buys.push({id:e,price:r.price,pos:{x:t+h*.9,z:n+d*.9},name:r.name})}buildCrate(e,t){let{M:n}=this,s=new De;s.position.set(e,0,t),s.rotation.y=.5;let r=n.paint(2078874),o=new ge(new ct(1.3,.7,.8),r);o.position.y=.35,s.add(o);let l=new De;l.position.set(0,.7,-.4);let c=new ge(new ct(1.3,.2,.8),r);c.position.set(0,.1,.4),l.add(c),s.add(l);for(let f of[-.45,.45]){let p=new ge(new ct(.1,.92,.84),n.fenceDark);p.position.set(f,.46,0),s.add(p)}let a=new ge(new ct(.4,.06,.06),n.chrome);a.position.set(0,.8,.43),s.add(a);let h=new ge(new an(.8,.4),new st({map:Ru([{t:"LUCKY",s:70,y:70,w:900,c:"#18ffb0"},{t:"TOOLBOX",s:62,y:150,w:900,c:"#fff"},{t:"950",s:52,y:215,c:"#ffd36b"}],"#18ffb0",384,256),toneMapped:!1,color:new me(.9,.9,.9)}));h.position.set(0,.38,.41),s.add(h),s.traverse(f=>{f.isMesh&&!f.material.isMeshBasicMaterial&&(f.castShadow=!0,f.receiveShadow=!0)});let d=new ge(new It(.5,.65,9,16,1,!0),new bt({transparent:!0,depthWrite:!1,blending:ln,side:Ot,uniforms:{c:{value:new me(.1,1,.7)},k:{value:.35}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(1.-vy,2.2)*pow(f,2.5)*k); }"}));d.position.set(0,4.5,0),d.userData.noAO=!0,s.add(d),this.root.add(s),this.addCol(e-.8,e+.8,t-.8,t+.8,1);let u=new De;u.position.set(0,1.5,.1),s.add(u),this.crate={group:s,lid:l,hold:u,beam:d,pos:{x:e,z:t},price:950,state:"idle",t:0,weapon:null,shown:null,model:null,x:e,z:t}}buildSky(){let e=new bt({side:Sn,depthWrite:!1,fog:!1,uniforms:{moonDir:{value:new U(-.55,.6,.58).normalize()}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vP; uniform vec3 moonDir;
        float h(vec3 p){ return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ vec3 d=normalize(vP); float y=clamp(d.y,-.2,1.);
          vec3 hor=vec3(.20,.12,.16), mid=vec3(.025,.045,.10), top=vec3(.004,.008,.03);
          vec3 c=mix(hor,mid,smoothstep(0.,.25,y)); c=mix(c,top,smoothstep(.2,.9,y)); c+=vec3(.5,.18,.1)*pow(max(0.,1.-abs(y)*4.),3.)*.35;
          vec3 g=floor(d*220.); float s=step(.9975,h(g))*smoothstep(.05,.3,y); c+=vec3(.9,.95,1.)*s*(.4+.4*h(g+3.))*0.8;
          float md=dot(d,moonDir); c+=vec3(.75,.85,1.)*smoothstep(.9992,.9996,md)*2.5; c+=vec3(.25,.35,.6)*pow(max(0.,md),60.)*.5+vec3(.1,.15,.3)*pow(max(0.,md),8.)*.25;
          gl_FragColor=vec4(c,1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.sky=new ge(new Jt(500,32,16),e),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.sky.userData.noAO=!0,this.scene.add(this.sky),this.moonDir=e.uniforms.moonDir.value}buildGround(){let e=new ge(new an(1200,1200),this.M.sand);e.rotation.x=-Math.PI/2,e.receiveShadow=!0,this.scene.add(e),this.ground=e}scenery(){let{M:e}=this,t=this.staticGroup,n=(c,a)=>c>-26&&c<26&&a>-54&&a<26||c>22&&c<52&&a>0&&a<24||c<-22&&c>-52&&a>-36&&a<0||c>2&&c<26&&a<-50&&a>-78,s=e.sand.clone();s.map=e.sand.map.clone(),s.map.repeat.set(6,3),s.bumpMap=e.sand.bumpMap.clone(),s.bumpMap.repeat.set(6,3),s.color=new me(12034436),s.bumpScale=1.5,e.dune=s;let r,o=()=>r||(r=(()=>{let c=new Jt(1,40,14,0,cn,0,Math.PI/2),a=c.attributes.position;for(let h=0;h<a.count;h++){let d=a.getX(h),u=a.getY(h),f=a.getZ(h),p=Math.atan2(f,d),x=u*(.75+.25*Math.sin(p*3+1)+.12*Math.sin(p*7));a.setXYZ(h,d*(1+.08*Math.sin(p*5)),Math.pow(Math.max(x,0),1.6),f)}return c.computeVertexNormals(),c})());for(let c=0;c<26;c++){let a=ee(cn),h=ee(60,190),d=Math.cos(a)*h,u=-14+Math.sin(a)*h,f=Math.min(ee(14,38),(h-48)/2.1);if(f<6)continue;let p=new ge(o(),s);p.scale.set(f*ee(1.2,2),f*ee(.12,.28),f*ee(1,1.6)),p.position.set(d,0,u),p.rotation.y=ee(3),p.receiveShadow=!0,t.add(p)}let l=e.flat(2762292,1,0);for(let c=0;c<12;c++){let a=c/12*cn+ee(-.2,.2),h=ee(230,330),d=ee(30,70),u=ee(25,60),f=new ge(new It(d*.55,d*.8,u,6),l);f.position.set(Math.cos(a)*h,u/2-2,-14+Math.sin(a)*h),f.rotation.y=ee(3),t.add(f)}for(let c=0;c<38;c++){let a,h,d=0;do{let f=ee(cn),p=ee(34,90);a=Math.cos(f)*p,h=-14+Math.sin(f)*p*.9}while(n(a,h)&&++d<20);let u=Kg(e);u.position.set(a,0,h),u.rotation.y=ee(3),u.traverse(f=>{f.isMesh&&(f.castShadow=!0)}),t.add(u)}for(let c=0;c<40;c++){let a,h,d=0;do{let f=ee(cn),p=ee(30,110);a=Math.cos(f)*p,h=-14+Math.sin(f)*p*.9}while(n(a,h)&&++d<20);let u=$g(e,ee(.4,1.8));u.position.set(a,0,h),u.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0)}),t.add(u)}for(let c=0;c<9;c++){let a=ee(cn),h=ee(34,70),d=Math.cos(a)*h,u=-14+Math.sin(a)*h*.9;if(n(d,u))continue;let f=Math.random()<.35?jg(e,$f(),15129792,{tilt:ee(-.08,.08)}):Zg(e,$f(),{tilt:ee(-.1,.1),missing:Math.random()<.5});f.position.set(d,0,u),f.rotation.y=ee(3),f.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.receiveShadow=!0)}),t.add(f)}}buildLights(){let e=this.scene;this.hemi=new Br(7309e3,3812386,.85),e.add(this.hemi),this.moon=new Os(10335487,1.7),this.moon.castShadow=!0,this.moon.position.set(0,0,0),e.add(this.moon,this.moon.target);let t=this.moon.shadow;t.camera.left=t.camera.bottom=-34,t.camera.right=t.camera.top=34,t.camera.near=1,t.camera.far=140,t.bias=-4e-4,t.normalBias=.04,t.mapSize.set(2048,2048),this.lampPool=[];for(let s=0;s<7;s++){let r=new ss(16756838,95,30,1.7);e.add(r),this.lampPool.push(r)}this.halos=[],this.cones=[];let n=s=>new bt({transparent:!0,depthWrite:!1,blending:ln,side:Ot,uniforms:{c:{value:s},k:{value:.22}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(vy,1.5)*pow(f,1.6)*k); }"});for(let s of this.lamps){let r=s.teal?new me(.2,.9,.7):new me(1,.62,.28),o=new Jn(new Gn({map:this.T.glow,color:s.teal?new me(.5,3,2.4):new me(3,1.8,.7),blending:ln,depthWrite:!1,transparent:!0,fog:!1}));o.scale.setScalar(3.4),o.position.copy(s.pos),o.userData.noAO=!0,this.scene.add(o),this.halos.push(o);let l=new ge(new Is(4.2,5,24,1,!0),n(r));l.position.copy(s.pos).add(new U(0,-2.5,0)),l.userData.noAO=!0,this.scene.add(l),this.cones.push(l),s.light=r}}setTier(e){this.tier=e,this.dress(e);let t=[3,5,7][e];this.lampPool.forEach((s,r)=>s.visible=r<t),this.cones.forEach(s=>s.visible=e>0),this.moon.castShadow=e>0;let n=e===2?2048:1024;this.moon.shadow.mapSize.x!==n&&(this.moon.shadow.mapSize.set(n,n),this.moon.shadow.map?.dispose(),this.moon.shadow.map=null)}batch(){let e=this.staticGroup;e.updateMatrixWorld(!0);let t=new Map,n=[];e.traverse(s=>{if(!s.isMesh)return;if(s.userData.bulb||s.userData.noBatch){n.push(s);return}let r=!1;for(let a=s;a;a=a.parent)if(a.userData.hd){r=!0;break}let o=s.material.uuid+(s.castShadow?"c":"n")+(s.receiveShadow?"r":"n")+(r?"h":""),l=t.get(o);l||(l={mat:s.material,cast:s.castShadow,rec:s.receiveShadow,geos:[],hp:r},t.set(o,l));let c=s.geometry.clone();c.applyMatrix4(s.matrixWorld);for(let a of Object.keys(c.attributes))["position","normal","uv"].includes(a)||c.deleteAttribute(a);l.geos.push(c)});for(let s of t.values()){let r=yu(s.geos,!1);if(!r){console.warn("merge failed");continue}let o=new ge(r,s.mat);o.castShadow=s.cast,o.receiveShadow=s.rec,o.frustumCulled=!1,this.root.add(o),s.hp&&(this.propLo||(this.propLo=[])).push(o),s.geos.forEach(l=>l.dispose())}for(let s of n){if(s.userData.noBatch){let o=s.clone();o.matrixAutoUpdate=!1,o.matrix.copy(s.matrixWorld),o.matrixWorldNeedsUpdate=!0,this.root.add(o);continue}let r=new ge(s.geometry,s.material);r.applyMatrix4(s.matrixWorld),r.matrixAutoUpdate=!0,r.position.setFromMatrixPosition(s.matrixWorld),r.rotation.set(0,0,0),r.scale.setScalar(1),this.root.add(r)}this.staticGroup=null}resolve(e,t,n=!1){let s=!1;for(let r of this.colliders){if(r.bulletOnly||r.off)continue;let o=Qt(e.x,r.x0,r.x1),l=Qt(e.z,r.z0,r.z1),c=e.x-o,a=e.z-l,h=c*c+a*a;if(!(h>=t*t))if(s=!0,h>1e-8){let d=Math.sqrt(h),u=(t-d)/d;e.x+=c*u,e.z+=a*u}else{let d=e.x-r.x0,u=r.x1-e.x,f=e.z-r.z0,p=r.z1-e.z,x=Math.min(d,u,f,p);x===d?e.x=r.x0-t:x===u?e.x=r.x1+t:x===f?e.z=r.z0-t:e.z=r.z1+t}}return s}ray(e,t,n){let s=n,r=null,o=null;if(t.y<-1e-5){let l=-e.y/t.y;l>0&&l<s&&(s=l,r={x:0,y:1,z:0},o="ground")}for(let l of this.colliders){if(l.noBullet||l.off)continue;let c=0,a=s,h=-1,d=0,u=(f,p,x,g,m)=>{if(Math.abs(p)<1e-9)return f>=x&&f<=g;let v=(x-f)/p,S=(g-f)/p,y=-1;if(v>S){let w=v;v=S,S=w,y=1}return v>c&&(c=v,h=m,d=y),S<a&&(a=S),c<=a};u(e.x,t.x,l.x0,l.x1,0)&&u(e.y,t.y,l.y0,l.y1,1)&&u(e.z,t.z,l.z0,l.z1,2)&&c>0&&c<s&&(s=c,r={x:h===0?d:0,y:h===1?d:0,z:h===2?d:0},o="wall")}return r?{t:s,n:r,kind:o}:null}update(e,t,n){for(let c=this.fall.length-1;c>=0;c--){let a=this.fall[c],h=a.userData.fall;if(!h){this.fall.splice(c,1);continue}h.t+=e,h.vy-=9.8*e,a.position.x+=h.vx*e,a.position.y+=h.vy*e,a.position.z+=h.vz*e,a.rotation.x+=h.rx*e,a.rotation.z+=h.rz*e,a.position.y<.08&&(a.position.y=.08,h.vy=0,h.vx*=.5,h.vz*=.5),h.t>1.4&&(a.visible=!1,this.fall.splice(c,1))}for(let c of this.doors)c.open&&c.t<1&&(c.t=Math.min(1,c.t+e/2.4),c.mesh.position.y=c.t*3.6,c.t>.5&&(c.col.off=!0));let s=n.x,r=n.z,o=this.lamps.map((c,a)=>({i:a,d:(c.pos.x-s)**2+(c.pos.z-r)**2})).sort((c,a)=>c.d-a.d);this.lampPool.forEach((c,a)=>{let h=this.lamps[o[a].i];c.position.copy(h.pos),c.color.copy(h.teal?new me(.35,1,.8):new me(1,.7,.4));let d=.85+.15*Math.sin(t*9+h.ph)*Math.sin(t*3.7+h.ph*2)+(Math.sin(t*31+h.ph)>.97?-.5:0);c.intensity=(this.lampBase||95)*Math.max(.2,d)}),this.halos.forEach((c,a)=>{let h=Math.hypot(this.lamps[a].pos.x-s,this.lamps[a].pos.z-r);c.visible=h<70});let l=this.crate;l.beam.material.uniforms.k.value=.22+.1*Math.sin(t*2);for(let c of this.windows){if(!c.lamp)continue;let a=6-c.count,h=a<=0?.55+.08*Math.sin(t*2.2+c.c.x):.3+.7*Math.abs(Math.sin(t*(3.2+a)));c.lamp.material.color.setRGB(1.85*h,.22*h,.07*h)}l.model&&(l.model.rotation.y+=e*2,l.model.position.y=Math.sin(t*3)*.04),this.moon.position.set(s+this.moonDir.x*60,this.moonDir.y*60,r+this.moonDir.z*60),this.moon.target.position.set(s,0,r),this.moon.target.updateMatrixWorld(),this.sky.position.set(s,0,r)}};var An=i=>document.getElementById(i),Kr={can:'<svg viewBox="0 0 24 24"><path d="M6 6.5L9 3h8.5a1.5 1.5 0 0 1 1.5 1.5v16a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20.5V8z" fill="currentColor"/><rect x="11" y="4.6" width="5.5" height="2.4" rx="1" fill="#2a1606"/><path d="M8 11.5l8 7.5M16 11.5l-8 7.5" stroke="#2a1606" stroke-width="2" stroke-linecap="round"/></svg>',bolt:'<svg viewBox="0 0 24 24"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" fill="currentColor"/></svg>',gear:'<svg viewBox="0 0 24 24"><path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6zm8.6 5.3l2-1.5-2-3.5-2.4.8a7.6 7.6 0 0 0-1.9-1.1L15.8 5.7h-4l-.5 2.5a7.6 7.6 0 0 0-1.9 1.1L7 8.5 5 12l2 1.5a7 7 0 0 0 0 2.2L5 17.2l2 3.5 2.4-.8c.6.5 1.2.8 1.9 1.1l.5 2.5h4l.5-2.5c.7-.3 1.3-.6 1.9-1.1l2.4.8 2-3.5-2-1.5a7 7 0 0 0 0-2.2z" fill="currentColor" transform="translate(0 -2.2) scale(1 1)"/></svg>',wrench:'<svg viewBox="0 0 24 24"><path d="M21 6.5a5 5 0 0 1-6.6 4.7L6.3 19.3a1.9 1.9 0 0 1-2.7-2.7l8.1-8.1A5 5 0 0 1 17.5 3l-3 3 .7 2.8 2.8.7z" fill="currentColor"/></svg>',hammer:'<svg viewBox="0 0 24 24"><path d="M3 9l6-6 3 3-1.5 1.5L21 18l-3 3L7.5 10.5 6 12z" fill="currentColor"/></svg>',radio:'<svg viewBox="0 0 24 24"><path d="M12 10.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zM11 14.5h2l2.5 7.5h-2l-.6-2h-1.8l-.6 2h-2z" fill="currentColor"/><path d="M7.8 8.2a6 6 0 0 0 0 8.4M16.2 8.2a6 6 0 0 1 0 8.4M5 5.5a10 10 0 0 0 0 14M19 5.5a10 10 0 0 1 0 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',skull:'<svg viewBox="0 0 24 24"><path d="M12 2.5c-4.7 0-8 3.2-8 7.6 0 2.5 1.1 4.3 2.8 5.4V19c0 .8.6 1.4 1.4 1.4h1v-2h1.6v2h2.4v-2h1.6v2h1c.8 0 1.4-.6 1.4-1.4v-3.5c1.7-1.1 2.8-2.9 2.8-5.4 0-4.4-3.3-7.6-8-7.6zm-3.2 6.7a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm6.4 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fill="currentColor"/></svg>',gate:'<svg viewBox="0 0 24 24"><path d="M3 21V5l4-2v18M21 21V5l-4-2v18M7 8h10M7 13h10M7 18h10" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>',ammo:'<svg viewBox="0 0 24 24"><path d="M5 22V10c0-3 1.5-6 2.5-7 1 1 2.5 4 2.5 7v12zM14 22V10c0-3 1.5-6 2.5-7 1 1 2.5 4 2.5 7v12z" fill="currentColor"/></svg>',x2:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M6.5 8.5l4.5 7M11 8.5l-4.5 7M13.5 10.2c.4-1.2 1.4-1.8 2.6-1.8 1.4 0 2.4.9 2.4 2.1 0 1.9-2.7 2.9-5 5h5.2" fill="none" stroke="#2a1606" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',star:'<svg viewBox="0 0 24 24"><path d="M12 2l3 6.5 7 .8-5.2 4.8 1.5 7L12 17.6 5.7 21l1.5-7L2 9.3l7-.8z" fill="currentColor"/></svg>',lock:'<svg viewBox="0 0 24 24"><path d="M7 10V7.5a5 5 0 0 1 10 0V10h1.5v11h-13V10zm2.5 0h5V7.5a2.5 2.5 0 0 0-5 0z" fill="currentColor"/></svg>'},Pu=["fuel","carb","bus","parts","radio","clear"],LE={fuel:1,carb:2,bus:3,parts:4,radio:5,clear:5},DE={AB:"the back gate",AC:"the Lot C gate",AD:"the Lot D gate",SD:"the side gate",BE:"the Lot E gate"},NE={AB:"BACK GATE",AC:"LOT C GATE",AD:"LOT D GATE",SD:"SIDE GATE",BE:"LOT E GATE"},tx={double:{t:"2\xD7 POINTS DROP",i:"x2",tl:!0},ammo:{t:"FULL MAGS DROP",i:"ammo",tl:!1}},Ul={fuel:{icon:"can",item:"fuel can",items:"fuel cans",brief:"Find <em>3 fuel cans</em> and carry them to the <em>generator</em>",find:"Find a <em>fuel can</em>",bring:"Bring the can to the <em>generator</em>",itemLabel:"FUEL CAN",itemIcon:"can",padLabel:"GENERATOR",padIcon:"bolt"},carb:{icon:"gear",item:"carburetor",items:"carburetor",brief:"Grab the <em>carburetor</em> and install it on the <em>back-lot bench</em>",find:"Find the <em>carburetor</em>",bring:"Install it on the <em>back-lot bench</em>",itemLabel:"CARBURETOR",itemIcon:"gear",padLabel:"BACK-LOT BENCH",padIcon:"wrench"},bus:{icon:"hammer",brief:"Board up the <em>bus windows</em>: hold <em>E</em> at each one",find:"Hold <em>E</em> at each <em>bus window</em>",itemLabel:"BUS WINDOW",itemIcon:"hammer"},parts:{icon:"gear",item:"scrap part",items:"scrap parts",brief:"Collect <em>3 scrap parts</em> in Lot C and bring them to the <em>Lot C bench</em>",find:"Find a <em>scrap part</em> in Lot C",bring:"Bring it to the <em>Lot C bench</em>",itemLabel:"SCRAP PART",itemIcon:"gear",padLabel:"LOT C BENCH",padIcon:"wrench"},radio:{icon:"radio",brief:"Stand in the <em>radio ring</em> during a wave for <em>20 s</em>. Leaving drains the timer",padLabel:"RADIO",padIcon:"radio"},clear:{icon:"skull",brief:"Get <em>8 kills in Lot D</em>, including zombies at its windows",find:"Get <em>kills in Lot D</em>",padLabel:"LOT D",padIcon:"skull"}},Cu=i=>Math.round(i).toLocaleString("en-US");function ip(i,e,t){let n=Pu.indexOf(i),s=Pu[n+1];if(!s)return null;let r=(Vt.jobs.find(a=>a.id===i)||{}).area,o=(Vt.jobs.find(a=>a.id===s)||{}).area,c=t==="round"?r&&r===o?e+1:e:e+1;return{id:s,title:(Vt.jobs.find(a=>a.id===s)||{}).title||s,round:Math.max(LE[s],c)}}function UE(i,e){let t=Qo(e);if(!i||t.has(i))return null;let n={B:["AB"],C:["AC"],D:["AD","SD"],E:["BE"]}[i]||[];for(let s of n){let r=e.find(o=>o.id===s);if(r&&!r.open&&r.areas.some(o=>t.has(o)))return r}return t.has("B")?null:e.find(s=>s.id==="AB"&&!s.open)||null}function nx(i){let{world:e,isTouch:t}=i,n=An("mission"),s=An("msIc"),r=An("msEb"),o=An("msGoal"),l=An("msPips"),c=An("msCount"),a=An("msRw"),h=An("wp"),d=An("wpLab"),u=An("wpDist"),f=An("wpIc"),p=An("objArrow"),x=An("oaLab"),g=An("oaDist"),m=An("oaIc"),v=An("oaChev"),S=An("mBan"),y=An("fx-edge"),w={},T=($,he,_e,ie)=>{w[he]!==_e&&(w[he]=_e,ie?$.innerHTML=_e:$.textContent=_e)},I=[],_="",M=0,b=new st({color:new me(2.2,1.25,.35),transparent:!0,opacity:.85,depthWrite:!1,side:Ot,fog:!1,toneMapped:!1}),D=new ge(new ns(.62,.74,48),b);D.rotation.x=-Math.PI/2,D.position.y=.05,D.userData.noAO=!0,D.renderOrder=3;let k=new ge(new ns(1,1.06,48),b.clone());k.rotation.x=-Math.PI/2,k.position.y=.05,k.userData.noAO=!0,k.material.opacity=.35;let L=new De;L.add(D,k),L.visible=!1,e.scene.add(L);let R=Vt.radio,N=new st({color:new me(.15,2.2,1.4),transparent:!0,opacity:.55,depthWrite:!1,side:Ot,fog:!1,toneMapped:!1}),P=new ge(new ns(R-.12,R,96),N);P.rotation.x=-Math.PI/2;let O=new ge(new ns(R-.34,R-.16,96,1,0,.001),new st({color:new me(2.4,1.4,.3),transparent:!0,opacity:.9,depthWrite:!1,side:Ot,fog:!1,toneMapped:!1}));O.rotation.x=-Math.PI/2,O.rotation.z=Math.PI/2;let G=new ge(new li(R-.12,64),new st({color:new me(.05,.6,.4),transparent:!0,opacity:.12,depthWrite:!1,fog:!1,toneMapped:!1}));G.rotation.x=-Math.PI/2;let F=new De;F.add(G,P,O),F.position.y=.04,F.visible=!1,F.traverse($=>{$.userData.noAO=!0,$.renderOrder=3}),e.scene.add(F);let z=-1,Z=new Map;for(let[$,he]of e.missionMeshes){let _e=new Jn(new Gn({map:e.T&&e.T.glow,color:new me(2.4,1.4,.4),blending:ln,depthWrite:!1,transparent:!0,fog:!1}));_e.scale.setScalar(1.3),_e.position.y=$.startsWith("b")?1.35:.35,_e.userData.noAO=!0;let ie=new ge(new ns(.42,.5,32),b);ie.rotation.x=-Math.PI/2,ie.position.y=.04,ie.userData.noAO=!0,$.startsWith("b")&&(ie.visible=!1),he.add(_e,ie),Z.set($,{h:_e,r:ie})}let se=new U;function ce($,he,_e,ie){return se.set($,he,_e).project(ie),{behind:se.z>1,x:(se.x*.5+.5)*innerWidth,y:(-se.y*.5+.5)*innerHeight,nx:se.x,ny:se.y}}function Ce($){l.textContent="",I=[];for(let he=0;he<$;he++){let _e=document.createElement("i");_e.className="pip";let ie=document.createElement("b");_e.appendChild(ie),l.appendChild(_e),I.push(_e)}l.classList.toggle("many",$>6)}function X(){n.classList.add("hidden"),h.classList.add("hidden"),p.classList.add("hidden"),L.visible=!1,F.visible=!1,y&&y.classList.remove("on");for(let $ in w)delete w[$]}function Te($,he){if(!$)return X(),null;let _e=Ul[$.id]||{},ie=!!($.carry&&$.carry[he.pid]),ue=$.carry?Object.keys($.carry).length:0;n.classList.remove("hidden");let ve=Pu.indexOf($.id)+1;T(s,"ic",Kr[_e.icon]||Kr.star,!0),T(r,"eb",`Mission ${ve}/6 \xB7 ${$.title}`);let de=null,Se="",We="bolt",ze="",je="",et=()=>{let we=null,ye=1e9;for(let Me of $.items)if(!Me.done&&!Me.carried){let Ue=Math.hypot(he.P.x-Me.x,he.P.z-Me.z);Ue<ye&&(ye=Ue,we=Me)}return we};if($.kind==="carry")ie?(de=$.pad,Se=_e.padLabel,We=_e.padIcon,ze=_e.bring):(de=et()||$.pad,Se=et()?_e.itemLabel:_e.padLabel,We=et()?_e.itemIcon:_e.padIcon,ze=et()?_e.find:"A teammate has it: <em>cover them</em>");else if($.kind==="board")de=et()||$.pad,Se=_e.itemLabel,We=_e.itemIcon,ze=_e.find;else if($.kind==="radio"){de=$.pad,Se=_e.padLabel,We=_e.padIcon;let we=Math.hypot(he.P.x-$.pad.x,he.P.z-$.pad.z)<=R;ze=he.phase!=="round"?we?"Wait in the <em>ring</em> for the next wave":"Go to the <em>radio ring</em>":we?"Hold the <em>radio ring</em>!":"Get back in the <em>ring</em>! Timer draining",je=he.phase!=="round"?"Counts <b>during waves</b>":we?"<b>Holding\u2026</b>":"<b>Draining</b>"}else $.kind==="clear"&&(de=$.pad,Se=_e.padLabel,We=_e.padIcon,ze=_e.find);let H=UE(Wi(de.x,de.z,"junkyard"),he.doors);if(H){let we=H.stand?Object.values(H.stand).reduce((ye,Me)=>Math.hypot(he.P.x-Me.x,he.P.z-Me.z)<Math.hypot(he.P.x-ye.x,he.P.z-ye.z)?Me:ye):H;de={x:we.x,z:we.z},Se=NE[H.id]||"GATE",We="lock",ze=`Open <em>${DE[H.id]||"the gate"}</em> (${Cu(he.price(H))}) to get there`}T(o,"goal",ze,!0);let dt=$.kind==="radio",rt=dt?10:$.need,B=$.id+rt;_!==B&&(_=B,Ce(rt));let E=Math.min($.need,$.have);for(let we=0;we<rt;we++){let ye=I[we],Me="",Ue=0;if(dt){let Ye=$.need/rt;Ue=Math.max(0,Math.min(1,(E-we*Ye)/Ye)),Me=Ue>=1?"on":Ue>0?"part":""}else Me=we<Math.floor(E)?"on":we<Math.floor(E)+ue&&$.kind==="carry"?"go":"";ye._st!==Me&&(ye._st=Me,ye.className="pip "+Me),dt&&ye._f!==Ue&&(ye._f=Ue,ye.firstChild.style.width=Math.round(Ue*100)+"%")}T(c,"cnt",$.kind==="radio"?`${Math.floor(E)}/${$.need}s`:`${Math.floor(E)}/${$.need}`);let Y=Math.hypot(he.P.x-de.x,he.P.z-de.z),K=Y<1.5?"HERE":Math.round(Y)+" m",ne=ce(de.x,$.kind==="board"&&!H?2.2:1.3,de.z,he.cam),Ee=t?60:70,Re=!ne.behind&&ne.x>Ee&&ne.x<innerWidth-Ee&&ne.y>Ee&&ne.y<innerHeight-Ee*.6,le="";if(Re){h.classList.remove("hidden"),p.classList.add("hidden"),y&&y.classList.remove("on"),h.style.left=ne.x+"px",h.style.top=ne.y+"px";let we=Math.max(.62,Math.min(1,9/Math.max(9,Y))*1);h.style.setProperty("--k",we.toFixed(3)),T(d,"wl",Se),T(u,"wd",K),T(f,"wi",Kr[We]||Kr.bolt,!0),h.classList.toggle("close",Y<2.5)}else{h.classList.add("hidden"),p.classList.remove("hidden");let we=ne.behind?-ne.nx:ne.nx,ye=ne.behind?-ne.ny:ne.ny;ne.behind&&Math.abs(we)<.2&&(we=we<0?-1:1);let Me=Math.atan2(-ye,we),Ue=innerWidth/2,Ye=innerHeight/2,at=t?92:120,q=innerHeight-150,Ne=t?170:120,pe=innerWidth-(t?250:150),Ie=Math.cos(Me),Oe=Math.sin(Me),xe=1e9;Ie>.001&&(xe=Math.min(xe,(pe-Ue)/Ie)),Ie<-.001&&(xe=Math.min(xe,(Ne-Ue)/Ie)),Oe>.001&&(xe=Math.min(xe,(q-Ye)/Oe)),Oe<-.001&&(xe=Math.min(xe,(at-Ye)/Oe));let nt=Ue+Ie*xe,Ke=Ye+Oe*xe;p.style.left=nt+"px",p.style.top=Ke+"px",v.style.transform=`rotate(${Me}rad)`,p.classList.toggle("left",Ie<0),T(x,"al",Se),T(g,"ad",K),T(m,"ai",Kr[We]||Kr.bolt,!0),le=ne.behind&&Math.abs(ne.nx)<.35?"Turn <b>around \u27F2</b>":Ie<0?"<b>\u25C0 Turn</b> left":"Turn <b>right \u25B6</b>",y&&(y.classList.add("on"),y.classList.toggle("l",Ie<0))}let fe=$.gate&&(Vt.gates.find(we=>we.id===$.gate)||{}).name||"";T(a,"rw",le||je||`Reward <b>+${Cu($.pts)}${fe?" \xB7 "+fe:""}</b>`,!0),L.visible=!($.kind==="radio"&&!H),L.position.set(de.x,0,de.z);let Le=1+.12*Math.sin(he.time*4);if(D.scale.setScalar(Le),k.scale.setScalar(1+he.time*.8%1*.8),k.material.opacity=.45*(1-he.time*.8%1),F.visible=$.kind==="radio",F.visible){F.position.set($.pad.x,.04,$.pad.z);let we=Math.min(1,E/$.need);Math.abs(we-z)>.004&&(z=we,O.geometry.dispose(),O.geometry=new ns(R-.34,R-.16,96,1,0,Math.max(.001,we*Math.PI*2)));let ye=Math.hypot(he.P.x-$.pad.x,he.P.z-$.pad.z)<=R;N.color.setRGB(ye?.15:2.4,ye?2.2:.5,ye?1.4:.2),N.opacity=.45+.25*Math.sin(he.time*(ye?3:7))}for(let[we,ye]of Z){let Me=.75+.25*Math.sin(he.time*5+we.length);ye.h.material.opacity=Me,ye.r.scale.setScalar(1+.15*Math.sin(he.time*4))}return de}function V($,he,_e){document.body.dataset.mban=String(performance.now()+_e-600),S.className="mBan "+$,S.innerHTML=he,S.offsetWidth,S.classList.add("on"),clearTimeout(M),M=setTimeout(()=>S.classList.remove("on"),_e)}let te=($,he,_e)=>`<span class="chip${_e?" tl":""}">${Kr[$]||""}${he}</span>`;function be($){let he=Vt.jobs.find(de=>de.id===$);if(!he)return;let _e=Ul[$]||{},ie=Pu.indexOf($)+1,ue=he.gate?(Vt.gates.find(de=>de.id===he.gate)||{}).name:"",ve=tx[he.power];V("start",`<i class="stripe t"></i><i class="stripe b"></i><div class="e">NEW MISSION \xB7 ${ie} OF 6</div><div class="ttl">${he.title.toUpperCase()}</div><div class="g">${_e.brief||""}</div><div class="chips">${te("star","+"+Cu(he.pts)+" PTS")}${ue?te("gate","OPENS "+ue.toUpperCase()):""}${ve?te(ve.i,ve.t,ve.tl):""}</div>`,5200)}function Pe($,he={}){let _e=Vt.jobs.find(Se=>Se.id===$);if(!_e)return;let ie=_e.gate?(Vt.gates.find(Se=>Se.id===_e.gate)||{}).name:"",ue=he.next,ve=tx[_e.power];V("done",`<i class="stripe t"></i><i class="stripe b"></i><div class="stamp">MISSION COMPLETE</div><div class="row1"><span class="big">${_e.title.toUpperCase()}</span><span class="pts">+${Cu(he.pts||_e.pts)}</span></div><div class="chips">${ie?te("gate",ie.toUpperCase()+" GATE OPEN",!0):""}${te("ammo","AMMO REFILLED")}${ve?te(ve.i,ve.t.replace("DROP","DROPPED"),ve.tl):""}</div><div class="next">${ue?`NEXT MISSION \xB7 ${ue.title.toUpperCase()} \xB7 UNLOCKS AFTER ROUND ${ue.round}`:"ALL 6 MISSIONS DONE \xB7 THE YARD IS YOURS"}</div>`,4600);let de=An("fx-mflash");de&&(de.classList.remove("on"),de.offsetWidth,de.classList.add("on"))}return{frame:Te,start:be,complete:Pe,hide:X}}var sp=[{id:"fuel",wave:1},{id:"carb",wave:2},{id:"bus",wave:3},{id:"parts",wave:4},{id:"radio",wave:5},{id:"clear",wave:5}];function OE(i){let e=Vt.jobs[i];return e?{index:i,id:e.id,title:e.title,kind:e.kind,gate:e.gate||"",area:e.area,need:e.need,pts:e.pts,power:e.power||"",pad:{x:e.pad.x,z:e.pad.z},have:0,items:(e.items||[]).map(t=>({id:t.id,x:t.x,z:t.z,done:!1,carried:null})),carry:{}}:null}function ix(i){let{world:e,P:t,G:n,sfx:s,banner:r,toast:o,popText:l,spawnPower:c}=i,a={mode:"sp",job:null,pid:"you",unlocked:[],done:new Set,gap:!1,gapWave:0,lastArea:"",waves:0},h=nx({world:e,isTouch:document.body.classList.contains("touch")}),d=()=>i.phase?i.phase():n.phase,u=L=>Ul[L.id]&&Ul[L.id].item||"item";function f(){let L=new Set;if(a.job)for(let R of a.job.items)!R.done&&!R.carried&&L.add(R.id);for(let[R,N]of e.missionMeshes){let P=a.job&&a.job.items.find(O=>O.id===R);N.visible=L.has(R),P&&N.visible&&(N.position.x=P.x,N.position.z=P.z)}}function p(L){a.job=OE(L),f(),!a.job&&a.mode==="sp"&&o("All objectives complete")}function x(){if(a.job||a.gap||a.mode!=="sp"||e.mapId!=="junkyard")return!1;let L=sp.find(R=>a.unlocked.includes(R.id)&&!a.done.has(R.id));return L?(p(Vt.jobs.findIndex(R=>R.id===L.id)),!!a.job):!1}function g(L){if(a.mode!=="sp"||e.mapId!=="junkyard")return!1;a.waves=Math.max(a.waves,L|0);for(let R of sp)R.wave<=a.waves&&!a.unlocked.includes(R.id)&&a.unlocked.push(R.id);if(a.gap){let R=sp.find(O=>a.unlocked.includes(O.id)&&!a.done.has(O.id)),N=R&&Vt.jobs.find(O=>O.id===R.id);(!!(N&&N.area===a.lastArea)?a.waves>a.gapWave:a.waves>=a.gapWave)&&(a.gap=!1)}return x()?(h.start(a.job.id),s.announce?.(s.lineFor?.("mission",a.job.id,n.round)),!0):!1}function m(){let L=a.job;if(!L||a.mode!=="sp")return;let R=L.gate&&e.doors.find(P=>P.id===L.gate);R&&!R.open&&(R.open=!0);let N=L.pts*(n.double>0?2:1);t.pts+=N;for(let P of t.slots)P&&i.weapons[P.id]&&(P.mag=i.weapons[P.id].mag,P.reserve=i.weapons[P.id].reserve);L.power&&c(L.power,L.pad.x,L.pad.z),l("+"+N),h.complete(L.id,{pts:N,next:ip(L.id,n.round,n.phase)}),s.cash(),R&&s.door(),s.announce?.(s.lineFor?.("done",L.id,n.round)),a.done.add(L.id),a.lastArea=L.area,a.gap=!0,a.gapWave=n.round,a.job=null,f()}function v(){a.mode="sp",a.pid="you",a.job=null,a.unlocked=[],a.done=new Set,a.gap=!1,a.gapWave=0,a.lastArea="",a.waves=0,f()}function S(L){if(a.mode!=="sp"||!a.job||n.state!=="playing")return;let R=a.job;if(R.kind==="carry"&&!R.carry.you){let N=null,P=Vt.pickup;for(let O of R.items)if(!O.done&&!O.carried){let G=Math.hypot(t.x-O.x,t.z-O.z);G<=P&&(P=G,N=O)}N&&(N.carried="you",R.carry.you=N.id,s.click(0,880,.28),o(`Picked up ${u(R)}`+(R.need>1?` (${R.have+1}/${R.need})`:"")))}else if(R.kind==="radio"&&n.phase==="round"){let N=Math.hypot(t.x-R.pad.x,t.z-R.pad.z)<=Vt.radio;R.have=N?R.have+L:Math.max(0,R.have-L*Vt.decay)}R.have>=R.need&&m(),f()}function y(){let L=a.job;if(!L||a.mode!=="sp")return!1;if(L.kind==="carry"){if(!L.carry.you)return o("Pick it up first"),!1;if(Math.hypot(t.x-L.pad.x,t.z-L.pad.z)>Vt.deliver)return!1;let R=L.items.find(N=>N.id===L.carry.you);return R&&(R.done=!0,R.carried=null),delete L.carry.you,L.have++,s.repair(),L.have>=L.need?m():(f(),o(`Delivered ${u(L)} (${L.have}/${L.need})`)),!0}if(L.kind==="board"){let R=L.items.find(N=>!N.done&&Math.hypot(t.x-N.x,t.z-N.z)<=Vt.board);return R?(R.done=!0,L.have++,s.repair(),L.have>=L.need?m():(f(),o(`Window boarded (${L.have}/${L.need})`)),!0):!1}return!1}function w(L){if(a.mode!=="sp"||!a.job||a.job.kind!=="clear"||!L)return;let R=L.win,N=!!(R&&R.area===a.job.area&&Math.hypot(L.pos.x-R.c.x,L.pos.z-R.c.z)<12);Wi(L.pos.x,L.pos.z,e.mapId)!==a.job.area&&!N||(a.job.have++,a.job.have>=a.job.need&&m())}function T(){if(a.mode!=="sp"||!a.job||!a.job.carry.you)return;let L=a.job.items.find(R=>R.id===a.job.carry.you);L&&!L.done&&(L.x=t.x,L.z=t.z,L.carried=null),delete a.job.carry.you,f()}function I(L,R,N,P){a.mode="net",a.pid=P||a.pid;let O=a.job,G=!!(O&&O.carry&&O.carry[a.pid]);if(!L){a.job=null,f();return}let F=Vt.jobs.find(se=>se.id===L[0]);if(!F){a.job=null,f();return}let z={};for(let se of N||[])z[se[0]]=se[1];let Z=new Set(Object.values(z));a.job={index:Vt.jobs.indexOf(F),id:F.id,title:F.title,kind:F.kind,gate:F.gate||"",area:F.area,need:L[2],pts:F.pts,power:F.power||"",pad:{x:L[3],z:L[4]},have:L[1],carry:z,items:(R||[]).filter(se=>!Z.has(se[0])).map(se=>({id:se[0],x:se[1],z:se[2],done:!1,carried:null}))},O&&O.id===F.id&&!G&&z[a.pid]?o(`Picked up ${u(a.job)}`+(a.job.need>1?` (${a.job.have+1}/${a.job.need})`:"")):O&&O.id===F.id&&a.job.kind!=="radio"&&a.job.have>O.have&&a.job.have<a.job.need&&o(`${a.job.kind==="clear"?"Lot D kills":a.job.kind==="board"?"Window boarded":"Delivered "+u(a.job)} (${a.job.have}/${a.job.need})`),f()}function _(L){if(!L||L.e!=="mission")return;let R=Vt.jobs.find(N=>N.id===L.id);if(L.start){h.start(L.id),s.announce?.(s.lineFor?.("mission",L.id,n.round));return}h.complete(L.id,{pts:L.pts,next:ip(L.id,n.round,d())}),s.announce?.(s.lineFor?.("done",L.id,n.round)),s.cash(),R&&R.gate&&s.door();for(let N of t.slots)N&&i.weapons[N.id]&&(N.mag=i.weapons[N.id].mag,N.reserve=i.weapons[N.id].reserve)}function M(L,R){let N=a.job;if(!N)return null;if(N.kind==="board"){let P=null;for(let O of N.items)if(!O.done&&!O.carried){let G=Math.hypot(L-O.x,R-O.z);G<=Vt.board&&(!P||G<P.d)&&(P={d:G,name:"Board this window"})}return P&&{type:"job",d:P.d,hold:!0,name:P.name}}if(N.kind==="carry"&&N.carry[a.pid]){let P=Math.hypot(L-N.pad.x,R-N.pad.z);if(P<=Vt.deliver)return{type:"job",d:P,hold:!1,name:N.id==="carb"?"Install the carb":"Deliver"}}return null}function b(L){return L?a.job&&a.job.gate===L.id?Math.floor(L.price*Vt.discount):L.price:0}function D(){let L=a.job;if(!L)return null;if(L.carry&&L.carry[a.pid])return L.pad;let R=null,N=1e9;for(let P of L.items)if(!P.done&&!P.carried){let O=Math.hypot((t.x||0)-P.x,(t.z||0)-P.z);O<N&&(N=O,R=P)}return R||L.pad}function k(L){if(!(n.state==="playing"&&a.job&&e.mapId==="junkyard")){h.hide(),e.marker=null;return}e.marker=h.frame(a.job,{pid:a.pid,P:t,phase:d(),doors:e.doors,cam:L,time:n.time,price:b})||D()}return v(),{reset:v,update:S,use:y,onKill:w,drop:T,applyNet:I,onNetEvent:_,onWave:g,focus:M,price:b,frame:k,get job(){return a.job}}}var FE=5,BE=16,rp=4.6,op=14;function sx(i){let{scene:e,world:t,fx:n}=i,s=new Map,r=new Map,o=[],l=0,c=1,a=new Ge({color:9048088,roughness:.45,metalness:.2}),h=new Ge({color:16722490,roughness:.3,emissive:4849672,emissiveIntensity:.6}),d=new Jt(.16,10,8),u=new It(.05,.05,.08,6),f=(()=>{let P=document.createElement("canvas");P.width=P.height=32;let O=P.getContext("2d"),G=O.createRadialGradient(16,16,0,16,16,16);return G.addColorStop(0,"rgba(255,255,255,1)"),G.addColorStop(1,"rgba(255,255,255,0)"),O.fillStyle=G,O.fillRect(0,0,32,32),new Gt(P)})(),p=new Gn({map:f,color:16720452,blending:ln,depthWrite:!1,transparent:!0}),x=[];function g(){let P=new De,O=new ge(d,a),G=new ge(u,h);G.position.y=.16;let F=new Jn(p);return F.position.y=.2,F.scale.setScalar(.9),P.add(O,G,F),P.userData.glow=F,P.visible=!1,e.add(P),P}let m=g();m.visible=!0,m.position.set(0,-60,0),m.traverse(P=>{P.frustumCulled=!1});for(let P=0;P<3;P++)x.push(g());function v(P){let O=r.get(P);return O||(O=x.pop()||g(),O.visible=!0,r.set(P,O),O)}function S(P){let O=r.get(P);O&&(O.visible=!1,r.delete(P),x.push(O))}let y=new li(1,6),w=Array.from({length:14},()=>{let P=new ge(y,new st({color:6948880,transparent:!0,opacity:0,depthWrite:!1}));return P.rotation.x=-Math.PI/2,P.visible=!1,e.add(P),P}),T=0;function I(P,O){let G=i.blood;for(let F=0;F<7;F++){let z=P+(Math.random()-.5)*3.2,Z=O+(Math.random()-.5)*3.2,se=.18+Math.random()*.45;if(G){G(z,Z,se*2.2);continue}let ce=w[T];T=(T+1)%w.length;let Ce=o.indexOf(ce);Ce>=0&&o.splice(Ce,1),ce.scale.setScalar(se),ce.position.set(z,.04,Z),ce.rotation.z=Math.random()*6,ce.visible=!0,ce.material.opacity=.85,o.push({s:ce,t:6+Math.random()*4})}n.dust?.(new U(P,.4,O),{x:0,y:1,z:0},10,[.6,.05,.08])}function _(P,O,G,F,z){let Z=Math.max(-1.1,Math.min(.9,z||0)),se=Math.cos(Z),ce={id:c++,x:P,y:O,z:G,vx:-Math.sin(F)*se*op,vy:Math.sin(Z)*op+2.2,vz:-Math.cos(F)*se*op,fuse:FE,landed:!1};return s.set(ce.id,ce),ce}function M(P){let O=new Set;for(let G of P||[]){let[F,z,Z,se,ce,Ce]=G;O.add(F);let X=s.get(F);s.set(F,{id:F,x:z,y:Z,z:se,landed:!!ce,fuse:Ce,net:!0,rx:X?.rx,ry:X?.ry,rz:X?.rz})}for(let G of[...s.keys()])O.has(G)||(s.delete(G),S(G))}let b=(P,O)=>{let G=P?.ng;if(G){for(let F of G)if(F[0]===O)return F}return null};function D(P){for(let O of s.values()){if(!P){O.rx=O.x,O.ry=O.y,O.rz=O.z;continue}let G=b(P.s0,O.id),F=b(P.s1,O.id);if(G&&F){let z=P.k;O.rx=G[1]+(F[1]-G[1])*z,O.ry=G[2]+(F[2]-G[2])*z,O.rz=G[3]+(F[3]-G[3])*z}else if(F||G){let z=F||G;O.rx=z[1],O.ry=z[2],O.rz=z[3]}else O.rx=O.ry=O.rz=void 0}}function k(P,O){if(s.delete(P.id),S(P.id),I(P.x,P.z),t.bait=null,i.sfx?.boom?.(),!O)return;let G=i.zombies;if(G)for(let z of G.list){if(z.state==="dead"||z.state==="dying")continue;let Z=Math.hypot(z.pos.x-P.x,z.pos.z-P.z);if(Z>rp)continue;let se=200*(1-Z/rp)+50;G.damage(z,se,!1)?.killed&&i.onKill?.(z)}let F=i.P;if(F){let z=Math.hypot(F.x-P.x,F.z-P.z);z<3.2&&i.onSelf?.(55*(1-z/3.2))}}function L(P){l-=P;let O=null;for(let F of[...s.values()])if(F.fuse!=null){if(F.fuse-=P,!F.landed&&F.vx!=null){let z=F.x,Z=F.z;if(F.vy-=18*P,F.x+=F.vx*P,F.y+=F.vy*P,F.z+=F.vz*P,t.ray){let se=(t.segBlock,null)}if(typeof t.resolve=="function"){let se={x:F.x,z:F.z},ce=Math.hypot(F.x-z,F.z-Z);t.resolve(se,.16)&&ce>.01&&(F.x=z,F.z=Z,F.vx*=-.25,F.vz*=-.25)}F.y<=.16&&(F.y=.16,F.landed=!0,F.vx=F.vz=F.vy=0)}F.fuse<=0?k(F,!0):F.landed&&(!O||F.fuse<O.fuse)&&(O=F)}t.bait=O?{x:O.x,z:O.z}:null;let G=[...s.values()].reduce((F,z)=>Math.min(F,z.fuse??9),9);G<5&&l<=0&&s.size&&(i.sfx?.beep?.(G),l=G<1.2?.14:G<2.5?.28:.55);for(let F=o.length-1;F>=0;F--)o[F].t-=P,o[F].s.material.opacity=Math.max(0,o[F].t/8),o[F].t<=0&&(o[F].s.visible=!1,o.splice(F,1))}function R(){for(let P of s.values()){let O=P.net&&P.rx!==void 0;if(P.net&&!O){let Ce=r.get(P.id);Ce&&(Ce.visible=!1);continue}let G=v(P.id);G.visible=!0;let F=O?P.rx:P.x,z=O?P.ry:P.y||.16,Z=O?P.rz:P.z;G.position.set(F,Math.max(.16,z),Z),G.rotation.y+=.02;let se=P.fuse??5,ce=P.landed?(se<1.2?1:.45)*(.5+.5*Math.sin(se*18)):.15;G.userData.glow.scale.setScalar(.25+1.1*ce),G.userData.glow.material.opacity=1}}function N(){for(let P of[...r.keys()])S(P);s.clear(),t.bait=null}return{throwLocal:_,sync:M,interp:D,step:L,frame:R,reset:N,splatter:I,items:s,BLAST:rp,LURE:BE}}var Iu={junkyard:{id:"junkyard",name:"Junkyard",blurb:"The original yard",cap:[16,26],spawn:{x:0,z:12}},motel:{id:"motel",name:"Salt Motel",blurb:"Tight courtyard, close quarters",cap:[12,20],spawn:{x:0,z:0}},drivein:{id:"drivein",name:"Drive-In",blurb:"Wide open lot, big hordes",cap:[18,30],spawn:{x:0,z:18}}},lp=i=>Iu[i]||Iu.junkyard,ap=class i extends Nl{constructor(e,t,n,s){i.prototype._def=s,super(e,t,n)}lamps_(e){for(let[t,n,s,r]of e){let o=Al(this.M,!!s);o.position.set(t,0,n),o.rotation.y=r,o.traverse(c=>{c.isMesh&&(c.castShadow=!c.userData.bulb)}),o.updateMatrixWorld(!0),this.addCol(t-.2,t+.2,n-.2,n+.2,5);let l=o.userData.bulbPos.clone().applyMatrix4(o.matrixWorld);this.lamps.push({pos:l,teal:!!s,ph:ee(100)}),this.staticGroup.add(o)}}floor(e,t,n,s){this.box(e,.03,t,n,0,s,this.M.concrete,{cast:!1})}build(){this.mapId=this._def.id||"motel";let e=this._def.L,t=this.M,n=3.2,s=.4;this.buildSky(),this.buildGround();let r=(u,f,p,x=[],g=t.fence)=>this.wall("x",u,f,p,x,n,s,g),o=(u,f,p,x=[],g=t.fence)=>this.wall("z",u,f,p,x,n,s,g),{w:l,s:c,n:a,wb:h}=e;r(c,-l,l,e.south),o(l,On,c,e.eastA),o(-l,On,c,e.westA),r(On,-l,l,[{c:0,id:"DOOR",door:!0,w:6}]),h!==l&&(r(On,l,h),r(On,-h,-l)),o(h,a,On,e.eastB),o(-h,a,On,e.westB),r(a,-h,h,e.north),this.floor(2*l,c-On,0,(c+On)/2),this.floor(2*h,On-a,0,(On+a)/2),this.buildGate();let d=this.place.bind(this);for(let[u,f,p,x,g,m]of e.props)d(u==="bus"?Ri(t,f,15129792,m||{}):u==="beetle"?yi(t,f,m||{}):u==="tires"?wl(t,f):u==="drum"?cr(t,f):ti(t,f),p,x,g||0);for(let u of e.shacks||[])this.shack(...u);this.lamps_(e.lamps);for(let u of e.buys)this.wallBuy(...u);this.buildCrate(...e.crate),this.scenery(),this.buildLights()}},kE={motel:{w:16,s:6,n:-44,wb:18,south:[{c:-7,id:"S1"},{c:7,id:"S2"}],eastA:[{c:-10,id:"E1"}],westA:[{c:-14,id:"W1"}],eastB:[{c:-36,id:"E2"}],westB:[{c:-32,id:"W2"}],north:[{c:6,id:"N1"}],props:[["beetle",6010272,-9,-4,0],["bus",14252330,10,-12,Math.PI/2],["tires",4,-12,-16],["drum",3829413,12,2],["drum",11680302,13,3],["crate",1.1,-13,2],["beetle",13619140,-10,-34,Math.PI/2,{missing:!0}],["bus",9087050,8,-38,0],["tires",5,14,-28],["crate",1,-15,-41]],shacks:[[0,-10,8,3]],lamps:[[-14,-20,0,.2],[14,-20,1,2.9],[-8,2,0,.5],[9,-6,1,2.6],[-6,-18,0,0],[0,-34,1,1.2],[12,-42,0,3]],buys:[["smg",-10,On+.25,0],["akimbo",8,On+.25,0],["nade",-2,2,Math.PI],["shotgun",15.75,-4,-Math.PI/2],["rifle",-17.75,-36,Math.PI/2]],crate:[-12,-8]},drivein:{w:32,s:22,n:-50,wb:32,south:[{c:-18,id:"S1"},{c:0,id:"S2"},{c:18,id:"S3"}],eastA:[{c:6,id:"E1"},{c:-14,id:"E1b"}],westA:[{c:8,id:"W1"},{c:-12,id:"W1b"}],eastB:[{c:-38,id:"E2"}],westB:[{c:-40,id:"W2"}],north:[{c:-14,id:"N1"},{c:14,id:"N2"}],props:[["bus",6197184,-18,4,0],["bus",11680302,18,4,0],["beetle",14733722,-8,-6,0],["beetle",6010272,8,-6,0,{door:!0}],["beetle",14252330,0,8,Math.PI/2],["tires",5,-26,14],["tires",3,26,-16],["drum",14252330,24,16],["crate",1.2,-26,-16],["bus",9087050,-14,-38,Math.PI/2],["beetle",13619140,14,-36,0,{missing:!0}],["tires",4,0,-44],["crate",1,26,-46]],shacks:[[0,-16,10,4]],lamps:[[-24,18,0,.6],[24,18,0,2.6],[-20,-8,1,0],[20,-8,1,3],[0,0,0,1],[-20,-36,0,.3],[20,-44,1,3]],buys:[["smg",-14,On+.25,0],["akimbo",6,On+.25,0],["nade",2,8,0],["shotgun",31.75,-4,-Math.PI/2],["rifle",-31.75,-30,Math.PI/2]],crate:[-24,4]}};function rx(i,e,t,n){let s=lp(n);return s.id==="junkyard"?new Nl(i,e,t):new ap(i,e,t,{L:kE[s.id],id:s.id})}var ox={easy:{id:"easy",name:"Easy",count:.7,hp:.75,speed:.85,dmg:.6,drop:2,maxDrops:3,inter:10,spawnGap:1.3,brute:.5,startPts:750},medium:{id:"medium",name:"Medium",count:1,hp:1,speed:1,dmg:1,drop:1,maxDrops:2,inter:7,spawnGap:1,brute:1,startPts:500},hard:{id:"hard",name:"Hard",count:1.35,hp:1.3,speed:1.15,dmg:1.4,drop:.6,maxDrops:1,inter:5,spawnGap:.75,brute:1.6,startPts:400}};function cp(i,e=1){e=Math.max(1,Math.min(4,e|0));let t=[1,1.6,2.2,2.8][e-1];return{...i,count:i.count*t,hp:i.hp*(1+.1*(e-1))}}function hp(i){return ox[i]||ox.medium}var Yn={torso:new ct(.52,.62,.3),hip:new ct(.46,.2,.28),leg:new ct(.2,.9,.22),arm:new ct(.15,.62,.16),head:new Nr(.27,1),eye:new ct(.07,.04,.03),jaw:new ct(.2,.08,.16),rag:new ct(.12,.28,.03),hand:new ct(.17,.14,.17)},ax=new st({color:new me(1.7,.22,.1),toneMapped:!1}),lx=new Ge({color:7213080,roughness:.6}),GE=new Ge({color:1708564,roughness:1}),VE=[6191698,6980704,5798498,7439722,5206104],WE=[8007471,3099258,5921322,3816004,9071146,2068344,11687466],XE=[2764602,3813156,2106922,2898474],up=class{constructor(){this.root=new De,this.sk=new Ge({roughness:.75,emissive:0}),this.sh=new Ge({roughness:.95,emissive:0}),this.pa=new Ge({roughness:.95,emissive:0});let e=(o,l,c,a,h)=>{let d=new ge(o,l);return d.position.set(c,a,h),d.castShadow=!0,d};this.pelvis=new De,this.pelvis.position.y=.95,this.root.add(this.pelvis),this.legL=new De,this.legL.position.set(-.13,0,0),this.legL.add(e(Yn.leg,this.pa,0,-.45,0)),this.legR=new De,this.legR.position.set(.13,0,0),this.legR.add(e(Yn.leg,this.pa,0,-.45,0)),this.pelvis.add(this.legL,this.legR,e(Yn.hip,this.pa,0,0,0)),this.upper=new De,this.pelvis.add(this.upper),this.upper.add(e(Yn.torso,this.sh,0,.36,0));let t=e(Yn.rag,this.sh,.12,0,.15);t.rotation.z=.2;let n=e(Yn.rag,this.sh,-.1,.02,-.15);n.rotation.z=-.15,this.upper.add(t,n);let s=e(Yn.rag,lx,-.1,.45,.155);s.scale.set(1.6,1,1),s.rotation.z=.5;let r=e(Yn.rag,lx,.14,.2,.156);r.scale.set(1,.7,1),this.upper.add(s,r),this.head=new De,this.head.position.set(0,.88,.03),this.head.add(e(Yn.head,this.sk,0,0,0)),this.head.add(e(Yn.eye,ax,-.1,.04,.24),e(Yn.eye,ax,.1,.04,.24),e(Yn.jaw,GE,0,-.14,.18)),this.head.scale.set(1.05,1.1,1),this.upper.add(this.head),this.armL=new De,this.armL.position.set(-.35,.58,0),this.armL.add(e(Yn.arm,this.sk,0,-.28,0),e(Yn.hand,this.sk,0,-.64,0)),this.armR=new De,this.armR.position.set(.35,.58,0),this.armR.add(e(Yn.arm,this.sk,0,-.28,0),e(Yn.hand,this.sk,0,-.64,0)),this.upper.add(this.armL,this.armR),this.root.visible=!1,this.state="dead",this.pos=this.root.position}},Du=class{constructor(e,t,n){this.world=t,this.scene=e,this.list=[],this.max=n>0?26:16;for(let s=0;s<this.max+4;s++){let r=new up;e.add(r.root),this.list.push(r)}this.alive=0,this.t=0,this.hooks={}}setTier(e){this.max=e>0?26:16}reset(){for(let e of this.list)e.state="dead",e.root.visible=!1;this.alive=0}stats(e){let t=e<10?80+35*e:430*Math.pow(1.1,e-9),n=Math.min(5,1.5+e*.24);return{hp:t,sp:n}}spawn(e,t,n=!1){let s=this.list.find(c=>c.state==="dead"&&!c.root.visible);if(!s)return null;let r=this.stats(t),o=t>=3&&Math.random()<Math.min(.55,(t-2)*.09);s.brute=n,s.scale=n?1.38:ee(.94,1.06),s.root.scale.setScalar(s.scale),s.maxHp=s.hp=r.hp*(n?3.3:1),s.speed=r.sp*ee(.82,1.12)*(o?1.45:1)*(n?.78:1),s.speed=Math.min(s.speed,6),s.runner=o,s.dmg=n?44:22,s.value=n?150:60,s.sk.color.setHex(n?10121050:In(VE)),s.sh.color.setHex(In(WE)),s.pa.color.setHex(In(XE));for(let c of[s.sk,s.sh,s.pa])c.emissive.setHex(0);s.win=e,s.state="approach",s.slot=ee(-1.2,1.2),s.phase=ee(cn),s.attackT=0,s.cool=0,s.stuck=0,s.stuckTot=0,s.side=1,s.flash=0,s.hitT=0,s.groanT=ee(1,4),s.dieT=0,s.climbT=0,s.chk=0,s.chkX=0,s.chkZ=0,s.limp=Math.random()<.3,s.lane=ee(-.55,.55);let l=ee(4,9);return s.pos.set(e.out.x+e.n.x*l+e.t.x*ee(-3,3),0,e.out.z+e.n.z*l+e.t.z*ee(-3,3)),s.yaw=Math.atan2(-e.n.x,-e.n.z),s.root.rotation.set(0,s.yaw,0),s.root.visible=!0,s.pelvis.rotation.set(0,0,0),s.root.position.y=0,this.alive++,s}rayHit(e,t,n){let s=null;for(let r of this.list){if(r.state==="dead"||r.state==="dying")continue;let o=r.scale,l={x:r.pos.x,y:(r.climbY||0)+1.66*o,z:r.pos.z},c=.3*o,a=qE(e,t,l,c),h=null,d=e.x-r.pos.x,u=e.z-r.pos.z,f=t.x*t.x+t.z*t.z,p=.42*o;if(f>1e-8){let m=2*(d*t.x+u*t.z),v=d*d+u*u-p*p,S=m*m-4*f*v;if(S>=0){let y=Math.sqrt(S);for(let w of[(-m-y)/(2*f),(-m+y)/(2*f)])if(w>0){let T=e.y+t.y*w-(r.climbY||0);if(T>=0&&T<=1.45*o){h=w;break}}}}else d*d+u*u<p*p&&(h=.01);let x=null,g=!1;a!==null&&(h===null||a<=h+.15)?(x=a,g=!0):h!==null&&(x=h),x!==null&&x<n&&(!s||x<s.t)&&(s={z:r,t:x,head:g})}return s}damage(e,t,n,s,r){if(e.state==="dead"||e.state==="dying")return null;e.hp-=t,e.flash=.2,e.hitT=.22;let o=e.hp<=0;return o?(e.state="dying",e.dieT=0,this.alive--,e.dieDir=ee(-.4,.4)):e.state==="attack"||e.state,{killed:o,head:n}}killAll(){let e=[];for(let t of this.list)t.state!=="dead"&&t.state!=="dying"&&(t.hp=0,t.state="dying",t.dieT=0,t.dieDir=ee(-.4,.4),this.alive--,e.push(t));return e}update(e,t,n,s,r){let o=this.world;this.t=t;for(let c of o.windows)c.cool>0&&(c.cool-=e);let l=Wi(n.x,n.z,o.mapId);for(let c=0;c<this.list.length;c++){let a=this.list[c];if(a.state==="dead")continue;let h=a.scale;if(a.flash>0){a.flash-=e;let b=Math.max(0,a.flash/.2);for(let D of[a.sk,a.sh,a.pa])D.emissive.setRGB(1.15*b,.16*b,.05*b)}if(a.state==="dying"){a.dieT+=e;let b=Math.min(1,a.dieT/.55);a.pelvis.rotation.x=-b*1.5*(1-.1),a.pelvis.rotation.z=a.dieDir*b,a.pelvis.position.y=.95-b*.55,a.armL.rotation.x=-1.4+b*2.2,a.armR.rotation.x=-1.4+b*2.2,a.dieT>2.2&&(a.root.position.y=-(a.dieT-2.2)*.9),a.dieT>3.2&&(a.state="dead",a.root.visible=!1,a.root.position.y=0,a.pelvis.position.y=.95,a.pelvis.rotation.set(0,0,0));continue}if(a.groanT-=e,a.groanT<=0){a.groanT=ee(2.5,6);let b=a.pos.x-n.x,D=a.pos.z-n.z,k=Math.hypot(b,D);k<40&&r.groan?.(a,k)}let d=0,u=0,f=0,p=n.x,x=n.z;if(a.state==="approach"){let b=a.win,D=b.out.x+b.t.x*a.slot*.8,k=b.out.z+b.t.z*a.slot*.8,L=D-a.pos.x,R=k-a.pos.z,N=Math.hypot(L,R);N<.25?(a.state=b.count>0?"attack":"climb",a.climbT=0,a.cool=ee(.6,1.6)):(d=L/N,u=R/N,f=a.speed,a.pos.x+=d*f*e,a.pos.z+=u*f*e,a.yaw=Lu(a.yaw,Math.atan2(d,u),Math.min(1,e*8)))}else if(a.state==="attack"){let b=a.win;a.yaw=Lu(a.yaw,Math.atan2(-b.n.x,-b.n.z),Math.min(1,e*8)),a.cool-=e,b.count<=0?(a.state="climb",a.climbT=0):(a.attackT+=e,a.cool<=0&&b.count>0&&(a.cool=ee(1.2,2),b.cool<=0&&o.removePlank(b)&&(b.cool=ee(2.2,3.2),r.plank?.(b,!0))))}else if(a.state==="climb"){let b=a.win;a.climbT+=e/1.25;let D=Math.min(1,a.climbT),k=b.out.x+b.t.x*a.slot*.8,L=b.out.z+b.t.z*a.slot*.8,R=b.in.x+b.t.x*a.slot*.5,N=b.in.z+b.t.z*a.slot*.5;a.pos.x=k+(R-k)*D,a.pos.z=L+(N-L)*D,a.climbY=Math.sin(D*Math.PI)*.75,a.root.position.y=a.climbY,a.yaw=Lu(a.yaw,Math.atan2(-b.n.x,-b.n.z),Math.min(1,e*8)),f=1.5,D>=1&&(a.state="chase",a.climbY=0,a.root.position.y=0)}else{let b=o.bait,D=b?Math.hypot(b.x-a.pos.x,b.z-a.pos.z):99,k=b&&D<16,L=k?b.x:p,R=k?b.z:x,N=k?Wi(L,R,o.mapId):l,P=Wi(a.pos.x,a.pos.z,o.mapId),O=L,G=R,F=null;if(P!==N){let $=o.doors&&o.doors.length?o.doors:s?[s]:[];F=ex(a.pos.x,a.pos.z,o.mapId,N,$,a.lane||0),F&&(O=F.x,G=F.z)}let z=O-a.pos.x,Z=G-a.pos.z,se=Math.hypot(z,Z)||1;z/=se,Z/=se;let ce=Math.hypot(p-a.pos.x,x-a.pos.z);if(a.stuck>0&&!F){a.stuck-=e;let $=.7*a.side,he=Math.cos($),_e=Math.sin($),ie=z*he-Z*_e,ue=z*_e+Z*he;z=ie,Z=ue}let Ce=0,X=0;for(let $=0;$<this.list.length;$++){if($===c)continue;let he=this.list[$];if(he.state!=="chase"&&he.state!=="attack")continue;let _e=a.pos.x-he.pos.x,ie=a.pos.z-he.pos.z,ue=_e*_e+ie*ie;if(ue<.62&&ue>1e-4){let ve=1/Math.sqrt(ue);Ce+=_e*ve*(.78-Math.sqrt(ue)),X+=ie*ve*(.78-Math.sqrt(ue))}}F&&(F.crossZ?Ce*=.12:X*=.12),z+=Ce*1.15,Z+=X*1.15;let Te=Math.hypot(z,Z)||1;z/=Te,Z/=Te;let V=Math.hypot(L-a.pos.x,R-a.pos.z);f=!F&&(k?V<.9:ce<1&&P===l)||a.speed<=0?0:a.speed,a.cool-=e,!k&&ce<1.35&&P===l&&!F&&a.attackT<=0&&a.cool<=0&&(a.attackT=.01),a.attackT>0&&(a.attackT+=e,a.attackT>.42&&(!k&&ce<1.7&&P===l&&r.hitPlayer?.(a),a.attackT=0,a.cool=1.05),f*=.3),a.pos.x+=z*f*e,a.pos.z+=Z*f*e,d=z,u=Z,f>0&&o.resolve(a.pos,.36*h);let be=F?z:L-a.pos.x,Pe=F?Z:R-a.pos.z;if(a.yaw=Lu(a.yaw,Math.atan2(be,Pe),Math.min(1,e*9)),a.chk+=e,a.chk>.45){let $=Math.hypot(a.pos.x-a.chkX,a.pos.z-a.chkZ);if(f>.4&&$<.1){if(a.stuck=F?0:.45,a.side=Math.random()<.5?-1:1,a.stuckTot+=.45,F){let he=F.gx-a.pos.x,_e=F.gz-a.pos.z,ie=Math.hypot(he,_e)||1;a.pos.x+=he/ie*.28,a.pos.z+=_e/ie*.28,o.resolve(a.pos,.36*h)}}else a.stuckTot=Math.max(0,a.stuckTot-.3);a.chkX=a.pos.x,a.chkZ=a.pos.z,a.chk=0,a.stuckTot>1.8&&F?(a.pos.x=F.ex,a.pos.z=F.ez,o.resolve(a.pos,.36*h),a.stuckTot=0):a.stuckTot>6&&this.reroute(a)}}a.root.rotation.y=a.yaw,a.state!=="climb"&&(a.root.position.y=0);let g=f>.1?f:0;a.phase+=g*e*(a.runner?2.4:2.7)/Math.max(.6,h);let m=Math.sin(a.phase),v=Math.min(.8,.28+g*.13);a.legL.rotation.x=m*v,a.legR.rotation.x=-m*v*(a.limp?.35:1),a.hitT>0&&(a.hitT=Math.max(0,a.hitT-e));let S=a.hitT>0?a.hitT/.22:0,y=.1+Math.min(.28,g*.05)+(a.runner?.16:0)+(a.brute?.1:0)-S*.42;a.upper.rotation.x=y+Math.abs(m)*.035,a.upper.rotation.z=Math.sin(a.phase*.5)*.07*(a.limp?2:1),a.upper.rotation.y=Math.sin(a.phase*.5)*.16;let w=a.brute?-.58:-.74,T=Math.min(.62,.2+g*.1)*(a.runner?1.28:1),I,_;if(a.state==="climb")I=_=-1.5;else if(a.state==="attack")_=-.5+Math.sin(a.attackT*7)*.95,I=w+.12;else if(a.attackT>0){let b=Math.sin(Math.min(1,a.attackT/.42)*Math.PI);_=w-b*1.15,I=w+m*T*.3}else I=w-m*T,_=w+m*T*(a.limp?.4:1);a.armL.rotation.x=I+S*.3,a.armR.rotation.x=_+S*.3;let M=a.brute?.28:.16;a.armL.rotation.z=M,a.armR.rotation.z=-M,a.head.rotation.x=.08+Math.sin(a.phase*.5)*.05-S*.5,a.head.rotation.y=Math.sin(a.phase*.5)*.1,a.head.rotation.z=Math.sin(a.phase*.5+1)*.1+S*.15,a.pelvis.position.y=.95+Math.abs(m)*(g>.2?.05:.02)}}reroute(e){let t=Qo(this.world.doors&&this.world.doors.length?this.world.doors:[this.world.door]),n=this.world.windows.filter(r=>t.has(r.area)),s=In(n.length?n:this.world.windows);e.win=s,e.state="approach",e.stuckTot=0,e.stuck=0,e.pos.set(s.out.x+s.n.x*3,0,s.out.z+s.n.z*3)}};function qE(i,e,t,n){let s=i.x-t.x,r=i.y-t.y,o=i.z-t.z,l=s*e.x+r*e.y+o*e.z,c=s*s+r*r+o*o-n*n,a=l*l-c;if(a<0)return null;let h=-l-Math.sqrt(a);return h>0?h:null}function Lu(i,e,t){let n=((e-i+Math.PI)%cn+cn)%cn-Math.PI;return i+n*t}var Fu={},fp;function YE(){let i=Mu($o.zombies),e=i.view;fp=i.meta;for(let t of fp){let n=new vt;n.setAttribute("position",bu(e,t)),n.setAttribute("normal",Su(e,t)),n.setAttribute("skinIndex",new ht(e(Uint8Array,t.si),4)),n.setAttribute("skinWeight",new ht(e(Uint8Array,t.sw),4,!0));let s=e(Uint16Array,t.idx);ZE(s,n.attributes.position.array,t),n.setIndex(new ht(s,1)),t.groups.forEach(r=>n.addGroup(r.start,r.count,r.slot>=0?r.slot:3)),n.computeBoundingSphere(),Fu[t.tag]={g:n,m:t}}}function ZE(i,e,t){let n=t.groups.filter(s=>s.slot<0);for(let s of n){let r=-9;for(let c=s.start;c<s.start+s.count;c++)r=Math.max(r,e[i[c]*3+1]);if(r<1.75||s.count<200)continue;s.hair=!0;let o=new Set;for(let c=s.start;c<s.start+s.count;c++)o.add(i[c]);let l=0;for(let c of o)l=Math.max(l,Math.abs(e[c*3]));if(l>.12){let c=.12/l;for(let a of o)e[a*3]*=c,e[a*3+2]=(e[a*3+2]+.01)*c-.01,e[a*3+1]=1.66+(e[a*3+1]-1.66)*(e[a*3+1]>1.66?.72:c)}for(let c=s.start;c<s.start+s.count;c+=3){let a=0,h=0;for(let d=0;d<3;d++)a+=e[i[c+d]*3+1]/3,h+=e[i[c+d]*3+2]/3;(h>.035&&a<1.715||h>.075&&a<1.74||a<1.6)&&(i[c+1]=i[c+2]=i[c])}}}var hx=4,jE=["near","mid","far"],cx=new Map,KE=(i,e)=>{let t=cx.get(i);if(!t){let n=new me("#"+i).multiplyScalar(e?.85:.6);e&&n.offsetHSL(0,0,.04),t=new Ge({color:n,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),cx.set(i,t)}return t},$E="float zh(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);} float zn(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(zh(i),zh(i+vec3(1,0,0)),f.x),mix(zh(i+vec3(0,1,0)),zh(i+vec3(1,1,0)),f.x),f.y),mix(mix(zh(i+vec3(0,0,1)),zh(i+vec3(1,0,1)),f.x),mix(zh(i+vec3(0,1,1)),zh(i+vec3(1,1,1)),f.x),f.y),f.z);}";function dp(i,e){let t=new Ge({roughness:i===0?.7:.95,polygonOffset:i!==0,polygonOffsetFactor:-1.5,polygonOffsetUnits:-4});return t.userData.seed={value:e},t.onBeforeCompile=n=>{n.uniforms.zSeed=t.userData.seed,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vZ = position;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vZ; uniform float zSeed;
`+$E).replace("#include <color_fragment>",`#include <color_fragment>
      vec3 q = vZ*vec3(18.)+zSeed; float n = zn(q)*0.6+zn(q*2.3)*0.4;
      ${i===0?"diffuseColor.rgb *= mix(vec3(0.55,0.62,0.5), vec3(1.0), smoothstep(0.25,0.75,n)); float b = smoothstep(0.78,0.86,zn(q*0.7+3.)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.25,0.03,0.04), b*0.8);":"float m2 = zn(vZ*7.+zSeed)*0.65+zn(vZ*15.+zSeed)*0.35; float t = smoothstep(0.70,0.78,m2)*0.8; float e = smoothstep(0.62,0.70,m2)*0.5-t*0.5; diffuseColor.rgb *= 0.85+0.2*zn(q*2.); diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb*0.35, e); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.075,0.095,0.06)*mix(1.,0.6,zn(q*3.)), t); float bl = smoothstep(0.8,0.9,zn(q*0.5+7.)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.22,0.03,0.03), bl*0.7);"}`)},t.customProgramCacheKey=()=>"zmat"+i,t}var ux=1.1,Nu=new U,Uu=new me,xn=new pt,JE=new me(1,.92,.75),Ou=new Array(hx);function QE(){let i=document.createElement("canvas");i.width=i.height=32;let e=i.getContext("2d"),t=e.createRadialGradient(16,16,1,16,16,16);t.addColorStop(0,"#fff"),t.addColorStop(.28,"rgba(255,255,255,.7)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32);let n=new Gt(i);return n.colorSpace=ft,n}function eT(i){let e=i.geometry.attributes.position,t=i.geometry.attributes.skinIndex,n=i.geometry.attributes.skinWeight,s=i.skeleton.bones.findIndex(u=>u.name==="head"),r=i.skeleton.boneInverses[s],o=i.bindMatrix,l=new U,c=null,a=null,h=-1e9,d=-1e9;for(let u=0;u<e.count;u++){let f=0;for(let x=0;x<4;x++)t.getComponent(u,x)===s&&(f=Math.max(f,n.getComponent(u,x)));if(f<.45||(l.fromBufferAttribute(e,u).applyMatrix4(o).applyMatrix4(r),l.z<.015))continue;let p=l.z-Math.abs(Math.abs(l.x)-.032)*2.4-Math.abs(l.y-.012)*2.2;l.x<-.01&&p>h?(h=p,c=l.clone()):l.x>.01&&p>d&&(d=p,a=l.clone())}return c=c||new U(-.034,.02,.08),a=a||new U(.034,.02,.08),c.y+=.022,a.y+=.022,c.z+=.01,a.z+=.01,{L:c,R:a}}function tT(i,e,t){xn.position.set(0,-20,0),xn.scale.set(0,0,0),xn.rotation.set(0,0,0),xn.updateMatrix(),i.setMatrixAt(t*2,xn.matrix),i.setMatrixAt(t*2+1,xn.matrix),e.setMatrixAt(t,xn.matrix)}function nT(i,e){let t=i.eyeMesh,n=i.blob,s=i.list,r=i.cam,o=r&&r.quaternion,l=!1;for(let c=0;c<s.length;c++){let a=s[c];if(!(a.root.visible&&a.state!=="dead"&&a.eyeL)){a._eyeOn&&(a._eyeOn=!1,l=!0,tT(t,n,c));continue}a._eyeOn=!0,l=!0,a.bones.head.updateWorldMatrix(!0,!1);let d=a.bones.head.matrixWorld,f=.05*(1+.12*Math.sin(e*(a.runner?9:3.1)+a.phase))*(a.flash>0?1.35:1)*(a.brute?1.22:1);Uu.setRGB(a.brute?.85:a.runner?1:.95,a.brute?.08:a.runner?.42:.16,.04),a.flash>0&&Uu.lerp(JE,Math.min(.65,a.flash*2.5)),o&&xn.quaternion.copy(o),Nu.copy(a.eyeL).applyMatrix4(d),xn.position.copy(Nu),xn.scale.setScalar(f),xn.updateMatrix(),t.setMatrixAt(c*2,xn.matrix),t.setColorAt(c*2,Uu),Nu.copy(a.eyeR).applyMatrix4(d),xn.position.copy(Nu),xn.updateMatrix(),t.setMatrixAt(c*2+1,xn.matrix),t.setColorAt(c*2+1,Uu);let p=a.state==="dying"?Math.min(.85,a.dieT*.45):0;xn.position.set(a.pos.x,.04,a.pos.z),xn.rotation.set(-Math.PI/2,0,0),xn.scale.setScalar(Math.max(.01,a.scale*(a.brute?1.15:.92)*(1-p))),xn.updateMatrix(),n.setMatrixAt(c,xn.matrix)}l&&(t.instanceMatrix.needsUpdate=!0,t.instanceColor.needsUpdate=!0,n.instanceMatrix.needsUpdate=!0)}function dx(i){YE(),i.list.forEach((c,a)=>{let h=a%hx,d=Fu[h+":near"].m.bones,u=d.map(x=>{let g=new es;return g.name=x.n,g.position.fromArray(x.t),g});d.forEach((x,g)=>{x.p>=0&&u[x.p].add(u[g])});let f=new De;f.add(u[0]),f.scale.setScalar(Fu[h+":near"].m.scale*ux),f.updateMatrixWorld(!0);let p=new Cs(u);c.sk=dp(0,a*7.3),c.sh=dp(1,a*3.1),c.pa=dp(1,a*5.7+2),c.lods=jE.map(x=>{let g=Fu[h+":"+x],m=[c.sk,c.sh,c.pa],v=g.m.groups.map(w=>w.slot>=0?[c.sk,c.sh,c.pa][w.slot]:KE(w.col,w.hair)),S=g.g.clone();S.clearGroups(),g.m.groups.forEach((w,T)=>S.addGroup(w.start,w.count,T));let y=new Rs(S,v);return y.frustumCulled=!1,y.castShadow=!0,y.bind(p),y.visible=!1,f.add(y),y}),c.bones=Object.fromEntries(u.map(x=>[x.name,x])),c.hipY=c.bones.hips.position.y,c.root.add(f),c.pelvis.traverse(x=>{x.isMesh&&(x.visible=!1)}),c.variant=h,Ou[h]||(Ou[h]=eT(c.lods[0])),c.eyeL=Ou[h].L,c.eyeR=Ou[h].R});let e=i.list.length,t=new Vn(new an(1,1),new st({map:QE(),color:16777215,transparent:!0,depthWrite:!1,blending:as,toneMapped:!0,fog:!0,side:Ot}),e*2);t.frustumCulled=!1,t.userData.noAO=!0,t.renderOrder=6,t.instanceColor=new xi(new Float32Array(e*6),3);let n=new st({color:0,transparent:!0,opacity:.28,depthWrite:!1}),s=new Vn(new li(.7,14),n,e);s.frustumCulled=!1,s.userData.noAO=!0,s.renderOrder=1,s.receiveShadow=!1,i.scene.add(t,s),i.eyeMesh=t,i.blob=s;let r=i.setTier.bind(i);i.setTier=c=>{i.tier=c,n.opacity=c===0?.5:.26,r(c)};let o=i.update.bind(i),l=[];return i.update=(c,a,h,...d)=>{o(c,a,h,...d),l.length=0;for(let u of i.list)u.root.visible&&(u.d=Math.hypot(u.pos.x-h.x,u.pos.z-h.z),l.push(u));l.sort((u,f)=>u.d-f.d),l.forEach((u,f)=>{let p=f<2&&u.d<7?0:f<5&&u.d<16?1:2;u.lods.forEach((x,g)=>x.visible=g===p),iT(u)}),nT(i,a)},i.lodCounts=()=>{let c=[0,0,0];for(let a of i.list)a.root.visible&&a.lods.forEach((h,d)=>{h.visible&&c[d]++});return c},Object.fromEntries(fp.map(c=>[c.tag,c.tris]))}function iT(i){let e=i.bones;e.hips.position.y=i.hipY+(i.pelvis.position.y-.95)/ux,e.hips.rotation.set(i.pelvis.rotation.x,0,i.pelvis.rotation.z),e.chest.rotation.set(i.upper.rotation.x+.18+(i.brute?.1:0),i.upper.rotation.y,i.upper.rotation.z),e.spine.rotation.x=.1+(i.brute?.05:0),e.head.rotation.set(i.head.rotation.x+.15,.1+(i.head.rotation.y||0),i.head.rotation.z+.22),e.thighL.rotation.set(i.legL.rotation.x,0,.03),e.thighR.rotation.set(i.legR.rotation.x,0,-.03),e.shinL.rotation.x=Math.max(0,-i.legL.rotation.x)*1.25+.1,e.shinR.rotation.x=Math.max(0,-i.legR.rotation.x)*1.25+.1,e.upperArmL.rotation.set(i.armL.rotation.x,0,i.armL.rotation.z),e.upperArmR.rotation.set(i.armR.rotation.x,0,i.armR.rotation.z);let t=n=>-.4-Math.max(0,-n-.32)*.42;if(e.foreArmL.rotation.x=t(i.armL.rotation.x),e.foreArmR.rotation.x=t(i.armR.rotation.x),e.handL.rotation.x=.22,e.handR.rotation.x=.28,i.state==="dying"){let n=Math.min(1,i.dieT/.55);e.foreArmL.rotation.x=-.35-n,e.foreArmR.rotation.x=-.3-n}}var sT=i=>new me(i);function Mi(i,e,t,n,s,r=0,o=0,l=0,c=1,a=1,h=1){i=i.index?i.toNonIndexed():i.clone();let d=new Ze().compose(new U(t,n,s),new on().setFromEuler(new $n(r,o,l)),new U(c,a,h));i.applyMatrix4(d);let u=i.attributes.position.count,f=new Float32Array(u*3),p=sT(e);for(let x=0;x<u;x++){let g=.85+.3*Math.random();f[x*3]=p.r*g,f[x*3+1]=p.g*g,f[x*3+2]=p.b*g}i.setAttribute("color",new ht(f,3));for(let x of Object.keys(i.attributes))["position","normal","color"].includes(x)||i.deleteAttribute(x);return i}function pp(i){let e=new vt;for(let t of["position","normal","color"]){let n=i.map(o=>o.attributes[t].array),s=new Float32Array(n.reduce((o,l)=>o+l.length,0)),r=0;for(let o of n)s.set(o,r),r+=o.length;e.setAttribute(t,new ht(s,3))}return e.computeBoundingSphere(),e}var fx=7234898,px=11049580,mx=3015944,gx=1966596,xx=4852236,rT=[1840914,3811866,5921362,2761760,7031338],zs=(i,e,t)=>new ct(i,e,t),oT=(i,e)=>new Is(i,e,4),vx=i=>new Nr(i,0);function aT(i,e){let t=[],n=i.c,s=i.r,r=n.z+s.z*.86,o=n.y-s.y*.42;for(let a=0;a<6;a++)t.push(Mi(zs(s.x*.12,s.y*.11,.008),px,(a-2.5)*s.x*.14,o+s.y*.04,r-Math.abs(a-2.5)*.004,0,0,ee(-.2,.2)));t.push(Mi(zs(s.x*.9,s.y*.07,s.z*.25),mx,0,o+s.y*.1,r-s.z*.12)),t.push(Mi(vx(s.x*.38),xx,n.x+ee(-.3,.3)*s.x,n.y+s.y*.9,n.z+s.z*.15,0,0,0,1.2,.3,1)),t.push(Mi(zs(s.x*.35,.005,.005),gx,n.x+s.x*.62,n.y-s.y*.1,n.z+s.z*.8,0,.6,1.1));let l=6+(Math.random()*5|0),c=In(rT);if(e)for(let a=0;a<l;a++){let h=ee(0,Math.PI*2),d=ee(.35,1.2),u=Math.cos(h)*Math.cos(d),f=Math.sin(d),p=Math.sin(h)*Math.cos(d)-.25;t.push(Mi(oT(s.x*.12,s.y*ee(.35,.6)),c,n.x+u*s.x*.95,n.y+f*s.y*.95,n.z+p*s.z*.9,p*.9,0,-u*.9))}return pp(t)}function lT(i,e){let t=i.r,n=t.x*.9,s=t.z*.6,r=[Mi(zs(n,t.y*.16,s),e,0,-t.y*.08,s/2),Mi(zs(n*.82,t.y*.06,s*.8),mx,0,t.y*.01,s/2)];for(let o=0;o<5;o++)r.push(Mi(zs(n*.13,t.y*.11,.008),px,(o-2)*n*.17,t.y*.05,s-.006-Math.abs(o-2)*.004));return pp(r)}function cT(i,e){let t=[Mi(vx(.06),gx,.035,i.y,i.z-.012,0,0,0,1.1,1.15,.25)];for(let n=0;n<4;n++){let s=i.y+.04-n*.026;t.push(Mi(new It(.0055,.0055,.085-n*.008,5),fx,.04,s,i.z+.002,0,0,Math.PI/2+.22))}if(t.push(Mi(zs(.012,.1,.01),fx,-.006,i.y,i.z+.002)),t.push(Mi(zs(.04,.02,.01),xx,.06,i.y-.07,i.z,0,0,.6)),e)for(let n=0;n<4;n++)t.push(Mi(zs(ee(.03,.05),ee(.1,.18),.006),e,ee(-.1,.1),i.y-.2-ee(0,.04),i.z-.01,ee(-.1,.1),0,ee(-.25,.25)));return pp(t)}function hT(i,e){let t=i.geometry.attributes.position,n=i.geometry.attributes.skinIndex,s=i.geometry.attributes.skinWeight,r=i.skeleton.bones.findIndex(h=>h.name===e),o=i.skeleton.boneInverses[r],l=new U,c=new U(9,9,9),a=new U(-9,-9,-9);for(let h=0;h<t.count;h++){let d=0;for(let u=0;u<4;u++)n.getComponent(h,u)===r&&(d=Math.max(d,s.getComponent(h,u)));d<.6||(l.fromBufferAttribute(t,h).applyMatrix4(i.bindMatrix).applyMatrix4(o),c.min(l),a.max(l))}return{mn:c,mx:a,c:c.clone().add(a).multiplyScalar(.5),r:a.clone().sub(c).multiplyScalar(.5)}}function uT(i,e){let t=i.geometry.attributes.position,n=i.geometry.attributes.skinIndex,s=i.geometry.attributes.skinWeight,r=i.skeleton.bones.findIndex(d=>d.name===e),o=i.skeleton.boneInverses[r],l=new U,c=-1,a=0,h=0;for(let d=0;d<t.count;d++){let u=0;for(let f=0;f<4;f++)n.getComponent(d,f)===r&&(u=Math.max(u,s.getComponent(d,f)));u<.5||(l.fromBufferAttribute(t,d).applyMatrix4(i.bindMatrix).applyMatrix4(o),Math.abs(l.x)<.06&&(c=Math.max(c,l.z),a+=l.y,h++))}return{y:h?a/h:.05,z:c>0?c:.12}}var dT=[6191698,6980704,9081976,10133668,8022666,10525290,7232074,9207664],fT=[8007471,3099258,5921322,3816004,9071146,2068344,11687466,14209216,4860490,2771498,10127968],pT=[2764602,3813156,2106922,2898474,4604218,2766160];function _x(i){let e=new Ge({vertexColors:!0,roughness:.85}),t={},n={};i.list.forEach(o=>{let l=o.lods[0];t[o.variant]=t[o.variant]||uT(l,"chest");let c=n[o.variant]=n[o.variant]||hT(l,"head");o.gHead=new ge(aT(c,Math.random()<.8),e),o.gJaw=new ge(lT(c,5660746),e),o.gJaw.position.set(c.c.x,c.c.y-c.r.y*.5,c.c.z+c.r.z*.25),o.gChest=new ge(cT(t[o.variant],null),e),o.gChest.position.z=.004;for(let a of[o.gHead,o.gJaw,o.gChest])a.frustumCulled=!1,a.visible=!1,a.castShadow=!1;o.bones.head.add(o.gHead,o.gJaw),o.bones.chest.add(o.gChest),o.lodRoot=l.parent});let s=i.spawn.bind(i);i.spawn=(...o)=>{let l=s(...o);if(!l)return l;l.style=Math.random()*3|0,l.jawOpen=ee(.18,.45),l.ribs=Math.random()<.45,l.skull=Math.random()<.9,l.brute||l.sk.color.setHex(In(dT)),l.sh.color.setHex(In(fT)),l.pa.color.setHex(In(pT));let c=l.brute?1.1:ee(.9,1.14),a=l.brute?1:ee(.92,1.08);return l.lodRoot&&(l.lodRoot.scale.set(c,a,Math.min(1.12,c)),l.lodRoot.position.y=0),l.twitch=ee(8,14),l};let r=i.update.bind(i);i.update=(o,l,c,...a)=>{r(o,l,c,...a);for(let h of i.list){let d=h.root.visible&&h.state!=="dead"&&(h.lods[0].visible||h.lods[1].visible);if(h.gHead.visible=h.gJaw.visible=d&&h.skull!==!1,h.gChest.visible=d&&!!h.ribs,!h.root.visible||h.state==="dead")continue;let u=h.bones,f=h.style|0,p=h.phase||0;h.gJaw.rotation.x=(h.jawOpen||.4)+Math.max(0,Math.sin(l*6+p))*.25+(h.attackT>0?.3:0),h.state!=="dying"&&(f===1?(u.upperArmL.rotation.set(.15+Math.sin(p)*.1,0,.12),u.foreArmL.rotation.x=-.1,u.head.rotation.z+=.35,u.shinR.rotation.x+=.35,u.chest.rotation.z+=.12):f===2?(u.head.rotation.y+=Math.sin(l*h.twitch)*.12*(Math.sin(l*1.7+p)>.4?1:0),u.chest.rotation.x+=.22,u.chest.rotation.z+=Math.sin(p*.5)*.22,u.spine.rotation.z=Math.sin(p*.5)*.12,u.head.rotation.x-=.25):u.spine.rotation.z=0)}}}function ea(i){let e=new Map,t=new Map,n=i.clone();return yx(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),l=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=l.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function yx(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)yx(i.children[n],e.children[n],t)}var ur=class extends zi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Mp(t)}),this.register(function(t){return new bp(t)}),this.register(function(t){return new Ip(t)}),this.register(function(t){return new Lp(t)}),this.register(function(t){return new Dp(t)}),this.register(function(t){return new Ep(t)}),this.register(function(t){return new Tp(t)}),this.register(function(t){return new wp(t)}),this.register(function(t){return new Ap(t)}),this.register(function(t){return new yp(t)}),this.register(function(t){return new Rp(t)}),this.register(function(t){return new Sp(t)}),this.register(function(t){return new Pp(t)}),this.register(function(t){return new Cp(t)}),this.register(function(t){return new vp(t)}),this.register(function(t){return new Bu(t,St.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Bu(t,St.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Np(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let a=Fs.extractUrlBase(e);o=Fs.resolveURL(a,this.path)}else o=Fs.extractUrlBase(e);this.manager.itemStart(e);let l=function(a){s?s(a):console.error(a),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Or(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(a){try{r.parse(a,o,function(h){t(h),r.manager.itemEnd(e)},l)}catch(h){l(h)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},l={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Tx){try{o[St.KHR_BINARY_GLTF]=new Up(e)}catch(d){s&&s(d);return}r=JSON.parse(o[St.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let a=new Gp(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});a.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](a);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case St.KHR_MATERIALS_UNLIT:o[d]=new _p;break;case St.KHR_DRACO_MESH_COMPRESSION:o[d]=new Op(r,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:o[d]=new Fp;break;case St.KHR_MESH_QUANTIZATION:o[d]=new Bp;break;default:u.indexOf(d)>=0&&l[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}a.setExtensions(o),a.setPlugins(l),a.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function mT(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function fn(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},vp=class{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],a,h=new me(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ln);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":a=new Os(h),a.target.position.set(0,0,-1),a.add(a.target);break;case"point":a=new ss(h),a.distance=d;break;case"spot":a=new kr(h),a.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,a.angle=c.spot.outerConeAngle,a.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,a.target.position.set(0,0,-1),a.add(a.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return a.position.set(0,0,0),fs(a,c),c.intensity!==void 0&&(a.intensity=c.intensity),a.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(a),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],l=(r.extensions&&r.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(c){return n._getNodeRef(t.cache,l,c)})}},_p=class{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return st}extendParams(e,t,n){let s=[];e.color=new me(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ln),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,ft))}return Promise.all(s)}},yp=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Mp=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return fn(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(r,r)}return Promise.all(s)}},bp=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_DISPERSION}getMaterialType(e){return fn(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Sp=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return fn(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Ep=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){return fn(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new me(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Ln)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,ft)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Tp=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return fn(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},wp=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){return fn(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new me().setRGB(r[0],r[1],r[2],Ln),Promise.all(s)}},Ap=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){return fn(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Rp=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){return fn(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new me().setRGB(r[0],r[1],r[2],Ln),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,ft)),Promise.all(s)}},Cp=class{constructor(e){this.parser=e,this.name=St.EXT_MATERIALS_BUMP}getMaterialType(e){return fn(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Pp=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return fn(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Ip=class{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Lp=class{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],l=s.images[o.source],c=n.textureLoader;if(l.uri){let a=n.options.manager.getHandler(l.uri);a!==null&&(c=a)}return n.loadTextureImage(e,o.source,c)}},Dp=class{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],l=s.images[o.source],c=n.textureLoader;if(l.uri){let a=n.options.manager.getHandler(l.uri);a!==null&&(c=a)}return n.loadTextureImage(e,o.source,c)}},Bu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(l){let c=s.byteOffset||0,a=s.byteLength||0,h=s.count,d=s.byteStride,u=new Uint8Array(l,c,a);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,u,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(f),h,d,u,s.mode,s.filter),f})})}else return null}},Np=class{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let a of s.primitives)if(a.mode!==Pi.TRIANGLES&&a.mode!==Pi.TRIANGLE_STRIP&&a.mode!==Pi.TRIANGLE_FAN&&a.mode!==void 0)return null;let o=n.extensions[this.name].attributes,l=[],c={};for(let a in o)l.push(this.parser.getDependency("accessor",o[a]).then(h=>(c[a]=h,c[a])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(a=>{let h=a.pop(),d=h.isGroup?h.children:[h],u=a[0].count,f=[];for(let p of d){let x=new Ze,g=new U,m=new on,v=new U(1,1,1),S=new Vn(p.geometry,p.material,u);for(let w=0;w<u;w++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,w),c.SCALE&&v.fromBufferAttribute(c.SCALE,w),S.setMatrixAt(w,x.compose(g,m,v));let y=null;for(let w in c)if(w==="_COLOR_0"){let T=c[w];S.instanceColor=new xi(T.array,T.itemSize,T.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(y===null){let I=S.geometry;y=new vt,y.name=I.name;for(let _ in I.attributes)y.setAttribute(_,I.attributes[_]);for(let _ in I.morphAttributes)y.morphAttributes[_]=I.morphAttributes[_];I.index!==null&&y.setIndex(I.index),y.morphTargetsRelative=I.morphTargetsRelative;for(let _ of I.groups)y.addGroup(_.start,_.count,_.materialIndex);I.boundingBox!==null&&(y.boundingBox=I.boundingBox.clone()),I.boundingSphere!==null&&(y.boundingSphere=I.boundingSphere.clone()),y.drawRange.start=I.drawRange.start,y.drawRange.count=I.drawRange.count,y.userData=Object.assign({},I.userData),S.geometry=y}let T=c[w];y.setAttribute(w,new xi(T.array,T.itemSize,T.normalized))}pt.prototype.copy.call(S,p),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Tx="glTF",Ol=12,Mx={JSON:1313821514,BIN:5130562},Up=class{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ol),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Tx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ol,r=new DataView(e,Ol),o=0;for(;o<s;){let l=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Mx.JSON){let a=new Uint8Array(e,Ol+o,l);this.content=n.decode(a)}else if(c===Mx.BIN){let a=Ol+o;this.body=e.slice(a,a+l)}o+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Op=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,l={},c={},a={};for(let h in o){let d=zp[h]||h.toLowerCase();l[d]=o[h]}for(let h in e.attributes){let d=zp[h]||h.toLowerCase();if(o[h]!==void 0){let u=n.accessors[e.attributes[h]],f=ta[u.componentType];a[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let x=f.attributes[p],g=c[p];g!==void 0&&(x.normalized=g)}d(f)},l,a,Ln,u)})})}},Fp=class{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Bp=class{constructor(){this.name=St.KHR_MESH_QUANTIZATION}},ku=class extends is{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=l*2,a=l*3,h=s-t,d=(n-t)/h,u=d*d,f=u*d,p=e*a,x=p-a,g=-2*f+3*u,m=f-u,v=1-g,S=m-u+d;for(let y=0;y!==l;y++){let w=o[x+y+l],T=o[x+y+c]*h,I=o[p+y+l],_=o[p+y]*h;r[y]=v*w+S*T+g*I+m*_}return r}},gT=new on,kp=class extends ku{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return gT.fromArray(r).normalize().toArray(r),r}},Pi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ta={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bx={9728:tn,9729:Xt,9984:Eh,9985:Vo,9986:qr,9987:di},Sx={33071:Cn,33648:Ao,10497:en},mp={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xT={CUBICSPLINE:void 0,LINEAR:Ar,STEP:wr},gp={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vT(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ge({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:os})),i.DefaultMaterial}function $r(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fs(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _T(i,e,t){let n=!1,s=!1,r=!1;for(let a=0,h=e.length;a<h;a++){let d=e[a];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],l=[],c=[];for(let a=0,h=e.length;a<h;a++){let d=e[a];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;o.push(u)}if(s){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;l.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;c.push(u)}}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(a){let h=a[0],d=a[1],u=a[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function yT(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function MT(i){let e,t=i.extensions&&i.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+xp(t.attributes):e=i.indices+":"+xp(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+xp(i.targets[n]);return e}function xp(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Hp(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bT(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var ST=new Ze,Gp=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;let c=l.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=l.indexOf("Firefox")>-1,o=r?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new ui(this.options.manager):this.textureLoader=new nl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Or(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let l={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return $r(r,l,s),fs(l,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(l)})).then(function(){for(let c of l.scenes)c.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let l=0,c=o.length;l<c;l++)e[o[l]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,l)=>{let c=this.associations.get(o);c!=null&&this.associations.set(l,c);for(let[a,h]of o.children.entries())r(h,l.children[a])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Fs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=mp[s.type],l=ta[s.componentType],c=s.normalized===!0,a=new l(s.count*o);return Promise.resolve(new ht(a,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let l=o[0],c=mp[s.type],a=ta[s.componentType],h=a.BYTES_PER_ELEMENT,d=h*c,u=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,g;if(f&&f!==d){let m=Math.floor(u/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,S=t.cache.get(v);S||(x=new a(l,m*f,s.count*f/h),S=new Pr(x,f/h),t.cache.add(v,S)),g=new ir(S,c,u%f/h,p)}else l===null?x=new a(s.count*c):x=new a(l,u,s.count*c),g=new ht(x,c,p);if(s.sparse!==void 0){let m=mp.SCALAR,v=ta[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,w=new v(o[1],S,s.sparse.count*m),T=new a(o[2],y,s.sparse.count*c);l!==null&&(g=new ht(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let I=0,_=w.length;I<_;I++){let M=w[I];if(g.setX(M,T[I*c]),c>=2&&g.setY(M,T[I*c+1]),c>=3&&g.setZ(M,T[I*c+2]),c>=4&&g.setW(M,T[I*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],l=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(l=c)}return this.loadTextureImage(e,r,l)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],l=r.images[t],c=(l.uri||l.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let a=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||l.name||"",h.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(h.name=l.uri);let u=(r.samplers||{})[o.sampler]||{};return h.magFilter=bx[u.magFilter]||Xt,h.minFilter=bx[u.minFilter]||di,h.wrapS=Sx[u.wrapS]||en,h.wrapT=Sx[u.wrapT]||en,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==tn&&h.minFilter!==Xt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=a,a}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=s.images[e],l=self.URL||self.webkitURL,c=o.uri||"",a=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(d){a=!0;let u=new Blob([d],{type:o.mimeType});return c=l.createObjectURL(u),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let p=u;t.isImageBitmapLoader===!0&&(p=function(x){let g=new Mn(x);g.needsUpdate=!0,u(g)}),t.load(Fs.resolveURL(d,r.path),p,void 0,f)})}).then(function(d){return a===!0&&l.revokeObjectURL(c),fs(d,o),d.userData.mimeType=o.mimeType||bT(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[St.KHR_TEXTURE_TRANSFORM]){let l=n.extensions!==void 0?n.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(l){let c=r.associations.get(o);o=r.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(o,l),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let l="PointsMaterial:"+n.uuid,c=this.cache.get(l);c||(c=new Uo,Hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(l,c)),n=c}else if(e.isLine){let l="LineBasicMaterial:"+n.uuid,c=this.cache.get(l);c||(c=new No,Hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(l,c)),n=c}if(s||r||o){let l="ClonedMaterial:"+n.uuid+":";s&&(l+="derivative-tangents:"),r&&(l+="vertex-colors:"),o&&(l+="flat-shading:");let c=this.cache.get(l);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(l,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ge}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,l={},c=r.extensions||{},a=[];if(c[St.KHR_MATERIALS_UNLIT]){let d=s[St.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),a.push(d.extendParams(l,r,t))}else{let d=r.pbrMetallicRoughness||{};if(l.color=new me(1,1,1),l.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;l.color.setRGB(u[0],u[1],u[2],Ln),l.opacity=u[3]}d.baseColorTexture!==void 0&&a.push(t.assignTexture(l,"map",d.baseColorTexture,ft)),l.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,l.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(a.push(t.assignTexture(l,"metalnessMap",d.metallicRoughnessTexture)),a.push(t.assignTexture(l,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),a.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,l)})))}r.doubleSided===!0&&(l.side=Ot);let h=r.alphaMode||gp.OPAQUE;if(h===gp.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,h===gp.MASK&&(l.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==st&&(a.push(t.assignTexture(l,"normalMap",r.normalTexture)),l.normalScale=new ae(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;l.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==st&&(a.push(t.assignTexture(l,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==st){let d=r.emissiveFactor;l.emissive=new me().setRGB(d[0],d[1],d[2],Ln)}return r.emissiveTexture!==void 0&&o!==st&&a.push(t.assignTexture(l,"emissiveMap",r.emissiveTexture,ft)),Promise.all(a).then(function(){let d=new o(l);return r.name&&(d.name=r.name),fs(d,r),t.associations.set(d,{materials:e}),r.extensions&&$r(s,d,r),d})}createUniqueName(e){let t=Ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(l){return n[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(c){return Ex(c,l,t)})}let o=[];for(let l=0,c=e.length;l<c;l++){let a=e[l],h=MT(a),d=s[h];if(d)o.push(d.promise);else{let u;a.extensions&&a.extensions[St.KHR_DRACO_MESH_COMPRESSION]?u=r(a):u=Ex(new vt,a,t),a.mode===Pi.TRIANGLE_STRIP?u=u.then(f=>Xf(f,_l)):a.mode===Pi.TRIANGLE_FAN&&(u=u.then(f=>Xf(f,qo))),s[h]={primitive:a,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,l=[];for(let c=0,a=o.length;c<a;c++){let h=o[c].material===void 0?vT(this.cache):this.getDependency("material",o[c].material);l.push(h)}return l.push(t.loadGeometries(o)),Promise.all(l).then(async function(c){let a=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,p=h.length;f<p;f++){let x=h[f],g=o[f],m,v=a[f];if(g.mode===Pi.TRIANGLES||g.mode===Pi.TRIANGLE_STRIP||g.mode===Pi.TRIANGLE_FAN||g.mode===void 0){let S=r.isSkinnedMesh===!0,y=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");S&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=S&&y?new Rs(x,v):new ge(x,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===Pi.LINES)m=new Ua(x,v);else if(g.mode===Pi.LINE_STRIP)m=new Lr(x,v);else if(g.mode===Pi.LINE_LOOP)m=new Oa(x,v);else if(g.mode===Pi.POINTS)m=new Ps(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&yT(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),fs(m,r),g.extensions&&$r(s,m,g),t.assignFinalMaterial(m),d.push(m)}for(let f=0,p=d.length;f<p;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&$r(s,d[0],r),d[0];let u=new De;r.extensions&&$r(s,u,r),t.associations.set(u,{meshes:e});for(let f=0,p=d.length;f<p;f++)u.add(d[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new gn(Vi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new rs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fs(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,l=[],c=[];for(let a=0,h=o.length;a<h;a++){let d=o[a];if(d){l.push(d);let u=new Ze;r!==null&&u.fromArray(r.array,a*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[a])}return new Cs(l,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],l=[],c=[],a=[],h=[];for(let d=0,u=s.channels.length;d<u;d++){let f=s.channels[d],p=s.samplers[f.sampler],x=f.target,g=x.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,v=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),l.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",v)),a.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(a),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],p=d[2],x=d[3],g=d[4],m=[];for(let S=0,y=u.length;S<y;S++){let w=u[S],T=f[S],I=p[S],_=x[S],M=g[S];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let b=n._createAnimationTracks(w,T,I,_,M);if(b)for(let D=0;D<b.length;D++)m.push(b[D])}let v=new Ur(r,void 0,m);return fs(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(l){if(l.isMesh)for(let c=0,a=s.weights.length;c<a;c++)l.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],l=s.children||[];for(let a=0,h=l.length;a<h;a++)o.push(n.getDependency("node",l[a]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(a){let h=a[0],d=a[1],u=a[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,ST)});for(let f=0,p=d.length;f<p;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){let f=h.userData.pivot,p=d[0];h.pivot=new U().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",l=[],c=s._invokeOne(function(a){return a.createNodeMesh&&a.createNodeMesh(e)});return c&&l.push(c),r.camera!==void 0&&l.push(s.getDependency("camera",r.camera).then(function(a){return s._getNodeRef(s.cameraCache,r.camera,a)})),s._invokeAll(function(a){return a.createNodeAttachment&&a.createNodeAttachment(e)}).forEach(function(a){l.push(a)}),this.nodeCache[e]=Promise.all(l).then(function(a){let h;if(r.isBone===!0?h=new es:a.length>1?h=new De:a.length===1?h=a[0]:h=new pt,h!==a[0])for(let d=0,u=a.length;d<u;d++)h.add(a[d]);if(r.name&&(h.userData.name=r.name,h.name=o),fs(h,r),r.extensions&&$r(n,h,r),r.matrix!==void 0){let d=new Ze;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let d=s.associations.get(h);s.associations.set(h,{...d})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new De;n.name&&(r.name=s.createUniqueName(n.name)),fs(r,n),n.extensions&&$r(t,r,n);let o=n.nodes||[],l=[];for(let c=0,a=o.length;c<a;c++)l.push(s.getDependency("node",o[c]));return Promise.all(l).then(function(c){for(let h=0,d=c.length;h<d;h++){let u=c[h];u.parent!==null?r.add(ea(u)):r.add(u)}let a=h=>{let d=new Map;for(let[u,f]of s.associations)(u instanceof Hn||u instanceof Mn)&&d.set(u,f);return h.traverse(u=>{let f=s.associations.get(u);f!=null&&d.set(u,f)}),d};return s.associations=a(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],l=e.name?e.name:e.uuid,c=[];function a(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}hr[r.path]===hr.weights?(a(e),e.isGroup&&e.children.forEach(a)):c.push(l);let h;switch(hr[r.path]){case hr.weights:h=Ds;break;case hr.rotation:h=Ns;break;case hr.translation:case hr.scale:h=sr;break;default:n.itemSize===1?h=Ds:h=sr;break}let d=s.interpolation!==void 0?xT[s.interpolation]:Ar,u=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let x=new h(c[f]+"."+hr[r.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Hp(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ns?kp:ku;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ET(i,e,t){let n=e.attributes,s=new bn;if(n.POSITION!==void 0){let l=t.json.accessors[n.POSITION],c=l.min,a=l.max;if(c!==void 0&&a!==void 0){if(s.set(new U(c[0],c[1],c[2]),new U(a[0],a[1],a[2])),l.normalized){let h=Hp(ta[l.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let l=new U,c=new U;for(let a=0,h=r.length;a<h;a++){let d=r[a];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,p=u.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),u.normalized){let x=Hp(ta[u.componentType]);c.multiplyScalar(x)}l.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(l)}i.boundingBox=s;let o=new ai;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Ex(i,e,t){let n=e.attributes,s=[];function r(o,l){return t.getDependency("accessor",o).then(function(c){i.setAttribute(l,c)})}for(let o in n){let l=zp[o]||o.toLowerCase();l in i.attributes||s.push(r(n[o],l))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(l){i.setIndex(l)});s.push(o)}return gt.workingColorSpace!==Ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${gt.workingColorSpace}" not supported.`),fs(i,e),ET(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?_T(i,e.targets,t):i})}var Fl="assets/hd/z/",Ax=new ur,TT=new ui;Ax.register(i=>(i.textureLoader=new ui(i.options.manager),{name:"csp_img"}));var zu=(i,e)=>TT.loadAsync(i).then(t=>(t.flipY=!1,t.colorSpace=e?ft:Dn,t.anisotropy=4,t));var wT={walk:"Zombie_Walk_Fwd_Loop",run:"Jog_Fwd_Loop",idle:"Zombie_Idle_Loop",attack:"Zombie_Scratch",climb:"ClimbUp_1m",death:"Death01",hit:"Hit_Chest",hitHead:"Hit_Head",knock:"Hit_Knockback"};function wx(i,e,t){let n=i.scene;n.updateMatrixWorld(!0);let s=["LOD0","LOD1","LOD2"].map(T=>n.getObjectByName(T)).map(T=>T&&(T.isSkinnedMesh?T:T.children.find(I=>I.isSkinnedMesh))).filter(Boolean),r=s[0],o=new bn;r.geometry.computeBoundingBox(),o.copy(r.geometry.boundingBox).applyMatrix4(r.bindMatrix);let l=o.max.y-o.min.y,c=r.skeleton,a=c.bones.findIndex(T=>/^head$/i.test(T.name)),h=r.geometry.attributes.position,d=r.geometry.attributes.skinIndex,u=r.geometry.attributes.skinWeight,f=new U,p=null,x=-1e9,g=0,m=0;for(let T=0;T<h.count;T++){let I=0;for(let _=0;_<4;_++)d.getComponent(T,_)===a&&(I=Math.max(I,u.getComponent(T,_)));I<.5||(f.fromBufferAttribute(h,T).applyMatrix4(r.bindMatrix),g+=f.z,m++)}g/=Math.max(1,m);let v=Math.sign(g)||1;for(let T=0;T<h.count;T++){let I=0;for(let b=0;b<4;b++)d.getComponent(T,b)===a&&(I=Math.max(I,u.getComponent(T,b)));if(I<.5)continue;f.fromBufferAttribute(h,T).applyMatrix4(r.bindMatrix);let _=(f.y-o.min.y)/l;if(_<.86||_>.93)continue;let M=v*(f.z-g)-Math.abs(f.x)*3;M>x&&(x=M,p=f.clone())}p||(p=new U(0,o.min.y+.9*l,g+v*.08));let S=l/1.8,y=c.boneInverses[a],w=T=>new U(T*S,p.y+.035*S,p.z-v*.028*S).applyMatrix4(y);return{scene:n,H:l,box:o,front:v,eyes:p?{L:w(-.033),R:w(.033)}:null,map:e,nrm:t,nLods:s.length}}async function Xp(i){let e=u=>Ax.loadAsync(Fl+u),[t,n,s,r,o,l,c,a]=await Promise.all([e(i?"zombie_m.glb":"zombie_m_lo.glb"),e(i?"zombie_f.glb":"zombie_f_lo.glb"),e("zanim_ual1.glb"),e("zanim_ual2.glb"),zu(Fl+`zskin_m_${i?1024:512}.webp`,!0),zu(Fl+`zskin_f_${i?1024:512}.webp`,!0),i?zu(Fl+"znrm_m_1024.webp"):null,i?zu(Fl+"znrm_f_1024.webp"):null]),h={};for(let u of[...s.animations,...r.animations])h[u.name.replace(/^.*\|/,"")]=u;let d={};for(let[u,f]of Object.entries(wT))if(d[u]=h[f],!d[u])throw new Error("missing clip "+f);return AT(d.climb),{hi:i,m:wx(t,o,c),f:wx(n,l,a),clips:d}}function AT(i){for(let e of i.tracks)if(/pelvis\.position$/.test(e.name)){let t=e.values,n=t[0],s=t[1],r=t[2];for(let o=0;o<t.length;o+=3)t[o]=n,t[o+1]=s,t[o+2]=r}}var RT="float zh(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);} float zn(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(zh(i),zh(i+vec3(1,0,0)),f.x),mix(zh(i+vec3(0,1,0)),zh(i+vec3(1,1,0)),f.x),f.y),mix(mix(zh(i+vec3(0,0,1)),zh(i+vec3(1,0,1)),f.x),mix(zh(i+vec3(0,1,1)),zh(i+vec3(1,1,1)),f.x),f.y),f.z);}";function CT(i,e){let t=new Ge({map:i.map,normalMap:i.nrm||null,roughness:.62,metalness:0,emissive:0});return i.nrm&&t.normalScale.set(.8,.8),t.userData.u=e,t.onBeforeCompile=n=>{Object.assign(n.uniforms,e),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vB; uniform vec4 uBox;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec3 b = (bindMatrix * vec4(position, 1.)).xyz; vB = vec3((b.x - uBox.x) / uBox.w, (b.y - uBox.y) / uBox.w, (b.z - uBox.z) / uBox.w); }`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vB; uniform vec3 uShirt, uPants, uHair; uniform vec4 uCloth; uniform vec4 uMisc; float zCloth = 0., zBlood = 0.;
`+RT).replace("#include <map_fragment>",`#include <map_fragment>
      { float y = vB.y, ax = abs(vB.x), fz = vB.z * uMisc.y; vec3 q = vB * 22. + uCloth.w;
        float neck = 0.805 - 0.035 * (1. - smoothstep(0.0, 0.05, ax)) * step(0., fz);
        float shirt = (1. - uCloth.z) * max(step(0.515, y) * step(y, neck) * step(ax, 0.15), step(0.72, y) * step(y, 0.87) * step(0.1, ax) * step(ax, 0.12 + uCloth.x));
        float pants = step(uCloth.y, y) * step(y, 0.545) * step(ax, 0.17);
        float shoes = step(y, 0.045) * uMisc.x;
        float tear = smoothstep(0.66, 0.7, zn(q * 0.9) * 0.7 + zn(q * 2.7) * 0.3);
        float edge = smoothstep(0.58, 0.66, zn(q * 0.9) * 0.7 + zn(q * 2.7) * 0.3) - tear;
        float cl = max(shirt, pants) * (1. - tear);
        vec3 cc = shirt > 0.5 ? uShirt : uPants; cc *= 0.72 + 0.4 * zn(vB * 140.) ; cc *= mix(0.45, 1., smoothstep(0.04, 0.32, y)); cc *= 1. - edge * 0.5;
        float stain = smoothstep(0.55, 0.72, zn(vB * 9. + uCloth.w * 1.7)) * (0.55 + 0.45 * step(0.55, y));
        cc = mix(cc, vec3(0.075, 0.012, 0.01), stain * 0.8);
        diffuseColor.rgb = mix(diffuseColor.rgb, cc, cl);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05, 0.04, 0.035), shoes * (1. - cl));
        // patchy, balding hair; never on the face
        float hair = step(0.925, y) * max(step(fz, 0.015), step(0.962, y)) * smoothstep(1. - uMisc.z, 1.06 - uMisc.z, zn(vB * 55. + uCloth.w));
        diffuseColor.rgb = mix(diffuseColor.rgb, uHair * (0.7 + 0.5 * zn(vB * 400.)), hair * (1. - cl));
        // fresh blood around the mouth and down the chest
        float mouth = (1. - smoothstep(0.0, 0.06, abs(y - 0.905))) * step(0.01, fz) * (1. - smoothstep(0.02, 0.05, ax)) * smoothstep(0.35, 0.6, zn(vB * 70.));
        zBlood = max(mouth, stain * cl);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.12, 0.008, 0.006), mouth * 0.85);
        zCloth = max(cl, shoes); }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.95, zCloth); roughnessFactor = mix(roughnessFactor, 0.3, zBlood * 0.8);`)},t.customProgramCacheKey=()=>"zrig"+(i.nrm?"n":""),t}var PT=[5910576,3424346,5000244,3816e3,6969400,3365456,7227956,9078396,4602956,3026478,8025190],IT=[2501688,3813156,1909800,2898474,4866358,2306634],LT=[1709330,3811868,5917240,7236194,2761760],Vp=i=>i[Math.random()*i.length|0],Hu=new me,Gu=new U,vn=new pt,DT=new me(1,.92,.75);function NT(){let i=document.createElement("canvas");i.width=i.height=32;let e=i.getContext("2d"),t=e.createRadialGradient(16,16,1,16,16,16);t.addColorStop(0,"#fff"),t.addColorStop(.28,"rgba(255,255,255,.7)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32);let n=new Gt(i);return n.colorSpace=ft,n}function Rx(i){let e=i.zu;if(!e)return;let t=i.brute;e.uShirt.value.set(Vp(PT)).multiplyScalar(.7+Math.random()*.3),e.uPants.value.set(Vp(IT)),e.uHair.value.set(Vp(LT)),e.uCloth.value.set(t?0:Math.random()*.2,Math.random()<.2?.3:.05+Math.random()*.06,t||Math.random()<.12?1:0,Math.random()*50),e.uMisc.value.x=Math.random()<.25?0:1,e.uMisc.value.z=i.female?.75:Math.random()*.6,i.sk.color.setRGB(1,1,1).offsetHSL(0,0,-Math.random()*.15),t&&i.sk.color.setRGB(.95,.8,.75)}function UT(i,e,t){i.model&&(i.root.remove(i.model),i.mixer?.stopAllAction());let n=!i.brute&&e%3===2,s=n?t.f:t.m;i.female=n;let r=ea(s.scene),o=(n?1.72:1.8)/s.H;r.scale.setScalar(o),s.front<0&&(r.rotation.y=Math.PI);let l=i.zu||{uShirt:{value:new me},uPants:{value:new me},uHair:{value:new me},uCloth:{value:new At},uMisc:{value:new At(1,1,.3,0)}};l.uBox={value:new At(s.box.min.x+(s.box.max.x-s.box.min.x)/2,s.box.min.y,s.box.min.z+(s.box.max.z-s.box.min.z)/2,s.H)},l.uMisc.value.y=s.front,i.zu=l;let c=CT(s,l),a=i.sk;i.sk=c,a&&a!==c&&c.color.copy(a.color);let h=[];r.traverse(u=>{u.isSkinnedMesh&&(u.material=c,u.frustumCulled=!1,u.castShadow=!0,u.receiveShadow=!0,h.push(u))}),h.sort((u,f)=>u.name.localeCompare(f.name)),i.lods=t.hi?h:[null,...h],i.model=r,i.root.add(r),i.pelvis.traverse(u=>{u.isMesh&&(u.visible=!1)}),i.bones={head:r.getObjectByName(h[0].skeleton.bones.find(u=>/^head$/i.test(u.name)).name)},i.eyeL=s.eyes?.L||new U,i.eyeR=s.eyes?.R||new U;let d=i.mixer=new zr(r);i.acts={};for(let[u,f]of Object.entries(t.clips)){let p=d.clipAction(f);i.acts[u]=p}for(let u of["death","hit","hitHead","knock"])i.acts[u].setLoop(Xo,1),i.acts[u].clampWhenFinished=u==="death";i.cur=null,i.lastHit=0,i.vel=0,i.px=i.pos.x,i.pz=i.pos.z,i.rate=.9+Math.random()*.2,i.macc=0,i.state!=="dead"&&Rx(i)}function Jr(i,e,t=.25,n=1){let s=i.acts[e];if(s.timeScale=n*i.rate,i.cur===e)return;let r=i.cur&&i.acts[i.cur];s.reset(),s.enabled=!0,s.setEffectiveWeight(1),e!=="death"&&e!=="climb"&&(s.time=Math.random()*s.getClip().duration),s.play(),r&&r.crossFadeTo(s,t,!1),i.cur=e}var Wp=null;function OT(i,e){i.state==="dying"&&i.cur!=="death"&&Wp?.onBlood?.(i.pos.x,i.pos.z,1.1*i.scale);let t=i.pos.x-i.px,n=i.pos.z-i.pz;i.px=i.pos.x,i.pz=i.pos.z;let s=e>0?Math.min(8,Math.hypot(t,n)/e):0;if(i.vel+=(s-i.vel)*Math.min(1,e*6),i.state==="dying"?Jr(i,"death",.12,1.25):i.state==="climb"?Jr(i,"climb",.2,.62):i.state==="attack"?Jr(i,"attack",.3,1):i.attackT>0?Jr(i,"attack",.12,1.9):i.vel>(i.runner?1.6:2.6)?Jr(i,"run",.3,Math.min(1.6,Math.max(.7,i.vel/3.6))):i.vel>.12?Jr(i,"walk",.3,Math.min(2.4,Math.max(.55,i.vel/.95))):(i.cur!=="attack"||i.attackT<=0)&&Jr(i,"idle",.4,1),(i.cur==="run"||i.cur==="walk")&&(i.acts[i.cur].timeScale=i.rate*(i.cur==="run"?Math.min(1.6,Math.max(.7,i.vel/3.6)):Math.min(2.4,Math.max(.55,i.vel/.95)))),i.hitT>.15&&i.lastHit<=0&&Math.random()<.45&&Wp?.onBlood?.(i.pos.x+(Math.random()-.5)*.6,i.pos.z+(Math.random()-.5)*.6,.45+Math.random()*.4),i.hitT>.15&&i.lastHit<=0&&i.state!=="dying"){let r=i.acts[Math.random()<.5?"hit":"hitHead"];r.reset(),r.setEffectiveWeight(.65),r.fadeIn(.04),r.play(),i.hitAct=r,i.hitClock=.3}i.lastHit=i.hitT,i.hitAct&&(i.hitClock-=e,i.hitClock<=0&&(i.hitAct.fadeOut(.2),i.hitAct=null))}function qp(i,e){if(Wp=i,i.kit=e,i.list.forEach((u,f)=>UT(u,f,e)),i._zrig)return;i._zrig=!0;let t=i.list.length,n=new Vn(new an(1,1),new st({map:NT(),color:16777215,transparent:!0,depthWrite:!1,toneMapped:!0,fog:!0,side:Ot}),t*2);n.frustumCulled=!1,n.userData.noAO=!0,n.renderOrder=6,n.instanceColor=new xi(new Float32Array(t*6),3);let s=new st({color:0,transparent:!0,opacity:.28,depthWrite:!1}),r=new Vn(new li(.7,14),s,t);r.frustumCulled=!1,r.userData.noAO=!0,r.renderOrder=1,i.scene.add(n,r),i.eyeMesh=n,i.blob=r;let o=u=>{vn.position.set(0,-20,0),vn.scale.set(0,0,0),vn.updateMatrix(),n.setMatrixAt(u*2,vn.matrix),n.setMatrixAt(u*2+1,vn.matrix),r.setMatrixAt(u,vn.matrix)},l=i.setTier.bind(i);i.setTier=u=>{i.tier=u,s.opacity=u===0?.5:.26;for(let f of i.list)f.lods.forEach(p=>p&&(p.castShadow=u>0));l(u)};let c=i.spawn.bind(i);i.spawn=(...u)=>{let f=c(...u);return f&&(Rx(f),f.cur=null,f.mixer?.stopAllAction(),f.px=f.pos.x,f.pz=f.pos.z,f.vel=0),f};let a=i.update.bind(i),h=[],d=0;i.tick=(u,f,p)=>{d++,h.length=0;for(let v of i.list)v.root.visible&&v.state!=="dead"&&(v.d=Math.hypot(v.pos.x-p.x,v.pos.z-p.z),h.push(v));h.sort((v,S)=>v.d-S.d);let x=!!i.kit.hi;h.forEach((v,S)=>{let y=S<2&&v.d<7?0:S<6&&v.d<16?1:2;!x&&y===0&&(y=1),v.lods.forEach((T,I)=>T&&(T.visible=I===y)),OT(v,u),v.macc+=u;let w=y===2?v.d>40?3:2:1;(d%w===0||v.state==="dying")&&(v.mixer.update(v.macc),v.macc=0)});let g=i.cam&&i.cam.quaternion,m=!1;for(let v=0;v<i.list.length;v++){let S=i.list[v];if(!(S.root.visible&&S.state!=="dead")){S._eyeOn&&(S._eyeOn=!1,m=!0,o(v));continue}S._eyeOn=!0,m=!0,S.bones.head.updateWorldMatrix(!0,!1);let w=S.bones.head.matrixWorld,T=1+.12*Math.sin(f*(S.runner?9:3.1)+S.phase),I=.04*T*(S.flash>0?1.35:1)*(S.brute?1.2:1)*(S.state==="dying"?Math.max(0,1-S.dieT):1);Hu.setRGB(S.brute?.85:S.runner?1:.95,S.brute?.08:S.runner?.42:.16,.04),S.flash>0&&Hu.lerp(DT,Math.min(.65,S.flash*2.5)),g&&vn.quaternion.copy(g),Gu.copy(S.eyeL).applyMatrix4(w),vn.position.copy(Gu),vn.scale.setScalar(I),vn.updateMatrix(),n.setMatrixAt(v*2,vn.matrix),n.setColorAt(v*2,Hu),Gu.copy(S.eyeR).applyMatrix4(w),vn.position.copy(Gu),vn.updateMatrix(),n.setMatrixAt(v*2+1,vn.matrix),n.setColorAt(v*2+1,Hu);let _=S.state==="dying"?Math.min(.85,S.dieT*.45):0;vn.quaternion.identity(),vn.position.set(S.pos.x,.04,S.pos.z),vn.rotation.set(-Math.PI/2,0,0),vn.scale.setScalar(Math.max(.01,S.scale*(S.brute?1.15:.92)*(1-_))),vn.updateMatrix(),r.setMatrixAt(v,vn.matrix)}m&&(n.instanceMatrix.needsUpdate=!0,n.instanceColor.needsUpdate=!0,r.instanceMatrix.needsUpdate=!0)},i.update=(u,f,p,...x)=>{a(u,f,p,...x),i.tick(u,f,p),i._ticked=!0},i.lodCounts=()=>{let u=[0,0,0];for(let f of i.list)f.root.visible&&f.lods.forEach((p,x)=>{p&&p.visible&&u[x]++});return u}}var Xx=[1638320,16757575,7059711,16739285],ni={camoA:"#9C8A6B",camoB:"#7A6A4F",camoC:"#5E5A3E",camoD:"#B8A887",gear:7232320,helm:9074262,dark:2828839,glove:6052412,boot:10849382,sole:3813672,gaiter:5197880,skin:12159850,glass:1974050,rifle:1710618,rail:2763306,strap:3814184},Cx="assets/hd/soldier/",qx=new ur;qx.register(i=>(i.textureLoader=new ui(i.options.manager),{name:"csp_img"}));var kl=null;var Yp={rim:{value:.45},fill:{value:.1},rimCol:{value:new me(.62,.72,.95)}};function Px(i,e){i.onBeforeCompile=t=>{t.uniforms.uTmRim=Yp.rim,t.uniforms.uTmFill=Yp.fill,t.uniforms.uTmRimCol=Yp.rimCol,t.fragmentShader=`uniform float uTmRim;
uniform float uTmFill;
uniform vec3 uTmRimCol;
`+t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      { float tmF = pow(1.0 - saturate(dot(normal, normalize(vViewPosition))), 3.0);
        totalEmissiveRadiance += uTmRimCol * (tmF * uTmRim * ${e.toFixed(2)}) + diffuseColor.rgb * uTmFill; }`)},i.customProgramCacheKey=()=>"tmlight"+e}async function Yx(i){let e=new ui,t=(d,u)=>e.loadAsync(Cx+d).then(f=>(f.flipY=!1,f.colorSpace=u?ft:Dn,f.anisotropy=4,f.wrapS=f.wrapT=Cn,f.needsUpdate=!0,f)),n=i?1024:512,[s,r,o,l]=await Promise.all([qx.loadAsync(Cx+(i?"soldier.glb":"soldier_lo.glb")),t(`soldier_diff_${n}.webp`,!0),t(`soldier_nrm_${n}.webp`,!1),t(`soldier_orm_${n}.webp`,!1)]),c=new Ge({map:r,normalMap:o,normalScale:new ae(1,-1),roughnessMap:l,metalnessMap:l,roughness:.92,metalness:.05});c.color.setScalar(.82);let a=new Ge({color:1973790,roughness:.5,metalness:.3});Px(c,1),Px(a,.6),s.scene.updateMatrixWorld(!0),s.scene.traverse(d=>{if(!d.isMesh)return;let u=/rifle/i.test(d.name);d.material=u?a:c,d.castShadow=!0,d.receiveShadow=!0,d.frustumCulled=!1});let h={};for(let d of s.animations||[])h[d.name]=d;return kl={hi:i,scene:s.scene,clips:h,bodyMat:c,rifleMat:a},kl}var Ix=["root","hips","spine","chest","neck","head","clavL","upperL","lowerL","handL","clavR","upperR","lowerR","handR","thighL","calfL","footL","toeL","thighR","calfR","footR","toeR","weapon"];function FT(i){let e={};i.traverse(t=>{(t.isBone||Ix.includes(t.name))&&(e[t.name]=t)});for(let t of Ix)e[t]||(e[t]=i.getObjectByName(t));return e}function BT(i,e){let t=(e%4+4)%4,n=jx(),s=ea(kl.scene);s.traverse(v=>{if(!v.isMesh)return;let S=v.material;v.material=S.clone(),v.material.onBeforeCompile=S.onBeforeCompile,v.material.customProgramCacheKey=S.customProgramCacheKey});let r=FT(s),o=new zr(s),l={};for(let[v,S]of Object.entries(kl.clips)){if(!S||!S.tracks.length)continue;let y=o.clipAction(S);y.enabled=!0,y.setEffectiveWeight(0),v==="reload"||v==="flinch"||v==="aim"?(y.setLoop(Xo,1),y.clampWhenFinished=!0):y.setLoop(lu),l[v]=y}l.idle&&(l.idle.setEffectiveWeight(1),l.idle.play());let c=new De,a=new De;s.scale.z=-1,a.add(s),c.add(a);let h=to(it(.05,.035,.01,.002),n.teams[t]);h.position.set(-.075,.02,-.06),h.castShadow=!1,(r.upperL||r.clavL||r.chest||a).add(h);let d=null;s.traverse(v=>{v.isMesh&&/rifle/i.test(v.name)&&(d=v)});let u=Xu(n);u.visible=!1,r.weapon?r.weapon.add(u):a.add(u);let f=Xu(n);f.visible=!1,r.handL&&r.handL.add(f);let p=$x(i,t);c.add(p);let x=new ge(new Jt(.07,8,6),new st({color:1638320}));x.position.y=2.45,x.visible=!1,c.add(x);let g=[],m=new Set;return c.traverse(v=>{if(!v.isMesh||!v.material)return;let S=Array.isArray(v.material)?v.material:[v.material];for(let y of S)m.has(y)||(m.add(y),g.push(y))}),c.userData={body:a,gun:d,gun2:f,name:i,talk:x,gunId:"",map:r,mixer:o,acts:l,kit:!0,weapons:{rifle:d,pistol:u},mount:r.weapon||null,mats:g,tag:p,phase:0,distAcc:0,spd:0,fwd:0,strafe:0,conn:!0,stats:Jx(c),lodFar:[h],lod:0,recoilT:0,reloadT:0,flinchT:0,plantL:null,plantR:null,lastMag:null,lastHp:null,clipW:{idle:1,walk:0,run:0,strafe:0}},Yu(c,"rifle"),Hs(c,{dt:0,t:0,speed:0,pitch:0,down:!1}),c}function kT(i,{dt:e,speed:t,fwd:n,strafe:s,pitch:r,down:o,dist:l,recoil:c,reload:a,flinch:h}){let d=i.userData,u=d.acts||{};ev(i,l);let f=Math.max(0,t||0),p=f>.35,x=p?Vi.smoothstep(f,2.2,4.2):0,g=p?1-x:0,v=p&&!x&&Math.abs(s||0)>Math.abs(n||0)+.25?Math.min(1,g):0;v&&(g*=1-v);let y={idle:Math.max(0,1-g-x-v),walk:g,run:x,strafe:v},w=Math.min(1,(e||.016)*8);d.clipW=d.clipW||{idle:1,walk:0,run:0,strafe:0};let T=Vi.clamp(f*1.333/.62,.7,2.4),I=Vi.clamp(f*.833/1.05,.8,2.2);for(let M of["idle","walk","run","strafe"]){let b=u[M];if(!b)continue;d.clipW[M]+=(y[M]-d.clipW[M])*w;let D=d.clipW[M];D>.02?(b.isRunning()||b.play(),b.setEffectiveWeight(D),M==="walk"?b.setEffectiveTimeScale((n||0)<-.2?-T:T):M==="run"?b.setEffectiveTimeScale((n||0)<-.2?-I:I):M==="strafe"?b.setEffectiveTimeScale((s||0)<0?-1:1):b.setEffectiveTimeScale(1)):(b.setEffectiveWeight(0),b.isRunning()&&b.stop())}a>0&&u.reload&&(u.reload.reset().setEffectiveWeight(1).play(),d.reloadT=u.reload.getClip().duration),h>0&&u.flinch&&(u.flinch.reset().setEffectiveWeight(1).play(),d.flinchT=u.flinch.getClip().duration),c>0&&(d.recoilT=1),d.reloadT>0&&(d.reloadT=Math.max(0,d.reloadT-e)),d.flinchT>0&&(d.flinchT=Math.max(0,d.flinchT-e));let _=!p&&Math.abs(r||0)>.12?Math.min(1,Math.abs(r)*1.2):0;if(u.aim&&(_>.05?(u.aim.isRunning()||u.aim.play(),u.aim.setEffectiveWeight(_)):(u.aim.setEffectiveWeight(0),u.aim.isRunning()&&u.aim.weight===0&&u.aim.stop())),d.mixer.update(e||0),d.map.chest&&d.map.chest.rotateX((r||0)*.65),d.map.head&&d.map.head.rotateX((r||0)*.35),d.recoilT>0){let M=d.recoilT;d.map.weapon&&d.map.weapon.rotateX(M*.35),d.map.chest&&d.map.chest.rotateX(M*.08),d.recoilT=Math.max(0,d.recoilT-(e||.016)*6)}}function Zx(i,e){let t=document.createElement("canvas");t.width=t.height=i,e(t.getContext("2d"),i);let n=new Gt(t);return n.anisotropy=4,n.wrapS=n.wrapT=en,n.needsUpdate=!0,n}var Vu=i=>{let e=i[0]==="#"?i.slice(1):i;return[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)]},Lx=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t],dr=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/Math.max(1e-6,e-i)));return n*n*(3-2*n)};function zT(){let i=Vu(ni.camoA),e=Vu(ni.camoB),t=Vu(ni.camoC),n=Vu(ni.camoD);return Zx(512,(s,r)=>{let o=s.createImageData(r,r),l=o.data,c=[];for(let a=0;a<80;a++)c.push({x:Math.random()*r,y:Math.random()*r,rx:16+Math.random()*72,ry:10+Math.random()*52,a:Math.random()*6.28,c:[e,t,n,e,t][a%5]});for(let a=0;a<r;a++)for(let h=0;h<r;h++){let d=Math.sin(h*.033+a*.021)*Math.cos(h*.018-a*.029),u=Lx(i,e,.2+.12*d);for(let x of c){let g=h-x.x,m=a-x.y,v=Math.cos(x.a),S=Math.sin(x.a),y=(g*v+m*S)/x.rx,w=(-g*S+m*v)/x.ry,T=y*y+w*w;T<1&&(u=Lx(u,x.c,(1-T)*.5))}let f=Math.sin(h*1.7+a*2.1)*2.5+(Math.random()-.5)*5,p=(a*r+h)*4;l[p]=Math.max(0,Math.min(255,u[0]+f)),l[p+1]=Math.max(0,Math.min(255,u[1]+f*.9)),l[p+2]=Math.max(0,Math.min(255,u[2]+f*.7)),l[p+3]=255}s.putImageData(o,0,0)})}function e0(i,e,t){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),r=s.createImageData(i,i),o=r.data,l=(a,h)=>e[(h+i)%i*i+(a+i)%i];for(let a=0;a<i;a++)for(let h=0;h<i;h++){let d=(l(h+1,a)-l(h-1,a))*t,u=(l(h,a+1)-l(h,a-1))*t,f=-d,p=-u,x=1,g=Math.hypot(f,p,x)||1,m=(a*i+h)*4;o[m]=f/g*127+128,o[m+1]=p/g*127+128,o[m+2]=x/g*127+128,o[m+3]=255}s.putImageData(r,0,0);let c=new Gt(n);return c.colorSpace=Dn,c.wrapS=c.wrapT=en,c.anisotropy=4,c}function HT(){let e=new Float32Array(262144);for(let t=0;t<512;t++)for(let n=0;n<512;n++){let s=(n%4<2?.4:0)+(t%4<2?.25:0),r=Math.sin(n*.038+Math.sin(t*.028)*2)*.5+Math.sin(t*.065+n*.02)*.32;e[t*512+n]=s*.4+r}return{nor:e0(512,e,1.8),rough:(()=>{let t=Zx(256,(n,s)=>{let r=n.createImageData(s,s),o=r.data;for(let l=0;l<s*s;l++){let c=195+(Math.random()*45|0);o[l*4]=o[l*4+1]=c,o[l*4+2]=170,o[l*4+3]=255}n.putImageData(r,0,0)});return t.colorSpace=Dn,t})()}}function GT(){let e=new Float32Array(65536);for(let t=0;t<256;t++)for(let n=0;n<256;n++)e[t*256+n]=Math.sin(n*.2)*.15+Math.sin(t*.31+n*.07)*.2+Math.random()*.25;return e0(256,e,2.2)}function VT(){let e=new Float32Array(65536);for(let t=0;t<256;t++)for(let n=0;n<256;n++)e[t*256+n]=((n+t*3)%9<1?.6:0)+Math.random()*.15;return e0(256,e,1.4)}var Wu;function jx(){if(Wu)return Wu;let i=zT();i.colorSpace=ft;let{nor:e,rough:t}=HT(),n=GT(),s=VT(),r=new Ge({map:i,normalMap:e,normalScale:new ae(.55,.55),roughnessMap:t,roughness:.9,metalness:0,vertexColors:!0,color:16777215}),o=new Ge({color:ni.gaiter,roughness:.92,metalness:0,normalMap:e,normalScale:new ae(.3,.3)}),l=new Ge({color:ni.gear,roughness:.88,metalness:0,normalMap:e,normalScale:new ae(.85,.85),vertexColors:!0}),c=new Ge({map:i,color:12890762,roughness:.78,metalness:0,normalMap:e,normalScale:new ae(.55,.55)}),a=new Ge({color:ni.dark,roughness:.55,metalness:.12,normalMap:s,normalScale:new ae(.3,.3)}),h=new Ge({color:ni.glove,roughness:.86,metalness:0,normalMap:n,normalScale:new ae(.4,.4)}),d=new Ge({color:ni.boot,roughness:.9,metalness:0,normalMap:n,normalScale:new ae(.7,.7)}),u=new Ge({color:ni.sole,roughness:.96,metalness:0}),f=new Ge({color:ni.skin,roughness:.62,metalness:0}),p=new Ge({color:ni.glass,roughness:.12,metalness:.45,side:Ot}),x=new Ge({color:ni.rifle,roughness:.45,metalness:.32,normalMap:s,normalScale:new ae(.35,.35)}),g=new Ge({color:ni.rail,roughness:.4,metalness:.38,normalMap:s,normalScale:new ae(.4,.4)}),m=new Ge({color:ni.strap,roughness:.85,metalness:0}),v=Xx.map(S=>new Ge({color:S,roughness:.55,metalness:0,emissive:S,emissiveIntensity:.12}));return Wu={fabric:r,gaiter:o,gear:l,helm:c,dark:a,glove:h,boot:d,sole:u,skin:f,glass:p,rifle:x,rail:g,strap:m,teams:v},Wu}var WT=new Ze,Kp=new on,Dx=new $n,Nx=new U,Ux=new U;function Ve(i,e,t,n,s=0,r=0,o=0,l=1,c=1,a=1){let h=i.clone();return Nx.set(e,t,n),Dx.set(s,r,o),Kp.setFromEuler(Dx),Ux.set(l,c,a),h.applyMatrix4(WT.compose(Nx,Kp,Ux)),h}function it(i,e,t,n=.01){return new Jo(i,e,t,1,n)}function eo(i,e,t,n=10){return new It(i,e,t,n,1,!1)}function XT(i){if(!i)return i;for(let e of Object.keys(i.attributes))["position","normal","uv","color","skinIndex","skinWeight"].includes(e)||i.deleteAttribute(e);if(i.attributes.normal||i.computeVertexNormals(),!i.attributes.uv){let e=i.attributes.position.count,t=new Float32Array(e*2);i.setAttribute("uv",new lt(t,2))}if(!i.index){let e=i.attributes.position.count,t=e<65536?new Uint16Array(e):new Uint32Array(e);for(let n=0;n<e;n++)t[n]=n;i.setIndex(new ht(t,1))}return i}function Kx(i){let e=yu(i.filter(Boolean).map(XT),!1);if(!e)throw new Error("mergeGeometries failed");return e}function to(i,e){let t=new ge(i,e);return t.castShadow=!0,t.receiveShadow=!0,t}function _n(i,e){let t=i.attributes.position.count,n=new Float32Array(t*3);for(let s=0;s<t;s++)n[s*3]=n[s*3+1]=n[s*3+2]=e;return i.setAttribute("color",new lt(n,3)),i}function ii(i,e){let t=Kx(i.map(n=>n.attributes&&n.attributes.color?n:_n(n,.85)));return to(t,e)}function bi(i,e,t,n,s,r,o,l,c,a,{segs:h=10,rings:d=6,bulge:u=0,ao0:f=1,ao1:p=1,dust:x=0,uvS:g=1.6,flare0:m=0,flare1:v=0}={}){let S=n-i,y=s-e,w=r-t,T=Math.hypot(S,y,w)||1,I=S/T,_=y/T,M=w/T,b=0,D=1,k=0;Math.abs(_)>.9&&(b=1,D=0);let L=D*M-k*_,R=k*I-b*M,N=b*_-D*I,P=Math.hypot(L,R,N)||1;L/=P,R/=P,N/=P;let O=_*N-M*R,G=M*L-I*N,F=I*R-_*L,z=[],Z=[],se=[],ce=[],Ce=[],X=[],Te=[],V=h+1;for(let be=0;be<=d;be++){let Pe=be/d,$=dr(.28,.78,Pe),he=(o+(l-o)*Pe+Math.sin(Pe*Math.PI)*u)*(Pe<.12?1+m*(1-Pe/.12):Pe>.88?1+v*((Pe-.88)/.12):1),_e=f+(p-f)*Pe,ie=x*dr(.55,1,Pe),ue=Math.min(1,_e*(1+ie*.22)),ve=Math.min(1,_e*(1+ie*.16)),de=Math.min(1,_e*(1-ie*.04)),Se=i+S*Pe,We=e+y*Pe,ze=t+w*Pe;for(let je=0;je<=h;je++){let et=je/h*Math.PI*2,H=Math.cos(et),dt=Math.sin(et),rt=L*H+O*dt,B=R*H+G*dt,E=N*H+F*dt;z.push(Se+rt*he,We+B*he,ze+E*he),Z.push(rt,B,E),se.push(je/h*g,Pe*T*g),ce.push(ue,ve,de),Ce.push(c,a,0,0),X.push(1-$,$,0,0)}}for(let be=0;be<d;be++)for(let Pe=0;Pe<h;Pe++){let $=be*V+Pe,he=$+1,_e=$+V,ie=_e+1;Te.push($,_e,he,he,_e,ie)}let te=new vt;return te.setAttribute("position",new lt(z,3)),te.setAttribute("normal",new lt(Z,3)),te.setAttribute("uv",new lt(se,2)),te.setAttribute("color",new lt(ce,3)),te.setAttribute("skinIndex",new nr(Ce,4)),te.setAttribute("skinWeight",new lt(X,4)),te.setIndex(Te),te}var $p={root:[0,0,0],hips:[0,.94,0],spine:[0,1.12,.015],chest:[0,1.34,.01],neck:[0,1.5,.025],head:[0,1.58,.03],clavL:[-.08,1.47,.02],clavR:[.08,1.47,.02],upperL:[-.24,1.46,.02],upperR:[.24,1.46,.02],lowerL:[-.52,1.46,.02],lowerR:[.52,1.46,.02],handL:[-.76,1.46,.02],handR:[.76,1.46,.02],thighL:[-.1,.94,0],thighR:[.1,.94,0],calfL:[-.105,.5,0],calfR:[.105,.5,0],footL:[-.105,.08,.03],footR:[.105,.08,.03]},Ox=["root","hips","spine","chest","neck","head","clavL","upperL","lowerL","handL","clavR","upperR","lowerR","handR","thighL","calfL","footL","thighR","calfR","footR"],Fx={hips:"root",spine:"hips",chest:"spine",neck:"chest",head:"neck",clavL:"chest",upperL:"clavL",lowerL:"upperL",handL:"lowerL",clavR:"chest",upperR:"clavR",lowerR:"upperR",handR:"lowerR",thighL:"hips",calfL:"thighL",footL:"calfL",thighR:"hips",calfR:"thighR",footR:"calfR"};function qT(){let i={},e=[];for(let t of Ox){let n=new es;n.name=t,i[t]=n,e.push(n)}for(let t of Ox){if(t==="root")continue;let n=$p[Fx[t]],s=$p[t];i[t].position.set(s[0]-n[0],s[1]-n[1],s[2]-n[2]),i[Fx[t]].add(i[t])}return{map:i,list:e,skel:new Cs(e)}}function YT(i){let e=$p,t=i,n=[];n.push(bi(e.hips[0],e.hips[1]-.07,e.hips[2],e.spine[0],e.spine[1],e.spine[2],.155,.15,t.hips,t.spine,{segs:12,rings:5,bulge:.018,ao0:.74,ao1:.9})),n.push(bi(e.spine[0],e.spine[1],e.spine[2],e.chest[0],e.chest[1]+.05,e.chest[2],.15,.19,t.spine,t.chest,{segs:12,rings:6,bulge:.025,ao0:.9,ao1:.96})),n.push(bi(e.chest[0],e.chest[1]+.04,e.chest[2],e.neck[0],e.neck[1]-.01,e.neck[2],.175,.095,t.chest,t.neck,{segs:12,rings:4,ao0:.95,ao1:.82})),n.push(bi(e.upperL[0]+.05,e.upperL[1]+.01,e.upperL[2],e.upperL[0]-.05,e.upperL[1]-.02,e.upperL[2],.09,.072,t.clavL,t.upperL,{segs:10,rings:4,bulge:.022,ao0:.86,ao1:.9})),n.push(bi(e.upperR[0]-.05,e.upperR[1]+.01,e.upperR[2],e.upperR[0]+.05,e.upperR[1]-.02,e.upperR[2],.09,.072,t.clavR,t.upperR,{segs:10,rings:4,bulge:.022,ao0:.86,ao1:.9})),n.push(bi(e.upperL[0],e.upperL[1],e.upperL[2],e.lowerL[0],e.lowerL[1],e.lowerL[2],.072,.06,t.upperL,t.lowerL,{segs:10,rings:5,bulge:.014,ao0:.9,ao1:.86})),n.push(bi(e.upperR[0],e.upperR[1],e.upperR[2],e.lowerR[0],e.lowerR[1],e.lowerR[2],.072,.06,t.upperR,t.lowerR,{segs:10,rings:5,bulge:.014,ao0:.9,ao1:.86})),n.push(bi(e.lowerL[0],e.lowerL[1],e.lowerL[2],e.handL[0]+.035,e.handL[1],e.handL[2],.056,.05,t.lowerL,t.handL,{segs:10,rings:5,flare1:.4,ao0:.86,ao1:.8})),n.push(bi(e.lowerR[0],e.lowerR[1],e.lowerR[2],e.handR[0]-.035,e.handR[1],e.handR[2],.056,.05,t.lowerR,t.handR,{segs:10,rings:5,flare1:.4,ao0:.86,ao1:.8})),n.push(bi(e.thighL[0],e.thighL[1]+.02,e.thighL[2],e.calfL[0],e.calfL[1]+.05,e.calfL[2],.1,.078,t.thighL,t.calfL,{segs:12,rings:6,bulge:.022,ao0:.8,ao1:.9,dust:.12})),n.push(bi(e.thighR[0],e.thighR[1]+.02,e.thighR[2],e.calfR[0],e.calfR[1]+.05,e.calfR[2],.1,.078,t.thighR,t.calfR,{segs:12,rings:6,bulge:.022,ao0:.8,ao1:.9,dust:.12})),n.push(bi(e.calfL[0],e.calfL[1]+.05,e.calfL[2],e.footL[0],e.footL[1]+.13,e.footL[2],.076,.055,t.calfL,t.footL,{segs:10,rings:6,bulge:.014,flare0:.22,ao0:.9,ao1:.86,dust:.7})),n.push(bi(e.calfR[0],e.calfR[1]+.05,e.calfR[2],e.footR[0],e.footR[1]+.13,e.footR[2],.076,.055,t.calfR,t.footR,{segs:10,rings:6,bulge:.014,flare0:.22,ao0:.9,ao1:.86,dust:.7}));for(let[s,r]of[[-1,i.thighL],[1,i.thighR]]){let o=_n(Ve(it(.085,.12,.06,.012),s*.175,.7,.03,.12,0,s*.1),.82),l=o.attributes.position.count,c=new Uint16Array(l*4),a=new Float32Array(l*4);for(let h=0;h<l;h++)c[h*4]=r,a[h*4]=1;o.setAttribute("skinIndex",new nr(c,4)),o.setAttribute("skinWeight",new lt(a,4)),n.push(o)}return Kx(n)}function ZT(i,e){let t=[new ae(.1,.02),new ae(.12,.015),new ae(.138,.03),new ae(.142,.07),new ae(.135,.13),new ae(.11,.18),new ae(.06,.205),new ae(0,.2)],n=new ja(t,16),s=[Ve(n,0,0,.01),Ve(it(.2,.045,.09,.012),0,.03,.1,.35,0,0)],r=[Ve(it(.06,.038,.045,.006),0,.13,-.12,-.3,0,0),Ve(it(.045,.028,.032,.004),0,.15,-.145,-.45,0,0),Ve(eo(.019,.017,.075,8),-.022,.185,-.08,1.15,0,0),Ve(eo(.019,.017,.075,8),.022,.185,-.08,1.15,0,0),Ve(it(.072,.03,.032,.004),0,.175,-.05,-.9,0,0),Ve(it(.018,.05,.13,.004),-.135,.08,0),Ve(it(.018,.05,.13,.004),.135,.08,0),Ve(new Jt(.055,10,8,0,Math.PI*2,0,Math.PI*.75),-.155,.05,.01,0,0,0,.72,1,.92),Ve(new Jt(.055,10,8,0,Math.PI*2,0,Math.PI*.75),.155,.05,.01,0,0,0,.72,1,.92),Ve(it(.016,.1,.012,.003),-.09,-.02,0,0,0,.45),Ve(it(.016,.1,.012,.003),.09,-.02,0,0,0,-.45),Ve(it(.15,.012,.012,.003),0,-.07,.02)],o=new De;o.add(ii(s,i.helm)),o.add(ii(r,i.dark));let l=to(it(.055,.03,.01,.003),i.teams[e]);return l.position.set(0,.1,.145),l.castShadow=!1,o.add(l),o}function jT(i){let e=new De,t=new ge(new Jt(.105,12,10),i.skin);t.scale.set(.96,1.02,.98),t.position.set(0,.07,0),t.castShadow=!0,e.add(t);let n=ii([Ve(new It(.09,.1,.14,12,1,!0),0,-.01,.015),Ve(new Jt(.102,12,8,0,Math.PI*2,0,Math.PI*.62),0,.06,.02,0,0,0,1.04,.85,1.1)],i.gaiter);e.add(n);let s=ii([Ve(new li(.036,12),-.04,.105,-.112,0,Math.PI,0),Ve(new li(.036,12),.04,.105,-.112,0,Math.PI,0)],i.glass);return e.add(s),e.add(ii([Ve(it(.032,.012,.012,.002),0,.105,-.112),Ve(it(.06,.012,.012,.002),-.075,.1,-.05,0,.9,0),Ve(it(.06,.012,.012,.002),.075,.1,-.05,0,-.9,0),Ve(new Jt(.012,8,6),-.032,.105,-.1),Ve(new Jt(.012,8,6),.032,.105,-.1)],i.dark)),e}function KT(i,e){let t=[_n(Ve(it(.3,.34,.09,.02),0,.02,-.145),.72),_n(Ve(it(.3,.32,.08,.02),0,.03,.145),.68),_n(Ve(it(.075,.06,.24,.012),-.125,.19,0,.18,0,0),.74),_n(Ve(it(.075,.06,.24,.012),.125,.19,0,.18,0,0),.74),_n(Ve(it(.09,.18,.24,.016),-.195,-.02,0),.7),_n(Ve(it(.09,.18,.24,.016),.195,-.02,0),.7),_n(Ve(it(.24,.2,.09,.016),0,.04,.21),.7),_n(Ve(it(.18,.11,.08,.014),0,-.12,.17),.72),_n(Ve(it(.34,.045,.24,.01),0,-.18,0),.7)],n=[-.085,0,.085].map(l=>_n(Ve(it(.078,.15,.075,.01),l,-.02,-.195),.8)),s=[_n(Ve(it(.12,.07,.055,.01),0,.13,-.195),.78),_n(Ve(it(.065,.11,.055,.01),-.13,.08,-.195),.76),_n(Ve(it(.075,.11,.08,.01),.23,0,-.07),.76),_n(Ve(it(.085,.11,.065,.01),-.13,-.22,-.1),.76)],r=new De;r.add(ii([...t,...n,...s],i.gear)),r.add(ii([Ve(it(.06,.02,.05,.003),-.085,.05,-.21),Ve(it(.06,.02,.05,.003),0,.05,-.21),Ve(it(.06,.02,.05,.003),.085,.05,-.21),Ve(eo(.006,.004,.16,6),-.13,.2,-.195)],i.dark));let o=to(it(.05,.04,.01,.002),i.teams[e]);return o.position.set(-.17,.15,-.155),o.castShadow=!1,r.add(o),r}function Bx(i){let e=new De;return e.add(ii([Ve(it(.115,.125,.15,.02),0,.085,.02),Ve(it(.11,.07,.09,.02),0,.055,-.09)],i.boot)),e.add(ii([Ve(it(.12,.038,.25,.012),0,.018,-.02),Ve(it(.112,.04,.07,.01),0,.03,.085)],i.sole)),e}function kx(i){return ii([_n(Ve(it(.11,.13,.065,.02),0,0,-.08),.82),_n(Ve(it(.09,.075,.045,.016),0,.01,-.11,.35,0,0),.85)],i.gear)}function $T(i){let e=new De;return e.add(ii([_n(Ve(it(.075,.17,.085,.014),.09,0,0),.8),_n(Ve(it(.022,.2,.022,.006),.04,.08,0),.75)],i.gear)),e.add(to(Ve(it(.032,.12,.055,.008),.09,0,-.01),i.rifle)),e}function zx(i,e){return ii([Ve(it(.06,.038,.095,.014),0,0,-.02),Ve(it(.028,.028,.06,.01),e*.042,.012,-.01,0,e*.5,.4),Ve(it(.05,.02,.05,.008),0,.012,-.07)],i.glove)}function JT(i){let e=i.rifle,t=i.rail,n=ii([Ve(it(.048,.058,.24,.006),0,.032,-.05),Ve(it(.032,.095,.042,.006),0,-.03,.02),Ve(it(.03,.13,.045,.006),0,-.04,-.08),Ve(it(.036,.07,.2,.006),0,.03,.17),Ve(it(.055,.095,.032,.006),0,.02,.28),Ve(eo(.013,.012,.3,8),0,.032,-.5,Math.PI/2,0,0)],e),s=ii([Ve(it(.04,.042,.23,.004),0,.026,-.26),Ve(it(.022,.026,.18,.003),0,.058,-.04),Ve(it(.028,.042,.085,.004),0,.09,-.02),Ve(eo(.017,.017,.055,8),0,.105,-.02,Math.PI/2,0,0),Ve(eo(.017,.015,.045,8),0,.032,-.66,Math.PI/2,0,0)],t),r=new De;r.add(n,s);let o=new pt;o.position.set(0,-.02,.02),r.add(o);let l=new pt;return l.position.set(-.01,0,-.28),r.add(l),r.add(to(Ve(it(.012,.012,.38,.003),.03,-.02,-.04,.35,0,0),i.strap)),r.userData={grip:o,guard:l,length:.85},r}function Xu(i){let e=new De;e.add(ii([Ve(it(.032,.085,.042,.005),0,-.03,0),Ve(it(.03,.036,.17,.004),0,.02,-.05),Ve(eo(.008,.008,.04,6),0,.02,-.15,Math.PI/2,0,0)],i.rifle));let t=new pt;return t.position.set(0,-.02,0),e.add(t),e.userData={grip:t,guard:t,length:.22},e}function $x(i,e){let t=document.createElement("canvas");t.width=256,t.height=64;let n=t.getContext("2d");n.font="800 34px system-ui,sans-serif",n.textAlign="center",n.fillStyle="#"+Xx[e%4].toString(16).padStart(6,"0"),n.fillText(i,128,44);let s=new Jn(new Gn({map:new Gt(t),transparent:!0,depthWrite:!1}));return s.scale.set(1.2,.3,1),s.position.y=2.2,s}function QT(i){let e=new Map,t=n=>(e.has(n)||e.set(n,n.clone()),e.get(n));return i.traverse(n=>{n.isMesh&&(n.material=Array.isArray(n.material)?n.material.map(t):t(n.material))}),[...e.values()]}function Jx(i){let e=new Set,t=0,n=0,s=0;return i.traverse(r=>{if(!r.isMesh)return;n++,r.visible&&s++;let o=r.geometry;e.has(o.uuid)||(e.add(o.uuid),t+=(o.index?o.index.count:o.attributes.position.count)/3)}),{meshes:n,visible:s,tris:Math.round(t)}}var Hx;function ew(i){return Hx||(Hx=YT(i))}function qu(i,e){return kl?BT(i,e):tw(i,e)}function tw(i,e){let t=(e%4+4)%4,n=jx(),s=new De,r=new De;s.add(r);let{map:o,list:l,skel:c}=qT(),a={};l.forEach((M,b)=>{a[M.name]=b});let h=new Rs(ew(a),n.fabric);h.castShadow=!0,h.receiveShadow=!0,h.add(o.root),h.bind(c),r.add(h);let d=jT(n);o.head.add(d);let u=ZT(n,t);u.position.set(0,.02,0),o.head.add(u);let f=KT(n,t);o.chest.add(f),o.footL.add(Bx(n)),o.footR.add(Bx(n));let p=kx(n),x=kx(n);p.position.set(0,.36,0),x.position.set(0,.36,0),o.calfL.add(p),o.calfR.add(x);let g=$T(n);o.thighR.add(g),o.handL.add(zx(n,-1)),o.handR.add(zx(n,1));let m=to(it(.05,.035,.01,.002),n.teams[t]);m.position.set(-.075,.02,-.06),m.castShadow=!1,o.upperL.add(m);let v=new De;v.position.set(.12,-.06,-.1),o.chest.add(v);let S={rifle:JT(n),pistol:Xu(n)};for(let M of Object.values(S))M.visible=!1,v.add(M);let y=Xu(n);y.visible=!1,o.handL.add(y);let w=$x(i,t);s.add(w);let T=new ge(new Jt(.07,8,6),new st({color:1638320}));T.position.y=2.45,T.visible=!1,s.add(T);let I=[g,p,x,m,d],_=QT(s);return s.userData={body:r,gun:S.rifle,gun2:y,name:i,talk:T,gunId:"",map:o,skel:c,skin:h,weapons:S,mount:v,mats:_,tag:w,phase:0,distAcc:0,spd:0,fwd:0,strafe:0,conn:!0,stats:Jx(s),bindHips:o.hips.position.y,lodFar:I,lod:0,recoilT:0,reloadT:0,flinchT:0,plantL:null,plantR:null,lastMag:null,lastHp:null},Yu(s,"rifle"),Hs(s,{dt:0,t:0,speed:0,pitch:0,down:!1}),s}var Zp={rifle:[1,1,1],smg:[.85,.85,.85],shotgun:[1.05,1.05,1.12],sawed:[1.05,1.05,.7],lmg:[1.15,1.15,1.15],lever:[1,1,1.15],nailer:[.9,1.1,.72]};function Yu(i,e){let t=i.userData.weapons||{},n=e==="akimbo",s=e==="pistol"||n?"pistol":"rifle",r=n?"akimbo":e==="pistol"?"pistol":Zp[e]?e:"rifle";if(i.userData.gunId===r){i.userData.gun2&&(i.userData.gun2.visible=n);return}if(i.userData.gunId=r,t.rifle&&(t.rifle.visible=s==="rifle"),t.pistol&&(t.pistol.visible=s==="pistol"),s==="rifle"&&t.rifle){let o=Zp[r]||Zp.rifle;t.rifle.scale.set(o[0],o[1],o[2])}i.userData.gun=t[s],i.userData.gun2&&(i.userData.gun2.visible=n)}function Qx(i,e){if(i.userData.conn===!!e)return;i.userData.conn=!!e;let t=e?1:.4;for(let n of i.userData.mats)n.transparent=!e,n.opacity=t,n.depthWrite=!!e;i.userData.tag&&i.userData.tag.material&&(i.userData.tag.material.opacity=e?1:.4)}function ev(i,e){let t=e>12?2:e>5?1:0;if(i.userData.lod===t)return;i.userData.lod=t;let n=t<2;for(let s of i.userData.lodFar||[])s.visible=n}var Qr=new U,Ii=new U,Jp=new U,Qp=new U,jp=new Ze,nw=new on,Gx=new U(-1,0,0),Vx=new U(1,0,0),iw=new U(0,-1,0);function Wx(i,e,t,n){let s=i.parent;s.updateWorldMatrix(!0,!1),jp.copy(s.matrixWorld).invert(),Qr.copy(e).applyMatrix4(jp),Ii.copy(t).applyMatrix4(jp).sub(Qr),!(Ii.lengthSq()<1e-8)&&(Ii.normalize(),i.quaternion.copy(nw.setFromUnitVectors(n,Ii)))}function Bl(i,e,t,n,s,r,o){i.parent.updateWorldMatrix(!0,!1);let l=Qr.setFromMatrixPosition(i.matrixWorld);Ii.copy(t).sub(l);let c=Ii.length();c=Math.max(.05,Math.min(s+r-.012,c)),Ii.normalize(),Jp.copy(n).sub(l);let a=Qp.crossVectors(Ii,Jp);a.lengthSq()<1e-8&&a.set(0,0,1),a.normalize();let h=new U().crossVectors(a,Ii).normalize(),d=Vi.clamp((s*s+c*c-r*r)/(2*s*c),-1,1),u=Math.acos(d),f=l.clone().add(Ii.clone().multiplyScalar(Math.cos(u)*s)).add(h.multiplyScalar(Math.sin(u)*s));Wx(i,l,f,o),e.parent.updateWorldMatrix(!0,!1);let p=new U().setFromMatrixPosition(e.matrixWorld);Wx(e,p,t,o)}function Hs(i,{dt:e=.016,t=0,speed:n=0,fwd:s=0,strafe:r=0,pitch:o=0,down:l=!1,dist:c=4,recoil:a=0,reload:h=0,flinch:d=0}={}){let u=i.userData,f=u.map;if(!f)return;if(u.mixer){kT(i,{dt:e,speed:n,fwd:s,strafe:r,pitch:o,down:l,dist:c,recoil:a,reload:h,flinch:d});return}ev(i,c);let p=Math.max(0,Math.min(.05,e||.016));u.spd=Vi.damp(u.spd||0,n,8,p),u.fwd=Vi.damp(u.fwd||0,s,8,p),u.strafe=Vi.damp(u.strafe||0,r,8,p);let x=u.spd,g=dr(.28,1.5,x),m=dr(2.6,5.8,x),v=.7+.32*m,S=Math.min(x,9)*p;x>.25&&(u.distAcc=(u.distAcc||0)+S),u.phase=v>1e-4?u.distAcc/v*Math.PI:u.phase,a&&(u.recoilT=.14),h&&(u.reloadT=1.15),d&&(u.flinchT=.28),u.recoilT=Math.max(0,(u.recoilT||0)-p),u.reloadT=Math.max(0,(u.reloadT||0)-p),u.flinchT=Math.max(0,(u.flinchT||0)-p);let y=u.recoilT>0?dr(0,.05,.14-u.recoilT)*(u.recoilT/.14):0,w=u.reloadT>0?1:0,T=u.flinchT>0?u.flinchT/.28:0,I=u.gunId&&u.gunId!=="pistol"&&u.gunId!=="akimbo",_=dr(.08,.28,Math.abs(o)+(o>0,0)),M=dr(-.15,.35,o)*.25+dr(.15,.55,Math.max(0,-o+.15)),b=Math.max(0,-o)*.85+.12*(1-g)*0;for(let z of Object.values(f))z!==f.root&&z.quaternion.identity();let k=(Math.abs(u.fwd)+Math.abs(u.strafe)>.35?Math.atan2(u.strafe,Math.max(.15,u.fwd)):0)*g*.65;f.hips.rotation.y=k,f.spine.rotation.y=-k*.45,f.chest.rotation.y=-k*.35;let L=u.phase,R=Math.sin(L);f.hips.position.y=u.bindHips+Math.abs(Math.sin(L))*(.01+.028*g+.04*m)+Math.sin(t*1.5)*.005*(1-g),f.hips.position.x=(u.bindX!=null?u.bindX:u.bindX=0)+R*.025*g+Math.sin(t*.7)*.012*(1-g),f.spine.rotation.x=Math.sin(L)*.035*g+.04+Math.sin(t*1.5)*.02*(1-g)+T*.25,f.chest.rotation.x=-o*.45-.06+y*.18+T*.2,f.head.rotation.x=-o*.4+T*-.1,f.head.rotation.z=T*.15;let N=.48*g+.38*m,P=Math.sin(L),O=Math.sin(L+Math.PI);f.thighL.rotation.x=P*N*(u.fwd>=-.2?1:-.7),f.thighR.rotation.x=O*N*(u.fwd>=-.2?1:-.7),f.thighL.rotation.z=.04+u.strafe*.04*g,f.thighR.rotation.z=-.04+u.strafe*.04*g,f.calfL.rotation.x=Math.max(0,-P)*(.75+.4*m),f.calfR.rotation.x=Math.max(0,-O)*(.75+.4*m),f.footL.rotation.x=-f.thighL.rotation.x*.3-f.calfL.rotation.x*.25,f.footR.rotation.x=-f.thighR.rotation.x*.3-f.calfR.rotation.x*.25,g<.15&&(f.thighL.rotation.x*=.2,f.thighR.rotation.x*=.2,f.calfL.rotation.x*=.2,f.calfR.rotation.x*=.2);let G=u.mount,F=u.gunId==="pistol"||u.gunId==="akimbo";if(G){let z=F?.25-o*.7:.7-o*.95-y*.35,Z=F?.35:.22;Qp.set(Math.sin(Z)*.55,-Math.sin(Math.max(.05,z)),-Math.cos(Math.max(.05,z))).normalize(),G.quaternion.copy(Kp.setFromUnitVectors(Jp.set(0,0,-1),Qp)),G.position.set(F?.16:.12,(F?-.02:-.08)-y*.03,F?-.14:-.12)}if(f.clavR.rotation.set(.12,.25,-.35),f.clavL.rotation.set(.12,-.2,.35),f.root.updateWorldMatrix(!0,!0),!F&&u.gun&&u.gun.visible&&u.gun.userData.grip){u.gun.userData.grip.getWorldPosition(Qr);let z=Qr.clone();u.gun.userData.guard.getWorldPosition(Ii);let Z=Ii.clone(),se=new U().setFromMatrixPosition(f.upperR.matrixWorld);se.x+=.35,se.y-=.05,se.z+=.15;let ce=new U().setFromMatrixPosition(f.upperL.matrixWorld);ce.x-=.3,ce.y+=.05,ce.z+=.2,Bl(f.upperR,f.lowerR,z,se,.28,.24,Vx);let Ce=u.reloadT||0;if(Ce>.35&&Ce<.95){let X=z.clone();X.y-=.12,X.z+=.05,Bl(f.upperL,f.lowerL,X,ce,.28,.24,Gx)}else Bl(f.upperL,f.lowerL,Z,ce,.28,.24,Gx);f.handR.quaternion.identity(),f.handL.quaternion.identity()}else if(u.gunId==="akimbo")f.upperR.rotation.set(.25,.4,-1.15),f.lowerR.rotation.set(.05,.15,-.35),f.upperL.rotation.set(.25,-.4,1.15),f.lowerL.rotation.set(.05,-.15,.35);else if(F&&u.gun&&u.gun.userData.grip){u.gun.userData.grip.getWorldPosition(Qr);let z=new U().setFromMatrixPosition(f.upperR.matrixWorld);z.x+=.25,z.z+=.1,Bl(f.upperR,f.lowerR,Qr.clone(),z,.28,.24,Vx),f.upperL.rotation.set(.2,-.1,.4),f.lowerL.rotation.set(0,0,.2)}if(f.root.updateWorldMatrix(!0,!0),g>.2&&x<8.5){for(let[z,Z,se,ce,Ce]of[["L",f.thighL,f.calfL,f.footL,"plantL"],["R",f.thighR,f.calfR,f.footR,"plantR"]]){let X=Math.cos(L+(z==="L"?0:Math.PI)),Te=new U().setFromMatrixPosition(ce.matrixWorld);if(X>.25){u[Ce]||(u[Ce]=new U(Te.x,.04,Te.z));let V=u[Ce].clone();V.y=.04;let te=new U().setFromMatrixPosition(Z.matrixWorld);te.x+=z==="L"?-.15:.15,te.z+=.12,Bl(Z,se,V,te,.44,.42,iw)}else u[Ce]=null}f.root.updateWorldMatrix(!0,!0)}else u.plantL=u.plantR=null;l&&(f.hips.rotation.x=.25)}var Zu=class extends el{constructor(e){super(e),this.type=Zt}parse(e){let o=function(_,M){switch(_){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(M||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(M||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(M||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(M||""))}},d=function(_,M,b){M=M||1024;let k=_.pos,L=-1,R=0,N="",P=String.fromCharCode.apply(null,new Uint16Array(_.subarray(k,k+128)));for(;0>(L=P.indexOf(`
`))&&R<M&&k<_.byteLength;)N+=P,R+=P.length,k+=128,P=String.fromCharCode.apply(null,new Uint16Array(_.subarray(k,k+128)));return-1<L?(b!==!1&&(_.pos+=R+L+1),N+P.slice(0,L)):!1},u=function(_){let M=/^#\?(\S+)/,b=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,k=/^\s*FORMAT=(\S+)\s*$/,L=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,R={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},N,P;for((_.pos>=_.byteLength||!(N=d(_)))&&o(1,"no header found"),(P=N.match(M))||o(3,"bad initial token"),R.valid|=1,R.programtype=P[1],R.string+=N+`
`;N=d(_),N!==!1;){if(R.string+=N+`
`,N.charAt(0)==="#"){R.comments+=N+`
`;continue}if((P=N.match(b))&&(R.gamma=parseFloat(P[1])),(P=N.match(D))&&(R.exposure=parseFloat(P[1])),(P=N.match(k))&&(R.valid|=2,R.format=P[1]),(P=N.match(L))&&(R.valid|=4,R.height=parseInt(P[1],10),R.width=parseInt(P[2],10)),R.valid&2&&R.valid&4)break}return R.valid&2||o(3,"missing format specifier"),R.valid&4||o(3,"missing image size specifier"),R},f=function(_,M,b){let D=M;if(D<8||D>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);D!==(_[2]<<8|_[3])&&o(3,"wrong scanline width");let k=new Uint8Array(4*M*b);k.length||o(4,"unable to allocate buffer space");let L=0,R=0,N=4*D,P=new Uint8Array(4),O=new Uint8Array(N),G=b;for(;G>0&&R<_.byteLength;){R+4>_.byteLength&&o(1),P[0]=_[R++],P[1]=_[R++],P[2]=_[R++],P[3]=_[R++],(P[0]!=2||P[1]!=2||(P[2]<<8|P[3])!=D)&&o(3,"bad rgbe scanline format");let F=0,z;for(;F<N&&R<_.byteLength;){z=_[R++];let se=z>128;if(se&&(z-=128),(z===0||F+z>N)&&o(3,"bad scanline data"),se){let ce=_[R++];for(let Ce=0;Ce<z;Ce++)O[F++]=ce}else O.set(_.subarray(R,R+z),F),F+=z,R+=z}let Z=D;for(let se=0;se<Z;se++){let ce=0;k[L]=O[se+ce],ce+=D,k[L+1]=O[se+ce],ce+=D,k[L+2]=O[se+ce],ce+=D,k[L+3]=O[se+ce],L+=4}G--}return k},p=function(_,M,b,D){let k=_[M+3],L=Math.pow(2,k-128)/255;b[D+0]=_[M+0]*L,b[D+1]=_[M+1]*L,b[D+2]=_[M+2]*L,b[D+3]=1},x=function(_,M,b,D){let k=_[M+3],L=Math.pow(2,k-128)/255;b[D+0]=tr.toHalfFloat(Math.min(_[M+0]*L,65504)),b[D+1]=tr.toHalfFloat(Math.min(_[M+1]*L,65504)),b[D+2]=tr.toHalfFloat(Math.min(_[M+2]*L,65504)),b[D+3]=tr.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;let m=u(g),v=m.width,S=m.height,y=f(g.subarray(g.pos),v,S),w,T,I;switch(this.type){case Xn:I=y.length/4;let _=new Float32Array(I*4);for(let b=0;b<I;b++)p(y,b*4,_,b*4);w=_,T=Xn;break;case Zt:I=y.length/4;let M=new Uint16Array(I*4);for(let b=0;b<I;b++)x(y,b*4,M,b*4);w=M,T=Zt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:v,height:S,data:w,header:m.string,gamma:m.gamma,exposure:m.exposure,type:T,colorSpace:Ln,minFilter:Xt,magFilter:Xt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var n0="assets/hd/",nv=new ur,sw=new ui;nv.register(i=>(i.textureLoader=new ui(i.options.manager),{name:"csp_img"}));var t0=-.271,rw=1711915,ow={sand:4,concrete:3.2,corr:2.6,wood:1.6,rust:2},tv={low:["env/sky_1k.webp","tex/sand_diff_512.webp","tex/concrete_diff_512.webp","tex/corr_diff_512.webp","tex/wood_diff_512.webp","props/drum.glb","props/tyre.glb","props/crate.glb","props/jerry.glb"],medium:["env/sky_2k.webp","env/env_256.hdr",...["sand","concrete","corr","wood"].flatMap(i=>[`tex/${i}_diff_1k.webp`,`tex/${i}_nor_1k.webp`]),"props/drum.glb","props/tyre.glb","props/crate.glb","props/jerry.glb"]};tv.high=[...tv.medium,...["sand","concrete","corr","wood"].map(i=>`tex/${i}_arm_1k.webp`)];var ju=(i,e,t=!0)=>sw.loadAsync(n0+i).then(n=>(n.colorSpace=e?ft:Dn,t&&(n.wrapS=n.wrapT=en),n.anisotropy=8,n));function aw(i,e,t=!1){i.onBeforeCompile=n=>{n.uniforms.uTile={value:1/e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uTile; varying vec2 vWuv;`).replace("#include <fog_vertex>",`#include <fog_vertex>
      { vec3 wp = (modelMatrix * vec4(transformed, 1.)).xyz; vec3 wn = abs(normalize(mat3(modelMatrix) * objectNormal));
        vec2 w = wn.y > 0.6 ? wp.xz : (wn.x > wn.z ? wp.zy : wp.xy); w *= uTile; vWuv = w;
        #ifdef USE_MAP
        vMapUv = w;
        #endif
        #ifdef USE_NORMALMAP
        vNormalMapUv = w;
        #endif
        #ifdef USE_ROUGHNESSMAP
        vRoughnessMapUv = w;
        #endif
        #ifdef USE_METALNESSMAP
        vMetalnessMapUv = w;
        #endif
        #ifdef USE_AOMAP
        vAoMapUv = w;
        #endif
      }`),t&&(n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWuv;`).replace("#include <map_fragment>",`
      #ifdef USE_MAP
      { vec4 tA = texture2D(map, vMapUv); vec4 tB = texture2D(map, vMapUv * mat2(0.31, -0.27, 0.27, 0.31) + 0.37);
        float m = texture2D(map, vWuv * 0.021).g; float k = smoothstep(0.35, 0.65, texture2D(map, vWuv * 0.047 + 0.5).r);
        diffuseColor *= mix(tA, tB, k) * (0.78 + 0.45 * m); }
      #endif`))},i.customProgramCacheKey=()=>"wuv"+(t?"m":""),i.needsUpdate=!0}function lw(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");for(let n=0;n<26;n++){let s=Math.random()*6.28,r=Math.random()<.3?20+Math.random()*40:Math.random()*18,o=4+Math.random()*(n<6?22:9);e.fillStyle=`rgba(${70+Math.random()*40|0},${4+Math.random()*8|0},${4+Math.random()*6|0},${.55+Math.random()*.4})`,e.beginPath(),e.ellipse(64+Math.cos(s)*r,64+Math.sin(s)*r,o,o*(.5+Math.random()*.5),s,0,6.28),e.fill()}let t=new Gt(i);return t.colorSpace=ft,t}function cw(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"rgba(255,255,255,0.55)"),t.addColorStop(.5,"rgba(255,255,255,0.22)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Gt(i)}function iv({renderer:i,scene:e,world:t,viewScene:n}){let s=t.M,r={tier:-1,sky:null,env:null,props:!1,texTier:-1,bytes:0};function o(N){N.colorSpace=ft,N.wrapS=en,N.generateMipmaps=!0,N.minFilter=di;let P=new bt({side:Sn,depthWrite:!1,fog:!1,uniforms:{map:{value:N},fogC:{value:e.fog.color},rot:{value:t0},gain:{value:1}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vP; uniform sampler2D map; uniform vec3 fogC; uniform float rot, gain;
        void main(){ vec3 d = normalize(vP); vec2 uv = vec2(atan(d.z, d.x) * 0.15915494 + 0.5 + rot, asin(clamp(d.y, -1., 1.)) * 0.31830989 + 0.5);
          vec3 c = texture2D(map, uv).rgb * gain; c = mix(fogC, c, smoothstep(-0.015, 0.05, d.y));
          gl_FragColor = vec4(c, 1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}),O=t.sky.material;t.sky.material=P,O.dispose?.(),r.sky=N,e.fog.color.set(rw);let G=s.cache.f276229210;G&&(G.visible=!1)}function l(N){N.mapping=Xr;let P=new Bs(i),O=P.fromEquirectangular(N);P.dispose(),N.dispose(),e.environment=O.texture,n.environment=O.texture,e.environmentRotation.y=n.environmentRotation.y=-t0*Math.PI*2,r.env=O.texture}function c(N){let P=new Bs(i),O=N.clone();O.mapping=Xr;let G=P.fromEquirectangular(O);P.dispose(),e.environment=G.texture,n.environment=G.texture,e.environmentRotation.y=n.environmentRotation.y=-t0*Math.PI*2,r.env=G.texture}let a={sand:[s.sand,s.dune],concrete:[s.concrete],corr:[s.fence,s.fenceDark],wood:[s.wood]};async function h(N){let P=N>0,O=N>1,G=Object.keys(a),F=await Promise.all(G.map(z=>Promise.all([ju(`tex/${z}_diff_${P?"1k":"512"}.webp`,!0),P?ju(`tex/${z}_nor_1k.webp`):null,O?ju(`tex/${z}_arm_1k.webp`):null])));G.forEach((z,Z)=>{let[se,ce,Ce]=F[Z];for(let X of a[z])X&&(X.map=se,X.bumpMap=null,X.normalMap=ce||null,X.roughnessMap=Ce||null,X.aoMap=Ce||null,X.aoMapIntensity=.8,z==="corr"?(X.metalnessMap=Ce||null,X.metalness=X===s.fence?.55:.45,X.roughness=Ce?1:.62,X.color.set(X===s.fence?12107972:5921886),ce&&X.normalScale.set(1.2,1.2)):z==="sand"?(X.color.set(X===s.dune?12166540:13220774),X.roughness=1,X.metalness=0,ce&&X.normalScale.set(1.1,1.1)):z==="concrete"?(X.color.set(11841706),X.roughness=Ce?1:.9,X.metalness=0):(X.color.set(14207928),X.roughness=Ce?1:.85),aw(X,ow[z],z==="sand"))}),r.texTier=N}let d={drum:[.62,.9,.62],tyre:[.98,.3,.98],crate:null,jerry:[.36,.48,.17]};function u(N,P){N.updateMatrixWorld(!0);let O=new bn().setFromObject(N),G=O.getSize(new U),F=new De,z=new De;z.add(N),F.add(z),P==="tyre"&&G.y>Math.min(G.x,G.z)&&(z.rotation.x=G.z<G.x?Math.PI/2:0,G.x<G.z&&(z.rotation.z=Math.PI/2)),F.updateMatrixWorld(!0);let Z=new bn().setFromObject(z),se=Z.getSize(new U),ce=Z.getCenter(new U),Ce=d[P]||[1,1,1];if(z.scale.set(Ce[0]/se.x,Ce[1]/se.y,Ce[2]/se.z),P==="jerry"||P==="drum"){let V=Ce[1]/se.y;z.scale.set(V,V,V)}F.updateMatrixWorld(!0);let X=new bn().setFromObject(z),Te=X.getCenter(new U);return z.position.set(-Te.x,-X.min.y,-Te.z),F.updateMatrixWorld(!0),F}async function f(N){let P=["drum","tyre","crate","jerry"],O=await Promise.all(P.map(se=>nv.loadAsync(n0+`props/${se}.glb`))),G={};P.forEach((se,ce)=>G[se]=u(O[ce].scene,se));let F={};for(let se of t.hdProps||[])(F[se.kind]||(F[se.kind]=[])).push(se);let z=new Ze,Z=new me;r.inst=[];for(let[se,ce]of Object.entries(F)){let Ce=G[se];Ce.updateMatrixWorld(!0),Ce.traverse(X=>{if(!X.isMesh)return;let Te=new Vn(X.geometry,X.material,ce.length);Te.castShadow=N>0,Te.receiveShadow=!0,ce.forEach((V,te)=>{z.copy(V.m),se==="crate"&&z.multiply(new Ze().makeScale(V.s,V.s,V.s)),z.multiply(X.matrixWorld),Te.setMatrixAt(te,z),se==="drum"&&(Z.set(V.color).lerp(new me(1,1,1),.45),Te.setColorAt(te,Z))}),Te.computeBoundingSphere(),t.root.add(Te),r.inst.push(Te)})}for(let se of t.propLo||[])se.visible=!1;for(let[se,ce]of t.missionMeshes||[])if(ce.userData.hdKind==="jerry"){let Ce=G.jerry.clone();Ce.traverse(X=>{X.isMesh&&(X.castShadow=!0,X.receiveShadow=!0)}),ce.children.forEach(X=>X.visible=!1),Ce.rotation.y=Math.random()*6,ce.add(Ce)}r.props=!0}let p=40,x=new Vn(new an(1,1).rotateX(-Math.PI/2),new Ge({map:lw(),transparent:!0,depthWrite:!1,roughness:.25,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),p);x.frustumCulled=!1,x.renderOrder=2,x.userData.noAO=!0,x.receiveShadow=!0;let g=new pt,m=0;g.scale.set(0,0,0),g.updateMatrix();for(let N=0;N<p;N++)x.setMatrixAt(N,g.matrix);e.add(x);function v(N,P,O=1){g.position.set(N,.02+m%7*.0015,P),g.rotation.set(0,Math.random()*6.28,0),g.scale.set(O*(.8+Math.random()*.5),1,O*(.8+Math.random()*.5)),g.updateMatrix(),x.setMatrixAt(m,g.matrix),x.instanceMatrix.needsUpdate=!0,m=(m+1)%p}let S=54,y=new vt,w=new Float32Array(S*3),T=new Float32Array(S),I=[],_=[[-38,-70],[44,-40],[-50,30]];for(let N=0;N<S;N++)I.push({s:_[N%_.length],t:Math.random()*9,life:7+Math.random()*4,dx:(Math.random()-.5)*.4});y.setAttribute("position",new ht(w,3)),y.setAttribute("a",new ht(T,1));let M=new bt({transparent:!0,depthWrite:!1,fog:!0,uniforms:Nn.merge([Fe.fog,{map:{value:cw()},uScale:{value:600}}]),vertexShader:`attribute float a; varying float vA; uniform float uScale;
#include <fog_pars_vertex>
void main(){ vA=a; vec4 mvPosition=modelViewMatrix*vec4(position,1.); gl_PointSize = uScale * (2.5 + (1.-a) * 7.) / -mvPosition.z; gl_Position=projectionMatrix*mvPosition;
#include <fog_vertex>
}`,fragmentShader:`uniform sampler2D map; varying float vA;
#include <fog_pars_fragment>
void main(){ vec4 t=texture2D(map, gl_PointCoord); gl_FragColor=vec4(vec3(0.16,0.15,0.16), t.a*vA*0.55);
#include <fog_fragment>
}`}),b=new Ps(y,M);b.frustumCulled=!1,b.userData.noAO=!0,b.visible=!1,e.add(b);function D(N){if(b.visible){for(let P=0;P<S;P++){let O=I[P];O.t+=N,O.t>O.life&&(O.t=0);let G=O.t/O.life;w[P*3]=O.s[0]+O.dx*O.t+G*G*6,w[P*3+1]=1+O.t*1.6,w[P*3+2]=O.s[1]+G*2,T[P]=Math.sin(Math.min(1,G*4)*1.57)*(1-G)}y.attributes.position.needsUpdate=!0,y.attributes.a.needsUpdate=!0}}let k=Promise.resolve();function L(N){return k=k.then(async()=>{let P=performance.now(),O=[];(!r.sky||N>0&&r.skyHi!==!0)&&O.push(ju(N>0?"env/sky_2k.webp":"env/sky_1k.webp",!0,!1).then(F=>{o(F),r.skyHi=N>0,N===0&&!r.envHi&&c(F)})),N>0&&!r.envHi&&O.push(new Zu().loadAsync(n0+"env/env_256.hdr").then(F=>{l(F),r.envHi=!0})),(r.texTier<0||N>r.texTier&&!(r.texTier===1&&N===1))&&O.push(h(N)),r.props||O.push(f(N));let G=await Promise.allSettled(O);for(let F of G)F.status==="rejected"&&console.warn("hd stage 2",F.reason);r.ms=Math.round(performance.now()-P)}),k}function R(N){r.tier=N,b.visible=N>0;for(let P of r.inst||[])P.castShadow=N>0}return{load:L,setTier:R,update:D,blood:v,st:r}}var hw=100,uw=50;function sv(i){let{scene:e,zombies:t,P:n,G:s,cam:r}=i,o={on:!1,ws:null,id:null,room:null,token:null,snaps:[],remotes:new Map,slot:new Map,lastSend:0,over:!1,retry:0,url:null,name:"Survivor",status:"",alive:!0},l=(M,b,D)=>M+(b-M)*D,c=(M,b,D)=>{let k=((b-M+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return M+k*D},a=[1638320,16757575,7059711,16739285];function h(M,b){let D=qu(M,b);return e.add(D),D}function d(M,b){Yu(M,b)}function u(M){o.url=M.url,o.name=M.name||o.name,o.joinMsg=M.join,f()}function f(){let M;try{M=new WebSocket(o.url)}catch{return p("bad server url")}o.ws=M,o.status="connecting",M.onopen=()=>{o.retry=0,M.send(JSON.stringify(o.token?{t:"join",token:o.token}:{t:"join",name:o.name,...o.joinMsg}))},M.onmessage=b=>{let D;try{D=JSON.parse(b.data)}catch{return}x(D)},M.onclose=b=>{if(o.ws===M){if(o.ws=null,!o.on&&!o.token){i.onStatus?.("Could not connect to the co-op server");return}o.over||b.code===4001||(o.retry++<8?(o.status="reconnecting",i.onStatus?.("Connection lost, reconnecting\u2026"),setTimeout(f,Math.min(8e3,500*2**o.retry))):(i.onStatus?.("Disconnected from co-op server"),m(),i.onQuit?.()))}},M.onerror=()=>{}}function p(M){i.onStatus?.(M)}function x(M){if(M.t==="joined"){let b=!o.on;o.id=M.id,o.room=M.room,o.token=M.token,o.status="ok",b?(o.on=!0,o.over=!1,i.onJoined?.(M)):i.onStatus?.("Reconnected")}else if(M.t==="err")i.onStatus?.({"no-room":"No room with that code","room-full":"That room is full",full:"Server is full",rate:"Too many messages"}[M.m]||M.m),o.on||o.ws?.close();else if(M.t==="s"){M.recv=performance.now(),o.snaps.push(M),o.snaps.length>30&&o.snaps.shift();for(let b of M.ev||[])i.onEvent?.(b,b.p===o.id||b.by===o.id),(o.remotes.get(b.by)||o.remotes.get(b.p))&&((b.e==="hit"||b.e==="kill")&&b.by&&o.remotes.get(b.by)&&(o.remotes.get(b.by).userData.pulseRecoil=1),b.e==="hurt"&&b.p&&o.remotes.get(b.p)&&(o.remotes.get(b.p).userData.pulseFlinch=1));i.onLobby?.(M),M.over&&!o.over&&(o.over=!0,i.onOver?.(M))}else M.t==="hits"?i.onHits?.(M.h):M.t==="act"?(o.lastAct=M,i.onAct?.(M)):M.t==="sig"&&i.onSig?.(M)}function g(M){o.ws&&o.ws.readyState===1&&o.ws.send(JSON.stringify(M))}function m(){if(o.on=!1,o.ws)try{g({t:"leave"}),o.ws.close()}catch{}o.ws=null,o.token=null,o.snaps=[];for(let M of o.remotes.values())e.remove(M);o.remotes.clear(),o.slot.clear(),t.reset()}function v(M){let b=M-hw,D=o.snaps;if(!D.length)return null;let k=D.length-1;for(;k>0&&D[k-1].recv>b;)k--;let L=D[k],R=D[Math.max(0,k-1)];return R===L||L.recv<=R.recv?{s0:L,s1:L,k:1}:{s0:R,s1:L,k:Math.max(0,Math.min(1,(b-R.recv)/(L.recv-R.recv)))}}function S(M,b,D){let k=performance.now();k-o.lastSend>uw&&!n.dead&&(o.lastSend=k,g({t:"in",x:+n.x.toFixed(2),z:+n.z.toFixed(2),yaw:+n.yaw.toFixed(3),pitch:+n.pitch.toFixed(3),w:i.held?.()||"pistol"}));let L=v(k);if(!L){t.update(M,b,n,i.world.door,D);return}let{s0:R,s1:N,k:P}=L,O=o.snaps[o.snaps.length-1],G=O.p.find(X=>X[0]===o.id);if(G){let X=G[6];if(X<n.hp-.5&&i.onHurt?.(n.hp-X),n.hp=X,n.pts=G[7],n.kills=G[8],G[9]&&!n.dead?i.onDown?.():!G[9]&&n.dead&&i.onRevive?.(),Math.hypot(G[2]-n.x,G[3]-n.z)>2.5&&(n.x=G[2],n.z=G[3]),Array.isArray(G[12]))for(let Te of G[12]){let V=n.slots.find(te=>te&&te.id===Te[0]);V&&(V.mag=Te[1],V.reserve=Te[2])}}O.round!==s.round&&O.round>0&&i.onRound?.(O.round),s.mpPhase=O.phase;let F=i.world;O.win&&O.win.forEach((X,Te)=>{let V=F.windows[Te];if(V){for(;V.count>X;)F.removePlank(V),i.onPlank?.(V,!0);for(;V.count<X;)F.addPlank(V),i.onPlank?.(V,!1)}});let z=new Set(O.go||[]);O.door&&z.add("AB");for(let X of F.doors||[F.door])X&&z.has(X.id)&&!X.open&&(X.open=!0,i.onDoor?.(X));O.ms!==void 0&&i.onMission?.(O.ms,O.mi,O.mc),O.crate&&i.onCrate?.(O.crate[0],O.crate[1],O.crate[2]===o.id),O.up&&i.syncUps?.(O.up),s.double=O.dbl?1:0,G&&(o.owned=G[11]);let Z=new Set,se=new Map(R.p.map(X=>[X[0],X]));N.p.forEach((X,Te)=>{if(X[0]===o.id)return;Z.add(X[0]);let V=o.remotes.get(X[0]);V||(V=h(X[1],Te),o.remotes.set(X[0],V));let te=se.get(X[0])||X,be=Math.max(.016,(N.recv-R.recv)/1e3),Pe=(X[2]-te[2])/be,$=(X[3]-te[3])/be,he=P*P,_e=he*P,ie=2*_e-3*he+1,ue=_e-2*he+P,ve=-2*_e+3*he,de=_e-he,Se=ie*te[2]+ue*Pe*be+ve*X[2]+de*Pe*be,We=ie*te[3]+ue*$*be+ve*X[3]+de*$*be;V.position.set(Se,0,We),V.rotation.y=c(te[4],X[4],P),d(V,X[14]),V.userData.body.rotation.x=X[9]?-1.4:0,V.position.y=X[9]?.3:0,V.visible=!0,Qx(V,!!X[10]);let ze=V.rotation.y,je=Pe*-Math.sin(ze)+$*-Math.cos(ze),et=Pe*Math.cos(ze)+$*-Math.sin(ze),H=Math.hypot(Pe,$),dt=l(te[5]||0,X[5]||0,P),rt=X[14],B=Array.isArray(X[12])?X[12].find(Re=>Re[0]===rt):null,E=B?B[1]:null,Y=V.userData.pulseRecoil||0,K=0,ne=V.userData.pulseFlinch||0;V.userData.lastMag!=null&&E!=null&&E<V.userData.lastMag&&(Y=1),V.userData.lastMag!=null&&E!=null&&E>V.userData.lastMag&&(K=1),V.userData.lastHp!=null&&X[6]<V.userData.lastHp&&(ne=1),V.userData.lastMag=E,V.userData.lastHp=X[6],V.userData.pulseRecoil=0,V.userData.pulseFlinch=0;let Ee=r?Math.hypot(r.position.x-V.position.x,r.position.y-1.5,r.position.z-V.position.z):4;Hs(V,{dt:M,t:b,speed:H,fwd:je,strafe:et,pitch:dt,down:!!X[9],dist:Ee,recoil:Y,reload:K,flinch:ne})});for(let[X,Te]of o.remotes)Z.has(X)||(e.remove(Te),o.remotes.delete(X));let ce=new Map(R.z.map(X=>[X[0],X])),Ce=new Set;for(let X of N.z){Ce.add(X[0]);let Te=o.slot.get(X[0]);if(!Te){if(Te=t.spawn({out:{x:X[1],z:X[2]},n:{x:0,z:1},t:{x:1,z:0},count:0},Math.max(1,O.round),!!X[6]),!Te)continue;o.slot.set(X[0],Te),Te.runner=!!X[7],Te.mpX=X[1],Te.mpZ=X[2],Te.state="chase"}let V=ce.get(X[0])||X;Te.mpX=l(V[1],X[1],P),Te.mpZ=l(V[2],X[2],P),Te.mpYaw=c(V[3],X[3],P),Te.mpClimb=X[5],X[8]&&Te.attackT<=0&&(Te.attackT=.01)}for(let[X,Te]of o.slot)Ce.has(X)||(o.slot.delete(X),Te.state!=="dead"&&Te.state!=="dying"&&(Te.state="dying",Te.dieT=0,Te.dieDir=Math.random()*.8-.4,i.onZDie?.(Te)));for(let X of o.slot.values()){let Te=Math.hypot(X.mpX-X.pos.x,X.mpZ-X.pos.z);X.pos.x=X.mpX,X.pos.z=X.mpZ,X.speed=0,X.cool=99,X.phase+=Math.min(.6,Te*2.6),X.stuckTot=0}t.update(M,b,n,i.world.door,{...D,hitPlayer:()=>{}});for(let X of o.slot.values())X.pos.x=X.mpX,X.pos.z=X.mpZ,X.yaw=X.mpYaw,X.root.rotation.y=X.mpYaw,X.root.position.y=X.mpClimb||0,X.climbY=X.mpClimb||0;t.alive=o.slot.size}let y=new U;function w(M){let b=[...o.remotes.values()].filter(P=>P.position.y<.1&&P.visible);if(!b.length)return null;let D=Math.floor(performance.now()/6e3)%b.length,k=b[D],L=k.rotation.y,R=k.position.x+Math.sin(L)*3.4,N=k.position.z+Math.cos(L)*3.4;return y.set(R,2.6,N),M.position.lerp(y,.2),M.lookAt(k.position.x,1.4,k.position.z),k.userData.name}function T(M,b){let D=o.remotes.get(M);D&&D.userData.talk&&(D.userData.talk.visible=!!b)}function I(){for(let[M,b]of[...o.remotes])String(M).startsWith("dummy-")&&(e.remove(b),o.remotes.delete(M))}function _(M,b,D,k){let L="dummy-"+(b||0),R=o.remotes.get(L);R&&e.remove(R);let N=h(M||"Bot",b||0);return N.position.set(D||0,0,k||2),o.remotes.set(L,N),Hs(N,{dt:0,t:0,speed:0,fwd:0,pitch:0,down:!1}),N}return{S:o,spectate:w,connect:u,stop:m,update:S,send:g,setTalking:T,frameAt:v,spawnDummy:_,clearDummies:I,get on(){return o.on}}}function rv(i,e,t){let s=Math.min(2,window.devicePixelRatio||1),r=document.createElement("canvas");r.id="minimap",r.width=r.height=104*s,document.getElementById("hud").appendChild(r);let o=r.getContext("2d"),l={x0:1e9,x1:-1e9,z0:1e9,z1:-1e9};for(let v of i.colliders)v.y1>=2.5&&v.x1-v.x0+(v.z1-v.z0)>3&&(l.x0=Math.min(l.x0,v.x0),l.x1=Math.max(l.x1,v.x1),l.z0=Math.min(l.z0,v.z0),l.z1=Math.max(l.z1,v.z1));let c=3,a=Math.max(l.x1-l.x0,l.z1-l.z0)+c*2,h=104*s/a,d=(l.x0+l.x1)/2,u=(l.z0+l.z1)/2,f=v=>(v-d)*h+104*s/2,p=v=>(v-u)*h+104*s/2,x=document.createElement("canvas");x.width=x.height=104*s;let g=x.getContext("2d");g.fillStyle="rgba(200,230,240,0.55)";for(let v of i.colliders)v.y1>=1&&g.fillRect(f(v.x0),p(v.z0),Math.max(1,(v.x1-v.x0)*h),Math.max(1,(v.z1-v.z0)*h));let m=0;return function(S){if(m+=S,m<.08)return;m=0;let y=104*s;o.clearRect(0,0,y,y),o.drawImage(x,0,0),o.fillStyle="#ff3b4e";let w=2.4*s;for(let D of e.list)D.state!=="dead"&&D.root.visible&&(o.beginPath(),o.arc(f(D.pos.x),p(D.pos.z),w,0,6.283),o.fill());let T=f(t.x),I=p(t.z),_=-Math.sin(t.yaw),M=-Math.cos(t.yaw),b=6*s;i.marker&&(o.fillStyle="#ffd36b",o.fillRect(f(i.marker.x)-3*s,p(i.marker.z)-3*s,6*s,6*s)),o.fillStyle="#3cf0c0",o.strokeStyle="#04241c",o.lineWidth=s,o.beginPath(),o.moveTo(T+_*b,I+M*b),o.lineTo(T-_*b*.6-M*b*.6,I-M*b*.6+_*b*.6),o.lineTo(T-_*b*.6+M*b*.6,I-M*b*.6-_*b*.6),o.closePath(),o.fill(),o.stroke()}}var ps={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var si=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},dw=new rs(-1,1,1,-1,0,1),i0=class extends vt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}},fw=new i0,ms=class{constructor(e){this._mesh=new ge(fw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,dw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var na=class extends si{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Nn.clone(e.uniforms),this.material=new bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ms(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var zl=class extends si{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ku=class extends si{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var $u=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ae);this._width=n.width,this._height=n.height,t=new $t(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new na(ps),this.copyPass.material.blending=dn,this.timer=new il}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}zl!==void 0&&(o instanceof zl?n=!0:o instanceof Ku&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Hl=class extends si{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new me}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var ov={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new me(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ia=class i extends si{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256),this.clearColor=new me(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new $t(r,o,{type:Zt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new $t(r,o,{type:Zt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new $t(r,o,{type:Zt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let l=ov;this.highPassUniforms=Nn.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new bt({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ae(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let a=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=a,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Nn.clone(ps.uniforms),this.blendMaterial=new bt({uniforms:this.copyUniforms,vertexShader:ps.vertexShader,fragmentShader:ps.fragmentShader,premultipliedAlpha:!0,blending:ln,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new me,this._oldClearAlpha=1,this._basic=new st,this._fsQuad=new ms(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ae(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let l=t[o],c=o+1<e?t[o+1]:0,a=l+c;s.push((o*l+(o+1)*c)/a),r.push(a)}return new bt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};ia.BlurDirectionX=new ae(1,0);ia.BlurDirectionY=new ae(0,1);var Gl={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ae},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ze},cameraProjectionMatrixInverse:{value:new Ze},cameraWorldMatrix:{value:new Ze},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new U(-1,-1,-1)},sceneBoxMax:{value:new U(1,1,1)}},vertexShader:`

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
		}`},Vl={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Ju={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function av(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=pw(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let l=t[o],c=2*Math.PI*l/n,a=new U(Math.cos(c),Math.sin(c),0).normalize();s[o*4]=(a.x*.5+.5)*255,s[o*4+1]=(a.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new wi(s,e,e);return r.wrapS=en,r.wrapT=en,r.needsUpdate=!0,r}function pw(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var Wl={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:s0(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ae},cameraProjectionMatrixInverse:{value:new Ze},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function s0(i,e,t){let n=mw(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function mw(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new U(Math.cos(r),Math.sin(r),o))}return n}var Qu=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),l=(e+t)*o,c=Math.floor(e+l),a=Math.floor(t+l),h=(3-Math.sqrt(3))/6,d=(c+a)*h,u=c-d,f=a-d,p=e-u,x=t-f,g,m;p>x?(g=1,m=0):(g=0,m=1);let v=p-g+h,S=x-m+h,y=p-1+2*h,w=x-1+2*h,T=c&255,I=a&255,_=this.perm[T+this.perm[I]]%12,M=this.perm[T+g+this.perm[I+m]]%12,b=this.perm[T+1+this.perm[I+1]]%12,D=.5-p*p-x*x;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[_],p,x));let k=.5-v*v-S*S;k<0?s=0:(k*=k,s=k*k*this._dot(this.grad3[M],v,S));let L=.5-y*y-w*w;return L<0?r=0:(L*=L,r=L*L*this._dot(this.grad3[b],y,w)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,l,a=(e+t+n)*.3333333333333333,h=Math.floor(e+a),d=Math.floor(t+a),u=Math.floor(n+a),f=1/6,p=(h+d+u)*f,x=h-p,g=d-p,m=u-p,v=e-x,S=t-g,y=n-m,w,T,I,_,M,b;v>=S?S>=y?(w=1,T=0,I=0,_=1,M=1,b=0):v>=y?(w=1,T=0,I=0,_=1,M=0,b=1):(w=0,T=0,I=1,_=1,M=0,b=1):S<y?(w=0,T=0,I=1,_=0,M=1,b=1):v<y?(w=0,T=1,I=0,_=0,M=1,b=1):(w=0,T=1,I=0,_=1,M=1,b=0);let D=v-w+f,k=S-T+f,L=y-I+f,R=v-_+2*f,N=S-M+2*f,P=y-b+2*f,O=v-1+3*f,G=S-1+3*f,F=y-1+3*f,z=h&255,Z=d&255,se=u&255,ce=this.perm[z+this.perm[Z+this.perm[se]]]%12,Ce=this.perm[z+w+this.perm[Z+T+this.perm[se+I]]]%12,X=this.perm[z+_+this.perm[Z+M+this.perm[se+b]]]%12,Te=this.perm[z+1+this.perm[Z+1+this.perm[se+1]]]%12,V=.6-v*v-S*S-y*y;V<0?s=0:(V*=V,s=V*V*this._dot3(this.grad3[ce],v,S,y));let te=.6-D*D-k*k-L*L;te<0?r=0:(te*=te,r=te*te*this._dot3(this.grad3[Ce],D,k,L));let be=.6-R*R-N*N-P*P;be<0?o=0:(be*=be,o=be*be*this._dot3(this.grad3[X],R,N,P));let Pe=.6-O*O-G*G-F*F;return Pe<0?l=0:(Pe*=Pe,l=Pe*Pe*this._dot3(this.grad3[Te],O,G,F)),32*(s+r+o+l)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,l=this.perm,c=(Math.sqrt(5)-1)/4,a=(5-Math.sqrt(5))/20,h,d,u,f,p,x=(e+t+n+s)*c,g=Math.floor(e+x),m=Math.floor(t+x),v=Math.floor(n+x),S=Math.floor(s+x),y=(g+m+v+S)*a,w=g-y,T=m-y,I=v-y,_=S-y,M=e-w,b=t-T,D=n-I,k=s-_,L=M>b?32:0,R=M>D?16:0,N=b>D?8:0,P=M>k?4:0,O=b>k?2:0,G=D>k?1:0,F=L+R+N+P+O+G,z=o[F][0]>=3?1:0,Z=o[F][1]>=3?1:0,se=o[F][2]>=3?1:0,ce=o[F][3]>=3?1:0,Ce=o[F][0]>=2?1:0,X=o[F][1]>=2?1:0,Te=o[F][2]>=2?1:0,V=o[F][3]>=2?1:0,te=o[F][0]>=1?1:0,be=o[F][1]>=1?1:0,Pe=o[F][2]>=1?1:0,$=o[F][3]>=1?1:0,he=M-z+a,_e=b-Z+a,ie=D-se+a,ue=k-ce+a,ve=M-Ce+2*a,de=b-X+2*a,Se=D-Te+2*a,We=k-V+2*a,ze=M-te+3*a,je=b-be+3*a,et=D-Pe+3*a,H=k-$+3*a,dt=M-1+4*a,rt=b-1+4*a,B=D-1+4*a,E=k-1+4*a,Y=g&255,K=m&255,ne=v&255,Ee=S&255,Re=l[Y+l[K+l[ne+l[Ee]]]]%32,le=l[Y+z+l[K+Z+l[ne+se+l[Ee+ce]]]]%32,fe=l[Y+Ce+l[K+X+l[ne+Te+l[Ee+V]]]]%32,Le=l[Y+te+l[K+be+l[ne+Pe+l[Ee+$]]]]%32,we=l[Y+1+l[K+1+l[ne+1+l[Ee+1]]]]%32,ye=.6-M*M-b*b-D*D-k*k;ye<0?h=0:(ye*=ye,h=ye*ye*this._dot4(r[Re],M,b,D,k));let Me=.6-he*he-_e*_e-ie*ie-ue*ue;Me<0?d=0:(Me*=Me,d=Me*Me*this._dot4(r[le],he,_e,ie,ue));let Ue=.6-ve*ve-de*de-Se*Se-We*We;Ue<0?u=0:(Ue*=Ue,u=Ue*Ue*this._dot4(r[fe],ve,de,Se,We));let Ye=.6-ze*ze-je*je-et*et-H*H;Ye<0?f=0:(Ye*=Ye,f=Ye*Ye*this._dot4(r[Le],ze,je,et,H));let at=.6-dt*dt-rt*rt-B*B-E*E;return at<0?p=0:(at*=at,p=at*at*this._dot4(r[we],dt,rt,B,E)),27*(h+d+u+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var sa=class i extends si{constructor(e,t,n=512,s=512,r,o,l){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=av(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new $t(this.width,this.height,{type:Zt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new bt({defines:Object.assign({},Gl.defines),uniforms:Nn.clone(Gl.uniforms),vertexShader:Gl.vertexShader,fragmentShader:Gl.fragmentShader,blending:dn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new $a,this.normalMaterial.blending=dn,this.pdMaterial=new bt({defines:Object.assign({},Wl.defines),uniforms:Nn.clone(Wl.uniforms),vertexShader:Wl.vertexShader,fragmentShader:Wl.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new bt({defines:Object.assign({},Vl.defines),uniforms:Nn.clone(Vl.uniforms),vertexShader:Vl.vertexShader,fragmentShader:Vl.fragmentShader,blending:dn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new bt({uniforms:Nn.clone(ps.uniforms),vertexShader:ps.vertexShader,fragmentShader:ps.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:rl,blendDst:Gr,blendEquation:Ai,blendSrcAlpha:sl,blendDstAlpha:Gr,blendEquationAlpha:Ai}),this.blendMaterial=new bt({uniforms:Nn.clone(Ju.uniforms),vertexShader:Ju.vertexShader,fragmentShader:Ju.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:bh,blendSrc:rl,blendDst:Gr,blendEquation:Ai,blendSrcAlpha:sl,blendDstAlpha:Gr,blendEquationAlpha:Ai}),this._fsQuad=new ms(null),this._originalClearColor=new me,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),l!==void 0&&this.updatePdMaterial(l)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new ts,this.depthTexture.format=ls,this.depthTexture.type=or,this.normalRenderTarget=new $t(this.width,this.height,{minFilter:tn,magFilter:tn,type:Zt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=s0(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=dn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=dn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=dn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=dn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=dn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=l,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=l,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Qu,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let l=0;l<e;l++){let c=o,a=l;s[(o*e+l)*4]=(t.noise(c,a)*.5+.5)*255,s[(o*e+l)*4+1]=(t.noise(c+e,a)*.5+.5)*255,s[(o*e+l)*4+2]=(t.noise(c,a+e)*.5+.5)*255,s[(o*e+l)*4+3]=(t.noise(c+e,a+e)*.5+.5)*255}let r=new wi(s,e,e,Qn,Wn);return r.wrapS=en,r.wrapT=en,r.needsUpdate=!0,r}};sa.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Xl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ed=class extends si{constructor(){super(),this.isOutputPass=!0,this.uniforms=Nn.clone(Xl.uniforms),this.material=new zo({name:Xl.name,uniforms:this.uniforms,vertexShader:Xl.vertexShader,fragmentShader:Xl.fragmentShader}),this._fsQuad=new ms(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===Ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ol?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===al?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ll?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===hl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ul?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===cl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ql=class{constructor(e,t,n){this.max=e,this.n=0,this.next=0;let s=this.geo=new vt;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.siz=new Float32Array(e),s.setAttribute("position",new ht(this.pos,3).setUsage(Ml)),s.setAttribute("aColor",new ht(this.col,4).setUsage(Ml)),s.setAttribute("aSize",new ht(this.siz,1).setUsage(Ml)),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.s0=new Float32Array(e),this.s1=new Float32Array(e),this.c0=new Float32Array(e*4),this.uniforms={map:{value:n},uScale:{value:800}};let r=this.mat=new bt({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:t?ln:as,vertexShader:`attribute float aSize; attribute vec4 aColor; varying vec4 vC; uniform float uScale;
        void main(){ vec4 mv = modelViewMatrix*vec4(position,1.); gl_Position = projectionMatrix*mv; gl_PointSize = clamp(aSize*uScale/max(-mv.z,0.1), 0., 300.); vC = aColor; }`,fragmentShader:`uniform sampler2D map; varying vec4 vC;
        void main(){ float a = texture2D(map, gl_PointCoord).a * vC.a; if(a<0.004) discard; gl_FragColor = vec4(vC.rgb, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        }`});this.points=new Ps(s,r),this.points.frustumCulled=!1,this.points.renderOrder=5,this.points.userData.noAO=!0}emit(e,t,n,s,r,o,l,c,a,h,d,u,f,p=0,x=0){let g=this.next;this.next=(this.next+1)%this.max,this.pos[g*3]=e,this.pos[g*3+1]=t,this.pos[g*3+2]=n,this.vel[g*3]=s,this.vel[g*3+1]=r,this.vel[g*3+2]=o,this.life[g]=this.maxLife[g]=l,this.s0[g]=c,this.s1[g]=a,this.grav[g]=p,this.drag[g]=x,this.c0[g*4]=h,this.c0[g*4+1]=d,this.c0[g*4+2]=u,this.c0[g*4+3]=f}update(e){let{pos:t,vel:n,life:s,maxLife:r,col:o,siz:l,c0:c}=this;for(let a=0;a<this.max;a++){if(s[a]<=0){l[a]=0,o[a*4+3]=0;continue}if(s[a]-=e,s[a]<=0){l[a]=0,o[a*4+3]=0;continue}let h=1-s[a]/r[a],d=a*3,u=Math.max(0,1-this.drag[a]*e);n[d]*=u,n[d+1]=n[d+1]*u-this.grav[a]*e,n[d+2]*=u,t[d]+=n[d]*e,t[d+1]+=n[d+1]*e,t[d+2]+=n[d+2]*e,t[d+1]<.02&&this.grav[a]>0&&(t[d+1]=.02,n[d]*=.4,n[d+2]*=.4,n[d+1]*=-.25),l[a]=this.s0[a]+(this.s1[a]-this.s0[a])*h;let f=h<.1?h*10:1-(h-.1)/.9;o[a*4]=c[a*4],o[a*4+1]=c[a*4+1],o[a*4+2]=c[a*4+2],o[a*4+3]=c[a*4+3]*f}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0}clear(){this.life.fill(0)}},td=class{constructor(e,t,n){this.scene=e,this.tier=n;let s=n>0?1:.4;this.soft=new ql(Math.floor(900*s)+100,!1,t.glow),this.add=new ql(Math.floor(900*s)+100,!0,t.glow),e.add(this.soft.points,this.add.points),this.tracers=[];let r=new ct(1,1,1);for(let o=0;o<24;o++){let l=new ge(r,new st({color:new me(5,3.6,1.4),transparent:!0,blending:ln,depthWrite:!1,toneMapped:!1}));l.visible=!1,l.userData.noAO=!0,l.userData.t=0,e.add(l),this.tracers.push(l)}this.tn=0,this.maxCas=n>0?80:16,this.cas=new Vn(new It(.009,.009,.034,6),new Ge({color:14066743,metalness:1,roughness:.3}),this.maxCas),this.cas.frustumCulled=!1,this.cas.castShadow=!1,e.add(this.cas),this.casData=Array.from({length:this.maxCas},()=>({t:0,p:new U,v:new U,r:new $n,w:new U})),this.casNext=0,this._m=new Ze,this._q=new on,this._s=new U(1,1,1);for(let o=0;o<this.maxCas;o++)this._m.makeScale(0,0,0),this.cas.setMatrixAt(o,this._m)}setScale(e,t){let n=e/(2*Math.tan(t*Math.PI/360));this.soft.uniforms.uScale.value=n,this.add.uniforms.uScale.value=n}tracer(e,t,n=.012){let s=this.tracers[this.tn++%this.tracers.length],r=e.distanceTo(t);r<.5||(s.position.copy(e).lerp(t,.5),s.lookAt(t),s.scale.set(n,n,r),s.visible=!0,s.userData.t=.06,s.material.opacity=1)}casing(e,t){let n=this.casData[this.casNext++%this.maxCas];n.t=2.5,n.p.copy(e),n.v.copy(t),n.r.set(ee(cn),ee(cn),ee(cn)),n.w.set(ee(-30,30),ee(-30,30),ee(-30,30))}blood(e,t,n,s=1){let r=this.tier>0?1:.5;n=Math.ceil(n*r);for(let o=0;o<n;o++){let l=ee(.6,3.2)*s;this.soft.emit(e.x,e.y,e.z,t.x*l+ee(-1,1),t.y*l+ee(-.2,1.4),t.z*l+ee(-1,1),ee(.35,.8),ee(.12,.2)*s,ee(.45,.8)*s,ee(.55,.9),ee(.02,.07),ee(.04,.12),ee(.35,.65),4,2.5)}for(let o=0;o<Math.ceil(n*.6);o++){let l=ee(1.5,5)*s;this.soft.emit(e.x,e.y,e.z,t.x*l+ee(-1.5,1.5),t.y*l+ee(0,2.5),t.z*l+ee(-1.5,1.5),ee(.5,1),.05,.04,.6,0,.03,.9,11,.4)}}sparks(e,t,n){n=Math.ceil(n*(this.tier>0?1:.5));for(let s=0;s<n;s++){let r=ee(2,7);this.add.emit(e.x,e.y,e.z,t.x*r+ee(-2,2),t.y*r+ee(-1,2.5),t.z*r+ee(-2,2),ee(.2,.5),.07,.015,4,ee(1.6,2.6),.5,1,9,.8)}}dust(e,t,n,s=[.45,.36,.26]){n=Math.ceil(n*(this.tier>0?1:.5));for(let r=0;r<n;r++)this.soft.emit(e.x,e.y,e.z,t.x*ee(.3,1.5)+ee(-.5,.5),t.y*ee(.2,1)+ee(0,.6),t.z*ee(.3,1.5)+ee(-.5,.5),ee(.6,1.3),.2,ee(.8,1.4),s[0],s[1],s[2],.35,-.2,1.8)}smoke(e,t,n=2){for(let s=0;s<n;s++)this.soft.emit(e.x,e.y,e.z,t.x*1.2+ee(-.2,.2),t.y*1.2+ee(.1,.5),t.z*1.2+ee(-.2,.2),ee(.5,1),.05,.28,.55,.55,.58,.25,-.4,2)}flash(e,t){this.add.emit(e.x,e.y,e.z,t.x*1,t.y*1,t.z*1,.06,.45,.8,5,3.4,1.4,1,0,0);for(let n=0;n<3;n++)this.add.emit(e.x,e.y,e.z,t.x*ee(3,9)+ee(-2,2),t.y*ee(3,9)+ee(-2,2),t.z*ee(3,9)+ee(-2,2),ee(.08,.18),.1,.02,4,2.2,.6,1,2,1)}glowBurst(e,t,n,s,r=24,o=4){for(let l=0;l<r;l++){let c=ee(cn),a=ee(-.6,1),h=ee(.4,1)*o;this.add.emit(e.x,e.y,e.z,Math.cos(c)*h,a*h,Math.sin(c)*h,ee(.5,1.1),.18,.02,t,n,s,1,2,1.2)}}update(e){this.soft.update(e),this.add.update(e);for(let n of this.tracers)n.visible&&(n.userData.t-=e,n.material.opacity=Math.max(0,n.userData.t/.06),n.userData.t<=0&&(n.visible=!1));let t=!1;for(let n=0;n<this.maxCas;n++){let s=this.casData[n];if(s.t<=0)continue;t=!0,s.t-=e,s.v.y-=9.8*e,s.p.addScaledVector(s.v,e),s.p.y<.02&&(s.p.y=.02,s.v.y*=-.35,s.v.x*=.6,s.v.z*=.6,s.w.multiplyScalar(.5)),s.r.x+=s.w.x*e,s.r.y+=s.w.y*e,s.r.z+=s.w.z*e;let r=Math.min(1,s.t*2);this._q.setFromEuler(s.r),this._s.setScalar(s.t>0?r:0),this._m.compose(s.p,this._q,this._s),this.cas.setMatrixAt(n,this._m),s.t<=0&&(this._m.makeScale(0,0,0),this.cas.setMatrixAt(n,this._m))}(t||this._anyBefore)&&(this.cas.instanceMatrix.needsUpdate=!0),this._anyBefore=t}reset(){this.soft.clear(),this.add.clear();for(let e of this.casData)e.t=0;for(let e of this.tracers)e.visible=!1}},Yl=class{constructor(e,t,n={}){this.o=Object.assign({R:22,y0:.2,y1:6,size:.06,alpha:.2,col:[.9,.75,.55],additive:!0,speed:1},n),this.ps=new ql(t,this.o.additive,e.glow),this.n=t,this.R=this.o.R,this.t=0;for(let s=0;s<t;s++)this.ps.pos[s*3]=ee(-this.R,this.R),this.ps.pos[s*3+1]=ee(this.o.y0,this.o.y1),this.ps.pos[s*3+2]=ee(-this.R,this.R);this.ps.update=s=>this.upd(s),this.points=this.ps.points,this.center={x:0,z:0}}upd(e){let t=this.ps,n=this.o;this.t+=e;let s=this.center;for(let r=0;r<this.n;r++){let o=r*3,l=n.speed;t.pos[o]+=(Math.sin(this.t*.3+r)*.25+.35)*e*l,t.pos[o+1]+=Math.sin(this.t*.4+r*1.7)*.06*e*l,t.pos[o+2]+=Math.cos(this.t*.25+r*.7)*.2*e*l,t.pos[o]-s.x>this.R?t.pos[o]-=this.R*2:t.pos[o]-s.x<-this.R&&(t.pos[o]+=this.R*2),t.pos[o+2]-s.z>this.R?t.pos[o+2]-=this.R*2:t.pos[o+2]-s.z<-this.R&&(t.pos[o+2]+=this.R*2),t.siz[r]=n.size*(1+r%3*.4),t.col[r*4]=n.col[0],t.col[r*4+1]=n.col[1],t.col[r*4+2]=n.col[2],t.col[r*4+3]=n.alpha*(.6+.4*(r%4/3))}t.geo.attributes.position.needsUpdate=!0,t.geo.attributes.aColor.needsUpdate=!0,t.geo.attributes.aSize.needsUpdate=!0}},gw={uniforms:{tDiffuse:{value:null},uTime:{value:0},uDamage:{value:0},uVig:{value:.55},uGrain:{value:.07},uSat:{value:1.1},uAberr:{value:.6},uRes:{value:new ae(1,1)},uLow:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime,uDamage,uVig,uGrain,uSat,uAberr,uLow; uniform vec2 uRes; varying vec2 vUv;
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
    }`},nd=class{constructor(e,t,n,s){this.r=e,this.scene=t,this.camera=n,this.viewScene=s,this.mode="direct",this.w=1,this.h=1,this.pr=1}build(e){if(this.mode=e,this.composer&&(this.composer.dispose?.(),this.composer=null),e==="direct")return;let t=new $t(this.w,this.h,{type:Zt,samples:e==="full"?0:4}),n=this.composer=new $u(this.r,t);if(n.setPixelRatio?.(this.pr),n.setSize(this.w,this.h),n.addPass(new Hl(this.scene,this.camera)),e==="full"){let r=this.gtao=new sa(this.scene,this.camera,this.w*this.pr,this.h*this.pr);r.output=sa.OUTPUT.Default,r.blendIntensity=1,r.updateGtaoMaterial({radius:.7,distanceExponent:1.5,thickness:1.5,scale:1.2,samples:10,distanceFallOff:1,screenSpaceRadius:!1}),r.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,radiusExponent:1,rings:2,samples:8});let o=r._overrideVisibility.bind(r);r._overrideVisibility=()=>{o(),this.scene.traverse(l=>{l.userData.noAO&&l.visible&&(l.visible=!1,r._visibilityCache.push(l))})},n.addPass(r)}let s=new Hl(this.viewScene,this.camera);s.clear=!1,s.clearDepth=!0,n.addPass(s),this.bloom=new ia(new ae(this.w,this.h),.42,.55,.9),n.addPass(this.bloom),n.addPass(new ed),this.grade=new na(gw),this.grade.uniforms.uRes.value.set(this.w*this.pr,this.h*this.pr),n.addPass(this.grade)}setSize(e,t,n){this.w=e,this.h=t,this.pr=n,this.composer&&(this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.gtao?.setSize(e*n,t*n),this.grade.uniforms.uRes.value.set(e*n,t*n))}render(e,t,n,s){if(!this.composer){let o=this.r;o.autoClear=!1,o.clear(),o.render(this.scene,this.camera),o.clearDepth(),o.render(this.viewScene,this.camera),o.autoClear=!0;return}let r=this.grade.uniforms;r.uTime.value=t,r.uDamage.value=n,r.uLow.value=s,this.composer.render(e)}};var id=class{constructor(){this.ctx=null,this.muted=!1,this.lastGroan=0,this.lastTick=0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=this.muted?0:.8;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,n.attack.value=.003,n.release.value=.2,this.master.connect(n),n.connect(t.destination);let s=t.createBuffer(1,t.sampleRate*2,t.sampleRate),r=s.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=Math.random()*2-1;this.noise=s;let o=t.sampleRate*1.8,l=t.createBuffer(2,o,t.sampleRate);for(let c=0;c<2;c++){let a=l.getChannelData(c);for(let h=0;h<o;h++)a[h]=(Math.random()*2-1)*Math.pow(1-h/o,3.2)}this.verb=t.createConvolver(),this.verb.buffer=l,this.verbIn=t.createGain(),this.verbIn.gain.value=.35,this.verbIn.connect(this.verb),this.verb.connect(this.master),this.startAmbient()}setMuted(e){this.muted=e,this.master&&this.master.gain.setTargetAtTime(e?0:.8,this.ctx.currentTime,.03)}get ok(){return this.ctx&&!this.muted&&this.ctx.state==="running"}out(e=0,t=.3){let n=this.ctx,s=n.createGain(),r=s;if(n.createStereoPanner){let l=n.createStereoPanner();l.pan.value=Qt(e,-1,1),s.connect(l),r=l}r.connect(this.master);let o=n.createGain();return o.gain.value=t,r.connect(o),o.connect(this.verbIn),s}nz(e,t,n,s,r,o,l,c=1){let a=this.ctx,h=a.createBufferSource();h.buffer=this.noise,h.loop=!0;let d=a.createBiquadFilter();d.type=n,d.Q.value=c,d.frequency.setValueAtTime(s,e),d.frequency.exponentialRampToValueAtTime(Math.max(20,r),e+t);let u=a.createGain();u.gain.setValueAtTime(o,e),u.gain.exponentialRampToValueAtTime(8e-4,e+t),h.connect(d),d.connect(u),u.connect(l),h.start(e,ee(1)),h.stop(e+t+.05)}tone(e,t,n,s,r,o,l,c=.003){let a=this.ctx,h=a.createOscillator();h.type=n,h.frequency.setValueAtTime(s,e),h.frequency.exponentialRampToValueAtTime(Math.max(10,r),e+t);let d=a.createGain();d.gain.setValueAtTime(1e-4,e),d.gain.linearRampToValueAtTime(o,e+c),d.gain.exponentialRampToValueAtTime(8e-4,e+t),h.connect(d),d.connect(l),h.start(e),h.stop(e+t+.05)}shot(e){if(!this.ok)return;let t=this.ctx,n=t.currentTime,s=this.out(0,e==="shotgun"||e==="lmg"?.5:.3),r={pistol:[.13,2600,.7,150,.9,.55],akimbo:[.1,2800,.55,170,.75,.45],smg:[.09,3400,.5,190,.7,.45],shotgun:[.34,1800,1,85,1.2,.9],sawed:[.28,1500,1.1,70,1.3,1],rifle:[.16,2200,.8,120,1,.7],lever:[.2,1800,.75,110,1.15,.7],nailer:[.045,4200,.28,240,.25,.2],lmg:[.2,1900,.9,95,1.2,.8]}[e]||[.12,2500,.7,150,1,.6];this.nz(n,r[0],"lowpass",r[1],220,r[2],s,.7),this.nz(n,.025,"highpass",3e3,6e3,.6,s),this.tone(n,r[0]*1.2,"sine",r[3],r[3]*.3,r[4]*.9,s),this.tone(n,.05,"square",r[3]*4,r[3]*1.5,.15,s)}click(e=0,t=3200,n=.35,s=0){if(!this.ok)return;let r=this.ctx.currentTime+e,o=this.out(s,.1);this.nz(r,.03,"bandpass",t,t*.7,n,o,3),this.tone(r,.025,"square",t*.3,t*.2,.05,o)}reload(e){if(!this.ok)return;let t=e==="lmg"?3.4:e==="rifle"?1.7:e==="smg"?1.4:1;this.click(.12,2400,.4),this.click(t*.55,1800,.5),this.click(t*.8,3600,.45),e!=="pistol"&&this.click(t*.92,1400,.5)}pump(){this.click(0,900,.6),this.click(.18,1500,.55)}shell(){this.click(0,2e3,.45)}empty(){this.click(0,1500,.3)}groan(e=0,t=.5,n=1,s=1){if(!this.ok)return;let r=this.ctx,o=r.currentTime;if(o-this.lastGroan<.09)return;this.lastGroan=o;let l=o,c=this.out(e,.45),a=ee(70,105)*n,h=r.createOscillator();h.type="sawtooth",h.frequency.setValueAtTime(a*1.25,l),h.frequency.linearRampToValueAtTime(a,l+s*.3),h.frequency.linearRampToValueAtTime(a*.7,l+s);let d=r.createOscillator();d.frequency.value=ee(5,9);let u=r.createGain();u.gain.value=6,d.connect(u),u.connect(h.frequency);let f=r.createBiquadFilter();f.type="bandpass",f.Q.value=5,f.frequency.setValueAtTime(ee(450,700),l),f.frequency.linearRampToValueAtTime(ee(900,1300),l+s*.6);let p=r.createBiquadFilter();p.type="lowpass",p.frequency.value=1600;let x=r.createGain();x.gain.setValueAtTime(1e-4,l),x.gain.linearRampToValueAtTime(t*.5,l+s*.15),x.gain.exponentialRampToValueAtTime(.001,l+s),h.connect(f),f.connect(p),p.connect(x),x.connect(c),h.start(l),d.start(l),h.stop(l+s+.05),d.stop(l+s+.05),this.nz(l,s*.8,"bandpass",900,500,t*.15,c,2)}zhit(e=0,t=!1){if(!this.ok)return;let n=this.ctx.currentTime,s=this.out(e,.2);this.nz(n,.09,"lowpass",700,120,.5,s),this.tone(n,.1,"sine",120,50,.4,s),t&&this.tone(n,.08,"triangle",900,500,.12,s)}zdie(e=0,t=.4){if(!this.ok)return;this.groan(e,t,.75,.7);let n=this.ctx.currentTime+.15,s=this.out(e,.25);this.nz(n,.25,"lowpass",500,60,.6,s),this.tone(n,.3,"sine",90,35,.5,s)}tick(e){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,0);this.tone(t,.05,"square",e?900:1500,e?600:1300,e?.12:.07,n)}cash(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.2);this.tone(e,.12,"triangle",1250,1250,.22,t),this.tone(e+.07,.25,"triangle",1880,1880,.22,t),this.nz(e,.05,"highpass",5e3,8e3,.15,t)}deny(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,0);this.tone(e,.22,"sawtooth",130,90,.2,t),this.tone(e+.1,.22,"sawtooth",110,80,.2,t)}hurt(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.2);this.nz(e,.18,"lowpass",600,90,.9,t),this.tone(e,.25,"sine",80,40,.8,t),this.tone(e,.2,"sawtooth",220,110,.12,t)}heart(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,0);this.tone(e,.14,"sine",62,38,.7,t),this.tone(e+.18,.14,"sine",56,34,.5,t)}plank(e){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,.3);this.nz(t,e?.16:.08,"bandpass",e?500:800,250,.7,n,2),this.tone(t,.1,"triangle",220,90,.4,n),e&&this.nz(t+.03,.12,"highpass",1500,3e3,.3,n)}repair(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.2);this.nz(e,.07,"bandpass",1100,600,.6,t,2),this.tone(e,.08,"square",300,120,.15,t),this.tone(e+.1,.1,"triangle",1500,1500,.1,t)}door(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.5);this.nz(e,2.2,"lowpass",900,150,.7,t,1),this.tone(e,2.2,"sawtooth",55,42,.2,t,.3);for(let n=0;n<5;n++)this.click(.2+n*.35,700+n*120,.7);this.nz(e+2,.4,"lowpass",400,60,.9,t)}boom(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.7);this.nz(e,2.4,"lowpass",2400,50,1.4,t,.7),this.tone(e,1.6,"sine",90,24,1.3,t),this.tone(e+.05,.8,"sawtooth",50,25,.3,t)}power(e){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,.4);(e==="nuke"?[220,277,330,440]:e==="double"?[392,494,587,784]:[330,440,554,659]).forEach((r,o)=>{this.tone(t+o*.07,.4,"triangle",r,r,.2,n),this.tone(t+o*.07,.4,"sine",r*2,r*2,.08,n)})}medkit(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.5);[523,659,784,1047].forEach((n,s)=>{this.tone(e+s*.08,.5,"sine",n,n,.2,t),this.tone(e+s*.08,.5,"triangle",n*2,n*2,.05,t)}),this.tone(e,.9,"sine",300,600,.12,t,.1)}spawnPower(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.5);this.tone(e,.7,"sine",600,1200,.25,t,.05),this.tone(e+.1,.7,"sine",900,1800,.12,t,.05)}round(e){if(!this.ok)return;let t=this.ctx,n=t.currentTime,s=this.out(0,.8);[55,82.4,98,130.8].forEach((o,l)=>{let c=t.createOscillator();c.type="sawtooth",c.frequency.value=o;let a=t.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(200,n),a.frequency.linearRampToValueAtTime(1400,n+1.1),a.frequency.linearRampToValueAtTime(150,n+3.2);let h=t.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.linearRampToValueAtTime(.16,n+.9),h.gain.exponentialRampToValueAtTime(.001,n+3.4),c.connect(a),a.connect(h),h.connect(s),c.start(n),c.stop(n+3.5)}),[440,415,392,330,294].forEach((o,l)=>{this.tone(n+.5+l*.32,1.3,"sine",o,o,.14,s,.01),this.tone(n+.5+l*.32,1.3,"sine",o*2.01,o*2.01,.04,s,.01)}),this.tone(n,.5,"sine",70,28,.9,s),this.nz(n,.35,"lowpass",700,70,.5,s)}over(){if(!this.ok)return;let e=this.ctx,t=e.currentTime,n=this.out(0,.9);[110,130.8,164.8].forEach(s=>{this.tone(t,3.6,"sawtooth",s,s*.5,.12,n,.4)}),this.tone(t,1.5,"sine",60,25,1,n),this.nz(t,1.2,"lowpass",900,60,.7,n)}jingle(e=4){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,.5),s=[523,659,784,659,587,740,880,740];for(let r=0;r<e*4;r++){let o=s[r%s.length]*(r>8?1.12:1);this.tone(t+r*.2,.32,"triangle",o,o,.1,n,.005)}this.nz(t,.4,"bandpass",600,300,.4,n)}open(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.4);this.nz(e,.5,"bandpass",500,900,.4,t,4),this.tone(e,.5,"sawtooth",120,220,.1,t)}startAmbient(){let e=this.ctx,t=e.createGain();t.gain.value=.5,t.connect(this.master);let n=e.createBufferSource();n.buffer=this.noise,n.loop=!0;let s=e.createBiquadFilter();s.type="bandpass",s.Q.value=.8,s.frequency.value=380;let r=e.createGain();r.gain.value=.07;let o=e.createOscillator();o.frequency.value=.11;let l=e.createGain();l.gain.value=.045,o.connect(l),l.connect(r.gain);let c=e.createOscillator();c.frequency.value=.07;let a=e.createGain();a.gain.value=140,c.connect(a),a.connect(s.frequency),n.connect(s),s.connect(r),r.connect(t),n.start(),o.start(),c.start();let h=e.createOscillator();h.type="sawtooth",h.frequency.value=36;let d=e.createBiquadFilter();d.type="lowpass",d.frequency.value=90;let u=e.createGain();u.gain.value=.04,h.connect(d),d.connect(u),u.connect(t),h.start();let f=e.createOscillator();f.type="sine",f.frequency.value=4300;let p=e.createGain();p.gain.value=0;let x=e.createOscillator();x.type="square",x.frequency.value=28;let g=e.createGain();g.gain.value=.003,x.connect(g),g.connect(p.gain);let m=e.createOscillator();m.frequency.value=.3;let v=e.createGain();v.gain.value=.002,m.connect(v),v.connect(p.gain),f.connect(p),p.connect(t),f.start(),x.start(),m.start()}beep(e=3){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,0),s=e<1.2?1480:860;this.tone(t,.04,"square",s,s,e<1.2?.1:.05,n)}_distort(e){let n=new Float32Array(256);for(let s=0;s<256;s++){let r=s/255*2-1;n[s]=Math.tanh(r*e)}return n}ensureMusic(){if(!this.ctx||this.musicBus)return;let e=this.ctx;this.musicBus=e.createGain(),this.musicBus.gain.value=.2,this.musicBus.connect(this.master),this.musicFilter=e.createBiquadFilter(),this.musicFilter.type="lowpass",this.musicFilter.frequency.value=1200,this.musicFilter.connect(this.musicBus),this.guitarShaper=e.createWaveShaper(),this.guitarShaper.curve=this._distort(14),this.guitarShaper.oversample="2x";let t=e.createBiquadFilter();t.type="lowpass",t.frequency.value=2400,this.guitarShaper.connect(t),t.connect(this.musicFilter),this.guitarIn=e.createGain(),this.guitarIn.gain.value=.2,this.guitarIn.connect(this.guitarShaper),this.musicOn=!0,this.musicPlaying=!1,this.musicMood="calm",this.musicLow=!1,this._nextMus=0,this._duckUntil=0,this._six=0}setMusicDetail(e){this.musicLow=!!e,this.guitarShaper&&(this.guitarShaper.oversample=e?"none":"2x")}setMusicOn(e){this.musicOn=!!e,this.musicBus&&this.musicBus.gain.setTargetAtTime(this.musicOn?.2:0,this.ctx.currentTime,.05)}musicStart(){this.init(),this.ensureMusic(),this.musicPlaying=!0,this._nextMus=0,this._six=0}musicStop(){this.musicPlaying=!1,this._nextMus=0}setMusicPhase(e){this.musicMood=e==="hot"||e==="round"?"hot":"calm",this.musicFilter&&this.musicFilter.frequency.setTargetAtTime(this.musicMood==="hot"?this.musicLow?1600:3400:1e3,this.ctx.currentTime,.35)}pumpMusic(){if(!this.ctx||!this.musicPlaying||!this.musicOn||this.muted||this.ctx.state!=="running")return;this.ensureMusic();let e=this.ctx.currentTime,t=e+(this.musicLow?.28:.2);(!this._nextMus||this._nextMus<e-.05)&&(this._nextMus=e+.04);let n=this.musicMood==="hot"?146:96,s=60/n/4;e<(this._duckUntil||0)?this.musicBus.gain.setTargetAtTime(.05,e,.04):this.musicBus.gain.setTargetAtTime(this.musicMood==="hot"?.24:.14,e,.25);let o=(c,a,h,d,u,f,p=this.musicFilter)=>this.tone(c,a,h,d,u,f,p,.004),l=(c,a,h,d,u,f)=>this.nz(c,a,h,d,u,f,this.musicFilter);for(;this._nextMus<t;)this._riffStep(o,l,this._nextMus,s,this._six++,this.musicMood==="hot",this.musicLow),this._nextMus+=s}_riffStep(e,t,n,s,r,o,l,c){let a=c||this.guitarIn,h=(r%16+16)%16,d=Math.floor(r/16)%4,f=[[164.81,246.94,41.2],[196,293.66,49],[146.83,220,36.71],[164.81,246.94,41.2]][d],p=o?h===0||h===3||h===6||h===10:h===0||h===7,x=o?h===4||h===12:h===8;if(p&&(e(n,.14,"sine",160,46,o?.72:.5),t(n,.018,"highpass",2400,700,.16)),x&&(t(n,l?.06:.1,"bandpass",1900,700,o?.32:.18),l||e(n,.04,"triangle",240,150,.07)),!l&&(o||h%2===0)){let m=o&&(h===6||h===14);t(n,m?.07:.018,"highpass",m?5500:8e3,4200,o?h%2?.045:.08:.03)}if((l?h===0:o?h%2===0:h===0||h===8||h===12)&&a){let m=l?s*10:o?s*1.5:s*5,v=o?.11:.06;t(n,.012,"highpass",3e3,1200,.05),e(n,m,"sawtooth",f[0],f[0]*.985,v,a),l||e(n,m,"sawtooth",f[1]*1.005,f[1],v*.55,a)}if(h===0||o&&!l&&(h===8||h===11)){let m=o&&h!==0,v=m?f[2]*1.5:f[2]*1.04,S=f[2];e(n,m?s*4:s*(o?7:12),"sine",v,S,o?.42:.26)}}duck(e){this.ctx&&(this._duckUntil=this.ctx.currentTime+e)}lineFor(e,t,n){let s=["Wave one. The yard is waking.","Wave two. They heard the metal.","Wave three. Do not blink.","Wave four. The fence is tired.","Wave five. They smell you."],r=["The yard remembers.","More of them. Always more.","Keep the lights on."],o={fuel:["The cans are bleeding. Bring them in.","Fuel the generator. They hate the light."],bus:["Board the bus. It still knows the road.","Four windows, then the barn."],carb:["Something in the back lot is missing a heart.","Find the carburetor. It is still warm."],radio:["Hold the signal. They hunt the quiet.","Stay on the mast."],parts:["The side yard wants its pieces back.","Scrap. Three pieces. Do not linger."],clear:["Lot D is full of them. Empty it.","Clear the barn. Leave none standing."]},l={fuel:"The generator drinks. They smelled it.",bus:"The bus is boarded. They know.",carb:"The heart is back in the engine.",radio:"The signal held. Something answered.",parts:"The yard has its pieces.",clear:"Lot D is quiet. For now."};if(e==="wave")return n>=1&&n<=5?s[n-1]:r[(n||0)%r.length];if(e==="done")return l[t]||"The yard remembers.";let c=o[t]||r;return c[(n||0)%c.length]}announce(e){e&&(this._aq=this._aq||[],this._aq.push(String(e)),this._ab||this._drainAnn())}_drainAnn(){let e=(this._aq||[]).shift();if(!e){this._ab=!1;return}this._ab=!0;let t=Math.min(3.4,.6+e.length*.04);if(this.duck(t+.2),this.ctx&&!this.muted&&this.ctx.state==="running"&&this.growl(t),!this.muted&&typeof speechSynthesis<"u")try{let n=new SpeechSynthesisUtterance(e);n.rate=.76,n.pitch=.42,n.volume=.8,speechSynthesis.cancel(),speechSynthesis.speak(n)}catch{}setTimeout(()=>this._drainAnn(),t*1e3+160)}growl(e){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,.55),s=this.ctx.createWaveShaper(),r=new Float32Array(64);for(let l=0;l<64;l++){let c=l/63*2-1;r[l]=Math.tanh(c*4)}s.curve=r;let o=this.ctx.createBiquadFilter();o.type="bandpass",o.Q.value=6,o.frequency.setValueAtTime(180,t),o.frequency.linearRampToValueAtTime(420,t+e*.45),o.frequency.linearRampToValueAtTime(140,t+e),this.tone(t,e,"sawtooth",70,48,.22,s),s.connect(o),o.connect(n),this.nz(t,e*.8,"bandpass",500,220,.08,n,3)}async renderSample(e=8){let n=new OfflineAudioContext(1,Math.floor(22050*e),22050),s=n.createGain();s.gain.value=.85,s.connect(n.destination);let r=n.createBiquadFilter();r.type="lowpass",r.frequency.value=3400,r.connect(s);let o=n.createWaveShaper();o.curve=this._distort(14);let l=n.createBiquadFilter();l.type="lowpass",l.frequency.value=2400,o.connect(l),l.connect(r);let c=n.createGain();c.gain.value=.2,c.connect(o);let a=22050*2,h=n.createBuffer(1,a,22050),d=h.getChannelData(0);for(let M=0;M<a;M++)d[M]=Math.random()*2-1;let u=(M,b,D,k,L,R,N=r)=>{let P=n.createOscillator();P.type=D,P.frequency.setValueAtTime(Math.max(20,k),M),P.frequency.exponentialRampToValueAtTime(Math.max(20,L),M+Math.max(.02,b));let O=n.createGain();O.gain.setValueAtTime(1e-4,M),O.gain.linearRampToValueAtTime(R,M+.006),O.gain.exponentialRampToValueAtTime(8e-4,M+b),P.connect(O),O.connect(N),P.start(M),P.stop(M+b+.03)},f=(M,b,D,k,L,R)=>{let N=n.createBufferSource();N.buffer=h;let P=n.createBiquadFilter();P.type=D,P.frequency.setValueAtTime(k,M),P.frequency.exponentialRampToValueAtTime(Math.max(40,L),M+b);let O=n.createGain();O.gain.setValueAtTime(R,M),O.gain.exponentialRampToValueAtTime(8e-4,M+b),N.connect(P),P.connect(O),O.connect(r),N.start(M),N.stop(M+b+.02)},p=e*.62,x=.05,g=0;for(;x<e-.05;){let M=x<p,b=60/(M?146:96)/4;this._riffStep(u,f,x,b,g++,M,!1,c),x+=b}let m=await n.startRendering(),v=m.getChannelData(0),S=v.length,y=new ArrayBuffer(44+S*2),w=new DataView(y),T=(M,b)=>{for(let D=0;D<b.length;D++)w.setUint8(M+D,b.charCodeAt(D))};T(0,"RIFF"),w.setUint32(4,36+S*2,!0),T(8,"WAVE"),T(12,"fmt "),w.setUint32(16,16,!0),w.setUint16(20,1,!0),w.setUint16(22,1,!0),w.setUint32(24,22050,!0),w.setUint32(28,22050*2,!0),w.setUint16(32,2,!0),w.setUint16(34,16,!0),T(36,"data"),w.setUint32(40,S*2,!0);for(let M=0;M<S;M++){let b=Math.max(-1,Math.min(1,v[M]));w.setInt16(44+M*2,b<0?b*32768:b*32767,!0)}let I="",_=new Uint8Array(y);for(let M=0;M<_.length;M++)I+=String.fromCharCode(_[M]);return btoa(I)}};var Be=null,nn=null,ri=null,d0=new URLSearchParams(location.search),xw=d0.has("touch")||matchMedia("(pointer:coarse)").matches&&"ontouchstart"in window||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),r0=d0.get("quality")||(()=>{try{return localStorage.getItem("vwz_q")||"auto"}catch{return"auto"}})(),fv=r0==="high"||r0==="medium"||r0==="auto"&&!xw,vw=d0.has("oldz")?Promise.resolve(null):Xp(fv).catch(i=>(console.warn("zombie kit failed, using baked pack",i),null)),_w=Yx(fv).catch(i=>(console.warn("soldier kit failed, using procedural",i),null));await qf(["cars"]);var[ad]=await Promise.all([vw,_w]);ad||await qf(["zombies"]);var nc=200,yw=4.5,Mw=.38*nc,ic=.4,pv=.5,mv=20,gv=.5,bw=40,oe=i=>document.getElementById(i),Fn=new URLSearchParams(location.search),hn=Fn.has("touch")||matchMedia("(pointer:coarse)").matches&&"ontouchstart"in window||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),oa=(()=>{if(!Fn.has("mates"))return 0;let i=Fn.get("mates");if(i===""||i==null)return 2;let e=parseInt(i,10);return Number.isFinite(e)?Math.max(0,Math.min(2,e)):2})(),Sw=["Alpha","Bravo"];document.body.classList.toggle("touch",hn);var Ae=new id;try{Ae.muted=localStorage.getItem("vwz_mute")==="1"}catch{}var Xs=oe("c"),oi=new mu({canvas:Xs,antialias:!hn,powerPreference:"high-performance",preserveDrawingBuffer:Fn.has("test")});oi.toneMapping=Vr;oi.toneMappingExposure=1.05;oi.outputColorSpace=ft;oi.shadowMap.type=Hr;var sn=new Cr,Ew=3812412;sn.fog=new Da(Ew,.026);var l0=hn?76:72,kt=new gn(l0,1,.05,700);kt.rotation.order="YXZ";sn.add(kt);var gs=Fn.get("quality")||(()=>{try{return localStorage.getItem("vwz_q")||"auto"}catch{return"auto"}})(),Zn=gs==="high"?2:gs==="medium"?1:gs==="low"||hn?0:2,ca=Gg(hn?256:512),vs=lp(Fn.get("map")||(()=>{try{return localStorage.getItem("vwz_map")}catch{return null}})()),pi=cp(hp(Fn.get("mode")||(()=>{try{return localStorage.getItem("vwz_mode")}catch{return null}})()),1),Et=rx(sn,ca,Zn,vs.id),Nt=new td(sn,ca,Zn),Gs=new Yl(ca,260,{R:20,y0:.3,y1:6,size:.07,alpha:.22});sn.add(Gs.points);var pr=new Yl(ca,46,{R:55,y0:.4,y1:2.2,size:5.5,alpha:.045,col:[.55,.5,.62],additive:!1,speed:.7});sn.add(pr.points);var Pt=new Du(sn,Et,Zn),Ws=sx({scene:sn,world:Et,fx:Nt,zombies:Pt,sfx:Ae,blood:(i,e,t)=>io.blood(i,e,t),get P(){return C},onKill:i=>{Be?.on||nn?.onKill(i)},onSelf:i=>{C.dead||(C.hp-=i,C.lastHit=j.time,C.hp<=0&&md())}});ad?(qp(Pt,ad),window.__hd={kit:ad.hi?"hi":"lo"}):(window.__hd=dx(Pt),_x(Pt));Pt.cam=kt;var lv,Tw=i=>(lv||(lv=rv(Et,Pt,C)))(i),sc=new Cr,aa=new nd(oi,sn,kt,sc),io=iv({renderer:oi,scene:sn,world:Et,viewScene:sc});Pt.onBlood=io.blood;var xv=!1;function vv(i){i>0&&Pt.kit&&!Pt.kit.hi&&!Pt._kitLoading&&(Pt._kitLoading=!0,Xp(!0).then(e=>{qp(Pt,e),window.__hd={kit:"hi"}}).catch(e=>console.warn(e)))}{let i=new Bs(oi),e=new Cr,t=new ge(Et.sky.geometry,Et.sky.material.clone());t.scale.setScalar(.12),e.add(t);let n=i.fromScene(e,0,.1,100);sn.environment=n.texture,sn.environmentIntensity=.45,sc.environment=n.texture,sc.environmentIntensity=.9,i.dispose()}var Yi=new kr(14674687,40,55,.46,.75,1.25);Yi.position.set(.16,-.1,-.1);Yi.target.position.set(.16,-.1,-10);kt.add(Yi,Yi.target);Yi.shadow.mapSize.set(1024,1024);Yi.shadow.camera.near=.3;Yi.shadow.camera.far=40;Yi.shadow.bias=-6e-4;Yi.shadow.normalBias=.03;var fr=new ss(16758886,0,20,2);kt.add(fr);fr.position.set(.15,-.05,-3.2);var Zi=new ge(new Is(3.4,14,28,1,!0),new bt({transparent:!0,depthWrite:!1,blending:ln,side:Ot,uniforms:{c:{value:new me(.75,.85,1)},k:{value:.05}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(vy,1.2)*pow(f,2.)*k); }"}));Zi.geometry.translate(0,-7,0);Zi.geometry.rotateX(-Math.PI/2);Zi.position.set(.16,-.1,-.2);Zi.userData.noAO=!0;Zi.renderOrder=6;kt.add(Zi);var mr=new De;mr.matrixAutoUpdate=!1;sc.add(mr);var ww=new Br(12175615,4864556,1.5),c0=new Os(16773341,2.2),dd=new ss(16758886,0,3,2);c0.position.set(1.5,2,1);mr.add(ww,c0,c0.target,dd);dd.position.set(.15,-.05,-.9);var Ql={},xs=new Jn(new Gn({map:ca.glow,color:new me(6,4,1.6),blending:ln,depthWrite:!1,transparent:!0,fog:!1}));xs.scale.setScalar(.3);xs.visible=!1;xs.userData.noAO=!0;function Aw(i){i.querySelectorAll("[data-w]").forEach(e=>{e.style.width=e.dataset.w+"%"})}function Rw(i){if(!Ql[i]){let e=Dl(i);e.visible=!1,mr.add(e),Ql[i]=e}return Ql[i]}var C={x:0,z:12,yaw:0,pitch:0,vx:0,vz:0,hp:nc,maxHp:nc,lastHit:-99,pts:500,kills:0,heads:0,bob:0,rP:0,rY:0,shake:0,dmg:0,flashlight:!0,slots:[],cur:0,fireCd:0,reloadT:0,reloadTot:0,switchT:0,kick:0,mv:0,sprint:!1,heat:0,dead:!1,deadT:0,sx:0,sy:0,nades:1},j={state:"menu",time:0,runTime:0,round:0,toSpawn:0,spawnT:0,interT:0,phase:"wait",drops:0,lastDrop:-99,kills:0,double:0,powers:[],ups:[],repairT:0,healBeat:0,lastMed:-99,orbit:0,menuSpawn:0,flashT:0,muzzleT:0,nadeCd:0},mt={f:0,s:0,l:0,r:0,fire:!1,reload:!1,interact:!1,interactEdge:!1,sprint:!1},hd=i=>({id:i,mag:jt[i].mag,reserve:jt[i].reserve}),gr=()=>C.slots[C.cur];function fd(i){Zn=i;let e=window.devicePixelRatio||1,t=i===2?Math.min(e,1.75):i===1?Math.min(e,1.25):Qt(e*.7,.6,1);oi.setPixelRatio(t),aa.pr=t,oi.shadowMap.enabled=i>0,oi.shadowMap.needsUpdate=!0,aa.build(["direct","bloom","full"][i]),oc(),Et.setTier(i),Pt.setTier(i),io.setTier(i),xv&&(io.load(i),vv(i)),Pt.max=vs.cap[i>0?1:0],Nt.tier=i,Gs.points.visible=i>0,pr.points.visible=!0,pr.o.alpha=i===0?.03:.045,Zi.visible=i>0&&C.flashlight,sn.environmentIntensity=i===0?.45:.3,Yi.castShadow=i===2;for(let n of Pt.list)n.root.traverse(s=>{s.isMesh&&(s.castShadow=i>0)});sn.traverse(n=>{n.material&&!Array.isArray(n.material)&&(n.material.needsUpdate=!0)}),document.body.classList.toggle("lowq",i===0),Ae.setMusicDetail?.(i===0||hn),oi.toneMappingExposure=i===0?1.15:1.05,oe("fx-damage").style.display=i===0?"":"none"}function oc(){let i=window.innerWidth,e=window.innerHeight;oi.setSize(i,e,!1),Xs.style.width=i+"px",Xs.style.height=e+"px",kt.aspect=i/e,kt.fov=i/e<.9?l0+14:l0,kt.updateProjectionMatrix(),aa.setSize(i,e,oi.getPixelRatio()),Nt.setScale(e*oi.getPixelRatio(),kt.fov),pr.ps.uniforms.uScale.value=Nt.soft.uniforms.uScale.value,Gs.ps.uniforms.uScale.value=Nt.soft.uniforms.uScale.value}window.addEventListener("resize",oc);window.visualViewport?.addEventListener("resize",oc);screen.orientation?.addEventListener?.("change",()=>setTimeout(oc,120));var ec=document.documentElement,Cw=!!(ec.requestFullscreen||ec.webkitRequestFullscreen);document.body.classList.toggle("nofs",!Cw);async function _v(){try{!document.fullscreenElement&&!document.webkitFullscreenElement&&await(ec.requestFullscreen?ec.requestFullscreen({navigationUI:"hide"}):ec.webkitRequestFullscreen?.())?.catch?.(()=>{})}catch{}try{await screen.orientation?.lock?.("landscape")}catch{}setTimeout(oc,150)}["btnFull","btnFull2"].forEach(i=>{let e=document.getElementById(i);e&&e.addEventListener("click",t=>{t.stopPropagation(),_v()})});var Kl=0,ld=0,cd=3;function Pw(i){if(!(j.state!=="playing"||gs!=="auto"||Fn.has("noadapt"))){if(cd>0){cd-=i;return}if(Kl+=i,ld++,Kl>=2.5){let e=ld/Kl;Kl=0,ld=0,e<28&&Zn>0&&(fd(Zn-1),cd=3,yn("Graphics lowered for smoother play"))}}}var Rt={hp:-1,pts:-1,mag:-1,res:-1,name:"",prompt:"",round:-1,alt:"",lobby:!1},h0=0;function yn(i){let e=oe("toast");e.textContent=i,e.classList.add("on"),clearTimeout(h0),h0=setTimeout(()=>e.classList.remove("on"),2600)}function qi(i,e=""){let t=+(document.body.dataset.mban||0)-performance.now();if(t>0){setTimeout(()=>qi(i,e),t);return}let n=oe("banner");n.innerHTML=i+(e?`<small>${e}</small>`:""),n.classList.remove("on"),n.offsetWidth,n.classList.add("on")}function la(i,e,t){let n=document.createElement("span");n.textContent=i,e==="heal"?n.className="g":e&&(n.className="h"),n.style.setProperty("--x",ee(-80,80)+"px"),n.style.top=ee(10,50)+"px",oe("pop").appendChild(n),setTimeout(()=>n.remove(),950)}function Iw(){let i=Math.max(0,Math.round(C.hp));i!==Rt.hp&&(Rt.hp=i,oe("hpFill").style.width=100*i/C.maxHp+"%",oe("hpFill").classList.toggle("low",i<C.maxHp*ic),oe("hpNum").textContent=i);let e=p0();if(e!==Rt.med&&(Rt.med=e,oe("medCue").classList.toggle("on",e)),C.pts!==Rt.pts){if(Rt.pts>=0&&C.pts>Rt.pts){let d=oe("pts");d.classList.remove("bump"),d.offsetWidth,d.classList.add("bump")}Rt.pts=C.pts,oe("pts").textContent=C.pts.toLocaleString()}let t=gr(),n=jt[t.id];n.name!==Rt.name&&(Rt.name=n.name,oe("wName").textContent=n.name),t.mag!==Rt.mag&&(Rt.mag=t.mag,oe("ammoMag").textContent=t.mag,oe("ammoMag").classList.toggle("empty",t.mag===0)),t.reserve!==Rt.res&&(Rt.res=t.reserve,oe("ammoRes").textContent="/ "+t.reserve);let s=C.slots[1-C.cur],r=s?jt[s.id].name+"  "+s.mag+"/"+s.reserve:"";r!==Rt.alt&&(Rt.alt=r,oe("wAlt").textContent=r);let o=!!(Be?.on&&j.mpPhase==="lobby");if(o!==Rt.lobby&&(Rt.lobby=o,oe("roundBox").classList.toggle("waiting",o),oe("roundBox").querySelector(".lbl").textContent=o?"":"ROUND",o?oe("roundNum").textContent="WAITING":Rt.round=-1),!o&&j.round!==Rt.round){Rt.round=j.round;let d=oe("roundNum");d.textContent=j.round||1,d.classList.remove("pulse"),d.offsetWidth,d.classList.add("pulse")}if((C.nades||0)!==Rt.nades){Rt.nades=C.nades||0;let d=oe("nadeCnt");d&&(d.textContent="BAIT "+Rt.nades)}let l=oe("reloadBar");C.reloadT>0?(l.classList.add("on"),l.firstElementChild.style.width=100*(1-C.reloadT/C.reloadTot)+"%"):l.classList.remove("on");let c=Qt(C.dmg,0,1);oe("fx-damage").style.opacity=Zn===0?Math.min(1,c+(C.hp<C.maxHp*ic?.25:0)):0;let a=oe("powers"),h="";j.double>0&&(h+=`<div class="pw pw2x glass${j.double<5?" blink":""}">2\xD7 CASH <b>${Math.ceil(j.double)}</b></div>`),a._h!==h&&(a._h=h,a.innerHTML=h)}function Vs(i,e=!0){let t=oe("prompt");i!==Rt.prompt&&(Rt.prompt=i,t.innerHTML=i,Aw(t),t.classList.toggle("on",!!i))}function ha(){for(let e in Ql)Ql[e].visible=!1;let i=Rw(gr().id);i.visible=j.state==="playing"||C.dead,i.scale.setScalar(hn?.78:.9),i.add(xs),xs.position.copy(i.userData.muzzle.position).add(new U(0,0,-.04)),C.gun=i}function ra(i){i===C.cur||!C.slots[i]||C.switchT>0||(C.cur=i,C.reloadT=0,C.switchT=.32,ha(),Ae.click(0,2500,.3))}function rc(i){let e=C.slots.findIndex(t=>t&&t.id===i);if(e>=0){let t=C.slots[e];t.mag=jt[i].mag,t.reserve=jt[i].reserve;return}C.slots[1]?C.slots[C.cur]=hd(i):(C.slots[1]=hd(i),C.cur=1),C.reloadT=0,C.switchT=.4,ha()}function ud(){if(Be?.on&&j.mpPhase==="lobby")return;let i=gr(),e=jt[i.id];C.reloadT>0||C.switchT>0||i.mag>=e.mag||i.reserve<=0||(C.reloadTot=C.reloadT=e.perShell?e.reload*(e.mag-i.mag)+.4:e.reload,C.shellT=e.reload,Be?.on&&Be.send({t:"reload",w:i.id}),Ae.reload(e.perShell?"pistol":i.id))}function Lw(){let i=gr(),e=jt[i.id];if(Be?.on){C.reloadT=0,e.perShell&&Ae.pump();return}let t=Math.min(e.mag-i.mag,i.reserve);i.mag+=t,i.reserve-=t,C.reloadT=0,e.perShell&&Ae.pump()}var sd=new U,Zl=new U,jl=new U,rd=new U,od=new U,cv=new U,o0=new U;function Dw(i){let e=C.yaw+C.rY,t=C.pitch+C.rP;return i.set(-Math.sin(e)*Math.cos(t),Math.sin(t),-Math.cos(e)*Math.cos(t))}function f0(){return 1.7-(C.dead?Math.min(1.1,C.deadT*1.6):0)+Math.sin(C.bob*2)*.035*C.mv}function yv(){if(Be?.on&&j.mpPhase==="lobby")return;let i=gr(),e=jt[i.id];if(i.mag<=0){Ae.empty(),C.fireCd=.25,ud();return}i.mag--,C.fireCd=60/e.rpm,C.kick=Math.min(1.6,C.kick+1),C.heat=Math.min(1,C.heat+.12),Ae.shot(e.snd),Dw(Zl),sd.set(C.x,f0(),C.z),jl.set(Math.cos(C.yaw),0,-Math.sin(C.yaw)),rd.crossVectors(jl,Zl).normalize(),jl.crossVectors(Zl,rd).normalize();let t=e.spread*(1+C.mv*.9+C.heat*.8),n=Zl.clone();kt.updateMatrixWorld(!0);let s=C.gun.userData.muzzle;if(e.akimbo&&C.gun.userData.muzzles){i.side=i.side?0:1,s=C.gun.userData.muzzles[i.side],C.gun.userData.slideSide=i.side;let c=s.parent;C.gun.userData.flash&&c&&C.gun.userData.flash.position.set(c.position.x+s.position.x,c.position.y+s.position.y,c.position.z+s.position.z)}s.getWorldPosition(od),C.gun.userData.eject.getWorldPosition(cv);let r=new Map,o=0,l=[];for(let c=0;c<e.pellets;c++){let a=ee(cn),h=Math.sqrt(Math.random())*t,d=Zl.clone().copy(n).addScaledVector(jl,Math.cos(a)*h).addScaledVector(rd,Math.sin(a)*h).normalize();l.push([+d.x.toFixed(4),+d.y.toFixed(4),+d.z.toFixed(4)]);let u=Pt.rayHit(sd,d,e.range),f=Et.ray(sd,d,e.range),p=e.range,x=null,g=null;u&&(!f||u.t<f.t)?(p=u.t,g=u):f&&(p=f.t,x=f.n);let m=new U().copy(d).multiplyScalar(p).add(sd);if((c<(e.pellets>1?3:1)||Nt.tier>0)&&Nt.tracer(od,m,e.pellets>1?.006:.011),g){let v=r.get(g.z)||{dmg:0,head:!1,p:m,n:d.clone().negate()},S=e.pellets>1?Qt(1.25-g.t/16,.25,1):1;v.dmg+=e.dmg*(g.head?e.head:1)*S,v.head=v.head||g.head,v.p=m,r.set(g.z,v)}else x&&o<4&&(o++,o0.set(x.x,x.y,x.z),Nt.sparks(m,o0,7),Nt.dust(m,o0,2))}fr.intensity=55,dd.intensity=6,j.muzzleT=.06,xs.visible=!0;{let c=C.gun.userData.flash;c&&(c.visible=!0,c.rotation.z=ee(cn),c.scale.setScalar(ee(.8,1.3)*(e.id==="shotgun"?1.5:1))),C.gun.userData.slideT=1}if(xs.material.rotation=ee(cn),xs.scale.setScalar(ee(.25,.42)*(e.id==="shotgun"?1.4:1)),Nt.flash(od,n),Nt.smoke(od,n,1),Nt.maxCas){let c=new U().copy(jl).multiplyScalar(ee(1.2,2.4)).addScaledVector(rd,ee(1.2,2.2)).addScaledVector(n,ee(-.3,.5));Nt.casing(cv,c)}if(C.rP+=e.kick*ee(.85,1.15),C.rY+=ee(-1,1)*e.kick*.45,C.shake=Math.min(1,C.shake+e.shake*.5),e.perShell===!0&&i.mag>0&&setTimeout(()=>Ae.pump(),260),Be?.on){Be.send({t:"shot",w:i.id,dirs:l});for(let[c,a]of r)Nt.blood(a.p,a.n,a.head?14:8),Ae.zhit(tc(c.pos),a.head)}else for(let[c,a]of r){let h=Pt.damage(c,a.dmg,a.head,a.p,a.n);if(!h)continue;let d=j.double>0?2:1;Ae.zhit(tc(c.pos),a.head),Nt.blood(a.p,a.n,a.head?14:8),Nt.sparks(a.p,a.n,2);let u=10*d,f=oe("hitm");f.classList.remove("on","kill"),f.offsetWidth,f.classList.add("on"),Ae.tick(!1),h.killed&&(u=(a.head?100:c.value)*d,C.kills++,j.kills++,a.head&&C.heads++,f.classList.add("kill"),Ae.tick(!0),Ae.zdie(tc(c.pos),.5),Nt.blood(a.p,a.n,26,1.4),Nt.dust(new U(c.pos.x,.3,c.pos.z),{x:0,y:1,z:0},5),C.shake=Math.min(1,C.shake+.1),Nw(c),Mv(c),nn.onKill(c)),setTimeout(()=>f.classList.remove("on"),h.killed?280:190),C.pts+=u,la("+"+u,a.head&&h.killed)}i.mag===0&&!C.reloadT&&setTimeout(()=>j.state==="playing"&&ud(),220)}var tc=i=>{let e=i.x-C.x,t=i.z-C.z,n=Math.hypot(e,t)||1;return(e*Math.cos(C.yaw)-t*Math.sin(C.yaw))/n};function Nw(i){j.round<2||j.drops>=pi.maxDrops||j.time-j.lastDrop<18||Math.random()<.05*pi.drop&&ac(In(["ammo","double","nuke"]),i.pos.x,i.pos.z)}var Xi={ammo:{name:"FULL MAGS",col:[.3,.7,2.4],sub:"All ammo refilled",hex:"#6bb8ff"},double:{name:"2\xD7 CASH",col:[3,2.2,.4],sub:"Double points for 30s",hex:"#ffd36b"},nuke:{name:"KABOOM",col:[3,.4,.4],sub:"Every zombie goes down",hex:"#ff6b6b"},health:{name:"MED KIT",col:[.25,2.6,.9],sub:"+50% health",hex:"#4dffb0"}};function ac(i,e,t){let n=Xi[i].col,s=new De;s.position.set(e,1,t);let r=i==="health",o;if(r){let u=new st({color:new me(...n),toneMapped:!1});o=new De,o.add(new ge(new ct(.46,.14,.14),u),new ge(new ct(.14,.46,.14),u),new ge(new ct(.14,.14,.46),u)),o.traverse(f=>f.userData.noAO=!0)}else o=new ge(new Ka(.28,0),new st({color:new me(...n),toneMapped:!1}));o.userData.noAO=!0;let l=document.createElement("canvas");l.width=256,l.height=64;let c=l.getContext("2d");c.font="900 40px system-ui, sans-serif",c.textAlign="center",c.fillStyle=Xi[i].hex,c.shadowColor=Xi[i].hex,c.shadowBlur=14,c.fillText(Xi[i].name,128,44);let a=new Jn(new Gn({map:new Gt(l),transparent:!0,depthWrite:!1,fog:!1}));a.scale.set(1.5,.375,1),a.position.y=.6,a.userData.noAO=!0;let h=new Jn(new Gn({map:ca.glow,color:new me(n[0]*.55,n[1]*.55,n[2]*.55),blending:ln,depthWrite:!1,transparent:!0}));h.scale.setScalar(1.25),h.userData.noAO=!0;let d=new ge(new It(.12,.12,12,8,1,!0),new st({color:new me(n[0]*.3,n[1]*.3,n[2]*.3),transparent:!0,opacity:.35,blending:ln,depthWrite:!1}));d.position.y=5,d.userData.noAO=!0,s.add(o,a,h,d),sn.add(s),j.ups.push({type:i,g:s,core:o,label:a,t:r?bw:28,x:e,z:t}),r?j.lastMed=j.time:(j.drops++,j.lastDrop=j.time),Ae.spawnPower()}function p0(){return j.state==="playing"&&!C.dead&&C.hp<=C.maxHp*pv&&j.time-j.lastMed>=mv&&!j.ups.some(i=>i.type==="health")}function Mv(i){p0()&&ac("health",i.pos.x,i.pos.z)}function bv(i){if(i.type==="health"){let t=C.maxHp*gv,n=C.hp;C.hp=Math.min(C.maxHp,C.hp+t),C.lastHit=Math.max(C.lastHit,j.time-1),Ae.medkit(),qi(Xi.health.name,"+"+Math.round(C.hp-n)+" health"),la("+"+Math.round(C.hp-n)+" HP","heal"),sn.remove(i.g),Nt.glowBurst(new U(i.x,1,i.z),...Xi.health.col.map(s=>s*.7),24,4);return}Ae.power(i.type);let e=0;if(qi(Xi[i.type].name,Xi[i.type].sub),i.type==="ammo")for(let t of C.slots)t&&(t.mag=jt[t.id].mag,t.reserve=jt[t.id].reserve);else if(i.type==="double")j.double=30;else if(i.type==="nuke"){let t=Pt.killAll();for(let n of t)Be?.on||nn.onKill(n),Nt.blood(new U(n.pos.x,1.2,n.pos.z),{x:0,y:1,z:0},22,1.4),Nt.glowBurst(new U(n.pos.x,1.2,n.pos.z),3,1.5,.4,10,5);C.pts+=400*(j.double>0?2:1),Ae.boom(),C.shake=1,oe("fx-flash").style.transition="none",oe("fx-flash").style.opacity=.85,requestAnimationFrame(()=>{oe("fx-flash").style.transition="opacity 1.2s",oe("fx-flash").style.opacity=0}),j.kills+=t.length,C.kills+=t.length}sn.remove(i.g),Nt.glowBurst(new U(i.x,1,i.z),...Xi[i.type].col.map(t=>t*.7),24,4)}nn=ix({world:Et,P:C,G:j,sfx:Ae,banner:qi,toast:yn,popText:la,spawnPower:ac,weapons:jt,phase:()=>Be?.on?j.mpPhase:j.phase});var no={};function Uw(i){if(!no[i]){let e=Dl(i,!1);e.scale.setScalar(1.6),e.rotation.y=0,e.visible=!1,Et.crate.hold.add(e),no[i]=e}return no[i]}function Ow(){let i=Et.crate;if(i.state==="idle"){if(C.pts<i.price){Ae.deny(),yn("Not enough points");return}C.pts-=i.price,Ae.cash(),Ae.open(),Ae.jingle(4),i.state="roll",i.t=0,i.pick=In(Ll.filter(e=>!C.slots.some(t=>t&&t.id===e)).concat(["smg"].filter(()=>!1))),i.pick=i.pick||In(Ll)}else i.state==="ready"&&(rc(i.weapon),Ae.cash(),Ae.click(0,2e3,.5),qi(jt[i.weapon].name.toUpperCase()),pd())}function pd(){let i=Et.crate;i.state="idle",i.t=0;for(let e in no)no[e].visible=!1;i.model=null}function Fw(i){let e=Et.crate,t=e.state==="idle"?0:-1.25;if(e.lid.rotation.x+=(t-e.lid.rotation.x)*Math.min(1,i*6),e.state==="roll"){e.t+=i;let n=Math.floor(e.t/.14)%Ll.length,s=e.t>3.6?e.pick:Ll[n];for(let o in no)no[o].visible=!1;let r=Uw(s);r.visible=!0,e.model=r,e.t>3.6&&(e.state="ready",e.weapon=e.pick,e.t=0,Ae.power("ammo"))}else e.state==="ready"&&(e.t+=i,e.t>9&&(Ae.open(),pd(),yn("The toolbox slammed shut")))}function Bw(i){return Math.max(3,Math.round((6+i*2.3+i*i*.12)*pi.count))}function hv(i){j.round=i,j.toSpawn=Bw(i),j.brutes=i>=5?i%5===0?Math.min(4,1+(i/5|0)):i>=7?1:0:0,j.brutes=Math.round(j.brutes*pi.brute),j.phase="round",j.spawnT=1.5,j.drops=0,(C.nades||0)<1&&(C.nades=1);let e=Ae.lineFor("wave","",i);Ae.round(i),Ae.setMusicPhase("hot"),qi("ROUND "+i,e),Be?.on||Ae.announce(e);let t=oe("roundNum");t.classList.remove("pulse"),t.offsetWidth,t.classList.add("pulse")}function kw(){let i=Qo(Et.doors);return Et.windows.filter(e=>i.has(e.area))}function zw(i){if(j.phase!=="round"||j.toSpawn<=0||(j.spawnT-=i,j.spawnT>0))return;if(Pt.alive>=Pt.max){j.spawnT=.3;return}let e=kw();e.sort((r,o)=>(r.c.x-C.x)**2+(r.c.z-C.z)**2-((o.c.x-C.x)**2+(o.c.z-C.z)**2));let t=Math.random()<.6?e[Math.min(e.length-1,Math.random()*2|0)]:In(e),n=j.brutes>0&&j.toSpawn<=j.brutes,s=Pt.spawn(t,j.round,n);s&&(j.toSpawn--,s.hp=s.maxHp=s.maxHp*pi.hp,s.speed=Math.min(6.5,s.speed*pi.speed),s.dmg=Math.round(s.dmg*pi.dmg)),j.spawnT=Math.max(.3,2-j.round*.13)*ee(.7,1.2)*pi.spawnGap}function Sv(){let i=null,e=(s,r,o)=>{r<o&&(!i||r<i.d)&&(i={...s,d:r})};for(let s of Et.windows)s.count<6&&e({type:"win",w:s},Math.hypot(C.x-s.in.x,C.z-s.in.z),2.1);for(let s of Et.buys)e({type:"buy",b:s},Math.hypot(C.x-s.pos.x,C.z-s.pos.z),1.9),s.back&&Math.hypot(C.x-s.pos.x,C.z-s.pos.z)<2.15&&e({type:"buy",b:s},Math.hypot(C.x-s.back.x,C.z-s.back.z),1.9);for(let s of Et.doors)if(!s.open){let r=s.stand?Object.values(s.stand):[s.pos];for(let o of r)e({type:"door",door:s},Math.hypot(C.x-o.x,C.z-o.z),2.4)}let t=nn&&nn.focus(C.x,C.z);t&&e(t,t.d,t.d+.01);let n=Et.crate;return(n.state==="idle"||n.state==="ready")&&e({type:"crate"},Math.hypot(C.x-n.x,C.z-n.z),2.2),i}function Ev(i,e,t){if(Be?.on)return Qw(i,e,t);if(i.type==="win"){e&&(j.repairT+=t,j.repairT>.5&&(j.repairT=0,Et.addPlank(i.w)&&(Ae.repair(),C.pts+=10*(j.double>0?2:1),la("+10"))));return}if(i.type==="job"&&i.hold){e&&(j.repairT+=t,j.repairT>.5&&(j.repairT=0,nn.use()));return}if(mt.interactEdge)if(i.type==="buy"){if(i.b.id==="nade"){if((C.nades||0)>=2){yn("Bait pouch is full");return}if(C.pts<i.b.price){Ae.deny(),yn("Not enough points");return}C.pts-=i.b.price,C.nades++,Ae.cash();return}let n=C.slots.find(r=>r&&r.id===i.b.id),s=n?Math.floor(i.b.price/2):i.b.price;if(n&&n.mag===jt[n.id].mag&&n.reserve===jt[n.id].reserve){yn("Ammo already full");return}if(C.pts<s){Ae.deny(),yn("Not enough points");return}C.pts-=s,Ae.cash(),rc(i.b.id)}else if(i.type==="door"){let n=i.door,s=nn.price(n);if(C.pts<s){Ae.deny(),yn("Not enough points");return}C.pts-=s,Ae.cash(),Ae.door(),n.open=!0,qi(n.id==="AB"?"GATE OPEN":n.name.toUpperCase(),n.blurb)}else i.type==="job"?nn.use():i.type==="crate"&&Ow()}function Hw(i){if(!i)return Vs("");let e="<kbd>E</kbd>",t=n=>`<span class="cost${C.pts<n?" poor":""}">${n}</span>`;if(i.type==="win")Vs(`${e}Hold to repair barricade<span class="prog"><i data-w="${Math.round(i.w.count/6*100)}"></i></span>`);else if(i.type==="buy"){let n=C.slots.find(s=>s&&s.id===i.b.id);Vs(n?`${e}Refill ${i.b.name}${t(Math.floor(i.b.price/2))}`:`${e}Buy ${i.b.name}${t(i.b.price)}`)}else if(i.type==="door"){let n=nn.price(i.door);Vs(`${e}${i.door.id==="AB"?"Open the gate":"Open "+i.door.name}${t(n)}`)}else i.type==="job"?Vs(`${e}${i.hold?"Hold to board the window":i.name}`):i.type==="crate"&&Vs(Et.crate.state==="ready"?`${e}Take ${jt[Et.crate.weapon].name}`:`${e}Lucky Toolbox${t(Et.crate.price)}`)}function Gw(i){let e=mt.f,t=mt.s,n=0,s=0;if(e||t){let a=Math.sin(C.yaw),h=Math.cos(C.yaw);n=-a*e+h*t,s=-h*e-a*t;let d=Math.hypot(n,s)||1;n/=d,s/=d}let r=Math.min(1,Math.hypot(e,t));C.sprint=(mt.sprint||r>.92&&hn)&&e>.3&&C.reloadT<=0;let o=(C.sprint?6.6:4.5)*(C.switchT>0?.9:1)*r,l=Math.min(1,i*10);C.vx+=(n*o-C.vx)*l,C.vz+=(s*o-C.vz)*l,C.x+=C.vx*i,C.z+=C.vz*i,Et.resolve(C,.42);let c=Math.hypot(C.vx,C.vz);C.mv=Qt(c/4.5,0,1.4),C.bob+=c*i*1.7}function Vw(i){C.fireCd>0&&(C.fireCd-=i),C.switchT>0&&(C.switchT-=i),C.heat=Math.max(0,C.heat-i*1.4),C.kick=Math.max(0,C.kick-i*8);let e=gr(),t=jt[e.id];if(C.reloadT>0){let n=C.reloadT;C.reloadT-=i,t.perShell?(C.shellT-=i,!Be?.on&&C.shellT<=0&&e.mag<t.mag&&e.reserve>0?(e.mag++,e.reserve--,C.shellT=t.reload,Ae.shell()):Be?.on&&C.shellT<=0&&(C.shellT=t.reload,Ae.shell()),mt.fire&&e.mag>0?C.reloadT=0:(e.mag>=t.mag||e.reserve<=0)&&(C.reloadT=0,Ae.pump())):C.reloadT<=0&&Lw()}mt.fire&&C.fireCd<=0&&C.switchT<=0&&(C.reloadT<=0||t.perShell)&&!C.sprintBlock&&((t.auto||!C.fired)&&yv(),C.fired=!0),mt.fire||(C.fired=!1),mt.reload&&(mt.reload=!1,ud())}function uv(i,e){C.rP*=Math.exp(-i*9),C.rY*=Math.exp(-i*9),C.shake=Math.max(0,C.shake-i*2.2),C.dmg=Math.max(0,C.dmg-i*.8);let t=C.shake*C.shake,n=(Math.sin(e*61)+Math.sin(e*37.3))*.5,s=(Math.sin(e*53.1)+Math.cos(e*41))*.5,r=C.dead?Math.min(1,C.deadT*1.4):0,o=Qt(C.vx*Math.cos(C.yaw)-C.vz*Math.sin(C.yaw),-6,6);kt.position.set(C.x+n*t*.06,f0()+s*t*.05,C.z),kt.rotation.set(Qt(C.pitch+C.rP+s*t*.035-r*.4,-1.5,1.5),C.yaw+C.rY+n*t*.035,-o*.0045+n*t*.02+r*.9),kt.updateMatrixWorld(!0),mr.matrix.copy(kt.matrixWorld);let l=C.gun;if(!l)return;let c=l.userData.base,a=C.kick,h=a*.05,d=0,u=0,f=0,p=0,x=a*.04;if(f+=Math.cos(C.bob)*.006*C.mv,p+=Math.abs(Math.sin(C.bob))*.008*C.mv*-1,f+=-Qt(C.sx,-1,1)*.02,p+=Qt(C.sy,-1,1)*.02,C.sprint&&(d+=.45,h-=.25,p-=.05,f-=.03),C.reloadT>0&&!jt[gr().id].perShell){let S=1-C.reloadT/C.reloadTot,y=Math.sin(S*Math.PI);h-=y*.5,p-=y*.12,u+=y*.35,f-=y*.04}else if(C.reloadT>0){let S=Math.abs(Math.sin(e*6))*.5+.3;h-=.25,p-=.05,d+=.1*S}if(C.switchT>0){let S=C.switchT/.32;p-=Math.sin(Qt(S,0,1)*Math.PI/2)*.35,h-=S*.5}let g=1-Math.exp(-i*18);if(l.userData.rx=ds(l.userData.rx||0,h,g),l.userData.ry=ds(l.userData.ry||0,d,g),l.userData.rz=ds(l.userData.rz||0,u,g),l.rotation.set(l.userData.rx,l.userData.ry,l.userData.rz),l.userData.slideT>0){l.userData.slideT=Math.max(0,l.userData.slideT-i*14);let S=Math.sin(l.userData.slideT*Math.PI);if(l.userData.slides){let y=l.userData.slideSide||0;l.userData.slides[y]&&(l.userData.slides[y].position.z=S*.028)}else l.userData.slide&&(l.userData.slide.position.z=S*.028);l.userData.pump&&(l.userData.pump.position.z=0)}l.position.set(c.x+f,c.y+p,c.z+x),C.sx*=Math.exp(-i*8),C.sy*=Math.exp(-i*8),j.muzzleT>0&&(j.muzzleT-=i,j.muzzleT<=0&&(xs.visible=!1,C.gun?.userData.flash&&(C.gun.userData.flash.visible=!1))),fr.intensity*=Math.exp(-i*40),fr.intensity<.5&&(fr.intensity=0),dd.intensity=fr.intensity>0?fr.intensity/9:0;let m=oe("cross"),v=6+jt[gr().id].spread*650*(1+C.mv*.9+C.heat*.8)*.5;m._sp!==Math.round(v)&&(m._sp=Math.round(v),m.style.setProperty("--s",m._sp+"px"),m.children[0].style.left=-(m._sp+9)+"px",m.children[0].style.top="-1px",m.children[1].style.left=m._sp+"px",m.children[1].style.top="-1px",m.children[2].style.top=-(m._sp+9)+"px",m.children[2].style.left="-1px",m.children[3].style.top=m._sp+"px",m.children[3].style.left="-1px")}function Ww(i){if(C.dead||j.state!=="playing")return;C.hp-=i.dmg,C.lastHit=j.time,C.dmg=Math.max(C.dmg,.65+.35*(1-Math.max(0,C.hp)/C.maxHp)),C.shake=1,Ae.hurt();let e=i.pos.x-C.x,t=i.pos.z-C.z,n=Math.atan2(e,-t)- -C.yaw,s=oe("fx-dir");s.style.display="block",s.firstElementChild.style.transform=`rotate(${n*180/Math.PI}deg)`,s.style.opacity=1,setTimeout(()=>s.style.opacity=0,500),setTimeout(()=>s.style.display="none",900),C.hp<=0&&md()}function md(){C.hp=0,C.dead=!0,C.deadT=0,!Be?.on&&nn&&nn.drop(),Ae.over(),mt.fire=!1,oe("hud").classList.add("hud-dead"),Vs(""),document.pointerLockElement&&document.exitPointerLock?.()}function m0(){try{return JSON.parse(localStorage.getItem("vwz_scores")||"[]")}catch{return[]}}function Xw(i){let e=m0();e.push(i),e.sort((t,n)=>n.round-t.round||n.pts-t.pts);try{localStorage.setItem("vwz_scores",JSON.stringify(e.slice(0,5)))}catch{}return e.slice(0,5)}var $l=null;function g0(){us.top().then(i=>{us.render(oe("globalList"),i,localStorage.getItem("vwfest_nick")),us.render(oe("oGlobal"),i,localStorage.getItem("vwfest_nick"))})}function qw(){$l={round:Math.max(1,j.round),pts:C.pts,kills:C.kills},oe("nick").value=localStorage.getItem("vwfest_nick")||"",oe("postMsg").textContent="",oe("postMsg").className="postMsg",oe("fPost").classList.toggle("hidden",!us.hasToken()),oe("bPost").disabled=!1,us.hasToken()||(oe("postMsg").textContent="Leaderboard offline: score saved on this device."),g0()}oe("fPost").onsubmit=i=>{if(i.preventDefault(),!$l)return;let e=oe("nick").value.trim();oe("bPost").disabled=!0;try{localStorage.setItem("vwfest_nick",e)}catch{}us.submit(e,$l.round,$l.pts,$l.kills).then(t=>{t.ok?(oe("fPost").classList.add("hidden"),oe("postMsg").className="postMsg ok",oe("postMsg").textContent="Posted! You are #"+t.rank+" on the survivor board.",us.render(oe("oGlobal"),t.top,e),us.render(oe("globalList"),t.top,e)):(oe("postMsg").textContent=t.error||"Could not post.",oe("bPost").disabled=!1)})};function x0(i,e){i.innerHTML=e.length?e.map((t,n)=>`<li>Round <b>${t.round}</b> \xB7 ${t.kills} kills \xB7 ${t.pts.toLocaleString()} pts</li>`).join(""):'<li class="muted">No runs yet \u2014 be the first.</li>'}function Yw(i,e,t){let n=((e-i+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return i+n*t}function u0(){Be?.clearDummies?.()}function Zw(){if(!oa||Be?.on){u0(),Be?.on||oe("mpTag").classList.add("hidden");return}u0();let i=C.x,e=C.z,t=C.yaw,n=-Math.sin(t),s=-Math.cos(t),r=Math.cos(t),o=-Math.sin(t);for(let l=0;l<oa;l++){let c=l===0?-1.35:1.35,a=1.7+l*.25,h=i+n*a+r*c,d=e+s*a+o*c,u=Be.spawnDummy(Sw[l],l,h,d);u.rotation.y=t,u.userData.followSide=c,u.userData.followAhead=a,Hs(u,{dt:0,t:0,speed:0,fwd:0,pitch:0,down:!1})}oe("mpTag").textContent="PREVIEW \xB7 LOCAL TEAMMATES",oe("mpTag").classList.remove("hidden")}function jw(i,e){if(!oa||Be?.on)return;let t=Be?.S?.remotes;if(!t||!t.size)return;let n=-Math.sin(C.yaw),s=-Math.cos(C.yaw),r=Math.cos(C.yaw),o=-Math.sin(C.yaw);for(let l of t.values()){let c=l.userData.followAhead||1.7,a=l.userData.followSide||-1.35,h=C.x+n*c+r*a,d=C.z+s*c+o*a,u=h-l.position.x,f=d-l.position.z,p=Math.hypot(u,f),x=0,g=0,m=0;if(p>.28){let T=p>5?5.4:p>2?3.5:2.1;m=Math.min(T,p/Math.max(i,.016));let I=Math.min(p,m*i),_=1/p;x=u*_*m,g=f*_*m,l.position.x+=u*_*I,l.position.z+=f*_*I,l.rotation.y=Math.atan2(-u,-f)}else l.rotation.y=Yw(l.rotation.y,C.yaw,Math.min(1,i*4));let v=l.rotation.y,S=x*-Math.sin(v)+g*-Math.cos(v),y=x*Math.cos(v)+g*-Math.sin(v),w=Math.hypot(kt.position.x-l.position.x,kt.position.y-1.5,kt.position.z-l.position.z);Hs(l,{dt:i,t:e,speed:m,fwd:S,strafe:y,pitch:0,down:!1,dist:w})}}function Kw(){Object.assign(C,{x:vs.spawn.x,z:vs.spawn.z,yaw:0,pitch:0,vx:0,vz:0,hp:nc,lastHit:-99,pts:pi.startPts,kills:0,heads:0,rP:0,rY:0,shake:0,dmg:0,cur:0,fireCd:0,reloadT:0,switchT:0,kick:0,dead:!1,deadT:0,slots:[hd("pistol"),null],nades:1}),Object.assign(j,{time:0,runTime:0,round:0,toSpawn:0,phase:"wait",interT:2.6,drops:0,double:0,kills:0,repairT:0,lastMed:-99}),Pt.reset(),Nt.reset();for(let i of j.ups)sn.remove(i.g);j.ups=[],pd(),Et.crate.lid.rotation.x=0;for(let i of Et.windows)for(;i.count<6;)Et.addPlank(i);Rt.hp=Rt.pts=Rt.mag=Rt.res=-1,Rt.name=Rt.alt="",Rt.round=-1,oe("hud").classList.remove("hud-dead"),Et.resetDoors(),nn&&nn.reset(),Ws&&Ws.reset(),ha()}function ua(){if(Ae.init(),Ae.musicStart(),Ae.setMusicDetail(Zn===0||hn),Kw(),us.start(),j.state="playing",ha(),["menu","over","pause"].forEach(i=>oe(i).classList.add("hidden")),oe("hud").classList.remove("hidden"),oe("touch").classList.toggle("hidden",!hn),Zi.visible=Zn>0&&C.flashlight,cd=3,Kl=0,ld=0,Zw(),!hn&&!Fn.has("test")&&j.mpPhase!=="lobby")try{Xs.requestPointerLock?.()?.catch?.(()=>{})}catch{}else hn&&j.mpPhase!=="lobby"&&_v();yn(oa&&!Be?.on?"Local teammate preview \u2014 they follow you. This is not live co-op.":"Hold E at windows to repair \xB7 Open the gate for new guns")}function lc(){j.state!=="playing"||C.dead||(j.state="paused",oe("pause").classList.remove("hidden"),mt.fire=!1,mt.f=mt.s=0,document.pointerLockElement&&document.exitPointerLock?.(),Vs(""))}function v0(){if(j.state==="paused"&&(j.state="playing",oe("pause").classList.add("hidden"),Ae.init(),!hn&&!Fn.has("test")))try{Xs.requestPointerLock?.()?.catch?.(()=>{})}catch{}}function cc(){Ae.musicStop(),ri&&ri.leave(),oe("btnVoice").classList.add("hidden"),oe("voiceList").classList.add("hidden"),u0(),Be?.on&&Be.stop(),oe("mpTag").classList.add("hidden"),j.mpPhase="",j.state="menu",["pause","over","lobby"].forEach(i=>oe(i).classList.add("hidden")),oe("menu").classList.remove("hidden"),oe("hud").classList.add("hidden"),oe("touch").classList.add("hidden"),x0(oe("scoreList"),m0()),g0(),Pt.reset(),C.gun&&(C.gun.visible=!1),Vs(""),C.dead=!1,xs.visible=!1}function Tv(){Ae.musicStop(),j.state="over";let i=Xw({round:Math.max(1,j.round),kills:C.kills,pts:C.pts,t:Date.now()});oe("oRound").textContent=Math.max(1,j.round),oe("oKills").textContent=C.kills,oe("oHeads").textContent=C.heads,oe("oPts").textContent=C.pts.toLocaleString();let e=Math.floor(j.runTime);oe("oTime").textContent=Math.floor(e/60)+":"+String(e%60).padStart(2,"0"),oe("oMsg").textContent=j.round>=10?"Legendary run. The yard remembers.":j.round>=5?"Solid stand. They got you in the end.":"The dead took the yard. Try again.",x0(oe("oScores"),i),qw(),oe("over").classList.remove("hidden"),oe("hud").classList.add("hidden"),oe("touch").classList.add("hidden"),C.gun&&(C.gun.visible=!1)}var a0={x:0,z:8},Jl={groan:(i,e)=>Ae.groan(tc(i.pos),Qt(1-e/40,.1,.8)*.8,i.brute?.6:i.runner?1.25:ee(.9,1.1),i.brute?1.4:ee(.8,1.3)),plank:(i,e)=>{Ae.plank(!0),Nt.dust(new U(i.c.x+i.n.x*.3,1.4,i.c.z+i.n.z*.3),i.n,6,[.5,.4,.3])},hitPlayer:Ww},$w={groan:()=>{},plank:()=>{},hitPlayer:()=>{}};function _0(i){j.time+=i;let e=j.time;if(j.state==="menu"){j.orbit+=i*.12;let n=j.orbit,s=9.5;if(kt.position.set(Math.sin(n)*s,2.6+Math.sin(n*.7)*.4,6+Math.cos(n)*s*.8),kt.lookAt(0,1.8,3),kt.rotation.z=0,j.menuSpawn-=i,j.menuSpawn<=0&&Pt.alive<5){j.menuSpawn=2.2;let r=Pt.spawn(In(Et.windows.filter(o=>o.area==="A")),2);r&&(r.state="chase",r.pos.set(ee(-14,14),0,ee(-18,-4)),r.speed=ee(.9,1.5),r.dmg=0)}a0.x=0,a0.z=6,Pt.update(i,e,a0,Et.door,$w),Et.update(i,e,{x:kt.position.x,z:kt.position.z}),Nt.update(i),nn&&nn.frame(kt),Gs.center={x:0,z:6},pr.center=Gs.center,Gs.ps.update(i),pr.ps.update(i),mr.visible=!1,Zi.visible=!1;return}if(mr.visible=!0,Zi.visible=Zn>0&&C.flashlight&&!C.dead,j.state==="paused")return;if(j.state==="over"){Nt.update(i);return}if(j.runTime+=i,C.dead){if(C.deadT+=i,Be?.on?Be.update(i,e,Jl):Pt.update(i,e,C,Et.door,{...Jl,hitPlayer:()=>{}}),Et.update(i,e,C),Nt.update(i),uv(i,e),Be?.on&&C.deadT>.8){let n=Be.spectate(kt);mr.visible=!1,oe("specTag").textContent=n?"DOWN \xB7 SPECTATING "+n:"DOWN \xB7 waiting for the round to end",oe("specTag").classList.remove("hidden")}C.deadT>2.4&&!Be?.on&&Tv();return}if(Gw(i),Vw(i),oa&&!Be?.on&&jw(i,e),!Be?.on&&C.hp<C.maxHp&&e-C.lastHit>yw&&(C.hp=Math.min(C.maxHp,C.hp+Mw*i)),C.hp<C.maxHp*ic&&e-j.healBeat>.85&&(j.healBeat=e,Ae.heart()),Be?.on)Be.update(i,e,Jl);else if(j.phase==="wait")j.interT-=i,j.interT<=0&&hv(1);else if(j.phase==="round"){if(zw(i),j.toSpawn<=0&&Pt.alive<=0){let n=j.round;j.phase="inter",j.interT=pi.inter,Ae.setMusicPhase("calm"),!Be?.on&&nn&&nn.onWave(n)}}else j.phase==="inter"&&(j.interT-=i,j.interT<=0&&hv(j.round+1));if(j.state==="playing"){let n=j.phase==="round"?"hot":"calm";Ae.musicMood!==n&&Ae.setMusicPhase(n),Ae.pumpMusic()}if(!Be?.on)Ws.step(i),Pt.update(i,e,C,Et.door,Jl),nn.update(i);else if(Be.S&&Be.S.snaps&&Be.S.snaps.length){let n=Be.S.snaps[Be.S.snaps.length-1];Ws.sync(n.ng),Ws.interp(Be.frameAt?.(performance.now()));let s=n.p&&n.p.find(r=>r[0]===Be.S.id);s&&s.length>15&&j.nadeCd<=0&&(C.nades=s[15])}Ws.frame(),j.nadeCd>0&&(j.nadeCd-=i),Et.update(i,e,C),Tw(i),nn&&nn.frame(kt),ri&&ri.joined&&ri.tick(),Gs.center={x:C.x,z:C.z},pr.center=Gs.center,Gs.ps.update(i),pr.ps.update(i),Nt.update(i),Fw(i),j.double>0&&(j.double-=i);for(let n=j.ups.length-1;n>=0;n--){let s=j.ups[n];s.t-=i,s.core.rotation.y+=i*2.5,s.type!=="health"&&(s.core.rotation.x+=i*1.1),s.g.position.y=1+Math.sin(e*3+n)*.15,s.g.visible=s.t>5||Math.sin(e*16)>-.2,!Be?.on&&(Math.hypot(s.x-C.x,s.z-C.z)<1.5?(bv(s),j.ups.splice(n,1)):s.t<=0&&(sn.remove(s.g),j.ups.splice(n,1)))}let t=Sv();Hw(t),t?Ev(t,mt.interact,i):j.repairT=0,mt.interactEdge=!1,uv(i,e),Iw()}var dv=performance.now();function wv(i){requestAnimationFrame(wv);let e=Math.min(.25,(i-dv)/1e3);dv=i,Pw(e),_0(Math.min(e,.05)*(j.state==="menu"?.6:1));let t=j.state==="playing"&&C.hp<C.maxHp*ic?1-C.hp/(C.maxHp*ic):0;io.update(Math.min(e,.1)),aa.render(e,j.time,Qt(C.dmg,0,1),t)}function Jw(){aa.render(.016,j.time,Qt(C.dmg,0,1),0)}var fi={};function y0(){mt.f=(fi.KeyW||fi.ArrowUp?1:0)-(fi.KeyS||fi.ArrowDown?1:0),mt.s=(fi.KeyD||fi.ArrowRight?1:0)-(fi.KeyA||fi.ArrowLeft?1:0),mt.sprint=!!(fi.ShiftLeft||fi.ShiftRight)}addEventListener("keydown",i=>{i.target&&i.target.tagName==="INPUT"||i.repeat||(fi[i.code]=!0,j.state==="playing"&&!C.dead?j.mpPhase==="lobby"||(i.code==="KeyR"&&(mt.reload=!0),i.code==="KeyE"&&(mt.interact=!0,mt.interactEdge=!0),i.code==="Digit1"&&ra(0),i.code==="Digit2"&&ra(1),i.code==="KeyQ"&&ra(1-C.cur),i.code==="KeyF"&&Cv(!C.flashlight),i.code==="KeyP"&&lc(),i.code==="KeyV"&&Be?.on&&ri&&ri.toggle(),i.code==="KeyG"&&Dv()):j.state==="paused"&&i.code==="KeyP"&&v0(),i.code==="KeyM"&&Pv(),i.code==="KeyN"&&Iv(),i.code==="Enter"&&(j.state==="menu"||j.state==="over")&&ua(),y0())});addEventListener("keyup",i=>{fi[i.code]=!1,i.code==="KeyE"&&(mt.interact=!1),y0()});addEventListener("blur",()=>{for(let i in fi)fi[i]=!1;y0(),mt.fire=!1,mt.interact=!1});var Av=!1;document.addEventListener("pointerlockerror",()=>{Av=!0});addEventListener("mousemove",i=>{j.state!=="playing"||C.dead||document.pointerLockElement!==Xs&&!Av&&!Fn.has("test")||Rv(i.movementX,i.movementY,.0022)});function Rv(i,e,t){C.yaw-=i*t,C.pitch=Qt(C.pitch-e*t,-1.45,1.45),C.sx+=i*.01,C.sy+=e*.01}Xs.addEventListener("mousedown",i=>{i.button===0&&j.state==="playing"&&(!hn&&!document.pointerLockElement&&!Fn.has("test")&&Xs.requestPointerLock?.(),mt.fire=!0)});addEventListener("mouseup",i=>{i.button===0&&(mt.fire=!1)});addEventListener("wheel",i=>{j.state==="playing"&&Math.abs(i.deltaY)>4&&ra(1-C.cur)},{passive:!0});addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&j.state==="playing"&&!C.dead&&!hn&&!Fn.has("test")&&j.mpPhase!=="lobby"&&lc()});document.addEventListener("visibilitychange",()=>{document.hidden&&j.mpPhase!=="lobby"&&lc()});if(hn){let i=null,e=null,t=0,n=0,s=oe("stick"),r=oe("knob"),o={x:0,y:0},l=oe("touch");l.addEventListener("touchstart",d=>{for(let u of d.changedTouches){if(d.target.closest("button"))continue;let f=s.getBoundingClientRect();i===null&&u.clientX<innerWidth*.45?(i=u.identifier,o={x:f.left+f.width/2,y:f.top+f.height/2},c(u)):e===null&&(e=u.identifier,t=u.clientX,n=u.clientY)}d.preventDefault()},{passive:!1});let c=d=>{let u=d.clientX-o.x,f=d.clientY-o.y,p=Math.hypot(u,f),x=55;p>x&&(u=u/p*x,f=f/p*x),r.style.transform=`translate(${u}px,${f}px)`,mt.s=u/x,mt.f=-f/x,Math.hypot(mt.s,mt.f)<.12&&(mt.s=mt.f=0)};l.addEventListener("touchmove",d=>{for(let u of d.changedTouches)u.identifier===i?c(u):u.identifier===e&&(j.state==="playing"&&!C.dead&&Rv(u.clientX-t,u.clientY-n,.0048),t=u.clientX,n=u.clientY);d.preventDefault()},{passive:!1});let a=d=>{for(let u of d.changedTouches)u.identifier===i?(i=null,r.style.transform="",mt.s=mt.f=0):u.identifier===e&&(e=null)};l.addEventListener("touchend",a),l.addEventListener("touchcancel",a);let h=(d,u,f)=>{let p=oe(d);p.addEventListener("touchstart",g=>{p.classList.add("down"),u(),g.preventDefault(),g.stopPropagation()},{passive:!1});let x=g=>{p.classList.remove("down"),f?.(),g.preventDefault()};p.addEventListener("touchend",x),p.addEventListener("touchcancel",x)};h("bFire",()=>mt.fire=!0,()=>mt.fire=!1),h("bReload",()=>mt.reload=!0),h("bUse",()=>{mt.interact=!0,mt.interactEdge=!0},()=>mt.interact=!1),h("bSwap",()=>ra(1-C.cur)),h("bLamp",()=>Cv(!C.flashlight)),h("bNade",()=>Dv())}function Cv(i){C.flashlight=i,Yi.visible=i,Zi.visible=!!i&&Zn>0&&j.state==="playing"&&!C.dead;let e=oe("bLamp");e&&e.classList.toggle("off",!i),Ae.click(0,i?1500:800,.32)}function Pv(){Ae.setMuted(!Ae.muted);try{localStorage.setItem("vwz_mute",Ae.muted?"1":"0")}catch{}Nv()}function Iv(){Ae.setMusicOn(Ae.musicOn===!1);try{localStorage.setItem("vwz_music",Ae.musicOn?"1":"0")}catch{}Lv()}function Lv(){let i=Ae.musicOn!==!1,e=oe("btnMusic");e&&(e.textContent=i?"\u266A":"\u266A\u0338",e.classList.toggle("on",i))}function Dv(){if(j.state!=="playing"||C.dead||(C.nades||0)<=0||j.nadeCd>0){j.state==="playing"&&(C.nades||0)<=0&&Ae.deny();return}j.nadeCd=.4,C.nades--,Be?.on?Be.send({t:"nade",yaw:+C.yaw.toFixed(3),pitch:+C.pitch.toFixed(3)}):Ws.throwLocal(C.x,f0(),C.z,C.yaw,C.pitch-.15),Ae.click(0,180,.4)}function Nv(){oe("btnMute").textContent=Ae.muted?"\u{1F507}":"\u{1F50A}",oe("btnMute2").textContent=Ae.muted?"\u{1F507} Sound off":"\u{1F50A} Sound on"}oe("btnMute").onclick=oe("btnMute2").onclick=i=>{i.stopPropagation(),Pv()};try{localStorage.getItem("vwz_music")==="0"&&(Ae.musicOn=!1)}catch{}oe("btnMusic")&&(oe("btnMusic").onclick=i=>{i.stopPropagation(),Iv()});oe("btnPause").onclick=i=>{i.stopPropagation(),lc()};oe("btnPlay").onclick=ua;oe("btnAgain").onclick=ua;oe("btnMenu").onclick=cc;oe("btnResume").onclick=v0;oe("btnQuit").onclick=cc;oe("btnPlay").addEventListener("touchend",i=>{i.preventDefault(),ua()});oe("qSeg").addEventListener("click",i=>{let e=i.target.closest("button");if(e){gs=e.dataset.q;try{localStorage.setItem("vwz_q",gs)}catch{}[...oe("qSeg").querySelectorAll("button")].forEach(t=>t.classList.toggle("on",t===e)),fd(gs==="high"?2:gs==="medium"?1:gs==="low"||hn?0:2)}});[...oe("qSeg").querySelectorAll("button")].forEach(i=>i.classList.toggle("on",i.dataset.q===gs));oe("modeSeg").addEventListener("click",i=>{let e=i.target.closest("button");if(e){pi=cp(hp(e.dataset.m),1);try{localStorage.setItem("vwz_mode",pi.id)}catch{}[...oe("modeSeg").querySelectorAll("button")].forEach(t=>t.classList.toggle("on",t===e))}});[...oe("modeSeg").querySelectorAll("button")].forEach(i=>i.classList.toggle("on",i.dataset.m===pi.id));oe("mapSeg").addEventListener("click",i=>{let e=i.target.closest("button");if(!e||e.dataset.map===vs.id)return;try{localStorage.setItem("vwz_map",e.dataset.map)}catch{}let t=new URL(location.href);t.searchParams.set("map",e.dataset.map),location.href=t.toString()});[...oe("mapSeg").querySelectorAll("button")].forEach(i=>i.classList.toggle("on",i.dataset.map===vs.id));C.slots=[hd("pistol"),null];ha();fd(Zn);Nv();Lv();x0(oe("scoreList"),m0());g0();Pt.max=vs.cap[Zn>0?1:0];for(let i=0;i<40;i++)_0(.05);requestAnimationFrame(()=>{aa.render(.016,0,0,0),oe("loading").classList.add("done"),setTimeout(()=>oe("loading").remove(),800),setTimeout(()=>{xv=!0,io.load(Zn),vv(Zn)},Fn.has("test")?0:120)});requestAnimationFrame(wv);"serviceWorker"in navigator&&location.protocol!=="file:"&&!Fn.has("nosw")&&navigator.serviceWorker.register("sw.js").catch(()=>{});function Qw(i,e,t){if(i.type==="win"){e&&(j.repairT+=t,j.repairT>.5&&(j.repairT=0,Be.send({t:"repair",w:i.w.id})));return}if(i.type==="job"&&i.hold){e&&(j.repairT+=t,j.repairT>.5&&(j.repairT=0,Be.send({t:"obj"})));return}mt.interactEdge&&(i.type==="buy"?Be.send({t:"buy",w:i.b.id}):i.type==="door"?Be.send({t:"door",id:i.door.id}):i.type==="job"?Be.send({t:"obj"}):i.type==="crate"&&Be.send({t:"crate"}))}var M0=Fn.get("server")||"wss://vwfest-zombies-coop.onrender.com";Be=sv({scene:sn,zombies:Pt,P:C,G:j,cam:kt,world:Et,held:()=>C.slots[C.cur]&&C.slots[C.cur].id||"pistol",onJoined:i=>{j.mpPhase=i.phase||"",ua(),j.round=0,oe("mpTag").textContent="CO-OP \xB7 ROOM "+i.room,oe("mpTag").classList.remove("hidden"),e2(),i.phase==="lobby"?(oe("lobbyCode").textContent=i.room,oe("lobby").classList.remove("hidden"),oe("toast").classList.remove("on"),clearTimeout(h0)):yn("Co-op room "+i.room+" \xB7 share the code with friends")},onLobby:i=>{let e=j.mpPhase;j.mpPhase=i.phase;let t=i.phase==="lobby";if(oe("lobby").classList.toggle("hidden",!t),e==="lobby"&&!t&&!hn&&!Fn.has("test"))try{Xs.requestPointerLock?.()?.catch?.(()=>{})}catch{}if(!t)return;oe("lobbyCode").textContent=i.room||Be.S.room||"-----";let n=i.p.find(s=>s[0]===Be.S.id);oe("lobbyReady").textContent=n&&n[13]?"UNREADY":"READY",oe("lobbyRoster").innerHTML=i.p.map(s=>{let r=s[10]?s[13]?"ready":"waiting":"disconnected",o=String(s[1]).replace(/[&<>]/g,l=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[l]);return`<li class="${s[13]?"ok":"wait"}">${o}${s[0]===Be.S.id?" (you)":""} \xB7 ${r}</li>`}).join("")},onStatus:i=>{yn(String(i));let e=oe("coMsg");e&&(e.textContent=String(i)),i==="Reconnected"&&ri&&ri.rebuild()},onRound:i=>{j.round=i,j.phase="round";let e=Ae.lineFor("wave","",i);Ae.round(i),Ae.setMusicPhase("hot"),qi("ROUND "+i,e),Ae.announce(e),(C.nades||0)<1&&(C.nades=1)},onHurt:i=>{C.lastHit=j.time,C.dmg=Math.max(C.dmg,.65+.35*(1-Math.max(0,C.hp)/C.maxHp)),C.shake=1,Ae.hurt()},onDown:()=>{md(),yn("You are down. Teammates revive you if they clear the round")},onRevive:()=>{oe("specTag").classList.add("hidden"),C.dead=!1,C.deadT=0,oe("hud").classList.remove("hud-dead"),ha(),yn("Back on your feet")},onZDie:i=>Ae.zdie(tc(i.pos),.5),onHits:i=>{for(let e of i){let t=oe("hitm");t.classList.remove("on","kill"),t.offsetWidth,t.classList.add("on"),e.killed&&(t.classList.add("kill"),Ae.tick(!0),j.kills++,e.head&&C.heads++),la("+"+e.gain,e.head&&e.killed)}},onEvent:(i,e)=>{if(i.e==="pick"){let t=Xi[i.type];if(t&&qi(t.name,i.p===Be.S.id?t.sub:"A teammate grabbed it"),Ae.power(i.type==="health"?"ammo":i.type),i.type==="ammo"&&i.p===Be.S.id)for(let n of C.slots)n&&(n.mag=jt[n.id].mag,n.reserve=jt[n.id].reserve);i.type==="nuke"&&(Ae.boom(),C.shake=1,oe("fx-flash").style.transition="none",oe("fx-flash").style.opacity=.85,requestAnimationFrame(()=>{oe("fx-flash").style.transition="opacity 1.2s",oe("fx-flash").style.opacity=0}))}else i.e==="plank"&&i.by===Be.S.id?(j.mpRepairs=(j.mpRepairs||0)+1,Ae.repair(),la("+10")):i.e==="mission"?nn.onNetEvent(i):i.e==="boom"?(Ws.splatter(i.x,i.z),Ae.boom()):i.e==="crate"&&i.s==="shut"&&yn("The toolbox slammed shut")},onAct:i=>{if(!i.ok){i.a==="nade"&&C.nades++,i.why==="pts"?(Ae.deny(),yn("Not enough points")):i.why==="full"?yn("Bait pouch is full"):i.why==="not-yours"&&yn("That weapon belongs to a teammate");return}i.a==="buy"?(Ae.cash(),i.w==="nade"?C.nades=i.nades:rc(i.w)):i.a==="door"?Ae.cash():i.a==="crate"&&(Ae.cash(),i.s==="roll"?(Ae.open(),Ae.jingle(4)):i.s==="take"&&(rc(i.w),qi(jt[i.w].name.toUpperCase())))},onPlank:(i,e)=>{e&&Jl.plank(i,!0)},onDoor:i=>{Ae.door(),qi(!i||i.id==="AB"?"GATE OPEN":i.name.toUpperCase(),i&&i.blurb||"Gate open")},onMission:(i,e,t)=>nn.applyNet(i,e,t,Be.S.id),onSig:i=>{ri&&ri.onSignal(i)},onCrate:(i,e,t)=>{let n=Et.crate;i==="idle"?n.state!=="idle"&&pd():i==="roll"&&n.state==="idle"?(n.state="roll",n.t=0,n.pick=e):i==="ready"&&(n.state==="idle"||n.state==="roll"&&n.t<3.4)&&(n.state="roll",n.t=3.61,n.pick=e),n.mine=t},syncUps:i=>{let e=new Set(i.map(t=>t[0]));for(let t=j.ups.length-1;t>=0;t--){let n=j.ups[t];n.sid&&!e.has(n.sid)&&(sn.remove(n.g),Nt.glowBurst(new U(n.x,1,n.z),...Xi[n.type].col.map(s=>s*.7),24,4),j.ups.splice(t,1))}for(let[t,n,s,r]of i)j.ups.some(o=>o.sid===t)||(ac(n,s,r),j.ups[j.ups.length-1].sid=t)},onOver:()=>{setTimeout(()=>{C.dead=!0,Tv(),Be.stop(),oe("mpTag").classList.add("hidden")},1500)},onQuit:()=>cc()});try{let i=qu("_warm",0);i.visible=!1,sn.add(i),Hs(i,{dt:.016,t:0,speed:2.4,fwd:2.4}),requestAnimationFrame(()=>{try{sn.remove(i)}catch{}})}catch(i){console.warn("soldier prewarm",i)}async function e2(){if(Be?.on){if(!ri)try{ri=(await import(new URL("voice.js",import.meta.url).href)).attach({selfId:()=>Be.S.id,selfName:()=>Be.S.name,send:t=>Be.send(t),peers:()=>[...Be.S.remotes.keys()],names:()=>{let t=new Map;for(let[n,s]of Be.S.remotes)t.set(n,s.userData.name);return t},setTalking:(t,n)=>Be.setTalking(t,n),toast:yn,list:oe("voiceList"),button:oe("btnVoice")})}catch{yn("Voice chat failed to load");return}oe("btnVoice").classList.remove("hidden")}}oe("btnVoice").onclick=i=>{i.stopPropagation(),ri&&ri.toggle()};var b0=()=>(oe("coName").value||"Survivor").trim().slice(0,16);oe("lobbyReady").onclick=()=>{let i=Be.S.snaps.at(-1),e=i&&i.p.find(t=>t[0]===Be.S.id);Be.send({t:"ready",on:!(e&&e[13])})};oe("lobbyLeave").onclick=()=>{oe("lobby").classList.add("hidden"),cc()};oe("coQuick").onclick=()=>Be.connect({url:M0,name:b0(),join:{map:vs.id}});oe("coCreate").onclick=()=>Be.connect({url:M0,name:b0(),join:{create:!0,map:vs.id}});oe("coJoin").onclick=()=>{let i=oe("coCode").value.trim().toUpperCase();if(!/^[A-Z2-9]{5}$/.test(i)){oe("coMsg").textContent="Room codes are 5 letters/numbers";return}Be.connect({url:M0,name:b0(),join:{code:i}})};window.__game={hd:io,MP:Be,missions:nn,grenades:Ws,get MODE(){return pi},MAP:vs,MAPS:Iu,PLAYER_MAX_HP:nc,MEDKIT_HP_FRAC:pv,MEDKIT_COOLDOWN:mv,MEDKIT_HEAL_FRAC:gv,medKitReady:p0,medKitOnKill:Mv,G:j,P:C,world:Et,zombies:Pt,fx:Nt,input:mt,tick:_0,startGame:ua,shoot:yv,applyTier:fd,switchTo:ra,startReload:ud,pause:lc,resume:v0,toMenu:cc,giveWeapon:rc,spawnPower:ac,pickPower:bv,interact:Ev,findFocus:Sv,die:md,get tier(){return Zn},cam:kt,renderer:oi,scene:sn,WEAPONS:jt,sfx:Ae,renderOnce:Jw,wantMates:oa,aimAt(i,e=!1){let t=i.pos.x-C.x,n=i.pos.z-C.z,s=(e?1.66:1)*i.scale-1.7;C.yaw=Math.atan2(-t,-n),C.pitch=Math.atan2(s,Math.hypot(t,n)),C.rP=C.rY=0},isTouch:hn};
