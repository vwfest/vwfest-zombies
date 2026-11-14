var vm=0,sf=1,ym=2;var zr=1,_m=2,Fo=3,rs=0,Tn=1,It=2,fn=0,os=1,an=2,rf=3,of=4,vh=5;var Ti=100,Mm=101,bm=102,Sm=103,Em=104,Hr=200,Tm=201,wm=202,Am=203,af=204,lf=205,tl=206,Rm=207,nl=208,Cm=209,Pm=210,Im=211,Lm=212,Dm=213,Nm=214,Hc=0,Gc=1,Vc=2,So=3,Wc=4,Xc=5,qc=6,Yc=7,cf=0,Um=1,Om=2,Hi=0,il=1,sl=2,rl=3,Gr=4,ol=5,al=6,ll=7,Wd="attached",Bm="detached",hf=300,ir=301,Vr=302,Wr=303,yh=304,cl=306,rn=1e3,Wn=1001,Eo=1002,nn=1003,_h=1004;var Xr=1005;var Yt=1006,ko=1007;var di=1008;var Zn=1009,uf=1010,df=1011,zo=1012,Mh=1013,Gi=1014,Kn=1015,jt=1016,bh=1017,Sh=1018,sr=1020,ff=35902,pf=35899,mf=1021,gf=1022,Un=1023,Qi=1026,as=1027,Eh=1028,Th=1029,rr=1030,wh=1031;var Ah=1033,hl=33776,ul=33777,dl=33778,fl=33779,Rh=35840,Ch=35841,Ph=35842,Ih=35843,Lh=36196,Dh=37492,Nh=37496,Uh=37488,Oh=37489,pl=37490,Bh=37491,Fh=37808,kh=37809,zh=37810,Hh=37811,Gh=37812,Vh=37813,Wh=37814,Xh=37815,qh=37816,Yh=37817,Zh=37818,Kh=37819,jh=37820,$h=37821,Jh=36492,Qh=36494,eu=36495,tu=36283,nu=36284,ml=36285,iu=36286,su=2200,Fm=2201,km=2202,Sr=2300,Er=2301,Fc=2302,Xd=2303,_r=2400,Mr=2401,Ea=2402,ru=2500,zm=2501,xf=0,gl=1,Ho=2,Hm=3200;var xl=0,Gm=1,On="",lt="srgb",Nn="srgb-linear",Ta="linear",Dt="srgb";var kc=7680;var Vm=519,Wm=512,Xm=513,qm=514,ou=515,Ym=516,Zm=517,au=518,Km=519,vf=35044,wi=35048;var yf="300 es",Bi=2e3,To=2001;function Sv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ev(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function wo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jm(){let i=wo("canvas");return i.style.display="block",i}var A0={},Ao=null;function wa(...i){let e="THREE."+i.shift();Ao?Ao("log",e,...i):console.log(e,...i)}function $m(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Je(...i){i=$m(i);let e="THREE."+i.shift();if(Ao)Ao("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function st(...i){i=$m(i);let e="THREE."+i.shift();if(Ao)Ao("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function br(...i){let e=i.join(" ");e in A0||(A0[e]=!0,Je(...i))}function Jm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Qm={[Hc]:Gc,[Vc]:qc,[Wc]:Yc,[So]:Xc,[Gc]:Hc,[qc]:Vc,[Yc]:Wc,[Xc]:So},Fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],R0=1234567,_a=Math.PI/180,Tr=180/Math.PI;function Si(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[t&63|128]+Gn[t>>8&255]+"-"+Gn[t>>16&255]+Gn[t>>24&255]+Gn[n&255]+Gn[n>>8&255]+Gn[n>>16&255]+Gn[n>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function _f(i,e){return(i%e+e)%e}function Tv(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function wv(i,e,t){return i!==e?(t-i)/(e-i):0}function Ma(i,e,t){return(1-t)*i+t*e}function Av(i,e,t,n){return Ma(i,e,1-Math.exp(-t*n))}function Rv(i,e=1){return e-Math.abs(_f(i,e*2)-e)}function Cv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Pv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Iv(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Lv(i,e){return i+Math.random()*(e-i)}function Dv(i){return i*(.5-Math.random())}function Nv(i){i!==void 0&&(R0=i);let e=R0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Uv(i){return i*_a}function Ov(i){return i*Tr}function Bv(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Fv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zv(i,e,t,n,s){let r=Math.cos,o=Math.sin,l=r(t/2),c=o(t/2),a=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(l*h,c*u,c*d,l*a);break;case"YZY":i.set(c*d,l*h,c*u,l*a);break;case"ZXZ":i.set(c*u,c*d,l*h,l*a);break;case"XZX":i.set(l*h,c*p,c*f,l*a);break;case"YXY":i.set(c*f,l*h,c*p,l*a);break;case"ZYZ":i.set(c*p,c*f,l*h,l*a);break;default:Je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Oi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Mf={DEG2RAD:_a,RAD2DEG:Tr,generateUUID:Si,clamp:mt,euclideanModulo:_f,mapLinear:Tv,inverseLerp:wv,lerp:Ma,damp:Av,pingpong:Rv,smoothstep:Cv,smootherstep:Pv,randInt:Iv,randFloat:Lv,randFloatSpread:Dv,seededRandom:Nv,degToRad:Uv,radToDeg:Ov,isPowerOfTwo:Bv,ceilPowerOfTwo:Fv,floorPowerOfTwo:kv,setQuaternionFromProperEuler:zv,normalize:Ft,denormalize:Oi},de=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,l){let c=n[s+0],a=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||c!==d||a!==f||h!==p){let g=c*d+a*f+h*p+u*x;g<0&&(d=-d,f=-f,p=-p,x=-x,g=-g);let m=1-l;if(g<.9995){let v=Math.acos(g),M=Math.sin(v);m=Math.sin(m*v)/M,l=Math.sin(l*v)/M,c=c*m+d*l,a=a*m+f*l,h=h*m+p*l,u=u*m+x*l}else{c=c*m+d*l,a=a*m+f*l,h=h*m+p*l,u=u*m+x*l;let v=1/Math.sqrt(c*c+a*a+h*h+u*u);c*=v,a*=v,h*=v,u*=v}}e[t]=c,e[t+1]=a,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let l=n[s],c=n[s+1],a=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=l*p+h*u+c*f-a*d,e[t+1]=c*p+h*d+a*u-l*f,e[t+2]=a*p+h*f+l*d-c*u,e[t+3]=h*p-l*u-c*d-a*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,l=Math.cos,c=Math.sin,a=l(n/2),h=l(s/2),u=l(r/2),d=c(n/2),f=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=d*h*u+a*f*p,this._y=a*f*u-d*h*p,this._z=a*h*p+d*f*u,this._w=a*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+a*f*p,this._y=a*f*u-d*h*p,this._z=a*h*p-d*f*u,this._w=a*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-a*f*p,this._y=a*f*u+d*h*p,this._z=a*h*p+d*f*u,this._w=a*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-a*f*p,this._y=a*f*u+d*h*p,this._z=a*h*p-d*f*u,this._w=a*h*u+d*f*p;break;case"YZX":this._x=d*h*u+a*f*p,this._y=a*f*u+d*h*p,this._z=a*h*p-d*f*u,this._w=a*h*u-d*f*p;break;case"XZY":this._x=d*h*u-a*f*p,this._y=a*f*u-d*h*p,this._z=a*h*p+d*f*u,this._w=a*h*u+d*f*p;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],l=t[5],c=t[9],a=t[2],h=t[6],u=t[10],d=n+l+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-a)*f,this._z=(o-s)*f}else if(n>l&&n>u){let f=2*Math.sqrt(1+n-l-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+a)/f}else if(l>u){let f=2*Math.sqrt(1+l-n-u);this._w=(r-a)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-l);this._w=(o-s)/f,this._x=(r+a)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=t._x,c=t._y,a=t._z,h=t._w;return this._x=n*h+o*l+s*a-r*c,this._y=s*h+o*c+r*l-n*a,this._z=r*h+o*a+n*c-s*l,this._w=o*h-n*l-s*c-r*a,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,o=-o,l=-l);let c=1-t;if(l<.9995){let a=Math.acos(l),h=Math.sin(a);c=Math.sin(c*a)/h,t=Math.sin(t*a)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(C0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(C0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,l=e.z,c=e.w,a=2*(o*s-l*n),h=2*(l*t-r*s),u=2*(r*n-o*t);return this.x=t+c*a+o*u-l*h,this.y=n+c*h+l*a-r*u,this.z=s+c*u+r*h-o*a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,l=t.y,c=t.z;return this.x=s*c-r*l,this.y=r*o-n*c,this.z=n*l-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gd.copy(this).projectOnVector(e),this.sub(gd)}reflect(e){return this.sub(gd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gd=new O,C0=new vn,ht=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,l,c,a){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,c,a)}set(e,t,n,s,r,o,l,c,a){let h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[3],c=n[6],a=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=s[0],g=s[3],m=s[6],v=s[1],M=s[4],_=s[7],b=s[2],T=s[5],L=s[8];return r[0]=o*x+l*v+c*b,r[3]=o*g+l*M+c*T,r[6]=o*m+l*_+c*L,r[1]=a*x+h*v+u*b,r[4]=a*g+h*M+u*T,r[7]=a*m+h*_+u*L,r[2]=d*x+f*v+p*b,r[5]=d*g+f*M+p*T,r[8]=d*m+f*_+p*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],h=e[8];return t*o*h-t*l*a-n*r*h+n*l*c+s*r*a-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],h=e[8],u=h*o-l*a,d=l*c-h*r,f=a*r-o*c,p=t*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*a-h*n)*x,e[2]=(l*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-l*t)*x,e[6]=f*x,e[7]=(n*c-a*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,l){let c=Math.cos(r),a=Math.sin(r);return this.set(n*c,n*a,-n*(c*o+a*l)+o+e,-s*a,s*c,-s*(-a*o+c*l)+l+t,0,0,1),this}scale(e,t){return br("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xd.makeScale(e,t)),this}rotate(e){return br("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xd.makeRotation(-e)),this}translate(e,t){return br("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xd=new ht,P0=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),I0=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hv(){let i={enabled:!0,workingColorSpace:Nn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Dt&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Dt&&(s.r=bo(s.r),s.g=bo(s.g),s.b=bo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===On?Ta:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return br("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return br("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Nn]:{primaries:e,whitePoint:n,transfer:Ta,toXYZ:P0,fromXYZ:I0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:lt},outputColorSpaceConfig:{drawingBufferColorSpace:lt}},[lt]:{primaries:e,whitePoint:n,transfer:Dt,toXYZ:P0,fromXYZ:I0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:lt}}}),i}var ft=Hv();function ws(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var io,Zc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{io===void 0&&(io=wo("canvas")),io.width=e.width,io.height=e.height;let s=io.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=io}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ws(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ws(t[n]/255)*255):t[n]=ws(t[n]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gv=0,Ro=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(vd(s[o].image)):r.push(vd(s[o]))}else r=vd(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function vd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}var Vv=0,yd=new O,bn=class i extends Fi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=Yt,o=di,l=Un,c=Zn,a=i.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=Si(),this.name="",this.source=new Ro(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=a,this.format=l,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yd).x}get height(){return this.source.getSize(yd).y}get depth(){return this.source.getSize(yd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rn:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rn:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=hf;bn.DEFAULT_ANISOTROPY=1;var Pt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,a=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(a+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(a+1)/2,_=(f+1)/2,b=(m+1)/2,T=(h+d)/4,L=(u+x)/4,y=(p+g)/4;return M>_&&M>b?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=L/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=L/r,s=y/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((a+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kc=class extends Fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new bn(s),o=n.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ro(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends Kc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Aa=class extends bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var jc=class extends bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var je=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,l,c,a,h,u,d,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,c,a,h,u,d,f,p,x,g)}set(e,t,n,s,r,o,l,c,a,h,u,d,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=l,m[13]=c,m[2]=a,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/so.setFromMatrixColumn(e,0).length(),r=1/so.setFromMatrixColumn(e,1).length(),o=1/so.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(s),a=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,p=l*h,x=l*u;t[0]=c*h,t[4]=-c*u,t[8]=a,t[1]=f+p*a,t[5]=d-x*a,t[9]=-l*c,t[2]=x-d*a,t[6]=p+f*a,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,p=a*h,x=a*u;t[0]=d+x*l,t[4]=p*l-f,t[8]=o*a,t[1]=o*u,t[5]=o*h,t[9]=-l,t[2]=f*l-p,t[6]=x+d*l,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,p=a*h,x=a*u;t[0]=d-x*l,t[4]=-o*u,t[8]=p+f*l,t[1]=f+p*l,t[5]=o*h,t[9]=x-d*l,t[2]=-o*a,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=l*h,x=l*u;t[0]=c*h,t[4]=p*a-f,t[8]=d*a+x,t[1]=c*u,t[5]=x*a+d,t[9]=f*a-p,t[2]=-a,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*a,p=l*c,x=l*a;t[0]=c*h,t[4]=x-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-l*h,t[2]=-a*h,t[6]=f*u+p,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*c,f=o*a,p=l*c,x=l*a;t[0]=c*h,t[4]=-u,t[8]=a*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=l*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wv,e,Xv)}lookAt(e,t,n){let s=this.elements;return pi.subVectors(e,t),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),qs.crossVectors(n,pi),qs.lengthSq()===0&&(Math.abs(n.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),qs.crossVectors(n,pi)),qs.normalize(),lc.crossVectors(pi,qs),s[0]=qs.x,s[4]=lc.x,s[8]=pi.x,s[1]=qs.y,s[5]=lc.y,s[9]=pi.y,s[2]=qs.z,s[6]=lc.z,s[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[4],c=n[8],a=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],v=n[3],M=n[7],_=n[11],b=n[15],T=s[0],L=s[4],y=s[8],E=s[12],S=s[1],I=s[5],F=s[9],D=s[13],P=s[2],N=s[6],R=s[10],U=s[14],H=s[3],B=s[7],G=s[11],Z=s[15];return r[0]=o*T+l*S+c*P+a*H,r[4]=o*L+l*I+c*N+a*B,r[8]=o*y+l*F+c*R+a*G,r[12]=o*E+l*D+c*U+a*Z,r[1]=h*T+u*S+d*P+f*H,r[5]=h*L+u*I+d*N+f*B,r[9]=h*y+u*F+d*R+f*G,r[13]=h*E+u*D+d*U+f*Z,r[2]=p*T+x*S+g*P+m*H,r[6]=p*L+x*I+g*N+m*B,r[10]=p*y+x*F+g*R+m*G,r[14]=p*E+x*D+g*U+m*Z,r[3]=v*T+M*S+_*P+b*H,r[7]=v*L+M*I+_*N+b*B,r[11]=v*y+M*F+_*R+b*G,r[15]=v*E+M*D+_*U+b*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],l=e[5],c=e[9],a=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15],v=c*f-a*d,M=l*f-a*u,_=l*d-c*u,b=o*f-a*h,T=o*d-c*h,L=o*u-l*h;return t*(x*v-g*M+m*_)-n*(p*v-g*b+m*T)+s*(p*M-x*b+m*L)-r*(p*_-x*T+g*L)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],l=e[9],c=e[2],a=e[6],h=e[10];return t*(o*h-l*a)-n*(r*h-l*c)+s*(r*a-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],v=t*l-n*o,M=t*c-s*o,_=t*a-r*o,b=n*c-s*l,T=n*a-r*l,L=s*a-r*c,y=h*x-u*p,E=h*g-d*p,S=h*m-f*p,I=u*g-d*x,F=u*m-f*x,D=d*m-f*g,P=v*D-M*F+_*I+b*S-T*E+L*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/P;return e[0]=(l*D-c*F+a*I)*N,e[1]=(s*F-n*D-r*I)*N,e[2]=(x*L-g*T+m*b)*N,e[3]=(d*T-u*L-f*b)*N,e[4]=(c*S-o*D-a*E)*N,e[5]=(t*D-s*S+r*E)*N,e[6]=(g*_-p*L-m*M)*N,e[7]=(h*L-d*_+f*M)*N,e[8]=(o*F-l*S+a*y)*N,e[9]=(n*S-t*F-r*y)*N,e[10]=(p*T-x*_+m*v)*N,e[11]=(u*_-h*T-f*v)*N,e[12]=(l*E-o*I-c*y)*N,e[13]=(t*I-n*E+s*y)*N,e[14]=(x*M-p*b-g*v)*N,e[15]=(h*b-u*M+d*v)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,l=e.y,c=e.z,a=r*o,h=r*l;return this.set(a*o+n,a*l-s*c,a*c+s*l,0,a*l+s*c,h*l+n,h*c-s*o,0,a*c-s*l,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,l=t._z,c=t._w,a=r+r,h=o+o,u=l+l,d=r*a,f=r*h,p=r*u,x=o*h,g=o*u,m=l*u,v=c*a,M=c*h,_=c*u,b=n.x,T=n.y,L=n.z;return s[0]=(1-(x+m))*b,s[1]=(f+_)*b,s[2]=(p-M)*b,s[3]=0,s[4]=(f-_)*T,s[5]=(1-(d+m))*T,s[6]=(g+v)*T,s[7]=0,s[8]=(p+M)*L,s[9]=(g-v)*L,s[10]=(1-(d+x))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=so.set(s[0],s[1],s[2]).length(),l=so.set(s[4],s[5],s[6]).length(),c=so.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Li.copy(this);let a=1/o,h=1/l,u=1/c;return Li.elements[0]*=a,Li.elements[1]*=a,Li.elements[2]*=a,Li.elements[4]*=h,Li.elements[5]*=h,Li.elements[6]*=h,Li.elements[8]*=u,Li.elements[9]*=u,Li.elements[10]*=u,t.setFromRotationMatrix(Li),n.x=o,n.y=l,n.z=c,this}makePerspective(e,t,n,s,r,o,l=Bi,c=!1){let a=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,x;if(c)p=r/(o-r),x=o*r/(o-r);else if(l===Bi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(l===To)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=p,a[14]=x,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o,l=Bi,c=!1){let a=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,x;if(c)p=1/(o-r),x=o/(o-r);else if(l===Bi)p=-2/(o-r),x=-(o+r)/(o-r);else if(l===To)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=0,a[12]=d,a[1]=0,a[5]=u,a[9]=0,a[13]=f,a[2]=0,a[6]=0,a[10]=p,a[14]=x,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},so=new O,Li=new je,Wv=new O(0,0,0),Xv=new O(1,1,1),qs=new O,lc=new O,pi=new O,L0=new je,D0=new vn,gi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],l=s[8],c=s[1],a=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,a),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(c,a)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,a)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,a));break;case"YZX":this._z=Math.asin(mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,a),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,a),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return L0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(L0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return D0.setFromEuler(this),this.setFromQuaternion(D0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gi.DEFAULT_ORDER="XYZ";var Ra=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qv=0,N0=new O,ro=new vn,vs=new je,cc=new O,la=new O,Yv=new O,Zv=new vn,U0=new O(1,0,0),O0=new O(0,1,0),B0=new O(0,0,1),F0={type:"added"},Kv={type:"removed"},oo={type:"childadded",child:null},_d={type:"childremoved",child:null},gt=class i extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new gi,n=new vn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new ht}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.multiply(ro),this}rotateOnWorldAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.premultiply(ro),this}rotateX(e){return this.rotateOnAxis(U0,e)}rotateY(e){return this.rotateOnAxis(O0,e)}rotateZ(e){return this.rotateOnAxis(B0,e)}translateOnAxis(e,t){return N0.copy(e).applyQuaternion(this.quaternion),this.position.add(N0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(U0,e)}translateY(e){return this.translateOnAxis(O0,e)}translateZ(e){return this.translateOnAxis(B0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cc.copy(e):cc.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vs.lookAt(la,cc,this.up):vs.lookAt(cc,la,this.up),this.quaternion.setFromRotationMatrix(vs),s&&(vs.extractRotation(s.matrixWorld),ro.setFromRotationMatrix(vs),this.quaternion.premultiply(ro.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(F0),oo.child=e,this.dispatchEvent(oo),oo.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kv),_d.child=e,this.dispatchEvent(_d),_d.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vs.multiply(e.parent.matrixWorld)),e.applyMatrix4(vs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(F0),oo.child=e,this.dispatchEvent(oo),oo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,Yv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,Zv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let a=0,h=c.length;a<h;a++){let u=c[a];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,a=this.material.length;c<a;c++)l.push(r(e.materials,this.material[c]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(e.animations,c))}}if(t){let l=o(e.geometries),c=o(e.materials),a=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),a.length>0&&(n.textures=a),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(l){let c=[];for(let a in l){let h=l[a];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gt.DEFAULT_UP=new O(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ce=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},jv={type:"move"},Co=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,l=this._targetRay,c=this._grip,a=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(a&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(a,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=a.joints["index-finger-tip"],u=a.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;a.inputState.pinching&&d>f+p?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!a.inputState.pinching&&d<=f-p&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(jv)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),a!==null&&(a.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ce;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},eg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ys={h:0,s:0,l:0},hc={h:0,s:0,l:0};function Md(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=_f(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Md(o,r,e+1/3),this.g=Md(o,r,e),this.b=Md(o,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=lt){function n(r){r!==void 0&&parseFloat(r)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){let n=eg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}copyLinearToSRGB(e){return this.r=bo(e.r),this.g=bo(e.g),this.b=bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return ft.workingToColorSpace(Vn.copy(this),e),Math.round(mt(Vn.r*255,0,255))*65536+Math.round(mt(Vn.g*255,0,255))*256+Math.round(mt(Vn.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(Vn.copy(this),t);let n=Vn.r,s=Vn.g,r=Vn.b,o=Math.max(n,s,r),l=Math.min(n,s,r),c,a,h=(l+o)/2;if(l===o)c=0,a=0;else{let u=o-l;switch(a=h<=.5?u/(o+l):u/(2-o-l),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=a,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=lt){ft.workingToColorSpace(Vn.copy(this),e);let t=Vn.r,n=Vn.g,s=Vn.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ys),this.setHSL(Ys.h+e,Ys.s+t,Ys.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ys),e.getHSL(hc);let n=Ma(Ys.h,hc.h,t),s=Ma(Ys.s,hc.s,t),r=Ma(Ys.l,hc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new pe;pe.NAMES=eg;var Ca=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new pe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var wr=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Di=new O,ys=new O,bd=new O,_s=new O,ao=new O,lo=new O,k0=new O,Sd=new O,Ed=new O,Td=new O,wd=new Pt,Ad=new Pt,Rd=new Pt,Es=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Di.subVectors(e,t),s.cross(Di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Di.subVectors(s,t),ys.subVectors(n,t),bd.subVectors(e,t);let o=Di.dot(Di),l=Di.dot(ys),c=Di.dot(bd),a=ys.dot(ys),h=ys.dot(bd),u=o*a-l*l;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(a*c-l*h)*d,p=(o*h-l*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_s)===null?!1:_s.x>=0&&_s.y>=0&&_s.x+_s.y<=1}static getInterpolation(e,t,n,s,r,o,l,c){return this.getBarycoord(e,t,n,s,_s)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_s.x),c.addScaledVector(o,_s.y),c.addScaledVector(l,_s.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return wd.setScalar(0),Ad.setScalar(0),Rd.setScalar(0),wd.fromBufferAttribute(e,t),Ad.fromBufferAttribute(e,n),Rd.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(wd,r.x),o.addScaledVector(Ad,r.y),o.addScaledVector(Rd,r.z),o}static isFrontFacing(e,t,n,s){return Di.subVectors(n,t),ys.subVectors(e,t),Di.cross(ys).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),ys.subVectors(this.a,this.b),Di.cross(ys).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,l;ao.subVectors(s,n),lo.subVectors(r,n),Sd.subVectors(e,n);let c=ao.dot(Sd),a=lo.dot(Sd);if(c<=0&&a<=0)return t.copy(n);Ed.subVectors(e,s);let h=ao.dot(Ed),u=lo.dot(Ed);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*a;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ao,o);Td.subVectors(e,r);let f=ao.dot(Td),p=lo.dot(Td);if(p>=0&&f<=p)return t.copy(r);let x=f*a-c*p;if(x<=0&&a>=0&&p<=0)return l=a/(a-p),t.copy(n).addScaledVector(lo,l);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return k0.subVectors(r,s),l=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(k0,l);let m=1/(g+x+d);return o=x*m,l=d*m,t.copy(n).addScaledVector(ao,o).addScaledVector(lo,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sn=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,Ni):Ni.fromBufferAttribute(r,o),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),uc.copy(n.boundingBox)),uc.applyMatrix4(e.matrixWorld),this.union(uc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),dc.subVectors(this.max,ca),co.subVectors(e.a,ca),ho.subVectors(e.b,ca),uo.subVectors(e.c,ca),Zs.subVectors(ho,co),Ks.subVectors(uo,ho),gr.subVectors(co,uo);let t=[0,-Zs.z,Zs.y,0,-Ks.z,Ks.y,0,-gr.z,gr.y,Zs.z,0,-Zs.x,Ks.z,0,-Ks.x,gr.z,0,-gr.x,-Zs.y,Zs.x,0,-Ks.y,Ks.x,0,-gr.y,gr.x,0];return!Cd(t,co,ho,uo,dc)||(t=[1,0,0,0,1,0,0,0,1],!Cd(t,co,ho,uo,dc))?!1:(fc.crossVectors(Zs,Ks),t=[fc.x,fc.y,fc.z],Cd(t,co,ho,uo,dc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ms[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ms[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ms[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ms[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ms[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ms[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ms[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ms[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ms),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ms=[new O,new O,new O,new O,new O,new O,new O,new O],Ni=new O,uc=new Sn,co=new O,ho=new O,uo=new O,Zs=new O,Ks=new O,gr=new O,ca=new O,dc=new O,fc=new O,xr=new O;function Cd(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){xr.fromArray(i,r);let l=s.x*Math.abs(xr.x)+s.y*Math.abs(xr.y)+s.z*Math.abs(xr.z),c=e.dot(xr),a=t.dot(xr),h=n.dot(xr);if(Math.max(-Math.max(c,a,h),Math.min(c,a,h))>l)return!1}return!0}var Ts=$v();function $v(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let a=c-127;a<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):a<-14?(n[c]=1024>>-a-14,n[c|256]=1024>>-a-14|32768,s[c]=-a-1,s[c|256]=-a-1):a<=15?(n[c]=a+15<<10,n[c|256]=a+15<<10|32768,s[c]=13,s[c|256]=13):a<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),l=new Uint32Array(64);for(let c=1;c<1024;++c){let a=c<<13,h=0;for(;(a&8388608)===0;)a<<=1,h-=8388608;a&=-8388609,h+=947912704,r[c]=a|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(l[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:l}}function Jv(i){Math.abs(i)>65504&&Je("DataUtils.toHalfFloat(): Value out of range."),i=mt(i,-65504,65504),Ts.floatView[0]=i;let e=Ts.uint32View[0],t=e>>23&511;return Ts.baseTable[t]+((e&8388607)>>Ts.shiftTable[t])}function Qv(i){let e=i>>10;return Ts.uint32View[0]=Ts.mantissaTable[Ts.offsetTable[e]+(i&1023)]+Ts.exponentTable[e],Ts.floatView[0]}var Js=class{static toHalfFloat(e){return Jv(e)}static fromHalfFloat(e){return Qv(e)}},gn=new O,pc=new de,ey=0,ct=class extends Fi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ey++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vf,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pc.fromBufferAttribute(this,t),pc.applyMatrix3(e),this.setXY(t,pc.x,pc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix3(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Pa=class extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ia=class extends ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ut=class extends ct{constructor(e,t,n){super(new Float32Array(e),t,n)}},ty=new Sn,ha=new O,Pd=new O,ci=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ty.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);let t=ha.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ha,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(Pd)),this.expandByPoint(ha.copy(e.center).sub(Pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ny=0,bi=new je,Id=new gt,fo=new O,mi=new Sn,ua=new Sn,Pn=new O,xt=class i extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sv(e)?Ia:Pa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,t,n){return bi.makeTranslation(e,t,n),this.applyMatrix4(bi),this}scale(e,t,n){return bi.makeScale(e,t,n),this.applyMatrix4(bi),this}lookAt(e){return Id.lookAt(e),Id.updateMatrix(),this.applyMatrix4(Id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];mi.setFromBufferAttribute(r),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let l=t[r];ua.setFromBufferAttribute(l),this.morphTargetsRelative?(Pn.addVectors(mi.min,ua.min),mi.expandByPoint(Pn),Pn.addVectors(mi.max,ua.max),mi.expandByPoint(Pn)):(mi.expandByPoint(ua.min),mi.expandByPoint(ua.max))}mi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Pn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pn));if(t)for(let r=0,o=t.length;r<o;r++){let l=t[r],c=this.morphTargetsRelative;for(let a=0,h=l.count;a<h;a++)Pn.fromBufferAttribute(l,a),c&&(fo.fromBufferAttribute(e,a),Pn.add(fo)),s=Math.max(s,n.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ct(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let l=[],c=[];for(let y=0;y<n.count;y++)l[y]=new O,c[y]=new O;let a=new O,h=new O,u=new O,d=new de,f=new de,p=new de,x=new O,g=new O;function m(y,E,S){a.fromBufferAttribute(n,y),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,S),h.sub(a),u.sub(a),f.sub(d),p.sub(d);let I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(I),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),l[y].add(x),l[E].add(x),l[S].add(x),c[y].add(g),c[E].add(g),c[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,E=v.length;y<E;++y){let S=v[y],I=S.start,F=S.count;for(let D=I,P=I+F;D<P;D+=3)m(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let M=new O,_=new O,b=new O,T=new O;function L(y){b.fromBufferAttribute(s,y),T.copy(b);let E=l[y];M.copy(E),M.sub(b.multiplyScalar(b.dot(E))).normalize(),_.crossVectors(T,E);let I=_.dot(c[y])<0?-1:1;o.setXYZW(y,M.x,M.y,M.z,I)}for(let y=0,E=v.length;y<E;++y){let S=v[y],I=S.start,F=S.count;for(let D=I,P=I+F;D<P;D+=3)L(e.getX(D+0)),L(e.getX(D+1)),L(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new O,r=new O,o=new O,l=new O,c=new O,a=new O,h=new O,u=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),a.fromBufferAttribute(n,g),l.add(h),c.add(h),a.add(h),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,a.x,a.y,a.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pn.fromBufferAttribute(e,t),Pn.normalize(),e.setXYZ(t,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(l,c){let a=l.array,h=l.itemSize,u=l.normalized,d=new a.constructor(c.length*h),f=0,p=0;for(let x=0,g=c.length;x<g;x++){l.isInterleavedBufferAttribute?f=c[x]*l.data.stride+l.offset:f=c[x]*h;for(let m=0;m<h;m++)d[p++]=a[f++]}return new ct(d,h,u)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let c=s[l],a=e(c,n);t.setAttribute(l,a)}let r=this.morphAttributes;for(let l in r){let c=[],a=r[l];for(let h=0,u=a.length;h<u;h++){let d=a[h],f=e(d,n);c.push(f)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,c=o.length;l<c;l++){let a=o[l];t.addGroup(a.start,a.count,a.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let a in c)c[a]!==void 0&&(e[a]=c[a]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let a=n[c];e.data.attributes[c]=a.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let a=this.morphAttributes[c],h=[];for(let u=0,d=a.length;u<d;u++){let f=a[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let a in s){let h=s[a];this.setAttribute(a,h.clone(t))}let r=e.morphAttributes;for(let a in r){let h=[],u=r[a];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[a]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let a=0,h=o.length;a<h;a++){let u=o[a];this.addGroup(u.start,u.count,u.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ar=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vf,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Qn=new O,Qs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.applyMatrix4(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.applyNormalMatrix(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.transformDirection(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Oi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){wa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){wa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ld=new O,iy=new O,sy=new ht,Ui=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ld.subVectors(n,t).cross(iy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ld),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sy.getNormalMatrix(e),s=this.coplanarPoint(Ld).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ry=0,Xn=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=os,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=af,this.blendDst=lf,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kc,this.stencilZFail=kc,this.stencilZPass=kc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let l in r){let c=r[l];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ui().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new de().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},qn=class extends Xn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},po,da=new O,mo=new O,go=new O,xo=new de,fa=new de,tg=new je,mc=new O,pa=new O,gc=new O,z0=new de,Dd=new de,H0=new de,ei=class extends gt{constructor(e=new qn){if(super(),this.isSprite=!0,this.type="Sprite",po===void 0){po=new xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ar(t,5);po.setIndex([0,1,2,0,2,3]),po.setAttribute("position",new Qs(n,3,0,!1)),po.setAttribute("uv",new Qs(n,2,3,!1))}this.geometry=po,this.material=e,this.center=new de(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&st('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mo.setFromMatrixScale(this.matrixWorld),tg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),go.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mo.multiplyScalar(-go.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;xc(mc.set(-.5,-.5,0),go,o,mo,s,r),xc(pa.set(.5,-.5,0),go,o,mo,s,r),xc(gc.set(.5,.5,0),go,o,mo,s,r),z0.set(0,0),Dd.set(1,0),H0.set(1,1);let l=e.ray.intersectTriangle(mc,pa,gc,!1,da);if(l===null&&(xc(pa.set(-.5,.5,0),go,o,mo,s,r),Dd.set(0,1),l=e.ray.intersectTriangle(mc,gc,pa,!1,da),l===null))return;let c=e.ray.origin.distanceTo(da);c<e.near||c>e.far||t.push({distance:c,point:da.clone(),uv:Es.getInterpolation(da,mc,pa,gc,z0,Dd,H0,new de),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function xc(i,e,t,n,s,r){xo.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(fa.x=r*xo.x-s*xo.y,fa.y=s*xo.x+r*xo.y):fa.copy(xo),i.copy(e),i.x+=fa.x,i.y+=fa.y,i.applyMatrix4(tg)}var bs=new O,Nd=new O,vc=new O,yc=new O,Rr=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bs.copy(this.origin).addScaledVector(this.direction,t),bs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Nd.copy(e).add(t).multiplyScalar(.5),vc.copy(t).sub(e).normalize(),yc.copy(this.origin).sub(Nd);let r=e.distanceTo(t)*.5,o=-this.direction.dot(vc),l=yc.dot(this.direction),c=-yc.dot(vc),a=yc.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*c-l,d=o*l-c,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*l)+d*(o*u+d+2*c)+a}else d=r,u=Math.max(0,-(o*d+l)),f=-u*u+d*(d+2*c)+a;else d=-r,u=Math.max(0,-(o*d+l)),f=-u*u+d*(d+2*c)+a;else d<=-p?(u=Math.max(0,-(-o*r+l)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+a):d<=p?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+a):(u=Math.max(0,-(o*r+l)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+a);else d=o>0?-r:r,u=Math.max(0,-(o*d+l)),f=-u*u+d*(d+2*c)+a;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Nd).addScaledVector(vc,d),f}intersectSphere(e,t){if(e.radius<0)return null;bs.subVectors(e.center,this.origin);let n=bs.dot(this.direction),s=bs.dot(bs)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,l,c,a=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return a>=0?(n=(e.min.x-d.x)*a,s=(e.max.x-d.x)*a):(n=(e.max.x-d.x)*a,s=(e.min.x-d.x)*a),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(l=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(l=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,bs)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,l=this.direction,c=l.x,a=l.y,h=l.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,x=t.y-o.y,g=t.z-o.z,m=n.x-o.x,v=n.y-o.y,M=n.z-o.z,_=Math.abs(c),b=Math.abs(a),T=Math.abs(h),L,y,E,S,I,F,D,P,N,R,U,H;if(_>=b&&_>=T?(E=c,F=u,N=p,H=m,c>=0?(L=a,y=h,S=d,I=f,D=x,P=g,R=v,U=M):(L=h,y=a,S=f,I=d,D=g,P=x,R=M,U=v)):b>=T?(E=a,F=d,N=x,H=v,a>=0?(L=h,y=c,S=f,I=u,D=g,P=p,R=M,U=m):(L=c,y=h,S=u,I=f,D=p,P=g,R=m,U=M)):(E=h,F=f,N=g,H=M,h>=0?(L=c,y=a,S=u,I=d,D=p,P=x,R=m,U=v):(L=a,y=c,S=d,I=u,D=x,P=p,R=v,U=m)),E===0)return null;let B=L/E,G=y/E,Z=1/E,se=S-B*F,ce=I-G*F,j=D-B*N,le=P-G*N,Ie=R-B*H,$=U-G*H,oe=Ie*le-$*j,Ae=se*$-ce*Ie,qe=j*ce-le*se;if(s){if(oe<0||Ae<0||qe<0)return null}else if((oe<0||Ae<0||qe<0)&&(oe>0||Ae>0||qe>0))return null;let te=oe+Ae+qe;if(te===0)return null;let ve=Z*(oe*F+Ae*N+qe*H);return(te>0?ve<0:ve>0)?null:this.at(ve/te,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=cf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},G0=new je,vr=new Rr,_c=new ci,V0=new O,Mc=new O,bc=new O,Sc=new O,Ud=new O,Ec=new O,W0=new O,Tc=new O,me=class extends gt{constructor(e=new xt,t=new nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){Ec.set(0,0,0);for(let c=0,a=r.length;c<a;c++){let h=l[c],u=r[c];h!==0&&(Ud.fromBufferAttribute(u,e),o?Ec.addScaledVector(Ud,h):Ec.addScaledVector(Ud.sub(t),h))}t.add(Ec)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_c.copy(n.boundingSphere),_c.applyMatrix4(r),vr.copy(e.ray).recast(e.near),!(_c.containsPoint(vr.origin)===!1&&(vr.intersectSphere(_c,V0)===null||vr.origin.distanceToSquared(V0)>(e.far-e.near)**2))&&(G0.copy(r).invert(),vr.copy(e.ray).applyMatrix4(G0),!(n.boundingBox!==null&&vr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,l=r.index,c=r.attributes.position,a=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(l!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,b=M;_<b;_+=3){let T=l.getX(_),L=l.getX(_+1),y=l.getX(_+2);s=wc(this,m,e,n,a,h,u,T,L,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=l.getX(g),M=l.getX(g+1),_=l.getX(g+2);s=wc(this,o,e,n,a,h,u,v,M,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,b=M;_<b;_+=3){let T=_,L=_+1,y=_+2;s=wc(this,m,e,n,a,h,u,T,L,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=g,M=g+1,_=g+2;s=wc(this,o,e,n,a,h,u,v,M,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function oy(i,e,t,n,s,r,o,l){let c;if(e.side===Tn?c=n.intersectTriangle(o,r,s,!0,l):c=n.intersectTriangle(s,r,o,e.side===rs,l),c===null)return null;Tc.copy(l),Tc.applyMatrix4(i.matrixWorld);let a=t.ray.origin.distanceTo(Tc);return a<t.near||a>t.far?null:{distance:a,point:Tc.clone(),object:i}}function wc(i,e,t,n,s,r,o,l,c,a){i.getVertexPosition(l,Mc),i.getVertexPosition(c,bc),i.getVertexPosition(a,Sc);let h=oy(i,e,t,n,Mc,bc,Sc,W0);if(h){let u=new O;Es.getBarycoord(W0,Mc,bc,Sc,u),s&&(h.uv=Es.getInterpolatedAttribute(s,l,c,a,u,new de)),r&&(h.uv1=Es.getInterpolatedAttribute(r,l,c,a,u,new de)),o&&(h.normal=Es.getInterpolatedAttribute(o,l,c,a,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:l,b:c,c:a,normal:new O,materialIndex:0};Es.getNormal(Mc,bc,Sc,d.normal),h.face=d,h.barycoord=u}return h}var ma=new Pt,X0=new Pt,q0=new Pt,ay=new Pt,Y0=new je,Ac=new O,Od=new ci,Z0=new je,Bd=new Rr,Cr=class extends me{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wd,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Sn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ac),this.boundingBox.expandByPoint(Ac)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ci),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ac),this.boundingSphere.expandByPoint(Ac)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Od.copy(this.boundingSphere),Od.applyMatrix4(s),e.ray.intersectsSphere(Od)!==!1&&(Z0.copy(s).invert(),Bd.copy(e.ray).applyMatrix4(Z0),!(this.boundingBox!==null&&Bd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Pt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Bm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Je("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;X0.fromBufferAttribute(s.attributes.skinIndex,e),q0.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ma.copy(t),t.set(0,0,0,0)):(ma.set(...t,1),t.set(0,0,0)),ma.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=q0.getComponent(r);if(o!==0){let l=X0.getComponent(r);Y0.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(ay.copy(ma).applyMatrix4(Y0),o)}}return t.isVector4&&(t.w=ma.w),t.applyMatrix4(this.bindMatrixInverse)}},er=class extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ei=class extends bn{constructor(e=null,t=1,n=1,s,r,o,l,c,a=nn,h=nn,u,d){super(null,o,l,c,a,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},K0=new je,ly=new je,Pr=class i{constructor(e=[],t=[]){this.uuid=Si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Je("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let l=e[r]?e[r].matrixWorld:ly;K0.multiplyMatrices(l,t[r]),K0.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ei(t,e,e,Un,Kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Je("Skeleton: No bone found with UUID:",r),o=new er),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let l=n[s];e.boneInverses.push(l.toArray())}return e}},En=class extends ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vo=new je,j0=new je,Rc=[],$0=new Sn,cy=new je,ga=new me,xa=new ci,In=class extends me{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new En(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vo),$0.copy(e.boundingBox).applyMatrix4(vo),this.boundingBox.union($0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vo),xa.copy(e.boundingSphere).applyMatrix4(vo),this.boundingSphere.union(xa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[o+l]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ga.geometry=this.geometry,ga.material=this.material,ga.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(n),e.ray.intersectsSphere(xa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vo),j0.multiplyMatrices(n,vo),ga.matrixWorld=j0,ga.raycast(e,Rc);for(let o=0,l=Rc.length;o<l;o++){let c=Rc[o];c.instanceId=r,c.object=this,t.push(c)}Rc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new En(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ei(new Float32Array(s*this.count),s,this.count,Eh,Kn));let r=this.morphTexture.source.data.data,o=0;for(let a=0;a<n.length;a++)o+=n[a];let l=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=l,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},yr=new ci,hy=new de(.5,.5),Cc=new O,Po=class{constructor(e=new Ui,t=new Ui,n=new Ui,s=new Ui,r=new Ui,o=new Ui){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bi,n=!1){let s=this.planes,r=e.elements,o=r[0],l=r[1],c=r[2],a=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],v=r[12],M=r[13],_=r[14],b=r[15];if(s[0].setComponents(a-o,f-h,m-p,b-v).normalize(),s[1].setComponents(a+o,f+h,m+p,b+v).normalize(),s[2].setComponents(a+l,f+u,m+x,b+M).normalize(),s[3].setComponents(a-l,f-u,m-x,b-M).normalize(),n)s[4].setComponents(c,d,g,_).normalize(),s[5].setComponents(a-c,f-d,m-g,b-_).normalize();else if(s[4].setComponents(a-c,f-d,m-g,b-_).normalize(),t===Bi)s[5].setComponents(a+c,f+d,m+g,b+_).normalize();else if(t===To)s[5].setComponents(c,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){yr.center.set(0,0,0);let t=hy.distanceTo(e.center);return yr.radius=.7071067811865476+t,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Cc.x=s.normal.x>0?e.max.x:e.min.x,Cc.y=s.normal.y>0?e.max.y:e.min.y,Cc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Io=class extends Xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$c=new O,Jc=new O,J0=new je,va=new Rr,Pc=new ci,Fd=new O,Q0=new O,Ir=class extends gt{constructor(e=new xt,t=new Io){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)$c.fromBufferAttribute(t,s-1),Jc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=$c.distanceTo(Jc);e.setAttribute("lineDistance",new ut(n,1))}else Je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pc.copy(n.boundingSphere),Pc.applyMatrix4(s),Pc.radius+=r,e.ray.intersectsSphere(Pc)===!1)return;J0.copy(s).invert(),va.copy(e.ray).applyMatrix4(J0);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,a=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=a){let m=h.getX(x),v=h.getX(x+1),M=Ic(this,e,va,c,m,v,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(f),m=Ic(this,e,va,c,x,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=a){let m=Ic(this,e,va,c,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Ic(this,e,va,c,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Ic(i,e,t,n,s,r,o){let l=i.geometry.attributes.position;if($c.fromBufferAttribute(l,s),Jc.fromBufferAttribute(l,r),t.distanceSqToSegment($c,Jc,Fd,Q0)>n)return;Fd.applyMatrix4(i.matrixWorld);let a=e.ray.origin.distanceTo(Fd);if(!(a<e.near||a>e.far))return{distance:a,point:Q0.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var em=new O,tm=new O,La=class extends Ir{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)em.fromBufferAttribute(t,s),tm.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+em.distanceTo(tm);e.setAttribute("lineDistance",new ut(n,1))}else Je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Da=class extends Ir{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Lo=class extends Xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},nm=new je,qd=new Rr,Lc=new ci,Dc=new O,As=class extends gt{constructor(e=new xt,t=new Lo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lc.copy(n.boundingSphere),Lc.applyMatrix4(s),Lc.radius+=r,e.ray.intersectsSphere(Lc)===!1)return;nm.copy(s).invert(),qd.copy(e.ray).applyMatrix4(nm);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,a=n.index,u=n.attributes.position;if(a!==null){let d=Math.max(0,o.start),f=Math.min(a.count,o.start+o.count);for(let p=d,x=f;p<x;p++){let g=a.getX(p);Dc.fromBufferAttribute(u,g),im(Dc,g,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,x=f;p<x;p++)Dc.fromBufferAttribute(u,p),im(Dc,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function im(i,e,t,n,s,r,o){let l=qd.distanceSqToPoint(i);if(l<t){let c=new O;qd.closestPointToPoint(i,c),c.applyMatrix4(n);let a=s.ray.origin.distanceTo(c);if(a<s.near||a>s.far)return;r.push({distance:a,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Na=class extends bn{constructor(e=[],t=ir,n,s,r,o,l,c,a,h){super(e,t,n,s,r,o,l,c,a,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vt=class extends bn{constructor(e,t,n,s,r,o,l,c,a){super(e,t,n,s,r,o,l,c,a),this.isCanvasTexture=!0,this.needsUpdate=!0}};var es=class extends bn{constructor(e,t,n=Gi,s,r,o,l=nn,c=nn,a,h=Qi,u=1){if(h!==Qi&&h!==as)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,l,c,h,n,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ro(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Qc=class extends es{constructor(e,t=Gi,n=ir,s,r,o=nn,l=nn,c,a=Qi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,l,c,a),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ua=class extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ot=class i extends xt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],a=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2));function p(x,g,m,v,M,_,b,T,L,y,E){let S=_/L,I=b/y,F=_/2,D=b/2,P=T/2,N=L+1,R=y+1,U=0,H=0,B=new O;for(let G=0;G<R;G++){let Z=G*I-D;for(let se=0;se<N;se++){let ce=se*S-F;B[x]=ce*v,B[g]=Z*M,B[m]=P,a.push(B.x,B.y,B.z),B[x]=0,B[g]=0,B[m]=T>0?1:-1,h.push(B.x,B.y,B.z),u.push(se/L),u.push(1-G/y),U+=1}}for(let G=0;G<y;G++)for(let Z=0;Z<L;Z++){let se=d+Z+N*G,ce=d+Z+N*(G+1),j=d+(Z+1)+N*(G+1),le=d+(Z+1)+N*G;c.push(se,ce,le),c.push(ce,j,le),H+=6}l.addGroup(f,H,E),f+=H,d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Oa=class i extends xt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],l=[],c=[],a=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+r,x=s+1,g=new O,m=new O;for(let v=0;v<=p;v++){let M=0,_=0,b=0,T=0;if(v<=n){let E=v/n,S=E*Math.PI/2;_=-h-e*Math.cos(S),b=e*Math.sin(S),T=-e*Math.cos(S),M=E*u}else if(v<=n+r){let E=(v-n)/r;_=-h+E*t,b=e,T=0,M=u+E*d}else{let E=(v-n-r)/n,S=E*Math.PI/2;_=h+e*Math.sin(S),b=e*Math.cos(S),T=e*Math.sin(S),M=u+d+E*u}let L=Math.max(0,Math.min(1,M/f)),y=0;v===0?y=.5/s:v===p&&(y=-.5/s);for(let E=0;E<=s;E++){let S=E/s,I=S*Math.PI*2,F=Math.sin(I),D=Math.cos(I);m.x=-b*D,m.y=_,m.z=b*F,l.push(m.x,m.y,m.z),g.set(-b*D,T,b*F),g.normalize(),c.push(g.x,g.y,g.z),a.push(S+y,L)}if(v>0){let E=(v-1)*x;for(let S=0;S<s;S++){let I=E+S,F=E+S+1,D=v*x+S,P=v*x+S+1;o.push(I,F,D),o.push(F,P,D)}}}this.setIndex(o),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ki=class i extends xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],l=[],c=[],a=new O,h=new de;o.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;a.x=e*Math.cos(f),a.y=e*Math.sin(f),o.push(a.x,a.y,a.z),l.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Bt=class i extends xt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:c};let a=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],g=n/2,m=0;v(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function v(){let _=new O,b=new O,T=0,L=(t-e)/n;for(let y=0;y<=r;y++){let E=[],S=y/r,I=S*(t-e)+e;for(let F=0;F<=s;F++){let D=F/s,P=D*c+l,N=Math.sin(P),R=Math.cos(P);b.x=I*N,b.y=-S*n+g,b.z=I*R,u.push(b.x,b.y,b.z),_.set(N,L,R).normalize(),d.push(_.x,_.y,_.z),f.push(D,1-S),E.push(p++)}x.push(E)}for(let y=0;y<s;y++)for(let E=0;E<r;E++){let S=x[E][y],I=x[E+1][y],F=x[E+1][y+1],D=x[E][y+1];(e>0||E!==0)&&(h.push(S,I,D),T+=3),(t>0||E!==r-1)&&(h.push(I,F,D),T+=3)}a.addGroup(m,T,0),m+=T}function M(_){let b=p,T=new de,L=new O,y=0,E=_===!0?e:t,S=_===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),p++;let I=p;for(let F=0;F<=s;F++){let P=F/s*c+l,N=Math.cos(P),R=Math.sin(P);L.x=E*R,L.y=g*S,L.z=E*N,u.push(L.x,L.y,L.z),d.push(0,S,0),T.x=N*.5+.5,T.y=R*.5*S+.5,f.push(T.x,T.y),p++}for(let F=0;F<s;F++){let D=b+F,P=I+F;_===!0?h.push(P,P+1,D):h.push(P+1,P,D),y+=3}a.addGroup(m,y,_===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hi=class i extends Bt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,l=Math.PI*2){super(0,e,t,n,s,r,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Do=class i extends xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];l(s),a(n),h(),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(r.slice(),3)),this.setAttribute("uv",new ut(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(v){let M=new O,_=new O,b=new O;for(let T=0;T<t.length;T+=3)f(t[T+0],M),f(t[T+1],_),f(t[T+2],b),c(M,_,b,v)}function c(v,M,_,b){let T=b+1,L=[];for(let y=0;y<=T;y++){L[y]=[];let E=v.clone().lerp(_,y/T),S=M.clone().lerp(_,y/T),I=T-y;for(let F=0;F<=I;F++)F===0&&y===T?L[y][F]=E:L[y][F]=E.clone().lerp(S,F/I)}for(let y=0;y<T;y++)for(let E=0;E<2*(T-y)-1;E++){let S=Math.floor(E/2);E%2===0?(d(L[y][S+1]),d(L[y+1][S]),d(L[y][S])):(d(L[y][S+1]),d(L[y+1][S+1]),d(L[y+1][S]))}}function a(v){let M=new O;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(v),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function h(){let v=new O;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];let _=g(v)/2/Math.PI+.5,b=m(v)/Math.PI+.5;o.push(_,1-b)}p(),u()}function u(){for(let v=0;v<o.length;v+=6){let M=o[v+0],_=o[v+2],b=o[v+4],T=Math.max(M,_,b),L=Math.min(M,_,b);T>.9&&L<.1&&(M<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,M){let _=v*3;M.x=e[_+0],M.y=e[_+1],M.z=e[_+2]}function p(){let v=new O,M=new O,_=new O,b=new O,T=new de,L=new de,y=new de;for(let E=0,S=0;E<r.length;E+=9,S+=6){v.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),T.set(o[S+0],o[S+1]),L.set(o[S+2],o[S+3]),y.set(o[S+4],o[S+5]),b.copy(v).add(M).add(_).divideScalar(3);let I=g(b);x(T,S+0,v,I),x(L,S+2,M,I),x(y,S+4,_,I)}}function x(v,M,_,b){b<0&&v.x===1&&(o[M]=v.x-1),_.x===0&&_.z===0&&(o[M]=b/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Ba=class i extends Do{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var xi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let l=0,c=r-1,a;for(;l<=c;)if(s=Math.floor(l+(c-l)/2),a=n[s]-o,a<0)l=s+1;else if(a>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),l=this.getPoint(r),c=t||(o.isVector2?new de:new O);return c.copy(l).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new O,s=[],r=[],o=[],l=new O,c=new je;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new O)}r[0]=new O,o[0]=new O;let a=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=a&&(a=h,n.set(1,0,0)),u<=a&&(a=u,n.set(0,1,0)),d<=a&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),l.crossVectors(s[f-1],s[f]),l.length()>Number.EPSILON){l.normalize();let p=Math.acos(mt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(l,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(mt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(l.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},No=class extends xi{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=c}getPoint(e,t=new de){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(l),a=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=a-this.aY;c=d*h-f*u+this.aX,a=d*u+f*h+this.aY}return n.set(c,a)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},eh=class extends No{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function bf(){let i=0,e=0,t=0,n=0;function s(r,o,l,c){i=r,e=l,t=-3*r+3*o-2*l-c,n=2*r-2*o+l+c}return{initCatmullRom:function(r,o,l,c,a){s(o,l,a*(l-r),a*(c-o))},initNonuniformCatmullRom:function(r,o,l,c,a,h,u){let d=(o-r)/a-(l-r)/(a+h)+(l-o)/h,f=(l-o)/h-(c-o)/(h+u)+(c-l)/u;d*=h,f*=h,s(o,l,d,f)},calc:function(r){let o=r*r,l=o*r;return i+e*r+t*o+n*l}}}var sm=new O,rm=new O,kd=new bf,zd=new bf,Hd=new bf,th=class extends xi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new O){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,l=Math.floor(o),c=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:c===0&&l===r-1&&(l=r-2,c=1);let a,h;this.closed||l>0?a=s[(l-1)%r]:(rm.subVectors(s[0],s[1]).add(s[0]),a=rm);let u=s[l%r],d=s[(l+1)%r];if(this.closed||l+2<r?h=s[(l+2)%r]:(sm.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=sm),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(a.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),kd.initNonuniformCatmullRom(a.x,u.x,d.x,h.x,p,x,g),zd.initNonuniformCatmullRom(a.y,u.y,d.y,h.y,p,x,g),Hd.initNonuniformCatmullRom(a.z,u.z,d.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(kd.initCatmullRom(a.x,u.x,d.x,h.x,this.tension),zd.initCatmullRom(a.y,u.y,d.y,h.y,this.tension),Hd.initCatmullRom(a.z,u.z,d.z,h.z,this.tension));return n.set(kd.calc(c),zd.calc(c),Hd.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function om(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,l=i*i,c=i*l;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*l+r*i+t}function uy(i,e){let t=1-i;return t*t*e}function dy(i,e){return 2*(1-i)*i*e}function fy(i,e){return i*i*e}function ba(i,e,t,n){return uy(i,e)+dy(i,t)+fy(i,n)}function py(i,e){let t=1-i;return t*t*t*e}function my(i,e){let t=1-i;return 3*t*t*i*e}function gy(i,e){return 3*(1-i)*i*i*e}function xy(i,e){return i*i*i*e}function Sa(i,e,t,n,s){return py(i,e)+my(i,t)+gy(i,n)+xy(i,s)}var Fa=class extends xi{constructor(e=new de,t=new de,n=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Sa(e,s.x,r.x,o.x,l.x),Sa(e,s.y,r.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nh=class extends xi{constructor(e=new O,t=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Sa(e,s.x,r.x,o.x,l.x),Sa(e,s.y,r.y,o.y,l.y),Sa(e,s.z,r.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ka=class extends xi{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ih=class extends xi{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},za=class extends xi{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ba(e,s.x,r.x,o.x),ba(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sh=class extends xi{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ba(e,s.x,r.x,o.x),ba(e,s.y,r.y,o.y),ba(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ha=class extends xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),l=r-o,c=s[o===0?o:o-1],a=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(om(l,c.x,a.x,h.x,u.x),om(l,c.y,a.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new de().fromArray(s))}return this}},Yd=Object.freeze({__proto__:null,ArcCurve:eh,CatmullRomCurve3:th,CubicBezierCurve:Fa,CubicBezierCurve3:nh,EllipseCurve:No,LineCurve:ka,LineCurve3:ih,QuadraticBezierCurve:za,QuadraticBezierCurve3:sh,SplineCurve:Ha}),rh=class extends xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,l=this.curves[r],c=l.getLength(),a=c===0?0:1-o/c;return l.getPointAt(a,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(l);for(let a=0;a<c.length;a++){let h=c[a];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Yd[s.type]().fromJSON(s))}return this}},tr=class extends rh{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ka(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new za(this.currentPoint.clone(),new de(e,t),new de(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let l=new Fa(this.currentPoint.clone(),new de(e,t),new de(n,s),new de(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ha(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+l,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,l,c){let a=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+a,t+h,n,s,r,o,l,c),this}absellipse(e,t,n,s,r,o,l,c){let a=new No(e,t,n,s,r,o,l,c);if(this.curves.length>0){let u=a.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(a);let h=a.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Rs=class extends tr{constructor(e){super(e),this.uuid=Si(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new tr().fromJSON(s))}return this}};function vy(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=ng(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let l,c,a;if(n&&(r=Sy(i,e,r,t)),i.length>80*t){l=i[0],c=i[1];let h=l,u=c;for(let d=t;d<s;d+=t){let f=i[d],p=i[d+1];f<l&&(l=f),p<c&&(c=p),f>h&&(h=f),p>u&&(u=p)}a=Math.max(h-l,u-c),a=a!==0?32767/a:0}return Ga(r,o,t,l,c,a,0),o}function ng(i,e,t,n,s){let r;if(s===Ny(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=am(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=am(o/n|0,i[o],i[o+1],r);return r&&Uo(r,r.next)&&(Wa(r),r=r.next),r}function Lr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Uo(t,t.next)||sn(t.prev,t,t.next)===0)){if(Wa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ga(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Ry(i,n,s,r);let l=i;for(;i.prev!==i.next;){let c=i.prev,a=i.next;if(r?_y(i,n,s,r):yy(i)){e.push(c.i,i.i,a.i),Wa(i),i=a.next,l=a.next;continue}if(i=a,i===l){o?o===1?(i=My(Lr(i),e),Ga(i,e,t,n,s,r,2)):o===2&&by(i,e,t,n,s,r):Ga(Lr(i),e,t,n,s,r,1);break}}}function yy(i){let e=i.prev,t=i,n=i.next;if(sn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,l=e.y,c=t.y,a=n.y,h=Math.min(s,r,o),u=Math.min(l,c,a),d=Math.max(s,r,o),f=Math.max(l,c,a),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&ya(s,l,r,c,o,a,p.x,p.y)&&sn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function _y(i,e,t,n){let s=i.prev,r=i,o=i.next;if(sn(s,r,o)>=0)return!1;let l=s.x,c=r.x,a=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(l,c,a),p=Math.min(h,u,d),x=Math.max(l,c,a),g=Math.max(h,u,d),m=Zd(f,p,e,t,n),v=Zd(x,g,e,t,n),M=i.prevZ,_=i.nextZ;for(;M&&M.z>=m&&_&&_.z<=v;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&ya(l,h,c,u,a,d,M.x,M.y)&&sn(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&ya(l,h,c,u,a,d,_.x,_.y)&&sn(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=m;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&ya(l,h,c,u,a,d,M.x,M.y)&&sn(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&ya(l,h,c,u,a,d,_.x,_.y)&&sn(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function My(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Uo(n,s)&&sg(n,t,t.next,s)&&Va(n,s)&&Va(s,n)&&(e.push(n.i,t.i,s.i),Wa(t),Wa(t.next),t=i=s),t=t.next}while(t!==i);return Lr(t)}function by(i,e,t,n,s,r){let o=i;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&Iy(o,l)){let c=rg(o,l);o=Lr(o,o.next),c=Lr(c,c.next),Ga(o,e,t,n,s,r,0),Ga(c,e,t,n,s,r,0);return}l=l.next}o=o.next}while(o!==i)}function Sy(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let l=e[r]*n,c=r<o-1?e[r+1]*n:i.length,a=ng(i,l,c,n,!1);a===a.next&&(a.steiner=!0),s.push(Py(a))}s.sort(Ey);for(let r=0;r<s.length;r++)t=Ty(s[r],t);return t}function Ey(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Ty(i,e){let t=wy(i,e);if(!t)return e;let n=rg(t,i);return Lr(n,n.next),Lr(t,t.next)}function wy(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Uo(i,t))return t;do{if(Uo(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let l=o,c=o.x,a=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&ig(s<a?n:r,s,c,a,s<a?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Va(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Ay(o,t)))&&(o=t,h=u)}t=t.next}while(t!==l);return o}function Ay(i,e){return sn(i.prev,i,e.prev)<0&&sn(e.next,i,i.next)<0}function Ry(i,e,t,n){let s=i;do s.z===0&&(s.z=Zd(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Cy(s)}function Cy(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,l=0;for(let a=0;a<t&&(l++,o=o.nextZ,!!o);a++);let c=t;for(;l>0||c>0&&o;)l!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,l--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Zd(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Py(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ig(i,e,t,n,s,r,o,l){return(s-o)*(e-l)>=(i-o)*(r-l)&&(i-o)*(n-l)>=(t-o)*(e-l)&&(t-o)*(r-l)>=(s-o)*(n-l)}function ya(i,e,t,n,s,r,o,l){return!(i===o&&e===l)&&ig(i,e,t,n,s,r,o,l)}function Iy(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ly(i,e)&&(Va(i,e)&&Va(e,i)&&Dy(i,e)&&(sn(i.prev,i,e.prev)||sn(i,e.prev,e))||Uo(i,e)&&sn(i.prev,i,i.next)>0&&sn(e.prev,e,e.next)>0)}function sn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Uo(i,e){return i.x===e.x&&i.y===e.y}function sg(i,e,t,n){let s=Uc(sn(i,e,t)),r=Uc(sn(i,e,n)),o=Uc(sn(t,n,i)),l=Uc(sn(t,n,e));return!!(s!==r&&o!==l||s===0&&Nc(i,t,e)||r===0&&Nc(i,n,e)||o===0&&Nc(t,i,n)||l===0&&Nc(t,e,n))}function Nc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Uc(i){return i>0?1:i<0?-1:0}function Ly(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&sg(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Va(i,e){return sn(i.prev,i,i.next)<0?sn(i,e,i.next)>=0&&sn(i,i.prev,e)>=0:sn(i,e,i.prev)<0||sn(i,i.next,e)<0}function Dy(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function rg(i,e){let t=Kd(i.i,i.x,i.y),n=Kd(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function am(i,e,t,n){let s=Kd(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Wa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Kd(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ny(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var jd=class{static triangulate(e,t,n=2){return vy(e,t,n)}},$i=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];lm(e),cm(n,e);let o=e.length;t.forEach(lm);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,cm(n,t[c]);let l=jd.triangulate(n,s);for(let c=0;c<l.length;c+=3)r.push(l.slice(c,c+3));return r}};function lm(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function cm(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Xa=class i extends xt{constructor(e=new Rs([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let l=0,c=e.length;l<c;l++){let a=e[l];o(a)}this.setAttribute("position",new ut(s,3)),this.setAttribute("uv",new ut(r,2)),this.computeVertexNormals();function o(l){let c=[],a=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Uy,M,_=!1,b,T,L,y;if(m){M=m.getSpacedPoints(h),_=!0,d=!1;let ne=m.isCatmullRomCurve3?m.closed:!1;b=m.computeFrenetFrames(h,ne),T=new O,L=new O,y=new O}d||(g=0,f=0,p=0,x=0);let E=l.extractPoints(a),S=E.shape,I=E.holes;if(!$i.isClockWise(S)){S=S.reverse();for(let ne=0,fe=I.length;ne<fe;ne++){let ye=I[ne];$i.isClockWise(ye)&&(I[ne]=ye.reverse())}}function D(ne){let ye=10000000000000001e-36,ge=ne[0];for(let Se=1;Se<=ne.length;Se++){let Ve=Se%ne.length,He=ne[Ve],tt=He.x-ge.x,it=He.y-ge.y,z=tt*tt+it*it,bt=Math.max(Math.abs(He.x),Math.abs(He.y),Math.abs(ge.x),Math.abs(ge.y)),at=ye*bt*bt;if(z<=at){ne.splice(Ve,1),Se--;continue}ge=He}}D(S),I.forEach(D);let P=I.length,N=S;for(let ne=0;ne<P;ne++){let fe=I[ne];S=S.concat(fe)}function R(ne,fe,ye){return fe||st("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(fe,ye)}let U=S.length;function H(ne,fe,ye){let ge,Se,Ve,He=ne.x-fe.x,tt=ne.y-fe.y,it=ye.x-ne.x,z=ye.y-ne.y,bt=He*He+tt*tt,at=He*z-tt*it;if(Math.abs(at)>Number.EPSILON){let k=Math.sqrt(bt),w=Math.sqrt(it*it+z*z),Y=fe.x-tt/k,K=fe.y+He/k,ee=ye.x-z/w,be=ye.y+it/w,Pe=((ee-Y)*z-(be-K)*it)/(He*z-tt*it);ge=Y+He*Pe-ne.x,Se=K+tt*Pe-ne.y;let ae=ge*ge+Se*Se;if(ae<=2)return new de(ge,Se);Ve=Math.sqrt(ae/2)}else{let k=!1;He>Number.EPSILON?it>Number.EPSILON&&(k=!0):He<-Number.EPSILON?it<-Number.EPSILON&&(k=!0):Math.sign(tt)===Math.sign(z)&&(k=!0),k?(ge=-tt,Se=He,Ve=Math.sqrt(bt)):(ge=He,Se=tt,Ve=Math.sqrt(bt/2))}return new de(ge/Ve,Se/Ve)}let B=[];for(let ne=0,fe=N.length,ye=fe-1,ge=ne+1;ne<fe;ne++,ye++,ge++)ye===fe&&(ye=0),ge===fe&&(ge=0),B[ne]=H(N[ne],N[ye],N[ge]);let G=[],Z,se=B.concat();for(let ne=0,fe=P;ne<fe;ne++){let ye=I[ne];Z=[];for(let ge=0,Se=ye.length,Ve=Se-1,He=ge+1;ge<Se;ge++,Ve++,He++)Ve===Se&&(Ve=0),He===Se&&(He=0),Z[ge]=H(ye[ge],ye[Ve],ye[He]);G.push(Z),se=se.concat(Z)}let ce;if(g===0)ce=$i.triangulateShape(N,I);else{let ne=[],fe=[];for(let ye=0;ye<g;ye++){let ge=ye/g,Se=f*Math.cos(ge*Math.PI/2),Ve=p*Math.sin(ge*Math.PI/2)+x;for(let He=0,tt=N.length;He<tt;He++){let it=R(N[He],B[He],Ve);Ae(it.x,it.y,-Se),ge===0&&ne.push(it)}for(let He=0,tt=P;He<tt;He++){let it=I[He];Z=G[He];let z=[];for(let bt=0,at=it.length;bt<at;bt++){let k=R(it[bt],Z[bt],Ve);Ae(k.x,k.y,-Se),ge===0&&z.push(k)}ge===0&&fe.push(z)}}ce=$i.triangulateShape(ne,fe)}let j=ce.length,le=p+x;for(let ne=0;ne<U;ne++){let fe=d?R(S[ne],se[ne],le):S[ne];_?(L.copy(b.normals[0]).multiplyScalar(fe.x),T.copy(b.binormals[0]).multiplyScalar(fe.y),y.copy(M[0]).add(L).add(T),Ae(y.x,y.y,y.z)):Ae(fe.x,fe.y,0)}for(let ne=1;ne<=h;ne++)for(let fe=0;fe<U;fe++){let ye=d?R(S[fe],se[fe],le):S[fe];_?(L.copy(b.normals[ne]).multiplyScalar(ye.x),T.copy(b.binormals[ne]).multiplyScalar(ye.y),y.copy(M[ne]).add(L).add(T),Ae(y.x,y.y,y.z)):Ae(ye.x,ye.y,u/h*ne)}for(let ne=g-1;ne>=0;ne--){let fe=ne/g,ye=f*Math.cos(fe*Math.PI/2),ge=p*Math.sin(fe*Math.PI/2)+x;for(let Se=0,Ve=N.length;Se<Ve;Se++){let He=R(N[Se],B[Se],ge);Ae(He.x,He.y,u+ye)}for(let Se=0,Ve=I.length;Se<Ve;Se++){let He=I[Se];Z=G[Se];for(let tt=0,it=He.length;tt<it;tt++){let z=R(He[tt],Z[tt],ge);_?Ae(z.x,z.y+M[h-1].y,M[h-1].x+ye):Ae(z.x,z.y,u+ye)}}}Ie(),$();function Ie(){let ne=s.length/3;if(d){let fe=0,ye=U*fe;for(let ge=0;ge<j;ge++){let Se=ce[ge];qe(Se[2]+ye,Se[1]+ye,Se[0]+ye)}fe=h+g*2,ye=U*fe;for(let ge=0;ge<j;ge++){let Se=ce[ge];qe(Se[0]+ye,Se[1]+ye,Se[2]+ye)}}else{for(let fe=0;fe<j;fe++){let ye=ce[fe];qe(ye[2],ye[1],ye[0])}for(let fe=0;fe<j;fe++){let ye=ce[fe];qe(ye[0]+U*h,ye[1]+U*h,ye[2]+U*h)}}n.addGroup(ne,s.length/3-ne,0)}function $(){let ne=s.length/3,fe=0;oe(N,fe),fe+=N.length;for(let ye=0,ge=I.length;ye<ge;ye++){let Se=I[ye];oe(Se,fe),fe+=Se.length}n.addGroup(ne,s.length/3-ne,1)}function oe(ne,fe){let ye=ne.length;for(;--ye>=0;){let ge=ye,Se=ye-1;Se<0&&(Se=ne.length-1);for(let Ve=0,He=h+g*2;Ve<He;Ve++){let tt=U*Ve,it=U*(Ve+1),z=fe+ge+tt,bt=fe+Se+tt,at=fe+Se+it,k=fe+ge+it;te(z,bt,at,k)}}}function Ae(ne,fe,ye){c.push(ne),c.push(fe),c.push(ye)}function qe(ne,fe,ye){ve(ne),ve(fe),ve(ye);let ge=s.length/3,Se=v.generateTopUV(n,s,ge-3,ge-2,ge-1);Te(Se[0]),Te(Se[1]),Te(Se[2])}function te(ne,fe,ye,ge){ve(ne),ve(fe),ve(ge),ve(fe),ve(ye),ve(ge);let Se=s.length/3,Ve=v.generateSideWallUV(n,s,Se-6,Se-3,Se-2,Se-1);Te(Ve[0]),Te(Ve[1]),Te(Ve[3]),Te(Ve[1]),Te(Ve[2]),Te(Ve[3])}function ve(ne){s.push(c[ne*3+0]),s.push(c[ne*3+1]),s.push(c[ne*3+2])}function Te(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Oy(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let l=t[e.shapes[r]];n.push(l)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Yd[s.type]().fromJSON(s)),new i(n,e.options)}},Uy={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],l=e[n*3],c=e[n*3+1],a=e[s*3],h=e[s*3+1];return[new de(r,o),new de(l,c),new de(a,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],l=e[t*3+1],c=e[t*3+2],a=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(l-h)<Math.abs(o-a)?[new de(o,1-c),new de(a,1-u),new de(d,1-p),new de(x,1-m)]:[new de(l,1-c),new de(h,1-u),new de(f,1-p),new de(g,1-m)]}};function Oy(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Dr=class i extends Do{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var qa=class i extends Do{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},on=class i extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,l=Math.floor(n),c=Math.floor(s),a=l+1,h=c+1,u=e/l,d=t/c,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let v=m*d-o;for(let M=0;M<a;M++){let _=M*u-r;p.push(_,-v,0),x.push(0,0,1),g.push(M/l),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<l;v++){let M=v+a*m,_=v+a*(m+1),b=v+1+a*(m+1),T=v+1+a*m;f.push(M,_,T),f.push(_,b,T)}this.setIndex(f),this.setAttribute("position",new ut(p,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ts=class i extends xt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let l=[],c=[],a=[],h=[],u=e,d=(t-e)/s,f=new O,p=new de;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let m=r+g/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),c.push(f.x,f.y,f.z),a.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let m=0;m<n;m++){let v=m+g,M=v,_=v+n+1,b=v+n+2,T=v+1;l.push(M,_,T),l.push(_,b,T)}}this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(a,3)),this.setAttribute("uv",new ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ya=class i extends xt{constructor(e=new Rs([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],l=0,c=0;if(Array.isArray(e)===!1)a(e);else for(let h=0;h<e.length;h++)a(e[h]),this.addGroup(l,c,h),l+=c,c=0;this.setIndex(n),this.setAttribute("position",new ut(s,3)),this.setAttribute("normal",new ut(r,3)),this.setAttribute("uv",new ut(o,2));function a(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,p=d.holes;$i.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let v=p[g];$i.isClockWise(v)===!0&&(p[g]=v.reverse())}let x=$i.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let v=p[g];f=f.concat(v)}for(let g=0,m=f.length;g<m;g++){let v=f[g];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let g=0,m=x.length;g<m;g++){let v=x[g],M=v[0]+u,_=v[1]+u,b=v[2]+u;n.push(M,_,b),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return By(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function By(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var cn=class i extends xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+l,Math.PI),a=0,h=[],u=new O,d=new O,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let v=[],M=m/n,_=o+M*l,b=e*Math.cos(_),T=Math.sqrt(e*e-b*b),L=0;m===0&&o===0?L=.5/t:m===n&&c===Math.PI&&(L=-.5/t);for(let y=0;y<=t;y++){let E=y/t,S=s+E*r;u.x=-T*Math.cos(S),u.y=b,u.z=T*Math.sin(S),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(E+L,1-M),v.push(a++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let M=h[m][v+1],_=h[m][v],b=h[m+1][v],T=h[m+1][v+1];(m!==0||o>0)&&f.push(M,_,T),(m!==n-1||c<Math.PI)&&f.push(_,b,T)}this.setIndex(f),this.setAttribute("position",new ut(p,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ti=class i extends xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:l},n=Math.floor(n),s=Math.floor(s);let c=[],a=[],h=[],u=[],d=new O,f=new O,p=new O;for(let x=0;x<=n;x++){let g=o+x/n*l;for(let m=0;m<=s;m++){let v=m/s*r;f.x=(e+t*Math.cos(g))*Math.cos(v),f.y=(e+t*Math.cos(g))*Math.sin(v),f.z=t*Math.sin(g),a.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(m/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,v=(s+1)*(x-1)+g-1,M=(s+1)*(x-1)+g,_=(s+1)*x+g;c.push(m,v,_),c.push(v,M,_)}this.setIndex(c),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function qr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(hm(s))s.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(hm(s[0])){let r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function jn(i){let e={};for(let t=0;t<i.length;t++){let n=qr(i[t]);for(let s in n)e[s]=n[s]}return e}function hm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Fy(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var Bn={clone:qr,merge:jn},ky=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,St=class extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ky,this.fragmentShader=zy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=Fy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new pe().setHex(s.value);break;case"v2":this.uniforms[n].value=new de().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ht().fromArray(s.value);break;case"m4":this.uniforms[n].value=new je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Oo=class extends St{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$e=class extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xl,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yn=class extends $e{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Za=class extends Xn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xl,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var oh=class extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ah=class extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $s(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function zc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Hy(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function um(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let l=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[l+c]}return s}function Gy(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var ns=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let l=n+o>>>1;e<t[l]?o=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},lh=class extends ns{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_r,endingEnd:_r}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,l=s[r],c=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case Mr:r=e,l=2*t-n;break;case Ea:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Mr:o=e,c=2*n-t;break;case Ea:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let a=(n-t)*.5,h=this.valueSize;this._weightPrev=a/(t-l),this._weightNext=a/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,a=c-l,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,M=(-1-f)*g+(1.5+f)*x+.5*p,_=f*g-f*x;for(let b=0;b!==l;++b)r[b]=m*o[h+b]+v*o[a+b]+M*o[c+b]+_*o[u+b];return r}},Ka=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,a=c-l,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==l;++d)r[d]=o[a+d]*u+o[c+d]*h;return r}},ch=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},hh=class extends ns{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,a=c-l,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(s-t),x=1-p;for(let g=0;g!==l;++g)r[g]=o[a+g]*x+o[c+g]*p;return r}let d=l*2,f=e-1;for(let p=0;p!==l;++p){let x=o[a+p],g=o[c+p],m=f*d+p*2,v=u[m],M=u[m+1],_=e*d+p*2,b=h[_],T=h[_+1],L=Wy(n,t,v,b,s);r[p]=og(L,x,M,T,g)}return r}};function og(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Vy(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Wy(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let l=og(r,e,t,n,s)-i;if(Math.abs(l)<1e-10)break;let c=Vy(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var ui=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$s(t,this.TimeBufferType),this.values=$s(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$s(e.times,Array),values:$s(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),zc(e.settings)&&(n.settings={inTangents:$s(e.settings.inTangents,Array),outTangents:$s(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new hh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Sr:t=this.InterpolantFactoryMethodDiscrete;break;case Er:t=this.InterpolantFactoryMethodLinear;break;case Fc:t=this.InterpolantFactoryMethodSmooth;break;case Xd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return Er;case this.InterpolantFactoryMethodSmooth:return Fc;case this.InterpolantFactoryMethodBezier:return Xd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;zc(this.settings)&&(dm(this.settings.inTangents,e),dm(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(st("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(st("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){st("KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(o!==null&&o>c){st("KeyframeTrack: Out of order keys.",this,l,c,o),e=!1;break}o=c}if(s!==void 0&&Ev(s))for(let l=0,c=s.length;l!==c;++l){let a=s[l];if(isNaN(a)){st("KeyframeTrack: Value is not a valid number.",this,l,a),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Fc,r=e.length-1,o=1;for(let l=1;l<r;++l){let c=!1,a=e[l],h=e[l+1];if(a!==h&&(l!==1||a!==e[0]))if(s)c=!0;else{let u=l*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let x=t[u+p];if(x!==t[d+p]||x!==t[f+p]){c=!0;break}}}if(c){if(l!==o){e[o]=e[l];let u=l*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,c=o*n,a=0;a!==n;++a)t[c+a]=t[l+a];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,zc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function dm(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}ui.prototype.ValueTypeName="";ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=Er;var Cs=class extends ui{constructor(e,t,n){super(e,t,n)}};Cs.prototype.ValueTypeName="bool";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Sr;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}};ja.prototype.ValueTypeName="color";var Ps=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}};Ps.prototype.ValueTypeName="number";var uh=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=(n-t)/(s-t),a=e*l;for(let h=a+l;a!==h;a+=4)vn.slerpFlat(r,0,o,a-l,o,a,c);return r}},Is=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new uh(this.times,this.values,this.getValueSize(),e)}};Is.prototype.ValueTypeName="quaternion";Is.prototype.InterpolantFactoryMethodSmooth=void 0;var Ls=class extends ui{constructor(e,t,n){super(e,t,n)}};Ls.prototype.ValueTypeName="string";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=Sr;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var nr=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}};nr.prototype.ValueTypeName="vector";var Nr=class{constructor(e="",t=-1,n=[],s=ru){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Si(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,l=n.length;o!==l;++o)t.push(qy(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(ui.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let l=0;l<r;l++){let c=[],a=[];c.push((l+r-1)%r,l,(l+1)%r),a.push(0,1,0);let h=Hy(c);c=um(c,1,h),a=um(a,1,h),!s&&c[0]===0&&(c.push(r),a.push(a[0])),o.push(new Ps(".morphTargetInfluences["+t[l].name+"]",c,a).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let l=0,c=e.length;l<c;l++){let a=e[l],h=a.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(a)}}let o=[];for(let l in s)o.push(this.CreateFromMorphTargetSequence(l,s[l],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Xy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ps;case"vector":case"vector2":case"vector3":case"vector4":return nr;case"color":return ja;case"quaternion":return Is;case"bool":case"boolean":return Cs;case"string":return Ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function qy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Xy(i.type);if(i.times===void 0){let n=[],s=[];Gy(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),zc(i.settings)&&(t.settings={inTangents:$s(i.settings.inTangents,Float32Array),outTangents:$s(i.settings.outTangents,Float32Array)}),t}var Ji={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(fm(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!fm(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function fm(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var dh=class{constructor(e,t,n){let s=this,r=!1,o=0,l=0,c,a=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,l),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return a.push(h,u),this},this.removeHandler=function(h){let u=a.indexOf(h);return u!==-1&&a.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=a.length;u<d;u+=2){let f=a[u],p=a[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ag=new dh,zi=class{constructor(e){this.manager=e!==void 0?e:ag,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};zi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ss={},$d=class extends Error{constructor(e,t){super(e),this.response=t}},Ur=class extends zi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ji.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ss[e]!==void 0){Ss[e].push({onLoad:t,onProgress:n,onError:s});return}Ss[e]=[],Ss[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),l=this.mimeType,c=this.responseType;fetch(o).then(a=>{if(a.status===200||a.status===0){if(a.status===0&&Je("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||a.body===void 0||a.body.getReader===void 0)return a;let h=Ss[e],u=a.body.getReader(),d=a.headers.get("X-File-Size")||a.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,x=0,g=new ReadableStream({start(m){v();function v(){u.read().then(({done:M,value:_})=>{if(M)m.close();else{x+=_.byteLength;let b=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let T=0,L=h.length;T<L;T++){let y=h[T];y.onProgress&&y.onProgress(b)}m.enqueue(_),v()}},M=>{m.error(M)})}}});return new Response(g)}else throw new $d(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`,a)}).then(a=>{switch(c){case"arraybuffer":return a.arrayBuffer();case"blob":return a.blob();case"document":return a.text().then(h=>new DOMParser().parseFromString(h,l));case"json":return a.json();default:if(l==="")return a.text();{let u=/charset="?([^;"\s]*)"?/i.exec(l),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return a.arrayBuffer().then(p=>f.decode(p))}}}).then(a=>{Ji.add(`file:${e}`,a);let h=Ss[e];delete Ss[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(a)}}).catch(a=>{let h=Ss[e];if(h===void 0)throw this.manager.itemError(e),a;delete Ss[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(a)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var yo=new WeakMap,fh=class extends zi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ji.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=yo.get(o);u===void 0&&(u=[],yo.set(o,u)),u.push({onLoad:t,onError:s})}return o}let l=wo("img");function c(){h(),t&&t(this);let u=yo.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}yo.delete(this),r.manager.itemEnd(e)}function a(u){h(),s&&s(u),Ji.remove(`image:${e}`);let d=yo.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}yo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){l.removeEventListener("load",c,!1),l.removeEventListener("error",a,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",a,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),Ji.add(`image:${e}`,l),r.manager.itemStart(e),l.src=e,l}};var $a=class extends zi{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new Ei,l=new Ur(this.manager);return l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setPath(this.path),l.setWithCredentials(r.withCredentials),l.load(e,function(c){let a;try{a=r.parse(c)}catch(h){s!==void 0?s(h):st(h);return}r._applyTexData(o,a),t&&t(o,a)},n,s),o}createDataTexture(e){let t=new Ei;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Wn,e.wrapT=t.wrapT!==void 0?t.wrapT:Wn,e.magFilter=t.magFilter!==void 0?t.magFilter:Yt,e.minFilter=t.minFilter!==void 0?t.minFilter:Yt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=di),t.mipmapCount===1&&(e.minFilter=Yt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},vi=class extends zi{constructor(e){super(e)}load(e,t,n,s){let r=new bn,o=new fh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Or=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Br=class extends Or{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Gd=new je,pm=new O,mm=new O,Bo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Po,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;pm.setFromMatrixPosition(e.matrixWorld),t.position.copy(pm),mm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Gd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Gd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,a=s?s.y/r.y:0;e.coordinateSystem===To||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+a,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+a,0,0,.5,.5,0,0,0,1),t.multiply(Gd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Oc=new O,Bc=new vn,ji=new O,Ja=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oc,Bc,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Bc,ji.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Oc,Bc,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Bc,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},js=new O,gm=new de,xm=new de,xn=class extends Ja{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(js.x,js.y).multiplyScalar(-e/js.z),js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(js.x,js.y).multiplyScalar(-e/js.z)}getViewSize(e,t){return this.getViewBounds(e,gm,xm),t.subVectors(xm,gm)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_a*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,a=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/a,s*=o.width/c,n*=o.height/a}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Jd=class extends Bo{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Tr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Fr=class extends Or{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Jd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Qd=class extends Bo{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0}},is=class extends Or{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ss=class extends Ja{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let a=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=a*this.view.offsetX,o=r+a*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ef=class extends Bo{constructor(){super(new ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ds=class extends Or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new ef}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ns=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Vd=new WeakMap,Qa=class extends zi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Je("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Je("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ji.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(a=>{Vd.has(o)===!0?(s&&s(Vd.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(a),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader,l.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,l).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(a){return Ji.add(`image-bitmap:${e}`,a),t&&t(a),r.manager.itemEnd(e),a}).catch(function(a){s&&s(a),Vd.set(c,a),Ji.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ji.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var _o=-90,Mo=1,ph=class extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(_o,Mo,e,t);s.layers=this.layers,this.add(s);let r=new xn(_o,Mo,e,t);r.layers=this.layers,this.add(r);let o=new xn(_o,Mo,e,t);o.layers=this.layers,this.add(o);let l=new xn(_o,Mo,e,t);l.layers=this.layers,this.add(l);let c=new xn(_o,Mo,e,t);c.layers=this.layers,this.add(c);let a=new xn(_o,Mo,e,t);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,l,c]=t;for(let a of t)this.remove(a);if(e===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===To)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let a of t)this.add(a),a.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,l,c,a,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},mh=class extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},el=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Yy.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Yy(){this._document.hidden===!1&&this.reset()}var gh=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let l=0;l!==s;++l)n[r+l]=n[l];o=t}else{o+=t;let l=t/o;this._mixBufferRegion(n,r,0,l,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,l=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,a=t+t;c!==a;++c)if(n[c]!==n[c+t]){l.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){vn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;vn.multiplyQuaternionsFlat(e,o,e,t,e,n),vn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let l=0;l!==r;++l){let c=t+l;e[c]=e[c]*o+e[n+l]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]+e[n+o]*s}}},Ef="\\[\\]\\.:\\/",Zy=new RegExp("["+Ef+"]","g"),Tf="[^"+Ef+"]",Ky="[^"+Ef.replace("\\.","")+"]",jy=/((?:WC+[\/:])*)/.source.replace("WC",Tf),$y=/(WCOD+)?/.source.replace("WCOD",Ky),Jy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tf),Qy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tf),e_=new RegExp("^"+jy+$y+Jy+Qy+"$"),t_=["material","materials","bones","map"],tf=class{constructor(e,t,n){let s=n||Gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zy,"")}static parseTrackName(e){let t=e_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);t_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===t||l.uuid===t)return l;let c=n(l.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let a=t.objectIndex;switch(n){case"materials":if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){st("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){st("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===a){a=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){st("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){st("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(a!==void 0){if(e[a]===void 0){st("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[a]}}let o=e[s];if(o===void 0){let a=t.nodeName;st("PropertyBinding: Trying to update property for track: "+a+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Gt.Composite=tf;Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xh=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,l=new Array(o),c={endingStart:_r,endingEnd:_r};for(let a=0;a!==o;++a){let h=r[a].createInterpolant(null);l[a]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=l,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Fm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,l=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(l,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,l=this._timeScaleInterpolant;l===null&&(l=s._lendControlInterpolant(),this._timeScaleInterpolant=l);let c=l.parameterPositions,a=l.sampleValues;return c[0]=r,c[1]=r+n,a[0]=e/o,a[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),l=this._updateWeight(e);if(l>0){let c=this._interpolants,a=this._propertyBindings;switch(this.blendMode){case zm:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),a[h].accumulateAdditive(l);break;case ru:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),a[h].accumulate(s,l)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===km;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===su){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let l=Math.floor(s/t);s-=t*l,r+=Math.abs(l);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let a=e<0;this._setEndings(a,!a,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:l})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Mr,s.endingEnd=Mr):(e?s.endingStart=this.zeroSlopeAtStart?Mr:_r:s.endingStart=Ea,t?s.endingEnd=this.zeroSlopeAtEnd?Mr:_r:s.endingEnd=Ea)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,c[0]=t,l[1]=r+e,c[1]=n,this}},n_=new Float32Array(1),kr=class extends Fi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,l=e._interpolants,c=n.uuid,a=this._bindingsByRootAndName,h=a[c];h===void 0&&(h={},a[c]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,p=h[f];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;p=new gh(Gt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),o[u]=p}l[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let l=o.knownActions;e._byClipCacheIndex=l.length,l.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,l=o[r],c=l.knownActions,a=c[c.length-1],h=e._byClipCacheIndex;a._byClipCacheIndex=h,c[h]=a,c.pop(),e._byClipCacheIndex=null;let u=l.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,l=o[s],c=t[t.length-1],a=e._cacheIndex;c._cacheIndex=a,t[a]=c,t.pop(),delete l[r],Object.keys(l).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ka(new Float32Array(2),new Float32Array(2),1,n_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Nr.findByName(s,e):e,l=o!==null?o.uuid:e,c=this._actionsByClip[l],a=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ru),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;a=c.knownActions[0],o===null&&(o=a._clip)}if(o===null)return null;let h=new xh(this,o,t,n);return this._bindAction(h,a),this._addInactiveAction(h,l,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Nr.findByName(n,e):e,o=r?r.uuid:e,l=this._actionsByClip[o];return l!==void 0&&l.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let a=0;a!==n;++a)t[a]._update(s,e,r,o);let l=this._bindings,c=this._nActiveBindings;for(let a=0;a!==c;++a)l[a].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let l=0,c=o.length;l!==c;++l){let a=o[l];this._deactivateAction(a);let h=a._cacheIndex,u=t[t.length-1];a._cacheIndex=null,a._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(a)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let l=n[o].actionByRoot,c=l[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let l=r[o];l.restoreOriginalState(),this._removeInactiveBinding(l)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var nf=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function wf(i,e,t,n){let s=i_(n);switch(t){case mf:return i*e;case Eh:return i*e/s.components*s.byteLength;case Th:return i*e/s.components*s.byteLength;case rr:return i*e*2/s.components*s.byteLength;case wh:return i*e*2/s.components*s.byteLength;case gf:return i*e*3/s.components*s.byteLength;case Un:return i*e*4/s.components*s.byteLength;case Ah:return i*e*4/s.components*s.byteLength;case hl:case ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dl:case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ch:case Ih:return Math.max(i,16)*Math.max(e,8)/4;case Rh:case Ph:return Math.max(i,8)*Math.max(e,8)/2;case Lh:case Dh:case Uh:case Oh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Nh:case pl:case Bh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case qh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case jh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $h:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Jh:case Qh:case eu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case tu:case nu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ml:case iu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function i_(i){switch(i){case Zn:case uf:return{byteLength:1,components:1};case zo:case df:case jt:return{byteLength:2,components:1};case bh:case Sh:return{byteLength:2,components:4};case Gi:case Mh:case Kn:return{byteLength:4,components:1};case ff:case pf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Cg(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function r_(i){let e=new WeakMap;function t(l,c){let a=l.array,h=l.usage,u=a.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,a,h),l.onUploadCallback();let f;if(a instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)f=i.HALF_FLOAT;else if(a instanceof Uint16Array)l.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(a instanceof Int16Array)f=i.SHORT;else if(a instanceof Uint32Array)f=i.UNSIGNED_INT;else if(a instanceof Int32Array)f=i.INT;else if(a instanceof Int8Array)f=i.BYTE;else if(a instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:d,type:f,bytesPerElement:a.BYTES_PER_ELEMENT,version:l.version,size:u}}function n(l,c,a){let h=c.array,u=c.updateRanges;if(i.bindBuffer(a,l),u.length===0)i.bufferSubData(a,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];i.bufferSubData(a,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let a=e.get(l);if(a===void 0)e.set(l,t(l,c));else if(a.version<l.version){if(a.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(a.buffer,l,c),a.version=l.version}}return{get:s,remove:r,update:o}}var o_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a_=`#ifdef USE_ALPHAHASH
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
#endif`,l_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,u_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d_=`#ifdef USE_AOMAP
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
#endif`,f_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p_=`#ifdef USE_BATCHING
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
#endif`,m_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,g_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,y_=`#ifdef USE_IRIDESCENCE
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
#endif`,__=`#ifdef USE_BUMPMAP
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
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,w_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,A_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,R_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,C_=`#define PI 3.141592653589793
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
} // validated`,P_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,I_=`vec3 transformedNormal = objectNormal;
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
#endif`,L_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,U_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O_="gl_FragColor = linearToOutputTexel( gl_FragColor );",B_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F_=`#ifdef USE_ENVMAP
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
#endif`,k_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
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
#endif`,H_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G_=`#ifdef USE_ENVMAP
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
#endif`,V_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y_=`#ifdef USE_GRADIENTMAP
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
}`,Z_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,J_=`#ifdef USE_ENVMAP
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
#endif`,Q_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i1=`PhysicalMaterial material;
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
#endif`,s1=`uniform sampler2D dfgLUT;
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
}`,r1=`
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
#endif`,o1=`#if defined( RE_IndirectDiffuse )
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
#endif`,a1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,c1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,g1=`#if defined( USE_POINTS_UV )
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
#endif`,x1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b1=`#ifdef USE_MORPHTARGETS
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
#endif`,S1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,C1=`#ifdef USE_NORMALMAP
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
#endif`,P1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X1=`float getShadowMask() {
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
}`,q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y1=`#ifdef USE_SKINNING
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
#endif`,Z1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K1=`#ifdef USE_SKINNING
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
#endif`,j1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eM=`#ifdef USE_TRANSMISSION
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
#endif`,tM=`#ifdef USE_TRANSMISSION
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
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,oM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aM=`uniform sampler2D t2D;
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
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dM=`#include <common>
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
}`,fM=`#if DEPTH_PACKING == 3200
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
}`,pM=`#define DISTANCE
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
}`,mM=`#define DISTANCE
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
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`uniform float scale;
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
}`,yM=`uniform vec3 diffuse;
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
}`,_M=`#include <common>
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
}`,MM=`uniform vec3 diffuse;
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
}`,bM=`#define LAMBERT
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
}`,SM=`#define LAMBERT
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
}`,EM=`#define MATCAP
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
}`,TM=`#define MATCAP
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
}`,wM=`#define NORMAL
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
}`,AM=`#define NORMAL
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
}`,RM=`#define PHONG
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
}`,CM=`#define PHONG
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
}`,PM=`#define STANDARD
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
}`,IM=`#define STANDARD
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
}`,LM=`#define TOON
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
}`,DM=`#define TOON
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
}`,NM=`uniform float size;
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
}`,UM=`uniform vec3 diffuse;
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
}`,OM=`#include <common>
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
}`,BM=`uniform vec3 color;
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
}`,FM=`uniform float rotation;
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
}`,kM=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:o_,alphahash_pars_fragment:a_,alphamap_fragment:l_,alphamap_pars_fragment:c_,alphatest_fragment:h_,alphatest_pars_fragment:u_,aomap_fragment:d_,aomap_pars_fragment:f_,batching_pars_vertex:p_,batching_vertex:m_,begin_vertex:g_,beginnormal_vertex:x_,bsdfs:v_,iridescence_fragment:y_,bumpmap_pars_fragment:__,clipping_planes_fragment:M_,clipping_planes_pars_fragment:b_,clipping_planes_pars_vertex:S_,clipping_planes_vertex:E_,color_fragment:T_,color_pars_fragment:w_,color_pars_vertex:A_,color_vertex:R_,common:C_,cube_uv_reflection_fragment:P_,defaultnormal_vertex:I_,displacementmap_pars_vertex:L_,displacementmap_vertex:D_,emissivemap_fragment:N_,emissivemap_pars_fragment:U_,colorspace_fragment:O_,colorspace_pars_fragment:B_,envmap_fragment:F_,envmap_common_pars_fragment:k_,envmap_pars_fragment:z_,envmap_pars_vertex:H_,envmap_physical_pars_fragment:J_,envmap_vertex:G_,fog_vertex:V_,fog_pars_vertex:W_,fog_fragment:X_,fog_pars_fragment:q_,gradientmap_pars_fragment:Y_,lightmap_pars_fragment:Z_,lights_lambert_fragment:K_,lights_lambert_pars_fragment:j_,lights_pars_begin:$_,lights_toon_fragment:Q_,lights_toon_pars_fragment:e1,lights_phong_fragment:t1,lights_phong_pars_fragment:n1,lights_physical_fragment:i1,lights_physical_pars_fragment:s1,lights_fragment_begin:r1,lights_fragment_maps:o1,lights_fragment_end:a1,lightprobes_pars_fragment:l1,logdepthbuf_fragment:c1,logdepthbuf_pars_fragment:h1,logdepthbuf_pars_vertex:u1,logdepthbuf_vertex:d1,map_fragment:f1,map_pars_fragment:p1,map_particle_fragment:m1,map_particle_pars_fragment:g1,metalnessmap_fragment:x1,metalnessmap_pars_fragment:v1,morphinstance_vertex:y1,morphcolor_vertex:_1,morphnormal_vertex:M1,morphtarget_pars_vertex:b1,morphtarget_vertex:S1,normal_fragment_begin:E1,normal_fragment_maps:T1,normal_pars_fragment:w1,normal_pars_vertex:A1,normal_vertex:R1,normalmap_pars_fragment:C1,clearcoat_normal_fragment_begin:P1,clearcoat_normal_fragment_maps:I1,clearcoat_pars_fragment:L1,iridescence_pars_fragment:D1,opaque_fragment:N1,packing:U1,premultiplied_alpha_fragment:O1,project_vertex:B1,dithering_fragment:F1,dithering_pars_fragment:k1,roughnessmap_fragment:z1,roughnessmap_pars_fragment:H1,shadowmap_pars_fragment:G1,shadowmap_pars_vertex:V1,shadowmap_vertex:W1,shadowmask_pars_fragment:X1,skinbase_vertex:q1,skinning_pars_vertex:Y1,skinning_vertex:Z1,skinnormal_vertex:K1,specularmap_fragment:j1,specularmap_pars_fragment:$1,tonemapping_fragment:J1,tonemapping_pars_fragment:Q1,transmission_fragment:eM,transmission_pars_fragment:tM,uv_pars_fragment:nM,uv_pars_vertex:iM,uv_vertex:sM,worldpos_vertex:rM,background_vert:oM,background_frag:aM,backgroundCube_vert:lM,backgroundCube_frag:cM,cube_vert:hM,cube_frag:uM,depth_vert:dM,depth_frag:fM,distance_vert:pM,distance_frag:mM,equirect_vert:gM,equirect_frag:xM,linedashed_vert:vM,linedashed_frag:yM,meshbasic_vert:_M,meshbasic_frag:MM,meshlambert_vert:bM,meshlambert_frag:SM,meshmatcap_vert:EM,meshmatcap_frag:TM,meshnormal_vert:wM,meshnormal_frag:AM,meshphong_vert:RM,meshphong_frag:CM,meshphysical_vert:PM,meshphysical_frag:IM,meshtoon_vert:LM,meshtoon_frag:DM,points_vert:NM,points_frag:UM,shadow_vert:OM,shadow_frag:BM,sprite_vert:FM,sprite_frag:kM},Oe={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},cs={basic:{uniforms:jn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:jn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new pe(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:jn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:jn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:jn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new pe(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:jn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:jn([Oe.points,Oe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:jn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:jn([Oe.common,Oe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:jn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:jn([Oe.sprite,Oe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:jn([Oe.common,Oe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:jn([Oe.lights,Oe.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};cs.physical={uniforms:jn([cs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};var lu={r:0,b:0,g:0},zM=new je,Pg=new ht;Pg.set(-1,0,0,0,1,0,0,0,1);function HM(i,e,t,n,s,r){let o=new pe(0),l=s===!0?0:1,c,a,h=null,u=0,d=null;function f(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){let _=v.backgroundBlurriness>0;M=e.get(M,_)}return M}function p(v){let M=!1,_=f(v);_===null?g(o,l):_&&_.isColor&&(g(_,1),M=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,M){let _=f(M);_&&(_.isCubeTexture||_.mapping===cl)?(a===void 0&&(a=new me(new ot(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:qr(cs.backgroundCube.uniforms),vertexShader:cs.backgroundCube.vertexShader,fragmentShader:cs.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),a.geometry.deleteAttribute("uv"),a.onBeforeRender=function(b,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(a.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(a)),a.material.uniforms.envMap.value=_,a.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,a.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,a.material.uniforms.backgroundRotation.value.setFromMatrix4(zM.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&a.material.uniforms.backgroundRotation.value.premultiply(Pg),a.material.toneMapped=ft.getTransfer(_.colorSpace)!==Dt,(h!==_||u!==_.version||d!==i.toneMapping)&&(a.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),a.layers.enableAll(),v.unshift(a,a.geometry,a.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new me(new on(2,2),new St({name:"BackgroundMaterial",uniforms:qr(cs.background.uniforms),vertexShader:cs.background.vertexShader,fragmentShader:cs.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ft.getTransfer(_.colorSpace)!==Dt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function g(v,M){v.getRGB(lu,Sf(i)),t.buffers.color.setClear(lu.r,lu.g,lu.b,M,r)}function m(){a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),l=M,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,g(o,l)},render:p,addToRenderList:x,dispose:m}}function GM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function l(I,F,D,P,N){let R=!1,U=u(I,P,D,F);r!==U&&(r=U,a(r.object)),R=f(I,P,D,N),R&&p(I,P,D,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(R||o)&&(o=!1,_(I,F,D,P),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return i.createVertexArray()}function a(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,F,D,P){let N=P.wireframe===!0,R=n[F.id];R===void 0&&(R={},n[F.id]=R);let U=I.isInstancedMesh===!0?I.id:0,H=R[U];H===void 0&&(H={},R[U]=H);let B=H[D.id];B===void 0&&(B={},H[D.id]=B);let G=B[N];return G===void 0&&(G=d(c()),B[N]=G),G}function d(I){let F=[],D=[],P=[];for(let N=0;N<t;N++)F[N]=0,D[N]=0,P[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:D,attributeDivisors:P,object:I,attributes:{},index:null}}function f(I,F,D,P){let N=r.attributes,R=F.attributes,U=0,H=D.getAttributes();for(let B in H)if(H[B].location>=0){let Z=N[B],se=R[B];if(se===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(se=I.instanceColor)),Z===void 0||Z.attribute!==se||se&&Z.data!==se.data)return!0;U++}return r.attributesNum!==U||r.index!==P}function p(I,F,D,P){let N={},R=F.attributes,U=0,H=D.getAttributes();for(let B in H)if(H[B].location>=0){let Z=R[B];Z===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));let se={};se.attribute=Z,Z&&Z.data&&(se.data=Z.data),N[B]=se,U++}r.attributes=N,r.attributesNum=U,r.index=P}function x(){let I=r.newAttributes;for(let F=0,D=I.length;F<D;F++)I[F]=0}function g(I){m(I,0)}function m(I,F){let D=r.newAttributes,P=r.enabledAttributes,N=r.attributeDivisors;D[I]=1,P[I]===0&&(i.enableVertexAttribArray(I),P[I]=1),N[I]!==F&&(i.vertexAttribDivisor(I,F),N[I]=F)}function v(){let I=r.newAttributes,F=r.enabledAttributes;for(let D=0,P=F.length;D<P;D++)F[D]!==I[D]&&(i.disableVertexAttribArray(D),F[D]=0)}function M(I,F,D,P,N,R,U){U===!0?i.vertexAttribIPointer(I,F,D,N,R):i.vertexAttribPointer(I,F,D,P,N,R)}function _(I,F,D,P){x();let N=P.attributes,R=D.getAttributes(),U=F.defaultAttributeValues;for(let H in R){let B=R[H];if(B.location>=0){let G=N[H];if(G===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){let Z=G.normalized,se=G.itemSize,ce=e.get(G);if(ce===void 0)continue;let j=ce.buffer,le=ce.type,Ie=ce.bytesPerElement,$=le===i.INT||le===i.UNSIGNED_INT||G.gpuType===Mh;if(G.isInterleavedBufferAttribute){let oe=G.data,Ae=oe.stride,qe=G.offset;if(oe.isInstancedInterleavedBuffer){for(let te=0;te<B.locationSize;te++)m(B.location+te,oe.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let te=0;te<B.locationSize;te++)g(B.location+te);i.bindBuffer(i.ARRAY_BUFFER,j);for(let te=0;te<B.locationSize;te++)M(B.location+te,se/B.locationSize,le,Z,Ae*Ie,(qe+se/B.locationSize*te)*Ie,$)}else{if(G.isInstancedBufferAttribute){for(let oe=0;oe<B.locationSize;oe++)m(B.location+oe,G.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let oe=0;oe<B.locationSize;oe++)g(B.location+oe);i.bindBuffer(i.ARRAY_BUFFER,j);for(let oe=0;oe<B.locationSize;oe++)M(B.location+oe,se/B.locationSize,le,Z,se*Ie,se/B.locationSize*oe*Ie,$)}}else if(U!==void 0){let Z=U[H];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(B.location,Z);break;case 3:i.vertexAttrib3fv(B.location,Z);break;case 4:i.vertexAttrib4fv(B.location,Z);break;default:i.vertexAttrib1fv(B.location,Z)}}}}v()}function b(){E();for(let I in n){let F=n[I];for(let D in F){let P=F[D];for(let N in P){let R=P[N];for(let U in R)h(R[U].object),delete R[U];delete P[N]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;let F=n[I.id];for(let D in F){let P=F[D];for(let N in P){let R=P[N];for(let U in R)h(R[U].object),delete R[U];delete P[N]}}delete n[I.id]}function L(I){for(let F in n){let D=n[F];for(let P in D){let N=D[P];if(N[I.id]===void 0)continue;let R=N[I.id];for(let U in R)h(R[U].object),delete R[U];delete N[I.id]}}}function y(I){for(let F in n){let D=n[F],P=I.isInstancedMesh===!0?I.id:0,N=D[P];if(N!==void 0){for(let R in N){let U=N[R];for(let H in U)h(U[H].object),delete U[H];delete N[R]}delete D[P],Object.keys(D).length===0&&delete n[F]}}}function E(){S(),o=!0,r!==s&&(r=s,a(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:E,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function VM(i,e,t){let n;function s(c){n=c}function r(c,a){i.drawArrays(n,c,a),t.update(a,n,1)}function o(c,a,h){h!==0&&(i.drawArraysInstanced(n,c,a,h),t.update(a,n,h))}function l(c,a,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,a,0,h);let d=0;for(let f=0;f<h;f++)d+=a[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function WM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Un&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(L){let y=L===jt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Zn&&L!==Kn&&!y&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",h=c(a);h!==a&&(Je("WebGLRenderer:",a,"not supported, using",h,"instead."),a=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:a,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:_,maxSamples:b,samples:T}}function XM(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ui,l=new ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):a();else{let v=r?0:n,M=v*4,_=m.clippingState||null;c.value=_,_=h(p,d,M,f);for(let b=0;b!==M;++b)_[b]=t[b];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function a(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,p!==!0||g===null){let m=f+x*4,v=d.matrixWorldInverse;l.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,_=f;M!==x;++M,_+=4)o.copy(u[M]).applyMatrix4(v,l),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Vo=4,qM=6,YM=20,ZM=256,vl=new ss,lg=new pe,Af=null,Rf=0,Cf=0,Pf=!1,KM=new O,Yr=new O,Us=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:l=KM}=r;Af=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Cf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ug(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Af,Rf,Cf),this._renderer.xr.enabled=Pf,e.scissorTest=!1,Go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===Vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Af=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Cf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:jt,format:Un,colorSpace:Nn,depthBuffer:!1},s=cg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cg(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=jM(r)),this._blurMaterial=JM(r,e,t),this._ggxMaterial=$M(r,e,t)}return s}_compileMaterial(e){let t=new me(new xt,e);this._renderer.compile(t,vl)}_sceneToCubeUV(e,t,n,s,r){let c=new xn(90,1,t,n),a=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(lg),u.toneMapping=Hi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new me(new ot,new nt({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,m=!0):(g.color.copy(lg),m=!0);for(let M=0;M<6;M++){let _=M%3;_===0?(c.up.set(0,a[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):_===1?(c.up.set(0,0,a[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,a[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));let b=this._cubeSize;Go(s,_*b,M>2?b:0,b,b),u.setRenderTarget(s),m&&u.render(x,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ir||e.mapping===Vr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ug()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let l=r.uniforms;l.envMap.value=e;let c=this._cubeSize;Go(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,vl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[n];l.material=o;let c=o.uniforms,a=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(a*a-h*h),d=a*1.25,f=u*d,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-Vo?n-p+Vo:0),m=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=p-t,Go(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(l,vl),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,Go(e,g,m,3*x,2*x),s.setRenderTarget(e),s.render(l,vl)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let a=l.uniforms;a.envMap.value=e.texture,a.sigma.value=r,a.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Vo?s-this._lodMax+Vo:0),d=4*(this._cubeSize-h);Go(t,u,d,3*h,2*h),o.setRenderTarget(t),o.render(c,vl)}};function jM(i){let e=[],t=[],n=i,s=i-Vo+1+qM;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let l=1/(o-2),c=-l,a=1+l,h=[c,c,a,c,a,a,c,c,a,a,c,a],u=6,d=6,f=3,p=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let m=0;m<u;m++){let v=m%3*2/3-1,M=m>2?0:-1,_=[v,M,0,v+2/3,M,0,v+2/3,M+1,0,v,M,0,v+2/3,M+1,0,v,M+1,0];p.set(_,f*d*m);for(let b=0;b<d;b++){let T=h[b*2]*2-1,L=h[b*2+1]*2-1;m===0?Yr.set(1,L,T):m===1?Yr.set(-T,1,-L):m===2?Yr.set(-T,L,1):m===3?Yr.set(-1,L,-T):m===4?Yr.set(-T,-1,L):Yr.set(T,L,-1),Yr.toArray(x,(m*d+b)*f)}}let g=new xt;g.setAttribute("position",new ct(p,f)),g.setAttribute("outputDirection",new ct(x,f)),t.push(new me(g,null)),n>Vo&&n--}return{lodMeshes:t,sizeLods:e}}function cg(i,e,t){let n=new tn(i,e,t);return n.texture.mapping=cl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Go(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function $M(i,e,t){return new St({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ZM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:du(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function JM(i,e,t){return new St({name:"SphericalGaussianBlur",defines:{SAMPLES:YM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:du(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function hg(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function ug(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function du(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var hu=class extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Na(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ot(5,5,5),r=new St({name:"CubemapFromEquirect",uniforms:qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:fn});r.uniforms.tEquirect.value=t;let o=new me(s,r),l=t.minFilter;return t.minFilter===di&&(t.minFilter=Yt),new ph(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function QM(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Wr||f===yh)if(e.has(d)){let p=e.get(d).texture;return l(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new hu(p.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",a),l(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,p=f===Wr||f===yh,x=f===ir||f===Vr;if(p||x){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Us(i)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let v=d.image;return p&&v&&v.height>0||x&&v&&c(v)?(n===null&&(n=new Us(i)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function l(d,f){return f===Wr?d.mapping=ir:f===yh&&(d.mapping=Vr),d}function c(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function a(d){let f=d.target;f.removeEventListener("dispose",a);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function eb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&br("WebGLRenderer: "+n+" extension not supported."),s}}}function tb(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function l(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function a(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(p===void 0)return;if(f!==null){let v=f.array;x=f.version;for(let M=0,_=v.length;M<_;M+=3){let b=v[M+0],T=v[M+1],L=v[M+2];d.push(b,T,T,L,L,b)}}else{let v=p.array;x=p.version;for(let M=0,_=v.length/3-1;M<_;M+=3){let b=M+0,T=M+1,L=M+2;d.push(b,T,T,L,L,b)}}let g=new(p.count>=65535?Ia:Pa)(d,1);g.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&a(u)}else a(u);return r.get(u)}return{get:l,update:c,getWireframeAttribute:h}}function nb(i,e,t){let n;function s(u){n=u}let r,o;function l(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function a(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];t.update(x,n,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=a,this.renderMultiDraw=h}function ib(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:st("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function sb(i,e,t){let n=new WeakMap,s=new Pt;function r(o,l,c){let a=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(l);if(d===void 0||d.count!==u){let E=function(){L.dispose(),n.delete(l),l.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=l.morphAttributes.position!==void 0,p=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],v=l.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let _=l.attributes.position.count*M,b=1;_>e.maxTextureSize&&(b=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*b*4*u),L=new Aa(T,_,b,u);L.type=Kn,L.needsUpdate=!0;let y=M*4;for(let S=0;S<u;S++){let I=g[S],F=m[S],D=v[S],P=_*b*4*S;for(let N=0;N<I.count;N++){let R=N*y;f===!0&&(s.fromBufferAttribute(I,N),T[P+R+0]=s.x,T[P+R+1]=s.y,T[P+R+2]=s.z,T[P+R+3]=0),p===!0&&(s.fromBufferAttribute(F,N),T[P+R+4]=s.x,T[P+R+5]=s.y,T[P+R+6]=s.z,T[P+R+7]=0),x===!0&&(s.fromBufferAttribute(D,N),T[P+R+8]=s.x,T[P+R+9]=s.y,T[P+R+10]=s.z,T[P+R+11]=D.itemSize===4?s.w:1)}}d={count:u,texture:L,size:new de(_,b)},n.set(l,d),l.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<a.length;x++)f+=a[x];let p=l.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",a)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function rb(i,e,t,n,s){let r=new WeakMap;function o(a){let h=s.render.frame,u=a.geometry,d=e.get(a,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),a.isInstancedMesh&&(a.hasEventListener("dispose",c)===!1&&a.addEventListener("dispose",c),r.get(a)!==h&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,h))),a.isSkinnedMesh){let f=a.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function l(){r=new WeakMap}function c(a){let h=a.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}var ob={[il]:"LINEAR_TONE_MAPPING",[sl]:"REINHARD_TONE_MAPPING",[rl]:"CINEON_TONE_MAPPING",[Gr]:"ACES_FILMIC_TONE_MAPPING",[al]:"AGX_TONE_MAPPING",[ll]:"NEUTRAL_TONE_MAPPING",[ol]:"CUSTOM_TONE_MAPPING"};function ab(i,e,t,n,s,r){let o=new tn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,a=new xt;a.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ut([0,2,0,0,2,0],2));let h=new Oo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new me(a,h),d=new ss(-1,1,1,-1,0,1),f=null,p=null,x=!1,g,m=null,v=[],M=!1;this.setSize=function(_,b){o.setSize(_,b),l!==null&&l.setSize(_,b),c!==null&&c.setSize(_,b);for(let T=0;T<v.length;T++){let L=v[T];L.setSize&&L.setSize(_,b)}},this.setEffects=function(_){v=_,M=v.length>0&&v[0].isRenderPass===!0;let b=o.width,T=o.height;v.length>0&&l===null&&(l=new tn(b,T,{type:jt,depthBuffer:!1,stencilBuffer:!1}),c=new tn(b,T,{type:jt,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<v.length;L++){let y=v[L];y.setSize&&y.setSize(b,T)}},this.begin=function(_,b){if(x||_.toneMapping===Hi&&v.length===0)return!1;if(m=b,b!==null){let T=b.width,L=b.height;(o.width!==T||o.height!==L)&&this.setSize(T,L)}return M===!1&&_.setRenderTarget(o),g=_.toneMapping,_.toneMapping=Hi,!0},this.hasRenderPass=function(){return M},this.end=function(_,b){_.toneMapping=g,x=!0;let T=o,L=l;for(let y=0;y<v.length;y++){let E=v[y];E.enabled!==!1&&(E.render(_,L,T,b),E.needsSwap!==!1&&(T=L,L=L===l?c:l))}if(f!==_.outputColorSpace||p!==_.toneMapping){f=_.outputColorSpace,p=_.toneMapping,h.defines={},ft.getTransfer(f)===Dt&&(h.defines.SRGB_TRANSFER="");let y=ob[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(m),_.render(u,d),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),a.dispose(),h.dispose()}}var Ig=new bn,Df=new es(1,1),Lg=new Aa,Dg=new jc,Ng=new Na,dg=[],fg=[],pg=new Float32Array(16),mg=new Float32Array(9),gg=new Float32Array(4);function Xo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=dg[s];if(r===void 0&&(r=new Float32Array(s),dg[s]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(r,l)}return r}function wn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function An(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fu(i,e){let t=fg[e];t===void 0&&(t=new Int32Array(e),fg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function lb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function cb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;i.uniform2fv(this.addr,e),An(t,e)}}function hb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wn(t,e))return;i.uniform3fv(this.addr,e),An(t,e)}}function ub(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;i.uniform4fv(this.addr,e),An(t,e)}}function db(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),An(t,e)}else{if(wn(t,n))return;gg.set(n),i.uniformMatrix2fv(this.addr,!1,gg),An(t,n)}}function fb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),An(t,e)}else{if(wn(t,n))return;mg.set(n),i.uniformMatrix3fv(this.addr,!1,mg),An(t,n)}}function pb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),An(t,e)}else{if(wn(t,n))return;pg.set(n),i.uniformMatrix4fv(this.addr,!1,pg),An(t,n)}}function mb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function gb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;i.uniform2iv(this.addr,e),An(t,e)}}function xb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;i.uniform3iv(this.addr,e),An(t,e)}}function vb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;i.uniform4iv(this.addr,e),An(t,e)}}function yb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function _b(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;i.uniform2uiv(this.addr,e),An(t,e)}}function Mb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;i.uniform3uiv(this.addr,e),An(t,e)}}function bb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;i.uniform4uiv(this.addr,e),An(t,e)}}function Sb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Df.compareFunction=t.isReversedDepthBuffer()?au:ou,r=Df):r=Ig,t.setTexture2D(e||r,s)}function Eb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Dg,s)}function Tb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ng,s)}function wb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Lg,s)}function Ab(i){switch(i){case 5126:return lb;case 35664:return cb;case 35665:return hb;case 35666:return ub;case 35674:return db;case 35675:return fb;case 35676:return pb;case 5124:case 35670:return mb;case 35667:case 35671:return gb;case 35668:case 35672:return xb;case 35669:case 35673:return vb;case 5125:return yb;case 36294:return _b;case 36295:return Mb;case 36296:return bb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return Eb;case 35680:case 36300:case 36308:case 36293:return Tb;case 36289:case 36303:case 36311:case 36292:return wb}}function Rb(i,e){i.uniform1fv(this.addr,e)}function Cb(i,e){let t=Xo(e,this.size,2);i.uniform2fv(this.addr,t)}function Pb(i,e){let t=Xo(e,this.size,3);i.uniform3fv(this.addr,t)}function Ib(i,e){let t=Xo(e,this.size,4);i.uniform4fv(this.addr,t)}function Lb(i,e){let t=Xo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Db(i,e){let t=Xo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Nb(i,e){let t=Xo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ub(i,e){i.uniform1iv(this.addr,e)}function Ob(i,e){i.uniform2iv(this.addr,e)}function Bb(i,e){i.uniform3iv(this.addr,e)}function Fb(i,e){i.uniform4iv(this.addr,e)}function kb(i,e){i.uniform1uiv(this.addr,e)}function zb(i,e){i.uniform2uiv(this.addr,e)}function Hb(i,e){i.uniform3uiv(this.addr,e)}function Gb(i,e){i.uniform4uiv(this.addr,e)}function Vb(i,e,t){let n=this.cache,s=e.length,r=fu(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Df:o=Ig;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||o,r[l])}function Wb(i,e,t){let n=this.cache,s=e.length,r=fu(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Dg,r[o])}function Xb(i,e,t){let n=this.cache,s=e.length,r=fu(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ng,r[o])}function qb(i,e,t){let n=this.cache,s=e.length,r=fu(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Lg,r[o])}function Yb(i){switch(i){case 5126:return Rb;case 35664:return Cb;case 35665:return Pb;case 35666:return Ib;case 35674:return Lb;case 35675:return Db;case 35676:return Nb;case 5124:case 35670:return Ub;case 35667:case 35671:return Ob;case 35668:case 35672:return Bb;case 35669:case 35673:return Fb;case 5125:return kb;case 36294:return zb;case 36295:return Hb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return Vb;case 35679:case 36299:case 36307:return Wb;case 35680:case 36300:case 36308:case 36293:return Xb;case 36289:case 36303:case 36311:case 36292:return qb}}var Nf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ab(t.type)}},Uf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yb(t.type)}},Of=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},If=/(\w+)(\])?(\[|\.)?/g;function xg(i,e){i.seq.push(e),i.map[e.id]=e}function Zb(i,e,t){let n=i.name,s=n.length;for(If.lastIndex=0;;){let r=If.exec(n),o=If.lastIndex,l=r[1],c=r[2]==="]",a=r[3];if(c&&(l=l|0),a===void 0||a==="["&&o+2===s){xg(t,a===void 0?new Nf(l,i,e):new Uf(l,i,e));break}else{let u=t.map[l];u===void 0&&(u=new Of(l),xg(t,u)),t=u}}}var Wo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);Zb(l,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let l=t[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function vg(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Kb=37297,jb=0;function $b(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}var yg=new ht;function Jb(i){ft._getMatrix(yg,ft.workingColorSpace,i);let e=`mat3( ${yg.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(i)){case Ta:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _g(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+$b(i.getShaderSource(e),l)}else return r}function Qb(i,e){let t=Jb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var eS={[il]:"Linear",[sl]:"Reinhard",[rl]:"Cineon",[Gr]:"ACESFilmic",[al]:"AgX",[ll]:"Neutral",[ol]:"Custom"};function tS(i,e){let t=eS[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var cu=new O;function nS(){ft.getLuminanceCoefficients(cu);let i=cu.x.toFixed(4),e=cu.y.toFixed(4),t=cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_l).join(`
`)}function sS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function _l(i){return i!==""}function Mg(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var oS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bf(i){return i.replace(oS,lS)}var aS=new Map;function lS(i,e){let t=vt[e];if(t===void 0){let n=aS.get(e);if(n!==void 0)t=vt[n],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Bf(t)}var cS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sg(i){return i.replace(cS,hS)}function hS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eg(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var uS={[zr]:"SHADOWMAP_TYPE_PCF",[Fo]:"SHADOWMAP_TYPE_VSM"};function dS(i){return uS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var fS={[ir]:"ENVMAP_TYPE_CUBE",[Vr]:"ENVMAP_TYPE_CUBE",[cl]:"ENVMAP_TYPE_CUBE_UV"};function pS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":fS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var mS={[Vr]:"ENVMAP_MODE_REFRACTION"};function gS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":mS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xS={[cf]:"ENVMAP_BLENDING_MULTIPLY",[Um]:"ENVMAP_BLENDING_MIX",[Om]:"ENVMAP_BLENDING_ADD"};function vS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":xS[i.combine]||"ENVMAP_BLENDING_NONE"}function yS(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _S(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,l=t.fragmentShader,c=dS(t),a=pS(t),h=gS(t),u=vS(t),d=yS(t),f=iS(t),p=sS(r),x=s.createProgram(),g,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(_l).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(_l).join(`
`),m.length>0&&(m+=`
`)):(g=[Eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_l).join(`
`),m=[Eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+a:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?vt.tonemapping_pars_fragment:"",t.toneMapping!==Hi?tS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,Qb("linearToOutputTexel",t.outputColorSpace),nS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_l).join(`
`)),o=Bf(o),o=Mg(o,t),o=bg(o,t),l=Bf(l),l=Mg(l,t),l=bg(l,t),o=Sg(o),l=Sg(l),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===yf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=v+g+o,_=v+m+l,b=vg(s,s.VERTEX_SHADER,M),T=vg(s,s.FRAGMENT_SHADER,_);s.attachShader(x,b),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(I){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",D=s.getShaderInfoLog(b)||"",P=s.getShaderInfoLog(T)||"",N=F.trim(),R=D.trim(),U=P.trim(),H=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,T);else{let G=_g(s,b,"vertex"),Z=_g(s,T,"fragment");st("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+G+`
`+Z)}else N!==""?Je("WebGLProgram: Program Info Log:",N):(R===""||U==="")&&(B=!1);B&&(I.diagnostics={runnable:H,programLog:N,vertexShader:{log:R,prefix:g},fragmentShader:{log:U,prefix:m}})}s.deleteShader(b),s.deleteShader(T),y=new Wo(s,x),E=rS(s,x)}let y;this.getUniforms=function(){return y===void 0&&L(this),y};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,Kb)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=T,this}var MS=0,Ff=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new kf(e),t.set(e,n)),n}},kf=class{constructor(e){this.id=MS++,this.code=e,this.usedTimes=0}};function bS(i){return i===rr||i===pl||i===ml}function SS(i,e,t,n,s,r){let o=new Ra,l=new Ff,c=new Set,a=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,E,S,I,F,D){let P=I.fog,N=F.geometry,R=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,H=e.get(y.envMap||R,U),B=H&&H.mapping===cl?H.image.height:null,G=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&Je("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,se=Z!==void 0?Z.length:0,ce=0;N.morphAttributes.position!==void 0&&(ce=1),N.morphAttributes.normal!==void 0&&(ce=2),N.morphAttributes.color!==void 0&&(ce=3);let j,le,Ie,$;if(G){let Zt=cs[G];j=Zt.vertexShader,le=Zt.fragmentShader}else{j=y.vertexShader,le=y.fragmentShader;let Zt=l.getVertexShaderStage(y),Ut=l.getFragmentShaderStage(y);l.update(y,Zt,Ut),Ie=Zt.id,$=Ut.id}let oe=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),qe=F.isInstancedMesh===!0,te=F.isBatchedMesh===!0,ve=!!y.map,Te=!!y.matcap,ne=!!H,fe=!!y.aoMap,ye=!!y.lightMap,ge=!!y.bumpMap&&y.wireframe===!1,Se=!!y.normalMap,Ve=!!y.displacementMap,He=!!y.emissiveMap,tt=!!y.metalnessMap,it=!!y.roughnessMap,z=y.anisotropy>0,bt=y.clearcoat>0,at=y.dispersion>0,k=y.retroreflectivity>0,w=y.iridescence>0,Y=y.sheen>0,K=y.transmission>0,ee=z&&!!y.anisotropyMap,be=bt&&!!y.clearcoatMap,Pe=bt&&!!y.clearcoatNormalMap,ae=bt&&!!y.clearcoatRoughnessMap,he=w&&!!y.iridescenceMap,Le=w&&!!y.iridescenceThicknessMap,we=Y&&!!y.sheenColorMap,_e=Y&&!!y.sheenRoughnessMap,Me=!!y.specularMap,Ne=!!y.specularColorMap,We=!!y.specularIntensityMap,rt=K&&!!y.transmissionMap,W=K&&!!y.thicknessMap,De=!!y.gradientMap,ue=!!y.alphaMap,Re=y.alphaTest>0,Ue=!!y.alphaHash,xe=!!y.extensions,et=Hi;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(et=i.toneMapping);let Ye={shaderID:G,shaderType:y.type,shaderName:y.name,vertexShader:j,fragmentShader:le,defines:y.defines,customVertexShaderID:Ie,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:te,batchingColor:te&&F._colorsTexture!==null,instancing:qe,instancingColor:qe&&F.instanceColor!==null,instancingMorph:qe&&F.morphTexture!==null,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ve,matcap:Te,envMap:ne,envMapMode:ne&&H.mapping,envMapCubeUVHeight:B,aoMap:fe,lightMap:ye,bumpMap:ge,normalMap:Se,displacementMap:Ve,emissiveMap:He,normalMapObjectSpace:Se&&y.normalMapType===Gm,normalMapTangentSpace:Se&&y.normalMapType===xl,packedNormalMap:Se&&y.normalMapType===xl&&bS(y.normalMap.format),metalnessMap:tt,roughnessMap:it,anisotropy:z,anisotropyMap:ee,clearcoat:bt,clearcoatMap:be,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ae,dispersion:at,retroreflection:k,iridescence:w,iridescenceMap:he,iridescenceThicknessMap:Le,sheen:Y,sheenColorMap:we,sheenRoughnessMap:_e,specularMap:Me,specularColorMap:Ne,specularIntensityMap:We,transmission:K,transmissionMap:rt,thicknessMap:W,gradientMap:De,opaque:y.transparent===!1&&y.blending===os&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:Re,alphaHash:Ue,combine:y.combine,mapUv:ve&&p(y.map.channel),aoMapUv:fe&&p(y.aoMap.channel),lightMapUv:ye&&p(y.lightMap.channel),bumpMapUv:ge&&p(y.bumpMap.channel),normalMapUv:Se&&p(y.normalMap.channel),displacementMapUv:Ve&&p(y.displacementMap.channel),emissiveMapUv:He&&p(y.emissiveMap.channel),metalnessMapUv:tt&&p(y.metalnessMap.channel),roughnessMapUv:it&&p(y.roughnessMap.channel),anisotropyMapUv:ee&&p(y.anisotropyMap.channel),clearcoatMapUv:be&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:we&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:_e&&p(y.sheenRoughnessMap.channel),specularMapUv:Me&&p(y.specularMap.channel),specularColorMapUv:Ne&&p(y.specularColorMap.channel),specularIntensityMapUv:We&&p(y.specularIntensityMap.channel),transmissionMapUv:rt&&p(y.transmissionMap.channel),thicknessMapUv:W&&p(y.thicknessMap.channel),alphaMapUv:ue&&p(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Se||z),vertexNormals:!!N.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(ve||ue),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||N.attributes.normal===void 0&&Se===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ae,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ce,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:et,decodeVideoTexture:ve&&y.map.isVideoTexture===!0&&ft.getTransfer(y.map.colorSpace)===Dt,decodeVideoTextureEmissive:He&&y.emissiveMap.isVideoTexture===!0&&ft.getTransfer(y.emissiveMap.colorSpace)===Dt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===It,flipSided:y.side===Tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:xe&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&y.extensions.multiDraw===!0||te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function g(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let S in y.defines)E.push(S),E.push(y.defines[S]);return y.isRawShaderMaterial===!1&&(m(E,y),v(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function m(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function v(y,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function M(y){let E=f[y.type],S;if(E){let I=cs[E];S=Bn.clone(I.uniforms)}else S=y.uniforms;return S}function _(y,E){let S=h.get(E);return S!==void 0?++S.usedTimes:(S=new _S(i,E,y,s),a.push(S),h.set(E,S)),S}function b(y){if(--y.usedTimes===0){let E=a.indexOf(y);a[E]=a[a.length-1],a.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){l.remove(y)}function L(){l.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:M,acquireProgram:_,releaseProgram:b,releaseShaderCache:T,programs:a,dispose:L}}function ES(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,c){i.get(o)[l]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function TS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Tg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wg(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function l(d,f,p,x,g,m){let v=i[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},i[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=p,v.materialVariant=o(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=g,v.group=m),e++,v}function c(d,f,p,x,g,m,v){v.reversedDepth===!0&&(g=-g);let M=l(d,f,p,x,g,m);p.transmission>0?n.push(M):p.transparent===!0?s.push(M):t.push(M)}function a(d,f,p,x,g,m){let v=l(d,f,p,x,g,m);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||TS),n.length>1&&n.sort(f||Tg),s.length>1&&s.sort(f||Tg)}function u(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:a,finish:u,sort:h}}function wS(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new wg,i.set(n,[o])):s>=r.length?(o=new wg,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function AS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new pe};break;case"SpotLight":t={position:new O,direction:new O,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function RS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var CS=0;function PS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function IS(i){let e=new AS,t=RS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)n.probe.push(new O);let s=new O,r=new je,o=new je;function l(a){let h=0,u=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,v=0,M=0,_=0,b=0,T=0,L=0,y=0,E=0,S=0;a.sort(PS);for(let F=0,D=a.length;F<D;F++){let P=a[F],N=P.color,R=P.intensity,U=P.distance,H=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===rr?H=P.shadow.map.texture:H=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=N.r*R,u+=N.g*R,d+=N.b*R;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],R);S++}else if(P.isSunLight){let B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let G=P.shadow,Z=t.get(P);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[p]=Z,n.sunShadowMap[p]=H;let se=G.getViewportCount();for(let ce=0;ce<se;ce++)n.sunShadowMatrix[x+ce]=G.getMatrix(ce),n.sunShadowCascade[x+ce]=G._cascadeData[ce];x+=se,p++}n.sun[f]=B,f++}else if(P.isDirectionalLight){let B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let G=P.shadow,Z=t.get(P);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,n.directionalShadow[g]=Z,n.directionalShadowMap[g]=H,n.directionalShadowMatrix[g]=P.shadow.matrix,b++}n.directional[g]=B,g++}else if(P.isSpotLight){let B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(N).multiplyScalar(R),B.distance=U,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[v]=B;let G=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,G.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[v]=G.matrix,P.castShadow){let Z=t.get(P);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=H,L++}v++}else if(P.isRectAreaLight){let B=e.get(P);B.color.copy(N).multiplyScalar(R),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[M]=B,M++}else if(P.isPointLight){let B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){let G=P.shadow,Z=t.get(P);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,Z.shadowCameraNear=G.camera.near,Z.shadowCameraFar=G.camera.far,n.pointShadow[m]=Z,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=P.shadow.matrix,T++}n.point[m]=B,m++}else if(P.isHemisphereLight){let B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(R),B.groundColor.copy(P.groundColor).multiplyScalar(R),n.hemi[_]=B,_++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Oe.LTC_FLOAT_1,n.rectAreaLTC2=Oe.LTC_FLOAT_2):(n.rectAreaLTC1=Oe.LTC_HALF_1,n.rectAreaLTC2=Oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.sunLength!==f||I.directionalLength!==g||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==M||I.hemiLength!==_||I.numSunShadows!==p||I.numDirectionalShadows!==b||I.numPointShadows!==T||I.numSpotShadows!==L||I.numSpotMaps!==y||I.numLightProbes!==S)&&(n.sun.length=f,n.directional.length=g,n.spot.length=v,n.rectArea.length=M,n.point.length=m,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=S,I.sunLength=f,I.directionalLength=g,I.pointLength=m,I.spotLength=v,I.rectAreaLength=M,I.hemiLength=_,I.numSunShadows=p,I.numDirectionalShadows=b,I.numPointShadows=T,I.numSpotShadows=L,I.numSpotMaps=y,I.numLightProbes=S,n.version=CS++)}function c(a,h){let u=0,d=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let v=0,M=a.length;v<M;v++){let _=a[v];if(_.isSunLight){let b=n.sun[u];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(m),u++}else if(_.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(_.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:l,setupView:c,state:n}}function Ag(i){let e=new IS(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function o(d){t.push(d)}function l(d){n.push(d)}function c(d){s.push(d)}function a(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:a,setupLightsView:h,pushLight:o,pushShadow:l,pushLightProbeGrid:c}}function LS(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),l;return o===void 0?(l=new Ag(i),e.set(s,[l])):r>=o.length?(l=new Ag(i),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var DS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NS=`uniform sampler2D shadow_pass;
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
}`,US=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],OS=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Rg=new je,yl=new O,Lf=new O;function BS(i,e,t){let n=new Po,s=new de,r=new de,o=new Pt,l=new oh,c=new ah,a={},h=t.maxTextureSize,u={[rs]:Tn,[Tn]:rs,[It]:It},d=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:DS,fragmentShader:NS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new xt;p.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new me(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zr;let m=this.type;this.render=function(T,L,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===_m&&(Je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zr);let E=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending(fn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let D=m!==this.type;D&&L.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(N=>N.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,N=T.length;P<N;P++){let R=T[P],U=R.shadow;if(U===void 0){Je("WebGLShadowMap:",R,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let H=U.getFrameExtents();s.multiply(H),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/H.x),s.x=r.x*H.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/H.y),s.y=r.y*H.y,U.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=B,U.map===null||D===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Fo){if(R.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new tn(s.x,s.y,{format:rr,type:jt,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),U.map.texture.name=R.name+".shadowMap",U.map.depthTexture=new es(s.x,s.y,Kn),U.map.depthTexture.name=R.name+".shadowMapDepth",U.map.depthTexture.format=Qi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=nn,U.map.depthTexture.magFilter=nn}else R.isPointLight?(U.map=new hu(s.x),U.map.depthTexture=new Qc(s.x,Gi)):(U.map=new tn(s.x,s.y),U.map.depthTexture=new es(s.x,s.y,Gi)),U.map.depthTexture.name=R.name+".shadowMap",U.map.depthTexture.format=Qi,this.type===zr?(U.map.depthTexture.compareFunction=B?au:ou,U.map.depthTexture.minFilter=Yt,U.map.depthTexture.magFilter=Yt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=nn,U.map.depthTexture.magFilter=nn);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==s.x||U.map.height!==s.y)&&U.map.setSize(s.x,s.y);let G=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();R.isPointLight!==!0&&U.updateMatrices(R,y);for(let Z=0;Z<G;Z++){let se=U.getCamera(Z);if(R.isPointLight){let ce=U.camera,j=U.matrix,le=R.distance||ce.far;le!==ce.far&&(ce.far=le,ce.updateProjectionMatrix()),yl.setFromMatrixPosition(R.matrixWorld),ce.position.copy(yl),Lf.copy(ce.position),Lf.add(US[Z]),ce.up.copy(OS[Z]),ce.lookAt(Lf),ce.updateMatrixWorld(),j.makeTranslation(-yl.x,-yl.y,-yl.z),Rg.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Rg,ce.coordinateSystem,ce.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(U.map),i.clear());let ce=U.getViewport(Z);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),F.viewport(o)}n=U.getFrustum(Z),_(L,y,se,R,this.type)}U.isPointLightShadow!==!0&&this.type===Fo&&v(U,y),U.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(E,S,I)};function v(T,L){let y=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new tn(s.x,s.y,{format:rr,type:jt}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(L,null,y,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(L,null,y,f,x,null)}function M(T,L,y,E){let S=null,I=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)S=I;else if(S=y.isPointLight===!0?c:l,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let F=S.uuid,D=L.uuid,P=a[F];P===void 0&&(P={},a[F]=P);let N=P[D];N===void 0&&(N=S.clone(),P[D]=N,L.addEventListener("dispose",b)),S=N}if(S.visible=L.visible,S.wireframe=L.wireframe,E===Fo?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:u[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,y.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let F=i.properties.get(S);F.light=y}return S}function _(T,L,y,E,S){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Fo)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let D=e.update(T),P=T.material;if(Array.isArray(P)){let N=D.groups;for(let R=0,U=N.length;R<U;R++){let H=N[R],B=P[H.materialIndex];if(B&&B.visible){let G=M(T,B,E,S);T.onBeforeShadow(i,T,L,y,D,G,H),i.renderBufferDirect(y,null,D,G,T,H),T.onAfterShadow(i,T,L,y,D,G,H)}}}else if(P.visible){let N=M(T,P,E,S);T.onBeforeShadow(i,T,L,y,D,N,null),i.renderBufferDirect(y,null,D,N,T,null),T.onAfterShadow(i,T,L,y,D,N,null)}}let F=T.children;for(let D=0,P=F.length;D<P;D++)_(F[D],L,y,E,S)}function b(T){T.target.removeEventListener("dispose",b);for(let y in a){let E=a[y],S=T.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function FS(i,e){function t(){let W=!1,De=new Pt,ue=null,Re=new Pt(0,0,0,0);return{setMask:function(Ue){ue!==Ue&&!W&&(i.colorMask(Ue,Ue,Ue,Ue),ue=Ue)},setLocked:function(Ue){W=Ue},setClear:function(Ue,xe,et,Ye,Zt){Zt===!0&&(Ue*=Ye,xe*=Ye,et*=Ye),De.set(Ue,xe,et,Ye),Re.equals(De)===!1&&(i.clearColor(Ue,xe,et,Ye),Re.copy(De))},reset:function(){W=!1,ue=null,Re.set(-1,0,0,0)}}}function n(){let W=!1,De=!1,ue=null,Re=null,Ue=null;return{setReversed:function(xe){if(De!==xe){let et=e.get("EXT_clip_control");xe?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),De=xe;let Ye=Ue;Ue=null,this.setClear(Ye)}},getReversed:function(){return De},setTest:function(xe){xe?oe(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(xe){ue!==xe&&!W&&(i.depthMask(xe),ue=xe)},setFunc:function(xe){if(De&&(xe=Qm[xe]),Re!==xe){switch(xe){case Hc:i.depthFunc(i.NEVER);break;case Gc:i.depthFunc(i.ALWAYS);break;case Vc:i.depthFunc(i.LESS);break;case So:i.depthFunc(i.LEQUAL);break;case Wc:i.depthFunc(i.EQUAL);break;case Xc:i.depthFunc(i.GEQUAL);break;case qc:i.depthFunc(i.GREATER);break;case Yc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=xe}},setLocked:function(xe){W=xe},setClear:function(xe){Ue!==xe&&(Ue=xe,De&&(xe=1-xe),i.clearDepth(xe))},reset:function(){W=!1,ue=null,Re=null,Ue=null,De=!1}}}function s(){let W=!1,De=null,ue=null,Re=null,Ue=null,xe=null,et=null,Ye=null,Zt=null;return{setTest:function(Ut){W||(Ut?oe(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(Ut){De!==Ut&&!W&&(i.stencilMask(Ut),De=Ut)},setFunc:function(Ut,Ii,Zi){(ue!==Ut||Re!==Ii||Ue!==Zi)&&(i.stencilFunc(Ut,Ii,Zi),ue=Ut,Re=Ii,Ue=Zi)},setOp:function(Ut,Ii,Zi){(xe!==Ut||et!==Ii||Ye!==Zi)&&(i.stencilOp(Ut,Ii,Zi),xe=Ut,et=Ii,Ye=Zi)},setLocked:function(Ut){W=Ut},setClear:function(Ut){Zt!==Ut&&(i.clearStencil(Ut),Zt=Ut)},reset:function(){W=!1,De=null,ue=null,Re=null,Ue=null,xe=null,et=null,Ye=null,Zt=null}}}let r=new t,o=new n,l=new s,c=new WeakMap,a=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,v=null,M=null,_=null,b=null,T=null,L=null,y=new pe(0,0,0),E=0,S=!1,I=null,F=null,D=null,P=null,N=null,R=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,H=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(B)[1]),U=H>=1):B.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),U=H>=2);let G=null,Z={},se=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),j=new Pt().fromArray(se),le=new Pt().fromArray(ce);function Ie(W,De,ue,Re){let Ue=new Uint8Array(4),xe=i.createTexture();i.bindTexture(W,xe),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let et=0;et<ue;et++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(De,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(De+et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return xe}let $={};$[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),oe(i.DEPTH_TEST),o.setFunc(So),ge(!1),Se(sf),oe(i.CULL_FACE),fe(fn);function oe(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function Ae(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function qe(W,De){return d[W]!==De?(i.bindFramebuffer(W,De),d[W]=De,W===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=De),W===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=De),!0):!1}function te(W,De){let ue=p,Re=!1;if(W){ue=f.get(De),ue===void 0&&(ue=[],f.set(De,ue));let Ue=W.textures;if(ue.length!==Ue.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,et=Ue.length;xe<et;xe++)ue[xe]=i.COLOR_ATTACHMENT0+xe;ue.length=Ue.length,Re=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,Re=!0);Re&&i.drawBuffers(ue)}function ve(W){return x!==W?(i.useProgram(W),x=W,!0):!1}let Te={[Ti]:i.FUNC_ADD,[Mm]:i.FUNC_SUBTRACT,[bm]:i.FUNC_REVERSE_SUBTRACT};Te[Sm]=i.MIN,Te[Em]=i.MAX;let ne={[Hr]:i.ZERO,[Tm]:i.ONE,[wm]:i.SRC_COLOR,[af]:i.SRC_ALPHA,[Pm]:i.SRC_ALPHA_SATURATE,[nl]:i.DST_COLOR,[tl]:i.DST_ALPHA,[Am]:i.ONE_MINUS_SRC_COLOR,[lf]:i.ONE_MINUS_SRC_ALPHA,[Cm]:i.ONE_MINUS_DST_COLOR,[Rm]:i.ONE_MINUS_DST_ALPHA,[Im]:i.CONSTANT_COLOR,[Lm]:i.ONE_MINUS_CONSTANT_COLOR,[Dm]:i.CONSTANT_ALPHA,[Nm]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(W,De,ue,Re,Ue,xe,et,Ye,Zt,Ut){if(W===fn){g===!0&&(Ae(i.BLEND),g=!1);return}if(g===!1&&(oe(i.BLEND),g=!0),W!==vh){if(W!==m||Ut!==S){if((v!==Ti||b!==Ti)&&(i.blendEquation(i.FUNC_ADD),v=Ti,b=Ti),Ut)switch(W){case os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case an:i.blendFunc(i.ONE,i.ONE);break;case rf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case of:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:st("WebGLState: Invalid blending: ",W);break}else switch(W){case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case an:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case rf:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case of:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",W);break}M=null,_=null,T=null,L=null,y.set(0,0,0),E=0,m=W,S=Ut}return}Ue=Ue||De,xe=xe||ue,et=et||Re,(De!==v||Ue!==b)&&(i.blendEquationSeparate(Te[De],Te[Ue]),v=De,b=Ue),(ue!==M||Re!==_||xe!==T||et!==L)&&(i.blendFuncSeparate(ne[ue],ne[Re],ne[xe],ne[et]),M=ue,_=Re,T=xe,L=et),(Ye.equals(y)===!1||Zt!==E)&&(i.blendColor(Ye.r,Ye.g,Ye.b,Zt),y.copy(Ye),E=Zt),m=W,S=!1}function ye(W,De){W.side===It?Ae(i.CULL_FACE):oe(i.CULL_FACE);let ue=W.side===Tn;De&&(ue=!ue),ge(ue),W.blending===os&&W.transparent===!1?fe(fn):fe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let Re=W.stencilWrite;l.setTest(Re),Re&&(l.setMask(W.stencilWriteMask),l.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),l.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),He(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function ge(W){I!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),I=W)}function Se(W){W!==vm?(oe(i.CULL_FACE),W!==F&&(W===sf?i.cullFace(i.BACK):W===ym?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),F=W}function Ve(W){W!==D&&(U&&i.lineWidth(W),D=W)}function He(W,De,ue){W?(oe(i.POLYGON_OFFSET_FILL),(P!==De||N!==ue)&&(P=De,N=ue,o.getReversed()&&(De=-De),i.polygonOffset(De,ue))):Ae(i.POLYGON_OFFSET_FILL)}function tt(W){W?oe(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function it(W){W===void 0&&(W=i.TEXTURE0+R-1),G!==W&&(i.activeTexture(W),G=W)}function z(W,De,ue){ue===void 0&&(G===null?ue=i.TEXTURE0+R-1:ue=G);let Re=Z[ue];Re===void 0&&(Re={type:void 0,texture:void 0},Z[ue]=Re),(Re.type!==W||Re.texture!==De)&&(G!==ue&&(i.activeTexture(ue),G=ue),i.bindTexture(W,De||$[W]),Re.type=W,Re.texture=De)}function bt(){let W=Z[G];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function at(){try{i.compressedTexImage2D(...arguments)}catch(W){st("WebGLState:",W)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(W){st("WebGLState:",W)}}function w(){try{i.texSubImage2D(...arguments)}catch(W){st("WebGLState:",W)}}function Y(){try{i.texSubImage3D(...arguments)}catch(W){st("WebGLState:",W)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(W){st("WebGLState:",W)}}function ee(){try{i.compressedTexSubImage3D(...arguments)}catch(W){st("WebGLState:",W)}}function be(){try{i.texStorage2D(...arguments)}catch(W){st("WebGLState:",W)}}function Pe(){try{i.texStorage3D(...arguments)}catch(W){st("WebGLState:",W)}}function ae(){try{i.texImage2D(...arguments)}catch(W){st("WebGLState:",W)}}function he(){try{i.texImage3D(...arguments)}catch(W){st("WebGLState:",W)}}function Le(W){return u[W]!==void 0?u[W]:i.getParameter(W)}function we(W,De){u[W]!==De&&(i.pixelStorei(W,De),u[W]=De)}function _e(W){j.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),j.copy(W))}function Me(W){le.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),le.copy(W))}function Ne(W,De){let ue=a.get(De);ue===void 0&&(ue=new WeakMap,a.set(De,ue));let Re=ue.get(W);Re===void 0&&(Re=i.getUniformBlockIndex(De,W.name),ue.set(W,Re))}function We(W,De){let Re=a.get(De).get(W);c.get(De)!==Re&&(i.uniformBlockBinding(De,Re,W.__bindingPointIndex),c.set(De,Re))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},G=null,Z={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,v=null,M=null,_=null,b=null,T=null,L=null,y=new pe(0,0,0),E=0,S=!1,I=null,F=null,D=null,P=null,N=null,j.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:oe,disable:Ae,bindFramebuffer:qe,drawBuffers:te,useProgram:ve,setBlending:fe,setMaterial:ye,setFlipSided:ge,setCullFace:Se,setLineWidth:Ve,setPolygonOffset:He,setScissorTest:tt,activeTexture:it,bindTexture:z,unbindTexture:bt,compressedTexImage2D:at,compressedTexImage3D:k,texImage2D:ae,texImage3D:he,pixelStorei:we,getParameter:Le,updateUBOMapping:Ne,uniformBlockBinding:We,texStorage2D:be,texStorage3D:Pe,texSubImage2D:w,texSubImage3D:Y,compressedTexSubImage2D:K,compressedTexSubImage3D:ee,scissor:_e,viewport:Me,reset:rt}}function kS(i,e,t,n,s,r,o){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new de,h=new WeakMap,u=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(k,w){return p?new OffscreenCanvas(k,w):wo("canvas")}function g(k,w,Y){let K=1,ee=at(k);if((ee.width>Y||ee.height>Y)&&(K=Y/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){let be=Math.floor(K*ee.width),Pe=Math.floor(K*ee.height);d===void 0&&(d=x(be,Pe));let ae=w?x(be,Pe):d;return ae.width=be,ae.height=Pe,ae.getContext("2d").drawImage(k,0,0,be,Pe),Je("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+be+"x"+Pe+")."),ae}else return"data"in k&&Je("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),k;return k}function m(k){return k.generateMipmaps}function v(k){i.generateMipmap(k)}function M(k){return k.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?i.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(k,w,Y,K,ee,be=!1){if(k!==null){if(i[k]!==void 0)return i[k];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Pe;K&&(Pe=e.get("EXT_texture_norm16"),Pe||Je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=w;if(w===i.RED&&(Y===i.FLOAT&&(ae=i.R32F),Y===i.HALF_FLOAT&&(ae=i.R16F),Y===i.UNSIGNED_BYTE&&(ae=i.R8),Y===i.UNSIGNED_SHORT&&Pe&&(ae=Pe.R16_EXT),Y===i.SHORT&&Pe&&(ae=Pe.R16_SNORM_EXT)),w===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ae=i.R8UI),Y===i.UNSIGNED_SHORT&&(ae=i.R16UI),Y===i.UNSIGNED_INT&&(ae=i.R32UI),Y===i.BYTE&&(ae=i.R8I),Y===i.SHORT&&(ae=i.R16I),Y===i.INT&&(ae=i.R32I)),w===i.RG&&(Y===i.FLOAT&&(ae=i.RG32F),Y===i.HALF_FLOAT&&(ae=i.RG16F),Y===i.UNSIGNED_BYTE&&(ae=i.RG8),Y===i.UNSIGNED_SHORT&&Pe&&(ae=Pe.RG16_EXT),Y===i.SHORT&&Pe&&(ae=Pe.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ae=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ae=i.RG16UI),Y===i.UNSIGNED_INT&&(ae=i.RG32UI),Y===i.BYTE&&(ae=i.RG8I),Y===i.SHORT&&(ae=i.RG16I),Y===i.INT&&(ae=i.RG32I)),w===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),Y===i.UNSIGNED_INT&&(ae=i.RGB32UI),Y===i.BYTE&&(ae=i.RGB8I),Y===i.SHORT&&(ae=i.RGB16I),Y===i.INT&&(ae=i.RGB32I)),w===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ae=i.RGBA32UI),Y===i.BYTE&&(ae=i.RGBA8I),Y===i.SHORT&&(ae=i.RGBA16I),Y===i.INT&&(ae=i.RGBA32I)),w===i.RGB&&(Y===i.UNSIGNED_SHORT&&Pe&&(ae=Pe.RGB16_EXT),Y===i.SHORT&&Pe&&(ae=Pe.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(ae=i.R11F_G11F_B10F)),w===i.RGBA){let he=be?Ta:ft.getTransfer(ee);Y===i.FLOAT&&(ae=i.RGBA32F),Y===i.HALF_FLOAT&&(ae=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ae=he===Dt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&Pe&&(ae=Pe.RGBA16_EXT),Y===i.SHORT&&Pe&&(ae=Pe.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function b(k,w){let Y;return k?w===null||w===Gi||w===sr?Y=i.DEPTH24_STENCIL8:w===Kn?Y=i.DEPTH32F_STENCIL8:w===zo&&(Y=i.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Gi||w===sr?Y=i.DEPTH_COMPONENT24:w===Kn?Y=i.DEPTH_COMPONENT32F:w===zo&&(Y=i.DEPTH_COMPONENT16),Y}function T(k,w){return m(k)===!0||k.isFramebufferTexture&&k.minFilter!==nn&&k.minFilter!==Yt?Math.log2(Math.max(w.width,w.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?w.mipmaps.length:1}function L(k){let w=k.target;w.removeEventListener("dispose",L),E(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&u.delete(w)}function y(k){let w=k.target;w.removeEventListener("dispose",y),I(w)}function E(k){let w=n.get(k);if(w.__webglInit===void 0)return;let Y=k.source,K=f.get(Y);if(K){let ee=K[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(k),Object.keys(K).length===0&&f.delete(Y)}n.remove(k)}function S(k){let w=n.get(k);i.deleteTexture(w.__webglTexture);let Y=k.source,K=f.get(Y);delete K[w.__cacheKey],o.memory.textures--}function I(k){let w=n.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),n.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let ee=0;ee<w.__webglFramebuffer[K].length;ee++)i.deleteFramebuffer(w.__webglFramebuffer[K][ee]);else i.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)i.deleteFramebuffer(w.__webglFramebuffer[K]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let Y=k.textures;for(let K=0,ee=Y.length;K<ee;K++){let be=n.get(Y[K]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(Y[K])}n.remove(k)}let F=0;function D(){F=0}function P(){return F}function N(k){F=k}function R(){let k=F;return k>=s.maxTextures&&Je("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,k}function U(k){let w=[];return w.push(k.wrapS),w.push(k.wrapT),w.push(k.wrapR||0),w.push(k.magFilter),w.push(k.minFilter),w.push(k.anisotropy),w.push(k.internalFormat),w.push(k.format),w.push(k.type),w.push(k.generateMipmaps),w.push(k.premultiplyAlpha),w.push(k.flipY),w.push(k.unpackAlignment),w.push(k.colorSpace),w.join()}function H(k,w){let Y=n.get(k);if(k.isVideoTexture&&z(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&Y.__version!==k.version){let K=k.image;if(K===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(Y,k,w);return}}else k.isExternalTexture&&(Y.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+w)}function B(k,w){let Y=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&Y.__version!==k.version){Ae(Y,k,w);return}else k.isExternalTexture&&(Y.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+w)}function G(k,w){let Y=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&Y.__version!==k.version){Ae(Y,k,w);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+w)}function Z(k,w){let Y=n.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&Y.__version!==k.version){qe(Y,k,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+w)}let se={[rn]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Eo]:i.MIRRORED_REPEAT},ce={[nn]:i.NEAREST,[_h]:i.NEAREST_MIPMAP_NEAREST,[Xr]:i.NEAREST_MIPMAP_LINEAR,[Yt]:i.LINEAR,[ko]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},j={[Wm]:i.NEVER,[Km]:i.ALWAYS,[Xm]:i.LESS,[ou]:i.LEQUAL,[qm]:i.EQUAL,[au]:i.GEQUAL,[Ym]:i.GREATER,[Zm]:i.NOTEQUAL};function le(k,w){if(w.type===Kn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Yt||w.magFilter===ko||w.magFilter===Xr||w.magFilter===di||w.minFilter===Yt||w.minFilter===ko||w.minFilter===Xr||w.minFilter===di)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(k,i.TEXTURE_WRAP_S,se[w.wrapS]),i.texParameteri(k,i.TEXTURE_WRAP_T,se[w.wrapT]),(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)&&i.texParameteri(k,i.TEXTURE_WRAP_R,se[w.wrapR]),i.texParameteri(k,i.TEXTURE_MAG_FILTER,ce[w.magFilter]),i.texParameteri(k,i.TEXTURE_MIN_FILTER,ce[w.minFilter]),w.compareFunction&&(i.texParameteri(k,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(k,i.TEXTURE_COMPARE_FUNC,j[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===nn||w.minFilter!==Xr&&w.minFilter!==di||w.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(k,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ie(k,w){let Y=!1;k.__webglInit===void 0&&(k.__webglInit=!0,w.addEventListener("dispose",L));let K=w.source,ee=f.get(K);ee===void 0&&(ee={},f.set(K,ee));let be=U(w);if(be!==k.__cacheKey){ee[be]===void 0&&(ee[be]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ee[be].usedTimes++;let Pe=ee[k.__cacheKey];Pe!==void 0&&(ee[k.__cacheKey].usedTimes--,Pe.usedTimes===0&&S(w)),k.__cacheKey=be,k.__webglTexture=ee[be].texture}return Y}function $(k,w,Y){return Math.floor(Math.floor(k/Y)/w)}function oe(k,w,Y,K){let be=k.updateRanges;if(be.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,Y,K,w.data);else{be.sort((we,_e)=>we.start-_e.start);let Pe=0;for(let we=1;we<be.length;we++){let _e=be[Pe],Me=be[we],Ne=_e.start+_e.count,We=$(Me.start,w.width,4),rt=$(_e.start,w.width,4);Me.start<=Ne+1&&We===rt&&$(Me.start+Me.count-1,w.width,4)===We?_e.count=Math.max(_e.count,Me.start+Me.count-_e.start):(++Pe,be[Pe]=Me)}be.length=Pe+1;let ae=t.getParameter(i.UNPACK_ROW_LENGTH),he=t.getParameter(i.UNPACK_SKIP_PIXELS),Le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let we=0,_e=be.length;we<_e;we++){let Me=be[we],Ne=Math.floor(Me.start/4),We=Math.ceil(Me.count/4),rt=Ne%w.width,W=Math.floor(Ne/w.width),De=We,ue=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,rt,W,De,ue,Y,K,w.data)}k.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ae),t.pixelStorei(i.UNPACK_SKIP_PIXELS,he),t.pixelStorei(i.UNPACK_SKIP_ROWS,Le)}}function Ae(k,w,Y){let K=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=i.TEXTURE_3D);let ee=Ie(k,w),be=w.source;t.bindTexture(K,k.__webglTexture,i.TEXTURE0+Y);let Pe=n.get(be);if(be.version!==Pe.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let ue=ft.getPrimaries(ft.workingColorSpace),Re=w.colorSpace===On?null:ft.getPrimaries(w.colorSpace),Ue=w.colorSpace===On||ue===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let he=g(w.image,!1,s.maxTextureSize);he=bt(w,he);let Le=r.convert(w.format,w.colorSpace),we=r.convert(w.type),_e=_(w.internalFormat,Le,we,w.normalized,w.colorSpace,w.isVideoTexture);le(K,w);let Me,Ne=w.mipmaps,We=w.isVideoTexture!==!0,rt=Pe.__version===void 0||ee===!0,W=be.dataReady,De=T(w,he);if(w.isDepthTexture)_e=b(w.format===as,w.type),rt&&(We?t.texStorage2D(i.TEXTURE_2D,1,_e,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,_e,he.width,he.height,0,Le,we,null));else if(w.isDataTexture)if(Ne.length>0){We&&rt&&t.texStorage2D(i.TEXTURE_2D,De,_e,Ne[0].width,Ne[0].height);for(let ue=0,Re=Ne.length;ue<Re;ue++)Me=Ne[ue],We?W&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Me.width,Me.height,Le,we,Me.data):t.texImage2D(i.TEXTURE_2D,ue,_e,Me.width,Me.height,0,Le,we,Me.data);w.generateMipmaps=!1}else We?(rt&&t.texStorage2D(i.TEXTURE_2D,De,_e,he.width,he.height),W&&oe(w,he,Le,we)):t.texImage2D(i.TEXTURE_2D,0,_e,he.width,he.height,0,Le,we,he.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){We&&rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,_e,Ne[0].width,Ne[0].height,he.depth);for(let ue=0,Re=Ne.length;ue<Re;ue++)if(Me=Ne[ue],w.format!==Un)if(Le!==null)if(We){if(W)if(w.layerUpdates.size>0){let Ue=wf(Me.width,Me.height,w.format,w.type);for(let xe of w.layerUpdates){let et=Me.data.subarray(xe*Ue/Me.data.BYTES_PER_ELEMENT,(xe+1)*Ue/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,xe,Me.width,Me.height,1,Le,et)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Me.width,Me.height,he.depth,Le,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,_e,Me.width,Me.height,he.depth,0,Me.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Me.width,Me.height,he.depth,Le,we,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,_e,Me.width,Me.height,he.depth,0,Le,we,Me.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{We&&rt&&t.texStorage2D(i.TEXTURE_2D,De,_e,Ne[0].width,Ne[0].height);for(let ue=0,Re=Ne.length;ue<Re;ue++)Me=Ne[ue],w.format!==Un?Le!==null?We?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Me.width,Me.height,Le,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,_e,Me.width,Me.height,0,Me.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?W&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Me.width,Me.height,Le,we,Me.data):t.texImage2D(i.TEXTURE_2D,ue,_e,Me.width,Me.height,0,Le,we,Me.data)}else if(w.isDataArrayTexture)if(We){if(rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,_e,he.width,he.height,he.depth),W)if(w.layerUpdates.size>0){let ue=wf(he.width,he.height,w.format,w.type);for(let Re of w.layerUpdates){let Ue=he.data.subarray(Re*ue/he.data.BYTES_PER_ELEMENT,(Re+1)*ue/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Re,he.width,he.height,1,Le,we,Ue)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Le,we,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,he.width,he.height,he.depth,0,Le,we,he.data);else if(w.isData3DTexture)We?(rt&&t.texStorage3D(i.TEXTURE_3D,De,_e,he.width,he.height,he.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Le,we,he.data)):t.texImage3D(i.TEXTURE_3D,0,_e,he.width,he.height,he.depth,0,Le,we,he.data);else if(w.isFramebufferTexture){if(rt)if(We)t.texStorage2D(i.TEXTURE_2D,De,_e,he.width,he.height);else{let ue=he.width,Re=he.height;for(let Ue=0;Ue<De;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,_e,ue,Re,0,Le,we,null),ue>>=1,Re>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let ue=i.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),he.parentNode!==ue){ue.appendChild(he),u.add(w),ue.onpaint=Re=>{let Ue=Re.changedElements;for(let xe of u)Ue.includes(xe.image)&&(xe.needsUpdate=!0)},ue.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,he);else{let Ue=i.RGBA,xe=i.RGBA,et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ue,xe,et,he)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(We&&rt){let ue=at(Ne[0]);t.texStorage2D(i.TEXTURE_2D,De,_e,ue.width,ue.height)}for(let ue=0,Re=Ne.length;ue<Re;ue++)Me=Ne[ue],We?W&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Le,we,Me):t.texImage2D(i.TEXTURE_2D,ue,_e,Le,we,Me);w.generateMipmaps=!1}else if(We){if(rt){let ue=at(he);t.texStorage2D(i.TEXTURE_2D,De,_e,ue.width,ue.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,we,he)}else t.texImage2D(i.TEXTURE_2D,0,_e,Le,we,he);m(w)&&v(K),Pe.__version=be.version,w.onUpdate&&w.onUpdate(w)}k.__version=w.version}function qe(k,w,Y){if(w.image.length!==6)return;let K=Ie(k,w),ee=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+Y);let be=n.get(ee);if(ee.version!==be.__version||K===!0){t.activeTexture(i.TEXTURE0+Y);let Pe=ft.getPrimaries(ft.workingColorSpace),ae=w.colorSpace===On?null:ft.getPrimaries(w.colorSpace),he=w.colorSpace===On||Pe===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Le=w.isCompressedTexture||w.image[0].isCompressedTexture,we=w.image[0]&&w.image[0].isDataTexture,_e=[];for(let xe=0;xe<6;xe++)!Le&&!we?_e[xe]=g(w.image[xe],!0,s.maxCubemapSize):_e[xe]=we?w.image[xe].image:w.image[xe],_e[xe]=bt(w,_e[xe]);let Me=_e[0],Ne=r.convert(w.format,w.colorSpace),We=r.convert(w.type),rt=_(w.internalFormat,Ne,We,w.normalized,w.colorSpace),W=w.isVideoTexture!==!0,De=be.__version===void 0||K===!0,ue=ee.dataReady,Re=T(w,Me);le(i.TEXTURE_CUBE_MAP,w);let Ue;if(Le){W&&De&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,rt,Me.width,Me.height);for(let xe=0;xe<6;xe++){Ue=_e[xe].mipmaps;for(let et=0;et<Ue.length;et++){let Ye=Ue[et];w.format!==Un?Ne!==null?W?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,0,0,Ye.width,Ye.height,Ne,Ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,rt,Ye.width,Ye.height,0,Ye.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,0,0,Ye.width,Ye.height,Ne,We,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,rt,Ye.width,Ye.height,0,Ne,We,Ye.data)}}}else{if(Ue=w.mipmaps,W&&De){Ue.length>0&&Re++;let xe=at(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,rt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(we){W?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,_e[xe].width,_e[xe].height,Ne,We,_e[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,rt,_e[xe].width,_e[xe].height,0,Ne,We,_e[xe].data);for(let et=0;et<Ue.length;et++){let Zt=Ue[et].image[xe].image;W?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,0,0,Zt.width,Zt.height,Ne,We,Zt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,rt,Zt.width,Zt.height,0,Ne,We,Zt.data)}}else{W?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ne,We,_e[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,rt,Ne,We,_e[xe]);for(let et=0;et<Ue.length;et++){let Ye=Ue[et];W?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,0,0,Ne,We,Ye.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,rt,Ne,We,Ye.image[xe])}}}m(w)&&v(i.TEXTURE_CUBE_MAP),be.__version=ee.version,w.onUpdate&&w.onUpdate(w)}k.__version=w.version}function te(k,w,Y,K,ee,be){let Pe=r.convert(Y.format,Y.colorSpace),ae=r.convert(Y.type),he=_(Y.internalFormat,Pe,ae,Y.normalized,Y.colorSpace),Le=n.get(w),we=n.get(Y);if(we.__renderTarget=w,!Le.__hasExternalTextures){let _e=Math.max(1,w.width>>be),Me=Math.max(1,w.height>>be);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,be,he,_e,Me,w.depth,0,Pe,ae,null):t.texImage2D(ee,be,he,_e,Me,0,Pe,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,k),it(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,ee,we.__webglTexture,0,tt(w)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,ee,we.__webglTexture,be),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(k,w,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,k),w.depthBuffer){let K=w.depthTexture,ee=K&&K.isDepthTexture?K.type:null,be=b(w.stencilBuffer,ee),Pe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;it(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(w),be,w.width,w.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(w),be,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,be,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,k)}else{let K=w.textures;for(let ee=0;ee<K.length;ee++){let be=K[ee],Pe=r.convert(be.format,be.colorSpace),ae=r.convert(be.type),he=_(be.internalFormat,Pe,ae,be.normalized,be.colorSpace);it(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(w),he,w.width,w.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(w),he,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,he,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(k,w,Y){let K=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,k),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(w.depthTexture);if(ee.__renderTarget=w,(!ee.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),K){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,w.depthTexture.addEventListener("dispose",L)),ee.__webglTexture===void 0){ee.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),le(i.TEXTURE_CUBE_MAP,w.depthTexture);let Le=r.convert(w.depthTexture.format),we=r.convert(w.depthTexture.type),_e;w.depthTexture.format===Qi?_e=i.DEPTH_COMPONENT24:w.depthTexture.format===as&&(_e=i.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,_e,w.width,w.height,0,Le,we,null)}}else H(w.depthTexture,0);let be=ee.__webglTexture,Pe=tt(w),ae=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,he=w.depthTexture.format===as?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Qi)it(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,ae,be,0,Pe):i.framebufferTexture2D(i.FRAMEBUFFER,he,ae,be,0);else if(w.depthTexture.format===as)it(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,ae,be,0,Pe):i.framebufferTexture2D(i.FRAMEBUFFER,he,ae,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(k){let w=n.get(k),Y=k.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==k.depthTexture){let K=k.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){let ee=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),w.__depthDisposeCallback=ee}w.__boundDepthTexture=K}if(k.depthTexture&&!w.__autoAllocateDepthBuffer)if(Y)for(let K=0;K<6;K++)Te(w.__webglFramebuffer[K],k,K);else{let K=k.texture.mipmaps;K&&K.length>0?Te(w.__webglFramebuffer[0],k,0):Te(w.__webglFramebuffer,k,0)}else if(Y){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=i.createRenderbuffer(),ve(w.__webglDepthbuffer[K],k,!1);else{let ee=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=w.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,be)}}else{let K=k.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ve(w.__webglDepthbuffer,k,!1);else{let ee=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,be)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(k,w,Y){let K=n.get(k);w!==void 0&&te(K.__webglFramebuffer,k,k.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&ne(k)}function ye(k){let w=k.texture,Y=n.get(k),K=n.get(w);k.addEventListener("dispose",y);let ee=k.textures,be=k.isWebGLCubeRenderTarget===!0,Pe=ee.length>1;if(Pe||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=w.version,o.memory.textures++),be){Y.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[ae]=[];for(let he=0;he<w.mipmaps.length;he++)Y.__webglFramebuffer[ae][he]=i.createFramebuffer()}else Y.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ae=0;ae<w.mipmaps.length;ae++)Y.__webglFramebuffer[ae]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let ae=0,he=ee.length;ae<he;ae++){let Le=n.get(ee[ae]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),o.memory.textures++)}if(k.samples>0&&it(k)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ae=0;ae<ee.length;ae++){let he=ee[ae];Y.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ae]);let Le=r.convert(he.format,he.colorSpace),we=r.convert(he.type),_e=_(he.internalFormat,Le,we,he.normalized,he.colorSpace,k.isXRRenderTarget===!0),Me=tt(k);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,_e,k.width,k.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),k.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(Y.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(be){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),le(i.TEXTURE_CUBE_MAP,w);for(let ae=0;ae<6;ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let he=0;he<w.mipmaps.length;he++)te(Y.__webglFramebuffer[ae][he],k,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,he);else te(Y.__webglFramebuffer[ae],k,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(w)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ae=0,he=ee.length;ae<he;ae++){let Le=ee[ae],we=n.get(Le),_e=i.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(_e=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,we.__webglTexture),le(_e,Le),te(Y.__webglFramebuffer,k,Le,i.COLOR_ATTACHMENT0+ae,_e,0),m(Le)&&v(_e)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ae=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,K.__webglTexture),le(ae,w),w.mipmaps&&w.mipmaps.length>0)for(let he=0;he<w.mipmaps.length;he++)te(Y.__webglFramebuffer[he],k,w,i.COLOR_ATTACHMENT0,ae,he);else te(Y.__webglFramebuffer,k,w,i.COLOR_ATTACHMENT0,ae,0);m(w)&&v(ae),t.unbindTexture()}k.depthBuffer&&ne(k)}function ge(k){let w=k.textures;for(let Y=0,K=w.length;Y<K;Y++){let ee=w[Y];if(m(ee)){let be=M(k),Pe=n.get(ee).__webglTexture;t.bindTexture(be,Pe),v(be),t.unbindTexture()}}}let Se=[],Ve=[];function He(k){if(k.samples>0){if(it(k)===!1){let w=k.textures,Y=k.width,K=k.height,ee=i.COLOR_BUFFER_BIT,be=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(k),ae=w.length>1;if(ae)for(let Le=0;Le<w.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);let he=k.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Le=0;Le<w.length;Le++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Le]);let we=n.get(w[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,Y,K,0,0,Y,K,ee,i.NEAREST),c===!0&&(Se.length=0,Ve.length=0,Se.push(i.COLOR_ATTACHMENT0+Le),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&(Se.push(be),Ve.push(be),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ve)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let Le=0;Le<w.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Le]);let we=n.get(w[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,we,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&c){let w=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function tt(k){return Math.min(s.maxSamples,k.samples)}function it(k){let w=n.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function z(k){let w=o.render.frame;h.get(k)!==w&&(h.set(k,w),k.update())}function bt(k,w){let Y=k.colorSpace,K=k.format,ee=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||Y!==Nn&&Y!==On&&(ft.getTransfer(Y)===Dt?(K!==Un||ee!==Zn)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",Y)),w}function at(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(a.width=k.naturalWidth||k.width,a.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(a.width=k.displayWidth,a.height=k.displayHeight):(a.width=k.width,a.height=k.height),a}this.allocateTextureUnit=R,this.resetTextureUnits=D,this.getTextureUnits=P,this.setTextureUnits=N,this.setTexture2D=H,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=fe,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=te,this.useMultisampledRTT=it,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function zS(i,e){function t(n,s=On){let r,o=ft.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===bh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ff)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===uf)return i.BYTE;if(n===df)return i.SHORT;if(n===zo)return i.UNSIGNED_SHORT;if(n===Mh)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===jt)return i.HALF_FLOAT;if(n===mf)return i.ALPHA;if(n===gf)return i.RGB;if(n===Un)return i.RGBA;if(n===Qi)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===Eh)return i.RED;if(n===Th)return i.RED_INTEGER;if(n===rr)return i.RG;if(n===wh)return i.RG_INTEGER;if(n===Ah)return i.RGBA_INTEGER;if(n===hl||n===ul||n===dl||n===fl)if(o===Dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ul)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rh||n===Ch||n===Ph||n===Ih)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ch)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ph)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ih)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lh||n===Dh||n===Nh||n===Uh||n===Oh||n===pl||n===Bh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lh||n===Dh)return o===Dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Nh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Uh)return r.COMPRESSED_R11_EAC;if(n===Oh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===pl)return r.COMPRESSED_RG11_EAC;if(n===Bh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fh||n===kh||n===zh||n===Hh||n===Gh||n===Vh||n===Wh||n===Xh||n===qh||n===Yh||n===Zh||n===Kh||n===jh||n===$h)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$h)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jh||n===Qh||n===eu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Jh)return o===Dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tu||n===nu||n===ml||n===iu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===tu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ml)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===iu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var HS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GS=`
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

}`,zf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ua(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new St({vertexShader:HS,fragmentShader:GS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new me(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hf=class extends Fi{constructor(e,t){super();let n=this,s=null,r=1,o=null,l="local-floor",c=1,a=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new zf,m={},v=t.getContextAttributes(),M=null,_=null,b=[],T=[],L=new de,y=null,E=null,S=new xn;S.viewport=new Pt;let I=new xn;I.viewport=new Pt;let F=[S,I],D=new mh,P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let oe=b[$];return oe===void 0&&(oe=new Co,b[$]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function($){let oe=b[$];return oe===void 0&&(oe=new Co,b[$]=oe),oe.getGripSpace()},this.getHand=function($){let oe=b[$];return oe===void 0&&(oe=new Co,b[$]=oe),oe.getHandSpace()};function R($){let oe=T.indexOf($.inputSource);if(oe===-1)return;let Ae=b[oe];Ae!==void 0&&(Ae.update($.inputSource,$.frame,a||o),Ae.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",H);for(let $=0;$<b.length;$++){let oe=T[$];oe!==null&&(T[$]=null,b[$].disconnect(oe))}P=null,N=null,g.reset();for(let $ in m)delete m[$];if(e.setRenderTarget(M),f=null,d=null,u=null,s=null,_=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(L.width,L.height,!1),E!==null){let $=E.camera;$.fov=E.fov,$.zoom=E.zoom,$.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||o},this.setReferenceSpace=function($){a=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",U),s.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,qe=null,te=null;v.depth&&(te=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=v.stencil?as:Qi,qe=v.stencil?sr:Gi);let ve={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new tn(d.textureWidth,d.textureHeight,{format:Un,type:Zn,depthTexture:new es(d.textureWidth,d.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ae={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new tn(f.framebufferWidth,f.framebufferHeight,{format:Un,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),a=null,o=await s.requestReferenceSpace(l),Ie.setContext(s),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H($){for(let oe=0;oe<$.removed.length;oe++){let Ae=$.removed[oe],qe=T.indexOf(Ae);qe>=0&&(T[qe]=null,b[qe].disconnect(Ae))}for(let oe=0;oe<$.added.length;oe++){let Ae=$.added[oe],qe=T.indexOf(Ae);if(qe===-1){for(let ve=0;ve<b.length;ve++)if(ve>=T.length){T.push(Ae),qe=ve;break}else if(T[ve]===null){T[ve]=Ae,qe=ve;break}if(qe===-1)break}let te=b[qe];te&&te.connect(Ae)}}let B=new O,G=new O;function Z($,oe,Ae){B.setFromMatrixPosition(oe.matrixWorld),G.setFromMatrixPosition(Ae.matrixWorld);let qe=B.distanceTo(G),te=oe.projectionMatrix.elements,ve=Ae.projectionMatrix.elements,Te=te[14]/(te[10]-1),ne=te[14]/(te[10]+1),fe=(te[9]+1)/te[5],ye=(te[9]-1)/te[5],ge=(te[8]-1)/te[0],Se=(ve[8]+1)/ve[0],Ve=Te*ge,He=Te*Se,tt=qe/(-ge+Se),it=tt*-ge;if(oe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(it),$.translateZ(tt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),te[10]===-1)$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let z=Te+tt,bt=ne+tt,at=Ve-it,k=He+(qe-it),w=fe*ne/bt*z,Y=ye*ne/bt*z;$.projectionMatrix.makePerspective(at,k,w,Y,z,bt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function se($,oe){oe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(oe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let oe=$.near,Ae=$.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(Ae=g.depthFar)),D.near=I.near=S.near=oe,D.far=I.far=S.far=Ae,(P!==D.near||N!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),P=D.near,N=D.far),D.layers.mask=$.layers.mask|6,S.layers.mask=D.layers.mask&-5,I.layers.mask=D.layers.mask&-3;let qe=$.parent,te=D.cameras;se(D,qe);for(let ve=0;ve<te.length;ve++)se(te[ve],qe);te.length===2?Z(D,S,I):D.projectionMatrix.copy(S.projectionMatrix),E===null&&$.isPerspectiveCamera&&(E={camera:$,fov:$.fov,zoom:$.zoom}),ce($,D,qe)};function ce($,oe,Ae){Ae===null?$.matrix.copy(oe.matrixWorld):($.matrix.copy(Ae.matrixWorld),$.matrix.invert(),$.matrix.multiply(oe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Tr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function($){return m[$]};let j=null;function le($,oe){if(h=oe.getViewerPose(a||o),p=oe,h!==null){let Ae=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let qe=!1;Ae.length!==D.cameras.length&&(D.cameras.length=0,qe=!0);for(let ne=0;ne<Ae.length;ne++){let fe=Ae[ne],ye=null;if(f!==null)ye=f.getViewport(fe);else{let Se=u.getViewSubImage(d,fe);ye=Se.viewport,ne===0&&(e.setRenderTargetTextures(_,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(_))}let ge=F[ne];ge===void 0&&(ge=new xn,ge.layers.enable(ne),ge.viewport=new Pt,F[ne]=ge),ge.matrix.fromArray(fe.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(fe.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(ye.x,ye.y,ye.width,ye.height),ne===0&&(D.matrix.copy(ge.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),qe===!0&&D.cameras.push(ge)}let te=s.enabledFeatures;if(te&&te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let ne=u.getDepthInformation(Ae[0]);ne&&ne.isValid&&ne.texture&&g.init(ne,s.renderState)}if(te&&te.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let ne=0;ne<Ae.length;ne++){let fe=Ae[ne].camera;if(fe){let ye=m[fe];ye||(ye=new Ua,m[fe]=ye);let ge=u.getCameraImage(fe);ye.sourceTexture=ge}}}}for(let Ae=0;Ae<b.length;Ae++){let qe=T[Ae],te=b[Ae];qe!==null&&te!==void 0&&te.update(qe,oe,a||o)}j&&j($,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),p=null}let Ie=new Cg;Ie.setAnimationLoop(le),this.setAnimationLoop=function($){j=$},this.dispose=function(){}}},VS=new je,Ug=new ht;Ug.set(-1,0,0,0,1,0,0,0,1);function WS(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Sf(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,M,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&l(g,m)):m.isPointsMaterial?c(g,m,v,M):m.isSpriteMaterial?a(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Tn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Tn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=e.get(m),M=v.envMap,_=v.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(VS.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ug),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function l(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,v,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Tn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function XS(i,e,t,n){let s={},r={},o=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,b){let T=b.program;n.uniformBlockBinding(_,T)}function a(_,b){let T=s[_.id];T===void 0&&(g(_),T=h(_),s[_.id]=T,_.addEventListener("dispose",v));let L=b.program;n.updateUBOMapping(_,L);let y=e.render.frame;r[_.id]!==y&&(d(_),r[_.id]=y)}function h(_){let b=u();_.__bindingPointIndex=b;let T=i.createBuffer(),L=_.__size,y=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,L,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function u(){for(let _=0;_<l;_++)if(o.indexOf(_)===-1)return o.push(_),_;return st("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let b=s[_.id],T=_.uniforms,L=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let y=0,E=T.length;y<E;y++){let S=T[y];if(Array.isArray(S))for(let I=0,F=S.length;I<F;I++)f(S[I],y,I,L);else f(S,y,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,b,T,L){if(x(_,b,T,L)===!0){let y=_.__offset,E=_.value;if(Array.isArray(E)){let S=0;for(let I=0;I<E.length;I++){let F=E[I],D=m(F);p(F,_.__data,S),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(S+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,_.__data)}}function p(_,b,T){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,T)}function x(_,b,T,L){let y=_.value,E=b+"_"+T;if(L[E]===void 0)return typeof y=="number"||typeof y=="boolean"?L[E]=y:ArrayBuffer.isView(y)?L[E]=y.slice():L[E]=y.clone(),!0;{let S=L[E];if(typeof y=="number"||typeof y=="boolean"){if(S!==y)return L[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(S.equals(y)===!1)return S.copy(y),!0}}return!1}function g(_){let b=_.uniforms,T=0,L=16;for(let E=0,S=b.length;E<S;E++){let I=Array.isArray(b[E])?b[E]:[b[E]];for(let F=0,D=I.length;F<D;F++){let P=I[F],N=Array.isArray(P.value)?P.value:[P.value];for(let R=0,U=N.length;R<U;R++){let H=N[R],B=m(H),G=T%L,Z=G%B.boundary,se=G+Z;T+=Z,se!==0&&L-se<B.storage&&(T+=L-se),P.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=T,T+=B.storage}}}let y=T%L;return y>0&&(T+=L-y),_.__size=T,_.__cache={},this}function m(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Je("WebGLRenderer: Unsupported uniform value type.",_),b}function v(_){let b=_.target;b.removeEventListener("dispose",v);let T=o.indexOf(b.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function M(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:a,dispose:M}}var qS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ls=null;function YS(){return ls===null&&(ls=new Ei(qS,16,16,rr,jt),ls.name="DFG_LUT",ls.minFilter=Yt,ls.magFilter=Yt,ls.wrapS=Wn,ls.wrapT=Wn,ls.generateMipmaps=!1,ls.needsUpdate=!0),ls}var uu=class{constructor(e={}){let{canvas:t=jm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:a=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Zn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,g=new Set([Ah,wh,Th]),m=new Set([Zn,Gi,zo,sr,bh,Sh]),v=new Uint32Array(4),M=new Int32Array(4),_=new O,b=null,T=null,L=[],y=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,I=!1,F=null,D=null,P=null,N=null;this._outputColorSpace=lt;let R=0,U=0,H=null,B=-1,G=null,Z=new Pt,se=new Pt,ce=null,j=new pe(0),le=0,Ie=t.width,$=t.height,oe=1,Ae=null,qe=null,te=new Pt(0,0,Ie,$),ve=new Pt(0,0,Ie,$),Te=!1,ne=new Po,fe=!1,ye=!1,ge=new je,Se=new O,Ve=new Pt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function it(){return H===null?oe:1}let z=n;function bt(A,V){return t.getContext(A,V)}let at,k,w,Y,K,ee,be,Pe,ae,he,Le,we,_e,Me,Ne,We,rt,W,De,ue,Re,Ue,xe;try{let A={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:a,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Zt,!1),t.addEventListener("webglcontextrestored",Ut,!1),t.addEventListener("webglcontextcreationerror",Ii,!1),z===null){let V="webgl2";if(z=bt(V,A),z===null)throw bt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(A){throw t.removeEventListener("webglcontextlost",Zt,!1),t.removeEventListener("webglcontextrestored",Ut,!1),t.removeEventListener("webglcontextcreationerror",Ii,!1),st("WebGLRenderer: "+A.message),A}function et(){at=new eb(z),at.init(),Re=new zS(z,at),k=new WM(z,at,e,Re),w=new FS(z,at),k.reversedDepthBuffer&&d&&w.buffers.depth.setReversed(!0),D=z.createFramebuffer(),P=z.createFramebuffer(),N=z.createFramebuffer(),Y=new ib(z),K=new ES,ee=new kS(z,at,w,K,k,Re,Y),be=new QM(S),Pe=new r_(z),Ue=new GM(z,Pe),ae=new tb(z,Pe,Y,Ue),he=new rb(z,ae,Pe,Ue,Y),W=new sb(z,k,ee),Ne=new XM(K),Le=new SS(S,be,at,k,Ue,Ne),we=new WS(S,K),_e=new wS,Me=new LS(at),rt=new HM(S,be,w,he,p,c),We=new BS(S,he,k),xe=new XS(z,Y,k,w),De=new VM(z,at,Y),ue=new nb(z,at,Y),Y.programs=Le.programs,S.capabilities=k,S.extensions=at,S.properties=K,S.renderLists=_e,S.shadowMap=We,S.state=w,S.info=Y}x!==Zn&&(E=new ab(x,t.width,t.height,l,s,r));let Ye=new Hf(S,z);this.xr=Ye,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let A=at.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=at.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(A){A!==void 0&&(oe=A,this.setSize(Ie,$,!1))},this.getSize=function(A){return A.set(Ie,$)},this.setSize=function(A,V,ie=!0){if(Ye.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=A,$=V,t.width=Math.floor(A*oe),t.height=Math.floor(V*oe),ie===!0&&(t.style.width=A+"px",t.style.height=V+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(Ie*oe,$*oe).floor()},this.setDrawingBufferSize=function(A,V,ie){Ie=A,$=V,oe=ie,t.width=Math.floor(A*ie),t.height=Math.floor(V*ie),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(x===Zn){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){Je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Z)},this.getViewport=function(A){return A.copy(te)},this.setViewport=function(A,V,ie,J){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,V,ie,J),w.viewport(Z.copy(te).multiplyScalar(oe).round())},this.getScissor=function(A){return A.copy(ve)},this.setScissor=function(A,V,ie,J){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,V,ie,J),w.scissor(se.copy(ve).multiplyScalar(oe).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(A){w.setScissorTest(Te=A)},this.setOpaqueSort=function(A){Ae=A},this.setTransparentSort=function(A){qe=A},this.getClearColor=function(A){return A.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,ie=!0){let J=0;if(A){let Q=!1;if(H!==null){let Fe=H.texture.format;Q=g.has(Fe)}if(Q){let Fe=H.texture.type,Ge=m.has(Fe),Be=rt.getClearColor(),Ze=rt.getClearAlpha(),Qe=Be.r,pt=Be.g,At=Be.b;Ge?(v[0]=Qe,v[1]=pt,v[2]=At,v[3]=Ze,z.clearBufferuiv(z.COLOR,0,v)):(M[0]=Qe,M[1]=pt,M[2]=At,M[3]=Ze,z.clearBufferiv(z.COLOR,0,M))}else J|=z.COLOR_BUFFER_BIT}V&&(J|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(J|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&z.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),F=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Zt,!1),t.removeEventListener("webglcontextrestored",Ut,!1),t.removeEventListener("webglcontextcreationerror",Ii,!1),rt.dispose(),_e.dispose(),Me.dispose(),K.dispose(),be.dispose(),he.dispose(),Ue.dispose(),xe.dispose(),Le.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",v0),Ye.removeEventListener("sessionend",y0),mr.stop()};function Zt(A){A.preventDefault(),wa("WebGLRenderer: Context Lost."),I=!0}function Ut(){wa("WebGLRenderer: Context Restored."),I=!1;let A=Y.autoReset,V=We.enabled,ie=We.autoUpdate,J=We.needsUpdate,Q=We.type;et(),Y.autoReset=A,We.enabled=V,We.autoUpdate=ie,We.needsUpdate=J,We.type=Q}function Ii(A){st("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Zi(A){let V=A.target;V.removeEventListener("dispose",Zi),gv(V)}function gv(A){xv(A),K.remove(A)}function xv(A){let V=K.get(A).programs;V!==void 0&&(V.forEach(function(ie){Le.releaseProgram(ie)}),A.isShaderMaterial&&Le.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,ie,J,Q,Fe){V===null&&(V=He);let Ge=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Be=_v(A,V,ie,J,Q);w.setMaterial(J,Ge);let Ze=ie.index,Qe=1;if(J.wireframe===!0){if(Ze=ae.getWireframeAttribute(ie),Ze===void 0)return;Qe=2}let pt=ie.drawRange,At=ie.attributes.position,Ke=pt.start*Qe,Ot=(pt.start+pt.count)*Qe;Fe!==null&&(Ke=Math.max(Ke,Fe.start*Qe),Ot=Math.min(Ot,(Fe.start+Fe.count)*Qe)),Ze!==null?(Ke=Math.max(Ke,0),Ot=Math.min(Ot,Ze.count)):At!=null&&(Ke=Math.max(Ke,0),Ot=Math.min(Ot,At.count));let mn=Ot-Ke;if(mn<0||mn===1/0)return;Ue.setup(Q,J,Be,ie,Ze);let en,qt=De;if(Ze!==null&&(en=Pe.get(Ze),qt=ue,qt.setIndex(en)),Q.isMesh)J.wireframe===!0?(w.setLineWidth(J.wireframeLinewidth*it()),qt.setMode(z.LINES)):qt.setMode(z.TRIANGLES);else if(Q.isLine){let Hn=J.linewidth;Hn===void 0&&(Hn=1),w.setLineWidth(Hn*it()),Q.isLineSegments?qt.setMode(z.LINES):Q.isLineLoop?qt.setMode(z.LINE_LOOP):qt.setMode(z.LINE_STRIP)}else Q.isPoints?qt.setMode(z.POINTS):Q.isSprite&&qt.setMode(z.TRIANGLES);if(Q.isBatchedMesh)if(at.get("WEBGL_multi_draw"))qt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Hn=Q._multiDrawStarts,ze=Q._multiDrawCounts,Jn=Q._multiDrawCount,Ct=Ze?Pe.get(Ze).bytesPerElement:1,Mi=K.get(J).currentProgram.getUniforms();for(let Ki=0;Ki<Jn;Ki++)Mi.setValue(z,"_gl_DrawID",Ki),qt.render(Hn[Ki]/Ct,ze[Ki])}else if(Q.isInstancedMesh)qt.renderInstances(Ke,mn,Q.count);else if(ie.isInstancedBufferGeometry){let Hn=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,ze=Math.min(ie.instanceCount,Hn);qt.renderInstances(Ke,mn,ze)}else qt.render(Ke,mn)};function x0(A,V,ie,J){F!==null&&A.isNodeMaterial&&F.setObject(J,A),fe===!0&&Ne.setState(A,ie,!1),A.transparent===!0&&A.side===It&&A.forceSinglePass===!1?(A.side=Tn,A.needsUpdate=!0,ac(A,V,J),A.side=rs,A.needsUpdate=!0,ac(A,V,J),A.side=It):ac(A,V,J)}this.compile=function(A,V,ie=null){ie===null&&(ie=A),F!==null&&F.renderStart(A,V,ie),T=Me.get(ie),T.init(V),y.push(T),ie.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),A!==ie&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),ye=this.localClippingEnabled,fe=Ne.init(this.clippingPlanes,ye),fe===!0&&Ne.setGlobalState(this.clippingPlanes,V),F!==null&&We.render(T.state.shadowsArray,ie,V);let J=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Fe=Q.material;if(Fe)if(Array.isArray(Fe))for(let Ge=0;Ge<Fe.length;Ge++){let Be=Fe[Ge];x0(Be,ie,V,Q),J.add(Be)}else x0(Fe,ie,V,Q),J.add(Fe)}),T=y.pop(),F!==null&&F.renderEnd(),J},this.compileAsync=function(A,V,ie=null){let J=this.compile(A,V,ie);return new Promise(Q=>{function Fe(){if(J.forEach(function(Ge){let Ze=K.get(Ge).currentProgram;(Ze===void 0||Ze.isReady())&&J.delete(Ge)}),J.size===0){Q(A);return}setTimeout(Fe,10)}at.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let pd=null;function vv(A){pd&&pd(A)}function v0(){mr.stop()}function y0(){mr.start()}let mr=new Cg;mr.setAnimationLoop(vv),typeof self<"u"&&mr.setContext(self),this.setAnimationLoop=function(A){pd=A,Ye.setAnimationLoop(A),A===null?mr.stop():mr.start()},Ye.addEventListener("sessionstart",v0),Ye.addEventListener("sessionend",y0),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(A,V);let ie=Ye.enabled===!0&&Ye.isPresenting===!0,J=E!==null&&(H===null||ie)&&E.begin(S,H);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(V),V=Ye.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,V,H),T=Me.get(A,y.length),T.init(V),T.state.textureUnits=ee.getTextureUnits(),y.push(T),ge.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ne.setFromProjectionMatrix(ge,Bi,V.reversedDepth),ye=this.localClippingEnabled,fe=Ne.init(this.clippingPlanes,ye),b=_e.get(A,L.length),b.init(),L.push(b),Ye.enabled===!0&&Ye.isPresenting===!0){let Ge=S.xr.getDepthSensingMesh();Ge!==null&&md(Ge,V,-1/0,S.sortObjects)}md(A,V,0,S.sortObjects),b.finish(),F!==null&&F.updateLights(T.state.lightsArray),S.sortObjects===!0&&b.sort(Ae,qe),tt=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,tt&&rt.addToRenderList(b,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),fe===!0&&Ne.beginShadows();let Q=T.state.shadowsArray;if(We.render(Q,A,V),fe===!0&&Ne.endShadows(),(J&&E.hasRenderPass())===!1){let Ge=b.opaque,Be=b.transmissive;if(T.setupLights(),V.isArrayCamera){let Ze=V.cameras;if(Be.length>0)for(let Qe=0,pt=Ze.length;Qe<pt;Qe++){let At=Ze[Qe];M0(Ge,Be,A,At)}tt&&rt.render(A);for(let Qe=0,pt=Ze.length;Qe<pt;Qe++){let At=Ze[Qe];_0(b,A,At,At.viewport)}}else Be.length>0&&M0(Ge,Be,A,V),tt&&rt.render(A),_0(b,A,V)}H!==null&&U===0&&(ee.updateMultisampleRenderTarget(H),ee.updateRenderTargetMipmap(H)),J&&E.end(S),A.isScene===!0&&A.onAfterRender(S,A,V),Ue.resetDefaultState(),B=-1,G=null,y.pop(),y.length>0?(T=y[y.length-1],ee.setTextureUnits(T.state.textureUnits),fe===!0&&Ne.setGlobalState(S.clippingPlanes,T.state.camera)):T=null,L.pop(),L.length>0?b=L[L.length-1]:b=null,F!==null&&F.renderEnd()};function md(A,V,ie,J){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLightProbeGrid)T.pushLightProbeGrid(A);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ne)){J&&Ve.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ge);let Ge=he.update(A),Be=A.material;Be.visible&&b.push(A,Ge,Be,ie,Ve.z,null,V)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ne))){let Ge=he.update(A),Be=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ve.copy(A.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),Ve.copy(Ge.boundingSphere.center)),Ve.applyMatrix4(A.matrixWorld).applyMatrix4(ge)),Array.isArray(Be)){let Ze=Ge.groups;for(let Qe=0,pt=Ze.length;Qe<pt;Qe++){let At=Ze[Qe],Ke=Be[At.materialIndex];Ke&&Ke.visible&&b.push(A,Ge,Ke,ie,Ve.z,At,V)}}else Be.visible&&b.push(A,Ge,Be,ie,Ve.z,null,V)}}let Fe=A.children;for(let Ge=0,Be=Fe.length;Ge<Be;Ge++)md(Fe[Ge],V,ie,J)}function _0(A,V,ie,J){let{opaque:Q,transmissive:Fe,transparent:Ge}=A;T.setupLightsView(ie),fe===!0&&Ne.setGlobalState(S.clippingPlanes,ie),J&&w.viewport(Z.copy(J)),Q.length>0&&oc(Q,V,ie),Fe.length>0&&oc(Fe,V,ie),Ge.length>0&&oc(Ge,V,ie),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function M0(A,V,ie,J){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[J.id]===void 0){let Ke=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[J.id]=new tn(1,1,{generateMipmaps:!0,type:Ke?jt:Zn,minFilter:di,samples:Math.max(4,k.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}let Fe=T.state.transmissionRenderTarget[J.id],Ge=J.viewport||Z;Fe.setSize(Ge.z*S.transmissionResolutionScale,Ge.w*S.transmissionResolutionScale);let Be=S.getRenderTarget(),Ze=S.getActiveCubeFace(),Qe=S.getActiveMipmapLevel();S.setRenderTarget(Fe),S.getClearColor(j),le=S.getClearAlpha(),le<1&&S.setClearColor(16777215,.5),S.clear(),tt&&rt.render(ie);let pt=S.toneMapping;S.toneMapping=Hi;let At=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),T.setupLightsView(J),fe===!0&&Ne.setGlobalState(S.clippingPlanes,J),oc(A,ie,J),ee.updateMultisampleRenderTarget(Fe),ee.updateRenderTargetMipmap(Fe),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ot=0,mn=V.length;Ot<mn;Ot++){let en=V[Ot],{object:qt,geometry:Hn,material:ze,group:Jn}=en;if(ze.side===It&&qt.layers.test(J.layers)){let Ct=ze.side;ze.side=Tn,ze.needsUpdate=!0,b0(qt,ie,J,Hn,ze,Jn),ze.side=Ct,ze.needsUpdate=!0,Ke=!0}}Ke===!0&&(ee.updateMultisampleRenderTarget(Fe),ee.updateRenderTargetMipmap(Fe))}S.setRenderTarget(Be,Ze,Qe),S.setClearColor(j,le),At!==void 0&&(J.viewport=At),S.toneMapping=pt}function oc(A,V,ie){let J=V.isScene===!0?V.overrideMaterial:null;for(let Q=0,Fe=A.length;Q<Fe;Q++){let Ge=A[Q],{object:Be,geometry:Ze,group:Qe}=Ge,pt=Ge.material;pt.allowOverride===!0&&J!==null&&(pt=J),Be.layers.test(ie.layers)&&b0(Be,V,ie,Ze,pt,Qe)}}function b0(A,V,ie,J,Q,Fe){F!==null&&Q.isNodeMaterial&&F.setObject(A,Q),A.onBeforeRender(S,V,ie,J,Q,Fe),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(S,V,ie,J,A,Fe),Q.transparent===!0&&Q.side===It&&Q.forceSinglePass===!1?(Q.side=Tn,Q.needsUpdate=!0,S.renderBufferDirect(ie,V,J,Q,A,Fe),Q.side=rs,Q.needsUpdate=!0,S.renderBufferDirect(ie,V,J,Q,A,Fe),Q.side=It):S.renderBufferDirect(ie,V,J,Q,A,Fe),A.onAfterRender(S,V,ie,J,Q,Fe)}function ac(A,V,ie){V.isScene!==!0&&(V=He);let J=K.get(A),Q=T.state.lights,Fe=T.state.shadowsArray,Ge=Q.state.version,Be=Le.getParameters(A,Q.state,Fe,V,ie,T.state.lightProbeGridArray),Ze=Le.getProgramCacheKey(Be),Qe=J.programs;J.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,J.fog=V.fog;let pt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;J.envMap=be.get(A.envMap||J.environment,pt),J.envMapRotation=J.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Qe===void 0&&(A.addEventListener("dispose",Zi),Qe=new Map,J.programs=Qe);let At=Qe.get(Ze);if(At!==void 0){if(J.currentProgram===At&&J.lightsStateVersion===Ge)return E0(A,Be),At}else Be.uniforms=Le.getUniforms(A),F!==null&&A.isNodeMaterial&&F.build(A,ie,Be),A.onBeforeCompile(Be,S),At=Le.acquireProgram(Be,Ze),Qe.set(Ze,At),J.uniforms=Be.uniforms;let Ke=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=Ne.uniform),E0(A,Be),J.needsLights=bv(A),J.lightsStateVersion=Ge,J.needsLights&&(Ke.ambientLightColor.value=Q.state.ambient,Ke.lightProbe.value=Q.state.probe,Ke.sunLights.value=Q.state.sun,Ke.sunLightShadows.value=Q.state.sunShadow,Ke.directionalLights.value=Q.state.directional,Ke.directionalLightShadows.value=Q.state.directionalShadow,Ke.spotLights.value=Q.state.spot,Ke.spotLightShadows.value=Q.state.spotShadow,Ke.rectAreaLights.value=Q.state.rectArea,Ke.ltc_1.value=Q.state.rectAreaLTC1,Ke.ltc_2.value=Q.state.rectAreaLTC2,Ke.pointLights.value=Q.state.point,Ke.pointLightShadows.value=Q.state.pointShadow,Ke.hemisphereLights.value=Q.state.hemi,Ke.sunShadowMatrix.value=Q.state.sunShadowMatrix,Ke.sunShadowCascade.value=Q.state.sunShadowCascade,Ke.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ke.spotLightMatrix.value=Q.state.spotLightMatrix,Ke.spotLightMap.value=Q.state.spotLightMap,Ke.pointShadowMatrix.value=Q.state.pointShadowMatrix),J.lightProbeGrid=T.state.lightProbeGridArray.length>0,J.currentProgram=At,J.uniformsList=null,At}function S0(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=Wo.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function E0(A,V){let ie=K.get(A);ie.outputColorSpace=V.outputColorSpace,ie.batching=V.batching,ie.batchingColor=V.batchingColor,ie.instancing=V.instancing,ie.instancingColor=V.instancingColor,ie.instancingMorph=V.instancingMorph,ie.skinning=V.skinning,ie.morphTargets=V.morphTargets,ie.morphNormals=V.morphNormals,ie.morphColors=V.morphColors,ie.morphTargetsCount=V.morphTargetsCount,ie.numClippingPlanes=V.numClippingPlanes,ie.numIntersection=V.numClipIntersection,ie.vertexAlphas=V.vertexAlphas,ie.vertexTangents=V.vertexTangents,ie.toneMapping=V.toneMapping}function yv(A,V){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;_.setFromMatrixPosition(V.matrixWorld);for(let ie=0,J=A.length;ie<J;ie++){let Q=A[ie];if(Q.texture!==null&&Q.boundingBox.containsPoint(_))return Q}return null}function _v(A,V,ie,J,Q){V.isScene!==!0&&(V=He),ee.resetTextureUnits();let Fe=V.fog,Ge=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?V.environment:null,Be=H===null?S.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ft.workingColorSpace,Ze=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Qe=be.get(J.envMap||Ge,Ze),pt=J.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,At=!!ie.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ke=!!ie.morphAttributes.position,Ot=!!ie.morphAttributes.normal,mn=!!ie.morphAttributes.color,en=Hi;J.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(en=S.toneMapping);let qt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Hn=qt!==void 0?qt.length:0,ze=K.get(J),Jn=T.state.lights;if(fe===!0&&(ye===!0||A!==G)){let Kt=A===G&&J.id===B;Ne.setState(J,A,Kt)}let Ct=!1;J.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Jn.state.version||ze.outputColorSpace!==Be||Q.isBatchedMesh&&ze.batching===!1||!Q.isBatchedMesh&&ze.batching===!0||Q.isBatchedMesh&&ze.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&ze.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&ze.instancing===!1||!Q.isInstancedMesh&&ze.instancing===!0||Q.isSkinnedMesh&&ze.skinning===!1||!Q.isSkinnedMesh&&ze.skinning===!0||Q.isInstancedMesh&&ze.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ze.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ze.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ze.instancingMorph===!1&&Q.morphTexture!==null||ze.envMap!==Qe||J.fog===!0&&ze.fog!==Fe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ne.numPlanes||ze.numIntersection!==Ne.numIntersection)||ze.vertexAlphas!==pt||ze.vertexTangents!==At||ze.morphTargets!==Ke||ze.morphNormals!==Ot||ze.morphColors!==mn||ze.toneMapping!==en||ze.morphTargetsCount!==Hn||!!ze.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ct=!0):(Ct=!0,ze.__version=J.version);let Mi=ze.currentProgram;Ct===!0&&(Mi=ac(J,V,Q),F&&J.isNodeMaterial&&F.onUpdateProgram(J,Mi,ze));let Ki=!1,Vs=!1,to=!1,Ht=Mi.getUniforms(),dn=ze.uniforms;if(w.useProgram(Mi.program)&&(Ki=!0,Vs=!0,to=!0),J.id!==B&&(B=J.id,Vs=!0),ze.needsLights){let Kt=yv(T.state.lightProbeGridArray,Q);ze.lightProbeGrid!==Kt&&(ze.lightProbeGrid=Kt,Vs=!0)}if(Ki||G!==A){w.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ht.setValue(z,"projectionMatrix",A.projectionMatrix),Ht.setValue(z,"viewMatrix",A.matrixWorldInverse);let Xs=Ht.map.cameraPosition;Xs!==void 0&&Xs.setValue(z,Se.setFromMatrixPosition(A.matrixWorld)),k.logarithmicDepthBuffer&&Ht.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ht.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),G!==A&&(G=A,Vs=!0,to=!0)}if(ze.needsLights&&(Jn.state.sunShadowMap.length>0&&Ht.setValue(z,"sunShadowMap",Jn.state.sunShadowMap,ee),Jn.state.directionalShadowMap.length>0&&Ht.setValue(z,"directionalShadowMap",Jn.state.directionalShadowMap,ee),Jn.state.spotShadowMap.length>0&&Ht.setValue(z,"spotShadowMap",Jn.state.spotShadowMap,ee),Jn.state.pointShadowMap.length>0&&Ht.setValue(z,"pointShadowMap",Jn.state.pointShadowMap,ee)),Q.isSkinnedMesh){Ht.setOptional(z,Q,"bindMatrix"),Ht.setOptional(z,Q,"bindMatrixInverse");let Kt=Q.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Ht.setValue(z,"boneTexture",Kt.boneTexture,ee))}Q.isBatchedMesh&&(Ht.setOptional(z,Q,"batchingTexture"),Ht.setValue(z,"batchingTexture",Q._matricesTexture,ee),Ht.setOptional(z,Q,"batchingIdTexture"),Ht.setValue(z,"batchingIdTexture",Q._indirectTexture,ee),Ht.setOptional(z,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ht.setValue(z,"batchingColorTexture",Q._colorsTexture,ee));let Ws=ie.morphAttributes;if((Ws.position!==void 0||Ws.normal!==void 0||Ws.color!==void 0)&&W.update(Q,ie,Mi),(Vs||ze.receiveShadow!==Q.receiveShadow)&&(ze.receiveShadow=Q.receiveShadow,Ht.setValue(z,"receiveShadow",Q.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&V.environment!==null&&(dn.envMapIntensity.value=V.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=YS()),Vs){if(Ht.setValue(z,"toneMappingExposure",S.toneMappingExposure),ze.needsLights&&Mv(dn,to),Fe&&J.fog===!0&&we.refreshFogUniforms(dn,Fe),we.refreshMaterialUniforms(dn,J,oe,$,T.state.transmissionRenderTarget[A.id]),ze.needsLights&&ze.lightProbeGrid){let Kt=ze.lightProbeGrid;dn.probesSH.value=Kt.texture,dn.probesMin.value.copy(Kt.boundingBox.min),dn.probesMax.value.copy(Kt.boundingBox.max),dn.probesResolution.value.copy(Kt.resolution)}Wo.upload(z,S0(ze),dn,ee)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Wo.upload(z,S0(ze),dn,ee),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ht.setValue(z,"center",Q.center),Ht.setValue(z,"modelViewMatrix",Q.modelViewMatrix),Ht.setValue(z,"normalMatrix",Q.normalMatrix),Ht.setValue(z,"modelMatrix",Q.matrixWorld),J.uniformsGroups!==void 0){let Kt=J.uniformsGroups;for(let Xs=0,no=Kt.length;Xs<no;Xs++){let w0=Kt[Xs];xe.update(w0,Mi),xe.bind(w0,Mi)}}return Mi}function Mv(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.sunLights.needsUpdate=V,A.sunLightShadows.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function bv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(A,V,ie){let J=K.get(A);J.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),K.get(A.texture).__webglTexture=V,K.get(A.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ie,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){let ie=K.get(A);ie.__webglFramebuffer=V,ie.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,ie=0){H=A,R=V,U=ie;let J=null,Q=!1,Fe=!1;if(A){let Be=K.get(A);if(Be.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(z.FRAMEBUFFER,Be.__webglFramebuffer),Z.copy(A.viewport),se.copy(A.scissor),ce=A.scissorTest,w.viewport(Z),w.scissor(se),w.setScissorTest(ce),B=-1;return}else if(Be.__webglFramebuffer===void 0)ee.setupRenderTarget(A);else if(Be.__hasExternalTextures)ee.rebindTextures(A,K.get(A.texture).__webglTexture,K.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let pt=A.depthTexture;if(Be.__boundDepthTexture!==pt){if(pt!==null&&K.has(pt)&&(A.width!==pt.image.width||A.height!==pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(A)}}let Ze=A.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Fe=!0);let Qe=K.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[V])?J=Qe[V][ie]:J=Qe[V],Q=!0):A.samples>0&&ee.useMultisampledRTT(A)===!1?J=K.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?J=Qe[ie]:J=Qe,Z.copy(A.viewport),se.copy(A.scissor),ce=A.scissorTest}else Z.copy(te).multiplyScalar(oe).floor(),se.copy(ve).multiplyScalar(oe).floor(),ce=Te;if(ie!==0&&(J=D),w.bindFramebuffer(z.FRAMEBUFFER,J)&&w.drawBuffers(A,J),w.viewport(Z),w.scissor(se),w.setScissorTest(ce),Q){let Be=K.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+V,Be.__webglTexture,ie)}else if(Fe){let Be=V;for(let Ze=0;Ze<A.textures.length;Ze++){let Qe=K.get(A.textures[Ze]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ze,Qe.__webglTexture,ie,Be)}}else if(A!==null&&ie!==0){let Be=K.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Be.__webglTexture,ie)}B=-1};function T0(A){let V=K.get(A);return(V.__readFormat!==A.format||V.__readType!==A.type)&&(V.__readFormat=A.format,V.__readType=A.type,V.__formatReadable=k.textureFormatReadable(A.format),V.__typeReadable=k.textureTypeReadable(A.type)),V}this.readRenderTargetPixels=function(A,V,ie,J,Q,Fe,Ge,Be=0){if(!(A&&A.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ze=Ze[Ge]),Ze){w.bindFramebuffer(z.FRAMEBUFFER,Ze);try{let Qe=A.textures[Be],pt=Qe.format,At=Qe.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Be);let Ke=T0(Qe);if(Ke.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ke.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-J&&ie>=0&&ie<=A.height-Q&&z.readPixels(V,ie,J,Q,Re.convert(pt),Re.convert(At),Fe)}finally{let Qe=H!==null?K.get(H).__webglFramebuffer:null;w.bindFramebuffer(z.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(A,V,ie,J,Q,Fe,Ge,Be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ze=Ze[Ge]),Ze)if(V>=0&&V<=A.width-J&&ie>=0&&ie<=A.height-Q){w.bindFramebuffer(z.FRAMEBUFFER,Ze);let Qe=A.textures[Be],pt=Qe.format,At=Qe.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Be);let Ke=T0(Qe);if(Ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ot=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ot),z.bufferData(z.PIXEL_PACK_BUFFER,Fe.byteLength,z.STREAM_READ),z.readPixels(V,ie,J,Q,Re.convert(pt),Re.convert(At),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let mn=H!==null?K.get(H).__webglFramebuffer:null;w.bindFramebuffer(z.FRAMEBUFFER,mn);let en=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Jm(z,en,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ot),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Fe),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Ot),z.deleteSync(en),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,ie=0){let J=Math.pow(2,-ie),Q=Math.floor(A.image.width*J),Fe=Math.floor(A.image.height*J),Ge=V!==null?V.x:0,Be=V!==null?V.y:0;ee.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,ie,0,0,Ge,Be,Q,Fe),w.unbindTexture()},this.copyTextureToTexture=function(A,V,ie=null,J=null,Q=0,Fe=0){let Ge,Be,Ze,Qe,pt,At,Ke,Ot,mn,en=A.isCompressedTexture?A.mipmaps[Fe]:A.image;if(ie!==null)Ge=ie.max.x-ie.min.x,Be=ie.max.y-ie.min.y,Ze=ie.isBox3?ie.max.z-ie.min.z:1,Qe=ie.min.x,pt=ie.min.y,At=ie.isBox3?ie.min.z:0;else{let dn=Math.pow(2,-Q);Ge=Math.floor(en.width*dn),Be=Math.floor(en.height*dn),A.isDataArrayTexture?Ze=en.depth:A.isData3DTexture?Ze=Math.floor(en.depth*dn):Ze=1,Qe=0,pt=0,At=0}J!==null?(Ke=J.x,Ot=J.y,mn=J.z):(Ke=0,Ot=0,mn=0);let qt=Re.convert(V.format),Hn=Re.convert(V.type),ze;V.isData3DTexture?(ee.setTexture3D(V,0),ze=z.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ee.setTexture2DArray(V,0),ze=z.TEXTURE_2D_ARRAY):(ee.setTexture2D(V,0),ze=z.TEXTURE_2D),w.activeTexture(z.TEXTURE0),w.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),w.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),w.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);let Jn=w.getParameter(z.UNPACK_ROW_LENGTH),Ct=w.getParameter(z.UNPACK_IMAGE_HEIGHT),Mi=w.getParameter(z.UNPACK_SKIP_PIXELS),Ki=w.getParameter(z.UNPACK_SKIP_ROWS),Vs=w.getParameter(z.UNPACK_SKIP_IMAGES);w.pixelStorei(z.UNPACK_ROW_LENGTH,en.width),w.pixelStorei(z.UNPACK_IMAGE_HEIGHT,en.height),w.pixelStorei(z.UNPACK_SKIP_PIXELS,Qe),w.pixelStorei(z.UNPACK_SKIP_ROWS,pt),w.pixelStorei(z.UNPACK_SKIP_IMAGES,At);let to=A.isDataArrayTexture||A.isData3DTexture,Ht=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){let dn=K.get(A),Ws=K.get(V),Kt=K.get(dn.__renderTarget),Xs=K.get(Ws.__renderTarget);w.bindFramebuffer(z.READ_FRAMEBUFFER,Kt.__webglFramebuffer),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let no=0;no<Ze;no++)to&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,K.get(A).__webglTexture,Q,At+no),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,K.get(V).__webglTexture,Fe,mn+no)),z.blitFramebuffer(Qe,pt,Ge,Be,Ke,Ot,Ge,Be,z.DEPTH_BUFFER_BIT,z.NEAREST);w.bindFramebuffer(z.READ_FRAMEBUFFER,null),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||K.has(A)){let dn=K.get(A),Ws=K.get(V);w.bindFramebuffer(z.READ_FRAMEBUFFER,P),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,N);for(let Kt=0;Kt<Ze;Kt++)to?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,dn.__webglTexture,Q,At+Kt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,dn.__webglTexture,Q),Ht?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ws.__webglTexture,Fe,mn+Kt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ws.__webglTexture,Fe),Q!==0?z.blitFramebuffer(Qe,pt,Ge,Be,Ke,Ot,Ge,Be,z.COLOR_BUFFER_BIT,z.NEAREST):Ht?z.copyTexSubImage3D(ze,Fe,Ke,Ot,mn+Kt,Qe,pt,Ge,Be):z.copyTexSubImage2D(ze,Fe,Ke,Ot,Qe,pt,Ge,Be);w.bindFramebuffer(z.READ_FRAMEBUFFER,null),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ht?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(ze,Fe,Ke,Ot,mn,Ge,Be,Ze,qt,Hn,en.data):V.isCompressedArrayTexture?z.compressedTexSubImage3D(ze,Fe,Ke,Ot,mn,Ge,Be,Ze,qt,en.data):z.texSubImage3D(ze,Fe,Ke,Ot,mn,Ge,Be,Ze,qt,Hn,en):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Fe,Ke,Ot,Ge,Be,qt,Hn,en.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Fe,Ke,Ot,en.width,en.height,qt,en.data):z.texSubImage2D(z.TEXTURE_2D,Fe,Ke,Ot,Ge,Be,qt,Hn,en);w.pixelStorei(z.UNPACK_ROW_LENGTH,Jn),w.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ct),w.pixelStorei(z.UNPACK_SKIP_PIXELS,Mi),w.pixelStorei(z.UNPACK_SKIP_ROWS,Ki),w.pixelStorei(z.UNPACK_SKIP_IMAGES,Vs),Fe===0&&V.generateMipmaps&&z.generateMipmap(ze),w.unbindTexture()},this.initRenderTarget=function(A){K.get(A).__webglFramebuffer===void 0&&ee.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ee.setTextureCube(A,0):A.isData3DTexture?ee.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ee.setTexture2DArray(A,0):ee.setTexture2D(A,0),w.unbindTexture()},this.resetState=function(){R=0,U=0,H=null,w.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var Gf="https://race.vwfestmemecoin.com/api/arcade/zombies",Ml=null,Vf=i=>i.json(),hs={start(){return Ml=null,fetch(Gf+"/start",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}).then(Vf).then(i=>{i.ok&&(Ml=i.token)}).catch(()=>{})},hasToken(){return!!Ml},top(){return fetch(Gf+"/top").then(Vf).then(i=>i.ok?i.top:null).catch(()=>null)},submit(i,e,t,n){return fetch(Gf+"/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:Ml,nickname:i,score:e,pts:t,kills:n})}).then(Vf).then(s=>(s.ok&&(Ml=null),s)).catch(()=>({ok:!1,error:"Network hiccup. Try again."}))},render(i,e,t){if(i.replaceChildren(),!e){let n=document.createElement("li");n.className="muted",n.textContent="Leaderboard unavailable.",i.append(n);return}if(!e.length){let n=document.createElement("li");n.className="muted",n.textContent="No survivors yet. Be first.",i.append(n);return}for(let n of e.slice(0,5)){let s=document.createElement("li");t&&n.nickname===t&&(s.className="me");let r=document.createElement("b");r.textContent=String(n.nickname),s.append(r," \xB7 Round "+(n.score|0)+" \xB7 "+(n.aux|0).toLocaleString()+" pts"),i.append(s)}}};var Wt=Math.PI*2,Et=(i,e,t)=>i<e?e:i>t?t:i,Xe=(i,e,t)=>i+(e-i)*t,X=(i=1,e)=>e===void 0?Math.random()*i:i+Math.random()*(e-i),Ln=i=>i[Math.random()*i.length|0],Og=i=>i*i*(3-2*i);function pu(i,e,t){let n=i*374761393+e*668265263+t*144665|0;return n=(n^n>>>13)*1274126177,n=n^n>>>16,(n>>>0)%1e5/1e5}function ZS(i,e,t=0){let n=Math.floor(i),s=Math.floor(e),r=Og(i-n),o=Og(e-s),l=pu(n,s,t),c=pu(n+1,s,t),a=pu(n,s+1,t),h=pu(n+1,s+1,t);return Xe(Xe(l,c,r),Xe(a,h,r),o)}function Rt(i,e,t=4,n=0){let s=0,r=.5,o=1;for(let l=0;l<t;l++)s+=r*ZS(i*o,e*o,n+l*17),o*=2,r*=.5;return s}function or(i,e,t={}){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),r=s.createImageData(i,i),o=r.data;for(let c=0;c<i;c++)for(let a=0;a<i;a++){let h=(c*i+a)*4,u=e(a/i,c/i,a,c);o[h]=u[0],o[h+1]=u[1],o[h+2]=u[2],o[h+3]=255}s.putImageData(r,0,0),t.after&&t.after(s,i);let l=new Vt(n);return l.wrapS=l.wrapT=rn,l.anisotropy=t.aniso||4,t.srgb!==!1&&(l.colorSpace=lt),l.needsUpdate=!0,l}var mu=(i,e,t)=>[Xe(i[0],e[0],t),Xe(i[1],e[1],t),Xe(i[2],e[2],t)];function Bg(i=512){let e={};e.sand=or(i,(l,c)=>{let a=Rt(l*24,c*24,5,1),h=Rt(l*6+a*1.5,c*60,3,9),u=Et(a*.7+h*.5,0,1);return mu([112,86,58],[186,150,104],u)}),e.sandBump=or(i,(l,c)=>{let a=Rt(l*24,c*24,5,1),h=Rt(l*6+a*1.5,c*60,3,9),u=Et(a*.6+h*.7,0,1)*255;return[u,u,u]},{srgb:!1}),e.concrete=or(i,(l,c,a,h)=>{let u=Rt(l*18,c*18,5,3),d=Rt(l*80,c*80,2,4),f=.35+u*.5+(d-.5)*.15,p=Math.abs(Rt(l*7,c*7,3,12)-.5)<.012?.5:1;return f*=p,mu([48,50,54],[128,126,120],Et(f,0,1))}),e.concreteBump=or(i,(l,c)=>{let a=Rt(l*18,c*18,5,3)*255;return[a,a,a]},{srgb:!1}),e.rust=or(i,(l,c)=>{let a=Rt(l*10,c*10,5,5),h=Rt(l*3,c*40,3,7),u=Et((a-.42)*3.2+(h-.5)*.8,0,1),d=.62+(Rt(l*60,c*60,2,2)-.5)*.25;return mu([d*255,d*255,d*255],[150,70,28],u*.85)}),e.rustRough=or(i,(l,c)=>{let a=Rt(l*10,c*10,5,5),h=Rt(l*3,c*40,3,7);return[0,(.45+Et((a-.42)*3.2+(h-.5)*.8,0,1)*.5)*255,0]},{srgb:!1}),e.corr=or(256,(l,c)=>{let a=(Math.sin(l*Wt*16)*.5+.5)*255;return[a,a,a]},{srgb:!1}),e.corr.repeat.set(1,1),e.wood=or(256,(l,c)=>{let a=Rt(l*4,c*60,4,21),h=Rt(l*12,c*12,2,4);return mu([66,42,24],[150,108,66],Et(a*.9+h*.2,0,1))});let t=document.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d"),s=n.createRadialGradient(32,32,0,32,32,32);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.25,"rgba(255,255,255,.55)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,64,64),e.glow=new Vt(t),e.glow.colorSpace=lt;let r=document.createElement("canvas");r.width=1024,r.height=256;let o=r.getContext("2d");return o.fillStyle="#05070b",o.fillRect(0,0,1024,256),o.textAlign="center",o.textBaseline="middle",o.font="900 150px system-ui, Arial Black, sans-serif",o.shadowColor="#18ffb0",o.shadowBlur=40,o.fillStyle="#c8fff0",o.fillText("VW FEST",512,120),o.shadowBlur=20,o.font="700 46px system-ui, Arial, sans-serif",o.fillStyle="#ffb347",o.shadowColor="#ff7a00",o.fillText("AIR-COOLED SALVAGE  \xB7  $VWFEST",512,222),e.sign=new Vt(r),e.sign.colorSpace=lt,e.sign.anisotropy=4,e}function gu(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},l=i[0].morphTargetsRelative,c=new xt,a=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(a,f,h),a+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Fg(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let p=Fg(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function Fg(i){let e,t,n,s=-1,r=0;for(let a=0;a<i.length;++a){let h=i[a];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),l=new ct(o,t,n),c=0;for(let a=0;a<i.length;++a){let h=i[a];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let x=h.getComponent(d,p);l.setComponent(d+u,p,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(l.gpuType=s),l}function Wf(i,e){if(e===xf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ho||e===gl){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Ho)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function xu(i){let t=new DataView(i.buffer,i.byteOffset,i.byteLength).getUint32(0,!0),n=JSON.parse(new TextDecoder().decode(i.subarray(4,4+t))),s=i.byteOffset+4+t+(4-t%4)%4;return{meta:n,view:(o,[l,c])=>new o(i.buffer.slice(s+l,s+l+c*o.BYTES_PER_ELEMENT))}}function vu(i,e){let t=i(Uint16Array,e.pos),n=new Float32Array(t.length);for(let s=0;s<t.length;s++){let r=s%3;n[s]=e.min[r]+t[s]/65535*e.size[r]}return new ct(n,3)}var yu=(i,e)=>new ct(i(Int8Array,e.nrm),3,!0),qo={};async function Xf(i=["zombies","cars"]){await Promise.all(i.filter(e=>!qo[e]).map(async e=>{let t=await fetch("assets/"+e+".bin");if(!t.ok)throw new Error("missing assets/"+e+".bin");qo[e]=new Uint8Array(await t.arrayBuffer())}))}var Zf={},Yf={},KS={},kg=!1;function jS(){if(kg)return;kg=!0;let{meta:i,view:e}=xu(qo.cars);for(let t of i){KS[t.tag]=t.tris;let n=new xt;if(n.setAttribute("position",vu(e,t)),n.setAttribute("normal",yu(e,t)),n.setAttribute("color",new ct(e(Uint8Array,t.col),3,!0)),n.setIndex(new ct(e(Uint16Array,t.idx),1)),n.computeBoundingBox(),Zf[t.tag]=n,t.plate){let s=new xt;s.setAttribute("position",new ct(e(Float32Array,t.plate.pos),3)),s.setAttribute("normal",new ct(e(Float32Array,t.plate.nrm),3)),s.setAttribute("uv",new ct(e(Float32Array,t.plate.uv),2)),Yf[t.tag]=s}}}var qf;function $S(){if(qf)return qf;let i=document.createElement("canvas");i.width=256,i.height=96;let e=i.getContext("2d");e.fillStyle="#e9e4d4",e.fillRect(0,0,256,96),e.strokeStyle="#1d3557",e.lineWidth=6,e.strokeRect(5,5,246,86),e.fillStyle="#1d3557",e.font="900 46px Arial Black, Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("VWFEST",128,50);let t=new Vt(i);return t.colorSpace=lt,qf=new $e({map:t,roughness:.6})}var _u=new Map,JS=()=>_u.get(0)||(_u.set(0,new $e({vertexColors:!0,roughness:.55,metalness:.15})),_u.get(0));function Hg(i){let e=_u.get(0);if(!e)return;let t=i>0;e.roughness=t?.34:.55,e.metalness=t?.4:.15}var zg=new Map;function QS(i,e,t){let n=i+e+"/"+t,s=zg.get(n);if(s)return s;s=Zf[i].clone();let r=s.attributes.color,o=s.attributes.position,l=new pe(e),c=new pe(t??15129792),a=i==="camper";for(let h=0;h<r.count;h++){let u=r.getX(h),d=r.getY(h),f=r.getZ(h);if(Math.abs(u-.247)<.01&&Math.abs(d-.247)<.01&&Math.abs(f-.247)<.01){let p=a&&o.getY(h)>1.04?c:l;r.setXYZ(h,p.r*.85,p.g*.85,p.b*.85)}else u>.975&&d>.975&&f>.975&&r.setXYZ(h,c.r,c.g,c.b)}return zg.set(n,s),s}var eE=["bug","baja","ghia"],tE=["camper","wagon","safari"],nE=0,iE=0;function Kf(i,e,t,n={}){jS();let s=i==="big"?tE[iE++%3]:eE[nE++%3],r=new Ce;r.rotation.y=Math.PI;let o=new me(QS(s,e,t),JS());if(o.userData.noBatch=!0,r.add(o),Yf[s]){let a=new me(Yf[s],$S());a.userData.noBatch=!0,r.add(a)}let l=new Ce;l.add(r),n.tilt&&(l.rotation.z=n.tilt);let c=Zf[s].boundingBox.getSize(new O);return l.userData.size=[c.x,c.y,c.z],l}var Mu=class{constructor(e){this.T=e,this.cache={};let t=n=>new $e(n);this.sand=t({map:e.sand,bumpMap:e.sandBump,bumpScale:3,roughness:.97,metalness:0,color:13615792}),e.sand.repeat.set(90,90),e.sandBump.repeat.set(90,90),this.concrete=t({map:e.concrete,bumpMap:e.concreteBump,bumpScale:1.5,roughness:.88,metalness:.02}),e.concrete.repeat.set(10,10),e.concreteBump.repeat.set(10,10),this.fence=t({color:9281190,map:e.rust,roughnessMap:e.rustRough,bumpMap:e.corr,bumpScale:2.5,metalness:.75,roughness:1}),this.fenceDark=t({color:3818056,map:e.rust,roughnessMap:e.rustRough,metalness:.7,roughness:1}),this.wood=t({color:16777215,map:e.wood,roughness:.85,metalness:0}),this.tire=t({color:1381655,roughness:.92,metalness:0}),this.glass=t({color:660761,roughness:.08,metalness:.95}),this.chrome=t({color:13620954,roughness:.18,metalness:1}),this.lampBulb=new nt({color:new pe(5,3.2,1.4),toneMapped:!1}),this.lampBulbT=new nt({color:new pe(1.2,4.5,3.4),toneMapped:!1}),this.headlight=t({color:15328456,emissive:4867120,emissiveIntensity:.6,roughness:.2,metalness:.2}),this.tarp=t({color:4151882,roughness:.95})}paint(e){let t="p"+e;if(this.cache[t])return this.cache[t];let n=new $e({color:e,map:this.T.rust,roughnessMap:this.T.rustRough,metalness:.55,roughness:1});return n.userData.paint=1,this.cache[t]=n}flat(e,t=.8,n=.1){let s="f"+e+t+n;return this.cache[s]||(this.cache[s]=new $e({color:e,roughness:t,metalness:n}))}},sE=[6010272,14733722,14252330,11680302,6197184,13619140,9087050,13803834],jf=()=>Ln(sE),Zr=(i,e,t,n,s,r,o,l,c=14,a=9)=>{let h=new me(new cn(i,c,a),l);return h.scale.set(e,t,n),h.position.set(s,r,o),h},Rn=(i,e,t,n,s,r,o)=>{let l=new me(new ot(i,e,t),o);return l.position.set(n,s,r),l},Os=(i,e,t,n,s,r,o=!0,l=12)=>{let c=new me(new Bt(i,i,e,l),r);return o&&(c.rotation.z=Math.PI/2),c.position.set(t,n,s),c};function Gg(i,e,t,n,s=.34){let r=new Ce;return r.add(Os(s,.22,0,0,0,i.tire,!0,14)),r.add(Os(s*.55,.24,0,0,0,i.chrome,!0,8)),r.position.set(e,t,n),r}function Vg(i,e,t={}){let n=new Ce,s=i.paint(e);n.add(Zr(1,.9,.5,1.95,0,.78,0,s,18,10)),n.add(Zr(1,.72,.42,.95,0,1.17,.12,i.glass,16,8)),n.add(Zr(1,.74,.28,.95,0,1.42,.12,s,16,8));for(let r of[-1,1])for(let o of[-1,1])n.add(Zr(1,.22,.32,.55,r*.86,.5,o*1.2,s,10,8)),t.missing&&r===1&&o===1||n.add(Gg(i,r*.84,.34,o*1.2));for(let r of[-1,1])n.add(Zr(.12,1,1,1,r*.55,.92,-1.78,i.headlight,8,6));if(n.add(Rn(1.5,.08,.1,0,.44,-2.02,i.chrome)),n.add(Rn(1.5,.08,.1,0,.44,2.02,i.chrome)),n.add(Rn(.5,.1,.05,0,.78,1.92,i.fenceDark)),t.door){let r=Rn(.05,.5,1,.92,.9,-.2,s);r.rotation.y=.9,r.position.x=1.25,r.position.z=-.85,n.add(r)}return t.tilt&&(n.rotation.z=t.tilt),n.userData.size=[1.9,1.7,4.1],n}function Wg(i,e,t=15129792,n={}){let s=new Ce,r=i.paint(e),o=i.paint(t);s.add(Rn(2,.85,4.5,0,.78,0,r)),s.add(Rn(1.96,.9,4.4,0,1.66,0,o)),s.add(Rn(2.04,.1,4.55,0,1.19,0,r)),s.add(Rn(2,.08,4.5,0,2.15,0,r));for(let h of[-1,1])s.add(Rn(.03,.55,3.8,h*.99,1.7,.1,i.glass)),s.add(Rn(.03,.14,.7,h*1.01,.82,.8,i.fenceDark));s.add(Rn(1.7,.6,.04,0,1.68,-2.2,i.glass));let l=Rn(1.1,.8,.1,-.5,.78,-2.28,r);l.rotation.y=.3;let c=Rn(1.1,.8,.1,.5,.78,-2.28,r);c.rotation.y=-.3,s.add(l,c);let a=Os(.17,.04,0,.85,-2.43,i.chrome,!1,14);a.rotation.x=Math.PI/2,s.add(a);for(let h of[-1,1]){s.add(Zr(.13,1,1,.6,h*.72,.8,-2.36,i.headlight,8,6));for(let u of[-1.4,1.5])n.missing&&h===1&&u===1.5||s.add(Gg(i,h*.95,.38,u,.38))}return s.add(Rn(2.1,.1,.12,0,.45,-2.45,i.chrome)),s.add(Rn(2.1,.1,.12,0,.45,2.3,i.chrome)),n.tilt&&(s.rotation.z=n.tilt),s.userData.size=[2.1,2.2,4.6],s}function bl(i,e=4){let t=new Ce;for(let n=0;n<e;n++){let s=new me(new ti(.4,.18,8,14),i.tire);s.rotation.x=Math.PI/2,s.position.set(X(-.04,.04),.18+n*.3,X(-.04,.04)),t.add(s)}return t.userData.size=[1,.3*e+.1,1],t.userData.hd={kind:"tyre"},t}function ar(i,e){let t=new Ce;t.add(Os(.3,.9,0,.45,0,i.paint(e),!1,12));for(let n of[.2,.7])t.add(Os(.31,.04,0,n,0,i.fenceDark,!1,12));return t.userData.size=[.62,.9,.62],t.userData.hd={kind:"drum",color:e},t}function ni(i,e=1){let t=new Ce;t.add(Rn(e,e,e,0,e/2,0,i.wood));for(let[n,s]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(Rn(.07,e*1.02,.07,n*e/2,e/2,s*e/2,i.fenceDark));return t.userData.size=[e,e,e],t.userData.hd={kind:"crate",s:e},t}function Sl(i,e){let t=new Ce;t.add(Os(.09,5.2,0,2.6,0,i.fenceDark,!1,8)),t.add(Rn(.12,.12,1.1,0,5.15,-.5,i.fenceDark)),t.add(Rn(.5,.12,.3,0,5.08,-1.1,i.fenceDark));let n=new me(new cn(.17,8,6),e?i.lampBulbT:i.lampBulb);return n.position.set(0,4.98,-1.1),n.userData.bulb=!0,t.add(n),t.userData.size=[.4,5.2,.4],t.userData.bulbPos=new O(0,4.9,-1.1),t}function Xg(i){let e=new Ce,t=i.flat(3103288,.9,0),n=X(1.6,3.2);if(e.add(Os(.22,n,0,n/2,0,t,!1,8)),e.add(Zr(.22,1,1,1,0,n,0,t,8,5)),Math.random()<.8){let s=Os(.13,.7,.4,n*.6,0,t,!1,6);e.add(s),e.add(Os(.13,.5,.4+.32,n*.6+.3,0,t,!1,6)),e.children[e.children.length-1].rotation.z=0}return e}function qg(i,e){let t=new me(new Ba(e,0),i.flat(7035464,.95,0));t.scale.set(X(.9,1.5),X(.5,.9),X(.9,1.4)),t.rotation.set(X(3),X(3),X(3)),t.position.y=e*.3;let n=new Ce;return n.add(t),n}var yi=(i,e,t={})=>Kf("small",e,null,t),Ai=(i,e,t,n={})=>Kf("big",e,t,n);var El=new O;function Ri(i,e,t,n,s,r){let o=2*Math.PI*s/4,l=Math.max(r-2*s,0),c=Math.PI/4;El.copy(e),El[n]=0,El.normalize();let a=.5*o/(o+l),h=1-El.angleTo(i)/c;return Math.sign(El[t])===1?h*a:l/(o+l)+a+a*(1-h)}var bu=class i extends ot{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let c=new O,a=new O,h=new O(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,x=new O,g=.5/o;for(let m=0,v=0;m<u.length;m+=3,v+=2)switch(c.fromArray(u,m),a.copy(c),a.x-=Math.sign(a.x)*g,a.y-=Math.sign(a.y)*g,a.z-=Math.sign(a.z)*g,a.normalize(),u[m+0]=h.x*Math.sign(c.x)+a.x*r,u[m+1]=h.y*Math.sign(c.y)+a.y*r,u[m+2]=h.z*Math.sign(c.z)+a.z*r,d[m+0]=a.x,d[m+1]=a.y,d[m+2]=a.z,Math.floor(m/p)){case 0:x.set(1,0,0),f[v+0]=Ri(x,a,"z","y",r,n),f[v+1]=1-Ri(x,a,"y","z",r,t);break;case 1:x.set(-1,0,0),f[v+0]=1-Ri(x,a,"z","y",r,n),f[v+1]=1-Ri(x,a,"y","z",r,t);break;case 2:x.set(0,1,0),f[v+0]=1-Ri(x,a,"x","z",r,e),f[v+1]=Ri(x,a,"z","x",r,n);break;case 3:x.set(0,-1,0),f[v+0]=1-Ri(x,a,"x","z",r,e),f[v+1]=1-Ri(x,a,"z","x",r,n);break;case 4:x.set(0,0,1),f[v+0]=1-Ri(x,a,"x","y",r,e),f[v+1]=1-Ri(x,a,"y","x",r,t);break;case 5:x.set(0,0,-1),f[v+0]=Ri(x,a,"x","y",r,e),f[v+1]=1-Ri(x,a,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var zt=(i,e)=>i+Math.random()*(e-i);function Al(i,e){let t=document.createElement("canvas");t.width=t.height=i,e(t.getContext("2d"),i);let n=new Vt(t);return n.wrapS=n.wrapT=rn,n.anisotropy=4,n}var rE=(i,e)=>Al(512,(t,n)=>{t.fillStyle=i,t.fillRect(0,0,n,n);for(let s=0;s<2600;s++){t.strokeStyle=`rgba(255,255,255,${zt(.01,.04)})`;let r=zt(0,n);t.beginPath(),t.moveTo(zt(0,n),r),t.lineTo(zt(0,n),r+zt(-2,2)),t.stroke()}for(let s=0;s<160;s++){t.strokeStyle=e,t.globalAlpha=zt(.15,.5),t.lineWidth=zt(.5,1.6);let r=zt(0,n),o=zt(0,n);t.beginPath(),t.moveTo(r,o),t.lineTo(r+zt(-30,30),o+zt(-6,6)),t.stroke()}t.globalAlpha=1;for(let s=0;s<900;s++)t.fillStyle=`rgba(0,0,0,${zt(.1,.35)})`,t.fillRect(zt(0,n),zt(0,n),1.5,1.5)}),oE=()=>Al(256,(i,e)=>{let t=i.createImageData(e,e);for(let n=0;n<t.data.length;n+=4){let s=120+Math.random()*90;t.data[n]=t.data[n+1]=t.data[n+2]=s,t.data[n+3]=255}i.putImageData(t,0,0)}),aE=()=>Al(256,(i,e)=>{i.fillStyle="rgb(128,128,255)",i.fillRect(0,0,e,e);for(let t=0;t<5e3;t++){let n=zt(0,e),s=zt(0,e),r=zt(1,2.2),o=i.createRadialGradient(n-r*.4,s-r*.4,0,n,s,r);o.addColorStop(0,"rgb(90,90,255)"),o.addColorStop(1,"rgba(170,170,255,0)"),i.fillStyle=o,i.beginPath(),i.arc(n,s,r,0,7),i.fill()}}),lE=()=>Al(512,(i,e)=>{i.fillStyle="#4a2c17",i.fillRect(0,0,e,e);for(let t=0;t<260;t++){i.strokeStyle=`rgba(${zt(20,60)},${zt(10,30)},5,${zt(.15,.45)})`,i.lineWidth=zt(.5,3),i.beginPath();let n=zt(0,e);i.moveTo(0,n);for(let s=0;s<=16;s++)i.lineTo(s/16*e,n+=zt(-3,3)+Math.sin(s*.7+t)*1.4);i.stroke()}for(let t=0;t<40;t++)i.fillStyle="rgba(210,170,120,0.08)",i.fillRect(zt(0,e),zt(0,e),zt(10,60),zt(1,3))}),Tl;function cE(){if(Tl)return Tl;let i=oE(),e=aE(),t=(n,s,r,o)=>new $e({map:rE(n,s),roughnessMap:i,roughness:r,metalness:o,color:16777215});Tl={blued:t("#1b1e24","#9aa3ad",.42,.9),park:t("#34372f","#8d9184",.78,.55),steel:t("#4a4e54","#cfd4da",.3,.95),poly:new $e({color:1908256,roughness:.72,metalness:0,normalMap:e,normalScale:new de(.9,.9)}),polyTan:new $e({color:7299146,roughness:.75,normalMap:e,normalScale:new de(.6,.6)}),wood:new $e({map:lE(),roughness:.5,metalness:0,color:16777215}),brass:new $e({color:11569722,metalness:1,roughness:.3}),dot:new nt({color:new pe(.4,2.2,.8),toneMapped:!1}),dotR:new nt({color:new pe(2.4,.3,.2),toneMapped:!1}),glass:new $e({color:727586,metalness:.9,roughness:.05,emissive:401456}),glove:new $e({color:1974306,roughness:.85,normalMap:e,normalScale:new de(.4,.4)}),sleeve:new $e({color:3884598,roughness:.95,normalMap:e,normalScale:new de(.25,.25)})};for(let n of Object.values(Tl))n.map&&(n.map.colorSpace=lt);return Tl}function Fn(i,e,t,n,{x:s=0,bevel:r=.0025,curve:o=6}={}){let l=new Rs;e.forEach(([u,d],f)=>f?l.lineTo(u,d):l.moveTo(u,d));let c=new Xa(l,{depth:t-r*2,bevelEnabled:!0,bevelThickness:r,bevelSize:r,bevelSegments:2,curveSegments:o});c.translate(0,0,-(t-r*2)/2),c.rotateY(-Math.PI/2);let a=c.attributes.uv;for(let u=0;u<a.count;u++)a.setXY(u,a.getX(u)*4,a.getY(u)*4);let h=new me(c,n);return h.position.x=s,i.add(h),h}var yt=(i,e,t,n,s,r,o,l,c=.004,a=0)=>{let h=new me(new bu(e,t,n,2,c),l);return h.position.set(s,r,o),h.rotation.x=a,i.add(h),h},$f=(i,e,t,n,s,r,o,l,c=0)=>{let a=new me(new ot(e,t,n),l);return a.position.set(s,r,o),a.rotation.x=c,i.add(a),a},kt=(i,e,t,n,s,r,o,l=20,c)=>{let a=new me(new Bt(c??e,e,t,l,1),o);return a.rotation.x=Math.PI/2,a.position.set(n,s,r),i.add(a),a},Jf=(i,e,t,n,s,r,o)=>{let l=new me(new ti(e,t,8,24),o);return l.position.set(n,s,r),i.add(l),l};function wl(i,e,t,n){let s=new me(new ti(.022,.0035,6,18,Math.PI*1.15),n.poly);s.rotation.set(0,Math.PI/2,Math.PI*.93),s.position.set(0,t,e),i.add(s);let r=new me(new ti(.012,.003,6,10,Math.PI*.6),n.steel);r.rotation.set(0,Math.PI/2,Math.PI*1.15),r.position.set(0,t+.006,e+.004),i.add(r)}function Su(i,e,t,n,s){yt(i,.004,.009,.006,0,n+.004,e,s.blued,.001);let r=kt(i,.0016,.002,0,n+.006,e+.003,s.dot,8);r.rotation.x=0,r.rotation.z=Math.PI/2,r.rotation.y=Math.PI/2;for(let o of[-1,1]){yt(i,.005,.009,.008,o*.0055,n+.004,t,s.blued,.001);let l=kt(i,.0013,.002,o*.0055,n+.006,t-.0045,s.dotR,8);l.rotation.x=0}}var Eu={pistol(i,e){let t=new Ce;i.add(t),i.userData.slide=t,Fn(t,[[.02,0],[-.17,0],[-.172,.022],[-.165,.03],[.012,.03],[.02,.022]],.026,e.blued,{bevel:.002}),yt(t,.0262,.012,.032,0,.014,-.045,e.steel,.001);for(let n of[-1,1])for(let s=0;s<9;s++)yt(t,.0015,.022,.0016,n*.0132,.014,.008-s*.0036,e.steel,4e-4);for(let n of[-1,1])for(let s=0;s<6;s++)yt(t,.0015,.016,.0016,n*.0132,.012,-.13-s*.0036,e.steel,4e-4);Su(t,-.16,.008,.03,e),kt(t,.0075,.012,0,.012,-.172,e.steel,20),kt(t,.0045,.014,0,.012,-.175,e.poly,12),Fn(i,[[.03,-.002],[-.16,-.002],[-.16,-.012],[-.06,-.016],[-.05,-.022],[0,-.018],[.006,-.03],[.022,-.13],[.06,-.13],[.045,-.02],[.034,-.008]],.028,e.poly,{bevel:.003});for(let n=0;n<4;n++)yt(i,.0285,.003,.012,0,-.012,-.075-n*.012,e.poly,.001);return wl(i,-.02,-.03,e),yt(i,.03,.006,.042,0,-.133,.042,e.blued,.002,-.2),yt(i,.004,.006,.014,.0145,-.008,-.02,e.steel,.001),yt(i,.0035,.008,.02,.0145,.005,.02,e.steel,.001),yt(i,.012,.014,.008,0,.018,.032,e.steel,.002),{muzzle:-.18,eject:-.045,pos:[.17,-.17,-.38],lz:-.04}},smg(i,e){Fn(i,[[.09,0],[-.2,0],[-.2,.05],[.09,.05]],.05,e.park,{bevel:.004}),kt(i,.016,.12,0,.026,-.26,e.blued,20);for(let t=0;t<6;t++)Jf(i,.017,.0022,0,.026,-.22-t*.015,e.steel).rotation.y=0;for(let t=0;t<6;t++)yt(i,.052,.003,.012,0,.051,-.18+t*.03,e.blued,.001);Su(i,-.19,.06,.052,e),yt(i,.036,.16,.026,0,-.08,-.06,e.blued,.004,.12);for(let t=0;t<8;t++)yt(i,.038,.004,.028,0,-.01-t*.018,-.06+t*.002,e.steel,.001,.12);return Fn(i,[[0,0],[.03,0],[.05,-.11],[.02,-.11]],.032,e.poly,{bevel:.004}),wl(i,-.005,-.012,e),kt(i,.006,.2,.018,.02,.18,e.steel,10),kt(i,.006,.2,-.018,.02,.18,e.steel,10),yt(i,.05,.07,.012,0,0,.28,e.poly,.004),yt(i,.012,.012,.03,.03,.03,.02,e.steel,.003),{muzzle:-.33,eject:-.05,pos:[.19,-.19,-.4],lz:-.2}},shotgun(i,e){Fn(i,[[.06,-.01],[-.14,-.01],[-.14,.055],[.04,.055],[.06,.04]],.05,e.blued,{bevel:.004}),kt(i,.0125,.6,0,.038,-.44,e.blued,22),kt(i,.0145,.52,0,0,-.4,e.blued,22),Jf(i,.016,.003,0,0,-.66,e.steel);let t=new me(new cn(.003,10,8),e.brass);t.position.set(0,.052,-.735),i.add(t);let n=Fn(i,[[-.28,-.02],[-.46,-.02],[-.46,.02],[-.28,.02]],.05,e.wood,{bevel:.008});for(let s=0;s<9;s++)yt(i,.052,.004,.006,0,-.022,-.3-s*.017,e.wood,.002);return i.userData.pump=n,Fn(i,[[.06,.04],[.32,.03],[.34,.05],[.36,-.1],[.3,-.11],[.1,-.03],[.06,-.01]],.042,e.wood,{bevel:.008}),yt(i,.044,.15,.02,0,-.03,.355,e.poly,.006,-.12),wl(i,.035,-.02,e),yt(i,.051,.012,.05,0,.022,-.05,e.steel,.002),{muzzle:-.75,eject:-.05,pos:[.2,-.2,-.4],lz:-.38}},rifle(i,e){Fn(i,[[.12,0],[-.17,0],[-.17,.045],[.12,.045]],.052,e.park,{bevel:.004});for(let n=0;n<18;n++)$f(i,.042,.004,.006,0,.049,-.16+n*.016,e.blued);Fn(i,[[-.17,-.005],[-.44,-.005],[-.44,.05],[-.17,.05]],.056,e.polyTan,{bevel:.006});for(let n=0;n<7;n++)for(let s of[-1,1])$f(i,.004,.018,.022,s*.028,.022,-.2-n*.034,e.poly);kt(i,.0095,.26,0,.022,-.56,e.blued,18),kt(i,.016,.05,0,.022,-.71,e.park,6);for(let n=0;n<3;n++)yt(i,.004,.006,.03,.017,.03,-.71,e.poly,.001).rotation.z=n;yt(i,.008,.045,.012,0,.07,-.43,e.park,.002),kt(i,.019,.1,0,.1,-.05,e.blued,24),kt(i,.023,.03,0,.1,-.11,e.blued,24),kt(i,.021,.025,0,.1,.01,e.blued,24);let t=kt(i,.019,.002,0,.1,-.126,e.glass,24);yt(i,.024,.03,.05,0,.068,-.05,e.park,.003),Fn(i,[[0,0],[-.06,0],[-.06,-.12],[-.03,-.14],[0,-.12]],.03,e.park,{bevel:.003}).rotation.x=-.15;for(let n=0;n<6;n++)$f(i,.032,.003,.03,0,-.03-n*.02,-.03+n*.003,e.blued,-.15);return Fn(i,[[.03,-0],[.07,-0],[.09,-.11],[.055,-.115]],.032,e.poly,{bevel:.004}),wl(i,0,-.012,e),kt(i,.014,.14,0,.025,.19,e.poly,16),Fn(i,[[.2,.05],[.36,.045],[.36,-.07],[.33,-.08],[.2,0]],.044,e.polyTan,{bevel:.006}),yt(i,.046,.13,.014,0,-.012,.365,e.poly,.005),yt(i,.014,.014,.034,.03,.03,0,e.steel,.003),{muzzle:-.74,eject:-.03,pos:[.2,-.2,-.4],lz:-.3}},lmg(i,e){Fn(i,[[.12,-.01],[-.2,-.01],[-.2,.06],[.12,.06]],.07,e.park,{bevel:.005}),yt(i,.075,.03,.2,0,.075,-.06,e.park,.004);for(let t=0;t<12;t++)yt(i,.05,.005,.008,0,.093,-.15+t*.016,e.blued,.001);kt(i,.024,.36,0,.025,-.38,e.blued,22);for(let t=0;t<14;t++)Jf(i,.026,.004,0,.025,-.24-t*.02,e.park);kt(i,.012,.16,0,.025,-.64,e.blued,16),kt(i,.018,.06,0,.025,-.73,e.park,8),yt(i,.13,.13,.15,0,-.1,-.03,e.polyTan,.012);for(let t=0;t<5;t++)yt(i,.132,.006,.152,0,-.15+t*.025,-.03,e.poly,.002);for(let t=0;t<6;t++)kt(i,.005,.03,.04,.05,-.01+t*.011,e.brass,8).rotation.set(0,0,Math.PI/2);Fn(i,[[.04,-.01],[.08,-.01],[.1,-.12],[.065,-.125]],.034,e.poly,{bevel:.004}),wl(i,.01,-.02,e),Fn(i,[[.12,.05],[.4,.04],[.4,-.08],[.36,-.09],[.12,-.01]],.05,e.poly,{bevel:.007}),Su(i,-.66,.08,.093,e);for(let t of[-1,1]){let n=kt(i,.005,.18,t*.03,-.05,-.62,e.steel,8);n.rotation.x=Math.PI/2+.35}return{muzzle:-.76,eject:-.02,pos:[.2,-.21,-.4],lz:-.3}},akimbo(i,e){let t=new Ce;t.position.set(-.12,-.01,.02),t.rotation.y=.22,t.rotation.z=.08;let n=new Ce;n.position.set(.12,-.01,0),n.rotation.y=-.12,n.rotation.z=-.04,i.add(t,n);let s=Eu.pistol(t,e),r=Eu.pistol(n,e),o=new gt;o.position.set(0,.012,s.muzzle),t.add(o);let l=new gt;l.position.set(0,.012,r.muzzle),n.add(l),yt(t,.048,.04,.07,.01,-.09,.01,e.glove,.012),yt(n,.048,.04,.07,-.01,-.09,0,e.glove,.012);let c=new me(new Bt(.032,.04,.28,12),e.sleeve);c.rotation.set(Math.PI/2,.4,.2),c.position.set(-.08,-.16,.16),i.add(c);let a=new me(new Bt(.032,.04,.28,12),e.sleeve);return a.rotation.set(Math.PI/2,-.2,-.15),a.position.set(.08,-.16,.16),i.add(a),{muzzle:r.muzzle,eject:-.04,pos:[0,-.16,-.36],lz:0,akimbo:!0,muzzles:[o,l],slides:[t.userData.slide,n.userData.slide]}},lever(i,e){kt(i,.011,.62,0,.03,-.42,e.blued,18),kt(i,.016,.18,0,.012,-.22,e.steel,16),Fn(i,[[.02,.02],[.28,.015],[.3,-.08],[.24,-.09],[.06,-.01]],.04,e.wood,{bevel:.006}),yt(i,.038,.12,.016,0,-.02,.29,e.poly,.004);let t=new me(new ti(.045,.004,6,16,Math.PI),e.steel);return t.rotation.set(0,Math.PI/2,Math.PI),t.position.set(0,-.04,.02),i.add(t),i.userData.pump=t,Su(i,-.7,.02,.045,e),kt(i,.008,.04,0,.03,-.74,e.blued,12),yt(i,.03,.05,.04,0,-.02,.04,e.wood,.004),{muzzle:-.76,eject:0,pos:[.18,-.18,-.42],lz:-.28}},nailer(i,e){yt(i,.09,.11,.22,0,0,-.02,e.park,.008),yt(i,.07,.06,.16,0,-.02,.12,e.polyTan,.006),kt(i,.012,.16,0,.01,-.2,e.steel,14),kt(i,.02,.04,0,.01,-.28,e.blued,12);for(let s=0;s<5;s++)yt(i,.004,.012,.05,.048,.02-s*.012,-.02,e.brass,.001);let t=new me(new ti(.05,.006,6,14),e.poly);t.rotation.x=Math.PI/2,t.position.set(.02,-.02,.2),i.add(t),yt(i,.035,.08,.04,0,-.08,.02,e.poly,.004,.3);let n=kt(i,.004,.02,0,.01,-.31,e.dot,8);return n.material=e.dot,{muzzle:-.32,eject:-.02,pos:[.2,-.18,-.36],lz:-.08}},sawed(i,e){kt(i,.014,.28,.012,.02,-.16,e.blued,16),kt(i,.014,.28,-.012,.02,-.16,e.blued,16),yt(i,.05,.04,.08,0,0,-.02,e.steel,.004),Fn(i,[[0,0],[.02,-.02],[.05,-.12],[.02,-.13],[-.01,-.02]],.032,e.wood,{bevel:.005}),yt(i,.02,.03,.02,.03,.03,0,e.steel,.002);let t=new me(new cn(.004,8,6),e.brass);return t.position.set(0,.04,-.3),i.add(t),{muzzle:-.31,eject:-.02,pos:[.18,-.16,-.34],lz:-.02}}},Qf;function hE(){if(Qf)return Qf;let i=Al(128,(e,t)=>{let n=t/2,s=e.createRadialGradient(n,n,0,n,n,n);s.addColorStop(0,"rgba(255,250,230,1)"),s.addColorStop(.25,"rgba(255,190,90,0.9)"),s.addColorStop(1,"rgba(255,90,20,0)"),e.fillStyle=s;for(let r=0;r<7;r++)e.save(),e.translate(n,n),e.rotate(r/7*6.283+zt(-.2,.2)),e.beginPath(),e.moveTo(0,-6),e.lineTo(n*zt(.7,1),0),e.lineTo(0,6),e.fill(),e.restore();e.beginPath(),e.arc(n,n,n*.35,0,7),e.fill()});return i.wrapS=i.wrapT=Wn,Qf=new nt({map:i,color:new pe(3,2.2,1.2),blending:an,transparent:!0,depthWrite:!1,side:It,toneMapped:!1})}function Yg(i,e=!0){let t=cE(),n=new Ce,s=(Eu[i]||Eu.rifle)(n,t);if(!e){let u=new gt;return n.userData={muzzle:u,eject:u,base:new O},n}if(!s.akimbo){yt(n,.05,.08,.075,0,-.065,.035,t.glove,.018).rotation.x=.25;for(let p=0;p<3;p++)yt(n,.052,.016,.03,.002,-.04-p*.02,0,t.glove,.007);let u=new me(new Bt(.034,.042,.32,16),t.sleeve);u.rotation.x=Math.PI/2-.25,u.position.set(.02,-.13,.22),n.add(u);let d=yt(n,.055,.05,.09,i==="pistol"?-.018:-.028,i==="pistol"?-.07:-.03,s.lz,t.glove,.016),f=new me(new Bt(.034,.042,.34,16),t.sleeve);f.rotation.set(Math.PI/2-.1,.35,0),f.position.set(-.1,-.12,s.lz+.22),n.add(f)}n.traverse(u=>{u.isMesh&&(u.castShadow=!1)});let r=new gt;r.position.set(0,i==="pistol"?.012:.022,s.muzzle),n.add(r);let o=new gt;o.position.set(.04,.03,s.eject),n.add(o);let l=new Ce,c=hE();for(let u=0;u<2;u++){let d=new me(new on(.06,.16),c);d.rotation.set(Math.PI/2,u*Math.PI/2,0),d.position.z=-.07,l.add(d)}let a=new me(new on(.12,.12),c);l.add(a),l.position.copy(r.position),l.visible=!1,n.add(l);let h=0;return n.traverse(u=>{u.isMesh&&(h+=(u.geometry.index?u.geometry.index.count:u.geometry.attributes.position.count)/3)}),n.userData={muzzle:r,eject:o,flash:l,slide:n.userData.slide,slides:s.slides||null,muzzles:s.muzzles||null,pump:n.userData.pump,base:new O(...s.pos),tris:Math.round(h)},n.userData.base.z-=.1,n.userData.base.x-=.03,n.position.copy(n.userData.base),n.scale.setScalar(.9),n}var $t={pistol:{id:"pistol",name:"Dustdevil .45",dmg:30,rpm:380,auto:!1,mag:12,reserve:60,reload:1.25,spread:.004,pellets:1,kick:.01,shake:.12,price:0,head:3.2,snd:"pistol",range:90},smg:{id:"smg",name:"Rattler SMG",dmg:22,rpm:820,auto:!0,mag:32,reserve:160,reload:1.6,spread:.014,pellets:1,kick:.006,shake:.08,price:600,head:2.4,snd:"smg",range:80},shotgun:{id:"shotgun",name:"Sidewinder 12g",dmg:17,rpm:78,auto:!1,mag:6,reserve:42,reload:.5,perShell:!0,spread:.055,pellets:9,kick:.04,shake:.4,price:1200,head:2,snd:"shotgun",range:30},rifle:{id:"rifle",name:"Ridgeback AR",dmg:42,rpm:620,auto:!0,mag:30,reserve:150,reload:1.9,spread:.007,pellets:1,kick:.013,shake:.18,price:1800,head:2.6,snd:"rifle",range:120},lmg:{id:"lmg",name:"Hog Hammer LMG",dmg:40,rpm:700,auto:!0,mag:100,reserve:300,reload:3.8,spread:.012,pellets:1,kick:.012,shake:.2,price:0,crateOnly:!0,head:2.4,snd:"lmg",range:110},akimbo:{id:"akimbo",name:"Twin Dustdevils",dmg:26,rpm:500,auto:!1,mag:24,reserve:96,reload:1.7,spread:.009,pellets:1,kick:.008,shake:.1,price:750,head:2.6,snd:"akimbo",range:70,akimbo:!0},lever:{id:"lever",name:"Barn Lever",dmg:70,rpm:55,auto:!1,mag:7,reserve:35,reload:.48,perShell:!0,spread:.002,pellets:1,kick:.02,shake:.16,price:1500,head:3,snd:"lever",range:110},nailer:{id:"nailer",name:"Shop Nailer",dmg:14,rpm:900,auto:!0,mag:36,reserve:144,reload:1.5,spread:.022,pellets:1,kick:.003,shake:.05,price:800,head:1.4,snd:"nailer",range:22},sawed:{id:"sawed",name:"Sawed-off",dmg:24,rpm:200,auto:!1,mag:2,reserve:20,reload:1.7,spread:.11,pellets:8,kick:.06,shake:.55,price:0,crateOnly:!0,head:1.5,snd:"sawed",range:14}},Rl=["smg","shotgun","rifle","lmg","sawed","lever"],rR=new $e({color:2895669,metalness:.9,roughness:.34}),oR=new $e({color:5593439,metalness:.85,roughness:.28}),aR=new $e({color:4072982,metalness:0,roughness:.55}),lR=new $e({color:1626528,metalness:.4,roughness:.3,emissive:678469,emissiveIntensity:.8}),cR=new $e({color:12946539,roughness:.7}),hR=new $e({color:4016698,roughness:.9}),uR=new $e({color:1776928,roughness:.8});function Cl(i,e=!0){return Yg(i,e)}var ep={discount:.5,pickup:1.35,deliver:1.9,board:1.7,radio:3.6,decay:.5,lots:{C:{x0:24,x1:50.4,z0:2,z1:22},D:{x0:-50.4,x1:-24,z0:-34,z1:-2},E:{x0:4,x1:24.4,z0:-76.4,z1:-52}},gates:[{id:"AB",price:1250,name:"Back lot",blurb:"The back lot awaits",areas:["A","B"],x:0,z:-24,w:6,axis:"x",stand:{A:{x:0,z:-22.2},B:{x:0,z:-25.8}}},{id:"AC",price:1500,name:"Lot C",blurb:"Fuel yard open",areas:["A","C"],x:24,z:12,w:5,axis:"z",stand:{A:{x:22.2,z:12},C:{x:25.8,z:12}}},{id:"AD",price:1750,name:"Lot D",blurb:"Bus barn open",areas:["A","D"],x:-24,z:-14,w:5,axis:"z",stand:{A:{x:-22.2,z:-14},D:{x:-25.8,z:-14}}},{id:"SD",price:900,name:"Side access",blurb:"Side gate open",areas:["B","D"],x:-24,z:-30,w:4.2,axis:"z",stand:{B:{x:-22.2,z:-30},D:{x:-25.8,z:-30}}},{id:"BE",price:2e3,name:"Lot E",blurb:"Radio yard open",areas:["B","E"],x:12,z:-52,w:5,axis:"x",stand:{B:{x:12,z:-50.2},E:{x:12,z:-53.8}}}],jobs:[{id:"fuel",title:"Fuel Run",kind:"carry",gate:"AC",area:"A",need:3,pts:400,power:"double",pad:{x:19.2,z:12},items:[{id:"f0",x:15,z:19},{id:"f1",x:-16,z:18},{id:"f2",x:6,z:4}]},{id:"bus",title:"Board the Bus",kind:"board",gate:"AD",area:"A",need:4,pts:500,power:"ammo",pad:{x:-15,z:4.2},items:[{id:"b0",x:-16.45,z:.2},{id:"b1",x:-16.45,z:2.1},{id:"b2",x:-13.55,z:.2},{id:"b3",x:-13.55,z:2.1}]},{id:"carb",title:"Carb Hunt",kind:"carry",gate:"SD",area:"B",need:1,pts:350,power:"double",pad:{x:-18.2,z:-30},items:[{id:"carb",x:-6,z:20}]},{id:"radio",title:"Radio Hold",kind:"radio",gate:"BE",area:"B",need:20,pts:600,power:"ammo",pad:{x:8,z:-42},items:[]},{id:"parts",title:"Part Collection",kind:"carry",gate:"",area:"C",need:3,pts:450,power:"double",pad:{x:40,z:5.5},items:[{id:"p0",x:32,z:18},{id:"p1",x:46,z:16},{id:"p2",x:36,z:9}]},{id:"clear",title:"Clear Lot D",kind:"clear",gate:"",area:"D",need:8,pts:500,power:"ammo",pad:{x:-37,z:-18},items:[]}]};var Xt=ep,tp=-24;function Vi(i,e,t="junkyard"){if(typeof e!="number")return i>tp?"A":"B";if(t!=="junkyard")return e>tp?"A":"B";let n=ep.lots;for(let s of["C","D","E"]){let r=n[s];if(i>r.x0&&i<r.x1&&e>r.z0&&e<r.z1)return s}return e>tp?"A":(e>=-52,"B")}function Yo(i){let e=new Set((i||[]).filter(n=>n&&n.open).map(n=>n.id)),t=new Set(["A"]);return e.has("AB")&&t.add("B"),e.has("AC")&&t.add("C"),(e.has("AD")||e.has("SD"))&&t.add("D"),e.has("BE")&&t.add("E"),t}function Zg(i,e){return i.stand&&i.stand[e]||{x:i.x,z:i.z}}function dE(i,e,t){if(!i||!e||i===e)return i===e?[]:null;let n=new Map;for(let c of t||[]){if(!c||!c.open||!c.areas||c.areas.length<2)continue;let[a,h]=c.areas;n.has(a)||n.set(a,[]),n.has(h)||n.set(h,[]),n.get(a).push(c),n.get(h).push(c)}let s=[i],r=new Map([[i,null]]);for(;s.length;){let c=s.shift();if(c===e)break;for(let a of n.get(c)||[]){let h=a.areas[0]===c?a.areas[1]:a.areas[0];r.has(h)||(r.set(h,{via:a,from:c}),s.push(h))}}if(!r.has(e))return null;let o=[],l=e;for(;r.get(l);)o.push(r.get(l).via),l=r.get(l).from;return o.reverse(),o}function Kg(i,e,t,n,s,r=0){let o=Vi(i,e,t);if(!n||o===n)return null;let l=dE(o,n,s);if(!l||!l.length)return null;let c=l[0],a=c.areas[0]===o?c.areas[1]:c.areas[0],h=c.axis!=="z",u=Zg(c,o),d=Zg(c,a),f=h?Math.sign(d.z-u.z)||-1:Math.sign(d.x-u.x)||1,p=h?e:i,x=h?c.z:c.x,g=(p-x)*f,m=Math.max(.25,(c.w||6)/2-1.05),v=Math.max(-m,Math.min(m,r||0)),M=x+f*1.55;return{x:h?c.x+v:M,z:h?M:c.z+v,ex:h?c.x:M,ez:h?M:c.z,gate:c.id,next:a,progress:g,crossZ:h,gx:c.x,gz:c.z}}var kn=-24;function Tu(i,e="#18d1a0",t=512,n=256){let s=document.createElement("canvas");s.width=t,s.height=n;let r=s.getContext("2d");r.fillStyle="rgba(8,12,16,0.82)",r.fillRect(0,0,t,n),r.strokeStyle=e,r.lineWidth=6,r.strokeRect(8,8,t-16,n-16),r.textAlign="center",r.textBaseline="middle",i.forEach((l,c)=>{r.font=`${l.w||700} ${l.s}px system-ui, "Segoe UI", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji"`,r.fillStyle=l.c||"#fff",r.fillText(l.t,t/2,l.y)});let o=new Vt(s);return o.colorSpace=lt,o.anisotropy=4,o}function fE(){try{let i=document.createElement("canvas");i.width=i.height=32;let e=i.getContext("2d");e.textBaseline="middle",e.textAlign="center",e.font='28px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",system-ui,sans-serif',e.fillStyle="#ffffff",e.fillText("\u{1F4A3}",16,16);let t=e.getImageData(0,0,32,32).data,n=0;for(let s=0;s<t.length;s+=4)t[s+3]>60&&Math.max(t[s],t[s+1],t[s+2])-Math.min(t[s],t[s+1],t[s+2])>40&&n++;return n>12}catch{return!1}}var Pl=class{constructor(e,t,n){this.scene=e,this.T=t,this.M=new Mu(t),this.tier=n,this.colliders=[],this.windows=[],this.buys=[],this.lamps=[],this.dyn=[],this.fall=[],this.doorInfos=[],this.doors=[],this.missionMeshes=new Map,this.mapId="junkyard",this.staticGroup=new Ce,this.root=new Ce,e.add(this.root),this.build(),this.batch(),this.dress(n)}dress(e=this.tier){let t=e>0,n=this.M;n.sand.color.setHex(t?11047032:13615792),n.sand.bumpScale=t?5.5:3,n.sand.roughness=t?.96:.97,n.concrete.color.setHex(t?13154984:16777215),n.concrete.bumpScale=t?2.8:1.5,n.concrete.roughness=t?.96:.88,n.concrete.metalness=t?0:.02,n.fence.roughness=t?.42:1,n.fence.metalness=t?.84:.75,n.fence.bumpScale=t?4.2:2.5,n.fenceDark.roughness=t?.6:1,n.fenceDark.metalness=t?.55:.7;for(let s of Object.values(n.cache))s.userData.paint&&(s.roughness=t?.4:1,s.metalness=t?.25:.55);if(this.lampReach=t?18:30,this.lampDecay=t?2:1.7,this.lampBase=t?90:95,this.moon&&(this.moon.intensity=t?1.4:1.7),this.lampPool)for(let s of this.lampPool)s.distance=this.lampReach,s.decay=this.lampDecay;Hg(e)}addCol(e,t,n,s,r=3,o={}){let l={x0:e,x1:t,z0:n,z1:s,y0:o.y0||0,y1:r,...o};return this.colliders.push(l),l}box(e,t,n,s,r,o,l,c={}){let a=new me(new ot(e,t,n),l);return a.position.set(s,r,o),a.castShadow=c.cast!==!1,a.receiveShadow=!0,(c.dynamic?this.root:this.staticGroup).add(a),a}place(e,t,n,s=0,r=!0){e.position.x+=t,e.position.z+=n,e.rotation.y=s,e.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0)}),this.staticGroup.add(e);let o=e.userData.hd;if(o){e.updateMatrix(),e.traverse(c=>{c.isMesh&&(c.userData.hdProp=!0)});let l=o.kind==="tyre"?e.children.map(c=>new je().makeTranslation(c.position.x,c.position.y,c.position.z).premultiply(e.matrix).multiply(new je().makeRotationY(X(Wt)))):[e.matrix.clone()];for(let c of l)(this.hdProps||(this.hdProps=[])).push({...o,m:c})}if(r&&e.userData.size){let[l,c,a]=e.userData.size;Math.abs(Math.sin(s))>.7&&([l,a]=[a,l]),this.addCol(t-l/2+.05,t+l/2-.05,n-a/2+.05,n+a/2-.05,c)}return e}build(){let{M:e,T:t,scene:n}=this;this.mapId="junkyard",this.buildSky(),this.buildGround();let s=3.2,r=.4,o=(u,d,f,p=[],x=e.fence)=>this.wall("x",u,d,f,p,s,r,x),l=(u,d,f,p=[],x=e.fence)=>this.wall("z",u,d,f,p,s,r,x),c=u=>{let d=Xt.gates.find(f=>f.id===u);return{c:d.axis==="x"?d.x:d.z,id:d.id,door:!0,w:d.w,price:d.price,name:d.name,blurb:d.blurb,areas:d.areas,stand:d.stand}};o(24,-24,24,[{c:-10,id:"S1",area:"A"},{c:11,id:"S2",area:"A"}]),l(24,-24,24,[{c:-4,id:"E1",area:"A"},c("AC")]),l(-24,-24,24,[{c:6,id:"W1",area:"A"},c("AD")]),o(-24,-24,24,[c("AB")]),l(24,-52,-24,[{c:-40,id:"E2",area:"B"}]),l(-24,-52,-24,[{c:-38,id:"W2",area:"B"},c("SD")]),o(-52,-24,24,[{c:-12,id:"N1",area:"B"},c("BE")]);let a=(u,d,f,p)=>{let x=new me(new on(u,d),e.concrete);x.rotation.x=-Math.PI/2,x.position.set(f,.015,p),x.receiveShadow=!0,this.staticGroup.add(x)};a(48,48,0,0),a(48,28,0,-38),this.buildLots(o,l,a),this.buildGate();let h=this.place.bind(this);h(yi(e,6010272,{door:!0}),-9,-9,.2*0),h(yi(e,14252330,{missing:!0,tilt:.04}),13,-10,Math.PI/2),h(Ai(e,6197184),9,11,Math.PI/2),h(Ai(e,14252330,15129792,{missing:!0}),-15,1,0),h(yi(e,14733722),-4,16,Math.PI/2+0),h(yi(e,11680302,{tilt:-.05}),19,16,0),h(Ai(e,9087050,15129792),3,-14,Math.PI/2);for(let[u,d,f]of[[17,2,5],[-20,-5,4],[-3,-4,3],[-19,19,6],[21,-20,4]])h(bl(e,f),u,d);for(let[u,d,f]of[[5,19,3829413],[6.2,19.8,11680302],[4.4,20.6,9087050],[-1,-19,14252330],[.2,-20,3829413]])h(ar(e,f),u,d);h(ni(e,1.1),-21,12),h(ni(e,.9),-20.8,13.2),h(ni(e,1.3),21,9),h(ni(e,1),20.4,10.4),this.shack(18,-17,6,5),h(yi(e,13619140,{missing:!0}),-12,-36,Math.PI/2),h(yi(e,6010272,{tilt:.05}),14,-46,.3*0),h(Ai(e,11680302,15129792),6,-35,0),h(Ai(e,6010272,15129792,{tilt:.04}),-10,-47,Math.PI/2),h(yi(e,13803834,{door:!0}),0,-43,Math.PI/2);for(let[u,d,f]of[[18,-30,5],[-20,-29,3],[19,-36,4],[-3,-30,4]])h(bl(e,f),u,d);for(let[u,d,f]of[[-19,-49,14252330],[-18,-50,3829413],[20,-50,11680302]])h(ar(e,f),u,d);h(ni(e,1.2),21,-46),h(ni(e,1),-21,-42),h(ni(e,.9),20.6,-47.4);for(let[u,d,f,p]of[[-11,11,0,.6],[14,5,0,2.6],[-13,-12,1,-.5],[10,-19,0,3.4],[-8,-30,0,.3],[11,-40,1,3],[-4,-49,0,1.4]]){let x=Sl(this.M,!!f);x.position.set(u,0,d),x.rotation.y=p,x.traverse(m=>{m.isMesh&&(m.castShadow=!m.userData.bulb)}),x.updateMatrixWorld(!0),this.addCol(u-.2,u+.2,d-.2,d+.2,5);let g=x.userData.bulbPos.clone().applyMatrix4(x.matrixWorld);this.lamps.push({pos:g,teal:!!f,ph:X(100)}),this.staticGroup.add(x)}this.wallBuy("smg",-14,kn+.25,0),this.wallBuy("shotgun",23.75,-15,-Math.PI/2),this.wallBuy("rifle",-23.75,-44,Math.PI/2),this.wallBuy("akimbo",23.75,8,-Math.PI/2),this.wallBuy("lever",-23.75,-32,Math.PI/2),this.wallBuy("nailer",10,23.65,Math.PI),this.nadeBuy(4,16.2,0),this.wallBuy("smg",49.65,12,-Math.PI/2),this.wallBuy("shotgun",-49.65,-16,Math.PI/2),this.wallBuy("rifle",18,-75.65,0),this.buildCrate(-17.5,14.5),this.scenery(),this.buildLights()}wall(e,t,n,s,r,o,l,c){let{M:a}=this,h=p=>p.w||3.2,u=[...r].sort((p,x)=>p.c-x.c),d=n,f=(p,x)=>{if(x-p<.05)return;let g=x-p,m=(p+x)/2,v=Math.max(1,Math.ceil(g/8));for(let M=0;M<v;M++){let _=p+g*M/v,b=p+g*(M+1)/v;this.wseg(e,t,_,b,o,l,c)}};for(let p of u)f(d,p.c-h(p)/2),this.opening(e,t,p,o,l,c),d=p.c+h(p)/2;f(d,s)}wseg(e,t,n,s,r,o,l){let c=s-n,a=(n+s)/2;e==="x"?(this.box(c,r,o,a,r/2,t,l),this.addCol(n,s,t-o/2,t+o/2,r),this.box(.35,r+.5,.55,n,(r+.5)/2,t,this.M.fenceDark),this.box(c,.1,.12,a,r+.4,t,this.M.fenceDark)):(this.box(o,r,c,t,r/2,a,l),this.addCol(t-o/2,t+o/2,n,s,r),this.box(.55,r+.5,.35,t,(r+.5)/2,n,this.M.fenceDark),this.box(.12,.1,c,t,r+.4,a,this.M.fenceDark))}opening(e,t,n,s,r,o){let{M:l}=this,c=n.w||3.2;if(n.door){let S=e==="x"?n.c:t,I=e==="x"?t:n.c;e==="x"?(this.box(.5,s+.8,.7,S-c/2,(s+.8)/2,I,l.fenceDark),this.box(.5,s+.8,.7,S+c/2,(s+.8)/2,I,l.fenceDark)):(this.box(.7,s+.8,.5,S,(s+.8)/2,I-c/2,l.fenceDark),this.box(.7,s+.8,.5,S,(s+.8)/2,I+c/2,l.fenceDark));let F=n.id==="DOOR"?"AB":n.id||"AB",D=n.areas||["A","B"],P=n.stand||(e==="x"?{A:{x:S,z:I+1.8},B:{x:S,z:I-1.8}}:{A:{x:S-1.8,z:I},B:{x:S+1.8,z:I}});this.doorInfos.push({id:F,x:S,z:I,w:c,axis:e,price:n.price||1250,name:n.name||"Back lot",blurb:n.blurb||"The back lot awaits",areas:D,stand:P});return}let a=e==="x"?{x:0,z:t>0?1:-1}:{x:t>0?1:-1,z:0};e==="x"&&t===-52&&(a.z=-1),n.outN&&(a=e==="x"?{x:0,z:n.outN}:{x:n.outN,z:0});let h=e==="x"?n.c:t,u=e==="x"?t:n.c,d=.95,f=2.5,p=c,x=(S,I,F)=>e==="x"?[S,I,r]:[r,I,S],[g,m,v]=x(p,d,0);this.box(g,m,v,h,d/2,u,o);let[M,_,b]=x(p,s-f,0);this.box(M,_,b,h,(s+f)/2,u,o);let T=l.wood;for(let S of[-1,1]){let[I,F,D]=x(.2,f-d,0);this.box(e==="x"?.2:r+.12,f-d,e==="x"?r+.12:.2,e==="x"?h+S*(p/2-.1):h,(d+f)/2,e==="x"?u:u+S*(p/2-.1),T)}this.addCol(e==="x"?h-p/2:h-r/2,e==="x"?h+p/2:h+r/2,e==="x"?u-r/2:u-p/2,e==="x"?u+r/2:u+p/2,d,{bulletOnly:!1}),this.addCol(e==="x"?h-p/2:h-r/2,e==="x"?h+p/2:h+r/2,e==="x"?u-r/2:u-p/2,e==="x"?u+r/2:u+p/2,s,{y0:f,bulletOnly:!0}),this.addCol(e==="x"?h-p/2:h-r/2,e==="x"?h+p/2:h+r/2,e==="x"?u-r/2-.02:u-p/2,e==="x"?u+r/2+.02:u+p/2,s,{noBullet:!0});let L=[],y=Math.atan2(a.x,a.z);for(let S=0;S<6;S++){let I=new me(new ot(p-.15,.2,.07),l.wood),F=new O(h+a.x*.23,d+.16+S*.255,u+a.z*.23);I.position.copy(F),I.rotation.set(0,y,X(-.05,.05)),I.castShadow=!0,I.receiveShadow=!0,I.userData={home:F,rotZ:I.rotation.z,ry:y},this.root.add(I),L.push(I)}let E=new me(new ot(e==="x"?.3:.06,.06,e==="x"?.06:.3),new nt({color:new pe(1.8,.3,.15),toneMapped:!1}));E.position.set(h-a.x*.3,2.85,u-a.z*.3),E.userData.noAO=!0,this.root.add(E),this.windows.push({id:n.id,area:n.area||Vi(h,u,this.mapId),c:new O(h,0,u),n:a,t:{x:-a.z,z:a.x},out:{x:h+a.x*1.5,z:u+a.z*1.5},in:{x:h-a.x*1.6,z:u-a.z*1.6},planks:L,count:6,attackers:0,cool:0,axis:e,lamp:E})}removePlank(e){if(e.count<=0)return!1;let t=e.planks[e.count-1];return e.count--,t.userData.fall={vx:e.n.x*X(1,3)+X(-1,1),vy:X(1,3),vz:e.n.z*X(1,3)+X(-1,1),t:0,rx:X(-6,6),rz:X(-6,6)},this.fall.push(t),!0}addPlank(e){if(e.count>=6)return!1;let t=e.planks[e.count];e.count++,t.userData.fall=null;let n=this.fall.indexOf(t);return n>=0&&this.fall.splice(n,1),t.visible=!0,t.position.copy(t.userData.home),t.rotation.set(0,t.userData.ry,t.userData.rotZ),!0}buildGate(){this.buildGates()}buildGates(){let{M:e}=this,t=new $e({color:15251502,roughness:.6,metalness:.3});this.doors=[];for(let n of this.doorInfos){let s=n.axis!=="z",r=new Ce,o=new me(new ot(s?n.w:.25,3.4,s?.25:n.w),e.fence);o.position.y=1.7,o.castShadow=o.receiveShadow=!0,r.add(o);let l=Math.max(3,Math.round(n.w));for(let h=0;h<l;h++){let u=new me(new ot(s?.42:.05,3.4,s?.05:.42),h%2?t:e.fenceDark),d=-n.w/2+n.w*(h+.5)/l;u.position.set(s?d:.15,1.7,s?.15:d),r.add(u)}r.position.set(n.x,0,n.z),this.root.add(r);let c=s?this.addCol(n.x-n.w/2,n.x+n.w/2,n.z-.2,n.z+.2,3.4,{door:!0,gate:n.id}):this.addCol(n.x-.2,n.x+.2,n.z-n.w/2,n.z+n.w/2,3.4,{door:!0,gate:n.id}),a={id:n.id,mesh:r,open:!1,t:0,price:n.price,name:n.name,blurb:n.blurb,areas:n.areas,stand:n.stand,axis:n.axis,col:c,pos:{x:n.x,z:n.z},x:n.x,z:n.z};if(this.doors.push(a),n.id==="AB"){let h=new me(new on(7.5,1.9),new nt({map:this.T.sign,color:new pe(1.9,1.9,1.9),toneMapped:!1}));h.position.set(n.x,5,n.z+.45),this.staticGroup.add(h);for(let u of[-1,1])this.box(.18,4.4,.18,n.x+u*3.5,2.5,n.z+.4,e.fenceDark);this.signPos=new O(n.x,5,n.z+1)}else{let h=n.axis==="z"?Math.PI/2:0,u=new me(new on(3.4,.7),new nt({map:Tu([{t:n.name.toUpperCase(),s:64,y:128,w:800,c:"#ffd36b"}],"#ffd36b",512,256),toneMapped:!1,color:new pe(.9,.9,.9)}));u.position.set(n.x,4.15,n.z),u.rotation.y=h,this.root.add(u)}}this.door=this.doors.find(n=>n.id==="AB")||this.doors[0]}buildLots(e,t,n){let{M:s}=this,r=this.place.bind(this);t(50,2,22,[{c:8,id:"C1",area:"C"},{c:16,id:"C2",area:"C"}]),e(22,24,50,[{c:36,id:"C3",area:"C"}]),e(2,24,50,[]),n(26,20,37,12),r(yi(s,13803834,{missing:!0}),32,16,.4),r(Ai(s,12868138,15129792),30,8,Math.PI/2);for(let[o,l,c]of[[40,18,11680302],[41.2,17.2,14252330],[39.2,18.8,3829413],[44,7,9087050]])r(ar(s,c),o,l);r(ni(s,1.1),46,14),r(ni(s,.9),46.8,15.1),this.lampAt(44,14,1,1.2),t(-50,-34,-2,[{c:-10,id:"D1",area:"D"},{c:-24,id:"D2",area:"D"}]),e(-2,-50,-24,[]),e(-34,-50,-24,[{c:-38,id:"D3",area:"D"}]),n(26,32,-37,-18),r(Ai(s,6197184,15129792),-38,-10,0),r(Ai(s,14252330,13616814,{tilt:.03}),-38,-24,0),r(yi(s,9087050,{door:!0}),-44,-16,Math.PI/2),r(ni(s,1.2),-46,-6),r(ni(s,1),-32,-30),this.lampAt(-44,-22,0,.4),e(-76,4,24,[{c:8,id:"EN",area:"E"}]),t(4,-76,-52,[{c:-68,id:"EW",area:"E",outN:-1}]),t(24,-76,-52,[{c:-64,id:"EE",area:"E"}]),n(20,24,14,-64),r(yi(s,13619140,{missing:!0,tilt:-.04}),10,-64,.6),r(Ai(s,3829413,15129792),18,-68,Math.PI/2),r(ni(s,1),8,-72),r(ar(s,14252330),20,-58),r(ar(s,3829413),21,-57.2),this.lampAt(10,-70,1,2.2),this.buildDressing()}lampAt(e,t,n,s){let r=Sl(this.M,!!n);r.position.set(e,0,t),r.rotation.y=s,r.traverse(l=>{l.isMesh&&(l.castShadow=!l.userData.bulb)}),r.updateMatrixWorld(!0),this.addCol(e-.2,e+.2,t-.2,t+.2,5);let o=r.userData.bulbPos.clone().applyMatrix4(r.matrixWorld);this.lamps.push({pos:o,teal:!!n,ph:X(100)}),this.staticGroup.add(r)}buildDressing(){let{M:e}=this,t=f=>Xt.jobs.find(p=>p.id===f),n=t("fuel").pad,s=t("carb").pad,r=t("radio").pad,o=t("parts").pad;this.box(1.5,.9,.9,21.05,.45,12,e.fenceDark),this.box(1.6,.12,1,21.05,.96,12,e.fence),this.addCol(20.3,21.8,11.55,12.45,1.05);let l=new me(new ot(.28,.16,.16),new nt({color:new pe(.2,2.4,1.2),toneMapped:!1}));l.position.set(20.2,1.05,12),l.userData.noAO=!0,this.root.add(l),this.box(1.3,.75,.7,-19.5,.38,-31.15,e.wood),this.addCol(-20.2,-18.8,-31.55,-30.75,.9),this.box(1.4,.8,.7,42.2,.4,6.3,e.wood),this.addCol(41.5,42.9,5.95,6.65,.95),this.box(.18,5.2,.18,9.4,2.6,-43.4,e.fenceDark),this.box(1.1,.16,.16,9.4,4.9,-43.4,e.fence),this.box(.7,.45,.4,6.7,.9,-43.1,e.fenceDark),this.addCol(9.25,9.55,-43.55,-43.25,5.2);let c=new me(new cn(.12,8,6),new nt({color:new pe(2.2,.35,.25),toneMapped:!1}));c.position.set(9.9,5.05,-43.4),c.userData.noAO=!0,this.root.add(c),this.box(.16,6.4,.16,16,3.2,-62,e.fenceDark),this.box(1.4,.1,.1,16,6.2,-62,e.fence),this.addCol(15.85,16.15,-62.15,-61.85,6.4);let a=(f,p,x,g)=>{g.position.set(p,0,x),g.traverse(m=>{m.isMesh&&(m.castShadow=!0,m.receiveShadow=!0)}),this.root.add(g),this.missionMeshes.set(f,g)},h=()=>{let f=new Ce;f.add(new me(new Bt(.16,.18,.42,8),e.paint(11680302))),f.children[0].position.y=.22;let p=new me(new Bt(.07,.07,.12,6),e.fenceDark);return p.position.y=.46,f.add(p),f};for(let f of t("fuel").items){let p=h();p.userData.hdKind="jerry",a(f.id,f.x,f.z,p)}let u=new Ce;u.add(new me(new ot(.28,.16,.2),e.chrome)),u.children[0].position.y=.2;let d=new me(new Bt(.05,.08,.22,6),e.paint(13803834));d.position.set(0,.28,0),u.add(d),a("carb",t("carb").items[0].x,t("carb").items[0].z,u);for(let f of t("parts").items){let p=new Ce,x=new me(new ti(.16,.05,6,10),e.chrome);x.rotation.x=Math.PI/2,x.position.y=.12,p.add(x),a(f.id,f.x,f.z,p)}for(let f of t("bus").items){let p=new Ce,x=new me(new ot(.08,.55,.7),e.wood);x.position.y=1.35,p.add(x),a(f.id,f.x,f.z,p)}for(let[f,p]of this.missionMeshes)p.visible=f.startsWith("f");this._dress={fuel:n,carb:s,radio:r,parts:o}}resetDoors(){for(let e of this.doors)e.open=!1,e.t=0,e.mesh.position.y=0,e.col.off=!1}shack(e,t,n,s){let{M:r}=this;this.box(n,3,s,e,1.5,t,r.fence),this.box(n+.5,.2,s+.5,e,3.1,t,r.fenceDark),this.addCol(e-n/2,e+n/2,t-s/2,t+s/2,3.2),this.box(1.4,2.1,.1,e-1.2,1.05,t+s/2+.05,r.wood,{cast:!1});let o=new me(new on(1.4,.9),new nt({color:new pe(2.6,1.7,.7),toneMapped:!1}));o.position.set(e+1.5,1.8,t+s/2+.03),this.staticGroup.add(o)}nadeBuy(e,t,n){let s=new Ce;s.position.set(e,1.7,t),s.rotation.y=n;let r=new me(new cn(.22,10,8),new $e({color:9048088,roughness:.4}));r.position.set(0,.35,.2);let o=new me(new Bt(.06,.06,.1,6),new $e({color:16722490,emissive:4849672}));o.position.set(0,.58,.2);let l=new me(new on(2.4,1.2),new nt({map:Tu([{t:"BLOOD BAIT",s:48,y:88,w:800,c:"#ff5a6e"},{t:"$250  \xB7  "+(document.body.classList.contains("touch")?fE()?"\u{1F4A3} TO THROW":"TAP BAIT TO THROW":"G TO THROW"),s:32,y:168,c:"#ffd36b"}],"#ff5a6e"),toneMapped:!1}));l.position.set(0,-.35,.04);let c=new me(new ot(2.6,2.2,.08),this.M.fenceDark);c.position.set(0,.05,0);let a=new me(l.geometry,l.material);a.position.set(0,-.35,-.04),a.rotation.y=Math.PI;let h=r.clone();h.position.z=-.2;let u=o.clone();u.position.z=-.2,s.add(c,l,r,o,a,h,u),this.root.add(s);let d=Math.sin(n),f=Math.cos(n);this.buys.push({id:"nade",price:250,pos:{x:e+d*.9,z:t+f*.9},back:{x:e-d*.25,z:t-f*.25},name:"Blood Bait"})}wallBuy(e,t,n,s){if(e==="nade"){this.nadeBuy(t,n,s);return}let r=$t[e],o=new Ce;o.position.set(t,1.7,n),o.rotation.y=s;let l=new me(new on(2.4,1.2),new nt({map:Tu([{t:r.name.toUpperCase(),s:44,y:88,w:800},{t:"$"+r.price+"  \xB7  AMMO $"+Math.floor(r.price/2),s:36,y:168,c:"#ffd36b"}]),toneMapped:!1,color:new pe(.9,.9,.9)}));l.position.set(0,-.35,.04);let c=Cl(e,!1);c.position.set(0,.35,.18),c.rotation.y=Math.PI/2,c.scale.setScalar(1.7),c.userData.base=null;let a=new me(new ot(2.6,2.2,.08),this.M.fenceDark);a.position.set(0,.05,0),o.add(a,l,c),o.traverse(d=>{d.isMesh&&(d.castShadow=!1)}),this.root.add(o);let h=Math.sin(s),u=Math.cos(s);this.buys.push({id:e,price:r.price,pos:{x:t+h*.9,z:n+u*.9},name:r.name})}buildCrate(e,t){let{M:n}=this,s=new Ce;s.position.set(e,0,t),s.rotation.y=.5;let r=n.paint(2078874),o=new me(new ot(1.3,.7,.8),r);o.position.y=.35,s.add(o);let l=new Ce;l.position.set(0,.7,-.4);let c=new me(new ot(1.3,.2,.8),r);c.position.set(0,.1,.4),l.add(c),s.add(l);for(let f of[-.45,.45]){let p=new me(new ot(.1,.92,.84),n.fenceDark);p.position.set(f,.46,0),s.add(p)}let a=new me(new ot(.4,.06,.06),n.chrome);a.position.set(0,.8,.43),s.add(a);let h=new me(new on(.8,.4),new nt({map:Tu([{t:"LUCKY",s:70,y:70,w:900,c:"#18ffb0"},{t:"TOOLBOX",s:62,y:150,w:900,c:"#fff"},{t:"950",s:52,y:215,c:"#ffd36b"}],"#18ffb0",384,256),toneMapped:!1,color:new pe(.9,.9,.9)}));h.position.set(0,.38,.41),s.add(h),s.traverse(f=>{f.isMesh&&!f.material.isMeshBasicMaterial&&(f.castShadow=!0,f.receiveShadow=!0)});let u=new me(new Bt(.5,.65,9,16,1,!0),new St({transparent:!0,depthWrite:!1,blending:an,side:It,uniforms:{c:{value:new pe(.1,1,.7)},k:{value:.35}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(1.-vy,2.2)*pow(f,2.5)*k); }"}));u.position.set(0,4.5,0),u.userData.noAO=!0,s.add(u),this.root.add(s),this.addCol(e-.8,e+.8,t-.8,t+.8,1);let d=new Ce;d.position.set(0,1.5,.1),s.add(d),this.crate={group:s,lid:l,hold:d,beam:u,pos:{x:e,z:t},price:950,state:"idle",t:0,weapon:null,shown:null,model:null,x:e,z:t}}buildSky(){let e=new St({side:Tn,depthWrite:!1,fog:!1,uniforms:{moonDir:{value:new O(-.55,.6,.58).normalize()}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vP; uniform vec3 moonDir;
        float h(vec3 p){ return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ vec3 d=normalize(vP); float y=clamp(d.y,-.2,1.);
          vec3 hor=vec3(.20,.12,.16), mid=vec3(.025,.045,.10), top=vec3(.004,.008,.03);
          vec3 c=mix(hor,mid,smoothstep(0.,.25,y)); c=mix(c,top,smoothstep(.2,.9,y)); c+=vec3(.5,.18,.1)*pow(max(0.,1.-abs(y)*4.),3.)*.35;
          vec3 g=floor(d*220.); float s=step(.9975,h(g))*smoothstep(.05,.3,y); c+=vec3(.9,.95,1.)*s*(.4+.4*h(g+3.))*0.8;
          float md=dot(d,moonDir); c+=vec3(.75,.85,1.)*smoothstep(.9992,.9996,md)*2.5; c+=vec3(.25,.35,.6)*pow(max(0.,md),60.)*.5+vec3(.1,.15,.3)*pow(max(0.,md),8.)*.25;
          gl_FragColor=vec4(c,1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.sky=new me(new cn(500,32,16),e),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.sky.userData.noAO=!0,this.scene.add(this.sky),this.moonDir=e.uniforms.moonDir.value}buildGround(){let e=new me(new on(1200,1200),this.M.sand);e.rotation.x=-Math.PI/2,e.receiveShadow=!0,this.scene.add(e),this.ground=e}scenery(){let{M:e}=this,t=this.staticGroup,n=(c,a)=>c>-26&&c<26&&a>-54&&a<26||c>22&&c<52&&a>0&&a<24||c<-22&&c>-52&&a>-36&&a<0||c>2&&c<26&&a<-50&&a>-78,s=e.sand.clone();s.map=e.sand.map.clone(),s.map.repeat.set(6,3),s.bumpMap=e.sand.bumpMap.clone(),s.bumpMap.repeat.set(6,3),s.color=new pe(12034436),s.bumpScale=1.5,e.dune=s;let r,o=()=>r||(r=(()=>{let c=new cn(1,40,14,0,Wt,0,Math.PI/2),a=c.attributes.position;for(let h=0;h<a.count;h++){let u=a.getX(h),d=a.getY(h),f=a.getZ(h),p=Math.atan2(f,u),x=d*(.75+.25*Math.sin(p*3+1)+.12*Math.sin(p*7));a.setXYZ(h,u*(1+.08*Math.sin(p*5)),Math.pow(Math.max(x,0),1.6),f)}return c.computeVertexNormals(),c})());for(let c=0;c<26;c++){let a=X(Wt),h=X(60,190),u=Math.cos(a)*h,d=-14+Math.sin(a)*h,f=Math.min(X(14,38),(h-48)/2.1);if(f<6)continue;let p=new me(o(),s);p.scale.set(f*X(1.2,2),f*X(.12,.28),f*X(1,1.6)),p.position.set(u,0,d),p.rotation.y=X(3),p.receiveShadow=!0,t.add(p)}let l=e.flat(2762292,1,0);for(let c=0;c<12;c++){let a=c/12*Wt+X(-.2,.2),h=X(230,330),u=X(30,70),d=X(25,60),f=new me(new Bt(u*.55,u*.8,d,6),l);f.position.set(Math.cos(a)*h,d/2-2,-14+Math.sin(a)*h),f.rotation.y=X(3),t.add(f)}for(let c=0;c<38;c++){let a,h,u=0;do{let f=X(Wt),p=X(34,90);a=Math.cos(f)*p,h=-14+Math.sin(f)*p*.9}while(n(a,h)&&++u<20);let d=Xg(e);d.position.set(a,0,h),d.rotation.y=X(3),d.traverse(f=>{f.isMesh&&(f.castShadow=!0)}),t.add(d)}for(let c=0;c<40;c++){let a,h,u=0;do{let f=X(Wt),p=X(30,110);a=Math.cos(f)*p,h=-14+Math.sin(f)*p*.9}while(n(a,h)&&++u<20);let d=qg(e,X(.4,1.8));d.position.set(a,0,h),d.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0)}),t.add(d)}for(let c=0;c<9;c++){let a=X(Wt),h=X(34,70),u=Math.cos(a)*h,d=-14+Math.sin(a)*h*.9;if(n(u,d))continue;let f=Math.random()<.35?Wg(e,jf(),15129792,{tilt:X(-.08,.08)}):Vg(e,jf(),{tilt:X(-.1,.1),missing:Math.random()<.5});f.position.set(u,0,d),f.rotation.y=X(3),f.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.receiveShadow=!0)}),t.add(f)}}buildLights(){let e=this.scene;this.hemi=new Br(7309e3,3812386,.85),e.add(this.hemi),this.moon=new Ds(10335487,1.7),this.moon.castShadow=!0,this.moon.position.set(0,0,0),e.add(this.moon,this.moon.target);let t=this.moon.shadow;t.camera.left=t.camera.bottom=-34,t.camera.right=t.camera.top=34,t.camera.near=1,t.camera.far=140,t.bias=-4e-4,t.normalBias=.04,t.mapSize.set(2048,2048),this.lampPool=[];for(let s=0;s<7;s++){let r=new is(16756838,95,30,1.7);e.add(r),this.lampPool.push(r)}this.halos=[],this.cones=[];let n=s=>new St({transparent:!0,depthWrite:!1,blending:an,side:It,uniforms:{c:{value:s},k:{value:.22}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(vy,1.5)*pow(f,1.6)*k); }"});for(let s of this.lamps){let r=s.teal?new pe(.2,.9,.7):new pe(1,.62,.28),o=new ei(new qn({map:this.T.glow,color:s.teal?new pe(.5,3,2.4):new pe(3,1.8,.7),blending:an,depthWrite:!1,transparent:!0,fog:!1}));o.scale.setScalar(3.4),o.position.copy(s.pos),o.userData.noAO=!0,this.scene.add(o),this.halos.push(o);let l=new me(new hi(4.2,5,24,1,!0),n(r));l.position.copy(s.pos).add(new O(0,-2.5,0)),l.userData.noAO=!0,this.scene.add(l),this.cones.push(l),s.light=r}}setTier(e){this.tier=e,this.dress(e);let t=[3,5,7][e];this.lampPool.forEach((s,r)=>s.visible=r<t),this.cones.forEach(s=>s.visible=e>0),this.moon.castShadow=e>0;let n=e===2?2048:1024;this.moon.shadow.mapSize.x!==n&&(this.moon.shadow.mapSize.set(n,n),this.moon.shadow.map?.dispose(),this.moon.shadow.map=null)}batch(){let e=this.staticGroup;e.updateMatrixWorld(!0);let t=new Map,n=[];e.traverse(s=>{if(!s.isMesh)return;if(s.userData.bulb||s.userData.noBatch){n.push(s);return}let r=!1;for(let a=s;a;a=a.parent)if(a.userData.hd){r=!0;break}let o=s.material.uuid+(s.castShadow?"c":"n")+(s.receiveShadow?"r":"n")+(r?"h":""),l=t.get(o);l||(l={mat:s.material,cast:s.castShadow,rec:s.receiveShadow,geos:[],hp:r},t.set(o,l));let c=s.geometry.clone();c.applyMatrix4(s.matrixWorld);for(let a of Object.keys(c.attributes))["position","normal","uv"].includes(a)||c.deleteAttribute(a);l.geos.push(c)});for(let s of t.values()){let r=gu(s.geos,!1);if(!r){console.warn("merge failed");continue}let o=new me(r,s.mat);o.castShadow=s.cast,o.receiveShadow=s.rec,o.frustumCulled=!1,this.root.add(o),s.hp&&(this.propLo||(this.propLo=[])).push(o),s.geos.forEach(l=>l.dispose())}for(let s of n){if(s.userData.noBatch){let o=s.clone();o.matrixAutoUpdate=!1,o.matrix.copy(s.matrixWorld),o.matrixWorldNeedsUpdate=!0,this.root.add(o);continue}let r=new me(s.geometry,s.material);r.applyMatrix4(s.matrixWorld),r.matrixAutoUpdate=!0,r.position.setFromMatrixPosition(s.matrixWorld),r.rotation.set(0,0,0),r.scale.setScalar(1),this.root.add(r)}this.staticGroup=null}resolve(e,t,n=!1){let s=!1;for(let r of this.colliders){if(r.bulletOnly||r.off)continue;let o=Et(e.x,r.x0,r.x1),l=Et(e.z,r.z0,r.z1),c=e.x-o,a=e.z-l,h=c*c+a*a;if(!(h>=t*t))if(s=!0,h>1e-8){let u=Math.sqrt(h),d=(t-u)/u;e.x+=c*d,e.z+=a*d}else{let u=e.x-r.x0,d=r.x1-e.x,f=e.z-r.z0,p=r.z1-e.z,x=Math.min(u,d,f,p);x===u?e.x=r.x0-t:x===d?e.x=r.x1+t:x===f?e.z=r.z0-t:e.z=r.z1+t}}return s}ray(e,t,n){let s=n,r=null,o=null;if(t.y<-1e-5){let l=-e.y/t.y;l>0&&l<s&&(s=l,r={x:0,y:1,z:0},o="ground")}for(let l of this.colliders){if(l.noBullet||l.off)continue;let c=0,a=s,h=-1,u=0,d=(f,p,x,g,m)=>{if(Math.abs(p)<1e-9)return f>=x&&f<=g;let v=(x-f)/p,M=(g-f)/p,_=-1;if(v>M){let b=v;v=M,M=b,_=1}return v>c&&(c=v,h=m,u=_),M<a&&(a=M),c<=a};d(e.x,t.x,l.x0,l.x1,0)&&d(e.y,t.y,l.y0,l.y1,1)&&d(e.z,t.z,l.z0,l.z1,2)&&c>0&&c<s&&(s=c,r={x:h===0?u:0,y:h===1?u:0,z:h===2?u:0},o="wall")}return r?{t:s,n:r,kind:o}:null}update(e,t,n){for(let c=this.fall.length-1;c>=0;c--){let a=this.fall[c],h=a.userData.fall;if(!h){this.fall.splice(c,1);continue}h.t+=e,h.vy-=9.8*e,a.position.x+=h.vx*e,a.position.y+=h.vy*e,a.position.z+=h.vz*e,a.rotation.x+=h.rx*e,a.rotation.z+=h.rz*e,a.position.y<.08&&(a.position.y=.08,h.vy=0,h.vx*=.5,h.vz*=.5),h.t>1.4&&(a.visible=!1,this.fall.splice(c,1))}for(let c of this.doors)c.open&&c.t<1&&(c.t=Math.min(1,c.t+e/2.4),c.mesh.position.y=c.t*3.6,c.t>.5&&(c.col.off=!0));let s=n.x,r=n.z,o=this.lamps.map((c,a)=>({i:a,d:(c.pos.x-s)**2+(c.pos.z-r)**2})).sort((c,a)=>c.d-a.d);this.lampPool.forEach((c,a)=>{let h=this.lamps[o[a].i];c.position.copy(h.pos),c.color.copy(h.teal?new pe(.35,1,.8):new pe(1,.7,.4));let u=.85+.15*Math.sin(t*9+h.ph)*Math.sin(t*3.7+h.ph*2)+(Math.sin(t*31+h.ph)>.97?-.5:0);c.intensity=(this.lampBase||95)*Math.max(.2,u)}),this.halos.forEach((c,a)=>{let h=Math.hypot(this.lamps[a].pos.x-s,this.lamps[a].pos.z-r);c.visible=h<70});let l=this.crate;l.beam.material.uniforms.k.value=.22+.1*Math.sin(t*2);for(let c of this.windows){if(!c.lamp)continue;let a=6-c.count,h=a<=0?.55+.08*Math.sin(t*2.2+c.c.x):.3+.7*Math.abs(Math.sin(t*(3.2+a)));c.lamp.material.color.setRGB(1.85*h,.22*h,.07*h)}l.model&&(l.model.rotation.y+=e*2,l.model.position.y=Math.sin(t*3)*.04),this.moon.position.set(s+this.moonDir.x*60,this.moonDir.y*60,r+this.moonDir.z*60),this.moon.target.position.set(s,0,r),this.moon.target.updateMatrixWorld(),this.sky.position.set(s,0,r)}};var Cn=i=>document.getElementById(i),Kr={can:'<svg viewBox="0 0 24 24"><path d="M6 6.5L9 3h8.5a1.5 1.5 0 0 1 1.5 1.5v16a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20.5V8z" fill="currentColor"/><rect x="11" y="4.6" width="5.5" height="2.4" rx="1" fill="#2a1606"/><path d="M8 11.5l8 7.5M16 11.5l-8 7.5" stroke="#2a1606" stroke-width="2" stroke-linecap="round"/></svg>',bolt:'<svg viewBox="0 0 24 24"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" fill="currentColor"/></svg>',gear:'<svg viewBox="0 0 24 24"><path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6zm8.6 5.3l2-1.5-2-3.5-2.4.8a7.6 7.6 0 0 0-1.9-1.1L15.8 5.7h-4l-.5 2.5a7.6 7.6 0 0 0-1.9 1.1L7 8.5 5 12l2 1.5a7 7 0 0 0 0 2.2L5 17.2l2 3.5 2.4-.8c.6.5 1.2.8 1.9 1.1l.5 2.5h4l.5-2.5c.7-.3 1.3-.6 1.9-1.1l2.4.8 2-3.5-2-1.5a7 7 0 0 0 0-2.2z" fill="currentColor" transform="translate(0 -2.2) scale(1 1)"/></svg>',wrench:'<svg viewBox="0 0 24 24"><path d="M21 6.5a5 5 0 0 1-6.6 4.7L6.3 19.3a1.9 1.9 0 0 1-2.7-2.7l8.1-8.1A5 5 0 0 1 17.5 3l-3 3 .7 2.8 2.8.7z" fill="currentColor"/></svg>',hammer:'<svg viewBox="0 0 24 24"><path d="M3 9l6-6 3 3-1.5 1.5L21 18l-3 3L7.5 10.5 6 12z" fill="currentColor"/></svg>',radio:'<svg viewBox="0 0 24 24"><path d="M12 10.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zM11 14.5h2l2.5 7.5h-2l-.6-2h-1.8l-.6 2h-2z" fill="currentColor"/><path d="M7.8 8.2a6 6 0 0 0 0 8.4M16.2 8.2a6 6 0 0 1 0 8.4M5 5.5a10 10 0 0 0 0 14M19 5.5a10 10 0 0 1 0 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',skull:'<svg viewBox="0 0 24 24"><path d="M12 2.5c-4.7 0-8 3.2-8 7.6 0 2.5 1.1 4.3 2.8 5.4V19c0 .8.6 1.4 1.4 1.4h1v-2h1.6v2h2.4v-2h1.6v2h1c.8 0 1.4-.6 1.4-1.4v-3.5c1.7-1.1 2.8-2.9 2.8-5.4 0-4.4-3.3-7.6-8-7.6zm-3.2 6.7a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm6.4 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fill="currentColor"/></svg>',gate:'<svg viewBox="0 0 24 24"><path d="M3 21V5l4-2v18M21 21V5l-4-2v18M7 8h10M7 13h10M7 18h10" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>',ammo:'<svg viewBox="0 0 24 24"><path d="M5 22V10c0-3 1.5-6 2.5-7 1 1 2.5 4 2.5 7v12zM14 22V10c0-3 1.5-6 2.5-7 1 1 2.5 4 2.5 7v12z" fill="currentColor"/></svg>',x2:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M6.5 8.5l4.5 7M11 8.5l-4.5 7M13.5 10.2c.4-1.2 1.4-1.8 2.6-1.8 1.4 0 2.4.9 2.4 2.1 0 1.9-2.7 2.9-5 5h5.2" fill="none" stroke="#2a1606" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',star:'<svg viewBox="0 0 24 24"><path d="M12 2l3 6.5 7 .8-5.2 4.8 1.5 7L12 17.6 5.7 21l1.5-7L2 9.3l7-.8z" fill="currentColor"/></svg>',lock:'<svg viewBox="0 0 24 24"><path d="M7 10V7.5a5 5 0 0 1 10 0V10h1.5v11h-13V10zm2.5 0h5V7.5a2.5 2.5 0 0 0-5 0z" fill="currentColor"/></svg>'},Au=["fuel","carb","bus","parts","radio","clear"],pE={fuel:1,carb:2,bus:3,parts:4,radio:5,clear:5},mE={AB:"the back gate",AC:"the Lot C gate",AD:"the Lot D gate",SD:"the side gate",BE:"the Lot E gate"},gE={AB:"BACK GATE",AC:"LOT C GATE",AD:"LOT D GATE",SD:"SIDE GATE",BE:"LOT E GATE"},jg={double:{t:"2\xD7 POINTS DROP",i:"x2",tl:!0},ammo:{t:"FULL MAGS DROP",i:"ammo",tl:!1}},Il={fuel:{icon:"can",item:"fuel can",items:"fuel cans",brief:"Find <em>3 fuel cans</em> and carry them to the <em>generator</em>",find:"Find a <em>fuel can</em>",bring:"Bring the can to the <em>generator</em>",itemLabel:"FUEL CAN",itemIcon:"can",padLabel:"GENERATOR",padIcon:"bolt"},carb:{icon:"gear",item:"carburetor",items:"carburetor",brief:"Grab the <em>carburetor</em> and install it on the <em>back-lot bench</em>",find:"Find the <em>carburetor</em>",bring:"Install it on the <em>back-lot bench</em>",itemLabel:"CARBURETOR",itemIcon:"gear",padLabel:"BACK-LOT BENCH",padIcon:"wrench"},bus:{icon:"hammer",brief:"Board up the <em>bus windows</em>: hold <em>E</em> at each one",find:"Hold <em>E</em> at each <em>bus window</em>",itemLabel:"BUS WINDOW",itemIcon:"hammer"},parts:{icon:"gear",item:"scrap part",items:"scrap parts",brief:"Collect <em>3 scrap parts</em> in Lot C and bring them to the <em>Lot C bench</em>",find:"Find a <em>scrap part</em> in Lot C",bring:"Bring it to the <em>Lot C bench</em>",itemLabel:"SCRAP PART",itemIcon:"gear",padLabel:"LOT C BENCH",padIcon:"wrench"},radio:{icon:"radio",brief:"Stand in the <em>radio ring</em> during a wave for <em>20 s</em>. Leaving drains the timer",padLabel:"RADIO",padIcon:"radio"},clear:{icon:"skull",brief:"Get <em>8 kills in Lot D</em>, including zombies at its windows",find:"Get <em>kills in Lot D</em>",padLabel:"LOT D",padIcon:"skull"}},wu=i=>Math.round(i).toLocaleString("en-US");function np(i,e,t){let n=Au.indexOf(i),s=Au[n+1];if(!s)return null;let r=(Xt.jobs.find(a=>a.id===i)||{}).area,o=(Xt.jobs.find(a=>a.id===s)||{}).area,c=t==="round"?r&&r===o?e+1:e:e+1;return{id:s,title:(Xt.jobs.find(a=>a.id===s)||{}).title||s,round:Math.max(pE[s],c)}}function xE(i,e){let t=Yo(e);if(!i||t.has(i))return null;let n={B:["AB"],C:["AC"],D:["AD","SD"],E:["BE"]}[i]||[];for(let s of n){let r=e.find(o=>o.id===s);if(r&&!r.open&&r.areas.some(o=>t.has(o)))return r}return t.has("B")?null:e.find(s=>s.id==="AB"&&!s.open)||null}function $g(i){let{world:e,isTouch:t}=i,n=Cn("mission"),s=Cn("msIc"),r=Cn("msEb"),o=Cn("msGoal"),l=Cn("msPips"),c=Cn("msCount"),a=Cn("msRw"),h=Cn("wp"),u=Cn("wpLab"),d=Cn("wpDist"),f=Cn("wpIc"),p=Cn("objArrow"),x=Cn("oaLab"),g=Cn("oaDist"),m=Cn("oaIc"),v=Cn("oaChev"),M=Cn("mBan"),_=Cn("fx-edge"),b={},T=(te,ve,Te,ne)=>{b[ve]!==Te&&(b[ve]=Te,ne?te.innerHTML=Te:te.textContent=Te)},L=[],y="",E=0,S=new nt({color:new pe(2.2,1.25,.35),transparent:!0,opacity:.85,depthWrite:!1,side:It,fog:!1,toneMapped:!1}),I=new me(new ts(.62,.74,48),S);I.rotation.x=-Math.PI/2,I.position.y=.05,I.userData.noAO=!0,I.renderOrder=3;let F=new me(new ts(1,1.06,48),S.clone());F.rotation.x=-Math.PI/2,F.position.y=.05,F.userData.noAO=!0,F.material.opacity=.35;let D=new Ce;D.add(I,F),D.visible=!1,e.scene.add(D);let P=Xt.radio,N=new nt({color:new pe(.15,2.2,1.4),transparent:!0,opacity:.55,depthWrite:!1,side:It,fog:!1,toneMapped:!1}),R=new me(new ts(P-.12,P,96),N);R.rotation.x=-Math.PI/2;let U=new me(new ts(P-.34,P-.16,96,1,0,.001),new nt({color:new pe(2.4,1.4,.3),transparent:!0,opacity:.9,depthWrite:!1,side:It,fog:!1,toneMapped:!1}));U.rotation.x=-Math.PI/2,U.rotation.z=Math.PI/2;let H=new me(new ki(P-.12,64),new nt({color:new pe(.05,.6,.4),transparent:!0,opacity:.12,depthWrite:!1,fog:!1,toneMapped:!1}));H.rotation.x=-Math.PI/2;let B=new Ce;B.add(H,R,U),B.position.y=.04,B.visible=!1,B.traverse(te=>{te.userData.noAO=!0,te.renderOrder=3}),e.scene.add(B);let G=-1,Z=new Map;for(let[te,ve]of e.missionMeshes){let Te=new ei(new qn({map:e.T&&e.T.glow,color:new pe(2.4,1.4,.4),blending:an,depthWrite:!1,transparent:!0,fog:!1}));Te.scale.setScalar(1.3),Te.position.y=te.startsWith("b")?1.35:.35,Te.userData.noAO=!0;let ne=new me(new ts(.42,.5,32),S);ne.rotation.x=-Math.PI/2,ne.position.y=.04,ne.userData.noAO=!0,te.startsWith("b")&&(ne.visible=!1),ve.add(Te,ne),Z.set(te,{h:Te,r:ne})}let se=new O;function ce(te,ve,Te,ne){return se.set(te,ve,Te).project(ne),{behind:se.z>1,x:(se.x*.5+.5)*innerWidth,y:(-se.y*.5+.5)*innerHeight,nx:se.x,ny:se.y}}function j(te){l.textContent="",L=[];for(let ve=0;ve<te;ve++){let Te=document.createElement("i");Te.className="pip";let ne=document.createElement("b");Te.appendChild(ne),l.appendChild(Te),L.push(Te)}l.classList.toggle("many",te>6)}function le(){n.classList.add("hidden"),h.classList.add("hidden"),p.classList.add("hidden"),D.visible=!1,B.visible=!1,_&&_.classList.remove("on");for(let te in b)delete b[te]}function Ie(te,ve){if(!te)return le(),null;let Te=Il[te.id]||{},ne=!!(te.carry&&te.carry[ve.pid]),fe=te.carry?Object.keys(te.carry).length:0;n.classList.remove("hidden");let ye=Au.indexOf(te.id)+1;T(s,"ic",Kr[Te.icon]||Kr.star,!0),T(r,"eb",`Mission ${ye}/6 \xB7 ${te.title}`);let ge=null,Se="",Ve="bolt",He="",tt="",it=()=>{let we=null,_e=1e9;for(let Me of te.items)if(!Me.done&&!Me.carried){let Ne=Math.hypot(ve.P.x-Me.x,ve.P.z-Me.z);Ne<_e&&(_e=Ne,we=Me)}return we};if(te.kind==="carry")ne?(ge=te.pad,Se=Te.padLabel,Ve=Te.padIcon,He=Te.bring):(ge=it()||te.pad,Se=it()?Te.itemLabel:Te.padLabel,Ve=it()?Te.itemIcon:Te.padIcon,He=it()?Te.find:"A teammate has it: <em>cover them</em>");else if(te.kind==="board")ge=it()||te.pad,Se=Te.itemLabel,Ve=Te.itemIcon,He=Te.find;else if(te.kind==="radio"){ge=te.pad,Se=Te.padLabel,Ve=Te.padIcon;let we=Math.hypot(ve.P.x-te.pad.x,ve.P.z-te.pad.z)<=P;He=ve.phase!=="round"?we?"Wait in the <em>ring</em> for the next wave":"Go to the <em>radio ring</em>":we?"Hold the <em>radio ring</em>!":"Get back in the <em>ring</em>! Timer draining",tt=ve.phase!=="round"?"Counts <b>during waves</b>":we?"<b>Holding\u2026</b>":"<b>Draining</b>"}else te.kind==="clear"&&(ge=te.pad,Se=Te.padLabel,Ve=Te.padIcon,He=Te.find);let z=xE(Vi(ge.x,ge.z,"junkyard"),ve.doors);if(z){let we=z.stand?Object.values(z.stand).reduce((_e,Me)=>Math.hypot(ve.P.x-Me.x,ve.P.z-Me.z)<Math.hypot(ve.P.x-_e.x,ve.P.z-_e.z)?Me:_e):z;ge={x:we.x,z:we.z},Se=gE[z.id]||"GATE",Ve="lock",He=`Open <em>${mE[z.id]||"the gate"}</em> (${wu(ve.price(z))}) to get there`}T(o,"goal",He,!0);let bt=te.kind==="radio",at=bt?10:te.need,k=te.id+at;y!==k&&(y=k,j(at));let w=Math.min(te.need,te.have);for(let we=0;we<at;we++){let _e=L[we],Me="",Ne=0;if(bt){let We=te.need/at;Ne=Math.max(0,Math.min(1,(w-we*We)/We)),Me=Ne>=1?"on":Ne>0?"part":""}else Me=we<Math.floor(w)?"on":we<Math.floor(w)+fe&&te.kind==="carry"?"go":"";_e._st!==Me&&(_e._st=Me,_e.className="pip "+Me),bt&&_e._f!==Ne&&(_e._f=Ne,_e.firstChild.style.width=Math.round(Ne*100)+"%")}T(c,"cnt",te.kind==="radio"?`${Math.floor(w)}/${te.need}s`:`${Math.floor(w)}/${te.need}`);let Y=Math.hypot(ve.P.x-ge.x,ve.P.z-ge.z),K=Y<1.5?"HERE":Math.round(Y)+" m",ee=ce(ge.x,te.kind==="board"&&!z?2.2:1.3,ge.z,ve.cam),be=t?60:70,Pe=!ee.behind&&ee.x>be&&ee.x<innerWidth-be&&ee.y>be&&ee.y<innerHeight-be*.6,ae="";if(Pe){h.classList.remove("hidden"),p.classList.add("hidden"),_&&_.classList.remove("on"),h.style.left=ee.x+"px",h.style.top=ee.y+"px";let we=Math.max(.62,Math.min(1,9/Math.max(9,Y))*1);h.style.setProperty("--k",we.toFixed(3)),T(u,"wl",Se),T(d,"wd",K),T(f,"wi",Kr[Ve]||Kr.bolt,!0),h.classList.toggle("close",Y<2.5)}else{h.classList.add("hidden"),p.classList.remove("hidden");let we=ee.behind?-ee.nx:ee.nx,_e=ee.behind?-ee.ny:ee.ny;ee.behind&&Math.abs(we)<.2&&(we=we<0?-1:1);let Me=Math.atan2(-_e,we),Ne=innerWidth/2,We=innerHeight/2,rt=t?92:120,W=innerHeight-150,De=t?170:120,ue=innerWidth-(t?250:150),Re=Math.cos(Me),Ue=Math.sin(Me),xe=1e9;Re>.001&&(xe=Math.min(xe,(ue-Ne)/Re)),Re<-.001&&(xe=Math.min(xe,(De-Ne)/Re)),Ue>.001&&(xe=Math.min(xe,(W-We)/Ue)),Ue<-.001&&(xe=Math.min(xe,(rt-We)/Ue));let et=Ne+Re*xe,Ye=We+Ue*xe;p.style.left=et+"px",p.style.top=Ye+"px",v.style.transform=`rotate(${Me}rad)`,p.classList.toggle("left",Re<0),T(x,"al",Se),T(g,"ad",K),T(m,"ai",Kr[Ve]||Kr.bolt,!0),ae=ee.behind&&Math.abs(ee.nx)<.35?"Turn <b>around \u27F2</b>":Re<0?"<b>\u25C0 Turn</b> left":"Turn <b>right \u25B6</b>",_&&(_.classList.add("on"),_.classList.toggle("l",Re<0))}let he=te.gate&&(Xt.gates.find(we=>we.id===te.gate)||{}).name||"";T(a,"rw",ae||tt||`Reward <b>+${wu(te.pts)}${he?" \xB7 "+he:""}</b>`,!0),D.visible=!(te.kind==="radio"&&!z),D.position.set(ge.x,0,ge.z);let Le=1+.12*Math.sin(ve.time*4);if(I.scale.setScalar(Le),F.scale.setScalar(1+ve.time*.8%1*.8),F.material.opacity=.45*(1-ve.time*.8%1),B.visible=te.kind==="radio",B.visible){B.position.set(te.pad.x,.04,te.pad.z);let we=Math.min(1,w/te.need);Math.abs(we-G)>.004&&(G=we,U.geometry.dispose(),U.geometry=new ts(P-.34,P-.16,96,1,0,Math.max(.001,we*Math.PI*2)));let _e=Math.hypot(ve.P.x-te.pad.x,ve.P.z-te.pad.z)<=P;N.color.setRGB(_e?.15:2.4,_e?2.2:.5,_e?1.4:.2),N.opacity=.45+.25*Math.sin(ve.time*(_e?3:7))}for(let[we,_e]of Z){let Me=.75+.25*Math.sin(ve.time*5+we.length);_e.h.material.opacity=Me,_e.r.scale.setScalar(1+.15*Math.sin(ve.time*4))}return ge}function $(te,ve,Te){document.body.dataset.mban=String(performance.now()+Te-600),M.className="mBan "+te,M.innerHTML=ve,M.offsetWidth,M.classList.add("on"),clearTimeout(E),E=setTimeout(()=>M.classList.remove("on"),Te)}let oe=(te,ve,Te)=>`<span class="chip${Te?" tl":""}">${Kr[te]||""}${ve}</span>`;function Ae(te){let ve=Xt.jobs.find(ge=>ge.id===te);if(!ve)return;let Te=Il[te]||{},ne=Au.indexOf(te)+1,fe=ve.gate?(Xt.gates.find(ge=>ge.id===ve.gate)||{}).name:"",ye=jg[ve.power];$("start",`<i class="stripe t"></i><i class="stripe b"></i><div class="e">NEW MISSION \xB7 ${ne} OF 6</div><div class="ttl">${ve.title.toUpperCase()}</div><div class="g">${Te.brief||""}</div><div class="chips">${oe("star","+"+wu(ve.pts)+" PTS")}${fe?oe("gate","OPENS "+fe.toUpperCase()):""}${ye?oe(ye.i,ye.t,ye.tl):""}</div>`,5200)}function qe(te,ve={}){let Te=Xt.jobs.find(Se=>Se.id===te);if(!Te)return;let ne=Te.gate?(Xt.gates.find(Se=>Se.id===Te.gate)||{}).name:"",fe=ve.next,ye=jg[Te.power];$("done",`<i class="stripe t"></i><i class="stripe b"></i><div class="stamp">MISSION COMPLETE</div><div class="row1"><span class="big">${Te.title.toUpperCase()}</span><span class="pts">+${wu(ve.pts||Te.pts)}</span></div><div class="chips">${ne?oe("gate",ne.toUpperCase()+" GATE OPEN",!0):""}${oe("ammo","AMMO REFILLED")}${ye?oe(ye.i,ye.t.replace("DROP","DROPPED"),ye.tl):""}</div><div class="next">${fe?`NEXT MISSION \xB7 ${fe.title.toUpperCase()} \xB7 UNLOCKS AFTER ROUND ${fe.round}`:"ALL 6 MISSIONS DONE \xB7 THE YARD IS YOURS"}</div>`,4600);let ge=Cn("fx-mflash");ge&&(ge.classList.remove("on"),ge.offsetWidth,ge.classList.add("on"))}return{frame:Ie,start:Ae,complete:qe,hide:le}}var ip=[{id:"fuel",wave:1},{id:"carb",wave:2},{id:"bus",wave:3},{id:"parts",wave:4},{id:"radio",wave:5},{id:"clear",wave:5}];function vE(i){let e=Xt.jobs[i];return e?{index:i,id:e.id,title:e.title,kind:e.kind,gate:e.gate||"",area:e.area,need:e.need,pts:e.pts,power:e.power||"",pad:{x:e.pad.x,z:e.pad.z},have:0,items:(e.items||[]).map(t=>({id:t.id,x:t.x,z:t.z,done:!1,carried:null})),carry:{}}:null}function Jg(i){let{world:e,P:t,G:n,sfx:s,banner:r,toast:o,popText:l,spawnPower:c}=i,a={mode:"sp",job:null,pid:"you",unlocked:[],done:new Set,gap:!1,gapWave:0,lastArea:"",waves:0},h=$g({world:e,isTouch:document.body.classList.contains("touch")}),u=()=>i.phase?i.phase():n.phase,d=D=>Il[D.id]&&Il[D.id].item||"item";function f(){let D=new Set;if(a.job)for(let P of a.job.items)!P.done&&!P.carried&&D.add(P.id);for(let[P,N]of e.missionMeshes){let R=a.job&&a.job.items.find(U=>U.id===P);N.visible=D.has(P),R&&N.visible&&(N.position.x=R.x,N.position.z=R.z)}}function p(D){a.job=vE(D),f(),!a.job&&a.mode==="sp"&&o("All objectives complete")}function x(){if(a.job||a.gap||a.mode!=="sp"||e.mapId!=="junkyard")return!1;let D=ip.find(P=>a.unlocked.includes(P.id)&&!a.done.has(P.id));return D?(p(Xt.jobs.findIndex(P=>P.id===D.id)),!!a.job):!1}function g(D){if(a.mode!=="sp"||e.mapId!=="junkyard")return!1;a.waves=Math.max(a.waves,D|0);for(let P of ip)P.wave<=a.waves&&!a.unlocked.includes(P.id)&&a.unlocked.push(P.id);if(a.gap){let P=ip.find(U=>a.unlocked.includes(U.id)&&!a.done.has(U.id)),N=P&&Xt.jobs.find(U=>U.id===P.id);(!!(N&&N.area===a.lastArea)?a.waves>a.gapWave:a.waves>=a.gapWave)&&(a.gap=!1)}return x()?(h.start(a.job.id),s.announce?.(s.lineFor?.("mission",a.job.id,n.round)),!0):!1}function m(){let D=a.job;if(!D||a.mode!=="sp")return;let P=D.gate&&e.doors.find(R=>R.id===D.gate);P&&!P.open&&(P.open=!0);let N=D.pts*(n.double>0?2:1);t.pts+=N;for(let R of t.slots)R&&i.weapons[R.id]&&(R.mag=i.weapons[R.id].mag,R.reserve=i.weapons[R.id].reserve);D.power&&c(D.power,D.pad.x,D.pad.z),l("+"+N),h.complete(D.id,{pts:N,next:np(D.id,n.round,n.phase)}),s.cash(),P&&s.door(),s.announce?.(s.lineFor?.("done",D.id,n.round)),a.done.add(D.id),a.lastArea=D.area,a.gap=!0,a.gapWave=n.round,a.job=null,f()}function v(){a.mode="sp",a.pid="you",a.job=null,a.unlocked=[],a.done=new Set,a.gap=!1,a.gapWave=0,a.lastArea="",a.waves=0,f()}function M(D){if(a.mode!=="sp"||!a.job||n.state!=="playing")return;let P=a.job;if(P.kind==="carry"&&!P.carry.you){let N=null,R=Xt.pickup;for(let U of P.items)if(!U.done&&!U.carried){let H=Math.hypot(t.x-U.x,t.z-U.z);H<=R&&(R=H,N=U)}N&&(N.carried="you",P.carry.you=N.id,s.click(0,880,.28),o(`Picked up ${d(P)}`+(P.need>1?` (${P.have+1}/${P.need})`:"")))}else if(P.kind==="radio"&&n.phase==="round"){let N=Math.hypot(t.x-P.pad.x,t.z-P.pad.z)<=Xt.radio;P.have=N?P.have+D:Math.max(0,P.have-D*Xt.decay)}P.have>=P.need&&m(),f()}function _(){let D=a.job;if(!D||a.mode!=="sp")return!1;if(D.kind==="carry"){if(!D.carry.you)return o("Pick it up first"),!1;if(Math.hypot(t.x-D.pad.x,t.z-D.pad.z)>Xt.deliver)return!1;let P=D.items.find(N=>N.id===D.carry.you);return P&&(P.done=!0,P.carried=null),delete D.carry.you,D.have++,s.repair(),D.have>=D.need?m():(f(),o(`Delivered ${d(D)} (${D.have}/${D.need})`)),!0}if(D.kind==="board"){let P=D.items.find(N=>!N.done&&Math.hypot(t.x-N.x,t.z-N.z)<=Xt.board);return P?(P.done=!0,D.have++,s.repair(),D.have>=D.need?m():(f(),o(`Window boarded (${D.have}/${D.need})`)),!0):!1}return!1}function b(D){if(a.mode!=="sp"||!a.job||a.job.kind!=="clear"||!D)return;let P=D.win,N=!!(P&&P.area===a.job.area&&Math.hypot(D.pos.x-P.c.x,D.pos.z-P.c.z)<12);Vi(D.pos.x,D.pos.z,e.mapId)!==a.job.area&&!N||(a.job.have++,a.job.have>=a.job.need&&m())}function T(){if(a.mode!=="sp"||!a.job||!a.job.carry.you)return;let D=a.job.items.find(P=>P.id===a.job.carry.you);D&&!D.done&&(D.x=t.x,D.z=t.z,D.carried=null),delete a.job.carry.you,f()}function L(D,P,N,R){a.mode="net",a.pid=R||a.pid;let U=a.job,H=!!(U&&U.carry&&U.carry[a.pid]);if(!D){a.job=null,f();return}let B=Xt.jobs.find(se=>se.id===D[0]);if(!B){a.job=null,f();return}let G={};for(let se of N||[])G[se[0]]=se[1];let Z=new Set(Object.values(G));a.job={index:Xt.jobs.indexOf(B),id:B.id,title:B.title,kind:B.kind,gate:B.gate||"",area:B.area,need:D[2],pts:B.pts,power:B.power||"",pad:{x:D[3],z:D[4]},have:D[1],carry:G,items:(P||[]).filter(se=>!Z.has(se[0])).map(se=>({id:se[0],x:se[1],z:se[2],done:!1,carried:null}))},U&&U.id===B.id&&!H&&G[a.pid]?o(`Picked up ${d(a.job)}`+(a.job.need>1?` (${a.job.have+1}/${a.job.need})`:"")):U&&U.id===B.id&&a.job.kind!=="radio"&&a.job.have>U.have&&a.job.have<a.job.need&&o(`${a.job.kind==="clear"?"Lot D kills":a.job.kind==="board"?"Window boarded":"Delivered "+d(a.job)} (${a.job.have}/${a.job.need})`),f()}function y(D){if(!D||D.e!=="mission")return;let P=Xt.jobs.find(N=>N.id===D.id);if(D.start){h.start(D.id),s.announce?.(s.lineFor?.("mission",D.id,n.round));return}h.complete(D.id,{pts:D.pts,next:np(D.id,n.round,u())}),s.announce?.(s.lineFor?.("done",D.id,n.round)),s.cash(),P&&P.gate&&s.door();for(let N of t.slots)N&&i.weapons[N.id]&&(N.mag=i.weapons[N.id].mag,N.reserve=i.weapons[N.id].reserve)}function E(D,P){let N=a.job;if(!N)return null;if(N.kind==="board"){let R=null;for(let U of N.items)if(!U.done&&!U.carried){let H=Math.hypot(D-U.x,P-U.z);H<=Xt.board&&(!R||H<R.d)&&(R={d:H,name:"Board this window"})}return R&&{type:"job",d:R.d,hold:!0,name:R.name}}if(N.kind==="carry"&&N.carry[a.pid]){let R=Math.hypot(D-N.pad.x,P-N.pad.z);if(R<=Xt.deliver)return{type:"job",d:R,hold:!1,name:N.id==="carb"?"Install the carb":"Deliver"}}return null}function S(D){return D?a.job&&a.job.gate===D.id?Math.floor(D.price*Xt.discount):D.price:0}function I(){let D=a.job;if(!D)return null;if(D.carry&&D.carry[a.pid])return D.pad;let P=null,N=1e9;for(let R of D.items)if(!R.done&&!R.carried){let U=Math.hypot((t.x||0)-R.x,(t.z||0)-R.z);U<N&&(N=U,P=R)}return P||D.pad}function F(D){if(!(n.state==="playing"&&a.job&&e.mapId==="junkyard")){h.hide(),e.marker=null;return}e.marker=h.frame(a.job,{pid:a.pid,P:t,phase:u(),doors:e.doors,cam:D,time:n.time,price:S})||I()}return v(),{reset:v,update:M,use:_,onKill:b,drop:T,applyNet:L,onNetEvent:y,onWave:g,focus:E,price:S,frame:F,get job(){return a.job}}}var yE=5,_E=16,Ll=4.6,sp=14;function Qg(i){let{scene:e,world:t,fx:n}=i,s=new Map,r=new Map,o=[],l=0,c=1,a=new $e({color:9048088,roughness:.45,metalness:.2}),h=new $e({color:16722490,roughness:.3,emissive:4849672,emissiveIntensity:.6}),u=new cn(.16,10,8),d=new Bt(.05,.05,.08,6),f=(()=>{let R=document.createElement("canvas");R.width=R.height=32;let U=R.getContext("2d"),H=U.createRadialGradient(16,16,0,16,16,16);return H.addColorStop(0,"rgba(255,255,255,1)"),H.addColorStop(1,"rgba(255,255,255,0)"),U.fillStyle=H,U.fillRect(0,0,32,32),new Vt(R)})(),p=new qn({map:f,color:16720452,blending:an,depthWrite:!1,transparent:!0}),x=[];function g(){let R=new Ce,U=new me(u,a),H=new me(d,h);H.position.y=.16;let B=new ei(p);return B.position.y=.2,B.scale.setScalar(.9),R.add(U,H,B),R.userData.glow=B,R.visible=!1,e.add(R),R}let m=g();m.visible=!0,m.position.set(0,-60,0),m.traverse(R=>{R.frustumCulled=!1});for(let R=0;R<3;R++)x.push(g());function v(R){let U=r.get(R);return U||(U=x.pop()||g(),U.visible=!0,r.set(R,U),U)}function M(R){let U=r.get(R);U&&(U.visible=!1,r.delete(R),x.push(U))}let _=new ki(1,6),b=Array.from({length:14},()=>{let R=new me(_,new nt({color:6948880,transparent:!0,opacity:0,depthWrite:!1}));return R.rotation.x=-Math.PI/2,R.visible=!1,e.add(R),R}),T=0;function L(R,U){let H=i.blood;for(let B=0;B<7;B++){let G=R+(Math.random()-.5)*3.2,Z=U+(Math.random()-.5)*3.2,se=.18+Math.random()*.45;if(H){H(G,Z,se*2.2);continue}let ce=b[T];T=(T+1)%b.length;let j=o.indexOf(ce);j>=0&&o.splice(j,1),ce.scale.setScalar(se),ce.position.set(G,.04,Z),ce.rotation.z=Math.random()*6,ce.visible=!0,ce.material.opacity=.85,o.push({s:ce,t:6+Math.random()*4})}n.dust?.(new O(R,.4,U),{x:0,y:1,z:0},10,[.6,.05,.08])}function y(R,U,H,B,G){let Z=Math.max(-1.1,Math.min(.9,G||0)),se=Math.cos(Z),ce={id:c++,x:R,y:U,z:H,vx:-Math.sin(B)*se*sp,vy:Math.sin(Z)*sp+2.2,vz:-Math.cos(B)*se*sp,fuse:yE,landed:!1};return s.set(ce.id,ce),ce}function E(R){let U=new Set;for(let H of R||[]){let[B,G,Z,se,ce,j]=H;U.add(B);let le=s.get(B);s.set(B,{id:B,x:G,y:Z,z:se,landed:!!ce,fuse:j,net:!0,rx:le?.rx,ry:le?.ry,rz:le?.rz})}for(let H of[...s.keys()])U.has(H)||(s.delete(H),M(H))}let S=(R,U)=>{let H=R?.ng;if(H){for(let B of H)if(B[0]===U)return B}return null};function I(R){for(let U of s.values()){if(!R){U.rx=U.x,U.ry=U.y,U.rz=U.z;continue}let H=S(R.s0,U.id),B=S(R.s1,U.id);if(H&&B){let G=R.k;U.rx=H[1]+(B[1]-H[1])*G,U.ry=H[2]+(B[2]-H[2])*G,U.rz=H[3]+(B[3]-H[3])*G}else if(B||H){let G=B||H;U.rx=G[1],U.ry=G[2],U.rz=G[3]}else U.rx=U.ry=U.rz=void 0}}function F(R,U){if(s.delete(R.id),M(R.id),L(R.x,R.z),t.bait=null,i.sfx?.boom?.(),!U)return;let H=i.zombies;if(H)for(let Z of H.list){if(Z.state==="dead"||Z.state==="dying")continue;let se=Math.hypot(Z.pos.x-R.x,Z.pos.z-R.z);if(se>Ll)continue;let ce=200*(1-se/Ll)+50;H.damage(Z,ce,!1)?.killed&&i.onKill?.(Z)}let B=i.birds;if(B)for(let Z of B.list){if(Z.state==="dead"||Z.state==="dying")continue;let se=Math.hypot(Z.x-R.x,Z.y-R.y,Z.z-R.z);if(se>Ll)continue;let ce=200*(1-se/Ll)+50;B.damage(Z,ce,!1)?.killed&&(i.onBirdKill||i.onKill)?.(Z)}let G=i.P;if(G){let Z=Math.hypot(G.x-R.x,G.z-R.z);Z<3.2&&i.onSelf?.(55*(1-Z/3.2))}}function D(R){l-=R;let U=null;for(let B of[...s.values()])if(B.fuse!=null){if(B.fuse-=R,!B.landed&&B.vx!=null){let G=B.x,Z=B.z;if(B.vy-=18*R,B.x+=B.vx*R,B.y+=B.vy*R,B.z+=B.vz*R,t.ray){let se=(t.segBlock,null)}if(typeof t.resolve=="function"){let se={x:B.x,z:B.z},ce=Math.hypot(B.x-G,B.z-Z);t.resolve(se,.16)&&ce>.01&&(B.x=G,B.z=Z,B.vx*=-.25,B.vz*=-.25)}B.y<=.16&&(B.y=.16,B.landed=!0,B.vx=B.vz=B.vy=0)}B.fuse<=0?F(B,!0):B.landed&&(!U||B.fuse<U.fuse)&&(U=B)}t.bait=U?{x:U.x,z:U.z}:null;let H=[...s.values()].reduce((B,G)=>Math.min(B,G.fuse??9),9);H<5&&l<=0&&s.size&&(i.sfx?.beep?.(H),l=H<1.2?.14:H<2.5?.28:.55);for(let B=o.length-1;B>=0;B--)o[B].t-=R,o[B].s.material.opacity=Math.max(0,o[B].t/8),o[B].t<=0&&(o[B].s.visible=!1,o.splice(B,1))}function P(){for(let R of s.values()){let U=R.net&&R.rx!==void 0;if(R.net&&!U){let j=r.get(R.id);j&&(j.visible=!1);continue}let H=v(R.id);H.visible=!0;let B=U?R.rx:R.x,G=U?R.ry:R.y||.16,Z=U?R.rz:R.z;H.position.set(B,Math.max(.16,G),Z),H.rotation.y+=.02;let se=R.fuse??5,ce=R.landed?(se<1.2?1:.45)*(.5+.5*Math.sin(se*18)):.15;H.userData.glow.scale.setScalar(.25+1.1*ce),H.userData.glow.material.opacity=1}}function N(){for(let R of[...r.keys()])M(R);s.clear(),t.bait=null}return{throwLocal:y,sync:E,interp:I,step:D,frame:P,reset:N,splatter:L,items:s,BLAST:Ll,LURE:_E}}var Ru={junkyard:{id:"junkyard",name:"Junkyard",blurb:"The original yard",cap:[16,26],spawn:{x:0,z:12}},motel:{id:"motel",name:"Salt Motel",blurb:"Tight courtyard, close quarters",cap:[12,20],spawn:{x:0,z:0}},drivein:{id:"drivein",name:"Drive-In",blurb:"Wide open lot, big hordes",cap:[18,30],spawn:{x:0,z:18}}},op=i=>Ru[i]||Ru.junkyard,rp=class i extends Pl{constructor(e,t,n,s){i.prototype._def=s,super(e,t,n)}lamps_(e){for(let[t,n,s,r]of e){let o=Sl(this.M,!!s);o.position.set(t,0,n),o.rotation.y=r,o.traverse(c=>{c.isMesh&&(c.castShadow=!c.userData.bulb)}),o.updateMatrixWorld(!0),this.addCol(t-.2,t+.2,n-.2,n+.2,5);let l=o.userData.bulbPos.clone().applyMatrix4(o.matrixWorld);this.lamps.push({pos:l,teal:!!s,ph:X(100)}),this.staticGroup.add(o)}}floor(e,t,n,s){this.box(e,.03,t,n,0,s,this.M.concrete,{cast:!1})}build(){this.mapId=this._def.id||"motel";let e=this._def.L,t=this.M,n=3.2,s=.4;this.buildSky(),this.buildGround();let r=(d,f,p,x=[],g=t.fence)=>this.wall("x",d,f,p,x,n,s,g),o=(d,f,p,x=[],g=t.fence)=>this.wall("z",d,f,p,x,n,s,g),{w:l,s:c,n:a,wb:h}=e;r(c,-l,l,e.south),o(l,kn,c,e.eastA),o(-l,kn,c,e.westA),r(kn,-l,l,[{c:0,id:"DOOR",door:!0,w:6}]),h!==l&&(r(kn,l,h),r(kn,-h,-l)),o(h,a,kn,e.eastB),o(-h,a,kn,e.westB),r(a,-h,h,e.north),this.floor(2*l,c-kn,0,(c+kn)/2),this.floor(2*h,kn-a,0,(kn+a)/2),this.buildGate();let u=this.place.bind(this);for(let[d,f,p,x,g,m]of e.props)u(d==="bus"?Ai(t,f,15129792,m||{}):d==="beetle"?yi(t,f,m||{}):d==="tires"?bl(t,f):d==="drum"?ar(t,f):ni(t,f),p,x,g||0);for(let d of e.shacks||[])this.shack(...d);this.lamps_(e.lamps);for(let d of e.buys)this.wallBuy(...d);this.buildCrate(...e.crate),this.scenery(),this.buildLights()}},ME={motel:{w:16,s:6,n:-44,wb:18,south:[{c:-7,id:"S1"},{c:7,id:"S2"}],eastA:[{c:-10,id:"E1"}],westA:[{c:-14,id:"W1"}],eastB:[{c:-36,id:"E2"}],westB:[{c:-32,id:"W2"}],north:[{c:6,id:"N1"}],props:[["beetle",6010272,-9,-4,0],["bus",14252330,10,-12,Math.PI/2],["tires",4,-12,-16],["drum",3829413,12,2],["drum",11680302,13,3],["crate",1.1,-13,2],["beetle",13619140,-10,-34,Math.PI/2,{missing:!0}],["bus",9087050,8,-38,0],["tires",5,14,-28],["crate",1,-15,-41]],shacks:[[0,-10,8,3]],lamps:[[-14,-20,0,.2],[14,-20,1,2.9],[-8,2,0,.5],[9,-6,1,2.6],[-6,-18,0,0],[0,-34,1,1.2],[12,-42,0,3]],buys:[["smg",-10,kn+.25,0],["akimbo",8,kn+.25,0],["nade",-2,2,Math.PI],["shotgun",15.75,-4,-Math.PI/2],["rifle",-17.75,-36,Math.PI/2]],crate:[-12,-8]},drivein:{w:32,s:22,n:-50,wb:32,south:[{c:-18,id:"S1"},{c:0,id:"S2"},{c:18,id:"S3"}],eastA:[{c:6,id:"E1"},{c:-14,id:"E1b"}],westA:[{c:8,id:"W1"},{c:-12,id:"W1b"}],eastB:[{c:-38,id:"E2"}],westB:[{c:-40,id:"W2"}],north:[{c:-14,id:"N1"},{c:14,id:"N2"}],props:[["bus",6197184,-18,4,0],["bus",11680302,18,4,0],["beetle",14733722,-8,-6,0],["beetle",6010272,8,-6,0,{door:!0}],["beetle",14252330,0,8,Math.PI/2],["tires",5,-26,14],["tires",3,26,-16],["drum",14252330,24,16],["crate",1.2,-26,-16],["bus",9087050,-14,-38,Math.PI/2],["beetle",13619140,14,-36,0,{missing:!0}],["tires",4,0,-44],["crate",1,26,-46]],shacks:[[0,-16,10,4]],lamps:[[-24,18,0,.6],[24,18,0,2.6],[-20,-8,1,0],[20,-8,1,3],[0,0,0,1],[-20,-36,0,.3],[20,-44,1,3]],buys:[["smg",-14,kn+.25,0],["akimbo",6,kn+.25,0],["nade",2,8,0],["shotgun",31.75,-4,-Math.PI/2],["rifle",-31.75,-30,Math.PI/2]],crate:[-24,4]}};function ex(i,e,t,n){let s=op(n);return s.id==="junkyard"?new Pl(i,e,t):new rp(i,e,t,{L:ME[s.id],id:s.id})}var tx={easy:{id:"easy",name:"Easy",count:.7,hp:.75,speed:.85,dmg:.6,drop:2,maxDrops:3,inter:10,spawnGap:1.3,brute:.5,startPts:750},medium:{id:"medium",name:"Medium",count:1,hp:1,speed:1,dmg:1,drop:1,maxDrops:2,inter:7,spawnGap:1,brute:1,startPts:500},hard:{id:"hard",name:"Hard",count:1.35,hp:1.3,speed:1.15,dmg:1.4,drop:.6,maxDrops:1,inter:5,spawnGap:.75,brute:1.6,startPts:400}};function ap(i,e=1){e=Math.max(1,Math.min(4,e|0));let t=[1,1.6,2.2,2.8][e-1];return{...i,count:i.count*t,hp:i.hp*(1+.1*(e-1))}}function lp(i){return tx[i]||tx.medium}var $n={torso:new ot(.52,.62,.3),hip:new ot(.46,.2,.28),leg:new ot(.2,.9,.22),arm:new ot(.15,.62,.16),head:new Dr(.27,1),eye:new ot(.07,.04,.03),jaw:new ot(.2,.08,.16),rag:new ot(.12,.28,.03),hand:new ot(.17,.14,.17)},nx=new nt({color:new pe(1.7,.22,.1),toneMapped:!1}),ix=new $e({color:7213080,roughness:.6}),EE=new $e({color:1708564,roughness:1}),TE=[6191698,6980704,5798498,7439722,5206104],wE=[8007471,3099258,5921322,3816004,9071146,2068344,11687466],AE=[2764602,3813156,2106922,2898474],cp=class{constructor(){this.root=new Ce,this.sk=new $e({roughness:.75,emissive:0}),this.sh=new $e({roughness:.95,emissive:0}),this.pa=new $e({roughness:.95,emissive:0});let e=(o,l,c,a,h)=>{let u=new me(o,l);return u.position.set(c,a,h),u.castShadow=!0,u};this.pelvis=new Ce,this.pelvis.position.y=.95,this.root.add(this.pelvis),this.legL=new Ce,this.legL.position.set(-.13,0,0),this.legL.add(e($n.leg,this.pa,0,-.45,0)),this.legR=new Ce,this.legR.position.set(.13,0,0),this.legR.add(e($n.leg,this.pa,0,-.45,0)),this.pelvis.add(this.legL,this.legR,e($n.hip,this.pa,0,0,0)),this.upper=new Ce,this.pelvis.add(this.upper),this.upper.add(e($n.torso,this.sh,0,.36,0));let t=e($n.rag,this.sh,.12,0,.15);t.rotation.z=.2;let n=e($n.rag,this.sh,-.1,.02,-.15);n.rotation.z=-.15,this.upper.add(t,n);let s=e($n.rag,ix,-.1,.45,.155);s.scale.set(1.6,1,1),s.rotation.z=.5;let r=e($n.rag,ix,.14,.2,.156);r.scale.set(1,.7,1),this.upper.add(s,r),this.head=new Ce,this.head.position.set(0,.88,.03),this.head.add(e($n.head,this.sk,0,0,0)),this.head.add(e($n.eye,nx,-.1,.04,.24),e($n.eye,nx,.1,.04,.24),e($n.jaw,EE,0,-.14,.18)),this.head.scale.set(1.05,1.1,1),this.upper.add(this.head),this.armL=new Ce,this.armL.position.set(-.35,.58,0),this.armL.add(e($n.arm,this.sk,0,-.28,0),e($n.hand,this.sk,0,-.64,0)),this.armR=new Ce,this.armR.position.set(.35,.58,0),this.armR.add(e($n.arm,this.sk,0,-.28,0),e($n.hand,this.sk,0,-.64,0)),this.upper.add(this.armL,this.armR),this.root.visible=!1,this.state="dead",this.pos=this.root.position}},Pu=class{constructor(e,t,n){this.world=t,this.scene=e,this.list=[],this.max=n>0?26:16;for(let s=0;s<this.max+4;s++){let r=new cp;e.add(r.root),this.list.push(r)}this.alive=0,this.t=0,this.hooks={}}setTier(e){this.max=e>0?26:16}reset(){for(let e of this.list)e.state="dead",e.root.visible=!1;this.alive=0}stats(e){let t=e<10?80+35*e:430*Math.pow(1.1,e-9),n=Math.min(5,1.5+e*.24);return{hp:t,sp:n}}spawn(e,t,n=!1){let s=this.list.find(c=>c.state==="dead"&&!c.root.visible);if(!s)return null;let r=this.stats(t),o=t>=3&&Math.random()<Math.min(.55,(t-2)*.09);s.brute=n,s.scale=n?1.38:X(.94,1.06),s.root.scale.setScalar(s.scale),s.maxHp=s.hp=r.hp*(n?3.3:1),s.speed=r.sp*X(.82,1.12)*(o?1.45:1)*(n?.78:1),s.speed=Math.min(s.speed,6),s.runner=o,s.dmg=n?44:22,s.value=n?150:60,s.sk.color.setHex(n?10121050:Ln(TE)),s.sh.color.setHex(Ln(wE)),s.pa.color.setHex(Ln(AE));for(let c of[s.sk,s.sh,s.pa])c.emissive.setHex(0);s.win=e,s.state="approach",s.slot=X(-1.2,1.2),s.phase=X(Wt),s.attackT=0,s.cool=0,s.stuck=0,s.stuckTot=0,s.side=1,s.flash=0,s.hitT=0,s.groanT=X(1,4),s.dieT=0,s.climbT=0,s.chk=0,s.chkX=0,s.chkZ=0,s.limp=Math.random()<.3,s.lane=X(-.55,.55);let l=X(4,9);return s.pos.set(e.out.x+e.n.x*l+e.t.x*X(-3,3),0,e.out.z+e.n.z*l+e.t.z*X(-3,3)),s.yaw=Math.atan2(-e.n.x,-e.n.z),s.root.rotation.set(0,s.yaw,0),s.root.visible=!0,s.pelvis.rotation.set(0,0,0),s.root.position.y=0,this.alive++,s}rayHit(e,t,n){let s=null;for(let r of this.list){if(r.state==="dead"||r.state==="dying")continue;let o=r.scale,l={x:r.pos.x,y:(r.climbY||0)+1.66*o,z:r.pos.z},c=.3*o,a=RE(e,t,l,c),h=null,u=e.x-r.pos.x,d=e.z-r.pos.z,f=t.x*t.x+t.z*t.z,p=.42*o;if(f>1e-8){let m=2*(u*t.x+d*t.z),v=u*u+d*d-p*p,M=m*m-4*f*v;if(M>=0){let _=Math.sqrt(M);for(let b of[(-m-_)/(2*f),(-m+_)/(2*f)])if(b>0){let T=e.y+t.y*b-(r.climbY||0);if(T>=0&&T<=1.45*o){h=b;break}}}}else u*u+d*d<p*p&&(h=.01);let x=null,g=!1;a!==null&&(h===null||a<=h+.15)?(x=a,g=!0):h!==null&&(x=h),x!==null&&x<n&&(!s||x<s.t)&&(s={z:r,t:x,head:g})}return s}damage(e,t,n,s,r){if(e.state==="dead"||e.state==="dying")return null;e.hp-=t,e.flash=.2,e.hitT=.22;let o=e.hp<=0;return o?(e.state="dying",e.dieT=0,this.alive--,e.dieDir=X(-.4,.4)):e.state==="attack"||e.state,{killed:o,head:n}}killAll(){let e=[];for(let t of this.list)t.state!=="dead"&&t.state!=="dying"&&(t.hp=0,t.state="dying",t.dieT=0,t.dieDir=X(-.4,.4),this.alive--,e.push(t));return e}update(e,t,n,s,r){let o=this.world;this.t=t;for(let c of o.windows)c.cool>0&&(c.cool-=e);let l=Vi(n.x,n.z,o.mapId);for(let c=0;c<this.list.length;c++){let a=this.list[c];if(a.state==="dead")continue;let h=a.scale;if(a.flash>0){a.flash-=e;let S=Math.max(0,a.flash/.2);for(let I of[a.sk,a.sh,a.pa])I.emissive.setRGB(1.15*S,.16*S,.05*S)}if(a.state==="dying"){a.dieT+=e;let S=Math.min(1,a.dieT/.55);a.pelvis.rotation.x=-S*1.5*(1-.1),a.pelvis.rotation.z=a.dieDir*S,a.pelvis.position.y=.95-S*.55,a.armL.rotation.x=-1.4+S*2.2,a.armR.rotation.x=-1.4+S*2.2,a.dieT>2.2&&(a.root.position.y=-(a.dieT-2.2)*.9),a.dieT>3.2&&(a.state="dead",a.root.visible=!1,a.root.position.y=0,a.pelvis.position.y=.95,a.pelvis.rotation.set(0,0,0));continue}if(a.groanT-=e,a.groanT<=0){a.groanT=X(2.5,6);let S=a.pos.x-n.x,I=a.pos.z-n.z,F=Math.hypot(S,I);F<40&&r.groan?.(a,F)}let u=0,d=0,f=0,p=n.x,x=n.z;if(a.state==="approach"){let S=a.win,I=S.out.x+S.t.x*a.slot*.8,F=S.out.z+S.t.z*a.slot*.8,D=I-a.pos.x,P=F-a.pos.z,N=Math.hypot(D,P);N<.25?(a.state=S.count>0?"attack":"climb",a.climbT=0,a.cool=X(.6,1.6)):(u=D/N,d=P/N,f=a.speed,a.pos.x+=u*f*e,a.pos.z+=d*f*e,a.yaw=Cu(a.yaw,Math.atan2(u,d),Math.min(1,e*8)))}else if(a.state==="attack"){let S=a.win;a.yaw=Cu(a.yaw,Math.atan2(-S.n.x,-S.n.z),Math.min(1,e*8)),a.cool-=e,S.count<=0?(a.state="climb",a.climbT=0):(a.attackT+=e,a.cool<=0&&S.count>0&&(a.cool=X(1.2,2),S.cool<=0&&o.removePlank(S)&&(S.cool=X(2.2,3.2),r.plank?.(S,!0))))}else if(a.state==="climb"){let S=a.win;a.climbT+=e/1.25;let I=Math.min(1,a.climbT),F=S.out.x+S.t.x*a.slot*.8,D=S.out.z+S.t.z*a.slot*.8,P=S.in.x+S.t.x*a.slot*.5,N=S.in.z+S.t.z*a.slot*.5;a.pos.x=F+(P-F)*I,a.pos.z=D+(N-D)*I,a.climbY=Math.sin(I*Math.PI)*.75,a.root.position.y=a.climbY,a.yaw=Cu(a.yaw,Math.atan2(-S.n.x,-S.n.z),Math.min(1,e*8)),f=1.5,I>=1&&(a.state="chase",a.climbY=0,a.root.position.y=0)}else{let S=o.bait,I=S?Math.hypot(S.x-a.pos.x,S.z-a.pos.z):99,F=S&&I<16,D=F?S.x:p,P=F?S.z:x,N=F?Vi(D,P,o.mapId):l,R=Vi(a.pos.x,a.pos.z,o.mapId),U=D,H=P,B=null;if(R!==N){let te=o.doors&&o.doors.length?o.doors:s?[s]:[];B=Kg(a.pos.x,a.pos.z,o.mapId,N,te,a.lane||0),B&&(U=B.x,H=B.z)}let G=U-a.pos.x,Z=H-a.pos.z,se=Math.hypot(G,Z)||1;G/=se,Z/=se;let ce=Math.hypot(p-a.pos.x,x-a.pos.z);if(a.stuck>0&&!B){a.stuck-=e;let te=.7*a.side,ve=Math.cos(te),Te=Math.sin(te),ne=G*ve-Z*Te,fe=G*Te+Z*ve;G=ne,Z=fe}let j=0,le=0;for(let te=0;te<this.list.length;te++){if(te===c)continue;let ve=this.list[te];if(ve.state!=="chase"&&ve.state!=="attack")continue;let Te=a.pos.x-ve.pos.x,ne=a.pos.z-ve.pos.z,fe=Te*Te+ne*ne;if(fe<.62&&fe>1e-4){let ye=1/Math.sqrt(fe);j+=Te*ye*(.78-Math.sqrt(fe)),le+=ne*ye*(.78-Math.sqrt(fe))}}B&&(B.crossZ?j*=.12:le*=.12),G+=j*1.15,Z+=le*1.15;let Ie=Math.hypot(G,Z)||1;G/=Ie,Z/=Ie;let $=Math.hypot(D-a.pos.x,P-a.pos.z);f=!B&&(F?$<.9:ce<1&&R===l)||a.speed<=0?0:a.speed,a.cool-=e,!F&&ce<1.35&&R===l&&!B&&a.attackT<=0&&a.cool<=0&&(a.attackT=.01),a.attackT>0&&(a.attackT+=e,a.attackT>.42&&(!F&&ce<1.7&&R===l&&r.hitPlayer?.(a),a.attackT=0,a.cool=1.05),f*=.3),a.pos.x+=G*f*e,a.pos.z+=Z*f*e,u=G,d=Z,f>0&&o.resolve(a.pos,.36*h);let Ae=B?G:D-a.pos.x,qe=B?Z:P-a.pos.z;if(a.yaw=Cu(a.yaw,Math.atan2(Ae,qe),Math.min(1,e*9)),a.chk+=e,a.chk>.45){let te=Math.hypot(a.pos.x-a.chkX,a.pos.z-a.chkZ);if(f>.4&&te<.1){if(a.stuck=B?0:.45,a.side=Math.random()<.5?-1:1,a.stuckTot+=.45,B){let ve=B.gx-a.pos.x,Te=B.gz-a.pos.z,ne=Math.hypot(ve,Te)||1;a.pos.x+=ve/ne*.28,a.pos.z+=Te/ne*.28,o.resolve(a.pos,.36*h)}}else a.stuckTot=Math.max(0,a.stuckTot-.3);a.chkX=a.pos.x,a.chkZ=a.pos.z,a.chk=0,a.stuckTot>1.8&&B?(a.pos.x=B.ex,a.pos.z=B.ez,o.resolve(a.pos,.36*h),a.stuckTot=0):a.stuckTot>6&&this.reroute(a)}}a.root.rotation.y=a.yaw,a.state!=="climb"&&(a.root.position.y=0);let g=f>.1?f:0;a.phase+=g*e*(a.runner?2.4:2.7)/Math.max(.6,h);let m=Math.sin(a.phase),v=Math.min(.8,.28+g*.13);a.legL.rotation.x=m*v,a.legR.rotation.x=-m*v*(a.limp?.35:1),a.hitT>0&&(a.hitT=Math.max(0,a.hitT-e));let M=a.hitT>0?a.hitT/.22:0,_=.1+Math.min(.28,g*.05)+(a.runner?.16:0)+(a.brute?.1:0)-M*.42;a.upper.rotation.x=_+Math.abs(m)*.035,a.upper.rotation.z=Math.sin(a.phase*.5)*.07*(a.limp?2:1),a.upper.rotation.y=Math.sin(a.phase*.5)*.16;let b=a.brute?-.58:-.74,T=Math.min(.62,.2+g*.1)*(a.runner?1.28:1),L,y;if(a.state==="climb")L=y=-1.5;else if(a.state==="attack")y=-.5+Math.sin(a.attackT*7)*.95,L=b+.12;else if(a.attackT>0){let S=Math.sin(Math.min(1,a.attackT/.42)*Math.PI);y=b-S*1.15,L=b+m*T*.3}else L=b-m*T,y=b+m*T*(a.limp?.4:1);a.armL.rotation.x=L+M*.3,a.armR.rotation.x=y+M*.3;let E=a.brute?.28:.16;a.armL.rotation.z=E,a.armR.rotation.z=-E,a.head.rotation.x=.08+Math.sin(a.phase*.5)*.05-M*.5,a.head.rotation.y=Math.sin(a.phase*.5)*.1,a.head.rotation.z=Math.sin(a.phase*.5+1)*.1+M*.15,a.pelvis.position.y=.95+Math.abs(m)*(g>.2?.05:.02)}}reroute(e){let t=Yo(this.world.doors&&this.world.doors.length?this.world.doors:[this.world.door]),n=this.world.windows.filter(r=>t.has(r.area)),s=Ln(n.length?n:this.world.windows);e.win=s,e.state="approach",e.stuckTot=0,e.stuck=0,e.pos.set(s.out.x+s.n.x*3,0,s.out.z+s.n.z*3)}};function RE(i,e,t,n){let s=i.x-t.x,r=i.y-t.y,o=i.z-t.z,l=s*e.x+r*e.y+o*e.z,c=s*s+r*r+o*o-n*n,a=l*l-c;if(a<0)return null;let h=-l-Math.sqrt(a);return h>0?h:null}function Cu(i,e,t){let n=((e-i+Math.PI)%Wt+Wt)%Wt-Math.PI;return i+n*t}function Ci(i,e,t=!0){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),r=s.createImageData(i,i),o=r.data;for(let c=0;c<i;c++)for(let a=0;a<i;a++){let h=(c*i+a)*4,u=e(a/i,c/i,a,c);o[h]=u[0],o[h+1]=u[1],o[h+2]=u[2],o[h+3]=u[3]!=null?u[3]:255}s.putImageData(r,0,0);let l=new Vt(n);return l.wrapS=l.wrapT=rn,l.anisotropy=8,l.needsUpdate=!0,l.colorSpace=t?lt:On,l}function Zo(i,e,t=4){return Ci(i,(n,s)=>{let r=1/i,o=e(n+r,s)-e(n-r,s),l=e(n,s+r)-e(n,s-r),c=new O(-o*t,-l*t,1).normalize();return[(c.x*.5+.5)*255,(c.y*.5+.5)*255,(c.z*.5+.5)*255]},!1)}function sx(i=512){let e=(m,v)=>Rt(m*16,v*12,5,21)*.65+Rt(m*64,v*64,2,4)*.35,t=(m,v)=>Math.abs(Math.sin(m*Math.PI*32+Rt(m*6,v*8,2,8)*1.1))*.7+Rt(m*36,v*10,3,11)*.3,n=(m,v)=>Rt(m*10,v*10,4,31)*.55+Rt(m*80,v*80,2,2)*.45,s=(m,v)=>Rt(m*9,v*9,4,41),r=(m,v)=>Math.abs(Math.sin(v*Math.PI*18))*.6+Rt(m*20,v*8,3,6)*.4,o=Ci(i,(m,v)=>{let M=e(m,v),_=Rt(m*8,v*8,3,7),b=Rt(m*28,v*28,2,15),T=[Xe(118,168,M),Xe(132,168,M),Xe(108,132,M)];if(_>.66){let L=(_-.66)/.34;T=[Xe(T[0],110,L),Xe(T[1],48,L),Xe(T[2],40,L)]}if(b>.58){let L=(b-.58)*.45;T=[Xe(T[0],186,L),Xe(T[1],168,L),Xe(T[2],130,L)]}return T}),l=Ci(i,(m,v)=>{let M=e(m,v),_=Rt(m*6,v*6,3,19),b=Et(.62+M*.3-(_>.72?.28:0),.22,1)*255;return[(.62+M*.38)*255,b,10]},!1),c=Ci(i,(m,v)=>{let M=Math.abs(Math.sin((m*30+Rt(v*5,m*2,2,3)*.35)*Math.PI)),_=Rt(m*7,v*7,3,5),b=Et((m-.42)/.5,0,1),T=Xe(22,52,M*.45+_*.25),L=Xe(168,214,M*.25+_*.2),y=Xe(T,L,b*b),E=Xe(T*.82,L*.94,b*b),S=Xe(T*.62,L*.82,b*b),I=Rt(m*5,v*9,3,77);if(m<.45&&I>.72){let F=(I-.72)*2;return[Xe(y,90,F),Xe(E,22,F),Xe(S,16,F)]}return[y,E,S]}),a=Ci(i,(m,v)=>{let M=Math.abs(Math.sin(m*Math.PI*30)),_=Et((m-.42)/.5,0,1);return[210,Et(.72+M*.2-_*.08,.45,1)*255,4]},!1),h=Ci(i,(m,v)=>{let M=n(m,v),_=Rt(m*5,v*5,3,27),b=Xe(198,232,M),T=_>.68?(_-.68)*70:0;return[b-T*.2,b*.95-T*.4,b*.82-T*.45]}),u=Ci(i,(m,v)=>{let M=n(m,v);return[230,Et(.4+M*.35,.28,.9)*255,16]},!1),d=Ci(i,(m,v)=>{let M=s(m,v),_=Rt(m*18,v*18,3,9);return[Xe(86,150,M),Xe(8,24,M),Xe(8,18,_)]}),f=Ci(i,(m,v)=>{let M=s(m,v),_=Rt(m*14,v*14,2,44);return[70,Et(.1+M*.18-_*.08,.05,.35)*255,28]},!1),p=Ci(i,(m,v)=>{let M=r(m,v),_=Rt(m*9,v*9,3,13),b=Xe(210,236,M),T=_>.6?(_-.6)*50:0;return[b-T*.2,b*.96-T*.35,b*.86-T*.45]}),x=Ci(i,(m,v)=>{let M=r(m,v);return[220,Et(.82+M*.15,.7,1)*255,2]},!1),g=Ci(i,(m,v)=>{let M=Rt(m*10,v*8,4,61),_=Rt(m*20,v*4,2,2),b=[Xe(168,210,M),Xe(118,154,M),Xe(104,132,M)];return _>.7&&(b=[b[0]*.75,b[1]*.7,b[2]*.7]),b});return{skin:o,skinNor:Zo(i,e,3.2),skinArm:l,feather:c,featherNor:Zo(i,t,6),featherArm:a,bone:h,boneNor:Zo(i,n,2.6),boneArm:u,gore:d,goreNor:Zo(i,s,3),goreArm:f,ruff:p,ruffNor:Zo(i,r,5),ruffArm:x,beak:g,beakNor:Zo(i,(m,v)=>Rt(m*10,v*8,4,61),2.4)}}function Dl(i,e,t,n={}){return new $e({map:i,normalMap:e,roughnessMap:t,metalnessMap:t,aoMap:t,aoMapIntensity:.65,roughness:.8,metalness:.03,envMapIntensity:.9,...n})}function hp(i=2){let e=i>=2?512:i===1?256:128,t=sx(e),n=Dl(t.skin,t.skinNor,t.skinArm,{roughness:.84,color:15265504}),s=Dl(t.feather,t.featherNor,t.featherArm,{roughness:.9,side:It,color:16777215}),r=Dl(t.bone,t.boneNor,t.boneArm,{roughness:.48,color:16777215}),o=Dl(t.ruff,t.ruffNor,t.ruffArm,{roughness:.95,side:It,color:16777215}),l=Dl(t.beak,t.beakNor,t.skinArm,{roughness:.42,color:16777215}),c=new Yn({map:t.gore,normalMap:t.goreNor,roughnessMap:t.goreArm,roughness:.16,metalness:.04,clearcoat:.62,clearcoatRoughness:.22,envMapIntensity:1.2,color:16777215}),a=new $e({color:11992883,emissive:11992883,emissiveIntensity:2.6,roughness:.25,metalness:0,envMapIntensity:.15}),h=new nt({color:16252872});return{flesh:n,feather:s,bone:r,ruff:o,beak:l,viscera:c,eye:a,eyeCore:h,T:t}}var lr={body:0,wingL:1,wingLTip:2,wingR:3,wingRTip:4,tail:5,legs:6};function Tt(i,e,t,n,s,r){let o=new me(i,e);return o.name=t||"",n&&o.position.set(n[0],n[1],n[2]),s&&o.rotation.set(s[0],s[1],s[2]),r&&o.scale.set(r[0],r[1],r[2]),o}function ii(i,e,t,n=6){return new Bt(i,e,t,n,1)}function Ko(i,e=1){return new cn(i,6+e*2,5+e)}function Bs(i,e,t){return new ot(i,e,t)}function CE(){let i=new Rs;i.moveTo(.02,.06),i.bezierCurveTo(.24,.2,.52,.24,.86,.14),i.bezierCurveTo(1.08,.07,1.22,-.04,1.28,-.16),i.lineTo(1.16,-.26),i.bezierCurveTo(.92,-.2,.58,-.22,.3,-.15),i.bezierCurveTo(.12,-.1,.03,-.03,0,0),i.closePath();let e=new tr;e.absellipse(.5,0,.1,.05,0,Math.PI*2,!0);let t=new tr;t.absellipse(.82,-.04,.08,.04,0,Math.PI*2,!0),i.holes.push(e,t);let n=new Ya(i,8);n.rotateX(-Math.PI/2),n.rotateY(-.08);let s=n.attributes.position,r=n.attributes.uv;for(let o=0;o<s.count;o++){let l=s.getX(o);s.setY(o,s.getY(o)+Math.sin(Math.min(1,Math.max(0,l/1.28))*Math.PI)*.04),r&&r.setX(o,Math.min(1,Math.max(0,l/1.28)))}return n.computeVertexNormals(),n}function PE(i,e,t){let n=t?16:8;for(let s=0;s<n;s++){let r=s/n*Math.PI*2,o=.11+s%3*.02,l=Bs(o,.016,.046);l.translate(o*.5,0,0);let c=Tt(l,e.ruff,"ruff-quill");c.position.set(Math.cos(r)*.045,Math.sin(r)*.032,0),c.rotation.z=r,c.rotation.y=.85,i.add(c)}}function IE(i,e,t){let n=t?9:5;for(let s=0;s<n;s++){let r=s/(n-1),o=.18-r*.34,l=.16+Math.sin(r*Math.PI)*.055,c=new ti(l,t?.009:.012,4,t?12:7,Math.PI*.95);c.rotateZ(Math.PI),c.rotateX(.55),i.add(Tt(c,e.bone,"bone-rib",[0,-.02,o],[.12,0,0]))}i.add(Tt(ii(.011,.009,.36,5),e.bone,"bone-sternum",[0,-.055,.04],[Math.PI/2+.15,0,0])),i.add(Tt(ii(.016,.012,.42,5),e.bone,"bone-spine",[0,.05,-.04],[Math.PI/2+.18,0,0]))}function LE(i,e,t){function n(s){let r=new Ce;r.name=s>0?"wingR":"wingL",r.position.set(s*.1,.07,.02),i.add(r),r.add(Tt(ii(.012,.01,.36,5),e.bone,"bone-humerus",[s*.17,.02,0],[0,0,s*Math.PI/2]));let o=new Ce;o.name=s>0?"elbowR":"elbowL",o.position.set(s*.36,0,-.02),r.add(o),o.add(Tt(ii(.01,.008,.42,5),e.bone,"bone-ulna",[s*.2,.012,-.02],[.1,0,s*Math.PI/2]));let l=new Ce;l.name=s>0?"tipR":"tipL",l.position.set(s*.42,0,-.08),o.add(l),l.add(Tt(ii(.008,.005,.26,4),e.bone,"bone-manus",[s*.1,0,-.03],[.2,0,s*Math.PI/2]));let c=CE(),a=Tt(c,e.feather,"feather-membrane");if(a.position.set(0,-.01,-.04),a.scale.set(s,1,1),r.add(a),t){let u=Tt(c.clone(),e.feather,"feather-cover");u.position.set(0,.016,-.03),u.scale.set(s*.92,1,.88),r.add(u)}let h=t?8:4;for(let u=0;u<h;u++){let d=u/Math.max(1,h-1),f=.28+(1-d)*.1,p=Bs(f,.01,.048);p.translate(f*.5,0,0);let x=p.attributes.uv;if(x)for(let m=0;m<x.count;m++)x.setX(m,.55+x.getX(m)*.45);let g=Tt(p,e.feather,"feather-prim");g.position.set(s*.05,0,.02-u*.03),g.rotation.set(0,s>0?-.08-d*.12:Math.PI+.08+d*.12,0),l.add(g)}return r}n(-1),n(1)}function DE(i,e,t){function n(s){let r=new Ce;r.name=s>0?"legR":"legL",r.position.set(s*.055,-.06,.04),i.add(r),r.add(Tt(ii(.02,.014,.16,6),e.flesh,"flesh-thigh",[0,-.09,.01],[.35,0,0]));let o=new Ce;o.name=s>0?"footR":"footL",o.position.set(0,-.18,.05),r.add(o),o.add(Tt(ii(.012,.009,.12,5),e.flesh,"flesh-shin",[0,-.04,.02],[.5,0,0]));let l=t?[[.055,.09,.22],[-.055,.09,-.22],[0,.11,0],[0,-.07,Math.PI]]:[[.04,.09,.2],[-.04,.09,-.2],[0,.1,0]];for(let[c,a,h]of l){o.add(Tt(ii(.007,.003,.085,5),e.bone,"talon",[c,-.02,a],[1.2,h,0]));let u=new hi(.007,.045,5);u.translate(0,.022,0),u.rotateX(Math.PI/2),o.add(Tt(u,e.bone,"claw",[c*1.15,-.04,a+(a>=0?.055:-.055)],[.95,h,0]))}}n(-1),n(1)}function rx(i,e="hi"){let t=e==="hi",n=new Ce;n.name="buzzard";let s=new Ce;s.name="body",n.add(s);let r=new cn(.16,t?12:8,8,0,Math.PI*2,0,Math.PI*.55);s.add(Tt(r,i.flesh,"flesh-back",[0,.06,-.02],[.9,0,0],[1.05,.7,1.35]));let o=t?7:3;for(let v=0;v<o;v++){let M=.06-v*.07,_=.16+v*.01,b=.12,T=Bs(_,.012,b);T.translate(0,0,-b*.3),s.add(Tt(T,i.feather,"feather-mantle",[0,.1-v*.01,M],[.25,0,0]))}s.add(Tt(Bs(.12,.1,.16),i.viscera,"viscera-cavity",[0,-.04,.06])),IE(s,i,t);let l=new Ce;l.name="guts",l.position.set(0,-.1,.1),s.add(l),l.add(Tt(Ko(.045,1),i.viscera,"viscera-1",[.015,-.03,.02])),l.add(Tt(Ko(.032,1),i.viscera,"viscera-2",[-.025,-.08,0])),t&&(l.add(Tt(ii(.009,.004,.14,5),i.viscera,"viscera-strand",[.02,-.12,.03],[.25,0,.1])),l.add(Tt(ii(.007,.003,.16,5),i.viscera,"viscera-strand2",[-.015,-.15,0],[.35,0,-.1])),l.add(Tt(ii(.005,.003,.1,4),i.viscera,"viscera-drip",[0,-.18,.04])));let c=new Ce;c.name="neck",c.position.set(0,.06,.2),s.add(c),c.add(Tt(ii(.042,.055,.08,8),i.flesh,"flesh-neck1",[0,.02,.03],[.95,0,0])),c.add(Tt(ii(.034,.042,.07,8),i.flesh,"flesh-neck2",[0,.05,.085],[.7,0,0])),c.add(Tt(ii(.03,.034,.06,8),i.flesh,"flesh-neck3",[0,.08,.13],[.45,0,0]));let a=new Ce;a.name="ruff",a.position.set(0,0,0),c.add(a),PE(a,i,t);let h=new Ce;h.name="head",h.position.set(0,.1,.17),c.add(h),h.add(Tt(Ko(.078,t?2:1),i.flesh,"flesh-head",[0,.012,.02],[0,0,0],[.9,.8,1.15]));for(let v of[-1,1])h.add(Tt(Ko(.022,1),i.flesh,"flesh-socket",[v*.04,.028,.075],[0,0,0],[.9,.7,.5]));t&&(h.add(Tt(Bs(.03,.055,.022),i.flesh,"flesh-wattle",[.032,-.04,.045],[.35,0,.2])),h.add(Tt(Bs(.03,.055,.022),i.flesh,"flesh-wattle2",[-.032,-.04,.045],[.35,0,-.2])),h.add(Tt(Bs(.02,.03,.01),i.viscera,"viscera-tear",[.045,.01,.08],[.4,0,0])));let u=new hi(.038,.19,t?10:7);u.translate(0,.095,0),u.rotateX(Math.PI/2),h.add(Tt(u,i.beak,"beak-upper",[0,-.01,.1],[.65,0,0]));let d=new hi(.016,.08,6);d.translate(0,.04,0),d.rotateX(Math.PI/2),h.add(Tt(d,i.beak,"beak-hook",[0,-.06,.255],[1.35,0,0]));let f=new Ce;f.name="jaw",f.position.set(0,-.03,.08),f.rotation.x=.7,h.add(f);let p=new hi(.026,.13,7);p.translate(0,.065,0),p.rotateX(Math.PI/2),f.add(Tt(p,i.beak,"beak-lower",[0,-.01,.02],[.15,0,0])),f.add(Tt(Bs(.02,.01,.06),i.viscera,"viscera-tongue",[0,.005,.05])),t&&f.add(Tt(ii(.004,.002,.07,4),i.viscera,"viscera-drool",[.01,-.04,.1],[.8,0,0]));let x=new Ce;x.name="eyes",h.add(x);for(let v of[-1,1])x.add(Tt(Ko(.018,1),i.eye,"eye",[v*.04,.03,.092])),x.add(Tt(Ko(.008,0),i.eyeCore,"eye-core",[v*.04,.03,.106]));let g=new Ce;g.name="tail",g.position.set(0,.04,-.36),s.add(g);let m=t?9:5;for(let v=0;v<m;v++){let M=(v-(m-1)/2)*.13,_=.32+(v===((m-1)/2|0)?.08:0),b=Bs(.05,.01,_);b.translate(0,0,-_*.5);let T=Tt(b,i.feather,"feather-tail");T.rotation.y=M,T.rotation.x=.08,g.add(T)}return LE(s,i,t),DE(s,i,t),n.updateMatrixWorld(!0),n}function NE(i,e){let t=(i+" "+e).toLowerCase();return t.includes("tipl")||t.includes("prim")&&t.includes("wingl")?lr.wingLTip:t.includes("tipr")||t.includes("prim")&&t.includes("wingr")?lr.wingRTip:t.includes("wingl")||t.includes("elbowl")?lr.wingL:t.includes("wingr")||t.includes("elbowr")?lr.wingR:t.includes("tail")?lr.tail:t.includes("leg")||t.includes("foot")||t.includes("talon")||t.includes("claw")||t.includes("thigh")||t.includes("shin")?lr.legs:lr.body}function UE(i){let e=i.toLowerCase();return e.startsWith("eye")?"eye":e.startsWith("beak")?"beak":e.startsWith("ruff")?"ruff":e.startsWith("bone")||e.startsWith("talon")||e.startsWith("claw")?"bone":e.startsWith("feather")||e.startsWith("membrane")?"feather":e.startsWith("viscera")?"viscera":"flesh"}var jo=["flesh","bone","feather","viscera","eye","ruff","beak"];function Iu(i,e="hi"){let t=rx(i,e);t.updateMatrixWorld(!0);let n=Object.fromEntries(jo.map(l=>[l,[]])),s=(l,c)=>{let a=c+" "+(l.name||"");if(l.isMesh&&l.geometry){let h=l.geometry.clone();h.index&&(h=h.toNonIndexed()),h.applyMatrix4(l.matrixWorld);let u=h.attributes.position.count,d=new Float32Array(u);d.fill(NE(l.name||"",c)),h.setAttribute("aPart",new ct(d,1)),n[UE(l.name||"")].push(h)}for(let h of l.children)s(h,a)};s(t,"");let r={},o=0;for(let l of jo){if(!n[l].length){r[l]=null;continue}let c=gu(n[l],!1);c.computeVertexNormals(),r[l]=c,o+=(c.index?c.index.count:c.attributes.position.count)/3}return t.traverse(l=>{l.isMesh&&l.geometry.dispose?.()}),{...r,tris:Math.round(o),lod:e}}function $o(i){let e=new Map,t=new Map,n=i.clone();return ox(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),l=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=l.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function ox(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)ox(i.children[n],e.children[n],t)}var hr=class extends zi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xp(t)}),this.register(function(t){return new vp(t)}),this.register(function(t){return new Ap(t)}),this.register(function(t){return new Rp(t)}),this.register(function(t){return new Cp(t)}),this.register(function(t){return new _p(t)}),this.register(function(t){return new Mp(t)}),this.register(function(t){return new bp(t)}),this.register(function(t){return new Sp(t)}),this.register(function(t){return new gp(t)}),this.register(function(t){return new Ep(t)}),this.register(function(t){return new yp(t)}),this.register(function(t){return new wp(t)}),this.register(function(t){return new Tp(t)}),this.register(function(t){return new pp(t)}),this.register(function(t){return new Lu(t,wt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Lu(t,wt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Pp(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let a=Ns.extractUrlBase(e);o=Ns.resolveURL(a,this.path)}else o=Ns.extractUrlBase(e);this.manager.itemStart(e);let l=function(a){s?s(a):console.error(a),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ur(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(a){try{r.parse(a,o,function(h){t(h),r.manager.itemEnd(e)},l)}catch(h){l(h)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},l={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===ux){try{o[wt.KHR_BINARY_GLTF]=new Ip(e)}catch(u){s&&s(u);return}r=JSON.parse(o[wt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let a=new Fp(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});a.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](a);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case wt.KHR_MATERIALS_UNLIT:o[u]=new mp;break;case wt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Lp(r,this.dracoLoader);break;case wt.KHR_TEXTURE_TRANSFORM:o[u]=new Dp;break;case wt.KHR_MESH_QUANTIZATION:o[u]=new Np;break;default:d.indexOf(u)>=0&&l[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}a.setExtensions(o),a.setPlugins(l),a.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function OE(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function pn(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var wt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},pp=class{constructor(e){this.parser=e,this.name=wt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],a,h=new pe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Nn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":a=new Ds(h),a.target.position.set(0,0,-1),a.add(a.target);break;case"point":a=new is(h),a.distance=u;break;case"spot":a=new Fr(h),a.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,a.angle=c.spot.outerConeAngle,a.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,a.target.position.set(0,0,-1),a.add(a.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return a.position.set(0,0,0),us(a,c),c.intensity!==void 0&&(a.intensity=c.intensity),a.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(a),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],l=(r.extensions&&r.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(c){return n._getNodeRef(t.cache,l,c)})}},mp=class{constructor(){this.name=wt.KHR_MATERIALS_UNLIT}getMaterialType(){return nt}extendParams(e,t,n){let s=[];e.color=new pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Nn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,lt))}return Promise.all(s)}},gp=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},xp=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return pn(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new de(r,r)}return Promise.all(s)}},vp=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return pn(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},yp=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return pn(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},_p=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_SHEEN}getMaterialType(e){return pn(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Nn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,lt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Mp=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return pn(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},bp=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_VOLUME}getMaterialType(e){return pn(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new pe().setRGB(r[0],r[1],r[2],Nn),Promise.all(s)}},Sp=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_IOR}getMaterialType(e){return pn(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Ep=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return pn(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new pe().setRGB(r[0],r[1],r[2],Nn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,lt)),Promise.all(s)}},Tp=class{constructor(e){this.parser=e,this.name=wt.EXT_MATERIALS_BUMP}getMaterialType(e){return pn(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},wp=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return pn(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Ap=class{constructor(e){this.parser=e,this.name=wt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Rp=class{constructor(e){this.parser=e,this.name=wt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],l=s.images[o.source],c=n.textureLoader;if(l.uri){let a=n.options.manager.getHandler(l.uri);a!==null&&(c=a)}return n.loadTextureImage(e,o.source,c)}},Cp=class{constructor(e){this.parser=e,this.name=wt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],l=s.images[o.source],c=n.textureLoader;if(l.uri){let a=n.options.manager.getHandler(l.uri);a!==null&&(c=a)}return n.loadTextureImage(e,o.source,c)}},Lu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(l){let c=s.byteOffset||0,a=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(l,c,a);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Pp=class{constructor(e){this.name=wt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let a of s.primitives)if(a.mode!==Pi.TRIANGLES&&a.mode!==Pi.TRIANGLE_STRIP&&a.mode!==Pi.TRIANGLE_FAN&&a.mode!==void 0)return null;let o=n.extensions[this.name].attributes,l=[],c={};for(let a in o)l.push(this.parser.getDependency("accessor",o[a]).then(h=>(c[a]=h,c[a])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(a=>{let h=a.pop(),u=h.isGroup?h.children:[h],d=a[0].count,f=[];for(let p of u){let x=new je,g=new O,m=new vn,v=new O(1,1,1),M=new In(p.geometry,p.material,d);for(let b=0;b<d;b++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,b),c.SCALE&&v.fromBufferAttribute(c.SCALE,b),M.setMatrixAt(b,x.compose(g,m,v));let _=null;for(let b in c)if(b==="_COLOR_0"){let T=c[b];M.instanceColor=new En(T.array,T.itemSize,T.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(_===null){let L=M.geometry;_=new xt,_.name=L.name;for(let y in L.attributes)_.setAttribute(y,L.attributes[y]);for(let y in L.morphAttributes)_.morphAttributes[y]=L.morphAttributes[y];L.index!==null&&_.setIndex(L.index),_.morphTargetsRelative=L.morphTargetsRelative;for(let y of L.groups)_.addGroup(y.start,y.count,y.materialIndex);L.boundingBox!==null&&(_.boundingBox=L.boundingBox.clone()),L.boundingSphere!==null&&(_.boundingSphere=L.boundingSphere.clone()),_.drawRange.start=L.drawRange.start,_.drawRange.count=L.drawRange.count,_.userData=Object.assign({},L.userData),M.geometry=_}let T=c[b];_.setAttribute(b,new En(T.array,T.itemSize,T.normalized))}gt.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},ux="glTF",Nl=12,ax={JSON:1313821514,BIN:5130562},Ip=class{constructor(e){this.name=wt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Nl),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ux)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Nl,r=new DataView(e,Nl),o=0;for(;o<s;){let l=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===ax.JSON){let a=new Uint8Array(e,Nl+o,l);this.content=n.decode(a)}else if(c===ax.BIN){let a=Nl+o;this.body=e.slice(a,a+l)}o+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Lp=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=wt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,l={},c={},a={};for(let h in o){let u=Op[h]||h.toLowerCase();l[u]=o[h]}for(let h in e.attributes){let u=Op[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Jo[d.componentType];a[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let x=f.attributes[p],g=c[p];g!==void 0&&(x.normalized=g)}u(f)},l,a,Nn,d)})})}},Dp=class{constructor(){this.name=wt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Np=class{constructor(){this.name=wt.KHR_MESH_QUANTIZATION}},Du=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=l*2,a=l*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,p=e*a,x=p-a,g=-2*f+3*d,m=f-d,v=1-g,M=m-d+u;for(let _=0;_!==l;_++){let b=o[x+_+l],T=o[x+_+c]*h,L=o[p+_+l],y=o[p+_]*h;r[_]=v*b+M*T+g*L+m*y}return r}},BE=new vn,Up=class extends Du{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return BE.fromArray(r).normalize().toArray(r),r}},Pi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Jo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lx={9728:nn,9729:Yt,9984:_h,9985:ko,9986:Xr,9987:di},cx={33071:Wn,33648:Eo,10497:rn},up={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Op={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},cr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},FE={CUBICSPLINE:void 0,LINEAR:Er,STEP:Sr},dp={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new $e({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:rs})),i.DefaultMaterial}function jr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function us(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function zE(i,e,t){let n=!1,s=!1,r=!1;for(let a=0,h=e.length;a<h;a++){let u=e[a];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],l=[],c=[];for(let a=0,h=e.length;a<h;a++){let u=e[a];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;l.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(a){let h=a[0],u=a[1],d=a[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function HE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function GE(i){let e,t=i.extensions&&i.extensions[wt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fp(t.attributes):e=i.indices+":"+fp(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+fp(i.targets[n]);return e}function fp(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Bp(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function VE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var WE=new je,Fp=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new OE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;let c=l.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=l.indexOf("Firefox")>-1,o=r?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new vi(this.options.manager):this.textureLoader=new Qa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ur(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let l={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return jr(r,l,s),us(l,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(l)})).then(function(){for(let c of l.scenes)c.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let l=0,c=o.length;l<c;l++)e[o[l]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,l)=>{let c=this.associations.get(o);c!=null&&this.associations.set(l,c);for(let[a,h]of o.children.entries())r(h,l.children[a])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[wt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Ns.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=up[s.type],l=Jo[s.componentType],c=s.normalized===!0,a=new l(s.count*o);return Promise.resolve(new ct(a,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let l=o[0],c=up[s.type],a=Jo[s.componentType],h=a.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,g;if(f&&f!==u){let m=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,M=t.cache.get(v);M||(x=new a(l,m*f,s.count*f/h),M=new Ar(x,f/h),t.cache.add(v,M)),g=new Qs(M,c,d%f/h,p)}else l===null?x=new a(s.count*c):x=new a(l,d,s.count*c),g=new ct(x,c,p);if(s.sparse!==void 0){let m=up.SCALAR,v=Jo[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,b=new v(o[1],M,s.sparse.count*m),T=new a(o[2],_,s.sparse.count*c);l!==null&&(g=new ct(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let L=0,y=b.length;L<y;L++){let E=b[L];if(g.setX(E,T[L*c]),c>=2&&g.setY(E,T[L*c+1]),c>=3&&g.setZ(E,T[L*c+2]),c>=4&&g.setW(E,T[L*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],l=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(l=c)}return this.loadTextureImage(e,r,l)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],l=r.images[t],c=(l.uri||l.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let a=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||l.name||"",h.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(h.name=l.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=lx[d.magFilter]||Yt,h.minFilter=lx[d.minFilter]||di,h.wrapS=cx[d.wrapS]||rn,h.wrapT=cx[d.wrapT]||rn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==nn&&h.minFilter!==Yt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=a,a}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],l=self.URL||self.webkitURL,c=o.uri||"",a=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){a=!0;let d=new Blob([u],{type:o.mimeType});return c=l.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(x){let g=new bn(x);g.needsUpdate=!0,d(g)}),t.load(Ns.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return a===!0&&l.revokeObjectURL(c),us(u,o),u.userData.mimeType=o.mimeType||VE(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[wt.KHR_TEXTURE_TRANSFORM]){let l=n.extensions!==void 0?n.extensions[wt.KHR_TEXTURE_TRANSFORM]:void 0;if(l){let c=r.associations.get(o);o=r.extensions[wt.KHR_TEXTURE_TRANSFORM].extendTexture(o,l),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let l="PointsMaterial:"+n.uuid,c=this.cache.get(l);c||(c=new Lo,Xn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(l,c)),n=c}else if(e.isLine){let l="LineBasicMaterial:"+n.uuid,c=this.cache.get(l);c||(c=new Io,Xn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(l,c)),n=c}if(s||r||o){let l="ClonedMaterial:"+n.uuid+":";s&&(l+="derivative-tangents:"),r&&(l+="vertex-colors:"),o&&(l+="flat-shading:");let c=this.cache.get(l);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(l,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return $e}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,l={},c=r.extensions||{},a=[];if(c[wt.KHR_MATERIALS_UNLIT]){let u=s[wt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),a.push(u.extendParams(l,r,t))}else{let u=r.pbrMetallicRoughness||{};if(l.color=new pe(1,1,1),l.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;l.color.setRGB(d[0],d[1],d[2],Nn),l.opacity=d[3]}u.baseColorTexture!==void 0&&a.push(t.assignTexture(l,"map",u.baseColorTexture,lt)),l.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,l.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(a.push(t.assignTexture(l,"metalnessMap",u.metallicRoughnessTexture)),a.push(t.assignTexture(l,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),a.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,l)})))}r.doubleSided===!0&&(l.side=It);let h=r.alphaMode||dp.OPAQUE;if(h===dp.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,h===dp.MASK&&(l.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==nt&&(a.push(t.assignTexture(l,"normalMap",r.normalTexture)),l.normalScale=new de(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;l.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==nt&&(a.push(t.assignTexture(l,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==nt){let u=r.emissiveFactor;l.emissive=new pe().setRGB(u[0],u[1],u[2],Nn)}return r.emissiveTexture!==void 0&&o!==nt&&a.push(t.assignTexture(l,"emissiveMap",r.emissiveTexture,lt)),Promise.all(a).then(function(){let u=new o(l);return r.name&&(u.name=r.name),us(u,r),t.associations.set(u,{materials:e}),r.extensions&&jr(s,u,r),u})}createUniqueName(e){let t=Gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(l){return n[wt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(c){return hx(c,l,t)})}let o=[];for(let l=0,c=e.length;l<c;l++){let a=e[l],h=GE(a),u=s[h];if(u)o.push(u.promise);else{let d;a.extensions&&a.extensions[wt.KHR_DRACO_MESH_COMPRESSION]?d=r(a):d=hx(new xt,a,t),a.mode===Pi.TRIANGLE_STRIP?d=d.then(f=>Wf(f,gl)):a.mode===Pi.TRIANGLE_FAN&&(d=d.then(f=>Wf(f,Ho))),s[h]={primitive:a,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,l=[];for(let c=0,a=o.length;c<a;c++){let h=o[c].material===void 0?kE(this.cache):this.getDependency("material",o[c].material);l.push(h)}return l.push(t.loadGeometries(o)),Promise.all(l).then(async function(c){let a=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let x=h[f],g=o[f],m,v=a[f];if(g.mode===Pi.TRIANGLES||g.mode===Pi.TRIANGLE_STRIP||g.mode===Pi.TRIANGLE_FAN||g.mode===void 0){let M=r.isSkinnedMesh===!0,_=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");M&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=M&&_?new Cr(x,v):new me(x,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===Pi.LINES)m=new La(x,v);else if(g.mode===Pi.LINE_STRIP)m=new Ir(x,v);else if(g.mode===Pi.LINE_LOOP)m=new Da(x,v);else if(g.mode===Pi.POINTS)m=new As(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&HE(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),us(m,r),g.extensions&&jr(s,m,g),t.assignFinalMaterial(m),u.push(m)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&jr(s,u[0],r),u[0];let d=new Ce;r.extensions&&jr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new xn(Mf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ss(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),us(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,l=[],c=[];for(let a=0,h=o.length;a<h;a++){let u=o[a];if(u){l.push(u);let d=new je;r!==null&&d.fromArray(r.array,a*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[a])}return new Pr(l,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],l=[],c=[],a=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],p=s.samplers[f.sampler],x=f.target,g=x.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,v=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),l.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",v)),a.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(a),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],x=u[3],g=u[4],m=[];for(let M=0,_=d.length;M<_;M++){let b=d[M],T=f[M],L=p[M],y=x[M],E=g[M];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let S=n._createAnimationTracks(b,T,L,y,E);if(S)for(let I=0;I<S.length;I++)m.push(S[I])}let v=new Nr(r,void 0,m);return us(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(l){if(l.isMesh)for(let c=0,a=s.weights.length;c<a;c++)l.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],l=s.children||[];for(let a=0,h=l.length;a<h;a++)o.push(n.getDependency("node",l[a]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(a){let h=a[0],u=a[1],d=a[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,WE)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,p=u[0];h.pivot=new O().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",l=[],c=s._invokeOne(function(a){return a.createNodeMesh&&a.createNodeMesh(e)});return c&&l.push(c),r.camera!==void 0&&l.push(s.getDependency("camera",r.camera).then(function(a){return s._getNodeRef(s.cameraCache,r.camera,a)})),s._invokeAll(function(a){return a.createNodeAttachment&&a.createNodeAttachment(e)}).forEach(function(a){l.push(a)}),this.nodeCache[e]=Promise.all(l).then(function(a){let h;if(r.isBone===!0?h=new er:a.length>1?h=new Ce:a.length===1?h=a[0]:h=new gt,h!==a[0])for(let u=0,d=a.length;u<d;u++)h.add(a[u]);if(r.name&&(h.userData.name=r.name,h.name=o),us(h,r),r.extensions&&jr(n,h,r),r.matrix!==void 0){let u=new je;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ce;n.name&&(r.name=s.createUniqueName(n.name)),us(r,n),n.extensions&&jr(t,r,n);let o=n.nodes||[],l=[];for(let c=0,a=o.length;c<a;c++)l.push(s.getDependency("node",o[c]));return Promise.all(l).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add($o(d)):r.add(d)}let a=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Xn||d instanceof bn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=a(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],l=e.name?e.name:e.uuid,c=[];function a(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}cr[r.path]===cr.weights?(a(e),e.isGroup&&e.children.forEach(a)):c.push(l);let h;switch(cr[r.path]){case cr.weights:h=Ps;break;case cr.rotation:h=Is;break;case cr.translation:case cr.scale:h=nr;break;default:n.itemSize===1?h=Ps:h=nr;break}let u=s.interpolation!==void 0?FE[s.interpolation]:Er,d=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let x=new h(c[f]+"."+cr[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Bp(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Is?Up:Du;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function XE(i,e,t){let n=e.attributes,s=new Sn;if(n.POSITION!==void 0){let l=t.json.accessors[n.POSITION],c=l.min,a=l.max;if(c!==void 0&&a!==void 0){if(s.set(new O(c[0],c[1],c[2]),new O(a[0],a[1],a[2])),l.normalized){let h=Bp(Jo[l.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let l=new O,c=new O;for(let a=0,h=r.length;a<h;a++){let u=r[a];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let x=Bp(Jo[d.componentType]);c.multiplyScalar(x)}l.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(l)}i.boundingBox=s;let o=new ci;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function hx(i,e,t){let n=e.attributes,s=[];function r(o,l){return t.getDependency("accessor",o).then(function(c){i.setAttribute(l,c)})}for(let o in n){let l=Op[o]||o.toLowerCase();l in i.attributes||s.push(r(n[o],l))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(l){i.setIndex(l)});s.push(o)}return ft.workingColorSpace!==Nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),us(i,e),XE(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?zE(i,e.targets,t):i})}var dx="assets/hd/birds/",kp=new hr;kp.register(i=>(i.textureLoader=new vi(i.options.manager),{name:"csp_img"}));function fx(i){return i.scene.updateMatrixWorld(!0),i.scene.traverse(e=>{if(!e.isMesh)return;e.frustumCulled=!1,e.castShadow=!0,e.receiveShadow=!0;let t=Array.isArray(e.material)?e.material:[e.material];for(let n of t)n&&(n.map&&(n.map.colorSpace=lt),n.emissiveMap&&(n.emissiveMap.colorSpace=lt),n.normalMap&&(n.normalMap.colorSpace=On),(n.alphaTest>0||n.map&&n.map.format===Un)&&(n.alphaTest===0&&(n.alphaTest=.4),n.transparent=!1,n.side=It,n.depthWrite=!0),n.side=It)}),i}var Nu=null;function px(){return Nu||(Nu=Promise.all([kp.loadAsync(dx+"carrion-buzzard-hi.glb").catch(i=>(console.warn("[birds] hi glb",i),null)),kp.loadAsync(dx+"carrion-buzzard-lo.glb").catch(i=>(console.warn("[birds] lo glb",i),null))]).then(([i,e])=>{if(i&&fx(i),e&&fx(e),!i&&!e)throw new Error("carrion buzzard GLB missing");return{hi:i,lo:e||i}}),Nu)}var qE={flesh:"flesh",bone:"bone",feather:"feather",viscera:"viscera",eye:"eye",ruff:"ruff",beak:"beak"};function YE(i,e){i.onBeforeCompile=t=>{t.uniforms.uTime=e.uTime,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
        attribute float aPart; attribute float aPhase; attribute float aFlap;
        attribute float aTuck; attribute float aFlare; attribute float aDead;
        uniform float uTime;
        vec3 rz(vec3 p, float a){ float c=cos(a), s=sin(a); return vec3(p.x*c - p.y*s, p.x*s + p.y*c, p.z); }
        vec3 ry(vec3 p, float a){ float c=cos(a), s=sin(a); return vec3(p.x*c + p.z*s, p.y, -p.x*s + p.z*c); }
        vec3 rx(vec3 p, float a){ float c=cos(a), s=sin(a); return vec3(p.x, p.y*c - p.z*s, p.y*s + p.z*c); }
      `).replace("#include <begin_vertex>",`#include <begin_vertex>
        {
          float flap = sin(uTime * 8.0 + aPhase) * aFlap * (1.0 - aTuck) * (1.0 - aDead * 0.7);
          float open = 0.16 + aFlare * 0.45 - aTuck * 0.12;
          float back = aTuck * 0.85 - aFlare * 0.08;
          vec3 pivot = vec3(0.0, 0.08, 0.04);
          if (aPart > 0.5 && aPart < 2.5) {
            pivot.x = -0.10;
            float w = aPart < 1.5 ? 0.75 : 1.2;
            vec3 rel = transformed - pivot;
            rel = ry(rel, 0.06 + back * 0.7);
            rel = rz(rel, -open - flap * w);
            rel = rx(rel, aTuck * 0.35);
            transformed = rel + pivot;
          } else if (aPart > 2.5 && aPart < 4.5) {
            pivot.x = 0.10;
            float w = aPart < 3.5 ? 0.75 : 1.2;
            vec3 rel = transformed - pivot;
            rel = ry(rel, -0.06 - back * 0.7);
            rel = rz(rel, open + flap * w);
            rel = rx(rel, aTuck * 0.35);
            transformed = rel + pivot;
          } else if (aPart > 4.5 && aPart < 5.5) {
            vec3 rel = transformed - vec3(0.0, 0.04, -0.36);
            rel = rx(rel, flap * 0.08 - aTuck * 0.25 + aFlare * 0.2);
            transformed = rel + vec3(0.0, 0.04, -0.36);
          } else if (aPart > 5.5) {
            vec3 rel = transformed - vec3(0.0, -0.06, 0.04);
            rel = rx(rel, -(aTuck * 0.7 + aFlare * 1.1));
            transformed = rel + vec3(0.0, -0.06, 0.04);
          }
        }
      `)},i.customProgramCacheKey=()=>"buzzard-flight-v4"}function mx(i){let e=new Float32Array(i),t=new Float32Array(i),n=new Float32Array(i),s=new Float32Array(i),r=new Float32Array(i);return{phase:e,flap:t,tuck:n,flare:s,dead:r,aPhase:new En(e,1).setUsage(wi),aFlap:new En(t,1).setUsage(wi),aTuck:new En(n,1).setUsage(wi),aFlare:new En(s,1).setUsage(wi),aDead:new En(r,1).setUsage(wi)}}function ZE(i,e,t,n){let s=hp(e),r={uTime:{value:0}},o=e>0,l={lo:Iu(s,"lo"),hi:o?Iu(s,"hi"):null},c={};for(let g of jo){let m=s[qE[g]];if(!m)continue;let v=m.clone();YE(v,r),c[g]=v}let a={lo:[],hi:[]};function h(g,m){if(m)for(let v of jo){if(!m[v]||!c[v])continue;let M=new In(m[v],c[v],t);M.frustumCulled=!1,M.instanceMatrix.setUsage(wi),M.castShadow=e>1,M.count=0,n.add(M),a[g].push({im:M,key:v})}}h("lo",l.lo),o&&h("hi",l.hi);let u={lo:mx(t),hi:mx(t)};for(let g of["lo","hi"])for(let m of a[g]){let v=u[g];m.im.geometry.setAttribute("aPhase",v.aPhase),m.im.geometry.setAttribute("aFlap",v.aFlap),m.im.geometry.setAttribute("aTuck",v.aTuck),m.im.geometry.setAttribute("aFlare",v.aFlare),m.im.geometry.setAttribute("aDead",v.aDead)}let d=new gt,f=[],p=[],x=Array.from({length:t},()=>new je);return{kind:"procedural",mats:s,lods:l,uniforms:r,max:t,get trisLo(){return l.lo.tris},get trisHi(){return l.hi?l.hi.tris:0},beginFrame(g){r.uTime.value=g,f.length=0,p.length=0},setBird(g,m,v,M,_,b,T,L,y,E,S){d.position.set(m,v,M),d.rotation.set(_,b,T,"YXZ"),d.scale.setScalar(L),d.updateMatrix(),x[g].copy(d.matrix);let I=o&&S&&E<11?"hi":"lo",F=I==="hi"?f:p,D=F.length;F.push(g);let P=u[I];P.phase[D]=y.phase,P.flap[D]=y.flap,P.tuck[D]=y.tuck,P.flare[D]=y.flare,P.dead[D]=y.dead||0;for(let N of a[I])N.im.setMatrixAt(D,x[g])},commit(){for(let g of["lo","hi"]){let m=(g==="hi"?f:p).length,v=u[g];v.aPhase.needsUpdate=!0,v.aFlap.needsUpdate=!0,v.aTuck.needsUpdate=!0,v.aFlare.needsUpdate=!0,v.aDead.needsUpdate=!0;for(let M of a[g])M.im.count=m,M.im.instanceMatrix.needsUpdate=!0}},setTier(g){let m=g>1;for(let v of["lo","hi"])for(let M of a[v])M.im.castShadow=m},dispose(){for(let g of["lo","hi"])for(let m of a[g])n.remove(m.im)}}}function Qo(i,e){for(let t of e)if(i[t])return i[t];return null}function gx(i,e,t){let n=$o(i);n.visible=!1,n.traverse(l=>{l.isMesh&&(l.frustumCulled=!1,l.castShadow=t,l.receiveShadow=!0)});let s=new kr(n),r={};for(let l of e){let c=s.clipAction(l);c.enabled=!0,c.setEffectiveWeight(0),c.play(),r[l.name]=c}let o=Qo(r,["glide"]);return o&&o.setEffectiveWeight(1),{root:n,mixer:s,acts:r,used:!1}}function Uu(i,e){i.traverse(t=>{if(!t.isMesh)return;if(!e){t.visible=!0;return}let n=t.name;(n.startsWith("LOD0")||n.startsWith("LOD1")||n.startsWith("LOD2"))&&(t.visible=n.startsWith(e))})}function KE(i,e){let t=e.dead||0,n=e.flare||0,s=e.tuck||0,r=e.flap||0,o=Qo(i,["death"]),l=Qo(i,["strike"]),c=Qo(i,["dive_tuck","dive-tuck","diveTuck"]),a=Qo(i,["flap"]),h=Qo(i,["glide"]);o&&o.setEffectiveWeight(t),l&&l.setEffectiveWeight(n*(1-t)),c&&c.setEffectiveWeight(s*(1-n)*(1-t)),a&&a.setEffectiveWeight(r*(1-s)*(1-n)*(1-t)),h&&h.setEffectiveWeight(Math.max(0,(1-r)*(1-s)*(1-n)*(1-t)))}function jE(i,e,t,n){let s=t>1,r=(e.lo||e.hi).scene,o=(e.lo||e.hi).animations||[],l=e.hi?e.hi.scene:null,c=e.hi?e.hi.animations:o,a=t>1?6:t>0?4:0,h=[];for(let m=0;m<n;m++){let v=gx(r,o,s);i.add(v.root),Uu(v.root,"LOD2"),h.push(v)}let u=[];for(let m=0;m<a;m++){let v=gx(l||r,c,s);i.add(v.root),Uu(v.root,"LOD1"),u.push(v)}let d=[],f=0,p=0,x=0;function g(m,v){let M=0;return m.traverse(_=>{if(!_.isMesh||!_.geometry||v&&!String(_.name||"").startsWith(v))return;let b=_.geometry;M+=(b.index?b.index.count:b.attributes.position.count)/3}),Math.round(M)}return p=g((e.lo||e.hi).scene,"LOD2")||g((e.lo||e.hi).scene,""),e.hi&&(x=g(e.hi.scene,"LOD0")||g(e.hi.scene,"")),{kind:"skinned",max:n,get trisLo(){return Math.round(p)},get trisHi(){return Math.round(x)},beginFrame(m){let v=f?Math.min(.05,Math.max(0,m-f)):.016;f=m,this._dt=v,d.length=0;for(let M of h)M.used=!1,M.root.visible=!1;for(let M of u)M.used=!1,M.root.visible=!1},setBird(m,v,M,_,b,T,L,y,E,S,I){d.push({i:m,x:v,y:M,z:_,pitch:b,yaw:T,bank:L,scale:y,anim:E,dist:S,preferHi:I})},commit(){d.sort((M,_)=>M.dist-_.dist);let m=this._dt||.016,v=0;for(let M of d){let _=a&&M.preferHi&&M.dist<(t>1?11:8)&&v<u.length,b=_?u[v++]:h[M.i];b&&(b.used=!0,b.root.visible=!0,b.root.position.set(M.x,M.y,M.z),b.root.rotation.set(M.pitch,M.yaw,M.bank,"YXZ"),b.root.scale.setScalar(M.scale),_?Uu(b.root,"LOD0"):Uu(b.root,"LOD2"),KE(b.acts,M.anim),b.mixer.update(m))}},setTier(m){let v=m>1;for(let M of h.concat(u))M.root.traverse(_=>{_.isMesh&&(_.castShadow=v)})},dispose(){for(let m of h.concat(u))i.remove(m.root)}}}function zp(i,e=2,t=24){let n=new Ce;n.name="birdField",i.add(n);let s=ZE(i,e,t,n),r={group:n,get mats(){return s.mats},get lods(){return s.lods},get max(){return s.max},get trisLo(){return s.trisLo},get trisHi(){return s.trisHi},get kind(){return s.kind},beginFrame(...o){return s.beginFrame(...o)},setBird(...o){return s.setBird(...o)},commit(...o){return s.commit(...o)},setTier(o){return s.setTier?.(o)},dispose(){s.dispose?.(),i.remove(n)}};return px().then(o=>{for(s.dispose?.();n.children.length;)n.remove(n.children[0]);s=jE(n,o,e,t),console.info("[birds] glb field",s.kind,"lo",s.trisLo,"hi",s.trisHi)}).catch(o=>{console.warn("[birds] staying procedural:",o&&o.message?o.message:o)}),r}var Hp=34,xx=15,vx=35,Bu=4;function Ou(i,e,t,n){let s=i.x-t.x,r=i.y-t.y,o=i.z-t.z,l=s*e.x+r*e.y+o*e.z,c=s*s+r*r+o*o-n*n,a=l*l-c;if(a<0)return null;let h=-l-Math.sqrt(a);return h>0?h:null}function yx(i,e=1,t=!1){if(i<Bu)return 0;let n=t?12+Math.min(8,i/3|0):4+Math.min(4,i-Bu);return Math.max(t?8:4,Math.round(n*e))}function _x(i){return i>=6&&i%3===0}var Fu=class{constructor(e,t,n){this.scene=e,this.world=t,this.tier=n,this.max=n>1?24:n>0?20:16,this.list=[],this.alive=0,this.field=zp(e,n,this.max),this.center={x:0,z:1.5},this._dummy=0;for(let s=0;s<this.max;s++)this.list.push(this._fresh(s))}_fresh(e){return{i:e,kind:"bird",state:"dead",visible:!1,x:0,y:8,z:0,yaw:0,pitch:0,bank:0,vx:0,vy:0,vz:0,radius:6,height:7,angle:0,turn:.55,hp:Hp,maxHp:Hp,dmg:xx,value:vx,scale:1,phase:e*.67,flap:.08,tuck:0,flare:0,dead:0,t:0,cool:0,flapT:0,glideT:2,scream:!1,wx:0,wy:0,wz:0,pos:new O,win:null}}setTier(e){this.tier=e,this.max=e>1?24:e>0?20:16,this.field.setTier(e)}reset(){for(let e of this.list)e.state="dead",e.visible=!1;this.alive=0,this.field.beginFrame(0),this.field.commit()}spawn(e=4){if(this.alive>=this.max)return null;let t=this.list.find(s=>s.state==="dead");if(!t)return null;let n=X(0,Wt);return t.state="soar",t.visible=!0,t.radius=5.4+X(0,2.4),t.height=6.2+X(-1,3.2),t.angle=n,t.turn=.45+X(0,.28),t.x=Math.sin(n)*t.radius+this.center.x,t.z=Math.cos(n)*t.radius+this.center.z,t.y=t.height,t.yaw=n+Math.PI*.5,t.pitch=-.08,t.bank=.22,t.hp=t.maxHp=Hp,t.dmg=xx,t.value=vx,t.scale=1.15+X(0,.2),t.t=X(0,2),t.cool=X(1.2,6),t.flapT=0,t.glideT=X(1.2,3.2),t.flap=.08,t.tuck=0,t.flare=0,t.dead=0,t.scream=!1,t.vx=t.vy=t.vz=0,t.wx=t.wy=t.wz=0,t._thud=!1,t.pos.set(t.x,t.y,t.z),this.alive++,t}rayHit(e,t,n){let s=null;for(let r of this.list){if(r.state==="dead"||r.state==="dying")continue;let o=Ou(e,t,{x:r.x,y:r.y,z:r.z},.32*r.scale),l=Math.sin(r.yaw)*Math.cos(r.pitch),c=-Math.sin(r.pitch),a=Math.cos(r.yaw)*Math.cos(r.pitch),h=r.x+l*.38*r.scale,u=r.y+c*.38*r.scale+.06,d=r.z+a*.38*r.scale,f=Ou(e,t,{x:h,y:u,z:d},.15*r.scale),p=null;if(r.tuck<.55){let m=Math.cos(r.yaw),v=-Math.sin(r.yaw),M=.7*r.scale*(1-r.tuck*.6);p=Ou(e,t,{x:r.x+m*M,y:r.y,z:r.z+v*M},.38*r.scale)??Ou(e,t,{x:r.x-m*M,y:r.y,z:r.z-v*M},.38*r.scale)}let x=null,g=!1;f!=null&&(o==null||f<=o+.12)?(x=f,g=!0):o!=null&&(x=o),p!=null&&(x==null||p<x)&&(x=p),x!=null&&x<n&&(!s||x<s.t)&&(s={z:r,t:x,head:g})}return s}damage(e,t,n){if(e.state==="dead"||e.state==="dying")return null;e.hp-=t;let s=e.hp<=0;return s&&(e.state="dying",e.t=0,e.dead=.15,e.tuck=.2,e.flap=.05,e.flare=0,e.vx=X(-1.5,1.5),e.vy=X(.5,2.2),e.vz=X(-1.5,1.5),e.wx=X(-4,4),e.wy=X(-5,5),e.wz=X(-3,3),this.alive--),{killed:s,head:!!n}}killAll(){let e=[];for(let t of this.list)t.state!=="dead"&&t.state!=="dying"&&(this.damage(t,999,!1),e.push(t));return e}update(e,t,n,s){e>.08&&(e=.08),this.center.x+=Math.sin(t*.07)*.15*e,this.center.z+=Math.cos(t*.05)*.12*e,this.center.x=Et(this.center.x,-4,4),this.center.z=Et(this.center.z,-2,6);let r=this.list.filter(o=>o.state==="soar"||o.state==="telegraph");for(let o of this.list){if(o.state==="dead")continue;if(o.t+=e,o.state==="dying"){o.vy-=11*e,o.x+=o.vx*e,o.y+=o.vy*e,o.z+=o.vz*e,o.yaw+=o.wy*e,o.pitch+=o.wx*e,o.bank+=o.wz*e,o.vx*=.99,o.vz*=.99,o.dead=Math.min(1,o.t*.7),o.flap=.04,o.tuck=Xe(o.tuck,.15,e*2),o.y<.25&&(o.y=.25,o.vy*=-.25,o.vx*=.5,o.vz*=.5,o.wx*=.5,o.wy*=.5,o.t>.2&&s?.thud?.(o)),o.t>2.6&&(o.state="dead",o.visible=!1),o.pos.set(o.x,o.y,o.z);continue}let l=!!n&&n.hunt!==!1&&o.dmg>0;if(o.state==="soar"||o.state==="telegraph"){for(let f of r){if(f===o)continue;let p=o.x-f.x,x=o.z-f.z,g=p*p+x*x;g<1.7*1.7&&g>1e-4&&(o.angle+=.35*e*Math.sign(o.turn),o.radius+=.8*e)}o.angle+=o.turn*e,o.radius=Xe(o.radius,5.6+o.i%7*.35,e*.3);let c=Math.sin(o.angle)*o.radius+this.center.x,a=Math.cos(o.angle)*o.radius+this.center.z,h=o.height+Math.sin(t*.9+o.phase)*.28;o.x=Xe(o.x,c,Math.min(1,e*2.4)),o.z=Xe(o.z,a,Math.min(1,e*2.4)),o.y=Xe(o.y,h,Math.min(1,e*1.6));let d=o.angle+Math.PI*.5-o.yaw;for(;d>Math.PI;)d-=Wt;for(;d<-Math.PI;)d+=Wt;o.yaw+=d*Math.min(1,e*3),o.bank=Xe(o.bank,Et(o.turn*.55+d*.8,-.7,.7),e*3),o.pitch=Xe(o.pitch,-.1,e*2),o.flapT>0?(o.flapT-=e,o.flap=Xe(o.flap,.55,e*6)):(o.glideT-=e,o.flap=Xe(o.flap,.07,e*4),o.glideT<=0&&(o.flapT=X(.55,1.15),o.glideT=X(1.8,4.2))),o.tuck=Xe(o.tuck,0,e*3),o.flare=Xe(o.flare,0,e*4),o.state==="soar"&&l&&(o.cool-=e,o.cool<=0&&(o.state="telegraph",o.t=0,o.scream=!1)),o.state==="telegraph"&&(o.tuck=Xe(o.tuck,.35,e*4),o.flap=Xe(o.flap,.15,e*4),o.scream||(o.scream=!0,s?.shriek?.(o)),o.t>.45&&(o.state="dive",o.t=0))}else if(o.state==="dive"){let c=n.x,a=1.32,h=n.z,u=c-o.x,d=a-o.y,f=h-o.z,p=Math.hypot(u,d,f)||1,x=11+Math.min(10,o.t*7);if(o.vx=u/p*x,o.vy=d/p*x,o.vz=f/p*x,o.x+=o.vx*e,o.y+=o.vy*e,o.z+=o.vz*e,o.yaw=Math.atan2(o.vx,o.vz),o.pitch=-Math.atan2(o.vy,Math.hypot(o.vx,o.vz)),o.bank=Xe(o.bank,0,e*4),p/Math.max(1,x)<.28||p<2.3?(o.flare=Xe(o.flare,1,e*8),o.tuck=Xe(o.tuck,.05,e*8),o.pitch=Xe(o.pitch,.15,e*6),o.flap=Xe(o.flap,.2,e*4)):(o.tuck=Xe(o.tuck,.9,e*5),o.flare=Xe(o.flare,0,e*5),o.flap=.04),p<1.6&&l){s?.hitPlayer?.(o),s?.strike?.(o),o.state="climb",o.t=0,o.cool=X(3.5,6);let m=2.2/p;o.x=c-u/p*2.2,o.y=Math.max(o.y,a+1.4),o.z=h-f/p*2.2}else(p<1.4||o.t>2.3||o.y<.9)&&(o.state="climb",o.t=0,o.cool=X(2.8,5))}else o.state==="climb"&&(o.y+=5.8*e,o.x+=Math.sin(o.angle)*1.8*e,o.z+=Math.cos(o.angle)*1.8*e,o.yaw=Xe(o.yaw,o.angle+Math.PI*.5,e*2),o.pitch=Xe(o.pitch,.5,e*3),o.bank=Xe(o.bank,-.1,e*2),o.flap=Xe(o.flap,.7,e*5),o.tuck=Xe(o.tuck,0,e*3),o.flare=Xe(o.flare,0,e*4),(o.y>=o.height-.2||o.t>2.2)&&(o.state="soar",o.t=0,o.angle=Math.atan2(o.x-this.center.x,o.z-this.center.z)));o.pos.set(o.x,o.y,o.z)}this._draw(t,n)}_draw(e,t){this.field.beginFrame(e);let n=t?.x??0,s=t?.y??1.6,r=t?.z??8,o=0;for(let l of this.list){if(l.state==="dead"||!l.visible)continue;let c=Math.hypot(l.x-n,l.y-s,l.z-r);this.field.setBird(l.i,l.x,l.y,l.z,l.pitch,l.yaw,l.bank,l.scale,{flap:l.flap,tuck:l.tuck,flare:l.flare,dead:l.dead,phase:l.phase},c,!0),o++}this.field.commit()}};var Gu={},Vp;function $E(){let i=xu(qo.zombies),e=i.view;Vp=i.meta;for(let t of Vp){let n=new xt;n.setAttribute("position",vu(e,t)),n.setAttribute("normal",yu(e,t)),n.setAttribute("skinIndex",new ct(e(Uint8Array,t.si),4)),n.setAttribute("skinWeight",new ct(e(Uint8Array,t.sw),4,!0));let s=e(Uint16Array,t.idx);JE(s,n.attributes.position.array,t),n.setIndex(new ct(s,1)),t.groups.forEach(r=>n.addGroup(r.start,r.count,r.slot>=0?r.slot:3)),n.computeBoundingSphere(),Gu[t.tag]={g:n,m:t}}}function JE(i,e,t){let n=t.groups.filter(s=>s.slot<0);for(let s of n){let r=-9;for(let c=s.start;c<s.start+s.count;c++)r=Math.max(r,e[i[c]*3+1]);if(r<1.75||s.count<200)continue;s.hair=!0;let o=new Set;for(let c=s.start;c<s.start+s.count;c++)o.add(i[c]);let l=0;for(let c of o)l=Math.max(l,Math.abs(e[c*3]));if(l>.12){let c=.12/l;for(let a of o)e[a*3]*=c,e[a*3+2]=(e[a*3+2]+.01)*c-.01,e[a*3+1]=1.66+(e[a*3+1]-1.66)*(e[a*3+1]>1.66?.72:c)}for(let c=s.start;c<s.start+s.count;c+=3){let a=0,h=0;for(let u=0;u<3;u++)a+=e[i[c+u]*3+1]/3,h+=e[i[c+u]*3+2]/3;(h>.035&&a<1.715||h>.075&&a<1.74||a<1.6)&&(i[c+1]=i[c+2]=i[c])}}}var bx=4,QE=["near","mid","far"],Mx=new Map,eT=(i,e)=>{let t=Mx.get(i);if(!t){let n=new pe("#"+i).multiplyScalar(e?.85:.6);e&&n.offsetHSL(0,0,.04),t=new $e({color:n,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),Mx.set(i,t)}return t},tT="float zh(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);} float zn(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(zh(i),zh(i+vec3(1,0,0)),f.x),mix(zh(i+vec3(0,1,0)),zh(i+vec3(1,1,0)),f.x),f.y),mix(mix(zh(i+vec3(0,0,1)),zh(i+vec3(1,0,1)),f.x),mix(zh(i+vec3(0,1,1)),zh(i+vec3(1,1,1)),f.x),f.y),f.z);}";function Gp(i,e){let t=new $e({roughness:i===0?.7:.95,polygonOffset:i!==0,polygonOffsetFactor:-1.5,polygonOffsetUnits:-4});return t.userData.seed={value:e},t.onBeforeCompile=n=>{n.uniforms.zSeed=t.userData.seed,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vZ = position;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vZ; uniform float zSeed;
`+tT).replace("#include <color_fragment>",`#include <color_fragment>
      vec3 q = vZ*vec3(18.)+zSeed; float n = zn(q)*0.6+zn(q*2.3)*0.4;
      ${i===0?"diffuseColor.rgb *= mix(vec3(0.55,0.62,0.5), vec3(1.0), smoothstep(0.25,0.75,n)); float b = smoothstep(0.78,0.86,zn(q*0.7+3.)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.25,0.03,0.04), b*0.8);":"float m2 = zn(vZ*7.+zSeed)*0.65+zn(vZ*15.+zSeed)*0.35; float t = smoothstep(0.70,0.78,m2)*0.8; float e = smoothstep(0.62,0.70,m2)*0.5-t*0.5; diffuseColor.rgb *= 0.85+0.2*zn(q*2.); diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb*0.35, e); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.075,0.095,0.06)*mix(1.,0.6,zn(q*3.)), t); float bl = smoothstep(0.8,0.9,zn(q*0.5+7.)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.22,0.03,0.03), bl*0.7);"}`)},t.customProgramCacheKey=()=>"zmat"+i,t}var Sx=1.1,ku=new O,zu=new pe,yn=new gt,nT=new pe(1,.92,.75),Hu=new Array(bx);function iT(){let i=document.createElement("canvas");i.width=i.height=32;let e=i.getContext("2d"),t=e.createRadialGradient(16,16,1,16,16,16);t.addColorStop(0,"#fff"),t.addColorStop(.28,"rgba(255,255,255,.7)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32);let n=new Vt(i);return n.colorSpace=lt,n}function sT(i){let e=i.geometry.attributes.position,t=i.geometry.attributes.skinIndex,n=i.geometry.attributes.skinWeight,s=i.skeleton.bones.findIndex(d=>d.name==="head"),r=i.skeleton.boneInverses[s],o=i.bindMatrix,l=new O,c=null,a=null,h=-1e9,u=-1e9;for(let d=0;d<e.count;d++){let f=0;for(let x=0;x<4;x++)t.getComponent(d,x)===s&&(f=Math.max(f,n.getComponent(d,x)));if(f<.45||(l.fromBufferAttribute(e,d).applyMatrix4(o).applyMatrix4(r),l.z<.015))continue;let p=l.z-Math.abs(Math.abs(l.x)-.032)*2.4-Math.abs(l.y-.012)*2.2;l.x<-.01&&p>h?(h=p,c=l.clone()):l.x>.01&&p>u&&(u=p,a=l.clone())}return c=c||new O(-.034,.02,.08),a=a||new O(.034,.02,.08),c.y+=.022,a.y+=.022,c.z+=.01,a.z+=.01,{L:c,R:a}}function rT(i,e,t){yn.position.set(0,-20,0),yn.scale.set(0,0,0),yn.rotation.set(0,0,0),yn.updateMatrix(),i.setMatrixAt(t*2,yn.matrix),i.setMatrixAt(t*2+1,yn.matrix),e.setMatrixAt(t,yn.matrix)}function oT(i,e){let t=i.eyeMesh,n=i.blob,s=i.list,r=i.cam,o=r&&r.quaternion,l=!1;for(let c=0;c<s.length;c++){let a=s[c];if(!(a.root.visible&&a.state!=="dead"&&a.eyeL)){a._eyeOn&&(a._eyeOn=!1,l=!0,rT(t,n,c));continue}a._eyeOn=!0,l=!0,a.bones.head.updateWorldMatrix(!0,!1);let u=a.bones.head.matrixWorld,f=.05*(1+.12*Math.sin(e*(a.runner?9:3.1)+a.phase))*(a.flash>0?1.35:1)*(a.brute?1.22:1);zu.setRGB(a.brute?.85:a.runner?1:.95,a.brute?.08:a.runner?.42:.16,.04),a.flash>0&&zu.lerp(nT,Math.min(.65,a.flash*2.5)),o&&yn.quaternion.copy(o),ku.copy(a.eyeL).applyMatrix4(u),yn.position.copy(ku),yn.scale.setScalar(f),yn.updateMatrix(),t.setMatrixAt(c*2,yn.matrix),t.setColorAt(c*2,zu),ku.copy(a.eyeR).applyMatrix4(u),yn.position.copy(ku),yn.updateMatrix(),t.setMatrixAt(c*2+1,yn.matrix),t.setColorAt(c*2+1,zu);let p=a.state==="dying"?Math.min(.85,a.dieT*.45):0;yn.position.set(a.pos.x,.04,a.pos.z),yn.rotation.set(-Math.PI/2,0,0),yn.scale.setScalar(Math.max(.01,a.scale*(a.brute?1.15:.92)*(1-p))),yn.updateMatrix(),n.setMatrixAt(c,yn.matrix)}l&&(t.instanceMatrix.needsUpdate=!0,t.instanceColor.needsUpdate=!0,n.instanceMatrix.needsUpdate=!0)}function Ex(i){$E(),i.list.forEach((c,a)=>{let h=a%bx,u=Gu[h+":near"].m.bones,d=u.map(x=>{let g=new er;return g.name=x.n,g.position.fromArray(x.t),g});u.forEach((x,g)=>{x.p>=0&&d[x.p].add(d[g])});let f=new Ce;f.add(d[0]),f.scale.setScalar(Gu[h+":near"].m.scale*Sx),f.updateMatrixWorld(!0);let p=new Pr(d);c.sk=Gp(0,a*7.3),c.sh=Gp(1,a*3.1),c.pa=Gp(1,a*5.7+2),c.lods=QE.map(x=>{let g=Gu[h+":"+x],m=[c.sk,c.sh,c.pa],v=g.m.groups.map(b=>b.slot>=0?[c.sk,c.sh,c.pa][b.slot]:eT(b.col,b.hair)),M=g.g.clone();M.clearGroups(),g.m.groups.forEach((b,T)=>M.addGroup(b.start,b.count,T));let _=new Cr(M,v);return _.frustumCulled=!1,_.castShadow=!0,_.bind(p),_.visible=!1,f.add(_),_}),c.bones=Object.fromEntries(d.map(x=>[x.name,x])),c.hipY=c.bones.hips.position.y,c.root.add(f),c.pelvis.traverse(x=>{x.isMesh&&(x.visible=!1)}),c.variant=h,Hu[h]||(Hu[h]=sT(c.lods[0])),c.eyeL=Hu[h].L,c.eyeR=Hu[h].R});let e=i.list.length,t=new In(new on(1,1),new nt({map:iT(),color:16777215,transparent:!0,depthWrite:!1,blending:os,toneMapped:!0,fog:!0,side:It}),e*2);t.frustumCulled=!1,t.userData.noAO=!0,t.renderOrder=6,t.instanceColor=new En(new Float32Array(e*6),3);let n=new nt({color:0,transparent:!0,opacity:.28,depthWrite:!1}),s=new In(new ki(.7,14),n,e);s.frustumCulled=!1,s.userData.noAO=!0,s.renderOrder=1,s.receiveShadow=!1,i.scene.add(t,s),i.eyeMesh=t,i.blob=s;let r=i.setTier.bind(i);i.setTier=c=>{i.tier=c,n.opacity=c===0?.5:.26,r(c)};let o=i.update.bind(i),l=[];return i.update=(c,a,h,...u)=>{o(c,a,h,...u),l.length=0;for(let d of i.list)d.root.visible&&(d.d=Math.hypot(d.pos.x-h.x,d.pos.z-h.z),l.push(d));l.sort((d,f)=>d.d-f.d),l.forEach((d,f)=>{let p=f<2&&d.d<7?0:f<5&&d.d<16?1:2;d.lods.forEach((x,g)=>x.visible=g===p),aT(d)}),oT(i,a)},i.lodCounts=()=>{let c=[0,0,0];for(let a of i.list)a.root.visible&&a.lods.forEach((h,u)=>{h.visible&&c[u]++});return c},Object.fromEntries(Vp.map(c=>[c.tag,c.tris]))}function aT(i){let e=i.bones;e.hips.position.y=i.hipY+(i.pelvis.position.y-.95)/Sx,e.hips.rotation.set(i.pelvis.rotation.x,0,i.pelvis.rotation.z),e.chest.rotation.set(i.upper.rotation.x+.18+(i.brute?.1:0),i.upper.rotation.y,i.upper.rotation.z),e.spine.rotation.x=.1+(i.brute?.05:0),e.head.rotation.set(i.head.rotation.x+.15,.1+(i.head.rotation.y||0),i.head.rotation.z+.22),e.thighL.rotation.set(i.legL.rotation.x,0,.03),e.thighR.rotation.set(i.legR.rotation.x,0,-.03),e.shinL.rotation.x=Math.max(0,-i.legL.rotation.x)*1.25+.1,e.shinR.rotation.x=Math.max(0,-i.legR.rotation.x)*1.25+.1,e.upperArmL.rotation.set(i.armL.rotation.x,0,i.armL.rotation.z),e.upperArmR.rotation.set(i.armR.rotation.x,0,i.armR.rotation.z);let t=n=>-.4-Math.max(0,-n-.32)*.42;if(e.foreArmL.rotation.x=t(i.armL.rotation.x),e.foreArmR.rotation.x=t(i.armR.rotation.x),e.handL.rotation.x=.22,e.handR.rotation.x=.28,i.state==="dying"){let n=Math.min(1,i.dieT/.55);e.foreArmL.rotation.x=-.35-n,e.foreArmR.rotation.x=-.3-n}}var lT=i=>new pe(i);function _i(i,e,t,n,s,r=0,o=0,l=0,c=1,a=1,h=1){i=i.index?i.toNonIndexed():i.clone();let u=new je().compose(new O(t,n,s),new vn().setFromEuler(new gi(r,o,l)),new O(c,a,h));i.applyMatrix4(u);let d=i.attributes.position.count,f=new Float32Array(d*3),p=lT(e);for(let x=0;x<d;x++){let g=.85+.3*Math.random();f[x*3]=p.r*g,f[x*3+1]=p.g*g,f[x*3+2]=p.b*g}i.setAttribute("color",new ct(f,3));for(let x of Object.keys(i.attributes))["position","normal","color"].includes(x)||i.deleteAttribute(x);return i}function Wp(i){let e=new xt;for(let t of["position","normal","color"]){let n=i.map(o=>o.attributes[t].array),s=new Float32Array(n.reduce((o,l)=>o+l.length,0)),r=0;for(let o of n)s.set(o,r),r+=o.length;e.setAttribute(t,new ct(s,3))}return e.computeBoundingSphere(),e}var Tx=7234898,wx=11049580,Ax=3015944,Rx=1966596,Cx=4852236,cT=[1840914,3811866,5921362,2761760,7031338],Fs=(i,e,t)=>new ot(i,e,t),hT=(i,e)=>new hi(i,e,4),Px=i=>new Dr(i,0);function uT(i,e){let t=[],n=i.c,s=i.r,r=n.z+s.z*.86,o=n.y-s.y*.42;for(let a=0;a<6;a++)t.push(_i(Fs(s.x*.12,s.y*.11,.008),wx,(a-2.5)*s.x*.14,o+s.y*.04,r-Math.abs(a-2.5)*.004,0,0,X(-.2,.2)));t.push(_i(Fs(s.x*.9,s.y*.07,s.z*.25),Ax,0,o+s.y*.1,r-s.z*.12)),t.push(_i(Px(s.x*.38),Cx,n.x+X(-.3,.3)*s.x,n.y+s.y*.9,n.z+s.z*.15,0,0,0,1.2,.3,1)),t.push(_i(Fs(s.x*.35,.005,.005),Rx,n.x+s.x*.62,n.y-s.y*.1,n.z+s.z*.8,0,.6,1.1));let l=6+(Math.random()*5|0),c=Ln(cT);if(e)for(let a=0;a<l;a++){let h=X(0,Math.PI*2),u=X(.35,1.2),d=Math.cos(h)*Math.cos(u),f=Math.sin(u),p=Math.sin(h)*Math.cos(u)-.25;t.push(_i(hT(s.x*.12,s.y*X(.35,.6)),c,n.x+d*s.x*.95,n.y+f*s.y*.95,n.z+p*s.z*.9,p*.9,0,-d*.9))}return Wp(t)}function dT(i,e){let t=i.r,n=t.x*.9,s=t.z*.6,r=[_i(Fs(n,t.y*.16,s),e,0,-t.y*.08,s/2),_i(Fs(n*.82,t.y*.06,s*.8),Ax,0,t.y*.01,s/2)];for(let o=0;o<5;o++)r.push(_i(Fs(n*.13,t.y*.11,.008),wx,(o-2)*n*.17,t.y*.05,s-.006-Math.abs(o-2)*.004));return Wp(r)}function fT(i,e){let t=[_i(Px(.06),Rx,.035,i.y,i.z-.012,0,0,0,1.1,1.15,.25)];for(let n=0;n<4;n++){let s=i.y+.04-n*.026;t.push(_i(new Bt(.0055,.0055,.085-n*.008,5),Tx,.04,s,i.z+.002,0,0,Math.PI/2+.22))}if(t.push(_i(Fs(.012,.1,.01),Tx,-.006,i.y,i.z+.002)),t.push(_i(Fs(.04,.02,.01),Cx,.06,i.y-.07,i.z,0,0,.6)),e)for(let n=0;n<4;n++)t.push(_i(Fs(X(.03,.05),X(.1,.18),.006),e,X(-.1,.1),i.y-.2-X(0,.04),i.z-.01,X(-.1,.1),0,X(-.25,.25)));return Wp(t)}function pT(i,e){let t=i.geometry.attributes.position,n=i.geometry.attributes.skinIndex,s=i.geometry.attributes.skinWeight,r=i.skeleton.bones.findIndex(h=>h.name===e),o=i.skeleton.boneInverses[r],l=new O,c=new O(9,9,9),a=new O(-9,-9,-9);for(let h=0;h<t.count;h++){let u=0;for(let d=0;d<4;d++)n.getComponent(h,d)===r&&(u=Math.max(u,s.getComponent(h,d)));u<.6||(l.fromBufferAttribute(t,h).applyMatrix4(i.bindMatrix).applyMatrix4(o),c.min(l),a.max(l))}return{mn:c,mx:a,c:c.clone().add(a).multiplyScalar(.5),r:a.clone().sub(c).multiplyScalar(.5)}}function mT(i,e){let t=i.geometry.attributes.position,n=i.geometry.attributes.skinIndex,s=i.geometry.attributes.skinWeight,r=i.skeleton.bones.findIndex(u=>u.name===e),o=i.skeleton.boneInverses[r],l=new O,c=-1,a=0,h=0;for(let u=0;u<t.count;u++){let d=0;for(let f=0;f<4;f++)n.getComponent(u,f)===r&&(d=Math.max(d,s.getComponent(u,f)));d<.5||(l.fromBufferAttribute(t,u).applyMatrix4(i.bindMatrix).applyMatrix4(o),Math.abs(l.x)<.06&&(c=Math.max(c,l.z),a+=l.y,h++))}return{y:h?a/h:.05,z:c>0?c:.12}}var gT=[6191698,6980704,9081976,10133668,8022666,10525290,7232074,9207664],xT=[8007471,3099258,5921322,3816004,9071146,2068344,11687466,14209216,4860490,2771498,10127968],vT=[2764602,3813156,2106922,2898474,4604218,2766160];function Ix(i){let e=new $e({vertexColors:!0,roughness:.85}),t={},n={};i.list.forEach(o=>{let l=o.lods[0];t[o.variant]=t[o.variant]||mT(l,"chest");let c=n[o.variant]=n[o.variant]||pT(l,"head");o.gHead=new me(uT(c,Math.random()<.8),e),o.gJaw=new me(dT(c,5660746),e),o.gJaw.position.set(c.c.x,c.c.y-c.r.y*.5,c.c.z+c.r.z*.25),o.gChest=new me(fT(t[o.variant],null),e),o.gChest.position.z=.004;for(let a of[o.gHead,o.gJaw,o.gChest])a.frustumCulled=!1,a.visible=!1,a.castShadow=!1;o.bones.head.add(o.gHead,o.gJaw),o.bones.chest.add(o.gChest),o.lodRoot=l.parent});let s=i.spawn.bind(i);i.spawn=(...o)=>{let l=s(...o);if(!l)return l;l.style=Math.random()*3|0,l.jawOpen=X(.18,.45),l.ribs=Math.random()<.45,l.skull=Math.random()<.9,l.brute||l.sk.color.setHex(Ln(gT)),l.sh.color.setHex(Ln(xT)),l.pa.color.setHex(Ln(vT));let c=l.brute?1.1:X(.9,1.14),a=l.brute?1:X(.92,1.08);return l.lodRoot&&(l.lodRoot.scale.set(c,a,Math.min(1.12,c)),l.lodRoot.position.y=0),l.twitch=X(8,14),l};let r=i.update.bind(i);i.update=(o,l,c,...a)=>{r(o,l,c,...a);for(let h of i.list){let u=h.root.visible&&h.state!=="dead"&&(h.lods[0].visible||h.lods[1].visible);if(h.gHead.visible=h.gJaw.visible=u&&h.skull!==!1,h.gChest.visible=u&&!!h.ribs,!h.root.visible||h.state==="dead")continue;let d=h.bones,f=h.style|0,p=h.phase||0;h.gJaw.rotation.x=(h.jawOpen||.4)+Math.max(0,Math.sin(l*6+p))*.25+(h.attackT>0?.3:0),h.state!=="dying"&&(f===1?(d.upperArmL.rotation.set(.15+Math.sin(p)*.1,0,.12),d.foreArmL.rotation.x=-.1,d.head.rotation.z+=.35,d.shinR.rotation.x+=.35,d.chest.rotation.z+=.12):f===2?(d.head.rotation.y+=Math.sin(l*h.twitch)*.12*(Math.sin(l*1.7+p)>.4?1:0),d.chest.rotation.x+=.22,d.chest.rotation.z+=Math.sin(p*.5)*.22,d.spine.rotation.z=Math.sin(p*.5)*.12,d.head.rotation.x-=.25):d.spine.rotation.z=0)}}}var Ul="assets/hd/z/",Dx=new hr,yT=new vi;Dx.register(i=>(i.textureLoader=new vi(i.options.manager),{name:"csp_img"}));var Vu=(i,e)=>yT.loadAsync(i).then(t=>(t.flipY=!1,t.colorSpace=e?lt:On,t.anisotropy=4,t));var _T={walk:"Zombie_Walk_Fwd_Loop",run:"Jog_Fwd_Loop",idle:"Zombie_Idle_Loop",attack:"Zombie_Scratch",climb:"ClimbUp_1m",death:"Death01",hit:"Hit_Chest",hitHead:"Hit_Head",knock:"Hit_Knockback"};function Lx(i,e,t){let n=i.scene;n.updateMatrixWorld(!0);let s=["LOD0","LOD1","LOD2"].map(T=>n.getObjectByName(T)).map(T=>T&&(T.isSkinnedMesh?T:T.children.find(L=>L.isSkinnedMesh))).filter(Boolean),r=s[0],o=new Sn;r.geometry.computeBoundingBox(),o.copy(r.geometry.boundingBox).applyMatrix4(r.bindMatrix);let l=o.max.y-o.min.y,c=r.skeleton,a=c.bones.findIndex(T=>/^head$/i.test(T.name)),h=r.geometry.attributes.position,u=r.geometry.attributes.skinIndex,d=r.geometry.attributes.skinWeight,f=new O,p=null,x=-1e9,g=0,m=0;for(let T=0;T<h.count;T++){let L=0;for(let y=0;y<4;y++)u.getComponent(T,y)===a&&(L=Math.max(L,d.getComponent(T,y)));L<.5||(f.fromBufferAttribute(h,T).applyMatrix4(r.bindMatrix),g+=f.z,m++)}g/=Math.max(1,m);let v=Math.sign(g)||1;for(let T=0;T<h.count;T++){let L=0;for(let S=0;S<4;S++)u.getComponent(T,S)===a&&(L=Math.max(L,d.getComponent(T,S)));if(L<.5)continue;f.fromBufferAttribute(h,T).applyMatrix4(r.bindMatrix);let y=(f.y-o.min.y)/l;if(y<.86||y>.93)continue;let E=v*(f.z-g)-Math.abs(f.x)*3;E>x&&(x=E,p=f.clone())}p||(p=new O(0,o.min.y+.9*l,g+v*.08));let M=l/1.8,_=c.boneInverses[a],b=T=>new O(T*M,p.y+.035*M,p.z-v*.028*M).applyMatrix4(_);return{scene:n,H:l,box:o,front:v,eyes:p?{L:b(-.033),R:b(.033)}:null,map:e,nrm:t,nLods:s.length}}async function Yp(i){let e=d=>Dx.loadAsync(Ul+d),[t,n,s,r,o,l,c,a]=await Promise.all([e(i?"zombie_m.glb":"zombie_m_lo.glb"),e(i?"zombie_f.glb":"zombie_f_lo.glb"),e("zanim_ual1.glb"),e("zanim_ual2.glb"),Vu(Ul+`zskin_m_${i?1024:512}.webp`,!0),Vu(Ul+`zskin_f_${i?1024:512}.webp`,!0),i?Vu(Ul+"znrm_m_1024.webp"):null,i?Vu(Ul+"znrm_f_1024.webp"):null]),h={};for(let d of[...s.animations,...r.animations])h[d.name.replace(/^.*\|/,"")]=d;let u={};for(let[d,f]of Object.entries(_T))if(u[d]=h[f],!u[d])throw new Error("missing clip "+f);return MT(u.climb),{hi:i,m:Lx(t,o,c),f:Lx(n,l,a),clips:u}}function MT(i){for(let e of i.tracks)if(/pelvis\.position$/.test(e.name)){let t=e.values,n=t[0],s=t[1],r=t[2];for(let o=0;o<t.length;o+=3)t[o]=n,t[o+1]=s,t[o+2]=r}}var bT="float zh(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);} float zn(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(zh(i),zh(i+vec3(1,0,0)),f.x),mix(zh(i+vec3(0,1,0)),zh(i+vec3(1,1,0)),f.x),f.y),mix(mix(zh(i+vec3(0,0,1)),zh(i+vec3(1,0,1)),f.x),mix(zh(i+vec3(0,1,1)),zh(i+vec3(1,1,1)),f.x),f.y),f.z);}";function ST(i,e){let t=new $e({map:i.map,normalMap:i.nrm||null,roughness:.62,metalness:0,emissive:0});return i.nrm&&t.normalScale.set(.8,.8),t.userData.u=e,t.onBeforeCompile=n=>{Object.assign(n.uniforms,e),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vB; uniform vec4 uBox;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec3 b = (bindMatrix * vec4(position, 1.)).xyz; vB = vec3((b.x - uBox.x) / uBox.w, (b.y - uBox.y) / uBox.w, (b.z - uBox.z) / uBox.w); }`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vB; uniform vec3 uShirt, uPants, uHair; uniform vec4 uCloth; uniform vec4 uMisc; float zCloth = 0., zBlood = 0.;
`+bT).replace("#include <map_fragment>",`#include <map_fragment>
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
roughnessFactor = mix(roughnessFactor, 0.95, zCloth); roughnessFactor = mix(roughnessFactor, 0.3, zBlood * 0.8);`)},t.customProgramCacheKey=()=>"zrig"+(i.nrm?"n":""),t}var ET=[5910576,3424346,5000244,3816e3,6969400,3365456,7227956,9078396,4602956,3026478,8025190],TT=[2501688,3813156,1909800,2898474,4866358,2306634],wT=[1709330,3811868,5917240,7236194,2761760],Xp=i=>i[Math.random()*i.length|0],Wu=new pe,Xu=new O,_n=new gt,AT=new pe(1,.92,.75);function RT(){let i=document.createElement("canvas");i.width=i.height=32;let e=i.getContext("2d"),t=e.createRadialGradient(16,16,1,16,16,16);t.addColorStop(0,"#fff"),t.addColorStop(.28,"rgba(255,255,255,.7)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32);let n=new Vt(i);return n.colorSpace=lt,n}function Nx(i){let e=i.zu;if(!e)return;let t=i.brute;e.uShirt.value.set(Xp(ET)).multiplyScalar(.7+Math.random()*.3),e.uPants.value.set(Xp(TT)),e.uHair.value.set(Xp(wT)),e.uCloth.value.set(t?0:Math.random()*.2,Math.random()<.2?.3:.05+Math.random()*.06,t||Math.random()<.12?1:0,Math.random()*50),e.uMisc.value.x=Math.random()<.25?0:1,e.uMisc.value.z=i.female?.75:Math.random()*.6,i.sk.color.setRGB(1,1,1).offsetHSL(0,0,-Math.random()*.15),t&&i.sk.color.setRGB(.95,.8,.75)}function CT(i,e,t){i.model&&(i.root.remove(i.model),i.mixer?.stopAllAction());let n=!i.brute&&e%3===2,s=n?t.f:t.m;i.female=n;let r=$o(s.scene),o=(n?1.72:1.8)/s.H;r.scale.setScalar(o),s.front<0&&(r.rotation.y=Math.PI);let l=i.zu||{uShirt:{value:new pe},uPants:{value:new pe},uHair:{value:new pe},uCloth:{value:new Pt},uMisc:{value:new Pt(1,1,.3,0)}};l.uBox={value:new Pt(s.box.min.x+(s.box.max.x-s.box.min.x)/2,s.box.min.y,s.box.min.z+(s.box.max.z-s.box.min.z)/2,s.H)},l.uMisc.value.y=s.front,i.zu=l;let c=ST(s,l),a=i.sk;i.sk=c,a&&a!==c&&c.color.copy(a.color);let h=[];r.traverse(d=>{d.isSkinnedMesh&&(d.material=c,d.frustumCulled=!1,d.castShadow=!0,d.receiveShadow=!0,h.push(d))}),h.sort((d,f)=>d.name.localeCompare(f.name)),i.lods=t.hi?h:[null,...h],i.model=r,i.root.add(r),i.pelvis.traverse(d=>{d.isMesh&&(d.visible=!1)}),i.bones={head:r.getObjectByName(h[0].skeleton.bones.find(d=>/^head$/i.test(d.name)).name)},i.eyeL=s.eyes?.L||new O,i.eyeR=s.eyes?.R||new O;let u=i.mixer=new kr(r);i.acts={};for(let[d,f]of Object.entries(t.clips)){let p=u.clipAction(f);i.acts[d]=p}for(let d of["death","hit","hitHead","knock"])i.acts[d].setLoop(su,1),i.acts[d].clampWhenFinished=d==="death";i.cur=null,i.lastHit=0,i.vel=0,i.px=i.pos.x,i.pz=i.pos.z,i.rate=.9+Math.random()*.2,i.macc=0,i.state!=="dead"&&Nx(i)}function $r(i,e,t=.25,n=1){let s=i.acts[e];if(s.timeScale=n*i.rate,i.cur===e)return;let r=i.cur&&i.acts[i.cur];s.reset(),s.enabled=!0,s.setEffectiveWeight(1),e!=="death"&&e!=="climb"&&(s.time=Math.random()*s.getClip().duration),s.play(),r&&r.crossFadeTo(s,t,!1),i.cur=e}var qp=null;function PT(i,e){i.state==="dying"&&i.cur!=="death"&&qp?.onBlood?.(i.pos.x,i.pos.z,1.1*i.scale);let t=i.pos.x-i.px,n=i.pos.z-i.pz;i.px=i.pos.x,i.pz=i.pos.z;let s=e>0?Math.min(8,Math.hypot(t,n)/e):0;if(i.vel+=(s-i.vel)*Math.min(1,e*6),i.state==="dying"?$r(i,"death",.12,1.25):i.state==="climb"?$r(i,"climb",.2,.62):i.state==="attack"?$r(i,"attack",.3,1):i.attackT>0?$r(i,"attack",.12,1.9):i.vel>(i.runner?1.6:2.6)?$r(i,"run",.3,Math.min(1.6,Math.max(.7,i.vel/3.6))):i.vel>.12?$r(i,"walk",.3,Math.min(2.4,Math.max(.55,i.vel/.95))):(i.cur!=="attack"||i.attackT<=0)&&$r(i,"idle",.4,1),(i.cur==="run"||i.cur==="walk")&&(i.acts[i.cur].timeScale=i.rate*(i.cur==="run"?Math.min(1.6,Math.max(.7,i.vel/3.6)):Math.min(2.4,Math.max(.55,i.vel/.95)))),i.hitT>.15&&i.lastHit<=0&&Math.random()<.45&&qp?.onBlood?.(i.pos.x+(Math.random()-.5)*.6,i.pos.z+(Math.random()-.5)*.6,.45+Math.random()*.4),i.hitT>.15&&i.lastHit<=0&&i.state!=="dying"){let r=i.acts[Math.random()<.5?"hit":"hitHead"];r.reset(),r.setEffectiveWeight(.65),r.fadeIn(.04),r.play(),i.hitAct=r,i.hitClock=.3}i.lastHit=i.hitT,i.hitAct&&(i.hitClock-=e,i.hitClock<=0&&(i.hitAct.fadeOut(.2),i.hitAct=null))}function Zp(i,e){if(qp=i,i.kit=e,i.list.forEach((d,f)=>CT(d,f,e)),i._zrig)return;i._zrig=!0;let t=i.list.length,n=new In(new on(1,1),new nt({map:RT(),color:16777215,transparent:!0,depthWrite:!1,toneMapped:!0,fog:!0,side:It}),t*2);n.frustumCulled=!1,n.userData.noAO=!0,n.renderOrder=6,n.instanceColor=new En(new Float32Array(t*6),3);let s=new nt({color:0,transparent:!0,opacity:.28,depthWrite:!1}),r=new In(new ki(.7,14),s,t);r.frustumCulled=!1,r.userData.noAO=!0,r.renderOrder=1,i.scene.add(n,r),i.eyeMesh=n,i.blob=r;let o=d=>{_n.position.set(0,-20,0),_n.scale.set(0,0,0),_n.updateMatrix(),n.setMatrixAt(d*2,_n.matrix),n.setMatrixAt(d*2+1,_n.matrix),r.setMatrixAt(d,_n.matrix)},l=i.setTier.bind(i);i.setTier=d=>{i.tier=d,s.opacity=d===0?.5:.26;for(let f of i.list)f.lods.forEach(p=>p&&(p.castShadow=d>0));l(d)};let c=i.spawn.bind(i);i.spawn=(...d)=>{let f=c(...d);return f&&(Nx(f),f.cur=null,f.mixer?.stopAllAction(),f.px=f.pos.x,f.pz=f.pos.z,f.vel=0),f};let a=i.update.bind(i),h=[],u=0;i.tick=(d,f,p)=>{u++,h.length=0;for(let v of i.list)v.root.visible&&v.state!=="dead"&&(v.d=Math.hypot(v.pos.x-p.x,v.pos.z-p.z),h.push(v));h.sort((v,M)=>v.d-M.d);let x=!!i.kit.hi;h.forEach((v,M)=>{let _=M<2&&v.d<7?0:M<6&&v.d<16?1:2;!x&&_===0&&(_=1),v.lods.forEach((T,L)=>T&&(T.visible=L===_)),PT(v,d),v.macc+=d;let b=_===2?v.d>40?3:2:1;(u%b===0||v.state==="dying")&&(v.mixer.update(v.macc),v.macc=0)});let g=i.cam&&i.cam.quaternion,m=!1;for(let v=0;v<i.list.length;v++){let M=i.list[v];if(!(M.root.visible&&M.state!=="dead")){M._eyeOn&&(M._eyeOn=!1,m=!0,o(v));continue}M._eyeOn=!0,m=!0,M.bones.head.updateWorldMatrix(!0,!1);let b=M.bones.head.matrixWorld,T=1+.12*Math.sin(f*(M.runner?9:3.1)+M.phase),L=.04*T*(M.flash>0?1.35:1)*(M.brute?1.2:1)*(M.state==="dying"?Math.max(0,1-M.dieT):1);Wu.setRGB(M.brute?.85:M.runner?1:.95,M.brute?.08:M.runner?.42:.16,.04),M.flash>0&&Wu.lerp(AT,Math.min(.65,M.flash*2.5)),g&&_n.quaternion.copy(g),Xu.copy(M.eyeL).applyMatrix4(b),_n.position.copy(Xu),_n.scale.setScalar(L),_n.updateMatrix(),n.setMatrixAt(v*2,_n.matrix),n.setColorAt(v*2,Wu),Xu.copy(M.eyeR).applyMatrix4(b),_n.position.copy(Xu),_n.updateMatrix(),n.setMatrixAt(v*2+1,_n.matrix),n.setColorAt(v*2+1,Wu);let y=M.state==="dying"?Math.min(.85,M.dieT*.45):0;_n.quaternion.identity(),_n.position.set(M.pos.x,.04,M.pos.z),_n.rotation.set(-Math.PI/2,0,0),_n.scale.setScalar(Math.max(.01,M.scale*(M.brute?1.15:.92)*(1-y))),_n.updateMatrix(),r.setMatrixAt(v,_n.matrix)}m&&(n.instanceMatrix.needsUpdate=!0,n.instanceColor.needsUpdate=!0,r.instanceMatrix.needsUpdate=!0)},i.update=(d,f,p,...x)=>{a(d,f,p,...x),i.tick(d,f,p),i._ticked=!0},i.lodCounts=()=>{let d=[0,0,0];for(let f of i.list)f.root.visible&&f.lods.forEach((p,x)=>{p&&p.visible&&d[x]++});return d}}var qu=class extends $a{constructor(e){super(e),this.type=jt}parse(e){let o=function(y,E){switch(y){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(E||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(E||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(E||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(E||""))}},u=function(y,E,S){E=E||1024;let F=y.pos,D=-1,P=0,N="",R=String.fromCharCode.apply(null,new Uint16Array(y.subarray(F,F+128)));for(;0>(D=R.indexOf(`
`))&&P<E&&F<y.byteLength;)N+=R,P+=R.length,F+=128,R=String.fromCharCode.apply(null,new Uint16Array(y.subarray(F,F+128)));return-1<D?(S!==!1&&(y.pos+=P+D+1),N+R.slice(0,D)):!1},d=function(y){let E=/^#\?(\S+)/,S=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,F=/^\s*FORMAT=(\S+)\s*$/,D=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},N,R;for((y.pos>=y.byteLength||!(N=u(y)))&&o(1,"no header found"),(R=N.match(E))||o(3,"bad initial token"),P.valid|=1,P.programtype=R[1],P.string+=N+`
`;N=u(y),N!==!1;){if(P.string+=N+`
`,N.charAt(0)==="#"){P.comments+=N+`
`;continue}if((R=N.match(S))&&(P.gamma=parseFloat(R[1])),(R=N.match(I))&&(P.exposure=parseFloat(R[1])),(R=N.match(F))&&(P.valid|=2,P.format=R[1]),(R=N.match(D))&&(P.valid|=4,P.height=parseInt(R[1],10),P.width=parseInt(R[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||o(3,"missing format specifier"),P.valid&4||o(3,"missing image size specifier"),P},f=function(y,E,S){let I=E;if(I<8||I>32767||y[0]!==2||y[1]!==2||y[2]&128)return new Uint8Array(y);I!==(y[2]<<8|y[3])&&o(3,"wrong scanline width");let F=new Uint8Array(4*E*S);F.length||o(4,"unable to allocate buffer space");let D=0,P=0,N=4*I,R=new Uint8Array(4),U=new Uint8Array(N),H=S;for(;H>0&&P<y.byteLength;){P+4>y.byteLength&&o(1),R[0]=y[P++],R[1]=y[P++],R[2]=y[P++],R[3]=y[P++],(R[0]!=2||R[1]!=2||(R[2]<<8|R[3])!=I)&&o(3,"bad rgbe scanline format");let B=0,G;for(;B<N&&P<y.byteLength;){G=y[P++];let se=G>128;if(se&&(G-=128),(G===0||B+G>N)&&o(3,"bad scanline data"),se){let ce=y[P++];for(let j=0;j<G;j++)U[B++]=ce}else U.set(y.subarray(P,P+G),B),B+=G,P+=G}let Z=I;for(let se=0;se<Z;se++){let ce=0;F[D]=U[se+ce],ce+=I,F[D+1]=U[se+ce],ce+=I,F[D+2]=U[se+ce],ce+=I,F[D+3]=U[se+ce],D+=4}H--}return F},p=function(y,E,S,I){let F=y[E+3],D=Math.pow(2,F-128)/255;S[I+0]=y[E+0]*D,S[I+1]=y[E+1]*D,S[I+2]=y[E+2]*D,S[I+3]=1},x=function(y,E,S,I){let F=y[E+3],D=Math.pow(2,F-128)/255;S[I+0]=Js.toHalfFloat(Math.min(y[E+0]*D,65504)),S[I+1]=Js.toHalfFloat(Math.min(y[E+1]*D,65504)),S[I+2]=Js.toHalfFloat(Math.min(y[E+2]*D,65504)),S[I+3]=Js.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;let m=d(g),v=m.width,M=m.height,_=f(g.subarray(g.pos),v,M),b,T,L;switch(this.type){case Kn:L=_.length/4;let y=new Float32Array(L*4);for(let S=0;S<L;S++)p(_,S*4,y,S*4);b=y,T=Kn;break;case jt:L=_.length/4;let E=new Uint16Array(L*4);for(let S=0;S<L;S++)x(_,S*4,E,S*4);b=E,T=jt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:v,height:M,data:b,header:m.string,gamma:m.gamma,exposure:m.exposure,type:T,colorSpace:Nn,minFilter:Yt,magFilter:Yt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var jp="assets/hd/",Ox=new hr,IT=new vi;Ox.register(i=>(i.textureLoader=new vi(i.options.manager),{name:"csp_img"}));var Kp=-.271,LT=1711915,DT={sand:4,concrete:3.2,corr:2.6,wood:1.6,rust:2},Ux={low:["env/sky_1k.webp","tex/sand_diff_512.webp","tex/concrete_diff_512.webp","tex/corr_diff_512.webp","tex/wood_diff_512.webp","props/drum.glb","props/tyre.glb","props/crate.glb","props/jerry.glb"],medium:["env/sky_2k.webp","env/env_256.hdr",...["sand","concrete","corr","wood"].flatMap(i=>[`tex/${i}_diff_1k.webp`,`tex/${i}_nor_1k.webp`]),"props/drum.glb","props/tyre.glb","props/crate.glb","props/jerry.glb"]};Ux.high=[...Ux.medium,...["sand","concrete","corr","wood"].map(i=>`tex/${i}_arm_1k.webp`)];var Yu=(i,e,t=!0)=>IT.loadAsync(jp+i).then(n=>(n.colorSpace=e?lt:On,t&&(n.wrapS=n.wrapT=rn),n.anisotropy=8,n));function NT(i,e,t=!1){i.onBeforeCompile=n=>{n.uniforms.uTile={value:1/e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
      #endif`))},i.customProgramCacheKey=()=>"wuv"+(t?"m":""),i.needsUpdate=!0}function UT(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");for(let n=0;n<26;n++){let s=Math.random()*6.28,r=Math.random()<.3?20+Math.random()*40:Math.random()*18,o=4+Math.random()*(n<6?22:9);e.fillStyle=`rgba(${70+Math.random()*40|0},${4+Math.random()*8|0},${4+Math.random()*6|0},${.55+Math.random()*.4})`,e.beginPath(),e.ellipse(64+Math.cos(s)*r,64+Math.sin(s)*r,o,o*(.5+Math.random()*.5),s,0,6.28),e.fill()}let t=new Vt(i);return t.colorSpace=lt,t}function OT(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"rgba(255,255,255,0.55)"),t.addColorStop(.5,"rgba(255,255,255,0.22)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Vt(i)}function Bx({renderer:i,scene:e,world:t,viewScene:n}){let s=t.M,r={tier:-1,sky:null,env:null,props:!1,texTier:-1,bytes:0};function o(N){N.colorSpace=lt,N.wrapS=rn,N.generateMipmaps=!0,N.minFilter=di;let R=new St({side:Tn,depthWrite:!1,fog:!1,uniforms:{map:{value:N},fogC:{value:e.fog.color},rot:{value:Kp},gain:{value:1}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vP; uniform sampler2D map; uniform vec3 fogC; uniform float rot, gain;
        void main(){ vec3 d = normalize(vP); vec2 uv = vec2(atan(d.z, d.x) * 0.15915494 + 0.5 + rot, asin(clamp(d.y, -1., 1.)) * 0.31830989 + 0.5);
          vec3 c = texture2D(map, uv).rgb * gain; c = mix(fogC, c, smoothstep(-0.015, 0.05, d.y));
          gl_FragColor = vec4(c, 1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}),U=t.sky.material;t.sky.material=R,U.dispose?.(),r.sky=N,e.fog.color.set(LT);let H=s.cache.f276229210;H&&(H.visible=!1)}function l(N){N.mapping=Wr;let R=new Us(i),U=R.fromEquirectangular(N);R.dispose(),N.dispose(),e.environment=U.texture,n.environment=U.texture,e.environmentRotation.y=n.environmentRotation.y=-Kp*Math.PI*2,r.env=U.texture}function c(N){let R=new Us(i),U=N.clone();U.mapping=Wr;let H=R.fromEquirectangular(U);R.dispose(),e.environment=H.texture,n.environment=H.texture,e.environmentRotation.y=n.environmentRotation.y=-Kp*Math.PI*2,r.env=H.texture}let a={sand:[s.sand,s.dune],concrete:[s.concrete],corr:[s.fence,s.fenceDark],wood:[s.wood]};async function h(N){let R=N>0,U=N>1,H=Object.keys(a),B=await Promise.all(H.map(G=>Promise.all([Yu(`tex/${G}_diff_${R?"1k":"512"}.webp`,!0),R?Yu(`tex/${G}_nor_1k.webp`):null,U?Yu(`tex/${G}_arm_1k.webp`):null])));H.forEach((G,Z)=>{let[se,ce,j]=B[Z];for(let le of a[G])le&&(le.map=se,le.bumpMap=null,le.normalMap=ce||null,le.roughnessMap=j||null,le.aoMap=j||null,le.aoMapIntensity=.8,G==="corr"?(le.metalnessMap=j||null,le.metalness=le===s.fence?.55:.45,le.roughness=j?1:.62,le.color.set(le===s.fence?12107972:5921886),ce&&le.normalScale.set(1.2,1.2)):G==="sand"?(le.color.set(le===s.dune?12166540:13220774),le.roughness=1,le.metalness=0,ce&&le.normalScale.set(1.1,1.1)):G==="concrete"?(le.color.set(11841706),le.roughness=j?1:.9,le.metalness=0):(le.color.set(14207928),le.roughness=j?1:.85),NT(le,DT[G],G==="sand"))}),r.texTier=N}let u={drum:[.62,.9,.62],tyre:[.98,.3,.98],crate:null,jerry:[.36,.48,.17]};function d(N,R){N.updateMatrixWorld(!0);let U=new Sn().setFromObject(N),H=U.getSize(new O),B=new Ce,G=new Ce;G.add(N),B.add(G),R==="tyre"&&H.y>Math.min(H.x,H.z)&&(G.rotation.x=H.z<H.x?Math.PI/2:0,H.x<H.z&&(G.rotation.z=Math.PI/2)),B.updateMatrixWorld(!0);let Z=new Sn().setFromObject(G),se=Z.getSize(new O),ce=Z.getCenter(new O),j=u[R]||[1,1,1];if(G.scale.set(j[0]/se.x,j[1]/se.y,j[2]/se.z),R==="jerry"||R==="drum"){let $=j[1]/se.y;G.scale.set($,$,$)}B.updateMatrixWorld(!0);let le=new Sn().setFromObject(G),Ie=le.getCenter(new O);return G.position.set(-Ie.x,-le.min.y,-Ie.z),B.updateMatrixWorld(!0),B}async function f(N){let R=["drum","tyre","crate","jerry"],U=await Promise.all(R.map(se=>Ox.loadAsync(jp+`props/${se}.glb`))),H={};R.forEach((se,ce)=>H[se]=d(U[ce].scene,se));let B={};for(let se of t.hdProps||[])(B[se.kind]||(B[se.kind]=[])).push(se);let G=new je,Z=new pe;r.inst=[];for(let[se,ce]of Object.entries(B)){let j=H[se];j.updateMatrixWorld(!0),j.traverse(le=>{if(!le.isMesh)return;let Ie=new In(le.geometry,le.material,ce.length);Ie.castShadow=N>0,Ie.receiveShadow=!0,ce.forEach(($,oe)=>{G.copy($.m),se==="crate"&&G.multiply(new je().makeScale($.s,$.s,$.s)),G.multiply(le.matrixWorld),Ie.setMatrixAt(oe,G),se==="drum"&&(Z.set($.color).lerp(new pe(1,1,1),.45),Ie.setColorAt(oe,Z))}),Ie.computeBoundingSphere(),t.root.add(Ie),r.inst.push(Ie)})}for(let se of t.propLo||[])se.visible=!1;for(let[se,ce]of t.missionMeshes||[])if(ce.userData.hdKind==="jerry"){let j=H.jerry.clone();j.traverse(le=>{le.isMesh&&(le.castShadow=!0,le.receiveShadow=!0)}),ce.children.forEach(le=>le.visible=!1),j.rotation.y=Math.random()*6,ce.add(j)}r.props=!0}let p=40,x=new In(new on(1,1).rotateX(-Math.PI/2),new $e({map:UT(),transparent:!0,depthWrite:!1,roughness:.25,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),p);x.frustumCulled=!1,x.renderOrder=2,x.userData.noAO=!0,x.receiveShadow=!0;let g=new gt,m=0;g.scale.set(0,0,0),g.updateMatrix();for(let N=0;N<p;N++)x.setMatrixAt(N,g.matrix);e.add(x);function v(N,R,U=1){g.position.set(N,.02+m%7*.0015,R),g.rotation.set(0,Math.random()*6.28,0),g.scale.set(U*(.8+Math.random()*.5),1,U*(.8+Math.random()*.5)),g.updateMatrix(),x.setMatrixAt(m,g.matrix),x.instanceMatrix.needsUpdate=!0,m=(m+1)%p}let M=54,_=new xt,b=new Float32Array(M*3),T=new Float32Array(M),L=[],y=[[-38,-70],[44,-40],[-50,30]];for(let N=0;N<M;N++)L.push({s:y[N%y.length],t:Math.random()*9,life:7+Math.random()*4,dx:(Math.random()-.5)*.4});_.setAttribute("position",new ct(b,3)),_.setAttribute("a",new ct(T,1));let E=new St({transparent:!0,depthWrite:!1,fog:!0,uniforms:Bn.merge([Oe.fog,{map:{value:OT()},uScale:{value:600}}]),vertexShader:`attribute float a; varying float vA; uniform float uScale;
#include <fog_pars_vertex>
void main(){ vA=a; vec4 mvPosition=modelViewMatrix*vec4(position,1.); gl_PointSize = uScale * (2.5 + (1.-a) * 7.) / -mvPosition.z; gl_Position=projectionMatrix*mvPosition;
#include <fog_vertex>
}`,fragmentShader:`uniform sampler2D map; varying float vA;
#include <fog_pars_fragment>
void main(){ vec4 t=texture2D(map, gl_PointCoord); gl_FragColor=vec4(vec3(0.16,0.15,0.16), t.a*vA*0.55);
#include <fog_fragment>
}`}),S=new As(_,E);S.frustumCulled=!1,S.userData.noAO=!0,S.visible=!1,e.add(S);function I(N){if(S.visible){for(let R=0;R<M;R++){let U=L[R];U.t+=N,U.t>U.life&&(U.t=0);let H=U.t/U.life;b[R*3]=U.s[0]+U.dx*U.t+H*H*6,b[R*3+1]=1+U.t*1.6,b[R*3+2]=U.s[1]+H*2,T[R]=Math.sin(Math.min(1,H*4)*1.57)*(1-H)}_.attributes.position.needsUpdate=!0,_.attributes.a.needsUpdate=!0}}let F=Promise.resolve();function D(N){return F=F.then(async()=>{let R=performance.now(),U=[];(!r.sky||N>0&&r.skyHi!==!0)&&U.push(Yu(N>0?"env/sky_2k.webp":"env/sky_1k.webp",!0,!1).then(B=>{o(B),r.skyHi=N>0,N===0&&!r.envHi&&c(B)})),N>0&&!r.envHi&&U.push(new qu().loadAsync(jp+"env/env_256.hdr").then(B=>{l(B),r.envHi=!0})),(r.texTier<0||N>r.texTier&&!(r.texTier===1&&N===1))&&U.push(h(N)),r.props||U.push(f(N));let H=await Promise.allSettled(U);for(let B of H)B.status==="rejected"&&console.warn("hd stage 2",B.reason);r.ms=Math.round(performance.now()-R)}),F}function P(N){r.tier=N,S.visible=N>0;for(let R of r.inst||[])R.castShadow=N>0}return{load:D,setTier:P,update:I,blood:v,st:r}}var BT=100,FT=50;function Fx(i){let{scene:e,zombies:t,P:n,G:s,cam:r}=i,o={on:!1,ws:null,id:null,room:null,token:null,snaps:[],remotes:new Map,slot:new Map,lastSend:0,over:!1,retry:0,url:null,name:"Survivor",status:"",alive:!0},l=(y,E,S)=>y+(E-y)*S,c=(y,E,S)=>{let I=((E-y+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return y+I*S},a=[1638320,16757575,7059711,16739285];function h(y,E){let S=new Ce,I=new $e({color:a[E%4],roughness:.6}),F=new me(new Oa(.3,.9,4,10),I);F.position.y=.95;let D=new me(new cn(.2,12,10),new $e({color:14267276}));D.position.y=1.68;let P=new me(new ot(.08,.1,.5),new $e({color:546}));P.position.set(.25,1.35,-.3);let N=P.clone();N.position.set(-.22,1.32,-.26),N.visible=!1;let R=document.createElement("canvas");R.width=256,R.height=64;let U=R.getContext("2d");U.font="800 34px system-ui,sans-serif",U.textAlign="center",U.fillStyle="#"+a[E%4].toString(16).padStart(6,"0"),U.fillText(y,128,44);let H=new ei(new qn({map:new Vt(R),transparent:!0,depthWrite:!1}));H.scale.set(1.2,.3,1),H.position.y=2.2;let B=new me(new cn(.07,8,6),new nt({color:1638320}));return B.position.y=2.45,B.visible=!1,S.add(F,D,P,N,H,B),S.userData={body:F,gun:P,gun2:N,name:y,talk:B,gunId:"pistol"},e.add(S),S}let u={pistol:[.7,.8,.55,2236962],akimbo:[.7,.8,.5,13158600],smg:[.85,1,.85,3355443],shotgun:[.8,.8,1.4,3811868],sawed:[1.3,.9,.62,2236962],rifle:[.7,.9,1.55,2763306],lever:[.65,.8,1.7,7027231],nailer:[1.2,1.2,.7,14252330],lmg:[1.2,1.2,1.6,1710618]};function d(y,E){let S=u[E]?E:"pistol";if(y.userData.gunId===S)return;y.userData.gunId=S;let I=u[S];y.userData.gun.scale.set(I[0],I[1],I[2]),y.userData.gun.material.color.setHex(I[3]),y.userData.gun2.visible=S==="akimbo",S==="akimbo"&&y.userData.gun2.material.color.setHex(I[3])}function f(y){o.url=y.url,o.name=y.name||o.name,o.joinMsg=y.join,p()}function p(){let y;try{y=new WebSocket(o.url)}catch{return x("bad server url")}o.ws=y,o.status="connecting",y.onopen=()=>{o.retry=0,y.send(JSON.stringify(o.token?{t:"join",token:o.token}:{t:"join",name:o.name,...o.joinMsg}))},y.onmessage=E=>{let S;try{S=JSON.parse(E.data)}catch{return}g(S)},y.onclose=E=>{if(o.ws===y){if(o.ws=null,!o.on&&!o.token){i.onStatus?.("Could not connect to the co-op server");return}o.over||E.code===4001||(o.retry++<8?(o.status="reconnecting",i.onStatus?.("Connection lost, reconnecting\u2026"),setTimeout(p,Math.min(8e3,500*2**o.retry))):(i.onStatus?.("Disconnected from co-op server"),v(),i.onQuit?.()))}},y.onerror=()=>{}}function x(y){i.onStatus?.(y)}function g(y){if(y.t==="joined"){let E=!o.on;o.id=y.id,o.room=y.room,o.token=y.token,o.status="ok",E?(o.on=!0,o.over=!1,i.onJoined?.(y)):i.onStatus?.("Reconnected")}else if(y.t==="err")i.onStatus?.({"no-room":"No room with that code","room-full":"That room is full",full:"Server is full",rate:"Too many messages"}[y.m]||y.m),o.on||o.ws?.close();else if(y.t==="s"){y.recv=performance.now(),o.snaps.push(y),o.snaps.length>30&&o.snaps.shift();for(let E of y.ev||[])i.onEvent?.(E,E.p===o.id||E.by===o.id);i.onLobby?.(y),y.over&&!o.over&&(o.over=!0,i.onOver?.(y))}else y.t==="hits"?i.onHits?.(y.h):y.t==="act"?(o.lastAct=y,i.onAct?.(y)):y.t==="sig"&&i.onSig?.(y)}function m(y){o.ws&&o.ws.readyState===1&&o.ws.send(JSON.stringify(y))}function v(){if(o.on=!1,o.ws)try{m({t:"leave"}),o.ws.close()}catch{}o.ws=null,o.token=null,o.snaps=[];for(let y of o.remotes.values())e.remove(y);o.remotes.clear(),o.slot.clear(),t.reset()}function M(y){let E=y-BT,S=o.snaps;if(!S.length)return null;let I=S.length-1;for(;I>0&&S[I-1].recv>E;)I--;let F=S[I],D=S[Math.max(0,I-1)];return D===F||F.recv<=D.recv?{s0:F,s1:F,k:1}:{s0:D,s1:F,k:Math.max(0,Math.min(1,(E-D.recv)/(F.recv-D.recv)))}}function _(y,E,S){let I=performance.now();I-o.lastSend>FT&&!n.dead&&(o.lastSend=I,m({t:"in",x:+n.x.toFixed(2),z:+n.z.toFixed(2),yaw:+n.yaw.toFixed(3),pitch:+n.pitch.toFixed(3),w:i.held?.()||"pistol"}));let F=M(I);if(!F){t.update(y,E,n,i.world.door,S);return}let{s0:D,s1:P,k:N}=F,R=o.snaps[o.snaps.length-1],U=R.p.find(j=>j[0]===o.id);if(U){let j=U[6];if(j<n.hp-.5&&i.onHurt?.(n.hp-j),n.hp=j,n.pts=U[7],n.kills=U[8],U[9]&&!n.dead?i.onDown?.():!U[9]&&n.dead&&i.onRevive?.(),Math.hypot(U[2]-n.x,U[3]-n.z)>2.5&&(n.x=U[2],n.z=U[3]),Array.isArray(U[12]))for(let le of U[12]){let Ie=n.slots.find($=>$&&$.id===le[0]);Ie&&(Ie.mag=le[1],Ie.reserve=le[2])}}R.round!==s.round&&R.round>0&&i.onRound?.(R.round),s.mpPhase=R.phase;let H=i.world;R.win&&R.win.forEach((j,le)=>{let Ie=H.windows[le];if(Ie){for(;Ie.count>j;)H.removePlank(Ie),i.onPlank?.(Ie,!0);for(;Ie.count<j;)H.addPlank(Ie),i.onPlank?.(Ie,!1)}});let B=new Set(R.go||[]);R.door&&B.add("AB");for(let j of H.doors||[H.door])j&&B.has(j.id)&&!j.open&&(j.open=!0,i.onDoor?.(j));R.ms!==void 0&&i.onMission?.(R.ms,R.mi,R.mc),R.crate&&i.onCrate?.(R.crate[0],R.crate[1],R.crate[2]===o.id),R.up&&i.syncUps?.(R.up),s.double=R.dbl?1:0,U&&(o.owned=U[11]);let G=new Set,Z=new Map(D.p.map(j=>[j[0],j]));P.p.forEach((j,le)=>{if(j[0]===o.id)return;G.add(j[0]);let Ie=o.remotes.get(j[0]);Ie||(Ie=h(j[1],le),o.remotes.set(j[0],Ie));let $=Z.get(j[0])||j;Ie.position.set(l($[2],j[2],N),0,l($[3],j[3],N)),Ie.rotation.y=c($[4],j[4],N),d(Ie,j[14]),Ie.userData.body.rotation.x=j[9]?-1.4:0,Ie.position.y=j[9]?.3:0,Ie.visible=!0,Ie.userData.body.material.opacity=j[10]?1:.4,Ie.userData.body.material.transparent=!j[10]});for(let[j,le]of o.remotes)G.has(j)||(e.remove(le),o.remotes.delete(j));let se=new Map(D.z.map(j=>[j[0],j])),ce=new Set;for(let j of P.z){ce.add(j[0]);let le=o.slot.get(j[0]);if(!le){if(le=t.spawn({out:{x:j[1],z:j[2]},n:{x:0,z:1},t:{x:1,z:0},count:0},Math.max(1,R.round),!!j[6]),!le)continue;o.slot.set(j[0],le),le.runner=!!j[7],le.mpX=j[1],le.mpZ=j[2],le.state="chase"}let Ie=se.get(j[0])||j;le.mpX=l(Ie[1],j[1],N),le.mpZ=l(Ie[2],j[2],N),le.mpYaw=c(Ie[3],j[3],N),le.mpClimb=j[5],j[8]&&le.attackT<=0&&(le.attackT=.01)}for(let[j,le]of o.slot)ce.has(j)||(o.slot.delete(j),le.state!=="dead"&&le.state!=="dying"&&(le.state="dying",le.dieT=0,le.dieDir=Math.random()*.8-.4,i.onZDie?.(le)));for(let j of o.slot.values()){let le=Math.hypot(j.mpX-j.pos.x,j.mpZ-j.pos.z);j.pos.x=j.mpX,j.pos.z=j.mpZ,j.speed=0,j.cool=99,j.phase+=Math.min(.6,le*2.6),j.stuckTot=0}t.update(y,E,n,i.world.door,{...S,hitPlayer:()=>{}});for(let j of o.slot.values())j.pos.x=j.mpX,j.pos.z=j.mpZ,j.yaw=j.mpYaw,j.root.rotation.y=j.mpYaw,j.root.position.y=j.mpClimb||0,j.climbY=j.mpClimb||0;t.alive=o.slot.size}let b=new O;function T(y){let E=[...o.remotes.values()].filter(N=>N.position.y<.1&&N.visible);if(!E.length)return null;let S=Math.floor(performance.now()/6e3)%E.length,I=E[S],F=I.rotation.y,D=I.position.x+Math.sin(F)*3.4,P=I.position.z+Math.cos(F)*3.4;return b.set(D,2.6,P),y.position.lerp(b,.2),y.lookAt(I.position.x,1.4,I.position.z),I.userData.name}function L(y,E){let S=o.remotes.get(y);S&&S.userData.talk&&(S.userData.talk.visible=!!E)}return{S:o,spectate:T,connect:f,stop:v,update:_,send:m,setTalking:L,frameAt:M,get on(){return o.on}}}function kx(i,e,t){let s=Math.min(2,window.devicePixelRatio||1),r=document.createElement("canvas");r.id="minimap",r.width=r.height=104*s,document.getElementById("hud").appendChild(r);let o=r.getContext("2d"),l={x0:1e9,x1:-1e9,z0:1e9,z1:-1e9};for(let v of i.colliders)v.y1>=2.5&&v.x1-v.x0+(v.z1-v.z0)>3&&(l.x0=Math.min(l.x0,v.x0),l.x1=Math.max(l.x1,v.x1),l.z0=Math.min(l.z0,v.z0),l.z1=Math.max(l.z1,v.z1));let c=3,a=Math.max(l.x1-l.x0,l.z1-l.z0)+c*2,h=104*s/a,u=(l.x0+l.x1)/2,d=(l.z0+l.z1)/2,f=v=>(v-u)*h+104*s/2,p=v=>(v-d)*h+104*s/2,x=document.createElement("canvas");x.width=x.height=104*s;let g=x.getContext("2d");g.fillStyle="rgba(200,230,240,0.55)";for(let v of i.colliders)v.y1>=1&&g.fillRect(f(v.x0),p(v.z0),Math.max(1,(v.x1-v.x0)*h),Math.max(1,(v.z1-v.z0)*h));let m=0;return function(M){if(m+=M,m<.08)return;m=0;let _=104*s;o.clearRect(0,0,_,_),o.drawImage(x,0,0),o.fillStyle="#ff3b4e";let b=2.4*s;for(let I of e.list)I.state!=="dead"&&I.root.visible&&(o.beginPath(),o.arc(f(I.pos.x),p(I.pos.z),b,0,6.283),o.fill());let T=f(t.x),L=p(t.z),y=-Math.sin(t.yaw),E=-Math.cos(t.yaw),S=6*s;i.marker&&(o.fillStyle="#ffd36b",o.fillRect(f(i.marker.x)-3*s,p(i.marker.z)-3*s,6*s,6*s)),o.fillStyle="#3cf0c0",o.strokeStyle="#04241c",o.lineWidth=s,o.beginPath(),o.moveTo(T+y*S,L+E*S),o.lineTo(T-y*S*.6-E*S*.6,L-E*S*.6+y*S*.6),o.lineTo(T-y*S*.6+E*S*.6,L-E*S*.6-y*S*.6),o.closePath(),o.fill(),o.stroke()}}var ds={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var si=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},kT=new ss(-1,1,1,-1,0,1),$p=class extends xt{constructor(){super(),this.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ut([0,2,0,0,2,0],2))}},zT=new $p,fs=class{constructor(e){this._mesh=new me(zT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,kT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ea=class extends si{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof St?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Bn.clone(e.uniforms),this.material=new St({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new fs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ol=class extends si{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Zu=class extends si{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ku=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new de);this._width=n.width,this._height=n.height,t=new tn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ea(ds),this.copyPass.material.blending=fn,this.timer=new el}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Ol!==void 0&&(o instanceof Ol?n=!0:o instanceof Zu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Bl=class extends si{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new pe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var zx={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ta=class i extends si{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new de(e.x,e.y):new de(256,256),this.clearColor=new pe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new tn(r,o,{type:jt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new tn(r,o,{type:jt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new tn(r,o,{type:jt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let l=zx;this.highPassUniforms=Bn.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new St({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new de(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let a=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=a,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Bn.clone(ds.uniforms),this.blendMaterial=new St({uniforms:this.copyUniforms,vertexShader:ds.vertexShader,fragmentShader:ds.fragmentShader,premultipliedAlpha:!0,blending:an,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new pe,this._oldClearAlpha=1,this._basic=new nt,this._fsQuad=new fs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new de(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let l=t[o],c=o+1<e?t[o+1]:0,a=l+c;s.push((o*l+(o+1)*c)/a),r.push(a)}return new St({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new de(.5,.5)},direction:{value:new de(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new St({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};ta.BlurDirectionX=new de(1,0);ta.BlurDirectionY=new de(0,1);var Fl={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new de},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new je},cameraProjectionMatrixInverse:{value:new je},cameraWorldMatrix:{value:new je},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new O(-1,-1,-1)},sceneBoxMax:{value:new O(1,1,1)}},vertexShader:`

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
		}`},kl={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},ju={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Hx(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=HT(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let l=t[o],c=2*Math.PI*l/n,a=new O(Math.cos(c),Math.sin(c),0).normalize();s[o*4]=(a.x*.5+.5)*255,s[o*4+1]=(a.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Ei(s,e,e);return r.wrapS=rn,r.wrapT=rn,r.needsUpdate=!0,r}function HT(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var zl={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Jp(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new de},cameraProjectionMatrixInverse:{value:new je},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Jp(i,e,t){let n=GT(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function GT(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new O(Math.cos(r),Math.sin(r),o))}return n}var $u=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),l=(e+t)*o,c=Math.floor(e+l),a=Math.floor(t+l),h=(3-Math.sqrt(3))/6,u=(c+a)*h,d=c-u,f=a-u,p=e-d,x=t-f,g,m;p>x?(g=1,m=0):(g=0,m=1);let v=p-g+h,M=x-m+h,_=p-1+2*h,b=x-1+2*h,T=c&255,L=a&255,y=this.perm[T+this.perm[L]]%12,E=this.perm[T+g+this.perm[L+m]]%12,S=this.perm[T+1+this.perm[L+1]]%12,I=.5-p*p-x*x;I<0?n=0:(I*=I,n=I*I*this._dot(this.grad3[y],p,x));let F=.5-v*v-M*M;F<0?s=0:(F*=F,s=F*F*this._dot(this.grad3[E],v,M));let D=.5-_*_-b*b;return D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[S],_,b)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,l,a=(e+t+n)*.3333333333333333,h=Math.floor(e+a),u=Math.floor(t+a),d=Math.floor(n+a),f=1/6,p=(h+u+d)*f,x=h-p,g=u-p,m=d-p,v=e-x,M=t-g,_=n-m,b,T,L,y,E,S;v>=M?M>=_?(b=1,T=0,L=0,y=1,E=1,S=0):v>=_?(b=1,T=0,L=0,y=1,E=0,S=1):(b=0,T=0,L=1,y=1,E=0,S=1):M<_?(b=0,T=0,L=1,y=0,E=1,S=1):v<_?(b=0,T=1,L=0,y=0,E=1,S=1):(b=0,T=1,L=0,y=1,E=1,S=0);let I=v-b+f,F=M-T+f,D=_-L+f,P=v-y+2*f,N=M-E+2*f,R=_-S+2*f,U=v-1+3*f,H=M-1+3*f,B=_-1+3*f,G=h&255,Z=u&255,se=d&255,ce=this.perm[G+this.perm[Z+this.perm[se]]]%12,j=this.perm[G+b+this.perm[Z+T+this.perm[se+L]]]%12,le=this.perm[G+y+this.perm[Z+E+this.perm[se+S]]]%12,Ie=this.perm[G+1+this.perm[Z+1+this.perm[se+1]]]%12,$=.6-v*v-M*M-_*_;$<0?s=0:($*=$,s=$*$*this._dot3(this.grad3[ce],v,M,_));let oe=.6-I*I-F*F-D*D;oe<0?r=0:(oe*=oe,r=oe*oe*this._dot3(this.grad3[j],I,F,D));let Ae=.6-P*P-N*N-R*R;Ae<0?o=0:(Ae*=Ae,o=Ae*Ae*this._dot3(this.grad3[le],P,N,R));let qe=.6-U*U-H*H-B*B;return qe<0?l=0:(qe*=qe,l=qe*qe*this._dot3(this.grad3[Ie],U,H,B)),32*(s+r+o+l)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,l=this.perm,c=(Math.sqrt(5)-1)/4,a=(5-Math.sqrt(5))/20,h,u,d,f,p,x=(e+t+n+s)*c,g=Math.floor(e+x),m=Math.floor(t+x),v=Math.floor(n+x),M=Math.floor(s+x),_=(g+m+v+M)*a,b=g-_,T=m-_,L=v-_,y=M-_,E=e-b,S=t-T,I=n-L,F=s-y,D=E>S?32:0,P=E>I?16:0,N=S>I?8:0,R=E>F?4:0,U=S>F?2:0,H=I>F?1:0,B=D+P+N+R+U+H,G=o[B][0]>=3?1:0,Z=o[B][1]>=3?1:0,se=o[B][2]>=3?1:0,ce=o[B][3]>=3?1:0,j=o[B][0]>=2?1:0,le=o[B][1]>=2?1:0,Ie=o[B][2]>=2?1:0,$=o[B][3]>=2?1:0,oe=o[B][0]>=1?1:0,Ae=o[B][1]>=1?1:0,qe=o[B][2]>=1?1:0,te=o[B][3]>=1?1:0,ve=E-G+a,Te=S-Z+a,ne=I-se+a,fe=F-ce+a,ye=E-j+2*a,ge=S-le+2*a,Se=I-Ie+2*a,Ve=F-$+2*a,He=E-oe+3*a,tt=S-Ae+3*a,it=I-qe+3*a,z=F-te+3*a,bt=E-1+4*a,at=S-1+4*a,k=I-1+4*a,w=F-1+4*a,Y=g&255,K=m&255,ee=v&255,be=M&255,Pe=l[Y+l[K+l[ee+l[be]]]]%32,ae=l[Y+G+l[K+Z+l[ee+se+l[be+ce]]]]%32,he=l[Y+j+l[K+le+l[ee+Ie+l[be+$]]]]%32,Le=l[Y+oe+l[K+Ae+l[ee+qe+l[be+te]]]]%32,we=l[Y+1+l[K+1+l[ee+1+l[be+1]]]]%32,_e=.6-E*E-S*S-I*I-F*F;_e<0?h=0:(_e*=_e,h=_e*_e*this._dot4(r[Pe],E,S,I,F));let Me=.6-ve*ve-Te*Te-ne*ne-fe*fe;Me<0?u=0:(Me*=Me,u=Me*Me*this._dot4(r[ae],ve,Te,ne,fe));let Ne=.6-ye*ye-ge*ge-Se*Se-Ve*Ve;Ne<0?d=0:(Ne*=Ne,d=Ne*Ne*this._dot4(r[he],ye,ge,Se,Ve));let We=.6-He*He-tt*tt-it*it-z*z;We<0?f=0:(We*=We,f=We*We*this._dot4(r[Le],He,tt,it,z));let rt=.6-bt*bt-at*at-k*k-w*w;return rt<0?p=0:(rt*=rt,p=rt*rt*this._dot4(r[we],bt,at,k,w)),27*(h+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var na=class i extends si{constructor(e,t,n=512,s=512,r,o,l){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Hx(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new tn(this.width,this.height,{type:jt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new St({defines:Object.assign({},Fl.defines),uniforms:Bn.clone(Fl.uniforms),vertexShader:Fl.vertexShader,fragmentShader:Fl.fragmentShader,blending:fn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Za,this.normalMaterial.blending=fn,this.pdMaterial=new St({defines:Object.assign({},zl.defines),uniforms:Bn.clone(zl.uniforms),vertexShader:zl.vertexShader,fragmentShader:zl.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new St({defines:Object.assign({},kl.defines),uniforms:Bn.clone(kl.uniforms),vertexShader:kl.vertexShader,fragmentShader:kl.fragmentShader,blending:fn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new St({uniforms:Bn.clone(ds.uniforms),vertexShader:ds.vertexShader,fragmentShader:ds.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:nl,blendDst:Hr,blendEquation:Ti,blendSrcAlpha:tl,blendDstAlpha:Hr,blendEquationAlpha:Ti}),this.blendMaterial=new St({uniforms:Bn.clone(ju.uniforms),vertexShader:ju.vertexShader,fragmentShader:ju.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:vh,blendSrc:nl,blendDst:Hr,blendEquation:Ti,blendSrcAlpha:tl,blendDstAlpha:Hr,blendEquationAlpha:Ti}),this._fsQuad=new fs(null),this._originalClearColor=new pe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),l!==void 0&&this.updatePdMaterial(l)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new es,this.depthTexture.format=as,this.depthTexture.type=sr,this.normalRenderTarget=new tn(this.width,this.height,{minFilter:nn,magFilter:nn,type:jt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Jp(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=fn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=fn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=fn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=fn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=fn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=l,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=l,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new $u,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let l=0;l<e;l++){let c=o,a=l;s[(o*e+l)*4]=(t.noise(c,a)*.5+.5)*255,s[(o*e+l)*4+1]=(t.noise(c+e,a)*.5+.5)*255,s[(o*e+l)*4+2]=(t.noise(c,a+e)*.5+.5)*255,s[(o*e+l)*4+3]=(t.noise(c+e,a+e)*.5+.5)*255}let r=new Ei(s,e,e,Un,Zn);return r.wrapS=rn,r.wrapT=rn,r.needsUpdate=!0,r}};na.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Hl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ju=class extends si{constructor(){super(),this.isOutputPass=!0,this.uniforms=Bn.clone(Hl.uniforms),this.material=new Oo({name:Hl.name,uniforms:this.uniforms,vertexShader:Hl.vertexShader,fragmentShader:Hl.fragmentShader}),this._fsQuad=new fs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ft.getTransfer(this._outputColorSpace)===Dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===il?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===sl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===rl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Gr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===al?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ll?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ol&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Gl=class{constructor(e,t,n){this.max=e,this.n=0,this.next=0;let s=this.geo=new xt;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.siz=new Float32Array(e),s.setAttribute("position",new ct(this.pos,3).setUsage(wi)),s.setAttribute("aColor",new ct(this.col,4).setUsage(wi)),s.setAttribute("aSize",new ct(this.siz,1).setUsage(wi)),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.s0=new Float32Array(e),this.s1=new Float32Array(e),this.c0=new Float32Array(e*4),this.uniforms={map:{value:n},uScale:{value:800}};let r=this.mat=new St({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:t?an:os,vertexShader:`attribute float aSize; attribute vec4 aColor; varying vec4 vC; uniform float uScale;
        void main(){ vec4 mv = modelViewMatrix*vec4(position,1.); gl_Position = projectionMatrix*mv; gl_PointSize = clamp(aSize*uScale/max(-mv.z,0.1), 0., 300.); vC = aColor; }`,fragmentShader:`uniform sampler2D map; varying vec4 vC;
        void main(){ float a = texture2D(map, gl_PointCoord).a * vC.a; if(a<0.004) discard; gl_FragColor = vec4(vC.rgb, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        }`});this.points=new As(s,r),this.points.frustumCulled=!1,this.points.renderOrder=5,this.points.userData.noAO=!0}emit(e,t,n,s,r,o,l,c,a,h,u,d,f,p=0,x=0){let g=this.next;this.next=(this.next+1)%this.max,this.pos[g*3]=e,this.pos[g*3+1]=t,this.pos[g*3+2]=n,this.vel[g*3]=s,this.vel[g*3+1]=r,this.vel[g*3+2]=o,this.life[g]=this.maxLife[g]=l,this.s0[g]=c,this.s1[g]=a,this.grav[g]=p,this.drag[g]=x,this.c0[g*4]=h,this.c0[g*4+1]=u,this.c0[g*4+2]=d,this.c0[g*4+3]=f}update(e){let{pos:t,vel:n,life:s,maxLife:r,col:o,siz:l,c0:c}=this;for(let a=0;a<this.max;a++){if(s[a]<=0){l[a]=0,o[a*4+3]=0;continue}if(s[a]-=e,s[a]<=0){l[a]=0,o[a*4+3]=0;continue}let h=1-s[a]/r[a],u=a*3,d=Math.max(0,1-this.drag[a]*e);n[u]*=d,n[u+1]=n[u+1]*d-this.grav[a]*e,n[u+2]*=d,t[u]+=n[u]*e,t[u+1]+=n[u+1]*e,t[u+2]+=n[u+2]*e,t[u+1]<.02&&this.grav[a]>0&&(t[u+1]=.02,n[u]*=.4,n[u+2]*=.4,n[u+1]*=-.25),l[a]=this.s0[a]+(this.s1[a]-this.s0[a])*h;let f=h<.1?h*10:1-(h-.1)/.9;o[a*4]=c[a*4],o[a*4+1]=c[a*4+1],o[a*4+2]=c[a*4+2],o[a*4+3]=c[a*4+3]*f}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0}clear(){this.life.fill(0)}},Qu=class{constructor(e,t,n){this.scene=e,this.tier=n;let s=n>0?1:.4;this.soft=new Gl(Math.floor(900*s)+100,!1,t.glow),this.add=new Gl(Math.floor(900*s)+100,!0,t.glow),e.add(this.soft.points,this.add.points),this.tracers=[];let r=new ot(1,1,1);for(let o=0;o<24;o++){let l=new me(r,new nt({color:new pe(5,3.6,1.4),transparent:!0,blending:an,depthWrite:!1,toneMapped:!1}));l.visible=!1,l.userData.noAO=!0,l.userData.t=0,e.add(l),this.tracers.push(l)}this.tn=0,this.maxCas=n>0?80:16,this.cas=new In(new Bt(.009,.009,.034,6),new $e({color:14066743,metalness:1,roughness:.3}),this.maxCas),this.cas.frustumCulled=!1,this.cas.castShadow=!1,e.add(this.cas),this.casData=Array.from({length:this.maxCas},()=>({t:0,p:new O,v:new O,r:new gi,w:new O})),this.casNext=0,this._m=new je,this._q=new vn,this._s=new O(1,1,1);for(let o=0;o<this.maxCas;o++)this._m.makeScale(0,0,0),this.cas.setMatrixAt(o,this._m)}setScale(e,t){let n=e/(2*Math.tan(t*Math.PI/360));this.soft.uniforms.uScale.value=n,this.add.uniforms.uScale.value=n}tracer(e,t,n=.012){let s=this.tracers[this.tn++%this.tracers.length],r=e.distanceTo(t);r<.5||(s.position.copy(e).lerp(t,.5),s.lookAt(t),s.scale.set(n,n,r),s.visible=!0,s.userData.t=.06,s.material.opacity=1)}casing(e,t){let n=this.casData[this.casNext++%this.maxCas];n.t=2.5,n.p.copy(e),n.v.copy(t),n.r.set(X(Wt),X(Wt),X(Wt)),n.w.set(X(-30,30),X(-30,30),X(-30,30))}blood(e,t,n,s=1){let r=this.tier>0?1:.5;n=Math.ceil(n*r);for(let o=0;o<n;o++){let l=X(.6,3.2)*s;this.soft.emit(e.x,e.y,e.z,t.x*l+X(-1,1),t.y*l+X(-.2,1.4),t.z*l+X(-1,1),X(.35,.8),X(.12,.2)*s,X(.45,.8)*s,X(.55,.9),X(.02,.07),X(.04,.12),X(.35,.65),4,2.5)}for(let o=0;o<Math.ceil(n*.6);o++){let l=X(1.5,5)*s;this.soft.emit(e.x,e.y,e.z,t.x*l+X(-1.5,1.5),t.y*l+X(0,2.5),t.z*l+X(-1.5,1.5),X(.5,1),.05,.04,.6,0,.03,.9,11,.4)}}sparks(e,t,n){n=Math.ceil(n*(this.tier>0?1:.5));for(let s=0;s<n;s++){let r=X(2,7);this.add.emit(e.x,e.y,e.z,t.x*r+X(-2,2),t.y*r+X(-1,2.5),t.z*r+X(-2,2),X(.2,.5),.07,.015,4,X(1.6,2.6),.5,1,9,.8)}}dust(e,t,n,s=[.45,.36,.26]){n=Math.ceil(n*(this.tier>0?1:.5));for(let r=0;r<n;r++)this.soft.emit(e.x,e.y,e.z,t.x*X(.3,1.5)+X(-.5,.5),t.y*X(.2,1)+X(0,.6),t.z*X(.3,1.5)+X(-.5,.5),X(.6,1.3),.2,X(.8,1.4),s[0],s[1],s[2],.35,-.2,1.8)}smoke(e,t,n=2){for(let s=0;s<n;s++)this.soft.emit(e.x,e.y,e.z,t.x*1.2+X(-.2,.2),t.y*1.2+X(.1,.5),t.z*1.2+X(-.2,.2),X(.5,1),.05,.28,.55,.55,.58,.25,-.4,2)}flash(e,t){this.add.emit(e.x,e.y,e.z,t.x*1,t.y*1,t.z*1,.06,.45,.8,5,3.4,1.4,1,0,0);for(let n=0;n<3;n++)this.add.emit(e.x,e.y,e.z,t.x*X(3,9)+X(-2,2),t.y*X(3,9)+X(-2,2),t.z*X(3,9)+X(-2,2),X(.08,.18),.1,.02,4,2.2,.6,1,2,1)}feathers(e,t,n=12){let s=t?.x||0,r=t?.y??1,o=t?.z||0;for(let l=0;l<n;l++){let c=X(Wt),a=X(.7,2.6);this.soft.emit(e.x,e.y,e.z,Math.cos(c)*a+s*1.2,X(.6,2.4)+r*.4,Math.sin(c)*a+o*1.2,X(.55,1.3),.07,.02,X(.12,.28),X(.08,.16),X(.06,.1),.95,5.5,.7)}}glowBurst(e,t,n,s,r=24,o=4){for(let l=0;l<r;l++){let c=X(Wt),a=X(-.6,1),h=X(.4,1)*o;this.add.emit(e.x,e.y,e.z,Math.cos(c)*h,a*h,Math.sin(c)*h,X(.5,1.1),.18,.02,t,n,s,1,2,1.2)}}update(e){this.soft.update(e),this.add.update(e);for(let n of this.tracers)n.visible&&(n.userData.t-=e,n.material.opacity=Math.max(0,n.userData.t/.06),n.userData.t<=0&&(n.visible=!1));let t=!1;for(let n=0;n<this.maxCas;n++){let s=this.casData[n];if(s.t<=0)continue;t=!0,s.t-=e,s.v.y-=9.8*e,s.p.addScaledVector(s.v,e),s.p.y<.02&&(s.p.y=.02,s.v.y*=-.35,s.v.x*=.6,s.v.z*=.6,s.w.multiplyScalar(.5)),s.r.x+=s.w.x*e,s.r.y+=s.w.y*e,s.r.z+=s.w.z*e;let r=Math.min(1,s.t*2);this._q.setFromEuler(s.r),this._s.setScalar(s.t>0?r:0),this._m.compose(s.p,this._q,this._s),this.cas.setMatrixAt(n,this._m),s.t<=0&&(this._m.makeScale(0,0,0),this.cas.setMatrixAt(n,this._m))}(t||this._anyBefore)&&(this.cas.instanceMatrix.needsUpdate=!0),this._anyBefore=t}reset(){this.soft.clear(),this.add.clear();for(let e of this.casData)e.t=0;for(let e of this.tracers)e.visible=!1}},Vl=class{constructor(e,t,n={}){this.o=Object.assign({R:22,y0:.2,y1:6,size:.06,alpha:.2,col:[.9,.75,.55],additive:!0,speed:1},n),this.ps=new Gl(t,this.o.additive,e.glow),this.n=t,this.R=this.o.R,this.t=0;for(let s=0;s<t;s++)this.ps.pos[s*3]=X(-this.R,this.R),this.ps.pos[s*3+1]=X(this.o.y0,this.o.y1),this.ps.pos[s*3+2]=X(-this.R,this.R);this.ps.update=s=>this.upd(s),this.points=this.ps.points,this.center={x:0,z:0}}upd(e){let t=this.ps,n=this.o;this.t+=e;let s=this.center;for(let r=0;r<this.n;r++){let o=r*3,l=n.speed;t.pos[o]+=(Math.sin(this.t*.3+r)*.25+.35)*e*l,t.pos[o+1]+=Math.sin(this.t*.4+r*1.7)*.06*e*l,t.pos[o+2]+=Math.cos(this.t*.25+r*.7)*.2*e*l,t.pos[o]-s.x>this.R?t.pos[o]-=this.R*2:t.pos[o]-s.x<-this.R&&(t.pos[o]+=this.R*2),t.pos[o+2]-s.z>this.R?t.pos[o+2]-=this.R*2:t.pos[o+2]-s.z<-this.R&&(t.pos[o+2]+=this.R*2),t.siz[r]=n.size*(1+r%3*.4),t.col[r*4]=n.col[0],t.col[r*4+1]=n.col[1],t.col[r*4+2]=n.col[2],t.col[r*4+3]=n.alpha*(.6+.4*(r%4/3))}t.geo.attributes.position.needsUpdate=!0,t.geo.attributes.aColor.needsUpdate=!0,t.geo.attributes.aSize.needsUpdate=!0}},VT={uniforms:{tDiffuse:{value:null},uTime:{value:0},uDamage:{value:0},uVig:{value:.55},uGrain:{value:.07},uSat:{value:1.1},uAberr:{value:.6},uRes:{value:new de(1,1)},uLow:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime,uDamage,uVig,uGrain,uSat,uAberr,uLow; uniform vec2 uRes; varying vec2 vUv;
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
    }`},ed=class{constructor(e,t,n,s){this.r=e,this.scene=t,this.camera=n,this.viewScene=s,this.mode="direct",this.w=1,this.h=1,this.pr=1}build(e){if(this.mode=e,this.composer&&(this.composer.dispose?.(),this.composer=null),e==="direct")return;let t=new tn(this.w,this.h,{type:jt,samples:e==="full"?0:4}),n=this.composer=new Ku(this.r,t);if(n.setPixelRatio?.(this.pr),n.setSize(this.w,this.h),n.addPass(new Bl(this.scene,this.camera)),e==="full"){let r=this.gtao=new na(this.scene,this.camera,this.w*this.pr,this.h*this.pr);r.output=na.OUTPUT.Default,r.blendIntensity=1,r.updateGtaoMaterial({radius:.7,distanceExponent:1.5,thickness:1.5,scale:1.2,samples:10,distanceFallOff:1,screenSpaceRadius:!1}),r.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,radiusExponent:1,rings:2,samples:8});let o=r._overrideVisibility.bind(r);r._overrideVisibility=()=>{o(),this.scene.traverse(l=>{l.userData.noAO&&l.visible&&(l.visible=!1,r._visibilityCache.push(l))})},n.addPass(r)}let s=new Bl(this.viewScene,this.camera);s.clear=!1,s.clearDepth=!0,n.addPass(s),this.bloom=new ta(new de(this.w,this.h),.42,.55,.9),n.addPass(this.bloom),n.addPass(new Ju),this.grade=new ea(VT),this.grade.uniforms.uRes.value.set(this.w*this.pr,this.h*this.pr),n.addPass(this.grade)}setSize(e,t,n){this.w=e,this.h=t,this.pr=n,this.composer&&(this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.gtao?.setSize(e*n,t*n),this.grade.uniforms.uRes.value.set(e*n,t*n))}render(e,t,n,s){if(!this.composer){let o=this.r;o.autoClear=!1,o.clear(),o.render(this.scene,this.camera),o.clearDepth(),o.render(this.viewScene,this.camera),o.autoClear=!0;return}let r=this.grade.uniforms;r.uTime.value=t,r.uDamage.value=n,r.uLow.value=s,this.composer.render(e)}};var td=class{constructor(){this.ctx=null,this.muted=!1,this.lastGroan=0,this.lastTick=0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=this.muted?0:.8;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,n.attack.value=.003,n.release.value=.2,this.master.connect(n),n.connect(t.destination);let s=t.createBuffer(1,t.sampleRate*2,t.sampleRate),r=s.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=Math.random()*2-1;this.noise=s;let o=t.sampleRate*1.8,l=t.createBuffer(2,o,t.sampleRate);for(let c=0;c<2;c++){let a=l.getChannelData(c);for(let h=0;h<o;h++)a[h]=(Math.random()*2-1)*Math.pow(1-h/o,3.2)}this.verb=t.createConvolver(),this.verb.buffer=l,this.verbIn=t.createGain(),this.verbIn.gain.value=.35,this.verbIn.connect(this.verb),this.verb.connect(this.master),this.startAmbient()}setMuted(e){this.muted=e,this.master&&this.master.gain.setTargetAtTime(e?0:.8,this.ctx.currentTime,.03)}get ok(){return this.ctx&&!this.muted&&this.ctx.state==="running"}out(e=0,t=.3){let n=this.ctx,s=n.createGain(),r=s;if(n.createStereoPanner){let l=n.createStereoPanner();l.pan.value=Et(e,-1,1),s.connect(l),r=l}r.connect(this.master);let o=n.createGain();return o.gain.value=t,r.connect(o),o.connect(this.verbIn),s}nz(e,t,n,s,r,o,l,c=1){let a=this.ctx,h=a.createBufferSource();h.buffer=this.noise,h.loop=!0;let u=a.createBiquadFilter();u.type=n,u.Q.value=c,u.frequency.setValueAtTime(s,e),u.frequency.exponentialRampToValueAtTime(Math.max(20,r),e+t);let d=a.createGain();d.gain.setValueAtTime(o,e),d.gain.exponentialRampToValueAtTime(8e-4,e+t),h.connect(u),u.connect(d),d.connect(l),h.start(e,X(1)),h.stop(e+t+.05)}tone(e,t,n,s,r,o,l,c=.003){let a=this.ctx,h=a.createOscillator();h.type=n,h.frequency.setValueAtTime(s,e),h.frequency.exponentialRampToValueAtTime(Math.max(10,r),e+t);let u=a.createGain();u.gain.setValueAtTime(1e-4,e),u.gain.linearRampToValueAtTime(o,e+c),u.gain.exponentialRampToValueAtTime(8e-4,e+t),h.connect(u),u.connect(l),h.start(e),h.stop(e+t+.05)}shot(e){if(!this.ok)return;let t=this.ctx,n=t.currentTime,s=this.out(0,e==="shotgun"||e==="lmg"?.5:.3),r={pistol:[.13,2600,.7,150,.9,.55],akimbo:[.1,2800,.55,170,.75,.45],smg:[.09,3400,.5,190,.7,.45],shotgun:[.34,1800,1,85,1.2,.9],sawed:[.28,1500,1.1,70,1.3,1],rifle:[.16,2200,.8,120,1,.7],lever:[.2,1800,.75,110,1.15,.7],nailer:[.045,4200,.28,240,.25,.2],lmg:[.2,1900,.9,95,1.2,.8]}[e]||[.12,2500,.7,150,1,.6];this.nz(n,r[0],"lowpass",r[1],220,r[2],s,.7),this.nz(n,.025,"highpass",3e3,6e3,.6,s),this.tone(n,r[0]*1.2,"sine",r[3],r[3]*.3,r[4]*.9,s),this.tone(n,.05,"square",r[3]*4,r[3]*1.5,.15,s)}click(e=0,t=3200,n=.35,s=0){if(!this.ok)return;let r=this.ctx.currentTime+e,o=this.out(s,.1);this.nz(r,.03,"bandpass",t,t*.7,n,o,3),this.tone(r,.025,"square",t*.3,t*.2,.05,o)}reload(e){if(!this.ok)return;let t=e==="lmg"?3.4:e==="rifle"?1.7:e==="smg"?1.4:1;this.click(.12,2400,.4),this.click(t*.55,1800,.5),this.click(t*.8,3600,.45),e!=="pistol"&&this.click(t*.92,1400,.5)}pump(){this.click(0,900,.6),this.click(.18,1500,.55)}shell(){this.click(0,2e3,.45)}empty(){this.click(0,1500,.3)}groan(e=0,t=.5,n=1,s=1){if(!this.ok)return;let r=this.ctx,o=r.currentTime;if(o-this.lastGroan<.09)return;this.lastGroan=o;let l=o,c=this.out(e,.45),a=X(70,105)*n,h=r.createOscillator();h.type="sawtooth",h.frequency.setValueAtTime(a*1.25,l),h.frequency.linearRampToValueAtTime(a,l+s*.3),h.frequency.linearRampToValueAtTime(a*.7,l+s);let u=r.createOscillator();u.frequency.value=X(5,9);let d=r.createGain();d.gain.value=6,u.connect(d),d.connect(h.frequency);let f=r.createBiquadFilter();f.type="bandpass",f.Q.value=5,f.frequency.setValueAtTime(X(450,700),l),f.frequency.linearRampToValueAtTime(X(900,1300),l+s*.6);let p=r.createBiquadFilter();p.type="lowpass",p.frequency.value=1600;let x=r.createGain();x.gain.setValueAtTime(1e-4,l),x.gain.linearRampToValueAtTime(t*.5,l+s*.15),x.gain.exponentialRampToValueAtTime(.001,l+s),h.connect(f),f.connect(p),p.connect(x),x.connect(c),h.start(l),u.start(l),h.stop(l+s+.05),u.stop(l+s+.05),this.nz(l,s*.8,"bandpass",900,500,t*.15,c,2)}zhit(e=0,t=!1){if(!this.ok)return;let n=this.ctx.currentTime,s=this.out(e,.2);this.nz(n,.09,"lowpass",700,120,.5,s),this.tone(n,.1,"sine",120,50,.4,s),t&&this.tone(n,.08,"triangle",900,500,.12,s)}zdie(e=0,t=.4){if(!this.ok)return;this.groan(e,t,.75,.7);let n=this.ctx.currentTime+.15,s=this.out(e,.25);this.nz(n,.25,"lowpass",500,60,.6,s),this.tone(n,.3,"sine",90,35,.5,s)}shriek(e=0,t=.65){if(!this.ok)return;let n=this.ctx.currentTime,s=this.out(e,.4);this.tone(n,.38,"sawtooth",1860,680,t*.22,s,.008),this.tone(n,.3,"square",1280,420,t*.1,s,.01),this.nz(n,.32,"bandpass",1900,550,t*.5,s,5),this.tone(n+.14,.24,"sawtooth",880,240,t*.16,s)}birdHit(e=0){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(e,.2);this.nz(t,.08,"bandpass",1400,400,.45,n,2),this.nz(t,.1,"lowpass",500,80,.35,n)}birdDie(e=0){if(!this.ok)return;this.shriek(e,.45);let t=this.ctx.currentTime+.12,n=this.out(e,.3);this.nz(t,.28,"lowpass",400,60,.55,n),this.tone(t,.25,"sine",80,30,.45,n)}birdThud(e=0){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(e,.15);this.nz(t,.12,"lowpass",200,40,.5,n)}tick(e){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,0);this.tone(t,.05,"square",e?900:1500,e?600:1300,e?.12:.07,n)}cash(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.2);this.tone(e,.12,"triangle",1250,1250,.22,t),this.tone(e+.07,.25,"triangle",1880,1880,.22,t),this.nz(e,.05,"highpass",5e3,8e3,.15,t)}deny(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,0);this.tone(e,.22,"sawtooth",130,90,.2,t),this.tone(e+.1,.22,"sawtooth",110,80,.2,t)}hurt(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.2);this.nz(e,.18,"lowpass",600,90,.9,t),this.tone(e,.25,"sine",80,40,.8,t),this.tone(e,.2,"sawtooth",220,110,.12,t)}heart(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,0);this.tone(e,.14,"sine",62,38,.7,t),this.tone(e+.18,.14,"sine",56,34,.5,t)}plank(e){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,.3);this.nz(t,e?.16:.08,"bandpass",e?500:800,250,.7,n,2),this.tone(t,.1,"triangle",220,90,.4,n),e&&this.nz(t+.03,.12,"highpass",1500,3e3,.3,n)}repair(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.2);this.nz(e,.07,"bandpass",1100,600,.6,t,2),this.tone(e,.08,"square",300,120,.15,t),this.tone(e+.1,.1,"triangle",1500,1500,.1,t)}door(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.5);this.nz(e,2.2,"lowpass",900,150,.7,t,1),this.tone(e,2.2,"sawtooth",55,42,.2,t,.3);for(let n=0;n<5;n++)this.click(.2+n*.35,700+n*120,.7);this.nz(e+2,.4,"lowpass",400,60,.9,t)}boom(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.7);this.nz(e,2.4,"lowpass",2400,50,1.4,t,.7),this.tone(e,1.6,"sine",90,24,1.3,t),this.tone(e+.05,.8,"sawtooth",50,25,.3,t)}power(e){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,.4);(e==="nuke"?[220,277,330,440]:e==="double"?[392,494,587,784]:[330,440,554,659]).forEach((r,o)=>{this.tone(t+o*.07,.4,"triangle",r,r,.2,n),this.tone(t+o*.07,.4,"sine",r*2,r*2,.08,n)})}medkit(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.5);[523,659,784,1047].forEach((n,s)=>{this.tone(e+s*.08,.5,"sine",n,n,.2,t),this.tone(e+s*.08,.5,"triangle",n*2,n*2,.05,t)}),this.tone(e,.9,"sine",300,600,.12,t,.1)}spawnPower(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.5);this.tone(e,.7,"sine",600,1200,.25,t,.05),this.tone(e+.1,.7,"sine",900,1800,.12,t,.05)}round(e){if(!this.ok)return;let t=this.ctx,n=t.currentTime,s=this.out(0,.8);[55,82.4,98,130.8].forEach((o,l)=>{let c=t.createOscillator();c.type="sawtooth",c.frequency.value=o;let a=t.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(200,n),a.frequency.linearRampToValueAtTime(1400,n+1.1),a.frequency.linearRampToValueAtTime(150,n+3.2);let h=t.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.linearRampToValueAtTime(.16,n+.9),h.gain.exponentialRampToValueAtTime(.001,n+3.4),c.connect(a),a.connect(h),h.connect(s),c.start(n),c.stop(n+3.5)}),[440,415,392,330,294].forEach((o,l)=>{this.tone(n+.5+l*.32,1.3,"sine",o,o,.14,s,.01),this.tone(n+.5+l*.32,1.3,"sine",o*2.01,o*2.01,.04,s,.01)}),this.tone(n,.5,"sine",70,28,.9,s),this.nz(n,.35,"lowpass",700,70,.5,s)}over(){if(!this.ok)return;let e=this.ctx,t=e.currentTime,n=this.out(0,.9);[110,130.8,164.8].forEach(s=>{this.tone(t,3.6,"sawtooth",s,s*.5,.12,n,.4)}),this.tone(t,1.5,"sine",60,25,1,n),this.nz(t,1.2,"lowpass",900,60,.7,n)}jingle(e=4){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,.5),s=[523,659,784,659,587,740,880,740];for(let r=0;r<e*4;r++){let o=s[r%s.length]*(r>8?1.12:1);this.tone(t+r*.2,.32,"triangle",o,o,.1,n,.005)}this.nz(t,.4,"bandpass",600,300,.4,n)}open(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.4);this.nz(e,.5,"bandpass",500,900,.4,t,4),this.tone(e,.5,"sawtooth",120,220,.1,t)}startAmbient(){let e=this.ctx,t=e.createGain();t.gain.value=.5,t.connect(this.master);let n=e.createBufferSource();n.buffer=this.noise,n.loop=!0;let s=e.createBiquadFilter();s.type="bandpass",s.Q.value=.8,s.frequency.value=380;let r=e.createGain();r.gain.value=.07;let o=e.createOscillator();o.frequency.value=.11;let l=e.createGain();l.gain.value=.045,o.connect(l),l.connect(r.gain);let c=e.createOscillator();c.frequency.value=.07;let a=e.createGain();a.gain.value=140,c.connect(a),a.connect(s.frequency),n.connect(s),s.connect(r),r.connect(t),n.start(),o.start(),c.start();let h=e.createOscillator();h.type="sawtooth",h.frequency.value=36;let u=e.createBiquadFilter();u.type="lowpass",u.frequency.value=90;let d=e.createGain();d.gain.value=.04,h.connect(u),u.connect(d),d.connect(t),h.start();let f=e.createOscillator();f.type="sine",f.frequency.value=4300;let p=e.createGain();p.gain.value=0;let x=e.createOscillator();x.type="square",x.frequency.value=28;let g=e.createGain();g.gain.value=.003,x.connect(g),g.connect(p.gain);let m=e.createOscillator();m.frequency.value=.3;let v=e.createGain();v.gain.value=.002,m.connect(v),v.connect(p.gain),f.connect(p),p.connect(t),f.start(),x.start(),m.start()}beep(e=3){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,0),s=e<1.2?1480:860;this.tone(t,.04,"square",s,s,e<1.2?.1:.05,n)}_distort(e){let n=new Float32Array(256);for(let s=0;s<256;s++){let r=s/255*2-1;n[s]=Math.tanh(r*e)}return n}ensureMusic(){if(!this.ctx||this.musicBus)return;let e=this.ctx;this.musicBus=e.createGain(),this.musicBus.gain.value=.2,this.musicBus.connect(this.master),this.musicFilter=e.createBiquadFilter(),this.musicFilter.type="lowpass",this.musicFilter.frequency.value=1200,this.musicFilter.connect(this.musicBus),this.guitarShaper=e.createWaveShaper(),this.guitarShaper.curve=this._distort(14),this.guitarShaper.oversample="2x";let t=e.createBiquadFilter();t.type="lowpass",t.frequency.value=2400,this.guitarShaper.connect(t),t.connect(this.musicFilter),this.guitarIn=e.createGain(),this.guitarIn.gain.value=.2,this.guitarIn.connect(this.guitarShaper),this.musicOn=!0,this.musicPlaying=!1,this.musicMood="calm",this.musicLow=!1,this._nextMus=0,this._duckUntil=0,this._six=0}setMusicDetail(e){this.musicLow=!!e,this.guitarShaper&&(this.guitarShaper.oversample=e?"none":"2x")}setMusicOn(e){this.musicOn=!!e,this.musicBus&&this.musicBus.gain.setTargetAtTime(this.musicOn?.2:0,this.ctx.currentTime,.05)}musicStart(){this.init(),this.ensureMusic(),this.musicPlaying=!0,this._nextMus=0,this._six=0}musicStop(){this.musicPlaying=!1,this._nextMus=0}setMusicPhase(e){this.musicMood=e==="hot"||e==="round"?"hot":"calm",this.musicFilter&&this.musicFilter.frequency.setTargetAtTime(this.musicMood==="hot"?this.musicLow?1600:3400:1e3,this.ctx.currentTime,.35)}pumpMusic(){if(!this.ctx||!this.musicPlaying||!this.musicOn||this.muted||this.ctx.state!=="running")return;this.ensureMusic();let e=this.ctx.currentTime,t=e+(this.musicLow?.28:.2);(!this._nextMus||this._nextMus<e-.05)&&(this._nextMus=e+.04);let n=this.musicMood==="hot"?146:96,s=60/n/4;e<(this._duckUntil||0)?this.musicBus.gain.setTargetAtTime(.05,e,.04):this.musicBus.gain.setTargetAtTime(this.musicMood==="hot"?.24:.14,e,.25);let o=(c,a,h,u,d,f,p=this.musicFilter)=>this.tone(c,a,h,u,d,f,p,.004),l=(c,a,h,u,d,f)=>this.nz(c,a,h,u,d,f,this.musicFilter);for(;this._nextMus<t;)this._riffStep(o,l,this._nextMus,s,this._six++,this.musicMood==="hot",this.musicLow),this._nextMus+=s}_riffStep(e,t,n,s,r,o,l,c){let a=c||this.guitarIn,h=(r%16+16)%16,u=Math.floor(r/16)%4,f=[[164.81,246.94,41.2],[196,293.66,49],[146.83,220,36.71],[164.81,246.94,41.2]][u],p=o?h===0||h===3||h===6||h===10:h===0||h===7,x=o?h===4||h===12:h===8;if(p&&(e(n,.14,"sine",160,46,o?.72:.5),t(n,.018,"highpass",2400,700,.16)),x&&(t(n,l?.06:.1,"bandpass",1900,700,o?.32:.18),l||e(n,.04,"triangle",240,150,.07)),!l&&(o||h%2===0)){let m=o&&(h===6||h===14);t(n,m?.07:.018,"highpass",m?5500:8e3,4200,o?h%2?.045:.08:.03)}if((l?h===0:o?h%2===0:h===0||h===8||h===12)&&a){let m=l?s*10:o?s*1.5:s*5,v=o?.11:.06;t(n,.012,"highpass",3e3,1200,.05),e(n,m,"sawtooth",f[0],f[0]*.985,v,a),l||e(n,m,"sawtooth",f[1]*1.005,f[1],v*.55,a)}if(h===0||o&&!l&&(h===8||h===11)){let m=o&&h!==0,v=m?f[2]*1.5:f[2]*1.04,M=f[2];e(n,m?s*4:s*(o?7:12),"sine",v,M,o?.42:.26)}}duck(e){this.ctx&&(this._duckUntil=this.ctx.currentTime+e)}lineFor(e,t,n){let s=["Wave one. The yard is waking.","Wave two. They heard the metal.","Wave three. Do not blink.","Wave four. The fence is tired.","Wave five. They smell you."],r=["The yard remembers.","More of them. Always more.","Keep the lights on."],o={fuel:["The cans are bleeding. Bring them in.","Fuel the generator. They hate the light."],bus:["Board the bus. It still knows the road.","Four windows, then the barn."],carb:["Something in the back lot is missing a heart.","Find the carburetor. It is still warm."],radio:["Hold the signal. They hunt the quiet.","Stay on the mast."],parts:["The side yard wants its pieces back.","Scrap. Three pieces. Do not linger."],clear:["Lot D is full of them. Empty it.","Clear the barn. Leave none standing."]},l={fuel:"The generator drinks. They smelled it.",bus:"The bus is boarded. They know.",carb:"The heart is back in the engine.",radio:"The signal held. Something answered.",parts:"The yard has its pieces.",clear:"Lot D is quiet. For now."};if(e==="wave")return n>=1&&n<=5?s[n-1]:r[(n||0)%r.length];if(e==="done")return l[t]||"The yard remembers.";let c=o[t]||r;return c[(n||0)%c.length]}announce(e){e&&(this._aq=this._aq||[],this._aq.push(String(e)),this._ab||this._drainAnn())}_drainAnn(){let e=(this._aq||[]).shift();if(!e){this._ab=!1;return}this._ab=!0;let t=Math.min(3.4,.6+e.length*.04);if(this.duck(t+.2),this.ctx&&!this.muted&&this.ctx.state==="running"&&this.growl(t),!this.muted&&typeof speechSynthesis<"u")try{let n=new SpeechSynthesisUtterance(e);n.rate=.76,n.pitch=.42,n.volume=.8,speechSynthesis.cancel(),speechSynthesis.speak(n)}catch{}setTimeout(()=>this._drainAnn(),t*1e3+160)}growl(e){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,.55),s=this.ctx.createWaveShaper(),r=new Float32Array(64);for(let l=0;l<64;l++){let c=l/63*2-1;r[l]=Math.tanh(c*4)}s.curve=r;let o=this.ctx.createBiquadFilter();o.type="bandpass",o.Q.value=6,o.frequency.setValueAtTime(180,t),o.frequency.linearRampToValueAtTime(420,t+e*.45),o.frequency.linearRampToValueAtTime(140,t+e),this.tone(t,e,"sawtooth",70,48,.22,s),s.connect(o),o.connect(n),this.nz(t,e*.8,"bandpass",500,220,.08,n,3)}async renderSample(e=8){let n=new OfflineAudioContext(1,Math.floor(22050*e),22050),s=n.createGain();s.gain.value=.85,s.connect(n.destination);let r=n.createBiquadFilter();r.type="lowpass",r.frequency.value=3400,r.connect(s);let o=n.createWaveShaper();o.curve=this._distort(14);let l=n.createBiquadFilter();l.type="lowpass",l.frequency.value=2400,o.connect(l),l.connect(r);let c=n.createGain();c.gain.value=.2,c.connect(o);let a=22050*2,h=n.createBuffer(1,a,22050),u=h.getChannelData(0);for(let E=0;E<a;E++)u[E]=Math.random()*2-1;let d=(E,S,I,F,D,P,N=r)=>{let R=n.createOscillator();R.type=I,R.frequency.setValueAtTime(Math.max(20,F),E),R.frequency.exponentialRampToValueAtTime(Math.max(20,D),E+Math.max(.02,S));let U=n.createGain();U.gain.setValueAtTime(1e-4,E),U.gain.linearRampToValueAtTime(P,E+.006),U.gain.exponentialRampToValueAtTime(8e-4,E+S),R.connect(U),U.connect(N),R.start(E),R.stop(E+S+.03)},f=(E,S,I,F,D,P)=>{let N=n.createBufferSource();N.buffer=h;let R=n.createBiquadFilter();R.type=I,R.frequency.setValueAtTime(F,E),R.frequency.exponentialRampToValueAtTime(Math.max(40,D),E+S);let U=n.createGain();U.gain.setValueAtTime(P,E),U.gain.exponentialRampToValueAtTime(8e-4,E+S),N.connect(R),R.connect(U),U.connect(r),N.start(E),N.stop(E+S+.02)},p=e*.62,x=.05,g=0;for(;x<e-.05;){let E=x<p,S=60/(E?146:96)/4;this._riffStep(d,f,x,S,g++,E,!1,c),x+=S}let m=await n.startRendering(),v=m.getChannelData(0),M=v.length,_=new ArrayBuffer(44+M*2),b=new DataView(_),T=(E,S)=>{for(let I=0;I<S.length;I++)b.setUint8(E+I,S.charCodeAt(I))};T(0,"RIFF"),b.setUint32(4,36+M*2,!0),T(8,"WAVE"),T(12,"fmt "),b.setUint32(16,16,!0),b.setUint16(20,1,!0),b.setUint16(22,1,!0),b.setUint32(24,22050,!0),b.setUint32(28,22050*2,!0),b.setUint16(32,2,!0),b.setUint16(34,16,!0),T(36,"data"),b.setUint32(40,M*2,!0);for(let E=0;E<M;E++){let S=Math.max(-1,Math.min(1,v[E]));b.setInt16(44+E*2,S<0?S*32768:S*32767,!0)}let L="",y=new Uint8Array(_);for(let E=0;E<y.length;E++)L+=String.fromCharCode(y[E]);return btoa(L)}};var ke=null,Qt=null,ri=null,r0=new URLSearchParams(location.search),WT=r0.has("touch")||matchMedia("(pointer:coarse)").matches&&"ontouchstart"in window||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),Qp=r0.get("quality")||(()=>{try{return localStorage.getItem("vwz_q")||"auto"}catch{return"auto"}})(),XT=Qp==="high"||Qp==="medium"||Qp==="auto"&&!WT,qT=r0.has("oldz")?Promise.resolve(null):Yp(XT).catch(i=>(console.warn("zombie kit failed, using baked pack",i),null));await Xf(["cars"]);var rd=await qT;rd||await Xf(["zombies"]);var Jl=200,YT=4.5,ZT=.38*Jl,Ql=.4,Yx=.5,Zx=20,Kx=.5,KT=40,re=i=>document.getElementById(i),li=new URLSearchParams(location.search),un=li.has("touch")||matchMedia("(pointer:coarse)").matches&&"ontouchstart"in window||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);document.body.classList.toggle("touch",un);var Ee=new td;try{Ee.muted=localStorage.getItem("vwz_mute")==="1"}catch{}var Gs=re("c"),oi=new uu({canvas:Gs,antialias:!un,powerPreference:"high-performance",preserveDrawingBuffer:li.has("test")});oi.toneMapping=Gr;oi.toneMappingExposure=1.05;oi.outputColorSpace=lt;oi.shadowMap.type=zr;var ln=new wr,jT=3812412;ln.fog=new Ca(jT,.026);var n0=un?76:72,Jt=new xn(n0,1,.05,700);Jt.rotation.order="YXZ";ln.add(Jt);var ps=li.get("quality")||(()=>{try{return localStorage.getItem("vwz_q")||"auto"}catch{return"auto"}})(),zn=ps==="high"?2:ps==="medium"?1:ps==="low"||un?0:2,ra=Bg(un?256:512),xs=op(li.get("map")||(()=>{try{return localStorage.getItem("vwz_map")}catch{return null}})()),ai=ap(lp(li.get("mode")||(()=>{try{return localStorage.getItem("vwz_mode")}catch{return null}})()),1),Mt=ex(ln,ra,zn,xs.id),_t=new Qu(ln,ra,zn),ks=new Vl(ra,260,{R:20,y0:.3,y1:6,size:.07,alpha:.22});ln.add(ks.points);var dr=new Vl(ra,46,{R:55,y0:.4,y1:2.2,size:5.5,alpha:.045,col:[.55,.5,.62],additive:!1,speed:.7});ln.add(dr.points);var Nt=new Pu(ln,Mt,zn),Dn=new Fu(ln,Mt,zn),Hs=Qg({scene:ln,world:Mt,fx:_t,zombies:Nt,sfx:Ee,blood:(i,e,t)=>Qr.blood(i,e,t),get P(){return C},get birds(){return Dn},onKill:i=>{ke?.on||Qt?.onKill(i)},onBirdKill:i=>ev(i,{p:i.pos,n:{x:0,y:1,z:0},head:!1}),onSelf:i=>{C.dead||(C.hp-=i,C.lastHit=q.time,C.hp<=0&&fd())}});rd?(Zp(Nt,rd),window.__hd={kit:rd.hi?"hi":"lo"}):(window.__hd=Ex(Nt),Ix(Nt));Nt.cam=Jt;var Gx,$T=i=>(Gx||(Gx=kx(Mt,Nt,C)))(i),ec=new wr,sa=new ed(oi,ln,Jt,ec),Qr=Bx({renderer:oi,scene:ln,world:Mt,viewScene:ec});Nt.onBlood=Qr.blood;var jx=!1;function $x(i){i>0&&Nt.kit&&!Nt.kit.hi&&!Nt._kitLoading&&(Nt._kitLoading=!0,Yp(!0).then(e=>{Zp(Nt,e),window.__hd={kit:"hi"}}).catch(e=>console.warn(e)))}{let i=new Us(oi),e=new wr,t=new me(Mt.sky.geometry,Mt.sky.material.clone());t.scale.setScalar(.12),e.add(t);let n=i.fromScene(e,0,.1,100);ln.environment=n.texture,ln.environmentIntensity=.45,ec.environment=n.texture,ec.environmentIntensity=.9,i.dispose()}var qi=new Fr(14674687,40,55,.46,.75,1.25);qi.position.set(.16,-.1,-.1);qi.target.position.set(.16,-.1,-10);Jt.add(qi,qi.target);qi.shadow.mapSize.set(1024,1024);qi.shadow.camera.near=.3;qi.shadow.camera.far=40;qi.shadow.bias=-6e-4;qi.shadow.normalBias=.03;var ur=new is(16758886,0,20,2);Jt.add(ur);ur.position.set(.15,-.05,-3.2);var Yi=new me(new hi(3.4,14,28,1,!0),new St({transparent:!0,depthWrite:!1,blending:an,side:It,uniforms:{c:{value:new pe(.75,.85,1)},k:{value:.05}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(vy,1.2)*pow(f,2.)*k); }"}));Yi.geometry.translate(0,-7,0);Yi.geometry.rotateX(-Math.PI/2);Yi.position.set(.16,-.1,-.2);Yi.userData.noAO=!0;Yi.renderOrder=6;Jt.add(Yi);var fr=new Ce;fr.matrixAutoUpdate=!1;ec.add(fr);var JT=new Br(12175615,4864556,1.5),i0=new Ds(16773341,2.2),hd=new is(16758886,0,3,2);i0.position.set(1.5,2,1);fr.add(JT,i0,i0.target,hd);hd.position.set(.15,-.05,-.9);var jl={},ms=new ei(new qn({map:ra.glow,color:new pe(6,4,1.6),blending:an,depthWrite:!1,transparent:!0,fog:!1}));ms.scale.setScalar(.3);ms.visible=!1;ms.userData.noAO=!0;function QT(i){i.querySelectorAll("[data-w]").forEach(e=>{e.style.width=e.dataset.w+"%"})}function ew(i){if(!jl[i]){let e=Cl(i);e.visible=!1,fr.add(e),jl[i]=e}return jl[i]}var C={x:0,z:12,yaw:0,pitch:0,vx:0,vz:0,hp:Jl,maxHp:Jl,lastHit:-99,pts:500,kills:0,heads:0,bob:0,rP:0,rY:0,shake:0,dmg:0,flashlight:!0,slots:[],cur:0,fireCd:0,reloadT:0,reloadTot:0,switchT:0,kick:0,mv:0,sprint:!1,heat:0,dead:!1,deadT:0,sx:0,sy:0,nades:1},q={state:"menu",time:0,runTime:0,round:0,toSpawn:0,spawnT:0,interT:0,phase:"wait",drops:0,lastDrop:-99,kills:0,double:0,powers:[],ups:[],repairT:0,healBeat:0,lastMed:-99,orbit:0,menuSpawn:0,flashT:0,muzzleT:0,nadeCd:0,toBird:0,birdT:0},dt={f:0,s:0,l:0,r:0,fire:!1,reload:!1,interact:!1,interactEdge:!1,sprint:!1},ld=i=>({id:i,mag:$t[i].mag,reserve:$t[i].reserve}),pr=()=>C.slots[C.cur];function ud(i){zn=i;let e=window.devicePixelRatio||1,t=i===2?Math.min(e,1.75):i===1?Math.min(e,1.25):Et(e*.7,.6,1);oi.setPixelRatio(t),sa.pr=t,oi.shadowMap.enabled=i>0,oi.shadowMap.needsUpdate=!0,sa.build(["direct","bloom","full"][i]),nc(),Mt.setTier(i),Nt.setTier(i),Dn.setTier(i),Qr.setTier(i),jx&&(Qr.load(i),$x(i)),Nt.max=xs.cap[i>0?1:0],_t.tier=i,ks.points.visible=i>0,dr.points.visible=!0,dr.o.alpha=i===0?.03:.045,Yi.visible=i>0&&C.flashlight,ln.environmentIntensity=i===0?.45:.3,qi.castShadow=i===2;for(let n of Nt.list)n.root.traverse(s=>{s.isMesh&&(s.castShadow=i>0)});ln.traverse(n=>{n.material&&!Array.isArray(n.material)&&(n.material.needsUpdate=!0)}),document.body.classList.toggle("lowq",i===0),Ee.setMusicDetail?.(i===0||un),oi.toneMappingExposure=i===0?1.15:1.05,re("fx-damage").style.display=i===0?"":"none"}function nc(){let i=window.innerWidth,e=window.innerHeight;oi.setSize(i,e,!1),Gs.style.width=i+"px",Gs.style.height=e+"px",Jt.aspect=i/e,Jt.fov=i/e<.9?n0+14:n0,Jt.updateProjectionMatrix(),sa.setSize(i,e,oi.getPixelRatio()),_t.setScale(e*oi.getPixelRatio(),Jt.fov),dr.ps.uniforms.uScale.value=_t.soft.uniforms.uScale.value,ks.ps.uniforms.uScale.value=_t.soft.uniforms.uScale.value}window.addEventListener("resize",nc);window.visualViewport?.addEventListener("resize",nc);screen.orientation?.addEventListener?.("change",()=>setTimeout(nc,120));var $l=document.documentElement,tw=!!($l.requestFullscreen||$l.webkitRequestFullscreen);document.body.classList.toggle("nofs",!tw);async function Jx(){try{!document.fullscreenElement&&!document.webkitFullscreenElement&&await($l.requestFullscreen?$l.requestFullscreen({navigationUI:"hide"}):$l.webkitRequestFullscreen?.())?.catch?.(()=>{})}catch{}try{await screen.orientation?.lock?.("landscape")}catch{}setTimeout(nc,150)}["btnFull","btnFull2"].forEach(i=>{let e=document.getElementById(i);e&&e.addEventListener("click",t=>{t.stopPropagation(),Jx()})});var Yl=0,od=0,ad=3;function nw(i){if(!(q.state!=="playing"||ps!=="auto"||li.has("noadapt"))){if(ad>0){ad-=i;return}if(Yl+=i,od++,Yl>=2.5){let e=od/Yl;Yl=0,od=0,e<28&&zn>0&&(ud(zn-1),ad=3,Mn("Graphics lowered for smoother play"))}}}var Lt={hp:-1,pts:-1,mag:-1,res:-1,name:"",prompt:"",round:-1,alt:"",lobby:!1},s0=0;function Mn(i){let e=re("toast");e.textContent=i,e.classList.add("on"),clearTimeout(s0),s0=setTimeout(()=>e.classList.remove("on"),2600)}function Xi(i,e=""){let t=+(document.body.dataset.mban||0)-performance.now();if(t>0){setTimeout(()=>Xi(i,e),t);return}let n=re("banner");n.innerHTML=i+(e?`<small>${e}</small>`:""),n.classList.remove("on"),n.offsetWidth,n.classList.add("on")}function eo(i,e,t){let n=document.createElement("span");n.textContent=i,e==="heal"?n.className="g":e&&(n.className="h"),n.style.setProperty("--x",X(-80,80)+"px"),n.style.top=X(10,50)+"px",re("pop").appendChild(n),setTimeout(()=>n.remove(),950)}function iw(){let i=Math.max(0,Math.round(C.hp));i!==Lt.hp&&(Lt.hp=i,re("hpFill").style.width=100*i/C.maxHp+"%",re("hpFill").classList.toggle("low",i<C.maxHp*Ql),re("hpNum").textContent=i);let e=a0();if(e!==Lt.med&&(Lt.med=e,re("medCue").classList.toggle("on",e)),C.pts!==Lt.pts){if(Lt.pts>=0&&C.pts>Lt.pts){let u=re("pts");u.classList.remove("bump"),u.offsetWidth,u.classList.add("bump")}Lt.pts=C.pts,re("pts").textContent=C.pts.toLocaleString()}let t=pr(),n=$t[t.id];n.name!==Lt.name&&(Lt.name=n.name,re("wName").textContent=n.name),t.mag!==Lt.mag&&(Lt.mag=t.mag,re("ammoMag").textContent=t.mag,re("ammoMag").classList.toggle("empty",t.mag===0)),t.reserve!==Lt.res&&(Lt.res=t.reserve,re("ammoRes").textContent="/ "+t.reserve);let s=C.slots[1-C.cur],r=s?$t[s.id].name+"  "+s.mag+"/"+s.reserve:"";r!==Lt.alt&&(Lt.alt=r,re("wAlt").textContent=r);let o=!!(ke?.on&&q.mpPhase==="lobby");if(o!==Lt.lobby&&(Lt.lobby=o,re("roundBox").classList.toggle("waiting",o),re("roundBox").querySelector(".lbl").textContent=o?"":"ROUND",o?re("roundNum").textContent="WAITING":Lt.round=-1),!o&&q.round!==Lt.round){Lt.round=q.round;let u=re("roundNum");u.textContent=q.round||1,u.classList.remove("pulse"),u.offsetWidth,u.classList.add("pulse")}if((C.nades||0)!==Lt.nades){Lt.nades=C.nades||0;let u=re("nadeCnt");u&&(u.textContent="BAIT "+Lt.nades)}let l=re("reloadBar");C.reloadT>0?(l.classList.add("on"),l.firstElementChild.style.width=100*(1-C.reloadT/C.reloadTot)+"%"):l.classList.remove("on");let c=Et(C.dmg,0,1);re("fx-damage").style.opacity=zn===0?Math.min(1,c+(C.hp<C.maxHp*Ql?.25:0)):0;let a=re("powers"),h="";q.double>0&&(h+=`<div class="pw pw2x glass${q.double<5?" blink":""}">2\xD7 CASH <b>${Math.ceil(q.double)}</b></div>`),a._h!==h&&(a._h=h,a.innerHTML=h)}function zs(i,e=!0){let t=re("prompt");i!==Lt.prompt&&(Lt.prompt=i,t.innerHTML=i,QT(t),t.classList.toggle("on",!!i))}function oa(){for(let e in jl)jl[e].visible=!1;let i=ew(pr().id);i.visible=q.state==="playing"||C.dead,i.scale.setScalar(un?.78:.9),i.add(ms),ms.position.copy(i.userData.muzzle.position).add(new O(0,0,-.04)),C.gun=i}function ia(i){i===C.cur||!C.slots[i]||C.switchT>0||(C.cur=i,C.reloadT=0,C.switchT=.32,oa(),Ee.click(0,2500,.3))}function tc(i){let e=C.slots.findIndex(t=>t&&t.id===i);if(e>=0){let t=C.slots[e];t.mag=$t[i].mag,t.reserve=$t[i].reserve;return}C.slots[1]?C.slots[C.cur]=ld(i):(C.slots[1]=ld(i),C.cur=1),C.reloadT=0,C.switchT=.4,oa()}function cd(){if(ke?.on&&q.mpPhase==="lobby")return;let i=pr(),e=$t[i.id];C.reloadT>0||C.switchT>0||i.mag>=e.mag||i.reserve<=0||(C.reloadTot=C.reloadT=e.perShell?e.reload*(e.mag-i.mag)+.4:e.reload,C.shellT=e.reload,ke?.on&&ke.send({t:"reload",w:i.id}),Ee.reload(e.perShell?"pistol":i.id))}function sw(){let i=pr(),e=$t[i.id];if(ke?.on){C.reloadT=0,e.perShell&&Ee.pump();return}let t=Math.min(e.mag-i.mag,i.reserve);i.mag+=t,i.reserve-=t,C.reloadT=0,e.perShell&&Ee.pump()}var Wl=new O,Xl=new O,ql=new O,nd=new O,id=new O,Vx=new O,e0=new O;function rw(i){let e=C.yaw+C.rY,t=C.pitch+C.rP;return i.set(-Math.sin(e)*Math.cos(t),Math.sin(t),-Math.cos(e)*Math.cos(t))}function o0(){return 1.7-(C.dead?Math.min(1.1,C.deadT*1.6):0)+Math.sin(C.bob*2)*.035*C.mv}function Qx(){if(ke?.on&&q.mpPhase==="lobby")return;let i=pr(),e=$t[i.id];if(i.mag<=0){Ee.empty(),C.fireCd=.25,cd();return}i.mag--,C.fireCd=60/e.rpm,C.kick=Math.min(1.6,C.kick+1),C.heat=Math.min(1,C.heat+.12),Ee.shot(e.snd),rw(Xl),Wl.set(C.x,o0(),C.z),ql.set(Math.cos(C.yaw),0,-Math.sin(C.yaw)),nd.crossVectors(ql,Xl).normalize(),ql.crossVectors(Xl,nd).normalize();let t=e.spread*(1+C.mv*.9+C.heat*.8),n=Xl.clone();Jt.updateMatrixWorld(!0);let s=C.gun.userData.muzzle;if(e.akimbo&&C.gun.userData.muzzles){i.side=i.side?0:1,s=C.gun.userData.muzzles[i.side],C.gun.userData.slideSide=i.side;let c=s.parent;C.gun.userData.flash&&c&&C.gun.userData.flash.position.set(c.position.x+s.position.x,c.position.y+s.position.y,c.position.z+s.position.z)}s.getWorldPosition(id),C.gun.userData.eject.getWorldPosition(Vx);let r=new Map,o=0,l=[];for(let c=0;c<e.pellets;c++){let a=X(Wt),h=Math.sqrt(Math.random())*t,u=Xl.clone().copy(n).addScaledVector(ql,Math.cos(a)*h).addScaledVector(nd,Math.sin(a)*h).normalize();l.push([+u.x.toFixed(4),+u.y.toFixed(4),+u.z.toFixed(4)]);let d=Nt.rayHit(Wl,u,e.range),f=ke?.on?null:Dn.rayHit(Wl,u,e.range),p=Mt.ray(Wl,u,e.range),x=e.range,g=null,m=null,v=[d,f].filter(Boolean).sort((_,b)=>_.t-b.t)[0];v&&(!p||v.t<p.t)?(x=v.t,m=v):p&&(x=p.t,g=p.n);let M=new O().copy(u).multiplyScalar(x).add(Wl);if((c<(e.pellets>1?3:1)||_t.tier>0)&&_t.tracer(id,M,e.pellets>1?.006:.011),m){let _=r.get(m.z)||{dmg:0,head:!1,p:M,n:u.clone().negate()},b=e.pellets>1?Et(1.25-m.t/16,.25,1):1;_.dmg+=e.dmg*(m.head?e.head:1)*b,_.head=_.head||m.head,_.p=M,r.set(m.z,_)}else g&&o<4&&(o++,e0.set(g.x,g.y,g.z),_t.sparks(M,e0,7),_t.dust(M,e0,2))}ur.intensity=55,hd.intensity=6,q.muzzleT=.06,ms.visible=!0;{let c=C.gun.userData.flash;c&&(c.visible=!0,c.rotation.z=X(Wt),c.scale.setScalar(X(.8,1.3)*(e.id==="shotgun"?1.5:1))),C.gun.userData.slideT=1}if(ms.material.rotation=X(Wt),ms.scale.setScalar(X(.25,.42)*(e.id==="shotgun"?1.4:1)),_t.flash(id,n),_t.smoke(id,n,1),_t.maxCas){let c=new O().copy(ql).multiplyScalar(X(1.2,2.4)).addScaledVector(nd,X(1.2,2.2)).addScaledVector(n,X(-.3,.5));_t.casing(Vx,c)}if(C.rP+=e.kick*X(.85,1.15),C.rY+=X(-1,1)*e.kick*.45,C.shake=Math.min(1,C.shake+e.shake*.5),e.perShell===!0&&i.mag>0&&setTimeout(()=>Ee.pump(),260),ke?.on){ke.send({t:"shot",w:i.id,dirs:l});for(let[c,a]of r)_t.blood(a.p,a.n,a.head?14:8),Ee.zhit(gs(c.pos),a.head)}else for(let[c,a]of r){if(c.kind==="bird"){aw(c,a);continue}let h=Nt.damage(c,a.dmg,a.head,a.p,a.n);if(!h)continue;let u=q.double>0?2:1;Ee.zhit(gs(c.pos),a.head),_t.blood(a.p,a.n,a.head?14:8),_t.sparks(a.p,a.n,2);let d=10*u,f=re("hitm");f.classList.remove("on","kill"),f.offsetWidth,f.classList.add("on"),Ee.tick(!1),h.killed&&(d=(a.head?100:c.value)*u,C.kills++,q.kills++,a.head&&C.heads++,f.classList.add("kill"),Ee.tick(!0),Ee.zdie(gs(c.pos),.5),_t.blood(a.p,a.n,26,1.4),_t.dust(new O(c.pos.x,.3,c.pos.z),{x:0,y:1,z:0},5),C.shake=Math.min(1,C.shake+.1),tv(c),l0(c),Qt.onKill(c)),setTimeout(()=>f.classList.remove("on"),h.killed?280:190),C.pts+=d,eo("+"+d,a.head&&h.killed)}i.mag===0&&!C.reloadT&&setTimeout(()=>q.state==="playing"&&cd(),220)}var gs=i=>{let e=i.x-C.x,t=i.z-C.z,n=Math.hypot(e,t)||1;return(e*Math.cos(C.yaw)-t*Math.sin(C.yaw))/n};function ow(i){let e=re("hitm");e.classList.remove("on","kill"),e.offsetWidth,e.classList.add("on"),i&&e.classList.add("kill"),setTimeout(()=>e.classList.remove("on"),i?280:190)}function aw(i,e){let t=Dn.damage(i,e.dmg,e.head);t&&(Ee.birdHit(gs(i.pos)),_t.blood(e.p,e.n,e.head?10:6),_t.feathers(e.p,e.n,e.head?8:5),ev(i,e,t))}function ev(i,e,t){t||(t={killed:i.state==="dying"||i.hp<=0,head:!!e.head});let n=q.double>0?2:1,s=10*n;ow(t.killed),Ee.tick(t.killed),t.killed&&(s=(e.head?70:i.value)*n,C.kills++,q.kills++,e.head&&C.heads++,Ee.birdDie(gs(i.pos)),_t.blood(e.p||i.pos,e.n||{x:0,y:1,z:0},22,1.2),_t.feathers(i.pos,e.n||{x:0,y:1,z:0},22),C.shake=Math.min(1,C.shake+.08),tv(i),l0(i),ke?.on||Qt?.onKill(i)),C.pts+=s,eo("+"+s,e.head&&t.killed)}function tv(i){q.round<2||q.drops>=ai.maxDrops||q.time-q.lastDrop<18||Math.random()<.05*ai.drop&&ic(Ln(["ammo","double","nuke"]),i.pos.x,i.pos.z)}var Wi={ammo:{name:"FULL MAGS",col:[.3,.7,2.4],sub:"All ammo refilled",hex:"#6bb8ff"},double:{name:"2\xD7 CASH",col:[3,2.2,.4],sub:"Double points for 30s",hex:"#ffd36b"},nuke:{name:"KABOOM",col:[3,.4,.4],sub:"Every zombie goes down",hex:"#ff6b6b"},health:{name:"MED KIT",col:[.25,2.6,.9],sub:"+50% health",hex:"#4dffb0"}};function ic(i,e,t){let n=Wi[i].col,s=new Ce;s.position.set(e,1,t);let r=i==="health",o;if(r){let d=new nt({color:new pe(...n),toneMapped:!1});o=new Ce,o.add(new me(new ot(.46,.14,.14),d),new me(new ot(.14,.46,.14),d),new me(new ot(.14,.14,.46),d)),o.traverse(f=>f.userData.noAO=!0)}else o=new me(new qa(.28,0),new nt({color:new pe(...n),toneMapped:!1}));o.userData.noAO=!0;let l=document.createElement("canvas");l.width=256,l.height=64;let c=l.getContext("2d");c.font="900 40px system-ui, sans-serif",c.textAlign="center",c.fillStyle=Wi[i].hex,c.shadowColor=Wi[i].hex,c.shadowBlur=14,c.fillText(Wi[i].name,128,44);let a=new ei(new qn({map:new Vt(l),transparent:!0,depthWrite:!1,fog:!1}));a.scale.set(1.5,.375,1),a.position.y=.6,a.userData.noAO=!0;let h=new ei(new qn({map:ra.glow,color:new pe(n[0]*.55,n[1]*.55,n[2]*.55),blending:an,depthWrite:!1,transparent:!0}));h.scale.setScalar(1.25),h.userData.noAO=!0;let u=new me(new Bt(.12,.12,12,8,1,!0),new nt({color:new pe(n[0]*.3,n[1]*.3,n[2]*.3),transparent:!0,opacity:.35,blending:an,depthWrite:!1}));u.position.y=5,u.userData.noAO=!0,s.add(o,a,h,u),ln.add(s),q.ups.push({type:i,g:s,core:o,label:a,t:r?KT:28,x:e,z:t}),r?q.lastMed=q.time:(q.drops++,q.lastDrop=q.time),Ee.spawnPower()}function a0(){return q.state==="playing"&&!C.dead&&C.hp<=C.maxHp*Yx&&q.time-q.lastMed>=Zx&&!q.ups.some(i=>i.type==="health")}function l0(i){a0()&&ic("health",i.pos.x,i.pos.z)}function nv(i){if(i.type==="health"){let t=C.maxHp*Kx,n=C.hp;C.hp=Math.min(C.maxHp,C.hp+t),C.lastHit=Math.max(C.lastHit,q.time-1),Ee.medkit(),Xi(Wi.health.name,"+"+Math.round(C.hp-n)+" health"),eo("+"+Math.round(C.hp-n)+" HP","heal"),ln.remove(i.g),_t.glowBurst(new O(i.x,1,i.z),...Wi.health.col.map(s=>s*.7),24,4);return}Ee.power(i.type);let e=0;if(Xi(Wi[i.type].name,Wi[i.type].sub),i.type==="ammo")for(let t of C.slots)t&&(t.mag=$t[t.id].mag,t.reserve=$t[t.id].reserve);else if(i.type==="double")q.double=30;else if(i.type==="nuke"){let t=Nt.killAll(),n=Dn.killAll();for(let s of t)ke?.on||Qt.onKill(s),_t.blood(new O(s.pos.x,1.2,s.pos.z),{x:0,y:1,z:0},22,1.4),_t.glowBurst(new O(s.pos.x,1.2,s.pos.z),3,1.5,.4,10,5);for(let s of n)ke?.on||Qt.onKill(s),_t.blood(s.pos,{x:0,y:1,z:0},16,1.1),_t.feathers(s.pos,{x:0,y:1,z:0},16);C.pts+=400*(q.double>0?2:1),Ee.boom(),C.shake=1,re("fx-flash").style.transition="none",re("fx-flash").style.opacity=.85,requestAnimationFrame(()=>{re("fx-flash").style.transition="opacity 1.2s",re("fx-flash").style.opacity=0}),q.kills+=t.length,C.kills+=t.length}ln.remove(i.g),_t.glowBurst(new O(i.x,1,i.z),...Wi[i.type].col.map(t=>t*.7),24,4)}Qt=Jg({world:Mt,P:C,G:q,sfx:Ee,banner:Xi,toast:Mn,popText:eo,spawnPower:ic,weapons:$t,phase:()=>ke?.on?q.mpPhase:q.phase});var Jr={};function lw(i){if(!Jr[i]){let e=Cl(i,!1);e.scale.setScalar(1.6),e.rotation.y=0,e.visible=!1,Mt.crate.hold.add(e),Jr[i]=e}return Jr[i]}function cw(){let i=Mt.crate;if(i.state==="idle"){if(C.pts<i.price){Ee.deny(),Mn("Not enough points");return}C.pts-=i.price,Ee.cash(),Ee.open(),Ee.jingle(4),i.state="roll",i.t=0,i.pick=Ln(Rl.filter(e=>!C.slots.some(t=>t&&t.id===e)).concat(["smg"].filter(()=>!1))),i.pick=i.pick||Ln(Rl)}else i.state==="ready"&&(tc(i.weapon),Ee.cash(),Ee.click(0,2e3,.5),Xi($t[i.weapon].name.toUpperCase()),dd())}function dd(){let i=Mt.crate;i.state="idle",i.t=0;for(let e in Jr)Jr[e].visible=!1;i.model=null}function hw(i){let e=Mt.crate,t=e.state==="idle"?0:-1.25;if(e.lid.rotation.x+=(t-e.lid.rotation.x)*Math.min(1,i*6),e.state==="roll"){e.t+=i;let n=Math.floor(e.t/.14)%Rl.length,s=e.t>3.6?e.pick:Rl[n];for(let o in Jr)Jr[o].visible=!1;let r=lw(s);r.visible=!0,e.model=r,e.t>3.6&&(e.state="ready",e.weapon=e.pick,e.t=0,Ee.power("ammo"))}else e.state==="ready"&&(e.t+=i,e.t>9&&(Ee.open(),dd(),Mn("The toolbox slammed shut")))}function uw(i){return Math.max(3,Math.round((6+i*2.3+i*i*.12)*ai.count))}function Wx(i){if(q.round=i,q.toSpawn=uw(i),q.brutes=i>=5?i%5===0?Math.min(4,1+(i/5|0)):i>=7?1:0:0,q.brutes=Math.round(q.brutes*ai.brute),q.phase="round",q.spawnT=1.5,q.drops=0,q.toBird=0,q.birdT=1.8,!ke?.on&&i>=Bu){let n=_x(i);q.toBird=Math.min(Dn.max,yx(i,ai.count,n)),n&&(q.toSpawn=Math.max(4,q.toSpawn-Math.round(q.toBird*.5)))}(C.nades||0)<1&&(C.nades=1);let e=Ee.lineFor("wave","",i);Ee.round(i),Ee.setMusicPhase("hot"),Xi("ROUND "+i,e),ke?.on||Ee.announce(e);let t=re("roundNum");t.classList.remove("pulse"),t.offsetWidth,t.classList.add("pulse")}function dw(){let i=Yo(Mt.doors);return Mt.windows.filter(e=>i.has(e.area))}function fw(i){if(q.phase!=="round"||q.toSpawn<=0||(q.spawnT-=i,q.spawnT>0))return;if(Nt.alive>=Nt.max){q.spawnT=.3;return}let e=dw();e.sort((r,o)=>(r.c.x-C.x)**2+(r.c.z-C.z)**2-((o.c.x-C.x)**2+(o.c.z-C.z)**2));let t=Math.random()<.6?e[Math.min(e.length-1,Math.random()*2|0)]:Ln(e),n=q.brutes>0&&q.toSpawn<=q.brutes,s=Nt.spawn(t,q.round,n);s&&(q.toSpawn--,s.hp=s.maxHp=s.maxHp*ai.hp,s.speed=Math.min(6.5,s.speed*ai.speed),s.dmg=Math.round(s.dmg*ai.dmg)),q.spawnT=Math.max(.3,2-q.round*.13)*X(.7,1.2)*ai.spawnGap}function pw(i){if(!(ke?.on||q.phase!=="round"||q.toBird<=0)&&(q.birdT-=i,!(q.birdT>0))){if(Dn.alive>=Dn.max){q.birdT=.35;return}Dn.spawn(q.round)&&q.toBird--,q.birdT=X(.3,.7)}}function iv(){let i=null,e=(s,r,o)=>{r<o&&(!i||r<i.d)&&(i={...s,d:r})};for(let s of Mt.windows)s.count<6&&e({type:"win",w:s},Math.hypot(C.x-s.in.x,C.z-s.in.z),2.1);for(let s of Mt.buys)e({type:"buy",b:s},Math.hypot(C.x-s.pos.x,C.z-s.pos.z),1.9),s.back&&Math.hypot(C.x-s.pos.x,C.z-s.pos.z)<2.15&&e({type:"buy",b:s},Math.hypot(C.x-s.back.x,C.z-s.back.z),1.9);for(let s of Mt.doors)if(!s.open){let r=s.stand?Object.values(s.stand):[s.pos];for(let o of r)e({type:"door",door:s},Math.hypot(C.x-o.x,C.z-o.z),2.4)}let t=Qt&&Qt.focus(C.x,C.z);t&&e(t,t.d,t.d+.01);let n=Mt.crate;return(n.state==="idle"||n.state==="ready")&&e({type:"crate"},Math.hypot(C.x-n.x,C.z-n.z),2.2),i}function sv(i,e,t){if(ke?.on)return Sw(i,e,t);if(i.type==="win"){e&&(q.repairT+=t,q.repairT>.5&&(q.repairT=0,Mt.addPlank(i.w)&&(Ee.repair(),C.pts+=10*(q.double>0?2:1),eo("+10"))));return}if(i.type==="job"&&i.hold){e&&(q.repairT+=t,q.repairT>.5&&(q.repairT=0,Qt.use()));return}if(dt.interactEdge)if(i.type==="buy"){if(i.b.id==="nade"){if((C.nades||0)>=2){Mn("Bait pouch is full");return}if(C.pts<i.b.price){Ee.deny(),Mn("Not enough points");return}C.pts-=i.b.price,C.nades++,Ee.cash();return}let n=C.slots.find(r=>r&&r.id===i.b.id),s=n?Math.floor(i.b.price/2):i.b.price;if(n&&n.mag===$t[n.id].mag&&n.reserve===$t[n.id].reserve){Mn("Ammo already full");return}if(C.pts<s){Ee.deny(),Mn("Not enough points");return}C.pts-=s,Ee.cash(),tc(i.b.id)}else if(i.type==="door"){let n=i.door,s=Qt.price(n);if(C.pts<s){Ee.deny(),Mn("Not enough points");return}C.pts-=s,Ee.cash(),Ee.door(),n.open=!0,Xi(n.id==="AB"?"GATE OPEN":n.name.toUpperCase(),n.blurb)}else i.type==="job"?Qt.use():i.type==="crate"&&cw()}function mw(i){if(!i)return zs("");let e="<kbd>E</kbd>",t=n=>`<span class="cost${C.pts<n?" poor":""}">${n}</span>`;if(i.type==="win")zs(`${e}Hold to repair barricade<span class="prog"><i data-w="${Math.round(i.w.count/6*100)}"></i></span>`);else if(i.type==="buy"){let n=C.slots.find(s=>s&&s.id===i.b.id);zs(n?`${e}Refill ${i.b.name}${t(Math.floor(i.b.price/2))}`:`${e}Buy ${i.b.name}${t(i.b.price)}`)}else if(i.type==="door"){let n=Qt.price(i.door);zs(`${e}${i.door.id==="AB"?"Open the gate":"Open "+i.door.name}${t(n)}`)}else i.type==="job"?zs(`${e}${i.hold?"Hold to board the window":i.name}`):i.type==="crate"&&zs(Mt.crate.state==="ready"?`${e}Take ${$t[Mt.crate.weapon].name}`:`${e}Lucky Toolbox${t(Mt.crate.price)}`)}function gw(i){let e=dt.f,t=dt.s,n=0,s=0;if(e||t){let a=Math.sin(C.yaw),h=Math.cos(C.yaw);n=-a*e+h*t,s=-h*e-a*t;let u=Math.hypot(n,s)||1;n/=u,s/=u}let r=Math.min(1,Math.hypot(e,t));C.sprint=(dt.sprint||r>.92&&un)&&e>.3&&C.reloadT<=0;let o=(C.sprint?6.6:4.5)*(C.switchT>0?.9:1)*r,l=Math.min(1,i*10);C.vx+=(n*o-C.vx)*l,C.vz+=(s*o-C.vz)*l,C.x+=C.vx*i,C.z+=C.vz*i,Mt.resolve(C,.42);let c=Math.hypot(C.vx,C.vz);C.mv=Et(c/4.5,0,1.4),C.bob+=c*i*1.7}function xw(i){C.fireCd>0&&(C.fireCd-=i),C.switchT>0&&(C.switchT-=i),C.heat=Math.max(0,C.heat-i*1.4),C.kick=Math.max(0,C.kick-i*8);let e=pr(),t=$t[e.id];if(C.reloadT>0){let n=C.reloadT;C.reloadT-=i,t.perShell?(C.shellT-=i,!ke?.on&&C.shellT<=0&&e.mag<t.mag&&e.reserve>0?(e.mag++,e.reserve--,C.shellT=t.reload,Ee.shell()):ke?.on&&C.shellT<=0&&(C.shellT=t.reload,Ee.shell()),dt.fire&&e.mag>0?C.reloadT=0:(e.mag>=t.mag||e.reserve<=0)&&(C.reloadT=0,Ee.pump())):C.reloadT<=0&&sw()}dt.fire&&C.fireCd<=0&&C.switchT<=0&&(C.reloadT<=0||t.perShell)&&!C.sprintBlock&&((t.auto||!C.fired)&&Qx(),C.fired=!0),dt.fire||(C.fired=!1),dt.reload&&(dt.reload=!1,cd())}function Xx(i,e){C.rP*=Math.exp(-i*9),C.rY*=Math.exp(-i*9),C.shake=Math.max(0,C.shake-i*2.2),C.dmg=Math.max(0,C.dmg-i*.8);let t=C.shake*C.shake,n=(Math.sin(e*61)+Math.sin(e*37.3))*.5,s=(Math.sin(e*53.1)+Math.cos(e*41))*.5,r=C.dead?Math.min(1,C.deadT*1.4):0,o=Et(C.vx*Math.cos(C.yaw)-C.vz*Math.sin(C.yaw),-6,6);Jt.position.set(C.x+n*t*.06,o0()+s*t*.05,C.z),Jt.rotation.set(Et(C.pitch+C.rP+s*t*.035-r*.4,-1.5,1.5),C.yaw+C.rY+n*t*.035,-o*.0045+n*t*.02+r*.9),Jt.updateMatrixWorld(!0),fr.matrix.copy(Jt.matrixWorld);let l=C.gun;if(!l)return;let c=l.userData.base,a=C.kick,h=a*.05,u=0,d=0,f=0,p=0,x=a*.04;if(f+=Math.cos(C.bob)*.006*C.mv,p+=Math.abs(Math.sin(C.bob))*.008*C.mv*-1,f+=-Et(C.sx,-1,1)*.02,p+=Et(C.sy,-1,1)*.02,C.sprint&&(u+=.45,h-=.25,p-=.05,f-=.03),C.reloadT>0&&!$t[pr().id].perShell){let M=1-C.reloadT/C.reloadTot,_=Math.sin(M*Math.PI);h-=_*.5,p-=_*.12,d+=_*.35,f-=_*.04}else if(C.reloadT>0){let M=Math.abs(Math.sin(e*6))*.5+.3;h-=.25,p-=.05,u+=.1*M}if(C.switchT>0){let M=C.switchT/.32;p-=Math.sin(Et(M,0,1)*Math.PI/2)*.35,h-=M*.5}let g=1-Math.exp(-i*18);if(l.userData.rx=Xe(l.userData.rx||0,h,g),l.userData.ry=Xe(l.userData.ry||0,u,g),l.userData.rz=Xe(l.userData.rz||0,d,g),l.rotation.set(l.userData.rx,l.userData.ry,l.userData.rz),l.userData.slideT>0){l.userData.slideT=Math.max(0,l.userData.slideT-i*14);let M=Math.sin(l.userData.slideT*Math.PI);if(l.userData.slides){let _=l.userData.slideSide||0;l.userData.slides[_]&&(l.userData.slides[_].position.z=M*.028)}else l.userData.slide&&(l.userData.slide.position.z=M*.028);l.userData.pump&&(l.userData.pump.position.z=0)}l.position.set(c.x+f,c.y+p,c.z+x),C.sx*=Math.exp(-i*8),C.sy*=Math.exp(-i*8),q.muzzleT>0&&(q.muzzleT-=i,q.muzzleT<=0&&(ms.visible=!1,C.gun?.userData.flash&&(C.gun.userData.flash.visible=!1))),ur.intensity*=Math.exp(-i*40),ur.intensity<.5&&(ur.intensity=0),hd.intensity=ur.intensity>0?ur.intensity/9:0;let m=re("cross"),v=6+$t[pr().id].spread*650*(1+C.mv*.9+C.heat*.8)*.5;m._sp!==Math.round(v)&&(m._sp=Math.round(v),m.style.setProperty("--s",m._sp+"px"),m.children[0].style.left=-(m._sp+9)+"px",m.children[0].style.top="-1px",m.children[1].style.left=m._sp+"px",m.children[1].style.top="-1px",m.children[2].style.top=-(m._sp+9)+"px",m.children[2].style.left="-1px",m.children[3].style.top=m._sp+"px",m.children[3].style.left="-1px")}function rv(i){if(C.dead||q.state!=="playing")return;C.hp-=i.dmg,C.lastHit=q.time,C.dmg=Math.max(C.dmg,.65+.35*(1-Math.max(0,C.hp)/C.maxHp)),C.shake=1,Ee.hurt();let e=i.pos.x-C.x,t=i.pos.z-C.z,n=Math.atan2(e,-t)- -C.yaw,s=re("fx-dir");s.style.display="block",s.firstElementChild.style.transform=`rotate(${n*180/Math.PI}deg)`,s.style.opacity=1,setTimeout(()=>s.style.opacity=0,500),setTimeout(()=>s.style.display="none",900),C.hp<=0&&fd()}function fd(){C.hp=0,C.dead=!0,C.deadT=0,!ke?.on&&Qt&&Qt.drop(),Ee.over(),dt.fire=!1,re("hud").classList.add("hud-dead"),zs(""),document.pointerLockElement&&document.exitPointerLock?.()}function c0(){try{return JSON.parse(localStorage.getItem("vwz_scores")||"[]")}catch{return[]}}function vw(i){let e=c0();e.push(i),e.sort((t,n)=>n.round-t.round||n.pts-t.pts);try{localStorage.setItem("vwz_scores",JSON.stringify(e.slice(0,5)))}catch{}return e.slice(0,5)}var Zl=null;function h0(){hs.top().then(i=>{hs.render(re("globalList"),i,localStorage.getItem("vwfest_nick")),hs.render(re("oGlobal"),i,localStorage.getItem("vwfest_nick"))})}function yw(){Zl={round:Math.max(1,q.round),pts:C.pts,kills:C.kills},re("nick").value=localStorage.getItem("vwfest_nick")||"",re("postMsg").textContent="",re("postMsg").className="postMsg",re("fPost").classList.toggle("hidden",!hs.hasToken()),re("bPost").disabled=!1,hs.hasToken()||(re("postMsg").textContent="Leaderboard offline: score saved on this device."),h0()}re("fPost").onsubmit=i=>{if(i.preventDefault(),!Zl)return;let e=re("nick").value.trim();re("bPost").disabled=!0;try{localStorage.setItem("vwfest_nick",e)}catch{}hs.submit(e,Zl.round,Zl.pts,Zl.kills).then(t=>{t.ok?(re("fPost").classList.add("hidden"),re("postMsg").className="postMsg ok",re("postMsg").textContent="Posted! You are #"+t.rank+" on the survivor board.",hs.render(re("oGlobal"),t.top,e),hs.render(re("globalList"),t.top,e)):(re("postMsg").textContent=t.error||"Could not post.",re("bPost").disabled=!1)})};function u0(i,e){i.innerHTML=e.length?e.map((t,n)=>`<li>Round <b>${t.round}</b> \xB7 ${t.kills} kills \xB7 ${t.pts.toLocaleString()} pts</li>`).join(""):'<li class="muted">No runs yet \u2014 be the first.</li>'}function _w(){Object.assign(C,{x:xs.spawn.x,z:xs.spawn.z,yaw:0,pitch:0,vx:0,vz:0,hp:Jl,lastHit:-99,pts:ai.startPts,kills:0,heads:0,rP:0,rY:0,shake:0,dmg:0,cur:0,fireCd:0,reloadT:0,switchT:0,kick:0,dead:!1,deadT:0,slots:[ld("pistol"),null],nades:1}),Object.assign(q,{time:0,runTime:0,round:0,toSpawn:0,toBird:0,birdT:0,phase:"wait",interT:2.6,drops:0,double:0,kills:0,repairT:0,lastMed:-99}),Nt.reset(),Dn.reset(),_t.reset();for(let i of q.ups)ln.remove(i.g);q.ups=[],dd(),Mt.crate.lid.rotation.x=0;for(let i of Mt.windows)for(;i.count<6;)Mt.addPlank(i);Lt.hp=Lt.pts=Lt.mag=Lt.res=-1,Lt.name=Lt.alt="",Lt.round=-1,re("hud").classList.remove("hud-dead"),Mt.resetDoors(),Qt&&Qt.reset(),Hs&&Hs.reset(),oa()}function aa(){if(Ee.init(),Ee.musicStart(),Ee.setMusicDetail(zn===0||un),_w(),hs.start(),q.state="playing",oa(),["menu","over","pause"].forEach(i=>re(i).classList.add("hidden")),re("hud").classList.remove("hidden"),re("touch").classList.toggle("hidden",!un),Yi.visible=zn>0&&C.flashlight,ad=3,Yl=0,od=0,!un&&!li.has("test")&&q.mpPhase!=="lobby")try{Gs.requestPointerLock?.()?.catch?.(()=>{})}catch{}else un&&q.mpPhase!=="lobby"&&Jx();Mn("Hold E at windows to repair \xB7 Open the gate for new guns")}function sc(){q.state!=="playing"||C.dead||(q.state="paused",re("pause").classList.remove("hidden"),dt.fire=!1,dt.f=dt.s=0,document.pointerLockElement&&document.exitPointerLock?.(),zs(""))}function d0(){if(q.state==="paused"&&(q.state="playing",re("pause").classList.add("hidden"),Ee.init(),!un&&!li.has("test")))try{Gs.requestPointerLock?.()?.catch?.(()=>{})}catch{}}function rc(){Ee.musicStop(),ri&&ri.leave(),re("btnVoice").classList.add("hidden"),re("voiceList").classList.add("hidden"),ke?.on&&(ke.stop(),re("mpTag").classList.add("hidden")),q.mpPhase="",q.state="menu",["pause","over","lobby"].forEach(i=>re(i).classList.add("hidden")),re("menu").classList.remove("hidden"),re("hud").classList.add("hidden"),re("touch").classList.add("hidden"),u0(re("scoreList"),c0()),h0(),Nt.reset(),Dn.reset(),C.gun&&(C.gun.visible=!1),zs(""),C.dead=!1,ms.visible=!1}function ov(){Ee.musicStop(),q.state="over";let i=vw({round:Math.max(1,q.round),kills:C.kills,pts:C.pts,t:Date.now()});re("oRound").textContent=Math.max(1,q.round),re("oKills").textContent=C.kills,re("oHeads").textContent=C.heads,re("oPts").textContent=C.pts.toLocaleString();let e=Math.floor(q.runTime);re("oTime").textContent=Math.floor(e/60)+":"+String(e%60).padStart(2,"0"),re("oMsg").textContent=q.round>=10?"Legendary run. The yard remembers.":q.round>=5?"Solid stand. They got you in the end.":"The dead took the yard. Try again.",u0(re("oScores"),i),yw(),re("over").classList.remove("hidden"),re("hud").classList.add("hidden"),re("touch").classList.add("hidden"),C.gun&&(C.gun.visible=!1)}var sd={x:0,z:8},t0={shriek:i=>Ee.shriek(gs(i.pos),Et(1-Math.hypot(i.x-C.x,i.z-C.z)/40,.15,.85)),hitPlayer:i=>rv(i),strike:i=>{_t.blood(new O(C.x,1.3,C.z),{x:0,y:1,z:0},10),Ee.birdHit(gs(i.pos))},thud:i=>{i._thud||(i._thud=!0,Ee.birdThud(gs(i.pos)),_t.dust(new O(i.x,.2,i.z),{x:0,y:1,z:0},6),_t.feathers(i.pos,{x:0,y:1,z:0},8))}},Kl={groan:(i,e)=>Ee.groan(gs(i.pos),Et(1-e/40,.1,.8)*.8,i.brute?.6:i.runner?1.25:X(.9,1.1),i.brute?1.4:X(.8,1.3)),plank:(i,e)=>{Ee.plank(!0),_t.dust(new O(i.c.x+i.n.x*.3,1.4,i.c.z+i.n.z*.3),i.n,6,[.5,.4,.3])},hitPlayer:rv},Mw={groan:()=>{},plank:()=>{},hitPlayer:()=>{}};function f0(i){q.time+=i;let e=q.time;if(q.state==="menu"){q.orbit+=i*.12;let n=q.orbit,s=9.5;if(Jt.position.set(Math.sin(n)*s,2.6+Math.sin(n*.7)*.4,6+Math.cos(n)*s*.8),Jt.lookAt(0,1.8,3),Jt.rotation.z=0,q.menuSpawn-=i,q.menuSpawn<=0&&Nt.alive<5){q.menuSpawn=2.2;let r=Nt.spawn(Ln(Mt.windows.filter(o=>o.area==="A")),2);r&&(r.state="chase",r.pos.set(X(-14,14),0,X(-18,-4)),r.speed=X(.9,1.5),r.dmg=0)}if(Dn.alive<6){let r=Dn.spawn(8);r&&(r.dmg=0,r.cool=999,r.height=7+X(0,2))}sd.x=0,sd.z=6,sd.hunt=!1,Nt.update(i,e,sd,Mt.door,Mw),Dn.update(i,e,{x:0,y:1.6,z:6,hunt:!1},t0),Mt.update(i,e,{x:Jt.position.x,z:Jt.position.z}),_t.update(i),Qt&&Qt.frame(Jt),ks.center={x:0,z:6},dr.center=ks.center,ks.ps.update(i),dr.ps.update(i),fr.visible=!1,Yi.visible=!1;return}if(fr.visible=!0,Yi.visible=zn>0&&C.flashlight&&!C.dead,q.state==="paused")return;if(q.state==="over"){_t.update(i);return}if(q.runTime+=i,C.dead){if(C.deadT+=i,ke?.on?ke.update(i,e,Kl):(Nt.update(i,e,C,Mt.door,{...Kl,hitPlayer:()=>{}}),Dn.update(i,e,C,{...t0,hitPlayer:()=>{}})),Mt.update(i,e,C),_t.update(i),Xx(i,e),ke?.on&&C.deadT>.8){let n=ke.spectate(Jt);fr.visible=!1,re("specTag").textContent=n?"DOWN \xB7 SPECTATING "+n:"DOWN \xB7 waiting for the round to end",re("specTag").classList.remove("hidden")}C.deadT>2.4&&!ke?.on&&ov();return}if(gw(i),xw(i),!ke?.on&&C.hp<C.maxHp&&e-C.lastHit>YT&&(C.hp=Math.min(C.maxHp,C.hp+ZT*i)),C.hp<C.maxHp*Ql&&e-q.healBeat>.85&&(q.healBeat=e,Ee.heart()),ke?.on)ke.update(i,e,Kl);else if(q.phase==="wait")q.interT-=i,q.interT<=0&&Wx(1);else if(q.phase==="round"){if(fw(i),pw(i),q.toSpawn<=0&&(q.toBird||0)<=0&&Nt.alive<=0&&Dn.alive<=0){let n=q.round;q.phase="inter",q.interT=ai.inter,Ee.setMusicPhase("calm"),!ke?.on&&Qt&&Qt.onWave(n)}}else q.phase==="inter"&&(q.interT-=i,q.interT<=0&&Wx(q.round+1));if(q.state==="playing"){let n=q.phase==="round"?"hot":"calm";Ee.musicMood!==n&&Ee.setMusicPhase(n),Ee.pumpMusic()}if(!ke?.on)Hs.step(i),Nt.update(i,e,C,Mt.door,Kl),Dn.update(i,e,C,t0),Qt.update(i);else if(ke.S&&ke.S.snaps&&ke.S.snaps.length){let n=ke.S.snaps[ke.S.snaps.length-1];Hs.sync(n.ng),Hs.interp(ke.frameAt?.(performance.now()));let s=n.p&&n.p.find(r=>r[0]===ke.S.id);s&&s.length>15&&q.nadeCd<=0&&(C.nades=s[15])}Hs.frame(),q.nadeCd>0&&(q.nadeCd-=i),Mt.update(i,e,C),$T(i),Qt&&Qt.frame(Jt),ri&&ri.joined&&ri.tick(),ks.center={x:C.x,z:C.z},dr.center=ks.center,ks.ps.update(i),dr.ps.update(i),_t.update(i),hw(i),q.double>0&&(q.double-=i);for(let n=q.ups.length-1;n>=0;n--){let s=q.ups[n];s.t-=i,s.core.rotation.y+=i*2.5,s.type!=="health"&&(s.core.rotation.x+=i*1.1),s.g.position.y=1+Math.sin(e*3+n)*.15,s.g.visible=s.t>5||Math.sin(e*16)>-.2,!ke?.on&&(Math.hypot(s.x-C.x,s.z-C.z)<1.5?(nv(s),q.ups.splice(n,1)):s.t<=0&&(ln.remove(s.g),q.ups.splice(n,1)))}let t=iv();mw(t),t?sv(t,dt.interact,i):q.repairT=0,dt.interactEdge=!1,Xx(i,e),iw()}var qx=performance.now();function av(i){requestAnimationFrame(av);let e=Math.min(.25,(i-qx)/1e3);qx=i,nw(e),f0(Math.min(e,.05)*(q.state==="menu"?.6:1));let t=q.state==="playing"&&C.hp<C.maxHp*Ql?1-C.hp/(C.maxHp*Ql):0;Qr.update(Math.min(e,.1)),sa.render(e,q.time,Et(C.dmg,0,1),t)}function bw(){sa.render(.016,q.time,Et(C.dmg,0,1),0)}var fi={};function p0(){dt.f=(fi.KeyW||fi.ArrowUp?1:0)-(fi.KeyS||fi.ArrowDown?1:0),dt.s=(fi.KeyD||fi.ArrowRight?1:0)-(fi.KeyA||fi.ArrowLeft?1:0),dt.sprint=!!(fi.ShiftLeft||fi.ShiftRight)}addEventListener("keydown",i=>{i.target&&i.target.tagName==="INPUT"||i.repeat||(fi[i.code]=!0,q.state==="playing"&&!C.dead?q.mpPhase==="lobby"||(i.code==="KeyR"&&(dt.reload=!0),i.code==="KeyE"&&(dt.interact=!0,dt.interactEdge=!0),i.code==="Digit1"&&ia(0),i.code==="Digit2"&&ia(1),i.code==="KeyQ"&&ia(1-C.cur),i.code==="KeyF"&&hv(!C.flashlight),i.code==="KeyP"&&sc(),i.code==="KeyV"&&ke?.on&&ri&&ri.toggle(),i.code==="KeyG"&&pv()):q.state==="paused"&&i.code==="KeyP"&&d0(),i.code==="KeyM"&&uv(),i.code==="KeyN"&&dv(),i.code==="Enter"&&(q.state==="menu"||q.state==="over")&&aa(),p0())});addEventListener("keyup",i=>{fi[i.code]=!1,i.code==="KeyE"&&(dt.interact=!1),p0()});addEventListener("blur",()=>{for(let i in fi)fi[i]=!1;p0(),dt.fire=!1,dt.interact=!1});var lv=!1;document.addEventListener("pointerlockerror",()=>{lv=!0});addEventListener("mousemove",i=>{q.state!=="playing"||C.dead||document.pointerLockElement!==Gs&&!lv&&!li.has("test")||cv(i.movementX,i.movementY,.0022)});function cv(i,e,t){C.yaw-=i*t,C.pitch=Et(C.pitch-e*t,-1.45,1.45),C.sx+=i*.01,C.sy+=e*.01}Gs.addEventListener("mousedown",i=>{i.button===0&&q.state==="playing"&&(!un&&!document.pointerLockElement&&!li.has("test")&&Gs.requestPointerLock?.(),dt.fire=!0)});addEventListener("mouseup",i=>{i.button===0&&(dt.fire=!1)});addEventListener("wheel",i=>{q.state==="playing"&&Math.abs(i.deltaY)>4&&ia(1-C.cur)},{passive:!0});addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&q.state==="playing"&&!C.dead&&!un&&!li.has("test")&&q.mpPhase!=="lobby"&&sc()});document.addEventListener("visibilitychange",()=>{document.hidden&&q.mpPhase!=="lobby"&&sc()});if(un){let i=null,e=null,t=0,n=0,s=re("stick"),r=re("knob"),o={x:0,y:0},l=re("touch");l.addEventListener("touchstart",u=>{for(let d of u.changedTouches){if(u.target.closest("button"))continue;let f=s.getBoundingClientRect();i===null&&d.clientX<innerWidth*.45?(i=d.identifier,o={x:f.left+f.width/2,y:f.top+f.height/2},c(d)):e===null&&(e=d.identifier,t=d.clientX,n=d.clientY)}u.preventDefault()},{passive:!1});let c=u=>{let d=u.clientX-o.x,f=u.clientY-o.y,p=Math.hypot(d,f),x=55;p>x&&(d=d/p*x,f=f/p*x),r.style.transform=`translate(${d}px,${f}px)`,dt.s=d/x,dt.f=-f/x,Math.hypot(dt.s,dt.f)<.12&&(dt.s=dt.f=0)};l.addEventListener("touchmove",u=>{for(let d of u.changedTouches)d.identifier===i?c(d):d.identifier===e&&(q.state==="playing"&&!C.dead&&cv(d.clientX-t,d.clientY-n,.0048),t=d.clientX,n=d.clientY);u.preventDefault()},{passive:!1});let a=u=>{for(let d of u.changedTouches)d.identifier===i?(i=null,r.style.transform="",dt.s=dt.f=0):d.identifier===e&&(e=null)};l.addEventListener("touchend",a),l.addEventListener("touchcancel",a);let h=(u,d,f)=>{let p=re(u);p.addEventListener("touchstart",g=>{p.classList.add("down"),d(),g.preventDefault(),g.stopPropagation()},{passive:!1});let x=g=>{p.classList.remove("down"),f?.(),g.preventDefault()};p.addEventListener("touchend",x),p.addEventListener("touchcancel",x)};h("bFire",()=>dt.fire=!0,()=>dt.fire=!1),h("bReload",()=>dt.reload=!0),h("bUse",()=>{dt.interact=!0,dt.interactEdge=!0},()=>dt.interact=!1),h("bSwap",()=>ia(1-C.cur)),h("bLamp",()=>hv(!C.flashlight)),h("bNade",()=>pv())}function hv(i){C.flashlight=i,qi.visible=i,Yi.visible=!!i&&zn>0&&q.state==="playing"&&!C.dead;let e=re("bLamp");e&&e.classList.toggle("off",!i),Ee.click(0,i?1500:800,.32)}function uv(){Ee.setMuted(!Ee.muted);try{localStorage.setItem("vwz_mute",Ee.muted?"1":"0")}catch{}mv()}function dv(){Ee.setMusicOn(Ee.musicOn===!1);try{localStorage.setItem("vwz_music",Ee.musicOn?"1":"0")}catch{}fv()}function fv(){let i=Ee.musicOn!==!1,e=re("btnMusic");e&&(e.textContent=i?"\u266A":"\u266A\u0338",e.classList.toggle("on",i))}function pv(){if(q.state!=="playing"||C.dead||(C.nades||0)<=0||q.nadeCd>0){q.state==="playing"&&(C.nades||0)<=0&&Ee.deny();return}q.nadeCd=.4,C.nades--,ke?.on?ke.send({t:"nade",yaw:+C.yaw.toFixed(3),pitch:+C.pitch.toFixed(3)}):Hs.throwLocal(C.x,o0(),C.z,C.yaw,C.pitch-.15),Ee.click(0,180,.4)}function mv(){re("btnMute").textContent=Ee.muted?"\u{1F507}":"\u{1F50A}",re("btnMute2").textContent=Ee.muted?"\u{1F507} Sound off":"\u{1F50A} Sound on"}re("btnMute").onclick=re("btnMute2").onclick=i=>{i.stopPropagation(),uv()};try{localStorage.getItem("vwz_music")==="0"&&(Ee.musicOn=!1)}catch{}re("btnMusic")&&(re("btnMusic").onclick=i=>{i.stopPropagation(),dv()});re("btnPause").onclick=i=>{i.stopPropagation(),sc()};re("btnPlay").onclick=aa;re("btnAgain").onclick=aa;re("btnMenu").onclick=rc;re("btnResume").onclick=d0;re("btnQuit").onclick=rc;re("btnPlay").addEventListener("touchend",i=>{i.preventDefault(),aa()});re("qSeg").addEventListener("click",i=>{let e=i.target.closest("button");if(e){ps=e.dataset.q;try{localStorage.setItem("vwz_q",ps)}catch{}[...re("qSeg").querySelectorAll("button")].forEach(t=>t.classList.toggle("on",t===e)),ud(ps==="high"?2:ps==="medium"?1:ps==="low"||un?0:2)}});[...re("qSeg").querySelectorAll("button")].forEach(i=>i.classList.toggle("on",i.dataset.q===ps));re("modeSeg").addEventListener("click",i=>{let e=i.target.closest("button");if(e){ai=ap(lp(e.dataset.m),1);try{localStorage.setItem("vwz_mode",ai.id)}catch{}[...re("modeSeg").querySelectorAll("button")].forEach(t=>t.classList.toggle("on",t===e))}});[...re("modeSeg").querySelectorAll("button")].forEach(i=>i.classList.toggle("on",i.dataset.m===ai.id));re("mapSeg").addEventListener("click",i=>{let e=i.target.closest("button");if(!e||e.dataset.map===xs.id)return;try{localStorage.setItem("vwz_map",e.dataset.map)}catch{}let t=new URL(location.href);t.searchParams.set("map",e.dataset.map),location.href=t.toString()});[...re("mapSeg").querySelectorAll("button")].forEach(i=>i.classList.toggle("on",i.dataset.map===xs.id));C.slots=[ld("pistol"),null];oa();ud(zn);mv();fv();u0(re("scoreList"),c0());h0();Nt.max=xs.cap[zn>0?1:0];for(let i=0;i<40;i++)f0(.05);requestAnimationFrame(()=>{sa.render(.016,0,0,0),re("loading").classList.add("done"),setTimeout(()=>re("loading").remove(),800),setTimeout(()=>{jx=!0,Qr.load(zn),$x(zn)},li.has("test")?0:120)});requestAnimationFrame(av);"serviceWorker"in navigator&&location.protocol!=="file:"&&!li.has("nosw")&&navigator.serviceWorker.register("sw.js").catch(()=>{});function Sw(i,e,t){if(i.type==="win"){e&&(q.repairT+=t,q.repairT>.5&&(q.repairT=0,ke.send({t:"repair",w:i.w.id})));return}if(i.type==="job"&&i.hold){e&&(q.repairT+=t,q.repairT>.5&&(q.repairT=0,ke.send({t:"obj"})));return}dt.interactEdge&&(i.type==="buy"?ke.send({t:"buy",w:i.b.id}):i.type==="door"?ke.send({t:"door",id:i.door.id}):i.type==="job"?ke.send({t:"obj"}):i.type==="crate"&&ke.send({t:"crate"}))}var m0=li.get("server")||"wss://vwfest-zombies-coop.onrender.com";ke=Fx({scene:ln,zombies:Nt,P:C,G:q,cam:Jt,world:Mt,held:()=>C.slots[C.cur]&&C.slots[C.cur].id||"pistol",onJoined:i=>{q.mpPhase=i.phase||"",aa(),q.round=0,re("mpTag").textContent="CO-OP \xB7 ROOM "+i.room,re("mpTag").classList.remove("hidden"),Ew(),i.phase==="lobby"?(re("lobbyCode").textContent=i.room,re("lobby").classList.remove("hidden"),re("toast").classList.remove("on"),clearTimeout(s0)):Mn("Co-op room "+i.room+" \xB7 share the code with friends")},onLobby:i=>{let e=q.mpPhase;q.mpPhase=i.phase;let t=i.phase==="lobby";if(re("lobby").classList.toggle("hidden",!t),e==="lobby"&&!t&&!un&&!li.has("test"))try{Gs.requestPointerLock?.()?.catch?.(()=>{})}catch{}if(!t)return;re("lobbyCode").textContent=i.room||ke.S.room||"-----";let n=i.p.find(s=>s[0]===ke.S.id);re("lobbyReady").textContent=n&&n[13]?"UNREADY":"READY",re("lobbyRoster").innerHTML=i.p.map(s=>{let r=s[10]?s[13]?"ready":"waiting":"disconnected",o=String(s[1]).replace(/[&<>]/g,l=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[l]);return`<li class="${s[13]?"ok":"wait"}">${o}${s[0]===ke.S.id?" (you)":""} \xB7 ${r}</li>`}).join("")},onStatus:i=>{Mn(String(i));let e=re("coMsg");e&&(e.textContent=String(i)),i==="Reconnected"&&ri&&ri.rebuild()},onRound:i=>{q.round=i,q.phase="round";let e=Ee.lineFor("wave","",i);Ee.round(i),Ee.setMusicPhase("hot"),Xi("ROUND "+i,e),Ee.announce(e),(C.nades||0)<1&&(C.nades=1)},onHurt:i=>{C.lastHit=q.time,C.dmg=Math.max(C.dmg,.65+.35*(1-Math.max(0,C.hp)/C.maxHp)),C.shake=1,Ee.hurt()},onDown:()=>{fd(),Mn("You are down. Teammates revive you if they clear the round")},onRevive:()=>{re("specTag").classList.add("hidden"),C.dead=!1,C.deadT=0,re("hud").classList.remove("hud-dead"),oa(),Mn("Back on your feet")},onZDie:i=>Ee.zdie(gs(i.pos),.5),onHits:i=>{for(let e of i){let t=re("hitm");t.classList.remove("on","kill"),t.offsetWidth,t.classList.add("on"),e.killed&&(t.classList.add("kill"),Ee.tick(!0),q.kills++,e.head&&C.heads++),eo("+"+e.gain,e.head&&e.killed)}},onEvent:(i,e)=>{if(i.e==="pick"){let t=Wi[i.type];if(t&&Xi(t.name,i.p===ke.S.id?t.sub:"A teammate grabbed it"),Ee.power(i.type==="health"?"ammo":i.type),i.type==="ammo"&&i.p===ke.S.id)for(let n of C.slots)n&&(n.mag=$t[n.id].mag,n.reserve=$t[n.id].reserve);i.type==="nuke"&&(Ee.boom(),C.shake=1,re("fx-flash").style.transition="none",re("fx-flash").style.opacity=.85,requestAnimationFrame(()=>{re("fx-flash").style.transition="opacity 1.2s",re("fx-flash").style.opacity=0}))}else i.e==="plank"&&i.by===ke.S.id?(q.mpRepairs=(q.mpRepairs||0)+1,Ee.repair(),eo("+10")):i.e==="mission"?Qt.onNetEvent(i):i.e==="boom"?(Hs.splatter(i.x,i.z),Ee.boom()):i.e==="crate"&&i.s==="shut"&&Mn("The toolbox slammed shut")},onAct:i=>{if(!i.ok){i.a==="nade"&&C.nades++,i.why==="pts"?(Ee.deny(),Mn("Not enough points")):i.why==="full"?Mn("Bait pouch is full"):i.why==="not-yours"&&Mn("That weapon belongs to a teammate");return}i.a==="buy"?(Ee.cash(),i.w==="nade"?C.nades=i.nades:tc(i.w)):i.a==="door"?Ee.cash():i.a==="crate"&&(Ee.cash(),i.s==="roll"?(Ee.open(),Ee.jingle(4)):i.s==="take"&&(tc(i.w),Xi($t[i.w].name.toUpperCase())))},onPlank:(i,e)=>{e&&Kl.plank(i,!0)},onDoor:i=>{Ee.door(),Xi(!i||i.id==="AB"?"GATE OPEN":i.name.toUpperCase(),i&&i.blurb||"Gate open")},onMission:(i,e,t)=>Qt.applyNet(i,e,t,ke.S.id),onSig:i=>{ri&&ri.onSignal(i)},onCrate:(i,e,t)=>{let n=Mt.crate;i==="idle"?n.state!=="idle"&&dd():i==="roll"&&n.state==="idle"?(n.state="roll",n.t=0,n.pick=e):i==="ready"&&(n.state==="idle"||n.state==="roll"&&n.t<3.4)&&(n.state="roll",n.t=3.61,n.pick=e),n.mine=t},syncUps:i=>{let e=new Set(i.map(t=>t[0]));for(let t=q.ups.length-1;t>=0;t--){let n=q.ups[t];n.sid&&!e.has(n.sid)&&(ln.remove(n.g),_t.glowBurst(new O(n.x,1,n.z),...Wi[n.type].col.map(s=>s*.7),24,4),q.ups.splice(t,1))}for(let[t,n,s,r]of i)q.ups.some(o=>o.sid===t)||(ic(n,s,r),q.ups[q.ups.length-1].sid=t)},onOver:()=>{setTimeout(()=>{C.dead=!0,ov(),ke.stop(),re("mpTag").classList.add("hidden")},1500)},onQuit:()=>rc()});async function Ew(){if(ke?.on){if(!ri)try{ri=(await import(new URL("voice.js",import.meta.url).href)).attach({selfId:()=>ke.S.id,selfName:()=>ke.S.name,send:t=>ke.send(t),peers:()=>[...ke.S.remotes.keys()],names:()=>{let t=new Map;for(let[n,s]of ke.S.remotes)t.set(n,s.userData.name);return t},setTalking:(t,n)=>ke.setTalking(t,n),toast:Mn,list:re("voiceList"),button:re("btnVoice")})}catch{Mn("Voice chat failed to load");return}re("btnVoice").classList.remove("hidden")}}re("btnVoice").onclick=i=>{i.stopPropagation(),ri&&ri.toggle()};var g0=()=>(re("coName").value||"Survivor").trim().slice(0,16);re("lobbyReady").onclick=()=>{let i=ke.S.snaps.at(-1),e=i&&i.p.find(t=>t[0]===ke.S.id);ke.send({t:"ready",on:!(e&&e[13])})};re("lobbyLeave").onclick=()=>{re("lobby").classList.add("hidden"),rc()};re("coQuick").onclick=()=>ke.connect({url:m0,name:g0(),join:{map:xs.id}});re("coCreate").onclick=()=>ke.connect({url:m0,name:g0(),join:{create:!0,map:xs.id}});re("coJoin").onclick=()=>{let i=re("coCode").value.trim().toUpperCase();if(!/^[A-Z2-9]{5}$/.test(i)){re("coMsg").textContent="Room codes are 5 letters/numbers";return}ke.connect({url:m0,name:g0(),join:{code:i}})};window.__game={hd:Qr,MP:ke,missions:Qt,grenades:Hs,birds:Dn,get MODE(){return ai},MAP:xs,MAPS:Ru,PLAYER_MAX_HP:Jl,MEDKIT_HP_FRAC:Yx,MEDKIT_COOLDOWN:Zx,MEDKIT_HEAL_FRAC:Kx,medKitReady:a0,medKitOnKill:l0,G:q,P:C,world:Mt,zombies:Nt,fx:_t,input:dt,tick:f0,startGame:aa,shoot:Qx,applyTier:ud,switchTo:ia,startReload:cd,pause:sc,resume:d0,toMenu:rc,giveWeapon:tc,spawnPower:ic,pickPower:nv,interact:sv,findFocus:iv,die:fd,get tier(){return zn},cam:Jt,renderer:oi,scene:ln,WEAPONS:$t,sfx:Ee,renderOnce:bw,aimAt(i,e=!1){let t=i.pos.x-C.x,n=i.pos.z-C.z,r=(i.kind==="bird"?i.pos.y+(e?.12:0):(e?1.66:1)*i.scale)-1.7;C.yaw=Math.atan2(-t,-n),C.pitch=Math.atan2(r,Math.hypot(t,n)),C.rP=C.rY=0},isTouch:un};
