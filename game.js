var of=0,Jh=1,lf=2;var bs=1,cf=2,xr=3,Ki=0,on=1,ln=2,We=0,ji=1,$e=2,$h=3,Kh=4,Ll=5;var kn=100,hf=101,uf=102,df=103,ff=104,Es=200,pf=201,mf=202,gf=203,jh=204,Qh=205,Ta=206,xf=207,wa=208,_f=209,vf=210,yf=211,Mf=212,Sf=213,bf=214,Qo=0,tl=1,el=2,er=3,nl=4,il=5,sl=6,rl=7,tu=0,Ef=1,Tf=2,Qn=0,Aa=1,Ra=2,Ca=3,Ts=4,Pa=5,Ia=6,Da=7,Nh="attached",wf="detached",eu=300,Qi=301,ws=302,Nl=303,Ul=304,La=306,wn=1e3,Bn=1001,al=1002,Ge=1003,Af=1004;var Na=1005;var an=1006,Fl=1007;var ts=1008;var fn=1009,nu=1010,iu=1011,_r=1012,Ol=1013,ti=1014,Ln=1015,ke=1016,Bl=1017,zl=1018,es=1020,su=35902,ru=35899,au=1021,ou=1022,Mn=1023,ci=1026,pi=1027,kl=1028,Hl=1029,ns=1030,Vl=1031;var Gl=1033,Ua=33776,Fa=33777,Oa=33778,Ba=33779,Wl=35840,Xl=35841,ql=35842,Yl=35843,Zl=36196,Jl=37492,$l=37496,Kl=37488,jl=37489,za=37490,Ql=37491,tc=37808,ec=37809,nc=37810,ic=37811,sc=37812,rc=37813,ac=37814,oc=37815,lc=37816,cc=37817,hc=37818,uc=37819,dc=37820,fc=37821,pc=36492,mc=36494,gc=36495,xc=36283,_c=36284,ka=36285,vc=36286;var Wr=2300,ol=2301,Ko=2302,Uh=2303,Fh=2400,Oh=2401,Bh=2402;var Rf=3200;var Ha=0,Cf=1,Li="",Fe="srgb",Xr="srgb-linear",qr="linear",xe="srgb";var jo=7680;var Pf=519,If=512,Df=513,Lf=514,yc=515,Nf=516,Uf=517,Mc=518,Ff=519,lu=35044,Va=35048;var cu="300 es",Yn=2e3,nr=2001;function M0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function S0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Of(){let i=Yr("canvas");return i.style.display="block",i}var Sd={},ir=null;function Zr(...i){let t="THREE."+i.shift();ir?ir("log",t,...i):console.log(t,...i)}function Bf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Gt(...i){i=Bf(i);let t="THREE."+i.shift();if(ir)ir("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function qt(...i){i=Bf(i);let t="THREE."+i.shift();if(ir)ir("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function gs(...i){let t=i.join(" ");t in Sd||(Sd[t]=!0,Gt(...i))}function zf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var kf={[Qo]:tl,[el]:sl,[nl]:rl,[er]:il,[tl]:Qo,[sl]:el,[rl]:nl,[il]:er},hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var rh=Math.PI/180,Jr=180/Math.PI;function li(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function he(i,t,e){return Math.max(t,Math.min(e,i))}function b0(i,t){return(i%t+t)%t}function ah(i,t,e){return(1-e)*i+e*t}function oi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var at=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],p=r[a+2],v=r[a+3];if(u!==v||c!==d||l!==f||h!==p){let g=c*d+l*f+h*p+u*v;g<0&&(d=-d,f=-f,p=-p,v=-v,g=-g);let m=1-o;if(g<.9995){let b=Math.acos(g),w=Math.sin(b);m=Math.sin(m*b)/w,o=Math.sin(o*b)/w,c=c*m+d*o,l=l*m+f*o,h=h*m+p*o,u=u*m+v*o}else{c=c*m+d*o,l=l*m+f*o,h=h*m+p*o,u=u*m+v*o;let b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*u+c*f-l*d,t[e+1]=c*p+h*d+l*u-o*f,t[e+2]=l*p+h*f+o*d-c*u,t[e+3]=h*p-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oh.copy(this).projectOnVector(t),this.sub(oh)}reflect(t){return this.sub(oh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},oh=new I,bd=new zn,jt=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],v=s[0],g=s[3],m=s[6],b=s[1],w=s[4],y=s[7],S=s[2],E=s[5],C=s[8];return r[0]=a*v+o*b+c*S,r[3]=a*g+o*w+c*E,r[6]=a*m+o*y+c*C,r[1]=l*v+h*b+u*S,r[4]=l*g+h*w+u*E,r[7]=l*m+h*y+u*C,r[2]=d*v+f*b+p*S,r[5]=d*g+f*w+p*E,r[8]=d*m+f*y+p*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lh.makeScale(t,e)),this}rotate(t){return gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lh.makeRotation(-t)),this}translate(t,e){return gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},lh=new jt,Ed=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Td=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E0(){let i={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xe&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(s.r=tr(s.r),s.g=tr(s.g),s.b=tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xr]:{primaries:t,whitePoint:n,transfer:qr,toXYZ:Ed,fromXYZ:Td,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:Ed,fromXYZ:Td,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),i}var le=E0();function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fs,ll=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fs===void 0&&(Fs=Yr("canvas")),Fs.width=t.width,Fs.height=t.height;let s=Fs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Fs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Yr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pi(e[n]/255)*255):e[n]=Pi(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},T0=0,sr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=li(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ch(s[a].image)):r.push(ch(s[a]))}else r=ch(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ch(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ll.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var w0=0,hh=new I,_n=class i extends hi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Bn,s=Bn,r=an,a=ts,o=Mn,c=fn,l=i.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=li(),this.name="",this.source=new sr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hh).x}get height(){return this.source.getSize(hh).y}get depth(){return this.source.getSize(hh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==eu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wn:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case al:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wn:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case al:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=eu;_n.DEFAULT_ANISOTROPY=1;var Se=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,y=(f+1)/2,S=(m+1)/2,E=(h+d)/4,C=(u+v)/4,x=(p+g)/4;return w>y&&w>S?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=C/n):y>S?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=x/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=C/r,s=x/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-p)/b,this.y=(u-v)/b,this.z=(d-h)/b,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cl=class extends hi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new _n(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new sr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oe=class extends cl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},$r=class extends _n{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var hl=class extends _n{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var $t=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,c,l,h,u,d,f,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,f,p,v,g)}set(t,e,n,s,r,a,o,c,l,h,u,d,f,p,v,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Os.setFromMatrixColumn(t,0).length(),r=1/Os.setFromMatrixColumn(t,1).length(),a=1/Os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,p=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+p*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=p+f*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,p=l*h,v=l*u;e[0]=d+v*o,e[4]=p*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=v+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,p=l*h,v=l*u;e[0]=d-v*o,e[4]=-a*u,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,f=a*u,p=o*h,v=o*u;e[0]=c*h,e[4]=p*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-p,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,f=a*l,p=o*c,v=o*l;e[0]=c*h,e[4]=v-d*u,e[8]=p*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+p,e[10]=d-v*u}else if(t.order==="XZY"){let d=a*c,f=a*l,p=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(A0,t,R0)}lookAt(t,e,n){let s=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Hi.crossVectors(n,Cn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Hi.crossVectors(n,Cn)),Hi.normalize(),bo.crossVectors(Cn,Hi),s[0]=Hi.x,s[4]=bo.x,s[8]=Cn.x,s[1]=Hi.y,s[5]=bo.y,s[9]=Cn.y,s[2]=Hi.z,s[6]=bo.z,s[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],b=n[3],w=n[7],y=n[11],S=n[15],E=s[0],C=s[4],x=s[8],T=s[12],P=s[1],D=s[5],N=s[9],k=s[13],U=s[2],B=s[6],q=s[10],X=s[14],rt=s[3],W=s[7],j=s[11],tt=s[15];return r[0]=a*E+o*P+c*U+l*rt,r[4]=a*C+o*D+c*B+l*W,r[8]=a*x+o*N+c*q+l*j,r[12]=a*T+o*k+c*X+l*tt,r[1]=h*E+u*P+d*U+f*rt,r[5]=h*C+u*D+d*B+f*W,r[9]=h*x+u*N+d*q+f*j,r[13]=h*T+u*k+d*X+f*tt,r[2]=p*E+v*P+g*U+m*rt,r[6]=p*C+v*D+g*B+m*W,r[10]=p*x+v*N+g*q+m*j,r[14]=p*T+v*k+g*X+m*tt,r[3]=b*E+w*P+y*U+S*rt,r[7]=b*C+w*D+y*B+S*W,r[11]=b*x+w*N+y*q+S*j,r[15]=b*T+w*k+y*X+S*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],v=t[7],g=t[11],m=t[15],b=c*f-l*d,w=o*f-l*u,y=o*d-c*u,S=a*f-l*h,E=a*d-c*h,C=a*u-o*h;return e*(v*b-g*w+m*y)-n*(p*b-g*S+m*E)+s*(p*w-v*S+m*C)-r*(p*y-v*E+g*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],v=t[13],g=t[14],m=t[15],b=e*o-n*a,w=e*c-s*a,y=e*l-r*a,S=n*c-s*o,E=n*l-r*o,C=s*l-r*c,x=h*v-u*p,T=h*g-d*p,P=h*m-f*p,D=u*g-d*v,N=u*m-f*v,k=d*m-f*g,U=b*k-w*N+y*D+S*P-E*T+C*x;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/U;return t[0]=(o*k-c*N+l*D)*B,t[1]=(s*N-n*k-r*D)*B,t[2]=(v*C-g*E+m*S)*B,t[3]=(d*E-u*C-f*S)*B,t[4]=(c*P-a*k-l*T)*B,t[5]=(e*k-s*P+r*T)*B,t[6]=(g*y-p*C-m*w)*B,t[7]=(h*C-d*y+f*w)*B,t[8]=(a*N-o*P+l*x)*B,t[9]=(n*P-e*N-r*x)*B,t[10]=(p*E-v*y+m*b)*B,t[11]=(u*y-h*E-f*b)*B,t[12]=(o*T-a*D-c*x)*B,t[13]=(e*D-n*T+s*x)*B,t[14]=(v*w-p*S-g*b)*B,t[15]=(h*S-u*w+d*b)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,p=r*u,v=a*h,g=a*u,m=o*u,b=c*l,w=c*h,y=c*u,S=n.x,E=n.y,C=n.z;return s[0]=(1-(v+m))*S,s[1]=(f+y)*S,s[2]=(p-w)*S,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+m))*E,s[6]=(g+b)*E,s[7]=0,s[8]=(p+w)*C,s[9]=(g-b)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Os.set(s[0],s[1],s[2]).length(),o=Os.set(s[4],s[5],s[6]).length(),c=Os.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Gn.copy(this);let l=1/a,h=1/o,u=1/c;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,e.setFromRotationMatrix(Gn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Yn,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),p,v;if(c)p=r/(a-r),v=a*r/(a-r);else if(o===Yn)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===nr)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Yn,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),p,v;if(c)p=1/(a-r),v=a/(a-r);else if(o===Yn)p=-2/(a-r),v=-(a+r)/(a-r);else if(o===nr)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Os=new I,Gn=new $t,A0=new I(0,0,0),R0=new I(1,1,1),Hi=new I,bo=new I,Cn=new I,wd=new $t,Ad=new zn,Zn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(he(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ad.setFromEuler(this),this.setFromQuaternion(Ad,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var Kr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},C0=0,Rd=new I,Bs=new zn,Ei=new $t,Eo=new I,Ir=new I,P0=new I,I0=new zn,Cd=new I(1,0,0),Pd=new I(0,1,0),Id=new I(0,0,1),Dd={type:"added"},D0={type:"removed"},zs={type:"childadded",child:null},uh={type:"childremoved",child:null},Le=class i extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Zn,n=new zn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new jt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(Cd,t)}rotateY(t){return this.rotateOnAxis(Pd,t)}rotateZ(t){return this.rotateOnAxis(Id,t)}translateOnAxis(t,e){return Rd.copy(t).applyQuaternion(this.quaternion),this.position.add(Rd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cd,t)}translateY(t){return this.translateOnAxis(Pd,t)}translateZ(t){return this.translateOnAxis(Id,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Eo.copy(t):Eo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Ir,Eo,this.up):Ei.lookAt(Eo,Ir,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(Ei),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dd),zs.child=t,this.dispatchEvent(zs),zs.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(D0),uh.child=t,this.dispatchEvent(uh),uh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dd),zs.child=t,this.dispatchEvent(zs),zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,t,P0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,I0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Le.DEFAULT_UP=new I(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jt=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},L0={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),m=this._getHandJoint(l,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(L0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},To={h:0,s:0,l:0};function dh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=b0(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=dh(a,r,t+1/3),this.g=dh(a,r,t),this.b=dh(a,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let n=Hf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return le.workingToColorSpace(dn.copy(this),t),Math.round(he(dn.r*255,0,255))*65536+Math.round(he(dn.g*255,0,255))*256+Math.round(he(dn.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(dn.copy(this),e);let n=dn.r,s=dn.g,r=dn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(dn.copy(this),e),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=Fe){le.workingToColorSpace(dn.copy(this),t);let e=dn.r,n=dn.g,s=dn.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(To);let n=ah(Vi.h,To.h,e),s=ah(Vi.s,To.s,e),r=ah(Vi.l,To.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new ft;ft.NAMES=Hf;var jr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ft(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var xs=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Wn=new I,Ti=new I,fh=new I,wi=new I,ks=new I,Hs=new I,Ld=new I,ph=new I,mh=new I,gh=new I,xh=new Se,_h=new Se,vh=new Se,Ci=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Wn.subVectors(t,e),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Wn.subVectors(s,e),Ti.subVectors(n,e),fh.subVectors(t,e);let a=Wn.dot(Wn),o=Wn.dot(Ti),c=Wn.dot(fh),l=Ti.dot(Ti),h=Ti.dot(fh),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,p=(a*h-o*c)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,wi.x),c.addScaledVector(a,wi.y),c.addScaledVector(o,wi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return xh.setScalar(0),_h.setScalar(0),vh.setScalar(0),xh.fromBufferAttribute(t,e),_h.fromBufferAttribute(t,n),vh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(xh,r.x),a.addScaledVector(_h,r.y),a.addScaledVector(vh,r.z),a}static isFrontFacing(t,e,n,s){return Wn.subVectors(n,e),Ti.subVectors(t,e),Wn.cross(Ti).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Wn.cross(Ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ks.subVectors(s,n),Hs.subVectors(r,n),ph.subVectors(t,n);let c=ks.dot(ph),l=Hs.dot(ph);if(c<=0&&l<=0)return e.copy(n);mh.subVectors(t,s);let h=ks.dot(mh),u=Hs.dot(mh);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ks,a);gh.subVectors(t,r);let f=ks.dot(gh),p=Hs.dot(gh);if(p>=0&&f<=p)return e.copy(r);let v=f*l-c*p;if(v<=0&&l>=0&&p<=0)return o=l/(l-p),e.copy(n).addScaledVector(Hs,o);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Ld.subVectors(r,s),o=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(Ld,o);let m=1/(g+v+d);return a=v*m,o=d*m,e.copy(n).addScaledVector(ks,a).addScaledVector(Hs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Jn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xn):Xn.fromBufferAttribute(r,a),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wo.copy(n.boundingBox)),wo.applyMatrix4(t.matrixWorld),this.union(wo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Dr),Ao.subVectors(this.max,Dr),Vs.subVectors(t.a,Dr),Gs.subVectors(t.b,Dr),Ws.subVectors(t.c,Dr),Gi.subVectors(Gs,Vs),Wi.subVectors(Ws,Gs),us.subVectors(Vs,Ws);let e=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-us.z,us.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,us.z,0,-us.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-us.y,us.x,0];return!yh(e,Vs,Gs,Ws,Ao)||(e=[1,0,0,0,1,0,0,0,1],!yh(e,Vs,Gs,Ws,Ao))?!1:(Ro.crossVectors(Gi,Wi),e=[Ro.x,Ro.y,Ro.z],yh(e,Vs,Gs,Ws,Ao))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ai=[new I,new I,new I,new I,new I,new I,new I,new I],Xn=new I,wo=new Jn,Vs=new I,Gs=new I,Ws=new I,Gi=new I,Wi=new I,us=new I,Dr=new I,Ao=new I,Ro=new I,ds=new I;function yh(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ds.fromArray(i,r);let o=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),c=t.dot(ds),l=e.dot(ds),h=n.dot(ds);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Je=new I,Co=new at,N0=0,ge=class extends hi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:N0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lu,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Co.fromBufferAttribute(this,e),Co.applyMatrix3(t),this.setXY(e,Co.x,Co.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Qr=class extends ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ta=class extends ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ye=class extends ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},U0=new Jn,Lr=new I,Mh=new I,$n=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):U0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lr.subVectors(t,this.center);let e=Lr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Lr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lr.copy(t.center).add(Mh)),this.expandByPoint(Lr.copy(t.center).sub(Mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},F0=0,On=new $t,Sh=new Le,Xs=new I,Pn=new Jn,Nr=new Jn,en=new I,we=class i extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(M0(t)?ta:Qr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,n){return On.makeTranslation(t,e,n),this.applyMatrix4(On),this}scale(t,e,n){return On.makeScale(t,e,n),this.applyMatrix4(On),this}lookAt(t){return Sh.lookAt(t),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Nr.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(Pn.min,Nr.min),Pn.expandByPoint(en),en.addVectors(Pn.max,Nr.max),Pn.expandByPoint(en)):(Pn.expandByPoint(Nr.min),Pn.expandByPoint(Nr.max))}Pn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)en.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(en));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)en.fromBufferAttribute(o,l),c&&(Xs.fromBufferAttribute(t,l),en.add(Xs)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ge(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new I,c[x]=new I;let l=new I,h=new I,u=new I,d=new at,f=new at,p=new at,v=new I,g=new I;function m(x,T,P){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,P),d.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,P),h.sub(l),u.sub(l),f.sub(d),p.sub(d);let D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(D),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(D),o[x].add(v),o[T].add(v),o[P].add(v),c[x].add(g),c[T].add(g),c[P].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let x=0,T=b.length;x<T;++x){let P=b[x],D=P.start,N=P.count;for(let k=D,U=D+N;k<U;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let w=new I,y=new I,S=new I,E=new I;function C(x){S.fromBufferAttribute(s,x),E.copy(S);let T=o[x];w.copy(T),w.sub(S.multiplyScalar(S.dot(T))).normalize(),y.crossVectors(E,T);let D=y.dot(c[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,D)}for(let x=0,T=b.length;x<T;++x){let P=b[x],D=P.start,N=P.count;for(let k=D,U=D+N;k<U;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,p=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let m=0;m<h;m++)d[p++]=l[f++]}return new ge(d,h,u)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ea=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=lu,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},xn=new I,ar=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=oi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=oi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=oi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=oi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Zr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Zr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},bh=new I,O0=new I,B0=new jt,qn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=bh.subVectors(n,e).cross(O0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(bh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||B0.getNormalMatrix(t),s=this.coplanarPoint(bh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},z0=0,Kn=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=li(),this.name="",this.type="Material",this.blending=ji,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jh,this.blendDst=Qh,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new qn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new at().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ui=class extends Kn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qs,Ur=new I,Ys=new I,Zs=new I,Js=new at,Fr=new at,Vf=new $t,Po=new I,Or=new I,Io=new I,Nd=new at,Eh=new at,Ud=new at,Ii=class extends Le{constructor(t=new ui){if(super(),this.isSprite=!0,this.type="Sprite",qs===void 0){qs=new we;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ea(e,5);qs.setIndex([0,1,2,0,2,3]),qs.setAttribute("position",new ar(n,3,0,!1)),qs.setAttribute("uv",new ar(n,2,3,!1))}this.geometry=qs,this.material=t,this.center=new at(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ys.setFromMatrixScale(this.matrixWorld),Vf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ys.multiplyScalar(-Zs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Do(Po.set(-.5,-.5,0),Zs,a,Ys,s,r),Do(Or.set(.5,-.5,0),Zs,a,Ys,s,r),Do(Io.set(.5,.5,0),Zs,a,Ys,s,r),Nd.set(0,0),Eh.set(1,0),Ud.set(1,1);let o=t.ray.intersectTriangle(Po,Or,Io,!1,Ur);if(o===null&&(Do(Or.set(-.5,.5,0),Zs,a,Ys,s,r),Eh.set(0,1),o=t.ray.intersectTriangle(Po,Io,Or,!1,Ur),o===null))return;let c=t.ray.origin.distanceTo(Ur);c<t.near||c>t.far||e.push({distance:c,point:Ur.clone(),uv:Ci.getInterpolation(Ur,Po,Or,Io,Nd,Eh,Ud,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Do(i,t,e,n,s,r){Js.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Fr.x=r*Js.x-s*Js.y,Fr.y=s*Js.x+r*Js.y):Fr.copy(Js),i.copy(t),i.x+=Fr.x,i.y+=Fr.y,i.applyMatrix4(Vf)}var Ri=new I,Th=new I,Lo=new I,No=new I,or=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ri.copy(this.origin).addScaledVector(this.direction,e),Ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Th.copy(t).add(e).multiplyScalar(.5),Lo.copy(e).sub(t).normalize(),No.copy(this.origin).sub(Th);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Lo),o=No.dot(this.direction),c=-No.dot(Lo),l=No.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*c-o,d=a*o-c,p=r*h,u>=0)if(d>=-p)if(d<=p){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Th).addScaledVector(Lo,d),f}intersectSphere(t,e){if(t.radius<0)return null;Ri.subVectors(t.center,this.origin);let n=Ri.dot(this.direction),s=Ri.dot(Ri)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ri)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,p=e.x-a.x,v=e.y-a.y,g=e.z-a.z,m=n.x-a.x,b=n.y-a.y,w=n.z-a.z,y=Math.abs(c),S=Math.abs(l),E=Math.abs(h),C,x,T,P,D,N,k,U,B,q,X,rt;if(y>=S&&y>=E?(T=c,N=u,B=p,rt=m,c>=0?(C=l,x=h,P=d,D=f,k=v,U=g,q=b,X=w):(C=h,x=l,P=f,D=d,k=g,U=v,q=w,X=b)):S>=E?(T=l,N=d,B=v,rt=b,l>=0?(C=h,x=c,P=f,D=u,k=g,U=p,q=w,X=m):(C=c,x=h,P=u,D=f,k=p,U=g,q=m,X=w)):(T=h,N=f,B=g,rt=w,h>=0?(C=c,x=l,P=u,D=d,k=p,U=v,q=m,X=b):(C=l,x=c,P=d,D=u,k=v,U=p,q=b,X=m)),T===0)return null;let W=C/T,j=x/T,tt=1/T,Pt=P-W*N,Rt=D-j*N,ue=k-W*B,Qt=U-j*B,oe=q-W*rt,Z=X-j*rt,Q=oe*Qt-Z*ue,mt=Pt*Z-Rt*oe,Bt=ue*Rt-Qt*Pt;if(s){if(Q<0||mt<0||Bt<0)return null}else if((Q<0||mt<0||Bt<0)&&(Q>0||mt>0||Bt>0))return null;let wt=Q+mt+Bt;if(wt===0)return null;let Wt=tt*(Q*N+mt*B+Bt*rt);return(wt>0?Wt<0:Wt>0)?null:this.at(Wt/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ae=class extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Fd=new $t,fs=new or,Uo=new $n,Od=new I,Fo=new I,Oo=new I,Bo=new I,wh=new I,zo=new I,Bd=new I,ko=new I,St=class extends Le{constructor(t=new we,e=new Ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){zo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(wh.fromBufferAttribute(u,t),a?zo.addScaledVector(wh,h):zo.addScaledVector(wh.sub(e),h))}e.add(zo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),fs.copy(t.ray).recast(t.near),!(Uo.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Uo,Od)===null||fs.origin.distanceToSquared(Od)>(t.far-t.near)**2))&&(Fd.copy(r).invert(),fs.copy(t.ray).applyMatrix4(Fd),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){let g=d[p],m=a[g.materialIndex],b=Math.max(g.start,f.start),w=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=b,S=w;y<S;y+=3){let E=o.getX(y),C=o.getX(y+1),x=o.getX(y+2);s=Ho(this,m,t,n,l,h,u,E,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let b=o.getX(g),w=o.getX(g+1),y=o.getX(g+2);s=Ho(this,a,t,n,l,h,u,b,w,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){let g=d[p],m=a[g.materialIndex],b=Math.max(g.start,f.start),w=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=b,S=w;y<S;y+=3){let E=y,C=y+1,x=y+2;s=Ho(this,m,t,n,l,h,u,E,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let b=g,w=g+1,y=g+2;s=Ho(this,a,t,n,l,h,u,b,w,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function k0(i,t,e,n,s,r,a,o){let c;if(t.side===on?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Ki,o),c===null)return null;ko.copy(o),ko.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ko);return l<e.near||l>e.far?null:{distance:l,point:ko.clone(),object:i}}function Ho(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Fo),i.getVertexPosition(c,Oo),i.getVertexPosition(l,Bo);let h=k0(i,t,e,n,Fo,Oo,Bo,Bd);if(h){let u=new I;Ci.getBarycoord(Bd,Fo,Oo,Bo,u),s&&(h.uv=Ci.getInterpolatedAttribute(s,o,c,l,u,new at)),r&&(h.uv1=Ci.getInterpolatedAttribute(r,o,c,l,u,new at)),a&&(h.normal=Ci.getInterpolatedAttribute(a,o,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new I,materialIndex:0};Ci.getNormal(Fo,Oo,Bo,d.normal),h.face=d,h.barycoord=u}return h}var Br=new Se,zd=new Se,kd=new Se,H0=new Se,Hd=new $t,Vo=new I,Ah=new $n,Vd=new $t,Rh=new or,na=class extends St{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nh,this.bindMatrix=new $t,this.bindMatrixInverse=new $t,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Vo),this.boundingBox.expandByPoint(Vo)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $n),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Vo),this.boundingSphere.expandByPoint(Vo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ah.copy(this.boundingSphere),Ah.applyMatrix4(s),t.ray.intersectsSphere(Ah)!==!1&&(Vd.copy(s).invert(),Rh.copy(t.ray).applyMatrix4(Vd),!(this.boundingBox!==null&&Rh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Rh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Se,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Nh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Gt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;zd.fromBufferAttribute(s.attributes.skinIndex,t),kd.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(Br.copy(e),e.set(0,0,0,0)):(Br.set(...e,1),e.set(0,0,0)),Br.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=kd.getComponent(r);if(a!==0){let o=zd.getComponent(r);Hd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(H0.copy(Br).applyMatrix4(Hd),a)}}return e.isVector4&&(e.w=Br.w),e.applyMatrix4(this.bindMatrixInverse)}},lr=class extends Le{constructor(){super(),this.isBone=!0,this.type="Bone"}},di=class extends _n{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ge,h=Ge,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gd=new $t,V0=new $t,ia=class i{constructor(t=[],e=[]){this.uuid=li(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Gt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new $t)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new $t;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let o=t[r]?t[r].matrixWorld:V0;Gd.multiplyMatrices(o,e[r]),Gd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new di(e,t,t,Mn,Ln);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],a=e[r];a===void 0&&(Gt("Skeleton: No bone found with UUID:",r),a=new lr),this.bones.push(a),this.boneInverses.push(new $t().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let a=e[s];t.bones.push(a.uuid);let o=n[s];t.boneInverses.push(o.toArray())}return t}},cr=class extends ge{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},$s=new $t,Wd=new $t,Go=[],Xd=new Jn,G0=new $t,zr=new St,kr=new $n,sa=class extends St{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new cr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,G0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$s),Xd.copy(t.boundingBox).applyMatrix4($s),this.boundingBox.union(Xd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$s),kr.copy(t.boundingSphere).applyMatrix4($s),this.boundingSphere.union(kr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kr.copy(this.boundingSphere),kr.applyMatrix4(n),t.ray.intersectsSphere(kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$s),Wd.multiplyMatrices(n,$s),zr.matrixWorld=Wd,zr.raycast(t,Go);for(let a=0,o=Go.length;a<o;a++){let c=Go[a];c.instanceId=r,c.object=this,e.push(c)}Go.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new cr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new di(new Float32Array(s*this.count),s,this.count,kl,Ln));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ps=new $n,W0=new at(.5,.5),Wo=new I,hr=class{constructor(t=new qn,e=new qn,n=new qn,s=new qn,r=new qn,a=new qn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],v=r[9],g=r[10],m=r[11],b=r[12],w=r[13],y=r[14],S=r[15];if(s[0].setComponents(l-a,f-h,m-p,S-b).normalize(),s[1].setComponents(l+a,f+h,m+p,S+b).normalize(),s[2].setComponents(l+o,f+u,m+v,S+w).normalize(),s[3].setComponents(l-o,f-u,m-v,S-w).normalize(),n)s[4].setComponents(c,d,g,y).normalize(),s[5].setComponents(l-c,f-d,m-g,S-y).normalize();else if(s[4].setComponents(l-c,f-d,m-g,S-y).normalize(),e===Yn)s[5].setComponents(l+c,f+d,m+g,S+y).normalize();else if(e===nr)s[5].setComponents(c,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){ps.center.set(0,0,0);let e=W0.distanceTo(t.center);return ps.radius=.7071067811865476+e,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Wo.x=s.normal.x>0?t.max.x:t.min.x,Wo.y=s.normal.y>0?t.max.y:t.min.y,Wo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ul=class extends Kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qd=new $t,zh=new or,Xo=new $n,qo=new I,ra=class extends Le{constructor(t=new we,e=new ul){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(s),Xo.radius+=r,t.ray.intersectsSphere(Xo)===!1)return;qd.copy(s).invert(),zh.copy(t.ray).applyMatrix4(qd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let p=d,v=f;p<v;p++){let g=l.getX(p);qo.fromBufferAttribute(u,g),Yd(qo,g,c,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,v=f;p<v;p++)qo.fromBufferAttribute(u,p),Yd(qo,p,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Yd(i,t,e,n,s,r,a){let o=zh.distanceSqToPoint(i);if(o<e){let c=new I;zh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var aa=class extends _n{constructor(t=[],e=Qi,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vn=class extends _n{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fi=class extends _n{constructor(t,e,n=ti,s,r,a,o=Ge,c=Ge,l,h=ci,u=1){if(h!==ci&&h!==pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new sr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},dl=class extends fi{constructor(t,e=ti,n=Qi,s,r,a=Ge,o=Ge,c,l=ci){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},oa=class extends _n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ae=class i extends we{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2));function p(v,g,m,b,w,y,S,E,C,x,T){let P=y/C,D=S/x,N=y/2,k=S/2,U=E/2,B=C+1,q=x+1,X=0,rt=0,W=new I;for(let j=0;j<q;j++){let tt=j*D-k;for(let Pt=0;Pt<B;Pt++){let Rt=Pt*P-N;W[v]=Rt*b,W[g]=tt*w,W[m]=U,l.push(W.x,W.y,W.z),W[v]=0,W[g]=0,W[m]=E>0?1:-1,h.push(W.x,W.y,W.z),u.push(Pt/C),u.push(1-j/x),X+=1}}for(let j=0;j<x;j++)for(let tt=0;tt<C;tt++){let Pt=d+tt+B*j,Rt=d+tt+B*(j+1),ue=d+(tt+1)+B*(j+1),Qt=d+(tt+1)+B*j;c.push(Pt,Rt,Qt),c.push(Rt,ue,Qt),rt+=6}o.addGroup(f,rt,T),f+=rt,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var sn=class i extends we{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,v=[],g=n/2,m=0;b(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(f,2));function b(){let y=new I,S=new I,E=0,C=(e-t)/n;for(let x=0;x<=r;x++){let T=[],P=x/r,D=P*(e-t)+t;for(let N=0;N<=s;N++){let k=N/s,U=k*c+o,B=Math.sin(U),q=Math.cos(U);S.x=D*B,S.y=-P*n+g,S.z=D*q,u.push(S.x,S.y,S.z),y.set(B,C,q).normalize(),d.push(y.x,y.y,y.z),f.push(k,1-P),T.push(p++)}v.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let P=v[T][x],D=v[T+1][x],N=v[T+1][x+1],k=v[T][x+1];(t>0||T!==0)&&(h.push(P,D,k),E+=3),(e>0||T!==r-1)&&(h.push(D,N,k),E+=3)}l.addGroup(m,E,0),m+=E}function w(y){let S=p,E=new at,C=new I,x=0,T=y===!0?t:e,P=y===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,g*P,0),d.push(0,P,0),f.push(.5,.5),p++;let D=p;for(let N=0;N<=s;N++){let U=N/s*c+o,B=Math.cos(U),q=Math.sin(U);C.x=T*q,C.y=g*P,C.z=T*B,u.push(C.x,C.y,C.z),d.push(0,P,0),E.x=B*.5+.5,E.y=q*.5*P+.5,f.push(E.x,E.y),p++}for(let N=0;N<s;N++){let k=S+N,U=D+N;y===!0?h.push(U,U+1,k):h.push(U+1,U,k),x+=3}l.addGroup(m,x,y===!0?1:2),m+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_s=class i extends sn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ur=class i extends we{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new ye(r,3)),this.setAttribute("normal",new ye(r.slice(),3)),this.setAttribute("uv",new ye(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let w=new I,y=new I,S=new I;for(let E=0;E<e.length;E+=3)f(e[E+0],w),f(e[E+1],y),f(e[E+2],S),c(w,y,S,b)}function c(b,w,y,S){let E=S+1,C=[];for(let x=0;x<=E;x++){C[x]=[];let T=b.clone().lerp(y,x/E),P=w.clone().lerp(y,x/E),D=E-x;for(let N=0;N<=D;N++)N===0&&x===E?C[x][N]=T:C[x][N]=T.clone().lerp(P,N/D)}for(let x=0;x<E;x++)for(let T=0;T<2*(E-x)-1;T++){let P=Math.floor(T/2);T%2===0?(d(C[x][P+1]),d(C[x+1][P]),d(C[x][P])):(d(C[x][P+1]),d(C[x+1][P+1]),d(C[x+1][P]))}}function l(b){let w=new I;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(b),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function h(){let b=new I;for(let w=0;w<r.length;w+=3){b.x=r[w+0],b.y=r[w+1],b.z=r[w+2];let y=g(b)/2/Math.PI+.5,S=m(b)/Math.PI+.5;a.push(y,1-S)}p(),u()}function u(){for(let b=0;b<a.length;b+=6){let w=a[b+0],y=a[b+2],S=a[b+4],E=Math.max(w,y,S),C=Math.min(w,y,S);E>.9&&C<.1&&(w<.2&&(a[b+0]+=1),y<.2&&(a[b+2]+=1),S<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,w){let y=b*3;w.x=t[y+0],w.y=t[y+1],w.z=t[y+2]}function p(){let b=new I,w=new I,y=new I,S=new I,E=new at,C=new at,x=new at;for(let T=0,P=0;T<r.length;T+=9,P+=6){b.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),E.set(a[P+0],a[P+1]),C.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),S.copy(b).add(w).add(y).divideScalar(3);let D=g(S);v(E,P+0,b,D),v(C,P+2,w,D),v(x,P+4,y,D)}}function v(b,w,y,S){S<0&&b.x===1&&(a[w]=b.x-1),y.x===0&&y.z===0&&(a[w]=S/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},la=class i extends ur{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new at:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,c=new $t;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(he(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(he(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},dr=class extends In{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new at){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},fl=class extends dr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function hu(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Zd=new I,Jd=new I,Ch=new hu,Ph=new hu,Ih=new hu,pl=class extends In{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Jd.subVectors(s[0],s[1]).add(s[0]),l=Jd);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Zd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Zd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),Ch.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,v,g),Ph.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,v,g),Ih.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,v,g)}else this.curveType==="catmullrom"&&(Ch.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ph.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ih.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Ch.calc(c),Ph.calc(c),Ih.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function $d(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function X0(i,t){let e=1-i;return e*e*t}function q0(i,t){return 2*(1-i)*i*t}function Y0(i,t){return i*i*t}function Vr(i,t,e,n){return X0(i,t)+q0(i,e)+Y0(i,n)}function Z0(i,t){let e=1-i;return e*e*e*t}function J0(i,t){let e=1-i;return 3*e*e*i*t}function $0(i,t){return 3*(1-i)*i*i*t}function K0(i,t){return i*i*i*t}function Gr(i,t,e,n,s){return Z0(i,t)+J0(i,e)+$0(i,n)+K0(i,s)}var ca=class extends In{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gr(t,s.x,r.x,a.x,o.x),Gr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ml=class extends In{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gr(t,s.x,r.x,a.x,o.x),Gr(t,s.y,r.y,a.y,o.y),Gr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ha=class extends In{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gl=class extends In{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ua=class extends In{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Vr(t,s.x,r.x,a.x),Vr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xl=class extends In{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Vr(t,s.x,r.x,a.x),Vr(t,s.y,r.y,a.y),Vr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},da=class extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set($d(o,c.x,l.x,h.x,u.x),$d(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},kh=Object.freeze({__proto__:null,ArcCurve:fl,CatmullRomCurve3:pl,CubicBezierCurve:ca,CubicBezierCurve3:ml,EllipseCurve:dr,LineCurve:ha,LineCurve3:gl,QuadraticBezierCurve:ua,QuadraticBezierCurve3:xl,SplineCurve:da}),_l=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new kh[s.type]().fromJSON(s))}return this}},fa=class extends _l{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ha(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ua(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new ca(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new da(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new dr(t,e,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},fr=class extends fa{constructor(t){super(t),this.uuid=li(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new fa().fromJSON(s))}return this}};function j0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Gf(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=im(i,t,r,e)),i.length>80*e){o=i[0],c=i[1];let h=o,u=c;for(let d=e;d<s;d+=e){let f=i[d],p=i[d+1];f<o&&(o=f),p<c&&(c=p),f>h&&(h=f),p>u&&(u=p)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return pa(r,a,e,o,c,l,0),a}function Gf(i,t,e,n,s){let r;if(s===pm(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Kd(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Kd(a/n|0,i[a],i[a+1],r);return r&&pr(r,r.next)&&(ga(r),r=r.next),r}function vs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(pr(e,e.next)||ze(e.prev,e,e.next)===0)){if(ga(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function pa(i,t,e,n,s,r,a){if(!i)return;!a&&r&&lm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?tm(i,n,s,r):Q0(i)){t.push(c.i,i.i,l.i),ga(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=em(vs(i),t),pa(i,t,e,n,s,r,2)):a===2&&nm(i,t,e,n,s,r):pa(vs(i),t,e,n,s,r,1);break}}}function Q0(i){let t=i.prev,e=i,n=i.next;if(ze(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(s,r,a),u=Math.min(o,c,l),d=Math.max(s,r,a),f=Math.max(o,c,l),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Hr(s,o,r,c,a,l,p.x,p.y)&&ze(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function tm(i,t,e,n){let s=i.prev,r=i,a=i.next;if(ze(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,c,l),p=Math.min(h,u,d),v=Math.max(o,c,l),g=Math.max(h,u,d),m=Hh(f,p,t,e,n),b=Hh(v,g,t,e,n),w=i.prevZ,y=i.nextZ;for(;w&&w.z>=m&&y&&y.z<=b;){if(w.x>=f&&w.x<=v&&w.y>=p&&w.y<=g&&w!==s&&w!==a&&Hr(o,h,c,u,l,d,w.x,w.y)&&ze(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&Hr(o,h,c,u,l,d,y.x,y.y)&&ze(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=v&&w.y>=p&&w.y<=g&&w!==s&&w!==a&&Hr(o,h,c,u,l,d,w.x,w.y)&&ze(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=b;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&Hr(o,h,c,u,l,d,y.x,y.y)&&ze(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function em(i,t){let e=i;do{let n=e.prev,s=e.next.next;!pr(n,s)&&Xf(n,e,e.next,s)&&ma(n,s)&&ma(s,n)&&(t.push(n.i,e.i,s.i),ga(e),ga(e.next),e=i=s),e=e.next}while(e!==i);return vs(e)}function nm(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&um(a,o)){let c=qf(a,o);a=vs(a,a.next),c=vs(c,c.next),pa(a,t,e,n,s,r,0),pa(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function im(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=Gf(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(hm(l))}s.sort(sm);for(let r=0;r<s.length;r++)e=rm(s[r],e);return e}function sm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function rm(i,t){let e=am(i,t);if(!e)return t;let n=qf(e,i);return vs(n,n.next),vs(e,e.next)}function am(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(pr(i,e))return e;do{if(pr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Wf(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);ma(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&om(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function om(i,t){return ze(i.prev,i,t.prev)<0&&ze(t.next,i,i.next)<0}function lm(i,t,e,n){let s=i;do s.z===0&&(s.z=Hh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,cm(s)}function cm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Hh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function hm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wf(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Hr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Wf(i,t,e,n,s,r,a,o)}function um(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!dm(i,t)&&(ma(i,t)&&ma(t,i)&&fm(i,t)&&(ze(i.prev,i,t.prev)||ze(i,t.prev,t))||pr(i,t)&&ze(i.prev,i,i.next)>0&&ze(t.prev,t,t.next)>0)}function ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function pr(i,t){return i.x===t.x&&i.y===t.y}function Xf(i,t,e,n){let s=Zo(ze(i,t,e)),r=Zo(ze(i,t,n)),a=Zo(ze(e,n,i)),o=Zo(ze(e,n,t));return!!(s!==r&&a!==o||s===0&&Yo(i,e,t)||r===0&&Yo(i,n,t)||a===0&&Yo(e,i,n)||o===0&&Yo(e,t,n))}function Yo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Zo(i){return i>0?1:i<0?-1:0}function dm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ma(i,t){return ze(i.prev,i,i.next)<0?ze(i,t,i.next)>=0&&ze(i,i.prev,t)>=0:ze(i,t,i.prev)<0||ze(i,i.next,t)<0}function fm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function qf(i,t){let e=Vh(i.i,i.x,i.y),n=Vh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Kd(i,t,e,n){let s=Vh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ga(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pm(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Gh=class{static triangulate(t,e,n=2){return j0(t,e,n)}},ms=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];jd(t),Qd(n,t);let a=t.length;e.forEach(jd);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Qd(n,e[c]);let o=Gh.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function jd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Qd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var xa=class i extends we{constructor(t=new fr([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new ye(s,3)),this.setAttribute("uv",new ye(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:mm,w,y=!1,S,E,C,x;if(m){w=m.getSpacedPoints(h),y=!0,d=!1;let nt=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(h,nt),E=new I,C=new I,x=new I}d||(g=0,f=0,p=0,v=0);let T=o.extractPoints(l),P=T.shape,D=T.holes;if(!ms.isClockWise(P)){P=P.reverse();for(let nt=0,lt=D.length;nt<lt;nt++){let ct=D[nt];ms.isClockWise(ct)&&(D[nt]=ct.reverse())}}function k(nt){let ct=10000000000000001e-36,ht=nt[0];for(let pt=1;pt<=nt.length;pt++){let Vt=pt%nt.length,zt=nt[Vt],Xt=zt.x-ht.x,Yt=zt.y-ht.y,L=Xt*Xt+Yt*Yt,fe=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(ht.x),Math.abs(ht.y)),te=ct*fe*fe;if(L<=te){nt.splice(Vt,1),pt--;continue}ht=zt}}k(P),D.forEach(k);let U=D.length,B=P;for(let nt=0;nt<U;nt++){let lt=D[nt];P=P.concat(lt)}function q(nt,lt,ct){return lt||qt("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(lt,ct)}let X=P.length;function rt(nt,lt,ct){let ht,pt,Vt,zt=nt.x-lt.x,Xt=nt.y-lt.y,Yt=ct.x-nt.x,L=ct.y-nt.y,fe=zt*zt+Xt*Xt,te=zt*L-Xt*Yt;if(Math.abs(te)>Number.EPSILON){let A=Math.sqrt(fe),_=Math.sqrt(Yt*Yt+L*L),z=lt.x-Xt/A,H=lt.y+zt/A,J=ct.x-L/_,ut=ct.y+Yt/_,gt=((J-z)*L-(ut-H)*Yt)/(zt*L-Xt*Yt);ht=z+zt*gt-nt.x,pt=H+Xt*gt-nt.y;let K=ht*ht+pt*pt;if(K<=2)return new at(ht,pt);Vt=Math.sqrt(K/2)}else{let A=!1;zt>Number.EPSILON?Yt>Number.EPSILON&&(A=!0):zt<-Number.EPSILON?Yt<-Number.EPSILON&&(A=!0):Math.sign(Xt)===Math.sign(L)&&(A=!0),A?(ht=-Xt,pt=zt,Vt=Math.sqrt(fe)):(ht=zt,pt=Xt,Vt=Math.sqrt(fe/2))}return new at(ht/Vt,pt/Vt)}let W=[];for(let nt=0,lt=B.length,ct=lt-1,ht=nt+1;nt<lt;nt++,ct++,ht++)ct===lt&&(ct=0),ht===lt&&(ht=0),W[nt]=rt(B[nt],B[ct],B[ht]);let j=[],tt,Pt=W.concat();for(let nt=0,lt=U;nt<lt;nt++){let ct=D[nt];tt=[];for(let ht=0,pt=ct.length,Vt=pt-1,zt=ht+1;ht<pt;ht++,Vt++,zt++)Vt===pt&&(Vt=0),zt===pt&&(zt=0),tt[ht]=rt(ct[ht],ct[Vt],ct[zt]);j.push(tt),Pt=Pt.concat(tt)}let Rt;if(g===0)Rt=ms.triangulateShape(B,D);else{let nt=[],lt=[];for(let ct=0;ct<g;ct++){let ht=ct/g,pt=f*Math.cos(ht*Math.PI/2),Vt=p*Math.sin(ht*Math.PI/2)+v;for(let zt=0,Xt=B.length;zt<Xt;zt++){let Yt=q(B[zt],W[zt],Vt);mt(Yt.x,Yt.y,-pt),ht===0&&nt.push(Yt)}for(let zt=0,Xt=U;zt<Xt;zt++){let Yt=D[zt];tt=j[zt];let L=[];for(let fe=0,te=Yt.length;fe<te;fe++){let A=q(Yt[fe],tt[fe],Vt);mt(A.x,A.y,-pt),ht===0&&L.push(A)}ht===0&&lt.push(L)}}Rt=ms.triangulateShape(nt,lt)}let ue=Rt.length,Qt=p+v;for(let nt=0;nt<X;nt++){let lt=d?q(P[nt],Pt[nt],Qt):P[nt];y?(C.copy(S.normals[0]).multiplyScalar(lt.x),E.copy(S.binormals[0]).multiplyScalar(lt.y),x.copy(w[0]).add(C).add(E),mt(x.x,x.y,x.z)):mt(lt.x,lt.y,0)}for(let nt=1;nt<=h;nt++)for(let lt=0;lt<X;lt++){let ct=d?q(P[lt],Pt[lt],Qt):P[lt];y?(C.copy(S.normals[nt]).multiplyScalar(ct.x),E.copy(S.binormals[nt]).multiplyScalar(ct.y),x.copy(w[nt]).add(C).add(E),mt(x.x,x.y,x.z)):mt(ct.x,ct.y,u/h*nt)}for(let nt=g-1;nt>=0;nt--){let lt=nt/g,ct=f*Math.cos(lt*Math.PI/2),ht=p*Math.sin(lt*Math.PI/2)+v;for(let pt=0,Vt=B.length;pt<Vt;pt++){let zt=q(B[pt],W[pt],ht);mt(zt.x,zt.y,u+ct)}for(let pt=0,Vt=D.length;pt<Vt;pt++){let zt=D[pt];tt=j[pt];for(let Xt=0,Yt=zt.length;Xt<Yt;Xt++){let L=q(zt[Xt],tt[Xt],ht);y?mt(L.x,L.y+w[h-1].y,w[h-1].x+ct):mt(L.x,L.y,u+ct)}}}oe(),Z();function oe(){let nt=s.length/3;if(d){let lt=0,ct=X*lt;for(let ht=0;ht<ue;ht++){let pt=Rt[ht];Bt(pt[2]+ct,pt[1]+ct,pt[0]+ct)}lt=h+g*2,ct=X*lt;for(let ht=0;ht<ue;ht++){let pt=Rt[ht];Bt(pt[0]+ct,pt[1]+ct,pt[2]+ct)}}else{for(let lt=0;lt<ue;lt++){let ct=Rt[lt];Bt(ct[2],ct[1],ct[0])}for(let lt=0;lt<ue;lt++){let ct=Rt[lt];Bt(ct[0]+X*h,ct[1]+X*h,ct[2]+X*h)}}n.addGroup(nt,s.length/3-nt,0)}function Z(){let nt=s.length/3,lt=0;Q(B,lt),lt+=B.length;for(let ct=0,ht=D.length;ct<ht;ct++){let pt=D[ct];Q(pt,lt),lt+=pt.length}n.addGroup(nt,s.length/3-nt,1)}function Q(nt,lt){let ct=nt.length;for(;--ct>=0;){let ht=ct,pt=ct-1;pt<0&&(pt=nt.length-1);for(let Vt=0,zt=h+g*2;Vt<zt;Vt++){let Xt=X*Vt,Yt=X*(Vt+1),L=lt+ht+Xt,fe=lt+pt+Xt,te=lt+pt+Yt,A=lt+ht+Yt;wt(L,fe,te,A)}}}function mt(nt,lt,ct){c.push(nt),c.push(lt),c.push(ct)}function Bt(nt,lt,ct){Wt(nt),Wt(lt),Wt(ct);let ht=s.length/3,pt=b.generateTopUV(n,s,ht-3,ht-2,ht-1);pe(pt[0]),pe(pt[1]),pe(pt[2])}function wt(nt,lt,ct,ht){Wt(nt),Wt(lt),Wt(ht),Wt(lt),Wt(ct),Wt(ht);let pt=s.length/3,Vt=b.generateSideWallUV(n,s,pt-6,pt-3,pt-2,pt-1);pe(Vt[0]),pe(Vt[1]),pe(Vt[3]),pe(Vt[1]),pe(Vt[2]),pe(Vt[3])}function Wt(nt){s.push(c[nt*3+0]),s.push(c[nt*3+1]),s.push(c[nt*3+2])}function pe(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return gm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new kh[s.type]().fromJSON(s)),new i(n,t.options)}},mm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new at(r,a),new at(o,c),new at(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],v=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new at(a,1-c),new at(l,1-u),new at(d,1-p),new at(v,1-m)]:[new at(o,1-c),new at(h,1-u),new at(f,1-p),new at(g,1-m)]}};function gm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var _a=class i extends ur{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var va=class i extends ur{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},yn=class i extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],p=[],v=[],g=[];for(let m=0;m<h;m++){let b=m*d-a;for(let w=0;w<l;w++){let y=w*u-r;p.push(y,-b,0),v.push(0,0,1),g.push(w/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<o;b++){let w=b+l*m,y=b+l*(m+1),S=b+1+l*(m+1),E=b+1+l*m;f.push(w,y,E),f.push(y,S,E)}this.setIndex(f),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(v,3)),this.setAttribute("uv",new ye(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var jn=class i extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new I,d=new I,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){let b=[],w=m/n,y=a+w*o,S=t*Math.cos(y),E=Math.sqrt(t*t-S*S),C=0;m===0&&a===0?C=.5/e:m===n&&c===Math.PI&&(C=-.5/e);for(let x=0;x<=e;x++){let T=x/e,P=s+T*r;u.x=-E*Math.cos(P),u.y=S,u.z=E*Math.sin(P),p.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(T+C,1-w),b.push(l++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){let w=h[m][b+1],y=h[m][b],S=h[m+1][b],E=h[m+1][b+1];(m!==0||a>0)&&f.push(w,y,E),(m!==n-1||c<Math.PI)&&f.push(y,S,E)}this.setIndex(f),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(v,3)),this.setAttribute("uv",new ye(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Di=class i extends we{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new I,f=new I,p=new I;for(let v=0;v<=n;v++){let g=a+v/n*o;for(let m=0;m<=s;m++){let b=m/s*r;f.x=(t+e*Math.cos(g))*Math.cos(b),f.y=(t+e*Math.cos(g))*Math.sin(b),f.z=e*Math.sin(g),l.push(f.x,f.y,f.z),d.x=t*Math.cos(b),d.y=t*Math.sin(b),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(m/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=s;g++){let m=(s+1)*v+g-1,b=(s+1)*(v-1)+g-1,w=(s+1)*(v-1)+g,y=(s+1)*v+g;c.push(m,b,y),c.push(b,w,y)}this.setIndex(c),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function As(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(tf(s))s.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(tf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function pn(i){let t={};for(let e=0;e<i.length;e++){let n=As(i[e]);for(let s in n)t[s]=n[s]}return t}function tf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function xm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function uu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var Sn={clone:As,merge:pn},_m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,de=class extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_m,this.fragmentShader=vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=xm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ft().setHex(s.value);break;case"v2":this.uniforms[n].value=new at().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new $t().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},mr=class extends de{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},se=class extends Kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ha,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ya=class extends Kn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ha,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var vl=class extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yl=class extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ks(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Dh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var qi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ml=class extends qi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fh,endingEnd:Fh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oh:r=t,o=2*e-n;break;case Bh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Oh:a=t,c=2*n-e;break;case Bh:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),v=p*p,g=v*p,m=-d*g+2*d*v-d*p,b=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*p+1,w=(-1-f)*g+(1.5+f)*v+.5*p,y=f*g-f*v;for(let S=0;S!==o;++S)r[S]=m*a[h+S]+b*a[l+S]+w*a[c+S]+y*a[u+S];return r}},Sl=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},bl=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},El=class extends qi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(s-e),v=1-p;for(let g=0;g!==o;++g)r[g]=a[l+g]*v+a[c+g]*p;return r}let d=o*2,f=t-1;for(let p=0;p!==o;++p){let v=a[l+p],g=a[c+p],m=f*d+p*2,b=u[m],w=u[m+1],y=t*d+p*2,S=h[y],E=h[y+1],C=Mm(n,e,b,S,s);r[p]=Yf(C,v,w,E,g)}return r}};function Yf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function ym(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Mm(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Yf(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=ym(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Dn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ks(e,this.TimeBufferType),this.values=Ks(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ks(t.times,Array),values:Ks(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Dh(t.settings)&&(n.settings={inTangents:Ks(t.settings.inTangents,Array),outTangents:Ks(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new El(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Wr:e=this.InterpolantFactoryMethodDiscrete;break;case ol:e=this.InterpolantFactoryMethodLinear;break;case Ko:e=this.InterpolantFactoryMethodSmooth;break;case Uh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Gt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return ol;case this.InterpolantFactoryMethodSmooth:return Ko;case this.InterpolantFactoryMethodBezier:return Uh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Dh(this.settings)&&(ef(this.settings.inTangents,t),ef(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){qt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){qt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&S0(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){qt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ko,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let v=e[u+p];if(v!==e[d+p]||v!==e[f+p]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Dh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ef(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=ol;var Yi=class extends Dn{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Wr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Tl=class extends Dn{constructor(t,e,n,s){super(t,e,n,s)}};Tl.prototype.ValueTypeName="color";var wl=class extends Dn{constructor(t,e,n,s){super(t,e,n,s)}};wl.prototype.ValueTypeName="number";var Al=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)zn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ma=class extends Dn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Al(this.times,this.values,this.getValueSize(),t)}};Ma.prototype.ValueTypeName="quaternion";Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Dn{constructor(t,e,n){super(t,e,n)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Wr;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Rl=class extends Dn{constructor(t,e,n,s){super(t,e,n,s)}};Rl.prototype.ValueTypeName="vector";var Cl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zf=new Cl,Pl=class{constructor(t){this.manager=t!==void 0?t:Zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Pl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ys=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ms=class extends ys{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Lh=new $t,nf=new I,sf=new I,gr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;nf.setFromMatrixPosition(t.matrixWorld),e.position.copy(nf),sf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Lh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Lh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===nr||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Lh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Jo=new I,$o=new zn,ai=new I,Sa=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Jo,$o,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,$o,ai.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Jo,$o,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,$o,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Xi=new I,rf=new at,af=new at,nn=class extends Sa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Jr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(rh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z)}getViewSize(t,e){return this.getViewBounds(t,rf,af),e.subVectors(af,rf)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rh*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Wh=class extends gr{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Jr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},ba=class extends ys{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Wh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Xh=class extends gr{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0}},Ji=class extends ys{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},$i=class extends Sa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},qh=class extends gr{constructor(){super(new $i(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ss=class extends ys{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new qh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var js=-90,Qs=1,Il=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(js,Qs,t,e);s.layers=this.layers,this.add(s);let r=new nn(js,Qs,t,e);r.layers=this.layers,this.add(r);let a=new nn(js,Qs,t,e);a.layers=this.layers,this.add(a);let o=new nn(js,Qs,t,e);o.layers=this.layers,this.add(o);let c=new nn(js,Qs,t,e);c.layers=this.layers,this.add(c);let l=new nn(js,Qs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Dl=class extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Ea=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Sm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Sm(){this._document.hidden===!1&&this.reset()}var du="\\[\\]\\.:\\/",bm=new RegExp("["+du+"]","g"),fu="[^"+du+"]",Em="[^"+du.replace("\\.","")+"]",Tm=/((?:WC+[\/:])*)/.source.replace("WC",fu),wm=/(WCOD+)?/.source.replace("WCOD",Em),Am=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fu),Rm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fu),Cm=new RegExp("^"+Tm+wm+Am+Rm+"$"),Pm=["material","materials","bones","map"],Yh=class{constructor(t,e,n){let s=n||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bm,"")}static parseTrackName(t){let e=Cm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Pm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=Yh;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var NM=new Float32Array(1);var Zh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function pu(i,t,e,n){let s=Im(n);switch(e){case au:return i*t;case kl:return i*t/s.components*s.byteLength;case Hl:return i*t/s.components*s.byteLength;case ns:return i*t*2/s.components*s.byteLength;case Vl:return i*t*2/s.components*s.byteLength;case ou:return i*t*3/s.components*s.byteLength;case Mn:return i*t*4/s.components*s.byteLength;case Gl:return i*t*4/s.components*s.byteLength;case Ua:case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xl:case Yl:return Math.max(i,16)*Math.max(t,8)/4;case Wl:case ql:return Math.max(i,8)*Math.max(t,8)/2;case Zl:case Jl:case Kl:case jl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $l:case za:case Ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ec:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case oc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case lc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case hc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case dc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pc:case mc:case gc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xc:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ka:case vc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Im(i){switch(i){case fn:case nu:return{byteLength:1,components:1};case _r:case iu:case ke:return{byteLength:2,components:1};case Bl:case zl:return{byteLength:2,components:4};case ti:case Ol:case Ln:return{byteLength:4,components:1};case su:case ru:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function gp(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Fm(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let v=u[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bm=`#ifdef USE_ALPHAHASH
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
#endif`,zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gm=`#ifdef USE_AOMAP
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
#endif`,Wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xm=`#ifdef USE_BATCHING
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
#endif`,qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$m=`#ifdef USE_IRIDESCENCE
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
#endif`,Km=`#ifdef USE_BUMPMAP
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ag=`#define PI 3.141592653589793
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
} // validated`,og=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lg=`vec3 transformedNormal = objectNormal;
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
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",pg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
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
#endif`,_g=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vg=`#ifdef USE_ENVMAP
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
#endif`,yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eg=`#ifdef USE_GRADIENTMAP
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
}`,Tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ng=`PhysicalMaterial material;
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
#endif`,Ug=`uniform sampler2D dfgLUT;
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
}`,Fg=`
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
#endif`,Og=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,kg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yg=`#if defined( USE_POINTS_UV )
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
#endif`,Zg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$g=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qg=`#ifdef USE_MORPHTARGETS
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
#endif`,tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ax=`#ifdef USE_NORMALMAP
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
#endif`,ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ux=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_x=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sx=`float getShadowMask() {
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
}`,bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ex=`#ifdef USE_SKINNING
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
#endif`,Tx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wx=`#ifdef USE_SKINNING
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
#endif`,Ax=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Px=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ix=`#ifdef USE_TRANSMISSION
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
#endif`,Dx=`#ifdef USE_TRANSMISSION
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bx=`uniform sampler2D t2D;
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
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`#include <common>
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
}`,Wx=`#if DEPTH_PACKING == 3200
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
}`,Xx=`#define DISTANCE
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
}`,qx=`#define DISTANCE
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
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`uniform float scale;
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
}`,$x=`uniform vec3 diffuse;
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
}`,Kx=`#include <common>
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
}`,jx=`uniform vec3 diffuse;
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
}`,Qx=`#define LAMBERT
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
}`,e_=`#define MATCAP
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
}`,n_=`#define MATCAP
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
}`,i_=`#define NORMAL
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
}`,s_=`#define NORMAL
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
}`,r_=`#define PHONG
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
}`,a_=`#define PHONG
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
}`,o_=`#define STANDARD
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
}`,l_=`#define STANDARD
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
}`,c_=`#define TOON
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
}`,h_=`#define TOON
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
}`,u_=`uniform float size;
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
}`,d_=`uniform vec3 diffuse;
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
}`,f_=`#include <common>
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
}`,p_=`uniform vec3 color;
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
}`,m_=`uniform float rotation;
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
}`,g_=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:Om,alphahash_pars_fragment:Bm,alphamap_fragment:zm,alphamap_pars_fragment:km,alphatest_fragment:Hm,alphatest_pars_fragment:Vm,aomap_fragment:Gm,aomap_pars_fragment:Wm,batching_pars_vertex:Xm,batching_vertex:qm,begin_vertex:Ym,beginnormal_vertex:Zm,bsdfs:Jm,iridescence_fragment:$m,bumpmap_pars_fragment:Km,clipping_planes_fragment:jm,clipping_planes_pars_fragment:Qm,clipping_planes_pars_vertex:tg,clipping_planes_vertex:eg,color_fragment:ng,color_pars_fragment:ig,color_pars_vertex:sg,color_vertex:rg,common:ag,cube_uv_reflection_fragment:og,defaultnormal_vertex:lg,displacementmap_pars_vertex:cg,displacementmap_vertex:hg,emissivemap_fragment:ug,emissivemap_pars_fragment:dg,colorspace_fragment:fg,colorspace_pars_fragment:pg,envmap_fragment:mg,envmap_common_pars_fragment:gg,envmap_pars_fragment:xg,envmap_pars_vertex:_g,envmap_physical_pars_fragment:Cg,envmap_vertex:vg,fog_vertex:yg,fog_pars_vertex:Mg,fog_fragment:Sg,fog_pars_fragment:bg,gradientmap_pars_fragment:Eg,lightmap_pars_fragment:Tg,lights_lambert_fragment:wg,lights_lambert_pars_fragment:Ag,lights_pars_begin:Rg,lights_toon_fragment:Pg,lights_toon_pars_fragment:Ig,lights_phong_fragment:Dg,lights_phong_pars_fragment:Lg,lights_physical_fragment:Ng,lights_physical_pars_fragment:Ug,lights_fragment_begin:Fg,lights_fragment_maps:Og,lights_fragment_end:Bg,lightprobes_pars_fragment:zg,logdepthbuf_fragment:kg,logdepthbuf_pars_fragment:Hg,logdepthbuf_pars_vertex:Vg,logdepthbuf_vertex:Gg,map_fragment:Wg,map_pars_fragment:Xg,map_particle_fragment:qg,map_particle_pars_fragment:Yg,metalnessmap_fragment:Zg,metalnessmap_pars_fragment:Jg,morphinstance_vertex:$g,morphcolor_vertex:Kg,morphnormal_vertex:jg,morphtarget_pars_vertex:Qg,morphtarget_vertex:tx,normal_fragment_begin:ex,normal_fragment_maps:nx,normal_pars_fragment:ix,normal_pars_vertex:sx,normal_vertex:rx,normalmap_pars_fragment:ax,clearcoat_normal_fragment_begin:ox,clearcoat_normal_fragment_maps:lx,clearcoat_pars_fragment:cx,iridescence_pars_fragment:hx,opaque_fragment:ux,packing:dx,premultiplied_alpha_fragment:fx,project_vertex:px,dithering_fragment:mx,dithering_pars_fragment:gx,roughnessmap_fragment:xx,roughnessmap_pars_fragment:_x,shadowmap_pars_fragment:vx,shadowmap_pars_vertex:yx,shadowmap_vertex:Mx,shadowmask_pars_fragment:Sx,skinbase_vertex:bx,skinning_pars_vertex:Ex,skinning_vertex:Tx,skinnormal_vertex:wx,specularmap_fragment:Ax,specularmap_pars_fragment:Rx,tonemapping_fragment:Cx,tonemapping_pars_fragment:Px,transmission_fragment:Ix,transmission_pars_fragment:Dx,uv_pars_fragment:Lx,uv_pars_vertex:Nx,uv_vertex:Ux,worldpos_vertex:Fx,background_vert:Ox,background_frag:Bx,backgroundCube_vert:zx,backgroundCube_frag:kx,cube_vert:Hx,cube_frag:Vx,depth_vert:Gx,depth_frag:Wx,distance_vert:Xx,distance_frag:qx,equirect_vert:Yx,equirect_frag:Zx,linedashed_vert:Jx,linedashed_frag:$x,meshbasic_vert:Kx,meshbasic_frag:jx,meshlambert_vert:Qx,meshlambert_frag:t_,meshmatcap_vert:e_,meshmatcap_frag:n_,meshnormal_vert:i_,meshnormal_frag:s_,meshphong_vert:r_,meshphong_frag:a_,meshphysical_vert:o_,meshphysical_frag:l_,meshtoon_vert:c_,meshtoon_frag:h_,points_vert:u_,points_frag:d_,shadow_vert:f_,shadow_frag:p_,sprite_vert:m_,sprite_frag:g_},bt={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},gi={basic:{uniforms:pn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:pn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ft(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:pn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:pn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:pn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new ft(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:pn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:pn([bt.points,bt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:pn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:pn([bt.common,bt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:pn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:pn([bt.sprite,bt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:pn([bt.common,bt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:pn([bt.lights,bt.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};gi.physical={uniforms:pn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var Sc={r:0,b:0,g:0},x_=new $t,xp=new jt;xp.set(-1,0,0,0,1,0,0,0,1);function __(i,t,e,n,s,r){let a=new ft(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let y=b.backgroundBlurriness>0;w=t.get(w,y)}return w}function p(b){let w=!1,y=f(b);y===null?g(a,o):y&&y.isColor&&(g(y,1),w=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(b,w){let y=f(w);y&&(y.isCubeTexture||y.mapping===La)?(l===void 0&&(l=new St(new ae(1,1,1),new de({name:"BackgroundCubeMaterial",uniforms:As(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(x_.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(xp),l.material.toneMapped=le.getTransfer(y.colorSpace)!==xe,(h!==y||u!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new St(new yn(2,2),new de({name:"BackgroundMaterial",uniforms:As(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=le.getTransfer(y.colorSpace)!==xe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function g(b,w){b.getRGB(Sc,uu(i)),e.buffers.color.setClear(Sc.r,Sc.g,Sc.b,w,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:p,addToRenderList:v,dispose:m}}function v_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(D,N,k,U,B){let q=!1,X=u(D,U,k,N);r!==X&&(r=X,l(r.object)),q=f(D,U,k,B),q&&p(D,U,k,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(D,N,k,U),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function u(D,N,k,U){let B=U.wireframe===!0,q=n[N.id];q===void 0&&(q={},n[N.id]=q);let X=D.isInstancedMesh===!0?D.id:0,rt=q[X];rt===void 0&&(rt={},q[X]=rt);let W=rt[k.id];W===void 0&&(W={},rt[k.id]=W);let j=W[B];return j===void 0&&(j=d(c()),W[B]=j),j}function d(D){let N=[],k=[],U=[];for(let B=0;B<e;B++)N[B]=0,k[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:U,object:D,attributes:{},index:null}}function f(D,N,k,U){let B=r.attributes,q=N.attributes,X=0,rt=k.getAttributes();for(let W in rt)if(rt[W].location>=0){let tt=B[W],Pt=q[W];if(Pt===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(Pt=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(Pt=D.instanceColor)),tt===void 0||tt.attribute!==Pt||Pt&&tt.data!==Pt.data)return!0;X++}return r.attributesNum!==X||r.index!==U}function p(D,N,k,U){let B={},q=N.attributes,X=0,rt=k.getAttributes();for(let W in rt)if(rt[W].location>=0){let tt=q[W];tt===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor));let Pt={};Pt.attribute=tt,tt&&tt.data&&(Pt.data=tt.data),B[W]=Pt,X++}r.attributes=B,r.attributesNum=X,r.index=U}function v(){let D=r.newAttributes;for(let N=0,k=D.length;N<k;N++)D[N]=0}function g(D){m(D,0)}function m(D,N){let k=r.newAttributes,U=r.enabledAttributes,B=r.attributeDivisors;k[D]=1,U[D]===0&&(i.enableVertexAttribArray(D),U[D]=1),B[D]!==N&&(i.vertexAttribDivisor(D,N),B[D]=N)}function b(){let D=r.newAttributes,N=r.enabledAttributes;for(let k=0,U=N.length;k<U;k++)N[k]!==D[k]&&(i.disableVertexAttribArray(k),N[k]=0)}function w(D,N,k,U,B,q,X){X===!0?i.vertexAttribIPointer(D,N,k,B,q):i.vertexAttribPointer(D,N,k,U,B,q)}function y(D,N,k,U){v();let B=U.attributes,q=k.getAttributes(),X=N.defaultAttributeValues;for(let rt in q){let W=q[rt];if(W.location>=0){let j=B[rt];if(j===void 0&&(rt==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),rt==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){let tt=j.normalized,Pt=j.itemSize,Rt=t.get(j);if(Rt===void 0)continue;let ue=Rt.buffer,Qt=Rt.type,oe=Rt.bytesPerElement,Z=Qt===i.INT||Qt===i.UNSIGNED_INT||j.gpuType===Ol;if(j.isInterleavedBufferAttribute){let Q=j.data,mt=Q.stride,Bt=j.offset;if(Q.isInstancedInterleavedBuffer){for(let wt=0;wt<W.locationSize;wt++)m(W.location+wt,Q.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let wt=0;wt<W.locationSize;wt++)g(W.location+wt);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let wt=0;wt<W.locationSize;wt++)w(W.location+wt,Pt/W.locationSize,Qt,tt,mt*oe,(Bt+Pt/W.locationSize*wt)*oe,Z)}else{if(j.isInstancedBufferAttribute){for(let Q=0;Q<W.locationSize;Q++)m(W.location+Q,j.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Q=0;Q<W.locationSize;Q++)g(W.location+Q);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let Q=0;Q<W.locationSize;Q++)w(W.location+Q,Pt/W.locationSize,Qt,tt,Pt*oe,Pt/W.locationSize*Q*oe,Z)}}else if(X!==void 0){let tt=X[rt];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(W.location,tt);break;case 3:i.vertexAttrib3fv(W.location,tt);break;case 4:i.vertexAttrib4fv(W.location,tt);break;default:i.vertexAttrib1fv(W.location,tt)}}}}b()}function S(){T();for(let D in n){let N=n[D];for(let k in N){let U=N[k];for(let B in U){let q=U[B];for(let X in q)h(q[X].object),delete q[X];delete U[B]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;let N=n[D.id];for(let k in N){let U=N[k];for(let B in U){let q=U[B];for(let X in q)h(q[X].object),delete q[X];delete U[B]}}delete n[D.id]}function C(D){for(let N in n){let k=n[N];for(let U in k){let B=k[U];if(B[D.id]===void 0)continue;let q=B[D.id];for(let X in q)h(q[X].object),delete q[X];delete B[D.id]}}}function x(D){for(let N in n){let k=n[N],U=D.isInstancedMesh===!0?D.id:0,B=k[U];if(B!==void 0){for(let q in B){let X=B[q];for(let rt in X)h(X[rt].object),delete X[rt];delete B[q]}delete k[U],Object.keys(k).length===0&&delete n[N]}}}function T(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:b}}function y_(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function M_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Mn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===ke&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==fn&&C!==Ln&&!x&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Gt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:y,maxSamples:S,samples:E}}function S_(i){let t=this,e=null,n=0,s=!1,r=!1,a=new qn,o=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):l();else{let b=r?0:n,w=b*4,y=m.clippingState||null;c.value=y,y=h(p,d,w,f);for(let S=0;S!==w;++S)y[S]=e[S];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=c.value,p!==!0||g===null){let m=f+v*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,y=f;w!==v;++w,y+=4)a.copy(u[w]).applyMatrix4(b,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var yr=4,b_=6,E_=20,T_=256,Ga=new $i,Jf=new ft,mu=null,gu=0,xu=0,_u=!1,w_=new I,Rs=new I,Sr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=w_}=r;mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),xu=this._renderer.getActiveMipmapLevel(),_u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(mu,gu,xu),this._renderer.xr.enabled=_u,t.scissorTest=!1,vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),xu=this._renderer.getActiveMipmapLevel(),_u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:ke,format:Mn,colorSpace:Xr,depthBuffer:!1},s=$f(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$f(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=A_(r)),this._blurMaterial=C_(r,t,e),this._ggxMaterial=R_(r,t,e)}return s}_compileMaterial(t){let e=new St(new we,t);this._renderer.compile(e,Ga)}_sceneToCubeUV(t,e,n,s,r){let c=new nn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Jf),u.toneMapping=Qn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new St(new ae,new Ae({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,m=!1,b=t.background;b?b.isColor&&(g.color.copy(b),t.background=null,m=!0):(g.color.copy(Jf),m=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):y===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));let S=this._cubeSize;vr(s,y*S,w>2?S:0,S,S),u.setRenderTarget(s),m&&u.render(v,c),u.render(t,c)}u.toneMapping=f,u.autoClear=d,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Qi||t.mapping===ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;vr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ga)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,f=u*d,{_lodMax:p}=this,v=this._sizeLods[n],g=3*v*(n>p-yr?n-p+yr:0),m=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=p-e,vr(r,g,m,3*v,2*v),s.setRenderTarget(r),s.render(o,Ga),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,vr(t,g,m,3*v,2*v),s.setRenderTarget(t),s.render(o,Ga)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-yr?s-this._lodMax+yr:0),d=4*(this._cubeSize-h);vr(e,u,d,3*h,2*h),a.setRenderTarget(e),a.render(c,Ga)}};function A_(i){let t=[],e=[],n=i,s=i-yr+1+b_;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,p=new Float32Array(f*d*u),v=new Float32Array(f*d*u);for(let m=0;m<u;m++){let b=m%3*2/3-1,w=m>2?0:-1,y=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];p.set(y,f*d*m);for(let S=0;S<d;S++){let E=h[S*2]*2-1,C=h[S*2+1]*2-1;m===0?Rs.set(1,C,E):m===1?Rs.set(-E,1,-C):m===2?Rs.set(-E,C,1):m===3?Rs.set(-1,C,-E):m===4?Rs.set(-E,-1,C):Rs.set(E,C,-1),Rs.toArray(v,(m*d+S)*f)}}let g=new we;g.setAttribute("position",new ge(p,f)),g.setAttribute("outputDirection",new ge(v,f)),e.push(new St(g,null)),n>yr&&n--}return{lodMeshes:e,sizeLods:t}}function $f(i,t,e){let n=new Oe(i,t,e);return n.texture.mapping=La,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function R_(i,t,e){return new de({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:T_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

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
		`,blending:We,depthTest:!1,depthWrite:!1})}function C_(i,t,e){return new de({name:"SphericalGaussianBlur",defines:{SAMPLES:E_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

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
		`,blending:We,depthTest:!1,depthWrite:!1})}function Kf(){return new de({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

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
		`,blending:We,depthTest:!1,depthWrite:!1})}function jf(){return new de({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:We,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ec=class extends Oe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new aa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ae(5,5,5),r=new de({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:We});r.uniforms.tEquirect.value=e;let a=new St(s,r),o=e.minFilter;return e.minFilter===ts&&(e.minFilter=an),new Il(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function P_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Nl||f===Ul)if(t.has(d)){let p=t.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let v=new Ec(p.height);return v.fromEquirectangularTexture(i,d),t.set(d,v),d.addEventListener("dispose",l),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,p=f===Nl||f===Ul,v=f===Qi||f===ws;if(p||v){let g=e.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Sr(i)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let b=d.image;return p&&b&&b.height>0||v&&b&&c(b)?(n===null&&(n=new Sr(i)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===Nl?d.mapping=Qi:f===Ul&&(d.mapping=ws),d}function c(d){let f=0,p=6;for(let v=0;v<p;v++)d[v]!==void 0&&f++;return f===p}function l(d){let f=d.target;f.removeEventListener("dispose",l);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function I_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&gs("WebGLRenderer: "+n+" extension not supported."),s}}}function D_(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,p=u.attributes.position,v=0;if(p===void 0)return;if(f!==null){let b=f.array;v=f.version;for(let w=0,y=b.length;w<y;w+=3){let S=b[w+0],E=b[w+1],C=b[w+2];d.push(S,E,E,C,C,S)}}else{let b=p.array;v=p.version;for(let w=0,y=b.length/3-1;w<y;w+=3){let S=w+0,E=w+1,C=w+2;d.push(S,E,E,C,C,S)}}let g=new(p.count>=65535?ta:Qr)(d,1);g.version=v;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function L_(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let g=0;g<f;g++)v+=d[g];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function N_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function U_(i,t,e){let n=new WeakMap,s=new Se;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),v===!0&&(w=3);let y=o.attributes.position.count*w,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*S*4*u),C=new $r(E,y,S,u);C.type=Ln,C.needsUpdate=!0;let x=w*4;for(let P=0;P<u;P++){let D=g[P],N=m[P],k=b[P],U=y*S*4*P;for(let B=0;B<D.count;B++){let q=B*x;f===!0&&(s.fromBufferAttribute(D,B),E[U+q+0]=s.x,E[U+q+1]=s.y,E[U+q+2]=s.z,E[U+q+3]=0),p===!0&&(s.fromBufferAttribute(N,B),E[U+q+4]=s.x,E[U+q+5]=s.y,E[U+q+6]=s.z,E[U+q+7]=0),v===!0&&(s.fromBufferAttribute(k,B),E[U+q+8]=s.x,E[U+q+9]=s.y,E[U+q+10]=s.z,E[U+q+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new at(y,S)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let p=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function F_(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=t.get(l,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var O_={[Aa]:"LINEAR_TONE_MAPPING",[Ra]:"REINHARD_TONE_MAPPING",[Ca]:"CINEON_TONE_MAPPING",[Ts]:"ACES_FILMIC_TONE_MAPPING",[Ia]:"AGX_TONE_MAPPING",[Da]:"NEUTRAL_TONE_MAPPING",[Pa]:"CUSTOM_TONE_MAPPING"};function B_(i,t,e,n,s,r){let a=new Oe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new we;l.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ye([0,2,0,0,2,0],2));let h=new mr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new St(l,h),d=new $i(-1,1,1,-1,0,1),f=null,p=null,v=!1,g,m=null,b=[],w=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),c!==null&&c.setSize(y,S);for(let E=0;E<b.length;E++){let C=b[E];C.setSize&&C.setSize(y,S)}},this.setEffects=function(y){b=y,w=b.length>0&&b[0].isRenderPass===!0;let S=a.width,E=a.height;b.length>0&&o===null&&(o=new Oe(S,E,{type:ke,depthBuffer:!1,stencilBuffer:!1}),c=new Oe(S,E,{type:ke,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<b.length;C++){let x=b[C];x.setSize&&x.setSize(S,E)}},this.begin=function(y,S){if(v||y.toneMapping===Qn&&b.length===0)return!1;if(m=S,S!==null){let E=S.width,C=S.height;(a.width!==E||a.height!==C)&&this.setSize(E,C)}return w===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=Qn,!0},this.hasRenderPass=function(){return w},this.end=function(y,S){y.toneMapping=g,v=!0;let E=a,C=o;for(let x=0;x<b.length;x++){let T=b[x];T.enabled!==!1&&(T.render(y,C,E,S),T.needsSwap!==!1&&(E=C,C=C===o?c:o))}if(f!==y.outputColorSpace||p!==y.toneMapping){f=y.outputColorSpace,p=y.toneMapping,h.defines={},le.getTransfer(f)===xe&&(h.defines.SRGB_TRANSFER="");let x=O_[p];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(m),y.render(u,d),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var _p=new _n,Mu=new fi(1,1),vp=new $r,yp=new hl,Mp=new aa,Qf=[],tp=[],ep=new Float32Array(16),np=new Float32Array(9),ip=new Float32Array(4);function br(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Qf[s];if(r===void 0&&(r=new Float32Array(s),Qf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ac(i,t){let e=tp[t];e===void 0&&(e=new Int32Array(t),tp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function z_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function k_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2fv(this.addr,t),je(e,t)}}function H_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;i.uniform3fv(this.addr,t),je(e,t)}}function V_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4fv(this.addr,t),je(e,t)}}function G_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,n))return;ip.set(n),i.uniformMatrix2fv(this.addr,!1,ip),je(e,n)}}function W_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,n))return;np.set(n),i.uniformMatrix3fv(this.addr,!1,np),je(e,n)}}function X_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,n))return;ep.set(n),i.uniformMatrix4fv(this.addr,!1,ep),je(e,n)}}function q_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Y_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2iv(this.addr,t),je(e,t)}}function Z_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3iv(this.addr,t),je(e,t)}}function J_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4iv(this.addr,t),je(e,t)}}function $_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function K_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2uiv(this.addr,t),je(e,t)}}function j_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3uiv(this.addr,t),je(e,t)}}function Q_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4uiv(this.addr,t),je(e,t)}}function tv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mu.compareFunction=e.isReversedDepthBuffer()?Mc:yc,r=Mu):r=_p,e.setTexture2D(t||r,s)}function ev(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||yp,s)}function nv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Mp,s)}function iv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vp,s)}function sv(i){switch(i){case 5126:return z_;case 35664:return k_;case 35665:return H_;case 35666:return V_;case 35674:return G_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return Z_;case 35669:case 35673:return J_;case 5125:return $_;case 36294:return K_;case 36295:return j_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return tv;case 35679:case 36299:case 36307:return ev;case 35680:case 36300:case 36308:case 36293:return nv;case 36289:case 36303:case 36311:case 36292:return iv}}function rv(i,t){i.uniform1fv(this.addr,t)}function av(i,t){let e=br(t,this.size,2);i.uniform2fv(this.addr,e)}function ov(i,t){let e=br(t,this.size,3);i.uniform3fv(this.addr,e)}function lv(i,t){let e=br(t,this.size,4);i.uniform4fv(this.addr,e)}function cv(i,t){let e=br(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hv(i,t){let e=br(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function uv(i,t){let e=br(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function dv(i,t){i.uniform1iv(this.addr,t)}function fv(i,t){i.uniform2iv(this.addr,t)}function pv(i,t){i.uniform3iv(this.addr,t)}function mv(i,t){i.uniform4iv(this.addr,t)}function gv(i,t){i.uniform1uiv(this.addr,t)}function xv(i,t){i.uniform2uiv(this.addr,t)}function _v(i,t){i.uniform3uiv(this.addr,t)}function vv(i,t){i.uniform4uiv(this.addr,t)}function yv(i,t,e){let n=this.cache,s=t.length,r=Ac(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),je(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Mu:a=_p;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Mv(i,t,e){let n=this.cache,s=t.length,r=Ac(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||yp,r[a])}function Sv(i,t,e){let n=this.cache,s=t.length,r=Ac(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Mp,r[a])}function bv(i,t,e){let n=this.cache,s=t.length,r=Ac(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||vp,r[a])}function Ev(i){switch(i){case 5126:return rv;case 35664:return av;case 35665:return ov;case 35666:return lv;case 35674:return cv;case 35675:return hv;case 35676:return uv;case 5124:case 35670:return dv;case 35667:case 35671:return fv;case 35668:case 35672:return pv;case 35669:case 35673:return mv;case 5125:return gv;case 36294:return xv;case 36295:return _v;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return Mv;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return bv}}var Su=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sv(e.type)}},bu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ev(e.type)}},Eu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},vu=/(\w+)(\])?(\[|\.)?/g;function sp(i,t){i.seq.push(t),i.map[t.id]=t}function Tv(i,t,e){let n=i.name,s=n.length;for(vu.lastIndex=0;;){let r=vu.exec(n),a=vu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){sp(e,l===void 0?new Su(o,i,t):new bu(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Eu(o),sp(e,u)),e=u}}}var Mr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Tv(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function rp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var wv=37297,Av=0;function Rv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var ap=new jt;function Cv(i){le._getMatrix(ap,le.workingColorSpace,i);let t=`mat3( ${ap.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case qr:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function op(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Rv(i.getShaderSource(t),o)}else return r}function Pv(i,t){let e=Cv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Iv={[Aa]:"Linear",[Ra]:"Reinhard",[Ca]:"Cineon",[Ts]:"ACESFilmic",[Ia]:"AgX",[Da]:"Neutral",[Pa]:"Custom"};function Dv(i,t){let e=Iv[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var bc=new I;function Lv(){le.getLuminanceCoefficients(bc);let i=bc.x.toFixed(4),t=bc.y.toFixed(4),e=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xa).join(`
`)}function Uv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Xa(i){return i!==""}function lp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tu(i){return i.replace(Ov,zv)}var Bv=new Map;function zv(i,t){let e=re[t];if(e===void 0){let n=Bv.get(t);if(n!==void 0)e=re[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Tu(e)}var kv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hp(i){return i.replace(kv,Hv)}function Hv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function up(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Vv={[bs]:"SHADOWMAP_TYPE_PCF",[xr]:"SHADOWMAP_TYPE_VSM"};function Gv(i){return Vv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wv={[Qi]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE",[La]:"ENVMAP_TYPE_CUBE_UV"};function Xv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Wv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var qv={[ws]:"ENVMAP_MODE_REFRACTION"};function Yv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":qv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Zv={[tu]:"ENVMAP_BLENDING_MULTIPLY",[Ef]:"ENVMAP_BLENDING_MIX",[Tf]:"ENVMAP_BLENDING_ADD"};function Jv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Zv[i.combine]||"ENVMAP_BLENDING_NONE"}function $v(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Kv(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Gv(e),l=Xv(e),h=Yv(e),u=Jv(e),d=$v(e),f=Nv(e),p=Uv(r),v=s.createProgram(),g,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Xa).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Xa).join(`
`),m.length>0&&(m+=`
`)):(g=[up(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),m=[up(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?re.tonemapping_pars_fragment:"",e.toneMapping!==Qn?Dv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,Pv("linearToOutputTexel",e.outputColorSpace),Lv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xa).join(`
`)),a=Tu(a),a=lp(a,e),a=cp(a,e),o=Tu(o),o=lp(o,e),o=cp(o,e),a=hp(a),o=hp(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=b+g+a,y=b+m+o,S=rp(s,s.VERTEX_SHADER,w),E=rp(s,s.FRAGMENT_SHADER,y);s.attachShader(v,S),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(D){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(v)||"",k=s.getShaderInfoLog(S)||"",U=s.getShaderInfoLog(E)||"",B=N.trim(),q=k.trim(),X=U.trim(),rt=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,E);else{let j=op(s,S,"vertex"),tt=op(s,E,"fragment");qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+j+`
`+tt)}else B!==""?Gt("WebGLProgram: Program Info Log:",B):(q===""||X==="")&&(W=!1);W&&(D.diagnostics={runnable:rt,programLog:B,vertexShader:{log:q,prefix:g},fragmentShader:{log:X,prefix:m}})}s.deleteShader(S),s.deleteShader(E),x=new Mr(s,v),T=Fv(s,v)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(v,wv)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Av++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=E,this}var jv=0,wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Au(t),e.set(t,n)),n}},Au=class{constructor(t){this.id=jv++,this.code=t,this.usedTimes=0}};function Qv(i){return i===ns||i===za||i===ka}function ty(i,t,e,n,s,r){let a=new Kr,o=new wu,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,T,P,D,N,k){let U=D.fog,B=N.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,rt=t.get(x.envMap||q,X),W=rt&&rt.mapping===La?rt.image.height:null,j=f[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&Gt("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let tt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Pt=tt!==void 0?tt.length:0,Rt=0;B.morphAttributes.position!==void 0&&(Rt=1),B.morphAttributes.normal!==void 0&&(Rt=2),B.morphAttributes.color!==void 0&&(Rt=3);let ue,Qt,oe,Z;if(j){let Ie=gi[j];ue=Ie.vertexShader,Qt=Ie.fragmentShader}else{ue=x.vertexShader,Qt=x.fragmentShader;let Ie=o.getVertexShaderStage(x),_e=o.getFragmentShaderStage(x);o.update(x,Ie,_e),oe=Ie.id,Z=_e.id}let Q=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),Bt=N.isInstancedMesh===!0,wt=N.isBatchedMesh===!0,Wt=!!x.map,pe=!!x.matcap,nt=!!rt,lt=!!x.aoMap,ct=!!x.lightMap,ht=!!x.bumpMap&&x.wireframe===!1,pt=!!x.normalMap,Vt=!!x.displacementMap,zt=!!x.emissiveMap,Xt=!!x.metalnessMap,Yt=!!x.roughnessMap,L=x.anisotropy>0,fe=x.clearcoat>0,te=x.dispersion>0,A=x.retroreflectivity>0,_=x.iridescence>0,z=x.sheen>0,H=x.transmission>0,J=L&&!!x.anisotropyMap,ut=fe&&!!x.clearcoatMap,gt=fe&&!!x.clearcoatNormalMap,K=fe&&!!x.clearcoatRoughnessMap,it=_&&!!x.iridescenceMap,vt=_&&!!x.iridescenceThicknessMap,Ft=z&&!!x.sheenColorMap,_t=z&&!!x.sheenRoughnessMap,xt=!!x.specularMap,Dt=!!x.specularColorMap,kt=!!x.specularIntensityMap,Zt=H&&!!x.transmissionMap,O=H&&!!x.thicknessMap,yt=!!x.gradientMap,et=!!x.alphaMap,Mt=x.alphaTest>0,At=!!x.alphaHash,ot=!!x.extensions,Ht=Qn;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ht=i.toneMapping);let Ut={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:ue,fragmentShader:Qt,defines:x.defines,customVertexShaderID:oe,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:wt,batchingColor:wt&&N._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&N.instanceColor!==null,instancingMorph:Bt&&N.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Wt,matcap:pe,envMap:nt,envMapMode:nt&&rt.mapping,envMapCubeUVHeight:W,aoMap:lt,lightMap:ct,bumpMap:ht,normalMap:pt,displacementMap:Vt,emissiveMap:zt,normalMapObjectSpace:pt&&x.normalMapType===Cf,normalMapTangentSpace:pt&&x.normalMapType===Ha,packedNormalMap:pt&&x.normalMapType===Ha&&Qv(x.normalMap.format),metalnessMap:Xt,roughnessMap:Yt,anisotropy:L,anisotropyMap:J,clearcoat:fe,clearcoatMap:ut,clearcoatNormalMap:gt,clearcoatRoughnessMap:K,dispersion:te,retroreflection:A,iridescence:_,iridescenceMap:it,iridescenceThicknessMap:vt,sheen:z,sheenColorMap:Ft,sheenRoughnessMap:_t,specularMap:xt,specularColorMap:Dt,specularIntensityMap:kt,transmission:H,transmissionMap:Zt,thicknessMap:O,gradientMap:yt,opaque:x.transparent===!1&&x.blending===ji&&x.alphaToCoverage===!1,alphaMap:et,alphaTest:Mt,alphaHash:At,combine:x.combine,mapUv:Wt&&p(x.map.channel),aoMapUv:lt&&p(x.aoMap.channel),lightMapUv:ct&&p(x.lightMap.channel),bumpMapUv:ht&&p(x.bumpMap.channel),normalMapUv:pt&&p(x.normalMap.channel),displacementMapUv:Vt&&p(x.displacementMap.channel),emissiveMapUv:zt&&p(x.emissiveMap.channel),metalnessMapUv:Xt&&p(x.metalnessMap.channel),roughnessMapUv:Yt&&p(x.roughnessMap.channel),anisotropyMapUv:J&&p(x.anisotropyMap.channel),clearcoatMapUv:ut&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:gt&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:_t&&p(x.sheenRoughnessMap.channel),specularMapUv:xt&&p(x.specularMap.channel),specularColorMapUv:Dt&&p(x.specularColorMap.channel),specularIntensityMapUv:kt&&p(x.specularIntensityMap.channel),transmissionMapUv:Zt&&p(x.transmissionMap.channel),thicknessMapUv:O&&p(x.thicknessMap.channel),alphaMapUv:et&&p(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(pt||L),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(Wt||et),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&pt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:mt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Rt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Wt&&x.map.isVideoTexture===!0&&le.getTransfer(x.map.colorSpace)===xe,decodeVideoTextureEmissive:zt&&x.emissiveMap.isVideoTexture===!0&&le.getTransfer(x.emissiveMap.colorSpace)===xe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ln,flipSided:x.side===on,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ot&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&x.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function g(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(m(T,x),b(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function m(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function b(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){let T=f[x.type],P;if(T){let D=gi[T];P=Sn.clone(D.uniforms)}else P=x.uniforms;return P}function y(x,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new Kv(i,T,x,s),l.push(P),h.set(T,P)),P}function S(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:w,acquireProgram:y,releaseProgram:S,releaseShaderCache:E,programs:l,dispose:C}}function ey(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ny(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function dp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,v,g,m){let b=i[t];return b===void 0?(b={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},i[t]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=p,b.materialVariant=a(d),b.groupOrder=v,b.renderOrder=d.renderOrder,b.z=g,b.group=m),t++,b}function c(d,f,p,v,g,m,b){b.reversedDepth===!0&&(g=-g);let w=o(d,f,p,v,g,m);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):e.push(w)}function l(d,f,p,v,g,m){let b=o(d,f,p,v,g,m);p.transmission>0?n.unshift(b):p.transparent===!0?s.unshift(b):e.unshift(b)}function h(d,f){e.length>1&&e.sort(d||ny),n.length>1&&n.sort(f||dp),s.length>1&&s.sort(f||dp)}function u(){for(let d=t,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function iy(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new fp,i.set(n,[a])):s>=r.length?(a=new fp,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function sy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new ft};break;case"SpotLight":e={position:new I,direction:new I,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":e={color:new ft,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function ry(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ay=0;function oy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ly(i){let t=new sy,e=ry(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new $t,a=new $t;function o(l){let h=0,u=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,b=0,w=0,y=0,S=0,E=0,C=0,x=0,T=0,P=0;l.sort(oy);for(let N=0,k=l.length;N<k;N++){let U=l[N],B=U.color,q=U.intensity,X=U.distance,rt=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===ns?rt=U.shadow.map.texture:rt=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=B.r*q,u+=B.g*q,d+=B.b*q;else if(U.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(U.sh.coefficients[W],q);P++}else if(U.isSunLight){let W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let j=U.shadow,tt=e.get(U);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[p]=tt,n.sunShadowMap[p]=rt;let Pt=j.getViewportCount();for(let Rt=0;Rt<Pt;Rt++)n.sunShadowMatrix[v+Rt]=j.getMatrix(Rt),n.sunShadowCascade[v+Rt]=j._cascadeData[Rt];v+=Pt,p++}n.sun[f]=W,f++}else if(U.isDirectionalLight){let W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let j=U.shadow,tt=e.get(U);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.directionalShadow[g]=tt,n.directionalShadowMap[g]=rt,n.directionalShadowMatrix[g]=U.shadow.matrix,S++}n.directional[g]=W,g++}else if(U.isSpotLight){let W=t.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(B).multiplyScalar(q),W.distance=X,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,n.spot[b]=W;let j=U.shadow;if(U.map&&(n.spotLightMap[x]=U.map,x++,j.updateMatrices(U),U.castShadow&&T++),n.spotLightMatrix[b]=j.matrix,U.castShadow){let tt=e.get(U);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.spotShadow[b]=tt,n.spotShadowMap[b]=rt,C++}b++}else if(U.isRectAreaLight){let W=t.get(U);W.color.copy(B).multiplyScalar(q),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),n.rectArea[w]=W,w++}else if(U.isPointLight){let W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),W.distance=U.distance,W.decay=U.decay,U.castShadow){let j=U.shadow,tt=e.get(U);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,n.pointShadow[m]=tt,n.pointShadowMap[m]=rt,n.pointShadowMatrix[m]=U.shadow.matrix,E++}n.point[m]=W,m++}else if(U.isHemisphereLight){let W=t.get(U);W.skyColor.copy(U.color).multiplyScalar(q),W.groundColor.copy(U.groundColor).multiplyScalar(q),n.hemi[y]=W,y++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.sunLength!==f||D.directionalLength!==g||D.pointLength!==m||D.spotLength!==b||D.rectAreaLength!==w||D.hemiLength!==y||D.numSunShadows!==p||D.numDirectionalShadows!==S||D.numPointShadows!==E||D.numSpotShadows!==C||D.numSpotMaps!==x||D.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=g,n.spot.length=b,n.rectArea.length=w,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,D.sunLength=f,D.directionalLength=g,D.pointLength=m,D.spotLength=b,D.rectAreaLength=w,D.hemiLength=y,D.numSunShadows=p,D.numDirectionalShadows=S,D.numPointShadows=E,D.numSpotShadows=C,D.numSpotMaps=x,D.numLightProbes=P,n.version=ay++)}function c(l,h){let u=0,d=0,f=0,p=0,v=0,g=0,m=h.matrixWorldInverse;for(let b=0,w=l.length;b<w;b++){let y=l[b];if(y.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),u++}else if(y.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(y.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function pp(i){let t=new ly(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function c(d){s.push(d)}function l(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function cy(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new pp(i),t.set(s,[o])):r>=a.length?(o=new pp(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var hy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uy=`uniform sampler2D shadow_pass;
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
}`,dy=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],fy=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],mp=new $t,Wa=new I,yu=new I;function py(i,t,e){let n=new hr,s=new at,r=new at,a=new Se,o=new vl,c=new yl,l={},h=e.maxTextureSize,u={[Ki]:on,[on]:Ki,[ln]:ln},d=new de({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:hy,fragmentShader:uy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new we;p.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new St(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bs;let m=this.type;this.render=function(E,C,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===cf&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bs);let T=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(We),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let k=m!==this.type;k&&C.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(B=>B.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,B=E.length;U<B;U++){let q=E[U],X=q.shadow;if(X===void 0){Gt("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let rt=X.getFrameExtents();s.multiply(rt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,X.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=W,X.map===null||k===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===xr){if(q.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Oe(s.x,s.y,{format:ns,type:ke,minFilter:an,magFilter:an,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new fi(s.x,s.y,Ln),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=ci,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ge,X.map.depthTexture.magFilter=Ge}else q.isPointLight?(X.map=new Ec(s.x),X.map.depthTexture=new dl(s.x,ti)):(X.map=new Oe(s.x,s.y),X.map.depthTexture=new fi(s.x,s.y,ti)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=ci,this.type===bs?(X.map.depthTexture.compareFunction=W?Mc:yc,X.map.depthTexture.minFilter=an,X.map.depthTexture.magFilter=an):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ge,X.map.depthTexture.magFilter=Ge);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let j=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,x);for(let tt=0;tt<j;tt++){let Pt=X.getCamera(tt);if(q.isPointLight){let Rt=X.camera,ue=X.matrix,Qt=q.distance||Rt.far;Qt!==Rt.far&&(Rt.far=Qt,Rt.updateProjectionMatrix()),Wa.setFromMatrixPosition(q.matrixWorld),Rt.position.copy(Wa),yu.copy(Rt.position),yu.add(dy[tt]),Rt.up.copy(fy[tt]),Rt.lookAt(yu),Rt.updateMatrixWorld(),ue.makeTranslation(-Wa.x,-Wa.y,-Wa.z),mp.multiplyMatrices(Rt.projectionMatrix,Rt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(mp,Rt.coordinateSystem,Rt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,tt),i.clear();else{tt===0&&(i.setRenderTarget(X.map),i.clear());let Rt=X.getViewport(tt);a.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),N.viewport(a)}n=X.getFrustum(tt),y(C,x,Pt,q,this.type)}X.isPointLightShadow!==!0&&this.type===xr&&b(X,x),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,P,D)};function b(E,C){let x=t.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Oe(s.x,s.y,{format:ns,type:ke}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,x,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,x,f,v,null)}function w(E,C,x,T){let P=null,D=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)P=D;else if(P=x.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let N=P.uuid,k=C.uuid,U=l[N];U===void 0&&(U={},l[N]=U);let B=U[k];B===void 0&&(B=P.clone(),U[k]=B,C.addEventListener("dispose",S)),P=B}if(P.visible=C.visible,P.wireframe=C.wireframe,T===xr?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:u[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let N=i.properties.get(P);N.light=x}return P}function y(E,C,x,T,P){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===xr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let k=t.update(E),U=E.material;if(Array.isArray(U)){let B=k.groups;for(let q=0,X=B.length;q<X;q++){let rt=B[q],W=U[rt.materialIndex];if(W&&W.visible){let j=w(E,W,T,P);E.onBeforeShadow(i,E,C,x,k,j,rt),i.renderBufferDirect(x,null,k,j,E,rt),E.onAfterShadow(i,E,C,x,k,j,rt)}}}else if(U.visible){let B=w(E,U,T,P);E.onBeforeShadow(i,E,C,x,k,B,null),i.renderBufferDirect(x,null,k,B,E,null),E.onAfterShadow(i,E,C,x,k,B,null)}}let N=E.children;for(let k=0,U=N.length;k<U;k++)y(N[k],C,x,T,P)}function S(E){E.target.removeEventListener("dispose",S);for(let x in l){let T=l[x],P=E.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function my(i,t){function e(){let O=!1,yt=new Se,et=null,Mt=new Se(0,0,0,0);return{setMask:function(At){et!==At&&!O&&(i.colorMask(At,At,At,At),et=At)},setLocked:function(At){O=At},setClear:function(At,ot,Ht,Ut,Ie){Ie===!0&&(At*=Ut,ot*=Ut,Ht*=Ut),yt.set(At,ot,Ht,Ut),Mt.equals(yt)===!1&&(i.clearColor(At,ot,Ht,Ut),Mt.copy(yt))},reset:function(){O=!1,et=null,Mt.set(-1,0,0,0)}}}function n(){let O=!1,yt=!1,et=null,Mt=null,At=null;return{setReversed:function(ot){if(yt!==ot){let Ht=t.get("EXT_clip_control");ot?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),yt=ot;let Ut=At;At=null,this.setClear(Ut)}},getReversed:function(){return yt},setTest:function(ot){ot?Q(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(ot){et!==ot&&!O&&(i.depthMask(ot),et=ot)},setFunc:function(ot){if(yt&&(ot=kf[ot]),Mt!==ot){switch(ot){case Qo:i.depthFunc(i.NEVER);break;case tl:i.depthFunc(i.ALWAYS);break;case el:i.depthFunc(i.LESS);break;case er:i.depthFunc(i.LEQUAL);break;case nl:i.depthFunc(i.EQUAL);break;case il:i.depthFunc(i.GEQUAL);break;case sl:i.depthFunc(i.GREATER);break;case rl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=ot}},setLocked:function(ot){O=ot},setClear:function(ot){At!==ot&&(At=ot,yt&&(ot=1-ot),i.clearDepth(ot))},reset:function(){O=!1,et=null,Mt=null,At=null,yt=!1}}}function s(){let O=!1,yt=null,et=null,Mt=null,At=null,ot=null,Ht=null,Ut=null,Ie=null;return{setTest:function(_e){O||(_e?Q(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(_e){yt!==_e&&!O&&(i.stencilMask(_e),yt=_e)},setFunc:function(_e,Vn,si){(et!==_e||Mt!==Vn||At!==si)&&(i.stencilFunc(_e,Vn,si),et=_e,Mt=Vn,At=si)},setOp:function(_e,Vn,si){(ot!==_e||Ht!==Vn||Ut!==si)&&(i.stencilOp(_e,Vn,si),ot=_e,Ht=Vn,Ut=si)},setLocked:function(_e){O=_e},setClear:function(_e){Ie!==_e&&(i.clearStencil(_e),Ie=_e)},reset:function(){O=!1,yt=null,et=null,Mt=null,At=null,ot=null,Ht=null,Ut=null,Ie=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],v=null,g=!1,m=null,b=null,w=null,y=null,S=null,E=null,C=null,x=new ft(0,0,0),T=0,P=!1,D=null,N=null,k=null,U=null,B=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,rt=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=rt>=1):W.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=rt>=2);let j=null,tt={},Pt=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),ue=new Se().fromArray(Pt),Qt=new Se().fromArray(Rt);function oe(O,yt,et,Mt){let At=new Uint8Array(4),ot=i.createTexture();i.bindTexture(O,ot),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<et;Ht++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(yt+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return ot}let Z={};Z[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(er),ht(!1),pt(Jh),Q(i.CULL_FACE),lt(We);function Q(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function mt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Bt(O,yt){return d[O]!==yt?(i.bindFramebuffer(O,yt),d[O]=yt,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=yt),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function wt(O,yt){let et=p,Mt=!1;if(O){et=f.get(yt),et===void 0&&(et=[],f.set(yt,et));let At=O.textures;if(et.length!==At.length||et[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Ht=At.length;ot<Ht;ot++)et[ot]=i.COLOR_ATTACHMENT0+ot;et.length=At.length,Mt=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(et)}function Wt(O){return v!==O?(i.useProgram(O),v=O,!0):!1}let pe={[kn]:i.FUNC_ADD,[hf]:i.FUNC_SUBTRACT,[uf]:i.FUNC_REVERSE_SUBTRACT};pe[df]=i.MIN,pe[ff]=i.MAX;let nt={[Es]:i.ZERO,[pf]:i.ONE,[mf]:i.SRC_COLOR,[jh]:i.SRC_ALPHA,[vf]:i.SRC_ALPHA_SATURATE,[wa]:i.DST_COLOR,[Ta]:i.DST_ALPHA,[gf]:i.ONE_MINUS_SRC_COLOR,[Qh]:i.ONE_MINUS_SRC_ALPHA,[_f]:i.ONE_MINUS_DST_COLOR,[xf]:i.ONE_MINUS_DST_ALPHA,[yf]:i.CONSTANT_COLOR,[Mf]:i.ONE_MINUS_CONSTANT_COLOR,[Sf]:i.CONSTANT_ALPHA,[bf]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(O,yt,et,Mt,At,ot,Ht,Ut,Ie,_e){if(O===We){g===!0&&(mt(i.BLEND),g=!1);return}if(g===!1&&(Q(i.BLEND),g=!0),O!==Ll){if(O!==m||_e!==P){if((b!==kn||S!==kn)&&(i.blendEquation(i.FUNC_ADD),b=kn,S=kn),_e)switch(O){case ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $e:i.blendFunc(i.ONE,i.ONE);break;case $h:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qt("WebGLState: Invalid blending: ",O);break}else switch(O){case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $e:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $h:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kh:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",O);break}w=null,y=null,E=null,C=null,x.set(0,0,0),T=0,m=O,P=_e}return}At=At||yt,ot=ot||et,Ht=Ht||Mt,(yt!==b||At!==S)&&(i.blendEquationSeparate(pe[yt],pe[At]),b=yt,S=At),(et!==w||Mt!==y||ot!==E||Ht!==C)&&(i.blendFuncSeparate(nt[et],nt[Mt],nt[ot],nt[Ht]),w=et,y=Mt,E=ot,C=Ht),(Ut.equals(x)===!1||Ie!==T)&&(i.blendColor(Ut.r,Ut.g,Ut.b,Ie),x.copy(Ut),T=Ie),m=O,P=!1}function ct(O,yt){O.side===ln?mt(i.CULL_FACE):Q(i.CULL_FACE);let et=O.side===on;yt&&(et=!et),ht(et),O.blending===ji&&O.transparent===!1?lt(We):lt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let Mt=O.stencilWrite;o.setTest(Mt),Mt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),zt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(O){D!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),D=O)}function pt(O){O!==of?(Q(i.CULL_FACE),O!==N&&(O===Jh?i.cullFace(i.BACK):O===lf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),N=O}function Vt(O){O!==k&&(X&&i.lineWidth(O),k=O)}function zt(O,yt,et){O?(Q(i.POLYGON_OFFSET_FILL),(U!==yt||B!==et)&&(U=yt,B=et,a.getReversed()&&(yt=-yt),i.polygonOffset(yt,et))):mt(i.POLYGON_OFFSET_FILL)}function Xt(O){O?Q(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function Yt(O){O===void 0&&(O=i.TEXTURE0+q-1),j!==O&&(i.activeTexture(O),j=O)}function L(O,yt,et){et===void 0&&(j===null?et=i.TEXTURE0+q-1:et=j);let Mt=tt[et];Mt===void 0&&(Mt={type:void 0,texture:void 0},tt[et]=Mt),(Mt.type!==O||Mt.texture!==yt)&&(j!==et&&(i.activeTexture(et),j=et),i.bindTexture(O,yt||Z[O]),Mt.type=O,Mt.texture=yt)}function fe(){let O=tt[j];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function te(){try{i.compressedTexImage2D(...arguments)}catch(O){qt("WebGLState:",O)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(O){qt("WebGLState:",O)}}function _(){try{i.texSubImage2D(...arguments)}catch(O){qt("WebGLState:",O)}}function z(){try{i.texSubImage3D(...arguments)}catch(O){qt("WebGLState:",O)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(O){qt("WebGLState:",O)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(O){qt("WebGLState:",O)}}function ut(){try{i.texStorage2D(...arguments)}catch(O){qt("WebGLState:",O)}}function gt(){try{i.texStorage3D(...arguments)}catch(O){qt("WebGLState:",O)}}function K(){try{i.texImage2D(...arguments)}catch(O){qt("WebGLState:",O)}}function it(){try{i.texImage3D(...arguments)}catch(O){qt("WebGLState:",O)}}function vt(O){return u[O]!==void 0?u[O]:i.getParameter(O)}function Ft(O,yt){u[O]!==yt&&(i.pixelStorei(O,yt),u[O]=yt)}function _t(O){ue.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ue.copy(O))}function xt(O){Qt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Qt.copy(O))}function Dt(O,yt){let et=l.get(yt);et===void 0&&(et=new WeakMap,l.set(yt,et));let Mt=et.get(O);Mt===void 0&&(Mt=i.getUniformBlockIndex(yt,O.name),et.set(O,Mt))}function kt(O,yt){let Mt=l.get(yt).get(O);c.get(yt)!==Mt&&(i.uniformBlockBinding(yt,Mt,O.__bindingPointIndex),c.set(yt,Mt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,tt={},d={},f=new WeakMap,p=[],v=null,g=!1,m=null,b=null,w=null,y=null,S=null,E=null,C=null,x=new ft(0,0,0),T=0,P=!1,D=null,N=null,k=null,U=null,B=null,ue.set(0,0,i.canvas.width,i.canvas.height),Qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:mt,bindFramebuffer:Bt,drawBuffers:wt,useProgram:Wt,setBlending:lt,setMaterial:ct,setFlipSided:ht,setCullFace:pt,setLineWidth:Vt,setPolygonOffset:zt,setScissorTest:Xt,activeTexture:Yt,bindTexture:L,unbindTexture:fe,compressedTexImage2D:te,compressedTexImage3D:A,texImage2D:K,texImage3D:it,pixelStorei:Ft,getParameter:vt,updateUBOMapping:Dt,uniformBlockBinding:kt,texStorage2D:ut,texStorage3D:gt,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:H,compressedTexSubImage3D:J,scissor:_t,viewport:xt,reset:Zt}}function gy(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,h=new WeakMap,u=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,_){return p?new OffscreenCanvas(A,_):Yr("canvas")}function g(A,_,z){let H=1,J=te(A);if((J.width>z||J.height>z)&&(H=z/Math.max(J.width,J.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ut=Math.floor(H*J.width),gt=Math.floor(H*J.height);d===void 0&&(d=v(ut,gt));let K=_?v(ut,gt):d;return K.width=ut,K.height=gt,K.getContext("2d").drawImage(A,0,0,ut,gt),Gt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ut+"x"+gt+")."),K}else return"data"in A&&Gt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function b(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,_,z,H,J,ut=!1){if(A!==null){if(i[A]!==void 0)return i[A];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let gt;H&&(gt=t.get("EXT_texture_norm16"),gt||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=_;if(_===i.RED&&(z===i.FLOAT&&(K=i.R32F),z===i.HALF_FLOAT&&(K=i.R16F),z===i.UNSIGNED_BYTE&&(K=i.R8),z===i.UNSIGNED_SHORT&&gt&&(K=gt.R16_EXT),z===i.SHORT&&gt&&(K=gt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.R8UI),z===i.UNSIGNED_SHORT&&(K=i.R16UI),z===i.UNSIGNED_INT&&(K=i.R32UI),z===i.BYTE&&(K=i.R8I),z===i.SHORT&&(K=i.R16I),z===i.INT&&(K=i.R32I)),_===i.RG&&(z===i.FLOAT&&(K=i.RG32F),z===i.HALF_FLOAT&&(K=i.RG16F),z===i.UNSIGNED_BYTE&&(K=i.RG8),z===i.UNSIGNED_SHORT&&gt&&(K=gt.RG16_EXT),z===i.SHORT&&gt&&(K=gt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RG8UI),z===i.UNSIGNED_SHORT&&(K=i.RG16UI),z===i.UNSIGNED_INT&&(K=i.RG32UI),z===i.BYTE&&(K=i.RG8I),z===i.SHORT&&(K=i.RG16I),z===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGB8UI),z===i.UNSIGNED_SHORT&&(K=i.RGB16UI),z===i.UNSIGNED_INT&&(K=i.RGB32UI),z===i.BYTE&&(K=i.RGB8I),z===i.SHORT&&(K=i.RGB16I),z===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),z===i.UNSIGNED_INT&&(K=i.RGBA32UI),z===i.BYTE&&(K=i.RGBA8I),z===i.SHORT&&(K=i.RGBA16I),z===i.INT&&(K=i.RGBA32I)),_===i.RGB&&(z===i.UNSIGNED_SHORT&&gt&&(K=gt.RGB16_EXT),z===i.SHORT&&gt&&(K=gt.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),_===i.RGBA){let it=ut?qr:le.getTransfer(J);z===i.FLOAT&&(K=i.RGBA32F),z===i.HALF_FLOAT&&(K=i.RGBA16F),z===i.UNSIGNED_BYTE&&(K=it===xe?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&gt&&(K=gt.RGBA16_EXT),z===i.SHORT&&gt&&(K=gt.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function S(A,_){let z;return A?_===null||_===ti||_===es?z=i.DEPTH24_STENCIL8:_===Ln?z=i.DEPTH32F_STENCIL8:_===_r&&(z=i.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ti||_===es?z=i.DEPTH_COMPONENT24:_===Ln?z=i.DEPTH_COMPONENT32F:_===_r&&(z=i.DEPTH_COMPONENT16),z}function E(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ge&&A.minFilter!==an?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function C(A){let _=A.target;_.removeEventListener("dispose",C),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&u.delete(_)}function x(A){let _=A.target;_.removeEventListener("dispose",x),D(_)}function T(A){let _=n.get(A);if(_.__webglInit===void 0)return;let z=A.source,H=f.get(z);if(H){let J=H[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(A),Object.keys(H).length===0&&f.delete(z)}n.remove(A)}function P(A){let _=n.get(A);i.deleteTexture(_.__webglTexture);let z=A.source,H=f.get(z);delete H[_.__cacheKey],a.memory.textures--}function D(A){let _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let J=0;J<_.__webglFramebuffer[H].length;J++)i.deleteFramebuffer(_.__webglFramebuffer[H][J]);else i.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)i.deleteFramebuffer(_.__webglFramebuffer[H]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=A.textures;for(let H=0,J=z.length;H<J;H++){let ut=n.get(z[H]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(z[H])}n.remove(A)}let N=0;function k(){N=0}function U(){return N}function B(A){N=A}function q(){let A=N;return A>=s.maxTextures&&Gt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,A}function X(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function rt(A,_){let z=n.get(A);if(A.isVideoTexture&&L(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let H=A.image;if(H===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(z,A,_);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function W(A,_){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){mt(z,A,_);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function j(A,_){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){mt(z,A,_);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function tt(A,_){let z=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){Bt(z,A,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}let Pt={[wn]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[al]:i.MIRRORED_REPEAT},Rt={[Ge]:i.NEAREST,[Af]:i.NEAREST_MIPMAP_NEAREST,[Na]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Fl]:i.LINEAR_MIPMAP_NEAREST,[ts]:i.LINEAR_MIPMAP_LINEAR},ue={[If]:i.NEVER,[Ff]:i.ALWAYS,[Df]:i.LESS,[yc]:i.LEQUAL,[Lf]:i.EQUAL,[Mc]:i.GEQUAL,[Nf]:i.GREATER,[Uf]:i.NOTEQUAL};function Qt(A,_){if(_.type===Ln&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===an||_.magFilter===Fl||_.magFilter===Na||_.magFilter===ts||_.minFilter===an||_.minFilter===Fl||_.minFilter===Na||_.minFilter===ts)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Pt[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Pt[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Pt[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Rt[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Rt[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ue[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ge||_.minFilter!==Na&&_.minFilter!==ts||_.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function oe(A,_){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",C));let H=_.source,J=f.get(H);J===void 0&&(J={},f.set(H,J));let ut=X(_);if(ut!==A.__cacheKey){J[ut]===void 0&&(J[ut]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[ut].usedTimes++;let gt=J[A.__cacheKey];gt!==void 0&&(J[A.__cacheKey].usedTimes--,gt.usedTimes===0&&P(_)),A.__cacheKey=ut,A.__webglTexture=J[ut].texture}return z}function Z(A,_,z){return Math.floor(Math.floor(A/z)/_)}function Q(A,_,z,H){let ut=A.updateRanges;if(ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,z,H,_.data);else{ut.sort((Ft,_t)=>Ft.start-_t.start);let gt=0;for(let Ft=1;Ft<ut.length;Ft++){let _t=ut[gt],xt=ut[Ft],Dt=_t.start+_t.count,kt=Z(xt.start,_.width,4),Zt=Z(_t.start,_.width,4);xt.start<=Dt+1&&kt===Zt&&Z(xt.start+xt.count-1,_.width,4)===kt?_t.count=Math.max(_t.count,xt.start+xt.count-_t.start):(++gt,ut[gt]=xt)}ut.length=gt+1;let K=e.getParameter(i.UNPACK_ROW_LENGTH),it=e.getParameter(i.UNPACK_SKIP_PIXELS),vt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ft=0,_t=ut.length;Ft<_t;Ft++){let xt=ut[Ft],Dt=Math.floor(xt.start/4),kt=Math.ceil(xt.count/4),Zt=Dt%_.width,O=Math.floor(Dt/_.width),yt=kt,et=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Zt,O,yt,et,z,H,_.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,it),e.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function mt(A,_,z){let H=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=i.TEXTURE_3D);let J=oe(A,_),ut=_.source;e.bindTexture(H,A.__webglTexture,i.TEXTURE0+z);let gt=n.get(ut);if(ut.version!==gt.__version||J===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let et=le.getPrimaries(le.workingColorSpace),Mt=_.colorSpace===Li?null:le.getPrimaries(_.colorSpace),At=_.colorSpace===Li||et===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let it=g(_.image,!1,s.maxTextureSize);it=fe(_,it);let vt=r.convert(_.format,_.colorSpace),Ft=r.convert(_.type),_t=y(_.internalFormat,vt,Ft,_.normalized,_.colorSpace,_.isVideoTexture);Qt(H,_);let xt,Dt=_.mipmaps,kt=_.isVideoTexture!==!0,Zt=gt.__version===void 0||J===!0,O=ut.dataReady,yt=E(_,it);if(_.isDepthTexture)_t=S(_.format===pi,_.type),Zt&&(kt?e.texStorage2D(i.TEXTURE_2D,1,_t,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,_t,it.width,it.height,0,vt,Ft,null));else if(_.isDataTexture)if(Dt.length>0){kt&&Zt&&e.texStorage2D(i.TEXTURE_2D,yt,_t,Dt[0].width,Dt[0].height);for(let et=0,Mt=Dt.length;et<Mt;et++)xt=Dt[et],kt?O&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,xt.width,xt.height,vt,Ft,xt.data):e.texImage2D(i.TEXTURE_2D,et,_t,xt.width,xt.height,0,vt,Ft,xt.data);_.generateMipmaps=!1}else kt?(Zt&&e.texStorage2D(i.TEXTURE_2D,yt,_t,it.width,it.height),O&&Q(_,it,vt,Ft)):e.texImage2D(i.TEXTURE_2D,0,_t,it.width,it.height,0,vt,Ft,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){kt&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,_t,Dt[0].width,Dt[0].height,it.depth);for(let et=0,Mt=Dt.length;et<Mt;et++)if(xt=Dt[et],_.format!==Mn)if(vt!==null)if(kt){if(O)if(_.layerUpdates.size>0){let At=pu(xt.width,xt.height,_.format,_.type);for(let ot of _.layerUpdates){let Ht=xt.data.subarray(ot*At/xt.data.BYTES_PER_ELEMENT,(ot+1)*At/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,ot,xt.width,xt.height,1,vt,Ht)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,xt.width,xt.height,it.depth,vt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,_t,xt.width,xt.height,it.depth,0,xt.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,xt.width,xt.height,it.depth,vt,Ft,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,_t,xt.width,xt.height,it.depth,0,vt,Ft,xt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{kt&&Zt&&e.texStorage2D(i.TEXTURE_2D,yt,_t,Dt[0].width,Dt[0].height);for(let et=0,Mt=Dt.length;et<Mt;et++)xt=Dt[et],_.format!==Mn?vt!==null?kt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,xt.width,xt.height,vt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,et,_t,xt.width,xt.height,0,xt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?O&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,xt.width,xt.height,vt,Ft,xt.data):e.texImage2D(i.TEXTURE_2D,et,_t,xt.width,xt.height,0,vt,Ft,xt.data)}else if(_.isDataArrayTexture)if(kt){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,_t,it.width,it.height,it.depth),O)if(_.layerUpdates.size>0){let et=pu(it.width,it.height,_.format,_.type);for(let Mt of _.layerUpdates){let At=it.data.subarray(Mt*et/it.data.BYTES_PER_ELEMENT,(Mt+1)*et/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Mt,it.width,it.height,1,vt,Ft,At)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,vt,Ft,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,it.width,it.height,it.depth,0,vt,Ft,it.data);else if(_.isData3DTexture)kt?(Zt&&e.texStorage3D(i.TEXTURE_3D,yt,_t,it.width,it.height,it.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,vt,Ft,it.data)):e.texImage3D(i.TEXTURE_3D,0,_t,it.width,it.height,it.depth,0,vt,Ft,it.data);else if(_.isFramebufferTexture){if(Zt)if(kt)e.texStorage2D(i.TEXTURE_2D,yt,_t,it.width,it.height);else{let et=it.width,Mt=it.height;for(let At=0;At<yt;At++)e.texImage2D(i.TEXTURE_2D,At,_t,et,Mt,0,vt,Ft,null),et>>=1,Mt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let et=i.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),it.parentNode!==et){et.appendChild(it),u.add(_),et.onpaint=Mt=>{let At=Mt.changedElements;for(let ot of u)At.includes(ot.image)&&(ot.needsUpdate=!0)},et.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,it);else{let At=i.RGBA,ot=i.RGBA,Ht=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,At,ot,Ht,it)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(kt&&Zt){let et=te(Dt[0]);e.texStorage2D(i.TEXTURE_2D,yt,_t,et.width,et.height)}for(let et=0,Mt=Dt.length;et<Mt;et++)xt=Dt[et],kt?O&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,vt,Ft,xt):e.texImage2D(i.TEXTURE_2D,et,_t,vt,Ft,xt);_.generateMipmaps=!1}else if(kt){if(Zt){let et=te(it);e.texStorage2D(i.TEXTURE_2D,yt,_t,et.width,et.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Ft,it)}else e.texImage2D(i.TEXTURE_2D,0,_t,vt,Ft,it);m(_)&&b(H),gt.__version=ut.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Bt(A,_,z){if(_.image.length!==6)return;let H=oe(A,_),J=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);let ut=n.get(J);if(J.version!==ut.__version||H===!0){e.activeTexture(i.TEXTURE0+z);let gt=le.getPrimaries(le.workingColorSpace),K=_.colorSpace===Li?null:le.getPrimaries(_.colorSpace),it=_.colorSpace===Li||gt===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let vt=_.isCompressedTexture||_.image[0].isCompressedTexture,Ft=_.image[0]&&_.image[0].isDataTexture,_t=[];for(let ot=0;ot<6;ot++)!vt&&!Ft?_t[ot]=g(_.image[ot],!0,s.maxCubemapSize):_t[ot]=Ft?_.image[ot].image:_.image[ot],_t[ot]=fe(_,_t[ot]);let xt=_t[0],Dt=r.convert(_.format,_.colorSpace),kt=r.convert(_.type),Zt=y(_.internalFormat,Dt,kt,_.normalized,_.colorSpace),O=_.isVideoTexture!==!0,yt=ut.__version===void 0||H===!0,et=J.dataReady,Mt=E(_,xt);Qt(i.TEXTURE_CUBE_MAP,_);let At;if(vt){O&&yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Zt,xt.width,xt.height);for(let ot=0;ot<6;ot++){At=_t[ot].mipmaps;for(let Ht=0;Ht<At.length;Ht++){let Ut=At[Ht];_.format!==Mn?Dt!==null?O?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht,0,0,Ut.width,Ut.height,Dt,Ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht,Zt,Ut.width,Ut.height,0,Ut.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht,0,0,Ut.width,Ut.height,Dt,kt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht,Zt,Ut.width,Ut.height,0,Dt,kt,Ut.data)}}}else{if(At=_.mipmaps,O&&yt){At.length>0&&Mt++;let ot=te(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Zt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(Ft){O?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,_t[ot].width,_t[ot].height,Dt,kt,_t[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Zt,_t[ot].width,_t[ot].height,0,Dt,kt,_t[ot].data);for(let Ht=0;Ht<At.length;Ht++){let Ie=At[Ht].image[ot].image;O?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht+1,0,0,Ie.width,Ie.height,Dt,kt,Ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht+1,Zt,Ie.width,Ie.height,0,Dt,kt,Ie.data)}}else{O?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Dt,kt,_t[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Zt,Dt,kt,_t[ot]);for(let Ht=0;Ht<At.length;Ht++){let Ut=At[Ht];O?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht+1,0,0,Dt,kt,Ut.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht+1,Zt,Dt,kt,Ut.image[ot])}}}m(_)&&b(i.TEXTURE_CUBE_MAP),ut.__version=J.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function wt(A,_,z,H,J,ut){let gt=r.convert(z.format,z.colorSpace),K=r.convert(z.type),it=y(z.internalFormat,gt,K,z.normalized,z.colorSpace),vt=n.get(_),Ft=n.get(z);if(Ft.__renderTarget=_,!vt.__hasExternalTextures){let _t=Math.max(1,_.width>>ut),xt=Math.max(1,_.height>>ut);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,ut,it,_t,xt,_.depth,0,gt,K,null):e.texImage2D(J,ut,it,_t,xt,0,gt,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Yt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,J,Ft.__webglTexture,0,Xt(_)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,J,Ft.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(A,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){let H=_.depthTexture,J=H&&H.isDepthTexture?H.type:null,ut=S(_.stencilBuffer,J),gt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Yt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt(_),ut,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt(_),ut,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ut,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,A)}else{let H=_.textures;for(let J=0;J<H.length;J++){let ut=H[J],gt=r.convert(ut.format,ut.colorSpace),K=r.convert(ut.type),it=y(ut.internalFormat,gt,K,ut.normalized,ut.colorSpace);Yt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt(_),it,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt(_),it,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,it,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(A,_,z){let H=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,_.depthTexture);let vt=r.convert(_.depthTexture.format),Ft=r.convert(_.depthTexture.type),_t;_.depthTexture.format===ci?_t=i.DEPTH_COMPONENT24:_.depthTexture.format===pi&&(_t=i.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,_t,_.width,_.height,0,vt,Ft,null)}}else rt(_.depthTexture,0);let ut=J.__webglTexture,gt=Xt(_),K=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,it=_.depthTexture.format===pi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===ci)Yt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,K,ut,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,it,K,ut,0);else if(_.depthTexture.format===pi)Yt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,K,ut,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,it,K,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(A){let _=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let H=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){let J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",J)};H.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=H}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let H=0;H<6;H++)pe(_.__webglFramebuffer[H],A,H);else{let H=A.texture.mipmaps;H&&H.length>0?pe(_.__webglFramebuffer[0],A,0):pe(_.__webglFramebuffer,A,0)}else if(z){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=i.createRenderbuffer(),Wt(_.__webglDepthbuffer[H],A,!1);else{let J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=_.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ut)}}else{let H=A.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Wt(_.__webglDepthbuffer,A,!1);else{let J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ut)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(A,_,z){let H=n.get(A);_!==void 0&&wt(H.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&nt(A)}function ct(A){let _=A.texture,z=n.get(A),H=n.get(_);A.addEventListener("dispose",x);let J=A.textures,ut=A.isWebGLCubeRenderTarget===!0,gt=J.length>1;if(gt||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=_.version,a.memory.textures++),ut){z.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[K]=[];for(let it=0;it<_.mipmaps.length;it++)z.__webglFramebuffer[K][it]=i.createFramebuffer()}else z.__webglFramebuffer[K]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)z.__webglFramebuffer[K]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(gt)for(let K=0,it=J.length;K<it;K++){let vt=n.get(J[K]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Yt(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let K=0;K<J.length;K++){let it=J[K];z.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[K]);let vt=r.convert(it.format,it.colorSpace),Ft=r.convert(it.type),_t=y(it.internalFormat,vt,Ft,it.normalized,it.colorSpace,A.isXRRenderTarget===!0),xt=Xt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,_t,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,z.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Wt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let it=0;it<_.mipmaps.length;it++)wt(z.__webglFramebuffer[K][it],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,it);else wt(z.__webglFramebuffer[K],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(_)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let K=0,it=J.length;K<it;K++){let vt=J[K],Ft=n.get(vt),_t=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(_t=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,Ft.__webglTexture),Qt(_t,vt),wt(z.__webglFramebuffer,A,vt,i.COLOR_ATTACHMENT0+K,_t,0),m(vt)&&b(_t)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,H.__webglTexture),Qt(K,_),_.mipmaps&&_.mipmaps.length>0)for(let it=0;it<_.mipmaps.length;it++)wt(z.__webglFramebuffer[it],A,_,i.COLOR_ATTACHMENT0,K,it);else wt(z.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,K,0);m(_)&&b(K),e.unbindTexture()}A.depthBuffer&&nt(A)}function ht(A){let _=A.textures;for(let z=0,H=_.length;z<H;z++){let J=_[z];if(m(J)){let ut=w(A),gt=n.get(J).__webglTexture;e.bindTexture(ut,gt),b(ut),e.unbindTexture()}}}let pt=[],Vt=[];function zt(A){if(A.samples>0){if(Yt(A)===!1){let _=A.textures,z=A.width,H=A.height,J=i.COLOR_BUFFER_BIT,ut=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(A),K=_.length>1;if(K)for(let vt=0;vt<_.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);let it=A.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let vt=0;vt<_.length;vt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[vt]);let Ft=n.get(_[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,z,H,0,0,z,H,J,i.NEAREST),c===!0&&(pt.length=0,Vt.length=0,pt.push(i.COLOR_ATTACHMENT0+vt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(pt.push(ut),Vt.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let vt=0;vt<_.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[vt]);let Ft=n.get(_[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Xt(A){return Math.min(s.maxSamples,A.samples)}function Yt(A){let _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(A){let _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function fe(A,_){let z=A.colorSpace,H=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Xr&&z!==Li&&(le.getTransfer(z)===xe?(H!==Mn||J!==fn)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",z)),_}function te(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=k,this.getTextureUnits=U,this.setTextureUnits=B,this.setTexture2D=rt,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=tt,this.rebindTextures=lt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function xy(i,t){function e(n,s=Li){let r,a=le.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===Bl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===su)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ru)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nu)return i.BYTE;if(n===iu)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===Ol)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===ke)return i.HALF_FLOAT;if(n===au)return i.ALPHA;if(n===ou)return i.RGB;if(n===Mn)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===pi)return i.DEPTH_STENCIL;if(n===kl)return i.RED;if(n===Hl)return i.RED_INTEGER;if(n===ns)return i.RG;if(n===Vl)return i.RG_INTEGER;if(n===Gl)return i.RGBA_INTEGER;if(n===Ua||n===Fa||n===Oa||n===Ba)if(a===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wl||n===Xl||n===ql||n===Yl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zl||n===Jl||n===$l||n===Kl||n===jl||n===za||n===Ql)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zl||n===Jl)return a===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$l)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Kl)return r.COMPRESSED_R11_EAC;if(n===jl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===za)return r.COMPRESSED_RG11_EAC;if(n===Ql)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ec)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ic)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ac)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pc||n===mc||n===gc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===pc)return a===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xc||n===_c||n===ka||n===vc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var _y=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vy=`
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

}`,Ru=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new oa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new de({vertexShader:_y,fragmentShader:vy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cu=class extends hi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,p=null,v=typeof XRWebGLBinding<"u",g=new Ru,m={},b=e.getContextAttributes(),w=null,y=null,S=[],E=[],C=new at,x=null,T=null,P=new nn;P.viewport=new Se;let D=new nn;D.viewport=new Se;let N=[P,D],k=new Dl,U=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=S[Z];return Q===void 0&&(Q=new rr,S[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=S[Z];return Q===void 0&&(Q=new rr,S[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=S[Z];return Q===void 0&&(Q=new rr,S[Z]=Q),Q.getHandSpace()};function q(Z){let Q=E.indexOf(Z.inputSource);if(Q===-1)return;let mt=S[Q];mt!==void 0&&(mt.update(Z.inputSource,Z.frame,l||a),mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",rt);for(let Z=0;Z<S.length;Z++){let Q=E[Z];Q!==null&&(E[Z]=null,S[Z].disconnect(Q))}U=null,B=null,g.reset();for(let Z in m)delete m[Z];if(t.setRenderTarget(w),f=null,d=null,u=null,s=null,y=null,oe.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),T!==null){let Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",X),s.addEventListener("inputsourceschange",rt),b.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Bt=null,wt=null;b.depth&&(wt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=b.stencil?pi:ci,Bt=b.stencil?es:ti);let Wt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Wt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Oe(d.textureWidth,d.textureHeight,{format:Mn,type:fn,depthTexture:new fi(d.textureWidth,d.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let mt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Oe(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function rt(Z){for(let Q=0;Q<Z.removed.length;Q++){let mt=Z.removed[Q],Bt=E.indexOf(mt);Bt>=0&&(E[Bt]=null,S[Bt].disconnect(mt))}for(let Q=0;Q<Z.added.length;Q++){let mt=Z.added[Q],Bt=E.indexOf(mt);if(Bt===-1){for(let Wt=0;Wt<S.length;Wt++)if(Wt>=E.length){E.push(mt),Bt=Wt;break}else if(E[Wt]===null){E[Wt]=mt,Bt=Wt;break}if(Bt===-1)break}let wt=S[Bt];wt&&wt.connect(mt)}}let W=new I,j=new I;function tt(Z,Q,mt){W.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(mt.matrixWorld);let Bt=W.distanceTo(j),wt=Q.projectionMatrix.elements,Wt=mt.projectionMatrix.elements,pe=wt[14]/(wt[10]-1),nt=wt[14]/(wt[10]+1),lt=(wt[9]+1)/wt[5],ct=(wt[9]-1)/wt[5],ht=(wt[8]-1)/wt[0],pt=(Wt[8]+1)/Wt[0],Vt=pe*ht,zt=pe*pt,Xt=Bt/(-ht+pt),Yt=Xt*-ht;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Yt),Z.translateZ(Xt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),wt[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let L=pe+Xt,fe=nt+Xt,te=Vt-Yt,A=zt+(Bt-Yt),_=lt*nt/fe*L,z=ct*nt/fe*L;Z.projectionMatrix.makePerspective(te,A,_,z,L,fe),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Pt(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let Q=Z.near,mt=Z.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(mt=g.depthFar)),k.near=D.near=P.near=Q,k.far=D.far=P.far=mt,(U!==k.near||B!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),U=k.near,B=k.far),k.layers.mask=Z.layers.mask|6,P.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let Bt=Z.parent,wt=k.cameras;Pt(k,Bt);for(let Wt=0;Wt<wt.length;Wt++)Pt(wt[Wt],Bt);wt.length===2?tt(k,P,D):k.projectionMatrix.copy(P.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),Rt(Z,k,Bt)};function Rt(Z,Q,mt){mt===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Jr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(Z){return m[Z]};let ue=null;function Qt(Z,Q){if(h=Q.getViewerPose(l||a),p=Q,h!==null){let mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Bt=!1;mt.length!==k.cameras.length&&(k.cameras.length=0,Bt=!0);for(let nt=0;nt<mt.length;nt++){let lt=mt[nt],ct=null;if(f!==null)ct=f.getViewport(lt);else{let pt=u.getViewSubImage(d,lt);ct=pt.viewport,nt===0&&(t.setRenderTargetTextures(y,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(y))}let ht=N[nt];ht===void 0&&(ht=new nn,ht.layers.enable(nt),ht.viewport=new Se,N[nt]=ht),ht.matrix.fromArray(lt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(lt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ct.x,ct.y,ct.width,ct.height),nt===0&&(k.matrix.copy(ht.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Bt===!0&&k.cameras.push(ht)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let nt=u.getDepthInformation(mt[0]);nt&&nt.isValid&&nt.texture&&g.init(nt,s.renderState)}if(wt&&wt.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let nt=0;nt<mt.length;nt++){let lt=mt[nt].camera;if(lt){let ct=m[lt];ct||(ct=new oa,m[lt]=ct);let ht=u.getCameraImage(lt);ct.sourceTexture=ht}}}}for(let mt=0;mt<S.length;mt++){let Bt=E[mt],wt=S[mt];Bt!==null&&wt!==void 0&&wt.update(Bt,Q,l||a)}ue&&ue(Z,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),p=null}let oe=new gp;oe.setAnimationLoop(Qt),this.setAnimationLoop=function(Z){ue=Z},this.dispose=function(){}}},yy=new $t,Sp=new jt;Sp.set(-1,0,0,0,1,0,0,0,1);function My(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,uu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,w,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,b,w):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===on&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===on&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=t.get(m),w=b.envMap,y=b.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(yy.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Sp),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,b,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=w*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let b=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Sy(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){let E=S.program;n.uniformBlockBinding(y,E)}function l(y,S){let E=s[y.id];E===void 0&&(g(y),E=h(y),s[y.id]=E,y.addEventListener("dispose",b));let C=S.program;n.updateUBOMapping(y,C);let x=t.render.frame;r[y.id]!==x&&(d(y),r[y.id]=x)}function h(y){let S=u();y.__bindingPointIndex=S;let E=i.createBuffer(),C=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,E),E}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let S=s[y.id],E=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,T=E.length;x<T;x++){let P=E[x];if(Array.isArray(P))for(let D=0,N=P.length;D<N;D++)f(P[D],x,D,C);else f(P,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,S,E,C){if(v(y,S,E,C)===!0){let x=y.__offset,T=y.value;if(Array.isArray(T)){let P=0;for(let D=0;D<T.length;D++){let N=T[D],k=m(N);p(N,y.__data,P),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(P+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function p(y,S,E){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,E)}function v(y,S,E,C){let x=y.value,T=S+"_"+E;if(C[T]===void 0)return typeof x=="number"||typeof x=="boolean"?C[T]=x:ArrayBuffer.isView(x)?C[T]=x.slice():C[T]=x.clone(),!0;{let P=C[T];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return C[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function g(y){let S=y.uniforms,E=0,C=16;for(let T=0,P=S.length;T<P;T++){let D=Array.isArray(S[T])?S[T]:[S[T]];for(let N=0,k=D.length;N<k;N++){let U=D[N],B=Array.isArray(U.value)?U.value:[U.value];for(let q=0,X=B.length;q<X;q++){let rt=B[q],W=m(rt),j=E%C,tt=j%W.boundary,Pt=j+tt;E+=tt,Pt!==0&&C-Pt<W.storage&&(E+=C-Pt),U.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=W.storage}}}let x=E%C;return x>0&&(E+=C-x),y.__size=E,y.__cache={},this}function m(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",y),S}function b(y){let S=y.target;S.removeEventListener("dispose",b);let E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function w(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:w}}var by=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mi=null;function Ey(){return mi===null&&(mi=new di(by,16,16,ns,ke),mi.name="DFG_LUT",mi.minFilter=an,mi.magFilter=an,mi.wrapS=Bn,mi.wrapT=Bn,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}var Tc=class{constructor(t={}){let{canvas:e=Of(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=fn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let v=f,g=new Set([Gl,Vl,Hl]),m=new Set([fn,ti,_r,es,Bl,zl]),b=new Uint32Array(4),w=new Int32Array(4),y=new I,S=null,E=null,C=[],x=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,N=null,k=null,U=null,B=null;this._outputColorSpace=Fe;let q=0,X=0,rt=null,W=-1,j=null,tt=new Se,Pt=new Se,Rt=null,ue=new ft(0),Qt=0,oe=e.width,Z=e.height,Q=1,mt=null,Bt=null,wt=new Se(0,0,oe,Z),Wt=new Se(0,0,oe,Z),pe=!1,nt=new hr,lt=!1,ct=!1,ht=new $t,pt=new I,Vt=new Se,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xt=!1;function Yt(){return rt===null?Q:1}let L=n;function fe(M,F){return e.getContext(M,F)}let te,A,_,z,H,J,ut,gt,K,it,vt,Ft,_t,xt,Dt,kt,Zt,O,yt,et,Mt,At,ot;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",Vn,!1),L===null){let F="webgl2";if(L=fe(F,M),L===null)throw fe(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(M){throw e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",Vn,!1),qt("WebGLRenderer: "+M.message),M}function Ht(){te=new I_(L),te.init(),Mt=new xy(L,te),A=new M_(L,te,t,Mt),_=new my(L,te),A.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),k=L.createFramebuffer(),U=L.createFramebuffer(),B=L.createFramebuffer(),z=new N_(L),H=new ey,J=new gy(L,te,_,H,A,Mt,z),ut=new P_(P),gt=new Fm(L),At=new v_(L,gt),K=new D_(L,gt,z,At),it=new F_(L,K,gt,At,z),O=new U_(L,A,J),Dt=new S_(H),vt=new ty(P,ut,te,A,At,Dt),Ft=new My(P,H),_t=new iy,xt=new cy(te),Zt=new __(P,ut,_,it,p,c),kt=new py(P,it,A),ot=new Sy(L,z,A,_),yt=new y_(L,te,z),et=new L_(L,te,z),z.programs=vt.programs,P.capabilities=A,P.extensions=te,P.properties=H,P.renderLists=_t,P.shadowMap=kt,P.state=_,P.info=z}v!==fn&&(T=new B_(v,e.width,e.height,o,s,r));let Ut=new Cu(P,L);this.xr=Ut,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let M=te.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=te.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(M){M!==void 0&&(Q=M,this.setSize(oe,Z,!1))},this.getSize=function(M){return M.set(oe,Z)},this.setSize=function(M,F,Y=!0){if(Ut.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=M,Z=F,e.width=Math.floor(M*Q),e.height=Math.floor(F*Q),Y===!0&&(e.style.width=M+"px",e.style.height=F+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(oe*Q,Z*Q).floor()},this.setDrawingBufferSize=function(M,F,Y){oe=M,Z=F,Q=Y,e.width=Math.floor(M*Y),e.height=Math.floor(F*Y),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(v===fn){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(tt)},this.getViewport=function(M){return M.copy(wt)},this.setViewport=function(M,F,Y,V){M.isVector4?wt.set(M.x,M.y,M.z,M.w):wt.set(M,F,Y,V),_.viewport(tt.copy(wt).multiplyScalar(Q).round())},this.getScissor=function(M){return M.copy(Wt)},this.setScissor=function(M,F,Y,V){M.isVector4?Wt.set(M.x,M.y,M.z,M.w):Wt.set(M,F,Y,V),_.scissor(Pt.copy(Wt).multiplyScalar(Q).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(M){_.setScissorTest(pe=M)},this.setOpaqueSort=function(M){mt=M},this.setTransparentSort=function(M){Bt=M},this.getClearColor=function(M){return M.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,Y=!0){let V=0;if(M){let G=!1;if(rt!==null){let Tt=rt.texture.format;G=g.has(Tt)}if(G){let Tt=rt.texture.type,It=m.has(Tt),Et=Zt.getClearColor(),Lt=Zt.getClearAlpha(),Ot=Et.r,ie=Et.g,ce=Et.b;It?(b[0]=Ot,b[1]=ie,b[2]=ce,b[3]=Lt,L.clearBufferuiv(L.COLOR,0,b)):(w[0]=Ot,w[1]=ie,w[2]=ce,w[3]=Lt,L.clearBufferiv(L.COLOR,0,w))}else V|=L.COLOR_BUFFER_BIT}F&&(V|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),N=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",Vn,!1),Zt.dispose(),_t.dispose(),xt.dispose(),H.dispose(),ut.dispose(),it.dispose(),At.dispose(),ot.dispose(),vt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",fd),Ut.removeEventListener("sessionend",pd),hs.stop()};function Ie(M){M.preventDefault(),Zr("WebGLRenderer: Context Lost."),D=!0}function _e(){Zr("WebGLRenderer: Context Restored."),D=!1;let M=z.autoReset,F=kt.enabled,Y=kt.autoUpdate,V=kt.needsUpdate,G=kt.type;Ht(),z.autoReset=M,kt.enabled=F,kt.autoUpdate=Y,kt.needsUpdate=V,kt.type=G}function Vn(M){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function si(M){let F=M.target;F.removeEventListener("dispose",si),p0(F)}function p0(M){m0(M),H.remove(M)}function m0(M){let F=H.get(M).programs;F!==void 0&&(F.forEach(function(Y){vt.releaseProgram(Y)}),M.isShaderMaterial&&vt.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,Y,V,G,Tt){F===null&&(F=zt);let It=G.isMesh&&G.matrixWorld.determinantAffine()<0,Et=_0(M,F,Y,V,G);_.setMaterial(V,It);let Lt=Y.index,Ot=1;if(V.wireframe===!0){if(Lt=K.getWireframeAttribute(Y),Lt===void 0)return;Ot=2}let ie=Y.drawRange,ce=Y.attributes.position,Nt=ie.start*Ot,ve=(ie.start+ie.count)*Ot;Tt!==null&&(Nt=Math.max(Nt,Tt.start*Ot),ve=Math.min(ve,(Tt.start+Tt.count)*Ot)),Lt!==null?(Nt=Math.max(Nt,0),ve=Math.min(ve,Lt.count)):ce!=null&&(Nt=Math.max(Nt,0),ve=Math.min(ve,ce.count));let Ze=ve-Nt;if(Ze<0||Ze===1/0)return;At.setup(G,V,Et,Y,Lt);let Ne,Re=yt;if(Lt!==null&&(Ne=gt.get(Lt),Re=et,Re.setIndex(Ne)),G.isMesh)V.wireframe===!0?(_.setLineWidth(V.wireframeLinewidth*Yt()),Re.setMode(L.LINES)):Re.setMode(L.TRIANGLES);else if(G.isLine){let hn=V.linewidth;hn===void 0&&(hn=1),_.setLineWidth(hn*Yt()),G.isLineSegments?Re.setMode(L.LINES):G.isLineLoop?Re.setMode(L.LINE_LOOP):Re.setMode(L.LINE_STRIP)}else G.isPoints?Re.setMode(L.POINTS):G.isSprite&&Re.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(te.get("WEBGL_multi_draw"))Re.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let hn=G._multiDrawStarts,Ct=G._multiDrawCounts,gn=G._multiDrawCount,me=Lt?gt.get(Lt).bytesPerElement:1,Fn=H.get(V).currentProgram.getUniforms();for(let ri=0;ri<gn;ri++)Fn.setValue(L,"_gl_DrawID",ri),Re.render(hn[ri]/me,Ct[ri])}else if(G.isInstancedMesh)Re.renderInstances(Nt,Ze,G.count);else if(Y.isInstancedBufferGeometry){let hn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ct=Math.min(Y.instanceCount,hn);Re.renderInstances(Nt,Ze,Ct)}else Re.render(Nt,Ze)};function dd(M,F,Y,V){N!==null&&M.isNodeMaterial&&N.setObject(V,M),lt===!0&&Dt.setState(M,Y,!1),M.transparent===!0&&M.side===ln&&M.forceSinglePass===!1?(M.side=on,M.needsUpdate=!0,So(M,F,V),M.side=Ki,M.needsUpdate=!0,So(M,F,V),M.side=ln):So(M,F,V)}this.compile=function(M,F,Y=null){Y===null&&(Y=M),N!==null&&N.renderStart(M,F,Y),E=xt.get(Y),E.init(F),x.push(E),Y.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),M!==Y&&M.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),ct=this.localClippingEnabled,lt=Dt.init(this.clippingPlanes,ct),lt===!0&&Dt.setGlobalState(this.clippingPlanes,F),N!==null&&kt.render(E.state.shadowsArray,Y,F);let V=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let Tt=G.material;if(Tt)if(Array.isArray(Tt))for(let It=0;It<Tt.length;It++){let Et=Tt[It];dd(Et,Y,F,G),V.add(Et)}else dd(Tt,Y,F,G),V.add(Tt)}),E=x.pop(),N!==null&&N.renderEnd(),V},this.compileAsync=function(M,F,Y=null){let V=this.compile(M,F,Y);return new Promise(G=>{function Tt(){if(V.forEach(function(It){let Lt=H.get(It).currentProgram;(Lt===void 0||Lt.isReady())&&V.delete(It)}),V.size===0){G(M);return}setTimeout(Tt,10)}te.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let ih=null;function g0(M){ih&&ih(M)}function fd(){hs.stop()}function pd(){hs.start()}let hs=new gp;hs.setAnimationLoop(g0),typeof self<"u"&&hs.setContext(self),this.setAnimationLoop=function(M){ih=M,Ut.setAnimationLoop(M),M===null?hs.stop():hs.start()},Ut.addEventListener("sessionstart",fd),Ut.addEventListener("sessionend",pd),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(M,F);let Y=Ut.enabled===!0&&Ut.isPresenting===!0,V=T!==null&&(rt===null||Y)&&T.begin(P,rt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(F),F=Ut.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,F,rt),E=xt.get(M,x.length),E.init(F),E.state.textureUnits=J.getTextureUnits(),x.push(E),ht.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),nt.setFromProjectionMatrix(ht,Yn,F.reversedDepth),ct=this.localClippingEnabled,lt=Dt.init(this.clippingPlanes,ct),S=_t.get(M,C.length),S.init(),C.push(S),Ut.enabled===!0&&Ut.isPresenting===!0){let It=P.xr.getDepthSensingMesh();It!==null&&sh(It,F,-1/0,P.sortObjects)}sh(M,F,0,P.sortObjects),S.finish(),N!==null&&N.updateLights(E.state.lightsArray),P.sortObjects===!0&&S.sort(mt,Bt),Xt=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,Xt&&Zt.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&Dt.beginShadows();let G=E.state.shadowsArray;if(kt.render(G,M,F),lt===!0&&Dt.endShadows(),(V&&T.hasRenderPass())===!1){let It=S.opaque,Et=S.transmissive;if(E.setupLights(),F.isArrayCamera){let Lt=F.cameras;if(Et.length>0)for(let Ot=0,ie=Lt.length;Ot<ie;Ot++){let ce=Lt[Ot];gd(It,Et,M,ce)}Xt&&Zt.render(M);for(let Ot=0,ie=Lt.length;Ot<ie;Ot++){let ce=Lt[Ot];md(S,M,ce,ce.viewport)}}else Et.length>0&&gd(It,Et,M,F),Xt&&Zt.render(M),md(S,M,F)}rt!==null&&X===0&&(J.updateMultisampleRenderTarget(rt),J.updateRenderTargetMipmap(rt)),V&&T.end(P),M.isScene===!0&&M.onAfterRender(P,M,F),At.resetDefaultState(),W=-1,j=null,x.pop(),x.length>0?(E=x[x.length-1],J.setTextureUnits(E.state.textureUnits),lt===!0&&Dt.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,N!==null&&N.renderEnd()};function sh(M,F,Y,V){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(nt)){V&&Vt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ht);let It=it.update(M),Et=M.material;Et.visible&&S.push(M,It,Et,Y,Vt.z,null,F)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(nt))){let It=it.update(M),Et=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Vt.copy(M.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Vt.copy(It.boundingSphere.center)),Vt.applyMatrix4(M.matrixWorld).applyMatrix4(ht)),Array.isArray(Et)){let Lt=It.groups;for(let Ot=0,ie=Lt.length;Ot<ie;Ot++){let ce=Lt[Ot],Nt=Et[ce.materialIndex];Nt&&Nt.visible&&S.push(M,It,Nt,Y,Vt.z,ce,F)}}else Et.visible&&S.push(M,It,Et,Y,Vt.z,null,F)}}let Tt=M.children;for(let It=0,Et=Tt.length;It<Et;It++)sh(Tt[It],F,Y,V)}function md(M,F,Y,V){let{opaque:G,transmissive:Tt,transparent:It}=M;E.setupLightsView(Y),lt===!0&&Dt.setGlobalState(P.clippingPlanes,Y),V&&_.viewport(tt.copy(V)),G.length>0&&Mo(G,F,Y),Tt.length>0&&Mo(Tt,F,Y),It.length>0&&Mo(It,F,Y),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function gd(M,F,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let Nt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new Oe(1,1,{generateMipmaps:!0,type:Nt?ke:fn,minFilter:ts,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let Tt=E.state.transmissionRenderTarget[V.id],It=V.viewport||tt;Tt.setSize(It.z*P.transmissionResolutionScale,It.w*P.transmissionResolutionScale);let Et=P.getRenderTarget(),Lt=P.getActiveCubeFace(),Ot=P.getActiveMipmapLevel();P.setRenderTarget(Tt),P.getClearColor(ue),Qt=P.getClearAlpha(),Qt<1&&P.setClearColor(16777215,.5),P.clear(),Xt&&Zt.render(Y);let ie=P.toneMapping;P.toneMapping=Qn;let ce=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),lt===!0&&Dt.setGlobalState(P.clippingPlanes,V),Mo(M,Y,V),J.updateMultisampleRenderTarget(Tt),J.updateRenderTargetMipmap(Tt),te.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let ve=0,Ze=F.length;ve<Ze;ve++){let Ne=F[ve],{object:Re,geometry:hn,material:Ct,group:gn}=Ne;if(Ct.side===ln&&Re.layers.test(V.layers)){let me=Ct.side;Ct.side=on,Ct.needsUpdate=!0,xd(Re,Y,V,hn,Ct,gn),Ct.side=me,Ct.needsUpdate=!0,Nt=!0}}Nt===!0&&(J.updateMultisampleRenderTarget(Tt),J.updateRenderTargetMipmap(Tt))}P.setRenderTarget(Et,Lt,Ot),P.setClearColor(ue,Qt),ce!==void 0&&(V.viewport=ce),P.toneMapping=ie}function Mo(M,F,Y){let V=F.isScene===!0?F.overrideMaterial:null;for(let G=0,Tt=M.length;G<Tt;G++){let It=M[G],{object:Et,geometry:Lt,group:Ot}=It,ie=It.material;ie.allowOverride===!0&&V!==null&&(ie=V),Et.layers.test(Y.layers)&&xd(Et,F,Y,Lt,ie,Ot)}}function xd(M,F,Y,V,G,Tt){N!==null&&G.isNodeMaterial&&N.setObject(M,G),M.onBeforeRender(P,F,Y,V,G,Tt),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(P,F,Y,V,M,Tt),G.transparent===!0&&G.side===ln&&G.forceSinglePass===!1?(G.side=on,G.needsUpdate=!0,P.renderBufferDirect(Y,F,V,G,M,Tt),G.side=Ki,G.needsUpdate=!0,P.renderBufferDirect(Y,F,V,G,M,Tt),G.side=ln):P.renderBufferDirect(Y,F,V,G,M,Tt),M.onAfterRender(P,F,Y,V,G,Tt)}function So(M,F,Y){F.isScene!==!0&&(F=zt);let V=H.get(M),G=E.state.lights,Tt=E.state.shadowsArray,It=G.state.version,Et=vt.getParameters(M,G.state,Tt,F,Y,E.state.lightProbeGridArray),Lt=vt.getProgramCacheKey(Et),Ot=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let ie=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=ut.get(M.envMap||V.environment,ie),V.envMapRotation=V.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Ot===void 0&&(M.addEventListener("dispose",si),Ot=new Map,V.programs=Ot);let ce=Ot.get(Lt);if(ce!==void 0){if(V.currentProgram===ce&&V.lightsStateVersion===It)return vd(M,Et),ce}else Et.uniforms=vt.getUniforms(M),N!==null&&M.isNodeMaterial&&N.build(M,Y,Et),M.onBeforeCompile(Et,P),ce=vt.acquireProgram(Et,Lt),Ot.set(Lt,ce),V.uniforms=Et.uniforms;let Nt=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Nt.clippingPlanes=Dt.uniform),vd(M,Et),V.needsLights=y0(M),V.lightsStateVersion=It,V.needsLights&&(Nt.ambientLightColor.value=G.state.ambient,Nt.lightProbe.value=G.state.probe,Nt.sunLights.value=G.state.sun,Nt.sunLightShadows.value=G.state.sunShadow,Nt.directionalLights.value=G.state.directional,Nt.directionalLightShadows.value=G.state.directionalShadow,Nt.spotLights.value=G.state.spot,Nt.spotLightShadows.value=G.state.spotShadow,Nt.rectAreaLights.value=G.state.rectArea,Nt.ltc_1.value=G.state.rectAreaLTC1,Nt.ltc_2.value=G.state.rectAreaLTC2,Nt.pointLights.value=G.state.point,Nt.pointLightShadows.value=G.state.pointShadow,Nt.hemisphereLights.value=G.state.hemi,Nt.sunShadowMatrix.value=G.state.sunShadowMatrix,Nt.sunShadowCascade.value=G.state.sunShadowCascade,Nt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Nt.spotLightMatrix.value=G.state.spotLightMatrix,Nt.spotLightMap.value=G.state.spotLightMap,Nt.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=ce,V.uniformsList=null,ce}function _d(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=Mr.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function vd(M,F){let Y=H.get(M);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function x0(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let Y=0,V=M.length;Y<V;Y++){let G=M[Y];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function _0(M,F,Y,V,G){F.isScene!==!0&&(F=zt),J.resetTextureUnits();let Tt=F.fog,It=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,Et=rt===null?P.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:le.workingColorSpace,Lt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ot=ut.get(V.envMap||It,Lt),ie=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ce=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Nt=!!Y.morphAttributes.position,ve=!!Y.morphAttributes.normal,Ze=!!Y.morphAttributes.color,Ne=Qn;V.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ne=P.toneMapping);let Re=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,hn=Re!==void 0?Re.length:0,Ct=H.get(V),gn=E.state.lights;if(lt===!0&&(ct===!0||M!==j)){let De=M===j&&V.id===W;Dt.setState(V,M,De)}let me=!1;V.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==gn.state.version||Ct.outputColorSpace!==Et||G.isBatchedMesh&&Ct.batching===!1||!G.isBatchedMesh&&Ct.batching===!0||G.isBatchedMesh&&Ct.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ct.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ct.instancing===!1||!G.isInstancedMesh&&Ct.instancing===!0||G.isSkinnedMesh&&Ct.skinning===!1||!G.isSkinnedMesh&&Ct.skinning===!0||G.isInstancedMesh&&Ct.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ct.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ct.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ct.instancingMorph===!1&&G.morphTexture!==null||Ct.envMap!==Ot||V.fog===!0&&Ct.fog!==Tt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Dt.numPlanes||Ct.numIntersection!==Dt.numIntersection)||Ct.vertexAlphas!==ie||Ct.vertexTangents!==ce||Ct.morphTargets!==Nt||Ct.morphNormals!==ve||Ct.morphColors!==Ze||Ct.toneMapping!==Ne||Ct.morphTargetsCount!==hn||!!Ct.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,Ct.__version=V.version);let Fn=Ct.currentProgram;me===!0&&(Fn=So(V,F,G),N&&V.isNodeMaterial&&N.onUpdateProgram(V,Fn,Ct));let ri=!1,Bi=!1,Ns=!1,Ee=Fn.getUniforms(),Ve=Ct.uniforms;if(_.useProgram(Fn.program)&&(ri=!0,Bi=!0,Ns=!0),V.id!==W&&(W=V.id,Bi=!0),Ct.needsLights){let De=x0(E.state.lightProbeGridArray,G);Ct.lightProbeGrid!==De&&(Ct.lightProbeGrid=De,Bi=!0)}if(ri||j!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ee.setValue(L,"projectionMatrix",M.projectionMatrix),Ee.setValue(L,"viewMatrix",M.matrixWorldInverse);let ki=Ee.map.cameraPosition;ki!==void 0&&ki.setValue(L,pt.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&Ee.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ee.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,Bi=!0,Ns=!0)}if(Ct.needsLights&&(gn.state.sunShadowMap.length>0&&Ee.setValue(L,"sunShadowMap",gn.state.sunShadowMap,J),gn.state.directionalShadowMap.length>0&&Ee.setValue(L,"directionalShadowMap",gn.state.directionalShadowMap,J),gn.state.spotShadowMap.length>0&&Ee.setValue(L,"spotShadowMap",gn.state.spotShadowMap,J),gn.state.pointShadowMap.length>0&&Ee.setValue(L,"pointShadowMap",gn.state.pointShadowMap,J)),G.isSkinnedMesh){Ee.setOptional(L,G,"bindMatrix"),Ee.setOptional(L,G,"bindMatrixInverse");let De=G.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Ee.setValue(L,"boneTexture",De.boneTexture,J))}G.isBatchedMesh&&(Ee.setOptional(L,G,"batchingTexture"),Ee.setValue(L,"batchingTexture",G._matricesTexture,J),Ee.setOptional(L,G,"batchingIdTexture"),Ee.setValue(L,"batchingIdTexture",G._indirectTexture,J),Ee.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&Ee.setValue(L,"batchingColorTexture",G._colorsTexture,J));let zi=Y.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&O.update(G,Y,Fn),(Bi||Ct.receiveShadow!==G.receiveShadow)&&(Ct.receiveShadow=G.receiveShadow,Ee.setValue(L,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(Ve.envMapIntensity.value=F.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=Ey()),Bi){if(Ee.setValue(L,"toneMappingExposure",P.toneMappingExposure),Ct.needsLights&&v0(Ve,Ns),Tt&&V.fog===!0&&Ft.refreshFogUniforms(Ve,Tt),Ft.refreshMaterialUniforms(Ve,V,Q,Z,E.state.transmissionRenderTarget[M.id]),Ct.needsLights&&Ct.lightProbeGrid){let De=Ct.lightProbeGrid;Ve.probesSH.value=De.texture,Ve.probesMin.value.copy(De.boundingBox.min),Ve.probesMax.value.copy(De.boundingBox.max),Ve.probesResolution.value.copy(De.resolution)}Mr.upload(L,_d(Ct),Ve,J)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Mr.upload(L,_d(Ct),Ve,J),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ee.setValue(L,"center",G.center),Ee.setValue(L,"modelViewMatrix",G.modelViewMatrix),Ee.setValue(L,"normalMatrix",G.normalMatrix),Ee.setValue(L,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let De=V.uniformsGroups;for(let ki=0,Us=De.length;ki<Us;ki++){let Md=De[ki];ot.update(Md,Fn),ot.bind(Md,Fn)}}return Fn}function v0(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.sunLights.needsUpdate=F,M.sunLightShadows.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function y0(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(M,F,Y){let V=H.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),H.get(M.texture).__webglTexture=F,H.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let Y=H.get(M);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,Y=0){rt=M,q=F,X=Y;let V=null,G=!1,Tt=!1;if(M){let Et=H.get(M);if(Et.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,Et.__webglFramebuffer),tt.copy(M.viewport),Pt.copy(M.scissor),Rt=M.scissorTest,_.viewport(tt),_.scissor(Pt),_.setScissorTest(Rt),W=-1;return}else if(Et.__webglFramebuffer===void 0)J.setupRenderTarget(M);else if(Et.__hasExternalTextures)J.rebindTextures(M,H.get(M.texture).__webglTexture,H.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let ie=M.depthTexture;if(Et.__boundDepthTexture!==ie){if(ie!==null&&H.has(ie)&&(M.width!==ie.image.width||M.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(M)}}let Lt=M.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(Tt=!0);let Ot=H.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ot[F])?V=Ot[F][Y]:V=Ot[F],G=!0):M.samples>0&&J.useMultisampledRTT(M)===!1?V=H.get(M).__webglMultisampledFramebuffer:Array.isArray(Ot)?V=Ot[Y]:V=Ot,tt.copy(M.viewport),Pt.copy(M.scissor),Rt=M.scissorTest}else tt.copy(wt).multiplyScalar(Q).floor(),Pt.copy(Wt).multiplyScalar(Q).floor(),Rt=pe;if(Y!==0&&(V=k),_.bindFramebuffer(L.FRAMEBUFFER,V)&&_.drawBuffers(M,V),_.viewport(tt),_.scissor(Pt),_.setScissorTest(Rt),G){let Et=H.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,Et.__webglTexture,Y)}else if(Tt){let Et=F;for(let Lt=0;Lt<M.textures.length;Lt++){let Ot=H.get(M.textures[Lt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Lt,Ot.__webglTexture,Y,Et)}}else if(M!==null&&Y!==0){let Et=H.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Et.__webglTexture,Y)}W=-1};function yd(M){let F=H.get(M);return(F.__readFormat!==M.format||F.__readType!==M.type)&&(F.__readFormat=M.format,F.__readType=M.type,F.__formatReadable=A.textureFormatReadable(M.format),F.__typeReadable=A.textureTypeReadable(M.type)),F}this.readRenderTargetPixels=function(M,F,Y,V,G,Tt,It,Et=0){if(!(M&&M.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&It!==void 0&&(Lt=Lt[It]),Lt){_.bindFramebuffer(L.FRAMEBUFFER,Lt);try{let Ot=M.textures[Et],ie=Ot.format,ce=Ot.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Et);let Nt=yd(Ot);if(Nt.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-V&&Y>=0&&Y<=M.height-G&&L.readPixels(F,Y,V,G,Mt.convert(ie),Mt.convert(ce),Tt)}finally{let Ot=rt!==null?H.get(rt).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(M,F,Y,V,G,Tt,It,Et=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&It!==void 0&&(Lt=Lt[It]),Lt)if(F>=0&&F<=M.width-V&&Y>=0&&Y<=M.height-G){_.bindFramebuffer(L.FRAMEBUFFER,Lt);let Ot=M.textures[Et],ie=Ot.format,ce=Ot.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Et);let Nt=yd(Ot);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ve),L.bufferData(L.PIXEL_PACK_BUFFER,Tt.byteLength,L.STREAM_READ),L.readPixels(F,Y,V,G,Mt.convert(ie),Mt.convert(ce),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Ze=rt!==null?H.get(rt).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Ze);let Ne=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await zf(L,Ne,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ve),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Tt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ve),L.deleteSync(Ne),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,Y=0){let V=Math.pow(2,-Y),G=Math.floor(M.image.width*V),Tt=Math.floor(M.image.height*V),It=F!==null?F.x:0,Et=F!==null?F.y:0;J.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,It,Et,G,Tt),_.unbindTexture()},this.copyTextureToTexture=function(M,F,Y=null,V=null,G=0,Tt=0){let It,Et,Lt,Ot,ie,ce,Nt,ve,Ze,Ne=M.isCompressedTexture?M.mipmaps[Tt]:M.image;if(Y!==null)It=Y.max.x-Y.min.x,Et=Y.max.y-Y.min.y,Lt=Y.isBox3?Y.max.z-Y.min.z:1,Ot=Y.min.x,ie=Y.min.y,ce=Y.isBox3?Y.min.z:0;else{let Ve=Math.pow(2,-G);It=Math.floor(Ne.width*Ve),Et=Math.floor(Ne.height*Ve),M.isDataArrayTexture?Lt=Ne.depth:M.isData3DTexture?Lt=Math.floor(Ne.depth*Ve):Lt=1,Ot=0,ie=0,ce=0}V!==null?(Nt=V.x,ve=V.y,Ze=V.z):(Nt=0,ve=0,Ze=0);let Re=Mt.convert(F.format),hn=Mt.convert(F.type),Ct;F.isData3DTexture?(J.setTexture3D(F,0),Ct=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(J.setTexture2DArray(F,0),Ct=L.TEXTURE_2D_ARRAY):(J.setTexture2D(F,0),Ct=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);let gn=_.getParameter(L.UNPACK_ROW_LENGTH),me=_.getParameter(L.UNPACK_IMAGE_HEIGHT),Fn=_.getParameter(L.UNPACK_SKIP_PIXELS),ri=_.getParameter(L.UNPACK_SKIP_ROWS),Bi=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,Ne.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ne.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Ot),_.pixelStorei(L.UNPACK_SKIP_ROWS,ie),_.pixelStorei(L.UNPACK_SKIP_IMAGES,ce);let Ns=M.isDataArrayTexture||M.isData3DTexture,Ee=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let Ve=H.get(M),zi=H.get(F),De=H.get(Ve.__renderTarget),ki=H.get(zi.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,De.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Us=0;Us<Lt;Us++)Ns&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(M).__webglTexture,G,ce+Us),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(F).__webglTexture,Tt,Ze+Us)),L.blitFramebuffer(Ot,ie,It,Et,Nt,ve,It,Et,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||H.has(M)){let Ve=H.get(M),zi=H.get(F);_.bindFramebuffer(L.READ_FRAMEBUFFER,U),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,B);for(let De=0;De<Lt;De++)Ns?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ve.__webglTexture,G,ce+De):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ve.__webglTexture,G),Ee?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,zi.__webglTexture,Tt,Ze+De):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,zi.__webglTexture,Tt),G!==0?L.blitFramebuffer(Ot,ie,It,Et,Nt,ve,It,Et,L.COLOR_BUFFER_BIT,L.NEAREST):Ee?L.copyTexSubImage3D(Ct,Tt,Nt,ve,Ze+De,Ot,ie,It,Et):L.copyTexSubImage2D(Ct,Tt,Nt,ve,Ot,ie,It,Et);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ee?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(Ct,Tt,Nt,ve,Ze,It,Et,Lt,Re,hn,Ne.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Ct,Tt,Nt,ve,Ze,It,Et,Lt,Re,Ne.data):L.texSubImage3D(Ct,Tt,Nt,ve,Ze,It,Et,Lt,Re,hn,Ne):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Tt,Nt,ve,It,Et,Re,hn,Ne.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Tt,Nt,ve,Ne.width,Ne.height,Re,Ne.data):L.texSubImage2D(L.TEXTURE_2D,Tt,Nt,ve,It,Et,Re,hn,Ne);_.pixelStorei(L.UNPACK_ROW_LENGTH,gn),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,me),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Fn),_.pixelStorei(L.UNPACK_SKIP_ROWS,ri),_.pixelStorei(L.UNPACK_SKIP_IMAGES,Bi),Tt===0&&F.generateMipmaps&&L.generateMipmap(Ct),_.unbindTexture()},this.initRenderTarget=function(M){H.get(M).__webglFramebuffer===void 0&&J.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?J.setTextureCube(M,0):M.isData3DTexture?J.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?J.setTexture2DArray(M,0):J.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){q=0,X=0,rt=null,_.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var Pu="https://race.vwfestmemecoin.com/api/arcade/zombies",qa=null,Iu=i=>i.json(),xi={start(){return qa=null,fetch(Pu+"/start",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}).then(Iu).then(i=>{i.ok&&(qa=i.token)}).catch(()=>{})},hasToken(){return!!qa},top(){return fetch(Pu+"/top").then(Iu).then(i=>i.ok?i.top:null).catch(()=>null)},submit(i,t,e,n){return fetch(Pu+"/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:qa,nickname:i,score:t,pts:e,kills:n})}).then(Iu).then(s=>(s.ok&&(qa=null),s)).catch(()=>({ok:!1,error:"Network hiccup. Try again."}))},render(i,t,e){if(i.replaceChildren(),!t){let n=document.createElement("li");n.className="muted",n.textContent="Leaderboard unavailable.",i.append(n);return}if(!t.length){let n=document.createElement("li");n.className="muted",n.textContent="No survivors yet. Be first.",i.append(n);return}for(let n of t.slice(0,10)){let s=document.createElement("li");e&&n.nickname===e&&(s.className="me");let r=document.createElement("b");r.textContent=String(n.nickname),s.append(r," \xB7 Round "+(n.score|0)+" \xB7 "+(n.aux|0).toLocaleString()+" pts"),i.append(s)}}};var Xe=Math.PI*2,Be=(i,t,e)=>i<t?t:i>e?e:i,_i=(i,t,e)=>i+(t-i)*e,$=(i=1,t)=>t===void 0?Math.random()*i:i+Math.random()*(t-i),Nn=i=>i[Math.random()*i.length|0],bp=i=>i*i*(3-2*i);function Rc(i,t,e){let n=i*374761393+t*668265263+e*144665|0;return n=(n^n>>>13)*1274126177,n=n^n>>>16,(n>>>0)%1e5/1e5}function Ty(i,t,e=0){let n=Math.floor(i),s=Math.floor(t),r=bp(i-n),a=bp(t-s),o=Rc(n,s,e),c=Rc(n+1,s,e),l=Rc(n,s+1,e),h=Rc(n+1,s+1,e);return _i(_i(o,c,r),_i(l,h,r),a)}function bn(i,t,e=4,n=0){let s=0,r=.5,a=1;for(let o=0;o<e;o++)s+=r*Ty(i*a,t*a,n+o*17),a*=2,r*=.5;return s}function is(i,t,e={}){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),r=s.createImageData(i,i),a=r.data;for(let c=0;c<i;c++)for(let l=0;l<i;l++){let h=(c*i+l)*4,u=t(l/i,c/i,l,c);a[h]=u[0],a[h+1]=u[1],a[h+2]=u[2],a[h+3]=255}s.putImageData(r,0,0),e.after&&e.after(s,i);let o=new vn(n);return o.wrapS=o.wrapT=wn,o.anisotropy=e.aniso||4,e.srgb!==!1&&(o.colorSpace=Fe),o.needsUpdate=!0,o}var Cc=(i,t,e)=>[_i(i[0],t[0],e),_i(i[1],t[1],e),_i(i[2],t[2],e)];function Ep(i=512){let t={};t.sand=is(i,(o,c)=>{let l=bn(o*24,c*24,5,1),h=bn(o*6+l*1.5,c*60,3,9),u=Be(l*.7+h*.5,0,1);return Cc([112,86,58],[186,150,104],u)}),t.sandBump=is(i,(o,c)=>{let l=bn(o*24,c*24,5,1),h=bn(o*6+l*1.5,c*60,3,9),u=Be(l*.6+h*.7,0,1)*255;return[u,u,u]},{srgb:!1}),t.concrete=is(i,(o,c,l,h)=>{let u=bn(o*18,c*18,5,3),d=bn(o*80,c*80,2,4),f=.35+u*.5+(d-.5)*.15,p=Math.abs(bn(o*7,c*7,3,12)-.5)<.012?.5:1;return f*=p,Cc([48,50,54],[128,126,120],Be(f,0,1))}),t.concreteBump=is(i,(o,c)=>{let l=bn(o*18,c*18,5,3)*255;return[l,l,l]},{srgb:!1}),t.rust=is(i,(o,c)=>{let l=bn(o*10,c*10,5,5),h=bn(o*3,c*40,3,7),u=Be((l-.42)*3.2+(h-.5)*.8,0,1),d=.62+(bn(o*60,c*60,2,2)-.5)*.25;return Cc([d*255,d*255,d*255],[150,70,28],u*.85)}),t.rustRough=is(i,(o,c)=>{let l=bn(o*10,c*10,5,5),h=bn(o*3,c*40,3,7);return[0,(.45+Be((l-.42)*3.2+(h-.5)*.8,0,1)*.5)*255,0]},{srgb:!1}),t.corr=is(256,(o,c)=>{let l=(Math.sin(o*Xe*16)*.5+.5)*255;return[l,l,l]},{srgb:!1}),t.corr.repeat.set(1,1),t.wood=is(256,(o,c)=>{let l=bn(o*4,c*60,4,21),h=bn(o*12,c*12,2,4);return Cc([66,42,24],[150,108,66],Be(l*.9+h*.2,0,1))});let e=document.createElement("canvas");e.width=e.height=64;let n=e.getContext("2d"),s=n.createRadialGradient(32,32,0,32,32,32);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.25,"rgba(255,255,255,.55)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,64,64),t.glow=new vn(e),t.glow.colorSpace=Fe;let r=document.createElement("canvas");r.width=1024,r.height=256;let a=r.getContext("2d");return a.fillStyle="#05070b",a.fillRect(0,0,1024,256),a.textAlign="center",a.textBaseline="middle",a.font="900 150px system-ui, Arial Black, sans-serif",a.shadowColor="#18ffb0",a.shadowBlur=40,a.fillStyle="#c8fff0",a.fillText("VW FEST",512,120),a.shadowBlur=20,a.font="700 46px system-ui, Arial, sans-serif",a.fillStyle="#ffb347",a.shadowColor="#ff7a00",a.fillText("AIR-COOLED SALVAGE  \xB7  $VWFEST",512,222),t.sign=new vn(r),t.sign.colorSpace=Fe,t.sign.anisotropy=4,t}function wp(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new we,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Tp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);let p=Tp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function Tp(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new ge(a,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let v=h.getComponent(d,p);o.setComponent(d+u,p,v)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function Pc(i){let e=new DataView(i.buffer,i.byteOffset,i.byteLength).getUint32(0,!0),n=JSON.parse(new TextDecoder().decode(i.subarray(4,4+e))),s=i.byteOffset+4+e+(4-e%4)%4;return{meta:n,view:(a,[o,c])=>new a(i.buffer.slice(s+o,s+o+c*a.BYTES_PER_ELEMENT))}}function Ic(i,t){let e=i(Uint16Array,t.pos),n=new Float32Array(e.length);for(let s=0;s<e.length;s++){let r=s%3;n[s]=t.min[r]+e[s]/65535*t.size[r]}return new ge(n,3)}var Dc=(i,t)=>new ge(i(Int8Array,t.nrm),3,!0),Ya={};async function Ap(){await Promise.all(["zombies","cars"].map(async i=>{let t=await fetch("assets/"+i+".bin");if(!t.ok)throw new Error("missing assets/"+i+".bin");Ya[i]=new Uint8Array(await t.arrayBuffer())}))}var Uu={},Nu={},wy={},Rp=!1;function Ay(){if(Rp)return;Rp=!0;let{meta:i,view:t}=Pc(Ya.cars);for(let e of i){wy[e.tag]=e.tris;let n=new we;if(n.setAttribute("position",Ic(t,e)),n.setAttribute("normal",Dc(t,e)),n.setAttribute("color",new ge(t(Uint8Array,e.col),3,!0)),n.setIndex(new ge(t(Uint16Array,e.idx),1)),n.computeBoundingBox(),Uu[e.tag]=n,e.plate){let s=new we;s.setAttribute("position",new ge(t(Float32Array,e.plate.pos),3)),s.setAttribute("normal",new ge(t(Float32Array,e.plate.nrm),3)),s.setAttribute("uv",new ge(t(Float32Array,e.plate.uv),2)),Nu[e.tag]=s}}}var Du;function Ry(){if(Du)return Du;let i=document.createElement("canvas");i.width=256,i.height=96;let t=i.getContext("2d");t.fillStyle="#e9e4d4",t.fillRect(0,0,256,96),t.strokeStyle="#1d3557",t.lineWidth=6,t.strokeRect(5,5,246,86),t.fillStyle="#1d3557",t.font="900 46px Arial Black, Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("VWFEST",128,50);let e=new vn(i);return e.colorSpace=Fe,Du=new se({map:e,roughness:.6})}var Lu=new Map,Cy=()=>Lu.get(0)||(Lu.set(0,new se({vertexColors:!0,roughness:.55,metalness:.15})),Lu.get(0)),Cp=new Map;function Py(i,t,e){let n=i+t+"/"+e,s=Cp.get(n);if(s)return s;s=Uu[i].clone();let r=s.attributes.color,a=s.attributes.position,o=new ft(t),c=new ft(e??15129792),l=i==="camper";for(let h=0;h<r.count;h++){let u=r.getX(h),d=r.getY(h),f=r.getZ(h);if(Math.abs(u-.247)<.01&&Math.abs(d-.247)<.01&&Math.abs(f-.247)<.01){let p=l&&a.getY(h)>1.04?c:o;r.setXYZ(h,p.r*.85,p.g*.85,p.b*.85)}else u>.975&&d>.975&&f>.975&&r.setXYZ(h,c.r,c.g,c.b)}return Cp.set(n,s),s}var Iy=["bug","baja","ghia"],Dy=["camper","wagon","safari"],Ly=0,Ny=0;function Fu(i,t,e,n={}){Ay();let s=i==="big"?Dy[Ny++%3]:Iy[Ly++%3],r=new Jt;r.rotation.y=Math.PI;let a=new St(Py(s,t,e),Cy());if(a.userData.noBatch=!0,r.add(a),Nu[s]){let l=new St(Nu[s],Ry());l.userData.noBatch=!0,r.add(l)}let o=new Jt;o.add(r),n.tilt&&(o.rotation.z=n.tilt);let c=Uu[s].boundingBox.getSize(new I);return o.userData.size=[c.x,c.y,c.z],o}var Lc=class{constructor(t){this.T=t,this.cache={};let e=n=>new se(n);this.sand=e({map:t.sand,bumpMap:t.sandBump,bumpScale:3,roughness:.97,metalness:0,color:13615792}),t.sand.repeat.set(90,90),t.sandBump.repeat.set(90,90),this.concrete=e({map:t.concrete,bumpMap:t.concreteBump,bumpScale:1.5,roughness:.88,metalness:.02}),t.concrete.repeat.set(10,10),t.concreteBump.repeat.set(10,10),this.fence=e({color:9281190,map:t.rust,roughnessMap:t.rustRough,bumpMap:t.corr,bumpScale:2.5,metalness:.75,roughness:1}),this.fenceDark=e({color:3818056,map:t.rust,roughnessMap:t.rustRough,metalness:.7,roughness:1}),this.wood=e({color:16777215,map:t.wood,roughness:.85,metalness:0}),this.tire=e({color:1381655,roughness:.92,metalness:0}),this.glass=e({color:660761,roughness:.08,metalness:.95}),this.chrome=e({color:13620954,roughness:.18,metalness:1}),this.lampBulb=new Ae({color:new ft(5,3.2,1.4),toneMapped:!1}),this.lampBulbT=new Ae({color:new ft(1.2,4.5,3.4),toneMapped:!1}),this.headlight=e({color:15328456,emissive:4867120,emissiveIntensity:.6,roughness:.2,metalness:.2}),this.tarp=e({color:4151882,roughness:.95})}paint(t){let e="p"+t;return this.cache[e]||(this.cache[e]=new se({color:t,map:this.T.rust,roughnessMap:this.T.rustRough,metalness:.55,roughness:1}))}flat(t,e=.8,n=.1){let s="f"+t+e+n;return this.cache[s]||(this.cache[s]=new se({color:t,roughness:e,metalness:n}))}},Uy=[6010272,14733722,14252330,11680302,6197184,13619140,9087050,13803834],Ou=()=>Nn(Uy),Cs=(i,t,e,n,s,r,a,o,c=14,l=9)=>{let h=new St(new jn(i,c,l),o);return h.scale.set(t,e,n),h.position.set(s,r,a),h},Qe=(i,t,e,n,s,r,a)=>{let o=new St(new ae(i,t,e),a);return o.position.set(n,s,r),o},Ni=(i,t,e,n,s,r,a=!0,o=12)=>{let c=new St(new sn(i,i,t,o),r);return a&&(c.rotation.z=Math.PI/2),c.position.set(e,n,s),c};function Pp(i,t,e,n,s=.34){let r=new Jt;return r.add(Ni(s,.22,0,0,0,i.tire,!0,14)),r.add(Ni(s*.55,.24,0,0,0,i.chrome,!0,8)),r.position.set(t,e,n),r}function Ip(i,t,e={}){let n=new Jt,s=i.paint(t);n.add(Cs(1,.9,.5,1.95,0,.78,0,s,18,10)),n.add(Cs(1,.72,.42,.95,0,1.17,.12,i.glass,16,8)),n.add(Cs(1,.74,.28,.95,0,1.42,.12,s,16,8));for(let r of[-1,1])for(let a of[-1,1])n.add(Cs(1,.22,.32,.55,r*.86,.5,a*1.2,s,10,8)),e.missing&&r===1&&a===1||n.add(Pp(i,r*.84,.34,a*1.2));for(let r of[-1,1])n.add(Cs(.12,1,1,1,r*.55,.92,-1.78,i.headlight,8,6));if(n.add(Qe(1.5,.08,.1,0,.44,-2.02,i.chrome)),n.add(Qe(1.5,.08,.1,0,.44,2.02,i.chrome)),n.add(Qe(.5,.1,.05,0,.78,1.92,i.fenceDark)),e.door){let r=Qe(.05,.5,1,.92,.9,-.2,s);r.rotation.y=.9,r.position.x=1.25,r.position.z=-.85,n.add(r)}return e.tilt&&(n.rotation.z=e.tilt),n.userData.size=[1.9,1.7,4.1],n}function Dp(i,t,e=15129792,n={}){let s=new Jt,r=i.paint(t),a=i.paint(e);s.add(Qe(2,.85,4.5,0,.78,0,r)),s.add(Qe(1.96,.9,4.4,0,1.66,0,a)),s.add(Qe(2.04,.1,4.55,0,1.19,0,r)),s.add(Qe(2,.08,4.5,0,2.15,0,r));for(let h of[-1,1])s.add(Qe(.03,.55,3.8,h*.99,1.7,.1,i.glass)),s.add(Qe(.03,.14,.7,h*1.01,.82,.8,i.fenceDark));s.add(Qe(1.7,.6,.04,0,1.68,-2.2,i.glass));let o=Qe(1.1,.8,.1,-.5,.78,-2.28,r);o.rotation.y=.3;let c=Qe(1.1,.8,.1,.5,.78,-2.28,r);c.rotation.y=-.3,s.add(o,c);let l=Ni(.17,.04,0,.85,-2.43,i.chrome,!1,14);l.rotation.x=Math.PI/2,s.add(l);for(let h of[-1,1]){s.add(Cs(.13,1,1,.6,h*.72,.8,-2.36,i.headlight,8,6));for(let u of[-1.4,1.5])n.missing&&h===1&&u===1.5||s.add(Pp(i,h*.95,.38,u,.38))}return s.add(Qe(2.1,.1,.12,0,.45,-2.45,i.chrome)),s.add(Qe(2.1,.1,.12,0,.45,2.3,i.chrome)),n.tilt&&(s.rotation.z=n.tilt),s.userData.size=[2.1,2.2,4.6],s}function Bu(i,t=4){let e=new Jt;for(let n=0;n<t;n++){let s=new St(new Di(.4,.18,8,14),i.tire);s.rotation.x=Math.PI/2,s.position.set($(-.04,.04),.18+n*.3,$(-.04,.04)),e.add(s)}return e.userData.size=[1,.3*t+.1,1],e}function zu(i,t){let e=new Jt;e.add(Ni(.3,.9,0,.45,0,i.paint(t),!1,12));for(let n of[.2,.7])e.add(Ni(.31,.04,0,n,0,i.fenceDark,!1,12));return e.userData.size=[.62,.9,.62],e}function ss(i,t=1){let e=new Jt;e.add(Qe(t,t,t,0,t/2,0,i.wood));for(let[n,s]of[[-1,-1],[1,-1],[-1,1],[1,1]])e.add(Qe(.07,t*1.02,.07,n*t/2,t/2,s*t/2,i.fenceDark));return e.userData.size=[t,t,t],e}function Lp(i,t){let e=new Jt;e.add(Ni(.09,5.2,0,2.6,0,i.fenceDark,!1,8)),e.add(Qe(.12,.12,1.1,0,5.15,-.5,i.fenceDark)),e.add(Qe(.5,.12,.3,0,5.08,-1.1,i.fenceDark));let n=new St(new jn(.17,8,6),t?i.lampBulbT:i.lampBulb);return n.position.set(0,4.98,-1.1),n.userData.bulb=!0,e.add(n),e.userData.size=[.4,5.2,.4],e.userData.bulbPos=new I(0,4.9,-1.1),e}function Np(i){let t=new Jt,e=i.flat(3103288,.9,0),n=$(1.6,3.2);if(t.add(Ni(.22,n,0,n/2,0,e,!1,8)),t.add(Cs(.22,1,1,1,0,n,0,e,8,5)),Math.random()<.8){let s=Ni(.13,.7,.4,n*.6,0,e,!1,6);t.add(s),t.add(Ni(.13,.5,.4+.32,n*.6+.3,0,e,!1,6)),t.children[t.children.length-1].rotation.z=0}return t}function Up(i,t){let e=new St(new la(t,0),i.flat(7035464,.95,0));e.scale.set($(.9,1.5),$(.5,.9),$(.9,1.4)),e.rotation.set($(3),$(3),$(3)),e.position.y=t*.3;let n=new Jt;return n.add(e),n}var rs=(i,t,e={})=>Fu("small",t,null,e),Er=(i,t,e,n={})=>Fu("big",t,e,n);var Za=new I;function Hn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Za.copy(t),Za[n]=0,Za.normalize();let l=.5*a/(a+o),h=1-Za.angleTo(i)/c;return Math.sign(Za[e])===1?h*l:o/(a+o)+l+l*(1-h)}var Nc=class i extends ae{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new I,l=new I,h=new I(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,v=new I,g=.5/a;for(let m=0,b=0;m<u.length;m+=3,b+=2)switch(c.fromArray(u,m),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[m+0]=h.x*Math.sign(c.x)+l.x*r,u[m+1]=h.y*Math.sign(c.y)+l.y*r,u[m+2]=h.z*Math.sign(c.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/p)){case 0:v.set(1,0,0),f[b+0]=Hn(v,l,"z","y",r,n),f[b+1]=1-Hn(v,l,"y","z",r,e);break;case 1:v.set(-1,0,0),f[b+0]=1-Hn(v,l,"z","y",r,n),f[b+1]=1-Hn(v,l,"y","z",r,e);break;case 2:v.set(0,1,0),f[b+0]=1-Hn(v,l,"x","z",r,t),f[b+1]=Hn(v,l,"z","x",r,n);break;case 3:v.set(0,-1,0),f[b+0]=1-Hn(v,l,"x","z",r,t),f[b+1]=1-Hn(v,l,"z","x",r,n);break;case 4:v.set(0,0,1),f[b+0]=1-Hn(v,l,"x","y",r,t),f[b+1]=1-Hn(v,l,"y","x",r,e);break;case 5:v.set(0,0,-1),f[b+0]=Hn(v,l,"x","y",r,t),f[b+1]=1-Hn(v,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var be=(i,t)=>i+Math.random()*(t-i);function Ka(i,t){let e=document.createElement("canvas");e.width=e.height=i,t(e.getContext("2d"),i);let n=new vn(e);return n.wrapS=n.wrapT=wn,n.anisotropy=4,n}var Fy=(i,t)=>Ka(512,(e,n)=>{e.fillStyle=i,e.fillRect(0,0,n,n);for(let s=0;s<2600;s++){e.strokeStyle=`rgba(255,255,255,${be(.01,.04)})`;let r=be(0,n);e.beginPath(),e.moveTo(be(0,n),r),e.lineTo(be(0,n),r+be(-2,2)),e.stroke()}for(let s=0;s<160;s++){e.strokeStyle=t,e.globalAlpha=be(.15,.5),e.lineWidth=be(.5,1.6);let r=be(0,n),a=be(0,n);e.beginPath(),e.moveTo(r,a),e.lineTo(r+be(-30,30),a+be(-6,6)),e.stroke()}e.globalAlpha=1;for(let s=0;s<900;s++)e.fillStyle=`rgba(0,0,0,${be(.1,.35)})`,e.fillRect(be(0,n),be(0,n),1.5,1.5)}),Oy=()=>Ka(256,(i,t)=>{let e=i.createImageData(t,t);for(let n=0;n<e.data.length;n+=4){let s=120+Math.random()*90;e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}i.putImageData(e,0,0)}),By=()=>Ka(256,(i,t)=>{i.fillStyle="rgb(128,128,255)",i.fillRect(0,0,t,t);for(let e=0;e<5e3;e++){let n=be(0,t),s=be(0,t),r=be(1,2.2),a=i.createRadialGradient(n-r*.4,s-r*.4,0,n,s,r);a.addColorStop(0,"rgb(90,90,255)"),a.addColorStop(1,"rgba(170,170,255,0)"),i.fillStyle=a,i.beginPath(),i.arc(n,s,r,0,7),i.fill()}}),zy=()=>Ka(512,(i,t)=>{i.fillStyle="#4a2c17",i.fillRect(0,0,t,t);for(let e=0;e<260;e++){i.strokeStyle=`rgba(${be(20,60)},${be(10,30)},5,${be(.15,.45)})`,i.lineWidth=be(.5,3),i.beginPath();let n=be(0,t);i.moveTo(0,n);for(let s=0;s<=16;s++)i.lineTo(s/16*t,n+=be(-3,3)+Math.sin(s*.7+e)*1.4);i.stroke()}for(let e=0;e<40;e++)i.fillStyle="rgba(210,170,120,0.08)",i.fillRect(be(0,t),be(0,t),be(10,60),be(1,3))}),Ja;function ky(){if(Ja)return Ja;let i=Oy(),t=By(),e=(n,s,r,a)=>new se({map:Fy(n,s),roughnessMap:i,roughness:r,metalness:a,color:16777215});Ja={blued:e("#1b1e24","#9aa3ad",.42,.9),park:e("#34372f","#8d9184",.78,.55),steel:e("#4a4e54","#cfd4da",.3,.95),poly:new se({color:1908256,roughness:.72,metalness:0,normalMap:t,normalScale:new at(.9,.9)}),polyTan:new se({color:7299146,roughness:.75,normalMap:t,normalScale:new at(.6,.6)}),wood:new se({map:zy(),roughness:.5,metalness:0,color:16777215}),brass:new se({color:11569722,metalness:1,roughness:.3}),dot:new Ae({color:new ft(.4,2.2,.8),toneMapped:!1}),dotR:new Ae({color:new ft(2.4,.3,.2),toneMapped:!1}),glass:new se({color:727586,metalness:.9,roughness:.05,emissive:401456}),glove:new se({color:1974306,roughness:.85,normalMap:t,normalScale:new at(.4,.4)}),sleeve:new se({color:3884598,roughness:.95,normalMap:t,normalScale:new at(.25,.25)})};for(let n of Object.values(Ja))n.map&&(n.map.colorSpace=Fe);return Ja}function En(i,t,e,n,{x:s=0,bevel:r=.0025,curve:a=6}={}){let o=new fr;t.forEach(([u,d],f)=>f?o.lineTo(u,d):o.moveTo(u,d));let c=new xa(o,{depth:e-r*2,bevelEnabled:!0,bevelThickness:r,bevelSize:r,bevelSegments:2,curveSegments:a});c.translate(0,0,-(e-r*2)/2),c.rotateY(-Math.PI/2);let l=c.attributes.uv;for(let u=0;u<l.count;u++)l.setXY(u,l.getX(u)*4,l.getY(u)*4);let h=new St(c,n);return h.position.x=s,i.add(h),h}var Me=(i,t,e,n,s,r,a,o,c=.004,l=0)=>{let h=new St(new Nc(t,e,n,2,c),o);return h.position.set(s,r,a),h.rotation.x=l,i.add(h),h},ku=(i,t,e,n,s,r,a,o,c=0)=>{let l=new St(new ae(t,e,n),o);return l.position.set(s,r,a),l.rotation.x=c,i.add(l),l},qe=(i,t,e,n,s,r,a,o=20,c)=>{let l=new St(new sn(c??t,t,e,o,1),a);return l.rotation.x=Math.PI/2,l.position.set(n,s,r),i.add(l),l},Hu=(i,t,e,n,s,r,a)=>{let o=new St(new Di(t,e,8,24),a);return o.position.set(n,s,r),i.add(o),o};function $a(i,t,e,n){let s=new St(new Di(.022,.0035,6,18,Math.PI*1.15),n.poly);s.rotation.set(0,Math.PI/2,Math.PI*.93),s.position.set(0,e,t),i.add(s);let r=new St(new Di(.012,.003,6,10,Math.PI*.6),n.steel);r.rotation.set(0,Math.PI/2,Math.PI*1.15),r.position.set(0,e+.006,t+.004),i.add(r)}function Vu(i,t,e,n,s){Me(i,.004,.009,.006,0,n+.004,t,s.blued,.001);let r=qe(i,.0016,.002,0,n+.006,t+.003,s.dot,8);r.rotation.x=0,r.rotation.z=Math.PI/2,r.rotation.y=Math.PI/2;for(let a of[-1,1]){Me(i,.005,.009,.008,a*.0055,n+.004,e,s.blued,.001);let o=qe(i,.0013,.002,a*.0055,n+.006,e-.0045,s.dotR,8);o.rotation.x=0}}var Fp={pistol(i,t){let e=new Jt;i.add(e),i.userData.slide=e,En(e,[[.02,0],[-.17,0],[-.172,.022],[-.165,.03],[.012,.03],[.02,.022]],.026,t.blued,{bevel:.002}),Me(e,.0262,.012,.032,0,.014,-.045,t.steel,.001);for(let n of[-1,1])for(let s=0;s<9;s++)Me(e,.0015,.022,.0016,n*.0132,.014,.008-s*.0036,t.steel,4e-4);for(let n of[-1,1])for(let s=0;s<6;s++)Me(e,.0015,.016,.0016,n*.0132,.012,-.13-s*.0036,t.steel,4e-4);Vu(e,-.16,.008,.03,t),qe(e,.0075,.012,0,.012,-.172,t.steel,20),qe(e,.0045,.014,0,.012,-.175,t.poly,12),En(i,[[.03,-.002],[-.16,-.002],[-.16,-.012],[-.06,-.016],[-.05,-.022],[0,-.018],[.006,-.03],[.022,-.13],[.06,-.13],[.045,-.02],[.034,-.008]],.028,t.poly,{bevel:.003});for(let n=0;n<4;n++)Me(i,.0285,.003,.012,0,-.012,-.075-n*.012,t.poly,.001);return $a(i,-.02,-.03,t),Me(i,.03,.006,.042,0,-.133,.042,t.blued,.002,-.2),Me(i,.004,.006,.014,.0145,-.008,-.02,t.steel,.001),Me(i,.0035,.008,.02,.0145,.005,.02,t.steel,.001),Me(i,.012,.014,.008,0,.018,.032,t.steel,.002),{muzzle:-.18,eject:-.045,pos:[.17,-.17,-.38],lz:-.04}},smg(i,t){En(i,[[.09,0],[-.2,0],[-.2,.05],[.09,.05]],.05,t.park,{bevel:.004}),qe(i,.016,.12,0,.026,-.26,t.blued,20);for(let e=0;e<6;e++)Hu(i,.017,.0022,0,.026,-.22-e*.015,t.steel).rotation.y=0;for(let e=0;e<6;e++)Me(i,.052,.003,.012,0,.051,-.18+e*.03,t.blued,.001);Vu(i,-.19,.06,.052,t),Me(i,.036,.16,.026,0,-.08,-.06,t.blued,.004,.12);for(let e=0;e<8;e++)Me(i,.038,.004,.028,0,-.01-e*.018,-.06+e*.002,t.steel,.001,.12);return En(i,[[0,0],[.03,0],[.05,-.11],[.02,-.11]],.032,t.poly,{bevel:.004}),$a(i,-.005,-.012,t),qe(i,.006,.2,.018,.02,.18,t.steel,10),qe(i,.006,.2,-.018,.02,.18,t.steel,10),Me(i,.05,.07,.012,0,0,.28,t.poly,.004),Me(i,.012,.012,.03,.03,.03,.02,t.steel,.003),{muzzle:-.33,eject:-.05,pos:[.19,-.19,-.4],lz:-.2}},shotgun(i,t){En(i,[[.06,-.01],[-.14,-.01],[-.14,.055],[.04,.055],[.06,.04]],.05,t.blued,{bevel:.004}),qe(i,.0125,.6,0,.038,-.44,t.blued,22),qe(i,.0145,.52,0,0,-.4,t.blued,22),Hu(i,.016,.003,0,0,-.66,t.steel);let e=new St(new jn(.003,10,8),t.brass);e.position.set(0,.052,-.735),i.add(e);let n=En(i,[[-.28,-.02],[-.46,-.02],[-.46,.02],[-.28,.02]],.05,t.wood,{bevel:.008});for(let s=0;s<9;s++)Me(i,.052,.004,.006,0,-.022,-.3-s*.017,t.wood,.002);return i.userData.pump=n,En(i,[[.06,.04],[.32,.03],[.34,.05],[.36,-.1],[.3,-.11],[.1,-.03],[.06,-.01]],.042,t.wood,{bevel:.008}),Me(i,.044,.15,.02,0,-.03,.355,t.poly,.006,-.12),$a(i,.035,-.02,t),Me(i,.051,.012,.05,0,.022,-.05,t.steel,.002),{muzzle:-.75,eject:-.05,pos:[.2,-.2,-.4],lz:-.38}},rifle(i,t){En(i,[[.12,0],[-.17,0],[-.17,.045],[.12,.045]],.052,t.park,{bevel:.004});for(let n=0;n<18;n++)ku(i,.042,.004,.006,0,.049,-.16+n*.016,t.blued);En(i,[[-.17,-.005],[-.44,-.005],[-.44,.05],[-.17,.05]],.056,t.polyTan,{bevel:.006});for(let n=0;n<7;n++)for(let s of[-1,1])ku(i,.004,.018,.022,s*.028,.022,-.2-n*.034,t.poly);qe(i,.0095,.26,0,.022,-.56,t.blued,18),qe(i,.016,.05,0,.022,-.71,t.park,6);for(let n=0;n<3;n++)Me(i,.004,.006,.03,.017,.03,-.71,t.poly,.001).rotation.z=n;Me(i,.008,.045,.012,0,.07,-.43,t.park,.002),qe(i,.019,.1,0,.1,-.05,t.blued,24),qe(i,.023,.03,0,.1,-.11,t.blued,24),qe(i,.021,.025,0,.1,.01,t.blued,24);let e=qe(i,.019,.002,0,.1,-.126,t.glass,24);Me(i,.024,.03,.05,0,.068,-.05,t.park,.003),En(i,[[0,0],[-.06,0],[-.06,-.12],[-.03,-.14],[0,-.12]],.03,t.park,{bevel:.003}).rotation.x=-.15;for(let n=0;n<6;n++)ku(i,.032,.003,.03,0,-.03-n*.02,-.03+n*.003,t.blued,-.15);return En(i,[[.03,-0],[.07,-0],[.09,-.11],[.055,-.115]],.032,t.poly,{bevel:.004}),$a(i,0,-.012,t),qe(i,.014,.14,0,.025,.19,t.poly,16),En(i,[[.2,.05],[.36,.045],[.36,-.07],[.33,-.08],[.2,0]],.044,t.polyTan,{bevel:.006}),Me(i,.046,.13,.014,0,-.012,.365,t.poly,.005),Me(i,.014,.014,.034,.03,.03,0,t.steel,.003),{muzzle:-.74,eject:-.03,pos:[.2,-.2,-.4],lz:-.3}},lmg(i,t){En(i,[[.12,-.01],[-.2,-.01],[-.2,.06],[.12,.06]],.07,t.park,{bevel:.005}),Me(i,.075,.03,.2,0,.075,-.06,t.park,.004);for(let e=0;e<12;e++)Me(i,.05,.005,.008,0,.093,-.15+e*.016,t.blued,.001);qe(i,.024,.36,0,.025,-.38,t.blued,22);for(let e=0;e<14;e++)Hu(i,.026,.004,0,.025,-.24-e*.02,t.park);qe(i,.012,.16,0,.025,-.64,t.blued,16),qe(i,.018,.06,0,.025,-.73,t.park,8),Me(i,.13,.13,.15,0,-.1,-.03,t.polyTan,.012);for(let e=0;e<5;e++)Me(i,.132,.006,.152,0,-.15+e*.025,-.03,t.poly,.002);for(let e=0;e<6;e++)qe(i,.005,.03,.04,.05,-.01+e*.011,t.brass,8).rotation.set(0,0,Math.PI/2);En(i,[[.04,-.01],[.08,-.01],[.1,-.12],[.065,-.125]],.034,t.poly,{bevel:.004}),$a(i,.01,-.02,t),En(i,[[.12,.05],[.4,.04],[.4,-.08],[.36,-.09],[.12,-.01]],.05,t.poly,{bevel:.007}),Vu(i,-.66,.08,.093,t);for(let e of[-1,1]){let n=qe(i,.005,.18,e*.03,-.05,-.62,t.steel,8);n.rotation.x=Math.PI/2+.35}return{muzzle:-.76,eject:-.02,pos:[.2,-.21,-.4],lz:-.3}}},Gu;function Hy(){if(Gu)return Gu;let i=Ka(128,(t,e)=>{let n=e/2,s=t.createRadialGradient(n,n,0,n,n,n);s.addColorStop(0,"rgba(255,250,230,1)"),s.addColorStop(.25,"rgba(255,190,90,0.9)"),s.addColorStop(1,"rgba(255,90,20,0)"),t.fillStyle=s;for(let r=0;r<7;r++)t.save(),t.translate(n,n),t.rotate(r/7*6.283+be(-.2,.2)),t.beginPath(),t.moveTo(0,-6),t.lineTo(n*be(.7,1),0),t.lineTo(0,6),t.fill(),t.restore();t.beginPath(),t.arc(n,n,n*.35,0,7),t.fill()});return i.wrapS=i.wrapT=Bn,Gu=new Ae({map:i,color:new ft(3,2.2,1.2),blending:$e,transparent:!0,depthWrite:!1,side:ln,toneMapped:!1})}function Op(i,t=!0){let e=ky(),n=new Jt,s=(Fp[i]||Fp.rifle)(n,e);if(!t){let p=new Le;return n.userData={muzzle:p,eject:p,base:new I},n}Me(n,.05,.08,.075,0,-.065,.035,e.glove,.018).rotation.x=.25;for(let p=0;p<3;p++)Me(n,.052,.016,.03,.002,-.04-p*.02,0,e.glove,.007);let r=new St(new sn(.034,.042,.32,16),e.sleeve);r.rotation.x=Math.PI/2-.25,r.position.set(.02,-.13,.22),n.add(r);let a=Me(n,.055,.05,.09,i==="pistol"?-.018:-.028,i==="pistol"?-.07:-.03,s.lz,e.glove,.016),o=new St(new sn(.034,.042,.34,16),e.sleeve);o.rotation.set(Math.PI/2-.1,.35,0),o.position.set(-.1,-.12,s.lz+.22),n.add(o),n.traverse(p=>{p.isMesh&&(p.castShadow=!1)});let c=new Le;c.position.set(0,i==="pistol"?.012:.022,s.muzzle),n.add(c);let l=new Le;l.position.set(.04,.03,s.eject),n.add(l);let h=new Jt,u=Hy();for(let p=0;p<2;p++){let v=new St(new yn(.06,.16),u);v.rotation.set(Math.PI/2,p*Math.PI/2,0),v.position.z=-.07,h.add(v)}let d=new St(new yn(.12,.12),u);h.add(d),h.position.copy(c.position),h.visible=!1,n.add(h);let f=0;return n.traverse(p=>{p.isMesh&&(f+=(p.geometry.index?p.geometry.index.count:p.geometry.attributes.position.count)/3)}),n.userData={muzzle:c,eject:l,flash:h,slide:n.userData.slide,pump:n.userData.pump,base:new I(...s.pos),tris:Math.round(f)},n.userData.base.z-=.1,n.userData.base.x-=.03,n.position.copy(n.userData.base),n.scale.setScalar(.9),n}var He={pistol:{id:"pistol",name:"Dustdevil .45",dmg:30,rpm:380,auto:!1,mag:12,reserve:60,reload:1.25,spread:.004,pellets:1,kick:.01,shake:.12,price:0,head:3.2,snd:"pistol",range:90},smg:{id:"smg",name:"Rattler SMG",dmg:22,rpm:820,auto:!0,mag:32,reserve:160,reload:1.6,spread:.014,pellets:1,kick:.006,shake:.08,price:600,head:2.4,snd:"smg",range:80},shotgun:{id:"shotgun",name:"Sidewinder 12g",dmg:17,rpm:78,auto:!1,mag:6,reserve:42,reload:.5,perShell:!0,spread:.055,pellets:9,kick:.04,shake:.4,price:1200,head:2,snd:"shotgun",range:30},rifle:{id:"rifle",name:"Ridgeback AR",dmg:42,rpm:620,auto:!0,mag:30,reserve:150,reload:1.9,spread:.007,pellets:1,kick:.013,shake:.18,price:1800,head:2.6,snd:"rifle",range:120},lmg:{id:"lmg",name:"Hog Hammer LMG",dmg:40,rpm:700,auto:!0,mag:100,reserve:300,reload:3.8,spread:.012,pellets:1,kick:.012,shake:.2,price:0,crateOnly:!0,head:2.4,snd:"lmg",range:110}},ja=["smg","shotgun","rifle","lmg"],Vb=new se({color:2895669,metalness:.9,roughness:.34}),Gb=new se({color:5593439,metalness:.85,roughness:.28}),Wb=new se({color:4072982,metalness:0,roughness:.55}),Xb=new se({color:1626528,metalness:.4,roughness:.3,emissive:678469,emissiveIntensity:.8}),qb=new se({color:12946539,roughness:.7}),Yb=new se({color:4016698,roughness:.9}),Zb=new se({color:1776928,roughness:.8});function Qa(i,t=!0){return Op(i,t)}var vi=-24,Fc=i=>i>vi?"A":"B";function Bp(i,t="#18d1a0",e=512,n=256){let s=document.createElement("canvas");s.width=e,s.height=n;let r=s.getContext("2d");r.fillStyle="rgba(8,12,16,0.82)",r.fillRect(0,0,e,n),r.strokeStyle=t,r.lineWidth=6,r.strokeRect(8,8,e-16,n-16),r.textAlign="center",r.textBaseline="middle",i.forEach((o,c)=>{r.font=`${o.w||700} ${o.s}px system-ui, "Segoe UI", Arial, sans-serif`,r.fillStyle=o.c||"#fff",r.fillText(o.t,e/2,o.y)});let a=new vn(s);return a.colorSpace=Fe,a.anisotropy=4,a}var Uc=class{constructor(t,e,n){this.scene=t,this.T=e,this.M=new Lc(e),this.tier=n,this.colliders=[],this.windows=[],this.buys=[],this.lamps=[],this.dyn=[],this.fall=[],this.staticGroup=new Jt,this.root=new Jt,t.add(this.root),this.build(),this.batch()}addCol(t,e,n,s,r=3,a={}){let o={x0:t,x1:e,z0:n,z1:s,y0:a.y0||0,y1:r,...a};return this.colliders.push(o),o}box(t,e,n,s,r,a,o,c={}){let l=new St(new ae(t,e,n),o);return l.position.set(s,r,a),l.castShadow=c.cast!==!1,l.receiveShadow=!0,(c.dynamic?this.root:this.staticGroup).add(l),l}place(t,e,n,s=0,r=!0){if(t.position.x+=e,t.position.z+=n,t.rotation.y=s,t.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),this.staticGroup.add(t),r&&t.userData.size){let[a,o,c]=t.userData.size;Math.abs(Math.sin(s))>.7&&([a,c]=[c,a]),this.addCol(e-a/2+.05,e+a/2-.05,n-c/2+.05,n+c/2-.05,o)}return t}build(){let{M:t,T:e,scene:n}=this;this.buildSky(),this.buildGround();let s=3.2,r=.4,a=(h,u,d,f=[],p=t.fence)=>this.wall("x",h,u,d,f,s,r,p),o=(h,u,d,f=[],p=t.fence)=>this.wall("z",h,u,d,f,s,r,p);a(24,-24,24,[{c:-10,id:"S1"},{c:11,id:"S2"}]),o(24,-24,24,[{c:-4,id:"E1",area:"A"}]),o(-24,-24,24,[{c:6,id:"W1",area:"A"}]),a(-24,-24,24,[{c:0,id:"DOOR",door:!0,w:6}]),o(24,-52,-24,[{c:-40,id:"E2",area:"B"}]),o(-24,-52,-24,[{c:-38,id:"W2",area:"B"}]),a(-52,-24,24,[{c:0,id:"N1",area:"B"}]);let c=(h,u,d,f)=>{let p=new St(new yn(h,u),t.concrete);p.rotation.x=-Math.PI/2,p.position.set(d,.015,f),p.receiveShadow=!0,this.staticGroup.add(p)};c(48,48,0,0),c(48,28,0,-38),this.buildGate();let l=this.place.bind(this);l(rs(t,6010272,{door:!0}),-9,-9,.2*0),l(rs(t,14252330,{missing:!0,tilt:.04}),13,-10,Math.PI/2),l(Er(t,6197184),9,11,Math.PI/2),l(Er(t,14252330,15129792,{missing:!0}),-15,1,0),l(rs(t,14733722),-4,16,Math.PI/2+0),l(rs(t,11680302,{tilt:-.05}),19,16,0),l(Er(t,9087050,15129792),3,-14,Math.PI/2);for(let[h,u,d]of[[17,2,5],[-20,-5,4],[-3,-4,3],[-19,19,6],[21,-20,4]])l(Bu(t,d),h,u);for(let[h,u,d]of[[5,19,3829413],[6.2,19.8,11680302],[4.4,20.6,9087050],[-1,-19,14252330],[.2,-20,3829413]])l(zu(t,d),h,u);l(ss(t,1.1),-21,12),l(ss(t,.9),-20.8,13.2),l(ss(t,1.3),21,9),l(ss(t,1),20.4,10.4),this.shack(18,-17,6,5),l(rs(t,13619140,{missing:!0}),-12,-36,Math.PI/2),l(rs(t,6010272,{tilt:.05}),14,-46,.3*0),l(Er(t,11680302,15129792),6,-35,0),l(Er(t,6010272,15129792,{tilt:.04}),-10,-47,Math.PI/2),l(rs(t,13803834,{door:!0}),0,-43,Math.PI/2);for(let[h,u,d]of[[18,-30,5],[-20,-29,3],[19,-36,4],[-3,-30,4]])l(Bu(t,d),h,u);for(let[h,u,d]of[[-19,-49,14252330],[-18,-50,3829413],[20,-50,11680302]])l(zu(t,d),h,u);l(ss(t,1.2),21,-46),l(ss(t,1),-21,-42),l(ss(t,.9),20.6,-47.4);for(let[h,u,d,f]of[[-11,11,0,.6],[14,5,0,2.6],[-13,-12,1,-.5],[10,-19,0,3.4],[-8,-30,0,.3],[11,-40,1,3],[-4,-49,0,1.4]]){let p=Lp(this.M,!!d);p.position.set(h,0,u),p.rotation.y=f,p.traverse(g=>{g.isMesh&&(g.castShadow=!g.userData.bulb)}),p.updateMatrixWorld(!0),this.addCol(h-.2,h+.2,u-.2,u+.2,5);let v=p.userData.bulbPos.clone().applyMatrix4(p.matrixWorld);this.lamps.push({pos:v,teal:!!d,ph:$(100)}),this.staticGroup.add(p)}this.wallBuy("smg",-14,vi+.25,0),this.wallBuy("shotgun",23.75,-15,-Math.PI/2),this.wallBuy("rifle",-23.75,-30,Math.PI/2),this.buildCrate(-17.5,14.5),this.scenery(),this.buildLights()}wall(t,e,n,s,r,a,o,c){let{M:l}=this,h=p=>p.w||3.2,u=[...r].sort((p,v)=>p.c-v.c),d=n,f=(p,v)=>{if(v-p<.05)return;let g=v-p,m=(p+v)/2,b=Math.max(1,Math.ceil(g/8));for(let w=0;w<b;w++){let y=p+g*w/b,S=p+g*(w+1)/b;this.wseg(t,e,y,S,a,o,c)}};for(let p of u)f(d,p.c-h(p)/2),this.opening(t,e,p,a,o,c),d=p.c+h(p)/2;f(d,s)}wseg(t,e,n,s,r,a,o){let c=s-n,l=(n+s)/2;t==="x"?(this.box(c,r,a,l,r/2,e,o),this.addCol(n,s,e-a/2,e+a/2,r),this.box(.35,r+.5,.55,n,(r+.5)/2,e,this.M.fenceDark),this.box(c,.1,.12,l,r+.4,e,this.M.fenceDark)):(this.box(a,r,c,e,r/2,l,o),this.addCol(e-a/2,e+a/2,n,s,r),this.box(.55,r+.5,.35,e,(r+.5)/2,n,this.M.fenceDark),this.box(.12,.1,c,e,r+.4,l,this.M.fenceDark))}opening(t,e,n,s,r,a){let{M:o}=this,c=n.w||3.2;if(n.door){t==="x"&&(this.box(.5,s+.8,.7,n.c-c/2,(s+.8)/2,e,o.fenceDark),this.box(.5,s+.8,.7,n.c+c/2,(s+.8)/2,e,o.fenceDark)),this.doorInfo={c:n.c,z:e,w:c};return}let l=t==="x"?{x:0,z:e>0?1:-1}:{x:e>0?1:-1,z:0};t==="x"&&e===-52&&(l.z=-1);let h=t==="x"?n.c:e,u=t==="x"?e:n.c,d=.95,f=2.5,p=c,v=(D,N,k)=>t==="x"?[D,N,r]:[r,N,D],[g,m,b]=v(p,d,0);this.box(g,m,b,h,d/2,u,a);let[w,y,S]=v(p,s-f,0);this.box(w,y,S,h,(s+f)/2,u,a);let E=o.wood;for(let D of[-1,1]){let[N,k,U]=v(.2,f-d,0);this.box(t==="x"?.2:r+.12,f-d,t==="x"?r+.12:.2,t==="x"?h+D*(p/2-.1):h,(d+f)/2,t==="x"?u:u+D*(p/2-.1),E)}this.addCol(t==="x"?h-p/2:h-r/2,t==="x"?h+p/2:h+r/2,t==="x"?u-r/2:u-p/2,t==="x"?u+r/2:u+p/2,d,{bulletOnly:!1}),this.addCol(t==="x"?h-p/2:h-r/2,t==="x"?h+p/2:h+r/2,t==="x"?u-r/2:u-p/2,t==="x"?u+r/2:u+p/2,s,{y0:f,bulletOnly:!0}),this.addCol(t==="x"?h-p/2:h-r/2,t==="x"?h+p/2:h+r/2,t==="x"?u-r/2-.02:u-p/2,t==="x"?u+r/2+.02:u+p/2,s,{noBullet:!0});let C=[],x=Math.atan2(l.x,l.z);for(let D=0;D<6;D++){let N=new St(new ae(p-.15,.2,.07),o.wood),k=new I(h+l.x*.23,d+.16+D*.255,u+l.z*.23);N.position.copy(k),N.rotation.set(0,x,$(-.05,.05)),N.castShadow=!0,N.receiveShadow=!0,N.userData={home:k,rotZ:N.rotation.z,ry:x},this.root.add(N),C.push(N)}this.windows.push({id:n.id,area:n.area||(e>vi&&t==="x"||e>0,"A"),c:new I(h,0,u),n:l,t:{x:-l.z,z:l.x},out:{x:h+l.x*1.5,z:u+l.z*1.5},in:{x:h-l.x*1.6,z:u-l.z*1.6},planks:C,count:6,attackers:0,cool:0,axis:t});let T=this.windows[this.windows.length-1];T.area=Fc(u);let P=new St(new ae(t==="x"?.3:.06,.06,t==="x"?.06:.3),new Ae({color:new ft(1.8,.3,.15),toneMapped:!1}));P.position.set(h-l.x*.3,2.85,u-l.z*.3),this.staticGroup.add(P)}removePlank(t){if(t.count<=0)return!1;let e=t.planks[t.count-1];return t.count--,e.userData.fall={vx:t.n.x*$(1,3)+$(-1,1),vy:$(1,3),vz:t.n.z*$(1,3)+$(-1,1),t:0,rx:$(-6,6),rz:$(-6,6)},this.fall.push(e),!0}addPlank(t){if(t.count>=6)return!1;let e=t.planks[t.count];t.count++,e.userData.fall=null;let n=this.fall.indexOf(e);return n>=0&&this.fall.splice(n,1),e.visible=!0,e.position.copy(e.userData.home),e.rotation.set(0,e.userData.ry,e.userData.rotZ),!0}buildGate(){let{M:t}=this,e=this.doorInfo,n=t.fence,s=new Jt,r=new St(new ae(e.w,3.4,.25),n);r.position.y=1.7,r.castShadow=r.receiveShadow=!0,s.add(r);for(let o=0;o<6;o++){let c=new St(new ae(.5,3.4,.05),o%2?new se({color:15251502,roughness:.6,metalness:.3}):t.fenceDark);c.position.set(-e.w/2+.3+o*1,1.7,.15),s.add(c)}s.position.set(e.c,0,e.z),this.root.add(s),this.door={mesh:s,open:!1,t:0,price:1250,col:this.addCol(e.c-e.w/2,e.c+e.w/2,e.z-.2,e.z+.2,3.4),pos:{x:e.c,z:e.z}};let a=new St(new yn(7.5,1.9),new Ae({map:this.T.sign,color:new ft(1.9,1.9,1.9),toneMapped:!1}));a.position.set(e.c,5,e.z+.45),this.staticGroup.add(a);for(let o of[-1,1])this.box(.18,4.4,.18,e.c+o*3.5,2.5,e.z+.4,t.fenceDark);this.signPos=new I(e.c,5,e.z+1)}shack(t,e,n,s){let{M:r}=this;this.box(n,3,s,t,1.5,e,r.fence),this.box(n+.5,.2,s+.5,t,3.1,e,r.fenceDark),this.addCol(t-n/2,t+n/2,e-s/2,e+s/2,3.2),this.box(1.4,2.1,.1,t-1.2,1.05,e+s/2+.05,r.wood,{cast:!1});let a=new St(new yn(1.4,.9),new Ae({color:new ft(2.6,1.7,.7),toneMapped:!1}));a.position.set(t+1.5,1.8,e+s/2+.03),this.staticGroup.add(a)}wallBuy(t,e,n,s){let r=He[t],a=new Jt;a.position.set(e,1.7,n),a.rotation.y=s;let o=new St(new yn(2.4,1.2),new Ae({map:Bp([{t:r.name.toUpperCase(),s:44,y:88,w:800},{t:"$"+r.price+"  \xB7  AMMO $"+Math.floor(r.price/2),s:36,y:168,c:"#ffd36b"}]),toneMapped:!1,color:new ft(.9,.9,.9)}));o.position.set(0,-.35,.04);let c=Qa(t,!1);c.position.set(0,.35,.18),c.rotation.y=Math.PI/2,c.scale.setScalar(1.7),c.userData.base=null;let l=new St(new ae(2.6,2.2,.08),this.M.fenceDark);l.position.set(0,.05,0),a.add(l,o,c),a.traverse(d=>{d.isMesh&&(d.castShadow=!1)}),this.root.add(a);let h=Math.sin(s),u=Math.cos(s);this.buys.push({id:t,price:r.price,pos:{x:e+h*.9,z:n+u*.9},name:r.name})}buildCrate(t,e){let{M:n}=this,s=new Jt;s.position.set(t,0,e),s.rotation.y=.5;let r=n.paint(2078874),a=new St(new ae(1.3,.7,.8),r);a.position.y=.35,s.add(a);let o=new Jt;o.position.set(0,.7,-.4);let c=new St(new ae(1.3,.2,.8),r);c.position.set(0,.1,.4),o.add(c),s.add(o);for(let f of[-.45,.45]){let p=new St(new ae(.1,.92,.84),n.fenceDark);p.position.set(f,.46,0),s.add(p)}let l=new St(new ae(.4,.06,.06),n.chrome);l.position.set(0,.8,.43),s.add(l);let h=new St(new yn(.8,.4),new Ae({map:Bp([{t:"LUCKY",s:70,y:70,w:900,c:"#18ffb0"},{t:"TOOLBOX",s:62,y:150,w:900,c:"#fff"},{t:"950",s:52,y:215,c:"#ffd36b"}],"#18ffb0",384,256),toneMapped:!1,color:new ft(.9,.9,.9)}));h.position.set(0,.38,.41),s.add(h),s.traverse(f=>{f.isMesh&&!f.material.isMeshBasicMaterial&&(f.castShadow=!0,f.receiveShadow=!0)});let u=new St(new sn(.5,.65,9,16,1,!0),new de({transparent:!0,depthWrite:!1,blending:$e,side:ln,uniforms:{c:{value:new ft(.1,1,.7)},k:{value:.35}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(1.-vy,2.2)*pow(f,2.5)*k); }"}));u.position.set(0,4.5,0),u.userData.noAO=!0,s.add(u),this.root.add(s),this.addCol(t-.8,t+.8,e-.8,e+.8,1);let d=new Jt;d.position.set(0,1.5,.1),s.add(d),this.crate={group:s,lid:o,hold:d,beam:u,pos:{x:t,z:e},price:950,state:"idle",t:0,weapon:null,shown:null,model:null,x:t,z:e}}buildSky(){let t=new de({side:on,depthWrite:!1,fog:!1,uniforms:{moonDir:{value:new I(-.55,.6,.58).normalize()}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vP; uniform vec3 moonDir;
        float h(vec3 p){ return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ vec3 d=normalize(vP); float y=clamp(d.y,-.2,1.);
          vec3 hor=vec3(.20,.12,.16), mid=vec3(.025,.045,.10), top=vec3(.004,.008,.03);
          vec3 c=mix(hor,mid,smoothstep(0.,.25,y)); c=mix(c,top,smoothstep(.2,.9,y)); c+=vec3(.5,.18,.1)*pow(max(0.,1.-abs(y)*4.),3.)*.35;
          vec3 g=floor(d*220.); float s=step(.9975,h(g))*smoothstep(.05,.3,y); c+=vec3(.9,.95,1.)*s*(.4+.4*h(g+3.))*0.8;
          float md=dot(d,moonDir); c+=vec3(.75,.85,1.)*smoothstep(.9992,.9996,md)*2.5; c+=vec3(.25,.35,.6)*pow(max(0.,md),60.)*.5+vec3(.1,.15,.3)*pow(max(0.,md),8.)*.25;
          gl_FragColor=vec4(c,1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.sky=new St(new jn(500,32,16),t),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.sky.userData.noAO=!0,this.scene.add(this.sky),this.moonDir=t.uniforms.moonDir.value}buildGround(){let t=new St(new yn(1200,1200),this.M.sand);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,this.scene.add(t),this.ground=t}scenery(){let{M:t}=this,e=this.staticGroup,n=(a,o)=>a>-30&&a<30&&o>-58&&o<30,s=t.flat(6967864,1,0);for(let a=0;a<26;a++){let o=$(Xe),c=$(60,190),l=Math.cos(o)*c,h=-14+Math.sin(o)*c,u=$(14,38),d=new St(new jn(1,12,6),s);d.scale.set(u*$(1.2,2),u*$(.12,.28),u*$(1,1.6)),d.position.set(l,0,h),d.rotation.y=$(3),d.receiveShadow=!0,e.add(d)}let r=t.flat(2762292,1,0);for(let a=0;a<12;a++){let o=a/12*Xe+$(-.2,.2),c=$(230,330),l=$(30,70),h=$(25,60),u=new St(new sn(l*.55,l*.8,h,6),r);u.position.set(Math.cos(o)*c,h/2-2,-14+Math.sin(o)*c),u.rotation.y=$(3),e.add(u)}for(let a=0;a<38;a++){let o,c,l=0;do{let u=$(Xe),d=$(34,90);o=Math.cos(u)*d,c=-14+Math.sin(u)*d*.9}while(n(o,c)&&++l<20);let h=Np(t);h.position.set(o,0,c),h.rotation.y=$(3),h.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),e.add(h)}for(let a=0;a<40;a++){let o,c,l=0;do{let u=$(Xe),d=$(30,110);o=Math.cos(u)*d,c=-14+Math.sin(u)*d*.9}while(n(o,c)&&++l<20);let h=Up(t,$(.4,1.8));h.position.set(o,0,c),h.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),e.add(h)}for(let a=0;a<9;a++){let o=$(Xe),c=$(34,70),l=Math.cos(o)*c,h=-14+Math.sin(o)*c*.9;if(n(l,h))continue;let u=Math.random()<.35?Dp(t,Ou(),15129792,{tilt:$(-.08,.08)}):Ip(t,Ou(),{tilt:$(-.1,.1),missing:Math.random()<.5});u.position.set(l,0,h),u.rotation.y=$(3),u.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0)}),e.add(u)}}buildLights(){let t=this.scene;this.hemi=new Ms(7309e3,3812386,.85),t.add(this.hemi),this.moon=new Ss(10335487,1.7),this.moon.castShadow=!0,this.moon.position.set(0,0,0),t.add(this.moon,this.moon.target);let e=this.moon.shadow;e.camera.left=e.camera.bottom=-34,e.camera.right=e.camera.top=34,e.camera.near=1,e.camera.far=140,e.bias=-4e-4,e.normalBias=.04,e.mapSize.set(2048,2048),this.lampPool=[];for(let s=0;s<7;s++){let r=new Ji(16756838,95,30,1.7);t.add(r),this.lampPool.push(r)}this.halos=[],this.cones=[];let n=s=>new de({transparent:!0,depthWrite:!1,blending:$e,side:ln,uniforms:{c:{value:s},k:{value:.22}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(vy,1.5)*pow(f,1.6)*k); }"});for(let s of this.lamps){let r=s.teal?new ft(.2,.9,.7):new ft(1,.62,.28),a=new Ii(new ui({map:this.T.glow,color:s.teal?new ft(.5,3,2.4):new ft(3,1.8,.7),blending:$e,depthWrite:!1,transparent:!0,fog:!1}));a.scale.setScalar(3.4),a.position.copy(s.pos),a.userData.noAO=!0,this.scene.add(a),this.halos.push(a);let o=new St(new _s(4.2,5,24,1,!0),n(r));o.position.copy(s.pos).add(new I(0,-2.5,0)),o.userData.noAO=!0,this.scene.add(o),this.cones.push(o),s.light=r}}setTier(t){this.tier=t;let e=[3,5,7][t];this.lampPool.forEach((s,r)=>s.visible=r<e),this.cones.forEach(s=>s.visible=t>0),this.moon.castShadow=t>0;let n=t===2?2048:1024;this.moon.shadow.mapSize.x!==n&&(this.moon.shadow.mapSize.set(n,n),this.moon.shadow.map?.dispose(),this.moon.shadow.map=null)}batch(){let t=this.staticGroup;t.updateMatrixWorld(!0);let e=new Map,n=[];t.traverse(s=>{if(!s.isMesh)return;if(s.userData.bulb||s.userData.noBatch){n.push(s);return}let r=s.material.uuid+(s.castShadow?"c":"n")+(s.receiveShadow?"r":"n"),a=e.get(r);a||(a={mat:s.material,cast:s.castShadow,rec:s.receiveShadow,geos:[]},e.set(r,a));let o=s.geometry.clone();o.applyMatrix4(s.matrixWorld);for(let c of Object.keys(o.attributes))["position","normal","uv"].includes(c)||o.deleteAttribute(c);a.geos.push(o)});for(let s of e.values()){let r=wp(s.geos,!1);if(!r){console.warn("merge failed");continue}let a=new St(r,s.mat);a.castShadow=s.cast,a.receiveShadow=s.rec,a.frustumCulled=!1,this.root.add(a),s.geos.forEach(o=>o.dispose())}for(let s of n){if(s.userData.noBatch){let a=s.clone();a.matrixAutoUpdate=!1,a.matrix.copy(s.matrixWorld),a.matrixWorldNeedsUpdate=!0,this.root.add(a);continue}let r=new St(s.geometry,s.material);r.applyMatrix4(s.matrixWorld),r.matrixAutoUpdate=!0,r.position.setFromMatrixPosition(s.matrixWorld),r.rotation.set(0,0,0),r.scale.setScalar(1),this.root.add(r)}this.staticGroup=null}resolve(t,e,n=!1){let s=!1;for(let r of this.colliders){if(r.bulletOnly||r.off)continue;let a=Be(t.x,r.x0,r.x1),o=Be(t.z,r.z0,r.z1),c=t.x-a,l=t.z-o,h=c*c+l*l;if(!(h>=e*e))if(s=!0,h>1e-8){let u=Math.sqrt(h),d=(e-u)/u;t.x+=c*d,t.z+=l*d}else{let u=t.x-r.x0,d=r.x1-t.x,f=t.z-r.z0,p=r.z1-t.z,v=Math.min(u,d,f,p);v===u?t.x=r.x0-e:v===d?t.x=r.x1+e:v===f?t.z=r.z0-e:t.z=r.z1+e}}return s}ray(t,e,n){let s=n,r=null,a=null;if(e.y<-1e-5){let o=-t.y/e.y;o>0&&o<s&&(s=o,r={x:0,y:1,z:0},a="ground")}for(let o of this.colliders){if(o.noBullet||o.off)continue;let c=0,l=s,h=-1,u=0,d=(f,p,v,g,m)=>{if(Math.abs(p)<1e-9)return f>=v&&f<=g;let b=(v-f)/p,w=(g-f)/p,y=-1;if(b>w){let S=b;b=w,w=S,y=1}return b>c&&(c=b,h=m,u=y),w<l&&(l=w),c<=l};d(t.x,e.x,o.x0,o.x1,0)&&d(t.y,e.y,o.y0,o.y1,1)&&d(t.z,e.z,o.z0,o.z1,2)&&c>0&&c<s&&(s=c,r={x:h===0?u:0,y:h===1?u:0,z:h===2?u:0},a="wall")}return r?{t:s,n:r,kind:a}:null}update(t,e,n){for(let l=this.fall.length-1;l>=0;l--){let h=this.fall[l],u=h.userData.fall;if(!u){this.fall.splice(l,1);continue}u.t+=t,u.vy-=9.8*t,h.position.x+=u.vx*t,h.position.y+=u.vy*t,h.position.z+=u.vz*t,h.rotation.x+=u.rx*t,h.rotation.z+=u.rz*t,h.position.y<.08&&(h.position.y=.08,u.vy=0,u.vx*=.5,u.vz*=.5),u.t>1.4&&(h.visible=!1,this.fall.splice(l,1))}let s=this.door;s.open&&s.t<1&&(s.t=Math.min(1,s.t+t/2.4),s.mesh.position.y=s.t*3.6,s.t>.5&&(s.col.off=!0));let r=n.x,a=n.z,o=this.lamps.map((l,h)=>({i:h,d:(l.pos.x-r)**2+(l.pos.z-a)**2})).sort((l,h)=>l.d-h.d);this.lampPool.forEach((l,h)=>{let u=this.lamps[o[h].i];l.position.copy(u.pos),l.color.copy(u.teal?new ft(.35,1,.8):new ft(1,.7,.4));let d=.85+.15*Math.sin(e*9+u.ph)*Math.sin(e*3.7+u.ph*2)+(Math.sin(e*31+u.ph)>.97?-.5:0);l.intensity=95*Math.max(.2,d)}),this.halos.forEach((l,h)=>{let u=Math.hypot(this.lamps[h].pos.x-r,this.lamps[h].pos.z-a);l.visible=u<70});let c=this.crate;c.beam.material.uniforms.k.value=.22+.1*Math.sin(e*2),c.model&&(c.model.rotation.y+=t*2,c.model.position.y=Math.sin(e*3)*.04),this.moon.position.set(r+this.moonDir.x*60,this.moonDir.y*60,a+this.moonDir.z*60),this.moon.target.position.set(r,0,a),this.moon.target.updateMatrixWorld(),this.sky.position.set(r,0,a)}};var mn={torso:new ae(.52,.62,.3),hip:new ae(.46,.2,.28),leg:new ae(.2,.9,.22),arm:new ae(.15,.62,.16),head:new _a(.27,1),eye:new ae(.07,.04,.03),jaw:new ae(.2,.08,.16),rag:new ae(.12,.28,.03),hand:new ae(.17,.14,.17)},zp=new Ae({color:new ft(1.7,.22,.1),toneMapped:!1}),kp=new se({color:7213080,roughness:.6}),Wy=new se({color:1708564,roughness:1}),Xy=[6191698,6980704,5798498,7439722,5206104],qy=[8007471,3099258,5921322,3816004,9071146,2068344,11687466],Yy=[2764602,3813156,2106922,2898474],Wu=class{constructor(){this.root=new Jt,this.sk=new se({roughness:.75,emissive:0}),this.sh=new se({roughness:.95,emissive:0}),this.pa=new se({roughness:.95,emissive:0});let t=(a,o,c,l,h)=>{let u=new St(a,o);return u.position.set(c,l,h),u.castShadow=!0,u};this.pelvis=new Jt,this.pelvis.position.y=.95,this.root.add(this.pelvis),this.legL=new Jt,this.legL.position.set(-.13,0,0),this.legL.add(t(mn.leg,this.pa,0,-.45,0)),this.legR=new Jt,this.legR.position.set(.13,0,0),this.legR.add(t(mn.leg,this.pa,0,-.45,0)),this.pelvis.add(this.legL,this.legR,t(mn.hip,this.pa,0,0,0)),this.upper=new Jt,this.pelvis.add(this.upper),this.upper.add(t(mn.torso,this.sh,0,.36,0));let e=t(mn.rag,this.sh,.12,0,.15);e.rotation.z=.2;let n=t(mn.rag,this.sh,-.1,.02,-.15);n.rotation.z=-.15,this.upper.add(e,n);let s=t(mn.rag,kp,-.1,.45,.155);s.scale.set(1.6,1,1),s.rotation.z=.5;let r=t(mn.rag,kp,.14,.2,.156);r.scale.set(1,.7,1),this.upper.add(s,r),this.head=new Jt,this.head.position.set(0,.88,.03),this.head.add(t(mn.head,this.sk,0,0,0)),this.head.add(t(mn.eye,zp,-.1,.04,.24),t(mn.eye,zp,.1,.04,.24),t(mn.jaw,Wy,0,-.14,.18)),this.head.scale.set(1.05,1.1,1),this.upper.add(this.head),this.armL=new Jt,this.armL.position.set(-.35,.58,0),this.armL.add(t(mn.arm,this.sk,0,-.28,0),t(mn.hand,this.sk,0,-.64,0)),this.armR=new Jt,this.armR.position.set(.35,.58,0),this.armR.add(t(mn.arm,this.sk,0,-.28,0),t(mn.hand,this.sk,0,-.64,0)),this.upper.add(this.armL,this.armR),this.root.visible=!1,this.state="dead",this.pos=this.root.position}},Oc=class{constructor(t,e,n){this.world=e,this.scene=t,this.list=[],this.max=n>0?26:16;for(let s=0;s<this.max+4;s++){let r=new Wu;t.add(r.root),this.list.push(r)}this.alive=0,this.t=0,this.hooks={}}setTier(t){this.max=t>0?26:16}reset(){for(let t of this.list)t.state="dead",t.root.visible=!1;this.alive=0}stats(t){let e=t<10?80+35*t:430*Math.pow(1.1,t-9),n=Math.min(5,1.5+t*.24);return{hp:e,sp:n}}spawn(t,e,n=!1){let s=this.list.find(c=>c.state==="dead"&&!c.root.visible);if(!s)return null;let r=this.stats(e),a=e>=3&&Math.random()<Math.min(.55,(e-2)*.09);s.brute=n,s.scale=n?1.38:$(.94,1.06),s.root.scale.setScalar(s.scale),s.maxHp=s.hp=r.hp*(n?3.3:1),s.speed=r.sp*$(.82,1.12)*(a?1.45:1)*(n?.78:1),s.speed=Math.min(s.speed,6),s.runner=a,s.dmg=n?44:22,s.value=n?150:60,s.sk.color.setHex(n?10121050:Nn(Xy)),s.sh.color.setHex(Nn(qy)),s.pa.color.setHex(Nn(Yy));for(let c of[s.sk,s.sh,s.pa])c.emissive.setHex(0);s.win=t,s.state="approach",s.slot=$(-1.2,1.2),s.phase=$(Xe),s.attackT=0,s.cool=0,s.stuck=0,s.stuckTot=0,s.side=1,s.flash=0,s.hitT=0,s.groanT=$(1,4),s.dieT=0,s.climbT=0,s.chk=0,s.chkX=0,s.chkZ=0,s.limp=Math.random()<.3;let o=$(4,9);return s.pos.set(t.out.x+t.n.x*o+t.t.x*$(-3,3),0,t.out.z+t.n.z*o+t.t.z*$(-3,3)),s.yaw=Math.atan2(-t.n.x,-t.n.z),s.root.rotation.set(0,s.yaw,0),s.root.visible=!0,s.pelvis.rotation.set(0,0,0),s.root.position.y=0,this.alive++,s}rayHit(t,e,n){let s=null;for(let r of this.list){if(r.state==="dead"||r.state==="dying")continue;let a=r.scale,o={x:r.pos.x,y:(r.climbY||0)+1.66*a,z:r.pos.z},c=.3*a,l=Zy(t,e,o,c),h=null,u=t.x-r.pos.x,d=t.z-r.pos.z,f=e.x*e.x+e.z*e.z,p=.42*a;if(f>1e-8){let m=2*(u*e.x+d*e.z),b=u*u+d*d-p*p,w=m*m-4*f*b;if(w>=0){let y=Math.sqrt(w);for(let S of[(-m-y)/(2*f),(-m+y)/(2*f)])if(S>0){let E=t.y+e.y*S-(r.climbY||0);if(E>=0&&E<=1.45*a){h=S;break}}}}else u*u+d*d<p*p&&(h=.01);let v=null,g=!1;l!==null&&(h===null||l<=h+.15)?(v=l,g=!0):h!==null&&(v=h),v!==null&&v<n&&(!s||v<s.t)&&(s={z:r,t:v,head:g})}return s}damage(t,e,n,s,r){if(t.state==="dead"||t.state==="dying")return null;t.hp-=e,t.flash=.12,t.hitT=.15;let a=t.hp<=0;return a?(t.state="dying",t.dieT=0,this.alive--,t.dieDir=$(-.4,.4)):t.state==="attack"||t.state,{killed:a,head:n}}killAll(){let t=[];for(let e of this.list)e.state!=="dead"&&e.state!=="dying"&&(e.hp=0,e.state="dying",e.dieT=0,e.dieDir=$(-.4,.4),this.alive--,t.push(e));return t}update(t,e,n,s,r){let a=this.world;this.t=e;for(let c of a.windows)c.cool>0&&(c.cool-=t);let o=Fc(n.z);for(let c=0;c<this.list.length;c++){let l=this.list[c];if(l.state==="dead")continue;let h=l.scale;if(l.flash>0){l.flash-=t;let S=Math.max(0,l.flash/.12);for(let E of[l.sk,l.sh,l.pa])E.emissive.setRGB(.9*S,.08*S,.05*S)}if(l.state==="dying"){l.dieT+=t;let S=Math.min(1,l.dieT/.55);l.pelvis.rotation.x=-S*1.5*(1-.1),l.pelvis.rotation.z=l.dieDir*S,l.pelvis.position.y=.95-S*.55,l.armL.rotation.x=-1.4+S*2.2,l.armR.rotation.x=-1.4+S*2.2,l.dieT>2.2&&(l.root.position.y=-(l.dieT-2.2)*.9),l.dieT>3.2&&(l.state="dead",l.root.visible=!1,l.root.position.y=0,l.pelvis.position.y=.95,l.pelvis.rotation.set(0,0,0));continue}if(l.groanT-=t,l.groanT<=0){l.groanT=$(2.5,6);let S=l.pos.x-n.x,E=l.pos.z-n.z,C=Math.hypot(S,E);C<40&&r.groan?.(l,C)}let u=0,d=0,f=0,p=-1.3,v=n.x,g=n.z;if(l.state==="approach"){let S=l.win,E=S.out.x+S.t.x*l.slot*.8,C=S.out.z+S.t.z*l.slot*.8,x=E-l.pos.x,T=C-l.pos.z,P=Math.hypot(x,T);P<.25?(l.state=S.count>0?"attack":"climb",l.climbT=0,l.cool=$(.6,1.6)):(u=x/P,d=T/P,f=l.speed,l.pos.x+=u*f*t,l.pos.z+=d*f*t,l.yaw=to(l.yaw,Math.atan2(u,d),Math.min(1,t*8)))}else if(l.state==="attack"){let S=l.win;l.yaw=to(l.yaw,Math.atan2(-S.n.x,-S.n.z),Math.min(1,t*8)),l.cool-=t,S.count<=0?(l.state="climb",l.climbT=0):(l.attackT+=t,p=-1.2+Math.sin(l.attackT*7)*.7,l.cool<=0&&S.count>0&&(l.cool=$(1.2,2),S.cool<=0&&a.removePlank(S)&&(S.cool=$(2.2,3.2),r.plank?.(S,!0))))}else if(l.state==="climb"){let S=l.win;l.climbT+=t/1.25;let E=Math.min(1,l.climbT),C=S.out.x+S.t.x*l.slot*.8,x=S.out.z+S.t.z*l.slot*.8,T=S.in.x+S.t.x*l.slot*.5,P=S.in.z+S.t.z*l.slot*.5;l.pos.x=C+(T-C)*E,l.pos.z=x+(P-x)*E,l.climbY=Math.sin(E*Math.PI)*.75,l.root.position.y=l.climbY,l.yaw=to(l.yaw,Math.atan2(-S.n.x,-S.n.z),Math.min(1,t*8)),p=-1.6,f=1.5,E>=1&&(l.state="chase",l.climbY=0,l.root.position.y=0)}else{let S=v,E=g,C=Fc(l.pos.z);if(C!==o&&s.open){let B=Math.abs(l.pos.x)<4&&Math.abs(l.pos.z-vi)<2.5;S=0,E=B?o==="A"?vi+4:vi-4:vi+(C==="A"?1.8:-1.8)}let x=S-l.pos.x,T=E-l.pos.z,P=Math.hypot(x,T)||1;x/=P,T/=P;let D=Math.hypot(v-l.pos.x,g-l.pos.z);if(l.stuck>0){l.stuck-=t;let B=1.2*l.side,q=Math.cos(B),X=Math.sin(B),rt=x*q-T*X,W=x*X+T*q;x=rt,T=W}let N=0,k=0;for(let B=0;B<this.list.length;B++){if(B===c)continue;let q=this.list[B];if(q.state!=="chase"&&q.state!=="attack")continue;let X=l.pos.x-q.pos.x,rt=l.pos.z-q.pos.z,W=X*X+rt*rt;if(W<.7&&W>1e-4){let j=1/Math.sqrt(W);N+=X*j*(.9-Math.sqrt(W)),k+=rt*j*(.9-Math.sqrt(W))}}x+=N*1.2,T+=k*1.2;let U=Math.hypot(x,T)||1;if(x/=U,T/=U,D<1&&C===o?f=0:f=l.speed,l.cool-=t,D<1.35&&C===o&&l.attackT<=0&&l.cool<=0&&(l.attackT=.01),l.attackT>0&&(l.attackT+=t,p=-2.2+Math.min(1,l.attackT/.4)*1.1,l.attackT>.42&&(D<1.7&&C===o&&r.hitPlayer?.(l),l.attackT=0,l.cool=1.05),f*=.3),l.pos.x+=x*f*t,l.pos.z+=T*f*t,u=x,d=T,a.resolve(l.pos,.36*h),l.yaw=to(l.yaw,Math.atan2(n.x-l.pos.x,n.z-l.pos.z)*(D<4?1:0)+Math.atan2(x,T)*(D<4?0:1),Math.min(1,t*9)),D<4&&(l.yaw=to(l.yaw,Math.atan2(v-l.pos.x,g-l.pos.z),Math.min(1,t*9))),l.chk+=t,l.chk>.5){let B=Math.hypot(l.pos.x-l.chkX,l.pos.z-l.chkZ);f>.5&&B<f*.5*.3?(l.stuck=1,l.side=Math.random()<.5?-1:1,l.stuckTot+=.5):l.stuckTot=Math.max(0,l.stuckTot-.25),l.chkX=l.pos.x,l.chkZ=l.pos.z,l.chk=0,l.stuckTot>6&&this.reroute(l)}}l.root.rotation.y=l.yaw,l.state!=="climb"&&(l.root.position.y=0);let m=f>.1?f:0;l.phase+=m*t*(l.runner?2.2:3)/Math.max(.6,h);let b=Math.sin(l.phase),w=Math.min(.75,.25+m*.14);l.legL.rotation.x=b*w,l.legR.rotation.x=-b*w*(l.limp?.35:1);let y=.12+Math.min(.35,m*.06)+(l.runner?.12:0);l.upper.rotation.x=y+Math.abs(Math.sin(l.phase))*.04,l.upper.rotation.z=Math.sin(l.phase*.5)*.06*(l.limp?2:1),l.upper.rotation.y=Math.sin(l.phase*.5)*.12,l.armL.rotation.x=p+Math.sin(l.phase+1)*.15+(l.state==="chase"&&l.attackT<=0,0),l.armR.rotation.x=p+(l.state==="attack"?Math.sin(l.attackT*7+1.6)*.7-Math.sin(l.attackT*7)*.7:0)+Math.sin(l.phase+3)*.15,l.armL.rotation.z=.12,l.armR.rotation.z=-.12,l.head.rotation.z=Math.sin(l.phase*.5+1)*.12,l.head.rotation.x=.1,l.pelvis.position.y=.95+Math.abs(Math.sin(l.phase))*.03}}reroute(t){let e=this.world.windows.filter(s=>s.area==="A"||this.world.door.open),n=Nn(e);t.win=n,t.state="approach",t.stuckTot=0,t.stuck=0,t.pos.set(n.out.x+n.n.x*3,0,n.out.z+n.n.z*3)}};function Zy(i,t,e,n){let s=i.x-e.x,r=i.y-e.y,a=i.z-e.z,o=s*t.x+r*t.y+a*t.z,c=s*s+r*r+a*a-n*n,l=o*o-c;if(l<0)return null;let h=-o-Math.sqrt(l);return h>0?h:null}function to(i,t,e){let n=((t-i+Math.PI)%Xe+Xe)%Xe-Math.PI;return i+n*e}var Bc={},qu;function Jy(){let i=Pc(Ya.zombies),t=i.view;qu=i.meta;for(let e of qu){let n=new we;n.setAttribute("position",Ic(t,e)),n.setAttribute("normal",Dc(t,e)),n.setAttribute("skinIndex",new ge(t(Uint8Array,e.si),4)),n.setAttribute("skinWeight",new ge(t(Uint8Array,e.sw),4,!0)),n.setIndex(new ge(t(Uint16Array,e.idx),1)),e.groups.forEach(s=>n.addGroup(s.start,s.count,s.slot>=0?s.slot:3)),n.computeBoundingSphere(),Bc[e.tag]={g:n,m:e}}}var $y=4,Ky=["near","mid","far"],Hp=new Map,jy=i=>{let t=Hp.get(i);if(!t){let e=new ft("#"+i).multiplyScalar(.6);t=new se({color:e,roughness:.85}),Hp.set(i,t)}return t},Qy="float zh(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);} float zn(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(zh(i),zh(i+vec3(1,0,0)),f.x),mix(zh(i+vec3(0,1,0)),zh(i+vec3(1,1,0)),f.x),f.y),mix(mix(zh(i+vec3(0,0,1)),zh(i+vec3(1,0,1)),f.x),mix(zh(i+vec3(0,1,1)),zh(i+vec3(1,1,1)),f.x),f.y),f.z);}";function Xu(i,t){let e=new se({roughness:i===0?.7:.95});return e.userData.seed={value:t},e.onBeforeCompile=n=>{n.uniforms.zSeed=e.userData.seed,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vZ = position;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vZ; uniform float zSeed;
`+Qy).replace("#include <color_fragment>",`#include <color_fragment>
      vec3 q = vZ*vec3(18.)+zSeed; float n = zn(q)*0.6+zn(q*2.3)*0.4;
      ${i===0?"diffuseColor.rgb *= mix(vec3(0.55,0.62,0.5), vec3(1.0), smoothstep(0.25,0.75,n)); float b = smoothstep(0.78,0.86,zn(q*0.7+3.)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.25,0.03,0.04), b*0.8);":"float t = smoothstep(0.71,0.74,n); float e = smoothstep(0.66,0.71,n)-t; diffuseColor.rgb *= 0.75+0.35*zn(q*4.); diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb*0.35, e); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.075,0.095,0.06)*mix(1.,0.6,zn(q*3.)), t); float bl = smoothstep(0.8,0.9,zn(q*0.5+7.)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.22,0.03,0.03), bl*0.7);"}`)},e.customProgramCacheKey=()=>"zmat"+i,e}var Vp=1.1;function Gp(i){Jy(),i.list.forEach((n,s)=>{let r=s%$y,a=Bc[r+":near"].m.bones,o=a.map(h=>{let u=new lr;return u.name=h.n,u.position.fromArray(h.t),u});a.forEach((h,u)=>{h.p>=0&&o[h.p].add(o[u])});let c=new Jt;c.add(o[0]),c.scale.setScalar(Bc[r+":near"].m.scale*Vp),c.updateMatrixWorld(!0);let l=new ia(o);n.sk=Xu(0,s*7.3),n.sh=Xu(1,s*3.1),n.pa=Xu(1,s*5.7+2),n.lods=Ky.map(h=>{let u=Bc[r+":"+h],d=[n.sk,n.sh,n.pa],f=u.m.groups.map(g=>g.slot>=0?[n.sk,n.sh,n.pa][g.slot]:jy(g.col)),p=u.g.clone();p.clearGroups(),u.m.groups.forEach((g,m)=>p.addGroup(g.start,g.count,m));let v=new na(p,f);return v.frustumCulled=!1,v.castShadow=!0,v.bind(l),v.visible=!1,c.add(v),v}),n.bones=Object.fromEntries(o.map(h=>[h.name,h])),n.hipY=n.bones.hips.position.y,n.root.add(c),n.pelvis.traverse(h=>{h.isMesh&&(h.visible=!1)}),n.variant=r});let t=i.update.bind(i),e=[];return i.update=(n,s,r,...a)=>{t(n,s,r,...a),e.length=0;for(let o of i.list)o.root.visible&&(o.d=Math.hypot(o.pos.x-r.x,o.pos.z-r.z),e.push(o));e.sort((o,c)=>o.d-c.d),e.forEach((o,c)=>{let l=c<2&&o.d<7?0:c<5&&o.d<16?1:2;o.lods.forEach((h,u)=>h.visible=u===l),tM(o)})},i.lodCounts=()=>{let n=[0,0,0];for(let s of i.list)s.root.visible&&s.lods.forEach((r,a)=>{r.visible&&n[a]++});return n},Object.fromEntries(qu.map(n=>[n.tag,n.tris]))}function tM(i){let t=i.bones;t.hips.position.y=i.hipY+(i.pelvis.position.y-.95)/Vp,t.hips.rotation.set(i.pelvis.rotation.x,0,i.pelvis.rotation.z),t.chest.rotation.set(i.upper.rotation.x+.18,i.upper.rotation.y,i.upper.rotation.z),t.spine.rotation.x=.1,t.head.rotation.set(i.head.rotation.x+.15,.1,i.head.rotation.z+.22),t.thighL.rotation.set(i.legL.rotation.x,0,.03),t.thighR.rotation.set(i.legR.rotation.x,0,-.03),t.shinL.rotation.x=Math.max(0,-i.legL.rotation.x)*.9+.08,t.shinR.rotation.x=Math.max(0,-i.legR.rotation.x)*.9+.08,t.upperArmL.rotation.set(i.armL.rotation.x,0,i.armL.rotation.z),t.upperArmR.rotation.set(i.armR.rotation.x,0,i.armR.rotation.z),t.foreArmL.rotation.x=-.35,t.foreArmR.rotation.x=-.25,t.handL.rotation.x=.4,t.handR.rotation.x=.5}var yi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},eM=new $i(-1,1,1,-1,0,1),Yu=class extends we{constructor(){super(),this.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ye([0,2,0,0,2,0],2))}},nM=new Yu,Mi=class{constructor(t){this._mesh=new St(nM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,eM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Tr=class extends Tn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof de?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Sn.clone(t.uniforms),this.material=new de({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Mi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var eo=class extends Tn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},zc=class extends Tn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var kc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new at);this._width=n.width,this._height=n.height,e=new Oe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ke}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Tr(yi),this.copyPass.material.blending=We,this.timer=new Ea}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}eo!==void 0&&(a instanceof eo?n=!0:a instanceof zc&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var no=class extends Tn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ft}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Wp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ft(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var wr=class i extends Tn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new ft(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Oe(r,a,{type:ke,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Oe(r,a,{type:ke,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Oe(r,a,{type:ke,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Wp;this.highPassUniforms=Sn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new de({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new at(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Sn.clone(yi.uniforms),this.blendMaterial=new de({uniforms:this.copyUniforms,vertexShader:yi.vertexShader,fragmentShader:yi.fragmentShader,premultipliedAlpha:!0,blending:$e,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ft,this._oldClearAlpha=1,this._basic=new Ae,this._fsQuad=new Mi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new at(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],c=a+1<t?e[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new de({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new de({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};wr.BlurDirectionX=new at(1,0);wr.BlurDirectionY=new at(0,1);var io={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new at},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new $t},cameraProjectionMatrixInverse:{value:new $t},cameraWorldMatrix:{value:new $t},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new I(-1,-1,-1)},sceneBoxMax:{value:new I(1,1,1)}},vertexShader:`

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
		}`},so={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Hc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Xp(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=iM(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=e[a],c=2*Math.PI*o/n,l=new I(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new di(s,t,t);return r.wrapS=wn,r.wrapT=wn,r.needsUpdate=!0,r}function iM(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}var ro={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Zu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new at},cameraProjectionMatrixInverse:{value:new $t},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Zu(i,t,e){let n=sM(i,t,e),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function sM(i,t,e){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new I(Math.cos(r),Math.sin(r),a))}return n}var Vc=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(t+e)*a,c=Math.floor(t+o),l=Math.floor(e+o),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,f=l-u,p=t-d,v=e-f,g,m;p>v?(g=1,m=0):(g=0,m=1);let b=p-g+h,w=v-m+h,y=p-1+2*h,S=v-1+2*h,E=c&255,C=l&255,x=this.perm[E+this.perm[C]]%12,T=this.perm[E+g+this.perm[C+m]]%12,P=this.perm[E+1+this.perm[C+1]]%12,D=.5-p*p-v*v;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[x],p,v));let N=.5-b*b-w*w;N<0?s=0:(N*=N,s=N*N*this._dot(this.grad3[T],b,w));let k=.5-y*y-S*S;return k<0?r=0:(k*=k,r=k*k*this._dot(this.grad3[P],y,S)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o,l=(t+e+n)*.3333333333333333,h=Math.floor(t+l),u=Math.floor(e+l),d=Math.floor(n+l),f=1/6,p=(h+u+d)*f,v=h-p,g=u-p,m=d-p,b=t-v,w=e-g,y=n-m,S,E,C,x,T,P;b>=w?w>=y?(S=1,E=0,C=0,x=1,T=1,P=0):b>=y?(S=1,E=0,C=0,x=1,T=0,P=1):(S=0,E=0,C=1,x=1,T=0,P=1):w<y?(S=0,E=0,C=1,x=0,T=1,P=1):b<y?(S=0,E=1,C=0,x=0,T=1,P=1):(S=0,E=1,C=0,x=1,T=1,P=0);let D=b-S+f,N=w-E+f,k=y-C+f,U=b-x+2*f,B=w-T+2*f,q=y-P+2*f,X=b-1+3*f,rt=w-1+3*f,W=y-1+3*f,j=h&255,tt=u&255,Pt=d&255,Rt=this.perm[j+this.perm[tt+this.perm[Pt]]]%12,ue=this.perm[j+S+this.perm[tt+E+this.perm[Pt+C]]]%12,Qt=this.perm[j+x+this.perm[tt+T+this.perm[Pt+P]]]%12,oe=this.perm[j+1+this.perm[tt+1+this.perm[Pt+1]]]%12,Z=.6-b*b-w*w-y*y;Z<0?s=0:(Z*=Z,s=Z*Z*this._dot3(this.grad3[Rt],b,w,y));let Q=.6-D*D-N*N-k*k;Q<0?r=0:(Q*=Q,r=Q*Q*this._dot3(this.grad3[ue],D,N,k));let mt=.6-U*U-B*B-q*q;mt<0?a=0:(mt*=mt,a=mt*mt*this._dot3(this.grad3[Qt],U,B,q));let Bt=.6-X*X-rt*rt-W*W;return Bt<0?o=0:(Bt*=Bt,o=Bt*Bt*this._dot3(this.grad3[oe],X,rt,W)),32*(s+r+a+o)}noise4d(t,e,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,u,d,f,p,v=(t+e+n+s)*c,g=Math.floor(t+v),m=Math.floor(e+v),b=Math.floor(n+v),w=Math.floor(s+v),y=(g+m+b+w)*l,S=g-y,E=m-y,C=b-y,x=w-y,T=t-S,P=e-E,D=n-C,N=s-x,k=T>P?32:0,U=T>D?16:0,B=P>D?8:0,q=T>N?4:0,X=P>N?2:0,rt=D>N?1:0,W=k+U+B+q+X+rt,j=a[W][0]>=3?1:0,tt=a[W][1]>=3?1:0,Pt=a[W][2]>=3?1:0,Rt=a[W][3]>=3?1:0,ue=a[W][0]>=2?1:0,Qt=a[W][1]>=2?1:0,oe=a[W][2]>=2?1:0,Z=a[W][3]>=2?1:0,Q=a[W][0]>=1?1:0,mt=a[W][1]>=1?1:0,Bt=a[W][2]>=1?1:0,wt=a[W][3]>=1?1:0,Wt=T-j+l,pe=P-tt+l,nt=D-Pt+l,lt=N-Rt+l,ct=T-ue+2*l,ht=P-Qt+2*l,pt=D-oe+2*l,Vt=N-Z+2*l,zt=T-Q+3*l,Xt=P-mt+3*l,Yt=D-Bt+3*l,L=N-wt+3*l,fe=T-1+4*l,te=P-1+4*l,A=D-1+4*l,_=N-1+4*l,z=g&255,H=m&255,J=b&255,ut=w&255,gt=o[z+o[H+o[J+o[ut]]]]%32,K=o[z+j+o[H+tt+o[J+Pt+o[ut+Rt]]]]%32,it=o[z+ue+o[H+Qt+o[J+oe+o[ut+Z]]]]%32,vt=o[z+Q+o[H+mt+o[J+Bt+o[ut+wt]]]]%32,Ft=o[z+1+o[H+1+o[J+1+o[ut+1]]]]%32,_t=.6-T*T-P*P-D*D-N*N;_t<0?h=0:(_t*=_t,h=_t*_t*this._dot4(r[gt],T,P,D,N));let xt=.6-Wt*Wt-pe*pe-nt*nt-lt*lt;xt<0?u=0:(xt*=xt,u=xt*xt*this._dot4(r[K],Wt,pe,nt,lt));let Dt=.6-ct*ct-ht*ht-pt*pt-Vt*Vt;Dt<0?d=0:(Dt*=Dt,d=Dt*Dt*this._dot4(r[it],ct,ht,pt,Vt));let kt=.6-zt*zt-Xt*Xt-Yt*Yt-L*L;kt<0?f=0:(kt*=kt,f=kt*kt*this._dot4(r[vt],zt,Xt,Yt,L));let Zt=.6-fe*fe-te*te-A*A-_*_;return Zt<0?p=0:(Zt*=Zt,p=Zt*Zt*this._dot4(r[Ft],fe,te,A,_)),27*(h+u+d+f+p)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}_dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}};var Ar=class i extends Tn{constructor(t,e,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Xp(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Oe(this.width,this.height,{type:ke,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new de({defines:Object.assign({},io.defines),uniforms:Sn.clone(io.uniforms),vertexShader:io.vertexShader,fragmentShader:io.fragmentShader,blending:We,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ya,this.normalMaterial.blending=We,this.pdMaterial=new de({defines:Object.assign({},ro.defines),uniforms:Sn.clone(ro.uniforms),vertexShader:ro.vertexShader,fragmentShader:ro.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new de({defines:Object.assign({},so.defines),uniforms:Sn.clone(so.uniforms),vertexShader:so.vertexShader,fragmentShader:so.fragmentShader,blending:We}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new de({uniforms:Sn.clone(yi.uniforms),vertexShader:yi.vertexShader,fragmentShader:yi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:wa,blendDst:Es,blendEquation:kn,blendSrcAlpha:Ta,blendDstAlpha:Es,blendEquationAlpha:kn}),this.blendMaterial=new de({uniforms:Sn.clone(Hc.uniforms),vertexShader:Hc.vertexShader,fragmentShader:Hc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ll,blendSrc:wa,blendDst:Es,blendEquation:kn,blendSrcAlpha:Ta,blendDstAlpha:Es,blendEquationAlpha:kn}),this._fsQuad=new Mi(null),this._originalClearColor=new ft,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new fi,this.depthTexture.format=pi,this.depthTexture.type=es,this.normalRenderTarget=new Oe(this.width,this.height,{minFilter:Ge,magFilter:Ge,type:ke,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Zu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=We,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=We,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=We,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=We,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=We,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,s,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_renderOverride(t,e,n,s,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new Vc,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){let c=a,l=o;s[(a*t+o)*4]=(e.noise(c,l)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(c+t,l)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(c,l+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(c+t,l+t)*.5+.5)*255}let r=new di(s,t,t,Mn,fn);return r.wrapS=wn,r.wrapT=wn,r.needsUpdate=!0,r}};Ar.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var ao={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Gc=class extends Tn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Sn.clone(ao.uniforms),this.material=new mr({name:ao.name,uniforms:this.uniforms,vertexShader:ao.vertexShader,fragmentShader:ao.fragmentShader}),this._fsQuad=new Mi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===xe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Aa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ra?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ca?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ts?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ia?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Da?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Pa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var oo=class{constructor(t,e,n){this.max=t,this.n=0,this.next=0;let s=this.geo=new we;this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.siz=new Float32Array(t),s.setAttribute("position",new ge(this.pos,3).setUsage(Va)),s.setAttribute("aColor",new ge(this.col,4).setUsage(Va)),s.setAttribute("aSize",new ge(this.siz,1).setUsage(Va)),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grav=new Float32Array(t),this.drag=new Float32Array(t),this.s0=new Float32Array(t),this.s1=new Float32Array(t),this.c0=new Float32Array(t*4),this.uniforms={map:{value:n},uScale:{value:800}};let r=this.mat=new de({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:e?$e:ji,vertexShader:`attribute float aSize; attribute vec4 aColor; varying vec4 vC; uniform float uScale;
        void main(){ vec4 mv = modelViewMatrix*vec4(position,1.); gl_Position = projectionMatrix*mv; gl_PointSize = clamp(aSize*uScale/max(-mv.z,0.1), 0., 300.); vC = aColor; }`,fragmentShader:`uniform sampler2D map; varying vec4 vC;
        void main(){ float a = texture2D(map, gl_PointCoord).a * vC.a; if(a<0.004) discard; gl_FragColor = vec4(vC.rgb, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        }`});this.points=new ra(s,r),this.points.frustumCulled=!1,this.points.renderOrder=5,this.points.userData.noAO=!0}emit(t,e,n,s,r,a,o,c,l,h,u,d,f,p=0,v=0){let g=this.next;this.next=(this.next+1)%this.max,this.pos[g*3]=t,this.pos[g*3+1]=e,this.pos[g*3+2]=n,this.vel[g*3]=s,this.vel[g*3+1]=r,this.vel[g*3+2]=a,this.life[g]=this.maxLife[g]=o,this.s0[g]=c,this.s1[g]=l,this.grav[g]=p,this.drag[g]=v,this.c0[g*4]=h,this.c0[g*4+1]=u,this.c0[g*4+2]=d,this.c0[g*4+3]=f}update(t){let{pos:e,vel:n,life:s,maxLife:r,col:a,siz:o,c0:c}=this;for(let l=0;l<this.max;l++){if(s[l]<=0){o[l]=0,a[l*4+3]=0;continue}if(s[l]-=t,s[l]<=0){o[l]=0,a[l*4+3]=0;continue}let h=1-s[l]/r[l],u=l*3,d=Math.max(0,1-this.drag[l]*t);n[u]*=d,n[u+1]=n[u+1]*d-this.grav[l]*t,n[u+2]*=d,e[u]+=n[u]*t,e[u+1]+=n[u+1]*t,e[u+2]+=n[u+2]*t,e[u+1]<.02&&this.grav[l]>0&&(e[u+1]=.02,n[u]*=.4,n[u+2]*=.4,n[u+1]*=-.25),o[l]=this.s0[l]+(this.s1[l]-this.s0[l])*h;let f=h<.1?h*10:1-(h-.1)/.9;a[l*4]=c[l*4],a[l*4+1]=c[l*4+1],a[l*4+2]=c[l*4+2],a[l*4+3]=c[l*4+3]*f}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0}clear(){this.life.fill(0)}},Wc=class{constructor(t,e,n){this.scene=t,this.tier=n;let s=n>0?1:.4;this.soft=new oo(Math.floor(900*s)+100,!1,e.glow),this.add=new oo(Math.floor(900*s)+100,!0,e.glow),t.add(this.soft.points,this.add.points),this.tracers=[];let r=new ae(1,1,1);for(let a=0;a<24;a++){let o=new St(r,new Ae({color:new ft(5,3.6,1.4),transparent:!0,blending:$e,depthWrite:!1,toneMapped:!1}));o.visible=!1,o.userData.noAO=!0,o.userData.t=0,t.add(o),this.tracers.push(o)}this.tn=0,this.maxCas=n>0?80:16,this.cas=new sa(new sn(.009,.009,.034,6),new se({color:14066743,metalness:1,roughness:.3}),this.maxCas),this.cas.frustumCulled=!1,this.cas.castShadow=!1,t.add(this.cas),this.casData=Array.from({length:this.maxCas},()=>({t:0,p:new I,v:new I,r:new Zn,w:new I})),this.casNext=0,this._m=new $t,this._q=new zn,this._s=new I(1,1,1);for(let a=0;a<this.maxCas;a++)this._m.makeScale(0,0,0),this.cas.setMatrixAt(a,this._m)}setScale(t,e){let n=t/(2*Math.tan(e*Math.PI/360));this.soft.uniforms.uScale.value=n,this.add.uniforms.uScale.value=n}tracer(t,e,n=.012){let s=this.tracers[this.tn++%this.tracers.length],r=t.distanceTo(e);r<.5||(s.position.copy(t).lerp(e,.5),s.lookAt(e),s.scale.set(n,n,r),s.visible=!0,s.userData.t=.06,s.material.opacity=1)}casing(t,e){let n=this.casData[this.casNext++%this.maxCas];n.t=2.5,n.p.copy(t),n.v.copy(e),n.r.set($(Xe),$(Xe),$(Xe)),n.w.set($(-30,30),$(-30,30),$(-30,30))}blood(t,e,n,s=1){let r=this.tier>0?1:.5;n=Math.ceil(n*r);for(let a=0;a<n;a++){let o=$(.6,3.2)*s;this.soft.emit(t.x,t.y,t.z,e.x*o+$(-1,1),e.y*o+$(-.2,1.4),e.z*o+$(-1,1),$(.35,.8),$(.12,.2)*s,$(.45,.8)*s,$(.55,.9),$(.02,.07),$(.04,.12),$(.35,.65),4,2.5)}for(let a=0;a<Math.ceil(n*.6);a++){let o=$(1.5,5)*s;this.soft.emit(t.x,t.y,t.z,e.x*o+$(-1.5,1.5),e.y*o+$(0,2.5),e.z*o+$(-1.5,1.5),$(.5,1),.05,.04,.6,0,.03,.9,11,.4)}}sparks(t,e,n){n=Math.ceil(n*(this.tier>0?1:.5));for(let s=0;s<n;s++){let r=$(2,7);this.add.emit(t.x,t.y,t.z,e.x*r+$(-2,2),e.y*r+$(-1,2.5),e.z*r+$(-2,2),$(.2,.5),.07,.015,4,$(1.6,2.6),.5,1,9,.8)}}dust(t,e,n,s=[.45,.36,.26]){n=Math.ceil(n*(this.tier>0?1:.5));for(let r=0;r<n;r++)this.soft.emit(t.x,t.y,t.z,e.x*$(.3,1.5)+$(-.5,.5),e.y*$(.2,1)+$(0,.6),e.z*$(.3,1.5)+$(-.5,.5),$(.6,1.3),.2,$(.8,1.4),s[0],s[1],s[2],.35,-.2,1.8)}smoke(t,e,n=2){for(let s=0;s<n;s++)this.soft.emit(t.x,t.y,t.z,e.x*1.2+$(-.2,.2),e.y*1.2+$(.1,.5),e.z*1.2+$(-.2,.2),$(.5,1),.05,.28,.55,.55,.58,.25,-.4,2)}flash(t,e){this.add.emit(t.x,t.y,t.z,e.x*1,e.y*1,e.z*1,.06,.45,.8,5,3.4,1.4,1,0,0);for(let n=0;n<3;n++)this.add.emit(t.x,t.y,t.z,e.x*$(3,9)+$(-2,2),e.y*$(3,9)+$(-2,2),e.z*$(3,9)+$(-2,2),$(.08,.18),.1,.02,4,2.2,.6,1,2,1)}glowBurst(t,e,n,s,r=24,a=4){for(let o=0;o<r;o++){let c=$(Xe),l=$(-.6,1),h=$(.4,1)*a;this.add.emit(t.x,t.y,t.z,Math.cos(c)*h,l*h,Math.sin(c)*h,$(.5,1.1),.18,.02,e,n,s,1,2,1.2)}}update(t){this.soft.update(t),this.add.update(t);for(let n of this.tracers)n.visible&&(n.userData.t-=t,n.material.opacity=Math.max(0,n.userData.t/.06),n.userData.t<=0&&(n.visible=!1));let e=!1;for(let n=0;n<this.maxCas;n++){let s=this.casData[n];if(s.t<=0)continue;e=!0,s.t-=t,s.v.y-=9.8*t,s.p.addScaledVector(s.v,t),s.p.y<.02&&(s.p.y=.02,s.v.y*=-.35,s.v.x*=.6,s.v.z*=.6,s.w.multiplyScalar(.5)),s.r.x+=s.w.x*t,s.r.y+=s.w.y*t,s.r.z+=s.w.z*t;let r=Math.min(1,s.t*2);this._q.setFromEuler(s.r),this._s.setScalar(s.t>0?r:0),this._m.compose(s.p,this._q,this._s),this.cas.setMatrixAt(n,this._m),s.t<=0&&(this._m.makeScale(0,0,0),this.cas.setMatrixAt(n,this._m))}(e||this._anyBefore)&&(this.cas.instanceMatrix.needsUpdate=!0),this._anyBefore=e}reset(){this.soft.clear(),this.add.clear();for(let t of this.casData)t.t=0;for(let t of this.tracers)t.visible=!1}},lo=class{constructor(t,e,n={}){this.o=Object.assign({R:22,y0:.2,y1:6,size:.06,alpha:.2,col:[.9,.75,.55],additive:!0,speed:1},n),this.ps=new oo(e,this.o.additive,t.glow),this.n=e,this.R=this.o.R,this.t=0;for(let s=0;s<e;s++)this.ps.pos[s*3]=$(-this.R,this.R),this.ps.pos[s*3+1]=$(this.o.y0,this.o.y1),this.ps.pos[s*3+2]=$(-this.R,this.R);this.ps.update=s=>this.upd(s),this.points=this.ps.points,this.center={x:0,z:0}}upd(t){let e=this.ps,n=this.o;this.t+=t;let s=this.center;for(let r=0;r<this.n;r++){let a=r*3,o=n.speed;e.pos[a]+=(Math.sin(this.t*.3+r)*.25+.35)*t*o,e.pos[a+1]+=Math.sin(this.t*.4+r*1.7)*.06*t*o,e.pos[a+2]+=Math.cos(this.t*.25+r*.7)*.2*t*o,e.pos[a]-s.x>this.R?e.pos[a]-=this.R*2:e.pos[a]-s.x<-this.R&&(e.pos[a]+=this.R*2),e.pos[a+2]-s.z>this.R?e.pos[a+2]-=this.R*2:e.pos[a+2]-s.z<-this.R&&(e.pos[a+2]+=this.R*2),e.siz[r]=n.size*(1+r%3*.4),e.col[r*4]=n.col[0],e.col[r*4+1]=n.col[1],e.col[r*4+2]=n.col[2],e.col[r*4+3]=n.alpha*(.6+.4*(r%4/3))}e.geo.attributes.position.needsUpdate=!0,e.geo.attributes.aColor.needsUpdate=!0,e.geo.attributes.aSize.needsUpdate=!0}},rM={uniforms:{tDiffuse:{value:null},uTime:{value:0},uDamage:{value:0},uVig:{value:.55},uGrain:{value:.07},uSat:{value:1.1},uAberr:{value:.6},uRes:{value:new at(1,1)},uLow:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime,uDamage,uVig,uGrain,uSat,uAberr,uLow; uniform vec2 uRes; varying vec2 vUv;
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
    }`},Xc=class{constructor(t,e,n,s){this.r=t,this.scene=e,this.camera=n,this.viewScene=s,this.mode="direct",this.w=1,this.h=1,this.pr=1}build(t){if(this.mode=t,this.composer&&(this.composer.dispose?.(),this.composer=null),t==="direct")return;let e=new Oe(this.w,this.h,{type:ke,samples:t==="full"?0:4}),n=this.composer=new kc(this.r,e);if(n.setPixelRatio?.(this.pr),n.setSize(this.w,this.h),n.addPass(new no(this.scene,this.camera)),t==="full"){let r=this.gtao=new Ar(this.scene,this.camera,this.w*this.pr,this.h*this.pr);r.output=Ar.OUTPUT.Default,r.blendIntensity=1,r.updateGtaoMaterial({radius:.7,distanceExponent:1.5,thickness:1.5,scale:1.2,samples:10,distanceFallOff:1,screenSpaceRadius:!1}),r.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,radiusExponent:1,rings:2,samples:8});let a=r._overrideVisibility.bind(r);r._overrideVisibility=()=>{a(),this.scene.traverse(o=>{o.userData.noAO&&o.visible&&(o.visible=!1,r._visibilityCache.push(o))})},n.addPass(r)}let s=new no(this.viewScene,this.camera);s.clear=!1,s.clearDepth=!0,n.addPass(s),this.bloom=new wr(new at(this.w,this.h),.42,.55,.9),n.addPass(this.bloom),n.addPass(new Gc),this.grade=new Tr(rM),this.grade.uniforms.uRes.value.set(this.w*this.pr,this.h*this.pr),n.addPass(this.grade)}setSize(t,e,n){this.w=t,this.h=e,this.pr=n,this.composer&&(this.composer.setPixelRatio(n),this.composer.setSize(t,e),this.gtao?.setSize(t*n,e*n),this.grade.uniforms.uRes.value.set(t*n,e*n))}render(t,e,n,s){if(!this.composer){let a=this.r;a.autoClear=!1,a.clear(),a.render(this.scene,this.camera),a.clearDepth(),a.render(this.viewScene,this.camera),a.autoClear=!0;return}let r=this.grade.uniforms;r.uTime.value=e,r.uDamage.value=n,r.uLow.value=s,this.composer.render(t)}};var qc=class{constructor(){this.ctx=null,this.muted=!1,this.lastGroan=0,this.lastTick=0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.muted?0:.8;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,n.attack.value=.003,n.release.value=.2,this.master.connect(n),n.connect(e.destination);let s=e.createBuffer(1,e.sampleRate*2,e.sampleRate),r=s.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=Math.random()*2-1;this.noise=s;let a=e.sampleRate*1.8,o=e.createBuffer(2,a,e.sampleRate);for(let c=0;c<2;c++){let l=o.getChannelData(c);for(let h=0;h<a;h++)l[h]=(Math.random()*2-1)*Math.pow(1-h/a,3.2)}this.verb=e.createConvolver(),this.verb.buffer=o,this.verbIn=e.createGain(),this.verbIn.gain.value=.35,this.verbIn.connect(this.verb),this.verb.connect(this.master),this.startAmbient()}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.8,this.ctx.currentTime,.03)}get ok(){return this.ctx&&!this.muted&&this.ctx.state==="running"}out(t=0,e=.3){let n=this.ctx,s=n.createGain(),r=s;if(n.createStereoPanner){let o=n.createStereoPanner();o.pan.value=Be(t,-1,1),s.connect(o),r=o}r.connect(this.master);let a=n.createGain();return a.gain.value=e,r.connect(a),a.connect(this.verbIn),s}nz(t,e,n,s,r,a,o,c=1){let l=this.ctx,h=l.createBufferSource();h.buffer=this.noise,h.loop=!0;let u=l.createBiquadFilter();u.type=n,u.Q.value=c,u.frequency.setValueAtTime(s,t),u.frequency.exponentialRampToValueAtTime(Math.max(20,r),t+e);let d=l.createGain();d.gain.setValueAtTime(a,t),d.gain.exponentialRampToValueAtTime(8e-4,t+e),h.connect(u),u.connect(d),d.connect(o),h.start(t,$(1)),h.stop(t+e+.05)}tone(t,e,n,s,r,a,o,c=.003){let l=this.ctx,h=l.createOscillator();h.type=n,h.frequency.setValueAtTime(s,t),h.frequency.exponentialRampToValueAtTime(Math.max(10,r),t+e);let u=l.createGain();u.gain.setValueAtTime(1e-4,t),u.gain.linearRampToValueAtTime(a,t+c),u.gain.exponentialRampToValueAtTime(8e-4,t+e),h.connect(u),u.connect(o),h.start(t),h.stop(t+e+.05)}shot(t){if(!this.ok)return;let e=this.ctx,n=e.currentTime,s=this.out(0,t==="shotgun"||t==="lmg"?.5:.3),r={pistol:[.13,2600,.7,150,.9,.55],smg:[.09,3400,.5,190,.7,.45],shotgun:[.34,1800,1,85,1.2,.9],rifle:[.16,2200,.8,120,1,.7],lmg:[.2,1900,.9,95,1.2,.8]}[t]||[.12,2500,.7,150,1,.6];this.nz(n,r[0],"lowpass",r[1],220,r[2],s,.7),this.nz(n,.025,"highpass",3e3,6e3,.6,s),this.tone(n,r[0]*1.2,"sine",r[3],r[3]*.3,r[4]*.9,s),this.tone(n,.05,"square",r[3]*4,r[3]*1.5,.15,s)}click(t=0,e=3200,n=.35,s=0){if(!this.ok)return;let r=this.ctx.currentTime+t,a=this.out(s,.1);this.nz(r,.03,"bandpass",e,e*.7,n,a,3),this.tone(r,.025,"square",e*.3,e*.2,.05,a)}reload(t){if(!this.ok)return;let e=t==="lmg"?3.4:t==="rifle"?1.7:t==="smg"?1.4:1;this.click(.12,2400,.4),this.click(e*.55,1800,.5),this.click(e*.8,3600,.45),t!=="pistol"&&this.click(e*.92,1400,.5)}pump(){this.click(0,900,.6),this.click(.18,1500,.55)}shell(){this.click(0,2e3,.45)}empty(){this.click(0,1500,.3)}groan(t=0,e=.5,n=1,s=1){if(!this.ok)return;let r=this.ctx,a=r.currentTime;if(a-this.lastGroan<.09)return;this.lastGroan=a;let o=a,c=this.out(t,.45),l=$(70,105)*n,h=r.createOscillator();h.type="sawtooth",h.frequency.setValueAtTime(l*1.25,o),h.frequency.linearRampToValueAtTime(l,o+s*.3),h.frequency.linearRampToValueAtTime(l*.7,o+s);let u=r.createOscillator();u.frequency.value=$(5,9);let d=r.createGain();d.gain.value=6,u.connect(d),d.connect(h.frequency);let f=r.createBiquadFilter();f.type="bandpass",f.Q.value=5,f.frequency.setValueAtTime($(450,700),o),f.frequency.linearRampToValueAtTime($(900,1300),o+s*.6);let p=r.createBiquadFilter();p.type="lowpass",p.frequency.value=1600;let v=r.createGain();v.gain.setValueAtTime(1e-4,o),v.gain.linearRampToValueAtTime(e*.5,o+s*.15),v.gain.exponentialRampToValueAtTime(.001,o+s),h.connect(f),f.connect(p),p.connect(v),v.connect(c),h.start(o),u.start(o),h.stop(o+s+.05),u.stop(o+s+.05),this.nz(o,s*.8,"bandpass",900,500,e*.15,c,2)}zhit(t=0,e=!1){if(!this.ok)return;let n=this.ctx.currentTime,s=this.out(t,.2);this.nz(n,.09,"lowpass",700,120,.5,s),this.tone(n,.1,"sine",120,50,.4,s),e&&this.tone(n,.08,"triangle",900,500,.12,s)}zdie(t=0,e=.4){if(!this.ok)return;this.groan(t,e,.75,.7);let n=this.ctx.currentTime+.15,s=this.out(t,.25);this.nz(n,.25,"lowpass",500,60,.6,s),this.tone(n,.3,"sine",90,35,.5,s)}tick(t){if(!this.ok)return;let e=this.ctx.currentTime,n=this.out(0,0);this.tone(e,.05,"square",t?900:1500,t?600:1300,t?.12:.07,n)}cash(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.2);this.tone(t,.12,"triangle",1250,1250,.22,e),this.tone(t+.07,.25,"triangle",1880,1880,.22,e),this.nz(t,.05,"highpass",5e3,8e3,.15,e)}deny(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,0);this.tone(t,.22,"sawtooth",130,90,.2,e),this.tone(t+.1,.22,"sawtooth",110,80,.2,e)}hurt(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.2);this.nz(t,.18,"lowpass",600,90,.9,e),this.tone(t,.25,"sine",80,40,.8,e),this.tone(t,.2,"sawtooth",220,110,.12,e)}heart(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,0);this.tone(t,.14,"sine",62,38,.7,e),this.tone(t+.18,.14,"sine",56,34,.5,e)}plank(t){if(!this.ok)return;let e=this.ctx.currentTime,n=this.out(0,.3);this.nz(e,t?.16:.08,"bandpass",t?500:800,250,.7,n,2),this.tone(e,.1,"triangle",220,90,.4,n),t&&this.nz(e+.03,.12,"highpass",1500,3e3,.3,n)}repair(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.2);this.nz(t,.07,"bandpass",1100,600,.6,e,2),this.tone(t,.08,"square",300,120,.15,e),this.tone(t+.1,.1,"triangle",1500,1500,.1,e)}door(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.5);this.nz(t,2.2,"lowpass",900,150,.7,e,1),this.tone(t,2.2,"sawtooth",55,42,.2,e,.3);for(let n=0;n<5;n++)this.click(.2+n*.35,700+n*120,.7);this.nz(t+2,.4,"lowpass",400,60,.9,e)}boom(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.7);this.nz(t,2.4,"lowpass",2400,50,1.4,e,.7),this.tone(t,1.6,"sine",90,24,1.3,e),this.tone(t+.05,.8,"sawtooth",50,25,.3,e)}power(t){if(!this.ok)return;let e=this.ctx.currentTime,n=this.out(0,.4);(t==="nuke"?[220,277,330,440]:t==="double"?[392,494,587,784]:[330,440,554,659]).forEach((r,a)=>{this.tone(e+a*.07,.4,"triangle",r,r,.2,n),this.tone(e+a*.07,.4,"sine",r*2,r*2,.08,n)})}medkit(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.5);[523,659,784,1047].forEach((n,s)=>{this.tone(t+s*.08,.5,"sine",n,n,.2,e),this.tone(t+s*.08,.5,"triangle",n*2,n*2,.05,e)}),this.tone(t,.9,"sine",300,600,.12,e,.1)}spawnPower(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.5);this.tone(t,.7,"sine",600,1200,.25,e,.05),this.tone(t+.1,.7,"sine",900,1800,.12,e,.05)}round(t){if(!this.ok)return;let e=this.ctx,n=e.currentTime,s=this.out(0,.8);[55,82.4,98,130.8].forEach((a,o)=>{let c=e.createOscillator();c.type="sawtooth",c.frequency.value=a;let l=e.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(200,n),l.frequency.linearRampToValueAtTime(1400,n+1.1),l.frequency.linearRampToValueAtTime(150,n+3.2);let h=e.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.linearRampToValueAtTime(.16,n+.9),h.gain.exponentialRampToValueAtTime(.001,n+3.4),c.connect(l),l.connect(h),h.connect(s),c.start(n),c.stop(n+3.5)}),[440,415,392,330,294].forEach((a,o)=>{this.tone(n+.5+o*.32,1.3,"sine",a,a,.14,s,.01),this.tone(n+.5+o*.32,1.3,"sine",a*2.01,a*2.01,.04,s,.01)}),this.tone(n,.5,"sine",70,28,.9,s),this.nz(n,.35,"lowpass",700,70,.5,s)}over(){if(!this.ok)return;let t=this.ctx,e=t.currentTime,n=this.out(0,.9);[110,130.8,164.8].forEach(s=>{this.tone(e,3.6,"sawtooth",s,s*.5,.12,n,.4)}),this.tone(e,1.5,"sine",60,25,1,n),this.nz(e,1.2,"lowpass",900,60,.7,n)}jingle(t=4){if(!this.ok)return;let e=this.ctx.currentTime,n=this.out(0,.5),s=[523,659,784,659,587,740,880,740];for(let r=0;r<t*4;r++){let a=s[r%s.length]*(r>8?1.12:1);this.tone(e+r*.2,.32,"triangle",a,a,.1,n,.005)}this.nz(e,.4,"bandpass",600,300,.4,n)}open(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.4);this.nz(t,.5,"bandpass",500,900,.4,e,4),this.tone(t,.5,"sawtooth",120,220,.1,e)}startAmbient(){let t=this.ctx,e=t.createGain();e.gain.value=.5,e.connect(this.master);let n=t.createBufferSource();n.buffer=this.noise,n.loop=!0;let s=t.createBiquadFilter();s.type="bandpass",s.Q.value=.8,s.frequency.value=380;let r=t.createGain();r.gain.value=.07;let a=t.createOscillator();a.frequency.value=.11;let o=t.createGain();o.gain.value=.045,a.connect(o),o.connect(r.gain);let c=t.createOscillator();c.frequency.value=.07;let l=t.createGain();l.gain.value=140,c.connect(l),l.connect(s.frequency),n.connect(s),s.connect(r),r.connect(e),n.start(),a.start(),c.start();let h=t.createOscillator();h.type="sawtooth",h.frequency.value=36;let u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=90;let d=t.createGain();d.gain.value=.07,h.connect(u),u.connect(d),d.connect(e),h.start();let f=t.createOscillator();f.type="sine",f.frequency.value=4300;let p=t.createGain();p.gain.value=0;let v=t.createOscillator();v.type="square",v.frequency.value=28;let g=t.createGain();g.gain.value=.004,v.connect(g),g.connect(p.gain);let m=t.createOscillator();m.frequency.value=.3;let b=t.createGain();b.gain.value=.003,m.connect(b),b.connect(p.gain),f.connect(p),p.connect(e),f.start(),v.start(),m.start()}};await Ap();var mo=200,aM=4.5,oM=.38*mo,go=.4,jp=.5,Qp=20,t0=.5,lM=40,dt=i=>document.getElementById(i),Oi=new URLSearchParams(location.search),rn=Oi.has("touch")||matchMedia("(pointer:coarse)").matches&&"ontouchstart"in window||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);document.body.classList.toggle("touch",rn);var Kt=new qc;try{Kt.muted=localStorage.getItem("vwz_mute")==="1"}catch{}var ls=dt("c"),Rn=new Tc({canvas:ls,antialias:!rn,powerPreference:"high-performance",preserveDrawingBuffer:Oi.has("test")});Rn.toneMapping=Ts;Rn.toneMappingExposure=1.05;Rn.outputColorSpace=Fe;Rn.shadowMap.type=bs;var cn=new xs,cM=3812412;cn.fog=new jr(cM,.026);var Ku=rn?76:72,Ye=new nn(Ku,1,.05,700);Ye.rotation.order="YXZ";cn.add(Ye);var Si=Oi.get("quality")||(()=>{try{return localStorage.getItem("vwz_q")||"auto"}catch{return"auto"}})(),Un=Si==="high"?2:Si==="medium"?1:Si==="low"||rn?0:2,Pr=Ep(rn?256:512),ne=new Uc(cn,Pr,Un),Pe=new Wc(cn,Pr,Un),Ui=new lo(Pr,260,{R:20,y0:.3,y1:6,size:.07,alpha:.22});cn.add(Ui.points);var Ps=new lo(Pr,46,{R:55,y0:.4,y1:2.2,size:5.5,alpha:.045,col:[.55,.5,.62],additive:!1,speed:.7});cn.add(Ps.points);var tn=new Oc(cn,ne,Un);window.__hd=Gp(tn);var jc=new xs,Cr=new Xc(Rn,cn,Ye,jc);{let i=new Sr(Rn),t=new xs,e=new St(ne.sky.geometry,ne.sky.material.clone());e.scale.setScalar(.12),t.add(e);let n=i.fromScene(t,0,.1,100);cn.environment=n.texture,cn.environmentIntensity=.45,jc.environment=n.texture,jc.environmentIntensity=.9,i.dispose()}var ni=new ba(14674687,40,55,.46,.75,1.25);ni.position.set(.16,-.1,-.1);ni.target.position.set(.16,-.1,-10);Ye.add(ni,ni.target);ni.shadow.mapSize.set(1024,1024);ni.shadow.camera.near=.3;ni.shadow.camera.far=40;ni.shadow.bias=-6e-4;ni.shadow.normalBias=.03;var as=new Ji(16758886,0,20,2);Ye.add(as);as.position.set(.15,-.05,-3.2);var ii=new St(new _s(3.4,14,28,1,!0),new de({transparent:!0,depthWrite:!1,blending:$e,side:ln,uniforms:{c:{value:new ft(.75,.85,1)},k:{value:.05}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(vy,1.2)*pow(f,2.)*k); }"}));ii.geometry.translate(0,-7,0);ii.geometry.rotateX(-Math.PI/2);ii.position.set(.16,-.1,-.2);ii.userData.noAO=!0;ii.renderOrder=6;Ye.add(ii);var Ls=new Jt;Ls.matrixAutoUpdate=!1;jc.add(Ls);var hM=new Ms(12175615,4864556,1.5),ju=new Ss(16773341,2.2),eh=new Ji(16758886,0,3,2);ju.position.set(1.5,2,1);Ls.add(hM,ju,ju.target,eh);eh.position.set(.15,-.05,-.9);var po={},bi=new Ii(new ui({map:Pr.glow,color:new ft(6,4,1.6),blending:$e,depthWrite:!1,transparent:!0,fog:!1}));bi.scale.setScalar(.3);bi.visible=!1;bi.userData.noAO=!0;function uM(i){i.querySelectorAll("[data-w]").forEach(t=>{t.style.width=t.dataset.w+"%"})}function dM(i){if(!po[i]){let t=Qa(i);t.visible=!1,Ls.add(t),po[i]=t}return po[i]}var R={x:0,z:12,yaw:0,pitch:0,vx:0,vz:0,hp:mo,maxHp:mo,lastHit:-99,pts:500,kills:0,heads:0,bob:0,rP:0,rY:0,shake:0,dmg:0,flashlight:!0,slots:[],cur:0,fireCd:0,reloadT:0,reloadTot:0,switchT:0,kick:0,mv:0,sprint:!1,heat:0,dead:!1,deadT:0,sx:0,sy:0},st={state:"menu",time:0,runTime:0,round:0,toSpawn:0,spawnT:0,interT:0,phase:"wait",drops:0,lastDrop:-99,kills:0,double:0,powers:[],ups:[],repairT:0,healBeat:0,lastMed:-99,orbit:0,menuSpawn:0,flashT:0,muzzleT:0},ee={f:0,s:0,l:0,r:0,fire:!1,reload:!1,interact:!1,interactEdge:!1,sprint:!1},Qc=i=>({id:i,mag:He[i].mag,reserve:He[i].reserve}),cs=()=>R.slots[R.cur];function nh(i){Un=i;let t=window.devicePixelRatio||1,e=i===2?Math.min(t,1.75):i===1?Math.min(t,1.25):Be(t*.7,.6,1);Rn.setPixelRatio(e),Cr.pr=e,Rn.shadowMap.enabled=i>0,Rn.shadowMap.needsUpdate=!0,Cr.build(["direct","bloom","full"][i]),e0(),ne.setTier(i),tn.setTier(i),Pe.tier=i,Ui.points.visible=i>0,Ps.points.visible=i>0,ii.visible=i>0&&R.flashlight,ni.castShadow=i===2;for(let n of tn.list)n.root.traverse(s=>{s.isMesh&&(s.castShadow=i>0)});cn.traverse(n=>{n.material&&!Array.isArray(n.material)&&(n.material.needsUpdate=!0)}),document.body.classList.toggle("lowq",i===0),Rn.toneMappingExposure=i===0?1.15:1.05,dt("fx-damage").style.display=i===0?"":"none"}function e0(){let i=window.innerWidth,t=window.innerHeight;Rn.setSize(i,t,!1),ls.style.width=i+"px",ls.style.height=t+"px",Ye.aspect=i/t,Ye.fov=i/t<.9?Ku+14:Ku,Ye.updateProjectionMatrix(),Cr.setSize(i,t,Rn.getPixelRatio()),Pe.setScale(t*Rn.getPixelRatio(),Ye.fov),Ps.ps.uniforms.uScale.value=Pe.soft.uniforms.uScale.value,Ui.ps.uniforms.uScale.value=Pe.soft.uniforms.uScale.value}window.addEventListener("resize",e0);var uo=0,$c=0,Kc=3;function fM(i){if(!(st.state!=="playing"||Si!=="auto"||Oi.has("noadapt"))){if(Kc>0){Kc-=i;return}if(uo+=i,$c++,uo>=2.5){let t=$c/uo;uo=0,$c=0,t<28&&Un>0&&(nh(Un-1),Kc=3,Is("Graphics lowered for smoother play"))}}}var Ce={hp:-1,pts:-1,mag:-1,res:-1,name:"",prompt:"",round:-1,alt:""},qp=0;function Is(i){let t=dt("toast");t.textContent=i,t.classList.add("on"),clearTimeout(qp),qp=setTimeout(()=>t.classList.remove("on"),2600)}function xo(i,t=""){let e=dt("banner");e.innerHTML=i+(t?`<small>${t}</small>`:""),e.classList.remove("on"),e.offsetWidth,e.classList.add("on")}function td(i,t,e){let n=document.createElement("span");n.textContent=i,t==="heal"?n.className="g":t&&(n.className="h"),n.style.setProperty("--x",$(-80,80)+"px"),n.style.top=$(10,50)+"px",dt("pop").appendChild(n),setTimeout(()=>n.remove(),950)}function pM(){let i=Math.max(0,Math.round(R.hp));i!==Ce.hp&&(Ce.hp=i,dt("hpFill").style.width=100*i/R.maxHp+"%",dt("hpFill").classList.toggle("low",i<R.maxHp*go),dt("hpNum").textContent=i);let t=id();if(t!==Ce.med&&(Ce.med=t,dt("medCue").classList.toggle("on",t)),R.pts!==Ce.pts){if(Ce.pts>=0&&R.pts>Ce.pts){let h=dt("pts");h.classList.remove("bump"),h.offsetWidth,h.classList.add("bump")}Ce.pts=R.pts,dt("pts").textContent=R.pts.toLocaleString()}let e=cs(),n=He[e.id];n.name!==Ce.name&&(Ce.name=n.name,dt("wName").textContent=n.name),e.mag!==Ce.mag&&(Ce.mag=e.mag,dt("ammoMag").textContent=e.mag,dt("ammoMag").classList.toggle("empty",e.mag===0)),e.reserve!==Ce.res&&(Ce.res=e.reserve,dt("ammoRes").textContent="/ "+e.reserve);let s=R.slots[1-R.cur],r=s?He[s.id].name+"  "+s.mag+"/"+s.reserve:"";if(r!==Ce.alt&&(Ce.alt=r,dt("wAlt").textContent=r),st.round!==Ce.round){Ce.round=st.round;let h=dt("roundNum");h.textContent=st.round||1,h.classList.remove("pulse"),h.offsetWidth,h.classList.add("pulse")}let a=dt("reloadBar");R.reloadT>0?(a.classList.add("on"),a.firstElementChild.style.width=100*(1-R.reloadT/R.reloadTot)+"%"):a.classList.remove("on");let o=Be(R.dmg,0,1);dt("fx-damage").style.opacity=Un===0?Math.min(1,o+(R.hp<R.maxHp*go?.25:0)):0;let c=dt("powers"),l="";st.double>0&&(l+=`<div class="pw pw2x glass${st.double<5?" blink":""}">2\xD7 CASH <b>${Math.ceil(st.double)}</b></div>`),c._h!==l&&(c._h=l,c.innerHTML=l)}function os(i,t=!0){let e=dt("prompt");i!==Ce.prompt&&(Ce.prompt=i,e.innerHTML=i,uM(e),e.classList.toggle("on",!!i))}function _o(){for(let t in po)po[t].visible=!1;let i=dM(cs().id);i.visible=st.state==="playing"||R.dead,i.add(bi),bi.position.copy(i.userData.muzzle.position).add(new I(0,0,-.04)),R.gun=i}function Rr(i){i===R.cur||!R.slots[i]||R.switchT>0||(R.cur=i,R.reloadT=0,R.switchT=.32,_o(),Kt.click(0,2500,.3))}function ed(i){let t=R.slots.findIndex(e=>e&&e.id===i);if(t>=0){let e=R.slots[t];e.mag=He[i].mag,e.reserve=He[i].reserve;return}R.slots[1]?R.slots[R.cur]=Qc(i):(R.slots[1]=Qc(i),R.cur=1),R.reloadT=0,R.switchT=.4,_o()}function th(){let i=cs(),t=He[i.id];R.reloadT>0||R.switchT>0||i.mag>=t.mag||i.reserve<=0||(R.reloadTot=R.reloadT=t.perShell?t.reload*(t.mag-i.mag)+.4:t.reload,R.shellT=t.reload,Kt.reload(t.perShell?"pistol":i.id))}function mM(){let i=cs(),t=He[i.id],e=Math.min(t.mag-i.mag,i.reserve);i.mag+=e,i.reserve-=e,R.reloadT=0,t.perShell&&Kt.pump()}var Yc=new I,co=new I,ho=new I,Zc=new I,Jc=new I,Yp=new I,Ju=new I;function gM(i){let t=R.yaw+R.rY,e=R.pitch+R.rP;return i.set(-Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e))}function n0(){return 1.7-(R.dead?Math.min(1.1,R.deadT*1.6):0)+Math.sin(R.bob*2)*.035*R.mv}function i0(){let i=cs(),t=He[i.id];if(i.mag<=0){Kt.empty(),R.fireCd=.25,th();return}i.mag--,R.fireCd=60/t.rpm,R.kick=Math.min(1.6,R.kick+1),R.heat=Math.min(1,R.heat+.12),Kt.shot(t.snd),gM(co),Yc.set(R.x,n0(),R.z),ho.set(Math.cos(R.yaw),0,-Math.sin(R.yaw)),Zc.crossVectors(ho,co).normalize(),ho.crossVectors(co,Zc).normalize();let e=t.spread*(1+R.mv*.9+R.heat*.8),n=co.clone();Ye.updateMatrixWorld(!0),R.gun.userData.muzzle.getWorldPosition(Jc),R.gun.userData.eject.getWorldPosition(Yp);let s=new Map,r=0;for(let a=0;a<t.pellets;a++){let o=$(Xe),c=Math.sqrt(Math.random())*e,l=co.clone().copy(n).addScaledVector(ho,Math.cos(o)*c).addScaledVector(Zc,Math.sin(o)*c).normalize(),h=tn.rayHit(Yc,l,t.range),u=ne.ray(Yc,l,t.range),d=t.range,f=null,p=null;h&&(!u||h.t<u.t)?(d=h.t,p=h):u&&(d=u.t,f=u.n);let v=new I().copy(l).multiplyScalar(d).add(Yc);if((a<(t.pellets>1?3:1)||Pe.tier>0)&&Pe.tracer(Jc,v,t.pellets>1?.006:.011),p){let g=s.get(p.z)||{dmg:0,head:!1,p:v,n:l.clone().negate()},m=t.pellets>1?Be(1.25-p.t/16,.25,1):1;g.dmg+=t.dmg*(p.head?t.head:1)*m,g.head=g.head||p.head,g.p=v,s.set(p.z,g)}else f&&r<4&&(r++,Ju.set(f.x,f.y,f.z),Pe.sparks(v,Ju,7),Pe.dust(v,Ju,2))}as.intensity=55,eh.intensity=6,st.muzzleT=.06,bi.visible=!0;{let a=R.gun.userData.flash;a&&(a.visible=!0,a.rotation.z=$(Xe),a.scale.setScalar($(.8,1.3)*(t.id==="shotgun"?1.5:1))),R.gun.userData.slideT=1}if(bi.material.rotation=$(Xe),bi.scale.setScalar($(.25,.42)*(t.id==="shotgun"?1.4:1)),Pe.flash(Jc,n),Pe.smoke(Jc,n,1),Pe.maxCas){let a=new I().copy(ho).multiplyScalar($(1.2,2.4)).addScaledVector(Zc,$(1.2,2.2)).addScaledVector(n,$(-.3,.5));(i.id!=="shotgun"||Math.random()<0)&&Pe.casing(Yp,a)}R.rP+=t.kick*$(.85,1.15),R.rY+=$(-1,1)*t.kick*.45,R.shake=Math.min(1,R.shake+t.shake*.5),t.perShell===!0&&i.mag>0&&setTimeout(()=>Kt.pump(),260);for(let[a,o]of s){let c=tn.damage(a,o.dmg,o.head,o.p,o.n);if(!c)continue;let l=st.double>0?2:1;Kt.zhit(Qu(a.pos),o.head),Pe.blood(o.p,o.n,o.head?14:8),Pe.sparks(o.p,o.n,2);let h=10*l,u=dt("hitm");u.classList.remove("on","kill"),u.offsetWidth,u.classList.add("on"),Kt.tick(!1),c.killed&&(h=(o.head?100:a.value)*l,R.kills++,st.kills++,o.head&&R.heads++,u.classList.add("kill"),Kt.tick(!0),Kt.zdie(Qu(a.pos),.5),Pe.blood(o.p,o.n,26,1.4),Pe.dust(new I(a.pos.x,.3,a.pos.z),{x:0,y:1,z:0},5),R.shake=Math.min(1,R.shake+.1),xM(a),s0(a)),setTimeout(()=>u.classList.remove("on"),140),R.pts+=h,td("+"+h,o.head&&c.killed)}i.mag===0&&!R.reloadT&&setTimeout(()=>st.state==="playing"&&th(),220)}var Qu=i=>{let t=i.x-R.x,e=i.z-R.z,n=Math.hypot(t,e)||1;return(t*Math.cos(R.yaw)-e*Math.sin(R.yaw))/n};function xM(i){st.round<2||st.drops>=2||st.time-st.lastDrop<18||Math.random()<.05&&nd(Nn(["ammo","double","nuke"]),i.pos.x,i.pos.z)}var Fi={ammo:{name:"FULL MAGS",col:[.3,.7,2.4],sub:"All ammo refilled",hex:"#6bb8ff"},double:{name:"2\xD7 CASH",col:[3,2.2,.4],sub:"Double points for 30s",hex:"#ffd36b"},nuke:{name:"KABOOM",col:[3,.4,.4],sub:"Every zombie goes down",hex:"#ff6b6b"},health:{name:"MED KIT",col:[.25,2.6,.9],sub:"+50% health",hex:"#4dffb0"}};function nd(i,t,e){let n=Fi[i].col,s=new Jt;s.position.set(t,1,e);let r=i==="health",a;if(r){let d=new Ae({color:new ft(...n),toneMapped:!1});a=new Jt,a.add(new St(new ae(.46,.14,.14),d),new St(new ae(.14,.46,.14),d),new St(new ae(.14,.14,.46),d)),a.traverse(f=>f.userData.noAO=!0)}else a=new St(new va(.28,0),new Ae({color:new ft(...n),toneMapped:!1}));a.userData.noAO=!0;let o=document.createElement("canvas");o.width=256,o.height=64;let c=o.getContext("2d");c.font="900 40px system-ui, sans-serif",c.textAlign="center",c.fillStyle=Fi[i].hex,c.shadowColor=Fi[i].hex,c.shadowBlur=14,c.fillText(Fi[i].name,128,44);let l=new Ii(new ui({map:new vn(o),transparent:!0,depthWrite:!1,fog:!1}));l.scale.set(1.5,.375,1),l.position.y=.6,l.userData.noAO=!0;let h=new Ii(new ui({map:Pr.glow,color:new ft(n[0]*.55,n[1]*.55,n[2]*.55),blending:$e,depthWrite:!1,transparent:!0}));h.scale.setScalar(1.25),h.userData.noAO=!0;let u=new St(new sn(.12,.12,12,8,1,!0),new Ae({color:new ft(n[0]*.3,n[1]*.3,n[2]*.3),transparent:!0,opacity:.35,blending:$e,depthWrite:!1}));u.position.y=5,u.userData.noAO=!0,s.add(a,l,h,u),cn.add(s),st.ups.push({type:i,g:s,core:a,label:l,t:r?lM:28,x:t,z:e}),r?st.lastMed=st.time:(st.drops++,st.lastDrop=st.time),Kt.spawnPower()}function id(){return st.state==="playing"&&!R.dead&&R.hp<=R.maxHp*jp&&st.time-st.lastMed>=Qp&&!st.ups.some(i=>i.type==="health")}function s0(i){id()&&nd("health",i.pos.x,i.pos.z)}function r0(i){if(i.type==="health"){let e=R.maxHp*t0,n=R.hp;R.hp=Math.min(R.maxHp,R.hp+e),R.lastHit=Math.max(R.lastHit,st.time-1),Kt.medkit(),xo(Fi.health.name,"+"+Math.round(R.hp-n)+" health"),td("+"+Math.round(R.hp-n)+" HP","heal"),cn.remove(i.g),Pe.glowBurst(new I(i.x,1,i.z),...Fi.health.col.map(s=>s*.7),24,4);return}Kt.power(i.type);let t=0;if(xo(Fi[i.type].name,Fi[i.type].sub),i.type==="ammo")for(let e of R.slots)e&&(e.mag=He[e.id].mag,e.reserve=He[e.id].reserve);else if(i.type==="double")st.double=30;else if(i.type==="nuke"){let e=tn.killAll();for(let n of e)Pe.blood(new I(n.pos.x,1.2,n.pos.z),{x:0,y:1,z:0},22,1.4),Pe.glowBurst(new I(n.pos.x,1.2,n.pos.z),3,1.5,.4,10,5);R.pts+=400*(st.double>0?2:1),Kt.boom(),R.shake=1,dt("fx-flash").style.transition="none",dt("fx-flash").style.opacity=.85,requestAnimationFrame(()=>{dt("fx-flash").style.transition="opacity 1.2s",dt("fx-flash").style.opacity=0}),st.kills+=e.length,R.kills+=e.length}cn.remove(i.g),Pe.glowBurst(new I(i.x,1,i.z),...Fi[i.type].col.map(e=>e*.7),24,4)}var Ds={};function _M(i){if(!Ds[i]){let t=Qa(i,!1);t.scale.setScalar(1.6),t.rotation.y=0,t.visible=!1,ne.crate.hold.add(t),Ds[i]=t}return Ds[i]}function vM(){let i=ne.crate;if(i.state==="idle"){if(R.pts<i.price){Kt.deny(),Is("Not enough points");return}R.pts-=i.price,Kt.cash(),Kt.open(),Kt.jingle(4),i.state="roll",i.t=0,i.pick=Nn(ja.filter(t=>!R.slots.some(e=>e&&e.id===t)).concat(["smg"].filter(()=>!1))),i.pick=i.pick||Nn(ja)}else i.state==="ready"&&(ed(i.weapon),Kt.cash(),Kt.click(0,2e3,.5),xo(He[i.weapon].name.toUpperCase()),sd())}function sd(){let i=ne.crate;i.state="idle",i.t=0;for(let t in Ds)Ds[t].visible=!1;i.model=null}function yM(i){let t=ne.crate,e=t.state==="idle"?0:-1.25;if(t.lid.rotation.x+=(e-t.lid.rotation.x)*Math.min(1,i*6),t.state==="roll"){t.t+=i;let n=Math.floor(t.t/.14)%ja.length,s=t.t>3.6?t.pick:ja[n];for(let a in Ds)Ds[a].visible=!1;let r=_M(s);r.visible=!0,t.model=r,t.t>3.6&&(t.state="ready",t.weapon=t.pick,t.t=0,Kt.power("ammo"))}else t.state==="ready"&&(t.t+=i,t.t>9&&(Kt.open(),sd(),Is("The toolbox slammed shut")))}function MM(i){return Math.round(6+i*2.3+i*i*.12)}function Zp(i){st.round=i,st.toSpawn=MM(i),st.brutes=i>=5?i%5===0?Math.min(4,1+(i/5|0)):i>=7?1:0:0,st.phase="round",st.spawnT=1.5,st.drops=0,Kt.round(i),xo("ROUND "+i,i===1?"Board up. Hold the yard.":"They are faster this time");let t=dt("roundNum");t.classList.remove("pulse"),t.offsetWidth,t.classList.add("pulse")}function SM(){return ne.windows.filter(i=>i.area==="A"||ne.door.open)}function bM(i){if(st.phase!=="round"||st.toSpawn<=0||(st.spawnT-=i,st.spawnT>0))return;if(tn.alive>=tn.max){st.spawnT=.3;return}let t=SM();t.sort((s,r)=>(s.c.x-R.x)**2+(s.c.z-R.z)**2-((r.c.x-R.x)**2+(r.c.z-R.z)**2));let e=Math.random()<.6?t[Math.min(t.length-1,Math.random()*2|0)]:Nn(t),n=st.brutes>0&&st.toSpawn<=st.brutes;tn.spawn(e,st.round,n)&&st.toSpawn--,st.spawnT=Math.max(.35,2-st.round*.13)*$(.7,1.2)}function a0(){let i=null,t=(n,s,r)=>{s<r&&(!i||s<i.d)&&(i={...n,d:s})};for(let n of ne.windows)n.count<6&&t({type:"win",w:n},Math.hypot(R.x-n.in.x,R.z-n.in.z),2.1);for(let n of ne.buys)t({type:"buy",b:n},Math.hypot(R.x-n.pos.x,R.z-n.pos.z),1.9);ne.door.open||t({type:"door"},Math.hypot(R.x-ne.door.pos.x,R.z-(vi+1)),3.4);let e=ne.crate;return(e.state==="idle"||e.state==="ready")&&t({type:"crate"},Math.hypot(R.x-e.x,R.z-e.z),2.2),i}function o0(i,t,e){if(i.type==="win"){t&&(st.repairT+=e,st.repairT>.5&&(st.repairT=0,ne.addPlank(i.w)&&(Kt.repair(),R.pts+=10*(st.double>0?2:1),td("+10"))));return}if(ee.interactEdge)if(i.type==="buy"){let n=R.slots.find(r=>r&&r.id===i.b.id),s=n?Math.floor(i.b.price/2):i.b.price;if(n&&n.mag===He[n.id].mag&&n.reserve===He[n.id].reserve){Is("Ammo already full");return}if(R.pts<s){Kt.deny(),Is("Not enough points");return}R.pts-=s,Kt.cash(),ed(i.b.id)}else if(i.type==="door"){if(R.pts<ne.door.price){Kt.deny(),Is("Not enough points");return}R.pts-=ne.door.price,Kt.cash(),Kt.door(),ne.door.open=!0,xo("GATE OPEN","The back lot awaits")}else i.type==="crate"&&vM()}function EM(i){if(!i)return os("");let t="<kbd>E</kbd>",e=n=>`<span class="cost${R.pts<n?" poor":""}">${n}</span>`;if(i.type==="win")os(`${t}Hold to repair barricade<span class="prog"><i data-w="${Math.round(i.w.count/6*100)}"></i></span>`);else if(i.type==="buy"){let n=R.slots.find(s=>s&&s.id===i.b.id);os(n?`${t}Refill ${i.b.name}${e(Math.floor(i.b.price/2))}`:`${t}Buy ${i.b.name}${e(i.b.price)}`)}else i.type==="door"?os(`${t}Open the gate${e(ne.door.price)}`):i.type==="crate"&&os(ne.crate.state==="ready"?`${t}Take ${He[ne.crate.weapon].name}`:`${t}Lucky Toolbox${e(ne.crate.price)}`)}function TM(i){let t=ee.f,e=ee.s,n=0,s=0;if(t||e){let l=Math.sin(R.yaw),h=Math.cos(R.yaw);n=-l*t+h*e,s=-h*t-l*e;let u=Math.hypot(n,s)||1;n/=u,s/=u}let r=Math.min(1,Math.hypot(t,e));R.sprint=(ee.sprint||r>.92&&rn)&&t>.3&&R.reloadT<=0;let a=(R.sprint?6.6:4.5)*(R.switchT>0?.9:1)*r,o=Math.min(1,i*10);R.vx+=(n*a-R.vx)*o,R.vz+=(s*a-R.vz)*o,R.x+=R.vx*i,R.z+=R.vz*i,ne.resolve(R,.42);let c=Math.hypot(R.vx,R.vz);R.mv=Be(c/4.5,0,1.4),R.bob+=c*i*1.7}function wM(i){R.fireCd>0&&(R.fireCd-=i),R.switchT>0&&(R.switchT-=i),R.heat=Math.max(0,R.heat-i*1.4),R.kick=Math.max(0,R.kick-i*8);let t=cs(),e=He[t.id];if(R.reloadT>0){let n=R.reloadT;R.reloadT-=i,e.perShell?(R.shellT-=i,R.shellT<=0&&t.mag<e.mag&&t.reserve>0&&(t.mag++,t.reserve--,R.shellT=e.reload,Kt.shell()),ee.fire&&t.mag>0?R.reloadT=0:(t.mag>=e.mag||t.reserve<=0)&&(R.reloadT=0,Kt.pump())):R.reloadT<=0&&mM()}ee.fire&&R.fireCd<=0&&R.switchT<=0&&(R.reloadT<=0||e.perShell)&&!R.sprintBlock&&((e.auto||!R.fired)&&i0(),R.fired=!0),ee.fire||(R.fired=!1),ee.reload&&(ee.reload=!1,th())}function Jp(i,t){R.rP*=Math.exp(-i*9),R.rY*=Math.exp(-i*9),R.shake=Math.max(0,R.shake-i*2.2),R.dmg=Math.max(0,R.dmg-i*.8);let e=R.shake*R.shake,n=(Math.sin(t*61)+Math.sin(t*37.3))*.5,s=(Math.sin(t*53.1)+Math.cos(t*41))*.5,r=R.dead?Math.min(1,R.deadT*1.4):0,a=Be(R.vx*Math.cos(R.yaw)-R.vz*Math.sin(R.yaw),-6,6);Ye.position.set(R.x+n*e*.06,n0()+s*e*.05,R.z),Ye.rotation.set(Be(R.pitch+R.rP+s*e*.035-r*.4,-1.5,1.5),R.yaw+R.rY+n*e*.035,-a*.0045+n*e*.02+r*.9),Ye.updateMatrixWorld(!0),Ls.matrix.copy(Ye.matrixWorld);let o=R.gun;if(!o)return;let c=o.userData.base,l=R.kick,h=l*.05,u=0,d=0,f=0,p=0,v=l*.04;if(f+=Math.cos(R.bob)*.006*R.mv,p+=Math.abs(Math.sin(R.bob))*.008*R.mv*-1,f+=-Be(R.sx,-1,1)*.02,p+=Be(R.sy,-1,1)*.02,R.sprint&&(u+=.45,h-=.25,p-=.05,f-=.03),R.reloadT>0&&!He[cs().id].perShell){let w=1-R.reloadT/R.reloadTot,y=Math.sin(w*Math.PI);h-=y*.5,p-=y*.12,d+=y*.35,f-=y*.04}else if(R.reloadT>0){let w=Math.abs(Math.sin(t*6))*.5+.3;h-=.25,p-=.05,u+=.1*w}if(R.switchT>0){let w=R.switchT/.32;p-=Math.sin(Be(w,0,1)*Math.PI/2)*.35,h-=w*.5}let g=1-Math.exp(-i*18);if(o.userData.rx=_i(o.userData.rx||0,h,g),o.userData.ry=_i(o.userData.ry||0,u,g),o.userData.rz=_i(o.userData.rz||0,d,g),o.rotation.set(o.userData.rx,o.userData.ry,o.userData.rz),o.userData.slideT>0){o.userData.slideT=Math.max(0,o.userData.slideT-i*14);let w=Math.sin(o.userData.slideT*Math.PI);o.userData.slide&&(o.userData.slide.position.z=w*.028),o.userData.pump&&(o.userData.pump.position.z=0)}o.position.set(c.x+f,c.y+p,c.z+v),R.sx*=Math.exp(-i*8),R.sy*=Math.exp(-i*8),st.muzzleT>0&&(st.muzzleT-=i,st.muzzleT<=0&&(bi.visible=!1,R.gun?.userData.flash&&(R.gun.userData.flash.visible=!1))),as.intensity*=Math.exp(-i*40),as.intensity<.5&&(as.intensity=0),eh.intensity=as.intensity>0?as.intensity/9:0;let m=dt("cross"),b=6+He[cs().id].spread*650*(1+R.mv*.9+R.heat*.8)*.5;m._sp!==Math.round(b)&&(m._sp=Math.round(b),m.style.setProperty("--s",m._sp+"px"),m.children[0].style.left=-(m._sp+9)+"px",m.children[0].style.top="-1px",m.children[1].style.left=m._sp+"px",m.children[1].style.top="-1px",m.children[2].style.top=-(m._sp+9)+"px",m.children[2].style.left="-1px",m.children[3].style.top=m._sp+"px",m.children[3].style.left="-1px")}function AM(i){if(R.dead||st.state!=="playing")return;R.hp-=i.dmg,R.lastHit=st.time,R.dmg=Math.max(R.dmg,.65+.35*(1-Math.max(0,R.hp)/R.maxHp)),R.shake=1,Kt.hurt();let t=i.pos.x-R.x,e=i.pos.z-R.z,n=Math.atan2(t,-e)- -R.yaw,s=dt("fx-dir");s.style.display="block",s.firstElementChild.style.transform=`rotate(${n*180/Math.PI}deg)`,s.style.opacity=1,setTimeout(()=>s.style.opacity=0,500),setTimeout(()=>s.style.display="none",900),R.hp<=0&&l0()}function l0(){R.hp=0,R.dead=!0,R.deadT=0,Kt.over(),ee.fire=!1,dt("hud").classList.add("hud-dead"),os(""),document.pointerLockElement&&document.exitPointerLock?.()}function rd(){try{return JSON.parse(localStorage.getItem("vwz_scores")||"[]")}catch{return[]}}function RM(i){let t=rd();t.push(i),t.sort((e,n)=>n.round-e.round||n.pts-e.pts);try{localStorage.setItem("vwz_scores",JSON.stringify(t.slice(0,5)))}catch{}return t.slice(0,5)}var fo=null;function ad(){xi.top().then(i=>{xi.render(dt("globalList"),i,localStorage.getItem("vwfest_nick")),xi.render(dt("oGlobal"),i,localStorage.getItem("vwfest_nick"))})}function CM(){fo={round:Math.max(1,st.round),pts:R.pts,kills:R.kills},dt("nick").value=localStorage.getItem("vwfest_nick")||"",dt("postMsg").textContent="",dt("postMsg").className="postMsg",dt("fPost").classList.toggle("hidden",!xi.hasToken()),dt("bPost").disabled=!1,xi.hasToken()||(dt("postMsg").textContent="Leaderboard offline: score saved on this device."),ad()}dt("fPost").onsubmit=i=>{if(i.preventDefault(),!fo)return;let t=dt("nick").value.trim();dt("bPost").disabled=!0;try{localStorage.setItem("vwfest_nick",t)}catch{}xi.submit(t,fo.round,fo.pts,fo.kills).then(e=>{e.ok?(dt("fPost").classList.add("hidden"),dt("postMsg").className="postMsg ok",dt("postMsg").textContent="Posted! You are #"+e.rank+" on the survivor board.",xi.render(dt("oGlobal"),e.top,t),xi.render(dt("globalList"),e.top,t)):(dt("postMsg").textContent=e.error||"Could not post.",dt("bPost").disabled=!1)})};function od(i,t){i.innerHTML=t.length?t.map((e,n)=>`<li>Round <b>${e.round}</b> \xB7 ${e.kills} kills \xB7 ${e.pts.toLocaleString()} pts</li>`).join(""):'<li class="muted">No runs yet \u2014 be the first.</li>'}function PM(){Object.assign(R,{x:0,z:12,yaw:0,pitch:0,vx:0,vz:0,hp:mo,lastHit:-99,pts:500,kills:0,heads:0,rP:0,rY:0,shake:0,dmg:0,cur:0,fireCd:0,reloadT:0,switchT:0,kick:0,dead:!1,deadT:0,slots:[Qc("pistol"),null]}),Object.assign(st,{time:0,runTime:0,round:0,toSpawn:0,phase:"wait",interT:2.6,drops:0,double:0,kills:0,repairT:0,lastMed:-99}),tn.reset(),Pe.reset();for(let i of st.ups)cn.remove(i.g);st.ups=[],sd(),ne.crate.lid.rotation.x=0;for(let i of ne.windows)for(;i.count<6;)ne.addPlank(i);Ce.hp=Ce.pts=Ce.mag=Ce.res=-1,Ce.name=Ce.alt="",Ce.round=-1,dt("hud").classList.remove("hud-dead"),ne.door.open&&(ne.door.open=!1,ne.door.t=0,ne.door.mesh.position.y=0,ne.door.col.off=!1),_o()}function vo(){if(Kt.init(),PM(),xi.start(),st.state="playing",_o(),["menu","over","pause"].forEach(i=>dt(i).classList.add("hidden")),dt("hud").classList.remove("hidden"),dt("touch").classList.toggle("hidden",!rn),ii.visible=Un>0&&R.flashlight,Kc=3,uo=0,$c=0,!rn&&!Oi.has("test"))try{ls.requestPointerLock?.()?.catch?.(()=>{})}catch{}else if(rn)try{document.documentElement.requestFullscreen?.().catch(()=>{}),screen.orientation?.lock?.("landscape").catch(()=>{})}catch{}Is("Hold E at windows to repair \xB7 Open the gate for new guns")}function yo(){st.state!=="playing"||R.dead||(st.state="paused",dt("pause").classList.remove("hidden"),ee.fire=!1,ee.f=ee.s=0,document.pointerLockElement&&document.exitPointerLock?.(),os(""))}function ld(){if(st.state==="paused"&&(st.state="playing",dt("pause").classList.add("hidden"),Kt.init(),!rn&&!Oi.has("test")))try{ls.requestPointerLock?.()?.catch?.(()=>{})}catch{}}function cd(){st.state="menu",["pause","over"].forEach(i=>dt(i).classList.add("hidden")),dt("menu").classList.remove("hidden"),dt("hud").classList.add("hidden"),dt("touch").classList.add("hidden"),od(dt("scoreList"),rd()),ad(),tn.reset(),R.gun&&(R.gun.visible=!1),os(""),R.dead=!1,bi.visible=!1}function IM(){st.state="over";let i=RM({round:Math.max(1,st.round),kills:R.kills,pts:R.pts,t:Date.now()});dt("oRound").textContent=Math.max(1,st.round),dt("oKills").textContent=R.kills,dt("oHeads").textContent=R.heads,dt("oPts").textContent=R.pts.toLocaleString();let t=Math.floor(st.runTime);dt("oTime").textContent=Math.floor(t/60)+":"+String(t%60).padStart(2,"0"),dt("oMsg").textContent=st.round>=10?"Legendary run. The yard remembers.":st.round>=5?"Solid stand. They got you in the end.":"The dead took the yard. Try again.",od(dt("oScores"),i),CM(),dt("over").classList.remove("hidden"),dt("hud").classList.add("hidden"),dt("touch").classList.add("hidden"),R.gun&&(R.gun.visible=!1)}var $u={x:0,z:8},$p={groan:(i,t)=>Kt.groan(Qu(i.pos),Be(1-t/40,.1,.8)*.8,i.brute?.6:i.runner?1.25:$(.9,1.1),i.brute?1.4:$(.8,1.3)),plank:(i,t)=>{Kt.plank(!0),Pe.dust(new I(i.c.x+i.n.x*.3,1.4,i.c.z+i.n.z*.3),i.n,6,[.5,.4,.3])},hitPlayer:AM},DM={groan:()=>{},plank:()=>{},hitPlayer:()=>{}};function hd(i){st.time+=i;let t=st.time;if(st.state==="menu"){st.orbit+=i*.12;let n=st.orbit,s=9.5;if(Ye.position.set(Math.sin(n)*s,2.6+Math.sin(n*.7)*.4,6+Math.cos(n)*s*.8),Ye.lookAt(0,1.8,3),Ye.rotation.z=0,st.menuSpawn-=i,st.menuSpawn<=0&&tn.alive<5){st.menuSpawn=2.2;let r=tn.spawn(Nn(ne.windows.filter(a=>a.area==="A")),2);r&&(r.state="chase",r.pos.set($(-14,14),0,$(-18,-4)),r.speed=$(.9,1.5),r.dmg=0)}$u.x=0,$u.z=6,tn.update(i,t,$u,ne.door,DM),ne.update(i,t,{x:Ye.position.x,z:Ye.position.z}),Pe.update(i),Ui.center={x:0,z:6},Ps.center=Ui.center,Ui.ps.update(i),Ps.ps.update(i),Ls.visible=!1,ii.visible=!1;return}if(Ls.visible=!0,ii.visible=Un>0&&R.flashlight&&!R.dead,st.state==="paused")return;if(st.state==="over"){Pe.update(i);return}if(st.runTime+=i,R.dead){R.deadT+=i,tn.update(i,t,R,ne.door,{...$p,hitPlayer:()=>{}}),ne.update(i,t,R),Pe.update(i),Jp(i,t),R.deadT>2.4&&IM();return}TM(i),wM(i),R.hp<R.maxHp&&t-R.lastHit>aM&&(R.hp=Math.min(R.maxHp,R.hp+oM*i)),R.hp<R.maxHp*go&&t-st.healBeat>.85&&(st.healBeat=t,Kt.heart()),st.phase==="wait"?(st.interT-=i,st.interT<=0&&Zp(1)):st.phase==="round"?(bM(i),st.toSpawn<=0&&tn.alive<=0&&(st.phase="inter",st.interT=7)):st.phase==="inter"&&(st.interT-=i,st.interT<=0&&Zp(st.round+1)),tn.update(i,t,R,ne.door,$p),ne.update(i,t,R),Ui.center={x:R.x,z:R.z},Ps.center=Ui.center,Ui.ps.update(i),Ps.ps.update(i),Pe.update(i),yM(i),st.double>0&&(st.double-=i);for(let n=st.ups.length-1;n>=0;n--){let s=st.ups[n];s.t-=i,s.core.rotation.y+=i*2.5,s.type!=="health"&&(s.core.rotation.x+=i*1.1),s.g.position.y=1+Math.sin(t*3+n)*.15,s.g.visible=s.t>5||Math.sin(t*16)>-.2,Math.hypot(s.x-R.x,s.z-R.z)<1.5?(r0(s),st.ups.splice(n,1)):s.t<=0&&(cn.remove(s.g),st.ups.splice(n,1))}let e=a0();EM(e),e?o0(e,ee.interact,i):st.repairT=0,ee.interactEdge=!1,Jp(i,t),pM()}var Kp=performance.now();function c0(i){requestAnimationFrame(c0);let t=Math.min(.25,(i-Kp)/1e3);Kp=i,fM(t),hd(Math.min(t,.05)*(st.state==="menu"?.6:1));let e=st.state==="playing"&&R.hp<R.maxHp*go?1-R.hp/(R.maxHp*go):0;Cr.render(t,st.time,Be(R.dmg,0,1),e)}function LM(){Cr.render(.016,st.time,Be(R.dmg,0,1),0)}var An={};function ud(){ee.f=(An.KeyW||An.ArrowUp?1:0)-(An.KeyS||An.ArrowDown?1:0),ee.s=(An.KeyD||An.ArrowRight?1:0)-(An.KeyA||An.ArrowLeft?1:0),ee.sprint=!!(An.ShiftLeft||An.ShiftRight)}addEventListener("keydown",i=>{i.target&&i.target.tagName==="INPUT"||i.repeat||(An[i.code]=!0,st.state==="playing"&&!R.dead?(i.code==="KeyR"&&(ee.reload=!0),i.code==="KeyE"&&(ee.interact=!0,ee.interactEdge=!0),i.code==="Digit1"&&Rr(0),i.code==="Digit2"&&Rr(1),i.code==="KeyQ"&&Rr(1-R.cur),i.code==="KeyF"&&(R.flashlight=!R.flashlight,ni.visible=R.flashlight,ii.visible=Un>0&&R.flashlight,Kt.click(0,1200,.4)),i.code==="KeyP"&&yo()):st.state==="paused"&&i.code==="KeyP"&&ld(),i.code==="KeyM"&&d0(),i.code==="Enter"&&(st.state==="menu"||st.state==="over")&&vo(),ud())});addEventListener("keyup",i=>{An[i.code]=!1,i.code==="KeyE"&&(ee.interact=!1),ud()});addEventListener("blur",()=>{for(let i in An)An[i]=!1;ud(),ee.fire=!1,ee.interact=!1});var h0=!1;document.addEventListener("pointerlockerror",()=>{h0=!0});addEventListener("mousemove",i=>{st.state!=="playing"||R.dead||document.pointerLockElement!==ls&&!h0&&!Oi.has("test")||u0(i.movementX,i.movementY,.0022)});function u0(i,t,e){R.yaw-=i*e,R.pitch=Be(R.pitch-t*e,-1.45,1.45),R.sx+=i*.01,R.sy+=t*.01}ls.addEventListener("mousedown",i=>{i.button===0&&st.state==="playing"&&(!rn&&!document.pointerLockElement&&!Oi.has("test")&&ls.requestPointerLock?.(),ee.fire=!0)});addEventListener("mouseup",i=>{i.button===0&&(ee.fire=!1)});addEventListener("wheel",i=>{st.state==="playing"&&Math.abs(i.deltaY)>4&&Rr(1-R.cur)},{passive:!0});addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&st.state==="playing"&&!R.dead&&!rn&&!Oi.has("test")&&yo()});document.addEventListener("visibilitychange",()=>{document.hidden&&yo()});if(rn){let i=null,t=null,e=0,n=0,s=dt("stick"),r=dt("knob"),a={x:0,y:0},o=dt("touch");o.addEventListener("touchstart",u=>{for(let d of u.changedTouches){if(u.target.closest("button"))continue;let f=s.getBoundingClientRect();i===null&&d.clientX<innerWidth*.45?(i=d.identifier,a={x:f.left+f.width/2,y:f.top+f.height/2},c(d)):t===null&&(t=d.identifier,e=d.clientX,n=d.clientY)}u.preventDefault()},{passive:!1});let c=u=>{let d=u.clientX-a.x,f=u.clientY-a.y,p=Math.hypot(d,f),v=55;p>v&&(d=d/p*v,f=f/p*v),r.style.transform=`translate(${d}px,${f}px)`,ee.s=d/v,ee.f=-f/v,Math.hypot(ee.s,ee.f)<.12&&(ee.s=ee.f=0)};o.addEventListener("touchmove",u=>{for(let d of u.changedTouches)d.identifier===i?c(d):d.identifier===t&&(st.state==="playing"&&!R.dead&&u0(d.clientX-e,d.clientY-n,.0048),e=d.clientX,n=d.clientY);u.preventDefault()},{passive:!1});let l=u=>{for(let d of u.changedTouches)d.identifier===i?(i=null,r.style.transform="",ee.s=ee.f=0):d.identifier===t&&(t=null)};o.addEventListener("touchend",l),o.addEventListener("touchcancel",l);let h=(u,d,f)=>{let p=dt(u);p.addEventListener("touchstart",g=>{p.classList.add("down"),d(),g.preventDefault(),g.stopPropagation()},{passive:!1});let v=g=>{p.classList.remove("down"),f?.(),g.preventDefault()};p.addEventListener("touchend",v),p.addEventListener("touchcancel",v)};h("bFire",()=>ee.fire=!0,()=>ee.fire=!1),h("bReload",()=>ee.reload=!0),h("bUse",()=>{ee.interact=!0,ee.interactEdge=!0},()=>ee.interact=!1),h("bSwap",()=>Rr(1-R.cur))}function d0(){Kt.setMuted(!Kt.muted);try{localStorage.setItem("vwz_mute",Kt.muted?"1":"0")}catch{}f0()}function f0(){dt("btnMute").textContent=Kt.muted?"\u{1F507}":"\u{1F50A}",dt("btnMute2").textContent=Kt.muted?"\u{1F507} Sound off":"\u{1F50A} Sound on"}dt("btnMute").onclick=dt("btnMute2").onclick=i=>{i.stopPropagation(),d0()};dt("btnPause").onclick=i=>{i.stopPropagation(),yo()};dt("btnPlay").onclick=vo;dt("btnAgain").onclick=vo;dt("btnMenu").onclick=cd;dt("btnResume").onclick=ld;dt("btnQuit").onclick=cd;dt("btnPlay").addEventListener("touchend",i=>{i.preventDefault(),vo()});dt("qSeg").addEventListener("click",i=>{let t=i.target.closest("button");if(t){Si=t.dataset.q;try{localStorage.setItem("vwz_q",Si)}catch{}[...dt("qSeg").querySelectorAll("button")].forEach(e=>e.classList.toggle("on",e===t)),nh(Si==="high"?2:Si==="medium"?1:Si==="low"||rn?0:2)}});[...dt("qSeg").querySelectorAll("button")].forEach(i=>i.classList.toggle("on",i.dataset.q===Si));R.slots=[Qc("pistol"),null];_o();nh(Un);f0();od(dt("scoreList"),rd());ad();tn.max=Un>0?26:16;for(let i=0;i<40;i++)hd(.05);requestAnimationFrame(()=>{Cr.render(.016,0,0,0),dt("loading").classList.add("done"),setTimeout(()=>dt("loading").remove(),800)});requestAnimationFrame(c0);window.__game={PLAYER_MAX_HP:mo,MEDKIT_HP_FRAC:jp,MEDKIT_COOLDOWN:Qp,MEDKIT_HEAL_FRAC:t0,medKitReady:id,medKitOnKill:s0,G:st,P:R,world:ne,zombies:tn,fx:Pe,input:ee,tick:hd,startGame:vo,shoot:i0,applyTier:nh,switchTo:Rr,startReload:th,pause:yo,resume:ld,toMenu:cd,giveWeapon:ed,spawnPower:nd,pickPower:r0,interact:o0,findFocus:a0,die:l0,get tier(){return Un},cam:Ye,renderer:Rn,scene:cn,WEAPONS:He,sfx:Kt,renderOnce:LM,aimAt(i,t=!1){let e=i.pos.x-R.x,n=i.pos.z-R.z,s=(t?1.66:1)*i.scale-1.7;R.yaw=Math.atan2(-e,-n),R.pitch=Math.atan2(s,Math.hypot(e,n)),R.rP=R.rY=0},isTouch:rn};
