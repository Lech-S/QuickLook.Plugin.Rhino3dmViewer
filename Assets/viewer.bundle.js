var Li={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pu=0,Pc=1,mu=2;var so=1,Ga=2,Js=3,Ni=0,Jt=1,sn=2,Xn=0,Ks=1,Lc=2,Dc=3,Nc=4,gu=5;var Qi=100,_u=101,xu=102,vu=103,yu=104,Su=200,Mu=201,bu=202,wu=203,Uc=204,Fc=205,Eu=206,Tu=207,Au=208,Cu=209,Ru=210,Iu=211,Pu=212,Lu=213,Du=214,fa=0,da=1,pa=2,Os=3,ma=4,ga=5,_a=6,xa=7,Wa=0,Nu=1,Uu=2,On=0,Oc=1,Bc=2,zc=3,ro=4,kc=5,Vc=6,Hc=7;var Gc=300,Ui=301,es=302,js=303,Xa=304,oo=306,Xi=1e3,Zt=1001,va=1002,Wt=1003,Fu=1004;var ao=1005;var At=1006,Ya=1007;var fi=1008;var dn=1009,Wc=1010,Xc=1011,Qs=1012,qa=1013,Bn=1014,rn=1015,Kt=1016,Za=1017,$a=1018,er=1020,Yc=35902,qc=35899,Zc=1021,$c=1022,Ut=1023,Gn=1026,Fi=1027,di=1028,Ja=1029,pn=1030,Ka=1031;var ja=1033,lo=33776,co=33777,ho=33778,uo=33779,Qa=35840,el=35841,tl=35842,nl=35843,il=36196,sl=37492,rl=37496,ol=37488,al=37489,fo=37490,ll=37491,cl=37808,hl=37809,ul=37810,fl=37811,dl=37812,pl=37813,ml=37814,gl=37815,_l=37816,xl=37817,vl=37818,yl=37819,Sl=37820,Ml=37821,bl=36492,wl=36494,El=36495,Tl=36283,Al=36284,po=36285,Cl=36286;var Cr=2300,ya=2301,ha=2302,vc=2303,yc=2400,Sc=2401,Mc=2402;var Ou=3200;var mo=0,Bu=1,pi="",qt="srgb",vn="srgb-linear",Rr="linear",_t="srgb";var ua=7680;var zu=519,ku=512,Vu=513,Hu=514,Rl=515,Gu=516,Wu=517,Il=518,Xu=519,Jc=35044;var Kc="300 es",Dn=2e3,Bs=2001;function jf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}var Qf={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Fo(i,e){return new Qf[i](e)}function ed(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yu(){let i=zs("canvas");return i.style.display="block",i}var Dh={},ks=null;function Ir(...i){let e="THREE."+i.shift();ks?ks("log",e,...i):console.log(e,...i)}function qu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ye(...i){i=qu(i);let e="THREE."+i.shift();if(ks)ks("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=qu(i);let e="THREE."+i.shift();if(ks)ks("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Wi(...i){let e=i.join(" ");e in Dh||(Dh[e]=!0,Ye(...i))}function Zu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var $u={[fa]:da,[pa]:_a,[ma]:xa,[Os]:ga,[da]:fa,[_a]:pa,[xa]:ma,[ga]:Os},Nn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nh=1234567,Tr=Math.PI/180,Yi=180/Math.PI;function li(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function jc(i,e){return(i%e+e)%e}function td(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function nd(i,e,t){return i!==e?(t-i)/(e-i):0}function Ar(i,e,t){return(1-t)*i+t*e}function id(i,e,t,n){return Ar(i,e,1-Math.exp(-t*n))}function sd(i,e=1){return e-Math.abs(jc(i,e*2)-e)}function rd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function od(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ad(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ld(i,e){return i+Math.random()*(e-i)}function cd(i){return i*(.5-Math.random())}function hd(i){i!==void 0&&(Nh=i);let e=Nh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ud(i){return i*Tr}function fd(i){return i*Yi}function dd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function pd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function md(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gd(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),h=r((e+n)/2),d=o((e+n)/2),m=r((e-n)/2),u=o((e-n)/2),g=r((n-e)/2),v=o((n-e)/2);switch(s){case"XYX":i.set(a*d,c*m,c*u,a*h);break;case"YZY":i.set(c*u,a*d,c*m,a*h);break;case"ZXZ":i.set(c*m,c*u,a*d,a*h);break;case"XZX":i.set(a*d,c*v,c*g,a*h);break;case"YXY":i.set(c*g,a*d,c*v,a*h);break;case"ZYZ":i.set(c*v,c*g,a*d,a*h);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Qc={DEG2RAD:Tr,RAD2DEG:Yi,generateUUID:li,clamp:nt,euclideanModulo:jc,mapLinear:td,inverseLerp:nd,lerp:Ar,damp:id,pingpong:sd,smoothstep:rd,smootherstep:od,randInt:ad,randFloat:ld,randFloatSpread:cd,seededRandom:hd,degToRad:ud,radToDeg:fd,isPowerOfTwo:dd,ceilPowerOfTwo:pd,floorPowerOfTwo:md,setQuaternionFromProperEuler:gd,normalize:vt,denormalize:Ln},Ge=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],h=n[s+1],d=n[s+2],m=n[s+3],u=r[o+0],g=r[o+1],v=r[o+2],S=r[o+3];if(m!==S||c!==u||h!==g||d!==v){let p=c*u+h*g+d*v+m*S;p<0&&(u=-u,g=-g,v=-v,S=-S,p=-p);let _=1-a;if(p<.9995){let T=Math.acos(p),D=Math.sin(T);_=Math.sin(_*T)/D,a=Math.sin(a*T)/D,c=c*_+u*a,h=h*_+g*a,d=d*_+v*a,m=m*_+S*a}else{c=c*_+u*a,h=h*_+g*a,d=d*_+v*a,m=m*_+S*a;let T=1/Math.sqrt(c*c+h*h+d*d+m*m);c*=T,h*=T,d*=T,m*=T}}e[t]=c,e[t+1]=h,e[t+2]=d,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],h=n[s+2],d=n[s+3],m=r[o],u=r[o+1],g=r[o+2],v=r[o+3];return e[t]=a*v+d*m+c*g-h*u,e[t+1]=c*v+d*u+h*m-a*g,e[t+2]=h*v+d*g+a*u-c*m,e[t+3]=d*v-a*m-c*u-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,h=a(n/2),d=a(s/2),m=a(r/2),u=c(n/2),g=c(s/2),v=c(r/2);switch(o){case"XYZ":this._x=u*d*m+h*g*v,this._y=h*g*m-u*d*v,this._z=h*d*v+u*g*m,this._w=h*d*m-u*g*v;break;case"YXZ":this._x=u*d*m+h*g*v,this._y=h*g*m-u*d*v,this._z=h*d*v-u*g*m,this._w=h*d*m+u*g*v;break;case"ZXY":this._x=u*d*m-h*g*v,this._y=h*g*m+u*d*v,this._z=h*d*v+u*g*m,this._w=h*d*m-u*g*v;break;case"ZYX":this._x=u*d*m-h*g*v,this._y=h*g*m+u*d*v,this._z=h*d*v-u*g*m,this._w=h*d*m+u*g*v;break;case"YZX":this._x=u*d*m+h*g*v,this._y=h*g*m+u*d*v,this._z=h*d*v-u*g*m,this._w=h*d*m-u*g*v;break;case"XZY":this._x=u*d*m-h*g*v,this._y=h*g*m-u*d*v,this._z=h*d*v+u*g*m,this._w=h*d*m+u*g*v;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],h=t[2],d=t[6],m=t[10],u=n+a+m;if(u>0){let g=.5/Math.sqrt(u+1);this._w=.25/g,this._x=(d-c)*g,this._y=(r-h)*g,this._z=(o-s)*g}else if(n>a&&n>m){let g=2*Math.sqrt(1+n-a-m);this._w=(d-c)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+h)/g}else if(a>m){let g=2*Math.sqrt(1+a-n-m);this._w=(r-h)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(c+d)/g}else{let g=2*Math.sqrt(1+m-n-a);this._w=(o-s)/g,this._x=(r+h)/g,this._y=(c+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,h=t._z,d=t._w;return this._x=n*d+o*a+s*h-r*c,this._y=s*d+o*c+r*a-n*h,this._z=r*d+o*h+n*c-s*a,this._w=o*d-n*a-s*c-r*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let h=Math.acos(a),d=Math.sin(h);c=Math.sin(c*h)/d,t=Math.sin(t*h)/d,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,h=2*(o*s-a*n),d=2*(a*t-r*s),m=2*(r*n-o*t);return this.x=t+c*h+o*m-a*d,this.y=n+c*d+a*h-r*m,this.z=s+c*m+r*d-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jl.copy(this).projectOnVector(e),this.sub(Jl)}reflect(e){return this.sub(Jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jl=new V,Uh=new yn,Ke=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,c,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,h)}set(e,t,n,s,r,o,a,c,h){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],d=n[4],m=n[7],u=n[2],g=n[5],v=n[8],S=s[0],p=s[3],_=s[6],T=s[1],D=s[4],w=s[7],R=s[2],C=s[5],N=s[8];return r[0]=o*S+a*T+c*R,r[3]=o*p+a*D+c*C,r[6]=o*_+a*w+c*N,r[1]=h*S+d*T+m*R,r[4]=h*p+d*D+m*C,r[7]=h*_+d*w+m*N,r[2]=u*S+g*T+v*R,r[5]=u*p+g*D+v*C,r[8]=u*_+g*w+v*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],h=e[7],d=e[8];return t*o*d-t*a*h-n*r*d+n*a*c+s*r*h-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],h=e[7],d=e[8],m=d*o-a*h,u=a*c-d*r,g=h*r-o*c,v=t*m+n*u+s*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/v;return e[0]=m*S,e[1]=(s*h-d*n)*S,e[2]=(a*n-s*o)*S,e[3]=u*S,e[4]=(d*t-s*c)*S,e[5]=(s*r-a*t)*S,e[6]=g*S,e[7]=(n*c-h*t)*S,e[8]=(o*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*o+h*a)+o+e,-s*h,s*c,-s*(-h*o+c*a)+a+t,0,0,1),this}scale(e,t){return Wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kl.makeScale(e,t)),this}rotate(e){return Wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kl.makeRotation(-e)),this}translate(e,t){return Wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Kl=new Ke,Fh=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oh=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _d(){let i={enabled:!0,workingColorSpace:vn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=Us(s.r),s.g=Us(s.g),s.b=Us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?Rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Wi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Wi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vn]:{primaries:e,whitePoint:n,transfer:Rr,toXYZ:Fh,fromXYZ:Oh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Fh,fromXYZ:Oh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}var lt=_d();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gs,Sa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=zs("canvas")),gs.width=e.width,gs.height=e.height;let s=gs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=gs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},xd=0,Vs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jl(s[o].image)):r.push(jl(s[o]))}else r=jl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function jl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var vd=0,Ql=new V,tn=class i extends Nn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Zt,s=Zt,r=At,o=fi,a=Ut,c=dn,h=i.DEFAULT_ANISOTROPY,d=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=li(),this.name="",this.source=new Vs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ql).x}get height(){return this.source.getSize(Ql).y}get depth(){return this.source.getSize(Ql).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xi:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xi:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Gc;tn.DEFAULT_ANISOTROPY=1;var It=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,h=c[0],d=c[4],m=c[8],u=c[1],g=c[5],v=c[9],S=c[2],p=c[6],_=c[10];if(Math.abs(d-u)<.01&&Math.abs(m-S)<.01&&Math.abs(v-p)<.01){if(Math.abs(d+u)<.1&&Math.abs(m+S)<.1&&Math.abs(v+p)<.1&&Math.abs(h+g+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let D=(h+1)/2,w=(g+1)/2,R=(_+1)/2,C=(d+u)/4,N=(m+S)/4,M=(v+p)/4;return D>w&&D>R?D<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(D),s=C/n,r=N/n):w>R?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=C/s,r=M/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=N/r,s=M/r),this.set(n,s,r,t),this}let T=Math.sqrt((p-v)*(p-v)+(m-S)*(m-S)+(u-d)*(u-d));return Math.abs(T)<.001&&(T=1),this.x=(p-v)/T,this.y=(m-S)/T,this.z=(u-d)/T,this.w=Math.acos((h+g+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ma=class extends Nn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new tn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Vs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends Ma{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Pr=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ba=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var pt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,c,h,d,m,u,g,v,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,h,d,m,u,g,v,S,p)}set(e,t,n,s,r,o,a,c,h,d,m,u,g,v,S,p){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=c,_[2]=h,_[6]=d,_[10]=m,_[14]=u,_[3]=g,_[7]=v,_[11]=S,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),h=Math.sin(s),d=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){let u=o*d,g=o*m,v=a*d,S=a*m;t[0]=c*d,t[4]=-c*m,t[8]=h,t[1]=g+v*h,t[5]=u-S*h,t[9]=-a*c,t[2]=S-u*h,t[6]=v+g*h,t[10]=o*c}else if(e.order==="YXZ"){let u=c*d,g=c*m,v=h*d,S=h*m;t[0]=u+S*a,t[4]=v*a-g,t[8]=o*h,t[1]=o*m,t[5]=o*d,t[9]=-a,t[2]=g*a-v,t[6]=S+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*d,g=c*m,v=h*d,S=h*m;t[0]=u-S*a,t[4]=-o*m,t[8]=v+g*a,t[1]=g+v*a,t[5]=o*d,t[9]=S-u*a,t[2]=-o*h,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*d,g=o*m,v=a*d,S=a*m;t[0]=c*d,t[4]=v*h-g,t[8]=u*h+S,t[1]=c*m,t[5]=S*h+u,t[9]=g*h-v,t[2]=-h,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,g=o*h,v=a*c,S=a*h;t[0]=c*d,t[4]=S-u*m,t[8]=v*m+g,t[1]=m,t[5]=o*d,t[9]=-a*d,t[2]=-h*d,t[6]=g*m+v,t[10]=u-S*m}else if(e.order==="XZY"){let u=o*c,g=o*h,v=a*c,S=a*h;t[0]=c*d,t[4]=-m,t[8]=h*d,t[1]=u*m+S,t[5]=o*d,t[9]=g*m-v,t[2]=v*m-g,t[6]=a*d,t[10]=S*m+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yd,e,Sd)}lookAt(e,t,n){let s=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),xi.crossVectors(n,_n),xi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),xi.crossVectors(n,_n)),xi.normalize(),Oo.crossVectors(_n,xi),s[0]=xi.x,s[4]=Oo.x,s[8]=_n.x,s[1]=xi.y,s[5]=Oo.y,s[9]=_n.y,s[2]=xi.z,s[6]=Oo.z,s[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],d=n[1],m=n[5],u=n[9],g=n[13],v=n[2],S=n[6],p=n[10],_=n[14],T=n[3],D=n[7],w=n[11],R=n[15],C=s[0],N=s[4],M=s[8],L=s[12],U=s[1],k=s[5],q=s[9],Z=s[13],z=s[2],$=s[6],se=s[10],ie=s[14],te=s[3],Y=s[7],ne=s[11],he=s[15];return r[0]=o*C+a*U+c*z+h*te,r[4]=o*N+a*k+c*$+h*Y,r[8]=o*M+a*q+c*se+h*ne,r[12]=o*L+a*Z+c*ie+h*he,r[1]=d*C+m*U+u*z+g*te,r[5]=d*N+m*k+u*$+g*Y,r[9]=d*M+m*q+u*se+g*ne,r[13]=d*L+m*Z+u*ie+g*he,r[2]=v*C+S*U+p*z+_*te,r[6]=v*N+S*k+p*$+_*Y,r[10]=v*M+S*q+p*se+_*ne,r[14]=v*L+S*Z+p*ie+_*he,r[3]=T*C+D*U+w*z+R*te,r[7]=T*N+D*k+w*$+R*Y,r[11]=T*M+D*q+w*se+R*ne,r[15]=T*L+D*Z+w*ie+R*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],h=e[13],d=e[2],m=e[6],u=e[10],g=e[14],v=e[3],S=e[7],p=e[11],_=e[15],T=c*g-h*u,D=a*g-h*m,w=a*u-c*m,R=o*g-h*d,C=o*u-c*d,N=o*m-a*d;return t*(S*T-p*D+_*w)-n*(v*T-p*R+_*C)+s*(v*D-S*R+_*N)-r*(v*w-S*C+p*N)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],h=e[6],d=e[10];return t*(o*d-a*h)-n*(r*d-a*c)+s*(r*h-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],h=e[7],d=e[8],m=e[9],u=e[10],g=e[11],v=e[12],S=e[13],p=e[14],_=e[15],T=t*a-n*o,D=t*c-s*o,w=t*h-r*o,R=n*c-s*a,C=n*h-r*a,N=s*h-r*c,M=d*S-m*v,L=d*p-u*v,U=d*_-g*v,k=m*p-u*S,q=m*_-g*S,Z=u*_-g*p,z=T*Z-D*q+w*k+R*U-C*L+N*M;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/z;return e[0]=(a*Z-c*q+h*k)*$,e[1]=(s*q-n*Z-r*k)*$,e[2]=(S*N-p*C+_*R)*$,e[3]=(u*C-m*N-g*R)*$,e[4]=(c*U-o*Z-h*L)*$,e[5]=(t*Z-s*U+r*L)*$,e[6]=(p*w-v*N-_*D)*$,e[7]=(d*N-u*w+g*D)*$,e[8]=(o*q-a*U+h*M)*$,e[9]=(n*U-t*q-r*M)*$,e[10]=(v*C-S*w+_*T)*$,e[11]=(m*w-d*C-g*T)*$,e[12]=(a*L-o*k-c*M)*$,e[13]=(t*k-n*L+s*M)*$,e[14]=(S*D-v*R-p*T)*$,e[15]=(d*R-m*D+u*T)*$,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,h=r*o,d=r*a;return this.set(h*o+n,h*a-s*c,h*c+s*a,0,h*a+s*c,d*a+n,d*c-s*o,0,h*c-s*a,d*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,h=r+r,d=o+o,m=a+a,u=r*h,g=r*d,v=r*m,S=o*d,p=o*m,_=a*m,T=c*h,D=c*d,w=c*m,R=n.x,C=n.y,N=n.z;return s[0]=(1-(S+_))*R,s[1]=(g+w)*R,s[2]=(v-D)*R,s[3]=0,s[4]=(g-w)*C,s[5]=(1-(u+_))*C,s[6]=(p+T)*C,s[7]=0,s[8]=(v+D)*N,s[9]=(p-T)*N,s[10]=(1-(u+S))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=_s.set(s[0],s[1],s[2]).length(),a=_s.set(s[4],s[5],s[6]).length(),c=_s.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Rn.copy(this);let h=1/o,d=1/a,m=1/c;return Rn.elements[0]*=h,Rn.elements[1]*=h,Rn.elements[2]*=h,Rn.elements[4]*=d,Rn.elements[5]*=d,Rn.elements[6]*=d,Rn.elements[8]*=m,Rn.elements[9]*=m,Rn.elements[10]*=m,t.setFromRotationMatrix(Rn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Dn,c=!1){let h=this.elements,d=2*r/(t-e),m=2*r/(n-s),u=(t+e)/(t-e),g=(n+s)/(n-s),v,S;if(c)v=r/(o-r),S=o*r/(o-r);else if(a===Dn)v=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===Bs)v=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=d,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=m,h[9]=g,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Dn,c=!1){let h=this.elements,d=2/(t-e),m=2/(n-s),u=-(t+e)/(t-e),g=-(n+s)/(n-s),v,S;if(c)v=1/(o-r),S=o/(o-r);else if(a===Dn)v=-2/(o-r),S=-(o+r)/(o-r);else if(a===Bs)v=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=d,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=m,h[9]=0,h[13]=g,h[2]=0,h[6]=0,h[10]=v,h[14]=S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},_s=new V,Rn=new pt,yd=new V(0,0,0),Sd=new V(1,1,1),xi=new V,Oo=new V,_n=new V,Bh=new pt,zh=new yn,Wn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],h=s[5],d=s[9],m=s[2],u=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-nt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zh.setFromEuler(this),this.setFromQuaternion(zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var Hs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Md=0,kh=new V,xs=new yn,Qn=new pt,Bo=new V,gr=new V,bd=new V,wd=new yn,Vh=new V(1,0,0),Hh=new V(0,1,0),Gh=new V(0,0,1),Wh={type:"added"},Ed={type:"removed"},vs={type:"childadded",child:null},ec={type:"childremoved",child:null},Mt=class i extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new V,t=new Wn,n=new yn,s=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ke}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(Vh,e)}rotateY(e){return this.rotateOnAxis(Hh,e)}rotateZ(e){return this.rotateOnAxis(Gh,e)}translateOnAxis(e,t){return kh.copy(e).applyQuaternion(this.quaternion),this.position.add(kh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vh,e)}translateY(e){return this.translateOnAxis(Hh,e)}translateZ(e){return this.translateOnAxis(Gh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bo.copy(e):Bo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(gr,Bo,this.up):Qn.lookAt(Bo,gr,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(Qn),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wh),vs.child=e,this.dispatchEvent(vs),vs.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ed),ec.child=e,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wh),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,bd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,wd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){let m=c[h];r(e.shapes,m)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),h=o(e.textures),d=o(e.images),m=o(e.shapes),u=o(e.skeletons),g=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),u.length>0&&(n.skeletons=u),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){let c=[];for(let h in a){let d=a[h];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Mt.DEFAULT_UP=new V(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ai=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Td={type:"move"},Gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(let S of e.hand.values()){let p=t.getJointPose(S,n),_=this._getHandJoint(h,S);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=p.radius),_.visible=p!==null}let d=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],u=d.position.distanceTo(m.position),g=.02,v=.005;h.inputState.pinching&&u>g+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=g-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Td)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},zo={h:0,s:0,l:0};function tc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=jc(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=tc(o,r,e+1/3),this.g=tc(o,r,e),this.b=tc(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let n=Ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return lt.workingToColorSpace(en.copy(this),e),Math.round(nt(en.r*255,0,255))*65536+Math.round(nt(en.g*255,0,255))*256+Math.round(nt(en.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(en.copy(this),t);let n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,h,d=(a+o)/2;if(a===o)c=0,h=0;else{let m=o-a;switch(h=d<=.5?m/(o+a):m/(2-o-a),o){case n:c=(s-r)/m+(s<r?6:0);break;case s:c=(r-n)/m+2;break;case r:c=(n-s)/m+4;break}c/=6}return e.h=c,e.s=h,e.l=d,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=qt){lt.workingToColorSpace(en.copy(this),e);let t=en.r,n=en.g,s=en.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(zo);let n=Ar(vi.h,zo.h,t),s=Ar(vi.s,zo.s,t),r=Ar(vi.l,zo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Ve;Ve.NAMES=Ju;var qi=class extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},In=new V,ei=new V,nc=new V,ti=new V,ys=new V,Ss=new V,Xh=new V,ic=new V,sc=new V,rc=new V,oc=new It,ac=new It,lc=new It,ri=class i{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),In.subVectors(e,t),s.cross(In);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){In.subVectors(s,t),ei.subVectors(n,t),nc.subVectors(e,t);let o=In.dot(In),a=In.dot(ei),c=In.dot(nc),h=ei.dot(ei),d=ei.dot(nc),m=o*h-a*a;if(m===0)return r.set(0,0,0),null;let u=1/m,g=(h*c-a*d)*u,v=(o*d-a*c)*u;return r.set(1-g-v,v,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(o,ti.y),c.addScaledVector(a,ti.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return oc.setScalar(0),ac.setScalar(0),lc.setScalar(0),oc.fromBufferAttribute(e,t),ac.fromBufferAttribute(e,n),lc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(oc,r.x),o.addScaledVector(ac,r.y),o.addScaledVector(lc,r.z),o}static isFrontFacing(e,t,n,s){return In.subVectors(n,t),ei.subVectors(e,t),In.cross(ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),In.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ys.subVectors(s,n),Ss.subVectors(r,n),ic.subVectors(e,n);let c=ys.dot(ic),h=Ss.dot(ic);if(c<=0&&h<=0)return t.copy(n);sc.subVectors(e,s);let d=ys.dot(sc),m=Ss.dot(sc);if(d>=0&&m<=d)return t.copy(s);let u=c*m-d*h;if(u<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(ys,o);rc.subVectors(e,r);let g=ys.dot(rc),v=Ss.dot(rc);if(v>=0&&g<=v)return t.copy(r);let S=g*h-c*v;if(S<=0&&h>=0&&v<=0)return a=h/(h-v),t.copy(n).addScaledVector(Ss,a);let p=d*v-g*m;if(p<=0&&m-d>=0&&g-v>=0)return Xh.subVectors(r,s),a=(m-d)/(m-d+(g-v)),t.copy(s).addScaledVector(Xh,a);let _=1/(p+S+u);return o=S*_,a=u*_,t.copy(n).addScaledVector(ys,o).addScaledVector(Ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nn=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ko.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ko.copy(n.boundingBox)),ko.applyMatrix4(e.matrixWorld),this.union(ko)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),Vo.subVectors(this.max,_r),Ms.subVectors(e.a,_r),bs.subVectors(e.b,_r),ws.subVectors(e.c,_r),yi.subVectors(bs,Ms),Si.subVectors(ws,bs),ki.subVectors(Ms,ws);let t=[0,-yi.z,yi.y,0,-Si.z,Si.y,0,-ki.z,ki.y,yi.z,0,-yi.x,Si.z,0,-Si.x,ki.z,0,-ki.x,-yi.y,yi.x,0,-Si.y,Si.x,0,-ki.y,ki.x,0];return!cc(t,Ms,bs,ws,Vo)||(t=[1,0,0,0,1,0,0,0,1],!cc(t,Ms,bs,ws,Vo))?!1:(Ho.crossVectors(yi,Si),t=[Ho.x,Ho.y,Ho.z],cc(t,Ms,bs,ws,Vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ni=[new V,new V,new V,new V,new V,new V,new V,new V],Pn=new V,ko=new nn,Ms=new V,bs=new V,ws=new V,yi=new V,Si=new V,ki=new V,_r=new V,Vo=new V,Ho=new V,Vi=new V;function cc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Vi.fromArray(i,r);let a=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),c=e.dot(Vi),h=t.dot(Vi),d=n.dot(Vi);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>a)return!1}return!0}var oi=Ad();function Ad(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let h=c-127;h<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):h<-14?(n[c]=1024>>-h-14,n[c|256]=1024>>-h-14|32768,s[c]=-h-1,s[c|256]=-h-1):h<=15?(n[c]=h+15<<10,n[c|256]=h+15<<10|32768,s[c]=13,s[c|256]=13):h<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let h=c<<13,d=0;for(;(h&8388608)===0;)h<<=1,d-=8388608;h&=-8388609,d+=947912704,r[c]=h|d}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Cd(i){Math.abs(i)>65504&&Ye("DataUtils.toHalfFloat(): Value out of range."),i=nt(i,-65504,65504),oi.floatView[0]=i;let e=oi.uint32View[0],t=e>>23&511;return oi.baseTable[t]+((e&8388607)>>oi.shiftTable[t])}function Rd(i){let e=i>>10;return oi.uint32View[0]=oi.mantissaTable[oi.offsetTable[e]+(i&1023)]+oi.exponentTable[e],oi.floatView[0]}var Un=class{static toHalfFloat(e){return Cd(e)}static fromHalfFloat(e){return Rd(e)}},Nt=new V,Go=new Ge,Id=0,Rt=class extends Nn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Id++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jc,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Go.fromBufferAttribute(this,t),Go.applyMatrix3(e),this.setXY(t,Go.x,Go.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Lr=class extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Dr=class extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var $t=class extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Pd=new nn,xr=new V,hc=new V,Fn=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Pd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);let t=xr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(xr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(hc)),this.expandByPoint(xr.copy(e.center).sub(hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ld=0,Tn=new pt,uc=new Mt,Es=new V,xn=new nn,vr=new nn,Ht=new V,Ft=class i extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jf(e)?Dr:Lr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return uc.lookAt(e),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(xn.min,vr.min),xn.expandByPoint(Ht),Ht.addVectors(xn.max,vr.max),xn.expandByPoint(Ht)):(xn.expandByPoint(vr.min),xn.expandByPoint(vr.max))}xn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ht));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let h=0,d=a.count;h<d;h++)Ht.fromBufferAttribute(a,h),c&&(Es.fromBufferAttribute(e,h),Ht.add(Es)),s=Math.max(s,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Rt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let M=0;M<n.count;M++)a[M]=new V,c[M]=new V;let h=new V,d=new V,m=new V,u=new Ge,g=new Ge,v=new Ge,S=new V,p=new V;function _(M,L,U){h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,L),m.fromBufferAttribute(n,U),u.fromBufferAttribute(r,M),g.fromBufferAttribute(r,L),v.fromBufferAttribute(r,U),d.sub(h),m.sub(h),g.sub(u),v.sub(u);let k=1/(g.x*v.y-v.x*g.y);isFinite(k)&&(S.copy(d).multiplyScalar(v.y).addScaledVector(m,-g.y).multiplyScalar(k),p.copy(m).multiplyScalar(g.x).addScaledVector(d,-v.x).multiplyScalar(k),a[M].add(S),a[L].add(S),a[U].add(S),c[M].add(p),c[L].add(p),c[U].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let M=0,L=T.length;M<L;++M){let U=T[M],k=U.start,q=U.count;for(let Z=k,z=k+q;Z<z;Z+=3)_(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}let D=new V,w=new V,R=new V,C=new V;function N(M){R.fromBufferAttribute(s,M),C.copy(R);let L=a[M];D.copy(L),D.sub(R.multiplyScalar(R.dot(L))).normalize(),w.crossVectors(C,L);let k=w.dot(c[M])<0?-1:1;o.setXYZW(M,D.x,D.y,D.z,k)}for(let M=0,L=T.length;M<L;++M){let U=T[M],k=U.start,q=U.count;for(let Z=k,z=k+q;Z<z;Z+=3)N(e.getX(Z+0)),N(e.getX(Z+1)),N(e.getX(Z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,g=n.count;u<g;u++)n.setXYZ(u,0,0,0);let s=new V,r=new V,o=new V,a=new V,c=new V,h=new V,d=new V,m=new V;if(e)for(let u=0,g=e.count;u<g;u+=3){let v=e.getX(u+0),S=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,p),d.subVectors(o,r),m.subVectors(s,r),d.cross(m),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,p),a.add(d),c.add(d),h.add(d),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let u=0,g=t.count;u<g;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,r),m.subVectors(s,r),d.cross(m),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,c){let h=a.array,d=a.itemSize,m=a.normalized,u=new h.constructor(c.length*d),g=0,v=0;for(let S=0,p=c.length;S<p;S++){a.isInterleavedBufferAttribute?g=c[S]*a.data.stride+a.offset:g=c[S]*d;for(let _=0;_<d;_++)u[v++]=h[g++]}return new Rt(u,d,m)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],h=e(c,n);t.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let c=[],h=r[a];for(let d=0,m=h.length;d<m;d++){let u=h[d],g=e(u,n);c.push(g)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let h=n[c];e.data.attributes[c]=h.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],d=[];for(let m=0,u=h.length;m<u;m++){let g=h[m];d.push(g.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let h in s){let d=s[h];this.setAttribute(h,d.clone(t))}let r=e.morphAttributes;for(let h in r){let d=[],m=r[h];for(let u=0,g=m.length;u<g;u++)d.push(m[u].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let h=0,d=o.length;h<d;h++){let m=o[h];this.addGroup(m.start,m.count,m.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jc,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},an=new V,Zi=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ir("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ir("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fc=new V,Dd=new V,Nd=new Ke,ln=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=fc.subVectors(n,t).cross(Dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(fc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Nd.getNormalMatrix(e),s=this.coplanarPoint(fc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ud=0,Sn=class extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=li(),this.name="",this.type="Material",this.blending=Ks,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Fc,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ua,this.stencilZFail=ua,this.stencilZPass=ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ln().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ws=class extends Sn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ts,yr=new V,As=new V,Cs=new V,Rs=new Ge,Sr=new Ge,Ku=new pt,Wo=new V,Mr=new V,Xo=new V,Yh=new Ge,dc=new Ge,qh=new Ge,Ur=class extends Mt{constructor(e=new Ws){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new Ft;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nr(t,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new Zi(n,3,0,!1)),Ts.setAttribute("uv",new Zi(n,2,3,!1))}this.geometry=Ts,this.material=e,this.center=new Ge(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),Ku.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Cs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Yo(Wo.set(-.5,-.5,0),Cs,o,As,s,r),Yo(Mr.set(.5,-.5,0),Cs,o,As,s,r),Yo(Xo.set(.5,.5,0),Cs,o,As,s,r),Yh.set(0,0),dc.set(1,0),qh.set(1,1);let a=e.ray.intersectTriangle(Wo,Mr,Xo,!1,yr);if(a===null&&(Yo(Mr.set(-.5,.5,0),Cs,o,As,s,r),dc.set(0,1),a=e.ray.intersectTriangle(Wo,Xo,Mr,!1,yr),a===null))return;let c=e.ray.origin.distanceTo(yr);c<e.near||c>e.far||t.push({distance:c,point:yr.clone(),uv:ri.getInterpolation(yr,Wo,Mr,Xo,Yh,dc,qh,new Ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Yo(i,e,t,n,s,r){Rs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Sr.x=r*Rs.x-s*Rs.y,Sr.y=s*Rs.x+r*Rs.y):Sr.copy(Rs),i.copy(e),i.x+=Sr.x,i.y+=Sr.y,i.applyMatrix4(Ku)}var ii=new V,pc=new V,qo=new V,Zo=new V,hi=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pc.copy(e).add(t).multiplyScalar(.5),qo.copy(t).sub(e).normalize(),Zo.copy(this.origin).sub(pc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(qo),a=Zo.dot(this.direction),c=-Zo.dot(qo),h=Zo.lengthSq(),d=Math.abs(1-o*o),m,u,g,v;if(d>0)if(m=o*c-a,u=o*a-c,v=r*d,m>=0)if(u>=-v)if(u<=v){let S=1/d;m*=S,u*=S,g=m*(m+o*u+2*a)+u*(o*m+u+2*c)+h}else u=r,m=Math.max(0,-(o*u+a)),g=-m*m+u*(u+2*c)+h;else u=-r,m=Math.max(0,-(o*u+a)),g=-m*m+u*(u+2*c)+h;else u<=-v?(m=Math.max(0,-(-o*r+a)),u=m>0?-r:Math.min(Math.max(-r,-c),r),g=-m*m+u*(u+2*c)+h):u<=v?(m=0,u=Math.min(Math.max(-r,-c),r),g=u*(u+2*c)+h):(m=Math.max(0,-(o*r+a)),u=m>0?r:Math.min(Math.max(-r,-c),r),g=-m*m+u*(u+2*c)+h);else u=o>0?-r:r,m=Math.max(0,-(o*u+a)),g=-m*m+u*(u+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(pc).addScaledVector(qo,u),g}intersectSphere(e,t){if(e.radius<0)return null;ii.subVectors(e.center,this.origin);let n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,h=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,u=this.origin;return h>=0?(n=(e.min.x-u.x)*h,s=(e.max.x-u.x)*h):(n=(e.max.x-u.x)*h,s=(e.min.x-u.x)*h),d>=0?(r=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),m>=0?(a=(e.min.z-u.z)*m,c=(e.max.z-u.z)*m):(a=(e.max.z-u.z)*m,c=(e.min.z-u.z)*m),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,h=a.y,d=a.z,m=e.x-o.x,u=e.y-o.y,g=e.z-o.z,v=t.x-o.x,S=t.y-o.y,p=t.z-o.z,_=n.x-o.x,T=n.y-o.y,D=n.z-o.z,w=Math.abs(c),R=Math.abs(h),C=Math.abs(d),N,M,L,U,k,q,Z,z,$,se,ie,te;if(w>=R&&w>=C?(L=c,q=m,$=v,te=_,c>=0?(N=h,M=d,U=u,k=g,Z=S,z=p,se=T,ie=D):(N=d,M=h,U=g,k=u,Z=p,z=S,se=D,ie=T)):R>=C?(L=h,q=u,$=S,te=T,h>=0?(N=d,M=c,U=g,k=m,Z=p,z=v,se=D,ie=_):(N=c,M=d,U=m,k=g,Z=v,z=p,se=_,ie=D)):(L=d,q=g,$=p,te=D,d>=0?(N=c,M=h,U=m,k=u,Z=v,z=S,se=_,ie=T):(N=h,M=c,U=u,k=m,Z=S,z=v,se=T,ie=_)),L===0)return null;let Y=N/L,ne=M/L,he=1/L,Oe=U-Y*q,Ae=k-ne*q,ht=Z-Y*$,Je=z-ne*$,st=se-Y*te,J=ie-ne*te,ce=st*Je-J*ht,Re=Oe*J-Ae*st,$e=ht*Ae-Je*Oe;if(s){if(ce<0||Re<0||$e<0)return null}else if((ce<0||Re<0||$e<0)&&(ce>0||Re>0||$e>0))return null;let De=ce+Re+$e;if(De===0)return null;let je=he*(ce*q+Re*$+$e*te);return(De>0?je<0:je>0)?null:this.at(je/De,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fr=class extends Sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zh=new pt,Hi=new hi,$o=new Fn,$h=new V,Jo=new V,Ko=new V,jo=new V,mc=new V,Qo=new V,Jh=new V,ea=new V,Et=class extends Mt{constructor(e=new Ft,t=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Qo.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let d=a[c],m=r[c];d!==0&&(mc.fromBufferAttribute(m,e),o?Qo.addScaledVector(mc,d):Qo.addScaledVector(mc.sub(t),d))}t.add(Qo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(r),Hi.copy(e.ray).recast(e.near),!($o.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere($o,$h)===null||Hi.origin.distanceToSquared($h)>(e.far-e.near)**2))&&(Zh.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(Zh),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,m=r.attributes.normal,u=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=u.length;v<S;v++){let p=u[v],_=o[p.materialIndex],T=Math.max(p.start,g.start),D=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let w=T,R=D;w<R;w+=3){let C=a.getX(w),N=a.getX(w+1),M=a.getX(w+2);s=ta(this,_,e,n,h,d,m,C,N,M),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let v=Math.max(0,g.start),S=Math.min(a.count,g.start+g.count);for(let p=v,_=S;p<_;p+=3){let T=a.getX(p),D=a.getX(p+1),w=a.getX(p+2);s=ta(this,o,e,n,h,d,m,T,D,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,S=u.length;v<S;v++){let p=u[v],_=o[p.materialIndex],T=Math.max(p.start,g.start),D=Math.min(c.count,Math.min(p.start+p.count,g.start+g.count));for(let w=T,R=D;w<R;w+=3){let C=w,N=w+1,M=w+2;s=ta(this,_,e,n,h,d,m,C,N,M),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let v=Math.max(0,g.start),S=Math.min(c.count,g.start+g.count);for(let p=v,_=S;p<_;p+=3){let T=p,D=p+1,w=p+2;s=ta(this,o,e,n,h,d,m,T,D,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Fd(i,e,t,n,s,r,o,a){let c;if(e.side===Jt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ni,a),c===null)return null;ea.copy(a),ea.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(ea);return h<t.near||h>t.far?null:{distance:h,point:ea.clone(),object:i}}function ta(i,e,t,n,s,r,o,a,c,h){i.getVertexPosition(a,Jo),i.getVertexPosition(c,Ko),i.getVertexPosition(h,jo);let d=Fd(i,e,t,n,Jo,Ko,jo,Jh);if(d){let m=new V;ri.getBarycoord(Jh,Jo,Ko,jo,m),s&&(d.uv=ri.getInterpolatedAttribute(s,a,c,h,m,new Ge)),r&&(d.uv1=ri.getInterpolatedAttribute(r,a,c,h,m,new Ge)),o&&(d.normal=ri.getInterpolatedAttribute(o,a,c,h,m,new V),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let u={a,b:c,c:h,normal:new V,materialIndex:0};ri.getNormal(Jo,Ko,jo,u.normal),d.face=u,d.barycoord=m}return d}var $i=class extends tn{constructor(e=null,t=1,n=1,s,r,o,a,c,h=Wt,d=Wt,m,u){super(null,o,a,c,h,d,s,r,m,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xs=class extends Rt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Is=new pt,Kh=new pt,na=[],jh=new nn,Od=new pt,br=new Et,wr=new Fn,Or=class extends Et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Od)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),jh.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(jh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),wr.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wr.copy(this.boundingSphere),wr.applyMatrix4(n),e.ray.intersectsSphere(wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Is),Kh.multiplyMatrices(n,Is),br.matrixWorld=Kh,br.raycast(e,na);for(let o=0,a=na.length;o<a;o++){let c=na[o];c.instanceId=r,c.object=this,t.push(c)}na.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $i(new Float32Array(s*this.count),s,this.count,di,rn));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gi=new Fn,Bd=new Ge(.5,.5),ia=new V,Ys=class{constructor(e=new ln,t=new ln,n=new ln,s=new ln,r=new ln,o=new ln){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],h=r[3],d=r[4],m=r[5],u=r[6],g=r[7],v=r[8],S=r[9],p=r[10],_=r[11],T=r[12],D=r[13],w=r[14],R=r[15];if(s[0].setComponents(h-o,g-d,_-v,R-T).normalize(),s[1].setComponents(h+o,g+d,_+v,R+T).normalize(),s[2].setComponents(h+a,g+m,_+S,R+D).normalize(),s[3].setComponents(h-a,g-m,_-S,R-D).normalize(),n)s[4].setComponents(c,u,p,w).normalize(),s[5].setComponents(h-c,g-u,_-p,R-w).normalize();else if(s[4].setComponents(h-c,g-u,_-p,R-w).normalize(),t===Dn)s[5].setComponents(h+c,g+u,_+p,R+w).normalize();else if(t===Bs)s[5].setComponents(c,u,p,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){Gi.center.set(0,0,0);let t=Bd.distanceTo(e.center);return Gi.radius=.7071067811865476+t,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ia.x=s.normal.x>0?e.max.x:e.min.x,ia.y=s.normal.y>0?e.max.y:e.min.y,ia.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bi=class extends Sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},wa=new V,Ea=new V,Qh=new pt,Er=new hi,sa=new Fn,gc=new V,eu=new V,qs=class extends Mt{constructor(e=new Ft,t=new bi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)wa.fromBufferAttribute(t,s-1),Ea.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=wa.distanceTo(Ea);e.setAttribute("lineDistance",new $t(n,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(s),sa.radius+=r,e.ray.intersectsSphere(sa)===!1)return;Qh.copy(s).invert(),Er.copy(e.ray).applyMatrix4(Qh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){let g=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let S=g,p=v-1;S<p;S+=h){let _=d.getX(S),T=d.getX(S+1),D=ra(this,e,Er,c,_,T,S);D&&t.push(D)}if(this.isLineLoop){let S=d.getX(v-1),p=d.getX(g),_=ra(this,e,Er,c,S,p,v-1);_&&t.push(_)}}else{let g=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let S=g,p=v-1;S<p;S+=h){let _=ra(this,e,Er,c,S,S+1,S);_&&t.push(_)}if(this.isLineLoop){let S=ra(this,e,Er,c,v-1,g,v-1);S&&t.push(S)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ra(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(wa.fromBufferAttribute(a,s),Ea.fromBufferAttribute(a,r),t.distanceSqToSegment(wa,Ea,gc,eu)>n)return;gc.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(gc);if(!(h<e.near||h>e.far))return{distance:h,point:eu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var tu=new V,nu=new V,Br=class extends qs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)tu.fromBufferAttribute(t,s),nu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+tu.distanceTo(nu);e.setAttribute("lineDistance",new $t(n,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ji=class extends Sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},iu=new pt,bc=new hi,oa=new Fn,aa=new V,zr=class extends Mt{constructor(e=new Ft,t=new Ji){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(s),oa.radius+=r,e.ray.intersectsSphere(oa)===!1)return;iu.copy(s).invert(),bc.copy(e.ray).applyMatrix4(iu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=n.index,m=n.attributes.position;if(h!==null){let u=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=u,S=g;v<S;v++){let p=h.getX(v);aa.fromBufferAttribute(m,p),su(aa,p,c,s,e,t,this)}}else{let u=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let v=u,S=g;v<S;v++)aa.fromBufferAttribute(m,v),su(aa,v,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function su(i,e,t,n,s,r,o){let a=bc.distanceSqToPoint(i);if(a<t){let c=new V;bc.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var kr=class extends tn{constructor(e=[],t=Ui,n,s,r,o,a,c,h,d){super(e,t,n,s,r,o,a,c,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vr=class extends tn{constructor(e,t,n,s,r,o,a,c,h){super(e,t,n,s,r,o,a,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wi=class extends tn{constructor(e,t,n=Bn,s,r,o,a=Wt,c=Wt,h,d=Gn,m=1){if(d!==Gn&&d!==Fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:m};super(u,s,r,o,a,c,d,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ta=class extends wi{constructor(e,t=Bn,n=Ui,s,r,o=Wt,a=Wt,c,h=Gn){let d={width:e,height:e,depth:1},m=[d,d,d,d,d,d];super(e,e,t,n,s,r,o,a,c,h),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Hr=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ei=class i extends Ft{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],h=[],d=[],m=[],u=0,g=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,s,o,2),v("x","z","y",1,-1,e,n,-t,s,o,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(m,2));function v(S,p,_,T,D,w,R,C,N,M,L){let U=w/N,k=R/M,q=w/2,Z=R/2,z=C/2,$=N+1,se=M+1,ie=0,te=0,Y=new V;for(let ne=0;ne<se;ne++){let he=ne*k-Z;for(let Oe=0;Oe<$;Oe++){let Ae=Oe*U-q;Y[S]=Ae*T,Y[p]=he*D,Y[_]=z,h.push(Y.x,Y.y,Y.z),Y[S]=0,Y[p]=0,Y[_]=C>0?1:-1,d.push(Y.x,Y.y,Y.z),m.push(Oe/N),m.push(1-ne/M),ie+=1}}for(let ne=0;ne<M;ne++)for(let he=0;he<N;he++){let Oe=u+he+$*ne,Ae=u+he+$*(ne+1),ht=u+(he+1)+$*(ne+1),Je=u+(he+1)+$*ne;c.push(Oe,Ae,Je),c.push(Ae,ht,Je),te+=6}a.addGroup(g,te,L),g+=te,u+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ki=class i extends Ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),h=a+1,d=c+1,m=e/a,u=t/c,g=[],v=[],S=[],p=[];for(let _=0;_<d;_++){let T=_*u-o;for(let D=0;D<h;D++){let w=D*m-r;v.push(w,-T,0),S.push(0,0,1),p.push(D/a),p.push(1-_/c)}}for(let _=0;_<c;_++)for(let T=0;T<a;T++){let D=T+h*_,w=T+h*(_+1),R=T+1+h*(_+1),C=T+1+h*_;g.push(D,w,C),g.push(w,R,C)}this.setIndex(g),this.setAttribute("position",new $t(v,3)),this.setAttribute("normal",new $t(S,3)),this.setAttribute("uv",new $t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Gr=class extends Sn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ve(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function ts(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(ru(s))s.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(ru(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function on(i){let e={};for(let t=0;t<i.length;t++){let n=ts(i[t]);for(let s in n)e[s]=n[s]}return e}function ru(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function zd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function eh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var ju={clone:ts,merge:on},kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends Sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kd,this.fragmentShader=Vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=zd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ve().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"v3":this.uniforms[n].value=new V().fromArray(s.value);break;case"v4":this.uniforms[n].value=new It().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new pt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Aa=class extends Mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},An=class extends Sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mo,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wr=class extends An{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Xr=class extends Sn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mo,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Wa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ca=class extends Sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ra=class extends Sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ps(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function _c(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ti=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ia=class extends Ti{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yc,endingEnd:yc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sc:r=e,a=2*t-n;break;case Mc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Sc:o=e,c=2*n-t;break;case Mc:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let h=(n-t)*.5,d=this.valueSize;this._weightPrev=h/(t-a),this._weightNext=h/(c-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,h=c-a,d=this._offsetPrev,m=this._offsetNext,u=this._weightPrev,g=this._weightNext,v=(n-t)/(s-t),S=v*v,p=S*v,_=-u*p+2*u*S-u*v,T=(1+u)*p+(-1.5-2*u)*S+(-.5+u)*v+1,D=(-1-g)*p+(1.5+g)*S+.5*v,w=g*p-g*S;for(let R=0;R!==a;++R)r[R]=_*o[d+R]+T*o[h+R]+D*o[c+R]+w*o[m+R];return r}},Pa=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,h=c-a,d=(n-t)/(s-t),m=1-d;for(let u=0;u!==a;++u)r[u]=o[h+u]*m+o[c+u]*d;return r}},La=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Da=class extends Ti{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,h=c-a,d=this.inTangents,m=this.outTangents;if(!d||!m){let v=(n-t)/(s-t),S=1-v;for(let p=0;p!==a;++p)r[p]=o[h+p]*S+o[c+p]*v;return r}let u=a*2,g=e-1;for(let v=0;v!==a;++v){let S=o[h+v],p=o[c+v],_=g*u+v*2,T=m[_],D=m[_+1],w=e*u+v*2,R=d[w],C=d[w+1],N=Gd(n,t,T,R,s);r[v]=Qu(N,S,D,C,p)}return r}};function Qu(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Hd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Gd(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Qu(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=Hd(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var bn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ps(t,this.TimeBufferType),this.values=Ps(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ps(e.times,Array),values:Ps(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),_c(e.settings)&&(n.settings={inTangents:Ps(e.settings.inTangents,Array),outTangents:Ps(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new La(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Da(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Cr:t=this.InterpolantFactoryMethodDiscrete;break;case ya:t=this.InterpolantFactoryMethodLinear;break;case ha:t=this.InterpolantFactoryMethodSmooth;break;case vc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return ya;case this.InterpolantFactoryMethodSmooth:return ha;case this.InterpolantFactoryMethodBezier:return vc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;_c(this.settings)&&(ou(this.settings.inTangents,e),ou(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){qe("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){qe("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&ed(s))for(let a=0,c=s.length;a!==c;++a){let h=s[a];if(isNaN(h)){qe("KeyframeTrack: Value is not a valid number.",this,a,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ha,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,h=e[a],d=e[a+1];if(h!==d&&(a!==1||h!==e[0]))if(s)c=!0;else{let m=a*n,u=m-n,g=m+n;for(let v=0;v!==n;++v){let S=t[m+v];if(S!==t[u+v]||S!==t[g+v]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let m=a*n,u=o*n;for(let g=0;g!==n;++g)t[u+g]=t[m+g]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,h=0;h!==n;++h)t[c+h]=t[a+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,_c(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ou(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=ya;var Ai=class extends bn{constructor(e,t,n){super(e,t,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Cr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends bn{constructor(e,t,n,s){super(e,t,n,s)}};Na.prototype.ValueTypeName="color";var Ua=class extends bn{constructor(e,t,n,s){super(e,t,n,s)}};Ua.prototype.ValueTypeName="number";var Fa=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),h=e*a;for(let d=h+a;h!==d;h+=4)yn.slerpFlat(r,0,o,h-a,o,h,c);return r}},Yr=class extends bn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Fa(this.times,this.values,this.getValueSize(),e)}};Yr.prototype.ValueTypeName="quaternion";Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends bn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Cr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends bn{constructor(e,t,n,s){super(e,t,n,s)}};Oa.prototype.ValueTypeName="vector";var Fs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(au(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!au(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function au(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ba=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,m){return h.push(d,m),this},this.removeHandler=function(d){let m=h.indexOf(d);return m!==-1&&h.splice(m,2),this},this.getHandler=function(d){for(let m=0,u=h.length;m<u;m+=2){let g=h[m],v=h[m+1];if(g.global&&(g.lastIndex=0),g.test(d))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ef=new Ba,fn=class{constructor(e){this.manager=e!==void 0?e:ef,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fn.DEFAULT_MATERIAL_NAME="__DEFAULT";var si={},wc=class extends Error{constructor(e,t){super(e),this.response=t}},ui=class extends fn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Fs.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(si[e]!==void 0){si[e].push({onLoad:t,onProgress:n,onError:s});return}si[e]=[],si[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&Ye("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;let d=si[e],m=h.body.getReader(),u=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),g=u?parseInt(u):0,v=g!==0,S=0,p=new ReadableStream({start(_){T();function T(){m.read().then(({done:D,value:w})=>{if(D)_.close();else{S+=w.byteLength;let R=new ProgressEvent("progress",{lengthComputable:v,loaded:S,total:g});for(let C=0,N=d.length;C<N;C++){let M=d[C];M.onProgress&&M.onProgress(R)}_.enqueue(w),T()}},D=>{_.error(D)})}}});return new Response(p)}else throw new wc(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return h.json();default:if(a==="")return h.text();{let m=/charset="?([^;"\s]*)"?/i.exec(a),u=m&&m[1]?m[1].toLowerCase():void 0,g=new TextDecoder(u);return h.arrayBuffer().then(v=>g.decode(v))}}}).then(h=>{Fs.add(`file:${e}`,h);let d=si[e];delete si[e];for(let m=0,u=d.length;m<u;m++){let g=d[m];g.onLoad&&g.onLoad(h)}}).catch(h=>{let d=si[e];if(d===void 0)throw this.manager.itemError(e),h;delete si[e];for(let m=0,u=d.length;m<u;m++){let g=d[m];g.onError&&g.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ls=new WeakMap,za=class extends fn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Fs.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let m=Ls.get(o);m===void 0&&(m=[],Ls.set(o,m)),m.push({onLoad:t,onError:s})}return o}let a=zs("img");function c(){d(),t&&t(this);let m=Ls.get(this)||[];for(let u=0;u<m.length;u++){let g=m[u];g.onLoad&&g.onLoad(this)}Ls.delete(this),r.manager.itemEnd(e)}function h(m){d(),s&&s(m),Fs.remove(`image:${e}`);let u=Ls.get(this)||[];for(let g=0;g<u.length;g++){let v=u[g];v.onError&&v.onError(m)}Ls.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",c,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Fs.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var qr=class extends fn{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new $i,a=new ui(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let h;try{h=r.parse(c)}catch(d){s!==void 0?s(d):qe(d);return}r._applyTexData(o,h),t&&t(o,h)},n,s),o}createDataTexture(e){let t=new $i;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Zt,e.wrapT=t.wrapT!==void 0?t.wrapT:Zt,e.magFilter=t.magFilter!==void 0?t.magFilter:At,e.minFilter=t.minFilter!==void 0?t.minFilter:At,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=fi),t.mipmapCount===1&&(e.minFilter=At),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},Zr=class extends fn{constructor(e){super(e)}load(e,t,n,s){let r=new tn,o=new za(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ri=class extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},$r=class extends Ri{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},xc=new pt,lu=new V,cu=new V,Zs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(lu),cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){xc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(xc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;e.coordinateSystem===Bs||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+h,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+h,0,0,.5,.5,0,0,0,1),t.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},la=new V,ca=new yn,Hn=new V,Jr=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(la,ca,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(la,ca,Hn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(la,ca,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(la,ca,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Mi=new V,hu=new Ge,uu=new Ge,Gt=class extends Jr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Yi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yi*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,hu,uu),t.subVectors(uu,hu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/h,s*=o.width/c,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ec=class extends Zs{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Yi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Kr=class extends Ri{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ec}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Tc=class extends Zs{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0}},ji=class extends Ri{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Tc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ii=class extends Jr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ac=class extends Zs{constructor(){super(new Ii(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pi=class extends Ri{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Ac}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var jr=class extends Ri{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}};var ka=class extends Ft{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Qr=class extends fn{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new ui(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(c){s?s(c):qe(c),r.manager.itemError(e)}},n,s)}parse(e){let t={},n={};function s(g,v){if(t[v]!==void 0)return t[v];let p=g.interleavedBuffers[v],_=r(g,p.buffer),T=Fo(p.type,_),D=new Nr(T,p.stride);return D.uuid=p.uuid,p.usage!==void 0&&D.setUsage(p.usage),t[v]=D,D}function r(g,v){if(n[v]!==void 0)return n[v];let p=g.arrayBuffers[v],_=new Uint32Array(p).buffer;return n[v]=_,_}let o=e.isInstancedBufferGeometry?new ka:new Ft,a=e.data.index;if(a!==void 0){let g=Fo(a.type,a.array);o.setIndex(new Rt(g,1))}let c=e.data.attributes;for(let g in c){let v=c[g],S;if(v.isInterleavedBufferAttribute){let p=s(e.data,v.data);S=new Zi(p,v.itemSize,v.offset,v.normalized)}else{let p=Fo(v.type,v.array),_=v.isInstancedBufferAttribute?Xs:Rt;S=new _(p,v.itemSize,v.normalized)}v.name!==void 0&&(S.name=v.name),v.usage!==void 0&&S.setUsage(v.usage),v.gpuType!==void 0&&(S.gpuType=v.gpuType),o.setAttribute(g,S)}let h=e.data.morphAttributes;if(h)for(let g in h){let v=h[g],S=[];for(let p=0,_=v.length;p<_;p++){let T=v[p],D;if(T.isInterleavedBufferAttribute){let w=s(e.data,T.data);D=new Zi(w,T.itemSize,T.offset,T.normalized)}else{let w=Fo(T.type,T.array);D=new Rt(w,T.itemSize,T.normalized)}T.name!==void 0&&(D.name=T.name),T.usage!==void 0&&D.setUsage(T.usage),T.gpuType!==void 0&&(D.gpuType=T.gpuType),S.push(D)}o.morphAttributes[g]=S}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);let m=e.data.groups||e.data.drawcalls||e.data.offsets;if(m!==void 0)for(let g=0,v=m.length;g!==v;++g){let S=m[g];o.addGroup(S.start,S.count,S.materialIndex)}let u=e.data.boundingSphere;return u!==void 0&&(o.boundingSphere=new Fn().fromJSON(u)),e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}};var Ds=-90,Ns=1,Va=class extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(Ds,Ns,e,t);s.layers=this.layers,this.add(s);let r=new Gt(Ds,Ns,e,t);r.layers=this.layers,this.add(r);let o=new Gt(Ds,Ns,e,t);o.layers=this.layers,this.add(o);let a=new Gt(Ds,Ns,e,t);a.layers=this.layers,this.add(a);let c=new Gt(Ds,Ns,e,t);c.layers=this.layers,this.add(c);let h=new Gt(Ds,Ns,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let h of t)this.remove(h);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,h,d]=this.children,m=e.getRenderTarget(),u=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(m,u,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},Ha=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var th="\\[\\]\\.:\\/",Wd=new RegExp("["+th+"]","g"),nh="[^"+th+"]",Xd="[^"+th.replace("\\.","")+"]",Yd=/((?:WC+[\/:])*)/.source.replace("WC",nh),qd=/(WCOD+)?/.source.replace("WCOD",Xd),Zd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nh),$d=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nh),Jd=new RegExp("^"+Yd+qd+Zd+$d+"$"),Kd=["material","materials","bones","map"],Cc=class{constructor(e,t,n){let s=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Tt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wd,"")}static parseTrackName(e){let t=Jd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Kd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===h){h=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let o=e[s];if(o===void 0){let h=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Cc;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tx=new Float32Array(1);var fu=new pt,eo=class{constructor(e,t,n=0,s=1/0){this.ray=new hi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Hs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fu),this}intersectObject(e,t=!0,n=[]){return Rc(e,this,n,t),n.sort(du),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Rc(e[s],this,n,t);return n.sort(du),n}};function du(i,e){return i.distance-e.distance}function Rc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Rc(r[o],e,t,!0)}}var $s=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ic=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var to=class extends Br{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ve(n),s=new Ve(s);let r=t/2,o=e/t,a=e/2,c=[],h=[];for(let u=0,g=0,v=-a;u<=t;u++,v+=o){c.push(-a,0,v,a,0,v),c.push(v,0,-a,v,0,a);let S=u===r?n:s;S.toArray(h,g),g+=3,S.toArray(h,g),g+=3,S.toArray(h,g),g+=3,S.toArray(h,g),g+=3}let d=new Ft;d.setAttribute("position",new $t(c,3)),d.setAttribute("color",new $t(h,3));let m=new bi({vertexColors:!0,toneMapped:!1});super(d,m),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var no=class extends Br{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ft;r.setIndex(new Rt(n,1)),r.setAttribute("position",new $t(s,3)),super(r,new bi({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var io=class extends Nn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ih(i,e,t,n){let s=jd(n);switch(t){case Zc:return i*e;case di:return i*e/s.components*s.byteLength;case Ja:return i*e/s.components*s.byteLength;case pn:return i*e*2/s.components*s.byteLength;case Ka:return i*e*2/s.components*s.byteLength;case $c:return i*e*3/s.components*s.byteLength;case Ut:return i*e*4/s.components*s.byteLength;case ja:return i*e*4/s.components*s.byteLength;case lo:case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case el:case nl:return Math.max(i,16)*Math.max(e,8)/4;case Qa:case tl:return Math.max(i,8)*Math.max(e,8)/2;case il:case sl:case ol:case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rl:case fo:case ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ul:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ml:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case gl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case yl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Sl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case bl:case wl:case El:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Tl:case Al:return Math.ceil(i/4)*Math.ceil(e/4)*8;case po:case Cl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jd(i){switch(i){case dn:case Wc:return{byteLength:1,components:1};case Qs:case Xc:case Kt:return{byteLength:2,components:1};case Za:case $a:return{byteLength:2,components:4};case Bn:case qa:case rn:return{byteLength:4,components:1};case Yc:case qc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function bf(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ep(i){let e=new WeakMap;function t(a,c){let h=a.array,d=a.usage,m=h.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,h,d),a.onUploadCallback();let g;if(h instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)g=i.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=i.SHORT;else if(h instanceof Uint32Array)g=i.UNSIGNED_INT;else if(h instanceof Int32Array)g=i.INT;else if(h instanceof Int8Array)g=i.BYTE;else if(h instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:m}}function n(a,c,h){let d=c.array,m=c.updateRanges;if(i.bindBuffer(h,a),m.length===0)i.bufferSubData(h,0,d);else{m.sort((g,v)=>g.start-v.start);let u=0;for(let g=1;g<m.length;g++){let v=m[u],S=m[g];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++u,m[u]=S)}m.length=u+1;for(let g=0,v=m.length;g<v;g++){let S=m[g];i.bufferSubData(h,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=e.get(a);if(h===void 0)e.set(a,t(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:s,remove:r,update:o}}var tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,np=`#ifdef USE_ALPHAHASH
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
#endif`,ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ap=`#ifdef USE_AOMAP
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
#endif`,lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cp=`#ifdef USE_BATCHING
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
#endif`,hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pp=`#ifdef USE_IRIDESCENCE
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
#endif`,mp=`#ifdef USE_BUMPMAP
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,wp=`#define PI 3.141592653589793
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
} // validated`,Ep=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hp=`#ifdef USE_GRADIENTMAP
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
}`,Gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,qp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jp=`PhysicalMaterial material;
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
#endif`,Qp=`uniform sampler2D dfgLUT;
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
}`,em=`
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
#endif`,tm=`#if defined( RE_IndirectDiffuse )
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,im=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,um=`#if defined( USE_POINTS_UV )
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
#endif`,fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`#ifdef USE_MORPHTARGETS
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
#endif`,xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wm=`#ifdef USE_NORMALMAP
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
#endif`,Em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Im=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,km=`float getShadowMask() {
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
}`,Vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Gm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$m=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ng=`uniform sampler2D t2D;
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`#include <common>
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
}`,lg=`#if DEPTH_PACKING == 3200
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
}`,cg=`#define DISTANCE
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
}`,hg=`#define DISTANCE
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
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`uniform float scale;
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#include <common>
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#define LAMBERT
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
}`,xg=`#define LAMBERT
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
}`,vg=`#define MATCAP
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
}`,yg=`#define MATCAP
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
}`,Sg=`#define NORMAL
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
}`,Mg=`#define NORMAL
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
}`,bg=`#define PHONG
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
}`,wg=`#define PHONG
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
}`,Eg=`#define STANDARD
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
}`,Tg=`#define STANDARD
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
}`,Ag=`#define TOON
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
}`,Cg=`#define TOON
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
}`,Rg=`uniform float size;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Pg=`#include <common>
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
}`,Lg=`uniform vec3 color;
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
}`,Dg=`uniform float rotation;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:tp,alphahash_pars_fragment:np,alphamap_fragment:ip,alphamap_pars_fragment:sp,alphatest_fragment:rp,alphatest_pars_fragment:op,aomap_fragment:ap,aomap_pars_fragment:lp,batching_pars_vertex:cp,batching_vertex:hp,begin_vertex:up,beginnormal_vertex:fp,bsdfs:dp,iridescence_fragment:pp,bumpmap_pars_fragment:mp,clipping_planes_fragment:gp,clipping_planes_pars_fragment:_p,clipping_planes_pars_vertex:xp,clipping_planes_vertex:vp,color_fragment:yp,color_pars_fragment:Sp,color_pars_vertex:Mp,color_vertex:bp,common:wp,cube_uv_reflection_fragment:Ep,defaultnormal_vertex:Tp,displacementmap_pars_vertex:Ap,displacementmap_vertex:Cp,emissivemap_fragment:Rp,emissivemap_pars_fragment:Ip,colorspace_fragment:Pp,colorspace_pars_fragment:Lp,envmap_fragment:Dp,envmap_common_pars_fragment:Np,envmap_pars_fragment:Up,envmap_pars_vertex:Fp,envmap_physical_pars_fragment:qp,envmap_vertex:Op,fog_vertex:Bp,fog_pars_vertex:zp,fog_fragment:kp,fog_pars_fragment:Vp,gradientmap_pars_fragment:Hp,lightmap_pars_fragment:Gp,lights_lambert_fragment:Wp,lights_lambert_pars_fragment:Xp,lights_pars_begin:Yp,lights_toon_fragment:Zp,lights_toon_pars_fragment:$p,lights_phong_fragment:Jp,lights_phong_pars_fragment:Kp,lights_physical_fragment:jp,lights_physical_pars_fragment:Qp,lights_fragment_begin:em,lights_fragment_maps:tm,lights_fragment_end:nm,lightprobes_pars_fragment:im,logdepthbuf_fragment:sm,logdepthbuf_pars_fragment:rm,logdepthbuf_pars_vertex:om,logdepthbuf_vertex:am,map_fragment:lm,map_pars_fragment:cm,map_particle_fragment:hm,map_particle_pars_fragment:um,metalnessmap_fragment:fm,metalnessmap_pars_fragment:dm,morphinstance_vertex:pm,morphcolor_vertex:mm,morphnormal_vertex:gm,morphtarget_pars_vertex:_m,morphtarget_vertex:xm,normal_fragment_begin:vm,normal_fragment_maps:ym,normal_pars_fragment:Sm,normal_pars_vertex:Mm,normal_vertex:bm,normalmap_pars_fragment:wm,clearcoat_normal_fragment_begin:Em,clearcoat_normal_fragment_maps:Tm,clearcoat_pars_fragment:Am,iridescence_pars_fragment:Cm,opaque_fragment:Rm,packing:Im,premultiplied_alpha_fragment:Pm,project_vertex:Lm,dithering_fragment:Dm,dithering_pars_fragment:Nm,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:Bm,shadowmap_vertex:zm,shadowmask_pars_fragment:km,skinbase_vertex:Vm,skinning_pars_vertex:Hm,skinning_vertex:Gm,skinnormal_vertex:Wm,specularmap_fragment:Xm,specularmap_pars_fragment:Ym,tonemapping_fragment:qm,tonemapping_pars_fragment:Zm,transmission_fragment:$m,transmission_pars_fragment:Jm,uv_pars_fragment:Km,uv_pars_vertex:jm,uv_vertex:Qm,worldpos_vertex:eg,background_vert:tg,background_frag:ng,backgroundCube_vert:ig,backgroundCube_frag:sg,cube_vert:rg,cube_frag:og,depth_vert:ag,depth_frag:lg,distance_vert:cg,distance_frag:hg,equirect_vert:ug,equirect_frag:fg,linedashed_vert:dg,linedashed_frag:pg,meshbasic_vert:mg,meshbasic_frag:gg,meshlambert_vert:_g,meshlambert_frag:xg,meshmatcap_vert:vg,meshmatcap_frag:yg,meshnormal_vert:Sg,meshnormal_frag:Mg,meshphong_vert:bg,meshphong_frag:wg,meshphysical_vert:Eg,meshphysical_frag:Tg,meshtoon_vert:Ag,meshtoon_frag:Cg,points_vert:Rg,points_frag:Ig,shadow_vert:Pg,shadow_frag:Lg,sprite_vert:Dg,sprite_frag:Ng},Ce={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},qn={basic:{uniforms:on([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:on([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:on([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:on([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:on([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:on([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:on([Ce.points,Ce.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:on([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:on([Ce.common,Ce.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:on([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:on([Ce.sprite,Ce.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:on([Ce.common,Ce.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:on([Ce.lights,Ce.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};qn.physical={uniforms:on([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var Pl={r:0,b:0,g:0},Ug=new pt,wf=new Ke;wf.set(-1,0,0,0,1,0,0,0,1);function Fg(i,e,t,n,s,r){let o=new Ve(0),a=s===!0?0:1,c,h,d=null,m=0,u=null;function g(T){let D=T.isScene===!0?T.background:null;if(D&&D.isTexture){let w=T.backgroundBlurriness>0;D=e.get(D,w)}return D}function v(T){let D=!1,w=g(T);w===null?p(o,a):w&&w.isColor&&(p(w,1),D=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(T,D){let w=g(D);w&&(w.isCubeTexture||w.mapping===oo)?(h===void 0&&(h=new Et(new Ei(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:ts(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(D.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(wf),h.material.toneMapped=lt.getTransfer(w.colorSpace)!==_t,(d!==w||m!==w.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,d=w,m=w.version,u=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Et(new Ki(2,2),new Mn({name:"BackgroundMaterial",uniforms:ts(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.toneMapped=lt.getTransfer(w.colorSpace)!==_t,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||m!==w.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,m=w.version,u=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,D){T.getRGB(Pl,eh(i)),t.buffers.color.setClear(Pl.r,Pl.g,Pl.b,D,r)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,D=1){o.set(T),a=D,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,p(o,a)},render:v,addToRenderList:S,dispose:_}}function Og(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(k,q,Z,z,$){let se=!1,ie=m(k,z,Z,q);r!==ie&&(r=ie,h(r.object)),se=g(k,z,Z,$),se&&v(k,z,Z,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,w(k,q,Z,z),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return i.createVertexArray()}function h(k){return i.bindVertexArray(k)}function d(k){return i.deleteVertexArray(k)}function m(k,q,Z,z){let $=z.wireframe===!0,se=n[q.id];se===void 0&&(se={},n[q.id]=se);let ie=k.isInstancedMesh===!0?k.id:0,te=se[ie];te===void 0&&(te={},se[ie]=te);let Y=te[Z.id];Y===void 0&&(Y={},te[Z.id]=Y);let ne=Y[$];return ne===void 0&&(ne=u(c()),Y[$]=ne),ne}function u(k){let q=[],Z=[],z=[];for(let $=0;$<t;$++)q[$]=0,Z[$]=0,z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Z,attributeDivisors:z,object:k,attributes:{},index:null}}function g(k,q,Z,z){let $=r.attributes,se=q.attributes,ie=0,te=Z.getAttributes();for(let Y in te)if(te[Y].location>=0){let he=$[Y],Oe=se[Y];if(Oe===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(Oe=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(Oe=k.instanceColor)),he===void 0||he.attribute!==Oe||Oe&&he.data!==Oe.data)return!0;ie++}return r.attributesNum!==ie||r.index!==z}function v(k,q,Z,z){let $={},se=q.attributes,ie=0,te=Z.getAttributes();for(let Y in te)if(te[Y].location>=0){let he=se[Y];he===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(he=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(he=k.instanceColor));let Oe={};Oe.attribute=he,he&&he.data&&(Oe.data=he.data),$[Y]=Oe,ie++}r.attributes=$,r.attributesNum=ie,r.index=z}function S(){let k=r.newAttributes;for(let q=0,Z=k.length;q<Z;q++)k[q]=0}function p(k){_(k,0)}function _(k,q){let Z=r.newAttributes,z=r.enabledAttributes,$=r.attributeDivisors;Z[k]=1,z[k]===0&&(i.enableVertexAttribArray(k),z[k]=1),$[k]!==q&&(i.vertexAttribDivisor(k,q),$[k]=q)}function T(){let k=r.newAttributes,q=r.enabledAttributes;for(let Z=0,z=q.length;Z<z;Z++)q[Z]!==k[Z]&&(i.disableVertexAttribArray(Z),q[Z]=0)}function D(k,q,Z,z,$,se,ie){ie===!0?i.vertexAttribIPointer(k,q,Z,$,se):i.vertexAttribPointer(k,q,Z,z,$,se)}function w(k,q,Z,z){S();let $=z.attributes,se=Z.getAttributes(),ie=q.defaultAttributeValues;for(let te in se){let Y=se[te];if(Y.location>=0){let ne=$[te];if(ne===void 0&&(te==="instanceMatrix"&&k.instanceMatrix&&(ne=k.instanceMatrix),te==="instanceColor"&&k.instanceColor&&(ne=k.instanceColor)),ne!==void 0){let he=ne.normalized,Oe=ne.itemSize,Ae=e.get(ne);if(Ae===void 0)continue;let ht=Ae.buffer,Je=Ae.type,st=Ae.bytesPerElement,J=Je===i.INT||Je===i.UNSIGNED_INT||ne.gpuType===qa;if(ne.isInterleavedBufferAttribute){let ce=ne.data,Re=ce.stride,$e=ne.offset;if(ce.isInstancedInterleavedBuffer){for(let De=0;De<Y.locationSize;De++)_(Y.location+De,ce.meshPerAttribute);k.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let De=0;De<Y.locationSize;De++)p(Y.location+De);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let De=0;De<Y.locationSize;De++)D(Y.location+De,Oe/Y.locationSize,Je,he,Re*st,($e+Oe/Y.locationSize*De)*st,J)}else{if(ne.isInstancedBufferAttribute){for(let ce=0;ce<Y.locationSize;ce++)_(Y.location+ce,ne.meshPerAttribute);k.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ce=0;ce<Y.locationSize;ce++)p(Y.location+ce);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let ce=0;ce<Y.locationSize;ce++)D(Y.location+ce,Oe/Y.locationSize,Je,he,Oe*st,Oe/Y.locationSize*ce*st,J)}}else if(ie!==void 0){let he=ie[te];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(Y.location,he);break;case 3:i.vertexAttrib3fv(Y.location,he);break;case 4:i.vertexAttrib4fv(Y.location,he);break;default:i.vertexAttrib1fv(Y.location,he)}}}}T()}function R(){L();for(let k in n){let q=n[k];for(let Z in q){let z=q[Z];for(let $ in z){let se=z[$];for(let ie in se)d(se[ie].object),delete se[ie];delete z[$]}}delete n[k]}}function C(k){if(n[k.id]===void 0)return;let q=n[k.id];for(let Z in q){let z=q[Z];for(let $ in z){let se=z[$];for(let ie in se)d(se[ie].object),delete se[ie];delete z[$]}}delete n[k.id]}function N(k){for(let q in n){let Z=n[q];for(let z in Z){let $=Z[z];if($[k.id]===void 0)continue;let se=$[k.id];for(let ie in se)d(se[ie].object),delete se[ie];delete $[k.id]}}}function M(k){for(let q in n){let Z=n[q],z=k.isInstancedMesh===!0?k.id:0,$=Z[z];if($!==void 0){for(let se in $){let ie=$[se];for(let te in ie)d(ie[te].object),delete ie[te];delete $[se]}delete Z[z],Object.keys(Z).length===0&&delete n[q]}}}function L(){U(),o=!0,r!==s&&(r=s,h(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:U,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfObject:M,releaseStatesOfProgram:N,initAttributes:S,enableAttribute:p,disableUnusedAttributes:T}}function Bg(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let u=0;for(let g=0;g<d;g++)u+=h[g];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function zg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==Ut&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let M=N===Kt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==dn&&N!==rn&&!M&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp",d=c(h);d!==h&&(Ye("WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);let m=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:m,reversedDepthBuffer:u,maxTextures:g,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:T,maxVaryings:D,maxFragmentUniforms:w,maxSamples:R,samples:C}}function kg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ln,a=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,u){let g=m.length!==0||u||n!==0||s;return s=u,n=m.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,u){t=d(m,u,0)},this.setState=function(m,u,g){let v=m.clippingPlanes,S=m.clipIntersection,p=m.clipShadows,_=i.get(m);if(!s||v===null||v.length===0||r&&!p)r?d(null):h();else{let T=r?0:n,D=T*4,w=_.clippingState||null;c.value=w,w=d(v,u,D,g);for(let R=0;R!==D;++R)w[R]=t[R];_.clippingState=w,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(m,u,g,v){let S=m!==null?m.length:0,p=null;if(S!==0){if(p=c.value,v!==!0||p===null){let _=g+S*4,T=u.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<_)&&(p=new Float32Array(_));for(let D=0,w=g;D!==S;++D,w+=4)o.copy(m[D]).applyMatrix4(T,a),o.normal.toArray(p,w),p[w+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}var nr=4,Vg=6,Hg=20,Gg=256,go=new Ii,tf=new Ve,sh=null,rh=0,oh=0,ah=!1,Wg=new V,ns=new V,sr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Wg}=r;sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sh,rh,oh),this._renderer.xr.enabled=ah,e.scissorTest=!1,tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:At,minFilter:At,generateMipmaps:!1,type:Kt,format:Ut,colorSpace:vn,depthBuffer:!1},s=nf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Xg(r)),this._blurMaterial=qg(r,e,t),this._ggxMaterial=Yg(r,e,t)}return s}_compileMaterial(e){let t=new Et(new Ft,e);this._renderer.compile(t,go)}_sceneToCubeUV(e,t,n,s,r){let c=new Gt(90,1,t,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,u=m.autoClear,g=m.toneMapping;m.getClearColor(tf),m.toneMapping=On,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Et(new Ei,new Fr({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,p=S.material,_=!1,T=e.background;T?T.isColor&&(p.color.copy(T),e.background=null,_=!0):(p.color.copy(tf),_=!0);for(let D=0;D<6;D++){let w=D%3;w===0?(c.up.set(0,h[D],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[D],r.y,r.z)):w===1?(c.up.set(0,0,h[D]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[D],r.z)):(c.up.set(0,h[D],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[D]));let R=this._cubeSize;tr(s,w*R,D>2?R:0,R,R),m.setRenderTarget(s),_&&m.render(S,c),m.render(e,c)}m.toneMapping=g,m.autoClear=u,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ui||e.mapping===es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;tr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,go)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,h=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),m=Math.sqrt(h*h-d*d),u=h*1.25,g=m*u,{_lodMax:v}=this,S=this._sizeLods[n],p=3*S*(n>v-nr?n-v+nr:0),_=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=g,c.mipInt.value=v-t,tr(r,p,_,3*S,2*S),s.setRenderTarget(r),s.render(a,go),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=v-n,tr(e,p,_,3*S,2*S),s.setRenderTarget(e),s.render(a,go)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let h=a.uniforms;h.envMap.value=e.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],m=3*d*(s>this._lodMax-nr?s-this._lodMax+nr:0),u=4*(this._cubeSize-d);tr(t,m,u,3*d,2*d),o.setRenderTarget(t),o.render(c,go)}};function Xg(i){let e=[],t=[],n=i,s=i-nr+1+Vg;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),c=-a,h=1+a,d=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,u=6,g=3,v=new Float32Array(g*u*m),S=new Float32Array(g*u*m);for(let _=0;_<m;_++){let T=_%3*2/3-1,D=_>2?0:-1,w=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];v.set(w,g*u*_);for(let R=0;R<u;R++){let C=d[R*2]*2-1,N=d[R*2+1]*2-1;_===0?ns.set(1,N,C):_===1?ns.set(-C,1,-N):_===2?ns.set(-C,N,1):_===3?ns.set(-1,N,-C):_===4?ns.set(-C,-1,N):ns.set(C,N,-1),ns.toArray(S,(_*u+R)*g)}}let p=new Ft;p.setAttribute("position",new Rt(v,g)),p.setAttribute("outputDirection",new Rt(S,g)),t.push(new Et(p,null)),n>nr&&n--}return{lodMeshes:t,sizeLods:e}}function nf(i,e,t){let n=new un(i,e,t);return n.texture.mapping=oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Yg(i,e,t){return new Mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function qg(i,e,t){return new Mn({name:"SphericalGaussianBlur",defines:{SAMPLES:Hg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function sf(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function rf(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ul(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Dl=class extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new kr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ei(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:Xn});r.uniforms.tEquirect.value=t;let o=new Et(s,r),a=t.minFilter;return t.minFilter===fi&&(t.minFilter=At),new Va(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Zg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,g=!1){return u==null?null:g?o(u):r(u)}function r(u){if(u&&u.isTexture){let g=u.mapping;if(g===js||g===Xa)if(e.has(u)){let v=e.get(u).texture;return a(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let S=new Dl(v.height);return S.fromEquirectangularTexture(i,u),e.set(u,S),u.addEventListener("dispose",h),a(S.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let g=u.mapping,v=g===js||g===Xa,S=g===Ui||g===es;if(v||S){let p=t.get(u),_=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return n===null&&(n=new sr(i)),p=v?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let T=u.image;return v&&T&&T.height>0||S&&T&&c(T)?(n===null&&(n=new sr(i)),p=v?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",d),p.texture):null}}}return u}function a(u,g){return g===js?u.mapping=Ui:g===Xa&&(u.mapping=es),u}function c(u){let g=0,v=6;for(let S=0;S<v;S++)u[S]!==void 0&&g++;return g===v}function h(u){let g=u.target;g.removeEventListener("dispose",h);let v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function d(u){let g=u.target;g.removeEventListener("dispose",d);let v=t.get(g);v!==void 0&&(t.delete(g),v.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function $g(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Wi("WebGLRenderer: "+n+" extension not supported."),s}}}function Jg(i,e,t,n){let s={},r=new WeakMap;function o(m){let u=m.target;u.index!==null&&e.remove(u.index);for(let v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",o),delete s[u.id];let g=r.get(u);g&&(e.remove(g),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(m,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(m){let u=m.attributes;for(let g in u)e.update(u[g],i.ARRAY_BUFFER)}function h(m){let u=[],g=m.index,v=m.attributes.position,S=0;if(v===void 0)return;if(g!==null){let T=g.array;S=g.version;for(let D=0,w=T.length;D<w;D+=3){let R=T[D+0],C=T[D+1],N=T[D+2];u.push(R,C,C,N,N,R)}}else{let T=v.array;S=v.version;for(let D=0,w=T.length/3-1;D<w;D+=3){let R=D+0,C=D+1,N=D+2;u.push(R,C,C,N,N,R)}}let p=new(v.count>=65535?Dr:Lr)(u,1);p.version=S;let _=r.get(m);_&&e.remove(_),r.set(m,p)}function d(m){let u=r.get(m);if(u){let g=m.index;g!==null&&u.version<g.version&&h(m)}else h(m);return r.get(m)}return{get:a,update:c,getWireframeAttribute:d}}function Kg(i,e,t){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function c(m,u){i.drawElements(n,u,r,m*o),t.update(u,n,1)}function h(m,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,m*o,g),t.update(u,n,g))}function d(m,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,m,0,g);let S=0;for(let p=0;p<g;p++)S+=u[p];t.update(S,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function jg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:qe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Qg(i,e,t){let n=new WeakMap,s=new It;function r(o,a,c){let h=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=d!==void 0?d.length:0,u=n.get(a);if(u===void 0||u.count!==m){let L=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],D=0;g===!0&&(D=1),v===!0&&(D=2),S===!0&&(D=3);let w=a.attributes.position.count*D,R=1;w>e.maxTextureSize&&(R=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let C=new Float32Array(w*R*4*m),N=new Pr(C,w,R,m);N.type=rn,N.needsUpdate=!0;let M=D*4;for(let U=0;U<m;U++){let k=p[U],q=_[U],Z=T[U],z=w*R*4*U;for(let $=0;$<k.count;$++){let se=$*M;g===!0&&(s.fromBufferAttribute(k,$),C[z+se+0]=s.x,C[z+se+1]=s.y,C[z+se+2]=s.z,C[z+se+3]=0),v===!0&&(s.fromBufferAttribute(q,$),C[z+se+4]=s.x,C[z+se+5]=s.y,C[z+se+6]=s.z,C[z+se+7]=0),S===!0&&(s.fromBufferAttribute(Z,$),C[z+se+8]=s.x,C[z+se+9]=s.y,C[z+se+10]=s.z,C[z+se+11]=Z.itemSize===4?s.w:1)}}u={count:m,texture:N,size:new Ge(w,R)},n.set(a,u),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let S=0;S<h.length;S++)g+=h[S];let v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function e0(i,e,t,n,s){let r=new WeakMap;function o(h){let d=s.render.frame,m=h.geometry,u=e.get(h,m);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==d&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){let g=h.skeleton;r.get(g)!==d&&(g.update(),r.set(g,d))}return u}function a(){r=new WeakMap}function c(h){let d=h.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var t0={[Oc]:"LINEAR_TONE_MAPPING",[Bc]:"REINHARD_TONE_MAPPING",[zc]:"CINEON_TONE_MAPPING",[ro]:"ACES_FILMIC_TONE_MAPPING",[Vc]:"AGX_TONE_MAPPING",[Hc]:"NEUTRAL_TONE_MAPPING",[kc]:"CUSTOM_TONE_MAPPING"};function n0(i,e,t,n,s,r){let o=new un(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,h=new Ft;h.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new $t([0,2,0,0,2,0],2));let d=new Aa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Et(h,d),u=new Ii(-1,1,1,-1,0,1),g=null,v=null,S=!1,p,_=null,T=[],D=!1;this.setSize=function(w,R){o.setSize(w,R),a!==null&&a.setSize(w,R),c!==null&&c.setSize(w,R);for(let C=0;C<T.length;C++){let N=T[C];N.setSize&&N.setSize(w,R)}},this.setEffects=function(w){T=w,D=T.length>0&&T[0].isRenderPass===!0;let R=o.width,C=o.height;T.length>0&&a===null&&(a=new un(R,C,{type:Kt,depthBuffer:!1,stencilBuffer:!1}),c=new un(R,C,{type:Kt,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<T.length;N++){let M=T[N];M.setSize&&M.setSize(R,C)}},this.begin=function(w,R){if(S||w.toneMapping===On&&T.length===0)return!1;if(_=R,R!==null){let C=R.width,N=R.height;(o.width!==C||o.height!==N)&&this.setSize(C,N)}return D===!1&&w.setRenderTarget(o),p=w.toneMapping,w.toneMapping=On,!0},this.hasRenderPass=function(){return D},this.end=function(w,R){w.toneMapping=p,S=!0;let C=o,N=a;for(let M=0;M<T.length;M++){let L=T[M];L.enabled!==!1&&(L.render(w,N,C,R),L.needsSwap!==!1&&(C=N,N=N===a?c:a))}if(g!==w.outputColorSpace||v!==w.toneMapping){g=w.outputColorSpace,v=w.toneMapping,d.defines={},lt.getTransfer(g)===_t&&(d.defines.SRGB_TRANSFER="");let M=t0[v];M&&(d.defines[M]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=C.texture,w.setRenderTarget(_),w.render(m,u),_=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var Ef=new tn,hh=new wi(1,1),Tf=new Pr,Af=new ba,Cf=new kr,of=[],af=[],lf=new Float32Array(16),cf=new Float32Array(9),hf=new Float32Array(4);function rr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=of[s];if(r===void 0&&(r=new Float32Array(s),of[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fl(i,e){let t=af[e];t===void 0&&(t=new Int32Array(e),af[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function i0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function s0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function r0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function o0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function a0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;hf.set(n),i.uniformMatrix2fv(this.addr,!1,hf),Bt(t,n)}}function l0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;cf.set(n),i.uniformMatrix3fv(this.addr,!1,cf),Bt(t,n)}}function c0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;lf.set(n),i.uniformMatrix4fv(this.addr,!1,lf),Bt(t,n)}}function h0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function u0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function f0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function d0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function p0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function m0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function g0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function _0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function x0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(hh.compareFunction=t.isReversedDepthBuffer()?Il:Rl,r=hh):r=Ef,t.setTexture2D(e||r,s)}function v0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Af,s)}function y0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Cf,s)}function S0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Tf,s)}function M0(i){switch(i){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return o0;case 35674:return a0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return h0;case 35667:case 35671:return u0;case 35668:case 35672:return f0;case 35669:case 35673:return d0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return S0}}function b0(i,e){i.uniform1fv(this.addr,e)}function w0(i,e){let t=rr(e,this.size,2);i.uniform2fv(this.addr,t)}function E0(i,e){let t=rr(e,this.size,3);i.uniform3fv(this.addr,t)}function T0(i,e){let t=rr(e,this.size,4);i.uniform4fv(this.addr,t)}function A0(i,e){let t=rr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function C0(i,e){let t=rr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function R0(i,e){let t=rr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function I0(i,e){i.uniform1iv(this.addr,e)}function P0(i,e){i.uniform2iv(this.addr,e)}function L0(i,e){i.uniform3iv(this.addr,e)}function D0(i,e){i.uniform4iv(this.addr,e)}function N0(i,e){i.uniform1uiv(this.addr,e)}function U0(i,e){i.uniform2uiv(this.addr,e)}function F0(i,e){i.uniform3uiv(this.addr,e)}function O0(i,e){i.uniform4uiv(this.addr,e)}function B0(i,e,t){let n=this.cache,s=e.length,r=Fl(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=hh:o=Ef;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function z0(i,e,t){let n=this.cache,s=e.length,r=Fl(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Af,r[o])}function k0(i,e,t){let n=this.cache,s=e.length,r=Fl(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Cf,r[o])}function V0(i,e,t){let n=this.cache,s=e.length,r=Fl(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Tf,r[o])}function H0(i){switch(i){case 5126:return b0;case 35664:return w0;case 35665:return E0;case 35666:return T0;case 35674:return A0;case 35675:return C0;case 35676:return R0;case 5124:case 35670:return I0;case 35667:case 35671:return P0;case 35668:case 35672:return L0;case 35669:case 35673:return D0;case 5125:return N0;case 36294:return U0;case 36295:return F0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return B0;case 35679:case 36299:case 36307:return z0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return V0}}var uh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=M0(t.type)}},fh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=H0(t.type)}},dh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},lh=/(\w+)(\])?(\[|\.)?/g;function uf(i,e){i.seq.push(e),i.map[e.id]=e}function G0(i,e,t){let n=i.name,s=n.length;for(lh.lastIndex=0;;){let r=lh.exec(n),o=lh.lastIndex,a=r[1],c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===s){uf(t,h===void 0?new uh(a,i,e):new fh(a,i,e));break}else{let m=t.map[a];m===void 0&&(m=new dh(a),uf(t,m)),t=m}}}var ir=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);G0(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function ff(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var W0=37297,X0=0;function Y0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var df=new Ke;function q0(i){lt._getMatrix(df,lt.workingColorSpace,i);let e=`mat3( ${df.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case Rr:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function pf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Y0(i.getShaderSource(e),a)}else return r}function Z0(i,e){let t=q0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var $0={[Oc]:"Linear",[Bc]:"Reinhard",[zc]:"Cineon",[ro]:"ACESFilmic",[Vc]:"AgX",[Hc]:"Neutral",[kc]:"Custom"};function J0(i,e){let t=$0[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ll=new V;function K0(){lt.getLuminanceCoefficients(Ll);let i=Ll.x.toFixed(4),e=Ll.y.toFixed(4),t=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function Q0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function e_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function xo(i){return i!==""}function mf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var t_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(i){return i.replace(t_,i_)}var n_=new Map;function i_(i,e){let t=it[e];if(t===void 0){let n=n_.get(e);if(n!==void 0)t=it[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ph(t)}var s_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _f(i){return i.replace(s_,r_)}function r_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var o_={[so]:"SHADOWMAP_TYPE_PCF",[Js]:"SHADOWMAP_TYPE_VSM"};function a_(i){return o_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var l_={[Ui]:"ENVMAP_TYPE_CUBE",[es]:"ENVMAP_TYPE_CUBE",[oo]:"ENVMAP_TYPE_CUBE_UV"};function c_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":l_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var h_={[es]:"ENVMAP_MODE_REFRACTION"};function u_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":h_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var f_={[Wa]:"ENVMAP_BLENDING_MULTIPLY",[Nu]:"ENVMAP_BLENDING_MIX",[Uu]:"ENVMAP_BLENDING_ADD"};function d_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":f_[i.combine]||"ENVMAP_BLENDING_NONE"}function p_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function m_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=a_(t),h=c_(t),d=u_(t),m=d_(t),u=p_(t),g=j0(t),v=Q0(r),S=s.createProgram(),p,_,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(xo).join(`
`),p.length>0&&(p+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(xo).join(`
`),_.length>0&&(_+=`
`)):(p=[xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),_=[xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?it.tonemapping_pars_fragment:"",t.toneMapping!==On?J0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,Z0("linearToOutputTexel",t.outputColorSpace),K0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xo).join(`
`)),o=ph(o),o=mf(o,t),o=gf(o,t),a=ph(a),a=mf(a,t),a=gf(a,t),o=_f(o),a=_f(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let D=T+p+o,w=T+_+a,R=ff(s,s.VERTEX_SHADER,D),C=ff(s,s.FRAGMENT_SHADER,w);s.attachShader(S,R),s.attachShader(S,C),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function N(k){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(S)||"",Z=s.getShaderInfoLog(R)||"",z=s.getShaderInfoLog(C)||"",$=q.trim(),se=Z.trim(),ie=z.trim(),te=!0,Y=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,R,C);else{let ne=pf(s,R,"vertex"),he=pf(s,C,"fragment");qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+$+`
`+ne+`
`+he)}else $!==""?Ye("WebGLProgram: Program Info Log:",$):(se===""||ie==="")&&(Y=!1);Y&&(k.diagnostics={runnable:te,programLog:$,vertexShader:{log:se,prefix:p},fragmentShader:{log:ie,prefix:_}})}s.deleteShader(R),s.deleteShader(C),M=new ir(s,S),L=e_(s,S)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let L;this.getAttributes=function(){return L===void 0&&N(this),L};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(S,W0)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=X0++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=C,this}var g_=0,mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new gh(e),t.set(e,n)),n}},gh=class{constructor(e){this.id=g_++,this.code=e,this.usedTimes=0}};function __(i){return i===pn||i===fo||i===po}function x_(i,e,t,n,s,r){let o=new Hs,a=new mh,c=new Set,h=[],d=new Map,m=n.logarithmicDepthBuffer,u=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function S(M,L,U,k,q,Z){let z=k.fog,$=q.geometry,se=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?k.environment:null,ie=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,te=e.get(M.envMap||se,ie),Y=te&&te.mapping===oo?te.image.height:null,ne=g[M.type];M.precision!==null&&(u=n.getMaxPrecision(M.precision),u!==M.precision&&Ye("WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));let he=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Oe=he!==void 0?he.length:0,Ae=0;$.morphAttributes.position!==void 0&&(Ae=1),$.morphAttributes.normal!==void 0&&(Ae=2),$.morphAttributes.color!==void 0&&(Ae=3);let ht,Je,st,J;if(ne){let St=qn[ne];ht=St.vertexShader,Je=St.fragmentShader}else{ht=M.vertexShader,Je=M.fragmentShader;let St=a.getVertexShaderStage(M),dt=a.getFragmentShaderStage(M);a.update(M,St,dt),st=St.id,J=dt.id}let ce=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),$e=q.isInstancedMesh===!0,De=q.isBatchedMesh===!0,je=!!M.map,Ct=!!M.matcap,Qe=!!te,ot=!!M.aoMap,gt=!!M.lightMap,rt=!!M.bumpMap&&M.wireframe===!1,bt=!!M.normalMap,Dt=!!M.displacementMap,Xt=!!M.emissiveMap,wt=!!M.metalnessMap,Lt=!!M.roughnessMap,B=M.anisotropy>0,kt=M.clearcoat>0,ft=M.dispersion>0,P=M.retroreflectivity>0,y=M.iridescence>0,W=M.sheen>0,K=M.transmission>0,re=B&&!!M.anisotropyMap,ye=kt&&!!M.clearcoatMap,Me=kt&&!!M.clearcoatNormalMap,ae=kt&&!!M.clearcoatRoughnessMap,ue=y&&!!M.iridescenceMap,Ee=y&&!!M.iridescenceThicknessMap,Le=W&&!!M.sheenColorMap,ve=W&&!!M.sheenRoughnessMap,we=!!M.specularMap,Fe=!!M.specularColorMap,Ue=!!M.specularIntensityMap,ze=K&&!!M.transmissionMap,O=K&&!!M.thicknessMap,j=!!M.gradientMap,le=!!M.alphaMap,Te=M.alphaTest>0,Ie=!!M.alphaHash,pe=!!M.extensions,He=On;M.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(He=i.toneMapping);let Be={shaderID:ne,shaderType:M.type,shaderName:M.name,vertexShader:ht,fragmentShader:Je,defines:M.defines,customVertexShaderID:st,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:De,batchingColor:De&&q._colorsTexture!==null,instancing:$e,instancingColor:$e&&q.instanceColor!==null,instancingMorph:$e&&q.morphTexture!==null,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:je,matcap:Ct,envMap:Qe,envMapMode:Qe&&te.mapping,envMapCubeUVHeight:Y,aoMap:ot,lightMap:gt,bumpMap:rt,normalMap:bt,displacementMap:Dt,emissiveMap:Xt,normalMapObjectSpace:bt&&M.normalMapType===Bu,normalMapTangentSpace:bt&&M.normalMapType===mo,packedNormalMap:bt&&M.normalMapType===mo&&__(M.normalMap.format),metalnessMap:wt,roughnessMap:Lt,anisotropy:B,anisotropyMap:re,clearcoat:kt,clearcoatMap:ye,clearcoatNormalMap:Me,clearcoatRoughnessMap:ae,dispersion:ft,retroreflection:P,iridescence:y,iridescenceMap:ue,iridescenceThicknessMap:Ee,sheen:W,sheenColorMap:Le,sheenRoughnessMap:ve,specularMap:we,specularColorMap:Fe,specularIntensityMap:Ue,transmission:K,transmissionMap:ze,thicknessMap:O,gradientMap:j,opaque:M.transparent===!1&&M.blending===Ks&&M.alphaToCoverage===!1,alphaMap:le,alphaTest:Te,alphaHash:Ie,combine:M.combine,mapUv:je&&v(M.map.channel),aoMapUv:ot&&v(M.aoMap.channel),lightMapUv:gt&&v(M.lightMap.channel),bumpMapUv:rt&&v(M.bumpMap.channel),normalMapUv:bt&&v(M.normalMap.channel),displacementMapUv:Dt&&v(M.displacementMap.channel),emissiveMapUv:Xt&&v(M.emissiveMap.channel),metalnessMapUv:wt&&v(M.metalnessMap.channel),roughnessMapUv:Lt&&v(M.roughnessMap.channel),anisotropyMapUv:re&&v(M.anisotropyMap.channel),clearcoatMapUv:ye&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Me&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(M.sheenRoughnessMap.channel),specularMapUv:we&&v(M.specularMap.channel),specularColorMapUv:Fe&&v(M.specularColorMap.channel),specularIntensityMapUv:Ue&&v(M.specularIntensityMap.channel),transmissionMapUv:ze&&v(M.transmissionMap.channel),thicknessMapUv:O&&v(M.thicknessMap.channel),alphaMapUv:le&&v(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(bt||B),vertexNormals:!!$.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!$.attributes.uv&&(je||le),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||$.attributes.normal===void 0&&bt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Re,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Ae,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:je&&M.map.isVideoTexture===!0&&lt.getTransfer(M.map.colorSpace)===_t,decodeVideoTextureEmissive:Xt&&M.emissiveMap.isVideoTexture===!0&&lt.getTransfer(M.emissiveMap.colorSpace)===_t,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===sn,flipSided:M.side===Jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:pe&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&M.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function p(M){let L=[];if(M.shaderID?L.push(M.shaderID):(L.push(M.customVertexShaderID),L.push(M.customFragmentShaderID)),M.defines!==void 0)for(let U in M.defines)L.push(U),L.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(_(L,M),T(L,M),L.push(i.outputColorSpace)),L.push(M.customProgramCacheKey),L.join()}function _(M,L){M.push(L.precision),M.push(L.outputColorSpace),M.push(L.envMapMode),M.push(L.envMapCubeUVHeight),M.push(L.mapUv),M.push(L.alphaMapUv),M.push(L.lightMapUv),M.push(L.aoMapUv),M.push(L.bumpMapUv),M.push(L.normalMapUv),M.push(L.displacementMapUv),M.push(L.emissiveMapUv),M.push(L.metalnessMapUv),M.push(L.roughnessMapUv),M.push(L.anisotropyMapUv),M.push(L.clearcoatMapUv),M.push(L.clearcoatNormalMapUv),M.push(L.clearcoatRoughnessMapUv),M.push(L.iridescenceMapUv),M.push(L.iridescenceThicknessMapUv),M.push(L.sheenColorMapUv),M.push(L.sheenRoughnessMapUv),M.push(L.specularMapUv),M.push(L.specularColorMapUv),M.push(L.specularIntensityMapUv),M.push(L.transmissionMapUv),M.push(L.thicknessMapUv),M.push(L.combine),M.push(L.fogExp2),M.push(L.sizeAttenuation),M.push(L.morphTargetsCount),M.push(L.morphAttributeCount),M.push(L.numSunLights),M.push(L.numDirLights),M.push(L.numPointLights),M.push(L.numSpotLights),M.push(L.numSpotLightMaps),M.push(L.numHemiLights),M.push(L.numRectAreaLights),M.push(L.numSunLightShadows),M.push(L.numDirLightShadows),M.push(L.numPointLightShadows),M.push(L.numSpotLightShadows),M.push(L.numSpotLightShadowsWithMaps),M.push(L.numLightProbes),M.push(L.shadowMapType),M.push(L.toneMapping),M.push(L.numClippingPlanes),M.push(L.numClipIntersection),M.push(L.depthPacking)}function T(M,L){o.disableAll(),L.instancing&&o.enable(0),L.instancingColor&&o.enable(1),L.instancingMorph&&o.enable(2),L.matcap&&o.enable(3),L.envMap&&o.enable(4),L.normalMapObjectSpace&&o.enable(5),L.normalMapTangentSpace&&o.enable(6),L.clearcoat&&o.enable(7),L.iridescence&&o.enable(8),L.alphaTest&&o.enable(9),L.vertexColors&&o.enable(10),L.vertexAlphas&&o.enable(11),L.vertexUv1s&&o.enable(12),L.vertexUv2s&&o.enable(13),L.vertexUv3s&&o.enable(14),L.vertexTangents&&o.enable(15),L.anisotropy&&o.enable(16),L.alphaHash&&o.enable(17),L.batching&&o.enable(18),L.dispersion&&o.enable(19),L.retroreflection&&o.enable(24),L.batchingColor&&o.enable(20),L.gradientMap&&o.enable(21),L.packedNormalMap&&o.enable(22),L.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.reversedDepthBuffer&&o.enable(4),L.skinning&&o.enable(5),L.morphTargets&&o.enable(6),L.morphNormals&&o.enable(7),L.morphColors&&o.enable(8),L.premultipliedAlpha&&o.enable(9),L.shadowMapEnabled&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.transmission&&o.enable(15),L.sheen&&o.enable(16),L.opaque&&o.enable(17),L.pointsUvs&&o.enable(18),L.decodeVideoTexture&&o.enable(19),L.decodeVideoTextureEmissive&&o.enable(20),L.alphaToCoverage&&o.enable(21),L.numLightProbeGrids>0&&o.enable(22),L.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function D(M){let L=g[M.type],U;if(L){let k=qn[L];U=ju.clone(k.uniforms)}else U=M.uniforms;return U}function w(M,L){let U=d.get(L);return U!==void 0?++U.usedTimes:(U=new m_(i,L,M,s),h.push(U),d.set(L,U)),U}function R(M){if(--M.usedTimes===0){let L=h.indexOf(M);h[L]=h[h.length-1],h.pop(),d.delete(M.cacheKey),M.destroy()}}function C(M){a.remove(M)}function N(){a.dispose()}return{getParameters:S,getProgramCacheKey:p,getUniforms:D,acquireProgram:w,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:N}}function v_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function y_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function vf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let g=0;return u.isInstancedMesh&&(g+=2),u.isSkinnedMesh&&(g+=1),g}function a(u,g,v,S,p,_){let T=i[e];return T===void 0?(T={id:u.id,object:u,geometry:g,material:v,materialVariant:o(u),groupOrder:S,renderOrder:u.renderOrder,z:p,group:_},i[e]=T):(T.id=u.id,T.object=u,T.geometry=g,T.material=v,T.materialVariant=o(u),T.groupOrder=S,T.renderOrder=u.renderOrder,T.z=p,T.group=_),e++,T}function c(u,g,v,S,p,_,T){T.reversedDepth===!0&&(p=-p);let D=a(u,g,v,S,p,_);v.transmission>0?n.push(D):v.transparent===!0?s.push(D):t.push(D)}function h(u,g,v,S,p,_){let T=a(u,g,v,S,p,_);v.transmission>0?n.unshift(T):v.transparent===!0?s.unshift(T):t.unshift(T)}function d(u,g){t.length>1&&t.sort(u||y_),n.length>1&&n.sort(g||vf),s.length>1&&s.sort(g||vf)}function m(){for(let u=e,g=i.length;u<g;u++){let v=i[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:h,finish:m,sort:d}}function S_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new yf,i.set(n,[o])):s>=r.length?(o=new yf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function M_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new V,color:new Ve};break;case"SpotLight":t={position:new V,direction:new V,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function b_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var w_=0;function E_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function T_(i){let e=new M_,t=b_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new V);let s=new V,r=new pt,o=new pt;function a(h){let d=0,m=0,u=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let g=0,v=0,S=0,p=0,_=0,T=0,D=0,w=0,R=0,C=0,N=0,M=0,L=0,U=0;h.sort(E_);for(let q=0,Z=h.length;q<Z;q++){let z=h[q],$=z.color,se=z.intensity,ie=z.distance,te=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===pn?te=z.shadow.map.texture:te=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)d+=$.r*se,m+=$.g*se,u+=$.b*se;else if(z.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(z.sh.coefficients[Y],se);U++}else if(z.isSunLight){let Y=e.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let ne=z.shadow,he=t.get(z);he.shadowIntensity=ne.intensity,he.shadowBias=ne.bias,he.shadowNormalBias=ne.normalBias,he.shadowRadius=ne.radius,he.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),n.sunShadow[v]=he,n.sunShadowMap[v]=te;let Oe=ne.getViewportCount();for(let Ae=0;Ae<Oe;Ae++)n.sunShadowMatrix[S+Ae]=ne.getMatrix(Ae),n.sunShadowCascade[S+Ae]=ne._cascadeData[Ae];S+=Oe,v++}n.sun[g]=Y,g++}else if(z.isDirectionalLight){let Y=e.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let ne=z.shadow,he=t.get(z);he.shadowIntensity=ne.intensity,he.shadowBias=ne.bias,he.shadowNormalBias=ne.normalBias,he.shadowRadius=ne.radius,he.shadowMapSize=ne.mapSize,n.directionalShadow[p]=he,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=z.shadow.matrix,R++}n.directional[p]=Y,p++}else if(z.isSpotLight){let Y=e.get(z);Y.position.setFromMatrixPosition(z.matrixWorld),Y.color.copy($).multiplyScalar(se),Y.distance=ie,Y.coneCos=Math.cos(z.angle),Y.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Y.decay=z.decay,n.spot[T]=Y;let ne=z.shadow;if(z.map&&(n.spotLightMap[M]=z.map,M++,ne.updateMatrices(z),z.castShadow&&L++),n.spotLightMatrix[T]=ne.matrix,z.castShadow){let he=t.get(z);he.shadowIntensity=ne.intensity,he.shadowBias=ne.bias,he.shadowNormalBias=ne.normalBias,he.shadowRadius=ne.radius,he.shadowMapSize=ne.mapSize,n.spotShadow[T]=he,n.spotShadowMap[T]=te,N++}T++}else if(z.isRectAreaLight){let Y=e.get(z);Y.color.copy($).multiplyScalar(se),Y.halfWidth.set(z.width*.5,0,0),Y.halfHeight.set(0,z.height*.5,0),n.rectArea[D]=Y,D++}else if(z.isPointLight){let Y=e.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity),Y.distance=z.distance,Y.decay=z.decay,z.castShadow){let ne=z.shadow,he=t.get(z);he.shadowIntensity=ne.intensity,he.shadowBias=ne.bias,he.shadowNormalBias=ne.normalBias,he.shadowRadius=ne.radius,he.shadowMapSize=ne.mapSize,he.shadowCameraNear=ne.camera.near,he.shadowCameraFar=ne.camera.far,n.pointShadow[_]=he,n.pointShadowMap[_]=te,n.pointShadowMatrix[_]=z.shadow.matrix,C++}n.point[_]=Y,_++}else if(z.isHemisphereLight){let Y=e.get(z);Y.skyColor.copy(z.color).multiplyScalar(se),Y.groundColor.copy(z.groundColor).multiplyScalar(se),n.hemi[w]=Y,w++}}D>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=u;let k=n.hash;(k.sunLength!==g||k.directionalLength!==p||k.pointLength!==_||k.spotLength!==T||k.rectAreaLength!==D||k.hemiLength!==w||k.numSunShadows!==v||k.numDirectionalShadows!==R||k.numPointShadows!==C||k.numSpotShadows!==N||k.numSpotMaps!==M||k.numLightProbes!==U)&&(n.sun.length=g,n.directional.length=p,n.spot.length=T,n.rectArea.length=D,n.point.length=_,n.hemi.length=w,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=N,n.spotShadowMap.length=N,n.spotLightMatrix.length=N+M-L,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=U,k.sunLength=g,k.directionalLength=p,k.pointLength=_,k.spotLength=T,k.rectAreaLength=D,k.hemiLength=w,k.numSunShadows=v,k.numDirectionalShadows=R,k.numPointShadows=C,k.numSpotShadows=N,k.numSpotMaps=M,k.numLightProbes=U,n.version=w_++)}function c(h,d){let m=0,u=0,g=0,v=0,S=0,p=0,_=d.matrixWorldInverse;for(let T=0,D=h.length;T<D;T++){let w=h[T];if(w.isSunLight){let R=n.sun[m];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(_),m++}else if(w.isDirectionalLight){let R=n.directional[u];R.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(_),u++}else if(w.isSpotLight){let R=n.spot[v];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(_),v++}else if(w.isRectAreaLight){let R=n.rectArea[S];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(_),o.identity(),r.copy(w.matrixWorld),r.premultiply(_),o.extractRotation(r),R.halfWidth.set(w.width*.5,0,0),R.halfHeight.set(0,w.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),S++}else if(w.isPointLight){let R=n.point[g];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(_),g++}else if(w.isHemisphereLight){let R=n.hemi[p];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(_),p++}}}return{setup:a,setupView:c,state:n}}function Sf(i){let e=new T_(i),t=[],n=[],s=[];function r(u){m.camera=u,t.length=0,n.length=0,s.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function c(u){s.push(u)}function h(){e.setup(t)}function d(u){e.setupView(t,u)}let m={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:h,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function A_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Sf(i),e.set(s,[a])):r>=o.length?(a=new Sf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var C_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R_=`uniform sampler2D shadow_pass;
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
}`,I_=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],P_=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Mf=new pt,_o=new V,ch=new V;function L_(i,e,t){let n=new Ys,s=new Ge,r=new Ge,o=new It,a=new Ca,c=new Ra,h={},d=t.maxTextureSize,m={[Ni]:Jt,[Jt]:Ni,[sn]:sn},u=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:C_,fragmentShader:R_}),g=u.clone();g.defines.HORIZONTAL_PASS=1;let v=new Ft;v.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Et(v,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=so;let _=this.type;this.render=function(C,N,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;this.type===Ga&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=so);let L=i.getRenderTarget(),U=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Xn),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let Z=_!==this.type;Z&&N.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach($=>$.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,$=C.length;z<$;z++){let se=C[z],ie=se.shadow;if(ie===void 0){Ye("WebGLShadowMap:",se,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;s.copy(ie.mapSize);let te=ie.getFrameExtents();s.multiply(te),r.copy(ie.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/te.x),s.x=r.x*te.x,ie.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/te.y),s.y=r.y*te.y,ie.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(ie.camera._reversedDepth=Y,ie.map===null||Z===!0){if(ie.map!==null&&(ie.map.depthTexture!==null&&(ie.map.depthTexture.dispose(),ie.map.depthTexture=null),ie.map.dispose()),this.type===Js){if(se.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ie.map=new un(s.x,s.y,{format:pn,type:Kt,minFilter:At,magFilter:At,generateMipmaps:!1}),ie.map.texture.name=se.name+".shadowMap",ie.map.depthTexture=new wi(s.x,s.y,rn),ie.map.depthTexture.name=se.name+".shadowMapDepth",ie.map.depthTexture.format=Gn,ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=Wt,ie.map.depthTexture.magFilter=Wt}else se.isPointLight?(ie.map=new Dl(s.x),ie.map.depthTexture=new Ta(s.x,Bn)):(ie.map=new un(s.x,s.y),ie.map.depthTexture=new wi(s.x,s.y,Bn)),ie.map.depthTexture.name=se.name+".shadowMap",ie.map.depthTexture.format=Gn,this.type===so?(ie.map.depthTexture.compareFunction=Y?Il:Rl,ie.map.depthTexture.minFilter=At,ie.map.depthTexture.magFilter=At):(ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=Wt,ie.map.depthTexture.magFilter=Wt);ie.camera.updateProjectionMatrix()}ie.map.isWebGLCubeRenderTarget!==!0&&(ie.map.width!==s.x||ie.map.height!==s.y)&&ie.map.setSize(s.x,s.y);let ne=ie.map.isWebGLCubeRenderTarget?6:ie.getViewportCount();se.isPointLight!==!0&&ie.updateMatrices(se,M);for(let he=0;he<ne;he++){let Oe=ie.getCamera(he);if(se.isPointLight){let Ae=ie.camera,ht=ie.matrix,Je=se.distance||Ae.far;Je!==Ae.far&&(Ae.far=Je,Ae.updateProjectionMatrix()),_o.setFromMatrixPosition(se.matrixWorld),Ae.position.copy(_o),ch.copy(Ae.position),ch.add(I_[he]),Ae.up.copy(P_[he]),Ae.lookAt(ch),Ae.updateMatrixWorld(),ht.makeTranslation(-_o.x,-_o.y,-_o.z),Mf.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),ie._frustum.setFromProjectionMatrix(Mf,Ae.coordinateSystem,Ae.reversedDepth)}if(ie.map.isWebGLCubeRenderTarget)i.setRenderTarget(ie.map,he),i.clear();else{he===0&&(i.setRenderTarget(ie.map),i.clear());let Ae=ie.getViewport(he);o.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),q.viewport(o)}n=ie.getFrustum(he),w(N,M,Oe,se,this.type)}ie.isPointLightShadow!==!0&&this.type===Js&&T(ie,M),ie.needsUpdate=!1}_=this.type,p.needsUpdate=!1,i.setRenderTarget(L,U,k)};function T(C,N){let M=e.update(S);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null?C.mapPass=new un(s.x,s.y,{format:pn,type:Kt}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),u.uniforms.shadow_pass.value=C.map.depthTexture,u.uniforms.resolution.value.set(C.map.width,C.map.height),u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(N,null,M,u,S,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value.set(C.map.width,C.map.height),g.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(N,null,M,g,S,null)}function D(C,N,M,L){let U=null,k=M.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(k!==void 0)U=k;else if(U=M.isPointLight===!0?c:a,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let q=U.uuid,Z=N.uuid,z=h[q];z===void 0&&(z={},h[q]=z);let $=z[Z];$===void 0&&($=U.clone(),z[Z]=$,N.addEventListener("dispose",R)),U=$}if(U.visible=N.visible,U.wireframe=N.wireframe,L===Js?U.side=N.shadowSide!==null?N.shadowSide:N.side:U.side=N.shadowSide!==null?N.shadowSide:m[N.side],U.alphaMap=N.alphaMap,U.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,U.map=N.map,U.clipShadows=N.clipShadows,U.clippingPlanes=N.clippingPlanes,U.clipIntersection=N.clipIntersection,U.displacementMap=N.displacementMap,U.displacementScale=N.displacementScale,U.displacementBias=N.displacementBias,U.wireframeLinewidth=N.wireframeLinewidth,U.linewidth=N.linewidth,M.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let q=i.properties.get(U);q.light=M}return U}function w(C,N,M,L,U){if(C.visible===!1)return;if(C.layers.test(N.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&U===Js)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,C.matrixWorld);let Z=e.update(C),z=C.material;if(Array.isArray(z)){let $=Z.groups;for(let se=0,ie=$.length;se<ie;se++){let te=$[se],Y=z[te.materialIndex];if(Y&&Y.visible){let ne=D(C,Y,L,U);C.onBeforeShadow(i,C,N,M,Z,ne,te),i.renderBufferDirect(M,null,Z,ne,C,te),C.onAfterShadow(i,C,N,M,Z,ne,te)}}}else if(z.visible){let $=D(C,z,L,U);C.onBeforeShadow(i,C,N,M,Z,$,null),i.renderBufferDirect(M,null,Z,$,C,null),C.onAfterShadow(i,C,N,M,Z,$,null)}}let q=C.children;for(let Z=0,z=q.length;Z<z;Z++)w(q[Z],N,M,L,U)}function R(C){C.target.removeEventListener("dispose",R);for(let M in h){let L=h[M],U=C.target.uuid;U in L&&(L[U].dispose(),delete L[U])}}}function D_(i,e){function t(){let O=!1,j=new It,le=null,Te=new It(0,0,0,0);return{setMask:function(Ie){le!==Ie&&!O&&(i.colorMask(Ie,Ie,Ie,Ie),le=Ie)},setLocked:function(Ie){O=Ie},setClear:function(Ie,pe,He,Be,St){St===!0&&(Ie*=Be,pe*=Be,He*=Be),j.set(Ie,pe,He,Be),Te.equals(j)===!1&&(i.clearColor(Ie,pe,He,Be),Te.copy(j))},reset:function(){O=!1,le=null,Te.set(-1,0,0,0)}}}function n(){let O=!1,j=!1,le=null,Te=null,Ie=null;return{setReversed:function(pe){if(j!==pe){let He=e.get("EXT_clip_control");pe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),j=pe;let Be=Ie;Ie=null,this.setClear(Be)}},getReversed:function(){return j},setTest:function(pe){pe?ce(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(pe){le!==pe&&!O&&(i.depthMask(pe),le=pe)},setFunc:function(pe){if(j&&(pe=$u[pe]),Te!==pe){switch(pe){case fa:i.depthFunc(i.NEVER);break;case da:i.depthFunc(i.ALWAYS);break;case pa:i.depthFunc(i.LESS);break;case Os:i.depthFunc(i.LEQUAL);break;case ma:i.depthFunc(i.EQUAL);break;case ga:i.depthFunc(i.GEQUAL);break;case _a:i.depthFunc(i.GREATER);break;case xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=pe}},setLocked:function(pe){O=pe},setClear:function(pe){Ie!==pe&&(Ie=pe,j&&(pe=1-pe),i.clearDepth(pe))},reset:function(){O=!1,le=null,Te=null,Ie=null,j=!1}}}function s(){let O=!1,j=null,le=null,Te=null,Ie=null,pe=null,He=null,Be=null,St=null;return{setTest:function(dt){O||(dt?ce(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(dt){j!==dt&&!O&&(i.stencilMask(dt),j=dt)},setFunc:function(dt,gn,En){(le!==dt||Te!==gn||Ie!==En)&&(i.stencilFunc(dt,gn,En),le=dt,Te=gn,Ie=En)},setOp:function(dt,gn,En){(pe!==dt||He!==gn||Be!==En)&&(i.stencilOp(dt,gn,En),pe=dt,He=gn,Be=En)},setLocked:function(dt){O=dt},setClear:function(dt){St!==dt&&(i.clearStencil(dt),St=dt)},reset:function(){O=!1,j=null,le=null,Te=null,Ie=null,pe=null,He=null,Be=null,St=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,h=new WeakMap,d={},m={},u={},g=new WeakMap,v=[],S=null,p=!1,_=null,T=null,D=null,w=null,R=null,C=null,N=null,M=new Ve(0,0,0),L=0,U=!1,k=null,q=null,Z=null,z=null,$=null,se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ie=!1,te=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(Y)[1]),ie=te>=1):Y.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),ie=te>=2);let ne=null,he={},Oe=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),ht=new It().fromArray(Oe),Je=new It().fromArray(Ae);function st(O,j,le,Te){let Ie=new Uint8Array(4),pe=i.createTexture();i.bindTexture(O,pe),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<le;He++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(j+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return pe}let J={};J[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(i.DEPTH_TEST),o.setFunc(Os),rt(!1),bt(Pc),ce(i.CULL_FACE),ot(Xn);function ce(O){d[O]!==!0&&(i.enable(O),d[O]=!0)}function Re(O){d[O]!==!1&&(i.disable(O),d[O]=!1)}function $e(O,j){return u[O]!==j?(i.bindFramebuffer(O,j),u[O]=j,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=j),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=j),!0):!1}function De(O,j){let le=v,Te=!1;if(O){le=g.get(j),le===void 0&&(le=[],g.set(j,le));let Ie=O.textures;if(le.length!==Ie.length||le[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,He=Ie.length;pe<He;pe++)le[pe]=i.COLOR_ATTACHMENT0+pe;le.length=Ie.length,Te=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,Te=!0);Te&&i.drawBuffers(le)}function je(O){return S!==O?(i.useProgram(O),S=O,!0):!1}let Ct={[Qi]:i.FUNC_ADD,[_u]:i.FUNC_SUBTRACT,[xu]:i.FUNC_REVERSE_SUBTRACT};Ct[vu]=i.MIN,Ct[yu]=i.MAX;let Qe={[Su]:i.ZERO,[Mu]:i.ONE,[bu]:i.SRC_COLOR,[Uc]:i.SRC_ALPHA,[Ru]:i.SRC_ALPHA_SATURATE,[Au]:i.DST_COLOR,[Eu]:i.DST_ALPHA,[wu]:i.ONE_MINUS_SRC_COLOR,[Fc]:i.ONE_MINUS_SRC_ALPHA,[Cu]:i.ONE_MINUS_DST_COLOR,[Tu]:i.ONE_MINUS_DST_ALPHA,[Iu]:i.CONSTANT_COLOR,[Pu]:i.ONE_MINUS_CONSTANT_COLOR,[Lu]:i.CONSTANT_ALPHA,[Du]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(O,j,le,Te,Ie,pe,He,Be,St,dt){if(O===Xn){p===!0&&(Re(i.BLEND),p=!1);return}if(p===!1&&(ce(i.BLEND),p=!0),O!==gu){if(O!==_||dt!==U){if((T!==Qi||R!==Qi)&&(i.blendEquation(i.FUNC_ADD),T=Qi,R=Qi),dt)switch(O){case Ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lc:i.blendFunc(i.ONE,i.ONE);break;case Dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",O);break}else switch(O){case Ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Dc:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nc:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",O);break}D=null,w=null,C=null,N=null,M.set(0,0,0),L=0,_=O,U=dt}return}Ie=Ie||j,pe=pe||le,He=He||Te,(j!==T||Ie!==R)&&(i.blendEquationSeparate(Ct[j],Ct[Ie]),T=j,R=Ie),(le!==D||Te!==w||pe!==C||He!==N)&&(i.blendFuncSeparate(Qe[le],Qe[Te],Qe[pe],Qe[He]),D=le,w=Te,C=pe,N=He),(Be.equals(M)===!1||St!==L)&&(i.blendColor(Be.r,Be.g,Be.b,St),M.copy(Be),L=St),_=O,U=!1}function gt(O,j){O.side===sn?Re(i.CULL_FACE):ce(i.CULL_FACE);let le=O.side===Jt;j&&(le=!le),rt(le),O.blending===Ks&&O.transparent===!1?ot(Xn):ot(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let Te=O.stencilWrite;a.setTest(Te),Te&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Xt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(O){k!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),k=O)}function bt(O){O!==pu?(ce(i.CULL_FACE),O!==q&&(O===Pc?i.cullFace(i.BACK):O===mu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),q=O}function Dt(O){O!==Z&&(ie&&i.lineWidth(O),Z=O)}function Xt(O,j,le){O?(ce(i.POLYGON_OFFSET_FILL),(z!==j||$!==le)&&(z=j,$=le,o.getReversed()&&(j=-j),i.polygonOffset(j,le))):Re(i.POLYGON_OFFSET_FILL)}function wt(O){O?ce(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function Lt(O){O===void 0&&(O=i.TEXTURE0+se-1),ne!==O&&(i.activeTexture(O),ne=O)}function B(O,j,le){le===void 0&&(ne===null?le=i.TEXTURE0+se-1:le=ne);let Te=he[le];Te===void 0&&(Te={type:void 0,texture:void 0},he[le]=Te),(Te.type!==O||Te.texture!==j)&&(ne!==le&&(i.activeTexture(le),ne=le),i.bindTexture(O,j||J[O]),Te.type=O,Te.texture=j)}function kt(){let O=he[ne];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ft(){try{i.compressedTexImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function y(){try{i.texSubImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function W(){try{i.texSubImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function re(){try{i.compressedTexSubImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function ye(){try{i.texStorage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function Me(){try{i.texStorage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function ae(){try{i.texImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function ue(){try{i.texImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function Ee(O){return m[O]!==void 0?m[O]:i.getParameter(O)}function Le(O,j){m[O]!==j&&(i.pixelStorei(O,j),m[O]=j)}function ve(O){ht.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ht.copy(O))}function we(O){Je.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Je.copy(O))}function Fe(O,j){let le=h.get(j);le===void 0&&(le=new WeakMap,h.set(j,le));let Te=le.get(O);Te===void 0&&(Te=i.getUniformBlockIndex(j,O.name),le.set(O,Te))}function Ue(O,j){let Te=h.get(j).get(O);c.get(j)!==Te&&(i.uniformBlockBinding(j,Te,O.__bindingPointIndex),c.set(j,Te))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},m={},ne=null,he={},u={},g=new WeakMap,v=[],S=null,p=!1,_=null,T=null,D=null,w=null,R=null,C=null,N=null,M=new Ve(0,0,0),L=0,U=!1,k=null,q=null,Z=null,z=null,$=null,ht.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ce,disable:Re,bindFramebuffer:$e,drawBuffers:De,useProgram:je,setBlending:ot,setMaterial:gt,setFlipSided:rt,setCullFace:bt,setLineWidth:Dt,setPolygonOffset:Xt,setScissorTest:wt,activeTexture:Lt,bindTexture:B,unbindTexture:kt,compressedTexImage2D:ft,compressedTexImage3D:P,texImage2D:ae,texImage3D:ue,pixelStorei:Le,getParameter:Ee,updateUBOMapping:Fe,uniformBlockBinding:Ue,texStorage2D:ye,texStorage3D:Me,texSubImage2D:y,texSubImage3D:W,compressedTexSubImage2D:K,compressedTexSubImage3D:re,scissor:ve,viewport:we,reset:ze}}function N_(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ge,d=new WeakMap,m=new Set,u,g=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,y){return v?new OffscreenCanvas(P,y):zs("canvas")}function p(P,y,W){let K=1,re=ft(P);if((re.width>W||re.height>W)&&(K=W/Math.max(re.width,re.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ye=Math.floor(K*re.width),Me=Math.floor(K*re.height);u===void 0&&(u=S(ye,Me));let ae=y?S(ye,Me):u;return ae.width=ye,ae.height=Me,ae.getContext("2d").drawImage(P,0,0,ye,Me),Ye("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ye+"x"+Me+")."),ae}else return"data"in P&&Ye("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),P;return P}function _(P){return P.generateMipmaps}function T(P){i.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(P,y,W,K,re,ye=!1){if(P!==null){if(i[P]!==void 0)return i[P];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Me;K&&(Me=e.get("EXT_texture_norm16"),Me||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=y;if(y===i.RED&&(W===i.FLOAT&&(ae=i.R32F),W===i.HALF_FLOAT&&(ae=i.R16F),W===i.UNSIGNED_BYTE&&(ae=i.R8),W===i.UNSIGNED_SHORT&&Me&&(ae=Me.R16_EXT),W===i.SHORT&&Me&&(ae=Me.R16_SNORM_EXT)),y===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ae=i.R8UI),W===i.UNSIGNED_SHORT&&(ae=i.R16UI),W===i.UNSIGNED_INT&&(ae=i.R32UI),W===i.BYTE&&(ae=i.R8I),W===i.SHORT&&(ae=i.R16I),W===i.INT&&(ae=i.R32I)),y===i.RG&&(W===i.FLOAT&&(ae=i.RG32F),W===i.HALF_FLOAT&&(ae=i.RG16F),W===i.UNSIGNED_BYTE&&(ae=i.RG8),W===i.UNSIGNED_SHORT&&Me&&(ae=Me.RG16_EXT),W===i.SHORT&&Me&&(ae=Me.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ae=i.RG8UI),W===i.UNSIGNED_SHORT&&(ae=i.RG16UI),W===i.UNSIGNED_INT&&(ae=i.RG32UI),W===i.BYTE&&(ae=i.RG8I),W===i.SHORT&&(ae=i.RG16I),W===i.INT&&(ae=i.RG32I)),y===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),W===i.UNSIGNED_INT&&(ae=i.RGB32UI),W===i.BYTE&&(ae=i.RGB8I),W===i.SHORT&&(ae=i.RGB16I),W===i.INT&&(ae=i.RGB32I)),y===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),W===i.UNSIGNED_INT&&(ae=i.RGBA32UI),W===i.BYTE&&(ae=i.RGBA8I),W===i.SHORT&&(ae=i.RGBA16I),W===i.INT&&(ae=i.RGBA32I)),y===i.RGB&&(W===i.UNSIGNED_SHORT&&Me&&(ae=Me.RGB16_EXT),W===i.SHORT&&Me&&(ae=Me.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(ae=i.R11F_G11F_B10F)),y===i.RGBA){let ue=ye?Rr:lt.getTransfer(re);W===i.FLOAT&&(ae=i.RGBA32F),W===i.HALF_FLOAT&&(ae=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ae=ue===_t?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&Me&&(ae=Me.RGBA16_EXT),W===i.SHORT&&Me&&(ae=Me.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function R(P,y){let W;return P?y===null||y===Bn||y===er?W=i.DEPTH24_STENCIL8:y===rn?W=i.DEPTH32F_STENCIL8:y===Qs&&(W=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Bn||y===er?W=i.DEPTH_COMPONENT24:y===rn?W=i.DEPTH_COMPONENT32F:y===Qs&&(W=i.DEPTH_COMPONENT16),W}function C(P,y){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Wt&&P.minFilter!==At?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function N(P){let y=P.target;y.removeEventListener("dispose",N),L(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&m.delete(y)}function M(P){let y=P.target;y.removeEventListener("dispose",M),k(y)}function L(P){let y=n.get(P);if(y.__webglInit===void 0)return;let W=P.source,K=g.get(W);if(K){let re=K[y.__cacheKey];re.usedTimes--,re.usedTimes===0&&U(P),Object.keys(K).length===0&&g.delete(W)}n.remove(P)}function U(P){let y=n.get(P);i.deleteTexture(y.__webglTexture);let W=P.source,K=g.get(W);delete K[y.__cacheKey],o.memory.textures--}function k(P){let y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let re=0;re<y.__webglFramebuffer[K].length;re++)i.deleteFramebuffer(y.__webglFramebuffer[K][re]);else i.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)i.deleteFramebuffer(y.__webglFramebuffer[K]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let W=P.textures;for(let K=0,re=W.length;K<re;K++){let ye=n.get(W[K]);ye.__webglTexture&&(i.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(W[K])}n.remove(P)}let q=0;function Z(){q=0}function z(){return q}function $(P){q=P}function se(){let P=q;return P>=s.maxTextures&&Ye("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,P}function ie(P){let y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function te(P,y){let W=n.get(P);if(P.isVideoTexture&&B(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){let K=P.image;if(K===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(W,P,y);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+y)}function Y(P,y){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){Re(W,P,y);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+y)}function ne(P,y){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){Re(W,P,y);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+y)}function he(P,y){let W=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){$e(W,P,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+y)}let Oe={[Xi]:i.REPEAT,[Zt]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},Ae={[Wt]:i.NEAREST,[Fu]:i.NEAREST_MIPMAP_NEAREST,[ao]:i.NEAREST_MIPMAP_LINEAR,[At]:i.LINEAR,[Ya]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},ht={[ku]:i.NEVER,[Xu]:i.ALWAYS,[Vu]:i.LESS,[Rl]:i.LEQUAL,[Hu]:i.EQUAL,[Il]:i.GEQUAL,[Gu]:i.GREATER,[Wu]:i.NOTEQUAL};function Je(P,y){if(y.type===rn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===At||y.magFilter===Ya||y.magFilter===ao||y.magFilter===fi||y.minFilter===At||y.minFilter===Ya||y.minFilter===ao||y.minFilter===fi)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Oe[y.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Oe[y.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Oe[y.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Ae[y.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Ae[y.minFilter]),y.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ht[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Wt||y.minFilter!==ao&&y.minFilter!==fi||y.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function st(P,y){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",N));let K=y.source,re=g.get(K);re===void 0&&(re={},g.set(K,re));let ye=ie(y);if(ye!==P.__cacheKey){re[ye]===void 0&&(re[ye]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),re[ye].usedTimes++;let Me=re[P.__cacheKey];Me!==void 0&&(re[P.__cacheKey].usedTimes--,Me.usedTimes===0&&U(y)),P.__cacheKey=ye,P.__webglTexture=re[ye].texture}return W}function J(P,y,W){return Math.floor(Math.floor(P/W)/y)}function ce(P,y,W,K){let ye=P.updateRanges;if(ye.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,W,K,y.data);else{ye.sort((Le,ve)=>Le.start-ve.start);let Me=0;for(let Le=1;Le<ye.length;Le++){let ve=ye[Me],we=ye[Le],Fe=ve.start+ve.count,Ue=J(we.start,y.width,4),ze=J(ve.start,y.width,4);we.start<=Fe+1&&Ue===ze&&J(we.start+we.count-1,y.width,4)===Ue?ve.count=Math.max(ve.count,we.start+we.count-ve.start):(++Me,ye[Me]=we)}ye.length=Me+1;let ae=t.getParameter(i.UNPACK_ROW_LENGTH),ue=t.getParameter(i.UNPACK_SKIP_PIXELS),Ee=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Le=0,ve=ye.length;Le<ve;Le++){let we=ye[Le],Fe=Math.floor(we.start/4),Ue=Math.ceil(we.count/4),ze=Fe%y.width,O=Math.floor(Fe/y.width),j=Ue,le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,ze,O,j,le,W,K,y.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ae),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function Re(P,y,W){let K=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=i.TEXTURE_3D);let re=st(P,y),ye=y.source;t.bindTexture(K,P.__webglTexture,i.TEXTURE0+W);let Me=n.get(ye);if(ye.version!==Me.__version||re===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let le=lt.getPrimaries(lt.workingColorSpace),Te=y.colorSpace===pi?null:lt.getPrimaries(y.colorSpace),Ie=y.colorSpace===pi||le===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let ue=p(y.image,!1,s.maxTextureSize);ue=kt(y,ue);let Ee=r.convert(y.format,y.colorSpace),Le=r.convert(y.type),ve=w(y.internalFormat,Ee,Le,y.normalized,y.colorSpace,y.isVideoTexture);Je(K,y);let we,Fe=y.mipmaps,Ue=y.isVideoTexture!==!0,ze=Me.__version===void 0||re===!0,O=ye.dataReady,j=C(y,ue);if(y.isDepthTexture)ve=R(y.format===Fi,y.type),ze&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,ve,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,ve,ue.width,ue.height,0,Ee,Le,null));else if(y.isDataTexture)if(Fe.length>0){Ue&&ze&&t.texStorage2D(i.TEXTURE_2D,j,ve,Fe[0].width,Fe[0].height);for(let le=0,Te=Fe.length;le<Te;le++)we=Fe[le],Ue?O&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,we.width,we.height,Ee,Le,we.data):t.texImage2D(i.TEXTURE_2D,le,ve,we.width,we.height,0,Ee,Le,we.data);y.generateMipmaps=!1}else Ue?(ze&&t.texStorage2D(i.TEXTURE_2D,j,ve,ue.width,ue.height),O&&ce(y,ue,Ee,Le)):t.texImage2D(i.TEXTURE_2D,0,ve,ue.width,ue.height,0,Ee,Le,ue.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ue&&ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,j,ve,Fe[0].width,Fe[0].height,ue.depth);for(let le=0,Te=Fe.length;le<Te;le++)if(we=Fe[le],y.format!==Ut)if(Ee!==null)if(Ue){if(O)if(y.layerUpdates.size>0){let Ie=ih(we.width,we.height,y.format,y.type);for(let pe of y.layerUpdates){let He=we.data.subarray(pe*Ie/we.data.BYTES_PER_ELEMENT,(pe+1)*Ie/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,pe,we.width,we.height,1,Ee,He)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,we.width,we.height,ue.depth,Ee,we.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,ve,we.width,we.height,ue.depth,0,we.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,we.width,we.height,ue.depth,Ee,Le,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,ve,we.width,we.height,ue.depth,0,Ee,Le,we.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ue&&ze&&t.texStorage2D(i.TEXTURE_2D,j,ve,Fe[0].width,Fe[0].height);for(let le=0,Te=Fe.length;le<Te;le++)we=Fe[le],y.format!==Ut?Ee!==null?Ue?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,we.width,we.height,Ee,we.data):t.compressedTexImage2D(i.TEXTURE_2D,le,ve,we.width,we.height,0,we.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?O&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,we.width,we.height,Ee,Le,we.data):t.texImage2D(i.TEXTURE_2D,le,ve,we.width,we.height,0,Ee,Le,we.data)}else if(y.isDataArrayTexture)if(Ue){if(ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,j,ve,ue.width,ue.height,ue.depth),O)if(y.layerUpdates.size>0){let le=ih(ue.width,ue.height,y.format,y.type);for(let Te of y.layerUpdates){let Ie=ue.data.subarray(Te*le/ue.data.BYTES_PER_ELEMENT,(Te+1)*le/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Te,ue.width,ue.height,1,Ee,Le,Ie)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ee,Le,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,ue.width,ue.height,ue.depth,0,Ee,Le,ue.data);else if(y.isData3DTexture)Ue?(ze&&t.texStorage3D(i.TEXTURE_3D,j,ve,ue.width,ue.height,ue.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ee,Le,ue.data)):t.texImage3D(i.TEXTURE_3D,0,ve,ue.width,ue.height,ue.depth,0,Ee,Le,ue.data);else if(y.isFramebufferTexture){if(ze)if(Ue)t.texStorage2D(i.TEXTURE_2D,j,ve,ue.width,ue.height);else{let le=ue.width,Te=ue.height;for(let Ie=0;Ie<j;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,ve,le,Te,0,Ee,Le,null),le>>=1,Te>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let le=i.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),ue.parentNode!==le){le.appendChild(ue),m.add(y),le.onpaint=Te=>{let Ie=Te.changedElements;for(let pe of m)Ie.includes(pe.image)&&(pe.needsUpdate=!0)},le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ue);else{let Ie=i.RGBA,pe=i.RGBA,He=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ie,pe,He,ue)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Ue&&ze){let le=ft(Fe[0]);t.texStorage2D(i.TEXTURE_2D,j,ve,le.width,le.height)}for(let le=0,Te=Fe.length;le<Te;le++)we=Fe[le],Ue?O&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Ee,Le,we):t.texImage2D(i.TEXTURE_2D,le,ve,Ee,Le,we);y.generateMipmaps=!1}else if(Ue){if(ze){let le=ft(ue);t.texStorage2D(i.TEXTURE_2D,j,ve,le.width,le.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Le,ue)}else t.texImage2D(i.TEXTURE_2D,0,ve,Ee,Le,ue);_(y)&&T(K),Me.__version=ye.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function $e(P,y,W){if(y.image.length!==6)return;let K=st(P,y),re=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);let ye=n.get(re);if(re.version!==ye.__version||K===!0){t.activeTexture(i.TEXTURE0+W);let Me=lt.getPrimaries(lt.workingColorSpace),ae=y.colorSpace===pi?null:lt.getPrimaries(y.colorSpace),ue=y.colorSpace===pi||Me===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Ee=y.isCompressedTexture||y.image[0].isCompressedTexture,Le=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let pe=0;pe<6;pe++)!Ee&&!Le?ve[pe]=p(y.image[pe],!0,s.maxCubemapSize):ve[pe]=Le?y.image[pe].image:y.image[pe],ve[pe]=kt(y,ve[pe]);let we=ve[0],Fe=r.convert(y.format,y.colorSpace),Ue=r.convert(y.type),ze=w(y.internalFormat,Fe,Ue,y.normalized,y.colorSpace),O=y.isVideoTexture!==!0,j=ye.__version===void 0||K===!0,le=re.dataReady,Te=C(y,we);Je(i.TEXTURE_CUBE_MAP,y);let Ie;if(Ee){O&&j&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,ze,we.width,we.height);for(let pe=0;pe<6;pe++){Ie=ve[pe].mipmaps;for(let He=0;He<Ie.length;He++){let Be=Ie[He];y.format!==Ut?Fe!==null?O?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He,0,0,Be.width,Be.height,Fe,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He,ze,Be.width,Be.height,0,Be.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He,0,0,Be.width,Be.height,Fe,Ue,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He,ze,Be.width,Be.height,0,Fe,Ue,Be.data)}}}else{if(Ie=y.mipmaps,O&&j){Ie.length>0&&Te++;let pe=ft(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,ze,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Le){O?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ve[pe].width,ve[pe].height,Fe,Ue,ve[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ze,ve[pe].width,ve[pe].height,0,Fe,Ue,ve[pe].data);for(let He=0;He<Ie.length;He++){let St=Ie[He].image[pe].image;O?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He+1,0,0,St.width,St.height,Fe,Ue,St.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He+1,ze,St.width,St.height,0,Fe,Ue,St.data)}}else{O?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Fe,Ue,ve[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ze,Fe,Ue,ve[pe]);for(let He=0;He<Ie.length;He++){let Be=Ie[He];O?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He+1,0,0,Fe,Ue,Be.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He+1,ze,Fe,Ue,Be.image[pe])}}}_(y)&&T(i.TEXTURE_CUBE_MAP),ye.__version=re.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function De(P,y,W,K,re,ye){let Me=r.convert(W.format,W.colorSpace),ae=r.convert(W.type),ue=w(W.internalFormat,Me,ae,W.normalized,W.colorSpace),Ee=n.get(y),Le=n.get(W);if(Le.__renderTarget=y,!Ee.__hasExternalTextures){let ve=Math.max(1,y.width>>ye),we=Math.max(1,y.height>>ye);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,ye,ue,ve,we,y.depth,0,Me,ae,null):t.texImage2D(re,ye,ue,ve,we,0,Me,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Lt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,re,Le.__webglTexture,0,wt(y)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,re,Le.__webglTexture,ye),t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(P,y,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),y.depthBuffer){let K=y.depthTexture,re=K&&K.isDepthTexture?K.type:null,ye=R(y.stencilBuffer,re),Me=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Lt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(y),ye,y.width,y.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(y),ye,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ye,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,P)}else{let K=y.textures;for(let re=0;re<K.length;re++){let ye=K[re],Me=r.convert(ye.format,ye.colorSpace),ae=r.convert(ye.type),ue=w(ye.internalFormat,Me,ae,ye.normalized,ye.colorSpace);Lt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(y),ue,y.width,y.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(y),ue,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ue,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(P,y,W){let K=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(y.depthTexture);if(re.__renderTarget=y,(!re.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K){if(re.__webglInit===void 0&&(re.__webglInit=!0,y.depthTexture.addEventListener("dispose",N)),re.__webglTexture===void 0){re.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),Je(i.TEXTURE_CUBE_MAP,y.depthTexture);let Ee=r.convert(y.depthTexture.format),Le=r.convert(y.depthTexture.type),ve;y.depthTexture.format===Gn?ve=i.DEPTH_COMPONENT24:y.depthTexture.format===Fi&&(ve=i.DEPTH24_STENCIL8);for(let we=0;we<6;we++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ve,y.width,y.height,0,Ee,Le,null)}}else te(y.depthTexture,0);let ye=re.__webglTexture,Me=wt(y),ae=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,ue=y.depthTexture.format===Fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Gn)Lt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,ae,ye,0,Me):i.framebufferTexture2D(i.FRAMEBUFFER,ue,ae,ye,0);else if(y.depthTexture.format===Fi)Lt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,ae,ye,0,Me):i.framebufferTexture2D(i.FRAMEBUFFER,ue,ae,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qe(P){let y=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){let K=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){let re=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",re)};K.addEventListener("dispose",re),y.__depthDisposeCallback=re}y.__boundDepthTexture=K}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(W)for(let K=0;K<6;K++)Ct(y.__webglFramebuffer[K],P,K);else{let K=P.texture.mipmaps;K&&K.length>0?Ct(y.__webglFramebuffer[0],P,0):Ct(y.__webglFramebuffer,P,0)}else if(W){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=i.createRenderbuffer(),je(y.__webglDepthbuffer[K],P,!1);else{let re=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=y.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,ye),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ye)}}else{let K=P.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),je(y.__webglDepthbuffer,P,!1);else{let re=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ye),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ye)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(P,y,W){let K=n.get(P);y!==void 0&&De(K.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Qe(P)}function gt(P){let y=P.texture,W=n.get(P),K=n.get(y);P.addEventListener("dispose",M);let re=P.textures,ye=P.isWebGLCubeRenderTarget===!0,Me=re.length>1;if(Me||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=y.version,o.memory.textures++),ye){W.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer[ae]=[];for(let ue=0;ue<y.mipmaps.length;ue++)W.__webglFramebuffer[ae][ue]=i.createFramebuffer()}else W.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)W.__webglFramebuffer[ae]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Me)for(let ae=0,ue=re.length;ae<ue;ae++){let Ee=n.get(re[ae]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Lt(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ae=0;ae<re.length;ae++){let ue=re[ae];W.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ae]);let Ee=r.convert(ue.format,ue.colorSpace),Le=r.convert(ue.type),ve=w(ue.internalFormat,Ee,Le,ue.normalized,ue.colorSpace,P.isXRRenderTarget===!0),we=wt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,we,ve,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,W.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),je(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ye){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Je(i.TEXTURE_CUBE_MAP,y);for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)De(W.__webglFramebuffer[ae][ue],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else De(W.__webglFramebuffer[ae],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);_(y)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ae=0,ue=re.length;ae<ue;ae++){let Ee=re[ae],Le=n.get(Ee),ve=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,Le.__webglTexture),Je(ve,Ee),De(W.__webglFramebuffer,P,Ee,i.COLOR_ATTACHMENT0+ae,ve,0),_(Ee)&&T(ve)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ae=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,K.__webglTexture),Je(ae,y),y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)De(W.__webglFramebuffer[ue],P,y,i.COLOR_ATTACHMENT0,ae,ue);else De(W.__webglFramebuffer,P,y,i.COLOR_ATTACHMENT0,ae,0);_(y)&&T(ae),t.unbindTexture()}P.depthBuffer&&Qe(P)}function rt(P){let y=P.textures;for(let W=0,K=y.length;W<K;W++){let re=y[W];if(_(re)){let ye=D(P),Me=n.get(re).__webglTexture;t.bindTexture(ye,Me),T(ye),t.unbindTexture()}}}let bt=[],Dt=[];function Xt(P){if(P.samples>0){if(Lt(P)===!1){let y=P.textures,W=P.width,K=P.height,re=i.COLOR_BUFFER_BIT,ye=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(P),ae=y.length>1;if(ae)for(let Ee=0;Ee<y.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let ue=P.texture.mipmaps;ue&&ue.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ee=0;Ee<y.length;Ee++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Ee]);let Le=n.get(y[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Le,0)}i.blitFramebuffer(0,0,W,K,0,0,W,K,re,i.NEAREST),c===!0&&(bt.length=0,Dt.length=0,bt.push(i.COLOR_ATTACHMENT0+Ee),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(bt.push(ye),Dt.push(ye),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let Ee=0;Ee<y.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Ee]);let Le=n.get(y[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,Le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function wt(P){return Math.min(s.maxSamples,P.samples)}function Lt(P){let y=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function B(P){let y=o.render.frame;d.get(P)!==y&&(d.set(P,y),P.update())}function kt(P,y){let W=P.colorSpace,K=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==vn&&W!==pi&&(lt.getTransfer(W)===_t?(K!==Ut||re!==dn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",W)),y}function ft(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=se,this.resetTextureUnits=Z,this.getTextureUnits=z,this.setTextureUnits=$,this.setTexture2D=te,this.setTexture2DArray=Y,this.setTexture3D=ne,this.setTextureCube=he,this.rebindTextures=ot,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function U_(i,e){function t(n,s=pi){let r,o=lt.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===Za)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wc)return i.BYTE;if(n===Xc)return i.SHORT;if(n===Qs)return i.UNSIGNED_SHORT;if(n===qa)return i.INT;if(n===Bn)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===Kt)return i.HALF_FLOAT;if(n===Zc)return i.ALPHA;if(n===$c)return i.RGB;if(n===Ut)return i.RGBA;if(n===Gn)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===di)return i.RED;if(n===Ja)return i.RED_INTEGER;if(n===pn)return i.RG;if(n===Ka)return i.RG_INTEGER;if(n===ja)return i.RGBA_INTEGER;if(n===lo||n===co||n===ho||n===uo)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qa||n===el||n===tl||n===nl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===il||n===sl||n===rl||n===ol||n===al||n===fo||n===ll)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===il||n===sl)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ol)return r.COMPRESSED_R11_EAC;if(n===al)return r.COMPRESSED_SIGNED_R11_EAC;if(n===fo)return r.COMPRESSED_RG11_EAC;if(n===ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===cl||n===hl||n===ul||n===fl||n===dl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===yl||n===Sl||n===Ml)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ul)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ml)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_l)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ml)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bl||n===wl||n===El)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===bl)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===El)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tl||n===Al||n===po||n===Cl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var F_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O_=`
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

}`,_h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Hr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Mn({vertexShader:F_,fragmentShader:O_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xh=class extends Nn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,h=null,d=null,m=null,u=null,g=null,v=null,S=typeof XRWebGLBinding<"u",p=new _h,_={},T=t.getContextAttributes(),D=null,w=null,R=[],C=[],N=new Ge,M=null,L=null,U=new Gt;U.viewport=new It;let k=new Gt;k.viewport=new It;let q=[U,k],Z=new Ha,z=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ce=R[J];return ce===void 0&&(ce=new Gs,R[J]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(J){let ce=R[J];return ce===void 0&&(ce=new Gs,R[J]=ce),ce.getGripSpace()},this.getHand=function(J){let ce=R[J];return ce===void 0&&(ce=new Gs,R[J]=ce),ce.getHandSpace()};function se(J){let ce=C.indexOf(J.inputSource);if(ce===-1)return;let Re=R[ce];Re!==void 0&&(Re.update(J.inputSource,J.frame,h||o),Re.dispatchEvent({type:J.type,data:J.inputSource}))}function ie(){s.removeEventListener("select",se),s.removeEventListener("selectstart",se),s.removeEventListener("selectend",se),s.removeEventListener("squeeze",se),s.removeEventListener("squeezestart",se),s.removeEventListener("squeezeend",se),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",te);for(let J=0;J<R.length;J++){let ce=C[J];ce!==null&&(C[J]=null,R[J].disconnect(ce))}z=null,$=null,p.reset();for(let J in _)delete _[J];if(e.setRenderTarget(D),g=null,u=null,m=null,s=null,w=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(N.width,N.height,!1),L!==null){let J=L.camera;J.fov=L.fov,J.zoom=L.zoom,J.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return u!==null?u:g},this.getBinding=function(){return m===null&&S&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(D=e.getRenderTarget(),s.addEventListener("select",se),s.addEventListener("selectstart",se),s.addEventListener("selectend",se),s.addEventListener("squeeze",se),s.addEventListener("squeezestart",se),s.addEventListener("squeezeend",se),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",te),T.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(N),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,$e=null,De=null;T.depth&&(De=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=T.stencil?Fi:Gn,$e=T.stencil?er:Bn);let je={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:r};m=this.getBinding(),u=m.createProjectionLayer(je),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),w=new un(u.textureWidth,u.textureHeight,{format:Ut,type:dn,depthTexture:new wi(u.textureWidth,u.textureHeight,$e,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Re={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new un(g.framebufferWidth,g.framebufferHeight,{format:Ut,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await s.requestReferenceSpace(a),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(J){for(let ce=0;ce<J.removed.length;ce++){let Re=J.removed[ce],$e=C.indexOf(Re);$e>=0&&(C[$e]=null,R[$e].disconnect(Re))}for(let ce=0;ce<J.added.length;ce++){let Re=J.added[ce],$e=C.indexOf(Re);if($e===-1){for(let je=0;je<R.length;je++)if(je>=C.length){C.push(Re),$e=je;break}else if(C[je]===null){C[je]=Re,$e=je;break}if($e===-1)break}let De=R[$e];De&&De.connect(Re)}}let Y=new V,ne=new V;function he(J,ce,Re){Y.setFromMatrixPosition(ce.matrixWorld),ne.setFromMatrixPosition(Re.matrixWorld);let $e=Y.distanceTo(ne),De=ce.projectionMatrix.elements,je=Re.projectionMatrix.elements,Ct=De[14]/(De[10]-1),Qe=De[14]/(De[10]+1),ot=(De[9]+1)/De[5],gt=(De[9]-1)/De[5],rt=(De[8]-1)/De[0],bt=(je[8]+1)/je[0],Dt=Ct*rt,Xt=Ct*bt,wt=$e/(-rt+bt),Lt=wt*-rt;if(ce.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Lt),J.translateZ(wt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),De[10]===-1)J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let B=Ct+wt,kt=Qe+wt,ft=Dt-Lt,P=Xt+($e-Lt),y=ot*Qe/kt*B,W=gt*Qe/kt*B;J.projectionMatrix.makePerspective(ft,P,y,W,B,kt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Oe(J,ce){ce===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ce.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ce=J.near,Re=J.far;p.texture!==null&&(p.depthNear>0&&(ce=p.depthNear),p.depthFar>0&&(Re=p.depthFar)),Z.near=k.near=U.near=ce,Z.far=k.far=U.far=Re,(z!==Z.near||$!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),z=Z.near,$=Z.far),Z.layers.mask=J.layers.mask|6,U.layers.mask=Z.layers.mask&-5,k.layers.mask=Z.layers.mask&-3;let $e=J.parent,De=Z.cameras;Oe(Z,$e);for(let je=0;je<De.length;je++)Oe(De[je],$e);De.length===2?he(Z,U,k):Z.projectionMatrix.copy(U.projectionMatrix),L===null&&J.isPerspectiveCamera&&(L={camera:J,fov:J.fov,zoom:J.zoom}),Ae(J,Z,$e)};function Ae(J,ce,Re){Re===null?J.matrix.copy(ce.matrixWorld):(J.matrix.copy(Re.matrixWorld),J.matrix.invert(),J.matrix.multiply(ce.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Yi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(u===null&&g===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(Z)},this.getCameraTexture=function(J){return _[J]};let ht=null;function Je(J,ce){if(d=ce.getViewerPose(h||o),v=ce,d!==null){let Re=d.views;g!==null&&(e.setRenderTargetFramebuffer(w,g.framebuffer),e.setRenderTarget(w));let $e=!1;Re.length!==Z.cameras.length&&(Z.cameras.length=0,$e=!0);for(let Qe=0;Qe<Re.length;Qe++){let ot=Re[Qe],gt=null;if(g!==null)gt=g.getViewport(ot);else{let bt=m.getViewSubImage(u,ot);gt=bt.viewport,Qe===0&&(e.setRenderTargetTextures(w,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(w))}let rt=q[Qe];rt===void 0&&(rt=new Gt,rt.layers.enable(Qe),rt.viewport=new It,q[Qe]=rt),rt.matrix.fromArray(ot.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(ot.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(gt.x,gt.y,gt.width,gt.height),Qe===0&&(Z.matrix.copy(rt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),$e===!0&&Z.cameras.push(rt)}let De=s.enabledFeatures;if(De&&De.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){m=n.getBinding();let Qe=m.getDepthInformation(Re[0]);Qe&&Qe.isValid&&Qe.texture&&p.init(Qe,s.renderState)}if(De&&De.includes("camera-access")&&S){e.state.unbindTexture(),m=n.getBinding();for(let Qe=0;Qe<Re.length;Qe++){let ot=Re[Qe].camera;if(ot){let gt=_[ot];gt||(gt=new Hr,_[ot]=gt);let rt=m.getCameraImage(ot);gt.sourceTexture=rt}}}}for(let Re=0;Re<R.length;Re++){let $e=C[Re],De=R[Re];$e!==null&&De!==void 0&&De.update($e,ce,h||o)}ht&&ht(J,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),v=null}let st=new bf;st.setAnimationLoop(Je),this.setAnimationLoop=function(J){ht=J},this.dispose=function(){}}},B_=new pt,Rf=new Ke;Rf.set(-1,0,0,0,1,0,0,0,1);function z_(i,e){function t(p,_){p.matrixAutoUpdate===!0&&p.updateMatrix(),_.value.copy(p.matrix)}function n(p,_){_.color.getRGB(p.fogColor.value,eh(i)),_.isFog?(p.fogNear.value=_.near,p.fogFar.value=_.far):_.isFogExp2&&(p.fogDensity.value=_.density)}function s(p,_,T,D,w){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(p,_):_.isMeshLambertMaterial?(r(p,_),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(p,_),m(p,_)):_.isMeshPhongMaterial?(r(p,_),d(p,_),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(p,_),u(p,_),_.isMeshPhysicalMaterial&&g(p,_,w)):_.isMeshMatcapMaterial?(r(p,_),v(p,_)):_.isMeshDepthMaterial?r(p,_):_.isMeshDistanceMaterial?(r(p,_),S(p,_)):_.isMeshNormalMaterial?r(p,_):_.isLineBasicMaterial?(o(p,_),_.isLineDashedMaterial&&a(p,_)):_.isPointsMaterial?c(p,_,T,D):_.isSpriteMaterial?h(p,_):_.isShadowMaterial?(p.color.value.copy(_.color),p.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(p,_){p.opacity.value=_.opacity,_.color&&p.diffuse.value.copy(_.color),_.emissive&&p.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(p.map.value=_.map,t(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.bumpMap&&(p.bumpMap.value=_.bumpMap,t(_.bumpMap,p.bumpMapTransform),p.bumpScale.value=_.bumpScale,_.side===Jt&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,t(_.normalMap,p.normalMapTransform),p.normalScale.value.copy(_.normalScale),_.side===Jt&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,t(_.displacementMap,p.displacementMapTransform),p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias),_.emissiveMap&&(p.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,p.emissiveMapTransform)),_.specularMap&&(p.specularMap.value=_.specularMap,t(_.specularMap,p.specularMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest);let T=e.get(_),D=T.envMap,w=T.envMapRotation;D&&(p.envMap.value=D,p.envMapRotation.value.setFromMatrix4(B_.makeRotationFromEuler(w)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Rf),p.reflectivity.value=_.reflectivity,p.ior.value=_.ior,p.refractionRatio.value=_.refractionRatio),_.lightMap&&(p.lightMap.value=_.lightMap,p.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,p.lightMapTransform)),_.aoMap&&(p.aoMap.value=_.aoMap,p.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,p.aoMapTransform))}function o(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,_.map&&(p.map.value=_.map,t(_.map,p.mapTransform))}function a(p,_){p.dashSize.value=_.dashSize,p.totalSize.value=_.dashSize+_.gapSize,p.scale.value=_.scale}function c(p,_,T,D){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.size.value=_.size*T,p.scale.value=D*.5,_.map&&(p.map.value=_.map,t(_.map,p.uvTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function h(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.rotation.value=_.rotation,_.map&&(p.map.value=_.map,t(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function d(p,_){p.specular.value.copy(_.specular),p.shininess.value=Math.max(_.shininess,1e-4)}function m(p,_){_.gradientMap&&(p.gradientMap.value=_.gradientMap)}function u(p,_){p.metalness.value=_.metalness,_.metalnessMap&&(p.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,p.metalnessMapTransform)),p.roughness.value=_.roughness,_.roughnessMap&&(p.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,p.roughnessMapTransform)),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)}function g(p,_,T){p.ior.value=_.ior,_.sheen>0&&(p.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),p.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(p.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,p.sheenColorMapTransform)),_.sheenRoughnessMap&&(p.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,p.sheenRoughnessMapTransform))),_.clearcoat>0&&(p.clearcoat.value=_.clearcoat,p.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(p.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,p.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(p.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Jt&&p.clearcoatNormalScale.value.negate())),_.dispersion>0&&(p.dispersion.value=_.dispersion),_.retroreflectivity>0&&(p.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(p.iridescence.value=_.iridescence,p.iridescenceIOR.value=_.iridescenceIOR,p.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(p.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,p.iridescenceMapTransform)),_.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),_.transmission>0&&(p.transmission.value=_.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(p.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,p.transmissionMapTransform)),p.thickness.value=_.thickness,_.thicknessMap&&(p.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=_.attenuationDistance,p.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(p.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(p.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=_.specularIntensity,p.specularColor.value.copy(_.specularColor),_.specularColorMap&&(p.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,p.specularColorMapTransform)),_.specularIntensityMap&&(p.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,_){_.matcap&&(p.matcap.value=_.matcap)}function S(p,_){let T=e.get(_).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function k_(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,R){let C=R.program;n.uniformBlockBinding(w,C)}function h(w,R){let C=s[w.id];C===void 0&&(p(w),C=d(w),s[w.id]=C,w.addEventListener("dispose",T));let N=R.program;n.updateUBOMapping(w,N);let M=e.render.frame;r[w.id]!==M&&(u(w),r[w.id]=M)}function d(w){let R=m();w.__bindingPointIndex=R;let C=i.createBuffer(),N=w.__size,M=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,N,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,C),C}function m(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){let R=s[w.id],C=w.uniforms,N=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let M=0,L=C.length;M<L;M++){let U=C[M];if(Array.isArray(U))for(let k=0,q=U.length;k<q;k++)g(U[k],M,k,N);else g(U,M,0,N)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(w,R,C,N){if(S(w,R,C,N)===!0){let M=w.__offset,L=w.value;if(Array.isArray(L)){let U=0;for(let k=0;k<L.length;k++){let q=L[k],Z=_(q);v(q,w.__data,U),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(U+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(L,w.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,w.__data)}}function v(w,R,C){typeof w=="number"||typeof w=="boolean"?R[0]=w:w.isMatrix3?(R[0]=w.elements[0],R[1]=w.elements[1],R[2]=w.elements[2],R[3]=0,R[4]=w.elements[3],R[5]=w.elements[4],R[6]=w.elements[5],R[7]=0,R[8]=w.elements[6],R[9]=w.elements[7],R[10]=w.elements[8],R[11]=0):ArrayBuffer.isView(w)?R.set(new w.constructor(w.buffer,w.byteOffset,R.length)):w.toArray(R,C)}function S(w,R,C,N){let M=w.value,L=R+"_"+C;if(N[L]===void 0)return typeof M=="number"||typeof M=="boolean"?N[L]=M:ArrayBuffer.isView(M)?N[L]=M.slice():N[L]=M.clone(),!0;{let U=N[L];if(typeof M=="number"||typeof M=="boolean"){if(U!==M)return N[L]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(U.equals(M)===!1)return U.copy(M),!0}}return!1}function p(w){let R=w.uniforms,C=0,N=16;for(let L=0,U=R.length;L<U;L++){let k=Array.isArray(R[L])?R[L]:[R[L]];for(let q=0,Z=k.length;q<Z;q++){let z=k[q],$=Array.isArray(z.value)?z.value:[z.value];for(let se=0,ie=$.length;se<ie;se++){let te=$[se],Y=_(te),ne=C%N,he=ne%Y.boundary,Oe=ne+he;C+=he,Oe!==0&&N-Oe<Y.storage&&(C+=N-Oe),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=C,C+=Y.storage}}}let M=C%N;return M>0&&(C+=N-M),w.__size=C,w.__cache={},this}function _(w){let R={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(R.boundary=4,R.storage=4):w.isVector2?(R.boundary=8,R.storage=8):w.isVector3||w.isColor?(R.boundary=16,R.storage=12):w.isVector4?(R.boundary=16,R.storage=16):w.isMatrix3?(R.boundary=48,R.storage=48):w.isMatrix4?(R.boundary=64,R.storage=64):w.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(R.boundary=16,R.storage=w.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",w),R}function T(w){let R=w.target;R.removeEventListener("dispose",T);let C=o.indexOf(R.__bindingPointIndex);o.splice(C,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function D(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:h,dispose:D}}var V_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function H_(){return Yn===null&&(Yn=new $i(V_,16,16,pn,Kt),Yn.name="DFG_LUT",Yn.minFilter=At,Yn.magFilter=At,Yn.wrapS=Zt,Yn.wrapT=Zt,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}var Nl=class{constructor(e={}){let{canvas:t=Yu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:u=!1,outputBufferType:g=dn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=o;let S=g,p=new Set([ja,Ka,Ja]),_=new Set([dn,Bn,Qs,er,Za,$a]),T=new Uint32Array(4),D=new Int32Array(4),w=new V,R=null,C=null,N=[],M=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,k=!1,q=null,Z=null,z=null,$=null;this._outputColorSpace=qt;let se=0,ie=0,te=null,Y=-1,ne=null,he=new It,Oe=new It,Ae=null,ht=new Ve(0),Je=0,st=t.width,J=t.height,ce=1,Re=null,$e=null,De=new It(0,0,st,J),je=new It(0,0,st,J),Ct=!1,Qe=new Ys,ot=!1,gt=!1,rt=new pt,bt=new V,Dt=new It,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function Lt(){return te===null?ce:1}let B=n;function kt(l,x){return t.getContext(l,x)}let ft,P,y,W,K,re,ye,Me,ae,ue,Ee,Le,ve,we,Fe,Ue,ze,O,j,le,Te,Ie,pe;try{let l={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",St,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",gn,!1),B===null){let x="webgl2";if(B=kt(x,l),B===null)throw kt(x)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(l){throw t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),qe("WebGLRenderer: "+l.message),l}function He(){ft=new $g(B),ft.init(),Te=new U_(B,ft),P=new zg(B,ft,e,Te),y=new D_(B,ft),P.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),Z=B.createFramebuffer(),z=B.createFramebuffer(),$=B.createFramebuffer(),W=new jg(B),K=new v_,re=new N_(B,ft,y,K,P,Te,W),ye=new Zg(U),Me=new ep(B),Ie=new Og(B,Me),ae=new Jg(B,Me,W,Ie),ue=new e0(B,ae,Me,Ie,W),O=new Qg(B,P,re),Fe=new kg(K),Ee=new x_(U,ye,ft,P,Ie,Fe),Le=new z_(U,K),ve=new S_,we=new A_(ft),ze=new Fg(U,ye,y,ue,v,c),Ue=new L_(U,ue,P),pe=new k_(B,W,P,y),j=new Bg(B,ft,W),le=new Kg(B,ft,W),W.programs=Ee.programs,U.capabilities=P,U.extensions=ft,U.properties=K,U.renderLists=ve,U.shadowMap=Ue,U.state=y,U.info=W}S!==dn&&(L=new n0(S,t.width,t.height,a,s,r));let Be=new xh(U,B);this.xr=Be,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let l=ft.get("WEBGL_lose_context");l&&l.loseContext()},this.forceContextRestore=function(){let l=ft.get("WEBGL_lose_context");l&&l.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(l){l!==void 0&&(ce=l,this.setSize(st,J,!1))},this.getSize=function(l){return l.set(st,J)},this.setSize=function(l,x,b=!0){if(Be.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}st=l,J=x,t.width=Math.floor(l*ce),t.height=Math.floor(x*ce),b===!0&&(t.style.width=l+"px",t.style.height=x+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,l,x)},this.getDrawingBufferSize=function(l){return l.set(st*ce,J*ce).floor()},this.setDrawingBufferSize=function(l,x,b){st=l,J=x,ce=b,t.width=Math.floor(l*b),t.height=Math.floor(x*b),this.setViewport(0,0,l,x)},this.setEffects=function(l){if(S===dn){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(l){for(let x=0;x<l.length;x++)if(l[x].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(l||[])},this.getCurrentViewport=function(l){return l.copy(he)},this.getViewport=function(l){return l.copy(De)},this.setViewport=function(l,x,b,E){l.isVector4?De.set(l.x,l.y,l.z,l.w):De.set(l,x,b,E),y.viewport(he.copy(De).multiplyScalar(ce).round())},this.getScissor=function(l){return l.copy(je)},this.setScissor=function(l,x,b,E){l.isVector4?je.set(l.x,l.y,l.z,l.w):je.set(l,x,b,E),y.scissor(Oe.copy(je).multiplyScalar(ce).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(l){y.setScissorTest(Ct=l)},this.setOpaqueSort=function(l){Re=l},this.setTransparentSort=function(l){$e=l},this.getClearColor=function(l){return l.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(l=!0,x=!0,b=!0){let E=0;if(l){let I=!1;if(te!==null){let A=te.texture.format;I=p.has(A)}if(I){let A=te.texture.type,H=_.has(A),F=ze.getClearColor(),G=ze.getClearAlpha(),X=F.r,oe=F.g,Q=F.b;H?(T[0]=X,T[1]=oe,T[2]=Q,T[3]=G,B.clearBufferuiv(B.COLOR,0,T)):(D[0]=X,D[1]=oe,D[2]=Q,D[3]=G,B.clearBufferiv(B.COLOR,0,D))}else E|=B.COLOR_BUFFER_BIT}x&&(E|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),b&&(E|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E!==0&&B.clear(E)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(l){l.setRenderer(this),q=l},this.dispose=function(){t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),ze.dispose(),ve.dispose(),we.dispose(),K.dispose(),ye.dispose(),ue.dispose(),Ie.dispose(),pe.dispose(),Ee.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Ao),Be.removeEventListener("sessionend",Co),Jn.stop()};function St(l){l.preventDefault(),Ir("WebGLRenderer: Context Lost."),k=!0}function dt(){Ir("WebGLRenderer: Context Restored."),k=!1;let l=W.autoReset,x=Ue.enabled,b=Ue.autoUpdate,E=Ue.needsUpdate,I=Ue.type;He(),W.autoReset=l,Ue.enabled=x,Ue.autoUpdate=b,Ue.needsUpdate=E,Ue.type=I}function gn(l){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",l.statusMessage)}function En(l){let x=l.target;x.removeEventListener("dispose",En),Zl(x)}function Zl(l){$l(l),K.remove(l)}function $l(l){let x=K.get(l).programs;x!==void 0&&(x.forEach(function(b){Ee.releaseProgram(b)}),l.isShaderMaterial&&Ee.releaseShaderCache(l))}this.renderBufferDirect=function(l,x,b,E,I,A){x===null&&(x=Xt);let H=I.isMesh&&I.matrixWorld.determinantAffine()<0,F=Lo(l,x,b,E,I);y.setMaterial(E,H);let G=b.index,X=1;if(E.wireframe===!0){if(G=ae.getWireframeAttribute(b),G===void 0)return;X=2}let oe=b.drawRange,Q=b.attributes.position,ee=oe.start*X,_e=(oe.start+oe.count)*X;A!==null&&(ee=Math.max(ee,A.start*X),_e=Math.min(_e,(A.start+A.count)*X)),G!==null?(ee=Math.max(ee,0),_e=Math.min(_e,G.count)):Q!=null&&(ee=Math.max(ee,0),_e=Math.min(_e,Q.count));let me=_e-ee;if(me<0||me===1/0)return;Ie.setup(I,E,F,b,G);let ge,Se=j;if(G!==null&&(ge=Me.get(G),Se=le,Se.setIndex(ge)),I.isMesh)E.wireframe===!0?(y.setLineWidth(E.wireframeLinewidth*Lt()),Se.setMode(B.LINES)):Se.setMode(B.TRIANGLES);else if(I.isLine){let Xe=E.linewidth;Xe===void 0&&(Xe=1),y.setLineWidth(Xe*Lt()),I.isLineSegments?Se.setMode(B.LINES):I.isLineLoop?Se.setMode(B.LINE_LOOP):Se.setMode(B.LINE_STRIP)}else I.isPoints?Se.setMode(B.POINTS):I.isSprite&&Se.setMode(B.TRIANGLES);if(I.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))Se.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let Xe=I._multiDrawStarts,fe=I._multiDrawCounts,Ze=I._multiDrawCount,xe=G?Me.get(G).bytesPerElement:1,be=K.get(E).currentProgram.getUniforms();for(let Ne=0;Ne<Ze;Ne++)be.setValue(B,"_gl_DrawID",Ne),Se.render(Xe[Ne]/xe,fe[Ne])}else if(I.isInstancedMesh)Se.renderInstances(ee,me,I.count);else if(b.isInstancedBufferGeometry){let Xe=b._maxInstanceCount!==void 0?b._maxInstanceCount:1/0,fe=Math.min(b.instanceCount,Xe);Se.renderInstances(ee,me,fe)}else Se.render(ee,me)};function Eo(l,x,b,E){q!==null&&l.isNodeMaterial&&q.setObject(E,l),ot===!0&&Fe.setState(l,b,!1),l.transparent===!0&&l.side===sn&&l.forceSinglePass===!1?(l.side=Jt,l.needsUpdate=!0,Kn(l,x,E),l.side=Ni,l.needsUpdate=!0,Kn(l,x,E),l.side=sn):Kn(l,x,E)}this.compile=function(l,x,b=null){b===null&&(b=l),q!==null&&q.renderStart(l,x,b),C=we.get(b),C.init(x),M.push(C),b.traverseVisible(function(I){I.isLight&&I.layers.test(x.layers)&&(C.pushLight(I),I.castShadow&&C.pushShadow(I))}),l!==b&&l.traverseVisible(function(I){I.isLight&&I.layers.test(x.layers)&&(C.pushLight(I),I.castShadow&&C.pushShadow(I))}),C.setupLights(),q!==null&&q.updateLights(C.state.lightsArray),gt=this.localClippingEnabled,ot=Fe.init(this.clippingPlanes,gt),ot===!0&&Fe.setGlobalState(this.clippingPlanes,x),q!==null&&Ue.render(C.state.shadowsArray,b,x);let E=new Set;return l.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let A=I.material;if(A)if(Array.isArray(A))for(let H=0;H<A.length;H++){let F=A[H];Eo(F,b,x,I),E.add(F)}else Eo(A,b,x,I),E.add(A)}),C=M.pop(),q!==null&&q.renderEnd(),E},this.compileAsync=function(l,x,b=null){let E=this.compile(l,x,b);return new Promise(I=>{function A(){if(E.forEach(function(H){let G=K.get(H).currentProgram;(G===void 0||G.isReady())&&E.delete(H)}),E.size===0){I(l);return}setTimeout(A,10)}ft.get("KHR_parallel_shader_compile")!==null?A():setTimeout(A,10)})};let fr=null;function To(l){fr&&fr(l)}function Ao(){Jn.stop()}function Co(){Jn.start()}let Jn=new bf;Jn.setAnimationLoop(To),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(l){fr=l,Be.setAnimationLoop(l),l===null?Jn.stop():Jn.start()},Be.addEventListener("sessionstart",Ao),Be.addEventListener("sessionend",Co),this.render=function(l,x){if(x!==void 0&&x.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;q!==null&&q.renderStart(l,x);let b=Be.enabled===!0&&Be.isPresenting===!0,E=L!==null&&(te===null||b)&&L.begin(U,te);if(l.matrixWorldAutoUpdate===!0&&l.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(x),x=Be.getCamera()),l.isScene===!0&&l.onBeforeRender(U,l,x,te),C=we.get(l,M.length),C.init(x),C.state.textureUnits=re.getTextureUnits(),M.push(C),rt.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),Qe.setFromProjectionMatrix(rt,Dn,x.reversedDepth),gt=this.localClippingEnabled,ot=Fe.init(this.clippingPlanes,gt),R=ve.get(l,N.length),R.init(),N.push(R),Be.enabled===!0&&Be.isPresenting===!0){let H=U.xr.getDepthSensingMesh();H!==null&&fs(H,x,-1/0,U.sortObjects)}fs(l,x,0,U.sortObjects),R.finish(),q!==null&&q.updateLights(C.state.lightsArray),U.sortObjects===!0&&R.sort(Re,$e),wt=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,wt&&ze.addToRenderList(R,l),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&Fe.beginShadows();let I=C.state.shadowsArray;if(Ue.render(I,l,x),ot===!0&&Fe.endShadows(),(E&&L.hasRenderPass())===!1){let H=R.opaque,F=R.transmissive;if(C.setupLights(),x.isArrayCamera){let G=x.cameras;if(F.length>0)for(let X=0,oe=G.length;X<oe;X++){let Q=G[X];dr(H,F,l,Q)}wt&&ze.render(l);for(let X=0,oe=G.length;X<oe;X++){let Q=G[X];Ro(R,l,Q,Q.viewport)}}else F.length>0&&dr(H,F,l,x),wt&&ze.render(l),Ro(R,l,x)}te!==null&&ie===0&&(re.updateMultisampleRenderTarget(te),re.updateRenderTargetMipmap(te)),E&&L.end(U),l.isScene===!0&&l.onAfterRender(U,l,x),Ie.resetDefaultState(),Y=-1,ne=null,M.pop(),M.length>0?(C=M[M.length-1],re.setTextureUnits(C.state.textureUnits),ot===!0&&Fe.setGlobalState(U.clippingPlanes,C.state.camera)):C=null,N.pop(),N.length>0?R=N[N.length-1]:R=null,q!==null&&q.renderEnd()};function fs(l,x,b,E){if(l.visible===!1)return;if(l.layers.test(x.layers)){if(l.isGroup)b=l.renderOrder;else if(l.isLOD)l.autoUpdate===!0&&l.update(x);else if(l.isLightProbeGrid)C.pushLightProbeGrid(l);else if(l.isLight)C.pushLight(l),l.castShadow&&C.pushShadow(l);else if(l.isSprite){if(!l.frustumCulled||l.intersectsFrustum(Qe)){E&&Dt.setFromMatrixPosition(l.matrixWorld).applyMatrix4(rt);let H=ue.update(l),F=l.material;F.visible&&R.push(l,H,F,b,Dt.z,null,x)}}else if((l.isMesh||l.isLine||l.isPoints)&&(!l.frustumCulled||l.intersectsFrustum(Qe))){let H=ue.update(l),F=l.material;if(E&&(l.boundingSphere!==void 0?(l.boundingSphere===null&&l.computeBoundingSphere(),Dt.copy(l.boundingSphere.center)):(H.boundingSphere===null&&H.computeBoundingSphere(),Dt.copy(H.boundingSphere.center)),Dt.applyMatrix4(l.matrixWorld).applyMatrix4(rt)),Array.isArray(F)){let G=H.groups;for(let X=0,oe=G.length;X<oe;X++){let Q=G[X],ee=F[Q.materialIndex];ee&&ee.visible&&R.push(l,H,ee,b,Dt.z,Q,x)}}else F.visible&&R.push(l,H,F,b,Dt.z,null,x)}}let A=l.children;for(let H=0,F=A.length;H<F;H++)fs(A[H],x,b,E)}function Ro(l,x,b,E){let{opaque:I,transmissive:A,transparent:H}=l;C.setupLightsView(b),ot===!0&&Fe.setGlobalState(U.clippingPlanes,b),E&&y.viewport(he.copy(E)),I.length>0&&ds(I,x,b),A.length>0&&ds(A,x,b),H.length>0&&ds(H,x,b),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function dr(l,x,b,E){if((b.isScene===!0?b.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[E.id]===void 0){let ee=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[E.id]=new un(1,1,{generateMipmaps:!0,type:ee?Kt:dn,minFilter:fi,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let A=C.state.transmissionRenderTarget[E.id],H=E.viewport||he;A.setSize(H.z*U.transmissionResolutionScale,H.w*U.transmissionResolutionScale);let F=U.getRenderTarget(),G=U.getActiveCubeFace(),X=U.getActiveMipmapLevel();U.setRenderTarget(A),U.getClearColor(ht),Je=U.getClearAlpha(),Je<1&&U.setClearColor(16777215,.5),U.clear(),wt&&ze.render(b);let oe=U.toneMapping;U.toneMapping=On;let Q=E.viewport;if(E.viewport!==void 0&&(E.viewport=void 0),C.setupLightsView(E),ot===!0&&Fe.setGlobalState(U.clippingPlanes,E),ds(l,b,E),re.updateMultisampleRenderTarget(A),re.updateRenderTargetMipmap(A),ft.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let _e=0,me=x.length;_e<me;_e++){let ge=x[_e],{object:Se,geometry:Xe,material:fe,group:Ze}=ge;if(fe.side===sn&&Se.layers.test(E.layers)){let xe=fe.side;fe.side=Jt,fe.needsUpdate=!0,Io(Se,b,E,Xe,fe,Ze),fe.side=xe,fe.needsUpdate=!0,ee=!0}}ee===!0&&(re.updateMultisampleRenderTarget(A),re.updateRenderTargetMipmap(A))}U.setRenderTarget(F,G,X),U.setClearColor(ht,Je),Q!==void 0&&(E.viewport=Q),U.toneMapping=oe}function ds(l,x,b){let E=x.isScene===!0?x.overrideMaterial:null;for(let I=0,A=l.length;I<A;I++){let H=l[I],{object:F,geometry:G,group:X}=H,oe=H.material;oe.allowOverride===!0&&E!==null&&(oe=E),F.layers.test(b.layers)&&Io(F,x,b,G,oe,X)}}function Io(l,x,b,E,I,A){q!==null&&I.isNodeMaterial&&q.setObject(l,I),l.onBeforeRender(U,x,b,E,I,A),l.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,l.matrixWorld),l.normalMatrix.getNormalMatrix(l.modelViewMatrix),I.onBeforeRender(U,x,b,E,l,A),I.transparent===!0&&I.side===sn&&I.forceSinglePass===!1?(I.side=Jt,I.needsUpdate=!0,U.renderBufferDirect(b,x,E,I,l,A),I.side=Ni,I.needsUpdate=!0,U.renderBufferDirect(b,x,E,I,l,A),I.side=sn):U.renderBufferDirect(b,x,E,I,l,A),l.onAfterRender(U,x,b,E,I,A)}function Kn(l,x,b){x.isScene!==!0&&(x=Xt);let E=K.get(l),I=C.state.lights,A=C.state.shadowsArray,H=I.state.version,F=Ee.getParameters(l,I.state,A,x,b,C.state.lightProbeGridArray),G=Ee.getProgramCacheKey(F),X=E.programs;E.environment=l.isMeshStandardMaterial||l.isMeshLambertMaterial||l.isMeshPhongMaterial?x.environment:null,E.fog=x.fog;let oe=l.isMeshStandardMaterial||l.isMeshLambertMaterial&&!l.envMap||l.isMeshPhongMaterial&&!l.envMap;E.envMap=ye.get(l.envMap||E.environment,oe),E.envMapRotation=E.environment!==null&&l.envMap===null?x.environmentRotation:l.envMapRotation,X===void 0&&(l.addEventListener("dispose",En),X=new Map,E.programs=X);let Q=X.get(G);if(Q!==void 0){if(E.currentProgram===Q&&E.lightsStateVersion===H)return Po(l,F),Q}else F.uniforms=Ee.getUniforms(l),q!==null&&l.isNodeMaterial&&q.build(l,b,F),l.onBeforeCompile(F,U),Q=Ee.acquireProgram(F,G),X.set(G,Q),E.uniforms=F.uniforms;let ee=E.uniforms;return(!l.isShaderMaterial&&!l.isRawShaderMaterial||l.clipping===!0)&&(ee.clippingPlanes=Fe.uniform),Po(l,F),E.needsLights=hn(l),E.lightsStateVersion=H,E.needsLights&&(ee.ambientLightColor.value=I.state.ambient,ee.lightProbe.value=I.state.probe,ee.sunLights.value=I.state.sun,ee.sunLightShadows.value=I.state.sunShadow,ee.directionalLights.value=I.state.directional,ee.directionalLightShadows.value=I.state.directionalShadow,ee.spotLights.value=I.state.spot,ee.spotLightShadows.value=I.state.spotShadow,ee.rectAreaLights.value=I.state.rectArea,ee.ltc_1.value=I.state.rectAreaLTC1,ee.ltc_2.value=I.state.rectAreaLTC2,ee.pointLights.value=I.state.point,ee.pointLightShadows.value=I.state.pointShadow,ee.hemisphereLights.value=I.state.hemi,ee.sunShadowMatrix.value=I.state.sunShadowMatrix,ee.sunShadowCascade.value=I.state.sunShadowCascade,ee.directionalShadowMatrix.value=I.state.directionalShadowMatrix,ee.spotLightMatrix.value=I.state.spotLightMatrix,ee.spotLightMap.value=I.state.spotLightMap,ee.pointShadowMatrix.value=I.state.pointShadowMatrix),E.lightProbeGrid=C.state.lightProbeGridArray.length>0,E.currentProgram=Q,E.uniformsList=null,Q}function Bi(l){if(l.uniformsList===null){let x=l.currentProgram.getUniforms();l.uniformsList=ir.seqWithValue(x.seq,l.uniforms)}return l.uniformsList}function Po(l,x){let b=K.get(l);b.outputColorSpace=x.outputColorSpace,b.batching=x.batching,b.batchingColor=x.batchingColor,b.instancing=x.instancing,b.instancingColor=x.instancingColor,b.instancingMorph=x.instancingMorph,b.skinning=x.skinning,b.morphTargets=x.morphTargets,b.morphNormals=x.morphNormals,b.morphColors=x.morphColors,b.morphTargetsCount=x.morphTargetsCount,b.numClippingPlanes=x.numClippingPlanes,b.numIntersection=x.numClipIntersection,b.vertexAlphas=x.vertexAlphas,b.vertexTangents=x.vertexTangents,b.toneMapping=x.toneMapping}function ps(l,x){if(l.length===0)return null;if(l.length===1)return l[0].texture!==null?l[0]:null;w.setFromMatrixPosition(x.matrixWorld);for(let b=0,E=l.length;b<E;b++){let I=l[b];if(I.texture!==null&&I.boundingBox.containsPoint(w))return I}return null}function Lo(l,x,b,E,I){x.isScene!==!0&&(x=Xt),re.resetTextureUnits();let A=x.fog,H=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?x.environment:null,F=te===null?U.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:lt.workingColorSpace,G=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,X=ye.get(E.envMap||H,G),oe=E.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,Q=!!b.attributes.tangent&&(!!E.normalMap||E.anisotropy>0),ee=!!b.morphAttributes.position,_e=!!b.morphAttributes.normal,me=!!b.morphAttributes.color,ge=On;E.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ge=U.toneMapping);let Se=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,Xe=Se!==void 0?Se.length:0,fe=K.get(E),Ze=C.state.lights;if(ot===!0&&(gt===!0||l!==ne)){let tt=l===ne&&E.id===Y;Fe.setState(E,l,tt)}let xe=!1;E.version===fe.__version?(fe.needsLights&&fe.lightsStateVersion!==Ze.state.version||fe.outputColorSpace!==F||I.isBatchedMesh&&fe.batching===!1||!I.isBatchedMesh&&fe.batching===!0||I.isBatchedMesh&&fe.batchingColor===!0&&I._colorsTexture===null||I.isBatchedMesh&&fe.batchingColor===!1&&I._colorsTexture!==null||I.isInstancedMesh&&fe.instancing===!1||!I.isInstancedMesh&&fe.instancing===!0||I.isSkinnedMesh&&fe.skinning===!1||!I.isSkinnedMesh&&fe.skinning===!0||I.isInstancedMesh&&fe.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&fe.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&fe.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&fe.instancingMorph===!1&&I.morphTexture!==null||fe.envMap!==X||E.fog===!0&&fe.fog!==A||fe.numClippingPlanes!==void 0&&(fe.numClippingPlanes!==Fe.numPlanes||fe.numIntersection!==Fe.numIntersection)||fe.vertexAlphas!==oe||fe.vertexTangents!==Q||fe.morphTargets!==ee||fe.morphNormals!==_e||fe.morphColors!==me||fe.toneMapping!==ge||fe.morphTargetsCount!==Xe||!!fe.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,fe.__version=E.version);let be=fe.currentProgram;xe===!0&&(be=Kn(E,x,I),q&&E.isNodeMaterial&&q.onUpdateProgram(E,be,fe));let Ne=!1,at=!1,et=!1,Pe=be.getUniforms(),ke=fe.uniforms;if(y.useProgram(be.program)&&(Ne=!0,at=!0,et=!0),E.id!==Y&&(Y=E.id,at=!0),fe.needsLights){let tt=ps(C.state.lightProbeGridArray,I);fe.lightProbeGrid!==tt&&(fe.lightProbeGrid=tt,at=!0)}if(Ne||ne!==l){y.buffers.depth.getReversed()&&l.reversedDepth!==!0&&(l._reversedDepth=!0,l.updateProjectionMatrix()),Pe.setValue(B,"projectionMatrix",l.projectionMatrix),Pe.setValue(B,"viewMatrix",l.matrixWorldInverse);let ut=Pe.map.cameraPosition;ut!==void 0&&ut.setValue(B,bt.setFromMatrixPosition(l.matrixWorld)),P.logarithmicDepthBuffer&&Pe.setValue(B,"logDepthBufFC",2/(Math.log(l.far+1)/Math.LN2)),(E.isMeshPhongMaterial||E.isMeshToonMaterial||E.isMeshLambertMaterial||E.isMeshBasicMaterial||E.isMeshStandardMaterial||E.isShaderMaterial)&&Pe.setValue(B,"isOrthographic",l.isOrthographicCamera===!0),ne!==l&&(ne=l,at=!0,et=!0)}if(fe.needsLights&&(Ze.state.sunShadowMap.length>0&&Pe.setValue(B,"sunShadowMap",Ze.state.sunShadowMap,re),Ze.state.directionalShadowMap.length>0&&Pe.setValue(B,"directionalShadowMap",Ze.state.directionalShadowMap,re),Ze.state.spotShadowMap.length>0&&Pe.setValue(B,"spotShadowMap",Ze.state.spotShadowMap,re),Ze.state.pointShadowMap.length>0&&Pe.setValue(B,"pointShadowMap",Ze.state.pointShadowMap,re)),I.isSkinnedMesh){Pe.setOptional(B,I,"bindMatrix"),Pe.setOptional(B,I,"bindMatrixInverse");let tt=I.skeleton;tt&&(tt.boneTexture===null&&tt.computeBoneTexture(),Pe.setValue(B,"boneTexture",tt.boneTexture,re))}I.isBatchedMesh&&(Pe.setOptional(B,I,"batchingTexture"),Pe.setValue(B,"batchingTexture",I._matricesTexture,re),Pe.setOptional(B,I,"batchingIdTexture"),Pe.setValue(B,"batchingIdTexture",I._indirectTexture,re),Pe.setOptional(B,I,"batchingColorTexture"),I._colorsTexture!==null&&Pe.setValue(B,"batchingColorTexture",I._colorsTexture,re));let xt=b.morphAttributes;if((xt.position!==void 0||xt.normal!==void 0||xt.color!==void 0)&&O.update(I,b,be),(at||fe.receiveShadow!==I.receiveShadow)&&(fe.receiveShadow=I.receiveShadow,Pe.setValue(B,"receiveShadow",I.receiveShadow)),(E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial)&&E.envMap===null&&x.environment!==null&&(ke.envMapIntensity.value=x.environmentIntensity),ke.dfgLUT!==void 0&&(ke.dfgLUT.value=H_()),at){if(Pe.setValue(B,"toneMappingExposure",U.toneMappingExposure),fe.needsLights&&Vt(ke,et),A&&E.fog===!0&&Le.refreshFogUniforms(ke,A),Le.refreshMaterialUniforms(ke,E,ce,J,C.state.transmissionRenderTarget[l.id]),fe.needsLights&&fe.lightProbeGrid){let tt=fe.lightProbeGrid;ke.probesSH.value=tt.texture,ke.probesMin.value.copy(tt.boundingBox.min),ke.probesMax.value.copy(tt.boundingBox.max),ke.probesResolution.value.copy(tt.resolution)}ir.upload(B,Bi(fe),ke,re)}if(E.isShaderMaterial&&E.uniformsNeedUpdate===!0&&(ir.upload(B,Bi(fe),ke,re),E.uniformsNeedUpdate=!1),E.isSpriteMaterial&&Pe.setValue(B,"center",I.center),Pe.setValue(B,"modelViewMatrix",I.modelViewMatrix),Pe.setValue(B,"normalMatrix",I.normalMatrix),Pe.setValue(B,"modelMatrix",I.matrixWorld),E.uniformsGroups!==void 0){let tt=E.uniformsGroups;for(let ut=0,Yt=tt.length;ut<Yt;ut++){let jn=tt[ut];pe.update(jn,be),pe.bind(jn,be)}}return be}function Vt(l,x){l.ambientLightColor.needsUpdate=x,l.lightProbe.needsUpdate=x,l.sunLights.needsUpdate=x,l.sunLightShadows.needsUpdate=x,l.directionalLights.needsUpdate=x,l.directionalLightShadows.needsUpdate=x,l.pointLights.needsUpdate=x,l.pointLightShadows.needsUpdate=x,l.spotLights.needsUpdate=x,l.spotLightShadows.needsUpdate=x,l.rectAreaLights.needsUpdate=x,l.hemisphereLights.needsUpdate=x}function hn(l){return l.isMeshLambertMaterial||l.isMeshToonMaterial||l.isMeshPhongMaterial||l.isMeshStandardMaterial||l.isShadowMaterial||l.isShaderMaterial&&l.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(l,x,b){let E=K.get(l);E.__autoAllocateDepthBuffer=l.resolveDepthBuffer===!1,E.__autoAllocateDepthBuffer===!1&&(E.__useRenderToTexture=!1),K.get(l.texture).__webglTexture=x,K.get(l.depthTexture).__webglTexture=E.__autoAllocateDepthBuffer?void 0:b,E.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(l,x){let b=K.get(l);b.__webglFramebuffer=x,b.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(l,x=0,b=0){te=l,se=x,ie=b;let E=null,I=!1,A=!1;if(l){let F=K.get(l);if(F.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(B.FRAMEBUFFER,F.__webglFramebuffer),he.copy(l.viewport),Oe.copy(l.scissor),Ae=l.scissorTest,y.viewport(he),y.scissor(Oe),y.setScissorTest(Ae),Y=-1;return}else if(F.__webglFramebuffer===void 0)re.setupRenderTarget(l);else if(F.__hasExternalTextures)re.rebindTextures(l,K.get(l.texture).__webglTexture,K.get(l.depthTexture).__webglTexture);else if(l.depthBuffer){let oe=l.depthTexture;if(F.__boundDepthTexture!==oe){if(oe!==null&&K.has(oe)&&(l.width!==oe.image.width||l.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(l)}}let G=l.texture;(G.isData3DTexture||G.isDataArrayTexture||G.isCompressedArrayTexture)&&(A=!0);let X=K.get(l).__webglFramebuffer;l.isWebGLCubeRenderTarget?(Array.isArray(X[x])?E=X[x][b]:E=X[x],I=!0):l.samples>0&&re.useMultisampledRTT(l)===!1?E=K.get(l).__webglMultisampledFramebuffer:Array.isArray(X)?E=X[b]:E=X,he.copy(l.viewport),Oe.copy(l.scissor),Ae=l.scissorTest}else he.copy(De).multiplyScalar(ce).floor(),Oe.copy(je).multiplyScalar(ce).floor(),Ae=Ct;if(b!==0&&(E=Z),y.bindFramebuffer(B.FRAMEBUFFER,E)&&y.drawBuffers(l,E),y.viewport(he),y.scissor(Oe),y.setScissorTest(Ae),I){let F=K.get(l.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+x,F.__webglTexture,b)}else if(A){let F=x;for(let G=0;G<l.textures.length;G++){let X=K.get(l.textures[G]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+G,X.__webglTexture,b,F)}}else if(l!==null&&b!==0){let F=K.get(l.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,F.__webglTexture,b)}Y=-1};function f(l){let x=K.get(l);return(x.__readFormat!==l.format||x.__readType!==l.type)&&(x.__readFormat=l.format,x.__readType=l.type,x.__formatReadable=P.textureFormatReadable(l.format),x.__typeReadable=P.textureTypeReadable(l.type)),x}this.readRenderTargetPixels=function(l,x,b,E,I,A,H,F=0){if(!(l&&l.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let G=K.get(l).__webglFramebuffer;if(l.isWebGLCubeRenderTarget&&H!==void 0&&(G=G[H]),G){y.bindFramebuffer(B.FRAMEBUFFER,G);try{let X=l.textures[F],oe=X.format,Q=X.type;l.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+F);let ee=f(X);if(ee.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ee.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=l.width-E&&b>=0&&b<=l.height-I&&B.readPixels(x,b,E,I,Te.convert(oe),Te.convert(Q),A)}finally{let X=te!==null?K.get(te).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,X)}}},this.readRenderTargetPixelsAsync=async function(l,x,b,E,I,A,H,F=0){if(!(l&&l.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let G=K.get(l).__webglFramebuffer;if(l.isWebGLCubeRenderTarget&&H!==void 0&&(G=G[H]),G)if(x>=0&&x<=l.width-E&&b>=0&&b<=l.height-I){y.bindFramebuffer(B.FRAMEBUFFER,G);let X=l.textures[F],oe=X.format,Q=X.type;l.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+F);let ee=f(X);if(ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _e=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,_e),B.bufferData(B.PIXEL_PACK_BUFFER,A.byteLength,B.STREAM_READ),B.readPixels(x,b,E,I,Te.convert(oe),Te.convert(Q),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let me=te!==null?K.get(te).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,me);let ge=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Zu(B,ge,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,_e),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,A),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(_e),B.deleteSync(ge),A}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(l,x=null,b=0){let E=Math.pow(2,-b),I=Math.floor(l.image.width*E),A=Math.floor(l.image.height*E),H=x!==null?x.x:0,F=x!==null?x.y:0;re.setTexture2D(l,0),B.copyTexSubImage2D(B.TEXTURE_2D,b,0,0,H,F,I,A),y.unbindTexture()},this.copyTextureToTexture=function(l,x,b=null,E=null,I=0,A=0){let H,F,G,X,oe,Q,ee,_e,me,ge=l.isCompressedTexture?l.mipmaps[A]:l.image;if(b!==null)H=b.max.x-b.min.x,F=b.max.y-b.min.y,G=b.isBox3?b.max.z-b.min.z:1,X=b.min.x,oe=b.min.y,Q=b.isBox3?b.min.z:0;else{let ke=Math.pow(2,-I);H=Math.floor(ge.width*ke),F=Math.floor(ge.height*ke),l.isDataArrayTexture?G=ge.depth:l.isData3DTexture?G=Math.floor(ge.depth*ke):G=1,X=0,oe=0,Q=0}E!==null?(ee=E.x,_e=E.y,me=E.z):(ee=0,_e=0,me=0);let Se=Te.convert(x.format),Xe=Te.convert(x.type),fe;x.isData3DTexture?(re.setTexture3D(x,0),fe=B.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(re.setTexture2DArray(x,0),fe=B.TEXTURE_2D_ARRAY):(re.setTexture2D(x,0),fe=B.TEXTURE_2D),y.activeTexture(B.TEXTURE0),y.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,x.flipY),y.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),y.pixelStorei(B.UNPACK_ALIGNMENT,x.unpackAlignment);let Ze=y.getParameter(B.UNPACK_ROW_LENGTH),xe=y.getParameter(B.UNPACK_IMAGE_HEIGHT),be=y.getParameter(B.UNPACK_SKIP_PIXELS),Ne=y.getParameter(B.UNPACK_SKIP_ROWS),at=y.getParameter(B.UNPACK_SKIP_IMAGES);y.pixelStorei(B.UNPACK_ROW_LENGTH,ge.width),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ge.height),y.pixelStorei(B.UNPACK_SKIP_PIXELS,X),y.pixelStorei(B.UNPACK_SKIP_ROWS,oe),y.pixelStorei(B.UNPACK_SKIP_IMAGES,Q);let et=l.isDataArrayTexture||l.isData3DTexture,Pe=x.isDataArrayTexture||x.isData3DTexture;if(l.isDepthTexture){let ke=K.get(l),xt=K.get(x),tt=K.get(ke.__renderTarget),ut=K.get(xt.__renderTarget);y.bindFramebuffer(B.READ_FRAMEBUFFER,tt.__webglFramebuffer),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let Yt=0;Yt<G;Yt++)et&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,K.get(l).__webglTexture,I,Q+Yt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,K.get(x).__webglTexture,A,me+Yt)),B.blitFramebuffer(X,oe,H,F,ee,_e,H,F,B.DEPTH_BUFFER_BIT,B.NEAREST);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(I!==0||l.isRenderTargetTexture||K.has(l)){let ke=K.get(l),xt=K.get(x);y.bindFramebuffer(B.READ_FRAMEBUFFER,z),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,$);for(let tt=0;tt<G;tt++)et?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ke.__webglTexture,I,Q+tt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ke.__webglTexture,I),Pe?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,xt.__webglTexture,A,me+tt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,xt.__webglTexture,A),I!==0?B.blitFramebuffer(X,oe,H,F,ee,_e,H,F,B.COLOR_BUFFER_BIT,B.NEAREST):Pe?B.copyTexSubImage3D(fe,A,ee,_e,me+tt,X,oe,H,F):B.copyTexSubImage2D(fe,A,ee,_e,X,oe,H,F);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Pe?l.isDataTexture||l.isData3DTexture?B.texSubImage3D(fe,A,ee,_e,me,H,F,G,Se,Xe,ge.data):x.isCompressedArrayTexture?B.compressedTexSubImage3D(fe,A,ee,_e,me,H,F,G,Se,ge.data):B.texSubImage3D(fe,A,ee,_e,me,H,F,G,Se,Xe,ge):l.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,A,ee,_e,H,F,Se,Xe,ge.data):l.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,A,ee,_e,ge.width,ge.height,Se,ge.data):B.texSubImage2D(B.TEXTURE_2D,A,ee,_e,H,F,Se,Xe,ge);y.pixelStorei(B.UNPACK_ROW_LENGTH,Ze),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,xe),y.pixelStorei(B.UNPACK_SKIP_PIXELS,be),y.pixelStorei(B.UNPACK_SKIP_ROWS,Ne),y.pixelStorei(B.UNPACK_SKIP_IMAGES,at),A===0&&x.generateMipmaps&&B.generateMipmap(fe),y.unbindTexture()},this.initRenderTarget=function(l){K.get(l).__webglFramebuffer===void 0&&re.setupRenderTarget(l)},this.initTexture=function(l){l.isCubeTexture?re.setTextureCube(l,0):l.isData3DTexture?re.setTexture3D(l,0):l.isDataArrayTexture||l.isCompressedArrayTexture?re.setTexture2DArray(l,0):re.setTexture2D(l,0),y.unbindTexture()},this.resetState=function(){se=0,ie=0,te=null,y.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var If={type:"change"},yh={type:"start"},Lf={type:"end"},Ol=new hi,Pf=new ln,W_=Math.cos(70*Qc.DEG2RAD),zt=new V,mn=2*Math.PI,yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vh=1e-6,vo=class extends io{constructor(e,t=null){super(e,t),this.state=yt.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Di.ROTATE,TWO:Di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new yn,this._lastTargetPosition=new V,this._quat=new yn().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $s,this._sphericalDelta=new $s,this._scale=1,this._panOffset=new V,this._rotateStart=new Ge,this._rotateEnd=new Ge,this._rotateDelta=new Ge,this._panStart=new Ge,this._panEnd=new Ge,this._panDelta=new Ge,this._dollyStart=new Ge,this._dollyEnd=new Ge,this._dollyDelta=new Ge,this._dollyDirection=new V,this._mouse=new Ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Y_.bind(this),this._onPointerDown=X_.bind(this),this._onPointerUp=q_.bind(this),this._onContextMenu=ex.bind(this),this._onMouseWheel=J_.bind(this),this._onKeyDown=K_.bind(this),this._onTouchStart=j_.bind(this),this._onTouchMove=Q_.bind(this),this._onMouseDown=Z_.bind(this),this._onMouseMove=$_.bind(this),this._interceptControlDown=tx.bind(this),this._interceptControlUp=nx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=yt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(If),this.update(),this.state=yt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;zt.copy(t).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=mn:n>Math.PI&&(n-=mn),s<-Math.PI?s+=mn:s>Math.PI&&(s-=mn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=zt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new V(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let h=new V(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(a),this.object.updateMatrixWorld(),o=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ol.origin.copy(this.object.position),Ol.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ol.direction))<W_?this.object.lookAt(this.target):(Pf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ol.intersectPlane(Pf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>vh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vh||this._lastTargetPosition.distanceToSquared(this.target)>vh?(this.dispatchEvent(If),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?mn/60*this.autoRotateSpeed*e:mn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){zt.setFromMatrixColumn(t,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,t){this.screenSpacePanning===!0?zt.setFromMatrixColumn(t,1):(zt.setFromMatrixColumn(t,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;zt.copy(s).sub(this.target);let r=zt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ge,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function X_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Y_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function q_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Lf),this.state=yt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Z_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=yt.DOLLY;break;case Li.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=yt.ROTATE}break;case Li.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=yt.PAN}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(yh)}function $_(i){switch(this.state){case yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function J_(i){this.enabled===!1||this.enableZoom===!1||this.state!==yt.NONE||(i.preventDefault(),this.dispatchEvent(yh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Lf))}function K_(i){this.enabled!==!1&&this._handleKeyDown(i)}function j_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Di.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=yt.TOUCH_ROTATE;break;case Di.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=yt.TOUCH_PAN;break;default:this.state=yt.NONE}break;case 2:switch(this.touches.TWO){case Di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=yt.TOUCH_DOLLY_PAN;break;case Di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=yt.TOUCH_DOLLY_ROTATE;break;default:this.state=yt.NONE}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(yh)}function Q_(i){switch(this._trackPointer(i),this.state){case yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=yt.NONE}}function ex(i){this.enabled!==!1&&i.preventDefault()}function tx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Bl=class extends qi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ei;e.deleteAttribute("uv");let t=new An({side:Jt}),n=new An,s=new ji(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Et(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Or(e,n,6),a=new Mt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new Et(e,or(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let h=new Et(e,or(50));h.position.set(-16.109,18.021,-8.207),h.scale.set(.1,2.425,2.751),this.add(h);let d=new Et(e,or(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);let m=new Et(e,or(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);let u=new Et(e,or(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let g=new Et(e,or(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function or(i){return new Xr({color:0,emissive:16777215,emissiveIntensity:i})}var Cn=Uint8Array,ar=Uint16Array,ix=Int32Array,Df=new Cn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Nf=new Cn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),sx=new Cn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Uf=function(i,e){for(var t=new ar(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new ix(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},Ff=Uf(Df,2),Of=Ff.b,rx=Ff.r;Of[28]=258,rx[258]=28;var Bf=Uf(Nf,0),ox=Bf.b,FS=Bf.r,bh=new ar(32768);for(mt=0;mt<32768;++mt)mi=(mt&43690)>>1|(mt&21845)<<1,mi=(mi&52428)>>2|(mi&13107)<<2,mi=(mi&61680)>>4|(mi&3855)<<4,bh[mt]=((mi&65280)>>8|(mi&255)<<8)>>1;var mi,mt,yo=(function(i,e,t){for(var n=i.length,s=0,r=new ar(e);s<n;++s)i[s]&&++r[i[s]-1];var o=new ar(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new ar(1<<e);var c=15-e;for(s=0;s<n;++s)if(i[s])for(var h=s<<4|i[s],d=e-i[s],m=o[i[s]-1]++<<d,u=m|(1<<d)-1;m<=u;++m)a[bh[m]>>c]=h}else for(a=new ar(n),s=0;s<n;++s)i[s]&&(a[s]=bh[o[i[s]-1]++]>>15-i[s]);return a}),So=new Cn(288);for(mt=0;mt<144;++mt)So[mt]=8;var mt;for(mt=144;mt<256;++mt)So[mt]=9;var mt;for(mt=256;mt<280;++mt)So[mt]=7;var mt;for(mt=280;mt<288;++mt)So[mt]=8;var mt,zf=new Cn(32);for(mt=0;mt<32;++mt)zf[mt]=5;var mt;var ax=yo(So,9,1);var lx=yo(zf,5,1),Sh=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},zn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Mh=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},cx=function(i){return(i+7)/8|0},hx=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new Cn(i.subarray(e,t))};var ux=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],kn=function(i,e,t){var n=new Error(e||ux[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,kn),!t)throw n;return n},fx=function(i,e,t,n){var s=i.length,r=n?n.length:0;if(!s||e.f&&!e.l)return t||new Cn(0);var o=!t,a=o||e.i!=2,c=e.i;o&&(t=new Cn(s*3));var h=function(De){var je=t.length;if(De>je){var Ct=new Cn(Math.max(je*2,De));Ct.set(t),t=Ct}},d=e.f||0,m=e.p||0,u=e.b||0,g=e.l,v=e.d,S=e.m,p=e.n,_=s*8;do{if(!g){d=zn(i,m,1);var T=zn(i,m+1,3);if(m+=3,T)if(T==1)g=ax,v=lx,S=9,p=5;else if(T==2){var C=zn(i,m,31)+257,N=zn(i,m+10,15)+4,M=C+zn(i,m+5,31)+1;m+=14;for(var L=new Cn(M),U=new Cn(19),k=0;k<N;++k)U[sx[k]]=zn(i,m+k*3,7);m+=N*3;for(var q=Sh(U),Z=(1<<q)-1,z=yo(U,q,1),k=0;k<M;){var $=z[zn(i,m,Z)];m+=$&15;var D=$>>4;if(D<16)L[k++]=D;else{var se=0,ie=0;for(D==16?(ie=3+zn(i,m,3),m+=2,se=L[k-1]):D==17?(ie=3+zn(i,m,7),m+=3):D==18&&(ie=11+zn(i,m,127),m+=7);ie--;)L[k++]=se}}var te=L.subarray(0,C),Y=L.subarray(C);S=Sh(te),p=Sh(Y),g=yo(te,S,1),v=yo(Y,p,1)}else kn(1);else{var D=cx(m)+4,w=i[D-4]|i[D-3]<<8,R=D+w;if(R>s){c&&kn(0);break}a&&h(u+w),t.set(i.subarray(D,R),u),e.b=u+=w,e.p=m=R*8,e.f=d;continue}if(m>_){c&&kn(0);break}}a&&h(u+131072);for(var ne=(1<<S)-1,he=(1<<p)-1,Oe=m;;Oe=m){var se=g[Mh(i,m)&ne],Ae=se>>4;if(m+=se&15,m>_){c&&kn(0);break}if(se||kn(2),Ae<256)t[u++]=Ae;else if(Ae==256){Oe=m,g=null;break}else{var ht=Ae-254;if(Ae>264){var k=Ae-257,Je=Df[k];ht=zn(i,m,(1<<Je)-1)+Of[k],m+=Je}var st=v[Mh(i,m)&he],J=st>>4;st||kn(3),m+=st&15;var Y=ox[J];if(J>3){var Je=Nf[J];Y+=Mh(i,m)&(1<<Je)-1,m+=Je}if(m>_){c&&kn(0);break}a&&h(u+131072);var ce=u+ht;if(u<Y){var Re=r-Y,$e=Math.min(Y,ce);for(Re+u<0&&kn(3);u<$e;++u)t[u]=n[Re+u]}for(;u<ce;++u)t[u]=t[u-Y]}}e.l=g,e.p=Oe,e.b=u,e.f=d,g&&(d=1,e.m=S,e.d=v,e.n=p)}while(!d);return u!=t.length&&o?hx(t,0,u):t.subarray(0,u)};var dx=new Cn(0);var px=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&kn(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&kn(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function lr(i,e){return fx(i.subarray(px(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var mx=typeof TextDecoder<"u"&&new TextDecoder,gx=0;try{mx.decode(dx,{stream:!0}),gx=1}catch{}var zl=class extends qr{constructor(e){super(e),this.type=Kt,this.outputFormat=Ut,this.part=0}parse(e){let L=Math.pow(2.7182818,2.2),U=null;function k(f,l){let x=0;for(let E=0;E<65536;++E)(E==0||f[E>>3]&1<<(E&7))&&(l[x++]=E);let b=x-1;for(;x<65536;)l[x++]=0;return b}function q(f){for(let l=0;l<16384;l++)f[l]={},f[l].len=0,f[l].lit=0,f[l].p=null}let Z={l:0,c:0,lc:0};function z(f,l,x,b,E){for(;x<f;)l=l<<8|we(b,E),x+=8;x-=f,Z.l=l>>x&(1<<f)-1,Z.c=l,Z.lc=x}let $=new Array(59);function se(f){for(let x=0;x<=58;++x)$[x]=0;for(let x=0;x<65537;++x)$[f[x]]+=1;let l=0;for(let x=58;x>0;--x){let b=l+$[x]>>1;$[x]=l,l=b}for(let x=0;x<65537;++x){let b=f[x];b>0&&(f[x]=b|$[b]++<<6)}}function ie(f,l,x,b,E,I){let A=l,H=0,F=0;for(;b<=E;b++){if(A.value-l.value>x)return!1;z(6,H,F,f,A);let G=Z.l;if(H=Z.c,F=Z.lc,I[b]=G,G==63){if(A.value-l.value>x)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");z(8,H,F,f,A);let X=Z.l+6;if(H=Z.c,F=Z.lc,b+X>E+1)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");for(;X--;)I[b++]=0;b--}else if(G>=59){let X=G-59+2;if(b+X>E+1)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");for(;X--;)I[b++]=0;b--}}se(I)}function te(f){return f&63}function Y(f){return f>>6}function ne(f,l,x,b){for(;l<=x;l++){let E=Y(f[l]),I=te(f[l]);if(E>>I)throw new Error("THREE.EXRLoader: Invalid table entry");if(I>14){let A=b[E>>I-14];if(A.len)throw new Error("THREE.EXRLoader: Invalid table entry");if(A.lit++,A.p){let H=A.p;A.p=new Array(A.lit);for(let F=0;F<A.lit-1;++F)A.p[F]=H[F]}else A.p=new Array(1);A.p[A.lit-1]=l}else if(I){let A=0;for(let H=1<<14-I;H>0;H--){let F=b[(E<<14-I)+A];if(F.len||F.p)throw new Error("THREE.EXRLoader: Invalid table entry");F.len=I,F.lit=l,A++}}}return!0}let he={c:0,lc:0};function Oe(f,l,x,b){f=f<<8|we(x,b),l+=8,he.c=f,he.lc=l}let Ae={c:0,lc:0};function ht(f,l,x,b,E,I,A,H,F){if(f==l){b<8&&(Oe(x,b,E,I),x=he.c,b=he.lc),b-=8;let G=x>>b;if(G=new Uint8Array([G])[0],H.value+G>F)return!1;let X=A[H.value-1];for(;G-- >0;)A[H.value++]=X}else if(H.value<F)A[H.value++]=f;else return!1;Ae.c=x,Ae.lc=b}function Je(f){return f&65535}function st(f){let l=Je(f);return l>32767?l-65536:l}let J={a:0,b:0};function ce(f,l){let x=st(f),E=st(l),I=x+(E&1)+(E>>1),A=I,H=I-E;J.a=A,J.b=H}function Re(f,l){let x=Je(f),b=Je(l),E=x-(b>>1)&65535,I=b+E-32768&65535;J.a=I,J.b=E}function $e(f,l,x,b,E,I,A){let H=A<16384,F=x>E?E:x,G=1,X,oe;for(;G<=F;)G<<=1;for(G>>=1,X=G,G>>=1;G>=1;){oe=0;let Q=oe+I*(E-X),ee=I*G,_e=I*X,me=b*G,ge=b*X,Se,Xe,fe,Ze;for(;oe<=Q;oe+=_e){let xe=oe,be=oe+b*(x-X);for(;xe<=be;xe+=ge){let Ne=xe+me,at=xe+ee,et=at+me;H?(ce(f[xe+l],f[at+l]),Se=J.a,fe=J.b,ce(f[Ne+l],f[et+l]),Xe=J.a,Ze=J.b,ce(Se,Xe),f[xe+l]=J.a,f[Ne+l]=J.b,ce(fe,Ze),f[at+l]=J.a,f[et+l]=J.b):(Re(f[xe+l],f[at+l]),Se=J.a,fe=J.b,Re(f[Ne+l],f[et+l]),Xe=J.a,Ze=J.b,Re(Se,Xe),f[xe+l]=J.a,f[Ne+l]=J.b,Re(fe,Ze),f[at+l]=J.a,f[et+l]=J.b)}if(x&G){let Ne=xe+ee;H?ce(f[xe+l],f[Ne+l]):Re(f[xe+l],f[Ne+l]),Se=J.a,f[Ne+l]=J.b,f[xe+l]=Se}}if(E&G){let xe=oe,be=oe+b*(x-X);for(;xe<=be;xe+=ge){let Ne=xe+me;H?ce(f[xe+l],f[Ne+l]):Re(f[xe+l],f[Ne+l]),Se=J.a,f[Ne+l]=J.b,f[xe+l]=Se}}X=G,G>>=1}return oe}function De(f,l,x,b,E,I,A,H,F){let G=0,X=0,oe=A,Q=Math.trunc(b.value+(E+7)/8);for(;b.value<Q;)for(Oe(G,X,x,b),G=he.c,X=he.lc;X>=14;){let _e=G>>X-14&16383,me=l[_e];if(me.len)X-=me.len,ht(me.lit,I,G,X,x,b,H,F,oe),G=Ae.c,X=Ae.lc;else{if(!me.p)throw new Error("THREE.EXRLoader: hufDecode issues");let ge;for(ge=0;ge<me.lit;ge++){let Se=te(f[me.p[ge]]);for(;X<Se&&b.value<Q;)Oe(G,X,x,b),G=he.c,X=he.lc;if(X>=Se&&Y(f[me.p[ge]])==(G>>X-Se&(1<<Se)-1)){X-=Se,ht(me.p[ge],I,G,X,x,b,H,F,oe),G=Ae.c,X=Ae.lc;break}}if(ge==me.lit)throw new Error("THREE.EXRLoader: hufDecode issues")}}let ee=8-E&7;for(G>>=ee,X-=ee;X>0;){let _e=l[G<<14-X&16383];if(_e.len)X-=_e.len,ht(_e.lit,I,G,X,x,b,H,F,oe),G=Ae.c,X=Ae.lc;else throw new Error("THREE.EXRLoader: hufDecode issues")}return!0}function je(f,l,x,b,E,I){let A={value:0},H=x.value,F=ve(l,x),G=ve(l,x);x.value+=4;let X=ve(l,x);if(x.value+=4,F<0||F>=65537||G<0||G>=65537)throw new Error("THREE.EXRLoader: Something wrong with HUF_ENCSIZE");let oe=new Array(65537),Q=new Array(16384);q(Q);let ee=b-(x.value-H);if(ie(f,x,ee,F,G,oe),X>8*(b-(x.value-H)))throw new Error("THREE.EXRLoader: Something wrong with hufUncompress");ne(oe,F,G,Q),De(oe,Q,f,x,X,G,I,E,A)}function Ct(f,l,x){for(let b=0;b<x;++b)l[b]=f[l[b]]}function Qe(f){for(let l=1;l<f.length;l++){let x=f[l-1]+f[l]-128;f[l]=x}}function ot(f,l){let x=0,b=Math.floor((f.length+1)/2),E=0,I=f.length-1;for(;!(E>I||(l[E++]=f[x++],E>I));)l[E++]=f[b++]}function gt(f){let l=f.byteLength,x=new Array,b=0,E=new DataView(f);for(;l>0;){let I=E.getInt8(b++);if(I<0){let A=-I;l-=A+1;for(let H=0;H<A;H++)x.push(E.getUint8(b++))}else{let A=I;l-=2;let H=E.getUint8(b++);for(let F=0;F<A+1;F++)x.push(H)}}return x}function rt(f,l,x,b,E,I){let A=new DataView(I.buffer),H=x[f.idx[0]].width,F=x[f.idx[0]].height,G=3,X=Math.floor(H/8),oe=Math.ceil(H/8),Q=Math.ceil(F/8),ee=H-(oe-1)*8,_e=F-(Q-1)*8,me={value:0},ge=new Array(G),Se=new Array(G),Xe=new Array(G),fe=new Array(G),Ze=new Array(G);for(let be=0;be<G;++be)Ze[be]=l[f.idx[be]],ge[be]=be<1?0:ge[be-1]+oe*Q,Se[be]=new Float32Array(64),Xe[be]=new Uint16Array(64),fe[be]=new Uint16Array(oe*64);for(let be=0;be<Q;++be){let Ne=8;be==Q-1&&(Ne=_e);let at=8;for(let Pe=0;Pe<oe;++Pe){Pe==oe-1&&(at=ee);for(let ke=0;ke<G;++ke)Xe[ke].fill(0),Xe[ke][0]=E[ge[ke]++],Dt(me,b,Xe[ke]),Xt(Xe[ke],Se[ke]),wt(Se[ke]);G==3&&Lt(Se);for(let ke=0;ke<G;++ke)B(Se[ke],fe[ke],Pe*64)}let et=0;for(let Pe=0;Pe<G;++Pe){let ke=x[f.idx[Pe]].type;for(let xt=8*be;xt<8*be+Ne;++xt){et=Ze[Pe][xt];for(let tt=0;tt<X;++tt){let ut=tt*64+(xt&7)*8;A.setUint16(et+0*ke,fe[Pe][ut+0],!0),A.setUint16(et+2*ke,fe[Pe][ut+1],!0),A.setUint16(et+4*ke,fe[Pe][ut+2],!0),A.setUint16(et+6*ke,fe[Pe][ut+3],!0),A.setUint16(et+8*ke,fe[Pe][ut+4],!0),A.setUint16(et+10*ke,fe[Pe][ut+5],!0),A.setUint16(et+12*ke,fe[Pe][ut+6],!0),A.setUint16(et+14*ke,fe[Pe][ut+7],!0),et+=16*ke}}if(X!=oe)for(let xt=8*be;xt<8*be+Ne;++xt){let tt=Ze[Pe][xt]+8*X*2*ke,ut=X*64+(xt&7)*8;for(let Yt=0;Yt<at;++Yt)A.setUint16(tt+Yt*2*ke,fe[Pe][ut+Yt],!0)}}}let xe=new Uint16Array(H);A=new DataView(I.buffer);for(let be=0;be<G;++be){x[f.idx[be]].decoded=!0;let Ne=x[f.idx[be]].type;if(x[be].type==2)for(let at=0;at<F;++at){let et=Ze[be][at];for(let Pe=0;Pe<H;++Pe)xe[Pe]=A.getUint16(et+Pe*2*Ne,!0);for(let Pe=0;Pe<H;++Pe)A.setFloat32(et+Pe*2*Ne,j(xe[Pe]),!0)}}}function bt(f,l,x,b,E,I){let A=new DataView(I.buffer),H=x[f],F=H.width,G=H.height,X=Math.ceil(F/8),oe=Math.ceil(G/8),Q=Math.floor(F/8),ee=F-(X-1)*8,_e=G-(oe-1)*8,me={value:0},ge=0,Se=new Float32Array(64),Xe=new Uint16Array(64),fe=new Uint16Array(X*64);for(let Ze=0;Ze<oe;++Ze){let xe=8;Ze==oe-1&&(xe=_e);for(let be=0;be<X;++be)Xe.fill(0),Xe[0]=E[ge++],Dt(me,b,Xe),Xt(Xe,Se),wt(Se),B(Se,fe,be*64);for(let be=8*Ze;be<8*Ze+xe;++be){let Ne=l[f][be];for(let at=0;at<Q;++at){let et=at*64+(be&7)*8;for(let Pe=0;Pe<8;++Pe)A.setUint16(Ne+Pe*2*H.type,fe[et+Pe],!0);Ne+=16*H.type}if(X!=Q){let at=Q*64+(be&7)*8;for(let et=0;et<ee;++et)A.setUint16(Ne+et*2*H.type,fe[at+et],!0)}}}H.decoded=!0}function Dt(f,l,x){let b,E=1;for(;E<64;)b=l[f.value],b==65280?E=64:b>>8==255?E+=b&255:(x[E]=b,E++),f.value++}function Xt(f,l){l[0]=j(f[0]),l[1]=j(f[1]),l[2]=j(f[5]),l[3]=j(f[6]),l[4]=j(f[14]),l[5]=j(f[15]),l[6]=j(f[27]),l[7]=j(f[28]),l[8]=j(f[2]),l[9]=j(f[4]),l[10]=j(f[7]),l[11]=j(f[13]),l[12]=j(f[16]),l[13]=j(f[26]),l[14]=j(f[29]),l[15]=j(f[42]),l[16]=j(f[3]),l[17]=j(f[8]),l[18]=j(f[12]),l[19]=j(f[17]),l[20]=j(f[25]),l[21]=j(f[30]),l[22]=j(f[41]),l[23]=j(f[43]),l[24]=j(f[9]),l[25]=j(f[11]),l[26]=j(f[18]),l[27]=j(f[24]),l[28]=j(f[31]),l[29]=j(f[40]),l[30]=j(f[44]),l[31]=j(f[53]),l[32]=j(f[10]),l[33]=j(f[19]),l[34]=j(f[23]),l[35]=j(f[32]),l[36]=j(f[39]),l[37]=j(f[45]),l[38]=j(f[52]),l[39]=j(f[54]),l[40]=j(f[20]),l[41]=j(f[22]),l[42]=j(f[33]),l[43]=j(f[38]),l[44]=j(f[46]),l[45]=j(f[51]),l[46]=j(f[55]),l[47]=j(f[60]),l[48]=j(f[21]),l[49]=j(f[34]),l[50]=j(f[37]),l[51]=j(f[47]),l[52]=j(f[50]),l[53]=j(f[56]),l[54]=j(f[59]),l[55]=j(f[61]),l[56]=j(f[35]),l[57]=j(f[36]),l[58]=j(f[48]),l[59]=j(f[49]),l[60]=j(f[57]),l[61]=j(f[58]),l[62]=j(f[62]),l[63]=j(f[63])}function wt(f){let l=.5*Math.cos(.7853975),x=.5*Math.cos(3.14159/16),b=.5*Math.cos(3.14159/8),E=.5*Math.cos(3*3.14159/16),I=.5*Math.cos(5*3.14159/16),A=.5*Math.cos(3*3.14159/8),H=.5*Math.cos(7*3.14159/16),F=new Array(4),G=new Array(4),X=new Array(4),oe=new Array(4);for(let Q=0;Q<8;++Q){let ee=Q*8;F[0]=b*f[ee+2],F[1]=A*f[ee+2],F[2]=b*f[ee+6],F[3]=A*f[ee+6],G[0]=x*f[ee+1]+E*f[ee+3]+I*f[ee+5]+H*f[ee+7],G[1]=E*f[ee+1]-H*f[ee+3]-x*f[ee+5]-I*f[ee+7],G[2]=I*f[ee+1]-x*f[ee+3]+H*f[ee+5]+E*f[ee+7],G[3]=H*f[ee+1]-I*f[ee+3]+E*f[ee+5]-x*f[ee+7],X[0]=l*(f[ee+0]+f[ee+4]),X[3]=l*(f[ee+0]-f[ee+4]),X[1]=F[0]+F[3],X[2]=F[1]-F[2],oe[0]=X[0]+X[1],oe[1]=X[3]+X[2],oe[2]=X[3]-X[2],oe[3]=X[0]-X[1],f[ee+0]=oe[0]+G[0],f[ee+1]=oe[1]+G[1],f[ee+2]=oe[2]+G[2],f[ee+3]=oe[3]+G[3],f[ee+4]=oe[3]-G[3],f[ee+5]=oe[2]-G[2],f[ee+6]=oe[1]-G[1],f[ee+7]=oe[0]-G[0]}for(let Q=0;Q<8;++Q)F[0]=b*f[16+Q],F[1]=A*f[16+Q],F[2]=b*f[48+Q],F[3]=A*f[48+Q],G[0]=x*f[8+Q]+E*f[24+Q]+I*f[40+Q]+H*f[56+Q],G[1]=E*f[8+Q]-H*f[24+Q]-x*f[40+Q]-I*f[56+Q],G[2]=I*f[8+Q]-x*f[24+Q]+H*f[40+Q]+E*f[56+Q],G[3]=H*f[8+Q]-I*f[24+Q]+E*f[40+Q]-x*f[56+Q],X[0]=l*(f[Q]+f[32+Q]),X[3]=l*(f[Q]-f[32+Q]),X[1]=F[0]+F[3],X[2]=F[1]-F[2],oe[0]=X[0]+X[1],oe[1]=X[3]+X[2],oe[2]=X[3]-X[2],oe[3]=X[0]-X[1],f[0+Q]=oe[0]+G[0],f[8+Q]=oe[1]+G[1],f[16+Q]=oe[2]+G[2],f[24+Q]=oe[3]+G[3],f[32+Q]=oe[3]-G[3],f[40+Q]=oe[2]-G[2],f[48+Q]=oe[1]-G[1],f[56+Q]=oe[0]-G[0]}function Lt(f){for(let l=0;l<64;++l){let x=f[0][l],b=f[1][l],E=f[2][l];f[0][l]=x+1.5747*E,f[1][l]=x-.1873*b-.4682*E,f[2][l]=x+1.8556*b}}function B(f,l,x){for(let b=0;b<64;++b)l[x+b]=Un.toHalfFloat(kt(f[b]))}function kt(f){return f<=1?Math.sign(f)*Math.pow(Math.abs(f),2.2):Math.sign(f)*Math.pow(L,Math.abs(f)-1)}function ft(f){return new DataView(f.array.buffer,f.offset.value,f.size)}function P(f){let l=f.viewer.buffer.slice(f.offset.value,f.offset.value+f.size),x=new Uint8Array(gt(l)),b=new Uint8Array(x.length);return Qe(x),ot(x,b),new DataView(b.buffer)}function y(f){let l=f.array.slice(f.offset.value,f.offset.value+f.size),x=lr(l),b=new Uint8Array(x.length);return Qe(x),ot(x,b),new DataView(b.buffer)}function W(f){let l=f.viewer,x={value:f.offset.value},b=new Uint16Array(f.columns*f.lines*(f.inputChannels.length*f.type)),E=new Uint8Array(8192),I=0,A=new Array(f.inputChannels.length);for(let _e=0,me=f.inputChannels.length;_e<me;_e++)A[_e]={},A[_e].start=I,A[_e].end=A[_e].start,A[_e].nx=f.columns,A[_e].ny=f.lines,A[_e].size=f.type,I+=A[_e].nx*A[_e].ny*A[_e].size;let H=le(l,x),F=le(l,x);if(F>=8192)throw new Error("THREE.EXRLoader: Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(H<=F)for(let _e=0;_e<F-H+1;_e++)E[_e+H]=Fe(l,x);let G=new Uint16Array(65536),X=k(E,G),oe=ve(l,x);je(f.array,l,x,oe,b,I);for(let _e=0;_e<f.inputChannels.length;++_e){let me=A[_e];for(let ge=0;ge<A[_e].size;++ge)$e(b,me.start+ge,me.nx,me.size,me.ny,me.nx*me.size,X)}Ct(G,b,I);let Q=0,ee=new Uint8Array(b.buffer.byteLength);for(let _e=0;_e<f.lines;_e++)for(let me=0;me<f.inputChannels.length;me++){let ge=A[me],Se=ge.nx*ge.size,Xe=new Uint8Array(b.buffer,ge.end*2,Se*2);ee.set(Xe,Q),Q+=Se*2,ge.end+=Se}return new DataView(ee.buffer)}function K(f){let l=f.array.slice(f.offset.value,f.offset.value+f.size),x=lr(l),b=f.inputChannels.length*f.lines*f.columns*f.totalBytes,E=new ArrayBuffer(b),I=new DataView(E),A=0,H=0,F=new Array(4);for(let G=0;G<f.lines;G++)for(let X=0;X<f.inputChannels.length;X++){let oe=0;switch(f.inputChannels[X].pixelType){case 1:F[0]=A,F[1]=F[0]+f.columns,A=F[1]+f.columns;for(let ee=0;ee<f.columns;++ee){let _e=x[F[0]++]<<8|x[F[1]++];oe+=_e,I.setUint16(H,oe,!0),H+=2}break;case 2:F[0]=A,F[1]=F[0]+f.columns,F[2]=F[1]+f.columns,A=F[2]+f.columns;for(let ee=0;ee<f.columns;++ee){let _e=x[F[0]++]<<24|x[F[1]++]<<16|x[F[2]++]<<8;oe+=_e,I.setUint32(H,oe,!0),H+=4}break}}return I}function re(f){let l=f.array,x=f.offset.value,b=f.columns,E=f.lines,I=f.inputChannels,A=f.totalBytes,H=Vt.compression==="B44A_COMPRESSION",F=new Uint8Array(E*b*A),G=new Uint16Array(16),X=0;for(let oe=0;oe<I.length;oe++){let Q=I[oe],ee=Q.pixelType*2,_e=Math.ceil(b/Q.xSampling),me=Math.ceil(E/Q.ySampling),ge=Q.xSampling===1&&Q.ySampling===1;if(Q.pixelType!==1){for(let fe=0;fe<me;fe++)if(ge){let Ze=fe*b*A+X*b;for(let xe=0;xe<_e*ee;xe++)F[Ze+xe]=l[x++]}else x+=_e*ee;X+=ee;continue}let Se=Math.ceil(_e/4),Xe=Math.ceil(me/4);for(let fe=0;fe<Xe;fe++)for(let Ze=0;Ze<Se;Ze++){if(H&&l[x+2]>=52){let xe=l[x]<<8|l[x+1],be=xe&32768?xe&32767:~xe&65535;G.fill(be),x+=3}else{let xe=l[x]<<8|l[x+1],be=l[x+2]>>2,Ne=32<<be,at=xe+((l[x+2]<<4|l[x+3]>>4)&63)*(1<<be)-Ne&65535,et=at+((l[x+3]<<2|l[x+4]>>6)&63)*(1<<be)-Ne&65535,Pe=et+(l[x+4]&63)*(1<<be)-Ne&65535,ke=xe+(l[x+5]>>2&63)*(1<<be)-Ne&65535,xt=at+((l[x+5]<<4|l[x+6]>>4)&63)*(1<<be)-Ne&65535,tt=et+((l[x+6]<<2|l[x+7]>>6)&63)*(1<<be)-Ne&65535,ut=Pe+(l[x+7]&63)*(1<<be)-Ne&65535,Yt=ke+(l[x+8]>>2&63)*(1<<be)-Ne&65535,jn=xt+((l[x+8]<<4|l[x+9]>>4)&63)*(1<<be)-Ne&65535,pr=tt+((l[x+9]<<2|l[x+10]>>6)&63)*(1<<be)-Ne&65535,Vn=ut+(l[x+10]&63)*(1<<be)-Ne&65535,zi=Yt+(l[x+11]>>2&63)*(1<<be)-Ne&65535,Do=jn+((l[x+11]<<4|l[x+12]>>4)&63)*(1<<be)-Ne&65535,No=pr+((l[x+12]<<2|l[x+13]>>6)&63)*(1<<be)-Ne&65535,Uo=Vn+(l[x+13]&63)*(1<<be)-Ne&65535,mr=[xe,ke,Yt,zi,at,xt,jn,Do,et,tt,pr,No,Pe,ut,Vn,Uo];for(let ms=0;ms<16;ms++)G[ms]=mr[ms]&32768?mr[ms]&32767:~mr[ms]&65535;x+=14}if(Q.pLinear){if(U===null){U=new Uint16Array(65536);for(let xe=0;xe<65536;xe++)if((xe&31744)===31744||xe>32768)U[xe]=0;else{let be=j(xe);U[xe]=be<=0?0:Un.toHalfFloat(8*Math.log(be))}}for(let xe=0;xe<16;xe++)G[xe]=U[G[xe]]}for(let xe=0;xe<4;xe++){let be=fe*4+xe;if(!(be>=me))for(let Ne=0;Ne<4;Ne++){let at=Ze*4+Ne;if(at>=_e)continue;let et=G[xe*4+Ne];for(let Pe=0;Pe<Q.ySampling;Pe++){let ke=be*Q.ySampling+Pe;if(!(ke>=E))for(let xt=0;xt<Q.xSampling;xt++){let tt=at*Q.xSampling+xt;if(tt>=b)continue;let ut=ke*b*A+X*b+tt*2;F[ut]=et&255,F[ut+1]=et>>8&255}}}}}X+=2}return new DataView(F.buffer)}function ye(f){let l=f.viewer,x={value:f.offset.value},b=new Uint8Array(f.columns*f.lines*(f.inputChannels.length*f.type*2)),E={version:Ue(l,x),unknownUncompressedSize:Ue(l,x),unknownCompressedSize:Ue(l,x),acCompressedSize:Ue(l,x),dcCompressedSize:Ue(l,x),rleCompressedSize:Ue(l,x),rleUncompressedSize:Ue(l,x),rleRawSize:Ue(l,x),totalAcUncompressedCount:Ue(l,x),totalDcUncompressedCount:Ue(l,x),acCompression:Ue(l,x)};if(E.version<2)throw new Error("THREE.EXRLoader: "+Vt.compression+" version "+E.version+" is unsupported");let I=new Array,A=le(l,x)-2;for(;A>0;){let me=Me(l.buffer,x),ge=Fe(l,x),Se=ge>>2&3,Xe=(ge>>4)-1,fe=new Int8Array([Xe])[0],Ze=Fe(l,x);I.push({name:me,index:fe,type:Ze,compression:Se}),A-=me.length+3}let H=Vt.channels,F=new Array(f.inputChannels.length);for(let me=0;me<f.inputChannels.length;++me){let ge=F[me]={},Se=H[me];ge.name=Se.name,ge.compression=0,ge.decoded=!1,ge.type=Se.pixelType,ge.pLinear=Se.pLinear,ge.width=f.columns,ge.height=f.lines}let G={idx:new Array(3)};for(let me=0;me<f.inputChannels.length;++me){let ge=F[me],Se=ge.name.lastIndexOf("."),Xe=Se>=0?ge.name.substring(Se+1):ge.name;for(let fe=0;fe<I.length;++fe){let Ze=I[fe];Xe===Ze.name&&ge.type===Ze.type&&(ge.compression=Ze.compression,Ze.index>=0&&(G.idx[Ze.index]=me),ge.offset=me)}}let X,oe,Q;if(E.acCompressedSize>0)switch(E.acCompression){case 0:X=new Uint16Array(E.totalAcUncompressedCount),je(f.array,l,x,E.acCompressedSize,X,E.totalAcUncompressedCount);break;case 1:let me=f.array.slice(x.value,x.value+E.totalAcUncompressedCount),ge=lr(me);X=new Uint16Array(ge.buffer),x.value+=E.totalAcUncompressedCount;break}if(E.dcCompressedSize>0){let me={array:f.array,offset:x,size:E.dcCompressedSize};oe=new Uint16Array(y(me).buffer),x.value+=E.dcCompressedSize}if(E.rleRawSize>0){let me=f.array.slice(x.value,x.value+E.rleCompressedSize),ge=lr(me);Q=gt(ge.buffer),x.value+=E.rleCompressedSize}let ee=0,_e=new Array(F.length);for(let me=0;me<_e.length;++me)_e[me]=new Array;for(let me=0;me<f.lines;++me)for(let ge=0;ge<F.length;++ge)_e[ge].push(ee),ee+=F[ge].width*f.type*2;G.idx[0]!==void 0&&F[G.idx[0]]&&rt(G,_e,F,X,oe,b);for(let me=0;me<F.length;++me){let ge=F[me];if(!ge.decoded)switch(ge.compression){case 2:let Se=0,Xe=0;for(let fe=0;fe<f.lines;++fe){let Ze=_e[me][Se];for(let xe=0;xe<ge.width;++xe){for(let be=0;be<2*ge.type;++be)b[Ze++]=Q[Xe+be*ge.width*ge.height];Xe++}Se++}break;case 1:bt(me,_e,F,X,oe,b);break;default:throw new Error("THREE.EXRLoader: unsupported channel compression")}}return new DataView(b.buffer)}function Me(f,l){let x=new Uint8Array(f),b=0;for(;x[l.value+b]!=0;)b+=1;let E=new TextDecoder().decode(x.slice(l.value,l.value+b));return l.value=l.value+b+1,E}function ae(f,l,x){let b=new TextDecoder().decode(new Uint8Array(f).slice(l.value,l.value+x));return l.value=l.value+x,b}function ue(f,l){let x=Le(f,l),b=ve(f,l);return[x,b]}function Ee(f,l){let x=ve(f,l),b=ve(f,l);return[x,b]}function Le(f,l){let x=f.getInt32(l.value,!0);return l.value=l.value+4,x}function ve(f,l){let x=f.getUint32(l.value,!0);return l.value=l.value+4,x}function we(f,l){let x=f[l.value];return l.value=l.value+1,x}function Fe(f,l){let x=f.getUint8(l.value);return l.value=l.value+1,x}let Ue=function(f,l){let x=Number(f.getBigInt64(l.value,!0));return l.value+=8,x};function ze(f,l){let x=f.getFloat32(l.value,!0);return l.value+=4,x}function O(f,l){return Un.toHalfFloat(ze(f,l))}function j(f){let l=(f&31744)>>10,x=f&1023;return(f>>15?-1:1)*(l?l===31?x?NaN:1/0:Math.pow(2,l-15)*(1+x/1024):6103515625e-14*(x/1024))}function le(f,l){let x=f.getUint16(l.value,!0);return l.value+=2,x}function Te(f,l){return j(le(f,l))}function Ie(f,l,x,b){let E=x.value,I=[];for(;x.value<E+b-1;){let A=Me(l,x),H=Le(f,x),F=Fe(f,x);x.value+=3;let G=Le(f,x),X=Le(f,x);I.push({name:A,pixelType:H,pLinear:F,xSampling:G,ySampling:X})}return x.value+=1,I}function pe(f,l){let x=ze(f,l),b=ze(f,l),E=ze(f,l),I=ze(f,l),A=ze(f,l),H=ze(f,l),F=ze(f,l),G=ze(f,l);return{redX:x,redY:b,greenX:E,greenY:I,blueX:A,blueY:H,whiteX:F,whiteY:G}}function He(f,l){let x=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],b=Fe(f,l);return x[b]}function Be(f,l){let x=Le(f,l),b=Le(f,l),E=Le(f,l),I=Le(f,l);return{xMin:x,yMin:b,xMax:E,yMax:I}}function St(f,l){let x=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],b=Fe(f,l);return x[b]}function dt(f,l){let x=["ENVMAP_LATLONG","ENVMAP_CUBE"],b=Fe(f,l);return x[b]}function gn(f,l){let x=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],b=["ROUND_DOWN","ROUND_UP"],E=ve(f,l),I=ve(f,l),A=Fe(f,l);return{xSize:E,ySize:I,levelMode:x[A&15],roundingMode:b[A>>4]}}function En(f,l){let x=ze(f,l),b=ze(f,l);return[x,b]}function Zl(f,l){let x=ze(f,l),b=ze(f,l),E=ze(f,l);return[x,b,E]}function $l(f,l,x,b,E){if(b==="string"||b==="stringvector"||b==="iccProfile")return ae(l,x,E);if(b==="chlist")return Ie(f,l,x,E);if(b==="chromaticities")return pe(f,x);if(b==="compression")return He(f,x);if(b==="box2i")return Be(f,x);if(b==="envmap")return dt(f,x);if(b==="tiledesc")return gn(f,x);if(b==="lineOrder")return St(f,x);if(b==="float")return ze(f,x);if(b==="v2f")return En(f,x);if(b==="v3f")return Zl(f,x);if(b==="int")return Le(f,x);if(b==="rational")return ue(f,x);if(b==="timecode")return Ee(f,x);if(b==="preview"||b==="deepImageState"||b==="idmanifest")return x.value+=E,"skipped";x.value+=E}function Eo(f,l){let x=Math.log2(f);return l=="ROUND_DOWN"?Math.floor(x):Math.ceil(x)}function fr(f,l,x){let b=0;switch(f.levelMode){case"ONE_LEVEL":b=1;break;case"MIPMAP_LEVELS":b=Eo(Math.max(l,x),f.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return b}function To(f,l,x,b){let E=new Array(f);for(let I=0;I<f;I++){let A=1<<I,H=l/A|0;b=="ROUND_UP"&&H*A<l&&(H+=1);let F=Math.max(H,1);E[I]=(F+x-1)/x|0}return E}function Ao(){let f=this,l=f.offset,x={value:0};for(let b=0;b<f.tileCount;b++){let E=Le(f.viewer,l),I=Le(f.viewer,l);l.value+=8,f.size=ve(f.viewer,l);let A=E*f.blockWidth,H=I*f.blockHeight;f.columns=A+f.blockWidth>f.width?f.width-A:f.blockWidth,f.lines=H+f.blockHeight>f.height?f.height-H:f.blockHeight;let F=f.columns*f.totalBytes,X=f.size<f.lines*F?f.uncompress(f):ft(f);l.value+=f.size;for(let oe=0;oe<f.lines;oe++){let Q=oe*f.columns*f.totalBytes;for(let ee=0;ee<f.inputChannels.length;ee++){let _e=Vt.channels[ee].name,me=f.channelByteOffsets[_e]*f.columns,ge=f.decodeChannels[_e];if(ge===void 0)continue;x.value=Q+me;let Se=(f.height-(1+H+oe))*f.outLineWidth;for(let Xe=0;Xe<f.columns;Xe++){let fe=Se+(Xe+A)*f.outputChannels+ge;f.byteArray[fe]=f.getter(X,x)}}}}}function Co(){let f=this,l=f.offset,x={value:0};for(let b=0;b<f.height/f.blockHeight;b++){let E=Le(f.viewer,l)-Vt.dataWindow.yMin;f.size=ve(f.viewer,l),f.lines=E+f.blockHeight>f.height?f.height-E:f.blockHeight;let I=f.columns*f.totalBytes,H=f.size<f.lines*I?f.uncompress(f):ft(f);l.value+=f.size;for(let F=0;F<f.lines;F++){let G=E+F,X=F*I,oe=(f.height-1-G)*f.outLineWidth;for(let Q=0;Q<f.inputChannels.length;Q++){let ee=Vt.channels[Q].name,_e=f.channelByteOffsets[ee]*f.columns,me=f.decodeChannels[ee];if(me!==void 0){x.value=X+_e;for(let ge=0;ge<f.columns;ge++){let Se=oe+ge*f.outputChannels+me;f.byteArray[Se]=f.getter(H,x)}}}}}}function Jn(){let f=this,l=f.chunkOffsets,x={value:0};for(let b=0;b<l.length;b++){let E={value:l[b]};E.value+=4;let I=Le(f.viewer,E)-Vt.dataWindow.yMin;f.size=ve(f.viewer,E),f.lines=I+f.blockHeight>f.height?f.height-I:f.blockHeight;let A=f.columns*f.totalBytes,H=f.size<f.lines*A,F=f.offset;f.offset=E;let G=H?f.uncompress(f):ft(f);f.offset=F;for(let X=0;X<f.lines;X++){let oe=I+X,Q=X*A,ee=(f.height-1-oe)*f.outLineWidth;for(let _e=0;_e<f.inputChannels.length;_e++){let me=Vt.channels[_e].name,ge=f.channelByteOffsets[me]*f.columns,Se=f.decodeChannels[me];if(Se!==void 0){x.value=Q+ge;for(let Xe=0;Xe<f.columns;Xe++){let fe=ee+Xe*f.outputChannels+Se;f.byteArray[fe]=f.getter(G,x)}}}}}}function fs(f,l,x,b){if(x===0)return null;let E=f.slice(l,l+x);switch(b){case"NO_COMPRESSION":return new DataView(E.buffer,E.byteOffset,E.byteLength);case"RLE_COMPRESSION":{let I=new Uint8Array(gt(E.buffer.slice(E.byteOffset,E.byteOffset+E.byteLength))),A=new Uint8Array(I.length);return Qe(I),ot(I,A),new DataView(A.buffer)}case"ZIPS_COMPRESSION":{let I=lr(E),A=new Uint8Array(I.length);return Qe(I),ot(I,A),new DataView(A.buffer)}default:throw new Error("THREE.EXRLoader: "+b+" is unsupported for deep data")}}function Ro(){let f=this,l=f.chunkOffsets,x=f.width,b=f.height,E=f.deepChannels,I=Vt.compression,A=f.multiPart,H=f.decodeChannels,F=f.outputChannels,G=f.byteArray instanceof Uint16Array,X=-1;for(let oe=0;oe<E.length;oe++)if(E[oe].name==="A"){X=oe;break}for(let oe=0;oe<l.length;oe++){let Q={value:l[oe]};A&&(Q.value+=4);let ee=Le(f.viewer,Q)-Vt.dataWindow.yMin,_e=Ue(f.viewer,Q),me=Ue(f.viewer,Q);Ue(f.viewer,Q);let ge=fs(f.array,Q.value,_e,I);if(Q.value+=_e,ge===null)continue;let Se=new Uint32Array(x);for(let Ne=0;Ne<x;Ne++)Se[Ne]=ge.getUint32(Ne*4,!0);let Xe=Se[x-1];if(Xe===0){Q.value+=me;continue}let fe=fs(f.array,Q.value,me,I),Ze=[],xe=0;for(let Ne=0;Ne<E.length;Ne++)Ze.push(xe),xe+=Xe*E[Ne].bytesPerSample;let be=(b-1-ee)*f.outLineWidth;for(let Ne=0;Ne<x;Ne++){let at=Ne===0?0:Se[Ne-1],Pe=Se[Ne]-at;if(Pe===0)continue;let ke=new Float32Array(F),xt=0;for(let ut=0;ut<Pe;ut++){let Yt=at+ut,jn=1-xt;if(jn<=0)break;let pr=1;if(X>=0){let Vn=E[X].bytesPerSample,zi=Ze[X]+Yt*Vn;pr=Vn===2?j(fe.getUint16(zi,!0)):fe.getFloat32(zi,!0)}for(let Vn=0;Vn<E.length;Vn++){let zi=E[Vn],Do=H[zi.name];if(Do===void 0)continue;let No=zi.bytesPerSample,Uo=Ze[Vn]+Yt*No,mr=No===2?j(fe.getUint16(Uo,!0)):fe.getFloat32(Uo,!0);ke[Do]+=mr*jn}xt+=pr*jn}H.A!==void 0&&(ke[H.A]=xt);let tt=be+Ne*F;for(let ut=0;ut<F;ut++)f.byteArray[tt+ut]=G?Un.toHalfFloat(ke[ut]):ke[ut]}}}function dr(f,l,x){let b={},E=!1;for(;;){let I=Me(l,x);if(I==="")break;E=!0;let A=Me(l,x),H=ve(f,x),F=$l(f,l,x,A,H);F===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${A}'.`):b[I]=F}return E?b:null}function ds(f,l,x){if(f.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");let b=f.getUint8(4),E=f.getUint8(5),I={singleTile:!!(E&2),longName:!!(E&4),deepFormat:!!(E&8),multiPart:!!(E&16)};x.value=8;let A=[];if(I.multiPart){for(;;){let H=dr(f,l,x);if(H===null)break;H.version=b,H.spec=I,A.push(H)}if(A.length===0)throw new Error("THREE.EXRLoader: No valid part headers found.")}else{let H=dr(f,l,x);H.version=b,H.spec=I,A.push(H)}return A}function Io(f,l,x,b,E,I){let A={size:0,viewer:l,array:x,offset:b,width:f.dataWindow.xMax-f.dataWindow.xMin+1,height:f.dataWindow.yMax-f.dataWindow.yMin+1,inputChannels:f.channels,channelByteOffsets:{},shouldExpand:!1,yCbCr:!1,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:vn};switch(f.compression){case"NO_COMPRESSION":A.blockHeight=1,A.uncompress=ft;break;case"RLE_COMPRESSION":A.blockHeight=1,A.uncompress=P;break;case"ZIPS_COMPRESSION":A.blockHeight=1,A.uncompress=y;break;case"ZIP_COMPRESSION":A.blockHeight=16,A.uncompress=y;break;case"PIZ_COMPRESSION":A.blockHeight=32,A.uncompress=W;break;case"PXR24_COMPRESSION":A.blockHeight=16,A.uncompress=K;break;case"B44_COMPRESSION":case"B44A_COMPRESSION":A.blockHeight=32,A.uncompress=re;break;case"DWAA_COMPRESSION":A.blockHeight=32,A.uncompress=ye;break;case"DWAB_COMPRESSION":A.blockHeight=256,A.uncompress=ye;break;default:throw new Error("THREE.EXRLoader: "+f.compression+" is unsupported")}let H={};for(let Q of f.channels)switch(Q.name){case"BY":case"RY":case"Y":case"R":case"G":case"B":case"A":H[Q.name]=!0,A.type=Q.pixelType}let F=!1,G=!1;if(H.Y&&H.RY&&H.BY)A.outputChannels=4,A.yCbCr=!0;else if(H.R&&H.G&&H.B)A.outputChannels=4;else if(H.Y)A.outputChannels=1;else throw new Error("THREE.EXRLoader: file contains unsupported data channels.");switch(A.outputChannels){case 4:I==Ut?(F=!H.A,A.format=Ut,A.colorSpace=vn,A.outputChannels=4,A.decodeChannels={R:0,G:1,B:2,A:3}):I==pn?(A.format=pn,A.colorSpace=vn,A.outputChannels=2,A.decodeChannels={R:0,G:1}):I==di?(A.format=di,A.colorSpace=vn,A.outputChannels=1,A.decodeChannels={R:0}):G=!0;break;case 1:I==Ut?(F=!0,A.format=Ut,A.colorSpace=vn,A.outputChannels=4,A.shouldExpand=!0,A.decodeChannels={Y:0}):I==pn?(A.format=pn,A.colorSpace=vn,A.outputChannels=2,A.shouldExpand=!0,A.decodeChannels={Y:0}):I==di?(A.format=di,A.colorSpace=vn,A.outputChannels=1,A.decodeChannels={Y:0}):G=!0;break;default:G=!0}if(G)throw new Error("THREE.EXRLoader: invalid output format for specified file.");if(A.yCbCr&&(A.format=Ut,A.outputChannels=4,A.decodeChannels={Y:0,RY:1,BY:2},F=!0),A.type==1)switch(E){case rn:A.getter=Te;break;case Kt:A.getter=le;break}else if(A.type==2)switch(E){case rn:A.getter=ze;break;case Kt:A.getter=O}else throw new Error("THREE.EXRLoader: unsupported pixelType "+A.type+" for "+f.compression+".");A.columns=A.width;let X=A.width*A.height*A.outputChannels;switch(E){case rn:A.byteArray=new Float32Array(X),F&&A.byteArray.fill(1,0,X);break;case Kt:A.byteArray=new Uint16Array(X),F&&A.byteArray.fill(15360,0,X);break;default:console.error("THREE.EXRLoader: unsupported type: ",E);break}let oe=0;for(let Q of f.channels)A.decodeChannels[Q.name]!==void 0&&(A.channelByteOffsets[Q.name]=oe),oe+=Q.pixelType*2;if(A.totalBytes=oe,A.outLineWidth=A.width*A.outputChannels,f.spec.deepFormat){A.deepChannels=[];let Q=0;for(let ee of f.channels){let _e=ee.pixelType===0?4:ee.pixelType*2;A.deepChannels.push({name:ee.name,pixelType:ee.pixelType,bytesPerSample:_e}),Q+=_e}A.deepBytesPerSample=Q,A.chunkOffsets=f._chunkOffsets,A.multiPart=f.spec.multiPart,A.decode=Ro.bind(A)}else if(f.spec.singleTile){A.blockHeight=f.tiles.ySize,A.blockWidth=f.tiles.xSize;let Q=fr(f.tiles,A.width,A.height),ee=To(Q,A.width,f.tiles.xSize,f.tiles.roundingMode),_e=To(Q,A.height,f.tiles.ySize,f.tiles.roundingMode);A.tileCount=ee[0]*_e[0];for(let me=0;me<Q;me++)for(let ge=0;ge<_e[me];ge++)for(let Se=0;Se<ee[me];Se++)Ue(l,b);A.decode=Ao.bind(A)}else if(f.spec.multiPart)A.blockWidth=A.width,A.chunkOffsets=f._chunkOffsets,A.decode=Jn.bind(A);else{A.blockWidth=A.width;let Q=Math.ceil(A.height/A.blockHeight);for(let ee=0;ee<Q;ee++)Ue(l,b);A.decode=Co.bind(A)}return A}let Kn={value:0},Bi=new DataView(e),Po=new Uint8Array(e),ps=ds(Bi,e,Kn),Lo=Math.max(0,Math.min(this.part,ps.length-1)),Vt=ps[Lo];if(Vt.spec.multiPart||Vt.spec.deepFormat)for(let f=0;f<ps.length;f++){let l=ps[f].chunkCount;if(f===Lo){Vt._chunkOffsets=[];for(let x=0;x<l;x++)Vt._chunkOffsets.push(Ue(Bi,Kn))}else for(let x=0;x<l;x++)Ue(Bi,Kn)}let hn=Io(Vt,Bi,Po,Kn,this.type,this.outputFormat);if(hn.decode(),hn.shouldExpand){let f=hn.byteArray;if(this.outputFormat==Ut)for(let l=0;l<f.length;l+=4)f[l+2]=f[l+1]=f[l];else if(this.outputFormat==pn)for(let l=0;l<f.length;l+=2)f[l+1]=f[l]}if(hn.yCbCr){let f=hn.byteArray,l=hn.width*hn.height;if(this.type===Kt)for(let x=0;x<l;x++){let b=x*4,E=j(f[b]),I=j(f[b+1]),A=j(f[b+2]),H=(1+I)*E,F=(1+A)*E,G=(E-H*.2126-F*.0722)/.7152;f[b]=Un.toHalfFloat(Math.max(0,H)),f[b+1]=Un.toHalfFloat(Math.max(0,G)),f[b+2]=Un.toHalfFloat(Math.max(0,F))}else for(let x=0;x<l;x++){let b=x*4,E=f[b],I=f[b+1],A=f[b+2],H=(1+I)*E,F=(1+A)*E;f[b]=Math.max(0,H),f[b+1]=Math.max(0,(E-H*.2126-F*.0722)/.7152),f[b+2]=Math.max(0,F)}}return{header:Vt,width:hn.width,height:hn.height,data:hn.byteArray,format:hn.format,colorSpace:hn.colorSpace,type:this.type,minFilter:At,magFilter:At,generateMipmaps:!1,flipY:!1}}setDataType(e){return this.type=e,this}setOutputFormat(e){return this.outputFormat=e,this}setPart(e){return this.part=e,this}};var wh=new WeakMap,_x=new Qr,kl=class extends fn{constructor(e){super(e),this.libraryPath="",this.libraryPending=null,this.libraryBinary=null,this.libraryConfig={},this.url="",this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.workerConfig={},this.subdivisionLevel=3,this.materials=[],this.warnings=[]}setLibraryPath(e){return this.libraryPath=e,this}setWorkerLimit(e){return this.workerLimit=e,this}setSubdivisionLevel(e){return this.subdivisionLevel=e,this}load(e,t,n,s){let r=new ui(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),this.url=e,r.load(e,o=>{if(wh.has(o))return wh.get(o).promise.then(t).catch(s);this.decodeObjects(o,e).then(a=>{a.userData.warnings=this.warnings,t(a)}).catch(a=>s(a))},n,s)}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}decodeObjects(e,t){let n,s,r=e.byteLength,o=this._getWorker(r).then(a=>(n=a,s=this.workerNextTaskID++,new Promise((c,h)=>{n._callbacks[s]={resolve:c,reject:h},n.postMessage({type:"decode",id:s,buffer:e,subdivisionLevel:this.subdivisionLevel},[e])}))).then(a=>this._createGeometry(a.data)).catch(a=>{throw a});return o.catch(()=>!0).then(()=>{n&&s&&this._releaseTask(n,s)}),wh.set(e,{url:t,promise:o}),o}parse(e,t,n){this.parseAsync(e).then(t).catch(n)}parseAsync(e){return this.decodeObjects(e,"").then(t=>(t.userData.warnings=this.warnings,t))}_compareMaterials(e){let t={};t.name=e.name,t.color={},t.color.r=e.color.r,t.color.g=e.color.g,t.color.b=e.color.b,t.type=e.type,t.vertexColors=e.vertexColors;let n=JSON.stringify(t);for(let s=0;s<this.materials.length;s++){let r=this.materials[s],o={};if(o.name=r.name,o.color={},o.color.r=r.color.r,o.color.g=r.color.g,o.color.b=r.color.b,o.type=r.type,o.vertexColors=r.vertexColors,JSON.stringify(o)===n)return r}return this.materials.push(e),e}_createMaterial(e,t){if(e===void 0)return new An({color:new Ve(1,1,1),metalness:.8,name:fn.DEFAULT_MATERIAL_NAME,side:sn});let n=new Wr({color:new Ve(e.diffuseColor.r/255,e.diffuseColor.g/255,e.diffuseColor.b/255),emissive:new Ve(e.emissionColor.r/255,e.emissionColor.g/255,e.emissionColor.b/255),flatShading:e.disableLighting,ior:e.indexOfRefraction,name:e.name,reflectivity:e.reflectivity,opacity:1-e.transparency,side:sn,specularColor:new Ve(e.specularColor.r/255,e.specularColor.g/255,e.specularColor.b/255),transparent:e.transparency>0});if(n.userData.id=e.id,e.pbrSupported){let r=e.pbr;n.anisotropy=r.anisotropic,n.anisotropyRotation=r.anisotropicRotation,n.color=new Ve(r.baseColor.r,r.baseColor.g,r.baseColor.b),n.clearcoat=r.clearcoat,n.clearcoatRoughness=r.clearcoatRoughness,n.metalness=r.metallic,n.roughness=r.roughness,n.sheen=r.sheen,n.specularIntensity=r.specular,n.thickness=r.subsurface,n.opacity=r.opacity,n.transparent=r.opacity<1}let s=new Zr;for(let r=0;r<e.textures.length;r++){let o=e.textures[r];if(o.image!==null){let a=s.load(o.image);switch(o.type){case"Bump":n.bumpMap=a;break;case"Diffuse":n.map=a;break;case"Emap":n.envMap=a;break;case"Opacity":n.transmissionMap=a;break;case"Transparency":n.alphaMap=a,n.transparent=!0;break;case"PBR_Alpha":n.alphaMap=a,n.transparent=!0;break;case"PBR_AmbientOcclusion":n.aoMap=a;break;case"PBR_Anisotropic":n.anisotropyMap=a;break;case"PBR_BaseColor":n.map=a;break;case"PBR_Clearcoat":n.clearcoatMap=a;break;case"PBR_ClearcoatBump":n.clearcoatNormalMap=a;break;case"PBR_ClearcoatRoughness":n.clearcoatRoughnessMap=a;break;case"PBR_Displacement":n.displacementMap=a;break;case"PBR_Emission":n.emissiveMap=a;break;case"PBR_Metallic":n.metalnessMap=a;break;case"PBR_Roughness":n.roughnessMap=a;break;case"PBR_Sheen":n.sheenColorMap=a;break;case"PBR_Specular":n.specularColorMap=a;break;case"PBR_Subsurface":n.thicknessMap=a;break;default:this.warnings.push({message:`THREE.3DMLoader: No conversion exists for 3dm ${o.type}.`,type:"no conversion"});break}a.wrapS=o.wrapU===0?Xi:Zt,a.wrapT=o.wrapV===0?Xi:Zt,o.repeat&&a.repeat.set(o.repeat[0],o.repeat[1])}}return t&&new zl().load(t.image,function(r){r.mapping=js,n.envMap=r}),n}_createGeometry(e){let t=new Mt,n=[],s=[],r=[];t.userData.layers=e.layers,t.userData.views=e.views,t.userData.namedViews=e.namedViews,t.userData.groups=e.groups,t.userData.strings=e.strings,t.userData.settings=e.settings,t.userData.settings.renderSettings=e.renderSettings,t.userData.objectType="File3dm",t.name=this.url;let o=e.objects,a=e.materials;for(let c=0;c<o.length;c++){let h=o[c],d=h.attributes;switch(h.objectType){case"InstanceDefinition":s.push(h);break;case"InstanceReference":r.push(h);break;default:let m=null;switch(d.materialSource.name){case"ObjectMaterialSource_MaterialFromLayer":d.layerIndex>=0&&(m=e.layers[d.layerIndex].renderMaterialIndex);break;case"ObjectMaterialSource_MaterialFromObject":d.materialIndex>=0&&(m=d.materialIndex);break}let u=null;if(m>=0){let S=a[m];u=this._createMaterial(S,e.renderEnvironment)}let g=this._createObject(h,u);if(g===void 0)continue;let v=e.layers[d.layerIndex];g.visible=v?e.layers[d.layerIndex].visible:!0,d.isInstanceDefinitionObject?n.push(g):t.add(g);break}}for(let c=0;c<s.length;c++){let h=s[c];o=[];for(let d=0;d<h.attributes.objectIds.length;d++){let m=h.attributes.objectIds[d];for(let u=0;u<n.length;u++){let g=n[u].userData.attributes.id;m===g&&o.push(n[u])}}for(let d=0;d<r.length;d++){let m=r[d];if(m.geometry.parentIdefId===h.attributes.id){let u=new Mt,g=m.geometry.xform.array,v=new pt;v.set(...g),u.applyMatrix4(v);for(let S=0;S<o.length;S++)u.add(o[S].clone(!0));t.add(u)}}}return t.name="",t}_geometryFromData(e){if(e&&e.format==="buffers"){let t=new Ft;return e.position&&e.position.length&&t.setAttribute("position",new Rt(e.position,3)),e.normal&&e.normal.length&&t.setAttribute("normal",new Rt(e.normal,3)),e.uv&&e.uv.length&&t.setAttribute("uv",new Rt(e.uv,2)),e.color&&e.color.length&&t.setAttribute("color",new Rt(e.color,3)),e.index&&e.index.length&&t.setIndex(new Rt(e.index,1)),t}return _x.parse(e)}_createObject(e,t){let n=e.attributes,s,r,o,a;switch(e.objectType){case"Point":case"PointSet":s=this._geometryFromData(e.geometry),s.hasAttribute("color")?r=new Ji({vertexColors:!0,sizeAttenuation:!1,size:2}):(o=n.drawColor,a=new Ve(o.r/255,o.g/255,o.b/255),r=new Ji({color:a,sizeAttenuation:!1,size:2})),r=this._compareMaterials(r);let c=new zr(s,r);return c.userData.attributes=n,c.userData.objectType=e.objectType,n.name&&(c.name=n.name),c;case"Mesh":case"Extrusion":case"SubD":case"Brep":if(e.geometry===null)return;s=this._geometryFromData(e.geometry),t===null&&(t=this._createMaterial()),s.hasAttribute("color")&&(t.vertexColors=!0),t=this._compareMaterials(t);let h=new Et(s,t);return h.castShadow=n.castsShadows,h.receiveShadow=n.receivesShadows,h.userData.attributes=n,h.userData.objectType=e.objectType,n.name&&(h.name=n.name),h;case"Curve":s=this._geometryFromData(e.geometry),o=n.drawColor,a=new Ve(o.r/255,o.g/255,o.b/255),r=new bi({color:a}),r=this._compareMaterials(r);let d=new qs(s,r);return d.userData.attributes=n,d.userData.objectType=e.objectType,n.name&&(d.name=n.name),d;case"TextDot":s=e.geometry;let m=document.createElement("canvas").getContext("2d"),u=`${s.fontHeight}px ${s.fontFace}`;m.font=u;let g=m.measureText(s.text).width+10,v=s.fontHeight+10,S=window.devicePixelRatio;m.canvas.width=g*S,m.canvas.height=v*S,m.canvas.style.width=g+"px",m.canvas.style.height=v+"px",m.setTransform(S,0,0,S,0,0),m.font=u,m.textBaseline="middle",m.textAlign="center",a=n.drawColor,m.fillStyle=`rgba(${a.r},${a.g},${a.b},${a.a})`,m.fillRect(0,0,g,v),m.fillStyle="white",m.fillText(s.text,g/2,v/2);let p=new Vr(m.canvas);p.minFilter=At,p.generateMipmaps=!1,p.wrapS=Zt,p.wrapT=Zt,r=new Ws({map:p,depthTest:!1});let _=new Ur(r);return _.position.set(s.point[0],s.point[1],s.point[2]),_.scale.set(g/10,v/10,1),_.userData.attributes=n,_.userData.objectType=e.objectType,n.name&&(_.name=n.name),_;case"Light":s=e.geometry;let T;switch(s.lightStyle.name){case"LightStyle_WorldPoint":T=new ji,T.castShadow=n.castsShadows,T.position.set(s.location[0],s.location[1],s.location[2]),T.shadow.normalBias=.1;break;case"LightStyle_WorldSpot":T=new Kr,T.castShadow=n.castsShadows,T.position.set(s.location[0],s.location[1],s.location[2]),T.target.position.set(s.direction[0],s.direction[1],s.direction[2]),T.angle=s.spotAngleRadians,T.shadow.normalBias=.1;break;case"LightStyle_WorldRectangular":T=new jr;let D=Math.abs(s.width[2]),w=Math.abs(s.length[0]);T.position.set(s.location[0]-w/2,s.location[1],s.location[2]-D/2),T.height=w,T.width=D,T.lookAt(s.direction[0],s.direction[1],s.direction[2]);break;case"LightStyle_WorldDirectional":T=new Pi,T.castShadow=n.castsShadows,T.position.set(s.location[0],s.location[1],s.location[2]),T.target.position.set(s.direction[0],s.direction[1],s.direction[2]),T.shadow.normalBias=.1;break;case"LightStyle_WorldLinear":break;default:break}return T&&(T.intensity=s.intensity,o=s.diffuse,a=new Ve(o.r/255,o.g/255,o.b/255),T.color=a,T.userData.attributes=n,T.userData.objectType=e.objectType),T}}_initLibrary(){if(!this.libraryPending){let e=new ui(this.manager);e.setPath(this.libraryPath);let t=new Promise((r,o)=>{e.load("rhino3dm.js",r,void 0,o)}),n=new ui(this.manager);n.setPath(this.libraryPath),n.setResponseType("arraybuffer");let s=new Promise((r,o)=>{n.load("rhino3dm.wasm",r,void 0,o)});this.libraryPending=Promise.all([t,s]).then(([r,o])=>{this.libraryConfig.wasmBinary=o;let a=xx.toString(),c=["/* rhino3dm.js */",r,"/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([c]))})}return this.libraryPending}_getWorker(e){return this._initLibrary().then(()=>{if(this.workerPool.length<this.workerLimit){let n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",libraryConfig:this.libraryConfig}),n.onmessage=s=>{let r=s.data;switch(r.type){case"warning":this.warnings.push(r.data),console.warn(r.data);break;case"decode":n._callbacks[r.id].resolve(r);break;case"error":n._callbacks[r.id].reject(r);break;default:console.error('THREE.Rhino3dmLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,s){return n._taskLoad>s._taskLoad?-1:1});let t=this.workerPool[this.workerPool.length-1];return t._taskLoad+=e,t})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();this.workerPool.length=0}};function xx(){let i,e,t,n;onmessage=function(u){let g=u.data;switch(g.type){case"init":e=g.libraryConfig;let v=e.wasmBinary,S;i=new Promise(function(T){S={wasmBinary:v,onRuntimeInitialized:T},rhino3dm(S)}).then(()=>{t=S});break;case"decode":n=g.id;let p=g.buffer,_=g.subdivisionLevel;i.then(()=>{try{let T=o(t,p,_);self.postMessage({type:"decode",id:g.id,data:T},r(T))}catch(T){self.postMessage({type:"error",id:g.id,error:{message:T.message,stack:T.stack}})}});break}};function s(u){if(typeof u.toThreejsBuffers=="function"){let g=u.toThreejsBuffers(!1),v={format:"buffers",position:g.position};return g.normal&&(v.normal=g.normal),g.index&&(v.index=g.index),g.uv&&(v.uv=g.uv),g.color&&(v.color=g.color),v}return u.toThreejsJSON()}function r(u){let g=new Set;if(u&&u.objects)for(let v of u.objects){let S=v.geometry;if(S&&S.format==="buffers")for(let p of["position","normal","uv","color","index"])S[p]&&S[p].buffer&&g.add(S[p].buffer)}return Array.from(g)}function o(u,g,v){let S=new Uint8Array(g),p=u.File3dm.fromByteArray(S),_=[],T=[],D=[],w=[],R=[],C=[],N=[],M=p.objects(),L=M.count;for(let te=0;te<L;te++){let Y=M.get(te),ne=h(Y,p,v);Y.delete(),ne&&_.push(ne)}for(let te=0;te<p.instanceDefinitions().count;te++){let Y=p.instanceDefinitions().get(te),ne=d(Y);ne.objectIds=Y.getObjectIds(),_.push({geometry:null,attributes:ne,objectType:"InstanceDefinition"})}let U=[u.TextureType.Diffuse,u.TextureType.Bump,u.TextureType.Transparency,u.TextureType.Opacity,u.TextureType.Emap],k=[u.TextureType.PBR_BaseColor,u.TextureType.PBR_Subsurface,u.TextureType.PBR_SubsurfaceScattering,u.TextureType.PBR_SubsurfaceScatteringRadius,u.TextureType.PBR_Metallic,u.TextureType.PBR_Specular,u.TextureType.PBR_SpecularTint,u.TextureType.PBR_Roughness,u.TextureType.PBR_Anisotropic,u.TextureType.PBR_Anisotropic_Rotation,u.TextureType.PBR_Sheen,u.TextureType.PBR_SheenTint,u.TextureType.PBR_Clearcoat,u.TextureType.PBR_ClearcoatBump,u.TextureType.PBR_ClearcoatRoughness,u.TextureType.PBR_OpacityIor,u.TextureType.PBR_OpacityRoughness,u.TextureType.PBR_Emission,u.TextureType.PBR_AmbientOcclusion,u.TextureType.PBR_Displacement];for(let te=0;te<p.materials().count;te++){let Y=p.materials().get(te),ne=d(Y),he=[];he.push(...a(Y,U,p)),ne.pbrSupported=Y.physicallyBased().supported,ne.pbrSupported&&(he.push(...a(Y,k,p)),ne.pbr=d(Y.physicallyBased())),ne.textures=he,T.push(ne),Y.delete()}for(let te=0;te<p.layers().count;te++){let Y=p.layers().get(te),ne=d(Y);D.push(ne),Y.delete()}for(let te=0;te<p.views().count;te++){let Y=p.views().get(te),ne=d(Y);w.push(ne),Y.delete()}for(let te=0;te<p.namedViews().count;te++){let Y=p.namedViews().get(te),ne=d(Y);R.push(ne),Y.delete()}for(let te=0;te<p.groups().count;te++){let Y=p.groups().get(te),ne=d(Y);C.push(ne),Y.delete()}let q=d(p.settings()),Z=p.strings().count;for(let te=0;te<Z;te++)N.push(p.strings().get(te));let z=p.settings().renderSettings().renderEnvironments.reflectionId,$=p.renderContent(),se=null;for(let te=0;te<$.count;te++){let Y=$.get(te);switch(Y.kind){case"environment":if(Y.id!==z)break;let Oe=Y.findChild("texture").fileName;for(let Ae=0;Ae<p.embeddedFiles().count;Ae++){let ht=p.embeddedFiles().get(Ae).fileName;Oe===ht&&(se={type:"renderEnvironment",image:"data:image/png;base64,"+p.getEmbeddedFileAsBase64(Oe),name:Oe})}break}}let ie={ambientLight:p.settings().renderSettings().ambientLight,backgroundColorTop:p.settings().renderSettings().backgroundColorTop,backgroundColorBottom:p.settings().renderSettings().backgroundColorBottom,useHiddenLights:p.settings().renderSettings().useHiddenLights,depthCue:p.settings().renderSettings().depthCue,flatShade:p.settings().renderSettings().flatShade,renderBackFaces:p.settings().renderSettings().renderBackFaces,renderPoints:p.settings().renderSettings().renderPoints,renderCurves:p.settings().renderSettings().renderCurves,renderIsoParams:p.settings().renderSettings().renderIsoParams,renderMeshEdges:p.settings().renderSettings().renderMeshEdges,renderAnnotations:p.settings().renderSettings().renderAnnotations,useViewportSize:p.settings().renderSettings().useViewportSize,scaleBackgroundToFit:p.settings().renderSettings().scaleBackgroundToFit,transparentBackground:p.settings().renderSettings().transparentBackground,imageDpi:p.settings().renderSettings().imageDpi,shadowMapLevel:p.settings().renderSettings().shadowMapLevel,namedView:p.settings().renderSettings().namedView,snapShot:p.settings().renderSettings().snapShot,specificViewport:p.settings().renderSettings().specificViewport,groundPlane:d(p.settings().renderSettings().groundPlane),safeFrame:d(p.settings().renderSettings().safeFrame),dithering:d(p.settings().renderSettings().dithering),skylight:d(p.settings().renderSettings().skylight),linearWorkflow:d(p.settings().renderSettings().linearWorkflow),renderChannels:d(p.settings().renderSettings().renderChannels),sun:d(p.settings().renderSettings().sun),renderEnvironments:d(p.settings().renderSettings().renderEnvironments),postEffects:d(p.settings().renderSettings().postEffects)};return p.delete(),{objects:_,materials:T,layers:D,views:w,namedViews:R,groups:C,strings:N,settings:q,renderSettings:ie,renderEnvironment:se}}function a(u,g,v){let S=[];for(let p=0;p<g.length;p++){let _=u.getTexture(g[p]);if(_){let T=g[p].constructor.name;T=T.substring(12,T.length);let D=c(_,T,v);S.push(D),_.delete()}}return S}function c(u,g,v){let S={type:g},p=v.getEmbeddedFileAsBase64(u.fileName);S.wrapU=u.wrapU,S.wrapV=u.wrapV,S.wrapW=u.wrapW;let _=u.uvwTransform.toFloatArray(!0);return S.repeat=[_[0],_[5]],p?S.image="data:image/png;base64,"+p:(self.postMessage({type:"warning",id:n,data:{message:`THREE.3DMLoader: Image for ${g} texture not embedded in file.`,type:"missing resource"}}),S.image=null),S}function h(u,g,v){let S=u.geometry(),p=u.attributes(),_=S.objectType,T,D,w,R,C;switch(_){case t.ObjectType.Curve:let N=m(S,100);w={},D={},R={},w.itemSize=3,w.type="Float32Array",w.array=[];for(let q=0;q<N.length;q++)w.array.push(N[q][0]),w.array.push(N[q][1]),w.array.push(N[q][2]);D.position=w,R.attributes=D,T={data:R};break;case t.ObjectType.Point:let M=S.location;w={};let L={};D={},R={},w.itemSize=3,w.type="Float32Array",w.array=[M[0],M[1],M[2]];let U=p.drawColor(g);L.itemSize=3,L.type="Float32Array",L.array=[U.r/255,U.g/255,U.b/255],D.position=w,D.color=L,R.attributes=D,T={data:R};break;case t.ObjectType.PointSet:case t.ObjectType.Mesh:T=s(S);break;case t.ObjectType.Brep:let k=S.faces();C=new t.Mesh;for(let q=0;q<k.count;q++){let Z=k.get(q),z=Z.getMesh(t.MeshType.Any);z&&(C.append(z),z.delete()),Z.delete()}C.faces().count>0&&(C.compact(),T=s(C),k.delete()),C.delete();break;case t.ObjectType.Extrusion:C=S.getMesh(t.MeshType.Any),C&&(T=s(C),C.delete());break;case t.ObjectType.TextDot:T=d(S);break;case t.ObjectType.Light:T=d(S),T.lightStyle.name==="LightStyle_WorldLinear"&&self.postMessage({type:"warning",id:n,data:{message:`THREE.3DMLoader: No conversion exists for ${_.constructor.name} ${T.lightStyle.name}`,type:"no conversion",guid:p.id}});break;case t.ObjectType.InstanceReference:T=d(S),T.xform=d(S.xform),T.xform.array=S.xform.toFloatArray(!0);break;case t.ObjectType.SubD:S.subdivide(v),C=t.Mesh.createFromSubDControlNet(S,!1),C&&(T=s(C),C.delete());break;default:self.postMessage({type:"warning",id:n,data:{message:`THREE.3DMLoader: Conversion not implemented for ${_.constructor.name}`,type:"not implemented",guid:p.id}});break}if(T)return D=d(p),D.geometry=d(S),p.groupCount>0&&(D.groupIds=p.getGroupList()),p.userStringCount>0&&(D.userStrings=p.getUserStrings()),S.userStringCount>0&&(D.geometry.userStrings=S.getUserStrings()),p.decals().count>0&&self.postMessage({type:"warning",id:n,data:{message:"THREE.3DMLoader: No conversion exists for the decals associated with this object.",type:"no conversion",guid:p.id}}),D.drawColor=p.drawColor(g),_=_.constructor.name,_=_.substring(11,_.length),{geometry:T,attributes:D,objectType:_};self.postMessage({type:"warning",id:n,data:{message:`THREE.3DMLoader: ${_.constructor.name} has no associated mesh geometry.`,type:"missing mesh",guid:p.id}})}function d(u){let g={};for(let v in u){let S=u[v];typeof S!="function"&&(typeof S=="object"&&S!==null&&S.hasOwnProperty("constructor")?g[v]={name:S.constructor.name,value:S.value}:typeof S=="object"&&S!==null?g[v]=d(S):g[v]=S)}return g}function m(u,g){let v=g,S=[],p=[];if(u instanceof t.LineCurve)return[u.pointAtStart,u.pointAtEnd];if(u instanceof t.PolylineCurve){v=u.pointCount;for(let D=0;D<v;D++)S.push(u.point(D));return S}if(u instanceof t.PolyCurve){let D=u.segmentCount;for(let w=0;w<D;w++){let R=u.segmentCurve(w),C=m(R,v);S=S.concat(C),R.delete()}return S}if(u instanceof t.ArcCurve&&(v=Math.floor(u.angleDegrees/5),v=v<2?2:v),u instanceof t.NurbsCurve&&u.degree===1){let D=u.tryGetPolyline();for(let w=0;w<D.count;w++)S.push(D.get(w));return D.delete(),S}let _=u.domain,T=v-1;for(let D=0;D<v;D++){let w=_[0]+D/T*(_[1]-_[0]);if(w===_[0]||w===_[1]){p.push(w);continue}let R=u.tangentAt(w),C=u.tangentAt(p.slice(-1)[0]),N=R[0]*R[0]+R[1]*R[1]+R[2]*R[2],M=C[0]*C[0]+C[1]*C[1]+C[2]*C[2],L=Math.sqrt(N*M),U;if(L===0)U=Math.PI/2;else{let k=(R.x*C.x+R.y*C.y+R.z*C.z)/L;U=Math.acos(Math.max(-1,Math.min(1,k)))}U<.1||p.push(w)}return S=p.map(D=>u.pointAt(D)),S}}var is=null;function cr(i,e){is===i&&(is=null,clearTimeout(i.timer),i.signal?.removeEventListener("abort",i.abort),e?i.reject(e):i.resolve(i.buffer.buffer))}function kf(i){clearTimeout(i.timer),i.timer=setTimeout(()=>{i.send({type:"cancelModelTransfer",transferId:i.id}),cr(i,new Error("\u5BBF\u4E3B\u4F20\u8F93\u6A21\u578B\u8D85\u65F6\u3002\u8BF7\u91CD\u65B0\u8F7D\u5165\uFF1B\u82E5\u4ECD\u5931\u8D25\uFF0C\u8BF7\u786E\u8BA4\u6587\u4EF6\u5DF2\u4E0B\u8F7D\u5230\u672C\u673A\u3002"))},2e4),i.send({type:"modelChunkRequest",modelToken:i.token,transferId:i.id,offset:i.received})}function Vf(i,{signal:e,progress:t=()=>{},send:n=s=>window.chrome.webview.postMessage(s)}={}){return is&&is.abort(),new Promise((s,r)=>{let o=Number(i.bytes);if(!Number.isSafeInteger(o)||o<=0||o>536870912||!i.modelToken){r(new Error("\u6A21\u578B\u4F20\u8F93\u53C2\u6570\u65E0\u6548\uFF0C\u6216\u6587\u4EF6\u8D85\u8FC7 512 MB\u3002\u8BF7\u5B89\u88C5\u5B8C\u6574\u7684 v1.0.2 \u63D2\u4EF6\u540E\u518D\u8BD5\u3002"));return}if(e?.aborted){r(new DOMException("Transfer cancelled","AbortError"));return}let a={id:i.modelToken+":"+crypto.randomUUID(),token:i.modelToken,received:0,total:o,buffer:new Uint8Array(o),resolve:s,reject:r,send:n,signal:e,progress:t,timer:null,abort:null};a.abort=()=>{is===a&&(a.send({type:"cancelModelTransfer",transferId:a.id}),cr(a,new DOMException("Transfer cancelled","AbortError")))},is=a,e?.addEventListener("abort",a.abort,{once:!0});try{kf(a)}catch(c){cr(a,c)}})}function Hf(i){let e=is;if(!(!e||i?.transferId!==e.id)){if(i.type==="modelTransferError"){cr(e,new Error(i.message||"\u5BBF\u4E3B\u65E0\u6CD5\u8BFB\u53D6\u6240\u9009\u6A21\u578B\u6587\u4EF6\u3002"));return}if(i.type==="modelChunk")try{if(i.offset!==e.received||i.total!==e.total)throw new Error("\u6A21\u578B\u6587\u4EF6\u5927\u5C0F\u6216\u4F20\u8F93\u987A\u5E8F\u53D1\u751F\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u8F7D\u5165\u3002");if(typeof i.base64!="string"||i.base64.length>393216*4/3+4)throw new Error("\u6A21\u578B\u5206\u5757\u5185\u5BB9\u65E0\u6548\uFF0C\u8BF7\u91CD\u65B0\u8F7D\u5165\u3002");let t=atob(i.base64);if(!t.length||t.length>393216||e.received+t.length>e.total)throw new Error("\u6A21\u578B\u6570\u636E\u957F\u5EA6\u4E0D\u4E00\u81F4\uFF0C\u8BF7\u91CD\u65B0\u8F7D\u5165\u3002");let n=e.received;for(let s=0;s<t.length;s++)e.buffer[n+s]=t.charCodeAt(s);if(e.received+=t.length,!!i.done!=(e.received===e.total))throw new Error("\u6A21\u578B\u4F20\u8F93\u5C1A\u672A\u5B8C\u6574\u7ED3\u675F\uFF0C\u8BF7\u91CD\u65B0\u8F7D\u5165\u3002");e.progress(e.received,e.total),i.done?cr(e):kf(e)}catch(t){e.send({type:"cancelModelTransfer",transferId:e.id}),cr(e,t)}}}var We=i=>document.getElementById(i),wo=i=>window.chrome?.webview?.postMessage(i),de={records:[],layers:[],selected:null,mode:"original",tab:"layers",isolated:!1,section:!1,sectionAxis:"X",scale:1,unit:"",loading:!1,loaded:!1,warnings:[],filename:"",bytes:0,disposed:!1,grid:!0,ortho:!1,view:"iso"},Pt,wn,ct,jt,cn,Oi,os,ls,Zn,gi,Th,Eh=!1,ss=0,Ah=null,Mo=null,Vl,_i=We("viewport"),Wl=new eo;Wl.params.Line.threshold=.035;Wl.params.Points.threshold=.05;var Gf=new Ge,cs=new ln(new V(1,0,0),0),Ch=new Set;function bo(i,e,t){We("loadingTitle").textContent=i,We("loadingDetail").textContent=e,We("progressBar").style.width=`${t}%`}function Rh(i){return typeof i=="string"?i:i?.error?.message||i?.message||"\u6587\u4EF6\u89E3\u6790\u5931\u8D25\u6216\u6B64\u6587\u4EF6\u5305\u542B\u5C1A\u4E0D\u652F\u6301\u7684\u51E0\u4F55\u7C7B\u578B\u3002"}function Xl(i){We("loading").hidden=!0,We("error").hidden=!1,We("errorDetail").textContent=Rh(i),de.loading=!1,de.loaded=!1,We("status").textContent="3DM v1.0.2 \xB7 \u9884\u89C8\u5931\u8D25 \xB7 \u53EF\u5173\u95ED\u540E\u91CD\u8BD5",wo({type:"error",message:Rh(i)})}function Wf(i){de.warnings=[...new Set(i.filter(Boolean))],We("warnings").hidden=de.warnings.length===0,We("warningText").textContent=de.warnings.join("  \xB7  ")}function $n(){Eh||de.disposed||!Pt||(Eh=!0,requestAnimationFrame(()=>{Eh=!1,!de.disposed&&(jt.update(),Pt.render(wn,ct))}))}function Zf(){let i=Math.max(1,_i.clientWidth)/Math.max(1,_i.clientHeight),e=de.ortho?new Ii(-6*i,6*i,6,-6,.01,2e4):new Gt(38,i,.01,2e4);return e.up.set(0,0,1),e}function vx(){Mt.DEFAULT_UP.set(0,0,1),Pt=new Nl({antialias:!0,alpha:!0,powerPreference:"high-performance"}),Pt.setPixelRatio(Math.min(window.devicePixelRatio,2)),Pt.outputColorSpace=qt,Pt.toneMapping=ro,Pt.toneMappingExposure=1.12,Pt.shadowMap.enabled=!0,Pt.shadowMap.type=Ga,Pt.localClippingEnabled=!0,_i.insertBefore(Pt.domElement,_i.firstChild),Pt.domElement.tabIndex=-1,wn=new qi,ct=Zf(),ct.position.set(13,-17,12),jt=new vo(ct,Pt.domElement),jt.enableDamping=!0,jt.dampingFactor=.12,jt.minDistance=.02,jt.maxDistance=1e4,jt.addEventListener("change",$n);let i=new sr(Pt),e=new Bl;wn.environment=i.fromScene(e,.04).texture,e.dispose(),i.dispose(),wn.add(new $r(15200767,6516861,1.6));let t=new Pi(16773855,3.5);t.position.set(-8,-10,16),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),Object.assign(t.shadow.camera,{left:-10,right:10,top:10,bottom:-10,near:.1,far:80}),t.shadow.normalBias=.025,t.shadow.bias=-2e-4,wn.add(t);let n=new Pi(13821439,1.4);n.position.set(10,6,8),wn.add(n),Oi=new ai,wn.add(Oi),ls=new Et(new Ki(2e3,2e3),new Gr({opacity:.16})),ls.receiveShadow=!0,wn.add(ls),Zn=new to(20,20,7899287,6452357),Zn.rotation.x=Math.PI/2,Zn.material.transparent=!0,Zn.material.opacity=.19,Zn.material.depthWrite=!1,wn.add(Zn),Th=new ResizeObserver(Ih),Th.observe(_i),Pt.domElement.addEventListener("webglcontextlost",r=>{r.preventDefault(),Xl("\u663E\u5361\u6E32\u67D3\u4E0A\u4E0B\u6587\u5DF2\u4E22\u5931\u3002\u8BF7\u5173\u95ED\u9884\u89C8\u540E\u91CD\u8BD5\u3002")});let s=null;Pt.domElement.addEventListener("pointerdown",r=>{s={x:r.clientX,y:r.clientY,button:r.button}}),Pt.domElement.addEventListener("pointerup",r=>{if(!s||s.button!==0||Math.hypot(r.clientX-s.x,r.clientY-s.y)>5)return;let o=Xf(r);Lh(o?de.records.find(a=>a.object===o.object):null)}),Pt.domElement.addEventListener("dblclick",r=>{let o=Xf(r);o&&ql(new nn().setFromObject(o.object))}),Ih()}function Ih(){if(!Pt)return;let i=Math.max(1,_i.clientWidth),e=Math.max(1,_i.clientHeight);if(Pt.setSize(i,e),ct.isPerspectiveCamera)ct.aspect=i/e;else{let t=ct.top-ct.bottom;ct.left=-t*i/e/2,ct.right=-ct.left}ct.updateProjectionMatrix(),$n()}function Ph(i){for(let e=i;e;e=e.parent)if(!e.visible)return!1;return!0}function rs(i=!0){let e=new nn;for(let t of de.records)i&&!Ph(t.object)||(t.object.geometry.boundingBox||t.object.geometry.computeBoundingBox(),t.object.geometry.boundingBox&&e.union(t.object.geometry.boundingBox.clone().applyMatrix4(t.object.matrixWorld)));return e}function ql(i,e=de.view){if(!i||i.isEmpty())return;let t=i.getCenter(new V),n=i.getSize(new V),s=Math.max(n.length()/2,.01),r={iso:[1,-1.3,.9],front:[0,-1,1e-4],right:[1,0,1e-4],top:[0,-1e-4,1]},o=new V(...r[e]).normalize();if(ct.isPerspectiveCamera){let a=2*Math.atan(Math.tan(ct.fov*Math.PI/360)*Math.min(1,ct.aspect)),c=s/Math.sin(a/2)*1.18;ct.position.copy(t).addScaledVector(o,c),ct.near=Math.max(1e-5,c/2e3),ct.far=Math.max(200,c*100)}else{let a=s*1.2,c=_i.clientWidth/_i.clientHeight;ct.top=a/Math.min(1,c),ct.bottom=-ct.top,ct.right=ct.top*c,ct.left=-ct.right,ct.position.copy(t).addScaledVector(o,s*4+10),ct.near=1e-5,ct.far=Math.max(200,s*100)}jt.target.copy(t),ct.lookAt(t),ct.updateProjectionMatrix(),jt.update(),$n()}function hs(){cn&&(cn.updateWorldMatrix(!0,!0),ql(rs()))}function Xf(i){if(!de.loaded||!Pt)return null;let e=Pt.domElement.getBoundingClientRect();return Gf.set((i.clientX-e.left)/e.width*2-1,-(i.clientY-e.top)/e.height*2+1),Wl.setFromCamera(Gf,ct),Wl.intersectObjects(de.records.filter(t=>Ph(t.object)).map(t=>t.object),!1).find(t=>!de.section||cs.distanceToPoint(t.point)>=0)||null}function yx(i){let e=de.layers[i],t=new Set;for(;e&&!t.has(e.id);){if(!e.on)return!1;t.add(e.id),e=de.layers.find(n=>n.id===e.parentLayerId)}return!0}function ur(){for(let i of de.records)i.object.visible=i.on&&yx(i.layerIndex)&&(!de.isolated||i===de.selected);gi&&de.selected&&(gi.visible=Ph(de.selected.object)),us(),$n()}function Sx(){de.layers.forEach(i=>i.on=i.initial),de.records.forEach(i=>i.on=i.initial),de.isolated=!1,We("isolate").classList.remove("active"),ur()}function Mx(){de.layers.forEach(i=>i.on=!0),de.records.forEach(i=>i.on=!0),de.isolated=!1,We("isolate").classList.remove("active"),ur(),hs()}function Lh(i){if(de.selected=i,gi&&(wn.remove(gi),gi.geometry.dispose(),gi.material.dispose(),gi=null),We("selection").hidden=!i,We("isolate").disabled=!i,i){let e=new nn().setFromObject(i.object);gi=new no(e,7849908),wn.add(gi);let t=e.getSize(new V).divideScalar(de.scale);We("selection").textContent=`${i.name}  \xB7  ${i.type}  \xB7  \u5305\u56F4\u76D2 ${$f(t)}`}else de.isolated&&(de.isolated=!1,We("isolate").classList.remove("active"),ur());us(),$n()}function hr(i){return Array.isArray(i)?i:[i]}function bx(i){let e=new Map;i.map((n,s)=>{let r=n.object.userData.attributes?.id||`${n.type}:${n.name}:${s}`,o=e.get(r)||0;return e.set(r,o+1),{record:n,key:`${r}:${o}`}}).sort((n,s)=>n.key<s.key?-1:n.key>s.key?1:0).forEach(({record:n},s)=>{let r=(.57+s*.618033988749895)%1,o=[.53,.61,.47][Math.floor(s/12)%3];n.autoColor=new Ve().setHSL(r,.62,o,qt)})}function Hl(i){de.mode=i,document.querySelectorAll("[data-mode]").forEach(e=>e.classList.toggle("active",e.dataset.mode===i));for(let e of de.records){if(!e.object.isMesh&&i!=="color"){e.object.material=e.originalMaterial,hr(e.object.material).forEach(t=>{t.clippingPlanes=de.section?[cs]:[]});continue}if(!e.modes[i]){let n=hr(e.originalMaterial).map(s=>{let r;return i==="color"?(r=e.object.isMesh?new An({color:e.autoColor,metalness:.04,roughness:.48,side:sn}):s.clone(),r.color?.copy(e.autoColor),r.vertexColors=!1):r=i==="original"?s.clone():new An({color:13161179,metalness:.08,roughness:.42,side:sn,wireframe:i==="wire"}),i==="original"&&r.name===fn.DEFAULT_MATERIAL_NAME&&(e.color&&r.color&&r.color.setRGB(e.color.r/255,e.color.g/255,e.color.b/255,qt),r.metalness=.08,r.roughness=.45),r.clippingPlanes=de.section?[cs]:[],Ch.add(r),r});e.modes[i]=Array.isArray(e.originalMaterial)?n:n[0]}e.object.material=e.modes[i],hr(e.object.material).forEach(t=>{t.clippingPlanes=de.section?[cs]:[]})}us(),$n()}function Yl(){let i=We("sectionAxis").value;cs.normal.set(i==="X"?1:0,i==="Y"?1:0,i==="Z"?1:0);let e=rs(!1);if(!e.isEmpty()){let t=e.min[i.toLowerCase()],n=e.max[i.toLowerCase()],s=(Number(We("sectionSlider").value)+100)/200;cs.constant=-(t+(n-t)*s)}for(let t of de.records)hr(t.object.material).forEach(n=>{n&&(n.clippingPlanes=de.section?[cs]:[],n.needsUpdate=!0)});We("sectionPanel").hidden=!de.section,We("sectionToggle").classList.toggle("active",de.section),$n()}function Yf(){de.section=!de.section,Yl()}function qf(){let i=ct.position.clone(),e=jt.target.clone();de.ortho=!de.ortho,jt.dispose(),ct=Zf(),ct.position.copy(i),jt=new vo(ct,Pt.domElement),jt.enableDamping=!0,jt.dampingFactor=.12,jt.target.copy(e),jt.addEventListener("change",$n),We("projection").textContent=de.ortho?"\u6B63\u4EA4":"\u900F\u89C6",hs()}function $f(i){return`${as(i.x)} \xD7 ${as(i.y)} \xD7 ${as(i.z)}${de.unit?" "+de.unit:" \u6A21\u578B\u5355\u4F4D"}`}function as(i){return i.toLocaleString("zh-CN",{maximumFractionDigits:Math.abs(i)<1?3:2})}function wx(i){let e=i?.modelUnitSystem,t={1:"\u03BCm",2:"mm",3:"cm",4:"m",5:"km",8:"in",9:"ft",10:"mi"};if(typeof e=="number")return t[e]||"";if(e&&typeof e.value=="number")return t[e.value]||"";let n=String(e?.name||e||"");return Object.entries({Millimeters:"mm",Centimeters:"cm",Kilometers:"km",Meters:"m",Inches:"in",Feet:"ft",Microns:"\u03BCm"}).find(([s])=>n.includes(s))?.[1]||""}function us(){let i=We("tree");i.replaceChildren();let e=We("search").value.trim().toLocaleLowerCase(),n=(de.tab==="layers"?de.layers:de.records).filter(s=>s.name.toLocaleLowerCase().includes(e));for(let s of n.slice(0,1200)){let r=document.createElement("div");r.className="tree-row",r.setAttribute("role","treeitem"),r.classList.toggle("off",!s.on),r.classList.toggle("selected",de.tab==="objects"&&s===de.selected);let o=document.createElement("input");o.type="checkbox",o.checked=s.on,o.setAttribute("aria-label","\u663E\u793A "+s.name),o.addEventListener("change",()=>{s.on=o.checked,ur()});let a=document.createElement("span");a.className="swatch";let c=s.color;a.style.background=de.mode==="color"&&de.tab==="objects"&&s.autoColor?"#"+s.autoColor.getHexString():c?`rgb(${c.r},${c.g},${c.b})`:"#8e9bad";let h=document.createElement("button");if(h.className="tree-name",h.textContent=s.name,h.title=s.name,h.addEventListener("click",()=>{if(de.tab==="objects")Lh(s);else{let m=new nn;de.records.filter(u=>u.layerIndex===s.index).forEach(u=>m.union(new nn().setFromObject(u.object))),ql(m)}}),de.tab==="layers"){let m=0,u=s.parentLayerId,g=new Set;for(;u&&m<8&&!g.has(u);){g.add(u);let v=de.layers.find(S=>S.id===u);if(!v)break;m++,u=v.parentLayerId}r.style.paddingLeft=`${7+m*10}px`}let d=document.createElement("span");d.className="tree-count",d.textContent=de.tab==="layers"?String(de.records.filter(m=>m.layerIndex===s.index).length):s.type,r.append(o,a,h,d),i.append(r)}if(!n.length){let s=document.createElement("p");s.className="tree-empty",s.textContent=de.loaded?"\u6CA1\u6709\u5339\u914D\u7684\u6761\u76EE":"\u8F7D\u5165\u6A21\u578B\u540E\u663E\u793A\u56FE\u5C42\u548C\u5BF9\u8C61",i.append(s)}We("treeNote").textContent=n.length>1200?`\u663E\u793A\u524D 1200 \u9879\uFF0C\u5171 ${n.length} \u9879\uFF1B\u53EF\u641C\u7D22\u7F29\u5C0F\u8303\u56F4`:`${n.length} \u4E2A${de.tab==="layers"?"\u56FE\u5C42":"\u53EF\u9884\u89C8\u5BF9\u8C61"}`}function Jf(){Lh(null),de.isolated=!1;let i=new Set,e=new Set(Ch),t=new Set;cn&&cn.traverse(n=>{n.geometry&&i.add(n.geometry),n.material&&hr(n.material).forEach(s=>e.add(s))}),de.records.forEach(n=>hr(n.originalMaterial).forEach(s=>e.add(s)));for(let n of e){for(let s of Object.values(n||{}))s?.isTexture&&t.add(s);n?.dispose()}t.forEach(n=>n.dispose()),i.forEach(n=>n.dispose()),Ch.clear(),cn&&Oi.remove(cn),cn=null,de.records=[],de.layers=[],de.selected=null,de.loaded=!1,Oi.position.set(0,0,0),Oi.scale.setScalar(1),os?.dispose(),os?.workerSourceURL&&URL.revokeObjectURL(os.workerSourceURL),os=null}async function Gl(i){let e=++ss;Mo?.abort(),Mo=new AbortController,clearTimeout(Vl),Jf(),Ah=i,de.filename=i.filename||"Rhino \u6A21\u578B.3dm",de.bytes=i.bytes||0,de.loading=!0,We("loading").hidden=!1,We("error").hidden=!0,We("warnings").hidden=!0,We("filename").textContent=de.filename,We("filename").title=de.filename,We("subtitle").textContent="RHINO 3DM \xB7 v1.0.2 \xB7 OFFLINE PREVIEW",We("status").textContent="\u8BFB\u53D6\u6A21\u578B\u2026",bo("\u8BFB\u53D6 3DM \u6587\u4EF6","\u6587\u4EF6\u4EC5\u5728\u672C\u673A\u89E3\u6790\uFF0C\u4E0D\u4E0A\u4F20\u5230\u7F51\u7EDC\u3002",18),Vl=setTimeout(()=>{e===ss&&de.loading&&bo("\u6A21\u578B\u4ECD\u5728\u89E3\u6790","\u5927\u6587\u4EF6\u3001\u590D\u6742\u5757\u6216\u9AD8\u5BC6\u5EA6 SubD \u9700\u8981\u66F4\u591A\u65F6\u95F4\u3002\u53EF\u5173\u95ED\u9884\u89C8\u53D6\u6D88\u3002",65)},25e3);let t="model";try{let n;if(i.transport==="host-chunks")n=await Vf(i,{signal:Mo.signal,progress:(S,p)=>bo("\u4ECE QuickLook \u8BFB\u53D6\u6A21\u578B",`${as(S/1048576)} / ${as(p/1048576)} MB \xB7 \u672C\u673A\u5206\u5757\u4F20\u8F93`,18+S/p*25)});else{let S=await fetch(i.url,{signal:Mo.signal,cache:"no-store"});if(!S.ok)throw new Error(`\u65E0\u6CD5\u8BFB\u53D6\u6A21\u578B\u6587\u4EF6\uFF08${S.status}\uFF09\u3002\u8BF7\u786E\u8BA4\u6587\u4EF6\u4ECD\u5728\u539F\u4F4D\u7F6E\u4E14\u5DF2\u4E0B\u8F7D\u5230\u672C\u673A\u3002`);n=await S.arrayBuffer()}if(e!==ss)return;let s=new TextDecoder().decode(new Uint8Array(n,0,Math.min(32,n.byteLength)));if(!s.startsWith("3D Geometry File Format"))throw new Error("\u6B64\u6587\u4EF6\u6CA1\u6709\u6709\u6548\u7684 Rhino 3DM \u6587\u4EF6\u5934\u3002");let r=Number(s.slice(24).trim()),o=r>=50?String(r/10):String(r||"");de.bytes=n.byteLength,bo("\u89E3\u6790\u6A21\u578B\u4E0E\u663E\u793A\u7F51\u683C",`${as(n.byteLength/1048576)} MB \xB7 \u6B63\u5728\u8BFB\u53D6\u56FE\u5C42\u3001\u5BF9\u8C61\u548C\u6750\u8D28\u2026`,47),t="decoder",os=new kl().setLibraryPath("./rhino/").setWorkerLimit(1).setSubdivisionLevel(2),os.manager.setURLModifier(S=>{let p=new URL(S,location.href);return["data:","blob:"].includes(p.protocol)||p.origin===location.origin?S:"data:,"});let a=os,c=await new Promise((S,p)=>a.parse(n,S,p));if(e!==ss||de.disposed){a.dispose();return}cn=c,Oi.add(cn),de.unit=wx(cn.userData.settings),de.layers=(cn.userData.layers||[]).map((S,p)=>({...S,index:p,name:S.name||`\u56FE\u5C42 ${p+1}`,on:S.visible!==!1,initial:S.visible!==!1})),cn.traverse(S=>{if(S.isLight){S.visible=!1;return}if(!S.geometry||!(S.isMesh||S.isLine||S.isPoints||S.isSprite))return;let p=S.userData.attributes||{},_=p.mode?.value??p.mode,T=p.visible!==!1&&_!==1&&_!=="ObjectMode_Hidden",D=S.userData.objectType||(S.isMesh?"Mesh":S.isLine?"Curve":"Point"),w={object:S,name:S.name||`${D} ${de.records.length+1}`,type:D,layerIndex:p.layerIndex??0,initial:T,on:T,color:p.drawColor,originalMaterial:S.material,modes:{}};S.castShadow=S.isMesh,S.receiveShadow=!1,de.records.push(w)}),bx(de.records);let h=(cn.userData.warnings||[]).map(S=>{let p=typeof S=="string"?S:S.message||S.type||"";return/mesh|brep|extrusion/i.test(p)?"\u90E8\u5206\u66F2\u9762\u6216\u5B9E\u4F53\u6CA1\u6709\u4FDD\u5B58\u663E\u793A\u7F51\u683C\u3002\u8BF7\u5728 Rhino \u4E2D\u5207\u5230\u7740\u8272\u89C6\u56FE\uFF0C\u6267\u884C Save\uFF0C\u518D\u53D6\u6D88\u201C\u4EC5\u4FDD\u5B58\u51E0\u4F55\u4F53 / Save small\u201D\u3002":String(p)});if(!de.records.length)throw Wf(h),new Error(`\u6CA1\u6709\u8BFB\u53D6\u5230\u53EF\u663E\u793A\u7684\u51E0\u4F55\u4F53\u3002
\u82E5\u6A21\u578B\u5305\u542B\u66F2\u9762\u6216\u5B9E\u4F53\uFF0C\u8BF7\u5728 Rhino \u4E2D\u5207\u6362\u5230\u7740\u8272\u89C6\u56FE\uFF0C\u4FDD\u5B58\u6587\u4EF6\u65F6\u53D6\u6D88\u201C\u4EC5\u4FDD\u5B58\u51E0\u4F55\u4F53 / Save small\u201D\uFF0C\u518D\u8BD5\u4E00\u6B21\u3002
\u7A7A\u6587\u6863\u3001\u65E0\u663E\u793A\u7F51\u683C\u6216\u4E0D\u652F\u6301\u7684\u5BF9\u8C61\u4E5F\u4F1A\u51FA\u73B0\u6B64\u63D0\u793A\u3002`);cn.updateWorldMatrix(!0,!0),ur();let d=rs();d.isEmpty()&&(d=rs(!1),h.push("\u6A21\u578B\u4E2D\u7684\u5BF9\u8C61\u521D\u59CB\u5747\u4E0D\u53EF\u89C1\u3002\u53EF\u70B9\u51FB\u201C\u5168\u663E\u201D\u67E5\u770B\u3002"));let m=d.getSize(new V),u=d.getCenter(new V);de.scale=8/Math.max(m.x,m.y,m.z,1e-6),Oi.scale.setScalar(de.scale),Oi.position.copy(u).multiplyScalar(-de.scale),cn.updateWorldMatrix(!0,!0);let g=rs(!1);ls.position.z=g.min.z-.015,Zn.position.z=ls.position.z+.005;let v=0;de.records.forEach(S=>{S.object.isMesh&&(v+=(S.object.geometry.index?.count||S.object.geometry.attributes.position?.count||0)/3)}),v>15e5&&h.push("\u6A21\u578B\u7F51\u683C\u8F83\u5BC6\uFF0C\u4EA4\u4E92\u901F\u5EA6\u53D6\u51B3\u4E8E\u663E\u5361\u6027\u80FD\u3002"),We("metadata").replaceChildren();for(let S of[`${de.records.length} \u4E2A\u53EF\u9884\u89C8\u5BF9\u8C61 \xB7 ${de.layers.length} \u4E2A\u56FE\u5C42`,`\u7F51\u683C\u4E09\u89D2\u9762 ${Math.round(v).toLocaleString("zh-CN")}`,`\u53EF\u89C1\u5305\u56F4\u76D2 ${$f(m)}`,`${as(de.bytes/1048576)} MB \xB7 3DM ${o||""}`]){let p=document.createElement("div");p.textContent=S,We("metadata").append(p)}de.loaded=!0,de.loading=!1,Hl(de.mode),Yl(),hs(),rs().isEmpty()&&ql(rs(!1)),We("loading").hidden=!0,We("status").textContent=`${de.records.length} \u5BF9\u8C61 \xB7 ${Math.round(v).toLocaleString("zh-CN")} \u4E09\u89D2\u9762 \xB7 \u53EA\u8BFB\u9884\u89C8`,Wf(h),us(),wo({type:"modelLoaded",count:de.records.length})}catch(n){e===ss&&n.name!=="AbortError"&&(/failed to fetch/i.test(Rh(n))?Xl(t==="decoder"?"\u672C\u5730 3DM \u89E3\u7801\u7EC4\u4EF6\u8BFB\u53D6\u5931\u8D25\u3002\u8BF7\u786E\u8BA4\u5DF2\u5B8C\u6574\u5B89\u88C5 v1.0.2\uFF0CAssets/rhino \u4E2D\u7684 rhino3dm.js \u548C rhino3dm.wasm \u672A\u88AB\u62E6\u622A\u6216\u5220\u9664\u3002":"\u6A21\u578B\u6587\u4EF6\u4F20\u8F93\u5931\u8D25\u3002\u8BF7\u5B89\u88C5\u5B8C\u6574\u7684 v1.0.2 \u63D2\u4EF6\u5E76\u91CD\u542F QuickLook\u3002"):Xl(n))}finally{e===ss&&clearTimeout(Vl)}}function Ex(){document.querySelectorAll("[data-mode]").forEach(i=>i.addEventListener("click",()=>Hl(i.dataset.mode))),document.querySelectorAll("[data-view]").forEach(i=>i.addEventListener("click",()=>{de.view=i.dataset.view,hs(),document.querySelectorAll("[data-view]").forEach(e=>e.classList.toggle("active",e===i))})),We("fit").onclick=hs,We("resetVisibility").onclick=Sx,We("showAll").onclick=Mx,We("sectionToggle").onclick=Yf,We("sectionAxis").onchange=Yl,We("sectionSlider").oninput=Yl,We("projection").onclick=qf,We("search").oninput=us,We("toggleSidebar").onclick=()=>{document.body.classList.toggle("sidebar-hidden"),Ih()},We("theme").onclick=()=>{document.body.classList.toggle("light"),We("theme").textContent=document.body.classList.contains("light")?"\u6DF1\u8272":"\u6D45\u8272",$n()},We("grid").onclick=()=>{de.grid=!de.grid,Zn.visible=de.grid,We("grid").classList.toggle("active",de.grid),$n()},We("isolate").onclick=()=>{de.selected&&(de.isolated=!de.isolated,We("isolate").classList.toggle("active",de.isolated),ur())};for(let i of["layers","objects"])We(i+"Tab").onclick=()=>{de.tab=i,We("layersTab").classList.toggle("active",i==="layers"),We("objectsTab").classList.toggle("active",i==="objects"),us()};We("closeWarnings").onclick=()=>We("warnings").hidden=!0,We("retry").onclick=()=>{Ah&&Gl(Ah)},document.addEventListener("keydown",i=>{if(i.target.closest("input,textarea,select,[contenteditable=true]")){i.key==="Escape"&&(i.target.blur(),i.preventDefault());return}if(!(i.ctrlKey||i.altKey||i.metaKey||i.repeat))switch(i.key.toLowerCase()){case" ":case"escape":i.preventDefault(),wo({type:"close"});break;case"f11":i.preventDefault(),wo({type:"fullscreen"});break;case"f":hs();break;case"s":Yf();break;case"o":qf();break;case"t":We("toggleSidebar").click();break;case"w":Hl(de.mode==="wire"?"original":"wire");break;case"c":Hl(de.mode==="color"?"original":"color");break;case"i":We("isolate").click();break;case"1":case"2":case"3":case"4":document.querySelectorAll("[data-view]")[Number(i.key)-1].click();break}}),window.addEventListener("beforeunload",Kf)}function Kf(){de.disposed||(de.disposed=!0,ss++,Mo?.abort(),clearTimeout(Vl),Jf(),jt?.dispose(),Th?.disconnect(),wn?.environment?.dispose(),ls?.geometry.dispose(),ls?.material.dispose(),Zn?.geometry.dispose(),Zn?.material.dispose(),Pt?.dispose())}try{if(vx(),Ex(),us(),window.chrome?.webview)window.chrome.webview.addEventListener("message",i=>{i.data?.type==="load"?Gl(i.data):Hf(i.data)}),wo({type:"ready"});else{let i=new URLSearchParams(location.search).get("model");i?Gl({url:i,filename:decodeURIComponent(i.split("/").pop()),bytes:0}):bo("\u7B49\u5F85 QuickLook \u8F7D\u5165\u6A21\u578B","\u8BF7\u5B89\u88C5\u63D2\u4EF6\u540E\uFF0C\u5728\u8D44\u6E90\u7BA1\u7406\u5668\u4E2D\u9009\u4E2D .3dm \u6587\u4EF6\u5E76\u6309\u7A7A\u683C\u3002",15)}window.__rhinoViewer={state:de,loadModel:Gl,dispose:Kf,fitAll:hs,get scene(){return wn},get camera(){return ct}}}catch(i){Xl(`\u4E09\u7EF4\u6E32\u67D3\u521D\u59CB\u5316\u5931\u8D25\uFF1A${i.message}
\u8BF7\u66F4\u65B0 WebView2 Runtime \u548C\u663E\u5361\u9A71\u52A8\u3002`)}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.8.2
  *)
*/
