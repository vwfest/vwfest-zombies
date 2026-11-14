var Mm=0,rf=1,bm=2;var zr=1,Sm=2,Go=3,os=0,Sn=1,Ot=2,dn=0,as=1,ln=2,of=3,af=4,Mh=5;var Ai=100,Em=101,Tm=102,wm=103,Am=104,Hr=200,Rm=201,Cm=202,Pm=203,lf=204,cf=205,il=206,Im=207,sl=208,Lm=209,Dm=210,Nm=211,Um=212,Om=213,Fm=214,Wc=0,Xc=1,qc=2,wo=3,Yc=4,jc=5,Zc=6,Kc=7,hf=0,Bm=1,km=2,Hi=0,rl=1,ol=2,al=3,Gr=4,ll=5,cl=6,hl=7,Xd="attached",zm="detached",uf=300,sr=301,Vr=302,Wr=303,bh=304,ul=306,en=1e3,Cn=1001,Ao=1002,tn=1003,Sh=1004;var Xr=1005;var Wt=1006,Vo=1007;var di=1008;var Vn=1009,df=1010,ff=1011,Wo=1012,Eh=1013,Gi=1014,Wn=1015,Yt=1016,Th=1017,wh=1018,rr=1020,pf=35902,mf=35899,gf=1021,xf=1022,Jn=1023,Qi=1026,ls=1027,Ah=1028,Rh=1029,or=1030,Ch=1031;var Ph=1033,dl=33776,fl=33777,pl=33778,ml=33779,Ih=35840,Lh=35841,Dh=35842,Nh=35843,Uh=36196,Oh=37492,Fh=37496,Bh=37488,kh=37489,gl=37490,zh=37491,Hh=37808,Gh=37809,Vh=37810,Wh=37811,Xh=37812,qh=37813,Yh=37814,jh=37815,Zh=37816,Kh=37817,$h=37818,Jh=37819,Qh=37820,eu=37821,tu=36492,nu=36494,iu=36495,su=36283,ru=36284,xl=36285,ou=36286,Xo=2200,au=2201,Hm=2202,Tr=2300,wr=2301,Hc=2302,qd=2303,Mr=2400,br=2401,Aa=2402,lu=2500,Gm=2501,vf=0,vl=1,qo=2,Vm=3200;var _l=0,Wm=1,Dn="",ft="srgb",Ln="srgb-linear",Ra="linear",Ct="srgb";var Gc=7680;var Xm=519,qm=512,Ym=513,jm=514,cu=515,Zm=516,Km=517,hu=518,$m=519,_f=35044,yl=35048;var yf="300 es",Bi=2e3,Ro=2001;function Bv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function kv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Co(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jm(){let i=Co("canvas");return i.style.display="block",i}var P0={},Po=null;function Ca(...i){let e="THREE."+i.shift();Po?Po("log",e,...i):console.log(e,...i)}function Qm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qe(...i){i=Qm(i);let e="THREE."+i.shift();if(Po)Po("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ot(...i){i=Qm(i);let e="THREE."+i.shift();if(Po)Po("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Er(...i){let e=i.join(" ");e in P0||(P0[e]=!0,Qe(...i))}function eg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var tg={[Wc]:Xc,[qc]:Zc,[Yc]:Kc,[wo]:jc,[Xc]:Wc,[Zc]:qc,[Kc]:Yc,[jc]:wo},ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],I0=1234567,Sa=Math.PI/180,Ar=180/Math.PI;function Ti(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bn[i&255]+Bn[i>>8&255]+Bn[i>>16&255]+Bn[i>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[t&63|128]+Bn[t>>8&255]+"-"+Bn[t>>16&255]+Bn[t>>24&255]+Bn[n&255]+Bn[n>>8&255]+Bn[n>>16&255]+Bn[n>>24&255]).toLowerCase()}function xt(i,e,t){return Math.max(e,Math.min(t,i))}function Mf(i,e){return(i%e+e)%e}function zv(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Hv(i,e,t){return i!==e?(t-i)/(e-i):0}function Ea(i,e,t){return(1-t)*i+t*e}function Gv(i,e,t,n){return Ea(i,e,1-Math.exp(-t*n))}function Vv(i,e=1){return e-Math.abs(Mf(i,e*2)-e)}function Wv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Xv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function qv(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Yv(i,e){return i+Math.random()*(e-i)}function jv(i){return i*(.5-Math.random())}function Zv(i){i!==void 0&&(I0=i);let e=I0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kv(i){return i*Sa}function $v(i){return i*Ar}function Jv(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Qv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function e_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function t_(i,e,t,n,s){let r=Math.cos,o=Math.sin,l=r(t/2),c=o(t/2),a=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(l*h,c*d,c*u,l*a);break;case"YZY":i.set(c*u,l*h,c*d,l*a);break;case"ZXZ":i.set(c*d,c*u,l*h,l*a);break;case"XZX":i.set(l*h,c*p,c*f,l*a);break;case"YXY":i.set(c*f,l*h,c*p,l*a);break;case"ZYZ":i.set(c*p,c*f,l*h,l*a);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Vi={DEG2RAD:Sa,RAD2DEG:Ar,generateUUID:Ti,clamp:xt,euclideanModulo:Mf,mapLinear:zv,inverseLerp:Hv,lerp:Ea,damp:Gv,pingpong:Vv,smoothstep:Wv,smootherstep:Xv,randInt:qv,randFloat:Yv,randFloatSpread:jv,seededRandom:Zv,degToRad:Kv,radToDeg:$v,isPowerOfTwo:Jv,ceilPowerOfTwo:Qv,floorPowerOfTwo:e_,setQuaternionFromProperEuler:t_,normalize:Ut,denormalize:Fi},oe=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},on=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,l){let c=n[s+0],a=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||c!==u||a!==f||h!==p){let g=c*u+a*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-l;if(g<.9995){let _=Math.acos(g),b=Math.sin(_);m=Math.sin(m*_)/b,l=Math.sin(l*_)/b,c=c*m+u*l,a=a*m+f*l,h=h*m+p*l,d=d*m+x*l}else{c=c*m+u*l,a=a*m+f*l,h=h*m+p*l,d=d*m+x*l;let _=1/Math.sqrt(c*c+a*a+h*h+d*d);c*=_,a*=_,h*=_,d*=_}}e[t]=c,e[t+1]=a,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let l=n[s],c=n[s+1],a=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return e[t]=l*p+h*d+c*f-a*u,e[t+1]=c*p+h*u+a*d-l*f,e[t+2]=a*p+h*f+l*u-c*d,e[t+3]=h*p-l*d-c*u-a*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,l=Math.cos,c=Math.sin,a=l(n/2),h=l(s/2),d=l(r/2),u=c(n/2),f=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=u*h*d+a*f*p,this._y=a*f*d-u*h*p,this._z=a*h*p+u*f*d,this._w=a*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+a*f*p,this._y=a*f*d-u*h*p,this._z=a*h*p-u*f*d,this._w=a*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-a*f*p,this._y=a*f*d+u*h*p,this._z=a*h*p+u*f*d,this._w=a*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-a*f*p,this._y=a*f*d+u*h*p,this._z=a*h*p-u*f*d,this._w=a*h*d+u*f*p;break;case"YZX":this._x=u*h*d+a*f*p,this._y=a*f*d+u*h*p,this._z=a*h*p-u*f*d,this._w=a*h*d-u*f*p;break;case"XZY":this._x=u*h*d-a*f*p,this._y=a*f*d-u*h*p,this._z=a*h*p+u*f*d,this._w=a*h*d+u*f*p;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],l=t[5],c=t[9],a=t[2],h=t[6],d=t[10],u=n+l+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-a)*f,this._z=(o-s)*f}else if(n>l&&n>d){let f=2*Math.sqrt(1+n-l-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+a)/f}else if(l>d){let f=2*Math.sqrt(1+l-n-d);this._w=(r-a)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-l);this._w=(o-s)/f,this._x=(r+a)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=t._x,c=t._y,a=t._z,h=t._w;return this._x=n*h+o*l+s*a-r*c,this._y=s*h+o*c+r*l-n*a,this._z=r*h+o*a+n*c-s*l,this._w=o*h-n*l-s*c-r*a,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,o=-o,l=-l);let c=1-t;if(l<.9995){let a=Math.acos(l),h=Math.sin(a);c=Math.sin(c*a)/h,t=Math.sin(t*a)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(L0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(L0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,l=e.z,c=e.w,a=2*(o*s-l*n),h=2*(l*t-r*s),d=2*(r*n-o*t);return this.x=t+c*a+o*d-l*h,this.y=n+c*h+l*a-r*d,this.z=s+c*d+r*h-o*a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,l=t.y,c=t.z;return this.x=s*c-r*l,this.y=r*o-n*c,this.z=n*l-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xd.copy(this).projectOnVector(e),this.sub(xd)}reflect(e){return this.sub(xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xd=new U,L0=new on,ut=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,l,c,a){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,c,a)}set(e,t,n,s,r,o,l,c,a){let h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[3],c=n[6],a=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=s[0],g=s[3],m=s[6],_=s[1],b=s[4],y=s[7],w=s[2],T=s[5],P=s[8];return r[0]=o*x+l*_+c*w,r[3]=o*g+l*b+c*T,r[6]=o*m+l*y+c*P,r[1]=a*x+h*_+d*w,r[4]=a*g+h*b+d*T,r[7]=a*m+h*y+d*P,r[2]=u*x+f*_+p*w,r[5]=u*g+f*b+p*T,r[8]=u*m+f*y+p*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],h=e[8];return t*o*h-t*l*a-n*r*h+n*l*c+s*r*a-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],h=e[8],d=h*o-l*a,u=l*c-h*r,f=a*r-o*c,p=t*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*a-h*n)*x,e[2]=(l*n-s*o)*x,e[3]=u*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-l*t)*x,e[6]=f*x,e[7]=(n*c-a*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,l){let c=Math.cos(r),a=Math.sin(r);return this.set(n*c,n*a,-n*(c*o+a*l)+o+e,-s*a,s*c,-s*(-a*o+c*l)+l+t,0,0,1),this}scale(e,t){return Er("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vd.makeScale(e,t)),this}rotate(e){return Er("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vd.makeRotation(-e)),this}translate(e,t){return Er("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},vd=new ut,D0=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),N0=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function n_(){let i={enabled:!0,workingColorSpace:Ln,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ct&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(s.r=To(s.r),s.g=To(s.g),s.b=To(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Dn?Ra:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Er("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Er("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ln]:{primaries:e,whitePoint:n,transfer:Ra,toXYZ:D0,fromXYZ:N0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:D0,fromXYZ:N0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}}),i}var gt=n_();function As(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function To(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var oo,$c=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{oo===void 0&&(oo=Co("canvas")),oo.width=e.width,oo.height=e.height;let s=oo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=oo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Co("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=As(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(As(t[n]/255)*255):t[n]=As(t[n]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},i_=0,Io=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=Ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(_d(s[o].image)):r.push(_d(s[o]))}else r=_d(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function _d(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$c.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}var s_=0,yd=new U,Mn=class i extends ki{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Cn,s=Cn,r=Wt,o=di,l=Jn,c=Vn,a=i.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Ti(),this.name="",this.source=new Io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=a,this.format=l,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yd).x}get height(){return this.source.getSize(yd).y}get depth(){return this.source.getSize(yd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case en:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case en:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=uf;Mn.DEFAULT_ANISOTROPY=1;var At=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,a=c[0],h=c[4],d=c[8],u=c[1],f=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(a+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(a+1)/2,y=(f+1)/2,w=(m+1)/2,T=(h+u)/4,P=(d+x)/4,v=(p+g)/4;return b>y&&b>w?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=P/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=v/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=P/r,s=v/r),this.set(n,s,r,t),this}let _=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((a+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jc=class extends ki{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Mn(s),o=n.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Io(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$t=class extends Jc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Pa=class extends Mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qc=class extends Mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var je=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,l,c,a,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,c,a,h,d,u,f,p,x,g)}set(e,t,n,s,r,o,l,c,a,h,d,u,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=l,m[13]=c,m[2]=a,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ao.setFromMatrixColumn(e,0).length(),r=1/ao.setFromMatrixColumn(e,1).length(),o=1/ao.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(s),a=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,p=l*h,x=l*d;t[0]=c*h,t[4]=-c*d,t[8]=a,t[1]=f+p*a,t[5]=u-x*a,t[9]=-l*c,t[2]=x-u*a,t[6]=p+f*a,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,p=a*h,x=a*d;t[0]=u+x*l,t[4]=p*l-f,t[8]=o*a,t[1]=o*d,t[5]=o*h,t[9]=-l,t[2]=f*l-p,t[6]=x+u*l,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,p=a*h,x=a*d;t[0]=u-x*l,t[4]=-o*d,t[8]=p+f*l,t[1]=f+p*l,t[5]=o*h,t[9]=x-u*l,t[2]=-o*a,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,f=o*d,p=l*h,x=l*d;t[0]=c*h,t[4]=p*a-f,t[8]=u*a+x,t[1]=c*d,t[5]=x*a+u,t[9]=f*a-p,t[2]=-a,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,f=o*a,p=l*c,x=l*a;t[0]=c*h,t[4]=x-u*d,t[8]=p*d+f,t[1]=d,t[5]=o*h,t[9]=-l*h,t[2]=-a*h,t[6]=f*d+p,t[10]=u-x*d}else if(e.order==="XZY"){let u=o*c,f=o*a,p=l*c,x=l*a;t[0]=c*h,t[4]=-d,t[8]=a*h,t[1]=u*d+x,t[5]=o*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=l*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r_,e,o_)}lookAt(e,t,n){let s=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),js.crossVectors(n,mi),js.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),js.crossVectors(n,mi)),js.normalize(),uc.crossVectors(mi,js),s[0]=js.x,s[4]=uc.x,s[8]=mi.x,s[1]=js.y,s[5]=uc.y,s[9]=mi.y,s[2]=js.z,s[6]=uc.z,s[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[4],c=n[8],a=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],_=n[3],b=n[7],y=n[11],w=n[15],T=s[0],P=s[4],v=s[8],M=s[12],E=s[1],D=s[5],k=s[9],L=s[13],C=s[2],N=s[6],R=s[10],O=s[14],G=s[3],F=s[7],z=s[11],Y=s[15];return r[0]=o*T+l*E+c*C+a*G,r[4]=o*P+l*D+c*N+a*F,r[8]=o*v+l*k+c*R+a*z,r[12]=o*M+l*L+c*O+a*Y,r[1]=h*T+d*E+u*C+f*G,r[5]=h*P+d*D+u*N+f*F,r[9]=h*v+d*k+u*R+f*z,r[13]=h*M+d*L+u*O+f*Y,r[2]=p*T+x*E+g*C+m*G,r[6]=p*P+x*D+g*N+m*F,r[10]=p*v+x*k+g*R+m*z,r[14]=p*M+x*L+g*O+m*Y,r[3]=_*T+b*E+y*C+w*G,r[7]=_*P+b*D+y*N+w*F,r[11]=_*v+b*k+y*R+w*z,r[15]=_*M+b*L+y*O+w*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],l=e[5],c=e[9],a=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15],_=c*f-a*u,b=l*f-a*d,y=l*u-c*d,w=o*f-a*h,T=o*u-c*h,P=o*d-l*h;return t*(x*_-g*b+m*y)-n*(p*_-g*w+m*T)+s*(p*b-x*w+m*P)-r*(p*y-x*T+g*P)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],l=e[9],c=e[2],a=e[6],h=e[10];return t*(o*h-l*a)-n*(r*h-l*c)+s*(r*a-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],_=t*l-n*o,b=t*c-s*o,y=t*a-r*o,w=n*c-s*l,T=n*a-r*l,P=s*a-r*c,v=h*x-d*p,M=h*g-u*p,E=h*m-f*p,D=d*g-u*x,k=d*m-f*x,L=u*m-f*g,C=_*L-b*k+y*D+w*E-T*M+P*v;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/C;return e[0]=(l*L-c*k+a*D)*N,e[1]=(s*k-n*L-r*D)*N,e[2]=(x*P-g*T+m*w)*N,e[3]=(u*T-d*P-f*w)*N,e[4]=(c*E-o*L-a*M)*N,e[5]=(t*L-s*E+r*M)*N,e[6]=(g*y-p*P-m*b)*N,e[7]=(h*P-u*y+f*b)*N,e[8]=(o*k-l*E+a*v)*N,e[9]=(n*E-t*k-r*v)*N,e[10]=(p*T-x*y+m*_)*N,e[11]=(d*y-h*T-f*_)*N,e[12]=(l*M-o*D-c*v)*N,e[13]=(t*D-n*M+s*v)*N,e[14]=(x*b-p*w-g*_)*N,e[15]=(h*w-d*b+u*_)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,l=e.y,c=e.z,a=r*o,h=r*l;return this.set(a*o+n,a*l-s*c,a*c+s*l,0,a*l+s*c,h*l+n,h*c-s*o,0,a*c-s*l,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,l=t._z,c=t._w,a=r+r,h=o+o,d=l+l,u=r*a,f=r*h,p=r*d,x=o*h,g=o*d,m=l*d,_=c*a,b=c*h,y=c*d,w=n.x,T=n.y,P=n.z;return s[0]=(1-(x+m))*w,s[1]=(f+y)*w,s[2]=(p-b)*w,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(u+m))*T,s[6]=(g+_)*T,s[7]=0,s[8]=(p+b)*P,s[9]=(g-_)*P,s[10]=(1-(u+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=ao.set(s[0],s[1],s[2]).length(),l=ao.set(s[4],s[5],s[6]).length(),c=ao.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Di.copy(this);let a=1/o,h=1/l,d=1/c;return Di.elements[0]*=a,Di.elements[1]*=a,Di.elements[2]*=a,Di.elements[4]*=h,Di.elements[5]*=h,Di.elements[6]*=h,Di.elements[8]*=d,Di.elements[9]*=d,Di.elements[10]*=d,t.setFromRotationMatrix(Di),n.x=o,n.y=l,n.z=c,this}makePerspective(e,t,n,s,r,o,l=Bi,c=!1){let a=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,x;if(c)p=r/(o-r),x=o*r/(o-r);else if(l===Bi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(l===Ro)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=d,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=p,a[14]=x,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o,l=Bi,c=!1){let a=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),p,x;if(c)p=1/(o-r),x=o/(o-r);else if(l===Bi)p=-2/(o-r),x=-(o+r)/(o-r);else if(l===Ro)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=0,a[12]=u,a[1]=0,a[5]=d,a[9]=0,a[13]=f,a[2]=0,a[6]=0,a[10]=p,a[14]=x,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ao=new U,Di=new je,r_=new U(0,0,0),o_=new U(1,1,1),js=new U,uc=new U,mi=new U,U0=new je,O0=new on,Kn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],l=s[8],c=s[1],a=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,a),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(c,a)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,a)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,a));break;case"YZX":this._z=Math.asin(xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,a),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,a),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return U0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(U0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return O0.setFromEuler(this),this.setFromQuaternion(O0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var Ia=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},a_=0,F0=new U,lo=new on,_s=new je,dc=new U,ua=new U,l_=new U,c_=new on,B0=new U(1,0,0),k0=new U(0,1,0),z0=new U(0,0,1),H0={type:"added"},h_={type:"removed"},co={type:"childadded",child:null},Md={type:"childremoved",child:null},pt=class i extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new Kn,n=new on,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new ut}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lo.setFromAxisAngle(e,t),this.quaternion.multiply(lo),this}rotateOnWorldAxis(e,t){return lo.setFromAxisAngle(e,t),this.quaternion.premultiply(lo),this}rotateX(e){return this.rotateOnAxis(B0,e)}rotateY(e){return this.rotateOnAxis(k0,e)}rotateZ(e){return this.rotateOnAxis(z0,e)}translateOnAxis(e,t){return F0.copy(e).applyQuaternion(this.quaternion),this.position.add(F0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(B0,e)}translateY(e){return this.translateOnAxis(k0,e)}translateZ(e){return this.translateOnAxis(z0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_s.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?dc.copy(e):dc.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_s.lookAt(ua,dc,this.up):_s.lookAt(dc,ua,this.up),this.quaternion.setFromRotationMatrix(_s),s&&(_s.extractRotation(s.matrixWorld),lo.setFromRotationMatrix(_s),this.quaternion.premultiply(lo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(H0),co.child=e,this.dispatchEvent(co),co.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h_),Md.child=e,this.dispatchEvent(Md),Md.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_s.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_s.multiply(e.parent.matrixWorld)),e.applyMatrix4(_s),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(H0),co.child=e,this.dispatchEvent(co),co.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,l_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,c_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let a=0,h=c.length;a<h;a++){let d=c[a];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,a=this.material.length;c<a;c++)l.push(r(e.materials,this.material[c]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(e.animations,c))}}if(t){let l=o(e.geometries),c=o(e.materials),a=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),a.length>0&&(n.textures=a),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(l){let c=[];for(let a in l){let h=l[a];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pt.DEFAULT_UP=new U(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var De=class extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},u_={type:"move"},Lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,l=this._targetRay,c=this._grip,a=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(a&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(a,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=a.joints["index-finger-tip"],d=a.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;a.inputState.pinching&&u>f+p?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!a.inputState.pinching&&u<=f-p&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(u_)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),a!==null&&(a.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new De;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zs={h:0,s:0,l:0},fc={h:0,s:0,l:0};function bd(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=gt.workingColorSpace){if(e=Mf(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=bd(o,r,e+1/3),this.g=bd(o,r,e),this.b=bd(o,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,t=ft){function n(r){r!==void 0&&parseFloat(r)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let n=ng[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=To(e.r),this.g=To(e.g),this.b=To(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return gt.workingToColorSpace(kn.copy(this),e),Math.round(xt(kn.r*255,0,255))*65536+Math.round(xt(kn.g*255,0,255))*256+Math.round(xt(kn.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(kn.copy(this),t);let n=kn.r,s=kn.g,r=kn.b,o=Math.max(n,s,r),l=Math.min(n,s,r),c,a,h=(l+o)/2;if(l===o)c=0,a=0;else{let d=o-l;switch(a=h<=.5?d/(o+l):d/(2-o-l),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=a,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(kn.copy(this),t),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=ft){gt.workingToColorSpace(kn.copy(this),e);let t=kn.r,n=kn.g,s=kn.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Zs),this.setHSL(Zs.h+e,Zs.s+t,Zs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zs),e.getHSL(fc);let n=Ea(Zs.h,fc.h,t),s=Ea(Zs.s,fc.s,t),r=Ea(Zs.l,fc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kn=new ge;ge.NAMES=ng;var La=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ge(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Rr=class extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ni=new U,ys=new U,Sd=new U,Ms=new U,ho=new U,uo=new U,G0=new U,Ed=new U,Td=new U,wd=new U,Ad=new At,Rd=new At,Cd=new At,Ts=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ni.subVectors(e,t),s.cross(Ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ni.subVectors(s,t),ys.subVectors(n,t),Sd.subVectors(e,t);let o=Ni.dot(Ni),l=Ni.dot(ys),c=Ni.dot(Sd),a=ys.dot(ys),h=ys.dot(Sd),d=o*a-l*l;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(a*c-l*h)*u,p=(o*h-l*c)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ms)===null?!1:Ms.x>=0&&Ms.y>=0&&Ms.x+Ms.y<=1}static getInterpolation(e,t,n,s,r,o,l,c){return this.getBarycoord(e,t,n,s,Ms)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ms.x),c.addScaledVector(o,Ms.y),c.addScaledVector(l,Ms.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ad.setScalar(0),Rd.setScalar(0),Cd.setScalar(0),Ad.fromBufferAttribute(e,t),Rd.fromBufferAttribute(e,n),Cd.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ad,r.x),o.addScaledVector(Rd,r.y),o.addScaledVector(Cd,r.z),o}static isFrontFacing(e,t,n,s){return Ni.subVectors(n,t),ys.subVectors(e,t),Ni.cross(ys).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),ys.subVectors(this.a,this.b),Ni.cross(ys).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,l;ho.subVectors(s,n),uo.subVectors(r,n),Ed.subVectors(e,n);let c=ho.dot(Ed),a=uo.dot(Ed);if(c<=0&&a<=0)return t.copy(n);Td.subVectors(e,s);let h=ho.dot(Td),d=uo.dot(Td);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*a;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ho,o);wd.subVectors(e,r);let f=ho.dot(wd),p=uo.dot(wd);if(p>=0&&f<=p)return t.copy(r);let x=f*a-c*p;if(x<=0&&a>=0&&p<=0)return l=a/(a-p),t.copy(n).addScaledVector(uo,l);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return G0.subVectors(r,s),l=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(G0,l);let m=1/(g+x+u);return o=x*m,l=u*m,t.copy(n).addScaledVector(ho,o).addScaledVector(uo,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,Ui):Ui.fromBufferAttribute(r,o),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pc.copy(n.boundingBox)),pc.applyMatrix4(e.matrixWorld),this.union(pc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),mc.subVectors(this.max,da),fo.subVectors(e.a,da),po.subVectors(e.b,da),mo.subVectors(e.c,da),Ks.subVectors(po,fo),$s.subVectors(mo,po),xr.subVectors(fo,mo);let t=[0,-Ks.z,Ks.y,0,-$s.z,$s.y,0,-xr.z,xr.y,Ks.z,0,-Ks.x,$s.z,0,-$s.x,xr.z,0,-xr.x,-Ks.y,Ks.x,0,-$s.y,$s.x,0,-xr.y,xr.x,0];return!Pd(t,fo,po,mo,mc)||(t=[1,0,0,0,1,0,0,0,1],!Pd(t,fo,po,mo,mc))?!1:(gc.crossVectors(Ks,$s),t=[gc.x,gc.y,gc.z],Pd(t,fo,po,mo,mc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},bs=[new U,new U,new U,new U,new U,new U,new U,new U],Ui=new U,pc=new bn,fo=new U,po=new U,mo=new U,Ks=new U,$s=new U,xr=new U,da=new U,mc=new U,gc=new U,vr=new U;function Pd(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){vr.fromArray(i,r);let l=s.x*Math.abs(vr.x)+s.y*Math.abs(vr.y)+s.z*Math.abs(vr.z),c=e.dot(vr),a=t.dot(vr),h=n.dot(vr);if(Math.max(-Math.max(c,a,h),Math.min(c,a,h))>l)return!1}return!0}var ws=d_();function d_(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let a=c-127;a<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):a<-14?(n[c]=1024>>-a-14,n[c|256]=1024>>-a-14|32768,s[c]=-a-1,s[c|256]=-a-1):a<=15?(n[c]=a+15<<10,n[c|256]=a+15<<10|32768,s[c]=13,s[c|256]=13):a<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),l=new Uint32Array(64);for(let c=1;c<1024;++c){let a=c<<13,h=0;for(;(a&8388608)===0;)a<<=1,h-=8388608;a&=-8388609,h+=947912704,r[c]=a|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(l[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:l}}function f_(i){Math.abs(i)>65504&&Qe("DataUtils.toHalfFloat(): Value out of range."),i=xt(i,-65504,65504),ws.floatView[0]=i;let e=ws.uint32View[0],t=e>>23&511;return ws.baseTable[t]+((e&8388607)>>ws.shiftTable[t])}function p_(i){let e=i>>10;return ws.uint32View[0]=ws.mantissaTable[ws.offsetTable[e]+(i&1023)]+ws.exponentTable[e],ws.floatView[0]}var er=class{static toHalfFloat(e){return f_(e)}static fromHalfFloat(e){return p_(e)}},mn=new U,xc=new oe,m_=0,ht=class extends ki{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:m_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_f,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xc.fromBufferAttribute(this,t),xc.applyMatrix3(e),this.setXY(t,xc.x,xc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var tr=class extends ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Da=class extends ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},g_=new bn,fa=new U,Id=new U,ai=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):g_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);let t=fa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(Id)),this.expandByPoint(fa.copy(e.center).sub(Id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},x_=0,Ei=new je,Ld=new pt,go=new U,gi=new bn,pa=new bn,Rn=new U,vt=class i extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bv(e)?Da:tr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ut().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,n){return Ei.makeTranslation(e,t,n),this.applyMatrix4(Ei),this}scale(e,t,n){return Ei.makeScale(e,t,n),this.applyMatrix4(Ei),this}lookAt(e){return Ld.lookAt(e),Ld.updateMatrix(),this.applyMatrix4(Ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(go).negate(),this.translate(go.x,go.y,go.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];gi.setFromBufferAttribute(r),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let l=t[r];pa.setFromBufferAttribute(l),this.morphTargetsRelative?(Rn.addVectors(gi.min,pa.min),gi.expandByPoint(Rn),Rn.addVectors(gi.max,pa.max),gi.expandByPoint(Rn)):(gi.expandByPoint(pa.min),gi.expandByPoint(pa.max))}gi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Rn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rn));if(t)for(let r=0,o=t.length;r<o;r++){let l=t[r],c=this.morphTargetsRelative;for(let a=0,h=l.count;a<h;a++)Rn.fromBufferAttribute(l,a),c&&(go.fromBufferAttribute(e,a),Rn.add(go)),s=Math.max(s,n.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ht(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let l=[],c=[];for(let v=0;v<n.count;v++)l[v]=new U,c[v]=new U;let a=new U,h=new U,d=new U,u=new oe,f=new oe,p=new oe,x=new U,g=new U;function m(v,M,E){a.fromBufferAttribute(n,v),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,E),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,E),h.sub(a),d.sub(a),f.sub(u),p.sub(u);let D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(D),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(D),l[v].add(x),l[M].add(x),l[E].add(x),c[v].add(g),c[M].add(g),c[E].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let v=0,M=_.length;v<M;++v){let E=_[v],D=E.start,k=E.count;for(let L=D,C=D+k;L<C;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let b=new U,y=new U,w=new U,T=new U;function P(v){w.fromBufferAttribute(s,v),T.copy(w);let M=l[v];b.copy(M),b.sub(w.multiplyScalar(w.dot(M))).normalize(),y.crossVectors(T,M);let D=y.dot(c[v])<0?-1:1;o.setXYZW(v,b.x,b.y,b.z,D)}for(let v=0,M=_.length;v<M;++v){let E=_[v],D=E.start,k=E.count;for(let L=D,C=D+k;L<C;L+=3)P(e.getX(L+0)),P(e.getX(L+1)),P(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,o=new U,l=new U,c=new U,a=new U,h=new U,d=new U;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),x=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),a.fromBufferAttribute(n,g),l.add(h),c.add(h),a.add(h),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,a.x,a.y,a.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rn.fromBufferAttribute(e,t),Rn.normalize(),e.setXYZ(t,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(l,c){let a=l.array,h=l.itemSize,d=l.normalized,u=new a.constructor(c.length*h),f=0,p=0;for(let x=0,g=c.length;x<g;x++){l.isInterleavedBufferAttribute?f=c[x]*l.data.stride+l.offset:f=c[x]*h;for(let m=0;m<h;m++)u[p++]=a[f++]}return new ht(u,h,d)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let c=s[l],a=e(c,n);t.setAttribute(l,a)}let r=this.morphAttributes;for(let l in r){let c=[],a=r[l];for(let h=0,d=a.length;h<d;h++){let u=a[h],f=e(u,n);c.push(f)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,c=o.length;l<c;l++){let a=o[l];t.addGroup(a.start,a.count,a.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let a in c)c[a]!==void 0&&(e[a]=c[a]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let a=n[c];e.data.attributes[c]=a.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let a=this.morphAttributes[c],h=[];for(let d=0,u=a.length;d<u;d++){let f=a[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let a in s){let h=s[a];this.setAttribute(a,h.clone(t))}let r=e.morphAttributes;for(let a in r){let h=[],d=r[a];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[a]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let a=0,h=o.length;a<h;a++){let d=o[a];this.addGroup(d.start,d.count,d.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_f,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Zn=new U,nr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyMatrix4(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyNormalMatrix(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.transformDirection(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array),r=Ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ca("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ca("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Dd=new U,v_=new U,__=new ut,Oi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Dd.subVectors(n,t).cross(v_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Dd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||__.getNormalMatrix(e),s=this.coplanarPoint(Dd).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},y_=0,zn=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=as,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lf,this.blendDst=cf,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gc,this.stencilZFail=Gc,this.stencilZPass=Gc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let l in r){let c=r[l];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Oi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Hn=class extends zn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xo,ma=new U,vo=new U,_o=new U,yo=new oe,ga=new oe,ig=new je,vc=new U,xa=new U,_c=new U,V0=new oe,Nd=new oe,W0=new oe,$n=class extends pt{constructor(e=new Hn){if(super(),this.isSprite=!0,this.type="Sprite",xo===void 0){xo=new vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Cr(t,5);xo.setIndex([0,1,2,0,2,3]),xo.setAttribute("position",new nr(n,3,0,!1)),xo.setAttribute("uv",new nr(n,2,3,!1))}this.geometry=xo,this.material=e,this.center=new oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ot('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vo.setFromMatrixScale(this.matrixWorld),ig.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_o.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vo.multiplyScalar(-_o.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;yc(vc.set(-.5,-.5,0),_o,o,vo,s,r),yc(xa.set(.5,-.5,0),_o,o,vo,s,r),yc(_c.set(.5,.5,0),_o,o,vo,s,r),V0.set(0,0),Nd.set(1,0),W0.set(1,1);let l=e.ray.intersectTriangle(vc,xa,_c,!1,ma);if(l===null&&(yc(xa.set(-.5,.5,0),_o,o,vo,s,r),Nd.set(0,1),l=e.ray.intersectTriangle(vc,_c,xa,!1,ma),l===null))return;let c=e.ray.origin.distanceTo(ma);c<e.near||c>e.far||t.push({distance:c,point:ma.clone(),uv:Ts.getInterpolation(ma,vc,xa,_c,V0,Nd,W0,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function yc(i,e,t,n,s,r){yo.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ga.x=r*yo.x-s*yo.y,ga.y=s*yo.x+r*yo.y):ga.copy(yo),i.copy(e),i.x+=ga.x,i.y+=ga.y,i.applyMatrix4(ig)}var Ss=new U,Ud=new U,Mc=new U,bc=new U,Pr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ss)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ss.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ss.copy(this.origin).addScaledVector(this.direction,t),Ss.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ud.copy(e).add(t).multiplyScalar(.5),Mc.copy(t).sub(e).normalize(),bc.copy(this.origin).sub(Ud);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Mc),l=bc.dot(this.direction),c=-bc.dot(Mc),a=bc.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*c-l,u=o*l-c,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*l)+u*(o*d+u+2*c)+a}else u=r,d=Math.max(0,-(o*u+l)),f=-d*d+u*(u+2*c)+a;else u=-r,d=Math.max(0,-(o*u+l)),f=-d*d+u*(u+2*c)+a;else u<=-p?(d=Math.max(0,-(-o*r+l)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+a):u<=p?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+a):(d=Math.max(0,-(o*r+l)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+a);else u=o>0?-r:r,d=Math.max(0,-(o*u+l)),f=-d*d+u*(u+2*c)+a;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ud).addScaledVector(Mc,u),f}intersectSphere(e,t){if(e.radius<0)return null;Ss.subVectors(e.center,this.origin);let n=Ss.dot(this.direction),s=Ss.dot(Ss)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,l,c,a=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return a>=0?(n=(e.min.x-u.x)*a,s=(e.max.x-u.x)*a):(n=(e.max.x-u.x)*a,s=(e.min.x-u.x)*a),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(l=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(l=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ss)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,l=this.direction,c=l.x,a=l.y,h=l.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,p=t.x-o.x,x=t.y-o.y,g=t.z-o.z,m=n.x-o.x,_=n.y-o.y,b=n.z-o.z,y=Math.abs(c),w=Math.abs(a),T=Math.abs(h),P,v,M,E,D,k,L,C,N,R,O,G;if(y>=w&&y>=T?(M=c,k=d,N=p,G=m,c>=0?(P=a,v=h,E=u,D=f,L=x,C=g,R=_,O=b):(P=h,v=a,E=f,D=u,L=g,C=x,R=b,O=_)):w>=T?(M=a,k=u,N=x,G=_,a>=0?(P=h,v=c,E=f,D=d,L=g,C=p,R=b,O=m):(P=c,v=h,E=d,D=f,L=p,C=g,R=m,O=b)):(M=h,k=f,N=g,G=b,h>=0?(P=c,v=a,E=d,D=u,L=p,C=x,R=m,O=_):(P=a,v=c,E=u,D=d,L=x,C=p,R=_,O=m)),M===0)return null;let F=P/M,z=v/M,Y=1/M,se=E-F*k,he=D-z*k,q=L-F*N,le=C-z*N,Se=R-F*G,Z=O-z*G,ie=Se*le-Z*q,Ee=se*Z-he*Se,Ce=q*he-le*se;if(s){if(ie<0||Ee<0||Ce<0)return null}else if((ie<0||Ee<0||Ce<0)&&(ie>0||Ee>0||Ce>0))return null;let $=ie+Ee+Ce;if($===0)return null;let de=Y*(ie*k+Ee*N+Ce*G);return($>0?de<0:de>0)?null:this.at(de/$,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},st=class extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=hf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},X0=new je,_r=new Pr,Sc=new ai,q0=new U,Ec=new U,Tc=new U,wc=new U,Od=new U,Ac=new U,Y0=new U,Rc=new U,xe=class extends pt{constructor(e=new vt,t=new st){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){Ac.set(0,0,0);for(let c=0,a=r.length;c<a;c++){let h=l[c],d=r[c];h!==0&&(Od.fromBufferAttribute(d,e),o?Ac.addScaledVector(Od,h):Ac.addScaledVector(Od.sub(t),h))}t.add(Ac)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sc.copy(n.boundingSphere),Sc.applyMatrix4(r),_r.copy(e.ray).recast(e.near),!(Sc.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Sc,q0)===null||_r.origin.distanceToSquared(q0)>(e.far-e.near)**2))&&(X0.copy(r).invert(),_r.copy(e.ray).applyMatrix4(X0),!(n.boundingBox!==null&&_r.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_r)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,l=r.index,c=r.attributes.position,a=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(l!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,w=b;y<w;y+=3){let T=l.getX(y),P=l.getX(y+1),v=l.getX(y+2);s=Cc(this,m,e,n,a,h,d,T,P,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let _=l.getX(g),b=l.getX(g+1),y=l.getX(g+2);s=Cc(this,o,e,n,a,h,d,_,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),b=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,w=b;y<w;y+=3){let T=y,P=y+1,v=y+2;s=Cc(this,m,e,n,a,h,d,T,P,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let _=g,b=g+1,y=g+2;s=Cc(this,o,e,n,a,h,d,_,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function M_(i,e,t,n,s,r,o,l){let c;if(e.side===Sn?c=n.intersectTriangle(o,r,s,!0,l):c=n.intersectTriangle(s,r,o,e.side===os,l),c===null)return null;Rc.copy(l),Rc.applyMatrix4(i.matrixWorld);let a=t.ray.origin.distanceTo(Rc);return a<t.near||a>t.far?null:{distance:a,point:Rc.clone(),object:i}}function Cc(i,e,t,n,s,r,o,l,c,a){i.getVertexPosition(l,Ec),i.getVertexPosition(c,Tc),i.getVertexPosition(a,wc);let h=M_(i,e,t,n,Ec,Tc,wc,Y0);if(h){let d=new U;Ts.getBarycoord(Y0,Ec,Tc,wc,d),s&&(h.uv=Ts.getInterpolatedAttribute(s,l,c,a,d,new oe)),r&&(h.uv1=Ts.getInterpolatedAttribute(r,l,c,a,d,new oe)),o&&(h.normal=Ts.getInterpolatedAttribute(o,l,c,a,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:l,b:c,c:a,normal:new U,materialIndex:0};Ts.getNormal(Ec,Tc,wc,u.normal),h.face=u,h.barycoord=d}return h}var va=new At,j0=new At,Z0=new At,b_=new At,K0=new je,Pc=new U,Fd=new ai,$0=new je,Bd=new Pr,Rs=class extends xe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Xd,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pc),this.boundingBox.expandByPoint(Pc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ai),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pc),this.boundingSphere.expandByPoint(Pc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fd.copy(this.boundingSphere),Fd.applyMatrix4(s),e.ray.intersectsSphere(Fd)!==!1&&($0.copy(s).invert(),Bd.copy(e.ray).applyMatrix4($0),!(this.boundingBox!==null&&Bd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Xd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;j0.fromBufferAttribute(s.attributes.skinIndex,e),Z0.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(va.copy(t),t.set(0,0,0,0)):(va.set(...t,1),t.set(0,0,0)),va.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Z0.getComponent(r);if(o!==0){let l=j0.getComponent(r);K0.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(b_.copy(va).applyMatrix4(K0),o)}}return t.isVector4&&(t.w=va.w),t.applyMatrix4(this.bindMatrixInverse)}},es=class extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}},wi=class extends Mn{constructor(e=null,t=1,n=1,s,r,o,l,c,a=tn,h=tn,d,u){super(null,o,l,c,a,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},J0=new je,S_=new je,Cs=class i{constructor(e=[],t=[]){this.uuid=Ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let l=e[r]?e[r].matrixWorld:S_;J0.multiplyMatrices(l,t[r]),J0.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new wi(t,e,e,Jn,Wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Qe("Skeleton: No bone found with UUID:",r),o=new es),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let l=n[s];e.boneInverses.push(l.toArray())}return e}},xi=class extends ht{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Mo=new je,Q0=new je,Ic=[],em=new bn,E_=new je,_a=new xe,ya=new ai,Gn=class extends xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,E_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mo),em.copy(e.boundingBox).applyMatrix4(Mo),this.boundingBox.union(em)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mo),ya.copy(e.boundingSphere).applyMatrix4(Mo),this.boundingSphere.union(ya)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[o+l]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(_a.geometry=this.geometry,_a.material=this.material,_a.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ya.copy(this.boundingSphere),ya.applyMatrix4(n),e.ray.intersectsSphere(ya)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mo),Q0.multiplyMatrices(n,Mo),_a.matrixWorld=Q0,_a.raycast(e,Ic);for(let o=0,l=Ic.length;o<l;o++){let c=Ic[o];c.instanceId=r,c.object=this,t.push(c)}Ic.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wi(new Float32Array(s*this.count),s,this.count,Ah,Wn));let r=this.morphTexture.source.data.data,o=0;for(let a=0;a<n.length;a++)o+=n[a];let l=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=l,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},yr=new ai,T_=new oe(.5,.5),Lc=new U,Do=class{constructor(e=new Oi,t=new Oi,n=new Oi,s=new Oi,r=new Oi,o=new Oi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bi,n=!1){let s=this.planes,r=e.elements,o=r[0],l=r[1],c=r[2],a=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],_=r[12],b=r[13],y=r[14],w=r[15];if(s[0].setComponents(a-o,f-h,m-p,w-_).normalize(),s[1].setComponents(a+o,f+h,m+p,w+_).normalize(),s[2].setComponents(a+l,f+d,m+x,w+b).normalize(),s[3].setComponents(a-l,f-d,m-x,w-b).normalize(),n)s[4].setComponents(c,u,g,y).normalize(),s[5].setComponents(a-c,f-u,m-g,w-y).normalize();else if(s[4].setComponents(a-c,f-u,m-g,w-y).normalize(),t===Bi)s[5].setComponents(a+c,f+u,m+g,w+y).normalize();else if(t===Ro)s[5].setComponents(c,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){yr.center.set(0,0,0);let t=T_.distanceTo(e.center);return yr.radius=.7071067811865476+t,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Lc.x=s.normal.x>0?e.max.x:e.min.x,Lc.y=s.normal.y>0?e.max.y:e.min.y,Lc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var No=class extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},eh=new U,th=new U,tm=new je,Ma=new Pr,Dc=new ai,kd=new U,nm=new U,Ir=class extends pt{constructor(e=new vt,t=new No){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)eh.fromBufferAttribute(t,s-1),th.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=eh.distanceTo(th);e.setAttribute("lineDistance",new lt(n,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dc.copy(n.boundingSphere),Dc.applyMatrix4(s),Dc.radius+=r,e.ray.intersectsSphere(Dc)===!1)return;tm.copy(s).invert(),Ma.copy(e.ray).applyMatrix4(tm);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,a=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=a){let m=h.getX(x),_=h.getX(x+1),b=Nc(this,e,Ma,c,m,_,x);b&&t.push(b)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(f),m=Nc(this,e,Ma,c,x,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=a){let m=Nc(this,e,Ma,c,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Nc(this,e,Ma,c,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Nc(i,e,t,n,s,r,o){let l=i.geometry.attributes.position;if(eh.fromBufferAttribute(l,s),th.fromBufferAttribute(l,r),t.distanceSqToSegment(eh,th,kd,nm)>n)return;kd.applyMatrix4(i.matrixWorld);let a=e.ray.origin.distanceTo(kd);if(!(a<e.near||a>e.far))return{distance:a,point:nm.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var im=new U,sm=new U,Na=class extends Ir{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)im.fromBufferAttribute(t,s),sm.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+im.distanceTo(sm);e.setAttribute("lineDistance",new lt(n,1))}else Qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ua=class extends Ir{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Uo=class extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},rm=new je,Yd=new Pr,Uc=new ai,Oc=new U,Ps=class extends pt{constructor(e=new vt,t=new Uo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uc.copy(n.boundingSphere),Uc.applyMatrix4(s),Uc.radius+=r,e.ray.intersectsSphere(Uc)===!1)return;rm.copy(s).invert(),Yd.copy(e.ray).applyMatrix4(rm);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,a=n.index,d=n.attributes.position;if(a!==null){let u=Math.max(0,o.start),f=Math.min(a.count,o.start+o.count);for(let p=u,x=f;p<x;p++){let g=a.getX(p);Oc.fromBufferAttribute(d,g),om(Oc,g,c,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,x=f;p<x;p++)Oc.fromBufferAttribute(d,p),om(Oc,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function om(i,e,t,n,s,r,o){let l=Yd.distanceSqToPoint(i);if(l<t){let c=new U;Yd.closestPointToPoint(i,c),c.applyMatrix4(n);let a=s.ray.origin.distanceTo(c);if(a<s.near||a>s.far)return;r.push({distance:a,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Oa=class extends Mn{constructor(e=[],t=sr,n,s,r,o,l,c,a,h){super(e,t,n,s,r,o,l,c,a,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ht=class extends Mn{constructor(e,t,n,s,r,o,l,c,a){super(e,t,n,s,r,o,l,c,a),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ts=class extends Mn{constructor(e,t,n=Gi,s,r,o,l=tn,c=tn,a,h=Qi,d=1){if(h!==Qi&&h!==ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,l,c,h,n,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Io(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},nh=class extends ts{constructor(e,t=Gi,n=sr,s,r,o=tn,l=tn,c,a=Qi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,l,c,a),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fa=class extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ct=class i extends vt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],a=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(d,2));function p(x,g,m,_,b,y,w,T,P,v,M){let E=y/P,D=w/v,k=y/2,L=w/2,C=T/2,N=P+1,R=v+1,O=0,G=0,F=new U;for(let z=0;z<R;z++){let Y=z*D-L;for(let se=0;se<N;se++){let he=se*E-k;F[x]=he*_,F[g]=Y*b,F[m]=C,a.push(F.x,F.y,F.z),F[x]=0,F[g]=0,F[m]=T>0?1:-1,h.push(F.x,F.y,F.z),d.push(se/P),d.push(1-z/v),O+=1}}for(let z=0;z<v;z++)for(let Y=0;Y<P;Y++){let se=u+Y+N*z,he=u+Y+N*(z+1),q=u+(Y+1)+N*(z+1),le=u+(Y+1)+N*z;c.push(se,he,le),c.push(he,q,le),G+=6}l.addGroup(f,G,M),f+=G,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var li=class i extends vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],l=[],c=[],a=new U,h=new oe;o.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;a.x=e*Math.cos(f),a.y=e*Math.sin(f),o.push(a.x,a.y,a.z),l.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},It=class i extends vt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:c};let a=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],g=n/2,m=0;_(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new lt(d,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(f,2));function _(){let y=new U,w=new U,T=0,P=(t-e)/n;for(let v=0;v<=r;v++){let M=[],E=v/r,D=E*(t-e)+e;for(let k=0;k<=s;k++){let L=k/s,C=L*c+l,N=Math.sin(C),R=Math.cos(C);w.x=D*N,w.y=-E*n+g,w.z=D*R,d.push(w.x,w.y,w.z),y.set(N,P,R).normalize(),u.push(y.x,y.y,y.z),f.push(L,1-E),M.push(p++)}x.push(M)}for(let v=0;v<s;v++)for(let M=0;M<r;M++){let E=x[M][v],D=x[M+1][v],k=x[M+1][v+1],L=x[M][v+1];(e>0||M!==0)&&(h.push(E,D,L),T+=3),(t>0||M!==r-1)&&(h.push(D,k,L),T+=3)}a.addGroup(m,T,0),m+=T}function b(y){let w=p,T=new oe,P=new U,v=0,M=y===!0?e:t,E=y===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,g*E,0),u.push(0,E,0),f.push(.5,.5),p++;let D=p;for(let k=0;k<=s;k++){let C=k/s*c+l,N=Math.cos(C),R=Math.sin(C);P.x=M*R,P.y=g*E,P.z=M*N,d.push(P.x,P.y,P.z),u.push(0,E,0),T.x=N*.5+.5,T.y=R*.5*E+.5,f.push(T.x,T.y),p++}for(let k=0;k<s;k++){let L=w+k,C=D+k;y===!0?h.push(C,C+1,L):h.push(C+1,C,L),v+=3}a.addGroup(m,v,y===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Is=class i extends It{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,l=Math.PI*2){super(0,e,t,n,s,r,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Oo=class i extends vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];l(s),a(n),h(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(_){let b=new U,y=new U,w=new U;for(let T=0;T<t.length;T+=3)f(t[T+0],b),f(t[T+1],y),f(t[T+2],w),c(b,y,w,_)}function c(_,b,y,w){let T=w+1,P=[];for(let v=0;v<=T;v++){P[v]=[];let M=_.clone().lerp(y,v/T),E=b.clone().lerp(y,v/T),D=T-v;for(let k=0;k<=D;k++)k===0&&v===T?P[v][k]=M:P[v][k]=M.clone().lerp(E,k/D)}for(let v=0;v<T;v++)for(let M=0;M<2*(T-v)-1;M++){let E=Math.floor(M/2);M%2===0?(u(P[v][E+1]),u(P[v+1][E]),u(P[v][E])):(u(P[v][E+1]),u(P[v+1][E+1]),u(P[v+1][E]))}}function a(_){let b=new U;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(_),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function h(){let _=new U;for(let b=0;b<r.length;b+=3){_.x=r[b+0],_.y=r[b+1],_.z=r[b+2];let y=g(_)/2/Math.PI+.5,w=m(_)/Math.PI+.5;o.push(y,1-w)}p(),d()}function d(){for(let _=0;_<o.length;_+=6){let b=o[_+0],y=o[_+2],w=o[_+4],T=Math.max(b,y,w),P=Math.min(b,y,w);T>.9&&P<.1&&(b<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),w<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,b){let y=_*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function p(){let _=new U,b=new U,y=new U,w=new U,T=new oe,P=new oe,v=new oe;for(let M=0,E=0;M<r.length;M+=9,E+=6){_.set(r[M+0],r[M+1],r[M+2]),b.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),T.set(o[E+0],o[E+1]),P.set(o[E+2],o[E+3]),v.set(o[E+4],o[E+5]),w.copy(_).add(b).add(y).divideScalar(3);let D=g(w);x(T,E+0,_,D),x(P,E+2,b,D),x(v,E+4,y,D)}}function x(_,b,y,w){w<0&&_.x===1&&(o[b]=_.x-1),y.x===0&&y.z===0&&(o[b]=w/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Ba=class i extends Oo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let l=0,c=r-1,a;for(;l<=c;)if(s=Math.floor(l+(c-l)/2),a=n[s]-o,a<0)l=s+1;else if(a>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),l=this.getPoint(r),c=t||(o.isVector2?new oe:new U);return c.copy(l).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,s=[],r=[],o=[],l=new U,c=new je;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new U)}r[0]=new U,o[0]=new U;let a=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=a&&(a=h,n.set(1,0,0)),d<=a&&(a=d,n.set(0,1,0)),u<=a&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),l.crossVectors(s[f-1],s[f]),l.length()>Number.EPSILON){l.normalize();let p=Math.acos(xt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(l,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(xt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(l.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Fo=class extends vi{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=c}getPoint(e,t=new oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(l),a=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=a-this.aY;c=u*h-f*d+this.aX,a=u*d+f*h+this.aY}return n.set(c,a)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ih=class extends Fo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function bf(){let i=0,e=0,t=0,n=0;function s(r,o,l,c){i=r,e=l,t=-3*r+3*o-2*l-c,n=2*r-2*o+l+c}return{initCatmullRom:function(r,o,l,c,a){s(o,l,a*(l-r),a*(c-o))},initNonuniformCatmullRom:function(r,o,l,c,a,h,d){let u=(o-r)/a-(l-r)/(a+h)+(l-o)/h,f=(l-o)/h-(c-o)/(h+d)+(c-l)/d;u*=h,f*=h,s(o,l,u,f)},calc:function(r){let o=r*r,l=o*r;return i+e*r+t*o+n*l}}}var am=new U,lm=new U,zd=new bf,Hd=new bf,Gd=new bf,sh=class extends vi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,l=Math.floor(o),c=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:c===0&&l===r-1&&(l=r-2,c=1);let a,h;this.closed||l>0?a=s[(l-1)%r]:(lm.subVectors(s[0],s[1]).add(s[0]),a=lm);let d=s[l%r],u=s[(l+1)%r];if(this.closed||l+2<r?h=s[(l+2)%r]:(am.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=am),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(a.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),zd.initNonuniformCatmullRom(a.x,d.x,u.x,h.x,p,x,g),Hd.initNonuniformCatmullRom(a.y,d.y,u.y,h.y,p,x,g),Gd.initNonuniformCatmullRom(a.z,d.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(zd.initCatmullRom(a.x,d.x,u.x,h.x,this.tension),Hd.initCatmullRom(a.y,d.y,u.y,h.y,this.tension),Gd.initCatmullRom(a.z,d.z,u.z,h.z,this.tension));return n.set(zd.calc(c),Hd.calc(c),Gd.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function cm(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,l=i*i,c=i*l;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*l+r*i+t}function w_(i,e){let t=1-i;return t*t*e}function A_(i,e){return 2*(1-i)*i*e}function R_(i,e){return i*i*e}function Ta(i,e,t,n){return w_(i,e)+A_(i,t)+R_(i,n)}function C_(i,e){let t=1-i;return t*t*t*e}function P_(i,e){let t=1-i;return 3*t*t*i*e}function I_(i,e){return 3*(1-i)*i*i*e}function L_(i,e){return i*i*i*e}function wa(i,e,t,n,s){return C_(i,e)+P_(i,t)+I_(i,n)+L_(i,s)}var ka=class extends vi{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(wa(e,s.x,r.x,o.x,l.x),wa(e,s.y,r.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rh=class extends vi{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(wa(e,s.x,r.x,o.x,l.x),wa(e,s.y,r.y,o.y,l.y),wa(e,s.z,r.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},za=class extends vi{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oh=class extends vi{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ha=class extends vi{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ta(e,s.x,r.x,o.x),Ta(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ah=class extends vi{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ta(e,s.x,r.x,o.x),Ta(e,s.y,r.y,o.y),Ta(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ga=class extends vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),l=r-o,c=s[o===0?o:o-1],a=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(cm(l,c.x,a.x,h.x,d.x),cm(l,c.y,a.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},jd=Object.freeze({__proto__:null,ArcCurve:ih,CatmullRomCurve3:sh,CubicBezierCurve:ka,CubicBezierCurve3:rh,EllipseCurve:Fo,LineCurve:za,LineCurve3:oh,QuadraticBezierCurve:Ha,QuadraticBezierCurve3:ah,SplineCurve:Ga}),lh=class extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,l=this.curves[r],c=l.getLength(),a=c===0?0:1-o/c;return l.getPointAt(a,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(l);for(let a=0;a<c.length;a++){let h=c[a];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new jd[s.type]().fromJSON(s))}return this}},Va=class extends lh{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new za(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ha(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let l=new ka(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ga(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+l,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,l,c){let a=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+a,t+h,n,s,r,o,l,c),this}absellipse(e,t,n,s,r,o,l,c){let a=new Fo(e,t,n,s,r,o,l,c);if(this.curves.length>0){let d=a.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(a);let h=a.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Bo=class extends Va{constructor(e){super(e),this.uuid=Ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Va().fromJSON(s))}return this}};function D_(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=sg(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let l,c,a;if(n&&(r=B_(i,e,r,t)),i.length>80*t){l=i[0],c=i[1];let h=l,d=c;for(let u=t;u<s;u+=t){let f=i[u],p=i[u+1];f<l&&(l=f),p<c&&(c=p),f>h&&(h=f),p>d&&(d=p)}a=Math.max(h-l,d-c),a=a!==0?32767/a:0}return Wa(r,o,t,l,c,a,0),o}function sg(i,e,t,n,s){let r;if(s===Z_(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=hm(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=hm(o/n|0,i[o],i[o+1],r);return r&&ko(r,r.next)&&(qa(r),r=r.next),r}function Lr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ko(t,t.next)||rn(t.prev,t,t.next)===0)){if(qa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Wa(i,e,t,n,s,r,o){if(!i)return;!o&&r&&V_(i,n,s,r);let l=i;for(;i.prev!==i.next;){let c=i.prev,a=i.next;if(r?U_(i,n,s,r):N_(i)){e.push(c.i,i.i,a.i),qa(i),i=a.next,l=a.next;continue}if(i=a,i===l){o?o===1?(i=O_(Lr(i),e),Wa(i,e,t,n,s,r,2)):o===2&&F_(i,e,t,n,s,r):Wa(Lr(i),e,t,n,s,r,1);break}}}function N_(i){let e=i.prev,t=i,n=i.next;if(rn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,l=e.y,c=t.y,a=n.y,h=Math.min(s,r,o),d=Math.min(l,c,a),u=Math.max(s,r,o),f=Math.max(l,c,a),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&ba(s,l,r,c,o,a,p.x,p.y)&&rn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function U_(i,e,t,n){let s=i.prev,r=i,o=i.next;if(rn(s,r,o)>=0)return!1;let l=s.x,c=r.x,a=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(l,c,a),p=Math.min(h,d,u),x=Math.max(l,c,a),g=Math.max(h,d,u),m=Zd(f,p,e,t,n),_=Zd(x,g,e,t,n),b=i.prevZ,y=i.nextZ;for(;b&&b.z>=m&&y&&y.z<=_;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&ba(l,h,c,d,a,u,b.x,b.y)&&rn(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&ba(l,h,c,d,a,u,y.x,y.y)&&rn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&ba(l,h,c,d,a,u,b.x,b.y)&&rn(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&ba(l,h,c,d,a,u,y.x,y.y)&&rn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function O_(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ko(n,s)&&og(n,t,t.next,s)&&Xa(n,s)&&Xa(s,n)&&(e.push(n.i,t.i,s.i),qa(t),qa(t.next),t=i=s),t=t.next}while(t!==i);return Lr(t)}function F_(i,e,t,n,s,r){let o=i;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&q_(o,l)){let c=ag(o,l);o=Lr(o,o.next),c=Lr(c,c.next),Wa(o,e,t,n,s,r,0),Wa(c,e,t,n,s,r,0);return}l=l.next}o=o.next}while(o!==i)}function B_(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let l=e[r]*n,c=r<o-1?e[r+1]*n:i.length,a=sg(i,l,c,n,!1);a===a.next&&(a.steiner=!0),s.push(X_(a))}s.sort(k_);for(let r=0;r<s.length;r++)t=z_(s[r],t);return t}function k_(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function z_(i,e){let t=H_(i,e);if(!t)return e;let n=ag(t,i);return Lr(n,n.next),Lr(t,t.next)}function H_(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(ko(i,t))return t;do{if(ko(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let l=o,c=o.x,a=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&rg(s<a?n:r,s,c,a,s<a?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Xa(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&G_(o,t)))&&(o=t,h=d)}t=t.next}while(t!==l);return o}function G_(i,e){return rn(i.prev,i,e.prev)<0&&rn(e.next,i,i.next)<0}function V_(i,e,t,n){let s=i;do s.z===0&&(s.z=Zd(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,W_(s)}function W_(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,l=0;for(let a=0;a<t&&(l++,o=o.nextZ,!!o);a++);let c=t;for(;l>0||c>0&&o;)l!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,l--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Zd(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function X_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function rg(i,e,t,n,s,r,o,l){return(s-o)*(e-l)>=(i-o)*(r-l)&&(i-o)*(n-l)>=(t-o)*(e-l)&&(t-o)*(r-l)>=(s-o)*(n-l)}function ba(i,e,t,n,s,r,o,l){return!(i===o&&e===l)&&rg(i,e,t,n,s,r,o,l)}function q_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Y_(i,e)&&(Xa(i,e)&&Xa(e,i)&&j_(i,e)&&(rn(i.prev,i,e.prev)||rn(i,e.prev,e))||ko(i,e)&&rn(i.prev,i,i.next)>0&&rn(e.prev,e,e.next)>0)}function rn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ko(i,e){return i.x===e.x&&i.y===e.y}function og(i,e,t,n){let s=Bc(rn(i,e,t)),r=Bc(rn(i,e,n)),o=Bc(rn(t,n,i)),l=Bc(rn(t,n,e));return!!(s!==r&&o!==l||s===0&&Fc(i,t,e)||r===0&&Fc(i,n,e)||o===0&&Fc(t,i,n)||l===0&&Fc(t,e,n))}function Fc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Bc(i){return i>0?1:i<0?-1:0}function Y_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&og(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Xa(i,e){return rn(i.prev,i,i.next)<0?rn(i,e,i.next)>=0&&rn(i,i.prev,e)>=0:rn(i,e,i.prev)<0||rn(i,i.next,e)<0}function j_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ag(i,e){let t=Kd(i.i,i.x,i.y),n=Kd(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hm(i,e,t,n){let s=Kd(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function qa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Kd(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Z_(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var $d=class{static triangulate(e,t,n=2){return D_(e,t,n)}},Sr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];um(e),dm(n,e);let o=e.length;t.forEach(um);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,dm(n,t[c]);let l=$d.triangulate(n,s);for(let c=0;c<l.length;c+=3)r.push(l.slice(c,c+3));return r}};function um(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function dm(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ya=class i extends vt{constructor(e=new Bo([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let l=0,c=e.length;l<c;l++){let a=e[l];o(a)}this.setAttribute("position",new lt(s,3)),this.setAttribute("uv",new lt(r,2)),this.computeVertexNormals();function o(l){let c=[],a=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:K_,b,y=!1,w,T,P,v;if(m){b=m.getSpacedPoints(h),y=!0,u=!1;let te=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(h,te),T=new U,P=new U,v=new U}u||(g=0,f=0,p=0,x=0);let M=l.extractPoints(a),E=M.shape,D=M.holes;if(!Sr.isClockWise(E)){E=E.reverse();for(let te=0,ue=D.length;te<ue;te++){let _e=D[te];Sr.isClockWise(_e)&&(D[te]=_e.reverse())}}function L(te){let _e=10000000000000001e-36,fe=te[0];for(let Te=1;Te<=te.length;Te++){let He=Te%te.length,Ge=te[He],Ze=Ge.x-fe.x,et=Ge.y-fe.y,H=Ze*Ze+et*et,dt=Math.max(Math.abs(Ge.x),Math.abs(Ge.y),Math.abs(fe.x),Math.abs(fe.y)),rt=_e*dt*dt;if(H<=rt){te.splice(He,1),Te--;continue}fe=Ge}}L(E),D.forEach(L);let C=D.length,N=E;for(let te=0;te<C;te++){let ue=D[te];E=E.concat(ue)}function R(te,ue,_e){return ue||ot("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(ue,_e)}let O=E.length;function G(te,ue,_e){let fe,Te,He,Ge=te.x-ue.x,Ze=te.y-ue.y,et=_e.x-te.x,H=_e.y-te.y,dt=Ge*Ge+Ze*Ze,rt=Ge*H-Ze*et;if(Math.abs(rt)>Number.EPSILON){let B=Math.sqrt(dt),S=Math.sqrt(et*et+H*H),X=ue.x-Ze/B,K=ue.y+Ge/B,ne=_e.x-H/S,we=_e.y+et/S,Ie=((ne-X)*H-(we-K)*et)/(Ge*H-Ze*et);fe=X+Ge*Ie-te.x,Te=K+Ze*Ie-te.y;let ce=fe*fe+Te*Te;if(ce<=2)return new oe(fe,Te);He=Math.sqrt(ce/2)}else{let B=!1;Ge>Number.EPSILON?et>Number.EPSILON&&(B=!0):Ge<-Number.EPSILON?et<-Number.EPSILON&&(B=!0):Math.sign(Ze)===Math.sign(H)&&(B=!0),B?(fe=-Ze,Te=Ge,He=Math.sqrt(dt)):(fe=Ge,Te=Ze,He=Math.sqrt(dt/2))}return new oe(fe/He,Te/He)}let F=[];for(let te=0,ue=N.length,_e=ue-1,fe=te+1;te<ue;te++,_e++,fe++)_e===ue&&(_e=0),fe===ue&&(fe=0),F[te]=G(N[te],N[_e],N[fe]);let z=[],Y,se=F.concat();for(let te=0,ue=C;te<ue;te++){let _e=D[te];Y=[];for(let fe=0,Te=_e.length,He=Te-1,Ge=fe+1;fe<Te;fe++,He++,Ge++)He===Te&&(He=0),Ge===Te&&(Ge=0),Y[fe]=G(_e[fe],_e[He],_e[Ge]);z.push(Y),se=se.concat(Y)}let he;if(g===0)he=Sr.triangulateShape(N,D);else{let te=[],ue=[];for(let _e=0;_e<g;_e++){let fe=_e/g,Te=f*Math.cos(fe*Math.PI/2),He=p*Math.sin(fe*Math.PI/2)+x;for(let Ge=0,Ze=N.length;Ge<Ze;Ge++){let et=R(N[Ge],F[Ge],He);Ee(et.x,et.y,-Te),fe===0&&te.push(et)}for(let Ge=0,Ze=C;Ge<Ze;Ge++){let et=D[Ge];Y=z[Ge];let H=[];for(let dt=0,rt=et.length;dt<rt;dt++){let B=R(et[dt],Y[dt],He);Ee(B.x,B.y,-Te),fe===0&&H.push(B)}fe===0&&ue.push(H)}}he=Sr.triangulateShape(te,ue)}let q=he.length,le=p+x;for(let te=0;te<O;te++){let ue=u?R(E[te],se[te],le):E[te];y?(P.copy(w.normals[0]).multiplyScalar(ue.x),T.copy(w.binormals[0]).multiplyScalar(ue.y),v.copy(b[0]).add(P).add(T),Ee(v.x,v.y,v.z)):Ee(ue.x,ue.y,0)}for(let te=1;te<=h;te++)for(let ue=0;ue<O;ue++){let _e=u?R(E[ue],se[ue],le):E[ue];y?(P.copy(w.normals[te]).multiplyScalar(_e.x),T.copy(w.binormals[te]).multiplyScalar(_e.y),v.copy(b[te]).add(P).add(T),Ee(v.x,v.y,v.z)):Ee(_e.x,_e.y,d/h*te)}for(let te=g-1;te>=0;te--){let ue=te/g,_e=f*Math.cos(ue*Math.PI/2),fe=p*Math.sin(ue*Math.PI/2)+x;for(let Te=0,He=N.length;Te<He;Te++){let Ge=R(N[Te],F[Te],fe);Ee(Ge.x,Ge.y,d+_e)}for(let Te=0,He=D.length;Te<He;Te++){let Ge=D[Te];Y=z[Te];for(let Ze=0,et=Ge.length;Ze<et;Ze++){let H=R(Ge[Ze],Y[Ze],fe);y?Ee(H.x,H.y+b[h-1].y,b[h-1].x+_e):Ee(H.x,H.y,d+_e)}}}Se(),Z();function Se(){let te=s.length/3;if(u){let ue=0,_e=O*ue;for(let fe=0;fe<q;fe++){let Te=he[fe];Ce(Te[2]+_e,Te[1]+_e,Te[0]+_e)}ue=h+g*2,_e=O*ue;for(let fe=0;fe<q;fe++){let Te=he[fe];Ce(Te[0]+_e,Te[1]+_e,Te[2]+_e)}}else{for(let ue=0;ue<q;ue++){let _e=he[ue];Ce(_e[2],_e[1],_e[0])}for(let ue=0;ue<q;ue++){let _e=he[ue];Ce(_e[0]+O*h,_e[1]+O*h,_e[2]+O*h)}}n.addGroup(te,s.length/3-te,0)}function Z(){let te=s.length/3,ue=0;ie(N,ue),ue+=N.length;for(let _e=0,fe=D.length;_e<fe;_e++){let Te=D[_e];ie(Te,ue),ue+=Te.length}n.addGroup(te,s.length/3-te,1)}function ie(te,ue){let _e=te.length;for(;--_e>=0;){let fe=_e,Te=_e-1;Te<0&&(Te=te.length-1);for(let He=0,Ge=h+g*2;He<Ge;He++){let Ze=O*He,et=O*(He+1),H=ue+fe+Ze,dt=ue+Te+Ze,rt=ue+Te+et,B=ue+fe+et;$(H,dt,rt,B)}}}function Ee(te,ue,_e){c.push(te),c.push(ue),c.push(_e)}function Ce(te,ue,_e){de(te),de(ue),de(_e);let fe=s.length/3,Te=_.generateTopUV(n,s,fe-3,fe-2,fe-1);be(Te[0]),be(Te[1]),be(Te[2])}function $(te,ue,_e,fe){de(te),de(ue),de(fe),de(ue),de(_e),de(fe);let Te=s.length/3,He=_.generateSideWallUV(n,s,Te-6,Te-3,Te-2,Te-1);be(He[0]),be(He[1]),be(He[3]),be(He[1]),be(He[2]),be(He[3])}function de(te){s.push(c[te*3+0]),s.push(c[te*3+1]),s.push(c[te*3+2])}function be(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return $_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let l=t[e.shapes[r]];n.push(l)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new jd[s.type]().fromJSON(s)),new i(n,e.options)}},K_={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],l=e[n*3],c=e[n*3+1],a=e[s*3],h=e[s*3+1];return[new oe(r,o),new oe(l,c),new oe(a,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],l=e[t*3+1],c=e[t*3+2],a=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(l-h)<Math.abs(o-a)?[new oe(o,1-c),new oe(a,1-d),new oe(u,1-p),new oe(x,1-m)]:[new oe(l,1-c),new oe(h,1-d),new oe(f,1-p),new oe(g,1-m)]}};function $_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Dr=class i extends Oo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ja=class i extends vt{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=xt(s,0,Math.PI*2);let r=[],o=[],l=[],c=[],a=[],h=1/t,d=new U,u=new oe,f=new U,p=new U,x=new U,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(p)}for(let _=0;_<=t;_++){let b=n+_*h*s,y=Math.sin(b),w=Math.cos(b);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*y,d.y=e[T].y,d.z=e[T].x*w,o.push(d.x,d.y,d.z),u.x=_/t,u.y=T/(e.length-1),l.push(u.x,u.y);let P=c[3*T+0]*y,v=c[3*T+1],M=c[3*T+0]*w;a.push(P,v,M)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){let y=b+_*e.length,w=y,T=y+e.length,P=y+e.length+1,v=y+1;r.push(w,T,v),r.push(P,v,T)}this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("uv",new lt(l,2)),this.setAttribute("normal",new lt(a,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Za=class i extends Oo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},an=class i extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,l=Math.floor(n),c=Math.floor(s),a=l+1,h=c+1,d=e/l,u=t/c,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let _=m*u-o;for(let b=0;b<a;b++){let y=b*d-r;p.push(y,-_,0),x.push(0,0,1),g.push(b/l),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<l;_++){let b=_+a*m,y=_+a*(m+1),w=_+1+a*(m+1),T=_+1+a*m;f.push(b,y,T),f.push(y,w,T)}this.setIndex(f),this.setAttribute("position",new lt(p,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ns=class i extends vt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let l=[],c=[],a=[],h=[],d=e,u=(t-e)/s,f=new U,p=new oe;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let m=r+g/n*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),a.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}d+=u}for(let x=0;x<s;x++){let g=x*(n+1);for(let m=0;m<n;m++){let _=m+g,b=_,y=_+n+1,w=_+n+2,T=_+1;l.push(b,y,T),l.push(y,w,T)}}this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(a,3)),this.setAttribute("uv",new lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Jt=class i extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+l,Math.PI),a=0,h=[],d=new U,u=new U,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let _=[],b=m/n,y=o+b*l,w=e*Math.cos(y),T=Math.sqrt(e*e-w*w),P=0;m===0&&o===0?P=.5/t:m===n&&c===Math.PI&&(P=-.5/t);for(let v=0;v<=t;v++){let M=v/t,E=s+M*r;d.x=-T*Math.cos(E),d.y=w,d.z=T*Math.sin(E),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(M+P,1-b),_.push(a++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let b=h[m][_+1],y=h[m][_],w=h[m+1][_],T=h[m+1][_+1];(m!==0||o>0)&&f.push(b,y,T),(m!==n-1||c<Math.PI)&&f.push(y,w,T)}this.setIndex(f),this.setAttribute("position",new lt(p,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var _i=class i extends vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:l},n=Math.floor(n),s=Math.floor(s);let c=[],a=[],h=[],d=[],u=new U,f=new U,p=new U;for(let x=0;x<=n;x++){let g=o+x/n*l;for(let m=0;m<=s;m++){let _=m/s*r;f.x=(e+t*Math.cos(g))*Math.cos(_),f.y=(e+t*Math.cos(g))*Math.sin(_),f.z=t*Math.sin(g),a.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,_=(s+1)*(x-1)+g-1,b=(s+1)*(x-1)+g,y=(s+1)*x+g;c.push(m,_,y),c.push(_,b,y)}this.setIndex(c),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function qr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(fm(s))s.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(fm(s[0])){let r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Xn(i){let e={};for(let t=0;t<i.length;t++){let n=qr(i[t]);for(let s in n)e[s]=n[s]}return e}function fm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function J_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var Nn={clone:qr,merge:Xn},Q_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ey=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bt=class extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Q_,this.fragmentShader=ey,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=J_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ge().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new At().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ut().fromArray(s.value);break;case"m4":this.uniforms[n].value=new je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},zo=class extends bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ze=class extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ci=class extends ze{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ka=class extends zn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var ch=class extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},hh=class extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Vc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function ty(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function pm(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let l=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[l+c]}return s}function ny(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var is=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let l=n+o>>>1;e<t[l]?o=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},uh=class extends is{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mr,endingEnd:Mr}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,l=s[r],c=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case br:r=e,l=2*t-n;break;case Aa:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case br:o=e,c=2*n-t;break;case Aa:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let a=(n-t)*.5,h=this.valueSize;this._weightPrev=a/(t-l),this._weightNext=a/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,a=c-l,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,_=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,b=(-1-f)*g+(1.5+f)*x+.5*p,y=f*g-f*x;for(let w=0;w!==l;++w)r[w]=m*o[h+w]+_*o[a+w]+b*o[c+w]+y*o[d+w];return r}},$a=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,a=c-l,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==l;++u)r[u]=o[a+u]*d+o[c+u]*h;return r}},dh=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},fh=class extends is{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,a=c-l,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(s-t),x=1-p;for(let g=0;g!==l;++g)r[g]=o[a+g]*x+o[c+g]*p;return r}let u=l*2,f=e-1;for(let p=0;p!==l;++p){let x=o[a+p],g=o[c+p],m=f*u+p*2,_=d[m],b=d[m+1],y=e*u+p*2,w=h[y],T=h[y+1],P=sy(n,t,_,w,s);r[p]=lg(P,x,b,T,g)}return r}};function lg(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function iy(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function sy(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let l=lg(r,e,t,n,s)-i;if(Math.abs(l)<1e-10)break;let c=iy(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var hi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qs(t,this.TimeBufferType),this.values=Qs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qs(e.times,Array),values:Qs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Vc(e.settings)&&(n.settings={inTangents:Qs(e.settings.inTangents,Array),outTangents:Qs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new fh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Tr:t=this.InterpolantFactoryMethodDiscrete;break;case wr:t=this.InterpolantFactoryMethodLinear;break;case Hc:t=this.InterpolantFactoryMethodSmooth;break;case qd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return wr;case this.InterpolantFactoryMethodSmooth:return Hc;case this.InterpolantFactoryMethodBezier:return qd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Vc(this.settings)&&(mm(this.settings.inTangents,e),mm(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){ot("KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(o!==null&&o>c){ot("KeyframeTrack: Out of order keys.",this,l,c,o),e=!1;break}o=c}if(s!==void 0&&kv(s))for(let l=0,c=s.length;l!==c;++l){let a=s[l];if(isNaN(a)){ot("KeyframeTrack: Value is not a valid number.",this,l,a),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Hc,r=e.length-1,o=1;for(let l=1;l<r;++l){let c=!1,a=e[l],h=e[l+1];if(a!==h&&(l!==1||a!==e[0]))if(s)c=!0;else{let d=l*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=t[d+p];if(x!==t[u+p]||x!==t[f+p]){c=!0;break}}}if(c){if(l!==o){e[o]=e[l];let d=l*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,c=o*n,a=0;a!==n;++a)t[c+a]=t[l+a];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Vc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function mm(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}hi.prototype.ValueTypeName="";hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=wr;var Ls=class extends hi{constructor(e,t,n){super(e,t,n)}};Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=Tr;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}};Ja.prototype.ValueTypeName="color";var Ds=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}};Ds.prototype.ValueTypeName="number";var ph=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=(n-t)/(s-t),a=e*l;for(let h=a+l;a!==h;a+=4)on.slerpFlat(r,0,o,a-l,o,a,c);return r}},Ns=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ph(this.times,this.values,this.getValueSize(),e)}};Ns.prototype.ValueTypeName="quaternion";Ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Us=class extends hi{constructor(e,t,n){super(e,t,n)}};Us.prototype.ValueTypeName="string";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=Tr;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;var ir=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}};ir.prototype.ValueTypeName="vector";var Nr=class{constructor(e="",t=-1,n=[],s=lu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Ti(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,l=n.length;o!==l;++o)t.push(oy(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(hi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let l=0;l<r;l++){let c=[],a=[];c.push((l+r-1)%r,l,(l+1)%r),a.push(0,1,0);let h=ty(c);c=pm(c,1,h),a=pm(a,1,h),!s&&c[0]===0&&(c.push(r),a.push(a[0])),o.push(new Ds(".morphTargetInfluences["+t[l].name+"]",c,a).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let l=0,c=e.length;l<c;l++){let a=e[l],h=a.name.match(r);if(h&&h.length>1){let d=h[1],u=s[d];u||(s[d]=u=[]),u.push(a)}}let o=[];for(let l in s)o.push(this.CreateFromMorphTargetSequence(l,s[l],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function ry(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ds;case"vector":case"vector2":case"vector3":case"vector4":return ir;case"color":return Ja;case"quaternion":return Ns;case"bool":case"boolean":return Ls;case"string":return Us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function oy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ry(i.type);if(i.times===void 0){let n=[],s=[];ny(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Vc(i.settings)&&(t.settings={inTangents:Qs(i.settings.inTangents,Float32Array),outTangents:Qs(i.settings.outTangents,Float32Array)}),t}var Ji={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(gm(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!gm(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function gm(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var mh=class{constructor(e,t,n){let s=this,r=!1,o=0,l=0,c,a=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,l),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return a.push(h,d),this},this.removeHandler=function(h){let d=a.indexOf(h);return d!==-1&&a.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=a.length;d<u;d+=2){let f=a[d],p=a[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cg=new mh,zi=class{constructor(e){this.manager=e!==void 0?e:cg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};zi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Es={},Jd=class extends Error{constructor(e,t){super(e),this.response=t}},Ur=class extends zi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ji.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Es[e]!==void 0){Es[e].push({onLoad:t,onProgress:n,onError:s});return}Es[e]=[],Es[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),l=this.mimeType,c=this.responseType;fetch(o).then(a=>{if(a.status===200||a.status===0){if(a.status===0&&Qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||a.body===void 0||a.body.getReader===void 0)return a;let h=Es[e],d=a.body.getReader(),u=a.headers.get("X-File-Size")||a.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0,x=0,g=new ReadableStream({start(m){_();function _(){d.read().then(({done:b,value:y})=>{if(b)m.close();else{x+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let T=0,P=h.length;T<P;T++){let v=h[T];v.onProgress&&v.onProgress(w)}m.enqueue(y),_()}},b=>{m.error(b)})}}});return new Response(g)}else throw new Jd(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`,a)}).then(a=>{switch(c){case"arraybuffer":return a.arrayBuffer();case"blob":return a.blob();case"document":return a.text().then(h=>new DOMParser().parseFromString(h,l));case"json":return a.json();default:if(l==="")return a.text();{let d=/charset="?([^;"\s]*)"?/i.exec(l),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return a.arrayBuffer().then(p=>f.decode(p))}}}).then(a=>{Ji.add(`file:${e}`,a);let h=Es[e];delete Es[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(a)}}).catch(a=>{let h=Es[e];if(h===void 0)throw this.manager.itemError(e),a;delete Es[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(a)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var bo=new WeakMap,gh=class extends zi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ji.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=bo.get(o);d===void 0&&(d=[],bo.set(o,d)),d.push({onLoad:t,onError:s})}return o}let l=Co("img");function c(){h(),t&&t(this);let d=bo.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}bo.delete(this),r.manager.itemEnd(e)}function a(d){h(),s&&s(d),Ji.remove(`image:${e}`);let u=bo.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}bo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){l.removeEventListener("load",c,!1),l.removeEventListener("error",a,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",a,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),Ji.add(`image:${e}`,l),r.manager.itemStart(e),l.src=e,l}};var Qa=class extends zi{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new wi,l=new Ur(this.manager);return l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setPath(this.path),l.setWithCredentials(r.withCredentials),l.load(e,function(c){let a;try{a=r.parse(c)}catch(h){s!==void 0?s(h):ot(h);return}r._applyTexData(o,a),t&&t(o,a)},n,s),o}createDataTexture(e){let t=new wi;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Cn,e.wrapT=t.wrapT!==void 0?t.wrapT:Cn,e.magFilter=t.magFilter!==void 0?t.magFilter:Wt,e.minFilter=t.minFilter!==void 0?t.minFilter:Wt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=di),t.mipmapCount===1&&(e.minFilter=Wt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},ui=class extends zi{constructor(e){super(e)}load(e,t,n,s){let r=new Mn,o=new gh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Or=class extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Fr=class extends Or{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Vd=new je,xm=new U,vm=new U,Ho=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Do,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;xm.setFromMatrixPosition(e.matrixWorld),t.position.copy(xm),vm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Vd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Vd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,a=s?s.y/r.y:0;e.coordinateSystem===Ro||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+a,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+a,0,0,.5,.5,0,0,0,1),t.multiply(Vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},kc=new U,zc=new on,$i=new U,el=class extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kc,zc,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,zc,$i.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(kc,zc,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,zc,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Js=new U,_m=new oe,ym=new oe,gn=class extends el{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Js.x,Js.y).multiplyScalar(-e/Js.z),Js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Js.x,Js.y).multiplyScalar(-e/Js.z)}getViewSize(e,t){return this.getViewBounds(e,_m,ym),t.subVectors(ym,_m)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,a=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/a,s*=o.width/c,n*=o.height/a}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qd=class extends Ho{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ar*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Br=class extends Or{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Qd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ef=class extends Ho{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}},ss=class extends Or{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ef}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},rs=class extends el{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let a=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=a*this.view.offsetX,o=r+a*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},tf=class extends Ho{constructor(){super(new rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Os=class extends Or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new tf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Fs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Wd=new WeakMap,tl=class extends zi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ji.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(a=>{Wd.has(o)===!0?(s&&s(Wd.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(a),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader,l.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,l).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(a){return Ji.add(`image-bitmap:${e}`,a),t&&t(a),r.manager.itemEnd(e),a}).catch(function(a){s&&s(a),Wd.set(c,a),Ji.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ji.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var So=-90,Eo=1,xh=class extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(So,Eo,e,t);s.layers=this.layers,this.add(s);let r=new gn(So,Eo,e,t);r.layers=this.layers,this.add(r);let o=new gn(So,Eo,e,t);o.layers=this.layers,this.add(o);let l=new gn(So,Eo,e,t);l.layers=this.layers,this.add(l);let c=new gn(So,Eo,e,t);c.layers=this.layers,this.add(c);let a=new gn(So,Eo,e,t);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,l,c]=t;for(let a of t)this.remove(a);if(e===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let a of t)this.add(a),a.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,l,c,a,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},vh=class extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},nl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=ay.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function ay(){this._document.hidden===!1&&this.reset()}var _h=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let l=0;l!==s;++l)n[r+l]=n[l];o=t}else{o+=t;let l=t/o;this._mixBufferRegion(n,r,0,l,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,l=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,a=t+t;c!==a;++c)if(n[c]!==n[c+t]){l.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){on.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;on.multiplyQuaternionsFlat(e,o,e,t,e,n),on.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let l=0;l!==r;++l){let c=t+l;e[c]=e[c]*o+e[n+l]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]+e[n+o]*s}}},Ef="\\[\\]\\.:\\/",ly=new RegExp("["+Ef+"]","g"),Tf="[^"+Ef+"]",cy="[^"+Ef.replace("\\.","")+"]",hy=/((?:WC+[\/:])*)/.source.replace("WC",Tf),uy=/(WCOD+)?/.source.replace("WCOD",cy),dy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tf),fy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tf),py=new RegExp("^"+hy+uy+dy+fy+"$"),my=["material","materials","bones","map"],nf=class{constructor(e,t,n){let s=n||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},zt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ly,"")}static parseTrackName(e){let t=py.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);my.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===t||l.uuid===t)return l;let c=n(l.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let a=t.objectIndex;switch(n){case"materials":if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===a){a=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(a!==void 0){if(e[a]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[a]}}let o=e[s];if(o===void 0){let a=t.nodeName;ot("PropertyBinding: Trying to update property for track: "+a+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zt.Composite=nf;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yh=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,l=new Array(o),c={endingStart:Mr,endingEnd:Mr};for(let a=0;a!==o;++a){let h=r[a].createInterpolant(null);l[a]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=l,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=au,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,l=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(l,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,l=this._timeScaleInterpolant;l===null&&(l=s._lendControlInterpolant(),this._timeScaleInterpolant=l);let c=l.parameterPositions,a=l.sampleValues;return c[0]=r,c[1]=r+n,a[0]=e/o,a[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),l=this._updateWeight(e);if(l>0){let c=this._interpolants,a=this._propertyBindings;switch(this.blendMode){case Gm:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(o),a[h].accumulateAdditive(l);break;case lu:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(o),a[h].accumulate(s,l)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===Hm;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Xo){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let l=Math.floor(s/t);s-=t*l,r+=Math.abs(l);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let a=e<0;this._setEndings(a,!a,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:l})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=br,s.endingEnd=br):(e?s.endingStart=this.zeroSlopeAtStart?br:Mr:s.endingStart=Aa,t?s.endingEnd=this.zeroSlopeAtEnd?br:Mr:s.endingEnd=Aa)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,c[0]=t,l[1]=r+e,c[1]=n,this}},gy=new Float32Array(1),kr=class extends ki{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,l=e._interpolants,c=n.uuid,a=this._bindingsByRootAndName,h=a[c];h===void 0&&(h={},a[c]=h);for(let d=0;d!==r;++d){let u=s[d],f=u.name,p=h[f];if(p!==void 0)++p.referenceCount,o[d]=p;else{if(p=o[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}let x=t&&t._propertyBindings[d].binding.parsedPath;p=new _h(zt.create(n,f,x),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),o[d]=p}l[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let l=o.knownActions;e._byClipCacheIndex=l.length,l.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,l=o[r],c=l.knownActions,a=c[c.length-1],h=e._byClipCacheIndex;a._byClipCacheIndex=h,c[h]=a,c.pop(),e._byClipCacheIndex=null;let d=l.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,l=o[s],c=t[t.length-1],a=e._cacheIndex;c._cacheIndex=a,t[a]=c,t.pop(),delete l[r],Object.keys(l).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new $a(new Float32Array(2),new Float32Array(2),1,gy),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Nr.findByName(s,e):e,l=o!==null?o.uuid:e,c=this._actionsByClip[l],a=null;if(n===void 0&&(o!==null?n=o.blendMode:n=lu),c!==void 0){let d=c.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;a=c.knownActions[0],o===null&&(o=a._clip)}if(o===null)return null;let h=new yh(this,o,t,n);return this._bindAction(h,a),this._addInactiveAction(h,l,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Nr.findByName(n,e):e,o=r?r.uuid:e,l=this._actionsByClip[o];return l!==void 0&&l.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let a=0;a!==n;++a)t[a]._update(s,e,r,o);let l=this._bindings,c=this._nActiveBindings;for(let a=0;a!==c;++a)l[a].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let l=0,c=o.length;l!==c;++l){let a=o[l];this._deactivateAction(a);let h=a._cacheIndex,d=t[t.length-1];a._cacheIndex=null,a._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(a)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let l=n[o].actionByRoot,c=l[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let l=r[o];l.restoreOriginalState(),this._removeInactiveBinding(l)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var sf=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function wf(i,e,t,n){let s=xy(n);switch(t){case gf:return i*e;case Ah:return i*e/s.components*s.byteLength;case Rh:return i*e/s.components*s.byteLength;case or:return i*e*2/s.components*s.byteLength;case Ch:return i*e*2/s.components*s.byteLength;case xf:return i*e*3/s.components*s.byteLength;case Jn:return i*e*4/s.components*s.byteLength;case Ph:return i*e*4/s.components*s.byteLength;case dl:case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pl:case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lh:case Nh:return Math.max(i,16)*Math.max(e,8)/4;case Ih:case Dh:return Math.max(i,8)*Math.max(e,8)/2;case Uh:case Oh:case Bh:case kh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fh:case gl:case zh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case qh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Zh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $h:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Jh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case eu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case tu:case nu:case iu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case su:case ru:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xl:case ou:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xy(i){switch(i){case Vn:case df:return{byteLength:1,components:1};case Wo:case ff:case Yt:return{byteLength:2,components:1};case Th:case wh:return{byteLength:2,components:4};case Gi:case Eh:case Wn:return{byteLength:4,components:1};case pf:case mf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ig(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function _y(i){let e=new WeakMap;function t(l,c){let a=l.array,h=l.usage,d=a.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,a,h),l.onUploadCallback();let f;if(a instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)f=i.HALF_FLOAT;else if(a instanceof Uint16Array)l.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(a instanceof Int16Array)f=i.SHORT;else if(a instanceof Uint32Array)f=i.UNSIGNED_INT;else if(a instanceof Int32Array)f=i.INT;else if(a instanceof Int8Array)f=i.BYTE;else if(a instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:u,type:f,bytesPerElement:a.BYTES_PER_ELEMENT,version:l.version,size:d}}function n(l,c,a){let h=c.array,d=c.updateRanges;if(i.bindBuffer(a,l),d.length===0)i.bufferSubData(a,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];i.bufferSubData(a,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let a=e.get(l);if(a===void 0)e.set(l,t(l,c));else if(a.version<l.version){if(a.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(a.buffer,l,c),a.version=l.version}}return{get:s,remove:r,update:o}}var yy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,My=`#ifdef USE_ALPHAHASH
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
#endif`,by=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ey=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wy=`#ifdef USE_AOMAP
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
#endif`,Ay=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ry=`#ifdef USE_BATCHING
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
#endif`,Cy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Py=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Iy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ly=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dy=`#ifdef USE_IRIDESCENCE
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
#endif`,Ny=`#ifdef USE_BUMPMAP
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
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ky=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Vy=`#define PI 3.141592653589793
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
} // validated`,Wy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xy=`vec3 transformedNormal = objectNormal;
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
#endif`,qy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ky="gl_FragColor = linearToOutputTexel( gl_FragColor );",$y=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jy=`#ifdef USE_ENVMAP
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
#endif`,Qy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,e1=`#ifdef USE_ENVMAP
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
#endif`,t1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n1=`#ifdef USE_ENVMAP
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
#endif`,i1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a1=`#ifdef USE_GRADIENTMAP
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
}`,l1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,d1=`#ifdef USE_ENVMAP
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
#endif`,f1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x1=`PhysicalMaterial material;
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
#endif`,v1=`uniform sampler2D dfgLUT;
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
}`,_1=`
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
#endif`,y1=`#if defined( RE_IndirectDiffuse )
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
#endif`,M1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,S1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,P1=`#if defined( USE_POINTS_UV )
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
#endif`,I1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O1=`#ifdef USE_MORPHTARGETS
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
#endif`,F1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,k1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,V1=`#ifdef USE_NORMALMAP
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
#endif`,W1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,K1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rM=`float getShadowMask() {
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
}`,oM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aM=`#ifdef USE_SKINNING
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
#endif`,lM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cM=`#ifdef USE_SKINNING
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
#endif`,hM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pM=`#ifdef USE_TRANSMISSION
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
#endif`,mM=`#ifdef USE_TRANSMISSION
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
#endif`,gM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_M=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MM=`uniform sampler2D t2D;
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
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,EM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`#include <common>
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
}`,AM=`#if DEPTH_PACKING == 3200
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
}`,RM=`#define DISTANCE
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
}`,CM=`#define DISTANCE
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
}`,PM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LM=`uniform float scale;
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
}`,DM=`uniform vec3 diffuse;
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
}`,NM=`#include <common>
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
}`,UM=`uniform vec3 diffuse;
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
}`,OM=`#define LAMBERT
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
}`,FM=`#define LAMBERT
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
}`,BM=`#define MATCAP
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
}`,kM=`#define MATCAP
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
}`,zM=`#define NORMAL
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
}`,HM=`#define NORMAL
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
}`,GM=`#define PHONG
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
}`,VM=`#define PHONG
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
}`,WM=`#define STANDARD
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
}`,XM=`#define STANDARD
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
}`,qM=`#define TOON
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
}`,YM=`#define TOON
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
}`,jM=`uniform float size;
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
}`,ZM=`uniform vec3 diffuse;
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
}`,KM=`#include <common>
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
}`,$M=`uniform vec3 color;
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
}`,JM=`uniform float rotation;
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
}`,QM=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:yy,alphahash_pars_fragment:My,alphamap_fragment:by,alphamap_pars_fragment:Sy,alphatest_fragment:Ey,alphatest_pars_fragment:Ty,aomap_fragment:wy,aomap_pars_fragment:Ay,batching_pars_vertex:Ry,batching_vertex:Cy,begin_vertex:Py,beginnormal_vertex:Iy,bsdfs:Ly,iridescence_fragment:Dy,bumpmap_pars_fragment:Ny,clipping_planes_fragment:Uy,clipping_planes_pars_fragment:Oy,clipping_planes_pars_vertex:Fy,clipping_planes_vertex:By,color_fragment:ky,color_pars_fragment:zy,color_pars_vertex:Hy,color_vertex:Gy,common:Vy,cube_uv_reflection_fragment:Wy,defaultnormal_vertex:Xy,displacementmap_pars_vertex:qy,displacementmap_vertex:Yy,emissivemap_fragment:jy,emissivemap_pars_fragment:Zy,colorspace_fragment:Ky,colorspace_pars_fragment:$y,envmap_fragment:Jy,envmap_common_pars_fragment:Qy,envmap_pars_fragment:e1,envmap_pars_vertex:t1,envmap_physical_pars_fragment:d1,envmap_vertex:n1,fog_vertex:i1,fog_pars_vertex:s1,fog_fragment:r1,fog_pars_fragment:o1,gradientmap_pars_fragment:a1,lightmap_pars_fragment:l1,lights_lambert_fragment:c1,lights_lambert_pars_fragment:h1,lights_pars_begin:u1,lights_toon_fragment:f1,lights_toon_pars_fragment:p1,lights_phong_fragment:m1,lights_phong_pars_fragment:g1,lights_physical_fragment:x1,lights_physical_pars_fragment:v1,lights_fragment_begin:_1,lights_fragment_maps:y1,lights_fragment_end:M1,lightprobes_pars_fragment:b1,logdepthbuf_fragment:S1,logdepthbuf_pars_fragment:E1,logdepthbuf_pars_vertex:T1,logdepthbuf_vertex:w1,map_fragment:A1,map_pars_fragment:R1,map_particle_fragment:C1,map_particle_pars_fragment:P1,metalnessmap_fragment:I1,metalnessmap_pars_fragment:L1,morphinstance_vertex:D1,morphcolor_vertex:N1,morphnormal_vertex:U1,morphtarget_pars_vertex:O1,morphtarget_vertex:F1,normal_fragment_begin:B1,normal_fragment_maps:k1,normal_pars_fragment:z1,normal_pars_vertex:H1,normal_vertex:G1,normalmap_pars_fragment:V1,clearcoat_normal_fragment_begin:W1,clearcoat_normal_fragment_maps:X1,clearcoat_pars_fragment:q1,iridescence_pars_fragment:Y1,opaque_fragment:j1,packing:Z1,premultiplied_alpha_fragment:K1,project_vertex:$1,dithering_fragment:J1,dithering_pars_fragment:Q1,roughnessmap_fragment:eM,roughnessmap_pars_fragment:tM,shadowmap_pars_fragment:nM,shadowmap_pars_vertex:iM,shadowmap_vertex:sM,shadowmask_pars_fragment:rM,skinbase_vertex:oM,skinning_pars_vertex:aM,skinning_vertex:lM,skinnormal_vertex:cM,specularmap_fragment:hM,specularmap_pars_fragment:uM,tonemapping_fragment:dM,tonemapping_pars_fragment:fM,transmission_fragment:pM,transmission_pars_fragment:mM,uv_pars_fragment:gM,uv_pars_vertex:xM,uv_vertex:vM,worldpos_vertex:_M,background_vert:yM,background_frag:MM,backgroundCube_vert:bM,backgroundCube_frag:SM,cube_vert:EM,cube_frag:TM,depth_vert:wM,depth_frag:AM,distance_vert:RM,distance_frag:CM,equirect_vert:PM,equirect_frag:IM,linedashed_vert:LM,linedashed_frag:DM,meshbasic_vert:NM,meshbasic_frag:UM,meshlambert_vert:OM,meshlambert_frag:FM,meshmatcap_vert:BM,meshmatcap_frag:kM,meshnormal_vert:zM,meshnormal_frag:HM,meshphong_vert:GM,meshphong_frag:VM,meshphysical_vert:WM,meshphysical_frag:XM,meshtoon_vert:qM,meshtoon_frag:YM,points_vert:jM,points_frag:ZM,shadow_vert:KM,shadow_frag:$M,sprite_vert:JM,sprite_frag:QM},Fe={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},hs={basic:{uniforms:Xn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Xn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ge(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Xn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Xn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Xn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new ge(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Xn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Xn([Fe.points,Fe.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Xn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Xn([Fe.common,Fe.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Xn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Xn([Fe.sprite,Fe.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:Xn([Fe.common,Fe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:Xn([Fe.lights,Fe.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};hs.physical={uniforms:Xn([hs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};var uu={r:0,b:0,g:0},eb=new je,Lg=new ut;Lg.set(-1,0,0,0,1,0,0,0,1);function tb(i,e,t,n,s,r){let o=new ge(0),l=s===!0?0:1,c,a,h=null,d=0,u=null;function f(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let y=_.backgroundBlurriness>0;b=e.get(b,y)}return b}function p(_){let b=!1,y=f(_);y===null?g(o,l):y&&y.isColor&&(g(y,1),b=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,b){let y=f(b);y&&(y.isCubeTexture||y.mapping===ul)?(a===void 0&&(a=new xe(new ct(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:qr(hs.backgroundCube.uniforms),vertexShader:hs.backgroundCube.vertexShader,fragmentShader:hs.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),a.geometry.deleteAttribute("uv"),a.onBeforeRender=function(w,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(a.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(a)),a.material.uniforms.envMap.value=y,a.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,a.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,a.material.uniforms.backgroundRotation.value.setFromMatrix4(eb.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&a.material.uniforms.backgroundRotation.value.premultiply(Lg),a.material.toneMapped=gt.getTransfer(y.colorSpace)!==Ct,(h!==y||d!==y.version||u!==i.toneMapping)&&(a.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),a.layers.enableAll(),_.unshift(a,a.geometry,a.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new xe(new an(2,2),new bt({name:"BackgroundMaterial",uniforms:qr(hs.background.uniforms),vertexShader:hs.background.vertexShader,fragmentShader:hs.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=gt.getTransfer(y.colorSpace)!==Ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function g(_,b){_.getRGB(uu,Sf(i)),t.buffers.color.setClear(uu.r,uu.g,uu.b,b,r)}function m(){a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,b=1){o.set(_),l=b,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,g(o,l)},render:p,addToRenderList:x,dispose:m}}function nb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function l(D,k,L,C,N){let R=!1,O=d(D,C,L,k);r!==O&&(r=O,a(r.object)),R=f(D,C,L,N),R&&p(D,C,L,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(R||o)&&(o=!1,y(D,k,L,C),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return i.createVertexArray()}function a(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,k,L,C){let N=C.wireframe===!0,R=n[k.id];R===void 0&&(R={},n[k.id]=R);let O=D.isInstancedMesh===!0?D.id:0,G=R[O];G===void 0&&(G={},R[O]=G);let F=G[L.id];F===void 0&&(F={},G[L.id]=F);let z=F[N];return z===void 0&&(z=u(c()),F[N]=z),z}function u(D){let k=[],L=[],C=[];for(let N=0;N<t;N++)k[N]=0,L[N]=0,C[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:L,attributeDivisors:C,object:D,attributes:{},index:null}}function f(D,k,L,C){let N=r.attributes,R=k.attributes,O=0,G=L.getAttributes();for(let F in G)if(G[F].location>=0){let Y=N[F],se=R[F];if(se===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),Y===void 0||Y.attribute!==se||se&&Y.data!==se.data)return!0;O++}return r.attributesNum!==O||r.index!==C}function p(D,k,L,C){let N={},R=k.attributes,O=0,G=L.getAttributes();for(let F in G)if(G[F].location>=0){let Y=R[F];Y===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor));let se={};se.attribute=Y,Y&&Y.data&&(se.data=Y.data),N[F]=se,O++}r.attributes=N,r.attributesNum=O,r.index=C}function x(){let D=r.newAttributes;for(let k=0,L=D.length;k<L;k++)D[k]=0}function g(D){m(D,0)}function m(D,k){let L=r.newAttributes,C=r.enabledAttributes,N=r.attributeDivisors;L[D]=1,C[D]===0&&(i.enableVertexAttribArray(D),C[D]=1),N[D]!==k&&(i.vertexAttribDivisor(D,k),N[D]=k)}function _(){let D=r.newAttributes,k=r.enabledAttributes;for(let L=0,C=k.length;L<C;L++)k[L]!==D[L]&&(i.disableVertexAttribArray(L),k[L]=0)}function b(D,k,L,C,N,R,O){O===!0?i.vertexAttribIPointer(D,k,L,N,R):i.vertexAttribPointer(D,k,L,C,N,R)}function y(D,k,L,C){x();let N=C.attributes,R=L.getAttributes(),O=k.defaultAttributeValues;for(let G in R){let F=R[G];if(F.location>=0){let z=N[G];if(z===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(z=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(z=D.instanceColor)),z!==void 0){let Y=z.normalized,se=z.itemSize,he=e.get(z);if(he===void 0)continue;let q=he.buffer,le=he.type,Se=he.bytesPerElement,Z=le===i.INT||le===i.UNSIGNED_INT||z.gpuType===Eh;if(z.isInterleavedBufferAttribute){let ie=z.data,Ee=ie.stride,Ce=z.offset;if(ie.isInstancedInterleavedBuffer){for(let $=0;$<F.locationSize;$++)m(F.location+$,ie.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let $=0;$<F.locationSize;$++)g(F.location+$);i.bindBuffer(i.ARRAY_BUFFER,q);for(let $=0;$<F.locationSize;$++)b(F.location+$,se/F.locationSize,le,Y,Ee*Se,(Ce+se/F.locationSize*$)*Se,Z)}else{if(z.isInstancedBufferAttribute){for(let ie=0;ie<F.locationSize;ie++)m(F.location+ie,z.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let ie=0;ie<F.locationSize;ie++)g(F.location+ie);i.bindBuffer(i.ARRAY_BUFFER,q);for(let ie=0;ie<F.locationSize;ie++)b(F.location+ie,se/F.locationSize,le,Y,se*Se,se/F.locationSize*ie*Se,Z)}}else if(O!==void 0){let Y=O[G];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(F.location,Y);break;case 3:i.vertexAttrib3fv(F.location,Y);break;case 4:i.vertexAttrib4fv(F.location,Y);break;default:i.vertexAttrib1fv(F.location,Y)}}}}_()}function w(){M();for(let D in n){let k=n[D];for(let L in k){let C=k[L];for(let N in C){let R=C[N];for(let O in R)h(R[O].object),delete R[O];delete C[N]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;let k=n[D.id];for(let L in k){let C=k[L];for(let N in C){let R=C[N];for(let O in R)h(R[O].object),delete R[O];delete C[N]}}delete n[D.id]}function P(D){for(let k in n){let L=n[k];for(let C in L){let N=L[C];if(N[D.id]===void 0)continue;let R=N[D.id];for(let O in R)h(R[O].object),delete R[O];delete N[D.id]}}}function v(D){for(let k in n){let L=n[k],C=D.isInstancedMesh===!0?D.id:0,N=L[C];if(N!==void 0){for(let R in N){let O=N[R];for(let G in O)h(O[G].object),delete O[G];delete N[R]}delete L[C],Object.keys(L).length===0&&delete n[k]}}}function M(){E(),o=!0,r!==s&&(r=s,a(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:M,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function ib(i,e,t){let n;function s(c){n=c}function r(c,a){i.drawArrays(n,c,a),t.update(a,n,1)}function o(c,a,h){h!==0&&(i.drawArraysInstanced(n,c,a,h),t.update(a,n,h))}function l(c,a,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,a,0,h);let u=0;for(let f=0;f<h;f++)u+=a[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function sb(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Jn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(P){let v=P===Yt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Vn&&P!==Wn&&!v&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",h=c(a);h!==a&&(Qe("WebGLRenderer:",a,"not supported, using",h,"instead."),a=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:a,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,maxSamples:w,samples:T}}function rb(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Oi,l=new ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):a();else{let _=r?0:n,b=_*4,y=m.clippingState||null;c.value=y,y=h(p,u,b,f);for(let w=0;w!==b;++w)y[w]=t[w];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function a(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=c.value,p!==!0||g===null){let m=f+x*4,_=u.matrixWorldInverse;l.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,y=f;b!==x;++b,y+=4)o.copy(d[b]).applyMatrix4(_,l),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var jo=4,ob=6,ab=20,lb=256,Ml=new rs,hg=new ge,Af=null,Rf=0,Cf=0,Pf=!1,cb=new U,Yr=new U,Bs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:l=cb}=r;Af=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Cf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Af,Rf,Cf),this._renderer.xr.enabled=Pf,e.scissorTest=!1,Yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===Vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Af=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Cf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Yt,format:Jn,colorSpace:Ln,depthBuffer:!1},s=ug(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ug(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hb(r)),this._blurMaterial=db(r,e,t),this._ggxMaterial=ub(r,e,t)}return s}_compileMaterial(e){let t=new xe(new vt,e);this._renderer.compile(t,Ml)}_sceneToCubeUV(e,t,n,s,r){let c=new gn(90,1,t,n),a=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(hg),d.toneMapping=Hi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xe(new ct,new st({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,_=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,m=!0):(g.color.copy(hg),m=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(c.up.set(0,a[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):y===1?(c.up.set(0,0,a[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,a[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));let w=this._cubeSize;Yo(s,y*w,b>2?w:0,w,w),d.setRenderTarget(s),m&&d.render(x,c),d.render(e,c)}d.toneMapping=f,d.autoClear=u,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===sr||e.mapping===Vr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let l=r.uniforms;l.envMap.value=e;let c=this._cubeSize;Yo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ml)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[n];l.material=o;let c=o.uniforms,a=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(a*a-h*h),u=a*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-jo?n-p+jo:0),m=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=p-t,Yo(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(l,Ml),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,Yo(e,g,m,3*x,2*x),s.setRenderTarget(e),s.render(l,Ml)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let a=l.uniforms;a.envMap.value=e.texture,a.sigma.value=r,a.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-jo?s-this._lodMax+jo:0),u=4*(this._cubeSize-h);Yo(t,d,u,3*h,2*h),o.setRenderTarget(t),o.render(c,Ml)}};function hb(i){let e=[],t=[],n=i,s=i-jo+1+ob;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let l=1/(o-2),c=-l,a=1+l,h=[c,c,a,c,a,a,c,c,a,a,c,a],d=6,u=6,f=3,p=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let m=0;m<d;m++){let _=m%3*2/3-1,b=m>2?0:-1,y=[_,b,0,_+2/3,b,0,_+2/3,b+1,0,_,b,0,_+2/3,b+1,0,_,b+1,0];p.set(y,f*u*m);for(let w=0;w<u;w++){let T=h[w*2]*2-1,P=h[w*2+1]*2-1;m===0?Yr.set(1,P,T):m===1?Yr.set(-T,1,-P):m===2?Yr.set(-T,P,1):m===3?Yr.set(-1,P,-T):m===4?Yr.set(-T,-1,P):Yr.set(T,P,-1),Yr.toArray(x,(m*u+w)*f)}}let g=new vt;g.setAttribute("position",new ht(p,f)),g.setAttribute("outputDirection",new ht(x,f)),t.push(new xe(g,null)),n>jo&&n--}return{lodMeshes:t,sizeLods:e}}function ug(i,e,t){let n=new $t(i,e,t);return n.texture.mapping=ul,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ub(i,e,t){return new bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function db(i,e,t){return new bt({name:"SphericalGaussianBlur",defines:{SAMPLES:ab,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function dg(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function fg(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function mu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var fu=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Oa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ct(5,5,5),r=new bt({name:"CubemapFromEquirect",uniforms:qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:dn});r.uniforms.tEquirect.value=t;let o=new xe(s,r),l=t.minFilter;return t.minFilter===di&&(t.minFilter=Wt),new xh(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function fb(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Wr||f===bh)if(e.has(u)){let p=e.get(u).texture;return l(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new fu(p.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",a),l(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,p=f===Wr||f===bh,x=f===sr||f===Vr;if(p||x){let g=t.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Bs(i)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let _=u.image;return p&&_&&_.height>0||x&&_&&c(_)?(n===null&&(n=new Bs(i)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function l(u,f){return f===Wr?u.mapping=sr:f===bh&&(u.mapping=Vr),u}function c(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function a(u){let f=u.target;f.removeEventListener("dispose",a);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function pb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Er("WebGLRenderer: "+n+" extension not supported."),s}}}function mb(i,e,t,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function l(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function a(d){let u=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let _=f.array;x=f.version;for(let b=0,y=_.length;b<y;b+=3){let w=_[b+0],T=_[b+1],P=_[b+2];u.push(w,T,T,P,P,w)}}else{let _=p.array;x=p.version;for(let b=0,y=_.length/3-1;b<y;b+=3){let w=b+0,T=b+1,P=b+2;u.push(w,T,T,P,P,w)}}let g=new(p.count>=65535?Da:tr)(u,1);g.version=x;let m=r.get(d);m&&e.remove(m),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&a(d)}else a(d);return r.get(d)}return{get:l,update:c,getWireframeAttribute:h}}function gb(i,e,t){let n;function s(d){n=d}let r,o;function l(d){r=d.type,o=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function a(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];t.update(x,n,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=a,this.renderMultiDraw=h}function xb(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:ot("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function vb(i,e,t){let n=new WeakMap,s=new At;function r(o,l,c){let a=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(l);if(u===void 0||u.count!==d){let M=function(){P.dispose(),n.delete(l),l.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();let f=l.morphAttributes.position!==void 0,p=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],_=l.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),x===!0&&(b=3);let y=l.attributes.position.count*b,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*w*4*d),P=new Pa(T,y,w,d);P.type=Wn,P.needsUpdate=!0;let v=b*4;for(let E=0;E<d;E++){let D=g[E],k=m[E],L=_[E],C=y*w*4*E;for(let N=0;N<D.count;N++){let R=N*v;f===!0&&(s.fromBufferAttribute(D,N),T[C+R+0]=s.x,T[C+R+1]=s.y,T[C+R+2]=s.z,T[C+R+3]=0),p===!0&&(s.fromBufferAttribute(k,N),T[C+R+4]=s.x,T[C+R+5]=s.y,T[C+R+6]=s.z,T[C+R+7]=0),x===!0&&(s.fromBufferAttribute(L,N),T[C+R+8]=s.x,T[C+R+9]=s.y,T[C+R+10]=s.z,T[C+R+11]=L.itemSize===4?s.w:1)}}u={count:d,texture:P,size:new oe(y,w)},n.set(l,u),l.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<a.length;x++)f+=a[x];let p=l.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",a)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function _b(i,e,t,n,s){let r=new WeakMap;function o(a){let h=s.render.frame,d=a.geometry,u=e.get(a,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),a.isInstancedMesh&&(a.hasEventListener("dispose",c)===!1&&a.addEventListener("dispose",c),r.get(a)!==h&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,h))),a.isSkinnedMesh){let f=a.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function l(){r=new WeakMap}function c(a){let h=a.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}var yb={[rl]:"LINEAR_TONE_MAPPING",[ol]:"REINHARD_TONE_MAPPING",[al]:"CINEON_TONE_MAPPING",[Gr]:"ACES_FILMIC_TONE_MAPPING",[cl]:"AGX_TONE_MAPPING",[hl]:"NEUTRAL_TONE_MAPPING",[ll]:"CUSTOM_TONE_MAPPING"};function Mb(i,e,t,n,s,r){let o=new $t(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,a=new vt;a.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new lt([0,2,0,0,2,0],2));let h=new zo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new xe(a,h),u=new rs(-1,1,1,-1,0,1),f=null,p=null,x=!1,g,m=null,_=[],b=!1;this.setSize=function(y,w){o.setSize(y,w),l!==null&&l.setSize(y,w),c!==null&&c.setSize(y,w);for(let T=0;T<_.length;T++){let P=_[T];P.setSize&&P.setSize(y,w)}},this.setEffects=function(y){_=y,b=_.length>0&&_[0].isRenderPass===!0;let w=o.width,T=o.height;_.length>0&&l===null&&(l=new $t(w,T,{type:Yt,depthBuffer:!1,stencilBuffer:!1}),c=new $t(w,T,{type:Yt,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<_.length;P++){let v=_[P];v.setSize&&v.setSize(w,T)}},this.begin=function(y,w){if(x||y.toneMapping===Hi&&_.length===0)return!1;if(m=w,w!==null){let T=w.width,P=w.height;(o.width!==T||o.height!==P)&&this.setSize(T,P)}return b===!1&&y.setRenderTarget(o),g=y.toneMapping,y.toneMapping=Hi,!0},this.hasRenderPass=function(){return b},this.end=function(y,w){y.toneMapping=g,x=!0;let T=o,P=l;for(let v=0;v<_.length;v++){let M=_[v];M.enabled!==!1&&(M.render(y,P,T,w),M.needsSwap!==!1&&(T=P,P=P===l?c:l))}if(f!==y.outputColorSpace||p!==y.toneMapping){f=y.outputColorSpace,p=y.toneMapping,h.defines={},gt.getTransfer(f)===Ct&&(h.defines.SRGB_TRANSFER="");let v=yb[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(m),y.render(d,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),a.dispose(),h.dispose()}}var Dg=new Mn,Df=new ts(1,1),Ng=new Pa,Ug=new Qc,Og=new Oa,pg=[],mg=[],gg=new Float32Array(16),xg=new Float32Array(9),vg=new Float32Array(4);function Ko(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=pg[s];if(r===void 0&&(r=new Float32Array(s),pg[s]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(r,l)}return r}function En(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function gu(i,e){let t=mg[e];t===void 0&&(t=new Int32Array(e),mg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Sb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;i.uniform2fv(this.addr,e),Tn(t,e)}}function Eb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(En(t,e))return;i.uniform3fv(this.addr,e),Tn(t,e)}}function Tb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;i.uniform4fv(this.addr,e),Tn(t,e)}}function wb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(En(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tn(t,e)}else{if(En(t,n))return;vg.set(n),i.uniformMatrix2fv(this.addr,!1,vg),Tn(t,n)}}function Ab(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(En(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tn(t,e)}else{if(En(t,n))return;xg.set(n),i.uniformMatrix3fv(this.addr,!1,xg),Tn(t,n)}}function Rb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(En(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tn(t,e)}else{if(En(t,n))return;gg.set(n),i.uniformMatrix4fv(this.addr,!1,gg),Tn(t,n)}}function Cb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Pb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;i.uniform2iv(this.addr,e),Tn(t,e)}}function Ib(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;i.uniform3iv(this.addr,e),Tn(t,e)}}function Lb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;i.uniform4iv(this.addr,e),Tn(t,e)}}function Db(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Nb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;i.uniform2uiv(this.addr,e),Tn(t,e)}}function Ub(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;i.uniform3uiv(this.addr,e),Tn(t,e)}}function Ob(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;i.uniform4uiv(this.addr,e),Tn(t,e)}}function Fb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Df.compareFunction=t.isReversedDepthBuffer()?hu:cu,r=Df):r=Dg,t.setTexture2D(e||r,s)}function Bb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ug,s)}function kb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Og,s)}function zb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ng,s)}function Hb(i){switch(i){case 5126:return bb;case 35664:return Sb;case 35665:return Eb;case 35666:return Tb;case 35674:return wb;case 35675:return Ab;case 35676:return Rb;case 5124:case 35670:return Cb;case 35667:case 35671:return Pb;case 35668:case 35672:return Ib;case 35669:case 35673:return Lb;case 5125:return Db;case 36294:return Nb;case 36295:return Ub;case 36296:return Ob;case 35678:case 36198:case 36298:case 36306:case 35682:return Fb;case 35679:case 36299:case 36307:return Bb;case 35680:case 36300:case 36308:case 36293:return kb;case 36289:case 36303:case 36311:case 36292:return zb}}function Gb(i,e){i.uniform1fv(this.addr,e)}function Vb(i,e){let t=Ko(e,this.size,2);i.uniform2fv(this.addr,t)}function Wb(i,e){let t=Ko(e,this.size,3);i.uniform3fv(this.addr,t)}function Xb(i,e){let t=Ko(e,this.size,4);i.uniform4fv(this.addr,t)}function qb(i,e){let t=Ko(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Yb(i,e){let t=Ko(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jb(i,e){let t=Ko(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Zb(i,e){i.uniform1iv(this.addr,e)}function Kb(i,e){i.uniform2iv(this.addr,e)}function $b(i,e){i.uniform3iv(this.addr,e)}function Jb(i,e){i.uniform4iv(this.addr,e)}function Qb(i,e){i.uniform1uiv(this.addr,e)}function eS(i,e){i.uniform2uiv(this.addr,e)}function tS(i,e){i.uniform3uiv(this.addr,e)}function nS(i,e){i.uniform4uiv(this.addr,e)}function iS(i,e,t){let n=this.cache,s=e.length,r=gu(t,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Df:o=Dg;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||o,r[l])}function sS(i,e,t){let n=this.cache,s=e.length,r=gu(t,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ug,r[o])}function rS(i,e,t){let n=this.cache,s=e.length,r=gu(t,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Og,r[o])}function oS(i,e,t){let n=this.cache,s=e.length,r=gu(t,s);En(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ng,r[o])}function aS(i){switch(i){case 5126:return Gb;case 35664:return Vb;case 35665:return Wb;case 35666:return Xb;case 35674:return qb;case 35675:return Yb;case 35676:return jb;case 5124:case 35670:return Zb;case 35667:case 35671:return Kb;case 35668:case 35672:return $b;case 35669:case 35673:return Jb;case 5125:return Qb;case 36294:return eS;case 36295:return tS;case 36296:return nS;case 35678:case 36198:case 36298:case 36306:case 35682:return iS;case 35679:case 36299:case 36307:return sS;case 35680:case 36300:case 36308:case 36293:return rS;case 36289:case 36303:case 36311:case 36292:return oS}}var Nf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hb(t.type)}},Uf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aS(t.type)}},Of=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},If=/(\w+)(\])?(\[|\.)?/g;function _g(i,e){i.seq.push(e),i.map[e.id]=e}function lS(i,e,t){let n=i.name,s=n.length;for(If.lastIndex=0;;){let r=If.exec(n),o=If.lastIndex,l=r[1],c=r[2]==="]",a=r[3];if(c&&(l=l|0),a===void 0||a==="["&&o+2===s){_g(t,a===void 0?new Nf(l,i,e):new Uf(l,i,e));break}else{let d=t.map[l];d===void 0&&(d=new Of(l),_g(t,d)),t=d}}}var Zo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);lS(l,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let l=t[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function yg(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var cS=37297,hS=0;function uS(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}var Mg=new ut;function dS(i){gt._getMatrix(Mg,gt.workingColorSpace,i);let e=`mat3( ${Mg.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case Ra:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bg(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+uS(i.getShaderSource(e),l)}else return r}function fS(i,e){let t=dS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var pS={[rl]:"Linear",[ol]:"Reinhard",[al]:"Cineon",[Gr]:"ACESFilmic",[cl]:"AgX",[hl]:"Neutral",[ll]:"Custom"};function mS(i,e){let t=pS[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var du=new U;function gS(){gt.getLuminanceCoefficients(du);let i=du.x.toFixed(4),e=du.y.toFixed(4),t=du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sl).join(`
`)}function vS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _S(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function Sl(i){return i!==""}function Sg(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var yS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ff(i){return i.replace(yS,bS)}var MS=new Map;function bS(i,e){let t=yt[e];if(t===void 0){let n=MS.get(e);if(n!==void 0)t=yt[n],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ff(t)}var SS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tg(i){return i.replace(SS,ES)}function ES(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wg(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var TS={[zr]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function wS(i){return TS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var AS={[sr]:"ENVMAP_TYPE_CUBE",[Vr]:"ENVMAP_TYPE_CUBE",[ul]:"ENVMAP_TYPE_CUBE_UV"};function RS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":AS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var CS={[Vr]:"ENVMAP_MODE_REFRACTION"};function PS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":CS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var IS={[hf]:"ENVMAP_BLENDING_MULTIPLY",[Bm]:"ENVMAP_BLENDING_MIX",[km]:"ENVMAP_BLENDING_ADD"};function LS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":IS[i.combine]||"ENVMAP_BLENDING_NONE"}function DS(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function NS(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,l=t.fragmentShader,c=wS(t),a=RS(t),h=PS(t),d=LS(t),u=DS(t),f=xS(t),p=vS(r),x=s.createProgram(),g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Sl).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Sl).join(`
`),m.length>0&&(m+=`
`)):(g=[wg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sl).join(`
`),m=[wg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+a:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?yt.tonemapping_pars_fragment:"",t.toneMapping!==Hi?mS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,fS("linearToOutputTexel",t.outputColorSpace),gS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sl).join(`
`)),o=Ff(o),o=Sg(o,t),o=Eg(o,t),l=Ff(l),l=Sg(l,t),l=Eg(l,t),o=Tg(o),l=Tg(l),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===yf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=_+g+o,y=_+m+l,w=yg(s,s.VERTEX_SHADER,b),T=yg(s,s.FRAGMENT_SHADER,y);s.attachShader(x,w),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(D){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(x)||"",L=s.getShaderInfoLog(w)||"",C=s.getShaderInfoLog(T)||"",N=k.trim(),R=L.trim(),O=C.trim(),G=!0,F=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,T);else{let z=bg(s,w,"vertex"),Y=bg(s,T,"fragment");ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+z+`
`+Y)}else N!==""?Qe("WebGLProgram: Program Info Log:",N):(R===""||O==="")&&(F=!1);F&&(D.diagnostics={runnable:G,programLog:N,vertexShader:{log:R,prefix:g},fragmentShader:{log:O,prefix:m}})}s.deleteShader(w),s.deleteShader(T),v=new Zo(s,x),M=_S(s,x)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,cS)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=T,this}var US=0,Bf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new kf(e),t.set(e,n)),n}},kf=class{constructor(e){this.id=US++,this.code=e,this.usedTimes=0}};function OS(i){return i===or||i===gl||i===xl}function FS(i,e,t,n,s,r){let o=new Ia,l=new Bf,c=new Set,a=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,M,E,D,k,L){let C=D.fog,N=k.geometry,R=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,G=e.get(v.envMap||R,O),F=G&&G.mapping===ul?G.image.height:null,z=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Qe("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let Y=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,se=Y!==void 0?Y.length:0,he=0;N.morphAttributes.position!==void 0&&(he=1),N.morphAttributes.normal!==void 0&&(he=2),N.morphAttributes.color!==void 0&&(he=3);let q,le,Se,Z;if(z){let Xt=hs[z];q=Xt.vertexShader,le=Xt.fragmentShader}else{q=v.vertexShader,le=v.fragmentShader;let Xt=l.getVertexShaderStage(v),Lt=l.getFragmentShaderStage(v);l.update(v,Xt,Lt),Se=Xt.id,Z=Lt.id}let ie=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),Ce=k.isInstancedMesh===!0,$=k.isBatchedMesh===!0,de=!!v.map,be=!!v.matcap,te=!!G,ue=!!v.aoMap,_e=!!v.lightMap,fe=!!v.bumpMap&&v.wireframe===!1,Te=!!v.normalMap,He=!!v.displacementMap,Ge=!!v.emissiveMap,Ze=!!v.metalnessMap,et=!!v.roughnessMap,H=v.anisotropy>0,dt=v.clearcoat>0,rt=v.dispersion>0,B=v.retroreflectivity>0,S=v.iridescence>0,X=v.sheen>0,K=v.transmission>0,ne=H&&!!v.anisotropyMap,we=dt&&!!v.clearcoatMap,Ie=dt&&!!v.clearcoatNormalMap,ce=dt&&!!v.clearcoatRoughnessMap,pe=S&&!!v.iridescenceMap,Le=S&&!!v.iridescenceThicknessMap,Ae=X&&!!v.sheenColorMap,ye=X&&!!v.sheenRoughnessMap,Me=!!v.specularMap,Ue=!!v.specularColorMap,Ye=!!v.specularIntensityMap,at=K&&!!v.transmissionMap,W=K&&!!v.thicknessMap,Ne=!!v.gradientMap,me=!!v.alphaMap,Pe=v.alphaTest>0,Oe=!!v.alphaHash,ve=!!v.extensions,nt=Hi;v.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(nt=i.toneMapping);let Ke={shaderID:z,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:le,defines:v.defines,customVertexShaderID:Se,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:$,batchingColor:$&&k._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&k.instanceColor!==null,instancingMorph:Ce&&k.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:de,matcap:be,envMap:te,envMapMode:te&&G.mapping,envMapCubeUVHeight:F,aoMap:ue,lightMap:_e,bumpMap:fe,normalMap:Te,displacementMap:He,emissiveMap:Ge,normalMapObjectSpace:Te&&v.normalMapType===Wm,normalMapTangentSpace:Te&&v.normalMapType===_l,packedNormalMap:Te&&v.normalMapType===_l&&OS(v.normalMap.format),metalnessMap:Ze,roughnessMap:et,anisotropy:H,anisotropyMap:ne,clearcoat:dt,clearcoatMap:we,clearcoatNormalMap:Ie,clearcoatRoughnessMap:ce,dispersion:rt,retroreflection:B,iridescence:S,iridescenceMap:pe,iridescenceThicknessMap:Le,sheen:X,sheenColorMap:Ae,sheenRoughnessMap:ye,specularMap:Me,specularColorMap:Ue,specularIntensityMap:Ye,transmission:K,transmissionMap:at,thicknessMap:W,gradientMap:Ne,opaque:v.transparent===!1&&v.blending===as&&v.alphaToCoverage===!1,alphaMap:me,alphaTest:Pe,alphaHash:Oe,combine:v.combine,mapUv:de&&p(v.map.channel),aoMapUv:ue&&p(v.aoMap.channel),lightMapUv:_e&&p(v.lightMap.channel),bumpMapUv:fe&&p(v.bumpMap.channel),normalMapUv:Te&&p(v.normalMap.channel),displacementMapUv:He&&p(v.displacementMap.channel),emissiveMapUv:Ge&&p(v.emissiveMap.channel),metalnessMapUv:Ze&&p(v.metalnessMap.channel),roughnessMapUv:et&&p(v.roughnessMap.channel),anisotropyMapUv:ne&&p(v.anisotropyMap.channel),clearcoatMapUv:we&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ye&&p(v.sheenRoughnessMap.channel),specularMapUv:Me&&p(v.specularMap.channel),specularColorMapUv:Ue&&p(v.specularColorMap.channel),specularIntensityMapUv:Ye&&p(v.specularIntensityMap.channel),transmissionMapUv:at&&p(v.transmissionMap.channel),thicknessMapUv:W&&p(v.thicknessMap.channel),alphaMapUv:me&&p(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Te||H),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!N.attributes.uv&&(de||me),fog:!!C,useFog:v.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&Te===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ee,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:he,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,decodeVideoTexture:de&&v.map.isVideoTexture===!0&&gt.getTransfer(v.map.colorSpace)===Ct,decodeVideoTextureEmissive:Ge&&v.emissiveMap.isVideoTexture===!0&&gt.getTransfer(v.emissiveMap.colorSpace)===Ct,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ot,flipSided:v.side===Sn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ve&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&v.extensions.multiDraw===!0||$)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function g(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let E in v.defines)M.push(E),M.push(v.defines[E]);return v.isRawShaderMaterial===!1&&(m(M,v),_(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function m(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numSunLights),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numSunLightShadows),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function _(v,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function b(v){let M=f[v.type],E;if(M){let D=hs[M];E=Nn.clone(D.uniforms)}else E=v.uniforms;return E}function y(v,M){let E=h.get(M);return E!==void 0?++E.usedTimes:(E=new NS(i,M,v,s),a.push(E),h.set(M,E)),E}function w(v){if(--v.usedTimes===0){let M=a.indexOf(v);a[M]=a[a.length-1],a.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){l.remove(v)}function P(){l.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:b,acquireProgram:y,releaseProgram:w,releaseShaderCache:T,programs:a,dispose:P}}function BS(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,c){i.get(o)[l]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function kS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ag(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rg(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function l(u,f,p,x,g,m){let _=i[e];return _===void 0?(_={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},i[e]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=p,_.materialVariant=o(u),_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=g,_.group=m),e++,_}function c(u,f,p,x,g,m,_){_.reversedDepth===!0&&(g=-g);let b=l(u,f,p,x,g,m);p.transmission>0?n.push(b):p.transparent===!0?s.push(b):t.push(b)}function a(u,f,p,x,g,m){let _=l(u,f,p,x,g,m);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function h(u,f){t.length>1&&t.sort(u||kS),n.length>1&&n.sort(f||Ag),s.length>1&&s.sort(f||Ag)}function d(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:a,finish:d,sort:h}}function zS(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Rg,i.set(n,[o])):s>=r.length?(o=new Rg,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function HS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new ge};break;case"SpotLight":t={position:new U,direction:new U,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function GS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var VS=0;function WS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function XS(i){let e=new HS,t=GS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)n.probe.push(new U);let s=new U,r=new je,o=new je;function l(a){let h=0,d=0,u=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,_=0,b=0,y=0,w=0,T=0,P=0,v=0,M=0,E=0;a.sort(WS);for(let k=0,L=a.length;k<L;k++){let C=a[k],N=C.color,R=C.intensity,O=C.distance,G=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===or?G=C.shadow.map.texture:G=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=N.r*R,d+=N.g*R,u+=N.b*R;else if(C.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(C.sh.coefficients[F],R);E++}else if(C.isSunLight){let F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let z=C.shadow,Y=t.get(C);Y.shadowIntensity=z.intensity,Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[p]=Y,n.sunShadowMap[p]=G;let se=z.getViewportCount();for(let he=0;he<se;he++)n.sunShadowMatrix[x+he]=z.getMatrix(he),n.sunShadowCascade[x+he]=z._cascadeData[he];x+=se,p++}n.sun[f]=F,f++}else if(C.isDirectionalLight){let F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let z=C.shadow,Y=t.get(C);Y.shadowIntensity=z.intensity,Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,n.directionalShadow[g]=Y,n.directionalShadowMap[g]=G,n.directionalShadowMatrix[g]=C.shadow.matrix,w++}n.directional[g]=F,g++}else if(C.isSpotLight){let F=e.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(N).multiplyScalar(R),F.distance=O,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,n.spot[_]=F;let z=C.shadow;if(C.map&&(n.spotLightMap[v]=C.map,v++,z.updateMatrices(C),C.castShadow&&M++),n.spotLightMatrix[_]=z.matrix,C.castShadow){let Y=t.get(C);Y.shadowIntensity=z.intensity,Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=G,P++}_++}else if(C.isRectAreaLight){let F=e.get(C);F.color.copy(N).multiplyScalar(R),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),n.rectArea[b]=F,b++}else if(C.isPointLight){let F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){let z=C.shadow,Y=t.get(C);Y.shadowIntensity=z.intensity,Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,Y.shadowCameraNear=z.camera.near,Y.shadowCameraFar=z.camera.far,n.pointShadow[m]=Y,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=C.shadow.matrix,T++}n.point[m]=F,m++}else if(C.isHemisphereLight){let F=e.get(C);F.skyColor.copy(C.color).multiplyScalar(R),F.groundColor.copy(C.groundColor).multiplyScalar(R),n.hemi[y]=F,y++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==g||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==b||D.hemiLength!==y||D.numSunShadows!==p||D.numDirectionalShadows!==w||D.numPointShadows!==T||D.numSpotShadows!==P||D.numSpotMaps!==v||D.numLightProbes!==E)&&(n.sun.length=f,n.directional.length=g,n.spot.length=_,n.rectArea.length=b,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+v-M,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=E,D.sunLength=f,D.directionalLength=g,D.pointLength=m,D.spotLength=_,D.rectAreaLength=b,D.hemiLength=y,D.numSunShadows=p,D.numDirectionalShadows=w,D.numPointShadows=T,D.numSpotShadows=P,D.numSpotMaps=v,D.numLightProbes=E,n.version=VS++)}function c(a,h){let d=0,u=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let _=0,b=a.length;_<b;_++){let y=a[_];if(y.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(y.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:l,setupView:c,state:n}}function Cg(i){let e=new XS(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function o(u){t.push(u)}function l(u){n.push(u)}function c(u){s.push(u)}function a(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:a,setupLightsView:h,pushLight:o,pushShadow:l,pushLightProbeGrid:c}}function qS(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),l;return o===void 0?(l=new Cg(i),e.set(s,[l])):r>=o.length?(l=new Cg(i),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var YS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jS=`uniform sampler2D shadow_pass;
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
}`,ZS=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],KS=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Pg=new je,bl=new U,Lf=new U;function $S(i,e,t){let n=new Do,s=new oe,r=new oe,o=new At,l=new ch,c=new hh,a={},h=t.maxTextureSize,d={[os]:Sn,[Sn]:os,[Ot]:Ot},u=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:YS,fragmentShader:jS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new vt;p.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new xe(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zr;let m=this.type;this.render=function(T,P,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Sm&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zr);let M=i.getRenderTarget(),E=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),k=i.state;k.setBlending(dn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let L=m!==this.type;L&&P.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(N=>N.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,N=T.length;C<N;C++){let R=T[C],O=R.shadow;if(O===void 0){Qe("WebGLShadowMap:",R,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let G=O.getFrameExtents();s.multiply(G),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,O.mapSize.y=r.y));let F=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=F,O.map===null||L===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Go){if(R.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new $t(s.x,s.y,{format:or,type:Yt,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),O.map.texture.name=R.name+".shadowMap",O.map.depthTexture=new ts(s.x,s.y,Wn),O.map.depthTexture.name=R.name+".shadowMapDepth",O.map.depthTexture.format=Qi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=tn,O.map.depthTexture.magFilter=tn}else R.isPointLight?(O.map=new fu(s.x),O.map.depthTexture=new nh(s.x,Gi)):(O.map=new $t(s.x,s.y),O.map.depthTexture=new ts(s.x,s.y,Gi)),O.map.depthTexture.name=R.name+".shadowMap",O.map.depthTexture.format=Qi,this.type===zr?(O.map.depthTexture.compareFunction=F?hu:cu,O.map.depthTexture.minFilter=Wt,O.map.depthTexture.magFilter=Wt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=tn,O.map.depthTexture.magFilter=tn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let z=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();R.isPointLight!==!0&&O.updateMatrices(R,v);for(let Y=0;Y<z;Y++){let se=O.getCamera(Y);if(R.isPointLight){let he=O.camera,q=O.matrix,le=R.distance||he.far;le!==he.far&&(he.far=le,he.updateProjectionMatrix()),bl.setFromMatrixPosition(R.matrixWorld),he.position.copy(bl),Lf.copy(he.position),Lf.add(ZS[Y]),he.up.copy(KS[Y]),he.lookAt(Lf),he.updateMatrixWorld(),q.makeTranslation(-bl.x,-bl.y,-bl.z),Pg.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Pg,he.coordinateSystem,he.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,Y),i.clear();else{Y===0&&(i.setRenderTarget(O.map),i.clear());let he=O.getViewport(Y);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),k.viewport(o)}n=O.getFrustum(Y),y(P,v,se,R,this.type)}O.isPointLightShadow!==!0&&this.type===Go&&_(O,v),O.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(M,E,D)};function _(T,P){let v=e.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new $t(s.x,s.y,{format:or,type:Yt}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,v,u,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,v,f,x,null)}function b(T,P,v,M){let E=null,D=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)E=D;else if(E=v.isPointLight===!0?c:l,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let k=E.uuid,L=P.uuid,C=a[k];C===void 0&&(C={},a[k]=C);let N=C[L];N===void 0&&(N=E.clone(),C[L]=N,P.addEventListener("dispose",w)),E=N}if(E.visible=P.visible,E.wireframe=P.wireframe,M===Go?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:d[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,v.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let k=i.properties.get(E);k.light=v}return E}function y(T,P,v,M,E){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Go)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let L=e.update(T),C=T.material;if(Array.isArray(C)){let N=L.groups;for(let R=0,O=N.length;R<O;R++){let G=N[R],F=C[G.materialIndex];if(F&&F.visible){let z=b(T,F,M,E);T.onBeforeShadow(i,T,P,v,L,z,G),i.renderBufferDirect(v,null,L,z,T,G),T.onAfterShadow(i,T,P,v,L,z,G)}}}else if(C.visible){let N=b(T,C,M,E);T.onBeforeShadow(i,T,P,v,L,N,null),i.renderBufferDirect(v,null,L,N,T,null),T.onAfterShadow(i,T,P,v,L,N,null)}}let k=T.children;for(let L=0,C=k.length;L<C;L++)y(k[L],P,v,M,E)}function w(T){T.target.removeEventListener("dispose",w);for(let v in a){let M=a[v],E=T.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function JS(i,e){function t(){let W=!1,Ne=new At,me=null,Pe=new At(0,0,0,0);return{setMask:function(Oe){me!==Oe&&!W&&(i.colorMask(Oe,Oe,Oe,Oe),me=Oe)},setLocked:function(Oe){W=Oe},setClear:function(Oe,ve,nt,Ke,Xt){Xt===!0&&(Oe*=Ke,ve*=Ke,nt*=Ke),Ne.set(Oe,ve,nt,Ke),Pe.equals(Ne)===!1&&(i.clearColor(Oe,ve,nt,Ke),Pe.copy(Ne))},reset:function(){W=!1,me=null,Pe.set(-1,0,0,0)}}}function n(){let W=!1,Ne=!1,me=null,Pe=null,Oe=null;return{setReversed:function(ve){if(Ne!==ve){let nt=e.get("EXT_clip_control");ve?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),Ne=ve;let Ke=Oe;Oe=null,this.setClear(Ke)}},getReversed:function(){return Ne},setTest:function(ve){ve?ie(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(ve){me!==ve&&!W&&(i.depthMask(ve),me=ve)},setFunc:function(ve){if(Ne&&(ve=tg[ve]),Pe!==ve){switch(ve){case Wc:i.depthFunc(i.NEVER);break;case Xc:i.depthFunc(i.ALWAYS);break;case qc:i.depthFunc(i.LESS);break;case wo:i.depthFunc(i.LEQUAL);break;case Yc:i.depthFunc(i.EQUAL);break;case jc:i.depthFunc(i.GEQUAL);break;case Zc:i.depthFunc(i.GREATER);break;case Kc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=ve}},setLocked:function(ve){W=ve},setClear:function(ve){Oe!==ve&&(Oe=ve,Ne&&(ve=1-ve),i.clearDepth(ve))},reset:function(){W=!1,me=null,Pe=null,Oe=null,Ne=!1}}}function s(){let W=!1,Ne=null,me=null,Pe=null,Oe=null,ve=null,nt=null,Ke=null,Xt=null;return{setTest:function(Lt){W||(Lt?ie(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(Lt){Ne!==Lt&&!W&&(i.stencilMask(Lt),Ne=Lt)},setFunc:function(Lt,Li,Zi){(me!==Lt||Pe!==Li||Oe!==Zi)&&(i.stencilFunc(Lt,Li,Zi),me=Lt,Pe=Li,Oe=Zi)},setOp:function(Lt,Li,Zi){(ve!==Lt||nt!==Li||Ke!==Zi)&&(i.stencilOp(Lt,Li,Zi),ve=Lt,nt=Li,Ke=Zi)},setLocked:function(Lt){W=Lt},setClear:function(Lt){Xt!==Lt&&(i.clearStencil(Lt),Xt=Lt)},reset:function(){W=!1,Ne=null,me=null,Pe=null,Oe=null,ve=null,nt=null,Ke=null,Xt=null}}}let r=new t,o=new n,l=new s,c=new WeakMap,a=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,_=null,b=null,y=null,w=null,T=null,P=null,v=new ge(0,0,0),M=0,E=!1,D=null,k=null,L=null,C=null,N=null,R=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,G=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(F)[1]),O=G>=1):F.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),O=G>=2);let z=null,Y={},se=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),q=new At().fromArray(se),le=new At().fromArray(he);function Se(W,Ne,me,Pe){let Oe=new Uint8Array(4),ve=i.createTexture();i.bindTexture(W,ve),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let nt=0;nt<me;nt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Ne,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,Oe):i.texImage2D(Ne+nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Oe);return ve}let Z={};Z[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),ie(i.DEPTH_TEST),o.setFunc(wo),fe(!1),Te(rf),ie(i.CULL_FACE),ue(dn);function ie(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function Ee(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function Ce(W,Ne){return u[W]!==Ne?(i.bindFramebuffer(W,Ne),u[W]=Ne,W===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ne),W===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ne),!0):!1}function $(W,Ne){let me=p,Pe=!1;if(W){me=f.get(Ne),me===void 0&&(me=[],f.set(Ne,me));let Oe=W.textures;if(me.length!==Oe.length||me[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,nt=Oe.length;ve<nt;ve++)me[ve]=i.COLOR_ATTACHMENT0+ve;me.length=Oe.length,Pe=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(me)}function de(W){return x!==W?(i.useProgram(W),x=W,!0):!1}let be={[Ai]:i.FUNC_ADD,[Em]:i.FUNC_SUBTRACT,[Tm]:i.FUNC_REVERSE_SUBTRACT};be[wm]=i.MIN,be[Am]=i.MAX;let te={[Hr]:i.ZERO,[Rm]:i.ONE,[Cm]:i.SRC_COLOR,[lf]:i.SRC_ALPHA,[Dm]:i.SRC_ALPHA_SATURATE,[sl]:i.DST_COLOR,[il]:i.DST_ALPHA,[Pm]:i.ONE_MINUS_SRC_COLOR,[cf]:i.ONE_MINUS_SRC_ALPHA,[Lm]:i.ONE_MINUS_DST_COLOR,[Im]:i.ONE_MINUS_DST_ALPHA,[Nm]:i.CONSTANT_COLOR,[Um]:i.ONE_MINUS_CONSTANT_COLOR,[Om]:i.CONSTANT_ALPHA,[Fm]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(W,Ne,me,Pe,Oe,ve,nt,Ke,Xt,Lt){if(W===dn){g===!0&&(Ee(i.BLEND),g=!1);return}if(g===!1&&(ie(i.BLEND),g=!0),W!==Mh){if(W!==m||Lt!==E){if((_!==Ai||w!==Ai)&&(i.blendEquation(i.FUNC_ADD),_=Ai,w=Ai),Lt)switch(W){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ln:i.blendFunc(i.ONE,i.ONE);break;case of:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case af:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ot("WebGLState: Invalid blending: ",W);break}else switch(W){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ln:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case of:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case af:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",W);break}b=null,y=null,T=null,P=null,v.set(0,0,0),M=0,m=W,E=Lt}return}Oe=Oe||Ne,ve=ve||me,nt=nt||Pe,(Ne!==_||Oe!==w)&&(i.blendEquationSeparate(be[Ne],be[Oe]),_=Ne,w=Oe),(me!==b||Pe!==y||ve!==T||nt!==P)&&(i.blendFuncSeparate(te[me],te[Pe],te[ve],te[nt]),b=me,y=Pe,T=ve,P=nt),(Ke.equals(v)===!1||Xt!==M)&&(i.blendColor(Ke.r,Ke.g,Ke.b,Xt),v.copy(Ke),M=Xt),m=W,E=!1}function _e(W,Ne){W.side===Ot?Ee(i.CULL_FACE):ie(i.CULL_FACE);let me=W.side===Sn;Ne&&(me=!me),fe(me),W.blending===as&&W.transparent===!1?ue(dn):ue(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let Pe=W.stencilWrite;l.setTest(Pe),Pe&&(l.setMask(W.stencilWriteMask),l.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),l.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ge(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function fe(W){D!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),D=W)}function Te(W){W!==Mm?(ie(i.CULL_FACE),W!==k&&(W===rf?i.cullFace(i.BACK):W===bm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),k=W}function He(W){W!==L&&(O&&i.lineWidth(W),L=W)}function Ge(W,Ne,me){W?(ie(i.POLYGON_OFFSET_FILL),(C!==Ne||N!==me)&&(C=Ne,N=me,o.getReversed()&&(Ne=-Ne),i.polygonOffset(Ne,me))):Ee(i.POLYGON_OFFSET_FILL)}function Ze(W){W?ie(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function et(W){W===void 0&&(W=i.TEXTURE0+R-1),z!==W&&(i.activeTexture(W),z=W)}function H(W,Ne,me){me===void 0&&(z===null?me=i.TEXTURE0+R-1:me=z);let Pe=Y[me];Pe===void 0&&(Pe={type:void 0,texture:void 0},Y[me]=Pe),(Pe.type!==W||Pe.texture!==Ne)&&(z!==me&&(i.activeTexture(me),z=me),i.bindTexture(W,Ne||Z[W]),Pe.type=W,Pe.texture=Ne)}function dt(){let W=Y[z];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function rt(){try{i.compressedTexImage2D(...arguments)}catch(W){ot("WebGLState:",W)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(W){ot("WebGLState:",W)}}function S(){try{i.texSubImage2D(...arguments)}catch(W){ot("WebGLState:",W)}}function X(){try{i.texSubImage3D(...arguments)}catch(W){ot("WebGLState:",W)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(W){ot("WebGLState:",W)}}function ne(){try{i.compressedTexSubImage3D(...arguments)}catch(W){ot("WebGLState:",W)}}function we(){try{i.texStorage2D(...arguments)}catch(W){ot("WebGLState:",W)}}function Ie(){try{i.texStorage3D(...arguments)}catch(W){ot("WebGLState:",W)}}function ce(){try{i.texImage2D(...arguments)}catch(W){ot("WebGLState:",W)}}function pe(){try{i.texImage3D(...arguments)}catch(W){ot("WebGLState:",W)}}function Le(W){return d[W]!==void 0?d[W]:i.getParameter(W)}function Ae(W,Ne){d[W]!==Ne&&(i.pixelStorei(W,Ne),d[W]=Ne)}function ye(W){q.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),q.copy(W))}function Me(W){le.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),le.copy(W))}function Ue(W,Ne){let me=a.get(Ne);me===void 0&&(me=new WeakMap,a.set(Ne,me));let Pe=me.get(W);Pe===void 0&&(Pe=i.getUniformBlockIndex(Ne,W.name),me.set(W,Pe))}function Ye(W,Ne){let Pe=a.get(Ne).get(W);c.get(Ne)!==Pe&&(i.uniformBlockBinding(Ne,Pe,W.__bindingPointIndex),c.set(Ne,Pe))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},z=null,Y={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,_=null,b=null,y=null,w=null,T=null,P=null,v=new ge(0,0,0),M=0,E=!1,D=null,k=null,L=null,C=null,N=null,q.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:ie,disable:Ee,bindFramebuffer:Ce,drawBuffers:$,useProgram:de,setBlending:ue,setMaterial:_e,setFlipSided:fe,setCullFace:Te,setLineWidth:He,setPolygonOffset:Ge,setScissorTest:Ze,activeTexture:et,bindTexture:H,unbindTexture:dt,compressedTexImage2D:rt,compressedTexImage3D:B,texImage2D:ce,texImage3D:pe,pixelStorei:Ae,getParameter:Le,updateUBOMapping:Ue,uniformBlockBinding:Ye,texStorage2D:we,texStorage3D:Ie,texSubImage2D:S,texSubImage3D:X,compressedTexSubImage2D:K,compressedTexSubImage3D:ne,scissor:ye,viewport:Me,reset:at}}function QS(i,e,t,n,s,r,o){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new oe,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(B,S){return p?new OffscreenCanvas(B,S):Co("canvas")}function g(B,S,X){let K=1,ne=rt(B);if((ne.width>X||ne.height>X)&&(K=X/Math.max(ne.width,ne.height)),K<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let we=Math.floor(K*ne.width),Ie=Math.floor(K*ne.height);u===void 0&&(u=x(we,Ie));let ce=S?x(we,Ie):u;return ce.width=we,ce.height=Ie,ce.getContext("2d").drawImage(B,0,0,we,Ie),Qe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+we+"x"+Ie+")."),ce}else return"data"in B&&Qe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),B;return B}function m(B){return B.generateMipmaps}function _(B){i.generateMipmap(B)}function b(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(B,S,X,K,ne,we=!1){if(B!==null){if(i[B]!==void 0)return i[B];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Ie;K&&(Ie=e.get("EXT_texture_norm16"),Ie||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=S;if(S===i.RED&&(X===i.FLOAT&&(ce=i.R32F),X===i.HALF_FLOAT&&(ce=i.R16F),X===i.UNSIGNED_BYTE&&(ce=i.R8),X===i.UNSIGNED_SHORT&&Ie&&(ce=Ie.R16_EXT),X===i.SHORT&&Ie&&(ce=Ie.R16_SNORM_EXT)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ce=i.R8UI),X===i.UNSIGNED_SHORT&&(ce=i.R16UI),X===i.UNSIGNED_INT&&(ce=i.R32UI),X===i.BYTE&&(ce=i.R8I),X===i.SHORT&&(ce=i.R16I),X===i.INT&&(ce=i.R32I)),S===i.RG&&(X===i.FLOAT&&(ce=i.RG32F),X===i.HALF_FLOAT&&(ce=i.RG16F),X===i.UNSIGNED_BYTE&&(ce=i.RG8),X===i.UNSIGNED_SHORT&&Ie&&(ce=Ie.RG16_EXT),X===i.SHORT&&Ie&&(ce=Ie.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ce=i.RG8UI),X===i.UNSIGNED_SHORT&&(ce=i.RG16UI),X===i.UNSIGNED_INT&&(ce=i.RG32UI),X===i.BYTE&&(ce=i.RG8I),X===i.SHORT&&(ce=i.RG16I),X===i.INT&&(ce=i.RG32I)),S===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),X===i.UNSIGNED_INT&&(ce=i.RGB32UI),X===i.BYTE&&(ce=i.RGB8I),X===i.SHORT&&(ce=i.RGB16I),X===i.INT&&(ce=i.RGB32I)),S===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),X===i.UNSIGNED_INT&&(ce=i.RGBA32UI),X===i.BYTE&&(ce=i.RGBA8I),X===i.SHORT&&(ce=i.RGBA16I),X===i.INT&&(ce=i.RGBA32I)),S===i.RGB&&(X===i.UNSIGNED_SHORT&&Ie&&(ce=Ie.RGB16_EXT),X===i.SHORT&&Ie&&(ce=Ie.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(ce=i.R11F_G11F_B10F)),S===i.RGBA){let pe=we?Ra:gt.getTransfer(ne);X===i.FLOAT&&(ce=i.RGBA32F),X===i.HALF_FLOAT&&(ce=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ce=pe===Ct?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&Ie&&(ce=Ie.RGBA16_EXT),X===i.SHORT&&Ie&&(ce=Ie.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function w(B,S){let X;return B?S===null||S===Gi||S===rr?X=i.DEPTH24_STENCIL8:S===Wn?X=i.DEPTH32F_STENCIL8:S===Wo&&(X=i.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Gi||S===rr?X=i.DEPTH_COMPONENT24:S===Wn?X=i.DEPTH_COMPONENT32F:S===Wo&&(X=i.DEPTH_COMPONENT16),X}function T(B,S){return m(B)===!0||B.isFramebufferTexture&&B.minFilter!==tn&&B.minFilter!==Wt?Math.log2(Math.max(S.width,S.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?S.mipmaps.length:1}function P(B){let S=B.target;S.removeEventListener("dispose",P),M(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&d.delete(S)}function v(B){let S=B.target;S.removeEventListener("dispose",v),D(S)}function M(B){let S=n.get(B);if(S.__webglInit===void 0)return;let X=B.source,K=f.get(X);if(K){let ne=K[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&E(B),Object.keys(K).length===0&&f.delete(X)}n.remove(B)}function E(B){let S=n.get(B);i.deleteTexture(S.__webglTexture);let X=B.source,K=f.get(X);delete K[S.__cacheKey],o.memory.textures--}function D(B){let S=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let ne=0;ne<S.__webglFramebuffer[K].length;ne++)i.deleteFramebuffer(S.__webglFramebuffer[K][ne]);else i.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)i.deleteFramebuffer(S.__webglFramebuffer[K]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let X=B.textures;for(let K=0,ne=X.length;K<ne;K++){let we=n.get(X[K]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),o.memory.textures--),n.remove(X[K])}n.remove(B)}let k=0;function L(){k=0}function C(){return k}function N(B){k=B}function R(){let B=k;return B>=s.maxTextures&&Qe("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,B}function O(B){let S=[];return S.push(B.wrapS),S.push(B.wrapT),S.push(B.wrapR||0),S.push(B.magFilter),S.push(B.minFilter),S.push(B.anisotropy),S.push(B.internalFormat),S.push(B.format),S.push(B.type),S.push(B.generateMipmaps),S.push(B.premultiplyAlpha),S.push(B.flipY),S.push(B.unpackAlignment),S.push(B.colorSpace),S.join()}function G(B,S){let X=n.get(B);if(B.isVideoTexture&&H(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&X.__version!==B.version){let K=B.image;if(K===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(X,B,S);return}}else B.isExternalTexture&&(X.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function F(B,S){let X=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&X.__version!==B.version){Ee(X,B,S);return}else B.isExternalTexture&&(X.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function z(B,S){let X=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&X.__version!==B.version){Ee(X,B,S);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function Y(B,S){let X=n.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&X.__version!==B.version){Ce(X,B,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}let se={[en]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[Ao]:i.MIRRORED_REPEAT},he={[tn]:i.NEAREST,[Sh]:i.NEAREST_MIPMAP_NEAREST,[Xr]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[Vo]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},q={[qm]:i.NEVER,[$m]:i.ALWAYS,[Ym]:i.LESS,[cu]:i.LEQUAL,[jm]:i.EQUAL,[hu]:i.GEQUAL,[Zm]:i.GREATER,[Km]:i.NOTEQUAL};function le(B,S){if(S.type===Wn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Wt||S.magFilter===Vo||S.magFilter===Xr||S.magFilter===di||S.minFilter===Wt||S.minFilter===Vo||S.minFilter===Xr||S.minFilter===di)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,se[S.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,se[S.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,se[S.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,he[S.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,he[S.minFilter]),S.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,q[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===tn||S.minFilter!==Xr&&S.minFilter!==di||S.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(B,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Se(B,S){let X=!1;B.__webglInit===void 0&&(B.__webglInit=!0,S.addEventListener("dispose",P));let K=S.source,ne=f.get(K);ne===void 0&&(ne={},f.set(K,ne));let we=O(S);if(we!==B.__cacheKey){ne[we]===void 0&&(ne[we]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ne[we].usedTimes++;let Ie=ne[B.__cacheKey];Ie!==void 0&&(ne[B.__cacheKey].usedTimes--,Ie.usedTimes===0&&E(S)),B.__cacheKey=we,B.__webglTexture=ne[we].texture}return X}function Z(B,S,X){return Math.floor(Math.floor(B/X)/S)}function ie(B,S,X,K){let we=B.updateRanges;if(we.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,X,K,S.data);else{we.sort((Ae,ye)=>Ae.start-ye.start);let Ie=0;for(let Ae=1;Ae<we.length;Ae++){let ye=we[Ie],Me=we[Ae],Ue=ye.start+ye.count,Ye=Z(Me.start,S.width,4),at=Z(ye.start,S.width,4);Me.start<=Ue+1&&Ye===at&&Z(Me.start+Me.count-1,S.width,4)===Ye?ye.count=Math.max(ye.count,Me.start+Me.count-ye.start):(++Ie,we[Ie]=Me)}we.length=Ie+1;let ce=t.getParameter(i.UNPACK_ROW_LENGTH),pe=t.getParameter(i.UNPACK_SKIP_PIXELS),Le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Ae=0,ye=we.length;Ae<ye;Ae++){let Me=we[Ae],Ue=Math.floor(Me.start/4),Ye=Math.ceil(Me.count/4),at=Ue%S.width,W=Math.floor(Ue/S.width),Ne=Ye,me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,at),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,at,W,Ne,me,X,K,S.data)}B.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ce),t.pixelStorei(i.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Le)}}function Ee(B,S,X){let K=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=i.TEXTURE_3D);let ne=Se(B,S),we=S.source;t.bindTexture(K,B.__webglTexture,i.TEXTURE0+X);let Ie=n.get(we);if(we.version!==Ie.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let me=gt.getPrimaries(gt.workingColorSpace),Pe=S.colorSpace===Dn?null:gt.getPrimaries(S.colorSpace),Oe=S.colorSpace===Dn||me===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let pe=g(S.image,!1,s.maxTextureSize);pe=dt(S,pe);let Le=r.convert(S.format,S.colorSpace),Ae=r.convert(S.type),ye=y(S.internalFormat,Le,Ae,S.normalized,S.colorSpace,S.isVideoTexture);le(K,S);let Me,Ue=S.mipmaps,Ye=S.isVideoTexture!==!0,at=Ie.__version===void 0||ne===!0,W=we.dataReady,Ne=T(S,pe);if(S.isDepthTexture)ye=w(S.format===ls,S.type),at&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,ye,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,ye,pe.width,pe.height,0,Le,Ae,null));else if(S.isDataTexture)if(Ue.length>0){Ye&&at&&t.texStorage2D(i.TEXTURE_2D,Ne,ye,Ue[0].width,Ue[0].height);for(let me=0,Pe=Ue.length;me<Pe;me++)Me=Ue[me],Ye?W&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Me.width,Me.height,Le,Ae,Me.data):t.texImage2D(i.TEXTURE_2D,me,ye,Me.width,Me.height,0,Le,Ae,Me.data);S.generateMipmaps=!1}else Ye?(at&&t.texStorage2D(i.TEXTURE_2D,Ne,ye,pe.width,pe.height),W&&ie(S,pe,Le,Ae)):t.texImage2D(i.TEXTURE_2D,0,ye,pe.width,pe.height,0,Le,Ae,pe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ye&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,ye,Ue[0].width,Ue[0].height,pe.depth);for(let me=0,Pe=Ue.length;me<Pe;me++)if(Me=Ue[me],S.format!==Jn)if(Le!==null)if(Ye){if(W)if(S.layerUpdates.size>0){let Oe=wf(Me.width,Me.height,S.format,S.type);for(let ve of S.layerUpdates){let nt=Me.data.subarray(ve*Oe/Me.data.BYTES_PER_ELEMENT,(ve+1)*Oe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,ve,Me.width,Me.height,1,Le,nt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Me.width,Me.height,pe.depth,Le,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,ye,Me.width,Me.height,pe.depth,0,Me.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Me.width,Me.height,pe.depth,Le,Ae,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,ye,Me.width,Me.height,pe.depth,0,Le,Ae,Me.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Ye&&at&&t.texStorage2D(i.TEXTURE_2D,Ne,ye,Ue[0].width,Ue[0].height);for(let me=0,Pe=Ue.length;me<Pe;me++)Me=Ue[me],S.format!==Jn?Le!==null?Ye?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,Me.width,Me.height,Le,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,me,ye,Me.width,Me.height,0,Me.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?W&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Me.width,Me.height,Le,Ae,Me.data):t.texImage2D(i.TEXTURE_2D,me,ye,Me.width,Me.height,0,Le,Ae,Me.data)}else if(S.isDataArrayTexture)if(Ye){if(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,ye,pe.width,pe.height,pe.depth),W)if(S.layerUpdates.size>0){let me=wf(pe.width,pe.height,S.format,S.type);for(let Pe of S.layerUpdates){let Oe=pe.data.subarray(Pe*me/pe.data.BYTES_PER_ELEMENT,(Pe+1)*me/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pe,pe.width,pe.height,1,Le,Ae,Oe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Le,Ae,pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,pe.width,pe.height,pe.depth,0,Le,Ae,pe.data);else if(S.isData3DTexture)Ye?(at&&t.texStorage3D(i.TEXTURE_3D,Ne,ye,pe.width,pe.height,pe.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Le,Ae,pe.data)):t.texImage3D(i.TEXTURE_3D,0,ye,pe.width,pe.height,pe.depth,0,Le,Ae,pe.data);else if(S.isFramebufferTexture){if(at)if(Ye)t.texStorage2D(i.TEXTURE_2D,Ne,ye,pe.width,pe.height);else{let me=pe.width,Pe=pe.height;for(let Oe=0;Oe<Ne;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,ye,me,Pe,0,Le,Ae,null),me>>=1,Pe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let me=i.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),pe.parentNode!==me){me.appendChild(pe),d.add(S),me.onpaint=Pe=>{let Oe=Pe.changedElements;for(let ve of d)Oe.includes(ve.image)&&(ve.needsUpdate=!0)},me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,pe);else{let Oe=i.RGBA,ve=i.RGBA,nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Oe,ve,nt,pe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Ye&&at){let me=rt(Ue[0]);t.texStorage2D(i.TEXTURE_2D,Ne,ye,me.width,me.height)}for(let me=0,Pe=Ue.length;me<Pe;me++)Me=Ue[me],Ye?W&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Le,Ae,Me):t.texImage2D(i.TEXTURE_2D,me,ye,Le,Ae,Me);S.generateMipmaps=!1}else if(Ye){if(at){let me=rt(pe);t.texStorage2D(i.TEXTURE_2D,Ne,ye,me.width,me.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,Ae,pe)}else t.texImage2D(i.TEXTURE_2D,0,ye,Le,Ae,pe);m(S)&&_(K),Ie.__version=we.version,S.onUpdate&&S.onUpdate(S)}B.__version=S.version}function Ce(B,S,X){if(S.image.length!==6)return;let K=Se(B,S),ne=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+X);let we=n.get(ne);if(ne.version!==we.__version||K===!0){t.activeTexture(i.TEXTURE0+X);let Ie=gt.getPrimaries(gt.workingColorSpace),ce=S.colorSpace===Dn?null:gt.getPrimaries(S.colorSpace),pe=S.colorSpace===Dn||Ie===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Le=S.isCompressedTexture||S.image[0].isCompressedTexture,Ae=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let ve=0;ve<6;ve++)!Le&&!Ae?ye[ve]=g(S.image[ve],!0,s.maxCubemapSize):ye[ve]=Ae?S.image[ve].image:S.image[ve],ye[ve]=dt(S,ye[ve]);let Me=ye[0],Ue=r.convert(S.format,S.colorSpace),Ye=r.convert(S.type),at=y(S.internalFormat,Ue,Ye,S.normalized,S.colorSpace),W=S.isVideoTexture!==!0,Ne=we.__version===void 0||K===!0,me=ne.dataReady,Pe=T(S,Me);le(i.TEXTURE_CUBE_MAP,S);let Oe;if(Le){W&&Ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,at,Me.width,Me.height);for(let ve=0;ve<6;ve++){Oe=ye[ve].mipmaps;for(let nt=0;nt<Oe.length;nt++){let Ke=Oe[nt];S.format!==Jn?Ue!==null?W?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,nt,0,0,Ke.width,Ke.height,Ue,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,nt,at,Ke.width,Ke.height,0,Ke.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,nt,0,0,Ke.width,Ke.height,Ue,Ye,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,nt,at,Ke.width,Ke.height,0,Ue,Ye,Ke.data)}}}else{if(Oe=S.mipmaps,W&&Ne){Oe.length>0&&Pe++;let ve=rt(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,at,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ae){W?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ye[ve].width,ye[ve].height,Ue,Ye,ye[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,at,ye[ve].width,ye[ve].height,0,Ue,Ye,ye[ve].data);for(let nt=0;nt<Oe.length;nt++){let Xt=Oe[nt].image[ve].image;W?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,nt+1,0,0,Xt.width,Xt.height,Ue,Ye,Xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,nt+1,at,Xt.width,Xt.height,0,Ue,Ye,Xt.data)}}else{W?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ue,Ye,ye[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,at,Ue,Ye,ye[ve]);for(let nt=0;nt<Oe.length;nt++){let Ke=Oe[nt];W?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,nt+1,0,0,Ue,Ye,Ke.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,nt+1,at,Ue,Ye,Ke.image[ve])}}}m(S)&&_(i.TEXTURE_CUBE_MAP),we.__version=ne.version,S.onUpdate&&S.onUpdate(S)}B.__version=S.version}function $(B,S,X,K,ne,we){let Ie=r.convert(X.format,X.colorSpace),ce=r.convert(X.type),pe=y(X.internalFormat,Ie,ce,X.normalized,X.colorSpace),Le=n.get(S),Ae=n.get(X);if(Ae.__renderTarget=S,!Le.__hasExternalTextures){let ye=Math.max(1,S.width>>we),Me=Math.max(1,S.height>>we);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,we,pe,ye,Me,S.depth,0,Ie,ce,null):t.texImage2D(ne,we,pe,ye,Me,0,Ie,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,B),et(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,ne,Ae.__webglTexture,0,Ze(S)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,ne,Ae.__webglTexture,we),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(B,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,B),S.depthBuffer){let K=S.depthTexture,ne=K&&K.isDepthTexture?K.type:null,we=w(S.stencilBuffer,ne),Ie=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;et(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze(S),we,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze(S),we,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,we,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,B)}else{let K=S.textures;for(let ne=0;ne<K.length;ne++){let we=K[ne],Ie=r.convert(we.format,we.colorSpace),ce=r.convert(we.type),pe=y(we.internalFormat,Ie,ce,we.normalized,we.colorSpace);et(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze(S),pe,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze(S),pe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,pe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(B,S,X){let K=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,B),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(S.depthTexture);if(ne.__renderTarget=S,(!ne.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,S.depthTexture.addEventListener("dispose",P)),ne.__webglTexture===void 0){ne.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),le(i.TEXTURE_CUBE_MAP,S.depthTexture);let Le=r.convert(S.depthTexture.format),Ae=r.convert(S.depthTexture.type),ye;S.depthTexture.format===Qi?ye=i.DEPTH_COMPONENT24:S.depthTexture.format===ls&&(ye=i.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ye,S.width,S.height,0,Le,Ae,null)}}else G(S.depthTexture,0);let we=ne.__webglTexture,Ie=Ze(S),ce=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,pe=S.depthTexture.format===ls?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Qi)et(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,ce,we,0,Ie):i.framebufferTexture2D(i.FRAMEBUFFER,pe,ce,we,0);else if(S.depthTexture.format===ls)et(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,ce,we,0,Ie):i.framebufferTexture2D(i.FRAMEBUFFER,pe,ce,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(B){let S=n.get(B),X=B.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==B.depthTexture){let K=B.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){let ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",ne)};K.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=K}if(B.depthTexture&&!S.__autoAllocateDepthBuffer)if(X)for(let K=0;K<6;K++)be(S.__webglFramebuffer[K],B,K);else{let K=B.texture.mipmaps;K&&K.length>0?be(S.__webglFramebuffer[0],B,0):be(S.__webglFramebuffer,B,0)}else if(X){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=i.createRenderbuffer(),de(S.__webglDepthbuffer[K],B,!1);else{let ne=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=S.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,we)}}else{let K=B.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),de(S.__webglDepthbuffer,B,!1);else{let ne=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,we)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(B,S,X){let K=n.get(B);S!==void 0&&$(K.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&te(B)}function _e(B){let S=B.texture,X=n.get(B),K=n.get(S);B.addEventListener("dispose",v);let ne=B.textures,we=B.isWebGLCubeRenderTarget===!0,Ie=ne.length>1;if(Ie||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=S.version,o.memory.textures++),we){X.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[ce]=[];for(let pe=0;pe<S.mipmaps.length;pe++)X.__webglFramebuffer[ce][pe]=i.createFramebuffer()}else X.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)X.__webglFramebuffer[ce]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let ce=0,pe=ne.length;ce<pe;ce++){let Le=n.get(ne[ce]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),o.memory.textures++)}if(B.samples>0&&et(B)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ce=0;ce<ne.length;ce++){let pe=ne[ce];X.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ce]);let Le=r.convert(pe.format,pe.colorSpace),Ae=r.convert(pe.type),ye=y(pe.internalFormat,Le,Ae,pe.normalized,pe.colorSpace,B.isXRRenderTarget===!0),Me=Ze(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,ye,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,X.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),de(X.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(we){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),le(i.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)$(X.__webglFramebuffer[ce][pe],B,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe);else $(X.__webglFramebuffer[ce],B,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(S)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let ce=0,pe=ne.length;ce<pe;ce++){let Le=ne[ce],Ae=n.get(Le),ye=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(ye=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,Ae.__webglTexture),le(ye,Le),$(X.__webglFramebuffer,B,Le,i.COLOR_ATTACHMENT0+ce,ye,0),m(Le)&&_(ye)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(ce=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,K.__webglTexture),le(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)$(X.__webglFramebuffer[pe],B,S,i.COLOR_ATTACHMENT0,ce,pe);else $(X.__webglFramebuffer,B,S,i.COLOR_ATTACHMENT0,ce,0);m(S)&&_(ce),t.unbindTexture()}B.depthBuffer&&te(B)}function fe(B){let S=B.textures;for(let X=0,K=S.length;X<K;X++){let ne=S[X];if(m(ne)){let we=b(B),Ie=n.get(ne).__webglTexture;t.bindTexture(we,Ie),_(we),t.unbindTexture()}}}let Te=[],He=[];function Ge(B){if(B.samples>0){if(et(B)===!1){let S=B.textures,X=B.width,K=B.height,ne=i.COLOR_BUFFER_BIT,we=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(B),ce=S.length>1;if(ce)for(let Le=0;Le<S.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);let pe=B.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Le=0;Le<S.length;Le++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Le]);let Ae=n.get(S[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ae,0)}i.blitFramebuffer(0,0,X,K,0,0,X,K,ne,i.NEAREST),c===!0&&(Te.length=0,He.length=0,Te.push(i.COLOR_ATTACHMENT0+Le),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(Te.push(we),He.push(we),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Le=0;Le<S.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Le]);let Ae=n.get(S[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,Ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&c){let S=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ze(B){return Math.min(s.maxSamples,B.samples)}function et(B){let S=n.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function H(B){let S=o.render.frame;h.get(B)!==S&&(h.set(B,S),B.update())}function dt(B,S){let X=B.colorSpace,K=B.format,ne=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||X!==Ln&&X!==Dn&&(gt.getTransfer(X)===Ct?(K!==Jn||ne!==Vn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",X)),S}function rt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(a.width=B.naturalWidth||B.width,a.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(a.width=B.displayWidth,a.height=B.displayHeight):(a.width=B.width,a.height=B.height),a}this.allocateTextureUnit=R,this.resetTextureUnits=L,this.getTextureUnits=C,this.setTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=F,this.setTexture3D=z,this.setTextureCube=Y,this.rebindTextures=ue,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=$,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function eE(i,e){function t(n,s=Dn){let r,o=gt.getTransfer(s);if(n===Vn)return i.UNSIGNED_BYTE;if(n===Th)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===df)return i.BYTE;if(n===ff)return i.SHORT;if(n===Wo)return i.UNSIGNED_SHORT;if(n===Eh)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===Yt)return i.HALF_FLOAT;if(n===gf)return i.ALPHA;if(n===xf)return i.RGB;if(n===Jn)return i.RGBA;if(n===Qi)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===Ah)return i.RED;if(n===Rh)return i.RED_INTEGER;if(n===or)return i.RG;if(n===Ch)return i.RG_INTEGER;if(n===Ph)return i.RGBA_INTEGER;if(n===dl||n===fl||n===pl||n===ml)if(o===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ml)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ih||n===Lh||n===Dh||n===Nh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ih)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uh||n===Oh||n===Fh||n===Bh||n===kh||n===gl||n===zh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Uh||n===Oh)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Bh)return r.COMPRESSED_R11_EAC;if(n===kh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===gl)return r.COMPRESSED_RG11_EAC;if(n===zh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Hh||n===Gh||n===Vh||n===Wh||n===Xh||n===qh||n===Yh||n===jh||n===Zh||n===Kh||n===$h||n===Jh||n===Qh||n===eu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$h)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qh)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===eu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tu||n===nu||n===iu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===tu)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===iu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===su||n===ru||n===xl||n===ou)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===su)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ru)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ou)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var tE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nE=`
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

}`,zf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Fa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new bt({vertexShader:tE,fragmentShader:nE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xe(new an(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hf=class extends ki{constructor(e,t){super();let n=this,s=null,r=1,o=null,l="local-floor",c=1,a=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new zf,m={},_=t.getContextAttributes(),b=null,y=null,w=[],T=[],P=new oe,v=null,M=null,E=new gn;E.viewport=new At;let D=new gn;D.viewport=new At;let k=[E,D],L=new vh,C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ie=w[Z];return ie===void 0&&(ie=new Lo,w[Z]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Z){let ie=w[Z];return ie===void 0&&(ie=new Lo,w[Z]=ie),ie.getGripSpace()},this.getHand=function(Z){let ie=w[Z];return ie===void 0&&(ie=new Lo,w[Z]=ie),ie.getHandSpace()};function R(Z){let ie=T.indexOf(Z.inputSource);if(ie===-1)return;let Ee=w[ie];Ee!==void 0&&(Ee.update(Z.inputSource,Z.frame,a||o),Ee.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",G);for(let Z=0;Z<w.length;Z++){let ie=T[Z];ie!==null&&(T[Z]=null,w[Z].disconnect(ie))}C=null,N=null,g.reset();for(let Z in m)delete m[Z];if(e.setRenderTarget(b),f=null,u=null,d=null,s=null,y=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(P.width,P.height,!1),M!==null){let Z=M.camera;Z.fov=M.fov,Z.zoom=M.zoom,Z.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){l=Z,n.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||o},this.setReferenceSpace=function(Z){a=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",O),s.addEventListener("inputsourceschange",G),_.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ce=null,$=null;_.depth&&($=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=_.stencil?ls:Qi,Ce=_.stencil?rr:Gi);let de={colorFormat:t.RGBA8,depthFormat:$,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(de),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new $t(u.textureWidth,u.textureHeight,{format:Jn,type:Vn,depthTexture:new ts(u.textureWidth,u.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ee={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new $t(f.framebufferWidth,f.framebufferHeight,{format:Jn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),a=null,o=await s.requestReferenceSpace(l),Se.setContext(s),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(Z){for(let ie=0;ie<Z.removed.length;ie++){let Ee=Z.removed[ie],Ce=T.indexOf(Ee);Ce>=0&&(T[Ce]=null,w[Ce].disconnect(Ee))}for(let ie=0;ie<Z.added.length;ie++){let Ee=Z.added[ie],Ce=T.indexOf(Ee);if(Ce===-1){for(let de=0;de<w.length;de++)if(de>=T.length){T.push(Ee),Ce=de;break}else if(T[de]===null){T[de]=Ee,Ce=de;break}if(Ce===-1)break}let $=w[Ce];$&&$.connect(Ee)}}let F=new U,z=new U;function Y(Z,ie,Ee){F.setFromMatrixPosition(ie.matrixWorld),z.setFromMatrixPosition(Ee.matrixWorld);let Ce=F.distanceTo(z),$=ie.projectionMatrix.elements,de=Ee.projectionMatrix.elements,be=$[14]/($[10]-1),te=$[14]/($[10]+1),ue=($[9]+1)/$[5],_e=($[9]-1)/$[5],fe=($[8]-1)/$[0],Te=(de[8]+1)/de[0],He=be*fe,Ge=be*Te,Ze=Ce/(-fe+Te),et=Ze*-fe;if(ie.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(et),Z.translateZ(Ze),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),$[10]===-1)Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let H=be+Ze,dt=te+Ze,rt=He-et,B=Ge+(Ce-et),S=ue*te/dt*H,X=_e*te/dt*H;Z.projectionMatrix.makePerspective(rt,B,S,X,H,dt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function se(Z,ie){ie===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ie.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ie=Z.near,Ee=Z.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(Ee=g.depthFar)),L.near=D.near=E.near=ie,L.far=D.far=E.far=Ee,(C!==L.near||N!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),C=L.near,N=L.far),L.layers.mask=Z.layers.mask|6,E.layers.mask=L.layers.mask&-5,D.layers.mask=L.layers.mask&-3;let Ce=Z.parent,$=L.cameras;se(L,Ce);for(let de=0;de<$.length;de++)se($[de],Ce);$.length===2?Y(L,E,D):L.projectionMatrix.copy(E.projectionMatrix),M===null&&Z.isPerspectiveCamera&&(M={camera:Z,fov:Z.fov,zoom:Z.zoom}),he(Z,L,Ce)};function he(Z,ie,Ee){Ee===null?Z.matrix.copy(ie.matrixWorld):(Z.matrix.copy(Ee.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ie.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ar*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(Z){return m[Z]};let q=null;function le(Z,ie){if(h=ie.getViewerPose(a||o),p=ie,h!==null){let Ee=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ce=!1;Ee.length!==L.cameras.length&&(L.cameras.length=0,Ce=!0);for(let te=0;te<Ee.length;te++){let ue=Ee[te],_e=null;if(f!==null)_e=f.getViewport(ue);else{let Te=d.getViewSubImage(u,ue);_e=Te.viewport,te===0&&(e.setRenderTargetTextures(y,Te.colorTexture,Te.depthStencilTexture),e.setRenderTarget(y))}let fe=k[te];fe===void 0&&(fe=new gn,fe.layers.enable(te),fe.viewport=new At,k[te]=fe),fe.matrix.fromArray(ue.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(ue.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(_e.x,_e.y,_e.width,_e.height),te===0&&(L.matrix.copy(fe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ce===!0&&L.cameras.push(fe)}let $=s.enabledFeatures;if($&&$.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let te=d.getDepthInformation(Ee[0]);te&&te.isValid&&te.texture&&g.init(te,s.renderState)}if($&&$.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let te=0;te<Ee.length;te++){let ue=Ee[te].camera;if(ue){let _e=m[ue];_e||(_e=new Fa,m[ue]=_e);let fe=d.getCameraImage(ue);_e.sourceTexture=fe}}}}for(let Ee=0;Ee<w.length;Ee++){let Ce=T[Ee],$=w[Ee];Ce!==null&&$!==void 0&&$.update(Ce,ie,a||o)}q&&q(Z,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),p=null}let Se=new Ig;Se.setAnimationLoop(le),this.setAnimationLoop=function(Z){q=Z},this.dispose=function(){}}},iE=new je,Fg=new ut;Fg.set(-1,0,0,0,1,0,0,0,1);function sE(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Sf(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,b,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&l(g,m)):m.isPointsMaterial?c(g,m,_,b):m.isSpriteMaterial?a(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Sn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Sn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m),b=_.envMap,y=_.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(iE.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Fg),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function l(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,_,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Sn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rE(i,e,t,n){let s={},r={},o=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,w){let T=w.program;n.uniformBlockBinding(y,T)}function a(y,w){let T=s[y.id];T===void 0&&(g(y),T=h(y),s[y.id]=T,y.addEventListener("dispose",_));let P=w.program;n.updateUBOMapping(y,P);let v=e.render.frame;r[y.id]!==v&&(u(y),r[y.id]=v)}function h(y){let w=d();y.__bindingPointIndex=w;let T=i.createBuffer(),P=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,P,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,T),T}function d(){for(let y=0;y<l;y++)if(o.indexOf(y)===-1)return o.push(y),y;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let w=s[y.id],T=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let v=0,M=T.length;v<M;v++){let E=T[v];if(Array.isArray(E))for(let D=0,k=E.length;D<k;D++)f(E[D],v,D,P);else f(E,v,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,w,T,P){if(x(y,w,T,P)===!0){let v=y.__offset,M=y.value;if(Array.isArray(M)){let E=0;for(let D=0;D<M.length;D++){let k=M[D],L=m(k);p(k,y.__data,E),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(E+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(M,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function p(y,w,T){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,T)}function x(y,w,T,P){let v=y.value,M=w+"_"+T;if(P[M]===void 0)return typeof v=="number"||typeof v=="boolean"?P[M]=v:ArrayBuffer.isView(v)?P[M]=v.slice():P[M]=v.clone(),!0;{let E=P[M];if(typeof v=="number"||typeof v=="boolean"){if(E!==v)return P[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(E.equals(v)===!1)return E.copy(v),!0}}return!1}function g(y){let w=y.uniforms,T=0,P=16;for(let M=0,E=w.length;M<E;M++){let D=Array.isArray(w[M])?w[M]:[w[M]];for(let k=0,L=D.length;k<L;k++){let C=D[k],N=Array.isArray(C.value)?C.value:[C.value];for(let R=0,O=N.length;R<O;R++){let G=N[R],F=m(G),z=T%P,Y=z%F.boundary,se=z+Y;T+=Y,se!==0&&P-se<F.storage&&(T+=P-se),C.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=T,T+=F.storage}}}let v=T%P;return v>0&&(T+=P-v),y.__size=T,y.__cache={},this}function m(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",y),w}function _(y){let w=y.target;w.removeEventListener("dispose",_);let T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function b(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:a,dispose:b}}var oE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),cs=null;function aE(){return cs===null&&(cs=new wi(oE,16,16,or,Yt),cs.name="DFG_LUT",cs.minFilter=Wt,cs.magFilter=Wt,cs.wrapS=Cn,cs.wrapT=Cn,cs.generateMipmaps=!1,cs.needsUpdate=!0),cs}var pu=class{constructor(e={}){let{canvas:t=Jm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:a=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Vn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,g=new Set([Ph,Ch,Rh]),m=new Set([Vn,Gi,Wo,rr,Th,wh]),_=new Uint32Array(4),b=new Int32Array(4),y=new U,w=null,T=null,P=[],v=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,D=!1,k=null,L=null,C=null,N=null;this._outputColorSpace=ft;let R=0,O=0,G=null,F=-1,z=null,Y=new At,se=new At,he=null,q=new ge(0),le=0,Se=t.width,Z=t.height,ie=1,Ee=null,Ce=null,$=new At(0,0,Se,Z),de=new At(0,0,Se,Z),be=!1,te=new Do,ue=!1,_e=!1,fe=new je,Te=new U,He=new At,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function et(){return G===null?ie:1}let H=n;function dt(A,V){return t.getContext(A,V)}let rt,B,S,X,K,ne,we,Ie,ce,pe,Le,Ae,ye,Me,Ue,Ye,at,W,Ne,me,Pe,Oe,ve;try{let A={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:a,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Xt,!1),t.addEventListener("webglcontextrestored",Lt,!1),t.addEventListener("webglcontextcreationerror",Li,!1),H===null){let V="webgl2";if(H=dt(V,A),H===null)throw dt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(A){throw t.removeEventListener("webglcontextlost",Xt,!1),t.removeEventListener("webglcontextrestored",Lt,!1),t.removeEventListener("webglcontextcreationerror",Li,!1),ot("WebGLRenderer: "+A.message),A}function nt(){rt=new pb(H),rt.init(),Pe=new eE(H,rt),B=new sb(H,rt,e,Pe),S=new JS(H,rt),B.reversedDepthBuffer&&u&&S.buffers.depth.setReversed(!0),L=H.createFramebuffer(),C=H.createFramebuffer(),N=H.createFramebuffer(),X=new xb(H),K=new BS,ne=new QS(H,rt,S,K,B,Pe,X),we=new fb(E),Ie=new _y(H),Oe=new nb(H,Ie),ce=new mb(H,Ie,X,Oe),pe=new _b(H,ce,Ie,Oe,X),W=new vb(H,B,ne),Ue=new rb(K),Le=new FS(E,we,rt,B,Oe,Ue),Ae=new sE(E,K),ye=new zS,Me=new qS(rt),at=new tb(E,we,S,pe,p,c),Ye=new $S(E,pe,B),ve=new rE(H,X,B,S),Ne=new ib(H,rt,X),me=new gb(H,rt,X),X.programs=Le.programs,E.capabilities=B,E.extensions=rt,E.properties=K,E.renderLists=ye,E.shadowMap=Ye,E.state=S,E.info=X}x!==Vn&&(M=new Mb(x,t.width,t.height,l,s,r));let Ke=new Hf(E,H);this.xr=Ke,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let A=rt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=rt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(A){A!==void 0&&(ie=A,this.setSize(Se,Z,!1))},this.getSize=function(A){return A.set(Se,Z)},this.setSize=function(A,V,re=!0){if(Ke.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=A,Z=V,t.width=Math.floor(A*ie),t.height=Math.floor(V*ie),re===!0&&(t.style.width=A+"px",t.style.height=V+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(Se*ie,Z*ie).floor()},this.setDrawingBufferSize=function(A,V,re){Se=A,Z=V,ie=re,t.width=Math.floor(A*re),t.height=Math.floor(V*re),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(x===Vn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Y)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,V,re,J){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,V,re,J),S.viewport(Y.copy($).multiplyScalar(ie).round())},this.getScissor=function(A){return A.copy(de)},this.setScissor=function(A,V,re,J){A.isVector4?de.set(A.x,A.y,A.z,A.w):de.set(A,V,re,J),S.scissor(se.copy(de).multiplyScalar(ie).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(A){S.setScissorTest(be=A)},this.setOpaqueSort=function(A){Ee=A},this.setTransparentSort=function(A){Ce=A},this.getClearColor=function(A){return A.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,re=!0){let J=0;if(A){let Q=!1;if(G!==null){let ke=G.texture.format;Q=g.has(ke)}if(Q){let ke=G.texture.type,qe=m.has(ke),Be=at.getClearColor(),$e=at.getClearAlpha(),tt=Be.r,_t=Be.g,Tt=Be.b;qe?(_[0]=tt,_[1]=_t,_[2]=Tt,_[3]=$e,H.clearBufferuiv(H.COLOR,0,_)):(b[0]=tt,b[1]=_t,b[2]=Tt,b[3]=$e,H.clearBufferiv(H.COLOR,0,b))}else J|=H.COLOR_BUFFER_BIT}V&&(J|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(J|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&H.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),k=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Xt,!1),t.removeEventListener("webglcontextrestored",Lt,!1),t.removeEventListener("webglcontextcreationerror",Li,!1),at.dispose(),ye.dispose(),Me.dispose(),K.dispose(),we.dispose(),pe.dispose(),Oe.dispose(),ve.dispose(),Le.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",M0),Ke.removeEventListener("sessionend",b0),gr.stop()};function Xt(A){A.preventDefault(),Ca("WebGLRenderer: Context Lost."),D=!0}function Lt(){Ca("WebGLRenderer: Context Restored."),D=!1;let A=X.autoReset,V=Ye.enabled,re=Ye.autoUpdate,J=Ye.needsUpdate,Q=Ye.type;nt(),X.autoReset=A,Ye.enabled=V,Ye.autoUpdate=re,Ye.needsUpdate=J,Ye.type=Q}function Li(A){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Zi(A){let V=A.target;V.removeEventListener("dispose",Zi),Iv(V)}function Iv(A){Lv(A),K.remove(A)}function Lv(A){let V=K.get(A).programs;V!==void 0&&(V.forEach(function(re){Le.releaseProgram(re)}),A.isShaderMaterial&&Le.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,re,J,Q,ke){V===null&&(V=Ge);let qe=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Be=Uv(A,V,re,J,Q);S.setMaterial(J,qe);let $e=re.index,tt=1;if(J.wireframe===!0){if($e=ce.getWireframeAttribute(re),$e===void 0)return;tt=2}let _t=re.drawRange,Tt=re.attributes.position,Je=_t.start*tt,Dt=(_t.start+_t.count)*tt;ke!==null&&(Je=Math.max(Je,ke.start*tt),Dt=Math.min(Dt,(ke.start+ke.count)*tt)),$e!==null?(Je=Math.max(Je,0),Dt=Math.min(Dt,$e.count)):Tt!=null&&(Je=Math.max(Je,0),Dt=Math.min(Dt,Tt.count));let pn=Dt-Je;if(pn<0||pn===1/0)return;Oe.setup(Q,J,Be,re,$e);let Kt,Vt=Ne;if($e!==null&&(Kt=Ie.get($e),Vt=me,Vt.setIndex(Kt)),Q.isMesh)J.wireframe===!0?(S.setLineWidth(J.wireframeLinewidth*et()),Vt.setMode(H.LINES)):Vt.setMode(H.TRIANGLES);else if(Q.isLine){let Fn=J.linewidth;Fn===void 0&&(Fn=1),S.setLineWidth(Fn*et()),Q.isLineSegments?Vt.setMode(H.LINES):Q.isLineLoop?Vt.setMode(H.LINE_LOOP):Vt.setMode(H.LINE_STRIP)}else Q.isPoints?Vt.setMode(H.POINTS):Q.isSprite&&Vt.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))Vt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Fn=Q._multiDrawStarts,Xe=Q._multiDrawCounts,jn=Q._multiDrawCount,wt=$e?Ie.get($e).bytesPerElement:1,Si=K.get(J).currentProgram.getUniforms();for(let Ki=0;Ki<jn;Ki++)Si.setValue(H,"_gl_DrawID",Ki),Vt.render(Fn[Ki]/wt,Xe[Ki])}else if(Q.isInstancedMesh)Vt.renderInstances(Je,pn,Q.count);else if(re.isInstancedBufferGeometry){let Fn=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Xe=Math.min(re.instanceCount,Fn);Vt.renderInstances(Je,pn,Xe)}else Vt.render(Je,pn)};function y0(A,V,re,J){k!==null&&A.isNodeMaterial&&k.setObject(J,A),ue===!0&&Ue.setState(A,re,!1),A.transparent===!0&&A.side===Ot&&A.forceSinglePass===!1?(A.side=Sn,A.needsUpdate=!0,hc(A,V,J),A.side=os,A.needsUpdate=!0,hc(A,V,J),A.side=Ot):hc(A,V,J)}this.compile=function(A,V,re=null){re===null&&(re=A),k!==null&&k.renderStart(A,V,re),T=Me.get(re),T.init(V),v.push(T),re.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),A!==re&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),T.setupLights(),k!==null&&k.updateLights(T.state.lightsArray),_e=this.localClippingEnabled,ue=Ue.init(this.clippingPlanes,_e),ue===!0&&Ue.setGlobalState(this.clippingPlanes,V),k!==null&&Ye.render(T.state.shadowsArray,re,V);let J=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let ke=Q.material;if(ke)if(Array.isArray(ke))for(let qe=0;qe<ke.length;qe++){let Be=ke[qe];y0(Be,re,V,Q),J.add(Be)}else y0(ke,re,V,Q),J.add(ke)}),T=v.pop(),k!==null&&k.renderEnd(),J},this.compileAsync=function(A,V,re=null){let J=this.compile(A,V,re);return new Promise(Q=>{function ke(){if(J.forEach(function(qe){let $e=K.get(qe).currentProgram;($e===void 0||$e.isReady())&&J.delete(qe)}),J.size===0){Q(A);return}setTimeout(ke,10)}rt.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let md=null;function Dv(A){md&&md(A)}function M0(){gr.stop()}function b0(){gr.start()}let gr=new Ig;gr.setAnimationLoop(Dv),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(A){md=A,Ke.setAnimationLoop(A),A===null?gr.stop():gr.start()},Ke.addEventListener("sessionstart",M0),Ke.addEventListener("sessionend",b0),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(A,V);let re=Ke.enabled===!0&&Ke.isPresenting===!0,J=M!==null&&(G===null||re)&&M.begin(E,G);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(V),V=Ke.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,V,G),T=Me.get(A,v.length),T.init(V),T.state.textureUnits=ne.getTextureUnits(),v.push(T),fe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),te.setFromProjectionMatrix(fe,Bi,V.reversedDepth),_e=this.localClippingEnabled,ue=Ue.init(this.clippingPlanes,_e),w=ye.get(A,P.length),w.init(),P.push(w),Ke.enabled===!0&&Ke.isPresenting===!0){let qe=E.xr.getDepthSensingMesh();qe!==null&&gd(qe,V,-1/0,E.sortObjects)}gd(A,V,0,E.sortObjects),w.finish(),k!==null&&k.updateLights(T.state.lightsArray),E.sortObjects===!0&&w.sort(Ee,Ce),Ze=Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1,Ze&&at.addToRenderList(w,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ue===!0&&Ue.beginShadows();let Q=T.state.shadowsArray;if(Ye.render(Q,A,V),ue===!0&&Ue.endShadows(),(J&&M.hasRenderPass())===!1){let qe=w.opaque,Be=w.transmissive;if(T.setupLights(),V.isArrayCamera){let $e=V.cameras;if(Be.length>0)for(let tt=0,_t=$e.length;tt<_t;tt++){let Tt=$e[tt];E0(qe,Be,A,Tt)}Ze&&at.render(A);for(let tt=0,_t=$e.length;tt<_t;tt++){let Tt=$e[tt];S0(w,A,Tt,Tt.viewport)}}else Be.length>0&&E0(qe,Be,A,V),Ze&&at.render(A),S0(w,A,V)}G!==null&&O===0&&(ne.updateMultisampleRenderTarget(G),ne.updateRenderTargetMipmap(G)),J&&M.end(E),A.isScene===!0&&A.onAfterRender(E,A,V),Oe.resetDefaultState(),F=-1,z=null,v.pop(),v.length>0?(T=v[v.length-1],ne.setTextureUnits(T.state.textureUnits),ue===!0&&Ue.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?w=P[P.length-1]:w=null,k!==null&&k.renderEnd()};function gd(A,V,re,J){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLightProbeGrid)T.pushLightProbeGrid(A);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(te)){J&&He.setFromMatrixPosition(A.matrixWorld).applyMatrix4(fe);let qe=pe.update(A),Be=A.material;Be.visible&&w.push(A,qe,Be,re,He.z,null,V)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(te))){let qe=pe.update(A),Be=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),He.copy(A.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),He.copy(qe.boundingSphere.center)),He.applyMatrix4(A.matrixWorld).applyMatrix4(fe)),Array.isArray(Be)){let $e=qe.groups;for(let tt=0,_t=$e.length;tt<_t;tt++){let Tt=$e[tt],Je=Be[Tt.materialIndex];Je&&Je.visible&&w.push(A,qe,Je,re,He.z,Tt,V)}}else Be.visible&&w.push(A,qe,Be,re,He.z,null,V)}}let ke=A.children;for(let qe=0,Be=ke.length;qe<Be;qe++)gd(ke[qe],V,re,J)}function S0(A,V,re,J){let{opaque:Q,transmissive:ke,transparent:qe}=A;T.setupLightsView(re),ue===!0&&Ue.setGlobalState(E.clippingPlanes,re),J&&S.viewport(Y.copy(J)),Q.length>0&&cc(Q,V,re),ke.length>0&&cc(ke,V,re),qe.length>0&&cc(qe,V,re),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function E0(A,V,re,J){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[J.id]===void 0){let Je=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[J.id]=new $t(1,1,{generateMipmaps:!0,type:Je?Yt:Vn,minFilter:di,samples:Math.max(4,B.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let ke=T.state.transmissionRenderTarget[J.id],qe=J.viewport||Y;ke.setSize(qe.z*E.transmissionResolutionScale,qe.w*E.transmissionResolutionScale);let Be=E.getRenderTarget(),$e=E.getActiveCubeFace(),tt=E.getActiveMipmapLevel();E.setRenderTarget(ke),E.getClearColor(q),le=E.getClearAlpha(),le<1&&E.setClearColor(16777215,.5),E.clear(),Ze&&at.render(re);let _t=E.toneMapping;E.toneMapping=Hi;let Tt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),T.setupLightsView(J),ue===!0&&Ue.setGlobalState(E.clippingPlanes,J),cc(A,re,J),ne.updateMultisampleRenderTarget(ke),ne.updateRenderTargetMipmap(ke),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Dt=0,pn=V.length;Dt<pn;Dt++){let Kt=V[Dt],{object:Vt,geometry:Fn,material:Xe,group:jn}=Kt;if(Xe.side===Ot&&Vt.layers.test(J.layers)){let wt=Xe.side;Xe.side=Sn,Xe.needsUpdate=!0,T0(Vt,re,J,Fn,Xe,jn),Xe.side=wt,Xe.needsUpdate=!0,Je=!0}}Je===!0&&(ne.updateMultisampleRenderTarget(ke),ne.updateRenderTargetMipmap(ke))}E.setRenderTarget(Be,$e,tt),E.setClearColor(q,le),Tt!==void 0&&(J.viewport=Tt),E.toneMapping=_t}function cc(A,V,re){let J=V.isScene===!0?V.overrideMaterial:null;for(let Q=0,ke=A.length;Q<ke;Q++){let qe=A[Q],{object:Be,geometry:$e,group:tt}=qe,_t=qe.material;_t.allowOverride===!0&&J!==null&&(_t=J),Be.layers.test(re.layers)&&T0(Be,V,re,$e,_t,tt)}}function T0(A,V,re,J,Q,ke){k!==null&&Q.isNodeMaterial&&k.setObject(A,Q),A.onBeforeRender(E,V,re,J,Q,ke),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(E,V,re,J,A,ke),Q.transparent===!0&&Q.side===Ot&&Q.forceSinglePass===!1?(Q.side=Sn,Q.needsUpdate=!0,E.renderBufferDirect(re,V,J,Q,A,ke),Q.side=os,Q.needsUpdate=!0,E.renderBufferDirect(re,V,J,Q,A,ke),Q.side=Ot):E.renderBufferDirect(re,V,J,Q,A,ke),A.onAfterRender(E,V,re,J,Q,ke)}function hc(A,V,re){V.isScene!==!0&&(V=Ge);let J=K.get(A),Q=T.state.lights,ke=T.state.shadowsArray,qe=Q.state.version,Be=Le.getParameters(A,Q.state,ke,V,re,T.state.lightProbeGridArray),$e=Le.getProgramCacheKey(Be),tt=J.programs;J.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,J.fog=V.fog;let _t=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;J.envMap=we.get(A.envMap||J.environment,_t),J.envMapRotation=J.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,tt===void 0&&(A.addEventListener("dispose",Zi),tt=new Map,J.programs=tt);let Tt=tt.get($e);if(Tt!==void 0){if(J.currentProgram===Tt&&J.lightsStateVersion===qe)return A0(A,Be),Tt}else Be.uniforms=Le.getUniforms(A),k!==null&&A.isNodeMaterial&&k.build(A,re,Be),A.onBeforeCompile(Be,E),Tt=Le.acquireProgram(Be,$e),tt.set($e,Tt),J.uniforms=Be.uniforms;let Je=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=Ue.uniform),A0(A,Be),J.needsLights=Fv(A),J.lightsStateVersion=qe,J.needsLights&&(Je.ambientLightColor.value=Q.state.ambient,Je.lightProbe.value=Q.state.probe,Je.sunLights.value=Q.state.sun,Je.sunLightShadows.value=Q.state.sunShadow,Je.directionalLights.value=Q.state.directional,Je.directionalLightShadows.value=Q.state.directionalShadow,Je.spotLights.value=Q.state.spot,Je.spotLightShadows.value=Q.state.spotShadow,Je.rectAreaLights.value=Q.state.rectArea,Je.ltc_1.value=Q.state.rectAreaLTC1,Je.ltc_2.value=Q.state.rectAreaLTC2,Je.pointLights.value=Q.state.point,Je.pointLightShadows.value=Q.state.pointShadow,Je.hemisphereLights.value=Q.state.hemi,Je.sunShadowMatrix.value=Q.state.sunShadowMatrix,Je.sunShadowCascade.value=Q.state.sunShadowCascade,Je.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Je.spotLightMatrix.value=Q.state.spotLightMatrix,Je.spotLightMap.value=Q.state.spotLightMap,Je.pointShadowMatrix.value=Q.state.pointShadowMatrix),J.lightProbeGrid=T.state.lightProbeGridArray.length>0,J.currentProgram=Tt,J.uniformsList=null,Tt}function w0(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=Zo.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function A0(A,V){let re=K.get(A);re.outputColorSpace=V.outputColorSpace,re.batching=V.batching,re.batchingColor=V.batchingColor,re.instancing=V.instancing,re.instancingColor=V.instancingColor,re.instancingMorph=V.instancingMorph,re.skinning=V.skinning,re.morphTargets=V.morphTargets,re.morphNormals=V.morphNormals,re.morphColors=V.morphColors,re.morphTargetsCount=V.morphTargetsCount,re.numClippingPlanes=V.numClippingPlanes,re.numIntersection=V.numClipIntersection,re.vertexAlphas=V.vertexAlphas,re.vertexTangents=V.vertexTangents,re.toneMapping=V.toneMapping}function Nv(A,V){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;y.setFromMatrixPosition(V.matrixWorld);for(let re=0,J=A.length;re<J;re++){let Q=A[re];if(Q.texture!==null&&Q.boundingBox.containsPoint(y))return Q}return null}function Uv(A,V,re,J,Q){V.isScene!==!0&&(V=Ge),ne.resetTextureUnits();let ke=V.fog,qe=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?V.environment:null,Be=G===null?E.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:gt.workingColorSpace,$e=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,tt=we.get(J.envMap||qe,$e),_t=J.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Tt=!!re.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Je=!!re.morphAttributes.position,Dt=!!re.morphAttributes.normal,pn=!!re.morphAttributes.color,Kt=Hi;J.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Kt=E.toneMapping);let Vt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Fn=Vt!==void 0?Vt.length:0,Xe=K.get(J),jn=T.state.lights;if(ue===!0&&(_e===!0||A!==z)){let qt=A===z&&J.id===F;Ue.setState(J,A,qt)}let wt=!1;J.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==jn.state.version||Xe.outputColorSpace!==Be||Q.isBatchedMesh&&Xe.batching===!1||!Q.isBatchedMesh&&Xe.batching===!0||Q.isBatchedMesh&&Xe.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Xe.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Xe.instancing===!1||!Q.isInstancedMesh&&Xe.instancing===!0||Q.isSkinnedMesh&&Xe.skinning===!1||!Q.isSkinnedMesh&&Xe.skinning===!0||Q.isInstancedMesh&&Xe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Xe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Xe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Xe.instancingMorph===!1&&Q.morphTexture!==null||Xe.envMap!==tt||J.fog===!0&&Xe.fog!==ke||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ue.numPlanes||Xe.numIntersection!==Ue.numIntersection)||Xe.vertexAlphas!==_t||Xe.vertexTangents!==Tt||Xe.morphTargets!==Je||Xe.morphNormals!==Dt||Xe.morphColors!==pn||Xe.toneMapping!==Kt||Xe.morphTargetsCount!==Fn||!!Xe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(wt=!0):(wt=!0,Xe.__version=J.version);let Si=Xe.currentProgram;wt===!0&&(Si=hc(J,V,Q),k&&J.isNodeMaterial&&k.onUpdateProgram(J,Si,Xe));let Ki=!1,Xs=!1,so=!1,kt=Si.getUniforms(),un=Xe.uniforms;if(S.useProgram(Si.program)&&(Ki=!0,Xs=!0,so=!0),J.id!==F&&(F=J.id,Xs=!0),Xe.needsLights){let qt=Nv(T.state.lightProbeGridArray,Q);Xe.lightProbeGrid!==qt&&(Xe.lightProbeGrid=qt,Xs=!0)}if(Ki||z!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),kt.setValue(H,"projectionMatrix",A.projectionMatrix),kt.setValue(H,"viewMatrix",A.matrixWorldInverse);let Ys=kt.map.cameraPosition;Ys!==void 0&&Ys.setValue(H,Te.setFromMatrixPosition(A.matrixWorld)),B.logarithmicDepthBuffer&&kt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&kt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),z!==A&&(z=A,Xs=!0,so=!0)}if(Xe.needsLights&&(jn.state.sunShadowMap.length>0&&kt.setValue(H,"sunShadowMap",jn.state.sunShadowMap,ne),jn.state.directionalShadowMap.length>0&&kt.setValue(H,"directionalShadowMap",jn.state.directionalShadowMap,ne),jn.state.spotShadowMap.length>0&&kt.setValue(H,"spotShadowMap",jn.state.spotShadowMap,ne),jn.state.pointShadowMap.length>0&&kt.setValue(H,"pointShadowMap",jn.state.pointShadowMap,ne)),Q.isSkinnedMesh){kt.setOptional(H,Q,"bindMatrix"),kt.setOptional(H,Q,"bindMatrixInverse");let qt=Q.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),kt.setValue(H,"boneTexture",qt.boneTexture,ne))}Q.isBatchedMesh&&(kt.setOptional(H,Q,"batchingTexture"),kt.setValue(H,"batchingTexture",Q._matricesTexture,ne),kt.setOptional(H,Q,"batchingIdTexture"),kt.setValue(H,"batchingIdTexture",Q._indirectTexture,ne),kt.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&kt.setValue(H,"batchingColorTexture",Q._colorsTexture,ne));let qs=re.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&W.update(Q,re,Si),(Xs||Xe.receiveShadow!==Q.receiveShadow)&&(Xe.receiveShadow=Q.receiveShadow,kt.setValue(H,"receiveShadow",Q.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&V.environment!==null&&(un.envMapIntensity.value=V.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=aE()),Xs){if(kt.setValue(H,"toneMappingExposure",E.toneMappingExposure),Xe.needsLights&&Ov(un,so),ke&&J.fog===!0&&Ae.refreshFogUniforms(un,ke),Ae.refreshMaterialUniforms(un,J,ie,Z,T.state.transmissionRenderTarget[A.id]),Xe.needsLights&&Xe.lightProbeGrid){let qt=Xe.lightProbeGrid;un.probesSH.value=qt.texture,un.probesMin.value.copy(qt.boundingBox.min),un.probesMax.value.copy(qt.boundingBox.max),un.probesResolution.value.copy(qt.resolution)}Zo.upload(H,w0(Xe),un,ne)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Zo.upload(H,w0(Xe),un,ne),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&kt.setValue(H,"center",Q.center),kt.setValue(H,"modelViewMatrix",Q.modelViewMatrix),kt.setValue(H,"normalMatrix",Q.normalMatrix),kt.setValue(H,"modelMatrix",Q.matrixWorld),J.uniformsGroups!==void 0){let qt=J.uniformsGroups;for(let Ys=0,ro=qt.length;Ys<ro;Ys++){let C0=qt[Ys];ve.update(C0,Si),ve.bind(C0,Si)}}return Si}function Ov(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.sunLights.needsUpdate=V,A.sunLightShadows.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Fv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(A,V,re){let J=K.get(A);J.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),K.get(A.texture).__webglTexture=V,K.get(A.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:re,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){let re=K.get(A);re.__webglFramebuffer=V,re.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,re=0){G=A,R=V,O=re;let J=null,Q=!1,ke=!1;if(A){let Be=K.get(A);if(Be.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(H.FRAMEBUFFER,Be.__webglFramebuffer),Y.copy(A.viewport),se.copy(A.scissor),he=A.scissorTest,S.viewport(Y),S.scissor(se),S.setScissorTest(he),F=-1;return}else if(Be.__webglFramebuffer===void 0)ne.setupRenderTarget(A);else if(Be.__hasExternalTextures)ne.rebindTextures(A,K.get(A.texture).__webglTexture,K.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let _t=A.depthTexture;if(Be.__boundDepthTexture!==_t){if(_t!==null&&K.has(_t)&&(A.width!==_t.image.width||A.height!==_t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(A)}}let $e=A.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(ke=!0);let tt=K.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[V])?J=tt[V][re]:J=tt[V],Q=!0):A.samples>0&&ne.useMultisampledRTT(A)===!1?J=K.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?J=tt[re]:J=tt,Y.copy(A.viewport),se.copy(A.scissor),he=A.scissorTest}else Y.copy($).multiplyScalar(ie).floor(),se.copy(de).multiplyScalar(ie).floor(),he=be;if(re!==0&&(J=L),S.bindFramebuffer(H.FRAMEBUFFER,J)&&S.drawBuffers(A,J),S.viewport(Y),S.scissor(se),S.setScissorTest(he),Q){let Be=K.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+V,Be.__webglTexture,re)}else if(ke){let Be=V;for(let $e=0;$e<A.textures.length;$e++){let tt=K.get(A.textures[$e]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+$e,tt.__webglTexture,re,Be)}}else if(A!==null&&re!==0){let Be=K.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Be.__webglTexture,re)}F=-1};function R0(A){let V=K.get(A);return(V.__readFormat!==A.format||V.__readType!==A.type)&&(V.__readFormat=A.format,V.__readType=A.type,V.__formatReadable=B.textureFormatReadable(A.format),V.__typeReadable=B.textureTypeReadable(A.type)),V}this.readRenderTargetPixels=function(A,V,re,J,Q,ke,qe,Be=0){if(!(A&&A.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&($e=$e[qe]),$e){S.bindFramebuffer(H.FRAMEBUFFER,$e);try{let tt=A.textures[Be],_t=tt.format,Tt=tt.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Be);let Je=R0(tt);if(Je.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Je.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-J&&re>=0&&re<=A.height-Q&&H.readPixels(V,re,J,Q,Pe.convert(_t),Pe.convert(Tt),ke)}finally{let tt=G!==null?K.get(G).__webglFramebuffer:null;S.bindFramebuffer(H.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(A,V,re,J,Q,ke,qe,Be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&($e=$e[qe]),$e)if(V>=0&&V<=A.width-J&&re>=0&&re<=A.height-Q){S.bindFramebuffer(H.FRAMEBUFFER,$e);let tt=A.textures[Be],_t=tt.format,Tt=tt.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Be);let Je=R0(tt);if(Je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Dt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Dt),H.bufferData(H.PIXEL_PACK_BUFFER,ke.byteLength,H.STREAM_READ),H.readPixels(V,re,J,Q,Pe.convert(_t),Pe.convert(Tt),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let pn=G!==null?K.get(G).__webglFramebuffer:null;S.bindFramebuffer(H.FRAMEBUFFER,pn);let Kt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await eg(H,Kt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Dt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ke),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Dt),H.deleteSync(Kt),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,re=0){let J=Math.pow(2,-re),Q=Math.floor(A.image.width*J),ke=Math.floor(A.image.height*J),qe=V!==null?V.x:0,Be=V!==null?V.y:0;ne.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,qe,Be,Q,ke),S.unbindTexture()},this.copyTextureToTexture=function(A,V,re=null,J=null,Q=0,ke=0){let qe,Be,$e,tt,_t,Tt,Je,Dt,pn,Kt=A.isCompressedTexture?A.mipmaps[ke]:A.image;if(re!==null)qe=re.max.x-re.min.x,Be=re.max.y-re.min.y,$e=re.isBox3?re.max.z-re.min.z:1,tt=re.min.x,_t=re.min.y,Tt=re.isBox3?re.min.z:0;else{let un=Math.pow(2,-Q);qe=Math.floor(Kt.width*un),Be=Math.floor(Kt.height*un),A.isDataArrayTexture?$e=Kt.depth:A.isData3DTexture?$e=Math.floor(Kt.depth*un):$e=1,tt=0,_t=0,Tt=0}J!==null?(Je=J.x,Dt=J.y,pn=J.z):(Je=0,Dt=0,pn=0);let Vt=Pe.convert(V.format),Fn=Pe.convert(V.type),Xe;V.isData3DTexture?(ne.setTexture3D(V,0),Xe=H.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ne.setTexture2DArray(V,0),Xe=H.TEXTURE_2D_ARRAY):(ne.setTexture2D(V,0),Xe=H.TEXTURE_2D),S.activeTexture(H.TEXTURE0),S.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,V.flipY),S.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),S.pixelStorei(H.UNPACK_ALIGNMENT,V.unpackAlignment);let jn=S.getParameter(H.UNPACK_ROW_LENGTH),wt=S.getParameter(H.UNPACK_IMAGE_HEIGHT),Si=S.getParameter(H.UNPACK_SKIP_PIXELS),Ki=S.getParameter(H.UNPACK_SKIP_ROWS),Xs=S.getParameter(H.UNPACK_SKIP_IMAGES);S.pixelStorei(H.UNPACK_ROW_LENGTH,Kt.width),S.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Kt.height),S.pixelStorei(H.UNPACK_SKIP_PIXELS,tt),S.pixelStorei(H.UNPACK_SKIP_ROWS,_t),S.pixelStorei(H.UNPACK_SKIP_IMAGES,Tt);let so=A.isDataArrayTexture||A.isData3DTexture,kt=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){let un=K.get(A),qs=K.get(V),qt=K.get(un.__renderTarget),Ys=K.get(qs.__renderTarget);S.bindFramebuffer(H.READ_FRAMEBUFFER,qt.__webglFramebuffer),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ys.__webglFramebuffer);for(let ro=0;ro<$e;ro++)so&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,K.get(A).__webglTexture,Q,Tt+ro),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,K.get(V).__webglTexture,ke,pn+ro)),H.blitFramebuffer(tt,_t,qe,Be,Je,Dt,qe,Be,H.DEPTH_BUFFER_BIT,H.NEAREST);S.bindFramebuffer(H.READ_FRAMEBUFFER,null),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||K.has(A)){let un=K.get(A),qs=K.get(V);S.bindFramebuffer(H.READ_FRAMEBUFFER,C),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,N);for(let qt=0;qt<$e;qt++)so?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,un.__webglTexture,Q,Tt+qt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,un.__webglTexture,Q),kt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qs.__webglTexture,ke,pn+qt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,qs.__webglTexture,ke),Q!==0?H.blitFramebuffer(tt,_t,qe,Be,Je,Dt,qe,Be,H.COLOR_BUFFER_BIT,H.NEAREST):kt?H.copyTexSubImage3D(Xe,ke,Je,Dt,pn+qt,tt,_t,qe,Be):H.copyTexSubImage2D(Xe,ke,Je,Dt,tt,_t,qe,Be);S.bindFramebuffer(H.READ_FRAMEBUFFER,null),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else kt?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Xe,ke,Je,Dt,pn,qe,Be,$e,Vt,Fn,Kt.data):V.isCompressedArrayTexture?H.compressedTexSubImage3D(Xe,ke,Je,Dt,pn,qe,Be,$e,Vt,Kt.data):H.texSubImage3D(Xe,ke,Je,Dt,pn,qe,Be,$e,Vt,Fn,Kt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ke,Je,Dt,qe,Be,Vt,Fn,Kt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ke,Je,Dt,Kt.width,Kt.height,Vt,Kt.data):H.texSubImage2D(H.TEXTURE_2D,ke,Je,Dt,qe,Be,Vt,Fn,Kt);S.pixelStorei(H.UNPACK_ROW_LENGTH,jn),S.pixelStorei(H.UNPACK_IMAGE_HEIGHT,wt),S.pixelStorei(H.UNPACK_SKIP_PIXELS,Si),S.pixelStorei(H.UNPACK_SKIP_ROWS,Ki),S.pixelStorei(H.UNPACK_SKIP_IMAGES,Xs),ke===0&&V.generateMipmaps&&H.generateMipmap(Xe),S.unbindTexture()},this.initRenderTarget=function(A){K.get(A).__webglFramebuffer===void 0&&ne.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ne.setTextureCube(A,0):A.isData3DTexture?ne.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ne.setTexture2DArray(A,0):ne.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){R=0,O=0,G=null,S.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};var Gf="https://race.vwfestmemecoin.com/api/arcade/zombies",El=null,Vf=i=>i.json(),us={start(){return El=null,fetch(Gf+"/start",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}).then(Vf).then(i=>{i.ok&&(El=i.token)}).catch(()=>{})},hasToken(){return!!El},top(){return fetch(Gf+"/top").then(Vf).then(i=>i.ok?i.top:null).catch(()=>null)},submit(i,e,t,n){return fetch(Gf+"/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:El,nickname:i,score:e,pts:t,kills:n})}).then(Vf).then(s=>(s.ok&&(El=null),s)).catch(()=>({ok:!1,error:"Network hiccup. Try again."}))},render(i,e,t){if(i.replaceChildren(),!e){let n=document.createElement("li");n.className="muted",n.textContent="Leaderboard unavailable.",i.append(n);return}if(!e.length){let n=document.createElement("li");n.className="muted",n.textContent="No survivors yet. Be first.",i.append(n);return}for(let n of e.slice(0,5)){let s=document.createElement("li");t&&n.nickname===t&&(s.className="me");let r=document.createElement("b");r.textContent=String(n.nickname),s.append(r," \xB7 Round "+(n.score|0)+" \xB7 "+(n.aux|0).toLocaleString()+" pts"),i.append(s)}}};var cn=Math.PI*2,Qt=(i,e,t)=>i<e?e:i>t?t:i,ds=(i,e,t)=>i+(e-i)*t,ee=(i=1,e)=>e===void 0?Math.random()*i:i+Math.random()*(e-i),In=i=>i[Math.random()*i.length|0],Bg=i=>i*i*(3-2*i);function xu(i,e,t){let n=i*374761393+e*668265263+t*144665|0;return n=(n^n>>>13)*1274126177,n=n^n>>>16,(n>>>0)%1e5/1e5}function lE(i,e,t=0){let n=Math.floor(i),s=Math.floor(e),r=Bg(i-n),o=Bg(e-s),l=xu(n,s,t),c=xu(n+1,s,t),a=xu(n,s+1,t),h=xu(n+1,s+1,t);return ds(ds(l,c,r),ds(a,h,r),o)}function Qn(i,e,t=4,n=0){let s=0,r=.5,o=1;for(let l=0;l<t;l++)s+=r*lE(i*o,e*o,n+l*17),o*=2,r*=.5;return s}function ar(i,e,t={}){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),r=s.createImageData(i,i),o=r.data;for(let c=0;c<i;c++)for(let a=0;a<i;a++){let h=(c*i+a)*4,d=e(a/i,c/i,a,c);o[h]=d[0],o[h+1]=d[1],o[h+2]=d[2],o[h+3]=255}s.putImageData(r,0,0),t.after&&t.after(s,i);let l=new Ht(n);return l.wrapS=l.wrapT=en,l.anisotropy=t.aniso||4,t.srgb!==!1&&(l.colorSpace=ft),l.needsUpdate=!0,l}var vu=(i,e,t)=>[ds(i[0],e[0],t),ds(i[1],e[1],t),ds(i[2],e[2],t)];function kg(i=512){let e={};e.sand=ar(i,(l,c)=>{let a=Qn(l*24,c*24,5,1),h=Qn(l*6+a*1.5,c*60,3,9),d=Qt(a*.7+h*.5,0,1);return vu([112,86,58],[186,150,104],d)}),e.sandBump=ar(i,(l,c)=>{let a=Qn(l*24,c*24,5,1),h=Qn(l*6+a*1.5,c*60,3,9),d=Qt(a*.6+h*.7,0,1)*255;return[d,d,d]},{srgb:!1}),e.concrete=ar(i,(l,c,a,h)=>{let d=Qn(l*18,c*18,5,3),u=Qn(l*80,c*80,2,4),f=.35+d*.5+(u-.5)*.15,p=Math.abs(Qn(l*7,c*7,3,12)-.5)<.012?.5:1;return f*=p,vu([48,50,54],[128,126,120],Qt(f,0,1))}),e.concreteBump=ar(i,(l,c)=>{let a=Qn(l*18,c*18,5,3)*255;return[a,a,a]},{srgb:!1}),e.rust=ar(i,(l,c)=>{let a=Qn(l*10,c*10,5,5),h=Qn(l*3,c*40,3,7),d=Qt((a-.42)*3.2+(h-.5)*.8,0,1),u=.62+(Qn(l*60,c*60,2,2)-.5)*.25;return vu([u*255,u*255,u*255],[150,70,28],d*.85)}),e.rustRough=ar(i,(l,c)=>{let a=Qn(l*10,c*10,5,5),h=Qn(l*3,c*40,3,7);return[0,(.45+Qt((a-.42)*3.2+(h-.5)*.8,0,1)*.5)*255,0]},{srgb:!1}),e.corr=ar(256,(l,c)=>{let a=(Math.sin(l*cn*16)*.5+.5)*255;return[a,a,a]},{srgb:!1}),e.corr.repeat.set(1,1),e.wood=ar(256,(l,c)=>{let a=Qn(l*4,c*60,4,21),h=Qn(l*12,c*12,2,4);return vu([66,42,24],[150,108,66],Qt(a*.9+h*.2,0,1))});let t=document.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d"),s=n.createRadialGradient(32,32,0,32,32,32);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.25,"rgba(255,255,255,.55)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,64,64),e.glow=new Ht(t),e.glow.colorSpace=ft;let r=document.createElement("canvas");r.width=1024,r.height=256;let o=r.getContext("2d");return o.fillStyle="#05070b",o.fillRect(0,0,1024,256),o.textAlign="center",o.textBaseline="middle",o.font="900 150px system-ui, Arial Black, sans-serif",o.shadowColor="#18ffb0",o.shadowBlur=40,o.fillStyle="#c8fff0",o.fillText("VW FEST",512,120),o.shadowBlur=20,o.font="700 46px system-ui, Arial, sans-serif",o.fillStyle="#ffb347",o.shadowColor="#ff7a00",o.fillText("AIR-COOLED SALVAGE  \xB7  $VWFEST",512,222),e.sign=new Ht(r),e.sign.colorSpace=ft,e.sign.anisotropy=4,e}function _u(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},l=i[0].morphTargetsRelative,c=new vt,a=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(a,f,h),a+=f}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=zg(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);let p=zg(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function zg(i){let e,t,n,s=-1,r=0;for(let a=0;a<i.length;++a){let h=i[a];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),l=new ht(o,t,n),c=0;for(let a=0;a<i.length;++a){let h=i[a];if(h.isInterleavedBufferAttribute){let d=c/t;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<t;p++){let x=h.getComponent(u,p);l.setComponent(u+d,p,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(l.gpuType=s),l}function Wf(i,e){if(e===vf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===qo||e===vl){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===qo)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function yu(i){let t=new DataView(i.buffer,i.byteOffset,i.byteLength).getUint32(0,!0),n=JSON.parse(new TextDecoder().decode(i.subarray(4,4+t))),s=i.byteOffset+4+t+(4-t%4)%4;return{meta:n,view:(o,[l,c])=>new o(i.buffer.slice(s+l,s+l+c*o.BYTES_PER_ELEMENT))}}function Mu(i,e){let t=i(Uint16Array,e.pos),n=new Float32Array(t.length);for(let s=0;s<t.length;s++){let r=s%3;n[s]=e.min[r]+t[s]/65535*e.size[r]}return new ht(n,3)}var bu=(i,e)=>new ht(i(Int8Array,e.nrm),3,!0),$o={};async function Xf(i=["zombies","cars"]){await Promise.all(i.filter(e=>!$o[e]).map(async e=>{let t=await fetch("assets/"+e+".bin");if(!t.ok)throw new Error("missing assets/"+e+".bin");$o[e]=new Uint8Array(await t.arrayBuffer())}))}var jf={},Yf={},cE={},Hg=!1;function hE(){if(Hg)return;Hg=!0;let{meta:i,view:e}=yu($o.cars);for(let t of i){cE[t.tag]=t.tris;let n=new vt;if(n.setAttribute("position",Mu(e,t)),n.setAttribute("normal",bu(e,t)),n.setAttribute("color",new ht(e(Uint8Array,t.col),3,!0)),n.setIndex(new ht(e(Uint16Array,t.idx),1)),n.computeBoundingBox(),jf[t.tag]=n,t.plate){let s=new vt;s.setAttribute("position",new ht(e(Float32Array,t.plate.pos),3)),s.setAttribute("normal",new ht(e(Float32Array,t.plate.nrm),3)),s.setAttribute("uv",new ht(e(Float32Array,t.plate.uv),2)),Yf[t.tag]=s}}}var qf;function uE(){if(qf)return qf;let i=document.createElement("canvas");i.width=256,i.height=96;let e=i.getContext("2d");e.fillStyle="#e9e4d4",e.fillRect(0,0,256,96),e.strokeStyle="#1d3557",e.lineWidth=6,e.strokeRect(5,5,246,86),e.fillStyle="#1d3557",e.font="900 46px Arial Black, Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("VWFEST",128,50);let t=new Ht(i);return t.colorSpace=ft,qf=new ze({map:t,roughness:.6})}var Su=new Map,dE=()=>Su.get(0)||(Su.set(0,new ze({vertexColors:!0,roughness:.55,metalness:.15})),Su.get(0));function Vg(i){let e=Su.get(0);if(!e)return;let t=i>0;e.roughness=t?.34:.55,e.metalness=t?.4:.15}var Gg=new Map;function fE(i,e,t){let n=i+e+"/"+t,s=Gg.get(n);if(s)return s;s=jf[i].clone();let r=s.attributes.color,o=s.attributes.position,l=new ge(e),c=new ge(t??15129792),a=i==="camper";for(let h=0;h<r.count;h++){let d=r.getX(h),u=r.getY(h),f=r.getZ(h);if(Math.abs(d-.247)<.01&&Math.abs(u-.247)<.01&&Math.abs(f-.247)<.01){let p=a&&o.getY(h)>1.04?c:l;r.setXYZ(h,p.r*.85,p.g*.85,p.b*.85)}else d>.975&&u>.975&&f>.975&&r.setXYZ(h,c.r,c.g,c.b)}return Gg.set(n,s),s}var pE=["bug","baja","ghia"],mE=["camper","wagon","safari"],gE=0,xE=0;function Zf(i,e,t,n={}){hE();let s=i==="big"?mE[xE++%3]:pE[gE++%3],r=new De;r.rotation.y=Math.PI;let o=new xe(fE(s,e,t),dE());if(o.userData.noBatch=!0,r.add(o),Yf[s]){let a=new xe(Yf[s],uE());a.userData.noBatch=!0,r.add(a)}let l=new De;l.add(r),n.tilt&&(l.rotation.z=n.tilt);let c=jf[s].boundingBox.getSize(new U);return l.userData.size=[c.x,c.y,c.z],l}var Eu=class{constructor(e){this.T=e,this.cache={};let t=n=>new ze(n);this.sand=t({map:e.sand,bumpMap:e.sandBump,bumpScale:3,roughness:.97,metalness:0,color:13615792}),e.sand.repeat.set(90,90),e.sandBump.repeat.set(90,90),this.concrete=t({map:e.concrete,bumpMap:e.concreteBump,bumpScale:1.5,roughness:.88,metalness:.02}),e.concrete.repeat.set(10,10),e.concreteBump.repeat.set(10,10),this.fence=t({color:9281190,map:e.rust,roughnessMap:e.rustRough,bumpMap:e.corr,bumpScale:2.5,metalness:.75,roughness:1}),this.fenceDark=t({color:3818056,map:e.rust,roughnessMap:e.rustRough,metalness:.7,roughness:1}),this.wood=t({color:16777215,map:e.wood,roughness:.85,metalness:0}),this.tire=t({color:1381655,roughness:.92,metalness:0}),this.glass=t({color:660761,roughness:.08,metalness:.95}),this.chrome=t({color:13620954,roughness:.18,metalness:1}),this.lampBulb=new st({color:new ge(5,3.2,1.4),toneMapped:!1}),this.lampBulbT=new st({color:new ge(1.2,4.5,3.4),toneMapped:!1}),this.headlight=t({color:15328456,emissive:4867120,emissiveIntensity:.6,roughness:.2,metalness:.2}),this.tarp=t({color:4151882,roughness:.95})}paint(e){let t="p"+e;if(this.cache[t])return this.cache[t];let n=new ze({color:e,map:this.T.rust,roughnessMap:this.T.rustRough,metalness:.55,roughness:1});return n.userData.paint=1,this.cache[t]=n}flat(e,t=.8,n=.1){let s="f"+e+t+n;return this.cache[s]||(this.cache[s]=new ze({color:e,roughness:t,metalness:n}))}},vE=[6010272,14733722,14252330,11680302,6197184,13619140,9087050,13803834],Kf=()=>In(vE),jr=(i,e,t,n,s,r,o,l,c=14,a=9)=>{let h=new xe(new Jt(i,c,a),l);return h.scale.set(e,t,n),h.position.set(s,r,o),h},wn=(i,e,t,n,s,r,o)=>{let l=new xe(new ct(i,e,t),o);return l.position.set(n,s,r),l},ks=(i,e,t,n,s,r,o=!0,l=12)=>{let c=new xe(new It(i,i,e,l),r);return o&&(c.rotation.z=Math.PI/2),c.position.set(t,n,s),c};function Wg(i,e,t,n,s=.34){let r=new De;return r.add(ks(s,.22,0,0,0,i.tire,!0,14)),r.add(ks(s*.55,.24,0,0,0,i.chrome,!0,8)),r.position.set(e,t,n),r}function Xg(i,e,t={}){let n=new De,s=i.paint(e);n.add(jr(1,.9,.5,1.95,0,.78,0,s,18,10)),n.add(jr(1,.72,.42,.95,0,1.17,.12,i.glass,16,8)),n.add(jr(1,.74,.28,.95,0,1.42,.12,s,16,8));for(let r of[-1,1])for(let o of[-1,1])n.add(jr(1,.22,.32,.55,r*.86,.5,o*1.2,s,10,8)),t.missing&&r===1&&o===1||n.add(Wg(i,r*.84,.34,o*1.2));for(let r of[-1,1])n.add(jr(.12,1,1,1,r*.55,.92,-1.78,i.headlight,8,6));if(n.add(wn(1.5,.08,.1,0,.44,-2.02,i.chrome)),n.add(wn(1.5,.08,.1,0,.44,2.02,i.chrome)),n.add(wn(.5,.1,.05,0,.78,1.92,i.fenceDark)),t.door){let r=wn(.05,.5,1,.92,.9,-.2,s);r.rotation.y=.9,r.position.x=1.25,r.position.z=-.85,n.add(r)}return t.tilt&&(n.rotation.z=t.tilt),n.userData.size=[1.9,1.7,4.1],n}function qg(i,e,t=15129792,n={}){let s=new De,r=i.paint(e),o=i.paint(t);s.add(wn(2,.85,4.5,0,.78,0,r)),s.add(wn(1.96,.9,4.4,0,1.66,0,o)),s.add(wn(2.04,.1,4.55,0,1.19,0,r)),s.add(wn(2,.08,4.5,0,2.15,0,r));for(let h of[-1,1])s.add(wn(.03,.55,3.8,h*.99,1.7,.1,i.glass)),s.add(wn(.03,.14,.7,h*1.01,.82,.8,i.fenceDark));s.add(wn(1.7,.6,.04,0,1.68,-2.2,i.glass));let l=wn(1.1,.8,.1,-.5,.78,-2.28,r);l.rotation.y=.3;let c=wn(1.1,.8,.1,.5,.78,-2.28,r);c.rotation.y=-.3,s.add(l,c);let a=ks(.17,.04,0,.85,-2.43,i.chrome,!1,14);a.rotation.x=Math.PI/2,s.add(a);for(let h of[-1,1]){s.add(jr(.13,1,1,.6,h*.72,.8,-2.36,i.headlight,8,6));for(let d of[-1.4,1.5])n.missing&&h===1&&d===1.5||s.add(Wg(i,h*.95,.38,d,.38))}return s.add(wn(2.1,.1,.12,0,.45,-2.45,i.chrome)),s.add(wn(2.1,.1,.12,0,.45,2.3,i.chrome)),n.tilt&&(s.rotation.z=n.tilt),s.userData.size=[2.1,2.2,4.6],s}function Tl(i,e=4){let t=new De;for(let n=0;n<e;n++){let s=new xe(new _i(.4,.18,8,14),i.tire);s.rotation.x=Math.PI/2,s.position.set(ee(-.04,.04),.18+n*.3,ee(-.04,.04)),t.add(s)}return t.userData.size=[1,.3*e+.1,1],t.userData.hd={kind:"tyre"},t}function lr(i,e){let t=new De;t.add(ks(.3,.9,0,.45,0,i.paint(e),!1,12));for(let n of[.2,.7])t.add(ks(.31,.04,0,n,0,i.fenceDark,!1,12));return t.userData.size=[.62,.9,.62],t.userData.hd={kind:"drum",color:e},t}function ei(i,e=1){let t=new De;t.add(wn(e,e,e,0,e/2,0,i.wood));for(let[n,s]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(wn(.07,e*1.02,.07,n*e/2,e/2,s*e/2,i.fenceDark));return t.userData.size=[e,e,e],t.userData.hd={kind:"crate",s:e},t}function wl(i,e){let t=new De;t.add(ks(.09,5.2,0,2.6,0,i.fenceDark,!1,8)),t.add(wn(.12,.12,1.1,0,5.15,-.5,i.fenceDark)),t.add(wn(.5,.12,.3,0,5.08,-1.1,i.fenceDark));let n=new xe(new Jt(.17,8,6),e?i.lampBulbT:i.lampBulb);return n.position.set(0,4.98,-1.1),n.userData.bulb=!0,t.add(n),t.userData.size=[.4,5.2,.4],t.userData.bulbPos=new U(0,4.9,-1.1),t}function Yg(i){let e=new De,t=i.flat(3103288,.9,0),n=ee(1.6,3.2);if(e.add(ks(.22,n,0,n/2,0,t,!1,8)),e.add(jr(.22,1,1,1,0,n,0,t,8,5)),Math.random()<.8){let s=ks(.13,.7,.4,n*.6,0,t,!1,6);e.add(s),e.add(ks(.13,.5,.4+.32,n*.6+.3,0,t,!1,6)),e.children[e.children.length-1].rotation.z=0}return e}function jg(i,e){let t=new xe(new Ba(e,0),i.flat(7035464,.95,0));t.scale.set(ee(.9,1.5),ee(.5,.9),ee(.9,1.4)),t.rotation.set(ee(3),ee(3),ee(3)),t.position.y=e*.3;let n=new De;return n.add(t),n}var yi=(i,e,t={})=>Zf("small",e,null,t),Ri=(i,e,t,n={})=>Zf("big",e,t,n);var Al=new U;function Ci(i,e,t,n,s,r){let o=2*Math.PI*s/4,l=Math.max(r-2*s,0),c=Math.PI/4;Al.copy(e),Al[n]=0,Al.normalize();let a=.5*o/(o+l),h=1-Al.angleTo(i)/c;return Math.sign(Al[t])===1?h*a:l/(o+l)+a+a*(1-h)}var Jo=class i extends ct{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let c=new U,a=new U,h=new U(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,x=new U,g=.5/o;for(let m=0,_=0;m<d.length;m+=3,_+=2)switch(c.fromArray(d,m),a.copy(c),a.x-=Math.sign(a.x)*g,a.y-=Math.sign(a.y)*g,a.z-=Math.sign(a.z)*g,a.normalize(),d[m+0]=h.x*Math.sign(c.x)+a.x*r,d[m+1]=h.y*Math.sign(c.y)+a.y*r,d[m+2]=h.z*Math.sign(c.z)+a.z*r,u[m+0]=a.x,u[m+1]=a.y,u[m+2]=a.z,Math.floor(m/p)){case 0:x.set(1,0,0),f[_+0]=Ci(x,a,"z","y",r,n),f[_+1]=1-Ci(x,a,"y","z",r,t);break;case 1:x.set(-1,0,0),f[_+0]=1-Ci(x,a,"z","y",r,n),f[_+1]=1-Ci(x,a,"y","z",r,t);break;case 2:x.set(0,1,0),f[_+0]=1-Ci(x,a,"x","z",r,e),f[_+1]=Ci(x,a,"z","x",r,n);break;case 3:x.set(0,-1,0),f[_+0]=1-Ci(x,a,"x","z",r,e),f[_+1]=1-Ci(x,a,"z","x",r,n);break;case 4:x.set(0,0,1),f[_+0]=1-Ci(x,a,"x","y",r,e),f[_+1]=1-Ci(x,a,"y","x",r,t);break;case 5:x.set(0,0,-1),f[_+0]=Ci(x,a,"x","y",r,e),f[_+1]=1-Ci(x,a,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Bt=(i,e)=>i+Math.random()*(e-i);function Pl(i,e){let t=document.createElement("canvas");t.width=t.height=i,e(t.getContext("2d"),i);let n=new Ht(t);return n.wrapS=n.wrapT=en,n.anisotropy=4,n}var _E=(i,e)=>Pl(512,(t,n)=>{t.fillStyle=i,t.fillRect(0,0,n,n);for(let s=0;s<2600;s++){t.strokeStyle=`rgba(255,255,255,${Bt(.01,.04)})`;let r=Bt(0,n);t.beginPath(),t.moveTo(Bt(0,n),r),t.lineTo(Bt(0,n),r+Bt(-2,2)),t.stroke()}for(let s=0;s<160;s++){t.strokeStyle=e,t.globalAlpha=Bt(.15,.5),t.lineWidth=Bt(.5,1.6);let r=Bt(0,n),o=Bt(0,n);t.beginPath(),t.moveTo(r,o),t.lineTo(r+Bt(-30,30),o+Bt(-6,6)),t.stroke()}t.globalAlpha=1;for(let s=0;s<900;s++)t.fillStyle=`rgba(0,0,0,${Bt(.1,.35)})`,t.fillRect(Bt(0,n),Bt(0,n),1.5,1.5)}),yE=()=>Pl(256,(i,e)=>{let t=i.createImageData(e,e);for(let n=0;n<t.data.length;n+=4){let s=120+Math.random()*90;t.data[n]=t.data[n+1]=t.data[n+2]=s,t.data[n+3]=255}i.putImageData(t,0,0)}),ME=()=>Pl(256,(i,e)=>{i.fillStyle="rgb(128,128,255)",i.fillRect(0,0,e,e);for(let t=0;t<5e3;t++){let n=Bt(0,e),s=Bt(0,e),r=Bt(1,2.2),o=i.createRadialGradient(n-r*.4,s-r*.4,0,n,s,r);o.addColorStop(0,"rgb(90,90,255)"),o.addColorStop(1,"rgba(170,170,255,0)"),i.fillStyle=o,i.beginPath(),i.arc(n,s,r,0,7),i.fill()}}),bE=()=>Pl(512,(i,e)=>{i.fillStyle="#4a2c17",i.fillRect(0,0,e,e);for(let t=0;t<260;t++){i.strokeStyle=`rgba(${Bt(20,60)},${Bt(10,30)},5,${Bt(.15,.45)})`,i.lineWidth=Bt(.5,3),i.beginPath();let n=Bt(0,e);i.moveTo(0,n);for(let s=0;s<=16;s++)i.lineTo(s/16*e,n+=Bt(-3,3)+Math.sin(s*.7+t)*1.4);i.stroke()}for(let t=0;t<40;t++)i.fillStyle="rgba(210,170,120,0.08)",i.fillRect(Bt(0,e),Bt(0,e),Bt(10,60),Bt(1,3))}),Rl;function SE(){if(Rl)return Rl;let i=yE(),e=ME(),t=(n,s,r,o)=>new ze({map:_E(n,s),roughnessMap:i,roughness:r,metalness:o,color:16777215});Rl={blued:t("#1b1e24","#9aa3ad",.42,.9),park:t("#34372f","#8d9184",.78,.55),steel:t("#4a4e54","#cfd4da",.3,.95),poly:new ze({color:1908256,roughness:.72,metalness:0,normalMap:e,normalScale:new oe(.9,.9)}),polyTan:new ze({color:7299146,roughness:.75,normalMap:e,normalScale:new oe(.6,.6)}),wood:new ze({map:bE(),roughness:.5,metalness:0,color:16777215}),brass:new ze({color:11569722,metalness:1,roughness:.3}),dot:new st({color:new ge(.4,2.2,.8),toneMapped:!1}),dotR:new st({color:new ge(2.4,.3,.2),toneMapped:!1}),glass:new ze({color:727586,metalness:.9,roughness:.05,emissive:401456}),glove:new ze({color:1974306,roughness:.85,normalMap:e,normalScale:new oe(.4,.4)}),sleeve:new ze({color:3884598,roughness:.95,normalMap:e,normalScale:new oe(.25,.25)})};for(let n of Object.values(Rl))n.map&&(n.map.colorSpace=ft);return Rl}function Un(i,e,t,n,{x:s=0,bevel:r=.0025,curve:o=6}={}){let l=new Bo;e.forEach(([d,u],f)=>f?l.lineTo(d,u):l.moveTo(d,u));let c=new Ya(l,{depth:t-r*2,bevelEnabled:!0,bevelThickness:r,bevelSize:r,bevelSegments:2,curveSegments:o});c.translate(0,0,-(t-r*2)/2),c.rotateY(-Math.PI/2);let a=c.attributes.uv;for(let d=0;d<a.count;d++)a.setXY(d,a.getX(d)*4,a.getY(d)*4);let h=new xe(c,n);return h.position.x=s,i.add(h),h}var Mt=(i,e,t,n,s,r,o,l,c=.004,a=0)=>{let h=new xe(new Jo(e,t,n,2,c),l);return h.position.set(s,r,o),h.rotation.x=a,i.add(h),h},$f=(i,e,t,n,s,r,o,l,c=0)=>{let a=new xe(new ct(e,t,n),l);return a.position.set(s,r,o),a.rotation.x=c,i.add(a),a},Ft=(i,e,t,n,s,r,o,l=20,c)=>{let a=new xe(new It(c??e,e,t,l,1),o);return a.rotation.x=Math.PI/2,a.position.set(n,s,r),i.add(a),a},Jf=(i,e,t,n,s,r,o)=>{let l=new xe(new _i(e,t,8,24),o);return l.position.set(n,s,r),i.add(l),l};function Cl(i,e,t,n){let s=new xe(new _i(.022,.0035,6,18,Math.PI*1.15),n.poly);s.rotation.set(0,Math.PI/2,Math.PI*.93),s.position.set(0,t,e),i.add(s);let r=new xe(new _i(.012,.003,6,10,Math.PI*.6),n.steel);r.rotation.set(0,Math.PI/2,Math.PI*1.15),r.position.set(0,t+.006,e+.004),i.add(r)}function Tu(i,e,t,n,s){Mt(i,.004,.009,.006,0,n+.004,e,s.blued,.001);let r=Ft(i,.0016,.002,0,n+.006,e+.003,s.dot,8);r.rotation.x=0,r.rotation.z=Math.PI/2,r.rotation.y=Math.PI/2;for(let o of[-1,1]){Mt(i,.005,.009,.008,o*.0055,n+.004,t,s.blued,.001);let l=Ft(i,.0013,.002,o*.0055,n+.006,t-.0045,s.dotR,8);l.rotation.x=0}}var wu={pistol(i,e){let t=new De;i.add(t),i.userData.slide=t,Un(t,[[.02,0],[-.17,0],[-.172,.022],[-.165,.03],[.012,.03],[.02,.022]],.026,e.blued,{bevel:.002}),Mt(t,.0262,.012,.032,0,.014,-.045,e.steel,.001);for(let n of[-1,1])for(let s=0;s<9;s++)Mt(t,.0015,.022,.0016,n*.0132,.014,.008-s*.0036,e.steel,4e-4);for(let n of[-1,1])for(let s=0;s<6;s++)Mt(t,.0015,.016,.0016,n*.0132,.012,-.13-s*.0036,e.steel,4e-4);Tu(t,-.16,.008,.03,e),Ft(t,.0075,.012,0,.012,-.172,e.steel,20),Ft(t,.0045,.014,0,.012,-.175,e.poly,12),Un(i,[[.03,-.002],[-.16,-.002],[-.16,-.012],[-.06,-.016],[-.05,-.022],[0,-.018],[.006,-.03],[.022,-.13],[.06,-.13],[.045,-.02],[.034,-.008]],.028,e.poly,{bevel:.003});for(let n=0;n<4;n++)Mt(i,.0285,.003,.012,0,-.012,-.075-n*.012,e.poly,.001);return Cl(i,-.02,-.03,e),Mt(i,.03,.006,.042,0,-.133,.042,e.blued,.002,-.2),Mt(i,.004,.006,.014,.0145,-.008,-.02,e.steel,.001),Mt(i,.0035,.008,.02,.0145,.005,.02,e.steel,.001),Mt(i,.012,.014,.008,0,.018,.032,e.steel,.002),{muzzle:-.18,eject:-.045,pos:[.17,-.17,-.38],lz:-.04}},smg(i,e){Un(i,[[.09,0],[-.2,0],[-.2,.05],[.09,.05]],.05,e.park,{bevel:.004}),Ft(i,.016,.12,0,.026,-.26,e.blued,20);for(let t=0;t<6;t++)Jf(i,.017,.0022,0,.026,-.22-t*.015,e.steel).rotation.y=0;for(let t=0;t<6;t++)Mt(i,.052,.003,.012,0,.051,-.18+t*.03,e.blued,.001);Tu(i,-.19,.06,.052,e),Mt(i,.036,.16,.026,0,-.08,-.06,e.blued,.004,.12);for(let t=0;t<8;t++)Mt(i,.038,.004,.028,0,-.01-t*.018,-.06+t*.002,e.steel,.001,.12);return Un(i,[[0,0],[.03,0],[.05,-.11],[.02,-.11]],.032,e.poly,{bevel:.004}),Cl(i,-.005,-.012,e),Ft(i,.006,.2,.018,.02,.18,e.steel,10),Ft(i,.006,.2,-.018,.02,.18,e.steel,10),Mt(i,.05,.07,.012,0,0,.28,e.poly,.004),Mt(i,.012,.012,.03,.03,.03,.02,e.steel,.003),{muzzle:-.33,eject:-.05,pos:[.19,-.19,-.4],lz:-.2}},shotgun(i,e){Un(i,[[.06,-.01],[-.14,-.01],[-.14,.055],[.04,.055],[.06,.04]],.05,e.blued,{bevel:.004}),Ft(i,.0125,.6,0,.038,-.44,e.blued,22),Ft(i,.0145,.52,0,0,-.4,e.blued,22),Jf(i,.016,.003,0,0,-.66,e.steel);let t=new xe(new Jt(.003,10,8),e.brass);t.position.set(0,.052,-.735),i.add(t);let n=Un(i,[[-.28,-.02],[-.46,-.02],[-.46,.02],[-.28,.02]],.05,e.wood,{bevel:.008});for(let s=0;s<9;s++)Mt(i,.052,.004,.006,0,-.022,-.3-s*.017,e.wood,.002);return i.userData.pump=n,Un(i,[[.06,.04],[.32,.03],[.34,.05],[.36,-.1],[.3,-.11],[.1,-.03],[.06,-.01]],.042,e.wood,{bevel:.008}),Mt(i,.044,.15,.02,0,-.03,.355,e.poly,.006,-.12),Cl(i,.035,-.02,e),Mt(i,.051,.012,.05,0,.022,-.05,e.steel,.002),{muzzle:-.75,eject:-.05,pos:[.2,-.2,-.4],lz:-.38}},rifle(i,e){Un(i,[[.12,0],[-.17,0],[-.17,.045],[.12,.045]],.052,e.park,{bevel:.004});for(let n=0;n<18;n++)$f(i,.042,.004,.006,0,.049,-.16+n*.016,e.blued);Un(i,[[-.17,-.005],[-.44,-.005],[-.44,.05],[-.17,.05]],.056,e.polyTan,{bevel:.006});for(let n=0;n<7;n++)for(let s of[-1,1])$f(i,.004,.018,.022,s*.028,.022,-.2-n*.034,e.poly);Ft(i,.0095,.26,0,.022,-.56,e.blued,18),Ft(i,.016,.05,0,.022,-.71,e.park,6);for(let n=0;n<3;n++)Mt(i,.004,.006,.03,.017,.03,-.71,e.poly,.001).rotation.z=n;Mt(i,.008,.045,.012,0,.07,-.43,e.park,.002),Ft(i,.019,.1,0,.1,-.05,e.blued,24),Ft(i,.023,.03,0,.1,-.11,e.blued,24),Ft(i,.021,.025,0,.1,.01,e.blued,24);let t=Ft(i,.019,.002,0,.1,-.126,e.glass,24);Mt(i,.024,.03,.05,0,.068,-.05,e.park,.003),Un(i,[[0,0],[-.06,0],[-.06,-.12],[-.03,-.14],[0,-.12]],.03,e.park,{bevel:.003}).rotation.x=-.15;for(let n=0;n<6;n++)$f(i,.032,.003,.03,0,-.03-n*.02,-.03+n*.003,e.blued,-.15);return Un(i,[[.03,-0],[.07,-0],[.09,-.11],[.055,-.115]],.032,e.poly,{bevel:.004}),Cl(i,0,-.012,e),Ft(i,.014,.14,0,.025,.19,e.poly,16),Un(i,[[.2,.05],[.36,.045],[.36,-.07],[.33,-.08],[.2,0]],.044,e.polyTan,{bevel:.006}),Mt(i,.046,.13,.014,0,-.012,.365,e.poly,.005),Mt(i,.014,.014,.034,.03,.03,0,e.steel,.003),{muzzle:-.74,eject:-.03,pos:[.2,-.2,-.4],lz:-.3}},lmg(i,e){Un(i,[[.12,-.01],[-.2,-.01],[-.2,.06],[.12,.06]],.07,e.park,{bevel:.005}),Mt(i,.075,.03,.2,0,.075,-.06,e.park,.004);for(let t=0;t<12;t++)Mt(i,.05,.005,.008,0,.093,-.15+t*.016,e.blued,.001);Ft(i,.024,.36,0,.025,-.38,e.blued,22);for(let t=0;t<14;t++)Jf(i,.026,.004,0,.025,-.24-t*.02,e.park);Ft(i,.012,.16,0,.025,-.64,e.blued,16),Ft(i,.018,.06,0,.025,-.73,e.park,8),Mt(i,.13,.13,.15,0,-.1,-.03,e.polyTan,.012);for(let t=0;t<5;t++)Mt(i,.132,.006,.152,0,-.15+t*.025,-.03,e.poly,.002);for(let t=0;t<6;t++)Ft(i,.005,.03,.04,.05,-.01+t*.011,e.brass,8).rotation.set(0,0,Math.PI/2);Un(i,[[.04,-.01],[.08,-.01],[.1,-.12],[.065,-.125]],.034,e.poly,{bevel:.004}),Cl(i,.01,-.02,e),Un(i,[[.12,.05],[.4,.04],[.4,-.08],[.36,-.09],[.12,-.01]],.05,e.poly,{bevel:.007}),Tu(i,-.66,.08,.093,e);for(let t of[-1,1]){let n=Ft(i,.005,.18,t*.03,-.05,-.62,e.steel,8);n.rotation.x=Math.PI/2+.35}return{muzzle:-.76,eject:-.02,pos:[.2,-.21,-.4],lz:-.3}},akimbo(i,e){let t=new De;t.position.set(-.12,-.01,.02),t.rotation.y=.22,t.rotation.z=.08;let n=new De;n.position.set(.12,-.01,0),n.rotation.y=-.12,n.rotation.z=-.04,i.add(t,n);let s=wu.pistol(t,e),r=wu.pistol(n,e),o=new pt;o.position.set(0,.012,s.muzzle),t.add(o);let l=new pt;l.position.set(0,.012,r.muzzle),n.add(l),Mt(t,.048,.04,.07,.01,-.09,.01,e.glove,.012),Mt(n,.048,.04,.07,-.01,-.09,0,e.glove,.012);let c=new xe(new It(.032,.04,.28,12),e.sleeve);c.rotation.set(Math.PI/2,.4,.2),c.position.set(-.08,-.16,.16),i.add(c);let a=new xe(new It(.032,.04,.28,12),e.sleeve);return a.rotation.set(Math.PI/2,-.2,-.15),a.position.set(.08,-.16,.16),i.add(a),{muzzle:r.muzzle,eject:-.04,pos:[0,-.16,-.36],lz:0,akimbo:!0,muzzles:[o,l],slides:[t.userData.slide,n.userData.slide]}},lever(i,e){Ft(i,.011,.62,0,.03,-.42,e.blued,18),Ft(i,.016,.18,0,.012,-.22,e.steel,16),Un(i,[[.02,.02],[.28,.015],[.3,-.08],[.24,-.09],[.06,-.01]],.04,e.wood,{bevel:.006}),Mt(i,.038,.12,.016,0,-.02,.29,e.poly,.004);let t=new xe(new _i(.045,.004,6,16,Math.PI),e.steel);return t.rotation.set(0,Math.PI/2,Math.PI),t.position.set(0,-.04,.02),i.add(t),i.userData.pump=t,Tu(i,-.7,.02,.045,e),Ft(i,.008,.04,0,.03,-.74,e.blued,12),Mt(i,.03,.05,.04,0,-.02,.04,e.wood,.004),{muzzle:-.76,eject:0,pos:[.18,-.18,-.42],lz:-.28}},nailer(i,e){Mt(i,.09,.11,.22,0,0,-.02,e.park,.008),Mt(i,.07,.06,.16,0,-.02,.12,e.polyTan,.006),Ft(i,.012,.16,0,.01,-.2,e.steel,14),Ft(i,.02,.04,0,.01,-.28,e.blued,12);for(let s=0;s<5;s++)Mt(i,.004,.012,.05,.048,.02-s*.012,-.02,e.brass,.001);let t=new xe(new _i(.05,.006,6,14),e.poly);t.rotation.x=Math.PI/2,t.position.set(.02,-.02,.2),i.add(t),Mt(i,.035,.08,.04,0,-.08,.02,e.poly,.004,.3);let n=Ft(i,.004,.02,0,.01,-.31,e.dot,8);return n.material=e.dot,{muzzle:-.32,eject:-.02,pos:[.2,-.18,-.36],lz:-.08}},sawed(i,e){Ft(i,.014,.28,.012,.02,-.16,e.blued,16),Ft(i,.014,.28,-.012,.02,-.16,e.blued,16),Mt(i,.05,.04,.08,0,0,-.02,e.steel,.004),Un(i,[[0,0],[.02,-.02],[.05,-.12],[.02,-.13],[-.01,-.02]],.032,e.wood,{bevel:.005}),Mt(i,.02,.03,.02,.03,.03,0,e.steel,.002);let t=new xe(new Jt(.004,8,6),e.brass);return t.position.set(0,.04,-.3),i.add(t),{muzzle:-.31,eject:-.02,pos:[.18,-.16,-.34],lz:-.02}}},Qf;function EE(){if(Qf)return Qf;let i=Pl(128,(e,t)=>{let n=t/2,s=e.createRadialGradient(n,n,0,n,n,n);s.addColorStop(0,"rgba(255,250,230,1)"),s.addColorStop(.25,"rgba(255,190,90,0.9)"),s.addColorStop(1,"rgba(255,90,20,0)"),e.fillStyle=s;for(let r=0;r<7;r++)e.save(),e.translate(n,n),e.rotate(r/7*6.283+Bt(-.2,.2)),e.beginPath(),e.moveTo(0,-6),e.lineTo(n*Bt(.7,1),0),e.lineTo(0,6),e.fill(),e.restore();e.beginPath(),e.arc(n,n,n*.35,0,7),e.fill()});return i.wrapS=i.wrapT=Cn,Qf=new st({map:i,color:new ge(3,2.2,1.2),blending:ln,transparent:!0,depthWrite:!1,side:Ot,toneMapped:!1})}function Zg(i,e=!0){let t=SE(),n=new De,s=(wu[i]||wu.rifle)(n,t);if(!e){let d=new pt;return n.userData={muzzle:d,eject:d,base:new U},n}if(!s.akimbo){Mt(n,.05,.08,.075,0,-.065,.035,t.glove,.018).rotation.x=.25;for(let p=0;p<3;p++)Mt(n,.052,.016,.03,.002,-.04-p*.02,0,t.glove,.007);let d=new xe(new It(.034,.042,.32,16),t.sleeve);d.rotation.x=Math.PI/2-.25,d.position.set(.02,-.13,.22),n.add(d);let u=Mt(n,.055,.05,.09,i==="pistol"?-.018:-.028,i==="pistol"?-.07:-.03,s.lz,t.glove,.016),f=new xe(new It(.034,.042,.34,16),t.sleeve);f.rotation.set(Math.PI/2-.1,.35,0),f.position.set(-.1,-.12,s.lz+.22),n.add(f)}n.traverse(d=>{d.isMesh&&(d.castShadow=!1)});let r=new pt;r.position.set(0,i==="pistol"?.012:.022,s.muzzle),n.add(r);let o=new pt;o.position.set(.04,.03,s.eject),n.add(o);let l=new De,c=EE();for(let d=0;d<2;d++){let u=new xe(new an(.06,.16),c);u.rotation.set(Math.PI/2,d*Math.PI/2,0),u.position.z=-.07,l.add(u)}let a=new xe(new an(.12,.12),c);l.add(a),l.position.copy(r.position),l.visible=!1,n.add(l);let h=0;return n.traverse(d=>{d.isMesh&&(h+=(d.geometry.index?d.geometry.index.count:d.geometry.attributes.position.count)/3)}),n.userData={muzzle:r,eject:o,flash:l,slide:n.userData.slide,slides:s.slides||null,muzzles:s.muzzles||null,pump:n.userData.pump,base:new U(...s.pos),tris:Math.round(h)},n.userData.base.z-=.1,n.userData.base.x-=.03,n.position.copy(n.userData.base),n.scale.setScalar(.9),n}var jt={pistol:{id:"pistol",name:"Dustdevil .45",dmg:30,rpm:380,auto:!1,mag:12,reserve:60,reload:1.25,spread:.004,pellets:1,kick:.01,shake:.12,price:0,head:3.2,snd:"pistol",range:90},smg:{id:"smg",name:"Rattler SMG",dmg:22,rpm:820,auto:!0,mag:32,reserve:160,reload:1.6,spread:.014,pellets:1,kick:.006,shake:.08,price:600,head:2.4,snd:"smg",range:80},shotgun:{id:"shotgun",name:"Sidewinder 12g",dmg:17,rpm:78,auto:!1,mag:6,reserve:42,reload:.5,perShell:!0,spread:.055,pellets:9,kick:.04,shake:.4,price:1200,head:2,snd:"shotgun",range:30},rifle:{id:"rifle",name:"Ridgeback AR",dmg:42,rpm:620,auto:!0,mag:30,reserve:150,reload:1.9,spread:.007,pellets:1,kick:.013,shake:.18,price:1800,head:2.6,snd:"rifle",range:120},lmg:{id:"lmg",name:"Hog Hammer LMG",dmg:40,rpm:700,auto:!0,mag:100,reserve:300,reload:3.8,spread:.012,pellets:1,kick:.012,shake:.2,price:0,crateOnly:!0,head:2.4,snd:"lmg",range:110},akimbo:{id:"akimbo",name:"Twin Dustdevils",dmg:26,rpm:500,auto:!1,mag:24,reserve:96,reload:1.7,spread:.009,pellets:1,kick:.008,shake:.1,price:750,head:2.6,snd:"akimbo",range:70,akimbo:!0},lever:{id:"lever",name:"Barn Lever",dmg:70,rpm:55,auto:!1,mag:7,reserve:35,reload:.48,perShell:!0,spread:.002,pellets:1,kick:.02,shake:.16,price:1500,head:3,snd:"lever",range:110},nailer:{id:"nailer",name:"Shop Nailer",dmg:14,rpm:900,auto:!0,mag:36,reserve:144,reload:1.5,spread:.022,pellets:1,kick:.003,shake:.05,price:800,head:1.4,snd:"nailer",range:22},sawed:{id:"sawed",name:"Sawed-off",dmg:24,rpm:200,auto:!1,mag:2,reserve:20,reload:1.7,spread:.11,pellets:8,kick:.06,shake:.55,price:0,crateOnly:!0,head:1.5,snd:"sawed",range:14}},Il=["smg","shotgun","rifle","lmg","sawed","lever"],RR=new ze({color:2895669,metalness:.9,roughness:.34}),CR=new ze({color:5593439,metalness:.85,roughness:.28}),PR=new ze({color:4072982,metalness:0,roughness:.55}),IR=new ze({color:1626528,metalness:.4,roughness:.3,emissive:678469,emissiveIntensity:.8}),LR=new ze({color:12946539,roughness:.7}),DR=new ze({color:4016698,roughness:.9}),NR=new ze({color:1776928,roughness:.8});function Ll(i,e=!0){return Zg(i,e)}var ep={discount:.5,pickup:1.35,deliver:1.9,board:1.7,radio:3.6,decay:.5,lots:{C:{x0:24,x1:50.4,z0:2,z1:22},D:{x0:-50.4,x1:-24,z0:-34,z1:-2},E:{x0:4,x1:24.4,z0:-76.4,z1:-52}},gates:[{id:"AB",price:1250,name:"Back lot",blurb:"The back lot awaits",areas:["A","B"],x:0,z:-24,w:6,axis:"x",stand:{A:{x:0,z:-22.2},B:{x:0,z:-25.8}}},{id:"AC",price:1500,name:"Lot C",blurb:"Fuel yard open",areas:["A","C"],x:24,z:12,w:5,axis:"z",stand:{A:{x:22.2,z:12},C:{x:25.8,z:12}}},{id:"AD",price:1750,name:"Lot D",blurb:"Bus barn open",areas:["A","D"],x:-24,z:-14,w:5,axis:"z",stand:{A:{x:-22.2,z:-14},D:{x:-25.8,z:-14}}},{id:"SD",price:900,name:"Side access",blurb:"Side gate open",areas:["B","D"],x:-24,z:-30,w:4.2,axis:"z",stand:{B:{x:-22.2,z:-30},D:{x:-25.8,z:-30}}},{id:"BE",price:2e3,name:"Lot E",blurb:"Radio yard open",areas:["B","E"],x:12,z:-52,w:5,axis:"x",stand:{B:{x:12,z:-50.2},E:{x:12,z:-53.8}}}],jobs:[{id:"fuel",title:"Fuel Run",kind:"carry",gate:"AC",area:"A",need:3,pts:400,power:"double",pad:{x:19.2,z:12},items:[{id:"f0",x:15,z:19},{id:"f1",x:-16,z:18},{id:"f2",x:6,z:4}]},{id:"bus",title:"Board the Bus",kind:"board",gate:"AD",area:"A",need:4,pts:500,power:"ammo",pad:{x:-15,z:4.2},items:[{id:"b0",x:-16.45,z:.2},{id:"b1",x:-16.45,z:2.1},{id:"b2",x:-13.55,z:.2},{id:"b3",x:-13.55,z:2.1}]},{id:"carb",title:"Carb Hunt",kind:"carry",gate:"SD",area:"B",need:1,pts:350,power:"double",pad:{x:-18.2,z:-30},items:[{id:"carb",x:-6,z:20}]},{id:"radio",title:"Radio Hold",kind:"radio",gate:"BE",area:"B",need:20,pts:600,power:"ammo",pad:{x:8,z:-42},items:[]},{id:"parts",title:"Part Collection",kind:"carry",gate:"",area:"C",need:3,pts:450,power:"double",pad:{x:40,z:5.5},items:[{id:"p0",x:32,z:18},{id:"p1",x:46,z:16},{id:"p2",x:36,z:9}]},{id:"clear",title:"Clear Lot D",kind:"clear",gate:"",area:"D",need:8,pts:500,power:"ammo",pad:{x:-37,z:-18},items:[]}]};var Gt=ep,tp=-24;function Wi(i,e,t="junkyard"){if(typeof e!="number")return i>tp?"A":"B";if(t!=="junkyard")return e>tp?"A":"B";let n=ep.lots;for(let s of["C","D","E"]){let r=n[s];if(i>r.x0&&i<r.x1&&e>r.z0&&e<r.z1)return s}return e>tp?"A":(e>=-52,"B")}function Qo(i){let e=new Set((i||[]).filter(n=>n&&n.open).map(n=>n.id)),t=new Set(["A"]);return e.has("AB")&&t.add("B"),e.has("AC")&&t.add("C"),(e.has("AD")||e.has("SD"))&&t.add("D"),e.has("BE")&&t.add("E"),t}function Kg(i,e){return i.stand&&i.stand[e]||{x:i.x,z:i.z}}function wE(i,e,t){if(!i||!e||i===e)return i===e?[]:null;let n=new Map;for(let c of t||[]){if(!c||!c.open||!c.areas||c.areas.length<2)continue;let[a,h]=c.areas;n.has(a)||n.set(a,[]),n.has(h)||n.set(h,[]),n.get(a).push(c),n.get(h).push(c)}let s=[i],r=new Map([[i,null]]);for(;s.length;){let c=s.shift();if(c===e)break;for(let a of n.get(c)||[]){let h=a.areas[0]===c?a.areas[1]:a.areas[0];r.has(h)||(r.set(h,{via:a,from:c}),s.push(h))}}if(!r.has(e))return null;let o=[],l=e;for(;r.get(l);)o.push(r.get(l).via),l=r.get(l).from;return o.reverse(),o}function $g(i,e,t,n,s,r=0){let o=Wi(i,e,t);if(!n||o===n)return null;let l=wE(o,n,s);if(!l||!l.length)return null;let c=l[0],a=c.areas[0]===o?c.areas[1]:c.areas[0],h=c.axis!=="z",d=Kg(c,o),u=Kg(c,a),f=h?Math.sign(u.z-d.z)||-1:Math.sign(u.x-d.x)||1,p=h?e:i,x=h?c.z:c.x,g=(p-x)*f,m=Math.max(.25,(c.w||6)/2-1.05),_=Math.max(-m,Math.min(m,r||0)),b=x+f*1.55;return{x:h?c.x+_:b,z:h?b:c.z+_,ex:h?c.x:b,ez:h?b:c.z,gate:c.id,next:a,progress:g,crossZ:h,gx:c.x,gz:c.z}}var On=-24;function Au(i,e="#18d1a0",t=512,n=256){let s=document.createElement("canvas");s.width=t,s.height=n;let r=s.getContext("2d");r.fillStyle="rgba(8,12,16,0.82)",r.fillRect(0,0,t,n),r.strokeStyle=e,r.lineWidth=6,r.strokeRect(8,8,t-16,n-16),r.textAlign="center",r.textBaseline="middle",i.forEach((l,c)=>{r.font=`${l.w||700} ${l.s}px system-ui, "Segoe UI", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji"`,r.fillStyle=l.c||"#fff",r.fillText(l.t,t/2,l.y)});let o=new Ht(s);return o.colorSpace=ft,o.anisotropy=4,o}function AE(){try{let i=document.createElement("canvas");i.width=i.height=32;let e=i.getContext("2d");e.textBaseline="middle",e.textAlign="center",e.font='28px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",system-ui,sans-serif',e.fillStyle="#ffffff",e.fillText("\u{1F4A3}",16,16);let t=e.getImageData(0,0,32,32).data,n=0;for(let s=0;s<t.length;s+=4)t[s+3]>60&&Math.max(t[s],t[s+1],t[s+2])-Math.min(t[s],t[s+1],t[s+2])>40&&n++;return n>12}catch{return!1}}var Dl=class{constructor(e,t,n){this.scene=e,this.T=t,this.M=new Eu(t),this.tier=n,this.colliders=[],this.windows=[],this.buys=[],this.lamps=[],this.dyn=[],this.fall=[],this.doorInfos=[],this.doors=[],this.missionMeshes=new Map,this.mapId="junkyard",this.staticGroup=new De,this.root=new De,e.add(this.root),this.build(),this.batch(),this.dress(n)}dress(e=this.tier){let t=e>0,n=this.M;n.sand.color.setHex(t?11047032:13615792),n.sand.bumpScale=t?5.5:3,n.sand.roughness=t?.96:.97,n.concrete.color.setHex(t?13154984:16777215),n.concrete.bumpScale=t?2.8:1.5,n.concrete.roughness=t?.96:.88,n.concrete.metalness=t?0:.02,n.fence.roughness=t?.42:1,n.fence.metalness=t?.84:.75,n.fence.bumpScale=t?4.2:2.5,n.fenceDark.roughness=t?.6:1,n.fenceDark.metalness=t?.55:.7;for(let s of Object.values(n.cache))s.userData.paint&&(s.roughness=t?.4:1,s.metalness=t?.25:.55);if(this.lampReach=t?18:30,this.lampDecay=t?2:1.7,this.lampBase=t?90:95,this.moon&&(this.moon.intensity=t?1.4:1.7),this.lampPool)for(let s of this.lampPool)s.distance=this.lampReach,s.decay=this.lampDecay;Vg(e)}addCol(e,t,n,s,r=3,o={}){let l={x0:e,x1:t,z0:n,z1:s,y0:o.y0||0,y1:r,...o};return this.colliders.push(l),l}box(e,t,n,s,r,o,l,c={}){let a=new xe(new ct(e,t,n),l);return a.position.set(s,r,o),a.castShadow=c.cast!==!1,a.receiveShadow=!0,(c.dynamic?this.root:this.staticGroup).add(a),a}place(e,t,n,s=0,r=!0){e.position.x+=t,e.position.z+=n,e.rotation.y=s,e.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0)}),this.staticGroup.add(e);let o=e.userData.hd;if(o){e.updateMatrix(),e.traverse(c=>{c.isMesh&&(c.userData.hdProp=!0)});let l=o.kind==="tyre"?e.children.map(c=>new je().makeTranslation(c.position.x,c.position.y,c.position.z).premultiply(e.matrix).multiply(new je().makeRotationY(ee(cn)))):[e.matrix.clone()];for(let c of l)(this.hdProps||(this.hdProps=[])).push({...o,m:c})}if(r&&e.userData.size){let[l,c,a]=e.userData.size;Math.abs(Math.sin(s))>.7&&([l,a]=[a,l]),this.addCol(t-l/2+.05,t+l/2-.05,n-a/2+.05,n+a/2-.05,c)}return e}build(){let{M:e,T:t,scene:n}=this;this.mapId="junkyard",this.buildSky(),this.buildGround();let s=3.2,r=.4,o=(d,u,f,p=[],x=e.fence)=>this.wall("x",d,u,f,p,s,r,x),l=(d,u,f,p=[],x=e.fence)=>this.wall("z",d,u,f,p,s,r,x),c=d=>{let u=Gt.gates.find(f=>f.id===d);return{c:u.axis==="x"?u.x:u.z,id:u.id,door:!0,w:u.w,price:u.price,name:u.name,blurb:u.blurb,areas:u.areas,stand:u.stand}};o(24,-24,24,[{c:-10,id:"S1",area:"A"},{c:11,id:"S2",area:"A"}]),l(24,-24,24,[{c:-4,id:"E1",area:"A"},c("AC")]),l(-24,-24,24,[{c:6,id:"W1",area:"A"},c("AD")]),o(-24,-24,24,[c("AB")]),l(24,-52,-24,[{c:-40,id:"E2",area:"B"}]),l(-24,-52,-24,[{c:-38,id:"W2",area:"B"},c("SD")]),o(-52,-24,24,[{c:-12,id:"N1",area:"B"},c("BE")]);let a=(d,u,f,p)=>{let x=new xe(new an(d,u),e.concrete);x.rotation.x=-Math.PI/2,x.position.set(f,.015,p),x.receiveShadow=!0,this.staticGroup.add(x)};a(48,48,0,0),a(48,28,0,-38),this.buildLots(o,l,a),this.buildGate();let h=this.place.bind(this);h(yi(e,6010272,{door:!0}),-9,-9,.2*0),h(yi(e,14252330,{missing:!0,tilt:.04}),13,-10,Math.PI/2),h(Ri(e,6197184),9,11,Math.PI/2),h(Ri(e,14252330,15129792,{missing:!0}),-15,1,0),h(yi(e,14733722),-4,16,Math.PI/2+0),h(yi(e,11680302,{tilt:-.05}),19,16,0),h(Ri(e,9087050,15129792),3,-14,Math.PI/2);for(let[d,u,f]of[[17,2,5],[-20,-5,4],[-3,-4,3],[-19,19,6],[21,-20,4]])h(Tl(e,f),d,u);for(let[d,u,f]of[[5,19,3829413],[6.2,19.8,11680302],[4.4,20.6,9087050],[-1,-19,14252330],[.2,-20,3829413]])h(lr(e,f),d,u);h(ei(e,1.1),-21,12),h(ei(e,.9),-20.8,13.2),h(ei(e,1.3),21,9),h(ei(e,1),20.4,10.4),this.shack(18,-17,6,5),h(yi(e,13619140,{missing:!0}),-12,-36,Math.PI/2),h(yi(e,6010272,{tilt:.05}),14,-46,.3*0),h(Ri(e,11680302,15129792),6,-35,0),h(Ri(e,6010272,15129792,{tilt:.04}),-10,-47,Math.PI/2),h(yi(e,13803834,{door:!0}),0,-43,Math.PI/2);for(let[d,u,f]of[[18,-30,5],[-20,-29,3],[19,-36,4],[-3,-30,4]])h(Tl(e,f),d,u);for(let[d,u,f]of[[-19,-49,14252330],[-18,-50,3829413],[20,-50,11680302]])h(lr(e,f),d,u);h(ei(e,1.2),21,-46),h(ei(e,1),-21,-42),h(ei(e,.9),20.6,-47.4);for(let[d,u,f,p]of[[-11,11,0,.6],[14,5,0,2.6],[-13,-12,1,-.5],[10,-19,0,3.4],[-8,-30,0,.3],[11,-40,1,3],[-4,-49,0,1.4]]){let x=wl(this.M,!!f);x.position.set(d,0,u),x.rotation.y=p,x.traverse(m=>{m.isMesh&&(m.castShadow=!m.userData.bulb)}),x.updateMatrixWorld(!0),this.addCol(d-.2,d+.2,u-.2,u+.2,5);let g=x.userData.bulbPos.clone().applyMatrix4(x.matrixWorld);this.lamps.push({pos:g,teal:!!f,ph:ee(100)}),this.staticGroup.add(x)}this.wallBuy("smg",-14,On+.25,0),this.wallBuy("shotgun",23.75,-15,-Math.PI/2),this.wallBuy("rifle",-23.75,-44,Math.PI/2),this.wallBuy("akimbo",23.75,8,-Math.PI/2),this.wallBuy("lever",-23.75,-32,Math.PI/2),this.wallBuy("nailer",10,23.65,Math.PI),this.nadeBuy(4,16.2,0),this.wallBuy("smg",49.65,12,-Math.PI/2),this.wallBuy("shotgun",-49.65,-16,Math.PI/2),this.wallBuy("rifle",18,-75.65,0),this.buildCrate(-17.5,14.5),this.scenery(),this.buildLights()}wall(e,t,n,s,r,o,l,c){let{M:a}=this,h=p=>p.w||3.2,d=[...r].sort((p,x)=>p.c-x.c),u=n,f=(p,x)=>{if(x-p<.05)return;let g=x-p,m=(p+x)/2,_=Math.max(1,Math.ceil(g/8));for(let b=0;b<_;b++){let y=p+g*b/_,w=p+g*(b+1)/_;this.wseg(e,t,y,w,o,l,c)}};for(let p of d)f(u,p.c-h(p)/2),this.opening(e,t,p,o,l,c),u=p.c+h(p)/2;f(u,s)}wseg(e,t,n,s,r,o,l){let c=s-n,a=(n+s)/2;e==="x"?(this.box(c,r,o,a,r/2,t,l),this.addCol(n,s,t-o/2,t+o/2,r),this.box(.35,r+.5,.55,n,(r+.5)/2,t,this.M.fenceDark),this.box(c,.1,.12,a,r+.4,t,this.M.fenceDark)):(this.box(o,r,c,t,r/2,a,l),this.addCol(t-o/2,t+o/2,n,s,r),this.box(.55,r+.5,.35,t,(r+.5)/2,n,this.M.fenceDark),this.box(.12,.1,c,t,r+.4,a,this.M.fenceDark))}opening(e,t,n,s,r,o){let{M:l}=this,c=n.w||3.2;if(n.door){let E=e==="x"?n.c:t,D=e==="x"?t:n.c;e==="x"?(this.box(.5,s+.8,.7,E-c/2,(s+.8)/2,D,l.fenceDark),this.box(.5,s+.8,.7,E+c/2,(s+.8)/2,D,l.fenceDark)):(this.box(.7,s+.8,.5,E,(s+.8)/2,D-c/2,l.fenceDark),this.box(.7,s+.8,.5,E,(s+.8)/2,D+c/2,l.fenceDark));let k=n.id==="DOOR"?"AB":n.id||"AB",L=n.areas||["A","B"],C=n.stand||(e==="x"?{A:{x:E,z:D+1.8},B:{x:E,z:D-1.8}}:{A:{x:E-1.8,z:D},B:{x:E+1.8,z:D}});this.doorInfos.push({id:k,x:E,z:D,w:c,axis:e,price:n.price||1250,name:n.name||"Back lot",blurb:n.blurb||"The back lot awaits",areas:L,stand:C});return}let a=e==="x"?{x:0,z:t>0?1:-1}:{x:t>0?1:-1,z:0};e==="x"&&t===-52&&(a.z=-1),n.outN&&(a=e==="x"?{x:0,z:n.outN}:{x:n.outN,z:0});let h=e==="x"?n.c:t,d=e==="x"?t:n.c,u=.95,f=2.5,p=c,x=(E,D,k)=>e==="x"?[E,D,r]:[r,D,E],[g,m,_]=x(p,u,0);this.box(g,m,_,h,u/2,d,o);let[b,y,w]=x(p,s-f,0);this.box(b,y,w,h,(s+f)/2,d,o);let T=l.wood;for(let E of[-1,1]){let[D,k,L]=x(.2,f-u,0);this.box(e==="x"?.2:r+.12,f-u,e==="x"?r+.12:.2,e==="x"?h+E*(p/2-.1):h,(u+f)/2,e==="x"?d:d+E*(p/2-.1),T)}this.addCol(e==="x"?h-p/2:h-r/2,e==="x"?h+p/2:h+r/2,e==="x"?d-r/2:d-p/2,e==="x"?d+r/2:d+p/2,u,{bulletOnly:!1}),this.addCol(e==="x"?h-p/2:h-r/2,e==="x"?h+p/2:h+r/2,e==="x"?d-r/2:d-p/2,e==="x"?d+r/2:d+p/2,s,{y0:f,bulletOnly:!0}),this.addCol(e==="x"?h-p/2:h-r/2,e==="x"?h+p/2:h+r/2,e==="x"?d-r/2-.02:d-p/2,e==="x"?d+r/2+.02:d+p/2,s,{noBullet:!0});let P=[],v=Math.atan2(a.x,a.z);for(let E=0;E<6;E++){let D=new xe(new ct(p-.15,.2,.07),l.wood),k=new U(h+a.x*.23,u+.16+E*.255,d+a.z*.23);D.position.copy(k),D.rotation.set(0,v,ee(-.05,.05)),D.castShadow=!0,D.receiveShadow=!0,D.userData={home:k,rotZ:D.rotation.z,ry:v},this.root.add(D),P.push(D)}let M=new xe(new ct(e==="x"?.3:.06,.06,e==="x"?.06:.3),new st({color:new ge(1.8,.3,.15),toneMapped:!1}));M.position.set(h-a.x*.3,2.85,d-a.z*.3),M.userData.noAO=!0,this.root.add(M),this.windows.push({id:n.id,area:n.area||Wi(h,d,this.mapId),c:new U(h,0,d),n:a,t:{x:-a.z,z:a.x},out:{x:h+a.x*1.5,z:d+a.z*1.5},in:{x:h-a.x*1.6,z:d-a.z*1.6},planks:P,count:6,attackers:0,cool:0,axis:e,lamp:M})}removePlank(e){if(e.count<=0)return!1;let t=e.planks[e.count-1];return e.count--,t.userData.fall={vx:e.n.x*ee(1,3)+ee(-1,1),vy:ee(1,3),vz:e.n.z*ee(1,3)+ee(-1,1),t:0,rx:ee(-6,6),rz:ee(-6,6)},this.fall.push(t),!0}addPlank(e){if(e.count>=6)return!1;let t=e.planks[e.count];e.count++,t.userData.fall=null;let n=this.fall.indexOf(t);return n>=0&&this.fall.splice(n,1),t.visible=!0,t.position.copy(t.userData.home),t.rotation.set(0,t.userData.ry,t.userData.rotZ),!0}buildGate(){this.buildGates()}buildGates(){let{M:e}=this,t=new ze({color:15251502,roughness:.6,metalness:.3});this.doors=[];for(let n of this.doorInfos){let s=n.axis!=="z",r=new De,o=new xe(new ct(s?n.w:.25,3.4,s?.25:n.w),e.fence);o.position.y=1.7,o.castShadow=o.receiveShadow=!0,r.add(o);let l=Math.max(3,Math.round(n.w));for(let h=0;h<l;h++){let d=new xe(new ct(s?.42:.05,3.4,s?.05:.42),h%2?t:e.fenceDark),u=-n.w/2+n.w*(h+.5)/l;d.position.set(s?u:.15,1.7,s?.15:u),r.add(d)}r.position.set(n.x,0,n.z),this.root.add(r);let c=s?this.addCol(n.x-n.w/2,n.x+n.w/2,n.z-.2,n.z+.2,3.4,{door:!0,gate:n.id}):this.addCol(n.x-.2,n.x+.2,n.z-n.w/2,n.z+n.w/2,3.4,{door:!0,gate:n.id}),a={id:n.id,mesh:r,open:!1,t:0,price:n.price,name:n.name,blurb:n.blurb,areas:n.areas,stand:n.stand,axis:n.axis,col:c,pos:{x:n.x,z:n.z},x:n.x,z:n.z};if(this.doors.push(a),n.id==="AB"){let h=new xe(new an(7.5,1.9),new st({map:this.T.sign,color:new ge(1.9,1.9,1.9),toneMapped:!1}));h.position.set(n.x,5,n.z+.45),this.staticGroup.add(h);for(let d of[-1,1])this.box(.18,4.4,.18,n.x+d*3.5,2.5,n.z+.4,e.fenceDark);this.signPos=new U(n.x,5,n.z+1)}else{let h=n.axis==="z"?Math.PI/2:0,d=new xe(new an(3.4,.7),new st({map:Au([{t:n.name.toUpperCase(),s:64,y:128,w:800,c:"#ffd36b"}],"#ffd36b",512,256),toneMapped:!1,color:new ge(.9,.9,.9)}));d.position.set(n.x,4.15,n.z),d.rotation.y=h,this.root.add(d)}}this.door=this.doors.find(n=>n.id==="AB")||this.doors[0]}buildLots(e,t,n){let{M:s}=this,r=this.place.bind(this);t(50,2,22,[{c:8,id:"C1",area:"C"},{c:16,id:"C2",area:"C"}]),e(22,24,50,[{c:36,id:"C3",area:"C"}]),e(2,24,50,[]),n(26,20,37,12),r(yi(s,13803834,{missing:!0}),32,16,.4),r(Ri(s,12868138,15129792),30,8,Math.PI/2);for(let[o,l,c]of[[40,18,11680302],[41.2,17.2,14252330],[39.2,18.8,3829413],[44,7,9087050]])r(lr(s,c),o,l);r(ei(s,1.1),46,14),r(ei(s,.9),46.8,15.1),this.lampAt(44,14,1,1.2),t(-50,-34,-2,[{c:-10,id:"D1",area:"D"},{c:-24,id:"D2",area:"D"}]),e(-2,-50,-24,[]),e(-34,-50,-24,[{c:-38,id:"D3",area:"D"}]),n(26,32,-37,-18),r(Ri(s,6197184,15129792),-38,-10,0),r(Ri(s,14252330,13616814,{tilt:.03}),-38,-24,0),r(yi(s,9087050,{door:!0}),-44,-16,Math.PI/2),r(ei(s,1.2),-46,-6),r(ei(s,1),-32,-30),this.lampAt(-44,-22,0,.4),e(-76,4,24,[{c:8,id:"EN",area:"E"}]),t(4,-76,-52,[{c:-68,id:"EW",area:"E",outN:-1}]),t(24,-76,-52,[{c:-64,id:"EE",area:"E"}]),n(20,24,14,-64),r(yi(s,13619140,{missing:!0,tilt:-.04}),10,-64,.6),r(Ri(s,3829413,15129792),18,-68,Math.PI/2),r(ei(s,1),8,-72),r(lr(s,14252330),20,-58),r(lr(s,3829413),21,-57.2),this.lampAt(10,-70,1,2.2),this.buildDressing()}lampAt(e,t,n,s){let r=wl(this.M,!!n);r.position.set(e,0,t),r.rotation.y=s,r.traverse(l=>{l.isMesh&&(l.castShadow=!l.userData.bulb)}),r.updateMatrixWorld(!0),this.addCol(e-.2,e+.2,t-.2,t+.2,5);let o=r.userData.bulbPos.clone().applyMatrix4(r.matrixWorld);this.lamps.push({pos:o,teal:!!n,ph:ee(100)}),this.staticGroup.add(r)}buildDressing(){let{M:e}=this,t=f=>Gt.jobs.find(p=>p.id===f),n=t("fuel").pad,s=t("carb").pad,r=t("radio").pad,o=t("parts").pad;this.box(1.5,.9,.9,21.05,.45,12,e.fenceDark),this.box(1.6,.12,1,21.05,.96,12,e.fence),this.addCol(20.3,21.8,11.55,12.45,1.05);let l=new xe(new ct(.28,.16,.16),new st({color:new ge(.2,2.4,1.2),toneMapped:!1}));l.position.set(20.2,1.05,12),l.userData.noAO=!0,this.root.add(l),this.box(1.3,.75,.7,-19.5,.38,-31.15,e.wood),this.addCol(-20.2,-18.8,-31.55,-30.75,.9),this.box(1.4,.8,.7,42.2,.4,6.3,e.wood),this.addCol(41.5,42.9,5.95,6.65,.95),this.box(.18,5.2,.18,9.4,2.6,-43.4,e.fenceDark),this.box(1.1,.16,.16,9.4,4.9,-43.4,e.fence),this.box(.7,.45,.4,6.7,.9,-43.1,e.fenceDark),this.addCol(9.25,9.55,-43.55,-43.25,5.2);let c=new xe(new Jt(.12,8,6),new st({color:new ge(2.2,.35,.25),toneMapped:!1}));c.position.set(9.9,5.05,-43.4),c.userData.noAO=!0,this.root.add(c),this.box(.16,6.4,.16,16,3.2,-62,e.fenceDark),this.box(1.4,.1,.1,16,6.2,-62,e.fence),this.addCol(15.85,16.15,-62.15,-61.85,6.4);let a=(f,p,x,g)=>{g.position.set(p,0,x),g.traverse(m=>{m.isMesh&&(m.castShadow=!0,m.receiveShadow=!0)}),this.root.add(g),this.missionMeshes.set(f,g)},h=()=>{let f=new De;f.add(new xe(new It(.16,.18,.42,8),e.paint(11680302))),f.children[0].position.y=.22;let p=new xe(new It(.07,.07,.12,6),e.fenceDark);return p.position.y=.46,f.add(p),f};for(let f of t("fuel").items){let p=h();p.userData.hdKind="jerry",a(f.id,f.x,f.z,p)}let d=new De;d.add(new xe(new ct(.28,.16,.2),e.chrome)),d.children[0].position.y=.2;let u=new xe(new It(.05,.08,.22,6),e.paint(13803834));u.position.set(0,.28,0),d.add(u),a("carb",t("carb").items[0].x,t("carb").items[0].z,d);for(let f of t("parts").items){let p=new De,x=new xe(new _i(.16,.05,6,10),e.chrome);x.rotation.x=Math.PI/2,x.position.y=.12,p.add(x),a(f.id,f.x,f.z,p)}for(let f of t("bus").items){let p=new De,x=new xe(new ct(.08,.55,.7),e.wood);x.position.y=1.35,p.add(x),a(f.id,f.x,f.z,p)}for(let[f,p]of this.missionMeshes)p.visible=f.startsWith("f");this._dress={fuel:n,carb:s,radio:r,parts:o}}resetDoors(){for(let e of this.doors)e.open=!1,e.t=0,e.mesh.position.y=0,e.col.off=!1}shack(e,t,n,s){let{M:r}=this;this.box(n,3,s,e,1.5,t,r.fence),this.box(n+.5,.2,s+.5,e,3.1,t,r.fenceDark),this.addCol(e-n/2,e+n/2,t-s/2,t+s/2,3.2),this.box(1.4,2.1,.1,e-1.2,1.05,t+s/2+.05,r.wood,{cast:!1});let o=new xe(new an(1.4,.9),new st({color:new ge(2.6,1.7,.7),toneMapped:!1}));o.position.set(e+1.5,1.8,t+s/2+.03),this.staticGroup.add(o)}nadeBuy(e,t,n){let s=new De;s.position.set(e,1.7,t),s.rotation.y=n;let r=new xe(new Jt(.22,10,8),new ze({color:9048088,roughness:.4}));r.position.set(0,.35,.2);let o=new xe(new It(.06,.06,.1,6),new ze({color:16722490,emissive:4849672}));o.position.set(0,.58,.2);let l=new xe(new an(2.4,1.2),new st({map:Au([{t:"BLOOD BAIT",s:48,y:88,w:800,c:"#ff5a6e"},{t:"$250  \xB7  "+(document.body.classList.contains("touch")?AE()?"\u{1F4A3} TO THROW":"TAP BAIT TO THROW":"G TO THROW"),s:32,y:168,c:"#ffd36b"}],"#ff5a6e"),toneMapped:!1}));l.position.set(0,-.35,.04);let c=new xe(new ct(2.6,2.2,.08),this.M.fenceDark);c.position.set(0,.05,0);let a=new xe(l.geometry,l.material);a.position.set(0,-.35,-.04),a.rotation.y=Math.PI;let h=r.clone();h.position.z=-.2;let d=o.clone();d.position.z=-.2,s.add(c,l,r,o,a,h,d),this.root.add(s);let u=Math.sin(n),f=Math.cos(n);this.buys.push({id:"nade",price:250,pos:{x:e+u*.9,z:t+f*.9},back:{x:e-u*.25,z:t-f*.25},name:"Blood Bait"})}wallBuy(e,t,n,s){if(e==="nade"){this.nadeBuy(t,n,s);return}let r=jt[e],o=new De;o.position.set(t,1.7,n),o.rotation.y=s;let l=new xe(new an(2.4,1.2),new st({map:Au([{t:r.name.toUpperCase(),s:44,y:88,w:800},{t:"$"+r.price+"  \xB7  AMMO $"+Math.floor(r.price/2),s:36,y:168,c:"#ffd36b"}]),toneMapped:!1,color:new ge(.9,.9,.9)}));l.position.set(0,-.35,.04);let c=Ll(e,!1);c.position.set(0,.35,.18),c.rotation.y=Math.PI/2,c.scale.setScalar(1.7),c.userData.base=null;let a=new xe(new ct(2.6,2.2,.08),this.M.fenceDark);a.position.set(0,.05,0),o.add(a,l,c),o.traverse(u=>{u.isMesh&&(u.castShadow=!1)}),this.root.add(o);let h=Math.sin(s),d=Math.cos(s);this.buys.push({id:e,price:r.price,pos:{x:t+h*.9,z:n+d*.9},name:r.name})}buildCrate(e,t){let{M:n}=this,s=new De;s.position.set(e,0,t),s.rotation.y=.5;let r=n.paint(2078874),o=new xe(new ct(1.3,.7,.8),r);o.position.y=.35,s.add(o);let l=new De;l.position.set(0,.7,-.4);let c=new xe(new ct(1.3,.2,.8),r);c.position.set(0,.1,.4),l.add(c),s.add(l);for(let f of[-.45,.45]){let p=new xe(new ct(.1,.92,.84),n.fenceDark);p.position.set(f,.46,0),s.add(p)}let a=new xe(new ct(.4,.06,.06),n.chrome);a.position.set(0,.8,.43),s.add(a);let h=new xe(new an(.8,.4),new st({map:Au([{t:"LUCKY",s:70,y:70,w:900,c:"#18ffb0"},{t:"TOOLBOX",s:62,y:150,w:900,c:"#fff"},{t:"950",s:52,y:215,c:"#ffd36b"}],"#18ffb0",384,256),toneMapped:!1,color:new ge(.9,.9,.9)}));h.position.set(0,.38,.41),s.add(h),s.traverse(f=>{f.isMesh&&!f.material.isMeshBasicMaterial&&(f.castShadow=!0,f.receiveShadow=!0)});let d=new xe(new It(.5,.65,9,16,1,!0),new bt({transparent:!0,depthWrite:!1,blending:ln,side:Ot,uniforms:{c:{value:new ge(.1,1,.7)},k:{value:.35}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(1.-vy,2.2)*pow(f,2.5)*k); }"}));d.position.set(0,4.5,0),d.userData.noAO=!0,s.add(d),this.root.add(s),this.addCol(e-.8,e+.8,t-.8,t+.8,1);let u=new De;u.position.set(0,1.5,.1),s.add(u),this.crate={group:s,lid:l,hold:u,beam:d,pos:{x:e,z:t},price:950,state:"idle",t:0,weapon:null,shown:null,model:null,x:e,z:t}}buildSky(){let e=new bt({side:Sn,depthWrite:!1,fog:!1,uniforms:{moonDir:{value:new U(-.55,.6,.58).normalize()}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vP; uniform vec3 moonDir;
        float h(vec3 p){ return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ vec3 d=normalize(vP); float y=clamp(d.y,-.2,1.);
          vec3 hor=vec3(.20,.12,.16), mid=vec3(.025,.045,.10), top=vec3(.004,.008,.03);
          vec3 c=mix(hor,mid,smoothstep(0.,.25,y)); c=mix(c,top,smoothstep(.2,.9,y)); c+=vec3(.5,.18,.1)*pow(max(0.,1.-abs(y)*4.),3.)*.35;
          vec3 g=floor(d*220.); float s=step(.9975,h(g))*smoothstep(.05,.3,y); c+=vec3(.9,.95,1.)*s*(.4+.4*h(g+3.))*0.8;
          float md=dot(d,moonDir); c+=vec3(.75,.85,1.)*smoothstep(.9992,.9996,md)*2.5; c+=vec3(.25,.35,.6)*pow(max(0.,md),60.)*.5+vec3(.1,.15,.3)*pow(max(0.,md),8.)*.25;
          gl_FragColor=vec4(c,1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.sky=new xe(new Jt(500,32,16),e),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.sky.userData.noAO=!0,this.scene.add(this.sky),this.moonDir=e.uniforms.moonDir.value}buildGround(){let e=new xe(new an(1200,1200),this.M.sand);e.rotation.x=-Math.PI/2,e.receiveShadow=!0,this.scene.add(e),this.ground=e}scenery(){let{M:e}=this,t=this.staticGroup,n=(c,a)=>c>-26&&c<26&&a>-54&&a<26||c>22&&c<52&&a>0&&a<24||c<-22&&c>-52&&a>-36&&a<0||c>2&&c<26&&a<-50&&a>-78,s=e.sand.clone();s.map=e.sand.map.clone(),s.map.repeat.set(6,3),s.bumpMap=e.sand.bumpMap.clone(),s.bumpMap.repeat.set(6,3),s.color=new ge(12034436),s.bumpScale=1.5,e.dune=s;let r,o=()=>r||(r=(()=>{let c=new Jt(1,40,14,0,cn,0,Math.PI/2),a=c.attributes.position;for(let h=0;h<a.count;h++){let d=a.getX(h),u=a.getY(h),f=a.getZ(h),p=Math.atan2(f,d),x=u*(.75+.25*Math.sin(p*3+1)+.12*Math.sin(p*7));a.setXYZ(h,d*(1+.08*Math.sin(p*5)),Math.pow(Math.max(x,0),1.6),f)}return c.computeVertexNormals(),c})());for(let c=0;c<26;c++){let a=ee(cn),h=ee(60,190),d=Math.cos(a)*h,u=-14+Math.sin(a)*h,f=Math.min(ee(14,38),(h-48)/2.1);if(f<6)continue;let p=new xe(o(),s);p.scale.set(f*ee(1.2,2),f*ee(.12,.28),f*ee(1,1.6)),p.position.set(d,0,u),p.rotation.y=ee(3),p.receiveShadow=!0,t.add(p)}let l=e.flat(2762292,1,0);for(let c=0;c<12;c++){let a=c/12*cn+ee(-.2,.2),h=ee(230,330),d=ee(30,70),u=ee(25,60),f=new xe(new It(d*.55,d*.8,u,6),l);f.position.set(Math.cos(a)*h,u/2-2,-14+Math.sin(a)*h),f.rotation.y=ee(3),t.add(f)}for(let c=0;c<38;c++){let a,h,d=0;do{let f=ee(cn),p=ee(34,90);a=Math.cos(f)*p,h=-14+Math.sin(f)*p*.9}while(n(a,h)&&++d<20);let u=Yg(e);u.position.set(a,0,h),u.rotation.y=ee(3),u.traverse(f=>{f.isMesh&&(f.castShadow=!0)}),t.add(u)}for(let c=0;c<40;c++){let a,h,d=0;do{let f=ee(cn),p=ee(30,110);a=Math.cos(f)*p,h=-14+Math.sin(f)*p*.9}while(n(a,h)&&++d<20);let u=jg(e,ee(.4,1.8));u.position.set(a,0,h),u.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0)}),t.add(u)}for(let c=0;c<9;c++){let a=ee(cn),h=ee(34,70),d=Math.cos(a)*h,u=-14+Math.sin(a)*h*.9;if(n(d,u))continue;let f=Math.random()<.35?qg(e,Kf(),15129792,{tilt:ee(-.08,.08)}):Xg(e,Kf(),{tilt:ee(-.1,.1),missing:Math.random()<.5});f.position.set(d,0,u),f.rotation.y=ee(3),f.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.receiveShadow=!0)}),t.add(f)}}buildLights(){let e=this.scene;this.hemi=new Fr(7309e3,3812386,.85),e.add(this.hemi),this.moon=new Os(10335487,1.7),this.moon.castShadow=!0,this.moon.position.set(0,0,0),e.add(this.moon,this.moon.target);let t=this.moon.shadow;t.camera.left=t.camera.bottom=-34,t.camera.right=t.camera.top=34,t.camera.near=1,t.camera.far=140,t.bias=-4e-4,t.normalBias=.04,t.mapSize.set(2048,2048),this.lampPool=[];for(let s=0;s<7;s++){let r=new ss(16756838,95,30,1.7);e.add(r),this.lampPool.push(r)}this.halos=[],this.cones=[];let n=s=>new bt({transparent:!0,depthWrite:!1,blending:ln,side:Ot,uniforms:{c:{value:s},k:{value:.22}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(vy,1.5)*pow(f,1.6)*k); }"});for(let s of this.lamps){let r=s.teal?new ge(.2,.9,.7):new ge(1,.62,.28),o=new $n(new Hn({map:this.T.glow,color:s.teal?new ge(.5,3,2.4):new ge(3,1.8,.7),blending:ln,depthWrite:!1,transparent:!0,fog:!1}));o.scale.setScalar(3.4),o.position.copy(s.pos),o.userData.noAO=!0,this.scene.add(o),this.halos.push(o);let l=new xe(new Is(4.2,5,24,1,!0),n(r));l.position.copy(s.pos).add(new U(0,-2.5,0)),l.userData.noAO=!0,this.scene.add(l),this.cones.push(l),s.light=r}}setTier(e){this.tier=e,this.dress(e);let t=[3,5,7][e];this.lampPool.forEach((s,r)=>s.visible=r<t),this.cones.forEach(s=>s.visible=e>0),this.moon.castShadow=e>0;let n=e===2?2048:1024;this.moon.shadow.mapSize.x!==n&&(this.moon.shadow.mapSize.set(n,n),this.moon.shadow.map?.dispose(),this.moon.shadow.map=null)}batch(){let e=this.staticGroup;e.updateMatrixWorld(!0);let t=new Map,n=[];e.traverse(s=>{if(!s.isMesh)return;if(s.userData.bulb||s.userData.noBatch){n.push(s);return}let r=!1;for(let a=s;a;a=a.parent)if(a.userData.hd){r=!0;break}let o=s.material.uuid+(s.castShadow?"c":"n")+(s.receiveShadow?"r":"n")+(r?"h":""),l=t.get(o);l||(l={mat:s.material,cast:s.castShadow,rec:s.receiveShadow,geos:[],hp:r},t.set(o,l));let c=s.geometry.clone();c.applyMatrix4(s.matrixWorld);for(let a of Object.keys(c.attributes))["position","normal","uv"].includes(a)||c.deleteAttribute(a);l.geos.push(c)});for(let s of t.values()){let r=_u(s.geos,!1);if(!r){console.warn("merge failed");continue}let o=new xe(r,s.mat);o.castShadow=s.cast,o.receiveShadow=s.rec,o.frustumCulled=!1,this.root.add(o),s.hp&&(this.propLo||(this.propLo=[])).push(o),s.geos.forEach(l=>l.dispose())}for(let s of n){if(s.userData.noBatch){let o=s.clone();o.matrixAutoUpdate=!1,o.matrix.copy(s.matrixWorld),o.matrixWorldNeedsUpdate=!0,this.root.add(o);continue}let r=new xe(s.geometry,s.material);r.applyMatrix4(s.matrixWorld),r.matrixAutoUpdate=!0,r.position.setFromMatrixPosition(s.matrixWorld),r.rotation.set(0,0,0),r.scale.setScalar(1),this.root.add(r)}this.staticGroup=null}resolve(e,t,n=!1){let s=!1;for(let r of this.colliders){if(r.bulletOnly||r.off)continue;let o=Qt(e.x,r.x0,r.x1),l=Qt(e.z,r.z0,r.z1),c=e.x-o,a=e.z-l,h=c*c+a*a;if(!(h>=t*t))if(s=!0,h>1e-8){let d=Math.sqrt(h),u=(t-d)/d;e.x+=c*u,e.z+=a*u}else{let d=e.x-r.x0,u=r.x1-e.x,f=e.z-r.z0,p=r.z1-e.z,x=Math.min(d,u,f,p);x===d?e.x=r.x0-t:x===u?e.x=r.x1+t:x===f?e.z=r.z0-t:e.z=r.z1+t}}return s}ray(e,t,n){let s=n,r=null,o=null;if(t.y<-1e-5){let l=-e.y/t.y;l>0&&l<s&&(s=l,r={x:0,y:1,z:0},o="ground")}for(let l of this.colliders){if(l.noBullet||l.off)continue;let c=0,a=s,h=-1,d=0,u=(f,p,x,g,m)=>{if(Math.abs(p)<1e-9)return f>=x&&f<=g;let _=(x-f)/p,b=(g-f)/p,y=-1;if(_>b){let w=_;_=b,b=w,y=1}return _>c&&(c=_,h=m,d=y),b<a&&(a=b),c<=a};u(e.x,t.x,l.x0,l.x1,0)&&u(e.y,t.y,l.y0,l.y1,1)&&u(e.z,t.z,l.z0,l.z1,2)&&c>0&&c<s&&(s=c,r={x:h===0?d:0,y:h===1?d:0,z:h===2?d:0},o="wall")}return r?{t:s,n:r,kind:o}:null}update(e,t,n){for(let c=this.fall.length-1;c>=0;c--){let a=this.fall[c],h=a.userData.fall;if(!h){this.fall.splice(c,1);continue}h.t+=e,h.vy-=9.8*e,a.position.x+=h.vx*e,a.position.y+=h.vy*e,a.position.z+=h.vz*e,a.rotation.x+=h.rx*e,a.rotation.z+=h.rz*e,a.position.y<.08&&(a.position.y=.08,h.vy=0,h.vx*=.5,h.vz*=.5),h.t>1.4&&(a.visible=!1,this.fall.splice(c,1))}for(let c of this.doors)c.open&&c.t<1&&(c.t=Math.min(1,c.t+e/2.4),c.mesh.position.y=c.t*3.6,c.t>.5&&(c.col.off=!0));let s=n.x,r=n.z,o=this.lamps.map((c,a)=>({i:a,d:(c.pos.x-s)**2+(c.pos.z-r)**2})).sort((c,a)=>c.d-a.d);this.lampPool.forEach((c,a)=>{let h=this.lamps[o[a].i];c.position.copy(h.pos),c.color.copy(h.teal?new ge(.35,1,.8):new ge(1,.7,.4));let d=.85+.15*Math.sin(t*9+h.ph)*Math.sin(t*3.7+h.ph*2)+(Math.sin(t*31+h.ph)>.97?-.5:0);c.intensity=(this.lampBase||95)*Math.max(.2,d)}),this.halos.forEach((c,a)=>{let h=Math.hypot(this.lamps[a].pos.x-s,this.lamps[a].pos.z-r);c.visible=h<70});let l=this.crate;l.beam.material.uniforms.k.value=.22+.1*Math.sin(t*2);for(let c of this.windows){if(!c.lamp)continue;let a=6-c.count,h=a<=0?.55+.08*Math.sin(t*2.2+c.c.x):.3+.7*Math.abs(Math.sin(t*(3.2+a)));c.lamp.material.color.setRGB(1.85*h,.22*h,.07*h)}l.model&&(l.model.rotation.y+=e*2,l.model.position.y=Math.sin(t*3)*.04),this.moon.position.set(s+this.moonDir.x*60,this.moonDir.y*60,r+this.moonDir.z*60),this.moon.target.position.set(s,0,r),this.moon.target.updateMatrixWorld(),this.sky.position.set(s,0,r)}};var An=i=>document.getElementById(i),Zr={can:'<svg viewBox="0 0 24 24"><path d="M6 6.5L9 3h8.5a1.5 1.5 0 0 1 1.5 1.5v16a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20.5V8z" fill="currentColor"/><rect x="11" y="4.6" width="5.5" height="2.4" rx="1" fill="#2a1606"/><path d="M8 11.5l8 7.5M16 11.5l-8 7.5" stroke="#2a1606" stroke-width="2" stroke-linecap="round"/></svg>',bolt:'<svg viewBox="0 0 24 24"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" fill="currentColor"/></svg>',gear:'<svg viewBox="0 0 24 24"><path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6zm8.6 5.3l2-1.5-2-3.5-2.4.8a7.6 7.6 0 0 0-1.9-1.1L15.8 5.7h-4l-.5 2.5a7.6 7.6 0 0 0-1.9 1.1L7 8.5 5 12l2 1.5a7 7 0 0 0 0 2.2L5 17.2l2 3.5 2.4-.8c.6.5 1.2.8 1.9 1.1l.5 2.5h4l.5-2.5c.7-.3 1.3-.6 1.9-1.1l2.4.8 2-3.5-2-1.5a7 7 0 0 0 0-2.2z" fill="currentColor" transform="translate(0 -2.2) scale(1 1)"/></svg>',wrench:'<svg viewBox="0 0 24 24"><path d="M21 6.5a5 5 0 0 1-6.6 4.7L6.3 19.3a1.9 1.9 0 0 1-2.7-2.7l8.1-8.1A5 5 0 0 1 17.5 3l-3 3 .7 2.8 2.8.7z" fill="currentColor"/></svg>',hammer:'<svg viewBox="0 0 24 24"><path d="M3 9l6-6 3 3-1.5 1.5L21 18l-3 3L7.5 10.5 6 12z" fill="currentColor"/></svg>',radio:'<svg viewBox="0 0 24 24"><path d="M12 10.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zM11 14.5h2l2.5 7.5h-2l-.6-2h-1.8l-.6 2h-2z" fill="currentColor"/><path d="M7.8 8.2a6 6 0 0 0 0 8.4M16.2 8.2a6 6 0 0 1 0 8.4M5 5.5a10 10 0 0 0 0 14M19 5.5a10 10 0 0 1 0 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',skull:'<svg viewBox="0 0 24 24"><path d="M12 2.5c-4.7 0-8 3.2-8 7.6 0 2.5 1.1 4.3 2.8 5.4V19c0 .8.6 1.4 1.4 1.4h1v-2h1.6v2h2.4v-2h1.6v2h1c.8 0 1.4-.6 1.4-1.4v-3.5c1.7-1.1 2.8-2.9 2.8-5.4 0-4.4-3.3-7.6-8-7.6zm-3.2 6.7a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm6.4 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fill="currentColor"/></svg>',gate:'<svg viewBox="0 0 24 24"><path d="M3 21V5l4-2v18M21 21V5l-4-2v18M7 8h10M7 13h10M7 18h10" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>',ammo:'<svg viewBox="0 0 24 24"><path d="M5 22V10c0-3 1.5-6 2.5-7 1 1 2.5 4 2.5 7v12zM14 22V10c0-3 1.5-6 2.5-7 1 1 2.5 4 2.5 7v12z" fill="currentColor"/></svg>',x2:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M6.5 8.5l4.5 7M11 8.5l-4.5 7M13.5 10.2c.4-1.2 1.4-1.8 2.6-1.8 1.4 0 2.4.9 2.4 2.1 0 1.9-2.7 2.9-5 5h5.2" fill="none" stroke="#2a1606" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',star:'<svg viewBox="0 0 24 24"><path d="M12 2l3 6.5 7 .8-5.2 4.8 1.5 7L12 17.6 5.7 21l1.5-7L2 9.3l7-.8z" fill="currentColor"/></svg>',lock:'<svg viewBox="0 0 24 24"><path d="M7 10V7.5a5 5 0 0 1 10 0V10h1.5v11h-13V10zm2.5 0h5V7.5a2.5 2.5 0 0 0-5 0z" fill="currentColor"/></svg>'},Cu=["fuel","carb","bus","parts","radio","clear"],RE={fuel:1,carb:2,bus:3,parts:4,radio:5,clear:5},CE={AB:"the back gate",AC:"the Lot C gate",AD:"the Lot D gate",SD:"the side gate",BE:"the Lot E gate"},PE={AB:"BACK GATE",AC:"LOT C GATE",AD:"LOT D GATE",SD:"SIDE GATE",BE:"LOT E GATE"},Jg={double:{t:"2\xD7 POINTS DROP",i:"x2",tl:!0},ammo:{t:"FULL MAGS DROP",i:"ammo",tl:!1}},Nl={fuel:{icon:"can",item:"fuel can",items:"fuel cans",brief:"Find <em>3 fuel cans</em> and carry them to the <em>generator</em>",find:"Find a <em>fuel can</em>",bring:"Bring the can to the <em>generator</em>",itemLabel:"FUEL CAN",itemIcon:"can",padLabel:"GENERATOR",padIcon:"bolt"},carb:{icon:"gear",item:"carburetor",items:"carburetor",brief:"Grab the <em>carburetor</em> and install it on the <em>back-lot bench</em>",find:"Find the <em>carburetor</em>",bring:"Install it on the <em>back-lot bench</em>",itemLabel:"CARBURETOR",itemIcon:"gear",padLabel:"BACK-LOT BENCH",padIcon:"wrench"},bus:{icon:"hammer",brief:"Board up the <em>bus windows</em>: hold <em>E</em> at each one",find:"Hold <em>E</em> at each <em>bus window</em>",itemLabel:"BUS WINDOW",itemIcon:"hammer"},parts:{icon:"gear",item:"scrap part",items:"scrap parts",brief:"Collect <em>3 scrap parts</em> in Lot C and bring them to the <em>Lot C bench</em>",find:"Find a <em>scrap part</em> in Lot C",bring:"Bring it to the <em>Lot C bench</em>",itemLabel:"SCRAP PART",itemIcon:"gear",padLabel:"LOT C BENCH",padIcon:"wrench"},radio:{icon:"radio",brief:"Stand in the <em>radio ring</em> during a wave for <em>20 s</em>. Leaving drains the timer",padLabel:"RADIO",padIcon:"radio"},clear:{icon:"skull",brief:"Get <em>8 kills in Lot D</em>, including zombies at its windows",find:"Get <em>kills in Lot D</em>",padLabel:"LOT D",padIcon:"skull"}},Ru=i=>Math.round(i).toLocaleString("en-US");function np(i,e,t){let n=Cu.indexOf(i),s=Cu[n+1];if(!s)return null;let r=(Gt.jobs.find(a=>a.id===i)||{}).area,o=(Gt.jobs.find(a=>a.id===s)||{}).area,c=t==="round"?r&&r===o?e+1:e:e+1;return{id:s,title:(Gt.jobs.find(a=>a.id===s)||{}).title||s,round:Math.max(RE[s],c)}}function IE(i,e){let t=Qo(e);if(!i||t.has(i))return null;let n={B:["AB"],C:["AC"],D:["AD","SD"],E:["BE"]}[i]||[];for(let s of n){let r=e.find(o=>o.id===s);if(r&&!r.open&&r.areas.some(o=>t.has(o)))return r}return t.has("B")?null:e.find(s=>s.id==="AB"&&!s.open)||null}function Qg(i){let{world:e,isTouch:t}=i,n=An("mission"),s=An("msIc"),r=An("msEb"),o=An("msGoal"),l=An("msPips"),c=An("msCount"),a=An("msRw"),h=An("wp"),d=An("wpLab"),u=An("wpDist"),f=An("wpIc"),p=An("objArrow"),x=An("oaLab"),g=An("oaDist"),m=An("oaIc"),_=An("oaChev"),b=An("mBan"),y=An("fx-edge"),w={},T=($,de,be,te)=>{w[de]!==be&&(w[de]=be,te?$.innerHTML=be:$.textContent=be)},P=[],v="",M=0,E=new st({color:new ge(2.2,1.25,.35),transparent:!0,opacity:.85,depthWrite:!1,side:Ot,fog:!1,toneMapped:!1}),D=new xe(new ns(.62,.74,48),E);D.rotation.x=-Math.PI/2,D.position.y=.05,D.userData.noAO=!0,D.renderOrder=3;let k=new xe(new ns(1,1.06,48),E.clone());k.rotation.x=-Math.PI/2,k.position.y=.05,k.userData.noAO=!0,k.material.opacity=.35;let L=new De;L.add(D,k),L.visible=!1,e.scene.add(L);let C=Gt.radio,N=new st({color:new ge(.15,2.2,1.4),transparent:!0,opacity:.55,depthWrite:!1,side:Ot,fog:!1,toneMapped:!1}),R=new xe(new ns(C-.12,C,96),N);R.rotation.x=-Math.PI/2;let O=new xe(new ns(C-.34,C-.16,96,1,0,.001),new st({color:new ge(2.4,1.4,.3),transparent:!0,opacity:.9,depthWrite:!1,side:Ot,fog:!1,toneMapped:!1}));O.rotation.x=-Math.PI/2,O.rotation.z=Math.PI/2;let G=new xe(new li(C-.12,64),new st({color:new ge(.05,.6,.4),transparent:!0,opacity:.12,depthWrite:!1,fog:!1,toneMapped:!1}));G.rotation.x=-Math.PI/2;let F=new De;F.add(G,R,O),F.position.y=.04,F.visible=!1,F.traverse($=>{$.userData.noAO=!0,$.renderOrder=3}),e.scene.add(F);let z=-1,Y=new Map;for(let[$,de]of e.missionMeshes){let be=new $n(new Hn({map:e.T&&e.T.glow,color:new ge(2.4,1.4,.4),blending:ln,depthWrite:!1,transparent:!0,fog:!1}));be.scale.setScalar(1.3),be.position.y=$.startsWith("b")?1.35:.35,be.userData.noAO=!0;let te=new xe(new ns(.42,.5,32),E);te.rotation.x=-Math.PI/2,te.position.y=.04,te.userData.noAO=!0,$.startsWith("b")&&(te.visible=!1),de.add(be,te),Y.set($,{h:be,r:te})}let se=new U;function he($,de,be,te){return se.set($,de,be).project(te),{behind:se.z>1,x:(se.x*.5+.5)*innerWidth,y:(-se.y*.5+.5)*innerHeight,nx:se.x,ny:se.y}}function q($){l.textContent="",P=[];for(let de=0;de<$;de++){let be=document.createElement("i");be.className="pip";let te=document.createElement("b");be.appendChild(te),l.appendChild(be),P.push(be)}l.classList.toggle("many",$>6)}function le(){n.classList.add("hidden"),h.classList.add("hidden"),p.classList.add("hidden"),L.visible=!1,F.visible=!1,y&&y.classList.remove("on");for(let $ in w)delete w[$]}function Se($,de){if(!$)return le(),null;let be=Nl[$.id]||{},te=!!($.carry&&$.carry[de.pid]),ue=$.carry?Object.keys($.carry).length:0;n.classList.remove("hidden");let _e=Cu.indexOf($.id)+1;T(s,"ic",Zr[be.icon]||Zr.star,!0),T(r,"eb",`Mission ${_e}/6 \xB7 ${$.title}`);let fe=null,Te="",He="bolt",Ge="",Ze="",et=()=>{let Ae=null,ye=1e9;for(let Me of $.items)if(!Me.done&&!Me.carried){let Ue=Math.hypot(de.P.x-Me.x,de.P.z-Me.z);Ue<ye&&(ye=Ue,Ae=Me)}return Ae};if($.kind==="carry")te?(fe=$.pad,Te=be.padLabel,He=be.padIcon,Ge=be.bring):(fe=et()||$.pad,Te=et()?be.itemLabel:be.padLabel,He=et()?be.itemIcon:be.padIcon,Ge=et()?be.find:"A teammate has it: <em>cover them</em>");else if($.kind==="board")fe=et()||$.pad,Te=be.itemLabel,He=be.itemIcon,Ge=be.find;else if($.kind==="radio"){fe=$.pad,Te=be.padLabel,He=be.padIcon;let Ae=Math.hypot(de.P.x-$.pad.x,de.P.z-$.pad.z)<=C;Ge=de.phase!=="round"?Ae?"Wait in the <em>ring</em> for the next wave":"Go to the <em>radio ring</em>":Ae?"Hold the <em>radio ring</em>!":"Get back in the <em>ring</em>! Timer draining",Ze=de.phase!=="round"?"Counts <b>during waves</b>":Ae?"<b>Holding\u2026</b>":"<b>Draining</b>"}else $.kind==="clear"&&(fe=$.pad,Te=be.padLabel,He=be.padIcon,Ge=be.find);let H=IE(Wi(fe.x,fe.z,"junkyard"),de.doors);if(H){let Ae=H.stand?Object.values(H.stand).reduce((ye,Me)=>Math.hypot(de.P.x-Me.x,de.P.z-Me.z)<Math.hypot(de.P.x-ye.x,de.P.z-ye.z)?Me:ye):H;fe={x:Ae.x,z:Ae.z},Te=PE[H.id]||"GATE",He="lock",Ge=`Open <em>${CE[H.id]||"the gate"}</em> (${Ru(de.price(H))}) to get there`}T(o,"goal",Ge,!0);let dt=$.kind==="radio",rt=dt?10:$.need,B=$.id+rt;v!==B&&(v=B,q(rt));let S=Math.min($.need,$.have);for(let Ae=0;Ae<rt;Ae++){let ye=P[Ae],Me="",Ue=0;if(dt){let Ye=$.need/rt;Ue=Math.max(0,Math.min(1,(S-Ae*Ye)/Ye)),Me=Ue>=1?"on":Ue>0?"part":""}else Me=Ae<Math.floor(S)?"on":Ae<Math.floor(S)+ue&&$.kind==="carry"?"go":"";ye._st!==Me&&(ye._st=Me,ye.className="pip "+Me),dt&&ye._f!==Ue&&(ye._f=Ue,ye.firstChild.style.width=Math.round(Ue*100)+"%")}T(c,"cnt",$.kind==="radio"?`${Math.floor(S)}/${$.need}s`:`${Math.floor(S)}/${$.need}`);let X=Math.hypot(de.P.x-fe.x,de.P.z-fe.z),K=X<1.5?"HERE":Math.round(X)+" m",ne=he(fe.x,$.kind==="board"&&!H?2.2:1.3,fe.z,de.cam),we=t?60:70,Ie=!ne.behind&&ne.x>we&&ne.x<innerWidth-we&&ne.y>we&&ne.y<innerHeight-we*.6,ce="";if(Ie){h.classList.remove("hidden"),p.classList.add("hidden"),y&&y.classList.remove("on"),h.style.left=ne.x+"px",h.style.top=ne.y+"px";let Ae=Math.max(.62,Math.min(1,9/Math.max(9,X))*1);h.style.setProperty("--k",Ae.toFixed(3)),T(d,"wl",Te),T(u,"wd",K),T(f,"wi",Zr[He]||Zr.bolt,!0),h.classList.toggle("close",X<2.5)}else{h.classList.add("hidden"),p.classList.remove("hidden");let Ae=ne.behind?-ne.nx:ne.nx,ye=ne.behind?-ne.ny:ne.ny;ne.behind&&Math.abs(Ae)<.2&&(Ae=Ae<0?-1:1);let Me=Math.atan2(-ye,Ae),Ue=innerWidth/2,Ye=innerHeight/2,at=t?92:120,W=innerHeight-150,Ne=t?170:120,me=innerWidth-(t?250:150),Pe=Math.cos(Me),Oe=Math.sin(Me),ve=1e9;Pe>.001&&(ve=Math.min(ve,(me-Ue)/Pe)),Pe<-.001&&(ve=Math.min(ve,(Ne-Ue)/Pe)),Oe>.001&&(ve=Math.min(ve,(W-Ye)/Oe)),Oe<-.001&&(ve=Math.min(ve,(at-Ye)/Oe));let nt=Ue+Pe*ve,Ke=Ye+Oe*ve;p.style.left=nt+"px",p.style.top=Ke+"px",_.style.transform=`rotate(${Me}rad)`,p.classList.toggle("left",Pe<0),T(x,"al",Te),T(g,"ad",K),T(m,"ai",Zr[He]||Zr.bolt,!0),ce=ne.behind&&Math.abs(ne.nx)<.35?"Turn <b>around \u27F2</b>":Pe<0?"<b>\u25C0 Turn</b> left":"Turn <b>right \u25B6</b>",y&&(y.classList.add("on"),y.classList.toggle("l",Pe<0))}let pe=$.gate&&(Gt.gates.find(Ae=>Ae.id===$.gate)||{}).name||"";T(a,"rw",ce||Ze||`Reward <b>+${Ru($.pts)}${pe?" \xB7 "+pe:""}</b>`,!0),L.visible=!($.kind==="radio"&&!H),L.position.set(fe.x,0,fe.z);let Le=1+.12*Math.sin(de.time*4);if(D.scale.setScalar(Le),k.scale.setScalar(1+de.time*.8%1*.8),k.material.opacity=.45*(1-de.time*.8%1),F.visible=$.kind==="radio",F.visible){F.position.set($.pad.x,.04,$.pad.z);let Ae=Math.min(1,S/$.need);Math.abs(Ae-z)>.004&&(z=Ae,O.geometry.dispose(),O.geometry=new ns(C-.34,C-.16,96,1,0,Math.max(.001,Ae*Math.PI*2)));let ye=Math.hypot(de.P.x-$.pad.x,de.P.z-$.pad.z)<=C;N.color.setRGB(ye?.15:2.4,ye?2.2:.5,ye?1.4:.2),N.opacity=.45+.25*Math.sin(de.time*(ye?3:7))}for(let[Ae,ye]of Y){let Me=.75+.25*Math.sin(de.time*5+Ae.length);ye.h.material.opacity=Me,ye.r.scale.setScalar(1+.15*Math.sin(de.time*4))}return fe}function Z($,de,be){document.body.dataset.mban=String(performance.now()+be-600),b.className="mBan "+$,b.innerHTML=de,b.offsetWidth,b.classList.add("on"),clearTimeout(M),M=setTimeout(()=>b.classList.remove("on"),be)}let ie=($,de,be)=>`<span class="chip${be?" tl":""}">${Zr[$]||""}${de}</span>`;function Ee($){let de=Gt.jobs.find(fe=>fe.id===$);if(!de)return;let be=Nl[$]||{},te=Cu.indexOf($)+1,ue=de.gate?(Gt.gates.find(fe=>fe.id===de.gate)||{}).name:"",_e=Jg[de.power];Z("start",`<i class="stripe t"></i><i class="stripe b"></i><div class="e">NEW MISSION \xB7 ${te} OF 6</div><div class="ttl">${de.title.toUpperCase()}</div><div class="g">${be.brief||""}</div><div class="chips">${ie("star","+"+Ru(de.pts)+" PTS")}${ue?ie("gate","OPENS "+ue.toUpperCase()):""}${_e?ie(_e.i,_e.t,_e.tl):""}</div>`,5200)}function Ce($,de={}){let be=Gt.jobs.find(Te=>Te.id===$);if(!be)return;let te=be.gate?(Gt.gates.find(Te=>Te.id===be.gate)||{}).name:"",ue=de.next,_e=Jg[be.power];Z("done",`<i class="stripe t"></i><i class="stripe b"></i><div class="stamp">MISSION COMPLETE</div><div class="row1"><span class="big">${be.title.toUpperCase()}</span><span class="pts">+${Ru(de.pts||be.pts)}</span></div><div class="chips">${te?ie("gate",te.toUpperCase()+" GATE OPEN",!0):""}${ie("ammo","AMMO REFILLED")}${_e?ie(_e.i,_e.t.replace("DROP","DROPPED"),_e.tl):""}</div><div class="next">${ue?`NEXT MISSION \xB7 ${ue.title.toUpperCase()} \xB7 UNLOCKS AFTER ROUND ${ue.round}`:"ALL 6 MISSIONS DONE \xB7 THE YARD IS YOURS"}</div>`,4600);let fe=An("fx-mflash");fe&&(fe.classList.remove("on"),fe.offsetWidth,fe.classList.add("on"))}return{frame:Se,start:Ee,complete:Ce,hide:le}}var ip=[{id:"fuel",wave:1},{id:"carb",wave:2},{id:"bus",wave:3},{id:"parts",wave:4},{id:"radio",wave:5},{id:"clear",wave:5}];function LE(i){let e=Gt.jobs[i];return e?{index:i,id:e.id,title:e.title,kind:e.kind,gate:e.gate||"",area:e.area,need:e.need,pts:e.pts,power:e.power||"",pad:{x:e.pad.x,z:e.pad.z},have:0,items:(e.items||[]).map(t=>({id:t.id,x:t.x,z:t.z,done:!1,carried:null})),carry:{}}:null}function ex(i){let{world:e,P:t,G:n,sfx:s,banner:r,toast:o,popText:l,spawnPower:c}=i,a={mode:"sp",job:null,pid:"you",unlocked:[],done:new Set,gap:!1,gapWave:0,lastArea:"",waves:0},h=Qg({world:e,isTouch:document.body.classList.contains("touch")}),d=()=>i.phase?i.phase():n.phase,u=L=>Nl[L.id]&&Nl[L.id].item||"item";function f(){let L=new Set;if(a.job)for(let C of a.job.items)!C.done&&!C.carried&&L.add(C.id);for(let[C,N]of e.missionMeshes){let R=a.job&&a.job.items.find(O=>O.id===C);N.visible=L.has(C),R&&N.visible&&(N.position.x=R.x,N.position.z=R.z)}}function p(L){a.job=LE(L),f(),!a.job&&a.mode==="sp"&&o("All objectives complete")}function x(){if(a.job||a.gap||a.mode!=="sp"||e.mapId!=="junkyard")return!1;let L=ip.find(C=>a.unlocked.includes(C.id)&&!a.done.has(C.id));return L?(p(Gt.jobs.findIndex(C=>C.id===L.id)),!!a.job):!1}function g(L){if(a.mode!=="sp"||e.mapId!=="junkyard")return!1;a.waves=Math.max(a.waves,L|0);for(let C of ip)C.wave<=a.waves&&!a.unlocked.includes(C.id)&&a.unlocked.push(C.id);if(a.gap){let C=ip.find(O=>a.unlocked.includes(O.id)&&!a.done.has(O.id)),N=C&&Gt.jobs.find(O=>O.id===C.id);(!!(N&&N.area===a.lastArea)?a.waves>a.gapWave:a.waves>=a.gapWave)&&(a.gap=!1)}return x()?(h.start(a.job.id),s.announce?.(s.lineFor?.("mission",a.job.id,n.round)),!0):!1}function m(){let L=a.job;if(!L||a.mode!=="sp")return;let C=L.gate&&e.doors.find(R=>R.id===L.gate);C&&!C.open&&(C.open=!0);let N=L.pts*(n.double>0?2:1);t.pts+=N;for(let R of t.slots)R&&i.weapons[R.id]&&(R.mag=i.weapons[R.id].mag,R.reserve=i.weapons[R.id].reserve);L.power&&c(L.power,L.pad.x,L.pad.z),l("+"+N),h.complete(L.id,{pts:N,next:np(L.id,n.round,n.phase)}),s.cash(),C&&s.door(),s.announce?.(s.lineFor?.("done",L.id,n.round)),a.done.add(L.id),a.lastArea=L.area,a.gap=!0,a.gapWave=n.round,a.job=null,f()}function _(){a.mode="sp",a.pid="you",a.job=null,a.unlocked=[],a.done=new Set,a.gap=!1,a.gapWave=0,a.lastArea="",a.waves=0,f()}function b(L){if(a.mode!=="sp"||!a.job||n.state!=="playing")return;let C=a.job;if(C.kind==="carry"&&!C.carry.you){let N=null,R=Gt.pickup;for(let O of C.items)if(!O.done&&!O.carried){let G=Math.hypot(t.x-O.x,t.z-O.z);G<=R&&(R=G,N=O)}N&&(N.carried="you",C.carry.you=N.id,s.click(0,880,.28),o(`Picked up ${u(C)}`+(C.need>1?` (${C.have+1}/${C.need})`:"")))}else if(C.kind==="radio"&&n.phase==="round"){let N=Math.hypot(t.x-C.pad.x,t.z-C.pad.z)<=Gt.radio;C.have=N?C.have+L:Math.max(0,C.have-L*Gt.decay)}C.have>=C.need&&m(),f()}function y(){let L=a.job;if(!L||a.mode!=="sp")return!1;if(L.kind==="carry"){if(!L.carry.you)return o("Pick it up first"),!1;if(Math.hypot(t.x-L.pad.x,t.z-L.pad.z)>Gt.deliver)return!1;let C=L.items.find(N=>N.id===L.carry.you);return C&&(C.done=!0,C.carried=null),delete L.carry.you,L.have++,s.repair(),L.have>=L.need?m():(f(),o(`Delivered ${u(L)} (${L.have}/${L.need})`)),!0}if(L.kind==="board"){let C=L.items.find(N=>!N.done&&Math.hypot(t.x-N.x,t.z-N.z)<=Gt.board);return C?(C.done=!0,L.have++,s.repair(),L.have>=L.need?m():(f(),o(`Window boarded (${L.have}/${L.need})`)),!0):!1}return!1}function w(L){if(a.mode!=="sp"||!a.job||a.job.kind!=="clear"||!L)return;let C=L.win,N=!!(C&&C.area===a.job.area&&Math.hypot(L.pos.x-C.c.x,L.pos.z-C.c.z)<12);Wi(L.pos.x,L.pos.z,e.mapId)!==a.job.area&&!N||(a.job.have++,a.job.have>=a.job.need&&m())}function T(){if(a.mode!=="sp"||!a.job||!a.job.carry.you)return;let L=a.job.items.find(C=>C.id===a.job.carry.you);L&&!L.done&&(L.x=t.x,L.z=t.z,L.carried=null),delete a.job.carry.you,f()}function P(L,C,N,R){a.mode="net",a.pid=R||a.pid;let O=a.job,G=!!(O&&O.carry&&O.carry[a.pid]);if(!L){a.job=null,f();return}let F=Gt.jobs.find(se=>se.id===L[0]);if(!F){a.job=null,f();return}let z={};for(let se of N||[])z[se[0]]=se[1];let Y=new Set(Object.values(z));a.job={index:Gt.jobs.indexOf(F),id:F.id,title:F.title,kind:F.kind,gate:F.gate||"",area:F.area,need:L[2],pts:F.pts,power:F.power||"",pad:{x:L[3],z:L[4]},have:L[1],carry:z,items:(C||[]).filter(se=>!Y.has(se[0])).map(se=>({id:se[0],x:se[1],z:se[2],done:!1,carried:null}))},O&&O.id===F.id&&!G&&z[a.pid]?o(`Picked up ${u(a.job)}`+(a.job.need>1?` (${a.job.have+1}/${a.job.need})`:"")):O&&O.id===F.id&&a.job.kind!=="radio"&&a.job.have>O.have&&a.job.have<a.job.need&&o(`${a.job.kind==="clear"?"Lot D kills":a.job.kind==="board"?"Window boarded":"Delivered "+u(a.job)} (${a.job.have}/${a.job.need})`),f()}function v(L){if(!L||L.e!=="mission")return;let C=Gt.jobs.find(N=>N.id===L.id);if(L.start){h.start(L.id),s.announce?.(s.lineFor?.("mission",L.id,n.round));return}h.complete(L.id,{pts:L.pts,next:np(L.id,n.round,d())}),s.announce?.(s.lineFor?.("done",L.id,n.round)),s.cash(),C&&C.gate&&s.door();for(let N of t.slots)N&&i.weapons[N.id]&&(N.mag=i.weapons[N.id].mag,N.reserve=i.weapons[N.id].reserve)}function M(L,C){let N=a.job;if(!N)return null;if(N.kind==="board"){let R=null;for(let O of N.items)if(!O.done&&!O.carried){let G=Math.hypot(L-O.x,C-O.z);G<=Gt.board&&(!R||G<R.d)&&(R={d:G,name:"Board this window"})}return R&&{type:"job",d:R.d,hold:!0,name:R.name}}if(N.kind==="carry"&&N.carry[a.pid]){let R=Math.hypot(L-N.pad.x,C-N.pad.z);if(R<=Gt.deliver)return{type:"job",d:R,hold:!1,name:N.id==="carb"?"Install the carb":"Deliver"}}return null}function E(L){return L?a.job&&a.job.gate===L.id?Math.floor(L.price*Gt.discount):L.price:0}function D(){let L=a.job;if(!L)return null;if(L.carry&&L.carry[a.pid])return L.pad;let C=null,N=1e9;for(let R of L.items)if(!R.done&&!R.carried){let O=Math.hypot((t.x||0)-R.x,(t.z||0)-R.z);O<N&&(N=O,C=R)}return C||L.pad}function k(L){if(!(n.state==="playing"&&a.job&&e.mapId==="junkyard")){h.hide(),e.marker=null;return}e.marker=h.frame(a.job,{pid:a.pid,P:t,phase:d(),doors:e.doors,cam:L,time:n.time,price:E})||D()}return _(),{reset:_,update:b,use:y,onKill:w,drop:T,applyNet:P,onNetEvent:v,onWave:g,focus:M,price:E,frame:k,get job(){return a.job}}}var DE=5,NE=16,sp=4.6,rp=14;function tx(i){let{scene:e,world:t,fx:n}=i,s=new Map,r=new Map,o=[],l=0,c=1,a=new ze({color:9048088,roughness:.45,metalness:.2}),h=new ze({color:16722490,roughness:.3,emissive:4849672,emissiveIntensity:.6}),d=new Jt(.16,10,8),u=new It(.05,.05,.08,6),f=(()=>{let R=document.createElement("canvas");R.width=R.height=32;let O=R.getContext("2d"),G=O.createRadialGradient(16,16,0,16,16,16);return G.addColorStop(0,"rgba(255,255,255,1)"),G.addColorStop(1,"rgba(255,255,255,0)"),O.fillStyle=G,O.fillRect(0,0,32,32),new Ht(R)})(),p=new Hn({map:f,color:16720452,blending:ln,depthWrite:!1,transparent:!0}),x=[];function g(){let R=new De,O=new xe(d,a),G=new xe(u,h);G.position.y=.16;let F=new $n(p);return F.position.y=.2,F.scale.setScalar(.9),R.add(O,G,F),R.userData.glow=F,R.visible=!1,e.add(R),R}let m=g();m.visible=!0,m.position.set(0,-60,0),m.traverse(R=>{R.frustumCulled=!1});for(let R=0;R<3;R++)x.push(g());function _(R){let O=r.get(R);return O||(O=x.pop()||g(),O.visible=!0,r.set(R,O),O)}function b(R){let O=r.get(R);O&&(O.visible=!1,r.delete(R),x.push(O))}let y=new li(1,6),w=Array.from({length:14},()=>{let R=new xe(y,new st({color:6948880,transparent:!0,opacity:0,depthWrite:!1}));return R.rotation.x=-Math.PI/2,R.visible=!1,e.add(R),R}),T=0;function P(R,O){let G=i.blood;for(let F=0;F<7;F++){let z=R+(Math.random()-.5)*3.2,Y=O+(Math.random()-.5)*3.2,se=.18+Math.random()*.45;if(G){G(z,Y,se*2.2);continue}let he=w[T];T=(T+1)%w.length;let q=o.indexOf(he);q>=0&&o.splice(q,1),he.scale.setScalar(se),he.position.set(z,.04,Y),he.rotation.z=Math.random()*6,he.visible=!0,he.material.opacity=.85,o.push({s:he,t:6+Math.random()*4})}n.dust?.(new U(R,.4,O),{x:0,y:1,z:0},10,[.6,.05,.08])}function v(R,O,G,F,z){let Y=Math.max(-1.1,Math.min(.9,z||0)),se=Math.cos(Y),he={id:c++,x:R,y:O,z:G,vx:-Math.sin(F)*se*rp,vy:Math.sin(Y)*rp+2.2,vz:-Math.cos(F)*se*rp,fuse:DE,landed:!1};return s.set(he.id,he),he}function M(R){let O=new Set;for(let G of R||[]){let[F,z,Y,se,he,q]=G;O.add(F);let le=s.get(F);s.set(F,{id:F,x:z,y:Y,z:se,landed:!!he,fuse:q,net:!0,rx:le?.rx,ry:le?.ry,rz:le?.rz})}for(let G of[...s.keys()])O.has(G)||(s.delete(G),b(G))}let E=(R,O)=>{let G=R?.ng;if(G){for(let F of G)if(F[0]===O)return F}return null};function D(R){for(let O of s.values()){if(!R){O.rx=O.x,O.ry=O.y,O.rz=O.z;continue}let G=E(R.s0,O.id),F=E(R.s1,O.id);if(G&&F){let z=R.k;O.rx=G[1]+(F[1]-G[1])*z,O.ry=G[2]+(F[2]-G[2])*z,O.rz=G[3]+(F[3]-G[3])*z}else if(F||G){let z=F||G;O.rx=z[1],O.ry=z[2],O.rz=z[3]}else O.rx=O.ry=O.rz=void 0}}function k(R,O){if(s.delete(R.id),b(R.id),P(R.x,R.z),t.bait=null,i.sfx?.boom?.(),!O)return;let G=i.zombies;if(G)for(let z of G.list){if(z.state==="dead"||z.state==="dying")continue;let Y=Math.hypot(z.pos.x-R.x,z.pos.z-R.z);if(Y>sp)continue;let se=200*(1-Y/sp)+50;G.damage(z,se,!1)?.killed&&i.onKill?.(z)}let F=i.P;if(F){let z=Math.hypot(F.x-R.x,F.z-R.z);z<3.2&&i.onSelf?.(55*(1-z/3.2))}}function L(R){l-=R;let O=null;for(let F of[...s.values()])if(F.fuse!=null){if(F.fuse-=R,!F.landed&&F.vx!=null){let z=F.x,Y=F.z;if(F.vy-=18*R,F.x+=F.vx*R,F.y+=F.vy*R,F.z+=F.vz*R,t.ray){let se=(t.segBlock,null)}if(typeof t.resolve=="function"){let se={x:F.x,z:F.z},he=Math.hypot(F.x-z,F.z-Y);t.resolve(se,.16)&&he>.01&&(F.x=z,F.z=Y,F.vx*=-.25,F.vz*=-.25)}F.y<=.16&&(F.y=.16,F.landed=!0,F.vx=F.vz=F.vy=0)}F.fuse<=0?k(F,!0):F.landed&&(!O||F.fuse<O.fuse)&&(O=F)}t.bait=O?{x:O.x,z:O.z}:null;let G=[...s.values()].reduce((F,z)=>Math.min(F,z.fuse??9),9);G<5&&l<=0&&s.size&&(i.sfx?.beep?.(G),l=G<1.2?.14:G<2.5?.28:.55);for(let F=o.length-1;F>=0;F--)o[F].t-=R,o[F].s.material.opacity=Math.max(0,o[F].t/8),o[F].t<=0&&(o[F].s.visible=!1,o.splice(F,1))}function C(){for(let R of s.values()){let O=R.net&&R.rx!==void 0;if(R.net&&!O){let q=r.get(R.id);q&&(q.visible=!1);continue}let G=_(R.id);G.visible=!0;let F=O?R.rx:R.x,z=O?R.ry:R.y||.16,Y=O?R.rz:R.z;G.position.set(F,Math.max(.16,z),Y),G.rotation.y+=.02;let se=R.fuse??5,he=R.landed?(se<1.2?1:.45)*(.5+.5*Math.sin(se*18)):.15;G.userData.glow.scale.setScalar(.25+1.1*he),G.userData.glow.material.opacity=1}}function N(){for(let R of[...r.keys()])b(R);s.clear(),t.bait=null}return{throwLocal:v,sync:M,interp:D,step:L,frame:C,reset:N,splatter:P,items:s,BLAST:sp,LURE:NE}}var Pu={junkyard:{id:"junkyard",name:"Junkyard",blurb:"The original yard",cap:[16,26],spawn:{x:0,z:12}},motel:{id:"motel",name:"Salt Motel",blurb:"Tight courtyard, close quarters",cap:[12,20],spawn:{x:0,z:0}},drivein:{id:"drivein",name:"Drive-In",blurb:"Wide open lot, big hordes",cap:[18,30],spawn:{x:0,z:18}}},ap=i=>Pu[i]||Pu.junkyard,op=class i extends Dl{constructor(e,t,n,s){i.prototype._def=s,super(e,t,n)}lamps_(e){for(let[t,n,s,r]of e){let o=wl(this.M,!!s);o.position.set(t,0,n),o.rotation.y=r,o.traverse(c=>{c.isMesh&&(c.castShadow=!c.userData.bulb)}),o.updateMatrixWorld(!0),this.addCol(t-.2,t+.2,n-.2,n+.2,5);let l=o.userData.bulbPos.clone().applyMatrix4(o.matrixWorld);this.lamps.push({pos:l,teal:!!s,ph:ee(100)}),this.staticGroup.add(o)}}floor(e,t,n,s){this.box(e,.03,t,n,0,s,this.M.concrete,{cast:!1})}build(){this.mapId=this._def.id||"motel";let e=this._def.L,t=this.M,n=3.2,s=.4;this.buildSky(),this.buildGround();let r=(u,f,p,x=[],g=t.fence)=>this.wall("x",u,f,p,x,n,s,g),o=(u,f,p,x=[],g=t.fence)=>this.wall("z",u,f,p,x,n,s,g),{w:l,s:c,n:a,wb:h}=e;r(c,-l,l,e.south),o(l,On,c,e.eastA),o(-l,On,c,e.westA),r(On,-l,l,[{c:0,id:"DOOR",door:!0,w:6}]),h!==l&&(r(On,l,h),r(On,-h,-l)),o(h,a,On,e.eastB),o(-h,a,On,e.westB),r(a,-h,h,e.north),this.floor(2*l,c-On,0,(c+On)/2),this.floor(2*h,On-a,0,(On+a)/2),this.buildGate();let d=this.place.bind(this);for(let[u,f,p,x,g,m]of e.props)d(u==="bus"?Ri(t,f,15129792,m||{}):u==="beetle"?yi(t,f,m||{}):u==="tires"?Tl(t,f):u==="drum"?lr(t,f):ei(t,f),p,x,g||0);for(let u of e.shacks||[])this.shack(...u);this.lamps_(e.lamps);for(let u of e.buys)this.wallBuy(...u);this.buildCrate(...e.crate),this.scenery(),this.buildLights()}},UE={motel:{w:16,s:6,n:-44,wb:18,south:[{c:-7,id:"S1"},{c:7,id:"S2"}],eastA:[{c:-10,id:"E1"}],westA:[{c:-14,id:"W1"}],eastB:[{c:-36,id:"E2"}],westB:[{c:-32,id:"W2"}],north:[{c:6,id:"N1"}],props:[["beetle",6010272,-9,-4,0],["bus",14252330,10,-12,Math.PI/2],["tires",4,-12,-16],["drum",3829413,12,2],["drum",11680302,13,3],["crate",1.1,-13,2],["beetle",13619140,-10,-34,Math.PI/2,{missing:!0}],["bus",9087050,8,-38,0],["tires",5,14,-28],["crate",1,-15,-41]],shacks:[[0,-10,8,3]],lamps:[[-14,-20,0,.2],[14,-20,1,2.9],[-8,2,0,.5],[9,-6,1,2.6],[-6,-18,0,0],[0,-34,1,1.2],[12,-42,0,3]],buys:[["smg",-10,On+.25,0],["akimbo",8,On+.25,0],["nade",-2,2,Math.PI],["shotgun",15.75,-4,-Math.PI/2],["rifle",-17.75,-36,Math.PI/2]],crate:[-12,-8]},drivein:{w:32,s:22,n:-50,wb:32,south:[{c:-18,id:"S1"},{c:0,id:"S2"},{c:18,id:"S3"}],eastA:[{c:6,id:"E1"},{c:-14,id:"E1b"}],westA:[{c:8,id:"W1"},{c:-12,id:"W1b"}],eastB:[{c:-38,id:"E2"}],westB:[{c:-40,id:"W2"}],north:[{c:-14,id:"N1"},{c:14,id:"N2"}],props:[["bus",6197184,-18,4,0],["bus",11680302,18,4,0],["beetle",14733722,-8,-6,0],["beetle",6010272,8,-6,0,{door:!0}],["beetle",14252330,0,8,Math.PI/2],["tires",5,-26,14],["tires",3,26,-16],["drum",14252330,24,16],["crate",1.2,-26,-16],["bus",9087050,-14,-38,Math.PI/2],["beetle",13619140,14,-36,0,{missing:!0}],["tires",4,0,-44],["crate",1,26,-46]],shacks:[[0,-16,10,4]],lamps:[[-24,18,0,.6],[24,18,0,2.6],[-20,-8,1,0],[20,-8,1,3],[0,0,0,1],[-20,-36,0,.3],[20,-44,1,3]],buys:[["smg",-14,On+.25,0],["akimbo",6,On+.25,0],["nade",2,8,0],["shotgun",31.75,-4,-Math.PI/2],["rifle",-31.75,-30,Math.PI/2]],crate:[-24,4]}};function nx(i,e,t,n){let s=ap(n);return s.id==="junkyard"?new Dl(i,e,t):new op(i,e,t,{L:UE[s.id],id:s.id})}var ix={easy:{id:"easy",name:"Easy",count:.7,hp:.75,speed:.85,dmg:.6,drop:2,maxDrops:3,inter:10,spawnGap:1.3,brute:.5,startPts:750},medium:{id:"medium",name:"Medium",count:1,hp:1,speed:1,dmg:1,drop:1,maxDrops:2,inter:7,spawnGap:1,brute:1,startPts:500},hard:{id:"hard",name:"Hard",count:1.35,hp:1.3,speed:1.15,dmg:1.4,drop:.6,maxDrops:1,inter:5,spawnGap:.75,brute:1.6,startPts:400}};function lp(i,e=1){e=Math.max(1,Math.min(4,e|0));let t=[1,1.6,2.2,2.8][e-1];return{...i,count:i.count*t,hp:i.hp*(1+.1*(e-1))}}function cp(i){return ix[i]||ix.medium}var qn={torso:new ct(.52,.62,.3),hip:new ct(.46,.2,.28),leg:new ct(.2,.9,.22),arm:new ct(.15,.62,.16),head:new Dr(.27,1),eye:new ct(.07,.04,.03),jaw:new ct(.2,.08,.16),rag:new ct(.12,.28,.03),hand:new ct(.17,.14,.17)},sx=new st({color:new ge(1.7,.22,.1),toneMapped:!1}),rx=new ze({color:7213080,roughness:.6}),BE=new ze({color:1708564,roughness:1}),kE=[6191698,6980704,5798498,7439722,5206104],zE=[8007471,3099258,5921322,3816004,9071146,2068344,11687466],HE=[2764602,3813156,2106922,2898474],hp=class{constructor(){this.root=new De,this.sk=new ze({roughness:.75,emissive:0}),this.sh=new ze({roughness:.95,emissive:0}),this.pa=new ze({roughness:.95,emissive:0});let e=(o,l,c,a,h)=>{let d=new xe(o,l);return d.position.set(c,a,h),d.castShadow=!0,d};this.pelvis=new De,this.pelvis.position.y=.95,this.root.add(this.pelvis),this.legL=new De,this.legL.position.set(-.13,0,0),this.legL.add(e(qn.leg,this.pa,0,-.45,0)),this.legR=new De,this.legR.position.set(.13,0,0),this.legR.add(e(qn.leg,this.pa,0,-.45,0)),this.pelvis.add(this.legL,this.legR,e(qn.hip,this.pa,0,0,0)),this.upper=new De,this.pelvis.add(this.upper),this.upper.add(e(qn.torso,this.sh,0,.36,0));let t=e(qn.rag,this.sh,.12,0,.15);t.rotation.z=.2;let n=e(qn.rag,this.sh,-.1,.02,-.15);n.rotation.z=-.15,this.upper.add(t,n);let s=e(qn.rag,rx,-.1,.45,.155);s.scale.set(1.6,1,1),s.rotation.z=.5;let r=e(qn.rag,rx,.14,.2,.156);r.scale.set(1,.7,1),this.upper.add(s,r),this.head=new De,this.head.position.set(0,.88,.03),this.head.add(e(qn.head,this.sk,0,0,0)),this.head.add(e(qn.eye,sx,-.1,.04,.24),e(qn.eye,sx,.1,.04,.24),e(qn.jaw,BE,0,-.14,.18)),this.head.scale.set(1.05,1.1,1),this.upper.add(this.head),this.armL=new De,this.armL.position.set(-.35,.58,0),this.armL.add(e(qn.arm,this.sk,0,-.28,0),e(qn.hand,this.sk,0,-.64,0)),this.armR=new De,this.armR.position.set(.35,.58,0),this.armR.add(e(qn.arm,this.sk,0,-.28,0),e(qn.hand,this.sk,0,-.64,0)),this.upper.add(this.armL,this.armR),this.root.visible=!1,this.state="dead",this.pos=this.root.position}},Lu=class{constructor(e,t,n){this.world=t,this.scene=e,this.list=[],this.max=n>0?26:16;for(let s=0;s<this.max+4;s++){let r=new hp;e.add(r.root),this.list.push(r)}this.alive=0,this.t=0,this.hooks={}}setTier(e){this.max=e>0?26:16}reset(){for(let e of this.list)e.state="dead",e.root.visible=!1;this.alive=0}stats(e){let t=e<10?80+35*e:430*Math.pow(1.1,e-9),n=Math.min(5,1.5+e*.24);return{hp:t,sp:n}}spawn(e,t,n=!1){let s=this.list.find(c=>c.state==="dead"&&!c.root.visible);if(!s)return null;let r=this.stats(t),o=t>=3&&Math.random()<Math.min(.55,(t-2)*.09);s.brute=n,s.scale=n?1.38:ee(.94,1.06),s.root.scale.setScalar(s.scale),s.maxHp=s.hp=r.hp*(n?3.3:1),s.speed=r.sp*ee(.82,1.12)*(o?1.45:1)*(n?.78:1),s.speed=Math.min(s.speed,6),s.runner=o,s.dmg=n?44:22,s.value=n?150:60,s.sk.color.setHex(n?10121050:In(kE)),s.sh.color.setHex(In(zE)),s.pa.color.setHex(In(HE));for(let c of[s.sk,s.sh,s.pa])c.emissive.setHex(0);s.win=e,s.state="approach",s.slot=ee(-1.2,1.2),s.phase=ee(cn),s.attackT=0,s.cool=0,s.stuck=0,s.stuckTot=0,s.side=1,s.flash=0,s.hitT=0,s.groanT=ee(1,4),s.dieT=0,s.climbT=0,s.chk=0,s.chkX=0,s.chkZ=0,s.limp=Math.random()<.3,s.lane=ee(-.55,.55);let l=ee(4,9);return s.pos.set(e.out.x+e.n.x*l+e.t.x*ee(-3,3),0,e.out.z+e.n.z*l+e.t.z*ee(-3,3)),s.yaw=Math.atan2(-e.n.x,-e.n.z),s.root.rotation.set(0,s.yaw,0),s.root.visible=!0,s.pelvis.rotation.set(0,0,0),s.root.position.y=0,this.alive++,s}rayHit(e,t,n){let s=null;for(let r of this.list){if(r.state==="dead"||r.state==="dying")continue;let o=r.scale,l={x:r.pos.x,y:(r.climbY||0)+1.66*o,z:r.pos.z},c=.3*o,a=GE(e,t,l,c),h=null,d=e.x-r.pos.x,u=e.z-r.pos.z,f=t.x*t.x+t.z*t.z,p=.42*o;if(f>1e-8){let m=2*(d*t.x+u*t.z),_=d*d+u*u-p*p,b=m*m-4*f*_;if(b>=0){let y=Math.sqrt(b);for(let w of[(-m-y)/(2*f),(-m+y)/(2*f)])if(w>0){let T=e.y+t.y*w-(r.climbY||0);if(T>=0&&T<=1.45*o){h=w;break}}}}else d*d+u*u<p*p&&(h=.01);let x=null,g=!1;a!==null&&(h===null||a<=h+.15)?(x=a,g=!0):h!==null&&(x=h),x!==null&&x<n&&(!s||x<s.t)&&(s={z:r,t:x,head:g})}return s}damage(e,t,n,s,r){if(e.state==="dead"||e.state==="dying")return null;e.hp-=t,e.flash=.2,e.hitT=.22;let o=e.hp<=0;return o?(e.state="dying",e.dieT=0,this.alive--,e.dieDir=ee(-.4,.4)):e.state==="attack"||e.state,{killed:o,head:n}}killAll(){let e=[];for(let t of this.list)t.state!=="dead"&&t.state!=="dying"&&(t.hp=0,t.state="dying",t.dieT=0,t.dieDir=ee(-.4,.4),this.alive--,e.push(t));return e}update(e,t,n,s,r){let o=this.world;this.t=t;for(let c of o.windows)c.cool>0&&(c.cool-=e);let l=Wi(n.x,n.z,o.mapId);for(let c=0;c<this.list.length;c++){let a=this.list[c];if(a.state==="dead")continue;let h=a.scale;if(a.flash>0){a.flash-=e;let E=Math.max(0,a.flash/.2);for(let D of[a.sk,a.sh,a.pa])D.emissive.setRGB(1.15*E,.16*E,.05*E)}if(a.state==="dying"){a.dieT+=e;let E=Math.min(1,a.dieT/.55);a.pelvis.rotation.x=-E*1.5*(1-.1),a.pelvis.rotation.z=a.dieDir*E,a.pelvis.position.y=.95-E*.55,a.armL.rotation.x=-1.4+E*2.2,a.armR.rotation.x=-1.4+E*2.2,a.dieT>2.2&&(a.root.position.y=-(a.dieT-2.2)*.9),a.dieT>3.2&&(a.state="dead",a.root.visible=!1,a.root.position.y=0,a.pelvis.position.y=.95,a.pelvis.rotation.set(0,0,0));continue}if(a.groanT-=e,a.groanT<=0){a.groanT=ee(2.5,6);let E=a.pos.x-n.x,D=a.pos.z-n.z,k=Math.hypot(E,D);k<40&&r.groan?.(a,k)}let d=0,u=0,f=0,p=n.x,x=n.z;if(a.state==="approach"){let E=a.win,D=E.out.x+E.t.x*a.slot*.8,k=E.out.z+E.t.z*a.slot*.8,L=D-a.pos.x,C=k-a.pos.z,N=Math.hypot(L,C);N<.25?(a.state=E.count>0?"attack":"climb",a.climbT=0,a.cool=ee(.6,1.6)):(d=L/N,u=C/N,f=a.speed,a.pos.x+=d*f*e,a.pos.z+=u*f*e,a.yaw=Iu(a.yaw,Math.atan2(d,u),Math.min(1,e*8)))}else if(a.state==="attack"){let E=a.win;a.yaw=Iu(a.yaw,Math.atan2(-E.n.x,-E.n.z),Math.min(1,e*8)),a.cool-=e,E.count<=0?(a.state="climb",a.climbT=0):(a.attackT+=e,a.cool<=0&&E.count>0&&(a.cool=ee(1.2,2),E.cool<=0&&o.removePlank(E)&&(E.cool=ee(2.2,3.2),r.plank?.(E,!0))))}else if(a.state==="climb"){let E=a.win;a.climbT+=e/1.25;let D=Math.min(1,a.climbT),k=E.out.x+E.t.x*a.slot*.8,L=E.out.z+E.t.z*a.slot*.8,C=E.in.x+E.t.x*a.slot*.5,N=E.in.z+E.t.z*a.slot*.5;a.pos.x=k+(C-k)*D,a.pos.z=L+(N-L)*D,a.climbY=Math.sin(D*Math.PI)*.75,a.root.position.y=a.climbY,a.yaw=Iu(a.yaw,Math.atan2(-E.n.x,-E.n.z),Math.min(1,e*8)),f=1.5,D>=1&&(a.state="chase",a.climbY=0,a.root.position.y=0)}else{let E=o.bait,D=E?Math.hypot(E.x-a.pos.x,E.z-a.pos.z):99,k=E&&D<16,L=k?E.x:p,C=k?E.z:x,N=k?Wi(L,C,o.mapId):l,R=Wi(a.pos.x,a.pos.z,o.mapId),O=L,G=C,F=null;if(R!==N){let $=o.doors&&o.doors.length?o.doors:s?[s]:[];F=$g(a.pos.x,a.pos.z,o.mapId,N,$,a.lane||0),F&&(O=F.x,G=F.z)}let z=O-a.pos.x,Y=G-a.pos.z,se=Math.hypot(z,Y)||1;z/=se,Y/=se;let he=Math.hypot(p-a.pos.x,x-a.pos.z);if(a.stuck>0&&!F){a.stuck-=e;let $=.7*a.side,de=Math.cos($),be=Math.sin($),te=z*de-Y*be,ue=z*be+Y*de;z=te,Y=ue}let q=0,le=0;for(let $=0;$<this.list.length;$++){if($===c)continue;let de=this.list[$];if(de.state!=="chase"&&de.state!=="attack")continue;let be=a.pos.x-de.pos.x,te=a.pos.z-de.pos.z,ue=be*be+te*te;if(ue<.62&&ue>1e-4){let _e=1/Math.sqrt(ue);q+=be*_e*(.78-Math.sqrt(ue)),le+=te*_e*(.78-Math.sqrt(ue))}}F&&(F.crossZ?q*=.12:le*=.12),z+=q*1.15,Y+=le*1.15;let Se=Math.hypot(z,Y)||1;z/=Se,Y/=Se;let Z=Math.hypot(L-a.pos.x,C-a.pos.z);f=!F&&(k?Z<.9:he<1&&R===l)||a.speed<=0?0:a.speed,a.cool-=e,!k&&he<1.35&&R===l&&!F&&a.attackT<=0&&a.cool<=0&&(a.attackT=.01),a.attackT>0&&(a.attackT+=e,a.attackT>.42&&(!k&&he<1.7&&R===l&&r.hitPlayer?.(a),a.attackT=0,a.cool=1.05),f*=.3),a.pos.x+=z*f*e,a.pos.z+=Y*f*e,d=z,u=Y,f>0&&o.resolve(a.pos,.36*h);let Ee=F?z:L-a.pos.x,Ce=F?Y:C-a.pos.z;if(a.yaw=Iu(a.yaw,Math.atan2(Ee,Ce),Math.min(1,e*9)),a.chk+=e,a.chk>.45){let $=Math.hypot(a.pos.x-a.chkX,a.pos.z-a.chkZ);if(f>.4&&$<.1){if(a.stuck=F?0:.45,a.side=Math.random()<.5?-1:1,a.stuckTot+=.45,F){let de=F.gx-a.pos.x,be=F.gz-a.pos.z,te=Math.hypot(de,be)||1;a.pos.x+=de/te*.28,a.pos.z+=be/te*.28,o.resolve(a.pos,.36*h)}}else a.stuckTot=Math.max(0,a.stuckTot-.3);a.chkX=a.pos.x,a.chkZ=a.pos.z,a.chk=0,a.stuckTot>1.8&&F?(a.pos.x=F.ex,a.pos.z=F.ez,o.resolve(a.pos,.36*h),a.stuckTot=0):a.stuckTot>6&&this.reroute(a)}}a.root.rotation.y=a.yaw,a.state!=="climb"&&(a.root.position.y=0);let g=f>.1?f:0;a.phase+=g*e*(a.runner?2.4:2.7)/Math.max(.6,h);let m=Math.sin(a.phase),_=Math.min(.8,.28+g*.13);a.legL.rotation.x=m*_,a.legR.rotation.x=-m*_*(a.limp?.35:1),a.hitT>0&&(a.hitT=Math.max(0,a.hitT-e));let b=a.hitT>0?a.hitT/.22:0,y=.1+Math.min(.28,g*.05)+(a.runner?.16:0)+(a.brute?.1:0)-b*.42;a.upper.rotation.x=y+Math.abs(m)*.035,a.upper.rotation.z=Math.sin(a.phase*.5)*.07*(a.limp?2:1),a.upper.rotation.y=Math.sin(a.phase*.5)*.16;let w=a.brute?-.58:-.74,T=Math.min(.62,.2+g*.1)*(a.runner?1.28:1),P,v;if(a.state==="climb")P=v=-1.5;else if(a.state==="attack")v=-.5+Math.sin(a.attackT*7)*.95,P=w+.12;else if(a.attackT>0){let E=Math.sin(Math.min(1,a.attackT/.42)*Math.PI);v=w-E*1.15,P=w+m*T*.3}else P=w-m*T,v=w+m*T*(a.limp?.4:1);a.armL.rotation.x=P+b*.3,a.armR.rotation.x=v+b*.3;let M=a.brute?.28:.16;a.armL.rotation.z=M,a.armR.rotation.z=-M,a.head.rotation.x=.08+Math.sin(a.phase*.5)*.05-b*.5,a.head.rotation.y=Math.sin(a.phase*.5)*.1,a.head.rotation.z=Math.sin(a.phase*.5+1)*.1+b*.15,a.pelvis.position.y=.95+Math.abs(m)*(g>.2?.05:.02)}}reroute(e){let t=Qo(this.world.doors&&this.world.doors.length?this.world.doors:[this.world.door]),n=this.world.windows.filter(r=>t.has(r.area)),s=In(n.length?n:this.world.windows);e.win=s,e.state="approach",e.stuckTot=0,e.stuck=0,e.pos.set(s.out.x+s.n.x*3,0,s.out.z+s.n.z*3)}};function GE(i,e,t,n){let s=i.x-t.x,r=i.y-t.y,o=i.z-t.z,l=s*e.x+r*e.y+o*e.z,c=s*s+r*r+o*o-n*n,a=l*l-c;if(a<0)return null;let h=-l-Math.sqrt(a);return h>0?h:null}function Iu(i,e,t){let n=((e-i+Math.PI)%cn+cn)%cn-Math.PI;return i+n*t}var Ou={},dp;function VE(){let i=yu($o.zombies),e=i.view;dp=i.meta;for(let t of dp){let n=new vt;n.setAttribute("position",Mu(e,t)),n.setAttribute("normal",bu(e,t)),n.setAttribute("skinIndex",new ht(e(Uint8Array,t.si),4)),n.setAttribute("skinWeight",new ht(e(Uint8Array,t.sw),4,!0));let s=e(Uint16Array,t.idx);WE(s,n.attributes.position.array,t),n.setIndex(new ht(s,1)),t.groups.forEach(r=>n.addGroup(r.start,r.count,r.slot>=0?r.slot:3)),n.computeBoundingSphere(),Ou[t.tag]={g:n,m:t}}}function WE(i,e,t){let n=t.groups.filter(s=>s.slot<0);for(let s of n){let r=-9;for(let c=s.start;c<s.start+s.count;c++)r=Math.max(r,e[i[c]*3+1]);if(r<1.75||s.count<200)continue;s.hair=!0;let o=new Set;for(let c=s.start;c<s.start+s.count;c++)o.add(i[c]);let l=0;for(let c of o)l=Math.max(l,Math.abs(e[c*3]));if(l>.12){let c=.12/l;for(let a of o)e[a*3]*=c,e[a*3+2]=(e[a*3+2]+.01)*c-.01,e[a*3+1]=1.66+(e[a*3+1]-1.66)*(e[a*3+1]>1.66?.72:c)}for(let c=s.start;c<s.start+s.count;c+=3){let a=0,h=0;for(let d=0;d<3;d++)a+=e[i[c+d]*3+1]/3,h+=e[i[c+d]*3+2]/3;(h>.035&&a<1.715||h>.075&&a<1.74||a<1.6)&&(i[c+1]=i[c+2]=i[c])}}}var ax=4,XE=["near","mid","far"],ox=new Map,qE=(i,e)=>{let t=ox.get(i);if(!t){let n=new ge("#"+i).multiplyScalar(e?.85:.6);e&&n.offsetHSL(0,0,.04),t=new ze({color:n,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),ox.set(i,t)}return t},YE="float zh(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);} float zn(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(zh(i),zh(i+vec3(1,0,0)),f.x),mix(zh(i+vec3(0,1,0)),zh(i+vec3(1,1,0)),f.x),f.y),mix(mix(zh(i+vec3(0,0,1)),zh(i+vec3(1,0,1)),f.x),mix(zh(i+vec3(0,1,1)),zh(i+vec3(1,1,1)),f.x),f.y),f.z);}";function up(i,e){let t=new ze({roughness:i===0?.7:.95,polygonOffset:i!==0,polygonOffsetFactor:-1.5,polygonOffsetUnits:-4});return t.userData.seed={value:e},t.onBeforeCompile=n=>{n.uniforms.zSeed=t.userData.seed,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vZ = position;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vZ; uniform float zSeed;
`+YE).replace("#include <color_fragment>",`#include <color_fragment>
      vec3 q = vZ*vec3(18.)+zSeed; float n = zn(q)*0.6+zn(q*2.3)*0.4;
      ${i===0?"diffuseColor.rgb *= mix(vec3(0.55,0.62,0.5), vec3(1.0), smoothstep(0.25,0.75,n)); float b = smoothstep(0.78,0.86,zn(q*0.7+3.)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.25,0.03,0.04), b*0.8);":"float m2 = zn(vZ*7.+zSeed)*0.65+zn(vZ*15.+zSeed)*0.35; float t = smoothstep(0.70,0.78,m2)*0.8; float e = smoothstep(0.62,0.70,m2)*0.5-t*0.5; diffuseColor.rgb *= 0.85+0.2*zn(q*2.); diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb*0.35, e); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.075,0.095,0.06)*mix(1.,0.6,zn(q*3.)), t); float bl = smoothstep(0.8,0.9,zn(q*0.5+7.)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.22,0.03,0.03), bl*0.7);"}`)},t.customProgramCacheKey=()=>"zmat"+i,t}var lx=1.1,Du=new U,Nu=new ge,xn=new pt,jE=new ge(1,.92,.75),Uu=new Array(ax);function ZE(){let i=document.createElement("canvas");i.width=i.height=32;let e=i.getContext("2d"),t=e.createRadialGradient(16,16,1,16,16,16);t.addColorStop(0,"#fff"),t.addColorStop(.28,"rgba(255,255,255,.7)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32);let n=new Ht(i);return n.colorSpace=ft,n}function KE(i){let e=i.geometry.attributes.position,t=i.geometry.attributes.skinIndex,n=i.geometry.attributes.skinWeight,s=i.skeleton.bones.findIndex(u=>u.name==="head"),r=i.skeleton.boneInverses[s],o=i.bindMatrix,l=new U,c=null,a=null,h=-1e9,d=-1e9;for(let u=0;u<e.count;u++){let f=0;for(let x=0;x<4;x++)t.getComponent(u,x)===s&&(f=Math.max(f,n.getComponent(u,x)));if(f<.45||(l.fromBufferAttribute(e,u).applyMatrix4(o).applyMatrix4(r),l.z<.015))continue;let p=l.z-Math.abs(Math.abs(l.x)-.032)*2.4-Math.abs(l.y-.012)*2.2;l.x<-.01&&p>h?(h=p,c=l.clone()):l.x>.01&&p>d&&(d=p,a=l.clone())}return c=c||new U(-.034,.02,.08),a=a||new U(.034,.02,.08),c.y+=.022,a.y+=.022,c.z+=.01,a.z+=.01,{L:c,R:a}}function $E(i,e,t){xn.position.set(0,-20,0),xn.scale.set(0,0,0),xn.rotation.set(0,0,0),xn.updateMatrix(),i.setMatrixAt(t*2,xn.matrix),i.setMatrixAt(t*2+1,xn.matrix),e.setMatrixAt(t,xn.matrix)}function JE(i,e){let t=i.eyeMesh,n=i.blob,s=i.list,r=i.cam,o=r&&r.quaternion,l=!1;for(let c=0;c<s.length;c++){let a=s[c];if(!(a.root.visible&&a.state!=="dead"&&a.eyeL)){a._eyeOn&&(a._eyeOn=!1,l=!0,$E(t,n,c));continue}a._eyeOn=!0,l=!0,a.bones.head.updateWorldMatrix(!0,!1);let d=a.bones.head.matrixWorld,f=.05*(1+.12*Math.sin(e*(a.runner?9:3.1)+a.phase))*(a.flash>0?1.35:1)*(a.brute?1.22:1);Nu.setRGB(a.brute?.85:a.runner?1:.95,a.brute?.08:a.runner?.42:.16,.04),a.flash>0&&Nu.lerp(jE,Math.min(.65,a.flash*2.5)),o&&xn.quaternion.copy(o),Du.copy(a.eyeL).applyMatrix4(d),xn.position.copy(Du),xn.scale.setScalar(f),xn.updateMatrix(),t.setMatrixAt(c*2,xn.matrix),t.setColorAt(c*2,Nu),Du.copy(a.eyeR).applyMatrix4(d),xn.position.copy(Du),xn.updateMatrix(),t.setMatrixAt(c*2+1,xn.matrix),t.setColorAt(c*2+1,Nu);let p=a.state==="dying"?Math.min(.85,a.dieT*.45):0;xn.position.set(a.pos.x,.04,a.pos.z),xn.rotation.set(-Math.PI/2,0,0),xn.scale.setScalar(Math.max(.01,a.scale*(a.brute?1.15:.92)*(1-p))),xn.updateMatrix(),n.setMatrixAt(c,xn.matrix)}l&&(t.instanceMatrix.needsUpdate=!0,t.instanceColor.needsUpdate=!0,n.instanceMatrix.needsUpdate=!0)}function cx(i){VE(),i.list.forEach((c,a)=>{let h=a%ax,d=Ou[h+":near"].m.bones,u=d.map(x=>{let g=new es;return g.name=x.n,g.position.fromArray(x.t),g});d.forEach((x,g)=>{x.p>=0&&u[x.p].add(u[g])});let f=new De;f.add(u[0]),f.scale.setScalar(Ou[h+":near"].m.scale*lx),f.updateMatrixWorld(!0);let p=new Cs(u);c.sk=up(0,a*7.3),c.sh=up(1,a*3.1),c.pa=up(1,a*5.7+2),c.lods=XE.map(x=>{let g=Ou[h+":"+x],m=[c.sk,c.sh,c.pa],_=g.m.groups.map(w=>w.slot>=0?[c.sk,c.sh,c.pa][w.slot]:qE(w.col,w.hair)),b=g.g.clone();b.clearGroups(),g.m.groups.forEach((w,T)=>b.addGroup(w.start,w.count,T));let y=new Rs(b,_);return y.frustumCulled=!1,y.castShadow=!0,y.bind(p),y.visible=!1,f.add(y),y}),c.bones=Object.fromEntries(u.map(x=>[x.name,x])),c.hipY=c.bones.hips.position.y,c.root.add(f),c.pelvis.traverse(x=>{x.isMesh&&(x.visible=!1)}),c.variant=h,Uu[h]||(Uu[h]=KE(c.lods[0])),c.eyeL=Uu[h].L,c.eyeR=Uu[h].R});let e=i.list.length,t=new Gn(new an(1,1),new st({map:ZE(),color:16777215,transparent:!0,depthWrite:!1,blending:as,toneMapped:!0,fog:!0,side:Ot}),e*2);t.frustumCulled=!1,t.userData.noAO=!0,t.renderOrder=6,t.instanceColor=new xi(new Float32Array(e*6),3);let n=new st({color:0,transparent:!0,opacity:.28,depthWrite:!1}),s=new Gn(new li(.7,14),n,e);s.frustumCulled=!1,s.userData.noAO=!0,s.renderOrder=1,s.receiveShadow=!1,i.scene.add(t,s),i.eyeMesh=t,i.blob=s;let r=i.setTier.bind(i);i.setTier=c=>{i.tier=c,n.opacity=c===0?.5:.26,r(c)};let o=i.update.bind(i),l=[];return i.update=(c,a,h,...d)=>{o(c,a,h,...d),l.length=0;for(let u of i.list)u.root.visible&&(u.d=Math.hypot(u.pos.x-h.x,u.pos.z-h.z),l.push(u));l.sort((u,f)=>u.d-f.d),l.forEach((u,f)=>{let p=f<2&&u.d<7?0:f<5&&u.d<16?1:2;u.lods.forEach((x,g)=>x.visible=g===p),QE(u)}),JE(i,a)},i.lodCounts=()=>{let c=[0,0,0];for(let a of i.list)a.root.visible&&a.lods.forEach((h,d)=>{h.visible&&c[d]++});return c},Object.fromEntries(dp.map(c=>[c.tag,c.tris]))}function QE(i){let e=i.bones;e.hips.position.y=i.hipY+(i.pelvis.position.y-.95)/lx,e.hips.rotation.set(i.pelvis.rotation.x,0,i.pelvis.rotation.z),e.chest.rotation.set(i.upper.rotation.x+.18+(i.brute?.1:0),i.upper.rotation.y,i.upper.rotation.z),e.spine.rotation.x=.1+(i.brute?.05:0),e.head.rotation.set(i.head.rotation.x+.15,.1+(i.head.rotation.y||0),i.head.rotation.z+.22),e.thighL.rotation.set(i.legL.rotation.x,0,.03),e.thighR.rotation.set(i.legR.rotation.x,0,-.03),e.shinL.rotation.x=Math.max(0,-i.legL.rotation.x)*1.25+.1,e.shinR.rotation.x=Math.max(0,-i.legR.rotation.x)*1.25+.1,e.upperArmL.rotation.set(i.armL.rotation.x,0,i.armL.rotation.z),e.upperArmR.rotation.set(i.armR.rotation.x,0,i.armR.rotation.z);let t=n=>-.4-Math.max(0,-n-.32)*.42;if(e.foreArmL.rotation.x=t(i.armL.rotation.x),e.foreArmR.rotation.x=t(i.armR.rotation.x),e.handL.rotation.x=.22,e.handR.rotation.x=.28,i.state==="dying"){let n=Math.min(1,i.dieT/.55);e.foreArmL.rotation.x=-.35-n,e.foreArmR.rotation.x=-.3-n}}var eT=i=>new ge(i);function Mi(i,e,t,n,s,r=0,o=0,l=0,c=1,a=1,h=1){i=i.index?i.toNonIndexed():i.clone();let d=new je().compose(new U(t,n,s),new on().setFromEuler(new Kn(r,o,l)),new U(c,a,h));i.applyMatrix4(d);let u=i.attributes.position.count,f=new Float32Array(u*3),p=eT(e);for(let x=0;x<u;x++){let g=.85+.3*Math.random();f[x*3]=p.r*g,f[x*3+1]=p.g*g,f[x*3+2]=p.b*g}i.setAttribute("color",new ht(f,3));for(let x of Object.keys(i.attributes))["position","normal","color"].includes(x)||i.deleteAttribute(x);return i}function fp(i){let e=new vt;for(let t of["position","normal","color"]){let n=i.map(o=>o.attributes[t].array),s=new Float32Array(n.reduce((o,l)=>o+l.length,0)),r=0;for(let o of n)s.set(o,r),r+=o.length;e.setAttribute(t,new ht(s,3))}return e.computeBoundingSphere(),e}var hx=7234898,ux=11049580,dx=3015944,fx=1966596,px=4852236,tT=[1840914,3811866,5921362,2761760,7031338],zs=(i,e,t)=>new ct(i,e,t),nT=(i,e)=>new Is(i,e,4),mx=i=>new Dr(i,0);function iT(i,e){let t=[],n=i.c,s=i.r,r=n.z+s.z*.86,o=n.y-s.y*.42;for(let a=0;a<6;a++)t.push(Mi(zs(s.x*.12,s.y*.11,.008),ux,(a-2.5)*s.x*.14,o+s.y*.04,r-Math.abs(a-2.5)*.004,0,0,ee(-.2,.2)));t.push(Mi(zs(s.x*.9,s.y*.07,s.z*.25),dx,0,o+s.y*.1,r-s.z*.12)),t.push(Mi(mx(s.x*.38),px,n.x+ee(-.3,.3)*s.x,n.y+s.y*.9,n.z+s.z*.15,0,0,0,1.2,.3,1)),t.push(Mi(zs(s.x*.35,.005,.005),fx,n.x+s.x*.62,n.y-s.y*.1,n.z+s.z*.8,0,.6,1.1));let l=6+(Math.random()*5|0),c=In(tT);if(e)for(let a=0;a<l;a++){let h=ee(0,Math.PI*2),d=ee(.35,1.2),u=Math.cos(h)*Math.cos(d),f=Math.sin(d),p=Math.sin(h)*Math.cos(d)-.25;t.push(Mi(nT(s.x*.12,s.y*ee(.35,.6)),c,n.x+u*s.x*.95,n.y+f*s.y*.95,n.z+p*s.z*.9,p*.9,0,-u*.9))}return fp(t)}function sT(i,e){let t=i.r,n=t.x*.9,s=t.z*.6,r=[Mi(zs(n,t.y*.16,s),e,0,-t.y*.08,s/2),Mi(zs(n*.82,t.y*.06,s*.8),dx,0,t.y*.01,s/2)];for(let o=0;o<5;o++)r.push(Mi(zs(n*.13,t.y*.11,.008),ux,(o-2)*n*.17,t.y*.05,s-.006-Math.abs(o-2)*.004));return fp(r)}function rT(i,e){let t=[Mi(mx(.06),fx,.035,i.y,i.z-.012,0,0,0,1.1,1.15,.25)];for(let n=0;n<4;n++){let s=i.y+.04-n*.026;t.push(Mi(new It(.0055,.0055,.085-n*.008,5),hx,.04,s,i.z+.002,0,0,Math.PI/2+.22))}if(t.push(Mi(zs(.012,.1,.01),hx,-.006,i.y,i.z+.002)),t.push(Mi(zs(.04,.02,.01),px,.06,i.y-.07,i.z,0,0,.6)),e)for(let n=0;n<4;n++)t.push(Mi(zs(ee(.03,.05),ee(.1,.18),.006),e,ee(-.1,.1),i.y-.2-ee(0,.04),i.z-.01,ee(-.1,.1),0,ee(-.25,.25)));return fp(t)}function oT(i,e){let t=i.geometry.attributes.position,n=i.geometry.attributes.skinIndex,s=i.geometry.attributes.skinWeight,r=i.skeleton.bones.findIndex(h=>h.name===e),o=i.skeleton.boneInverses[r],l=new U,c=new U(9,9,9),a=new U(-9,-9,-9);for(let h=0;h<t.count;h++){let d=0;for(let u=0;u<4;u++)n.getComponent(h,u)===r&&(d=Math.max(d,s.getComponent(h,u)));d<.6||(l.fromBufferAttribute(t,h).applyMatrix4(i.bindMatrix).applyMatrix4(o),c.min(l),a.max(l))}return{mn:c,mx:a,c:c.clone().add(a).multiplyScalar(.5),r:a.clone().sub(c).multiplyScalar(.5)}}function aT(i,e){let t=i.geometry.attributes.position,n=i.geometry.attributes.skinIndex,s=i.geometry.attributes.skinWeight,r=i.skeleton.bones.findIndex(d=>d.name===e),o=i.skeleton.boneInverses[r],l=new U,c=-1,a=0,h=0;for(let d=0;d<t.count;d++){let u=0;for(let f=0;f<4;f++)n.getComponent(d,f)===r&&(u=Math.max(u,s.getComponent(d,f)));u<.5||(l.fromBufferAttribute(t,d).applyMatrix4(i.bindMatrix).applyMatrix4(o),Math.abs(l.x)<.06&&(c=Math.max(c,l.z),a+=l.y,h++))}return{y:h?a/h:.05,z:c>0?c:.12}}var lT=[6191698,6980704,9081976,10133668,8022666,10525290,7232074,9207664],cT=[8007471,3099258,5921322,3816004,9071146,2068344,11687466,14209216,4860490,2771498,10127968],hT=[2764602,3813156,2106922,2898474,4604218,2766160];function gx(i){let e=new ze({vertexColors:!0,roughness:.85}),t={},n={};i.list.forEach(o=>{let l=o.lods[0];t[o.variant]=t[o.variant]||aT(l,"chest");let c=n[o.variant]=n[o.variant]||oT(l,"head");o.gHead=new xe(iT(c,Math.random()<.8),e),o.gJaw=new xe(sT(c,5660746),e),o.gJaw.position.set(c.c.x,c.c.y-c.r.y*.5,c.c.z+c.r.z*.25),o.gChest=new xe(rT(t[o.variant],null),e),o.gChest.position.z=.004;for(let a of[o.gHead,o.gJaw,o.gChest])a.frustumCulled=!1,a.visible=!1,a.castShadow=!1;o.bones.head.add(o.gHead,o.gJaw),o.bones.chest.add(o.gChest),o.lodRoot=l.parent});let s=i.spawn.bind(i);i.spawn=(...o)=>{let l=s(...o);if(!l)return l;l.style=Math.random()*3|0,l.jawOpen=ee(.18,.45),l.ribs=Math.random()<.45,l.skull=Math.random()<.9,l.brute||l.sk.color.setHex(In(lT)),l.sh.color.setHex(In(cT)),l.pa.color.setHex(In(hT));let c=l.brute?1.1:ee(.9,1.14),a=l.brute?1:ee(.92,1.08);return l.lodRoot&&(l.lodRoot.scale.set(c,a,Math.min(1.12,c)),l.lodRoot.position.y=0),l.twitch=ee(8,14),l};let r=i.update.bind(i);i.update=(o,l,c,...a)=>{r(o,l,c,...a);for(let h of i.list){let d=h.root.visible&&h.state!=="dead"&&(h.lods[0].visible||h.lods[1].visible);if(h.gHead.visible=h.gJaw.visible=d&&h.skull!==!1,h.gChest.visible=d&&!!h.ribs,!h.root.visible||h.state==="dead")continue;let u=h.bones,f=h.style|0,p=h.phase||0;h.gJaw.rotation.x=(h.jawOpen||.4)+Math.max(0,Math.sin(l*6+p))*.25+(h.attackT>0?.3:0),h.state!=="dying"&&(f===1?(u.upperArmL.rotation.set(.15+Math.sin(p)*.1,0,.12),u.foreArmL.rotation.x=-.1,u.head.rotation.z+=.35,u.shinR.rotation.x+=.35,u.chest.rotation.z+=.12):f===2?(u.head.rotation.y+=Math.sin(l*h.twitch)*.12*(Math.sin(l*1.7+p)>.4?1:0),u.chest.rotation.x+=.22,u.chest.rotation.z+=Math.sin(p*.5)*.22,u.spine.rotation.z=Math.sin(p*.5)*.12,u.head.rotation.x-=.25):u.spine.rotation.z=0)}}}function ea(i){let e=new Map,t=new Map,n=i.clone();return xx(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),l=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=l.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function xx(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)xx(i.children[n],e.children[n],t)}var hr=class extends zi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new yp(t)}),this.register(function(t){return new Mp(t)}),this.register(function(t){return new Pp(t)}),this.register(function(t){return new Ip(t)}),this.register(function(t){return new Lp(t)}),this.register(function(t){return new Sp(t)}),this.register(function(t){return new Ep(t)}),this.register(function(t){return new Tp(t)}),this.register(function(t){return new wp(t)}),this.register(function(t){return new _p(t)}),this.register(function(t){return new Ap(t)}),this.register(function(t){return new bp(t)}),this.register(function(t){return new Cp(t)}),this.register(function(t){return new Rp(t)}),this.register(function(t){return new xp(t)}),this.register(function(t){return new Fu(t,St.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Fu(t,St.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Dp(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let a=Fs.extractUrlBase(e);o=Fs.resolveURL(a,this.path)}else o=Fs.extractUrlBase(e);this.manager.itemStart(e);let l=function(a){s?s(a):console.error(a),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ur(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(a){try{r.parse(a,o,function(h){t(h),r.manager.itemEnd(e)},l)}catch(h){l(h)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},l={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===bx){try{o[St.KHR_BINARY_GLTF]=new Np(e)}catch(d){s&&s(d);return}r=JSON.parse(o[St.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let a=new Hp(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});a.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](a);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case St.KHR_MATERIALS_UNLIT:o[d]=new vp;break;case St.KHR_DRACO_MESH_COMPRESSION:o[d]=new Up(r,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:o[d]=new Op;break;case St.KHR_MESH_QUANTIZATION:o[d]=new Fp;break;default:u.indexOf(d)>=0&&l[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}a.setExtensions(o),a.setPlugins(l),a.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function uT(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function fn(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},xp=class{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],a,h=new ge(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ln);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":a=new Os(h),a.target.position.set(0,0,-1),a.add(a.target);break;case"point":a=new ss(h),a.distance=d;break;case"spot":a=new Br(h),a.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,a.angle=c.spot.outerConeAngle,a.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,a.target.position.set(0,0,-1),a.add(a.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return a.position.set(0,0,0),fs(a,c),c.intensity!==void 0&&(a.intensity=c.intensity),a.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(a),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],l=(r.extensions&&r.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(c){return n._getNodeRef(t.cache,l,c)})}},vp=class{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return st}extendParams(e,t,n){let s=[];e.color=new ge(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ln),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,ft))}return Promise.all(s)}},_p=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},yp=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return fn(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(r,r)}return Promise.all(s)}},Mp=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_DISPERSION}getMaterialType(e){return fn(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},bp=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return fn(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Sp=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){return fn(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new ge(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Ln)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,ft)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Ep=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return fn(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Tp=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){return fn(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ge().setRGB(r[0],r[1],r[2],Ln),Promise.all(s)}},wp=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){return fn(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Ap=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){return fn(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new ge().setRGB(r[0],r[1],r[2],Ln),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,ft)),Promise.all(s)}},Rp=class{constructor(e){this.parser=e,this.name=St.EXT_MATERIALS_BUMP}getMaterialType(e){return fn(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Cp=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return fn(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Pp=class{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Ip=class{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],l=s.images[o.source],c=n.textureLoader;if(l.uri){let a=n.options.manager.getHandler(l.uri);a!==null&&(c=a)}return n.loadTextureImage(e,o.source,c)}},Lp=class{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],l=s.images[o.source],c=n.textureLoader;if(l.uri){let a=n.options.manager.getHandler(l.uri);a!==null&&(c=a)}return n.loadTextureImage(e,o.source,c)}},Fu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(l){let c=s.byteOffset||0,a=s.byteLength||0,h=s.count,d=s.byteStride,u=new Uint8Array(l,c,a);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,u,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(f),h,d,u,s.mode,s.filter),f})})}else return null}},Dp=class{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let a of s.primitives)if(a.mode!==Pi.TRIANGLES&&a.mode!==Pi.TRIANGLE_STRIP&&a.mode!==Pi.TRIANGLE_FAN&&a.mode!==void 0)return null;let o=n.extensions[this.name].attributes,l=[],c={};for(let a in o)l.push(this.parser.getDependency("accessor",o[a]).then(h=>(c[a]=h,c[a])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(a=>{let h=a.pop(),d=h.isGroup?h.children:[h],u=a[0].count,f=[];for(let p of d){let x=new je,g=new U,m=new on,_=new U(1,1,1),b=new Gn(p.geometry,p.material,u);for(let w=0;w<u;w++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,w),c.SCALE&&_.fromBufferAttribute(c.SCALE,w),b.setMatrixAt(w,x.compose(g,m,_));let y=null;for(let w in c)if(w==="_COLOR_0"){let T=c[w];b.instanceColor=new xi(T.array,T.itemSize,T.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(y===null){let P=b.geometry;y=new vt,y.name=P.name;for(let v in P.attributes)y.setAttribute(v,P.attributes[v]);for(let v in P.morphAttributes)y.morphAttributes[v]=P.morphAttributes[v];P.index!==null&&y.setIndex(P.index),y.morphTargetsRelative=P.morphTargetsRelative;for(let v of P.groups)y.addGroup(v.start,v.count,v.materialIndex);P.boundingBox!==null&&(y.boundingBox=P.boundingBox.clone()),P.boundingSphere!==null&&(y.boundingSphere=P.boundingSphere.clone()),y.drawRange.start=P.drawRange.start,y.drawRange.count=P.drawRange.count,y.userData=Object.assign({},P.userData),b.geometry=y}let T=c[w];y.setAttribute(w,new xi(T.array,T.itemSize,T.normalized))}pt.prototype.copy.call(b,p),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},bx="glTF",Ul=12,vx={JSON:1313821514,BIN:5130562},Np=class{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ul),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ul,r=new DataView(e,Ul),o=0;for(;o<s;){let l=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===vx.JSON){let a=new Uint8Array(e,Ul+o,l);this.content=n.decode(a)}else if(c===vx.BIN){let a=Ul+o;this.body=e.slice(a,a+l)}o+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Up=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,l={},c={},a={};for(let h in o){let d=kp[h]||h.toLowerCase();l[d]=o[h]}for(let h in e.attributes){let d=kp[h]||h.toLowerCase();if(o[h]!==void 0){let u=n.accessors[e.attributes[h]],f=ta[u.componentType];a[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let x=f.attributes[p],g=c[p];g!==void 0&&(x.normalized=g)}d(f)},l,a,Ln,u)})})}},Op=class{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Fp=class{constructor(){this.name=St.KHR_MESH_QUANTIZATION}},Bu=class extends is{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=l*2,a=l*3,h=s-t,d=(n-t)/h,u=d*d,f=u*d,p=e*a,x=p-a,g=-2*f+3*u,m=f-u,_=1-g,b=m-u+d;for(let y=0;y!==l;y++){let w=o[x+y+l],T=o[x+y+c]*h,P=o[p+y+l],v=o[p+y]*h;r[y]=_*w+b*T+g*P+m*v}return r}},dT=new on,Bp=class extends Bu{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return dT.fromArray(r).normalize().toArray(r),r}},Pi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ta={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_x={9728:tn,9729:Wt,9984:Sh,9985:Vo,9986:Xr,9987:di},yx={33071:Cn,33648:Ao,10497:en},pp={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},kp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},cr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fT={CUBICSPLINE:void 0,LINEAR:wr,STEP:Tr},mp={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pT(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ze({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:os})),i.DefaultMaterial}function Kr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fs(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mT(i,e,t){let n=!1,s=!1,r=!1;for(let a=0,h=e.length;a<h;a++){let d=e[a];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],l=[],c=[];for(let a=0,h=e.length;a<h;a++){let d=e[a];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;o.push(u)}if(s){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;l.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;c.push(u)}}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(a){let h=a[0],d=a[1],u=a[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function gT(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xT(i){let e,t=i.extensions&&i.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+gp(t.attributes):e=i.indices+":"+gp(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+gp(i.targets[n]);return e}function gp(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function zp(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vT(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var _T=new je,Hp=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new uT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;let c=l.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=l.indexOf("Firefox")>-1,o=r?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new ui(this.options.manager):this.textureLoader=new tl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ur(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let l={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Kr(r,l,s),fs(l,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(l)})).then(function(){for(let c of l.scenes)c.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let l=0,c=o.length;l<c;l++)e[o[l]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,l)=>{let c=this.associations.get(o);c!=null&&this.associations.set(l,c);for(let[a,h]of o.children.entries())r(h,l.children[a])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Fs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=pp[s.type],l=ta[s.componentType],c=s.normalized===!0,a=new l(s.count*o);return Promise.resolve(new ht(a,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let l=o[0],c=pp[s.type],a=ta[s.componentType],h=a.BYTES_PER_ELEMENT,d=h*c,u=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,g;if(f&&f!==d){let m=Math.floor(u/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,b=t.cache.get(_);b||(x=new a(l,m*f,s.count*f/h),b=new Cr(x,f/h),t.cache.add(_,b)),g=new nr(b,c,u%f/h,p)}else l===null?x=new a(s.count*c):x=new a(l,u,s.count*c),g=new ht(x,c,p);if(s.sparse!==void 0){let m=pp.SCALAR,_=ta[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,w=new _(o[1],b,s.sparse.count*m),T=new a(o[2],y,s.sparse.count*c);l!==null&&(g=new ht(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let P=0,v=w.length;P<v;P++){let M=w[P];if(g.setX(M,T[P*c]),c>=2&&g.setY(M,T[P*c+1]),c>=3&&g.setZ(M,T[P*c+2]),c>=4&&g.setW(M,T[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],l=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(l=c)}return this.loadTextureImage(e,r,l)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],l=r.images[t],c=(l.uri||l.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let a=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||l.name||"",h.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(h.name=l.uri);let u=(r.samplers||{})[o.sampler]||{};return h.magFilter=_x[u.magFilter]||Wt,h.minFilter=_x[u.minFilter]||di,h.wrapS=yx[u.wrapS]||en,h.wrapT=yx[u.wrapT]||en,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==tn&&h.minFilter!==Wt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=a,a}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=s.images[e],l=self.URL||self.webkitURL,c=o.uri||"",a=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(d){a=!0;let u=new Blob([d],{type:o.mimeType});return c=l.createObjectURL(u),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let p=u;t.isImageBitmapLoader===!0&&(p=function(x){let g=new Mn(x);g.needsUpdate=!0,u(g)}),t.load(Fs.resolveURL(d,r.path),p,void 0,f)})}).then(function(d){return a===!0&&l.revokeObjectURL(c),fs(d,o),d.userData.mimeType=o.mimeType||vT(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[St.KHR_TEXTURE_TRANSFORM]){let l=n.extensions!==void 0?n.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(l){let c=r.associations.get(o);o=r.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(o,l),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let l="PointsMaterial:"+n.uuid,c=this.cache.get(l);c||(c=new Uo,zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(l,c)),n=c}else if(e.isLine){let l="LineBasicMaterial:"+n.uuid,c=this.cache.get(l);c||(c=new No,zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(l,c)),n=c}if(s||r||o){let l="ClonedMaterial:"+n.uuid+":";s&&(l+="derivative-tangents:"),r&&(l+="vertex-colors:"),o&&(l+="flat-shading:");let c=this.cache.get(l);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(l,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ze}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,l={},c=r.extensions||{},a=[];if(c[St.KHR_MATERIALS_UNLIT]){let d=s[St.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),a.push(d.extendParams(l,r,t))}else{let d=r.pbrMetallicRoughness||{};if(l.color=new ge(1,1,1),l.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;l.color.setRGB(u[0],u[1],u[2],Ln),l.opacity=u[3]}d.baseColorTexture!==void 0&&a.push(t.assignTexture(l,"map",d.baseColorTexture,ft)),l.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,l.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(a.push(t.assignTexture(l,"metalnessMap",d.metallicRoughnessTexture)),a.push(t.assignTexture(l,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),a.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,l)})))}r.doubleSided===!0&&(l.side=Ot);let h=r.alphaMode||mp.OPAQUE;if(h===mp.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,h===mp.MASK&&(l.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==st&&(a.push(t.assignTexture(l,"normalMap",r.normalTexture)),l.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;l.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==st&&(a.push(t.assignTexture(l,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==st){let d=r.emissiveFactor;l.emissive=new ge().setRGB(d[0],d[1],d[2],Ln)}return r.emissiveTexture!==void 0&&o!==st&&a.push(t.assignTexture(l,"emissiveMap",r.emissiveTexture,ft)),Promise.all(a).then(function(){let d=new o(l);return r.name&&(d.name=r.name),fs(d,r),t.associations.set(d,{materials:e}),r.extensions&&Kr(s,d,r),d})}createUniqueName(e){let t=zt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(l){return n[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(c){return Mx(c,l,t)})}let o=[];for(let l=0,c=e.length;l<c;l++){let a=e[l],h=xT(a),d=s[h];if(d)o.push(d.promise);else{let u;a.extensions&&a.extensions[St.KHR_DRACO_MESH_COMPRESSION]?u=r(a):u=Mx(new vt,a,t),a.mode===Pi.TRIANGLE_STRIP?u=u.then(f=>Wf(f,vl)):a.mode===Pi.TRIANGLE_FAN&&(u=u.then(f=>Wf(f,qo))),s[h]={primitive:a,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,l=[];for(let c=0,a=o.length;c<a;c++){let h=o[c].material===void 0?pT(this.cache):this.getDependency("material",o[c].material);l.push(h)}return l.push(t.loadGeometries(o)),Promise.all(l).then(async function(c){let a=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,p=h.length;f<p;f++){let x=h[f],g=o[f],m,_=a[f];if(g.mode===Pi.TRIANGLES||g.mode===Pi.TRIANGLE_STRIP||g.mode===Pi.TRIANGLE_FAN||g.mode===void 0){let b=r.isSkinnedMesh===!0,y=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");b&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=b&&y?new Rs(x,_):new xe(x,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===Pi.LINES)m=new Na(x,_);else if(g.mode===Pi.LINE_STRIP)m=new Ir(x,_);else if(g.mode===Pi.LINE_LOOP)m=new Ua(x,_);else if(g.mode===Pi.POINTS)m=new Ps(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&gT(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),fs(m,r),g.extensions&&Kr(s,m,g),t.assignFinalMaterial(m),d.push(m)}for(let f=0,p=d.length;f<p;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Kr(s,d[0],r),d[0];let u=new De;r.extensions&&Kr(s,u,r),t.associations.set(u,{meshes:e});for(let f=0,p=d.length;f<p;f++)u.add(d[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new gn(Vi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new rs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fs(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,l=[],c=[];for(let a=0,h=o.length;a<h;a++){let d=o[a];if(d){l.push(d);let u=new je;r!==null&&u.fromArray(r.array,a*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[a])}return new Cs(l,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],l=[],c=[],a=[],h=[];for(let d=0,u=s.channels.length;d<u;d++){let f=s.channels[d],p=s.samplers[f.sampler],x=f.target,g=x.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,_=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),l.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",_)),a.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(a),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],p=d[2],x=d[3],g=d[4],m=[];for(let b=0,y=u.length;b<y;b++){let w=u[b],T=f[b],P=p[b],v=x[b],M=g[b];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let E=n._createAnimationTracks(w,T,P,v,M);if(E)for(let D=0;D<E.length;D++)m.push(E[D])}let _=new Nr(r,void 0,m);return fs(_,s),_})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(l){if(l.isMesh)for(let c=0,a=s.weights.length;c<a;c++)l.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],l=s.children||[];for(let a=0,h=l.length;a<h;a++)o.push(n.getDependency("node",l[a]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(a){let h=a[0],d=a[1],u=a[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,_T)});for(let f=0,p=d.length;f<p;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){let f=h.userData.pivot,p=d[0];h.pivot=new U().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",l=[],c=s._invokeOne(function(a){return a.createNodeMesh&&a.createNodeMesh(e)});return c&&l.push(c),r.camera!==void 0&&l.push(s.getDependency("camera",r.camera).then(function(a){return s._getNodeRef(s.cameraCache,r.camera,a)})),s._invokeAll(function(a){return a.createNodeAttachment&&a.createNodeAttachment(e)}).forEach(function(a){l.push(a)}),this.nodeCache[e]=Promise.all(l).then(function(a){let h;if(r.isBone===!0?h=new es:a.length>1?h=new De:a.length===1?h=a[0]:h=new pt,h!==a[0])for(let d=0,u=a.length;d<u;d++)h.add(a[d]);if(r.name&&(h.userData.name=r.name,h.name=o),fs(h,r),r.extensions&&Kr(n,h,r),r.matrix!==void 0){let d=new je;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let d=s.associations.get(h);s.associations.set(h,{...d})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new De;n.name&&(r.name=s.createUniqueName(n.name)),fs(r,n),n.extensions&&Kr(t,r,n);let o=n.nodes||[],l=[];for(let c=0,a=o.length;c<a;c++)l.push(s.getDependency("node",o[c]));return Promise.all(l).then(function(c){for(let h=0,d=c.length;h<d;h++){let u=c[h];u.parent!==null?r.add(ea(u)):r.add(u)}let a=h=>{let d=new Map;for(let[u,f]of s.associations)(u instanceof zn||u instanceof Mn)&&d.set(u,f);return h.traverse(u=>{let f=s.associations.get(u);f!=null&&d.set(u,f)}),d};return s.associations=a(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],l=e.name?e.name:e.uuid,c=[];function a(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}cr[r.path]===cr.weights?(a(e),e.isGroup&&e.children.forEach(a)):c.push(l);let h;switch(cr[r.path]){case cr.weights:h=Ds;break;case cr.rotation:h=Ns;break;case cr.translation:case cr.scale:h=ir;break;default:n.itemSize===1?h=Ds:h=ir;break}let d=s.interpolation!==void 0?fT[s.interpolation]:wr,u=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let x=new h(c[f]+"."+cr[r.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=zp(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ns?Bp:Bu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function yT(i,e,t){let n=e.attributes,s=new bn;if(n.POSITION!==void 0){let l=t.json.accessors[n.POSITION],c=l.min,a=l.max;if(c!==void 0&&a!==void 0){if(s.set(new U(c[0],c[1],c[2]),new U(a[0],a[1],a[2])),l.normalized){let h=zp(ta[l.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let l=new U,c=new U;for(let a=0,h=r.length;a<h;a++){let d=r[a];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,p=u.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),u.normalized){let x=zp(ta[u.componentType]);c.multiplyScalar(x)}l.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(l)}i.boundingBox=s;let o=new ai;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Mx(i,e,t){let n=e.attributes,s=[];function r(o,l){return t.getDependency("accessor",o).then(function(c){i.setAttribute(l,c)})}for(let o in n){let l=kp[o]||o.toLowerCase();l in i.attributes||s.push(r(n[o],l))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(l){i.setIndex(l)});s.push(o)}return gt.workingColorSpace!==Ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${gt.workingColorSpace}" not supported.`),fs(i,e),yT(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?mT(i,e.targets,t):i})}var Ol="assets/hd/z/",Ex=new hr,MT=new ui;Ex.register(i=>(i.textureLoader=new ui(i.options.manager),{name:"csp_img"}));var ku=(i,e)=>MT.loadAsync(i).then(t=>(t.flipY=!1,t.colorSpace=e?ft:Dn,t.anisotropy=4,t));var bT={walk:"Zombie_Walk_Fwd_Loop",run:"Jog_Fwd_Loop",idle:"Zombie_Idle_Loop",attack:"Zombie_Scratch",climb:"ClimbUp_1m",death:"Death01",hit:"Hit_Chest",hitHead:"Hit_Head",knock:"Hit_Knockback"};function Sx(i,e,t){let n=i.scene;n.updateMatrixWorld(!0);let s=["LOD0","LOD1","LOD2"].map(T=>n.getObjectByName(T)).map(T=>T&&(T.isSkinnedMesh?T:T.children.find(P=>P.isSkinnedMesh))).filter(Boolean),r=s[0],o=new bn;r.geometry.computeBoundingBox(),o.copy(r.geometry.boundingBox).applyMatrix4(r.bindMatrix);let l=o.max.y-o.min.y,c=r.skeleton,a=c.bones.findIndex(T=>/^head$/i.test(T.name)),h=r.geometry.attributes.position,d=r.geometry.attributes.skinIndex,u=r.geometry.attributes.skinWeight,f=new U,p=null,x=-1e9,g=0,m=0;for(let T=0;T<h.count;T++){let P=0;for(let v=0;v<4;v++)d.getComponent(T,v)===a&&(P=Math.max(P,u.getComponent(T,v)));P<.5||(f.fromBufferAttribute(h,T).applyMatrix4(r.bindMatrix),g+=f.z,m++)}g/=Math.max(1,m);let _=Math.sign(g)||1;for(let T=0;T<h.count;T++){let P=0;for(let E=0;E<4;E++)d.getComponent(T,E)===a&&(P=Math.max(P,u.getComponent(T,E)));if(P<.5)continue;f.fromBufferAttribute(h,T).applyMatrix4(r.bindMatrix);let v=(f.y-o.min.y)/l;if(v<.86||v>.93)continue;let M=_*(f.z-g)-Math.abs(f.x)*3;M>x&&(x=M,p=f.clone())}p||(p=new U(0,o.min.y+.9*l,g+_*.08));let b=l/1.8,y=c.boneInverses[a],w=T=>new U(T*b,p.y+.035*b,p.z-_*.028*b).applyMatrix4(y);return{scene:n,H:l,box:o,front:_,eyes:p?{L:w(-.033),R:w(.033)}:null,map:e,nrm:t,nLods:s.length}}async function Wp(i){let e=u=>Ex.loadAsync(Ol+u),[t,n,s,r,o,l,c,a]=await Promise.all([e(i?"zombie_m.glb":"zombie_m_lo.glb"),e(i?"zombie_f.glb":"zombie_f_lo.glb"),e("zanim_ual1.glb"),e("zanim_ual2.glb"),ku(Ol+`zskin_m_${i?1024:512}.webp`,!0),ku(Ol+`zskin_f_${i?1024:512}.webp`,!0),i?ku(Ol+"znrm_m_1024.webp"):null,i?ku(Ol+"znrm_f_1024.webp"):null]),h={};for(let u of[...s.animations,...r.animations])h[u.name.replace(/^.*\|/,"")]=u;let d={};for(let[u,f]of Object.entries(bT))if(d[u]=h[f],!d[u])throw new Error("missing clip "+f);return ST(d.climb),{hi:i,m:Sx(t,o,c),f:Sx(n,l,a),clips:d}}function ST(i){for(let e of i.tracks)if(/pelvis\.position$/.test(e.name)){let t=e.values,n=t[0],s=t[1],r=t[2];for(let o=0;o<t.length;o+=3)t[o]=n,t[o+1]=s,t[o+2]=r}}var ET="float zh(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);} float zn(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(zh(i),zh(i+vec3(1,0,0)),f.x),mix(zh(i+vec3(0,1,0)),zh(i+vec3(1,1,0)),f.x),f.y),mix(mix(zh(i+vec3(0,0,1)),zh(i+vec3(1,0,1)),f.x),mix(zh(i+vec3(0,1,1)),zh(i+vec3(1,1,1)),f.x),f.y),f.z);}";function TT(i,e){let t=new ze({map:i.map,normalMap:i.nrm||null,roughness:.62,metalness:0,emissive:0});return i.nrm&&t.normalScale.set(.8,.8),t.userData.u=e,t.onBeforeCompile=n=>{Object.assign(n.uniforms,e),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vB; uniform vec4 uBox;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec3 b = (bindMatrix * vec4(position, 1.)).xyz; vB = vec3((b.x - uBox.x) / uBox.w, (b.y - uBox.y) / uBox.w, (b.z - uBox.z) / uBox.w); }`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vB; uniform vec3 uShirt, uPants, uHair; uniform vec4 uCloth; uniform vec4 uMisc; float zCloth = 0., zBlood = 0.;
`+ET).replace("#include <map_fragment>",`#include <map_fragment>
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
roughnessFactor = mix(roughnessFactor, 0.95, zCloth); roughnessFactor = mix(roughnessFactor, 0.3, zBlood * 0.8);`)},t.customProgramCacheKey=()=>"zrig"+(i.nrm?"n":""),t}var wT=[5910576,3424346,5000244,3816e3,6969400,3365456,7227956,9078396,4602956,3026478,8025190],AT=[2501688,3813156,1909800,2898474,4866358,2306634],RT=[1709330,3811868,5917240,7236194,2761760],Gp=i=>i[Math.random()*i.length|0],zu=new ge,Hu=new U,vn=new pt,CT=new ge(1,.92,.75);function PT(){let i=document.createElement("canvas");i.width=i.height=32;let e=i.getContext("2d"),t=e.createRadialGradient(16,16,1,16,16,16);t.addColorStop(0,"#fff"),t.addColorStop(.28,"rgba(255,255,255,.7)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32);let n=new Ht(i);return n.colorSpace=ft,n}function Tx(i){let e=i.zu;if(!e)return;let t=i.brute;e.uShirt.value.set(Gp(wT)).multiplyScalar(.7+Math.random()*.3),e.uPants.value.set(Gp(AT)),e.uHair.value.set(Gp(RT)),e.uCloth.value.set(t?0:Math.random()*.2,Math.random()<.2?.3:.05+Math.random()*.06,t||Math.random()<.12?1:0,Math.random()*50),e.uMisc.value.x=Math.random()<.25?0:1,e.uMisc.value.z=i.female?.75:Math.random()*.6,i.sk.color.setRGB(1,1,1).offsetHSL(0,0,-Math.random()*.15),t&&i.sk.color.setRGB(.95,.8,.75)}function IT(i,e,t){i.model&&(i.root.remove(i.model),i.mixer?.stopAllAction());let n=!i.brute&&e%3===2,s=n?t.f:t.m;i.female=n;let r=ea(s.scene),o=(n?1.72:1.8)/s.H;r.scale.setScalar(o),s.front<0&&(r.rotation.y=Math.PI);let l=i.zu||{uShirt:{value:new ge},uPants:{value:new ge},uHair:{value:new ge},uCloth:{value:new At},uMisc:{value:new At(1,1,.3,0)}};l.uBox={value:new At(s.box.min.x+(s.box.max.x-s.box.min.x)/2,s.box.min.y,s.box.min.z+(s.box.max.z-s.box.min.z)/2,s.H)},l.uMisc.value.y=s.front,i.zu=l;let c=TT(s,l),a=i.sk;i.sk=c,a&&a!==c&&c.color.copy(a.color);let h=[];r.traverse(u=>{u.isSkinnedMesh&&(u.material=c,u.frustumCulled=!1,u.castShadow=!0,u.receiveShadow=!0,h.push(u))}),h.sort((u,f)=>u.name.localeCompare(f.name)),i.lods=t.hi?h:[null,...h],i.model=r,i.root.add(r),i.pelvis.traverse(u=>{u.isMesh&&(u.visible=!1)}),i.bones={head:r.getObjectByName(h[0].skeleton.bones.find(u=>/^head$/i.test(u.name)).name)},i.eyeL=s.eyes?.L||new U,i.eyeR=s.eyes?.R||new U;let d=i.mixer=new kr(r);i.acts={};for(let[u,f]of Object.entries(t.clips)){let p=d.clipAction(f);i.acts[u]=p}for(let u of["death","hit","hitHead","knock"])i.acts[u].setLoop(Xo,1),i.acts[u].clampWhenFinished=u==="death";i.cur=null,i.lastHit=0,i.vel=0,i.px=i.pos.x,i.pz=i.pos.z,i.rate=.9+Math.random()*.2,i.macc=0,i.state!=="dead"&&Tx(i)}function $r(i,e,t=.25,n=1){let s=i.acts[e];if(s.timeScale=n*i.rate,i.cur===e)return;let r=i.cur&&i.acts[i.cur];s.reset(),s.enabled=!0,s.setEffectiveWeight(1),e!=="death"&&e!=="climb"&&(s.time=Math.random()*s.getClip().duration),s.play(),r&&r.crossFadeTo(s,t,!1),i.cur=e}var Vp=null;function LT(i,e){i.state==="dying"&&i.cur!=="death"&&Vp?.onBlood?.(i.pos.x,i.pos.z,1.1*i.scale);let t=i.pos.x-i.px,n=i.pos.z-i.pz;i.px=i.pos.x,i.pz=i.pos.z;let s=e>0?Math.min(8,Math.hypot(t,n)/e):0;if(i.vel+=(s-i.vel)*Math.min(1,e*6),i.state==="dying"?$r(i,"death",.12,1.25):i.state==="climb"?$r(i,"climb",.2,.62):i.state==="attack"?$r(i,"attack",.3,1):i.attackT>0?$r(i,"attack",.12,1.9):i.vel>(i.runner?1.6:2.6)?$r(i,"run",.3,Math.min(1.6,Math.max(.7,i.vel/3.6))):i.vel>.12?$r(i,"walk",.3,Math.min(2.4,Math.max(.55,i.vel/.95))):(i.cur!=="attack"||i.attackT<=0)&&$r(i,"idle",.4,1),(i.cur==="run"||i.cur==="walk")&&(i.acts[i.cur].timeScale=i.rate*(i.cur==="run"?Math.min(1.6,Math.max(.7,i.vel/3.6)):Math.min(2.4,Math.max(.55,i.vel/.95)))),i.hitT>.15&&i.lastHit<=0&&Math.random()<.45&&Vp?.onBlood?.(i.pos.x+(Math.random()-.5)*.6,i.pos.z+(Math.random()-.5)*.6,.45+Math.random()*.4),i.hitT>.15&&i.lastHit<=0&&i.state!=="dying"){let r=i.acts[Math.random()<.5?"hit":"hitHead"];r.reset(),r.setEffectiveWeight(.65),r.fadeIn(.04),r.play(),i.hitAct=r,i.hitClock=.3}i.lastHit=i.hitT,i.hitAct&&(i.hitClock-=e,i.hitClock<=0&&(i.hitAct.fadeOut(.2),i.hitAct=null))}function Xp(i,e){if(Vp=i,i.kit=e,i.list.forEach((u,f)=>IT(u,f,e)),i._zrig)return;i._zrig=!0;let t=i.list.length,n=new Gn(new an(1,1),new st({map:PT(),color:16777215,transparent:!0,depthWrite:!1,toneMapped:!0,fog:!0,side:Ot}),t*2);n.frustumCulled=!1,n.userData.noAO=!0,n.renderOrder=6,n.instanceColor=new xi(new Float32Array(t*6),3);let s=new st({color:0,transparent:!0,opacity:.28,depthWrite:!1}),r=new Gn(new li(.7,14),s,t);r.frustumCulled=!1,r.userData.noAO=!0,r.renderOrder=1,i.scene.add(n,r),i.eyeMesh=n,i.blob=r;let o=u=>{vn.position.set(0,-20,0),vn.scale.set(0,0,0),vn.updateMatrix(),n.setMatrixAt(u*2,vn.matrix),n.setMatrixAt(u*2+1,vn.matrix),r.setMatrixAt(u,vn.matrix)},l=i.setTier.bind(i);i.setTier=u=>{i.tier=u,s.opacity=u===0?.5:.26;for(let f of i.list)f.lods.forEach(p=>p&&(p.castShadow=u>0));l(u)};let c=i.spawn.bind(i);i.spawn=(...u)=>{let f=c(...u);return f&&(Tx(f),f.cur=null,f.mixer?.stopAllAction(),f.px=f.pos.x,f.pz=f.pos.z,f.vel=0),f};let a=i.update.bind(i),h=[],d=0;i.tick=(u,f,p)=>{d++,h.length=0;for(let _ of i.list)_.root.visible&&_.state!=="dead"&&(_.d=Math.hypot(_.pos.x-p.x,_.pos.z-p.z),h.push(_));h.sort((_,b)=>_.d-b.d);let x=!!i.kit.hi;h.forEach((_,b)=>{let y=b<2&&_.d<7?0:b<6&&_.d<16?1:2;!x&&y===0&&(y=1),_.lods.forEach((T,P)=>T&&(T.visible=P===y)),LT(_,u),_.macc+=u;let w=y===2?_.d>40?3:2:1;(d%w===0||_.state==="dying")&&(_.mixer.update(_.macc),_.macc=0)});let g=i.cam&&i.cam.quaternion,m=!1;for(let _=0;_<i.list.length;_++){let b=i.list[_];if(!(b.root.visible&&b.state!=="dead")){b._eyeOn&&(b._eyeOn=!1,m=!0,o(_));continue}b._eyeOn=!0,m=!0,b.bones.head.updateWorldMatrix(!0,!1);let w=b.bones.head.matrixWorld,T=1+.12*Math.sin(f*(b.runner?9:3.1)+b.phase),P=.04*T*(b.flash>0?1.35:1)*(b.brute?1.2:1)*(b.state==="dying"?Math.max(0,1-b.dieT):1);zu.setRGB(b.brute?.85:b.runner?1:.95,b.brute?.08:b.runner?.42:.16,.04),b.flash>0&&zu.lerp(CT,Math.min(.65,b.flash*2.5)),g&&vn.quaternion.copy(g),Hu.copy(b.eyeL).applyMatrix4(w),vn.position.copy(Hu),vn.scale.setScalar(P),vn.updateMatrix(),n.setMatrixAt(_*2,vn.matrix),n.setColorAt(_*2,zu),Hu.copy(b.eyeR).applyMatrix4(w),vn.position.copy(Hu),vn.updateMatrix(),n.setMatrixAt(_*2+1,vn.matrix),n.setColorAt(_*2+1,zu);let v=b.state==="dying"?Math.min(.85,b.dieT*.45):0;vn.quaternion.identity(),vn.position.set(b.pos.x,.04,b.pos.z),vn.rotation.set(-Math.PI/2,0,0),vn.scale.setScalar(Math.max(.01,b.scale*(b.brute?1.15:.92)*(1-v))),vn.updateMatrix(),r.setMatrixAt(_,vn.matrix)}m&&(n.instanceMatrix.needsUpdate=!0,n.instanceColor.needsUpdate=!0,r.instanceMatrix.needsUpdate=!0)},i.update=(u,f,p,...x)=>{a(u,f,p,...x),i.tick(u,f,p),i._ticked=!0},i.lodCounts=()=>{let u=[0,0,0];for(let f of i.list)f.root.visible&&f.lods.forEach((p,x)=>{p&&p.visible&&u[x]++});return u}}var Hx=[1638320,16757575,7059711,16739285],ti={camoA:"#9C8A6B",camoB:"#7A6A4F",camoC:"#5E5A3E",camoD:"#B8A887",gear:7232320,helm:9074262,dark:2828839,glove:6052412,boot:10849382,sole:3813672,gaiter:5197880,skin:12159850,glass:1974050,rifle:1710618,rail:2763306,strap:3814184},wx="assets/hd/soldier/",Gx=new hr;Gx.register(i=>(i.textureLoader=new ui(i.options.manager),{name:"csp_img"}));var Bl=null;async function Vx(i){let e=new ui,t=(d,u)=>e.loadAsync(wx+d).then(f=>(f.flipY=!1,f.colorSpace=u?ft:Dn,f.anisotropy=4,f.wrapS=f.wrapT=Cn,f.needsUpdate=!0,f)),n=i?1024:512,[s,r,o,l]=await Promise.all([Gx.loadAsync(wx+(i?"soldier.glb":"soldier_lo.glb")),t(`soldier_diff_${n}.webp`,!0),t(`soldier_nrm_${n}.webp`,!1),t(`soldier_orm_${n}.webp`,!1)]),c=new ze({map:r,normalMap:o,roughnessMap:l,metalnessMap:l,roughness:.88,metalness:.05});c.color.setScalar(.74);let a=new ze({color:1710618,roughness:.45,metalness:.32});s.scene.updateMatrixWorld(!0),s.scene.traverse(d=>{if(!d.isMesh)return;let u=/rifle/i.test(d.name);d.material=u?a:c,d.castShadow=!0,d.receiveShadow=!0,d.frustumCulled=!1});let h={};for(let d of s.animations||[])h[d.name]=d;return Bl={hi:i,scene:s.scene,clips:h,bodyMat:c,rifleMat:a},Bl}var Ax=["root","hips","spine","chest","neck","head","clavL","upperL","lowerL","handL","clavR","upperR","lowerR","handR","thighL","calfL","footL","toeL","thighR","calfR","footR","toeR","weapon"];function DT(i){let e={};i.traverse(t=>{(t.isBone||Ax.includes(t.name))&&(e[t.name]=t)});for(let t of Ax)e[t]||(e[t]=i.getObjectByName(t));return e}function NT(i,e){let t=(e%4+4)%4,n=Xx(),s=ea(Bl.scene);s.traverse(_=>{_.isMesh&&(_.material=_.material.clone())});let r=DT(s),o=new kr(s),l={};for(let[_,b]of Object.entries(Bl.clips)){if(!b||!b.tracks.length)continue;let y=o.clipAction(b);y.enabled=!0,y.setEffectiveWeight(0),_==="reload"||_==="flinch"||_==="aim"?(y.setLoop(Xo,1),y.clampWhenFinished=!0):y.setLoop(au),l[_]=y}l.idle&&(l.idle.setEffectiveWeight(1),l.idle.play());let c=new De,a=new De;a.add(s),c.add(a);let h=eo(it(.05,.035,.01,.002),n.teams[t]);h.position.set(-.075,.02,-.06),h.castShadow=!1,(r.upperL||r.clavL||r.chest||a).add(h);let d=null;s.traverse(_=>{_.isMesh&&/rifle/i.test(_.name)&&(d=_)});let u=Wu(n);u.visible=!1,r.weapon?r.weapon.add(u):a.add(u);let f=Wu(n);f.visible=!1,r.handL&&r.handL.add(f);let p=Yx(i,t);c.add(p);let x=new xe(new Jt(.07,8,6),new st({color:1638320}));x.position.y=2.45,x.visible=!1,c.add(x);let g=[],m=new Set;return c.traverse(_=>{if(!_.isMesh||!_.material)return;let b=Array.isArray(_.material)?_.material:[_.material];for(let y of b)m.has(y)||(m.add(y),g.push(y))}),c.userData={body:a,gun:d,gun2:f,name:i,talk:x,gunId:"",map:r,mixer:o,acts:l,kit:!0,weapons:{rifle:d,pistol:u},mount:r.weapon||null,mats:g,tag:p,phase:0,distAcc:0,spd:0,fwd:0,strafe:0,conn:!0,stats:jx(c),lodFar:[h],lod:0,recoilT:0,reloadT:0,flinchT:0,plantL:null,plantR:null,lastMag:null,lastHp:null,clipW:{idle:1,walk:0,run:0,strafe:0}},qu(c,"rifle"),to(c,{dt:0,t:0,speed:0,pitch:0,down:!1}),c}function UT(i,{dt:e,speed:t,fwd:n,strafe:s,pitch:r,down:o,dist:l,recoil:c,reload:a,flinch:h}){let d=i.userData,u=d.acts||{};Kx(i,l);let f=Math.max(0,t||0),p=f>.35,x=p?Vi.smoothstep(f,2.2,4.2):0,g=p?1-x:0,_=p&&!x&&Math.abs(s||0)>Math.abs(n||0)+.25?Math.min(1,g):0;_&&(g*=1-_);let y={idle:Math.max(0,1-g-x-_),walk:g,run:x,strafe:_},w=Math.min(1,(e||.016)*8);d.clipW=d.clipW||{idle:1,walk:0,run:0,strafe:0};let T=Vi.clamp(f*1.333/.62,.7,2.4),P=Vi.clamp(f*.833/1.05,.8,2.2);for(let M of["idle","walk","run","strafe"]){let E=u[M];if(!E)continue;d.clipW[M]+=(y[M]-d.clipW[M])*w;let D=d.clipW[M];D>.02?(E.isRunning()||E.play(),E.setEffectiveWeight(D),M==="walk"?E.setEffectiveTimeScale((n||0)<-.2?-T:T):M==="run"?E.setEffectiveTimeScale((n||0)<-.2?-P:P):M==="strafe"?E.setEffectiveTimeScale((s||0)<0?-1:1):E.setEffectiveTimeScale(1)):(E.setEffectiveWeight(0),E.isRunning()&&E.stop())}a>0&&u.reload&&(u.reload.reset().setEffectiveWeight(1).play(),d.reloadT=u.reload.getClip().duration),h>0&&u.flinch&&(u.flinch.reset().setEffectiveWeight(1).play(),d.flinchT=u.flinch.getClip().duration),c>0&&(d.recoilT=1),d.reloadT>0&&(d.reloadT=Math.max(0,d.reloadT-e)),d.flinchT>0&&(d.flinchT=Math.max(0,d.flinchT-e));let v=!p&&Math.abs(r||0)>.12?Math.min(1,Math.abs(r)*1.2):0;if(u.aim&&(v>.05?(u.aim.isRunning()||u.aim.play(),u.aim.setEffectiveWeight(v)):(u.aim.setEffectiveWeight(0),u.aim.isRunning()&&u.aim.weight===0&&u.aim.stop())),d.mixer.update(e||0),d.map.chest&&d.map.chest.rotateX(-(r||0)*.65),d.map.head&&d.map.head.rotateX(-(r||0)*.35),d.recoilT>0){let M=d.recoilT;d.map.weapon&&d.map.weapon.rotateX(-M*.35),d.map.chest&&d.map.chest.rotateX(-M*.08),d.recoilT=Math.max(0,d.recoilT-(e||.016)*6)}}function Wx(i,e){let t=document.createElement("canvas");t.width=t.height=i,e(t.getContext("2d"),i);let n=new Ht(t);return n.anisotropy=4,n.wrapS=n.wrapT=en,n.needsUpdate=!0,n}var Gu=i=>{let e=i[0]==="#"?i.slice(1):i;return[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)]},Rx=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t],ur=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/Math.max(1e-6,e-i)));return n*n*(3-2*n)};function OT(){let i=Gu(ti.camoA),e=Gu(ti.camoB),t=Gu(ti.camoC),n=Gu(ti.camoD);return Wx(512,(s,r)=>{let o=s.createImageData(r,r),l=o.data,c=[];for(let a=0;a<80;a++)c.push({x:Math.random()*r,y:Math.random()*r,rx:16+Math.random()*72,ry:10+Math.random()*52,a:Math.random()*6.28,c:[e,t,n,e,t][a%5]});for(let a=0;a<r;a++)for(let h=0;h<r;h++){let d=Math.sin(h*.033+a*.021)*Math.cos(h*.018-a*.029),u=Rx(i,e,.2+.12*d);for(let x of c){let g=h-x.x,m=a-x.y,_=Math.cos(x.a),b=Math.sin(x.a),y=(g*_+m*b)/x.rx,w=(-g*b+m*_)/x.ry,T=y*y+w*w;T<1&&(u=Rx(u,x.c,(1-T)*.5))}let f=Math.sin(h*1.7+a*2.1)*2.5+(Math.random()-.5)*5,p=(a*r+h)*4;l[p]=Math.max(0,Math.min(255,u[0]+f)),l[p+1]=Math.max(0,Math.min(255,u[1]+f*.9)),l[p+2]=Math.max(0,Math.min(255,u[2]+f*.7)),l[p+3]=255}s.putImageData(o,0,0)})}function Jp(i,e,t){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),r=s.createImageData(i,i),o=r.data,l=(a,h)=>e[(h+i)%i*i+(a+i)%i];for(let a=0;a<i;a++)for(let h=0;h<i;h++){let d=(l(h+1,a)-l(h-1,a))*t,u=(l(h,a+1)-l(h,a-1))*t,f=-d,p=-u,x=1,g=Math.hypot(f,p,x)||1,m=(a*i+h)*4;o[m]=f/g*127+128,o[m+1]=p/g*127+128,o[m+2]=x/g*127+128,o[m+3]=255}s.putImageData(r,0,0);let c=new Ht(n);return c.colorSpace=Dn,c.wrapS=c.wrapT=en,c.anisotropy=4,c}function FT(){let e=new Float32Array(262144);for(let t=0;t<512;t++)for(let n=0;n<512;n++){let s=(n%4<2?.4:0)+(t%4<2?.25:0),r=Math.sin(n*.038+Math.sin(t*.028)*2)*.5+Math.sin(t*.065+n*.02)*.32;e[t*512+n]=s*.4+r}return{nor:Jp(512,e,1.8),rough:(()=>{let t=Wx(256,(n,s)=>{let r=n.createImageData(s,s),o=r.data;for(let l=0;l<s*s;l++){let c=195+(Math.random()*45|0);o[l*4]=o[l*4+1]=c,o[l*4+2]=170,o[l*4+3]=255}n.putImageData(r,0,0)});return t.colorSpace=Dn,t})()}}function BT(){let e=new Float32Array(65536);for(let t=0;t<256;t++)for(let n=0;n<256;n++)e[t*256+n]=Math.sin(n*.2)*.15+Math.sin(t*.31+n*.07)*.2+Math.random()*.25;return Jp(256,e,2.2)}function kT(){let e=new Float32Array(65536);for(let t=0;t<256;t++)for(let n=0;n<256;n++)e[t*256+n]=((n+t*3)%9<1?.6:0)+Math.random()*.15;return Jp(256,e,1.4)}var Vu;function Xx(){if(Vu)return Vu;let i=OT();i.colorSpace=ft;let{nor:e,rough:t}=FT(),n=BT(),s=kT(),r=new ze({map:i,normalMap:e,normalScale:new oe(.55,.55),roughnessMap:t,roughness:.9,metalness:0,vertexColors:!0,color:16777215}),o=new ze({color:ti.gaiter,roughness:.92,metalness:0,normalMap:e,normalScale:new oe(.3,.3)}),l=new ze({color:ti.gear,roughness:.88,metalness:0,normalMap:e,normalScale:new oe(.85,.85),vertexColors:!0}),c=new ze({map:i,color:12890762,roughness:.78,metalness:0,normalMap:e,normalScale:new oe(.55,.55)}),a=new ze({color:ti.dark,roughness:.55,metalness:.12,normalMap:s,normalScale:new oe(.3,.3)}),h=new ze({color:ti.glove,roughness:.86,metalness:0,normalMap:n,normalScale:new oe(.4,.4)}),d=new ze({color:ti.boot,roughness:.9,metalness:0,normalMap:n,normalScale:new oe(.7,.7)}),u=new ze({color:ti.sole,roughness:.96,metalness:0}),f=new ze({color:ti.skin,roughness:.62,metalness:0}),p=new ze({color:ti.glass,roughness:.12,metalness:.45,side:Ot}),x=new ze({color:ti.rifle,roughness:.45,metalness:.32,normalMap:s,normalScale:new oe(.35,.35)}),g=new ze({color:ti.rail,roughness:.4,metalness:.38,normalMap:s,normalScale:new oe(.4,.4)}),m=new ze({color:ti.strap,roughness:.85,metalness:0}),_=Hx.map(b=>new ze({color:b,roughness:.55,metalness:0,emissive:b,emissiveIntensity:.12}));return Vu={fabric:r,gaiter:o,gear:l,helm:c,dark:a,glove:h,boot:d,sole:u,skin:f,glass:p,rifle:x,rail:g,strap:m,teams:_},Vu}var zT=new je,jp=new on,Cx=new Kn,Px=new U,Ix=new U;function Ve(i,e,t,n,s=0,r=0,o=0,l=1,c=1,a=1){let h=i.clone();return Px.set(e,t,n),Cx.set(s,r,o),jp.setFromEuler(Cx),Ix.set(l,c,a),h.applyMatrix4(zT.compose(Px,jp,Ix)),h}function it(i,e,t,n=.01){return new Jo(i,e,t,1,n)}function Qr(i,e,t,n=10){return new It(i,e,t,n,1,!1)}function HT(i){if(!i)return i;for(let e of Object.keys(i.attributes))["position","normal","uv","color","skinIndex","skinWeight"].includes(e)||i.deleteAttribute(e);if(i.attributes.normal||i.computeVertexNormals(),!i.attributes.uv){let e=i.attributes.position.count,t=new Float32Array(e*2);i.setAttribute("uv",new lt(t,2))}if(!i.index){let e=i.attributes.position.count,t=e<65536?new Uint16Array(e):new Uint32Array(e);for(let n=0;n<e;n++)t[n]=n;i.setIndex(new ht(t,1))}return i}function qx(i){let e=_u(i.filter(Boolean).map(HT),!1);if(!e)throw new Error("mergeGeometries failed");return e}function eo(i,e){let t=new xe(i,e);return t.castShadow=!0,t.receiveShadow=!0,t}function _n(i,e){let t=i.attributes.position.count,n=new Float32Array(t*3);for(let s=0;s<t;s++)n[s*3]=n[s*3+1]=n[s*3+2]=e;return i.setAttribute("color",new lt(n,3)),i}function ni(i,e){let t=qx(i.map(n=>n.attributes&&n.attributes.color?n:_n(n,.85)));return eo(t,e)}function bi(i,e,t,n,s,r,o,l,c,a,{segs:h=10,rings:d=6,bulge:u=0,ao0:f=1,ao1:p=1,dust:x=0,uvS:g=1.6,flare0:m=0,flare1:_=0}={}){let b=n-i,y=s-e,w=r-t,T=Math.hypot(b,y,w)||1,P=b/T,v=y/T,M=w/T,E=0,D=1,k=0;Math.abs(v)>.9&&(E=1,D=0);let L=D*M-k*v,C=k*P-E*M,N=E*v-D*P,R=Math.hypot(L,C,N)||1;L/=R,C/=R,N/=R;let O=v*N-M*C,G=M*L-P*N,F=P*C-v*L,z=[],Y=[],se=[],he=[],q=[],le=[],Se=[],Z=h+1;for(let Ee=0;Ee<=d;Ee++){let Ce=Ee/d,$=ur(.28,.78,Ce),de=(o+(l-o)*Ce+Math.sin(Ce*Math.PI)*u)*(Ce<.12?1+m*(1-Ce/.12):Ce>.88?1+_*((Ce-.88)/.12):1),be=f+(p-f)*Ce,te=x*ur(.55,1,Ce),ue=Math.min(1,be*(1+te*.22)),_e=Math.min(1,be*(1+te*.16)),fe=Math.min(1,be*(1-te*.04)),Te=i+b*Ce,He=e+y*Ce,Ge=t+w*Ce;for(let Ze=0;Ze<=h;Ze++){let et=Ze/h*Math.PI*2,H=Math.cos(et),dt=Math.sin(et),rt=L*H+O*dt,B=C*H+G*dt,S=N*H+F*dt;z.push(Te+rt*de,He+B*de,Ge+S*de),Y.push(rt,B,S),se.push(Ze/h*g,Ce*T*g),he.push(ue,_e,fe),q.push(c,a,0,0),le.push(1-$,$,0,0)}}for(let Ee=0;Ee<d;Ee++)for(let Ce=0;Ce<h;Ce++){let $=Ee*Z+Ce,de=$+1,be=$+Z,te=be+1;Se.push($,be,de,de,be,te)}let ie=new vt;return ie.setAttribute("position",new lt(z,3)),ie.setAttribute("normal",new lt(Y,3)),ie.setAttribute("uv",new lt(se,2)),ie.setAttribute("color",new lt(he,3)),ie.setAttribute("skinIndex",new tr(q,4)),ie.setAttribute("skinWeight",new lt(le,4)),ie.setIndex(Se),ie}var Zp={root:[0,0,0],hips:[0,.94,0],spine:[0,1.12,.015],chest:[0,1.34,.01],neck:[0,1.5,.025],head:[0,1.58,.03],clavL:[-.08,1.47,.02],clavR:[.08,1.47,.02],upperL:[-.24,1.46,.02],upperR:[.24,1.46,.02],lowerL:[-.52,1.46,.02],lowerR:[.52,1.46,.02],handL:[-.76,1.46,.02],handR:[.76,1.46,.02],thighL:[-.1,.94,0],thighR:[.1,.94,0],calfL:[-.105,.5,0],calfR:[.105,.5,0],footL:[-.105,.08,.03],footR:[.105,.08,.03]},Lx=["root","hips","spine","chest","neck","head","clavL","upperL","lowerL","handL","clavR","upperR","lowerR","handR","thighL","calfL","footL","thighR","calfR","footR"],Dx={hips:"root",spine:"hips",chest:"spine",neck:"chest",head:"neck",clavL:"chest",upperL:"clavL",lowerL:"upperL",handL:"lowerL",clavR:"chest",upperR:"clavR",lowerR:"upperR",handR:"lowerR",thighL:"hips",calfL:"thighL",footL:"calfL",thighR:"hips",calfR:"thighR",footR:"calfR"};function GT(){let i={},e=[];for(let t of Lx){let n=new es;n.name=t,i[t]=n,e.push(n)}for(let t of Lx){if(t==="root")continue;let n=Zp[Dx[t]],s=Zp[t];i[t].position.set(s[0]-n[0],s[1]-n[1],s[2]-n[2]),i[Dx[t]].add(i[t])}return{map:i,list:e,skel:new Cs(e)}}function VT(i){let e=Zp,t=i,n=[];n.push(bi(e.hips[0],e.hips[1]-.07,e.hips[2],e.spine[0],e.spine[1],e.spine[2],.155,.15,t.hips,t.spine,{segs:12,rings:5,bulge:.018,ao0:.74,ao1:.9})),n.push(bi(e.spine[0],e.spine[1],e.spine[2],e.chest[0],e.chest[1]+.05,e.chest[2],.15,.19,t.spine,t.chest,{segs:12,rings:6,bulge:.025,ao0:.9,ao1:.96})),n.push(bi(e.chest[0],e.chest[1]+.04,e.chest[2],e.neck[0],e.neck[1]-.01,e.neck[2],.175,.095,t.chest,t.neck,{segs:12,rings:4,ao0:.95,ao1:.82})),n.push(bi(e.upperL[0]+.05,e.upperL[1]+.01,e.upperL[2],e.upperL[0]-.05,e.upperL[1]-.02,e.upperL[2],.09,.072,t.clavL,t.upperL,{segs:10,rings:4,bulge:.022,ao0:.86,ao1:.9})),n.push(bi(e.upperR[0]-.05,e.upperR[1]+.01,e.upperR[2],e.upperR[0]+.05,e.upperR[1]-.02,e.upperR[2],.09,.072,t.clavR,t.upperR,{segs:10,rings:4,bulge:.022,ao0:.86,ao1:.9})),n.push(bi(e.upperL[0],e.upperL[1],e.upperL[2],e.lowerL[0],e.lowerL[1],e.lowerL[2],.072,.06,t.upperL,t.lowerL,{segs:10,rings:5,bulge:.014,ao0:.9,ao1:.86})),n.push(bi(e.upperR[0],e.upperR[1],e.upperR[2],e.lowerR[0],e.lowerR[1],e.lowerR[2],.072,.06,t.upperR,t.lowerR,{segs:10,rings:5,bulge:.014,ao0:.9,ao1:.86})),n.push(bi(e.lowerL[0],e.lowerL[1],e.lowerL[2],e.handL[0]+.035,e.handL[1],e.handL[2],.056,.05,t.lowerL,t.handL,{segs:10,rings:5,flare1:.4,ao0:.86,ao1:.8})),n.push(bi(e.lowerR[0],e.lowerR[1],e.lowerR[2],e.handR[0]-.035,e.handR[1],e.handR[2],.056,.05,t.lowerR,t.handR,{segs:10,rings:5,flare1:.4,ao0:.86,ao1:.8})),n.push(bi(e.thighL[0],e.thighL[1]+.02,e.thighL[2],e.calfL[0],e.calfL[1]+.05,e.calfL[2],.1,.078,t.thighL,t.calfL,{segs:12,rings:6,bulge:.022,ao0:.8,ao1:.9,dust:.12})),n.push(bi(e.thighR[0],e.thighR[1]+.02,e.thighR[2],e.calfR[0],e.calfR[1]+.05,e.calfR[2],.1,.078,t.thighR,t.calfR,{segs:12,rings:6,bulge:.022,ao0:.8,ao1:.9,dust:.12})),n.push(bi(e.calfL[0],e.calfL[1]+.05,e.calfL[2],e.footL[0],e.footL[1]+.13,e.footL[2],.076,.055,t.calfL,t.footL,{segs:10,rings:6,bulge:.014,flare0:.22,ao0:.9,ao1:.86,dust:.7})),n.push(bi(e.calfR[0],e.calfR[1]+.05,e.calfR[2],e.footR[0],e.footR[1]+.13,e.footR[2],.076,.055,t.calfR,t.footR,{segs:10,rings:6,bulge:.014,flare0:.22,ao0:.9,ao1:.86,dust:.7}));for(let[s,r]of[[-1,i.thighL],[1,i.thighR]]){let o=_n(Ve(it(.085,.12,.06,.012),s*.175,.7,.03,.12,0,s*.1),.82),l=o.attributes.position.count,c=new Uint16Array(l*4),a=new Float32Array(l*4);for(let h=0;h<l;h++)c[h*4]=r,a[h*4]=1;o.setAttribute("skinIndex",new tr(c,4)),o.setAttribute("skinWeight",new lt(a,4)),n.push(o)}return qx(n)}function WT(i,e){let t=[new oe(.1,.02),new oe(.12,.015),new oe(.138,.03),new oe(.142,.07),new oe(.135,.13),new oe(.11,.18),new oe(.06,.205),new oe(0,.2)],n=new ja(t,16),s=[Ve(n,0,0,.01),Ve(it(.2,.045,.09,.012),0,.03,.1,.35,0,0)],r=[Ve(it(.06,.038,.045,.006),0,.13,-.12,-.3,0,0),Ve(it(.045,.028,.032,.004),0,.15,-.145,-.45,0,0),Ve(Qr(.019,.017,.075,8),-.022,.185,-.08,1.15,0,0),Ve(Qr(.019,.017,.075,8),.022,.185,-.08,1.15,0,0),Ve(it(.072,.03,.032,.004),0,.175,-.05,-.9,0,0),Ve(it(.018,.05,.13,.004),-.135,.08,0),Ve(it(.018,.05,.13,.004),.135,.08,0),Ve(new Jt(.055,10,8,0,Math.PI*2,0,Math.PI*.75),-.155,.05,.01,0,0,0,.72,1,.92),Ve(new Jt(.055,10,8,0,Math.PI*2,0,Math.PI*.75),.155,.05,.01,0,0,0,.72,1,.92),Ve(it(.016,.1,.012,.003),-.09,-.02,0,0,0,.45),Ve(it(.016,.1,.012,.003),.09,-.02,0,0,0,-.45),Ve(it(.15,.012,.012,.003),0,-.07,.02)],o=new De;o.add(ni(s,i.helm)),o.add(ni(r,i.dark));let l=eo(it(.055,.03,.01,.003),i.teams[e]);return l.position.set(0,.1,.145),l.castShadow=!1,o.add(l),o}function XT(i){let e=new De,t=new xe(new Jt(.105,12,10),i.skin);t.scale.set(.96,1.02,.98),t.position.set(0,.07,0),t.castShadow=!0,e.add(t);let n=ni([Ve(new It(.09,.1,.14,12,1,!0),0,-.01,.015),Ve(new Jt(.102,12,8,0,Math.PI*2,0,Math.PI*.62),0,.06,.02,0,0,0,1.04,.85,1.1)],i.gaiter);e.add(n);let s=ni([Ve(new li(.036,12),-.04,.105,-.112,0,Math.PI,0),Ve(new li(.036,12),.04,.105,-.112,0,Math.PI,0)],i.glass);return e.add(s),e.add(ni([Ve(it(.032,.012,.012,.002),0,.105,-.112),Ve(it(.06,.012,.012,.002),-.075,.1,-.05,0,.9,0),Ve(it(.06,.012,.012,.002),.075,.1,-.05,0,-.9,0),Ve(new Jt(.012,8,6),-.032,.105,-.1),Ve(new Jt(.012,8,6),.032,.105,-.1)],i.dark)),e}function qT(i,e){let t=[_n(Ve(it(.3,.34,.09,.02),0,.02,-.145),.72),_n(Ve(it(.3,.32,.08,.02),0,.03,.145),.68),_n(Ve(it(.075,.06,.24,.012),-.125,.19,0,.18,0,0),.74),_n(Ve(it(.075,.06,.24,.012),.125,.19,0,.18,0,0),.74),_n(Ve(it(.09,.18,.24,.016),-.195,-.02,0),.7),_n(Ve(it(.09,.18,.24,.016),.195,-.02,0),.7),_n(Ve(it(.24,.2,.09,.016),0,.04,.21),.7),_n(Ve(it(.18,.11,.08,.014),0,-.12,.17),.72),_n(Ve(it(.34,.045,.24,.01),0,-.18,0),.7)],n=[-.085,0,.085].map(l=>_n(Ve(it(.078,.15,.075,.01),l,-.02,-.195),.8)),s=[_n(Ve(it(.12,.07,.055,.01),0,.13,-.195),.78),_n(Ve(it(.065,.11,.055,.01),-.13,.08,-.195),.76),_n(Ve(it(.075,.11,.08,.01),.23,0,-.07),.76),_n(Ve(it(.085,.11,.065,.01),-.13,-.22,-.1),.76)],r=new De;r.add(ni([...t,...n,...s],i.gear)),r.add(ni([Ve(it(.06,.02,.05,.003),-.085,.05,-.21),Ve(it(.06,.02,.05,.003),0,.05,-.21),Ve(it(.06,.02,.05,.003),.085,.05,-.21),Ve(Qr(.006,.004,.16,6),-.13,.2,-.195)],i.dark));let o=eo(it(.05,.04,.01,.002),i.teams[e]);return o.position.set(-.17,.15,-.155),o.castShadow=!1,r.add(o),r}function Nx(i){let e=new De;return e.add(ni([Ve(it(.115,.125,.15,.02),0,.085,.02),Ve(it(.11,.07,.09,.02),0,.055,-.09)],i.boot)),e.add(ni([Ve(it(.12,.038,.25,.012),0,.018,-.02),Ve(it(.112,.04,.07,.01),0,.03,.085)],i.sole)),e}function Ux(i){return ni([_n(Ve(it(.11,.13,.065,.02),0,0,-.08),.82),_n(Ve(it(.09,.075,.045,.016),0,.01,-.11,.35,0,0),.85)],i.gear)}function YT(i){let e=new De;return e.add(ni([_n(Ve(it(.075,.17,.085,.014),.09,0,0),.8),_n(Ve(it(.022,.2,.022,.006),.04,.08,0),.75)],i.gear)),e.add(eo(Ve(it(.032,.12,.055,.008),.09,0,-.01),i.rifle)),e}function Ox(i,e){return ni([Ve(it(.06,.038,.095,.014),0,0,-.02),Ve(it(.028,.028,.06,.01),e*.042,.012,-.01,0,e*.5,.4),Ve(it(.05,.02,.05,.008),0,.012,-.07)],i.glove)}function jT(i){let e=i.rifle,t=i.rail,n=ni([Ve(it(.048,.058,.24,.006),0,.032,-.05),Ve(it(.032,.095,.042,.006),0,-.03,.02),Ve(it(.03,.13,.045,.006),0,-.04,-.08),Ve(it(.036,.07,.2,.006),0,.03,.17),Ve(it(.055,.095,.032,.006),0,.02,.28),Ve(Qr(.013,.012,.3,8),0,.032,-.5,Math.PI/2,0,0)],e),s=ni([Ve(it(.04,.042,.23,.004),0,.026,-.26),Ve(it(.022,.026,.18,.003),0,.058,-.04),Ve(it(.028,.042,.085,.004),0,.09,-.02),Ve(Qr(.017,.017,.055,8),0,.105,-.02,Math.PI/2,0,0),Ve(Qr(.017,.015,.045,8),0,.032,-.66,Math.PI/2,0,0)],t),r=new De;r.add(n,s);let o=new pt;o.position.set(0,-.02,.02),r.add(o);let l=new pt;return l.position.set(-.01,0,-.28),r.add(l),r.add(eo(Ve(it(.012,.012,.38,.003),.03,-.02,-.04,.35,0,0),i.strap)),r.userData={grip:o,guard:l,length:.85},r}function Wu(i){let e=new De;e.add(ni([Ve(it(.032,.085,.042,.005),0,-.03,0),Ve(it(.03,.036,.17,.004),0,.02,-.05),Ve(Qr(.008,.008,.04,6),0,.02,-.15,Math.PI/2,0,0)],i.rifle));let t=new pt;return t.position.set(0,-.02,0),e.add(t),e.userData={grip:t,guard:t,length:.22},e}function Yx(i,e){let t=document.createElement("canvas");t.width=256,t.height=64;let n=t.getContext("2d");n.font="800 34px system-ui,sans-serif",n.textAlign="center",n.fillStyle="#"+Hx[e%4].toString(16).padStart(6,"0"),n.fillText(i,128,44);let s=new $n(new Hn({map:new Ht(t),transparent:!0,depthWrite:!1}));return s.scale.set(1.2,.3,1),s.position.y=2.2,s}function ZT(i){let e=new Map,t=n=>(e.has(n)||e.set(n,n.clone()),e.get(n));return i.traverse(n=>{n.isMesh&&(n.material=Array.isArray(n.material)?n.material.map(t):t(n.material))}),[...e.values()]}function jx(i){let e=new Set,t=0,n=0,s=0;return i.traverse(r=>{if(!r.isMesh)return;n++,r.visible&&s++;let o=r.geometry;e.has(o.uuid)||(e.add(o.uuid),t+=(o.index?o.index.count:o.attributes.position.count)/3)}),{meshes:n,visible:s,tris:Math.round(t)}}var Fx;function KT(i){return Fx||(Fx=VT(i))}function Xu(i,e){return Bl?NT(i,e):$T(i,e)}function $T(i,e){let t=(e%4+4)%4,n=Xx(),s=new De,r=new De;s.add(r);let{map:o,list:l,skel:c}=GT(),a={};l.forEach((M,E)=>{a[M.name]=E});let h=new Rs(KT(a),n.fabric);h.castShadow=!0,h.receiveShadow=!0,h.add(o.root),h.bind(c),r.add(h);let d=XT(n);o.head.add(d);let u=WT(n,t);u.position.set(0,.02,0),o.head.add(u);let f=qT(n,t);o.chest.add(f),o.footL.add(Nx(n)),o.footR.add(Nx(n));let p=Ux(n),x=Ux(n);p.position.set(0,.36,0),x.position.set(0,.36,0),o.calfL.add(p),o.calfR.add(x);let g=YT(n);o.thighR.add(g),o.handL.add(Ox(n,-1)),o.handR.add(Ox(n,1));let m=eo(it(.05,.035,.01,.002),n.teams[t]);m.position.set(-.075,.02,-.06),m.castShadow=!1,o.upperL.add(m);let _=new De;_.position.set(.12,-.06,-.1),o.chest.add(_);let b={rifle:jT(n),pistol:Wu(n)};for(let M of Object.values(b))M.visible=!1,_.add(M);let y=Wu(n);y.visible=!1,o.handL.add(y);let w=Yx(i,t);s.add(w);let T=new xe(new Jt(.07,8,6),new st({color:1638320}));T.position.y=2.45,T.visible=!1,s.add(T);let P=[g,p,x,m,d],v=ZT(s);return s.userData={body:r,gun:b.rifle,gun2:y,name:i,talk:T,gunId:"",map:o,skel:c,skin:h,weapons:b,mount:_,mats:v,tag:w,phase:0,distAcc:0,spd:0,fwd:0,strafe:0,conn:!0,stats:jx(s),bindHips:o.hips.position.y,lodFar:P,lod:0,recoilT:0,reloadT:0,flinchT:0,plantL:null,plantR:null,lastMag:null,lastHp:null},qu(s,"rifle"),to(s,{dt:0,t:0,speed:0,pitch:0,down:!1}),s}var qp={rifle:[1,1,1],smg:[.85,.85,.85],shotgun:[1.05,1.05,1.12],sawed:[1.05,1.05,.7],lmg:[1.15,1.15,1.15],lever:[1,1,1.15],nailer:[.9,1.1,.72]};function qu(i,e){let t=i.userData.weapons||{},n=e==="akimbo",s=e==="pistol"||n?"pistol":"rifle",r=n?"akimbo":e==="pistol"?"pistol":qp[e]?e:"rifle";if(i.userData.gunId===r){i.userData.gun2&&(i.userData.gun2.visible=n);return}if(i.userData.gunId=r,t.rifle&&(t.rifle.visible=s==="rifle"),t.pistol&&(t.pistol.visible=s==="pistol"),s==="rifle"&&t.rifle){let o=qp[r]||qp.rifle;t.rifle.scale.set(o[0],o[1],o[2])}i.userData.gun=t[s],i.userData.gun2&&(i.userData.gun2.visible=n)}function Zx(i,e){if(i.userData.conn===!!e)return;i.userData.conn=!!e;let t=e?1:.4;for(let n of i.userData.mats)n.transparent=!e,n.opacity=t,n.depthWrite=!!e;i.userData.tag&&i.userData.tag.material&&(i.userData.tag.material.opacity=e?1:.4)}function Kx(i,e){let t=e>12?2:e>5?1:0;if(i.userData.lod===t)return;i.userData.lod=t;let n=t<2;for(let s of i.userData.lodFar||[])s.visible=n}var Jr=new U,Ii=new U,Kp=new U,$p=new U,Yp=new je,JT=new on,Bx=new U(-1,0,0),kx=new U(1,0,0),QT=new U(0,-1,0);function zx(i,e,t,n){let s=i.parent;s.updateWorldMatrix(!0,!1),Yp.copy(s.matrixWorld).invert(),Jr.copy(e).applyMatrix4(Yp),Ii.copy(t).applyMatrix4(Yp).sub(Jr),!(Ii.lengthSq()<1e-8)&&(Ii.normalize(),i.quaternion.copy(JT.setFromUnitVectors(n,Ii)))}function Fl(i,e,t,n,s,r,o){i.parent.updateWorldMatrix(!0,!1);let l=Jr.setFromMatrixPosition(i.matrixWorld);Ii.copy(t).sub(l);let c=Ii.length();c=Math.max(.05,Math.min(s+r-.012,c)),Ii.normalize(),Kp.copy(n).sub(l);let a=$p.crossVectors(Ii,Kp);a.lengthSq()<1e-8&&a.set(0,0,1),a.normalize();let h=new U().crossVectors(a,Ii).normalize(),d=Vi.clamp((s*s+c*c-r*r)/(2*s*c),-1,1),u=Math.acos(d),f=l.clone().add(Ii.clone().multiplyScalar(Math.cos(u)*s)).add(h.multiplyScalar(Math.sin(u)*s));zx(i,l,f,o),e.parent.updateWorldMatrix(!0,!1);let p=new U().setFromMatrixPosition(e.matrixWorld);zx(e,p,t,o)}function to(i,{dt:e=.016,t=0,speed:n=0,fwd:s=0,strafe:r=0,pitch:o=0,down:l=!1,dist:c=4,recoil:a=0,reload:h=0,flinch:d=0}={}){let u=i.userData,f=u.map;if(!f)return;if(u.mixer){UT(i,{dt:e,speed:n,fwd:s,strafe:r,pitch:o,down:l,dist:c,recoil:a,reload:h,flinch:d});return}Kx(i,c);let p=Math.max(0,Math.min(.05,e||.016));u.spd=Vi.damp(u.spd||0,n,8,p),u.fwd=Vi.damp(u.fwd||0,s,8,p),u.strafe=Vi.damp(u.strafe||0,r,8,p);let x=u.spd,g=ur(.28,1.5,x),m=ur(2.6,5.8,x),_=.7+.32*m,b=Math.min(x,9)*p;x>.25&&(u.distAcc=(u.distAcc||0)+b),u.phase=_>1e-4?u.distAcc/_*Math.PI:u.phase,a&&(u.recoilT=.14),h&&(u.reloadT=1.15),d&&(u.flinchT=.28),u.recoilT=Math.max(0,(u.recoilT||0)-p),u.reloadT=Math.max(0,(u.reloadT||0)-p),u.flinchT=Math.max(0,(u.flinchT||0)-p);let y=u.recoilT>0?ur(0,.05,.14-u.recoilT)*(u.recoilT/.14):0,w=u.reloadT>0?1:0,T=u.flinchT>0?u.flinchT/.28:0,P=u.gunId&&u.gunId!=="pistol"&&u.gunId!=="akimbo",v=ur(.08,.28,Math.abs(o)+(o>0,0)),M=ur(-.15,.35,o)*.25+ur(.15,.55,Math.max(0,-o+.15)),E=Math.max(0,-o)*.85+.12*(1-g)*0;for(let z of Object.values(f))z!==f.root&&z.quaternion.identity();let k=(Math.abs(u.fwd)+Math.abs(u.strafe)>.35?Math.atan2(u.strafe,Math.max(.15,u.fwd)):0)*g*.65;f.hips.rotation.y=k,f.spine.rotation.y=-k*.45,f.chest.rotation.y=-k*.35;let L=u.phase,C=Math.sin(L);f.hips.position.y=u.bindHips+Math.abs(Math.sin(L))*(.01+.028*g+.04*m)+Math.sin(t*1.5)*.005*(1-g),f.hips.position.x=(u.bindX!=null?u.bindX:u.bindX=0)+C*.025*g+Math.sin(t*.7)*.012*(1-g),f.spine.rotation.x=Math.sin(L)*.035*g+.04+Math.sin(t*1.5)*.02*(1-g)+T*.25,f.chest.rotation.x=-o*.45-.06+y*.18+T*.2,f.head.rotation.x=-o*.4+T*-.1,f.head.rotation.z=T*.15;let N=.48*g+.38*m,R=Math.sin(L),O=Math.sin(L+Math.PI);f.thighL.rotation.x=R*N*(u.fwd>=-.2?1:-.7),f.thighR.rotation.x=O*N*(u.fwd>=-.2?1:-.7),f.thighL.rotation.z=.04+u.strafe*.04*g,f.thighR.rotation.z=-.04+u.strafe*.04*g,f.calfL.rotation.x=Math.max(0,-R)*(.75+.4*m),f.calfR.rotation.x=Math.max(0,-O)*(.75+.4*m),f.footL.rotation.x=-f.thighL.rotation.x*.3-f.calfL.rotation.x*.25,f.footR.rotation.x=-f.thighR.rotation.x*.3-f.calfR.rotation.x*.25,g<.15&&(f.thighL.rotation.x*=.2,f.thighR.rotation.x*=.2,f.calfL.rotation.x*=.2,f.calfR.rotation.x*=.2);let G=u.mount,F=u.gunId==="pistol"||u.gunId==="akimbo";if(G){let z=F?.25-o*.7:.7-o*.95-y*.35,Y=F?.35:.22;$p.set(Math.sin(Y)*.55,-Math.sin(Math.max(.05,z)),-Math.cos(Math.max(.05,z))).normalize(),G.quaternion.copy(jp.setFromUnitVectors(Kp.set(0,0,-1),$p)),G.position.set(F?.16:.12,(F?-.02:-.08)-y*.03,F?-.14:-.12)}if(f.clavR.rotation.set(.12,.25,-.35),f.clavL.rotation.set(.12,-.2,.35),f.root.updateWorldMatrix(!0,!0),!F&&u.gun&&u.gun.visible&&u.gun.userData.grip){u.gun.userData.grip.getWorldPosition(Jr);let z=Jr.clone();u.gun.userData.guard.getWorldPosition(Ii);let Y=Ii.clone(),se=new U().setFromMatrixPosition(f.upperR.matrixWorld);se.x+=.35,se.y-=.05,se.z+=.15;let he=new U().setFromMatrixPosition(f.upperL.matrixWorld);he.x-=.3,he.y+=.05,he.z+=.2,Fl(f.upperR,f.lowerR,z,se,.28,.24,kx);let q=u.reloadT||0;if(q>.35&&q<.95){let le=z.clone();le.y-=.12,le.z+=.05,Fl(f.upperL,f.lowerL,le,he,.28,.24,Bx)}else Fl(f.upperL,f.lowerL,Y,he,.28,.24,Bx);f.handR.quaternion.identity(),f.handL.quaternion.identity()}else if(u.gunId==="akimbo")f.upperR.rotation.set(.25,.4,-1.15),f.lowerR.rotation.set(.05,.15,-.35),f.upperL.rotation.set(.25,-.4,1.15),f.lowerL.rotation.set(.05,-.15,.35);else if(F&&u.gun&&u.gun.userData.grip){u.gun.userData.grip.getWorldPosition(Jr);let z=new U().setFromMatrixPosition(f.upperR.matrixWorld);z.x+=.25,z.z+=.1,Fl(f.upperR,f.lowerR,Jr.clone(),z,.28,.24,kx),f.upperL.rotation.set(.2,-.1,.4),f.lowerL.rotation.set(0,0,.2)}if(f.root.updateWorldMatrix(!0,!0),g>.2&&x<8.5){for(let[z,Y,se,he,q]of[["L",f.thighL,f.calfL,f.footL,"plantL"],["R",f.thighR,f.calfR,f.footR,"plantR"]]){let le=Math.cos(L+(z==="L"?0:Math.PI)),Se=new U().setFromMatrixPosition(he.matrixWorld);if(le>.25){u[q]||(u[q]=new U(Se.x,.04,Se.z));let Z=u[q].clone();Z.y=.04;let ie=new U().setFromMatrixPosition(Y.matrixWorld);ie.x+=z==="L"?-.15:.15,ie.z+=.12,Fl(Y,se,Z,ie,.44,.42,QT)}else u[q]=null}f.root.updateWorldMatrix(!0,!0)}else u.plantL=u.plantR=null;l&&(f.hips.rotation.x=.25)}var Yu=class extends Qa{constructor(e){super(e),this.type=Yt}parse(e){let o=function(v,M){switch(v){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(M||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(M||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(M||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(M||""))}},d=function(v,M,E){M=M||1024;let k=v.pos,L=-1,C=0,N="",R=String.fromCharCode.apply(null,new Uint16Array(v.subarray(k,k+128)));for(;0>(L=R.indexOf(`
`))&&C<M&&k<v.byteLength;)N+=R,C+=R.length,k+=128,R=String.fromCharCode.apply(null,new Uint16Array(v.subarray(k,k+128)));return-1<L?(E!==!1&&(v.pos+=C+L+1),N+R.slice(0,L)):!1},u=function(v){let M=/^#\?(\S+)/,E=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,k=/^\s*FORMAT=(\S+)\s*$/,L=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,C={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},N,R;for((v.pos>=v.byteLength||!(N=d(v)))&&o(1,"no header found"),(R=N.match(M))||o(3,"bad initial token"),C.valid|=1,C.programtype=R[1],C.string+=N+`
`;N=d(v),N!==!1;){if(C.string+=N+`
`,N.charAt(0)==="#"){C.comments+=N+`
`;continue}if((R=N.match(E))&&(C.gamma=parseFloat(R[1])),(R=N.match(D))&&(C.exposure=parseFloat(R[1])),(R=N.match(k))&&(C.valid|=2,C.format=R[1]),(R=N.match(L))&&(C.valid|=4,C.height=parseInt(R[1],10),C.width=parseInt(R[2],10)),C.valid&2&&C.valid&4)break}return C.valid&2||o(3,"missing format specifier"),C.valid&4||o(3,"missing image size specifier"),C},f=function(v,M,E){let D=M;if(D<8||D>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);D!==(v[2]<<8|v[3])&&o(3,"wrong scanline width");let k=new Uint8Array(4*M*E);k.length||o(4,"unable to allocate buffer space");let L=0,C=0,N=4*D,R=new Uint8Array(4),O=new Uint8Array(N),G=E;for(;G>0&&C<v.byteLength;){C+4>v.byteLength&&o(1),R[0]=v[C++],R[1]=v[C++],R[2]=v[C++],R[3]=v[C++],(R[0]!=2||R[1]!=2||(R[2]<<8|R[3])!=D)&&o(3,"bad rgbe scanline format");let F=0,z;for(;F<N&&C<v.byteLength;){z=v[C++];let se=z>128;if(se&&(z-=128),(z===0||F+z>N)&&o(3,"bad scanline data"),se){let he=v[C++];for(let q=0;q<z;q++)O[F++]=he}else O.set(v.subarray(C,C+z),F),F+=z,C+=z}let Y=D;for(let se=0;se<Y;se++){let he=0;k[L]=O[se+he],he+=D,k[L+1]=O[se+he],he+=D,k[L+2]=O[se+he],he+=D,k[L+3]=O[se+he],L+=4}G--}return k},p=function(v,M,E,D){let k=v[M+3],L=Math.pow(2,k-128)/255;E[D+0]=v[M+0]*L,E[D+1]=v[M+1]*L,E[D+2]=v[M+2]*L,E[D+3]=1},x=function(v,M,E,D){let k=v[M+3],L=Math.pow(2,k-128)/255;E[D+0]=er.toHalfFloat(Math.min(v[M+0]*L,65504)),E[D+1]=er.toHalfFloat(Math.min(v[M+1]*L,65504)),E[D+2]=er.toHalfFloat(Math.min(v[M+2]*L,65504)),E[D+3]=er.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;let m=u(g),_=m.width,b=m.height,y=f(g.subarray(g.pos),_,b),w,T,P;switch(this.type){case Wn:P=y.length/4;let v=new Float32Array(P*4);for(let E=0;E<P;E++)p(y,E*4,v,E*4);w=v,T=Wn;break;case Yt:P=y.length/4;let M=new Uint16Array(P*4);for(let E=0;E<P;E++)x(y,E*4,M,E*4);w=M,T=Yt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:_,height:b,data:w,header:m.string,gamma:m.gamma,exposure:m.exposure,type:T,colorSpace:Ln,minFilter:Wt,magFilter:Wt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var e0="assets/hd/",Jx=new hr,ew=new ui;Jx.register(i=>(i.textureLoader=new ui(i.options.manager),{name:"csp_img"}));var Qp=-.271,tw=1711915,nw={sand:4,concrete:3.2,corr:2.6,wood:1.6,rust:2},$x={low:["env/sky_1k.webp","tex/sand_diff_512.webp","tex/concrete_diff_512.webp","tex/corr_diff_512.webp","tex/wood_diff_512.webp","props/drum.glb","props/tyre.glb","props/crate.glb","props/jerry.glb"],medium:["env/sky_2k.webp","env/env_256.hdr",...["sand","concrete","corr","wood"].flatMap(i=>[`tex/${i}_diff_1k.webp`,`tex/${i}_nor_1k.webp`]),"props/drum.glb","props/tyre.glb","props/crate.glb","props/jerry.glb"]};$x.high=[...$x.medium,...["sand","concrete","corr","wood"].map(i=>`tex/${i}_arm_1k.webp`)];var ju=(i,e,t=!0)=>ew.loadAsync(e0+i).then(n=>(n.colorSpace=e?ft:Dn,t&&(n.wrapS=n.wrapT=en),n.anisotropy=8,n));function iw(i,e,t=!1){i.onBeforeCompile=n=>{n.uniforms.uTile={value:1/e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
      #endif`))},i.customProgramCacheKey=()=>"wuv"+(t?"m":""),i.needsUpdate=!0}function sw(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");for(let n=0;n<26;n++){let s=Math.random()*6.28,r=Math.random()<.3?20+Math.random()*40:Math.random()*18,o=4+Math.random()*(n<6?22:9);e.fillStyle=`rgba(${70+Math.random()*40|0},${4+Math.random()*8|0},${4+Math.random()*6|0},${.55+Math.random()*.4})`,e.beginPath(),e.ellipse(64+Math.cos(s)*r,64+Math.sin(s)*r,o,o*(.5+Math.random()*.5),s,0,6.28),e.fill()}let t=new Ht(i);return t.colorSpace=ft,t}function rw(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"rgba(255,255,255,0.55)"),t.addColorStop(.5,"rgba(255,255,255,0.22)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Ht(i)}function Qx({renderer:i,scene:e,world:t,viewScene:n}){let s=t.M,r={tier:-1,sky:null,env:null,props:!1,texTier:-1,bytes:0};function o(N){N.colorSpace=ft,N.wrapS=en,N.generateMipmaps=!0,N.minFilter=di;let R=new bt({side:Sn,depthWrite:!1,fog:!1,uniforms:{map:{value:N},fogC:{value:e.fog.color},rot:{value:Qp},gain:{value:1}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vP; uniform sampler2D map; uniform vec3 fogC; uniform float rot, gain;
        void main(){ vec3 d = normalize(vP); vec2 uv = vec2(atan(d.z, d.x) * 0.15915494 + 0.5 + rot, asin(clamp(d.y, -1., 1.)) * 0.31830989 + 0.5);
          vec3 c = texture2D(map, uv).rgb * gain; c = mix(fogC, c, smoothstep(-0.015, 0.05, d.y));
          gl_FragColor = vec4(c, 1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}),O=t.sky.material;t.sky.material=R,O.dispose?.(),r.sky=N,e.fog.color.set(tw);let G=s.cache.f276229210;G&&(G.visible=!1)}function l(N){N.mapping=Wr;let R=new Bs(i),O=R.fromEquirectangular(N);R.dispose(),N.dispose(),e.environment=O.texture,n.environment=O.texture,e.environmentRotation.y=n.environmentRotation.y=-Qp*Math.PI*2,r.env=O.texture}function c(N){let R=new Bs(i),O=N.clone();O.mapping=Wr;let G=R.fromEquirectangular(O);R.dispose(),e.environment=G.texture,n.environment=G.texture,e.environmentRotation.y=n.environmentRotation.y=-Qp*Math.PI*2,r.env=G.texture}let a={sand:[s.sand,s.dune],concrete:[s.concrete],corr:[s.fence,s.fenceDark],wood:[s.wood]};async function h(N){let R=N>0,O=N>1,G=Object.keys(a),F=await Promise.all(G.map(z=>Promise.all([ju(`tex/${z}_diff_${R?"1k":"512"}.webp`,!0),R?ju(`tex/${z}_nor_1k.webp`):null,O?ju(`tex/${z}_arm_1k.webp`):null])));G.forEach((z,Y)=>{let[se,he,q]=F[Y];for(let le of a[z])le&&(le.map=se,le.bumpMap=null,le.normalMap=he||null,le.roughnessMap=q||null,le.aoMap=q||null,le.aoMapIntensity=.8,z==="corr"?(le.metalnessMap=q||null,le.metalness=le===s.fence?.55:.45,le.roughness=q?1:.62,le.color.set(le===s.fence?12107972:5921886),he&&le.normalScale.set(1.2,1.2)):z==="sand"?(le.color.set(le===s.dune?12166540:13220774),le.roughness=1,le.metalness=0,he&&le.normalScale.set(1.1,1.1)):z==="concrete"?(le.color.set(11841706),le.roughness=q?1:.9,le.metalness=0):(le.color.set(14207928),le.roughness=q?1:.85),iw(le,nw[z],z==="sand"))}),r.texTier=N}let d={drum:[.62,.9,.62],tyre:[.98,.3,.98],crate:null,jerry:[.36,.48,.17]};function u(N,R){N.updateMatrixWorld(!0);let O=new bn().setFromObject(N),G=O.getSize(new U),F=new De,z=new De;z.add(N),F.add(z),R==="tyre"&&G.y>Math.min(G.x,G.z)&&(z.rotation.x=G.z<G.x?Math.PI/2:0,G.x<G.z&&(z.rotation.z=Math.PI/2)),F.updateMatrixWorld(!0);let Y=new bn().setFromObject(z),se=Y.getSize(new U),he=Y.getCenter(new U),q=d[R]||[1,1,1];if(z.scale.set(q[0]/se.x,q[1]/se.y,q[2]/se.z),R==="jerry"||R==="drum"){let Z=q[1]/se.y;z.scale.set(Z,Z,Z)}F.updateMatrixWorld(!0);let le=new bn().setFromObject(z),Se=le.getCenter(new U);return z.position.set(-Se.x,-le.min.y,-Se.z),F.updateMatrixWorld(!0),F}async function f(N){let R=["drum","tyre","crate","jerry"],O=await Promise.all(R.map(se=>Jx.loadAsync(e0+`props/${se}.glb`))),G={};R.forEach((se,he)=>G[se]=u(O[he].scene,se));let F={};for(let se of t.hdProps||[])(F[se.kind]||(F[se.kind]=[])).push(se);let z=new je,Y=new ge;r.inst=[];for(let[se,he]of Object.entries(F)){let q=G[se];q.updateMatrixWorld(!0),q.traverse(le=>{if(!le.isMesh)return;let Se=new Gn(le.geometry,le.material,he.length);Se.castShadow=N>0,Se.receiveShadow=!0,he.forEach((Z,ie)=>{z.copy(Z.m),se==="crate"&&z.multiply(new je().makeScale(Z.s,Z.s,Z.s)),z.multiply(le.matrixWorld),Se.setMatrixAt(ie,z),se==="drum"&&(Y.set(Z.color).lerp(new ge(1,1,1),.45),Se.setColorAt(ie,Y))}),Se.computeBoundingSphere(),t.root.add(Se),r.inst.push(Se)})}for(let se of t.propLo||[])se.visible=!1;for(let[se,he]of t.missionMeshes||[])if(he.userData.hdKind==="jerry"){let q=G.jerry.clone();q.traverse(le=>{le.isMesh&&(le.castShadow=!0,le.receiveShadow=!0)}),he.children.forEach(le=>le.visible=!1),q.rotation.y=Math.random()*6,he.add(q)}r.props=!0}let p=40,x=new Gn(new an(1,1).rotateX(-Math.PI/2),new ze({map:sw(),transparent:!0,depthWrite:!1,roughness:.25,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),p);x.frustumCulled=!1,x.renderOrder=2,x.userData.noAO=!0,x.receiveShadow=!0;let g=new pt,m=0;g.scale.set(0,0,0),g.updateMatrix();for(let N=0;N<p;N++)x.setMatrixAt(N,g.matrix);e.add(x);function _(N,R,O=1){g.position.set(N,.02+m%7*.0015,R),g.rotation.set(0,Math.random()*6.28,0),g.scale.set(O*(.8+Math.random()*.5),1,O*(.8+Math.random()*.5)),g.updateMatrix(),x.setMatrixAt(m,g.matrix),x.instanceMatrix.needsUpdate=!0,m=(m+1)%p}let b=54,y=new vt,w=new Float32Array(b*3),T=new Float32Array(b),P=[],v=[[-38,-70],[44,-40],[-50,30]];for(let N=0;N<b;N++)P.push({s:v[N%v.length],t:Math.random()*9,life:7+Math.random()*4,dx:(Math.random()-.5)*.4});y.setAttribute("position",new ht(w,3)),y.setAttribute("a",new ht(T,1));let M=new bt({transparent:!0,depthWrite:!1,fog:!0,uniforms:Nn.merge([Fe.fog,{map:{value:rw()},uScale:{value:600}}]),vertexShader:`attribute float a; varying float vA; uniform float uScale;
#include <fog_pars_vertex>
void main(){ vA=a; vec4 mvPosition=modelViewMatrix*vec4(position,1.); gl_PointSize = uScale * (2.5 + (1.-a) * 7.) / -mvPosition.z; gl_Position=projectionMatrix*mvPosition;
#include <fog_vertex>
}`,fragmentShader:`uniform sampler2D map; varying float vA;
#include <fog_pars_fragment>
void main(){ vec4 t=texture2D(map, gl_PointCoord); gl_FragColor=vec4(vec3(0.16,0.15,0.16), t.a*vA*0.55);
#include <fog_fragment>
}`}),E=new Ps(y,M);E.frustumCulled=!1,E.userData.noAO=!0,E.visible=!1,e.add(E);function D(N){if(E.visible){for(let R=0;R<b;R++){let O=P[R];O.t+=N,O.t>O.life&&(O.t=0);let G=O.t/O.life;w[R*3]=O.s[0]+O.dx*O.t+G*G*6,w[R*3+1]=1+O.t*1.6,w[R*3+2]=O.s[1]+G*2,T[R]=Math.sin(Math.min(1,G*4)*1.57)*(1-G)}y.attributes.position.needsUpdate=!0,y.attributes.a.needsUpdate=!0}}let k=Promise.resolve();function L(N){return k=k.then(async()=>{let R=performance.now(),O=[];(!r.sky||N>0&&r.skyHi!==!0)&&O.push(ju(N>0?"env/sky_2k.webp":"env/sky_1k.webp",!0,!1).then(F=>{o(F),r.skyHi=N>0,N===0&&!r.envHi&&c(F)})),N>0&&!r.envHi&&O.push(new Yu().loadAsync(e0+"env/env_256.hdr").then(F=>{l(F),r.envHi=!0})),(r.texTier<0||N>r.texTier&&!(r.texTier===1&&N===1))&&O.push(h(N)),r.props||O.push(f(N));let G=await Promise.allSettled(O);for(let F of G)F.status==="rejected"&&console.warn("hd stage 2",F.reason);r.ms=Math.round(performance.now()-R)}),k}function C(N){r.tier=N,E.visible=N>0;for(let R of r.inst||[])R.castShadow=N>0}return{load:L,setTier:C,update:D,blood:_,st:r}}var ow=100,aw=50;function ev(i){let{scene:e,zombies:t,P:n,G:s,cam:r}=i,o={on:!1,ws:null,id:null,room:null,token:null,snaps:[],remotes:new Map,slot:new Map,lastSend:0,over:!1,retry:0,url:null,name:"Survivor",status:"",alive:!0},l=(v,M,E)=>v+(M-v)*E,c=(v,M,E)=>{let D=((M-v+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return v+D*E},a=[1638320,16757575,7059711,16739285];function h(v,M){let E=Xu(v,M);return e.add(E),E}function d(v,M){qu(v,M)}function u(v){o.url=v.url,o.name=v.name||o.name,o.joinMsg=v.join,f()}function f(){let v;try{v=new WebSocket(o.url)}catch{return p("bad server url")}o.ws=v,o.status="connecting",v.onopen=()=>{o.retry=0,v.send(JSON.stringify(o.token?{t:"join",token:o.token}:{t:"join",name:o.name,...o.joinMsg}))},v.onmessage=M=>{let E;try{E=JSON.parse(M.data)}catch{return}x(E)},v.onclose=M=>{if(o.ws===v){if(o.ws=null,!o.on&&!o.token){i.onStatus?.("Could not connect to the co-op server");return}o.over||M.code===4001||(o.retry++<8?(o.status="reconnecting",i.onStatus?.("Connection lost, reconnecting\u2026"),setTimeout(f,Math.min(8e3,500*2**o.retry))):(i.onStatus?.("Disconnected from co-op server"),m(),i.onQuit?.()))}},v.onerror=()=>{}}function p(v){i.onStatus?.(v)}function x(v){if(v.t==="joined"){let M=!o.on;o.id=v.id,o.room=v.room,o.token=v.token,o.status="ok",M?(o.on=!0,o.over=!1,i.onJoined?.(v)):i.onStatus?.("Reconnected")}else if(v.t==="err")i.onStatus?.({"no-room":"No room with that code","room-full":"That room is full",full:"Server is full",rate:"Too many messages"}[v.m]||v.m),o.on||o.ws?.close();else if(v.t==="s"){v.recv=performance.now(),o.snaps.push(v),o.snaps.length>30&&o.snaps.shift();for(let M of v.ev||[])i.onEvent?.(M,M.p===o.id||M.by===o.id),(o.remotes.get(M.by)||o.remotes.get(M.p))&&((M.e==="hit"||M.e==="kill")&&M.by&&o.remotes.get(M.by)&&(o.remotes.get(M.by).userData.pulseRecoil=1),M.e==="hurt"&&M.p&&o.remotes.get(M.p)&&(o.remotes.get(M.p).userData.pulseFlinch=1));i.onLobby?.(v),v.over&&!o.over&&(o.over=!0,i.onOver?.(v))}else v.t==="hits"?i.onHits?.(v.h):v.t==="act"?(o.lastAct=v,i.onAct?.(v)):v.t==="sig"&&i.onSig?.(v)}function g(v){o.ws&&o.ws.readyState===1&&o.ws.send(JSON.stringify(v))}function m(){if(o.on=!1,o.ws)try{g({t:"leave"}),o.ws.close()}catch{}o.ws=null,o.token=null,o.snaps=[];for(let v of o.remotes.values())e.remove(v);o.remotes.clear(),o.slot.clear(),t.reset()}function _(v){let M=v-ow,E=o.snaps;if(!E.length)return null;let D=E.length-1;for(;D>0&&E[D-1].recv>M;)D--;let k=E[D],L=E[Math.max(0,D-1)];return L===k||k.recv<=L.recv?{s0:k,s1:k,k:1}:{s0:L,s1:k,k:Math.max(0,Math.min(1,(M-L.recv)/(k.recv-L.recv)))}}function b(v,M,E){let D=performance.now();D-o.lastSend>aw&&!n.dead&&(o.lastSend=D,g({t:"in",x:+n.x.toFixed(2),z:+n.z.toFixed(2),yaw:+n.yaw.toFixed(3),pitch:+n.pitch.toFixed(3),w:i.held?.()||"pistol"}));let k=_(D);if(!k){t.update(v,M,n,i.world.door,E);return}let{s0:L,s1:C,k:N}=k,R=o.snaps[o.snaps.length-1],O=R.p.find(q=>q[0]===o.id);if(O){let q=O[6];if(q<n.hp-.5&&i.onHurt?.(n.hp-q),n.hp=q,n.pts=O[7],n.kills=O[8],O[9]&&!n.dead?i.onDown?.():!O[9]&&n.dead&&i.onRevive?.(),Math.hypot(O[2]-n.x,O[3]-n.z)>2.5&&(n.x=O[2],n.z=O[3]),Array.isArray(O[12]))for(let le of O[12]){let Se=n.slots.find(Z=>Z&&Z.id===le[0]);Se&&(Se.mag=le[1],Se.reserve=le[2])}}R.round!==s.round&&R.round>0&&i.onRound?.(R.round),s.mpPhase=R.phase;let G=i.world;R.win&&R.win.forEach((q,le)=>{let Se=G.windows[le];if(Se){for(;Se.count>q;)G.removePlank(Se),i.onPlank?.(Se,!0);for(;Se.count<q;)G.addPlank(Se),i.onPlank?.(Se,!1)}});let F=new Set(R.go||[]);R.door&&F.add("AB");for(let q of G.doors||[G.door])q&&F.has(q.id)&&!q.open&&(q.open=!0,i.onDoor?.(q));R.ms!==void 0&&i.onMission?.(R.ms,R.mi,R.mc),R.crate&&i.onCrate?.(R.crate[0],R.crate[1],R.crate[2]===o.id),R.up&&i.syncUps?.(R.up),s.double=R.dbl?1:0,O&&(o.owned=O[11]);let z=new Set,Y=new Map(L.p.map(q=>[q[0],q]));C.p.forEach((q,le)=>{if(q[0]===o.id)return;z.add(q[0]);let Se=o.remotes.get(q[0]);Se||(Se=h(q[1],le),o.remotes.set(q[0],Se));let Z=Y.get(q[0])||q,ie=Math.max(.016,(C.recv-L.recv)/1e3),Ee=(q[2]-Z[2])/ie,Ce=(q[3]-Z[3])/ie,$=N*N,de=$*N,be=2*de-3*$+1,te=de-2*$+N,ue=-2*de+3*$,_e=de-$,fe=be*Z[2]+te*Ee*ie+ue*q[2]+_e*Ee*ie,Te=be*Z[3]+te*Ce*ie+ue*q[3]+_e*Ce*ie;Se.position.set(fe,0,Te),Se.rotation.y=c(Z[4],q[4],N),d(Se,q[14]),Se.userData.body.rotation.x=q[9]?-1.4:0,Se.position.y=q[9]?.3:0,Se.visible=!0,Zx(Se,!!q[10]);let He=Se.rotation.y,Ge=Ee*-Math.sin(He)+Ce*-Math.cos(He),Ze=Ee*Math.cos(He)+Ce*-Math.sin(He),et=Math.hypot(Ee,Ce),H=l(Z[5]||0,q[5]||0,N),dt=q[14],rt=Array.isArray(q[12])?q[12].find(we=>we[0]===dt):null,B=rt?rt[1]:null,S=Se.userData.pulseRecoil||0,X=0,K=Se.userData.pulseFlinch||0;Se.userData.lastMag!=null&&B!=null&&B<Se.userData.lastMag&&(S=1),Se.userData.lastMag!=null&&B!=null&&B>Se.userData.lastMag&&(X=1),Se.userData.lastHp!=null&&q[6]<Se.userData.lastHp&&(K=1),Se.userData.lastMag=B,Se.userData.lastHp=q[6],Se.userData.pulseRecoil=0,Se.userData.pulseFlinch=0;let ne=r?Math.hypot(r.position.x-Se.position.x,r.position.y-1.5,r.position.z-Se.position.z):4;to(Se,{dt:v,t:M,speed:et,fwd:Ge,strafe:Ze,pitch:H,down:!!q[9],dist:ne,recoil:S,reload:X,flinch:K})});for(let[q,le]of o.remotes)z.has(q)||(e.remove(le),o.remotes.delete(q));let se=new Map(L.z.map(q=>[q[0],q])),he=new Set;for(let q of C.z){he.add(q[0]);let le=o.slot.get(q[0]);if(!le){if(le=t.spawn({out:{x:q[1],z:q[2]},n:{x:0,z:1},t:{x:1,z:0},count:0},Math.max(1,R.round),!!q[6]),!le)continue;o.slot.set(q[0],le),le.runner=!!q[7],le.mpX=q[1],le.mpZ=q[2],le.state="chase"}let Se=se.get(q[0])||q;le.mpX=l(Se[1],q[1],N),le.mpZ=l(Se[2],q[2],N),le.mpYaw=c(Se[3],q[3],N),le.mpClimb=q[5],q[8]&&le.attackT<=0&&(le.attackT=.01)}for(let[q,le]of o.slot)he.has(q)||(o.slot.delete(q),le.state!=="dead"&&le.state!=="dying"&&(le.state="dying",le.dieT=0,le.dieDir=Math.random()*.8-.4,i.onZDie?.(le)));for(let q of o.slot.values()){let le=Math.hypot(q.mpX-q.pos.x,q.mpZ-q.pos.z);q.pos.x=q.mpX,q.pos.z=q.mpZ,q.speed=0,q.cool=99,q.phase+=Math.min(.6,le*2.6),q.stuckTot=0}t.update(v,M,n,i.world.door,{...E,hitPlayer:()=>{}});for(let q of o.slot.values())q.pos.x=q.mpX,q.pos.z=q.mpZ,q.yaw=q.mpYaw,q.root.rotation.y=q.mpYaw,q.root.position.y=q.mpClimb||0,q.climbY=q.mpClimb||0;t.alive=o.slot.size}let y=new U;function w(v){let M=[...o.remotes.values()].filter(N=>N.position.y<.1&&N.visible);if(!M.length)return null;let E=Math.floor(performance.now()/6e3)%M.length,D=M[E],k=D.rotation.y,L=D.position.x+Math.sin(k)*3.4,C=D.position.z+Math.cos(k)*3.4;return y.set(L,2.6,C),v.position.lerp(y,.2),v.lookAt(D.position.x,1.4,D.position.z),D.userData.name}function T(v,M){let E=o.remotes.get(v);E&&E.userData.talk&&(E.userData.talk.visible=!!M)}function P(v,M,E,D){let k=h(v||"Bot",M||0);return k.position.set(E||0,0,D||2),o.remotes.set("dummy-"+(M||0),k),to(k,{dt:0,t:0,speed:0,fwd:0,pitch:0,down:!1}),k}return{S:o,spectate:w,connect:u,stop:m,update:b,send:g,setTalking:T,frameAt:_,spawnDummy:P,get on(){return o.on}}}function tv(i,e,t){let s=Math.min(2,window.devicePixelRatio||1),r=document.createElement("canvas");r.id="minimap",r.width=r.height=104*s,document.getElementById("hud").appendChild(r);let o=r.getContext("2d"),l={x0:1e9,x1:-1e9,z0:1e9,z1:-1e9};for(let _ of i.colliders)_.y1>=2.5&&_.x1-_.x0+(_.z1-_.z0)>3&&(l.x0=Math.min(l.x0,_.x0),l.x1=Math.max(l.x1,_.x1),l.z0=Math.min(l.z0,_.z0),l.z1=Math.max(l.z1,_.z1));let c=3,a=Math.max(l.x1-l.x0,l.z1-l.z0)+c*2,h=104*s/a,d=(l.x0+l.x1)/2,u=(l.z0+l.z1)/2,f=_=>(_-d)*h+104*s/2,p=_=>(_-u)*h+104*s/2,x=document.createElement("canvas");x.width=x.height=104*s;let g=x.getContext("2d");g.fillStyle="rgba(200,230,240,0.55)";for(let _ of i.colliders)_.y1>=1&&g.fillRect(f(_.x0),p(_.z0),Math.max(1,(_.x1-_.x0)*h),Math.max(1,(_.z1-_.z0)*h));let m=0;return function(b){if(m+=b,m<.08)return;m=0;let y=104*s;o.clearRect(0,0,y,y),o.drawImage(x,0,0),o.fillStyle="#ff3b4e";let w=2.4*s;for(let D of e.list)D.state!=="dead"&&D.root.visible&&(o.beginPath(),o.arc(f(D.pos.x),p(D.pos.z),w,0,6.283),o.fill());let T=f(t.x),P=p(t.z),v=-Math.sin(t.yaw),M=-Math.cos(t.yaw),E=6*s;i.marker&&(o.fillStyle="#ffd36b",o.fillRect(f(i.marker.x)-3*s,p(i.marker.z)-3*s,6*s,6*s)),o.fillStyle="#3cf0c0",o.strokeStyle="#04241c",o.lineWidth=s,o.beginPath(),o.moveTo(T+v*E,P+M*E),o.lineTo(T-v*E*.6-M*E*.6,P-M*E*.6+v*E*.6),o.lineTo(T-v*E*.6+M*E*.6,P-M*E*.6-v*E*.6),o.closePath(),o.fill(),o.stroke()}}var ps={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ii=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},lw=new rs(-1,1,1,-1,0,1),t0=class extends vt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}},cw=new t0,ms=class{constructor(e){this._mesh=new xe(cw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var na=class extends ii{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Nn.clone(e.uniforms),this.material=new bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ms(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var kl=class extends ii{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Zu=class extends ii{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ku=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new $t(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Yt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new na(ps),this.copyPass.material.blending=dn,this.timer=new nl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}kl!==void 0&&(o instanceof kl?n=!0:o instanceof Zu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var zl=class extends ii{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ge}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var nv={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ia=class i extends ii{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new ge(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new $t(r,o,{type:Yt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new $t(r,o,{type:Yt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new $t(r,o,{type:Yt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let l=nv;this.highPassUniforms=Nn.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new bt({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new oe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let a=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=a,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Nn.clone(ps.uniforms),this.blendMaterial=new bt({uniforms:this.copyUniforms,vertexShader:ps.vertexShader,fragmentShader:ps.fragmentShader,premultipliedAlpha:!0,blending:ln,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ge,this._oldClearAlpha=1,this._basic=new st,this._fsQuad=new ms(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new oe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let l=t[o],c=o+1<e?t[o+1]:0,a=l+c;s.push((o*l+(o+1)*c)/a),r.push(a)}return new bt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};ia.BlurDirectionX=new oe(1,0);ia.BlurDirectionY=new oe(0,1);var Hl={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new oe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new je},cameraProjectionMatrixInverse:{value:new je},cameraWorldMatrix:{value:new je},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new U(-1,-1,-1)},sceneBoxMax:{value:new U(1,1,1)}},vertexShader:`

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
		}`},Gl={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},$u={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function iv(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=hw(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let l=t[o],c=2*Math.PI*l/n,a=new U(Math.cos(c),Math.sin(c),0).normalize();s[o*4]=(a.x*.5+.5)*255,s[o*4+1]=(a.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new wi(s,e,e);return r.wrapS=en,r.wrapT=en,r.needsUpdate=!0,r}function hw(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var Vl={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:n0(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new oe},cameraProjectionMatrixInverse:{value:new je},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function n0(i,e,t){let n=uw(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function uw(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new U(Math.cos(r),Math.sin(r),o))}return n}var Ju=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),l=(e+t)*o,c=Math.floor(e+l),a=Math.floor(t+l),h=(3-Math.sqrt(3))/6,d=(c+a)*h,u=c-d,f=a-d,p=e-u,x=t-f,g,m;p>x?(g=1,m=0):(g=0,m=1);let _=p-g+h,b=x-m+h,y=p-1+2*h,w=x-1+2*h,T=c&255,P=a&255,v=this.perm[T+this.perm[P]]%12,M=this.perm[T+g+this.perm[P+m]]%12,E=this.perm[T+1+this.perm[P+1]]%12,D=.5-p*p-x*x;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[v],p,x));let k=.5-_*_-b*b;k<0?s=0:(k*=k,s=k*k*this._dot(this.grad3[M],_,b));let L=.5-y*y-w*w;return L<0?r=0:(L*=L,r=L*L*this._dot(this.grad3[E],y,w)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,l,a=(e+t+n)*.3333333333333333,h=Math.floor(e+a),d=Math.floor(t+a),u=Math.floor(n+a),f=1/6,p=(h+d+u)*f,x=h-p,g=d-p,m=u-p,_=e-x,b=t-g,y=n-m,w,T,P,v,M,E;_>=b?b>=y?(w=1,T=0,P=0,v=1,M=1,E=0):_>=y?(w=1,T=0,P=0,v=1,M=0,E=1):(w=0,T=0,P=1,v=1,M=0,E=1):b<y?(w=0,T=0,P=1,v=0,M=1,E=1):_<y?(w=0,T=1,P=0,v=0,M=1,E=1):(w=0,T=1,P=0,v=1,M=1,E=0);let D=_-w+f,k=b-T+f,L=y-P+f,C=_-v+2*f,N=b-M+2*f,R=y-E+2*f,O=_-1+3*f,G=b-1+3*f,F=y-1+3*f,z=h&255,Y=d&255,se=u&255,he=this.perm[z+this.perm[Y+this.perm[se]]]%12,q=this.perm[z+w+this.perm[Y+T+this.perm[se+P]]]%12,le=this.perm[z+v+this.perm[Y+M+this.perm[se+E]]]%12,Se=this.perm[z+1+this.perm[Y+1+this.perm[se+1]]]%12,Z=.6-_*_-b*b-y*y;Z<0?s=0:(Z*=Z,s=Z*Z*this._dot3(this.grad3[he],_,b,y));let ie=.6-D*D-k*k-L*L;ie<0?r=0:(ie*=ie,r=ie*ie*this._dot3(this.grad3[q],D,k,L));let Ee=.6-C*C-N*N-R*R;Ee<0?o=0:(Ee*=Ee,o=Ee*Ee*this._dot3(this.grad3[le],C,N,R));let Ce=.6-O*O-G*G-F*F;return Ce<0?l=0:(Ce*=Ce,l=Ce*Ce*this._dot3(this.grad3[Se],O,G,F)),32*(s+r+o+l)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,l=this.perm,c=(Math.sqrt(5)-1)/4,a=(5-Math.sqrt(5))/20,h,d,u,f,p,x=(e+t+n+s)*c,g=Math.floor(e+x),m=Math.floor(t+x),_=Math.floor(n+x),b=Math.floor(s+x),y=(g+m+_+b)*a,w=g-y,T=m-y,P=_-y,v=b-y,M=e-w,E=t-T,D=n-P,k=s-v,L=M>E?32:0,C=M>D?16:0,N=E>D?8:0,R=M>k?4:0,O=E>k?2:0,G=D>k?1:0,F=L+C+N+R+O+G,z=o[F][0]>=3?1:0,Y=o[F][1]>=3?1:0,se=o[F][2]>=3?1:0,he=o[F][3]>=3?1:0,q=o[F][0]>=2?1:0,le=o[F][1]>=2?1:0,Se=o[F][2]>=2?1:0,Z=o[F][3]>=2?1:0,ie=o[F][0]>=1?1:0,Ee=o[F][1]>=1?1:0,Ce=o[F][2]>=1?1:0,$=o[F][3]>=1?1:0,de=M-z+a,be=E-Y+a,te=D-se+a,ue=k-he+a,_e=M-q+2*a,fe=E-le+2*a,Te=D-Se+2*a,He=k-Z+2*a,Ge=M-ie+3*a,Ze=E-Ee+3*a,et=D-Ce+3*a,H=k-$+3*a,dt=M-1+4*a,rt=E-1+4*a,B=D-1+4*a,S=k-1+4*a,X=g&255,K=m&255,ne=_&255,we=b&255,Ie=l[X+l[K+l[ne+l[we]]]]%32,ce=l[X+z+l[K+Y+l[ne+se+l[we+he]]]]%32,pe=l[X+q+l[K+le+l[ne+Se+l[we+Z]]]]%32,Le=l[X+ie+l[K+Ee+l[ne+Ce+l[we+$]]]]%32,Ae=l[X+1+l[K+1+l[ne+1+l[we+1]]]]%32,ye=.6-M*M-E*E-D*D-k*k;ye<0?h=0:(ye*=ye,h=ye*ye*this._dot4(r[Ie],M,E,D,k));let Me=.6-de*de-be*be-te*te-ue*ue;Me<0?d=0:(Me*=Me,d=Me*Me*this._dot4(r[ce],de,be,te,ue));let Ue=.6-_e*_e-fe*fe-Te*Te-He*He;Ue<0?u=0:(Ue*=Ue,u=Ue*Ue*this._dot4(r[pe],_e,fe,Te,He));let Ye=.6-Ge*Ge-Ze*Ze-et*et-H*H;Ye<0?f=0:(Ye*=Ye,f=Ye*Ye*this._dot4(r[Le],Ge,Ze,et,H));let at=.6-dt*dt-rt*rt-B*B-S*S;return at<0?p=0:(at*=at,p=at*at*this._dot4(r[Ae],dt,rt,B,S)),27*(h+d+u+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var sa=class i extends ii{constructor(e,t,n=512,s=512,r,o,l){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=iv(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new $t(this.width,this.height,{type:Yt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new bt({defines:Object.assign({},Hl.defines),uniforms:Nn.clone(Hl.uniforms),vertexShader:Hl.vertexShader,fragmentShader:Hl.fragmentShader,blending:dn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ka,this.normalMaterial.blending=dn,this.pdMaterial=new bt({defines:Object.assign({},Vl.defines),uniforms:Nn.clone(Vl.uniforms),vertexShader:Vl.vertexShader,fragmentShader:Vl.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new bt({defines:Object.assign({},Gl.defines),uniforms:Nn.clone(Gl.uniforms),vertexShader:Gl.vertexShader,fragmentShader:Gl.fragmentShader,blending:dn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new bt({uniforms:Nn.clone(ps.uniforms),vertexShader:ps.vertexShader,fragmentShader:ps.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:sl,blendDst:Hr,blendEquation:Ai,blendSrcAlpha:il,blendDstAlpha:Hr,blendEquationAlpha:Ai}),this.blendMaterial=new bt({uniforms:Nn.clone($u.uniforms),vertexShader:$u.vertexShader,fragmentShader:$u.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Mh,blendSrc:sl,blendDst:Hr,blendEquation:Ai,blendSrcAlpha:il,blendDstAlpha:Hr,blendEquationAlpha:Ai}),this._fsQuad=new ms(null),this._originalClearColor=new ge,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),l!==void 0&&this.updatePdMaterial(l)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new ts,this.depthTexture.format=ls,this.depthTexture.type=rr,this.normalRenderTarget=new $t(this.width,this.height,{minFilter:tn,magFilter:tn,type:Yt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=n0(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=dn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=dn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=dn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=dn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=dn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=l,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=l,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Ju,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let l=0;l<e;l++){let c=o,a=l;s[(o*e+l)*4]=(t.noise(c,a)*.5+.5)*255,s[(o*e+l)*4+1]=(t.noise(c+e,a)*.5+.5)*255,s[(o*e+l)*4+2]=(t.noise(c,a+e)*.5+.5)*255,s[(o*e+l)*4+3]=(t.noise(c+e,a+e)*.5+.5)*255}let r=new wi(s,e,e,Jn,Vn);return r.wrapS=en,r.wrapT=en,r.needsUpdate=!0,r}};sa.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Wl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Qu=class extends ii{constructor(){super(),this.isOutputPass=!0,this.uniforms=Nn.clone(Wl.uniforms),this.material=new zo({name:Wl.name,uniforms:this.uniforms,vertexShader:Wl.vertexShader,fragmentShader:Wl.fragmentShader}),this._fsQuad=new ms(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===Ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===rl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ol?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===al?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Gr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===cl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===hl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ll&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Xl=class{constructor(e,t,n){this.max=e,this.n=0,this.next=0;let s=this.geo=new vt;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.siz=new Float32Array(e),s.setAttribute("position",new ht(this.pos,3).setUsage(yl)),s.setAttribute("aColor",new ht(this.col,4).setUsage(yl)),s.setAttribute("aSize",new ht(this.siz,1).setUsage(yl)),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.s0=new Float32Array(e),this.s1=new Float32Array(e),this.c0=new Float32Array(e*4),this.uniforms={map:{value:n},uScale:{value:800}};let r=this.mat=new bt({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:t?ln:as,vertexShader:`attribute float aSize; attribute vec4 aColor; varying vec4 vC; uniform float uScale;
        void main(){ vec4 mv = modelViewMatrix*vec4(position,1.); gl_Position = projectionMatrix*mv; gl_PointSize = clamp(aSize*uScale/max(-mv.z,0.1), 0., 300.); vC = aColor; }`,fragmentShader:`uniform sampler2D map; varying vec4 vC;
        void main(){ float a = texture2D(map, gl_PointCoord).a * vC.a; if(a<0.004) discard; gl_FragColor = vec4(vC.rgb, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        }`});this.points=new Ps(s,r),this.points.frustumCulled=!1,this.points.renderOrder=5,this.points.userData.noAO=!0}emit(e,t,n,s,r,o,l,c,a,h,d,u,f,p=0,x=0){let g=this.next;this.next=(this.next+1)%this.max,this.pos[g*3]=e,this.pos[g*3+1]=t,this.pos[g*3+2]=n,this.vel[g*3]=s,this.vel[g*3+1]=r,this.vel[g*3+2]=o,this.life[g]=this.maxLife[g]=l,this.s0[g]=c,this.s1[g]=a,this.grav[g]=p,this.drag[g]=x,this.c0[g*4]=h,this.c0[g*4+1]=d,this.c0[g*4+2]=u,this.c0[g*4+3]=f}update(e){let{pos:t,vel:n,life:s,maxLife:r,col:o,siz:l,c0:c}=this;for(let a=0;a<this.max;a++){if(s[a]<=0){l[a]=0,o[a*4+3]=0;continue}if(s[a]-=e,s[a]<=0){l[a]=0,o[a*4+3]=0;continue}let h=1-s[a]/r[a],d=a*3,u=Math.max(0,1-this.drag[a]*e);n[d]*=u,n[d+1]=n[d+1]*u-this.grav[a]*e,n[d+2]*=u,t[d]+=n[d]*e,t[d+1]+=n[d+1]*e,t[d+2]+=n[d+2]*e,t[d+1]<.02&&this.grav[a]>0&&(t[d+1]=.02,n[d]*=.4,n[d+2]*=.4,n[d+1]*=-.25),l[a]=this.s0[a]+(this.s1[a]-this.s0[a])*h;let f=h<.1?h*10:1-(h-.1)/.9;o[a*4]=c[a*4],o[a*4+1]=c[a*4+1],o[a*4+2]=c[a*4+2],o[a*4+3]=c[a*4+3]*f}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0}clear(){this.life.fill(0)}},ed=class{constructor(e,t,n){this.scene=e,this.tier=n;let s=n>0?1:.4;this.soft=new Xl(Math.floor(900*s)+100,!1,t.glow),this.add=new Xl(Math.floor(900*s)+100,!0,t.glow),e.add(this.soft.points,this.add.points),this.tracers=[];let r=new ct(1,1,1);for(let o=0;o<24;o++){let l=new xe(r,new st({color:new ge(5,3.6,1.4),transparent:!0,blending:ln,depthWrite:!1,toneMapped:!1}));l.visible=!1,l.userData.noAO=!0,l.userData.t=0,e.add(l),this.tracers.push(l)}this.tn=0,this.maxCas=n>0?80:16,this.cas=new Gn(new It(.009,.009,.034,6),new ze({color:14066743,metalness:1,roughness:.3}),this.maxCas),this.cas.frustumCulled=!1,this.cas.castShadow=!1,e.add(this.cas),this.casData=Array.from({length:this.maxCas},()=>({t:0,p:new U,v:new U,r:new Kn,w:new U})),this.casNext=0,this._m=new je,this._q=new on,this._s=new U(1,1,1);for(let o=0;o<this.maxCas;o++)this._m.makeScale(0,0,0),this.cas.setMatrixAt(o,this._m)}setScale(e,t){let n=e/(2*Math.tan(t*Math.PI/360));this.soft.uniforms.uScale.value=n,this.add.uniforms.uScale.value=n}tracer(e,t,n=.012){let s=this.tracers[this.tn++%this.tracers.length],r=e.distanceTo(t);r<.5||(s.position.copy(e).lerp(t,.5),s.lookAt(t),s.scale.set(n,n,r),s.visible=!0,s.userData.t=.06,s.material.opacity=1)}casing(e,t){let n=this.casData[this.casNext++%this.maxCas];n.t=2.5,n.p.copy(e),n.v.copy(t),n.r.set(ee(cn),ee(cn),ee(cn)),n.w.set(ee(-30,30),ee(-30,30),ee(-30,30))}blood(e,t,n,s=1){let r=this.tier>0?1:.5;n=Math.ceil(n*r);for(let o=0;o<n;o++){let l=ee(.6,3.2)*s;this.soft.emit(e.x,e.y,e.z,t.x*l+ee(-1,1),t.y*l+ee(-.2,1.4),t.z*l+ee(-1,1),ee(.35,.8),ee(.12,.2)*s,ee(.45,.8)*s,ee(.55,.9),ee(.02,.07),ee(.04,.12),ee(.35,.65),4,2.5)}for(let o=0;o<Math.ceil(n*.6);o++){let l=ee(1.5,5)*s;this.soft.emit(e.x,e.y,e.z,t.x*l+ee(-1.5,1.5),t.y*l+ee(0,2.5),t.z*l+ee(-1.5,1.5),ee(.5,1),.05,.04,.6,0,.03,.9,11,.4)}}sparks(e,t,n){n=Math.ceil(n*(this.tier>0?1:.5));for(let s=0;s<n;s++){let r=ee(2,7);this.add.emit(e.x,e.y,e.z,t.x*r+ee(-2,2),t.y*r+ee(-1,2.5),t.z*r+ee(-2,2),ee(.2,.5),.07,.015,4,ee(1.6,2.6),.5,1,9,.8)}}dust(e,t,n,s=[.45,.36,.26]){n=Math.ceil(n*(this.tier>0?1:.5));for(let r=0;r<n;r++)this.soft.emit(e.x,e.y,e.z,t.x*ee(.3,1.5)+ee(-.5,.5),t.y*ee(.2,1)+ee(0,.6),t.z*ee(.3,1.5)+ee(-.5,.5),ee(.6,1.3),.2,ee(.8,1.4),s[0],s[1],s[2],.35,-.2,1.8)}smoke(e,t,n=2){for(let s=0;s<n;s++)this.soft.emit(e.x,e.y,e.z,t.x*1.2+ee(-.2,.2),t.y*1.2+ee(.1,.5),t.z*1.2+ee(-.2,.2),ee(.5,1),.05,.28,.55,.55,.58,.25,-.4,2)}flash(e,t){this.add.emit(e.x,e.y,e.z,t.x*1,t.y*1,t.z*1,.06,.45,.8,5,3.4,1.4,1,0,0);for(let n=0;n<3;n++)this.add.emit(e.x,e.y,e.z,t.x*ee(3,9)+ee(-2,2),t.y*ee(3,9)+ee(-2,2),t.z*ee(3,9)+ee(-2,2),ee(.08,.18),.1,.02,4,2.2,.6,1,2,1)}glowBurst(e,t,n,s,r=24,o=4){for(let l=0;l<r;l++){let c=ee(cn),a=ee(-.6,1),h=ee(.4,1)*o;this.add.emit(e.x,e.y,e.z,Math.cos(c)*h,a*h,Math.sin(c)*h,ee(.5,1.1),.18,.02,t,n,s,1,2,1.2)}}update(e){this.soft.update(e),this.add.update(e);for(let n of this.tracers)n.visible&&(n.userData.t-=e,n.material.opacity=Math.max(0,n.userData.t/.06),n.userData.t<=0&&(n.visible=!1));let t=!1;for(let n=0;n<this.maxCas;n++){let s=this.casData[n];if(s.t<=0)continue;t=!0,s.t-=e,s.v.y-=9.8*e,s.p.addScaledVector(s.v,e),s.p.y<.02&&(s.p.y=.02,s.v.y*=-.35,s.v.x*=.6,s.v.z*=.6,s.w.multiplyScalar(.5)),s.r.x+=s.w.x*e,s.r.y+=s.w.y*e,s.r.z+=s.w.z*e;let r=Math.min(1,s.t*2);this._q.setFromEuler(s.r),this._s.setScalar(s.t>0?r:0),this._m.compose(s.p,this._q,this._s),this.cas.setMatrixAt(n,this._m),s.t<=0&&(this._m.makeScale(0,0,0),this.cas.setMatrixAt(n,this._m))}(t||this._anyBefore)&&(this.cas.instanceMatrix.needsUpdate=!0),this._anyBefore=t}reset(){this.soft.clear(),this.add.clear();for(let e of this.casData)e.t=0;for(let e of this.tracers)e.visible=!1}},ql=class{constructor(e,t,n={}){this.o=Object.assign({R:22,y0:.2,y1:6,size:.06,alpha:.2,col:[.9,.75,.55],additive:!0,speed:1},n),this.ps=new Xl(t,this.o.additive,e.glow),this.n=t,this.R=this.o.R,this.t=0;for(let s=0;s<t;s++)this.ps.pos[s*3]=ee(-this.R,this.R),this.ps.pos[s*3+1]=ee(this.o.y0,this.o.y1),this.ps.pos[s*3+2]=ee(-this.R,this.R);this.ps.update=s=>this.upd(s),this.points=this.ps.points,this.center={x:0,z:0}}upd(e){let t=this.ps,n=this.o;this.t+=e;let s=this.center;for(let r=0;r<this.n;r++){let o=r*3,l=n.speed;t.pos[o]+=(Math.sin(this.t*.3+r)*.25+.35)*e*l,t.pos[o+1]+=Math.sin(this.t*.4+r*1.7)*.06*e*l,t.pos[o+2]+=Math.cos(this.t*.25+r*.7)*.2*e*l,t.pos[o]-s.x>this.R?t.pos[o]-=this.R*2:t.pos[o]-s.x<-this.R&&(t.pos[o]+=this.R*2),t.pos[o+2]-s.z>this.R?t.pos[o+2]-=this.R*2:t.pos[o+2]-s.z<-this.R&&(t.pos[o+2]+=this.R*2),t.siz[r]=n.size*(1+r%3*.4),t.col[r*4]=n.col[0],t.col[r*4+1]=n.col[1],t.col[r*4+2]=n.col[2],t.col[r*4+3]=n.alpha*(.6+.4*(r%4/3))}t.geo.attributes.position.needsUpdate=!0,t.geo.attributes.aColor.needsUpdate=!0,t.geo.attributes.aSize.needsUpdate=!0}},dw={uniforms:{tDiffuse:{value:null},uTime:{value:0},uDamage:{value:0},uVig:{value:.55},uGrain:{value:.07},uSat:{value:1.1},uAberr:{value:.6},uRes:{value:new oe(1,1)},uLow:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime,uDamage,uVig,uGrain,uSat,uAberr,uLow; uniform vec2 uRes; varying vec2 vUv;
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
    }`},td=class{constructor(e,t,n,s){this.r=e,this.scene=t,this.camera=n,this.viewScene=s,this.mode="direct",this.w=1,this.h=1,this.pr=1}build(e){if(this.mode=e,this.composer&&(this.composer.dispose?.(),this.composer=null),e==="direct")return;let t=new $t(this.w,this.h,{type:Yt,samples:e==="full"?0:4}),n=this.composer=new Ku(this.r,t);if(n.setPixelRatio?.(this.pr),n.setSize(this.w,this.h),n.addPass(new zl(this.scene,this.camera)),e==="full"){let r=this.gtao=new sa(this.scene,this.camera,this.w*this.pr,this.h*this.pr);r.output=sa.OUTPUT.Default,r.blendIntensity=1,r.updateGtaoMaterial({radius:.7,distanceExponent:1.5,thickness:1.5,scale:1.2,samples:10,distanceFallOff:1,screenSpaceRadius:!1}),r.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,radiusExponent:1,rings:2,samples:8});let o=r._overrideVisibility.bind(r);r._overrideVisibility=()=>{o(),this.scene.traverse(l=>{l.userData.noAO&&l.visible&&(l.visible=!1,r._visibilityCache.push(l))})},n.addPass(r)}let s=new zl(this.viewScene,this.camera);s.clear=!1,s.clearDepth=!0,n.addPass(s),this.bloom=new ia(new oe(this.w,this.h),.42,.55,.9),n.addPass(this.bloom),n.addPass(new Qu),this.grade=new na(dw),this.grade.uniforms.uRes.value.set(this.w*this.pr,this.h*this.pr),n.addPass(this.grade)}setSize(e,t,n){this.w=e,this.h=t,this.pr=n,this.composer&&(this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.gtao?.setSize(e*n,t*n),this.grade.uniforms.uRes.value.set(e*n,t*n))}render(e,t,n,s){if(!this.composer){let o=this.r;o.autoClear=!1,o.clear(),o.render(this.scene,this.camera),o.clearDepth(),o.render(this.viewScene,this.camera),o.autoClear=!0;return}let r=this.grade.uniforms;r.uTime.value=t,r.uDamage.value=n,r.uLow.value=s,this.composer.render(e)}};var nd=class{constructor(){this.ctx=null,this.muted=!1,this.lastGroan=0,this.lastTick=0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=this.muted?0:.8;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,n.attack.value=.003,n.release.value=.2,this.master.connect(n),n.connect(t.destination);let s=t.createBuffer(1,t.sampleRate*2,t.sampleRate),r=s.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=Math.random()*2-1;this.noise=s;let o=t.sampleRate*1.8,l=t.createBuffer(2,o,t.sampleRate);for(let c=0;c<2;c++){let a=l.getChannelData(c);for(let h=0;h<o;h++)a[h]=(Math.random()*2-1)*Math.pow(1-h/o,3.2)}this.verb=t.createConvolver(),this.verb.buffer=l,this.verbIn=t.createGain(),this.verbIn.gain.value=.35,this.verbIn.connect(this.verb),this.verb.connect(this.master),this.startAmbient()}setMuted(e){this.muted=e,this.master&&this.master.gain.setTargetAtTime(e?0:.8,this.ctx.currentTime,.03)}get ok(){return this.ctx&&!this.muted&&this.ctx.state==="running"}out(e=0,t=.3){let n=this.ctx,s=n.createGain(),r=s;if(n.createStereoPanner){let l=n.createStereoPanner();l.pan.value=Qt(e,-1,1),s.connect(l),r=l}r.connect(this.master);let o=n.createGain();return o.gain.value=t,r.connect(o),o.connect(this.verbIn),s}nz(e,t,n,s,r,o,l,c=1){let a=this.ctx,h=a.createBufferSource();h.buffer=this.noise,h.loop=!0;let d=a.createBiquadFilter();d.type=n,d.Q.value=c,d.frequency.setValueAtTime(s,e),d.frequency.exponentialRampToValueAtTime(Math.max(20,r),e+t);let u=a.createGain();u.gain.setValueAtTime(o,e),u.gain.exponentialRampToValueAtTime(8e-4,e+t),h.connect(d),d.connect(u),u.connect(l),h.start(e,ee(1)),h.stop(e+t+.05)}tone(e,t,n,s,r,o,l,c=.003){let a=this.ctx,h=a.createOscillator();h.type=n,h.frequency.setValueAtTime(s,e),h.frequency.exponentialRampToValueAtTime(Math.max(10,r),e+t);let d=a.createGain();d.gain.setValueAtTime(1e-4,e),d.gain.linearRampToValueAtTime(o,e+c),d.gain.exponentialRampToValueAtTime(8e-4,e+t),h.connect(d),d.connect(l),h.start(e),h.stop(e+t+.05)}shot(e){if(!this.ok)return;let t=this.ctx,n=t.currentTime,s=this.out(0,e==="shotgun"||e==="lmg"?.5:.3),r={pistol:[.13,2600,.7,150,.9,.55],akimbo:[.1,2800,.55,170,.75,.45],smg:[.09,3400,.5,190,.7,.45],shotgun:[.34,1800,1,85,1.2,.9],sawed:[.28,1500,1.1,70,1.3,1],rifle:[.16,2200,.8,120,1,.7],lever:[.2,1800,.75,110,1.15,.7],nailer:[.045,4200,.28,240,.25,.2],lmg:[.2,1900,.9,95,1.2,.8]}[e]||[.12,2500,.7,150,1,.6];this.nz(n,r[0],"lowpass",r[1],220,r[2],s,.7),this.nz(n,.025,"highpass",3e3,6e3,.6,s),this.tone(n,r[0]*1.2,"sine",r[3],r[3]*.3,r[4]*.9,s),this.tone(n,.05,"square",r[3]*4,r[3]*1.5,.15,s)}click(e=0,t=3200,n=.35,s=0){if(!this.ok)return;let r=this.ctx.currentTime+e,o=this.out(s,.1);this.nz(r,.03,"bandpass",t,t*.7,n,o,3),this.tone(r,.025,"square",t*.3,t*.2,.05,o)}reload(e){if(!this.ok)return;let t=e==="lmg"?3.4:e==="rifle"?1.7:e==="smg"?1.4:1;this.click(.12,2400,.4),this.click(t*.55,1800,.5),this.click(t*.8,3600,.45),e!=="pistol"&&this.click(t*.92,1400,.5)}pump(){this.click(0,900,.6),this.click(.18,1500,.55)}shell(){this.click(0,2e3,.45)}empty(){this.click(0,1500,.3)}groan(e=0,t=.5,n=1,s=1){if(!this.ok)return;let r=this.ctx,o=r.currentTime;if(o-this.lastGroan<.09)return;this.lastGroan=o;let l=o,c=this.out(e,.45),a=ee(70,105)*n,h=r.createOscillator();h.type="sawtooth",h.frequency.setValueAtTime(a*1.25,l),h.frequency.linearRampToValueAtTime(a,l+s*.3),h.frequency.linearRampToValueAtTime(a*.7,l+s);let d=r.createOscillator();d.frequency.value=ee(5,9);let u=r.createGain();u.gain.value=6,d.connect(u),u.connect(h.frequency);let f=r.createBiquadFilter();f.type="bandpass",f.Q.value=5,f.frequency.setValueAtTime(ee(450,700),l),f.frequency.linearRampToValueAtTime(ee(900,1300),l+s*.6);let p=r.createBiquadFilter();p.type="lowpass",p.frequency.value=1600;let x=r.createGain();x.gain.setValueAtTime(1e-4,l),x.gain.linearRampToValueAtTime(t*.5,l+s*.15),x.gain.exponentialRampToValueAtTime(.001,l+s),h.connect(f),f.connect(p),p.connect(x),x.connect(c),h.start(l),d.start(l),h.stop(l+s+.05),d.stop(l+s+.05),this.nz(l,s*.8,"bandpass",900,500,t*.15,c,2)}zhit(e=0,t=!1){if(!this.ok)return;let n=this.ctx.currentTime,s=this.out(e,.2);this.nz(n,.09,"lowpass",700,120,.5,s),this.tone(n,.1,"sine",120,50,.4,s),t&&this.tone(n,.08,"triangle",900,500,.12,s)}zdie(e=0,t=.4){if(!this.ok)return;this.groan(e,t,.75,.7);let n=this.ctx.currentTime+.15,s=this.out(e,.25);this.nz(n,.25,"lowpass",500,60,.6,s),this.tone(n,.3,"sine",90,35,.5,s)}tick(e){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,0);this.tone(t,.05,"square",e?900:1500,e?600:1300,e?.12:.07,n)}cash(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.2);this.tone(e,.12,"triangle",1250,1250,.22,t),this.tone(e+.07,.25,"triangle",1880,1880,.22,t),this.nz(e,.05,"highpass",5e3,8e3,.15,t)}deny(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,0);this.tone(e,.22,"sawtooth",130,90,.2,t),this.tone(e+.1,.22,"sawtooth",110,80,.2,t)}hurt(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.2);this.nz(e,.18,"lowpass",600,90,.9,t),this.tone(e,.25,"sine",80,40,.8,t),this.tone(e,.2,"sawtooth",220,110,.12,t)}heart(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,0);this.tone(e,.14,"sine",62,38,.7,t),this.tone(e+.18,.14,"sine",56,34,.5,t)}plank(e){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,.3);this.nz(t,e?.16:.08,"bandpass",e?500:800,250,.7,n,2),this.tone(t,.1,"triangle",220,90,.4,n),e&&this.nz(t+.03,.12,"highpass",1500,3e3,.3,n)}repair(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.2);this.nz(e,.07,"bandpass",1100,600,.6,t,2),this.tone(e,.08,"square",300,120,.15,t),this.tone(e+.1,.1,"triangle",1500,1500,.1,t)}door(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.5);this.nz(e,2.2,"lowpass",900,150,.7,t,1),this.tone(e,2.2,"sawtooth",55,42,.2,t,.3);for(let n=0;n<5;n++)this.click(.2+n*.35,700+n*120,.7);this.nz(e+2,.4,"lowpass",400,60,.9,t)}boom(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.7);this.nz(e,2.4,"lowpass",2400,50,1.4,t,.7),this.tone(e,1.6,"sine",90,24,1.3,t),this.tone(e+.05,.8,"sawtooth",50,25,.3,t)}power(e){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,.4);(e==="nuke"?[220,277,330,440]:e==="double"?[392,494,587,784]:[330,440,554,659]).forEach((r,o)=>{this.tone(t+o*.07,.4,"triangle",r,r,.2,n),this.tone(t+o*.07,.4,"sine",r*2,r*2,.08,n)})}medkit(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.5);[523,659,784,1047].forEach((n,s)=>{this.tone(e+s*.08,.5,"sine",n,n,.2,t),this.tone(e+s*.08,.5,"triangle",n*2,n*2,.05,t)}),this.tone(e,.9,"sine",300,600,.12,t,.1)}spawnPower(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.5);this.tone(e,.7,"sine",600,1200,.25,t,.05),this.tone(e+.1,.7,"sine",900,1800,.12,t,.05)}round(e){if(!this.ok)return;let t=this.ctx,n=t.currentTime,s=this.out(0,.8);[55,82.4,98,130.8].forEach((o,l)=>{let c=t.createOscillator();c.type="sawtooth",c.frequency.value=o;let a=t.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(200,n),a.frequency.linearRampToValueAtTime(1400,n+1.1),a.frequency.linearRampToValueAtTime(150,n+3.2);let h=t.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.linearRampToValueAtTime(.16,n+.9),h.gain.exponentialRampToValueAtTime(.001,n+3.4),c.connect(a),a.connect(h),h.connect(s),c.start(n),c.stop(n+3.5)}),[440,415,392,330,294].forEach((o,l)=>{this.tone(n+.5+l*.32,1.3,"sine",o,o,.14,s,.01),this.tone(n+.5+l*.32,1.3,"sine",o*2.01,o*2.01,.04,s,.01)}),this.tone(n,.5,"sine",70,28,.9,s),this.nz(n,.35,"lowpass",700,70,.5,s)}over(){if(!this.ok)return;let e=this.ctx,t=e.currentTime,n=this.out(0,.9);[110,130.8,164.8].forEach(s=>{this.tone(t,3.6,"sawtooth",s,s*.5,.12,n,.4)}),this.tone(t,1.5,"sine",60,25,1,n),this.nz(t,1.2,"lowpass",900,60,.7,n)}jingle(e=4){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,.5),s=[523,659,784,659,587,740,880,740];for(let r=0;r<e*4;r++){let o=s[r%s.length]*(r>8?1.12:1);this.tone(t+r*.2,.32,"triangle",o,o,.1,n,.005)}this.nz(t,.4,"bandpass",600,300,.4,n)}open(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.4);this.nz(e,.5,"bandpass",500,900,.4,t,4),this.tone(e,.5,"sawtooth",120,220,.1,t)}startAmbient(){let e=this.ctx,t=e.createGain();t.gain.value=.5,t.connect(this.master);let n=e.createBufferSource();n.buffer=this.noise,n.loop=!0;let s=e.createBiquadFilter();s.type="bandpass",s.Q.value=.8,s.frequency.value=380;let r=e.createGain();r.gain.value=.07;let o=e.createOscillator();o.frequency.value=.11;let l=e.createGain();l.gain.value=.045,o.connect(l),l.connect(r.gain);let c=e.createOscillator();c.frequency.value=.07;let a=e.createGain();a.gain.value=140,c.connect(a),a.connect(s.frequency),n.connect(s),s.connect(r),r.connect(t),n.start(),o.start(),c.start();let h=e.createOscillator();h.type="sawtooth",h.frequency.value=36;let d=e.createBiquadFilter();d.type="lowpass",d.frequency.value=90;let u=e.createGain();u.gain.value=.04,h.connect(d),d.connect(u),u.connect(t),h.start();let f=e.createOscillator();f.type="sine",f.frequency.value=4300;let p=e.createGain();p.gain.value=0;let x=e.createOscillator();x.type="square",x.frequency.value=28;let g=e.createGain();g.gain.value=.003,x.connect(g),g.connect(p.gain);let m=e.createOscillator();m.frequency.value=.3;let _=e.createGain();_.gain.value=.002,m.connect(_),_.connect(p.gain),f.connect(p),p.connect(t),f.start(),x.start(),m.start()}beep(e=3){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,0),s=e<1.2?1480:860;this.tone(t,.04,"square",s,s,e<1.2?.1:.05,n)}_distort(e){let n=new Float32Array(256);for(let s=0;s<256;s++){let r=s/255*2-1;n[s]=Math.tanh(r*e)}return n}ensureMusic(){if(!this.ctx||this.musicBus)return;let e=this.ctx;this.musicBus=e.createGain(),this.musicBus.gain.value=.2,this.musicBus.connect(this.master),this.musicFilter=e.createBiquadFilter(),this.musicFilter.type="lowpass",this.musicFilter.frequency.value=1200,this.musicFilter.connect(this.musicBus),this.guitarShaper=e.createWaveShaper(),this.guitarShaper.curve=this._distort(14),this.guitarShaper.oversample="2x";let t=e.createBiquadFilter();t.type="lowpass",t.frequency.value=2400,this.guitarShaper.connect(t),t.connect(this.musicFilter),this.guitarIn=e.createGain(),this.guitarIn.gain.value=.2,this.guitarIn.connect(this.guitarShaper),this.musicOn=!0,this.musicPlaying=!1,this.musicMood="calm",this.musicLow=!1,this._nextMus=0,this._duckUntil=0,this._six=0}setMusicDetail(e){this.musicLow=!!e,this.guitarShaper&&(this.guitarShaper.oversample=e?"none":"2x")}setMusicOn(e){this.musicOn=!!e,this.musicBus&&this.musicBus.gain.setTargetAtTime(this.musicOn?.2:0,this.ctx.currentTime,.05)}musicStart(){this.init(),this.ensureMusic(),this.musicPlaying=!0,this._nextMus=0,this._six=0}musicStop(){this.musicPlaying=!1,this._nextMus=0}setMusicPhase(e){this.musicMood=e==="hot"||e==="round"?"hot":"calm",this.musicFilter&&this.musicFilter.frequency.setTargetAtTime(this.musicMood==="hot"?this.musicLow?1600:3400:1e3,this.ctx.currentTime,.35)}pumpMusic(){if(!this.ctx||!this.musicPlaying||!this.musicOn||this.muted||this.ctx.state!=="running")return;this.ensureMusic();let e=this.ctx.currentTime,t=e+(this.musicLow?.28:.2);(!this._nextMus||this._nextMus<e-.05)&&(this._nextMus=e+.04);let n=this.musicMood==="hot"?146:96,s=60/n/4;e<(this._duckUntil||0)?this.musicBus.gain.setTargetAtTime(.05,e,.04):this.musicBus.gain.setTargetAtTime(this.musicMood==="hot"?.24:.14,e,.25);let o=(c,a,h,d,u,f,p=this.musicFilter)=>this.tone(c,a,h,d,u,f,p,.004),l=(c,a,h,d,u,f)=>this.nz(c,a,h,d,u,f,this.musicFilter);for(;this._nextMus<t;)this._riffStep(o,l,this._nextMus,s,this._six++,this.musicMood==="hot",this.musicLow),this._nextMus+=s}_riffStep(e,t,n,s,r,o,l,c){let a=c||this.guitarIn,h=(r%16+16)%16,d=Math.floor(r/16)%4,f=[[164.81,246.94,41.2],[196,293.66,49],[146.83,220,36.71],[164.81,246.94,41.2]][d],p=o?h===0||h===3||h===6||h===10:h===0||h===7,x=o?h===4||h===12:h===8;if(p&&(e(n,.14,"sine",160,46,o?.72:.5),t(n,.018,"highpass",2400,700,.16)),x&&(t(n,l?.06:.1,"bandpass",1900,700,o?.32:.18),l||e(n,.04,"triangle",240,150,.07)),!l&&(o||h%2===0)){let m=o&&(h===6||h===14);t(n,m?.07:.018,"highpass",m?5500:8e3,4200,o?h%2?.045:.08:.03)}if((l?h===0:o?h%2===0:h===0||h===8||h===12)&&a){let m=l?s*10:o?s*1.5:s*5,_=o?.11:.06;t(n,.012,"highpass",3e3,1200,.05),e(n,m,"sawtooth",f[0],f[0]*.985,_,a),l||e(n,m,"sawtooth",f[1]*1.005,f[1],_*.55,a)}if(h===0||o&&!l&&(h===8||h===11)){let m=o&&h!==0,_=m?f[2]*1.5:f[2]*1.04,b=f[2];e(n,m?s*4:s*(o?7:12),"sine",_,b,o?.42:.26)}}duck(e){this.ctx&&(this._duckUntil=this.ctx.currentTime+e)}lineFor(e,t,n){let s=["Wave one. The yard is waking.","Wave two. They heard the metal.","Wave three. Do not blink.","Wave four. The fence is tired.","Wave five. They smell you."],r=["The yard remembers.","More of them. Always more.","Keep the lights on."],o={fuel:["The cans are bleeding. Bring them in.","Fuel the generator. They hate the light."],bus:["Board the bus. It still knows the road.","Four windows, then the barn."],carb:["Something in the back lot is missing a heart.","Find the carburetor. It is still warm."],radio:["Hold the signal. They hunt the quiet.","Stay on the mast."],parts:["The side yard wants its pieces back.","Scrap. Three pieces. Do not linger."],clear:["Lot D is full of them. Empty it.","Clear the barn. Leave none standing."]},l={fuel:"The generator drinks. They smelled it.",bus:"The bus is boarded. They know.",carb:"The heart is back in the engine.",radio:"The signal held. Something answered.",parts:"The yard has its pieces.",clear:"Lot D is quiet. For now."};if(e==="wave")return n>=1&&n<=5?s[n-1]:r[(n||0)%r.length];if(e==="done")return l[t]||"The yard remembers.";let c=o[t]||r;return c[(n||0)%c.length]}announce(e){e&&(this._aq=this._aq||[],this._aq.push(String(e)),this._ab||this._drainAnn())}_drainAnn(){let e=(this._aq||[]).shift();if(!e){this._ab=!1;return}this._ab=!0;let t=Math.min(3.4,.6+e.length*.04);if(this.duck(t+.2),this.ctx&&!this.muted&&this.ctx.state==="running"&&this.growl(t),!this.muted&&typeof speechSynthesis<"u")try{let n=new SpeechSynthesisUtterance(e);n.rate=.76,n.pitch=.42,n.volume=.8,speechSynthesis.cancel(),speechSynthesis.speak(n)}catch{}setTimeout(()=>this._drainAnn(),t*1e3+160)}growl(e){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,.55),s=this.ctx.createWaveShaper(),r=new Float32Array(64);for(let l=0;l<64;l++){let c=l/63*2-1;r[l]=Math.tanh(c*4)}s.curve=r;let o=this.ctx.createBiquadFilter();o.type="bandpass",o.Q.value=6,o.frequency.setValueAtTime(180,t),o.frequency.linearRampToValueAtTime(420,t+e*.45),o.frequency.linearRampToValueAtTime(140,t+e),this.tone(t,e,"sawtooth",70,48,.22,s),s.connect(o),o.connect(n),this.nz(t,e*.8,"bandpass",500,220,.08,n,3)}async renderSample(e=8){let n=new OfflineAudioContext(1,Math.floor(22050*e),22050),s=n.createGain();s.gain.value=.85,s.connect(n.destination);let r=n.createBiquadFilter();r.type="lowpass",r.frequency.value=3400,r.connect(s);let o=n.createWaveShaper();o.curve=this._distort(14);let l=n.createBiquadFilter();l.type="lowpass",l.frequency.value=2400,o.connect(l),l.connect(r);let c=n.createGain();c.gain.value=.2,c.connect(o);let a=22050*2,h=n.createBuffer(1,a,22050),d=h.getChannelData(0);for(let M=0;M<a;M++)d[M]=Math.random()*2-1;let u=(M,E,D,k,L,C,N=r)=>{let R=n.createOscillator();R.type=D,R.frequency.setValueAtTime(Math.max(20,k),M),R.frequency.exponentialRampToValueAtTime(Math.max(20,L),M+Math.max(.02,E));let O=n.createGain();O.gain.setValueAtTime(1e-4,M),O.gain.linearRampToValueAtTime(C,M+.006),O.gain.exponentialRampToValueAtTime(8e-4,M+E),R.connect(O),O.connect(N),R.start(M),R.stop(M+E+.03)},f=(M,E,D,k,L,C)=>{let N=n.createBufferSource();N.buffer=h;let R=n.createBiquadFilter();R.type=D,R.frequency.setValueAtTime(k,M),R.frequency.exponentialRampToValueAtTime(Math.max(40,L),M+E);let O=n.createGain();O.gain.setValueAtTime(C,M),O.gain.exponentialRampToValueAtTime(8e-4,M+E),N.connect(R),R.connect(O),O.connect(r),N.start(M),N.stop(M+E+.02)},p=e*.62,x=.05,g=0;for(;x<e-.05;){let M=x<p,E=60/(M?146:96)/4;this._riffStep(u,f,x,E,g++,M,!1,c),x+=E}let m=await n.startRendering(),_=m.getChannelData(0),b=_.length,y=new ArrayBuffer(44+b*2),w=new DataView(y),T=(M,E)=>{for(let D=0;D<E.length;D++)w.setUint8(M+D,E.charCodeAt(D))};T(0,"RIFF"),w.setUint32(4,36+b*2,!0),T(8,"WAVE"),T(12,"fmt "),w.setUint32(16,16,!0),w.setUint16(20,1,!0),w.setUint16(22,1,!0),w.setUint32(24,22050,!0),w.setUint32(28,22050*2,!0),w.setUint16(32,2,!0),w.setUint16(34,16,!0),T(36,"data"),w.setUint32(40,b*2,!0);for(let M=0;M<b;M++){let E=Math.max(-1,Math.min(1,_[M]));w.setInt16(44+M*2,E<0?E*32768:E*32767,!0)}let P="",v=new Uint8Array(y);for(let M=0;M<v.length;M++)P+=String.fromCharCode(v[M]);return btoa(P)}};var We=null,nn=null,si=null,c0=new URLSearchParams(location.search),fw=c0.has("touch")||matchMedia("(pointer:coarse)").matches&&"ontouchstart"in window||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),i0=c0.get("quality")||(()=>{try{return localStorage.getItem("vwz_q")||"auto"}catch{return"auto"}})(),cv=i0==="high"||i0==="medium"||i0==="auto"&&!fw,pw=c0.has("oldz")?Promise.resolve(null):Wp(cv).catch(i=>(console.warn("zombie kit failed, using baked pack",i),null)),mw=Vx(cv).catch(i=>(console.warn("soldier kit failed, using procedural",i),null));await Xf(["cars"]);var[od]=await Promise.all([pw,mw]);od||await Xf(["zombies"]);var tc=200,gw=4.5,xw=.38*tc,nc=.4,hv=.5,uv=20,dv=.5,vw=40,ae=i=>document.getElementById(i),oi=new URLSearchParams(location.search),hn=oi.has("touch")||matchMedia("(pointer:coarse)").matches&&"ontouchstart"in window||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);document.body.classList.toggle("touch",hn);var Re=new nd;try{Re.muted=localStorage.getItem("vwz_mute")==="1"}catch{}var Ws=ae("c"),ri=new pu({canvas:Ws,antialias:!hn,powerPreference:"high-performance",preserveDrawingBuffer:oi.has("test")});ri.toneMapping=Gr;ri.toneMappingExposure=1.05;ri.outputColorSpace=ft;ri.shadowMap.type=zr;var sn=new Rr,_w=3812412;sn.fog=new La(_w,.026);var o0=hn?76:72,Zt=new gn(o0,1,.05,700);Zt.rotation.order="YXZ";sn.add(Zt);var gs=oi.get("quality")||(()=>{try{return localStorage.getItem("vwz_q")||"auto"}catch{return"auto"}})(),Yn=gs==="high"?2:gs==="medium"?1:gs==="low"||hn?0:2,la=kg(hn?256:512),vs=ap(oi.get("map")||(()=>{try{return localStorage.getItem("vwz_map")}catch{return null}})()),pi=lp(cp(oi.get("mode")||(()=>{try{return localStorage.getItem("vwz_mode")}catch{return null}})()),1),Et=nx(sn,la,Yn,vs.id),Nt=new ed(sn,la,Yn),Hs=new ql(la,260,{R:20,y0:.3,y1:6,size:.07,alpha:.22});sn.add(Hs.points);var fr=new ql(la,46,{R:55,y0:.4,y1:2.2,size:5.5,alpha:.045,col:[.55,.5,.62],additive:!1,speed:.7});sn.add(fr.points);var Pt=new Lu(sn,Et,Yn),Vs=tx({scene:sn,world:Et,fx:Nt,zombies:Pt,sfx:Re,blood:(i,e,t)=>io.blood(i,e,t),get P(){return I},onKill:i=>{We?.on||nn?.onKill(i)},onSelf:i=>{I.dead||(I.hp-=i,I.lastHit=j.time,I.hp<=0&&pd())}});od?(Xp(Pt,od),window.__hd={kit:od.hi?"hi":"lo"}):(window.__hd=cx(Pt),gx(Pt));Pt.cam=Zt;var sv,yw=i=>(sv||(sv=tv(Et,Pt,I)))(i),ic=new Rr,oa=new td(ri,sn,Zt,ic),io=Qx({renderer:ri,scene:sn,world:Et,viewScene:ic});Pt.onBlood=io.blood;var fv=!1;function pv(i){i>0&&Pt.kit&&!Pt.kit.hi&&!Pt._kitLoading&&(Pt._kitLoading=!0,Wp(!0).then(e=>{Xp(Pt,e),window.__hd={kit:"hi"}}).catch(e=>console.warn(e)))}{let i=new Bs(ri),e=new Rr,t=new xe(Et.sky.geometry,Et.sky.material.clone());t.scale.setScalar(.12),e.add(t);let n=i.fromScene(e,0,.1,100);sn.environment=n.texture,sn.environmentIntensity=.45,ic.environment=n.texture,ic.environmentIntensity=.9,i.dispose()}var Yi=new Br(14674687,40,55,.46,.75,1.25);Yi.position.set(.16,-.1,-.1);Yi.target.position.set(.16,-.1,-10);Zt.add(Yi,Yi.target);Yi.shadow.mapSize.set(1024,1024);Yi.shadow.camera.near=.3;Yi.shadow.camera.far=40;Yi.shadow.bias=-6e-4;Yi.shadow.normalBias=.03;var dr=new ss(16758886,0,20,2);Zt.add(dr);dr.position.set(.15,-.05,-3.2);var ji=new xe(new Is(3.4,14,28,1,!0),new bt({transparent:!0,depthWrite:!1,blending:ln,side:Ot,uniforms:{c:{value:new ge(.75,.85,1)},k:{value:.05}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(vy,1.2)*pow(f,2.)*k); }"}));ji.geometry.translate(0,-7,0);ji.geometry.rotateX(-Math.PI/2);ji.position.set(.16,-.1,-.2);ji.userData.noAO=!0;ji.renderOrder=6;Zt.add(ji);var pr=new De;pr.matrixAutoUpdate=!1;ic.add(pr);var Mw=new Fr(12175615,4864556,1.5),a0=new Os(16773341,2.2),ud=new ss(16758886,0,3,2);a0.position.set(1.5,2,1);pr.add(Mw,a0,a0.target,ud);ud.position.set(.15,-.05,-.9);var Jl={},xs=new $n(new Hn({map:la.glow,color:new ge(6,4,1.6),blending:ln,depthWrite:!1,transparent:!0,fog:!1}));xs.scale.setScalar(.3);xs.visible=!1;xs.userData.noAO=!0;function bw(i){i.querySelectorAll("[data-w]").forEach(e=>{e.style.width=e.dataset.w+"%"})}function Sw(i){if(!Jl[i]){let e=Ll(i);e.visible=!1,pr.add(e),Jl[i]=e}return Jl[i]}var I={x:0,z:12,yaw:0,pitch:0,vx:0,vz:0,hp:tc,maxHp:tc,lastHit:-99,pts:500,kills:0,heads:0,bob:0,rP:0,rY:0,shake:0,dmg:0,flashlight:!0,slots:[],cur:0,fireCd:0,reloadT:0,reloadTot:0,switchT:0,kick:0,mv:0,sprint:!1,heat:0,dead:!1,deadT:0,sx:0,sy:0,nades:1},j={state:"menu",time:0,runTime:0,round:0,toSpawn:0,spawnT:0,interT:0,phase:"wait",drops:0,lastDrop:-99,kills:0,double:0,powers:[],ups:[],repairT:0,healBeat:0,lastMed:-99,orbit:0,menuSpawn:0,flashT:0,muzzleT:0,nadeCd:0},mt={f:0,s:0,l:0,r:0,fire:!1,reload:!1,interact:!1,interactEdge:!1,sprint:!1},cd=i=>({id:i,mag:jt[i].mag,reserve:jt[i].reserve}),mr=()=>I.slots[I.cur];function dd(i){Yn=i;let e=window.devicePixelRatio||1,t=i===2?Math.min(e,1.75):i===1?Math.min(e,1.25):Qt(e*.7,.6,1);ri.setPixelRatio(t),oa.pr=t,ri.shadowMap.enabled=i>0,ri.shadowMap.needsUpdate=!0,oa.build(["direct","bloom","full"][i]),rc(),Et.setTier(i),Pt.setTier(i),io.setTier(i),fv&&(io.load(i),pv(i)),Pt.max=vs.cap[i>0?1:0],Nt.tier=i,Hs.points.visible=i>0,fr.points.visible=!0,fr.o.alpha=i===0?.03:.045,ji.visible=i>0&&I.flashlight,sn.environmentIntensity=i===0?.45:.3,Yi.castShadow=i===2;for(let n of Pt.list)n.root.traverse(s=>{s.isMesh&&(s.castShadow=i>0)});sn.traverse(n=>{n.material&&!Array.isArray(n.material)&&(n.material.needsUpdate=!0)}),document.body.classList.toggle("lowq",i===0),Re.setMusicDetail?.(i===0||hn),ri.toneMappingExposure=i===0?1.15:1.05,ae("fx-damage").style.display=i===0?"":"none"}function rc(){let i=window.innerWidth,e=window.innerHeight;ri.setSize(i,e,!1),Ws.style.width=i+"px",Ws.style.height=e+"px",Zt.aspect=i/e,Zt.fov=i/e<.9?o0+14:o0,Zt.updateProjectionMatrix(),oa.setSize(i,e,ri.getPixelRatio()),Nt.setScale(e*ri.getPixelRatio(),Zt.fov),fr.ps.uniforms.uScale.value=Nt.soft.uniforms.uScale.value,Hs.ps.uniforms.uScale.value=Nt.soft.uniforms.uScale.value}window.addEventListener("resize",rc);window.visualViewport?.addEventListener("resize",rc);screen.orientation?.addEventListener?.("change",()=>setTimeout(rc,120));var Ql=document.documentElement,Ew=!!(Ql.requestFullscreen||Ql.webkitRequestFullscreen);document.body.classList.toggle("nofs",!Ew);async function mv(){try{!document.fullscreenElement&&!document.webkitFullscreenElement&&await(Ql.requestFullscreen?Ql.requestFullscreen({navigationUI:"hide"}):Ql.webkitRequestFullscreen?.())?.catch?.(()=>{})}catch{}try{await screen.orientation?.lock?.("landscape")}catch{}setTimeout(rc,150)}["btnFull","btnFull2"].forEach(i=>{let e=document.getElementById(i);e&&e.addEventListener("click",t=>{t.stopPropagation(),mv()})});var Zl=0,ad=0,ld=3;function Tw(i){if(!(j.state!=="playing"||gs!=="auto"||oi.has("noadapt"))){if(ld>0){ld-=i;return}if(Zl+=i,ad++,Zl>=2.5){let e=ad/Zl;Zl=0,ad=0,e<28&&Yn>0&&(dd(Yn-1),ld=3,yn("Graphics lowered for smoother play"))}}}var Rt={hp:-1,pts:-1,mag:-1,res:-1,name:"",prompt:"",round:-1,alt:"",lobby:!1},l0=0;function yn(i){let e=ae("toast");e.textContent=i,e.classList.add("on"),clearTimeout(l0),l0=setTimeout(()=>e.classList.remove("on"),2600)}function qi(i,e=""){let t=+(document.body.dataset.mban||0)-performance.now();if(t>0){setTimeout(()=>qi(i,e),t);return}let n=ae("banner");n.innerHTML=i+(e?`<small>${e}</small>`:""),n.classList.remove("on"),n.offsetWidth,n.classList.add("on")}function aa(i,e,t){let n=document.createElement("span");n.textContent=i,e==="heal"?n.className="g":e&&(n.className="h"),n.style.setProperty("--x",ee(-80,80)+"px"),n.style.top=ee(10,50)+"px",ae("pop").appendChild(n),setTimeout(()=>n.remove(),950)}function ww(){let i=Math.max(0,Math.round(I.hp));i!==Rt.hp&&(Rt.hp=i,ae("hpFill").style.width=100*i/I.maxHp+"%",ae("hpFill").classList.toggle("low",i<I.maxHp*nc),ae("hpNum").textContent=i);let e=u0();if(e!==Rt.med&&(Rt.med=e,ae("medCue").classList.toggle("on",e)),I.pts!==Rt.pts){if(Rt.pts>=0&&I.pts>Rt.pts){let d=ae("pts");d.classList.remove("bump"),d.offsetWidth,d.classList.add("bump")}Rt.pts=I.pts,ae("pts").textContent=I.pts.toLocaleString()}let t=mr(),n=jt[t.id];n.name!==Rt.name&&(Rt.name=n.name,ae("wName").textContent=n.name),t.mag!==Rt.mag&&(Rt.mag=t.mag,ae("ammoMag").textContent=t.mag,ae("ammoMag").classList.toggle("empty",t.mag===0)),t.reserve!==Rt.res&&(Rt.res=t.reserve,ae("ammoRes").textContent="/ "+t.reserve);let s=I.slots[1-I.cur],r=s?jt[s.id].name+"  "+s.mag+"/"+s.reserve:"";r!==Rt.alt&&(Rt.alt=r,ae("wAlt").textContent=r);let o=!!(We?.on&&j.mpPhase==="lobby");if(o!==Rt.lobby&&(Rt.lobby=o,ae("roundBox").classList.toggle("waiting",o),ae("roundBox").querySelector(".lbl").textContent=o?"":"ROUND",o?ae("roundNum").textContent="WAITING":Rt.round=-1),!o&&j.round!==Rt.round){Rt.round=j.round;let d=ae("roundNum");d.textContent=j.round||1,d.classList.remove("pulse"),d.offsetWidth,d.classList.add("pulse")}if((I.nades||0)!==Rt.nades){Rt.nades=I.nades||0;let d=ae("nadeCnt");d&&(d.textContent="BAIT "+Rt.nades)}let l=ae("reloadBar");I.reloadT>0?(l.classList.add("on"),l.firstElementChild.style.width=100*(1-I.reloadT/I.reloadTot)+"%"):l.classList.remove("on");let c=Qt(I.dmg,0,1);ae("fx-damage").style.opacity=Yn===0?Math.min(1,c+(I.hp<I.maxHp*nc?.25:0)):0;let a=ae("powers"),h="";j.double>0&&(h+=`<div class="pw pw2x glass${j.double<5?" blink":""}">2\xD7 CASH <b>${Math.ceil(j.double)}</b></div>`),a._h!==h&&(a._h=h,a.innerHTML=h)}function Gs(i,e=!0){let t=ae("prompt");i!==Rt.prompt&&(Rt.prompt=i,t.innerHTML=i,bw(t),t.classList.toggle("on",!!i))}function ca(){for(let e in Jl)Jl[e].visible=!1;let i=Sw(mr().id);i.visible=j.state==="playing"||I.dead,i.scale.setScalar(hn?.78:.9),i.add(xs),xs.position.copy(i.userData.muzzle.position).add(new U(0,0,-.04)),I.gun=i}function ra(i){i===I.cur||!I.slots[i]||I.switchT>0||(I.cur=i,I.reloadT=0,I.switchT=.32,ca(),Re.click(0,2500,.3))}function sc(i){let e=I.slots.findIndex(t=>t&&t.id===i);if(e>=0){let t=I.slots[e];t.mag=jt[i].mag,t.reserve=jt[i].reserve;return}I.slots[1]?I.slots[I.cur]=cd(i):(I.slots[1]=cd(i),I.cur=1),I.reloadT=0,I.switchT=.4,ca()}function hd(){if(We?.on&&j.mpPhase==="lobby")return;let i=mr(),e=jt[i.id];I.reloadT>0||I.switchT>0||i.mag>=e.mag||i.reserve<=0||(I.reloadTot=I.reloadT=e.perShell?e.reload*(e.mag-i.mag)+.4:e.reload,I.shellT=e.reload,We?.on&&We.send({t:"reload",w:i.id}),Re.reload(e.perShell?"pistol":i.id))}function Aw(){let i=mr(),e=jt[i.id];if(We?.on){I.reloadT=0,e.perShell&&Re.pump();return}let t=Math.min(e.mag-i.mag,i.reserve);i.mag+=t,i.reserve-=t,I.reloadT=0,e.perShell&&Re.pump()}var id=new U,Yl=new U,jl=new U,sd=new U,rd=new U,rv=new U,s0=new U;function Rw(i){let e=I.yaw+I.rY,t=I.pitch+I.rP;return i.set(-Math.sin(e)*Math.cos(t),Math.sin(t),-Math.cos(e)*Math.cos(t))}function h0(){return 1.7-(I.dead?Math.min(1.1,I.deadT*1.6):0)+Math.sin(I.bob*2)*.035*I.mv}function gv(){if(We?.on&&j.mpPhase==="lobby")return;let i=mr(),e=jt[i.id];if(i.mag<=0){Re.empty(),I.fireCd=.25,hd();return}i.mag--,I.fireCd=60/e.rpm,I.kick=Math.min(1.6,I.kick+1),I.heat=Math.min(1,I.heat+.12),Re.shot(e.snd),Rw(Yl),id.set(I.x,h0(),I.z),jl.set(Math.cos(I.yaw),0,-Math.sin(I.yaw)),sd.crossVectors(jl,Yl).normalize(),jl.crossVectors(Yl,sd).normalize();let t=e.spread*(1+I.mv*.9+I.heat*.8),n=Yl.clone();Zt.updateMatrixWorld(!0);let s=I.gun.userData.muzzle;if(e.akimbo&&I.gun.userData.muzzles){i.side=i.side?0:1,s=I.gun.userData.muzzles[i.side],I.gun.userData.slideSide=i.side;let c=s.parent;I.gun.userData.flash&&c&&I.gun.userData.flash.position.set(c.position.x+s.position.x,c.position.y+s.position.y,c.position.z+s.position.z)}s.getWorldPosition(rd),I.gun.userData.eject.getWorldPosition(rv);let r=new Map,o=0,l=[];for(let c=0;c<e.pellets;c++){let a=ee(cn),h=Math.sqrt(Math.random())*t,d=Yl.clone().copy(n).addScaledVector(jl,Math.cos(a)*h).addScaledVector(sd,Math.sin(a)*h).normalize();l.push([+d.x.toFixed(4),+d.y.toFixed(4),+d.z.toFixed(4)]);let u=Pt.rayHit(id,d,e.range),f=Et.ray(id,d,e.range),p=e.range,x=null,g=null;u&&(!f||u.t<f.t)?(p=u.t,g=u):f&&(p=f.t,x=f.n);let m=new U().copy(d).multiplyScalar(p).add(id);if((c<(e.pellets>1?3:1)||Nt.tier>0)&&Nt.tracer(rd,m,e.pellets>1?.006:.011),g){let _=r.get(g.z)||{dmg:0,head:!1,p:m,n:d.clone().negate()},b=e.pellets>1?Qt(1.25-g.t/16,.25,1):1;_.dmg+=e.dmg*(g.head?e.head:1)*b,_.head=_.head||g.head,_.p=m,r.set(g.z,_)}else x&&o<4&&(o++,s0.set(x.x,x.y,x.z),Nt.sparks(m,s0,7),Nt.dust(m,s0,2))}dr.intensity=55,ud.intensity=6,j.muzzleT=.06,xs.visible=!0;{let c=I.gun.userData.flash;c&&(c.visible=!0,c.rotation.z=ee(cn),c.scale.setScalar(ee(.8,1.3)*(e.id==="shotgun"?1.5:1))),I.gun.userData.slideT=1}if(xs.material.rotation=ee(cn),xs.scale.setScalar(ee(.25,.42)*(e.id==="shotgun"?1.4:1)),Nt.flash(rd,n),Nt.smoke(rd,n,1),Nt.maxCas){let c=new U().copy(jl).multiplyScalar(ee(1.2,2.4)).addScaledVector(sd,ee(1.2,2.2)).addScaledVector(n,ee(-.3,.5));Nt.casing(rv,c)}if(I.rP+=e.kick*ee(.85,1.15),I.rY+=ee(-1,1)*e.kick*.45,I.shake=Math.min(1,I.shake+e.shake*.5),e.perShell===!0&&i.mag>0&&setTimeout(()=>Re.pump(),260),We?.on){We.send({t:"shot",w:i.id,dirs:l});for(let[c,a]of r)Nt.blood(a.p,a.n,a.head?14:8),Re.zhit(ec(c.pos),a.head)}else for(let[c,a]of r){let h=Pt.damage(c,a.dmg,a.head,a.p,a.n);if(!h)continue;let d=j.double>0?2:1;Re.zhit(ec(c.pos),a.head),Nt.blood(a.p,a.n,a.head?14:8),Nt.sparks(a.p,a.n,2);let u=10*d,f=ae("hitm");f.classList.remove("on","kill"),f.offsetWidth,f.classList.add("on"),Re.tick(!1),h.killed&&(u=(a.head?100:c.value)*d,I.kills++,j.kills++,a.head&&I.heads++,f.classList.add("kill"),Re.tick(!0),Re.zdie(ec(c.pos),.5),Nt.blood(a.p,a.n,26,1.4),Nt.dust(new U(c.pos.x,.3,c.pos.z),{x:0,y:1,z:0},5),I.shake=Math.min(1,I.shake+.1),Cw(c),xv(c),nn.onKill(c)),setTimeout(()=>f.classList.remove("on"),h.killed?280:190),I.pts+=u,aa("+"+u,a.head&&h.killed)}i.mag===0&&!I.reloadT&&setTimeout(()=>j.state==="playing"&&hd(),220)}var ec=i=>{let e=i.x-I.x,t=i.z-I.z,n=Math.hypot(e,t)||1;return(e*Math.cos(I.yaw)-t*Math.sin(I.yaw))/n};function Cw(i){j.round<2||j.drops>=pi.maxDrops||j.time-j.lastDrop<18||Math.random()<.05*pi.drop&&oc(In(["ammo","double","nuke"]),i.pos.x,i.pos.z)}var Xi={ammo:{name:"FULL MAGS",col:[.3,.7,2.4],sub:"All ammo refilled",hex:"#6bb8ff"},double:{name:"2\xD7 CASH",col:[3,2.2,.4],sub:"Double points for 30s",hex:"#ffd36b"},nuke:{name:"KABOOM",col:[3,.4,.4],sub:"Every zombie goes down",hex:"#ff6b6b"},health:{name:"MED KIT",col:[.25,2.6,.9],sub:"+50% health",hex:"#4dffb0"}};function oc(i,e,t){let n=Xi[i].col,s=new De;s.position.set(e,1,t);let r=i==="health",o;if(r){let u=new st({color:new ge(...n),toneMapped:!1});o=new De,o.add(new xe(new ct(.46,.14,.14),u),new xe(new ct(.14,.46,.14),u),new xe(new ct(.14,.14,.46),u)),o.traverse(f=>f.userData.noAO=!0)}else o=new xe(new Za(.28,0),new st({color:new ge(...n),toneMapped:!1}));o.userData.noAO=!0;let l=document.createElement("canvas");l.width=256,l.height=64;let c=l.getContext("2d");c.font="900 40px system-ui, sans-serif",c.textAlign="center",c.fillStyle=Xi[i].hex,c.shadowColor=Xi[i].hex,c.shadowBlur=14,c.fillText(Xi[i].name,128,44);let a=new $n(new Hn({map:new Ht(l),transparent:!0,depthWrite:!1,fog:!1}));a.scale.set(1.5,.375,1),a.position.y=.6,a.userData.noAO=!0;let h=new $n(new Hn({map:la.glow,color:new ge(n[0]*.55,n[1]*.55,n[2]*.55),blending:ln,depthWrite:!1,transparent:!0}));h.scale.setScalar(1.25),h.userData.noAO=!0;let d=new xe(new It(.12,.12,12,8,1,!0),new st({color:new ge(n[0]*.3,n[1]*.3,n[2]*.3),transparent:!0,opacity:.35,blending:ln,depthWrite:!1}));d.position.y=5,d.userData.noAO=!0,s.add(o,a,h,d),sn.add(s),j.ups.push({type:i,g:s,core:o,label:a,t:r?vw:28,x:e,z:t}),r?j.lastMed=j.time:(j.drops++,j.lastDrop=j.time),Re.spawnPower()}function u0(){return j.state==="playing"&&!I.dead&&I.hp<=I.maxHp*hv&&j.time-j.lastMed>=uv&&!j.ups.some(i=>i.type==="health")}function xv(i){u0()&&oc("health",i.pos.x,i.pos.z)}function vv(i){if(i.type==="health"){let t=I.maxHp*dv,n=I.hp;I.hp=Math.min(I.maxHp,I.hp+t),I.lastHit=Math.max(I.lastHit,j.time-1),Re.medkit(),qi(Xi.health.name,"+"+Math.round(I.hp-n)+" health"),aa("+"+Math.round(I.hp-n)+" HP","heal"),sn.remove(i.g),Nt.glowBurst(new U(i.x,1,i.z),...Xi.health.col.map(s=>s*.7),24,4);return}Re.power(i.type);let e=0;if(qi(Xi[i.type].name,Xi[i.type].sub),i.type==="ammo")for(let t of I.slots)t&&(t.mag=jt[t.id].mag,t.reserve=jt[t.id].reserve);else if(i.type==="double")j.double=30;else if(i.type==="nuke"){let t=Pt.killAll();for(let n of t)We?.on||nn.onKill(n),Nt.blood(new U(n.pos.x,1.2,n.pos.z),{x:0,y:1,z:0},22,1.4),Nt.glowBurst(new U(n.pos.x,1.2,n.pos.z),3,1.5,.4,10,5);I.pts+=400*(j.double>0?2:1),Re.boom(),I.shake=1,ae("fx-flash").style.transition="none",ae("fx-flash").style.opacity=.85,requestAnimationFrame(()=>{ae("fx-flash").style.transition="opacity 1.2s",ae("fx-flash").style.opacity=0}),j.kills+=t.length,I.kills+=t.length}sn.remove(i.g),Nt.glowBurst(new U(i.x,1,i.z),...Xi[i.type].col.map(t=>t*.7),24,4)}nn=ex({world:Et,P:I,G:j,sfx:Re,banner:qi,toast:yn,popText:aa,spawnPower:oc,weapons:jt,phase:()=>We?.on?j.mpPhase:j.phase});var no={};function Pw(i){if(!no[i]){let e=Ll(i,!1);e.scale.setScalar(1.6),e.rotation.y=0,e.visible=!1,Et.crate.hold.add(e),no[i]=e}return no[i]}function Iw(){let i=Et.crate;if(i.state==="idle"){if(I.pts<i.price){Re.deny(),yn("Not enough points");return}I.pts-=i.price,Re.cash(),Re.open(),Re.jingle(4),i.state="roll",i.t=0,i.pick=In(Il.filter(e=>!I.slots.some(t=>t&&t.id===e)).concat(["smg"].filter(()=>!1))),i.pick=i.pick||In(Il)}else i.state==="ready"&&(sc(i.weapon),Re.cash(),Re.click(0,2e3,.5),qi(jt[i.weapon].name.toUpperCase()),fd())}function fd(){let i=Et.crate;i.state="idle",i.t=0;for(let e in no)no[e].visible=!1;i.model=null}function Lw(i){let e=Et.crate,t=e.state==="idle"?0:-1.25;if(e.lid.rotation.x+=(t-e.lid.rotation.x)*Math.min(1,i*6),e.state==="roll"){e.t+=i;let n=Math.floor(e.t/.14)%Il.length,s=e.t>3.6?e.pick:Il[n];for(let o in no)no[o].visible=!1;let r=Pw(s);r.visible=!0,e.model=r,e.t>3.6&&(e.state="ready",e.weapon=e.pick,e.t=0,Re.power("ammo"))}else e.state==="ready"&&(e.t+=i,e.t>9&&(Re.open(),fd(),yn("The toolbox slammed shut")))}function Dw(i){return Math.max(3,Math.round((6+i*2.3+i*i*.12)*pi.count))}function ov(i){j.round=i,j.toSpawn=Dw(i),j.brutes=i>=5?i%5===0?Math.min(4,1+(i/5|0)):i>=7?1:0:0,j.brutes=Math.round(j.brutes*pi.brute),j.phase="round",j.spawnT=1.5,j.drops=0,(I.nades||0)<1&&(I.nades=1);let e=Re.lineFor("wave","",i);Re.round(i),Re.setMusicPhase("hot"),qi("ROUND "+i,e),We?.on||Re.announce(e);let t=ae("roundNum");t.classList.remove("pulse"),t.offsetWidth,t.classList.add("pulse")}function Nw(){let i=Qo(Et.doors);return Et.windows.filter(e=>i.has(e.area))}function Uw(i){if(j.phase!=="round"||j.toSpawn<=0||(j.spawnT-=i,j.spawnT>0))return;if(Pt.alive>=Pt.max){j.spawnT=.3;return}let e=Nw();e.sort((r,o)=>(r.c.x-I.x)**2+(r.c.z-I.z)**2-((o.c.x-I.x)**2+(o.c.z-I.z)**2));let t=Math.random()<.6?e[Math.min(e.length-1,Math.random()*2|0)]:In(e),n=j.brutes>0&&j.toSpawn<=j.brutes,s=Pt.spawn(t,j.round,n);s&&(j.toSpawn--,s.hp=s.maxHp=s.maxHp*pi.hp,s.speed=Math.min(6.5,s.speed*pi.speed),s.dmg=Math.round(s.dmg*pi.dmg)),j.spawnT=Math.max(.3,2-j.round*.13)*ee(.7,1.2)*pi.spawnGap}function _v(){let i=null,e=(s,r,o)=>{r<o&&(!i||r<i.d)&&(i={...s,d:r})};for(let s of Et.windows)s.count<6&&e({type:"win",w:s},Math.hypot(I.x-s.in.x,I.z-s.in.z),2.1);for(let s of Et.buys)e({type:"buy",b:s},Math.hypot(I.x-s.pos.x,I.z-s.pos.z),1.9),s.back&&Math.hypot(I.x-s.pos.x,I.z-s.pos.z)<2.15&&e({type:"buy",b:s},Math.hypot(I.x-s.back.x,I.z-s.back.z),1.9);for(let s of Et.doors)if(!s.open){let r=s.stand?Object.values(s.stand):[s.pos];for(let o of r)e({type:"door",door:s},Math.hypot(I.x-o.x,I.z-o.z),2.4)}let t=nn&&nn.focus(I.x,I.z);t&&e(t,t.d,t.d+.01);let n=Et.crate;return(n.state==="idle"||n.state==="ready")&&e({type:"crate"},Math.hypot(I.x-n.x,I.z-n.z),2.2),i}function yv(i,e,t){if(We?.on)return Xw(i,e,t);if(i.type==="win"){e&&(j.repairT+=t,j.repairT>.5&&(j.repairT=0,Et.addPlank(i.w)&&(Re.repair(),I.pts+=10*(j.double>0?2:1),aa("+10"))));return}if(i.type==="job"&&i.hold){e&&(j.repairT+=t,j.repairT>.5&&(j.repairT=0,nn.use()));return}if(mt.interactEdge)if(i.type==="buy"){if(i.b.id==="nade"){if((I.nades||0)>=2){yn("Bait pouch is full");return}if(I.pts<i.b.price){Re.deny(),yn("Not enough points");return}I.pts-=i.b.price,I.nades++,Re.cash();return}let n=I.slots.find(r=>r&&r.id===i.b.id),s=n?Math.floor(i.b.price/2):i.b.price;if(n&&n.mag===jt[n.id].mag&&n.reserve===jt[n.id].reserve){yn("Ammo already full");return}if(I.pts<s){Re.deny(),yn("Not enough points");return}I.pts-=s,Re.cash(),sc(i.b.id)}else if(i.type==="door"){let n=i.door,s=nn.price(n);if(I.pts<s){Re.deny(),yn("Not enough points");return}I.pts-=s,Re.cash(),Re.door(),n.open=!0,qi(n.id==="AB"?"GATE OPEN":n.name.toUpperCase(),n.blurb)}else i.type==="job"?nn.use():i.type==="crate"&&Iw()}function Ow(i){if(!i)return Gs("");let e="<kbd>E</kbd>",t=n=>`<span class="cost${I.pts<n?" poor":""}">${n}</span>`;if(i.type==="win")Gs(`${e}Hold to repair barricade<span class="prog"><i data-w="${Math.round(i.w.count/6*100)}"></i></span>`);else if(i.type==="buy"){let n=I.slots.find(s=>s&&s.id===i.b.id);Gs(n?`${e}Refill ${i.b.name}${t(Math.floor(i.b.price/2))}`:`${e}Buy ${i.b.name}${t(i.b.price)}`)}else if(i.type==="door"){let n=nn.price(i.door);Gs(`${e}${i.door.id==="AB"?"Open the gate":"Open "+i.door.name}${t(n)}`)}else i.type==="job"?Gs(`${e}${i.hold?"Hold to board the window":i.name}`):i.type==="crate"&&Gs(Et.crate.state==="ready"?`${e}Take ${jt[Et.crate.weapon].name}`:`${e}Lucky Toolbox${t(Et.crate.price)}`)}function Fw(i){let e=mt.f,t=mt.s,n=0,s=0;if(e||t){let a=Math.sin(I.yaw),h=Math.cos(I.yaw);n=-a*e+h*t,s=-h*e-a*t;let d=Math.hypot(n,s)||1;n/=d,s/=d}let r=Math.min(1,Math.hypot(e,t));I.sprint=(mt.sprint||r>.92&&hn)&&e>.3&&I.reloadT<=0;let o=(I.sprint?6.6:4.5)*(I.switchT>0?.9:1)*r,l=Math.min(1,i*10);I.vx+=(n*o-I.vx)*l,I.vz+=(s*o-I.vz)*l,I.x+=I.vx*i,I.z+=I.vz*i,Et.resolve(I,.42);let c=Math.hypot(I.vx,I.vz);I.mv=Qt(c/4.5,0,1.4),I.bob+=c*i*1.7}function Bw(i){I.fireCd>0&&(I.fireCd-=i),I.switchT>0&&(I.switchT-=i),I.heat=Math.max(0,I.heat-i*1.4),I.kick=Math.max(0,I.kick-i*8);let e=mr(),t=jt[e.id];if(I.reloadT>0){let n=I.reloadT;I.reloadT-=i,t.perShell?(I.shellT-=i,!We?.on&&I.shellT<=0&&e.mag<t.mag&&e.reserve>0?(e.mag++,e.reserve--,I.shellT=t.reload,Re.shell()):We?.on&&I.shellT<=0&&(I.shellT=t.reload,Re.shell()),mt.fire&&e.mag>0?I.reloadT=0:(e.mag>=t.mag||e.reserve<=0)&&(I.reloadT=0,Re.pump())):I.reloadT<=0&&Aw()}mt.fire&&I.fireCd<=0&&I.switchT<=0&&(I.reloadT<=0||t.perShell)&&!I.sprintBlock&&((t.auto||!I.fired)&&gv(),I.fired=!0),mt.fire||(I.fired=!1),mt.reload&&(mt.reload=!1,hd())}function av(i,e){I.rP*=Math.exp(-i*9),I.rY*=Math.exp(-i*9),I.shake=Math.max(0,I.shake-i*2.2),I.dmg=Math.max(0,I.dmg-i*.8);let t=I.shake*I.shake,n=(Math.sin(e*61)+Math.sin(e*37.3))*.5,s=(Math.sin(e*53.1)+Math.cos(e*41))*.5,r=I.dead?Math.min(1,I.deadT*1.4):0,o=Qt(I.vx*Math.cos(I.yaw)-I.vz*Math.sin(I.yaw),-6,6);Zt.position.set(I.x+n*t*.06,h0()+s*t*.05,I.z),Zt.rotation.set(Qt(I.pitch+I.rP+s*t*.035-r*.4,-1.5,1.5),I.yaw+I.rY+n*t*.035,-o*.0045+n*t*.02+r*.9),Zt.updateMatrixWorld(!0),pr.matrix.copy(Zt.matrixWorld);let l=I.gun;if(!l)return;let c=l.userData.base,a=I.kick,h=a*.05,d=0,u=0,f=0,p=0,x=a*.04;if(f+=Math.cos(I.bob)*.006*I.mv,p+=Math.abs(Math.sin(I.bob))*.008*I.mv*-1,f+=-Qt(I.sx,-1,1)*.02,p+=Qt(I.sy,-1,1)*.02,I.sprint&&(d+=.45,h-=.25,p-=.05,f-=.03),I.reloadT>0&&!jt[mr().id].perShell){let b=1-I.reloadT/I.reloadTot,y=Math.sin(b*Math.PI);h-=y*.5,p-=y*.12,u+=y*.35,f-=y*.04}else if(I.reloadT>0){let b=Math.abs(Math.sin(e*6))*.5+.3;h-=.25,p-=.05,d+=.1*b}if(I.switchT>0){let b=I.switchT/.32;p-=Math.sin(Qt(b,0,1)*Math.PI/2)*.35,h-=b*.5}let g=1-Math.exp(-i*18);if(l.userData.rx=ds(l.userData.rx||0,h,g),l.userData.ry=ds(l.userData.ry||0,d,g),l.userData.rz=ds(l.userData.rz||0,u,g),l.rotation.set(l.userData.rx,l.userData.ry,l.userData.rz),l.userData.slideT>0){l.userData.slideT=Math.max(0,l.userData.slideT-i*14);let b=Math.sin(l.userData.slideT*Math.PI);if(l.userData.slides){let y=l.userData.slideSide||0;l.userData.slides[y]&&(l.userData.slides[y].position.z=b*.028)}else l.userData.slide&&(l.userData.slide.position.z=b*.028);l.userData.pump&&(l.userData.pump.position.z=0)}l.position.set(c.x+f,c.y+p,c.z+x),I.sx*=Math.exp(-i*8),I.sy*=Math.exp(-i*8),j.muzzleT>0&&(j.muzzleT-=i,j.muzzleT<=0&&(xs.visible=!1,I.gun?.userData.flash&&(I.gun.userData.flash.visible=!1))),dr.intensity*=Math.exp(-i*40),dr.intensity<.5&&(dr.intensity=0),ud.intensity=dr.intensity>0?dr.intensity/9:0;let m=ae("cross"),_=6+jt[mr().id].spread*650*(1+I.mv*.9+I.heat*.8)*.5;m._sp!==Math.round(_)&&(m._sp=Math.round(_),m.style.setProperty("--s",m._sp+"px"),m.children[0].style.left=-(m._sp+9)+"px",m.children[0].style.top="-1px",m.children[1].style.left=m._sp+"px",m.children[1].style.top="-1px",m.children[2].style.top=-(m._sp+9)+"px",m.children[2].style.left="-1px",m.children[3].style.top=m._sp+"px",m.children[3].style.left="-1px")}function kw(i){if(I.dead||j.state!=="playing")return;I.hp-=i.dmg,I.lastHit=j.time,I.dmg=Math.max(I.dmg,.65+.35*(1-Math.max(0,I.hp)/I.maxHp)),I.shake=1,Re.hurt();let e=i.pos.x-I.x,t=i.pos.z-I.z,n=Math.atan2(e,-t)- -I.yaw,s=ae("fx-dir");s.style.display="block",s.firstElementChild.style.transform=`rotate(${n*180/Math.PI}deg)`,s.style.opacity=1,setTimeout(()=>s.style.opacity=0,500),setTimeout(()=>s.style.display="none",900),I.hp<=0&&pd()}function pd(){I.hp=0,I.dead=!0,I.deadT=0,!We?.on&&nn&&nn.drop(),Re.over(),mt.fire=!1,ae("hud").classList.add("hud-dead"),Gs(""),document.pointerLockElement&&document.exitPointerLock?.()}function d0(){try{return JSON.parse(localStorage.getItem("vwz_scores")||"[]")}catch{return[]}}function zw(i){let e=d0();e.push(i),e.sort((t,n)=>n.round-t.round||n.pts-t.pts);try{localStorage.setItem("vwz_scores",JSON.stringify(e.slice(0,5)))}catch{}return e.slice(0,5)}var Kl=null;function f0(){us.top().then(i=>{us.render(ae("globalList"),i,localStorage.getItem("vwfest_nick")),us.render(ae("oGlobal"),i,localStorage.getItem("vwfest_nick"))})}function Hw(){Kl={round:Math.max(1,j.round),pts:I.pts,kills:I.kills},ae("nick").value=localStorage.getItem("vwfest_nick")||"",ae("postMsg").textContent="",ae("postMsg").className="postMsg",ae("fPost").classList.toggle("hidden",!us.hasToken()),ae("bPost").disabled=!1,us.hasToken()||(ae("postMsg").textContent="Leaderboard offline: score saved on this device."),f0()}ae("fPost").onsubmit=i=>{if(i.preventDefault(),!Kl)return;let e=ae("nick").value.trim();ae("bPost").disabled=!0;try{localStorage.setItem("vwfest_nick",e)}catch{}us.submit(e,Kl.round,Kl.pts,Kl.kills).then(t=>{t.ok?(ae("fPost").classList.add("hidden"),ae("postMsg").className="postMsg ok",ae("postMsg").textContent="Posted! You are #"+t.rank+" on the survivor board.",us.render(ae("oGlobal"),t.top,e),us.render(ae("globalList"),t.top,e)):(ae("postMsg").textContent=t.error||"Could not post.",ae("bPost").disabled=!1)})};function p0(i,e){i.innerHTML=e.length?e.map((t,n)=>`<li>Round <b>${t.round}</b> \xB7 ${t.kills} kills \xB7 ${t.pts.toLocaleString()} pts</li>`).join(""):'<li class="muted">No runs yet \u2014 be the first.</li>'}function Gw(){Object.assign(I,{x:vs.spawn.x,z:vs.spawn.z,yaw:0,pitch:0,vx:0,vz:0,hp:tc,lastHit:-99,pts:pi.startPts,kills:0,heads:0,rP:0,rY:0,shake:0,dmg:0,cur:0,fireCd:0,reloadT:0,switchT:0,kick:0,dead:!1,deadT:0,slots:[cd("pistol"),null],nades:1}),Object.assign(j,{time:0,runTime:0,round:0,toSpawn:0,phase:"wait",interT:2.6,drops:0,double:0,kills:0,repairT:0,lastMed:-99}),Pt.reset(),Nt.reset();for(let i of j.ups)sn.remove(i.g);j.ups=[],fd(),Et.crate.lid.rotation.x=0;for(let i of Et.windows)for(;i.count<6;)Et.addPlank(i);Rt.hp=Rt.pts=Rt.mag=Rt.res=-1,Rt.name=Rt.alt="",Rt.round=-1,ae("hud").classList.remove("hud-dead"),Et.resetDoors(),nn&&nn.reset(),Vs&&Vs.reset(),ca()}function ha(){if(Re.init(),Re.musicStart(),Re.setMusicDetail(Yn===0||hn),Gw(),us.start(),j.state="playing",ca(),["menu","over","pause"].forEach(i=>ae(i).classList.add("hidden")),ae("hud").classList.remove("hidden"),ae("touch").classList.toggle("hidden",!hn),ji.visible=Yn>0&&I.flashlight,ld=3,Zl=0,ad=0,!hn&&!oi.has("test")&&j.mpPhase!=="lobby")try{Ws.requestPointerLock?.()?.catch?.(()=>{})}catch{}else hn&&j.mpPhase!=="lobby"&&mv();yn("Hold E at windows to repair \xB7 Open the gate for new guns")}function ac(){j.state!=="playing"||I.dead||(j.state="paused",ae("pause").classList.remove("hidden"),mt.fire=!1,mt.f=mt.s=0,document.pointerLockElement&&document.exitPointerLock?.(),Gs(""))}function m0(){if(j.state==="paused"&&(j.state="playing",ae("pause").classList.add("hidden"),Re.init(),!hn&&!oi.has("test")))try{Ws.requestPointerLock?.()?.catch?.(()=>{})}catch{}}function lc(){Re.musicStop(),si&&si.leave(),ae("btnVoice").classList.add("hidden"),ae("voiceList").classList.add("hidden"),We?.on&&(We.stop(),ae("mpTag").classList.add("hidden")),j.mpPhase="",j.state="menu",["pause","over","lobby"].forEach(i=>ae(i).classList.add("hidden")),ae("menu").classList.remove("hidden"),ae("hud").classList.add("hidden"),ae("touch").classList.add("hidden"),p0(ae("scoreList"),d0()),f0(),Pt.reset(),I.gun&&(I.gun.visible=!1),Gs(""),I.dead=!1,xs.visible=!1}function Mv(){Re.musicStop(),j.state="over";let i=zw({round:Math.max(1,j.round),kills:I.kills,pts:I.pts,t:Date.now()});ae("oRound").textContent=Math.max(1,j.round),ae("oKills").textContent=I.kills,ae("oHeads").textContent=I.heads,ae("oPts").textContent=I.pts.toLocaleString();let e=Math.floor(j.runTime);ae("oTime").textContent=Math.floor(e/60)+":"+String(e%60).padStart(2,"0"),ae("oMsg").textContent=j.round>=10?"Legendary run. The yard remembers.":j.round>=5?"Solid stand. They got you in the end.":"The dead took the yard. Try again.",p0(ae("oScores"),i),Hw(),ae("over").classList.remove("hidden"),ae("hud").classList.add("hidden"),ae("touch").classList.add("hidden"),I.gun&&(I.gun.visible=!1)}var r0={x:0,z:8},$l={groan:(i,e)=>Re.groan(ec(i.pos),Qt(1-e/40,.1,.8)*.8,i.brute?.6:i.runner?1.25:ee(.9,1.1),i.brute?1.4:ee(.8,1.3)),plank:(i,e)=>{Re.plank(!0),Nt.dust(new U(i.c.x+i.n.x*.3,1.4,i.c.z+i.n.z*.3),i.n,6,[.5,.4,.3])},hitPlayer:kw},Vw={groan:()=>{},plank:()=>{},hitPlayer:()=>{}};function g0(i){j.time+=i;let e=j.time;if(j.state==="menu"){j.orbit+=i*.12;let n=j.orbit,s=9.5;if(Zt.position.set(Math.sin(n)*s,2.6+Math.sin(n*.7)*.4,6+Math.cos(n)*s*.8),Zt.lookAt(0,1.8,3),Zt.rotation.z=0,j.menuSpawn-=i,j.menuSpawn<=0&&Pt.alive<5){j.menuSpawn=2.2;let r=Pt.spawn(In(Et.windows.filter(o=>o.area==="A")),2);r&&(r.state="chase",r.pos.set(ee(-14,14),0,ee(-18,-4)),r.speed=ee(.9,1.5),r.dmg=0)}r0.x=0,r0.z=6,Pt.update(i,e,r0,Et.door,Vw),Et.update(i,e,{x:Zt.position.x,z:Zt.position.z}),Nt.update(i),nn&&nn.frame(Zt),Hs.center={x:0,z:6},fr.center=Hs.center,Hs.ps.update(i),fr.ps.update(i),pr.visible=!1,ji.visible=!1;return}if(pr.visible=!0,ji.visible=Yn>0&&I.flashlight&&!I.dead,j.state==="paused")return;if(j.state==="over"){Nt.update(i);return}if(j.runTime+=i,I.dead){if(I.deadT+=i,We?.on?We.update(i,e,$l):Pt.update(i,e,I,Et.door,{...$l,hitPlayer:()=>{}}),Et.update(i,e,I),Nt.update(i),av(i,e),We?.on&&I.deadT>.8){let n=We.spectate(Zt);pr.visible=!1,ae("specTag").textContent=n?"DOWN \xB7 SPECTATING "+n:"DOWN \xB7 waiting for the round to end",ae("specTag").classList.remove("hidden")}I.deadT>2.4&&!We?.on&&Mv();return}if(Fw(i),Bw(i),!We?.on&&I.hp<I.maxHp&&e-I.lastHit>gw&&(I.hp=Math.min(I.maxHp,I.hp+xw*i)),I.hp<I.maxHp*nc&&e-j.healBeat>.85&&(j.healBeat=e,Re.heart()),We?.on)We.update(i,e,$l);else if(j.phase==="wait")j.interT-=i,j.interT<=0&&ov(1);else if(j.phase==="round"){if(Uw(i),j.toSpawn<=0&&Pt.alive<=0){let n=j.round;j.phase="inter",j.interT=pi.inter,Re.setMusicPhase("calm"),!We?.on&&nn&&nn.onWave(n)}}else j.phase==="inter"&&(j.interT-=i,j.interT<=0&&ov(j.round+1));if(j.state==="playing"){let n=j.phase==="round"?"hot":"calm";Re.musicMood!==n&&Re.setMusicPhase(n),Re.pumpMusic()}if(!We?.on)Vs.step(i),Pt.update(i,e,I,Et.door,$l),nn.update(i);else if(We.S&&We.S.snaps&&We.S.snaps.length){let n=We.S.snaps[We.S.snaps.length-1];Vs.sync(n.ng),Vs.interp(We.frameAt?.(performance.now()));let s=n.p&&n.p.find(r=>r[0]===We.S.id);s&&s.length>15&&j.nadeCd<=0&&(I.nades=s[15])}Vs.frame(),j.nadeCd>0&&(j.nadeCd-=i),Et.update(i,e,I),yw(i),nn&&nn.frame(Zt),si&&si.joined&&si.tick(),Hs.center={x:I.x,z:I.z},fr.center=Hs.center,Hs.ps.update(i),fr.ps.update(i),Nt.update(i),Lw(i),j.double>0&&(j.double-=i);for(let n=j.ups.length-1;n>=0;n--){let s=j.ups[n];s.t-=i,s.core.rotation.y+=i*2.5,s.type!=="health"&&(s.core.rotation.x+=i*1.1),s.g.position.y=1+Math.sin(e*3+n)*.15,s.g.visible=s.t>5||Math.sin(e*16)>-.2,!We?.on&&(Math.hypot(s.x-I.x,s.z-I.z)<1.5?(vv(s),j.ups.splice(n,1)):s.t<=0&&(sn.remove(s.g),j.ups.splice(n,1)))}let t=_v();Ow(t),t?yv(t,mt.interact,i):j.repairT=0,mt.interactEdge=!1,av(i,e),ww()}var lv=performance.now();function bv(i){requestAnimationFrame(bv);let e=Math.min(.25,(i-lv)/1e3);lv=i,Tw(e),g0(Math.min(e,.05)*(j.state==="menu"?.6:1));let t=j.state==="playing"&&I.hp<I.maxHp*nc?1-I.hp/(I.maxHp*nc):0;io.update(Math.min(e,.1)),oa.render(e,j.time,Qt(I.dmg,0,1),t)}function Ww(){oa.render(.016,j.time,Qt(I.dmg,0,1),0)}var fi={};function x0(){mt.f=(fi.KeyW||fi.ArrowUp?1:0)-(fi.KeyS||fi.ArrowDown?1:0),mt.s=(fi.KeyD||fi.ArrowRight?1:0)-(fi.KeyA||fi.ArrowLeft?1:0),mt.sprint=!!(fi.ShiftLeft||fi.ShiftRight)}addEventListener("keydown",i=>{i.target&&i.target.tagName==="INPUT"||i.repeat||(fi[i.code]=!0,j.state==="playing"&&!I.dead?j.mpPhase==="lobby"||(i.code==="KeyR"&&(mt.reload=!0),i.code==="KeyE"&&(mt.interact=!0,mt.interactEdge=!0),i.code==="Digit1"&&ra(0),i.code==="Digit2"&&ra(1),i.code==="KeyQ"&&ra(1-I.cur),i.code==="KeyF"&&Tv(!I.flashlight),i.code==="KeyP"&&ac(),i.code==="KeyV"&&We?.on&&si&&si.toggle(),i.code==="KeyG"&&Cv()):j.state==="paused"&&i.code==="KeyP"&&m0(),i.code==="KeyM"&&wv(),i.code==="KeyN"&&Av(),i.code==="Enter"&&(j.state==="menu"||j.state==="over")&&ha(),x0())});addEventListener("keyup",i=>{fi[i.code]=!1,i.code==="KeyE"&&(mt.interact=!1),x0()});addEventListener("blur",()=>{for(let i in fi)fi[i]=!1;x0(),mt.fire=!1,mt.interact=!1});var Sv=!1;document.addEventListener("pointerlockerror",()=>{Sv=!0});addEventListener("mousemove",i=>{j.state!=="playing"||I.dead||document.pointerLockElement!==Ws&&!Sv&&!oi.has("test")||Ev(i.movementX,i.movementY,.0022)});function Ev(i,e,t){I.yaw-=i*t,I.pitch=Qt(I.pitch-e*t,-1.45,1.45),I.sx+=i*.01,I.sy+=e*.01}Ws.addEventListener("mousedown",i=>{i.button===0&&j.state==="playing"&&(!hn&&!document.pointerLockElement&&!oi.has("test")&&Ws.requestPointerLock?.(),mt.fire=!0)});addEventListener("mouseup",i=>{i.button===0&&(mt.fire=!1)});addEventListener("wheel",i=>{j.state==="playing"&&Math.abs(i.deltaY)>4&&ra(1-I.cur)},{passive:!0});addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&j.state==="playing"&&!I.dead&&!hn&&!oi.has("test")&&j.mpPhase!=="lobby"&&ac()});document.addEventListener("visibilitychange",()=>{document.hidden&&j.mpPhase!=="lobby"&&ac()});if(hn){let i=null,e=null,t=0,n=0,s=ae("stick"),r=ae("knob"),o={x:0,y:0},l=ae("touch");l.addEventListener("touchstart",d=>{for(let u of d.changedTouches){if(d.target.closest("button"))continue;let f=s.getBoundingClientRect();i===null&&u.clientX<innerWidth*.45?(i=u.identifier,o={x:f.left+f.width/2,y:f.top+f.height/2},c(u)):e===null&&(e=u.identifier,t=u.clientX,n=u.clientY)}d.preventDefault()},{passive:!1});let c=d=>{let u=d.clientX-o.x,f=d.clientY-o.y,p=Math.hypot(u,f),x=55;p>x&&(u=u/p*x,f=f/p*x),r.style.transform=`translate(${u}px,${f}px)`,mt.s=u/x,mt.f=-f/x,Math.hypot(mt.s,mt.f)<.12&&(mt.s=mt.f=0)};l.addEventListener("touchmove",d=>{for(let u of d.changedTouches)u.identifier===i?c(u):u.identifier===e&&(j.state==="playing"&&!I.dead&&Ev(u.clientX-t,u.clientY-n,.0048),t=u.clientX,n=u.clientY);d.preventDefault()},{passive:!1});let a=d=>{for(let u of d.changedTouches)u.identifier===i?(i=null,r.style.transform="",mt.s=mt.f=0):u.identifier===e&&(e=null)};l.addEventListener("touchend",a),l.addEventListener("touchcancel",a);let h=(d,u,f)=>{let p=ae(d);p.addEventListener("touchstart",g=>{p.classList.add("down"),u(),g.preventDefault(),g.stopPropagation()},{passive:!1});let x=g=>{p.classList.remove("down"),f?.(),g.preventDefault()};p.addEventListener("touchend",x),p.addEventListener("touchcancel",x)};h("bFire",()=>mt.fire=!0,()=>mt.fire=!1),h("bReload",()=>mt.reload=!0),h("bUse",()=>{mt.interact=!0,mt.interactEdge=!0},()=>mt.interact=!1),h("bSwap",()=>ra(1-I.cur)),h("bLamp",()=>Tv(!I.flashlight)),h("bNade",()=>Cv())}function Tv(i){I.flashlight=i,Yi.visible=i,ji.visible=!!i&&Yn>0&&j.state==="playing"&&!I.dead;let e=ae("bLamp");e&&e.classList.toggle("off",!i),Re.click(0,i?1500:800,.32)}function wv(){Re.setMuted(!Re.muted);try{localStorage.setItem("vwz_mute",Re.muted?"1":"0")}catch{}Pv()}function Av(){Re.setMusicOn(Re.musicOn===!1);try{localStorage.setItem("vwz_music",Re.musicOn?"1":"0")}catch{}Rv()}function Rv(){let i=Re.musicOn!==!1,e=ae("btnMusic");e&&(e.textContent=i?"\u266A":"\u266A\u0338",e.classList.toggle("on",i))}function Cv(){if(j.state!=="playing"||I.dead||(I.nades||0)<=0||j.nadeCd>0){j.state==="playing"&&(I.nades||0)<=0&&Re.deny();return}j.nadeCd=.4,I.nades--,We?.on?We.send({t:"nade",yaw:+I.yaw.toFixed(3),pitch:+I.pitch.toFixed(3)}):Vs.throwLocal(I.x,h0(),I.z,I.yaw,I.pitch-.15),Re.click(0,180,.4)}function Pv(){ae("btnMute").textContent=Re.muted?"\u{1F507}":"\u{1F50A}",ae("btnMute2").textContent=Re.muted?"\u{1F507} Sound off":"\u{1F50A} Sound on"}ae("btnMute").onclick=ae("btnMute2").onclick=i=>{i.stopPropagation(),wv()};try{localStorage.getItem("vwz_music")==="0"&&(Re.musicOn=!1)}catch{}ae("btnMusic")&&(ae("btnMusic").onclick=i=>{i.stopPropagation(),Av()});ae("btnPause").onclick=i=>{i.stopPropagation(),ac()};ae("btnPlay").onclick=ha;ae("btnAgain").onclick=ha;ae("btnMenu").onclick=lc;ae("btnResume").onclick=m0;ae("btnQuit").onclick=lc;ae("btnPlay").addEventListener("touchend",i=>{i.preventDefault(),ha()});ae("qSeg").addEventListener("click",i=>{let e=i.target.closest("button");if(e){gs=e.dataset.q;try{localStorage.setItem("vwz_q",gs)}catch{}[...ae("qSeg").querySelectorAll("button")].forEach(t=>t.classList.toggle("on",t===e)),dd(gs==="high"?2:gs==="medium"?1:gs==="low"||hn?0:2)}});[...ae("qSeg").querySelectorAll("button")].forEach(i=>i.classList.toggle("on",i.dataset.q===gs));ae("modeSeg").addEventListener("click",i=>{let e=i.target.closest("button");if(e){pi=lp(cp(e.dataset.m),1);try{localStorage.setItem("vwz_mode",pi.id)}catch{}[...ae("modeSeg").querySelectorAll("button")].forEach(t=>t.classList.toggle("on",t===e))}});[...ae("modeSeg").querySelectorAll("button")].forEach(i=>i.classList.toggle("on",i.dataset.m===pi.id));ae("mapSeg").addEventListener("click",i=>{let e=i.target.closest("button");if(!e||e.dataset.map===vs.id)return;try{localStorage.setItem("vwz_map",e.dataset.map)}catch{}let t=new URL(location.href);t.searchParams.set("map",e.dataset.map),location.href=t.toString()});[...ae("mapSeg").querySelectorAll("button")].forEach(i=>i.classList.toggle("on",i.dataset.map===vs.id));I.slots=[cd("pistol"),null];ca();dd(Yn);Pv();Rv();p0(ae("scoreList"),d0());f0();Pt.max=vs.cap[Yn>0?1:0];for(let i=0;i<40;i++)g0(.05);requestAnimationFrame(()=>{oa.render(.016,0,0,0),ae("loading").classList.add("done"),setTimeout(()=>ae("loading").remove(),800),setTimeout(()=>{fv=!0,io.load(Yn),pv(Yn)},oi.has("test")?0:120)});requestAnimationFrame(bv);"serviceWorker"in navigator&&location.protocol!=="file:"&&!oi.has("nosw")&&navigator.serviceWorker.register("sw.js").catch(()=>{});function Xw(i,e,t){if(i.type==="win"){e&&(j.repairT+=t,j.repairT>.5&&(j.repairT=0,We.send({t:"repair",w:i.w.id})));return}if(i.type==="job"&&i.hold){e&&(j.repairT+=t,j.repairT>.5&&(j.repairT=0,We.send({t:"obj"})));return}mt.interactEdge&&(i.type==="buy"?We.send({t:"buy",w:i.b.id}):i.type==="door"?We.send({t:"door",id:i.door.id}):i.type==="job"?We.send({t:"obj"}):i.type==="crate"&&We.send({t:"crate"}))}var v0=oi.get("server")||"wss://vwfest-zombies-coop.onrender.com";We=ev({scene:sn,zombies:Pt,P:I,G:j,cam:Zt,world:Et,held:()=>I.slots[I.cur]&&I.slots[I.cur].id||"pistol",onJoined:i=>{j.mpPhase=i.phase||"",ha(),j.round=0,ae("mpTag").textContent="CO-OP \xB7 ROOM "+i.room,ae("mpTag").classList.remove("hidden"),qw(),i.phase==="lobby"?(ae("lobbyCode").textContent=i.room,ae("lobby").classList.remove("hidden"),ae("toast").classList.remove("on"),clearTimeout(l0)):yn("Co-op room "+i.room+" \xB7 share the code with friends")},onLobby:i=>{let e=j.mpPhase;j.mpPhase=i.phase;let t=i.phase==="lobby";if(ae("lobby").classList.toggle("hidden",!t),e==="lobby"&&!t&&!hn&&!oi.has("test"))try{Ws.requestPointerLock?.()?.catch?.(()=>{})}catch{}if(!t)return;ae("lobbyCode").textContent=i.room||We.S.room||"-----";let n=i.p.find(s=>s[0]===We.S.id);ae("lobbyReady").textContent=n&&n[13]?"UNREADY":"READY",ae("lobbyRoster").innerHTML=i.p.map(s=>{let r=s[10]?s[13]?"ready":"waiting":"disconnected",o=String(s[1]).replace(/[&<>]/g,l=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[l]);return`<li class="${s[13]?"ok":"wait"}">${o}${s[0]===We.S.id?" (you)":""} \xB7 ${r}</li>`}).join("")},onStatus:i=>{yn(String(i));let e=ae("coMsg");e&&(e.textContent=String(i)),i==="Reconnected"&&si&&si.rebuild()},onRound:i=>{j.round=i,j.phase="round";let e=Re.lineFor("wave","",i);Re.round(i),Re.setMusicPhase("hot"),qi("ROUND "+i,e),Re.announce(e),(I.nades||0)<1&&(I.nades=1)},onHurt:i=>{I.lastHit=j.time,I.dmg=Math.max(I.dmg,.65+.35*(1-Math.max(0,I.hp)/I.maxHp)),I.shake=1,Re.hurt()},onDown:()=>{pd(),yn("You are down. Teammates revive you if they clear the round")},onRevive:()=>{ae("specTag").classList.add("hidden"),I.dead=!1,I.deadT=0,ae("hud").classList.remove("hud-dead"),ca(),yn("Back on your feet")},onZDie:i=>Re.zdie(ec(i.pos),.5),onHits:i=>{for(let e of i){let t=ae("hitm");t.classList.remove("on","kill"),t.offsetWidth,t.classList.add("on"),e.killed&&(t.classList.add("kill"),Re.tick(!0),j.kills++,e.head&&I.heads++),aa("+"+e.gain,e.head&&e.killed)}},onEvent:(i,e)=>{if(i.e==="pick"){let t=Xi[i.type];if(t&&qi(t.name,i.p===We.S.id?t.sub:"A teammate grabbed it"),Re.power(i.type==="health"?"ammo":i.type),i.type==="ammo"&&i.p===We.S.id)for(let n of I.slots)n&&(n.mag=jt[n.id].mag,n.reserve=jt[n.id].reserve);i.type==="nuke"&&(Re.boom(),I.shake=1,ae("fx-flash").style.transition="none",ae("fx-flash").style.opacity=.85,requestAnimationFrame(()=>{ae("fx-flash").style.transition="opacity 1.2s",ae("fx-flash").style.opacity=0}))}else i.e==="plank"&&i.by===We.S.id?(j.mpRepairs=(j.mpRepairs||0)+1,Re.repair(),aa("+10")):i.e==="mission"?nn.onNetEvent(i):i.e==="boom"?(Vs.splatter(i.x,i.z),Re.boom()):i.e==="crate"&&i.s==="shut"&&yn("The toolbox slammed shut")},onAct:i=>{if(!i.ok){i.a==="nade"&&I.nades++,i.why==="pts"?(Re.deny(),yn("Not enough points")):i.why==="full"?yn("Bait pouch is full"):i.why==="not-yours"&&yn("That weapon belongs to a teammate");return}i.a==="buy"?(Re.cash(),i.w==="nade"?I.nades=i.nades:sc(i.w)):i.a==="door"?Re.cash():i.a==="crate"&&(Re.cash(),i.s==="roll"?(Re.open(),Re.jingle(4)):i.s==="take"&&(sc(i.w),qi(jt[i.w].name.toUpperCase())))},onPlank:(i,e)=>{e&&$l.plank(i,!0)},onDoor:i=>{Re.door(),qi(!i||i.id==="AB"?"GATE OPEN":i.name.toUpperCase(),i&&i.blurb||"Gate open")},onMission:(i,e,t)=>nn.applyNet(i,e,t,We.S.id),onSig:i=>{si&&si.onSignal(i)},onCrate:(i,e,t)=>{let n=Et.crate;i==="idle"?n.state!=="idle"&&fd():i==="roll"&&n.state==="idle"?(n.state="roll",n.t=0,n.pick=e):i==="ready"&&(n.state==="idle"||n.state==="roll"&&n.t<3.4)&&(n.state="roll",n.t=3.61,n.pick=e),n.mine=t},syncUps:i=>{let e=new Set(i.map(t=>t[0]));for(let t=j.ups.length-1;t>=0;t--){let n=j.ups[t];n.sid&&!e.has(n.sid)&&(sn.remove(n.g),Nt.glowBurst(new U(n.x,1,n.z),...Xi[n.type].col.map(s=>s*.7),24,4),j.ups.splice(t,1))}for(let[t,n,s,r]of i)j.ups.some(o=>o.sid===t)||(oc(n,s,r),j.ups[j.ups.length-1].sid=t)},onOver:()=>{setTimeout(()=>{I.dead=!0,Mv(),We.stop(),ae("mpTag").classList.add("hidden")},1500)},onQuit:()=>lc()});try{let i=Xu("_warm",0);i.visible=!1,sn.add(i),to(i,{dt:.016,t:0,speed:2.4,fwd:2.4}),requestAnimationFrame(()=>{try{sn.remove(i)}catch{}})}catch(i){console.warn("soldier prewarm",i)}async function qw(){if(We?.on){if(!si)try{si=(await import(new URL("voice.js",import.meta.url).href)).attach({selfId:()=>We.S.id,selfName:()=>We.S.name,send:t=>We.send(t),peers:()=>[...We.S.remotes.keys()],names:()=>{let t=new Map;for(let[n,s]of We.S.remotes)t.set(n,s.userData.name);return t},setTalking:(t,n)=>We.setTalking(t,n),toast:yn,list:ae("voiceList"),button:ae("btnVoice")})}catch{yn("Voice chat failed to load");return}ae("btnVoice").classList.remove("hidden")}}ae("btnVoice").onclick=i=>{i.stopPropagation(),si&&si.toggle()};var _0=()=>(ae("coName").value||"Survivor").trim().slice(0,16);ae("lobbyReady").onclick=()=>{let i=We.S.snaps.at(-1),e=i&&i.p.find(t=>t[0]===We.S.id);We.send({t:"ready",on:!(e&&e[13])})};ae("lobbyLeave").onclick=()=>{ae("lobby").classList.add("hidden"),lc()};ae("coQuick").onclick=()=>We.connect({url:v0,name:_0(),join:{map:vs.id}});ae("coCreate").onclick=()=>We.connect({url:v0,name:_0(),join:{create:!0,map:vs.id}});ae("coJoin").onclick=()=>{let i=ae("coCode").value.trim().toUpperCase();if(!/^[A-Z2-9]{5}$/.test(i)){ae("coMsg").textContent="Room codes are 5 letters/numbers";return}We.connect({url:v0,name:_0(),join:{code:i}})};window.__game={hd:io,MP:We,missions:nn,grenades:Vs,get MODE(){return pi},MAP:vs,MAPS:Pu,PLAYER_MAX_HP:tc,MEDKIT_HP_FRAC:hv,MEDKIT_COOLDOWN:uv,MEDKIT_HEAL_FRAC:dv,medKitReady:u0,medKitOnKill:xv,G:j,P:I,world:Et,zombies:Pt,fx:Nt,input:mt,tick:g0,startGame:ha,shoot:gv,applyTier:dd,switchTo:ra,startReload:hd,pause:ac,resume:m0,toMenu:lc,giveWeapon:sc,spawnPower:oc,pickPower:vv,interact:yv,findFocus:_v,die:pd,get tier(){return Yn},cam:Zt,renderer:ri,scene:sn,WEAPONS:jt,sfx:Re,renderOnce:Ww,aimAt(i,e=!1){let t=i.pos.x-I.x,n=i.pos.z-I.z,s=(e?1.66:1)*i.scale-1.7;I.yaw=Math.atan2(-t,-n),I.pitch=Math.atan2(s,Math.hypot(t,n)),I.rP=I.rY=0},isTouch:hn};
