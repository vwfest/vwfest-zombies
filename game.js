var If=0,_u=1,Df=2;var Os=1,Lf=2,Ar=3,us=0,mn=1,nn=2,Je=0,bi=1,sn=2,yu=3,Mu=4,$l=5;var Kn=100,Nf=101,Uf=102,Ff=103,Of=104,Bs=200,Bf=201,zf=202,kf=203,Su=204,bu=205,Fa=206,Hf=207,Oa=208,Vf=209,Gf=210,Wf=211,Xf=212,qf=213,Yf=214,gl=0,xl=1,vl=2,dr=3,_l=4,yl=5,Ml=6,Sl=7,Eu=0,Zf=1,Jf=2,ci=0,Ba=1,za=2,ka=3,zs=4,Ha=5,Va=6,Ga=7,su="attached",$f="detached",Tu=300,ds=301,ks=302,Kl=303,jl=304,Wa=306,Pn=1e3,Jn=1001,bl=1002,Ze=1003,Kf=1004;var Xa=1005;var fn=1006,Ql=1007;var fs=1008;var _n=1009,wu=1010,Au=1011,Rr=1012,tc=1013,hi=1014,Vn=1015,Xe=1016,ec=1017,nc=1018,ps=1020,Ru=35902,Cu=35899,Pu=1021,Iu=1022,Tn=1023,_i=1026,Ei=1027,ic=1028,sc=1029,ms=1030,rc=1031;var ac=1033,qa=33776,Ya=33777,Za=33778,Ja=33779,oc=35840,lc=35841,cc=35842,hc=35843,uc=36196,dc=37492,fc=37496,pc=37488,mc=37489,$a=37490,gc=37491,xc=37808,vc=37809,_c=37810,yc=37811,Mc=37812,Sc=37813,bc=37814,Ec=37815,Tc=37816,wc=37817,Ac=37818,Rc=37819,Cc=37820,Pc=37821,Ic=36492,Dc=36494,Lc=36495,Nc=36283,Uc=36284,Ka=36285,Fc=36286;var ea=2300,El=2301,pl=2302,ru=2303,au=2400,ou=2401,lu=2402;var jf=3200;var ja=0,Qf=1,Xi="",De="srgb",na="srgb-linear",ia="linear",ve="srgb";var ml=7680;var tp=519,ep=512,np=513,ip=514,Oc=515,sp=516,rp=517,Bc=518,ap=519,Du=35044,Qa=35048;var Lu="300 es",si=2e3,fr=2001;function im(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function sm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function sa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function op(){let i=sa("canvas");return i.style.display="block",i}var qd={},pr=null;function ra(...i){let t="THREE."+i.shift();pr?pr("log",t,...i):console.log(t,...i)}function lp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Wt(...i){i=lp(i);let t="THREE."+i.shift();if(pr)pr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Yt(...i){i=lp(i);let t="THREE."+i.shift();if(pr)pr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ps(...i){let t=i.join(" ");t in qd||(qd[t]=!0,Wt(...i))}function cp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var hp={[gl]:xl,[vl]:Ml,[_l]:Sl,[dr]:yl,[xl]:gl,[Ml]:vl,[Sl]:_l,[yl]:dr},yi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ch=Math.PI/180,aa=180/Math.PI;function vi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function ue(i,t,e){return Math.max(t,Math.min(e,i))}function rm(i,t){return(i%t+t)%t}function Ph(i,t,e){return(1-e)*i+e*t}function xi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ot=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},In=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(d!==x||c!==u||l!==f||h!==p){let g=c*u+l*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let S=Math.acos(g),A=Math.sin(S);m=Math.sin(m*S)/A,o=Math.sin(o*S)/A,c=c*m+u*o,l=l*m+f*o,h=h*m+p*o,d=d*m+x*o}else{c=c*m+u*o,l=l*m+f*o,h=h*m+p*o,d=d*m+x*o;let S=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=S,l*=S,h*=S,d*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*d+c*f-l*u,t[e+1]=c*p+h*u+l*d-o*f,t[e+2]=l*p+h*f+o*u-c*d,t[e+3]=h*p-o*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"YZX":this._x=u*h*d+l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d-u*f*p;break;case"XZY":this._x=u*h*d-l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d+u*f*p;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ih.copy(this).projectOnVector(t),this.sub(Ih)}reflect(t){return this.sub(Ih.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ih=new I,Yd=new In,te=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=s[0],g=s[3],m=s[6],S=s[1],A=s[4],y=s[7],M=s[2],E=s[5],C=s[8];return r[0]=a*x+o*S+c*M,r[3]=a*g+o*A+c*E,r[6]=a*m+o*y+c*C,r[1]=l*x+h*S+d*M,r[4]=l*g+h*A+d*E,r[7]=l*m+h*y+d*C,r[2]=u*x+f*S+p*M,r[5]=u*g+f*A+p*E,r[8]=u*m+f*y+p*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,p=e*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(s*l-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dh.makeScale(t,e)),this}rotate(t){return Ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dh.makeRotation(-t)),this}translate(t,e){return Ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Dh=new te,Zd=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jd=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function am(){let i={enabled:!0,workingColorSpace:na,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ve&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ve&&(s.r=ur(s.r),s.g=ur(s.g),s.b=ur(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xi?ia:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[na]:{primaries:t,whitePoint:n,transfer:ia,toXYZ:Zd,fromXYZ:Jd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:Zd,fromXYZ:Jd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),i}var ce=am();function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ur(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ys,Tl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ys===void 0&&(Ys=sa("canvas")),Ys.width=t.width,Ys.height=t.height;let s=Ys.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ys}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=sa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vi(e[n]/255)*255):e[n]=Vi(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},om=0,mr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=vi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Lh(s[a].image)):r.push(Lh(s[a]))}else r=Lh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Lh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var lm=0,Nh=new I,En=class i extends yi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Jn,s=Jn,r=fn,a=fs,o=Tn,c=_n,l=i.DEFAULT_ANISOTROPY,h=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=vi(),this.name="",this.source=new mr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nh).x}get height(){return this.source.getSize(Nh).y}get depth(){return this.source.getSize(Nh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pn:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pn:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Tu;En.DEFAULT_ANISOTROPY=1;var Ee=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(l+1)/2,y=(f+1)/2,M=(m+1)/2,E=(h+u)/4,C=(d+x)/4,v=(p+g)/4;return A>y&&A>M?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=E/n,r=C/n):y>M?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=v/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=C/r,s=v/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(d-x)/S,this.z=(u-h)/S,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this.w=ue(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this.w=ue(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wl=class extends yi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new En(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new mr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Be=class extends wl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},oa=class extends En{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Al=class extends En{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Kt=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,c,l,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,u,f,p,x,g)}set(t,e,n,s,r,a,o,c,l,h,d,u,f,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Zs.setFromMatrixColumn(t,0).length(),r=1/Zs.setFromMatrixColumn(t,1).length(),a=1/Zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,p=o*h,x=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+p*l,e[5]=u-x*l,e[9]=-o*c,e[2]=x-u*l,e[6]=p+f*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,p=l*h,x=l*d;e[0]=u+x*o,e[4]=p*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=x+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,p=l*h,x=l*d;e[0]=u-x*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,f=a*d,p=o*h,x=o*d;e[0]=c*h,e[4]=p*l-f,e[8]=u*l+x,e[1]=c*d,e[5]=x*l+u,e[9]=f*l-p,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,f=a*l,p=o*c,x=o*l;e[0]=c*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*c,f=a*l,p=o*c,x=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cm,t,hm)}lookAt(t,e,n){let s=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Qi.crossVectors(n,Fn),Qi.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Qi.crossVectors(n,Fn)),Qi.normalize(),ko.crossVectors(Fn,Qi),s[0]=Qi.x,s[4]=ko.x,s[8]=Fn.x,s[1]=Qi.y,s[5]=ko.y,s[9]=Fn.y,s[2]=Qi.z,s[6]=ko.z,s[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],S=n[3],A=n[7],y=n[11],M=n[15],E=s[0],C=s[4],v=s[8],T=s[12],w=s[1],D=s[5],L=s[9],U=s[13],N=s[2],k=s[6],Z=s[10],J=s[14],at=s[3],q=s[7],F=s[11],X=s[15];return r[0]=a*E+o*w+c*N+l*at,r[4]=a*C+o*D+c*k+l*q,r[8]=a*v+o*L+c*Z+l*F,r[12]=a*T+o*U+c*J+l*X,r[1]=h*E+d*w+u*N+f*at,r[5]=h*C+d*D+u*k+f*q,r[9]=h*v+d*L+u*Z+f*F,r[13]=h*T+d*U+u*J+f*X,r[2]=p*E+x*w+g*N+m*at,r[6]=p*C+x*D+g*k+m*q,r[10]=p*v+x*L+g*Z+m*F,r[14]=p*T+x*U+g*J+m*X,r[3]=S*E+A*w+y*N+M*at,r[7]=S*C+A*D+y*k+M*q,r[11]=S*v+A*L+y*Z+M*F,r[15]=S*T+A*U+y*J+M*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15],S=c*f-l*u,A=o*f-l*d,y=o*u-c*d,M=a*f-l*h,E=a*u-c*h,C=a*d-o*h;return e*(x*S-g*A+m*y)-n*(p*S-g*M+m*E)+s*(p*A-x*M+m*C)-r*(p*y-x*E+g*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],S=e*o-n*a,A=e*c-s*a,y=e*l-r*a,M=n*c-s*o,E=n*l-r*o,C=s*l-r*c,v=h*x-d*p,T=h*g-u*p,w=h*m-f*p,D=d*g-u*x,L=d*m-f*x,U=u*m-f*g,N=S*U-A*L+y*D+M*w-E*T+C*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/N;return t[0]=(o*U-c*L+l*D)*k,t[1]=(s*L-n*U-r*D)*k,t[2]=(x*C-g*E+m*M)*k,t[3]=(u*E-d*C-f*M)*k,t[4]=(c*w-a*U-l*T)*k,t[5]=(e*U-s*w+r*T)*k,t[6]=(g*y-p*C-m*A)*k,t[7]=(h*C-u*y+f*A)*k,t[8]=(a*L-o*w+l*v)*k,t[9]=(n*w-e*L-r*v)*k,t[10]=(p*E-x*y+m*S)*k,t[11]=(d*y-h*E-f*S)*k,t[12]=(o*T-a*D-c*v)*k,t[13]=(e*D-n*T+s*v)*k,t[14]=(x*A-p*M-g*S)*k,t[15]=(h*M-d*A+u*S)*k,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,p=r*d,x=a*h,g=a*d,m=o*d,S=c*l,A=c*h,y=c*d,M=n.x,E=n.y,C=n.z;return s[0]=(1-(x+m))*M,s[1]=(f+y)*M,s[2]=(p-A)*M,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(u+m))*E,s[6]=(g+S)*E,s[7]=0,s[8]=(p+A)*C,s[9]=(g-S)*C,s[10]=(1-(u+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Zs.set(s[0],s[1],s[2]).length(),o=Zs.set(s[4],s[5],s[6]).length(),c=Zs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ti.copy(this);let l=1/a,h=1/o,d=1/c;return ti.elements[0]*=l,ti.elements[1]*=l,ti.elements[2]*=l,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=d,ti.elements[9]*=d,ti.elements[10]*=d,e.setFromRotationMatrix(ti),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=si,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,x;if(c)p=r/(a-r),x=a*r/(a-r);else if(o===si)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===fr)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=si,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),p,x;if(c)p=1/(a-r),x=a/(a-r);else if(o===si)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===fr)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Zs=new I,ti=new Kt,cm=new I(0,0,0),hm=new I(1,1,1),Qi=new I,ko=new I,Fn=new I,$d=new Kt,Kd=new In,Bn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $d.makeRotationFromQuaternion(t),this.setFromRotationMatrix($d,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kd.setFromEuler(this),this.setFromQuaternion(Kd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var la=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},um=0,jd=new I,Js=new In,Fi=new Kt,Ho=new I,Vr=new I,dm=new I,fm=new In,Qd=new I(1,0,0),tf=new I(0,1,0),ef=new I(0,0,1),nf={type:"added"},pm={type:"removed"},$s={type:"childadded",child:null},Uh={type:"childremoved",child:null},Ce=class i extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Bn,n=new In,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new te}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new la,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(Qd,t)}rotateY(t){return this.rotateOnAxis(tf,t)}rotateZ(t){return this.rotateOnAxis(ef,t)}translateOnAxis(t,e){return jd.copy(t).applyQuaternion(this.quaternion),this.position.add(jd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qd,t)}translateY(t){return this.translateOnAxis(tf,t)}translateZ(t){return this.translateOnAxis(ef,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ho.copy(t):Ho.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Vr,Ho,this.up):Fi.lookAt(Ho,Vr,this.up),this.quaternion.setFromRotationMatrix(Fi),s&&(Fi.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(Fi),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nf),$s.child=t,this.dispatchEvent($s),$s.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pm),Uh.child=t,this.dispatchEvent(Uh),Uh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nf),$s.child=t,this.dispatchEvent($s),$s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,t,dm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,fm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ce.DEFAULT_UP=new I(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zt=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},mm={type:"move"},gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;l.inputState.pinching&&u>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function Fh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=rm(t,1),e=ue(e,0,1),n=ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Fh(a,r,t+1/3),this.g=Fh(a,r,t),this.b=Fh(a,r,t-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let n=up[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=ur(t.r),this.g=ur(t.g),this.b=ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return ce.workingToColorSpace(vn.copy(this),t),Math.round(ue(vn.r*255,0,255))*65536+Math.round(ue(vn.g*255,0,255))*256+Math.round(ue(vn.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(vn.copy(this),e);let n=vn.r,s=vn.g,r=vn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=De){ce.workingToColorSpace(vn.copy(this),t);let e=vn.r,n=vn.g,s=vn.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ts),this.setHSL(ts.h+t,ts.s+e,ts.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ts),t.getHSL(Vo);let n=Ph(ts.h,Vo.h,e),s=Ph(ts.s,Vo.s,e),r=Ph(ts.l,Vo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new pt;pt.NAMES=up;var ca=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new pt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Is=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ei=new I,Oi=new I,Oh=new I,Bi=new I,Ks=new I,js=new I,sf=new I,Bh=new I,zh=new I,kh=new I,Hh=new Ee,Vh=new Ee,Gh=new Ee,Hi=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ei.subVectors(t,e),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ei.subVectors(s,e),Oi.subVectors(n,e),Oh.subVectors(t,e);let a=ei.dot(ei),o=ei.dot(Oi),c=ei.dot(Oh),l=Oi.dot(Oi),h=Oi.dot(Oh),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,p=(a*h-o*c)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bi.x),c.addScaledVector(a,Bi.y),c.addScaledVector(o,Bi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Hh.setScalar(0),Vh.setScalar(0),Gh.setScalar(0),Hh.fromBufferAttribute(t,e),Vh.fromBufferAttribute(t,n),Gh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Hh,r.x),a.addScaledVector(Vh,r.y),a.addScaledVector(Gh,r.z),a}static isFrontFacing(t,e,n,s){return ei.subVectors(n,e),Oi.subVectors(t,e),ei.cross(Oi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ei.cross(Oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ks.subVectors(s,n),js.subVectors(r,n),Bh.subVectors(t,n);let c=Ks.dot(Bh),l=js.dot(Bh);if(c<=0&&l<=0)return e.copy(n);zh.subVectors(t,s);let h=Ks.dot(zh),d=js.dot(zh);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ks,a);kh.subVectors(t,r);let f=Ks.dot(kh),p=js.dot(kh);if(p>=0&&f<=p)return e.copy(r);let x=f*l-c*p;if(x<=0&&l>=0&&p<=0)return o=l/(l-p),e.copy(n).addScaledVector(js,o);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return sf.subVectors(r,s),o=(d-h)/(d-h+(f-p)),e.copy(s).addScaledVector(sf,o);let m=1/(g+x+u);return a=x*m,o=u*m,e.copy(n).addScaledVector(Ks,a).addScaledVector(js,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ri=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ni):ni.fromBufferAttribute(r,a),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Go.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Go.copy(n.boundingBox)),Go.applyMatrix4(t.matrixWorld),this.union(Go)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gr),Wo.subVectors(this.max,Gr),Qs.subVectors(t.a,Gr),tr.subVectors(t.b,Gr),er.subVectors(t.c,Gr),es.subVectors(tr,Qs),ns.subVectors(er,tr),Ts.subVectors(Qs,er);let e=[0,-es.z,es.y,0,-ns.z,ns.y,0,-Ts.z,Ts.y,es.z,0,-es.x,ns.z,0,-ns.x,Ts.z,0,-Ts.x,-es.y,es.x,0,-ns.y,ns.x,0,-Ts.y,Ts.x,0];return!Wh(e,Qs,tr,er,Wo)||(e=[1,0,0,0,1,0,0,0,1],!Wh(e,Qs,tr,er,Wo))?!1:(Xo.crossVectors(es,ns),e=[Xo.x,Xo.y,Xo.z],Wh(e,Qs,tr,er,Wo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},zi=[new I,new I,new I,new I,new I,new I,new I,new I],ni=new I,Go=new ri,Qs=new I,tr=new I,er=new I,es=new I,ns=new I,Ts=new I,Gr=new I,Wo=new I,Xo=new I,ws=new I;function Wh(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ws.fromArray(i,r);let o=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),c=t.dot(ws),l=e.dot(ws),h=n.dot(ws);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var je=new I,qo=new ot,gm=0,de=class extends yi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Du,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qo.fromBufferAttribute(this,e),qo.applyMatrix3(t),this.setXY(e,qo.x,qo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ha=class extends de{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ua=class extends de{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends de{constructor(t,e,n){super(new Float32Array(t),e,n)}},xm=new ri,Wr=new I,Xh=new I,ai=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):xm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wr.subVectors(t,this.center);let e=Wr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Wr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wr.copy(t.center).add(Xh)),this.expandByPoint(Wr.copy(t.center).sub(Xh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},vm=0,Zn=new Kt,qh=new Ce,nr=new I,On=new ri,Xr=new ri,hn=new I,_e=class i extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(im(t)?ua:ha)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Zn.makeRotationFromQuaternion(t),this.applyMatrix4(Zn),this}rotateX(t){return Zn.makeRotationX(t),this.applyMatrix4(Zn),this}rotateY(t){return Zn.makeRotationY(t),this.applyMatrix4(Zn),this}rotateZ(t){return Zn.makeRotationZ(t),this.applyMatrix4(Zn),this}translate(t,e,n){return Zn.makeTranslation(t,e,n),this.applyMatrix4(Zn),this}scale(t,e,n){return Zn.makeScale(t,e,n),this.applyMatrix4(Zn),this}lookAt(t){return qh.lookAt(t),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];On.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Xr.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(On.min,Xr.min),On.expandByPoint(hn),hn.addVectors(On.max,Xr.max),On.expandByPoint(hn)):(On.expandByPoint(Xr.min),On.expandByPoint(Xr.max))}On.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)hn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(hn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)hn.fromBufferAttribute(o,l),c&&(nr.fromBufferAttribute(t,l),hn.add(nr)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new de(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new I,c[v]=new I;let l=new I,h=new I,d=new I,u=new ot,f=new ot,p=new ot,x=new I,g=new I;function m(v,T,w){l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,w),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,w),h.sub(l),d.sub(l),f.sub(u),p.sub(u);let D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(D),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(D),o[v].add(x),o[T].add(x),o[w].add(x),c[v].add(g),c[T].add(g),c[w].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let v=0,T=S.length;v<T;++v){let w=S[v],D=w.start,L=w.count;for(let U=D,N=D+L;U<N;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let A=new I,y=new I,M=new I,E=new I;function C(v){M.fromBufferAttribute(s,v),E.copy(M);let T=o[v];A.copy(T),A.sub(M.multiplyScalar(M.dot(T))).normalize(),y.crossVectors(E,T);let D=y.dot(c[v])<0?-1:1;a.setXYZW(v,A.x,A.y,A.z,D)}for(let v=0,T=S.length;v<T;++v){let w=S[v],D=w.start,L=w.count;for(let U=D,N=D+L;U<N;U+=3)C(t.getX(U+0)),C(t.getX(U+1)),C(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new de(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,d=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,p=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let m=0;m<h;m++)u[p++]=l[f++]}return new de(u,h,d)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},da=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Du,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},bn=new I,xr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=xi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=xi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=xi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=xi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ra("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new de(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ra("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Yh=new I,_m=new I,ym=new te,ii=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Yh.subVectors(n,e).cross(_m.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Yh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ym.getNormalMatrix(t),s=this.coplanarPoint(Yh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Mm=0,oi=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=bi,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Su,this.blendDst=bu,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ml,this.stencilZFail=ml,this.stencilZPass=ml,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ii().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},$n=class extends oi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ir,qr=new I,sr=new I,rr=new I,ar=new ot,Yr=new ot,dp=new Kt,Yo=new I,Zr=new I,Zo=new I,rf=new ot,Zh=new ot,af=new ot,li=class extends Ce{constructor(t=new $n){if(super(),this.isSprite=!0,this.type="Sprite",ir===void 0){ir=new _e;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new da(e,5);ir.setIndex([0,1,2,0,2,3]),ir.setAttribute("position",new xr(n,3,0,!1)),ir.setAttribute("uv",new xr(n,2,3,!1))}this.geometry=ir,this.material=t,this.center=new ot(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Yt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),sr.setFromMatrixScale(this.matrixWorld),dp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),rr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&sr.multiplyScalar(-rr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Jo(Yo.set(-.5,-.5,0),rr,a,sr,s,r),Jo(Zr.set(.5,-.5,0),rr,a,sr,s,r),Jo(Zo.set(.5,.5,0),rr,a,sr,s,r),rf.set(0,0),Zh.set(1,0),af.set(1,1);let o=t.ray.intersectTriangle(Yo,Zr,Zo,!1,qr);if(o===null&&(Jo(Zr.set(-.5,.5,0),rr,a,sr,s,r),Zh.set(0,1),o=t.ray.intersectTriangle(Yo,Zo,Zr,!1,qr),o===null))return;let c=t.ray.origin.distanceTo(qr);c<t.near||c>t.far||e.push({distance:c,point:qr.clone(),uv:Hi.getInterpolation(qr,Yo,Zr,Zo,rf,Zh,af,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Jo(i,t,e,n,s,r){ar.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Yr.x=r*ar.x-s*ar.y,Yr.y=s*ar.x+r*ar.y):Yr.copy(ar),i.copy(t),i.x+=Yr.x,i.y+=Yr.y,i.applyMatrix4(dp)}var ki=new I,Jh=new I,$o=new I,Ko=new I,vr=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ki.copy(this.origin).addScaledVector(this.direction,e),ki.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jh.copy(t).add(e).multiplyScalar(.5),$o.copy(e).sub(t).normalize(),Ko.copy(this.origin).sub(Jh);let r=t.distanceTo(e)*.5,a=-this.direction.dot($o),o=Ko.dot(this.direction),c=-Ko.dot($o),l=Ko.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*c-o,u=a*o-c,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=p?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Jh).addScaledVector($o,u),f}intersectSphere(t,e){if(t.radius<0)return null;ki.subVectors(t.center,this.origin);let n=ki.dot(this.direction),s=ki.dot(ki)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ki)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,p=e.x-a.x,x=e.y-a.y,g=e.z-a.z,m=n.x-a.x,S=n.y-a.y,A=n.z-a.z,y=Math.abs(c),M=Math.abs(l),E=Math.abs(h),C,v,T,w,D,L,U,N,k,Z,J,at;if(y>=M&&y>=E?(T=c,L=d,k=p,at=m,c>=0?(C=l,v=h,w=u,D=f,U=x,N=g,Z=S,J=A):(C=h,v=l,w=f,D=u,U=g,N=x,Z=A,J=S)):M>=E?(T=l,L=u,k=x,at=S,l>=0?(C=h,v=c,w=f,D=d,U=g,N=p,Z=A,J=m):(C=c,v=h,w=d,D=f,U=p,N=g,Z=m,J=A)):(T=h,L=f,k=g,at=A,h>=0?(C=c,v=l,w=d,D=u,U=p,N=x,Z=m,J=S):(C=l,v=c,w=u,D=d,U=x,N=p,Z=S,J=m)),T===0)return null;let q=C/T,F=v/T,X=1/T,ht=w-q*L,Mt=D-F*L,ee=U-q*k,Qt=N-F*k,le=Z-q*at,K=J-F*at,et=le*Qt-K*ee,xt=ht*K-Mt*le,zt=ee*Mt-Qt*ht;if(s){if(et<0||xt<0||zt<0)return null}else if((et<0||xt<0||zt<0)&&(et>0||xt>0||zt>0))return null;let Rt=et+xt+zt;if(Rt===0)return null;let Xt=X*(et*L+xt*k+zt*at);return(Rt>0?Xt<0:Xt>0)?null:this.at(Xt/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class extends oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},of=new Kt,As=new vr,jo=new ai,lf=new I,Qo=new I,tl=new I,el=new I,$h=new I,nl=new I,cf=new I,il=new I,mt=class extends Ce{constructor(t=new _e,e=new ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){nl.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&($h.fromBufferAttribute(d,t),a?nl.addScaledVector($h,h):nl.addScaledVector($h.sub(e),h))}e.add(nl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(r),As.copy(t.ray).recast(t.near),!(jo.containsPoint(As.origin)===!1&&(As.intersectSphere(jo,lf)===null||As.origin.distanceToSquared(lf)>(t.far-t.near)**2))&&(of.copy(r).invert(),As.copy(t.ray).applyMatrix4(of),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,As)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),A=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=S,M=A;y<M;y+=3){let E=o.getX(y),C=o.getX(y+1),v=o.getX(y+2);s=sl(this,m,t,n,l,h,d,E,C,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let S=o.getX(g),A=o.getX(g+1),y=o.getX(g+2);s=sl(this,a,t,n,l,h,d,S,A,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),A=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=S,M=A;y<M;y+=3){let E=y,C=y+1,v=y+2;s=sl(this,m,t,n,l,h,d,E,C,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let S=g,A=g+1,y=g+2;s=sl(this,a,t,n,l,h,d,S,A,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Sm(i,t,e,n,s,r,a,o){let c;if(t.side===mn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===us,o),c===null)return null;il.copy(o),il.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(il);return l<e.near||l>e.far?null:{distance:l,point:il.clone(),object:i}}function sl(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Qo),i.getVertexPosition(c,tl),i.getVertexPosition(l,el);let h=Sm(i,t,e,n,Qo,tl,el,cf);if(h){let d=new I;Hi.getBarycoord(cf,Qo,tl,el,d),s&&(h.uv=Hi.getInterpolatedAttribute(s,o,c,l,d,new ot)),r&&(h.uv1=Hi.getInterpolatedAttribute(r,o,c,l,d,new ot)),a&&(h.normal=Hi.getInterpolatedAttribute(a,o,c,l,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new I,materialIndex:0};Hi.getNormal(Qo,tl,el,u.normal),h.face=u,h.barycoord=d}return h}var Jr=new Ee,hf=new Ee,uf=new Ee,bm=new Ee,df=new Kt,rl=new I,Kh=new ai,ff=new Kt,jh=new vr,fa=class extends mt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=su,this.bindMatrix=new Kt,this.bindMatrixInverse=new Kt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ri),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,rl),this.boundingBox.expandByPoint(rl)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ai),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,rl),this.boundingSphere.expandByPoint(rl)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kh.copy(this.boundingSphere),Kh.applyMatrix4(s),t.ray.intersectsSphere(Kh)!==!1&&(ff.copy(s).invert(),jh.copy(t.ray).applyMatrix4(ff),!(this.boundingBox!==null&&jh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,jh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Ee,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===su?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$f?this.bindMatrixInverse.copy(this.bindMatrix).invert():Wt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;hf.fromBufferAttribute(s.attributes.skinIndex,t),uf.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(Jr.copy(e),e.set(0,0,0,0)):(Jr.set(...e,1),e.set(0,0,0)),Jr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=uf.getComponent(r);if(a!==0){let o=hf.getComponent(r);df.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(bm.copy(Jr).applyMatrix4(df),a)}}return e.isVector4&&(e.w=Jr.w),e.applyMatrix4(this.bindMatrixInverse)}},_r=class extends Ce{constructor(){super(),this.isBone=!0,this.type="Bone"}},Mi=class extends En{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ze,h=Ze,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},pf=new Kt,Em=new Kt,pa=class i{constructor(t=[],e=[]){this.uuid=vi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Wt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Kt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Kt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let o=t[r]?t[r].matrixWorld:Em;pf.multiplyMatrices(o,e[r]),pf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Mi(e,t,t,Tn,Vn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],a=e[r];a===void 0&&(Wt("Skeleton: No bone found with UUID:",r),a=new _r),this.bones.push(a),this.boneInverses.push(new Kt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let a=e[s];t.bones.push(a.uuid);let o=n[s];t.boneInverses.push(o.toArray())}return t}},ss=class extends de{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},or=new Kt,mf=new Kt,al=[],gf=new ri,Tm=new Kt,$r=new mt,Kr=new ai,rs=class extends mt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ss(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Tm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ri),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,or),gf.copy(t.boundingBox).applyMatrix4(or),this.boundingBox.union(gf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,or),Kr.copy(t.boundingSphere).applyMatrix4(or),this.boundingSphere.union(Kr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kr.copy(this.boundingSphere),Kr.applyMatrix4(n),t.ray.intersectsSphere(Kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),mf.multiplyMatrices(n,or),$r.matrixWorld=mf,$r.raycast(t,al);for(let a=0,o=al.length;a<o;a++){let c=al[a];c.instanceId=r,c.object=this,e.push(c)}al.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ss(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mi(new Float32Array(s*this.count),s,this.count,ic,Vn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Rs=new ai,wm=new ot(.5,.5),ol=new I,yr=class{constructor(t=new ii,e=new ii,n=new ii,s=new ii,r=new ii,a=new ii){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],S=r[12],A=r[13],y=r[14],M=r[15];if(s[0].setComponents(l-a,f-h,m-p,M-S).normalize(),s[1].setComponents(l+a,f+h,m+p,M+S).normalize(),s[2].setComponents(l+o,f+d,m+x,M+A).normalize(),s[3].setComponents(l-o,f-d,m-x,M-A).normalize(),n)s[4].setComponents(c,u,g,y).normalize(),s[5].setComponents(l-c,f-u,m-g,M-y).normalize();else if(s[4].setComponents(l-c,f-u,m-g,M-y).normalize(),e===si)s[5].setComponents(l+c,f+u,m+g,M+y).normalize();else if(e===fr)s[5].setComponents(c,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(t){Rs.center.set(0,0,0);let e=wm.distanceTo(t.center);return Rs.radius=.7071067811865476+e,Rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ol.x=s.normal.x>0?t.max.x:t.min.x,ol.y=s.normal.y>0?t.max.y:t.min.y,ol.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ol)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Rl=class extends oi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xf=new Kt,cu=new vr,ll=new ai,cl=new I,ma=class extends Ce{constructor(t=new _e,e=new Rl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ll.copy(n.boundingSphere),ll.applyMatrix4(s),ll.radius+=r,t.ray.intersectsSphere(ll)===!1)return;xf.copy(s).invert(),cu.copy(t.ray).applyMatrix4(xf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let p=u,x=f;p<x;p++){let g=l.getX(p);cl.fromBufferAttribute(d,g),vf(cl,g,c,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,x=f;p<x;p++)cl.fromBufferAttribute(d,p),vf(cl,p,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function vf(i,t,e,n,s,r,a){let o=cu.distanceSqToPoint(i);if(o<e){let c=new I;cu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ga=class extends En{constructor(t=[],e=ds,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},en=class extends En{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Si=class extends En{constructor(t,e,n=hi,s,r,a,o=Ze,c=Ze,l,h=_i,d=1){if(h!==_i&&h!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Cl=class extends Si{constructor(t,e=hi,n=ds,s,r,a=Ze,o=Ze,c,l=_i){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},xa=class extends En{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ie=class i extends _e{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(d,2));function p(x,g,m,S,A,y,M,E,C,v,T){let w=y/C,D=M/v,L=y/2,U=M/2,N=E/2,k=C+1,Z=v+1,J=0,at=0,q=new I;for(let F=0;F<Z;F++){let X=F*D-U;for(let ht=0;ht<k;ht++){let Mt=ht*w-L;q[x]=Mt*S,q[g]=X*A,q[m]=N,l.push(q.x,q.y,q.z),q[x]=0,q[g]=0,q[m]=E>0?1:-1,h.push(q.x,q.y,q.z),d.push(ht/C),d.push(1-F/v),J+=1}}for(let F=0;F<v;F++)for(let X=0;X<C;X++){let ht=u+X+k*F,Mt=u+X+k*(F+1),ee=u+(X+1)+k*(F+1),Qt=u+(X+1)+k*F;c.push(ht,Mt,Qt),c.push(Mt,ee,Qt),at+=6}o.addGroup(f,at,T),f+=at,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},va=class i extends _e{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=n*2+r,x=s+1,g=new I,m=new I;for(let S=0;S<=p;S++){let A=0,y=0,M=0,E=0;if(S<=n){let T=S/n,w=T*Math.PI/2;y=-h-t*Math.cos(w),M=t*Math.sin(w),E=-t*Math.cos(w),A=T*d}else if(S<=n+r){let T=(S-n)/r;y=-h+T*e,M=t,E=0,A=d+T*u}else{let T=(S-n-r)/n,w=T*Math.PI/2;y=h+t*Math.sin(w),M=t*Math.cos(w),E=t*Math.sin(w),A=d+u+T*d}let C=Math.max(0,Math.min(1,A/f)),v=0;S===0?v=.5/s:S===p&&(v=-.5/s);for(let T=0;T<=s;T++){let w=T/s,D=w*Math.PI*2,L=Math.sin(D),U=Math.cos(D);m.x=-M*U,m.y=y,m.z=M*L,o.push(m.x,m.y,m.z),g.set(-M*U,E,M*L),g.normalize(),c.push(g.x,g.y,g.z),l.push(w+v,C)}if(S>0){let T=(S-1)*x;for(let w=0;w<s;w++){let D=T+w,L=T+w+1,U=S*x+w,N=S*x+w+1;a.push(D,L,U),a.push(L,N,U)}}}this.setIndex(a),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},_a=class i extends _e{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new I,h=new ot;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(o,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Qe=class i extends _e{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],g=n/2,m=0;S(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new fe(d,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(f,2));function S(){let y=new I,M=new I,E=0,C=(e-t)/n;for(let v=0;v<=r;v++){let T=[],w=v/r,D=w*(e-t)+t;for(let L=0;L<=s;L++){let U=L/s,N=U*c+o,k=Math.sin(N),Z=Math.cos(N);M.x=D*k,M.y=-w*n+g,M.z=D*Z,d.push(M.x,M.y,M.z),y.set(k,C,Z).normalize(),u.push(y.x,y.y,y.z),f.push(U,1-w),T.push(p++)}x.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){let w=x[T][v],D=x[T+1][v],L=x[T+1][v+1],U=x[T][v+1];(t>0||T!==0)&&(h.push(w,D,U),E+=3),(e>0||T!==r-1)&&(h.push(D,L,U),E+=3)}l.addGroup(m,E,0),m+=E}function A(y){let M=p,E=new ot,C=new I,v=0,T=y===!0?t:e,w=y===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,g*w,0),u.push(0,w,0),f.push(.5,.5),p++;let D=p;for(let L=0;L<=s;L++){let N=L/s*c+o,k=Math.cos(N),Z=Math.sin(N);C.x=T*Z,C.y=g*w,C.z=T*k,d.push(C.x,C.y,C.z),u.push(0,w,0),E.x=k*.5+.5,E.y=Z*.5*w+.5,f.push(E.x,E.y),p++}for(let L=0;L<s;L++){let U=M+L,N=D+L;y===!0?h.push(N,N+1,U):h.push(N+1,N,U),v+=3}l.addGroup(m,v,y===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Gi=class i extends Qe{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Mr=class i extends _e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let A=new I,y=new I,M=new I;for(let E=0;E<e.length;E+=3)f(e[E+0],A),f(e[E+1],y),f(e[E+2],M),c(A,y,M,S)}function c(S,A,y,M){let E=M+1,C=[];for(let v=0;v<=E;v++){C[v]=[];let T=S.clone().lerp(y,v/E),w=A.clone().lerp(y,v/E),D=E-v;for(let L=0;L<=D;L++)L===0&&v===E?C[v][L]=T:C[v][L]=T.clone().lerp(w,L/D)}for(let v=0;v<E;v++)for(let T=0;T<2*(E-v)-1;T++){let w=Math.floor(T/2);T%2===0?(u(C[v][w+1]),u(C[v+1][w]),u(C[v][w])):(u(C[v][w+1]),u(C[v+1][w+1]),u(C[v+1][w]))}}function l(S){let A=new I;for(let y=0;y<r.length;y+=3)A.x=r[y+0],A.y=r[y+1],A.z=r[y+2],A.normalize().multiplyScalar(S),r[y+0]=A.x,r[y+1]=A.y,r[y+2]=A.z}function h(){let S=new I;for(let A=0;A<r.length;A+=3){S.x=r[A+0],S.y=r[A+1],S.z=r[A+2];let y=g(S)/2/Math.PI+.5,M=m(S)/Math.PI+.5;a.push(y,1-M)}p(),d()}function d(){for(let S=0;S<a.length;S+=6){let A=a[S+0],y=a[S+2],M=a[S+4],E=Math.max(A,y,M),C=Math.min(A,y,M);E>.9&&C<.1&&(A<.2&&(a[S+0]+=1),y<.2&&(a[S+2]+=1),M<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function f(S,A){let y=S*3;A.x=t[y+0],A.y=t[y+1],A.z=t[y+2]}function p(){let S=new I,A=new I,y=new I,M=new I,E=new ot,C=new ot,v=new ot;for(let T=0,w=0;T<r.length;T+=9,w+=6){S.set(r[T+0],r[T+1],r[T+2]),A.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),E.set(a[w+0],a[w+1]),C.set(a[w+2],a[w+3]),v.set(a[w+4],a[w+5]),M.copy(S).add(A).add(y).divideScalar(3);let D=g(M);x(E,w+0,S,D),x(C,w+2,A,D),x(v,w+4,y,D)}}function x(S,A,y,M){M<0&&S.x===1&&(a[A]=S.x-1),y.x===0&&y.z===0&&(a[A]=M/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},ya=class i extends Mr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ot:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,c=new Kt;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(ue(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ue(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Sr=class extends zn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ot){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Pl=class extends Sr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Nu(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var _f=new I,yf=new I,Qh=new Nu,tu=new Nu,eu=new Nu,Il=class extends zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(yf.subVectors(s[0],s[1]).add(s[0]),l=yf);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(_f.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_f),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Qh.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,p,x,g),tu.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,p,x,g),eu.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Qh.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),tu.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),eu.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Qh.calc(c),tu.calc(c),eu.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Mf(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Am(i,t){let e=1-i;return e*e*t}function Rm(i,t){return 2*(1-i)*i*t}function Cm(i,t){return i*i*t}function Qr(i,t,e,n){return Am(i,t)+Rm(i,e)+Cm(i,n)}function Pm(i,t){let e=1-i;return e*e*e*t}function Im(i,t){let e=1-i;return 3*e*e*i*t}function Dm(i,t){return 3*(1-i)*i*i*t}function Lm(i,t){return i*i*i*t}function ta(i,t,e,n,s){return Pm(i,t)+Im(i,e)+Dm(i,n)+Lm(i,s)}var Ma=class extends zn{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ta(t,s.x,r.x,a.x,o.x),ta(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Dl=class extends zn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ta(t,s.x,r.x,a.x,o.x),ta(t,s.y,r.y,a.y,o.y),ta(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Sa=class extends zn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ll=class extends zn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ba=class extends zn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Qr(t,s.x,r.x,a.x),Qr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nl=class extends zn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Qr(t,s.x,r.x,a.x),Qr(t,s.y,r.y,a.y),Qr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ea=class extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Mf(o,c.x,l.x,h.x,d.x),Mf(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ot().fromArray(s))}return this}},hu=Object.freeze({__proto__:null,ArcCurve:Pl,CatmullRomCurve3:Il,CubicBezierCurve:Ma,CubicBezierCurve3:Dl,EllipseCurve:Sr,LineCurve:Sa,LineCurve3:Ll,QuadraticBezierCurve:ba,QuadraticBezierCurve3:Nl,SplineCurve:Ea}),Ul=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new hu[s.type]().fromJSON(s))}return this}},Ta=class extends Ul{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Sa(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ba(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ma(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ea(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new Sr(t,e,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},br=class extends Ta{constructor(t){super(t),this.uuid=vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ta().fromJSON(s))}return this}};function Nm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=fp(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=zm(i,t,r,e)),i.length>80*e){o=i[0],c=i[1];let h=o,d=c;for(let u=e;u<s;u+=e){let f=i[u],p=i[u+1];f<o&&(o=f),p<c&&(c=p),f>h&&(h=f),p>d&&(d=p)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return wa(r,a,e,o,c,l,0),a}function fp(i,t,e,n,s){let r;if(s===$m(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Sf(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Sf(a/n|0,i[a],i[a+1],r);return r&&Er(r,r.next)&&(Ra(r),r=r.next),r}function Ds(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Er(e,e.next)||We(e.prev,e,e.next)===0)){if(Ra(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function wa(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Wm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Fm(i,n,s,r):Um(i)){t.push(c.i,i.i,l.i),Ra(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Om(Ds(i),t),wa(i,t,e,n,s,r,2)):a===2&&Bm(i,t,e,n,s,r):wa(Ds(i),t,e,n,s,r,1);break}}}function Um(i){let t=i.prev,e=i,n=i.next;if(We(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(s,r,a),d=Math.min(o,c,l),u=Math.max(s,r,a),f=Math.max(o,c,l),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&jr(s,o,r,c,a,l,p.x,p.y)&&We(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Fm(i,t,e,n){let s=i.prev,r=i,a=i.next;if(We(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,c,l),p=Math.min(h,d,u),x=Math.max(o,c,l),g=Math.max(h,d,u),m=uu(f,p,t,e,n),S=uu(x,g,t,e,n),A=i.prevZ,y=i.nextZ;for(;A&&A.z>=m&&y&&y.z<=S;){if(A.x>=f&&A.x<=x&&A.y>=p&&A.y<=g&&A!==s&&A!==a&&jr(o,h,c,d,l,u,A.x,A.y)&&We(A.prev,A,A.next)>=0||(A=A.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&jr(o,h,c,d,l,u,y.x,y.y)&&We(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;A&&A.z>=m;){if(A.x>=f&&A.x<=x&&A.y>=p&&A.y<=g&&A!==s&&A!==a&&jr(o,h,c,d,l,u,A.x,A.y)&&We(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;y&&y.z<=S;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&jr(o,h,c,d,l,u,y.x,y.y)&&We(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Om(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Er(n,s)&&mp(n,e,e.next,s)&&Aa(n,s)&&Aa(s,n)&&(t.push(n.i,e.i,s.i),Ra(e),Ra(e.next),e=i=s),e=e.next}while(e!==i);return Ds(e)}function Bm(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ym(a,o)){let c=gp(a,o);a=Ds(a,a.next),c=Ds(c,c.next),wa(a,t,e,n,s,r,0),wa(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function zm(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=fp(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(qm(l))}s.sort(km);for(let r=0;r<s.length;r++)e=Hm(s[r],e);return e}function km(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Hm(i,t){let e=Vm(i,t);if(!e)return t;let n=gp(e,i);return Ds(n,n.next),Ds(e,e.next)}function Vm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Er(i,e))return e;do{if(Er(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&pp(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Aa(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Gm(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Gm(i,t){return We(i.prev,i,t.prev)<0&&We(t.next,i,i.next)<0}function Wm(i,t,e,n){let s=i;do s.z===0&&(s.z=uu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Xm(s)}function Xm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function uu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function qm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function pp(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function jr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&pp(i,t,e,n,s,r,a,o)}function Ym(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Zm(i,t)&&(Aa(i,t)&&Aa(t,i)&&Jm(i,t)&&(We(i.prev,i,t.prev)||We(i,t.prev,t))||Er(i,t)&&We(i.prev,i,i.next)>0&&We(t.prev,t,t.next)>0)}function We(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Er(i,t){return i.x===t.x&&i.y===t.y}function mp(i,t,e,n){let s=ul(We(i,t,e)),r=ul(We(i,t,n)),a=ul(We(e,n,i)),o=ul(We(e,n,t));return!!(s!==r&&a!==o||s===0&&hl(i,e,t)||r===0&&hl(i,n,t)||a===0&&hl(e,i,n)||o===0&&hl(e,t,n))}function hl(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ul(i){return i>0?1:i<0?-1:0}function Zm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&mp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Aa(i,t){return We(i.prev,i,i.next)<0?We(i,t,i.next)>=0&&We(i,i.prev,t)>=0:We(i,t,i.prev)<0||We(i,i.next,t)<0}function Jm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function gp(i,t){let e=du(i.i,i.x,i.y),n=du(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Sf(i,t,e,n){let s=du(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ra(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function du(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $m(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var fu=class{static triangulate(t,e,n=2){return Nm(t,e,n)}},Cs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];bf(t),Ef(n,t);let a=t.length;e.forEach(bf);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Ef(n,e[c]);let o=fu.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function bf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ef(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ca=class i extends _e{constructor(t=new br([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new fe(s,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Km,A,y=!1,M,E,C,v;if(m){A=m.getSpacedPoints(h),y=!0,u=!1;let it=m.isCatmullRomCurve3?m.closed:!1;M=m.computeFrenetFrames(h,it),E=new I,C=new I,v=new I}u||(g=0,f=0,p=0,x=0);let T=o.extractPoints(l),w=T.shape,D=T.holes;if(!Cs.isClockWise(w)){w=w.reverse();for(let it=0,ct=D.length;it<ct;it++){let ut=D[it];Cs.isClockWise(ut)&&(D[it]=ut.reverse())}}function U(it){let ut=10000000000000001e-36,dt=it[0];for(let gt=1;gt<=it.length;gt++){let Gt=gt%it.length,kt=it[Gt],qt=kt.x-dt.x,Jt=kt.y-dt.y,O=qt*qt+Jt*Jt,me=Math.max(Math.abs(kt.x),Math.abs(kt.y),Math.abs(dt.x),Math.abs(dt.y)),re=ut*me*me;if(O<=re){it.splice(Gt,1),gt--;continue}dt=kt}}U(w),D.forEach(U);let N=D.length,k=w;for(let it=0;it<N;it++){let ct=D[it];w=w.concat(ct)}function Z(it,ct,ut){return ct||Yt("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(ct,ut)}let J=w.length;function at(it,ct,ut){let dt,gt,Gt,kt=it.x-ct.x,qt=it.y-ct.y,Jt=ut.x-it.x,O=ut.y-it.y,me=kt*kt+qt*qt,re=kt*O-qt*Jt;if(Math.abs(re)>Number.EPSILON){let P=Math.sqrt(me),_=Math.sqrt(Jt*Jt+O*O),H=ct.x-qt/P,V=ct.y+kt/P,j=ut.x-O/_,ft=ut.y+Jt/_,vt=((j-H)*O-(ft-V)*Jt)/(kt*O-qt*Jt);dt=H+kt*vt-it.x,gt=V+qt*vt-it.y;let tt=dt*dt+gt*gt;if(tt<=2)return new ot(dt,gt);Gt=Math.sqrt(tt/2)}else{let P=!1;kt>Number.EPSILON?Jt>Number.EPSILON&&(P=!0):kt<-Number.EPSILON?Jt<-Number.EPSILON&&(P=!0):Math.sign(qt)===Math.sign(O)&&(P=!0),P?(dt=-qt,gt=kt,Gt=Math.sqrt(me)):(dt=kt,gt=qt,Gt=Math.sqrt(me/2))}return new ot(dt/Gt,gt/Gt)}let q=[];for(let it=0,ct=k.length,ut=ct-1,dt=it+1;it<ct;it++,ut++,dt++)ut===ct&&(ut=0),dt===ct&&(dt=0),q[it]=at(k[it],k[ut],k[dt]);let F=[],X,ht=q.concat();for(let it=0,ct=N;it<ct;it++){let ut=D[it];X=[];for(let dt=0,gt=ut.length,Gt=gt-1,kt=dt+1;dt<gt;dt++,Gt++,kt++)Gt===gt&&(Gt=0),kt===gt&&(kt=0),X[dt]=at(ut[dt],ut[Gt],ut[kt]);F.push(X),ht=ht.concat(X)}let Mt;if(g===0)Mt=Cs.triangulateShape(k,D);else{let it=[],ct=[];for(let ut=0;ut<g;ut++){let dt=ut/g,gt=f*Math.cos(dt*Math.PI/2),Gt=p*Math.sin(dt*Math.PI/2)+x;for(let kt=0,qt=k.length;kt<qt;kt++){let Jt=Z(k[kt],q[kt],Gt);xt(Jt.x,Jt.y,-gt),dt===0&&it.push(Jt)}for(let kt=0,qt=N;kt<qt;kt++){let Jt=D[kt];X=F[kt];let O=[];for(let me=0,re=Jt.length;me<re;me++){let P=Z(Jt[me],X[me],Gt);xt(P.x,P.y,-gt),dt===0&&O.push(P)}dt===0&&ct.push(O)}}Mt=Cs.triangulateShape(it,ct)}let ee=Mt.length,Qt=p+x;for(let it=0;it<J;it++){let ct=u?Z(w[it],ht[it],Qt):w[it];y?(C.copy(M.normals[0]).multiplyScalar(ct.x),E.copy(M.binormals[0]).multiplyScalar(ct.y),v.copy(A[0]).add(C).add(E),xt(v.x,v.y,v.z)):xt(ct.x,ct.y,0)}for(let it=1;it<=h;it++)for(let ct=0;ct<J;ct++){let ut=u?Z(w[ct],ht[ct],Qt):w[ct];y?(C.copy(M.normals[it]).multiplyScalar(ut.x),E.copy(M.binormals[it]).multiplyScalar(ut.y),v.copy(A[it]).add(C).add(E),xt(v.x,v.y,v.z)):xt(ut.x,ut.y,d/h*it)}for(let it=g-1;it>=0;it--){let ct=it/g,ut=f*Math.cos(ct*Math.PI/2),dt=p*Math.sin(ct*Math.PI/2)+x;for(let gt=0,Gt=k.length;gt<Gt;gt++){let kt=Z(k[gt],q[gt],dt);xt(kt.x,kt.y,d+ut)}for(let gt=0,Gt=D.length;gt<Gt;gt++){let kt=D[gt];X=F[gt];for(let qt=0,Jt=kt.length;qt<Jt;qt++){let O=Z(kt[qt],X[qt],dt);y?xt(O.x,O.y+A[h-1].y,A[h-1].x+ut):xt(O.x,O.y,d+ut)}}}le(),K();function le(){let it=s.length/3;if(u){let ct=0,ut=J*ct;for(let dt=0;dt<ee;dt++){let gt=Mt[dt];zt(gt[2]+ut,gt[1]+ut,gt[0]+ut)}ct=h+g*2,ut=J*ct;for(let dt=0;dt<ee;dt++){let gt=Mt[dt];zt(gt[0]+ut,gt[1]+ut,gt[2]+ut)}}else{for(let ct=0;ct<ee;ct++){let ut=Mt[ct];zt(ut[2],ut[1],ut[0])}for(let ct=0;ct<ee;ct++){let ut=Mt[ct];zt(ut[0]+J*h,ut[1]+J*h,ut[2]+J*h)}}n.addGroup(it,s.length/3-it,0)}function K(){let it=s.length/3,ct=0;et(k,ct),ct+=k.length;for(let ut=0,dt=D.length;ut<dt;ut++){let gt=D[ut];et(gt,ct),ct+=gt.length}n.addGroup(it,s.length/3-it,1)}function et(it,ct){let ut=it.length;for(;--ut>=0;){let dt=ut,gt=ut-1;gt<0&&(gt=it.length-1);for(let Gt=0,kt=h+g*2;Gt<kt;Gt++){let qt=J*Gt,Jt=J*(Gt+1),O=ct+dt+qt,me=ct+gt+qt,re=ct+gt+Jt,P=ct+dt+Jt;Rt(O,me,re,P)}}}function xt(it,ct,ut){c.push(it),c.push(ct),c.push(ut)}function zt(it,ct,ut){Xt(it),Xt(ct),Xt(ut);let dt=s.length/3,gt=S.generateTopUV(n,s,dt-3,dt-2,dt-1);ge(gt[0]),ge(gt[1]),ge(gt[2])}function Rt(it,ct,ut,dt){Xt(it),Xt(ct),Xt(dt),Xt(ct),Xt(ut),Xt(dt);let gt=s.length/3,Gt=S.generateSideWallUV(n,s,gt-6,gt-3,gt-2,gt-1);ge(Gt[0]),ge(Gt[1]),ge(Gt[3]),ge(Gt[1]),ge(Gt[2]),ge(Gt[3])}function Xt(it){s.push(c[it*3+0]),s.push(c[it*3+1]),s.push(c[it*3+2])}function ge(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new hu[s.type]().fromJSON(s)),new i(n,t.options)}},Km={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ot(r,a),new ot(o,c),new ot(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],p=t[s*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ot(a,1-c),new ot(l,1-d),new ot(u,1-p),new ot(x,1-m)]:[new ot(o,1-c),new ot(h,1-d),new ot(f,1-p),new ot(g,1-m)]}};function jm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ls=class i extends Mr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Pa=class i extends Mr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},pn=class i extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,u=e/c,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let S=m*u-a;for(let A=0;A<l;A++){let y=A*d-r;p.push(y,-S,0),x.push(0,0,1),g.push(A/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<o;S++){let A=S+l*m,y=S+l*(m+1),M=S+1+l*(m+1),E=S+1+l*m;f.push(A,y,E),f.push(y,M,E)}this.setIndex(f),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(x,3)),this.setAttribute("uv",new fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var kn=class i extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new I,u=new I,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let S=[],A=m/n,y=a+A*o,M=t*Math.cos(y),E=Math.sqrt(t*t-M*M),C=0;m===0&&a===0?C=.5/e:m===n&&c===Math.PI&&(C=-.5/e);for(let v=0;v<=e;v++){let T=v/e,w=s+T*r;d.x=-E*Math.cos(w),d.y=M,d.z=E*Math.sin(w),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(T+C,1-A),S.push(l++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){let A=h[m][S+1],y=h[m][S],M=h[m+1][S],E=h[m+1][S+1];(m!==0||a>0)&&f.push(A,y,E),(m!==n-1||c<Math.PI)&&f.push(y,M,E)}this.setIndex(f),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(x,3)),this.setAttribute("uv",new fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Wi=class i extends _e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],d=[],u=new I,f=new I,p=new I;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let m=0;m<=s;m++){let S=m/s*r;f.x=(t+e*Math.cos(g))*Math.cos(S),f.y=(t+e*Math.cos(g))*Math.sin(S),f.z=e*Math.sin(g),l.push(f.x,f.y,f.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,S=(s+1)*(x-1)+g-1,A=(s+1)*(x-1)+g,y=(s+1)*x+g;c.push(m,S,y),c.push(S,A,y)}this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Hs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Tf(s))s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Tf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function yn(i){let t={};for(let e=0;e<i.length;e++){let n=Hs(i[e]);for(let s in n)t[s]=n[s]}return t}function Tf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Qm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Uu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var wn={clone:Hs,merge:yn},tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pe=class extends oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tg,this.fragmentShader=eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=Qm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new pt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ot().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new te().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Kt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Tr=class extends pe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},jt=class extends oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ia=class extends oi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var Fl=class extends oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ol=class extends oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function lr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function nu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var as=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Bl=class extends as{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:au,endingEnd:au}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ou:r=t,o=2*e-n;break;case lu:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ou:a=t,c=2*n-e;break;case lu:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,S=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,A=(-1-f)*g+(1.5+f)*x+.5*p,y=f*g-f*x;for(let M=0;M!==o;++M)r[M]=m*a[h+M]+S*a[l+M]+A*a[c+M]+y*a[d+M];return r}},zl=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},kl=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Hl=class extends as{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(s-e),x=1-p;for(let g=0;g!==o;++g)r[g]=a[l+g]*x+a[c+g]*p;return r}let u=o*2,f=t-1;for(let p=0;p!==o;++p){let x=a[l+p],g=a[c+p],m=f*u+p*2,S=d[m],A=d[m+1],y=t*u+p*2,M=h[y],E=h[y+1],C=ig(n,e,S,M,s);r[p]=xp(C,x,A,E,g)}return r}};function xp(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function ng(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function ig(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=xp(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=ng(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Hn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=lr(e,this.TimeBufferType),this.values=lr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:lr(t.times,Array),values:lr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),nu(t.settings)&&(n.settings={inTangents:lr(t.settings.inTangents,Array),outTangents:lr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Hl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ea:e=this.InterpolantFactoryMethodDiscrete;break;case El:e=this.InterpolantFactoryMethodLinear;break;case pl:e=this.InterpolantFactoryMethodSmooth;break;case ru:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Wt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ea;case this.InterpolantFactoryMethodLinear:return El;case this.InterpolantFactoryMethodSmooth:return pl;case this.InterpolantFactoryMethodBezier:return ru}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;nu(this.settings)&&(wf(this.settings.inTangents,t),wf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Yt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Yt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&sm(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Yt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pl,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,nu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function wf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=El;var os=class extends Hn{constructor(t,e,n){super(t,e,n)}};os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=ea;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends Hn{constructor(t,e,n,s){super(t,e,n,s)}};Vl.prototype.ValueTypeName="color";var Gl=class extends Hn{constructor(t,e,n,s){super(t,e,n,s)}};Gl.prototype.ValueTypeName="number";var Wl=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)In.slerpFlat(r,0,a,l-o,a,l,c);return r}},Da=class extends Hn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Wl(this.times,this.values,this.getValueSize(),t)}};Da.prototype.ValueTypeName="quaternion";Da.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends Hn{constructor(t,e,n){super(t,e,n)}};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=ea;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends Hn{constructor(t,e,n,s){super(t,e,n,s)}};Xl.prototype.ValueTypeName="vector";var ql=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],p=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vp=new ql,Yl=class{constructor(t){this.manager=t!==void 0?t:vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Yl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ns=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Us=class extends Ns{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},iu=new Kt,Af=new I,Rf=new I,wr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yr,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Af.setFromMatrixPosition(t.matrixWorld),e.position.copy(Af),Rf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){iu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(iu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===fr||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(iu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},dl=new I,fl=new In,gi=new I,La=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(dl,fl,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,fl,gi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(dl,fl,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,fl,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},is=new I,Cf=new ot,Pf=new ot,un=class extends La{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=aa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ch*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return aa*2*Math.atan(Math.tan(Ch*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,e){return this.getViewBounds(t,Cf,Pf),e.subVectors(Pf,Cf)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ch*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},pu=class extends wr{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=aa*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Na=class extends Ns{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new pu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},mu=class extends wr{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}},cs=class extends Ns{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new mu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},hs=class extends La{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gu=class extends wr{constructor(){super(new hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fs=class extends Ns{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new gu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var cr=-90,hr=1,Zl=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(cr,hr,t,e);s.layers=this.layers,this.add(s);let r=new un(cr,hr,t,e);r.layers=this.layers,this.add(r);let a=new un(cr,hr,t,e);a.layers=this.layers,this.add(a);let o=new un(cr,hr,t,e);o.layers=this.layers,this.add(o);let c=new un(cr,hr,t,e);c.layers=this.layers,this.add(c);let l=new un(cr,hr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Jl=class extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Ua=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=sg.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function sg(){this._document.hidden===!1&&this.reset()}var Fu="\\[\\]\\.:\\/",rg=new RegExp("["+Fu+"]","g"),Ou="[^"+Fu+"]",ag="[^"+Fu.replace("\\.","")+"]",og=/((?:WC+[\/:])*)/.source.replace("WC",Ou),lg=/(WCOD+)?/.source.replace("WCOD",ag),cg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ou),hg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ou),ug=new RegExp("^"+og+lg+cg+hg+"$"),dg=["material","materials","bones","map"],xu=class{constructor(t,e,n){let s=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(rg,"")}static parseTrackName(t){let e=ug.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);dg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=xu;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var O1=new Float32Array(1);var vu=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Bu(i,t,e,n){let s=fg(n);switch(e){case Pu:return i*t;case ic:return i*t/s.components*s.byteLength;case sc:return i*t/s.components*s.byteLength;case ms:return i*t*2/s.components*s.byteLength;case rc:return i*t*2/s.components*s.byteLength;case Iu:return i*t*3/s.components*s.byteLength;case Tn:return i*t*4/s.components*s.byteLength;case ac:return i*t*4/s.components*s.byteLength;case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Za:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lc:case hc:return Math.max(i,16)*Math.max(t,8)/4;case oc:case cc:return Math.max(i,8)*Math.max(t,8)/2;case uc:case dc:case pc:case mc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fc:case $a:case gc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case _c:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case yc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case bc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Cc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Pc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ic:case Dc:case Lc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Nc:case Uc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ka:case Fc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fg(i){switch(i){case _n:case wu:return{byteLength:1,components:1};case Rr:case Au:case Xe:return{byteLength:2,components:1};case ec:case nc:return{byteLength:2,components:4};case hi:case tc:case Vn:return{byteLength:4,components:1};case Ru:case Cu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function kp(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function vg(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var _g=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yg=`#ifdef USE_ALPHAHASH
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
#endif`,Mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tg=`#ifdef USE_AOMAP
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
#endif`,wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ag=`#ifdef USE_BATCHING
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
#endif`,Rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ig=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dg=`#ifdef USE_IRIDESCENCE
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
#endif`,Lg=`#ifdef USE_BUMPMAP
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
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Vg=`#define PI 3.141592653589793
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
} // validated`,Gg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wg=`vec3 transformedNormal = objectNormal;
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
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jg="gl_FragColor = linearToOutputTexel( gl_FragColor );",$g=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kg=`#ifdef USE_ENVMAP
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
#endif`,jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
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
#endif`,tx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ax=`#ifdef USE_GRADIENTMAP
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
}`,ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ux=`#ifdef USE_ENVMAP
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
#endif`,dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gx=`PhysicalMaterial material;
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
#endif`,xx=`uniform sampler2D dfgLUT;
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
}`,vx=`
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
#endif`,_x=`#if defined( RE_IndirectDiffuse )
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
#endif`,yx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cx=`#if defined( USE_POINTS_UV )
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
#endif`,Px=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`#ifdef USE_MORPHTARGETS
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
#endif`,Fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vx=`#ifdef USE_NORMALMAP
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
#endif`,Gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ev=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sv=`float getShadowMask() {
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
}`,rv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,av=`#ifdef USE_SKINNING
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
#endif`,ov=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lv=`#ifdef USE_SKINNING
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
#endif`,cv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fv=`#ifdef USE_TRANSMISSION
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
#endif`,pv=`#ifdef USE_TRANSMISSION
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
#endif`,mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_v=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yv=`uniform sampler2D t2D;
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
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ev=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tv=`#include <common>
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
}`,wv=`#if DEPTH_PACKING == 3200
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
}`,Av=`#define DISTANCE
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
}`,Rv=`#define DISTANCE
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
}`,Cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iv=`uniform float scale;
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
}`,Dv=`uniform vec3 diffuse;
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
}`,Lv=`#include <common>
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
}`,Nv=`uniform vec3 diffuse;
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
}`,Uv=`#define LAMBERT
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
}`,Fv=`#define LAMBERT
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
}`,Ov=`#define MATCAP
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
}`,Bv=`#define MATCAP
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
}`,zv=`#define NORMAL
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
}`,kv=`#define NORMAL
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
}`,Hv=`#define PHONG
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
}`,Vv=`#define PHONG
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
}`,Gv=`#define STANDARD
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
}`,Wv=`#define STANDARD
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
}`,Xv=`#define TOON
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
}`,qv=`#define TOON
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
}`,Yv=`uniform float size;
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
}`,Zv=`uniform vec3 diffuse;
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
}`,Jv=`#include <common>
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
}`,$v=`uniform vec3 color;
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
}`,Kv=`uniform float rotation;
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
}`,jv=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:_g,alphahash_pars_fragment:yg,alphamap_fragment:Mg,alphamap_pars_fragment:Sg,alphatest_fragment:bg,alphatest_pars_fragment:Eg,aomap_fragment:Tg,aomap_pars_fragment:wg,batching_pars_vertex:Ag,batching_vertex:Rg,begin_vertex:Cg,beginnormal_vertex:Pg,bsdfs:Ig,iridescence_fragment:Dg,bumpmap_pars_fragment:Lg,clipping_planes_fragment:Ng,clipping_planes_pars_fragment:Ug,clipping_planes_pars_vertex:Fg,clipping_planes_vertex:Og,color_fragment:Bg,color_pars_fragment:zg,color_pars_vertex:kg,color_vertex:Hg,common:Vg,cube_uv_reflection_fragment:Gg,defaultnormal_vertex:Wg,displacementmap_pars_vertex:Xg,displacementmap_vertex:qg,emissivemap_fragment:Yg,emissivemap_pars_fragment:Zg,colorspace_fragment:Jg,colorspace_pars_fragment:$g,envmap_fragment:Kg,envmap_common_pars_fragment:jg,envmap_pars_fragment:Qg,envmap_pars_vertex:tx,envmap_physical_pars_fragment:ux,envmap_vertex:ex,fog_vertex:nx,fog_pars_vertex:ix,fog_fragment:sx,fog_pars_fragment:rx,gradientmap_pars_fragment:ax,lightmap_pars_fragment:ox,lights_lambert_fragment:lx,lights_lambert_pars_fragment:cx,lights_pars_begin:hx,lights_toon_fragment:dx,lights_toon_pars_fragment:fx,lights_phong_fragment:px,lights_phong_pars_fragment:mx,lights_physical_fragment:gx,lights_physical_pars_fragment:xx,lights_fragment_begin:vx,lights_fragment_maps:_x,lights_fragment_end:yx,lightprobes_pars_fragment:Mx,logdepthbuf_fragment:Sx,logdepthbuf_pars_fragment:bx,logdepthbuf_pars_vertex:Ex,logdepthbuf_vertex:Tx,map_fragment:wx,map_pars_fragment:Ax,map_particle_fragment:Rx,map_particle_pars_fragment:Cx,metalnessmap_fragment:Px,metalnessmap_pars_fragment:Ix,morphinstance_vertex:Dx,morphcolor_vertex:Lx,morphnormal_vertex:Nx,morphtarget_pars_vertex:Ux,morphtarget_vertex:Fx,normal_fragment_begin:Ox,normal_fragment_maps:Bx,normal_pars_fragment:zx,normal_pars_vertex:kx,normal_vertex:Hx,normalmap_pars_fragment:Vx,clearcoat_normal_fragment_begin:Gx,clearcoat_normal_fragment_maps:Wx,clearcoat_pars_fragment:Xx,iridescence_pars_fragment:qx,opaque_fragment:Yx,packing:Zx,premultiplied_alpha_fragment:Jx,project_vertex:$x,dithering_fragment:Kx,dithering_pars_fragment:jx,roughnessmap_fragment:Qx,roughnessmap_pars_fragment:tv,shadowmap_pars_fragment:ev,shadowmap_pars_vertex:nv,shadowmap_vertex:iv,shadowmask_pars_fragment:sv,skinbase_vertex:rv,skinning_pars_vertex:av,skinning_vertex:ov,skinnormal_vertex:lv,specularmap_fragment:cv,specularmap_pars_fragment:hv,tonemapping_fragment:uv,tonemapping_pars_fragment:dv,transmission_fragment:fv,transmission_pars_fragment:pv,uv_pars_fragment:mv,uv_pars_vertex:gv,uv_vertex:xv,worldpos_vertex:vv,background_vert:_v,background_frag:yv,backgroundCube_vert:Mv,backgroundCube_frag:Sv,cube_vert:bv,cube_frag:Ev,depth_vert:Tv,depth_frag:wv,distance_vert:Av,distance_frag:Rv,equirect_vert:Cv,equirect_frag:Pv,linedashed_vert:Iv,linedashed_frag:Dv,meshbasic_vert:Lv,meshbasic_frag:Nv,meshlambert_vert:Uv,meshlambert_frag:Fv,meshmatcap_vert:Ov,meshmatcap_frag:Bv,meshnormal_vert:zv,meshnormal_frag:kv,meshphong_vert:Hv,meshphong_frag:Vv,meshphysical_vert:Gv,meshphysical_frag:Wv,meshtoon_vert:Xv,meshtoon_frag:qv,points_vert:Yv,points_frag:Zv,shadow_vert:Jv,shadow_frag:$v,sprite_vert:Kv,sprite_frag:jv},Tt={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},wi={basic:{uniforms:yn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:yn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:yn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:yn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:yn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new pt(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:yn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:yn([Tt.points,Tt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:yn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:yn([Tt.common,Tt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:yn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:yn([Tt.sprite,Tt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:yn([Tt.common,Tt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:yn([Tt.lights,Tt.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};wi.physical={uniforms:yn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var zc={r:0,b:0,g:0},Qv=new Kt,Hp=new te;Hp.set(-1,0,0,0,1,0,0,0,1);function t_(i,t,e,n,s,r){let a=new pt(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let y=S.backgroundBlurriness>0;A=t.get(A,y)}return A}function p(S){let A=!1,y=f(S);y===null?g(a,o):y&&y.isColor&&(g(y,1),A=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(S,A){let y=f(A);y&&(y.isCubeTexture||y.mapping===Wa)?(l===void 0&&(l=new mt(new ie(1,1,1),new pe({name:"BackgroundCubeMaterial",uniforms:Hs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Qv.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Hp),l.material.toneMapped=ce.getTransfer(y.colorSpace)!==ve,(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new mt(new pn(2,2),new pe({name:"BackgroundMaterial",uniforms:Hs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=ce.getTransfer(y.colorSpace)!==ve,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,A){S.getRGB(zc,Uu(i)),e.buffers.color.setClear(zc.r,zc.g,zc.b,A,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:p,addToRenderList:x,dispose:m}}function e_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(D,L,U,N,k){let Z=!1,J=d(D,N,U,L);r!==J&&(r=J,l(r.object)),Z=f(D,N,U,k),Z&&p(D,N,U,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(D,L,U,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,L,U,N){let k=N.wireframe===!0,Z=n[L.id];Z===void 0&&(Z={},n[L.id]=Z);let J=D.isInstancedMesh===!0?D.id:0,at=Z[J];at===void 0&&(at={},Z[J]=at);let q=at[U.id];q===void 0&&(q={},at[U.id]=q);let F=q[k];return F===void 0&&(F=u(c()),q[k]=F),F}function u(D){let L=[],U=[],N=[];for(let k=0;k<e;k++)L[k]=0,U[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:N,object:D,attributes:{},index:null}}function f(D,L,U,N){let k=r.attributes,Z=L.attributes,J=0,at=U.getAttributes();for(let q in at)if(at[q].location>=0){let X=k[q],ht=Z[q];if(ht===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(ht=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(ht=D.instanceColor)),X===void 0||X.attribute!==ht||ht&&X.data!==ht.data)return!0;J++}return r.attributesNum!==J||r.index!==N}function p(D,L,U,N){let k={},Z=L.attributes,J=0,at=U.getAttributes();for(let q in at)if(at[q].location>=0){let X=Z[q];X===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(X=D.instanceColor));let ht={};ht.attribute=X,X&&X.data&&(ht.data=X.data),k[q]=ht,J++}r.attributes=k,r.attributesNum=J,r.index=N}function x(){let D=r.newAttributes;for(let L=0,U=D.length;L<U;L++)D[L]=0}function g(D){m(D,0)}function m(D,L){let U=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;U[D]=1,N[D]===0&&(i.enableVertexAttribArray(D),N[D]=1),k[D]!==L&&(i.vertexAttribDivisor(D,L),k[D]=L)}function S(){let D=r.newAttributes,L=r.enabledAttributes;for(let U=0,N=L.length;U<N;U++)L[U]!==D[U]&&(i.disableVertexAttribArray(U),L[U]=0)}function A(D,L,U,N,k,Z,J){J===!0?i.vertexAttribIPointer(D,L,U,k,Z):i.vertexAttribPointer(D,L,U,N,k,Z)}function y(D,L,U,N){x();let k=N.attributes,Z=U.getAttributes(),J=L.defaultAttributeValues;for(let at in Z){let q=Z[at];if(q.location>=0){let F=k[at];if(F===void 0&&(at==="instanceMatrix"&&D.instanceMatrix&&(F=D.instanceMatrix),at==="instanceColor"&&D.instanceColor&&(F=D.instanceColor)),F!==void 0){let X=F.normalized,ht=F.itemSize,Mt=t.get(F);if(Mt===void 0)continue;let ee=Mt.buffer,Qt=Mt.type,le=Mt.bytesPerElement,K=Qt===i.INT||Qt===i.UNSIGNED_INT||F.gpuType===tc;if(F.isInterleavedBufferAttribute){let et=F.data,xt=et.stride,zt=F.offset;if(et.isInstancedInterleavedBuffer){for(let Rt=0;Rt<q.locationSize;Rt++)m(q.location+Rt,et.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Rt=0;Rt<q.locationSize;Rt++)g(q.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Rt=0;Rt<q.locationSize;Rt++)A(q.location+Rt,ht/q.locationSize,Qt,X,xt*le,(zt+ht/q.locationSize*Rt)*le,K)}else{if(F.isInstancedBufferAttribute){for(let et=0;et<q.locationSize;et++)m(q.location+et,F.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let et=0;et<q.locationSize;et++)g(q.location+et);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let et=0;et<q.locationSize;et++)A(q.location+et,ht/q.locationSize,Qt,X,ht*le,ht/q.locationSize*et*le,K)}}else if(J!==void 0){let X=J[at];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(q.location,X);break;case 3:i.vertexAttrib3fv(q.location,X);break;case 4:i.vertexAttrib4fv(q.location,X);break;default:i.vertexAttrib1fv(q.location,X)}}}}S()}function M(){T();for(let D in n){let L=n[D];for(let U in L){let N=L[U];for(let k in N){let Z=N[k];for(let J in Z)h(Z[J].object),delete Z[J];delete N[k]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;let L=n[D.id];for(let U in L){let N=L[U];for(let k in N){let Z=N[k];for(let J in Z)h(Z[J].object),delete Z[J];delete N[k]}}delete n[D.id]}function C(D){for(let L in n){let U=n[L];for(let N in U){let k=U[N];if(k[D.id]===void 0)continue;let Z=k[D.id];for(let J in Z)h(Z[J].object),delete Z[J];delete k[D.id]}}}function v(D){for(let L in n){let U=n[L],N=D.isInstancedMesh===!0?D.id:0,k=U[N];if(k!==void 0){for(let Z in k){let J=k[Z];for(let at in J)h(J[at].object),delete J[at];delete k[Z]}delete U[N],Object.keys(U).length===0&&delete n[L]}}}function T(){w(),a=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:w,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:S}}function n_(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function i_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Tn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let v=C===Xe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==_n&&C!==Vn&&!v&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Wt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:y,maxSamples:M,samples:E}}function s_(i){let t=this,e=null,n=0,s=!1,r=!1,a=new ii,o=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):l();else{let S=r?0:n,A=S*4,y=m.clippingState||null;c.value=y,y=h(p,u,A,f);for(let M=0;M!==A;++M)y[M]=e[M];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=c.value,p!==!0||g===null){let m=f+x*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let A=0,y=f;A!==x;++A,y+=4)a.copy(d[A]).applyMatrix4(S,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Pr=4,r_=6,a_=20,o_=256,to=new hs,_p=new pt,zu=null,ku=0,Hu=0,Vu=!1,l_=new I,Vs=new I,Dr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=l_}=r;zu=this._renderer.getRenderTarget(),ku=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(zu,ku,Hu),this._renderer.xr.enabled=Vu,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zu=this._renderer.getRenderTarget(),ku=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Xe,format:Tn,colorSpace:na,depthBuffer:!1},s=yp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yp(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=c_(r)),this._blurMaterial=u_(r,t,e),this._ggxMaterial=h_(r,t,e)}return s}_compileMaterial(t){let e=new mt(new _e,t);this._renderer.compile(e,to)}_sceneToCubeUV(t,e,n,s,r){let c=new un(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(_p),d.toneMapping=ci,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mt(new ie,new ye({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,m=!0):(g.color.copy(_p),m=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[A],r.y,r.z)):y===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[A]));let M=this._cubeSize;Cr(s,y*M,A>2?M:0,M,M),d.setRenderTarget(s),m&&d.render(x,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ds||t.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Cr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,to)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-Pr?n-p+Pr:0),m=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=p-e,Cr(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(o,to),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,Cr(t,g,m,3*x,2*x),s.setRenderTarget(t),s.render(o,to)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Pr?s-this._lodMax+Pr:0),u=4*(this._cubeSize-h);Cr(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(c,to)}};function c_(i){let t=[],e=[],n=i,s=i-Pr+1+r_;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,p=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let m=0;m<d;m++){let S=m%3*2/3-1,A=m>2?0:-1,y=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];p.set(y,f*u*m);for(let M=0;M<u;M++){let E=h[M*2]*2-1,C=h[M*2+1]*2-1;m===0?Vs.set(1,C,E):m===1?Vs.set(-E,1,-C):m===2?Vs.set(-E,C,1):m===3?Vs.set(-1,C,-E):m===4?Vs.set(-E,-1,C):Vs.set(E,C,-1),Vs.toArray(x,(m*u+M)*f)}}let g=new _e;g.setAttribute("position",new de(p,f)),g.setAttribute("outputDirection",new de(x,f)),e.push(new mt(g,null)),n>Pr&&n--}return{lodMeshes:e,sizeLods:t}}function yp(i,t,e){let n=new Be(i,t,e);return n.texture.mapping=Wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function h_(i,t,e){return new pe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:o_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Je,depthTest:!1,depthWrite:!1})}function u_(i,t,e){return new pe({name:"SphericalGaussianBlur",defines:{SAMPLES:a_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Je,depthTest:!1,depthWrite:!1})}function Mp(){return new pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Je,depthTest:!1,depthWrite:!1})}function Sp(){return new pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Je,depthTest:!1,depthWrite:!1})}function Gc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Hc=class extends Be{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ga(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ie(5,5,5),r=new pe({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Je});r.uniforms.tEquirect.value=e;let a=new mt(s,r),o=e.minFilter;return e.minFilter===fs&&(e.minFilter=fn),new Zl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function d_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Kl||f===jl)if(t.has(u)){let p=t.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new Hc(p.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",l),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,p=f===Kl||f===jl,x=f===ds||f===ks;if(p||x){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Dr(i)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let S=u.image;return p&&S&&S.height>0||x&&S&&c(S)?(n===null&&(n=new Dr(i)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===Kl?u.mapping=ds:f===jl&&(u.mapping=ks),u}function c(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function l(u){let f=u.target;f.removeEventListener("dispose",l);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function f_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ps("WebGLRenderer: "+n+" extension not supported."),s}}}function p_(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let S=f.array;x=f.version;for(let A=0,y=S.length;A<y;A+=3){let M=S[A+0],E=S[A+1],C=S[A+2];u.push(M,E,E,C,C,M)}}else{let S=p.array;x=p.version;for(let A=0,y=S.length/3-1;A<y;A+=3){let M=A+0,E=A+1,C=A+2;u.push(M,E,E,C,C,M)}}let g=new(p.count>=65535?ua:ha)(u,1);g.version=x;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function m_(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function g_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function x_(i,t,e){let n=new WeakMap,s=new Ee;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],A=0;f===!0&&(A=1),p===!0&&(A=2),x===!0&&(A=3);let y=o.attributes.position.count*A,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*M*4*d),C=new oa(E,y,M,d);C.type=Vn,C.needsUpdate=!0;let v=A*4;for(let w=0;w<d;w++){let D=g[w],L=m[w],U=S[w],N=y*M*4*w;for(let k=0;k<D.count;k++){let Z=k*v;f===!0&&(s.fromBufferAttribute(D,k),E[N+Z+0]=s.x,E[N+Z+1]=s.y,E[N+Z+2]=s.z,E[N+Z+3]=0),p===!0&&(s.fromBufferAttribute(L,k),E[N+Z+4]=s.x,E[N+Z+5]=s.y,E[N+Z+6]=s.z,E[N+Z+7]=0),x===!0&&(s.fromBufferAttribute(U,k),E[N+Z+8]=s.x,E[N+Z+9]=s.y,E[N+Z+10]=s.z,E[N+Z+11]=U.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new ot(y,M)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let p=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function v_(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var __={[Ba]:"LINEAR_TONE_MAPPING",[za]:"REINHARD_TONE_MAPPING",[ka]:"CINEON_TONE_MAPPING",[zs]:"ACES_FILMIC_TONE_MAPPING",[Va]:"AGX_TONE_MAPPING",[Ga]:"NEUTRAL_TONE_MAPPING",[Ha]:"CUSTOM_TONE_MAPPING"};function y_(i,t,e,n,s,r){let a=new Be(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new _e;l.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new fe([0,2,0,0,2,0],2));let h=new Tr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new mt(l,h),u=new hs(-1,1,1,-1,0,1),f=null,p=null,x=!1,g,m=null,S=[],A=!1;this.setSize=function(y,M){a.setSize(y,M),o!==null&&o.setSize(y,M),c!==null&&c.setSize(y,M);for(let E=0;E<S.length;E++){let C=S[E];C.setSize&&C.setSize(y,M)}},this.setEffects=function(y){S=y,A=S.length>0&&S[0].isRenderPass===!0;let M=a.width,E=a.height;S.length>0&&o===null&&(o=new Be(M,E,{type:Xe,depthBuffer:!1,stencilBuffer:!1}),c=new Be(M,E,{type:Xe,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){let v=S[C];v.setSize&&v.setSize(M,E)}},this.begin=function(y,M){if(x||y.toneMapping===ci&&S.length===0)return!1;if(m=M,M!==null){let E=M.width,C=M.height;(a.width!==E||a.height!==C)&&this.setSize(E,C)}return A===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=ci,!0},this.hasRenderPass=function(){return A},this.end=function(y,M){y.toneMapping=g,x=!0;let E=a,C=o;for(let v=0;v<S.length;v++){let T=S[v];T.enabled!==!1&&(T.render(y,C,E,M),T.needsSwap!==!1&&(E=C,C=C===o?c:o))}if(f!==y.outputColorSpace||p!==y.toneMapping){f=y.outputColorSpace,p=y.toneMapping,h.defines={},ce.getTransfer(f)===ve&&(h.defines.SRGB_TRANSFER="");let v=__[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(m),y.render(d,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var Vp=new En,Xu=new Si(1,1),Gp=new oa,Wp=new Al,Xp=new ga,bp=[],Ep=[],Tp=new Float32Array(16),wp=new Float32Array(9),Ap=new Float32Array(4);function Lr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=bp[s];if(r===void 0&&(r=new Float32Array(s),bp[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function rn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function an(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wc(i,t){let e=Ep[t];e===void 0&&(e=new Int32Array(t),Ep[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function M_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function S_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2fv(this.addr,t),an(e,t)}}function b_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;i.uniform3fv(this.addr,t),an(e,t)}}function E_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4fv(this.addr,t),an(e,t)}}function T_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;Ap.set(n),i.uniformMatrix2fv(this.addr,!1,Ap),an(e,n)}}function w_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;wp.set(n),i.uniformMatrix3fv(this.addr,!1,wp),an(e,n)}}function A_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;Tp.set(n),i.uniformMatrix4fv(this.addr,!1,Tp),an(e,n)}}function R_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function C_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2iv(this.addr,t),an(e,t)}}function P_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3iv(this.addr,t),an(e,t)}}function I_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4iv(this.addr,t),an(e,t)}}function D_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function L_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2uiv(this.addr,t),an(e,t)}}function N_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3uiv(this.addr,t),an(e,t)}}function U_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4uiv(this.addr,t),an(e,t)}}function F_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xu.compareFunction=e.isReversedDepthBuffer()?Bc:Oc,r=Xu):r=Vp,e.setTexture2D(t||r,s)}function O_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wp,s)}function B_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Xp,s)}function z_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gp,s)}function k_(i){switch(i){case 5126:return M_;case 35664:return S_;case 35665:return b_;case 35666:return E_;case 35674:return T_;case 35675:return w_;case 35676:return A_;case 5124:case 35670:return R_;case 35667:case 35671:return C_;case 35668:case 35672:return P_;case 35669:case 35673:return I_;case 5125:return D_;case 36294:return L_;case 36295:return N_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return F_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return z_}}function H_(i,t){i.uniform1fv(this.addr,t)}function V_(i,t){let e=Lr(t,this.size,2);i.uniform2fv(this.addr,e)}function G_(i,t){let e=Lr(t,this.size,3);i.uniform3fv(this.addr,e)}function W_(i,t){let e=Lr(t,this.size,4);i.uniform4fv(this.addr,e)}function X_(i,t){let e=Lr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function q_(i,t){let e=Lr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Y_(i,t){let e=Lr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Z_(i,t){i.uniform1iv(this.addr,t)}function J_(i,t){i.uniform2iv(this.addr,t)}function $_(i,t){i.uniform3iv(this.addr,t)}function K_(i,t){i.uniform4iv(this.addr,t)}function j_(i,t){i.uniform1uiv(this.addr,t)}function Q_(i,t){i.uniform2uiv(this.addr,t)}function ty(i,t){i.uniform3uiv(this.addr,t)}function ey(i,t){i.uniform4uiv(this.addr,t)}function ny(i,t,e){let n=this.cache,s=t.length,r=Wc(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Xu:a=Vp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function iy(i,t,e){let n=this.cache,s=t.length,r=Wc(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Wp,r[a])}function sy(i,t,e){let n=this.cache,s=t.length,r=Wc(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Xp,r[a])}function ry(i,t,e){let n=this.cache,s=t.length,r=Wc(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Gp,r[a])}function ay(i){switch(i){case 5126:return H_;case 35664:return V_;case 35665:return G_;case 35666:return W_;case 35674:return X_;case 35675:return q_;case 35676:return Y_;case 5124:case 35670:return Z_;case 35667:case 35671:return J_;case 35668:case 35672:return $_;case 35669:case 35673:return K_;case 5125:return j_;case 36294:return Q_;case 36295:return ty;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return sy;case 36289:case 36303:case 36311:case 36292:return ry}}var qu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=k_(e.type)}},Yu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ay(e.type)}},Zu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Gu=/(\w+)(\])?(\[|\.)?/g;function Rp(i,t){i.seq.push(t),i.map[t.id]=t}function oy(i,t,e){let n=i.name,s=n.length;for(Gu.lastIndex=0;;){let r=Gu.exec(n),a=Gu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Rp(e,l===void 0?new qu(o,i,t):new Yu(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Zu(o),Rp(e,d)),e=d}}}var Ir=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);oy(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Cp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ly=37297,cy=0;function hy(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Pp=new te;function uy(i){ce._getMatrix(Pp,ce.workingColorSpace,i);let t=`mat3( ${Pp.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case ia:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ip(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+hy(i.getShaderSource(t),o)}else return r}function dy(i,t){let e=uy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var fy={[Ba]:"Linear",[za]:"Reinhard",[ka]:"Cineon",[zs]:"ACESFilmic",[Va]:"AgX",[Ga]:"Neutral",[Ha]:"Custom"};function py(i,t){let e=fy[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var kc=new I;function my(){ce.getLuminanceCoefficients(kc);let i=kc.x.toFixed(4),t=kc.y.toFixed(4),e=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function xy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function no(i){return i!==""}function Dp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _y=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ju(i){return i.replace(_y,My)}var yy=new Map;function My(i,t){let e=oe[t];if(e===void 0){let n=yy.get(t);if(n!==void 0)e=oe[n],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ju(e)}var Sy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Np(i){return i.replace(Sy,by)}function by(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Up(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Ey={[Os]:"SHADOWMAP_TYPE_PCF",[Ar]:"SHADOWMAP_TYPE_VSM"};function Ty(i){return Ey[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var wy={[ds]:"ENVMAP_TYPE_CUBE",[ks]:"ENVMAP_TYPE_CUBE",[Wa]:"ENVMAP_TYPE_CUBE_UV"};function Ay(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":wy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ry={[ks]:"ENVMAP_MODE_REFRACTION"};function Cy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ry[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Py={[Eu]:"ENVMAP_BLENDING_MULTIPLY",[Zf]:"ENVMAP_BLENDING_MIX",[Jf]:"ENVMAP_BLENDING_ADD"};function Iy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Py[i.combine]||"ENVMAP_BLENDING_NONE"}function Dy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ly(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Ty(e),l=Ay(e),h=Cy(e),d=Iy(e),u=Dy(e),f=gy(e),p=xy(r),x=s.createProgram(),g,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(no).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(no).join(`
`),m.length>0&&(m+=`
`)):(g=[Up(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),m=[Up(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?oe.tonemapping_pars_fragment:"",e.toneMapping!==ci?py("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,dy("linearToOutputTexel",e.outputColorSpace),my(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(no).join(`
`)),a=Ju(a),a=Dp(a,e),a=Lp(a,e),o=Ju(o),o=Dp(o,e),o=Lp(o,e),a=Np(a),o=Np(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=S+g+a,y=S+m+o,M=Cp(s,s.VERTEX_SHADER,A),E=Cp(s,s.FRAGMENT_SHADER,y);s.attachShader(x,M),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(D){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",U=s.getShaderInfoLog(M)||"",N=s.getShaderInfoLog(E)||"",k=L.trim(),Z=U.trim(),J=N.trim(),at=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,E);else{let F=Ip(s,M,"vertex"),X=Ip(s,E,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+F+`
`+X)}else k!==""?Wt("WebGLProgram: Program Info Log:",k):(Z===""||J==="")&&(q=!1);q&&(D.diagnostics={runnable:at,programLog:k,vertexShader:{log:Z,prefix:g},fragmentShader:{log:J,prefix:m}})}s.deleteShader(M),s.deleteShader(E),v=new Ir(s,x),T=vy(s,x)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(x,ly)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cy++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=E,this}var Ny=0,$u=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ku(t),e.set(t,n)),n}},Ku=class{constructor(t){this.id=Ny++,this.code=t,this.usedTimes=0}};function Uy(i){return i===ms||i===$a||i===Ka}function Fy(i,t,e,n,s,r){let a=new la,o=new $u,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,T,w,D,L,U){let N=D.fog,k=L.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,at=t.get(v.envMap||Z,J),q=at&&at.mapping===Wa?at.image.height:null,F=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Wt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let X=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ht=X!==void 0?X.length:0,Mt=0;k.morphAttributes.position!==void 0&&(Mt=1),k.morphAttributes.normal!==void 0&&(Mt=2),k.morphAttributes.color!==void 0&&(Mt=3);let ee,Qt,le,K;if(F){let Ne=wi[F];ee=Ne.vertexShader,Qt=Ne.fragmentShader}else{ee=v.vertexShader,Qt=v.fragmentShader;let Ne=o.getVertexShaderStage(v),Me=o.getFragmentShaderStage(v);o.update(v,Ne,Me),le=Ne.id,K=Me.id}let et=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),zt=L.isInstancedMesh===!0,Rt=L.isBatchedMesh===!0,Xt=!!v.map,ge=!!v.matcap,it=!!at,ct=!!v.aoMap,ut=!!v.lightMap,dt=!!v.bumpMap&&v.wireframe===!1,gt=!!v.normalMap,Gt=!!v.displacementMap,kt=!!v.emissiveMap,qt=!!v.metalnessMap,Jt=!!v.roughnessMap,O=v.anisotropy>0,me=v.clearcoat>0,re=v.dispersion>0,P=v.retroreflectivity>0,_=v.iridescence>0,H=v.sheen>0,V=v.transmission>0,j=O&&!!v.anisotropyMap,ft=me&&!!v.clearcoatMap,vt=me&&!!v.clearcoatNormalMap,tt=me&&!!v.clearcoatRoughnessMap,st=_&&!!v.iridescenceMap,St=_&&!!v.iridescenceThicknessMap,Ot=H&&!!v.sheenColorMap,yt=H&&!!v.sheenRoughnessMap,_t=!!v.specularMap,Dt=!!v.specularColorMap,Ht=!!v.specularIntensityMap,$t=V&&!!v.transmissionMap,z=V&&!!v.thicknessMap,bt=!!v.gradientMap,nt=!!v.alphaMap,Et=v.alphaTest>0,Ct=!!v.alphaHash,lt=!!v.extensions,Vt=ci;v.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Vt=i.toneMapping);let Ft={shaderID:F,shaderType:v.type,shaderName:v.name,vertexShader:ee,fragmentShader:Qt,defines:v.defines,customVertexShaderID:le,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Rt,batchingColor:Rt&&L._colorsTexture!==null,instancing:zt,instancingColor:zt&&L.instanceColor!==null,instancingMorph:zt&&L.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Xt,matcap:ge,envMap:it,envMapMode:it&&at.mapping,envMapCubeUVHeight:q,aoMap:ct,lightMap:ut,bumpMap:dt,normalMap:gt,displacementMap:Gt,emissiveMap:kt,normalMapObjectSpace:gt&&v.normalMapType===Qf,normalMapTangentSpace:gt&&v.normalMapType===ja,packedNormalMap:gt&&v.normalMapType===ja&&Uy(v.normalMap.format),metalnessMap:qt,roughnessMap:Jt,anisotropy:O,anisotropyMap:j,clearcoat:me,clearcoatMap:ft,clearcoatNormalMap:vt,clearcoatRoughnessMap:tt,dispersion:re,retroreflection:P,iridescence:_,iridescenceMap:st,iridescenceThicknessMap:St,sheen:H,sheenColorMap:Ot,sheenRoughnessMap:yt,specularMap:_t,specularColorMap:Dt,specularIntensityMap:Ht,transmission:V,transmissionMap:$t,thicknessMap:z,gradientMap:bt,opaque:v.transparent===!1&&v.blending===bi&&v.alphaToCoverage===!1,alphaMap:nt,alphaTest:Et,alphaHash:Ct,combine:v.combine,mapUv:Xt&&p(v.map.channel),aoMapUv:ct&&p(v.aoMap.channel),lightMapUv:ut&&p(v.lightMap.channel),bumpMapUv:dt&&p(v.bumpMap.channel),normalMapUv:gt&&p(v.normalMap.channel),displacementMapUv:Gt&&p(v.displacementMap.channel),emissiveMapUv:kt&&p(v.emissiveMap.channel),metalnessMapUv:qt&&p(v.metalnessMap.channel),roughnessMapUv:Jt&&p(v.roughnessMap.channel),anisotropyMapUv:j&&p(v.anisotropyMap.channel),clearcoatMapUv:ft&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:vt&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:St&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:yt&&p(v.sheenRoughnessMap.channel),specularMapUv:_t&&p(v.specularMap.channel),specularColorMapUv:Dt&&p(v.specularColorMap.channel),specularIntensityMapUv:Ht&&p(v.specularIntensityMap.channel),transmissionMapUv:$t&&p(v.transmissionMap.channel),thicknessMapUv:z&&p(v.thicknessMap.channel),alphaMapUv:nt&&p(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(gt||O),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(Xt||nt),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&gt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Mt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Xt&&v.map.isVideoTexture===!0&&ce.getTransfer(v.map.colorSpace)===ve,decodeVideoTextureEmissive:kt&&v.emissiveMap.isVideoTexture===!0&&ce.getTransfer(v.emissiveMap.colorSpace)===ve,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===nn,flipSided:v.side===mn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:lt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&v.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function g(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let w in v.defines)T.push(w),T.push(v.defines[w]);return v.isRawShaderMaterial===!1&&(m(T,v),S(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function m(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function A(v){let T=f[v.type],w;if(T){let D=wi[T];w=wn.clone(D.uniforms)}else w=v.uniforms;return w}function y(v,T){let w=h.get(T);return w!==void 0?++w.usedTimes:(w=new Ly(i,T,v,s),l.push(w),h.set(T,w)),w}function M(v){if(--v.usedTimes===0){let T=l.indexOf(v);l[T]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function C(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:A,acquireProgram:y,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:C}}function Oy(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function By(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Fp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Op(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,x,g,m){let S=i[t];return S===void 0?(S={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},i[t]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=p,S.materialVariant=a(u),S.groupOrder=x,S.renderOrder=u.renderOrder,S.z=g,S.group=m),t++,S}function c(u,f,p,x,g,m,S){S.reversedDepth===!0&&(g=-g);let A=o(u,f,p,x,g,m);p.transmission>0?n.push(A):p.transparent===!0?s.push(A):e.push(A)}function l(u,f,p,x,g,m){let S=o(u,f,p,x,g,m);p.transmission>0?n.unshift(S):p.transparent===!0?s.unshift(S):e.unshift(S)}function h(u,f){e.length>1&&e.sort(u||By),n.length>1&&n.sort(f||Fp),s.length>1&&s.sort(f||Fp)}function d(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function zy(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Op,i.set(n,[a])):s>=r.length?(a=new Op,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ky(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new pt};break;case"SpotLight":e={position:new I,direction:new I,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Hy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Vy=0;function Gy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Wy(i){let t=new ky,e=Hy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new Kt,a=new Kt;function o(l){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,S=0,A=0,y=0,M=0,E=0,C=0,v=0,T=0,w=0;l.sort(Gy);for(let L=0,U=l.length;L<U;L++){let N=l[L],k=N.color,Z=N.intensity,J=N.distance,at=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ms?at=N.shadow.map.texture:at=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=k.r*Z,d+=k.g*Z,u+=k.b*Z;else if(N.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(N.sh.coefficients[q],Z);w++}else if(N.isSunLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let F=N.shadow,X=e.get(N);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize.copy(F.mapSize).multiply(F.getFrameExtents()),n.sunShadow[p]=X,n.sunShadowMap[p]=at;let ht=F.getViewportCount();for(let Mt=0;Mt<ht;Mt++)n.sunShadowMatrix[x+Mt]=F.getMatrix(Mt),n.sunShadowCascade[x+Mt]=F._cascadeData[Mt];x+=ht,p++}n.sun[f]=q,f++}else if(N.isDirectionalLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let F=N.shadow,X=e.get(N);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,n.directionalShadow[g]=X,n.directionalShadowMap[g]=at,n.directionalShadowMatrix[g]=N.shadow.matrix,M++}n.directional[g]=q,g++}else if(N.isSpotLight){let q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(k).multiplyScalar(Z),q.distance=J,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,n.spot[S]=q;let F=N.shadow;if(N.map&&(n.spotLightMap[v]=N.map,v++,F.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[S]=F.matrix,N.castShadow){let X=e.get(N);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,n.spotShadow[S]=X,n.spotShadowMap[S]=at,C++}S++}else if(N.isRectAreaLight){let q=t.get(N);q.color.copy(k).multiplyScalar(Z),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),n.rectArea[A]=q,A++}else if(N.isPointLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){let F=N.shadow,X=e.get(N);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,X.shadowCameraNear=F.camera.near,X.shadowCameraFar=F.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=at,n.pointShadowMatrix[m]=N.shadow.matrix,E++}n.point[m]=q,m++}else if(N.isHemisphereLight){let q=t.get(N);q.skyColor.copy(N.color).multiplyScalar(Z),q.groundColor.copy(N.groundColor).multiplyScalar(Z),n.hemi[y]=q,y++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==g||D.pointLength!==m||D.spotLength!==S||D.rectAreaLength!==A||D.hemiLength!==y||D.numSunShadows!==p||D.numDirectionalShadows!==M||D.numPointShadows!==E||D.numSpotShadows!==C||D.numSpotMaps!==v||D.numLightProbes!==w)&&(n.sun.length=f,n.directional.length=g,n.spot.length=S,n.rectArea.length=A,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,D.sunLength=f,D.directionalLength=g,D.pointLength=m,D.spotLength=S,D.rectAreaLength=A,D.hemiLength=y,D.numSunShadows=p,D.numDirectionalShadows=M,D.numPointShadows=E,D.numSpotShadows=C,D.numSpotMaps=v,D.numLightProbes=w,n.version=Vy++)}function c(l,h){let d=0,u=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let S=0,A=l.length;S<A;S++){let y=l[S];if(y.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(y.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function Bp(i){let t=new Wy(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Xy(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Bp(i),t.set(s,[o])):r>=a.length?(o=new Bp(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var qy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yy=`uniform sampler2D shadow_pass;
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
}`,Zy=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Jy=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],zp=new Kt,eo=new I,Wu=new I;function $y(i,t,e){let n=new yr,s=new ot,r=new ot,a=new Ee,o=new Fl,c=new Ol,l={},h=e.maxTextureSize,d={[us]:mn,[mn]:us,[nn]:nn},u=new pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:qy,fragmentShader:Yy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new _e;p.setAttribute("position",new de(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new mt(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Os;let m=this.type;this.render=function(E,C,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Lf&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Os);let T=i.getRenderTarget(),w=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Je),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=m!==this.type;U&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=E.length;N<k;N++){let Z=E[N],J=Z.shadow;if(J===void 0){Wt("WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let at=J.getFrameExtents();s.multiply(at),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,J.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=q,J.map===null||U===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Ar){if(Z.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Be(s.x,s.y,{format:ms,type:Xe,minFilter:fn,magFilter:fn,generateMipmaps:!1}),J.map.texture.name=Z.name+".shadowMap",J.map.depthTexture=new Si(s.x,s.y,Vn),J.map.depthTexture.name=Z.name+".shadowMapDepth",J.map.depthTexture.format=_i,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Ze,J.map.depthTexture.magFilter=Ze}else Z.isPointLight?(J.map=new Hc(s.x),J.map.depthTexture=new Cl(s.x,hi)):(J.map=new Be(s.x,s.y),J.map.depthTexture=new Si(s.x,s.y,hi)),J.map.depthTexture.name=Z.name+".shadowMap",J.map.depthTexture.format=_i,this.type===Os?(J.map.depthTexture.compareFunction=q?Bc:Oc,J.map.depthTexture.minFilter=fn,J.map.depthTexture.magFilter=fn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Ze,J.map.depthTexture.magFilter=Ze);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let F=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();Z.isPointLight!==!0&&J.updateMatrices(Z,v);for(let X=0;X<F;X++){let ht=J.getCamera(X);if(Z.isPointLight){let Mt=J.camera,ee=J.matrix,Qt=Z.distance||Mt.far;Qt!==Mt.far&&(Mt.far=Qt,Mt.updateProjectionMatrix()),eo.setFromMatrixPosition(Z.matrixWorld),Mt.position.copy(eo),Wu.copy(Mt.position),Wu.add(Zy[X]),Mt.up.copy(Jy[X]),Mt.lookAt(Wu),Mt.updateMatrixWorld(),ee.makeTranslation(-eo.x,-eo.y,-eo.z),zp.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),J._frustum.setFromProjectionMatrix(zp,Mt.coordinateSystem,Mt.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,X),i.clear();else{X===0&&(i.setRenderTarget(J.map),i.clear());let Mt=J.getViewport(X);a.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),L.viewport(a)}n=J.getFrustum(X),y(C,v,ht,Z,this.type)}J.isPointLightShadow!==!0&&this.type===Ar&&S(J,v),J.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,w,D)};function S(E,C){let v=t.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Be(s.x,s.y,{format:ms,type:Xe}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,v,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,v,f,x,null)}function A(E,C,v,T){let w=null,D=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)w=D;else if(w=v.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let L=w.uuid,U=C.uuid,N=l[L];N===void 0&&(N={},l[L]=N);let k=N[U];k===void 0&&(k=w.clone(),N[U]=k,C.addEventListener("dispose",M)),w=k}if(w.visible=C.visible,w.wireframe=C.wireframe,T===Ar?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:d[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,v.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let L=i.properties.get(w);L.light=v}return w}function y(E,C,v,T,w){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Ar)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);let U=t.update(E),N=E.material;if(Array.isArray(N)){let k=U.groups;for(let Z=0,J=k.length;Z<J;Z++){let at=k[Z],q=N[at.materialIndex];if(q&&q.visible){let F=A(E,q,T,w);E.onBeforeShadow(i,E,C,v,U,F,at),i.renderBufferDirect(v,null,U,F,E,at),E.onAfterShadow(i,E,C,v,U,F,at)}}}else if(N.visible){let k=A(E,N,T,w);E.onBeforeShadow(i,E,C,v,U,k,null),i.renderBufferDirect(v,null,U,k,E,null),E.onAfterShadow(i,E,C,v,U,k,null)}}let L=E.children;for(let U=0,N=L.length;U<N;U++)y(L[U],C,v,T,w)}function M(E){E.target.removeEventListener("dispose",M);for(let v in l){let T=l[v],w=E.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}function Ky(i,t){function e(){let z=!1,bt=new Ee,nt=null,Et=new Ee(0,0,0,0);return{setMask:function(Ct){nt!==Ct&&!z&&(i.colorMask(Ct,Ct,Ct,Ct),nt=Ct)},setLocked:function(Ct){z=Ct},setClear:function(Ct,lt,Vt,Ft,Ne){Ne===!0&&(Ct*=Ft,lt*=Ft,Vt*=Ft),bt.set(Ct,lt,Vt,Ft),Et.equals(bt)===!1&&(i.clearColor(Ct,lt,Vt,Ft),Et.copy(bt))},reset:function(){z=!1,nt=null,Et.set(-1,0,0,0)}}}function n(){let z=!1,bt=!1,nt=null,Et=null,Ct=null;return{setReversed:function(lt){if(bt!==lt){let Vt=t.get("EXT_clip_control");lt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),bt=lt;let Ft=Ct;Ct=null,this.setClear(Ft)}},getReversed:function(){return bt},setTest:function(lt){lt?et(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(lt){nt!==lt&&!z&&(i.depthMask(lt),nt=lt)},setFunc:function(lt){if(bt&&(lt=hp[lt]),Et!==lt){switch(lt){case gl:i.depthFunc(i.NEVER);break;case xl:i.depthFunc(i.ALWAYS);break;case vl:i.depthFunc(i.LESS);break;case dr:i.depthFunc(i.LEQUAL);break;case _l:i.depthFunc(i.EQUAL);break;case yl:i.depthFunc(i.GEQUAL);break;case Ml:i.depthFunc(i.GREATER);break;case Sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=lt}},setLocked:function(lt){z=lt},setClear:function(lt){Ct!==lt&&(Ct=lt,bt&&(lt=1-lt),i.clearDepth(lt))},reset:function(){z=!1,nt=null,Et=null,Ct=null,bt=!1}}}function s(){let z=!1,bt=null,nt=null,Et=null,Ct=null,lt=null,Vt=null,Ft=null,Ne=null;return{setTest:function(Me){z||(Me?et(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(Me){bt!==Me&&!z&&(i.stencilMask(Me),bt=Me)},setFunc:function(Me,Qn,pi){(nt!==Me||Et!==Qn||Ct!==pi)&&(i.stencilFunc(Me,Qn,pi),nt=Me,Et=Qn,Ct=pi)},setOp:function(Me,Qn,pi){(lt!==Me||Vt!==Qn||Ft!==pi)&&(i.stencilOp(Me,Qn,pi),lt=Me,Vt=Qn,Ft=pi)},setLocked:function(Me){z=Me},setClear:function(Me){Ne!==Me&&(i.clearStencil(Me),Ne=Me)},reset:function(){z=!1,bt=null,nt=null,Et=null,Ct=null,lt=null,Vt=null,Ft=null,Ne=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,S=null,A=null,y=null,M=null,E=null,C=null,v=new pt(0,0,0),T=0,w=!1,D=null,L=null,U=null,N=null,k=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,at=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(q)[1]),J=at>=1):q.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),J=at>=2);let F=null,X={},ht=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),ee=new Ee().fromArray(ht),Qt=new Ee().fromArray(Mt);function le(z,bt,nt,Et){let Ct=new Uint8Array(4),lt=i.createTexture();i.bindTexture(z,lt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<nt;Vt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(bt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return lt}let K={};K[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(dr),dt(!1),gt(_u),et(i.CULL_FACE),ct(Je);function et(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function xt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function zt(z,bt){return u[z]!==bt?(i.bindFramebuffer(z,bt),u[z]=bt,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=bt),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function Rt(z,bt){let nt=p,Et=!1;if(z){nt=f.get(bt),nt===void 0&&(nt=[],f.set(bt,nt));let Ct=z.textures;if(nt.length!==Ct.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Vt=Ct.length;lt<Vt;lt++)nt[lt]=i.COLOR_ATTACHMENT0+lt;nt.length=Ct.length,Et=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,Et=!0);Et&&i.drawBuffers(nt)}function Xt(z){return x!==z?(i.useProgram(z),x=z,!0):!1}let ge={[Kn]:i.FUNC_ADD,[Nf]:i.FUNC_SUBTRACT,[Uf]:i.FUNC_REVERSE_SUBTRACT};ge[Ff]=i.MIN,ge[Of]=i.MAX;let it={[Bs]:i.ZERO,[Bf]:i.ONE,[zf]:i.SRC_COLOR,[Su]:i.SRC_ALPHA,[Gf]:i.SRC_ALPHA_SATURATE,[Oa]:i.DST_COLOR,[Fa]:i.DST_ALPHA,[kf]:i.ONE_MINUS_SRC_COLOR,[bu]:i.ONE_MINUS_SRC_ALPHA,[Vf]:i.ONE_MINUS_DST_COLOR,[Hf]:i.ONE_MINUS_DST_ALPHA,[Wf]:i.CONSTANT_COLOR,[Xf]:i.ONE_MINUS_CONSTANT_COLOR,[qf]:i.CONSTANT_ALPHA,[Yf]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(z,bt,nt,Et,Ct,lt,Vt,Ft,Ne,Me){if(z===Je){g===!0&&(xt(i.BLEND),g=!1);return}if(g===!1&&(et(i.BLEND),g=!0),z!==$l){if(z!==m||Me!==w){if((S!==Kn||M!==Kn)&&(i.blendEquation(i.FUNC_ADD),S=Kn,M=Kn),Me)switch(z){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sn:i.blendFunc(i.ONE,i.ONE);break;case yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Yt("WebGLState: Invalid blending: ",z);break}else switch(z){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yu:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mu:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",z);break}A=null,y=null,E=null,C=null,v.set(0,0,0),T=0,m=z,w=Me}return}Ct=Ct||bt,lt=lt||nt,Vt=Vt||Et,(bt!==S||Ct!==M)&&(i.blendEquationSeparate(ge[bt],ge[Ct]),S=bt,M=Ct),(nt!==A||Et!==y||lt!==E||Vt!==C)&&(i.blendFuncSeparate(it[nt],it[Et],it[lt],it[Vt]),A=nt,y=Et,E=lt,C=Vt),(Ft.equals(v)===!1||Ne!==T)&&(i.blendColor(Ft.r,Ft.g,Ft.b,Ne),v.copy(Ft),T=Ne),m=z,w=!1}function ut(z,bt){z.side===nn?xt(i.CULL_FACE):et(i.CULL_FACE);let nt=z.side===mn;bt&&(nt=!nt),dt(nt),z.blending===bi&&z.transparent===!1?ct(Je):ct(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let Et=z.stencilWrite;o.setTest(Et),Et&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),kt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(z){D!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),D=z)}function gt(z){z!==If?(et(i.CULL_FACE),z!==L&&(z===_u?i.cullFace(i.BACK):z===Df?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),L=z}function Gt(z){z!==U&&(J&&i.lineWidth(z),U=z)}function kt(z,bt,nt){z?(et(i.POLYGON_OFFSET_FILL),(N!==bt||k!==nt)&&(N=bt,k=nt,a.getReversed()&&(bt=-bt),i.polygonOffset(bt,nt))):xt(i.POLYGON_OFFSET_FILL)}function qt(z){z?et(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function Jt(z){z===void 0&&(z=i.TEXTURE0+Z-1),F!==z&&(i.activeTexture(z),F=z)}function O(z,bt,nt){nt===void 0&&(F===null?nt=i.TEXTURE0+Z-1:nt=F);let Et=X[nt];Et===void 0&&(Et={type:void 0,texture:void 0},X[nt]=Et),(Et.type!==z||Et.texture!==bt)&&(F!==nt&&(i.activeTexture(nt),F=nt),i.bindTexture(z,bt||K[z]),Et.type=z,Et.texture=bt)}function me(){let z=X[F];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function re(){try{i.compressedTexImage2D(...arguments)}catch(z){Yt("WebGLState:",z)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(z){Yt("WebGLState:",z)}}function _(){try{i.texSubImage2D(...arguments)}catch(z){Yt("WebGLState:",z)}}function H(){try{i.texSubImage3D(...arguments)}catch(z){Yt("WebGLState:",z)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(z){Yt("WebGLState:",z)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(z){Yt("WebGLState:",z)}}function ft(){try{i.texStorage2D(...arguments)}catch(z){Yt("WebGLState:",z)}}function vt(){try{i.texStorage3D(...arguments)}catch(z){Yt("WebGLState:",z)}}function tt(){try{i.texImage2D(...arguments)}catch(z){Yt("WebGLState:",z)}}function st(){try{i.texImage3D(...arguments)}catch(z){Yt("WebGLState:",z)}}function St(z){return d[z]!==void 0?d[z]:i.getParameter(z)}function Ot(z,bt){d[z]!==bt&&(i.pixelStorei(z,bt),d[z]=bt)}function yt(z){ee.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ee.copy(z))}function _t(z){Qt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Qt.copy(z))}function Dt(z,bt){let nt=l.get(bt);nt===void 0&&(nt=new WeakMap,l.set(bt,nt));let Et=nt.get(z);Et===void 0&&(Et=i.getUniformBlockIndex(bt,z.name),nt.set(z,Et))}function Ht(z,bt){let Et=l.get(bt).get(z);c.get(bt)!==Et&&(i.uniformBlockBinding(bt,Et,z.__bindingPointIndex),c.set(bt,Et))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},F=null,X={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,S=null,A=null,y=null,M=null,E=null,C=null,v=new pt(0,0,0),T=0,w=!1,D=null,L=null,U=null,N=null,k=null,ee.set(0,0,i.canvas.width,i.canvas.height),Qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:xt,bindFramebuffer:zt,drawBuffers:Rt,useProgram:Xt,setBlending:ct,setMaterial:ut,setFlipSided:dt,setCullFace:gt,setLineWidth:Gt,setPolygonOffset:kt,setScissorTest:qt,activeTexture:Jt,bindTexture:O,unbindTexture:me,compressedTexImage2D:re,compressedTexImage3D:P,texImage2D:tt,texImage3D:st,pixelStorei:Ot,getParameter:St,updateUBOMapping:Dt,uniformBlockBinding:Ht,texStorage2D:ft,texStorage3D:vt,texSubImage2D:_,texSubImage3D:H,compressedTexSubImage2D:V,compressedTexSubImage3D:j,scissor:yt,viewport:_t,reset:$t}}function jy(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,_){return p?new OffscreenCanvas(P,_):sa("canvas")}function g(P,_,H){let V=1,j=re(P);if((j.width>H||j.height>H)&&(V=H/Math.max(j.width,j.height)),V<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ft=Math.floor(V*j.width),vt=Math.floor(V*j.height);u===void 0&&(u=x(ft,vt));let tt=_?x(ft,vt):u;return tt.width=ft,tt.height=vt,tt.getContext("2d").drawImage(P,0,0,ft,vt),Wt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ft+"x"+vt+")."),tt}else return"data"in P&&Wt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),P;return P}function m(P){return P.generateMipmaps}function S(P){i.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,_,H,V,j,ft=!1){if(P!==null){if(i[P]!==void 0)return i[P];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let vt;V&&(vt=t.get("EXT_texture_norm16"),vt||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=_;if(_===i.RED&&(H===i.FLOAT&&(tt=i.R32F),H===i.HALF_FLOAT&&(tt=i.R16F),H===i.UNSIGNED_BYTE&&(tt=i.R8),H===i.UNSIGNED_SHORT&&vt&&(tt=vt.R16_EXT),H===i.SHORT&&vt&&(tt=vt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.R8UI),H===i.UNSIGNED_SHORT&&(tt=i.R16UI),H===i.UNSIGNED_INT&&(tt=i.R32UI),H===i.BYTE&&(tt=i.R8I),H===i.SHORT&&(tt=i.R16I),H===i.INT&&(tt=i.R32I)),_===i.RG&&(H===i.FLOAT&&(tt=i.RG32F),H===i.HALF_FLOAT&&(tt=i.RG16F),H===i.UNSIGNED_BYTE&&(tt=i.RG8),H===i.UNSIGNED_SHORT&&vt&&(tt=vt.RG16_EXT),H===i.SHORT&&vt&&(tt=vt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RG8UI),H===i.UNSIGNED_SHORT&&(tt=i.RG16UI),H===i.UNSIGNED_INT&&(tt=i.RG32UI),H===i.BYTE&&(tt=i.RG8I),H===i.SHORT&&(tt=i.RG16I),H===i.INT&&(tt=i.RG32I)),_===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),H===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),H===i.UNSIGNED_INT&&(tt=i.RGB32UI),H===i.BYTE&&(tt=i.RGB8I),H===i.SHORT&&(tt=i.RGB16I),H===i.INT&&(tt=i.RGB32I)),_===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),H===i.UNSIGNED_INT&&(tt=i.RGBA32UI),H===i.BYTE&&(tt=i.RGBA8I),H===i.SHORT&&(tt=i.RGBA16I),H===i.INT&&(tt=i.RGBA32I)),_===i.RGB&&(H===i.UNSIGNED_SHORT&&vt&&(tt=vt.RGB16_EXT),H===i.SHORT&&vt&&(tt=vt.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),_===i.RGBA){let st=ft?ia:ce.getTransfer(j);H===i.FLOAT&&(tt=i.RGBA32F),H===i.HALF_FLOAT&&(tt=i.RGBA16F),H===i.UNSIGNED_BYTE&&(tt=st===ve?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&vt&&(tt=vt.RGBA16_EXT),H===i.SHORT&&vt&&(tt=vt.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function M(P,_){let H;return P?_===null||_===hi||_===ps?H=i.DEPTH24_STENCIL8:_===Vn?H=i.DEPTH32F_STENCIL8:_===Rr&&(H=i.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===hi||_===ps?H=i.DEPTH_COMPONENT24:_===Vn?H=i.DEPTH_COMPONENT32F:_===Rr&&(H=i.DEPTH_COMPONENT16),H}function E(P,_){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ze&&P.minFilter!==fn?Math.log2(Math.max(_.width,_.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?_.mipmaps.length:1}function C(P){let _=P.target;_.removeEventListener("dispose",C),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function v(P){let _=P.target;_.removeEventListener("dispose",v),D(_)}function T(P){let _=n.get(P);if(_.__webglInit===void 0)return;let H=P.source,V=f.get(H);if(V){let j=V[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(P),Object.keys(V).length===0&&f.delete(H)}n.remove(P)}function w(P){let _=n.get(P);i.deleteTexture(_.__webglTexture);let H=P.source,V=f.get(H);delete V[_.__cacheKey],a.memory.textures--}function D(P){let _=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let j=0;j<_.__webglFramebuffer[V].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[V][j]);else i.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)i.deleteFramebuffer(_.__webglFramebuffer[V]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let H=P.textures;for(let V=0,j=H.length;V<j;V++){let ft=n.get(H[V]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),a.memory.textures--),n.remove(H[V])}n.remove(P)}let L=0;function U(){L=0}function N(){return L}function k(P){L=P}function Z(){let P=L;return P>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,P}function J(P){let _=[];return _.push(P.wrapS),_.push(P.wrapT),_.push(P.wrapR||0),_.push(P.magFilter),_.push(P.minFilter),_.push(P.anisotropy),_.push(P.internalFormat),_.push(P.format),_.push(P.type),_.push(P.generateMipmaps),_.push(P.premultiplyAlpha),_.push(P.flipY),_.push(P.unpackAlignment),_.push(P.colorSpace),_.join()}function at(P,_){let H=n.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){let V=P.image;if(V===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(H,P,_);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+_)}function q(P,_){let H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){xt(H,P,_);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+_)}function F(P,_){let H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){xt(H,P,_);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+_)}function X(P,_){let H=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&H.__version!==P.version){zt(H,P,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+_)}let ht={[Pn]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[bl]:i.MIRRORED_REPEAT},Mt={[Ze]:i.NEAREST,[Kf]:i.NEAREST_MIPMAP_NEAREST,[Xa]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[Ql]:i.LINEAR_MIPMAP_NEAREST,[fs]:i.LINEAR_MIPMAP_LINEAR},ee={[ep]:i.NEVER,[ap]:i.ALWAYS,[np]:i.LESS,[Oc]:i.LEQUAL,[ip]:i.EQUAL,[Bc]:i.GEQUAL,[sp]:i.GREATER,[rp]:i.NOTEQUAL};function Qt(P,_){if(_.type===Vn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===fn||_.magFilter===Ql||_.magFilter===Xa||_.magFilter===fs||_.minFilter===fn||_.minFilter===Ql||_.minFilter===Xa||_.minFilter===fs)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ht[_.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ht[_.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ht[_.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Mt[_.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Mt[_.minFilter]),_.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ee[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ze||_.minFilter!==Xa&&_.minFilter!==fs||_.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function le(P,_){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,_.addEventListener("dispose",C));let V=_.source,j=f.get(V);j===void 0&&(j={},f.set(V,j));let ft=J(_);if(ft!==P.__cacheKey){j[ft]===void 0&&(j[ft]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),j[ft].usedTimes++;let vt=j[P.__cacheKey];vt!==void 0&&(j[P.__cacheKey].usedTimes--,vt.usedTimes===0&&w(_)),P.__cacheKey=ft,P.__webglTexture=j[ft].texture}return H}function K(P,_,H){return Math.floor(Math.floor(P/H)/_)}function et(P,_,H,V){let ft=P.updateRanges;if(ft.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,H,V,_.data);else{ft.sort((Ot,yt)=>Ot.start-yt.start);let vt=0;for(let Ot=1;Ot<ft.length;Ot++){let yt=ft[vt],_t=ft[Ot],Dt=yt.start+yt.count,Ht=K(_t.start,_.width,4),$t=K(yt.start,_.width,4);_t.start<=Dt+1&&Ht===$t&&K(_t.start+_t.count-1,_.width,4)===Ht?yt.count=Math.max(yt.count,_t.start+_t.count-yt.start):(++vt,ft[vt]=_t)}ft.length=vt+1;let tt=e.getParameter(i.UNPACK_ROW_LENGTH),st=e.getParameter(i.UNPACK_SKIP_PIXELS),St=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ot=0,yt=ft.length;Ot<yt;Ot++){let _t=ft[Ot],Dt=Math.floor(_t.start/4),Ht=Math.ceil(_t.count/4),$t=Dt%_.width,z=Math.floor(Dt/_.width),bt=Ht,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,$t,z,bt,nt,H,V,_.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,tt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,st),e.pixelStorei(i.UNPACK_SKIP_ROWS,St)}}function xt(P,_,H){let V=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=i.TEXTURE_3D);let j=le(P,_),ft=_.source;e.bindTexture(V,P.__webglTexture,i.TEXTURE0+H);let vt=n.get(ft);if(ft.version!==vt.__version||j===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let nt=ce.getPrimaries(ce.workingColorSpace),Et=_.colorSpace===Xi?null:ce.getPrimaries(_.colorSpace),Ct=_.colorSpace===Xi||nt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let st=g(_.image,!1,s.maxTextureSize);st=me(_,st);let St=r.convert(_.format,_.colorSpace),Ot=r.convert(_.type),yt=y(_.internalFormat,St,Ot,_.normalized,_.colorSpace,_.isVideoTexture);Qt(V,_);let _t,Dt=_.mipmaps,Ht=_.isVideoTexture!==!0,$t=vt.__version===void 0||j===!0,z=ft.dataReady,bt=E(_,st);if(_.isDepthTexture)yt=M(_.format===Ei,_.type),$t&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,yt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,yt,st.width,st.height,0,St,Ot,null));else if(_.isDataTexture)if(Dt.length>0){Ht&&$t&&e.texStorage2D(i.TEXTURE_2D,bt,yt,Dt[0].width,Dt[0].height);for(let nt=0,Et=Dt.length;nt<Et;nt++)_t=Dt[nt],Ht?z&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,_t.width,_t.height,St,Ot,_t.data):e.texImage2D(i.TEXTURE_2D,nt,yt,_t.width,_t.height,0,St,Ot,_t.data);_.generateMipmaps=!1}else Ht?($t&&e.texStorage2D(i.TEXTURE_2D,bt,yt,st.width,st.height),z&&et(_,st,St,Ot)):e.texImage2D(i.TEXTURE_2D,0,yt,st.width,st.height,0,St,Ot,st.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ht&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,yt,Dt[0].width,Dt[0].height,st.depth);for(let nt=0,Et=Dt.length;nt<Et;nt++)if(_t=Dt[nt],_.format!==Tn)if(St!==null)if(Ht){if(z)if(_.layerUpdates.size>0){let Ct=Bu(_t.width,_t.height,_.format,_.type);for(let lt of _.layerUpdates){let Vt=_t.data.subarray(lt*Ct/_t.data.BYTES_PER_ELEMENT,(lt+1)*Ct/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,lt,_t.width,_t.height,1,St,Vt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,_t.width,_t.height,st.depth,St,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,yt,_t.width,_t.height,st.depth,0,_t.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,_t.width,_t.height,st.depth,St,Ot,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,yt,_t.width,_t.height,st.depth,0,St,Ot,_t.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ht&&$t&&e.texStorage2D(i.TEXTURE_2D,bt,yt,Dt[0].width,Dt[0].height);for(let nt=0,Et=Dt.length;nt<Et;nt++)_t=Dt[nt],_.format!==Tn?St!==null?Ht?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,_t.width,_t.height,St,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,yt,_t.width,_t.height,0,_t.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?z&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,_t.width,_t.height,St,Ot,_t.data):e.texImage2D(i.TEXTURE_2D,nt,yt,_t.width,_t.height,0,St,Ot,_t.data)}else if(_.isDataArrayTexture)if(Ht){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,yt,st.width,st.height,st.depth),z)if(_.layerUpdates.size>0){let nt=Bu(st.width,st.height,_.format,_.type);for(let Et of _.layerUpdates){let Ct=st.data.subarray(Et*nt/st.data.BYTES_PER_ELEMENT,(Et+1)*nt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Et,st.width,st.height,1,St,Ot,Ct)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,St,Ot,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,st.width,st.height,st.depth,0,St,Ot,st.data);else if(_.isData3DTexture)Ht?($t&&e.texStorage3D(i.TEXTURE_3D,bt,yt,st.width,st.height,st.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,St,Ot,st.data)):e.texImage3D(i.TEXTURE_3D,0,yt,st.width,st.height,st.depth,0,St,Ot,st.data);else if(_.isFramebufferTexture){if($t)if(Ht)e.texStorage2D(i.TEXTURE_2D,bt,yt,st.width,st.height);else{let nt=st.width,Et=st.height;for(let Ct=0;Ct<bt;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,yt,nt,Et,0,St,Ot,null),nt>>=1,Et>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),st.parentNode!==nt){nt.appendChild(st),d.add(_),nt.onpaint=Et=>{let Ct=Et.changedElements;for(let lt of d)Ct.includes(lt.image)&&(lt.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,st);else{let Ct=i.RGBA,lt=i.RGBA,Vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ct,lt,Vt,st)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Ht&&$t){let nt=re(Dt[0]);e.texStorage2D(i.TEXTURE_2D,bt,yt,nt.width,nt.height)}for(let nt=0,Et=Dt.length;nt<Et;nt++)_t=Dt[nt],Ht?z&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,St,Ot,_t):e.texImage2D(i.TEXTURE_2D,nt,yt,St,Ot,_t);_.generateMipmaps=!1}else if(Ht){if($t){let nt=re(st);e.texStorage2D(i.TEXTURE_2D,bt,yt,nt.width,nt.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Ot,st)}else e.texImage2D(i.TEXTURE_2D,0,yt,St,Ot,st);m(_)&&S(V),vt.__version=ft.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function zt(P,_,H){if(_.image.length!==6)return;let V=le(P,_),j=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+H);let ft=n.get(j);if(j.version!==ft.__version||V===!0){e.activeTexture(i.TEXTURE0+H);let vt=ce.getPrimaries(ce.workingColorSpace),tt=_.colorSpace===Xi?null:ce.getPrimaries(_.colorSpace),st=_.colorSpace===Xi||vt===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let St=_.isCompressedTexture||_.image[0].isCompressedTexture,Ot=_.image[0]&&_.image[0].isDataTexture,yt=[];for(let lt=0;lt<6;lt++)!St&&!Ot?yt[lt]=g(_.image[lt],!0,s.maxCubemapSize):yt[lt]=Ot?_.image[lt].image:_.image[lt],yt[lt]=me(_,yt[lt]);let _t=yt[0],Dt=r.convert(_.format,_.colorSpace),Ht=r.convert(_.type),$t=y(_.internalFormat,Dt,Ht,_.normalized,_.colorSpace),z=_.isVideoTexture!==!0,bt=ft.__version===void 0||V===!0,nt=j.dataReady,Et=E(_,_t);Qt(i.TEXTURE_CUBE_MAP,_);let Ct;if(St){z&&bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,$t,_t.width,_t.height);for(let lt=0;lt<6;lt++){Ct=yt[lt].mipmaps;for(let Vt=0;Vt<Ct.length;Vt++){let Ft=Ct[Vt];_.format!==Tn?Dt!==null?z?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,0,0,Ft.width,Ft.height,Dt,Ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,$t,Ft.width,Ft.height,0,Ft.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,0,0,Ft.width,Ft.height,Dt,Ht,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,$t,Ft.width,Ft.height,0,Dt,Ht,Ft.data)}}}else{if(Ct=_.mipmaps,z&&bt){Ct.length>0&&Et++;let lt=re(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,$t,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(Ot){z?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,yt[lt].width,yt[lt].height,Dt,Ht,yt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,$t,yt[lt].width,yt[lt].height,0,Dt,Ht,yt[lt].data);for(let Vt=0;Vt<Ct.length;Vt++){let Ne=Ct[Vt].image[lt].image;z?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,0,0,Ne.width,Ne.height,Dt,Ht,Ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,$t,Ne.width,Ne.height,0,Dt,Ht,Ne.data)}}else{z?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Dt,Ht,yt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,$t,Dt,Ht,yt[lt]);for(let Vt=0;Vt<Ct.length;Vt++){let Ft=Ct[Vt];z?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,0,0,Dt,Ht,Ft.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,$t,Dt,Ht,Ft.image[lt])}}}m(_)&&S(i.TEXTURE_CUBE_MAP),ft.__version=j.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function Rt(P,_,H,V,j,ft){let vt=r.convert(H.format,H.colorSpace),tt=r.convert(H.type),st=y(H.internalFormat,vt,tt,H.normalized,H.colorSpace),St=n.get(_),Ot=n.get(H);if(Ot.__renderTarget=_,!St.__hasExternalTextures){let yt=Math.max(1,_.width>>ft),_t=Math.max(1,_.height>>ft);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,ft,st,yt,_t,_.depth,0,vt,tt,null):e.texImage2D(j,ft,st,yt,_t,0,vt,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Jt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,j,Ot.__webglTexture,0,qt(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,j,Ot.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(P,_,H){if(i.bindRenderbuffer(i.RENDERBUFFER,P),_.depthBuffer){let V=_.depthTexture,j=V&&V.isDepthTexture?V.type:null,ft=M(_.stencilBuffer,j),vt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Jt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(_),ft,_.width,_.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(_),ft,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ft,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,P)}else{let V=_.textures;for(let j=0;j<V.length;j++){let ft=V[j],vt=r.convert(ft.format,ft.colorSpace),tt=r.convert(ft.type),st=y(ft.internalFormat,vt,tt,ft.normalized,ft.colorSpace);Jt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(_),st,_.width,_.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(_),st,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,st,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(P,_,H){let V=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(_.depthTexture);if(j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V){if(j.__webglInit===void 0&&(j.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,_.depthTexture);let St=r.convert(_.depthTexture.format),Ot=r.convert(_.depthTexture.type),yt;_.depthTexture.format===_i?yt=i.DEPTH_COMPONENT24:_.depthTexture.format===Ei&&(yt=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,yt,_.width,_.height,0,St,Ot,null)}}else at(_.depthTexture,0);let ft=j.__webglTexture,vt=qt(_),tt=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,st=_.depthTexture.format===Ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===_i)Jt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,tt,ft,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,st,tt,ft,0);else if(_.depthTexture.format===Ei)Jt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,tt,ft,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,st,tt,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(P){let _=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==P.depthTexture){let V=P.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){let j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",j)};V.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=V}if(P.depthTexture&&!_.__autoAllocateDepthBuffer)if(H)for(let V=0;V<6;V++)ge(_.__webglFramebuffer[V],P,V);else{let V=P.texture.mipmaps;V&&V.length>0?ge(_.__webglFramebuffer[0],P,0):ge(_.__webglFramebuffer,P,0)}else if(H){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=i.createRenderbuffer(),Xt(_.__webglDepthbuffer[V],P,!1);else{let j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=_.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ft)}}else{let V=P.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Xt(_.__webglDepthbuffer,P,!1);else{let j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ft)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(P,_,H){let V=n.get(P);_!==void 0&&Rt(V.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&it(P)}function ut(P){let _=P.texture,H=n.get(P),V=n.get(_);P.addEventListener("dispose",v);let j=P.textures,ft=P.isWebGLCubeRenderTarget===!0,vt=j.length>1;if(vt||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=_.version,a.memory.textures++),ft){H.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[tt]=[];for(let st=0;st<_.mipmaps.length;st++)H.__webglFramebuffer[tt][st]=i.createFramebuffer()}else H.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let tt=0;tt<_.mipmaps.length;tt++)H.__webglFramebuffer[tt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(vt)for(let tt=0,st=j.length;tt<st;tt++){let St=n.get(j[tt]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Jt(P)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let tt=0;tt<j.length;tt++){let st=j[tt];H.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[tt]);let St=r.convert(st.format,st.colorSpace),Ot=r.convert(st.type),yt=y(st.internalFormat,St,Ot,st.normalized,st.colorSpace,P.isXRRenderTarget===!0),_t=qt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,yt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,H.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Xt(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,_);for(let tt=0;tt<6;tt++)if(_.mipmaps&&_.mipmaps.length>0)for(let st=0;st<_.mipmaps.length;st++)Rt(H.__webglFramebuffer[tt][st],P,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,st);else Rt(H.__webglFramebuffer[tt],P,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);m(_)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let tt=0,st=j.length;tt<st;tt++){let St=j[tt],Ot=n.get(St),yt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(yt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,Ot.__webglTexture),Qt(yt,St),Rt(H.__webglFramebuffer,P,St,i.COLOR_ATTACHMENT0+tt,yt,0),m(St)&&S(yt)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(tt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,V.__webglTexture),Qt(tt,_),_.mipmaps&&_.mipmaps.length>0)for(let st=0;st<_.mipmaps.length;st++)Rt(H.__webglFramebuffer[st],P,_,i.COLOR_ATTACHMENT0,tt,st);else Rt(H.__webglFramebuffer,P,_,i.COLOR_ATTACHMENT0,tt,0);m(_)&&S(tt),e.unbindTexture()}P.depthBuffer&&it(P)}function dt(P){let _=P.textures;for(let H=0,V=_.length;H<V;H++){let j=_[H];if(m(j)){let ft=A(P),vt=n.get(j).__webglTexture;e.bindTexture(ft,vt),S(ft),e.unbindTexture()}}}let gt=[],Gt=[];function kt(P){if(P.samples>0){if(Jt(P)===!1){let _=P.textures,H=P.width,V=P.height,j=i.COLOR_BUFFER_BIT,ft=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(P),tt=_.length>1;if(tt)for(let St=0;St<_.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);let st=P.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let St=0;St<_.length;St++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[St]);let Ot=n.get(_[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ot,0)}i.blitFramebuffer(0,0,H,V,0,0,H,V,j,i.NEAREST),c===!0&&(gt.length=0,Gt.length=0,gt.push(i.COLOR_ATTACHMENT0+St),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(gt.push(ft),Gt.push(ft),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let St=0;St<_.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,vt.__webglColorRenderbuffer[St]);let Ot=n.get(_[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let _=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function qt(P){return Math.min(s.maxSamples,P.samples)}function Jt(P){let _=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function O(P){let _=a.render.frame;h.get(P)!==_&&(h.set(P,_),P.update())}function me(P,_){let H=P.colorSpace,V=P.format,j=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==na&&H!==Xi&&(ce.getTransfer(H)===ve?(V!==Tn||j!==_n)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",H)),_}function re(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=U,this.getTextureUnits=N,this.setTextureUnits=k,this.setTexture2D=at,this.setTexture2DArray=q,this.setTexture3D=F,this.setTextureCube=X,this.rebindTextures=ct,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Qy(i,t){function e(n,s=Xi){let r,a=ce.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ru)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wu)return i.BYTE;if(n===Au)return i.SHORT;if(n===Rr)return i.UNSIGNED_SHORT;if(n===tc)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Xe)return i.HALF_FLOAT;if(n===Pu)return i.ALPHA;if(n===Iu)return i.RGB;if(n===Tn)return i.RGBA;if(n===_i)return i.DEPTH_COMPONENT;if(n===Ei)return i.DEPTH_STENCIL;if(n===ic)return i.RED;if(n===sc)return i.RED_INTEGER;if(n===ms)return i.RG;if(n===rc)return i.RG_INTEGER;if(n===ac)return i.RGBA_INTEGER;if(n===qa||n===Ya||n===Za||n===Ja)if(a===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oc||n===lc||n===cc||n===hc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uc||n===dc||n===fc||n===pc||n===mc||n===$a||n===gc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uc||n===dc)return a===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===pc)return r.COMPRESSED_R11_EAC;if(n===mc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$a)return r.COMPRESSED_RG11_EAC;if(n===gc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xc||n===vc||n===_c||n===yc||n===Mc||n===Sc||n===bc||n===Ec||n===Tc||n===wc||n===Ac||n===Rc||n===Cc||n===Pc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_c)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ec)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ac)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ic||n===Dc||n===Lc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ic)return a===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nc||n===Uc||n===Ka||n===Fc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var tM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eM=`
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

}`,ju=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new xa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new pe({vertexShader:tM,fragmentShader:eM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mt(new pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qu=class extends yi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new ju,m={},S=e.getContextAttributes(),A=null,y=null,M=[],E=[],C=new ot,v=null,T=null,w=new un;w.viewport=new Ee;let D=new un;D.viewport=new Ee;let L=[w,D],U=new Jl,N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let et=M[K];return et===void 0&&(et=new gr,M[K]=et),et.getTargetRaySpace()},this.getControllerGrip=function(K){let et=M[K];return et===void 0&&(et=new gr,M[K]=et),et.getGripSpace()},this.getHand=function(K){let et=M[K];return et===void 0&&(et=new gr,M[K]=et),et.getHandSpace()};function Z(K){let et=E.indexOf(K.inputSource);if(et===-1)return;let xt=M[et];xt!==void 0&&(xt.update(K.inputSource,K.frame,l||a),xt.dispatchEvent({type:K.type,data:K.inputSource}))}function J(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",at);for(let K=0;K<M.length;K++){let et=E[K];et!==null&&(E[K]=null,M[K].disconnect(et))}N=null,k=null,g.reset();for(let K in m)delete m[K];if(t.setRenderTarget(A),f=null,u=null,d=null,s=null,y=null,le.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(C.width,C.height,!1),T!==null){let K=T.camera;K.fov=T.fov,K.zoom=T.zoom,K.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",J),s.addEventListener("inputsourceschange",at),S.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,zt=null,Rt=null;S.depth&&(Rt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=S.stencil?Ei:_i,zt=S.stencil?ps:hi);let Xt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Be(u.textureWidth,u.textureHeight,{format:Tn,type:_n,depthTexture:new Si(u.textureWidth,u.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let xt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Be(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function at(K){for(let et=0;et<K.removed.length;et++){let xt=K.removed[et],zt=E.indexOf(xt);zt>=0&&(E[zt]=null,M[zt].disconnect(xt))}for(let et=0;et<K.added.length;et++){let xt=K.added[et],zt=E.indexOf(xt);if(zt===-1){for(let Xt=0;Xt<M.length;Xt++)if(Xt>=E.length){E.push(xt),zt=Xt;break}else if(E[Xt]===null){E[Xt]=xt,zt=Xt;break}if(zt===-1)break}let Rt=M[zt];Rt&&Rt.connect(xt)}}let q=new I,F=new I;function X(K,et,xt){q.setFromMatrixPosition(et.matrixWorld),F.setFromMatrixPosition(xt.matrixWorld);let zt=q.distanceTo(F),Rt=et.projectionMatrix.elements,Xt=xt.projectionMatrix.elements,ge=Rt[14]/(Rt[10]-1),it=Rt[14]/(Rt[10]+1),ct=(Rt[9]+1)/Rt[5],ut=(Rt[9]-1)/Rt[5],dt=(Rt[8]-1)/Rt[0],gt=(Xt[8]+1)/Xt[0],Gt=ge*dt,kt=ge*gt,qt=zt/(-dt+gt),Jt=qt*-dt;if(et.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Jt),K.translateZ(qt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Rt[10]===-1)K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let O=ge+qt,me=it+qt,re=Gt-Jt,P=kt+(zt-Jt),_=ct*it/me*O,H=ut*it/me*O;K.projectionMatrix.makePerspective(re,P,_,H,O,me),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ht(K,et){et===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(et.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let et=K.near,xt=K.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(xt=g.depthFar)),U.near=D.near=w.near=et,U.far=D.far=w.far=xt,(N!==U.near||k!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),N=U.near,k=U.far),U.layers.mask=K.layers.mask|6,w.layers.mask=U.layers.mask&-5,D.layers.mask=U.layers.mask&-3;let zt=K.parent,Rt=U.cameras;ht(U,zt);for(let Xt=0;Xt<Rt.length;Xt++)ht(Rt[Xt],zt);Rt.length===2?X(U,w,D):U.projectionMatrix.copy(w.projectionMatrix),T===null&&K.isPerspectiveCamera&&(T={camera:K,fov:K.fov,zoom:K.zoom}),Mt(K,U,zt)};function Mt(K,et,xt){xt===null?K.matrix.copy(et.matrixWorld):(K.matrix.copy(xt.matrixWorld),K.matrix.invert(),K.matrix.multiply(et.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=aa*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(K){return m[K]};let ee=null;function Qt(K,et){if(h=et.getViewerPose(l||a),p=et,h!==null){let xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let zt=!1;xt.length!==U.cameras.length&&(U.cameras.length=0,zt=!0);for(let it=0;it<xt.length;it++){let ct=xt[it],ut=null;if(f!==null)ut=f.getViewport(ct);else{let gt=d.getViewSubImage(u,ct);ut=gt.viewport,it===0&&(t.setRenderTargetTextures(y,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(y))}let dt=L[it];dt===void 0&&(dt=new un,dt.layers.enable(it),dt.viewport=new Ee,L[it]=dt),dt.matrix.fromArray(ct.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(ct.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(ut.x,ut.y,ut.width,ut.height),it===0&&(U.matrix.copy(dt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),zt===!0&&U.cameras.push(dt)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let it=d.getDepthInformation(xt[0]);it&&it.isValid&&it.texture&&g.init(it,s.renderState)}if(Rt&&Rt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let it=0;it<xt.length;it++){let ct=xt[it].camera;if(ct){let ut=m[ct];ut||(ut=new xa,m[ct]=ut);let dt=d.getCameraImage(ct);ut.sourceTexture=dt}}}}for(let xt=0;xt<M.length;xt++){let zt=E[xt],Rt=M[xt];zt!==null&&Rt!==void 0&&Rt.update(zt,et,l||a)}ee&&ee(K,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),p=null}let le=new kp;le.setAnimationLoop(Qt),this.setAnimationLoop=function(K){ee=K},this.dispose=function(){}}},nM=new Kt,qp=new te;qp.set(-1,0,0,0,1,0,0,0,1);function iM(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Uu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,S,A,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,S,A):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===mn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===mn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let S=t.get(m),A=S.envMap,y=S.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(nM.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(qp),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,S,A){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=A*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===mn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let S=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sM(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){let E=M.program;n.uniformBlockBinding(y,E)}function l(y,M){let E=s[y.id];E===void 0&&(g(y),E=h(y),s[y.id]=E,y.addEventListener("dispose",S));let C=M.program;n.updateUBOMapping(y,C);let v=t.render.frame;r[y.id]!==v&&(u(y),r[y.id]=v)}function h(y){let M=d();y.__bindingPointIndex=M;let E=i.createBuffer(),C=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let M=s[y.id],E=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,T=E.length;v<T;v++){let w=E[v];if(Array.isArray(w))for(let D=0,L=w.length;D<L;D++)f(w[D],v,D,C);else f(w,v,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,M,E,C){if(x(y,M,E,C)===!0){let v=y.__offset,T=y.value;if(Array.isArray(T)){let w=0;for(let D=0;D<T.length;D++){let L=T[D],U=m(L);p(L,y.__data,w),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(w+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function p(y,M,E){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,E)}function x(y,M,E,C){let v=y.value,T=M+"_"+E;if(C[T]===void 0)return typeof v=="number"||typeof v=="boolean"?C[T]=v:ArrayBuffer.isView(v)?C[T]=v.slice():C[T]=v.clone(),!0;{let w=C[T];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return C[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function g(y){let M=y.uniforms,E=0,C=16;for(let T=0,w=M.length;T<w;T++){let D=Array.isArray(M[T])?M[T]:[M[T]];for(let L=0,U=D.length;L<U;L++){let N=D[L],k=Array.isArray(N.value)?N.value:[N.value];for(let Z=0,J=k.length;Z<J;Z++){let at=k[Z],q=m(at),F=E%C,X=F%q.boundary,ht=F+X;E+=X,ht!==0&&C-ht<q.storage&&(E+=C-ht),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=q.storage}}}let v=E%C;return v>0&&(E+=C-v),y.__size=E,y.__cache={},this}function m(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",y),M}function S(y){let M=y.target;M.removeEventListener("dispose",S);let E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function A(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:A}}var rM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ti=null;function aM(){return Ti===null&&(Ti=new Mi(rM,16,16,ms,Xe),Ti.name="DFG_LUT",Ti.minFilter=fn,Ti.magFilter=fn,Ti.wrapS=Jn,Ti.wrapT=Jn,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}var Vc=class{constructor(t={}){let{canvas:e=op(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=_n}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=f,g=new Set([ac,rc,sc]),m=new Set([_n,hi,Rr,ps,ec,nc]),S=new Uint32Array(4),A=new Int32Array(4),y=new I,M=null,E=null,C=[],v=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,D=!1,L=null,U=null,N=null,k=null;this._outputColorSpace=De;let Z=0,J=0,at=null,q=-1,F=null,X=new Ee,ht=new Ee,Mt=null,ee=new pt(0),Qt=0,le=e.width,K=e.height,et=1,xt=null,zt=null,Rt=new Ee(0,0,le,K),Xt=new Ee(0,0,le,K),ge=!1,it=new yr,ct=!1,ut=!1,dt=new Kt,gt=new I,Gt=new Ee,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function Jt(){return at===null?et:1}let O=n;function me(b,B){return e.getContext(b,B)}let re,P,_,H,V,j,ft,vt,tt,st,St,Ot,yt,_t,Dt,Ht,$t,z,bt,nt,Et,Ct,lt;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ne,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",Qn,!1),O===null){let B="webgl2";if(O=me(B,b),O===null)throw me(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(b){throw e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Qn,!1),Yt("WebGLRenderer: "+b.message),b}function Vt(){re=new f_(O),re.init(),Et=new Qy(O,re),P=new i_(O,re,t,Et),_=new Ky(O,re),P.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),U=O.createFramebuffer(),N=O.createFramebuffer(),k=O.createFramebuffer(),H=new g_(O),V=new Oy,j=new jy(O,re,_,V,P,Et,H),ft=new d_(w),vt=new vg(O),Ct=new e_(O,vt),tt=new p_(O,vt,H,Ct),st=new v_(O,tt,vt,Ct,H),z=new x_(O,P,j),Dt=new s_(V),St=new Fy(w,ft,re,P,Ct,Dt),Ot=new iM(w,V),yt=new zy,_t=new Xy(re),$t=new t_(w,ft,_,st,p,c),Ht=new $y(w,st,P),lt=new sM(O,H,P,_),bt=new n_(O,re,H),nt=new m_(O,re,H),H.programs=St.programs,w.capabilities=P,w.extensions=re,w.properties=V,w.renderLists=yt,w.shadowMap=Ht,w.state=_,w.info=H}x!==_n&&(T=new y_(x,e.width,e.height,o,s,r));let Ft=new Qu(w,O);this.xr=Ft,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=re.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=re.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(b){b!==void 0&&(et=b,this.setSize(le,K,!1))},this.getSize=function(b){return b.set(le,K)},this.setSize=function(b,B,$=!0){if(Ft.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}le=b,K=B,e.width=Math.floor(b*et),e.height=Math.floor(B*et),$===!0&&(e.style.width=b+"px",e.style.height=B+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(le*et,K*et).floor()},this.setDrawingBufferSize=function(b,B,$){le=b,K=B,et=$,e.width=Math.floor(b*$),e.height=Math.floor(B*$),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(x===_n){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(X)},this.getViewport=function(b){return b.copy(Rt)},this.setViewport=function(b,B,$,G){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,B,$,G),_.viewport(X.copy(Rt).multiplyScalar(et).round())},this.getScissor=function(b){return b.copy(Xt)},this.setScissor=function(b,B,$,G){b.isVector4?Xt.set(b.x,b.y,b.z,b.w):Xt.set(b,B,$,G),_.scissor(ht.copy(Xt).multiplyScalar(et).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(b){_.setScissorTest(ge=b)},this.setOpaqueSort=function(b){xt=b},this.setTransparentSort=function(b){zt=b},this.getClearColor=function(b){return b.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,$=!0){let G=0;if(b){let W=!1;if(at!==null){let At=at.texture.format;W=g.has(At)}if(W){let At=at.texture.type,It=m.has(At),wt=$t.getClearColor(),Lt=$t.getClearAlpha(),Bt=wt.r,ae=wt.g,he=wt.b;It?(S[0]=Bt,S[1]=ae,S[2]=he,S[3]=Lt,O.clearBufferuiv(O.COLOR,0,S)):(A[0]=Bt,A[1]=ae,A[2]=he,A[3]=Lt,O.clearBufferiv(O.COLOR,0,A))}else G|=O.COLOR_BUFFER_BIT}B&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),L=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Qn,!1),$t.dispose(),yt.dispose(),_t.dispose(),V.dispose(),ft.dispose(),st.dispose(),Ct.dispose(),lt.dispose(),St.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",Od),Ft.removeEventListener("sessionend",Bd),Es.stop()};function Ne(b){b.preventDefault(),ra("WebGLRenderer: Context Lost."),D=!0}function Me(){ra("WebGLRenderer: Context Restored."),D=!1;let b=H.autoReset,B=Ht.enabled,$=Ht.autoUpdate,G=Ht.needsUpdate,W=Ht.type;Vt(),H.autoReset=b,Ht.enabled=B,Ht.autoUpdate=$,Ht.needsUpdate=G,Ht.type=W}function Qn(b){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function pi(b){let B=b.target;B.removeEventListener("dispose",pi),$0(B)}function $0(b){K0(b),V.remove(b)}function K0(b){let B=V.get(b).programs;B!==void 0&&(B.forEach(function($){St.releaseProgram($)}),b.isShaderMaterial&&St.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,$,G,W,At){B===null&&(B=kt);let It=W.isMesh&&W.matrixWorld.determinantAffine()<0,wt=tm(b,B,$,G,W);_.setMaterial(G,It);let Lt=$.index,Bt=1;if(G.wireframe===!0){if(Lt=tt.getWireframeAttribute($),Lt===void 0)return;Bt=2}let ae=$.drawRange,he=$.attributes.position,Nt=ae.start*Bt,Se=(ae.start+ae.count)*Bt;At!==null&&(Nt=Math.max(Nt,At.start*Bt),Se=Math.min(Se,(At.start+At.count)*Bt)),Lt!==null?(Nt=Math.max(Nt,0),Se=Math.min(Se,Lt.count)):he!=null&&(Nt=Math.max(Nt,0),Se=Math.min(Se,he.count));let Ke=Se-Nt;if(Ke<0||Ke===1/0)return;Ct.setup(W,G,wt,$,Lt);let Fe,Ie=bt;if(Lt!==null&&(Fe=vt.get(Lt),Ie=nt,Ie.setIndex(Fe)),W.isMesh)G.wireframe===!0?(_.setLineWidth(G.wireframeLinewidth*Jt()),Ie.setMode(O.LINES)):Ie.setMode(O.TRIANGLES);else if(W.isLine){let gn=G.linewidth;gn===void 0&&(gn=1),_.setLineWidth(gn*Jt()),W.isLineSegments?Ie.setMode(O.LINES):W.isLineLoop?Ie.setMode(O.LINE_LOOP):Ie.setMode(O.LINE_STRIP)}else W.isPoints?Ie.setMode(O.POINTS):W.isSprite&&Ie.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(re.get("WEBGL_multi_draw"))Ie.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let gn=W._multiDrawStarts,Pt=W._multiDrawCounts,Sn=W._multiDrawCount,xe=Lt?vt.get(Lt).bytesPerElement:1,Yn=V.get(G).currentProgram.getUniforms();for(let mi=0;mi<Sn;mi++)Yn.setValue(O,"_gl_DrawID",mi),Ie.render(gn[mi]/xe,Pt[mi])}else if(W.isInstancedMesh)Ie.renderInstances(Nt,Ke,W.count);else if($.isInstancedBufferGeometry){let gn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Pt=Math.min($.instanceCount,gn);Ie.renderInstances(Nt,Ke,Pt)}else Ie.render(Nt,Ke)};function Fd(b,B,$,G){L!==null&&b.isNodeMaterial&&L.setObject(G,b),ct===!0&&Dt.setState(b,$,!1),b.transparent===!0&&b.side===nn&&b.forceSinglePass===!1?(b.side=mn,b.needsUpdate=!0,zo(b,B,G),b.side=us,b.needsUpdate=!0,zo(b,B,G),b.side=nn):zo(b,B,G)}this.compile=function(b,B,$=null){$===null&&($=b),L!==null&&L.renderStart(b,B,$),E=_t.get($),E.init(B),v.push(E),$.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),b!==$&&b.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),ut=this.localClippingEnabled,ct=Dt.init(this.clippingPlanes,ut),ct===!0&&Dt.setGlobalState(this.clippingPlanes,B),L!==null&&Ht.render(E.state.shadowsArray,$,B);let G=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let At=W.material;if(At)if(Array.isArray(At))for(let It=0;It<At.length;It++){let wt=At[It];Fd(wt,$,B,W),G.add(wt)}else Fd(At,$,B,W),G.add(At)}),E=v.pop(),L!==null&&L.renderEnd(),G},this.compileAsync=function(b,B,$=null){let G=this.compile(b,B,$);return new Promise(W=>{function At(){if(G.forEach(function(It){let Lt=V.get(It).currentProgram;(Lt===void 0||Lt.isReady())&&G.delete(It)}),G.size===0){W(b);return}setTimeout(At,10)}re.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Ah=null;function j0(b){Ah&&Ah(b)}function Od(){Es.stop()}function Bd(){Es.start()}let Es=new kp;Es.setAnimationLoop(j0),typeof self<"u"&&Es.setContext(self),this.setAnimationLoop=function(b){Ah=b,Ft.setAnimationLoop(b),b===null?Es.stop():Es.start()},Ft.addEventListener("sessionstart",Od),Ft.addEventListener("sessionend",Bd),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(b,B);let $=Ft.enabled===!0&&Ft.isPresenting===!0,G=T!==null&&(at===null||$)&&T.begin(w,at);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(B),B=Ft.getCamera()),b.isScene===!0&&b.onBeforeRender(w,b,B,at),E=_t.get(b,v.length),E.init(B),E.state.textureUnits=j.getTextureUnits(),v.push(E),dt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),it.setFromProjectionMatrix(dt,si,B.reversedDepth),ut=this.localClippingEnabled,ct=Dt.init(this.clippingPlanes,ut),M=yt.get(b,C.length),M.init(),C.push(M),Ft.enabled===!0&&Ft.isPresenting===!0){let It=w.xr.getDepthSensingMesh();It!==null&&Rh(It,B,-1/0,w.sortObjects)}Rh(b,B,0,w.sortObjects),M.finish(),L!==null&&L.updateLights(E.state.lightsArray),w.sortObjects===!0&&M.sort(xt,zt),qt=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,qt&&$t.addToRenderList(M,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&Dt.beginShadows();let W=E.state.shadowsArray;if(Ht.render(W,b,B),ct===!0&&Dt.endShadows(),(G&&T.hasRenderPass())===!1){let It=M.opaque,wt=M.transmissive;if(E.setupLights(),B.isArrayCamera){let Lt=B.cameras;if(wt.length>0)for(let Bt=0,ae=Lt.length;Bt<ae;Bt++){let he=Lt[Bt];kd(It,wt,b,he)}qt&&$t.render(b);for(let Bt=0,ae=Lt.length;Bt<ae;Bt++){let he=Lt[Bt];zd(M,b,he,he.viewport)}}else wt.length>0&&kd(It,wt,b,B),qt&&$t.render(b),zd(M,b,B)}at!==null&&J===0&&(j.updateMultisampleRenderTarget(at),j.updateRenderTargetMipmap(at)),G&&T.end(w),b.isScene===!0&&b.onAfterRender(w,b,B),Ct.resetDefaultState(),q=-1,F=null,v.pop(),v.length>0?(E=v[v.length-1],j.setTextureUnits(E.state.textureUnits),ct===!0&&Dt.setGlobalState(w.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?M=C[C.length-1]:M=null,L!==null&&L.renderEnd()};function Rh(b,B,$,G){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(it)){G&&Gt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(dt);let It=st.update(b),wt=b.material;wt.visible&&M.push(b,It,wt,$,Gt.z,null,B)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(it))){let It=st.update(b),wt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Gt.copy(b.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Gt.copy(It.boundingSphere.center)),Gt.applyMatrix4(b.matrixWorld).applyMatrix4(dt)),Array.isArray(wt)){let Lt=It.groups;for(let Bt=0,ae=Lt.length;Bt<ae;Bt++){let he=Lt[Bt],Nt=wt[he.materialIndex];Nt&&Nt.visible&&M.push(b,It,Nt,$,Gt.z,he,B)}}else wt.visible&&M.push(b,It,wt,$,Gt.z,null,B)}}let At=b.children;for(let It=0,wt=At.length;It<wt;It++)Rh(At[It],B,$,G)}function zd(b,B,$,G){let{opaque:W,transmissive:At,transparent:It}=b;E.setupLightsView($),ct===!0&&Dt.setGlobalState(w.clippingPlanes,$),G&&_.viewport(X.copy(G)),W.length>0&&Bo(W,B,$),At.length>0&&Bo(At,B,$),It.length>0&&Bo(It,B,$),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function kd(b,B,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){let Nt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new Be(1,1,{generateMipmaps:!0,type:Nt?Xe:_n,minFilter:fs,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}let At=E.state.transmissionRenderTarget[G.id],It=G.viewport||X;At.setSize(It.z*w.transmissionResolutionScale,It.w*w.transmissionResolutionScale);let wt=w.getRenderTarget(),Lt=w.getActiveCubeFace(),Bt=w.getActiveMipmapLevel();w.setRenderTarget(At),w.getClearColor(ee),Qt=w.getClearAlpha(),Qt<1&&w.setClearColor(16777215,.5),w.clear(),qt&&$t.render($);let ae=w.toneMapping;w.toneMapping=ci;let he=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),ct===!0&&Dt.setGlobalState(w.clippingPlanes,G),Bo(b,$,G),j.updateMultisampleRenderTarget(At),j.updateRenderTargetMipmap(At),re.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Se=0,Ke=B.length;Se<Ke;Se++){let Fe=B[Se],{object:Ie,geometry:gn,material:Pt,group:Sn}=Fe;if(Pt.side===nn&&Ie.layers.test(G.layers)){let xe=Pt.side;Pt.side=mn,Pt.needsUpdate=!0,Hd(Ie,$,G,gn,Pt,Sn),Pt.side=xe,Pt.needsUpdate=!0,Nt=!0}}Nt===!0&&(j.updateMultisampleRenderTarget(At),j.updateRenderTargetMipmap(At))}w.setRenderTarget(wt,Lt,Bt),w.setClearColor(ee,Qt),he!==void 0&&(G.viewport=he),w.toneMapping=ae}function Bo(b,B,$){let G=B.isScene===!0?B.overrideMaterial:null;for(let W=0,At=b.length;W<At;W++){let It=b[W],{object:wt,geometry:Lt,group:Bt}=It,ae=It.material;ae.allowOverride===!0&&G!==null&&(ae=G),wt.layers.test($.layers)&&Hd(wt,B,$,Lt,ae,Bt)}}function Hd(b,B,$,G,W,At){L!==null&&W.isNodeMaterial&&L.setObject(b,W),b.onBeforeRender(w,B,$,G,W,At),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(w,B,$,G,b,At),W.transparent===!0&&W.side===nn&&W.forceSinglePass===!1?(W.side=mn,W.needsUpdate=!0,w.renderBufferDirect($,B,G,W,b,At),W.side=us,W.needsUpdate=!0,w.renderBufferDirect($,B,G,W,b,At),W.side=nn):w.renderBufferDirect($,B,G,W,b,At),b.onAfterRender(w,B,$,G,W,At)}function zo(b,B,$){B.isScene!==!0&&(B=kt);let G=V.get(b),W=E.state.lights,At=E.state.shadowsArray,It=W.state.version,wt=St.getParameters(b,W.state,At,B,$,E.state.lightProbeGridArray),Lt=St.getProgramCacheKey(wt),Bt=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,G.fog=B.fog;let ae=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=ft.get(b.envMap||G.environment,ae),G.envMapRotation=G.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Bt===void 0&&(b.addEventListener("dispose",pi),Bt=new Map,G.programs=Bt);let he=Bt.get(Lt);if(he!==void 0){if(G.currentProgram===he&&G.lightsStateVersion===It)return Gd(b,wt),he}else wt.uniforms=St.getUniforms(b),L!==null&&b.isNodeMaterial&&L.build(b,$,wt),b.onBeforeCompile(wt,w),he=St.acquireProgram(wt,Lt),Bt.set(Lt,he),G.uniforms=wt.uniforms;let Nt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Nt.clippingPlanes=Dt.uniform),Gd(b,wt),G.needsLights=nm(b),G.lightsStateVersion=It,G.needsLights&&(Nt.ambientLightColor.value=W.state.ambient,Nt.lightProbe.value=W.state.probe,Nt.sunLights.value=W.state.sun,Nt.sunLightShadows.value=W.state.sunShadow,Nt.directionalLights.value=W.state.directional,Nt.directionalLightShadows.value=W.state.directionalShadow,Nt.spotLights.value=W.state.spot,Nt.spotLightShadows.value=W.state.spotShadow,Nt.rectAreaLights.value=W.state.rectArea,Nt.ltc_1.value=W.state.rectAreaLTC1,Nt.ltc_2.value=W.state.rectAreaLTC2,Nt.pointLights.value=W.state.point,Nt.pointLightShadows.value=W.state.pointShadow,Nt.hemisphereLights.value=W.state.hemi,Nt.sunShadowMatrix.value=W.state.sunShadowMatrix,Nt.sunShadowCascade.value=W.state.sunShadowCascade,Nt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Nt.spotLightMatrix.value=W.state.spotLightMatrix,Nt.spotLightMap.value=W.state.spotLightMap,Nt.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=E.state.lightProbeGridArray.length>0,G.currentProgram=he,G.uniformsList=null,he}function Vd(b){if(b.uniformsList===null){let B=b.currentProgram.getUniforms();b.uniformsList=Ir.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Gd(b,B){let $=V.get(b);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function Q0(b,B){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(B.matrixWorld);for(let $=0,G=b.length;$<G;$++){let W=b[$];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function tm(b,B,$,G,W){B.isScene!==!0&&(B=kt),j.resetTextureUnits();let At=B.fog,It=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?B.environment:null,wt=at===null?w.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ce.workingColorSpace,Lt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Bt=ft.get(G.envMap||It,Lt),ae=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,he=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Nt=!!$.morphAttributes.position,Se=!!$.morphAttributes.normal,Ke=!!$.morphAttributes.color,Fe=ci;G.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Fe=w.toneMapping);let Ie=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,gn=Ie!==void 0?Ie.length:0,Pt=V.get(G),Sn=E.state.lights;if(ct===!0&&(ut===!0||b!==F)){let Ue=b===F&&G.id===q;Dt.setState(G,b,Ue)}let xe=!1;G.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Sn.state.version||Pt.outputColorSpace!==wt||W.isBatchedMesh&&Pt.batching===!1||!W.isBatchedMesh&&Pt.batching===!0||W.isBatchedMesh&&Pt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Pt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Pt.instancing===!1||!W.isInstancedMesh&&Pt.instancing===!0||W.isSkinnedMesh&&Pt.skinning===!1||!W.isSkinnedMesh&&Pt.skinning===!0||W.isInstancedMesh&&Pt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Pt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Pt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Pt.instancingMorph===!1&&W.morphTexture!==null||Pt.envMap!==Bt||G.fog===!0&&Pt.fog!==At||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==Dt.numPlanes||Pt.numIntersection!==Dt.numIntersection)||Pt.vertexAlphas!==ae||Pt.vertexTangents!==he||Pt.morphTargets!==Nt||Pt.morphNormals!==Se||Pt.morphColors!==Ke||Pt.toneMapping!==Fe||Pt.morphTargetsCount!==gn||!!Pt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,Pt.__version=G.version);let Yn=Pt.currentProgram;xe===!0&&(Yn=zo(G,B,W),L&&G.isNodeMaterial&&L.onUpdateProgram(G,Yn,Pt));let mi=!1,$i=!1,Xs=!1,Ae=Yn.getUniforms(),Ye=Pt.uniforms;if(_.useProgram(Yn.program)&&(mi=!0,$i=!0,Xs=!0),G.id!==q&&(q=G.id,$i=!0),Pt.needsLights){let Ue=Q0(E.state.lightProbeGridArray,W);Pt.lightProbeGrid!==Ue&&(Pt.lightProbeGrid=Ue,$i=!0)}if(mi||F!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ae.setValue(O,"projectionMatrix",b.projectionMatrix),Ae.setValue(O,"viewMatrix",b.matrixWorldInverse);let ji=Ae.map.cameraPosition;ji!==void 0&&ji.setValue(O,gt.setFromMatrixPosition(b.matrixWorld)),P.logarithmicDepthBuffer&&Ae.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ae.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),F!==b&&(F=b,$i=!0,Xs=!0)}if(Pt.needsLights&&(Sn.state.sunShadowMap.length>0&&Ae.setValue(O,"sunShadowMap",Sn.state.sunShadowMap,j),Sn.state.directionalShadowMap.length>0&&Ae.setValue(O,"directionalShadowMap",Sn.state.directionalShadowMap,j),Sn.state.spotShadowMap.length>0&&Ae.setValue(O,"spotShadowMap",Sn.state.spotShadowMap,j),Sn.state.pointShadowMap.length>0&&Ae.setValue(O,"pointShadowMap",Sn.state.pointShadowMap,j)),W.isSkinnedMesh){Ae.setOptional(O,W,"bindMatrix"),Ae.setOptional(O,W,"bindMatrixInverse");let Ue=W.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),Ae.setValue(O,"boneTexture",Ue.boneTexture,j))}W.isBatchedMesh&&(Ae.setOptional(O,W,"batchingTexture"),Ae.setValue(O,"batchingTexture",W._matricesTexture,j),Ae.setOptional(O,W,"batchingIdTexture"),Ae.setValue(O,"batchingIdTexture",W._indirectTexture,j),Ae.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&Ae.setValue(O,"batchingColorTexture",W._colorsTexture,j));let Ki=$.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&z.update(W,$,Yn),($i||Pt.receiveShadow!==W.receiveShadow)&&(Pt.receiveShadow=W.receiveShadow,Ae.setValue(O,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&B.environment!==null&&(Ye.envMapIntensity.value=B.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=aM()),$i){if(Ae.setValue(O,"toneMappingExposure",w.toneMappingExposure),Pt.needsLights&&em(Ye,Xs),At&&G.fog===!0&&Ot.refreshFogUniforms(Ye,At),Ot.refreshMaterialUniforms(Ye,G,et,K,E.state.transmissionRenderTarget[b.id]),Pt.needsLights&&Pt.lightProbeGrid){let Ue=Pt.lightProbeGrid;Ye.probesSH.value=Ue.texture,Ye.probesMin.value.copy(Ue.boundingBox.min),Ye.probesMax.value.copy(Ue.boundingBox.max),Ye.probesResolution.value.copy(Ue.resolution)}Ir.upload(O,Vd(Pt),Ye,j)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ir.upload(O,Vd(Pt),Ye,j),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ae.setValue(O,"center",W.center),Ae.setValue(O,"modelViewMatrix",W.modelViewMatrix),Ae.setValue(O,"normalMatrix",W.normalMatrix),Ae.setValue(O,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Ue=G.uniformsGroups;for(let ji=0,qs=Ue.length;ji<qs;ji++){let Xd=Ue[ji];lt.update(Xd,Yn),lt.bind(Xd,Yn)}}return Yn}function em(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.sunLights.needsUpdate=B,b.sunLightShadows.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function nm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(b,B,$){let G=V.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),V.get(b.texture).__webglTexture=B,V.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){let $=V.get(b);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,$=0){at=b,Z=B,J=$;let G=null,W=!1,At=!1;if(b){let wt=V.get(b);if(wt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(O.FRAMEBUFFER,wt.__webglFramebuffer),X.copy(b.viewport),ht.copy(b.scissor),Mt=b.scissorTest,_.viewport(X),_.scissor(ht),_.setScissorTest(Mt),q=-1;return}else if(wt.__webglFramebuffer===void 0)j.setupRenderTarget(b);else if(wt.__hasExternalTextures)j.rebindTextures(b,V.get(b.texture).__webglTexture,V.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let ae=b.depthTexture;if(wt.__boundDepthTexture!==ae){if(ae!==null&&V.has(ae)&&(b.width!==ae.image.width||b.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(b)}}let Lt=b.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(At=!0);let Bt=V.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Bt[B])?G=Bt[B][$]:G=Bt[B],W=!0):b.samples>0&&j.useMultisampledRTT(b)===!1?G=V.get(b).__webglMultisampledFramebuffer:Array.isArray(Bt)?G=Bt[$]:G=Bt,X.copy(b.viewport),ht.copy(b.scissor),Mt=b.scissorTest}else X.copy(Rt).multiplyScalar(et).floor(),ht.copy(Xt).multiplyScalar(et).floor(),Mt=ge;if($!==0&&(G=U),_.bindFramebuffer(O.FRAMEBUFFER,G)&&_.drawBuffers(b,G),_.viewport(X),_.scissor(ht),_.setScissorTest(Mt),W){let wt=V.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,wt.__webglTexture,$)}else if(At){let wt=B;for(let Lt=0;Lt<b.textures.length;Lt++){let Bt=V.get(b.textures[Lt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Lt,Bt.__webglTexture,$,wt)}}else if(b!==null&&$!==0){let wt=V.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,wt.__webglTexture,$)}q=-1};function Wd(b){let B=V.get(b);return(B.__readFormat!==b.format||B.__readType!==b.type)&&(B.__readFormat=b.format,B.__readType=b.type,B.__formatReadable=P.textureFormatReadable(b.format),B.__typeReadable=P.textureTypeReadable(b.type)),B}this.readRenderTargetPixels=function(b,B,$,G,W,At,It,wt=0){if(!(b&&b.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&It!==void 0&&(Lt=Lt[It]),Lt){_.bindFramebuffer(O.FRAMEBUFFER,Lt);try{let Bt=b.textures[wt],ae=Bt.format,he=Bt.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+wt);let Nt=Wd(Bt);if(Nt.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-G&&$>=0&&$<=b.height-W&&O.readPixels(B,$,G,W,Et.convert(ae),Et.convert(he),At)}finally{let Bt=at!==null?V.get(at).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(b,B,$,G,W,At,It,wt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&It!==void 0&&(Lt=Lt[It]),Lt)if(B>=0&&B<=b.width-G&&$>=0&&$<=b.height-W){_.bindFramebuffer(O.FRAMEBUFFER,Lt);let Bt=b.textures[wt],ae=Bt.format,he=Bt.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+wt);let Nt=Wd(Bt);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Se=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Se),O.bufferData(O.PIXEL_PACK_BUFFER,At.byteLength,O.STREAM_READ),O.readPixels(B,$,G,W,Et.convert(ae),Et.convert(he),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ke=at!==null?V.get(at).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,Ke);let Fe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await cp(O,Fe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Se),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,At),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Se),O.deleteSync(Fe),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,$=0){let G=Math.pow(2,-$),W=Math.floor(b.image.width*G),At=Math.floor(b.image.height*G),It=B!==null?B.x:0,wt=B!==null?B.y:0;j.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,It,wt,W,At),_.unbindTexture()},this.copyTextureToTexture=function(b,B,$=null,G=null,W=0,At=0){let It,wt,Lt,Bt,ae,he,Nt,Se,Ke,Fe=b.isCompressedTexture?b.mipmaps[At]:b.image;if($!==null)It=$.max.x-$.min.x,wt=$.max.y-$.min.y,Lt=$.isBox3?$.max.z-$.min.z:1,Bt=$.min.x,ae=$.min.y,he=$.isBox3?$.min.z:0;else{let Ye=Math.pow(2,-W);It=Math.floor(Fe.width*Ye),wt=Math.floor(Fe.height*Ye),b.isDataArrayTexture?Lt=Fe.depth:b.isData3DTexture?Lt=Math.floor(Fe.depth*Ye):Lt=1,Bt=0,ae=0,he=0}G!==null?(Nt=G.x,Se=G.y,Ke=G.z):(Nt=0,Se=0,Ke=0);let Ie=Et.convert(B.format),gn=Et.convert(B.type),Pt;B.isData3DTexture?(j.setTexture3D(B,0),Pt=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(j.setTexture2DArray(B,0),Pt=O.TEXTURE_2D_ARRAY):(j.setTexture2D(B,0),Pt=O.TEXTURE_2D),_.activeTexture(O.TEXTURE0),_.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),_.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),_.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);let Sn=_.getParameter(O.UNPACK_ROW_LENGTH),xe=_.getParameter(O.UNPACK_IMAGE_HEIGHT),Yn=_.getParameter(O.UNPACK_SKIP_PIXELS),mi=_.getParameter(O.UNPACK_SKIP_ROWS),$i=_.getParameter(O.UNPACK_SKIP_IMAGES);_.pixelStorei(O.UNPACK_ROW_LENGTH,Fe.width),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Fe.height),_.pixelStorei(O.UNPACK_SKIP_PIXELS,Bt),_.pixelStorei(O.UNPACK_SKIP_ROWS,ae),_.pixelStorei(O.UNPACK_SKIP_IMAGES,he);let Xs=b.isDataArrayTexture||b.isData3DTexture,Ae=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){let Ye=V.get(b),Ki=V.get(B),Ue=V.get(Ye.__renderTarget),ji=V.get(Ki.__renderTarget);_.bindFramebuffer(O.READ_FRAMEBUFFER,Ue.__webglFramebuffer),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,ji.__webglFramebuffer);for(let qs=0;qs<Lt;qs++)Xs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,V.get(b).__webglTexture,W,he+qs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,V.get(B).__webglTexture,At,Ke+qs)),O.blitFramebuffer(Bt,ae,It,wt,Nt,Se,It,wt,O.DEPTH_BUFFER_BIT,O.NEAREST);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||V.has(b)){let Ye=V.get(b),Ki=V.get(B);_.bindFramebuffer(O.READ_FRAMEBUFFER,N),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let Ue=0;Ue<Lt;Ue++)Xs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ye.__webglTexture,W,he+Ue):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ye.__webglTexture,W),Ae?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ki.__webglTexture,At,Ke+Ue):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ki.__webglTexture,At),W!==0?O.blitFramebuffer(Bt,ae,It,wt,Nt,Se,It,wt,O.COLOR_BUFFER_BIT,O.NEAREST):Ae?O.copyTexSubImage3D(Pt,At,Nt,Se,Ke+Ue,Bt,ae,It,wt):O.copyTexSubImage2D(Pt,At,Nt,Se,Bt,ae,It,wt);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ae?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Pt,At,Nt,Se,Ke,It,wt,Lt,Ie,gn,Fe.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(Pt,At,Nt,Se,Ke,It,wt,Lt,Ie,Fe.data):O.texSubImage3D(Pt,At,Nt,Se,Ke,It,wt,Lt,Ie,gn,Fe):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,At,Nt,Se,It,wt,Ie,gn,Fe.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,At,Nt,Se,Fe.width,Fe.height,Ie,Fe.data):O.texSubImage2D(O.TEXTURE_2D,At,Nt,Se,It,wt,Ie,gn,Fe);_.pixelStorei(O.UNPACK_ROW_LENGTH,Sn),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xe),_.pixelStorei(O.UNPACK_SKIP_PIXELS,Yn),_.pixelStorei(O.UNPACK_SKIP_ROWS,mi),_.pixelStorei(O.UNPACK_SKIP_IMAGES,$i),At===0&&B.generateMipmaps&&O.generateMipmap(Pt),_.unbindTexture()},this.initRenderTarget=function(b){V.get(b).__webglFramebuffer===void 0&&j.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?j.setTextureCube(b,0):b.isData3DTexture?j.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?j.setTexture2DArray(b,0):j.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){Z=0,J=0,at=null,_.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};var td="https://race.vwfestmemecoin.com/api/arcade/zombies",io=null,ed=i=>i.json(),Ai={start(){return io=null,fetch(td+"/start",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}).then(ed).then(i=>{i.ok&&(io=i.token)}).catch(()=>{})},hasToken(){return!!io},top(){return fetch(td+"/top").then(ed).then(i=>i.ok?i.top:null).catch(()=>null)},submit(i,t,e,n){return fetch(td+"/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:io,nickname:i,score:t,pts:e,kills:n})}).then(ed).then(s=>(s.ok&&(io=null),s)).catch(()=>({ok:!1,error:"Network hiccup. Try again."}))},render(i,t,e){if(i.replaceChildren(),!t){let n=document.createElement("li");n.className="muted",n.textContent="Leaderboard unavailable.",i.append(n);return}if(!t.length){let n=document.createElement("li");n.className="muted",n.textContent="No survivors yet. Be first.",i.append(n);return}for(let n of t.slice(0,10)){let s=document.createElement("li");e&&n.nickname===e&&(s.className="me");let r=document.createElement("b");r.textContent=String(n.nickname),s.append(r," \xB7 Round "+(n.score|0)+" \xB7 "+(n.aux|0).toLocaleString()+" pts"),i.append(s)}}};var qe=Math.PI*2,ze=(i,t,e)=>i<t?t:i>e?e:i,Ri=(i,t,e)=>i+(t-i)*e,Y=(i=1,t)=>t===void 0?Math.random()*i:i+Math.random()*(t-i),dn=i=>i[Math.random()*i.length|0],Yp=i=>i*i*(3-2*i);function Xc(i,t,e){let n=i*374761393+t*668265263+e*144665|0;return n=(n^n>>>13)*1274126177,n=n^n>>>16,(n>>>0)%1e5/1e5}function oM(i,t,e=0){let n=Math.floor(i),s=Math.floor(t),r=Yp(i-n),a=Yp(t-s),o=Xc(n,s,e),c=Xc(n+1,s,e),l=Xc(n,s+1,e),h=Xc(n+1,s+1,e);return Ri(Ri(o,c,r),Ri(l,h,r),a)}function An(i,t,e=4,n=0){let s=0,r=.5,a=1;for(let o=0;o<e;o++)s+=r*oM(i*a,t*a,n+o*17),a*=2,r*=.5;return s}function gs(i,t,e={}){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),r=s.createImageData(i,i),a=r.data;for(let c=0;c<i;c++)for(let l=0;l<i;l++){let h=(c*i+l)*4,d=t(l/i,c/i,l,c);a[h]=d[0],a[h+1]=d[1],a[h+2]=d[2],a[h+3]=255}s.putImageData(r,0,0),e.after&&e.after(s,i);let o=new en(n);return o.wrapS=o.wrapT=Pn,o.anisotropy=e.aniso||4,e.srgb!==!1&&(o.colorSpace=De),o.needsUpdate=!0,o}var qc=(i,t,e)=>[Ri(i[0],t[0],e),Ri(i[1],t[1],e),Ri(i[2],t[2],e)];function Zp(i=512){let t={};t.sand=gs(i,(o,c)=>{let l=An(o*24,c*24,5,1),h=An(o*6+l*1.5,c*60,3,9),d=ze(l*.7+h*.5,0,1);return qc([112,86,58],[186,150,104],d)}),t.sandBump=gs(i,(o,c)=>{let l=An(o*24,c*24,5,1),h=An(o*6+l*1.5,c*60,3,9),d=ze(l*.6+h*.7,0,1)*255;return[d,d,d]},{srgb:!1}),t.concrete=gs(i,(o,c,l,h)=>{let d=An(o*18,c*18,5,3),u=An(o*80,c*80,2,4),f=.35+d*.5+(u-.5)*.15,p=Math.abs(An(o*7,c*7,3,12)-.5)<.012?.5:1;return f*=p,qc([48,50,54],[128,126,120],ze(f,0,1))}),t.concreteBump=gs(i,(o,c)=>{let l=An(o*18,c*18,5,3)*255;return[l,l,l]},{srgb:!1}),t.rust=gs(i,(o,c)=>{let l=An(o*10,c*10,5,5),h=An(o*3,c*40,3,7),d=ze((l-.42)*3.2+(h-.5)*.8,0,1),u=.62+(An(o*60,c*60,2,2)-.5)*.25;return qc([u*255,u*255,u*255],[150,70,28],d*.85)}),t.rustRough=gs(i,(o,c)=>{let l=An(o*10,c*10,5,5),h=An(o*3,c*40,3,7);return[0,(.45+ze((l-.42)*3.2+(h-.5)*.8,0,1)*.5)*255,0]},{srgb:!1}),t.corr=gs(256,(o,c)=>{let l=(Math.sin(o*qe*16)*.5+.5)*255;return[l,l,l]},{srgb:!1}),t.corr.repeat.set(1,1),t.wood=gs(256,(o,c)=>{let l=An(o*4,c*60,4,21),h=An(o*12,c*12,2,4);return qc([66,42,24],[150,108,66],ze(l*.9+h*.2,0,1))});let e=document.createElement("canvas");e.width=e.height=64;let n=e.getContext("2d"),s=n.createRadialGradient(32,32,0,32,32,32);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.25,"rgba(255,255,255,.55)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,64,64),t.glow=new en(e),t.glow.colorSpace=De;let r=document.createElement("canvas");r.width=1024,r.height=256;let a=r.getContext("2d");return a.fillStyle="#05070b",a.fillRect(0,0,1024,256),a.textAlign="center",a.textBaseline="middle",a.font="900 150px system-ui, Arial Black, sans-serif",a.shadowColor="#18ffb0",a.shadowBlur=40,a.fillStyle="#c8fff0",a.fillText("VW FEST",512,120),a.shadowBlur=20,a.font="700 46px system-ui, Arial, sans-serif",a.fillStyle="#ffb347",a.shadowColor="#ff7a00",a.fillText("AIR-COOLED SALVAGE  \xB7  $VWFEST",512,222),t.sign=new en(r),t.sign.colorSpace=De,t.sign.anisotropy=4,t}function $p(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new _e,l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Jp(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][u]);let p=Jp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function Jp(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new de(a,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/e;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<e;p++){let x=h.getComponent(u,p);o.setComponent(u+d,p,x)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function Yc(i){let e=new DataView(i.buffer,i.byteOffset,i.byteLength).getUint32(0,!0),n=JSON.parse(new TextDecoder().decode(i.subarray(4,4+e))),s=i.byteOffset+4+e+(4-e%4)%4;return{meta:n,view:(a,[o,c])=>new a(i.buffer.slice(s+o,s+o+c*a.BYTES_PER_ELEMENT))}}function Zc(i,t){let e=i(Uint16Array,t.pos),n=new Float32Array(e.length);for(let s=0;s<e.length;s++){let r=s%3;n[s]=t.min[r]+e[s]/65535*t.size[r]}return new de(n,3)}var Jc=(i,t)=>new de(i(Int8Array,t.nrm),3,!0),so={};async function Kp(){await Promise.all(["zombies","cars"].map(async i=>{let t=await fetch("assets/"+i+".bin");if(!t.ok)throw new Error("missing assets/"+i+".bin");so[i]=new Uint8Array(await t.arrayBuffer())}))}var rd={},sd={},lM={},jp=!1;function cM(){if(jp)return;jp=!0;let{meta:i,view:t}=Yc(so.cars);for(let e of i){lM[e.tag]=e.tris;let n=new _e;if(n.setAttribute("position",Zc(t,e)),n.setAttribute("normal",Jc(t,e)),n.setAttribute("color",new de(t(Uint8Array,e.col),3,!0)),n.setIndex(new de(t(Uint16Array,e.idx),1)),n.computeBoundingBox(),rd[e.tag]=n,e.plate){let s=new _e;s.setAttribute("position",new de(t(Float32Array,e.plate.pos),3)),s.setAttribute("normal",new de(t(Float32Array,e.plate.nrm),3)),s.setAttribute("uv",new de(t(Float32Array,e.plate.uv),2)),sd[e.tag]=s}}}var nd;function hM(){if(nd)return nd;let i=document.createElement("canvas");i.width=256,i.height=96;let t=i.getContext("2d");t.fillStyle="#e9e4d4",t.fillRect(0,0,256,96),t.strokeStyle="#1d3557",t.lineWidth=6,t.strokeRect(5,5,246,86),t.fillStyle="#1d3557",t.font="900 46px Arial Black, Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("VWFEST",128,50);let e=new en(i);return e.colorSpace=De,nd=new jt({map:e,roughness:.6})}var id=new Map,uM=()=>id.get(0)||(id.set(0,new jt({vertexColors:!0,roughness:.55,metalness:.15})),id.get(0)),Qp=new Map;function dM(i,t,e){let n=i+t+"/"+e,s=Qp.get(n);if(s)return s;s=rd[i].clone();let r=s.attributes.color,a=s.attributes.position,o=new pt(t),c=new pt(e??15129792),l=i==="camper";for(let h=0;h<r.count;h++){let d=r.getX(h),u=r.getY(h),f=r.getZ(h);if(Math.abs(d-.247)<.01&&Math.abs(u-.247)<.01&&Math.abs(f-.247)<.01){let p=l&&a.getY(h)>1.04?c:o;r.setXYZ(h,p.r*.85,p.g*.85,p.b*.85)}else d>.975&&u>.975&&f>.975&&r.setXYZ(h,c.r,c.g,c.b)}return Qp.set(n,s),s}var fM=["bug","baja","ghia"],pM=["camper","wagon","safari"],mM=0,gM=0;function ad(i,t,e,n={}){cM();let s=i==="big"?pM[gM++%3]:fM[mM++%3],r=new Zt;r.rotation.y=Math.PI;let a=new mt(dM(s,t,e),uM());if(a.userData.noBatch=!0,r.add(a),sd[s]){let l=new mt(sd[s],hM());l.userData.noBatch=!0,r.add(l)}let o=new Zt;o.add(r),n.tilt&&(o.rotation.z=n.tilt);let c=rd[s].boundingBox.getSize(new I);return o.userData.size=[c.x,c.y,c.z],o}var $c=class{constructor(t){this.T=t,this.cache={};let e=n=>new jt(n);this.sand=e({map:t.sand,bumpMap:t.sandBump,bumpScale:3,roughness:.97,metalness:0,color:13615792}),t.sand.repeat.set(90,90),t.sandBump.repeat.set(90,90),this.concrete=e({map:t.concrete,bumpMap:t.concreteBump,bumpScale:1.5,roughness:.88,metalness:.02}),t.concrete.repeat.set(10,10),t.concreteBump.repeat.set(10,10),this.fence=e({color:9281190,map:t.rust,roughnessMap:t.rustRough,bumpMap:t.corr,bumpScale:2.5,metalness:.75,roughness:1}),this.fenceDark=e({color:3818056,map:t.rust,roughnessMap:t.rustRough,metalness:.7,roughness:1}),this.wood=e({color:16777215,map:t.wood,roughness:.85,metalness:0}),this.tire=e({color:1381655,roughness:.92,metalness:0}),this.glass=e({color:660761,roughness:.08,metalness:.95}),this.chrome=e({color:13620954,roughness:.18,metalness:1}),this.lampBulb=new ye({color:new pt(5,3.2,1.4),toneMapped:!1}),this.lampBulbT=new ye({color:new pt(1.2,4.5,3.4),toneMapped:!1}),this.headlight=e({color:15328456,emissive:4867120,emissiveIntensity:.6,roughness:.2,metalness:.2}),this.tarp=e({color:4151882,roughness:.95})}paint(t){let e="p"+t;return this.cache[e]||(this.cache[e]=new jt({color:t,map:this.T.rust,roughnessMap:this.T.rustRough,metalness:.55,roughness:1}))}flat(t,e=.8,n=.1){let s="f"+t+e+n;return this.cache[s]||(this.cache[s]=new jt({color:t,roughness:e,metalness:n}))}},xM=[6010272,14733722,14252330,11680302,6197184,13619140,9087050,13803834],od=()=>dn(xM),Gs=(i,t,e,n,s,r,a,o,c=14,l=9)=>{let h=new mt(new kn(i,c,l),o);return h.scale.set(t,e,n),h.position.set(s,r,a),h},on=(i,t,e,n,s,r,a)=>{let o=new mt(new ie(i,t,e),a);return o.position.set(n,s,r),o},qi=(i,t,e,n,s,r,a=!0,o=12)=>{let c=new mt(new Qe(i,i,t,o),r);return a&&(c.rotation.z=Math.PI/2),c.position.set(e,n,s),c};function t0(i,t,e,n,s=.34){let r=new Zt;return r.add(qi(s,.22,0,0,0,i.tire,!0,14)),r.add(qi(s*.55,.24,0,0,0,i.chrome,!0,8)),r.position.set(t,e,n),r}function e0(i,t,e={}){let n=new Zt,s=i.paint(t);n.add(Gs(1,.9,.5,1.95,0,.78,0,s,18,10)),n.add(Gs(1,.72,.42,.95,0,1.17,.12,i.glass,16,8)),n.add(Gs(1,.74,.28,.95,0,1.42,.12,s,16,8));for(let r of[-1,1])for(let a of[-1,1])n.add(Gs(1,.22,.32,.55,r*.86,.5,a*1.2,s,10,8)),e.missing&&r===1&&a===1||n.add(t0(i,r*.84,.34,a*1.2));for(let r of[-1,1])n.add(Gs(.12,1,1,1,r*.55,.92,-1.78,i.headlight,8,6));if(n.add(on(1.5,.08,.1,0,.44,-2.02,i.chrome)),n.add(on(1.5,.08,.1,0,.44,2.02,i.chrome)),n.add(on(.5,.1,.05,0,.78,1.92,i.fenceDark)),e.door){let r=on(.05,.5,1,.92,.9,-.2,s);r.rotation.y=.9,r.position.x=1.25,r.position.z=-.85,n.add(r)}return e.tilt&&(n.rotation.z=e.tilt),n.userData.size=[1.9,1.7,4.1],n}function n0(i,t,e=15129792,n={}){let s=new Zt,r=i.paint(t),a=i.paint(e);s.add(on(2,.85,4.5,0,.78,0,r)),s.add(on(1.96,.9,4.4,0,1.66,0,a)),s.add(on(2.04,.1,4.55,0,1.19,0,r)),s.add(on(2,.08,4.5,0,2.15,0,r));for(let h of[-1,1])s.add(on(.03,.55,3.8,h*.99,1.7,.1,i.glass)),s.add(on(.03,.14,.7,h*1.01,.82,.8,i.fenceDark));s.add(on(1.7,.6,.04,0,1.68,-2.2,i.glass));let o=on(1.1,.8,.1,-.5,.78,-2.28,r);o.rotation.y=.3;let c=on(1.1,.8,.1,.5,.78,-2.28,r);c.rotation.y=-.3,s.add(o,c);let l=qi(.17,.04,0,.85,-2.43,i.chrome,!1,14);l.rotation.x=Math.PI/2,s.add(l);for(let h of[-1,1]){s.add(Gs(.13,1,1,.6,h*.72,.8,-2.36,i.headlight,8,6));for(let d of[-1.4,1.5])n.missing&&h===1&&d===1.5||s.add(t0(i,h*.95,.38,d,.38))}return s.add(on(2.1,.1,.12,0,.45,-2.45,i.chrome)),s.add(on(2.1,.1,.12,0,.45,2.3,i.chrome)),n.tilt&&(s.rotation.z=n.tilt),s.userData.size=[2.1,2.2,4.6],s}function ro(i,t=4){let e=new Zt;for(let n=0;n<t;n++){let s=new mt(new Wi(.4,.18,8,14),i.tire);s.rotation.x=Math.PI/2,s.position.set(Y(-.04,.04),.18+n*.3,Y(-.04,.04)),e.add(s)}return e.userData.size=[1,.3*t+.1,1],e}function ao(i,t){let e=new Zt;e.add(qi(.3,.9,0,.45,0,i.paint(t),!1,12));for(let n of[.2,.7])e.add(qi(.31,.04,0,n,0,i.fenceDark,!1,12));return e.userData.size=[.62,.9,.62],e}function Ci(i,t=1){let e=new Zt;e.add(on(t,t,t,0,t/2,0,i.wood));for(let[n,s]of[[-1,-1],[1,-1],[-1,1],[1,1]])e.add(on(.07,t*1.02,.07,n*t/2,t/2,s*t/2,i.fenceDark));return e.userData.size=[t,t,t],e}function Kc(i,t){let e=new Zt;e.add(qi(.09,5.2,0,2.6,0,i.fenceDark,!1,8)),e.add(on(.12,.12,1.1,0,5.15,-.5,i.fenceDark)),e.add(on(.5,.12,.3,0,5.08,-1.1,i.fenceDark));let n=new mt(new kn(.17,8,6),t?i.lampBulbT:i.lampBulb);return n.position.set(0,4.98,-1.1),n.userData.bulb=!0,e.add(n),e.userData.size=[.4,5.2,.4],e.userData.bulbPos=new I(0,4.9,-1.1),e}function i0(i){let t=new Zt,e=i.flat(3103288,.9,0),n=Y(1.6,3.2);if(t.add(qi(.22,n,0,n/2,0,e,!1,8)),t.add(Gs(.22,1,1,1,0,n,0,e,8,5)),Math.random()<.8){let s=qi(.13,.7,.4,n*.6,0,e,!1,6);t.add(s),t.add(qi(.13,.5,.4+.32,n*.6+.3,0,e,!1,6)),t.children[t.children.length-1].rotation.z=0}return t}function s0(i,t){let e=new mt(new ya(t,0),i.flat(7035464,.95,0));e.scale.set(Y(.9,1.5),Y(.5,.9),Y(.9,1.4)),e.rotation.set(Y(3),Y(3),Y(3)),e.position.y=t*.3;let n=new Zt;return n.add(e),n}var Pi=(i,t,e={})=>ad("small",t,null,e),xs=(i,t,e,n={})=>ad("big",t,e,n);var oo=new I;function jn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;oo.copy(t),oo[n]=0,oo.normalize();let l=.5*a/(a+o),h=1-oo.angleTo(i)/c;return Math.sign(oo[e])===1?h*l:o/(a+o)+l+l*(1-h)}var jc=class i extends ie{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new I,l=new I,h=new I(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,x=new I,g=.5/a;for(let m=0,S=0;m<d.length;m+=3,S+=2)switch(c.fromArray(d,m),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),d[m+0]=h.x*Math.sign(c.x)+l.x*r,d[m+1]=h.y*Math.sign(c.y)+l.y*r,d[m+2]=h.z*Math.sign(c.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/p)){case 0:x.set(1,0,0),f[S+0]=jn(x,l,"z","y",r,n),f[S+1]=1-jn(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),f[S+0]=1-jn(x,l,"z","y",r,n),f[S+1]=1-jn(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),f[S+0]=1-jn(x,l,"x","z",r,t),f[S+1]=jn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),f[S+0]=1-jn(x,l,"x","z",r,t),f[S+1]=1-jn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),f[S+0]=1-jn(x,l,"x","y",r,t),f[S+1]=1-jn(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),f[S+0]=jn(x,l,"x","y",r,t),f[S+1]=1-jn(x,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Te=(i,t)=>i+Math.random()*(t-i);function ho(i,t){let e=document.createElement("canvas");e.width=e.height=i,t(e.getContext("2d"),i);let n=new en(e);return n.wrapS=n.wrapT=Pn,n.anisotropy=4,n}var vM=(i,t)=>ho(512,(e,n)=>{e.fillStyle=i,e.fillRect(0,0,n,n);for(let s=0;s<2600;s++){e.strokeStyle=`rgba(255,255,255,${Te(.01,.04)})`;let r=Te(0,n);e.beginPath(),e.moveTo(Te(0,n),r),e.lineTo(Te(0,n),r+Te(-2,2)),e.stroke()}for(let s=0;s<160;s++){e.strokeStyle=t,e.globalAlpha=Te(.15,.5),e.lineWidth=Te(.5,1.6);let r=Te(0,n),a=Te(0,n);e.beginPath(),e.moveTo(r,a),e.lineTo(r+Te(-30,30),a+Te(-6,6)),e.stroke()}e.globalAlpha=1;for(let s=0;s<900;s++)e.fillStyle=`rgba(0,0,0,${Te(.1,.35)})`,e.fillRect(Te(0,n),Te(0,n),1.5,1.5)}),_M=()=>ho(256,(i,t)=>{let e=i.createImageData(t,t);for(let n=0;n<e.data.length;n+=4){let s=120+Math.random()*90;e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}i.putImageData(e,0,0)}),yM=()=>ho(256,(i,t)=>{i.fillStyle="rgb(128,128,255)",i.fillRect(0,0,t,t);for(let e=0;e<5e3;e++){let n=Te(0,t),s=Te(0,t),r=Te(1,2.2),a=i.createRadialGradient(n-r*.4,s-r*.4,0,n,s,r);a.addColorStop(0,"rgb(90,90,255)"),a.addColorStop(1,"rgba(170,170,255,0)"),i.fillStyle=a,i.beginPath(),i.arc(n,s,r,0,7),i.fill()}}),MM=()=>ho(512,(i,t)=>{i.fillStyle="#4a2c17",i.fillRect(0,0,t,t);for(let e=0;e<260;e++){i.strokeStyle=`rgba(${Te(20,60)},${Te(10,30)},5,${Te(.15,.45)})`,i.lineWidth=Te(.5,3),i.beginPath();let n=Te(0,t);i.moveTo(0,n);for(let s=0;s<=16;s++)i.lineTo(s/16*t,n+=Te(-3,3)+Math.sin(s*.7+e)*1.4);i.stroke()}for(let e=0;e<40;e++)i.fillStyle="rgba(210,170,120,0.08)",i.fillRect(Te(0,t),Te(0,t),Te(10,60),Te(1,3))}),lo;function SM(){if(lo)return lo;let i=_M(),t=yM(),e=(n,s,r,a)=>new jt({map:vM(n,s),roughnessMap:i,roughness:r,metalness:a,color:16777215});lo={blued:e("#1b1e24","#9aa3ad",.42,.9),park:e("#34372f","#8d9184",.78,.55),steel:e("#4a4e54","#cfd4da",.3,.95),poly:new jt({color:1908256,roughness:.72,metalness:0,normalMap:t,normalScale:new ot(.9,.9)}),polyTan:new jt({color:7299146,roughness:.75,normalMap:t,normalScale:new ot(.6,.6)}),wood:new jt({map:MM(),roughness:.5,metalness:0,color:16777215}),brass:new jt({color:11569722,metalness:1,roughness:.3}),dot:new ye({color:new pt(.4,2.2,.8),toneMapped:!1}),dotR:new ye({color:new pt(2.4,.3,.2),toneMapped:!1}),glass:new jt({color:727586,metalness:.9,roughness:.05,emissive:401456}),glove:new jt({color:1974306,roughness:.85,normalMap:t,normalScale:new ot(.4,.4)}),sleeve:new jt({color:3884598,roughness:.95,normalMap:t,normalScale:new ot(.25,.25)})};for(let n of Object.values(lo))n.map&&(n.map.colorSpace=De);return lo}function Rn(i,t,e,n,{x:s=0,bevel:r=.0025,curve:a=6}={}){let o=new br;t.forEach(([d,u],f)=>f?o.lineTo(d,u):o.moveTo(d,u));let c=new Ca(o,{depth:e-r*2,bevelEnabled:!0,bevelThickness:r,bevelSize:r,bevelSegments:2,curveSegments:a});c.translate(0,0,-(e-r*2)/2),c.rotateY(-Math.PI/2);let l=c.attributes.uv;for(let d=0;d<l.count;d++)l.setXY(d,l.getX(d)*4,l.getY(d)*4);let h=new mt(c,n);return h.position.x=s,i.add(h),h}var be=(i,t,e,n,s,r,a,o,c=.004,l=0)=>{let h=new mt(new jc(t,e,n,2,c),o);return h.position.set(s,r,a),h.rotation.x=l,i.add(h),h},ld=(i,t,e,n,s,r,a,o,c=0)=>{let l=new mt(new ie(t,e,n),o);return l.position.set(s,r,a),l.rotation.x=c,i.add(l),l},$e=(i,t,e,n,s,r,a,o=20,c)=>{let l=new mt(new Qe(c??t,t,e,o,1),a);return l.rotation.x=Math.PI/2,l.position.set(n,s,r),i.add(l),l},cd=(i,t,e,n,s,r,a)=>{let o=new mt(new Wi(t,e,8,24),a);return o.position.set(n,s,r),i.add(o),o};function co(i,t,e,n){let s=new mt(new Wi(.022,.0035,6,18,Math.PI*1.15),n.poly);s.rotation.set(0,Math.PI/2,Math.PI*.93),s.position.set(0,e,t),i.add(s);let r=new mt(new Wi(.012,.003,6,10,Math.PI*.6),n.steel);r.rotation.set(0,Math.PI/2,Math.PI*1.15),r.position.set(0,e+.006,t+.004),i.add(r)}function hd(i,t,e,n,s){be(i,.004,.009,.006,0,n+.004,t,s.blued,.001);let r=$e(i,.0016,.002,0,n+.006,t+.003,s.dot,8);r.rotation.x=0,r.rotation.z=Math.PI/2,r.rotation.y=Math.PI/2;for(let a of[-1,1]){be(i,.005,.009,.008,a*.0055,n+.004,e,s.blued,.001);let o=$e(i,.0013,.002,a*.0055,n+.006,e-.0045,s.dotR,8);o.rotation.x=0}}var r0={pistol(i,t){let e=new Zt;i.add(e),i.userData.slide=e,Rn(e,[[.02,0],[-.17,0],[-.172,.022],[-.165,.03],[.012,.03],[.02,.022]],.026,t.blued,{bevel:.002}),be(e,.0262,.012,.032,0,.014,-.045,t.steel,.001);for(let n of[-1,1])for(let s=0;s<9;s++)be(e,.0015,.022,.0016,n*.0132,.014,.008-s*.0036,t.steel,4e-4);for(let n of[-1,1])for(let s=0;s<6;s++)be(e,.0015,.016,.0016,n*.0132,.012,-.13-s*.0036,t.steel,4e-4);hd(e,-.16,.008,.03,t),$e(e,.0075,.012,0,.012,-.172,t.steel,20),$e(e,.0045,.014,0,.012,-.175,t.poly,12),Rn(i,[[.03,-.002],[-.16,-.002],[-.16,-.012],[-.06,-.016],[-.05,-.022],[0,-.018],[.006,-.03],[.022,-.13],[.06,-.13],[.045,-.02],[.034,-.008]],.028,t.poly,{bevel:.003});for(let n=0;n<4;n++)be(i,.0285,.003,.012,0,-.012,-.075-n*.012,t.poly,.001);return co(i,-.02,-.03,t),be(i,.03,.006,.042,0,-.133,.042,t.blued,.002,-.2),be(i,.004,.006,.014,.0145,-.008,-.02,t.steel,.001),be(i,.0035,.008,.02,.0145,.005,.02,t.steel,.001),be(i,.012,.014,.008,0,.018,.032,t.steel,.002),{muzzle:-.18,eject:-.045,pos:[.17,-.17,-.38],lz:-.04}},smg(i,t){Rn(i,[[.09,0],[-.2,0],[-.2,.05],[.09,.05]],.05,t.park,{bevel:.004}),$e(i,.016,.12,0,.026,-.26,t.blued,20);for(let e=0;e<6;e++)cd(i,.017,.0022,0,.026,-.22-e*.015,t.steel).rotation.y=0;for(let e=0;e<6;e++)be(i,.052,.003,.012,0,.051,-.18+e*.03,t.blued,.001);hd(i,-.19,.06,.052,t),be(i,.036,.16,.026,0,-.08,-.06,t.blued,.004,.12);for(let e=0;e<8;e++)be(i,.038,.004,.028,0,-.01-e*.018,-.06+e*.002,t.steel,.001,.12);return Rn(i,[[0,0],[.03,0],[.05,-.11],[.02,-.11]],.032,t.poly,{bevel:.004}),co(i,-.005,-.012,t),$e(i,.006,.2,.018,.02,.18,t.steel,10),$e(i,.006,.2,-.018,.02,.18,t.steel,10),be(i,.05,.07,.012,0,0,.28,t.poly,.004),be(i,.012,.012,.03,.03,.03,.02,t.steel,.003),{muzzle:-.33,eject:-.05,pos:[.19,-.19,-.4],lz:-.2}},shotgun(i,t){Rn(i,[[.06,-.01],[-.14,-.01],[-.14,.055],[.04,.055],[.06,.04]],.05,t.blued,{bevel:.004}),$e(i,.0125,.6,0,.038,-.44,t.blued,22),$e(i,.0145,.52,0,0,-.4,t.blued,22),cd(i,.016,.003,0,0,-.66,t.steel);let e=new mt(new kn(.003,10,8),t.brass);e.position.set(0,.052,-.735),i.add(e);let n=Rn(i,[[-.28,-.02],[-.46,-.02],[-.46,.02],[-.28,.02]],.05,t.wood,{bevel:.008});for(let s=0;s<9;s++)be(i,.052,.004,.006,0,-.022,-.3-s*.017,t.wood,.002);return i.userData.pump=n,Rn(i,[[.06,.04],[.32,.03],[.34,.05],[.36,-.1],[.3,-.11],[.1,-.03],[.06,-.01]],.042,t.wood,{bevel:.008}),be(i,.044,.15,.02,0,-.03,.355,t.poly,.006,-.12),co(i,.035,-.02,t),be(i,.051,.012,.05,0,.022,-.05,t.steel,.002),{muzzle:-.75,eject:-.05,pos:[.2,-.2,-.4],lz:-.38}},rifle(i,t){Rn(i,[[.12,0],[-.17,0],[-.17,.045],[.12,.045]],.052,t.park,{bevel:.004});for(let n=0;n<18;n++)ld(i,.042,.004,.006,0,.049,-.16+n*.016,t.blued);Rn(i,[[-.17,-.005],[-.44,-.005],[-.44,.05],[-.17,.05]],.056,t.polyTan,{bevel:.006});for(let n=0;n<7;n++)for(let s of[-1,1])ld(i,.004,.018,.022,s*.028,.022,-.2-n*.034,t.poly);$e(i,.0095,.26,0,.022,-.56,t.blued,18),$e(i,.016,.05,0,.022,-.71,t.park,6);for(let n=0;n<3;n++)be(i,.004,.006,.03,.017,.03,-.71,t.poly,.001).rotation.z=n;be(i,.008,.045,.012,0,.07,-.43,t.park,.002),$e(i,.019,.1,0,.1,-.05,t.blued,24),$e(i,.023,.03,0,.1,-.11,t.blued,24),$e(i,.021,.025,0,.1,.01,t.blued,24);let e=$e(i,.019,.002,0,.1,-.126,t.glass,24);be(i,.024,.03,.05,0,.068,-.05,t.park,.003),Rn(i,[[0,0],[-.06,0],[-.06,-.12],[-.03,-.14],[0,-.12]],.03,t.park,{bevel:.003}).rotation.x=-.15;for(let n=0;n<6;n++)ld(i,.032,.003,.03,0,-.03-n*.02,-.03+n*.003,t.blued,-.15);return Rn(i,[[.03,-0],[.07,-0],[.09,-.11],[.055,-.115]],.032,t.poly,{bevel:.004}),co(i,0,-.012,t),$e(i,.014,.14,0,.025,.19,t.poly,16),Rn(i,[[.2,.05],[.36,.045],[.36,-.07],[.33,-.08],[.2,0]],.044,t.polyTan,{bevel:.006}),be(i,.046,.13,.014,0,-.012,.365,t.poly,.005),be(i,.014,.014,.034,.03,.03,0,t.steel,.003),{muzzle:-.74,eject:-.03,pos:[.2,-.2,-.4],lz:-.3}},lmg(i,t){Rn(i,[[.12,-.01],[-.2,-.01],[-.2,.06],[.12,.06]],.07,t.park,{bevel:.005}),be(i,.075,.03,.2,0,.075,-.06,t.park,.004);for(let e=0;e<12;e++)be(i,.05,.005,.008,0,.093,-.15+e*.016,t.blued,.001);$e(i,.024,.36,0,.025,-.38,t.blued,22);for(let e=0;e<14;e++)cd(i,.026,.004,0,.025,-.24-e*.02,t.park);$e(i,.012,.16,0,.025,-.64,t.blued,16),$e(i,.018,.06,0,.025,-.73,t.park,8),be(i,.13,.13,.15,0,-.1,-.03,t.polyTan,.012);for(let e=0;e<5;e++)be(i,.132,.006,.152,0,-.15+e*.025,-.03,t.poly,.002);for(let e=0;e<6;e++)$e(i,.005,.03,.04,.05,-.01+e*.011,t.brass,8).rotation.set(0,0,Math.PI/2);Rn(i,[[.04,-.01],[.08,-.01],[.1,-.12],[.065,-.125]],.034,t.poly,{bevel:.004}),co(i,.01,-.02,t),Rn(i,[[.12,.05],[.4,.04],[.4,-.08],[.36,-.09],[.12,-.01]],.05,t.poly,{bevel:.007}),hd(i,-.66,.08,.093,t);for(let e of[-1,1]){let n=$e(i,.005,.18,e*.03,-.05,-.62,t.steel,8);n.rotation.x=Math.PI/2+.35}return{muzzle:-.76,eject:-.02,pos:[.2,-.21,-.4],lz:-.3}}},ud;function bM(){if(ud)return ud;let i=ho(128,(t,e)=>{let n=e/2,s=t.createRadialGradient(n,n,0,n,n,n);s.addColorStop(0,"rgba(255,250,230,1)"),s.addColorStop(.25,"rgba(255,190,90,0.9)"),s.addColorStop(1,"rgba(255,90,20,0)"),t.fillStyle=s;for(let r=0;r<7;r++)t.save(),t.translate(n,n),t.rotate(r/7*6.283+Te(-.2,.2)),t.beginPath(),t.moveTo(0,-6),t.lineTo(n*Te(.7,1),0),t.lineTo(0,6),t.fill(),t.restore();t.beginPath(),t.arc(n,n,n*.35,0,7),t.fill()});return i.wrapS=i.wrapT=Jn,ud=new ye({map:i,color:new pt(3,2.2,1.2),blending:sn,transparent:!0,depthWrite:!1,side:nn,toneMapped:!1})}function a0(i,t=!0){let e=SM(),n=new Zt,s=(r0[i]||r0.rifle)(n,e);if(!t){let p=new Ce;return n.userData={muzzle:p,eject:p,base:new I},n}be(n,.05,.08,.075,0,-.065,.035,e.glove,.018).rotation.x=.25;for(let p=0;p<3;p++)be(n,.052,.016,.03,.002,-.04-p*.02,0,e.glove,.007);let r=new mt(new Qe(.034,.042,.32,16),e.sleeve);r.rotation.x=Math.PI/2-.25,r.position.set(.02,-.13,.22),n.add(r);let a=be(n,.055,.05,.09,i==="pistol"?-.018:-.028,i==="pistol"?-.07:-.03,s.lz,e.glove,.016),o=new mt(new Qe(.034,.042,.34,16),e.sleeve);o.rotation.set(Math.PI/2-.1,.35,0),o.position.set(-.1,-.12,s.lz+.22),n.add(o),n.traverse(p=>{p.isMesh&&(p.castShadow=!1)});let c=new Ce;c.position.set(0,i==="pistol"?.012:.022,s.muzzle),n.add(c);let l=new Ce;l.position.set(.04,.03,s.eject),n.add(l);let h=new Zt,d=bM();for(let p=0;p<2;p++){let x=new mt(new pn(.06,.16),d);x.rotation.set(Math.PI/2,p*Math.PI/2,0),x.position.z=-.07,h.add(x)}let u=new mt(new pn(.12,.12),d);h.add(u),h.position.copy(c.position),h.visible=!1,n.add(h);let f=0;return n.traverse(p=>{p.isMesh&&(f+=(p.geometry.index?p.geometry.index.count:p.geometry.attributes.position.count)/3)}),n.userData={muzzle:c,eject:l,flash:h,slide:n.userData.slide,pump:n.userData.pump,base:new I(...s.pos),tris:Math.round(f)},n.userData.base.z-=.1,n.userData.base.x-=.03,n.position.copy(n.userData.base),n.scale.setScalar(.9),n}var ke={pistol:{id:"pistol",name:"Dustdevil .45",dmg:30,rpm:380,auto:!1,mag:12,reserve:60,reload:1.25,spread:.004,pellets:1,kick:.01,shake:.12,price:0,head:3.2,snd:"pistol",range:90},smg:{id:"smg",name:"Rattler SMG",dmg:22,rpm:820,auto:!0,mag:32,reserve:160,reload:1.6,spread:.014,pellets:1,kick:.006,shake:.08,price:600,head:2.4,snd:"smg",range:80},shotgun:{id:"shotgun",name:"Sidewinder 12g",dmg:17,rpm:78,auto:!1,mag:6,reserve:42,reload:.5,perShell:!0,spread:.055,pellets:9,kick:.04,shake:.4,price:1200,head:2,snd:"shotgun",range:30},rifle:{id:"rifle",name:"Ridgeback AR",dmg:42,rpm:620,auto:!0,mag:30,reserve:150,reload:1.9,spread:.007,pellets:1,kick:.013,shake:.18,price:1800,head:2.6,snd:"rifle",range:120},lmg:{id:"lmg",name:"Hog Hammer LMG",dmg:40,rpm:700,auto:!0,mag:100,reserve:300,reload:3.8,spread:.012,pellets:1,kick:.012,shake:.2,price:0,crateOnly:!0,head:2.4,snd:"lmg",range:110}},uo=["smg","shotgun","rifle","lmg"],GE=new jt({color:2895669,metalness:.9,roughness:.34}),WE=new jt({color:5593439,metalness:.85,roughness:.28}),XE=new jt({color:4072982,metalness:0,roughness:.55}),qE=new jt({color:1626528,metalness:.4,roughness:.3,emissive:678469,emissiveIntensity:.8}),YE=new jt({color:12946539,roughness:.7}),ZE=new jt({color:4016698,roughness:.9}),JE=new jt({color:1776928,roughness:.8});function fo(i,t=!0){return a0(i,t)}var He=-24,Qc=i=>i>He?"A":"B";function o0(i,t="#18d1a0",e=512,n=256){let s=document.createElement("canvas");s.width=e,s.height=n;let r=s.getContext("2d");r.fillStyle="rgba(8,12,16,0.82)",r.fillRect(0,0,e,n),r.strokeStyle=t,r.lineWidth=6,r.strokeRect(8,8,e-16,n-16),r.textAlign="center",r.textBaseline="middle",i.forEach((o,c)=>{r.font=`${o.w||700} ${o.s}px system-ui, "Segoe UI", Arial, sans-serif`,r.fillStyle=o.c||"#fff",r.fillText(o.t,e/2,o.y)});let a=new en(s);return a.colorSpace=De,a.anisotropy=4,a}var po=class{constructor(t,e,n){this.scene=t,this.T=e,this.M=new $c(e),this.tier=n,this.colliders=[],this.windows=[],this.buys=[],this.lamps=[],this.dyn=[],this.fall=[],this.staticGroup=new Zt,this.root=new Zt,t.add(this.root),this.build(),this.batch()}addCol(t,e,n,s,r=3,a={}){let o={x0:t,x1:e,z0:n,z1:s,y0:a.y0||0,y1:r,...a};return this.colliders.push(o),o}box(t,e,n,s,r,a,o,c={}){let l=new mt(new ie(t,e,n),o);return l.position.set(s,r,a),l.castShadow=c.cast!==!1,l.receiveShadow=!0,(c.dynamic?this.root:this.staticGroup).add(l),l}place(t,e,n,s=0,r=!0){if(t.position.x+=e,t.position.z+=n,t.rotation.y=s,t.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),this.staticGroup.add(t),r&&t.userData.size){let[a,o,c]=t.userData.size;Math.abs(Math.sin(s))>.7&&([a,c]=[c,a]),this.addCol(e-a/2+.05,e+a/2-.05,n-c/2+.05,n+c/2-.05,o)}return t}build(){let{M:t,T:e,scene:n}=this;this.buildSky(),this.buildGround();let s=3.2,r=.4,a=(h,d,u,f=[],p=t.fence)=>this.wall("x",h,d,u,f,s,r,p),o=(h,d,u,f=[],p=t.fence)=>this.wall("z",h,d,u,f,s,r,p);a(24,-24,24,[{c:-10,id:"S1"},{c:11,id:"S2"}]),o(24,-24,24,[{c:-4,id:"E1",area:"A"}]),o(-24,-24,24,[{c:6,id:"W1",area:"A"}]),a(-24,-24,24,[{c:0,id:"DOOR",door:!0,w:6}]),o(24,-52,-24,[{c:-40,id:"E2",area:"B"}]),o(-24,-52,-24,[{c:-38,id:"W2",area:"B"}]),a(-52,-24,24,[{c:0,id:"N1",area:"B"}]);let c=(h,d,u,f)=>{let p=new mt(new pn(h,d),t.concrete);p.rotation.x=-Math.PI/2,p.position.set(u,.015,f),p.receiveShadow=!0,this.staticGroup.add(p)};c(48,48,0,0),c(48,28,0,-38),this.buildGate();let l=this.place.bind(this);l(Pi(t,6010272,{door:!0}),-9,-9,.2*0),l(Pi(t,14252330,{missing:!0,tilt:.04}),13,-10,Math.PI/2),l(xs(t,6197184),9,11,Math.PI/2),l(xs(t,14252330,15129792,{missing:!0}),-15,1,0),l(Pi(t,14733722),-4,16,Math.PI/2+0),l(Pi(t,11680302,{tilt:-.05}),19,16,0),l(xs(t,9087050,15129792),3,-14,Math.PI/2);for(let[h,d,u]of[[17,2,5],[-20,-5,4],[-3,-4,3],[-19,19,6],[21,-20,4]])l(ro(t,u),h,d);for(let[h,d,u]of[[5,19,3829413],[6.2,19.8,11680302],[4.4,20.6,9087050],[-1,-19,14252330],[.2,-20,3829413]])l(ao(t,u),h,d);l(Ci(t,1.1),-21,12),l(Ci(t,.9),-20.8,13.2),l(Ci(t,1.3),21,9),l(Ci(t,1),20.4,10.4),this.shack(18,-17,6,5),l(Pi(t,13619140,{missing:!0}),-12,-36,Math.PI/2),l(Pi(t,6010272,{tilt:.05}),14,-46,.3*0),l(xs(t,11680302,15129792),6,-35,0),l(xs(t,6010272,15129792,{tilt:.04}),-10,-47,Math.PI/2),l(Pi(t,13803834,{door:!0}),0,-43,Math.PI/2);for(let[h,d,u]of[[18,-30,5],[-20,-29,3],[19,-36,4],[-3,-30,4]])l(ro(t,u),h,d);for(let[h,d,u]of[[-19,-49,14252330],[-18,-50,3829413],[20,-50,11680302]])l(ao(t,u),h,d);l(Ci(t,1.2),21,-46),l(Ci(t,1),-21,-42),l(Ci(t,.9),20.6,-47.4);for(let[h,d,u,f]of[[-11,11,0,.6],[14,5,0,2.6],[-13,-12,1,-.5],[10,-19,0,3.4],[-8,-30,0,.3],[11,-40,1,3],[-4,-49,0,1.4]]){let p=Kc(this.M,!!u);p.position.set(h,0,d),p.rotation.y=f,p.traverse(g=>{g.isMesh&&(g.castShadow=!g.userData.bulb)}),p.updateMatrixWorld(!0),this.addCol(h-.2,h+.2,d-.2,d+.2,5);let x=p.userData.bulbPos.clone().applyMatrix4(p.matrixWorld);this.lamps.push({pos:x,teal:!!u,ph:Y(100)}),this.staticGroup.add(p)}this.wallBuy("smg",-14,He+.25,0),this.wallBuy("shotgun",23.75,-15,-Math.PI/2),this.wallBuy("rifle",-23.75,-30,Math.PI/2),this.buildCrate(-17.5,14.5),this.scenery(),this.buildLights()}wall(t,e,n,s,r,a,o,c){let{M:l}=this,h=p=>p.w||3.2,d=[...r].sort((p,x)=>p.c-x.c),u=n,f=(p,x)=>{if(x-p<.05)return;let g=x-p,m=(p+x)/2,S=Math.max(1,Math.ceil(g/8));for(let A=0;A<S;A++){let y=p+g*A/S,M=p+g*(A+1)/S;this.wseg(t,e,y,M,a,o,c)}};for(let p of d)f(u,p.c-h(p)/2),this.opening(t,e,p,a,o,c),u=p.c+h(p)/2;f(u,s)}wseg(t,e,n,s,r,a,o){let c=s-n,l=(n+s)/2;t==="x"?(this.box(c,r,a,l,r/2,e,o),this.addCol(n,s,e-a/2,e+a/2,r),this.box(.35,r+.5,.55,n,(r+.5)/2,e,this.M.fenceDark),this.box(c,.1,.12,l,r+.4,e,this.M.fenceDark)):(this.box(a,r,c,e,r/2,l,o),this.addCol(e-a/2,e+a/2,n,s,r),this.box(.55,r+.5,.35,e,(r+.5)/2,n,this.M.fenceDark),this.box(.12,.1,c,e,r+.4,l,this.M.fenceDark))}opening(t,e,n,s,r,a){let{M:o}=this,c=n.w||3.2;if(n.door){t==="x"&&(this.box(.5,s+.8,.7,n.c-c/2,(s+.8)/2,e,o.fenceDark),this.box(.5,s+.8,.7,n.c+c/2,(s+.8)/2,e,o.fenceDark)),this.doorInfo={c:n.c,z:e,w:c};return}let l=t==="x"?{x:0,z:e>0?1:-1}:{x:e>0?1:-1,z:0};t==="x"&&e===-52&&(l.z=-1);let h=t==="x"?n.c:e,d=t==="x"?e:n.c,u=.95,f=2.5,p=c,x=(D,L,U)=>t==="x"?[D,L,r]:[r,L,D],[g,m,S]=x(p,u,0);this.box(g,m,S,h,u/2,d,a);let[A,y,M]=x(p,s-f,0);this.box(A,y,M,h,(s+f)/2,d,a);let E=o.wood;for(let D of[-1,1]){let[L,U,N]=x(.2,f-u,0);this.box(t==="x"?.2:r+.12,f-u,t==="x"?r+.12:.2,t==="x"?h+D*(p/2-.1):h,(u+f)/2,t==="x"?d:d+D*(p/2-.1),E)}this.addCol(t==="x"?h-p/2:h-r/2,t==="x"?h+p/2:h+r/2,t==="x"?d-r/2:d-p/2,t==="x"?d+r/2:d+p/2,u,{bulletOnly:!1}),this.addCol(t==="x"?h-p/2:h-r/2,t==="x"?h+p/2:h+r/2,t==="x"?d-r/2:d-p/2,t==="x"?d+r/2:d+p/2,s,{y0:f,bulletOnly:!0}),this.addCol(t==="x"?h-p/2:h-r/2,t==="x"?h+p/2:h+r/2,t==="x"?d-r/2-.02:d-p/2,t==="x"?d+r/2+.02:d+p/2,s,{noBullet:!0});let C=[],v=Math.atan2(l.x,l.z);for(let D=0;D<6;D++){let L=new mt(new ie(p-.15,.2,.07),o.wood),U=new I(h+l.x*.23,u+.16+D*.255,d+l.z*.23);L.position.copy(U),L.rotation.set(0,v,Y(-.05,.05)),L.castShadow=!0,L.receiveShadow=!0,L.userData={home:U,rotZ:L.rotation.z,ry:v},this.root.add(L),C.push(L)}let T=new mt(new ie(t==="x"?.3:.06,.06,t==="x"?.06:.3),new ye({color:new pt(1.8,.3,.15),toneMapped:!1}));T.position.set(h-l.x*.3,2.85,d-l.z*.3),T.userData.noAO=!0,this.root.add(T),this.windows.push({id:n.id,area:n.area||(e>He&&t==="x"||e>0,"A"),c:new I(h,0,d),n:l,t:{x:-l.z,z:l.x},out:{x:h+l.x*1.5,z:d+l.z*1.5},in:{x:h-l.x*1.6,z:d-l.z*1.6},planks:C,count:6,attackers:0,cool:0,axis:t,lamp:T});let w=this.windows[this.windows.length-1];w.area=Qc(d)}removePlank(t){if(t.count<=0)return!1;let e=t.planks[t.count-1];return t.count--,e.userData.fall={vx:t.n.x*Y(1,3)+Y(-1,1),vy:Y(1,3),vz:t.n.z*Y(1,3)+Y(-1,1),t:0,rx:Y(-6,6),rz:Y(-6,6)},this.fall.push(e),!0}addPlank(t){if(t.count>=6)return!1;let e=t.planks[t.count];t.count++,e.userData.fall=null;let n=this.fall.indexOf(e);return n>=0&&this.fall.splice(n,1),e.visible=!0,e.position.copy(e.userData.home),e.rotation.set(0,e.userData.ry,e.userData.rotZ),!0}buildGate(){let{M:t}=this,e=this.doorInfo,n=t.fence,s=new Zt,r=new mt(new ie(e.w,3.4,.25),n);r.position.y=1.7,r.castShadow=r.receiveShadow=!0,s.add(r);for(let o=0;o<6;o++){let c=new mt(new ie(.5,3.4,.05),o%2?new jt({color:15251502,roughness:.6,metalness:.3}):t.fenceDark);c.position.set(-e.w/2+.3+o*1,1.7,.15),s.add(c)}s.position.set(e.c,0,e.z),this.root.add(s),this.door={mesh:s,open:!1,t:0,price:1250,col:this.addCol(e.c-e.w/2,e.c+e.w/2,e.z-.2,e.z+.2,3.4),pos:{x:e.c,z:e.z}};let a=new mt(new pn(7.5,1.9),new ye({map:this.T.sign,color:new pt(1.9,1.9,1.9),toneMapped:!1}));a.position.set(e.c,5,e.z+.45),this.staticGroup.add(a);for(let o of[-1,1])this.box(.18,4.4,.18,e.c+o*3.5,2.5,e.z+.4,t.fenceDark);this.signPos=new I(e.c,5,e.z+1)}shack(t,e,n,s){let{M:r}=this;this.box(n,3,s,t,1.5,e,r.fence),this.box(n+.5,.2,s+.5,t,3.1,e,r.fenceDark),this.addCol(t-n/2,t+n/2,e-s/2,e+s/2,3.2),this.box(1.4,2.1,.1,t-1.2,1.05,e+s/2+.05,r.wood,{cast:!1});let a=new mt(new pn(1.4,.9),new ye({color:new pt(2.6,1.7,.7),toneMapped:!1}));a.position.set(t+1.5,1.8,e+s/2+.03),this.staticGroup.add(a)}wallBuy(t,e,n,s){let r=ke[t],a=new Zt;a.position.set(e,1.7,n),a.rotation.y=s;let o=new mt(new pn(2.4,1.2),new ye({map:o0([{t:r.name.toUpperCase(),s:44,y:88,w:800},{t:"$"+r.price+"  \xB7  AMMO $"+Math.floor(r.price/2),s:36,y:168,c:"#ffd36b"}]),toneMapped:!1,color:new pt(.9,.9,.9)}));o.position.set(0,-.35,.04);let c=fo(t,!1);c.position.set(0,.35,.18),c.rotation.y=Math.PI/2,c.scale.setScalar(1.7),c.userData.base=null;let l=new mt(new ie(2.6,2.2,.08),this.M.fenceDark);l.position.set(0,.05,0),a.add(l,o,c),a.traverse(u=>{u.isMesh&&(u.castShadow=!1)}),this.root.add(a);let h=Math.sin(s),d=Math.cos(s);this.buys.push({id:t,price:r.price,pos:{x:e+h*.9,z:n+d*.9},name:r.name})}buildCrate(t,e){let{M:n}=this,s=new Zt;s.position.set(t,0,e),s.rotation.y=.5;let r=n.paint(2078874),a=new mt(new ie(1.3,.7,.8),r);a.position.y=.35,s.add(a);let o=new Zt;o.position.set(0,.7,-.4);let c=new mt(new ie(1.3,.2,.8),r);c.position.set(0,.1,.4),o.add(c),s.add(o);for(let f of[-.45,.45]){let p=new mt(new ie(.1,.92,.84),n.fenceDark);p.position.set(f,.46,0),s.add(p)}let l=new mt(new ie(.4,.06,.06),n.chrome);l.position.set(0,.8,.43),s.add(l);let h=new mt(new pn(.8,.4),new ye({map:o0([{t:"LUCKY",s:70,y:70,w:900,c:"#18ffb0"},{t:"TOOLBOX",s:62,y:150,w:900,c:"#fff"},{t:"950",s:52,y:215,c:"#ffd36b"}],"#18ffb0",384,256),toneMapped:!1,color:new pt(.9,.9,.9)}));h.position.set(0,.38,.41),s.add(h),s.traverse(f=>{f.isMesh&&!f.material.isMeshBasicMaterial&&(f.castShadow=!0,f.receiveShadow=!0)});let d=new mt(new Qe(.5,.65,9,16,1,!0),new pe({transparent:!0,depthWrite:!1,blending:sn,side:nn,uniforms:{c:{value:new pt(.1,1,.7)},k:{value:.35}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(1.-vy,2.2)*pow(f,2.5)*k); }"}));d.position.set(0,4.5,0),d.userData.noAO=!0,s.add(d),this.root.add(s),this.addCol(t-.8,t+.8,e-.8,e+.8,1);let u=new Zt;u.position.set(0,1.5,.1),s.add(u),this.crate={group:s,lid:o,hold:u,beam:d,pos:{x:t,z:e},price:950,state:"idle",t:0,weapon:null,shown:null,model:null,x:t,z:e}}buildSky(){let t=new pe({side:mn,depthWrite:!1,fog:!1,uniforms:{moonDir:{value:new I(-.55,.6,.58).normalize()}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vP; uniform vec3 moonDir;
        float h(vec3 p){ return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ vec3 d=normalize(vP); float y=clamp(d.y,-.2,1.);
          vec3 hor=vec3(.20,.12,.16), mid=vec3(.025,.045,.10), top=vec3(.004,.008,.03);
          vec3 c=mix(hor,mid,smoothstep(0.,.25,y)); c=mix(c,top,smoothstep(.2,.9,y)); c+=vec3(.5,.18,.1)*pow(max(0.,1.-abs(y)*4.),3.)*.35;
          vec3 g=floor(d*220.); float s=step(.9975,h(g))*smoothstep(.05,.3,y); c+=vec3(.9,.95,1.)*s*(.4+.4*h(g+3.))*0.8;
          float md=dot(d,moonDir); c+=vec3(.75,.85,1.)*smoothstep(.9992,.9996,md)*2.5; c+=vec3(.25,.35,.6)*pow(max(0.,md),60.)*.5+vec3(.1,.15,.3)*pow(max(0.,md),8.)*.25;
          gl_FragColor=vec4(c,1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.sky=new mt(new kn(500,32,16),t),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.sky.userData.noAO=!0,this.scene.add(this.sky),this.moonDir=t.uniforms.moonDir.value}buildGround(){let t=new mt(new pn(1200,1200),this.M.sand);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,this.scene.add(t),this.ground=t}scenery(){let{M:t}=this,e=this.staticGroup,n=(c,l)=>c>-30&&c<30&&l>-58&&l<30,s=t.sand.clone();s.map=t.sand.map.clone(),s.map.repeat.set(6,3),s.bumpMap=t.sand.bumpMap.clone(),s.bumpMap.repeat.set(6,3),s.color=new pt(12034436),s.bumpScale=1.5;let r,a=()=>r||(r=(()=>{let c=new kn(1,40,14,0,qe,0,Math.PI/2),l=c.attributes.position;for(let h=0;h<l.count;h++){let d=l.getX(h),u=l.getY(h),f=l.getZ(h),p=Math.atan2(f,d),x=u*(.75+.25*Math.sin(p*3+1)+.12*Math.sin(p*7));l.setXYZ(h,d*(1+.08*Math.sin(p*5)),Math.pow(Math.max(x,0),1.6),f)}return c.computeVertexNormals(),c})());for(let c=0;c<26;c++){let l=Y(qe),h=Y(60,190),d=Math.cos(l)*h,u=-14+Math.sin(l)*h,f=Math.min(Y(14,38),(h-48)/2.1);if(f<6)continue;let p=new mt(a(),s);p.scale.set(f*Y(1.2,2),f*Y(.12,.28),f*Y(1,1.6)),p.position.set(d,0,u),p.rotation.y=Y(3),p.receiveShadow=!0,e.add(p)}let o=t.flat(2762292,1,0);for(let c=0;c<12;c++){let l=c/12*qe+Y(-.2,.2),h=Y(230,330),d=Y(30,70),u=Y(25,60),f=new mt(new Qe(d*.55,d*.8,u,6),o);f.position.set(Math.cos(l)*h,u/2-2,-14+Math.sin(l)*h),f.rotation.y=Y(3),e.add(f)}for(let c=0;c<38;c++){let l,h,d=0;do{let f=Y(qe),p=Y(34,90);l=Math.cos(f)*p,h=-14+Math.sin(f)*p*.9}while(n(l,h)&&++d<20);let u=i0(t);u.position.set(l,0,h),u.rotation.y=Y(3),u.traverse(f=>{f.isMesh&&(f.castShadow=!0)}),e.add(u)}for(let c=0;c<40;c++){let l,h,d=0;do{let f=Y(qe),p=Y(30,110);l=Math.cos(f)*p,h=-14+Math.sin(f)*p*.9}while(n(l,h)&&++d<20);let u=s0(t,Y(.4,1.8));u.position.set(l,0,h),u.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0)}),e.add(u)}for(let c=0;c<9;c++){let l=Y(qe),h=Y(34,70),d=Math.cos(l)*h,u=-14+Math.sin(l)*h*.9;if(n(d,u))continue;let f=Math.random()<.35?n0(t,od(),15129792,{tilt:Y(-.08,.08)}):e0(t,od(),{tilt:Y(-.1,.1),missing:Math.random()<.5});f.position.set(d,0,u),f.rotation.y=Y(3),f.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.receiveShadow=!0)}),e.add(f)}}buildLights(){let t=this.scene;this.hemi=new Us(7309e3,3812386,.85),t.add(this.hemi),this.moon=new Fs(10335487,1.7),this.moon.castShadow=!0,this.moon.position.set(0,0,0),t.add(this.moon,this.moon.target);let e=this.moon.shadow;e.camera.left=e.camera.bottom=-34,e.camera.right=e.camera.top=34,e.camera.near=1,e.camera.far=140,e.bias=-4e-4,e.normalBias=.04,e.mapSize.set(2048,2048),this.lampPool=[];for(let s=0;s<7;s++){let r=new cs(16756838,95,30,1.7);t.add(r),this.lampPool.push(r)}this.halos=[],this.cones=[];let n=s=>new pe({transparent:!0,depthWrite:!1,blending:sn,side:nn,uniforms:{c:{value:s},k:{value:.22}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(vy,1.5)*pow(f,1.6)*k); }"});for(let s of this.lamps){let r=s.teal?new pt(.2,.9,.7):new pt(1,.62,.28),a=new li(new $n({map:this.T.glow,color:s.teal?new pt(.5,3,2.4):new pt(3,1.8,.7),blending:sn,depthWrite:!1,transparent:!0,fog:!1}));a.scale.setScalar(3.4),a.position.copy(s.pos),a.userData.noAO=!0,this.scene.add(a),this.halos.push(a);let o=new mt(new Gi(4.2,5,24,1,!0),n(r));o.position.copy(s.pos).add(new I(0,-2.5,0)),o.userData.noAO=!0,this.scene.add(o),this.cones.push(o),s.light=r}}setTier(t){this.tier=t;let e=[3,5,7][t];this.lampPool.forEach((s,r)=>s.visible=r<e),this.cones.forEach(s=>s.visible=t>0),this.moon.castShadow=t>0;let n=t===2?2048:1024;this.moon.shadow.mapSize.x!==n&&(this.moon.shadow.mapSize.set(n,n),this.moon.shadow.map?.dispose(),this.moon.shadow.map=null)}batch(){let t=this.staticGroup;t.updateMatrixWorld(!0);let e=new Map,n=[];t.traverse(s=>{if(!s.isMesh)return;if(s.userData.bulb||s.userData.noBatch){n.push(s);return}let r=s.material.uuid+(s.castShadow?"c":"n")+(s.receiveShadow?"r":"n"),a=e.get(r);a||(a={mat:s.material,cast:s.castShadow,rec:s.receiveShadow,geos:[]},e.set(r,a));let o=s.geometry.clone();o.applyMatrix4(s.matrixWorld);for(let c of Object.keys(o.attributes))["position","normal","uv"].includes(c)||o.deleteAttribute(c);a.geos.push(o)});for(let s of e.values()){let r=$p(s.geos,!1);if(!r){console.warn("merge failed");continue}let a=new mt(r,s.mat);a.castShadow=s.cast,a.receiveShadow=s.rec,a.frustumCulled=!1,this.root.add(a),s.geos.forEach(o=>o.dispose())}for(let s of n){if(s.userData.noBatch){let a=s.clone();a.matrixAutoUpdate=!1,a.matrix.copy(s.matrixWorld),a.matrixWorldNeedsUpdate=!0,this.root.add(a);continue}let r=new mt(s.geometry,s.material);r.applyMatrix4(s.matrixWorld),r.matrixAutoUpdate=!0,r.position.setFromMatrixPosition(s.matrixWorld),r.rotation.set(0,0,0),r.scale.setScalar(1),this.root.add(r)}this.staticGroup=null}resolve(t,e,n=!1){let s=!1;for(let r of this.colliders){if(r.bulletOnly||r.off)continue;let a=ze(t.x,r.x0,r.x1),o=ze(t.z,r.z0,r.z1),c=t.x-a,l=t.z-o,h=c*c+l*l;if(!(h>=e*e))if(s=!0,h>1e-8){let d=Math.sqrt(h),u=(e-d)/d;t.x+=c*u,t.z+=l*u}else{let d=t.x-r.x0,u=r.x1-t.x,f=t.z-r.z0,p=r.z1-t.z,x=Math.min(d,u,f,p);x===d?t.x=r.x0-e:x===u?t.x=r.x1+e:x===f?t.z=r.z0-e:t.z=r.z1+e}}return s}ray(t,e,n){let s=n,r=null,a=null;if(e.y<-1e-5){let o=-t.y/e.y;o>0&&o<s&&(s=o,r={x:0,y:1,z:0},a="ground")}for(let o of this.colliders){if(o.noBullet||o.off)continue;let c=0,l=s,h=-1,d=0,u=(f,p,x,g,m)=>{if(Math.abs(p)<1e-9)return f>=x&&f<=g;let S=(x-f)/p,A=(g-f)/p,y=-1;if(S>A){let M=S;S=A,A=M,y=1}return S>c&&(c=S,h=m,d=y),A<l&&(l=A),c<=l};u(t.x,e.x,o.x0,o.x1,0)&&u(t.y,e.y,o.y0,o.y1,1)&&u(t.z,e.z,o.z0,o.z1,2)&&c>0&&c<s&&(s=c,r={x:h===0?d:0,y:h===1?d:0,z:h===2?d:0},a="wall")}return r?{t:s,n:r,kind:a}:null}update(t,e,n){for(let l=this.fall.length-1;l>=0;l--){let h=this.fall[l],d=h.userData.fall;if(!d){this.fall.splice(l,1);continue}d.t+=t,d.vy-=9.8*t,h.position.x+=d.vx*t,h.position.y+=d.vy*t,h.position.z+=d.vz*t,h.rotation.x+=d.rx*t,h.rotation.z+=d.rz*t,h.position.y<.08&&(h.position.y=.08,d.vy=0,d.vx*=.5,d.vz*=.5),d.t>1.4&&(h.visible=!1,this.fall.splice(l,1))}let s=this.door;s.open&&s.t<1&&(s.t=Math.min(1,s.t+t/2.4),s.mesh.position.y=s.t*3.6,s.t>.5&&(s.col.off=!0));let r=n.x,a=n.z,o=this.lamps.map((l,h)=>({i:h,d:(l.pos.x-r)**2+(l.pos.z-a)**2})).sort((l,h)=>l.d-h.d);this.lampPool.forEach((l,h)=>{let d=this.lamps[o[h].i];l.position.copy(d.pos),l.color.copy(d.teal?new pt(.35,1,.8):new pt(1,.7,.4));let u=.85+.15*Math.sin(e*9+d.ph)*Math.sin(e*3.7+d.ph*2)+(Math.sin(e*31+d.ph)>.97?-.5:0);l.intensity=95*Math.max(.2,u)}),this.halos.forEach((l,h)=>{let d=Math.hypot(this.lamps[h].pos.x-r,this.lamps[h].pos.z-a);l.visible=d<70});let c=this.crate;c.beam.material.uniforms.k.value=.22+.1*Math.sin(e*2);for(let l of this.windows){if(!l.lamp)continue;let h=6-l.count,d=h<=0?.55+.08*Math.sin(e*2.2+l.c.x):.3+.7*Math.abs(Math.sin(e*(3.2+h)));l.lamp.material.color.setRGB(1.85*d,.22*d,.07*d)}c.model&&(c.model.rotation.y+=t*2,c.model.position.y=Math.sin(e*3)*.04),this.moon.position.set(r+this.moonDir.x*60,this.moonDir.y*60,a+this.moonDir.z*60),this.moon.target.position.set(r,0,a),this.moon.target.updateMatrixWorld(),this.sky.position.set(r,0,a)}};var th={junkyard:{id:"junkyard",name:"Junkyard",blurb:"The original yard",cap:[16,26],spawn:{x:0,z:12}},motel:{id:"motel",name:"Salt Motel",blurb:"Tight courtyard, close quarters",cap:[12,20],spawn:{x:0,z:0}},drivein:{id:"drivein",name:"Drive-In",blurb:"Wide open lot, big hordes",cap:[18,30],spawn:{x:0,z:18}}},fd=i=>th[i]||th.junkyard,dd=class i extends po{constructor(t,e,n,s){i.prototype._def=s,super(t,e,n)}lamps_(t){for(let[e,n,s,r]of t){let a=Kc(this.M,!!s);a.position.set(e,0,n),a.rotation.y=r,a.traverse(c=>{c.isMesh&&(c.castShadow=!c.userData.bulb)}),a.updateMatrixWorld(!0),this.addCol(e-.2,e+.2,n-.2,n+.2,5);let o=a.userData.bulbPos.clone().applyMatrix4(a.matrixWorld);this.lamps.push({pos:o,teal:!!s,ph:Y(100)}),this.staticGroup.add(a)}}floor(t,e,n,s){this.box(t,.03,e,n,0,s,this.M.concrete,{cast:!1})}build(){let t=this._def.L,e=this.M,n=3.2,s=.4;this.buildSky(),this.buildGround();let r=(u,f,p,x=[],g=e.fence)=>this.wall("x",u,f,p,x,n,s,g),a=(u,f,p,x=[],g=e.fence)=>this.wall("z",u,f,p,x,n,s,g),{w:o,s:c,n:l,wb:h}=t;r(c,-o,o,t.south),a(o,He,c,t.eastA),a(-o,He,c,t.westA),r(He,-o,o,[{c:0,id:"DOOR",door:!0,w:6}]),h!==o&&(r(He,o,h),r(He,-h,-o)),a(h,l,He,t.eastB),a(-h,l,He,t.westB),r(l,-h,h,t.north),this.floor(2*o,c-He,0,(c+He)/2),this.floor(2*h,He-l,0,(He+l)/2),this.buildGate();let d=this.place.bind(this);for(let[u,f,p,x,g,m]of t.props)d(u==="bus"?xs(e,f,15129792,m||{}):u==="beetle"?Pi(e,f,m||{}):u==="tires"?ro(e,f):u==="drum"?ao(e,f):Ci(e,f),p,x,g||0);for(let u of t.shacks||[])this.shack(...u);this.lamps_(t.lamps);for(let u of t.buys)this.wallBuy(...u);this.buildCrate(...t.crate),this.scenery(),this.buildLights()}},EM={motel:{w:16,s:6,n:-44,wb:18,south:[{c:-7,id:"S1"},{c:7,id:"S2"}],eastA:[{c:-10,id:"E1"}],westA:[{c:-14,id:"W1"}],eastB:[{c:-36,id:"E2"}],westB:[{c:-32,id:"W2"}],north:[{c:6,id:"N1"}],props:[["beetle",6010272,-9,-4,0],["bus",14252330,10,-12,Math.PI/2],["tires",4,-12,-16],["drum",3829413,12,2],["drum",11680302,13,3],["crate",1.1,-13,2],["beetle",13619140,-10,-34,Math.PI/2,{missing:!0}],["bus",9087050,8,-38,0],["tires",5,14,-28],["crate",1,-15,-41]],shacks:[[0,-10,8,3]],lamps:[[-14,-20,0,.2],[14,-20,1,2.9],[-8,2,0,.5],[9,-6,1,2.6],[-6,-18,0,0],[0,-34,1,1.2],[12,-42,0,3]],buys:[["smg",-10,He+.25,0],["shotgun",15.75,-4,-Math.PI/2],["rifle",-17.75,-36,Math.PI/2]],crate:[-12,-8]},drivein:{w:32,s:22,n:-50,wb:32,south:[{c:-18,id:"S1"},{c:0,id:"S2"},{c:18,id:"S3"}],eastA:[{c:6,id:"E1"},{c:-14,id:"E1b"}],westA:[{c:8,id:"W1"},{c:-12,id:"W1b"}],eastB:[{c:-38,id:"E2"}],westB:[{c:-40,id:"W2"}],north:[{c:-14,id:"N1"},{c:14,id:"N2"}],props:[["bus",6197184,-18,4,0],["bus",11680302,18,4,0],["beetle",14733722,-8,-6,0],["beetle",6010272,8,-6,0,{door:!0}],["beetle",14252330,0,8,Math.PI/2],["tires",5,-26,14],["tires",3,26,-16],["drum",14252330,24,16],["crate",1.2,-26,-16],["bus",9087050,-14,-38,Math.PI/2],["beetle",13619140,14,-36,0,{missing:!0}],["tires",4,0,-44],["crate",1,26,-46]],shacks:[[0,-16,10,4]],lamps:[[-24,18,0,.6],[24,18,0,2.6],[-20,-8,1,0],[20,-8,1,3],[0,0,0,1],[-20,-36,0,.3],[20,-44,1,3]],buys:[["smg",-14,He+.25,0],["shotgun",31.75,-4,-Math.PI/2],["rifle",-31.75,-30,Math.PI/2]],crate:[-24,4]}};function l0(i,t,e,n){let s=fd(n);return s.id==="junkyard"?new po(i,t,e):new dd(i,t,e,{L:EM[s.id]})}var c0={easy:{id:"easy",name:"Easy",count:.7,hp:.75,speed:.85,dmg:.6,drop:2,maxDrops:3,inter:10,spawnGap:1.3,brute:.5,startPts:750},medium:{id:"medium",name:"Medium",count:1,hp:1,speed:1,dmg:1,drop:1,maxDrops:2,inter:7,spawnGap:1,brute:1,startPts:500},hard:{id:"hard",name:"Hard",count:1.35,hp:1.3,speed:1.15,dmg:1.4,drop:.6,maxDrops:1,inter:5,spawnGap:.75,brute:1.6,startPts:400}};function pd(i,t=1){t=Math.max(1,Math.min(4,t|0));let e=[1,1.6,2.2,2.8][t-1];return{...i,count:i.count*e,hp:i.hp*(1+.1*(t-1))}}function md(i){return c0[i]||c0.medium}var Mn={torso:new ie(.52,.62,.3),hip:new ie(.46,.2,.28),leg:new ie(.2,.9,.22),arm:new ie(.15,.62,.16),head:new Ls(.27,1),eye:new ie(.07,.04,.03),jaw:new ie(.2,.08,.16),rag:new ie(.12,.28,.03),hand:new ie(.17,.14,.17)},h0=new ye({color:new pt(1.7,.22,.1),toneMapped:!1}),u0=new jt({color:7213080,roughness:.6}),AM=new jt({color:1708564,roughness:1}),RM=[6191698,6980704,5798498,7439722,5206104],CM=[8007471,3099258,5921322,3816004,9071146,2068344,11687466],PM=[2764602,3813156,2106922,2898474],gd=class{constructor(){this.root=new Zt,this.sk=new jt({roughness:.75,emissive:0}),this.sh=new jt({roughness:.95,emissive:0}),this.pa=new jt({roughness:.95,emissive:0});let t=(a,o,c,l,h)=>{let d=new mt(a,o);return d.position.set(c,l,h),d.castShadow=!0,d};this.pelvis=new Zt,this.pelvis.position.y=.95,this.root.add(this.pelvis),this.legL=new Zt,this.legL.position.set(-.13,0,0),this.legL.add(t(Mn.leg,this.pa,0,-.45,0)),this.legR=new Zt,this.legR.position.set(.13,0,0),this.legR.add(t(Mn.leg,this.pa,0,-.45,0)),this.pelvis.add(this.legL,this.legR,t(Mn.hip,this.pa,0,0,0)),this.upper=new Zt,this.pelvis.add(this.upper),this.upper.add(t(Mn.torso,this.sh,0,.36,0));let e=t(Mn.rag,this.sh,.12,0,.15);e.rotation.z=.2;let n=t(Mn.rag,this.sh,-.1,.02,-.15);n.rotation.z=-.15,this.upper.add(e,n);let s=t(Mn.rag,u0,-.1,.45,.155);s.scale.set(1.6,1,1),s.rotation.z=.5;let r=t(Mn.rag,u0,.14,.2,.156);r.scale.set(1,.7,1),this.upper.add(s,r),this.head=new Zt,this.head.position.set(0,.88,.03),this.head.add(t(Mn.head,this.sk,0,0,0)),this.head.add(t(Mn.eye,h0,-.1,.04,.24),t(Mn.eye,h0,.1,.04,.24),t(Mn.jaw,AM,0,-.14,.18)),this.head.scale.set(1.05,1.1,1),this.upper.add(this.head),this.armL=new Zt,this.armL.position.set(-.35,.58,0),this.armL.add(t(Mn.arm,this.sk,0,-.28,0),t(Mn.hand,this.sk,0,-.64,0)),this.armR=new Zt,this.armR.position.set(.35,.58,0),this.armR.add(t(Mn.arm,this.sk,0,-.28,0),t(Mn.hand,this.sk,0,-.64,0)),this.upper.add(this.armL,this.armR),this.root.visible=!1,this.state="dead",this.pos=this.root.position}},eh=class{constructor(t,e,n){this.world=e,this.scene=t,this.list=[],this.max=n>0?26:16;for(let s=0;s<this.max+4;s++){let r=new gd;t.add(r.root),this.list.push(r)}this.alive=0,this.t=0,this.hooks={}}setTier(t){this.max=t>0?26:16}reset(){for(let t of this.list)t.state="dead",t.root.visible=!1;this.alive=0}stats(t){let e=t<10?80+35*t:430*Math.pow(1.1,t-9),n=Math.min(5,1.5+t*.24);return{hp:e,sp:n}}spawn(t,e,n=!1){let s=this.list.find(c=>c.state==="dead"&&!c.root.visible);if(!s)return null;let r=this.stats(e),a=e>=3&&Math.random()<Math.min(.55,(e-2)*.09);s.brute=n,s.scale=n?1.38:Y(.94,1.06),s.root.scale.setScalar(s.scale),s.maxHp=s.hp=r.hp*(n?3.3:1),s.speed=r.sp*Y(.82,1.12)*(a?1.45:1)*(n?.78:1),s.speed=Math.min(s.speed,6),s.runner=a,s.dmg=n?44:22,s.value=n?150:60,s.sk.color.setHex(n?10121050:dn(RM)),s.sh.color.setHex(dn(CM)),s.pa.color.setHex(dn(PM));for(let c of[s.sk,s.sh,s.pa])c.emissive.setHex(0);s.win=t,s.state="approach",s.slot=Y(-1.2,1.2),s.phase=Y(qe),s.attackT=0,s.cool=0,s.stuck=0,s.stuckTot=0,s.side=1,s.flash=0,s.hitT=0,s.groanT=Y(1,4),s.dieT=0,s.climbT=0,s.chk=0,s.chkX=0,s.chkZ=0,s.limp=Math.random()<.3;let o=Y(4,9);return s.pos.set(t.out.x+t.n.x*o+t.t.x*Y(-3,3),0,t.out.z+t.n.z*o+t.t.z*Y(-3,3)),s.yaw=Math.atan2(-t.n.x,-t.n.z),s.root.rotation.set(0,s.yaw,0),s.root.visible=!0,s.pelvis.rotation.set(0,0,0),s.root.position.y=0,this.alive++,s}rayHit(t,e,n){let s=null;for(let r of this.list){if(r.state==="dead"||r.state==="dying")continue;let a=r.scale,o={x:r.pos.x,y:(r.climbY||0)+1.66*a,z:r.pos.z},c=.3*a,l=IM(t,e,o,c),h=null,d=t.x-r.pos.x,u=t.z-r.pos.z,f=e.x*e.x+e.z*e.z,p=.42*a;if(f>1e-8){let m=2*(d*e.x+u*e.z),S=d*d+u*u-p*p,A=m*m-4*f*S;if(A>=0){let y=Math.sqrt(A);for(let M of[(-m-y)/(2*f),(-m+y)/(2*f)])if(M>0){let E=t.y+e.y*M-(r.climbY||0);if(E>=0&&E<=1.45*a){h=M;break}}}}else d*d+u*u<p*p&&(h=.01);let x=null,g=!1;l!==null&&(h===null||l<=h+.15)?(x=l,g=!0):h!==null&&(x=h),x!==null&&x<n&&(!s||x<s.t)&&(s={z:r,t:x,head:g})}return s}damage(t,e,n,s,r){if(t.state==="dead"||t.state==="dying")return null;t.hp-=e,t.flash=.2,t.hitT=.22;let a=t.hp<=0;return a?(t.state="dying",t.dieT=0,this.alive--,t.dieDir=Y(-.4,.4)):t.state==="attack"||t.state,{killed:a,head:n}}killAll(){let t=[];for(let e of this.list)e.state!=="dead"&&e.state!=="dying"&&(e.hp=0,e.state="dying",e.dieT=0,e.dieDir=Y(-.4,.4),this.alive--,t.push(e));return t}update(t,e,n,s,r){let a=this.world;this.t=e;for(let c of a.windows)c.cool>0&&(c.cool-=t);let o=Qc(n.z);for(let c=0;c<this.list.length;c++){let l=this.list[c];if(l.state==="dead")continue;let h=l.scale;if(l.flash>0){l.flash-=t;let w=Math.max(0,l.flash/.2);for(let D of[l.sk,l.sh,l.pa])D.emissive.setRGB(1.15*w,.16*w,.05*w)}if(l.state==="dying"){l.dieT+=t;let w=Math.min(1,l.dieT/.55);l.pelvis.rotation.x=-w*1.5*(1-.1),l.pelvis.rotation.z=l.dieDir*w,l.pelvis.position.y=.95-w*.55,l.armL.rotation.x=-1.4+w*2.2,l.armR.rotation.x=-1.4+w*2.2,l.dieT>2.2&&(l.root.position.y=-(l.dieT-2.2)*.9),l.dieT>3.2&&(l.state="dead",l.root.visible=!1,l.root.position.y=0,l.pelvis.position.y=.95,l.pelvis.rotation.set(0,0,0));continue}if(l.groanT-=t,l.groanT<=0){l.groanT=Y(2.5,6);let w=l.pos.x-n.x,D=l.pos.z-n.z,L=Math.hypot(w,D);L<40&&r.groan?.(l,L)}let d=0,u=0,f=0,p=n.x,x=n.z;if(l.state==="approach"){let w=l.win,D=w.out.x+w.t.x*l.slot*.8,L=w.out.z+w.t.z*l.slot*.8,U=D-l.pos.x,N=L-l.pos.z,k=Math.hypot(U,N);k<.25?(l.state=w.count>0?"attack":"climb",l.climbT=0,l.cool=Y(.6,1.6)):(d=U/k,u=N/k,f=l.speed,l.pos.x+=d*f*t,l.pos.z+=u*f*t,l.yaw=mo(l.yaw,Math.atan2(d,u),Math.min(1,t*8)))}else if(l.state==="attack"){let w=l.win;l.yaw=mo(l.yaw,Math.atan2(-w.n.x,-w.n.z),Math.min(1,t*8)),l.cool-=t,w.count<=0?(l.state="climb",l.climbT=0):(l.attackT+=t,l.cool<=0&&w.count>0&&(l.cool=Y(1.2,2),w.cool<=0&&a.removePlank(w)&&(w.cool=Y(2.2,3.2),r.plank?.(w,!0))))}else if(l.state==="climb"){let w=l.win;l.climbT+=t/1.25;let D=Math.min(1,l.climbT),L=w.out.x+w.t.x*l.slot*.8,U=w.out.z+w.t.z*l.slot*.8,N=w.in.x+w.t.x*l.slot*.5,k=w.in.z+w.t.z*l.slot*.5;l.pos.x=L+(N-L)*D,l.pos.z=U+(k-U)*D,l.climbY=Math.sin(D*Math.PI)*.75,l.root.position.y=l.climbY,l.yaw=mo(l.yaw,Math.atan2(-w.n.x,-w.n.z),Math.min(1,t*8)),f=1.5,D>=1&&(l.state="chase",l.climbY=0,l.root.position.y=0)}else{let w=p,D=x,L=Qc(l.pos.z);if(L!==o&&s.open){let F=Math.abs(l.pos.x)<4&&Math.abs(l.pos.z-He)<2.5;w=0,D=F?o==="A"?He+4:He-4:He+(L==="A"?1.8:-1.8)}let U=w-l.pos.x,N=D-l.pos.z,k=Math.hypot(U,N)||1;U/=k,N/=k;let Z=Math.hypot(p-l.pos.x,x-l.pos.z);if(l.stuck>0){l.stuck-=t;let F=1.2*l.side,X=Math.cos(F),ht=Math.sin(F),Mt=U*X-N*ht,ee=U*ht+N*X;U=Mt,N=ee}let J=0,at=0;for(let F=0;F<this.list.length;F++){if(F===c)continue;let X=this.list[F];if(X.state!=="chase"&&X.state!=="attack")continue;let ht=l.pos.x-X.pos.x,Mt=l.pos.z-X.pos.z,ee=ht*ht+Mt*Mt;if(ee<.7&&ee>1e-4){let Qt=1/Math.sqrt(ee);J+=ht*Qt*(.9-Math.sqrt(ee)),at+=Mt*Qt*(.9-Math.sqrt(ee))}}U+=J*1.2,N+=at*1.2;let q=Math.hypot(U,N)||1;if(U/=q,N/=q,Z<1&&L===o?f=0:f=l.speed,l.cool-=t,Z<1.35&&L===o&&l.attackT<=0&&l.cool<=0&&(l.attackT=.01),l.attackT>0&&(l.attackT+=t,l.attackT>.42&&(Z<1.7&&L===o&&r.hitPlayer?.(l),l.attackT=0,l.cool=1.05),f*=.3),l.pos.x+=U*f*t,l.pos.z+=N*f*t,d=U,u=N,a.resolve(l.pos,.36*h),l.yaw=mo(l.yaw,Math.atan2(n.x-l.pos.x,n.z-l.pos.z)*(Z<4?1:0)+Math.atan2(U,N)*(Z<4?0:1),Math.min(1,t*9)),Z<4&&(l.yaw=mo(l.yaw,Math.atan2(p-l.pos.x,x-l.pos.z),Math.min(1,t*9))),l.chk+=t,l.chk>.5){let F=Math.hypot(l.pos.x-l.chkX,l.pos.z-l.chkZ);f>.5&&F<f*.5*.3?(l.stuck=1,l.side=Math.random()<.5?-1:1,l.stuckTot+=.5):l.stuckTot=Math.max(0,l.stuckTot-.25),l.chkX=l.pos.x,l.chkZ=l.pos.z,l.chk=0,l.stuckTot>6&&this.reroute(l)}}l.root.rotation.y=l.yaw,l.state!=="climb"&&(l.root.position.y=0);let g=f>.1?f:0;l.phase+=g*t*(l.runner?2.4:2.7)/Math.max(.6,h);let m=Math.sin(l.phase),S=Math.min(.8,.28+g*.13);l.legL.rotation.x=m*S,l.legR.rotation.x=-m*S*(l.limp?.35:1),l.hitT>0&&(l.hitT=Math.max(0,l.hitT-t));let A=l.hitT>0?l.hitT/.22:0,y=.1+Math.min(.28,g*.05)+(l.runner?.16:0)+(l.brute?.1:0)-A*.42;l.upper.rotation.x=y+Math.abs(m)*.035,l.upper.rotation.z=Math.sin(l.phase*.5)*.07*(l.limp?2:1),l.upper.rotation.y=Math.sin(l.phase*.5)*.16;let M=l.brute?-.58:-.74,E=Math.min(.62,.2+g*.1)*(l.runner?1.28:1),C,v;if(l.state==="climb")C=v=-1.5;else if(l.state==="attack")v=-.5+Math.sin(l.attackT*7)*.95,C=M+.12;else if(l.attackT>0){let w=Math.sin(Math.min(1,l.attackT/.42)*Math.PI);v=M-w*1.15,C=M+m*E*.3}else C=M-m*E,v=M+m*E*(l.limp?.4:1);l.armL.rotation.x=C+A*.3,l.armR.rotation.x=v+A*.3;let T=l.brute?.28:.16;l.armL.rotation.z=T,l.armR.rotation.z=-T,l.head.rotation.x=.08+Math.sin(l.phase*.5)*.05-A*.5,l.head.rotation.y=Math.sin(l.phase*.5)*.1,l.head.rotation.z=Math.sin(l.phase*.5+1)*.1+A*.15,l.pelvis.position.y=.95+Math.abs(m)*(g>.2?.05:.02)}}reroute(t){let e=this.world.windows.filter(s=>s.area==="A"||this.world.door.open),n=dn(e);t.win=n,t.state="approach",t.stuckTot=0,t.stuck=0,t.pos.set(n.out.x+n.n.x*3,0,n.out.z+n.n.z*3)}};function IM(i,t,e,n){let s=i.x-e.x,r=i.y-e.y,a=i.z-e.z,o=s*t.x+r*t.y+a*t.z,c=s*s+r*r+a*a-n*n,l=o*o-c;if(l<0)return null;let h=-o-Math.sqrt(l);return h>0?h:null}function mo(i,t,e){let n=((t-i+Math.PI)%qe+qe)%qe-Math.PI;return i+n*e}var rh={},vd;function DM(){let i=Yc(so.zombies),t=i.view;vd=i.meta;for(let e of vd){let n=new _e;n.setAttribute("position",Zc(t,e)),n.setAttribute("normal",Jc(t,e)),n.setAttribute("skinIndex",new de(t(Uint8Array,e.si),4)),n.setAttribute("skinWeight",new de(t(Uint8Array,e.sw),4,!0));let s=t(Uint16Array,e.idx);LM(s,n.attributes.position.array,e),n.setIndex(new de(s,1)),e.groups.forEach(r=>n.addGroup(r.start,r.count,r.slot>=0?r.slot:3)),n.computeBoundingSphere(),rh[e.tag]={g:n,m:e}}}function LM(i,t,e){let n=e.groups.filter(s=>s.slot<0);for(let s of n){let r=-9;for(let c=s.start;c<s.start+s.count;c++)r=Math.max(r,t[i[c]*3+1]);if(r<1.75||s.count<200)continue;s.hair=!0;let a=new Set;for(let c=s.start;c<s.start+s.count;c++)a.add(i[c]);let o=0;for(let c of a)o=Math.max(o,Math.abs(t[c*3]));if(o>.12){let c=.12/o;for(let l of a)t[l*3]*=c,t[l*3+2]=(t[l*3+2]+.01)*c-.01,t[l*3+1]=1.66+(t[l*3+1]-1.66)*(t[l*3+1]>1.66?.72:c)}for(let c=s.start;c<s.start+s.count;c+=3){let l=0,h=0;for(let d=0;d<3;d++)l+=t[i[c+d]*3+1]/3,h+=t[i[c+d]*3+2]/3;(h>.035&&l<1.715||h>.075&&l<1.74||l<1.6)&&(i[c+1]=i[c+2]=i[c])}}}var f0=4,NM=["near","mid","far"],d0=new Map,UM=(i,t)=>{let e=d0.get(i);if(!e){let n=new pt("#"+i).multiplyScalar(t?.85:.6);t&&n.offsetHSL(0,0,.04),e=new jt({color:n,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),d0.set(i,e)}return e},FM="float zh(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);} float zn(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(zh(i),zh(i+vec3(1,0,0)),f.x),mix(zh(i+vec3(0,1,0)),zh(i+vec3(1,1,0)),f.x),f.y),mix(mix(zh(i+vec3(0,0,1)),zh(i+vec3(1,0,1)),f.x),mix(zh(i+vec3(0,1,1)),zh(i+vec3(1,1,1)),f.x),f.y),f.z);}";function xd(i,t){let e=new jt({roughness:i===0?.7:.95,polygonOffset:i!==0,polygonOffsetFactor:-1.5,polygonOffsetUnits:-4});return e.userData.seed={value:t},e.onBeforeCompile=n=>{n.uniforms.zSeed=e.userData.seed,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vZ = position;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vZ; uniform float zSeed;
`+FM).replace("#include <color_fragment>",`#include <color_fragment>
      vec3 q = vZ*vec3(18.)+zSeed; float n = zn(q)*0.6+zn(q*2.3)*0.4;
      ${i===0?"diffuseColor.rgb *= mix(vec3(0.55,0.62,0.5), vec3(1.0), smoothstep(0.25,0.75,n)); float b = smoothstep(0.78,0.86,zn(q*0.7+3.)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.25,0.03,0.04), b*0.8);":"float m2 = zn(vZ*7.+zSeed)*0.65+zn(vZ*15.+zSeed)*0.35; float t = smoothstep(0.70,0.78,m2)*0.8; float e = smoothstep(0.62,0.70,m2)*0.5-t*0.5; diffuseColor.rgb *= 0.85+0.2*zn(q*2.); diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb*0.35, e); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.075,0.095,0.06)*mix(1.,0.6,zn(q*3.)), t); float bl = smoothstep(0.8,0.9,zn(q*0.5+7.)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.22,0.03,0.03), bl*0.7);"}`)},e.customProgramCacheKey=()=>"zmat"+i,e}var p0=1.1,nh=new I,ih=new pt,tn=new Ce,OM=new pt(1,.92,.75),sh=new Array(f0);function BM(){let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d"),e=t.createRadialGradient(16,16,1,16,16,16);e.addColorStop(0,"#fff"),e.addColorStop(.28,"rgba(255,255,255,.7)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32);let n=new en(i);return n.colorSpace=De,n}function zM(i){let t=i.geometry.attributes.position,e=i.geometry.attributes.skinIndex,n=i.geometry.attributes.skinWeight,s=i.skeleton.bones.findIndex(u=>u.name==="head"),r=i.skeleton.boneInverses[s],a=i.bindMatrix,o=new I,c=null,l=null,h=-1e9,d=-1e9;for(let u=0;u<t.count;u++){let f=0;for(let x=0;x<4;x++)e.getComponent(u,x)===s&&(f=Math.max(f,n.getComponent(u,x)));if(f<.45||(o.fromBufferAttribute(t,u).applyMatrix4(a).applyMatrix4(r),o.z<.015))continue;let p=o.z-Math.abs(Math.abs(o.x)-.032)*2.4-Math.abs(o.y-.012)*2.2;o.x<-.01&&p>h?(h=p,c=o.clone()):o.x>.01&&p>d&&(d=p,l=o.clone())}return c=c||new I(-.034,.02,.08),l=l||new I(.034,.02,.08),c.y+=.022,l.y+=.022,c.z+=.01,l.z+=.01,{L:c,R:l}}function kM(i,t,e){tn.position.set(0,-20,0),tn.scale.set(0,0,0),tn.rotation.set(0,0,0),tn.updateMatrix(),i.setMatrixAt(e*2,tn.matrix),i.setMatrixAt(e*2+1,tn.matrix),t.setMatrixAt(e,tn.matrix)}function HM(i,t){let e=i.eyeMesh,n=i.blob,s=i.list,r=i.cam,a=r&&r.quaternion,o=!1;for(let c=0;c<s.length;c++){let l=s[c];if(!(l.root.visible&&l.state!=="dead"&&l.eyeL)){l._eyeOn&&(l._eyeOn=!1,o=!0,kM(e,n,c));continue}l._eyeOn=!0,o=!0,l.bones.head.updateWorldMatrix(!0,!1);let d=l.bones.head.matrixWorld,f=.05*(1+.12*Math.sin(t*(l.runner?9:3.1)+l.phase))*(l.flash>0?1.35:1)*(l.brute?1.22:1);ih.setRGB(l.brute?.85:l.runner?1:.95,l.brute?.08:l.runner?.42:.16,.04),l.flash>0&&ih.lerp(OM,Math.min(.65,l.flash*2.5)),a&&tn.quaternion.copy(a),nh.copy(l.eyeL).applyMatrix4(d),tn.position.copy(nh),tn.scale.setScalar(f),tn.updateMatrix(),e.setMatrixAt(c*2,tn.matrix),e.setColorAt(c*2,ih),nh.copy(l.eyeR).applyMatrix4(d),tn.position.copy(nh),tn.updateMatrix(),e.setMatrixAt(c*2+1,tn.matrix),e.setColorAt(c*2+1,ih);let p=l.state==="dying"?Math.min(.85,l.dieT*.45):0;tn.position.set(l.pos.x,.04,l.pos.z),tn.rotation.set(-Math.PI/2,0,0),tn.scale.setScalar(Math.max(.01,l.scale*(l.brute?1.15:.92)*(1-p))),tn.updateMatrix(),n.setMatrixAt(c,tn.matrix)}o&&(e.instanceMatrix.needsUpdate=!0,e.instanceColor.needsUpdate=!0,n.instanceMatrix.needsUpdate=!0)}function m0(i){DM(),i.list.forEach((c,l)=>{let h=l%f0,d=rh[h+":near"].m.bones,u=d.map(x=>{let g=new _r;return g.name=x.n,g.position.fromArray(x.t),g});d.forEach((x,g)=>{x.p>=0&&u[x.p].add(u[g])});let f=new Zt;f.add(u[0]),f.scale.setScalar(rh[h+":near"].m.scale*p0),f.updateMatrixWorld(!0);let p=new pa(u);c.sk=xd(0,l*7.3),c.sh=xd(1,l*3.1),c.pa=xd(1,l*5.7+2),c.lods=NM.map(x=>{let g=rh[h+":"+x],m=[c.sk,c.sh,c.pa],S=g.m.groups.map(M=>M.slot>=0?[c.sk,c.sh,c.pa][M.slot]:UM(M.col,M.hair)),A=g.g.clone();A.clearGroups(),g.m.groups.forEach((M,E)=>A.addGroup(M.start,M.count,E));let y=new fa(A,S);return y.frustumCulled=!1,y.castShadow=!0,y.bind(p),y.visible=!1,f.add(y),y}),c.bones=Object.fromEntries(u.map(x=>[x.name,x])),c.hipY=c.bones.hips.position.y,c.root.add(f),c.pelvis.traverse(x=>{x.isMesh&&(x.visible=!1)}),c.variant=h,sh[h]||(sh[h]=zM(c.lods[0])),c.eyeL=sh[h].L,c.eyeR=sh[h].R});let t=i.list.length,e=new rs(new pn(1,1),new ye({map:BM(),color:16777215,transparent:!0,depthWrite:!1,blending:bi,toneMapped:!0,fog:!0,side:nn}),t*2);e.frustumCulled=!1,e.userData.noAO=!0,e.renderOrder=6,e.instanceColor=new ss(new Float32Array(t*6),3);let n=new ye({color:0,transparent:!0,opacity:.28,depthWrite:!1}),s=new rs(new _a(.7,14),n,t);s.frustumCulled=!1,s.userData.noAO=!0,s.renderOrder=1,s.receiveShadow=!1,i.scene.add(e,s),i.eyeMesh=e,i.blob=s;let r=i.setTier.bind(i);i.setTier=c=>{i.tier=c,n.opacity=c===0?.5:.26,r(c)};let a=i.update.bind(i),o=[];return i.update=(c,l,h,...d)=>{a(c,l,h,...d),o.length=0;for(let u of i.list)u.root.visible&&(u.d=Math.hypot(u.pos.x-h.x,u.pos.z-h.z),o.push(u));o.sort((u,f)=>u.d-f.d),o.forEach((u,f)=>{let p=f<2&&u.d<7?0:f<5&&u.d<16?1:2;u.lods.forEach((x,g)=>x.visible=g===p),VM(u)}),HM(i,l)},i.lodCounts=()=>{let c=[0,0,0];for(let l of i.list)l.root.visible&&l.lods.forEach((h,d)=>{h.visible&&c[d]++});return c},Object.fromEntries(vd.map(c=>[c.tag,c.tris]))}function VM(i){let t=i.bones;t.hips.position.y=i.hipY+(i.pelvis.position.y-.95)/p0,t.hips.rotation.set(i.pelvis.rotation.x,0,i.pelvis.rotation.z),t.chest.rotation.set(i.upper.rotation.x+.18+(i.brute?.1:0),i.upper.rotation.y,i.upper.rotation.z),t.spine.rotation.x=.1+(i.brute?.05:0),t.head.rotation.set(i.head.rotation.x+.15,.1+(i.head.rotation.y||0),i.head.rotation.z+.22),t.thighL.rotation.set(i.legL.rotation.x,0,.03),t.thighR.rotation.set(i.legR.rotation.x,0,-.03),t.shinL.rotation.x=Math.max(0,-i.legL.rotation.x)*1.25+.1,t.shinR.rotation.x=Math.max(0,-i.legR.rotation.x)*1.25+.1,t.upperArmL.rotation.set(i.armL.rotation.x,0,i.armL.rotation.z),t.upperArmR.rotation.set(i.armR.rotation.x,0,i.armR.rotation.z);let e=n=>-.4-Math.max(0,-n-.32)*.42;if(t.foreArmL.rotation.x=e(i.armL.rotation.x),t.foreArmR.rotation.x=e(i.armR.rotation.x),t.handL.rotation.x=.22,t.handR.rotation.x=.28,i.state==="dying"){let n=Math.min(1,i.dieT/.55);t.foreArmL.rotation.x=-.35-n,t.foreArmR.rotation.x=-.3-n}}var GM=i=>new pt(i);function Wn(i,t,e,n,s,r=0,a=0,o=0,c=1,l=1,h=1){i=i.index?i.toNonIndexed():i.clone();let d=new Kt().compose(new I(e,n,s),new In().setFromEuler(new Bn(r,a,o)),new I(c,l,h));i.applyMatrix4(d);let u=i.attributes.position.count,f=new Float32Array(u*3),p=GM(t);for(let x=0;x<u;x++){let g=.85+.3*Math.random();f[x*3]=p.r*g,f[x*3+1]=p.g*g,f[x*3+2]=p.b*g}i.setAttribute("color",new de(f,3));for(let x of Object.keys(i.attributes))["position","normal","color"].includes(x)||i.deleteAttribute(x);return i}function _d(i){let t=new _e;for(let e of["position","normal","color"]){let n=i.map(a=>a.attributes[e].array),s=new Float32Array(n.reduce((a,o)=>a+o.length,0)),r=0;for(let a of n)s.set(a,r),r+=a.length;t.setAttribute(e,new de(s,3))}return t.computeBoundingSphere(),t}var g0=7234898,x0=11049580,v0=3015944,_0=1966596,y0=4852236,WM=[1840914,3811866,5921362,2761760,7031338],Yi=(i,t,e)=>new ie(i,t,e),XM=(i,t)=>new Gi(i,t,4),M0=i=>new Ls(i,0);function qM(i,t){let e=[],n=i.c,s=i.r,r=n.z+s.z*.86,a=n.y-s.y*.42;for(let l=0;l<6;l++)e.push(Wn(Yi(s.x*.12,s.y*.11,.008),x0,(l-2.5)*s.x*.14,a+s.y*.04,r-Math.abs(l-2.5)*.004,0,0,Y(-.2,.2)));e.push(Wn(Yi(s.x*.9,s.y*.07,s.z*.25),v0,0,a+s.y*.1,r-s.z*.12)),e.push(Wn(M0(s.x*.38),y0,n.x+Y(-.3,.3)*s.x,n.y+s.y*.9,n.z+s.z*.15,0,0,0,1.2,.3,1)),e.push(Wn(Yi(s.x*.35,.005,.005),_0,n.x+s.x*.62,n.y-s.y*.1,n.z+s.z*.8,0,.6,1.1));let o=6+(Math.random()*5|0),c=dn(WM);if(t)for(let l=0;l<o;l++){let h=Y(0,Math.PI*2),d=Y(.35,1.2),u=Math.cos(h)*Math.cos(d),f=Math.sin(d),p=Math.sin(h)*Math.cos(d)-.25;e.push(Wn(XM(s.x*.12,s.y*Y(.35,.6)),c,n.x+u*s.x*.95,n.y+f*s.y*.95,n.z+p*s.z*.9,p*.9,0,-u*.9))}return _d(e)}function YM(i,t){let e=i.r,n=e.x*.9,s=e.z*.6,r=[Wn(Yi(n,e.y*.16,s),t,0,-e.y*.08,s/2),Wn(Yi(n*.82,e.y*.06,s*.8),v0,0,e.y*.01,s/2)];for(let a=0;a<5;a++)r.push(Wn(Yi(n*.13,e.y*.11,.008),x0,(a-2)*n*.17,e.y*.05,s-.006-Math.abs(a-2)*.004));return _d(r)}function ZM(i,t){let e=[Wn(M0(.06),_0,.035,i.y,i.z-.012,0,0,0,1.1,1.15,.25)];for(let n=0;n<4;n++){let s=i.y+.04-n*.026;e.push(Wn(new Qe(.0055,.0055,.085-n*.008,5),g0,.04,s,i.z+.002,0,0,Math.PI/2+.22))}if(e.push(Wn(Yi(.012,.1,.01),g0,-.006,i.y,i.z+.002)),e.push(Wn(Yi(.04,.02,.01),y0,.06,i.y-.07,i.z,0,0,.6)),t)for(let n=0;n<4;n++)e.push(Wn(Yi(Y(.03,.05),Y(.1,.18),.006),t,Y(-.1,.1),i.y-.2-Y(0,.04),i.z-.01,Y(-.1,.1),0,Y(-.25,.25)));return _d(e)}function JM(i,t){let e=i.geometry.attributes.position,n=i.geometry.attributes.skinIndex,s=i.geometry.attributes.skinWeight,r=i.skeleton.bones.findIndex(h=>h.name===t),a=i.skeleton.boneInverses[r],o=new I,c=new I(9,9,9),l=new I(-9,-9,-9);for(let h=0;h<e.count;h++){let d=0;for(let u=0;u<4;u++)n.getComponent(h,u)===r&&(d=Math.max(d,s.getComponent(h,u)));d<.6||(o.fromBufferAttribute(e,h).applyMatrix4(i.bindMatrix).applyMatrix4(a),c.min(o),l.max(o))}return{mn:c,mx:l,c:c.clone().add(l).multiplyScalar(.5),r:l.clone().sub(c).multiplyScalar(.5)}}function $M(i,t){let e=i.geometry.attributes.position,n=i.geometry.attributes.skinIndex,s=i.geometry.attributes.skinWeight,r=i.skeleton.bones.findIndex(d=>d.name===t),a=i.skeleton.boneInverses[r],o=new I,c=-1,l=0,h=0;for(let d=0;d<e.count;d++){let u=0;for(let f=0;f<4;f++)n.getComponent(d,f)===r&&(u=Math.max(u,s.getComponent(d,f)));u<.5||(o.fromBufferAttribute(e,d).applyMatrix4(i.bindMatrix).applyMatrix4(a),Math.abs(o.x)<.06&&(c=Math.max(c,o.z),l+=o.y,h++))}return{y:h?l/h:.05,z:c>0?c:.12}}var KM=[6191698,6980704,9081976,10133668,8022666,10525290,7232074,9207664],jM=[8007471,3099258,5921322,3816004,9071146,2068344,11687466,14209216,4860490,2771498,10127968],QM=[2764602,3813156,2106922,2898474,4604218,2766160];function S0(i){let t=new jt({vertexColors:!0,roughness:.85}),e={},n={};i.list.forEach(a=>{let o=a.lods[0];e[a.variant]=e[a.variant]||$M(o,"chest");let c=n[a.variant]=n[a.variant]||JM(o,"head");a.gHead=new mt(qM(c,Math.random()<.8),t),a.gJaw=new mt(YM(c,5660746),t),a.gJaw.position.set(c.c.x,c.c.y-c.r.y*.5,c.c.z+c.r.z*.25),a.gChest=new mt(ZM(e[a.variant],null),t),a.gChest.position.z=.004;for(let l of[a.gHead,a.gJaw,a.gChest])l.frustumCulled=!1,l.visible=!1,l.castShadow=!1;a.bones.head.add(a.gHead,a.gJaw),a.bones.chest.add(a.gChest),a.lodRoot=o.parent});let s=i.spawn.bind(i);i.spawn=(...a)=>{let o=s(...a);if(!o)return o;o.style=Math.random()*3|0,o.jawOpen=Y(.18,.45),o.ribs=Math.random()<.45,o.skull=Math.random()<.9,o.brute||o.sk.color.setHex(dn(KM)),o.sh.color.setHex(dn(jM)),o.pa.color.setHex(dn(QM));let c=o.brute?1.1:Y(.9,1.14),l=o.brute?1:Y(.92,1.08);return o.lodRoot&&(o.lodRoot.scale.set(c,l,Math.min(1.12,c)),o.lodRoot.position.y=0),o.twitch=Y(8,14),o};let r=i.update.bind(i);i.update=(a,o,c,...l)=>{r(a,o,c,...l);for(let h of i.list){let d=h.root.visible&&h.state!=="dead"&&(h.lods[0].visible||h.lods[1].visible);if(h.gHead.visible=h.gJaw.visible=d&&h.skull!==!1,h.gChest.visible=d&&!!h.ribs,!h.root.visible||h.state==="dead")continue;let u=h.bones,f=h.style|0,p=h.phase||0;h.gJaw.rotation.x=(h.jawOpen||.4)+Math.max(0,Math.sin(o*6+p))*.25+(h.attackT>0?.3:0),h.state!=="dying"&&(f===1?(u.upperArmL.rotation.set(.15+Math.sin(p)*.1,0,.12),u.foreArmL.rotation.x=-.1,u.head.rotation.z+=.35,u.shinR.rotation.x+=.35,u.chest.rotation.z+=.12):f===2?(u.head.rotation.y+=Math.sin(o*h.twitch)*.12*(Math.sin(o*1.7+p)>.4?1:0),u.chest.rotation.x+=.22,u.chest.rotation.z+=Math.sin(p*.5)*.22,u.spine.rotation.z=Math.sin(p*.5)*.12,u.head.rotation.x-=.25):u.spine.rotation.z=0)}}}var t1=100,e1=50;function b0(i){let{scene:t,zombies:e,P:n,G:s,cam:r}=i,a={on:!1,ws:null,id:null,room:null,token:null,snaps:[],remotes:new Map,slot:new Map,lastSend:0,over:!1,retry:0,url:null,name:"Survivor",status:"",alive:!0},o=(M,E,C)=>M+(E-M)*C,c=(M,E,C)=>{let v=((E-M+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return M+v*C},l=[1638320,16757575,7059711,16739285];function h(M,E){let C=new Zt,v=new jt({color:l[E%4],roughness:.6}),T=new mt(new va(.3,.9,4,10),v);T.position.y=.95;let w=new mt(new kn(.2,12,10),new jt({color:14267276}));w.position.y=1.68;let D=new mt(new ie(.08,.1,.5),new jt({color:546}));D.position.set(.25,1.35,-.3);let L=document.createElement("canvas");L.width=256,L.height=64;let U=L.getContext("2d");U.font="800 34px system-ui,sans-serif",U.textAlign="center",U.fillStyle="#"+l[E%4].toString(16).padStart(6,"0"),U.fillText(M,128,44);let N=new li(new $n({map:new en(L),transparent:!0,depthWrite:!1}));return N.scale.set(1.2,.3,1),N.position.y=2.2,C.add(T,w,D,N),C.userData={body:T,gun:D,name:M},t.add(C),C}function d(M){a.url=M.url,a.name=M.name||a.name,a.joinMsg=M.join,u()}function u(){let M;try{M=new WebSocket(a.url)}catch{return f("bad server url")}a.ws=M,a.status="connecting",M.onopen=()=>{a.retry=0,M.send(JSON.stringify(a.token?{t:"join",token:a.token}:{t:"join",name:a.name,...a.joinMsg}))},M.onmessage=E=>{let C;try{C=JSON.parse(E.data)}catch{return}p(C)},M.onclose=E=>{if(a.ws===M){if(a.ws=null,!a.on&&!a.token){i.onStatus?.("Could not connect to the co-op server");return}a.over||E.code===4001||(a.retry++<8?(a.status="reconnecting",i.onStatus?.("Connection lost, reconnecting\u2026"),setTimeout(u,Math.min(8e3,500*2**a.retry))):(i.onStatus?.("Disconnected from co-op server"),g(),i.onQuit?.()))}},M.onerror=()=>{}}function f(M){i.onStatus?.(M)}function p(M){if(M.t==="joined"){let E=!a.on;a.id=M.id,a.room=M.room,a.token=M.token,a.status="ok",E?(a.on=!0,a.over=!1,i.onJoined?.(M)):i.onStatus?.("Reconnected")}else if(M.t==="err")i.onStatus?.({"no-room":"No room with that code","room-full":"That room is full",full:"Server is full",rate:"Too many messages"}[M.m]||M.m),a.on||a.ws?.close();else if(M.t==="s"){M.recv=performance.now(),a.snaps.push(M),a.snaps.length>30&&a.snaps.shift();for(let E of M.ev||[])i.onEvent?.(E,E.p===a.id||E.by===a.id);M.over&&!a.over&&(a.over=!0,i.onOver?.(M))}else M.t==="hits"?i.onHits?.(M.h):M.t==="act"&&(a.lastAct=M,i.onAct?.(M))}function x(M){a.ws&&a.ws.readyState===1&&a.ws.send(JSON.stringify(M))}function g(){if(a.on=!1,a.ws)try{x({t:"leave"}),a.ws.close()}catch{}a.ws=null,a.token=null,a.snaps=[];for(let M of a.remotes.values())t.remove(M);a.remotes.clear(),a.slot.clear(),e.reset()}function m(M){let E=M-t1,C=a.snaps;if(!C.length)return null;let v=C.length-1;for(;v>0&&C[v-1].recv>E;)v--;let T=C[v],w=C[Math.max(0,v-1)];return w===T||T.recv<=w.recv?{s0:T,s1:T,k:1}:{s0:w,s1:T,k:Math.max(0,Math.min(1,(E-w.recv)/(T.recv-w.recv)))}}function S(M,E,C){let v=performance.now();v-a.lastSend>e1&&!n.dead&&(a.lastSend=v,x({t:"in",x:+n.x.toFixed(2),z:+n.z.toFixed(2),yaw:+n.yaw.toFixed(3),pitch:+n.pitch.toFixed(3)}));let T=m(v);if(!T){e.update(M,E,n,i.world.door,C);return}let{s0:w,s1:D,k:L}=T,U=a.snaps[a.snaps.length-1],N=U.p.find(F=>F[0]===a.id);if(N){let F=N[6];F<n.hp-.5&&i.onHurt?.(n.hp-F),n.hp=F,n.pts=N[7],n.kills=N[8],N[9]&&!n.dead?i.onDown?.():!N[9]&&n.dead&&i.onRevive?.(),Math.hypot(N[2]-n.x,N[3]-n.z)>2.5&&(n.x=N[2],n.z=N[3])}U.round!==s.round&&U.round>0&&i.onRound?.(U.round),s.mpPhase=U.phase;let k=i.world;U.win&&U.win.forEach((F,X)=>{let ht=k.windows[X];if(ht){for(;ht.count>F;)k.removePlank(ht),i.onPlank?.(ht,!0);for(;ht.count<F;)k.addPlank(ht),i.onPlank?.(ht,!1)}}),U.door&&!k.door.open&&(k.door.open=!0,i.onDoor?.()),U.crate&&i.onCrate?.(U.crate[0],U.crate[1],U.crate[2]===a.id),U.up&&i.syncUps?.(U.up),s.double=U.dbl?1:0,N&&(a.owned=N[11]);let Z=new Set,J=new Map(w.p.map(F=>[F[0],F]));D.p.forEach((F,X)=>{if(F[0]===a.id)return;Z.add(F[0]);let ht=a.remotes.get(F[0]);ht||(ht=h(F[1],X),a.remotes.set(F[0],ht));let Mt=J.get(F[0])||F;ht.position.set(o(Mt[2],F[2],L),0,o(Mt[3],F[3],L)),ht.rotation.y=c(Mt[4],F[4],L),ht.userData.body.rotation.x=F[9]?-1.4:0,ht.position.y=F[9]?.3:0,ht.visible=!0,ht.userData.body.material.opacity=F[10]?1:.4,ht.userData.body.material.transparent=!F[10]});for(let[F,X]of a.remotes)Z.has(F)||(t.remove(X),a.remotes.delete(F));let at=new Map(w.z.map(F=>[F[0],F])),q=new Set;for(let F of D.z){q.add(F[0]);let X=a.slot.get(F[0]);if(!X){if(X=e.spawn({out:{x:F[1],z:F[2]},n:{x:0,z:1},t:{x:1,z:0},count:0},Math.max(1,U.round),!!F[6]),!X)continue;a.slot.set(F[0],X),X.runner=!!F[7],X.mpX=F[1],X.mpZ=F[2],X.state="chase"}let ht=at.get(F[0])||F;X.mpX=o(ht[1],F[1],L),X.mpZ=o(ht[2],F[2],L),X.mpYaw=c(ht[3],F[3],L),X.mpClimb=F[5],F[8]&&X.attackT<=0&&(X.attackT=.01)}for(let[F,X]of a.slot)q.has(F)||(a.slot.delete(F),X.state!=="dead"&&X.state!=="dying"&&(X.state="dying",X.dieT=0,X.dieDir=Math.random()*.8-.4,i.onZDie?.(X)));for(let F of a.slot.values()){let X=Math.hypot(F.mpX-F.pos.x,F.mpZ-F.pos.z);F.pos.x=F.mpX,F.pos.z=F.mpZ,F.speed=0,F.cool=99,F.phase+=Math.min(.6,X*2.6),F.stuckTot=0}e.update(M,E,n,i.world.door,{...C,hitPlayer:()=>{}});for(let F of a.slot.values())F.pos.x=F.mpX,F.pos.z=F.mpZ,F.yaw=F.mpYaw,F.root.rotation.y=F.mpYaw,F.root.position.y=F.mpClimb||0,F.climbY=F.mpClimb||0;e.alive=a.slot.size}let A=new I;function y(M){let E=[...a.remotes.values()].filter(L=>L.position.y<.1&&L.visible);if(!E.length)return null;let C=Math.floor(performance.now()/6e3)%E.length,v=E[C],T=v.rotation.y,w=v.position.x+Math.sin(T)*3.4,D=v.position.z+Math.cos(T)*3.4;return A.set(w,2.6,D),M.position.lerp(A,.2),M.lookAt(v.position.x,1.4,v.position.z),v.userData.name}return{S:a,spectate:y,connect:d,stop:g,update:S,send:x,get on(){return a.on}}}function E0(i,t,e){let s=Math.min(2,window.devicePixelRatio||1),r=document.createElement("canvas");r.id="minimap",r.width=r.height=104*s,document.getElementById("hud").appendChild(r);let a=r.getContext("2d"),o={x0:1e9,x1:-1e9,z0:1e9,z1:-1e9};for(let S of i.colliders)S.y1>=2.5&&S.x1-S.x0+(S.z1-S.z0)>3&&(o.x0=Math.min(o.x0,S.x0),o.x1=Math.max(o.x1,S.x1),o.z0=Math.min(o.z0,S.z0),o.z1=Math.max(o.z1,S.z1));let c=3,l=Math.max(o.x1-o.x0,o.z1-o.z0)+c*2,h=104*s/l,d=(o.x0+o.x1)/2,u=(o.z0+o.z1)/2,f=S=>(S-d)*h+104*s/2,p=S=>(S-u)*h+104*s/2,x=document.createElement("canvas");x.width=x.height=104*s;let g=x.getContext("2d");g.fillStyle="rgba(200,230,240,0.55)";for(let S of i.colliders)S.y1>=1&&g.fillRect(f(S.x0),p(S.z0),Math.max(1,(S.x1-S.x0)*h),Math.max(1,(S.z1-S.z0)*h));let m=0;return function(A){if(m+=A,m<.08)return;m=0;let y=104*s;a.clearRect(0,0,y,y),a.drawImage(x,0,0),a.fillStyle="#ff3b4e";let M=2.4*s;for(let D of t.list)D.state!=="dead"&&D.root.visible&&(a.beginPath(),a.arc(f(D.pos.x),p(D.pos.z),M,0,6.283),a.fill());let E=f(e.x),C=p(e.z),v=-Math.sin(e.yaw),T=-Math.cos(e.yaw),w=6*s;a.fillStyle="#3cf0c0",a.strokeStyle="#04241c",a.lineWidth=s,a.beginPath(),a.moveTo(E+v*w,C+T*w),a.lineTo(E-v*w*.6-T*w*.6,C-T*w*.6+v*w*.6),a.lineTo(E-v*w*.6+T*w*.6,C-T*w*.6-v*w*.6),a.closePath(),a.fill(),a.stroke()}}var Ii={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Cn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},n1=new hs(-1,1,1,-1,0,1),yd=class extends _e{constructor(){super(),this.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new fe([0,2,0,0,2,0],2))}},i1=new yd,Di=class{constructor(t){this._mesh=new mt(i1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,n1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Nr=class extends Cn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof pe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=wn.clone(t.uniforms),this.material=new pe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Di(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var go=class extends Cn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ah=class extends Cn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var oh=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new ot);this._width=n.width,this._height=n.height,e=new Be(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Nr(Ii),this.copyPass.material.blending=Je,this.timer=new Ua}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}go!==void 0&&(a instanceof go?n=!0:a instanceof ah&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var xo=class extends Cn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new pt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var T0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ur=class i extends Cn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ot(t.x,t.y):new ot(256,256),this.clearColor=new pt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Be(r,a,{type:Xe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Be(r,a,{type:Xe,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Be(r,a,{type:Xe,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=T0;this.highPassUniforms=wn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ot(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=wn.clone(Ii.uniforms),this.blendMaterial=new pe({uniforms:this.copyUniforms,vertexShader:Ii.vertexShader,fragmentShader:Ii.fragmentShader,premultipliedAlpha:!0,blending:sn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new pt,this._oldClearAlpha=1,this._basic=new ye,this._fsQuad=new Di(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ot(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],c=a+1<t?e[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new pe({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new pe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Ur.BlurDirectionX=new ot(1,0);Ur.BlurDirectionY=new ot(0,1);var vo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ot},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Kt},cameraProjectionMatrixInverse:{value:new Kt},cameraWorldMatrix:{value:new Kt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new I(-1,-1,-1)},sceneBoxMax:{value:new I(1,1,1)}},vertexShader:`

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
		}`},_o={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},lh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function w0(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=s1(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=e[a],c=2*Math.PI*o/n,l=new I(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Mi(s,t,t);return r.wrapS=Pn,r.wrapT=Pn,r.needsUpdate=!0,r}function s1(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}var yo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Md(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ot},cameraProjectionMatrixInverse:{value:new Kt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Md(i,t,e){let n=r1(i,t,e),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function r1(i,t,e){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new I(Math.cos(r),Math.sin(r),a))}return n}var ch=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(t+e)*a,c=Math.floor(t+o),l=Math.floor(e+o),h=(3-Math.sqrt(3))/6,d=(c+l)*h,u=c-d,f=l-d,p=t-u,x=e-f,g,m;p>x?(g=1,m=0):(g=0,m=1);let S=p-g+h,A=x-m+h,y=p-1+2*h,M=x-1+2*h,E=c&255,C=l&255,v=this.perm[E+this.perm[C]]%12,T=this.perm[E+g+this.perm[C+m]]%12,w=this.perm[E+1+this.perm[C+1]]%12,D=.5-p*p-x*x;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[v],p,x));let L=.5-S*S-A*A;L<0?s=0:(L*=L,s=L*L*this._dot(this.grad3[T],S,A));let U=.5-y*y-M*M;return U<0?r=0:(U*=U,r=U*U*this._dot(this.grad3[w],y,M)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o,l=(t+e+n)*.3333333333333333,h=Math.floor(t+l),d=Math.floor(e+l),u=Math.floor(n+l),f=1/6,p=(h+d+u)*f,x=h-p,g=d-p,m=u-p,S=t-x,A=e-g,y=n-m,M,E,C,v,T,w;S>=A?A>=y?(M=1,E=0,C=0,v=1,T=1,w=0):S>=y?(M=1,E=0,C=0,v=1,T=0,w=1):(M=0,E=0,C=1,v=1,T=0,w=1):A<y?(M=0,E=0,C=1,v=0,T=1,w=1):S<y?(M=0,E=1,C=0,v=0,T=1,w=1):(M=0,E=1,C=0,v=1,T=1,w=0);let D=S-M+f,L=A-E+f,U=y-C+f,N=S-v+2*f,k=A-T+2*f,Z=y-w+2*f,J=S-1+3*f,at=A-1+3*f,q=y-1+3*f,F=h&255,X=d&255,ht=u&255,Mt=this.perm[F+this.perm[X+this.perm[ht]]]%12,ee=this.perm[F+M+this.perm[X+E+this.perm[ht+C]]]%12,Qt=this.perm[F+v+this.perm[X+T+this.perm[ht+w]]]%12,le=this.perm[F+1+this.perm[X+1+this.perm[ht+1]]]%12,K=.6-S*S-A*A-y*y;K<0?s=0:(K*=K,s=K*K*this._dot3(this.grad3[Mt],S,A,y));let et=.6-D*D-L*L-U*U;et<0?r=0:(et*=et,r=et*et*this._dot3(this.grad3[ee],D,L,U));let xt=.6-N*N-k*k-Z*Z;xt<0?a=0:(xt*=xt,a=xt*xt*this._dot3(this.grad3[Qt],N,k,Z));let zt=.6-J*J-at*at-q*q;return zt<0?o=0:(zt*=zt,o=zt*zt*this._dot3(this.grad3[le],J,at,q)),32*(s+r+a+o)}noise4d(t,e,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,d,u,f,p,x=(t+e+n+s)*c,g=Math.floor(t+x),m=Math.floor(e+x),S=Math.floor(n+x),A=Math.floor(s+x),y=(g+m+S+A)*l,M=g-y,E=m-y,C=S-y,v=A-y,T=t-M,w=e-E,D=n-C,L=s-v,U=T>w?32:0,N=T>D?16:0,k=w>D?8:0,Z=T>L?4:0,J=w>L?2:0,at=D>L?1:0,q=U+N+k+Z+J+at,F=a[q][0]>=3?1:0,X=a[q][1]>=3?1:0,ht=a[q][2]>=3?1:0,Mt=a[q][3]>=3?1:0,ee=a[q][0]>=2?1:0,Qt=a[q][1]>=2?1:0,le=a[q][2]>=2?1:0,K=a[q][3]>=2?1:0,et=a[q][0]>=1?1:0,xt=a[q][1]>=1?1:0,zt=a[q][2]>=1?1:0,Rt=a[q][3]>=1?1:0,Xt=T-F+l,ge=w-X+l,it=D-ht+l,ct=L-Mt+l,ut=T-ee+2*l,dt=w-Qt+2*l,gt=D-le+2*l,Gt=L-K+2*l,kt=T-et+3*l,qt=w-xt+3*l,Jt=D-zt+3*l,O=L-Rt+3*l,me=T-1+4*l,re=w-1+4*l,P=D-1+4*l,_=L-1+4*l,H=g&255,V=m&255,j=S&255,ft=A&255,vt=o[H+o[V+o[j+o[ft]]]]%32,tt=o[H+F+o[V+X+o[j+ht+o[ft+Mt]]]]%32,st=o[H+ee+o[V+Qt+o[j+le+o[ft+K]]]]%32,St=o[H+et+o[V+xt+o[j+zt+o[ft+Rt]]]]%32,Ot=o[H+1+o[V+1+o[j+1+o[ft+1]]]]%32,yt=.6-T*T-w*w-D*D-L*L;yt<0?h=0:(yt*=yt,h=yt*yt*this._dot4(r[vt],T,w,D,L));let _t=.6-Xt*Xt-ge*ge-it*it-ct*ct;_t<0?d=0:(_t*=_t,d=_t*_t*this._dot4(r[tt],Xt,ge,it,ct));let Dt=.6-ut*ut-dt*dt-gt*gt-Gt*Gt;Dt<0?u=0:(Dt*=Dt,u=Dt*Dt*this._dot4(r[st],ut,dt,gt,Gt));let Ht=.6-kt*kt-qt*qt-Jt*Jt-O*O;Ht<0?f=0:(Ht*=Ht,f=Ht*Ht*this._dot4(r[St],kt,qt,Jt,O));let $t=.6-me*me-re*re-P*P-_*_;return $t<0?p=0:($t*=$t,p=$t*$t*this._dot4(r[Ot],me,re,P,_)),27*(h+d+u+f+p)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}_dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}};var Fr=class i extends Cn{constructor(t,e,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=w0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Be(this.width,this.height,{type:Xe,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new pe({defines:Object.assign({},vo.defines),uniforms:wn.clone(vo.uniforms),vertexShader:vo.vertexShader,fragmentShader:vo.fragmentShader,blending:Je,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ia,this.normalMaterial.blending=Je,this.pdMaterial=new pe({defines:Object.assign({},yo.defines),uniforms:wn.clone(yo.uniforms),vertexShader:yo.vertexShader,fragmentShader:yo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new pe({defines:Object.assign({},_o.defines),uniforms:wn.clone(_o.uniforms),vertexShader:_o.vertexShader,fragmentShader:_o.fragmentShader,blending:Je}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new pe({uniforms:wn.clone(Ii.uniforms),vertexShader:Ii.vertexShader,fragmentShader:Ii.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Oa,blendDst:Bs,blendEquation:Kn,blendSrcAlpha:Fa,blendDstAlpha:Bs,blendEquationAlpha:Kn}),this.blendMaterial=new pe({uniforms:wn.clone(lh.uniforms),vertexShader:lh.vertexShader,fragmentShader:lh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:$l,blendSrc:Oa,blendDst:Bs,blendEquation:Kn,blendSrcAlpha:Fa,blendDstAlpha:Bs,blendEquationAlpha:Kn}),this._fsQuad=new Di(null),this._originalClearColor=new pt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Si,this.depthTexture.format=Ei,this.depthTexture.type=ps,this.normalRenderTarget=new Be(this.width,this.height,{minFilter:Ze,magFilter:Ze,type:Xe,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Md(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,s,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_renderOverride(t,e,n,s,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new ch,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){let c=a,l=o;s[(a*t+o)*4]=(e.noise(c,l)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(c+t,l)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(c,l+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(c+t,l+t)*.5+.5)*255}let r=new Mi(s,t,t,Tn,_n);return r.wrapS=Pn,r.wrapT=Pn,r.needsUpdate=!0,r}};Fr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Mo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var hh=class extends Cn{constructor(){super(),this.isOutputPass=!0,this.uniforms=wn.clone(Mo.uniforms),this.material=new Tr({name:Mo.name,uniforms:this.uniforms,vertexShader:Mo.vertexShader,fragmentShader:Mo.fragmentShader}),this._fsQuad=new Di(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ce.getTransfer(this._outputColorSpace)===ve&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ba?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===za?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ka?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Va?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ga?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ha&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var So=class{constructor(t,e,n){this.max=t,this.n=0,this.next=0;let s=this.geo=new _e;this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.siz=new Float32Array(t),s.setAttribute("position",new de(this.pos,3).setUsage(Qa)),s.setAttribute("aColor",new de(this.col,4).setUsage(Qa)),s.setAttribute("aSize",new de(this.siz,1).setUsage(Qa)),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grav=new Float32Array(t),this.drag=new Float32Array(t),this.s0=new Float32Array(t),this.s1=new Float32Array(t),this.c0=new Float32Array(t*4),this.uniforms={map:{value:n},uScale:{value:800}};let r=this.mat=new pe({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:e?sn:bi,vertexShader:`attribute float aSize; attribute vec4 aColor; varying vec4 vC; uniform float uScale;
        void main(){ vec4 mv = modelViewMatrix*vec4(position,1.); gl_Position = projectionMatrix*mv; gl_PointSize = clamp(aSize*uScale/max(-mv.z,0.1), 0., 300.); vC = aColor; }`,fragmentShader:`uniform sampler2D map; varying vec4 vC;
        void main(){ float a = texture2D(map, gl_PointCoord).a * vC.a; if(a<0.004) discard; gl_FragColor = vec4(vC.rgb, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        }`});this.points=new ma(s,r),this.points.frustumCulled=!1,this.points.renderOrder=5,this.points.userData.noAO=!0}emit(t,e,n,s,r,a,o,c,l,h,d,u,f,p=0,x=0){let g=this.next;this.next=(this.next+1)%this.max,this.pos[g*3]=t,this.pos[g*3+1]=e,this.pos[g*3+2]=n,this.vel[g*3]=s,this.vel[g*3+1]=r,this.vel[g*3+2]=a,this.life[g]=this.maxLife[g]=o,this.s0[g]=c,this.s1[g]=l,this.grav[g]=p,this.drag[g]=x,this.c0[g*4]=h,this.c0[g*4+1]=d,this.c0[g*4+2]=u,this.c0[g*4+3]=f}update(t){let{pos:e,vel:n,life:s,maxLife:r,col:a,siz:o,c0:c}=this;for(let l=0;l<this.max;l++){if(s[l]<=0){o[l]=0,a[l*4+3]=0;continue}if(s[l]-=t,s[l]<=0){o[l]=0,a[l*4+3]=0;continue}let h=1-s[l]/r[l],d=l*3,u=Math.max(0,1-this.drag[l]*t);n[d]*=u,n[d+1]=n[d+1]*u-this.grav[l]*t,n[d+2]*=u,e[d]+=n[d]*t,e[d+1]+=n[d+1]*t,e[d+2]+=n[d+2]*t,e[d+1]<.02&&this.grav[l]>0&&(e[d+1]=.02,n[d]*=.4,n[d+2]*=.4,n[d+1]*=-.25),o[l]=this.s0[l]+(this.s1[l]-this.s0[l])*h;let f=h<.1?h*10:1-(h-.1)/.9;a[l*4]=c[l*4],a[l*4+1]=c[l*4+1],a[l*4+2]=c[l*4+2],a[l*4+3]=c[l*4+3]*f}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0}clear(){this.life.fill(0)}},uh=class{constructor(t,e,n){this.scene=t,this.tier=n;let s=n>0?1:.4;this.soft=new So(Math.floor(900*s)+100,!1,e.glow),this.add=new So(Math.floor(900*s)+100,!0,e.glow),t.add(this.soft.points,this.add.points),this.tracers=[];let r=new ie(1,1,1);for(let a=0;a<24;a++){let o=new mt(r,new ye({color:new pt(5,3.6,1.4),transparent:!0,blending:sn,depthWrite:!1,toneMapped:!1}));o.visible=!1,o.userData.noAO=!0,o.userData.t=0,t.add(o),this.tracers.push(o)}this.tn=0,this.maxCas=n>0?80:16,this.cas=new rs(new Qe(.009,.009,.034,6),new jt({color:14066743,metalness:1,roughness:.3}),this.maxCas),this.cas.frustumCulled=!1,this.cas.castShadow=!1,t.add(this.cas),this.casData=Array.from({length:this.maxCas},()=>({t:0,p:new I,v:new I,r:new Bn,w:new I})),this.casNext=0,this._m=new Kt,this._q=new In,this._s=new I(1,1,1);for(let a=0;a<this.maxCas;a++)this._m.makeScale(0,0,0),this.cas.setMatrixAt(a,this._m)}setScale(t,e){let n=t/(2*Math.tan(e*Math.PI/360));this.soft.uniforms.uScale.value=n,this.add.uniforms.uScale.value=n}tracer(t,e,n=.012){let s=this.tracers[this.tn++%this.tracers.length],r=t.distanceTo(e);r<.5||(s.position.copy(t).lerp(e,.5),s.lookAt(e),s.scale.set(n,n,r),s.visible=!0,s.userData.t=.06,s.material.opacity=1)}casing(t,e){let n=this.casData[this.casNext++%this.maxCas];n.t=2.5,n.p.copy(t),n.v.copy(e),n.r.set(Y(qe),Y(qe),Y(qe)),n.w.set(Y(-30,30),Y(-30,30),Y(-30,30))}blood(t,e,n,s=1){let r=this.tier>0?1:.5;n=Math.ceil(n*r);for(let a=0;a<n;a++){let o=Y(.6,3.2)*s;this.soft.emit(t.x,t.y,t.z,e.x*o+Y(-1,1),e.y*o+Y(-.2,1.4),e.z*o+Y(-1,1),Y(.35,.8),Y(.12,.2)*s,Y(.45,.8)*s,Y(.55,.9),Y(.02,.07),Y(.04,.12),Y(.35,.65),4,2.5)}for(let a=0;a<Math.ceil(n*.6);a++){let o=Y(1.5,5)*s;this.soft.emit(t.x,t.y,t.z,e.x*o+Y(-1.5,1.5),e.y*o+Y(0,2.5),e.z*o+Y(-1.5,1.5),Y(.5,1),.05,.04,.6,0,.03,.9,11,.4)}}sparks(t,e,n){n=Math.ceil(n*(this.tier>0?1:.5));for(let s=0;s<n;s++){let r=Y(2,7);this.add.emit(t.x,t.y,t.z,e.x*r+Y(-2,2),e.y*r+Y(-1,2.5),e.z*r+Y(-2,2),Y(.2,.5),.07,.015,4,Y(1.6,2.6),.5,1,9,.8)}}dust(t,e,n,s=[.45,.36,.26]){n=Math.ceil(n*(this.tier>0?1:.5));for(let r=0;r<n;r++)this.soft.emit(t.x,t.y,t.z,e.x*Y(.3,1.5)+Y(-.5,.5),e.y*Y(.2,1)+Y(0,.6),e.z*Y(.3,1.5)+Y(-.5,.5),Y(.6,1.3),.2,Y(.8,1.4),s[0],s[1],s[2],.35,-.2,1.8)}smoke(t,e,n=2){for(let s=0;s<n;s++)this.soft.emit(t.x,t.y,t.z,e.x*1.2+Y(-.2,.2),e.y*1.2+Y(.1,.5),e.z*1.2+Y(-.2,.2),Y(.5,1),.05,.28,.55,.55,.58,.25,-.4,2)}flash(t,e){this.add.emit(t.x,t.y,t.z,e.x*1,e.y*1,e.z*1,.06,.45,.8,5,3.4,1.4,1,0,0);for(let n=0;n<3;n++)this.add.emit(t.x,t.y,t.z,e.x*Y(3,9)+Y(-2,2),e.y*Y(3,9)+Y(-2,2),e.z*Y(3,9)+Y(-2,2),Y(.08,.18),.1,.02,4,2.2,.6,1,2,1)}glowBurst(t,e,n,s,r=24,a=4){for(let o=0;o<r;o++){let c=Y(qe),l=Y(-.6,1),h=Y(.4,1)*a;this.add.emit(t.x,t.y,t.z,Math.cos(c)*h,l*h,Math.sin(c)*h,Y(.5,1.1),.18,.02,e,n,s,1,2,1.2)}}update(t){this.soft.update(t),this.add.update(t);for(let n of this.tracers)n.visible&&(n.userData.t-=t,n.material.opacity=Math.max(0,n.userData.t/.06),n.userData.t<=0&&(n.visible=!1));let e=!1;for(let n=0;n<this.maxCas;n++){let s=this.casData[n];if(s.t<=0)continue;e=!0,s.t-=t,s.v.y-=9.8*t,s.p.addScaledVector(s.v,t),s.p.y<.02&&(s.p.y=.02,s.v.y*=-.35,s.v.x*=.6,s.v.z*=.6,s.w.multiplyScalar(.5)),s.r.x+=s.w.x*t,s.r.y+=s.w.y*t,s.r.z+=s.w.z*t;let r=Math.min(1,s.t*2);this._q.setFromEuler(s.r),this._s.setScalar(s.t>0?r:0),this._m.compose(s.p,this._q,this._s),this.cas.setMatrixAt(n,this._m),s.t<=0&&(this._m.makeScale(0,0,0),this.cas.setMatrixAt(n,this._m))}(e||this._anyBefore)&&(this.cas.instanceMatrix.needsUpdate=!0),this._anyBefore=e}reset(){this.soft.clear(),this.add.clear();for(let t of this.casData)t.t=0;for(let t of this.tracers)t.visible=!1}},bo=class{constructor(t,e,n={}){this.o=Object.assign({R:22,y0:.2,y1:6,size:.06,alpha:.2,col:[.9,.75,.55],additive:!0,speed:1},n),this.ps=new So(e,this.o.additive,t.glow),this.n=e,this.R=this.o.R,this.t=0;for(let s=0;s<e;s++)this.ps.pos[s*3]=Y(-this.R,this.R),this.ps.pos[s*3+1]=Y(this.o.y0,this.o.y1),this.ps.pos[s*3+2]=Y(-this.R,this.R);this.ps.update=s=>this.upd(s),this.points=this.ps.points,this.center={x:0,z:0}}upd(t){let e=this.ps,n=this.o;this.t+=t;let s=this.center;for(let r=0;r<this.n;r++){let a=r*3,o=n.speed;e.pos[a]+=(Math.sin(this.t*.3+r)*.25+.35)*t*o,e.pos[a+1]+=Math.sin(this.t*.4+r*1.7)*.06*t*o,e.pos[a+2]+=Math.cos(this.t*.25+r*.7)*.2*t*o,e.pos[a]-s.x>this.R?e.pos[a]-=this.R*2:e.pos[a]-s.x<-this.R&&(e.pos[a]+=this.R*2),e.pos[a+2]-s.z>this.R?e.pos[a+2]-=this.R*2:e.pos[a+2]-s.z<-this.R&&(e.pos[a+2]+=this.R*2),e.siz[r]=n.size*(1+r%3*.4),e.col[r*4]=n.col[0],e.col[r*4+1]=n.col[1],e.col[r*4+2]=n.col[2],e.col[r*4+3]=n.alpha*(.6+.4*(r%4/3))}e.geo.attributes.position.needsUpdate=!0,e.geo.attributes.aColor.needsUpdate=!0,e.geo.attributes.aSize.needsUpdate=!0}},a1={uniforms:{tDiffuse:{value:null},uTime:{value:0},uDamage:{value:0},uVig:{value:.55},uGrain:{value:.07},uSat:{value:1.1},uAberr:{value:.6},uRes:{value:new ot(1,1)},uLow:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime,uDamage,uVig,uGrain,uSat,uAberr,uLow; uniform vec2 uRes; varying vec2 vUv;
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
    }`},dh=class{constructor(t,e,n,s){this.r=t,this.scene=e,this.camera=n,this.viewScene=s,this.mode="direct",this.w=1,this.h=1,this.pr=1}build(t){if(this.mode=t,this.composer&&(this.composer.dispose?.(),this.composer=null),t==="direct")return;let e=new Be(this.w,this.h,{type:Xe,samples:t==="full"?0:4}),n=this.composer=new oh(this.r,e);if(n.setPixelRatio?.(this.pr),n.setSize(this.w,this.h),n.addPass(new xo(this.scene,this.camera)),t==="full"){let r=this.gtao=new Fr(this.scene,this.camera,this.w*this.pr,this.h*this.pr);r.output=Fr.OUTPUT.Default,r.blendIntensity=1,r.updateGtaoMaterial({radius:.7,distanceExponent:1.5,thickness:1.5,scale:1.2,samples:10,distanceFallOff:1,screenSpaceRadius:!1}),r.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,radiusExponent:1,rings:2,samples:8});let a=r._overrideVisibility.bind(r);r._overrideVisibility=()=>{a(),this.scene.traverse(o=>{o.userData.noAO&&o.visible&&(o.visible=!1,r._visibilityCache.push(o))})},n.addPass(r)}let s=new xo(this.viewScene,this.camera);s.clear=!1,s.clearDepth=!0,n.addPass(s),this.bloom=new Ur(new ot(this.w,this.h),.42,.55,.9),n.addPass(this.bloom),n.addPass(new hh),this.grade=new Nr(a1),this.grade.uniforms.uRes.value.set(this.w*this.pr,this.h*this.pr),n.addPass(this.grade)}setSize(t,e,n){this.w=t,this.h=e,this.pr=n,this.composer&&(this.composer.setPixelRatio(n),this.composer.setSize(t,e),this.gtao?.setSize(t*n,e*n),this.grade.uniforms.uRes.value.set(t*n,e*n))}render(t,e,n,s){if(!this.composer){let a=this.r;a.autoClear=!1,a.clear(),a.render(this.scene,this.camera),a.clearDepth(),a.render(this.viewScene,this.camera),a.autoClear=!0;return}let r=this.grade.uniforms;r.uTime.value=e,r.uDamage.value=n,r.uLow.value=s,this.composer.render(t)}};var fh=class{constructor(){this.ctx=null,this.muted=!1,this.lastGroan=0,this.lastTick=0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.muted?0:.8;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,n.attack.value=.003,n.release.value=.2,this.master.connect(n),n.connect(e.destination);let s=e.createBuffer(1,e.sampleRate*2,e.sampleRate),r=s.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=Math.random()*2-1;this.noise=s;let a=e.sampleRate*1.8,o=e.createBuffer(2,a,e.sampleRate);for(let c=0;c<2;c++){let l=o.getChannelData(c);for(let h=0;h<a;h++)l[h]=(Math.random()*2-1)*Math.pow(1-h/a,3.2)}this.verb=e.createConvolver(),this.verb.buffer=o,this.verbIn=e.createGain(),this.verbIn.gain.value=.35,this.verbIn.connect(this.verb),this.verb.connect(this.master),this.startAmbient()}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.8,this.ctx.currentTime,.03)}get ok(){return this.ctx&&!this.muted&&this.ctx.state==="running"}out(t=0,e=.3){let n=this.ctx,s=n.createGain(),r=s;if(n.createStereoPanner){let o=n.createStereoPanner();o.pan.value=ze(t,-1,1),s.connect(o),r=o}r.connect(this.master);let a=n.createGain();return a.gain.value=e,r.connect(a),a.connect(this.verbIn),s}nz(t,e,n,s,r,a,o,c=1){let l=this.ctx,h=l.createBufferSource();h.buffer=this.noise,h.loop=!0;let d=l.createBiquadFilter();d.type=n,d.Q.value=c,d.frequency.setValueAtTime(s,t),d.frequency.exponentialRampToValueAtTime(Math.max(20,r),t+e);let u=l.createGain();u.gain.setValueAtTime(a,t),u.gain.exponentialRampToValueAtTime(8e-4,t+e),h.connect(d),d.connect(u),u.connect(o),h.start(t,Y(1)),h.stop(t+e+.05)}tone(t,e,n,s,r,a,o,c=.003){let l=this.ctx,h=l.createOscillator();h.type=n,h.frequency.setValueAtTime(s,t),h.frequency.exponentialRampToValueAtTime(Math.max(10,r),t+e);let d=l.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.linearRampToValueAtTime(a,t+c),d.gain.exponentialRampToValueAtTime(8e-4,t+e),h.connect(d),d.connect(o),h.start(t),h.stop(t+e+.05)}shot(t){if(!this.ok)return;let e=this.ctx,n=e.currentTime,s=this.out(0,t==="shotgun"||t==="lmg"?.5:.3),r={pistol:[.13,2600,.7,150,.9,.55],smg:[.09,3400,.5,190,.7,.45],shotgun:[.34,1800,1,85,1.2,.9],rifle:[.16,2200,.8,120,1,.7],lmg:[.2,1900,.9,95,1.2,.8]}[t]||[.12,2500,.7,150,1,.6];this.nz(n,r[0],"lowpass",r[1],220,r[2],s,.7),this.nz(n,.025,"highpass",3e3,6e3,.6,s),this.tone(n,r[0]*1.2,"sine",r[3],r[3]*.3,r[4]*.9,s),this.tone(n,.05,"square",r[3]*4,r[3]*1.5,.15,s)}click(t=0,e=3200,n=.35,s=0){if(!this.ok)return;let r=this.ctx.currentTime+t,a=this.out(s,.1);this.nz(r,.03,"bandpass",e,e*.7,n,a,3),this.tone(r,.025,"square",e*.3,e*.2,.05,a)}reload(t){if(!this.ok)return;let e=t==="lmg"?3.4:t==="rifle"?1.7:t==="smg"?1.4:1;this.click(.12,2400,.4),this.click(e*.55,1800,.5),this.click(e*.8,3600,.45),t!=="pistol"&&this.click(e*.92,1400,.5)}pump(){this.click(0,900,.6),this.click(.18,1500,.55)}shell(){this.click(0,2e3,.45)}empty(){this.click(0,1500,.3)}groan(t=0,e=.5,n=1,s=1){if(!this.ok)return;let r=this.ctx,a=r.currentTime;if(a-this.lastGroan<.09)return;this.lastGroan=a;let o=a,c=this.out(t,.45),l=Y(70,105)*n,h=r.createOscillator();h.type="sawtooth",h.frequency.setValueAtTime(l*1.25,o),h.frequency.linearRampToValueAtTime(l,o+s*.3),h.frequency.linearRampToValueAtTime(l*.7,o+s);let d=r.createOscillator();d.frequency.value=Y(5,9);let u=r.createGain();u.gain.value=6,d.connect(u),u.connect(h.frequency);let f=r.createBiquadFilter();f.type="bandpass",f.Q.value=5,f.frequency.setValueAtTime(Y(450,700),o),f.frequency.linearRampToValueAtTime(Y(900,1300),o+s*.6);let p=r.createBiquadFilter();p.type="lowpass",p.frequency.value=1600;let x=r.createGain();x.gain.setValueAtTime(1e-4,o),x.gain.linearRampToValueAtTime(e*.5,o+s*.15),x.gain.exponentialRampToValueAtTime(.001,o+s),h.connect(f),f.connect(p),p.connect(x),x.connect(c),h.start(o),d.start(o),h.stop(o+s+.05),d.stop(o+s+.05),this.nz(o,s*.8,"bandpass",900,500,e*.15,c,2)}zhit(t=0,e=!1){if(!this.ok)return;let n=this.ctx.currentTime,s=this.out(t,.2);this.nz(n,.09,"lowpass",700,120,.5,s),this.tone(n,.1,"sine",120,50,.4,s),e&&this.tone(n,.08,"triangle",900,500,.12,s)}zdie(t=0,e=.4){if(!this.ok)return;this.groan(t,e,.75,.7);let n=this.ctx.currentTime+.15,s=this.out(t,.25);this.nz(n,.25,"lowpass",500,60,.6,s),this.tone(n,.3,"sine",90,35,.5,s)}tick(t){if(!this.ok)return;let e=this.ctx.currentTime,n=this.out(0,0);this.tone(e,.05,"square",t?900:1500,t?600:1300,t?.12:.07,n)}cash(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.2);this.tone(t,.12,"triangle",1250,1250,.22,e),this.tone(t+.07,.25,"triangle",1880,1880,.22,e),this.nz(t,.05,"highpass",5e3,8e3,.15,e)}deny(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,0);this.tone(t,.22,"sawtooth",130,90,.2,e),this.tone(t+.1,.22,"sawtooth",110,80,.2,e)}hurt(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.2);this.nz(t,.18,"lowpass",600,90,.9,e),this.tone(t,.25,"sine",80,40,.8,e),this.tone(t,.2,"sawtooth",220,110,.12,e)}heart(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,0);this.tone(t,.14,"sine",62,38,.7,e),this.tone(t+.18,.14,"sine",56,34,.5,e)}plank(t){if(!this.ok)return;let e=this.ctx.currentTime,n=this.out(0,.3);this.nz(e,t?.16:.08,"bandpass",t?500:800,250,.7,n,2),this.tone(e,.1,"triangle",220,90,.4,n),t&&this.nz(e+.03,.12,"highpass",1500,3e3,.3,n)}repair(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.2);this.nz(t,.07,"bandpass",1100,600,.6,e,2),this.tone(t,.08,"square",300,120,.15,e),this.tone(t+.1,.1,"triangle",1500,1500,.1,e)}door(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.5);this.nz(t,2.2,"lowpass",900,150,.7,e,1),this.tone(t,2.2,"sawtooth",55,42,.2,e,.3);for(let n=0;n<5;n++)this.click(.2+n*.35,700+n*120,.7);this.nz(t+2,.4,"lowpass",400,60,.9,e)}boom(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.7);this.nz(t,2.4,"lowpass",2400,50,1.4,e,.7),this.tone(t,1.6,"sine",90,24,1.3,e),this.tone(t+.05,.8,"sawtooth",50,25,.3,e)}power(t){if(!this.ok)return;let e=this.ctx.currentTime,n=this.out(0,.4);(t==="nuke"?[220,277,330,440]:t==="double"?[392,494,587,784]:[330,440,554,659]).forEach((r,a)=>{this.tone(e+a*.07,.4,"triangle",r,r,.2,n),this.tone(e+a*.07,.4,"sine",r*2,r*2,.08,n)})}medkit(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.5);[523,659,784,1047].forEach((n,s)=>{this.tone(t+s*.08,.5,"sine",n,n,.2,e),this.tone(t+s*.08,.5,"triangle",n*2,n*2,.05,e)}),this.tone(t,.9,"sine",300,600,.12,e,.1)}spawnPower(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.5);this.tone(t,.7,"sine",600,1200,.25,e,.05),this.tone(t+.1,.7,"sine",900,1800,.12,e,.05)}round(t){if(!this.ok)return;let e=this.ctx,n=e.currentTime,s=this.out(0,.8);[55,82.4,98,130.8].forEach((a,o)=>{let c=e.createOscillator();c.type="sawtooth",c.frequency.value=a;let l=e.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(200,n),l.frequency.linearRampToValueAtTime(1400,n+1.1),l.frequency.linearRampToValueAtTime(150,n+3.2);let h=e.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.linearRampToValueAtTime(.16,n+.9),h.gain.exponentialRampToValueAtTime(.001,n+3.4),c.connect(l),l.connect(h),h.connect(s),c.start(n),c.stop(n+3.5)}),[440,415,392,330,294].forEach((a,o)=>{this.tone(n+.5+o*.32,1.3,"sine",a,a,.14,s,.01),this.tone(n+.5+o*.32,1.3,"sine",a*2.01,a*2.01,.04,s,.01)}),this.tone(n,.5,"sine",70,28,.9,s),this.nz(n,.35,"lowpass",700,70,.5,s)}over(){if(!this.ok)return;let t=this.ctx,e=t.currentTime,n=this.out(0,.9);[110,130.8,164.8].forEach(s=>{this.tone(e,3.6,"sawtooth",s,s*.5,.12,n,.4)}),this.tone(e,1.5,"sine",60,25,1,n),this.nz(e,1.2,"lowpass",900,60,.7,n)}jingle(t=4){if(!this.ok)return;let e=this.ctx.currentTime,n=this.out(0,.5),s=[523,659,784,659,587,740,880,740];for(let r=0;r<t*4;r++){let a=s[r%s.length]*(r>8?1.12:1);this.tone(e+r*.2,.32,"triangle",a,a,.1,n,.005)}this.nz(e,.4,"bandpass",600,300,.4,n)}open(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.4);this.nz(t,.5,"bandpass",500,900,.4,e,4),this.tone(t,.5,"sawtooth",120,220,.1,e)}startAmbient(){let t=this.ctx,e=t.createGain();e.gain.value=.5,e.connect(this.master);let n=t.createBufferSource();n.buffer=this.noise,n.loop=!0;let s=t.createBiquadFilter();s.type="bandpass",s.Q.value=.8,s.frequency.value=380;let r=t.createGain();r.gain.value=.07;let a=t.createOscillator();a.frequency.value=.11;let o=t.createGain();o.gain.value=.045,a.connect(o),o.connect(r.gain);let c=t.createOscillator();c.frequency.value=.07;let l=t.createGain();l.gain.value=140,c.connect(l),l.connect(s.frequency),n.connect(s),s.connect(r),r.connect(e),n.start(),a.start(),c.start();let h=t.createOscillator();h.type="sawtooth",h.frequency.value=36;let d=t.createBiquadFilter();d.type="lowpass",d.frequency.value=90;let u=t.createGain();u.gain.value=.07,h.connect(d),d.connect(u),u.connect(e),h.start();let f=t.createOscillator();f.type="sine",f.frequency.value=4300;let p=t.createGain();p.gain.value=0;let x=t.createOscillator();x.type="square",x.frequency.value=28;let g=t.createGain();g.gain.value=.004,x.connect(g),g.connect(p.gain);let m=t.createOscillator();m.frequency.value=.3;let S=t.createGain();S.gain.value=.003,m.connect(S),S.connect(p.gain),f.connect(p),p.connect(e),f.start(),x.start(),m.start()}};var Pe=null;await Kp();var Do=200,o1=4.5,l1=.38*Do,Lo=.4,L0=.5,N0=20,U0=.5,c1=40,rt=i=>document.getElementById(i),qn=new URLSearchParams(location.search),ln=qn.has("touch")||matchMedia("(pointer:coarse)").matches&&"ontouchstart"in window||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);document.body.classList.toggle("touch",ln);var Ut=new fh;try{Ut.muted=localStorage.getItem("vwz_mute")==="1"}catch{}var Ss=rt("c"),Nn=new Vc({canvas:Ss,antialias:!ln,powerPreference:"high-performance",preserveDrawingBuffer:qn.has("test")});Nn.toneMapping=zs;Nn.toneMappingExposure=1.05;Nn.outputColorSpace=De;Nn.shadowMap.type=Os;var cn=new Is,h1=3812412;cn.fog=new ca(h1,.026);var Ed=ln?76:72,Ve=new un(Ed,1,.05,700);Ve.rotation.order="YXZ";cn.add(Ve);var Li=qn.get("quality")||(()=>{try{return localStorage.getItem("vwz_q")||"auto"}catch{return"auto"}})(),Xn=Li==="high"?2:Li==="medium"?1:Li==="low"||ln?0:2,zr=Zp(ln?256:512),Ui=fd(qn.get("map")||(()=>{try{return localStorage.getItem("vwz_map")}catch{return null}})()),Un=pd(md(qn.get("mode")||(()=>{try{return localStorage.getItem("vwz_mode")}catch{return null}})()),1),ne=l0(cn,zr,Xn,Ui.id),we=new uh(cn,zr,Xn),Zi=new bo(zr,260,{R:20,y0:.3,y1:6,size:.07,alpha:.22});cn.add(Zi.points);var ys=new bo(zr,46,{R:55,y0:.4,y1:2.2,size:5.5,alpha:.045,col:[.55,.5,.62],additive:!1,speed:.7});cn.add(ys.points);var Ge=new eh(cn,ne,Xn);window.__hd=m0(Ge);S0(Ge);Ge.cam=Ve;var A0,u1=i=>(A0||(A0=E0(ne,Ge,R)))(i),_h=new Is,Br=new dh(Nn,cn,Ve,_h);{let i=new Dr(Nn),t=new Is,e=new mt(ne.sky.geometry,ne.sky.material.clone());e.scale.setScalar(.12),t.add(e);let n=i.fromScene(t,0,.1,100);cn.environment=n.texture,cn.environmentIntensity=.45,_h.environment=n.texture,_h.environmentIntensity=.9,i.dispose()}var di=new Na(14674687,40,55,.46,.75,1.25);di.position.set(.16,-.1,-.1);di.target.position.set(.16,-.1,-10);Ve.add(di,di.target);di.shadow.mapSize.set(1024,1024);di.shadow.camera.near=.3;di.shadow.camera.far=40;di.shadow.bias=-6e-4;di.shadow.normalBias=.03;var vs=new cs(16758886,0,20,2);Ve.add(vs);vs.position.set(.15,-.05,-3.2);var fi=new mt(new Gi(3.4,14,28,1,!0),new pe({transparent:!0,depthWrite:!1,blending:sn,side:nn,uniforms:{c:{value:new pt(.75,.85,1)},k:{value:.05}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(vy,1.2)*pow(f,2.)*k); }"}));fi.geometry.translate(0,-7,0);fi.geometry.rotateX(-Math.PI/2);fi.position.set(.16,-.1,-.2);fi.userData.noAO=!0;fi.renderOrder=6;Ve.add(fi);var Ms=new Zt;Ms.matrixAutoUpdate=!1;_h.add(Ms);var d1=new Us(12175615,4864556,1.5),Td=new Fs(16773341,2.2),Sh=new cs(16758886,0,3,2);Td.position.set(1.5,2,1);Ms.add(d1,Td,Td.target,Sh);Sh.position.set(.15,-.05,-.9);var Co={},Ni=new li(new $n({map:zr.glow,color:new pt(6,4,1.6),blending:sn,depthWrite:!1,transparent:!0,fog:!1}));Ni.scale.setScalar(.3);Ni.visible=!1;Ni.userData.noAO=!0;function f1(i){i.querySelectorAll("[data-w]").forEach(t=>{t.style.width=t.dataset.w+"%"})}function p1(i){if(!Co[i]){let t=fo(i);t.visible=!1,Ms.add(t),Co[i]=t}return Co[i]}var R={x:0,z:12,yaw:0,pitch:0,vx:0,vz:0,hp:Do,maxHp:Do,lastHit:-99,pts:500,kills:0,heads:0,bob:0,rP:0,rY:0,shake:0,dmg:0,flashlight:!0,slots:[],cur:0,fireCd:0,reloadT:0,reloadTot:0,switchT:0,kick:0,mv:0,sprint:!1,heat:0,dead:!1,deadT:0,sx:0,sy:0},Q={state:"menu",time:0,runTime:0,round:0,toSpawn:0,spawnT:0,interT:0,phase:"wait",drops:0,lastDrop:-99,kills:0,double:0,powers:[],ups:[],repairT:0,healBeat:0,lastMed:-99,orbit:0,menuSpawn:0,flashT:0,muzzleT:0},se={f:0,s:0,l:0,r:0,fire:!1,reload:!1,interact:!1,interactEdge:!1,sprint:!1},yh=i=>({id:i,mag:ke[i].mag,reserve:ke[i].reserve}),bs=()=>R.slots[R.cur];function bh(i){Xn=i;let t=window.devicePixelRatio||1,e=i===2?Math.min(t,1.75):i===1?Math.min(t,1.25):ze(t*.7,.6,1);Nn.setPixelRatio(e),Br.pr=e,Nn.shadowMap.enabled=i>0,Nn.shadowMap.needsUpdate=!0,Br.build(["direct","bloom","full"][i]),Fo(),ne.setTier(i),Ge.setTier(i),Ge.max=Ui.cap[i>0?1:0],we.tier=i,Zi.points.visible=i>0,ys.points.visible=!0,ys.o.alpha=i===0?.03:.045,fi.visible=i>0&&R.flashlight,di.castShadow=i===2;for(let n of Ge.list)n.root.traverse(s=>{s.isMesh&&(s.castShadow=i>0)});cn.traverse(n=>{n.material&&!Array.isArray(n.material)&&(n.material.needsUpdate=!0)}),document.body.classList.toggle("lowq",i===0),Nn.toneMappingExposure=i===0?1.15:1.05,rt("fx-damage").style.display=i===0?"":"none"}function Fo(){let i=window.innerWidth,t=window.innerHeight;Nn.setSize(i,t,!1),Ss.style.width=i+"px",Ss.style.height=t+"px",Ve.aspect=i/t,Ve.fov=i/t<.9?Ed+14:Ed,Ve.updateProjectionMatrix(),Br.setSize(i,t,Nn.getPixelRatio()),we.setScale(t*Nn.getPixelRatio(),Ve.fov),ys.ps.uniforms.uScale.value=we.soft.uniforms.uScale.value,Zi.ps.uniforms.uScale.value=we.soft.uniforms.uScale.value}window.addEventListener("resize",Fo);window.visualViewport?.addEventListener("resize",Fo);screen.orientation?.addEventListener?.("change",()=>setTimeout(Fo,120));var Po=document.documentElement,m1=!!(Po.requestFullscreen||Po.webkitRequestFullscreen);document.body.classList.toggle("nofs",!m1);async function F0(){try{!document.fullscreenElement&&!document.webkitFullscreenElement&&await(Po.requestFullscreen?Po.requestFullscreen({navigationUI:"hide"}):Po.webkitRequestFullscreen?.())?.catch?.(()=>{})}catch{}try{await screen.orientation?.lock?.("landscape")}catch{}setTimeout(Fo,150)}["btnFull","btnFull2"].forEach(i=>{let t=document.getElementById(i);t&&t.addEventListener("click",e=>{e.stopPropagation(),F0()})});var wo=0,xh=0,vh=3;function g1(i){if(!(Q.state!=="playing"||Li!=="auto"||qn.has("noadapt"))){if(vh>0){vh-=i;return}if(wo+=i,xh++,wo>=2.5){let t=xh/wo;wo=0,xh=0,t<28&&Xn>0&&(bh(Xn-1),vh=3,Ln("Graphics lowered for smoother play"))}}}var Le={hp:-1,pts:-1,mag:-1,res:-1,name:"",prompt:"",round:-1,alt:""},R0=0;function Ln(i){let t=rt("toast");t.textContent=i,t.classList.add("on"),clearTimeout(R0),R0=setTimeout(()=>t.classList.remove("on"),2600)}function Ji(i,t=""){let e=rt("banner");e.innerHTML=i+(t?`<small>${t}</small>`:""),e.classList.remove("on"),e.offsetWidth,e.classList.add("on")}function No(i,t,e){let n=document.createElement("span");n.textContent=i,t==="heal"?n.className="g":t&&(n.className="h"),n.style.setProperty("--x",Y(-80,80)+"px"),n.style.top=Y(10,50)+"px",rt("pop").appendChild(n),setTimeout(()=>n.remove(),950)}function x1(){let i=Math.max(0,Math.round(R.hp));i!==Le.hp&&(Le.hp=i,rt("hpFill").style.width=100*i/R.maxHp+"%",rt("hpFill").classList.toggle("low",i<R.maxHp*Lo),rt("hpNum").textContent=i);let t=wd();if(t!==Le.med&&(Le.med=t,rt("medCue").classList.toggle("on",t)),R.pts!==Le.pts){if(Le.pts>=0&&R.pts>Le.pts){let h=rt("pts");h.classList.remove("bump"),h.offsetWidth,h.classList.add("bump")}Le.pts=R.pts,rt("pts").textContent=R.pts.toLocaleString()}let e=bs(),n=ke[e.id];n.name!==Le.name&&(Le.name=n.name,rt("wName").textContent=n.name),e.mag!==Le.mag&&(Le.mag=e.mag,rt("ammoMag").textContent=e.mag,rt("ammoMag").classList.toggle("empty",e.mag===0)),e.reserve!==Le.res&&(Le.res=e.reserve,rt("ammoRes").textContent="/ "+e.reserve);let s=R.slots[1-R.cur],r=s?ke[s.id].name+"  "+s.mag+"/"+s.reserve:"";if(r!==Le.alt&&(Le.alt=r,rt("wAlt").textContent=r),Q.round!==Le.round){Le.round=Q.round;let h=rt("roundNum");h.textContent=Q.round||1,h.classList.remove("pulse"),h.offsetWidth,h.classList.add("pulse")}let a=rt("reloadBar");R.reloadT>0?(a.classList.add("on"),a.firstElementChild.style.width=100*(1-R.reloadT/R.reloadTot)+"%"):a.classList.remove("on");let o=ze(R.dmg,0,1);rt("fx-damage").style.opacity=Xn===0?Math.min(1,o+(R.hp<R.maxHp*Lo?.25:0)):0;let c=rt("powers"),l="";Q.double>0&&(l+=`<div class="pw pw2x glass${Q.double<5?" blink":""}">2\xD7 CASH <b>${Math.ceil(Q.double)}</b></div>`),c._h!==l&&(c._h=l,c.innerHTML=l)}function _s(i,t=!0){let e=rt("prompt");i!==Le.prompt&&(Le.prompt=i,e.innerHTML=i,f1(e),e.classList.toggle("on",!!i))}function kr(){for(let t in Co)Co[t].visible=!1;let i=p1(bs().id);i.visible=Q.state==="playing"||R.dead,i.scale.setScalar(ln?.78:.9),i.add(Ni),Ni.position.copy(i.userData.muzzle.position).add(new I(0,0,-.04)),R.gun=i}function Or(i){i===R.cur||!R.slots[i]||R.switchT>0||(R.cur=i,R.reloadT=0,R.switchT=.32,kr(),Ut.click(0,2500,.3))}function Uo(i){let t=R.slots.findIndex(e=>e&&e.id===i);if(t>=0){let e=R.slots[t];e.mag=ke[i].mag,e.reserve=ke[i].reserve;return}R.slots[1]?R.slots[R.cur]=yh(i):(R.slots[1]=yh(i),R.cur=1),R.reloadT=0,R.switchT=.4,kr()}function Mh(){let i=bs(),t=ke[i.id];R.reloadT>0||R.switchT>0||i.mag>=t.mag||i.reserve<=0||(R.reloadTot=R.reloadT=t.perShell?t.reload*(t.mag-i.mag)+.4:t.reload,R.shellT=t.reload,Ut.reload(t.perShell?"pistol":i.id))}function v1(){let i=bs(),t=ke[i.id],e=Math.min(t.mag-i.mag,i.reserve);i.mag+=e,i.reserve-=e,R.reloadT=0,t.perShell&&Ut.pump()}var ph=new I,Eo=new I,To=new I,mh=new I,gh=new I,C0=new I,Sd=new I;function _1(i){let t=R.yaw+R.rY,e=R.pitch+R.rP;return i.set(-Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e))}function O0(){return 1.7-(R.dead?Math.min(1.1,R.deadT*1.6):0)+Math.sin(R.bob*2)*.035*R.mv}function B0(){let i=bs(),t=ke[i.id];if(i.mag<=0){Ut.empty(),R.fireCd=.25,Mh();return}i.mag--,R.fireCd=60/t.rpm,R.kick=Math.min(1.6,R.kick+1),R.heat=Math.min(1,R.heat+.12),Ut.shot(t.snd),_1(Eo),ph.set(R.x,O0(),R.z),To.set(Math.cos(R.yaw),0,-Math.sin(R.yaw)),mh.crossVectors(To,Eo).normalize(),To.crossVectors(Eo,mh).normalize();let e=t.spread*(1+R.mv*.9+R.heat*.8),n=Eo.clone();Ve.updateMatrixWorld(!0),R.gun.userData.muzzle.getWorldPosition(gh),R.gun.userData.eject.getWorldPosition(C0);let s=new Map,r=0,a=[];for(let o=0;o<t.pellets;o++){let c=Y(qe),l=Math.sqrt(Math.random())*e,h=Eo.clone().copy(n).addScaledVector(To,Math.cos(c)*l).addScaledVector(mh,Math.sin(c)*l).normalize();a.push([+h.x.toFixed(4),+h.y.toFixed(4),+h.z.toFixed(4)]);let d=Ge.rayHit(ph,h,t.range),u=ne.ray(ph,h,t.range),f=t.range,p=null,x=null;d&&(!u||d.t<u.t)?(f=d.t,x=d):u&&(f=u.t,p=u.n);let g=new I().copy(h).multiplyScalar(f).add(ph);if((o<(t.pellets>1?3:1)||we.tier>0)&&we.tracer(gh,g,t.pellets>1?.006:.011),x){let m=s.get(x.z)||{dmg:0,head:!1,p:g,n:h.clone().negate()},S=t.pellets>1?ze(1.25-x.t/16,.25,1):1;m.dmg+=t.dmg*(x.head?t.head:1)*S,m.head=m.head||x.head,m.p=g,s.set(x.z,m)}else p&&r<4&&(r++,Sd.set(p.x,p.y,p.z),we.sparks(g,Sd,7),we.dust(g,Sd,2))}vs.intensity=55,Sh.intensity=6,Q.muzzleT=.06,Ni.visible=!0;{let o=R.gun.userData.flash;o&&(o.visible=!0,o.rotation.z=Y(qe),o.scale.setScalar(Y(.8,1.3)*(t.id==="shotgun"?1.5:1))),R.gun.userData.slideT=1}if(Ni.material.rotation=Y(qe),Ni.scale.setScalar(Y(.25,.42)*(t.id==="shotgun"?1.4:1)),we.flash(gh,n),we.smoke(gh,n,1),we.maxCas){let o=new I().copy(To).multiplyScalar(Y(1.2,2.4)).addScaledVector(mh,Y(1.2,2.2)).addScaledVector(n,Y(-.3,.5));we.casing(C0,o)}if(R.rP+=t.kick*Y(.85,1.15),R.rY+=Y(-1,1)*t.kick*.45,R.shake=Math.min(1,R.shake+t.shake*.5),t.perShell===!0&&i.mag>0&&setTimeout(()=>Ut.pump(),260),Pe?.on){Pe.send({t:"shot",w:i.id,dirs:a});for(let[o,c]of s)we.blood(c.p,c.n,c.head?14:8),Ut.zhit(Io(o.pos),c.head)}else for(let[o,c]of s){let l=Ge.damage(o,c.dmg,c.head,c.p,c.n);if(!l)continue;let h=Q.double>0?2:1;Ut.zhit(Io(o.pos),c.head),we.blood(c.p,c.n,c.head?14:8),we.sparks(c.p,c.n,2);let d=10*h,u=rt("hitm");u.classList.remove("on","kill"),u.offsetWidth,u.classList.add("on"),Ut.tick(!1),l.killed&&(d=(c.head?100:o.value)*h,R.kills++,Q.kills++,c.head&&R.heads++,u.classList.add("kill"),Ut.tick(!0),Ut.zdie(Io(o.pos),.5),we.blood(c.p,c.n,26,1.4),we.dust(new I(o.pos.x,.3,o.pos.z),{x:0,y:1,z:0},5),R.shake=Math.min(1,R.shake+.1),y1(o),z0(o)),setTimeout(()=>u.classList.remove("on"),l.killed?280:190),R.pts+=d,No("+"+d,c.head&&l.killed)}i.mag===0&&!R.reloadT&&setTimeout(()=>Q.state==="playing"&&Mh(),220)}var Io=i=>{let t=i.x-R.x,e=i.z-R.z,n=Math.hypot(t,e)||1;return(t*Math.cos(R.yaw)-e*Math.sin(R.yaw))/n};function y1(i){Q.round<2||Q.drops>=Un.maxDrops||Q.time-Q.lastDrop<18||Math.random()<.05*Un.drop&&Eh(dn(["ammo","double","nuke"]),i.pos.x,i.pos.z)}var ui={ammo:{name:"FULL MAGS",col:[.3,.7,2.4],sub:"All ammo refilled",hex:"#6bb8ff"},double:{name:"2\xD7 CASH",col:[3,2.2,.4],sub:"Double points for 30s",hex:"#ffd36b"},nuke:{name:"KABOOM",col:[3,.4,.4],sub:"Every zombie goes down",hex:"#ff6b6b"},health:{name:"MED KIT",col:[.25,2.6,.9],sub:"+50% health",hex:"#4dffb0"}};function Eh(i,t,e){let n=ui[i].col,s=new Zt;s.position.set(t,1,e);let r=i==="health",a;if(r){let u=new ye({color:new pt(...n),toneMapped:!1});a=new Zt,a.add(new mt(new ie(.46,.14,.14),u),new mt(new ie(.14,.46,.14),u),new mt(new ie(.14,.14,.46),u)),a.traverse(f=>f.userData.noAO=!0)}else a=new mt(new Pa(.28,0),new ye({color:new pt(...n),toneMapped:!1}));a.userData.noAO=!0;let o=document.createElement("canvas");o.width=256,o.height=64;let c=o.getContext("2d");c.font="900 40px system-ui, sans-serif",c.textAlign="center",c.fillStyle=ui[i].hex,c.shadowColor=ui[i].hex,c.shadowBlur=14,c.fillText(ui[i].name,128,44);let l=new li(new $n({map:new en(o),transparent:!0,depthWrite:!1,fog:!1}));l.scale.set(1.5,.375,1),l.position.y=.6,l.userData.noAO=!0;let h=new li(new $n({map:zr.glow,color:new pt(n[0]*.55,n[1]*.55,n[2]*.55),blending:sn,depthWrite:!1,transparent:!0}));h.scale.setScalar(1.25),h.userData.noAO=!0;let d=new mt(new Qe(.12,.12,12,8,1,!0),new ye({color:new pt(n[0]*.3,n[1]*.3,n[2]*.3),transparent:!0,opacity:.35,blending:sn,depthWrite:!1}));d.position.y=5,d.userData.noAO=!0,s.add(a,l,h,d),cn.add(s),Q.ups.push({type:i,g:s,core:a,label:l,t:r?c1:28,x:t,z:e}),r?Q.lastMed=Q.time:(Q.drops++,Q.lastDrop=Q.time),Ut.spawnPower()}function wd(){return Q.state==="playing"&&!R.dead&&R.hp<=R.maxHp*L0&&Q.time-Q.lastMed>=N0&&!Q.ups.some(i=>i.type==="health")}function z0(i){wd()&&Eh("health",i.pos.x,i.pos.z)}function k0(i){if(i.type==="health"){let e=R.maxHp*U0,n=R.hp;R.hp=Math.min(R.maxHp,R.hp+e),R.lastHit=Math.max(R.lastHit,Q.time-1),Ut.medkit(),Ji(ui.health.name,"+"+Math.round(R.hp-n)+" health"),No("+"+Math.round(R.hp-n)+" HP","heal"),cn.remove(i.g),we.glowBurst(new I(i.x,1,i.z),...ui.health.col.map(s=>s*.7),24,4);return}Ut.power(i.type);let t=0;if(Ji(ui[i.type].name,ui[i.type].sub),i.type==="ammo")for(let e of R.slots)e&&(e.mag=ke[e.id].mag,e.reserve=ke[e.id].reserve);else if(i.type==="double")Q.double=30;else if(i.type==="nuke"){let e=Ge.killAll();for(let n of e)we.blood(new I(n.pos.x,1.2,n.pos.z),{x:0,y:1,z:0},22,1.4),we.glowBurst(new I(n.pos.x,1.2,n.pos.z),3,1.5,.4,10,5);R.pts+=400*(Q.double>0?2:1),Ut.boom(),R.shake=1,rt("fx-flash").style.transition="none",rt("fx-flash").style.opacity=.85,requestAnimationFrame(()=>{rt("fx-flash").style.transition="opacity 1.2s",rt("fx-flash").style.opacity=0}),Q.kills+=e.length,R.kills+=e.length}cn.remove(i.g),we.glowBurst(new I(i.x,1,i.z),...ui[i.type].col.map(e=>e*.7),24,4)}var Ws={};function M1(i){if(!Ws[i]){let t=fo(i,!1);t.scale.setScalar(1.6),t.rotation.y=0,t.visible=!1,ne.crate.hold.add(t),Ws[i]=t}return Ws[i]}function S1(){let i=ne.crate;if(i.state==="idle"){if(R.pts<i.price){Ut.deny(),Ln("Not enough points");return}R.pts-=i.price,Ut.cash(),Ut.open(),Ut.jingle(4),i.state="roll",i.t=0,i.pick=dn(uo.filter(t=>!R.slots.some(e=>e&&e.id===t)).concat(["smg"].filter(()=>!1))),i.pick=i.pick||dn(uo)}else i.state==="ready"&&(Uo(i.weapon),Ut.cash(),Ut.click(0,2e3,.5),Ji(ke[i.weapon].name.toUpperCase()),Th())}function Th(){let i=ne.crate;i.state="idle",i.t=0;for(let t in Ws)Ws[t].visible=!1;i.model=null}function b1(i){let t=ne.crate,e=t.state==="idle"?0:-1.25;if(t.lid.rotation.x+=(e-t.lid.rotation.x)*Math.min(1,i*6),t.state==="roll"){t.t+=i;let n=Math.floor(t.t/.14)%uo.length,s=t.t>3.6?t.pick:uo[n];for(let a in Ws)Ws[a].visible=!1;let r=M1(s);r.visible=!0,t.model=r,t.t>3.6&&(t.state="ready",t.weapon=t.pick,t.t=0,Ut.power("ammo"))}else t.state==="ready"&&(t.t+=i,t.t>9&&(Ut.open(),Th(),Ln("The toolbox slammed shut")))}function E1(i){return Math.max(3,Math.round((6+i*2.3+i*i*.12)*Un.count))}function P0(i){Q.round=i,Q.toSpawn=E1(i),Q.brutes=i>=5?i%5===0?Math.min(4,1+(i/5|0)):i>=7?1:0:0,Q.brutes=Math.round(Q.brutes*Un.brute),Q.phase="round",Q.spawnT=1.5,Q.drops=0,Ut.round(i),Ji("ROUND "+i,i===1?"Board up. Hold the yard.":"They are faster this time");let t=rt("roundNum");t.classList.remove("pulse"),t.offsetWidth,t.classList.add("pulse")}function T1(){return ne.windows.filter(i=>i.area==="A"||ne.door.open)}function w1(i){if(Q.phase!=="round"||Q.toSpawn<=0||(Q.spawnT-=i,Q.spawnT>0))return;if(Ge.alive>=Ge.max){Q.spawnT=.3;return}let t=T1();t.sort((r,a)=>(r.c.x-R.x)**2+(r.c.z-R.z)**2-((a.c.x-R.x)**2+(a.c.z-R.z)**2));let e=Math.random()<.6?t[Math.min(t.length-1,Math.random()*2|0)]:dn(t),n=Q.brutes>0&&Q.toSpawn<=Q.brutes,s=Ge.spawn(e,Q.round,n);s&&(Q.toSpawn--,s.hp=s.maxHp=s.maxHp*Un.hp,s.speed=Math.min(6.5,s.speed*Un.speed),s.dmg=Math.round(s.dmg*Un.dmg)),Q.spawnT=Math.max(.3,2-Q.round*.13)*Y(.7,1.2)*Un.spawnGap}function H0(){let i=null,t=(n,s,r)=>{s<r&&(!i||s<i.d)&&(i={...n,d:s})};for(let n of ne.windows)n.count<6&&t({type:"win",w:n},Math.hypot(R.x-n.in.x,R.z-n.in.z),2.1);for(let n of ne.buys)t({type:"buy",b:n},Math.hypot(R.x-n.pos.x,R.z-n.pos.z),1.9);ne.door.open||t({type:"door"},Math.hypot(R.x-ne.door.pos.x,R.z-(He+1)),3.4);let e=ne.crate;return(e.state==="idle"||e.state==="ready")&&t({type:"crate"},Math.hypot(R.x-e.x,R.z-e.z),2.2),i}function V0(i,t,e){if(Pe?.on)return F1(i,t,e);if(i.type==="win"){t&&(Q.repairT+=e,Q.repairT>.5&&(Q.repairT=0,ne.addPlank(i.w)&&(Ut.repair(),R.pts+=10*(Q.double>0?2:1),No("+10"))));return}if(se.interactEdge)if(i.type==="buy"){let n=R.slots.find(r=>r&&r.id===i.b.id),s=n?Math.floor(i.b.price/2):i.b.price;if(n&&n.mag===ke[n.id].mag&&n.reserve===ke[n.id].reserve){Ln("Ammo already full");return}if(R.pts<s){Ut.deny(),Ln("Not enough points");return}R.pts-=s,Ut.cash(),Uo(i.b.id)}else if(i.type==="door"){if(R.pts<ne.door.price){Ut.deny(),Ln("Not enough points");return}R.pts-=ne.door.price,Ut.cash(),Ut.door(),ne.door.open=!0,Ji("GATE OPEN","The back lot awaits")}else i.type==="crate"&&S1()}function A1(i){if(!i)return _s("");let t="<kbd>E</kbd>",e=n=>`<span class="cost${R.pts<n?" poor":""}">${n}</span>`;if(i.type==="win")_s(`${t}Hold to repair barricade<span class="prog"><i data-w="${Math.round(i.w.count/6*100)}"></i></span>`);else if(i.type==="buy"){let n=R.slots.find(s=>s&&s.id===i.b.id);_s(n?`${t}Refill ${i.b.name}${e(Math.floor(i.b.price/2))}`:`${t}Buy ${i.b.name}${e(i.b.price)}`)}else i.type==="door"?_s(`${t}Open the gate${e(ne.door.price)}`):i.type==="crate"&&_s(ne.crate.state==="ready"?`${t}Take ${ke[ne.crate.weapon].name}`:`${t}Lucky Toolbox${e(ne.crate.price)}`)}function R1(i){let t=se.f,e=se.s,n=0,s=0;if(t||e){let l=Math.sin(R.yaw),h=Math.cos(R.yaw);n=-l*t+h*e,s=-h*t-l*e;let d=Math.hypot(n,s)||1;n/=d,s/=d}let r=Math.min(1,Math.hypot(t,e));R.sprint=(se.sprint||r>.92&&ln)&&t>.3&&R.reloadT<=0;let a=(R.sprint?6.6:4.5)*(R.switchT>0?.9:1)*r,o=Math.min(1,i*10);R.vx+=(n*a-R.vx)*o,R.vz+=(s*a-R.vz)*o,R.x+=R.vx*i,R.z+=R.vz*i,ne.resolve(R,.42);let c=Math.hypot(R.vx,R.vz);R.mv=ze(c/4.5,0,1.4),R.bob+=c*i*1.7}function C1(i){R.fireCd>0&&(R.fireCd-=i),R.switchT>0&&(R.switchT-=i),R.heat=Math.max(0,R.heat-i*1.4),R.kick=Math.max(0,R.kick-i*8);let t=bs(),e=ke[t.id];if(R.reloadT>0){let n=R.reloadT;R.reloadT-=i,e.perShell?(R.shellT-=i,R.shellT<=0&&t.mag<e.mag&&t.reserve>0&&(t.mag++,t.reserve--,R.shellT=e.reload,Ut.shell()),se.fire&&t.mag>0?R.reloadT=0:(t.mag>=e.mag||t.reserve<=0)&&(R.reloadT=0,Ut.pump())):R.reloadT<=0&&v1()}se.fire&&R.fireCd<=0&&R.switchT<=0&&(R.reloadT<=0||e.perShell)&&!R.sprintBlock&&((e.auto||!R.fired)&&B0(),R.fired=!0),se.fire||(R.fired=!1),se.reload&&(se.reload=!1,Mh())}function I0(i,t){R.rP*=Math.exp(-i*9),R.rY*=Math.exp(-i*9),R.shake=Math.max(0,R.shake-i*2.2),R.dmg=Math.max(0,R.dmg-i*.8);let e=R.shake*R.shake,n=(Math.sin(t*61)+Math.sin(t*37.3))*.5,s=(Math.sin(t*53.1)+Math.cos(t*41))*.5,r=R.dead?Math.min(1,R.deadT*1.4):0,a=ze(R.vx*Math.cos(R.yaw)-R.vz*Math.sin(R.yaw),-6,6);Ve.position.set(R.x+n*e*.06,O0()+s*e*.05,R.z),Ve.rotation.set(ze(R.pitch+R.rP+s*e*.035-r*.4,-1.5,1.5),R.yaw+R.rY+n*e*.035,-a*.0045+n*e*.02+r*.9),Ve.updateMatrixWorld(!0),Ms.matrix.copy(Ve.matrixWorld);let o=R.gun;if(!o)return;let c=o.userData.base,l=R.kick,h=l*.05,d=0,u=0,f=0,p=0,x=l*.04;if(f+=Math.cos(R.bob)*.006*R.mv,p+=Math.abs(Math.sin(R.bob))*.008*R.mv*-1,f+=-ze(R.sx,-1,1)*.02,p+=ze(R.sy,-1,1)*.02,R.sprint&&(d+=.45,h-=.25,p-=.05,f-=.03),R.reloadT>0&&!ke[bs().id].perShell){let A=1-R.reloadT/R.reloadTot,y=Math.sin(A*Math.PI);h-=y*.5,p-=y*.12,u+=y*.35,f-=y*.04}else if(R.reloadT>0){let A=Math.abs(Math.sin(t*6))*.5+.3;h-=.25,p-=.05,d+=.1*A}if(R.switchT>0){let A=R.switchT/.32;p-=Math.sin(ze(A,0,1)*Math.PI/2)*.35,h-=A*.5}let g=1-Math.exp(-i*18);if(o.userData.rx=Ri(o.userData.rx||0,h,g),o.userData.ry=Ri(o.userData.ry||0,d,g),o.userData.rz=Ri(o.userData.rz||0,u,g),o.rotation.set(o.userData.rx,o.userData.ry,o.userData.rz),o.userData.slideT>0){o.userData.slideT=Math.max(0,o.userData.slideT-i*14);let A=Math.sin(o.userData.slideT*Math.PI);o.userData.slide&&(o.userData.slide.position.z=A*.028),o.userData.pump&&(o.userData.pump.position.z=0)}o.position.set(c.x+f,c.y+p,c.z+x),R.sx*=Math.exp(-i*8),R.sy*=Math.exp(-i*8),Q.muzzleT>0&&(Q.muzzleT-=i,Q.muzzleT<=0&&(Ni.visible=!1,R.gun?.userData.flash&&(R.gun.userData.flash.visible=!1))),vs.intensity*=Math.exp(-i*40),vs.intensity<.5&&(vs.intensity=0),Sh.intensity=vs.intensity>0?vs.intensity/9:0;let m=rt("cross"),S=6+ke[bs().id].spread*650*(1+R.mv*.9+R.heat*.8)*.5;m._sp!==Math.round(S)&&(m._sp=Math.round(S),m.style.setProperty("--s",m._sp+"px"),m.children[0].style.left=-(m._sp+9)+"px",m.children[0].style.top="-1px",m.children[1].style.left=m._sp+"px",m.children[1].style.top="-1px",m.children[2].style.top=-(m._sp+9)+"px",m.children[2].style.left="-1px",m.children[3].style.top=m._sp+"px",m.children[3].style.left="-1px")}function P1(i){if(R.dead||Q.state!=="playing")return;R.hp-=i.dmg,R.lastHit=Q.time,R.dmg=Math.max(R.dmg,.65+.35*(1-Math.max(0,R.hp)/R.maxHp)),R.shake=1,Ut.hurt();let t=i.pos.x-R.x,e=i.pos.z-R.z,n=Math.atan2(t,-e)- -R.yaw,s=rt("fx-dir");s.style.display="block",s.firstElementChild.style.transform=`rotate(${n*180/Math.PI}deg)`,s.style.opacity=1,setTimeout(()=>s.style.opacity=0,500),setTimeout(()=>s.style.display="none",900),R.hp<=0&&Ad()}function Ad(){R.hp=0,R.dead=!0,R.deadT=0,Ut.over(),se.fire=!1,rt("hud").classList.add("hud-dead"),_s(""),document.pointerLockElement&&document.exitPointerLock?.()}function Rd(){try{return JSON.parse(localStorage.getItem("vwz_scores")||"[]")}catch{return[]}}function I1(i){let t=Rd();t.push(i),t.sort((e,n)=>n.round-e.round||n.pts-e.pts);try{localStorage.setItem("vwz_scores",JSON.stringify(t.slice(0,5)))}catch{}return t.slice(0,5)}var Ao=null;function Cd(){Ai.top().then(i=>{Ai.render(rt("globalList"),i,localStorage.getItem("vwfest_nick")),Ai.render(rt("oGlobal"),i,localStorage.getItem("vwfest_nick"))})}function D1(){Ao={round:Math.max(1,Q.round),pts:R.pts,kills:R.kills},rt("nick").value=localStorage.getItem("vwfest_nick")||"",rt("postMsg").textContent="",rt("postMsg").className="postMsg",rt("fPost").classList.toggle("hidden",!Ai.hasToken()),rt("bPost").disabled=!1,Ai.hasToken()||(rt("postMsg").textContent="Leaderboard offline: score saved on this device."),Cd()}rt("fPost").onsubmit=i=>{if(i.preventDefault(),!Ao)return;let t=rt("nick").value.trim();rt("bPost").disabled=!0;try{localStorage.setItem("vwfest_nick",t)}catch{}Ai.submit(t,Ao.round,Ao.pts,Ao.kills).then(e=>{e.ok?(rt("fPost").classList.add("hidden"),rt("postMsg").className="postMsg ok",rt("postMsg").textContent="Posted! You are #"+e.rank+" on the survivor board.",Ai.render(rt("oGlobal"),e.top,t),Ai.render(rt("globalList"),e.top,t)):(rt("postMsg").textContent=e.error||"Could not post.",rt("bPost").disabled=!1)})};function Pd(i,t){i.innerHTML=t.length?t.map((e,n)=>`<li>Round <b>${e.round}</b> \xB7 ${e.kills} kills \xB7 ${e.pts.toLocaleString()} pts</li>`).join(""):'<li class="muted">No runs yet \u2014 be the first.</li>'}function L1(){Object.assign(R,{x:Ui.spawn.x,z:Ui.spawn.z,yaw:0,pitch:0,vx:0,vz:0,hp:Do,lastHit:-99,pts:Un.startPts,kills:0,heads:0,rP:0,rY:0,shake:0,dmg:0,cur:0,fireCd:0,reloadT:0,switchT:0,kick:0,dead:!1,deadT:0,slots:[yh("pistol"),null]}),Object.assign(Q,{time:0,runTime:0,round:0,toSpawn:0,phase:"wait",interT:2.6,drops:0,double:0,kills:0,repairT:0,lastMed:-99}),Ge.reset(),we.reset();for(let i of Q.ups)cn.remove(i.g);Q.ups=[],Th(),ne.crate.lid.rotation.x=0;for(let i of ne.windows)for(;i.count<6;)ne.addPlank(i);Le.hp=Le.pts=Le.mag=Le.res=-1,Le.name=Le.alt="",Le.round=-1,rt("hud").classList.remove("hud-dead"),ne.door.open&&(ne.door.open=!1,ne.door.t=0,ne.door.mesh.position.y=0,ne.door.col.off=!1),kr()}function Hr(){if(Ut.init(),L1(),Ai.start(),Q.state="playing",kr(),["menu","over","pause"].forEach(i=>rt(i).classList.add("hidden")),rt("hud").classList.remove("hidden"),rt("touch").classList.toggle("hidden",!ln),fi.visible=Xn>0&&R.flashlight,vh=3,wo=0,xh=0,!ln&&!qn.has("test"))try{Ss.requestPointerLock?.()?.catch?.(()=>{})}catch{}else ln&&F0();Ln("Hold E at windows to repair \xB7 Open the gate for new guns")}function Oo(){Q.state!=="playing"||R.dead||(Q.state="paused",rt("pause").classList.remove("hidden"),se.fire=!1,se.f=se.s=0,document.pointerLockElement&&document.exitPointerLock?.(),_s(""))}function Id(){if(Q.state==="paused"&&(Q.state="playing",rt("pause").classList.add("hidden"),Ut.init(),!ln&&!qn.has("test")))try{Ss.requestPointerLock?.()?.catch?.(()=>{})}catch{}}function wh(){Pe?.on&&(Pe.stop(),rt("mpTag").classList.add("hidden")),Q.state="menu",["pause","over"].forEach(i=>rt(i).classList.add("hidden")),rt("menu").classList.remove("hidden"),rt("hud").classList.add("hidden"),rt("touch").classList.add("hidden"),Pd(rt("scoreList"),Rd()),Cd(),Ge.reset(),R.gun&&(R.gun.visible=!1),_s(""),R.dead=!1,Ni.visible=!1}function G0(){Q.state="over";let i=I1({round:Math.max(1,Q.round),kills:R.kills,pts:R.pts,t:Date.now()});rt("oRound").textContent=Math.max(1,Q.round),rt("oKills").textContent=R.kills,rt("oHeads").textContent=R.heads,rt("oPts").textContent=R.pts.toLocaleString();let t=Math.floor(Q.runTime);rt("oTime").textContent=Math.floor(t/60)+":"+String(t%60).padStart(2,"0"),rt("oMsg").textContent=Q.round>=10?"Legendary run. The yard remembers.":Q.round>=5?"Solid stand. They got you in the end.":"The dead took the yard. Try again.",Pd(rt("oScores"),i),D1(),rt("over").classList.remove("hidden"),rt("hud").classList.add("hidden"),rt("touch").classList.add("hidden"),R.gun&&(R.gun.visible=!1)}var bd={x:0,z:8},Ro={groan:(i,t)=>Ut.groan(Io(i.pos),ze(1-t/40,.1,.8)*.8,i.brute?.6:i.runner?1.25:Y(.9,1.1),i.brute?1.4:Y(.8,1.3)),plank:(i,t)=>{Ut.plank(!0),we.dust(new I(i.c.x+i.n.x*.3,1.4,i.c.z+i.n.z*.3),i.n,6,[.5,.4,.3])},hitPlayer:P1},N1={groan:()=>{},plank:()=>{},hitPlayer:()=>{}};function Dd(i){Q.time+=i;let t=Q.time;if(Q.state==="menu"){Q.orbit+=i*.12;let n=Q.orbit,s=9.5;if(Ve.position.set(Math.sin(n)*s,2.6+Math.sin(n*.7)*.4,6+Math.cos(n)*s*.8),Ve.lookAt(0,1.8,3),Ve.rotation.z=0,Q.menuSpawn-=i,Q.menuSpawn<=0&&Ge.alive<5){Q.menuSpawn=2.2;let r=Ge.spawn(dn(ne.windows.filter(a=>a.area==="A")),2);r&&(r.state="chase",r.pos.set(Y(-14,14),0,Y(-18,-4)),r.speed=Y(.9,1.5),r.dmg=0)}bd.x=0,bd.z=6,Ge.update(i,t,bd,ne.door,N1),ne.update(i,t,{x:Ve.position.x,z:Ve.position.z}),we.update(i),Zi.center={x:0,z:6},ys.center=Zi.center,Zi.ps.update(i),ys.ps.update(i),Ms.visible=!1,fi.visible=!1;return}if(Ms.visible=!0,fi.visible=Xn>0&&R.flashlight&&!R.dead,Q.state==="paused")return;if(Q.state==="over"){we.update(i);return}if(Q.runTime+=i,R.dead){if(R.deadT+=i,Pe?.on?Pe.update(i,t,Ro):Ge.update(i,t,R,ne.door,{...Ro,hitPlayer:()=>{}}),ne.update(i,t,R),we.update(i),I0(i,t),Pe?.on&&R.deadT>.8){let n=Pe.spectate(Ve);Ms.visible=!1,rt("specTag").textContent=n?"DOWN \xB7 SPECTATING "+n:"DOWN \xB7 waiting for the round to end",rt("specTag").classList.remove("hidden")}R.deadT>2.4&&!Pe?.on&&G0();return}R1(i),C1(i),!Pe?.on&&R.hp<R.maxHp&&t-R.lastHit>o1&&(R.hp=Math.min(R.maxHp,R.hp+l1*i)),R.hp<R.maxHp*Lo&&t-Q.healBeat>.85&&(Q.healBeat=t,Ut.heart()),Pe?.on?Pe.update(i,t,Ro):Q.phase==="wait"?(Q.interT-=i,Q.interT<=0&&P0(1)):Q.phase==="round"?(w1(i),Q.toSpawn<=0&&Ge.alive<=0&&(Q.phase="inter",Q.interT=Un.inter)):Q.phase==="inter"&&(Q.interT-=i,Q.interT<=0&&P0(Q.round+1)),Pe?.on||Ge.update(i,t,R,ne.door,Ro),ne.update(i,t,R),u1(i),Zi.center={x:R.x,z:R.z},ys.center=Zi.center,Zi.ps.update(i),ys.ps.update(i),we.update(i),b1(i),Q.double>0&&(Q.double-=i);for(let n=Q.ups.length-1;n>=0;n--){let s=Q.ups[n];s.t-=i,s.core.rotation.y+=i*2.5,s.type!=="health"&&(s.core.rotation.x+=i*1.1),s.g.position.y=1+Math.sin(t*3+n)*.15,s.g.visible=s.t>5||Math.sin(t*16)>-.2,!Pe?.on&&(Math.hypot(s.x-R.x,s.z-R.z)<1.5?(k0(s),Q.ups.splice(n,1)):s.t<=0&&(cn.remove(s.g),Q.ups.splice(n,1)))}let e=H0();A1(e),e?V0(e,se.interact,i):Q.repairT=0,se.interactEdge=!1,I0(i,t),x1()}var D0=performance.now();function W0(i){requestAnimationFrame(W0);let t=Math.min(.25,(i-D0)/1e3);D0=i,g1(t),Dd(Math.min(t,.05)*(Q.state==="menu"?.6:1));let e=Q.state==="playing"&&R.hp<R.maxHp*Lo?1-R.hp/(R.maxHp*Lo):0;Br.render(t,Q.time,ze(R.dmg,0,1),e)}function U1(){Br.render(.016,Q.time,ze(R.dmg,0,1),0)}var Dn={};function Ld(){se.f=(Dn.KeyW||Dn.ArrowUp?1:0)-(Dn.KeyS||Dn.ArrowDown?1:0),se.s=(Dn.KeyD||Dn.ArrowRight?1:0)-(Dn.KeyA||Dn.ArrowLeft?1:0),se.sprint=!!(Dn.ShiftLeft||Dn.ShiftRight)}addEventListener("keydown",i=>{i.target&&i.target.tagName==="INPUT"||i.repeat||(Dn[i.code]=!0,Q.state==="playing"&&!R.dead?(i.code==="KeyR"&&(se.reload=!0),i.code==="KeyE"&&(se.interact=!0,se.interactEdge=!0),i.code==="Digit1"&&Or(0),i.code==="Digit2"&&Or(1),i.code==="KeyQ"&&Or(1-R.cur),i.code==="KeyF"&&Y0(!R.flashlight),i.code==="KeyP"&&Oo()):Q.state==="paused"&&i.code==="KeyP"&&Id(),i.code==="KeyM"&&Z0(),i.code==="Enter"&&(Q.state==="menu"||Q.state==="over")&&Hr(),Ld())});addEventListener("keyup",i=>{Dn[i.code]=!1,i.code==="KeyE"&&(se.interact=!1),Ld()});addEventListener("blur",()=>{for(let i in Dn)Dn[i]=!1;Ld(),se.fire=!1,se.interact=!1});var X0=!1;document.addEventListener("pointerlockerror",()=>{X0=!0});addEventListener("mousemove",i=>{Q.state!=="playing"||R.dead||document.pointerLockElement!==Ss&&!X0&&!qn.has("test")||q0(i.movementX,i.movementY,.0022)});function q0(i,t,e){R.yaw-=i*e,R.pitch=ze(R.pitch-t*e,-1.45,1.45),R.sx+=i*.01,R.sy+=t*.01}Ss.addEventListener("mousedown",i=>{i.button===0&&Q.state==="playing"&&(!ln&&!document.pointerLockElement&&!qn.has("test")&&Ss.requestPointerLock?.(),se.fire=!0)});addEventListener("mouseup",i=>{i.button===0&&(se.fire=!1)});addEventListener("wheel",i=>{Q.state==="playing"&&Math.abs(i.deltaY)>4&&Or(1-R.cur)},{passive:!0});addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&Q.state==="playing"&&!R.dead&&!ln&&!qn.has("test")&&Oo()});document.addEventListener("visibilitychange",()=>{document.hidden&&Oo()});if(ln){let i=null,t=null,e=0,n=0,s=rt("stick"),r=rt("knob"),a={x:0,y:0},o=rt("touch");o.addEventListener("touchstart",d=>{for(let u of d.changedTouches){if(d.target.closest("button"))continue;let f=s.getBoundingClientRect();i===null&&u.clientX<innerWidth*.45?(i=u.identifier,a={x:f.left+f.width/2,y:f.top+f.height/2},c(u)):t===null&&(t=u.identifier,e=u.clientX,n=u.clientY)}d.preventDefault()},{passive:!1});let c=d=>{let u=d.clientX-a.x,f=d.clientY-a.y,p=Math.hypot(u,f),x=55;p>x&&(u=u/p*x,f=f/p*x),r.style.transform=`translate(${u}px,${f}px)`,se.s=u/x,se.f=-f/x,Math.hypot(se.s,se.f)<.12&&(se.s=se.f=0)};o.addEventListener("touchmove",d=>{for(let u of d.changedTouches)u.identifier===i?c(u):u.identifier===t&&(Q.state==="playing"&&!R.dead&&q0(u.clientX-e,u.clientY-n,.0048),e=u.clientX,n=u.clientY);d.preventDefault()},{passive:!1});let l=d=>{for(let u of d.changedTouches)u.identifier===i?(i=null,r.style.transform="",se.s=se.f=0):u.identifier===t&&(t=null)};o.addEventListener("touchend",l),o.addEventListener("touchcancel",l);let h=(d,u,f)=>{let p=rt(d);p.addEventListener("touchstart",g=>{p.classList.add("down"),u(),g.preventDefault(),g.stopPropagation()},{passive:!1});let x=g=>{p.classList.remove("down"),f?.(),g.preventDefault()};p.addEventListener("touchend",x),p.addEventListener("touchcancel",x)};h("bFire",()=>se.fire=!0,()=>se.fire=!1),h("bReload",()=>se.reload=!0),h("bUse",()=>{se.interact=!0,se.interactEdge=!0},()=>se.interact=!1),h("bSwap",()=>Or(1-R.cur)),h("bLamp",()=>Y0(!R.flashlight))}function Y0(i){R.flashlight=i,di.visible=i,fi.visible=!!i&&Xn>0&&Q.state==="playing"&&!R.dead;let t=rt("bLamp");t&&t.classList.toggle("off",!i),Ut.click(0,i?1500:800,.32)}function Z0(){Ut.setMuted(!Ut.muted);try{localStorage.setItem("vwz_mute",Ut.muted?"1":"0")}catch{}J0()}function J0(){rt("btnMute").textContent=Ut.muted?"\u{1F507}":"\u{1F50A}",rt("btnMute2").textContent=Ut.muted?"\u{1F507} Sound off":"\u{1F50A} Sound on"}rt("btnMute").onclick=rt("btnMute2").onclick=i=>{i.stopPropagation(),Z0()};rt("btnPause").onclick=i=>{i.stopPropagation(),Oo()};rt("btnPlay").onclick=Hr;rt("btnAgain").onclick=Hr;rt("btnMenu").onclick=wh;rt("btnResume").onclick=Id;rt("btnQuit").onclick=wh;rt("btnPlay").addEventListener("touchend",i=>{i.preventDefault(),Hr()});rt("qSeg").addEventListener("click",i=>{let t=i.target.closest("button");if(t){Li=t.dataset.q;try{localStorage.setItem("vwz_q",Li)}catch{}[...rt("qSeg").querySelectorAll("button")].forEach(e=>e.classList.toggle("on",e===t)),bh(Li==="high"?2:Li==="medium"?1:Li==="low"||ln?0:2)}});[...rt("qSeg").querySelectorAll("button")].forEach(i=>i.classList.toggle("on",i.dataset.q===Li));rt("modeSeg").addEventListener("click",i=>{let t=i.target.closest("button");if(t){Un=pd(md(t.dataset.m),1);try{localStorage.setItem("vwz_mode",Un.id)}catch{}[...rt("modeSeg").querySelectorAll("button")].forEach(e=>e.classList.toggle("on",e===t))}});[...rt("modeSeg").querySelectorAll("button")].forEach(i=>i.classList.toggle("on",i.dataset.m===Un.id));rt("mapSeg").addEventListener("click",i=>{let t=i.target.closest("button");if(!t||t.dataset.map===Ui.id)return;try{localStorage.setItem("vwz_map",t.dataset.map)}catch{}let e=new URL(location.href);e.searchParams.set("map",t.dataset.map),location.href=e.toString()});[...rt("mapSeg").querySelectorAll("button")].forEach(i=>i.classList.toggle("on",i.dataset.map===Ui.id));R.slots=[yh("pistol"),null];kr();bh(Xn);J0();Pd(rt("scoreList"),Rd());Cd();Ge.max=Ui.cap[Xn>0?1:0];for(let i=0;i<40;i++)Dd(.05);requestAnimationFrame(()=>{Br.render(.016,0,0,0),rt("loading").classList.add("done"),setTimeout(()=>rt("loading").remove(),800)});requestAnimationFrame(W0);"serviceWorker"in navigator&&location.protocol!=="file:"&&!qn.has("nosw")&&navigator.serviceWorker.register("sw.js").catch(()=>{});function F1(i,t,e){if(i.type==="win"){t&&(Q.repairT+=e,Q.repairT>.5&&(Q.repairT=0,Pe.send({t:"repair",w:i.w.id})));return}se.interactEdge&&(i.type==="buy"?Pe.send({t:"buy",w:i.b.id}):i.type==="door"?Pe.send({t:"door"}):i.type==="crate"&&Pe.send({t:"crate"}))}var Nd=qn.get("server")||(()=>{try{return localStorage.getItem("vwz_server")}catch{return null}})()||"ws://localhost:8787";Pe=b0({scene:cn,zombies:Ge,P:R,G:Q,cam:Ve,world:ne,onJoined:i=>{Hr(),Q.round=0,rt("mpTag").textContent="CO-OP \xB7 ROOM "+i.room,rt("mpTag").classList.remove("hidden"),Ln("Co-op room "+i.room+" \xB7 share the code with friends")},onStatus:i=>{Ln(String(i));let t=rt("coMsg");t&&(t.textContent=String(i))},onRound:i=>{Q.round=i,Q.phase="round",Ut.round(i),Ji("ROUND "+i,"Co-op \xB7 hold the yard together")},onHurt:i=>{R.lastHit=Q.time,R.dmg=Math.max(R.dmg,.65+.35*(1-Math.max(0,R.hp)/R.maxHp)),R.shake=1,Ut.hurt()},onDown:()=>{Ad(),Ln("You are down. Teammates revive you if they clear the round")},onRevive:()=>{rt("specTag").classList.add("hidden"),R.dead=!1,R.deadT=0,rt("hud").classList.remove("hud-dead"),kr(),Ln("Back on your feet")},onZDie:i=>Ut.zdie(Io(i.pos),.5),onHits:i=>{for(let t of i){let e=rt("hitm");e.classList.remove("on","kill"),e.offsetWidth,e.classList.add("on"),t.killed&&(e.classList.add("kill"),Ut.tick(!0),Q.kills++,t.head&&R.heads++),No("+"+t.gain,t.head&&t.killed)}},onEvent:(i,t)=>{if(i.e==="pick"){let e=ui[i.type];if(e&&Ji(e.name,i.p===Pe.S.id?e.sub:"A teammate grabbed it"),Ut.power(i.type==="health"?"ammo":i.type),i.type==="ammo"&&i.p===Pe.S.id)for(let n of R.slots)n&&(n.mag=ke[n.id].mag,n.reserve=ke[n.id].reserve);i.type==="nuke"&&(Ut.boom(),R.shake=1,rt("fx-flash").style.transition="none",rt("fx-flash").style.opacity=.85,requestAnimationFrame(()=>{rt("fx-flash").style.transition="opacity 1.2s",rt("fx-flash").style.opacity=0}))}else i.e==="plank"&&i.by===Pe.S.id?(Q.mpRepairs=(Q.mpRepairs||0)+1,Ut.repair(),No("+10")):i.e==="crate"&&i.s==="shut"&&Ln("The toolbox slammed shut")},onAct:i=>{if(!i.ok){i.why==="pts"?(Ut.deny(),Ln("Not enough points")):i.why==="not-yours"&&Ln("That weapon belongs to a teammate");return}i.a==="buy"?(Ut.cash(),Uo(i.w)):i.a==="door"?Ut.cash():i.a==="crate"&&(Ut.cash(),i.s==="roll"?(Ut.open(),Ut.jingle(4)):i.s==="take"&&(Uo(i.w),Ji(ke[i.w].name.toUpperCase())))},onPlank:(i,t)=>{t&&Ro.plank(i,!0)},onDoor:()=>{Ut.door(),Ji("GATE OPEN","The back lot awaits")},onCrate:(i,t,e)=>{let n=ne.crate;i==="idle"?n.state!=="idle"&&Th():i==="roll"&&n.state==="idle"?(n.state="roll",n.t=0,n.pick=t):i==="ready"&&(n.state==="idle"||n.state==="roll"&&n.t<3.4)&&(n.state="roll",n.t=3.61,n.pick=t),n.mine=e},syncUps:i=>{let t=new Set(i.map(e=>e[0]));for(let e=Q.ups.length-1;e>=0;e--){let n=Q.ups[e];n.sid&&!t.has(n.sid)&&(cn.remove(n.g),we.glowBurst(new I(n.x,1,n.z),...ui[n.type].col.map(s=>s*.7),24,4),Q.ups.splice(e,1))}for(let[e,n,s,r]of i)Q.ups.some(a=>a.sid===e)||(Eh(n,s,r),Q.ups[Q.ups.length-1].sid=e)},onOver:()=>{setTimeout(()=>{R.dead=!0,G0(),Pe.stop(),rt("mpTag").classList.add("hidden")},1500)},onQuit:()=>wh()});var Ud=()=>(rt("coName").value||"Survivor").trim().slice(0,16);rt("coQuick").onclick=()=>Pe.connect({url:Nd,name:Ud(),join:{map:Ui.id}});rt("coCreate").onclick=()=>Pe.connect({url:Nd,name:Ud(),join:{create:!0,map:Ui.id}});rt("coJoin").onclick=()=>{let i=rt("coCode").value.trim().toUpperCase();if(!/^[A-Z2-9]{5}$/.test(i)){rt("coMsg").textContent="Room codes are 5 letters/numbers";return}Pe.connect({url:Nd,name:Ud(),join:{code:i}})};window.__game={MP:Pe,get MODE(){return Un},MAP:Ui,MAPS:th,PLAYER_MAX_HP:Do,MEDKIT_HP_FRAC:L0,MEDKIT_COOLDOWN:N0,MEDKIT_HEAL_FRAC:U0,medKitReady:wd,medKitOnKill:z0,G:Q,P:R,world:ne,zombies:Ge,fx:we,input:se,tick:Dd,startGame:Hr,shoot:B0,applyTier:bh,switchTo:Or,startReload:Mh,pause:Oo,resume:Id,toMenu:wh,giveWeapon:Uo,spawnPower:Eh,pickPower:k0,interact:V0,findFocus:H0,die:Ad,get tier(){return Xn},cam:Ve,renderer:Nn,scene:cn,WEAPONS:ke,sfx:Ut,renderOnce:U1,aimAt(i,t=!1){let e=i.pos.x-R.x,n=i.pos.z-R.z,s=(t?1.66:1)*i.scale-1.7;R.yaw=Math.atan2(-e,-n),R.pitch=Math.atan2(s,Math.hypot(e,n)),R.rP=R.rY=0},isTouch:ln};
