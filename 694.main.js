!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ec856ada-af7a-41c9-a6bf-67ce6597dd4d",e._sentryDebugIdIdentifier="sentry-dbid-ec856ada-af7a-41c9-a6bf-67ce6597dd4d")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"3.3.44"},exports.id=694,exports.ids=[694],exports.modules={9694:(e,n,t)=>{t.r(n),t.d(n,{checkSystemFonts:()=>b,getSystemFontsFromFile:()=>g});var r=t(9591),i=t.n(r),d=t(3292),o=t(2037),a=t.n(o),f=t(1017),s=t.n(f),u=t(2496),c=t.n(u),l=t(7703),y=a().homedir(),p=s().join(y,l.nI,"system-fonts.txt"),b=function(){var e=i()((function*(){yield(0,d.mkdir)(s().join(y,l.nI),{recursive:!0});var e=(yield c()()).map((function(e){return s().parse(e).base.toLowerCase().replace(/[-|\s]/g,"_")}));yield(0,d.writeFile)(p,JSON.stringify(e),{mode:438})}));return function(){return e.apply(this,arguments)}}(),g=function(){var e=i()((function*(){if(!(yield(0,d.access)(p).then((function(){return!0}),(function(){return!1}))))return[];var e=(yield(0,d.readFile)(p,"utf-8").catch((function(){return"[]"}))).toString();return JSON.parse(e)}));return function(){return e.apply(this,arguments)}}()}};
//# sourceMappingURL=694.main.js.map