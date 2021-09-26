var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=Math.pow,i=(t,s,n)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,c=(e,t)=>{for(var s in t||(t={}))a.call(t,s)&&i(e,s,t[s]);if(n)for(var s of n(t))r.call(t,s)&&i(e,s,t[s]);return e},l=(e,n)=>t(e,s(n));import{p as h,a as u,w as d}from"./index.7bde028e.js";import{D as g,an as p,r as f,j as m,u as b,al as y,S as k,A as w,B as M,a0 as x,F as j,G as v,a1 as T,aD as I,ar as S,a5 as E,a6 as C,aC as O,aR as A,a4 as D,ac as q,K as L,N}from"./vendor.6c85a7e8.js";const P=(e,t)=>e.push.apply(e,t),$=(e,t)=>e.split("").map((e=>t[e]||e)).join(""),Y=e=>e.sort(((e,t)=>e.i-t.i||e.j-t.j)),R=e=>{const t={};let s=1;return e.forEach((e=>{t[e]=s,s+=1})),t};const G={4:[[1,2],[2,3]],5:[[1,3],[2,3]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]},F=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,W=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,B=/^[A-Z\xbf-\xdf]+$/,z=/^[^a-z\xdf-\xff]+$/,V=/^[a-z\xdf-\xff]+$/,_=/^[^A-Z\xbf-\xdf]+$/,Z=/[a-z\xdf-\xff]/,H=/[A-Z\xbf-\xdf]/,U=/[^A-Za-z\xbf-\xdf]/gi,X=/^\d+$/,K=(new Date).getFullYear(),J={recentYear:/19\d\d|200\d|201\d|202\d/g};class Q{match({password:e}){const t=[...this.getMatchesWithoutSeparator(e),...this.getMatchesWithSeparator(e)],s=this.filterNoise(t);return Y(s)}getMatchesWithSeparator(e){const t=[],s=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let n=0;n<=Math.abs(e.length-6);n+=1)for(let a=n+5;a<=n+9&&!(a>=e.length);a+=1){const r=e.slice(n,+a+1||9e9),o=s.exec(r);if(null!=o){const e=this.mapIntegersToDayMonthYear([parseInt(o[1],10),parseInt(o[3],10),parseInt(o[4],10)]);null!=e&&t.push({pattern:"date",token:r,i:n,j:a,separator:o[2],year:e.year,month:e.month,day:e.day})}}return t}getMatchesWithoutSeparator(e){const t=[],s=/^\d{4,8}$/,n=e=>Math.abs(e.year-K);for(let a=0;a<=Math.abs(e.length-4);a+=1)for(let r=a+3;r<=a+7&&!(r>=e.length);r+=1){const o=e.slice(a,+r+1||9e9);if(s.exec(o)){const e=[],s=o.length;if(G[s].forEach((([t,s])=>{const n=this.mapIntegersToDayMonthYear([parseInt(o.slice(0,t),10),parseInt(o.slice(t,s),10),parseInt(o.slice(s),10)]);null!=n&&e.push(n)})),e.length>0){let s=e[0],i=n(e[0]);e.slice(1).forEach((e=>{const t=n(e);t<i&&(s=e,i=t)})),t.push({pattern:"date",token:o,i:a,j:r,separator:"",year:s.year,month:s.month,day:s.day})}}}return t}filterNoise(e){return e.filter((t=>{let s=!1;const n=e.length;for(let a=0;a<n;a+=1){const n=e[a];if(t!==n&&n.i<=t.i&&n.j>=t.j){s=!0;break}}return!s}))}mapIntegersToDayMonthYear(e){if(e[1]>31||e[1]<=0)return null;let t=0,s=0,n=0;for(let a=0,r=e.length;a<r;a+=1){const r=e[a];if(r>99&&r<1e3||r>2050)return null;r>31&&(s+=1),r>12&&(t+=1),r<=0&&(n+=1)}return s>=2||3===t||n>=2?null:this.getDayMonth(e)}getDayMonth(e){const t=[[e[2],e.slice(0,2)],[e[0],e.slice(1,3)]],s=t.length;for(let n=0;n<s;n+=1){const[e,s]=t[n];if(1e3<=e&&e<=2050){const t=this.mapIntegersToDayMonth(s);return null!=t?{year:e,month:t.month,day:t.day}:null}}for(let n=0;n<s;n+=1){const[e,s]=t[n],a=this.mapIntegersToDayMonth(s);if(null!=a)return{year:this.twoToFourDigitYear(e),month:a.month,day:a.day}}return null}mapIntegersToDayMonth(e){const t=[e,e.slice().reverse()];for(let s=0;s<t.length;s+=1){const e=t[s],n=e[0],a=e[1];if(n>=1&&n<=31&&a>=1&&a<=12)return{day:n,month:a}}return null}twoToFourDigitYear(e){return e>99?e:e>50?e+1900:e+2e3}}var ee={a:["4","@"],b:["8"],c:["(","{","[","<"],e:["3"],g:["6","9"],i:["1","!","|"],l:["1","|","7"],o:["0"],s:["$","5"],t:["+","7"],x:["%"],z:["2"]},te={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames",userInputs:"userInputs"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};var se=new class{constructor(){this.matchers={},this.l33tTable=ee,this.dictionary={userInput:[]},this.rankedDictionaries={},this.translations=te,this.graphs={},this.availableGraphs=[],this.setRankedDictionaries()}setOptions(e={}){e.l33tTable&&(this.l33tTable=e.l33tTable),e.dictionary&&(this.dictionary=e.dictionary,this.setRankedDictionaries()),e.translations&&this.setTranslations(e.translations),e.graphs&&(this.graphs=e.graphs)}setTranslations(e){if(!this.checkCustomTranslations(e))throw new Error("Invalid translations object fallback to keys");this.translations=e}checkCustomTranslations(e){let t=!0;return Object.keys(te).forEach((s=>{if(s in e){const n=s;Object.keys(te[n]).forEach((s=>{s in e[n]||(t=!1)}))}else t=!1})),t}setRankedDictionaries(){const e={};Object.keys(this.dictionary).forEach((t=>{const s=this.dictionary[t];if("userInputs"===t){const n=[];s.forEach((e=>{const t=typeof e;"string"!==t&&"number"!==t&&"boolean"!==t||n.push(e.toString().toLowerCase())})),e[t]=R(n)}else e[t]=R(s)})),this.rankedDictionaries=e}addMatcher(e,t){if(this.matchers[e])throw new Error("Matcher already exists");this.matchers[e]=t}};class ne{constructor(e){this.defaultMatch=e}match({password:e}){const t=e.split("").reverse().join("");return this.defaultMatch({password:t}).map((t=>l(c({},t),{token:t.token.split("").reverse().join(""),reversed:!0,i:e.length-1-t.j,j:e.length-1-t.i})))}}class ae{constructor(e){this.defaultMatch=e}match({password:e}){const t=[],s=this.enumerateL33tSubs(this.relevantL33tSubtable(e,se.l33tTable));for(let a=0;a<s.length;a+=1){const r=s[a];if(n=r,0===Object.keys(n).length)break;const o=$(e,r);this.defaultMatch({password:o}).forEach((s=>{const n=e.slice(s.i,+s.j+1||9e9);if(n.toLowerCase()!==s.matchedWord){const e={};Object.keys(r).forEach((t=>{const s=r[t];-1!==n.indexOf(t)&&(e[t]=s)}));const a=Object.keys(e).map((t=>`${t} -> ${e[t]}`)).join(", ");t.push(l(c({},s),{l33t:!0,token:n,sub:e,subDisplay:a}))}}))}var n;return t.filter((e=>e.token.length>1))}relevantL33tSubtable(e,t){const s={},n={};return e.split("").forEach((e=>{s[e]=!0})),Object.keys(t).forEach((e=>{const a=t[e].filter((e=>e in s));a.length>0&&(n[e]=a)})),n}enumerateL33tSubs(e){const t=Object.keys(e);return this.getSubs(t,[[]],e).map((e=>{const t={};return e.forEach((([e,s])=>{t[e]=s})),t}))}getSubs(e,t,s){if(!e.length)return t;const n=e[0],a=e.slice(1),r=[];s[n].forEach((e=>{t.forEach((t=>{let s=-1;for(let n=0;n<t.length;n+=1)if(t[n][0]===e){s=n;break}if(-1===s){const s=t.concat([[e,n]]);r.push(s)}else{const a=t.slice(0);a.splice(s,1),a.push([e,n]),r.push(t),r.push(a)}}))}));const o=this.dedup(r);return a.length?this.getSubs(a,o,s):o}dedup(e){const t=[],s={};return e.forEach((e=>{const n=e.map(((e,t)=>[e,t]));n.sort();const a=n.map((([e,t])=>`${e},${t}`)).join("-");a in s||(s[a]=!0,t.push(e))})),t}}class re{constructor(){this.l33t=new ae(this.defaultMatch),this.reverse=new ne(this.defaultMatch)}match({password:e}){const t=[...this.defaultMatch({password:e}),...this.reverse.match({password:e}),...this.l33t.match({password:e})];return Y(t)}defaultMatch({password:e}){const t=[],s=e.length,n=e.toLowerCase();return Object.keys(se.rankedDictionaries).forEach((a=>{const r=se.rankedDictionaries[a];for(let o=0;o<s;o+=1)for(let i=o;i<s;i+=1)if(n.slice(o,+i+1||9e9)in r){const s=n.slice(o,+i+1||9e9),c=r[s];t.push({pattern:"dictionary",i:o,j:i,token:e.slice(o,+i+1||9e9),matchedWord:s,rank:c,dictionaryName:a,reversed:!1,l33t:!1})}})),t}}class oe{match({password:e,regexes:t=J}){const s=[];return Object.keys(t).forEach((n=>{const a=t[n];a.lastIndex=0;const r=a.exec(e);if(r){const e=r[0];s.push({pattern:"regex",token:e,i:r.index,j:r.index+r[0].length-1,regexName:n,regexMatch:r})}})),Y(s)}}var ie={nCk(e,t){let s=e;if(t>s)return 0;if(0===t)return 1;let n=1;for(let a=1;a<=t;a+=1)n*=s,n/=a,s-=1;return n},log10:e=>Math.log(e)/Math.log(10),log2:e=>Math.log(e)/Math.log(2),factorial(e){let t=1;for(let s=2;s<=e;s+=1)t*=s;return t}};var ce=e=>{const t=e.replace(U,"");if(t.match(_)||t.toLowerCase()===t)return 1;const s=[F,W,z],n=s.length;for(let a=0;a<n;a+=1){const e=s[a];if(t.match(e))return 2}return(e=>{const t=e.split(""),s=t.filter((e=>e.match(Z))).length,n=t.filter((e=>e.match(H))).length;let a=0;const r=Math.min(s,n);for(let o=1;o<=r;o+=1)a+=ie.nCk(s+n,o);return a})(t)};const le=({token:e,graph:t,turns:s})=>{const n=Object.keys(se.graphs[t]).length,a=(e=>{let t=0;return Object.keys(e).forEach((s=>{const n=e[s];t+=n.filter((e=>!!e)).length})),t/=Object.entries(e).length,t})(se.graphs[t]);let r=0;const i=e.length;for(let c=2;c<=i;c+=1){const e=Math.min(s,c-1);for(let t=1;t<=e;t+=1)r+=ie.nCk(c-1,t-1)*n*o(a,t)}return r};const he={bruteforce:({token:e})=>{let t,s=o(10,e.length);return s===Number.POSITIVE_INFINITY&&(s=Number.MAX_VALUE),t=1===e.length?11:51,Math.max(s,t)},date:({year:e,separator:t})=>{let s=365*Math.max(Math.abs(e-K),20);return t&&(s*=4),s},dictionary:({rank:e,reversed:t,l33t:s,sub:n,token:a})=>{const r=e,o=ce(a),i=(({l33t:e,sub:t,token:s})=>{if(!e)return 1;let n=1;const a=t;return Object.keys(a).forEach((e=>{const{subbedCount:t,unsubbedCount:r}=(({subs:e,subbed:t,token:s})=>{const n=e[t],a=s.toLowerCase().split("");return{subbedCount:a.filter((e=>e===t)).length,unsubbedCount:a.filter((e=>e===n)).length}})({subs:a,subbed:e,token:s});if(0===t||0===r)n*=2;else{const e=Math.min(r,t);let s=0;for(let n=1;n<=e;n+=1)s+=ie.nCk(r+t,n);n*=s}})),n})({l33t:s,sub:n,token:a});return{baseGuesses:r,uppercaseVariations:o,l33tVariations:i,calculation:r*o*i*(t?2:1)}},regex:({regexName:e,regexMatch:t,token:s})=>{const n={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};if(e in n)return o(n[e],s.length);switch(e){case"recentYear":return Math.max(Math.abs(parseInt(t[0],10)-K),20)}return 0},repeat:({baseGuesses:e,repeatCount:t})=>e*t,sequence:({token:e,ascending:t})=>{const s=e.charAt(0);let n=0;return n=["a","A","z","Z","0","1","9"].includes(s)?4:s.match(/\d/)?10:26,t||(n*=2),n*e.length},spatial:({graph:e,token:t,shiftedCount:s,turns:n})=>{let a=le({token:t,graph:e,turns:n});if(s){const e=t.length-s;if(0===s||0===e)a*=2;else{let t=0;for(let n=1;n<=Math.min(s,e);n+=1)t+=ie.nCk(s+e,n);a*=t}}return Math.round(a)}};var ue=(e,t)=>{const s={};if("guesses"in e&&null!=e.guesses)return e;const n=((e,t)=>{let s=1;return e.token.length<t.length&&(s=1===e.token.length?10:50),s})(e,t),a=((e,t)=>he[e]?he[e](t):se.matchers[e]&&"scoring"in se.matchers[e]?se.matchers[e].scoring(t):0)(e.pattern,e);let r=0;"number"==typeof a?r=a:"dictionary"===e.pattern&&(r=a.calculation,s.baseGuesses=a.baseGuesses,s.uppercaseVariations=a.uppercaseVariations,s.l33tVariations=a.l33tVariations);const o=Math.max(r,n);return l(c(c({},e),s),{guesses:o,guessesLog10:ie.log10(o)})};const de={password:"",optimal:{},excludeAdditive:!1,fillArray(e,t){const s=[];for(let n=0;n<e;n+=1){let e=[];"object"===t&&(e={}),s.push(e)}return s},makeBruteforceMatch(e,t){return{pattern:"bruteforce",token:this.password.slice(e,+t+1||9e9),i:e,j:t}},update(e,t){const s=e.j,n=ue(e,this.password);let a=n.guesses;t>1&&(a*=this.optimal.pi[n.i-1][t-1]);let r=ie.factorial(t)*a;this.excludeAdditive||(r+=o(1e4,t-1));let i=!1;Object.keys(this.optimal.g[s]).forEach((e=>{const n=this.optimal.g[s][e];parseInt(e,10)<=t&&n<=r&&(i=!0)})),i||(this.optimal.g[s][t]=r,this.optimal.m[s][t]=n,this.optimal.pi[s][t]=a)},bruteforceUpdate(e){let t=this.makeBruteforceMatch(0,e);this.update(t,1);for(let s=1;s<=e;s+=1){t=this.makeBruteforceMatch(s,e);const n=this.optimal.m[s-1];Object.keys(n).forEach((e=>{"bruteforce"!==n[e].pattern&&this.update(t,parseInt(e,10)+1)}))}},unwind(e){const t=[];let s=e-1,n=0,a=Infinity;const r=this.optimal.g[s];for(r&&Object.keys(r).forEach((e=>{const t=r[e];t<a&&(n=parseInt(e,10),a=t)}));s>=0;){const e=this.optimal.m[s][n];t.unshift(e),s=e.i-1,n-=1}return t}};var ge={mostGuessableMatchSequence(e,t,s=!1){de.password=e,de.excludeAdditive=s;const n=e.length;let a=de.fillArray(n,"array");t.forEach((e=>{a[e.j].push(e)})),a=a.map((e=>e.sort(((e,t)=>e.i-t.i)))),de.optimal={m:de.fillArray(n,"object"),pi:de.fillArray(n,"object"),g:de.fillArray(n,"object")};for(let c=0;c<n;c+=1)a[c].forEach((e=>{e.i>0?Object.keys(de.optimal.m[e.i-1]).forEach((t=>{de.update(e,parseInt(t,10)+1)})):de.update(e,1)})),de.bruteforceUpdate(c);const r=de.unwind(n),o=r.length,i=this.getGuesses(e,o);return{password:e,guesses:i,guessesLog10:ie.log10(i),sequence:r}},getGuesses(e,t){const s=e.length;let n=0;return n=0===e.length?1:de.optimal.g[s-1][t],n}};class pe{match({password:e,omniMatch:t}){const s=[];let n=0;for(;n<e.length;){const a=this.getGreedyMatch(e,n),r=this.getLazyMatch(e,n);if(null==a)break;const{match:o,baseToken:i}=this.setMatchToken(a,r);if(o){const e=o.index+o[0].length-1,a=this.getBaseGuesses(i,t);s.push({pattern:"repeat",i:o.index,j:e,token:o[0],baseToken:i,baseGuesses:a,repeatCount:o[0].length/i.length}),n=e+1}}return s}getGreedyMatch(e,t){const s=/(.+)\1+/g;return s.lastIndex=t,s.exec(e)}getLazyMatch(e,t){const s=/(.+?)\1+/g;return s.lastIndex=t,s.exec(e)}setMatchToken(e,t){const s=/^(.+?)\1+$/;let n,a="";if(t&&e[0].length>t[0].length){n=e;const t=s.exec(n[0]);t&&(a=t[1])}else n=t,n&&(a=n[1]);return{match:n,baseToken:a}}getBaseGuesses(e,t){return ge.mostGuessableMatchSequence(e,t.match(e)).guesses}}class fe{constructor(){this.MAX_DELTA=5}match({password:e}){const t=[];if(1===e.length)return[];let s=0,n=null;const a=e.length;for(let r=1;r<a;r+=1){const a=e.charCodeAt(r)-e.charCodeAt(r-1);if(null==n&&(n=a),a!==n){const o=r-1;this.update({i:s,j:o,delta:n,password:e,result:t}),s=o,n=a}}return this.update({i:s,j:a-1,delta:n,password:e,result:t}),t}update({i:e,j:t,delta:s,password:n,result:a}){if(t-e>1||1===Math.abs(s)){const r=Math.abs(s);if(r>0&&r<=this.MAX_DELTA){const r=n.slice(e,+t+1||9e9),{sequenceName:o,sequenceSpace:i}=this.getSequence(r);return a.push({pattern:"sequence",i:e,j:t,token:n.slice(e,+t+1||9e9),sequenceName:o,sequenceSpace:i,ascending:s>0})}}return null}getSequence(e){let t="unicode",s=26;return V.test(e)?(t="lower",s=26):B.test(e)?(t="upper",s=26):X.test(e)&&(t="digits",s=10),{sequenceName:t,sequenceSpace:s}}}class me{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:e}){const t=[];return Object.keys(se.graphs).forEach((s=>{const n=se.graphs[s];P(t,this.helper(e,n,s))})),Y(t)}checkIfShifted(e,t,s){return!e.includes("keypad")&&this.SHIFTED_RX.test(t.charAt(s))?1:0}helper(e,t,s){let n;const a=[];let r=0;const o=e.length;for(;r<o-1;){let i=r+1,c=0,l=0;for(n=this.checkIfShifted(s,e,r);;){const h=t[e.charAt(i-1)]||[];let u=!1,d=-1,g=-1;if(i<o){const t=e.charAt(i),s=h.length;for(let e=0;e<s;e+=1){const s=h[e];if(g+=1,s){const e=s.indexOf(t);if(-1!==e){u=!0,d=g,1===e&&(n+=1),c!==d&&(l+=1,c=d);break}}}}if(!u){i-r>2&&a.push({pattern:"spatial",i:r,j:i-1,token:e.slice(r,i),graph:s,turns:l,shiftedCount:n}),r=i;break}i+=1}}return a}}class be{constructor(){this.matchers={date:Q,dictionary:re,regex:oe,repeat:pe,sequence:fe,spatial:me}}match(e){const t=[];return[...Object.keys(this.matchers),...Object.keys(se.matchers)].forEach((s=>{if(!this.matchers[s]&&!se.matchers[s])return;const n=new(this.matchers[s]?this.matchers[s]:se.matchers[s].Matching);P(t,n.match({password:e,omniMatch:this}))})),Y(t)}}const ye={second:1,minute:60,hour:3600,day:86400,month:2678400,year:32140800,century:321408e4};class ke{translate(e,t){let s=e;void 0!==t&&1!==t&&(s+="s");const{timeEstimation:n}=se.translations;return n[s].replace("{base}",`${t}`)}estimateAttackTimes(e){const t={onlineThrottling100PerHour:e/(100/3600),onlineNoThrottling10PerSecond:e/10,offlineSlowHashing1e4PerSecond:e/1e4,offlineFastHashing1e10PerSecond:e/1e10},s={};return Object.keys(t).forEach((e=>{const n=t[e];s[e]=this.displayTime(n)})),{crackTimesSeconds:t,crackTimesDisplay:s,score:this.guessesToScore(e)}}guessesToScore(e){return e<1005?0:e<1000005?1:e<100000005?2:e<10000000005?3:4}displayTime(e){let t,s="centuries";const n=Object.keys(ye),a=n.findIndex((t=>e<ye[t]));return a>-1&&(s=n[a-1],0!==a?t=Math.round(e/ye[s]):s="ltSecond"),this.translate(s,t)}}var we=()=>null,Me=()=>({warning:se.translations.warnings.dates,suggestions:[se.translations.suggestions.dates]});const xe=(e,t)=>{let s="";const n=e.dictionaryName,a="lastnames"===n||n.toLowerCase().includes("firstnames");return"passwords"===n?s=((e,t)=>{let s="";return!t||e.l33t||e.reversed?e.guessesLog10<=4&&(s=se.translations.warnings.similarToCommon):s=e.rank<=10?se.translations.warnings.topTen:e.rank<=100?se.translations.warnings.topHundred:se.translations.warnings.common,s})(e,t):n.includes("wikipedia")?s=((e,t)=>{let s="";return t&&(s=se.translations.warnings.wordByItself),s})(0,t):a?s=((e,t)=>t?se.translations.warnings.namesByThemselves:se.translations.warnings.commonNames)(0,t):"userInputs"===n&&(s=se.translations.warnings.userInputs),s};var je=(e,t)=>{const s=xe(e,t),n=[],a=e.token;return a.match(F)?n.push(se.translations.suggestions.capitalization):a.match(z)&&a.toLowerCase()!==a&&n.push(se.translations.suggestions.allUppercase),e.reversed&&e.token.length>=4&&n.push(se.translations.suggestions.reverseWords),e.l33t&&n.push(se.translations.suggestions.l33t),{warning:s,suggestions:n}},ve=e=>"recentYear"===e.regexName?{warning:se.translations.warnings.recentYears,suggestions:[se.translations.suggestions.recentYears,se.translations.suggestions.associatedYears]}:{warning:"",suggestions:[]},Te=e=>{let t=se.translations.warnings.extendedRepeat;return 1===e.baseToken.length&&(t=se.translations.warnings.simpleRepeat),{warning:t,suggestions:[se.translations.suggestions.repeated]}},Ie=()=>({warning:se.translations.warnings.sequences,suggestions:[se.translations.suggestions.sequences]}),Se=e=>{let t=se.translations.warnings.keyPattern;return 1===e.turns&&(t=se.translations.warnings.straightRow),{warning:t,suggestions:[se.translations.suggestions.longerKeyboardPattern]}};const Ee={warning:"",suggestions:[]};class Ce{constructor(){this.matchers={bruteforce:we,date:Me,dictionary:je,regex:ve,repeat:Te,sequence:Ie,spatial:Se},this.defaultFeedback={warning:"",suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(se.translations.suggestions.useWords,se.translations.suggestions.noNeed)}getFeedback(e,t){if(0===t.length)return this.defaultFeedback;if(e>2)return Ee;const s=se.translations.suggestions.anotherWord,n=this.getLongestMatch(t);let a=this.getMatchFeedback(n,1===t.length);return null!=a?(a.suggestions.unshift(s),null==a.warning&&(a.warning="")):a={warning:"",suggestions:[s]},a}getLongestMatch(e){let t=e[0];return e.slice(1).forEach((e=>{e.token.length>t.token.length&&(t=e)})),t}getMatchFeedback(e,t){return this.matchers[e.pattern]?this.matchers[e.pattern](e,t):se.matchers[e.pattern]&&"feedback"in se.matchers[e.pattern]?se.matchers[e.pattern].feedback(e,t):Ee}}const Oe=()=>(new Date).getTime();var Ae=g({name:"StrengthMeter",components:{InputPassword:p.Password},props:{value:h.string,showInput:h.bool.def(!0),disabled:h.bool},emits:["score-change","change"],setup(e,{emit:t}){const s=f(""),{prefixCls:n}=u("strength-meter"),a=m((()=>{const{disabled:n}=e;if(n)return-1;const a=b(s)?(e=>{const t=new Ce,s=new be,n=new ke,a=Oe(),r=s.match(e),o=ge.mostGuessableMatchSequence(e,r),i=Oe()-a,h=n.estimateAttackTimes(o.guesses);return l(c(c({calcTime:i},o),h),{feedback:t.getFeedback(h.score,o.sequence)})})(b(s)).score:-1;return t("score-change",a),a}));return y((()=>{s.value=e.value||""})),k((()=>b(s)),(e=>{t("change",e)})),{getPasswordStrength:a,handleChange:function(e){s.value=e.target.value},prefixCls:n,innerValueRef:s}}});w("data-v-686393d8");const De=["data-score"];M(),Ae.render=function(e,t,s,n,a,r){const o=x("InputPassword");return j(),v("div",{class:N([e.prefixCls,"relative"])},[e.showInput?(j(),T(o,D({key:0},e.$attrs,{allowClear:"",value:e.innerValueRef,onChange:e.handleChange,disabled:e.disabled}),I({_:2},[S(Object.keys(e.$slots),(t=>({name:t,fn:E((s=>[C(e.$slots,t,O(A(s||{})),void 0,!0)]))})))]),1040,["value","onChange","disabled"])):q("",!0),L("div",{class:N(`${e.prefixCls}-bar`)},[L("div",{class:N(`${e.prefixCls}-bar--fill`),"data-score":e.getPasswordStrength},null,10,De)],2)],2)},Ae.__scopeId="data-v-686393d8";const qe=d(Ae);export{qe as S};
