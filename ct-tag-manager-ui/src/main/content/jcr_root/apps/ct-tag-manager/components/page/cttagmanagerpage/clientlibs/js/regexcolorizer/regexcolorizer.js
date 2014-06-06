/*! Regex Colorizer v0.3.1
 * (c) 2010-2012 Steven Levithan <http://stevenlevithan.com/regex/colorizer/>
 * MIT license
 */

/* v0.1 of this script was extracted from RegexPal v0.1.4 and named 'JavaScript Regex Syntax
 * Highlighter'. The name changed to Regex Colorizer in v0.2. Currently supports JavaScript (with
 * web reality) regex syntax only.
 */
var RegexColorizer=function(){"use strict"
    function e(e,t){return'<b class="err"'+(t?' title="'+t+'"':"")+">"+e+"</b>"}function t(e,t){return'<b class="g'+t+'">'+e+"</b>"}function n(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(e){if(document.getElementsByClassName)return document.body.getElementsByClassName(e)
        var t,n=document.body.getElementsByTagName("*"),r=RegExp("(?:^|\\s)"+e+"(?:\\s|$)"),a=[],i=n.length
        for(t=0;i>t;t++)r.test(n[t].className)&&a.push(n[t])
        return a}function a(e){if(e.length>1&&"\\"===e.charAt(0)){var t=e.slice(1)
        if(/^c[A-Za-z]$/.test(t))return"ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(t.charAt(1).toUpperCase())+1
        if(/^(?:x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4})$/.test(t))return parseInt(t.slice(1),16)
        if(/^(?:[0-3][0-7]{0,2}|[4-7][0-7]?)$/.test(t))return parseInt(t,8)
        if(1===t.length&&"cuxDdSsWw".indexOf(t)>-1)return 0/0
        if(1===t.length)switch(t){case"b":return 8
            case"f":return 12
            case"n":return 10
            case"r":return 13
            case"t":return 9
            case"v":return 11
            default:return t.charCodeAt(0)}}return"\\"!==e?e.charCodeAt(0):0/0}function i(t){var r,i,l="",c=s.exec(t),g={rangeable:!1,type:u.NONE}
        for(c={opening:c[1],content:c[2],closing:c[3]},l+=c.closing?c.opening:e(c.opening,f.UNCLOSED_CLASS);r=o.exec(c.content);)if(i=r[0],"\\"===i.charAt(0))/^\\[cux]$/.test(i)?(l+=e(i,f.INCOMPLETE_TOKEN),g={rangeable:g.type!==u.RANGE_HYPHEN}):/^\\[dsw]$/i.test(i)?(l+="<b>"+i+"</b>",g={rangeable:g.type!==u.RANGE_HYPHEN,type:u.SHORT_CLASS}):"\\"===i?l+=e(i,f.INCOMPLETE_TOKEN):(l+="<b>"+n(i)+"</b>",g={rangeable:g.type!==u.RANGE_HYPHEN,charCode:a(i)})
        else if("-"===i)if(g.rangeable){var E=o.lastIndex,b=o.exec(c.content)
            if(b){var N=a(b[0])
                l+=!isNaN(N)&&g.charCode>N||g.type===u.SHORT_CLASS||/^\\[dsw]$/i.test(b[0])?e("-",f.INVALID_RANGE):"<u>-</u>",g={rangeable:!1,type:u.RANGE_HYPHEN}}else l+=c.closing?"-":"<u>-</u>"
            o.lastIndex=E}else l+="-",g={rangeable:g.type!==u.RANGE_HYPHEN}
        else l+=n(i),g={rangeable:i.length>1||g.type!==u.RANGE_HYPHEN,charCode:i.charCodeAt(i.length-1)}
        return l+c.closing}var l={},c=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,o=/[^\\-]+|-|\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)/g,s=/^(\[\^?)(]?(?:[^\\\]]+|\\[\S\s]?)*)(]?)$/,g=/^(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??$/,u={NONE:0,RANGE_HYPHEN:1,SHORT_CLASS:2,ALTERNATOR:3},f={UNCLOSED_CLASS:"Unclosed character class",INCOMPLETE_TOKEN:"Incomplete regex token",INVALID_RANGE:"Reversed or invalid range",INVALID_GROUP_TYPE:"Invalid or unsupported group type",UNBALANCED_LEFT_PAREN:"Unclosed grouping",UNBALANCED_RIGHT_PAREN:"No matching opening parenthesis",INTERVAL_OVERFLOW:"Interval quantifier cannot use value over 65,535",INTERVAL_REVERSED:"Interval quantifier range is reversed",UNQUANTIFIABLE:"Quantifiers must be preceded by a token that can be repeated",IMPROPER_EMPTY_ALTERNATIVE:"Empty alternative effectively truncates the regex here"}
    return l.colorizeText=function(r){for(var a,l,o,s,E="",b=0,N=0,A=[],d={quantifiable:!1,type:u.NONE};a=c.exec(r);)if(l=a[0],o=l.charAt(0),s=l.charAt(1),"["===o)E+="<i>"+i(l)+"</i>",d={quantifiable:!0}
    else if("("===o)2===l.length?E+=e(l,f.INVALID_GROUP_TYPE):(1===l.length&&b++,N=5===N?1:N+1,A.push({index:E.length+'<b class="gN">'.length,opening:l}),E+=t(l,N)),d={quantifiable:!1}
    else if(")"===o)A.length?(E+=t(")",N),d={quantifiable:!/^[=!]/.test(A[A.length-1].opening.charAt(2)),style:"g"+N},N=1===N?5:N-1,A.pop()):(E+=e(")",f.UNBALANCED_RIGHT_PAREN),d={quantifiable:!1})
    else if("\\"===o)if(/^[1-9]/.test(s)){for(var p="",x=+l.slice(1);x>b;)p=/[0-9]$/.exec(x)[0]+p,x=Math.floor(x/10)
        if(x>0)E+="<b>\\"+x+"</b>"+p
        else{var R=/^\\([0-3][0-7]{0,2}|[4-7][0-7]?|[89])([0-9]*)/.exec(l)
            E+="<b>\\"+R[1]+"</b>"+R[2]}d={quantifiable:!0}}else/^[0bBcdDfnrsStuvwWx]/.test(s)?/^\\[cux]$/.test(l)?(E+=e(l,f.INCOMPLETE_TOKEN),d={quantifiable:!1}):"bB".indexOf(s)>-1?(E+="<b>"+l+"</b>",d={quantifiable:!1}):(E+="<b>"+l+"</b>",d={quantifiable:!0}):"\\"===l?E+=e(l,f.INCOMPLETE_TOKEN):(E+=n(l),d={quantifiable:!0})
    else if(g.test(l)){if(d.quantifiable){var T=/^\{([0-9]+)(?:,([0-9]*))?/.exec(l)
        E+=T&&(+T[1]>65535||T[2]&&+T[2]>65535)?e(l,f.INTERVAL_OVERFLOW):T&&T[2]&&+T[1]>+T[2]?e(l,f.INTERVAL_REVERSED):(d.style?'<b class="'+d.style+'">':"<b>")+l+"</b>"}else E+=e(l,f.UNQUANTIFIABLE)
        d={quantifiable:!1}}else"|"===l?(E+=d.type===u.NONE||d.type===u.ALTERNATOR&&!A.length?e(l,f.IMPROPER_EMPTY_ALTERNATIVE):A.length?t("|",N):"<b>|</b>",d={quantifiable:!1,type:u.ALTERNATOR}):"^"===l||"$"===l?(E+="<b>"+l+"</b>",d={quantifiable:!1}):"."===l?(E+="<b>.</b>",d={quantifiable:!0}):(E+=n(l),d={quantifiable:!0})
        var h,_,L=0
        for(_=0;_<A.length;_++)h=A[_].index+L,E=E.slice(0,h)+e(A[_].opening,f.UNBALANCED_LEFT_PAREN)+E.slice(h+A[_].opening.length),L+=e("",f.UNBALANCED_LEFT_PAREN).length
        return E},l.colorizeAll=function(e){e=e||"regex"
        var t,n,a=r(e),i=a.length
        for(n=0;i>n;n++)t=a[n],t.innerHTML=l.colorizeText(t.textContent||t.innerText)},l.addStyleSheet=function(){var e=document.createElement("style"),t=".regex       {font-family: Monospace;} .regex b     {background: #aad1f7;} .regex i     {background: #e3e3e3;} .regex i b   {background: #9fb6dc;} .regex i u   {background: #c3c3c3;} .regex b.g1  {background: #b4fa50; color: #000;} .regex b.g2  {background: #8cd400; color: #000;} .regex b.g3  {background: #26b809; color: #fff;} .regex b.g4  {background: #30ea60; color: #000;} .regex b.g5  {background: #0c8d15; color: #fff;} .regex b.err {background: #e30000; color: #fff;} .regex b, .regex i, .regex u {font-weight: normal; font-style: normal; text-decoration: none;}"
        e.id="regex-colorizer-ss",document.getElementsByTagName("head")[0].appendChild(e),e.styleSheet?e.styleSheet.cssText=t:e.innerHTML=t},l}()
