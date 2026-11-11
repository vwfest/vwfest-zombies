var Y0=0,Od=1,Z0=2;var Rr=1,K0=2,To=3,$i=0,yn=1,Ht=2,an=0,Ji=1,ln=2,Fd=3,Bd=4,ih=5;var yi=100,j0=101,$0=102,J0=103,Q0=104,Cr=200,em=201,tm=202,nm=203,kd=204,zd=205,Ha=206,im=207,Ga=208,sm=209,rm=210,om=211,am=212,lm=213,cm=214,wc=0,Ac=1,Rc=2,lo=3,Cc=4,Pc=5,Ic=6,Lc=7,Hd=0,hm=1,um=2,Ui=0,Va=1,Wa=2,Xa=3,Pr=4,qa=5,Ya=6,Za=7,Sd="attached",dm="detached",Gd=300,qs=301,Ir=302,Lr=303,sh=304,Ka=306,on=1e3,Un=1001,co=1002,jt=1003,rh=1004;var Dr=1005;var zt=1006,wo=1007;var ni=1008;var Bn=1009,Vd=1010,Wd=1011,Ao=1012,oh=1013,Oi=1014,kn=1015,Wt=1016,ah=1017,lh=1018,Ys=1020,Xd=35902,qd=35899,Yd=1021,Zd=1022,Xn=1023,qi=1026,Qi=1027,ch=1028,hh=1029,Zs=1030,uh=1031;var dh=1033,ja=33776,$a=33777,Ja=33778,Qa=33779,fh=35840,ph=35841,mh=35842,gh=35843,xh=36196,vh=37492,_h=37496,yh=37488,Mh=37489,el=37490,bh=37491,Sh=37808,Eh=37809,Th=37810,wh=37811,Ah=37812,Rh=37813,Ch=37814,Ph=37815,Ih=37816,Lh=37817,Dh=37818,Nh=37819,Uh=37820,Oh=37821,Fh=36492,Bh=36494,kh=36495,zh=36283,Hh=36284,tl=36285,Gh=36286,Vh=2200,fm=2201,pm=2202,dr=2300,fr=2301,Sc=2302,Ed=2303,lr=2400,cr=2401,ca=2402,Wh=2500,mm=2501,Kd=0,nl=1,Ro=2,gm=3200;var il=0,xm=1,di="",pt="srgb",An="srgb-linear",ha="linear",At="srgb";var Ec=7680;var vm=519,_m=512,ym=513,Mm=514,Xh=515,bm=516,Sm=517,qh=518,Em=519,jd=35044,sl=35048;var $d="300 es",Pi=2e3,ho=2001;function zx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Hx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tm(){let i=uo("canvas");return i.style.display="block",i}var n0={},fo=null;function ua(...i){let e="THREE."+i.shift();fo?fo("log",e,...i):console.log(e,...i)}function wm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ke(...i){i=wm(i);let e="THREE."+i.shift();if(fo)fo("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function it(...i){i=wm(i);let e="THREE."+i.shift();if(fo)fo("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ur(...i){let e=i.join(" ");e in n0||(n0[e]=!0,Ke(...i))}function Am(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Rm={[wc]:Ac,[Rc]:Ic,[Cc]:Lc,[lo]:Pc,[Ac]:wc,[Ic]:Rc,[Lc]:Cc,[Pc]:lo},Ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],i0=1234567,ra=Math.PI/180,pr=180/Math.PI;function xi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function Jd(i,e){return(i%e+e)%e}function Gx(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Vx(i,e,t){return i!==e?(t-i)/(e-i):0}function oa(i,e,t){return(1-t)*i+t*e}function Wx(i,e,t,n){return oa(i,e,1-Math.exp(-t*n))}function Xx(i,e=1){return e-Math.abs(Jd(i,e*2)-e)}function qx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Yx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Zx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Kx(i,e){return i+Math.random()*(e-i)}function jx(i){return i*(.5-Math.random())}function $x(i){i!==void 0&&(i0=i);let e=i0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jx(i){return i*ra}function Qx(i){return i*pr}function ev(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function tv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function iv(i,e,t,n,s){let r=Math.cos,o=Math.sin,l=r(t/2),c=o(t/2),a=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(l*h,c*u,c*d,l*a);break;case"YZY":i.set(c*d,l*h,c*u,l*a);break;case"ZXZ":i.set(c*u,c*d,l*h,l*a);break;case"XZX":i.set(l*h,c*p,c*f,l*a);break;case"YXY":i.set(c*f,l*h,c*p,l*a);break;case"ZYZ":i.set(c*p,c*f,l*h,l*a);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Qd={DEG2RAD:ra,RAD2DEG:pr,generateUUID:xi,clamp:ft,euclideanModulo:Jd,mapLinear:Gx,inverseLerp:Vx,lerp:oa,damp:Wx,pingpong:Xx,smoothstep:qx,smootherstep:Yx,randInt:Zx,randFloat:Kx,randFloatSpread:jx,seededRandom:$x,degToRad:Jx,radToDeg:Qx,isPowerOfTwo:ev,ceilPowerOfTwo:tv,floorPowerOfTwo:nv,setQuaternionFromProperEuler:iv,normalize:Lt,denormalize:Ci},pe=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,l){let c=n[s+0],a=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(u!==v||c!==d||a!==f||h!==p){let g=c*d+a*f+h*p+u*v;g<0&&(d=-d,f=-f,p=-p,v=-v,g=-g);let m=1-l;if(g<.9995){let y=Math.acos(g),w=Math.sin(y);m=Math.sin(m*y)/w,l=Math.sin(l*y)/w,c=c*m+d*l,a=a*m+f*l,h=h*m+p*l,u=u*m+v*l}else{c=c*m+d*l,a=a*m+f*l,h=h*m+p*l,u=u*m+v*l;let y=1/Math.sqrt(c*c+a*a+h*h+u*u);c*=y,a*=y,h*=y,u*=y}}e[t]=c,e[t+1]=a,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let l=n[s],c=n[s+1],a=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=l*p+h*u+c*f-a*d,e[t+1]=c*p+h*d+a*u-l*f,e[t+2]=a*p+h*f+l*d-c*u,e[t+3]=h*p-l*u-c*d-a*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,l=Math.cos,c=Math.sin,a=l(n/2),h=l(s/2),u=l(r/2),d=c(n/2),f=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=d*h*u+a*f*p,this._y=a*f*u-d*h*p,this._z=a*h*p+d*f*u,this._w=a*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+a*f*p,this._y=a*f*u-d*h*p,this._z=a*h*p-d*f*u,this._w=a*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-a*f*p,this._y=a*f*u+d*h*p,this._z=a*h*p+d*f*u,this._w=a*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-a*f*p,this._y=a*f*u+d*h*p,this._z=a*h*p-d*f*u,this._w=a*h*u+d*f*p;break;case"YZX":this._x=d*h*u+a*f*p,this._y=a*f*u+d*h*p,this._z=a*h*p-d*f*u,this._w=a*h*u-d*f*p;break;case"XZY":this._x=d*h*u-a*f*p,this._y=a*f*u-d*h*p,this._z=a*h*p+d*f*u,this._w=a*h*u+d*f*p;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],l=t[5],c=t[9],a=t[2],h=t[6],u=t[10],d=n+l+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-a)*f,this._z=(o-s)*f}else if(n>l&&n>u){let f=2*Math.sqrt(1+n-l-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+a)/f}else if(l>u){let f=2*Math.sqrt(1+l-n-u);this._w=(r-a)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-l);this._w=(o-s)/f,this._x=(r+a)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=t._x,c=t._y,a=t._z,h=t._w;return this._x=n*h+o*l+s*a-r*c,this._y=s*h+o*c+r*l-n*a,this._z=r*h+o*a+n*c-s*l,this._w=o*h-n*l-s*c-r*a,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,o=-o,l=-l);let c=1-t;if(l<.9995){let a=Math.acos(l),h=Math.sin(a);c=Math.sin(c*a)/h,t=Math.sin(t*a)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(s0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(s0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,l=e.z,c=e.w,a=2*(o*s-l*n),h=2*(l*t-r*s),u=2*(r*n-o*t);return this.x=t+c*a+o*u-l*h,this.y=n+c*h+l*a-r*u,this.z=s+c*u+r*h-o*a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,l=t.y,c=t.z;return this.x=s*c-r*l,this.y=r*o-n*c,this.z=n*l-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ku.copy(this).projectOnVector(e),this.sub(Ku)}reflect(e){return this.sub(Ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ku=new N,s0=new fn,at=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,l,c,a){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,c,a)}set(e,t,n,s,r,o,l,c,a){let h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[3],c=n[6],a=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],v=s[0],g=s[3],m=s[6],y=s[1],w=s[4],_=s[7],E=s[2],T=s[5],A=s[8];return r[0]=o*v+l*y+c*E,r[3]=o*g+l*w+c*T,r[6]=o*m+l*_+c*A,r[1]=a*v+h*y+u*E,r[4]=a*g+h*w+u*T,r[7]=a*m+h*_+u*A,r[2]=d*v+f*y+p*E,r[5]=d*g+f*w+p*T,r[8]=d*m+f*_+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],h=e[8];return t*o*h-t*l*a-n*r*h+n*l*c+s*r*a-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],h=e[8],u=h*o-l*a,d=l*c-h*r,f=a*r-o*c,p=t*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=u*v,e[1]=(s*a-h*n)*v,e[2]=(l*n-s*o)*v,e[3]=d*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-l*t)*v,e[6]=f*v,e[7]=(n*c-a*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,l){let c=Math.cos(r),a=Math.sin(r);return this.set(n*c,n*a,-n*(c*o+a*l)+o+e,-s*a,s*c,-s*(-a*o+c*l)+l+t,0,0,1),this}scale(e,t){return ur("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ju.makeScale(e,t)),this}rotate(e){return ur("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ju.makeRotation(-e)),this}translate(e,t){return ur("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ju.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ju=new at,r0=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),o0=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sv(){let i={enabled:!0,workingColorSpace:An,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===At&&(s.r=vs(s.r),s.g=vs(s.g),s.b=vs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===At&&(s.r=ao(s.r),s.g=ao(s.g),s.b=ao(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===di?ha:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ur("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ur("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[An]:{primaries:e,whitePoint:n,transfer:ha,toXYZ:r0,fromXYZ:o0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:e,whitePoint:n,transfer:At,toXYZ:r0,fromXYZ:o0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}}),i}var ht=sv();function vs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ao(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vr,Dc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vr===void 0&&(Vr=uo("canvas")),Vr.width=e.width,Vr.height=e.height;let s=Vr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Vr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=uo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vs(t[n]/255)*255):t[n]=vs(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},rv=0,po=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push($u(s[o].image)):r.push($u(s[o]))}else r=$u(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function $u(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}var ov=0,Ju=new N,xn=class i extends Ii{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Un,s=Un,r=zt,o=ni,l=Xn,c=Bn,a=i.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=xi(),this.name="",this.source=new po(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=a,this.format=l,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ju).x}get height(){return this.source.getSize(Ju).y}get depth(){return this.source.getSize(Ju).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case on:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case on:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Gd;xn.DEFAULT_ANISOTROPY=1;var Tt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,a=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(a+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(a+1)/2,_=(f+1)/2,E=(m+1)/2,T=(h+d)/4,A=(u+v)/4,x=(p+g)/4;return w>_&&w>E?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=A/n):_>E?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=x/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=A/r,s=x/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((a+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nc=class extends Ii{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new xn(s),o=n.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new po(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zt=class extends Nc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},da=class extends xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Uc=class extends xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var je=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,l,c,a,h,u,d,f,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,c,a,h,u,d,f,p,v,g)}set(e,t,n,s,r,o,l,c,a,h,u,d,f,p,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=l,m[13]=c,m[2]=a,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Wr.setFromMatrixColumn(e,0).length(),r=1/Wr.setFromMatrixColumn(e,1).length(),o=1/Wr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(s),a=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,p=l*h,v=l*u;t[0]=c*h,t[4]=-c*u,t[8]=a,t[1]=f+p*a,t[5]=d-v*a,t[9]=-l*c,t[2]=v-d*a,t[6]=p+f*a,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,p=a*h,v=a*u;t[0]=d+v*l,t[4]=p*l-f,t[8]=o*a,t[1]=o*u,t[5]=o*h,t[9]=-l,t[2]=f*l-p,t[6]=v+d*l,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,p=a*h,v=a*u;t[0]=d-v*l,t[4]=-o*u,t[8]=p+f*l,t[1]=f+p*l,t[5]=o*h,t[9]=v-d*l,t[2]=-o*a,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=l*h,v=l*u;t[0]=c*h,t[4]=p*a-f,t[8]=d*a+v,t[1]=c*u,t[5]=v*a+d,t[9]=f*a-p,t[2]=-a,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*a,p=l*c,v=l*a;t[0]=c*h,t[4]=v-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-l*h,t[2]=-a*h,t[6]=f*u+p,t[10]=d-v*u}else if(e.order==="XZY"){let d=o*c,f=o*a,p=l*c,v=l*a;t[0]=c*h,t[4]=-u,t[8]=a*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=l*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(av,e,lv)}lookAt(e,t,n){let s=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Os.crossVectors(n,ri),Os.lengthSq()===0&&(Math.abs(n.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Os.crossVectors(n,ri)),Os.normalize(),Yl.crossVectors(ri,Os),s[0]=Os.x,s[4]=Yl.x,s[8]=ri.x,s[1]=Os.y,s[5]=Yl.y,s[9]=ri.y,s[2]=Os.z,s[6]=Yl.z,s[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[4],c=n[8],a=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],y=n[3],w=n[7],_=n[11],E=n[15],T=s[0],A=s[4],x=s[8],b=s[12],M=s[1],C=s[5],O=s[9],L=s[13],P=s[2],D=s[6],F=s[10],B=s[14],q=s[3],k=s[7],W=s[11],ee=s[15];return r[0]=o*T+l*M+c*P+a*q,r[4]=o*A+l*C+c*D+a*k,r[8]=o*x+l*O+c*F+a*W,r[12]=o*b+l*L+c*B+a*ee,r[1]=h*T+u*M+d*P+f*q,r[5]=h*A+u*C+d*D+f*k,r[9]=h*x+u*O+d*F+f*W,r[13]=h*b+u*L+d*B+f*ee,r[2]=p*T+v*M+g*P+m*q,r[6]=p*A+v*C+g*D+m*k,r[10]=p*x+v*O+g*F+m*W,r[14]=p*b+v*L+g*B+m*ee,r[3]=y*T+w*M+_*P+E*q,r[7]=y*A+w*C+_*D+E*k,r[11]=y*x+w*O+_*F+E*W,r[15]=y*b+w*L+_*B+E*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],l=e[5],c=e[9],a=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],v=e[7],g=e[11],m=e[15],y=c*f-a*d,w=l*f-a*u,_=l*d-c*u,E=o*f-a*h,T=o*d-c*h,A=o*u-l*h;return t*(v*y-g*w+m*_)-n*(p*y-g*E+m*T)+s*(p*w-v*E+m*A)-r*(p*_-v*T+g*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],l=e[9],c=e[2],a=e[6],h=e[10];return t*(o*h-l*a)-n*(r*h-l*c)+s*(r*a-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],v=e[13],g=e[14],m=e[15],y=t*l-n*o,w=t*c-s*o,_=t*a-r*o,E=n*c-s*l,T=n*a-r*l,A=s*a-r*c,x=h*v-u*p,b=h*g-d*p,M=h*m-f*p,C=u*g-d*v,O=u*m-f*v,L=d*m-f*g,P=y*L-w*O+_*C+E*M-T*b+A*x;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/P;return e[0]=(l*L-c*O+a*C)*D,e[1]=(s*O-n*L-r*C)*D,e[2]=(v*A-g*T+m*E)*D,e[3]=(d*T-u*A-f*E)*D,e[4]=(c*M-o*L-a*b)*D,e[5]=(t*L-s*M+r*b)*D,e[6]=(g*_-p*A-m*w)*D,e[7]=(h*A-d*_+f*w)*D,e[8]=(o*O-l*M+a*x)*D,e[9]=(n*M-t*O-r*x)*D,e[10]=(p*T-v*_+m*y)*D,e[11]=(u*_-h*T-f*y)*D,e[12]=(l*b-o*C-c*x)*D,e[13]=(t*C-n*b+s*x)*D,e[14]=(v*w-p*E-g*y)*D,e[15]=(h*E-u*w+d*y)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,l=e.y,c=e.z,a=r*o,h=r*l;return this.set(a*o+n,a*l-s*c,a*c+s*l,0,a*l+s*c,h*l+n,h*c-s*o,0,a*c-s*l,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,l=t._z,c=t._w,a=r+r,h=o+o,u=l+l,d=r*a,f=r*h,p=r*u,v=o*h,g=o*u,m=l*u,y=c*a,w=c*h,_=c*u,E=n.x,T=n.y,A=n.z;return s[0]=(1-(v+m))*E,s[1]=(f+_)*E,s[2]=(p-w)*E,s[3]=0,s[4]=(f-_)*T,s[5]=(1-(d+m))*T,s[6]=(g+y)*T,s[7]=0,s[8]=(p+w)*A,s[9]=(g-y)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Wr.set(s[0],s[1],s[2]).length(),l=Wr.set(s[4],s[5],s[6]).length(),c=Wr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ti.copy(this);let a=1/o,h=1/l,u=1/c;return Ti.elements[0]*=a,Ti.elements[1]*=a,Ti.elements[2]*=a,Ti.elements[4]*=h,Ti.elements[5]*=h,Ti.elements[6]*=h,Ti.elements[8]*=u,Ti.elements[9]*=u,Ti.elements[10]*=u,t.setFromRotationMatrix(Ti),n.x=o,n.y=l,n.z=c,this}makePerspective(e,t,n,s,r,o,l=Pi,c=!1){let a=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,v;if(c)p=r/(o-r),v=o*r/(o-r);else if(l===Pi)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(l===ho)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=p,a[14]=v,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o,l=Pi,c=!1){let a=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,v;if(c)p=1/(o-r),v=o/(o-r);else if(l===Pi)p=-2/(o-r),v=-(o+r)/(o-r);else if(l===ho)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=0,a[12]=d,a[1]=0,a[5]=u,a[9]=0,a[13]=f,a[2]=0,a[6]=0,a[10]=p,a[14]=v,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Wr=new N,Ti=new je,av=new N(0,0,0),lv=new N(1,1,1),Os=new N,Yl=new N,ri=new N,a0=new je,l0=new fn,ai=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],l=s[8],c=s[1],a=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,a),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(c,a)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,a)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,a));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,a),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,a),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return a0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(a0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return l0.setFromEuler(this),this.setFromQuaternion(l0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ai.DEFAULT_ORDER="XYZ";var fa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cv=0,c0=new N,Xr=new fn,hs=new je,Zl=new N,Yo=new N,hv=new N,uv=new fn,h0=new N(1,0,0),u0=new N(0,1,0),d0=new N(0,0,1),f0={type:"added"},dv={type:"removed"},qr={type:"childadded",child:null},Qu={type:"childremoved",child:null},_t=class i extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new ai,n=new fn,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new at}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(h0,e)}rotateY(e){return this.rotateOnAxis(u0,e)}rotateZ(e){return this.rotateOnAxis(d0,e)}translateOnAxis(e,t){return c0.copy(e).applyQuaternion(this.quaternion),this.position.add(c0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(h0,e)}translateY(e){return this.translateOnAxis(u0,e)}translateZ(e){return this.translateOnAxis(d0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zl.copy(e):Zl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hs.lookAt(Yo,Zl,this.up):hs.lookAt(Zl,Yo,this.up),this.quaternion.setFromRotationMatrix(hs),s&&(hs.extractRotation(s.matrixWorld),Xr.setFromRotationMatrix(hs),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(f0),qr.child=e,this.dispatchEvent(qr),qr.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dv),Qu.child=e,this.dispatchEvent(Qu),Qu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hs.multiply(e.parent.matrixWorld)),e.applyMatrix4(hs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(f0),qr.child=e,this.dispatchEvent(qr),qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,e,hv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,uv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let a=0,h=c.length;a<h;a++){let u=c[a];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,a=this.material.length;c<a;c++)l.push(r(e.materials,this.material[c]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(e.animations,c))}}if(t){let l=o(e.geometries),c=o(e.materials),a=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),a.length>0&&(n.textures=a),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(l){let c=[];for(let a in l){let h=l[a];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_t.DEFAULT_UP=new N(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Be=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}},fv={type:"move"},mo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,l=this._targetRay,c=this._grip,a=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(a&&e.hand){o=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),m=this._getHandJoint(a,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=a.joints["index-finger-tip"],u=a.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;a.inputState.pinching&&d>f+p?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!a.inputState.pinching&&d<=f-p&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(fv)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),a!==null&&(a.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Cm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fs={h:0,s:0,l:0},Kl={h:0,s:0,l:0};function ed(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var de=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=Jd(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ed(o,r,e+1/3),this.g=ed(o,r,e),this.b=ed(o,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=pt){function n(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let n=Cm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return ht.workingToColorSpace(Nn.copy(this),e),Math.round(ft(Nn.r*255,0,255))*65536+Math.round(ft(Nn.g*255,0,255))*256+Math.round(ft(Nn.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(Nn.copy(this),t);let n=Nn.r,s=Nn.g,r=Nn.b,o=Math.max(n,s,r),l=Math.min(n,s,r),c,a,h=(l+o)/2;if(l===o)c=0,a=0;else{let u=o-l;switch(a=h<=.5?u/(o+l):u/(2-o-l),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=a,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=pt){ht.workingToColorSpace(Nn.copy(this),e);let t=Nn.r,n=Nn.g,s=Nn.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fs),this.setHSL(Fs.h+e,Fs.s+t,Fs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fs),e.getHSL(Kl);let n=oa(Fs.h,Kl.h,t),s=oa(Fs.s,Kl.s,t),r=oa(Fs.l,Kl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nn=new de;de.NAMES=Cm;var pa=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new de(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var mr=class extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},wi=new N,us=new N,td=new N,ds=new N,Yr=new N,Zr=new N,p0=new N,nd=new N,id=new N,sd=new N,rd=new Tt,od=new Tt,ad=new Tt,gs=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),wi.subVectors(e,t),s.cross(wi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){wi.subVectors(s,t),us.subVectors(n,t),td.subVectors(e,t);let o=wi.dot(wi),l=wi.dot(us),c=wi.dot(td),a=us.dot(us),h=us.dot(td),u=o*a-l*l;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(a*c-l*h)*d,p=(o*h-l*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ds)===null?!1:ds.x>=0&&ds.y>=0&&ds.x+ds.y<=1}static getInterpolation(e,t,n,s,r,o,l,c){return this.getBarycoord(e,t,n,s,ds)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ds.x),c.addScaledVector(o,ds.y),c.addScaledVector(l,ds.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return rd.setScalar(0),od.setScalar(0),ad.setScalar(0),rd.fromBufferAttribute(e,t),od.fromBufferAttribute(e,n),ad.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(rd,r.x),o.addScaledVector(od,r.y),o.addScaledVector(ad,r.z),o}static isFrontFacing(e,t,n,s){return wi.subVectors(n,t),us.subVectors(e,t),wi.cross(us).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),us.subVectors(this.a,this.b),wi.cross(us).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,l;Yr.subVectors(s,n),Zr.subVectors(r,n),nd.subVectors(e,n);let c=Yr.dot(nd),a=Zr.dot(nd);if(c<=0&&a<=0)return t.copy(n);id.subVectors(e,s);let h=Yr.dot(id),u=Zr.dot(id);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*a;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Yr,o);sd.subVectors(e,r);let f=Yr.dot(sd),p=Zr.dot(sd);if(p>=0&&f<=p)return t.copy(r);let v=f*a-c*p;if(v<=0&&a>=0&&p<=0)return l=a/(a-p),t.copy(n).addScaledVector(Zr,l);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return p0.subVectors(r,s),l=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(p0,l);let m=1/(g+v+d);return o=v*m,l=d*m,t.copy(n).addScaledVector(Yr,o).addScaledVector(Zr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vn=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,Ai):Ai.fromBufferAttribute(r,o),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jl.copy(n.boundingBox)),jl.applyMatrix4(e.matrixWorld),this.union(jl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),$l.subVectors(this.max,Zo),Kr.subVectors(e.a,Zo),jr.subVectors(e.b,Zo),$r.subVectors(e.c,Zo),Bs.subVectors(jr,Kr),ks.subVectors($r,jr),sr.subVectors(Kr,$r);let t=[0,-Bs.z,Bs.y,0,-ks.z,ks.y,0,-sr.z,sr.y,Bs.z,0,-Bs.x,ks.z,0,-ks.x,sr.z,0,-sr.x,-Bs.y,Bs.x,0,-ks.y,ks.x,0,-sr.y,sr.x,0];return!ld(t,Kr,jr,$r,$l)||(t=[1,0,0,0,1,0,0,0,1],!ld(t,Kr,jr,$r,$l))?!1:(Jl.crossVectors(Bs,ks),t=[Jl.x,Jl.y,Jl.z],ld(t,Kr,jr,$r,$l))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fs=[new N,new N,new N,new N,new N,new N,new N,new N],Ai=new N,jl=new vn,Kr=new N,jr=new N,$r=new N,Bs=new N,ks=new N,sr=new N,Zo=new N,$l=new N,Jl=new N,rr=new N;function ld(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){rr.fromArray(i,r);let l=s.x*Math.abs(rr.x)+s.y*Math.abs(rr.y)+s.z*Math.abs(rr.z),c=e.dot(rr),a=t.dot(rr),h=n.dot(rr);if(Math.max(-Math.max(c,a,h),Math.min(c,a,h))>l)return!1}return!0}var xs=pv();function pv(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let a=c-127;a<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):a<-14?(n[c]=1024>>-a-14,n[c|256]=1024>>-a-14|32768,s[c]=-a-1,s[c|256]=-a-1):a<=15?(n[c]=a+15<<10,n[c|256]=a+15<<10|32768,s[c]=13,s[c|256]=13):a<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),l=new Uint32Array(64);for(let c=1;c<1024;++c){let a=c<<13,h=0;for(;(a&8388608)===0;)a<<=1,h-=8388608;a&=-8388609,h+=947912704,r[c]=a|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(l[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:l}}function mv(i){Math.abs(i)>65504&&Ke("DataUtils.toHalfFloat(): Value out of range."),i=ft(i,-65504,65504),xs.floatView[0]=i;let e=xs.uint32View[0],t=e>>23&511;return xs.baseTable[t]+((e&8388607)>>xs.shiftTable[t])}function gv(i){let e=i>>10;return xs.uint32View[0]=xs.mantissaTable[xs.offsetTable[e]+(i&1023)]+xs.exponentTable[e],xs.floatView[0]}var Gs=class{static toHalfFloat(e){return mv(e)}static fromHalfFloat(e){return gv(e)}},un=new N,Ql=new pe,xv=0,lt=class extends Ii{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jd,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ql.fromBufferAttribute(this,t),Ql.applyMatrix3(e),this.setXY(t,Ql.x,Ql.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ma=class extends lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ga=class extends lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ut=class extends lt{constructor(e,t,n){super(new Float32Array(e),t,n)}},vv=new vn,Ko=new N,cd=new N,Jn=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):vv.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);let t=Ko.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ko,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(cd)),this.expandByPoint(Ko.copy(e.center).sub(cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_v=0,gi=new je,hd=new _t,Jr=new N,oi=new vn,jo=new vn,Tn=new N,xt=class i extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zx(e)?ga:ma)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,t,n){return gi.makeTranslation(e,t,n),this.applyMatrix4(gi),this}scale(e,t,n){return gi.makeScale(e,t,n),this.applyMatrix4(gi),this}lookAt(e){return hd.lookAt(e),hd.updateMatrix(),this.applyMatrix4(hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];oi.setFromBufferAttribute(r),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let l=t[r];jo.setFromBufferAttribute(l),this.morphTargetsRelative?(Tn.addVectors(oi.min,jo.min),oi.expandByPoint(Tn),Tn.addVectors(oi.max,jo.max),oi.expandByPoint(Tn)):(oi.expandByPoint(jo.min),oi.expandByPoint(jo.max))}oi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Tn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Tn));if(t)for(let r=0,o=t.length;r<o;r++){let l=t[r],c=this.morphTargetsRelative;for(let a=0,h=l.count;a<h;a++)Tn.fromBufferAttribute(l,a),c&&(Jr.fromBufferAttribute(e,a),Tn.add(Jr)),s=Math.max(s,n.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new lt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let l=[],c=[];for(let x=0;x<n.count;x++)l[x]=new N,c[x]=new N;let a=new N,h=new N,u=new N,d=new pe,f=new pe,p=new pe,v=new N,g=new N;function m(x,b,M){a.fromBufferAttribute(n,x),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,x),f.fromBufferAttribute(r,b),p.fromBufferAttribute(r,M),h.sub(a),u.sub(a),f.sub(d),p.sub(d);let C=1/(f.x*p.y-p.x*f.y);isFinite(C)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(C),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(C),l[x].add(v),l[b].add(v),l[M].add(v),c[x].add(g),c[b].add(g),c[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,b=y.length;x<b;++x){let M=y[x],C=M.start,O=M.count;for(let L=C,P=C+O;L<P;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let w=new N,_=new N,E=new N,T=new N;function A(x){E.fromBufferAttribute(s,x),T.copy(E);let b=l[x];w.copy(b),w.sub(E.multiplyScalar(E.dot(b))).normalize(),_.crossVectors(T,b);let C=_.dot(c[x])<0?-1:1;o.setXYZW(x,w.x,w.y,w.z,C)}for(let x=0,b=y.length;x<b;++x){let M=y[x],C=M.start,O=M.count;for(let L=C,P=C+O;L<P;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,o=new N,l=new N,c=new N,a=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,v),a.fromBufferAttribute(n,g),l.add(h),c.add(h),a.add(h),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,a.x,a.y,a.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tn.fromBufferAttribute(e,t),Tn.normalize(),e.setXYZ(t,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(l,c){let a=l.array,h=l.itemSize,u=l.normalized,d=new a.constructor(c.length*h),f=0,p=0;for(let v=0,g=c.length;v<g;v++){l.isInterleavedBufferAttribute?f=c[v]*l.data.stride+l.offset:f=c[v]*h;for(let m=0;m<h;m++)d[p++]=a[f++]}return new lt(d,h,u)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let c=s[l],a=e(c,n);t.setAttribute(l,a)}let r=this.morphAttributes;for(let l in r){let c=[],a=r[l];for(let h=0,u=a.length;h<u;h++){let d=a[h],f=e(d,n);c.push(f)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,c=o.length;l<c;l++){let a=o[l];t.addGroup(a.start,a.count,a.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let a in c)c[a]!==void 0&&(e[a]=c[a]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let a=n[c];e.data.attributes[c]=a.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let a=this.morphAttributes[c],h=[];for(let u=0,d=a.length;u<d;u++){let f=a[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let a in s){let h=s[a];this.setAttribute(a,h.clone(t))}let r=e.morphAttributes;for(let a in r){let h=[],u=r[a];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[a]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let a=0,h=o.length;a<h;a++){let u=o[a];this.addGroup(u.start,u.count,u.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},gr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jd,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Wn=new N,Vs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix4(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyNormalMatrix(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.transformDirection(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ua("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ua("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ud=new N,yv=new N,Mv=new at,Ri=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ud.subVectors(n,t).cross(yv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(ud),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Mv.getNormalMatrix(e),s=this.coplanarPoint(ud).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},bv=0,On=class extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=Ji,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=zd,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ec,this.stencilZFail=Ec,this.stencilZPass=Ec,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let l in r){let c=r[l];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new de().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ri().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Qn=class extends On{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qr,$o=new N,eo=new N,to=new N,no=new pe,Jo=new pe,Pm=new je,ec=new N,Qo=new N,tc=new N,m0=new pe,dd=new pe,g0=new pe,li=class extends _t{constructor(e=new Qn){if(super(),this.isSprite=!0,this.type="Sprite",Qr===void 0){Qr=new xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gr(t,5);Qr.setIndex([0,1,2,0,2,3]),Qr.setAttribute("position",new Vs(n,3,0,!1)),Qr.setAttribute("uv",new Vs(n,2,3,!1))}this.geometry=Qr,this.material=e,this.center=new pe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&it('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),eo.setFromMatrixScale(this.matrixWorld),Pm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),to.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&eo.multiplyScalar(-to.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;nc(ec.set(-.5,-.5,0),to,o,eo,s,r),nc(Qo.set(.5,-.5,0),to,o,eo,s,r),nc(tc.set(.5,.5,0),to,o,eo,s,r),m0.set(0,0),dd.set(1,0),g0.set(1,1);let l=e.ray.intersectTriangle(ec,Qo,tc,!1,$o);if(l===null&&(nc(Qo.set(-.5,.5,0),to,o,eo,s,r),dd.set(0,1),l=e.ray.intersectTriangle(ec,tc,Qo,!1,$o),l===null))return;let c=e.ray.origin.distanceTo($o);c<e.near||c>e.far||t.push({distance:c,point:$o.clone(),uv:gs.getInterpolation($o,ec,Qo,tc,m0,dd,g0,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function nc(i,e,t,n,s,r){no.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Jo.x=r*no.x-s*no.y,Jo.y=s*no.x+r*no.y):Jo.copy(no),i.copy(e),i.x+=Jo.x,i.y+=Jo.y,i.applyMatrix4(Pm)}var ps=new N,fd=new N,ic=new N,sc=new N,xr=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ps)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ps.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ps.copy(this.origin).addScaledVector(this.direction,t),ps.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){fd.copy(e).add(t).multiplyScalar(.5),ic.copy(t).sub(e).normalize(),sc.copy(this.origin).sub(fd);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ic),l=sc.dot(this.direction),c=-sc.dot(ic),a=sc.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*c-l,d=o*l-c,p=r*h,u>=0)if(d>=-p)if(d<=p){let v=1/h;u*=v,d*=v,f=u*(u+o*d+2*l)+d*(o*u+d+2*c)+a}else d=r,u=Math.max(0,-(o*d+l)),f=-u*u+d*(d+2*c)+a;else d=-r,u=Math.max(0,-(o*d+l)),f=-u*u+d*(d+2*c)+a;else d<=-p?(u=Math.max(0,-(-o*r+l)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+a):d<=p?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+a):(u=Math.max(0,-(o*r+l)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+a);else d=o>0?-r:r,u=Math.max(0,-(o*d+l)),f=-u*u+d*(d+2*c)+a;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(fd).addScaledVector(ic,d),f}intersectSphere(e,t){if(e.radius<0)return null;ps.subVectors(e.center,this.origin);let n=ps.dot(this.direction),s=ps.dot(ps)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,l,c,a=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return a>=0?(n=(e.min.x-d.x)*a,s=(e.max.x-d.x)*a):(n=(e.max.x-d.x)*a,s=(e.min.x-d.x)*a),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(l=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(l=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ps)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,l=this.direction,c=l.x,a=l.y,h=l.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,v=t.y-o.y,g=t.z-o.z,m=n.x-o.x,y=n.y-o.y,w=n.z-o.z,_=Math.abs(c),E=Math.abs(a),T=Math.abs(h),A,x,b,M,C,O,L,P,D,F,B,q;if(_>=E&&_>=T?(b=c,O=u,D=p,q=m,c>=0?(A=a,x=h,M=d,C=f,L=v,P=g,F=y,B=w):(A=h,x=a,M=f,C=d,L=g,P=v,F=w,B=y)):E>=T?(b=a,O=d,D=v,q=y,a>=0?(A=h,x=c,M=f,C=u,L=g,P=p,F=w,B=m):(A=c,x=h,M=u,C=f,L=p,P=g,F=m,B=w)):(b=h,O=f,D=g,q=w,h>=0?(A=c,x=a,M=u,C=d,L=p,P=v,F=m,B=y):(A=a,x=c,M=d,C=u,L=v,P=p,F=y,B=m)),b===0)return null;let k=A/b,W=x/b,ee=1/b,le=M-k*O,Me=C-W*O,te=L-k*D,ae=P-W*D,Pe=F-k*q,Z=B-W*q,re=Pe*ae-Z*te,Ae=le*Z-Me*Pe,Xe=te*Me-ae*le;if(s){if(re<0||Ae<0||Xe<0)return null}else if((re<0||Ae<0||Xe<0)&&(re>0||Ae>0||Xe>0))return null;let Q=re+Ae+Xe;if(Q===0)return null;let xe=ee*(re*O+Ae*D+Xe*q);return(Q>0?xe<0:xe>0)?null:this.at(xe/Q,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},x0=new je,or=new xr,rc=new Jn,v0=new N,oc=new N,ac=new N,lc=new N,pd=new N,cc=new N,_0=new N,hc=new N,me=class extends _t{constructor(e=new xt,t=new nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){cc.set(0,0,0);for(let c=0,a=r.length;c<a;c++){let h=l[c],u=r[c];h!==0&&(pd.fromBufferAttribute(u,e),o?cc.addScaledVector(pd,h):cc.addScaledVector(pd.sub(t),h))}t.add(cc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rc.copy(n.boundingSphere),rc.applyMatrix4(r),or.copy(e.ray).recast(e.near),!(rc.containsPoint(or.origin)===!1&&(or.intersectSphere(rc,v0)===null||or.origin.distanceToSquared(v0)>(e.far-e.near)**2))&&(x0.copy(r).invert(),or.copy(e.ray).applyMatrix4(x0),!(n.boundingBox!==null&&or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,l=r.index,c=r.attributes.position,a=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(l!==null)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){let g=d[p],m=o[g.materialIndex],y=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,E=w;_<E;_+=3){let T=l.getX(_),A=l.getX(_+1),x=l.getX(_+2);s=uc(this,m,e,n,a,h,u,T,A,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let y=l.getX(g),w=l.getX(g+1),_=l.getX(g+2);s=uc(this,o,e,n,a,h,u,y,w,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){let g=d[p],m=o[g.materialIndex],y=Math.max(g.start,f.start),w=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,E=w;_<E;_+=3){let T=_,A=_+1,x=_+2;s=uc(this,m,e,n,a,h,u,T,A,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let y=g,w=g+1,_=g+2;s=uc(this,o,e,n,a,h,u,y,w,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Sv(i,e,t,n,s,r,o,l){let c;if(e.side===yn?c=n.intersectTriangle(o,r,s,!0,l):c=n.intersectTriangle(s,r,o,e.side===$i,l),c===null)return null;hc.copy(l),hc.applyMatrix4(i.matrixWorld);let a=t.ray.origin.distanceTo(hc);return a<t.near||a>t.far?null:{distance:a,point:hc.clone(),object:i}}function uc(i,e,t,n,s,r,o,l,c,a){i.getVertexPosition(l,oc),i.getVertexPosition(c,ac),i.getVertexPosition(a,lc);let h=Sv(i,e,t,n,oc,ac,lc,_0);if(h){let u=new N;gs.getBarycoord(_0,oc,ac,lc,u),s&&(h.uv=gs.getInterpolatedAttribute(s,l,c,a,u,new pe)),r&&(h.uv1=gs.getInterpolatedAttribute(r,l,c,a,u,new pe)),o&&(h.normal=gs.getInterpolatedAttribute(o,l,c,a,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:l,b:c,c:a,normal:new N,materialIndex:0};gs.getNormal(oc,ac,lc,d.normal),h.face=d,h.barycoord=u}return h}var ea=new Tt,y0=new Tt,M0=new Tt,Ev=new Tt,b0=new je,dc=new N,md=new Jn,S0=new je,gd=new xr,vr=class extends me{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sd,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,dc),this.boundingBox.expandByPoint(dc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,dc),this.boundingSphere.expandByPoint(dc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),md.copy(this.boundingSphere),md.applyMatrix4(s),e.ray.intersectsSphere(md)!==!1&&(S0.copy(s).invert(),gd.copy(e.ray).applyMatrix4(S0),!(this.boundingBox!==null&&gd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Tt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;y0.fromBufferAttribute(s.attributes.skinIndex,e),M0.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ea.copy(t),t.set(0,0,0,0)):(ea.set(...t,1),t.set(0,0,0)),ea.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=M0.getComponent(r);if(o!==0){let l=y0.getComponent(r);b0.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(Ev.copy(ea).applyMatrix4(b0),o)}}return t.isVector4&&(t.w=ea.w),t.applyMatrix4(this.bindMatrixInverse)}},Ws=class extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}},vi=class extends xn{constructor(e=null,t=1,n=1,s,r,o,l,c,a=jt,h=jt,u,d){super(null,o,l,c,a,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},E0=new je,Tv=new je,_r=class i{constructor(e=[],t=[]){this.uuid=xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let l=e[r]?e[r].matrixWorld:Tv;E0.multiplyMatrices(l,t[r]),E0.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new vi(t,e,e,Xn,kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Ke("Skeleton: No bone found with UUID:",r),o=new Ws),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let l=n[s];e.boneInverses.push(l.toArray())}return e}},ci=class extends lt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},io=new je,T0=new je,fc=[],w0=new vn,wv=new je,ta=new me,na=new Jn,Fn=class extends me{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ci(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,io),w0.copy(e.boundingBox).applyMatrix4(io),this.boundingBox.union(w0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,io),na.copy(e.boundingSphere).applyMatrix4(io),this.boundingSphere.union(na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[o+l]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ta.geometry=this.geometry,ta.material=this.material,ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(n),e.ray.intersectsSphere(na)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,io),T0.multiplyMatrices(n,io),ta.matrixWorld=T0,ta.raycast(e,fc);for(let o=0,l=fc.length;o<l;o++){let c=fc[o];c.instanceId=r,c.object=this,t.push(c)}fc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ci(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vi(new Float32Array(s*this.count),s,this.count,ch,kn));let r=this.morphTexture.source.data.data,o=0;for(let a=0;a<n.length;a++)o+=n[a];let l=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=l,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ar=new Jn,Av=new pe(.5,.5),pc=new N,go=class{constructor(e=new Ri,t=new Ri,n=new Ri,s=new Ri,r=new Ri,o=new Ri){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pi,n=!1){let s=this.planes,r=e.elements,o=r[0],l=r[1],c=r[2],a=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],v=r[9],g=r[10],m=r[11],y=r[12],w=r[13],_=r[14],E=r[15];if(s[0].setComponents(a-o,f-h,m-p,E-y).normalize(),s[1].setComponents(a+o,f+h,m+p,E+y).normalize(),s[2].setComponents(a+l,f+u,m+v,E+w).normalize(),s[3].setComponents(a-l,f-u,m-v,E-w).normalize(),n)s[4].setComponents(c,d,g,_).normalize(),s[5].setComponents(a-c,f-d,m-g,E-_).normalize();else if(s[4].setComponents(a-c,f-d,m-g,E-_).normalize(),t===Pi)s[5].setComponents(a+c,f+d,m+g,E+_).normalize();else if(t===ho)s[5].setComponents(c,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){ar.center.set(0,0,0);let t=Av.distanceTo(e.center);return ar.radius=.7071067811865476+t,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(pc.x=s.normal.x>0?e.max.x:e.min.x,pc.y=s.normal.y>0?e.max.y:e.min.y,pc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xo=class extends On{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Oc=new N,Fc=new N,A0=new je,ia=new xr,mc=new Jn,xd=new N,R0=new N,yr=class extends _t{constructor(e=new xt,t=new xo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Oc.fromBufferAttribute(t,s-1),Fc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Oc.distanceTo(Fc);e.setAttribute("lineDistance",new ut(n,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(s),mc.radius+=r,e.ray.intersectsSphere(mc)===!1)return;A0.copy(s).invert(),ia.copy(e.ray).applyMatrix4(A0);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,a=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=a){let m=h.getX(v),y=h.getX(v+1),w=gc(this,e,ia,c,m,y,v);w&&t.push(w)}if(this.isLineLoop){let v=h.getX(p-1),g=h.getX(f),m=gc(this,e,ia,c,v,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=a){let m=gc(this,e,ia,c,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){let v=gc(this,e,ia,c,p-1,f,p-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function gc(i,e,t,n,s,r,o){let l=i.geometry.attributes.position;if(Oc.fromBufferAttribute(l,s),Fc.fromBufferAttribute(l,r),t.distanceSqToSegment(Oc,Fc,xd,R0)>n)return;xd.applyMatrix4(i.matrixWorld);let a=e.ray.origin.distanceTo(xd);if(!(a<e.near||a>e.far))return{distance:a,point:R0.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var C0=new N,P0=new N,xa=class extends yr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)C0.fromBufferAttribute(t,s),P0.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+C0.distanceTo(P0);e.setAttribute("lineDistance",new ut(n,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},va=class extends yr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},vo=class extends On{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},I0=new je,Td=new xr,xc=new Jn,vc=new N,_s=class extends _t{constructor(e=new xt,t=new vo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xc.copy(n.boundingSphere),xc.applyMatrix4(s),xc.radius+=r,e.ray.intersectsSphere(xc)===!1)return;I0.copy(s).invert(),Td.copy(e.ray).applyMatrix4(I0);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,a=n.index,u=n.attributes.position;if(a!==null){let d=Math.max(0,o.start),f=Math.min(a.count,o.start+o.count);for(let p=d,v=f;p<v;p++){let g=a.getX(p);vc.fromBufferAttribute(u,g),L0(vc,g,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,v=f;p<v;p++)vc.fromBufferAttribute(u,p),L0(vc,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function L0(i,e,t,n,s,r,o){let l=Td.distanceSqToPoint(i);if(l<t){let c=new N;Td.closestPointToPoint(i,c),c.applyMatrix4(n);let a=s.ray.origin.distanceTo(c);if(a<s.near||a>s.far)return;r.push({distance:a,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var _a=class extends xn{constructor(e=[],t=qs,n,s,r,o,l,c,a,h){super(e,t,n,s,r,o,l,c,a,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$t=class extends xn{constructor(e,t,n,s,r,o,l,c,a){super(e,t,n,s,r,o,l,c,a),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Yi=class extends xn{constructor(e,t,n=Oi,s,r,o,l=jt,c=jt,a,h=qi,u=1){if(h!==qi&&h!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,l,c,h,n,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new po(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Bc=class extends Yi{constructor(e,t=Oi,n=qs,s,r,o=jt,l=jt,c,a=qi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,l,c,a),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ya=class extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},rt=class i extends xt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],a=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2));function p(v,g,m,y,w,_,E,T,A,x,b){let M=_/A,C=E/x,O=_/2,L=E/2,P=T/2,D=A+1,F=x+1,B=0,q=0,k=new N;for(let W=0;W<F;W++){let ee=W*C-L;for(let le=0;le<D;le++){let Me=le*M-O;k[v]=Me*y,k[g]=ee*w,k[m]=P,a.push(k.x,k.y,k.z),k[v]=0,k[g]=0,k[m]=T>0?1:-1,h.push(k.x,k.y,k.z),u.push(le/A),u.push(1-W/x),B+=1}}for(let W=0;W<x;W++)for(let ee=0;ee<A;ee++){let le=d+ee+D*W,Me=d+ee+D*(W+1),te=d+(ee+1)+D*(W+1),ae=d+(ee+1)+D*W;c.push(le,Me,ae),c.push(Me,te,ae),q+=6}l.addGroup(f,q,b),f+=q,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ma=class i extends xt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],l=[],c=[],a=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+r,v=s+1,g=new N,m=new N;for(let y=0;y<=p;y++){let w=0,_=0,E=0,T=0;if(y<=n){let b=y/n,M=b*Math.PI/2;_=-h-e*Math.cos(M),E=e*Math.sin(M),T=-e*Math.cos(M),w=b*u}else if(y<=n+r){let b=(y-n)/r;_=-h+b*t,E=e,T=0,w=u+b*d}else{let b=(y-n-r)/n,M=b*Math.PI/2;_=h+e*Math.sin(M),E=e*Math.cos(M),T=e*Math.sin(M),w=u+d+b*u}let A=Math.max(0,Math.min(1,w/f)),x=0;y===0?x=.5/s:y===p&&(x=-.5/s);for(let b=0;b<=s;b++){let M=b/s,C=M*Math.PI*2,O=Math.sin(C),L=Math.cos(C);m.x=-E*L,m.y=_,m.z=E*O,l.push(m.x,m.y,m.z),g.set(-E*L,T,E*O),g.normalize(),c.push(g.x,g.y,g.z),a.push(M+x,A)}if(y>0){let b=(y-1)*v;for(let M=0;M<s;M++){let C=b+M,O=b+M+1,L=y*v+M,P=y*v+M+1;o.push(C,O,L),o.push(O,P,L)}}}this.setIndex(o),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Li=class i extends xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],l=[],c=[],a=new N,h=new pe;o.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;a.x=e*Math.cos(f),a.y=e*Math.sin(f),o.push(a.x,a.y,a.z),l.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ft=class i extends xt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:c};let a=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,v=[],g=n/2,m=0;y(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function y(){let _=new N,E=new N,T=0,A=(t-e)/n;for(let x=0;x<=r;x++){let b=[],M=x/r,C=M*(t-e)+e;for(let O=0;O<=s;O++){let L=O/s,P=L*c+l,D=Math.sin(P),F=Math.cos(P);E.x=C*D,E.y=-M*n+g,E.z=C*F,u.push(E.x,E.y,E.z),_.set(D,A,F).normalize(),d.push(_.x,_.y,_.z),f.push(L,1-M),b.push(p++)}v.push(b)}for(let x=0;x<s;x++)for(let b=0;b<r;b++){let M=v[b][x],C=v[b+1][x],O=v[b+1][x+1],L=v[b][x+1];(e>0||b!==0)&&(h.push(M,C,L),T+=3),(t>0||b!==r-1)&&(h.push(C,O,L),T+=3)}a.addGroup(m,T,0),m+=T}function w(_){let E=p,T=new pe,A=new N,x=0,b=_===!0?e:t,M=_===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),p++;let C=p;for(let O=0;O<=s;O++){let P=O/s*c+l,D=Math.cos(P),F=Math.sin(P);A.x=b*F,A.y=g*M,A.z=b*D,u.push(A.x,A.y,A.z),d.push(0,M,0),T.x=D*.5+.5,T.y=F*.5*M+.5,f.push(T.x,T.y),p++}for(let O=0;O<s;O++){let L=E+O,P=C+O;_===!0?h.push(P,P+1,L):h.push(P+1,P,L),x+=3}a.addGroup(m,x,_===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ys=class i extends Ft{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,l=Math.PI*2){super(0,e,t,n,s,r,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_o=class i extends xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];l(s),a(n),h(),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(r.slice(),3)),this.setAttribute("uv",new ut(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(y){let w=new N,_=new N,E=new N;for(let T=0;T<t.length;T+=3)f(t[T+0],w),f(t[T+1],_),f(t[T+2],E),c(w,_,E,y)}function c(y,w,_,E){let T=E+1,A=[];for(let x=0;x<=T;x++){A[x]=[];let b=y.clone().lerp(_,x/T),M=w.clone().lerp(_,x/T),C=T-x;for(let O=0;O<=C;O++)O===0&&x===T?A[x][O]=b:A[x][O]=b.clone().lerp(M,O/C)}for(let x=0;x<T;x++)for(let b=0;b<2*(T-x)-1;b++){let M=Math.floor(b/2);b%2===0?(d(A[x][M+1]),d(A[x+1][M]),d(A[x][M])):(d(A[x][M+1]),d(A[x+1][M+1]),d(A[x+1][M]))}}function a(y){let w=new N;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(y),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function h(){let y=new N;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];let _=g(y)/2/Math.PI+.5,E=m(y)/Math.PI+.5;o.push(_,1-E)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){let w=o[y+0],_=o[y+2],E=o[y+4],T=Math.max(w,_,E),A=Math.min(w,_,E);T>.9&&A<.1&&(w<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),E<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,w){let _=y*3;w.x=e[_+0],w.y=e[_+1],w.z=e[_+2]}function p(){let y=new N,w=new N,_=new N,E=new N,T=new pe,A=new pe,x=new pe;for(let b=0,M=0;b<r.length;b+=9,M+=6){y.set(r[b+0],r[b+1],r[b+2]),w.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),T.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),x.set(o[M+4],o[M+5]),E.copy(y).add(w).add(_).divideScalar(3);let C=g(E);v(T,M+0,y,C),v(A,M+2,w,C),v(x,M+4,_,C)}}function v(y,w,_,E){E<0&&y.x===1&&(o[w]=y.x-1),_.x===0&&_.z===0&&(o[w]=E/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},ba=class i extends _o{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var hi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let l=0,c=r-1,a;for(;l<=c;)if(s=Math.floor(l+(c-l)/2),a=n[s]-o,a<0)l=s+1;else if(a>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),l=this.getPoint(r),c=t||(o.isVector2?new pe:new N);return c.copy(l).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new N,s=[],r=[],o=[],l=new N,c=new je;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new N)}r[0]=new N,o[0]=new N;let a=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=a&&(a=h,n.set(1,0,0)),u<=a&&(a=u,n.set(0,1,0)),d<=a&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),l.crossVectors(s[f-1],s[f]),l.length()>Number.EPSILON){l.normalize();let p=Math.acos(ft(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(l,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ft(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(l.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},yo=class extends hi{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=c}getPoint(e,t=new pe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(l),a=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=a-this.aY;c=d*h-f*u+this.aX,a=d*u+f*h+this.aY}return n.set(c,a)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},kc=class extends yo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ef(){let i=0,e=0,t=0,n=0;function s(r,o,l,c){i=r,e=l,t=-3*r+3*o-2*l-c,n=2*r-2*o+l+c}return{initCatmullRom:function(r,o,l,c,a){s(o,l,a*(l-r),a*(c-o))},initNonuniformCatmullRom:function(r,o,l,c,a,h,u){let d=(o-r)/a-(l-r)/(a+h)+(l-o)/h,f=(l-o)/h-(c-o)/(h+u)+(c-l)/u;d*=h,f*=h,s(o,l,d,f)},calc:function(r){let o=r*r,l=o*r;return i+e*r+t*o+n*l}}}var D0=new N,N0=new N,vd=new ef,_d=new ef,yd=new ef,zc=class extends hi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,l=Math.floor(o),c=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:c===0&&l===r-1&&(l=r-2,c=1);let a,h;this.closed||l>0?a=s[(l-1)%r]:(N0.subVectors(s[0],s[1]).add(s[0]),a=N0);let u=s[l%r],d=s[(l+1)%r];if(this.closed||l+2<r?h=s[(l+2)%r]:(D0.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=D0),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(a.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),vd.initNonuniformCatmullRom(a.x,u.x,d.x,h.x,p,v,g),_d.initNonuniformCatmullRom(a.y,u.y,d.y,h.y,p,v,g),yd.initNonuniformCatmullRom(a.z,u.z,d.z,h.z,p,v,g)}else this.curveType==="catmullrom"&&(vd.initCatmullRom(a.x,u.x,d.x,h.x,this.tension),_d.initCatmullRom(a.y,u.y,d.y,h.y,this.tension),yd.initCatmullRom(a.z,u.z,d.z,h.z,this.tension));return n.set(vd.calc(c),_d.calc(c),yd.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function U0(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,l=i*i,c=i*l;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*l+r*i+t}function Rv(i,e){let t=1-i;return t*t*e}function Cv(i,e){return 2*(1-i)*i*e}function Pv(i,e){return i*i*e}function aa(i,e,t,n){return Rv(i,e)+Cv(i,t)+Pv(i,n)}function Iv(i,e){let t=1-i;return t*t*t*e}function Lv(i,e){let t=1-i;return 3*t*t*i*e}function Dv(i,e){return 3*(1-i)*i*i*e}function Nv(i,e){return i*i*i*e}function la(i,e,t,n,s){return Iv(i,e)+Lv(i,t)+Dv(i,n)+Nv(i,s)}var Sa=class extends hi{constructor(e=new pe,t=new pe,n=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new pe){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(la(e,s.x,r.x,o.x,l.x),la(e,s.y,r.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Hc=class extends hi{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(la(e,s.x,r.x,o.x,l.x),la(e,s.y,r.y,o.y,l.y),la(e,s.z,r.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ea=class extends hi{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gc=class extends hi{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ta=class extends hi{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(aa(e,s.x,r.x,o.x),aa(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vc=class extends hi{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(aa(e,s.x,r.x,o.x),aa(e,s.y,r.y,o.y),aa(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),l=r-o,c=s[o===0?o:o-1],a=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(U0(l,c.x,a.x,h.x,u.x),U0(l,c.y,a.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new pe().fromArray(s))}return this}},wd=Object.freeze({__proto__:null,ArcCurve:kc,CatmullRomCurve3:zc,CubicBezierCurve:Sa,CubicBezierCurve3:Hc,EllipseCurve:yo,LineCurve:Ea,LineCurve3:Gc,QuadraticBezierCurve:Ta,QuadraticBezierCurve3:Vc,SplineCurve:wa}),Wc=class extends hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,l=this.curves[r],c=l.getLength(),a=c===0?0:1-o/c;return l.getPointAt(a,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(l);for(let a=0;a<c.length;a++){let h=c[a];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new wd[s.type]().fromJSON(s))}return this}},Aa=class extends Wc{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ea(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ta(this.currentPoint.clone(),new pe(e,t),new pe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let l=new Sa(this.currentPoint.clone(),new pe(e,t),new pe(n,s),new pe(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new wa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+l,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,l,c){let a=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+a,t+h,n,s,r,o,l,c),this}absellipse(e,t,n,s,r,o,l,c){let a=new yo(e,t,n,s,r,o,l,c);if(this.curves.length>0){let u=a.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(a);let h=a.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mo=class extends Aa{constructor(e){super(e),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Aa().fromJSON(s))}return this}};function Uv(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Im(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let l,c,a;if(n&&(r=zv(i,e,r,t)),i.length>80*t){l=i[0],c=i[1];let h=l,u=c;for(let d=t;d<s;d+=t){let f=i[d],p=i[d+1];f<l&&(l=f),p<c&&(c=p),f>h&&(h=f),p>u&&(u=p)}a=Math.max(h-l,u-c),a=a!==0?32767/a:0}return Ra(r,o,t,l,c,a,0),o}function Im(i,e,t,n,s){let r;if(s===$v(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=O0(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=O0(o/n|0,i[o],i[o+1],r);return r&&bo(r,r.next)&&(Pa(r),r=r.next),r}function Mr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(bo(t,t.next)||Qt(t.prev,t,t.next)===0)){if(Pa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ra(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Xv(i,n,s,r);let l=i;for(;i.prev!==i.next;){let c=i.prev,a=i.next;if(r?Fv(i,n,s,r):Ov(i)){e.push(c.i,i.i,a.i),Pa(i),i=a.next,l=a.next;continue}if(i=a,i===l){o?o===1?(i=Bv(Mr(i),e),Ra(i,e,t,n,s,r,2)):o===2&&kv(i,e,t,n,s,r):Ra(Mr(i),e,t,n,s,r,1);break}}}function Ov(i){let e=i.prev,t=i,n=i.next;if(Qt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,l=e.y,c=t.y,a=n.y,h=Math.min(s,r,o),u=Math.min(l,c,a),d=Math.max(s,r,o),f=Math.max(l,c,a),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&sa(s,l,r,c,o,a,p.x,p.y)&&Qt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Fv(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Qt(s,r,o)>=0)return!1;let l=s.x,c=r.x,a=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(l,c,a),p=Math.min(h,u,d),v=Math.max(l,c,a),g=Math.max(h,u,d),m=Ad(f,p,e,t,n),y=Ad(v,g,e,t,n),w=i.prevZ,_=i.nextZ;for(;w&&w.z>=m&&_&&_.z<=y;){if(w.x>=f&&w.x<=v&&w.y>=p&&w.y<=g&&w!==s&&w!==o&&sa(l,h,c,u,a,d,w.x,w.y)&&Qt(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&sa(l,h,c,u,a,d,_.x,_.y)&&Qt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=v&&w.y>=p&&w.y<=g&&w!==s&&w!==o&&sa(l,h,c,u,a,d,w.x,w.y)&&Qt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&sa(l,h,c,u,a,d,_.x,_.y)&&Qt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Bv(i,e){let t=i;do{let n=t.prev,s=t.next.next;!bo(n,s)&&Dm(n,t,t.next,s)&&Ca(n,s)&&Ca(s,n)&&(e.push(n.i,t.i,s.i),Pa(t),Pa(t.next),t=i=s),t=t.next}while(t!==i);return Mr(t)}function kv(i,e,t,n,s,r){let o=i;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&Zv(o,l)){let c=Nm(o,l);o=Mr(o,o.next),c=Mr(c,c.next),Ra(o,e,t,n,s,r,0),Ra(c,e,t,n,s,r,0);return}l=l.next}o=o.next}while(o!==i)}function zv(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let l=e[r]*n,c=r<o-1?e[r+1]*n:i.length,a=Im(i,l,c,n,!1);a===a.next&&(a.steiner=!0),s.push(Yv(a))}s.sort(Hv);for(let r=0;r<s.length;r++)t=Gv(s[r],t);return t}function Hv(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Gv(i,e){let t=Vv(i,e);if(!t)return e;let n=Nm(t,i);return Mr(n,n.next),Mr(t,t.next)}function Vv(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(bo(i,t))return t;do{if(bo(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let l=o,c=o.x,a=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Lm(s<a?n:r,s,c,a,s<a?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Ca(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Wv(o,t)))&&(o=t,h=u)}t=t.next}while(t!==l);return o}function Wv(i,e){return Qt(i.prev,i,e.prev)<0&&Qt(e.next,i,i.next)<0}function Xv(i,e,t,n){let s=i;do s.z===0&&(s.z=Ad(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,qv(s)}function qv(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,l=0;for(let a=0;a<t&&(l++,o=o.nextZ,!!o);a++);let c=t;for(;l>0||c>0&&o;)l!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,l--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Ad(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Yv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Lm(i,e,t,n,s,r,o,l){return(s-o)*(e-l)>=(i-o)*(r-l)&&(i-o)*(n-l)>=(t-o)*(e-l)&&(t-o)*(r-l)>=(s-o)*(n-l)}function sa(i,e,t,n,s,r,o,l){return!(i===o&&e===l)&&Lm(i,e,t,n,s,r,o,l)}function Zv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Kv(i,e)&&(Ca(i,e)&&Ca(e,i)&&jv(i,e)&&(Qt(i.prev,i,e.prev)||Qt(i,e.prev,e))||bo(i,e)&&Qt(i.prev,i,i.next)>0&&Qt(e.prev,e,e.next)>0)}function Qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function bo(i,e){return i.x===e.x&&i.y===e.y}function Dm(i,e,t,n){let s=yc(Qt(i,e,t)),r=yc(Qt(i,e,n)),o=yc(Qt(t,n,i)),l=yc(Qt(t,n,e));return!!(s!==r&&o!==l||s===0&&_c(i,t,e)||r===0&&_c(i,n,e)||o===0&&_c(t,i,n)||l===0&&_c(t,e,n))}function _c(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function yc(i){return i>0?1:i<0?-1:0}function Kv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Dm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ca(i,e){return Qt(i.prev,i,i.next)<0?Qt(i,e,i.next)>=0&&Qt(i,i.prev,e)>=0:Qt(i,e,i.prev)<0||Qt(i,i.next,e)<0}function jv(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Nm(i,e){let t=Rd(i.i,i.x,i.y),n=Rd(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function O0(i,e,t,n){let s=Rd(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Pa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Rd(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $v(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Cd=class{static triangulate(e,t,n=2){return Uv(e,t,n)}},hr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];F0(e),B0(n,e);let o=e.length;t.forEach(F0);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,B0(n,t[c]);let l=Cd.triangulate(n,s);for(let c=0;c<l.length;c+=3)r.push(l.slice(c,c+3));return r}};function F0(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function B0(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ia=class i extends xt{constructor(e=new Mo([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let l=0,c=e.length;l<c;l++){let a=e[l];o(a)}this.setAttribute("position",new ut(s,3)),this.setAttribute("uv",new ut(r,2)),this.computeVertexNormals();function o(l){let c=[],a=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Jv,w,_=!1,E,T,A,x;if(m){w=m.getSpacedPoints(h),_=!0,d=!1;let ne=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(h,ne),T=new N,A=new N,x=new N}d||(g=0,f=0,p=0,v=0);let b=l.extractPoints(a),M=b.shape,C=b.holes;if(!hr.isClockWise(M)){M=M.reverse();for(let ne=0,ue=C.length;ne<ue;ne++){let ve=C[ne];hr.isClockWise(ve)&&(C[ne]=ve.reverse())}}function L(ne){let ve=10000000000000001e-36,fe=ne[0];for(let Se=1;Se<=ne.length;Se++){let Ve=Se%ne.length,He=ne[Ve],et=He.x-fe.x,tt=He.y-fe.y,z=et*et+tt*tt,vt=Math.max(Math.abs(He.x),Math.abs(He.y),Math.abs(fe.x),Math.abs(fe.y)),ot=ve*vt*vt;if(z<=ot){ne.splice(Ve,1),Se--;continue}fe=He}}L(M),C.forEach(L);let P=C.length,D=M;for(let ne=0;ne<P;ne++){let ue=C[ne];M=M.concat(ue)}function F(ne,ue,ve){return ue||it("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(ue,ve)}let B=M.length;function q(ne,ue,ve){let fe,Se,Ve,He=ne.x-ue.x,et=ne.y-ue.y,tt=ve.x-ne.x,z=ve.y-ne.y,vt=He*He+et*et,ot=He*z-et*tt;if(Math.abs(ot)>Number.EPSILON){let U=Math.sqrt(vt),S=Math.sqrt(tt*tt+z*z),V=ue.x-et/U,Y=ue.y+He/U,J=ve.x-z/S,be=ve.y+tt/S,Ce=((J-V)*z-(be-Y)*tt)/(He*z-et*tt);fe=V+He*Ce-ne.x,Se=Y+et*Ce-ne.y;let oe=fe*fe+Se*Se;if(oe<=2)return new pe(fe,Se);Ve=Math.sqrt(oe/2)}else{let U=!1;He>Number.EPSILON?tt>Number.EPSILON&&(U=!0):He<-Number.EPSILON?tt<-Number.EPSILON&&(U=!0):Math.sign(et)===Math.sign(z)&&(U=!0),U?(fe=-et,Se=He,Ve=Math.sqrt(vt)):(fe=He,Se=et,Ve=Math.sqrt(vt/2))}return new pe(fe/Ve,Se/Ve)}let k=[];for(let ne=0,ue=D.length,ve=ue-1,fe=ne+1;ne<ue;ne++,ve++,fe++)ve===ue&&(ve=0),fe===ue&&(fe=0),k[ne]=q(D[ne],D[ve],D[fe]);let W=[],ee,le=k.concat();for(let ne=0,ue=P;ne<ue;ne++){let ve=C[ne];ee=[];for(let fe=0,Se=ve.length,Ve=Se-1,He=fe+1;fe<Se;fe++,Ve++,He++)Ve===Se&&(Ve=0),He===Se&&(He=0),ee[fe]=q(ve[fe],ve[Ve],ve[He]);W.push(ee),le=le.concat(ee)}let Me;if(g===0)Me=hr.triangulateShape(D,C);else{let ne=[],ue=[];for(let ve=0;ve<g;ve++){let fe=ve/g,Se=f*Math.cos(fe*Math.PI/2),Ve=p*Math.sin(fe*Math.PI/2)+v;for(let He=0,et=D.length;He<et;He++){let tt=F(D[He],k[He],Ve);Ae(tt.x,tt.y,-Se),fe===0&&ne.push(tt)}for(let He=0,et=P;He<et;He++){let tt=C[He];ee=W[He];let z=[];for(let vt=0,ot=tt.length;vt<ot;vt++){let U=F(tt[vt],ee[vt],Ve);Ae(U.x,U.y,-Se),fe===0&&z.push(U)}fe===0&&ue.push(z)}}Me=hr.triangulateShape(ne,ue)}let te=Me.length,ae=p+v;for(let ne=0;ne<B;ne++){let ue=d?F(M[ne],le[ne],ae):M[ne];_?(A.copy(E.normals[0]).multiplyScalar(ue.x),T.copy(E.binormals[0]).multiplyScalar(ue.y),x.copy(w[0]).add(A).add(T),Ae(x.x,x.y,x.z)):Ae(ue.x,ue.y,0)}for(let ne=1;ne<=h;ne++)for(let ue=0;ue<B;ue++){let ve=d?F(M[ue],le[ue],ae):M[ue];_?(A.copy(E.normals[ne]).multiplyScalar(ve.x),T.copy(E.binormals[ne]).multiplyScalar(ve.y),x.copy(w[ne]).add(A).add(T),Ae(x.x,x.y,x.z)):Ae(ve.x,ve.y,u/h*ne)}for(let ne=g-1;ne>=0;ne--){let ue=ne/g,ve=f*Math.cos(ue*Math.PI/2),fe=p*Math.sin(ue*Math.PI/2)+v;for(let Se=0,Ve=D.length;Se<Ve;Se++){let He=F(D[Se],k[Se],fe);Ae(He.x,He.y,u+ve)}for(let Se=0,Ve=C.length;Se<Ve;Se++){let He=C[Se];ee=W[Se];for(let et=0,tt=He.length;et<tt;et++){let z=F(He[et],ee[et],fe);_?Ae(z.x,z.y+w[h-1].y,w[h-1].x+ve):Ae(z.x,z.y,u+ve)}}}Pe(),Z();function Pe(){let ne=s.length/3;if(d){let ue=0,ve=B*ue;for(let fe=0;fe<te;fe++){let Se=Me[fe];Xe(Se[2]+ve,Se[1]+ve,Se[0]+ve)}ue=h+g*2,ve=B*ue;for(let fe=0;fe<te;fe++){let Se=Me[fe];Xe(Se[0]+ve,Se[1]+ve,Se[2]+ve)}}else{for(let ue=0;ue<te;ue++){let ve=Me[ue];Xe(ve[2],ve[1],ve[0])}for(let ue=0;ue<te;ue++){let ve=Me[ue];Xe(ve[0]+B*h,ve[1]+B*h,ve[2]+B*h)}}n.addGroup(ne,s.length/3-ne,0)}function Z(){let ne=s.length/3,ue=0;re(D,ue),ue+=D.length;for(let ve=0,fe=C.length;ve<fe;ve++){let Se=C[ve];re(Se,ue),ue+=Se.length}n.addGroup(ne,s.length/3-ne,1)}function re(ne,ue){let ve=ne.length;for(;--ve>=0;){let fe=ve,Se=ve-1;Se<0&&(Se=ne.length-1);for(let Ve=0,He=h+g*2;Ve<He;Ve++){let et=B*Ve,tt=B*(Ve+1),z=ue+fe+et,vt=ue+Se+et,ot=ue+Se+tt,U=ue+fe+tt;Q(z,vt,ot,U)}}}function Ae(ne,ue,ve){c.push(ne),c.push(ue),c.push(ve)}function Xe(ne,ue,ve){xe(ne),xe(ue),xe(ve);let fe=s.length/3,Se=y.generateTopUV(n,s,fe-3,fe-2,fe-1);Ee(Se[0]),Ee(Se[1]),Ee(Se[2])}function Q(ne,ue,ve,fe){xe(ne),xe(ue),xe(fe),xe(ue),xe(ve),xe(fe);let Se=s.length/3,Ve=y.generateSideWallUV(n,s,Se-6,Se-3,Se-2,Se-1);Ee(Ve[0]),Ee(Ve[1]),Ee(Ve[3]),Ee(Ve[1]),Ee(Ve[2]),Ee(Ve[3])}function xe(ne){s.push(c[ne*3+0]),s.push(c[ne*3+1]),s.push(c[ne*3+2])}function Ee(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Qv(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let l=t[e.shapes[r]];n.push(l)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new wd[s.type]().fromJSON(s)),new i(n,e.options)}},Jv={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],l=e[n*3],c=e[n*3+1],a=e[s*3],h=e[s*3+1];return[new pe(r,o),new pe(l,c),new pe(a,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],l=e[t*3+1],c=e[t*3+2],a=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(l-h)<Math.abs(o-a)?[new pe(o,1-c),new pe(a,1-u),new pe(d,1-p),new pe(v,1-m)]:[new pe(l,1-c),new pe(h,1-u),new pe(f,1-p),new pe(g,1-m)]}};function Qv(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var br=class i extends _o{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var La=class i extends _o{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},en=class i extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,l=Math.floor(n),c=Math.floor(s),a=l+1,h=c+1,u=e/l,d=t/c,f=[],p=[],v=[],g=[];for(let m=0;m<h;m++){let y=m*d-o;for(let w=0;w<a;w++){let _=w*u-r;p.push(_,-y,0),v.push(0,0,1),g.push(w/l),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<l;y++){let w=y+a*m,_=y+a*(m+1),E=y+1+a*(m+1),T=y+1+a*m;f.push(w,_,T),f.push(_,E,T)}this.setIndex(f),this.setAttribute("position",new ut(p,3)),this.setAttribute("normal",new ut(v,3)),this.setAttribute("uv",new ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Zi=class i extends xt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let l=[],c=[],a=[],h=[],u=e,d=(t-e)/s,f=new N,p=new pe;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){let m=r+g/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),c.push(f.x,f.y,f.z),a.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let v=0;v<s;v++){let g=v*(n+1);for(let m=0;m<n;m++){let y=m+g,w=y,_=y+n+1,E=y+n+2,T=y+1;l.push(w,_,T),l.push(_,E,T)}}this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(a,3)),this.setAttribute("uv",new ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var _n=class i extends xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+l,Math.PI),a=0,h=[],u=new N,d=new N,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){let y=[],w=m/n,_=o+w*l,E=e*Math.cos(_),T=Math.sqrt(e*e-E*E),A=0;m===0&&o===0?A=.5/t:m===n&&c===Math.PI&&(A=-.5/t);for(let x=0;x<=t;x++){let b=x/t,M=s+b*r;u.x=-T*Math.cos(M),u.y=E,u.z=T*Math.sin(M),p.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(b+A,1-w),y.push(a++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){let w=h[m][y+1],_=h[m][y],E=h[m+1][y],T=h[m+1][y+1];(m!==0||o>0)&&f.push(w,_,T),(m!==n-1||c<Math.PI)&&f.push(_,E,T)}this.setIndex(f),this.setAttribute("position",new ut(p,3)),this.setAttribute("normal",new ut(v,3)),this.setAttribute("uv",new ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ui=class i extends xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:l},n=Math.floor(n),s=Math.floor(s);let c=[],a=[],h=[],u=[],d=new N,f=new N,p=new N;for(let v=0;v<=n;v++){let g=o+v/n*l;for(let m=0;m<=s;m++){let y=m/s*r;f.x=(e+t*Math.cos(g))*Math.cos(y),f.y=(e+t*Math.cos(g))*Math.sin(y),f.z=t*Math.sin(g),a.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(m/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=s;g++){let m=(s+1)*v+g-1,y=(s+1)*(v-1)+g-1,w=(s+1)*(v-1)+g,_=(s+1)*v+g;c.push(m,y,_),c.push(y,w,_)}this.setIndex(c),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Nr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(k0(s))s.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(k0(s[0])){let r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function zn(i){let e={};for(let t=0;t<i.length;t++){let n=Nr(i[t]);for(let s in n)e[s]=n[s]}return e}function k0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function e_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function tf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Rn={clone:Nr,merge:zn},t_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yt=class extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t_,this.fragmentShader=n_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=e_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new de().setHex(s.value);break;case"v2":this.uniforms[n].value=new pe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new at().fromArray(s.value);break;case"m4":this.uniforms[n].value=new je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},So=class extends yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Je=class extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ei=class extends Je{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new de(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new de(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new de(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Da=class extends On{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Xc=class extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qc=class extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Hs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Tc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function i_(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function z0(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let l=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[l+c]}return s}function s_(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Ki=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let l=n+o>>>1;e<t[l]?o=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yc=class extends Ki{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lr,endingEnd:lr}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,l=s[r],c=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case cr:r=e,l=2*t-n;break;case ca:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case cr:o=e,c=2*n-t;break;case ca:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let a=(n-t)*.5,h=this.valueSize;this._weightPrev=a/(t-l),this._weightNext=a/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,a=c-l,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),v=p*p,g=v*p,m=-d*g+2*d*v-d*p,y=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*p+1,w=(-1-f)*g+(1.5+f)*v+.5*p,_=f*g-f*v;for(let E=0;E!==l;++E)r[E]=m*o[h+E]+y*o[a+E]+w*o[c+E]+_*o[u+E];return r}},Na=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,a=c-l,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==l;++d)r[d]=o[a+d]*u+o[c+d]*h;return r}},Zc=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Kc=class extends Ki{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,a=c-l,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(s-t),v=1-p;for(let g=0;g!==l;++g)r[g]=o[a+g]*v+o[c+g]*p;return r}let d=l*2,f=e-1;for(let p=0;p!==l;++p){let v=o[a+p],g=o[c+p],m=f*d+p*2,y=u[m],w=u[m+1],_=e*d+p*2,E=h[_],T=h[_+1],A=o_(n,t,y,E,s);r[p]=Um(A,v,w,T,g)}return r}};function Um(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function r_(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function o_(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let l=Um(r,e,t,n,s)-i;if(Math.abs(l)<1e-10)break;let c=r_(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var ti=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hs(t,this.TimeBufferType),this.values=Hs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hs(e.times,Array),values:Hs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Tc(e.settings)&&(n.settings={inTangents:Hs(e.settings.inTangents,Array),outTangents:Hs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Kc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case dr:t=this.InterpolantFactoryMethodDiscrete;break;case fr:t=this.InterpolantFactoryMethodLinear;break;case Sc:t=this.InterpolantFactoryMethodSmooth;break;case Ed:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return fr;case this.InterpolantFactoryMethodSmooth:return Sc;case this.InterpolantFactoryMethodBezier:return Ed}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Tc(this.settings)&&(H0(this.settings.inTangents,e),H0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(it("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(it("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){it("KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(o!==null&&o>c){it("KeyframeTrack: Out of order keys.",this,l,c,o),e=!1;break}o=c}if(s!==void 0&&Hx(s))for(let l=0,c=s.length;l!==c;++l){let a=s[l];if(isNaN(a)){it("KeyframeTrack: Value is not a valid number.",this,l,a),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Sc,r=e.length-1,o=1;for(let l=1;l<r;++l){let c=!1,a=e[l],h=e[l+1];if(a!==h&&(l!==1||a!==e[0]))if(s)c=!0;else{let u=l*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let v=t[u+p];if(v!==t[d+p]||v!==t[f+p]){c=!0;break}}}if(c){if(l!==o){e[o]=e[l];let u=l*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,c=o*n,a=0;a!==n;++a)t[c+a]=t[l+a];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Tc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function H0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}ti.prototype.ValueTypeName="";ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=fr;var Ms=class extends ti{constructor(e,t,n){super(e,t,n)}};Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=dr;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends ti{constructor(e,t,n,s){super(e,t,n,s)}};Ua.prototype.ValueTypeName="color";var bs=class extends ti{constructor(e,t,n,s){super(e,t,n,s)}};bs.prototype.ValueTypeName="number";var jc=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=(n-t)/(s-t),a=e*l;for(let h=a+l;a!==h;a+=4)fn.slerpFlat(r,0,o,a-l,o,a,c);return r}},Ss=class extends ti{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new jc(this.times,this.values,this.getValueSize(),e)}};Ss.prototype.ValueTypeName="quaternion";Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends ti{constructor(e,t,n){super(e,t,n)}};Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=dr;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var Xs=class extends ti{constructor(e,t,n,s){super(e,t,n,s)}};Xs.prototype.ValueTypeName="vector";var Sr=class{constructor(e="",t=-1,n=[],s=Wh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=xi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,l=n.length;o!==l;++o)t.push(l_(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(ti.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let l=0;l<r;l++){let c=[],a=[];c.push((l+r-1)%r,l,(l+1)%r),a.push(0,1,0);let h=i_(c);c=z0(c,1,h),a=z0(a,1,h),!s&&c[0]===0&&(c.push(r),a.push(a[0])),o.push(new bs(".morphTargetInfluences["+t[l].name+"]",c,a).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let l=0,c=e.length;l<c;l++){let a=e[l],h=a.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(a)}}let o=[];for(let l in s)o.push(this.CreateFromMorphTargetSequence(l,s[l],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function a_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bs;case"vector":case"vector2":case"vector3":case"vector4":return Xs;case"color":return Ua;case"quaternion":return Ss;case"bool":case"boolean":return Ms;case"string":return Es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function l_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=a_(i.type);if(i.times===void 0){let n=[],s=[];s_(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Tc(i.settings)&&(t.settings={inTangents:Hs(i.settings.inTangents,Float32Array),outTangents:Hs(i.settings.outTangents,Float32Array)}),t}var Xi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(G0(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!G0(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function G0(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var $c=class{constructor(e,t,n){let s=this,r=!1,o=0,l=0,c,a=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,l),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return a.push(h,u),this},this.removeHandler=function(h){let u=a.indexOf(h);return u!==-1&&a.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=a.length;u<d;u+=2){let f=a[u],p=a[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Om=new $c,Di=class{constructor(e){this.manager=e!==void 0?e:Om,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Di.DEFAULT_MATERIAL_NAME="__DEFAULT";var ms={},Pd=class extends Error{constructor(e,t){super(e),this.response=t}},Er=class extends Di{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Xi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ms[e]!==void 0){ms[e].push({onLoad:t,onProgress:n,onError:s});return}ms[e]=[],ms[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),l=this.mimeType,c=this.responseType;fetch(o).then(a=>{if(a.status===200||a.status===0){if(a.status===0&&Ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||a.body===void 0||a.body.getReader===void 0)return a;let h=ms[e],u=a.body.getReader(),d=a.headers.get("X-File-Size")||a.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,v=0,g=new ReadableStream({start(m){y();function y(){u.read().then(({done:w,value:_})=>{if(w)m.close();else{v+=_.byteLength;let E=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let T=0,A=h.length;T<A;T++){let x=h[T];x.onProgress&&x.onProgress(E)}m.enqueue(_),y()}},w=>{m.error(w)})}}});return new Response(g)}else throw new Pd(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`,a)}).then(a=>{switch(c){case"arraybuffer":return a.arrayBuffer();case"blob":return a.blob();case"document":return a.text().then(h=>new DOMParser().parseFromString(h,l));case"json":return a.json();default:if(l==="")return a.text();{let u=/charset="?([^;"\s]*)"?/i.exec(l),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return a.arrayBuffer().then(p=>f.decode(p))}}}).then(a=>{Xi.add(`file:${e}`,a);let h=ms[e];delete ms[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(a)}}).catch(a=>{let h=ms[e];if(h===void 0)throw this.manager.itemError(e),a;delete ms[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(a)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var so=new WeakMap,Jc=class extends Di{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Xi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=so.get(o);u===void 0&&(u=[],so.set(o,u)),u.push({onLoad:t,onError:s})}return o}let l=uo("img");function c(){h(),t&&t(this);let u=so.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}so.delete(this),r.manager.itemEnd(e)}function a(u){h(),s&&s(u),Xi.remove(`image:${e}`);let d=so.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}so.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){l.removeEventListener("load",c,!1),l.removeEventListener("error",a,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",a,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),Xi.add(`image:${e}`,l),r.manager.itemStart(e),l.src=e,l}};var Oa=class extends Di{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new vi,l=new Er(this.manager);return l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setPath(this.path),l.setWithCredentials(r.withCredentials),l.load(e,function(c){let a;try{a=r.parse(c)}catch(h){s!==void 0?s(h):it(h);return}r._applyTexData(o,a),t&&t(o,a)},n,s),o}createDataTexture(e){let t=new vi;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Un,e.wrapT=t.wrapT!==void 0?t.wrapT:Un,e.magFilter=t.magFilter!==void 0?t.magFilter:zt,e.minFilter=t.minFilter!==void 0?t.minFilter:zt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=ni),t.mipmapCount===1&&(e.minFilter=zt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},Ni=class extends Di{constructor(e){super(e)}load(e,t,n,s){let r=new xn,o=new Jc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Tr=class extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},wr=class extends Tr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Md=new je,V0=new N,W0=new N,Eo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;V0.setFromMatrixPosition(e.matrixWorld),t.position.copy(V0),W0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(W0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Md.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Md,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,a=s?s.y/r.y:0;e.coordinateSystem===ho||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+a,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+a,0,0,.5,.5,0,0,0,1),t.multiply(Md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Mc=new N,bc=new fn,Wi=new N,Fa=class extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Mc,bc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mc,bc,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Mc,bc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mc,bc,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zs=new N,X0=new pe,q0=new pe,dn=class extends Fa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zs.x,zs.y).multiplyScalar(-e/zs.z),zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zs.x,zs.y).multiplyScalar(-e/zs.z)}getViewSize(e,t){return this.getViewBounds(e,X0,q0),t.subVectors(q0,X0)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ra*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,a=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/a,s*=o.width/c,n*=o.height/a}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Id=class extends Eo{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=pr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ar=class extends Tr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Id}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ld=class extends Eo{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0}},_i=class extends Tr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ld}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ji=class extends Fa{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let a=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=a*this.view.offsetX,o=r+a*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Dd=class extends Eo{constructor(){super(new ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ts=class extends Tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Dd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ws=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var bd=new WeakMap,Ba=class extends Di{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Xi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(a=>{bd.has(o)===!0?(s&&s(bd.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(a),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader,l.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,l).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(a){return Xi.add(`image-bitmap:${e}`,a),t&&t(a),r.manager.itemEnd(e),a}).catch(function(a){s&&s(a),bd.set(c,a),Xi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Xi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ro=-90,oo=1,Qc=class extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(ro,oo,e,t);s.layers=this.layers,this.add(s);let r=new dn(ro,oo,e,t);r.layers=this.layers,this.add(r);let o=new dn(ro,oo,e,t);o.layers=this.layers,this.add(o);let l=new dn(ro,oo,e,t);l.layers=this.layers,this.add(l);let c=new dn(ro,oo,e,t);c.layers=this.layers,this.add(c);let a=new dn(ro,oo,e,t);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,l,c]=t;for(let a of t)this.remove(a);if(e===Pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let a of t)this.add(a),a.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,l,c,a,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},eh=class extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ka=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=c_.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function c_(){this._document.hidden===!1&&this.reset()}var th=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let l=0;l!==s;++l)n[r+l]=n[l];o=t}else{o+=t;let l=t/o;this._mixBufferRegion(n,r,0,l,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,l=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,a=t+t;c!==a;++c)if(n[c]!==n[c+t]){l.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){fn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;fn.multiplyQuaternionsFlat(e,o,e,t,e,n),fn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let l=0;l!==r;++l){let c=t+l;e[c]=e[c]*o+e[n+l]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]+e[n+o]*s}}},nf="\\[\\]\\.:\\/",h_=new RegExp("["+nf+"]","g"),sf="[^"+nf+"]",u_="[^"+nf.replace("\\.","")+"]",d_=/((?:WC+[\/:])*)/.source.replace("WC",sf),f_=/(WCOD+)?/.source.replace("WCOD",u_),p_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sf),m_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sf),g_=new RegExp("^"+d_+f_+p_+m_+"$"),x_=["material","materials","bones","map"],Nd=class{constructor(e,t,n){let s=n||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ot=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(h_,"")}static parseTrackName(e){let t=g_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);x_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===t||l.uuid===t)return l;let c=n(l.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let a=t.objectIndex;switch(n){case"materials":if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){it("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){it("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===a){a=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){it("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){it("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(a!==void 0){if(e[a]===void 0){it("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[a]}}let o=e[s];if(o===void 0){let a=t.nodeName;it("PropertyBinding: Trying to update property for track: "+a+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=Nd;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nh=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,l=new Array(o),c={endingStart:lr,endingEnd:lr};for(let a=0;a!==o;++a){let h=r[a].createInterpolant(null);l[a]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=l,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=fm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,l=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(l,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,l=this._timeScaleInterpolant;l===null&&(l=s._lendControlInterpolant(),this._timeScaleInterpolant=l);let c=l.parameterPositions,a=l.sampleValues;return c[0]=r,c[1]=r+n,a[0]=e/o,a[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),l=this._updateWeight(e);if(l>0){let c=this._interpolants,a=this._propertyBindings;switch(this.blendMode){case mm:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),a[h].accumulateAdditive(l);break;case Wh:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),a[h].accumulate(s,l)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===pm;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Vh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let l=Math.floor(s/t);s-=t*l,r+=Math.abs(l);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let a=e<0;this._setEndings(a,!a,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:l})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=cr,s.endingEnd=cr):(e?s.endingStart=this.zeroSlopeAtStart?cr:lr:s.endingStart=ca,t?s.endingEnd=this.zeroSlopeAtEnd?cr:lr:s.endingEnd=ca)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,c[0]=t,l[1]=r+e,c[1]=n,this}},v_=new Float32Array(1),za=class extends Ii{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,l=e._interpolants,c=n.uuid,a=this._bindingsByRootAndName,h=a[c];h===void 0&&(h={},a[c]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,p=h[f];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;p=new th(Ot.create(n,f,v),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),o[u]=p}l[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let l=o.knownActions;e._byClipCacheIndex=l.length,l.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,l=o[r],c=l.knownActions,a=c[c.length-1],h=e._byClipCacheIndex;a._byClipCacheIndex=h,c[h]=a,c.pop(),e._byClipCacheIndex=null;let u=l.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,l=o[s],c=t[t.length-1],a=e._cacheIndex;c._cacheIndex=a,t[a]=c,t.pop(),delete l[r],Object.keys(l).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Na(new Float32Array(2),new Float32Array(2),1,v_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Sr.findByName(s,e):e,l=o!==null?o.uuid:e,c=this._actionsByClip[l],a=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Wh),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;a=c.knownActions[0],o===null&&(o=a._clip)}if(o===null)return null;let h=new nh(this,o,t,n);return this._bindAction(h,a),this._addInactiveAction(h,l,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Sr.findByName(n,e):e,o=r?r.uuid:e,l=this._actionsByClip[o];return l!==void 0&&l.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let a=0;a!==n;++a)t[a]._update(s,e,r,o);let l=this._bindings,c=this._nActiveBindings;for(let a=0;a!==c;++a)l[a].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let l=0,c=o.length;l!==c;++l){let a=o[l];this._deactivateAction(a);let h=a._cacheIndex,u=t[t.length-1];a._cacheIndex=null,a._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(a)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let l=n[o].actionByRoot,c=l[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let l=r[o];l.restoreOriginalState(),this._removeInactiveBinding(l)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Ud=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function rf(i,e,t,n){let s=__(n);switch(t){case Yd:return i*e;case ch:return i*e/s.components*s.byteLength;case hh:return i*e/s.components*s.byteLength;case Zs:return i*e*2/s.components*s.byteLength;case uh:return i*e*2/s.components*s.byteLength;case Zd:return i*e*3/s.components*s.byteLength;case Xn:return i*e*4/s.components*s.byteLength;case dh:return i*e*4/s.components*s.byteLength;case ja:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ja:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ph:case gh:return Math.max(i,16)*Math.max(e,8)/4;case fh:case mh:return Math.max(i,8)*Math.max(e,8)/2;case xh:case vh:case yh:case Mh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _h:case el:case bh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Th:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Nh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fh:case Bh:case kh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case zh:case Hh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case tl:case Gh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function __(i){switch(i){case Bn:case Vd:return{byteLength:1,components:1};case Ao:case Wd:case Wt:return{byteLength:2,components:1};case ah:case lh:return{byteLength:2,components:4};case Oi:case oh:case kn:return{byteLength:4,components:1};case Xd:case qd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function sg(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function M_(i){let e=new WeakMap;function t(l,c){let a=l.array,h=l.usage,u=a.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,a,h),l.onUploadCallback();let f;if(a instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)f=i.HALF_FLOAT;else if(a instanceof Uint16Array)l.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(a instanceof Int16Array)f=i.SHORT;else if(a instanceof Uint32Array)f=i.UNSIGNED_INT;else if(a instanceof Int32Array)f=i.INT;else if(a instanceof Int8Array)f=i.BYTE;else if(a instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:d,type:f,bytesPerElement:a.BYTES_PER_ELEMENT,version:l.version,size:u}}function n(l,c,a){let h=c.array,u=c.updateRanges;if(i.bindBuffer(a,l),u.length===0)i.bufferSubData(a,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let v=u[f];i.bufferSubData(a,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let a=e.get(l);if(a===void 0)e.set(l,t(l,c));else if(a.version<l.version){if(a.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(a.buffer,l,c),a.version=l.version}}return{get:s,remove:r,update:o}}var b_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S_=`#ifdef USE_ALPHAHASH
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
#endif`,E_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R_=`#ifdef USE_AOMAP
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
#endif`,C_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P_=`#ifdef USE_BATCHING
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
#endif`,I_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,U_=`#ifdef USE_IRIDESCENCE
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
#endif`,O_=`#ifdef USE_BUMPMAP
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
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,G_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,V_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,W_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,X_=`#define PI 3.141592653589793
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
} // validated`,q_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Y_=`vec3 transformedNormal = objectNormal;
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
#endif`,Z_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ey=`#ifdef USE_ENVMAP
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
#endif`,ty=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ny=`#ifdef USE_ENVMAP
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
#endif`,iy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sy=`#ifdef USE_ENVMAP
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
#endif`,ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ay=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cy=`#ifdef USE_GRADIENTMAP
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
}`,hy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,py=`#ifdef USE_ENVMAP
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
#endif`,my=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_y=`PhysicalMaterial material;
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
#endif`,yy=`uniform sampler2D dfgLUT;
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
}`,My=`
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
#endif`,by=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ey=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ay=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ry=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Py=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ly=`#if defined( USE_POINTS_UV )
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
#endif`,Dy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ny=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Oy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,By=`#ifdef USE_MORPHTARGETS
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
#endif`,ky=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xy=`#ifdef USE_NORMALMAP
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
#endif`,qy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ky=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$y=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,a1=`float getShadowMask() {
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
}`,l1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c1=`#ifdef USE_SKINNING
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
#endif`,h1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u1=`#ifdef USE_SKINNING
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
#endif`,d1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,g1=`#ifdef USE_TRANSMISSION
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
#endif`,x1=`#ifdef USE_TRANSMISSION
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
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,b1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S1=`uniform sampler2D t2D;
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
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`#include <common>
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
}`,C1=`#if DEPTH_PACKING == 3200
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
}`,P1=`#define DISTANCE
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
}`,I1=`#define DISTANCE
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
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`uniform float scale;
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
}`,U1=`uniform vec3 diffuse;
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
}`,O1=`#include <common>
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
}`,F1=`uniform vec3 diffuse;
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
}`,B1=`#define LAMBERT
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
}`,k1=`#define LAMBERT
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
}`,z1=`#define MATCAP
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
}`,H1=`#define MATCAP
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
}`,G1=`#define NORMAL
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
}`,V1=`#define NORMAL
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
}`,W1=`#define PHONG
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
}`,X1=`#define PHONG
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
}`,q1=`#define STANDARD
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
}`,Y1=`#define STANDARD
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
}`,Z1=`#define TOON
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
}`,K1=`#define TOON
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
}`,j1=`uniform float size;
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
}`,$1=`uniform vec3 diffuse;
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
}`,J1=`#include <common>
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
}`,Q1=`uniform vec3 color;
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
}`,eM=`uniform float rotation;
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
}`,tM=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:b_,alphahash_pars_fragment:S_,alphamap_fragment:E_,alphamap_pars_fragment:T_,alphatest_fragment:w_,alphatest_pars_fragment:A_,aomap_fragment:R_,aomap_pars_fragment:C_,batching_pars_vertex:P_,batching_vertex:I_,begin_vertex:L_,beginnormal_vertex:D_,bsdfs:N_,iridescence_fragment:U_,bumpmap_pars_fragment:O_,clipping_planes_fragment:F_,clipping_planes_pars_fragment:B_,clipping_planes_pars_vertex:k_,clipping_planes_vertex:z_,color_fragment:H_,color_pars_fragment:G_,color_pars_vertex:V_,color_vertex:W_,common:X_,cube_uv_reflection_fragment:q_,defaultnormal_vertex:Y_,displacementmap_pars_vertex:Z_,displacementmap_vertex:K_,emissivemap_fragment:j_,emissivemap_pars_fragment:$_,colorspace_fragment:J_,colorspace_pars_fragment:Q_,envmap_fragment:ey,envmap_common_pars_fragment:ty,envmap_pars_fragment:ny,envmap_pars_vertex:iy,envmap_physical_pars_fragment:py,envmap_vertex:sy,fog_vertex:ry,fog_pars_vertex:oy,fog_fragment:ay,fog_pars_fragment:ly,gradientmap_pars_fragment:cy,lightmap_pars_fragment:hy,lights_lambert_fragment:uy,lights_lambert_pars_fragment:dy,lights_pars_begin:fy,lights_toon_fragment:my,lights_toon_pars_fragment:gy,lights_phong_fragment:xy,lights_phong_pars_fragment:vy,lights_physical_fragment:_y,lights_physical_pars_fragment:yy,lights_fragment_begin:My,lights_fragment_maps:by,lights_fragment_end:Sy,lightprobes_pars_fragment:Ey,logdepthbuf_fragment:Ty,logdepthbuf_pars_fragment:wy,logdepthbuf_pars_vertex:Ay,logdepthbuf_vertex:Ry,map_fragment:Cy,map_pars_fragment:Py,map_particle_fragment:Iy,map_particle_pars_fragment:Ly,metalnessmap_fragment:Dy,metalnessmap_pars_fragment:Ny,morphinstance_vertex:Uy,morphcolor_vertex:Oy,morphnormal_vertex:Fy,morphtarget_pars_vertex:By,morphtarget_vertex:ky,normal_fragment_begin:zy,normal_fragment_maps:Hy,normal_pars_fragment:Gy,normal_pars_vertex:Vy,normal_vertex:Wy,normalmap_pars_fragment:Xy,clearcoat_normal_fragment_begin:qy,clearcoat_normal_fragment_maps:Yy,clearcoat_pars_fragment:Zy,iridescence_pars_fragment:Ky,opaque_fragment:jy,packing:$y,premultiplied_alpha_fragment:Jy,project_vertex:Qy,dithering_fragment:e1,dithering_pars_fragment:t1,roughnessmap_fragment:n1,roughnessmap_pars_fragment:i1,shadowmap_pars_fragment:s1,shadowmap_pars_vertex:r1,shadowmap_vertex:o1,shadowmask_pars_fragment:a1,skinbase_vertex:l1,skinning_pars_vertex:c1,skinning_vertex:h1,skinnormal_vertex:u1,specularmap_fragment:d1,specularmap_pars_fragment:f1,tonemapping_fragment:p1,tonemapping_pars_fragment:m1,transmission_fragment:g1,transmission_pars_fragment:x1,uv_pars_fragment:v1,uv_pars_vertex:_1,uv_vertex:y1,worldpos_vertex:M1,background_vert:b1,background_frag:S1,backgroundCube_vert:E1,backgroundCube_frag:T1,cube_vert:w1,cube_frag:A1,depth_vert:R1,depth_frag:C1,distance_vert:P1,distance_frag:I1,equirect_vert:L1,equirect_frag:D1,linedashed_vert:N1,linedashed_frag:U1,meshbasic_vert:O1,meshbasic_frag:F1,meshlambert_vert:B1,meshlambert_frag:k1,meshmatcap_vert:z1,meshmatcap_frag:H1,meshnormal_vert:G1,meshnormal_frag:V1,meshphong_vert:W1,meshphong_frag:X1,meshphysical_vert:q1,meshphysical_frag:Y1,meshtoon_vert:Z1,meshtoon_frag:K1,points_vert:j1,points_frag:$1,shadow_vert:J1,shadow_frag:Q1,sprite_vert:eM,sprite_frag:tM},Ue={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},ts={basic:{uniforms:zn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:zn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:zn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:zn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:zn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new de(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:zn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:zn([Ue.points,Ue.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:zn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:zn([Ue.common,Ue.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:zn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:zn([Ue.sprite,Ue.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:zn([Ue.common,Ue.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:zn([Ue.lights,Ue.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};ts.physical={uniforms:zn([ts.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};var Yh={r:0,b:0,g:0},nM=new je,rg=new at;rg.set(-1,0,0,0,1,0,0,0,1);function iM(i,e,t,n,s,r){let o=new de(0),l=s===!0?0:1,c,a,h=null,u=0,d=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let _=y.backgroundBlurriness>0;w=e.get(w,_)}return w}function p(y){let w=!1,_=f(y);_===null?g(o,l):_&&_.isColor&&(g(_,1),w=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(y,w){let _=f(w);_&&(_.isCubeTexture||_.mapping===Ka)?(a===void 0&&(a=new me(new rt(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:Nr(ts.backgroundCube.uniforms),vertexShader:ts.backgroundCube.vertexShader,fragmentShader:ts.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),a.geometry.deleteAttribute("uv"),a.onBeforeRender=function(E,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(a.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(a)),a.material.uniforms.envMap.value=_,a.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,a.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,a.material.uniforms.backgroundRotation.value.setFromMatrix4(nM.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&a.material.uniforms.backgroundRotation.value.premultiply(rg),a.material.toneMapped=ht.getTransfer(_.colorSpace)!==At,(h!==_||u!==_.version||d!==i.toneMapping)&&(a.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),a.layers.enableAll(),y.unshift(a,a.geometry,a.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new me(new en(2,2),new yt({name:"BackgroundMaterial",uniforms:Nr(ts.background.uniforms),vertexShader:ts.background.vertexShader,fragmentShader:ts.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ht.getTransfer(_.colorSpace)!==At,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,w){y.getRGB(Yh,tf(i)),t.buffers.color.setClear(Yh.r,Yh.g,Yh.b,w,r)}function m(){a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),l=w,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,g(o,l)},render:p,addToRenderList:v,dispose:m}}function sM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function l(C,O,L,P,D){let F=!1,B=u(C,P,L,O);r!==B&&(r=B,a(r.object)),F=f(C,P,L,D),F&&p(C,P,L,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,_(C,O,L,P),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return i.createVertexArray()}function a(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,O,L,P){let D=P.wireframe===!0,F=n[O.id];F===void 0&&(F={},n[O.id]=F);let B=C.isInstancedMesh===!0?C.id:0,q=F[B];q===void 0&&(q={},F[B]=q);let k=q[L.id];k===void 0&&(k={},q[L.id]=k);let W=k[D];return W===void 0&&(W=d(c()),k[D]=W),W}function d(C){let O=[],L=[],P=[];for(let D=0;D<t;D++)O[D]=0,L[D]=0,P[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:L,attributeDivisors:P,object:C,attributes:{},index:null}}function f(C,O,L,P){let D=r.attributes,F=O.attributes,B=0,q=L.getAttributes();for(let k in q)if(q[k].location>=0){let ee=D[k],le=F[k];if(le===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),ee===void 0||ee.attribute!==le||le&&ee.data!==le.data)return!0;B++}return r.attributesNum!==B||r.index!==P}function p(C,O,L,P){let D={},F=O.attributes,B=0,q=L.getAttributes();for(let k in q)if(q[k].location>=0){let ee=F[k];ee===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor));let le={};le.attribute=ee,ee&&ee.data&&(le.data=ee.data),D[k]=le,B++}r.attributes=D,r.attributesNum=B,r.index=P}function v(){let C=r.newAttributes;for(let O=0,L=C.length;O<L;O++)C[O]=0}function g(C){m(C,0)}function m(C,O){let L=r.newAttributes,P=r.enabledAttributes,D=r.attributeDivisors;L[C]=1,P[C]===0&&(i.enableVertexAttribArray(C),P[C]=1),D[C]!==O&&(i.vertexAttribDivisor(C,O),D[C]=O)}function y(){let C=r.newAttributes,O=r.enabledAttributes;for(let L=0,P=O.length;L<P;L++)O[L]!==C[L]&&(i.disableVertexAttribArray(L),O[L]=0)}function w(C,O,L,P,D,F,B){B===!0?i.vertexAttribIPointer(C,O,L,D,F):i.vertexAttribPointer(C,O,L,P,D,F)}function _(C,O,L,P){v();let D=P.attributes,F=L.getAttributes(),B=O.defaultAttributeValues;for(let q in F){let k=F[q];if(k.location>=0){let W=D[q];if(W===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(W=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(W=C.instanceColor)),W!==void 0){let ee=W.normalized,le=W.itemSize,Me=e.get(W);if(Me===void 0)continue;let te=Me.buffer,ae=Me.type,Pe=Me.bytesPerElement,Z=ae===i.INT||ae===i.UNSIGNED_INT||W.gpuType===oh;if(W.isInterleavedBufferAttribute){let re=W.data,Ae=re.stride,Xe=W.offset;if(re.isInstancedInterleavedBuffer){for(let Q=0;Q<k.locationSize;Q++)m(k.location+Q,re.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Q=0;Q<k.locationSize;Q++)g(k.location+Q);i.bindBuffer(i.ARRAY_BUFFER,te);for(let Q=0;Q<k.locationSize;Q++)w(k.location+Q,le/k.locationSize,ae,ee,Ae*Pe,(Xe+le/k.locationSize*Q)*Pe,Z)}else{if(W.isInstancedBufferAttribute){for(let re=0;re<k.locationSize;re++)m(k.location+re,W.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let re=0;re<k.locationSize;re++)g(k.location+re);i.bindBuffer(i.ARRAY_BUFFER,te);for(let re=0;re<k.locationSize;re++)w(k.location+re,le/k.locationSize,ae,ee,le*Pe,le/k.locationSize*re*Pe,Z)}}else if(B!==void 0){let ee=B[q];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(k.location,ee);break;case 3:i.vertexAttrib3fv(k.location,ee);break;case 4:i.vertexAttrib4fv(k.location,ee);break;default:i.vertexAttrib1fv(k.location,ee)}}}}y()}function E(){b();for(let C in n){let O=n[C];for(let L in O){let P=O[L];for(let D in P){let F=P[D];for(let B in F)h(F[B].object),delete F[B];delete P[D]}}delete n[C]}}function T(C){if(n[C.id]===void 0)return;let O=n[C.id];for(let L in O){let P=O[L];for(let D in P){let F=P[D];for(let B in F)h(F[B].object),delete F[B];delete P[D]}}delete n[C.id]}function A(C){for(let O in n){let L=n[O];for(let P in L){let D=L[P];if(D[C.id]===void 0)continue;let F=D[C.id];for(let B in F)h(F[B].object),delete F[B];delete D[C.id]}}}function x(C){for(let O in n){let L=n[O],P=C.isInstancedMesh===!0?C.id:0,D=L[P];if(D!==void 0){for(let F in D){let B=D[F];for(let q in B)h(B[q].object),delete B[q];delete D[F]}delete L[P],Object.keys(L).length===0&&delete n[O]}}}function b(){M(),o=!0,r!==s&&(r=s,a(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:b,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function rM(i,e,t){let n;function s(c){n=c}function r(c,a){i.drawArrays(n,c,a),t.update(a,n,1)}function o(c,a,h){h!==0&&(i.drawArraysInstanced(n,c,a,h),t.update(a,n,h))}function l(c,a,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,a,0,h);let d=0;for(let f=0;f<h;f++)d+=a[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function oM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(A){let x=A===Wt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Bn&&A!==kn&&!x&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",h=c(a);h!==a&&(Ke("WebGLRenderer:",a,"not supported, using",h,"instead."),a=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:a,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:_,maxSamples:E,samples:T}}function aM(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ri,l=new at,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):a();else{let y=r?0:n,w=y*4,_=m.clippingState||null;c.value=_,_=h(p,d,w,f);for(let E=0;E!==w;++E)_[E]=t[E];m.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function a(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=c.value,p!==!0||g===null){let m=f+v*4,y=d.matrixWorldInverse;l.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,_=f;w!==v;++w,_+=4)o.copy(u[w]).applyMatrix4(y,l),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}var Po=4,lM=6,cM=20,hM=256,rl=new ji,Fm=new de,of=null,af=0,lf=0,cf=!1,uM=new N,Ur=new N,As=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:l=uM}=r;of=this._renderer.getRenderTarget(),af=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(of,af,lf),this._renderer.xr.enabled=cf,e.scissorTest=!1,Co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),of=this._renderer.getRenderTarget(),af=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Wt,format:Xn,colorSpace:An,depthBuffer:!1},s=Bm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=dM(r)),this._blurMaterial=pM(r,e,t),this._ggxMaterial=fM(r,e,t)}return s}_compileMaterial(e){let t=new me(new xt,e);this._renderer.compile(t,rl)}_sceneToCubeUV(e,t,n,s,r){let c=new dn(90,1,t,n),a=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Fm),u.toneMapping=Ui,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new me(new rt,new nt({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,m=!1,y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,m=!0):(g.color.copy(Fm),m=!0);for(let w=0;w<6;w++){let _=w%3;_===0?(c.up.set(0,a[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):_===1?(c.up.set(0,0,a[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,a[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));let E=this._cubeSize;Co(s,_*E,w>2?E:0,E,E),u.setRenderTarget(s),m&&u.render(v,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===qs||e.mapping===Ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=km());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let l=r.uniforms;l.envMap.value=e;let c=this._cubeSize;Co(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,rl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[n];l.material=o;let c=o.uniforms,a=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(a*a-h*h),d=a*1.25,f=u*d,{_lodMax:p}=this,v=this._sizeLods[n],g=3*v*(n>p-Po?n-p+Po:0),m=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=p-t,Co(r,g,m,3*v,2*v),s.setRenderTarget(r),s.render(l,rl),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,Co(e,g,m,3*v,2*v),s.setRenderTarget(e),s.render(l,rl)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let a=l.uniforms;a.envMap.value=e.texture,a.sigma.value=r,a.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Po?s-this._lodMax+Po:0),d=4*(this._cubeSize-h);Co(t,u,d,3*h,2*h),o.setRenderTarget(t),o.render(c,rl)}};function dM(i){let e=[],t=[],n=i,s=i-Po+1+lM;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let l=1/(o-2),c=-l,a=1+l,h=[c,c,a,c,a,a,c,c,a,a,c,a],u=6,d=6,f=3,p=new Float32Array(f*d*u),v=new Float32Array(f*d*u);for(let m=0;m<u;m++){let y=m%3*2/3-1,w=m>2?0:-1,_=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];p.set(_,f*d*m);for(let E=0;E<d;E++){let T=h[E*2]*2-1,A=h[E*2+1]*2-1;m===0?Ur.set(1,A,T):m===1?Ur.set(-T,1,-A):m===2?Ur.set(-T,A,1):m===3?Ur.set(-1,A,-T):m===4?Ur.set(-T,-1,A):Ur.set(T,A,-1),Ur.toArray(v,(m*d+E)*f)}}let g=new xt;g.setAttribute("position",new lt(p,f)),g.setAttribute("outputDirection",new lt(v,f)),t.push(new me(g,null)),n>Po&&n--}return{lodMeshes:t,sizeLods:e}}function Bm(i,e,t){let n=new Zt(i,e,t);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Co(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function fM(i,e,t){return new yt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$h(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function pM(i,e,t){return new yt({name:"SphericalGaussianBlur",defines:{SAMPLES:cM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$h(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function km(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$h(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function zm(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function $h(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Kh=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new _a(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rt(5,5,5),r=new yt({name:"CubemapFromEquirect",uniforms:Nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:an});r.uniforms.tEquirect.value=t;let o=new me(s,r),l=t.minFilter;return t.minFilter===ni&&(t.minFilter=zt),new Qc(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function mM(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Lr||f===sh)if(e.has(d)){let p=e.get(d).texture;return l(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let v=new Kh(p.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",a),l(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,p=f===Lr||f===sh,v=f===qs||f===Ir;if(p||v){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new As(i)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let y=d.image;return p&&y&&y.height>0||v&&y&&c(y)?(n===null&&(n=new As(i)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function l(d,f){return f===Lr?d.mapping=qs:f===sh&&(d.mapping=Ir),d}function c(d){let f=0,p=6;for(let v=0;v<p;v++)d[v]!==void 0&&f++;return f===p}function a(d){let f=d.target;f.removeEventListener("dispose",a);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function gM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ur("WebGLRenderer: "+n+" extension not supported."),s}}}function xM(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function l(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function a(u){let d=[],f=u.index,p=u.attributes.position,v=0;if(p===void 0)return;if(f!==null){let y=f.array;v=f.version;for(let w=0,_=y.length;w<_;w+=3){let E=y[w+0],T=y[w+1],A=y[w+2];d.push(E,T,T,A,A,E)}}else{let y=p.array;v=p.version;for(let w=0,_=y.length/3-1;w<_;w+=3){let E=w+0,T=w+1,A=w+2;d.push(E,T,T,A,A,E)}}let g=new(p.count>=65535?ga:ma)(d,1);g.version=v;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&a(u)}else a(u);return r.get(u)}return{get:l,update:c,getWireframeAttribute:h}}function vM(i,e,t){let n;function s(u){n=u}let r,o;function l(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function a(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let g=0;g<f;g++)v+=d[g];t.update(v,n,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=a,this.renderMultiDraw=h}function _M(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:it("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function yM(i,e,t){let n=new WeakMap,s=new Tt;function r(o,l,c){let a=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(l);if(d===void 0||d.count!==u){let b=function(){A.dispose(),n.delete(l),l.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=l.morphAttributes.position!==void 0,p=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],y=l.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),v===!0&&(w=3);let _=l.attributes.position.count*w,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*E*4*u),A=new da(T,_,E,u);A.type=kn,A.needsUpdate=!0;let x=w*4;for(let M=0;M<u;M++){let C=g[M],O=m[M],L=y[M],P=_*E*4*M;for(let D=0;D<C.count;D++){let F=D*x;f===!0&&(s.fromBufferAttribute(C,D),T[P+F+0]=s.x,T[P+F+1]=s.y,T[P+F+2]=s.z,T[P+F+3]=0),p===!0&&(s.fromBufferAttribute(O,D),T[P+F+4]=s.x,T[P+F+5]=s.y,T[P+F+6]=s.z,T[P+F+7]=0),v===!0&&(s.fromBufferAttribute(L,D),T[P+F+8]=s.x,T[P+F+9]=s.y,T[P+F+10]=s.z,T[P+F+11]=L.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new pe(_,E)},n.set(l,d),l.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<a.length;v++)f+=a[v];let p=l.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",a)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function MM(i,e,t,n,s){let r=new WeakMap;function o(a){let h=s.render.frame,u=a.geometry,d=e.get(a,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),a.isInstancedMesh&&(a.hasEventListener("dispose",c)===!1&&a.addEventListener("dispose",c),r.get(a)!==h&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,h))),a.isSkinnedMesh){let f=a.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function l(){r=new WeakMap}function c(a){let h=a.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}var bM={[Va]:"LINEAR_TONE_MAPPING",[Wa]:"REINHARD_TONE_MAPPING",[Xa]:"CINEON_TONE_MAPPING",[Pr]:"ACES_FILMIC_TONE_MAPPING",[Ya]:"AGX_TONE_MAPPING",[Za]:"NEUTRAL_TONE_MAPPING",[qa]:"CUSTOM_TONE_MAPPING"};function SM(i,e,t,n,s,r){let o=new Zt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,a=new xt;a.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ut([0,2,0,0,2,0],2));let h=new So({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new me(a,h),d=new ji(-1,1,1,-1,0,1),f=null,p=null,v=!1,g,m=null,y=[],w=!1;this.setSize=function(_,E){o.setSize(_,E),l!==null&&l.setSize(_,E),c!==null&&c.setSize(_,E);for(let T=0;T<y.length;T++){let A=y[T];A.setSize&&A.setSize(_,E)}},this.setEffects=function(_){y=_,w=y.length>0&&y[0].isRenderPass===!0;let E=o.width,T=o.height;y.length>0&&l===null&&(l=new Zt(E,T,{type:Wt,depthBuffer:!1,stencilBuffer:!1}),c=new Zt(E,T,{type:Wt,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let x=y[A];x.setSize&&x.setSize(E,T)}},this.begin=function(_,E){if(v||_.toneMapping===Ui&&y.length===0)return!1;if(m=E,E!==null){let T=E.width,A=E.height;(o.width!==T||o.height!==A)&&this.setSize(T,A)}return w===!1&&_.setRenderTarget(o),g=_.toneMapping,_.toneMapping=Ui,!0},this.hasRenderPass=function(){return w},this.end=function(_,E){_.toneMapping=g,v=!0;let T=o,A=l;for(let x=0;x<y.length;x++){let b=y[x];b.enabled!==!1&&(b.render(_,A,T,E),b.needsSwap!==!1&&(T=A,A=A===l?c:l))}if(f!==_.outputColorSpace||p!==_.toneMapping){f=_.outputColorSpace,p=_.toneMapping,h.defines={},ht.getTransfer(f)===At&&(h.defines.SRGB_TRANSFER="");let x=bM[p];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(m),_.render(u,d),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),a.dispose(),h.dispose()}}var og=new xn,df=new Yi(1,1),ag=new da,lg=new Uc,cg=new _a,Hm=[],Gm=[],Vm=new Float32Array(16),Wm=new Float32Array(9),Xm=new Float32Array(4);function Lo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Hm[s];if(r===void 0&&(r=new Float32Array(s),Hm[s]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(r,l)}return r}function Mn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jh(i,e){let t=Gm[e];t===void 0&&(t=new Int32Array(e),Gm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function EM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function TM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;i.uniform2fv(this.addr,e),bn(t,e)}}function wM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mn(t,e))return;i.uniform3fv(this.addr,e),bn(t,e)}}function AM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;i.uniform4fv(this.addr,e),bn(t,e)}}function RM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(Mn(t,n))return;Xm.set(n),i.uniformMatrix2fv(this.addr,!1,Xm),bn(t,n)}}function CM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(Mn(t,n))return;Wm.set(n),i.uniformMatrix3fv(this.addr,!1,Wm),bn(t,n)}}function PM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(Mn(t,n))return;Vm.set(n),i.uniformMatrix4fv(this.addr,!1,Vm),bn(t,n)}}function IM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function LM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;i.uniform2iv(this.addr,e),bn(t,e)}}function DM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;i.uniform3iv(this.addr,e),bn(t,e)}}function NM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;i.uniform4iv(this.addr,e),bn(t,e)}}function UM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function OM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;i.uniform2uiv(this.addr,e),bn(t,e)}}function FM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;i.uniform3uiv(this.addr,e),bn(t,e)}}function BM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;i.uniform4uiv(this.addr,e),bn(t,e)}}function kM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(df.compareFunction=t.isReversedDepthBuffer()?qh:Xh,r=df):r=og,t.setTexture2D(e||r,s)}function zM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||lg,s)}function HM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||cg,s)}function GM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ag,s)}function VM(i){switch(i){case 5126:return EM;case 35664:return TM;case 35665:return wM;case 35666:return AM;case 35674:return RM;case 35675:return CM;case 35676:return PM;case 5124:case 35670:return IM;case 35667:case 35671:return LM;case 35668:case 35672:return DM;case 35669:case 35673:return NM;case 5125:return UM;case 36294:return OM;case 36295:return FM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return GM}}function WM(i,e){i.uniform1fv(this.addr,e)}function XM(i,e){let t=Lo(e,this.size,2);i.uniform2fv(this.addr,t)}function qM(i,e){let t=Lo(e,this.size,3);i.uniform3fv(this.addr,t)}function YM(i,e){let t=Lo(e,this.size,4);i.uniform4fv(this.addr,t)}function ZM(i,e){let t=Lo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function KM(i,e){let t=Lo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jM(i,e){let t=Lo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $M(i,e){i.uniform1iv(this.addr,e)}function JM(i,e){i.uniform2iv(this.addr,e)}function QM(i,e){i.uniform3iv(this.addr,e)}function eb(i,e){i.uniform4iv(this.addr,e)}function tb(i,e){i.uniform1uiv(this.addr,e)}function nb(i,e){i.uniform2uiv(this.addr,e)}function ib(i,e){i.uniform3uiv(this.addr,e)}function sb(i,e){i.uniform4uiv(this.addr,e)}function rb(i,e,t){let n=this.cache,s=e.length,r=Jh(t,s);Mn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=df:o=og;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||o,r[l])}function ob(i,e,t){let n=this.cache,s=e.length,r=Jh(t,s);Mn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||lg,r[o])}function ab(i,e,t){let n=this.cache,s=e.length,r=Jh(t,s);Mn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||cg,r[o])}function lb(i,e,t){let n=this.cache,s=e.length,r=Jh(t,s);Mn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ag,r[o])}function cb(i){switch(i){case 5126:return WM;case 35664:return XM;case 35665:return qM;case 35666:return YM;case 35674:return ZM;case 35675:return KM;case 35676:return jM;case 5124:case 35670:return $M;case 35667:case 35671:return JM;case 35668:case 35672:return QM;case 35669:case 35673:return eb;case 5125:return tb;case 36294:return nb;case 36295:return ib;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return rb;case 35679:case 36299:case 36307:return ob;case 35680:case 36300:case 36308:case 36293:return ab;case 36289:case 36303:case 36311:case 36292:return lb}}var ff=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=VM(t.type)}},pf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cb(t.type)}},mf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},hf=/(\w+)(\])?(\[|\.)?/g;function qm(i,e){i.seq.push(e),i.map[e.id]=e}function hb(i,e,t){let n=i.name,s=n.length;for(hf.lastIndex=0;;){let r=hf.exec(n),o=hf.lastIndex,l=r[1],c=r[2]==="]",a=r[3];if(c&&(l=l|0),a===void 0||a==="["&&o+2===s){qm(t,a===void 0?new ff(l,i,e):new pf(l,i,e));break}else{let u=t.map[l];u===void 0&&(u=new mf(l),qm(t,u)),t=u}}}var Io=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);hb(l,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let l=t[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Ym(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ub=37297,db=0;function fb(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}var Zm=new at;function pb(i){ht._getMatrix(Zm,ht.workingColorSpace,i);let e=`mat3( ${Zm.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case ha:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Km(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+fb(i.getShaderSource(e),l)}else return r}function mb(i,e){let t=pb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var gb={[Va]:"Linear",[Wa]:"Reinhard",[Xa]:"Cineon",[Pr]:"ACESFilmic",[Ya]:"AgX",[Za]:"Neutral",[qa]:"Custom"};function xb(i,e){let t=gb[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Zh=new N;function vb(){ht.getLuminanceCoefficients(Zh);let i=Zh.x.toFixed(4),e=Zh.y.toFixed(4),t=Zh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _b(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function yb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Mb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function al(i){return i!==""}function jm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $m(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var bb=/^[ \t]*#include +<([\w\d./]+)>/gm;function gf(i){return i.replace(bb,Eb)}var Sb=new Map;function Eb(i,e){let t=mt[e];if(t===void 0){let n=Sb.get(e);if(n!==void 0)t=mt[n],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return gf(t)}var Tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jm(i){return i.replace(Tb,wb)}function wb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Ab={[Rr]:"SHADOWMAP_TYPE_PCF",[To]:"SHADOWMAP_TYPE_VSM"};function Rb(i){return Ab[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Cb={[qs]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE",[Ka]:"ENVMAP_TYPE_CUBE_UV"};function Pb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Cb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ib={[Ir]:"ENVMAP_MODE_REFRACTION"};function Lb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ib[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Db={[Hd]:"ENVMAP_BLENDING_MULTIPLY",[hm]:"ENVMAP_BLENDING_MIX",[um]:"ENVMAP_BLENDING_ADD"};function Nb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Db[i.combine]||"ENVMAP_BLENDING_NONE"}function Ub(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ob(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,l=t.fragmentShader,c=Rb(t),a=Pb(t),h=Lb(t),u=Nb(t),d=Ub(t),f=_b(t),p=yb(r),v=s.createProgram(),g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(al).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(al).join(`
`),m.length>0&&(m+=`
`)):(g=[Qm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),m=[Qm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+a:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?mt.tonemapping_pars_fragment:"",t.toneMapping!==Ui?xb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,mb("linearToOutputTexel",t.outputColorSpace),vb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(al).join(`
`)),o=gf(o),o=jm(o,t),o=$m(o,t),l=gf(l),l=jm(l,t),l=$m(l,t),o=Jm(o),l=Jm(l),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===$d?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=y+g+o,_=y+m+l,E=Ym(s,s.VERTEX_SHADER,w),T=Ym(s,s.FRAGMENT_SHADER,_);s.attachShader(v,E),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(C){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(v)||"",L=s.getShaderInfoLog(E)||"",P=s.getShaderInfoLog(T)||"",D=O.trim(),F=L.trim(),B=P.trim(),q=!0,k=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,E,T);else{let W=Km(s,E,"vertex"),ee=Km(s,T,"fragment");it("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+W+`
`+ee)}else D!==""?Ke("WebGLProgram: Program Info Log:",D):(F===""||B==="")&&(k=!1);k&&(C.diagnostics={runnable:q,programLog:D,vertexShader:{log:F,prefix:g},fragmentShader:{log:B,prefix:m}})}s.deleteShader(E),s.deleteShader(T),x=new Io(s,v),b=Mb(s,v)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,ub)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=db++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=T,this}var Fb=0,xf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new vf(e),t.set(e,n)),n}},vf=class{constructor(e){this.id=Fb++,this.code=e,this.usedTimes=0}};function Bb(i){return i===Zs||i===el||i===tl}function kb(i,e,t,n,s,r){let o=new fa,l=new xf,c=new Set,a=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,b,M,C,O,L){let P=C.fog,D=O.geometry,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,q=e.get(x.envMap||F,B),k=q&&q.mapping===Ka?q.image.height:null,W=f[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&Ke("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let ee=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,le=ee!==void 0?ee.length:0,Me=0;D.morphAttributes.position!==void 0&&(Me=1),D.morphAttributes.normal!==void 0&&(Me=2),D.morphAttributes.color!==void 0&&(Me=3);let te,ae,Pe,Z;if(W){let Gt=ts[W];te=Gt.vertexShader,ae=Gt.fragmentShader}else{te=x.vertexShader,ae=x.fragmentShader;let Gt=l.getVertexShaderStage(x),Ct=l.getFragmentShaderStage(x);l.update(x,Gt,Ct),Pe=Gt.id,Z=Ct.id}let re=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),Xe=O.isInstancedMesh===!0,Q=O.isBatchedMesh===!0,xe=!!x.map,Ee=!!x.matcap,ne=!!q,ue=!!x.aoMap,ve=!!x.lightMap,fe=!!x.bumpMap&&x.wireframe===!1,Se=!!x.normalMap,Ve=!!x.displacementMap,He=!!x.emissiveMap,et=!!x.metalnessMap,tt=!!x.roughnessMap,z=x.anisotropy>0,vt=x.clearcoat>0,ot=x.dispersion>0,U=x.retroreflectivity>0,S=x.iridescence>0,V=x.sheen>0,Y=x.transmission>0,J=z&&!!x.anisotropyMap,be=vt&&!!x.clearcoatMap,Ce=vt&&!!x.clearcoatNormalMap,oe=vt&&!!x.clearcoatRoughnessMap,ce=S&&!!x.iridescenceMap,Ie=S&&!!x.iridescenceThicknessMap,Te=V&&!!x.sheenColorMap,_e=V&&!!x.sheenRoughnessMap,ye=!!x.specularMap,De=!!x.specularColorMap,We=!!x.specularIntensityMap,st=Y&&!!x.transmissionMap,G=Y&&!!x.thicknessMap,Le=!!x.gradientMap,he=!!x.alphaMap,Re=x.alphaTest>0,Ne=!!x.alphaHash,ge=!!x.extensions,Qe=Ui;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Qe=i.toneMapping);let qe={shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:te,fragmentShader:ae,defines:x.defines,customVertexShaderID:Pe,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Q,batchingColor:Q&&O._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&O.instanceColor!==null,instancingMorph:Xe&&O.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:xe,matcap:Ee,envMap:ne,envMapMode:ne&&q.mapping,envMapCubeUVHeight:k,aoMap:ue,lightMap:ve,bumpMap:fe,normalMap:Se,displacementMap:Ve,emissiveMap:He,normalMapObjectSpace:Se&&x.normalMapType===xm,normalMapTangentSpace:Se&&x.normalMapType===il,packedNormalMap:Se&&x.normalMapType===il&&Bb(x.normalMap.format),metalnessMap:et,roughnessMap:tt,anisotropy:z,anisotropyMap:J,clearcoat:vt,clearcoatMap:be,clearcoatNormalMap:Ce,clearcoatRoughnessMap:oe,dispersion:ot,retroreflection:U,iridescence:S,iridescenceMap:ce,iridescenceThicknessMap:Ie,sheen:V,sheenColorMap:Te,sheenRoughnessMap:_e,specularMap:ye,specularColorMap:De,specularIntensityMap:We,transmission:Y,transmissionMap:st,thicknessMap:G,gradientMap:Le,opaque:x.transparent===!1&&x.blending===Ji&&x.alphaToCoverage===!1,alphaMap:he,alphaTest:Re,alphaHash:Ne,combine:x.combine,mapUv:xe&&p(x.map.channel),aoMapUv:ue&&p(x.aoMap.channel),lightMapUv:ve&&p(x.lightMap.channel),bumpMapUv:fe&&p(x.bumpMap.channel),normalMapUv:Se&&p(x.normalMap.channel),displacementMapUv:Ve&&p(x.displacementMap.channel),emissiveMapUv:He&&p(x.emissiveMap.channel),metalnessMapUv:et&&p(x.metalnessMap.channel),roughnessMapUv:tt&&p(x.roughnessMap.channel),anisotropyMapUv:J&&p(x.anisotropyMap.channel),clearcoatMapUv:be&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&p(x.sheenRoughnessMap.channel),specularMapUv:ye&&p(x.specularMap.channel),specularColorMapUv:De&&p(x.specularColorMap.channel),specularIntensityMapUv:We&&p(x.specularIntensityMap.channel),transmissionMapUv:st&&p(x.transmissionMap.channel),thicknessMapUv:G&&p(x.thicknessMap.channel),alphaMapUv:he&&p(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Se||z),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!D.attributes.uv&&(xe||he),fog:!!P,useFog:x.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&Se===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ae,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Me,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&M.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,decodeVideoTexture:xe&&x.map.isVideoTexture===!0&&ht.getTransfer(x.map.colorSpace)===At,decodeVideoTextureEmissive:He&&x.emissiveMap.isVideoTexture===!0&&ht.getTransfer(x.emissiveMap.colorSpace)===At,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ht,flipSided:x.side===yn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ge&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&x.extensions.multiDraw===!0||Q)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function g(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let M in x.defines)b.push(M),b.push(x.defines[M]);return x.isRawShaderMaterial===!1&&(m(b,x),y(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function y(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function w(x){let b=f[x.type],M;if(b){let C=ts[b];M=Rn.clone(C.uniforms)}else M=x.uniforms;return M}function _(x,b){let M=h.get(b);return M!==void 0?++M.usedTimes:(M=new Ob(i,b,x,s),a.push(M),h.set(b,M)),M}function E(x){if(--x.usedTimes===0){let b=a.indexOf(x);a[b]=a[a.length-1],a.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){l.remove(x)}function A(){l.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:w,acquireProgram:_,releaseProgram:E,releaseShaderCache:T,programs:a,dispose:A}}function zb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,c){i.get(o)[l]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Hb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function eg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tg(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function l(d,f,p,v,g,m){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=p,y.materialVariant=o(d),y.groupOrder=v,y.renderOrder=d.renderOrder,y.z=g,y.group=m),e++,y}function c(d,f,p,v,g,m,y){y.reversedDepth===!0&&(g=-g);let w=l(d,f,p,v,g,m);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):t.push(w)}function a(d,f,p,v,g,m){let y=l(d,f,p,v,g,m);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(d,f){t.length>1&&t.sort(d||Hb),n.length>1&&n.sort(f||eg),s.length>1&&s.sort(f||eg)}function u(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:a,finish:u,sort:h}}function Gb(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new tg,i.set(n,[o])):s>=r.length?(o=new tg,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Vb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new de};break;case"SpotLight":t={position:new N,direction:new N,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Wb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Xb=0;function qb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Yb(i){let e=new Vb,t=Wb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)n.probe.push(new N);let s=new N,r=new je,o=new je;function l(a){let h=0,u=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,y=0,w=0,_=0,E=0,T=0,A=0,x=0,b=0,M=0;a.sort(qb);for(let O=0,L=a.length;O<L;O++){let P=a[O],D=P.color,F=P.intensity,B=P.distance,q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Zs?q=P.shadow.map.texture:q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=D.r*F,u+=D.g*F,d+=D.b*F;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],F);M++}else if(P.isSunLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let W=P.shadow,ee=t.get(P);ee.shadowIntensity=W.intensity,ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[p]=ee,n.sunShadowMap[p]=q;let le=W.getViewportCount();for(let Me=0;Me<le;Me++)n.sunShadowMatrix[v+Me]=W.getMatrix(Me),n.sunShadowCascade[v+Me]=W._cascadeData[Me];v+=le,p++}n.sun[f]=k,f++}else if(P.isDirectionalLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let W=P.shadow,ee=t.get(P);ee.shadowIntensity=W.intensity,ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,n.directionalShadow[g]=ee,n.directionalShadowMap[g]=q,n.directionalShadowMatrix[g]=P.shadow.matrix,E++}n.directional[g]=k,g++}else if(P.isSpotLight){let k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(D).multiplyScalar(F),k.distance=B,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[y]=k;let W=P.shadow;if(P.map&&(n.spotLightMap[x]=P.map,x++,W.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[y]=W.matrix,P.castShadow){let ee=t.get(P);ee.shadowIntensity=W.intensity,ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,n.spotShadow[y]=ee,n.spotShadowMap[y]=q,A++}y++}else if(P.isRectAreaLight){let k=e.get(P);k.color.copy(D).multiplyScalar(F),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[w]=k,w++}else if(P.isPointLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let W=P.shadow,ee=t.get(P);ee.shadowIntensity=W.intensity,ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,ee.shadowCameraNear=W.camera.near,ee.shadowCameraFar=W.camera.far,n.pointShadow[m]=ee,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=P.shadow.matrix,T++}n.point[m]=k,m++}else if(P.isHemisphereLight){let k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(F),k.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[_]=k,_++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.sunLength!==f||C.directionalLength!==g||C.pointLength!==m||C.spotLength!==y||C.rectAreaLength!==w||C.hemiLength!==_||C.numSunShadows!==p||C.numDirectionalShadows!==E||C.numPointShadows!==T||C.numSpotShadows!==A||C.numSpotMaps!==x||C.numLightProbes!==M)&&(n.sun.length=f,n.directional.length=g,n.spot.length=y,n.rectArea.length=w,n.point.length=m,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-b,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=M,C.sunLength=f,C.directionalLength=g,C.pointLength=m,C.spotLength=y,C.rectAreaLength=w,C.hemiLength=_,C.numSunShadows=p,C.numDirectionalShadows=E,C.numPointShadows=T,C.numSpotShadows=A,C.numSpotMaps=x,C.numLightProbes=M,n.version=Xb++)}function c(a,h){let u=0,d=0,f=0,p=0,v=0,g=0,m=h.matrixWorldInverse;for(let y=0,w=a.length;y<w;y++){let _=a[y];if(_.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(m),u++}else if(_.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(_.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let E=n.rectArea[v];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let E=n.hemi[g];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:l,setupView:c,state:n}}function ng(i){let e=new Yb(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function o(d){t.push(d)}function l(d){n.push(d)}function c(d){s.push(d)}function a(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:a,setupLightsView:h,pushLight:o,pushShadow:l,pushLightProbeGrid:c}}function Zb(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),l;return o===void 0?(l=new ng(i),e.set(s,[l])):r>=o.length?(l=new ng(i),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var Kb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jb=`uniform sampler2D shadow_pass;
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
}`,$b=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Jb=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],ig=new je,ol=new N,uf=new N;function Qb(i,e,t){let n=new go,s=new pe,r=new pe,o=new Tt,l=new Xc,c=new qc,a={},h=t.maxTextureSize,u={[$i]:yn,[yn]:$i,[Ht]:Ht},d=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Kb,fragmentShader:jb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new xt;p.setAttribute("position",new lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new me(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rr;let m=this.type;this.render=function(T,A,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===K0&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rr);let b=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),O=i.state;O.setBlending(an),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let L=m!==this.type;L&&A.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(D=>D.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,D=T.length;P<D;P++){let F=T[P],B=F.shadow;if(B===void 0){Ke("WebGLShadowMap:",F,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let q=B.getFrameExtents();s.multiply(q),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,B.mapSize.y=r.y));let k=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=k,B.map===null||L===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===To){if(F.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Zt(s.x,s.y,{format:Zs,type:Wt,minFilter:zt,magFilter:zt,generateMipmaps:!1}),B.map.texture.name=F.name+".shadowMap",B.map.depthTexture=new Yi(s.x,s.y,kn),B.map.depthTexture.name=F.name+".shadowMapDepth",B.map.depthTexture.format=qi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=jt,B.map.depthTexture.magFilter=jt}else F.isPointLight?(B.map=new Kh(s.x),B.map.depthTexture=new Bc(s.x,Oi)):(B.map=new Zt(s.x,s.y),B.map.depthTexture=new Yi(s.x,s.y,Oi)),B.map.depthTexture.name=F.name+".shadowMap",B.map.depthTexture.format=qi,this.type===Rr?(B.map.depthTexture.compareFunction=k?qh:Xh,B.map.depthTexture.minFilter=zt,B.map.depthTexture.magFilter=zt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=jt,B.map.depthTexture.magFilter=jt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let W=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();F.isPointLight!==!0&&B.updateMatrices(F,x);for(let ee=0;ee<W;ee++){let le=B.getCamera(ee);if(F.isPointLight){let Me=B.camera,te=B.matrix,ae=F.distance||Me.far;ae!==Me.far&&(Me.far=ae,Me.updateProjectionMatrix()),ol.setFromMatrixPosition(F.matrixWorld),Me.position.copy(ol),uf.copy(Me.position),uf.add($b[ee]),Me.up.copy(Jb[ee]),Me.lookAt(uf),Me.updateMatrixWorld(),te.makeTranslation(-ol.x,-ol.y,-ol.z),ig.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),B._frustum.setFromProjectionMatrix(ig,Me.coordinateSystem,Me.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(B.map),i.clear());let Me=B.getViewport(ee);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),O.viewport(o)}n=B.getFrustum(ee),_(A,x,le,F,this.type)}B.isPointLightShadow!==!0&&this.type===To&&y(B,x),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(b,M,C)};function y(T,A){let x=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Zt(s.x,s.y,{format:Zs,type:Wt}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,x,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,x,f,v,null)}function w(T,A,x,b){let M=null,C=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)M=C;else if(M=x.isPointLight===!0?c:l,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let O=M.uuid,L=A.uuid,P=a[O];P===void 0&&(P={},a[O]=P);let D=P[L];D===void 0&&(D=M.clone(),P[L]=D,A.addEventListener("dispose",E)),M=D}if(M.visible=A.visible,M.wireframe=A.wireframe,b===To?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,x.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let O=i.properties.get(M);O.light=x}return M}function _(T,A,x,b,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===To)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let L=e.update(T),P=T.material;if(Array.isArray(P)){let D=L.groups;for(let F=0,B=D.length;F<B;F++){let q=D[F],k=P[q.materialIndex];if(k&&k.visible){let W=w(T,k,b,M);T.onBeforeShadow(i,T,A,x,L,W,q),i.renderBufferDirect(x,null,L,W,T,q),T.onAfterShadow(i,T,A,x,L,W,q)}}}else if(P.visible){let D=w(T,P,b,M);T.onBeforeShadow(i,T,A,x,L,D,null),i.renderBufferDirect(x,null,L,D,T,null),T.onAfterShadow(i,T,A,x,L,D,null)}}let O=T.children;for(let L=0,P=O.length;L<P;L++)_(O[L],A,x,b,M)}function E(T){T.target.removeEventListener("dispose",E);for(let x in a){let b=a[x],M=T.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function eS(i,e){function t(){let G=!1,Le=new Tt,he=null,Re=new Tt(0,0,0,0);return{setMask:function(Ne){he!==Ne&&!G&&(i.colorMask(Ne,Ne,Ne,Ne),he=Ne)},setLocked:function(Ne){G=Ne},setClear:function(Ne,ge,Qe,qe,Gt){Gt===!0&&(Ne*=qe,ge*=qe,Qe*=qe),Le.set(Ne,ge,Qe,qe),Re.equals(Le)===!1&&(i.clearColor(Ne,ge,Qe,qe),Re.copy(Le))},reset:function(){G=!1,he=null,Re.set(-1,0,0,0)}}}function n(){let G=!1,Le=!1,he=null,Re=null,Ne=null;return{setReversed:function(ge){if(Le!==ge){let Qe=e.get("EXT_clip_control");ge?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Le=ge;let qe=Ne;Ne=null,this.setClear(qe)}},getReversed:function(){return Le},setTest:function(ge){ge?re(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(ge){he!==ge&&!G&&(i.depthMask(ge),he=ge)},setFunc:function(ge){if(Le&&(ge=Rm[ge]),Re!==ge){switch(ge){case wc:i.depthFunc(i.NEVER);break;case Ac:i.depthFunc(i.ALWAYS);break;case Rc:i.depthFunc(i.LESS);break;case lo:i.depthFunc(i.LEQUAL);break;case Cc:i.depthFunc(i.EQUAL);break;case Pc:i.depthFunc(i.GEQUAL);break;case Ic:i.depthFunc(i.GREATER);break;case Lc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=ge}},setLocked:function(ge){G=ge},setClear:function(ge){Ne!==ge&&(Ne=ge,Le&&(ge=1-ge),i.clearDepth(ge))},reset:function(){G=!1,he=null,Re=null,Ne=null,Le=!1}}}function s(){let G=!1,Le=null,he=null,Re=null,Ne=null,ge=null,Qe=null,qe=null,Gt=null;return{setTest:function(Ct){G||(Ct?re(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(Ct){Le!==Ct&&!G&&(i.stencilMask(Ct),Le=Ct)},setFunc:function(Ct,Ei,Gi){(he!==Ct||Re!==Ei||Ne!==Gi)&&(i.stencilFunc(Ct,Ei,Gi),he=Ct,Re=Ei,Ne=Gi)},setOp:function(Ct,Ei,Gi){(ge!==Ct||Qe!==Ei||qe!==Gi)&&(i.stencilOp(Ct,Ei,Gi),ge=Ct,Qe=Ei,qe=Gi)},setLocked:function(Ct){G=Ct},setClear:function(Ct){Gt!==Ct&&(i.clearStencil(Ct),Gt=Ct)},reset:function(){G=!1,Le=null,he=null,Re=null,Ne=null,ge=null,Qe=null,qe=null,Gt=null}}}let r=new t,o=new n,l=new s,c=new WeakMap,a=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],v=null,g=!1,m=null,y=null,w=null,_=null,E=null,T=null,A=null,x=new de(0,0,0),b=0,M=!1,C=null,O=null,L=null,P=null,D=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,q=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(k)[1]),B=q>=1):k.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),B=q>=2);let W=null,ee={},le=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),te=new Tt().fromArray(le),ae=new Tt().fromArray(Me);function Pe(G,Le,he,Re){let Ne=new Uint8Array(4),ge=i.createTexture();i.bindTexture(G,ge),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<he;Qe++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Le,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,Ne):i.texImage2D(Le+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ne);return ge}let Z={};Z[i.TEXTURE_2D]=Pe(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),re(i.DEPTH_TEST),o.setFunc(lo),fe(!1),Se(Od),re(i.CULL_FACE),ue(an);function re(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function Ae(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function Xe(G,Le){return d[G]!==Le?(i.bindFramebuffer(G,Le),d[G]=Le,G===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Le),G===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Le),!0):!1}function Q(G,Le){let he=p,Re=!1;if(G){he=f.get(Le),he===void 0&&(he=[],f.set(Le,he));let Ne=G.textures;if(he.length!==Ne.length||he[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,Qe=Ne.length;ge<Qe;ge++)he[ge]=i.COLOR_ATTACHMENT0+ge;he.length=Ne.length,Re=!0}}else he[0]!==i.BACK&&(he[0]=i.BACK,Re=!0);Re&&i.drawBuffers(he)}function xe(G){return v!==G?(i.useProgram(G),v=G,!0):!1}let Ee={[yi]:i.FUNC_ADD,[j0]:i.FUNC_SUBTRACT,[$0]:i.FUNC_REVERSE_SUBTRACT};Ee[J0]=i.MIN,Ee[Q0]=i.MAX;let ne={[Cr]:i.ZERO,[em]:i.ONE,[tm]:i.SRC_COLOR,[kd]:i.SRC_ALPHA,[rm]:i.SRC_ALPHA_SATURATE,[Ga]:i.DST_COLOR,[Ha]:i.DST_ALPHA,[nm]:i.ONE_MINUS_SRC_COLOR,[zd]:i.ONE_MINUS_SRC_ALPHA,[sm]:i.ONE_MINUS_DST_COLOR,[im]:i.ONE_MINUS_DST_ALPHA,[om]:i.CONSTANT_COLOR,[am]:i.ONE_MINUS_CONSTANT_COLOR,[lm]:i.CONSTANT_ALPHA,[cm]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(G,Le,he,Re,Ne,ge,Qe,qe,Gt,Ct){if(G===an){g===!0&&(Ae(i.BLEND),g=!1);return}if(g===!1&&(re(i.BLEND),g=!0),G!==ih){if(G!==m||Ct!==M){if((y!==yi||E!==yi)&&(i.blendEquation(i.FUNC_ADD),y=yi,E=yi),Ct)switch(G){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ln:i.blendFunc(i.ONE,i.ONE);break;case Fd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:it("WebGLState: Invalid blending: ",G);break}else switch(G){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ln:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Fd:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bd:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",G);break}w=null,_=null,T=null,A=null,x.set(0,0,0),b=0,m=G,M=Ct}return}Ne=Ne||Le,ge=ge||he,Qe=Qe||Re,(Le!==y||Ne!==E)&&(i.blendEquationSeparate(Ee[Le],Ee[Ne]),y=Le,E=Ne),(he!==w||Re!==_||ge!==T||Qe!==A)&&(i.blendFuncSeparate(ne[he],ne[Re],ne[ge],ne[Qe]),w=he,_=Re,T=ge,A=Qe),(qe.equals(x)===!1||Gt!==b)&&(i.blendColor(qe.r,qe.g,qe.b,Gt),x.copy(qe),b=Gt),m=G,M=!1}function ve(G,Le){G.side===Ht?Ae(i.CULL_FACE):re(i.CULL_FACE);let he=G.side===yn;Le&&(he=!he),fe(he),G.blending===Ji&&G.transparent===!1?ue(an):ue(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Re=G.stencilWrite;l.setTest(Re),Re&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),He(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function fe(G){C!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),C=G)}function Se(G){G!==Y0?(re(i.CULL_FACE),G!==O&&(G===Od?i.cullFace(i.BACK):G===Z0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),O=G}function Ve(G){G!==L&&(B&&i.lineWidth(G),L=G)}function He(G,Le,he){G?(re(i.POLYGON_OFFSET_FILL),(P!==Le||D!==he)&&(P=Le,D=he,o.getReversed()&&(Le=-Le),i.polygonOffset(Le,he))):Ae(i.POLYGON_OFFSET_FILL)}function et(G){G?re(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function tt(G){G===void 0&&(G=i.TEXTURE0+F-1),W!==G&&(i.activeTexture(G),W=G)}function z(G,Le,he){he===void 0&&(W===null?he=i.TEXTURE0+F-1:he=W);let Re=ee[he];Re===void 0&&(Re={type:void 0,texture:void 0},ee[he]=Re),(Re.type!==G||Re.texture!==Le)&&(W!==he&&(i.activeTexture(he),W=he),i.bindTexture(G,Le||Z[G]),Re.type=G,Re.texture=Le)}function vt(){let G=ee[W];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ot(){try{i.compressedTexImage2D(...arguments)}catch(G){it("WebGLState:",G)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(G){it("WebGLState:",G)}}function S(){try{i.texSubImage2D(...arguments)}catch(G){it("WebGLState:",G)}}function V(){try{i.texSubImage3D(...arguments)}catch(G){it("WebGLState:",G)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(G){it("WebGLState:",G)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(G){it("WebGLState:",G)}}function be(){try{i.texStorage2D(...arguments)}catch(G){it("WebGLState:",G)}}function Ce(){try{i.texStorage3D(...arguments)}catch(G){it("WebGLState:",G)}}function oe(){try{i.texImage2D(...arguments)}catch(G){it("WebGLState:",G)}}function ce(){try{i.texImage3D(...arguments)}catch(G){it("WebGLState:",G)}}function Ie(G){return u[G]!==void 0?u[G]:i.getParameter(G)}function Te(G,Le){u[G]!==Le&&(i.pixelStorei(G,Le),u[G]=Le)}function _e(G){te.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),te.copy(G))}function ye(G){ae.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),ae.copy(G))}function De(G,Le){let he=a.get(Le);he===void 0&&(he=new WeakMap,a.set(Le,he));let Re=he.get(G);Re===void 0&&(Re=i.getUniformBlockIndex(Le,G.name),he.set(G,Re))}function We(G,Le){let Re=a.get(Le).get(G);c.get(Le)!==Re&&(i.uniformBlockBinding(Le,Re,G.__bindingPointIndex),c.set(Le,Re))}function st(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},W=null,ee={},d={},f=new WeakMap,p=[],v=null,g=!1,m=null,y=null,w=null,_=null,E=null,T=null,A=null,x=new de(0,0,0),b=0,M=!1,C=null,O=null,L=null,P=null,D=null,te.set(0,0,i.canvas.width,i.canvas.height),ae.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:re,disable:Ae,bindFramebuffer:Xe,drawBuffers:Q,useProgram:xe,setBlending:ue,setMaterial:ve,setFlipSided:fe,setCullFace:Se,setLineWidth:Ve,setPolygonOffset:He,setScissorTest:et,activeTexture:tt,bindTexture:z,unbindTexture:vt,compressedTexImage2D:ot,compressedTexImage3D:U,texImage2D:oe,texImage3D:ce,pixelStorei:Te,getParameter:Ie,updateUBOMapping:De,uniformBlockBinding:We,texStorage2D:be,texStorage3D:Ce,texSubImage2D:S,texSubImage3D:V,compressedTexSubImage2D:Y,compressedTexSubImage3D:J,scissor:_e,viewport:ye,reset:st}}function tS(i,e,t,n,s,r,o){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new pe,h=new WeakMap,u=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,S){return p?new OffscreenCanvas(U,S):uo("canvas")}function g(U,S,V){let Y=1,J=ot(U);if((J.width>V||J.height>V)&&(Y=V/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let be=Math.floor(Y*J.width),Ce=Math.floor(Y*J.height);d===void 0&&(d=v(be,Ce));let oe=S?v(be,Ce):d;return oe.width=be,oe.height=Ce,oe.getContext("2d").drawImage(U,0,0,be,Ce),Ke("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+be+"x"+Ce+")."),oe}else return"data"in U&&Ke("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),U;return U}function m(U){return U.generateMipmaps}function y(U){i.generateMipmap(U)}function w(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(U,S,V,Y,J,be=!1){if(U!==null){if(i[U]!==void 0)return i[U];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ce;Y&&(Ce=e.get("EXT_texture_norm16"),Ce||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=S;if(S===i.RED&&(V===i.FLOAT&&(oe=i.R32F),V===i.HALF_FLOAT&&(oe=i.R16F),V===i.UNSIGNED_BYTE&&(oe=i.R8),V===i.UNSIGNED_SHORT&&Ce&&(oe=Ce.R16_EXT),V===i.SHORT&&Ce&&(oe=Ce.R16_SNORM_EXT)),S===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(oe=i.R8UI),V===i.UNSIGNED_SHORT&&(oe=i.R16UI),V===i.UNSIGNED_INT&&(oe=i.R32UI),V===i.BYTE&&(oe=i.R8I),V===i.SHORT&&(oe=i.R16I),V===i.INT&&(oe=i.R32I)),S===i.RG&&(V===i.FLOAT&&(oe=i.RG32F),V===i.HALF_FLOAT&&(oe=i.RG16F),V===i.UNSIGNED_BYTE&&(oe=i.RG8),V===i.UNSIGNED_SHORT&&Ce&&(oe=Ce.RG16_EXT),V===i.SHORT&&Ce&&(oe=Ce.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(oe=i.RG8UI),V===i.UNSIGNED_SHORT&&(oe=i.RG16UI),V===i.UNSIGNED_INT&&(oe=i.RG32UI),V===i.BYTE&&(oe=i.RG8I),V===i.SHORT&&(oe=i.RG16I),V===i.INT&&(oe=i.RG32I)),S===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),V===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),V===i.UNSIGNED_INT&&(oe=i.RGB32UI),V===i.BYTE&&(oe=i.RGB8I),V===i.SHORT&&(oe=i.RGB16I),V===i.INT&&(oe=i.RGB32I)),S===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),V===i.UNSIGNED_INT&&(oe=i.RGBA32UI),V===i.BYTE&&(oe=i.RGBA8I),V===i.SHORT&&(oe=i.RGBA16I),V===i.INT&&(oe=i.RGBA32I)),S===i.RGB&&(V===i.UNSIGNED_SHORT&&Ce&&(oe=Ce.RGB16_EXT),V===i.SHORT&&Ce&&(oe=Ce.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),S===i.RGBA){let ce=be?ha:ht.getTransfer(J);V===i.FLOAT&&(oe=i.RGBA32F),V===i.HALF_FLOAT&&(oe=i.RGBA16F),V===i.UNSIGNED_BYTE&&(oe=ce===At?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&Ce&&(oe=Ce.RGBA16_EXT),V===i.SHORT&&Ce&&(oe=Ce.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function E(U,S){let V;return U?S===null||S===Oi||S===Ys?V=i.DEPTH24_STENCIL8:S===kn?V=i.DEPTH32F_STENCIL8:S===Ao&&(V=i.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Oi||S===Ys?V=i.DEPTH_COMPONENT24:S===kn?V=i.DEPTH_COMPONENT32F:S===Ao&&(V=i.DEPTH_COMPONENT16),V}function T(U,S){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==jt&&U.minFilter!==zt?Math.log2(Math.max(S.width,S.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?S.mipmaps.length:1}function A(U){let S=U.target;S.removeEventListener("dispose",A),b(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function x(U){let S=U.target;S.removeEventListener("dispose",x),C(S)}function b(U){let S=n.get(U);if(S.__webglInit===void 0)return;let V=U.source,Y=f.get(V);if(Y){let J=Y[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(U),Object.keys(Y).length===0&&f.delete(V)}n.remove(U)}function M(U){let S=n.get(U);i.deleteTexture(S.__webglTexture);let V=U.source,Y=f.get(V);delete Y[S.__cacheKey],o.memory.textures--}function C(U){let S=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let J=0;J<S.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(S.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)i.deleteFramebuffer(S.__webglFramebuffer[Y]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let V=U.textures;for(let Y=0,J=V.length;Y<J;Y++){let be=n.get(V[Y]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(V[Y])}n.remove(U)}let O=0;function L(){O=0}function P(){return O}function D(U){O=U}function F(){let U=O;return U>=s.maxTextures&&Ke("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,U}function B(U){let S=[];return S.push(U.wrapS),S.push(U.wrapT),S.push(U.wrapR||0),S.push(U.magFilter),S.push(U.minFilter),S.push(U.anisotropy),S.push(U.internalFormat),S.push(U.format),S.push(U.type),S.push(U.generateMipmaps),S.push(U.premultiplyAlpha),S.push(U.flipY),S.push(U.unpackAlignment),S.push(U.colorSpace),S.join()}function q(U,S){let V=n.get(U);if(U.isVideoTexture&&z(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&V.__version!==U.version){let Y=U.image;if(Y===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(V,U,S);return}}else U.isExternalTexture&&(V.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+S)}function k(U,S){let V=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&V.__version!==U.version){Ae(V,U,S);return}else U.isExternalTexture&&(V.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+S)}function W(U,S){let V=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&V.__version!==U.version){Ae(V,U,S);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+S)}function ee(U,S){let V=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&V.__version!==U.version){Xe(V,U,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+S)}let le={[on]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[co]:i.MIRRORED_REPEAT},Me={[jt]:i.NEAREST,[rh]:i.NEAREST_MIPMAP_NEAREST,[Dr]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[wo]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},te={[_m]:i.NEVER,[Em]:i.ALWAYS,[ym]:i.LESS,[Xh]:i.LEQUAL,[Mm]:i.EQUAL,[qh]:i.GEQUAL,[bm]:i.GREATER,[Sm]:i.NOTEQUAL};function ae(U,S){if(S.type===kn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===zt||S.magFilter===wo||S.magFilter===Dr||S.magFilter===ni||S.minFilter===zt||S.minFilter===wo||S.minFilter===Dr||S.minFilter===ni)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,le[S.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,le[S.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,le[S.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Me[S.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Me[S.minFilter]),S.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,te[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===jt||S.minFilter!==Dr&&S.minFilter!==ni||S.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Pe(U,S){let V=!1;U.__webglInit===void 0&&(U.__webglInit=!0,S.addEventListener("dispose",A));let Y=S.source,J=f.get(Y);J===void 0&&(J={},f.set(Y,J));let be=B(S);if(be!==U.__cacheKey){J[be]===void 0&&(J[be]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),J[be].usedTimes++;let Ce=J[U.__cacheKey];Ce!==void 0&&(J[U.__cacheKey].usedTimes--,Ce.usedTimes===0&&M(S)),U.__cacheKey=be,U.__webglTexture=J[be].texture}return V}function Z(U,S,V){return Math.floor(Math.floor(U/V)/S)}function re(U,S,V,Y){let be=U.updateRanges;if(be.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,V,Y,S.data);else{be.sort((Te,_e)=>Te.start-_e.start);let Ce=0;for(let Te=1;Te<be.length;Te++){let _e=be[Ce],ye=be[Te],De=_e.start+_e.count,We=Z(ye.start,S.width,4),st=Z(_e.start,S.width,4);ye.start<=De+1&&We===st&&Z(ye.start+ye.count-1,S.width,4)===We?_e.count=Math.max(_e.count,ye.start+ye.count-_e.start):(++Ce,be[Ce]=ye)}be.length=Ce+1;let oe=t.getParameter(i.UNPACK_ROW_LENGTH),ce=t.getParameter(i.UNPACK_SKIP_PIXELS),Ie=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Te=0,_e=be.length;Te<_e;Te++){let ye=be[Te],De=Math.floor(ye.start/4),We=Math.ceil(ye.count/4),st=De%S.width,G=Math.floor(De/S.width),Le=We,he=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,st),t.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,st,G,Le,he,V,Y,S.data)}U.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,oe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ie)}}function Ae(U,S,V){let Y=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=i.TEXTURE_3D);let J=Pe(U,S),be=S.source;t.bindTexture(Y,U.__webglTexture,i.TEXTURE0+V);let Ce=n.get(be);if(be.version!==Ce.__version||J===!0){if(t.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let he=ht.getPrimaries(ht.workingColorSpace),Re=S.colorSpace===di?null:ht.getPrimaries(S.colorSpace),Ne=S.colorSpace===di||he===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let ce=g(S.image,!1,s.maxTextureSize);ce=vt(S,ce);let Ie=r.convert(S.format,S.colorSpace),Te=r.convert(S.type),_e=_(S.internalFormat,Ie,Te,S.normalized,S.colorSpace,S.isVideoTexture);ae(Y,S);let ye,De=S.mipmaps,We=S.isVideoTexture!==!0,st=Ce.__version===void 0||J===!0,G=be.dataReady,Le=T(S,ce);if(S.isDepthTexture)_e=E(S.format===Qi,S.type),st&&(We?t.texStorage2D(i.TEXTURE_2D,1,_e,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,_e,ce.width,ce.height,0,Ie,Te,null));else if(S.isDataTexture)if(De.length>0){We&&st&&t.texStorage2D(i.TEXTURE_2D,Le,_e,De[0].width,De[0].height);for(let he=0,Re=De.length;he<Re;he++)ye=De[he],We?G&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ye.width,ye.height,Ie,Te,ye.data):t.texImage2D(i.TEXTURE_2D,he,_e,ye.width,ye.height,0,Ie,Te,ye.data);S.generateMipmaps=!1}else We?(st&&t.texStorage2D(i.TEXTURE_2D,Le,_e,ce.width,ce.height),G&&re(S,ce,Ie,Te)):t.texImage2D(i.TEXTURE_2D,0,_e,ce.width,ce.height,0,Ie,Te,ce.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){We&&st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,_e,De[0].width,De[0].height,ce.depth);for(let he=0,Re=De.length;he<Re;he++)if(ye=De[he],S.format!==Xn)if(Ie!==null)if(We){if(G)if(S.layerUpdates.size>0){let Ne=rf(ye.width,ye.height,S.format,S.type);for(let ge of S.layerUpdates){let Qe=ye.data.subarray(ge*Ne/ye.data.BYTES_PER_ELEMENT,(ge+1)*Ne/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,ge,ye.width,ye.height,1,Ie,Qe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,ye.width,ye.height,ce.depth,Ie,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,_e,ye.width,ye.height,ce.depth,0,ye.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,ye.width,ye.height,ce.depth,Ie,Te,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,_e,ye.width,ye.height,ce.depth,0,Ie,Te,ye.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{We&&st&&t.texStorage2D(i.TEXTURE_2D,Le,_e,De[0].width,De[0].height);for(let he=0,Re=De.length;he<Re;he++)ye=De[he],S.format!==Xn?Ie!==null?We?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,ye.width,ye.height,Ie,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,he,_e,ye.width,ye.height,0,ye.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?G&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ye.width,ye.height,Ie,Te,ye.data):t.texImage2D(i.TEXTURE_2D,he,_e,ye.width,ye.height,0,Ie,Te,ye.data)}else if(S.isDataArrayTexture)if(We){if(st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,_e,ce.width,ce.height,ce.depth),G)if(S.layerUpdates.size>0){let he=rf(ce.width,ce.height,S.format,S.type);for(let Re of S.layerUpdates){let Ne=ce.data.subarray(Re*he/ce.data.BYTES_PER_ELEMENT,(Re+1)*he/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Re,ce.width,ce.height,1,Ie,Te,Ne)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Ie,Te,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,ce.width,ce.height,ce.depth,0,Ie,Te,ce.data);else if(S.isData3DTexture)We?(st&&t.texStorage3D(i.TEXTURE_3D,Le,_e,ce.width,ce.height,ce.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Ie,Te,ce.data)):t.texImage3D(i.TEXTURE_3D,0,_e,ce.width,ce.height,ce.depth,0,Ie,Te,ce.data);else if(S.isFramebufferTexture){if(st)if(We)t.texStorage2D(i.TEXTURE_2D,Le,_e,ce.width,ce.height);else{let he=ce.width,Re=ce.height;for(let Ne=0;Ne<Le;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,_e,he,Re,0,Ie,Te,null),he>>=1,Re>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let he=i.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),ce.parentNode!==he){he.appendChild(ce),u.add(S),he.onpaint=Re=>{let Ne=Re.changedElements;for(let ge of u)Ne.includes(ge.image)&&(ge.needsUpdate=!0)},he.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ce);else{let Ne=i.RGBA,ge=i.RGBA,Qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ne,ge,Qe,ce)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(De.length>0){if(We&&st){let he=ot(De[0]);t.texStorage2D(i.TEXTURE_2D,Le,_e,he.width,he.height)}for(let he=0,Re=De.length;he<Re;he++)ye=De[he],We?G&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Ie,Te,ye):t.texImage2D(i.TEXTURE_2D,he,_e,Ie,Te,ye);S.generateMipmaps=!1}else if(We){if(st){let he=ot(ce);t.texStorage2D(i.TEXTURE_2D,Le,_e,he.width,he.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ie,Te,ce)}else t.texImage2D(i.TEXTURE_2D,0,_e,Ie,Te,ce);m(S)&&y(Y),Ce.__version=be.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function Xe(U,S,V){if(S.image.length!==6)return;let Y=Pe(U,S),J=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+V);let be=n.get(J);if(J.version!==be.__version||Y===!0){t.activeTexture(i.TEXTURE0+V);let Ce=ht.getPrimaries(ht.workingColorSpace),oe=S.colorSpace===di?null:ht.getPrimaries(S.colorSpace),ce=S.colorSpace===di||Ce===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let Ie=S.isCompressedTexture||S.image[0].isCompressedTexture,Te=S.image[0]&&S.image[0].isDataTexture,_e=[];for(let ge=0;ge<6;ge++)!Ie&&!Te?_e[ge]=g(S.image[ge],!0,s.maxCubemapSize):_e[ge]=Te?S.image[ge].image:S.image[ge],_e[ge]=vt(S,_e[ge]);let ye=_e[0],De=r.convert(S.format,S.colorSpace),We=r.convert(S.type),st=_(S.internalFormat,De,We,S.normalized,S.colorSpace),G=S.isVideoTexture!==!0,Le=be.__version===void 0||Y===!0,he=J.dataReady,Re=T(S,ye);ae(i.TEXTURE_CUBE_MAP,S);let Ne;if(Ie){G&&Le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,st,ye.width,ye.height);for(let ge=0;ge<6;ge++){Ne=_e[ge].mipmaps;for(let Qe=0;Qe<Ne.length;Qe++){let qe=Ne[Qe];S.format!==Xn?De!==null?G?he&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe,0,0,qe.width,qe.height,De,qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe,st,qe.width,qe.height,0,qe.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe,0,0,qe.width,qe.height,De,We,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe,st,qe.width,qe.height,0,De,We,qe.data)}}}else{if(Ne=S.mipmaps,G&&Le){Ne.length>0&&Re++;let ge=ot(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,st,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Te){G?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,_e[ge].width,_e[ge].height,De,We,_e[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,st,_e[ge].width,_e[ge].height,0,De,We,_e[ge].data);for(let Qe=0;Qe<Ne.length;Qe++){let Gt=Ne[Qe].image[ge].image;G?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe+1,0,0,Gt.width,Gt.height,De,We,Gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe+1,st,Gt.width,Gt.height,0,De,We,Gt.data)}}else{G?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,De,We,_e[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,st,De,We,_e[ge]);for(let Qe=0;Qe<Ne.length;Qe++){let qe=Ne[Qe];G?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe+1,0,0,De,We,qe.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe+1,st,De,We,qe.image[ge])}}}m(S)&&y(i.TEXTURE_CUBE_MAP),be.__version=J.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function Q(U,S,V,Y,J,be){let Ce=r.convert(V.format,V.colorSpace),oe=r.convert(V.type),ce=_(V.internalFormat,Ce,oe,V.normalized,V.colorSpace),Ie=n.get(S),Te=n.get(V);if(Te.__renderTarget=S,!Ie.__hasExternalTextures){let _e=Math.max(1,S.width>>be),ye=Math.max(1,S.height>>be);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,be,ce,_e,ye,S.depth,0,Ce,oe,null):t.texImage2D(J,be,ce,_e,ye,0,Ce,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),tt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,Te.__webglTexture,0,et(S)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,Te.__webglTexture,be),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(U,S,V){if(i.bindRenderbuffer(i.RENDERBUFFER,U),S.depthBuffer){let Y=S.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,be=E(S.stencilBuffer,J),Ce=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;tt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(S),be,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(S),be,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,be,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,U)}else{let Y=S.textures;for(let J=0;J<Y.length;J++){let be=Y[J],Ce=r.convert(be.format,be.colorSpace),oe=r.convert(be.type),ce=_(be.internalFormat,Ce,oe,be.normalized,be.colorSpace);tt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(S),ce,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(S),ce,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ce,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(U,S,V){let Y=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(S.depthTexture);if(J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y){if(J.__webglInit===void 0&&(J.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ae(i.TEXTURE_CUBE_MAP,S.depthTexture);let Ie=r.convert(S.depthTexture.format),Te=r.convert(S.depthTexture.type),_e;S.depthTexture.format===qi?_e=i.DEPTH_COMPONENT24:S.depthTexture.format===Qi&&(_e=i.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,_e,S.width,S.height,0,Ie,Te,null)}}else q(S.depthTexture,0);let be=J.__webglTexture,Ce=et(S),oe=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,ce=S.depthTexture.format===Qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===qi)tt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,oe,be,0,Ce):i.framebufferTexture2D(i.FRAMEBUFFER,ce,oe,be,0);else if(S.depthTexture.format===Qi)tt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,oe,be,0,Ce):i.framebufferTexture2D(i.FRAMEBUFFER,ce,oe,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(U){let S=n.get(U),V=U.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==U.depthTexture){let Y=U.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){let J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=Y}if(U.depthTexture&&!S.__autoAllocateDepthBuffer)if(V)for(let Y=0;Y<6;Y++)Ee(S.__webglFramebuffer[Y],U,Y);else{let Y=U.texture.mipmaps;Y&&Y.length>0?Ee(S.__webglFramebuffer[0],U,0):Ee(S.__webglFramebuffer,U,0)}else if(V){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=i.createRenderbuffer(),xe(S.__webglDepthbuffer[Y],U,!1);else{let J=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=S.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,be)}}else{let Y=U.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),xe(S.__webglDepthbuffer,U,!1);else{let J=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,be)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(U,S,V){let Y=n.get(U);S!==void 0&&Q(Y.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&ne(U)}function ve(U){let S=U.texture,V=n.get(U),Y=n.get(S);U.addEventListener("dispose",x);let J=U.textures,be=U.isWebGLCubeRenderTarget===!0,Ce=J.length>1;if(Ce||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=S.version,o.memory.textures++),be){V.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[oe]=[];for(let ce=0;ce<S.mipmaps.length;ce++)V.__webglFramebuffer[oe][ce]=i.createFramebuffer()}else V.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)V.__webglFramebuffer[oe]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let oe=0,ce=J.length;oe<ce;oe++){let Ie=n.get(J[oe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&tt(U)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){let ce=J[oe];V.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[oe]);let Ie=r.convert(ce.format,ce.colorSpace),Te=r.convert(ce.type),_e=_(ce.internalFormat,Ie,Te,ce.normalized,ce.colorSpace,U.isXRRenderTarget===!0),ye=et(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,_e,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,V.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(V.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(be){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ae(i.TEXTURE_CUBE_MAP,S);for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0)for(let ce=0;ce<S.mipmaps.length;ce++)Q(V.__webglFramebuffer[oe][ce],U,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ce);else Q(V.__webglFramebuffer[oe],U,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(S)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let oe=0,ce=J.length;oe<ce;oe++){let Ie=J[oe],Te=n.get(Ie),_e=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(_e=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,Te.__webglTexture),ae(_e,Ie),Q(V.__webglFramebuffer,U,Ie,i.COLOR_ATTACHMENT0+oe,_e,0),m(Ie)&&y(_e)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(oe=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),ae(oe,S),S.mipmaps&&S.mipmaps.length>0)for(let ce=0;ce<S.mipmaps.length;ce++)Q(V.__webglFramebuffer[ce],U,S,i.COLOR_ATTACHMENT0,oe,ce);else Q(V.__webglFramebuffer,U,S,i.COLOR_ATTACHMENT0,oe,0);m(S)&&y(oe),t.unbindTexture()}U.depthBuffer&&ne(U)}function fe(U){let S=U.textures;for(let V=0,Y=S.length;V<Y;V++){let J=S[V];if(m(J)){let be=w(U),Ce=n.get(J).__webglTexture;t.bindTexture(be,Ce),y(be),t.unbindTexture()}}}let Se=[],Ve=[];function He(U){if(U.samples>0){if(tt(U)===!1){let S=U.textures,V=U.width,Y=U.height,J=i.COLOR_BUFFER_BIT,be=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(U),oe=S.length>1;if(oe)for(let Ie=0;Ie<S.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);let ce=U.texture.mipmaps;ce&&ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ie=0;Ie<S.length;Ie++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ie]);let Te=n.get(S[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,V,Y,0,0,V,Y,J,i.NEAREST),c===!0&&(Se.length=0,Ve.length=0,Se.push(i.COLOR_ATTACHMENT0+Ie),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(Se.push(be),Ve.push(be),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ve)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let Ie=0;Ie<S.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ie]);let Te=n.get(S[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&c){let S=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function et(U){return Math.min(s.maxSamples,U.samples)}function tt(U){let S=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function z(U){let S=o.render.frame;h.get(U)!==S&&(h.set(U,S),U.update())}function vt(U,S){let V=U.colorSpace,Y=U.format,J=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||V!==An&&V!==di&&(ht.getTransfer(V)===At?(Y!==Xn||J!==Bn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",V)),S}function ot(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(a.width=U.naturalWidth||U.width,a.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(a.width=U.displayWidth,a.height=U.displayHeight):(a.width=U.width,a.height=U.height),a}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.getTextureUnits=P,this.setTextureUnits=D,this.setTexture2D=q,this.setTexture2DArray=k,this.setTexture3D=W,this.setTextureCube=ee,this.rebindTextures=ue,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=tt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function nS(i,e){function t(n,s=di){let r,o=ht.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===ah)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vd)return i.BYTE;if(n===Wd)return i.SHORT;if(n===Ao)return i.UNSIGNED_SHORT;if(n===oh)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===Wt)return i.HALF_FLOAT;if(n===Yd)return i.ALPHA;if(n===Zd)return i.RGB;if(n===Xn)return i.RGBA;if(n===qi)return i.DEPTH_COMPONENT;if(n===Qi)return i.DEPTH_STENCIL;if(n===ch)return i.RED;if(n===hh)return i.RED_INTEGER;if(n===Zs)return i.RG;if(n===uh)return i.RG_INTEGER;if(n===dh)return i.RGBA_INTEGER;if(n===ja||n===$a||n===Ja||n===Qa)if(o===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fh||n===ph||n===mh||n===gh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ph)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xh||n===vh||n===_h||n===yh||n===Mh||n===el||n===bh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xh||n===vh)return o===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_h)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===yh)return r.COMPRESSED_R11_EAC;if(n===Mh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===el)return r.COMPRESSED_RG11_EAC;if(n===bh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Sh||n===Eh||n===Th||n===wh||n===Ah||n===Rh||n===Ch||n===Ph||n===Ih||n===Lh||n===Dh||n===Nh||n===Uh||n===Oh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sh)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eh)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Th)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wh)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ah)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rh)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ch)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ph)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ih)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lh)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dh)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nh)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uh)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oh)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fh||n===Bh||n===kh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fh)return o===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zh||n===Hh||n===tl||n===Gh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===zh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Hh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var iS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sS=`
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

}`,_f=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ya(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yt({vertexShader:iS,fragmentShader:sS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new me(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yf=class extends Ii{constructor(e,t){super();let n=this,s=null,r=1,o=null,l="local-floor",c=1,a=null,h=null,u=null,d=null,f=null,p=null,v=typeof XRWebGLBinding<"u",g=new _f,m={},y=t.getContextAttributes(),w=null,_=null,E=[],T=[],A=new pe,x=null,b=null,M=new dn;M.viewport=new Tt;let C=new dn;C.viewport=new Tt;let O=[M,C],L=new eh,P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=E[Z];return re===void 0&&(re=new mo,E[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=E[Z];return re===void 0&&(re=new mo,E[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=E[Z];return re===void 0&&(re=new mo,E[Z]=re),re.getHandSpace()};function F(Z){let re=T.indexOf(Z.inputSource);if(re===-1)return;let Ae=E[re];Ae!==void 0&&(Ae.update(Z.inputSource,Z.frame,a||o),Ae.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",q);for(let Z=0;Z<E.length;Z++){let re=T[Z];re!==null&&(T[Z]=null,E[Z].disconnect(re))}P=null,D=null,g.reset();for(let Z in m)delete m[Z];if(e.setRenderTarget(w),f=null,d=null,u=null,s=null,_=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),b!==null){let Z=b.camera;Z.fov=b.fov,Z.zoom=b.zoom,Z.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){l=Z,n.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||o},this.setReferenceSpace=function(Z){a=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",B),s.addEventListener("inputsourceschange",q),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Xe=null,Q=null;y.depth&&(Q=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=y.stencil?Qi:qi,Xe=y.stencil?Ys:Oi);let xe={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Zt(d.textureWidth,d.textureHeight,{format:Xn,type:Bn,depthTexture:new Yi(d.textureWidth,d.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ae={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Zt(f.framebufferWidth,f.framebufferHeight,{format:Xn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),a=null,o=await s.requestReferenceSpace(l),Pe.setContext(s),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(Z){for(let re=0;re<Z.removed.length;re++){let Ae=Z.removed[re],Xe=T.indexOf(Ae);Xe>=0&&(T[Xe]=null,E[Xe].disconnect(Ae))}for(let re=0;re<Z.added.length;re++){let Ae=Z.added[re],Xe=T.indexOf(Ae);if(Xe===-1){for(let xe=0;xe<E.length;xe++)if(xe>=T.length){T.push(Ae),Xe=xe;break}else if(T[xe]===null){T[xe]=Ae,Xe=xe;break}if(Xe===-1)break}let Q=E[Xe];Q&&Q.connect(Ae)}}let k=new N,W=new N;function ee(Z,re,Ae){k.setFromMatrixPosition(re.matrixWorld),W.setFromMatrixPosition(Ae.matrixWorld);let Xe=k.distanceTo(W),Q=re.projectionMatrix.elements,xe=Ae.projectionMatrix.elements,Ee=Q[14]/(Q[10]-1),ne=Q[14]/(Q[10]+1),ue=(Q[9]+1)/Q[5],ve=(Q[9]-1)/Q[5],fe=(Q[8]-1)/Q[0],Se=(xe[8]+1)/xe[0],Ve=Ee*fe,He=Ee*Se,et=Xe/(-fe+Se),tt=et*-fe;if(re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(tt),Z.translateZ(et),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Q[10]===-1)Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let z=Ee+et,vt=ne+et,ot=Ve-tt,U=He+(Xe-tt),S=ue*ne/vt*z,V=ve*ne/vt*z;Z.projectionMatrix.makePerspective(ot,U,S,V,z,vt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function le(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let re=Z.near,Ae=Z.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(Ae=g.depthFar)),L.near=C.near=M.near=re,L.far=C.far=M.far=Ae,(P!==L.near||D!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),P=L.near,D=L.far),L.layers.mask=Z.layers.mask|6,M.layers.mask=L.layers.mask&-5,C.layers.mask=L.layers.mask&-3;let Xe=Z.parent,Q=L.cameras;le(L,Xe);for(let xe=0;xe<Q.length;xe++)le(Q[xe],Xe);Q.length===2?ee(L,M,C):L.projectionMatrix.copy(M.projectionMatrix),b===null&&Z.isPerspectiveCamera&&(b={camera:Z,fov:Z.fov,zoom:Z.zoom}),Me(Z,L,Xe)};function Me(Z,re,Ae){Ae===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(Ae.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=pr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(Z){return m[Z]};let te=null;function ae(Z,re){if(h=re.getViewerPose(a||o),p=re,h!==null){let Ae=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Xe=!1;Ae.length!==L.cameras.length&&(L.cameras.length=0,Xe=!0);for(let ne=0;ne<Ae.length;ne++){let ue=Ae[ne],ve=null;if(f!==null)ve=f.getViewport(ue);else{let Se=u.getViewSubImage(d,ue);ve=Se.viewport,ne===0&&(e.setRenderTargetTextures(_,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(_))}let fe=O[ne];fe===void 0&&(fe=new dn,fe.layers.enable(ne),fe.viewport=new Tt,O[ne]=fe),fe.matrix.fromArray(ue.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(ue.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(ve.x,ve.y,ve.width,ve.height),ne===0&&(L.matrix.copy(fe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Xe===!0&&L.cameras.push(fe)}let Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let ne=u.getDepthInformation(Ae[0]);ne&&ne.isValid&&ne.texture&&g.init(ne,s.renderState)}if(Q&&Q.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let ne=0;ne<Ae.length;ne++){let ue=Ae[ne].camera;if(ue){let ve=m[ue];ve||(ve=new ya,m[ue]=ve);let fe=u.getCameraImage(ue);ve.sourceTexture=fe}}}}for(let Ae=0;Ae<E.length;Ae++){let Xe=T[Ae],Q=E[Ae];Xe!==null&&Q!==void 0&&Q.update(Xe,re,a||o)}te&&te(Z,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),p=null}let Pe=new sg;Pe.setAnimationLoop(ae),this.setAnimationLoop=function(Z){te=Z},this.dispose=function(){}}},rS=new je,hg=new at;hg.set(-1,0,0,0,1,0,0,0,1);function oS(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,tf(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,w,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&l(g,m)):m.isPointsMaterial?c(g,m,y,w):m.isSpriteMaterial?a(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===yn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===yn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m),w=y.envMap,_=y.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(rS.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(hg),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function l(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,y,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=w*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===yn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function aS(i,e,t,n){let s={},r={},o=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,E){let T=E.program;n.uniformBlockBinding(_,T)}function a(_,E){let T=s[_.id];T===void 0&&(g(_),T=h(_),s[_.id]=T,_.addEventListener("dispose",y));let A=E.program;n.updateUBOMapping(_,A);let x=e.render.frame;r[_.id]!==x&&(d(_),r[_.id]=x)}function h(_){let E=u();_.__bindingPointIndex=E;let T=i.createBuffer(),A=_.__size,x=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,T),T}function u(){for(let _=0;_<l;_++)if(o.indexOf(_)===-1)return o.push(_),_;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let E=s[_.id],T=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let x=0,b=T.length;x<b;x++){let M=T[x];if(Array.isArray(M))for(let C=0,O=M.length;C<O;C++)f(M[C],x,C,A);else f(M,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,E,T,A){if(v(_,E,T,A)===!0){let x=_.__offset,b=_.value;if(Array.isArray(b)){let M=0;for(let C=0;C<b.length;C++){let O=b[C],L=m(O);p(O,_.__data,M),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(M+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(b,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,_.__data)}}function p(_,E,T){typeof _=="number"||typeof _=="boolean"?E[0]=_:_.isMatrix3?(E[0]=_.elements[0],E[1]=_.elements[1],E[2]=_.elements[2],E[3]=0,E[4]=_.elements[3],E[5]=_.elements[4],E[6]=_.elements[5],E[7]=0,E[8]=_.elements[6],E[9]=_.elements[7],E[10]=_.elements[8],E[11]=0):ArrayBuffer.isView(_)?E.set(new _.constructor(_.buffer,_.byteOffset,E.length)):_.toArray(E,T)}function v(_,E,T,A){let x=_.value,b=E+"_"+T;if(A[b]===void 0)return typeof x=="number"||typeof x=="boolean"?A[b]=x:ArrayBuffer.isView(x)?A[b]=x.slice():A[b]=x.clone(),!0;{let M=A[b];if(typeof x=="number"||typeof x=="boolean"){if(M!==x)return A[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(M.equals(x)===!1)return M.copy(x),!0}}return!1}function g(_){let E=_.uniforms,T=0,A=16;for(let b=0,M=E.length;b<M;b++){let C=Array.isArray(E[b])?E[b]:[E[b]];for(let O=0,L=C.length;O<L;O++){let P=C[O],D=Array.isArray(P.value)?P.value:[P.value];for(let F=0,B=D.length;F<B;F++){let q=D[F],k=m(q),W=T%A,ee=W%k.boundary,le=W+ee;T+=ee,le!==0&&A-le<k.storage&&(T+=A-le),P.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=T,T+=k.storage}}}let x=T%A;return x>0&&(T+=A-x),_.__size=T,_.__cache={},this}function m(_){let E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(E.boundary=16,E.storage=_.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",_),E}function y(_){let E=_.target;E.removeEventListener("dispose",y);let T=o.indexOf(E.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function w(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:a,dispose:w}}var lS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),es=null;function cS(){return es===null&&(es=new vi(lS,16,16,Zs,Wt),es.name="DFG_LUT",es.minFilter=zt,es.magFilter=zt,es.wrapS=Un,es.wrapT=Un,es.generateMipmaps=!1,es.needsUpdate=!0),es}var jh=class{constructor(e={}){let{canvas:t=Tm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:a=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Bn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let v=f,g=new Set([dh,uh,hh]),m=new Set([Bn,Oi,Ao,Ys,ah,lh]),y=new Uint32Array(4),w=new Int32Array(4),_=new N,E=null,T=null,A=[],x=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,C=!1,O=null,L=null,P=null,D=null;this._outputColorSpace=pt;let F=0,B=0,q=null,k=-1,W=null,ee=new Tt,le=new Tt,Me=null,te=new de(0),ae=0,Pe=t.width,Z=t.height,re=1,Ae=null,Xe=null,Q=new Tt(0,0,Pe,Z),xe=new Tt(0,0,Pe,Z),Ee=!1,ne=new go,ue=!1,ve=!1,fe=new je,Se=new N,Ve=new Tt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function tt(){return q===null?re:1}let z=n;function vt(R,H){return t.getContext(R,H)}let ot,U,S,V,Y,J,be,Ce,oe,ce,Ie,Te,_e,ye,De,We,st,G,Le,he,Re,Ne,ge;try{let R={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:a,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Gt,!1),t.addEventListener("webglcontextrestored",Ct,!1),t.addEventListener("webglcontextcreationerror",Ei,!1),z===null){let H="webgl2";if(z=vt(H,R),z===null)throw vt(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(R){throw t.removeEventListener("webglcontextlost",Gt,!1),t.removeEventListener("webglcontextrestored",Ct,!1),t.removeEventListener("webglcontextcreationerror",Ei,!1),it("WebGLRenderer: "+R.message),R}function Qe(){ot=new gM(z),ot.init(),Re=new nS(z,ot),U=new oM(z,ot,e,Re),S=new eS(z,ot),U.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),L=z.createFramebuffer(),P=z.createFramebuffer(),D=z.createFramebuffer(),V=new _M(z),Y=new zb,J=new tS(z,ot,S,Y,U,Re,V),be=new mM(M),Ce=new M_(z),Ne=new sM(z,Ce),oe=new xM(z,Ce,V,Ne),ce=new MM(z,oe,Ce,Ne,V),G=new yM(z,U,J),De=new aM(Y),Ie=new kb(M,be,ot,U,Ne,De),Te=new oS(M,Y),_e=new Gb,ye=new Zb(ot),st=new iM(M,be,S,ce,p,c),We=new Qb(M,ce,U),ge=new aS(z,V,U,S),Le=new rM(z,ot,V),he=new vM(z,ot,V),V.programs=Ie.programs,M.capabilities=U,M.extensions=ot,M.properties=Y,M.renderLists=_e,M.shadowMap=We,M.state=S,M.info=V}v!==Bn&&(b=new SM(v,t.width,t.height,l,s,r));let qe=new yf(M,z);this.xr=qe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let R=ot.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ot.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(R){R!==void 0&&(re=R,this.setSize(Pe,Z,!1))},this.getSize=function(R){return R.set(Pe,Z)},this.setSize=function(R,H,ie=!0){if(qe.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=R,Z=H,t.width=Math.floor(R*re),t.height=Math.floor(H*re),ie===!0&&(t.style.width=R+"px",t.style.height=H+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(Pe*re,Z*re).floor()},this.setDrawingBufferSize=function(R,H,ie){Pe=R,Z=H,re=ie,t.width=Math.floor(R*ie),t.height=Math.floor(H*ie),this.setViewport(0,0,R,H)},this.setEffects=function(R){if(v===Bn){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let H=0;H<R.length;H++)if(R[H].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(ee)},this.getViewport=function(R){return R.copy(Q)},this.setViewport=function(R,H,ie,K){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,H,ie,K),S.viewport(ee.copy(Q).multiplyScalar(re).round())},this.getScissor=function(R){return R.copy(xe)},this.setScissor=function(R,H,ie,K){R.isVector4?xe.set(R.x,R.y,R.z,R.w):xe.set(R,H,ie,K),S.scissor(le.copy(xe).multiplyScalar(re).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(R){S.setScissorTest(Ee=R)},this.setOpaqueSort=function(R){Ae=R},this.setTransparentSort=function(R){Xe=R},this.getClearColor=function(R){return R.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,ie=!0){let K=0;if(R){let j=!1;if(q!==null){let Fe=q.texture.format;j=g.has(Fe)}if(j){let Fe=q.texture.type,Ge=m.has(Fe),Oe=st.getClearColor(),Ye=st.getClearAlpha(),$e=Oe.r,dt=Oe.g,St=Oe.b;Ge?(y[0]=$e,y[1]=dt,y[2]=St,y[3]=Ye,z.clearBufferuiv(z.COLOR,0,y)):(w[0]=$e,w[1]=dt,w[2]=St,w[3]=Ye,z.clearBufferiv(z.COLOR,0,w))}else K|=z.COLOR_BUFFER_BIT}H&&(K|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(K|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&z.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),O=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Gt,!1),t.removeEventListener("webglcontextrestored",Ct,!1),t.removeEventListener("webglcontextcreationerror",Ei,!1),st.dispose(),_e.dispose(),ye.dispose(),Y.dispose(),be.dispose(),ce.dispose(),Ne.dispose(),ge.dispose(),Ie.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",Yp),qe.removeEventListener("sessionend",Zp),ir.stop()};function Gt(R){R.preventDefault(),ua("WebGLRenderer: Context Lost."),C=!0}function Ct(){ua("WebGLRenderer: Context Restored."),C=!1;let R=V.autoReset,H=We.enabled,ie=We.autoUpdate,K=We.needsUpdate,j=We.type;Qe(),V.autoReset=R,We.enabled=H,We.autoUpdate=ie,We.needsUpdate=K,We.type=j}function Ei(R){it("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Gi(R){let H=R.target;H.removeEventListener("dispose",Gi),Dx(H)}function Dx(R){Nx(R),Y.remove(R)}function Nx(R){let H=Y.get(R).programs;H!==void 0&&(H.forEach(function(ie){Ie.releaseProgram(ie)}),R.isShaderMaterial&&Ie.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,ie,K,j,Fe){H===null&&(H=He);let Ge=j.isMesh&&j.matrixWorld.determinantAffine()<0,Oe=Fx(R,H,ie,K,j);S.setMaterial(K,Ge);let Ye=ie.index,$e=1;if(K.wireframe===!0){if(Ye=oe.getWireframeAttribute(ie),Ye===void 0)return;$e=2}let dt=ie.drawRange,St=ie.attributes.position,Ze=dt.start*$e,Pt=(dt.start+dt.count)*$e;Fe!==null&&(Ze=Math.max(Ze,Fe.start*$e),Pt=Math.min(Pt,(Fe.start+Fe.count)*$e)),Ye!==null?(Ze=Math.max(Ze,0),Pt=Math.min(Pt,Ye.count)):St!=null&&(Ze=Math.max(Ze,0),Pt=Math.min(Pt,St.count));let hn=Pt-Ze;if(hn<0||hn===1/0)return;Ne.setup(j,K,Oe,ie,Ye);let Yt,kt=Le;if(Ye!==null&&(Yt=Ce.get(Ye),kt=he,kt.setIndex(Yt)),j.isMesh)K.wireframe===!0?(S.setLineWidth(K.wireframeLinewidth*tt()),kt.setMode(z.LINES)):kt.setMode(z.TRIANGLES);else if(j.isLine){let Ln=K.linewidth;Ln===void 0&&(Ln=1),S.setLineWidth(Ln*tt()),j.isLineSegments?kt.setMode(z.LINES):j.isLineLoop?kt.setMode(z.LINE_LOOP):kt.setMode(z.LINE_STRIP)}else j.isPoints?kt.setMode(z.POINTS):j.isSprite&&kt.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))kt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let Ln=j._multiDrawStarts,ke=j._multiDrawCounts,Vn=j._multiDrawCount,Et=Ye?Ce.get(Ye).bytesPerElement:1,mi=Y.get(K).currentProgram.getUniforms();for(let Vi=0;Vi<Vn;Vi++)mi.setValue(z,"_gl_DrawID",Vi),kt.render(Ln[Vi]/Et,ke[Vi])}else if(j.isInstancedMesh)kt.renderInstances(Ze,hn,j.count);else if(ie.isInstancedBufferGeometry){let Ln=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,ke=Math.min(ie.instanceCount,Ln);kt.renderInstances(Ze,hn,ke)}else kt.render(Ze,hn)};function qp(R,H,ie,K){O!==null&&R.isNodeMaterial&&O.setObject(K,R),ue===!0&&De.setState(R,ie,!1),R.transparent===!0&&R.side===Ht&&R.forceSinglePass===!1?(R.side=yn,R.needsUpdate=!0,ql(R,H,K),R.side=$i,R.needsUpdate=!0,ql(R,H,K),R.side=Ht):ql(R,H,K)}this.compile=function(R,H,ie=null){ie===null&&(ie=R),O!==null&&O.renderStart(R,H,ie),T=ye.get(ie),T.init(H),x.push(T),ie.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),R!==ie&&R.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),ve=this.localClippingEnabled,ue=De.init(this.clippingPlanes,ve),ue===!0&&De.setGlobalState(this.clippingPlanes,H),O!==null&&We.render(T.state.shadowsArray,ie,H);let K=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Fe=j.material;if(Fe)if(Array.isArray(Fe))for(let Ge=0;Ge<Fe.length;Ge++){let Oe=Fe[Ge];qp(Oe,ie,H,j),K.add(Oe)}else qp(Fe,ie,H,j),K.add(Fe)}),T=x.pop(),O!==null&&O.renderEnd(),K},this.compileAsync=function(R,H,ie=null){let K=this.compile(R,H,ie);return new Promise(j=>{function Fe(){if(K.forEach(function(Ge){let Ye=Y.get(Ge).currentProgram;(Ye===void 0||Ye.isReady())&&K.delete(Ge)}),K.size===0){j(R);return}setTimeout(Fe,10)}ot.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Yu=null;function Ux(R){Yu&&Yu(R)}function Yp(){ir.stop()}function Zp(){ir.start()}let ir=new sg;ir.setAnimationLoop(Ux),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(R){Yu=R,qe.setAnimationLoop(R),R===null?ir.stop():ir.start()},qe.addEventListener("sessionstart",Yp),qe.addEventListener("sessionend",Zp),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;O!==null&&O.renderStart(R,H);let ie=qe.enabled===!0&&qe.isPresenting===!0,K=b!==null&&(q===null||ie)&&b.begin(M,q);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(H),H=qe.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,H,q),T=ye.get(R,x.length),T.init(H),T.state.textureUnits=J.getTextureUnits(),x.push(T),fe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ne.setFromProjectionMatrix(fe,Pi,H.reversedDepth),ve=this.localClippingEnabled,ue=De.init(this.clippingPlanes,ve),E=_e.get(R,A.length),E.init(),A.push(E),qe.enabled===!0&&qe.isPresenting===!0){let Ge=M.xr.getDepthSensingMesh();Ge!==null&&Zu(Ge,H,-1/0,M.sortObjects)}Zu(R,H,0,M.sortObjects),E.finish(),O!==null&&O.updateLights(T.state.lightsArray),M.sortObjects===!0&&E.sort(Ae,Xe),et=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,et&&st.addToRenderList(E,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ue===!0&&De.beginShadows();let j=T.state.shadowsArray;if(We.render(j,R,H),ue===!0&&De.endShadows(),(K&&b.hasRenderPass())===!1){let Ge=E.opaque,Oe=E.transmissive;if(T.setupLights(),H.isArrayCamera){let Ye=H.cameras;if(Oe.length>0)for(let $e=0,dt=Ye.length;$e<dt;$e++){let St=Ye[$e];jp(Ge,Oe,R,St)}et&&st.render(R);for(let $e=0,dt=Ye.length;$e<dt;$e++){let St=Ye[$e];Kp(E,R,St,St.viewport)}}else Oe.length>0&&jp(Ge,Oe,R,H),et&&st.render(R),Kp(E,R,H)}q!==null&&B===0&&(J.updateMultisampleRenderTarget(q),J.updateRenderTargetMipmap(q)),K&&b.end(M),R.isScene===!0&&R.onAfterRender(M,R,H),Ne.resetDefaultState(),k=-1,W=null,x.pop(),x.length>0?(T=x[x.length-1],J.setTextureUnits(T.state.textureUnits),ue===!0&&De.setGlobalState(M.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?E=A[A.length-1]:E=null,O!==null&&O.renderEnd()};function Zu(R,H,ie,K){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLightProbeGrid)T.pushLightProbeGrid(R);else if(R.isLight)T.pushLight(R),R.castShadow&&T.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(ne)){K&&Ve.setFromMatrixPosition(R.matrixWorld).applyMatrix4(fe);let Ge=ce.update(R),Oe=R.material;Oe.visible&&E.push(R,Ge,Oe,ie,Ve.z,null,H)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(ne))){let Ge=ce.update(R),Oe=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ve.copy(R.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),Ve.copy(Ge.boundingSphere.center)),Ve.applyMatrix4(R.matrixWorld).applyMatrix4(fe)),Array.isArray(Oe)){let Ye=Ge.groups;for(let $e=0,dt=Ye.length;$e<dt;$e++){let St=Ye[$e],Ze=Oe[St.materialIndex];Ze&&Ze.visible&&E.push(R,Ge,Ze,ie,Ve.z,St,H)}}else Oe.visible&&E.push(R,Ge,Oe,ie,Ve.z,null,H)}}let Fe=R.children;for(let Ge=0,Oe=Fe.length;Ge<Oe;Ge++)Zu(Fe[Ge],H,ie,K)}function Kp(R,H,ie,K){let{opaque:j,transmissive:Fe,transparent:Ge}=R;T.setupLightsView(ie),ue===!0&&De.setGlobalState(M.clippingPlanes,ie),K&&S.viewport(ee.copy(K)),j.length>0&&Xl(j,H,ie),Fe.length>0&&Xl(Fe,H,ie),Ge.length>0&&Xl(Ge,H,ie),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function jp(R,H,ie,K){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[K.id]===void 0){let Ze=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[K.id]=new Zt(1,1,{generateMipmaps:!0,type:Ze?Wt:Bn,minFilter:ni,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let Fe=T.state.transmissionRenderTarget[K.id],Ge=K.viewport||ee;Fe.setSize(Ge.z*M.transmissionResolutionScale,Ge.w*M.transmissionResolutionScale);let Oe=M.getRenderTarget(),Ye=M.getActiveCubeFace(),$e=M.getActiveMipmapLevel();M.setRenderTarget(Fe),M.getClearColor(te),ae=M.getClearAlpha(),ae<1&&M.setClearColor(16777215,.5),M.clear(),et&&st.render(ie);let dt=M.toneMapping;M.toneMapping=Ui;let St=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),T.setupLightsView(K),ue===!0&&De.setGlobalState(M.clippingPlanes,K),Xl(R,ie,K),J.updateMultisampleRenderTarget(Fe),J.updateRenderTargetMipmap(Fe),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Pt=0,hn=H.length;Pt<hn;Pt++){let Yt=H[Pt],{object:kt,geometry:Ln,material:ke,group:Vn}=Yt;if(ke.side===Ht&&kt.layers.test(K.layers)){let Et=ke.side;ke.side=yn,ke.needsUpdate=!0,$p(kt,ie,K,Ln,ke,Vn),ke.side=Et,ke.needsUpdate=!0,Ze=!0}}Ze===!0&&(J.updateMultisampleRenderTarget(Fe),J.updateRenderTargetMipmap(Fe))}M.setRenderTarget(Oe,Ye,$e),M.setClearColor(te,ae),St!==void 0&&(K.viewport=St),M.toneMapping=dt}function Xl(R,H,ie){let K=H.isScene===!0?H.overrideMaterial:null;for(let j=0,Fe=R.length;j<Fe;j++){let Ge=R[j],{object:Oe,geometry:Ye,group:$e}=Ge,dt=Ge.material;dt.allowOverride===!0&&K!==null&&(dt=K),Oe.layers.test(ie.layers)&&$p(Oe,H,ie,Ye,dt,$e)}}function $p(R,H,ie,K,j,Fe){O!==null&&j.isNodeMaterial&&O.setObject(R,j),R.onBeforeRender(M,H,ie,K,j,Fe),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(M,H,ie,K,R,Fe),j.transparent===!0&&j.side===Ht&&j.forceSinglePass===!1?(j.side=yn,j.needsUpdate=!0,M.renderBufferDirect(ie,H,K,j,R,Fe),j.side=$i,j.needsUpdate=!0,M.renderBufferDirect(ie,H,K,j,R,Fe),j.side=Ht):M.renderBufferDirect(ie,H,K,j,R,Fe),R.onAfterRender(M,H,ie,K,j,Fe)}function ql(R,H,ie){H.isScene!==!0&&(H=He);let K=Y.get(R),j=T.state.lights,Fe=T.state.shadowsArray,Ge=j.state.version,Oe=Ie.getParameters(R,j.state,Fe,H,ie,T.state.lightProbeGridArray),Ye=Ie.getProgramCacheKey(Oe),$e=K.programs;K.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?H.environment:null,K.fog=H.fog;let dt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;K.envMap=be.get(R.envMap||K.environment,dt),K.envMapRotation=K.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,$e===void 0&&(R.addEventListener("dispose",Gi),$e=new Map,K.programs=$e);let St=$e.get(Ye);if(St!==void 0){if(K.currentProgram===St&&K.lightsStateVersion===Ge)return Qp(R,Oe),St}else Oe.uniforms=Ie.getUniforms(R),O!==null&&R.isNodeMaterial&&O.build(R,ie,Oe),R.onBeforeCompile(Oe,M),St=Ie.acquireProgram(Oe,Ye),$e.set(Ye,St),K.uniforms=Oe.uniforms;let Ze=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=De.uniform),Qp(R,Oe),K.needsLights=kx(R),K.lightsStateVersion=Ge,K.needsLights&&(Ze.ambientLightColor.value=j.state.ambient,Ze.lightProbe.value=j.state.probe,Ze.sunLights.value=j.state.sun,Ze.sunLightShadows.value=j.state.sunShadow,Ze.directionalLights.value=j.state.directional,Ze.directionalLightShadows.value=j.state.directionalShadow,Ze.spotLights.value=j.state.spot,Ze.spotLightShadows.value=j.state.spotShadow,Ze.rectAreaLights.value=j.state.rectArea,Ze.ltc_1.value=j.state.rectAreaLTC1,Ze.ltc_2.value=j.state.rectAreaLTC2,Ze.pointLights.value=j.state.point,Ze.pointLightShadows.value=j.state.pointShadow,Ze.hemisphereLights.value=j.state.hemi,Ze.sunShadowMatrix.value=j.state.sunShadowMatrix,Ze.sunShadowCascade.value=j.state.sunShadowCascade,Ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ze.spotLightMatrix.value=j.state.spotLightMatrix,Ze.spotLightMap.value=j.state.spotLightMap,Ze.pointShadowMatrix.value=j.state.pointShadowMatrix),K.lightProbeGrid=T.state.lightProbeGridArray.length>0,K.currentProgram=St,K.uniformsList=null,St}function Jp(R){if(R.uniformsList===null){let H=R.currentProgram.getUniforms();R.uniformsList=Io.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function Qp(R,H){let ie=Y.get(R);ie.outputColorSpace=H.outputColorSpace,ie.batching=H.batching,ie.batchingColor=H.batchingColor,ie.instancing=H.instancing,ie.instancingColor=H.instancingColor,ie.instancingMorph=H.instancingMorph,ie.skinning=H.skinning,ie.morphTargets=H.morphTargets,ie.morphNormals=H.morphNormals,ie.morphColors=H.morphColors,ie.morphTargetsCount=H.morphTargetsCount,ie.numClippingPlanes=H.numClippingPlanes,ie.numIntersection=H.numClipIntersection,ie.vertexAlphas=H.vertexAlphas,ie.vertexTangents=H.vertexTangents,ie.toneMapping=H.toneMapping}function Ox(R,H){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;_.setFromMatrixPosition(H.matrixWorld);for(let ie=0,K=R.length;ie<K;ie++){let j=R[ie];if(j.texture!==null&&j.boundingBox.containsPoint(_))return j}return null}function Fx(R,H,ie,K,j){H.isScene!==!0&&(H=He),J.resetTextureUnits();let Fe=H.fog,Ge=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?H.environment:null,Oe=q===null?M.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ht.workingColorSpace,Ye=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,$e=be.get(K.envMap||Ge,Ye),dt=K.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,St=!!ie.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ze=!!ie.morphAttributes.position,Pt=!!ie.morphAttributes.normal,hn=!!ie.morphAttributes.color,Yt=Ui;K.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Yt=M.toneMapping);let kt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Ln=kt!==void 0?kt.length:0,ke=Y.get(K),Vn=T.state.lights;if(ue===!0&&(ve===!0||R!==W)){let Vt=R===W&&K.id===k;De.setState(K,R,Vt)}let Et=!1;K.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Vn.state.version||ke.outputColorSpace!==Oe||j.isBatchedMesh&&ke.batching===!1||!j.isBatchedMesh&&ke.batching===!0||j.isBatchedMesh&&ke.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&ke.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&ke.instancing===!1||!j.isInstancedMesh&&ke.instancing===!0||j.isSkinnedMesh&&ke.skinning===!1||!j.isSkinnedMesh&&ke.skinning===!0||j.isInstancedMesh&&ke.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ke.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ke.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ke.instancingMorph===!1&&j.morphTexture!==null||ke.envMap!==$e||K.fog===!0&&ke.fog!==Fe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==De.numPlanes||ke.numIntersection!==De.numIntersection)||ke.vertexAlphas!==dt||ke.vertexTangents!==St||ke.morphTargets!==Ze||ke.morphNormals!==Pt||ke.morphColors!==hn||ke.toneMapping!==Yt||ke.morphTargetsCount!==Ln||!!ke.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,ke.__version=K.version);let mi=ke.currentProgram;Et===!0&&(mi=ql(K,H,j),O&&K.isNodeMaterial&&O.onUpdateProgram(K,mi,ke));let Vi=!1,Ds=!1,Hr=!1,Ut=mi.getUniforms(),rn=ke.uniforms;if(S.useProgram(mi.program)&&(Vi=!0,Ds=!0,Hr=!0),K.id!==k&&(k=K.id,Ds=!0),ke.needsLights){let Vt=Ox(T.state.lightProbeGridArray,j);ke.lightProbeGrid!==Vt&&(ke.lightProbeGrid=Vt,Ds=!0)}if(Vi||W!==R){S.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ut.setValue(z,"projectionMatrix",R.projectionMatrix),Ut.setValue(z,"viewMatrix",R.matrixWorldInverse);let Us=Ut.map.cameraPosition;Us!==void 0&&Us.setValue(z,Se.setFromMatrixPosition(R.matrixWorld)),U.logarithmicDepthBuffer&&Ut.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ut.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),W!==R&&(W=R,Ds=!0,Hr=!0)}if(ke.needsLights&&(Vn.state.sunShadowMap.length>0&&Ut.setValue(z,"sunShadowMap",Vn.state.sunShadowMap,J),Vn.state.directionalShadowMap.length>0&&Ut.setValue(z,"directionalShadowMap",Vn.state.directionalShadowMap,J),Vn.state.spotShadowMap.length>0&&Ut.setValue(z,"spotShadowMap",Vn.state.spotShadowMap,J),Vn.state.pointShadowMap.length>0&&Ut.setValue(z,"pointShadowMap",Vn.state.pointShadowMap,J)),j.isSkinnedMesh){Ut.setOptional(z,j,"bindMatrix"),Ut.setOptional(z,j,"bindMatrixInverse");let Vt=j.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Ut.setValue(z,"boneTexture",Vt.boneTexture,J))}j.isBatchedMesh&&(Ut.setOptional(z,j,"batchingTexture"),Ut.setValue(z,"batchingTexture",j._matricesTexture,J),Ut.setOptional(z,j,"batchingIdTexture"),Ut.setValue(z,"batchingIdTexture",j._indirectTexture,J),Ut.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&Ut.setValue(z,"batchingColorTexture",j._colorsTexture,J));let Ns=ie.morphAttributes;if((Ns.position!==void 0||Ns.normal!==void 0||Ns.color!==void 0)&&G.update(j,ie,mi),(Ds||ke.receiveShadow!==j.receiveShadow)&&(ke.receiveShadow=j.receiveShadow,Ut.setValue(z,"receiveShadow",j.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&H.environment!==null&&(rn.envMapIntensity.value=H.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=cS()),Ds){if(Ut.setValue(z,"toneMappingExposure",M.toneMappingExposure),ke.needsLights&&Bx(rn,Hr),Fe&&K.fog===!0&&Te.refreshFogUniforms(rn,Fe),Te.refreshMaterialUniforms(rn,K,re,Z,T.state.transmissionRenderTarget[R.id]),ke.needsLights&&ke.lightProbeGrid){let Vt=ke.lightProbeGrid;rn.probesSH.value=Vt.texture,rn.probesMin.value.copy(Vt.boundingBox.min),rn.probesMax.value.copy(Vt.boundingBox.max),rn.probesResolution.value.copy(Vt.resolution)}Io.upload(z,Jp(ke),rn,J)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Io.upload(z,Jp(ke),rn,J),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ut.setValue(z,"center",j.center),Ut.setValue(z,"modelViewMatrix",j.modelViewMatrix),Ut.setValue(z,"normalMatrix",j.normalMatrix),Ut.setValue(z,"modelMatrix",j.matrixWorld),K.uniformsGroups!==void 0){let Vt=K.uniformsGroups;for(let Us=0,Gr=Vt.length;Us<Gr;Us++){let t0=Vt[Us];ge.update(t0,mi),ge.bind(t0,mi)}}return mi}function Bx(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.sunLights.needsUpdate=H,R.sunLightShadows.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function kx(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,H,ie){let K=Y.get(R);K.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Y.get(R.texture).__webglTexture=H,Y.get(R.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:ie,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){let ie=Y.get(R);ie.__webglFramebuffer=H,ie.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,ie=0){q=R,F=H,B=ie;let K=null,j=!1,Fe=!1;if(R){let Oe=Y.get(R);if(Oe.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(z.FRAMEBUFFER,Oe.__webglFramebuffer),ee.copy(R.viewport),le.copy(R.scissor),Me=R.scissorTest,S.viewport(ee),S.scissor(le),S.setScissorTest(Me),k=-1;return}else if(Oe.__webglFramebuffer===void 0)J.setupRenderTarget(R);else if(Oe.__hasExternalTextures)J.rebindTextures(R,Y.get(R.texture).__webglTexture,Y.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let dt=R.depthTexture;if(Oe.__boundDepthTexture!==dt){if(dt!==null&&Y.has(dt)&&(R.width!==dt.image.width||R.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(R)}}let Ye=R.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Fe=!0);let $e=Y.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($e[H])?K=$e[H][ie]:K=$e[H],j=!0):R.samples>0&&J.useMultisampledRTT(R)===!1?K=Y.get(R).__webglMultisampledFramebuffer:Array.isArray($e)?K=$e[ie]:K=$e,ee.copy(R.viewport),le.copy(R.scissor),Me=R.scissorTest}else ee.copy(Q).multiplyScalar(re).floor(),le.copy(xe).multiplyScalar(re).floor(),Me=Ee;if(ie!==0&&(K=L),S.bindFramebuffer(z.FRAMEBUFFER,K)&&S.drawBuffers(R,K),S.viewport(ee),S.scissor(le),S.setScissorTest(Me),j){let Oe=Y.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,Oe.__webglTexture,ie)}else if(Fe){let Oe=H;for(let Ye=0;Ye<R.textures.length;Ye++){let $e=Y.get(R.textures[Ye]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ye,$e.__webglTexture,ie,Oe)}}else if(R!==null&&ie!==0){let Oe=Y.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Oe.__webglTexture,ie)}k=-1};function e0(R){let H=Y.get(R);return(H.__readFormat!==R.format||H.__readType!==R.type)&&(H.__readFormat=R.format,H.__readType=R.type,H.__formatReadable=U.textureFormatReadable(R.format),H.__typeReadable=U.textureTypeReadable(R.type)),H}this.readRenderTargetPixels=function(R,H,ie,K,j,Fe,Ge,Oe=0){if(!(R&&R.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ye=Ye[Ge]),Ye){S.bindFramebuffer(z.FRAMEBUFFER,Ye);try{let $e=R.textures[Oe],dt=$e.format,St=$e.type;R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Oe);let Ze=e0($e);if(Ze.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ze.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-K&&ie>=0&&ie<=R.height-j&&z.readPixels(H,ie,K,j,Re.convert(dt),Re.convert(St),Fe)}finally{let $e=q!==null?Y.get(q).__webglFramebuffer:null;S.bindFramebuffer(z.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(R,H,ie,K,j,Fe,Ge,Oe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=Y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ye=Ye[Ge]),Ye)if(H>=0&&H<=R.width-K&&ie>=0&&ie<=R.height-j){S.bindFramebuffer(z.FRAMEBUFFER,Ye);let $e=R.textures[Oe],dt=$e.format,St=$e.type;R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Oe);let Ze=e0($e);if(Ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Pt),z.bufferData(z.PIXEL_PACK_BUFFER,Fe.byteLength,z.STREAM_READ),z.readPixels(H,ie,K,j,Re.convert(dt),Re.convert(St),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let hn=q!==null?Y.get(q).__webglFramebuffer:null;S.bindFramebuffer(z.FRAMEBUFFER,hn);let Yt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Am(z,Yt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Pt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Fe),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Pt),z.deleteSync(Yt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,ie=0){let K=Math.pow(2,-ie),j=Math.floor(R.image.width*K),Fe=Math.floor(R.image.height*K),Ge=H!==null?H.x:0,Oe=H!==null?H.y:0;J.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,ie,0,0,Ge,Oe,j,Fe),S.unbindTexture()},this.copyTextureToTexture=function(R,H,ie=null,K=null,j=0,Fe=0){let Ge,Oe,Ye,$e,dt,St,Ze,Pt,hn,Yt=R.isCompressedTexture?R.mipmaps[Fe]:R.image;if(ie!==null)Ge=ie.max.x-ie.min.x,Oe=ie.max.y-ie.min.y,Ye=ie.isBox3?ie.max.z-ie.min.z:1,$e=ie.min.x,dt=ie.min.y,St=ie.isBox3?ie.min.z:0;else{let rn=Math.pow(2,-j);Ge=Math.floor(Yt.width*rn),Oe=Math.floor(Yt.height*rn),R.isDataArrayTexture?Ye=Yt.depth:R.isData3DTexture?Ye=Math.floor(Yt.depth*rn):Ye=1,$e=0,dt=0,St=0}K!==null?(Ze=K.x,Pt=K.y,hn=K.z):(Ze=0,Pt=0,hn=0);let kt=Re.convert(H.format),Ln=Re.convert(H.type),ke;H.isData3DTexture?(J.setTexture3D(H,0),ke=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(J.setTexture2DArray(H,0),ke=z.TEXTURE_2D_ARRAY):(J.setTexture2D(H,0),ke=z.TEXTURE_2D),S.activeTexture(z.TEXTURE0),S.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),S.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),S.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);let Vn=S.getParameter(z.UNPACK_ROW_LENGTH),Et=S.getParameter(z.UNPACK_IMAGE_HEIGHT),mi=S.getParameter(z.UNPACK_SKIP_PIXELS),Vi=S.getParameter(z.UNPACK_SKIP_ROWS),Ds=S.getParameter(z.UNPACK_SKIP_IMAGES);S.pixelStorei(z.UNPACK_ROW_LENGTH,Yt.width),S.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Yt.height),S.pixelStorei(z.UNPACK_SKIP_PIXELS,$e),S.pixelStorei(z.UNPACK_SKIP_ROWS,dt),S.pixelStorei(z.UNPACK_SKIP_IMAGES,St);let Hr=R.isDataArrayTexture||R.isData3DTexture,Ut=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){let rn=Y.get(R),Ns=Y.get(H),Vt=Y.get(rn.__renderTarget),Us=Y.get(Ns.__renderTarget);S.bindFramebuffer(z.READ_FRAMEBUFFER,Vt.__webglFramebuffer),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,Us.__webglFramebuffer);for(let Gr=0;Gr<Ye;Gr++)Hr&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Y.get(R).__webglTexture,j,St+Gr),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Y.get(H).__webglTexture,Fe,hn+Gr)),z.blitFramebuffer($e,dt,Ge,Oe,Ze,Pt,Ge,Oe,z.DEPTH_BUFFER_BIT,z.NEAREST);S.bindFramebuffer(z.READ_FRAMEBUFFER,null),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Y.has(R)){let rn=Y.get(R),Ns=Y.get(H);S.bindFramebuffer(z.READ_FRAMEBUFFER,P),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,D);for(let Vt=0;Vt<Ye;Vt++)Hr?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,rn.__webglTexture,j,St+Vt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,rn.__webglTexture,j),Ut?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ns.__webglTexture,Fe,hn+Vt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ns.__webglTexture,Fe),j!==0?z.blitFramebuffer($e,dt,Ge,Oe,Ze,Pt,Ge,Oe,z.COLOR_BUFFER_BIT,z.NEAREST):Ut?z.copyTexSubImage3D(ke,Fe,Ze,Pt,hn+Vt,$e,dt,Ge,Oe):z.copyTexSubImage2D(ke,Fe,Ze,Pt,$e,dt,Ge,Oe);S.bindFramebuffer(z.READ_FRAMEBUFFER,null),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ut?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(ke,Fe,Ze,Pt,hn,Ge,Oe,Ye,kt,Ln,Yt.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(ke,Fe,Ze,Pt,hn,Ge,Oe,Ye,kt,Yt.data):z.texSubImage3D(ke,Fe,Ze,Pt,hn,Ge,Oe,Ye,kt,Ln,Yt):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Fe,Ze,Pt,Ge,Oe,kt,Ln,Yt.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Fe,Ze,Pt,Yt.width,Yt.height,kt,Yt.data):z.texSubImage2D(z.TEXTURE_2D,Fe,Ze,Pt,Ge,Oe,kt,Ln,Yt);S.pixelStorei(z.UNPACK_ROW_LENGTH,Vn),S.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Et),S.pixelStorei(z.UNPACK_SKIP_PIXELS,mi),S.pixelStorei(z.UNPACK_SKIP_ROWS,Vi),S.pixelStorei(z.UNPACK_SKIP_IMAGES,Ds),Fe===0&&H.generateMipmaps&&z.generateMipmap(ke),S.unbindTexture()},this.initRenderTarget=function(R){Y.get(R).__webglFramebuffer===void 0&&J.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?J.setTextureCube(R,0):R.isData3DTexture?J.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?J.setTexture2DArray(R,0):J.setTexture2D(R,0),S.unbindTexture()},this.resetState=function(){F=0,B=0,q=null,S.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var Mf="https://race.vwfestmemecoin.com/api/arcade/zombies",ll=null,bf=i=>i.json(),ns={start(){return ll=null,fetch(Mf+"/start",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}).then(bf).then(i=>{i.ok&&(ll=i.token)}).catch(()=>{})},hasToken(){return!!ll},top(){return fetch(Mf+"/top").then(bf).then(i=>i.ok?i.top:null).catch(()=>null)},submit(i,e,t,n){return fetch(Mf+"/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:ll,nickname:i,score:e,pts:t,kills:n})}).then(bf).then(s=>(s.ok&&(ll=null),s)).catch(()=>({ok:!1,error:"Network hiccup. Try again."}))},render(i,e,t){if(i.replaceChildren(),!e){let n=document.createElement("li");n.className="muted",n.textContent="Leaderboard unavailable.",i.append(n);return}if(!e.length){let n=document.createElement("li");n.className="muted",n.textContent="No survivors yet. Be first.",i.append(n);return}for(let n of e.slice(0,10)){let s=document.createElement("li");t&&n.nickname===t&&(s.className="me");let r=document.createElement("b");r.textContent=String(n.nickname),s.append(r," \xB7 Round "+(n.score|0)+" \xB7 "+(n.aux|0).toLocaleString()+" pts"),i.append(s)}}};var tn=Math.PI*2,Kt=(i,e,t)=>i<e?e:i>t?t:i,is=(i,e,t)=>i+(e-i)*t,$=(i=1,e)=>e===void 0?Math.random()*i:i+Math.random()*(e-i),wn=i=>i[Math.random()*i.length|0],ug=i=>i*i*(3-2*i);function Qh(i,e,t){let n=i*374761393+e*668265263+t*144665|0;return n=(n^n>>>13)*1274126177,n=n^n>>>16,(n>>>0)%1e5/1e5}function hS(i,e,t=0){let n=Math.floor(i),s=Math.floor(e),r=ug(i-n),o=ug(e-s),l=Qh(n,s,t),c=Qh(n+1,s,t),a=Qh(n,s+1,t),h=Qh(n+1,s+1,t);return is(is(l,c,r),is(a,h,r),o)}function qn(i,e,t=4,n=0){let s=0,r=.5,o=1;for(let l=0;l<t;l++)s+=r*hS(i*o,e*o,n+l*17),o*=2,r*=.5;return s}function Ks(i,e,t={}){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),r=s.createImageData(i,i),o=r.data;for(let c=0;c<i;c++)for(let a=0;a<i;a++){let h=(c*i+a)*4,u=e(a/i,c/i,a,c);o[h]=u[0],o[h+1]=u[1],o[h+2]=u[2],o[h+3]=255}s.putImageData(r,0,0),t.after&&t.after(s,i);let l=new $t(n);return l.wrapS=l.wrapT=on,l.anisotropy=t.aniso||4,t.srgb!==!1&&(l.colorSpace=pt),l.needsUpdate=!0,l}var eu=(i,e,t)=>[is(i[0],e[0],t),is(i[1],e[1],t),is(i[2],e[2],t)];function dg(i=512){let e={};e.sand=Ks(i,(l,c)=>{let a=qn(l*24,c*24,5,1),h=qn(l*6+a*1.5,c*60,3,9),u=Kt(a*.7+h*.5,0,1);return eu([112,86,58],[186,150,104],u)}),e.sandBump=Ks(i,(l,c)=>{let a=qn(l*24,c*24,5,1),h=qn(l*6+a*1.5,c*60,3,9),u=Kt(a*.6+h*.7,0,1)*255;return[u,u,u]},{srgb:!1}),e.concrete=Ks(i,(l,c,a,h)=>{let u=qn(l*18,c*18,5,3),d=qn(l*80,c*80,2,4),f=.35+u*.5+(d-.5)*.15,p=Math.abs(qn(l*7,c*7,3,12)-.5)<.012?.5:1;return f*=p,eu([48,50,54],[128,126,120],Kt(f,0,1))}),e.concreteBump=Ks(i,(l,c)=>{let a=qn(l*18,c*18,5,3)*255;return[a,a,a]},{srgb:!1}),e.rust=Ks(i,(l,c)=>{let a=qn(l*10,c*10,5,5),h=qn(l*3,c*40,3,7),u=Kt((a-.42)*3.2+(h-.5)*.8,0,1),d=.62+(qn(l*60,c*60,2,2)-.5)*.25;return eu([d*255,d*255,d*255],[150,70,28],u*.85)}),e.rustRough=Ks(i,(l,c)=>{let a=qn(l*10,c*10,5,5),h=qn(l*3,c*40,3,7);return[0,(.45+Kt((a-.42)*3.2+(h-.5)*.8,0,1)*.5)*255,0]},{srgb:!1}),e.corr=Ks(256,(l,c)=>{let a=(Math.sin(l*tn*16)*.5+.5)*255;return[a,a,a]},{srgb:!1}),e.corr.repeat.set(1,1),e.wood=Ks(256,(l,c)=>{let a=qn(l*4,c*60,4,21),h=qn(l*12,c*12,2,4);return eu([66,42,24],[150,108,66],Kt(a*.9+h*.2,0,1))});let t=document.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d"),s=n.createRadialGradient(32,32,0,32,32,32);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.25,"rgba(255,255,255,.55)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,64,64),e.glow=new $t(t),e.glow.colorSpace=pt;let r=document.createElement("canvas");r.width=1024,r.height=256;let o=r.getContext("2d");return o.fillStyle="#05070b",o.fillRect(0,0,1024,256),o.textAlign="center",o.textBaseline="middle",o.font="900 150px system-ui, Arial Black, sans-serif",o.shadowColor="#18ffb0",o.shadowBlur=40,o.fillStyle="#c8fff0",o.fillText("VW FEST",512,120),o.shadowBlur=20,o.font="700 46px system-ui, Arial, sans-serif",o.fillStyle="#ffb347",o.shadowColor="#ff7a00",o.fillText("AIR-COOLED SALVAGE  \xB7  $VWFEST",512,222),e.sign=new $t(r),e.sign.colorSpace=pt,e.sign.anisotropy=4,e}function pg(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},l=i[0].morphTargetsRelative,c=new xt,a=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(a,f,h),a+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=fg(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][d]);let p=fg(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function fg(i){let e,t,n,s=-1,r=0;for(let a=0;a<i.length;++a){let h=i[a];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),l=new lt(o,t,n),c=0;for(let a=0;a<i.length;++a){let h=i[a];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let v=h.getComponent(d,p);l.setComponent(d+u,p,v)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(l.gpuType=s),l}function Sf(i,e){if(e===Kd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ro||e===nl){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Ro)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function tu(i){let t=new DataView(i.buffer,i.byteOffset,i.byteLength).getUint32(0,!0),n=JSON.parse(new TextDecoder().decode(i.subarray(4,4+t))),s=i.byteOffset+4+t+(4-t%4)%4;return{meta:n,view:(o,[l,c])=>new o(i.buffer.slice(s+l,s+l+c*o.BYTES_PER_ELEMENT))}}function nu(i,e){let t=i(Uint16Array,e.pos),n=new Float32Array(t.length);for(let s=0;s<t.length;s++){let r=s%3;n[s]=e.min[r]+t[s]/65535*e.size[r]}return new lt(n,3)}var iu=(i,e)=>new lt(i(Int8Array,e.nrm),3,!0),Do={};async function Ef(i=["zombies","cars"]){await Promise.all(i.filter(e=>!Do[e]).map(async e=>{let t=await fetch("assets/"+e+".bin");if(!t.ok)throw new Error("missing assets/"+e+".bin");Do[e]=new Uint8Array(await t.arrayBuffer())}))}var Af={},wf={},uS={},mg=!1;function dS(){if(mg)return;mg=!0;let{meta:i,view:e}=tu(Do.cars);for(let t of i){uS[t.tag]=t.tris;let n=new xt;if(n.setAttribute("position",nu(e,t)),n.setAttribute("normal",iu(e,t)),n.setAttribute("color",new lt(e(Uint8Array,t.col),3,!0)),n.setIndex(new lt(e(Uint16Array,t.idx),1)),n.computeBoundingBox(),Af[t.tag]=n,t.plate){let s=new xt;s.setAttribute("position",new lt(e(Float32Array,t.plate.pos),3)),s.setAttribute("normal",new lt(e(Float32Array,t.plate.nrm),3)),s.setAttribute("uv",new lt(e(Float32Array,t.plate.uv),2)),wf[t.tag]=s}}}var Tf;function fS(){if(Tf)return Tf;let i=document.createElement("canvas");i.width=256,i.height=96;let e=i.getContext("2d");e.fillStyle="#e9e4d4",e.fillRect(0,0,256,96),e.strokeStyle="#1d3557",e.lineWidth=6,e.strokeRect(5,5,246,86),e.fillStyle="#1d3557",e.font="900 46px Arial Black, Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("VWFEST",128,50);let t=new $t(i);return t.colorSpace=pt,Tf=new Je({map:t,roughness:.6})}var su=new Map,pS=()=>su.get(0)||(su.set(0,new Je({vertexColors:!0,roughness:.55,metalness:.15})),su.get(0));function xg(i){let e=su.get(0);if(!e)return;let t=i>0;e.roughness=t?.34:.55,e.metalness=t?.4:.15}var gg=new Map;function mS(i,e,t){let n=i+e+"/"+t,s=gg.get(n);if(s)return s;s=Af[i].clone();let r=s.attributes.color,o=s.attributes.position,l=new de(e),c=new de(t??15129792),a=i==="camper";for(let h=0;h<r.count;h++){let u=r.getX(h),d=r.getY(h),f=r.getZ(h);if(Math.abs(u-.247)<.01&&Math.abs(d-.247)<.01&&Math.abs(f-.247)<.01){let p=a&&o.getY(h)>1.04?c:l;r.setXYZ(h,p.r*.85,p.g*.85,p.b*.85)}else u>.975&&d>.975&&f>.975&&r.setXYZ(h,c.r,c.g,c.b)}return gg.set(n,s),s}var gS=["bug","baja","ghia"],xS=["camper","wagon","safari"],vS=0,_S=0;function Rf(i,e,t,n={}){dS();let s=i==="big"?xS[_S++%3]:gS[vS++%3],r=new Be;r.rotation.y=Math.PI;let o=new me(mS(s,e,t),pS());if(o.userData.noBatch=!0,r.add(o),wf[s]){let a=new me(wf[s],fS());a.userData.noBatch=!0,r.add(a)}let l=new Be;l.add(r),n.tilt&&(l.rotation.z=n.tilt);let c=Af[s].boundingBox.getSize(new N);return l.userData.size=[c.x,c.y,c.z],l}var ru=class{constructor(e){this.T=e,this.cache={};let t=n=>new Je(n);this.sand=t({map:e.sand,bumpMap:e.sandBump,bumpScale:3,roughness:.97,metalness:0,color:13615792}),e.sand.repeat.set(90,90),e.sandBump.repeat.set(90,90),this.concrete=t({map:e.concrete,bumpMap:e.concreteBump,bumpScale:1.5,roughness:.88,metalness:.02}),e.concrete.repeat.set(10,10),e.concreteBump.repeat.set(10,10),this.fence=t({color:9281190,map:e.rust,roughnessMap:e.rustRough,bumpMap:e.corr,bumpScale:2.5,metalness:.75,roughness:1}),this.fenceDark=t({color:3818056,map:e.rust,roughnessMap:e.rustRough,metalness:.7,roughness:1}),this.wood=t({color:16777215,map:e.wood,roughness:.85,metalness:0}),this.tire=t({color:1381655,roughness:.92,metalness:0}),this.glass=t({color:660761,roughness:.08,metalness:.95}),this.chrome=t({color:13620954,roughness:.18,metalness:1}),this.lampBulb=new nt({color:new de(5,3.2,1.4),toneMapped:!1}),this.lampBulbT=new nt({color:new de(1.2,4.5,3.4),toneMapped:!1}),this.headlight=t({color:15328456,emissive:4867120,emissiveIntensity:.6,roughness:.2,metalness:.2}),this.tarp=t({color:4151882,roughness:.95})}paint(e){let t="p"+e;if(this.cache[t])return this.cache[t];let n=new Je({color:e,map:this.T.rust,roughnessMap:this.T.rustRough,metalness:.55,roughness:1});return n.userData.paint=1,this.cache[t]=n}flat(e,t=.8,n=.1){let s="f"+e+t+n;return this.cache[s]||(this.cache[s]=new Je({color:e,roughness:t,metalness:n}))}},yS=[6010272,14733722,14252330,11680302,6197184,13619140,9087050,13803834],Cf=()=>wn(yS),Or=(i,e,t,n,s,r,o,l,c=14,a=9)=>{let h=new me(new _n(i,c,a),l);return h.scale.set(e,t,n),h.position.set(s,r,o),h},Sn=(i,e,t,n,s,r,o)=>{let l=new me(new rt(i,e,t),o);return l.position.set(n,s,r),l},Rs=(i,e,t,n,s,r,o=!0,l=12)=>{let c=new me(new Ft(i,i,e,l),r);return o&&(c.rotation.z=Math.PI/2),c.position.set(t,n,s),c};function vg(i,e,t,n,s=.34){let r=new Be;return r.add(Rs(s,.22,0,0,0,i.tire,!0,14)),r.add(Rs(s*.55,.24,0,0,0,i.chrome,!0,8)),r.position.set(e,t,n),r}function _g(i,e,t={}){let n=new Be,s=i.paint(e);n.add(Or(1,.9,.5,1.95,0,.78,0,s,18,10)),n.add(Or(1,.72,.42,.95,0,1.17,.12,i.glass,16,8)),n.add(Or(1,.74,.28,.95,0,1.42,.12,s,16,8));for(let r of[-1,1])for(let o of[-1,1])n.add(Or(1,.22,.32,.55,r*.86,.5,o*1.2,s,10,8)),t.missing&&r===1&&o===1||n.add(vg(i,r*.84,.34,o*1.2));for(let r of[-1,1])n.add(Or(.12,1,1,1,r*.55,.92,-1.78,i.headlight,8,6));if(n.add(Sn(1.5,.08,.1,0,.44,-2.02,i.chrome)),n.add(Sn(1.5,.08,.1,0,.44,2.02,i.chrome)),n.add(Sn(.5,.1,.05,0,.78,1.92,i.fenceDark)),t.door){let r=Sn(.05,.5,1,.92,.9,-.2,s);r.rotation.y=.9,r.position.x=1.25,r.position.z=-.85,n.add(r)}return t.tilt&&(n.rotation.z=t.tilt),n.userData.size=[1.9,1.7,4.1],n}function yg(i,e,t=15129792,n={}){let s=new Be,r=i.paint(e),o=i.paint(t);s.add(Sn(2,.85,4.5,0,.78,0,r)),s.add(Sn(1.96,.9,4.4,0,1.66,0,o)),s.add(Sn(2.04,.1,4.55,0,1.19,0,r)),s.add(Sn(2,.08,4.5,0,2.15,0,r));for(let h of[-1,1])s.add(Sn(.03,.55,3.8,h*.99,1.7,.1,i.glass)),s.add(Sn(.03,.14,.7,h*1.01,.82,.8,i.fenceDark));s.add(Sn(1.7,.6,.04,0,1.68,-2.2,i.glass));let l=Sn(1.1,.8,.1,-.5,.78,-2.28,r);l.rotation.y=.3;let c=Sn(1.1,.8,.1,.5,.78,-2.28,r);c.rotation.y=-.3,s.add(l,c);let a=Rs(.17,.04,0,.85,-2.43,i.chrome,!1,14);a.rotation.x=Math.PI/2,s.add(a);for(let h of[-1,1]){s.add(Or(.13,1,1,.6,h*.72,.8,-2.36,i.headlight,8,6));for(let u of[-1.4,1.5])n.missing&&h===1&&u===1.5||s.add(vg(i,h*.95,.38,u,.38))}return s.add(Sn(2.1,.1,.12,0,.45,-2.45,i.chrome)),s.add(Sn(2.1,.1,.12,0,.45,2.3,i.chrome)),n.tilt&&(s.rotation.z=n.tilt),s.userData.size=[2.1,2.2,4.6],s}function cl(i,e=4){let t=new Be;for(let n=0;n<e;n++){let s=new me(new ui(.4,.18,8,14),i.tire);s.rotation.x=Math.PI/2,s.position.set($(-.04,.04),.18+n*.3,$(-.04,.04)),t.add(s)}return t.userData.size=[1,.3*e+.1,1],t.userData.hd={kind:"tyre"},t}function js(i,e){let t=new Be;t.add(Rs(.3,.9,0,.45,0,i.paint(e),!1,12));for(let n of[.2,.7])t.add(Rs(.31,.04,0,n,0,i.fenceDark,!1,12));return t.userData.size=[.62,.9,.62],t.userData.hd={kind:"drum",color:e},t}function Yn(i,e=1){let t=new Be;t.add(Sn(e,e,e,0,e/2,0,i.wood));for(let[n,s]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(Sn(.07,e*1.02,.07,n*e/2,e/2,s*e/2,i.fenceDark));return t.userData.size=[e,e,e],t.userData.hd={kind:"crate",s:e},t}function hl(i,e){let t=new Be;t.add(Rs(.09,5.2,0,2.6,0,i.fenceDark,!1,8)),t.add(Sn(.12,.12,1.1,0,5.15,-.5,i.fenceDark)),t.add(Sn(.5,.12,.3,0,5.08,-1.1,i.fenceDark));let n=new me(new _n(.17,8,6),e?i.lampBulbT:i.lampBulb);return n.position.set(0,4.98,-1.1),n.userData.bulb=!0,t.add(n),t.userData.size=[.4,5.2,.4],t.userData.bulbPos=new N(0,4.9,-1.1),t}function Mg(i){let e=new Be,t=i.flat(3103288,.9,0),n=$(1.6,3.2);if(e.add(Rs(.22,n,0,n/2,0,t,!1,8)),e.add(Or(.22,1,1,1,0,n,0,t,8,5)),Math.random()<.8){let s=Rs(.13,.7,.4,n*.6,0,t,!1,6);e.add(s),e.add(Rs(.13,.5,.4+.32,n*.6+.3,0,t,!1,6)),e.children[e.children.length-1].rotation.z=0}return e}function bg(i,e){let t=new me(new ba(e,0),i.flat(7035464,.95,0));t.scale.set($(.9,1.5),$(.5,.9),$(.9,1.4)),t.rotation.set($(3),$(3),$(3)),t.position.y=e*.3;let n=new Be;return n.add(t),n}var fi=(i,e,t={})=>Rf("small",e,null,t),Mi=(i,e,t,n={})=>Rf("big",e,t,n);var ul=new N;function bi(i,e,t,n,s,r){let o=2*Math.PI*s/4,l=Math.max(r-2*s,0),c=Math.PI/4;ul.copy(e),ul[n]=0,ul.normalize();let a=.5*o/(o+l),h=1-ul.angleTo(i)/c;return Math.sign(ul[t])===1?h*a:l/(o+l)+a+a*(1-h)}var ou=class i extends rt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let c=new N,a=new N,h=new N(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,v=new N,g=.5/o;for(let m=0,y=0;m<u.length;m+=3,y+=2)switch(c.fromArray(u,m),a.copy(c),a.x-=Math.sign(a.x)*g,a.y-=Math.sign(a.y)*g,a.z-=Math.sign(a.z)*g,a.normalize(),u[m+0]=h.x*Math.sign(c.x)+a.x*r,u[m+1]=h.y*Math.sign(c.y)+a.y*r,u[m+2]=h.z*Math.sign(c.z)+a.z*r,d[m+0]=a.x,d[m+1]=a.y,d[m+2]=a.z,Math.floor(m/p)){case 0:v.set(1,0,0),f[y+0]=bi(v,a,"z","y",r,n),f[y+1]=1-bi(v,a,"y","z",r,t);break;case 1:v.set(-1,0,0),f[y+0]=1-bi(v,a,"z","y",r,n),f[y+1]=1-bi(v,a,"y","z",r,t);break;case 2:v.set(0,1,0),f[y+0]=1-bi(v,a,"x","z",r,e),f[y+1]=bi(v,a,"z","x",r,n);break;case 3:v.set(0,-1,0),f[y+0]=1-bi(v,a,"x","z",r,e),f[y+1]=1-bi(v,a,"z","x",r,n);break;case 4:v.set(0,0,1),f[y+0]=1-bi(v,a,"x","y",r,e),f[y+1]=1-bi(v,a,"y","x",r,t);break;case 5:v.set(0,0,-1),f[y+0]=bi(v,a,"x","y",r,e),f[y+1]=1-bi(v,a,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Nt=(i,e)=>i+Math.random()*(e-i);function pl(i,e){let t=document.createElement("canvas");t.width=t.height=i,e(t.getContext("2d"),i);let n=new $t(t);return n.wrapS=n.wrapT=on,n.anisotropy=4,n}var MS=(i,e)=>pl(512,(t,n)=>{t.fillStyle=i,t.fillRect(0,0,n,n);for(let s=0;s<2600;s++){t.strokeStyle=`rgba(255,255,255,${Nt(.01,.04)})`;let r=Nt(0,n);t.beginPath(),t.moveTo(Nt(0,n),r),t.lineTo(Nt(0,n),r+Nt(-2,2)),t.stroke()}for(let s=0;s<160;s++){t.strokeStyle=e,t.globalAlpha=Nt(.15,.5),t.lineWidth=Nt(.5,1.6);let r=Nt(0,n),o=Nt(0,n);t.beginPath(),t.moveTo(r,o),t.lineTo(r+Nt(-30,30),o+Nt(-6,6)),t.stroke()}t.globalAlpha=1;for(let s=0;s<900;s++)t.fillStyle=`rgba(0,0,0,${Nt(.1,.35)})`,t.fillRect(Nt(0,n),Nt(0,n),1.5,1.5)}),bS=()=>pl(256,(i,e)=>{let t=i.createImageData(e,e);for(let n=0;n<t.data.length;n+=4){let s=120+Math.random()*90;t.data[n]=t.data[n+1]=t.data[n+2]=s,t.data[n+3]=255}i.putImageData(t,0,0)}),SS=()=>pl(256,(i,e)=>{i.fillStyle="rgb(128,128,255)",i.fillRect(0,0,e,e);for(let t=0;t<5e3;t++){let n=Nt(0,e),s=Nt(0,e),r=Nt(1,2.2),o=i.createRadialGradient(n-r*.4,s-r*.4,0,n,s,r);o.addColorStop(0,"rgb(90,90,255)"),o.addColorStop(1,"rgba(170,170,255,0)"),i.fillStyle=o,i.beginPath(),i.arc(n,s,r,0,7),i.fill()}}),ES=()=>pl(512,(i,e)=>{i.fillStyle="#4a2c17",i.fillRect(0,0,e,e);for(let t=0;t<260;t++){i.strokeStyle=`rgba(${Nt(20,60)},${Nt(10,30)},5,${Nt(.15,.45)})`,i.lineWidth=Nt(.5,3),i.beginPath();let n=Nt(0,e);i.moveTo(0,n);for(let s=0;s<=16;s++)i.lineTo(s/16*e,n+=Nt(-3,3)+Math.sin(s*.7+t)*1.4);i.stroke()}for(let t=0;t<40;t++)i.fillStyle="rgba(210,170,120,0.08)",i.fillRect(Nt(0,e),Nt(0,e),Nt(10,60),Nt(1,3))}),dl;function TS(){if(dl)return dl;let i=bS(),e=SS(),t=(n,s,r,o)=>new Je({map:MS(n,s),roughnessMap:i,roughness:r,metalness:o,color:16777215});dl={blued:t("#1b1e24","#9aa3ad",.42,.9),park:t("#34372f","#8d9184",.78,.55),steel:t("#4a4e54","#cfd4da",.3,.95),poly:new Je({color:1908256,roughness:.72,metalness:0,normalMap:e,normalScale:new pe(.9,.9)}),polyTan:new Je({color:7299146,roughness:.75,normalMap:e,normalScale:new pe(.6,.6)}),wood:new Je({map:ES(),roughness:.5,metalness:0,color:16777215}),brass:new Je({color:11569722,metalness:1,roughness:.3}),dot:new nt({color:new de(.4,2.2,.8),toneMapped:!1}),dotR:new nt({color:new de(2.4,.3,.2),toneMapped:!1}),glass:new Je({color:727586,metalness:.9,roughness:.05,emissive:401456}),glove:new Je({color:1974306,roughness:.85,normalMap:e,normalScale:new pe(.4,.4)}),sleeve:new Je({color:3884598,roughness:.95,normalMap:e,normalScale:new pe(.25,.25)})};for(let n of Object.values(dl))n.map&&(n.map.colorSpace=pt);return dl}function Pn(i,e,t,n,{x:s=0,bevel:r=.0025,curve:o=6}={}){let l=new Mo;e.forEach(([u,d],f)=>f?l.lineTo(u,d):l.moveTo(u,d));let c=new Ia(l,{depth:t-r*2,bevelEnabled:!0,bevelThickness:r,bevelSize:r,bevelSegments:2,curveSegments:o});c.translate(0,0,-(t-r*2)/2),c.rotateY(-Math.PI/2);let a=c.attributes.uv;for(let u=0;u<a.count;u++)a.setXY(u,a.getX(u)*4,a.getY(u)*4);let h=new me(c,n);return h.position.x=s,i.add(h),h}var gt=(i,e,t,n,s,r,o,l,c=.004,a=0)=>{let h=new me(new ou(e,t,n,2,c),l);return h.position.set(s,r,o),h.rotation.x=a,i.add(h),h},Pf=(i,e,t,n,s,r,o,l,c=0)=>{let a=new me(new rt(e,t,n),l);return a.position.set(s,r,o),a.rotation.x=c,i.add(a),a},Dt=(i,e,t,n,s,r,o,l=20,c)=>{let a=new me(new Ft(c??e,e,t,l,1),o);return a.rotation.x=Math.PI/2,a.position.set(n,s,r),i.add(a),a},If=(i,e,t,n,s,r,o)=>{let l=new me(new ui(e,t,8,24),o);return l.position.set(n,s,r),i.add(l),l};function fl(i,e,t,n){let s=new me(new ui(.022,.0035,6,18,Math.PI*1.15),n.poly);s.rotation.set(0,Math.PI/2,Math.PI*.93),s.position.set(0,t,e),i.add(s);let r=new me(new ui(.012,.003,6,10,Math.PI*.6),n.steel);r.rotation.set(0,Math.PI/2,Math.PI*1.15),r.position.set(0,t+.006,e+.004),i.add(r)}function au(i,e,t,n,s){gt(i,.004,.009,.006,0,n+.004,e,s.blued,.001);let r=Dt(i,.0016,.002,0,n+.006,e+.003,s.dot,8);r.rotation.x=0,r.rotation.z=Math.PI/2,r.rotation.y=Math.PI/2;for(let o of[-1,1]){gt(i,.005,.009,.008,o*.0055,n+.004,t,s.blued,.001);let l=Dt(i,.0013,.002,o*.0055,n+.006,t-.0045,s.dotR,8);l.rotation.x=0}}var lu={pistol(i,e){let t=new Be;i.add(t),i.userData.slide=t,Pn(t,[[.02,0],[-.17,0],[-.172,.022],[-.165,.03],[.012,.03],[.02,.022]],.026,e.blued,{bevel:.002}),gt(t,.0262,.012,.032,0,.014,-.045,e.steel,.001);for(let n of[-1,1])for(let s=0;s<9;s++)gt(t,.0015,.022,.0016,n*.0132,.014,.008-s*.0036,e.steel,4e-4);for(let n of[-1,1])for(let s=0;s<6;s++)gt(t,.0015,.016,.0016,n*.0132,.012,-.13-s*.0036,e.steel,4e-4);au(t,-.16,.008,.03,e),Dt(t,.0075,.012,0,.012,-.172,e.steel,20),Dt(t,.0045,.014,0,.012,-.175,e.poly,12),Pn(i,[[.03,-.002],[-.16,-.002],[-.16,-.012],[-.06,-.016],[-.05,-.022],[0,-.018],[.006,-.03],[.022,-.13],[.06,-.13],[.045,-.02],[.034,-.008]],.028,e.poly,{bevel:.003});for(let n=0;n<4;n++)gt(i,.0285,.003,.012,0,-.012,-.075-n*.012,e.poly,.001);return fl(i,-.02,-.03,e),gt(i,.03,.006,.042,0,-.133,.042,e.blued,.002,-.2),gt(i,.004,.006,.014,.0145,-.008,-.02,e.steel,.001),gt(i,.0035,.008,.02,.0145,.005,.02,e.steel,.001),gt(i,.012,.014,.008,0,.018,.032,e.steel,.002),{muzzle:-.18,eject:-.045,pos:[.17,-.17,-.38],lz:-.04}},smg(i,e){Pn(i,[[.09,0],[-.2,0],[-.2,.05],[.09,.05]],.05,e.park,{bevel:.004}),Dt(i,.016,.12,0,.026,-.26,e.blued,20);for(let t=0;t<6;t++)If(i,.017,.0022,0,.026,-.22-t*.015,e.steel).rotation.y=0;for(let t=0;t<6;t++)gt(i,.052,.003,.012,0,.051,-.18+t*.03,e.blued,.001);au(i,-.19,.06,.052,e),gt(i,.036,.16,.026,0,-.08,-.06,e.blued,.004,.12);for(let t=0;t<8;t++)gt(i,.038,.004,.028,0,-.01-t*.018,-.06+t*.002,e.steel,.001,.12);return Pn(i,[[0,0],[.03,0],[.05,-.11],[.02,-.11]],.032,e.poly,{bevel:.004}),fl(i,-.005,-.012,e),Dt(i,.006,.2,.018,.02,.18,e.steel,10),Dt(i,.006,.2,-.018,.02,.18,e.steel,10),gt(i,.05,.07,.012,0,0,.28,e.poly,.004),gt(i,.012,.012,.03,.03,.03,.02,e.steel,.003),{muzzle:-.33,eject:-.05,pos:[.19,-.19,-.4],lz:-.2}},shotgun(i,e){Pn(i,[[.06,-.01],[-.14,-.01],[-.14,.055],[.04,.055],[.06,.04]],.05,e.blued,{bevel:.004}),Dt(i,.0125,.6,0,.038,-.44,e.blued,22),Dt(i,.0145,.52,0,0,-.4,e.blued,22),If(i,.016,.003,0,0,-.66,e.steel);let t=new me(new _n(.003,10,8),e.brass);t.position.set(0,.052,-.735),i.add(t);let n=Pn(i,[[-.28,-.02],[-.46,-.02],[-.46,.02],[-.28,.02]],.05,e.wood,{bevel:.008});for(let s=0;s<9;s++)gt(i,.052,.004,.006,0,-.022,-.3-s*.017,e.wood,.002);return i.userData.pump=n,Pn(i,[[.06,.04],[.32,.03],[.34,.05],[.36,-.1],[.3,-.11],[.1,-.03],[.06,-.01]],.042,e.wood,{bevel:.008}),gt(i,.044,.15,.02,0,-.03,.355,e.poly,.006,-.12),fl(i,.035,-.02,e),gt(i,.051,.012,.05,0,.022,-.05,e.steel,.002),{muzzle:-.75,eject:-.05,pos:[.2,-.2,-.4],lz:-.38}},rifle(i,e){Pn(i,[[.12,0],[-.17,0],[-.17,.045],[.12,.045]],.052,e.park,{bevel:.004});for(let n=0;n<18;n++)Pf(i,.042,.004,.006,0,.049,-.16+n*.016,e.blued);Pn(i,[[-.17,-.005],[-.44,-.005],[-.44,.05],[-.17,.05]],.056,e.polyTan,{bevel:.006});for(let n=0;n<7;n++)for(let s of[-1,1])Pf(i,.004,.018,.022,s*.028,.022,-.2-n*.034,e.poly);Dt(i,.0095,.26,0,.022,-.56,e.blued,18),Dt(i,.016,.05,0,.022,-.71,e.park,6);for(let n=0;n<3;n++)gt(i,.004,.006,.03,.017,.03,-.71,e.poly,.001).rotation.z=n;gt(i,.008,.045,.012,0,.07,-.43,e.park,.002),Dt(i,.019,.1,0,.1,-.05,e.blued,24),Dt(i,.023,.03,0,.1,-.11,e.blued,24),Dt(i,.021,.025,0,.1,.01,e.blued,24);let t=Dt(i,.019,.002,0,.1,-.126,e.glass,24);gt(i,.024,.03,.05,0,.068,-.05,e.park,.003),Pn(i,[[0,0],[-.06,0],[-.06,-.12],[-.03,-.14],[0,-.12]],.03,e.park,{bevel:.003}).rotation.x=-.15;for(let n=0;n<6;n++)Pf(i,.032,.003,.03,0,-.03-n*.02,-.03+n*.003,e.blued,-.15);return Pn(i,[[.03,-0],[.07,-0],[.09,-.11],[.055,-.115]],.032,e.poly,{bevel:.004}),fl(i,0,-.012,e),Dt(i,.014,.14,0,.025,.19,e.poly,16),Pn(i,[[.2,.05],[.36,.045],[.36,-.07],[.33,-.08],[.2,0]],.044,e.polyTan,{bevel:.006}),gt(i,.046,.13,.014,0,-.012,.365,e.poly,.005),gt(i,.014,.014,.034,.03,.03,0,e.steel,.003),{muzzle:-.74,eject:-.03,pos:[.2,-.2,-.4],lz:-.3}},lmg(i,e){Pn(i,[[.12,-.01],[-.2,-.01],[-.2,.06],[.12,.06]],.07,e.park,{bevel:.005}),gt(i,.075,.03,.2,0,.075,-.06,e.park,.004);for(let t=0;t<12;t++)gt(i,.05,.005,.008,0,.093,-.15+t*.016,e.blued,.001);Dt(i,.024,.36,0,.025,-.38,e.blued,22);for(let t=0;t<14;t++)If(i,.026,.004,0,.025,-.24-t*.02,e.park);Dt(i,.012,.16,0,.025,-.64,e.blued,16),Dt(i,.018,.06,0,.025,-.73,e.park,8),gt(i,.13,.13,.15,0,-.1,-.03,e.polyTan,.012);for(let t=0;t<5;t++)gt(i,.132,.006,.152,0,-.15+t*.025,-.03,e.poly,.002);for(let t=0;t<6;t++)Dt(i,.005,.03,.04,.05,-.01+t*.011,e.brass,8).rotation.set(0,0,Math.PI/2);Pn(i,[[.04,-.01],[.08,-.01],[.1,-.12],[.065,-.125]],.034,e.poly,{bevel:.004}),fl(i,.01,-.02,e),Pn(i,[[.12,.05],[.4,.04],[.4,-.08],[.36,-.09],[.12,-.01]],.05,e.poly,{bevel:.007}),au(i,-.66,.08,.093,e);for(let t of[-1,1]){let n=Dt(i,.005,.18,t*.03,-.05,-.62,e.steel,8);n.rotation.x=Math.PI/2+.35}return{muzzle:-.76,eject:-.02,pos:[.2,-.21,-.4],lz:-.3}},akimbo(i,e){let t=new Be;t.position.set(-.12,-.01,.02),t.rotation.y=.22,t.rotation.z=.08;let n=new Be;n.position.set(.12,-.01,0),n.rotation.y=-.12,n.rotation.z=-.04,i.add(t,n);let s=lu.pistol(t,e),r=lu.pistol(n,e),o=new _t;o.position.set(0,.012,s.muzzle),t.add(o);let l=new _t;l.position.set(0,.012,r.muzzle),n.add(l),gt(t,.048,.04,.07,.01,-.09,.01,e.glove,.012),gt(n,.048,.04,.07,-.01,-.09,0,e.glove,.012);let c=new me(new Ft(.032,.04,.28,12),e.sleeve);c.rotation.set(Math.PI/2,.4,.2),c.position.set(-.08,-.16,.16),i.add(c);let a=new me(new Ft(.032,.04,.28,12),e.sleeve);return a.rotation.set(Math.PI/2,-.2,-.15),a.position.set(.08,-.16,.16),i.add(a),{muzzle:r.muzzle,eject:-.04,pos:[0,-.16,-.36],lz:0,akimbo:!0,muzzles:[o,l],slides:[t.userData.slide,n.userData.slide]}},lever(i,e){Dt(i,.011,.62,0,.03,-.42,e.blued,18),Dt(i,.016,.18,0,.012,-.22,e.steel,16),Pn(i,[[.02,.02],[.28,.015],[.3,-.08],[.24,-.09],[.06,-.01]],.04,e.wood,{bevel:.006}),gt(i,.038,.12,.016,0,-.02,.29,e.poly,.004);let t=new me(new ui(.045,.004,6,16,Math.PI),e.steel);return t.rotation.set(0,Math.PI/2,Math.PI),t.position.set(0,-.04,.02),i.add(t),i.userData.pump=t,au(i,-.7,.02,.045,e),Dt(i,.008,.04,0,.03,-.74,e.blued,12),gt(i,.03,.05,.04,0,-.02,.04,e.wood,.004),{muzzle:-.76,eject:0,pos:[.18,-.18,-.42],lz:-.28}},nailer(i,e){gt(i,.09,.11,.22,0,0,-.02,e.park,.008),gt(i,.07,.06,.16,0,-.02,.12,e.polyTan,.006),Dt(i,.012,.16,0,.01,-.2,e.steel,14),Dt(i,.02,.04,0,.01,-.28,e.blued,12);for(let s=0;s<5;s++)gt(i,.004,.012,.05,.048,.02-s*.012,-.02,e.brass,.001);let t=new me(new ui(.05,.006,6,14),e.poly);t.rotation.x=Math.PI/2,t.position.set(.02,-.02,.2),i.add(t),gt(i,.035,.08,.04,0,-.08,.02,e.poly,.004,.3);let n=Dt(i,.004,.02,0,.01,-.31,e.dot,8);return n.material=e.dot,{muzzle:-.32,eject:-.02,pos:[.2,-.18,-.36],lz:-.08}},sawed(i,e){Dt(i,.014,.28,.012,.02,-.16,e.blued,16),Dt(i,.014,.28,-.012,.02,-.16,e.blued,16),gt(i,.05,.04,.08,0,0,-.02,e.steel,.004),Pn(i,[[0,0],[.02,-.02],[.05,-.12],[.02,-.13],[-.01,-.02]],.032,e.wood,{bevel:.005}),gt(i,.02,.03,.02,.03,.03,0,e.steel,.002);let t=new me(new _n(.004,8,6),e.brass);return t.position.set(0,.04,-.3),i.add(t),{muzzle:-.31,eject:-.02,pos:[.18,-.16,-.34],lz:-.02}}},Lf;function wS(){if(Lf)return Lf;let i=pl(128,(e,t)=>{let n=t/2,s=e.createRadialGradient(n,n,0,n,n,n);s.addColorStop(0,"rgba(255,250,230,1)"),s.addColorStop(.25,"rgba(255,190,90,0.9)"),s.addColorStop(1,"rgba(255,90,20,0)"),e.fillStyle=s;for(let r=0;r<7;r++)e.save(),e.translate(n,n),e.rotate(r/7*6.283+Nt(-.2,.2)),e.beginPath(),e.moveTo(0,-6),e.lineTo(n*Nt(.7,1),0),e.lineTo(0,6),e.fill(),e.restore();e.beginPath(),e.arc(n,n,n*.35,0,7),e.fill()});return i.wrapS=i.wrapT=Un,Lf=new nt({map:i,color:new de(3,2.2,1.2),blending:ln,transparent:!0,depthWrite:!1,side:Ht,toneMapped:!1})}function Sg(i,e=!0){let t=TS(),n=new Be,s=(lu[i]||lu.rifle)(n,t);if(!e){let u=new _t;return n.userData={muzzle:u,eject:u,base:new N},n}if(!s.akimbo){gt(n,.05,.08,.075,0,-.065,.035,t.glove,.018).rotation.x=.25;for(let p=0;p<3;p++)gt(n,.052,.016,.03,.002,-.04-p*.02,0,t.glove,.007);let u=new me(new Ft(.034,.042,.32,16),t.sleeve);u.rotation.x=Math.PI/2-.25,u.position.set(.02,-.13,.22),n.add(u);let d=gt(n,.055,.05,.09,i==="pistol"?-.018:-.028,i==="pistol"?-.07:-.03,s.lz,t.glove,.016),f=new me(new Ft(.034,.042,.34,16),t.sleeve);f.rotation.set(Math.PI/2-.1,.35,0),f.position.set(-.1,-.12,s.lz+.22),n.add(f)}n.traverse(u=>{u.isMesh&&(u.castShadow=!1)});let r=new _t;r.position.set(0,i==="pistol"?.012:.022,s.muzzle),n.add(r);let o=new _t;o.position.set(.04,.03,s.eject),n.add(o);let l=new Be,c=wS();for(let u=0;u<2;u++){let d=new me(new en(.06,.16),c);d.rotation.set(Math.PI/2,u*Math.PI/2,0),d.position.z=-.07,l.add(d)}let a=new me(new en(.12,.12),c);l.add(a),l.position.copy(r.position),l.visible=!1,n.add(l);let h=0;return n.traverse(u=>{u.isMesh&&(h+=(u.geometry.index?u.geometry.index.count:u.geometry.attributes.position.count)/3)}),n.userData={muzzle:r,eject:o,flash:l,slide:n.userData.slide,slides:s.slides||null,muzzles:s.muzzles||null,pump:n.userData.pump,base:new N(...s.pos),tris:Math.round(h)},n.userData.base.z-=.1,n.userData.base.x-=.03,n.position.copy(n.userData.base),n.scale.setScalar(.9),n}var Xt={pistol:{id:"pistol",name:"Dustdevil .45",dmg:30,rpm:380,auto:!1,mag:12,reserve:60,reload:1.25,spread:.004,pellets:1,kick:.01,shake:.12,price:0,head:3.2,snd:"pistol",range:90},smg:{id:"smg",name:"Rattler SMG",dmg:22,rpm:820,auto:!0,mag:32,reserve:160,reload:1.6,spread:.014,pellets:1,kick:.006,shake:.08,price:600,head:2.4,snd:"smg",range:80},shotgun:{id:"shotgun",name:"Sidewinder 12g",dmg:17,rpm:78,auto:!1,mag:6,reserve:42,reload:.5,perShell:!0,spread:.055,pellets:9,kick:.04,shake:.4,price:1200,head:2,snd:"shotgun",range:30},rifle:{id:"rifle",name:"Ridgeback AR",dmg:42,rpm:620,auto:!0,mag:30,reserve:150,reload:1.9,spread:.007,pellets:1,kick:.013,shake:.18,price:1800,head:2.6,snd:"rifle",range:120},lmg:{id:"lmg",name:"Hog Hammer LMG",dmg:40,rpm:700,auto:!0,mag:100,reserve:300,reload:3.8,spread:.012,pellets:1,kick:.012,shake:.2,price:0,crateOnly:!0,head:2.4,snd:"lmg",range:110},akimbo:{id:"akimbo",name:"Twin Dustdevils",dmg:26,rpm:500,auto:!1,mag:24,reserve:96,reload:1.7,spread:.009,pellets:1,kick:.008,shake:.1,price:750,head:2.6,snd:"akimbo",range:70,akimbo:!0},lever:{id:"lever",name:"Barn Lever",dmg:70,rpm:55,auto:!1,mag:7,reserve:35,reload:.48,perShell:!0,spread:.002,pellets:1,kick:.02,shake:.16,price:1500,head:3,snd:"lever",range:110},nailer:{id:"nailer",name:"Shop Nailer",dmg:14,rpm:900,auto:!0,mag:36,reserve:144,reload:1.5,spread:.022,pellets:1,kick:.003,shake:.05,price:800,head:1.4,snd:"nailer",range:22},sawed:{id:"sawed",name:"Sawed-off",dmg:24,rpm:200,auto:!1,mag:2,reserve:20,reload:1.7,spread:.11,pellets:8,kick:.06,shake:.55,price:0,crateOnly:!0,head:1.5,snd:"sawed",range:14}},ml=["smg","shotgun","rifle","lmg","sawed","lever"],lA=new Je({color:2895669,metalness:.9,roughness:.34}),cA=new Je({color:5593439,metalness:.85,roughness:.28}),hA=new Je({color:4072982,metalness:0,roughness:.55}),uA=new Je({color:1626528,metalness:.4,roughness:.3,emissive:678469,emissiveIntensity:.8}),dA=new Je({color:12946539,roughness:.7}),fA=new Je({color:4016698,roughness:.9}),pA=new Je({color:1776928,roughness:.8});function gl(i,e=!0){return Sg(i,e)}var Df={discount:.5,pickup:1.35,deliver:1.9,board:1.7,radio:3.6,decay:.5,lots:{C:{x0:24,x1:50.4,z0:2,z1:22},D:{x0:-50.4,x1:-24,z0:-34,z1:-2},E:{x0:4,x1:24.4,z0:-76.4,z1:-52}},gates:[{id:"AB",price:1250,name:"Back lot",blurb:"The back lot awaits",areas:["A","B"],x:0,z:-24,w:6,axis:"x",stand:{A:{x:0,z:-22.2},B:{x:0,z:-25.8}}},{id:"AC",price:1500,name:"Lot C",blurb:"Fuel yard open",areas:["A","C"],x:24,z:12,w:5,axis:"z",stand:{A:{x:22.2,z:12},C:{x:25.8,z:12}}},{id:"AD",price:1750,name:"Lot D",blurb:"Bus barn open",areas:["A","D"],x:-24,z:-14,w:5,axis:"z",stand:{A:{x:-22.2,z:-14},D:{x:-25.8,z:-14}}},{id:"SD",price:900,name:"Side access",blurb:"Side gate open",areas:["B","D"],x:-24,z:-30,w:4.2,axis:"z",stand:{B:{x:-22.2,z:-30},D:{x:-25.8,z:-30}}},{id:"BE",price:2e3,name:"Lot E",blurb:"Radio yard open",areas:["B","E"],x:12,z:-52,w:5,axis:"x",stand:{B:{x:12,z:-50.2},E:{x:12,z:-53.8}}}],jobs:[{id:"fuel",title:"Fuel Run",kind:"carry",gate:"AC",area:"A",need:3,pts:400,power:"double",pad:{x:19.2,z:12},items:[{id:"f0",x:15,z:19},{id:"f1",x:-16,z:18},{id:"f2",x:6,z:4}]},{id:"bus",title:"Board the Bus",kind:"board",gate:"AD",area:"A",need:4,pts:500,power:"ammo",pad:{x:-15,z:4.2},items:[{id:"b0",x:-16.45,z:.2},{id:"b1",x:-16.45,z:2.1},{id:"b2",x:-13.55,z:.2},{id:"b3",x:-13.55,z:2.1}]},{id:"carb",title:"Carb Hunt",kind:"carry",gate:"SD",area:"B",need:1,pts:350,power:"double",pad:{x:-18.2,z:-30},items:[{id:"carb",x:-6,z:20}]},{id:"radio",title:"Radio Hold",kind:"radio",gate:"BE",area:"B",need:20,pts:600,power:"ammo",pad:{x:8,z:-42},items:[]},{id:"parts",title:"Part Collection",kind:"carry",gate:"",area:"C",need:3,pts:450,power:"double",pad:{x:40,z:5.5},items:[{id:"p0",x:32,z:18},{id:"p1",x:46,z:16},{id:"p2",x:36,z:9}]},{id:"clear",title:"Clear Lot D",kind:"clear",gate:"",area:"D",need:8,pts:500,power:"ammo",pad:{x:-37,z:-18},items:[]}]};var Bt=Df,Nf=-24;function Fi(i,e,t="junkyard"){if(typeof e!="number")return i>Nf?"A":"B";if(t!=="junkyard")return e>Nf?"A":"B";let n=Df.lots;for(let s of["C","D","E"]){let r=n[s];if(i>r.x0&&i<r.x1&&e>r.z0&&e<r.z1)return s}return e>Nf?"A":(e>=-52,"B")}function No(i){let e=new Set((i||[]).filter(n=>n&&n.open).map(n=>n.id)),t=new Set(["A"]);return e.has("AB")&&t.add("B"),e.has("AC")&&t.add("C"),(e.has("AD")||e.has("SD"))&&t.add("D"),e.has("BE")&&t.add("E"),t}function Eg(i,e){return i.stand&&i.stand[e]||{x:i.x,z:i.z}}function RS(i,e,t){if(!i||!e||i===e)return i===e?[]:null;let n=new Map;for(let c of t||[]){if(!c||!c.open||!c.areas||c.areas.length<2)continue;let[a,h]=c.areas;n.has(a)||n.set(a,[]),n.has(h)||n.set(h,[]),n.get(a).push(c),n.get(h).push(c)}let s=[i],r=new Map([[i,null]]);for(;s.length;){let c=s.shift();if(c===e)break;for(let a of n.get(c)||[]){let h=a.areas[0]===c?a.areas[1]:a.areas[0];r.has(h)||(r.set(h,{via:a,from:c}),s.push(h))}}if(!r.has(e))return null;let o=[],l=e;for(;r.get(l);)o.push(r.get(l).via),l=r.get(l).from;return o.reverse(),o}function Tg(i,e,t,n,s,r=0){let o=Fi(i,e,t);if(!n||o===n)return null;let l=RS(o,n,s);if(!l||!l.length)return null;let c=l[0],a=c.areas[0]===o?c.areas[1]:c.areas[0],h=c.axis!=="z",u=Eg(c,o),d=Eg(c,a),f=h?Math.sign(d.z-u.z)||-1:Math.sign(d.x-u.x)||1,p=h?e:i,v=h?c.z:c.x,g=(p-v)*f,m=Math.max(.25,(c.w||6)/2-1.05),y=Math.max(-m,Math.min(m,r||0)),w=v+f*1.55;return{x:h?c.x+y:w,z:h?w:c.z+y,ex:h?c.x:w,ez:h?w:c.z,gate:c.id,next:a,progress:g,crossZ:h,gx:c.x,gz:c.z}}var In=-24;function cu(i,e="#18d1a0",t=512,n=256){let s=document.createElement("canvas");s.width=t,s.height=n;let r=s.getContext("2d");r.fillStyle="rgba(8,12,16,0.82)",r.fillRect(0,0,t,n),r.strokeStyle=e,r.lineWidth=6,r.strokeRect(8,8,t-16,n-16),r.textAlign="center",r.textBaseline="middle",i.forEach((l,c)=>{r.font=`${l.w||700} ${l.s}px system-ui, "Segoe UI", Arial, sans-serif`,r.fillStyle=l.c||"#fff",r.fillText(l.t,t/2,l.y)});let o=new $t(s);return o.colorSpace=pt,o.anisotropy=4,o}var xl=class{constructor(e,t,n){this.scene=e,this.T=t,this.M=new ru(t),this.tier=n,this.colliders=[],this.windows=[],this.buys=[],this.lamps=[],this.dyn=[],this.fall=[],this.doorInfos=[],this.doors=[],this.missionMeshes=new Map,this.mapId="junkyard",this.staticGroup=new Be,this.root=new Be,e.add(this.root),this.build(),this.batch(),this.dress(n)}dress(e=this.tier){let t=e>0,n=this.M;n.sand.color.setHex(t?11047032:13615792),n.sand.bumpScale=t?5.5:3,n.sand.roughness=t?.96:.97,n.concrete.color.setHex(t?13154984:16777215),n.concrete.bumpScale=t?2.8:1.5,n.concrete.roughness=t?.96:.88,n.concrete.metalness=t?0:.02,n.fence.roughness=t?.42:1,n.fence.metalness=t?.84:.75,n.fence.bumpScale=t?4.2:2.5,n.fenceDark.roughness=t?.6:1,n.fenceDark.metalness=t?.55:.7;for(let s of Object.values(n.cache))s.userData.paint&&(s.roughness=t?.4:1,s.metalness=t?.25:.55);if(this.lampReach=t?18:30,this.lampDecay=t?2:1.7,this.lampBase=t?90:95,this.moon&&(this.moon.intensity=t?1.4:1.7),this.lampPool)for(let s of this.lampPool)s.distance=this.lampReach,s.decay=this.lampDecay;xg(e)}addCol(e,t,n,s,r=3,o={}){let l={x0:e,x1:t,z0:n,z1:s,y0:o.y0||0,y1:r,...o};return this.colliders.push(l),l}box(e,t,n,s,r,o,l,c={}){let a=new me(new rt(e,t,n),l);return a.position.set(s,r,o),a.castShadow=c.cast!==!1,a.receiveShadow=!0,(c.dynamic?this.root:this.staticGroup).add(a),a}place(e,t,n,s=0,r=!0){e.position.x+=t,e.position.z+=n,e.rotation.y=s,e.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0)}),this.staticGroup.add(e);let o=e.userData.hd;if(o){e.updateMatrix(),e.traverse(c=>{c.isMesh&&(c.userData.hdProp=!0)});let l=o.kind==="tyre"?e.children.map(c=>new je().makeTranslation(c.position.x,c.position.y,c.position.z).premultiply(e.matrix).multiply(new je().makeRotationY($(tn)))):[e.matrix.clone()];for(let c of l)(this.hdProps||(this.hdProps=[])).push({...o,m:c})}if(r&&e.userData.size){let[l,c,a]=e.userData.size;Math.abs(Math.sin(s))>.7&&([l,a]=[a,l]),this.addCol(t-l/2+.05,t+l/2-.05,n-a/2+.05,n+a/2-.05,c)}return e}build(){let{M:e,T:t,scene:n}=this;this.mapId="junkyard",this.buildSky(),this.buildGround();let s=3.2,r=.4,o=(u,d,f,p=[],v=e.fence)=>this.wall("x",u,d,f,p,s,r,v),l=(u,d,f,p=[],v=e.fence)=>this.wall("z",u,d,f,p,s,r,v),c=u=>{let d=Bt.gates.find(f=>f.id===u);return{c:d.axis==="x"?d.x:d.z,id:d.id,door:!0,w:d.w,price:d.price,name:d.name,blurb:d.blurb,areas:d.areas,stand:d.stand}};o(24,-24,24,[{c:-10,id:"S1",area:"A"},{c:11,id:"S2",area:"A"}]),l(24,-24,24,[{c:-4,id:"E1",area:"A"},c("AC")]),l(-24,-24,24,[{c:6,id:"W1",area:"A"},c("AD")]),o(-24,-24,24,[c("AB")]),l(24,-52,-24,[{c:-40,id:"E2",area:"B"}]),l(-24,-52,-24,[{c:-38,id:"W2",area:"B"},c("SD")]),o(-52,-24,24,[{c:-12,id:"N1",area:"B"},c("BE")]);let a=(u,d,f,p)=>{let v=new me(new en(u,d),e.concrete);v.rotation.x=-Math.PI/2,v.position.set(f,.015,p),v.receiveShadow=!0,this.staticGroup.add(v)};a(48,48,0,0),a(48,28,0,-38),this.buildLots(o,l,a),this.buildGate();let h=this.place.bind(this);h(fi(e,6010272,{door:!0}),-9,-9,.2*0),h(fi(e,14252330,{missing:!0,tilt:.04}),13,-10,Math.PI/2),h(Mi(e,6197184),9,11,Math.PI/2),h(Mi(e,14252330,15129792,{missing:!0}),-15,1,0),h(fi(e,14733722),-4,16,Math.PI/2+0),h(fi(e,11680302,{tilt:-.05}),19,16,0),h(Mi(e,9087050,15129792),3,-14,Math.PI/2);for(let[u,d,f]of[[17,2,5],[-20,-5,4],[-3,-4,3],[-19,19,6],[21,-20,4]])h(cl(e,f),u,d);for(let[u,d,f]of[[5,19,3829413],[6.2,19.8,11680302],[4.4,20.6,9087050],[-1,-19,14252330],[.2,-20,3829413]])h(js(e,f),u,d);h(Yn(e,1.1),-21,12),h(Yn(e,.9),-20.8,13.2),h(Yn(e,1.3),21,9),h(Yn(e,1),20.4,10.4),this.shack(18,-17,6,5),h(fi(e,13619140,{missing:!0}),-12,-36,Math.PI/2),h(fi(e,6010272,{tilt:.05}),14,-46,.3*0),h(Mi(e,11680302,15129792),6,-35,0),h(Mi(e,6010272,15129792,{tilt:.04}),-10,-47,Math.PI/2),h(fi(e,13803834,{door:!0}),0,-43,Math.PI/2);for(let[u,d,f]of[[18,-30,5],[-20,-29,3],[19,-36,4],[-3,-30,4]])h(cl(e,f),u,d);for(let[u,d,f]of[[-19,-49,14252330],[-18,-50,3829413],[20,-50,11680302]])h(js(e,f),u,d);h(Yn(e,1.2),21,-46),h(Yn(e,1),-21,-42),h(Yn(e,.9),20.6,-47.4);for(let[u,d,f,p]of[[-11,11,0,.6],[14,5,0,2.6],[-13,-12,1,-.5],[10,-19,0,3.4],[-8,-30,0,.3],[11,-40,1,3],[-4,-49,0,1.4]]){let v=hl(this.M,!!f);v.position.set(u,0,d),v.rotation.y=p,v.traverse(m=>{m.isMesh&&(m.castShadow=!m.userData.bulb)}),v.updateMatrixWorld(!0),this.addCol(u-.2,u+.2,d-.2,d+.2,5);let g=v.userData.bulbPos.clone().applyMatrix4(v.matrixWorld);this.lamps.push({pos:g,teal:!!f,ph:$(100)}),this.staticGroup.add(v)}this.wallBuy("smg",-14,In+.25,0),this.wallBuy("shotgun",23.75,-15,-Math.PI/2),this.wallBuy("rifle",-23.75,-44,Math.PI/2),this.wallBuy("akimbo",23.75,8,-Math.PI/2),this.wallBuy("lever",-23.75,-32,Math.PI/2),this.wallBuy("nailer",10,23.65,Math.PI),this.nadeBuy(4,16.2,0),this.wallBuy("smg",49.65,12,-Math.PI/2),this.wallBuy("shotgun",-49.65,-16,Math.PI/2),this.wallBuy("rifle",18,-75.65,0),this.buildCrate(-17.5,14.5),this.scenery(),this.buildLights()}wall(e,t,n,s,r,o,l,c){let{M:a}=this,h=p=>p.w||3.2,u=[...r].sort((p,v)=>p.c-v.c),d=n,f=(p,v)=>{if(v-p<.05)return;let g=v-p,m=(p+v)/2,y=Math.max(1,Math.ceil(g/8));for(let w=0;w<y;w++){let _=p+g*w/y,E=p+g*(w+1)/y;this.wseg(e,t,_,E,o,l,c)}};for(let p of u)f(d,p.c-h(p)/2),this.opening(e,t,p,o,l,c),d=p.c+h(p)/2;f(d,s)}wseg(e,t,n,s,r,o,l){let c=s-n,a=(n+s)/2;e==="x"?(this.box(c,r,o,a,r/2,t,l),this.addCol(n,s,t-o/2,t+o/2,r),this.box(.35,r+.5,.55,n,(r+.5)/2,t,this.M.fenceDark),this.box(c,.1,.12,a,r+.4,t,this.M.fenceDark)):(this.box(o,r,c,t,r/2,a,l),this.addCol(t-o/2,t+o/2,n,s,r),this.box(.55,r+.5,.35,t,(r+.5)/2,n,this.M.fenceDark),this.box(.12,.1,c,t,r+.4,a,this.M.fenceDark))}opening(e,t,n,s,r,o){let{M:l}=this,c=n.w||3.2;if(n.door){let M=e==="x"?n.c:t,C=e==="x"?t:n.c;e==="x"?(this.box(.5,s+.8,.7,M-c/2,(s+.8)/2,C,l.fenceDark),this.box(.5,s+.8,.7,M+c/2,(s+.8)/2,C,l.fenceDark)):(this.box(.7,s+.8,.5,M,(s+.8)/2,C-c/2,l.fenceDark),this.box(.7,s+.8,.5,M,(s+.8)/2,C+c/2,l.fenceDark));let O=n.id==="DOOR"?"AB":n.id||"AB",L=n.areas||["A","B"],P=n.stand||(e==="x"?{A:{x:M,z:C+1.8},B:{x:M,z:C-1.8}}:{A:{x:M-1.8,z:C},B:{x:M+1.8,z:C}});this.doorInfos.push({id:O,x:M,z:C,w:c,axis:e,price:n.price||1250,name:n.name||"Back lot",blurb:n.blurb||"The back lot awaits",areas:L,stand:P});return}let a=e==="x"?{x:0,z:t>0?1:-1}:{x:t>0?1:-1,z:0};e==="x"&&t===-52&&(a.z=-1),n.outN&&(a=e==="x"?{x:0,z:n.outN}:{x:n.outN,z:0});let h=e==="x"?n.c:t,u=e==="x"?t:n.c,d=.95,f=2.5,p=c,v=(M,C,O)=>e==="x"?[M,C,r]:[r,C,M],[g,m,y]=v(p,d,0);this.box(g,m,y,h,d/2,u,o);let[w,_,E]=v(p,s-f,0);this.box(w,_,E,h,(s+f)/2,u,o);let T=l.wood;for(let M of[-1,1]){let[C,O,L]=v(.2,f-d,0);this.box(e==="x"?.2:r+.12,f-d,e==="x"?r+.12:.2,e==="x"?h+M*(p/2-.1):h,(d+f)/2,e==="x"?u:u+M*(p/2-.1),T)}this.addCol(e==="x"?h-p/2:h-r/2,e==="x"?h+p/2:h+r/2,e==="x"?u-r/2:u-p/2,e==="x"?u+r/2:u+p/2,d,{bulletOnly:!1}),this.addCol(e==="x"?h-p/2:h-r/2,e==="x"?h+p/2:h+r/2,e==="x"?u-r/2:u-p/2,e==="x"?u+r/2:u+p/2,s,{y0:f,bulletOnly:!0}),this.addCol(e==="x"?h-p/2:h-r/2,e==="x"?h+p/2:h+r/2,e==="x"?u-r/2-.02:u-p/2,e==="x"?u+r/2+.02:u+p/2,s,{noBullet:!0});let A=[],x=Math.atan2(a.x,a.z);for(let M=0;M<6;M++){let C=new me(new rt(p-.15,.2,.07),l.wood),O=new N(h+a.x*.23,d+.16+M*.255,u+a.z*.23);C.position.copy(O),C.rotation.set(0,x,$(-.05,.05)),C.castShadow=!0,C.receiveShadow=!0,C.userData={home:O,rotZ:C.rotation.z,ry:x},this.root.add(C),A.push(C)}let b=new me(new rt(e==="x"?.3:.06,.06,e==="x"?.06:.3),new nt({color:new de(1.8,.3,.15),toneMapped:!1}));b.position.set(h-a.x*.3,2.85,u-a.z*.3),b.userData.noAO=!0,this.root.add(b),this.windows.push({id:n.id,area:n.area||Fi(h,u,this.mapId),c:new N(h,0,u),n:a,t:{x:-a.z,z:a.x},out:{x:h+a.x*1.5,z:u+a.z*1.5},in:{x:h-a.x*1.6,z:u-a.z*1.6},planks:A,count:6,attackers:0,cool:0,axis:e,lamp:b})}removePlank(e){if(e.count<=0)return!1;let t=e.planks[e.count-1];return e.count--,t.userData.fall={vx:e.n.x*$(1,3)+$(-1,1),vy:$(1,3),vz:e.n.z*$(1,3)+$(-1,1),t:0,rx:$(-6,6),rz:$(-6,6)},this.fall.push(t),!0}addPlank(e){if(e.count>=6)return!1;let t=e.planks[e.count];e.count++,t.userData.fall=null;let n=this.fall.indexOf(t);return n>=0&&this.fall.splice(n,1),t.visible=!0,t.position.copy(t.userData.home),t.rotation.set(0,t.userData.ry,t.userData.rotZ),!0}buildGate(){this.buildGates()}buildGates(){let{M:e}=this,t=new Je({color:15251502,roughness:.6,metalness:.3});this.doors=[];for(let n of this.doorInfos){let s=n.axis!=="z",r=new Be,o=new me(new rt(s?n.w:.25,3.4,s?.25:n.w),e.fence);o.position.y=1.7,o.castShadow=o.receiveShadow=!0,r.add(o);let l=Math.max(3,Math.round(n.w));for(let h=0;h<l;h++){let u=new me(new rt(s?.42:.05,3.4,s?.05:.42),h%2?t:e.fenceDark),d=-n.w/2+n.w*(h+.5)/l;u.position.set(s?d:.15,1.7,s?.15:d),r.add(u)}r.position.set(n.x,0,n.z),this.root.add(r);let c=s?this.addCol(n.x-n.w/2,n.x+n.w/2,n.z-.2,n.z+.2,3.4,{door:!0,gate:n.id}):this.addCol(n.x-.2,n.x+.2,n.z-n.w/2,n.z+n.w/2,3.4,{door:!0,gate:n.id}),a={id:n.id,mesh:r,open:!1,t:0,price:n.price,name:n.name,blurb:n.blurb,areas:n.areas,stand:n.stand,axis:n.axis,col:c,pos:{x:n.x,z:n.z},x:n.x,z:n.z};if(this.doors.push(a),n.id==="AB"){let h=new me(new en(7.5,1.9),new nt({map:this.T.sign,color:new de(1.9,1.9,1.9),toneMapped:!1}));h.position.set(n.x,5,n.z+.45),this.staticGroup.add(h);for(let u of[-1,1])this.box(.18,4.4,.18,n.x+u*3.5,2.5,n.z+.4,e.fenceDark);this.signPos=new N(n.x,5,n.z+1)}else{let h=n.axis==="z"?Math.PI/2:0,u=new me(new en(3.4,.7),new nt({map:cu([{t:n.name.toUpperCase(),s:64,y:128,w:800,c:"#ffd36b"}],"#ffd36b",512,256),toneMapped:!1,color:new de(.9,.9,.9)}));u.position.set(n.x,4.15,n.z),u.rotation.y=h,this.root.add(u)}}this.door=this.doors.find(n=>n.id==="AB")||this.doors[0]}buildLots(e,t,n){let{M:s}=this,r=this.place.bind(this);t(50,2,22,[{c:8,id:"C1",area:"C"},{c:16,id:"C2",area:"C"}]),e(22,24,50,[{c:36,id:"C3",area:"C"}]),e(2,24,50,[]),n(26,20,37,12),r(fi(s,13803834,{missing:!0}),32,16,.4),r(Mi(s,12868138,15129792),30,8,Math.PI/2);for(let[o,l,c]of[[40,18,11680302],[41.2,17.2,14252330],[39.2,18.8,3829413],[44,7,9087050]])r(js(s,c),o,l);r(Yn(s,1.1),46,14),r(Yn(s,.9),46.8,15.1),this.lampAt(44,14,1,1.2),t(-50,-34,-2,[{c:-10,id:"D1",area:"D"},{c:-24,id:"D2",area:"D"}]),e(-2,-50,-24,[]),e(-34,-50,-24,[{c:-38,id:"D3",area:"D"}]),n(26,32,-37,-18),r(Mi(s,6197184,15129792),-38,-10,0),r(Mi(s,14252330,13616814,{tilt:.03}),-38,-24,0),r(fi(s,9087050,{door:!0}),-44,-16,Math.PI/2),r(Yn(s,1.2),-46,-6),r(Yn(s,1),-32,-30),this.lampAt(-44,-22,0,.4),e(-76,4,24,[{c:8,id:"EN",area:"E"}]),t(4,-76,-52,[{c:-68,id:"EW",area:"E",outN:-1}]),t(24,-76,-52,[{c:-64,id:"EE",area:"E"}]),n(20,24,14,-64),r(fi(s,13619140,{missing:!0,tilt:-.04}),10,-64,.6),r(Mi(s,3829413,15129792),18,-68,Math.PI/2),r(Yn(s,1),8,-72),r(js(s,14252330),20,-58),r(js(s,3829413),21,-57.2),this.lampAt(10,-70,1,2.2),this.buildDressing()}lampAt(e,t,n,s){let r=hl(this.M,!!n);r.position.set(e,0,t),r.rotation.y=s,r.traverse(l=>{l.isMesh&&(l.castShadow=!l.userData.bulb)}),r.updateMatrixWorld(!0),this.addCol(e-.2,e+.2,t-.2,t+.2,5);let o=r.userData.bulbPos.clone().applyMatrix4(r.matrixWorld);this.lamps.push({pos:o,teal:!!n,ph:$(100)}),this.staticGroup.add(r)}buildDressing(){let{M:e}=this,t=f=>Bt.jobs.find(p=>p.id===f),n=t("fuel").pad,s=t("carb").pad,r=t("radio").pad,o=t("parts").pad;this.box(1.5,.9,.9,21.05,.45,12,e.fenceDark),this.box(1.6,.12,1,21.05,.96,12,e.fence),this.addCol(20.3,21.8,11.55,12.45,1.05);let l=new me(new rt(.28,.16,.16),new nt({color:new de(.2,2.4,1.2),toneMapped:!1}));l.position.set(20.2,1.05,12),l.userData.noAO=!0,this.root.add(l),this.box(1.3,.75,.7,-19.5,.38,-31.15,e.wood),this.addCol(-20.2,-18.8,-31.55,-30.75,.9),this.box(1.4,.8,.7,42.2,.4,6.3,e.wood),this.addCol(41.5,42.9,5.95,6.65,.95),this.box(.18,5.2,.18,9.4,2.6,-43.4,e.fenceDark),this.box(1.1,.16,.16,9.4,4.9,-43.4,e.fence),this.box(.7,.45,.4,6.7,.9,-43.1,e.fenceDark),this.addCol(9.25,9.55,-43.55,-43.25,5.2);let c=new me(new _n(.12,8,6),new nt({color:new de(2.2,.35,.25),toneMapped:!1}));c.position.set(9.9,5.05,-43.4),c.userData.noAO=!0,this.root.add(c),this.box(.16,6.4,.16,16,3.2,-62,e.fenceDark),this.box(1.4,.1,.1,16,6.2,-62,e.fence),this.addCol(15.85,16.15,-62.15,-61.85,6.4);let a=(f,p,v,g)=>{g.position.set(p,0,v),g.traverse(m=>{m.isMesh&&(m.castShadow=!0,m.receiveShadow=!0)}),this.root.add(g),this.missionMeshes.set(f,g)},h=()=>{let f=new Be;f.add(new me(new Ft(.16,.18,.42,8),e.paint(11680302))),f.children[0].position.y=.22;let p=new me(new Ft(.07,.07,.12,6),e.fenceDark);return p.position.y=.46,f.add(p),f};for(let f of t("fuel").items){let p=h();p.userData.hdKind="jerry",a(f.id,f.x,f.z,p)}let u=new Be;u.add(new me(new rt(.28,.16,.2),e.chrome)),u.children[0].position.y=.2;let d=new me(new Ft(.05,.08,.22,6),e.paint(13803834));d.position.set(0,.28,0),u.add(d),a("carb",t("carb").items[0].x,t("carb").items[0].z,u);for(let f of t("parts").items){let p=new Be,v=new me(new ui(.16,.05,6,10),e.chrome);v.rotation.x=Math.PI/2,v.position.y=.12,p.add(v),a(f.id,f.x,f.z,p)}for(let f of t("bus").items){let p=new Be,v=new me(new rt(.08,.55,.7),e.wood);v.position.y=1.35,p.add(v),a(f.id,f.x,f.z,p)}for(let[f,p]of this.missionMeshes)p.visible=f.startsWith("f");this._dress={fuel:n,carb:s,radio:r,parts:o}}resetDoors(){for(let e of this.doors)e.open=!1,e.t=0,e.mesh.position.y=0,e.col.off=!1}shack(e,t,n,s){let{M:r}=this;this.box(n,3,s,e,1.5,t,r.fence),this.box(n+.5,.2,s+.5,e,3.1,t,r.fenceDark),this.addCol(e-n/2,e+n/2,t-s/2,t+s/2,3.2),this.box(1.4,2.1,.1,e-1.2,1.05,t+s/2+.05,r.wood,{cast:!1});let o=new me(new en(1.4,.9),new nt({color:new de(2.6,1.7,.7),toneMapped:!1}));o.position.set(e+1.5,1.8,t+s/2+.03),this.staticGroup.add(o)}nadeBuy(e,t,n){let s=new Be;s.position.set(e,1.7,t),s.rotation.y=n;let r=new me(new _n(.22,10,8),new Je({color:9048088,roughness:.4}));r.position.set(0,.35,.2);let o=new me(new Ft(.06,.06,.1,6),new Je({color:16722490,emissive:4849672}));o.position.set(0,.58,.2);let l=new me(new en(2.4,1.2),new nt({map:cu([{t:"BLOOD BAIT",s:48,y:88,w:800,c:"#ff5a6e"},{t:"$250  \xB7  G TO THROW",s:32,y:168,c:"#ffd36b"}],"#ff5a6e"),toneMapped:!1}));l.position.set(0,-.35,.04);let c=new me(new rt(2.6,2.2,.08),this.M.fenceDark);c.position.set(0,.05,0),s.add(c,l,r,o),this.root.add(s);let a=Math.sin(n),h=Math.cos(n);this.buys.push({id:"nade",price:250,pos:{x:e+a*.9,z:t+h*.9},name:"Blood Bait"})}wallBuy(e,t,n,s){if(e==="nade"){this.nadeBuy(t,n,s);return}let r=Xt[e],o=new Be;o.position.set(t,1.7,n),o.rotation.y=s;let l=new me(new en(2.4,1.2),new nt({map:cu([{t:r.name.toUpperCase(),s:44,y:88,w:800},{t:"$"+r.price+"  \xB7  AMMO $"+Math.floor(r.price/2),s:36,y:168,c:"#ffd36b"}]),toneMapped:!1,color:new de(.9,.9,.9)}));l.position.set(0,-.35,.04);let c=gl(e,!1);c.position.set(0,.35,.18),c.rotation.y=Math.PI/2,c.scale.setScalar(1.7),c.userData.base=null;let a=new me(new rt(2.6,2.2,.08),this.M.fenceDark);a.position.set(0,.05,0),o.add(a,l,c),o.traverse(d=>{d.isMesh&&(d.castShadow=!1)}),this.root.add(o);let h=Math.sin(s),u=Math.cos(s);this.buys.push({id:e,price:r.price,pos:{x:t+h*.9,z:n+u*.9},name:r.name})}buildCrate(e,t){let{M:n}=this,s=new Be;s.position.set(e,0,t),s.rotation.y=.5;let r=n.paint(2078874),o=new me(new rt(1.3,.7,.8),r);o.position.y=.35,s.add(o);let l=new Be;l.position.set(0,.7,-.4);let c=new me(new rt(1.3,.2,.8),r);c.position.set(0,.1,.4),l.add(c),s.add(l);for(let f of[-.45,.45]){let p=new me(new rt(.1,.92,.84),n.fenceDark);p.position.set(f,.46,0),s.add(p)}let a=new me(new rt(.4,.06,.06),n.chrome);a.position.set(0,.8,.43),s.add(a);let h=new me(new en(.8,.4),new nt({map:cu([{t:"LUCKY",s:70,y:70,w:900,c:"#18ffb0"},{t:"TOOLBOX",s:62,y:150,w:900,c:"#fff"},{t:"950",s:52,y:215,c:"#ffd36b"}],"#18ffb0",384,256),toneMapped:!1,color:new de(.9,.9,.9)}));h.position.set(0,.38,.41),s.add(h),s.traverse(f=>{f.isMesh&&!f.material.isMeshBasicMaterial&&(f.castShadow=!0,f.receiveShadow=!0)});let u=new me(new Ft(.5,.65,9,16,1,!0),new yt({transparent:!0,depthWrite:!1,blending:ln,side:Ht,uniforms:{c:{value:new de(.1,1,.7)},k:{value:.35}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(1.-vy,2.2)*pow(f,2.5)*k); }"}));u.position.set(0,4.5,0),u.userData.noAO=!0,s.add(u),this.root.add(s),this.addCol(e-.8,e+.8,t-.8,t+.8,1);let d=new Be;d.position.set(0,1.5,.1),s.add(d),this.crate={group:s,lid:l,hold:d,beam:u,pos:{x:e,z:t},price:950,state:"idle",t:0,weapon:null,shown:null,model:null,x:e,z:t}}buildSky(){let e=new yt({side:yn,depthWrite:!1,fog:!1,uniforms:{moonDir:{value:new N(-.55,.6,.58).normalize()}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vP; uniform vec3 moonDir;
        float h(vec3 p){ return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ vec3 d=normalize(vP); float y=clamp(d.y,-.2,1.);
          vec3 hor=vec3(.20,.12,.16), mid=vec3(.025,.045,.10), top=vec3(.004,.008,.03);
          vec3 c=mix(hor,mid,smoothstep(0.,.25,y)); c=mix(c,top,smoothstep(.2,.9,y)); c+=vec3(.5,.18,.1)*pow(max(0.,1.-abs(y)*4.),3.)*.35;
          vec3 g=floor(d*220.); float s=step(.9975,h(g))*smoothstep(.05,.3,y); c+=vec3(.9,.95,1.)*s*(.4+.4*h(g+3.))*0.8;
          float md=dot(d,moonDir); c+=vec3(.75,.85,1.)*smoothstep(.9992,.9996,md)*2.5; c+=vec3(.25,.35,.6)*pow(max(0.,md),60.)*.5+vec3(.1,.15,.3)*pow(max(0.,md),8.)*.25;
          gl_FragColor=vec4(c,1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.sky=new me(new _n(500,32,16),e),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.sky.userData.noAO=!0,this.scene.add(this.sky),this.moonDir=e.uniforms.moonDir.value}buildGround(){let e=new me(new en(1200,1200),this.M.sand);e.rotation.x=-Math.PI/2,e.receiveShadow=!0,this.scene.add(e),this.ground=e}scenery(){let{M:e}=this,t=this.staticGroup,n=(c,a)=>c>-26&&c<26&&a>-54&&a<26||c>22&&c<52&&a>0&&a<24||c<-22&&c>-52&&a>-36&&a<0||c>2&&c<26&&a<-50&&a>-78,s=e.sand.clone();s.map=e.sand.map.clone(),s.map.repeat.set(6,3),s.bumpMap=e.sand.bumpMap.clone(),s.bumpMap.repeat.set(6,3),s.color=new de(12034436),s.bumpScale=1.5,e.dune=s;let r,o=()=>r||(r=(()=>{let c=new _n(1,40,14,0,tn,0,Math.PI/2),a=c.attributes.position;for(let h=0;h<a.count;h++){let u=a.getX(h),d=a.getY(h),f=a.getZ(h),p=Math.atan2(f,u),v=d*(.75+.25*Math.sin(p*3+1)+.12*Math.sin(p*7));a.setXYZ(h,u*(1+.08*Math.sin(p*5)),Math.pow(Math.max(v,0),1.6),f)}return c.computeVertexNormals(),c})());for(let c=0;c<26;c++){let a=$(tn),h=$(60,190),u=Math.cos(a)*h,d=-14+Math.sin(a)*h,f=Math.min($(14,38),(h-48)/2.1);if(f<6)continue;let p=new me(o(),s);p.scale.set(f*$(1.2,2),f*$(.12,.28),f*$(1,1.6)),p.position.set(u,0,d),p.rotation.y=$(3),p.receiveShadow=!0,t.add(p)}let l=e.flat(2762292,1,0);for(let c=0;c<12;c++){let a=c/12*tn+$(-.2,.2),h=$(230,330),u=$(30,70),d=$(25,60),f=new me(new Ft(u*.55,u*.8,d,6),l);f.position.set(Math.cos(a)*h,d/2-2,-14+Math.sin(a)*h),f.rotation.y=$(3),t.add(f)}for(let c=0;c<38;c++){let a,h,u=0;do{let f=$(tn),p=$(34,90);a=Math.cos(f)*p,h=-14+Math.sin(f)*p*.9}while(n(a,h)&&++u<20);let d=Mg(e);d.position.set(a,0,h),d.rotation.y=$(3),d.traverse(f=>{f.isMesh&&(f.castShadow=!0)}),t.add(d)}for(let c=0;c<40;c++){let a,h,u=0;do{let f=$(tn),p=$(30,110);a=Math.cos(f)*p,h=-14+Math.sin(f)*p*.9}while(n(a,h)&&++u<20);let d=bg(e,$(.4,1.8));d.position.set(a,0,h),d.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0)}),t.add(d)}for(let c=0;c<9;c++){let a=$(tn),h=$(34,70),u=Math.cos(a)*h,d=-14+Math.sin(a)*h*.9;if(n(u,d))continue;let f=Math.random()<.35?yg(e,Cf(),15129792,{tilt:$(-.08,.08)}):_g(e,Cf(),{tilt:$(-.1,.1),missing:Math.random()<.5});f.position.set(u,0,d),f.rotation.y=$(3),f.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.receiveShadow=!0)}),t.add(f)}}buildLights(){let e=this.scene;this.hemi=new wr(7309e3,3812386,.85),e.add(this.hemi),this.moon=new Ts(10335487,1.7),this.moon.castShadow=!0,this.moon.position.set(0,0,0),e.add(this.moon,this.moon.target);let t=this.moon.shadow;t.camera.left=t.camera.bottom=-34,t.camera.right=t.camera.top=34,t.camera.near=1,t.camera.far=140,t.bias=-4e-4,t.normalBias=.04,t.mapSize.set(2048,2048),this.lampPool=[];for(let s=0;s<7;s++){let r=new _i(16756838,95,30,1.7);e.add(r),this.lampPool.push(r)}this.halos=[],this.cones=[];let n=s=>new yt({transparent:!0,depthWrite:!1,blending:ln,side:Ht,uniforms:{c:{value:s},k:{value:.22}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(vy,1.5)*pow(f,1.6)*k); }"});for(let s of this.lamps){let r=s.teal?new de(.2,.9,.7):new de(1,.62,.28),o=new li(new Qn({map:this.T.glow,color:s.teal?new de(.5,3,2.4):new de(3,1.8,.7),blending:ln,depthWrite:!1,transparent:!0,fog:!1}));o.scale.setScalar(3.4),o.position.copy(s.pos),o.userData.noAO=!0,this.scene.add(o),this.halos.push(o);let l=new me(new ys(4.2,5,24,1,!0),n(r));l.position.copy(s.pos).add(new N(0,-2.5,0)),l.userData.noAO=!0,this.scene.add(l),this.cones.push(l),s.light=r}}setTier(e){this.tier=e,this.dress(e);let t=[3,5,7][e];this.lampPool.forEach((s,r)=>s.visible=r<t),this.cones.forEach(s=>s.visible=e>0),this.moon.castShadow=e>0;let n=e===2?2048:1024;this.moon.shadow.mapSize.x!==n&&(this.moon.shadow.mapSize.set(n,n),this.moon.shadow.map?.dispose(),this.moon.shadow.map=null)}batch(){let e=this.staticGroup;e.updateMatrixWorld(!0);let t=new Map,n=[];e.traverse(s=>{if(!s.isMesh)return;if(s.userData.bulb||s.userData.noBatch){n.push(s);return}let r=!1;for(let a=s;a;a=a.parent)if(a.userData.hd){r=!0;break}let o=s.material.uuid+(s.castShadow?"c":"n")+(s.receiveShadow?"r":"n")+(r?"h":""),l=t.get(o);l||(l={mat:s.material,cast:s.castShadow,rec:s.receiveShadow,geos:[],hp:r},t.set(o,l));let c=s.geometry.clone();c.applyMatrix4(s.matrixWorld);for(let a of Object.keys(c.attributes))["position","normal","uv"].includes(a)||c.deleteAttribute(a);l.geos.push(c)});for(let s of t.values()){let r=pg(s.geos,!1);if(!r){console.warn("merge failed");continue}let o=new me(r,s.mat);o.castShadow=s.cast,o.receiveShadow=s.rec,o.frustumCulled=!1,this.root.add(o),s.hp&&(this.propLo||(this.propLo=[])).push(o),s.geos.forEach(l=>l.dispose())}for(let s of n){if(s.userData.noBatch){let o=s.clone();o.matrixAutoUpdate=!1,o.matrix.copy(s.matrixWorld),o.matrixWorldNeedsUpdate=!0,this.root.add(o);continue}let r=new me(s.geometry,s.material);r.applyMatrix4(s.matrixWorld),r.matrixAutoUpdate=!0,r.position.setFromMatrixPosition(s.matrixWorld),r.rotation.set(0,0,0),r.scale.setScalar(1),this.root.add(r)}this.staticGroup=null}resolve(e,t,n=!1){let s=!1;for(let r of this.colliders){if(r.bulletOnly||r.off)continue;let o=Kt(e.x,r.x0,r.x1),l=Kt(e.z,r.z0,r.z1),c=e.x-o,a=e.z-l,h=c*c+a*a;if(!(h>=t*t))if(s=!0,h>1e-8){let u=Math.sqrt(h),d=(t-u)/u;e.x+=c*d,e.z+=a*d}else{let u=e.x-r.x0,d=r.x1-e.x,f=e.z-r.z0,p=r.z1-e.z,v=Math.min(u,d,f,p);v===u?e.x=r.x0-t:v===d?e.x=r.x1+t:v===f?e.z=r.z0-t:e.z=r.z1+t}}return s}ray(e,t,n){let s=n,r=null,o=null;if(t.y<-1e-5){let l=-e.y/t.y;l>0&&l<s&&(s=l,r={x:0,y:1,z:0},o="ground")}for(let l of this.colliders){if(l.noBullet||l.off)continue;let c=0,a=s,h=-1,u=0,d=(f,p,v,g,m)=>{if(Math.abs(p)<1e-9)return f>=v&&f<=g;let y=(v-f)/p,w=(g-f)/p,_=-1;if(y>w){let E=y;y=w,w=E,_=1}return y>c&&(c=y,h=m,u=_),w<a&&(a=w),c<=a};d(e.x,t.x,l.x0,l.x1,0)&&d(e.y,t.y,l.y0,l.y1,1)&&d(e.z,t.z,l.z0,l.z1,2)&&c>0&&c<s&&(s=c,r={x:h===0?u:0,y:h===1?u:0,z:h===2?u:0},o="wall")}return r?{t:s,n:r,kind:o}:null}update(e,t,n){for(let c=this.fall.length-1;c>=0;c--){let a=this.fall[c],h=a.userData.fall;if(!h){this.fall.splice(c,1);continue}h.t+=e,h.vy-=9.8*e,a.position.x+=h.vx*e,a.position.y+=h.vy*e,a.position.z+=h.vz*e,a.rotation.x+=h.rx*e,a.rotation.z+=h.rz*e,a.position.y<.08&&(a.position.y=.08,h.vy=0,h.vx*=.5,h.vz*=.5),h.t>1.4&&(a.visible=!1,this.fall.splice(c,1))}for(let c of this.doors)c.open&&c.t<1&&(c.t=Math.min(1,c.t+e/2.4),c.mesh.position.y=c.t*3.6,c.t>.5&&(c.col.off=!0));let s=n.x,r=n.z,o=this.lamps.map((c,a)=>({i:a,d:(c.pos.x-s)**2+(c.pos.z-r)**2})).sort((c,a)=>c.d-a.d);this.lampPool.forEach((c,a)=>{let h=this.lamps[o[a].i];c.position.copy(h.pos),c.color.copy(h.teal?new de(.35,1,.8):new de(1,.7,.4));let u=.85+.15*Math.sin(t*9+h.ph)*Math.sin(t*3.7+h.ph*2)+(Math.sin(t*31+h.ph)>.97?-.5:0);c.intensity=(this.lampBase||95)*Math.max(.2,u)}),this.halos.forEach((c,a)=>{let h=Math.hypot(this.lamps[a].pos.x-s,this.lamps[a].pos.z-r);c.visible=h<70});let l=this.crate;l.beam.material.uniforms.k.value=.22+.1*Math.sin(t*2);for(let c of this.windows){if(!c.lamp)continue;let a=6-c.count,h=a<=0?.55+.08*Math.sin(t*2.2+c.c.x):.3+.7*Math.abs(Math.sin(t*(3.2+a)));c.lamp.material.color.setRGB(1.85*h,.22*h,.07*h)}l.model&&(l.model.rotation.y+=e*2,l.model.position.y=Math.sin(t*3)*.04),this.moon.position.set(s+this.moonDir.x*60,this.moonDir.y*60,r+this.moonDir.z*60),this.moon.target.position.set(s,0,r),this.moon.target.updateMatrixWorld(),this.sky.position.set(s,0,r)}};var En=i=>document.getElementById(i),Fr={can:'<svg viewBox="0 0 24 24"><path d="M6 6.5L9 3h8.5a1.5 1.5 0 0 1 1.5 1.5v16a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20.5V8z" fill="currentColor"/><rect x="11" y="4.6" width="5.5" height="2.4" rx="1" fill="#2a1606"/><path d="M8 11.5l8 7.5M16 11.5l-8 7.5" stroke="#2a1606" stroke-width="2" stroke-linecap="round"/></svg>',bolt:'<svg viewBox="0 0 24 24"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" fill="currentColor"/></svg>',gear:'<svg viewBox="0 0 24 24"><path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6zm8.6 5.3l2-1.5-2-3.5-2.4.8a7.6 7.6 0 0 0-1.9-1.1L15.8 5.7h-4l-.5 2.5a7.6 7.6 0 0 0-1.9 1.1L7 8.5 5 12l2 1.5a7 7 0 0 0 0 2.2L5 17.2l2 3.5 2.4-.8c.6.5 1.2.8 1.9 1.1l.5 2.5h4l.5-2.5c.7-.3 1.3-.6 1.9-1.1l2.4.8 2-3.5-2-1.5a7 7 0 0 0 0-2.2z" fill="currentColor" transform="translate(0 -2.2) scale(1 1)"/></svg>',wrench:'<svg viewBox="0 0 24 24"><path d="M21 6.5a5 5 0 0 1-6.6 4.7L6.3 19.3a1.9 1.9 0 0 1-2.7-2.7l8.1-8.1A5 5 0 0 1 17.5 3l-3 3 .7 2.8 2.8.7z" fill="currentColor"/></svg>',hammer:'<svg viewBox="0 0 24 24"><path d="M3 9l6-6 3 3-1.5 1.5L21 18l-3 3L7.5 10.5 6 12z" fill="currentColor"/></svg>',radio:'<svg viewBox="0 0 24 24"><path d="M12 10.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zM11 14.5h2l2.5 7.5h-2l-.6-2h-1.8l-.6 2h-2z" fill="currentColor"/><path d="M7.8 8.2a6 6 0 0 0 0 8.4M16.2 8.2a6 6 0 0 1 0 8.4M5 5.5a10 10 0 0 0 0 14M19 5.5a10 10 0 0 1 0 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',skull:'<svg viewBox="0 0 24 24"><path d="M12 2.5c-4.7 0-8 3.2-8 7.6 0 2.5 1.1 4.3 2.8 5.4V19c0 .8.6 1.4 1.4 1.4h1v-2h1.6v2h2.4v-2h1.6v2h1c.8 0 1.4-.6 1.4-1.4v-3.5c1.7-1.1 2.8-2.9 2.8-5.4 0-4.4-3.3-7.6-8-7.6zm-3.2 6.7a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm6.4 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fill="currentColor"/></svg>',gate:'<svg viewBox="0 0 24 24"><path d="M3 21V5l4-2v18M21 21V5l-4-2v18M7 8h10M7 13h10M7 18h10" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>',ammo:'<svg viewBox="0 0 24 24"><path d="M5 22V10c0-3 1.5-6 2.5-7 1 1 2.5 4 2.5 7v12zM14 22V10c0-3 1.5-6 2.5-7 1 1 2.5 4 2.5 7v12z" fill="currentColor"/></svg>',x2:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M6.5 8.5l4.5 7M11 8.5l-4.5 7M13.5 10.2c.4-1.2 1.4-1.8 2.6-1.8 1.4 0 2.4.9 2.4 2.1 0 1.9-2.7 2.9-5 5h5.2" fill="none" stroke="#2a1606" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',star:'<svg viewBox="0 0 24 24"><path d="M12 2l3 6.5 7 .8-5.2 4.8 1.5 7L12 17.6 5.7 21l1.5-7L2 9.3l7-.8z" fill="currentColor"/></svg>',lock:'<svg viewBox="0 0 24 24"><path d="M7 10V7.5a5 5 0 0 1 10 0V10h1.5v11h-13V10zm2.5 0h5V7.5a2.5 2.5 0 0 0-5 0z" fill="currentColor"/></svg>'},uu=["fuel","carb","bus","parts","radio","clear"],CS={fuel:1,carb:2,bus:3,parts:4,radio:5,clear:5},PS={AB:"the back gate",AC:"the Lot C gate",AD:"the Lot D gate",SD:"the side gate",BE:"the Lot E gate"},IS={AB:"BACK GATE",AC:"LOT C GATE",AD:"LOT D GATE",SD:"SIDE GATE",BE:"LOT E GATE"},wg={double:{t:"2\xD7 POINTS DROP",i:"x2",tl:!0},ammo:{t:"FULL MAGS DROP",i:"ammo",tl:!1}},vl={fuel:{icon:"can",item:"fuel can",items:"fuel cans",brief:"Find <em>3 fuel cans</em> and carry them to the <em>generator</em>",find:"Find a <em>fuel can</em>",bring:"Bring the can to the <em>generator</em>",itemLabel:"FUEL CAN",itemIcon:"can",padLabel:"GENERATOR",padIcon:"bolt"},carb:{icon:"gear",item:"carburetor",items:"carburetor",brief:"Grab the <em>carburetor</em> and install it on the <em>back-lot bench</em>",find:"Find the <em>carburetor</em>",bring:"Install it on the <em>back-lot bench</em>",itemLabel:"CARBURETOR",itemIcon:"gear",padLabel:"BACK-LOT BENCH",padIcon:"wrench"},bus:{icon:"hammer",brief:"Board up the <em>bus windows</em>: hold <em>E</em> at each one",find:"Hold <em>E</em> at each <em>bus window</em>",itemLabel:"BUS WINDOW",itemIcon:"hammer"},parts:{icon:"gear",item:"scrap part",items:"scrap parts",brief:"Collect <em>3 scrap parts</em> in Lot C and bring them to the <em>Lot C bench</em>",find:"Find a <em>scrap part</em> in Lot C",bring:"Bring it to the <em>Lot C bench</em>",itemLabel:"SCRAP PART",itemIcon:"gear",padLabel:"LOT C BENCH",padIcon:"wrench"},radio:{icon:"radio",brief:"Stand in the <em>radio ring</em> during a wave for <em>20 s</em>. Leaving drains the timer",padLabel:"RADIO",padIcon:"radio"},clear:{icon:"skull",brief:"Get <em>8 kills in Lot D</em>, including zombies at its windows",find:"Get <em>kills in Lot D</em>",padLabel:"LOT D",padIcon:"skull"}},hu=i=>Math.round(i).toLocaleString("en-US");function Uf(i,e,t){let n=uu.indexOf(i),s=uu[n+1];if(!s)return null;let r=(Bt.jobs.find(a=>a.id===i)||{}).area,o=(Bt.jobs.find(a=>a.id===s)||{}).area,c=t==="round"?r&&r===o?e+1:e:e+1;return{id:s,title:(Bt.jobs.find(a=>a.id===s)||{}).title||s,round:Math.max(CS[s],c)}}function LS(i,e){let t=No(e);if(!i||t.has(i))return null;let n={B:["AB"],C:["AC"],D:["AD","SD"],E:["BE"]}[i]||[];for(let s of n){let r=e.find(o=>o.id===s);if(r&&!r.open&&r.areas.some(o=>t.has(o)))return r}return t.has("B")?null:e.find(s=>s.id==="AB"&&!s.open)||null}function Ag(i){let{world:e,isTouch:t}=i,n=En("mission"),s=En("msIc"),r=En("msEb"),o=En("msGoal"),l=En("msPips"),c=En("msCount"),a=En("msRw"),h=En("wp"),u=En("wpLab"),d=En("wpDist"),f=En("wpIc"),p=En("objArrow"),v=En("oaLab"),g=En("oaDist"),m=En("oaIc"),y=En("oaChev"),w=En("mBan"),_=En("fx-edge"),E={},T=(Q,xe,Ee,ne)=>{E[xe]!==Ee&&(E[xe]=Ee,ne?Q.innerHTML=Ee:Q.textContent=Ee)},A=[],x="",b=0,M=new nt({color:new de(2.2,1.25,.35),transparent:!0,opacity:.85,depthWrite:!1,side:Ht,fog:!1,toneMapped:!1}),C=new me(new Zi(.62,.74,48),M);C.rotation.x=-Math.PI/2,C.position.y=.05,C.userData.noAO=!0,C.renderOrder=3;let O=new me(new Zi(1,1.06,48),M.clone());O.rotation.x=-Math.PI/2,O.position.y=.05,O.userData.noAO=!0,O.material.opacity=.35;let L=new Be;L.add(C,O),L.visible=!1,e.scene.add(L);let P=Bt.radio,D=new nt({color:new de(.15,2.2,1.4),transparent:!0,opacity:.55,depthWrite:!1,side:Ht,fog:!1,toneMapped:!1}),F=new me(new Zi(P-.12,P,96),D);F.rotation.x=-Math.PI/2;let B=new me(new Zi(P-.34,P-.16,96,1,0,.001),new nt({color:new de(2.4,1.4,.3),transparent:!0,opacity:.9,depthWrite:!1,side:Ht,fog:!1,toneMapped:!1}));B.rotation.x=-Math.PI/2,B.rotation.z=Math.PI/2;let q=new me(new Li(P-.12,64),new nt({color:new de(.05,.6,.4),transparent:!0,opacity:.12,depthWrite:!1,fog:!1,toneMapped:!1}));q.rotation.x=-Math.PI/2;let k=new Be;k.add(q,F,B),k.position.y=.04,k.visible=!1,k.traverse(Q=>{Q.userData.noAO=!0,Q.renderOrder=3}),e.scene.add(k);let W=-1,ee=new Map;for(let[Q,xe]of e.missionMeshes){let Ee=new li(new Qn({map:e.T&&e.T.glow,color:new de(2.4,1.4,.4),blending:ln,depthWrite:!1,transparent:!0,fog:!1}));Ee.scale.setScalar(1.3),Ee.position.y=Q.startsWith("b")?1.35:.35,Ee.userData.noAO=!0;let ne=new me(new Zi(.42,.5,32),M);ne.rotation.x=-Math.PI/2,ne.position.y=.04,ne.userData.noAO=!0,Q.startsWith("b")&&(ne.visible=!1),xe.add(Ee,ne),ee.set(Q,{h:Ee,r:ne})}let le=new N;function Me(Q,xe,Ee,ne){return le.set(Q,xe,Ee).project(ne),{behind:le.z>1,x:(le.x*.5+.5)*innerWidth,y:(-le.y*.5+.5)*innerHeight,nx:le.x,ny:le.y}}function te(Q){l.textContent="",A=[];for(let xe=0;xe<Q;xe++){let Ee=document.createElement("i");Ee.className="pip";let ne=document.createElement("b");Ee.appendChild(ne),l.appendChild(Ee),A.push(Ee)}l.classList.toggle("many",Q>6)}function ae(){n.classList.add("hidden"),h.classList.add("hidden"),p.classList.add("hidden"),L.visible=!1,k.visible=!1,_&&_.classList.remove("on");for(let Q in E)delete E[Q]}function Pe(Q,xe){if(!Q)return ae(),null;let Ee=vl[Q.id]||{},ne=!!(Q.carry&&Q.carry[xe.pid]),ue=Q.carry?Object.keys(Q.carry).length:0;n.classList.remove("hidden");let ve=uu.indexOf(Q.id)+1;T(s,"ic",Fr[Ee.icon]||Fr.star,!0),T(r,"eb",`Mission ${ve}/6 \xB7 ${Q.title}`);let fe=null,Se="",Ve="bolt",He="",et="",tt=()=>{let Te=null,_e=1e9;for(let ye of Q.items)if(!ye.done&&!ye.carried){let De=Math.hypot(xe.P.x-ye.x,xe.P.z-ye.z);De<_e&&(_e=De,Te=ye)}return Te};if(Q.kind==="carry")ne?(fe=Q.pad,Se=Ee.padLabel,Ve=Ee.padIcon,He=Ee.bring):(fe=tt()||Q.pad,Se=tt()?Ee.itemLabel:Ee.padLabel,Ve=tt()?Ee.itemIcon:Ee.padIcon,He=tt()?Ee.find:"A teammate has it: <em>cover them</em>");else if(Q.kind==="board")fe=tt()||Q.pad,Se=Ee.itemLabel,Ve=Ee.itemIcon,He=Ee.find;else if(Q.kind==="radio"){fe=Q.pad,Se=Ee.padLabel,Ve=Ee.padIcon;let Te=Math.hypot(xe.P.x-Q.pad.x,xe.P.z-Q.pad.z)<=P;He=xe.phase!=="round"?Te?"Wait in the <em>ring</em> for the next wave":"Go to the <em>radio ring</em>":Te?"Hold the <em>radio ring</em>!":"Get back in the <em>ring</em>! Timer draining",et=xe.phase!=="round"?"Counts <b>during waves</b>":Te?"<b>Holding\u2026</b>":"<b>Draining</b>"}else Q.kind==="clear"&&(fe=Q.pad,Se=Ee.padLabel,Ve=Ee.padIcon,He=Ee.find);let z=LS(Fi(fe.x,fe.z,"junkyard"),xe.doors);if(z){let Te=z.stand?Object.values(z.stand).reduce((_e,ye)=>Math.hypot(xe.P.x-ye.x,xe.P.z-ye.z)<Math.hypot(xe.P.x-_e.x,xe.P.z-_e.z)?ye:_e):z;fe={x:Te.x,z:Te.z},Se=IS[z.id]||"GATE",Ve="lock",He=`Open <em>${PS[z.id]||"the gate"}</em> (${hu(xe.price(z))}) to get there`}T(o,"goal",He,!0);let vt=Q.kind==="radio",ot=vt?10:Q.need,U=Q.id+ot;x!==U&&(x=U,te(ot));let S=Math.min(Q.need,Q.have);for(let Te=0;Te<ot;Te++){let _e=A[Te],ye="",De=0;if(vt){let We=Q.need/ot;De=Math.max(0,Math.min(1,(S-Te*We)/We)),ye=De>=1?"on":De>0?"part":""}else ye=Te<Math.floor(S)?"on":Te<Math.floor(S)+ue&&Q.kind==="carry"?"go":"";_e._st!==ye&&(_e._st=ye,_e.className="pip "+ye),vt&&_e._f!==De&&(_e._f=De,_e.firstChild.style.width=Math.round(De*100)+"%")}T(c,"cnt",Q.kind==="radio"?`${Math.floor(S)}/${Q.need}s`:`${Math.floor(S)}/${Q.need}`);let V=Math.hypot(xe.P.x-fe.x,xe.P.z-fe.z),Y=V<1.5?"HERE":Math.round(V)+" m",J=Me(fe.x,Q.kind==="board"&&!z?2.2:1.3,fe.z,xe.cam),be=t?60:70,Ce=!J.behind&&J.x>be&&J.x<innerWidth-be&&J.y>be&&J.y<innerHeight-be*.6,oe="";if(Ce){h.classList.remove("hidden"),p.classList.add("hidden"),_&&_.classList.remove("on"),h.style.left=J.x+"px",h.style.top=J.y+"px";let Te=Math.max(.62,Math.min(1,9/Math.max(9,V))*1);h.style.setProperty("--k",Te.toFixed(3)),T(u,"wl",Se),T(d,"wd",Y),T(f,"wi",Fr[Ve]||Fr.bolt,!0),h.classList.toggle("close",V<2.5)}else{h.classList.add("hidden"),p.classList.remove("hidden");let Te=J.behind?-J.nx:J.nx,_e=J.behind?-J.ny:J.ny;J.behind&&Math.abs(Te)<.2&&(Te=Te<0?-1:1);let ye=Math.atan2(-_e,Te),De=innerWidth/2,We=innerHeight/2,st=t?92:120,G=innerHeight-150,Le=t?170:120,he=innerWidth-(t?250:150),Re=Math.cos(ye),Ne=Math.sin(ye),ge=1e9;Re>.001&&(ge=Math.min(ge,(he-De)/Re)),Re<-.001&&(ge=Math.min(ge,(Le-De)/Re)),Ne>.001&&(ge=Math.min(ge,(G-We)/Ne)),Ne<-.001&&(ge=Math.min(ge,(st-We)/Ne));let Qe=De+Re*ge,qe=We+Ne*ge;p.style.left=Qe+"px",p.style.top=qe+"px",y.style.transform=`rotate(${ye}rad)`,p.classList.toggle("left",Re<0),T(v,"al",Se),T(g,"ad",Y),T(m,"ai",Fr[Ve]||Fr.bolt,!0),oe=J.behind&&Math.abs(J.nx)<.35?"Turn <b>around \u27F2</b>":Re<0?"<b>\u25C0 Turn</b> left":"Turn <b>right \u25B6</b>",_&&(_.classList.add("on"),_.classList.toggle("l",Re<0))}let ce=Q.gate&&(Bt.gates.find(Te=>Te.id===Q.gate)||{}).name||"";T(a,"rw",oe||et||`Reward <b>+${hu(Q.pts)}${ce?" \xB7 "+ce:""}</b>`,!0),L.visible=!(Q.kind==="radio"&&!z),L.position.set(fe.x,0,fe.z);let Ie=1+.12*Math.sin(xe.time*4);if(C.scale.setScalar(Ie),O.scale.setScalar(1+xe.time*.8%1*.8),O.material.opacity=.45*(1-xe.time*.8%1),k.visible=Q.kind==="radio",k.visible){k.position.set(Q.pad.x,.04,Q.pad.z);let Te=Math.min(1,S/Q.need);Math.abs(Te-W)>.004&&(W=Te,B.geometry.dispose(),B.geometry=new Zi(P-.34,P-.16,96,1,0,Math.max(.001,Te*Math.PI*2)));let _e=Math.hypot(xe.P.x-Q.pad.x,xe.P.z-Q.pad.z)<=P;D.color.setRGB(_e?.15:2.4,_e?2.2:.5,_e?1.4:.2),D.opacity=.45+.25*Math.sin(xe.time*(_e?3:7))}for(let[Te,_e]of ee){let ye=.75+.25*Math.sin(xe.time*5+Te.length);_e.h.material.opacity=ye,_e.r.scale.setScalar(1+.15*Math.sin(xe.time*4))}return fe}function Z(Q,xe,Ee){document.body.dataset.mban=String(performance.now()+Ee-600),w.className="mBan "+Q,w.innerHTML=xe,w.offsetWidth,w.classList.add("on"),clearTimeout(b),b=setTimeout(()=>w.classList.remove("on"),Ee)}let re=(Q,xe,Ee)=>`<span class="chip${Ee?" tl":""}">${Fr[Q]||""}${xe}</span>`;function Ae(Q){let xe=Bt.jobs.find(fe=>fe.id===Q);if(!xe)return;let Ee=vl[Q]||{},ne=uu.indexOf(Q)+1,ue=xe.gate?(Bt.gates.find(fe=>fe.id===xe.gate)||{}).name:"",ve=wg[xe.power];Z("start",`<i class="stripe t"></i><i class="stripe b"></i><div class="e">NEW MISSION \xB7 ${ne} OF 6</div><div class="ttl">${xe.title.toUpperCase()}</div><div class="g">${Ee.brief||""}</div><div class="chips">${re("star","+"+hu(xe.pts)+" PTS")}${ue?re("gate","OPENS "+ue.toUpperCase()):""}${ve?re(ve.i,ve.t,ve.tl):""}</div>`,5200)}function Xe(Q,xe={}){let Ee=Bt.jobs.find(Se=>Se.id===Q);if(!Ee)return;let ne=Ee.gate?(Bt.gates.find(Se=>Se.id===Ee.gate)||{}).name:"",ue=xe.next,ve=wg[Ee.power];Z("done",`<i class="stripe t"></i><i class="stripe b"></i><div class="stamp">MISSION COMPLETE</div><div class="row1"><span class="big">${Ee.title.toUpperCase()}</span><span class="pts">+${hu(xe.pts||Ee.pts)}</span></div><div class="chips">${ne?re("gate",ne.toUpperCase()+" GATE OPEN",!0):""}${re("ammo","AMMO REFILLED")}${ve?re(ve.i,ve.t.replace("DROP","DROPPED"),ve.tl):""}</div><div class="next">${ue?`NEXT MISSION \xB7 ${ue.title.toUpperCase()} \xB7 UNLOCKS AFTER ROUND ${ue.round}`:"ALL 6 MISSIONS DONE \xB7 THE YARD IS YOURS"}</div>`,4600);let fe=En("fx-mflash");fe&&(fe.classList.remove("on"),fe.offsetWidth,fe.classList.add("on"))}return{frame:Pe,start:Ae,complete:Xe,hide:ae}}var Of=[{id:"fuel",wave:1},{id:"carb",wave:2},{id:"bus",wave:3},{id:"parts",wave:4},{id:"radio",wave:5},{id:"clear",wave:5}];function DS(i){let e=Bt.jobs[i];return e?{index:i,id:e.id,title:e.title,kind:e.kind,gate:e.gate||"",area:e.area,need:e.need,pts:e.pts,power:e.power||"",pad:{x:e.pad.x,z:e.pad.z},have:0,items:(e.items||[]).map(t=>({id:t.id,x:t.x,z:t.z,done:!1,carried:null})),carry:{}}:null}function Rg(i){let{world:e,P:t,G:n,sfx:s,banner:r,toast:o,popText:l,spawnPower:c}=i,a={mode:"sp",job:null,pid:"you",unlocked:[],done:new Set,gap:!1,gapWave:0,lastArea:"",waves:0},h=Ag({world:e,isTouch:document.body.classList.contains("touch")}),u=()=>i.phase?i.phase():n.phase,d=L=>vl[L.id]&&vl[L.id].item||"item";function f(){let L=new Set;if(a.job)for(let P of a.job.items)!P.done&&!P.carried&&L.add(P.id);for(let[P,D]of e.missionMeshes){let F=a.job&&a.job.items.find(B=>B.id===P);D.visible=L.has(P),F&&D.visible&&(D.position.x=F.x,D.position.z=F.z)}}function p(L){a.job=DS(L),f(),!a.job&&a.mode==="sp"&&o("All objectives complete")}function v(){if(a.job||a.gap||a.mode!=="sp"||e.mapId!=="junkyard")return!1;let L=Of.find(P=>a.unlocked.includes(P.id)&&!a.done.has(P.id));return L?(p(Bt.jobs.findIndex(P=>P.id===L.id)),!!a.job):!1}function g(L){if(a.mode!=="sp"||e.mapId!=="junkyard")return!1;a.waves=Math.max(a.waves,L|0);for(let P of Of)P.wave<=a.waves&&!a.unlocked.includes(P.id)&&a.unlocked.push(P.id);if(a.gap){let P=Of.find(B=>a.unlocked.includes(B.id)&&!a.done.has(B.id)),D=P&&Bt.jobs.find(B=>B.id===P.id);(!!(D&&D.area===a.lastArea)?a.waves>a.gapWave:a.waves>=a.gapWave)&&(a.gap=!1)}return v()?(h.start(a.job.id),s.announce?.(s.lineFor?.("mission",a.job.id,n.round)),!0):!1}function m(){let L=a.job;if(!L||a.mode!=="sp")return;let P=L.gate&&e.doors.find(F=>F.id===L.gate);P&&!P.open&&(P.open=!0);let D=L.pts*(n.double>0?2:1);t.pts+=D;for(let F of t.slots)F&&i.weapons[F.id]&&(F.mag=i.weapons[F.id].mag,F.reserve=i.weapons[F.id].reserve);L.power&&c(L.power,L.pad.x,L.pad.z),l("+"+D),h.complete(L.id,{pts:D,next:Uf(L.id,n.round,n.phase)}),s.cash(),P&&s.door(),s.announce?.(s.lineFor?.("done",L.id,n.round)),a.done.add(L.id),a.lastArea=L.area,a.gap=!0,a.gapWave=n.round,a.job=null,f()}function y(){a.mode="sp",a.pid="you",a.job=null,a.unlocked=[],a.done=new Set,a.gap=!1,a.gapWave=0,a.lastArea="",a.waves=0,f()}function w(L){if(a.mode!=="sp"||!a.job||n.state!=="playing")return;let P=a.job;if(P.kind==="carry"&&!P.carry.you){let D=null,F=Bt.pickup;for(let B of P.items)if(!B.done&&!B.carried){let q=Math.hypot(t.x-B.x,t.z-B.z);q<=F&&(F=q,D=B)}D&&(D.carried="you",P.carry.you=D.id,s.click(0,880,.28),o(`Picked up ${d(P)}`+(P.need>1?` (${P.have+1}/${P.need})`:"")))}else if(P.kind==="radio"&&n.phase==="round"){let D=Math.hypot(t.x-P.pad.x,t.z-P.pad.z)<=Bt.radio;P.have=D?P.have+L:Math.max(0,P.have-L*Bt.decay)}P.have>=P.need&&m(),f()}function _(){let L=a.job;if(!L||a.mode!=="sp")return!1;if(L.kind==="carry"){if(!L.carry.you)return o("Pick it up first"),!1;if(Math.hypot(t.x-L.pad.x,t.z-L.pad.z)>Bt.deliver)return!1;let P=L.items.find(D=>D.id===L.carry.you);return P&&(P.done=!0,P.carried=null),delete L.carry.you,L.have++,s.repair(),L.have>=L.need?m():(f(),o(`Delivered ${d(L)} (${L.have}/${L.need})`)),!0}if(L.kind==="board"){let P=L.items.find(D=>!D.done&&Math.hypot(t.x-D.x,t.z-D.z)<=Bt.board);return P?(P.done=!0,L.have++,s.repair(),L.have>=L.need?m():(f(),o(`Window boarded (${L.have}/${L.need})`)),!0):!1}return!1}function E(L){if(a.mode!=="sp"||!a.job||a.job.kind!=="clear"||!L)return;let P=L.win,D=!!(P&&P.area===a.job.area&&Math.hypot(L.pos.x-P.c.x,L.pos.z-P.c.z)<12);Fi(L.pos.x,L.pos.z,e.mapId)!==a.job.area&&!D||(a.job.have++,a.job.have>=a.job.need&&m())}function T(){if(a.mode!=="sp"||!a.job||!a.job.carry.you)return;let L=a.job.items.find(P=>P.id===a.job.carry.you);L&&!L.done&&(L.x=t.x,L.z=t.z,L.carried=null),delete a.job.carry.you,f()}function A(L,P,D,F){a.mode="net",a.pid=F||a.pid;let B=a.job,q=!!(B&&B.carry&&B.carry[a.pid]);if(!L){a.job=null,f();return}let k=Bt.jobs.find(le=>le.id===L[0]);if(!k){a.job=null,f();return}let W={};for(let le of D||[])W[le[0]]=le[1];let ee=new Set(Object.values(W));a.job={index:Bt.jobs.indexOf(k),id:k.id,title:k.title,kind:k.kind,gate:k.gate||"",area:k.area,need:L[2],pts:k.pts,power:k.power||"",pad:{x:L[3],z:L[4]},have:L[1],carry:W,items:(P||[]).filter(le=>!ee.has(le[0])).map(le=>({id:le[0],x:le[1],z:le[2],done:!1,carried:null}))},B&&B.id===k.id&&!q&&W[a.pid]?o(`Picked up ${d(a.job)}`+(a.job.need>1?` (${a.job.have+1}/${a.job.need})`:"")):B&&B.id===k.id&&a.job.kind!=="radio"&&a.job.have>B.have&&a.job.have<a.job.need&&o(`${a.job.kind==="clear"?"Lot D kills":a.job.kind==="board"?"Window boarded":"Delivered "+d(a.job)} (${a.job.have}/${a.job.need})`),f()}function x(L){if(!L||L.e!=="mission")return;let P=Bt.jobs.find(D=>D.id===L.id);if(L.start){h.start(L.id),s.announce?.(s.lineFor?.("mission",L.id,n.round));return}h.complete(L.id,{pts:L.pts,next:Uf(L.id,n.round,u())}),s.announce?.(s.lineFor?.("done",L.id,n.round)),s.cash(),P&&P.gate&&s.door();for(let D of t.slots)D&&i.weapons[D.id]&&(D.mag=i.weapons[D.id].mag,D.reserve=i.weapons[D.id].reserve)}function b(L,P){let D=a.job;if(!D)return null;if(D.kind==="board"){let F=null;for(let B of D.items)if(!B.done&&!B.carried){let q=Math.hypot(L-B.x,P-B.z);q<=Bt.board&&(!F||q<F.d)&&(F={d:q,name:"Board this window"})}return F&&{type:"job",d:F.d,hold:!0,name:F.name}}if(D.kind==="carry"&&D.carry[a.pid]){let F=Math.hypot(L-D.pad.x,P-D.pad.z);if(F<=Bt.deliver)return{type:"job",d:F,hold:!1,name:D.id==="carb"?"Install the carb":"Deliver"}}return null}function M(L){return L?a.job&&a.job.gate===L.id?Math.floor(L.price*Bt.discount):L.price:0}function C(){let L=a.job;if(!L)return null;if(L.carry&&L.carry[a.pid])return L.pad;let P=null,D=1e9;for(let F of L.items)if(!F.done&&!F.carried){let B=Math.hypot((t.x||0)-F.x,(t.z||0)-F.z);B<D&&(D=B,P=F)}return P||L.pad}function O(L){if(!(n.state==="playing"&&a.job&&e.mapId==="junkyard")){h.hide(),e.marker=null;return}e.marker=h.frame(a.job,{pid:a.pid,P:t,phase:u(),doors:e.doors,cam:L,time:n.time,price:M})||C()}return y(),{reset:y,update:w,use:_,onKill:E,drop:T,applyNet:A,onNetEvent:x,onWave:g,focus:b,price:M,frame:O,get job(){return a.job}}}var NS=5,US=16,Ff=4.6,Bf=14;function Cg(i){let{scene:e,world:t,fx:n}=i,s=new Map,r=new Map,o=[],l=0,c=1,a=new Je({color:9048088,roughness:.45,metalness:.2}),h=new Je({color:16722490,roughness:.3,emissive:4849672,emissiveIntensity:.6});function u(_){let E=r.get(_);if(E)return E;E=new Be;let T=new me(new _n(.16,10,8),a),A=new me(new Ft(.05,.05,.08,6),h);A.position.y=.16;let x=new _i(16720452,0,3.5);return x.position.y=.2,E.add(T,A,x),E.userData.light=x,e.add(E),r.set(_,E),E}function d(_){let E=r.get(_);E&&(e.remove(E),r.delete(_))}function f(_,E){for(let T=0;T<7;T++){let A=new me(new Li(.18+Math.random()*.45,6),new nt({color:6948880,transparent:!0,opacity:.85,depthWrite:!1}));A.rotation.x=-Math.PI/2,A.position.set(_+(Math.random()-.5)*3.2,.04,E+(Math.random()-.5)*3.2),A.rotation.z=Math.random()*6,e.add(A),o.push({s:A,t:6+Math.random()*4})}n.dust?.(new N(_,.4,E),{x:0,y:1,z:0},10,[.6,.05,.08])}function p(_,E,T,A,x){let b=Math.max(-1.1,Math.min(.9,x||0)),M=Math.cos(b),C={id:c++,x:_,y:E,z:T,vx:-Math.sin(A)*M*Bf,vy:Math.sin(b)*Bf+2.2,vz:-Math.cos(A)*M*Bf,fuse:NS,landed:!1};return s.set(C.id,C),C}function v(_){let E=new Set;for(let T of _||[]){let[A,x,b,M,C,O]=T;E.add(A);let L=s.get(A);s.set(A,{id:A,x,y:b,z:M,landed:!!C,fuse:O,vx:0,vy:0,vz:0})}for(let T of[...s.keys()])E.has(T)||(s.get(T)?.fuse<=.2&&f(s.get(T).x,s.get(T).z),s.delete(T),d(T))}function g(_,E){if(s.delete(_.id),d(_.id),f(_.x,_.z),t.bait=null,i.sfx?.boom?.(),!E)return;let T=i.zombies;if(T)for(let x of T.list){if(x.state==="dead"||x.state==="dying")continue;let b=Math.hypot(x.pos.x-_.x,x.pos.z-_.z);if(b>Ff)continue;let M=200*(1-b/Ff)+50;T.damage(x,M,!1)?.killed&&i.onKill?.(x)}let A=i.P;if(A){let x=Math.hypot(A.x-_.x,A.z-_.z);x<3.2&&i.onSelf?.(55*(1-x/3.2))}}function m(_){l-=_;let E=null;for(let A of[...s.values()])if(A.fuse!=null){if(A.fuse-=_,!A.landed&&A.vx!=null){let x=A.x,b=A.z;if(A.vy-=18*_,A.x+=A.vx*_,A.y+=A.vy*_,A.z+=A.vz*_,t.ray){let M=(t.segBlock,null)}if(typeof t.resolve=="function"){let M={x:A.x,z:A.z},C=Math.hypot(A.x-x,A.z-b);t.resolve(M,.16)&&C>.01&&(A.x=x,A.z=b,A.vx*=-.25,A.vz*=-.25)}A.y<=.16&&(A.y=.16,A.landed=!0,A.vx=A.vz=A.vy=0)}A.fuse<=0?g(A,!0):A.landed&&(!E||A.fuse<E.fuse)&&(E=A)}t.bait=E?{x:E.x,z:E.z}:null;let T=[...s.values()].reduce((A,x)=>Math.min(A,x.fuse??9),9);T<5&&l<=0&&s.size&&(i.sfx?.beep?.(T),l=T<1.2?.14:T<2.5?.28:.55);for(let A=o.length-1;A>=0;A--)o[A].t-=_,o[A].s.material.opacity=Math.max(0,o[A].t/8),o[A].t<=0&&(e.remove(o[A].s),o.splice(A,1))}function y(){for(let _ of s.values()){let E=u(_.id);E.position.set(_.x,Math.max(.16,_.y||.16),_.z),E.rotation.y+=.02;let T=_.fuse??5;E.userData.light.intensity=_.landed?(T<1.2?6:1.5)*(.5+.5*Math.sin(T*18)):.4}}function w(){for(let _ of[...r.keys()])d(_);s.clear(),t.bait=null}return{throwLocal:p,sync:v,step:m,frame:y,reset:w,splatter:f,items:s,BLAST:Ff,LURE:US}}var du={junkyard:{id:"junkyard",name:"Junkyard",blurb:"The original yard",cap:[16,26],spawn:{x:0,z:12}},motel:{id:"motel",name:"Salt Motel",blurb:"Tight courtyard, close quarters",cap:[12,20],spawn:{x:0,z:0}},drivein:{id:"drivein",name:"Drive-In",blurb:"Wide open lot, big hordes",cap:[18,30],spawn:{x:0,z:18}}},zf=i=>du[i]||du.junkyard,kf=class i extends xl{constructor(e,t,n,s){i.prototype._def=s,super(e,t,n)}lamps_(e){for(let[t,n,s,r]of e){let o=hl(this.M,!!s);o.position.set(t,0,n),o.rotation.y=r,o.traverse(c=>{c.isMesh&&(c.castShadow=!c.userData.bulb)}),o.updateMatrixWorld(!0),this.addCol(t-.2,t+.2,n-.2,n+.2,5);let l=o.userData.bulbPos.clone().applyMatrix4(o.matrixWorld);this.lamps.push({pos:l,teal:!!s,ph:$(100)}),this.staticGroup.add(o)}}floor(e,t,n,s){this.box(e,.03,t,n,0,s,this.M.concrete,{cast:!1})}build(){this.mapId=this._def.id||"motel";let e=this._def.L,t=this.M,n=3.2,s=.4;this.buildSky(),this.buildGround();let r=(d,f,p,v=[],g=t.fence)=>this.wall("x",d,f,p,v,n,s,g),o=(d,f,p,v=[],g=t.fence)=>this.wall("z",d,f,p,v,n,s,g),{w:l,s:c,n:a,wb:h}=e;r(c,-l,l,e.south),o(l,In,c,e.eastA),o(-l,In,c,e.westA),r(In,-l,l,[{c:0,id:"DOOR",door:!0,w:6}]),h!==l&&(r(In,l,h),r(In,-h,-l)),o(h,a,In,e.eastB),o(-h,a,In,e.westB),r(a,-h,h,e.north),this.floor(2*l,c-In,0,(c+In)/2),this.floor(2*h,In-a,0,(In+a)/2),this.buildGate();let u=this.place.bind(this);for(let[d,f,p,v,g,m]of e.props)u(d==="bus"?Mi(t,f,15129792,m||{}):d==="beetle"?fi(t,f,m||{}):d==="tires"?cl(t,f):d==="drum"?js(t,f):Yn(t,f),p,v,g||0);for(let d of e.shacks||[])this.shack(...d);this.lamps_(e.lamps);for(let d of e.buys)this.wallBuy(...d);this.buildCrate(...e.crate),this.scenery(),this.buildLights()}},OS={motel:{w:16,s:6,n:-44,wb:18,south:[{c:-7,id:"S1"},{c:7,id:"S2"}],eastA:[{c:-10,id:"E1"}],westA:[{c:-14,id:"W1"}],eastB:[{c:-36,id:"E2"}],westB:[{c:-32,id:"W2"}],north:[{c:6,id:"N1"}],props:[["beetle",6010272,-9,-4,0],["bus",14252330,10,-12,Math.PI/2],["tires",4,-12,-16],["drum",3829413,12,2],["drum",11680302,13,3],["crate",1.1,-13,2],["beetle",13619140,-10,-34,Math.PI/2,{missing:!0}],["bus",9087050,8,-38,0],["tires",5,14,-28],["crate",1,-15,-41]],shacks:[[0,-10,8,3]],lamps:[[-14,-20,0,.2],[14,-20,1,2.9],[-8,2,0,.5],[9,-6,1,2.6],[-6,-18,0,0],[0,-34,1,1.2],[12,-42,0,3]],buys:[["smg",-10,In+.25,0],["akimbo",8,In+.25,0],["nade",-2,2,Math.PI],["shotgun",15.75,-4,-Math.PI/2],["rifle",-17.75,-36,Math.PI/2]],crate:[-12,-8]},drivein:{w:32,s:22,n:-50,wb:32,south:[{c:-18,id:"S1"},{c:0,id:"S2"},{c:18,id:"S3"}],eastA:[{c:6,id:"E1"},{c:-14,id:"E1b"}],westA:[{c:8,id:"W1"},{c:-12,id:"W1b"}],eastB:[{c:-38,id:"E2"}],westB:[{c:-40,id:"W2"}],north:[{c:-14,id:"N1"},{c:14,id:"N2"}],props:[["bus",6197184,-18,4,0],["bus",11680302,18,4,0],["beetle",14733722,-8,-6,0],["beetle",6010272,8,-6,0,{door:!0}],["beetle",14252330,0,8,Math.PI/2],["tires",5,-26,14],["tires",3,26,-16],["drum",14252330,24,16],["crate",1.2,-26,-16],["bus",9087050,-14,-38,Math.PI/2],["beetle",13619140,14,-36,0,{missing:!0}],["tires",4,0,-44],["crate",1,26,-46]],shacks:[[0,-16,10,4]],lamps:[[-24,18,0,.6],[24,18,0,2.6],[-20,-8,1,0],[20,-8,1,3],[0,0,0,1],[-20,-36,0,.3],[20,-44,1,3]],buys:[["smg",-14,In+.25,0],["akimbo",6,In+.25,0],["nade",2,8,0],["shotgun",31.75,-4,-Math.PI/2],["rifle",-31.75,-30,Math.PI/2]],crate:[-24,4]}};function Pg(i,e,t,n){let s=zf(n);return s.id==="junkyard"?new xl(i,e,t):new kf(i,e,t,{L:OS[s.id],id:s.id})}var Ig={easy:{id:"easy",name:"Easy",count:.7,hp:.75,speed:.85,dmg:.6,drop:2,maxDrops:3,inter:10,spawnGap:1.3,brute:.5,startPts:750},medium:{id:"medium",name:"Medium",count:1,hp:1,speed:1,dmg:1,drop:1,maxDrops:2,inter:7,spawnGap:1,brute:1,startPts:500},hard:{id:"hard",name:"Hard",count:1.35,hp:1.3,speed:1.15,dmg:1.4,drop:.6,maxDrops:1,inter:5,spawnGap:.75,brute:1.6,startPts:400}};function Hf(i,e=1){e=Math.max(1,Math.min(4,e|0));let t=[1,1.6,2.2,2.8][e-1];return{...i,count:i.count*t,hp:i.hp*(1+.1*(e-1))}}function Gf(i){return Ig[i]||Ig.medium}var Hn={torso:new rt(.52,.62,.3),hip:new rt(.46,.2,.28),leg:new rt(.2,.9,.22),arm:new rt(.15,.62,.16),head:new br(.27,1),eye:new rt(.07,.04,.03),jaw:new rt(.2,.08,.16),rag:new rt(.12,.28,.03),hand:new rt(.17,.14,.17)},Lg=new nt({color:new de(1.7,.22,.1),toneMapped:!1}),Dg=new Je({color:7213080,roughness:.6}),kS=new Je({color:1708564,roughness:1}),zS=[6191698,6980704,5798498,7439722,5206104],HS=[8007471,3099258,5921322,3816004,9071146,2068344,11687466],GS=[2764602,3813156,2106922,2898474],Vf=class{constructor(){this.root=new Be,this.sk=new Je({roughness:.75,emissive:0}),this.sh=new Je({roughness:.95,emissive:0}),this.pa=new Je({roughness:.95,emissive:0});let e=(o,l,c,a,h)=>{let u=new me(o,l);return u.position.set(c,a,h),u.castShadow=!0,u};this.pelvis=new Be,this.pelvis.position.y=.95,this.root.add(this.pelvis),this.legL=new Be,this.legL.position.set(-.13,0,0),this.legL.add(e(Hn.leg,this.pa,0,-.45,0)),this.legR=new Be,this.legR.position.set(.13,0,0),this.legR.add(e(Hn.leg,this.pa,0,-.45,0)),this.pelvis.add(this.legL,this.legR,e(Hn.hip,this.pa,0,0,0)),this.upper=new Be,this.pelvis.add(this.upper),this.upper.add(e(Hn.torso,this.sh,0,.36,0));let t=e(Hn.rag,this.sh,.12,0,.15);t.rotation.z=.2;let n=e(Hn.rag,this.sh,-.1,.02,-.15);n.rotation.z=-.15,this.upper.add(t,n);let s=e(Hn.rag,Dg,-.1,.45,.155);s.scale.set(1.6,1,1),s.rotation.z=.5;let r=e(Hn.rag,Dg,.14,.2,.156);r.scale.set(1,.7,1),this.upper.add(s,r),this.head=new Be,this.head.position.set(0,.88,.03),this.head.add(e(Hn.head,this.sk,0,0,0)),this.head.add(e(Hn.eye,Lg,-.1,.04,.24),e(Hn.eye,Lg,.1,.04,.24),e(Hn.jaw,kS,0,-.14,.18)),this.head.scale.set(1.05,1.1,1),this.upper.add(this.head),this.armL=new Be,this.armL.position.set(-.35,.58,0),this.armL.add(e(Hn.arm,this.sk,0,-.28,0),e(Hn.hand,this.sk,0,-.64,0)),this.armR=new Be,this.armR.position.set(.35,.58,0),this.armR.add(e(Hn.arm,this.sk,0,-.28,0),e(Hn.hand,this.sk,0,-.64,0)),this.upper.add(this.armL,this.armR),this.root.visible=!1,this.state="dead",this.pos=this.root.position}},pu=class{constructor(e,t,n){this.world=t,this.scene=e,this.list=[],this.max=n>0?26:16;for(let s=0;s<this.max+4;s++){let r=new Vf;e.add(r.root),this.list.push(r)}this.alive=0,this.t=0,this.hooks={}}setTier(e){this.max=e>0?26:16}reset(){for(let e of this.list)e.state="dead",e.root.visible=!1;this.alive=0}stats(e){let t=e<10?80+35*e:430*Math.pow(1.1,e-9),n=Math.min(5,1.5+e*.24);return{hp:t,sp:n}}spawn(e,t,n=!1){let s=this.list.find(c=>c.state==="dead"&&!c.root.visible);if(!s)return null;let r=this.stats(t),o=t>=3&&Math.random()<Math.min(.55,(t-2)*.09);s.brute=n,s.scale=n?1.38:$(.94,1.06),s.root.scale.setScalar(s.scale),s.maxHp=s.hp=r.hp*(n?3.3:1),s.speed=r.sp*$(.82,1.12)*(o?1.45:1)*(n?.78:1),s.speed=Math.min(s.speed,6),s.runner=o,s.dmg=n?44:22,s.value=n?150:60,s.sk.color.setHex(n?10121050:wn(zS)),s.sh.color.setHex(wn(HS)),s.pa.color.setHex(wn(GS));for(let c of[s.sk,s.sh,s.pa])c.emissive.setHex(0);s.win=e,s.state="approach",s.slot=$(-1.2,1.2),s.phase=$(tn),s.attackT=0,s.cool=0,s.stuck=0,s.stuckTot=0,s.side=1,s.flash=0,s.hitT=0,s.groanT=$(1,4),s.dieT=0,s.climbT=0,s.chk=0,s.chkX=0,s.chkZ=0,s.limp=Math.random()<.3,s.lane=$(-.55,.55);let l=$(4,9);return s.pos.set(e.out.x+e.n.x*l+e.t.x*$(-3,3),0,e.out.z+e.n.z*l+e.t.z*$(-3,3)),s.yaw=Math.atan2(-e.n.x,-e.n.z),s.root.rotation.set(0,s.yaw,0),s.root.visible=!0,s.pelvis.rotation.set(0,0,0),s.root.position.y=0,this.alive++,s}rayHit(e,t,n){let s=null;for(let r of this.list){if(r.state==="dead"||r.state==="dying")continue;let o=r.scale,l={x:r.pos.x,y:(r.climbY||0)+1.66*o,z:r.pos.z},c=.3*o,a=VS(e,t,l,c),h=null,u=e.x-r.pos.x,d=e.z-r.pos.z,f=t.x*t.x+t.z*t.z,p=.42*o;if(f>1e-8){let m=2*(u*t.x+d*t.z),y=u*u+d*d-p*p,w=m*m-4*f*y;if(w>=0){let _=Math.sqrt(w);for(let E of[(-m-_)/(2*f),(-m+_)/(2*f)])if(E>0){let T=e.y+t.y*E-(r.climbY||0);if(T>=0&&T<=1.45*o){h=E;break}}}}else u*u+d*d<p*p&&(h=.01);let v=null,g=!1;a!==null&&(h===null||a<=h+.15)?(v=a,g=!0):h!==null&&(v=h),v!==null&&v<n&&(!s||v<s.t)&&(s={z:r,t:v,head:g})}return s}damage(e,t,n,s,r){if(e.state==="dead"||e.state==="dying")return null;e.hp-=t,e.flash=.2,e.hitT=.22;let o=e.hp<=0;return o?(e.state="dying",e.dieT=0,this.alive--,e.dieDir=$(-.4,.4)):e.state==="attack"||e.state,{killed:o,head:n}}killAll(){let e=[];for(let t of this.list)t.state!=="dead"&&t.state!=="dying"&&(t.hp=0,t.state="dying",t.dieT=0,t.dieDir=$(-.4,.4),this.alive--,e.push(t));return e}update(e,t,n,s,r){let o=this.world;this.t=t;for(let c of o.windows)c.cool>0&&(c.cool-=e);let l=Fi(n.x,n.z,o.mapId);for(let c=0;c<this.list.length;c++){let a=this.list[c];if(a.state==="dead")continue;let h=a.scale;if(a.flash>0){a.flash-=e;let M=Math.max(0,a.flash/.2);for(let C of[a.sk,a.sh,a.pa])C.emissive.setRGB(1.15*M,.16*M,.05*M)}if(a.state==="dying"){a.dieT+=e;let M=Math.min(1,a.dieT/.55);a.pelvis.rotation.x=-M*1.5*(1-.1),a.pelvis.rotation.z=a.dieDir*M,a.pelvis.position.y=.95-M*.55,a.armL.rotation.x=-1.4+M*2.2,a.armR.rotation.x=-1.4+M*2.2,a.dieT>2.2&&(a.root.position.y=-(a.dieT-2.2)*.9),a.dieT>3.2&&(a.state="dead",a.root.visible=!1,a.root.position.y=0,a.pelvis.position.y=.95,a.pelvis.rotation.set(0,0,0));continue}if(a.groanT-=e,a.groanT<=0){a.groanT=$(2.5,6);let M=a.pos.x-n.x,C=a.pos.z-n.z,O=Math.hypot(M,C);O<40&&r.groan?.(a,O)}let u=0,d=0,f=0,p=n.x,v=n.z;if(a.state==="approach"){let M=a.win,C=M.out.x+M.t.x*a.slot*.8,O=M.out.z+M.t.z*a.slot*.8,L=C-a.pos.x,P=O-a.pos.z,D=Math.hypot(L,P);D<.25?(a.state=M.count>0?"attack":"climb",a.climbT=0,a.cool=$(.6,1.6)):(u=L/D,d=P/D,f=a.speed,a.pos.x+=u*f*e,a.pos.z+=d*f*e,a.yaw=fu(a.yaw,Math.atan2(u,d),Math.min(1,e*8)))}else if(a.state==="attack"){let M=a.win;a.yaw=fu(a.yaw,Math.atan2(-M.n.x,-M.n.z),Math.min(1,e*8)),a.cool-=e,M.count<=0?(a.state="climb",a.climbT=0):(a.attackT+=e,a.cool<=0&&M.count>0&&(a.cool=$(1.2,2),M.cool<=0&&o.removePlank(M)&&(M.cool=$(2.2,3.2),r.plank?.(M,!0))))}else if(a.state==="climb"){let M=a.win;a.climbT+=e/1.25;let C=Math.min(1,a.climbT),O=M.out.x+M.t.x*a.slot*.8,L=M.out.z+M.t.z*a.slot*.8,P=M.in.x+M.t.x*a.slot*.5,D=M.in.z+M.t.z*a.slot*.5;a.pos.x=O+(P-O)*C,a.pos.z=L+(D-L)*C,a.climbY=Math.sin(C*Math.PI)*.75,a.root.position.y=a.climbY,a.yaw=fu(a.yaw,Math.atan2(-M.n.x,-M.n.z),Math.min(1,e*8)),f=1.5,C>=1&&(a.state="chase",a.climbY=0,a.root.position.y=0)}else{let M=o.bait,C=M?Math.hypot(M.x-a.pos.x,M.z-a.pos.z):99,O=M&&C<16,L=O?M.x:p,P=O?M.z:v,D=O?Fi(L,P,o.mapId):l,F=Fi(a.pos.x,a.pos.z,o.mapId),B=L,q=P,k=null;if(F!==D){let Q=o.doors&&o.doors.length?o.doors:s?[s]:[];k=Tg(a.pos.x,a.pos.z,o.mapId,D,Q,a.lane||0),k&&(B=k.x,q=k.z)}let W=B-a.pos.x,ee=q-a.pos.z,le=Math.hypot(W,ee)||1;W/=le,ee/=le;let Me=Math.hypot(p-a.pos.x,v-a.pos.z);if(a.stuck>0&&!k){a.stuck-=e;let Q=.7*a.side,xe=Math.cos(Q),Ee=Math.sin(Q),ne=W*xe-ee*Ee,ue=W*Ee+ee*xe;W=ne,ee=ue}let te=0,ae=0;for(let Q=0;Q<this.list.length;Q++){if(Q===c)continue;let xe=this.list[Q];if(xe.state!=="chase"&&xe.state!=="attack")continue;let Ee=a.pos.x-xe.pos.x,ne=a.pos.z-xe.pos.z,ue=Ee*Ee+ne*ne;if(ue<.62&&ue>1e-4){let ve=1/Math.sqrt(ue);te+=Ee*ve*(.78-Math.sqrt(ue)),ae+=ne*ve*(.78-Math.sqrt(ue))}}k&&(k.crossZ?te*=.12:ae*=.12),W+=te*1.15,ee+=ae*1.15;let Pe=Math.hypot(W,ee)||1;W/=Pe,ee/=Pe;let Z=Math.hypot(L-a.pos.x,P-a.pos.z);f=!k&&(O?Z<.9:Me<1&&F===l)||a.speed<=0?0:a.speed,a.cool-=e,!O&&Me<1.35&&F===l&&!k&&a.attackT<=0&&a.cool<=0&&(a.attackT=.01),a.attackT>0&&(a.attackT+=e,a.attackT>.42&&(!O&&Me<1.7&&F===l&&r.hitPlayer?.(a),a.attackT=0,a.cool=1.05),f*=.3),a.pos.x+=W*f*e,a.pos.z+=ee*f*e,u=W,d=ee,f>0&&o.resolve(a.pos,.36*h);let Ae=k?W:L-a.pos.x,Xe=k?ee:P-a.pos.z;if(a.yaw=fu(a.yaw,Math.atan2(Ae,Xe),Math.min(1,e*9)),a.chk+=e,a.chk>.45){let Q=Math.hypot(a.pos.x-a.chkX,a.pos.z-a.chkZ);if(f>.4&&Q<.1){if(a.stuck=k?0:.45,a.side=Math.random()<.5?-1:1,a.stuckTot+=.45,k){let xe=k.gx-a.pos.x,Ee=k.gz-a.pos.z,ne=Math.hypot(xe,Ee)||1;a.pos.x+=xe/ne*.28,a.pos.z+=Ee/ne*.28,o.resolve(a.pos,.36*h)}}else a.stuckTot=Math.max(0,a.stuckTot-.3);a.chkX=a.pos.x,a.chkZ=a.pos.z,a.chk=0,a.stuckTot>1.8&&k?(a.pos.x=k.ex,a.pos.z=k.ez,o.resolve(a.pos,.36*h),a.stuckTot=0):a.stuckTot>6&&this.reroute(a)}}a.root.rotation.y=a.yaw,a.state!=="climb"&&(a.root.position.y=0);let g=f>.1?f:0;a.phase+=g*e*(a.runner?2.4:2.7)/Math.max(.6,h);let m=Math.sin(a.phase),y=Math.min(.8,.28+g*.13);a.legL.rotation.x=m*y,a.legR.rotation.x=-m*y*(a.limp?.35:1),a.hitT>0&&(a.hitT=Math.max(0,a.hitT-e));let w=a.hitT>0?a.hitT/.22:0,_=.1+Math.min(.28,g*.05)+(a.runner?.16:0)+(a.brute?.1:0)-w*.42;a.upper.rotation.x=_+Math.abs(m)*.035,a.upper.rotation.z=Math.sin(a.phase*.5)*.07*(a.limp?2:1),a.upper.rotation.y=Math.sin(a.phase*.5)*.16;let E=a.brute?-.58:-.74,T=Math.min(.62,.2+g*.1)*(a.runner?1.28:1),A,x;if(a.state==="climb")A=x=-1.5;else if(a.state==="attack")x=-.5+Math.sin(a.attackT*7)*.95,A=E+.12;else if(a.attackT>0){let M=Math.sin(Math.min(1,a.attackT/.42)*Math.PI);x=E-M*1.15,A=E+m*T*.3}else A=E-m*T,x=E+m*T*(a.limp?.4:1);a.armL.rotation.x=A+w*.3,a.armR.rotation.x=x+w*.3;let b=a.brute?.28:.16;a.armL.rotation.z=b,a.armR.rotation.z=-b,a.head.rotation.x=.08+Math.sin(a.phase*.5)*.05-w*.5,a.head.rotation.y=Math.sin(a.phase*.5)*.1,a.head.rotation.z=Math.sin(a.phase*.5+1)*.1+w*.15,a.pelvis.position.y=.95+Math.abs(m)*(g>.2?.05:.02)}}reroute(e){let t=No(this.world.doors&&this.world.doors.length?this.world.doors:[this.world.door]),n=this.world.windows.filter(r=>t.has(r.area)),s=wn(n.length?n:this.world.windows);e.win=s,e.state="approach",e.stuckTot=0,e.stuck=0,e.pos.set(s.out.x+s.n.x*3,0,s.out.z+s.n.z*3)}};function VS(i,e,t,n){let s=i.x-t.x,r=i.y-t.y,o=i.z-t.z,l=s*e.x+r*e.y+o*e.z,c=s*s+r*r+o*o-n*n,a=l*l-c;if(a<0)return null;let h=-l-Math.sqrt(a);return h>0?h:null}function fu(i,e,t){let n=((e-i+Math.PI)%tn+tn)%tn-Math.PI;return i+n*t}var vu={},Xf;function WS(){let i=tu(Do.zombies),e=i.view;Xf=i.meta;for(let t of Xf){let n=new xt;n.setAttribute("position",nu(e,t)),n.setAttribute("normal",iu(e,t)),n.setAttribute("skinIndex",new lt(e(Uint8Array,t.si),4)),n.setAttribute("skinWeight",new lt(e(Uint8Array,t.sw),4,!0));let s=e(Uint16Array,t.idx);XS(s,n.attributes.position.array,t),n.setIndex(new lt(s,1)),t.groups.forEach(r=>n.addGroup(r.start,r.count,r.slot>=0?r.slot:3)),n.computeBoundingSphere(),vu[t.tag]={g:n,m:t}}}function XS(i,e,t){let n=t.groups.filter(s=>s.slot<0);for(let s of n){let r=-9;for(let c=s.start;c<s.start+s.count;c++)r=Math.max(r,e[i[c]*3+1]);if(r<1.75||s.count<200)continue;s.hair=!0;let o=new Set;for(let c=s.start;c<s.start+s.count;c++)o.add(i[c]);let l=0;for(let c of o)l=Math.max(l,Math.abs(e[c*3]));if(l>.12){let c=.12/l;for(let a of o)e[a*3]*=c,e[a*3+2]=(e[a*3+2]+.01)*c-.01,e[a*3+1]=1.66+(e[a*3+1]-1.66)*(e[a*3+1]>1.66?.72:c)}for(let c=s.start;c<s.start+s.count;c+=3){let a=0,h=0;for(let u=0;u<3;u++)a+=e[i[c+u]*3+1]/3,h+=e[i[c+u]*3+2]/3;(h>.035&&a<1.715||h>.075&&a<1.74||a<1.6)&&(i[c+1]=i[c+2]=i[c])}}}var Ug=4,qS=["near","mid","far"],Ng=new Map,YS=(i,e)=>{let t=Ng.get(i);if(!t){let n=new de("#"+i).multiplyScalar(e?.85:.6);e&&n.offsetHSL(0,0,.04),t=new Je({color:n,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),Ng.set(i,t)}return t},ZS="float zh(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);} float zn(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(zh(i),zh(i+vec3(1,0,0)),f.x),mix(zh(i+vec3(0,1,0)),zh(i+vec3(1,1,0)),f.x),f.y),mix(mix(zh(i+vec3(0,0,1)),zh(i+vec3(1,0,1)),f.x),mix(zh(i+vec3(0,1,1)),zh(i+vec3(1,1,1)),f.x),f.y),f.z);}";function Wf(i,e){let t=new Je({roughness:i===0?.7:.95,polygonOffset:i!==0,polygonOffsetFactor:-1.5,polygonOffsetUnits:-4});return t.userData.seed={value:e},t.onBeforeCompile=n=>{n.uniforms.zSeed=t.userData.seed,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vZ = position;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vZ; uniform float zSeed;
`+ZS).replace("#include <color_fragment>",`#include <color_fragment>
      vec3 q = vZ*vec3(18.)+zSeed; float n = zn(q)*0.6+zn(q*2.3)*0.4;
      ${i===0?"diffuseColor.rgb *= mix(vec3(0.55,0.62,0.5), vec3(1.0), smoothstep(0.25,0.75,n)); float b = smoothstep(0.78,0.86,zn(q*0.7+3.)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.25,0.03,0.04), b*0.8);":"float m2 = zn(vZ*7.+zSeed)*0.65+zn(vZ*15.+zSeed)*0.35; float t = smoothstep(0.70,0.78,m2)*0.8; float e = smoothstep(0.62,0.70,m2)*0.5-t*0.5; diffuseColor.rgb *= 0.85+0.2*zn(q*2.); diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb*0.35, e); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.075,0.095,0.06)*mix(1.,0.6,zn(q*3.)), t); float bl = smoothstep(0.8,0.9,zn(q*0.5+7.)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.22,0.03,0.03), bl*0.7);"}`)},t.customProgramCacheKey=()=>"zmat"+i,t}var Og=1.1,mu=new N,gu=new de,pn=new _t,KS=new de(1,.92,.75),xu=new Array(Ug);function jS(){let i=document.createElement("canvas");i.width=i.height=32;let e=i.getContext("2d"),t=e.createRadialGradient(16,16,1,16,16,16);t.addColorStop(0,"#fff"),t.addColorStop(.28,"rgba(255,255,255,.7)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32);let n=new $t(i);return n.colorSpace=pt,n}function $S(i){let e=i.geometry.attributes.position,t=i.geometry.attributes.skinIndex,n=i.geometry.attributes.skinWeight,s=i.skeleton.bones.findIndex(d=>d.name==="head"),r=i.skeleton.boneInverses[s],o=i.bindMatrix,l=new N,c=null,a=null,h=-1e9,u=-1e9;for(let d=0;d<e.count;d++){let f=0;for(let v=0;v<4;v++)t.getComponent(d,v)===s&&(f=Math.max(f,n.getComponent(d,v)));if(f<.45||(l.fromBufferAttribute(e,d).applyMatrix4(o).applyMatrix4(r),l.z<.015))continue;let p=l.z-Math.abs(Math.abs(l.x)-.032)*2.4-Math.abs(l.y-.012)*2.2;l.x<-.01&&p>h?(h=p,c=l.clone()):l.x>.01&&p>u&&(u=p,a=l.clone())}return c=c||new N(-.034,.02,.08),a=a||new N(.034,.02,.08),c.y+=.022,a.y+=.022,c.z+=.01,a.z+=.01,{L:c,R:a}}function JS(i,e,t){pn.position.set(0,-20,0),pn.scale.set(0,0,0),pn.rotation.set(0,0,0),pn.updateMatrix(),i.setMatrixAt(t*2,pn.matrix),i.setMatrixAt(t*2+1,pn.matrix),e.setMatrixAt(t,pn.matrix)}function QS(i,e){let t=i.eyeMesh,n=i.blob,s=i.list,r=i.cam,o=r&&r.quaternion,l=!1;for(let c=0;c<s.length;c++){let a=s[c];if(!(a.root.visible&&a.state!=="dead"&&a.eyeL)){a._eyeOn&&(a._eyeOn=!1,l=!0,JS(t,n,c));continue}a._eyeOn=!0,l=!0,a.bones.head.updateWorldMatrix(!0,!1);let u=a.bones.head.matrixWorld,f=.05*(1+.12*Math.sin(e*(a.runner?9:3.1)+a.phase))*(a.flash>0?1.35:1)*(a.brute?1.22:1);gu.setRGB(a.brute?.85:a.runner?1:.95,a.brute?.08:a.runner?.42:.16,.04),a.flash>0&&gu.lerp(KS,Math.min(.65,a.flash*2.5)),o&&pn.quaternion.copy(o),mu.copy(a.eyeL).applyMatrix4(u),pn.position.copy(mu),pn.scale.setScalar(f),pn.updateMatrix(),t.setMatrixAt(c*2,pn.matrix),t.setColorAt(c*2,gu),mu.copy(a.eyeR).applyMatrix4(u),pn.position.copy(mu),pn.updateMatrix(),t.setMatrixAt(c*2+1,pn.matrix),t.setColorAt(c*2+1,gu);let p=a.state==="dying"?Math.min(.85,a.dieT*.45):0;pn.position.set(a.pos.x,.04,a.pos.z),pn.rotation.set(-Math.PI/2,0,0),pn.scale.setScalar(Math.max(.01,a.scale*(a.brute?1.15:.92)*(1-p))),pn.updateMatrix(),n.setMatrixAt(c,pn.matrix)}l&&(t.instanceMatrix.needsUpdate=!0,t.instanceColor.needsUpdate=!0,n.instanceMatrix.needsUpdate=!0)}function Fg(i){WS(),i.list.forEach((c,a)=>{let h=a%Ug,u=vu[h+":near"].m.bones,d=u.map(v=>{let g=new Ws;return g.name=v.n,g.position.fromArray(v.t),g});u.forEach((v,g)=>{v.p>=0&&d[v.p].add(d[g])});let f=new Be;f.add(d[0]),f.scale.setScalar(vu[h+":near"].m.scale*Og),f.updateMatrixWorld(!0);let p=new _r(d);c.sk=Wf(0,a*7.3),c.sh=Wf(1,a*3.1),c.pa=Wf(1,a*5.7+2),c.lods=qS.map(v=>{let g=vu[h+":"+v],m=[c.sk,c.sh,c.pa],y=g.m.groups.map(E=>E.slot>=0?[c.sk,c.sh,c.pa][E.slot]:YS(E.col,E.hair)),w=g.g.clone();w.clearGroups(),g.m.groups.forEach((E,T)=>w.addGroup(E.start,E.count,T));let _=new vr(w,y);return _.frustumCulled=!1,_.castShadow=!0,_.bind(p),_.visible=!1,f.add(_),_}),c.bones=Object.fromEntries(d.map(v=>[v.name,v])),c.hipY=c.bones.hips.position.y,c.root.add(f),c.pelvis.traverse(v=>{v.isMesh&&(v.visible=!1)}),c.variant=h,xu[h]||(xu[h]=$S(c.lods[0])),c.eyeL=xu[h].L,c.eyeR=xu[h].R});let e=i.list.length,t=new Fn(new en(1,1),new nt({map:jS(),color:16777215,transparent:!0,depthWrite:!1,blending:Ji,toneMapped:!0,fog:!0,side:Ht}),e*2);t.frustumCulled=!1,t.userData.noAO=!0,t.renderOrder=6,t.instanceColor=new ci(new Float32Array(e*6),3);let n=new nt({color:0,transparent:!0,opacity:.28,depthWrite:!1}),s=new Fn(new Li(.7,14),n,e);s.frustumCulled=!1,s.userData.noAO=!0,s.renderOrder=1,s.receiveShadow=!1,i.scene.add(t,s),i.eyeMesh=t,i.blob=s;let r=i.setTier.bind(i);i.setTier=c=>{i.tier=c,n.opacity=c===0?.5:.26,r(c)};let o=i.update.bind(i),l=[];return i.update=(c,a,h,...u)=>{o(c,a,h,...u),l.length=0;for(let d of i.list)d.root.visible&&(d.d=Math.hypot(d.pos.x-h.x,d.pos.z-h.z),l.push(d));l.sort((d,f)=>d.d-f.d),l.forEach((d,f)=>{let p=f<2&&d.d<7?0:f<5&&d.d<16?1:2;d.lods.forEach((v,g)=>v.visible=g===p),eE(d)}),QS(i,a)},i.lodCounts=()=>{let c=[0,0,0];for(let a of i.list)a.root.visible&&a.lods.forEach((h,u)=>{h.visible&&c[u]++});return c},Object.fromEntries(Xf.map(c=>[c.tag,c.tris]))}function eE(i){let e=i.bones;e.hips.position.y=i.hipY+(i.pelvis.position.y-.95)/Og,e.hips.rotation.set(i.pelvis.rotation.x,0,i.pelvis.rotation.z),e.chest.rotation.set(i.upper.rotation.x+.18+(i.brute?.1:0),i.upper.rotation.y,i.upper.rotation.z),e.spine.rotation.x=.1+(i.brute?.05:0),e.head.rotation.set(i.head.rotation.x+.15,.1+(i.head.rotation.y||0),i.head.rotation.z+.22),e.thighL.rotation.set(i.legL.rotation.x,0,.03),e.thighR.rotation.set(i.legR.rotation.x,0,-.03),e.shinL.rotation.x=Math.max(0,-i.legL.rotation.x)*1.25+.1,e.shinR.rotation.x=Math.max(0,-i.legR.rotation.x)*1.25+.1,e.upperArmL.rotation.set(i.armL.rotation.x,0,i.armL.rotation.z),e.upperArmR.rotation.set(i.armR.rotation.x,0,i.armR.rotation.z);let t=n=>-.4-Math.max(0,-n-.32)*.42;if(e.foreArmL.rotation.x=t(i.armL.rotation.x),e.foreArmR.rotation.x=t(i.armR.rotation.x),e.handL.rotation.x=.22,e.handR.rotation.x=.28,i.state==="dying"){let n=Math.min(1,i.dieT/.55);e.foreArmL.rotation.x=-.35-n,e.foreArmR.rotation.x=-.3-n}}var tE=i=>new de(i);function pi(i,e,t,n,s,r=0,o=0,l=0,c=1,a=1,h=1){i=i.index?i.toNonIndexed():i.clone();let u=new je().compose(new N(t,n,s),new fn().setFromEuler(new ai(r,o,l)),new N(c,a,h));i.applyMatrix4(u);let d=i.attributes.position.count,f=new Float32Array(d*3),p=tE(e);for(let v=0;v<d;v++){let g=.85+.3*Math.random();f[v*3]=p.r*g,f[v*3+1]=p.g*g,f[v*3+2]=p.b*g}i.setAttribute("color",new lt(f,3));for(let v of Object.keys(i.attributes))["position","normal","color"].includes(v)||i.deleteAttribute(v);return i}function qf(i){let e=new xt;for(let t of["position","normal","color"]){let n=i.map(o=>o.attributes[t].array),s=new Float32Array(n.reduce((o,l)=>o+l.length,0)),r=0;for(let o of n)s.set(o,r),r+=o.length;e.setAttribute(t,new lt(s,3))}return e.computeBoundingSphere(),e}var Bg=7234898,kg=11049580,zg=3015944,Hg=1966596,Gg=4852236,nE=[1840914,3811866,5921362,2761760,7031338],Cs=(i,e,t)=>new rt(i,e,t),iE=(i,e)=>new ys(i,e,4),Vg=i=>new br(i,0);function sE(i,e){let t=[],n=i.c,s=i.r,r=n.z+s.z*.86,o=n.y-s.y*.42;for(let a=0;a<6;a++)t.push(pi(Cs(s.x*.12,s.y*.11,.008),kg,(a-2.5)*s.x*.14,o+s.y*.04,r-Math.abs(a-2.5)*.004,0,0,$(-.2,.2)));t.push(pi(Cs(s.x*.9,s.y*.07,s.z*.25),zg,0,o+s.y*.1,r-s.z*.12)),t.push(pi(Vg(s.x*.38),Gg,n.x+$(-.3,.3)*s.x,n.y+s.y*.9,n.z+s.z*.15,0,0,0,1.2,.3,1)),t.push(pi(Cs(s.x*.35,.005,.005),Hg,n.x+s.x*.62,n.y-s.y*.1,n.z+s.z*.8,0,.6,1.1));let l=6+(Math.random()*5|0),c=wn(nE);if(e)for(let a=0;a<l;a++){let h=$(0,Math.PI*2),u=$(.35,1.2),d=Math.cos(h)*Math.cos(u),f=Math.sin(u),p=Math.sin(h)*Math.cos(u)-.25;t.push(pi(iE(s.x*.12,s.y*$(.35,.6)),c,n.x+d*s.x*.95,n.y+f*s.y*.95,n.z+p*s.z*.9,p*.9,0,-d*.9))}return qf(t)}function rE(i,e){let t=i.r,n=t.x*.9,s=t.z*.6,r=[pi(Cs(n,t.y*.16,s),e,0,-t.y*.08,s/2),pi(Cs(n*.82,t.y*.06,s*.8),zg,0,t.y*.01,s/2)];for(let o=0;o<5;o++)r.push(pi(Cs(n*.13,t.y*.11,.008),kg,(o-2)*n*.17,t.y*.05,s-.006-Math.abs(o-2)*.004));return qf(r)}function oE(i,e){let t=[pi(Vg(.06),Hg,.035,i.y,i.z-.012,0,0,0,1.1,1.15,.25)];for(let n=0;n<4;n++){let s=i.y+.04-n*.026;t.push(pi(new Ft(.0055,.0055,.085-n*.008,5),Bg,.04,s,i.z+.002,0,0,Math.PI/2+.22))}if(t.push(pi(Cs(.012,.1,.01),Bg,-.006,i.y,i.z+.002)),t.push(pi(Cs(.04,.02,.01),Gg,.06,i.y-.07,i.z,0,0,.6)),e)for(let n=0;n<4;n++)t.push(pi(Cs($(.03,.05),$(.1,.18),.006),e,$(-.1,.1),i.y-.2-$(0,.04),i.z-.01,$(-.1,.1),0,$(-.25,.25)));return qf(t)}function aE(i,e){let t=i.geometry.attributes.position,n=i.geometry.attributes.skinIndex,s=i.geometry.attributes.skinWeight,r=i.skeleton.bones.findIndex(h=>h.name===e),o=i.skeleton.boneInverses[r],l=new N,c=new N(9,9,9),a=new N(-9,-9,-9);for(let h=0;h<t.count;h++){let u=0;for(let d=0;d<4;d++)n.getComponent(h,d)===r&&(u=Math.max(u,s.getComponent(h,d)));u<.6||(l.fromBufferAttribute(t,h).applyMatrix4(i.bindMatrix).applyMatrix4(o),c.min(l),a.max(l))}return{mn:c,mx:a,c:c.clone().add(a).multiplyScalar(.5),r:a.clone().sub(c).multiplyScalar(.5)}}function lE(i,e){let t=i.geometry.attributes.position,n=i.geometry.attributes.skinIndex,s=i.geometry.attributes.skinWeight,r=i.skeleton.bones.findIndex(u=>u.name===e),o=i.skeleton.boneInverses[r],l=new N,c=-1,a=0,h=0;for(let u=0;u<t.count;u++){let d=0;for(let f=0;f<4;f++)n.getComponent(u,f)===r&&(d=Math.max(d,s.getComponent(u,f)));d<.5||(l.fromBufferAttribute(t,u).applyMatrix4(i.bindMatrix).applyMatrix4(o),Math.abs(l.x)<.06&&(c=Math.max(c,l.z),a+=l.y,h++))}return{y:h?a/h:.05,z:c>0?c:.12}}var cE=[6191698,6980704,9081976,10133668,8022666,10525290,7232074,9207664],hE=[8007471,3099258,5921322,3816004,9071146,2068344,11687466,14209216,4860490,2771498,10127968],uE=[2764602,3813156,2106922,2898474,4604218,2766160];function Wg(i){let e=new Je({vertexColors:!0,roughness:.85}),t={},n={};i.list.forEach(o=>{let l=o.lods[0];t[o.variant]=t[o.variant]||lE(l,"chest");let c=n[o.variant]=n[o.variant]||aE(l,"head");o.gHead=new me(sE(c,Math.random()<.8),e),o.gJaw=new me(rE(c,5660746),e),o.gJaw.position.set(c.c.x,c.c.y-c.r.y*.5,c.c.z+c.r.z*.25),o.gChest=new me(oE(t[o.variant],null),e),o.gChest.position.z=.004;for(let a of[o.gHead,o.gJaw,o.gChest])a.frustumCulled=!1,a.visible=!1,a.castShadow=!1;o.bones.head.add(o.gHead,o.gJaw),o.bones.chest.add(o.gChest),o.lodRoot=l.parent});let s=i.spawn.bind(i);i.spawn=(...o)=>{let l=s(...o);if(!l)return l;l.style=Math.random()*3|0,l.jawOpen=$(.18,.45),l.ribs=Math.random()<.45,l.skull=Math.random()<.9,l.brute||l.sk.color.setHex(wn(cE)),l.sh.color.setHex(wn(hE)),l.pa.color.setHex(wn(uE));let c=l.brute?1.1:$(.9,1.14),a=l.brute?1:$(.92,1.08);return l.lodRoot&&(l.lodRoot.scale.set(c,a,Math.min(1.12,c)),l.lodRoot.position.y=0),l.twitch=$(8,14),l};let r=i.update.bind(i);i.update=(o,l,c,...a)=>{r(o,l,c,...a);for(let h of i.list){let u=h.root.visible&&h.state!=="dead"&&(h.lods[0].visible||h.lods[1].visible);if(h.gHead.visible=h.gJaw.visible=u&&h.skull!==!1,h.gChest.visible=u&&!!h.ribs,!h.root.visible||h.state==="dead")continue;let d=h.bones,f=h.style|0,p=h.phase||0;h.gJaw.rotation.x=(h.jawOpen||.4)+Math.max(0,Math.sin(l*6+p))*.25+(h.attackT>0?.3:0),h.state!=="dying"&&(f===1?(d.upperArmL.rotation.set(.15+Math.sin(p)*.1,0,.12),d.foreArmL.rotation.x=-.1,d.head.rotation.z+=.35,d.shinR.rotation.x+=.35,d.chest.rotation.z+=.12):f===2?(d.head.rotation.y+=Math.sin(l*h.twitch)*.12*(Math.sin(l*1.7+p)>.4?1:0),d.chest.rotation.x+=.22,d.chest.rotation.z+=Math.sin(p*.5)*.22,d.spine.rotation.z=Math.sin(p*.5)*.12,d.head.rotation.x-=.25):d.spine.rotation.z=0)}}}function _u(i){let e=new Map,t=new Map,n=i.clone();return Xg(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),l=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=l.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Xg(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Xg(i.children[n],e.children[n],t)}var Oo=class extends Di{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Qf(t)}),this.register(function(t){return new ep(t)}),this.register(function(t){return new cp(t)}),this.register(function(t){return new hp(t)}),this.register(function(t){return new up(t)}),this.register(function(t){return new np(t)}),this.register(function(t){return new ip(t)}),this.register(function(t){return new sp(t)}),this.register(function(t){return new rp(t)}),this.register(function(t){return new Jf(t)}),this.register(function(t){return new op(t)}),this.register(function(t){return new tp(t)}),this.register(function(t){return new lp(t)}),this.register(function(t){return new ap(t)}),this.register(function(t){return new jf(t)}),this.register(function(t){return new yu(t,Mt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new yu(t,Mt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new dp(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let a=ws.extractUrlBase(e);o=ws.resolveURL(a,this.path)}else o=ws.extractUrlBase(e);this.manager.itemStart(e);let l=function(a){s?s(a):console.error(a),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Er(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(a){try{r.parse(a,o,function(h){t(h),r.manager.itemEnd(e)},l)}catch(h){l(h)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},l={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===jg){try{o[Mt.KHR_BINARY_GLTF]=new fp(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Mt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let a=new yp(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});a.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](a);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Mt.KHR_MATERIALS_UNLIT:o[u]=new $f;break;case Mt.KHR_DRACO_MESH_COMPRESSION:o[u]=new pp(r,this.dracoLoader);break;case Mt.KHR_TEXTURE_TRANSFORM:o[u]=new mp;break;case Mt.KHR_MESH_QUANTIZATION:o[u]=new gp;break;default:d.indexOf(u)>=0&&l[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}a.setExtensions(o),a.setPlugins(l),a.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function dE(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function cn(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},jf=class{constructor(e){this.parser=e,this.name=Mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],a,h=new de(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],An);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":a=new Ts(h),a.target.position.set(0,0,-1),a.add(a.target);break;case"point":a=new _i(h),a.distance=u;break;case"spot":a=new Ar(h),a.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,a.angle=c.spot.outerConeAngle,a.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,a.target.position.set(0,0,-1),a.add(a.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return a.position.set(0,0,0),ss(a,c),c.intensity!==void 0&&(a.intensity=c.intensity),a.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(a),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],l=(r.extensions&&r.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(c){return n._getNodeRef(t.cache,l,c)})}},$f=class{constructor(){this.name=Mt.KHR_MATERIALS_UNLIT}getMaterialType(){return nt}extendParams(e,t,n){let s=[];e.color=new de(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],An),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,pt))}return Promise.all(s)}},Jf=class{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Qf=class{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return cn(this.parser,e,this.name)!==null?ei:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pe(r,r)}return Promise.all(s)}},ep=class{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return cn(this.parser,e,this.name)!==null?ei:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},tp=class{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return cn(this.parser,e,this.name)!==null?ei:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},np=class{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SHEEN}getMaterialType(e){return cn(this.parser,e,this.name)!==null?ei:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new de(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],An)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,pt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},ip=class{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return cn(this.parser,e,this.name)!==null?ei:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},sp=class{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_VOLUME}getMaterialType(e){return cn(this.parser,e,this.name)!==null?ei:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new de().setRGB(r[0],r[1],r[2],An),Promise.all(s)}},rp=class{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IOR}getMaterialType(e){return cn(this.parser,e,this.name)!==null?ei:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},op=class{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return cn(this.parser,e,this.name)!==null?ei:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new de().setRGB(r[0],r[1],r[2],An),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,pt)),Promise.all(s)}},ap=class{constructor(e){this.parser=e,this.name=Mt.EXT_MATERIALS_BUMP}getMaterialType(e){return cn(this.parser,e,this.name)!==null?ei:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},lp=class{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return cn(this.parser,e,this.name)!==null?ei:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},cp=class{constructor(e){this.parser=e,this.name=Mt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},hp=class{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],l=s.images[o.source],c=n.textureLoader;if(l.uri){let a=n.options.manager.getHandler(l.uri);a!==null&&(c=a)}return n.loadTextureImage(e,o.source,c)}},up=class{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],l=s.images[o.source],c=n.textureLoader;if(l.uri){let a=n.options.manager.getHandler(l.uri);a!==null&&(c=a)}return n.loadTextureImage(e,o.source,c)}},yu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(l){let c=s.byteOffset||0,a=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(l,c,a);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},dp=class{constructor(e){this.name=Mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let a of s.primitives)if(a.mode!==Si.TRIANGLES&&a.mode!==Si.TRIANGLE_STRIP&&a.mode!==Si.TRIANGLE_FAN&&a.mode!==void 0)return null;let o=n.extensions[this.name].attributes,l=[],c={};for(let a in o)l.push(this.parser.getDependency("accessor",o[a]).then(h=>(c[a]=h,c[a])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(a=>{let h=a.pop(),u=h.isGroup?h.children:[h],d=a[0].count,f=[];for(let p of u){let v=new je,g=new N,m=new fn,y=new N(1,1,1),w=new Fn(p.geometry,p.material,d);for(let E=0;E<d;E++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,E),c.SCALE&&y.fromBufferAttribute(c.SCALE,E),w.setMatrixAt(E,v.compose(g,m,y));let _=null;for(let E in c)if(E==="_COLOR_0"){let T=c[E];w.instanceColor=new ci(T.array,T.itemSize,T.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(_===null){let A=w.geometry;_=new xt,_.name=A.name;for(let x in A.attributes)_.setAttribute(x,A.attributes[x]);for(let x in A.morphAttributes)_.morphAttributes[x]=A.morphAttributes[x];A.index!==null&&_.setIndex(A.index),_.morphTargetsRelative=A.morphTargetsRelative;for(let x of A.groups)_.addGroup(x.start,x.count,x.materialIndex);A.boundingBox!==null&&(_.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(_.boundingSphere=A.boundingSphere.clone()),_.drawRange.start=A.drawRange.start,_.drawRange.count=A.drawRange.count,_.userData=Object.assign({},A.userData),w.geometry=_}let T=c[E];_.setAttribute(E,new ci(T.array,T.itemSize,T.normalized))}_t.prototype.copy.call(w,p),this.parser.assignFinalMaterial(w),f.push(w)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},jg="glTF",_l=12,qg={JSON:1313821514,BIN:5130562},fp=class{constructor(e){this.name=Mt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,_l),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==jg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-_l,r=new DataView(e,_l),o=0;for(;o<s;){let l=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===qg.JSON){let a=new Uint8Array(e,_l+o,l);this.content=n.decode(a)}else if(c===qg.BIN){let a=_l+o;this.body=e.slice(a,a+l)}o+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},pp=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,l={},c={},a={};for(let h in o){let u=vp[h]||h.toLowerCase();l[u]=o[h]}for(let h in e.attributes){let u=vp[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Uo[d.componentType];a[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let v=f.attributes[p],g=c[p];g!==void 0&&(v.normalized=g)}u(f)},l,a,An,d)})})}},mp=class{constructor(){this.name=Mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},gp=class{constructor(){this.name=Mt.KHR_MESH_QUANTIZATION}},Mu=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=l*2,a=l*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,p=e*a,v=p-a,g=-2*f+3*d,m=f-d,y=1-g,w=m-d+u;for(let _=0;_!==l;_++){let E=o[v+_+l],T=o[v+_+c]*h,A=o[p+_+l],x=o[p+_]*h;r[_]=y*E+w*T+g*A+m*x}return r}},fE=new fn,xp=class extends Mu{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return fE.fromArray(r).normalize().toArray(r),r}},Si={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Uo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yg={9728:jt,9729:zt,9984:rh,9985:wo,9986:Dr,9987:ni},Zg={33071:Un,33648:co,10497:on},Yf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$s={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},pE={CUBICSPLINE:void 0,LINEAR:fr,STEP:dr},Zf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function mE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Je({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$i})),i.DefaultMaterial}function Br(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ss(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function gE(i,e,t){let n=!1,s=!1,r=!1;for(let a=0,h=e.length;a<h;a++){let u=e[a];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],l=[],c=[];for(let a=0,h=e.length;a<h;a++){let u=e[a];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;l.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(a){let h=a[0],u=a[1],d=a[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function xE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vE(i){let e,t=i.extensions&&i.extensions[Mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Kf(t.attributes):e=i.indices+":"+Kf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Kf(i.targets[n]);return e}function Kf(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function _p(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _E(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var yE=new je,yp=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new dE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;let c=l.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=l.indexOf("Firefox")>-1,o=r?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Ni(this.options.manager):this.textureLoader=new Ba(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Er(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let l={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Br(r,l,s),ss(l,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(l)})).then(function(){for(let c of l.scenes)c.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let l=0,c=o.length;l<c;l++)e[o[l]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,l)=>{let c=this.associations.get(o);c!=null&&this.associations.set(l,c);for(let[a,h]of o.children.entries())r(h,l.children[a])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Mt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ws.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Yf[s.type],l=Uo[s.componentType],c=s.normalized===!0,a=new l(s.count*o);return Promise.resolve(new lt(a,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let l=o[0],c=Yf[s.type],a=Uo[s.componentType],h=a.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,v,g;if(f&&f!==u){let m=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,w=t.cache.get(y);w||(v=new a(l,m*f,s.count*f/h),w=new gr(v,f/h),t.cache.add(y,w)),g=new Vs(w,c,d%f/h,p)}else l===null?v=new a(s.count*c):v=new a(l,d,s.count*c),g=new lt(v,c,p);if(s.sparse!==void 0){let m=Yf.SCALAR,y=Uo[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,E=new y(o[1],w,s.sparse.count*m),T=new a(o[2],_,s.sparse.count*c);l!==null&&(g=new lt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,x=E.length;A<x;A++){let b=E[A];if(g.setX(b,T[A*c]),c>=2&&g.setY(b,T[A*c+1]),c>=3&&g.setZ(b,T[A*c+2]),c>=4&&g.setW(b,T[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],l=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(l=c)}return this.loadTextureImage(e,r,l)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],l=r.images[t],c=(l.uri||l.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let a=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||l.name||"",h.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(h.name=l.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Yg[d.magFilter]||zt,h.minFilter=Yg[d.minFilter]||ni,h.wrapS=Zg[d.wrapS]||on,h.wrapT=Zg[d.wrapT]||on,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==jt&&h.minFilter!==zt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=a,a}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],l=self.URL||self.webkitURL,c=o.uri||"",a=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){a=!0;let d=new Blob([u],{type:o.mimeType});return c=l.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(v){let g=new xn(v);g.needsUpdate=!0,d(g)}),t.load(ws.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return a===!0&&l.revokeObjectURL(c),ss(u,o),u.userData.mimeType=o.mimeType||_E(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Mt.KHR_TEXTURE_TRANSFORM]){let l=n.extensions!==void 0?n.extensions[Mt.KHR_TEXTURE_TRANSFORM]:void 0;if(l){let c=r.associations.get(o);o=r.extensions[Mt.KHR_TEXTURE_TRANSFORM].extendTexture(o,l),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let l="PointsMaterial:"+n.uuid,c=this.cache.get(l);c||(c=new vo,On.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(l,c)),n=c}else if(e.isLine){let l="LineBasicMaterial:"+n.uuid,c=this.cache.get(l);c||(c=new xo,On.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(l,c)),n=c}if(s||r||o){let l="ClonedMaterial:"+n.uuid+":";s&&(l+="derivative-tangents:"),r&&(l+="vertex-colors:"),o&&(l+="flat-shading:");let c=this.cache.get(l);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(l,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Je}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,l={},c=r.extensions||{},a=[];if(c[Mt.KHR_MATERIALS_UNLIT]){let u=s[Mt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),a.push(u.extendParams(l,r,t))}else{let u=r.pbrMetallicRoughness||{};if(l.color=new de(1,1,1),l.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;l.color.setRGB(d[0],d[1],d[2],An),l.opacity=d[3]}u.baseColorTexture!==void 0&&a.push(t.assignTexture(l,"map",u.baseColorTexture,pt)),l.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,l.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(a.push(t.assignTexture(l,"metalnessMap",u.metallicRoughnessTexture)),a.push(t.assignTexture(l,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),a.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,l)})))}r.doubleSided===!0&&(l.side=Ht);let h=r.alphaMode||Zf.OPAQUE;if(h===Zf.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,h===Zf.MASK&&(l.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==nt&&(a.push(t.assignTexture(l,"normalMap",r.normalTexture)),l.normalScale=new pe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;l.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==nt&&(a.push(t.assignTexture(l,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==nt){let u=r.emissiveFactor;l.emissive=new de().setRGB(u[0],u[1],u[2],An)}return r.emissiveTexture!==void 0&&o!==nt&&a.push(t.assignTexture(l,"emissiveMap",r.emissiveTexture,pt)),Promise.all(a).then(function(){let u=new o(l);return r.name&&(u.name=r.name),ss(u,r),t.associations.set(u,{materials:e}),r.extensions&&Br(s,u,r),u})}createUniqueName(e){let t=Ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(l){return n[Mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(c){return Kg(c,l,t)})}let o=[];for(let l=0,c=e.length;l<c;l++){let a=e[l],h=vE(a),u=s[h];if(u)o.push(u.promise);else{let d;a.extensions&&a.extensions[Mt.KHR_DRACO_MESH_COMPRESSION]?d=r(a):d=Kg(new xt,a,t),a.mode===Si.TRIANGLE_STRIP?d=d.then(f=>Sf(f,nl)):a.mode===Si.TRIANGLE_FAN&&(d=d.then(f=>Sf(f,Ro))),s[h]={primitive:a,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,l=[];for(let c=0,a=o.length;c<a;c++){let h=o[c].material===void 0?mE(this.cache):this.getDependency("material",o[c].material);l.push(h)}return l.push(t.loadGeometries(o)),Promise.all(l).then(async function(c){let a=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let v=h[f],g=o[f],m,y=a[f];if(g.mode===Si.TRIANGLES||g.mode===Si.TRIANGLE_STRIP||g.mode===Si.TRIANGLE_FAN||g.mode===void 0){let w=r.isSkinnedMesh===!0,_=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");w&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=w&&_?new vr(v,y):new me(v,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===Si.LINES)m=new xa(v,y);else if(g.mode===Si.LINE_STRIP)m=new yr(v,y);else if(g.mode===Si.LINE_LOOP)m=new va(v,y);else if(g.mode===Si.POINTS)m=new _s(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&xE(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ss(m,r),g.extensions&&Br(s,m,g),t.assignFinalMaterial(m),u.push(m)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Br(s,u[0],r),u[0];let d=new Be;r.extensions&&Br(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new dn(Qd.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ji(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ss(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,l=[],c=[];for(let a=0,h=o.length;a<h;a++){let u=o[a];if(u){l.push(u);let d=new je;r!==null&&d.fromArray(r.array,a*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[a])}return new _r(l,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],l=[],c=[],a=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],p=s.samplers[f.sampler],v=f.target,g=v.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,y=s.parameters!==void 0?s.parameters[p.output]:p.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),l.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",y)),a.push(p),h.push(v))}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(a),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],v=u[3],g=u[4],m=[];for(let w=0,_=d.length;w<_;w++){let E=d[w],T=f[w],A=p[w],x=v[w],b=g[w];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let M=n._createAnimationTracks(E,T,A,x,b);if(M)for(let C=0;C<M.length;C++)m.push(M[C])}let y=new Sr(r,void 0,m);return ss(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(l){if(l.isMesh)for(let c=0,a=s.weights.length;c<a;c++)l.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],l=s.children||[];for(let a=0,h=l.length;a<h;a++)o.push(n.getDependency("node",l[a]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(a){let h=a[0],u=a[1],d=a[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,yE)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,p=u[0];h.pivot=new N().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",l=[],c=s._invokeOne(function(a){return a.createNodeMesh&&a.createNodeMesh(e)});return c&&l.push(c),r.camera!==void 0&&l.push(s.getDependency("camera",r.camera).then(function(a){return s._getNodeRef(s.cameraCache,r.camera,a)})),s._invokeAll(function(a){return a.createNodeAttachment&&a.createNodeAttachment(e)}).forEach(function(a){l.push(a)}),this.nodeCache[e]=Promise.all(l).then(function(a){let h;if(r.isBone===!0?h=new Ws:a.length>1?h=new Be:a.length===1?h=a[0]:h=new _t,h!==a[0])for(let u=0,d=a.length;u<d;u++)h.add(a[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ss(h,r),r.extensions&&Br(n,h,r),r.matrix!==void 0){let u=new je;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Be;n.name&&(r.name=s.createUniqueName(n.name)),ss(r,n),n.extensions&&Br(t,r,n);let o=n.nodes||[],l=[];for(let c=0,a=o.length;c<a;c++)l.push(s.getDependency("node",o[c]));return Promise.all(l).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(_u(d)):r.add(d)}let a=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof On||d instanceof xn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=a(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],l=e.name?e.name:e.uuid,c=[];function a(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}$s[r.path]===$s.weights?(a(e),e.isGroup&&e.children.forEach(a)):c.push(l);let h;switch($s[r.path]){case $s.weights:h=bs;break;case $s.rotation:h=Ss;break;case $s.translation:case $s.scale:h=Xs;break;default:n.itemSize===1?h=bs:h=Xs;break}let u=s.interpolation!==void 0?pE[s.interpolation]:fr,d=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let v=new h(c[f]+"."+$s[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=_p(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ss?xp:Mu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ME(i,e,t){let n=e.attributes,s=new vn;if(n.POSITION!==void 0){let l=t.json.accessors[n.POSITION],c=l.min,a=l.max;if(c!==void 0&&a!==void 0){if(s.set(new N(c[0],c[1],c[2]),new N(a[0],a[1],a[2])),l.normalized){let h=_p(Uo[l.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let l=new N,c=new N;for(let a=0,h=r.length;a<h;a++){let u=r[a];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let v=_p(Uo[d.componentType]);c.multiplyScalar(v)}l.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(l)}i.boundingBox=s;let o=new Jn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Kg(i,e,t){let n=e.attributes,s=[];function r(o,l){return t.getDependency("accessor",o).then(function(c){i.setAttribute(l,c)})}for(let o in n){let l=vp[o]||o.toLowerCase();l in i.attributes||s.push(r(n[o],l))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(l){i.setIndex(l)});s.push(o)}return ht.workingColorSpace!==An&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),ss(i,e),ME(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?gE(i,e.targets,t):i})}var yl="assets/hd/z/",Jg=new Oo,bE=new Ni;Jg.register(i=>(i.textureLoader=new Ni(i.options.manager),{name:"csp_img"}));var bu=(i,e)=>bE.loadAsync(i).then(t=>(t.flipY=!1,t.colorSpace=e?pt:di,t.anisotropy=4,t));var SE={walk:"Zombie_Walk_Fwd_Loop",run:"Jog_Fwd_Loop",idle:"Zombie_Idle_Loop",attack:"Zombie_Scratch",climb:"ClimbUp_1m",death:"Death01",hit:"Hit_Chest",hitHead:"Hit_Head",knock:"Hit_Knockback"};function $g(i,e,t){let n=i.scene;n.updateMatrixWorld(!0);let s=["LOD0","LOD1","LOD2"].map(T=>n.getObjectByName(T)).map(T=>T&&(T.isSkinnedMesh?T:T.children.find(A=>A.isSkinnedMesh))).filter(Boolean),r=s[0],o=new vn;r.geometry.computeBoundingBox(),o.copy(r.geometry.boundingBox).applyMatrix4(r.bindMatrix);let l=o.max.y-o.min.y,c=r.skeleton,a=c.bones.findIndex(T=>/^head$/i.test(T.name)),h=r.geometry.attributes.position,u=r.geometry.attributes.skinIndex,d=r.geometry.attributes.skinWeight,f=new N,p=null,v=-1e9,g=0,m=0;for(let T=0;T<h.count;T++){let A=0;for(let x=0;x<4;x++)u.getComponent(T,x)===a&&(A=Math.max(A,d.getComponent(T,x)));A<.5||(f.fromBufferAttribute(h,T).applyMatrix4(r.bindMatrix),g+=f.z,m++)}g/=Math.max(1,m);let y=Math.sign(g)||1;for(let T=0;T<h.count;T++){let A=0;for(let M=0;M<4;M++)u.getComponent(T,M)===a&&(A=Math.max(A,d.getComponent(T,M)));if(A<.5)continue;f.fromBufferAttribute(h,T).applyMatrix4(r.bindMatrix);let x=(f.y-o.min.y)/l;if(x<.86||x>.93)continue;let b=y*(f.z-g)-Math.abs(f.x)*3;b>v&&(v=b,p=f.clone())}p||(p=new N(0,o.min.y+.9*l,g+y*.08));let w=l/1.8,_=c.boneInverses[a],E=T=>new N(T*w,p.y+.035*w,p.z-y*.028*w).applyMatrix4(_);return{scene:n,H:l,box:o,front:y,eyes:p?{L:E(-.033),R:E(.033)}:null,map:e,nrm:t,nLods:s.length}}async function Sp(i){let e=d=>Jg.loadAsync(yl+d),[t,n,s,r,o,l,c,a]=await Promise.all([e(i?"zombie_m.glb":"zombie_m_lo.glb"),e(i?"zombie_f.glb":"zombie_f_lo.glb"),e("zanim_ual1.glb"),e("zanim_ual2.glb"),bu(yl+`zskin_m_${i?1024:512}.webp`,!0),bu(yl+`zskin_f_${i?1024:512}.webp`,!0),i?bu(yl+"znrm_m_1024.webp"):null,i?bu(yl+"znrm_f_1024.webp"):null]),h={};for(let d of[...s.animations,...r.animations])h[d.name.replace(/^.*\|/,"")]=d;let u={};for(let[d,f]of Object.entries(SE))if(u[d]=h[f],!u[d])throw new Error("missing clip "+f);return EE(u.climb),{hi:i,m:$g(t,o,c),f:$g(n,l,a),clips:u}}function EE(i){for(let e of i.tracks)if(/pelvis\.position$/.test(e.name)){let t=e.values,n=t[0],s=t[1],r=t[2];for(let o=0;o<t.length;o+=3)t[o]=n,t[o+1]=s,t[o+2]=r}}var TE="float zh(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);} float zn(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(zh(i),zh(i+vec3(1,0,0)),f.x),mix(zh(i+vec3(0,1,0)),zh(i+vec3(1,1,0)),f.x),f.y),mix(mix(zh(i+vec3(0,0,1)),zh(i+vec3(1,0,1)),f.x),mix(zh(i+vec3(0,1,1)),zh(i+vec3(1,1,1)),f.x),f.y),f.z);}";function wE(i,e){let t=new Je({map:i.map,normalMap:i.nrm||null,roughness:.62,metalness:0,emissive:0});return i.nrm&&t.normalScale.set(.8,.8),t.userData.u=e,t.onBeforeCompile=n=>{Object.assign(n.uniforms,e),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vB; uniform vec4 uBox;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec3 b = (bindMatrix * vec4(position, 1.)).xyz; vB = vec3((b.x - uBox.x) / uBox.w, (b.y - uBox.y) / uBox.w, (b.z - uBox.z) / uBox.w); }`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vB; uniform vec3 uShirt, uPants, uHair; uniform vec4 uCloth; uniform vec4 uMisc; float zCloth = 0., zBlood = 0.;
`+TE).replace("#include <map_fragment>",`#include <map_fragment>
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
roughnessFactor = mix(roughnessFactor, 0.95, zCloth); roughnessFactor = mix(roughnessFactor, 0.3, zBlood * 0.8);`)},t.customProgramCacheKey=()=>"zrig"+(i.nrm?"n":""),t}var AE=[5910576,3424346,5000244,3816e3,6969400,3365456,7227956,9078396,4602956,3026478,8025190],RE=[2501688,3813156,1909800,2898474,4866358,2306634],CE=[1709330,3811868,5917240,7236194,2761760],Mp=i=>i[Math.random()*i.length|0],Su=new de,Eu=new N,mn=new _t,PE=new de(1,.92,.75);function IE(){let i=document.createElement("canvas");i.width=i.height=32;let e=i.getContext("2d"),t=e.createRadialGradient(16,16,1,16,16,16);t.addColorStop(0,"#fff"),t.addColorStop(.28,"rgba(255,255,255,.7)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32);let n=new $t(i);return n.colorSpace=pt,n}function Qg(i){let e=i.zu;if(!e)return;let t=i.brute;e.uShirt.value.set(Mp(AE)).multiplyScalar(.7+Math.random()*.3),e.uPants.value.set(Mp(RE)),e.uHair.value.set(Mp(CE)),e.uCloth.value.set(t?0:Math.random()*.2,Math.random()<.2?.3:.05+Math.random()*.06,t||Math.random()<.12?1:0,Math.random()*50),e.uMisc.value.x=Math.random()<.25?0:1,e.uMisc.value.z=i.female?.75:Math.random()*.6,i.sk.color.setRGB(1,1,1).offsetHSL(0,0,-Math.random()*.15),t&&i.sk.color.setRGB(.95,.8,.75)}function LE(i,e,t){i.model&&(i.root.remove(i.model),i.mixer?.stopAllAction());let n=!i.brute&&e%3===2,s=n?t.f:t.m;i.female=n;let r=_u(s.scene),o=(n?1.72:1.8)/s.H;r.scale.setScalar(o),s.front<0&&(r.rotation.y=Math.PI);let l=i.zu||{uShirt:{value:new de},uPants:{value:new de},uHair:{value:new de},uCloth:{value:new Tt},uMisc:{value:new Tt(1,1,.3,0)}};l.uBox={value:new Tt(s.box.min.x+(s.box.max.x-s.box.min.x)/2,s.box.min.y,s.box.min.z+(s.box.max.z-s.box.min.z)/2,s.H)},l.uMisc.value.y=s.front,i.zu=l;let c=wE(s,l),a=i.sk;i.sk=c,a&&a!==c&&c.color.copy(a.color);let h=[];r.traverse(d=>{d.isSkinnedMesh&&(d.material=c,d.frustumCulled=!1,d.castShadow=!0,d.receiveShadow=!0,h.push(d))}),h.sort((d,f)=>d.name.localeCompare(f.name)),i.lods=t.hi?h:[null,...h],i.model=r,i.root.add(r),i.pelvis.traverse(d=>{d.isMesh&&(d.visible=!1)}),i.bones={head:r.getObjectByName(h[0].skeleton.bones.find(d=>/^head$/i.test(d.name)).name)},i.eyeL=s.eyes?.L||new N,i.eyeR=s.eyes?.R||new N;let u=i.mixer=new za(r);i.acts={};for(let[d,f]of Object.entries(t.clips)){let p=u.clipAction(f);i.acts[d]=p}for(let d of["death","hit","hitHead","knock"])i.acts[d].setLoop(Vh,1),i.acts[d].clampWhenFinished=d==="death";i.cur=null,i.lastHit=0,i.vel=0,i.px=i.pos.x,i.pz=i.pos.z,i.rate=.9+Math.random()*.2,i.macc=0,i.state!=="dead"&&Qg(i)}function kr(i,e,t=.25,n=1){let s=i.acts[e];if(s.timeScale=n*i.rate,i.cur===e)return;let r=i.cur&&i.acts[i.cur];s.reset(),s.enabled=!0,s.setEffectiveWeight(1),e!=="death"&&e!=="climb"&&(s.time=Math.random()*s.getClip().duration),s.play(),r&&r.crossFadeTo(s,t,!1),i.cur=e}var bp=null;function DE(i,e){i.state==="dying"&&i.cur!=="death"&&bp?.onBlood?.(i.pos.x,i.pos.z,1.1*i.scale);let t=i.pos.x-i.px,n=i.pos.z-i.pz;i.px=i.pos.x,i.pz=i.pos.z;let s=e>0?Math.min(8,Math.hypot(t,n)/e):0;if(i.vel+=(s-i.vel)*Math.min(1,e*6),i.state==="dying"?kr(i,"death",.12,1.25):i.state==="climb"?kr(i,"climb",.2,.62):i.state==="attack"?kr(i,"attack",.3,1):i.attackT>0?kr(i,"attack",.12,1.9):i.vel>(i.runner?1.6:2.6)?kr(i,"run",.3,Math.min(1.6,Math.max(.7,i.vel/3.6))):i.vel>.12?kr(i,"walk",.3,Math.min(2.4,Math.max(.55,i.vel/.95))):(i.cur!=="attack"||i.attackT<=0)&&kr(i,"idle",.4,1),(i.cur==="run"||i.cur==="walk")&&(i.acts[i.cur].timeScale=i.rate*(i.cur==="run"?Math.min(1.6,Math.max(.7,i.vel/3.6)):Math.min(2.4,Math.max(.55,i.vel/.95)))),i.hitT>.15&&i.lastHit<=0&&Math.random()<.45&&bp?.onBlood?.(i.pos.x+(Math.random()-.5)*.6,i.pos.z+(Math.random()-.5)*.6,.45+Math.random()*.4),i.hitT>.15&&i.lastHit<=0&&i.state!=="dying"){let r=i.acts[Math.random()<.5?"hit":"hitHead"];r.reset(),r.setEffectiveWeight(.65),r.fadeIn(.04),r.play(),i.hitAct=r,i.hitClock=.3}i.lastHit=i.hitT,i.hitAct&&(i.hitClock-=e,i.hitClock<=0&&(i.hitAct.fadeOut(.2),i.hitAct=null))}function Ep(i,e){if(bp=i,i.kit=e,i.list.forEach((d,f)=>LE(d,f,e)),i._zrig)return;i._zrig=!0;let t=i.list.length,n=new Fn(new en(1,1),new nt({map:IE(),color:16777215,transparent:!0,depthWrite:!1,toneMapped:!0,fog:!0,side:Ht}),t*2);n.frustumCulled=!1,n.userData.noAO=!0,n.renderOrder=6,n.instanceColor=new ci(new Float32Array(t*6),3);let s=new nt({color:0,transparent:!0,opacity:.28,depthWrite:!1}),r=new Fn(new Li(.7,14),s,t);r.frustumCulled=!1,r.userData.noAO=!0,r.renderOrder=1,i.scene.add(n,r),i.eyeMesh=n,i.blob=r;let o=d=>{mn.position.set(0,-20,0),mn.scale.set(0,0,0),mn.updateMatrix(),n.setMatrixAt(d*2,mn.matrix),n.setMatrixAt(d*2+1,mn.matrix),r.setMatrixAt(d,mn.matrix)},l=i.setTier.bind(i);i.setTier=d=>{i.tier=d,s.opacity=d===0?.5:.26;for(let f of i.list)f.lods.forEach(p=>p&&(p.castShadow=d>0));l(d)};let c=i.spawn.bind(i);i.spawn=(...d)=>{let f=c(...d);return f&&(Qg(f),f.cur=null,f.mixer?.stopAllAction(),f.px=f.pos.x,f.pz=f.pos.z,f.vel=0),f};let a=i.update.bind(i),h=[],u=0;i.tick=(d,f,p)=>{u++,h.length=0;for(let y of i.list)y.root.visible&&y.state!=="dead"&&(y.d=Math.hypot(y.pos.x-p.x,y.pos.z-p.z),h.push(y));h.sort((y,w)=>y.d-w.d);let v=!!i.kit.hi;h.forEach((y,w)=>{let _=w<2&&y.d<7?0:w<6&&y.d<16?1:2;!v&&_===0&&(_=1),y.lods.forEach((T,A)=>T&&(T.visible=A===_)),DE(y,d),y.macc+=d;let E=_===2?y.d>40?3:2:1;(u%E===0||y.state==="dying")&&(y.mixer.update(y.macc),y.macc=0)});let g=i.cam&&i.cam.quaternion,m=!1;for(let y=0;y<i.list.length;y++){let w=i.list[y];if(!(w.root.visible&&w.state!=="dead")){w._eyeOn&&(w._eyeOn=!1,m=!0,o(y));continue}w._eyeOn=!0,m=!0,w.bones.head.updateWorldMatrix(!0,!1);let E=w.bones.head.matrixWorld,T=1+.12*Math.sin(f*(w.runner?9:3.1)+w.phase),A=.04*T*(w.flash>0?1.35:1)*(w.brute?1.2:1)*(w.state==="dying"?Math.max(0,1-w.dieT):1);Su.setRGB(w.brute?.85:w.runner?1:.95,w.brute?.08:w.runner?.42:.16,.04),w.flash>0&&Su.lerp(PE,Math.min(.65,w.flash*2.5)),g&&mn.quaternion.copy(g),Eu.copy(w.eyeL).applyMatrix4(E),mn.position.copy(Eu),mn.scale.setScalar(A),mn.updateMatrix(),n.setMatrixAt(y*2,mn.matrix),n.setColorAt(y*2,Su),Eu.copy(w.eyeR).applyMatrix4(E),mn.position.copy(Eu),mn.updateMatrix(),n.setMatrixAt(y*2+1,mn.matrix),n.setColorAt(y*2+1,Su);let x=w.state==="dying"?Math.min(.85,w.dieT*.45):0;mn.quaternion.identity(),mn.position.set(w.pos.x,.04,w.pos.z),mn.rotation.set(-Math.PI/2,0,0),mn.scale.setScalar(Math.max(.01,w.scale*(w.brute?1.15:.92)*(1-x))),mn.updateMatrix(),r.setMatrixAt(y,mn.matrix)}m&&(n.instanceMatrix.needsUpdate=!0,n.instanceColor.needsUpdate=!0,r.instanceMatrix.needsUpdate=!0)},i.update=(d,f,p,...v)=>{a(d,f,p,...v),i.tick(d,f,p),i._ticked=!0},i.lodCounts=()=>{let d=[0,0,0];for(let f of i.list)f.root.visible&&f.lods.forEach((p,v)=>{p&&p.visible&&d[v]++});return d}}var Tu=class extends Oa{constructor(e){super(e),this.type=Wt}parse(e){let o=function(x,b){switch(x){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(b||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(b||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(b||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(b||""))}},u=function(x,b,M){b=b||1024;let O=x.pos,L=-1,P=0,D="",F=String.fromCharCode.apply(null,new Uint16Array(x.subarray(O,O+128)));for(;0>(L=F.indexOf(`
`))&&P<b&&O<x.byteLength;)D+=F,P+=F.length,O+=128,F=String.fromCharCode.apply(null,new Uint16Array(x.subarray(O,O+128)));return-1<L?(M!==!1&&(x.pos+=P+L+1),D+F.slice(0,L)):!1},d=function(x){let b=/^#\?(\S+)/,M=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*FORMAT=(\S+)\s*$/,L=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},D,F;for((x.pos>=x.byteLength||!(D=u(x)))&&o(1,"no header found"),(F=D.match(b))||o(3,"bad initial token"),P.valid|=1,P.programtype=F[1],P.string+=D+`
`;D=u(x),D!==!1;){if(P.string+=D+`
`,D.charAt(0)==="#"){P.comments+=D+`
`;continue}if((F=D.match(M))&&(P.gamma=parseFloat(F[1])),(F=D.match(C))&&(P.exposure=parseFloat(F[1])),(F=D.match(O))&&(P.valid|=2,P.format=F[1]),(F=D.match(L))&&(P.valid|=4,P.height=parseInt(F[1],10),P.width=parseInt(F[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||o(3,"missing format specifier"),P.valid&4||o(3,"missing image size specifier"),P},f=function(x,b,M){let C=b;if(C<8||C>32767||x[0]!==2||x[1]!==2||x[2]&128)return new Uint8Array(x);C!==(x[2]<<8|x[3])&&o(3,"wrong scanline width");let O=new Uint8Array(4*b*M);O.length||o(4,"unable to allocate buffer space");let L=0,P=0,D=4*C,F=new Uint8Array(4),B=new Uint8Array(D),q=M;for(;q>0&&P<x.byteLength;){P+4>x.byteLength&&o(1),F[0]=x[P++],F[1]=x[P++],F[2]=x[P++],F[3]=x[P++],(F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=C)&&o(3,"bad rgbe scanline format");let k=0,W;for(;k<D&&P<x.byteLength;){W=x[P++];let le=W>128;if(le&&(W-=128),(W===0||k+W>D)&&o(3,"bad scanline data"),le){let Me=x[P++];for(let te=0;te<W;te++)B[k++]=Me}else B.set(x.subarray(P,P+W),k),k+=W,P+=W}let ee=C;for(let le=0;le<ee;le++){let Me=0;O[L]=B[le+Me],Me+=C,O[L+1]=B[le+Me],Me+=C,O[L+2]=B[le+Me],Me+=C,O[L+3]=B[le+Me],L+=4}q--}return O},p=function(x,b,M,C){let O=x[b+3],L=Math.pow(2,O-128)/255;M[C+0]=x[b+0]*L,M[C+1]=x[b+1]*L,M[C+2]=x[b+2]*L,M[C+3]=1},v=function(x,b,M,C){let O=x[b+3],L=Math.pow(2,O-128)/255;M[C+0]=Gs.toHalfFloat(Math.min(x[b+0]*L,65504)),M[C+1]=Gs.toHalfFloat(Math.min(x[b+1]*L,65504)),M[C+2]=Gs.toHalfFloat(Math.min(x[b+2]*L,65504)),M[C+3]=Gs.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;let m=d(g),y=m.width,w=m.height,_=f(g.subarray(g.pos),y,w),E,T,A;switch(this.type){case kn:A=_.length/4;let x=new Float32Array(A*4);for(let M=0;M<A;M++)p(_,M*4,x,M*4);E=x,T=kn;break;case Wt:A=_.length/4;let b=new Uint16Array(A*4);for(let M=0;M<A;M++)v(_,M*4,b,M*4);E=b,T=Wt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:w,data:E,header:m.string,gamma:m.gamma,exposure:m.exposure,type:T,colorSpace:An,minFilter:zt,magFilter:zt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var wp="assets/hd/",tx=new Oo,NE=new Ni;tx.register(i=>(i.textureLoader=new Ni(i.options.manager),{name:"csp_img"}));var Tp=-.271,UE=1711915,OE={sand:4,concrete:3.2,corr:2.6,wood:1.6,rust:2},ex={low:["env/sky_1k.webp","tex/sand_diff_512.webp","tex/concrete_diff_512.webp","tex/corr_diff_512.webp","tex/wood_diff_512.webp","props/drum.glb","props/tyre.glb","props/crate.glb","props/jerry.glb"],medium:["env/sky_2k.webp","env/env_256.hdr",...["sand","concrete","corr","wood"].flatMap(i=>[`tex/${i}_diff_1k.webp`,`tex/${i}_nor_1k.webp`]),"props/drum.glb","props/tyre.glb","props/crate.glb","props/jerry.glb"]};ex.high=[...ex.medium,...["sand","concrete","corr","wood"].map(i=>`tex/${i}_arm_1k.webp`)];var wu=(i,e,t=!0)=>NE.loadAsync(wp+i).then(n=>(n.colorSpace=e?pt:di,t&&(n.wrapS=n.wrapT=on),n.anisotropy=8,n));function FE(i,e,t=!1){i.onBeforeCompile=n=>{n.uniforms.uTile={value:1/e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
      #endif`))},i.customProgramCacheKey=()=>"wuv"+(t?"m":""),i.needsUpdate=!0}function BE(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");for(let n=0;n<26;n++){let s=Math.random()*6.28,r=Math.random()<.3?20+Math.random()*40:Math.random()*18,o=4+Math.random()*(n<6?22:9);e.fillStyle=`rgba(${70+Math.random()*40|0},${4+Math.random()*8|0},${4+Math.random()*6|0},${.55+Math.random()*.4})`,e.beginPath(),e.ellipse(64+Math.cos(s)*r,64+Math.sin(s)*r,o,o*(.5+Math.random()*.5),s,0,6.28),e.fill()}let t=new $t(i);return t.colorSpace=pt,t}function kE(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"rgba(255,255,255,0.55)"),t.addColorStop(.5,"rgba(255,255,255,0.22)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new $t(i)}function nx({renderer:i,scene:e,world:t,viewScene:n}){let s=t.M,r={tier:-1,sky:null,env:null,props:!1,texTier:-1,bytes:0};function o(D){D.colorSpace=pt,D.wrapS=on,D.generateMipmaps=!0,D.minFilter=ni;let F=new yt({side:yn,depthWrite:!1,fog:!1,uniforms:{map:{value:D},fogC:{value:e.fog.color},rot:{value:Tp},gain:{value:1}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vP; uniform sampler2D map; uniform vec3 fogC; uniform float rot, gain;
        void main(){ vec3 d = normalize(vP); vec2 uv = vec2(atan(d.z, d.x) * 0.15915494 + 0.5 + rot, asin(clamp(d.y, -1., 1.)) * 0.31830989 + 0.5);
          vec3 c = texture2D(map, uv).rgb * gain; c = mix(fogC, c, smoothstep(-0.015, 0.05, d.y));
          gl_FragColor = vec4(c, 1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}),B=t.sky.material;t.sky.material=F,B.dispose?.(),r.sky=D,e.fog.color.set(UE);let q=s.cache.f276229210;q&&(q.visible=!1)}function l(D){D.mapping=Lr;let F=new As(i),B=F.fromEquirectangular(D);F.dispose(),D.dispose(),e.environment=B.texture,n.environment=B.texture,e.environmentRotation.y=n.environmentRotation.y=-Tp*Math.PI*2,r.env=B.texture}function c(D){let F=new As(i),B=D.clone();B.mapping=Lr;let q=F.fromEquirectangular(B);F.dispose(),e.environment=q.texture,n.environment=q.texture,e.environmentRotation.y=n.environmentRotation.y=-Tp*Math.PI*2,r.env=q.texture}let a={sand:[s.sand,s.dune],concrete:[s.concrete],corr:[s.fence,s.fenceDark],wood:[s.wood]};async function h(D){let F=D>0,B=D>1,q=Object.keys(a),k=await Promise.all(q.map(W=>Promise.all([wu(`tex/${W}_diff_${F?"1k":"512"}.webp`,!0),F?wu(`tex/${W}_nor_1k.webp`):null,B?wu(`tex/${W}_arm_1k.webp`):null])));q.forEach((W,ee)=>{let[le,Me,te]=k[ee];for(let ae of a[W])ae&&(ae.map=le,ae.bumpMap=null,ae.normalMap=Me||null,ae.roughnessMap=te||null,ae.aoMap=te||null,ae.aoMapIntensity=.8,W==="corr"?(ae.metalnessMap=te||null,ae.metalness=ae===s.fence?.55:.45,ae.roughness=te?1:.62,ae.color.set(ae===s.fence?12107972:5921886),Me&&ae.normalScale.set(1.2,1.2)):W==="sand"?(ae.color.set(ae===s.dune?12166540:13220774),ae.roughness=1,ae.metalness=0,Me&&ae.normalScale.set(1.1,1.1)):W==="concrete"?(ae.color.set(11841706),ae.roughness=te?1:.9,ae.metalness=0):(ae.color.set(14207928),ae.roughness=te?1:.85),FE(ae,OE[W],W==="sand"))}),r.texTier=D}let u={drum:[.62,.9,.62],tyre:[.98,.3,.98],crate:null,jerry:[.36,.48,.17]};function d(D,F){D.updateMatrixWorld(!0);let B=new vn().setFromObject(D),q=B.getSize(new N),k=new Be,W=new Be;W.add(D),k.add(W),F==="tyre"&&q.y>Math.min(q.x,q.z)&&(W.rotation.x=q.z<q.x?Math.PI/2:0,q.x<q.z&&(W.rotation.z=Math.PI/2)),k.updateMatrixWorld(!0);let ee=new vn().setFromObject(W),le=ee.getSize(new N),Me=ee.getCenter(new N),te=u[F]||[1,1,1];if(W.scale.set(te[0]/le.x,te[1]/le.y,te[2]/le.z),F==="jerry"||F==="drum"){let Z=te[1]/le.y;W.scale.set(Z,Z,Z)}k.updateMatrixWorld(!0);let ae=new vn().setFromObject(W),Pe=ae.getCenter(new N);return W.position.set(-Pe.x,-ae.min.y,-Pe.z),k.updateMatrixWorld(!0),k}async function f(D){let F=["drum","tyre","crate","jerry"],B=await Promise.all(F.map(le=>tx.loadAsync(wp+`props/${le}.glb`))),q={};F.forEach((le,Me)=>q[le]=d(B[Me].scene,le));let k={};for(let le of t.hdProps||[])(k[le.kind]||(k[le.kind]=[])).push(le);let W=new je,ee=new de;r.inst=[];for(let[le,Me]of Object.entries(k)){let te=q[le];te.updateMatrixWorld(!0),te.traverse(ae=>{if(!ae.isMesh)return;let Pe=new Fn(ae.geometry,ae.material,Me.length);Pe.castShadow=D>0,Pe.receiveShadow=!0,Me.forEach((Z,re)=>{W.copy(Z.m),le==="crate"&&W.multiply(new je().makeScale(Z.s,Z.s,Z.s)),W.multiply(ae.matrixWorld),Pe.setMatrixAt(re,W),le==="drum"&&(ee.set(Z.color).lerp(new de(1,1,1),.45),Pe.setColorAt(re,ee))}),Pe.computeBoundingSphere(),t.root.add(Pe),r.inst.push(Pe)})}for(let le of t.propLo||[])le.visible=!1;for(let[le,Me]of t.missionMeshes||[])if(Me.userData.hdKind==="jerry"){let te=q.jerry.clone();te.traverse(ae=>{ae.isMesh&&(ae.castShadow=!0,ae.receiveShadow=!0)}),Me.children.forEach(ae=>ae.visible=!1),te.rotation.y=Math.random()*6,Me.add(te)}r.props=!0}let p=40,v=new Fn(new en(1,1).rotateX(-Math.PI/2),new Je({map:BE(),transparent:!0,depthWrite:!1,roughness:.25,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),p);v.frustumCulled=!1,v.renderOrder=2,v.userData.noAO=!0,v.receiveShadow=!0;let g=new _t,m=0;g.scale.set(0,0,0),g.updateMatrix();for(let D=0;D<p;D++)v.setMatrixAt(D,g.matrix);e.add(v);function y(D,F,B=1){g.position.set(D,.02+m%7*.0015,F),g.rotation.set(0,Math.random()*6.28,0),g.scale.set(B*(.8+Math.random()*.5),1,B*(.8+Math.random()*.5)),g.updateMatrix(),v.setMatrixAt(m,g.matrix),v.instanceMatrix.needsUpdate=!0,m=(m+1)%p}let w=54,_=new xt,E=new Float32Array(w*3),T=new Float32Array(w),A=[],x=[[-38,-70],[44,-40],[-50,30]];for(let D=0;D<w;D++)A.push({s:x[D%x.length],t:Math.random()*9,life:7+Math.random()*4,dx:(Math.random()-.5)*.4});_.setAttribute("position",new lt(E,3)),_.setAttribute("a",new lt(T,1));let b=new yt({transparent:!0,depthWrite:!1,fog:!0,uniforms:Rn.merge([Ue.fog,{map:{value:kE()},uScale:{value:600}}]),vertexShader:`attribute float a; varying float vA; uniform float uScale;
#include <fog_pars_vertex>
void main(){ vA=a; vec4 mvPosition=modelViewMatrix*vec4(position,1.); gl_PointSize = uScale * (2.5 + (1.-a) * 7.) / -mvPosition.z; gl_Position=projectionMatrix*mvPosition;
#include <fog_vertex>
}`,fragmentShader:`uniform sampler2D map; varying float vA;
#include <fog_pars_fragment>
void main(){ vec4 t=texture2D(map, gl_PointCoord); gl_FragColor=vec4(vec3(0.16,0.15,0.16), t.a*vA*0.55);
#include <fog_fragment>
}`}),M=new _s(_,b);M.frustumCulled=!1,M.userData.noAO=!0,M.visible=!1,e.add(M);function C(D){if(M.visible){for(let F=0;F<w;F++){let B=A[F];B.t+=D,B.t>B.life&&(B.t=0);let q=B.t/B.life;E[F*3]=B.s[0]+B.dx*B.t+q*q*6,E[F*3+1]=1+B.t*1.6,E[F*3+2]=B.s[1]+q*2,T[F]=Math.sin(Math.min(1,q*4)*1.57)*(1-q)}_.attributes.position.needsUpdate=!0,_.attributes.a.needsUpdate=!0}}let O=Promise.resolve();function L(D){return O=O.then(async()=>{let F=performance.now(),B=[];(!r.sky||D>0&&r.skyHi!==!0)&&B.push(wu(D>0?"env/sky_2k.webp":"env/sky_1k.webp",!0,!1).then(k=>{o(k),r.skyHi=D>0,D===0&&!r.envHi&&c(k)})),D>0&&!r.envHi&&B.push(new Tu().loadAsync(wp+"env/env_256.hdr").then(k=>{l(k),r.envHi=!0})),(r.texTier<0||D>r.texTier&&!(r.texTier===1&&D===1))&&B.push(h(D)),r.props||B.push(f(D));let q=await Promise.allSettled(B);for(let k of q)k.status==="rejected"&&console.warn("hd stage 2",k.reason);r.ms=Math.round(performance.now()-F)}),O}function P(D){r.tier=D,M.visible=D>0;for(let F of r.inst||[])F.castShadow=D>0}return{load:L,setTier:P,update:C,blood:y,st:r}}var zE=100,HE=50;function ix(i){let{scene:e,zombies:t,P:n,G:s,cam:r}=i,o={on:!1,ws:null,id:null,room:null,token:null,snaps:[],remotes:new Map,slot:new Map,lastSend:0,over:!1,retry:0,url:null,name:"Survivor",status:"",alive:!0},l=(x,b,M)=>x+(b-x)*M,c=(x,b,M)=>{let C=((b-x+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return x+C*M},a=[1638320,16757575,7059711,16739285];function h(x,b){let M=new Be,C=new Je({color:a[b%4],roughness:.6}),O=new me(new Ma(.3,.9,4,10),C);O.position.y=.95;let L=new me(new _n(.2,12,10),new Je({color:14267276}));L.position.y=1.68;let P=new me(new rt(.08,.1,.5),new Je({color:546}));P.position.set(.25,1.35,-.3);let D=P.clone();D.position.set(-.22,1.32,-.26),D.visible=!1;let F=document.createElement("canvas");F.width=256,F.height=64;let B=F.getContext("2d");B.font="800 34px system-ui,sans-serif",B.textAlign="center",B.fillStyle="#"+a[b%4].toString(16).padStart(6,"0"),B.fillText(x,128,44);let q=new li(new Qn({map:new $t(F),transparent:!0,depthWrite:!1}));q.scale.set(1.2,.3,1),q.position.y=2.2;let k=new me(new _n(.07,8,6),new nt({color:1638320}));return k.position.y=2.45,k.visible=!1,M.add(O,L,P,D,q,k),M.userData={body:O,gun:P,gun2:D,name:x,talk:k,gunId:"pistol"},e.add(M),M}let u={pistol:[.7,.8,.55,2236962],akimbo:[.7,.8,.5,13158600],smg:[.85,1,.85,3355443],shotgun:[.8,.8,1.4,3811868],sawed:[1.3,.9,.62,2236962],rifle:[.7,.9,1.55,2763306],lever:[.65,.8,1.7,7027231],nailer:[1.2,1.2,.7,14252330],lmg:[1.2,1.2,1.6,1710618]};function d(x,b){let M=u[b]?b:"pistol";if(x.userData.gunId===M)return;x.userData.gunId=M;let C=u[M];x.userData.gun.scale.set(C[0],C[1],C[2]),x.userData.gun.material.color.setHex(C[3]),x.userData.gun2.visible=M==="akimbo",M==="akimbo"&&x.userData.gun2.material.color.setHex(C[3])}function f(x){o.url=x.url,o.name=x.name||o.name,o.joinMsg=x.join,p()}function p(){let x;try{x=new WebSocket(o.url)}catch{return v("bad server url")}o.ws=x,o.status="connecting",x.onopen=()=>{o.retry=0,x.send(JSON.stringify(o.token?{t:"join",token:o.token}:{t:"join",name:o.name,...o.joinMsg}))},x.onmessage=b=>{let M;try{M=JSON.parse(b.data)}catch{return}g(M)},x.onclose=b=>{if(o.ws===x){if(o.ws=null,!o.on&&!o.token){i.onStatus?.("Could not connect to the co-op server");return}o.over||b.code===4001||(o.retry++<8?(o.status="reconnecting",i.onStatus?.("Connection lost, reconnecting\u2026"),setTimeout(p,Math.min(8e3,500*2**o.retry))):(i.onStatus?.("Disconnected from co-op server"),y(),i.onQuit?.()))}},x.onerror=()=>{}}function v(x){i.onStatus?.(x)}function g(x){if(x.t==="joined"){let b=!o.on;o.id=x.id,o.room=x.room,o.token=x.token,o.status="ok",b?(o.on=!0,o.over=!1,i.onJoined?.(x)):i.onStatus?.("Reconnected")}else if(x.t==="err")i.onStatus?.({"no-room":"No room with that code","room-full":"That room is full",full:"Server is full",rate:"Too many messages"}[x.m]||x.m),o.on||o.ws?.close();else if(x.t==="s"){x.recv=performance.now(),o.snaps.push(x),o.snaps.length>30&&o.snaps.shift();for(let b of x.ev||[])i.onEvent?.(b,b.p===o.id||b.by===o.id);i.onLobby?.(x),x.over&&!o.over&&(o.over=!0,i.onOver?.(x))}else x.t==="hits"?i.onHits?.(x.h):x.t==="act"?(o.lastAct=x,i.onAct?.(x)):x.t==="sig"&&i.onSig?.(x)}function m(x){o.ws&&o.ws.readyState===1&&o.ws.send(JSON.stringify(x))}function y(){if(o.on=!1,o.ws)try{m({t:"leave"}),o.ws.close()}catch{}o.ws=null,o.token=null,o.snaps=[];for(let x of o.remotes.values())e.remove(x);o.remotes.clear(),o.slot.clear(),t.reset()}function w(x){let b=x-zE,M=o.snaps;if(!M.length)return null;let C=M.length-1;for(;C>0&&M[C-1].recv>b;)C--;let O=M[C],L=M[Math.max(0,C-1)];return L===O||O.recv<=L.recv?{s0:O,s1:O,k:1}:{s0:L,s1:O,k:Math.max(0,Math.min(1,(b-L.recv)/(O.recv-L.recv)))}}function _(x,b,M){let C=performance.now();C-o.lastSend>HE&&!n.dead&&(o.lastSend=C,m({t:"in",x:+n.x.toFixed(2),z:+n.z.toFixed(2),yaw:+n.yaw.toFixed(3),pitch:+n.pitch.toFixed(3),w:i.held?.()||"pistol"}));let O=w(C);if(!O){t.update(x,b,n,i.world.door,M);return}let{s0:L,s1:P,k:D}=O,F=o.snaps[o.snaps.length-1],B=F.p.find(te=>te[0]===o.id);if(B){let te=B[6];if(te<n.hp-.5&&i.onHurt?.(n.hp-te),n.hp=te,n.pts=B[7],n.kills=B[8],B[9]&&!n.dead?i.onDown?.():!B[9]&&n.dead&&i.onRevive?.(),Math.hypot(B[2]-n.x,B[3]-n.z)>2.5&&(n.x=B[2],n.z=B[3]),Array.isArray(B[12]))for(let ae of B[12]){let Pe=n.slots.find(Z=>Z&&Z.id===ae[0]);Pe&&(Pe.mag=ae[1],Pe.reserve=ae[2])}}F.round!==s.round&&F.round>0&&i.onRound?.(F.round),s.mpPhase=F.phase;let q=i.world;F.win&&F.win.forEach((te,ae)=>{let Pe=q.windows[ae];if(Pe){for(;Pe.count>te;)q.removePlank(Pe),i.onPlank?.(Pe,!0);for(;Pe.count<te;)q.addPlank(Pe),i.onPlank?.(Pe,!1)}});let k=new Set(F.go||[]);F.door&&k.add("AB");for(let te of q.doors||[q.door])te&&k.has(te.id)&&!te.open&&(te.open=!0,i.onDoor?.(te));F.ms!==void 0&&i.onMission?.(F.ms,F.mi,F.mc),F.crate&&i.onCrate?.(F.crate[0],F.crate[1],F.crate[2]===o.id),F.up&&i.syncUps?.(F.up),s.double=F.dbl?1:0,B&&(o.owned=B[11]);let W=new Set,ee=new Map(L.p.map(te=>[te[0],te]));P.p.forEach((te,ae)=>{if(te[0]===o.id)return;W.add(te[0]);let Pe=o.remotes.get(te[0]);Pe||(Pe=h(te[1],ae),o.remotes.set(te[0],Pe));let Z=ee.get(te[0])||te;Pe.position.set(l(Z[2],te[2],D),0,l(Z[3],te[3],D)),Pe.rotation.y=c(Z[4],te[4],D),d(Pe,te[14]),Pe.userData.body.rotation.x=te[9]?-1.4:0,Pe.position.y=te[9]?.3:0,Pe.visible=!0,Pe.userData.body.material.opacity=te[10]?1:.4,Pe.userData.body.material.transparent=!te[10]});for(let[te,ae]of o.remotes)W.has(te)||(e.remove(ae),o.remotes.delete(te));let le=new Map(L.z.map(te=>[te[0],te])),Me=new Set;for(let te of P.z){Me.add(te[0]);let ae=o.slot.get(te[0]);if(!ae){if(ae=t.spawn({out:{x:te[1],z:te[2]},n:{x:0,z:1},t:{x:1,z:0},count:0},Math.max(1,F.round),!!te[6]),!ae)continue;o.slot.set(te[0],ae),ae.runner=!!te[7],ae.mpX=te[1],ae.mpZ=te[2],ae.state="chase"}let Pe=le.get(te[0])||te;ae.mpX=l(Pe[1],te[1],D),ae.mpZ=l(Pe[2],te[2],D),ae.mpYaw=c(Pe[3],te[3],D),ae.mpClimb=te[5],te[8]&&ae.attackT<=0&&(ae.attackT=.01)}for(let[te,ae]of o.slot)Me.has(te)||(o.slot.delete(te),ae.state!=="dead"&&ae.state!=="dying"&&(ae.state="dying",ae.dieT=0,ae.dieDir=Math.random()*.8-.4,i.onZDie?.(ae)));for(let te of o.slot.values()){let ae=Math.hypot(te.mpX-te.pos.x,te.mpZ-te.pos.z);te.pos.x=te.mpX,te.pos.z=te.mpZ,te.speed=0,te.cool=99,te.phase+=Math.min(.6,ae*2.6),te.stuckTot=0}t.update(x,b,n,i.world.door,{...M,hitPlayer:()=>{}});for(let te of o.slot.values())te.pos.x=te.mpX,te.pos.z=te.mpZ,te.yaw=te.mpYaw,te.root.rotation.y=te.mpYaw,te.root.position.y=te.mpClimb||0,te.climbY=te.mpClimb||0;t.alive=o.slot.size}let E=new N;function T(x){let b=[...o.remotes.values()].filter(D=>D.position.y<.1&&D.visible);if(!b.length)return null;let M=Math.floor(performance.now()/6e3)%b.length,C=b[M],O=C.rotation.y,L=C.position.x+Math.sin(O)*3.4,P=C.position.z+Math.cos(O)*3.4;return E.set(L,2.6,P),x.position.lerp(E,.2),x.lookAt(C.position.x,1.4,C.position.z),C.userData.name}function A(x,b){let M=o.remotes.get(x);M&&M.userData.talk&&(M.userData.talk.visible=!!b)}return{S:o,spectate:T,connect:f,stop:y,update:_,send:m,setTalking:A,get on(){return o.on}}}function sx(i,e,t){let s=Math.min(2,window.devicePixelRatio||1),r=document.createElement("canvas");r.id="minimap",r.width=r.height=104*s,document.getElementById("hud").appendChild(r);let o=r.getContext("2d"),l={x0:1e9,x1:-1e9,z0:1e9,z1:-1e9};for(let y of i.colliders)y.y1>=2.5&&y.x1-y.x0+(y.z1-y.z0)>3&&(l.x0=Math.min(l.x0,y.x0),l.x1=Math.max(l.x1,y.x1),l.z0=Math.min(l.z0,y.z0),l.z1=Math.max(l.z1,y.z1));let c=3,a=Math.max(l.x1-l.x0,l.z1-l.z0)+c*2,h=104*s/a,u=(l.x0+l.x1)/2,d=(l.z0+l.z1)/2,f=y=>(y-u)*h+104*s/2,p=y=>(y-d)*h+104*s/2,v=document.createElement("canvas");v.width=v.height=104*s;let g=v.getContext("2d");g.fillStyle="rgba(200,230,240,0.55)";for(let y of i.colliders)y.y1>=1&&g.fillRect(f(y.x0),p(y.z0),Math.max(1,(y.x1-y.x0)*h),Math.max(1,(y.z1-y.z0)*h));let m=0;return function(w){if(m+=w,m<.08)return;m=0;let _=104*s;o.clearRect(0,0,_,_),o.drawImage(v,0,0),o.fillStyle="#ff3b4e";let E=2.4*s;for(let C of e.list)C.state!=="dead"&&C.root.visible&&(o.beginPath(),o.arc(f(C.pos.x),p(C.pos.z),E,0,6.283),o.fill());let T=f(t.x),A=p(t.z),x=-Math.sin(t.yaw),b=-Math.cos(t.yaw),M=6*s;i.marker&&(o.fillStyle="#ffd36b",o.fillRect(f(i.marker.x)-3*s,p(i.marker.z)-3*s,6*s,6*s)),o.fillStyle="#3cf0c0",o.strokeStyle="#04241c",o.lineWidth=s,o.beginPath(),o.moveTo(T+x*M,A+b*M),o.lineTo(T-x*M*.6-b*M*.6,A-b*M*.6+x*M*.6),o.lineTo(T-x*M*.6+b*M*.6,A-b*M*.6-x*M*.6),o.closePath(),o.fill(),o.stroke()}}var rs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Zn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},GE=new ji(-1,1,1,-1,0,1),Ap=class extends xt{constructor(){super(),this.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ut([0,2,0,0,2,0],2))}},VE=new Ap,os=class{constructor(e){this._mesh=new me(VE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,GE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Fo=class extends Zn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Rn.clone(e.uniforms),this.material=new yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new os(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ml=class extends Zn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Au=class extends Zn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ru=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new pe);this._width=n.width,this._height=n.height,t=new Zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fo(rs),this.copyPass.material.blending=an,this.timer=new ka}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Ml!==void 0&&(o instanceof Ml?n=!0:o instanceof Au&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var bl=class extends Zn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new de}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var rx={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Bo=class i extends Zn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new pe(e.x,e.y):new pe(256,256),this.clearColor=new de(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Zt(r,o,{type:Wt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Zt(r,o,{type:Wt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Zt(r,o,{type:Wt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let l=rx;this.highPassUniforms=Rn.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yt({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new pe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let a=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=a,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Rn.clone(rs.uniforms),this.blendMaterial=new yt({uniforms:this.copyUniforms,vertexShader:rs.vertexShader,fragmentShader:rs.fragmentShader,premultipliedAlpha:!0,blending:ln,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new de,this._oldClearAlpha=1,this._basic=new nt,this._fsQuad=new os(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new pe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let l=t[o],c=o+1<e?t[o+1]:0,a=l+c;s.push((o*l+(o+1)*c)/a),r.push(a)}return new yt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new pe(.5,.5)},direction:{value:new pe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Bo.BlurDirectionX=new pe(1,0);Bo.BlurDirectionY=new pe(0,1);var Sl={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new pe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new je},cameraProjectionMatrixInverse:{value:new je},cameraWorldMatrix:{value:new je},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new N(-1,-1,-1)},sceneBoxMax:{value:new N(1,1,1)}},vertexShader:`

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
		}`},El={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Cu={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function ox(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=WE(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let l=t[o],c=2*Math.PI*l/n,a=new N(Math.cos(c),Math.sin(c),0).normalize();s[o*4]=(a.x*.5+.5)*255,s[o*4+1]=(a.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new vi(s,e,e);return r.wrapS=on,r.wrapT=on,r.needsUpdate=!0,r}function WE(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var Tl={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Rp(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new pe},cameraProjectionMatrixInverse:{value:new je},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Rp(i,e,t){let n=XE(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function XE(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new N(Math.cos(r),Math.sin(r),o))}return n}var Pu=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),l=(e+t)*o,c=Math.floor(e+l),a=Math.floor(t+l),h=(3-Math.sqrt(3))/6,u=(c+a)*h,d=c-u,f=a-u,p=e-d,v=t-f,g,m;p>v?(g=1,m=0):(g=0,m=1);let y=p-g+h,w=v-m+h,_=p-1+2*h,E=v-1+2*h,T=c&255,A=a&255,x=this.perm[T+this.perm[A]]%12,b=this.perm[T+g+this.perm[A+m]]%12,M=this.perm[T+1+this.perm[A+1]]%12,C=.5-p*p-v*v;C<0?n=0:(C*=C,n=C*C*this._dot(this.grad3[x],p,v));let O=.5-y*y-w*w;O<0?s=0:(O*=O,s=O*O*this._dot(this.grad3[b],y,w));let L=.5-_*_-E*E;return L<0?r=0:(L*=L,r=L*L*this._dot(this.grad3[M],_,E)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,l,a=(e+t+n)*.3333333333333333,h=Math.floor(e+a),u=Math.floor(t+a),d=Math.floor(n+a),f=1/6,p=(h+u+d)*f,v=h-p,g=u-p,m=d-p,y=e-v,w=t-g,_=n-m,E,T,A,x,b,M;y>=w?w>=_?(E=1,T=0,A=0,x=1,b=1,M=0):y>=_?(E=1,T=0,A=0,x=1,b=0,M=1):(E=0,T=0,A=1,x=1,b=0,M=1):w<_?(E=0,T=0,A=1,x=0,b=1,M=1):y<_?(E=0,T=1,A=0,x=0,b=1,M=1):(E=0,T=1,A=0,x=1,b=1,M=0);let C=y-E+f,O=w-T+f,L=_-A+f,P=y-x+2*f,D=w-b+2*f,F=_-M+2*f,B=y-1+3*f,q=w-1+3*f,k=_-1+3*f,W=h&255,ee=u&255,le=d&255,Me=this.perm[W+this.perm[ee+this.perm[le]]]%12,te=this.perm[W+E+this.perm[ee+T+this.perm[le+A]]]%12,ae=this.perm[W+x+this.perm[ee+b+this.perm[le+M]]]%12,Pe=this.perm[W+1+this.perm[ee+1+this.perm[le+1]]]%12,Z=.6-y*y-w*w-_*_;Z<0?s=0:(Z*=Z,s=Z*Z*this._dot3(this.grad3[Me],y,w,_));let re=.6-C*C-O*O-L*L;re<0?r=0:(re*=re,r=re*re*this._dot3(this.grad3[te],C,O,L));let Ae=.6-P*P-D*D-F*F;Ae<0?o=0:(Ae*=Ae,o=Ae*Ae*this._dot3(this.grad3[ae],P,D,F));let Xe=.6-B*B-q*q-k*k;return Xe<0?l=0:(Xe*=Xe,l=Xe*Xe*this._dot3(this.grad3[Pe],B,q,k)),32*(s+r+o+l)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,l=this.perm,c=(Math.sqrt(5)-1)/4,a=(5-Math.sqrt(5))/20,h,u,d,f,p,v=(e+t+n+s)*c,g=Math.floor(e+v),m=Math.floor(t+v),y=Math.floor(n+v),w=Math.floor(s+v),_=(g+m+y+w)*a,E=g-_,T=m-_,A=y-_,x=w-_,b=e-E,M=t-T,C=n-A,O=s-x,L=b>M?32:0,P=b>C?16:0,D=M>C?8:0,F=b>O?4:0,B=M>O?2:0,q=C>O?1:0,k=L+P+D+F+B+q,W=o[k][0]>=3?1:0,ee=o[k][1]>=3?1:0,le=o[k][2]>=3?1:0,Me=o[k][3]>=3?1:0,te=o[k][0]>=2?1:0,ae=o[k][1]>=2?1:0,Pe=o[k][2]>=2?1:0,Z=o[k][3]>=2?1:0,re=o[k][0]>=1?1:0,Ae=o[k][1]>=1?1:0,Xe=o[k][2]>=1?1:0,Q=o[k][3]>=1?1:0,xe=b-W+a,Ee=M-ee+a,ne=C-le+a,ue=O-Me+a,ve=b-te+2*a,fe=M-ae+2*a,Se=C-Pe+2*a,Ve=O-Z+2*a,He=b-re+3*a,et=M-Ae+3*a,tt=C-Xe+3*a,z=O-Q+3*a,vt=b-1+4*a,ot=M-1+4*a,U=C-1+4*a,S=O-1+4*a,V=g&255,Y=m&255,J=y&255,be=w&255,Ce=l[V+l[Y+l[J+l[be]]]]%32,oe=l[V+W+l[Y+ee+l[J+le+l[be+Me]]]]%32,ce=l[V+te+l[Y+ae+l[J+Pe+l[be+Z]]]]%32,Ie=l[V+re+l[Y+Ae+l[J+Xe+l[be+Q]]]]%32,Te=l[V+1+l[Y+1+l[J+1+l[be+1]]]]%32,_e=.6-b*b-M*M-C*C-O*O;_e<0?h=0:(_e*=_e,h=_e*_e*this._dot4(r[Ce],b,M,C,O));let ye=.6-xe*xe-Ee*Ee-ne*ne-ue*ue;ye<0?u=0:(ye*=ye,u=ye*ye*this._dot4(r[oe],xe,Ee,ne,ue));let De=.6-ve*ve-fe*fe-Se*Se-Ve*Ve;De<0?d=0:(De*=De,d=De*De*this._dot4(r[ce],ve,fe,Se,Ve));let We=.6-He*He-et*et-tt*tt-z*z;We<0?f=0:(We*=We,f=We*We*this._dot4(r[Ie],He,et,tt,z));let st=.6-vt*vt-ot*ot-U*U-S*S;return st<0?p=0:(st*=st,p=st*st*this._dot4(r[Te],vt,ot,U,S)),27*(h+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var ko=class i extends Zn{constructor(e,t,n=512,s=512,r,o,l){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=ox(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Zt(this.width,this.height,{type:Wt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new yt({defines:Object.assign({},Sl.defines),uniforms:Rn.clone(Sl.uniforms),vertexShader:Sl.vertexShader,fragmentShader:Sl.fragmentShader,blending:an,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Da,this.normalMaterial.blending=an,this.pdMaterial=new yt({defines:Object.assign({},Tl.defines),uniforms:Rn.clone(Tl.uniforms),vertexShader:Tl.vertexShader,fragmentShader:Tl.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new yt({defines:Object.assign({},El.defines),uniforms:Rn.clone(El.uniforms),vertexShader:El.vertexShader,fragmentShader:El.fragmentShader,blending:an}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new yt({uniforms:Rn.clone(rs.uniforms),vertexShader:rs.vertexShader,fragmentShader:rs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ga,blendDst:Cr,blendEquation:yi,blendSrcAlpha:Ha,blendDstAlpha:Cr,blendEquationAlpha:yi}),this.blendMaterial=new yt({uniforms:Rn.clone(Cu.uniforms),vertexShader:Cu.vertexShader,fragmentShader:Cu.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ih,blendSrc:Ga,blendDst:Cr,blendEquation:yi,blendSrcAlpha:Ha,blendDstAlpha:Cr,blendEquationAlpha:yi}),this._fsQuad=new os(null),this._originalClearColor=new de,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),l!==void 0&&this.updatePdMaterial(l)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Yi,this.depthTexture.format=Qi,this.depthTexture.type=Ys,this.normalRenderTarget=new Zt(this.width,this.height,{minFilter:jt,magFilter:jt,type:Wt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Rp(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=an,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=an,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=an,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=an,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=an,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=l,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=l,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Pu,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let l=0;l<e;l++){let c=o,a=l;s[(o*e+l)*4]=(t.noise(c,a)*.5+.5)*255,s[(o*e+l)*4+1]=(t.noise(c+e,a)*.5+.5)*255,s[(o*e+l)*4+2]=(t.noise(c,a+e)*.5+.5)*255,s[(o*e+l)*4+3]=(t.noise(c+e,a+e)*.5+.5)*255}let r=new vi(s,e,e,Xn,Bn);return r.wrapS=on,r.wrapT=on,r.needsUpdate=!0,r}};ko.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var wl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Iu=class extends Zn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Rn.clone(wl.uniforms),this.material=new So({name:wl.name,uniforms:this.uniforms,vertexShader:wl.vertexShader,fragmentShader:wl.fragmentShader}),this._fsQuad=new os(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===At&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Va?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Pr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ya?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Za?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===qa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Al=class{constructor(e,t,n){this.max=e,this.n=0,this.next=0;let s=this.geo=new xt;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.siz=new Float32Array(e),s.setAttribute("position",new lt(this.pos,3).setUsage(sl)),s.setAttribute("aColor",new lt(this.col,4).setUsage(sl)),s.setAttribute("aSize",new lt(this.siz,1).setUsage(sl)),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.s0=new Float32Array(e),this.s1=new Float32Array(e),this.c0=new Float32Array(e*4),this.uniforms={map:{value:n},uScale:{value:800}};let r=this.mat=new yt({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:t?ln:Ji,vertexShader:`attribute float aSize; attribute vec4 aColor; varying vec4 vC; uniform float uScale;
        void main(){ vec4 mv = modelViewMatrix*vec4(position,1.); gl_Position = projectionMatrix*mv; gl_PointSize = clamp(aSize*uScale/max(-mv.z,0.1), 0., 300.); vC = aColor; }`,fragmentShader:`uniform sampler2D map; varying vec4 vC;
        void main(){ float a = texture2D(map, gl_PointCoord).a * vC.a; if(a<0.004) discard; gl_FragColor = vec4(vC.rgb, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        }`});this.points=new _s(s,r),this.points.frustumCulled=!1,this.points.renderOrder=5,this.points.userData.noAO=!0}emit(e,t,n,s,r,o,l,c,a,h,u,d,f,p=0,v=0){let g=this.next;this.next=(this.next+1)%this.max,this.pos[g*3]=e,this.pos[g*3+1]=t,this.pos[g*3+2]=n,this.vel[g*3]=s,this.vel[g*3+1]=r,this.vel[g*3+2]=o,this.life[g]=this.maxLife[g]=l,this.s0[g]=c,this.s1[g]=a,this.grav[g]=p,this.drag[g]=v,this.c0[g*4]=h,this.c0[g*4+1]=u,this.c0[g*4+2]=d,this.c0[g*4+3]=f}update(e){let{pos:t,vel:n,life:s,maxLife:r,col:o,siz:l,c0:c}=this;for(let a=0;a<this.max;a++){if(s[a]<=0){l[a]=0,o[a*4+3]=0;continue}if(s[a]-=e,s[a]<=0){l[a]=0,o[a*4+3]=0;continue}let h=1-s[a]/r[a],u=a*3,d=Math.max(0,1-this.drag[a]*e);n[u]*=d,n[u+1]=n[u+1]*d-this.grav[a]*e,n[u+2]*=d,t[u]+=n[u]*e,t[u+1]+=n[u+1]*e,t[u+2]+=n[u+2]*e,t[u+1]<.02&&this.grav[a]>0&&(t[u+1]=.02,n[u]*=.4,n[u+2]*=.4,n[u+1]*=-.25),l[a]=this.s0[a]+(this.s1[a]-this.s0[a])*h;let f=h<.1?h*10:1-(h-.1)/.9;o[a*4]=c[a*4],o[a*4+1]=c[a*4+1],o[a*4+2]=c[a*4+2],o[a*4+3]=c[a*4+3]*f}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0}clear(){this.life.fill(0)}},Lu=class{constructor(e,t,n){this.scene=e,this.tier=n;let s=n>0?1:.4;this.soft=new Al(Math.floor(900*s)+100,!1,t.glow),this.add=new Al(Math.floor(900*s)+100,!0,t.glow),e.add(this.soft.points,this.add.points),this.tracers=[];let r=new rt(1,1,1);for(let o=0;o<24;o++){let l=new me(r,new nt({color:new de(5,3.6,1.4),transparent:!0,blending:ln,depthWrite:!1,toneMapped:!1}));l.visible=!1,l.userData.noAO=!0,l.userData.t=0,e.add(l),this.tracers.push(l)}this.tn=0,this.maxCas=n>0?80:16,this.cas=new Fn(new Ft(.009,.009,.034,6),new Je({color:14066743,metalness:1,roughness:.3}),this.maxCas),this.cas.frustumCulled=!1,this.cas.castShadow=!1,e.add(this.cas),this.casData=Array.from({length:this.maxCas},()=>({t:0,p:new N,v:new N,r:new ai,w:new N})),this.casNext=0,this._m=new je,this._q=new fn,this._s=new N(1,1,1);for(let o=0;o<this.maxCas;o++)this._m.makeScale(0,0,0),this.cas.setMatrixAt(o,this._m)}setScale(e,t){let n=e/(2*Math.tan(t*Math.PI/360));this.soft.uniforms.uScale.value=n,this.add.uniforms.uScale.value=n}tracer(e,t,n=.012){let s=this.tracers[this.tn++%this.tracers.length],r=e.distanceTo(t);r<.5||(s.position.copy(e).lerp(t,.5),s.lookAt(t),s.scale.set(n,n,r),s.visible=!0,s.userData.t=.06,s.material.opacity=1)}casing(e,t){let n=this.casData[this.casNext++%this.maxCas];n.t=2.5,n.p.copy(e),n.v.copy(t),n.r.set($(tn),$(tn),$(tn)),n.w.set($(-30,30),$(-30,30),$(-30,30))}blood(e,t,n,s=1){let r=this.tier>0?1:.5;n=Math.ceil(n*r);for(let o=0;o<n;o++){let l=$(.6,3.2)*s;this.soft.emit(e.x,e.y,e.z,t.x*l+$(-1,1),t.y*l+$(-.2,1.4),t.z*l+$(-1,1),$(.35,.8),$(.12,.2)*s,$(.45,.8)*s,$(.55,.9),$(.02,.07),$(.04,.12),$(.35,.65),4,2.5)}for(let o=0;o<Math.ceil(n*.6);o++){let l=$(1.5,5)*s;this.soft.emit(e.x,e.y,e.z,t.x*l+$(-1.5,1.5),t.y*l+$(0,2.5),t.z*l+$(-1.5,1.5),$(.5,1),.05,.04,.6,0,.03,.9,11,.4)}}sparks(e,t,n){n=Math.ceil(n*(this.tier>0?1:.5));for(let s=0;s<n;s++){let r=$(2,7);this.add.emit(e.x,e.y,e.z,t.x*r+$(-2,2),t.y*r+$(-1,2.5),t.z*r+$(-2,2),$(.2,.5),.07,.015,4,$(1.6,2.6),.5,1,9,.8)}}dust(e,t,n,s=[.45,.36,.26]){n=Math.ceil(n*(this.tier>0?1:.5));for(let r=0;r<n;r++)this.soft.emit(e.x,e.y,e.z,t.x*$(.3,1.5)+$(-.5,.5),t.y*$(.2,1)+$(0,.6),t.z*$(.3,1.5)+$(-.5,.5),$(.6,1.3),.2,$(.8,1.4),s[0],s[1],s[2],.35,-.2,1.8)}smoke(e,t,n=2){for(let s=0;s<n;s++)this.soft.emit(e.x,e.y,e.z,t.x*1.2+$(-.2,.2),t.y*1.2+$(.1,.5),t.z*1.2+$(-.2,.2),$(.5,1),.05,.28,.55,.55,.58,.25,-.4,2)}flash(e,t){this.add.emit(e.x,e.y,e.z,t.x*1,t.y*1,t.z*1,.06,.45,.8,5,3.4,1.4,1,0,0);for(let n=0;n<3;n++)this.add.emit(e.x,e.y,e.z,t.x*$(3,9)+$(-2,2),t.y*$(3,9)+$(-2,2),t.z*$(3,9)+$(-2,2),$(.08,.18),.1,.02,4,2.2,.6,1,2,1)}glowBurst(e,t,n,s,r=24,o=4){for(let l=0;l<r;l++){let c=$(tn),a=$(-.6,1),h=$(.4,1)*o;this.add.emit(e.x,e.y,e.z,Math.cos(c)*h,a*h,Math.sin(c)*h,$(.5,1.1),.18,.02,t,n,s,1,2,1.2)}}update(e){this.soft.update(e),this.add.update(e);for(let n of this.tracers)n.visible&&(n.userData.t-=e,n.material.opacity=Math.max(0,n.userData.t/.06),n.userData.t<=0&&(n.visible=!1));let t=!1;for(let n=0;n<this.maxCas;n++){let s=this.casData[n];if(s.t<=0)continue;t=!0,s.t-=e,s.v.y-=9.8*e,s.p.addScaledVector(s.v,e),s.p.y<.02&&(s.p.y=.02,s.v.y*=-.35,s.v.x*=.6,s.v.z*=.6,s.w.multiplyScalar(.5)),s.r.x+=s.w.x*e,s.r.y+=s.w.y*e,s.r.z+=s.w.z*e;let r=Math.min(1,s.t*2);this._q.setFromEuler(s.r),this._s.setScalar(s.t>0?r:0),this._m.compose(s.p,this._q,this._s),this.cas.setMatrixAt(n,this._m),s.t<=0&&(this._m.makeScale(0,0,0),this.cas.setMatrixAt(n,this._m))}(t||this._anyBefore)&&(this.cas.instanceMatrix.needsUpdate=!0),this._anyBefore=t}reset(){this.soft.clear(),this.add.clear();for(let e of this.casData)e.t=0;for(let e of this.tracers)e.visible=!1}},Rl=class{constructor(e,t,n={}){this.o=Object.assign({R:22,y0:.2,y1:6,size:.06,alpha:.2,col:[.9,.75,.55],additive:!0,speed:1},n),this.ps=new Al(t,this.o.additive,e.glow),this.n=t,this.R=this.o.R,this.t=0;for(let s=0;s<t;s++)this.ps.pos[s*3]=$(-this.R,this.R),this.ps.pos[s*3+1]=$(this.o.y0,this.o.y1),this.ps.pos[s*3+2]=$(-this.R,this.R);this.ps.update=s=>this.upd(s),this.points=this.ps.points,this.center={x:0,z:0}}upd(e){let t=this.ps,n=this.o;this.t+=e;let s=this.center;for(let r=0;r<this.n;r++){let o=r*3,l=n.speed;t.pos[o]+=(Math.sin(this.t*.3+r)*.25+.35)*e*l,t.pos[o+1]+=Math.sin(this.t*.4+r*1.7)*.06*e*l,t.pos[o+2]+=Math.cos(this.t*.25+r*.7)*.2*e*l,t.pos[o]-s.x>this.R?t.pos[o]-=this.R*2:t.pos[o]-s.x<-this.R&&(t.pos[o]+=this.R*2),t.pos[o+2]-s.z>this.R?t.pos[o+2]-=this.R*2:t.pos[o+2]-s.z<-this.R&&(t.pos[o+2]+=this.R*2),t.siz[r]=n.size*(1+r%3*.4),t.col[r*4]=n.col[0],t.col[r*4+1]=n.col[1],t.col[r*4+2]=n.col[2],t.col[r*4+3]=n.alpha*(.6+.4*(r%4/3))}t.geo.attributes.position.needsUpdate=!0,t.geo.attributes.aColor.needsUpdate=!0,t.geo.attributes.aSize.needsUpdate=!0}},qE={uniforms:{tDiffuse:{value:null},uTime:{value:0},uDamage:{value:0},uVig:{value:.55},uGrain:{value:.07},uSat:{value:1.1},uAberr:{value:.6},uRes:{value:new pe(1,1)},uLow:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime,uDamage,uVig,uGrain,uSat,uAberr,uLow; uniform vec2 uRes; varying vec2 vUv;
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
    }`},Du=class{constructor(e,t,n,s){this.r=e,this.scene=t,this.camera=n,this.viewScene=s,this.mode="direct",this.w=1,this.h=1,this.pr=1}build(e){if(this.mode=e,this.composer&&(this.composer.dispose?.(),this.composer=null),e==="direct")return;let t=new Zt(this.w,this.h,{type:Wt,samples:e==="full"?0:4}),n=this.composer=new Ru(this.r,t);if(n.setPixelRatio?.(this.pr),n.setSize(this.w,this.h),n.addPass(new bl(this.scene,this.camera)),e==="full"){let r=this.gtao=new ko(this.scene,this.camera,this.w*this.pr,this.h*this.pr);r.output=ko.OUTPUT.Default,r.blendIntensity=1,r.updateGtaoMaterial({radius:.7,distanceExponent:1.5,thickness:1.5,scale:1.2,samples:10,distanceFallOff:1,screenSpaceRadius:!1}),r.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,radiusExponent:1,rings:2,samples:8});let o=r._overrideVisibility.bind(r);r._overrideVisibility=()=>{o(),this.scene.traverse(l=>{l.userData.noAO&&l.visible&&(l.visible=!1,r._visibilityCache.push(l))})},n.addPass(r)}let s=new bl(this.viewScene,this.camera);s.clear=!1,s.clearDepth=!0,n.addPass(s),this.bloom=new Bo(new pe(this.w,this.h),.42,.55,.9),n.addPass(this.bloom),n.addPass(new Iu),this.grade=new Fo(qE),this.grade.uniforms.uRes.value.set(this.w*this.pr,this.h*this.pr),n.addPass(this.grade)}setSize(e,t,n){this.w=e,this.h=t,this.pr=n,this.composer&&(this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.gtao?.setSize(e*n,t*n),this.grade.uniforms.uRes.value.set(e*n,t*n))}render(e,t,n,s){if(!this.composer){let o=this.r;o.autoClear=!1,o.clear(),o.render(this.scene,this.camera),o.clearDepth(),o.render(this.viewScene,this.camera),o.autoClear=!0;return}let r=this.grade.uniforms;r.uTime.value=t,r.uDamage.value=n,r.uLow.value=s,this.composer.render(e)}};var Nu=class{constructor(){this.ctx=null,this.muted=!1,this.lastGroan=0,this.lastTick=0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=this.muted?0:.8;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,n.attack.value=.003,n.release.value=.2,this.master.connect(n),n.connect(t.destination);let s=t.createBuffer(1,t.sampleRate*2,t.sampleRate),r=s.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=Math.random()*2-1;this.noise=s;let o=t.sampleRate*1.8,l=t.createBuffer(2,o,t.sampleRate);for(let c=0;c<2;c++){let a=l.getChannelData(c);for(let h=0;h<o;h++)a[h]=(Math.random()*2-1)*Math.pow(1-h/o,3.2)}this.verb=t.createConvolver(),this.verb.buffer=l,this.verbIn=t.createGain(),this.verbIn.gain.value=.35,this.verbIn.connect(this.verb),this.verb.connect(this.master),this.startAmbient()}setMuted(e){this.muted=e,this.master&&this.master.gain.setTargetAtTime(e?0:.8,this.ctx.currentTime,.03)}get ok(){return this.ctx&&!this.muted&&this.ctx.state==="running"}out(e=0,t=.3){let n=this.ctx,s=n.createGain(),r=s;if(n.createStereoPanner){let l=n.createStereoPanner();l.pan.value=Kt(e,-1,1),s.connect(l),r=l}r.connect(this.master);let o=n.createGain();return o.gain.value=t,r.connect(o),o.connect(this.verbIn),s}nz(e,t,n,s,r,o,l,c=1){let a=this.ctx,h=a.createBufferSource();h.buffer=this.noise,h.loop=!0;let u=a.createBiquadFilter();u.type=n,u.Q.value=c,u.frequency.setValueAtTime(s,e),u.frequency.exponentialRampToValueAtTime(Math.max(20,r),e+t);let d=a.createGain();d.gain.setValueAtTime(o,e),d.gain.exponentialRampToValueAtTime(8e-4,e+t),h.connect(u),u.connect(d),d.connect(l),h.start(e,$(1)),h.stop(e+t+.05)}tone(e,t,n,s,r,o,l,c=.003){let a=this.ctx,h=a.createOscillator();h.type=n,h.frequency.setValueAtTime(s,e),h.frequency.exponentialRampToValueAtTime(Math.max(10,r),e+t);let u=a.createGain();u.gain.setValueAtTime(1e-4,e),u.gain.linearRampToValueAtTime(o,e+c),u.gain.exponentialRampToValueAtTime(8e-4,e+t),h.connect(u),u.connect(l),h.start(e),h.stop(e+t+.05)}shot(e){if(!this.ok)return;let t=this.ctx,n=t.currentTime,s=this.out(0,e==="shotgun"||e==="lmg"?.5:.3),r={pistol:[.13,2600,.7,150,.9,.55],akimbo:[.1,2800,.55,170,.75,.45],smg:[.09,3400,.5,190,.7,.45],shotgun:[.34,1800,1,85,1.2,.9],sawed:[.28,1500,1.1,70,1.3,1],rifle:[.16,2200,.8,120,1,.7],lever:[.2,1800,.75,110,1.15,.7],nailer:[.045,4200,.28,240,.25,.2],lmg:[.2,1900,.9,95,1.2,.8]}[e]||[.12,2500,.7,150,1,.6];this.nz(n,r[0],"lowpass",r[1],220,r[2],s,.7),this.nz(n,.025,"highpass",3e3,6e3,.6,s),this.tone(n,r[0]*1.2,"sine",r[3],r[3]*.3,r[4]*.9,s),this.tone(n,.05,"square",r[3]*4,r[3]*1.5,.15,s)}click(e=0,t=3200,n=.35,s=0){if(!this.ok)return;let r=this.ctx.currentTime+e,o=this.out(s,.1);this.nz(r,.03,"bandpass",t,t*.7,n,o,3),this.tone(r,.025,"square",t*.3,t*.2,.05,o)}reload(e){if(!this.ok)return;let t=e==="lmg"?3.4:e==="rifle"?1.7:e==="smg"?1.4:1;this.click(.12,2400,.4),this.click(t*.55,1800,.5),this.click(t*.8,3600,.45),e!=="pistol"&&this.click(t*.92,1400,.5)}pump(){this.click(0,900,.6),this.click(.18,1500,.55)}shell(){this.click(0,2e3,.45)}empty(){this.click(0,1500,.3)}groan(e=0,t=.5,n=1,s=1){if(!this.ok)return;let r=this.ctx,o=r.currentTime;if(o-this.lastGroan<.09)return;this.lastGroan=o;let l=o,c=this.out(e,.45),a=$(70,105)*n,h=r.createOscillator();h.type="sawtooth",h.frequency.setValueAtTime(a*1.25,l),h.frequency.linearRampToValueAtTime(a,l+s*.3),h.frequency.linearRampToValueAtTime(a*.7,l+s);let u=r.createOscillator();u.frequency.value=$(5,9);let d=r.createGain();d.gain.value=6,u.connect(d),d.connect(h.frequency);let f=r.createBiquadFilter();f.type="bandpass",f.Q.value=5,f.frequency.setValueAtTime($(450,700),l),f.frequency.linearRampToValueAtTime($(900,1300),l+s*.6);let p=r.createBiquadFilter();p.type="lowpass",p.frequency.value=1600;let v=r.createGain();v.gain.setValueAtTime(1e-4,l),v.gain.linearRampToValueAtTime(t*.5,l+s*.15),v.gain.exponentialRampToValueAtTime(.001,l+s),h.connect(f),f.connect(p),p.connect(v),v.connect(c),h.start(l),u.start(l),h.stop(l+s+.05),u.stop(l+s+.05),this.nz(l,s*.8,"bandpass",900,500,t*.15,c,2)}zhit(e=0,t=!1){if(!this.ok)return;let n=this.ctx.currentTime,s=this.out(e,.2);this.nz(n,.09,"lowpass",700,120,.5,s),this.tone(n,.1,"sine",120,50,.4,s),t&&this.tone(n,.08,"triangle",900,500,.12,s)}zdie(e=0,t=.4){if(!this.ok)return;this.groan(e,t,.75,.7);let n=this.ctx.currentTime+.15,s=this.out(e,.25);this.nz(n,.25,"lowpass",500,60,.6,s),this.tone(n,.3,"sine",90,35,.5,s)}tick(e){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,0);this.tone(t,.05,"square",e?900:1500,e?600:1300,e?.12:.07,n)}cash(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.2);this.tone(e,.12,"triangle",1250,1250,.22,t),this.tone(e+.07,.25,"triangle",1880,1880,.22,t),this.nz(e,.05,"highpass",5e3,8e3,.15,t)}deny(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,0);this.tone(e,.22,"sawtooth",130,90,.2,t),this.tone(e+.1,.22,"sawtooth",110,80,.2,t)}hurt(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.2);this.nz(e,.18,"lowpass",600,90,.9,t),this.tone(e,.25,"sine",80,40,.8,t),this.tone(e,.2,"sawtooth",220,110,.12,t)}heart(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,0);this.tone(e,.14,"sine",62,38,.7,t),this.tone(e+.18,.14,"sine",56,34,.5,t)}plank(e){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,.3);this.nz(t,e?.16:.08,"bandpass",e?500:800,250,.7,n,2),this.tone(t,.1,"triangle",220,90,.4,n),e&&this.nz(t+.03,.12,"highpass",1500,3e3,.3,n)}repair(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.2);this.nz(e,.07,"bandpass",1100,600,.6,t,2),this.tone(e,.08,"square",300,120,.15,t),this.tone(e+.1,.1,"triangle",1500,1500,.1,t)}door(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.5);this.nz(e,2.2,"lowpass",900,150,.7,t,1),this.tone(e,2.2,"sawtooth",55,42,.2,t,.3);for(let n=0;n<5;n++)this.click(.2+n*.35,700+n*120,.7);this.nz(e+2,.4,"lowpass",400,60,.9,t)}boom(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.7);this.nz(e,2.4,"lowpass",2400,50,1.4,t,.7),this.tone(e,1.6,"sine",90,24,1.3,t),this.tone(e+.05,.8,"sawtooth",50,25,.3,t)}power(e){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,.4);(e==="nuke"?[220,277,330,440]:e==="double"?[392,494,587,784]:[330,440,554,659]).forEach((r,o)=>{this.tone(t+o*.07,.4,"triangle",r,r,.2,n),this.tone(t+o*.07,.4,"sine",r*2,r*2,.08,n)})}medkit(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.5);[523,659,784,1047].forEach((n,s)=>{this.tone(e+s*.08,.5,"sine",n,n,.2,t),this.tone(e+s*.08,.5,"triangle",n*2,n*2,.05,t)}),this.tone(e,.9,"sine",300,600,.12,t,.1)}spawnPower(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.5);this.tone(e,.7,"sine",600,1200,.25,t,.05),this.tone(e+.1,.7,"sine",900,1800,.12,t,.05)}round(e){if(!this.ok)return;let t=this.ctx,n=t.currentTime,s=this.out(0,.8);[55,82.4,98,130.8].forEach((o,l)=>{let c=t.createOscillator();c.type="sawtooth",c.frequency.value=o;let a=t.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(200,n),a.frequency.linearRampToValueAtTime(1400,n+1.1),a.frequency.linearRampToValueAtTime(150,n+3.2);let h=t.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.linearRampToValueAtTime(.16,n+.9),h.gain.exponentialRampToValueAtTime(.001,n+3.4),c.connect(a),a.connect(h),h.connect(s),c.start(n),c.stop(n+3.5)}),[440,415,392,330,294].forEach((o,l)=>{this.tone(n+.5+l*.32,1.3,"sine",o,o,.14,s,.01),this.tone(n+.5+l*.32,1.3,"sine",o*2.01,o*2.01,.04,s,.01)}),this.tone(n,.5,"sine",70,28,.9,s),this.nz(n,.35,"lowpass",700,70,.5,s)}over(){if(!this.ok)return;let e=this.ctx,t=e.currentTime,n=this.out(0,.9);[110,130.8,164.8].forEach(s=>{this.tone(t,3.6,"sawtooth",s,s*.5,.12,n,.4)}),this.tone(t,1.5,"sine",60,25,1,n),this.nz(t,1.2,"lowpass",900,60,.7,n)}jingle(e=4){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,.5),s=[523,659,784,659,587,740,880,740];for(let r=0;r<e*4;r++){let o=s[r%s.length]*(r>8?1.12:1);this.tone(t+r*.2,.32,"triangle",o,o,.1,n,.005)}this.nz(t,.4,"bandpass",600,300,.4,n)}open(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.out(0,.4);this.nz(e,.5,"bandpass",500,900,.4,t,4),this.tone(e,.5,"sawtooth",120,220,.1,t)}startAmbient(){let e=this.ctx,t=e.createGain();t.gain.value=.5,t.connect(this.master);let n=e.createBufferSource();n.buffer=this.noise,n.loop=!0;let s=e.createBiquadFilter();s.type="bandpass",s.Q.value=.8,s.frequency.value=380;let r=e.createGain();r.gain.value=.07;let o=e.createOscillator();o.frequency.value=.11;let l=e.createGain();l.gain.value=.045,o.connect(l),l.connect(r.gain);let c=e.createOscillator();c.frequency.value=.07;let a=e.createGain();a.gain.value=140,c.connect(a),a.connect(s.frequency),n.connect(s),s.connect(r),r.connect(t),n.start(),o.start(),c.start();let h=e.createOscillator();h.type="sawtooth",h.frequency.value=36;let u=e.createBiquadFilter();u.type="lowpass",u.frequency.value=90;let d=e.createGain();d.gain.value=.04,h.connect(u),u.connect(d),d.connect(t),h.start();let f=e.createOscillator();f.type="sine",f.frequency.value=4300;let p=e.createGain();p.gain.value=0;let v=e.createOscillator();v.type="square",v.frequency.value=28;let g=e.createGain();g.gain.value=.003,v.connect(g),g.connect(p.gain);let m=e.createOscillator();m.frequency.value=.3;let y=e.createGain();y.gain.value=.002,m.connect(y),y.connect(p.gain),f.connect(p),p.connect(t),f.start(),v.start(),m.start()}beep(e=3){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,0),s=e<1.2?1480:860;this.tone(t,.04,"square",s,s,e<1.2?.1:.05,n)}_distort(e){let n=new Float32Array(256);for(let s=0;s<256;s++){let r=s/255*2-1;n[s]=Math.tanh(r*e)}return n}ensureMusic(){if(!this.ctx||this.musicBus)return;let e=this.ctx;this.musicBus=e.createGain(),this.musicBus.gain.value=.2,this.musicBus.connect(this.master),this.musicFilter=e.createBiquadFilter(),this.musicFilter.type="lowpass",this.musicFilter.frequency.value=1200,this.musicFilter.connect(this.musicBus),this.guitarShaper=e.createWaveShaper(),this.guitarShaper.curve=this._distort(14),this.guitarShaper.oversample="2x";let t=e.createBiquadFilter();t.type="lowpass",t.frequency.value=2400,this.guitarShaper.connect(t),t.connect(this.musicFilter),this.guitarIn=e.createGain(),this.guitarIn.gain.value=.2,this.guitarIn.connect(this.guitarShaper),this.musicOn=!0,this.musicPlaying=!1,this.musicMood="calm",this.musicLow=!1,this._nextMus=0,this._duckUntil=0,this._six=0}setMusicDetail(e){this.musicLow=!!e,this.guitarShaper&&(this.guitarShaper.oversample=e?"none":"2x")}setMusicOn(e){this.musicOn=!!e,this.musicBus&&this.musicBus.gain.setTargetAtTime(this.musicOn?.2:0,this.ctx.currentTime,.05)}musicStart(){this.init(),this.ensureMusic(),this.musicPlaying=!0,this._nextMus=0,this._six=0}musicStop(){this.musicPlaying=!1,this._nextMus=0}setMusicPhase(e){this.musicMood=e==="hot"||e==="round"?"hot":"calm",this.musicFilter&&this.musicFilter.frequency.setTargetAtTime(this.musicMood==="hot"?this.musicLow?1600:3400:1e3,this.ctx.currentTime,.35)}pumpMusic(){if(!this.ctx||!this.musicPlaying||!this.musicOn||this.muted||this.ctx.state!=="running")return;this.ensureMusic();let e=this.ctx.currentTime,t=e+(this.musicLow?.28:.2);(!this._nextMus||this._nextMus<e-.05)&&(this._nextMus=e+.04);let n=this.musicMood==="hot"?146:96,s=60/n/4;e<(this._duckUntil||0)?this.musicBus.gain.setTargetAtTime(.05,e,.04):this.musicBus.gain.setTargetAtTime(this.musicMood==="hot"?.24:.14,e,.25);let o=(c,a,h,u,d,f,p=this.musicFilter)=>this.tone(c,a,h,u,d,f,p,.004),l=(c,a,h,u,d,f)=>this.nz(c,a,h,u,d,f,this.musicFilter);for(;this._nextMus<t;)this._riffStep(o,l,this._nextMus,s,this._six++,this.musicMood==="hot",this.musicLow),this._nextMus+=s}_riffStep(e,t,n,s,r,o,l,c){let a=c||this.guitarIn,h=(r%16+16)%16,u=Math.floor(r/16)%4,f=[[164.81,246.94,41.2],[196,293.66,49],[146.83,220,36.71],[164.81,246.94,41.2]][u],p=o?h===0||h===3||h===6||h===10:h===0||h===7,v=o?h===4||h===12:h===8;if(p&&(e(n,.14,"sine",160,46,o?.72:.5),t(n,.018,"highpass",2400,700,.16)),v&&(t(n,l?.06:.1,"bandpass",1900,700,o?.32:.18),l||e(n,.04,"triangle",240,150,.07)),!l&&(o||h%2===0)){let m=o&&(h===6||h===14);t(n,m?.07:.018,"highpass",m?5500:8e3,4200,o?h%2?.045:.08:.03)}if((l?h===0:o?h%2===0:h===0||h===8||h===12)&&a){let m=l?s*10:o?s*1.5:s*5,y=o?.11:.06;t(n,.012,"highpass",3e3,1200,.05),e(n,m,"sawtooth",f[0],f[0]*.985,y,a),l||e(n,m,"sawtooth",f[1]*1.005,f[1],y*.55,a)}if(h===0||o&&!l&&(h===8||h===11)){let m=o&&h!==0,y=m?f[2]*1.5:f[2]*1.04,w=f[2];e(n,m?s*4:s*(o?7:12),"sine",y,w,o?.42:.26)}}duck(e){this.ctx&&(this._duckUntil=this.ctx.currentTime+e)}lineFor(e,t,n){let s=["Wave one. The yard is waking.","Wave two. They heard the metal.","Wave three. Do not blink.","Wave four. The fence is tired.","Wave five. They smell you."],r=["The yard remembers.","More of them. Always more.","Keep the lights on."],o={fuel:["The cans are bleeding. Bring them in.","Fuel the generator. They hate the light."],bus:["Board the bus. It still knows the road.","Four windows, then the barn."],carb:["Something in the back lot is missing a heart.","Find the carburetor. It is still warm."],radio:["Hold the signal. They hunt the quiet.","Stay on the mast."],parts:["The side yard wants its pieces back.","Scrap. Three pieces. Do not linger."],clear:["Lot D is full of them. Empty it.","Clear the barn. Leave none standing."]},l={fuel:"The generator drinks. They smelled it.",bus:"The bus is boarded. They know.",carb:"The heart is back in the engine.",radio:"The signal held. Something answered.",parts:"The yard has its pieces.",clear:"Lot D is quiet. For now."};if(e==="wave")return n>=1&&n<=5?s[n-1]:r[(n||0)%r.length];if(e==="done")return l[t]||"The yard remembers.";let c=o[t]||r;return c[(n||0)%c.length]}announce(e){e&&(this._aq=this._aq||[],this._aq.push(String(e)),this._ab||this._drainAnn())}_drainAnn(){let e=(this._aq||[]).shift();if(!e){this._ab=!1;return}this._ab=!0;let t=Math.min(3.4,.6+e.length*.04);if(this.duck(t+.2),this.ctx&&!this.muted&&this.ctx.state==="running"&&this.growl(t),!this.muted&&typeof speechSynthesis<"u")try{let n=new SpeechSynthesisUtterance(e);n.rate=.76,n.pitch=.42,n.volume=.8,speechSynthesis.cancel(),speechSynthesis.speak(n)}catch{}setTimeout(()=>this._drainAnn(),t*1e3+160)}growl(e){if(!this.ok)return;let t=this.ctx.currentTime,n=this.out(0,.55),s=this.ctx.createWaveShaper(),r=new Float32Array(64);for(let l=0;l<64;l++){let c=l/63*2-1;r[l]=Math.tanh(c*4)}s.curve=r;let o=this.ctx.createBiquadFilter();o.type="bandpass",o.Q.value=6,o.frequency.setValueAtTime(180,t),o.frequency.linearRampToValueAtTime(420,t+e*.45),o.frequency.linearRampToValueAtTime(140,t+e),this.tone(t,e,"sawtooth",70,48,.22,s),s.connect(o),o.connect(n),this.nz(t,e*.8,"bandpass",500,220,.08,n,3)}async renderSample(e=8){let n=new OfflineAudioContext(1,Math.floor(22050*e),22050),s=n.createGain();s.gain.value=.85,s.connect(n.destination);let r=n.createBiquadFilter();r.type="lowpass",r.frequency.value=3400,r.connect(s);let o=n.createWaveShaper();o.curve=this._distort(14);let l=n.createBiquadFilter();l.type="lowpass",l.frequency.value=2400,o.connect(l),l.connect(r);let c=n.createGain();c.gain.value=.2,c.connect(o);let a=22050*2,h=n.createBuffer(1,a,22050),u=h.getChannelData(0);for(let b=0;b<a;b++)u[b]=Math.random()*2-1;let d=(b,M,C,O,L,P,D=r)=>{let F=n.createOscillator();F.type=C,F.frequency.setValueAtTime(Math.max(20,O),b),F.frequency.exponentialRampToValueAtTime(Math.max(20,L),b+Math.max(.02,M));let B=n.createGain();B.gain.setValueAtTime(1e-4,b),B.gain.linearRampToValueAtTime(P,b+.006),B.gain.exponentialRampToValueAtTime(8e-4,b+M),F.connect(B),B.connect(D),F.start(b),F.stop(b+M+.03)},f=(b,M,C,O,L,P)=>{let D=n.createBufferSource();D.buffer=h;let F=n.createBiquadFilter();F.type=C,F.frequency.setValueAtTime(O,b),F.frequency.exponentialRampToValueAtTime(Math.max(40,L),b+M);let B=n.createGain();B.gain.setValueAtTime(P,b),B.gain.exponentialRampToValueAtTime(8e-4,b+M),D.connect(F),F.connect(B),B.connect(r),D.start(b),D.stop(b+M+.02)},p=e*.62,v=.05,g=0;for(;v<e-.05;){let b=v<p,M=60/(b?146:96)/4;this._riffStep(d,f,v,M,g++,b,!1,c),v+=M}let m=await n.startRendering(),y=m.getChannelData(0),w=y.length,_=new ArrayBuffer(44+w*2),E=new DataView(_),T=(b,M)=>{for(let C=0;C<M.length;C++)E.setUint8(b+C,M.charCodeAt(C))};T(0,"RIFF"),E.setUint32(4,36+w*2,!0),T(8,"WAVE"),T(12,"fmt "),E.setUint32(16,16,!0),E.setUint16(20,1,!0),E.setUint16(22,1,!0),E.setUint32(24,22050,!0),E.setUint32(28,22050*2,!0),E.setUint16(32,2,!0),E.setUint16(34,16,!0),T(36,"data"),E.setUint32(40,w*2,!0);for(let b=0;b<w;b++){let M=Math.max(-1,Math.min(1,y[b]));E.setInt16(44+b*2,M<0?M*32768:M*32767,!0)}let A="",x=new Uint8Array(_);for(let b=0;b<x.length;b++)A+=String.fromCharCode(x[b]);return btoa(A)}};var ze=null,Jt=null,Kn=null,Up=new URLSearchParams(location.search),YE=Up.has("touch")||matchMedia("(pointer:coarse)").matches&&"ontouchstart"in window||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),Cp=Up.get("quality")||(()=>{try{return localStorage.getItem("vwz_q")||"auto"}catch{return"auto"}})(),ZE=Cp==="high"||Cp==="medium"||Cp==="auto"&&!YE,KE=Up.has("oldz")?Promise.resolve(null):Sp(ZE).catch(i=>(console.warn("zombie kit failed, using baked pack",i),null));await Ef(["cars"]);var Bu=await KE;Bu||await Ef(["zombies"]);var Fl=200,jE=4.5,$E=.38*Fl,Bl=.4,dx=.5,fx=20,px=.5,JE=40,se=i=>document.getElementById(i),$n=new URLSearchParams(location.search),nn=$n.has("touch")||matchMedia("(pointer:coarse)").matches&&"ontouchstart"in window||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);document.body.classList.toggle("touch",nn);var we=new Nu;try{we.muted=localStorage.getItem("vwz_mute")==="1"}catch{}var Ls=se("c"),jn=new jh({canvas:Ls,antialias:!nn,powerPreference:"high-performance",preserveDrawingBuffer:$n.has("test")});jn.toneMapping=Pr;jn.toneMappingExposure=1.05;jn.outputColorSpace=pt;jn.shadowMap.type=Rr;var sn=new mr,QE=3812412;sn.fog=new pa(QE,.026);var Lp=nn?76:72,qt=new dn(Lp,1,.05,700);qt.rotation.order="YXZ";sn.add(qt);var as=$n.get("quality")||(()=>{try{return localStorage.getItem("vwz_q")||"auto"}catch{return"auto"}})(),Gn=as==="high"?2:as==="medium"?1:as==="low"||nn?0:2,Wo=dg(nn?256:512),cs=zf($n.get("map")||(()=>{try{return localStorage.getItem("vwz_map")}catch{return null}})()),si=Hf(Gf($n.get("mode")||(()=>{try{return localStorage.getItem("vwz_mode")}catch{return null}})()),1),bt=Pg(sn,Wo,Gn,cs.id),It=new Lu(sn,Wo,Gn),Ps=new Rl(Wo,260,{R:20,y0:.3,y1:6,size:.07,alpha:.22});sn.add(Ps.points);var Qs=new Rl(Wo,46,{R:55,y0:.4,y1:2.2,size:5.5,alpha:.045,col:[.55,.5,.62],additive:!1,speed:.7});sn.add(Qs.points);var Rt=new pu(sn,bt,Gn),er=Cg({scene:sn,world:bt,fx:It,zombies:Rt,sfx:we,get P(){return I},onKill:i=>{ze?.on||Jt?.onKill(i)},onSelf:i=>{I.dead||(I.hp-=i,I.lastHit=X.time,I.hp<=0&&qu())}});Bu?(Ep(Rt,Bu),window.__hd={kit:Bu.hi?"hi":"lo"}):(window.__hd=Fg(Rt),Wg(Rt));Rt.cam=qt;var ax,eT=i=>(ax||(ax=sx(bt,Rt,I)))(i),kl=new mr,Ho=new Du(jn,sn,qt,kl),Go=nx({renderer:jn,scene:sn,world:bt,viewScene:kl});Rt.onBlood=Go.blood;var mx=!1;function gx(i){i>0&&Rt.kit&&!Rt.kit.hi&&!Rt._kitLoading&&(Rt._kitLoading=!0,Sp(!0).then(e=>{Ep(Rt,e),window.__hd={kit:"hi"}}).catch(e=>console.warn(e)))}{let i=new As(jn),e=new mr,t=new me(bt.sky.geometry,bt.sky.material.clone());t.scale.setScalar(.12),e.add(t);let n=i.fromScene(e,0,.1,100);sn.environment=n.texture,sn.environmentIntensity=.45,kl.environment=n.texture,kl.environmentIntensity=.9,i.dispose()}var zi=new Ar(14674687,40,55,.46,.75,1.25);zi.position.set(.16,-.1,-.1);zi.target.position.set(.16,-.1,-10);qt.add(zi,zi.target);zi.shadow.mapSize.set(1024,1024);zi.shadow.camera.near=.3;zi.shadow.camera.far=40;zi.shadow.bias=-6e-4;zi.shadow.normalBias=.03;var Js=new _i(16758886,0,20,2);qt.add(Js);Js.position.set(.15,-.05,-3.2);var Hi=new me(new ys(3.4,14,28,1,!0),new yt({transparent:!0,depthWrite:!1,blending:ln,side:Ht,uniforms:{c:{value:new de(.75,.85,1)},k:{value:.05}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(vy,1.2)*pow(f,2.)*k); }"}));Hi.geometry.translate(0,-7,0);Hi.geometry.rotateX(-Math.PI/2);Hi.position.set(.16,-.1,-.2);Hi.userData.noAO=!0;Hi.renderOrder=6;qt.add(Hi);var tr=new Be;tr.matrixAutoUpdate=!1;kl.add(tr);var tT=new wr(12175615,4864556,1.5),Dp=new Ts(16773341,2.2),Vu=new _i(16758886,0,3,2);Dp.position.set(1.5,2,1);tr.add(tT,Dp,Dp.target,Vu);Vu.position.set(.15,-.05,-.9);var Nl={},ls=new li(new Qn({map:Wo.glow,color:new de(6,4,1.6),blending:ln,depthWrite:!1,transparent:!0,fog:!1}));ls.scale.setScalar(.3);ls.visible=!1;ls.userData.noAO=!0;function nT(i){i.querySelectorAll("[data-w]").forEach(e=>{e.style.width=e.dataset.w+"%"})}function iT(i){if(!Nl[i]){let e=gl(i);e.visible=!1,tr.add(e),Nl[i]=e}return Nl[i]}var I={x:0,z:12,yaw:0,pitch:0,vx:0,vz:0,hp:Fl,maxHp:Fl,lastHit:-99,pts:500,kills:0,heads:0,bob:0,rP:0,rY:0,shake:0,dmg:0,flashlight:!0,slots:[],cur:0,fireCd:0,reloadT:0,reloadTot:0,switchT:0,kick:0,mv:0,sprint:!1,heat:0,dead:!1,deadT:0,sx:0,sy:0,nades:1},X={state:"menu",time:0,runTime:0,round:0,toSpawn:0,spawnT:0,interT:0,phase:"wait",drops:0,lastDrop:-99,kills:0,double:0,powers:[],ups:[],repairT:0,healBeat:0,lastMed:-99,orbit:0,menuSpawn:0,flashT:0,muzzleT:0,nadeCd:0},ct={f:0,s:0,l:0,r:0,fire:!1,reload:!1,interact:!1,interactEdge:!1,sprint:!1},Hu=i=>({id:i,mag:Xt[i].mag,reserve:Xt[i].reserve}),nr=()=>I.slots[I.cur];function Wu(i){Gn=i;let e=window.devicePixelRatio||1,t=i===2?Math.min(e,1.75):i===1?Math.min(e,1.25):Kt(e*.7,.6,1);jn.setPixelRatio(t),Ho.pr=t,jn.shadowMap.enabled=i>0,jn.shadowMap.needsUpdate=!0,Ho.build(["direct","bloom","full"][i]),Hl(),bt.setTier(i),Rt.setTier(i),Go.setTier(i),mx&&(Go.load(i),gx(i)),Rt.max=cs.cap[i>0?1:0],It.tier=i,Ps.points.visible=i>0,Qs.points.visible=!0,Qs.o.alpha=i===0?.03:.045,Hi.visible=i>0&&I.flashlight,sn.environmentIntensity=i===0?.45:.3,zi.castShadow=i===2;for(let n of Rt.list)n.root.traverse(s=>{s.isMesh&&(s.castShadow=i>0)});sn.traverse(n=>{n.material&&!Array.isArray(n.material)&&(n.material.needsUpdate=!0)}),document.body.classList.toggle("lowq",i===0),we.setMusicDetail?.(i===0||nn),jn.toneMappingExposure=i===0?1.15:1.05,se("fx-damage").style.display=i===0?"":"none"}function Hl(){let i=window.innerWidth,e=window.innerHeight;jn.setSize(i,e,!1),Ls.style.width=i+"px",Ls.style.height=e+"px",qt.aspect=i/e,qt.fov=i/e<.9?Lp+14:Lp,qt.updateProjectionMatrix(),Ho.setSize(i,e,jn.getPixelRatio()),It.setScale(e*jn.getPixelRatio(),qt.fov),Qs.ps.uniforms.uScale.value=It.soft.uniforms.uScale.value,Ps.ps.uniforms.uScale.value=It.soft.uniforms.uScale.value}window.addEventListener("resize",Hl);window.visualViewport?.addEventListener("resize",Hl);screen.orientation?.addEventListener?.("change",()=>setTimeout(Hl,120));var Ul=document.documentElement,sT=!!(Ul.requestFullscreen||Ul.webkitRequestFullscreen);document.body.classList.toggle("nofs",!sT);async function xx(){try{!document.fullscreenElement&&!document.webkitFullscreenElement&&await(Ul.requestFullscreen?Ul.requestFullscreen({navigationUI:"hide"}):Ul.webkitRequestFullscreen?.())?.catch?.(()=>{})}catch{}try{await screen.orientation?.lock?.("landscape")}catch{}setTimeout(Hl,150)}["btnFull","btnFull2"].forEach(i=>{let e=document.getElementById(i);e&&e.addEventListener("click",t=>{t.stopPropagation(),xx()})});var Il=0,ku=0,zu=3;function rT(i){if(!(X.state!=="playing"||as!=="auto"||$n.has("noadapt"))){if(zu>0){zu-=i;return}if(Il+=i,ku++,Il>=2.5){let e=ku/Il;Il=0,ku=0,e<28&&Gn>0&&(Wu(Gn-1),zu=3,gn("Graphics lowered for smoother play"))}}}var wt={hp:-1,pts:-1,mag:-1,res:-1,name:"",prompt:"",round:-1,alt:"",lobby:!1},Np=0;function gn(i){let e=se("toast");e.textContent=i,e.classList.add("on"),clearTimeout(Np),Np=setTimeout(()=>e.classList.remove("on"),2600)}function ki(i,e=""){let t=+(document.body.dataset.mban||0)-performance.now();if(t>0){setTimeout(()=>ki(i,e),t);return}let n=se("banner");n.innerHTML=i+(e?`<small>${e}</small>`:""),n.classList.remove("on"),n.offsetWidth,n.classList.add("on")}function Vo(i,e,t){let n=document.createElement("span");n.textContent=i,e==="heal"?n.className="g":e&&(n.className="h"),n.style.setProperty("--x",$(-80,80)+"px"),n.style.top=$(10,50)+"px",se("pop").appendChild(n),setTimeout(()=>n.remove(),950)}function oT(){let i=Math.max(0,Math.round(I.hp));i!==wt.hp&&(wt.hp=i,se("hpFill").style.width=100*i/I.maxHp+"%",se("hpFill").classList.toggle("low",i<I.maxHp*Bl),se("hpNum").textContent=i);let e=Fp();if(e!==wt.med&&(wt.med=e,se("medCue").classList.toggle("on",e)),I.pts!==wt.pts){if(wt.pts>=0&&I.pts>wt.pts){let u=se("pts");u.classList.remove("bump"),u.offsetWidth,u.classList.add("bump")}wt.pts=I.pts,se("pts").textContent=I.pts.toLocaleString()}let t=nr(),n=Xt[t.id];n.name!==wt.name&&(wt.name=n.name,se("wName").textContent=n.name),t.mag!==wt.mag&&(wt.mag=t.mag,se("ammoMag").textContent=t.mag,se("ammoMag").classList.toggle("empty",t.mag===0)),t.reserve!==wt.res&&(wt.res=t.reserve,se("ammoRes").textContent="/ "+t.reserve);let s=I.slots[1-I.cur],r=s?Xt[s.id].name+"  "+s.mag+"/"+s.reserve:"";r!==wt.alt&&(wt.alt=r,se("wAlt").textContent=r);let o=!!(ze?.on&&X.mpPhase==="lobby");if(o!==wt.lobby&&(wt.lobby=o,se("roundBox").classList.toggle("waiting",o),se("roundBox").querySelector(".lbl").textContent=o?"":"ROUND",o?se("roundNum").textContent="WAITING":wt.round=-1),!o&&X.round!==wt.round){wt.round=X.round;let u=se("roundNum");u.textContent=X.round||1,u.classList.remove("pulse"),u.offsetWidth,u.classList.add("pulse")}if((I.nades||0)!==wt.nades){wt.nades=I.nades||0;let u=se("nadeCnt");u&&(u.textContent="BAIT "+wt.nades)}let l=se("reloadBar");I.reloadT>0?(l.classList.add("on"),l.firstElementChild.style.width=100*(1-I.reloadT/I.reloadTot)+"%"):l.classList.remove("on");let c=Kt(I.dmg,0,1);se("fx-damage").style.opacity=Gn===0?Math.min(1,c+(I.hp<I.maxHp*Bl?.25:0)):0;let a=se("powers"),h="";X.double>0&&(h+=`<div class="pw pw2x glass${X.double<5?" blink":""}">2\xD7 CASH <b>${Math.ceil(X.double)}</b></div>`),a._h!==h&&(a._h=h,a.innerHTML=h)}function Is(i,e=!0){let t=se("prompt");i!==wt.prompt&&(wt.prompt=i,t.innerHTML=i,nT(t),t.classList.toggle("on",!!i))}function Xo(){for(let e in Nl)Nl[e].visible=!1;let i=iT(nr().id);i.visible=X.state==="playing"||I.dead,i.scale.setScalar(nn?.78:.9),i.add(ls),ls.position.copy(i.userData.muzzle.position).add(new N(0,0,-.04)),I.gun=i}function zo(i){i===I.cur||!I.slots[i]||I.switchT>0||(I.cur=i,I.reloadT=0,I.switchT=.32,Xo(),we.click(0,2500,.3))}function zl(i){let e=I.slots.findIndex(t=>t&&t.id===i);if(e>=0){let t=I.slots[e];t.mag=Xt[i].mag,t.reserve=Xt[i].reserve;return}I.slots[1]?I.slots[I.cur]=Hu(i):(I.slots[1]=Hu(i),I.cur=1),I.reloadT=0,I.switchT=.4,Xo()}function Gu(){if(ze?.on&&X.mpPhase==="lobby")return;let i=nr(),e=Xt[i.id];I.reloadT>0||I.switchT>0||i.mag>=e.mag||i.reserve<=0||(I.reloadTot=I.reloadT=e.perShell?e.reload*(e.mag-i.mag)+.4:e.reload,I.shellT=e.reload,ze?.on&&ze.send({t:"reload",w:i.id}),we.reload(e.perShell?"pistol":i.id))}function aT(){let i=nr(),e=Xt[i.id];if(ze?.on){I.reloadT=0,e.perShell&&we.pump();return}let t=Math.min(e.mag-i.mag,i.reserve);i.mag+=t,i.reserve-=t,I.reloadT=0,e.perShell&&we.pump()}var Uu=new N,Cl=new N,Pl=new N,Ou=new N,Fu=new N,lx=new N,Pp=new N;function lT(i){let e=I.yaw+I.rY,t=I.pitch+I.rP;return i.set(-Math.sin(e)*Math.cos(t),Math.sin(t),-Math.cos(e)*Math.cos(t))}function Op(){return 1.7-(I.dead?Math.min(1.1,I.deadT*1.6):0)+Math.sin(I.bob*2)*.035*I.mv}function vx(){if(ze?.on&&X.mpPhase==="lobby")return;let i=nr(),e=Xt[i.id];if(i.mag<=0){we.empty(),I.fireCd=.25,Gu();return}i.mag--,I.fireCd=60/e.rpm,I.kick=Math.min(1.6,I.kick+1),I.heat=Math.min(1,I.heat+.12),we.shot(e.snd),lT(Cl),Uu.set(I.x,Op(),I.z),Pl.set(Math.cos(I.yaw),0,-Math.sin(I.yaw)),Ou.crossVectors(Pl,Cl).normalize(),Pl.crossVectors(Cl,Ou).normalize();let t=e.spread*(1+I.mv*.9+I.heat*.8),n=Cl.clone();qt.updateMatrixWorld(!0);let s=I.gun.userData.muzzle;if(e.akimbo&&I.gun.userData.muzzles){i.side=i.side?0:1,s=I.gun.userData.muzzles[i.side],I.gun.userData.slideSide=i.side;let c=s.parent;I.gun.userData.flash&&c&&I.gun.userData.flash.position.set(c.position.x+s.position.x,c.position.y+s.position.y,c.position.z+s.position.z)}s.getWorldPosition(Fu),I.gun.userData.eject.getWorldPosition(lx);let r=new Map,o=0,l=[];for(let c=0;c<e.pellets;c++){let a=$(tn),h=Math.sqrt(Math.random())*t,u=Cl.clone().copy(n).addScaledVector(Pl,Math.cos(a)*h).addScaledVector(Ou,Math.sin(a)*h).normalize();l.push([+u.x.toFixed(4),+u.y.toFixed(4),+u.z.toFixed(4)]);let d=Rt.rayHit(Uu,u,e.range),f=bt.ray(Uu,u,e.range),p=e.range,v=null,g=null;d&&(!f||d.t<f.t)?(p=d.t,g=d):f&&(p=f.t,v=f.n);let m=new N().copy(u).multiplyScalar(p).add(Uu);if((c<(e.pellets>1?3:1)||It.tier>0)&&It.tracer(Fu,m,e.pellets>1?.006:.011),g){let y=r.get(g.z)||{dmg:0,head:!1,p:m,n:u.clone().negate()},w=e.pellets>1?Kt(1.25-g.t/16,.25,1):1;y.dmg+=e.dmg*(g.head?e.head:1)*w,y.head=y.head||g.head,y.p=m,r.set(g.z,y)}else v&&o<4&&(o++,Pp.set(v.x,v.y,v.z),It.sparks(m,Pp,7),It.dust(m,Pp,2))}Js.intensity=55,Vu.intensity=6,X.muzzleT=.06,ls.visible=!0;{let c=I.gun.userData.flash;c&&(c.visible=!0,c.rotation.z=$(tn),c.scale.setScalar($(.8,1.3)*(e.id==="shotgun"?1.5:1))),I.gun.userData.slideT=1}if(ls.material.rotation=$(tn),ls.scale.setScalar($(.25,.42)*(e.id==="shotgun"?1.4:1)),It.flash(Fu,n),It.smoke(Fu,n,1),It.maxCas){let c=new N().copy(Pl).multiplyScalar($(1.2,2.4)).addScaledVector(Ou,$(1.2,2.2)).addScaledVector(n,$(-.3,.5));It.casing(lx,c)}if(I.rP+=e.kick*$(.85,1.15),I.rY+=$(-1,1)*e.kick*.45,I.shake=Math.min(1,I.shake+e.shake*.5),e.perShell===!0&&i.mag>0&&setTimeout(()=>we.pump(),260),ze?.on){ze.send({t:"shot",w:i.id,dirs:l});for(let[c,a]of r)It.blood(a.p,a.n,a.head?14:8),we.zhit(Ol(c.pos),a.head)}else for(let[c,a]of r){let h=Rt.damage(c,a.dmg,a.head,a.p,a.n);if(!h)continue;let u=X.double>0?2:1;we.zhit(Ol(c.pos),a.head),It.blood(a.p,a.n,a.head?14:8),It.sparks(a.p,a.n,2);let d=10*u,f=se("hitm");f.classList.remove("on","kill"),f.offsetWidth,f.classList.add("on"),we.tick(!1),h.killed&&(d=(a.head?100:c.value)*u,I.kills++,X.kills++,a.head&&I.heads++,f.classList.add("kill"),we.tick(!0),we.zdie(Ol(c.pos),.5),It.blood(a.p,a.n,26,1.4),It.dust(new N(c.pos.x,.3,c.pos.z),{x:0,y:1,z:0},5),I.shake=Math.min(1,I.shake+.1),cT(c),_x(c),Jt.onKill(c)),setTimeout(()=>f.classList.remove("on"),h.killed?280:190),I.pts+=d,Vo("+"+d,a.head&&h.killed)}i.mag===0&&!I.reloadT&&setTimeout(()=>X.state==="playing"&&Gu(),220)}var Ol=i=>{let e=i.x-I.x,t=i.z-I.z,n=Math.hypot(e,t)||1;return(e*Math.cos(I.yaw)-t*Math.sin(I.yaw))/n};function cT(i){X.round<2||X.drops>=si.maxDrops||X.time-X.lastDrop<18||Math.random()<.05*si.drop&&Gl(wn(["ammo","double","nuke"]),i.pos.x,i.pos.z)}var Bi={ammo:{name:"FULL MAGS",col:[.3,.7,2.4],sub:"All ammo refilled",hex:"#6bb8ff"},double:{name:"2\xD7 CASH",col:[3,2.2,.4],sub:"Double points for 30s",hex:"#ffd36b"},nuke:{name:"KABOOM",col:[3,.4,.4],sub:"Every zombie goes down",hex:"#ff6b6b"},health:{name:"MED KIT",col:[.25,2.6,.9],sub:"+50% health",hex:"#4dffb0"}};function Gl(i,e,t){let n=Bi[i].col,s=new Be;s.position.set(e,1,t);let r=i==="health",o;if(r){let d=new nt({color:new de(...n),toneMapped:!1});o=new Be,o.add(new me(new rt(.46,.14,.14),d),new me(new rt(.14,.46,.14),d),new me(new rt(.14,.14,.46),d)),o.traverse(f=>f.userData.noAO=!0)}else o=new me(new La(.28,0),new nt({color:new de(...n),toneMapped:!1}));o.userData.noAO=!0;let l=document.createElement("canvas");l.width=256,l.height=64;let c=l.getContext("2d");c.font="900 40px system-ui, sans-serif",c.textAlign="center",c.fillStyle=Bi[i].hex,c.shadowColor=Bi[i].hex,c.shadowBlur=14,c.fillText(Bi[i].name,128,44);let a=new li(new Qn({map:new $t(l),transparent:!0,depthWrite:!1,fog:!1}));a.scale.set(1.5,.375,1),a.position.y=.6,a.userData.noAO=!0;let h=new li(new Qn({map:Wo.glow,color:new de(n[0]*.55,n[1]*.55,n[2]*.55),blending:ln,depthWrite:!1,transparent:!0}));h.scale.setScalar(1.25),h.userData.noAO=!0;let u=new me(new Ft(.12,.12,12,8,1,!0),new nt({color:new de(n[0]*.3,n[1]*.3,n[2]*.3),transparent:!0,opacity:.35,blending:ln,depthWrite:!1}));u.position.y=5,u.userData.noAO=!0,s.add(o,a,h,u),sn.add(s),X.ups.push({type:i,g:s,core:o,label:a,t:r?JE:28,x:e,z:t}),r?X.lastMed=X.time:(X.drops++,X.lastDrop=X.time),we.spawnPower()}function Fp(){return X.state==="playing"&&!I.dead&&I.hp<=I.maxHp*dx&&X.time-X.lastMed>=fx&&!X.ups.some(i=>i.type==="health")}function _x(i){Fp()&&Gl("health",i.pos.x,i.pos.z)}function yx(i){if(i.type==="health"){let t=I.maxHp*px,n=I.hp;I.hp=Math.min(I.maxHp,I.hp+t),I.lastHit=Math.max(I.lastHit,X.time-1),we.medkit(),ki(Bi.health.name,"+"+Math.round(I.hp-n)+" health"),Vo("+"+Math.round(I.hp-n)+" HP","heal"),sn.remove(i.g),It.glowBurst(new N(i.x,1,i.z),...Bi.health.col.map(s=>s*.7),24,4);return}we.power(i.type);let e=0;if(ki(Bi[i.type].name,Bi[i.type].sub),i.type==="ammo")for(let t of I.slots)t&&(t.mag=Xt[t.id].mag,t.reserve=Xt[t.id].reserve);else if(i.type==="double")X.double=30;else if(i.type==="nuke"){let t=Rt.killAll();for(let n of t)ze?.on||Jt.onKill(n),It.blood(new N(n.pos.x,1.2,n.pos.z),{x:0,y:1,z:0},22,1.4),It.glowBurst(new N(n.pos.x,1.2,n.pos.z),3,1.5,.4,10,5);I.pts+=400*(X.double>0?2:1),we.boom(),I.shake=1,se("fx-flash").style.transition="none",se("fx-flash").style.opacity=.85,requestAnimationFrame(()=>{se("fx-flash").style.transition="opacity 1.2s",se("fx-flash").style.opacity=0}),X.kills+=t.length,I.kills+=t.length}sn.remove(i.g),It.glowBurst(new N(i.x,1,i.z),...Bi[i.type].col.map(t=>t*.7),24,4)}Jt=Rg({world:bt,P:I,G:X,sfx:we,banner:ki,toast:gn,popText:Vo,spawnPower:Gl,weapons:Xt,phase:()=>ze?.on?X.mpPhase:X.phase});var zr={};function hT(i){if(!zr[i]){let e=gl(i,!1);e.scale.setScalar(1.6),e.rotation.y=0,e.visible=!1,bt.crate.hold.add(e),zr[i]=e}return zr[i]}function uT(){let i=bt.crate;if(i.state==="idle"){if(I.pts<i.price){we.deny(),gn("Not enough points");return}I.pts-=i.price,we.cash(),we.open(),we.jingle(4),i.state="roll",i.t=0,i.pick=wn(ml.filter(e=>!I.slots.some(t=>t&&t.id===e)).concat(["smg"].filter(()=>!1))),i.pick=i.pick||wn(ml)}else i.state==="ready"&&(zl(i.weapon),we.cash(),we.click(0,2e3,.5),ki(Xt[i.weapon].name.toUpperCase()),Xu())}function Xu(){let i=bt.crate;i.state="idle",i.t=0;for(let e in zr)zr[e].visible=!1;i.model=null}function dT(i){let e=bt.crate,t=e.state==="idle"?0:-1.25;if(e.lid.rotation.x+=(t-e.lid.rotation.x)*Math.min(1,i*6),e.state==="roll"){e.t+=i;let n=Math.floor(e.t/.14)%ml.length,s=e.t>3.6?e.pick:ml[n];for(let o in zr)zr[o].visible=!1;let r=hT(s);r.visible=!0,e.model=r,e.t>3.6&&(e.state="ready",e.weapon=e.pick,e.t=0,we.power("ammo"))}else e.state==="ready"&&(e.t+=i,e.t>9&&(we.open(),Xu(),gn("The toolbox slammed shut")))}function fT(i){return Math.max(3,Math.round((6+i*2.3+i*i*.12)*si.count))}function cx(i){X.round=i,X.toSpawn=fT(i),X.brutes=i>=5?i%5===0?Math.min(4,1+(i/5|0)):i>=7?1:0:0,X.brutes=Math.round(X.brutes*si.brute),X.phase="round",X.spawnT=1.5,X.drops=0,(I.nades||0)<1&&(I.nades=1);let e=we.lineFor("wave","",i);we.round(i),we.setMusicPhase("hot"),ki("ROUND "+i,e),ze?.on||we.announce(e);let t=se("roundNum");t.classList.remove("pulse"),t.offsetWidth,t.classList.add("pulse")}function pT(){let i=No(bt.doors);return bt.windows.filter(e=>i.has(e.area))}function mT(i){if(X.phase!=="round"||X.toSpawn<=0||(X.spawnT-=i,X.spawnT>0))return;if(Rt.alive>=Rt.max){X.spawnT=.3;return}let e=pT();e.sort((r,o)=>(r.c.x-I.x)**2+(r.c.z-I.z)**2-((o.c.x-I.x)**2+(o.c.z-I.z)**2));let t=Math.random()<.6?e[Math.min(e.length-1,Math.random()*2|0)]:wn(e),n=X.brutes>0&&X.toSpawn<=X.brutes,s=Rt.spawn(t,X.round,n);s&&(X.toSpawn--,s.hp=s.maxHp=s.maxHp*si.hp,s.speed=Math.min(6.5,s.speed*si.speed),s.dmg=Math.round(s.dmg*si.dmg)),X.spawnT=Math.max(.3,2-X.round*.13)*$(.7,1.2)*si.spawnGap}function Mx(){let i=null,e=(s,r,o)=>{r<o&&(!i||r<i.d)&&(i={...s,d:r})};for(let s of bt.windows)s.count<6&&e({type:"win",w:s},Math.hypot(I.x-s.in.x,I.z-s.in.z),2.1);for(let s of bt.buys)e({type:"buy",b:s},Math.hypot(I.x-s.pos.x,I.z-s.pos.z),1.9);for(let s of bt.doors)if(!s.open){let r=s.stand?Object.values(s.stand):[s.pos];for(let o of r)e({type:"door",door:s},Math.hypot(I.x-o.x,I.z-o.z),2.4)}let t=Jt&&Jt.focus(I.x,I.z);t&&e(t,t.d,t.d+.01);let n=bt.crate;return(n.state==="idle"||n.state==="ready")&&e({type:"crate"},Math.hypot(I.x-n.x,I.z-n.z),2.2),i}function bx(i,e,t){if(ze?.on)return TT(i,e,t);if(i.type==="win"){e&&(X.repairT+=t,X.repairT>.5&&(X.repairT=0,bt.addPlank(i.w)&&(we.repair(),I.pts+=10*(X.double>0?2:1),Vo("+10"))));return}if(i.type==="job"&&i.hold){e&&(X.repairT+=t,X.repairT>.5&&(X.repairT=0,Jt.use()));return}if(ct.interactEdge)if(i.type==="buy"){if(i.b.id==="nade"){if((I.nades||0)>=2){gn("Bait pouch is full");return}if(I.pts<i.b.price){we.deny(),gn("Not enough points");return}I.pts-=i.b.price,I.nades++,we.cash();return}let n=I.slots.find(r=>r&&r.id===i.b.id),s=n?Math.floor(i.b.price/2):i.b.price;if(n&&n.mag===Xt[n.id].mag&&n.reserve===Xt[n.id].reserve){gn("Ammo already full");return}if(I.pts<s){we.deny(),gn("Not enough points");return}I.pts-=s,we.cash(),zl(i.b.id)}else if(i.type==="door"){let n=i.door,s=Jt.price(n);if(I.pts<s){we.deny(),gn("Not enough points");return}I.pts-=s,we.cash(),we.door(),n.open=!0,ki(n.id==="AB"?"GATE OPEN":n.name.toUpperCase(),n.blurb)}else i.type==="job"?Jt.use():i.type==="crate"&&uT()}function gT(i){if(!i)return Is("");let e="<kbd>E</kbd>",t=n=>`<span class="cost${I.pts<n?" poor":""}">${n}</span>`;if(i.type==="win")Is(`${e}Hold to repair barricade<span class="prog"><i data-w="${Math.round(i.w.count/6*100)}"></i></span>`);else if(i.type==="buy"){let n=I.slots.find(s=>s&&s.id===i.b.id);Is(n?`${e}Refill ${i.b.name}${t(Math.floor(i.b.price/2))}`:`${e}Buy ${i.b.name}${t(i.b.price)}`)}else if(i.type==="door"){let n=Jt.price(i.door);Is(`${e}${i.door.id==="AB"?"Open the gate":"Open "+i.door.name}${t(n)}`)}else i.type==="job"?Is(`${e}${i.hold?"Hold to board the window":i.name}`):i.type==="crate"&&Is(bt.crate.state==="ready"?`${e}Take ${Xt[bt.crate.weapon].name}`:`${e}Lucky Toolbox${t(bt.crate.price)}`)}function xT(i){let e=ct.f,t=ct.s,n=0,s=0;if(e||t){let a=Math.sin(I.yaw),h=Math.cos(I.yaw);n=-a*e+h*t,s=-h*e-a*t;let u=Math.hypot(n,s)||1;n/=u,s/=u}let r=Math.min(1,Math.hypot(e,t));I.sprint=(ct.sprint||r>.92&&nn)&&e>.3&&I.reloadT<=0;let o=(I.sprint?6.6:4.5)*(I.switchT>0?.9:1)*r,l=Math.min(1,i*10);I.vx+=(n*o-I.vx)*l,I.vz+=(s*o-I.vz)*l,I.x+=I.vx*i,I.z+=I.vz*i,bt.resolve(I,.42);let c=Math.hypot(I.vx,I.vz);I.mv=Kt(c/4.5,0,1.4),I.bob+=c*i*1.7}function vT(i){I.fireCd>0&&(I.fireCd-=i),I.switchT>0&&(I.switchT-=i),I.heat=Math.max(0,I.heat-i*1.4),I.kick=Math.max(0,I.kick-i*8);let e=nr(),t=Xt[e.id];if(I.reloadT>0){let n=I.reloadT;I.reloadT-=i,t.perShell?(I.shellT-=i,!ze?.on&&I.shellT<=0&&e.mag<t.mag&&e.reserve>0?(e.mag++,e.reserve--,I.shellT=t.reload,we.shell()):ze?.on&&I.shellT<=0&&(I.shellT=t.reload,we.shell()),ct.fire&&e.mag>0?I.reloadT=0:(e.mag>=t.mag||e.reserve<=0)&&(I.reloadT=0,we.pump())):I.reloadT<=0&&aT()}ct.fire&&I.fireCd<=0&&I.switchT<=0&&(I.reloadT<=0||t.perShell)&&!I.sprintBlock&&((t.auto||!I.fired)&&vx(),I.fired=!0),ct.fire||(I.fired=!1),ct.reload&&(ct.reload=!1,Gu())}function hx(i,e){I.rP*=Math.exp(-i*9),I.rY*=Math.exp(-i*9),I.shake=Math.max(0,I.shake-i*2.2),I.dmg=Math.max(0,I.dmg-i*.8);let t=I.shake*I.shake,n=(Math.sin(e*61)+Math.sin(e*37.3))*.5,s=(Math.sin(e*53.1)+Math.cos(e*41))*.5,r=I.dead?Math.min(1,I.deadT*1.4):0,o=Kt(I.vx*Math.cos(I.yaw)-I.vz*Math.sin(I.yaw),-6,6);qt.position.set(I.x+n*t*.06,Op()+s*t*.05,I.z),qt.rotation.set(Kt(I.pitch+I.rP+s*t*.035-r*.4,-1.5,1.5),I.yaw+I.rY+n*t*.035,-o*.0045+n*t*.02+r*.9),qt.updateMatrixWorld(!0),tr.matrix.copy(qt.matrixWorld);let l=I.gun;if(!l)return;let c=l.userData.base,a=I.kick,h=a*.05,u=0,d=0,f=0,p=0,v=a*.04;if(f+=Math.cos(I.bob)*.006*I.mv,p+=Math.abs(Math.sin(I.bob))*.008*I.mv*-1,f+=-Kt(I.sx,-1,1)*.02,p+=Kt(I.sy,-1,1)*.02,I.sprint&&(u+=.45,h-=.25,p-=.05,f-=.03),I.reloadT>0&&!Xt[nr().id].perShell){let w=1-I.reloadT/I.reloadTot,_=Math.sin(w*Math.PI);h-=_*.5,p-=_*.12,d+=_*.35,f-=_*.04}else if(I.reloadT>0){let w=Math.abs(Math.sin(e*6))*.5+.3;h-=.25,p-=.05,u+=.1*w}if(I.switchT>0){let w=I.switchT/.32;p-=Math.sin(Kt(w,0,1)*Math.PI/2)*.35,h-=w*.5}let g=1-Math.exp(-i*18);if(l.userData.rx=is(l.userData.rx||0,h,g),l.userData.ry=is(l.userData.ry||0,u,g),l.userData.rz=is(l.userData.rz||0,d,g),l.rotation.set(l.userData.rx,l.userData.ry,l.userData.rz),l.userData.slideT>0){l.userData.slideT=Math.max(0,l.userData.slideT-i*14);let w=Math.sin(l.userData.slideT*Math.PI);if(l.userData.slides){let _=l.userData.slideSide||0;l.userData.slides[_]&&(l.userData.slides[_].position.z=w*.028)}else l.userData.slide&&(l.userData.slide.position.z=w*.028);l.userData.pump&&(l.userData.pump.position.z=0)}l.position.set(c.x+f,c.y+p,c.z+v),I.sx*=Math.exp(-i*8),I.sy*=Math.exp(-i*8),X.muzzleT>0&&(X.muzzleT-=i,X.muzzleT<=0&&(ls.visible=!1,I.gun?.userData.flash&&(I.gun.userData.flash.visible=!1))),Js.intensity*=Math.exp(-i*40),Js.intensity<.5&&(Js.intensity=0),Vu.intensity=Js.intensity>0?Js.intensity/9:0;let m=se("cross"),y=6+Xt[nr().id].spread*650*(1+I.mv*.9+I.heat*.8)*.5;m._sp!==Math.round(y)&&(m._sp=Math.round(y),m.style.setProperty("--s",m._sp+"px"),m.children[0].style.left=-(m._sp+9)+"px",m.children[0].style.top="-1px",m.children[1].style.left=m._sp+"px",m.children[1].style.top="-1px",m.children[2].style.top=-(m._sp+9)+"px",m.children[2].style.left="-1px",m.children[3].style.top=m._sp+"px",m.children[3].style.left="-1px")}function _T(i){if(I.dead||X.state!=="playing")return;I.hp-=i.dmg,I.lastHit=X.time,I.dmg=Math.max(I.dmg,.65+.35*(1-Math.max(0,I.hp)/I.maxHp)),I.shake=1,we.hurt();let e=i.pos.x-I.x,t=i.pos.z-I.z,n=Math.atan2(e,-t)- -I.yaw,s=se("fx-dir");s.style.display="block",s.firstElementChild.style.transform=`rotate(${n*180/Math.PI}deg)`,s.style.opacity=1,setTimeout(()=>s.style.opacity=0,500),setTimeout(()=>s.style.display="none",900),I.hp<=0&&qu()}function qu(){I.hp=0,I.dead=!0,I.deadT=0,!ze?.on&&Jt&&Jt.drop(),we.over(),ct.fire=!1,se("hud").classList.add("hud-dead"),Is(""),document.pointerLockElement&&document.exitPointerLock?.()}function Bp(){try{return JSON.parse(localStorage.getItem("vwz_scores")||"[]")}catch{return[]}}function yT(i){let e=Bp();e.push(i),e.sort((t,n)=>n.round-t.round||n.pts-t.pts);try{localStorage.setItem("vwz_scores",JSON.stringify(e.slice(0,5)))}catch{}return e.slice(0,5)}var Ll=null;function kp(){ns.top().then(i=>{ns.render(se("globalList"),i,localStorage.getItem("vwfest_nick")),ns.render(se("oGlobal"),i,localStorage.getItem("vwfest_nick"))})}function MT(){Ll={round:Math.max(1,X.round),pts:I.pts,kills:I.kills},se("nick").value=localStorage.getItem("vwfest_nick")||"",se("postMsg").textContent="",se("postMsg").className="postMsg",se("fPost").classList.toggle("hidden",!ns.hasToken()),se("bPost").disabled=!1,ns.hasToken()||(se("postMsg").textContent="Leaderboard offline: score saved on this device."),kp()}se("fPost").onsubmit=i=>{if(i.preventDefault(),!Ll)return;let e=se("nick").value.trim();se("bPost").disabled=!0;try{localStorage.setItem("vwfest_nick",e)}catch{}ns.submit(e,Ll.round,Ll.pts,Ll.kills).then(t=>{t.ok?(se("fPost").classList.add("hidden"),se("postMsg").className="postMsg ok",se("postMsg").textContent="Posted! You are #"+t.rank+" on the survivor board.",ns.render(se("oGlobal"),t.top,e),ns.render(se("globalList"),t.top,e)):(se("postMsg").textContent=t.error||"Could not post.",se("bPost").disabled=!1)})};function zp(i,e){i.innerHTML=e.length?e.map((t,n)=>`<li>Round <b>${t.round}</b> \xB7 ${t.kills} kills \xB7 ${t.pts.toLocaleString()} pts</li>`).join(""):'<li class="muted">No runs yet \u2014 be the first.</li>'}function bT(){Object.assign(I,{x:cs.spawn.x,z:cs.spawn.z,yaw:0,pitch:0,vx:0,vz:0,hp:Fl,lastHit:-99,pts:si.startPts,kills:0,heads:0,rP:0,rY:0,shake:0,dmg:0,cur:0,fireCd:0,reloadT:0,switchT:0,kick:0,dead:!1,deadT:0,slots:[Hu("pistol"),null],nades:1}),Object.assign(X,{time:0,runTime:0,round:0,toSpawn:0,phase:"wait",interT:2.6,drops:0,double:0,kills:0,repairT:0,lastMed:-99}),Rt.reset(),It.reset();for(let i of X.ups)sn.remove(i.g);X.ups=[],Xu(),bt.crate.lid.rotation.x=0;for(let i of bt.windows)for(;i.count<6;)bt.addPlank(i);wt.hp=wt.pts=wt.mag=wt.res=-1,wt.name=wt.alt="",wt.round=-1,se("hud").classList.remove("hud-dead"),bt.resetDoors(),Jt&&Jt.reset(),er&&er.reset(),Xo()}function qo(){if(we.init(),we.musicStart(),we.setMusicDetail(Gn===0||nn),bT(),ns.start(),X.state="playing",Xo(),["menu","over","pause"].forEach(i=>se(i).classList.add("hidden")),se("hud").classList.remove("hidden"),se("touch").classList.toggle("hidden",!nn),Hi.visible=Gn>0&&I.flashlight,zu=3,Il=0,ku=0,!nn&&!$n.has("test")&&X.mpPhase!=="lobby")try{Ls.requestPointerLock?.()?.catch?.(()=>{})}catch{}else nn&&X.mpPhase!=="lobby"&&xx();gn("Hold E at windows to repair \xB7 Open the gate for new guns")}function Vl(){X.state!=="playing"||I.dead||(X.state="paused",se("pause").classList.remove("hidden"),ct.fire=!1,ct.f=ct.s=0,document.pointerLockElement&&document.exitPointerLock?.(),Is(""))}function Hp(){if(X.state==="paused"&&(X.state="playing",se("pause").classList.add("hidden"),we.init(),!nn&&!$n.has("test")))try{Ls.requestPointerLock?.()?.catch?.(()=>{})}catch{}}function Wl(){we.musicStop(),Kn&&Kn.leave(),se("btnVoice").classList.add("hidden"),se("voiceList").classList.add("hidden"),ze?.on&&(ze.stop(),se("mpTag").classList.add("hidden")),X.mpPhase="",X.state="menu",["pause","over","lobby"].forEach(i=>se(i).classList.add("hidden")),se("menu").classList.remove("hidden"),se("hud").classList.add("hidden"),se("touch").classList.add("hidden"),zp(se("scoreList"),Bp()),kp(),Rt.reset(),I.gun&&(I.gun.visible=!1),Is(""),I.dead=!1,ls.visible=!1}function Sx(){we.musicStop(),X.state="over";let i=yT({round:Math.max(1,X.round),kills:I.kills,pts:I.pts,t:Date.now()});se("oRound").textContent=Math.max(1,X.round),se("oKills").textContent=I.kills,se("oHeads").textContent=I.heads,se("oPts").textContent=I.pts.toLocaleString();let e=Math.floor(X.runTime);se("oTime").textContent=Math.floor(e/60)+":"+String(e%60).padStart(2,"0"),se("oMsg").textContent=X.round>=10?"Legendary run. The yard remembers.":X.round>=5?"Solid stand. They got you in the end.":"The dead took the yard. Try again.",zp(se("oScores"),i),MT(),se("over").classList.remove("hidden"),se("hud").classList.add("hidden"),se("touch").classList.add("hidden"),I.gun&&(I.gun.visible=!1)}var Ip={x:0,z:8},Dl={groan:(i,e)=>we.groan(Ol(i.pos),Kt(1-e/40,.1,.8)*.8,i.brute?.6:i.runner?1.25:$(.9,1.1),i.brute?1.4:$(.8,1.3)),plank:(i,e)=>{we.plank(!0),It.dust(new N(i.c.x+i.n.x*.3,1.4,i.c.z+i.n.z*.3),i.n,6,[.5,.4,.3])},hitPlayer:_T},ST={groan:()=>{},plank:()=>{},hitPlayer:()=>{}};function Gp(i){X.time+=i;let e=X.time;if(X.state==="menu"){X.orbit+=i*.12;let n=X.orbit,s=9.5;if(qt.position.set(Math.sin(n)*s,2.6+Math.sin(n*.7)*.4,6+Math.cos(n)*s*.8),qt.lookAt(0,1.8,3),qt.rotation.z=0,X.menuSpawn-=i,X.menuSpawn<=0&&Rt.alive<5){X.menuSpawn=2.2;let r=Rt.spawn(wn(bt.windows.filter(o=>o.area==="A")),2);r&&(r.state="chase",r.pos.set($(-14,14),0,$(-18,-4)),r.speed=$(.9,1.5),r.dmg=0)}Ip.x=0,Ip.z=6,Rt.update(i,e,Ip,bt.door,ST),bt.update(i,e,{x:qt.position.x,z:qt.position.z}),It.update(i),Jt&&Jt.frame(qt),Ps.center={x:0,z:6},Qs.center=Ps.center,Ps.ps.update(i),Qs.ps.update(i),tr.visible=!1,Hi.visible=!1;return}if(tr.visible=!0,Hi.visible=Gn>0&&I.flashlight&&!I.dead,X.state==="paused")return;if(X.state==="over"){It.update(i);return}if(X.runTime+=i,I.dead){if(I.deadT+=i,ze?.on?ze.update(i,e,Dl):Rt.update(i,e,I,bt.door,{...Dl,hitPlayer:()=>{}}),bt.update(i,e,I),It.update(i),hx(i,e),ze?.on&&I.deadT>.8){let n=ze.spectate(qt);tr.visible=!1,se("specTag").textContent=n?"DOWN \xB7 SPECTATING "+n:"DOWN \xB7 waiting for the round to end",se("specTag").classList.remove("hidden")}I.deadT>2.4&&!ze?.on&&Sx();return}if(xT(i),vT(i),!ze?.on&&I.hp<I.maxHp&&e-I.lastHit>jE&&(I.hp=Math.min(I.maxHp,I.hp+$E*i)),I.hp<I.maxHp*Bl&&e-X.healBeat>.85&&(X.healBeat=e,we.heart()),ze?.on)ze.update(i,e,Dl);else if(X.phase==="wait")X.interT-=i,X.interT<=0&&cx(1);else if(X.phase==="round"){if(mT(i),X.toSpawn<=0&&Rt.alive<=0){let n=X.round;X.phase="inter",X.interT=si.inter,we.setMusicPhase("calm"),!ze?.on&&Jt&&Jt.onWave(n)}}else X.phase==="inter"&&(X.interT-=i,X.interT<=0&&cx(X.round+1));if(X.state==="playing"){let n=X.phase==="round"?"hot":"calm";we.musicMood!==n&&we.setMusicPhase(n),we.pumpMusic()}if(!ze?.on)er.step(i),Rt.update(i,e,I,bt.door,Dl),Jt.update(i);else if(ze.S&&ze.S.snaps&&ze.S.snaps.length){let n=ze.S.snaps[ze.S.snaps.length-1];er.sync(n.ng);let s=n.p&&n.p.find(r=>r[0]===ze.S.id);s&&s.length>15&&X.nadeCd<=0&&(I.nades=s[15])}er.frame(),X.nadeCd>0&&(X.nadeCd-=i),bt.update(i,e,I),eT(i),Jt&&Jt.frame(qt),Kn&&Kn.joined&&Kn.tick(),Ps.center={x:I.x,z:I.z},Qs.center=Ps.center,Ps.ps.update(i),Qs.ps.update(i),It.update(i),dT(i),X.double>0&&(X.double-=i);for(let n=X.ups.length-1;n>=0;n--){let s=X.ups[n];s.t-=i,s.core.rotation.y+=i*2.5,s.type!=="health"&&(s.core.rotation.x+=i*1.1),s.g.position.y=1+Math.sin(e*3+n)*.15,s.g.visible=s.t>5||Math.sin(e*16)>-.2,!ze?.on&&(Math.hypot(s.x-I.x,s.z-I.z)<1.5?(yx(s),X.ups.splice(n,1)):s.t<=0&&(sn.remove(s.g),X.ups.splice(n,1)))}let t=Mx();gT(t),t?bx(t,ct.interact,i):X.repairT=0,ct.interactEdge=!1,hx(i,e),oT()}var ux=performance.now();function Ex(i){requestAnimationFrame(Ex);let e=Math.min(.25,(i-ux)/1e3);ux=i,rT(e),Gp(Math.min(e,.05)*(X.state==="menu"?.6:1));let t=X.state==="playing"&&I.hp<I.maxHp*Bl?1-I.hp/(I.maxHp*Bl):0;Go.update(Math.min(e,.1)),Ho.render(e,X.time,Kt(I.dmg,0,1),t)}function ET(){Ho.render(.016,X.time,Kt(I.dmg,0,1),0)}var ii={};function Vp(){ct.f=(ii.KeyW||ii.ArrowUp?1:0)-(ii.KeyS||ii.ArrowDown?1:0),ct.s=(ii.KeyD||ii.ArrowRight?1:0)-(ii.KeyA||ii.ArrowLeft?1:0),ct.sprint=!!(ii.ShiftLeft||ii.ShiftRight)}addEventListener("keydown",i=>{i.target&&i.target.tagName==="INPUT"||i.repeat||(ii[i.code]=!0,X.state==="playing"&&!I.dead?X.mpPhase==="lobby"||(i.code==="KeyR"&&(ct.reload=!0),i.code==="KeyE"&&(ct.interact=!0,ct.interactEdge=!0),i.code==="Digit1"&&zo(0),i.code==="Digit2"&&zo(1),i.code==="KeyQ"&&zo(1-I.cur),i.code==="KeyF"&&Ax(!I.flashlight),i.code==="KeyP"&&Vl(),i.code==="KeyV"&&ze?.on&&Kn&&Kn.toggle(),i.code==="KeyG"&&Ix()):X.state==="paused"&&i.code==="KeyP"&&Hp(),i.code==="KeyM"&&Rx(),i.code==="KeyN"&&Cx(),i.code==="Enter"&&(X.state==="menu"||X.state==="over")&&qo(),Vp())});addEventListener("keyup",i=>{ii[i.code]=!1,i.code==="KeyE"&&(ct.interact=!1),Vp()});addEventListener("blur",()=>{for(let i in ii)ii[i]=!1;Vp(),ct.fire=!1,ct.interact=!1});var Tx=!1;document.addEventListener("pointerlockerror",()=>{Tx=!0});addEventListener("mousemove",i=>{X.state!=="playing"||I.dead||document.pointerLockElement!==Ls&&!Tx&&!$n.has("test")||wx(i.movementX,i.movementY,.0022)});function wx(i,e,t){I.yaw-=i*t,I.pitch=Kt(I.pitch-e*t,-1.45,1.45),I.sx+=i*.01,I.sy+=e*.01}Ls.addEventListener("mousedown",i=>{i.button===0&&X.state==="playing"&&(!nn&&!document.pointerLockElement&&!$n.has("test")&&Ls.requestPointerLock?.(),ct.fire=!0)});addEventListener("mouseup",i=>{i.button===0&&(ct.fire=!1)});addEventListener("wheel",i=>{X.state==="playing"&&Math.abs(i.deltaY)>4&&zo(1-I.cur)},{passive:!0});addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&X.state==="playing"&&!I.dead&&!nn&&!$n.has("test")&&X.mpPhase!=="lobby"&&Vl()});document.addEventListener("visibilitychange",()=>{document.hidden&&X.mpPhase!=="lobby"&&Vl()});if(nn){let i=null,e=null,t=0,n=0,s=se("stick"),r=se("knob"),o={x:0,y:0},l=se("touch");l.addEventListener("touchstart",u=>{for(let d of u.changedTouches){if(u.target.closest("button"))continue;let f=s.getBoundingClientRect();i===null&&d.clientX<innerWidth*.45?(i=d.identifier,o={x:f.left+f.width/2,y:f.top+f.height/2},c(d)):e===null&&(e=d.identifier,t=d.clientX,n=d.clientY)}u.preventDefault()},{passive:!1});let c=u=>{let d=u.clientX-o.x,f=u.clientY-o.y,p=Math.hypot(d,f),v=55;p>v&&(d=d/p*v,f=f/p*v),r.style.transform=`translate(${d}px,${f}px)`,ct.s=d/v,ct.f=-f/v,Math.hypot(ct.s,ct.f)<.12&&(ct.s=ct.f=0)};l.addEventListener("touchmove",u=>{for(let d of u.changedTouches)d.identifier===i?c(d):d.identifier===e&&(X.state==="playing"&&!I.dead&&wx(d.clientX-t,d.clientY-n,.0048),t=d.clientX,n=d.clientY);u.preventDefault()},{passive:!1});let a=u=>{for(let d of u.changedTouches)d.identifier===i?(i=null,r.style.transform="",ct.s=ct.f=0):d.identifier===e&&(e=null)};l.addEventListener("touchend",a),l.addEventListener("touchcancel",a);let h=(u,d,f)=>{let p=se(u);p.addEventListener("touchstart",g=>{p.classList.add("down"),d(),g.preventDefault(),g.stopPropagation()},{passive:!1});let v=g=>{p.classList.remove("down"),f?.(),g.preventDefault()};p.addEventListener("touchend",v),p.addEventListener("touchcancel",v)};h("bFire",()=>ct.fire=!0,()=>ct.fire=!1),h("bReload",()=>ct.reload=!0),h("bUse",()=>{ct.interact=!0,ct.interactEdge=!0},()=>ct.interact=!1),h("bSwap",()=>zo(1-I.cur)),h("bLamp",()=>Ax(!I.flashlight)),h("bNade",()=>Ix())}function Ax(i){I.flashlight=i,zi.visible=i,Hi.visible=!!i&&Gn>0&&X.state==="playing"&&!I.dead;let e=se("bLamp");e&&e.classList.toggle("off",!i),we.click(0,i?1500:800,.32)}function Rx(){we.setMuted(!we.muted);try{localStorage.setItem("vwz_mute",we.muted?"1":"0")}catch{}Lx()}function Cx(){we.setMusicOn(we.musicOn===!1);try{localStorage.setItem("vwz_music",we.musicOn?"1":"0")}catch{}Px()}function Px(){let i=we.musicOn!==!1,e=se("btnMusic");e&&(e.textContent=i?"\u266A":"\u266A\u0338",e.classList.toggle("on",i))}function Ix(){if(X.state!=="playing"||I.dead||(I.nades||0)<=0||X.nadeCd>0){X.state==="playing"&&(I.nades||0)<=0&&we.deny();return}X.nadeCd=.4,I.nades--,ze?.on?ze.send({t:"nade",yaw:+I.yaw.toFixed(3),pitch:+I.pitch.toFixed(3)}):er.throwLocal(I.x,Op(),I.z,I.yaw,I.pitch-.15),we.click(0,180,.4)}function Lx(){se("btnMute").textContent=we.muted?"\u{1F507}":"\u{1F50A}",se("btnMute2").textContent=we.muted?"\u{1F507} Sound off":"\u{1F50A} Sound on"}se("btnMute").onclick=se("btnMute2").onclick=i=>{i.stopPropagation(),Rx()};try{localStorage.getItem("vwz_music")==="0"&&(we.musicOn=!1)}catch{}se("btnMusic")&&(se("btnMusic").onclick=i=>{i.stopPropagation(),Cx()});se("btnPause").onclick=i=>{i.stopPropagation(),Vl()};se("btnPlay").onclick=qo;se("btnAgain").onclick=qo;se("btnMenu").onclick=Wl;se("btnResume").onclick=Hp;se("btnQuit").onclick=Wl;se("btnPlay").addEventListener("touchend",i=>{i.preventDefault(),qo()});se("qSeg").addEventListener("click",i=>{let e=i.target.closest("button");if(e){as=e.dataset.q;try{localStorage.setItem("vwz_q",as)}catch{}[...se("qSeg").querySelectorAll("button")].forEach(t=>t.classList.toggle("on",t===e)),Wu(as==="high"?2:as==="medium"?1:as==="low"||nn?0:2)}});[...se("qSeg").querySelectorAll("button")].forEach(i=>i.classList.toggle("on",i.dataset.q===as));se("modeSeg").addEventListener("click",i=>{let e=i.target.closest("button");if(e){si=Hf(Gf(e.dataset.m),1);try{localStorage.setItem("vwz_mode",si.id)}catch{}[...se("modeSeg").querySelectorAll("button")].forEach(t=>t.classList.toggle("on",t===e))}});[...se("modeSeg").querySelectorAll("button")].forEach(i=>i.classList.toggle("on",i.dataset.m===si.id));se("mapSeg").addEventListener("click",i=>{let e=i.target.closest("button");if(!e||e.dataset.map===cs.id)return;try{localStorage.setItem("vwz_map",e.dataset.map)}catch{}let t=new URL(location.href);t.searchParams.set("map",e.dataset.map),location.href=t.toString()});[...se("mapSeg").querySelectorAll("button")].forEach(i=>i.classList.toggle("on",i.dataset.map===cs.id));I.slots=[Hu("pistol"),null];Xo();Wu(Gn);Lx();Px();zp(se("scoreList"),Bp());kp();Rt.max=cs.cap[Gn>0?1:0];for(let i=0;i<40;i++)Gp(.05);requestAnimationFrame(()=>{Ho.render(.016,0,0,0),se("loading").classList.add("done"),setTimeout(()=>se("loading").remove(),800),setTimeout(()=>{mx=!0,Go.load(Gn),gx(Gn)},$n.has("test")?0:120)});requestAnimationFrame(Ex);"serviceWorker"in navigator&&location.protocol!=="file:"&&!$n.has("nosw")&&navigator.serviceWorker.register("sw.js").catch(()=>{});function TT(i,e,t){if(i.type==="win"){e&&(X.repairT+=t,X.repairT>.5&&(X.repairT=0,ze.send({t:"repair",w:i.w.id})));return}if(i.type==="job"&&i.hold){e&&(X.repairT+=t,X.repairT>.5&&(X.repairT=0,ze.send({t:"obj"})));return}ct.interactEdge&&(i.type==="buy"?ze.send({t:"buy",w:i.b.id}):i.type==="door"?ze.send({t:"door",id:i.door.id}):i.type==="job"?ze.send({t:"obj"}):i.type==="crate"&&ze.send({t:"crate"}))}var Wp=$n.get("server")||"wss://vwfest-zombies-coop.onrender.com";ze=ix({scene:sn,zombies:Rt,P:I,G:X,cam:qt,world:bt,held:()=>I.slots[I.cur]&&I.slots[I.cur].id||"pistol",onJoined:i=>{X.mpPhase=i.phase||"",qo(),X.round=0,se("mpTag").textContent="CO-OP \xB7 ROOM "+i.room,se("mpTag").classList.remove("hidden"),wT(),i.phase==="lobby"?(se("lobbyCode").textContent=i.room,se("lobby").classList.remove("hidden"),se("toast").classList.remove("on"),clearTimeout(Np)):gn("Co-op room "+i.room+" \xB7 share the code with friends")},onLobby:i=>{let e=X.mpPhase;X.mpPhase=i.phase;let t=i.phase==="lobby";if(se("lobby").classList.toggle("hidden",!t),e==="lobby"&&!t&&!nn&&!$n.has("test"))try{Ls.requestPointerLock?.()?.catch?.(()=>{})}catch{}if(!t)return;se("lobbyCode").textContent=i.room||ze.S.room||"-----";let n=i.p.find(s=>s[0]===ze.S.id);se("lobbyReady").textContent=n&&n[13]?"UNREADY":"READY",se("lobbyRoster").innerHTML=i.p.map(s=>{let r=s[10]?s[13]?"ready":"waiting":"disconnected",o=String(s[1]).replace(/[&<>]/g,l=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[l]);return`<li class="${s[13]?"ok":"wait"}">${o}${s[0]===ze.S.id?" (you)":""} \xB7 ${r}</li>`}).join("")},onStatus:i=>{gn(String(i));let e=se("coMsg");e&&(e.textContent=String(i)),i==="Reconnected"&&Kn&&Kn.rebuild()},onRound:i=>{X.round=i,X.phase="round";let e=we.lineFor("wave","",i);we.round(i),we.setMusicPhase("hot"),ki("ROUND "+i,e),we.announce(e),(I.nades||0)<1&&(I.nades=1)},onHurt:i=>{I.lastHit=X.time,I.dmg=Math.max(I.dmg,.65+.35*(1-Math.max(0,I.hp)/I.maxHp)),I.shake=1,we.hurt()},onDown:()=>{qu(),gn("You are down. Teammates revive you if they clear the round")},onRevive:()=>{se("specTag").classList.add("hidden"),I.dead=!1,I.deadT=0,se("hud").classList.remove("hud-dead"),Xo(),gn("Back on your feet")},onZDie:i=>we.zdie(Ol(i.pos),.5),onHits:i=>{for(let e of i){let t=se("hitm");t.classList.remove("on","kill"),t.offsetWidth,t.classList.add("on"),e.killed&&(t.classList.add("kill"),we.tick(!0),X.kills++,e.head&&I.heads++),Vo("+"+e.gain,e.head&&e.killed)}},onEvent:(i,e)=>{if(i.e==="pick"){let t=Bi[i.type];if(t&&ki(t.name,i.p===ze.S.id?t.sub:"A teammate grabbed it"),we.power(i.type==="health"?"ammo":i.type),i.type==="ammo"&&i.p===ze.S.id)for(let n of I.slots)n&&(n.mag=Xt[n.id].mag,n.reserve=Xt[n.id].reserve);i.type==="nuke"&&(we.boom(),I.shake=1,se("fx-flash").style.transition="none",se("fx-flash").style.opacity=.85,requestAnimationFrame(()=>{se("fx-flash").style.transition="opacity 1.2s",se("fx-flash").style.opacity=0}))}else i.e==="plank"&&i.by===ze.S.id?(X.mpRepairs=(X.mpRepairs||0)+1,we.repair(),Vo("+10")):i.e==="mission"?Jt.onNetEvent(i):i.e==="boom"?er.splatter(i.x,i.z):i.e==="crate"&&i.s==="shut"&&gn("The toolbox slammed shut")},onAct:i=>{if(!i.ok){i.a==="nade"&&I.nades++,i.why==="pts"?(we.deny(),gn("Not enough points")):i.why==="full"?gn("Bait pouch is full"):i.why==="not-yours"&&gn("That weapon belongs to a teammate");return}i.a==="buy"?(we.cash(),i.w==="nade"?I.nades=i.nades:zl(i.w)):i.a==="door"?we.cash():i.a==="crate"&&(we.cash(),i.s==="roll"?(we.open(),we.jingle(4)):i.s==="take"&&(zl(i.w),ki(Xt[i.w].name.toUpperCase())))},onPlank:(i,e)=>{e&&Dl.plank(i,!0)},onDoor:i=>{we.door(),ki(!i||i.id==="AB"?"GATE OPEN":i.name.toUpperCase(),i&&i.blurb||"Gate open")},onMission:(i,e,t)=>Jt.applyNet(i,e,t,ze.S.id),onSig:i=>{Kn&&Kn.onSignal(i)},onCrate:(i,e,t)=>{let n=bt.crate;i==="idle"?n.state!=="idle"&&Xu():i==="roll"&&n.state==="idle"?(n.state="roll",n.t=0,n.pick=e):i==="ready"&&(n.state==="idle"||n.state==="roll"&&n.t<3.4)&&(n.state="roll",n.t=3.61,n.pick=e),n.mine=t},syncUps:i=>{let e=new Set(i.map(t=>t[0]));for(let t=X.ups.length-1;t>=0;t--){let n=X.ups[t];n.sid&&!e.has(n.sid)&&(sn.remove(n.g),It.glowBurst(new N(n.x,1,n.z),...Bi[n.type].col.map(s=>s*.7),24,4),X.ups.splice(t,1))}for(let[t,n,s,r]of i)X.ups.some(o=>o.sid===t)||(Gl(n,s,r),X.ups[X.ups.length-1].sid=t)},onOver:()=>{setTimeout(()=>{I.dead=!0,Sx(),ze.stop(),se("mpTag").classList.add("hidden")},1500)},onQuit:()=>Wl()});async function wT(){if(ze?.on){if(!Kn)try{Kn=(await import(new URL("voice.js",import.meta.url).href)).attach({selfId:()=>ze.S.id,selfName:()=>ze.S.name,send:t=>ze.send(t),peers:()=>[...ze.S.remotes.keys()],names:()=>{let t=new Map;for(let[n,s]of ze.S.remotes)t.set(n,s.userData.name);return t},setTalking:(t,n)=>ze.setTalking(t,n),toast:gn,list:se("voiceList"),button:se("btnVoice")})}catch{gn("Voice chat failed to load");return}se("btnVoice").classList.remove("hidden")}}se("btnVoice").onclick=i=>{i.stopPropagation(),Kn&&Kn.toggle()};var Xp=()=>(se("coName").value||"Survivor").trim().slice(0,16);se("lobbyReady").onclick=()=>{let i=ze.S.snaps.at(-1),e=i&&i.p.find(t=>t[0]===ze.S.id);ze.send({t:"ready",on:!(e&&e[13])})};se("lobbyLeave").onclick=()=>{se("lobby").classList.add("hidden"),Wl()};se("coQuick").onclick=()=>ze.connect({url:Wp,name:Xp(),join:{map:cs.id}});se("coCreate").onclick=()=>ze.connect({url:Wp,name:Xp(),join:{create:!0,map:cs.id}});se("coJoin").onclick=()=>{let i=se("coCode").value.trim().toUpperCase();if(!/^[A-Z2-9]{5}$/.test(i)){se("coMsg").textContent="Room codes are 5 letters/numbers";return}ze.connect({url:Wp,name:Xp(),join:{code:i}})};window.__game={hd:Go,MP:ze,missions:Jt,grenades:er,get MODE(){return si},MAP:cs,MAPS:du,PLAYER_MAX_HP:Fl,MEDKIT_HP_FRAC:dx,MEDKIT_COOLDOWN:fx,MEDKIT_HEAL_FRAC:px,medKitReady:Fp,medKitOnKill:_x,G:X,P:I,world:bt,zombies:Rt,fx:It,input:ct,tick:Gp,startGame:qo,shoot:vx,applyTier:Wu,switchTo:zo,startReload:Gu,pause:Vl,resume:Hp,toMenu:Wl,giveWeapon:zl,spawnPower:Gl,pickPower:yx,interact:bx,findFocus:Mx,die:qu,get tier(){return Gn},cam:qt,renderer:jn,scene:sn,WEAPONS:Xt,sfx:we,renderOnce:ET,aimAt(i,e=!1){let t=i.pos.x-I.x,n=i.pos.z-I.z,s=(e?1.66:1)*i.scale-1.7;I.yaw=Math.atan2(-t,-n),I.pitch=Math.atan2(s,Math.hypot(t,n)),I.rP=I.rY=0},isTouch:nn};
