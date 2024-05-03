"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3959],{83759:function(e,t,o){o.d(t,{Z:function(){return BuilderPageSpinner}});var r=o(97458),n=o(67291),i=o(12205);let a=i.zo.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;function BuilderPageSpinner(e){let{"data-testId":t}=e;return(0,r.jsx)(a,{"data-testid":t,children:(0,r.jsx)(n.$,{size:"medium"})})}},44871:function(e,t,o){o.d(t,{h:function(){return GlobalHead}});var r=o(97458),n=o(64363),i=o.n(n),a=o(35831);function GlobalHead(){let e=(0,a.useRouter)();return(0,r.jsx)(i(),{children:!e.pathname.startsWith("/public/templates")&&(0,r.jsx)("link",{rel:"icon",href:"/icon-interfaces.svg",type:"image/svg+xml"},"favicon")})}},47649:function(e,t,o){o.d(t,{Z:function(){return MaintenancePageComponent}});var r=o(97458),n=o(32165),i=o(12205),a=o(10600);let c=i.F4`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,l=i.zo.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  background-color: ${a.xy.pageBackground};

  & > * {
    color: ${a.xy.secondaryText};
    text-align: center;
    font-family: ${a.l6.fontFamily} !important;
  }

  & > h1 {
    font-size: 42px;
    line-height: 50px;
    font-weight: 600;
  }

  & > p {
    font-size: 24px;
    line-height: 40px;
    font-weight: 400;
  }

  & > div:first-of-type {
    background-color: ${a.xy.secondaryText};
    border-radius: 100%;
    animation: ${c} 10s linear infinite !important;
    color: ${a.xy.pageBackground} !important;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;function MaintenancePageComponent(){return(0,r.jsxs)(l,{children:[(0,r.jsx)("div",{children:(0,r.jsx)(n.J,{name:"navCogFill",size:60,color:"currentColor"})}),(0,r.jsx)("h1",{children:"Down for maintenance"}),(0,r.jsxs)("p",{children:["We'll be back online in a few minutes.",(0,r.jsx)("br",{}),"Thank you for your patience."]})]})}},46079:function(e,t,o){o.d(t,{fy:function(){return ConfirmModalProvider},tv:function(){return useConfirmModal}});var r=o(97458),n=o(738),i=o(21072),a=o(91579),c=o(462),l=o(71172),s=o(80036),d=o(52983);let u={isOpen:!1,props:{title:"",text:"",onOk:()=>null,onCancel:()=>null}},p=(0,d.createContext)([u,()=>null]);function ModalConfirmation(e){let{title:t,text:o,onOk:d,onCancel:u}=e;return(0,r.jsx)(n.u,{onClosed:u,children:(0,r.jsxs)(i.hz,{maxWidth:"60ch",children:[t?(0,r.jsx)(i.dE,{children:(0,r.jsx)(a.x,{type:"subHeader3Bold",children:t})}):null,(0,r.jsx)(c.L,{height:"0px"}),(0,r.jsx)(i.nS,{children:(0,r.jsx)(a.x,{tag:"p",type:"paragraph3",color:"neutral700",children:o})}),(0,r.jsx)(c.L,{height:"30px"}),(0,r.jsxs)(l.h,{maxWidth:"300px",children:[(0,r.jsx)(s.z,{color:"primary",onClick:()=>d(),tabIndex:-1,children:"Yes"}),(0,r.jsx)(s.z,{color:"secondary",onClick:()=>u(),tabIndex:-1,children:"Cancel"})]})]})})}let ConfirmModalProvider=e=>{let{children:t}=e,[o,n]=(0,d.useState)(u);return(0,r.jsxs)(p.Provider,{value:[o,n],children:[t,o.isOpen?(0,r.jsx)(ModalConfirmation,{...o.props}):null]})},useConfirmModal=()=>{let[,e]=(0,d.useContext)(p);return{showConfirmModal:t=>{let o=new Promise((o,r)=>{e({isOpen:!0,props:{title:t.title,text:t.text,onOk:o,onCancel:r}})});return o.then(()=>(e(e=>({...e,isOpen:!1})),!0),()=>(e(e=>({...e,isOpen:!1})),!1))},closeConfirmModal:()=>{e(e=>({...e,isOpen:!1}))}}}},2841:function(e,t,o){o.d(t,{b:function(){return PageErrorBoundary}});var r=o(97458),n=o(34268),i=o(16011),a=o.n(i),c=o(226),l=o.n(c),s=o(28689),d=o(22965),u=o(2119),p=o(19743),f=o(90748);function PageErrorBoundary(e){return(0,r.jsx)(d.k,{children:t=>{let{reset:o}=t;return(0,r.jsx)(s.ErrorBoundary,{onReset:o,fallbackRender:e=>{let{error:t}=e;if((0,f.$)(t)&&(console.error("failed to fetch, reseting error boundary",t),o()),(0,u.J$)(t))return(0,u.t2)(),(0,r.jsx)(r.Fragment,{});let i=500;return a().isAxiosError(t)&&t.response&&(i=t.response.status),t instanceof n.ss&&"number"==typeof t.data?.httpStatus&&(i=t.data.httpStatus),(0,r.jsx)(l(),{statusCode:i,title:(0,p.l8)(t).replace(/\.$/,"")})},children:e.children})}})}},40946:function(e,t,o){o.d(t,{y:function(){return SkeletonTheme}});var r=o(97458),n=o(17001),i=o(51722);function SkeletonTheme(e){let{children:t}=e;return(0,r.jsx)(i.y,{baseColor:n.w.neutral200,highlightColor:n.w.neutral300,children:t})}},61374:function(e,t,o){o.d(t,{$0:function(){return useIsEmbedComponentEnabled},AF:function(){return useIsStytchAuthOptionEnabled},Kt:function(){return useIsStytchEnabled},gj:function(){return useSplitFlags},sU:function(){return SplitProvider}});var r=o(97458),n=o(52983),i=o(74382),a=o(22450),c=o.n(a),l=o(83759);let s=(0,n.createContext)(null);function SplitProvider(e){let{children:t,projectId:o}=e,{data:a,isLoading:c}=i.S.split.check.useQuery({projectId:o},{suspense:!1,useErrorBoundary:!1,meta:{noToast:!0}}),d=(0,n.useMemo)(()=>a?Object.keys(a).reduce((e,t)=>{let o="on"===a[t];return{...e,[t]:o}},{}):{},[a]);return(0,r.jsx)(s.Provider,{value:d,children:c?(0,r.jsx)(l.Z,{"data-testId":"split-page-spinner"}):t})}function useSplitFlags(e){let t=(0,n.useContext)(s);if(null===t)throw Error("useSplitFlags must be used within a SplitProvider");return c()(t,e)}function useIsStytchEnabled(){let[e]=useSplitFlags(["interfaces_stytch"]);return!0===e}function useIsEmbedComponentEnabled(){let[e]=useSplitFlags(["interfaces_embed_component"]);return!0===e}function useIsStytchAuthOptionEnabled(){let[e]=useSplitFlags(["interfaces_stytch_auth_option"]);return!0===e}},73596:function(e,t,o){o.d(t,{ZP:function(){return UserProvider},aF:function(){return useUser}});var r=o(97458),n=o(24600),i=o(34268),a=o(52983);let c=["/public","/templates","/forms"],isPathServedFromZapierCore=e=>c.some(t=>e.startsWith(t));var l=o(43629);let isPublishedPageReferer=e=>{if(!e)return!1;try{let t=new URL(e);return t.origin!==(0,l.v)().NEXT_PUBLIC_INTERFACES_BASE_URL}catch{}return!1};var s=o(74382);let d="You forgot to wrap your app in <UserProvider>",u=(0,a.createContext)({get user(){throw Error(d)},get error(){throw Error(d)},get isLoading(){throw Error(d)},syncSession:()=>{throw Error(d)}}),useUser=()=>(0,a.useContext)(u);function UserProvider(e){let{children:t,fallback:o,user:c}=e,[l,d]=(0,a.useState)(!0),[p,f]=(0,a.useState)({user:c,isLoading:!c}),m=(0,a.useMemo)(()=>l||p.user,[l,p.user]);(0,a.useEffect)(()=>{let e=isPublishedPageReferer(window.location.toString()),t=isPathServedFromZapierCore(window.location.pathname),o=e||t;d(o),o&&f(e=>({...e,isLoading:!1}))},[d,f]);let h=(0,a.useCallback)(e=>{n.v.setUser(e),f(t=>({...t,user:e,error:void 0,isLoading:!1})),localStorage.setItem("currentAccountId",e.currentAccount.toString()),localStorage.setItem("customUserId",e.zapierId.toString())},[]),g=(0,a.useCallback)(e=>{f(t=>({...t,user:void 0,error:e,isLoading:!1}))},[]),w=(0,a.useCallback)(e=>{e?.user&&h(e.user)},[h]),v=(0,a.useCallback)(e=>{e instanceof i.ss&&e.data?.code==="UNAUTHORIZED"?f(e=>({...e,user:void 0,isLoading:!1})):g(Error("Could not fetch current user"))},[g]),{data:b,error:x,refetch:C,isLoading:y}=s.S.auth.currentUser.useQuery(void 0,{enabled:!1,useErrorBoundary:!1,meta:{noToast:!0}}),E=s.S.useContext();(0,a.useEffect)(()=>{m||C()},[C,v,w,m]);let{data:k,error:j,refetch:T,isFetched:P}=s.S.auth.syncCurrentUser.useQuery(void 0,{enabled:!1,suspense:!1,useErrorBoundary:!1,meta:{noToast:!0},onSuccess(){E.projects.listListingPage.invalidate(void 0,{refetchType:"all"})}});(0,a.useEffect)(()=>{m||P||y||T()},[T,m,P,y]);let{user:F,error:S,isLoading:z}=p;return(0,a.useEffect)(()=>{w(b)},[b,w]),(0,a.useEffect)(()=>{w(k)},[k,w]),(0,a.useEffect)(()=>{x&&v(x)},[x,v]),(0,a.useEffect)(()=>{j&&v(j)},[j,v]),(0,r.jsx)(u.Provider,{value:{user:F,error:S,isLoading:z,syncSession:async()=>{await T()}},children:z&&o?o:t})}},75517:function(e,t,o){o.d(t,{W:function(){return DndProvider},z:function(){return n}});var r,n,i=o(97458),a=o(63969),c=o(16973);function DndProvider(e){return(0,i.jsx)(c.W,{backend:a.PD,children:e.children})}(r=n||(n={})).CONTENT_BLOCK="CONTENT_BLOCK",r.NEW_CONTENT_BLOCK_TYPE="NEW_CONTENT_BLOCK_TYPE"},63389:function(e,t,o){o.d(t,{x:function(){return Toaster}});var r=o(97458),n=o(17001),i=o(30431),a=o(48198),c=o(52983),l=o(91466),s=o(30231),d=o(54387),u=o(79120),p=o(12205);let f=p.zo.div`
  width: 640px;
  max-width: 100%;

  transition: opacity 0.15s;

  & [class*="AlertDescription__content"] > [class*="AlertDescription"] {
    white-space: pre-wrap !important;
  }
`,m=p.zo.a`
  color: inherit;
  text-decoration: underline;
  border-radius: 2px;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px
        ${e=>{let{theme:t}=e;return(0,u.$n)(t.app.colors.primary,.47)}},
      0 0 0 4px ${e=>{let{theme:t}=e;return t.app.colors.primary}};
  }
`,h=p.zo.code`
  color: ${n.w.neutral500};
  font-weight: 100;
  font-size: 12px;
  line-height: 24px;
  vertical-align: middle;
`;function Toaster(){let[e,t]=(0,c.useState)(!1);return((0,c.useEffect)(()=>{t(!0)},[]),e)?(0,r.jsx)(l.x7,{children:e=>(0,r.jsx)(f,{style:{opacity:e.visible?1:0},children:(0,r.jsx)(i.b,{type:function(e){switch(e){case"blank":case"loading":case"custom":return"info";case"success":return"success";case"error":return"error";default:return e}}(e.type),onDismiss:()=>l.ZP.dismiss(e.id),children:(0,r.jsx)(a.X,{children:(0,r.jsx)(s.D,{remarkPlugins:[d.Z],components:{a:e=>(0,r.jsx)(m,{...e,target:"_blank",rel:"noreferrer noopener"}),code:e=>(0,r.jsx)(h,{...e})},children:String((0,l.GK)(e.message,e))})})})})}):null}},57725:function(e,t,o){o.d(t,{Z:function(){return c}});var r=o(69666),n=r.css`
  :root {
    --Colors-zapier: #ff4f00;
    --Colors-earth: #201515;
    --Colors-neutral100: #fffdf9;
    --Colors-neutral600: #95928e;
    --Colors-neutral700: #403f3e;
    --Colors-neutral800: #2d2e2e;
    --Shadows-elevation20: #eee 0px 10px 30px 0px;
    --defaultFont: "Inter", Helvetica, arial, sans-serif;
    --paragraph3-fontFamily: var(--defaultFont);
    --paragraph3-fontSize: 16px;
    --paragraph3-lineHeight: 24px;
    --paragraph3-fontWeight: 400;
    --paragraph3Medium-fontWeight: 500;
    --paragraph3Semibold-fontWeight: 600;
    --subHeader1-fontFamily: var(--defaultFont);
    /* Lowered subheader1 font size at Nikki's request, was 24px */
    --subHeader1-fontSize: 18px;
    /* Lowered subheader1 line height to compress modal slightly, was 30px */
    --subHeader1-lineHeight: 24px;
    --subHeader1-fontWeight: 400;
    --subHeader1Semibold-fontWeight: 600;
  }

  .wootric-beacon-parent {
    min-width: 0 !important;
  }

  #wootric-modal {
    font-family: var(--defaultFont);
    border: 0 none transparent;
    width: 50vw !important;
    margin: 0 auto;
    min-width: 600px;
  }

  @media only screen and (max-width: 660px) {
    #wootric-modal {
      display: none !important;
    }
  }

  #wootric-modal .wootric-modal-collapsed {
    display: none !important;
  }

  #wootric-modal > div.wootric-beacon-parent {
    background-color: var(--Colors-neutral100);
    box-shadow: var(--Shadows-elevation20);
  }

  #wootric-modal > div.wootric-beacon-parent #wootric-form {
    font-family: var(--defaultFont) !important;
  }

  #wootric-modal > div.wootric-beacon-parent #wootric-form p,
  #wootric-modal > div.wootric-beacon-parent #wootric-form li,
  #wootric-modal > div.wootric-beacon-parent #wootric-form label {
    font-family: var(--defaultFont) !important;
  }

  #wootric-modal > div.wootric-beacon-parent #wootric-form div.wootric-question,
  #wootric-modal > div.wootric-beacon-parent #wootric-form div.thanks {
    padding-top: 30px;
    padding-bottom: 16px;
  }

  #wootric-modal
    > div.wootric-beacon-parent
    #wootric-form
    div.wootric-question
    p,
  #wootric-modal > div.wootric-beacon-parent #wootric-form div.thanks p {
    font-family: var(--subHeader1-fontFamily);
    font-size: var(--subHeader1-fontSize);
    line-height: var(--subHeader1-lineHeight);
    font-weight: var(--subHeader1Semibold-fontWeight);
  }

  #wootric-modal > div.wootric-beacon-parent #wootric-form #picklist {
    margin-bottom: 13px;
  }

  #wootric-modal > div.wootric-beacon-parent #wootric-form #picklist li {
    border-radius: 18px;
    border: 2px solid var(--Colors-zapier) !important;
    background-color: var(--Colors-neutral100);
    color: var(--Colors-zapier);
    padding: 5px 15px;
    font-family: var(--paragraph3-fontFamily);
    font-size: var(--paragraph3-fontSize);
    line-height: var(--paragraph3-lineHeight);
    font-weight: var(--paragraph3Semibold-fontWeight);
    font-size: 19px;
  }

  #wootric-modal > div.wootric-beacon-parent #wootric-form #picklist li :hover,
  #wootric-modal > div.wootric-beacon-parent #wootric-form #picklist li :focus,
  #wootric-modal
    > div.wootric-beacon-parent
    #wootric-form
    #picklist
    li
    .selected {
    background-color: var(--Colors-zapier) !important;
    color: var(--Colors-neutral100) !important;
    border: none;
    padding: 7px 17px;
  }

  #wootric-modal > div.wootric-beacon-parent #wootric-form #wootric-feedback {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto 25px auto;
  }

  #wootric-modal
    > div.wootric-beacon-parent
    #wootric-form
    #wootric-feedback
    textarea {
    border-radius: 3px;
    border-color: var(--Colors-neutral600);
    background-color: var(--Colors-neutral100);
    width: 72%;
    font-family: var(--paragraph3-fontFamily);
    font-size: var(--paragraph3-fontSize);
    line-height: var(--paragraph3-lineHeight);
    font-weight: var(--paragraph3Medium-fontWeight);
  }

  #wootric-modal
    > div.wootric-beacon-parent
    #wootric-form
    #wootric-feedback
    textarea
    ::placeholder,
  #wootric-modal
    > div.wootric-beacon-parent
    #wootric-form
    #wootric-feedback
    textarea
    ::-webkit-input-placeholder,
  #wootric-modal
    > div.wootric-beacon-parent
    #wootric-form
    #wootric-feedback
    textarea
    :-moz-placeholder,
  #wootric-modal
    > div.wootric-beacon-parent
    #wootric-form
    #wootric-feedback
    textarea
    ::-moz-placeholder,
  #wootric-modal
    > div.wootric-beacon-parent
    #wootric-form
    #wootric-feedback
    textarea
    :-ms-input-placeholder {
    color: var(--Colors-earth);
    line-height: 35px !important;
  }

  #wootric-modal
    > div.wootric-beacon-parent
    #wootric-form
    #wootric-feedback
    input {
    border-radius: 3px !important;
    background-color: var(--Colors-earth);
    height: 53px;
    margin-left: 5px !important;
  }

  #wootric-modal
    > div.wootric-beacon-parent
    #wootric-form
    .wootric-alt-anchors {
    display: none;
  }

  #wootric-modal > div.wootric-beacon-parent #wootric-form #wootric-fullscore {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #wootric-modal
    > div.wootric-beacon-parent
    #wootric-form
    #wootric-fullscore
    ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 15px;
  }

  #wootric-modal
    > div.wootric-beacon-parent
    #wootric-form
    #wootric-fullscore
    ul
    li {
    margin-bottom: 4px;
    border-radius: 3px;
    border-color: var(--Colors-neutral700);
    color: var(--Colors-neutral700);
    font-family: var(--paragraph3-fontFamily);
    font-size: var(--paragraph3-fontSize);
    line-height: var(--paragraph3-lineHeight);
    font-weight: var(--paragraph3Semibold-fontWeight);
    margin-left: 2px;
    margin-right: 2px;
    padding: 8px 15px;
  }

  #wootric-modal
    > div.wootric-beacon-parent
    #wootric-form
    #wootric-fullscore
    ul
    li
    :hover,
  #wootric-modal
    > div.wootric-beacon-parent
    #wootric-form
    #wootric-fullscore
    ul
    li
    :focus,
  #wootric-modal
    > div.wootric-beacon-parent
    #wootric-form
    #wootric-fullscore
    ul
    li
    .selected {
    background: var(--Colors-neutral700);
    color: var(--Colors-neutral100) !important;
  }

  #wootric-modal
    > div.wootric-beacon-parent
    #wootric-form
    #wootric-fullscore
    #wootric-likely-label,
  #wootric-modal
    > div.wootric-beacon-parent
    #wootric-form
    #wootric-fullscore
    #wootric-not-likely-label {
    font-family: var(--paragraph3-fontFamily);
    font-size: var(--paragraph3-fontSize);
    line-height: var(--paragraph3-lineHeight);
    font-weight: var(--paragraph3-fontWeight);
    color: var(--Colors-neutral700);
    font-style: normal;
    padding-bottom: 0 !important;
  }

  #wootric-modal > div.wootric-beacon-parent #wootric-form #wootric-close {
    border: none;
    font-size: 14px;
  }

  #wootric-modal
    > div.wootric-beacon-parent
    #wootric-form
    #wootric-close
    :hover {
    width: 100px;
  }

  #wootric-modal
    > div.wootric-beacon-parent
    #wootric-form
    #wootric-close
    #wootric-x {
    height: 20px;
    width: 20px;
    color: var(--Colors-neutral800) !important;
  }

  #wootric-modal
    > div.wootric-beacon-parent
    #wootric-form
    #wootric-close
    #wootric-dismiss {
    text-transform: capitalize;
  }

  #wootric-modal > div.wootric-beacon-parent .wootric-powered-by {
    visibility: hidden;
  }
`,i=o(12205);let a=i.vJ`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
  }

  /* Spacing reset */
  h1, h2, h3, h4, h5, h6, p, ul, ol, li, button {
    margin: 0;
  }
  
  /* Button reset */
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;

    outline: none;
    &:focus:not(:focus-visible) {
      outline: none;
    }
    &:focus:not(:-moz-focusring) {
      outline: none;
    }


    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;

    /* Normalize 'line-height'. Cannot be changed from 'normal' in Firefox 4+. */
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable 'input' types in iOS */
    -webkit-appearance: none;

    /* Remove excess padding and border in Firefox 4+ */
    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  }
  ${n}
`;var c=a},66473:function(e,t,o){o.d(t,{Z:function(){return ThemeProvider}});var r=o(97458),n=o(96734),i=o.n(n),a=o(52983),c=o(69666),l=o(73340),s=o(4660),d=o(79120),u=o(7411);function ThemeProvider(e){let{children:t,projectTheme:o,themeName:n}=e,p=n?`.${n}`:":root",f=n?`.dark.${n}, .dark .${n}`:".dark",m=s.C.LIGHT,h=(0,a.useMemo)(()=>o??(0,l.Z)(m),[o,m]),g=(0,a.useMemo)(()=>{let e=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["primary","danger","pageBackground"],o={},r={};Object.entries(e).forEach(e=>{let[n,i]=e;t.includes(n)?o[n]=i:r[n]=i});let n=function(e){let t=Object.entries(e).reduce((e,t)=>{let[o,r]=t;return e.colors.push((0,d.NC)(r)),e.names.push(o),e},{colors:[],names:[]});return(0,u.n)(t)}(o);for(let[t,o]of Object.entries(n))n[t]={DEFAULT:e[t],...o};return{...r,...n}}(h.app.colors),t=function(e){let t=function(e){let t={};for(let[o,r]of Object.entries(e))if("string"==typeof r)t[o]=r;else for(let[e,n]of Object.entries(r))"DEFAULT"===e?t[o]=n:t[`${o}-${e}`]=n;return t}(e),o="";for(let[e,r]of Object.entries(t))o+=`
${function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];let r="--zi";for(let e of t)"DEFAULT"!==e&&(r+=`-${e}`);return r}(e)}: ${(0,d.Ax)(r).replace(/hsla\((\d+),\s*(\d+)%,\s*(\d+)%,\s*([\d\.]+).+$/g,"$1 $2% $3% / $4")};`;return o}(e);return t},[h.app.colors]);return(0,r.jsxs)(c.f6,{theme:h,children:[(0,r.jsx)(i(),{id:"48780a41626b783c",dynamic:[p,g,h.app.pageWidth,f,g,h.app.pageWidth],children:`${p}{${g}

          --zi-pageWidth: ${h.app.pageWidth}px;}${f}{${g}

          --zi-pageWidth: ${h.app.pageWidth}px;}`}),n?(0,r.jsx)("div",{className:i().dynamic([["48780a41626b783c",[p,g,h.app.pageWidth,f,g,h.app.pageWidth]]])+" "+(n||""),children:t}):t]})}},12205:function(e,t,o){o.d(t,{F4:function(){return l},Fg:function(){return c},iv:function(){return i},vJ:function(){return a},zo:function(){return n}});var r=o(69666);let{default:n,css:i,createGlobalStyle:a,useTheme:c,keyframes:l}=r},10600:function(e,t,o){o.d(t,{Z8:function(){return a},ZP:function(){return getTheme},l6:function(){return n},xy:function(){return i}});var r=o(4660);let n={fontFamily:'"Inter", sans-serif',pageWidth:520,width:{narrow:"520px",medium:"864px",wide:"1156px",full:"98%"}},i={pageBackground:"#F3F6FC",primary:"#005AED",lightPrimary:"rgb(231, 239, 253)",danger:"#D62828",lightDanger:"rgb(251, 233, 233)",formError:"#D62828",text:"#152542",secondaryText:"#3E547C",white:"#ffffff",black:"#000000",gray:"#bbc4d4",darkGray:"#3E547C",mediumGray:"#a3afc4",lightGray:"#E2E7F0",superLightGray:"#FCFDFE",placeholder:"#8a91a0"},a=Object.keys(i),c={...i,themeBackground:"#F3F6FC"};function getTheme(e){return{...n,scheme:{value:e,isLight:e===r.C.LIGHT,isDark:e===r.C.DARK},colors:c}}},73340:function(e,t,o){o.d(t,{Z:function(){return themes_getTheme}});var r=o(4660);let n={},[i,a]=function(e){let t;let o={},r={};for(t in e){let n=e[t];o[t]=n[0],r[t]=n?.[1]??n[0]}let n=[o,r];return n}({});var c=o(10600);function themes_getTheme(e){return{app:(0,c.ZP)(e),builder:{...n,scheme:{value:e,isLight:e===r.C.LIGHT,isDark:e===r.C.DARK},colors:e===r.C.LIGHT?i:a}}}},4660:function(e,t,o){var r,n;o.d(t,{C:function(){return r}}),(n=r||(r={})).DARK="dark",n.LIGHT="light"},90748:function(e,t,o){o.d(t,{$:function(){return isFailedToFetchError}});function isFailedToFetchError(e){return e instanceof Error&&"Failed to fetch"===e.message}},81563:function(e,t,o){o.d(t,{NL:function(){return MixpanelContextProvider},P5:function(){return n},ou:function(){return useMixpanelContext}});var r,n,i=o(97458),a=o(73596);o(35831);var c=o(51511),l=o.n(c),s=o(52983),d=o(43629);(r=n||(n={})).CLICKED_CREATE_PROJECT="Clicked Create Project",r.CREATED_PROJECT="Created Project",r.CREATED_PAGE="Created Page",r.ADDED_COMPONENT="Added Component",r.CREATED_ACTION="Created Action",r.CREATED_FIELD="Created Field",r.UPDATED_FIELD="Updated Field",r.CREATED_TABLE="Created Table";let u=s.createContext({track:()=>{}});function useMixpanelContext(){return s.useContext(u)}let MixpanelContextProvider=e=>{let{children:t}=e,{user:o}=(0,a.aF)(),[r,n]=(0,s.useState)(!1);(0,s.useEffect)(()=>{(0,d.v)().NEXT_PUBLIC_MIXPANEL_PROJECT_ID&&!r&&(l().init((0,d.v)().NEXT_PUBLIC_MIXPANEL_PROJECT_ID,{debug:"development"===(0,d.v)().NODE_ENV}),n(!0))},[r]),(0,s.useEffect)(()=>{r&&o?.zapierId&&l().identify(`${o.zapierId}`)},[o?.zapierId,r]);let c=(0,s.useMemo)(()=>({track:(e,t)=>{r&&l().track(e,t)}}),[r]);return(0,i.jsx)(u.Provider,{value:c,children:t})}},14427:function(e,t,o){o.d(t,{L:function(){return TrackingProvider},E:function(){return useTrackingContext}});var r=o(97458),n=o(52983),i=o(35831),a=o(12539),c=o(73596),l=o(82174);let s=(0,n.createContext)({emitAiTrackingPredictionUserFeedbackEvent:()=>console.log,emitBuilderInteractionEvent:()=>console.log,emitConsumerInteractionEvent:()=>console.log,emitChatbotsConsumerInteractionEvent:()=>console.log,emitChatbotAITokenUsageReceivedEvent:()=>console.log,emitUserInteractionEvent:()=>console.log});function useTrackingContext(){return(0,n.useContext)(s)}function TrackingProvider(e){let{children:t,skipPageViewEvent:o=!1}=e,{asPath:d}=(0,i.useRouter)(),{user:u,isLoading:p}=(0,c.aF)(),f=u?.currentAccount,m=(0,n.useCallback)(e=>({system_name:l.Br,customuser_id:u?.zapierId??null,account_id:f,timestamp_ms:Date.now(),...e}),[f,u?.zapierId]),h=(0,n.useMemo)(()=>({emitAiTrackingPredictionUserFeedbackEvent:e=>{(0,a.j)({...e,...m()},"ai.tracking.PredictionUserFeedbackEvent")},emitBuilderInteractionEvent:e=>{(0,a.j)({...e,...m()},l.g1)},emitConsumerInteractionEvent:e=>{(0,a.j)({...e,...m()},l.q8)},emitChatbotsConsumerInteractionEvent:e=>{(0,a.j)({...e,...m({system_name:"chatbots"})},l.sk)},emitChatbotAITokenUsageReceivedEvent:e=>{(0,a.j)({...e,...m()},l.Ou)},emitUserInteractionEvent:e=>{(0,a.j)({...e,...m()},l.rw)}}),[m]);return(0,n.useEffect)(()=>{o||d.includes("[")&&d.includes("]")||window.navigator.userAgent.includes("Datadog")||p||(0,a.j)({system_name:"Interfaces",customuser_id:u?.zapierId??null,account_id:f},l.Qz)},[d,f,u?.zapierId,p,o]),(0,r.jsx)(s.Provider,{value:h,children:t})}},12539:function(e,t,o){o.d(t,{j:function(){return emit}});var r=o(82651),n=o(29787),i=o.n(n),a=o(74382);async function emit(e,t){let o=await (0,r.emit)(e,t);return i()(o)||o[0]||await a.u.internal.logAvroEmitFailure.mutate({eventData:e,eventType:t}),o}}}]);
//# sourceMappingURL=3959-c870851e1ab71bdb.js.map