(()=>{var qu=0,Qc=1,Yu=2;var xs=1,Zu=2,lr=3,Zi=0,en=1,mn=2,ze=0,Ji=1,nn=2,th=3,eh=4,jo=5;var Ln=100,Ju=101,$u=102,Ku=103,ju=104,_s=200,Qu=201,td=202,ed=203,nh=204,ih=205,na=206,nd=207,ia=208,id=209,sd=210,rd=211,ad=212,od=213,ld=214,bo=0,To=1,Eo=2,Ks=3,wo=4,Ao=5,Ro=6,Co=7,sh=0,cd=1,hd=2,Wn=0,sa=1,ra=2,aa=3,vs=4,oa=5,la=6,ca=7;var rh=300,$i=301,ys=302,Qo=303,tl=304,ha=306,Pn=1e3,jn=1001,Po=1002,Be=1003,ud=1004;var ua=1005;var tn=1006,el=1007;var Ki=1008;var ln=1009,ah=1010,oh=1011,cr=1012,nl=1013,Xn=1014,Nn=1015,Ne=1016,il=1017,sl=1018,ji=1020,lh=35902,ch=35899,hh=1021,uh=1022,vn=1023,Qn=1026,si=1027,rl=1028,al=1029,Qi=1030,ol=1031;var ll=1033,da=33776,fa=33777,pa=33778,ma=33779,cl=35840,hl=35841,ul=35842,dl=35843,fl=36196,pl=37492,ml=37496,gl=37488,xl=37489,ga=37490,_l=37491,vl=37808,yl=37809,Ml=37810,Sl=37811,bl=37812,Tl=37813,El=37814,wl=37815,Al=37816,Rl=37817,Cl=37818,Pl=37819,Il=37820,Dl=37821,Ll=36492,Nl=36494,Ul=36495,Fl=36283,Ol=36284,xa=36285,Bl=36286;var Pr=2300,Io=2301,Mo=2302,Gc=2303,Wc=2400,Xc=2401,qc=2402;var dd=3200;var _a=0,fd=1,wi="",Oe="srgb",Ir="srgb-linear",Dr="linear",oe="srgb";var So=7680;var pd=519,md=512,gd=513,xd=514,zl=515,_d=516,vd=517,kl=518,yd=519,dh=35044,va=35048;var fh="300 es",kn=2e3,js=2001;function Zf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Jf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Md(){let i=Lr("canvas");return i.style.display="block",i}var vu={},Qs=null;function Nr(...i){let t="THREE."+i.shift();Qs?Qs("log",t,...i):console.log(t,...i)}function Sd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ot(...i){i=Sd(i);let t="THREE."+i.shift();if(Qs)Qs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ft(...i){i=Sd(i);let t="THREE."+i.shift();if(Qs)Qs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function us(...i){let t=i.join(" ");t in vu||(vu[t]=!0,Ot(...i))}function bd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Td={[bo]:To,[Eo]:Ro,[wo]:Co,[Ks]:Ao,[To]:bo,[Ro]:Eo,[Co]:wo,[Ao]:Ks},ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var vc=Math.PI/180,Ur=180/Math.PI;function Hi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function $f(i,t){return(i%t+t)%t}function yc(i,t,e){return(1-e)*i+e*t}function Kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var _h=class _h{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_h.prototype.isVector2=!0;var bt=_h,In=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],v=r[a+3];if(u!==v||c!==d||l!==f||h!==m){let g=c*d+l*f+h*m+u*v;g<0&&(d=-d,f=-f,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){let b=Math.acos(g),A=Math.sin(b);p=Math.sin(p*b)/A,o=Math.sin(o*b)/A,c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+v*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+v*o;let b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-o*f,t[e+2]=l*m+h*f+o*d-c*u,t[e+3]=h*m-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},vh=class vh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mc.copy(this).projectOnVector(t),this.sub(Mc)}reflect(t){return this.sub(Mc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vh.prototype.isVector3=!0;var I=vh,Mc=new I,yu=new In,yh=class yh{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=s[0],g=s[3],p=s[6],b=s[1],A=s[4],y=s[7],S=s[2],T=s[5],C=s[8];return r[0]=a*v+o*b+c*S,r[3]=a*g+o*A+c*T,r[6]=a*p+o*y+c*C,r[1]=l*v+h*b+u*S,r[4]=l*g+h*A+u*T,r[7]=l*p+h*y+u*C,r[2]=d*v+f*b+m*S,r[5]=d*g+f*A+m*T,r[8]=d*p+f*y+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sc.makeScale(t,e)),this}rotate(t){return us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sc.makeRotation(-t)),this}translate(t,e){return us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};yh.prototype.isMatrix3=!0;var kt=yh,Sc=new kt,Mu=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Su=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kf(){let i={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===oe&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===oe&&(s.r=$s(s.r),s.g=$s(s.g),s.b=$s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wi?Dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ir]:{primaries:t,whitePoint:n,transfer:Dr,toXYZ:Mu,fromXYZ:Su,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:Mu,fromXYZ:Su,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),i}var $t=Kf();function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ds,Do=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ds===void 0&&(Ds=Lr("canvas")),Ds.width=t.width,Ds.height=t.height;let s=Ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Lr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jf=0,tr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bc(s[a].image)):r.push(bc(s[a]))}else r=bc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function bc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Do.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var Qf=0,Tc=new I,fn=class i extends ti{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=jn,s=jn,r=tn,a=Ki,o=vn,c=ln,l=i.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Hi(),this.name="",this.source=new tr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tc).x}get height(){return this.source.getSize(Tc).y}get depth(){return this.source.getSize(Tc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pn:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case Po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pn:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case Po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=rh;fn.DEFAULT_ANISOTROPY=1;var Mh=class Mh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(l+1)/2,y=(f+1)/2,S=(p+1)/2,T=(h+d)/4,C=(u+v)/4,_=(m+g)/4;return A>y&&A>S?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=T/n,r=C/n):y>S?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=_/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=C/r,s=_/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-v)/b,this.z=(d-h)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mh.prototype.isVector4=!0;var Re=Mh,Lo=class extends ti{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new fn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new tr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Te=class extends Lo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fr=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var No=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ko=class Ko{constructor(t,e,n,s,r,a,o,c,l,h,u,d,f,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,f,m,v,g)}set(t,e,n,s,r,a,o,c,l,h,u,d,f,m,v,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ko().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ls.setFromMatrixColumn(t,0).length(),r=1/Ls.setFromMatrixColumn(t,1).length(),a=1/Ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,m=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=m+f*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,v=l*u;e[0]=d+v*o,e[4]=m*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=v+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,v=l*u;e[0]=d-v*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,f=a*u,m=o*h,v=o*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,f=a*l,m=o*c,v=o*l;e[0]=c*h,e[4]=v-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-v*u}else if(t.order==="XZY"){let d=a*c,f=a*l,m=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tp,t,ep)}lookAt(t,e,n){let s=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Oi.crossVectors(n,bn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Oi.crossVectors(n,bn)),Oi.normalize(),Ja.crossVectors(bn,Oi),s[0]=Oi.x,s[4]=Ja.x,s[8]=bn.x,s[1]=Oi.y,s[5]=Ja.y,s[9]=bn.y,s[2]=Oi.z,s[6]=Ja.z,s[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],b=n[3],A=n[7],y=n[11],S=n[15],T=s[0],C=s[4],_=s[8],E=s[12],P=s[1],D=s[5],L=s[9],z=s[13],N=s[2],k=s[6],q=s[10],Y=s[14],st=s[3],W=s[7],j=s[11],it=s[15];return r[0]=a*T+o*P+c*N+l*st,r[4]=a*C+o*D+c*k+l*W,r[8]=a*_+o*L+c*q+l*j,r[12]=a*E+o*z+c*Y+l*it,r[1]=h*T+u*P+d*N+f*st,r[5]=h*C+u*D+d*k+f*W,r[9]=h*_+u*L+d*q+f*j,r[13]=h*E+u*z+d*Y+f*it,r[2]=m*T+v*P+g*N+p*st,r[6]=m*C+v*D+g*k+p*W,r[10]=m*_+v*L+g*q+p*j,r[14]=m*E+v*z+g*Y+p*it,r[3]=b*T+A*P+y*N+S*st,r[7]=b*C+A*D+y*k+S*W,r[11]=b*_+A*L+y*q+S*j,r[15]=b*E+A*z+y*Y+S*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],v=t[7],g=t[11],p=t[15],b=c*f-l*d,A=o*f-l*u,y=o*d-c*u,S=a*f-l*h,T=a*d-c*h,C=a*u-o*h;return e*(v*b-g*A+p*y)-n*(m*b-g*S+p*T)+s*(m*A-v*S+p*C)-r*(m*y-v*T+g*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],v=t[13],g=t[14],p=t[15],b=e*o-n*a,A=e*c-s*a,y=e*l-r*a,S=n*c-s*o,T=n*l-r*o,C=s*l-r*c,_=h*v-u*m,E=h*g-d*m,P=h*p-f*m,D=u*g-d*v,L=u*p-f*v,z=d*p-f*g,N=b*z-A*L+y*D+S*P-T*E+C*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/N;return t[0]=(o*z-c*L+l*D)*k,t[1]=(s*L-n*z-r*D)*k,t[2]=(v*C-g*T+p*S)*k,t[3]=(d*T-u*C-f*S)*k,t[4]=(c*P-a*z-l*E)*k,t[5]=(e*z-s*P+r*E)*k,t[6]=(g*y-m*C-p*A)*k,t[7]=(h*C-d*y+f*A)*k,t[8]=(a*L-o*P+l*_)*k,t[9]=(n*P-e*L-r*_)*k,t[10]=(m*T-v*y+p*b)*k,t[11]=(u*y-h*T-f*b)*k,t[12]=(o*E-a*D-c*_)*k,t[13]=(e*D-n*E+s*_)*k,t[14]=(v*A-m*S-g*b)*k,t[15]=(h*S-u*A+d*b)*k,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,v=a*h,g=a*u,p=o*u,b=c*l,A=c*h,y=c*u,S=n.x,T=n.y,C=n.z;return s[0]=(1-(v+p))*S,s[1]=(f+y)*S,s[2]=(m-A)*S,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(d+p))*T,s[6]=(g+b)*T,s[7]=0,s[8]=(m+A)*C,s[9]=(g-b)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ls.set(s[0],s[1],s[2]).length(),o=Ls.set(s[4],s[5],s[6]).length(),c=Ls.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Fn.copy(this);let l=1/a,h=1/o,u=1/c;return Fn.elements[0]*=l,Fn.elements[1]*=l,Fn.elements[2]*=l,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,e.setFromRotationMatrix(Fn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=kn,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,v;if(c)m=r/(a-r),v=a*r/(a-r);else if(o===kn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===js)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=kn,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),m,v;if(c)m=1/(a-r),v=a/(a-r);else if(o===kn)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===js)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ko.prototype.isMatrix4=!0;var te=Ko,Ls=new I,Fn=new te,tp=new I(0,0,0),ep=new I(1,1,1),Oi=new I,Ja=new I,bn=new I,bu=new te,Tu=new In,Vn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tu.setFromEuler(this),this.setFromQuaternion(Tu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var Or=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},np=0,Eu=new I,Ns=new In,mi=new te,$a=new I,Mr=new I,ip=new I,sp=new In,wu=new I(1,0,0),Au=new I(0,1,0),Ru=new I(0,0,1),Cu={type:"added"},rp={type:"removed"},Us={type:"childadded",child:null},Ec={type:"childremoved",child:null},Ce=class i extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Vn,n=new In,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new kt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(wu,t)}rotateY(t){return this.rotateOnAxis(Au,t)}rotateZ(t){return this.rotateOnAxis(Ru,t)}translateOnAxis(t,e){return Eu.copy(t).applyQuaternion(this.quaternion),this.position.add(Eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wu,t)}translateY(t){return this.translateOnAxis(Au,t)}translateZ(t){return this.translateOnAxis(Ru,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$a.copy(t):$a.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Mr,$a,this.up):mi.lookAt($a,Mr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(mi),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ft("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cu),Us.child=t,this.dispatchEvent(Us),Us.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rp),Ec.child=t,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cu),Us.child=t,this.dispatchEvent(Us),Us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,ip),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,sp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ce.DEFAULT_UP=new I(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yt=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},ap={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ap)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function wc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=$f(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=wc(a,r,t+1/3),this.g=wc(a,r,t),this.b=wc(a,r,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let n=Ed[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return $t.workingToColorSpace(on.copy(this),t),Math.round(ne(on.r*255,0,255))*65536+Math.round(ne(on.g*255,0,255))*256+Math.round(ne(on.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(on.copy(this),e);let n=on.r,s=on.g,r=on.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=Oe){$t.workingToColorSpace(on.copy(this),t);let e=on.r,n=on.g,s=on.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(Ka);let n=yc(Bi.h,Ka.h,e),s=yc(Bi.s,Ka.s,e),r=yc(Bi.l,Ka.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new pt;pt.NAMES=Ed;var Br=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new pt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ds=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},On=new I,gi=new I,Ac=new I,xi=new I,Fs=new I,Os=new I,Pu=new I,Rc=new I,Cc=new I,Pc=new I,Ic=new Re,Dc=new Re,Lc=new Re,yi=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),On.subVectors(t,e),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){On.subVectors(s,e),gi.subVectors(n,e),Ac.subVectors(t,e);let a=On.dot(On),o=On.dot(gi),c=On.dot(Ac),l=gi.dot(gi),h=gi.dot(Ac),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xi.x),c.addScaledVector(a,xi.y),c.addScaledVector(o,xi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ic.setScalar(0),Dc.setScalar(0),Lc.setScalar(0),Ic.fromBufferAttribute(t,e),Dc.fromBufferAttribute(t,n),Lc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ic,r.x),a.addScaledVector(Dc,r.y),a.addScaledVector(Lc,r.z),a}static isFrontFacing(t,e,n,s){return On.subVectors(n,e),gi.subVectors(t,e),On.cross(gi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),On.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Fs.subVectors(s,n),Os.subVectors(r,n),Rc.subVectors(t,n);let c=Fs.dot(Rc),l=Os.dot(Rc);if(c<=0&&l<=0)return e.copy(n);Cc.subVectors(t,s);let h=Fs.dot(Cc),u=Os.dot(Cc);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Fs,a);Pc.subVectors(t,r);let f=Fs.dot(Pc),m=Os.dot(Pc);if(m>=0&&f<=m)return e.copy(r);let v=f*l-c*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(Os,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Pu.subVectors(r,s),o=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Pu,o);let p=1/(g+v+d);return a=v*p,o=d*p,e.copy(n).addScaledVector(Fs,a).addScaledVector(Os,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ei=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Bn):Bn.fromBufferAttribute(r,a),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ja.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ja.copy(n.boundingBox)),ja.applyMatrix4(t.matrixWorld),this.union(ja)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sr),Qa.subVectors(this.max,Sr),Bs.subVectors(t.a,Sr),zs.subVectors(t.b,Sr),ks.subVectors(t.c,Sr),zi.subVectors(zs,Bs),ki.subVectors(ks,zs),os.subVectors(Bs,ks);let e=[0,-zi.z,zi.y,0,-ki.z,ki.y,0,-os.z,os.y,zi.z,0,-zi.x,ki.z,0,-ki.x,os.z,0,-os.x,-zi.y,zi.x,0,-ki.y,ki.x,0,-os.y,os.x,0];return!Nc(e,Bs,zs,ks,Qa)||(e=[1,0,0,0,1,0,0,0,1],!Nc(e,Bs,zs,ks,Qa))?!1:(to.crossVectors(zi,ki),e=[to.x,to.y,to.z],Nc(e,Bs,zs,ks,Qa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_i=[new I,new I,new I,new I,new I,new I,new I,new I],Bn=new I,ja=new ei,Bs=new I,zs=new I,ks=new I,zi=new I,ki=new I,os=new I,Sr=new I,Qa=new I,to=new I,ls=new I;function Nc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ls.fromArray(i,r);let o=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),c=t.dot(ls),l=e.dot(ls),h=n.dot(ls);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ge=new I,eo=new bt,op=0,We=class extends ti{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:op++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dh,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)eo.fromBufferAttribute(this,e),eo.applyMatrix3(t),this.setXY(e,eo.x,eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var zr=class extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var kr=class extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var me=class extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}},lp=new ei,br=new I,Uc=new I,Si=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):lp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;br.subVectors(t,this.center);let e=br.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(br,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(br.copy(t.center).add(Uc)),this.expandByPoint(br.copy(t.center).sub(Uc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},cp=0,Cn=new te,Fc=new Ce,Vs=new I,Tn=new ei,Tr=new ei,$e=new I,Le=class i extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zf(t)?kr:zr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return Fc.lookAt(t),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Tr.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(Tn.min,Tr.min),Tn.expandByPoint($e),$e.addVectors(Tn.max,Tr.max),Tn.expandByPoint($e)):(Tn.expandByPoint(Tr.min),Tn.expandByPoint(Tr.max))}Tn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared($e));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)$e.fromBufferAttribute(o,l),c&&(Vs.fromBufferAttribute(t,l),$e.add(Vs)),s=Math.max(s,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new We(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new I,c[_]=new I;let l=new I,h=new I,u=new I,d=new bt,f=new bt,m=new bt,v=new I,g=new I;function p(_,E,P){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,P),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,P),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(D),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(D),o[_].add(v),o[E].add(v),o[P].add(v),c[_].add(g),c[E].add(g),c[P].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,E=b.length;_<E;++_){let P=b[_],D=P.start,L=P.count;for(let z=D,N=D+L;z<N;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let A=new I,y=new I,S=new I,T=new I;function C(_){S.fromBufferAttribute(s,_),T.copy(S);let E=o[_];A.copy(E),A.sub(S.multiplyScalar(S.dot(E))).normalize(),y.crossVectors(T,E);let D=y.dot(c[_])<0?-1:1;a.setXYZW(_,A.x,A.y,A.z,D)}for(let _=0,E=b.length;_<E;++_){let P=b[_],D=P.start,L=P.count;for(let z=D,N=D+L;z<N;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new We(d,h,u)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=dh,this.updateRanges=[],this.version=0,this.uuid=Hi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},dn=new I,nr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Kn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Nr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new We(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Nr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Oc=new I,hp=new I,up=new kt,zn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Oc.subVectors(n,e).cross(hp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Oc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||up.getNormalMatrix(t),s=this.coplanarPoint(Oc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},dp=0,Hn=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=Ji,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=Ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=So,this.stencilZFail=So,this.stencilZPass=So,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new zn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new bt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new bt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ni=class extends Hn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hs,Er=new I,Gs=new I,Ws=new I,Xs=new bt,wr=new bt,wd=new te,no=new I,Ar=new I,io=new I,Iu=new bt,Bc=new bt,Du=new bt,bi=class extends Ce{constructor(t=new ni){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new Le;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Vr(e,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new nr(n,3,0,!1)),Hs.setAttribute("uv",new nr(n,2,3,!1))}this.geometry=Hs,this.material=t,this.center=new bt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ft('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gs.setFromMatrixScale(this.matrixWorld),wd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ws.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gs.multiplyScalar(-Ws.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;so(no.set(-.5,-.5,0),Ws,a,Gs,s,r),so(Ar.set(.5,-.5,0),Ws,a,Gs,s,r),so(io.set(.5,.5,0),Ws,a,Gs,s,r),Iu.set(0,0),Bc.set(1,0),Du.set(1,1);let o=t.ray.intersectTriangle(no,Ar,io,!1,Er);if(o===null&&(so(Ar.set(-.5,.5,0),Ws,a,Gs,s,r),Bc.set(0,1),o=t.ray.intersectTriangle(no,io,Ar,!1,Er),o===null))return;let c=t.ray.origin.distanceTo(Er);c<t.near||c>t.far||e.push({distance:c,point:Er.clone(),uv:yi.getInterpolation(Er,no,Ar,io,Iu,Bc,Du,new bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function so(i,t,e,n,s,r){Xs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(wr.x=r*Xs.x-s*Xs.y,wr.y=s*Xs.x+r*Xs.y):wr.copy(Xs),i.copy(t),i.x+=wr.x,i.y+=wr.y,i.applyMatrix4(wd)}var vi=new I,zc=new I,ro=new I,ao=new I,Hr=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){zc.copy(t).add(e).multiplyScalar(.5),ro.copy(e).sub(t).normalize(),ao.copy(this.origin).sub(zc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ro),o=ao.dot(this.direction),c=-ao.dot(ro),l=ao.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(zc).addScaledVector(ro,d),f}intersectSphere(t,e){if(t.radius<0)return null;vi.subVectors(t.center,this.origin);let n=vi.dot(this.direction),s=vi.dot(vi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,m=e.x-a.x,v=e.y-a.y,g=e.z-a.z,p=n.x-a.x,b=n.y-a.y,A=n.z-a.z,y=Math.abs(c),S=Math.abs(l),T=Math.abs(h),C,_,E,P,D,L,z,N,k,q,Y,st;if(y>=S&&y>=T?(E=c,L=u,k=m,st=p,c>=0?(C=l,_=h,P=d,D=f,z=v,N=g,q=b,Y=A):(C=h,_=l,P=f,D=d,z=g,N=v,q=A,Y=b)):S>=T?(E=l,L=d,k=v,st=b,l>=0?(C=h,_=c,P=f,D=u,z=g,N=m,q=A,Y=p):(C=c,_=h,P=u,D=f,z=m,N=g,q=p,Y=A)):(E=h,L=f,k=g,st=A,h>=0?(C=c,_=l,P=u,D=d,z=m,N=v,q=p,Y=b):(C=l,_=c,P=d,D=u,z=v,N=m,q=b,Y=p)),E===0)return null;let W=C/E,j=_/E,it=1/E,Rt=P-W*L,Ct=D-j*L,le=z-W*k,Jt=N-j*k,jt=q-W*st,Z=Y-j*st,Q=jt*Jt-Z*le,xt=Rt*Z-Ct*jt,Ut=le*Ct-Jt*Rt;if(s){if(Q<0||xt<0||Ut<0)return null}else if((Q<0||xt<0||Ut<0)&&(Q>0||xt>0||Ut>0))return null;let yt=Q+xt+Ut;if(yt===0)return null;let Vt=it*(Q*L+xt*k+Ut*st);return(yt>0?Vt<0:Vt>0)?null:this.at(Vt/yt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class extends Hn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Lu=new te,cs=new Hr,oo=new Si,Nu=new I,lo=new I,co=new I,ho=new I,kc=new I,uo=new I,Uu=new I,fo=new I,At=class extends Ce{constructor(t=new Le,e=new Pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){uo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(kc.fromBufferAttribute(u,t),a?uo.addScaledVector(kc,h):uo.addScaledVector(kc.sub(e),h))}e.add(uo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(r),cs.copy(t.ray).recast(t.near),!(oo.containsPoint(cs.origin)===!1&&(cs.intersectSphere(oo,Nu)===null||cs.origin.distanceToSquared(Nu)>(t.far-t.near)**2))&&(Lu.copy(r).invert(),cs.copy(t.ray).applyMatrix4(Lu),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,cs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=a[g.materialIndex],b=Math.max(g.start,f.start),A=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=b,S=A;y<S;y+=3){let T=o.getX(y),C=o.getX(y+1),_=o.getX(y+2);s=po(this,p,t,n,l,h,u,T,C,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let b=o.getX(g),A=o.getX(g+1),y=o.getX(g+2);s=po(this,a,t,n,l,h,u,b,A,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=a[g.materialIndex],b=Math.max(g.start,f.start),A=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=b,S=A;y<S;y+=3){let T=y,C=y+1,_=y+2;s=po(this,p,t,n,l,h,u,T,C,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let b=g,A=g+1,y=g+2;s=po(this,a,t,n,l,h,u,b,A,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function fp(i,t,e,n,s,r,a,o){let c;if(t.side===en?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Zi,o),c===null)return null;fo.copy(o),fo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(fo);return l<e.near||l>e.far?null:{distance:l,point:fo.clone(),object:i}}function po(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,lo),i.getVertexPosition(c,co),i.getVertexPosition(l,ho);let h=fp(i,t,e,n,lo,co,ho,Uu);if(h){let u=new I;yi.getBarycoord(Uu,lo,co,ho,u),s&&(h.uv=yi.getInterpolatedAttribute(s,o,c,l,u,new bt)),r&&(h.uv1=yi.getInterpolatedAttribute(r,o,c,l,u,new bt)),a&&(h.normal=yi.getInterpolatedAttribute(a,o,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new I,materialIndex:0};yi.getNormal(lo,co,ho,d.normal),h.face=d,h.barycoord=u}return h}var Ti=class extends fn{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Be,h=Be,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ir=class extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},qs=new te,Fu=new te,mo=[],Ou=new ei,pp=new te,Rr=new At,Cr=new Si,Gr=class extends At{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ir(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,pp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qs),Ou.copy(t.boundingBox).applyMatrix4(qs),this.boundingBox.union(Ou)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qs),Cr.copy(t.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(n),t.ray.intersectsSphere(Cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qs),Fu.multiplyMatrices(n,qs),Rr.matrixWorld=Fu,Rr.raycast(t,mo);for(let a=0,o=mo.length;a<o;a++){let c=mo[a];c.instanceId=r,c.object=this,e.push(c)}mo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ir(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ti(new Float32Array(s*this.count),s,this.count,rl,Nn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hs=new Si,mp=new bt(.5,.5),go=new I,sr=class{constructor(t=new zn,e=new zn,n=new zn,s=new zn,r=new zn,a=new zn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],v=r[9],g=r[10],p=r[11],b=r[12],A=r[13],y=r[14],S=r[15];if(s[0].setComponents(l-a,f-h,p-m,S-b).normalize(),s[1].setComponents(l+a,f+h,p+m,S+b).normalize(),s[2].setComponents(l+o,f+u,p+v,S+A).normalize(),s[3].setComponents(l-o,f-u,p-v,S-A).normalize(),n)s[4].setComponents(c,d,g,y).normalize(),s[5].setComponents(l-c,f-d,p-g,S-y).normalize();else if(s[4].setComponents(l-c,f-d,p-g,S-y).normalize(),e===kn)s[5].setComponents(l+c,f+d,p+g,S+y).normalize();else if(e===js)s[5].setComponents(c,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){hs.center.set(0,0,0);let e=mp.distanceTo(t.center);return hs.radius=.7071067811865476+e,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(go.x=s.normal.x>0?t.max.x:t.min.x,go.y=s.normal.y>0?t.max.y:t.min.y,go.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Uo=class extends Hn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Bu=new te,Yc=new Hr,xo=new Si,_o=new I,Wr=class extends Ce{constructor(t=new Le,e=new Uo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,t.ray.intersectsSphere(xo)===!1)return;Bu.copy(s).invert(),Yc.copy(t.ray).applyMatrix4(Bu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,v=f;m<v;m++){let g=l.getX(m);_o.fromBufferAttribute(u,g),zu(_o,g,c,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,v=f;m<v;m++)_o.fromBufferAttribute(u,m),zu(_o,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function zu(i,t,e,n,s,r,a){let o=Yc.distanceSqToPoint(i);if(o<e){let c=new I;Yc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Xr=class extends fn{constructor(t=[],e=$i,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Gn=class extends fn{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ii=class extends fn{constructor(t,e,n=Xn,s,r,a,o=Be,c=Be,l,h=Qn,u=1){if(h!==Qn&&h!==si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new tr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Fo=class extends ii{constructor(t,e=Xn,n=$i,s,r,a=Be,o=Be,c,l=Qn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},qr=class extends fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ee=class i extends Le{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function m(v,g,p,b,A,y,S,T,C,_,E){let P=y/C,D=S/_,L=y/2,z=S/2,N=T/2,k=C+1,q=_+1,Y=0,st=0,W=new I;for(let j=0;j<q;j++){let it=j*D-z;for(let Rt=0;Rt<k;Rt++){let Ct=Rt*P-L;W[v]=Ct*b,W[g]=it*A,W[p]=N,l.push(W.x,W.y,W.z),W[v]=0,W[g]=0,W[p]=T>0?1:-1,h.push(W.x,W.y,W.z),u.push(Rt/C),u.push(1-j/_),Y+=1}}for(let j=0;j<_;j++)for(let it=0;it<C;it++){let Rt=d+it+k*j,Ct=d+it+k*(j+1),le=d+(it+1)+k*(j+1),Jt=d+(it+1)+k*j;c.push(Rt,Ct,Jt),c.push(Ct,le,Jt),st+=6}o.addGroup(f,st,E),f+=st,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var pn=class i extends Le{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,v=[],g=n/2,p=0;b(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(f,2));function b(){let y=new I,S=new I,T=0,C=(e-t)/n;for(let _=0;_<=r;_++){let E=[],P=_/r,D=P*(e-t)+t;for(let L=0;L<=s;L++){let z=L/s,N=z*c+o,k=Math.sin(N),q=Math.cos(N);S.x=D*k,S.y=-P*n+g,S.z=D*q,u.push(S.x,S.y,S.z),y.set(k,C,q).normalize(),d.push(y.x,y.y,y.z),f.push(z,1-P),E.push(m++)}v.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){let P=v[E][_],D=v[E+1][_],L=v[E+1][_+1],z=v[E][_+1];(t>0||E!==0)&&(h.push(P,D,z),T+=3),(e>0||E!==r-1)&&(h.push(D,L,z),T+=3)}l.addGroup(p,T,0),p+=T}function A(y){let S=m,T=new bt,C=new I,_=0,E=y===!0?t:e,P=y===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,g*P,0),d.push(0,P,0),f.push(.5,.5),m++;let D=m;for(let L=0;L<=s;L++){let N=L/s*c+o,k=Math.cos(N),q=Math.sin(N);C.x=E*q,C.y=g*P,C.z=E*k,u.push(C.x,C.y,C.z),d.push(0,P,0),T.x=k*.5+.5,T.y=q*.5*P+.5,f.push(T.x,T.y),m++}for(let L=0;L<s;L++){let z=S+L,N=D+L;y===!0?h.push(N,N+1,z):h.push(N+1,N,z),_+=3}l.addGroup(p,_,y===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fs=class i extends pn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},rr=class i extends Le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(r.slice(),3)),this.setAttribute("uv",new me(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let A=new I,y=new I,S=new I;for(let T=0;T<e.length;T+=3)f(e[T+0],A),f(e[T+1],y),f(e[T+2],S),c(A,y,S,b)}function c(b,A,y,S){let T=S+1,C=[];for(let _=0;_<=T;_++){C[_]=[];let E=b.clone().lerp(y,_/T),P=A.clone().lerp(y,_/T),D=T-_;for(let L=0;L<=D;L++)L===0&&_===T?C[_][L]=E:C[_][L]=E.clone().lerp(P,L/D)}for(let _=0;_<T;_++)for(let E=0;E<2*(T-_)-1;E++){let P=Math.floor(E/2);E%2===0?(d(C[_][P+1]),d(C[_+1][P]),d(C[_][P])):(d(C[_][P+1]),d(C[_+1][P+1]),d(C[_+1][P]))}}function l(b){let A=new I;for(let y=0;y<r.length;y+=3)A.x=r[y+0],A.y=r[y+1],A.z=r[y+2],A.normalize().multiplyScalar(b),r[y+0]=A.x,r[y+1]=A.y,r[y+2]=A.z}function h(){let b=new I;for(let A=0;A<r.length;A+=3){b.x=r[A+0],b.y=r[A+1],b.z=r[A+2];let y=g(b)/2/Math.PI+.5,S=p(b)/Math.PI+.5;a.push(y,1-S)}m(),u()}function u(){for(let b=0;b<a.length;b+=6){let A=a[b+0],y=a[b+2],S=a[b+4],T=Math.max(A,y,S),C=Math.min(A,y,S);T>.9&&C<.1&&(A<.2&&(a[b+0]+=1),y<.2&&(a[b+2]+=1),S<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,A){let y=b*3;A.x=t[y+0],A.y=t[y+1],A.z=t[y+2]}function m(){let b=new I,A=new I,y=new I,S=new I,T=new bt,C=new bt,_=new bt;for(let E=0,P=0;E<r.length;E+=9,P+=6){b.set(r[E+0],r[E+1],r[E+2]),A.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),T.set(a[P+0],a[P+1]),C.set(a[P+2],a[P+3]),_.set(a[P+4],a[P+5]),S.copy(b).add(A).add(y).divideScalar(3);let D=g(S);v(T,P+0,b,D),v(C,P+2,A,D),v(_,P+4,y,D)}}function v(b,A,y,S){S<0&&b.x===1&&(a[A]=b.x-1),y.x===0&&y.z===0&&(a[A]=S/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Yr=class i extends rr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Zr=class i extends rr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Jr=class i extends rr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Dn=class i extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){let b=p*d-a;for(let A=0;A<l;A++){let y=A*u-r;m.push(y,-b,0),v.push(0,0,1),g.push(A/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){let A=b+l*p,y=b+l*(p+1),S=b+1+l*(p+1),T=b+1+l*p;f.push(A,y,T),f.push(y,S,T)}this.setIndex(f),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(v,3)),this.setAttribute("uv",new me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ei=class i extends Le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new I,d=new I,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let b=[],A=p/n,y=a+A*o,S=t*Math.cos(y),T=Math.sqrt(t*t-S*S),C=0;p===0&&a===0?C=.5/e:p===n&&c===Math.PI&&(C=-.5/e);for(let _=0;_<=e;_++){let E=_/e,P=s+E*r;u.x=-T*Math.cos(P),u.y=S,u.z=T*Math.sin(P),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(E+C,1-A),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let A=h[p][b+1],y=h[p][b],S=h[p+1][b],T=h[p+1][b+1];(p!==0||a>0)&&f.push(A,y,T),(p!==n-1||c<Math.PI)&&f.push(y,S,T)}this.setIndex(f),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(v,3)),this.setAttribute("uv",new me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var $r=class i extends Le{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new I,f=new I,m=new I;for(let v=0;v<=n;v++){let g=a+v/n*o;for(let p=0;p<=s;p++){let b=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(b),f.y=(t+e*Math.cos(g))*Math.sin(b),f.z=e*Math.sin(g),l.push(f.x,f.y,f.z),d.x=t*Math.cos(b),d.y=t*Math.sin(b),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(p/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=s;g++){let p=(s+1)*v+g-1,b=(s+1)*(v-1)+g-1,A=(s+1)*(v-1)+g,y=(s+1)*v+g;c.push(p,b,y),c.push(b,A,y)}this.setIndex(c),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ms(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ku(s))s.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ku(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function cn(i){let t={};for(let e=0;e<i.length;e++){let n=Ms(i[e]);for(let s in n)t[s]=n[s]}return t}function ku(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function gp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ph(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var gn={clone:Ms,merge:cn},xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ie=class extends Hn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=_p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=gp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new pt().setHex(s.value);break;case"v2":this.uniforms[n].value=new bt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[n].value=new kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new te().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ar=class extends ie{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ee=class extends Hn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_a,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Kr=class extends Hn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_a,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var Oo=class extends Hn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Bo=class extends Hn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ys(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Vc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Gi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},zo=class extends Gi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wc,endingEnd:Wc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xc:r=t,o=2*e-n;break;case qc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Xc:a=t,c=2*n-e;break;case qc:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),v=m*m,g=v*m,p=-d*g+2*d*v-d*m,b=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,A=(-1-f)*g+(1.5+f)*v+.5*m,y=f*g-f*v;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+b*a[l+S]+A*a[c+S]+y*a[u+S];return r}},ko=class extends Gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Vo=class extends Gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ho=class extends Gi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-e)/(s-e),v=1-m;for(let g=0;g!==o;++g)r[g]=a[l+g]*v+a[c+g]*m;return r}let d=o*2,f=t-1;for(let m=0;m!==o;++m){let v=a[l+m],g=a[c+m],p=f*d+m*2,b=u[p],A=u[p+1],y=t*d+m*2,S=h[y],T=h[y+1],C=yp(n,e,b,S,s);r[m]=Ad(C,v,A,T,g)}return r}};function Ad(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function vp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function yp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Ad(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=vp(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var En=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ys(e,this.TimeBufferType),this.values=Ys(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ys(t.times,Array),values:Ys(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Vc(t.settings)&&(n.settings={inTangents:Ys(t.settings.inTangents,Array),outTangents:Ys(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ko(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ho(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Pr:e=this.InterpolantFactoryMethodDiscrete;break;case Io:e=this.InterpolantFactoryMethodLinear;break;case Mo:e=this.InterpolantFactoryMethodSmooth;break;case Gc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ot("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return Io;case this.InterpolantFactoryMethodSmooth:return Mo;case this.InterpolantFactoryMethodBezier:return Gc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Vc(this.settings)&&(Vu(this.settings.inTangents,t),Vu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ft("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ft("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ft("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Ft("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Jf(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ft("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Mo,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let v=e[u+m];if(v!==e[d+m]||v!==e[f+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Vc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Vu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=Io;var Wi=class extends En{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Pr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends En{constructor(t,e,n,s){super(t,e,n,s)}};Go.prototype.ValueTypeName="color";var Wo=class extends En{constructor(t,e,n,s){super(t,e,n,s)}};Wo.prototype.ValueTypeName="number";var Xo=class extends Gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)In.slerpFlat(r,0,a,l-o,a,l,c);return r}},jr=class extends En{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Xo(this.times,this.values,this.getValueSize(),t)}};jr.prototype.ValueTypeName="quaternion";jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends En{constructor(t,e,n){super(t,e,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Pr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends En{constructor(t,e,n,s){super(t,e,n,s)}};qo.prototype.ValueTypeName="vector";var Yo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Rd=new Yo,Zo=class{constructor(t){this.manager=t!==void 0?t:Rd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Zo.DEFAULT_MATERIAL_NAME="__DEFAULT";var ps=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ms=class extends ps{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Hc=new te,Hu=new I,Gu=new I,or=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sr,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Hu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hu),Gu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Hc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===js||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Hc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},vo=new I,yo=new In,$n=new I,Qr=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(vo,yo,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,yo,$n.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(vo,yo,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,yo,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vi=new I,Wu=new bt,Xu=new bt,Ke=class extends Qr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z)}getViewSize(t,e){return this.getViewBounds(t,Wu,Xu),e.subVectors(Xu,Wu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(vc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Zc=class extends or{constructor(){super(new Ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Ur*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},ta=class extends ps{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Zc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Jc=class extends or{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0}},qi=class extends ps{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Yi=class extends Qr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},$c=class extends or{constructor(){super(new Yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gs=class extends ps{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new $c}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Zs=-90,Js=1,Jo=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ke(Zs,Js,t,e);s.layers=this.layers,this.add(s);let r=new Ke(Zs,Js,t,e);r.layers=this.layers,this.add(r);let a=new Ke(Zs,Js,t,e);a.layers=this.layers,this.add(a);let o=new Ke(Zs,Js,t,e);o.layers=this.layers,this.add(o);let c=new Ke(Zs,Js,t,e);c.layers=this.layers,this.add(c);let l=new Ke(Zs,Js,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},$o=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},ea=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Mp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Mp(){this._document.hidden===!1&&this.reset()}var mh="\\[\\]\\.:\\/",Sp=new RegExp("["+mh+"]","g"),gh="[^"+mh+"]",bp="[^"+mh.replace("\\.","")+"]",Tp=/((?:WC+[\/:])*)/.source.replace("WC",gh),Ep=/(WCOD+)?/.source.replace("WCOD",bp),wp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gh),Ap=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gh),Rp=new RegExp("^"+Tp+Ep+wp+Ap+"$"),Cp=["material","materials","bones","map"],Kc=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sp,"")}static parseTrackName(t){let e=Rp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Cp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Ft("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Kc;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uv=new Float32Array(1);var Sh=class Sh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Sh.prototype.isMatrix2=!0;var jc=Sh;function xh(i,t,e,n){let s=Pp(n);switch(e){case hh:return i*t;case rl:return i*t/s.components*s.byteLength;case al:return i*t/s.components*s.byteLength;case Qi:return i*t*2/s.components*s.byteLength;case ol:return i*t*2/s.components*s.byteLength;case uh:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case ll:return i*t*4/s.components*s.byteLength;case da:case fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pa:case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hl:case dl:return Math.max(i,16)*Math.max(t,8)/4;case cl:case ul:return Math.max(i,8)*Math.max(t,8)/2;case fl:case pl:case gl:case xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ml:case ga:case _l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case bl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Al:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ll:case Nl:case Ul:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Fl:case Ol:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xa:case Bl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pp(i){switch(i){case ln:case ah:return{byteLength:1,components:1};case cr:case oh:case Ne:return{byteLength:2,components:1};case il:case sl:return{byteLength:2,components:4};case Xn:case nl:case Nn:return{byteLength:4,components:1};case lh:case ch:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function $d(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Up(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let v=u[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Op=`#ifdef USE_ALPHAHASH
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
#endif`,Bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hp=`#ifdef USE_AOMAP
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
#endif`,Gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wp=`#ifdef USE_BATCHING
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
#endif`,Xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
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
#endif`,$p=`#ifdef USE_BUMPMAP
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
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,rm=`#define PI 3.141592653589793
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
} // validated`,am=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,om=`vec3 transformedNormal = objectNormal;
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
#endif`,lm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gm=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
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
#endif`,vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bm=`#ifdef USE_GRADIENTMAP
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
}`,Tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Em=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Am=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lm=`PhysicalMaterial material;
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
#endif`,Nm=`uniform sampler2D dfgLUT;
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
}`,Um=`
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
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Om=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qm=`#if defined( USE_POINTS_UV )
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
#endif`,Ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$m=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jm=`#ifdef USE_MORPHTARGETS
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
#endif`,Qm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,e0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,n0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,r0=`#ifdef USE_NORMALMAP
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
#endif`,a0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,d0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,M0=`float getShadowMask() {
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
}`,S0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b0=`#ifdef USE_SKINNING
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
#endif`,T0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,w0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,P0=`#ifdef USE_TRANSMISSION
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
#endif`,I0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,F0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O0=`uniform sampler2D t2D;
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
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`#include <common>
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
}`,G0=`#if DEPTH_PACKING == 3200
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
}`,W0=`#define DISTANCE
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
}`,X0=`#define DISTANCE
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`uniform float scale;
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
}`,J0=`uniform vec3 diffuse;
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
}`,$0=`#include <common>
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
}`,K0=`uniform vec3 diffuse;
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
}`,j0=`#define LAMBERT
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
}`,Q0=`#define LAMBERT
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
}`,tg=`#define MATCAP
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
}`,eg=`#define MATCAP
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
}`,ng=`#define NORMAL
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
}`,ig=`#define NORMAL
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
}`,sg=`#define PHONG
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
}`,rg=`#define PHONG
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
}`,ag=`#define STANDARD
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
}`,og=`#define STANDARD
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
}`,lg=`#define TOON
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
}`,cg=`#define TOON
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
}`,hg=`uniform float size;
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
}`,ug=`uniform vec3 diffuse;
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
}`,dg=`#include <common>
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
}`,fg=`uniform vec3 color;
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
}`,pg=`uniform float rotation;
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
}`,mg=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Fp,alphahash_pars_fragment:Op,alphamap_fragment:Bp,alphamap_pars_fragment:zp,alphatest_fragment:kp,alphatest_pars_fragment:Vp,aomap_fragment:Hp,aomap_pars_fragment:Gp,batching_pars_vertex:Wp,batching_vertex:Xp,begin_vertex:qp,beginnormal_vertex:Yp,bsdfs:Zp,iridescence_fragment:Jp,bumpmap_pars_fragment:$p,clipping_planes_fragment:Kp,clipping_planes_pars_fragment:jp,clipping_planes_pars_vertex:Qp,clipping_planes_vertex:tm,color_fragment:em,color_pars_fragment:nm,color_pars_vertex:im,color_vertex:sm,common:rm,cube_uv_reflection_fragment:am,defaultnormal_vertex:om,displacementmap_pars_vertex:lm,displacementmap_vertex:cm,emissivemap_fragment:hm,emissivemap_pars_fragment:um,colorspace_fragment:dm,colorspace_pars_fragment:fm,envmap_fragment:pm,envmap_common_pars_fragment:mm,envmap_pars_fragment:gm,envmap_pars_vertex:xm,envmap_physical_pars_fragment:Rm,envmap_vertex:_m,fog_vertex:vm,fog_pars_vertex:ym,fog_fragment:Mm,fog_pars_fragment:Sm,gradientmap_pars_fragment:bm,lightmap_pars_fragment:Tm,lights_lambert_fragment:Em,lights_lambert_pars_fragment:wm,lights_pars_begin:Am,lights_toon_fragment:Cm,lights_toon_pars_fragment:Pm,lights_phong_fragment:Im,lights_phong_pars_fragment:Dm,lights_physical_fragment:Lm,lights_physical_pars_fragment:Nm,lights_fragment_begin:Um,lights_fragment_maps:Fm,lights_fragment_end:Om,lightprobes_pars_fragment:Bm,logdepthbuf_fragment:zm,logdepthbuf_pars_fragment:km,logdepthbuf_pars_vertex:Vm,logdepthbuf_vertex:Hm,map_fragment:Gm,map_pars_fragment:Wm,map_particle_fragment:Xm,map_particle_pars_fragment:qm,metalnessmap_fragment:Ym,metalnessmap_pars_fragment:Zm,morphinstance_vertex:Jm,morphcolor_vertex:$m,morphnormal_vertex:Km,morphtarget_pars_vertex:jm,morphtarget_vertex:Qm,normal_fragment_begin:t0,normal_fragment_maps:e0,normal_pars_fragment:n0,normal_pars_vertex:i0,normal_vertex:s0,normalmap_pars_fragment:r0,clearcoat_normal_fragment_begin:a0,clearcoat_normal_fragment_maps:o0,clearcoat_pars_fragment:l0,iridescence_pars_fragment:c0,opaque_fragment:h0,packing:u0,premultiplied_alpha_fragment:d0,project_vertex:f0,dithering_fragment:p0,dithering_pars_fragment:m0,roughnessmap_fragment:g0,roughnessmap_pars_fragment:x0,shadowmap_pars_fragment:_0,shadowmap_pars_vertex:v0,shadowmap_vertex:y0,shadowmask_pars_fragment:M0,skinbase_vertex:S0,skinning_pars_vertex:b0,skinning_vertex:T0,skinnormal_vertex:E0,specularmap_fragment:w0,specularmap_pars_fragment:A0,tonemapping_fragment:R0,tonemapping_pars_fragment:C0,transmission_fragment:P0,transmission_pars_fragment:I0,uv_pars_fragment:D0,uv_pars_vertex:L0,uv_vertex:N0,worldpos_vertex:U0,background_vert:F0,background_frag:O0,backgroundCube_vert:B0,backgroundCube_frag:z0,cube_vert:k0,cube_frag:V0,depth_vert:H0,depth_frag:G0,distance_vert:W0,distance_frag:X0,equirect_vert:q0,equirect_frag:Y0,linedashed_vert:Z0,linedashed_frag:J0,meshbasic_vert:$0,meshbasic_frag:K0,meshlambert_vert:j0,meshlambert_frag:Q0,meshmatcap_vert:tg,meshmatcap_frag:eg,meshnormal_vert:ng,meshnormal_frag:ig,meshphong_vert:sg,meshphong_frag:rg,meshphysical_vert:ag,meshphysical_frag:og,meshtoon_vert:lg,meshtoon_frag:cg,points_vert:hg,points_frag:ug,shadow_vert:dg,shadow_frag:fg,sprite_vert:pg,sprite_frag:mg},mt={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},ai={basic:{uniforms:cn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:cn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:cn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:cn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:cn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new pt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:cn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:cn([mt.points,mt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:cn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:cn([mt.common,mt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:cn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:cn([mt.sprite,mt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:cn([mt.common,mt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:cn([mt.lights,mt.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};ai.physical={uniforms:cn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var Vl={r:0,b:0,g:0},gg=new te,Kd=new kt;Kd.set(-1,0,0,0,1,0,0,0,1);function xg(i,t,e,n,s,r){let a=new pt(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){let y=b.backgroundBlurriness>0;A=t.get(A,y)}return A}function m(b){let A=!1,y=f(b);y===null?g(a,o):y&&y.isColor&&(g(y,1),A=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(b,A){let y=f(A);y&&(y.isCubeTexture||y.mapping===ha)?(l===void 0&&(l=new At(new ee(1,1,1),new ie({name:"BackgroundCubeMaterial",uniforms:Ms(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(gg.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Kd),l.material.toneMapped=$t.getTransfer(y.colorSpace)!==oe,(h!==y||u!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new At(new Dn(2,2),new ie({name:"BackgroundMaterial",uniforms:Ms(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=$t.getTransfer(y.colorSpace)!==oe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function g(b,A){b.getRGB(Vl,ph(i)),e.buffers.color.setClear(Vl.r,Vl.g,Vl.b,A,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:m,addToRenderList:v,dispose:p}}function _g(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(D,L,z,N,k){let q=!1,Y=u(D,N,z,L);r!==Y&&(r=Y,l(r.object)),q=f(D,N,z,k),q&&m(D,N,z,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(D,L,z,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function u(D,L,z,N){let k=N.wireframe===!0,q=n[L.id];q===void 0&&(q={},n[L.id]=q);let Y=D.isInstancedMesh===!0?D.id:0,st=q[Y];st===void 0&&(st={},q[Y]=st);let W=st[z.id];W===void 0&&(W={},st[z.id]=W);let j=W[k];return j===void 0&&(j=d(c()),W[k]=j),j}function d(D){let L=[],z=[],N=[];for(let k=0;k<e;k++)L[k]=0,z[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:N,object:D,attributes:{},index:null}}function f(D,L,z,N){let k=r.attributes,q=L.attributes,Y=0,st=z.getAttributes();for(let W in st)if(st[W].location>=0){let it=k[W],Rt=q[W];if(Rt===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(Rt=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(Rt=D.instanceColor)),it===void 0||it.attribute!==Rt||Rt&&it.data!==Rt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==N}function m(D,L,z,N){let k={},q=L.attributes,Y=0,st=z.getAttributes();for(let W in st)if(st[W].location>=0){let it=q[W];it===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(it=D.instanceColor));let Rt={};Rt.attribute=it,it&&it.data&&(Rt.data=it.data),k[W]=Rt,Y++}r.attributes=k,r.attributesNum=Y,r.index=N}function v(){let D=r.newAttributes;for(let L=0,z=D.length;L<z;L++)D[L]=0}function g(D){p(D,0)}function p(D,L){let z=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;z[D]=1,N[D]===0&&(i.enableVertexAttribArray(D),N[D]=1),k[D]!==L&&(i.vertexAttribDivisor(D,L),k[D]=L)}function b(){let D=r.newAttributes,L=r.enabledAttributes;for(let z=0,N=L.length;z<N;z++)L[z]!==D[z]&&(i.disableVertexAttribArray(z),L[z]=0)}function A(D,L,z,N,k,q,Y){Y===!0?i.vertexAttribIPointer(D,L,z,k,q):i.vertexAttribPointer(D,L,z,N,k,q)}function y(D,L,z,N){v();let k=N.attributes,q=z.getAttributes(),Y=L.defaultAttributeValues;for(let st in q){let W=q[st];if(W.location>=0){let j=k[st];if(j===void 0&&(st==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),st==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){let it=j.normalized,Rt=j.itemSize,Ct=t.get(j);if(Ct===void 0)continue;let le=Ct.buffer,Jt=Ct.type,jt=Ct.bytesPerElement,Z=Jt===i.INT||Jt===i.UNSIGNED_INT||j.gpuType===nl;if(j.isInterleavedBufferAttribute){let Q=j.data,xt=Q.stride,Ut=j.offset;if(Q.isInstancedInterleavedBuffer){for(let yt=0;yt<W.locationSize;yt++)p(W.location+yt,Q.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let yt=0;yt<W.locationSize;yt++)g(W.location+yt);i.bindBuffer(i.ARRAY_BUFFER,le);for(let yt=0;yt<W.locationSize;yt++)A(W.location+yt,Rt/W.locationSize,Jt,it,xt*jt,(Ut+Rt/W.locationSize*yt)*jt,Z)}else{if(j.isInstancedBufferAttribute){for(let Q=0;Q<W.locationSize;Q++)p(W.location+Q,j.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Q=0;Q<W.locationSize;Q++)g(W.location+Q);i.bindBuffer(i.ARRAY_BUFFER,le);for(let Q=0;Q<W.locationSize;Q++)A(W.location+Q,Rt/W.locationSize,Jt,it,Rt*jt,Rt/W.locationSize*Q*jt,Z)}}else if(Y!==void 0){let it=Y[st];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(W.location,it);break;case 3:i.vertexAttrib3fv(W.location,it);break;case 4:i.vertexAttrib4fv(W.location,it);break;default:i.vertexAttrib1fv(W.location,it)}}}}b()}function S(){E();for(let D in n){let L=n[D];for(let z in L){let N=L[z];for(let k in N){let q=N[k];for(let Y in q)h(q[Y].object),delete q[Y];delete N[k]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;let L=n[D.id];for(let z in L){let N=L[z];for(let k in N){let q=N[k];for(let Y in q)h(q[Y].object),delete q[Y];delete N[k]}}delete n[D.id]}function C(D){for(let L in n){let z=n[L];for(let N in z){let k=z[N];if(k[D.id]===void 0)continue;let q=k[D.id];for(let Y in q)h(q[Y].object),delete q[Y];delete k[D.id]}}}function _(D){for(let L in n){let z=n[L],N=D.isInstancedMesh===!0?D.id:0,k=z[N];if(k!==void 0){for(let q in k){let Y=k[q];for(let st in Y)h(Y[st].object),delete Y[st];delete k[q]}delete z[N],Object.keys(z).length===0&&delete n[L]}}}function E(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:b}}function vg(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function yg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==vn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let _=C===Ne&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ln&&C!==Nn&&!_&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Ot("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:y,maxSamples:S,samples:T}}function Mg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new zn,o=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let b=r?0:n,A=b*4,y=p.clippingState||null;c.value=y,y=h(m,d,A,f);for(let S=0;S!==A;++S)y[S]=e[S];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=c.value,m!==!0||g===null){let p=f+v*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let A=0,y=f;A!==v;++A,y+=4)a.copy(u[A]).applyMatrix4(b,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var ur=4,Sg=6,bg=20,Tg=256,ya=new Yi,Cd=new pt,bh=null,Th=0,Eh=0,wh=!1,Eg=new I,Ss=new I,fr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Eg}=r;bh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(bh,Th,Eh),this._renderer.xr.enabled=wh,t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Ne,format:vn,colorSpace:Ir,depthBuffer:!1},s=Pd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=wg(r)),this._blurMaterial=Rg(r,t,e),this._ggxMaterial=Ag(r,t,e)}return s}_compileMaterial(t){let e=new At(new Le,t);this._renderer.compile(e,ya)}_sceneToCubeUV(t,e,n,s,r){let c=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Cd),u.toneMapping=Wn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new ee,new Pe({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,p=!1,b=t.background;b?b.isColor&&(g.color.copy(b),t.background=null,p=!0):(g.color.copy(Cd),p=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[A],r.y,r.z)):y===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[A]));let S=this._cubeSize;hr(s,y*S,A>2?S:0,S,S),u.setRenderTarget(s),p&&u.render(v,c),u.render(t,c)}u.toneMapping=f,u.autoClear=d,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===$i||t.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Id());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;hr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ya)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,f=u*d,{_lodMax:m}=this,v=this._sizeLods[n],g=3*v*(n>m-ur?n-m+ur:0),p=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=m-e,hr(r,g,p,3*v,2*v),s.setRenderTarget(r),s.render(o,ya),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,hr(t,g,p,3*v,2*v),s.setRenderTarget(t),s.render(o,ya)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-ur?s-this._lodMax+ur:0),d=4*(this._cubeSize-h);hr(e,u,d,3*h,2*h),a.setRenderTarget(e),a.render(c,ya)}};function wg(i){let t=[],e=[],n=i,s=i-ur+1+Sg;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,m=new Float32Array(f*d*u),v=new Float32Array(f*d*u);for(let p=0;p<u;p++){let b=p%3*2/3-1,A=p>2?0:-1,y=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];m.set(y,f*d*p);for(let S=0;S<d;S++){let T=h[S*2]*2-1,C=h[S*2+1]*2-1;p===0?Ss.set(1,C,T):p===1?Ss.set(-T,1,-C):p===2?Ss.set(-T,C,1):p===3?Ss.set(-1,C,-T):p===4?Ss.set(-T,-1,C):Ss.set(T,C,-1),Ss.toArray(v,(p*d+S)*f)}}let g=new Le;g.setAttribute("position",new We(m,f)),g.setAttribute("outputDirection",new We(v,f)),e.push(new At(g,null)),n>ur&&n--}return{lodMeshes:e,sizeLods:t}}function Pd(i,t,e){let n=new Te(i,t,e);return n.texture.mapping=ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ag(i,t,e){return new ie({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Tg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:ze,depthTest:!1,depthWrite:!1})}function Rg(i,t,e){return new ie({name:"SphericalGaussianBlur",defines:{SAMPLES:bg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:ze,depthTest:!1,depthWrite:!1})}function Id(){return new ie({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:ze,depthTest:!1,depthWrite:!1})}function Dd(){return new ie({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ze,depthTest:!1,depthWrite:!1})}function Xl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Gl=class extends Te{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Xr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ee(5,5,5),r=new ie({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:ze});r.uniforms.tEquirect.value=e;let a=new At(s,r),o=e.minFilter;return e.minFilter===Ki&&(e.minFilter=tn),new Jo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Cg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Qo||f===tl)if(t.has(d)){let m=t.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let v=new Gl(m.height);return v.fromEquirectangularTexture(i,d),t.set(d,v),d.addEventListener("dispose",l),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,m=f===Qo||f===tl,v=f===$i||f===ys;if(m||v){let g=e.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new fr(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let b=d.image;return m&&b&&b.height>0||v&&b&&c(b)?(n===null&&(n=new fr(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===Qo?d.mapping=$i:f===tl&&(d.mapping=ys),d}function c(d){let f=0,m=6;for(let v=0;v<m;v++)d[v]!==void 0&&f++;return f===m}function l(d){let f=d.target;f.removeEventListener("dispose",l);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Pg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&us("WebGLRenderer: "+n+" extension not supported."),s}}}function Ig(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,m=u.attributes.position,v=0;if(m===void 0)return;if(f!==null){let b=f.array;v=f.version;for(let A=0,y=b.length;A<y;A+=3){let S=b[A+0],T=b[A+1],C=b[A+2];d.push(S,T,T,C,C,S)}}else{let b=m.array;v=m.version;for(let A=0,y=b.length/3-1;A<y;A+=3){let S=A+0,T=A+1,C=A+2;d.push(S,T,T,C,C,S)}}let g=new(m.count>=65535?kr:zr)(d,1);g.version=v;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Dg(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let g=0;g<f;g++)v+=d[g];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Lg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ft("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ng(i,t,e){let n=new WeakMap,s=new Re;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],A=0;f===!0&&(A=1),m===!0&&(A=2),v===!0&&(A=3);let y=o.attributes.position.count*A,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*S*4*u),C=new Fr(T,y,S,u);C.type=Nn,C.needsUpdate=!0;let _=A*4;for(let P=0;P<u;P++){let D=g[P],L=p[P],z=b[P],N=y*S*4*P;for(let k=0;k<D.count;k++){let q=k*_;f===!0&&(s.fromBufferAttribute(D,k),T[N+q+0]=s.x,T[N+q+1]=s.y,T[N+q+2]=s.z,T[N+q+3]=0),m===!0&&(s.fromBufferAttribute(L,k),T[N+q+4]=s.x,T[N+q+5]=s.y,T[N+q+6]=s.z,T[N+q+7]=0),v===!0&&(s.fromBufferAttribute(z,k),T[N+q+8]=s.x,T[N+q+9]=s.y,T[N+q+10]=s.z,T[N+q+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new bt(y,S)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ug(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=t.get(l,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Fg={[sa]:"LINEAR_TONE_MAPPING",[ra]:"REINHARD_TONE_MAPPING",[aa]:"CINEON_TONE_MAPPING",[vs]:"ACES_FILMIC_TONE_MAPPING",[la]:"AGX_TONE_MAPPING",[ca]:"NEUTRAL_TONE_MAPPING",[oa]:"CUSTOM_TONE_MAPPING"};function Og(i,t,e,n,s,r){let a=new Te(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Le;l.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new me([0,2,0,0,2,0],2));let h=new ar({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new At(l,h),d=new Yi(-1,1,1,-1,0,1),f=null,m=null,v=!1,g,p=null,b=[],A=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),c!==null&&c.setSize(y,S);for(let T=0;T<b.length;T++){let C=b[T];C.setSize&&C.setSize(y,S)}},this.setEffects=function(y){b=y,A=b.length>0&&b[0].isRenderPass===!0;let S=a.width,T=a.height;b.length>0&&o===null&&(o=new Te(S,T,{type:Ne,depthBuffer:!1,stencilBuffer:!1}),c=new Te(S,T,{type:Ne,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<b.length;C++){let _=b[C];_.setSize&&_.setSize(S,T)}},this.begin=function(y,S){if(v||y.toneMapping===Wn&&b.length===0)return!1;if(p=S,S!==null){let T=S.width,C=S.height;(a.width!==T||a.height!==C)&&this.setSize(T,C)}return A===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=Wn,!0},this.hasRenderPass=function(){return A},this.end=function(y,S){y.toneMapping=g,v=!0;let T=a,C=o;for(let _=0;_<b.length;_++){let E=b[_];E.enabled!==!1&&(E.render(y,C,T,S),E.needsSwap!==!1&&(T=C,C=C===o?c:o))}if(f!==y.outputColorSpace||m!==y.toneMapping){f=y.outputColorSpace,m=y.toneMapping,h.defines={},$t.getTransfer(f)===oe&&(h.defines.SRGB_TRANSFER="");let _=Fg[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(p),y.render(u,d),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var jd=new fn,Ch=new ii(1,1),Qd=new Fr,tf=new No,ef=new Xr,Ld=[],Nd=[],Ud=new Float32Array(16),Fd=new Float32Array(9),Od=new Float32Array(4);function pr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ld[s];if(r===void 0&&(r=new Float32Array(s),Ld[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ql(i,t){let e=Nd[t];e===void 0&&(e=new Int32Array(t),Nd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Bg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function Hg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Od.set(n),i.uniformMatrix2fv(this.addr,!1,Od),Ye(e,n)}}function Gg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Fd.set(n),i.uniformMatrix3fv(this.addr,!1,Fd),Ye(e,n)}}function Wg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Ud.set(n),i.uniformMatrix4fv(this.addr,!1,Ud),Ye(e,n)}}function Xg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function Jg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function Kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function Qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ch.compareFunction=e.isReversedDepthBuffer()?kl:zl,r=Ch):r=jd,e.setTexture2D(t||r,s)}function tx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||tf,s)}function ex(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ef,s)}function nx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qd,s)}function ix(i){switch(i){case 5126:return Bg;case 35664:return zg;case 35665:return kg;case 35666:return Vg;case 35674:return Hg;case 35675:return Gg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return $g;case 36295:return Kg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return nx}}function sx(i,t){i.uniform1fv(this.addr,t)}function rx(i,t){let e=pr(t,this.size,2);i.uniform2fv(this.addr,e)}function ax(i,t){let e=pr(t,this.size,3);i.uniform3fv(this.addr,e)}function ox(i,t){let e=pr(t,this.size,4);i.uniform4fv(this.addr,e)}function lx(i,t){let e=pr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cx(i,t){let e=pr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function hx(i,t){let e=pr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ux(i,t){i.uniform1iv(this.addr,t)}function dx(i,t){i.uniform2iv(this.addr,t)}function fx(i,t){i.uniform3iv(this.addr,t)}function px(i,t){i.uniform4iv(this.addr,t)}function mx(i,t){i.uniform1uiv(this.addr,t)}function gx(i,t){i.uniform2uiv(this.addr,t)}function xx(i,t){i.uniform3uiv(this.addr,t)}function _x(i,t){i.uniform4uiv(this.addr,t)}function vx(i,t,e){let n=this.cache,s=t.length,r=ql(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ch:a=jd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function yx(i,t,e){let n=this.cache,s=t.length,r=ql(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||tf,r[a])}function Mx(i,t,e){let n=this.cache,s=t.length,r=ql(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ef,r[a])}function Sx(i,t,e){let n=this.cache,s=t.length,r=ql(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Qd,r[a])}function bx(i){switch(i){case 5126:return sx;case 35664:return rx;case 35665:return ax;case 35666:return ox;case 35674:return lx;case 35675:return cx;case 35676:return hx;case 5124:case 35670:return ux;case 35667:case 35671:return dx;case 35668:case 35672:return fx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return xx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return Sx}}var Ph=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ix(e.type)}},Ih=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bx(e.type)}},Dh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ah=/(\w+)(\])?(\[|\.)?/g;function Bd(i,t){i.seq.push(t),i.map[t.id]=t}function Tx(i,t,e){let n=i.name,s=n.length;for(Ah.lastIndex=0;;){let r=Ah.exec(n),a=Ah.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Bd(e,l===void 0?new Ph(o,i,t):new Ih(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Dh(o),Bd(e,u)),e=u}}}var dr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Tx(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function zd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ex=37297,wx=0;function Ax(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var kd=new kt;function Rx(i){$t._getMatrix(kd,$t.workingColorSpace,i);let t=`mat3( ${kd.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case Dr:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Vd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ax(i.getShaderSource(t),o)}else return r}function Cx(i,t){let e=Rx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Px={[sa]:"Linear",[ra]:"Reinhard",[aa]:"Cineon",[vs]:"ACESFilmic",[la]:"AgX",[ca]:"Neutral",[oa]:"Custom"};function Ix(i,t){let e=Px[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Hl=new I;function Dx(){$t.getLuminanceCoefficients(Hl);let i=Hl.x.toFixed(4),t=Hl.y.toFixed(4),e=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function Nx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ux(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Sa(i){return i!==""}function Hd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lh(i){return i.replace(Fx,Bx)}var Ox=new Map;function Bx(i,t){let e=Zt[t];if(e===void 0){let n=Ox.get(t);if(n!==void 0)e=Zt[n],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Lh(e)}var zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wd(i){return i.replace(zx,kx)}function kx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Vx={[xs]:"SHADOWMAP_TYPE_PCF",[lr]:"SHADOWMAP_TYPE_VSM"};function Hx(i){return Vx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Gx={[$i]:"ENVMAP_TYPE_CUBE",[ys]:"ENVMAP_TYPE_CUBE",[ha]:"ENVMAP_TYPE_CUBE_UV"};function Wx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Gx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Xx={[ys]:"ENVMAP_MODE_REFRACTION"};function qx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Xx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Yx={[sh]:"ENVMAP_BLENDING_MULTIPLY",[cd]:"ENVMAP_BLENDING_MIX",[hd]:"ENVMAP_BLENDING_ADD"};function Zx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Yx[i.combine]||"ENVMAP_BLENDING_NONE"}function Jx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $x(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Hx(e),l=Wx(e),h=qx(e),u=Zx(e),d=Jx(e),f=Lx(e),m=Nx(r),v=s.createProgram(),g,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Sa).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Sa).join(`
`),p.length>0&&(p+=`
`)):(g=[Xd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),p=[Xd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Wn?Ix("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Cx("linearToOutputTexel",e.outputColorSpace),Dx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sa).join(`
`)),a=Lh(a),a=Hd(a,e),a=Gd(a,e),o=Lh(o),o=Hd(o,e),o=Gd(o,e),a=Wd(a),o=Wd(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=b+g+a,y=b+p+o,S=zd(s,s.VERTEX_SHADER,A),T=zd(s,s.FRAGMENT_SHADER,y);s.attachShader(v,S),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(D){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(v)||"",z=s.getShaderInfoLog(S)||"",N=s.getShaderInfoLog(T)||"",k=L.trim(),q=z.trim(),Y=N.trim(),st=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,T);else{let j=Vd(s,S,"vertex"),it=Vd(s,T,"fragment");Ft("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+j+`
`+it)}else k!==""?Ot("WebGLProgram: Program Info Log:",k):(q===""||Y==="")&&(W=!1);W&&(D.diagnostics={runnable:st,programLog:k,vertexShader:{log:q,prefix:g},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(S),s.deleteShader(T),_=new dr(s,v),E=Ux(s,v)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(v,Ex)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wx++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=T,this}var Kx=0,Nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Uh(t),e.set(t,n)),n}},Uh=class{constructor(t){this.id=Kx++,this.code=t,this.usedTimes=0}};function jx(i){return i===Qi||i===ga||i===xa}function Qx(i,t,e,n,s,r){let a=new Or,o=new Nh,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,E,P,D,L,z){let N=D.fog,k=L.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,st=t.get(_.envMap||q,Y),W=st&&st.mapping===ha?st.image.height:null,j=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Ot("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let it=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Rt=it!==void 0?it.length:0,Ct=0;k.morphAttributes.position!==void 0&&(Ct=1),k.morphAttributes.normal!==void 0&&(Ct=2),k.morphAttributes.color!==void 0&&(Ct=3);let le,Jt,jt,Z;if(j){let ye=ai[j];le=ye.vertexShader,Jt=ye.fragmentShader}else{le=_.vertexShader,Jt=_.fragmentShader;let ye=o.getVertexShaderStage(_),he=o.getFragmentShaderStage(_);o.update(_,ye,he),jt=ye.id,Z=he.id}let Q=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Ut=L.isInstancedMesh===!0,yt=L.isBatchedMesh===!0,Vt=!!_.map,Ie=!!_.matcap,Ht=!!st,Qt=!!_.aoMap,ce=!!_.lightMap,Xt=!!_.bumpMap&&_.wireframe===!1,de=!!_.normalMap,De=!!_.displacementMap,Je=!!_.emissiveMap,ge=!!_.metalnessMap,Ae=!!_.roughnessMap,F=_.anisotropy>0,Ve=_.clearcoat>0,se=_.dispersion>0,R=_.retroreflectivity>0,x=_.iridescence>0,B=_.sheen>0,G=_.transmission>0,J=F&&!!_.anisotropyMap,at=Ve&&!!_.clearcoatMap,ht=Ve&&!!_.clearcoatNormalMap,K=Ve&&!!_.clearcoatRoughnessMap,et=x&&!!_.iridescenceMap,ut=x&&!!_.iridescenceThicknessMap,It=B&&!!_.sheenColorMap,ct=B&&!!_.sheenRoughnessMap,lt=!!_.specularMap,Tt=!!_.specularColorMap,Lt=!!_.specularIntensityMap,Bt=G&&!!_.transmissionMap,O=G&&!!_.thicknessMap,dt=!!_.gradientMap,tt=!!_.alphaMap,ft=_.alphaTest>0,vt=!!_.alphaHash,rt=!!_.extensions,Nt=Wn;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Nt=i.toneMapping);let Pt={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:le,fragmentShader:Jt,defines:_.defines,customVertexShaderID:jt,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:yt,batchingColor:yt&&L._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&L.instanceColor!==null,instancingMorph:Ut&&L.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Vt,matcap:Ie,envMap:Ht,envMapMode:Ht&&st.mapping,envMapCubeUVHeight:W,aoMap:Qt,lightMap:ce,bumpMap:Xt,normalMap:de,displacementMap:De,emissiveMap:Je,normalMapObjectSpace:de&&_.normalMapType===fd,normalMapTangentSpace:de&&_.normalMapType===_a,packedNormalMap:de&&_.normalMapType===_a&&jx(_.normalMap.format),metalnessMap:ge,roughnessMap:Ae,anisotropy:F,anisotropyMap:J,clearcoat:Ve,clearcoatMap:at,clearcoatNormalMap:ht,clearcoatRoughnessMap:K,dispersion:se,retroreflection:R,iridescence:x,iridescenceMap:et,iridescenceThicknessMap:ut,sheen:B,sheenColorMap:It,sheenRoughnessMap:ct,specularMap:lt,specularColorMap:Tt,specularIntensityMap:Lt,transmission:G,transmissionMap:Bt,thicknessMap:O,gradientMap:dt,opaque:_.transparent===!1&&_.blending===Ji&&_.alphaToCoverage===!1,alphaMap:tt,alphaTest:ft,alphaHash:vt,combine:_.combine,mapUv:Vt&&m(_.map.channel),aoMapUv:Qt&&m(_.aoMap.channel),lightMapUv:ce&&m(_.lightMap.channel),bumpMapUv:Xt&&m(_.bumpMap.channel),normalMapUv:de&&m(_.normalMap.channel),displacementMapUv:De&&m(_.displacementMap.channel),emissiveMapUv:Je&&m(_.emissiveMap.channel),metalnessMapUv:ge&&m(_.metalnessMap.channel),roughnessMapUv:Ae&&m(_.roughnessMap.channel),anisotropyMapUv:J&&m(_.anisotropyMap.channel),clearcoatMapUv:at&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ht&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:It&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:ct&&m(_.sheenRoughnessMap.channel),specularMapUv:lt&&m(_.specularMap.channel),specularColorMapUv:Tt&&m(_.specularColorMap.channel),specularIntensityMapUv:Lt&&m(_.specularIntensityMap.channel),transmissionMapUv:Bt&&m(_.transmissionMap.channel),thicknessMapUv:O&&m(_.thicknessMap.channel),alphaMapUv:tt&&m(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(de||F),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(Vt||tt),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&de===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Ct,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Vt&&_.map.isVideoTexture===!0&&$t.getTransfer(_.map.colorSpace)===oe,decodeVideoTextureEmissive:Je&&_.emissiveMap.isVideoTexture===!0&&$t.getTransfer(_.emissiveMap.colorSpace)===oe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===mn,flipSided:_.side===en,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:rt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&_.extensions.multiDraw===!0||yt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function g(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)E.push(P),E.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(E,_),b(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function b(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function A(_){let E=f[_.type],P;if(E){let D=ai[E];P=gn.clone(D.uniforms)}else P=_.uniforms;return P}function y(_,E){let P=h.get(E);return P!==void 0?++P.usedTimes:(P=new $x(i,E,_,s),l.push(P),h.set(E,P)),P}function S(_){if(--_.usedTimes===0){let E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:A,acquireProgram:y,releaseProgram:S,releaseShaderCache:T,programs:l,dispose:C}}function t_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function e_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function qd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,v,g,p){let b=i[t];return b===void 0?(b={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:g,group:p},i[t]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=m,b.materialVariant=a(d),b.groupOrder=v,b.renderOrder=d.renderOrder,b.z=g,b.group=p),t++,b}function c(d,f,m,v,g,p,b){b.reversedDepth===!0&&(g=-g);let A=o(d,f,m,v,g,p);m.transmission>0?n.push(A):m.transparent===!0?s.push(A):e.push(A)}function l(d,f,m,v,g,p){let b=o(d,f,m,v,g,p);m.transmission>0?n.unshift(b):m.transparent===!0?s.unshift(b):e.unshift(b)}function h(d,f){e.length>1&&e.sort(d||e_),n.length>1&&n.sort(f||qd),s.length>1&&s.sort(f||qd)}function u(){for(let d=t,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function n_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Yd,i.set(n,[a])):s>=r.length?(a=new Yd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function i_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new pt};break;case"SpotLight":e={position:new I,direction:new I,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function s_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var r_=0;function a_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function o_(i){let t=new i_,e=s_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new te,a=new te;function o(l){let h=0,u=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,b=0,A=0,y=0,S=0,T=0,C=0,_=0,E=0,P=0;l.sort(a_);for(let L=0,z=l.length;L<z;L++){let N=l[L],k=N.color,q=N.intensity,Y=N.distance,st=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Qi?st=N.shadow.map.texture:st=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=k.r*q,u+=k.g*q,d+=k.b*q;else if(N.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(N.sh.coefficients[W],q);P++}else if(N.isSunLight){let W=t.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let j=N.shadow,it=e.get(N);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[m]=it,n.sunShadowMap[m]=st;let Rt=j.getViewportCount();for(let Ct=0;Ct<Rt;Ct++)n.sunShadowMatrix[v+Ct]=j.getMatrix(Ct),n.sunShadowCascade[v+Ct]=j._cascadeData[Ct];v+=Rt,m++}n.sun[f]=W,f++}else if(N.isDirectionalLight){let W=t.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let j=N.shadow,it=e.get(N);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,n.directionalShadow[g]=it,n.directionalShadowMap[g]=st,n.directionalShadowMatrix[g]=N.shadow.matrix,S++}n.directional[g]=W,g++}else if(N.isSpotLight){let W=t.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(k).multiplyScalar(q),W.distance=Y,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,n.spot[b]=W;let j=N.shadow;if(N.map&&(n.spotLightMap[_]=N.map,_++,j.updateMatrices(N),N.castShadow&&E++),n.spotLightMatrix[b]=j.matrix,N.castShadow){let it=e.get(N);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,n.spotShadow[b]=it,n.spotShadowMap[b]=st,C++}b++}else if(N.isRectAreaLight){let W=t.get(N);W.color.copy(k).multiplyScalar(q),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),n.rectArea[A]=W,A++}else if(N.isPointLight){let W=t.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),W.distance=N.distance,W.decay=N.decay,N.castShadow){let j=N.shadow,it=e.get(N);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,it.shadowCameraNear=j.camera.near,it.shadowCameraFar=j.camera.far,n.pointShadow[p]=it,n.pointShadowMap[p]=st,n.pointShadowMatrix[p]=N.shadow.matrix,T++}n.point[p]=W,p++}else if(N.isHemisphereLight){let W=t.get(N);W.skyColor.copy(N.color).multiplyScalar(q),W.groundColor.copy(N.groundColor).multiplyScalar(q),n.hemi[y]=W,y++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.sunLength!==f||D.directionalLength!==g||D.pointLength!==p||D.spotLength!==b||D.rectAreaLength!==A||D.hemiLength!==y||D.numSunShadows!==m||D.numDirectionalShadows!==S||D.numPointShadows!==T||D.numSpotShadows!==C||D.numSpotMaps!==_||D.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=g,n.spot.length=b,n.rectArea.length=A,n.point.length=p,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=P,D.sunLength=f,D.directionalLength=g,D.pointLength=p,D.spotLength=b,D.rectAreaLength=A,D.hemiLength=y,D.numSunShadows=m,D.numDirectionalShadows=S,D.numPointShadows=T,D.numSpotShadows=C,D.numSpotMaps=_,D.numLightProbes=P,n.version=r_++)}function c(l,h){let u=0,d=0,f=0,m=0,v=0,g=0,p=h.matrixWorldInverse;for(let b=0,A=l.length;b<A;b++){let y=l[b];if(y.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),u++}else if(y.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(y.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function Zd(i){let t=new o_(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function c(d){s.push(d)}function l(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function l_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Zd(i),t.set(s,[o])):r>=a.length?(o=new Zd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var c_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h_=`uniform sampler2D shadow_pass;
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
}`,u_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],d_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Jd=new te,Ma=new I,Rh=new I;function f_(i,t,e){let n=new sr,s=new bt,r=new bt,a=new Re,o=new Oo,c=new Bo,l={},h=e.maxTextureSize,u={[Zi]:en,[en]:Zi,[mn]:mn},d=new ie({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:c_,fragmentShader:h_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Le;m.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new At(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xs;let p=this.type;this.render=function(T,C,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Zu&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xs);let E=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ze),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let z=p!==this.type;z&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=T.length;N<k;N++){let q=T[N],Y=q.shadow;if(Y===void 0){Ot("WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let st=Y.getFrameExtents();s.multiply(st),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,Y.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=W,Y.map===null||z===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===lr){if(q.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Te(s.x,s.y,{format:Qi,type:Ne,minFilter:tn,magFilter:tn,generateMipmaps:!1}),Y.map.texture.name=q.name+".shadowMap",Y.map.depthTexture=new ii(s.x,s.y,Nn),Y.map.depthTexture.name=q.name+".shadowMapDepth",Y.map.depthTexture.format=Qn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Be,Y.map.depthTexture.magFilter=Be}else q.isPointLight?(Y.map=new Gl(s.x),Y.map.depthTexture=new Fo(s.x,Xn)):(Y.map=new Te(s.x,s.y),Y.map.depthTexture=new ii(s.x,s.y,Xn)),Y.map.depthTexture.name=q.name+".shadowMap",Y.map.depthTexture.format=Qn,this.type===xs?(Y.map.depthTexture.compareFunction=W?kl:zl,Y.map.depthTexture.minFilter=tn,Y.map.depthTexture.magFilter=tn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Be,Y.map.depthTexture.magFilter=Be);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let j=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();q.isPointLight!==!0&&Y.updateMatrices(q,_);for(let it=0;it<j;it++){let Rt=Y.getCamera(it);if(q.isPointLight){let Ct=Y.camera,le=Y.matrix,Jt=q.distance||Ct.far;Jt!==Ct.far&&(Ct.far=Jt,Ct.updateProjectionMatrix()),Ma.setFromMatrixPosition(q.matrixWorld),Ct.position.copy(Ma),Rh.copy(Ct.position),Rh.add(u_[it]),Ct.up.copy(d_[it]),Ct.lookAt(Rh),Ct.updateMatrixWorld(),le.makeTranslation(-Ma.x,-Ma.y,-Ma.z),Jd.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Jd,Ct.coordinateSystem,Ct.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,it),i.clear();else{it===0&&(i.setRenderTarget(Y.map),i.clear());let Ct=Y.getViewport(it);a.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),L.viewport(a)}n=Y.getFrustum(it),y(C,_,Rt,q,this.type)}Y.isPointLightShadow!==!0&&this.type===lr&&b(Y,_),Y.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,P,D)};function b(T,C){let _=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Te(s.x,s.y,{format:Qi,type:Ne}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,_,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,_,f,v,null)}function A(T,C,_,E){let P=null,D=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)P=D;else if(P=_.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let L=P.uuid,z=C.uuid,N=l[L];N===void 0&&(N={},l[L]=N);let k=N[z];k===void 0&&(k=P.clone(),N[z]=k,C.addEventListener("dispose",S)),P=k}if(P.visible=C.visible,P.wireframe=C.wireframe,E===lr?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:u[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let L=i.properties.get(P);L.light=_}return P}function y(T,C,_,E,P){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===lr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let z=t.update(T),N=T.material;if(Array.isArray(N)){let k=z.groups;for(let q=0,Y=k.length;q<Y;q++){let st=k[q],W=N[st.materialIndex];if(W&&W.visible){let j=A(T,W,E,P);T.onBeforeShadow(i,T,C,_,z,j,st),i.renderBufferDirect(_,null,z,j,T,st),T.onAfterShadow(i,T,C,_,z,j,st)}}}else if(N.visible){let k=A(T,N,E,P);T.onBeforeShadow(i,T,C,_,z,k,null),i.renderBufferDirect(_,null,z,k,T,null),T.onAfterShadow(i,T,C,_,z,k,null)}}let L=T.children;for(let z=0,N=L.length;z<N;z++)y(L[z],C,_,E,P)}function S(T){T.target.removeEventListener("dispose",S);for(let _ in l){let E=l[_],P=T.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function p_(i,t){function e(){let O=!1,dt=new Re,tt=null,ft=new Re(0,0,0,0);return{setMask:function(vt){tt!==vt&&!O&&(i.colorMask(vt,vt,vt,vt),tt=vt)},setLocked:function(vt){O=vt},setClear:function(vt,rt,Nt,Pt,ye){ye===!0&&(vt*=Pt,rt*=Pt,Nt*=Pt),dt.set(vt,rt,Nt,Pt),ft.equals(dt)===!1&&(i.clearColor(vt,rt,Nt,Pt),ft.copy(dt))},reset:function(){O=!1,tt=null,ft.set(-1,0,0,0)}}}function n(){let O=!1,dt=!1,tt=null,ft=null,vt=null;return{setReversed:function(rt){if(dt!==rt){let Nt=t.get("EXT_clip_control");rt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),dt=rt;let Pt=vt;vt=null,this.setClear(Pt)}},getReversed:function(){return dt},setTest:function(rt){rt?Q(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(rt){tt!==rt&&!O&&(i.depthMask(rt),tt=rt)},setFunc:function(rt){if(dt&&(rt=Td[rt]),ft!==rt){switch(rt){case bo:i.depthFunc(i.NEVER);break;case To:i.depthFunc(i.ALWAYS);break;case Eo:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case wo:i.depthFunc(i.EQUAL);break;case Ao:i.depthFunc(i.GEQUAL);break;case Ro:i.depthFunc(i.GREATER);break;case Co:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=rt}},setLocked:function(rt){O=rt},setClear:function(rt){vt!==rt&&(vt=rt,dt&&(rt=1-rt),i.clearDepth(rt))},reset:function(){O=!1,tt=null,ft=null,vt=null,dt=!1}}}function s(){let O=!1,dt=null,tt=null,ft=null,vt=null,rt=null,Nt=null,Pt=null,ye=null;return{setTest:function(he){O||(he?Q(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(he){dt!==he&&!O&&(i.stencilMask(he),dt=he)},setFunc:function(he,Un,Zn){(tt!==he||ft!==Un||vt!==Zn)&&(i.stencilFunc(he,Un,Zn),tt=he,ft=Un,vt=Zn)},setOp:function(he,Un,Zn){(rt!==he||Nt!==Un||Pt!==Zn)&&(i.stencilOp(he,Un,Zn),rt=he,Nt=Un,Pt=Zn)},setLocked:function(he){O=he},setClear:function(he){ye!==he&&(i.clearStencil(he),ye=he)},reset:function(){O=!1,dt=null,tt=null,ft=null,vt=null,rt=null,Nt=null,Pt=null,ye=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],v=null,g=!1,p=null,b=null,A=null,y=null,S=null,T=null,C=null,_=new pt(0,0,0),E=0,P=!1,D=null,L=null,z=null,N=null,k=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,st=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=st>=1):W.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=st>=2);let j=null,it={},Rt=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),le=new Re().fromArray(Rt),Jt=new Re().fromArray(Ct);function jt(O,dt,tt,ft){let vt=new Uint8Array(4),rt=i.createTexture();i.bindTexture(O,rt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<tt;Nt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(dt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return rt}let Z={};Z[i.TEXTURE_2D]=jt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Ks),Xt(!1),de(Qc),Q(i.CULL_FACE),Qt(ze);function Q(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function xt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Ut(O,dt){return d[O]!==dt?(i.bindFramebuffer(O,dt),d[O]=dt,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=dt),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function yt(O,dt){let tt=m,ft=!1;if(O){tt=f.get(dt),tt===void 0&&(tt=[],f.set(dt,tt));let vt=O.textures;if(tt.length!==vt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Nt=vt.length;rt<Nt;rt++)tt[rt]=i.COLOR_ATTACHMENT0+rt;tt.length=vt.length,ft=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,ft=!0);ft&&i.drawBuffers(tt)}function Vt(O){return v!==O?(i.useProgram(O),v=O,!0):!1}let Ie={[Ln]:i.FUNC_ADD,[Ju]:i.FUNC_SUBTRACT,[$u]:i.FUNC_REVERSE_SUBTRACT};Ie[Ku]=i.MIN,Ie[ju]=i.MAX;let Ht={[_s]:i.ZERO,[Qu]:i.ONE,[td]:i.SRC_COLOR,[nh]:i.SRC_ALPHA,[sd]:i.SRC_ALPHA_SATURATE,[ia]:i.DST_COLOR,[na]:i.DST_ALPHA,[ed]:i.ONE_MINUS_SRC_COLOR,[ih]:i.ONE_MINUS_SRC_ALPHA,[id]:i.ONE_MINUS_DST_COLOR,[nd]:i.ONE_MINUS_DST_ALPHA,[rd]:i.CONSTANT_COLOR,[ad]:i.ONE_MINUS_CONSTANT_COLOR,[od]:i.CONSTANT_ALPHA,[ld]:i.ONE_MINUS_CONSTANT_ALPHA};function Qt(O,dt,tt,ft,vt,rt,Nt,Pt,ye,he){if(O===ze){g===!0&&(xt(i.BLEND),g=!1);return}if(g===!1&&(Q(i.BLEND),g=!0),O!==jo){if(O!==p||he!==P){if((b!==Ln||S!==Ln)&&(i.blendEquation(i.FUNC_ADD),b=Ln,S=Ln),he)switch(O){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nn:i.blendFunc(i.ONE,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ft("WebGLState: Invalid blending: ",O);break}else switch(O){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case th:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eh:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",O);break}A=null,y=null,T=null,C=null,_.set(0,0,0),E=0,p=O,P=he}return}vt=vt||dt,rt=rt||tt,Nt=Nt||ft,(dt!==b||vt!==S)&&(i.blendEquationSeparate(Ie[dt],Ie[vt]),b=dt,S=vt),(tt!==A||ft!==y||rt!==T||Nt!==C)&&(i.blendFuncSeparate(Ht[tt],Ht[ft],Ht[rt],Ht[Nt]),A=tt,y=ft,T=rt,C=Nt),(Pt.equals(_)===!1||ye!==E)&&(i.blendColor(Pt.r,Pt.g,Pt.b,ye),_.copy(Pt),E=ye),p=O,P=!1}function ce(O,dt){O.side===mn?xt(i.CULL_FACE):Q(i.CULL_FACE);let tt=O.side===en;dt&&(tt=!tt),Xt(tt),O.blending===Ji&&O.transparent===!1?Qt(ze):Qt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let ft=O.stencilWrite;o.setTest(ft),ft&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Je(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(O){D!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),D=O)}function de(O){O!==qu?(Q(i.CULL_FACE),O!==L&&(O===Qc?i.cullFace(i.BACK):O===Yu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),L=O}function De(O){O!==z&&(Y&&i.lineWidth(O),z=O)}function Je(O,dt,tt){O?(Q(i.POLYGON_OFFSET_FILL),(N!==dt||k!==tt)&&(N=dt,k=tt,a.getReversed()&&(dt=-dt),i.polygonOffset(dt,tt))):xt(i.POLYGON_OFFSET_FILL)}function ge(O){O?Q(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function Ae(O){O===void 0&&(O=i.TEXTURE0+q-1),j!==O&&(i.activeTexture(O),j=O)}function F(O,dt,tt){tt===void 0&&(j===null?tt=i.TEXTURE0+q-1:tt=j);let ft=it[tt];ft===void 0&&(ft={type:void 0,texture:void 0},it[tt]=ft),(ft.type!==O||ft.texture!==dt)&&(j!==tt&&(i.activeTexture(tt),j=tt),i.bindTexture(O,dt||Z[O]),ft.type=O,ft.texture=dt)}function Ve(){let O=it[j];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function se(){try{i.compressedTexImage2D(...arguments)}catch(O){Ft("WebGLState:",O)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(O){Ft("WebGLState:",O)}}function x(){try{i.texSubImage2D(...arguments)}catch(O){Ft("WebGLState:",O)}}function B(){try{i.texSubImage3D(...arguments)}catch(O){Ft("WebGLState:",O)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Ft("WebGLState:",O)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Ft("WebGLState:",O)}}function at(){try{i.texStorage2D(...arguments)}catch(O){Ft("WebGLState:",O)}}function ht(){try{i.texStorage3D(...arguments)}catch(O){Ft("WebGLState:",O)}}function K(){try{i.texImage2D(...arguments)}catch(O){Ft("WebGLState:",O)}}function et(){try{i.texImage3D(...arguments)}catch(O){Ft("WebGLState:",O)}}function ut(O){return u[O]!==void 0?u[O]:i.getParameter(O)}function It(O,dt){u[O]!==dt&&(i.pixelStorei(O,dt),u[O]=dt)}function ct(O){le.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),le.copy(O))}function lt(O){Jt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Jt.copy(O))}function Tt(O,dt){let tt=l.get(dt);tt===void 0&&(tt=new WeakMap,l.set(dt,tt));let ft=tt.get(O);ft===void 0&&(ft=i.getUniformBlockIndex(dt,O.name),tt.set(O,ft))}function Lt(O,dt){let ft=l.get(dt).get(O);c.get(dt)!==ft&&(i.uniformBlockBinding(dt,ft,O.__bindingPointIndex),c.set(dt,ft))}function Bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,it={},d={},f=new WeakMap,m=[],v=null,g=!1,p=null,b=null,A=null,y=null,S=null,T=null,C=null,_=new pt(0,0,0),E=0,P=!1,D=null,L=null,z=null,N=null,k=null,le.set(0,0,i.canvas.width,i.canvas.height),Jt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:xt,bindFramebuffer:Ut,drawBuffers:yt,useProgram:Vt,setBlending:Qt,setMaterial:ce,setFlipSided:Xt,setCullFace:de,setLineWidth:De,setPolygonOffset:Je,setScissorTest:ge,activeTexture:Ae,bindTexture:F,unbindTexture:Ve,compressedTexImage2D:se,compressedTexImage3D:R,texImage2D:K,texImage3D:et,pixelStorei:It,getParameter:ut,updateUBOMapping:Tt,uniformBlockBinding:Lt,texStorage2D:at,texStorage3D:ht,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:J,scissor:ct,viewport:lt,reset:Bt}}function m_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new bt,h=new WeakMap,u=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,x){return m?new OffscreenCanvas(R,x):Lr("canvas")}function g(R,x,B){let G=1,J=se(R);if((J.width>B||J.height>B)&&(G=B/Math.max(J.width,J.height)),G<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let at=Math.floor(G*J.width),ht=Math.floor(G*J.height);d===void 0&&(d=v(at,ht));let K=x?v(at,ht):d;return K.width=at,K.height=ht,K.getContext("2d").drawImage(R,0,0,at,ht),Ot("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+at+"x"+ht+")."),K}else return"data"in R&&Ot("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function p(R){return R.generateMipmaps}function b(R){i.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,x,B,G,J,at=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ht;G&&(ht=t.get("EXT_texture_norm16"),ht||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=x;if(x===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8),B===i.UNSIGNED_SHORT&&ht&&(K=ht.R16_EXT),B===i.SHORT&&ht&&(K=ht.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),x===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8),B===i.UNSIGNED_SHORT&&ht&&(K=ht.RG16_EXT),B===i.SHORT&&ht&&(K=ht.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&ht&&(K=ht.RGB16_EXT),B===i.SHORT&&ht&&(K=ht.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),x===i.RGBA){let et=at?Dr:$t.getTransfer(J);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=et===oe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ht&&(K=ht.RGBA16_EXT),B===i.SHORT&&ht&&(K=ht.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function S(R,x){let B;return R?x===null||x===Xn||x===ji?B=i.DEPTH24_STENCIL8:x===Nn?B=i.DEPTH32F_STENCIL8:x===cr&&(B=i.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Xn||x===ji?B=i.DEPTH_COMPONENT24:x===Nn?B=i.DEPTH_COMPONENT32F:x===cr&&(B=i.DEPTH_COMPONENT16),B}function T(R,x){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Be&&R.minFilter!==tn?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function C(R){let x=R.target;x.removeEventListener("dispose",C),E(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&u.delete(x)}function _(R){let x=R.target;x.removeEventListener("dispose",_),D(x)}function E(R){let x=n.get(R);if(x.__webglInit===void 0)return;let B=R.source,G=f.get(B);if(G){let J=G[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(R),Object.keys(G).length===0&&f.delete(B)}n.remove(R)}function P(R){let x=n.get(R);i.deleteTexture(x.__webglTexture);let B=R.source,G=f.get(B);delete G[x.__cacheKey],a.memory.textures--}function D(R){let x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let J=0;J<x.__webglFramebuffer[G].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[G][J]);else i.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)i.deleteFramebuffer(x.__webglFramebuffer[G]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=R.textures;for(let G=0,J=B.length;G<J;G++){let at=n.get(B[G]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),a.memory.textures--),n.remove(B[G])}n.remove(R)}let L=0;function z(){L=0}function N(){return L}function k(R){L=R}function q(){let R=L;return R>=s.maxTextures&&Ot("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function Y(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function st(R,x){let B=n.get(R);if(R.isVideoTexture&&F(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){let G=R.image;if(G===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(B,R,x);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function W(R,x){let B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){xt(B,R,x);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function j(R,x){let B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){xt(B,R,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function it(R,x){let B=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){Ut(B,R,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let Rt={[Pn]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[Po]:i.MIRRORED_REPEAT},Ct={[Be]:i.NEAREST,[ud]:i.NEAREST_MIPMAP_NEAREST,[ua]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[el]:i.LINEAR_MIPMAP_NEAREST,[Ki]:i.LINEAR_MIPMAP_LINEAR},le={[md]:i.NEVER,[yd]:i.ALWAYS,[gd]:i.LESS,[zl]:i.LEQUAL,[xd]:i.EQUAL,[kl]:i.GEQUAL,[_d]:i.GREATER,[vd]:i.NOTEQUAL};function Jt(R,x){if(x.type===Nn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===tn||x.magFilter===el||x.magFilter===ua||x.magFilter===Ki||x.minFilter===tn||x.minFilter===el||x.minFilter===ua||x.minFilter===Ki)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Rt[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Rt[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Rt[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Ct[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Ct[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,le[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Be||x.minFilter!==ua&&x.minFilter!==Ki||x.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function jt(R,x){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",C));let G=x.source,J=f.get(G);J===void 0&&(J={},f.set(G,J));let at=Y(x);if(at!==R.__cacheKey){J[at]===void 0&&(J[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[at].usedTimes++;let ht=J[R.__cacheKey];ht!==void 0&&(J[R.__cacheKey].usedTimes--,ht.usedTimes===0&&P(x)),R.__cacheKey=at,R.__webglTexture=J[at].texture}return B}function Z(R,x,B){return Math.floor(Math.floor(R/B)/x)}function Q(R,x,B,G){let at=R.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,G,x.data);else{at.sort((It,ct)=>It.start-ct.start);let ht=0;for(let It=1;It<at.length;It++){let ct=at[ht],lt=at[It],Tt=ct.start+ct.count,Lt=Z(lt.start,x.width,4),Bt=Z(ct.start,x.width,4);lt.start<=Tt+1&&Lt===Bt&&Z(lt.start+lt.count-1,x.width,4)===Lt?ct.count=Math.max(ct.count,lt.start+lt.count-ct.start):(++ht,at[ht]=lt)}at.length=ht+1;let K=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let It=0,ct=at.length;It<ct;It++){let lt=at[It],Tt=Math.floor(lt.start/4),Lt=Math.ceil(lt.count/4),Bt=Tt%x.width,O=Math.floor(Tt/x.width),dt=Lt,tt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Bt),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Bt,O,dt,tt,B,G,x.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function xt(R,x,B){let G=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=i.TEXTURE_3D);let J=jt(R,x),at=x.source;e.bindTexture(G,R.__webglTexture,i.TEXTURE0+B);let ht=n.get(at);if(at.version!==ht.__version||J===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let tt=$t.getPrimaries($t.workingColorSpace),ft=x.colorSpace===wi?null:$t.getPrimaries(x.colorSpace),vt=x.colorSpace===wi||tt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let et=g(x.image,!1,s.maxTextureSize);et=Ve(x,et);let ut=r.convert(x.format,x.colorSpace),It=r.convert(x.type),ct=y(x.internalFormat,ut,It,x.normalized,x.colorSpace,x.isVideoTexture);Jt(G,x);let lt,Tt=x.mipmaps,Lt=x.isVideoTexture!==!0,Bt=ht.__version===void 0||J===!0,O=at.dataReady,dt=T(x,et);if(x.isDepthTexture)ct=S(x.format===si,x.type),Bt&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,ct,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,ct,et.width,et.height,0,ut,It,null));else if(x.isDataTexture)if(Tt.length>0){Lt&&Bt&&e.texStorage2D(i.TEXTURE_2D,dt,ct,Tt[0].width,Tt[0].height);for(let tt=0,ft=Tt.length;tt<ft;tt++)lt=Tt[tt],Lt?O&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,lt.width,lt.height,ut,It,lt.data):e.texImage2D(i.TEXTURE_2D,tt,ct,lt.width,lt.height,0,ut,It,lt.data);x.generateMipmaps=!1}else Lt?(Bt&&e.texStorage2D(i.TEXTURE_2D,dt,ct,et.width,et.height),O&&Q(x,et,ut,It)):e.texImage2D(i.TEXTURE_2D,0,ct,et.width,et.height,0,ut,It,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Lt&&Bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,ct,Tt[0].width,Tt[0].height,et.depth);for(let tt=0,ft=Tt.length;tt<ft;tt++)if(lt=Tt[tt],x.format!==vn)if(ut!==null)if(Lt){if(O)if(x.layerUpdates.size>0){let vt=xh(lt.width,lt.height,x.format,x.type);for(let rt of x.layerUpdates){let Nt=lt.data.subarray(rt*vt/lt.data.BYTES_PER_ELEMENT,(rt+1)*vt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,rt,lt.width,lt.height,1,ut,Nt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,et.depth,ut,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,ct,lt.width,lt.height,et.depth,0,lt.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,et.depth,ut,It,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,ct,lt.width,lt.height,et.depth,0,ut,It,lt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Lt&&Bt&&e.texStorage2D(i.TEXTURE_2D,dt,ct,Tt[0].width,Tt[0].height);for(let tt=0,ft=Tt.length;tt<ft;tt++)lt=Tt[tt],x.format!==vn?ut!==null?Lt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,lt.width,lt.height,ut,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,ct,lt.width,lt.height,0,lt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?O&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,lt.width,lt.height,ut,It,lt.data):e.texImage2D(i.TEXTURE_2D,tt,ct,lt.width,lt.height,0,ut,It,lt.data)}else if(x.isDataArrayTexture)if(Lt){if(Bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,ct,et.width,et.height,et.depth),O)if(x.layerUpdates.size>0){let tt=xh(et.width,et.height,x.format,x.type);for(let ft of x.layerUpdates){let vt=et.data.subarray(ft*tt/et.data.BYTES_PER_ELEMENT,(ft+1)*tt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,et.width,et.height,1,ut,It,vt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ut,It,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,et.width,et.height,et.depth,0,ut,It,et.data);else if(x.isData3DTexture)Lt?(Bt&&e.texStorage3D(i.TEXTURE_3D,dt,ct,et.width,et.height,et.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ut,It,et.data)):e.texImage3D(i.TEXTURE_3D,0,ct,et.width,et.height,et.depth,0,ut,It,et.data);else if(x.isFramebufferTexture){if(Bt)if(Lt)e.texStorage2D(i.TEXTURE_2D,dt,ct,et.width,et.height);else{let tt=et.width,ft=et.height;for(let vt=0;vt<dt;vt++)e.texImage2D(i.TEXTURE_2D,vt,ct,tt,ft,0,ut,It,null),tt>>=1,ft>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let tt=i.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),et.parentNode!==tt){tt.appendChild(et),u.add(x),tt.onpaint=ft=>{let vt=ft.changedElements;for(let rt of u)vt.includes(rt.image)&&(rt.needsUpdate=!0)},tt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{let vt=i.RGBA,rt=i.RGBA,Nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,vt,rt,Nt,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(Lt&&Bt){let tt=se(Tt[0]);e.texStorage2D(i.TEXTURE_2D,dt,ct,tt.width,tt.height)}for(let tt=0,ft=Tt.length;tt<ft;tt++)lt=Tt[tt],Lt?O&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ut,It,lt):e.texImage2D(i.TEXTURE_2D,tt,ct,ut,It,lt);x.generateMipmaps=!1}else if(Lt){if(Bt){let tt=se(et);e.texStorage2D(i.TEXTURE_2D,dt,ct,tt.width,tt.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,It,et)}else e.texImage2D(i.TEXTURE_2D,0,ct,ut,It,et);p(x)&&b(G),ht.__version=at.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Ut(R,x,B){if(x.image.length!==6)return;let G=jt(R,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);let at=n.get(J);if(J.version!==at.__version||G===!0){e.activeTexture(i.TEXTURE0+B);let ht=$t.getPrimaries($t.workingColorSpace),K=x.colorSpace===wi?null:$t.getPrimaries(x.colorSpace),et=x.colorSpace===wi||ht===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ut=x.isCompressedTexture||x.image[0].isCompressedTexture,It=x.image[0]&&x.image[0].isDataTexture,ct=[];for(let rt=0;rt<6;rt++)!ut&&!It?ct[rt]=g(x.image[rt],!0,s.maxCubemapSize):ct[rt]=It?x.image[rt].image:x.image[rt],ct[rt]=Ve(x,ct[rt]);let lt=ct[0],Tt=r.convert(x.format,x.colorSpace),Lt=r.convert(x.type),Bt=y(x.internalFormat,Tt,Lt,x.normalized,x.colorSpace),O=x.isVideoTexture!==!0,dt=at.__version===void 0||G===!0,tt=J.dataReady,ft=T(x,lt);Jt(i.TEXTURE_CUBE_MAP,x);let vt;if(ut){O&&dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Bt,lt.width,lt.height);for(let rt=0;rt<6;rt++){vt=ct[rt].mipmaps;for(let Nt=0;Nt<vt.length;Nt++){let Pt=vt[Nt];x.format!==vn?Tt!==null?O?tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt,0,0,Pt.width,Pt.height,Tt,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt,Bt,Pt.width,Pt.height,0,Pt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt,0,0,Pt.width,Pt.height,Tt,Lt,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt,Bt,Pt.width,Pt.height,0,Tt,Lt,Pt.data)}}}else{if(vt=x.mipmaps,O&&dt){vt.length>0&&ft++;let rt=se(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Bt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(It){O?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,ct[rt].width,ct[rt].height,Tt,Lt,ct[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Bt,ct[rt].width,ct[rt].height,0,Tt,Lt,ct[rt].data);for(let Nt=0;Nt<vt.length;Nt++){let ye=vt[Nt].image[rt].image;O?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt+1,0,0,ye.width,ye.height,Tt,Lt,ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt+1,Bt,ye.width,ye.height,0,Tt,Lt,ye.data)}}else{O?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Tt,Lt,ct[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Bt,Tt,Lt,ct[rt]);for(let Nt=0;Nt<vt.length;Nt++){let Pt=vt[Nt];O?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt+1,0,0,Tt,Lt,Pt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt+1,Bt,Tt,Lt,Pt.image[rt])}}}p(x)&&b(i.TEXTURE_CUBE_MAP),at.__version=J.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function yt(R,x,B,G,J,at){let ht=r.convert(B.format,B.colorSpace),K=r.convert(B.type),et=y(B.internalFormat,ht,K,B.normalized,B.colorSpace),ut=n.get(x),It=n.get(B);if(It.__renderTarget=x,!ut.__hasExternalTextures){let ct=Math.max(1,x.width>>at),lt=Math.max(1,x.height>>at);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,at,et,ct,lt,x.depth,0,ht,K,null):e.texImage2D(J,at,et,ct,lt,0,ht,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Ae(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,J,It.__webglTexture,0,ge(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,J,It.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(R,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){let G=x.depthTexture,J=G&&G.isDepthTexture?G.type:null,at=S(x.stencilBuffer,J),ht=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ae(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(x),at,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(x),at,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,at,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,R)}else{let G=x.textures;for(let J=0;J<G.length;J++){let at=G[J],ht=r.convert(at.format,at.colorSpace),K=r.convert(at.type),et=y(at.internalFormat,ht,K,at.normalized,at.colorSpace);Ae(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(x),et,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(x),et,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,et,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(R,x,B){let G=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,x.depthTexture);let ut=r.convert(x.depthTexture.format),It=r.convert(x.depthTexture.type),ct;x.depthTexture.format===Qn?ct=i.DEPTH_COMPONENT24:x.depthTexture.format===si&&(ct=i.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ct,x.width,x.height,0,ut,It,null)}}else st(x.depthTexture,0);let at=J.__webglTexture,ht=ge(x),K=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,et=x.depthTexture.format===si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Qn)Ae(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,K,at,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,et,K,at,0);else if(x.depthTexture.format===si)Ae(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,K,at,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,et,K,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ht(R){let x=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let G=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",J)};G.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=G}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)Ie(x.__webglFramebuffer[G],R,G);else{let G=R.texture.mipmaps;G&&G.length>0?Ie(x.__webglFramebuffer[0],R,0):Ie(x.__webglFramebuffer,R,0)}else if(B){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=i.createRenderbuffer(),Vt(x.__webglDepthbuffer[G],R,!1);else{let J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,at)}}else{let G=R.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Vt(x.__webglDepthbuffer,R,!1);else{let J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,at)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(R,x,B){let G=n.get(R);x!==void 0&&yt(G.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ht(R)}function ce(R){let x=R.texture,B=n.get(R),G=n.get(x);R.addEventListener("dispose",_);let J=R.textures,at=R.isWebGLCubeRenderTarget===!0,ht=J.length>1;if(ht||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=x.version,a.memory.textures++),at){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let et=0;et<x.mipmaps.length;et++)B.__webglFramebuffer[K][et]=i.createFramebuffer()}else B.__webglFramebuffer[K]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)B.__webglFramebuffer[K]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ht)for(let K=0,et=J.length;K<et;K++){let ut=n.get(J[K]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Ae(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<J.length;K++){let et=J[K];B.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[K]);let ut=r.convert(et.format,et.colorSpace),It=r.convert(et.type),ct=y(et.internalFormat,ut,It,et.normalized,et.colorSpace,R.isXRRenderTarget===!0),lt=ge(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,ct,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,B.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Vt(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0)for(let et=0;et<x.mipmaps.length;et++)yt(B.__webglFramebuffer[K][et],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,et);else yt(B.__webglFramebuffer[K],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(x)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let K=0,et=J.length;K<et;K++){let ut=J[K],It=n.get(ut),ct=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ct=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,It.__webglTexture),Jt(ct,ut),yt(B.__webglFramebuffer,R,ut,i.COLOR_ATTACHMENT0+K,ct,0),p(ut)&&b(ct)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,G.__webglTexture),Jt(K,x),x.mipmaps&&x.mipmaps.length>0)for(let et=0;et<x.mipmaps.length;et++)yt(B.__webglFramebuffer[et],R,x,i.COLOR_ATTACHMENT0,K,et);else yt(B.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,K,0);p(x)&&b(K),e.unbindTexture()}R.depthBuffer&&Ht(R)}function Xt(R){let x=R.textures;for(let B=0,G=x.length;B<G;B++){let J=x[B];if(p(J)){let at=A(R),ht=n.get(J).__webglTexture;e.bindTexture(at,ht),b(at),e.unbindTexture()}}}let de=[],De=[];function Je(R){if(R.samples>0){if(Ae(R)===!1){let x=R.textures,B=R.width,G=R.height,J=i.COLOR_BUFFER_BIT,at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(R),K=x.length>1;if(K)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let et=R.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[ut]);let It=n.get(x[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,It,0)}i.blitFramebuffer(0,0,B,G,0,0,B,G,J,i.NEAREST),c===!0&&(de.length=0,De.length=0,de.push(i.COLOR_ATTACHMENT0+ut),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(de.push(at),De.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,De)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,ht.__webglColorRenderbuffer[ut]);let It=n.get(x[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,It,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ge(R){return Math.min(s.maxSamples,R.samples)}function Ae(R){let x=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function F(R){let x=a.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function Ve(R,x){let B=R.colorSpace,G=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Ir&&B!==wi&&($t.getTransfer(B)===oe?(G!==vn||J!==ln)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",B)),x}function se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=z,this.getTextureUnits=N,this.setTextureUnits=k,this.setTexture2D=st,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=it,this.rebindTextures=Qt,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function g_(i,t){function e(n,s=wi){let r,a=$t.getTransfer(s);if(n===ln)return i.UNSIGNED_BYTE;if(n===il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ch)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ah)return i.BYTE;if(n===oh)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===nl)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Ne)return i.HALF_FLOAT;if(n===hh)return i.ALPHA;if(n===uh)return i.RGB;if(n===vn)return i.RGBA;if(n===Qn)return i.DEPTH_COMPONENT;if(n===si)return i.DEPTH_STENCIL;if(n===rl)return i.RED;if(n===al)return i.RED_INTEGER;if(n===Qi)return i.RG;if(n===ol)return i.RG_INTEGER;if(n===ll)return i.RGBA_INTEGER;if(n===da||n===fa||n===pa||n===ma)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cl||n===hl||n===ul||n===dl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fl||n===pl||n===ml||n===gl||n===xl||n===ga||n===_l)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fl||n===pl)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ml)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===gl)return r.COMPRESSED_R11_EAC;if(n===xl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ga)return r.COMPRESSED_RG11_EAC;if(n===_l)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===vl||n===yl||n===Ml||n===Sl||n===bl||n===Tl||n===El||n===wl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Dl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ml)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===El)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Al)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Il)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ll||n===Nl||n===Ul)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ll)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fl||n===Ol||n===xa||n===Bl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var x_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,__=`
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

}`,Fh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new qr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ie({vertexShader:x_,fragmentShader:__,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new Dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oh=class extends ti{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,v=typeof XRWebGLBinding<"u",g=new Fh,p={},b=e.getContextAttributes(),A=null,y=null,S=[],T=[],C=new bt,_=null,E=null,P=new Ke;P.viewport=new Re;let D=new Ke;D.viewport=new Re;let L=[P,D],z=new $o,N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=S[Z];return Q===void 0&&(Q=new er,S[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=S[Z];return Q===void 0&&(Q=new er,S[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=S[Z];return Q===void 0&&(Q=new er,S[Z]=Q),Q.getHandSpace()};function q(Z){let Q=T.indexOf(Z.inputSource);if(Q===-1)return;let xt=S[Q];xt!==void 0&&(xt.update(Z.inputSource,Z.frame,l||a),xt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",st);for(let Z=0;Z<S.length;Z++){let Q=T[Z];Q!==null&&(T[Z]=null,S[Z].disconnect(Q))}N=null,k=null,g.reset();for(let Z in p)delete p[Z];if(t.setRenderTarget(A),f=null,d=null,u=null,s=null,y=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),E!==null){let Z=E.camera;Z.fov=E.fov,Z.zoom=E.zoom,Z.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",st),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Ut=null,yt=null;b.depth&&(yt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=b.stencil?si:Qn,Ut=b.stencil?ji:Xn);let Vt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Te(d.textureWidth,d.textureHeight,{format:vn,type:ln,depthTexture:new ii(d.textureWidth,d.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let xt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Te(f.framebufferWidth,f.framebufferHeight,{format:vn,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function st(Z){for(let Q=0;Q<Z.removed.length;Q++){let xt=Z.removed[Q],Ut=T.indexOf(xt);Ut>=0&&(T[Ut]=null,S[Ut].disconnect(xt))}for(let Q=0;Q<Z.added.length;Q++){let xt=Z.added[Q],Ut=T.indexOf(xt);if(Ut===-1){for(let Vt=0;Vt<S.length;Vt++)if(Vt>=T.length){T.push(xt),Ut=Vt;break}else if(T[Vt]===null){T[Vt]=xt,Ut=Vt;break}if(Ut===-1)break}let yt=S[Ut];yt&&yt.connect(xt)}}let W=new I,j=new I;function it(Z,Q,xt){W.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(xt.matrixWorld);let Ut=W.distanceTo(j),yt=Q.projectionMatrix.elements,Vt=xt.projectionMatrix.elements,Ie=yt[14]/(yt[10]-1),Ht=yt[14]/(yt[10]+1),Qt=(yt[9]+1)/yt[5],ce=(yt[9]-1)/yt[5],Xt=(yt[8]-1)/yt[0],de=(Vt[8]+1)/Vt[0],De=Ie*Xt,Je=Ie*de,ge=Ut/(-Xt+de),Ae=ge*-Xt;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ae),Z.translateZ(ge),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),yt[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let F=Ie+ge,Ve=Ht+ge,se=De-Ae,R=Je+(Ut-Ae),x=Qt*Ht/Ve*F,B=ce*Ht/Ve*F;Z.projectionMatrix.makePerspective(se,R,x,B,F,Ve),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Rt(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let Q=Z.near,xt=Z.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(xt=g.depthFar)),z.near=D.near=P.near=Q,z.far=D.far=P.far=xt,(N!==z.near||k!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),N=z.near,k=z.far),z.layers.mask=Z.layers.mask|6,P.layers.mask=z.layers.mask&-5,D.layers.mask=z.layers.mask&-3;let Ut=Z.parent,yt=z.cameras;Rt(z,Ut);for(let Vt=0;Vt<yt.length;Vt++)Rt(yt[Vt],Ut);yt.length===2?it(z,P,D):z.projectionMatrix.copy(P.projectionMatrix),E===null&&Z.isPerspectiveCamera&&(E={camera:Z,fov:Z.fov,zoom:Z.zoom}),Ct(Z,z,Ut)};function Ct(Z,Q,xt){xt===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(xt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ur*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(Z){return p[Z]};let le=null;function Jt(Z,Q){if(h=Q.getViewerPose(l||a),m=Q,h!==null){let xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ut=!1;xt.length!==z.cameras.length&&(z.cameras.length=0,Ut=!0);for(let Ht=0;Ht<xt.length;Ht++){let Qt=xt[Ht],ce=null;if(f!==null)ce=f.getViewport(Qt);else{let de=u.getViewSubImage(d,Qt);ce=de.viewport,Ht===0&&(t.setRenderTargetTextures(y,de.colorTexture,de.depthStencilTexture),t.setRenderTarget(y))}let Xt=L[Ht];Xt===void 0&&(Xt=new Ke,Xt.layers.enable(Ht),Xt.viewport=new Re,L[Ht]=Xt),Xt.matrix.fromArray(Qt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Qt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(ce.x,ce.y,ce.width,ce.height),Ht===0&&(z.matrix.copy(Xt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ut===!0&&z.cameras.push(Xt)}let yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let Ht=u.getDepthInformation(xt[0]);Ht&&Ht.isValid&&Ht.texture&&g.init(Ht,s.renderState)}if(yt&&yt.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let Ht=0;Ht<xt.length;Ht++){let Qt=xt[Ht].camera;if(Qt){let ce=p[Qt];ce||(ce=new qr,p[Qt]=ce);let Xt=u.getCameraImage(Qt);ce.sourceTexture=Xt}}}}for(let xt=0;xt<S.length;xt++){let Ut=T[xt],yt=S[xt];Ut!==null&&yt!==void 0&&yt.update(Ut,Q,l||a)}le&&le(Z,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}let jt=new $d;jt.setAnimationLoop(Jt),this.setAnimationLoop=function(Z){le=Z},this.dispose=function(){}}},v_=new te,nf=new kt;nf.set(-1,0,0,0,1,0,0,0,1);function y_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ph(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,A,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,b,A):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===en&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===en&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=t.get(p),A=b.envMap,y=b.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(v_.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(nf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,b,A){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=A*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function M_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){let T=S.program;n.uniformBlockBinding(y,T)}function l(y,S){let T=s[y.id];T===void 0&&(g(y),T=h(y),s[y.id]=T,y.addEventListener("dispose",b));let C=S.program;n.updateUBOMapping(y,C);let _=t.render.frame;r[y.id]!==_&&(d(y),r[y.id]=_)}function h(y){let S=u();y.__bindingPointIndex=S;let T=i.createBuffer(),C=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,C,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let S=s[y.id],T=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,E=T.length;_<E;_++){let P=T[_];if(Array.isArray(P))for(let D=0,L=P.length;D<L;D++)f(P[D],_,D,C);else f(P,_,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,S,T,C){if(v(y,S,T,C)===!0){let _=y.__offset,E=y.value;if(Array.isArray(E)){let P=0;for(let D=0;D<E.length;D++){let L=E[D],z=p(L);m(L,y.__data,P),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(P+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function m(y,S,T){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,T)}function v(y,S,T,C){let _=y.value,E=S+"_"+T;if(C[E]===void 0)return typeof _=="number"||typeof _=="boolean"?C[E]=_:ArrayBuffer.isView(_)?C[E]=_.slice():C[E]=_.clone(),!0;{let P=C[E];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return C[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function g(y){let S=y.uniforms,T=0,C=16;for(let E=0,P=S.length;E<P;E++){let D=Array.isArray(S[E])?S[E]:[S[E]];for(let L=0,z=D.length;L<z;L++){let N=D[L],k=Array.isArray(N.value)?N.value:[N.value];for(let q=0,Y=k.length;q<Y;q++){let st=k[q],W=p(st),j=T%C,it=j%W.boundary,Rt=j+it;T+=it,Rt!==0&&C-Rt<W.storage&&(T+=C-Rt),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=T,T+=W.storage}}}let _=T%C;return _>0&&(T+=C-_),y.__size=T,y.__cache={},this}function p(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",y),S}function b(y){let S=y.target;S.removeEventListener("dispose",b);let T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function A(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:A}}var S_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ri=null;function b_(){return ri===null&&(ri=new Ti(S_,16,16,Qi,Ne),ri.name="DFG_LUT",ri.minFilter=tn,ri.magFilter=tn,ri.wrapS=jn,ri.wrapT=jn,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}var Wl=class{constructor(t={}){let{canvas:e=Md(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ln}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let v=f,g=new Set([ll,ol,al]),p=new Set([ln,Xn,cr,ji,il,sl]),b=new Uint32Array(4),A=new Int32Array(4),y=new I,S=null,T=null,C=[],_=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,L=null,z=null,N=null,k=null;this._outputColorSpace=Oe;let q=0,Y=0,st=null,W=-1,j=null,it=new Re,Rt=new Re,Ct=null,le=new pt(0),Jt=0,jt=e.width,Z=e.height,Q=1,xt=null,Ut=null,yt=new Re(0,0,jt,Z),Vt=new Re(0,0,jt,Z),Ie=!1,Ht=new sr,Qt=!1,ce=!1,Xt=new te,de=new I,De=new Re,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ge=!1;function Ae(){return st===null?Q:1}let F=n;function Ve(M,U){return e.getContext(M,U)}let se,R,x,B,G,J,at,ht,K,et,ut,It,ct,lt,Tt,Lt,Bt,O,dt,tt,ft,vt,rt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",Un,!1),F===null){let U="webgl2";if(F=Ve(U,M),F===null)throw Ve(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Nt()}catch(M){throw e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Un,!1),Ft("WebGLRenderer: "+M.message),M}function Nt(){se=new Pg(F),se.init(),ft=new g_(F,se),R=new yg(F,se,t,ft),x=new p_(F,se),R.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),z=F.createFramebuffer(),N=F.createFramebuffer(),k=F.createFramebuffer(),B=new Lg(F),G=new t_,J=new m_(F,se,x,G,R,ft,B),at=new Cg(P),ht=new Up(F),vt=new _g(F,ht),K=new Ig(F,ht,B,vt),et=new Ug(F,K,ht,vt,B),O=new Ng(F,R,J),Tt=new Mg(G),ut=new Qx(P,at,se,R,vt,Tt),It=new y_(P,G),ct=new n_,lt=new l_(se),Bt=new xg(P,at,x,et,m,c),Lt=new f_(P,et,R),rt=new M_(F,B,R,x),dt=new vg(F,se,B),tt=new Dg(F,se,B),B.programs=ut.programs,P.capabilities=R,P.extensions=se,P.properties=G,P.renderLists=ct,P.shadowMap=Lt,P.state=x,P.info=B}v!==ln&&(E=new Og(v,e.width,e.height,o,s,r));let Pt=new Oh(P,F);this.xr=Pt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let M=se.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=se.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(M){M!==void 0&&(Q=M,this.setSize(jt,Z,!1))},this.getSize=function(M){return M.set(jt,Z)},this.setSize=function(M,U,X=!0){if(Pt.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}jt=M,Z=U,e.width=Math.floor(M*Q),e.height=Math.floor(U*Q),X===!0&&(e.style.width=M+"px",e.style.height=U+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(jt*Q,Z*Q).floor()},this.setDrawingBufferSize=function(M,U,X){jt=M,Z=U,Q=X,e.width=Math.floor(M*X),e.height=Math.floor(U*X),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(v===ln){Ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(it)},this.getViewport=function(M){return M.copy(yt)},this.setViewport=function(M,U,X,V){M.isVector4?yt.set(M.x,M.y,M.z,M.w):yt.set(M,U,X,V),x.viewport(it.copy(yt).multiplyScalar(Q).round())},this.getScissor=function(M){return M.copy(Vt)},this.setScissor=function(M,U,X,V){M.isVector4?Vt.set(M.x,M.y,M.z,M.w):Vt.set(M,U,X,V),x.scissor(Rt.copy(Vt).multiplyScalar(Q).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(M){x.setScissorTest(Ie=M)},this.setOpaqueSort=function(M){xt=M},this.setTransparentSort=function(M){Ut=M},this.getClearColor=function(M){return M.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,X=!0){let V=0;if(M){let H=!1;if(st!==null){let _t=st.texture.format;H=g.has(_t)}if(H){let _t=st.texture.type,St=p.has(_t),gt=Bt.getClearColor(),Et=Bt.getClearAlpha(),Dt=gt.r,qt=gt.g,Kt=gt.b;St?(b[0]=Dt,b[1]=qt,b[2]=Kt,b[3]=Et,F.clearBufferuiv(F.COLOR,0,b)):(A[0]=Dt,A[1]=qt,A[2]=Kt,A[3]=Et,F.clearBufferiv(F.COLOR,0,A))}else V|=F.COLOR_BUFFER_BIT}U&&(V|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),L=M},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Un,!1),Bt.dispose(),ct.dispose(),lt.dispose(),G.dispose(),at.dispose(),et.dispose(),vt.dispose(),rt.dispose(),ut.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",hu),Pt.removeEventListener("sessionend",uu),as.stop()};function ye(M){M.preventDefault(),Nr("WebGLRenderer: Context Lost."),D=!0}function he(){Nr("WebGLRenderer: Context Restored."),D=!1;let M=B.autoReset,U=Lt.enabled,X=Lt.autoUpdate,V=Lt.needsUpdate,H=Lt.type;Nt(),B.autoReset=M,Lt.enabled=U,Lt.autoUpdate=X,Lt.needsUpdate=V,Lt.type=H}function Un(M){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Zn(M){let U=M.target;U.removeEventListener("dispose",Zn),Vf(U)}function Vf(M){Hf(M),G.remove(M)}function Hf(M){let U=G.get(M).programs;U!==void 0&&(U.forEach(function(X){ut.releaseProgram(X)}),M.isShaderMaterial&&ut.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,X,V,H,_t){U===null&&(U=Je);let St=H.isMesh&&H.matrixWorld.determinantAffine()<0,gt=Xf(M,U,X,V,H);x.setMaterial(V,St);let Et=X.index,Dt=1;if(V.wireframe===!0){if(Et=K.getWireframeAttribute(X),Et===void 0)return;Dt=2}let qt=X.drawRange,Kt=X.attributes.position,wt=qt.start*Dt,ue=(qt.start+qt.count)*Dt;_t!==null&&(wt=Math.max(wt,_t.start*Dt),ue=Math.min(ue,(_t.start+_t.count)*Dt)),Et!==null?(wt=Math.max(wt,0),ue=Math.min(ue,Et.count)):Kt!=null&&(wt=Math.max(wt,0),ue=Math.min(ue,Kt.count));let He=ue-wt;if(He<0||He===1/0)return;vt.setup(H,V,gt,X,Et);let Se,xe=dt;if(Et!==null&&(Se=ht.get(Et),xe=tt,xe.setIndex(Se)),H.isMesh)V.wireframe===!0?(x.setLineWidth(V.wireframeLinewidth*Ae()),xe.setMode(F.LINES)):xe.setMode(F.TRIANGLES);else if(H.isLine){let rn=V.linewidth;rn===void 0&&(rn=1),x.setLineWidth(rn*Ae()),H.isLineSegments?xe.setMode(F.LINES):H.isLineLoop?xe.setMode(F.LINE_LOOP):xe.setMode(F.LINE_STRIP)}else H.isPoints?xe.setMode(F.POINTS):H.isSprite&&xe.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(se.get("WEBGL_multi_draw"))xe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let rn=H._multiDrawStarts,Mt=H._multiDrawCounts,un=H._multiDrawCount,re=Et?ht.get(Et).bytesPerElement:1,Rn=G.get(V).currentProgram.getUniforms();for(let Jn=0;Jn<un;Jn++)Rn.setValue(F,"_gl_DrawID",Jn),xe.render(rn[Jn]/re,Mt[Jn])}else if(H.isInstancedMesh)xe.renderInstances(wt,He,H.count);else if(X.isInstancedBufferGeometry){let rn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Mt=Math.min(X.instanceCount,rn);xe.renderInstances(wt,He,Mt)}else xe.render(wt,He)};function cu(M,U,X,V){L!==null&&M.isNodeMaterial&&L.setObject(V,M),Qt===!0&&Tt.setState(M,X,!1),M.transparent===!0&&M.side===mn&&M.forceSinglePass===!1?(M.side=en,M.needsUpdate=!0,Za(M,U,V),M.side=Zi,M.needsUpdate=!0,Za(M,U,V),M.side=mn):Za(M,U,V)}this.compile=function(M,U,X=null){X===null&&(X=M),L!==null&&L.renderStart(M,U,X),T=lt.get(X),T.init(U),_.push(T),X.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),M!==X&&M.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),ce=this.localClippingEnabled,Qt=Tt.init(this.clippingPlanes,ce),Qt===!0&&Tt.setGlobalState(this.clippingPlanes,U),L!==null&&Lt.render(T.state.shadowsArray,X,U);let V=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let _t=H.material;if(_t)if(Array.isArray(_t))for(let St=0;St<_t.length;St++){let gt=_t[St];cu(gt,X,U,H),V.add(gt)}else cu(_t,X,U,H),V.add(_t)}),T=_.pop(),L!==null&&L.renderEnd(),V},this.compileAsync=function(M,U,X=null){let V=this.compile(M,U,X);return new Promise(H=>{function _t(){if(V.forEach(function(St){let Et=G.get(St).currentProgram;(Et===void 0||Et.isReady())&&V.delete(St)}),V.size===0){H(M);return}setTimeout(_t,10)}se.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let xc=null;function Gf(M){xc&&xc(M)}function hu(){as.stop()}function uu(){as.start()}let as=new $d;as.setAnimationLoop(Gf),typeof self<"u"&&as.setContext(self),this.setAnimationLoop=function(M){xc=M,Pt.setAnimationLoop(M),M===null?as.stop():as.start()},Pt.addEventListener("sessionstart",hu),Pt.addEventListener("sessionend",uu),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(M,U);let X=Pt.enabled===!0&&Pt.isPresenting===!0,V=E!==null&&(st===null||X)&&E.begin(P,st);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(U),U=Pt.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,U,st),T=lt.get(M,_.length),T.init(U),T.state.textureUnits=J.getTextureUnits(),_.push(T),Xt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ht.setFromProjectionMatrix(Xt,kn,U.reversedDepth),ce=this.localClippingEnabled,Qt=Tt.init(this.clippingPlanes,ce),S=ct.get(M,C.length),S.init(),C.push(S),Pt.enabled===!0&&Pt.isPresenting===!0){let St=P.xr.getDepthSensingMesh();St!==null&&_c(St,U,-1/0,P.sortObjects)}_c(M,U,0,P.sortObjects),S.finish(),L!==null&&L.updateLights(T.state.lightsArray),P.sortObjects===!0&&S.sort(xt,Ut),ge=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,ge&&Bt.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qt===!0&&Tt.beginShadows();let H=T.state.shadowsArray;if(Lt.render(H,M,U),Qt===!0&&Tt.endShadows(),(V&&E.hasRenderPass())===!1){let St=S.opaque,gt=S.transmissive;if(T.setupLights(),U.isArrayCamera){let Et=U.cameras;if(gt.length>0)for(let Dt=0,qt=Et.length;Dt<qt;Dt++){let Kt=Et[Dt];fu(St,gt,M,Kt)}ge&&Bt.render(M);for(let Dt=0,qt=Et.length;Dt<qt;Dt++){let Kt=Et[Dt];du(S,M,Kt,Kt.viewport)}}else gt.length>0&&fu(St,gt,M,U),ge&&Bt.render(M),du(S,M,U)}st!==null&&Y===0&&(J.updateMultisampleRenderTarget(st),J.updateRenderTargetMipmap(st)),V&&E.end(P),M.isScene===!0&&M.onAfterRender(P,M,U),vt.resetDefaultState(),W=-1,j=null,_.pop(),_.length>0?(T=_[_.length-1],J.setTextureUnits(T.state.textureUnits),Qt===!0&&Tt.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,L!==null&&L.renderEnd()};function _c(M,U,X,V){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Ht)){V&&De.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Xt);let St=et.update(M),gt=M.material;gt.visible&&S.push(M,St,gt,X,De.z,null,U)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Ht))){let St=et.update(M),gt=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),De.copy(M.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),De.copy(St.boundingSphere.center)),De.applyMatrix4(M.matrixWorld).applyMatrix4(Xt)),Array.isArray(gt)){let Et=St.groups;for(let Dt=0,qt=Et.length;Dt<qt;Dt++){let Kt=Et[Dt],wt=gt[Kt.materialIndex];wt&&wt.visible&&S.push(M,St,wt,X,De.z,Kt,U)}}else gt.visible&&S.push(M,St,gt,X,De.z,null,U)}}let _t=M.children;for(let St=0,gt=_t.length;St<gt;St++)_c(_t[St],U,X,V)}function du(M,U,X,V){let{opaque:H,transmissive:_t,transparent:St}=M;T.setupLightsView(X),Qt===!0&&Tt.setGlobalState(P.clippingPlanes,X),V&&x.viewport(it.copy(V)),H.length>0&&Ya(H,U,X),_t.length>0&&Ya(_t,U,X),St.length>0&&Ya(St,U,X),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function fu(M,U,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){let wt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new Te(1,1,{generateMipmaps:!0,type:wt?Ne:ln,minFilter:Ki,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$t.workingColorSpace})}let _t=T.state.transmissionRenderTarget[V.id],St=V.viewport||it;_t.setSize(St.z*P.transmissionResolutionScale,St.w*P.transmissionResolutionScale);let gt=P.getRenderTarget(),Et=P.getActiveCubeFace(),Dt=P.getActiveMipmapLevel();P.setRenderTarget(_t),P.getClearColor(le),Jt=P.getClearAlpha(),Jt<1&&P.setClearColor(16777215,.5),P.clear(),ge&&Bt.render(X);let qt=P.toneMapping;P.toneMapping=Wn;let Kt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),Qt===!0&&Tt.setGlobalState(P.clippingPlanes,V),Ya(M,X,V),J.updateMultisampleRenderTarget(_t),J.updateRenderTargetMipmap(_t),se.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let ue=0,He=U.length;ue<He;ue++){let Se=U[ue],{object:xe,geometry:rn,material:Mt,group:un}=Se;if(Mt.side===mn&&xe.layers.test(V.layers)){let re=Mt.side;Mt.side=en,Mt.needsUpdate=!0,pu(xe,X,V,rn,Mt,un),Mt.side=re,Mt.needsUpdate=!0,wt=!0}}wt===!0&&(J.updateMultisampleRenderTarget(_t),J.updateRenderTargetMipmap(_t))}P.setRenderTarget(gt,Et,Dt),P.setClearColor(le,Jt),Kt!==void 0&&(V.viewport=Kt),P.toneMapping=qt}function Ya(M,U,X){let V=U.isScene===!0?U.overrideMaterial:null;for(let H=0,_t=M.length;H<_t;H++){let St=M[H],{object:gt,geometry:Et,group:Dt}=St,qt=St.material;qt.allowOverride===!0&&V!==null&&(qt=V),gt.layers.test(X.layers)&&pu(gt,U,X,Et,qt,Dt)}}function pu(M,U,X,V,H,_t){L!==null&&H.isNodeMaterial&&L.setObject(M,H),M.onBeforeRender(P,U,X,V,H,_t),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(P,U,X,V,M,_t),H.transparent===!0&&H.side===mn&&H.forceSinglePass===!1?(H.side=en,H.needsUpdate=!0,P.renderBufferDirect(X,U,V,H,M,_t),H.side=Zi,H.needsUpdate=!0,P.renderBufferDirect(X,U,V,H,M,_t),H.side=mn):P.renderBufferDirect(X,U,V,H,M,_t),M.onAfterRender(P,U,X,V,H,_t)}function Za(M,U,X){U.isScene!==!0&&(U=Je);let V=G.get(M),H=T.state.lights,_t=T.state.shadowsArray,St=H.state.version,gt=ut.getParameters(M,H.state,_t,U,X,T.state.lightProbeGridArray),Et=ut.getProgramCacheKey(gt),Dt=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;let qt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=at.get(M.envMap||V.environment,qt),V.envMapRotation=V.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Dt===void 0&&(M.addEventListener("dispose",Zn),Dt=new Map,V.programs=Dt);let Kt=Dt.get(Et);if(Kt!==void 0){if(V.currentProgram===Kt&&V.lightsStateVersion===St)return gu(M,gt),Kt}else gt.uniforms=ut.getUniforms(M),L!==null&&M.isNodeMaterial&&L.build(M,X,gt),M.onBeforeCompile(gt,P),Kt=ut.acquireProgram(gt,Et),Dt.set(Et,Kt),V.uniforms=gt.uniforms;let wt=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(wt.clippingPlanes=Tt.uniform),gu(M,gt),V.needsLights=Yf(M),V.lightsStateVersion=St,V.needsLights&&(wt.ambientLightColor.value=H.state.ambient,wt.lightProbe.value=H.state.probe,wt.sunLights.value=H.state.sun,wt.sunLightShadows.value=H.state.sunShadow,wt.directionalLights.value=H.state.directional,wt.directionalLightShadows.value=H.state.directionalShadow,wt.spotLights.value=H.state.spot,wt.spotLightShadows.value=H.state.spotShadow,wt.rectAreaLights.value=H.state.rectArea,wt.ltc_1.value=H.state.rectAreaLTC1,wt.ltc_2.value=H.state.rectAreaLTC2,wt.pointLights.value=H.state.point,wt.pointLightShadows.value=H.state.pointShadow,wt.hemisphereLights.value=H.state.hemi,wt.sunShadowMatrix.value=H.state.sunShadowMatrix,wt.sunShadowCascade.value=H.state.sunShadowCascade,wt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,wt.spotLightMatrix.value=H.state.spotLightMatrix,wt.spotLightMap.value=H.state.spotLightMap,wt.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=Kt,V.uniformsList=null,Kt}function mu(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=dr.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function gu(M,U){let X=G.get(M);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function Wf(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let X=0,V=M.length;X<V;X++){let H=M[X];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function Xf(M,U,X,V,H){U.isScene!==!0&&(U=Je),J.resetTextureUnits();let _t=U.fog,St=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,gt=st===null?P.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:$t.workingColorSpace,Et=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Dt=at.get(V.envMap||St,Et),qt=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Kt=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),wt=!!X.morphAttributes.position,ue=!!X.morphAttributes.normal,He=!!X.morphAttributes.color,Se=Wn;V.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Se=P.toneMapping);let xe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,rn=xe!==void 0?xe.length:0,Mt=G.get(V),un=T.state.lights;if(Qt===!0&&(ce===!0||M!==j)){let Me=M===j&&V.id===W;Tt.setState(V,M,Me)}let re=!1;V.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==un.state.version||Mt.outputColorSpace!==gt||H.isBatchedMesh&&Mt.batching===!1||!H.isBatchedMesh&&Mt.batching===!0||H.isBatchedMesh&&Mt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Mt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Mt.instancing===!1||!H.isInstancedMesh&&Mt.instancing===!0||H.isSkinnedMesh&&Mt.skinning===!1||!H.isSkinnedMesh&&Mt.skinning===!0||H.isInstancedMesh&&Mt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Mt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Mt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Mt.instancingMorph===!1&&H.morphTexture!==null||Mt.envMap!==Dt||V.fog===!0&&Mt.fog!==_t||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Tt.numPlanes||Mt.numIntersection!==Tt.numIntersection)||Mt.vertexAlphas!==qt||Mt.vertexTangents!==Kt||Mt.morphTargets!==wt||Mt.morphNormals!==ue||Mt.morphColors!==He||Mt.toneMapping!==Se||Mt.morphTargetsCount!==rn||!!Mt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,Mt.__version=V.version);let Rn=Mt.currentProgram;re===!0&&(Rn=Za(V,U,H),L&&V.isNodeMaterial&&L.onUpdateProgram(V,Rn,Mt));let Jn=!1,Ni=!1,Ps=!1,fe=Rn.getUniforms(),Fe=Mt.uniforms;if(x.useProgram(Rn.program)&&(Jn=!0,Ni=!0,Ps=!0),V.id!==W&&(W=V.id,Ni=!0),Mt.needsLights){let Me=Wf(T.state.lightProbeGridArray,H);Mt.lightProbeGrid!==Me&&(Mt.lightProbeGrid=Me,Ni=!0)}if(Jn||j!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),fe.setValue(F,"projectionMatrix",M.projectionMatrix),fe.setValue(F,"viewMatrix",M.matrixWorldInverse);let Fi=fe.map.cameraPosition;Fi!==void 0&&Fi.setValue(F,de.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&fe.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&fe.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,Ni=!0,Ps=!0)}if(Mt.needsLights&&(un.state.sunShadowMap.length>0&&fe.setValue(F,"sunShadowMap",un.state.sunShadowMap,J),un.state.directionalShadowMap.length>0&&fe.setValue(F,"directionalShadowMap",un.state.directionalShadowMap,J),un.state.spotShadowMap.length>0&&fe.setValue(F,"spotShadowMap",un.state.spotShadowMap,J),un.state.pointShadowMap.length>0&&fe.setValue(F,"pointShadowMap",un.state.pointShadowMap,J)),H.isSkinnedMesh){fe.setOptional(F,H,"bindMatrix"),fe.setOptional(F,H,"bindMatrixInverse");let Me=H.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),fe.setValue(F,"boneTexture",Me.boneTexture,J))}H.isBatchedMesh&&(fe.setOptional(F,H,"batchingTexture"),fe.setValue(F,"batchingTexture",H._matricesTexture,J),fe.setOptional(F,H,"batchingIdTexture"),fe.setValue(F,"batchingIdTexture",H._indirectTexture,J),fe.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&fe.setValue(F,"batchingColorTexture",H._colorsTexture,J));let Ui=X.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&O.update(H,X,Rn),(Ni||Mt.receiveShadow!==H.receiveShadow)&&(Mt.receiveShadow=H.receiveShadow,fe.setValue(F,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(Fe.envMapIntensity.value=U.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=b_()),Ni){if(fe.setValue(F,"toneMappingExposure",P.toneMappingExposure),Mt.needsLights&&qf(Fe,Ps),_t&&V.fog===!0&&It.refreshFogUniforms(Fe,_t),It.refreshMaterialUniforms(Fe,V,Q,Z,T.state.transmissionRenderTarget[M.id]),Mt.needsLights&&Mt.lightProbeGrid){let Me=Mt.lightProbeGrid;Fe.probesSH.value=Me.texture,Fe.probesMin.value.copy(Me.boundingBox.min),Fe.probesMax.value.copy(Me.boundingBox.max),Fe.probesResolution.value.copy(Me.resolution)}dr.upload(F,mu(Mt),Fe,J)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(dr.upload(F,mu(Mt),Fe,J),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&fe.setValue(F,"center",H.center),fe.setValue(F,"modelViewMatrix",H.modelViewMatrix),fe.setValue(F,"normalMatrix",H.normalMatrix),fe.setValue(F,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){let Me=V.uniformsGroups;for(let Fi=0,Is=Me.length;Fi<Is;Fi++){let _u=Me[Fi];rt.update(_u,Rn),rt.bind(_u,Rn)}}return Rn}function qf(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Yf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(M,U,X){let V=G.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),G.get(M.texture).__webglTexture=U,G.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let X=G.get(M);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,X=0){st=M,q=U,Y=X;let V=null,H=!1,_t=!1;if(M){let gt=G.get(M);if(gt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(F.FRAMEBUFFER,gt.__webglFramebuffer),it.copy(M.viewport),Rt.copy(M.scissor),Ct=M.scissorTest,x.viewport(it),x.scissor(Rt),x.setScissorTest(Ct),W=-1;return}else if(gt.__webglFramebuffer===void 0)J.setupRenderTarget(M);else if(gt.__hasExternalTextures)J.rebindTextures(M,G.get(M.texture).__webglTexture,G.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let qt=M.depthTexture;if(gt.__boundDepthTexture!==qt){if(qt!==null&&G.has(qt)&&(M.width!==qt.image.width||M.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(M)}}let Et=M.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(_t=!0);let Dt=G.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?V=Dt[U][X]:V=Dt[U],H=!0):M.samples>0&&J.useMultisampledRTT(M)===!1?V=G.get(M).__webglMultisampledFramebuffer:Array.isArray(Dt)?V=Dt[X]:V=Dt,it.copy(M.viewport),Rt.copy(M.scissor),Ct=M.scissorTest}else it.copy(yt).multiplyScalar(Q).floor(),Rt.copy(Vt).multiplyScalar(Q).floor(),Ct=Ie;if(X!==0&&(V=z),x.bindFramebuffer(F.FRAMEBUFFER,V)&&x.drawBuffers(M,V),x.viewport(it),x.scissor(Rt),x.setScissorTest(Ct),H){let gt=G.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,gt.__webglTexture,X)}else if(_t){let gt=U;for(let Et=0;Et<M.textures.length;Et++){let Dt=G.get(M.textures[Et]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Et,Dt.__webglTexture,X,gt)}}else if(M!==null&&X!==0){let gt=G.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,gt.__webglTexture,X)}W=-1};function xu(M){let U=G.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=R.textureFormatReadable(M.format),U.__typeReadable=R.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,X,V,H,_t,St,gt=0){if(!(M&&M.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et){x.bindFramebuffer(F.FRAMEBUFFER,Et);try{let Dt=M.textures[gt],qt=Dt.format,Kt=Dt.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+gt);let wt=xu(Dt);if(wt.__formatReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-V&&X>=0&&X<=M.height-H&&F.readPixels(U,X,V,H,ft.convert(qt),ft.convert(Kt),_t)}finally{let Dt=st!==null?G.get(st).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(M,U,X,V,H,_t,St,gt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et)if(U>=0&&U<=M.width-V&&X>=0&&X<=M.height-H){x.bindFramebuffer(F.FRAMEBUFFER,Et);let Dt=M.textures[gt],qt=Dt.format,Kt=Dt.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+gt);let wt=xu(Dt);if(wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.bufferData(F.PIXEL_PACK_BUFFER,_t.byteLength,F.STREAM_READ),F.readPixels(U,X,V,H,ft.convert(qt),ft.convert(Kt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let He=st!==null?G.get(st).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,He);let Se=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await bd(F,Se,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,_t),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ue),F.deleteSync(Se),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,X=0){let V=Math.pow(2,-X),H=Math.floor(M.image.width*V),_t=Math.floor(M.image.height*V),St=U!==null?U.x:0,gt=U!==null?U.y:0;J.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,St,gt,H,_t),x.unbindTexture()},this.copyTextureToTexture=function(M,U,X=null,V=null,H=0,_t=0){let St,gt,Et,Dt,qt,Kt,wt,ue,He,Se=M.isCompressedTexture?M.mipmaps[_t]:M.image;if(X!==null)St=X.max.x-X.min.x,gt=X.max.y-X.min.y,Et=X.isBox3?X.max.z-X.min.z:1,Dt=X.min.x,qt=X.min.y,Kt=X.isBox3?X.min.z:0;else{let Fe=Math.pow(2,-H);St=Math.floor(Se.width*Fe),gt=Math.floor(Se.height*Fe),M.isDataArrayTexture?Et=Se.depth:M.isData3DTexture?Et=Math.floor(Se.depth*Fe):Et=1,Dt=0,qt=0,Kt=0}V!==null?(wt=V.x,ue=V.y,He=V.z):(wt=0,ue=0,He=0);let xe=ft.convert(U.format),rn=ft.convert(U.type),Mt;U.isData3DTexture?(J.setTexture3D(U,0),Mt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(J.setTexture2DArray(U,0),Mt=F.TEXTURE_2D_ARRAY):(J.setTexture2D(U,0),Mt=F.TEXTURE_2D),x.activeTexture(F.TEXTURE0),x.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let un=x.getParameter(F.UNPACK_ROW_LENGTH),re=x.getParameter(F.UNPACK_IMAGE_HEIGHT),Rn=x.getParameter(F.UNPACK_SKIP_PIXELS),Jn=x.getParameter(F.UNPACK_SKIP_ROWS),Ni=x.getParameter(F.UNPACK_SKIP_IMAGES);x.pixelStorei(F.UNPACK_ROW_LENGTH,Se.width),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Se.height),x.pixelStorei(F.UNPACK_SKIP_PIXELS,Dt),x.pixelStorei(F.UNPACK_SKIP_ROWS,qt),x.pixelStorei(F.UNPACK_SKIP_IMAGES,Kt);let Ps=M.isDataArrayTexture||M.isData3DTexture,fe=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let Fe=G.get(M),Ui=G.get(U),Me=G.get(Fe.__renderTarget),Fi=G.get(Ui.__renderTarget);x.bindFramebuffer(F.READ_FRAMEBUFFER,Me.__webglFramebuffer),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Is=0;Is<Et;Is++)Ps&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.get(M).__webglTexture,H,Kt+Is),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.get(U).__webglTexture,_t,He+Is)),F.blitFramebuffer(Dt,qt,St,gt,wt,ue,St,gt,F.DEPTH_BUFFER_BIT,F.NEAREST);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||G.has(M)){let Fe=G.get(M),Ui=G.get(U);x.bindFramebuffer(F.READ_FRAMEBUFFER,N),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,k);for(let Me=0;Me<Et;Me++)Ps?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Fe.__webglTexture,H,Kt+Me):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Fe.__webglTexture,H),fe?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ui.__webglTexture,_t,He+Me):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ui.__webglTexture,_t),H!==0?F.blitFramebuffer(Dt,qt,St,gt,wt,ue,St,gt,F.COLOR_BUFFER_BIT,F.NEAREST):fe?F.copyTexSubImage3D(Mt,_t,wt,ue,He+Me,Dt,qt,St,gt):F.copyTexSubImage2D(Mt,_t,wt,ue,Dt,qt,St,gt);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else fe?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(Mt,_t,wt,ue,He,St,gt,Et,xe,rn,Se.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Mt,_t,wt,ue,He,St,gt,Et,xe,Se.data):F.texSubImage3D(Mt,_t,wt,ue,He,St,gt,Et,xe,rn,Se):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,_t,wt,ue,St,gt,xe,rn,Se.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,_t,wt,ue,Se.width,Se.height,xe,Se.data):F.texSubImage2D(F.TEXTURE_2D,_t,wt,ue,St,gt,xe,rn,Se);x.pixelStorei(F.UNPACK_ROW_LENGTH,un),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,re),x.pixelStorei(F.UNPACK_SKIP_PIXELS,Rn),x.pixelStorei(F.UNPACK_SKIP_ROWS,Jn),x.pixelStorei(F.UNPACK_SKIP_IMAGES,Ni),_t===0&&U.generateMipmaps&&F.generateMipmap(Mt),x.unbindTexture()},this.initRenderTarget=function(M){G.get(M).__webglFramebuffer===void 0&&J.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?J.setTextureCube(M,0):M.isData3DTexture?J.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?J.setTexture2DArray(M,0):J.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){q=0,Y=0,st=null,x.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}};var Bh="https://race.vwfestmemecoin.com/api/arcade/zombies",ba=null,zh=i=>i.json(),oi={start(){return ba=null,fetch(Bh+"/start",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}).then(zh).then(i=>{i.ok&&(ba=i.token)}).catch(()=>{})},hasToken(){return!!ba},top(){return fetch(Bh+"/top").then(zh).then(i=>i.ok?i.top:null).catch(()=>null)},submit(i,t,e,n){return fetch(Bh+"/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:ba,nickname:i,score:t,pts:e,kills:n})}).then(zh).then(s=>(s.ok&&(ba=null),s)).catch(()=>({ok:!1,error:"Network hiccup. Try again."}))},render(i,t,e){if(i.replaceChildren(),!t){let n=document.createElement("li");n.className="muted",n.textContent="Leaderboard unavailable.",i.append(n);return}if(!t.length){let n=document.createElement("li");n.className="muted",n.textContent="No survivors yet. Be first.",i.append(n);return}for(let n of t.slice(0,10)){let s=document.createElement("li");e&&n.nickname===e&&(s.className="me");let r=document.createElement("b");r.textContent=String(n.nickname),s.append(r," \xB7 Round "+(n.score|0)+" \xB7 "+(n.aux|0).toLocaleString()+" pts"),i.append(s)}}};var Xe=Math.PI*2,we=(i,t,e)=>i<t?t:i>e?e:i,li=(i,t,e)=>i+(t-i)*e,$=(i=1,t)=>t===void 0?Math.random()*i:i+Math.random()*(t-i),wn=i=>i[Math.random()*i.length|0],sf=i=>i*i*(3-2*i);function Yl(i,t,e){let n=i*374761393+t*668265263+e*144665|0;return n=(n^n>>>13)*1274126177,n=n^n>>>16,(n>>>0)%1e5/1e5}function T_(i,t,e=0){let n=Math.floor(i),s=Math.floor(t),r=sf(i-n),a=sf(t-s),o=Yl(n,s,e),c=Yl(n+1,s,e),l=Yl(n,s+1,e),h=Yl(n+1,s+1,e);return li(li(o,c,r),li(l,h,r),a)}function xn(i,t,e=4,n=0){let s=0,r=.5,a=1;for(let o=0;o<e;o++)s+=r*T_(i*a,t*a,n+o*17),a*=2,r*=.5;return s}function ts(i,t,e={}){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),r=s.createImageData(i,i),a=r.data;for(let c=0;c<i;c++)for(let l=0;l<i;l++){let h=(c*i+l)*4,u=t(l/i,c/i,l,c);a[h]=u[0],a[h+1]=u[1],a[h+2]=u[2],a[h+3]=255}s.putImageData(r,0,0),e.after&&e.after(s,i);let o=new Gn(n);return o.wrapS=o.wrapT=Pn,o.anisotropy=e.aniso||4,e.srgb!==!1&&(o.colorSpace=Oe),o.needsUpdate=!0,o}var Zl=(i,t,e)=>[li(i[0],t[0],e),li(i[1],t[1],e),li(i[2],t[2],e)];function rf(i=512){let t={};t.sand=ts(i,(o,c)=>{let l=xn(o*24,c*24,5,1),h=xn(o*6+l*1.5,c*60,3,9),u=we(l*.7+h*.5,0,1);return Zl([112,86,58],[186,150,104],u)}),t.sandBump=ts(i,(o,c)=>{let l=xn(o*24,c*24,5,1),h=xn(o*6+l*1.5,c*60,3,9),u=we(l*.6+h*.7,0,1)*255;return[u,u,u]},{srgb:!1}),t.concrete=ts(i,(o,c,l,h)=>{let u=xn(o*18,c*18,5,3),d=xn(o*80,c*80,2,4),f=.35+u*.5+(d-.5)*.15,m=Math.abs(xn(o*7,c*7,3,12)-.5)<.012?.5:1;return f*=m,Zl([48,50,54],[128,126,120],we(f,0,1))}),t.concreteBump=ts(i,(o,c)=>{let l=xn(o*18,c*18,5,3)*255;return[l,l,l]},{srgb:!1}),t.rust=ts(i,(o,c)=>{let l=xn(o*10,c*10,5,5),h=xn(o*3,c*40,3,7),u=we((l-.42)*3.2+(h-.5)*.8,0,1),d=.62+(xn(o*60,c*60,2,2)-.5)*.25;return Zl([d*255,d*255,d*255],[150,70,28],u*.85)}),t.rustRough=ts(i,(o,c)=>{let l=xn(o*10,c*10,5,5),h=xn(o*3,c*40,3,7);return[0,(.45+we((l-.42)*3.2+(h-.5)*.8,0,1)*.5)*255,0]},{srgb:!1}),t.corr=ts(256,(o,c)=>{let l=(Math.sin(o*Xe*16)*.5+.5)*255;return[l,l,l]},{srgb:!1}),t.corr.repeat.set(1,1),t.wood=ts(256,(o,c)=>{let l=xn(o*4,c*60,4,21),h=xn(o*12,c*12,2,4);return Zl([66,42,24],[150,108,66],we(l*.9+h*.2,0,1))});let e=document.createElement("canvas");e.width=e.height=64;let n=e.getContext("2d"),s=n.createRadialGradient(32,32,0,32,32,32);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.25,"rgba(255,255,255,.55)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,64,64),t.glow=new Gn(e),t.glow.colorSpace=Oe;let r=document.createElement("canvas");r.width=1024,r.height=256;let a=r.getContext("2d");return a.fillStyle="#05070b",a.fillRect(0,0,1024,256),a.textAlign="center",a.textBaseline="middle",a.font="900 150px system-ui, Arial Black, sans-serif",a.shadowColor="#18ffb0",a.shadowBlur=40,a.fillStyle="#c8fff0",a.fillText("VW FEST",512,120),a.shadowBlur=20,a.font="700 46px system-ui, Arial, sans-serif",a.fillStyle="#ffb347",a.shadowColor="#ff7a00",a.fillText("AIR-COOLED SALVAGE  \xB7  $VWFEST",512,222),t.sign=new Gn(r),t.sign.colorSpace=Oe,t.sign.anisotropy=4,t}function of(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Le,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=af(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);let m=af(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function af(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new We(a,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let v=h.getComponent(d,m);o.setComponent(d+u,m,v)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Jl=class{constructor(t){this.T=t,this.cache={};let e=n=>new Ee(n);this.sand=e({map:t.sand,bumpMap:t.sandBump,bumpScale:3,roughness:.97,metalness:0,color:13615792}),t.sand.repeat.set(90,90),t.sandBump.repeat.set(90,90),this.concrete=e({map:t.concrete,bumpMap:t.concreteBump,bumpScale:1.5,roughness:.88,metalness:.02}),t.concrete.repeat.set(10,10),t.concreteBump.repeat.set(10,10),this.fence=e({color:9281190,map:t.rust,roughnessMap:t.rustRough,bumpMap:t.corr,bumpScale:2.5,metalness:.75,roughness:1}),this.fenceDark=e({color:3818056,map:t.rust,roughnessMap:t.rustRough,metalness:.7,roughness:1}),this.wood=e({color:16777215,map:t.wood,roughness:.85,metalness:0}),this.tire=e({color:1381655,roughness:.92,metalness:0}),this.glass=e({color:660761,roughness:.08,metalness:.95}),this.chrome=e({color:13620954,roughness:.18,metalness:1}),this.lampBulb=new Pe({color:new pt(5,3.2,1.4),toneMapped:!1}),this.lampBulbT=new Pe({color:new pt(1.2,4.5,3.4),toneMapped:!1}),this.headlight=e({color:15328456,emissive:4867120,emissiveIntensity:.6,roughness:.2,metalness:.2}),this.tarp=e({color:4151882,roughness:.95})}paint(t){let e="p"+t;return this.cache[e]||(this.cache[e]=new Ee({color:t,map:this.T.rust,roughnessMap:this.T.rustRough,metalness:.55,roughness:1}))}flat(t,e=.8,n=.1){let s="f"+t+e+n;return this.cache[s]||(this.cache[s]=new Ee({color:t,roughness:e,metalness:n}))}},E_=[6010272,14733722,14252330,11680302,6197184,13619140,9087050,13803834],kh=()=>wn(E_),Ts=(i,t,e,n,s,r,a,o,c=14,l=9)=>{let h=new At(new Ei(i,c,l),o);return h.scale.set(t,e,n),h.position.set(s,r,a),h},Ze=(i,t,e,n,s,r,a)=>{let o=new At(new ee(i,t,e),a);return o.position.set(n,s,r),o},Ai=(i,t,e,n,s,r,a=!0,o=12)=>{let c=new At(new pn(i,i,t,o),r);return a&&(c.rotation.z=Math.PI/2),c.position.set(e,n,s),c};function lf(i,t,e,n,s=.34){let r=new Yt;return r.add(Ai(s,.22,0,0,0,i.tire,!0,14)),r.add(Ai(s*.55,.24,0,0,0,i.chrome,!0,8)),r.position.set(t,e,n),r}function Ri(i,t,e={}){let n=new Yt,s=i.paint(t);n.add(Ts(1,.9,.5,1.95,0,.78,0,s,18,10)),n.add(Ts(1,.72,.42,.95,0,1.17,.12,i.glass,16,8)),n.add(Ts(1,.74,.28,.95,0,1.42,.12,s,16,8));for(let r of[-1,1])for(let a of[-1,1])n.add(Ts(1,.22,.32,.55,r*.86,.5,a*1.2,s,10,8)),e.missing&&r===1&&a===1||n.add(lf(i,r*.84,.34,a*1.2));for(let r of[-1,1])n.add(Ts(.12,1,1,1,r*.55,.92,-1.78,i.headlight,8,6));if(n.add(Ze(1.5,.08,.1,0,.44,-2.02,i.chrome)),n.add(Ze(1.5,.08,.1,0,.44,2.02,i.chrome)),n.add(Ze(.5,.1,.05,0,.78,1.92,i.fenceDark)),e.door){let r=Ze(.05,.5,1,.92,.9,-.2,s);r.rotation.y=.9,r.position.x=1.25,r.position.z=-.85,n.add(r)}return e.tilt&&(n.rotation.z=e.tilt),n.userData.size=[1.9,1.7,4.1],n}function Es(i,t,e=15129792,n={}){let s=new Yt,r=i.paint(t),a=i.paint(e);s.add(Ze(2,.85,4.5,0,.78,0,r)),s.add(Ze(1.96,.9,4.4,0,1.66,0,a)),s.add(Ze(2.04,.1,4.55,0,1.19,0,r)),s.add(Ze(2,.08,4.5,0,2.15,0,r));for(let h of[-1,1])s.add(Ze(.03,.55,3.8,h*.99,1.7,.1,i.glass)),s.add(Ze(.03,.14,.7,h*1.01,.82,.8,i.fenceDark));s.add(Ze(1.7,.6,.04,0,1.68,-2.2,i.glass));let o=Ze(1.1,.8,.1,-.5,.78,-2.28,r);o.rotation.y=.3;let c=Ze(1.1,.8,.1,.5,.78,-2.28,r);c.rotation.y=-.3,s.add(o,c);let l=Ai(.17,.04,0,.85,-2.43,i.chrome,!1,14);l.rotation.x=Math.PI/2,s.add(l);for(let h of[-1,1]){s.add(Ts(.13,1,1,.6,h*.72,.8,-2.36,i.headlight,8,6));for(let u of[-1.4,1.5])n.missing&&h===1&&u===1.5||s.add(lf(i,h*.95,.38,u,.38))}return s.add(Ze(2.1,.1,.12,0,.45,-2.45,i.chrome)),s.add(Ze(2.1,.1,.12,0,.45,2.3,i.chrome)),n.tilt&&(s.rotation.z=n.tilt),s.userData.size=[2.1,2.2,4.6],s}function Vh(i,t=4){let e=new Yt;for(let n=0;n<t;n++){let s=new At(new $r(.4,.18,8,14),i.tire);s.rotation.x=Math.PI/2,s.position.set($(-.04,.04),.18+n*.3,$(-.04,.04)),e.add(s)}return e.userData.size=[1,.3*t+.1,1],e}function Hh(i,t){let e=new Yt;e.add(Ai(.3,.9,0,.45,0,i.paint(t),!1,12));for(let n of[.2,.7])e.add(Ai(.31,.04,0,n,0,i.fenceDark,!1,12));return e.userData.size=[.62,.9,.62],e}function es(i,t=1){let e=new Yt;e.add(Ze(t,t,t,0,t/2,0,i.wood));for(let[n,s]of[[-1,-1],[1,-1],[-1,1],[1,1]])e.add(Ze(.07,t*1.02,.07,n*t/2,t/2,s*t/2,i.fenceDark));return e.userData.size=[t,t,t],e}function cf(i,t){let e=new Yt;e.add(Ai(.09,5.2,0,2.6,0,i.fenceDark,!1,8)),e.add(Ze(.12,.12,1.1,0,5.15,-.5,i.fenceDark)),e.add(Ze(.5,.12,.3,0,5.08,-1.1,i.fenceDark));let n=new At(new Ei(.17,8,6),t?i.lampBulbT:i.lampBulb);return n.position.set(0,4.98,-1.1),n.userData.bulb=!0,e.add(n),e.userData.size=[.4,5.2,.4],e.userData.bulbPos=new I(0,4.9,-1.1),e}function hf(i){let t=new Yt,e=i.flat(3103288,.9,0),n=$(1.6,3.2);if(t.add(Ai(.22,n,0,n/2,0,e,!1,8)),t.add(Ts(.22,1,1,1,0,n,0,e,8,5)),Math.random()<.8){let s=Ai(.13,.7,.4,n*.6,0,e,!1,6);t.add(s),t.add(Ai(.13,.5,.4+.32,n*.6+.3,0,e,!1,6)),t.children[t.children.length-1].rotation.z=0}return t}function uf(i,t){let e=new At(new Yr(t,0),i.flat(7035464,.95,0));e.scale.set($(.9,1.5),$(.5,.9),$(.9,1.4)),e.rotation.set($(3),$(3),$(3)),e.position.y=t*.3;let n=new Yt;return n.add(e),n}var Ue={pistol:{id:"pistol",name:"Dustdevil .45",dmg:30,rpm:380,auto:!1,mag:12,reserve:60,reload:1.25,spread:.004,pellets:1,kick:.01,shake:.12,price:0,head:3.2,snd:"pistol",range:90},smg:{id:"smg",name:"Rattler SMG",dmg:22,rpm:820,auto:!0,mag:32,reserve:160,reload:1.6,spread:.014,pellets:1,kick:.006,shake:.08,price:600,head:2.4,snd:"smg",range:80},shotgun:{id:"shotgun",name:"Sidewinder 12g",dmg:17,rpm:78,auto:!1,mag:6,reserve:42,reload:.5,perShell:!0,spread:.055,pellets:9,kick:.04,shake:.4,price:1200,head:2,snd:"shotgun",range:30},rifle:{id:"rifle",name:"Ridgeback AR",dmg:42,rpm:620,auto:!0,mag:30,reserve:150,reload:1.9,spread:.007,pellets:1,kick:.013,shake:.18,price:1800,head:2.6,snd:"rifle",range:120},lmg:{id:"lmg",name:"Hog Hammer LMG",dmg:40,rpm:700,auto:!0,mag:100,reserve:300,reload:3.8,spread:.012,pellets:1,kick:.012,shake:.2,price:0,crateOnly:!0,head:2.4,snd:"lmg",range:110}},Ea=["smg","shotgun","rifle","lmg"],Pi=new Ee({color:2895669,metalness:.9,roughness:.34}),yn=new Ee({color:5593439,metalness:.85,roughness:.28}),Ci=new Ee({color:4072982,metalness:0,roughness:.55}),Ta=new Ee({color:1626528,metalness:.4,roughness:.3,emissive:678469,emissiveIntensity:.8}),IS=new Ee({color:12946539,roughness:.7}),df=new Ee({color:4016698,roughness:.9}),ff=new Ee({color:1776928,roughness:.8});function ae(i,t,e,n,s,r,a,o=Pi,c=0){let l=new At(new ee(t,e,n),o);return l.position.set(s,r,a),l.rotation.x=c,i.add(l),l}function ci(i,t,e,n,s,r,a=Pi,o){let c=new At(new pn(o??t,t,e,10),a);return c.rotation.x=Math.PI/2,c.position.set(n,s,r),i.add(c),c}function wa(i,t=!0){let e=new Yt,n=-.3,s=-.05,r=[.2,-.2,-.42];if(i==="pistol")ae(e,.045,.06,.24,0,0,-.1,Pi),ae(e,.047,.014,.2,0,.035,-.1,yn),ae(e,.04,.11,.055,0,-.085,0,Ci,.25),ci(e,.009,.05,0,0,-.245,yn),ae(e,.006,.014,.01,0,.048,-.2,Ta),n=-.27,s=-.12,r=[.17,-.17,-.38];else if(i==="smg")ae(e,.06,.08,.32,0,0,-.1),ae(e,.05,.02,.2,0,.05,-.1,yn),ci(e,.013,.2,0,.015,-.36,yn),ae(e,.04,.16,.05,0,-.12,-.04,yn,.1),ae(e,.04,.1,.05,0,-.08,.06,Ci,.3),ae(e,.05,.06,.18,0,-.01,.2,Pi),ae(e,.012,.03,.012,0,.07,-.27,yn),ae(e,.062,.012,.1,0,0,-.1,Ta),n=-.47,s=-.05;else if(i==="shotgun")ae(e,.06,.08,.28,0,0,-.05),ci(e,.016,.62,0,.02,-.46,yn),ci(e,.02,.3,0,-.025,-.38,Pi),ae(e,.075,.06,.16,0,-.03,-.38,Ci),ae(e,.05,.1,.3,0,-.03,.22,Ci,-.12),ae(e,.04,.08,.05,0,-.07,.04,Ci,.3),ae(e,.01,.02,.01,0,.05,-.77,Ta),n=-.78,s=-.04,r=[.2,-.2,-.4];else if(i==="rifle"){ae(e,.06,.09,.42,0,0,-.05),ae(e,.05,.03,.34,0,.06,-.1,yn),ci(e,.014,.4,0,.015,-.46,yn),ci(e,.024,.22,0,.015,-.34,Pi),ae(e,.04,.15,.06,0,-.12,-.02,yn,.2),ae(e,.04,.09,.05,0,-.08,.12,Ci,.3),ae(e,.05,.1,.26,0,-.02,.32,Ci,-.08),ci(e,.022,.12,0,.1,-.08,Pi);let f=ci(e,.019,.005,0,.1,-.145,Ta);ae(e,.02,.04,.03,0,.075,-.08,Pi),n=-.7,s=-.02,r=[.2,-.2,-.4]}else ae(e,.08,.11,.46,0,0,-.05),ae(e,.1,.12,.18,0,-.13,-.02,yn),ae(e,.07,.03,.4,0,.075,-.1,yn),ci(e,.034,.34,0,0,-.46,Pi),ci(e,.014,.18,0,0,-.72,yn),ae(e,.04,.1,.06,0,-.1,.12,Ci,.3),ae(e,.06,.12,.28,0,-.01,.34,Ci,-.06),ae(e,.012,.02,.012,0,.1,-.8,Ta),ae(e,.012,.15,.012,-.03,-.1,-.72,yn,0),n=-.84,s=-.02,r=[.2,-.22,-.44];if(!t){let f=new Ce;return e.userData={muzzle:f,eject:f,base:new I},e}let a=ae(e,.055,.075,.09,0,-.1,.03,ff),o=ae(e,.07,.07,.3,.02,-.14,.2,df,-.25),c=i==="pistol"?-.04:i==="shotgun"?-.4:-.3,l=ae(e,.06,.06,.1,i==="pistol"?-.02:-.03,i==="pistol"?-.08:-.06,c,ff),h=ae(e,.07,.07,.34,-.1,-.14,c+.22,df,-.1);h.rotation.y=.35,e.traverse(f=>{f.isMesh&&(f.castShadow=!1)});let u=new Ce;u.position.set(0,.015,n),e.add(u);let d=new Ce;return d.position.set(.04,.03,s),e.add(d),e.userData={muzzle:u,eject:d,base:new I(...r)},e.userData.base.z-=.1,e.userData.base.x-=.03,e.position.copy(e.userData.base),e.scale.setScalar(.9),e}var hi=-24,Kl=i=>i>hi?"A":"B";function pf(i,t="#18d1a0",e=512,n=256){let s=document.createElement("canvas");s.width=e,s.height=n;let r=s.getContext("2d");r.fillStyle="rgba(8,12,16,0.82)",r.fillRect(0,0,e,n),r.strokeStyle=t,r.lineWidth=6,r.strokeRect(8,8,e-16,n-16),r.textAlign="center",r.textBaseline="middle",i.forEach((o,c)=>{r.font=`${o.w||700} ${o.s}px system-ui, "Segoe UI", Arial, sans-serif`,r.fillStyle=o.c||"#fff",r.fillText(o.t,e/2,o.y)});let a=new Gn(s);return a.colorSpace=Oe,a.anisotropy=4,a}var $l=class{constructor(t,e,n){this.scene=t,this.T=e,this.M=new Jl(e),this.tier=n,this.colliders=[],this.windows=[],this.buys=[],this.lamps=[],this.dyn=[],this.fall=[],this.staticGroup=new Yt,this.root=new Yt,t.add(this.root),this.build(),this.batch()}addCol(t,e,n,s,r=3,a={}){let o={x0:t,x1:e,z0:n,z1:s,y0:a.y0||0,y1:r,...a};return this.colliders.push(o),o}box(t,e,n,s,r,a,o,c={}){let l=new At(new ee(t,e,n),o);return l.position.set(s,r,a),l.castShadow=c.cast!==!1,l.receiveShadow=!0,(c.dynamic?this.root:this.staticGroup).add(l),l}place(t,e,n,s=0,r=!0){if(t.position.x+=e,t.position.z+=n,t.rotation.y=s,t.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),this.staticGroup.add(t),r&&t.userData.size){let[a,o,c]=t.userData.size;Math.abs(Math.sin(s))>.7&&([a,c]=[c,a]),this.addCol(e-a/2+.05,e+a/2-.05,n-c/2+.05,n+c/2-.05,o)}return t}build(){let{M:t,T:e,scene:n}=this;this.buildSky(),this.buildGround();let s=3.2,r=.4,a=(h,u,d,f=[],m=t.fence)=>this.wall("x",h,u,d,f,s,r,m),o=(h,u,d,f=[],m=t.fence)=>this.wall("z",h,u,d,f,s,r,m);a(24,-24,24,[{c:-10,id:"S1"},{c:11,id:"S2"}]),o(24,-24,24,[{c:-4,id:"E1",area:"A"}]),o(-24,-24,24,[{c:6,id:"W1",area:"A"}]),a(-24,-24,24,[{c:0,id:"DOOR",door:!0,w:6}]),o(24,-52,-24,[{c:-40,id:"E2",area:"B"}]),o(-24,-52,-24,[{c:-38,id:"W2",area:"B"}]),a(-52,-24,24,[{c:0,id:"N1",area:"B"}]);let c=(h,u,d,f)=>{let m=new At(new Dn(h,u),t.concrete);m.rotation.x=-Math.PI/2,m.position.set(d,.015,f),m.receiveShadow=!0,this.staticGroup.add(m)};c(48,48,0,0),c(48,28,0,-38),this.buildGate();let l=this.place.bind(this);l(Ri(t,6010272,{door:!0}),-9,-9,.2*0),l(Ri(t,14252330,{missing:!0,tilt:.04}),13,-10,Math.PI/2),l(Es(t,6197184),9,11,Math.PI/2),l(Es(t,14252330,15129792,{missing:!0}),-15,1,0),l(Ri(t,14733722),-4,16,Math.PI/2+0),l(Ri(t,11680302,{tilt:-.05}),19,16,0),l(Es(t,9087050,15129792),3,-14,Math.PI/2);for(let[h,u,d]of[[17,2,5],[-20,-5,4],[-3,-4,3],[-19,19,6],[21,-20,4]])l(Vh(t,d),h,u);for(let[h,u,d]of[[5,19,3829413],[6.2,19.8,11680302],[4.4,20.6,9087050],[-1,-19,14252330],[.2,-20,3829413]])l(Hh(t,d),h,u);l(es(t,1.1),-21,12),l(es(t,.9),-20.8,13.2),l(es(t,1.3),21,9),l(es(t,1),20.4,10.4),this.shack(18,-17,6,5),l(Ri(t,13619140,{missing:!0}),-12,-36,Math.PI/2),l(Ri(t,6010272,{tilt:.05}),14,-46,.3*0),l(Es(t,11680302,15129792),6,-35,0),l(Es(t,6010272,15129792,{tilt:.04}),-10,-47,Math.PI/2),l(Ri(t,13803834,{door:!0}),0,-43,Math.PI/2);for(let[h,u,d]of[[18,-30,5],[-20,-29,3],[19,-36,4],[-3,-30,4]])l(Vh(t,d),h,u);for(let[h,u,d]of[[-19,-49,14252330],[-18,-50,3829413],[20,-50,11680302]])l(Hh(t,d),h,u);l(es(t,1.2),21,-46),l(es(t,1),-21,-42),l(es(t,.9),20.6,-47.4);for(let[h,u,d,f]of[[-11,11,0,.6],[14,5,0,2.6],[-13,-12,1,-.5],[10,-19,0,3.4],[-8,-30,0,.3],[11,-40,1,3],[-4,-49,0,1.4]]){let m=cf(this.M,!!d);m.position.set(h,0,u),m.rotation.y=f,m.traverse(g=>{g.isMesh&&(g.castShadow=!g.userData.bulb)}),m.updateMatrixWorld(!0),this.addCol(h-.2,h+.2,u-.2,u+.2,5);let v=m.userData.bulbPos.clone().applyMatrix4(m.matrixWorld);this.lamps.push({pos:v,teal:!!d,ph:$(100)}),this.staticGroup.add(m)}this.wallBuy("smg",-14,hi+.25,0),this.wallBuy("shotgun",23.75,-15,-Math.PI/2),this.wallBuy("rifle",-23.75,-30,Math.PI/2),this.buildCrate(-17.5,14.5),this.scenery(),this.buildLights()}wall(t,e,n,s,r,a,o,c){let{M:l}=this,h=m=>m.w||3.2,u=[...r].sort((m,v)=>m.c-v.c),d=n,f=(m,v)=>{if(v-m<.05)return;let g=v-m,p=(m+v)/2,b=Math.max(1,Math.ceil(g/8));for(let A=0;A<b;A++){let y=m+g*A/b,S=m+g*(A+1)/b;this.wseg(t,e,y,S,a,o,c)}};for(let m of u)f(d,m.c-h(m)/2),this.opening(t,e,m,a,o,c),d=m.c+h(m)/2;f(d,s)}wseg(t,e,n,s,r,a,o){let c=s-n,l=(n+s)/2;t==="x"?(this.box(c,r,a,l,r/2,e,o),this.addCol(n,s,e-a/2,e+a/2,r),this.box(.35,r+.5,.55,n,(r+.5)/2,e,this.M.fenceDark),this.box(c,.1,.12,l,r+.4,e,this.M.fenceDark)):(this.box(a,r,c,e,r/2,l,o),this.addCol(e-a/2,e+a/2,n,s,r),this.box(.55,r+.5,.35,e,(r+.5)/2,n,this.M.fenceDark),this.box(.12,.1,c,e,r+.4,l,this.M.fenceDark))}opening(t,e,n,s,r,a){let{M:o}=this,c=n.w||3.2;if(n.door){t==="x"&&(this.box(.5,s+.8,.7,n.c-c/2,(s+.8)/2,e,o.fenceDark),this.box(.5,s+.8,.7,n.c+c/2,(s+.8)/2,e,o.fenceDark)),this.doorInfo={c:n.c,z:e,w:c};return}let l=t==="x"?{x:0,z:e>0?1:-1}:{x:e>0?1:-1,z:0};t==="x"&&e===-52&&(l.z=-1);let h=t==="x"?n.c:e,u=t==="x"?e:n.c,d=.95,f=2.5,m=c,v=(D,L,z)=>t==="x"?[D,L,r]:[r,L,D],[g,p,b]=v(m,d,0);this.box(g,p,b,h,d/2,u,a);let[A,y,S]=v(m,s-f,0);this.box(A,y,S,h,(s+f)/2,u,a);let T=o.wood;for(let D of[-1,1]){let[L,z,N]=v(.2,f-d,0);this.box(t==="x"?.2:r+.12,f-d,t==="x"?r+.12:.2,t==="x"?h+D*(m/2-.1):h,(d+f)/2,t==="x"?u:u+D*(m/2-.1),T)}this.addCol(t==="x"?h-m/2:h-r/2,t==="x"?h+m/2:h+r/2,t==="x"?u-r/2:u-m/2,t==="x"?u+r/2:u+m/2,d,{bulletOnly:!1}),this.addCol(t==="x"?h-m/2:h-r/2,t==="x"?h+m/2:h+r/2,t==="x"?u-r/2:u-m/2,t==="x"?u+r/2:u+m/2,s,{y0:f,bulletOnly:!0}),this.addCol(t==="x"?h-m/2:h-r/2,t==="x"?h+m/2:h+r/2,t==="x"?u-r/2-.02:u-m/2,t==="x"?u+r/2+.02:u+m/2,s,{noBullet:!0});let C=[],_=Math.atan2(l.x,l.z);for(let D=0;D<6;D++){let L=new At(new ee(m-.15,.2,.07),o.wood),z=new I(h+l.x*.23,d+.16+D*.255,u+l.z*.23);L.position.copy(z),L.rotation.set(0,_,$(-.05,.05)),L.castShadow=!0,L.receiveShadow=!0,L.userData={home:z,rotZ:L.rotation.z,ry:_},this.root.add(L),C.push(L)}this.windows.push({id:n.id,area:n.area||(e>hi&&t==="x"||e>0,"A"),c:new I(h,0,u),n:l,t:{x:-l.z,z:l.x},out:{x:h+l.x*1.5,z:u+l.z*1.5},in:{x:h-l.x*1.6,z:u-l.z*1.6},planks:C,count:6,attackers:0,cool:0,axis:t});let E=this.windows[this.windows.length-1];E.area=Kl(u);let P=new At(new ee(t==="x"?.3:.06,.06,t==="x"?.06:.3),new Pe({color:new pt(1.8,.3,.15),toneMapped:!1}));P.position.set(h-l.x*.3,2.85,u-l.z*.3),this.staticGroup.add(P)}removePlank(t){if(t.count<=0)return!1;let e=t.planks[t.count-1];return t.count--,e.userData.fall={vx:t.n.x*$(1,3)+$(-1,1),vy:$(1,3),vz:t.n.z*$(1,3)+$(-1,1),t:0,rx:$(-6,6),rz:$(-6,6)},this.fall.push(e),!0}addPlank(t){if(t.count>=6)return!1;let e=t.planks[t.count];t.count++,e.userData.fall=null;let n=this.fall.indexOf(e);return n>=0&&this.fall.splice(n,1),e.visible=!0,e.position.copy(e.userData.home),e.rotation.set(0,e.userData.ry,e.userData.rotZ),!0}buildGate(){let{M:t}=this,e=this.doorInfo,n=t.fence,s=new Yt,r=new At(new ee(e.w,3.4,.25),n);r.position.y=1.7,r.castShadow=r.receiveShadow=!0,s.add(r);for(let o=0;o<6;o++){let c=new At(new ee(.5,3.4,.05),o%2?new Ee({color:15251502,roughness:.6,metalness:.3}):t.fenceDark);c.position.set(-e.w/2+.3+o*1,1.7,.15),s.add(c)}s.position.set(e.c,0,e.z),this.root.add(s),this.door={mesh:s,open:!1,t:0,price:1250,col:this.addCol(e.c-e.w/2,e.c+e.w/2,e.z-.2,e.z+.2,3.4),pos:{x:e.c,z:e.z}};let a=new At(new Dn(7.5,1.9),new Pe({map:this.T.sign,color:new pt(1.9,1.9,1.9),toneMapped:!1}));a.position.set(e.c,5,e.z+.45),this.staticGroup.add(a);for(let o of[-1,1])this.box(.18,4.4,.18,e.c+o*3.5,2.5,e.z+.4,t.fenceDark);this.signPos=new I(e.c,5,e.z+1)}shack(t,e,n,s){let{M:r}=this;this.box(n,3,s,t,1.5,e,r.fence),this.box(n+.5,.2,s+.5,t,3.1,e,r.fenceDark),this.addCol(t-n/2,t+n/2,e-s/2,e+s/2,3.2),this.box(1.4,2.1,.1,t-1.2,1.05,e+s/2+.05,r.wood,{cast:!1});let a=new At(new Dn(1.4,.9),new Pe({color:new pt(2.6,1.7,.7),toneMapped:!1}));a.position.set(t+1.5,1.8,e+s/2+.03),this.staticGroup.add(a)}wallBuy(t,e,n,s){let r=Ue[t],a=new Yt;a.position.set(e,1.7,n),a.rotation.y=s;let o=new At(new Dn(2.4,1.2),new Pe({map:pf([{t:r.name.toUpperCase(),s:44,y:88,w:800},{t:"$"+r.price+"  \xB7  AMMO $"+Math.floor(r.price/2),s:36,y:168,c:"#ffd36b"}]),toneMapped:!1,color:new pt(.9,.9,.9)}));o.position.set(0,-.35,.04);let c=wa(t,!1);c.position.set(0,.35,.18),c.rotation.y=Math.PI/2,c.scale.setScalar(1.7),c.userData.base=null;let l=new At(new ee(2.6,2.2,.08),this.M.fenceDark);l.position.set(0,.05,0),a.add(l,o,c),a.traverse(d=>{d.isMesh&&(d.castShadow=!1)}),this.root.add(a);let h=Math.sin(s),u=Math.cos(s);this.buys.push({id:t,price:r.price,pos:{x:e+h*.9,z:n+u*.9},name:r.name})}buildCrate(t,e){let{M:n}=this,s=new Yt;s.position.set(t,0,e),s.rotation.y=.5;let r=n.paint(2078874),a=new At(new ee(1.3,.7,.8),r);a.position.y=.35,s.add(a);let o=new Yt;o.position.set(0,.7,-.4);let c=new At(new ee(1.3,.2,.8),r);c.position.set(0,.1,.4),o.add(c),s.add(o);for(let f of[-.45,.45]){let m=new At(new ee(.1,.92,.84),n.fenceDark);m.position.set(f,.46,0),s.add(m)}let l=new At(new ee(.4,.06,.06),n.chrome);l.position.set(0,.8,.43),s.add(l);let h=new At(new Dn(.8,.4),new Pe({map:pf([{t:"LUCKY",s:70,y:70,w:900,c:"#18ffb0"},{t:"TOOLBOX",s:62,y:150,w:900,c:"#fff"},{t:"950",s:52,y:215,c:"#ffd36b"}],"#18ffb0",384,256),toneMapped:!1,color:new pt(.9,.9,.9)}));h.position.set(0,.38,.41),s.add(h),s.traverse(f=>{f.isMesh&&!f.material.isMeshBasicMaterial&&(f.castShadow=!0,f.receiveShadow=!0)});let u=new At(new pn(.5,.65,9,16,1,!0),new ie({transparent:!0,depthWrite:!1,blending:nn,side:mn,uniforms:{c:{value:new pt(.1,1,.7)},k:{value:.35}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(1.-vy,2.2)*pow(f,2.5)*k); }"}));u.position.set(0,4.5,0),u.userData.noAO=!0,s.add(u),this.root.add(s),this.addCol(t-.8,t+.8,e-.8,e+.8,1);let d=new Yt;d.position.set(0,1.5,.1),s.add(d),this.crate={group:s,lid:o,hold:d,beam:u,pos:{x:t,z:e},price:950,state:"idle",t:0,weapon:null,shown:null,model:null,x:t,z:e}}buildSky(){let t=new ie({side:en,depthWrite:!1,fog:!1,uniforms:{moonDir:{value:new I(-.55,.6,.58).normalize()}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vP; uniform vec3 moonDir;
        float h(vec3 p){ return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ vec3 d=normalize(vP); float y=clamp(d.y,-.2,1.);
          vec3 hor=vec3(.20,.12,.16), mid=vec3(.025,.045,.10), top=vec3(.004,.008,.03);
          vec3 c=mix(hor,mid,smoothstep(0.,.25,y)); c=mix(c,top,smoothstep(.2,.9,y)); c+=vec3(.5,.18,.1)*pow(max(0.,1.-abs(y)*4.),3.)*.35;
          vec3 g=floor(d*220.); float s=step(.9975,h(g))*smoothstep(.05,.3,y); c+=vec3(.9,.95,1.)*s*(.4+.4*h(g+3.))*0.8;
          float md=dot(d,moonDir); c+=vec3(.75,.85,1.)*smoothstep(.9992,.9996,md)*2.5; c+=vec3(.25,.35,.6)*pow(max(0.,md),60.)*.5+vec3(.1,.15,.3)*pow(max(0.,md),8.)*.25;
          gl_FragColor=vec4(c,1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.sky=new At(new Ei(500,32,16),t),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.sky.userData.noAO=!0,this.scene.add(this.sky),this.moonDir=t.uniforms.moonDir.value}buildGround(){let t=new At(new Dn(1200,1200),this.M.sand);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,this.scene.add(t),this.ground=t}scenery(){let{M:t}=this,e=this.staticGroup,n=(a,o)=>a>-30&&a<30&&o>-58&&o<30,s=t.flat(6967864,1,0);for(let a=0;a<26;a++){let o=$(Xe),c=$(60,190),l=Math.cos(o)*c,h=-14+Math.sin(o)*c,u=$(14,38),d=new At(new Ei(1,12,6),s);d.scale.set(u*$(1.2,2),u*$(.12,.28),u*$(1,1.6)),d.position.set(l,0,h),d.rotation.y=$(3),d.receiveShadow=!0,e.add(d)}let r=t.flat(2762292,1,0);for(let a=0;a<12;a++){let o=a/12*Xe+$(-.2,.2),c=$(230,330),l=$(30,70),h=$(25,60),u=new At(new pn(l*.55,l*.8,h,6),r);u.position.set(Math.cos(o)*c,h/2-2,-14+Math.sin(o)*c),u.rotation.y=$(3),e.add(u)}for(let a=0;a<38;a++){let o,c,l=0;do{let u=$(Xe),d=$(34,90);o=Math.cos(u)*d,c=-14+Math.sin(u)*d*.9}while(n(o,c)&&++l<20);let h=hf(t);h.position.set(o,0,c),h.rotation.y=$(3),h.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),e.add(h)}for(let a=0;a<40;a++){let o,c,l=0;do{let u=$(Xe),d=$(30,110);o=Math.cos(u)*d,c=-14+Math.sin(u)*d*.9}while(n(o,c)&&++l<20);let h=uf(t,$(.4,1.8));h.position.set(o,0,c),h.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),e.add(h)}for(let a=0;a<9;a++){let o=$(Xe),c=$(34,70),l=Math.cos(o)*c,h=-14+Math.sin(o)*c*.9;if(n(l,h))continue;let u=Math.random()<.35?Es(t,kh(),15129792,{tilt:$(-.08,.08)}):Ri(t,kh(),{tilt:$(-.1,.1),missing:Math.random()<.5});u.position.set(l,0,h),u.rotation.y=$(3),u.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0)}),e.add(u)}}buildLights(){let t=this.scene;this.hemi=new ms(7309e3,3812386,.85),t.add(this.hemi),this.moon=new gs(10335487,1.7),this.moon.castShadow=!0,this.moon.position.set(0,0,0),t.add(this.moon,this.moon.target);let e=this.moon.shadow;e.camera.left=e.camera.bottom=-34,e.camera.right=e.camera.top=34,e.camera.near=1,e.camera.far=140,e.bias=-4e-4,e.normalBias=.04,e.mapSize.set(2048,2048),this.lampPool=[];for(let s=0;s<7;s++){let r=new qi(16756838,95,30,1.7);t.add(r),this.lampPool.push(r)}this.halos=[],this.cones=[];let n=s=>new ie({transparent:!0,depthWrite:!1,blending:nn,side:mn,uniforms:{c:{value:s},k:{value:.22}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(vy,1.5)*pow(f,1.6)*k); }"});for(let s of this.lamps){let r=s.teal?new pt(.2,.9,.7):new pt(1,.62,.28),a=new bi(new ni({map:this.T.glow,color:s.teal?new pt(.5,3,2.4):new pt(3,1.8,.7),blending:nn,depthWrite:!1,transparent:!0,fog:!1}));a.scale.setScalar(3.4),a.position.copy(s.pos),a.userData.noAO=!0,this.scene.add(a),this.halos.push(a);let o=new At(new fs(4.2,5,24,1,!0),n(r));o.position.copy(s.pos).add(new I(0,-2.5,0)),o.userData.noAO=!0,this.scene.add(o),this.cones.push(o),s.light=r}}setTier(t){this.tier=t;let e=[3,5,7][t];this.lampPool.forEach((s,r)=>s.visible=r<e),this.cones.forEach(s=>s.visible=t>0),this.moon.castShadow=t>0;let n=t===2?2048:1024;this.moon.shadow.mapSize.x!==n&&(this.moon.shadow.mapSize.set(n,n),this.moon.shadow.map?.dispose(),this.moon.shadow.map=null)}batch(){let t=this.staticGroup;t.updateMatrixWorld(!0);let e=new Map,n=[];t.traverse(s=>{if(!s.isMesh)return;if(s.userData.bulb){n.push(s);return}let r=s.material.uuid+(s.castShadow?"c":"n")+(s.receiveShadow?"r":"n"),a=e.get(r);a||(a={mat:s.material,cast:s.castShadow,rec:s.receiveShadow,geos:[]},e.set(r,a));let o=s.geometry.clone();o.applyMatrix4(s.matrixWorld);for(let c of Object.keys(o.attributes))["position","normal","uv"].includes(c)||o.deleteAttribute(c);a.geos.push(o)});for(let s of e.values()){let r=of(s.geos,!1);if(!r){console.warn("merge failed");continue}let a=new At(r,s.mat);a.castShadow=s.cast,a.receiveShadow=s.rec,a.frustumCulled=!1,this.root.add(a),s.geos.forEach(o=>o.dispose())}for(let s of n){let r=new At(s.geometry,s.material);r.applyMatrix4(s.matrixWorld),r.matrixAutoUpdate=!0,r.position.setFromMatrixPosition(s.matrixWorld),r.rotation.set(0,0,0),r.scale.setScalar(1),this.root.add(r)}this.staticGroup=null}resolve(t,e,n=!1){let s=!1;for(let r of this.colliders){if(r.bulletOnly||r.off)continue;let a=we(t.x,r.x0,r.x1),o=we(t.z,r.z0,r.z1),c=t.x-a,l=t.z-o,h=c*c+l*l;if(!(h>=e*e))if(s=!0,h>1e-8){let u=Math.sqrt(h),d=(e-u)/u;t.x+=c*d,t.z+=l*d}else{let u=t.x-r.x0,d=r.x1-t.x,f=t.z-r.z0,m=r.z1-t.z,v=Math.min(u,d,f,m);v===u?t.x=r.x0-e:v===d?t.x=r.x1+e:v===f?t.z=r.z0-e:t.z=r.z1+e}}return s}ray(t,e,n){let s=n,r=null,a=null;if(e.y<-1e-5){let o=-t.y/e.y;o>0&&o<s&&(s=o,r={x:0,y:1,z:0},a="ground")}for(let o of this.colliders){if(o.noBullet||o.off)continue;let c=0,l=s,h=-1,u=0,d=(f,m,v,g,p)=>{if(Math.abs(m)<1e-9)return f>=v&&f<=g;let b=(v-f)/m,A=(g-f)/m,y=-1;if(b>A){let S=b;b=A,A=S,y=1}return b>c&&(c=b,h=p,u=y),A<l&&(l=A),c<=l};d(t.x,e.x,o.x0,o.x1,0)&&d(t.y,e.y,o.y0,o.y1,1)&&d(t.z,e.z,o.z0,o.z1,2)&&c>0&&c<s&&(s=c,r={x:h===0?u:0,y:h===1?u:0,z:h===2?u:0},a="wall")}return r?{t:s,n:r,kind:a}:null}update(t,e,n){for(let l=this.fall.length-1;l>=0;l--){let h=this.fall[l],u=h.userData.fall;if(!u){this.fall.splice(l,1);continue}u.t+=t,u.vy-=9.8*t,h.position.x+=u.vx*t,h.position.y+=u.vy*t,h.position.z+=u.vz*t,h.rotation.x+=u.rx*t,h.rotation.z+=u.rz*t,h.position.y<.08&&(h.position.y=.08,u.vy=0,u.vx*=.5,u.vz*=.5),u.t>1.4&&(h.visible=!1,this.fall.splice(l,1))}let s=this.door;s.open&&s.t<1&&(s.t=Math.min(1,s.t+t/2.4),s.mesh.position.y=s.t*3.6,s.t>.5&&(s.col.off=!0));let r=n.x,a=n.z,o=this.lamps.map((l,h)=>({i:h,d:(l.pos.x-r)**2+(l.pos.z-a)**2})).sort((l,h)=>l.d-h.d);this.lampPool.forEach((l,h)=>{let u=this.lamps[o[h].i];l.position.copy(u.pos),l.color.copy(u.teal?new pt(.35,1,.8):new pt(1,.7,.4));let d=.85+.15*Math.sin(e*9+u.ph)*Math.sin(e*3.7+u.ph*2)+(Math.sin(e*31+u.ph)>.97?-.5:0);l.intensity=95*Math.max(.2,d)}),this.halos.forEach((l,h)=>{let u=Math.hypot(this.lamps[h].pos.x-r,this.lamps[h].pos.z-a);l.visible=u<70});let c=this.crate;c.beam.material.uniforms.k.value=.22+.1*Math.sin(e*2),c.model&&(c.model.rotation.y+=t*2,c.model.position.y=Math.sin(e*3)*.04),this.moon.position.set(r+this.moonDir.x*60,this.moonDir.y*60,a+this.moonDir.z*60),this.moon.target.position.set(r,0,a),this.moon.target.updateMatrixWorld(),this.sky.position.set(r,0,a)}};var hn={torso:new ee(.52,.62,.3),hip:new ee(.46,.2,.28),leg:new ee(.2,.9,.22),arm:new ee(.15,.62,.16),head:new Zr(.27,1),eye:new ee(.07,.04,.03),jaw:new ee(.2,.08,.16),rag:new ee(.12,.28,.03),hand:new ee(.17,.14,.17)},mf=new Pe({color:new pt(1.7,.22,.1),toneMapped:!1}),gf=new Ee({color:7213080,roughness:.6}),R_=new Ee({color:1708564,roughness:1}),C_=[6191698,6980704,5798498,7439722,5206104],P_=[8007471,3099258,5921322,3816004,9071146,2068344,11687466],I_=[2764602,3813156,2106922,2898474],Gh=class{constructor(){this.root=new Yt,this.sk=new Ee({roughness:.75,emissive:0}),this.sh=new Ee({roughness:.95,emissive:0}),this.pa=new Ee({roughness:.95,emissive:0});let t=(a,o,c,l,h)=>{let u=new At(a,o);return u.position.set(c,l,h),u.castShadow=!0,u};this.pelvis=new Yt,this.pelvis.position.y=.95,this.root.add(this.pelvis),this.legL=new Yt,this.legL.position.set(-.13,0,0),this.legL.add(t(hn.leg,this.pa,0,-.45,0)),this.legR=new Yt,this.legR.position.set(.13,0,0),this.legR.add(t(hn.leg,this.pa,0,-.45,0)),this.pelvis.add(this.legL,this.legR,t(hn.hip,this.pa,0,0,0)),this.upper=new Yt,this.pelvis.add(this.upper),this.upper.add(t(hn.torso,this.sh,0,.36,0));let e=t(hn.rag,this.sh,.12,0,.15);e.rotation.z=.2;let n=t(hn.rag,this.sh,-.1,.02,-.15);n.rotation.z=-.15,this.upper.add(e,n);let s=t(hn.rag,gf,-.1,.45,.155);s.scale.set(1.6,1,1),s.rotation.z=.5;let r=t(hn.rag,gf,.14,.2,.156);r.scale.set(1,.7,1),this.upper.add(s,r),this.head=new Yt,this.head.position.set(0,.88,.03),this.head.add(t(hn.head,this.sk,0,0,0)),this.head.add(t(hn.eye,mf,-.1,.04,.24),t(hn.eye,mf,.1,.04,.24),t(hn.jaw,R_,0,-.14,.18)),this.head.scale.set(1.05,1.1,1),this.upper.add(this.head),this.armL=new Yt,this.armL.position.set(-.35,.58,0),this.armL.add(t(hn.arm,this.sk,0,-.28,0),t(hn.hand,this.sk,0,-.64,0)),this.armR=new Yt,this.armR.position.set(.35,.58,0),this.armR.add(t(hn.arm,this.sk,0,-.28,0),t(hn.hand,this.sk,0,-.64,0)),this.upper.add(this.armL,this.armR),this.root.visible=!1,this.state="dead",this.pos=this.root.position}},jl=class{constructor(t,e,n){this.world=e,this.scene=t,this.list=[],this.max=n>0?26:16;for(let s=0;s<this.max+4;s++){let r=new Gh;t.add(r.root),this.list.push(r)}this.alive=0,this.t=0,this.hooks={}}setTier(t){this.max=t>0?26:16}reset(){for(let t of this.list)t.state="dead",t.root.visible=!1;this.alive=0}stats(t){let e=t<10?80+35*t:430*Math.pow(1.1,t-9),n=Math.min(5,1.5+t*.24);return{hp:e,sp:n}}spawn(t,e,n=!1){let s=this.list.find(c=>c.state==="dead"&&!c.root.visible);if(!s)return null;let r=this.stats(e),a=e>=3&&Math.random()<Math.min(.55,(e-2)*.09);s.brute=n,s.scale=n?1.38:$(.94,1.06),s.root.scale.setScalar(s.scale),s.maxHp=s.hp=r.hp*(n?3.3:1),s.speed=r.sp*$(.82,1.12)*(a?1.45:1)*(n?.78:1),s.speed=Math.min(s.speed,6),s.runner=a,s.dmg=n?44:22,s.value=n?150:60,s.sk.color.setHex(n?10121050:wn(C_)),s.sh.color.setHex(wn(P_)),s.pa.color.setHex(wn(I_));for(let c of[s.sk,s.sh,s.pa])c.emissive.setHex(0);s.win=t,s.state="approach",s.slot=$(-1.2,1.2),s.phase=$(Xe),s.attackT=0,s.cool=0,s.stuck=0,s.stuckTot=0,s.side=1,s.flash=0,s.hitT=0,s.groanT=$(1,4),s.dieT=0,s.climbT=0,s.chk=0,s.chkX=0,s.chkZ=0,s.limp=Math.random()<.3;let o=$(4,9);return s.pos.set(t.out.x+t.n.x*o+t.t.x*$(-3,3),0,t.out.z+t.n.z*o+t.t.z*$(-3,3)),s.yaw=Math.atan2(-t.n.x,-t.n.z),s.root.rotation.set(0,s.yaw,0),s.root.visible=!0,s.pelvis.rotation.set(0,0,0),s.root.position.y=0,this.alive++,s}rayHit(t,e,n){let s=null;for(let r of this.list){if(r.state==="dead"||r.state==="dying")continue;let a=r.scale,o={x:r.pos.x,y:(r.climbY||0)+1.66*a,z:r.pos.z},c=.3*a,l=D_(t,e,o,c),h=null,u=t.x-r.pos.x,d=t.z-r.pos.z,f=e.x*e.x+e.z*e.z,m=.42*a;if(f>1e-8){let p=2*(u*e.x+d*e.z),b=u*u+d*d-m*m,A=p*p-4*f*b;if(A>=0){let y=Math.sqrt(A);for(let S of[(-p-y)/(2*f),(-p+y)/(2*f)])if(S>0){let T=t.y+e.y*S-(r.climbY||0);if(T>=0&&T<=1.45*a){h=S;break}}}}else u*u+d*d<m*m&&(h=.01);let v=null,g=!1;l!==null&&(h===null||l<=h+.15)?(v=l,g=!0):h!==null&&(v=h),v!==null&&v<n&&(!s||v<s.t)&&(s={z:r,t:v,head:g})}return s}damage(t,e,n,s,r){if(t.state==="dead"||t.state==="dying")return null;t.hp-=e,t.flash=.12,t.hitT=.15;let a=t.hp<=0;return a?(t.state="dying",t.dieT=0,this.alive--,t.dieDir=$(-.4,.4)):t.state==="attack"||t.state,{killed:a,head:n}}killAll(){let t=[];for(let e of this.list)e.state!=="dead"&&e.state!=="dying"&&(e.hp=0,e.state="dying",e.dieT=0,e.dieDir=$(-.4,.4),this.alive--,t.push(e));return t}update(t,e,n,s,r){let a=this.world;this.t=e;for(let c of a.windows)c.cool>0&&(c.cool-=t);let o=Kl(n.z);for(let c=0;c<this.list.length;c++){let l=this.list[c];if(l.state==="dead")continue;let h=l.scale;if(l.flash>0){l.flash-=t;let S=Math.max(0,l.flash/.12);for(let T of[l.sk,l.sh,l.pa])T.emissive.setRGB(.9*S,.08*S,.05*S)}if(l.state==="dying"){l.dieT+=t;let S=Math.min(1,l.dieT/.55);l.pelvis.rotation.x=-S*1.5*(1-.1),l.pelvis.rotation.z=l.dieDir*S,l.pelvis.position.y=.95-S*.55,l.armL.rotation.x=-1.4+S*2.2,l.armR.rotation.x=-1.4+S*2.2,l.dieT>2.2&&(l.root.position.y=-(l.dieT-2.2)*.9),l.dieT>3.2&&(l.state="dead",l.root.visible=!1,l.root.position.y=0,l.pelvis.position.y=.95,l.pelvis.rotation.set(0,0,0));continue}if(l.groanT-=t,l.groanT<=0){l.groanT=$(2.5,6);let S=l.pos.x-n.x,T=l.pos.z-n.z,C=Math.hypot(S,T);C<40&&r.groan?.(l,C)}let u=0,d=0,f=0,m=-1.3,v=n.x,g=n.z;if(l.state==="approach"){let S=l.win,T=S.out.x+S.t.x*l.slot*.8,C=S.out.z+S.t.z*l.slot*.8,_=T-l.pos.x,E=C-l.pos.z,P=Math.hypot(_,E);P<.25?(l.state=S.count>0?"attack":"climb",l.climbT=0,l.cool=$(.6,1.6)):(u=_/P,d=E/P,f=l.speed,l.pos.x+=u*f*t,l.pos.z+=d*f*t,l.yaw=Aa(l.yaw,Math.atan2(u,d),Math.min(1,t*8)))}else if(l.state==="attack"){let S=l.win;l.yaw=Aa(l.yaw,Math.atan2(-S.n.x,-S.n.z),Math.min(1,t*8)),l.cool-=t,S.count<=0?(l.state="climb",l.climbT=0):(l.attackT+=t,m=-1.2+Math.sin(l.attackT*7)*.7,l.cool<=0&&S.count>0&&(l.cool=$(1.2,2),S.cool<=0&&a.removePlank(S)&&(S.cool=$(2.2,3.2),r.plank?.(S,!0))))}else if(l.state==="climb"){let S=l.win;l.climbT+=t/1.25;let T=Math.min(1,l.climbT),C=S.out.x+S.t.x*l.slot*.8,_=S.out.z+S.t.z*l.slot*.8,E=S.in.x+S.t.x*l.slot*.5,P=S.in.z+S.t.z*l.slot*.5;l.pos.x=C+(E-C)*T,l.pos.z=_+(P-_)*T,l.climbY=Math.sin(T*Math.PI)*.75,l.root.position.y=l.climbY,l.yaw=Aa(l.yaw,Math.atan2(-S.n.x,-S.n.z),Math.min(1,t*8)),m=-1.6,f=1.5,T>=1&&(l.state="chase",l.climbY=0,l.root.position.y=0)}else{let S=v,T=g,C=Kl(l.pos.z);if(C!==o&&s.open){let k=Math.abs(l.pos.x)<4&&Math.abs(l.pos.z-hi)<2.5;S=0,T=k?o==="A"?hi+4:hi-4:hi+(C==="A"?1.8:-1.8)}let _=S-l.pos.x,E=T-l.pos.z,P=Math.hypot(_,E)||1;_/=P,E/=P;let D=Math.hypot(v-l.pos.x,g-l.pos.z);if(l.stuck>0){l.stuck-=t;let k=1.2*l.side,q=Math.cos(k),Y=Math.sin(k),st=_*q-E*Y,W=_*Y+E*q;_=st,E=W}let L=0,z=0;for(let k=0;k<this.list.length;k++){if(k===c)continue;let q=this.list[k];if(q.state!=="chase"&&q.state!=="attack")continue;let Y=l.pos.x-q.pos.x,st=l.pos.z-q.pos.z,W=Y*Y+st*st;if(W<.7&&W>1e-4){let j=1/Math.sqrt(W);L+=Y*j*(.9-Math.sqrt(W)),z+=st*j*(.9-Math.sqrt(W))}}_+=L*1.2,E+=z*1.2;let N=Math.hypot(_,E)||1;if(_/=N,E/=N,D<1&&C===o?f=0:f=l.speed,l.cool-=t,D<1.35&&C===o&&l.attackT<=0&&l.cool<=0&&(l.attackT=.01),l.attackT>0&&(l.attackT+=t,m=-2.2+Math.min(1,l.attackT/.4)*1.1,l.attackT>.42&&(D<1.7&&C===o&&r.hitPlayer?.(l),l.attackT=0,l.cool=1.05),f*=.3),l.pos.x+=_*f*t,l.pos.z+=E*f*t,u=_,d=E,a.resolve(l.pos,.36*h),l.yaw=Aa(l.yaw,Math.atan2(n.x-l.pos.x,n.z-l.pos.z)*(D<4?1:0)+Math.atan2(_,E)*(D<4?0:1),Math.min(1,t*9)),D<4&&(l.yaw=Aa(l.yaw,Math.atan2(v-l.pos.x,g-l.pos.z),Math.min(1,t*9))),l.chk+=t,l.chk>.5){let k=Math.hypot(l.pos.x-l.chkX,l.pos.z-l.chkZ);f>.5&&k<f*.5*.3?(l.stuck=1,l.side=Math.random()<.5?-1:1,l.stuckTot+=.5):l.stuckTot=Math.max(0,l.stuckTot-.25),l.chkX=l.pos.x,l.chkZ=l.pos.z,l.chk=0,l.stuckTot>6&&this.reroute(l)}}l.root.rotation.y=l.yaw,l.state!=="climb"&&(l.root.position.y=0);let p=f>.1?f:0;l.phase+=p*t*(l.runner?2.2:3)/Math.max(.6,h);let b=Math.sin(l.phase),A=Math.min(.75,.25+p*.14);l.legL.rotation.x=b*A,l.legR.rotation.x=-b*A*(l.limp?.35:1);let y=.12+Math.min(.35,p*.06)+(l.runner?.12:0);l.upper.rotation.x=y+Math.abs(Math.sin(l.phase))*.04,l.upper.rotation.z=Math.sin(l.phase*.5)*.06*(l.limp?2:1),l.upper.rotation.y=Math.sin(l.phase*.5)*.12,l.armL.rotation.x=m+Math.sin(l.phase+1)*.15+(l.state==="chase"&&l.attackT<=0,0),l.armR.rotation.x=m+(l.state==="attack"?Math.sin(l.attackT*7+1.6)*.7-Math.sin(l.attackT*7)*.7:0)+Math.sin(l.phase+3)*.15,l.armL.rotation.z=.12,l.armR.rotation.z=-.12,l.head.rotation.z=Math.sin(l.phase*.5+1)*.12,l.head.rotation.x=.1,l.pelvis.position.y=.95+Math.abs(Math.sin(l.phase))*.03}}reroute(t){let e=this.world.windows.filter(s=>s.area==="A"||this.world.door.open),n=wn(e);t.win=n,t.state="approach",t.stuckTot=0,t.stuck=0,t.pos.set(n.out.x+n.n.x*3,0,n.out.z+n.n.z*3)}};function D_(i,t,e,n){let s=i.x-e.x,r=i.y-e.y,a=i.z-e.z,o=s*t.x+r*t.y+a*t.z,c=s*s+r*r+a*a-n*n,l=o*o-c;if(l<0)return null;let h=-o-Math.sqrt(l);return h>0?h:null}function Aa(i,t,e){let n=((t-i+Math.PI)%Xe+Xe)%Xe-Math.PI;return i+n*e}var ui={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var _n=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},L_=new Yi(-1,1,1,-1,0,1),Wh=class extends Le{constructor(){super(),this.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new me([0,2,0,0,2,0],2))}},N_=new Wh,di=class{constructor(t){this._mesh=new At(N_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,L_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var mr=class extends _n{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ie?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gn.clone(t.uniforms),this.material=new ie({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new di(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ra=class extends _n{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ql=class extends _n{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var tc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new bt);this._width=n.width,this._height=n.height,e=new Te(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ne}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new mr(ui),this.copyPass.material.blending=ze,this.timer=new ea}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ra!==void 0&&(a instanceof Ra?n=!0:a instanceof Ql&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new bt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ca=class extends _n{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new pt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var xf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var gr=class i extends _n{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new bt(t.x,t.y):new bt(256,256),this.clearColor=new pt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Te(r,a,{type:Ne,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Te(r,a,{type:Ne,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Te(r,a,{type:Ne,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=xf;this.highPassUniforms=gn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ie({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new bt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=gn.clone(ui.uniforms),this.blendMaterial=new ie({uniforms:this.copyUniforms,vertexShader:ui.vertexShader,fragmentShader:ui.fragmentShader,premultipliedAlpha:!0,blending:nn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new pt,this._oldClearAlpha=1,this._basic=new Pe,this._fsQuad=new di(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new bt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],c=a+1<t?e[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new ie({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new bt(.5,.5)},direction:{value:new bt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new ie({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};gr.BlurDirectionX=new bt(1,0);gr.BlurDirectionY=new bt(0,1);var Pa={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new bt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new te},cameraProjectionMatrixInverse:{value:new te},cameraWorldMatrix:{value:new te},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new I(-1,-1,-1)},sceneBoxMax:{value:new I(1,1,1)}},vertexShader:`

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
		}`},Ia={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},ec={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function _f(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=U_(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=e[a],c=2*Math.PI*o/n,l=new I(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Ti(s,t,t);return r.wrapS=Pn,r.wrapT=Pn,r.needsUpdate=!0,r}function U_(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}var Da={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Xh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new bt},cameraProjectionMatrixInverse:{value:new te},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Xh(i,t,e){let n=F_(i,t,e),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function F_(i,t,e){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new I(Math.cos(r),Math.sin(r),a))}return n}var nc=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(t+e)*a,c=Math.floor(t+o),l=Math.floor(e+o),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,f=l-u,m=t-d,v=e-f,g,p;m>v?(g=1,p=0):(g=0,p=1);let b=m-g+h,A=v-p+h,y=m-1+2*h,S=v-1+2*h,T=c&255,C=l&255,_=this.perm[T+this.perm[C]]%12,E=this.perm[T+g+this.perm[C+p]]%12,P=this.perm[T+1+this.perm[C+1]]%12,D=.5-m*m-v*v;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[_],m,v));let L=.5-b*b-A*A;L<0?s=0:(L*=L,s=L*L*this._dot(this.grad3[E],b,A));let z=.5-y*y-S*S;return z<0?r=0:(z*=z,r=z*z*this._dot(this.grad3[P],y,S)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o,l=(t+e+n)*.3333333333333333,h=Math.floor(t+l),u=Math.floor(e+l),d=Math.floor(n+l),f=1/6,m=(h+u+d)*f,v=h-m,g=u-m,p=d-m,b=t-v,A=e-g,y=n-p,S,T,C,_,E,P;b>=A?A>=y?(S=1,T=0,C=0,_=1,E=1,P=0):b>=y?(S=1,T=0,C=0,_=1,E=0,P=1):(S=0,T=0,C=1,_=1,E=0,P=1):A<y?(S=0,T=0,C=1,_=0,E=1,P=1):b<y?(S=0,T=1,C=0,_=0,E=1,P=1):(S=0,T=1,C=0,_=1,E=1,P=0);let D=b-S+f,L=A-T+f,z=y-C+f,N=b-_+2*f,k=A-E+2*f,q=y-P+2*f,Y=b-1+3*f,st=A-1+3*f,W=y-1+3*f,j=h&255,it=u&255,Rt=d&255,Ct=this.perm[j+this.perm[it+this.perm[Rt]]]%12,le=this.perm[j+S+this.perm[it+T+this.perm[Rt+C]]]%12,Jt=this.perm[j+_+this.perm[it+E+this.perm[Rt+P]]]%12,jt=this.perm[j+1+this.perm[it+1+this.perm[Rt+1]]]%12,Z=.6-b*b-A*A-y*y;Z<0?s=0:(Z*=Z,s=Z*Z*this._dot3(this.grad3[Ct],b,A,y));let Q=.6-D*D-L*L-z*z;Q<0?r=0:(Q*=Q,r=Q*Q*this._dot3(this.grad3[le],D,L,z));let xt=.6-N*N-k*k-q*q;xt<0?a=0:(xt*=xt,a=xt*xt*this._dot3(this.grad3[Jt],N,k,q));let Ut=.6-Y*Y-st*st-W*W;return Ut<0?o=0:(Ut*=Ut,o=Ut*Ut*this._dot3(this.grad3[jt],Y,st,W)),32*(s+r+a+o)}noise4d(t,e,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,u,d,f,m,v=(t+e+n+s)*c,g=Math.floor(t+v),p=Math.floor(e+v),b=Math.floor(n+v),A=Math.floor(s+v),y=(g+p+b+A)*l,S=g-y,T=p-y,C=b-y,_=A-y,E=t-S,P=e-T,D=n-C,L=s-_,z=E>P?32:0,N=E>D?16:0,k=P>D?8:0,q=E>L?4:0,Y=P>L?2:0,st=D>L?1:0,W=z+N+k+q+Y+st,j=a[W][0]>=3?1:0,it=a[W][1]>=3?1:0,Rt=a[W][2]>=3?1:0,Ct=a[W][3]>=3?1:0,le=a[W][0]>=2?1:0,Jt=a[W][1]>=2?1:0,jt=a[W][2]>=2?1:0,Z=a[W][3]>=2?1:0,Q=a[W][0]>=1?1:0,xt=a[W][1]>=1?1:0,Ut=a[W][2]>=1?1:0,yt=a[W][3]>=1?1:0,Vt=E-j+l,Ie=P-it+l,Ht=D-Rt+l,Qt=L-Ct+l,ce=E-le+2*l,Xt=P-Jt+2*l,de=D-jt+2*l,De=L-Z+2*l,Je=E-Q+3*l,ge=P-xt+3*l,Ae=D-Ut+3*l,F=L-yt+3*l,Ve=E-1+4*l,se=P-1+4*l,R=D-1+4*l,x=L-1+4*l,B=g&255,G=p&255,J=b&255,at=A&255,ht=o[B+o[G+o[J+o[at]]]]%32,K=o[B+j+o[G+it+o[J+Rt+o[at+Ct]]]]%32,et=o[B+le+o[G+Jt+o[J+jt+o[at+Z]]]]%32,ut=o[B+Q+o[G+xt+o[J+Ut+o[at+yt]]]]%32,It=o[B+1+o[G+1+o[J+1+o[at+1]]]]%32,ct=.6-E*E-P*P-D*D-L*L;ct<0?h=0:(ct*=ct,h=ct*ct*this._dot4(r[ht],E,P,D,L));let lt=.6-Vt*Vt-Ie*Ie-Ht*Ht-Qt*Qt;lt<0?u=0:(lt*=lt,u=lt*lt*this._dot4(r[K],Vt,Ie,Ht,Qt));let Tt=.6-ce*ce-Xt*Xt-de*de-De*De;Tt<0?d=0:(Tt*=Tt,d=Tt*Tt*this._dot4(r[et],ce,Xt,de,De));let Lt=.6-Je*Je-ge*ge-Ae*Ae-F*F;Lt<0?f=0:(Lt*=Lt,f=Lt*Lt*this._dot4(r[ut],Je,ge,Ae,F));let Bt=.6-Ve*Ve-se*se-R*R-x*x;return Bt<0?m=0:(Bt*=Bt,m=Bt*Bt*this._dot4(r[It],Ve,se,R,x)),27*(h+u+d+f+m)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}_dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}};var xr=class i extends _n{constructor(t,e,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=_f(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Te(this.width,this.height,{type:Ne,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ie({defines:Object.assign({},Pa.defines),uniforms:gn.clone(Pa.uniforms),vertexShader:Pa.vertexShader,fragmentShader:Pa.fragmentShader,blending:ze,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Kr,this.normalMaterial.blending=ze,this.pdMaterial=new ie({defines:Object.assign({},Da.defines),uniforms:gn.clone(Da.uniforms),vertexShader:Da.vertexShader,fragmentShader:Da.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ie({defines:Object.assign({},Ia.defines),uniforms:gn.clone(Ia.uniforms),vertexShader:Ia.vertexShader,fragmentShader:Ia.fragmentShader,blending:ze}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ie({uniforms:gn.clone(ui.uniforms),vertexShader:ui.vertexShader,fragmentShader:ui.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ia,blendDst:_s,blendEquation:Ln,blendSrcAlpha:na,blendDstAlpha:_s,blendEquationAlpha:Ln}),this.blendMaterial=new ie({uniforms:gn.clone(ec.uniforms),vertexShader:ec.vertexShader,fragmentShader:ec.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:jo,blendSrc:ia,blendDst:_s,blendEquation:Ln,blendSrcAlpha:na,blendDstAlpha:_s,blendEquationAlpha:Ln}),this._fsQuad=new di(null),this._originalClearColor=new pt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new ii,this.depthTexture.format=si,this.depthTexture.type=ji,this.normalRenderTarget=new Te(this.width,this.height,{minFilter:Be,magFilter:Be,type:Ne,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Xh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=ze,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=ze,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=ze,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=ze,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=ze,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,s,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_renderOverride(t,e,n,s,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new nc,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){let c=a,l=o;s[(a*t+o)*4]=(e.noise(c,l)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(c+t,l)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(c,l+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(c+t,l+t)*.5+.5)*255}let r=new Ti(s,t,t,vn,ln);return r.wrapS=Pn,r.wrapT=Pn,r.needsUpdate=!0,r}};xr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var La={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ic=class extends _n{constructor(){super(),this.isOutputPass=!0,this.uniforms=gn.clone(La.uniforms),this.material=new ar({name:La.name,uniforms:this.uniforms,vertexShader:La.vertexShader,fragmentShader:La.fragmentShader}),this._fsQuad=new di(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},$t.getTransfer(this._outputColorSpace)===oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===sa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ra?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===aa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===la?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ca?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===oa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Na=class{constructor(t,e,n){this.max=t,this.n=0,this.next=0;let s=this.geo=new Le;this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.siz=new Float32Array(t),s.setAttribute("position",new We(this.pos,3).setUsage(va)),s.setAttribute("aColor",new We(this.col,4).setUsage(va)),s.setAttribute("aSize",new We(this.siz,1).setUsage(va)),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grav=new Float32Array(t),this.drag=new Float32Array(t),this.s0=new Float32Array(t),this.s1=new Float32Array(t),this.c0=new Float32Array(t*4),this.uniforms={map:{value:n},uScale:{value:800}};let r=this.mat=new ie({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:e?nn:Ji,vertexShader:`attribute float aSize; attribute vec4 aColor; varying vec4 vC; uniform float uScale;
        void main(){ vec4 mv = modelViewMatrix*vec4(position,1.); gl_Position = projectionMatrix*mv; gl_PointSize = clamp(aSize*uScale/max(-mv.z,0.1), 0., 300.); vC = aColor; }`,fragmentShader:`uniform sampler2D map; varying vec4 vC;
        void main(){ float a = texture2D(map, gl_PointCoord).a * vC.a; if(a<0.004) discard; gl_FragColor = vec4(vC.rgb, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        }`});this.points=new Wr(s,r),this.points.frustumCulled=!1,this.points.renderOrder=5,this.points.userData.noAO=!0}emit(t,e,n,s,r,a,o,c,l,h,u,d,f,m=0,v=0){let g=this.next;this.next=(this.next+1)%this.max,this.pos[g*3]=t,this.pos[g*3+1]=e,this.pos[g*3+2]=n,this.vel[g*3]=s,this.vel[g*3+1]=r,this.vel[g*3+2]=a,this.life[g]=this.maxLife[g]=o,this.s0[g]=c,this.s1[g]=l,this.grav[g]=m,this.drag[g]=v,this.c0[g*4]=h,this.c0[g*4+1]=u,this.c0[g*4+2]=d,this.c0[g*4+3]=f}update(t){let{pos:e,vel:n,life:s,maxLife:r,col:a,siz:o,c0:c}=this;for(let l=0;l<this.max;l++){if(s[l]<=0){o[l]=0,a[l*4+3]=0;continue}if(s[l]-=t,s[l]<=0){o[l]=0,a[l*4+3]=0;continue}let h=1-s[l]/r[l],u=l*3,d=Math.max(0,1-this.drag[l]*t);n[u]*=d,n[u+1]=n[u+1]*d-this.grav[l]*t,n[u+2]*=d,e[u]+=n[u]*t,e[u+1]+=n[u+1]*t,e[u+2]+=n[u+2]*t,e[u+1]<.02&&this.grav[l]>0&&(e[u+1]=.02,n[u]*=.4,n[u+2]*=.4,n[u+1]*=-.25),o[l]=this.s0[l]+(this.s1[l]-this.s0[l])*h;let f=h<.1?h*10:1-(h-.1)/.9;a[l*4]=c[l*4],a[l*4+1]=c[l*4+1],a[l*4+2]=c[l*4+2],a[l*4+3]=c[l*4+3]*f}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0}clear(){this.life.fill(0)}},sc=class{constructor(t,e,n){this.scene=t,this.tier=n;let s=n>0?1:.4;this.soft=new Na(Math.floor(900*s)+100,!1,e.glow),this.add=new Na(Math.floor(900*s)+100,!0,e.glow),t.add(this.soft.points,this.add.points),this.tracers=[];let r=new ee(1,1,1);for(let a=0;a<24;a++){let o=new At(r,new Pe({color:new pt(5,3.6,1.4),transparent:!0,blending:nn,depthWrite:!1,toneMapped:!1}));o.visible=!1,o.userData.noAO=!0,o.userData.t=0,t.add(o),this.tracers.push(o)}this.tn=0,this.maxCas=n>0?80:16,this.cas=new Gr(new pn(.009,.009,.034,6),new Ee({color:14066743,metalness:1,roughness:.3}),this.maxCas),this.cas.frustumCulled=!1,this.cas.castShadow=!1,t.add(this.cas),this.casData=Array.from({length:this.maxCas},()=>({t:0,p:new I,v:new I,r:new Vn,w:new I})),this.casNext=0,this._m=new te,this._q=new In,this._s=new I(1,1,1);for(let a=0;a<this.maxCas;a++)this._m.makeScale(0,0,0),this.cas.setMatrixAt(a,this._m)}setScale(t,e){let n=t/(2*Math.tan(e*Math.PI/360));this.soft.uniforms.uScale.value=n,this.add.uniforms.uScale.value=n}tracer(t,e,n=.012){let s=this.tracers[this.tn++%this.tracers.length],r=t.distanceTo(e);r<.5||(s.position.copy(t).lerp(e,.5),s.lookAt(e),s.scale.set(n,n,r),s.visible=!0,s.userData.t=.06,s.material.opacity=1)}casing(t,e){let n=this.casData[this.casNext++%this.maxCas];n.t=2.5,n.p.copy(t),n.v.copy(e),n.r.set($(Xe),$(Xe),$(Xe)),n.w.set($(-30,30),$(-30,30),$(-30,30))}blood(t,e,n,s=1){let r=this.tier>0?1:.5;n=Math.ceil(n*r);for(let a=0;a<n;a++){let o=$(.6,3.2)*s;this.soft.emit(t.x,t.y,t.z,e.x*o+$(-1,1),e.y*o+$(-.2,1.4),e.z*o+$(-1,1),$(.35,.8),$(.12,.2)*s,$(.45,.8)*s,$(.55,.9),$(.02,.07),$(.04,.12),$(.35,.65),4,2.5)}for(let a=0;a<Math.ceil(n*.6);a++){let o=$(1.5,5)*s;this.soft.emit(t.x,t.y,t.z,e.x*o+$(-1.5,1.5),e.y*o+$(0,2.5),e.z*o+$(-1.5,1.5),$(.5,1),.05,.04,.6,0,.03,.9,11,.4)}}sparks(t,e,n){n=Math.ceil(n*(this.tier>0?1:.5));for(let s=0;s<n;s++){let r=$(2,7);this.add.emit(t.x,t.y,t.z,e.x*r+$(-2,2),e.y*r+$(-1,2.5),e.z*r+$(-2,2),$(.2,.5),.07,.015,4,$(1.6,2.6),.5,1,9,.8)}}dust(t,e,n,s=[.45,.36,.26]){n=Math.ceil(n*(this.tier>0?1:.5));for(let r=0;r<n;r++)this.soft.emit(t.x,t.y,t.z,e.x*$(.3,1.5)+$(-.5,.5),e.y*$(.2,1)+$(0,.6),e.z*$(.3,1.5)+$(-.5,.5),$(.6,1.3),.2,$(.8,1.4),s[0],s[1],s[2],.35,-.2,1.8)}smoke(t,e,n=2){for(let s=0;s<n;s++)this.soft.emit(t.x,t.y,t.z,e.x*1.2+$(-.2,.2),e.y*1.2+$(.1,.5),e.z*1.2+$(-.2,.2),$(.5,1),.05,.28,.55,.55,.58,.25,-.4,2)}flash(t,e){this.add.emit(t.x,t.y,t.z,e.x*1,e.y*1,e.z*1,.06,.45,.8,5,3.4,1.4,1,0,0);for(let n=0;n<3;n++)this.add.emit(t.x,t.y,t.z,e.x*$(3,9)+$(-2,2),e.y*$(3,9)+$(-2,2),e.z*$(3,9)+$(-2,2),$(.08,.18),.1,.02,4,2.2,.6,1,2,1)}glowBurst(t,e,n,s,r=24,a=4){for(let o=0;o<r;o++){let c=$(Xe),l=$(-.6,1),h=$(.4,1)*a;this.add.emit(t.x,t.y,t.z,Math.cos(c)*h,l*h,Math.sin(c)*h,$(.5,1.1),.18,.02,e,n,s,1,2,1.2)}}update(t){this.soft.update(t),this.add.update(t);for(let n of this.tracers)n.visible&&(n.userData.t-=t,n.material.opacity=Math.max(0,n.userData.t/.06),n.userData.t<=0&&(n.visible=!1));let e=!1;for(let n=0;n<this.maxCas;n++){let s=this.casData[n];if(s.t<=0)continue;e=!0,s.t-=t,s.v.y-=9.8*t,s.p.addScaledVector(s.v,t),s.p.y<.02&&(s.p.y=.02,s.v.y*=-.35,s.v.x*=.6,s.v.z*=.6,s.w.multiplyScalar(.5)),s.r.x+=s.w.x*t,s.r.y+=s.w.y*t,s.r.z+=s.w.z*t;let r=Math.min(1,s.t*2);this._q.setFromEuler(s.r),this._s.setScalar(s.t>0?r:0),this._m.compose(s.p,this._q,this._s),this.cas.setMatrixAt(n,this._m),s.t<=0&&(this._m.makeScale(0,0,0),this.cas.setMatrixAt(n,this._m))}(e||this._anyBefore)&&(this.cas.instanceMatrix.needsUpdate=!0),this._anyBefore=e}reset(){this.soft.clear(),this.add.clear();for(let t of this.casData)t.t=0;for(let t of this.tracers)t.visible=!1}},Ua=class{constructor(t,e,n={}){this.o=Object.assign({R:22,y0:.2,y1:6,size:.06,alpha:.2,col:[.9,.75,.55],additive:!0,speed:1},n),this.ps=new Na(e,this.o.additive,t.glow),this.n=e,this.R=this.o.R,this.t=0;for(let s=0;s<e;s++)this.ps.pos[s*3]=$(-this.R,this.R),this.ps.pos[s*3+1]=$(this.o.y0,this.o.y1),this.ps.pos[s*3+2]=$(-this.R,this.R);this.ps.update=s=>this.upd(s),this.points=this.ps.points,this.center={x:0,z:0}}upd(t){let e=this.ps,n=this.o;this.t+=t;let s=this.center;for(let r=0;r<this.n;r++){let a=r*3,o=n.speed;e.pos[a]+=(Math.sin(this.t*.3+r)*.25+.35)*t*o,e.pos[a+1]+=Math.sin(this.t*.4+r*1.7)*.06*t*o,e.pos[a+2]+=Math.cos(this.t*.25+r*.7)*.2*t*o,e.pos[a]-s.x>this.R?e.pos[a]-=this.R*2:e.pos[a]-s.x<-this.R&&(e.pos[a]+=this.R*2),e.pos[a+2]-s.z>this.R?e.pos[a+2]-=this.R*2:e.pos[a+2]-s.z<-this.R&&(e.pos[a+2]+=this.R*2),e.siz[r]=n.size*(1+r%3*.4),e.col[r*4]=n.col[0],e.col[r*4+1]=n.col[1],e.col[r*4+2]=n.col[2],e.col[r*4+3]=n.alpha*(.6+.4*(r%4/3))}e.geo.attributes.position.needsUpdate=!0,e.geo.attributes.aColor.needsUpdate=!0,e.geo.attributes.aSize.needsUpdate=!0}},O_={uniforms:{tDiffuse:{value:null},uTime:{value:0},uDamage:{value:0},uVig:{value:.55},uGrain:{value:.07},uSat:{value:1.1},uAberr:{value:.6},uRes:{value:new bt(1,1)},uLow:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime,uDamage,uVig,uGrain,uSat,uAberr,uLow; uniform vec2 uRes; varying vec2 vUv;
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
    }`},rc=class{constructor(t,e,n,s){this.r=t,this.scene=e,this.camera=n,this.viewScene=s,this.mode="direct",this.w=1,this.h=1,this.pr=1}build(t){if(this.mode=t,this.composer&&(this.composer.dispose?.(),this.composer=null),t==="direct")return;let e=new Te(this.w,this.h,{type:Ne,samples:t==="full"?0:4}),n=this.composer=new tc(this.r,e);if(n.setPixelRatio?.(this.pr),n.setSize(this.w,this.h),n.addPass(new Ca(this.scene,this.camera)),t==="full"){let r=this.gtao=new xr(this.scene,this.camera,this.w*this.pr,this.h*this.pr);r.output=xr.OUTPUT.Default,r.blendIntensity=1,r.updateGtaoMaterial({radius:.7,distanceExponent:1.5,thickness:1.5,scale:1.2,samples:10,distanceFallOff:1,screenSpaceRadius:!1}),r.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,radiusExponent:1,rings:2,samples:8});let a=r._overrideVisibility.bind(r);r._overrideVisibility=()=>{a(),this.scene.traverse(o=>{o.userData.noAO&&o.visible&&(o.visible=!1,r._visibilityCache.push(o))})},n.addPass(r)}let s=new Ca(this.viewScene,this.camera);s.clear=!1,s.clearDepth=!0,n.addPass(s),this.bloom=new gr(new bt(this.w,this.h),.42,.55,.9),n.addPass(this.bloom),n.addPass(new ic),this.grade=new mr(O_),this.grade.uniforms.uRes.value.set(this.w*this.pr,this.h*this.pr),n.addPass(this.grade)}setSize(t,e,n){this.w=t,this.h=e,this.pr=n,this.composer&&(this.composer.setPixelRatio(n),this.composer.setSize(t,e),this.gtao?.setSize(t*n,e*n),this.grade.uniforms.uRes.value.set(t*n,e*n))}render(t,e,n,s){if(!this.composer){let a=this.r;a.autoClear=!1,a.clear(),a.render(this.scene,this.camera),a.clearDepth(),a.render(this.viewScene,this.camera),a.autoClear=!0;return}let r=this.grade.uniforms;r.uTime.value=e,r.uDamage.value=n,r.uLow.value=s,this.composer.render(t)}};var ac=class{constructor(){this.ctx=null,this.muted=!1,this.lastGroan=0,this.lastTick=0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.muted?0:.8;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,n.attack.value=.003,n.release.value=.2,this.master.connect(n),n.connect(e.destination);let s=e.createBuffer(1,e.sampleRate*2,e.sampleRate),r=s.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=Math.random()*2-1;this.noise=s;let a=e.sampleRate*1.8,o=e.createBuffer(2,a,e.sampleRate);for(let c=0;c<2;c++){let l=o.getChannelData(c);for(let h=0;h<a;h++)l[h]=(Math.random()*2-1)*Math.pow(1-h/a,3.2)}this.verb=e.createConvolver(),this.verb.buffer=o,this.verbIn=e.createGain(),this.verbIn.gain.value=.35,this.verbIn.connect(this.verb),this.verb.connect(this.master),this.startAmbient()}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.8,this.ctx.currentTime,.03)}get ok(){return this.ctx&&!this.muted&&this.ctx.state==="running"}out(t=0,e=.3){let n=this.ctx,s=n.createGain(),r=s;if(n.createStereoPanner){let o=n.createStereoPanner();o.pan.value=we(t,-1,1),s.connect(o),r=o}r.connect(this.master);let a=n.createGain();return a.gain.value=e,r.connect(a),a.connect(this.verbIn),s}nz(t,e,n,s,r,a,o,c=1){let l=this.ctx,h=l.createBufferSource();h.buffer=this.noise,h.loop=!0;let u=l.createBiquadFilter();u.type=n,u.Q.value=c,u.frequency.setValueAtTime(s,t),u.frequency.exponentialRampToValueAtTime(Math.max(20,r),t+e);let d=l.createGain();d.gain.setValueAtTime(a,t),d.gain.exponentialRampToValueAtTime(8e-4,t+e),h.connect(u),u.connect(d),d.connect(o),h.start(t,$(1)),h.stop(t+e+.05)}tone(t,e,n,s,r,a,o,c=.003){let l=this.ctx,h=l.createOscillator();h.type=n,h.frequency.setValueAtTime(s,t),h.frequency.exponentialRampToValueAtTime(Math.max(10,r),t+e);let u=l.createGain();u.gain.setValueAtTime(1e-4,t),u.gain.linearRampToValueAtTime(a,t+c),u.gain.exponentialRampToValueAtTime(8e-4,t+e),h.connect(u),u.connect(o),h.start(t),h.stop(t+e+.05)}shot(t){if(!this.ok)return;let e=this.ctx,n=e.currentTime,s=this.out(0,t==="shotgun"||t==="lmg"?.5:.3),r={pistol:[.13,2600,.7,150,.9,.55],smg:[.09,3400,.5,190,.7,.45],shotgun:[.34,1800,1,85,1.2,.9],rifle:[.16,2200,.8,120,1,.7],lmg:[.2,1900,.9,95,1.2,.8]}[t]||[.12,2500,.7,150,1,.6];this.nz(n,r[0],"lowpass",r[1],220,r[2],s,.7),this.nz(n,.025,"highpass",3e3,6e3,.6,s),this.tone(n,r[0]*1.2,"sine",r[3],r[3]*.3,r[4]*.9,s),this.tone(n,.05,"square",r[3]*4,r[3]*1.5,.15,s)}click(t=0,e=3200,n=.35,s=0){if(!this.ok)return;let r=this.ctx.currentTime+t,a=this.out(s,.1);this.nz(r,.03,"bandpass",e,e*.7,n,a,3),this.tone(r,.025,"square",e*.3,e*.2,.05,a)}reload(t){if(!this.ok)return;let e=t==="lmg"?3.4:t==="rifle"?1.7:t==="smg"?1.4:1;this.click(.12,2400,.4),this.click(e*.55,1800,.5),this.click(e*.8,3600,.45),t!=="pistol"&&this.click(e*.92,1400,.5)}pump(){this.click(0,900,.6),this.click(.18,1500,.55)}shell(){this.click(0,2e3,.45)}empty(){this.click(0,1500,.3)}groan(t=0,e=.5,n=1,s=1){if(!this.ok)return;let r=this.ctx,a=r.currentTime;if(a-this.lastGroan<.09)return;this.lastGroan=a;let o=a,c=this.out(t,.45),l=$(70,105)*n,h=r.createOscillator();h.type="sawtooth",h.frequency.setValueAtTime(l*1.25,o),h.frequency.linearRampToValueAtTime(l,o+s*.3),h.frequency.linearRampToValueAtTime(l*.7,o+s);let u=r.createOscillator();u.frequency.value=$(5,9);let d=r.createGain();d.gain.value=6,u.connect(d),d.connect(h.frequency);let f=r.createBiquadFilter();f.type="bandpass",f.Q.value=5,f.frequency.setValueAtTime($(450,700),o),f.frequency.linearRampToValueAtTime($(900,1300),o+s*.6);let m=r.createBiquadFilter();m.type="lowpass",m.frequency.value=1600;let v=r.createGain();v.gain.setValueAtTime(1e-4,o),v.gain.linearRampToValueAtTime(e*.5,o+s*.15),v.gain.exponentialRampToValueAtTime(.001,o+s),h.connect(f),f.connect(m),m.connect(v),v.connect(c),h.start(o),u.start(o),h.stop(o+s+.05),u.stop(o+s+.05),this.nz(o,s*.8,"bandpass",900,500,e*.15,c,2)}zhit(t=0,e=!1){if(!this.ok)return;let n=this.ctx.currentTime,s=this.out(t,.2);this.nz(n,.09,"lowpass",700,120,.5,s),this.tone(n,.1,"sine",120,50,.4,s),e&&this.tone(n,.08,"triangle",900,500,.12,s)}zdie(t=0,e=.4){if(!this.ok)return;this.groan(t,e,.75,.7);let n=this.ctx.currentTime+.15,s=this.out(t,.25);this.nz(n,.25,"lowpass",500,60,.6,s),this.tone(n,.3,"sine",90,35,.5,s)}tick(t){if(!this.ok)return;let e=this.ctx.currentTime,n=this.out(0,0);this.tone(e,.05,"square",t?900:1500,t?600:1300,t?.12:.07,n)}cash(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.2);this.tone(t,.12,"triangle",1250,1250,.22,e),this.tone(t+.07,.25,"triangle",1880,1880,.22,e),this.nz(t,.05,"highpass",5e3,8e3,.15,e)}deny(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,0);this.tone(t,.22,"sawtooth",130,90,.2,e),this.tone(t+.1,.22,"sawtooth",110,80,.2,e)}hurt(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.2);this.nz(t,.18,"lowpass",600,90,.9,e),this.tone(t,.25,"sine",80,40,.8,e),this.tone(t,.2,"sawtooth",220,110,.12,e)}heart(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,0);this.tone(t,.14,"sine",62,38,.7,e),this.tone(t+.18,.14,"sine",56,34,.5,e)}plank(t){if(!this.ok)return;let e=this.ctx.currentTime,n=this.out(0,.3);this.nz(e,t?.16:.08,"bandpass",t?500:800,250,.7,n,2),this.tone(e,.1,"triangle",220,90,.4,n),t&&this.nz(e+.03,.12,"highpass",1500,3e3,.3,n)}repair(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.2);this.nz(t,.07,"bandpass",1100,600,.6,e,2),this.tone(t,.08,"square",300,120,.15,e),this.tone(t+.1,.1,"triangle",1500,1500,.1,e)}door(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.5);this.nz(t,2.2,"lowpass",900,150,.7,e,1),this.tone(t,2.2,"sawtooth",55,42,.2,e,.3);for(let n=0;n<5;n++)this.click(.2+n*.35,700+n*120,.7);this.nz(t+2,.4,"lowpass",400,60,.9,e)}boom(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.7);this.nz(t,2.4,"lowpass",2400,50,1.4,e,.7),this.tone(t,1.6,"sine",90,24,1.3,e),this.tone(t+.05,.8,"sawtooth",50,25,.3,e)}power(t){if(!this.ok)return;let e=this.ctx.currentTime,n=this.out(0,.4);(t==="nuke"?[220,277,330,440]:t==="double"?[392,494,587,784]:[330,440,554,659]).forEach((r,a)=>{this.tone(e+a*.07,.4,"triangle",r,r,.2,n),this.tone(e+a*.07,.4,"sine",r*2,r*2,.08,n)})}medkit(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.5);[523,659,784,1047].forEach((n,s)=>{this.tone(t+s*.08,.5,"sine",n,n,.2,e),this.tone(t+s*.08,.5,"triangle",n*2,n*2,.05,e)}),this.tone(t,.9,"sine",300,600,.12,e,.1)}spawnPower(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.5);this.tone(t,.7,"sine",600,1200,.25,e,.05),this.tone(t+.1,.7,"sine",900,1800,.12,e,.05)}round(t){if(!this.ok)return;let e=this.ctx,n=e.currentTime,s=this.out(0,.8);[55,82.4,98,130.8].forEach((a,o)=>{let c=e.createOscillator();c.type="sawtooth",c.frequency.value=a;let l=e.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(200,n),l.frequency.linearRampToValueAtTime(1400,n+1.1),l.frequency.linearRampToValueAtTime(150,n+3.2);let h=e.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.linearRampToValueAtTime(.16,n+.9),h.gain.exponentialRampToValueAtTime(.001,n+3.4),c.connect(l),l.connect(h),h.connect(s),c.start(n),c.stop(n+3.5)}),[440,415,392,330,294].forEach((a,o)=>{this.tone(n+.5+o*.32,1.3,"sine",a,a,.14,s,.01),this.tone(n+.5+o*.32,1.3,"sine",a*2.01,a*2.01,.04,s,.01)}),this.tone(n,.5,"sine",70,28,.9,s),this.nz(n,.35,"lowpass",700,70,.5,s)}over(){if(!this.ok)return;let t=this.ctx,e=t.currentTime,n=this.out(0,.9);[110,130.8,164.8].forEach(s=>{this.tone(e,3.6,"sawtooth",s,s*.5,.12,n,.4)}),this.tone(e,1.5,"sine",60,25,1,n),this.nz(e,1.2,"lowpass",900,60,.7,n)}jingle(t=4){if(!this.ok)return;let e=this.ctx.currentTime,n=this.out(0,.5),s=[523,659,784,659,587,740,880,740];for(let r=0;r<t*4;r++){let a=s[r%s.length]*(r>8?1.12:1);this.tone(e+r*.2,.32,"triangle",a,a,.1,n,.005)}this.nz(e,.4,"bandpass",600,300,.4,n)}open(){if(!this.ok)return;let t=this.ctx.currentTime,e=this.out(0,.4);this.nz(t,.5,"bandpass",500,900,.4,e,4),this.tone(t,.5,"sawtooth",120,220,.1,e)}startAmbient(){let t=this.ctx,e=t.createGain();e.gain.value=.5,e.connect(this.master);let n=t.createBufferSource();n.buffer=this.noise,n.loop=!0;let s=t.createBiquadFilter();s.type="bandpass",s.Q.value=.8,s.frequency.value=380;let r=t.createGain();r.gain.value=.07;let a=t.createOscillator();a.frequency.value=.11;let o=t.createGain();o.gain.value=.045,a.connect(o),o.connect(r.gain);let c=t.createOscillator();c.frequency.value=.07;let l=t.createGain();l.gain.value=140,c.connect(l),l.connect(s.frequency),n.connect(s),s.connect(r),r.connect(e),n.start(),a.start(),c.start();let h=t.createOscillator();h.type="sawtooth",h.frequency.value=36;let u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=90;let d=t.createGain();d.gain.value=.07,h.connect(u),u.connect(d),d.connect(e),h.start();let f=t.createOscillator();f.type="sine",f.frequency.value=4300;let m=t.createGain();m.gain.value=0;let v=t.createOscillator();v.type="square",v.frequency.value=28;let g=t.createGain();g.gain.value=.004,v.connect(g),g.connect(m.gain);let p=t.createOscillator();p.frequency.value=.3;let b=t.createGain();b.gain.value=.003,p.connect(b),b.connect(m.gain),f.connect(m),m.connect(e),f.start(),v.start(),p.start()}};var Va=200,B_=4.5,z_=.38*Va,Ha=.4,Ef=.5,wf=20,Af=.5,k_=40,ot=i=>document.getElementById(i),Li=new URLSearchParams(location.search),Qe=Li.has("touch")||matchMedia("(pointer:coarse)").matches&&"ontouchstart"in window||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);document.body.classList.toggle("touch",Qe);var zt=new ac;try{zt.muted=localStorage.getItem("vwz_mute")==="1"}catch{}var ss=ot("c"),Sn=new Wl({canvas:ss,antialias:!Qe,powerPreference:"high-performance",preserveDrawingBuffer:Li.has("test")});Sn.toneMapping=vs;Sn.toneMappingExposure=1.05;Sn.outputColorSpace=Oe;Sn.shadowMap.type=xs;var sn=new ds,V_=3812412;sn.fog=new Br(V_,.026);var Zh=Qe?76:72,ke=new Ke(Zh,1,.05,700);ke.rotation.order="YXZ";sn.add(ke);var fi=Li.get("quality")||(()=>{try{return localStorage.getItem("vwz_q")||"auto"}catch{return"auto"}})(),An=fi==="high"?2:fi==="medium"?1:fi==="low"||Qe?0:2,yr=rf(Qe?256:512),Wt=new $l(sn,yr,An),ve=new sc(sn,yr,An),Ii=new Ua(yr,260,{R:20,y0:.3,y1:6,size:.07,alpha:.22});sn.add(Ii.points);var ws=new Ua(yr,46,{R:55,y0:.4,y1:2.2,size:5.5,alpha:.045,col:[.55,.5,.62],additive:!1,speed:.7});sn.add(ws.points);var je=new jl(sn,Wt,An),dc=new ds,vr=new rc(Sn,sn,ke,dc);{let i=new fr(Sn),t=new ds,e=new At(Wt.sky.geometry,Wt.sky.material.clone());e.scale.setScalar(.12),t.add(e);let n=i.fromScene(t,0,.1,100);sn.environment=n.texture,sn.environmentIntensity=.45,dc.environment=n.texture,dc.environmentIntensity=.9,i.dispose()}var qn=new ta(14674687,40,55,.46,.75,1.25);qn.position.set(.16,-.1,-.1);qn.target.position.set(.16,-.1,-10);ke.add(qn,qn.target);qn.shadow.mapSize.set(1024,1024);qn.shadow.camera.near=.3;qn.shadow.camera.far=40;qn.shadow.bias=-6e-4;qn.shadow.normalBias=.03;var ns=new qi(16758886,0,20,2);ke.add(ns);ns.position.set(.15,-.05,-3.2);var Yn=new At(new fs(3.4,14,28,1,!0),new ie({transparent:!0,depthWrite:!1,blending:nn,side:mn,uniforms:{c:{value:new pt(.75,.85,1)},k:{value:.05}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(vy,1.2)*pow(f,2.)*k); }"}));Yn.geometry.translate(0,-7,0);Yn.geometry.rotateX(-Math.PI/2);Yn.position.set(.16,-.1,-.2);Yn.userData.noAO=!0;Yn.renderOrder=6;ke.add(Yn);var Cs=new Yt;Cs.matrixAutoUpdate=!1;dc.add(Cs);var H_=new ms(12175615,4864556,1.5),Jh=new gs(16773341,2.2),mc=new qi(16758886,0,3,2);Jh.position.set(1.5,2,1);Cs.add(H_,Jh,Jh.target,mc);mc.position.set(.15,-.05,-.9);var ka={},pi=new bi(new ni({map:yr.glow,color:new pt(6,4,1.6),blending:nn,depthWrite:!1,transparent:!0,fog:!1}));pi.scale.setScalar(.3);pi.visible=!1;pi.userData.noAO=!0;function G_(i){if(!ka[i]){let t=wa(i);t.visible=!1,Cs.add(t),ka[i]=t}return ka[i]}var w={x:0,z:12,yaw:0,pitch:0,vx:0,vz:0,hp:Va,maxHp:Va,lastHit:-99,pts:500,kills:0,heads:0,bob:0,rP:0,rY:0,shake:0,dmg:0,flashlight:!0,slots:[],cur:0,fireCd:0,reloadT:0,reloadTot:0,switchT:0,kick:0,mv:0,sprint:!1,heat:0,dead:!1,deadT:0,sx:0,sy:0},nt={state:"menu",time:0,runTime:0,round:0,toSpawn:0,spawnT:0,interT:0,phase:"wait",drops:0,lastDrop:-99,kills:0,double:0,powers:[],ups:[],repairT:0,healBeat:0,lastMed:-99,orbit:0,menuSpawn:0,flashT:0,muzzleT:0},Gt={f:0,s:0,l:0,r:0,fire:!1,reload:!1,interact:!1,interactEdge:!1,sprint:!1},fc=i=>({id:i,mag:Ue[i].mag,reserve:Ue[i].reserve}),rs=()=>w.slots[w.cur];function gc(i){An=i;let t=window.devicePixelRatio||1,e=i===2?Math.min(t,1.75):i===1?Math.min(t,1.25):we(t*.7,.6,1);Sn.setPixelRatio(e),vr.pr=e,Sn.shadowMap.enabled=i>0,Sn.shadowMap.needsUpdate=!0,vr.build(["direct","bloom","full"][i]),Rf(),Wt.setTier(i),je.setTier(i),ve.tier=i,Ii.points.visible=i>0,ws.points.visible=i>0,Yn.visible=i>0&&w.flashlight,qn.castShadow=i===2;for(let n of je.list)n.root.traverse(s=>{s.isMesh&&(s.castShadow=i>0)});sn.traverse(n=>{n.material&&!Array.isArray(n.material)&&(n.material.needsUpdate=!0)}),document.body.classList.toggle("lowq",i===0),Sn.toneMappingExposure=i===0?1.15:1.05,ot("fx-damage").style.display=i===0?"":"none"}function Rf(){let i=window.innerWidth,t=window.innerHeight;Sn.setSize(i,t,!1),ss.style.width=i+"px",ss.style.height=t+"px",ke.aspect=i/t,ke.fov=i/t<.9?Zh+14:Zh,ke.updateProjectionMatrix(),vr.setSize(i,t,Sn.getPixelRatio()),ve.setScale(t*Sn.getPixelRatio(),ke.fov),ws.ps.uniforms.uScale.value=ve.soft.uniforms.uScale.value,Ii.ps.uniforms.uScale.value=ve.soft.uniforms.uScale.value}window.addEventListener("resize",Rf);var Ba=0,hc=0,uc=3;function W_(i){if(!(nt.state!=="playing"||fi!=="auto"||Li.has("noadapt"))){if(uc>0){uc-=i;return}if(Ba+=i,hc++,Ba>=2.5){let t=hc/Ba;Ba=0,hc=0,t<28&&An>0&&(gc(An-1),uc=3,As("Graphics lowered for smoother play"))}}}var _e={hp:-1,pts:-1,mag:-1,res:-1,name:"",prompt:"",round:-1,alt:""},vf=0;function As(i){let t=ot("toast");t.textContent=i,t.classList.add("on"),clearTimeout(vf),vf=setTimeout(()=>t.classList.remove("on"),2600)}function Ga(i,t=""){let e=ot("banner");e.innerHTML=i+(t?`<small>${t}</small>`:""),e.classList.remove("on"),e.offsetWidth,e.classList.add("on")}function Kh(i,t,e){let n=document.createElement("span");n.textContent=i,t==="heal"?n.className="g":t&&(n.className="h"),n.style.setProperty("--x",$(-80,80)+"px"),n.style.top=$(10,50)+"px",ot("pop").appendChild(n),setTimeout(()=>n.remove(),950)}function X_(){let i=Math.max(0,Math.round(w.hp));i!==_e.hp&&(_e.hp=i,ot("hpFill").style.width=100*i/w.maxHp+"%",ot("hpFill").classList.toggle("low",i<w.maxHp*Ha),ot("hpNum").textContent=i);let t=tu();if(t!==_e.med&&(_e.med=t,ot("medCue").classList.toggle("on",t)),w.pts!==_e.pts){if(_e.pts>=0&&w.pts>_e.pts){let h=ot("pts");h.classList.remove("bump"),h.offsetWidth,h.classList.add("bump")}_e.pts=w.pts,ot("pts").textContent=w.pts.toLocaleString()}let e=rs(),n=Ue[e.id];n.name!==_e.name&&(_e.name=n.name,ot("wName").textContent=n.name),e.mag!==_e.mag&&(_e.mag=e.mag,ot("ammoMag").textContent=e.mag,ot("ammoMag").classList.toggle("empty",e.mag===0)),e.reserve!==_e.res&&(_e.res=e.reserve,ot("ammoRes").textContent="/ "+e.reserve);let s=w.slots[1-w.cur],r=s?Ue[s.id].name+"  "+s.mag+"/"+s.reserve:"";if(r!==_e.alt&&(_e.alt=r,ot("wAlt").textContent=r),nt.round!==_e.round){_e.round=nt.round;let h=ot("roundNum");h.textContent=nt.round||1,h.classList.remove("pulse"),h.offsetWidth,h.classList.add("pulse")}let a=ot("reloadBar");w.reloadT>0?(a.classList.add("on"),a.firstElementChild.style.width=100*(1-w.reloadT/w.reloadTot)+"%"):a.classList.remove("on");let o=we(w.dmg,0,1);ot("fx-damage").style.opacity=An===0?Math.min(1,o+(w.hp<w.maxHp*Ha?.25:0)):0;let c=ot("powers"),l="";nt.double>0&&(l+=`<div class="pw glass${nt.double<5?" blink":""}" style="color:#ffd36b;border-color:#ffd36b88">2\xD7 CASH <b>${Math.ceil(nt.double)}</b></div>`),c._h!==l&&(c._h=l,c.innerHTML=l)}function is(i,t=!0){let e=ot("prompt");i!==_e.prompt&&(_e.prompt=i,e.innerHTML=i,e.classList.toggle("on",!!i))}function Wa(){for(let t in ka)ka[t].visible=!1;let i=G_(rs().id);i.visible=nt.state==="playing"||w.dead,i.add(pi),pi.position.copy(i.userData.muzzle.position).add(new I(0,0,-.04)),w.gun=i}function _r(i){i===w.cur||!w.slots[i]||w.switchT>0||(w.cur=i,w.reloadT=0,w.switchT=.32,Wa(),zt.click(0,2500,.3))}function jh(i){let t=w.slots.findIndex(e=>e&&e.id===i);if(t>=0){let e=w.slots[t];e.mag=Ue[i].mag,e.reserve=Ue[i].reserve;return}w.slots[1]?w.slots[w.cur]=fc(i):(w.slots[1]=fc(i),w.cur=1),w.reloadT=0,w.switchT=.4,Wa()}function pc(){let i=rs(),t=Ue[i.id];w.reloadT>0||w.switchT>0||i.mag>=t.mag||i.reserve<=0||(w.reloadTot=w.reloadT=t.perShell?t.reload*(t.mag-i.mag)+.4:t.reload,w.shellT=t.reload,zt.reload(t.perShell?"pistol":i.id))}function q_(){let i=rs(),t=Ue[i.id],e=Math.min(t.mag-i.mag,i.reserve);i.mag+=e,i.reserve-=e,w.reloadT=0,t.perShell&&zt.pump()}var oc=new I,Fa=new I,Oa=new I,lc=new I,cc=new I,yf=new I,qh=new I;function Y_(i){let t=w.yaw+w.rY,e=w.pitch+w.rP;return i.set(-Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e))}function Cf(){return 1.7-(w.dead?Math.min(1.1,w.deadT*1.6):0)+Math.sin(w.bob*2)*.035*w.mv}function Pf(){let i=rs(),t=Ue[i.id];if(i.mag<=0){zt.empty(),w.fireCd=.25,pc();return}i.mag--,w.fireCd=60/t.rpm,w.kick=Math.min(1.6,w.kick+1),w.heat=Math.min(1,w.heat+.12),zt.shot(t.snd),Y_(Fa),oc.set(w.x,Cf(),w.z),Oa.set(Math.cos(w.yaw),0,-Math.sin(w.yaw)),lc.crossVectors(Oa,Fa).normalize(),Oa.crossVectors(Fa,lc).normalize();let e=t.spread*(1+w.mv*.9+w.heat*.8),n=Fa.clone();ke.updateMatrixWorld(!0),w.gun.userData.muzzle.getWorldPosition(cc),w.gun.userData.eject.getWorldPosition(yf);let s=new Map,r=0;for(let a=0;a<t.pellets;a++){let o=$(Xe),c=Math.sqrt(Math.random())*e,l=Fa.clone().copy(n).addScaledVector(Oa,Math.cos(o)*c).addScaledVector(lc,Math.sin(o)*c).normalize(),h=je.rayHit(oc,l,t.range),u=Wt.ray(oc,l,t.range),d=t.range,f=null,m=null;h&&(!u||h.t<u.t)?(d=h.t,m=h):u&&(d=u.t,f=u.n);let v=new I().copy(l).multiplyScalar(d).add(oc);if((a<(t.pellets>1?3:1)||ve.tier>0)&&ve.tracer(cc,v,t.pellets>1?.006:.011),m){let g=s.get(m.z)||{dmg:0,head:!1,p:v,n:l.clone().negate()},p=t.pellets>1?we(1.25-m.t/16,.25,1):1;g.dmg+=t.dmg*(m.head?t.head:1)*p,g.head=g.head||m.head,g.p=v,s.set(m.z,g)}else f&&r<4&&(r++,qh.set(f.x,f.y,f.z),ve.sparks(v,qh,7),ve.dust(v,qh,2))}if(ns.intensity=55,mc.intensity=6,nt.muzzleT=.06,pi.visible=!0,pi.material.rotation=$(Xe),pi.scale.setScalar($(.25,.42)*(t.id==="shotgun"?1.4:1)),ve.flash(cc,n),ve.smoke(cc,n,1),ve.maxCas){let a=new I().copy(Oa).multiplyScalar($(1.2,2.4)).addScaledVector(lc,$(1.2,2.2)).addScaledVector(n,$(-.3,.5));(i.id!=="shotgun"||Math.random()<0)&&ve.casing(yf,a)}w.rP+=t.kick*$(.85,1.15),w.rY+=$(-1,1)*t.kick*.45,w.shake=Math.min(1,w.shake+t.shake*.5),t.perShell===!0&&i.mag>0&&setTimeout(()=>zt.pump(),260);for(let[a,o]of s){let c=je.damage(a,o.dmg,o.head,o.p,o.n);if(!c)continue;let l=nt.double>0?2:1;zt.zhit($h(a.pos),o.head),ve.blood(o.p,o.n,o.head?14:8),ve.sparks(o.p,o.n,2);let h=10*l,u=ot("hitm");u.classList.remove("on","kill"),u.offsetWidth,u.classList.add("on"),zt.tick(!1),c.killed&&(h=(o.head?100:a.value)*l,w.kills++,nt.kills++,o.head&&w.heads++,u.classList.add("kill"),zt.tick(!0),zt.zdie($h(a.pos),.5),ve.blood(o.p,o.n,26,1.4),ve.dust(new I(a.pos.x,.3,a.pos.z),{x:0,y:1,z:0},5),w.shake=Math.min(1,w.shake+.1),Z_(a),If(a)),setTimeout(()=>u.classList.remove("on"),140),w.pts+=h,Kh("+"+h,o.head&&c.killed)}i.mag===0&&!w.reloadT&&setTimeout(()=>nt.state==="playing"&&pc(),220)}var $h=i=>{let t=i.x-w.x,e=i.z-w.z,n=Math.hypot(t,e)||1;return(t*Math.cos(w.yaw)-e*Math.sin(w.yaw))/n};function Z_(i){nt.round<2||nt.drops>=2||nt.time-nt.lastDrop<18||Math.random()<.05&&Qh(wn(["ammo","double","nuke"]),i.pos.x,i.pos.z)}var Di={ammo:{name:"FULL MAGS",col:[.3,.7,2.4],sub:"All ammo refilled",hex:"#6bb8ff"},double:{name:"2\xD7 CASH",col:[3,2.2,.4],sub:"Double points for 30s",hex:"#ffd36b"},nuke:{name:"KABOOM",col:[3,.4,.4],sub:"Every zombie goes down",hex:"#ff6b6b"},health:{name:"MED KIT",col:[.25,2.6,.9],sub:"+50% health",hex:"#4dffb0"}};function Qh(i,t,e){let n=Di[i].col,s=new Yt;s.position.set(t,1,e);let r=i==="health",a;if(r){let d=new Pe({color:new pt(...n),toneMapped:!1});a=new Yt,a.add(new At(new ee(.46,.14,.14),d),new At(new ee(.14,.46,.14),d),new At(new ee(.14,.14,.46),d)),a.traverse(f=>f.userData.noAO=!0)}else a=new At(new Jr(.28,0),new Pe({color:new pt(...n),toneMapped:!1}));a.userData.noAO=!0;let o=document.createElement("canvas");o.width=256,o.height=64;let c=o.getContext("2d");c.font="900 40px system-ui, sans-serif",c.textAlign="center",c.fillStyle=Di[i].hex,c.shadowColor=Di[i].hex,c.shadowBlur=14,c.fillText(Di[i].name,128,44);let l=new bi(new ni({map:new Gn(o),transparent:!0,depthWrite:!1,fog:!1}));l.scale.set(1.5,.375,1),l.position.y=.6,l.userData.noAO=!0;let h=new bi(new ni({map:yr.glow,color:new pt(n[0]*.55,n[1]*.55,n[2]*.55),blending:nn,depthWrite:!1,transparent:!0}));h.scale.setScalar(1.25),h.userData.noAO=!0;let u=new At(new pn(.12,.12,12,8,1,!0),new Pe({color:new pt(n[0]*.3,n[1]*.3,n[2]*.3),transparent:!0,opacity:.35,blending:nn,depthWrite:!1}));u.position.y=5,u.userData.noAO=!0,s.add(a,l,h,u),sn.add(s),nt.ups.push({type:i,g:s,core:a,label:l,t:r?k_:28,x:t,z:e}),r?nt.lastMed=nt.time:(nt.drops++,nt.lastDrop=nt.time),zt.spawnPower()}function tu(){return nt.state==="playing"&&!w.dead&&w.hp<=w.maxHp*Ef&&nt.time-nt.lastMed>=wf&&!nt.ups.some(i=>i.type==="health")}function If(i){tu()&&Qh("health",i.pos.x,i.pos.z)}function Df(i){if(i.type==="health"){let e=w.maxHp*Af,n=w.hp;w.hp=Math.min(w.maxHp,w.hp+e),w.lastHit=Math.max(w.lastHit,nt.time-1),zt.medkit(),Ga(Di.health.name,"+"+Math.round(w.hp-n)+" health"),Kh("+"+Math.round(w.hp-n)+" HP","heal"),sn.remove(i.g),ve.glowBurst(new I(i.x,1,i.z),...Di.health.col.map(s=>s*.7),24,4);return}zt.power(i.type);let t=0;if(Ga(Di[i.type].name,Di[i.type].sub),i.type==="ammo")for(let e of w.slots)e&&(e.mag=Ue[e.id].mag,e.reserve=Ue[e.id].reserve);else if(i.type==="double")nt.double=30;else if(i.type==="nuke"){let e=je.killAll();for(let n of e)ve.blood(new I(n.pos.x,1.2,n.pos.z),{x:0,y:1,z:0},22,1.4),ve.glowBurst(new I(n.pos.x,1.2,n.pos.z),3,1.5,.4,10,5);w.pts+=400*(nt.double>0?2:1),zt.boom(),w.shake=1,ot("fx-flash").style.transition="none",ot("fx-flash").style.opacity=.85,requestAnimationFrame(()=>{ot("fx-flash").style.transition="opacity 1.2s",ot("fx-flash").style.opacity=0}),nt.kills+=e.length,w.kills+=e.length}sn.remove(i.g),ve.glowBurst(new I(i.x,1,i.z),...Di[i.type].col.map(e=>e*.7),24,4)}var Rs={};function J_(i){if(!Rs[i]){let t=wa(i,!1);t.scale.setScalar(1.6),t.rotation.y=0,t.visible=!1,Wt.crate.hold.add(t),Rs[i]=t}return Rs[i]}function $_(){let i=Wt.crate;if(i.state==="idle"){if(w.pts<i.price){zt.deny(),As("Not enough points");return}w.pts-=i.price,zt.cash(),zt.open(),zt.jingle(4),i.state="roll",i.t=0,i.pick=wn(Ea.filter(t=>!w.slots.some(e=>e&&e.id===t)).concat(["smg"].filter(()=>!1))),i.pick=i.pick||wn(Ea)}else i.state==="ready"&&(jh(i.weapon),zt.cash(),zt.click(0,2e3,.5),Ga(Ue[i.weapon].name.toUpperCase()),eu())}function eu(){let i=Wt.crate;i.state="idle",i.t=0;for(let t in Rs)Rs[t].visible=!1;i.model=null}function K_(i){let t=Wt.crate,e=t.state==="idle"?0:-1.25;if(t.lid.rotation.x+=(e-t.lid.rotation.x)*Math.min(1,i*6),t.state==="roll"){t.t+=i;let n=Math.floor(t.t/.14)%Ea.length,s=t.t>3.6?t.pick:Ea[n];for(let a in Rs)Rs[a].visible=!1;let r=J_(s);r.visible=!0,t.model=r,t.t>3.6&&(t.state="ready",t.weapon=t.pick,t.t=0,zt.power("ammo"))}else t.state==="ready"&&(t.t+=i,t.t>9&&(zt.open(),eu(),As("The toolbox slammed shut")))}function j_(i){return Math.round(6+i*2.3+i*i*.12)}function Mf(i){nt.round=i,nt.toSpawn=j_(i),nt.brutes=i>=5?i%5===0?Math.min(4,1+(i/5|0)):i>=7?1:0:0,nt.phase="round",nt.spawnT=1.5,nt.drops=0,zt.round(i),Ga("ROUND "+i,i===1?"Board up. Hold the yard.":"They are faster this time");let t=ot("roundNum");t.classList.remove("pulse"),t.offsetWidth,t.classList.add("pulse")}function Q_(){return Wt.windows.filter(i=>i.area==="A"||Wt.door.open)}function tv(i){if(nt.phase!=="round"||nt.toSpawn<=0||(nt.spawnT-=i,nt.spawnT>0))return;if(je.alive>=je.max){nt.spawnT=.3;return}let t=Q_();t.sort((s,r)=>(s.c.x-w.x)**2+(s.c.z-w.z)**2-((r.c.x-w.x)**2+(r.c.z-w.z)**2));let e=Math.random()<.6?t[Math.min(t.length-1,Math.random()*2|0)]:wn(t),n=nt.brutes>0&&nt.toSpawn<=nt.brutes;je.spawn(e,nt.round,n)&&nt.toSpawn--,nt.spawnT=Math.max(.35,2-nt.round*.13)*$(.7,1.2)}function Lf(){let i=null,t=(n,s,r)=>{s<r&&(!i||s<i.d)&&(i={...n,d:s})};for(let n of Wt.windows)n.count<6&&t({type:"win",w:n},Math.hypot(w.x-n.in.x,w.z-n.in.z),2.1);for(let n of Wt.buys)t({type:"buy",b:n},Math.hypot(w.x-n.pos.x,w.z-n.pos.z),1.9);Wt.door.open||t({type:"door"},Math.hypot(w.x-Wt.door.pos.x,w.z-(hi+1)),3.4);let e=Wt.crate;return(e.state==="idle"||e.state==="ready")&&t({type:"crate"},Math.hypot(w.x-e.x,w.z-e.z),2.2),i}function Nf(i,t,e){if(i.type==="win"){t&&(nt.repairT+=e,nt.repairT>.5&&(nt.repairT=0,Wt.addPlank(i.w)&&(zt.repair(),w.pts+=10*(nt.double>0?2:1),Kh("+10"))));return}if(Gt.interactEdge)if(i.type==="buy"){let n=w.slots.find(r=>r&&r.id===i.b.id),s=n?Math.floor(i.b.price/2):i.b.price;if(n&&n.mag===Ue[n.id].mag&&n.reserve===Ue[n.id].reserve){As("Ammo already full");return}if(w.pts<s){zt.deny(),As("Not enough points");return}w.pts-=s,zt.cash(),jh(i.b.id)}else if(i.type==="door"){if(w.pts<Wt.door.price){zt.deny(),As("Not enough points");return}w.pts-=Wt.door.price,zt.cash(),zt.door(),Wt.door.open=!0,Ga("GATE OPEN","The back lot awaits")}else i.type==="crate"&&$_()}function ev(i){if(!i)return is("");let t="<kbd>E</kbd>",e=n=>`<span class="cost" style="${w.pts<n?"color:#ff5a6e":""}">${n}</span>`;if(i.type==="win")is(`${t}Hold to repair barricade<span class="prog"><i style="width:${Math.round(i.w.count/6*100)}%"></i></span>`);else if(i.type==="buy"){let n=w.slots.find(s=>s&&s.id===i.b.id);is(n?`${t}Refill ${i.b.name}${e(Math.floor(i.b.price/2))}`:`${t}Buy ${i.b.name}${e(i.b.price)}`)}else i.type==="door"?is(`${t}Open the gate${e(Wt.door.price)}`):i.type==="crate"&&is(Wt.crate.state==="ready"?`${t}Take ${Ue[Wt.crate.weapon].name}`:`${t}Lucky Toolbox${e(Wt.crate.price)}`)}function nv(i){let t=Gt.f,e=Gt.s,n=0,s=0;if(t||e){let l=Math.sin(w.yaw),h=Math.cos(w.yaw);n=-l*t+h*e,s=-h*t-l*e;let u=Math.hypot(n,s)||1;n/=u,s/=u}let r=Math.min(1,Math.hypot(t,e));w.sprint=(Gt.sprint||r>.92&&Qe)&&t>.3&&w.reloadT<=0;let a=(w.sprint?6.6:4.5)*(w.switchT>0?.9:1)*r,o=Math.min(1,i*10);w.vx+=(n*a-w.vx)*o,w.vz+=(s*a-w.vz)*o,w.x+=w.vx*i,w.z+=w.vz*i,Wt.resolve(w,.42);let c=Math.hypot(w.vx,w.vz);w.mv=we(c/4.5,0,1.4),w.bob+=c*i*1.7}function iv(i){w.fireCd>0&&(w.fireCd-=i),w.switchT>0&&(w.switchT-=i),w.heat=Math.max(0,w.heat-i*1.4),w.kick=Math.max(0,w.kick-i*8);let t=rs(),e=Ue[t.id];if(w.reloadT>0){let n=w.reloadT;w.reloadT-=i,e.perShell?(w.shellT-=i,w.shellT<=0&&t.mag<e.mag&&t.reserve>0&&(t.mag++,t.reserve--,w.shellT=e.reload,zt.shell()),Gt.fire&&t.mag>0?w.reloadT=0:(t.mag>=e.mag||t.reserve<=0)&&(w.reloadT=0,zt.pump())):w.reloadT<=0&&q_()}Gt.fire&&w.fireCd<=0&&w.switchT<=0&&(w.reloadT<=0||e.perShell)&&!w.sprintBlock&&((e.auto||!w.fired)&&Pf(),w.fired=!0),Gt.fire||(w.fired=!1),Gt.reload&&(Gt.reload=!1,pc())}function Sf(i,t){w.rP*=Math.exp(-i*9),w.rY*=Math.exp(-i*9),w.shake=Math.max(0,w.shake-i*2.2),w.dmg=Math.max(0,w.dmg-i*.8);let e=w.shake*w.shake,n=(Math.sin(t*61)+Math.sin(t*37.3))*.5,s=(Math.sin(t*53.1)+Math.cos(t*41))*.5,r=w.dead?Math.min(1,w.deadT*1.4):0,a=we(w.vx*Math.cos(w.yaw)-w.vz*Math.sin(w.yaw),-6,6);ke.position.set(w.x+n*e*.06,Cf()+s*e*.05,w.z),ke.rotation.set(we(w.pitch+w.rP+s*e*.035-r*.4,-1.5,1.5),w.yaw+w.rY+n*e*.035,-a*.0045+n*e*.02+r*.9),ke.updateMatrixWorld(!0),Cs.matrix.copy(ke.matrixWorld);let o=w.gun;if(!o)return;let c=o.userData.base,l=w.kick,h=l*.05,u=0,d=0,f=0,m=0,v=l*.04;if(f+=Math.cos(w.bob)*.006*w.mv,m+=Math.abs(Math.sin(w.bob))*.008*w.mv*-1,f+=-we(w.sx,-1,1)*.02,m+=we(w.sy,-1,1)*.02,w.sprint&&(u+=.45,h-=.25,m-=.05,f-=.03),w.reloadT>0&&!Ue[rs().id].perShell){let A=1-w.reloadT/w.reloadTot,y=Math.sin(A*Math.PI);h-=y*.5,m-=y*.12,d+=y*.35,f-=y*.04}else if(w.reloadT>0){let A=Math.abs(Math.sin(t*6))*.5+.3;h-=.25,m-=.05,u+=.1*A}if(w.switchT>0){let A=w.switchT/.32;m-=Math.sin(we(A,0,1)*Math.PI/2)*.35,h-=A*.5}let g=1-Math.exp(-i*18);o.userData.rx=li(o.userData.rx||0,h,g),o.userData.ry=li(o.userData.ry||0,u,g),o.userData.rz=li(o.userData.rz||0,d,g),o.rotation.set(o.userData.rx,o.userData.ry,o.userData.rz),o.position.set(c.x+f,c.y+m,c.z+v),w.sx*=Math.exp(-i*8),w.sy*=Math.exp(-i*8),nt.muzzleT>0&&(nt.muzzleT-=i,nt.muzzleT<=0&&(pi.visible=!1)),ns.intensity*=Math.exp(-i*40),ns.intensity<.5&&(ns.intensity=0),mc.intensity=ns.intensity>0?ns.intensity/9:0;let p=ot("cross"),b=6+Ue[rs().id].spread*650*(1+w.mv*.9+w.heat*.8)*.5;p._sp!==Math.round(b)&&(p._sp=Math.round(b),p.style.setProperty("--s",p._sp+"px"),p.children[0].style.left=-(p._sp+9)+"px",p.children[0].style.top="-1px",p.children[1].style.left=p._sp+"px",p.children[1].style.top="-1px",p.children[2].style.top=-(p._sp+9)+"px",p.children[2].style.left="-1px",p.children[3].style.top=p._sp+"px",p.children[3].style.left="-1px")}function sv(i){if(w.dead||nt.state!=="playing")return;w.hp-=i.dmg,w.lastHit=nt.time,w.dmg=Math.max(w.dmg,.65+.35*(1-Math.max(0,w.hp)/w.maxHp)),w.shake=1,zt.hurt();let t=i.pos.x-w.x,e=i.pos.z-w.z,n=Math.atan2(t,-e)- -w.yaw,s=ot("fx-dir");s.style.display="block",s.firstElementChild.style.transform=`rotate(${n*180/Math.PI}deg)`,s.style.opacity=1,setTimeout(()=>s.style.opacity=0,500),setTimeout(()=>s.style.display="none",900),w.hp<=0&&Uf()}function Uf(){w.hp=0,w.dead=!0,w.deadT=0,zt.over(),Gt.fire=!1,ot("hud").classList.add("hud-dead"),is(""),document.pointerLockElement&&document.exitPointerLock?.()}function nu(){try{return JSON.parse(localStorage.getItem("vwz_scores")||"[]")}catch{return[]}}function rv(i){let t=nu();t.push(i),t.sort((e,n)=>n.round-e.round||n.pts-e.pts);try{localStorage.setItem("vwz_scores",JSON.stringify(t.slice(0,5)))}catch{}return t.slice(0,5)}var za=null;function iu(){oi.top().then(i=>{oi.render(ot("globalList"),i,localStorage.getItem("vwfest_nick")),oi.render(ot("oGlobal"),i,localStorage.getItem("vwfest_nick"))})}function av(){za={round:Math.max(1,nt.round),pts:w.pts,kills:w.kills},ot("nick").value=localStorage.getItem("vwfest_nick")||"",ot("postMsg").textContent="",ot("postMsg").className="postMsg",ot("fPost").classList.toggle("hidden",!oi.hasToken()),ot("bPost").disabled=!1,oi.hasToken()||(ot("postMsg").textContent="Leaderboard offline: score saved on this device."),iu()}ot("fPost").onsubmit=i=>{if(i.preventDefault(),!za)return;let t=ot("nick").value.trim();ot("bPost").disabled=!0;try{localStorage.setItem("vwfest_nick",t)}catch{}oi.submit(t,za.round,za.pts,za.kills).then(e=>{e.ok?(ot("fPost").classList.add("hidden"),ot("postMsg").className="postMsg ok",ot("postMsg").textContent="Posted! You are #"+e.rank+" on the survivor board.",oi.render(ot("oGlobal"),e.top,t),oi.render(ot("globalList"),e.top,t)):(ot("postMsg").textContent=e.error||"Could not post.",ot("bPost").disabled=!1)})};function su(i,t){i.innerHTML=t.length?t.map((e,n)=>`<li>Round <b>${e.round}</b> \xB7 ${e.kills} kills \xB7 ${e.pts.toLocaleString()} pts</li>`).join(""):'<li class="muted">No runs yet \u2014 be the first.</li>'}function ov(){Object.assign(w,{x:0,z:12,yaw:0,pitch:0,vx:0,vz:0,hp:Va,lastHit:-99,pts:500,kills:0,heads:0,rP:0,rY:0,shake:0,dmg:0,cur:0,fireCd:0,reloadT:0,switchT:0,kick:0,dead:!1,deadT:0,slots:[fc("pistol"),null]}),Object.assign(nt,{time:0,runTime:0,round:0,toSpawn:0,phase:"wait",interT:2.6,drops:0,double:0,kills:0,repairT:0,lastMed:-99}),je.reset(),ve.reset();for(let i of nt.ups)sn.remove(i.g);nt.ups=[],eu(),Wt.crate.lid.rotation.x=0;for(let i of Wt.windows)for(;i.count<6;)Wt.addPlank(i);_e.hp=_e.pts=_e.mag=_e.res=-1,_e.name=_e.alt="",_e.round=-1,ot("hud").classList.remove("hud-dead"),Wt.door.open&&(Wt.door.open=!1,Wt.door.t=0,Wt.door.mesh.position.y=0,Wt.door.col.off=!1),Wa()}function Xa(){if(zt.init(),ov(),oi.start(),nt.state="playing",Wa(),["menu","over","pause"].forEach(i=>ot(i).classList.add("hidden")),ot("hud").classList.remove("hidden"),ot("touch").classList.toggle("hidden",!Qe),Yn.visible=An>0&&w.flashlight,uc=3,Ba=0,hc=0,!Qe&&!Li.has("test"))try{ss.requestPointerLock?.()?.catch?.(()=>{})}catch{}else if(Qe)try{document.documentElement.requestFullscreen?.().catch(()=>{}),screen.orientation?.lock?.("landscape").catch(()=>{})}catch{}As("Hold E at windows to repair \xB7 Open the gate for new guns")}function qa(){nt.state!=="playing"||w.dead||(nt.state="paused",ot("pause").classList.remove("hidden"),Gt.fire=!1,Gt.f=Gt.s=0,document.pointerLockElement&&document.exitPointerLock?.(),is(""))}function ru(){if(nt.state==="paused"&&(nt.state="playing",ot("pause").classList.add("hidden"),zt.init(),!Qe&&!Li.has("test")))try{ss.requestPointerLock?.()?.catch?.(()=>{})}catch{}}function au(){nt.state="menu",["pause","over"].forEach(i=>ot(i).classList.add("hidden")),ot("menu").classList.remove("hidden"),ot("hud").classList.add("hidden"),ot("touch").classList.add("hidden"),su(ot("scoreList"),nu()),iu(),je.reset(),w.gun&&(w.gun.visible=!1),is(""),w.dead=!1,pi.visible=!1}function lv(){nt.state="over";let i=rv({round:Math.max(1,nt.round),kills:w.kills,pts:w.pts,t:Date.now()});ot("oRound").textContent=Math.max(1,nt.round),ot("oKills").textContent=w.kills,ot("oHeads").textContent=w.heads,ot("oPts").textContent=w.pts.toLocaleString();let t=Math.floor(nt.runTime);ot("oTime").textContent=Math.floor(t/60)+":"+String(t%60).padStart(2,"0"),ot("oMsg").textContent=nt.round>=10?"Legendary run. The yard remembers.":nt.round>=5?"Solid stand. They got you in the end.":"The dead took the yard. Try again.",su(ot("oScores"),i),av(),ot("over").classList.remove("hidden"),ot("hud").classList.add("hidden"),ot("touch").classList.add("hidden"),w.gun&&(w.gun.visible=!1)}var Yh={x:0,z:8},bf={groan:(i,t)=>zt.groan($h(i.pos),we(1-t/40,.1,.8)*.8,i.brute?.6:i.runner?1.25:$(.9,1.1),i.brute?1.4:$(.8,1.3)),plank:(i,t)=>{zt.plank(!0),ve.dust(new I(i.c.x+i.n.x*.3,1.4,i.c.z+i.n.z*.3),i.n,6,[.5,.4,.3])},hitPlayer:sv},cv={groan:()=>{},plank:()=>{},hitPlayer:()=>{}};function ou(i){nt.time+=i;let t=nt.time;if(nt.state==="menu"){nt.orbit+=i*.12;let n=nt.orbit,s=9.5;if(ke.position.set(Math.sin(n)*s,2.6+Math.sin(n*.7)*.4,6+Math.cos(n)*s*.8),ke.lookAt(0,1.8,3),ke.rotation.z=0,nt.menuSpawn-=i,nt.menuSpawn<=0&&je.alive<5){nt.menuSpawn=2.2;let r=je.spawn(wn(Wt.windows.filter(a=>a.area==="A")),2);r&&(r.state="chase",r.pos.set($(-14,14),0,$(-18,-4)),r.speed=$(.9,1.5),r.dmg=0)}Yh.x=0,Yh.z=6,je.update(i,t,Yh,Wt.door,cv),Wt.update(i,t,{x:ke.position.x,z:ke.position.z}),ve.update(i),Ii.center={x:0,z:6},ws.center=Ii.center,Ii.ps.update(i),ws.ps.update(i),Cs.visible=!1,Yn.visible=!1;return}if(Cs.visible=!0,Yn.visible=An>0&&w.flashlight&&!w.dead,nt.state==="paused")return;if(nt.state==="over"){ve.update(i);return}if(nt.runTime+=i,w.dead){w.deadT+=i,je.update(i,t,w,Wt.door,{...bf,hitPlayer:()=>{}}),Wt.update(i,t,w),ve.update(i),Sf(i,t),w.deadT>2.4&&lv();return}nv(i),iv(i),w.hp<w.maxHp&&t-w.lastHit>B_&&(w.hp=Math.min(w.maxHp,w.hp+z_*i)),w.hp<w.maxHp*Ha&&t-nt.healBeat>.85&&(nt.healBeat=t,zt.heart()),nt.phase==="wait"?(nt.interT-=i,nt.interT<=0&&Mf(1)):nt.phase==="round"?(tv(i),nt.toSpawn<=0&&je.alive<=0&&(nt.phase="inter",nt.interT=7)):nt.phase==="inter"&&(nt.interT-=i,nt.interT<=0&&Mf(nt.round+1)),je.update(i,t,w,Wt.door,bf),Wt.update(i,t,w),Ii.center={x:w.x,z:w.z},ws.center=Ii.center,Ii.ps.update(i),ws.ps.update(i),ve.update(i),K_(i),nt.double>0&&(nt.double-=i);for(let n=nt.ups.length-1;n>=0;n--){let s=nt.ups[n];s.t-=i,s.core.rotation.y+=i*2.5,s.type!=="health"&&(s.core.rotation.x+=i*1.1),s.g.position.y=1+Math.sin(t*3+n)*.15,s.g.visible=s.t>5||Math.sin(t*16)>-.2,Math.hypot(s.x-w.x,s.z-w.z)<1.5?(Df(s),nt.ups.splice(n,1)):s.t<=0&&(sn.remove(s.g),nt.ups.splice(n,1))}let e=Lf();ev(e),e?Nf(e,Gt.interact,i):nt.repairT=0,Gt.interactEdge=!1,Sf(i,t),X_()}var Tf=performance.now();function Ff(i){requestAnimationFrame(Ff);let t=Math.min(.25,(i-Tf)/1e3);Tf=i,W_(t),ou(Math.min(t,.05)*(nt.state==="menu"?.6:1));let e=nt.state==="playing"&&w.hp<w.maxHp*Ha?1-w.hp/(w.maxHp*Ha):0;vr.render(t,nt.time,we(w.dmg,0,1),e)}function hv(){vr.render(.016,nt.time,we(w.dmg,0,1),0)}var Mn={};function lu(){Gt.f=(Mn.KeyW||Mn.ArrowUp?1:0)-(Mn.KeyS||Mn.ArrowDown?1:0),Gt.s=(Mn.KeyD||Mn.ArrowRight?1:0)-(Mn.KeyA||Mn.ArrowLeft?1:0),Gt.sprint=!!(Mn.ShiftLeft||Mn.ShiftRight)}addEventListener("keydown",i=>{i.target&&i.target.tagName==="INPUT"||i.repeat||(Mn[i.code]=!0,nt.state==="playing"&&!w.dead?(i.code==="KeyR"&&(Gt.reload=!0),i.code==="KeyE"&&(Gt.interact=!0,Gt.interactEdge=!0),i.code==="Digit1"&&_r(0),i.code==="Digit2"&&_r(1),i.code==="KeyQ"&&_r(1-w.cur),i.code==="KeyF"&&(w.flashlight=!w.flashlight,qn.visible=w.flashlight,Yn.visible=An>0&&w.flashlight,zt.click(0,1200,.4)),i.code==="KeyP"&&qa()):nt.state==="paused"&&i.code==="KeyP"&&ru(),i.code==="KeyM"&&zf(),i.code==="Enter"&&(nt.state==="menu"||nt.state==="over")&&Xa(),lu())});addEventListener("keyup",i=>{Mn[i.code]=!1,i.code==="KeyE"&&(Gt.interact=!1),lu()});addEventListener("blur",()=>{for(let i in Mn)Mn[i]=!1;lu(),Gt.fire=!1,Gt.interact=!1});var Of=!1;document.addEventListener("pointerlockerror",()=>{Of=!0});addEventListener("mousemove",i=>{nt.state!=="playing"||w.dead||document.pointerLockElement!==ss&&!Of&&!Li.has("test")||Bf(i.movementX,i.movementY,.0022)});function Bf(i,t,e){w.yaw-=i*e,w.pitch=we(w.pitch-t*e,-1.45,1.45),w.sx+=i*.01,w.sy+=t*.01}ss.addEventListener("mousedown",i=>{i.button===0&&nt.state==="playing"&&(!Qe&&!document.pointerLockElement&&!Li.has("test")&&ss.requestPointerLock?.(),Gt.fire=!0)});addEventListener("mouseup",i=>{i.button===0&&(Gt.fire=!1)});addEventListener("wheel",i=>{nt.state==="playing"&&Math.abs(i.deltaY)>4&&_r(1-w.cur)},{passive:!0});addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&nt.state==="playing"&&!w.dead&&!Qe&&!Li.has("test")&&qa()});document.addEventListener("visibilitychange",()=>{document.hidden&&qa()});if(Qe){let i=null,t=null,e=0,n=0,s=ot("stick"),r=ot("knob"),a={x:0,y:0},o=ot("touch");o.addEventListener("touchstart",u=>{for(let d of u.changedTouches){if(u.target.closest("button"))continue;let f=s.getBoundingClientRect();i===null&&d.clientX<innerWidth*.45?(i=d.identifier,a={x:f.left+f.width/2,y:f.top+f.height/2},c(d)):t===null&&(t=d.identifier,e=d.clientX,n=d.clientY)}u.preventDefault()},{passive:!1});let c=u=>{let d=u.clientX-a.x,f=u.clientY-a.y,m=Math.hypot(d,f),v=55;m>v&&(d=d/m*v,f=f/m*v),r.style.transform=`translate(${d}px,${f}px)`,Gt.s=d/v,Gt.f=-f/v,Math.hypot(Gt.s,Gt.f)<.12&&(Gt.s=Gt.f=0)};o.addEventListener("touchmove",u=>{for(let d of u.changedTouches)d.identifier===i?c(d):d.identifier===t&&(nt.state==="playing"&&!w.dead&&Bf(d.clientX-e,d.clientY-n,.0048),e=d.clientX,n=d.clientY);u.preventDefault()},{passive:!1});let l=u=>{for(let d of u.changedTouches)d.identifier===i?(i=null,r.style.transform="",Gt.s=Gt.f=0):d.identifier===t&&(t=null)};o.addEventListener("touchend",l),o.addEventListener("touchcancel",l);let h=(u,d,f)=>{let m=ot(u);m.addEventListener("touchstart",g=>{m.classList.add("down"),d(),g.preventDefault(),g.stopPropagation()},{passive:!1});let v=g=>{m.classList.remove("down"),f?.(),g.preventDefault()};m.addEventListener("touchend",v),m.addEventListener("touchcancel",v)};h("bFire",()=>Gt.fire=!0,()=>Gt.fire=!1),h("bReload",()=>Gt.reload=!0),h("bUse",()=>{Gt.interact=!0,Gt.interactEdge=!0},()=>Gt.interact=!1),h("bSwap",()=>_r(1-w.cur))}function zf(){zt.setMuted(!zt.muted);try{localStorage.setItem("vwz_mute",zt.muted?"1":"0")}catch{}kf()}function kf(){ot("btnMute").textContent=zt.muted?"\u{1F507}":"\u{1F50A}",ot("btnMute2").textContent=zt.muted?"\u{1F507} Sound off":"\u{1F50A} Sound on"}ot("btnMute").onclick=ot("btnMute2").onclick=i=>{i.stopPropagation(),zf()};ot("btnPause").onclick=i=>{i.stopPropagation(),qa()};ot("btnPlay").onclick=Xa;ot("btnAgain").onclick=Xa;ot("btnMenu").onclick=au;ot("btnResume").onclick=ru;ot("btnQuit").onclick=au;ot("btnPlay").addEventListener("touchend",i=>{i.preventDefault(),Xa()});ot("qSeg").addEventListener("click",i=>{let t=i.target.closest("button");if(t){fi=t.dataset.q;try{localStorage.setItem("vwz_q",fi)}catch{}[...ot("qSeg").querySelectorAll("button")].forEach(e=>e.classList.toggle("on",e===t)),gc(fi==="high"?2:fi==="medium"?1:fi==="low"||Qe?0:2)}});[...ot("qSeg").querySelectorAll("button")].forEach(i=>i.classList.toggle("on",i.dataset.q===fi));w.slots=[fc("pistol"),null];Wa();gc(An);kf();su(ot("scoreList"),nu());iu();je.max=An>0?26:16;for(let i=0;i<40;i++)ou(.05);requestAnimationFrame(()=>{vr.render(.016,0,0,0),ot("loading").classList.add("done"),setTimeout(()=>ot("loading").remove(),800)});requestAnimationFrame(Ff);window.__game={PLAYER_MAX_HP:Va,MEDKIT_HP_FRAC:Ef,MEDKIT_COOLDOWN:wf,MEDKIT_HEAL_FRAC:Af,medKitReady:tu,medKitOnKill:If,G:nt,P:w,world:Wt,zombies:je,fx:ve,input:Gt,tick:ou,startGame:Xa,shoot:Pf,applyTier:gc,switchTo:_r,startReload:pc,pause:qa,resume:ru,toMenu:au,giveWeapon:jh,spawnPower:Qh,pickPower:Df,interact:Nf,findFocus:Lf,die:Uf,get tier(){return An},cam:ke,renderer:Sn,scene:sn,WEAPONS:Ue,sfx:zt,renderOnce:hv,aimAt(i,t=!1){let e=i.pos.x-w.x,n=i.pos.z-w.z,s=(t?1.66:1)*i.scale-1.7;w.yaw=Math.atan2(-e,-n),w.pitch=Math.atan2(s,Math.hypot(e,n)),w.rP=w.rY=0},isTouch:Qe};})();
