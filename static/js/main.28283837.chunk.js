(this.webpackJsonpdisneyclone=this.webpackJsonpdisneyclone||[]).push([[0],{88:function(e,n,t){},90:function(e,n,t){"use strict";t.r(n);var r,i,o,c,a,s,d,m,l,j,h,b,g,x,p,u,O,f,w,v,y,I,k,z,R,A,E,S,L,N,T,_,F,D,B=t(2),H=t(27),V=t.n(H),X=t(31),W=t(43),P={name:"",email:"",photo:""},U=Object(W.a)({setUserLoginDetailsRedu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"Login":return e.name=n.payload.name,e.email=n.payload.email,e.photo=n.payload.photo,e;default:return e}},setSignoutRedu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"Logout":return e.name="",e.email="",e.photo="",e;default:return e}}}),C=Object(W.b)(U,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),G=t(14),Y=t(12),J=t(7),M=t(8),K=t(37),Q=t.n(K),q=t(47),Z=t(42),$=t(3),ee=M.a.ul(r||(r=Object(J.a)(["\n    display:flex;\n    justify-content:space-around;\n    align-items:center;\n    list-style:none;\n    max-width: 55rem;\n    width: 100%;\n    @media(max-width:768px)\n    {\n        display:none;\n\n    }\n"]))),ne=M.a.li(i||(i=Object(J.a)(['\n    margin: 1rem 0rem 1rem 0rem;\n    color: white;\n    text-decoration: none;\n    font-size: 1.5rem;\n    font-family: inherit;\n    font-weight: 700;\n    text-align: center;\n    justify-content:space-around;\n    display:flex;\n\n\n    /* for underline effect */\n    &:before{\n        content: "";\n    height: 2px;\n    position: absolute;\n    bottom: 10px;\n    background-color: white;\n    max-width:7rem;\n    width:100%;\n    transform-origin: left center;\n    transform: scaleX(0);\n    transition:all 250ms cubic-bezier(0.075, 0.82, 0.165, 0.95);\n    visibility:hidden;\n    opacity:0;\n\n    }\n\n    &:hover{\n        &:before{\n            transform:scaleX(1);\n            visibility:visible;\n            opacity:1;\n        }\n    }\n\n    /* border: 2px solid;\n    border-top: none;\n    border-left: none;\n    border-right: none; */\n']))),te=Object(M.a)(G.b)(o||(o=Object(J.a)(["\n    text-decoration:none;\ncursor: pointer;\n\n"]))),re=function(){return Object($.jsx)($.Fragment,{children:Object($.jsxs)(ee,{children:[Object($.jsx)(te,{exact:!0,to:"/home",children:Object($.jsx)(ne,{children:"TV"})}),Object($.jsx)(te,{exact:!0,to:"/home",children:Object($.jsx)(ne,{children:"Movies"})}),Object($.jsx)(te,{exact:!0,to:"/home",children:Object($.jsx)(ne,{children:"Sports"})}),Object($.jsx)(te,{exact:!0,to:"/home",children:Object($.jsx)(ne,{children:"News"})}),Object($.jsx)(te,{exact:!0,to:"/home",children:Object($.jsx)(ne,{children:"Premium"})})]})})},ie=t(29),oe=(ie.a.initializeApp({apiKey:"AIzaSyAhk3nA9-sW_3us8YNWLPBuWWFH99XAY6E",authDomain:"disney-clone-abhi-11e95.firebaseapp.com",projectId:"disney-clone-abhi-11e95",storageBucket:"disney-clone-abhi-11e95.appspot.com",messagingSenderId:"578616622860",appId:"1:578616622860:web:b905b71bed4963c7c31329",measurementId:"G-Y36LNBQTW8"}).firestore(),ie.a.auth()),ce=new ie.a.auth.GoogleAuthProvider,ae=(ie.a.storage(),M.a.nav(c||(c=Object(J.a)(["\n    display: flex;\n    justify-content:center;\n    align-items:center;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin: 0;\n    background-color: #12121e;\n\n"])))),se=M.a.img(a||(a=Object(J.a)(["\n    max-width: 7rem;\n    margin: 1rem 0rem 1rem 4rem;\n    width:100%;\n"]))),de=M.a.button(s||(s=Object(J.a)(["\nmargin-left: auto;\nmargin-right: 2rem;\n    padding: 1rem;\n    font-family: inherit;\n    font-weight: 700;\n    margin-bottom:1rem;\n    margin-top:1rem;\n    outline:none;\n    border:none;\n    border-radius:2px;\n\n    &:hover{\n        background-color:#12121e;\n        color:white;\n    }\n    \n"]))),me=M.a.img(d||(d=Object(J.a)(["\n    cursor: pointer;\n    width: 4rem;\n    height: 4rem;\n    border-radius: 17rem;\n\n"]))),le=M.a.div(m||(m=Object(J.a)(["\n    cursor: pointer;\n    padding: 0.5rem;\n    position: absolute;\n    top: 5rem;\n    right: 0rem;\n    font-size: 1.5rem;\n    opacity:0;\n"]))),je=M.a.div(l||(l=Object(J.a)(["\nmargin: 1rem 2rem 1rem auto;\nbackground: #110f24;\n    border-radius: 1rem;\n\n    &:hover{\n        ","{\n            opacity:1;\n            transition-duration:1s\n        }\n    }\n"])),le),he=function(){Object(X.b)();var e=Object(Y.f)(),n=Object(B.useState)(""),t=Object(Z.a)(n,2),r=t[0],i=t[1],o=Object(B.useState)(""),c=Object(Z.a)(o,2),a=c[0],s=c[1],d=function(){a?a&&oe.signOut().then((function(){i(""),s(""),e.push("/")})).catch((function(e){console.log(e.message)})):oe.signInWithPopup(ce).then((function(e){console.log(e.user),i(e.user.photoURL),s(e.user.displayName)})).catch((function(e){alert("Try Again")}))};return Object(B.useEffect)((function(){oe.onAuthStateChanged(function(){var e=Object(q.a)(Q.a.mark((function e(n){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&(i(n.photoURL),s(n.displayName));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[a]),Object($.jsx)($.Fragment,{children:Object($.jsxs)(ae,{children:[Object($.jsx)("a",{href:"/",children:Object($.jsx)(se,{src:"/Images/logo.svg",href:"/"})}),Object($.jsx)(re,{}),""==a?Object($.jsx)($.Fragment,{children:Object($.jsx)(de,{type:"button",onClick:d,children:"LOGIN"})}):Object($.jsx)($.Fragment,{children:Object($.jsxs)(je,{children:[Object($.jsx)(me,{src:r}),Object($.jsx)(le,{children:Object($.jsx)("span",{onClick:d,children:"Sign Out"})})]})})]})})},be=M.a.div(j||(j=Object(J.a)(["\noverflow:hidden;\n        display: flex;\n        flex-direction: column;\n        justify-content:center;\n        align-items:center;\n        text-align: center;\n        height: 100vh;\n    "]))),ge=M.a.div(h||(h=Object(J.a)(["\ndisplay:flex;\nflex-direction:column;\n    \n"]))),xe=M.a.div(b||(b=Object(J.a)(["\nheight:100vh;\nwidth:100vw;\nbackground-image:url('/Images/login-background.jpg');\nposition:absolute;\nz-index:-1;\ntop:0;\nleft:0;\n"]))),pe=M.a.div(g||(g=Object(J.a)(["\nmargin:1rem 2rem 1rem 2rem;\n"]))),ue=M.a.p(x||(x=Object(J.a)(["\nmax-width:60rem;\n    margin:0rem 3rem 1rem 3rem;\n       font-size: 1.2rem;\n    font-family: sans-serif;\n    font-weight: 600;\n    line-height: 1.9rem; \n    letter-spacing:2px;\n"]))),Oe=M.a.img(p||(p=Object(J.a)(["\n        max-width: 60rem;\n    width: 100%;\n    margin: 1rem 0rem 0rem 0rem;\n"]))),fe=M.a.button(u||(u=Object(J.a)(["\n    max-width: 60rem;\n    width: 100%;\n    height: 5rem;\n    background-color: #0d54c0;\n    outline: none;\n    border: none;\n    border-radius: 0.5rem;\n    color: white;\n    font-size: 1.7rem;\n    font-weight: 700;\n    cursor: pointer;\n    text-transform:capitalize;\n\n    &:hover{\n        background-color:#023786;\n    }\n"]))),we=function(){return Object(B.useEffect)((function(){document.title="Login | Disney"})),Object($.jsx)($.Fragment,{children:Object($.jsxs)(be,{children:[Object($.jsx)(xe,{}),Object($.jsx)(he,{}),Object($.jsxs)(ge,{children:[Object($.jsx)(pe,{children:Object($.jsx)(Oe,{src:"/Images/cta-logo-one.svg",alt:""})}),Object($.jsx)(pe,{children:Object($.jsx)("a",{href:"/home",children:Object($.jsx)(fe,{children:"GET ALL THERE"})})}),Object($.jsx)(ue,{children:"\xa9 2021 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks, Inc. All rights reserved."}),Object($.jsx)(pe,{children:Object($.jsx)(Oe,{src:"/Images/cta-logo-two.png",alt:""})})]})]})})},ve=t(45),ye=t(51),Ie=t.n(ye),ke=(t(85),t(86),Object(M.a)(Ie.a)(O||(O=Object(J.a)(["\nwidth:90vw;\nposition: relative;\n    top: 7rem;\n    left: 7rem;\n\n    @media(max-width:786px){\n        left:2rem;\n    }\n\n    &>button{\n        opacity:0;\n\n        &:hover{\n            opacity:1;\n            transition:opacity 0.2s ease 0s\n        }\n\n    }\n\n    ul li button{\n        &:before{\n            font-size:1rem;\n            color:white;\n        }\n    }\n\n    .slick-list{\n        overflow:initial;\n    }\n\n"])))),ze=M.a.div(f||(f=Object(J.a)(["\n    cursor:pointer;\n    padding:1rem;\n    border:none;\n    outline:none;\n    @media(max-width:786px){\n        padding:0rem\n    }\n    "]))),Re=M.a.img(w||(w=Object(J.a)(["\n    width: 100%;\n    border-radius:1rem;\n    border:none;\n    outline:none;\n    padding:0.5rem;\n\n    &:hover{\n        padding:0rem;\n        border: 0.5rem solid white;\n        transition:500ms;   \n    }\n    @media(max-width:786px){\n        padding:0.3rem;\n\n        &:hover{\n        padding:0rem;\n        border: 0.3rem solid white;\n        transition:500ms;   \n        }\n    }\n"]))),Ae=function(){return Object($.jsx)($.Fragment,{children:Object($.jsxs)(ke,Object(ve.a)(Object(ve.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0}),{},{children:[Object($.jsx)(ze,{children:Object($.jsx)(Re,{src:"/Images/slider-badag.jpg"})}),Object($.jsx)(ze,{children:Object($.jsx)(Re,{src:"/Images/slider-badging.jpg"})}),Object($.jsx)(ze,{children:Object($.jsx)(Re,{src:"/Images/slider-scale.jpg"})}),Object($.jsx)(ze,{children:Object($.jsx)(Re,{src:"/Images/slider-scales.jpg"})})]}))})},Ee=M.a.div(v||(v=Object(J.a)(["\n    margin-top: 12rem;\n    display:flex;\n    justify-content:space-around;\n    align-items:center;\n\n    @media(max-width:786px){\n        flex-flow:column;\n\n        img{\n            margin-bottom:3rem;\n        }\n    }\n\n"]))),Se=M.a.div(y||(y=Object(J.a)(["\nmax-width: 25rem;\nheight: 16rem;\npadding: 1rem;\nborder-radius: 1rem;\ntransition: transform 450ms;\nborder: 4px solid #23232d;\n\n&:hover{\n    transform: scale(1.07);\n    border: 2px solid white;\n\n    video{\n        opacity:1;\n    }\n\n    }\n\n    video{\n        top: -153px;\n        height: 19rem;\n        position: relative;\n        left: -10px;\n        width: 24rem;\n        z-index: -1;\n        opacity: 0;\n    }\n\n    @media(max-width:786px){\n\n            margin-bottom:3rem;\n            video{\n                top: -187px;\n    }\n        \n    }\n\n"]))),Le=M.a.img(I||(I=Object(J.a)(["\nwidth:100%;\n   \n&:hovervideo{\n    opacity:1;\n}\n\n"]))),Ne=function(){return Object($.jsxs)(Ee,{children:[Object($.jsxs)(Se,{children:[Object($.jsx)(Le,{src:"/Images/viewers-disney.png"}),Object($.jsx)("video",{width:"100",height:"350",autoplay:"true",loop:"true",playsInline:"true",preload:!0,children:Object($.jsx)("source",{src:"/Videos/disney.mp4",type:"video/mp4"})})]}),Object($.jsxs)(Se,{children:[Object($.jsx)(Le,{src:"/Images/viewers-marvel.png"}),Object($.jsx)("video",{width:"100",height:"350",autoplay:"true",loop:"true",playsInline:"true",preload:!0,children:Object($.jsx)("source",{src:"/Videos/marvel.mp4",type:"video/mp4"})})]}),Object($.jsxs)(Se,{children:[Object($.jsx)(Le,{src:"/Images/viewers-national.png"}),Object($.jsx)("video",{width:"100",height:"350",autoplay:"true",loop:"true",playsInline:"true",preload:!0,children:Object($.jsx)("source",{src:"/Videos/natgeo.mp4",type:"video/mp4"})})]}),Object($.jsxs)(Se,{children:[Object($.jsx)(Le,{src:"/Images/viewers-pixar.png"}),Object($.jsx)("video",{width:"100",height:"350",autoplay:"true",loop:"true",playsInline:"true",preload:!0,children:Object($.jsx)("source",{src:"/Videos/pixar.mp4",type:"video/mp4"})})]}),Object($.jsxs)(Se,{children:[Object($.jsx)(Le,{src:"/Images/viewers-starwars.png"}),Object($.jsx)("video",{width:"100",height:"350",autoplay:"true",loop:"true",playsInline:"true",preload:!0,children:Object($.jsx)("source",{src:"/Videos/starwars.mp4",type:"video/mp4"})})]})]})},Te=M.a.div(k||(k=Object(J.a)(["\n    margin-top: 3rem;\n    margin-bottom: 10rem;\n    \n "]))),_e=M.a.h1(z||(z=Object(J.a)(["\n    margin-left:3rem;\n\n    "]))),Fe=M.a.div(R||(R=Object(J.a)(["\ndisplay:flex;\n    justify-content:space-around;\n    align-items:center;\n    margin: 2rem 0rem 2rem 0rem;\n    width: 100%;\n    padding: 2rem;\n    overflow-x: scroll;\n    overflow-y: hidden;\n\n    &::-webkit-scrollbar{\n    display: none;\n}\n"]))),De=M.a.img(A||(A=Object(J.a)(["\n    max-height: 17rem;\n    max-height: 30rem;\n    margin-right: 1rem;\n    object-fit: contain;\n    transition: transform 450ms;\n    box-shadow: 1rem 1rem 1rem #000000;\n    &:hover{\n        transform:scale(1.10);\n    }\n    \n    "]))),Be=function(){return Object($.jsxs)(Te,{children:[Object($.jsx)(_e,{children:"Recommended for you"}),Object($.jsxs)(Fe,{children:[Object($.jsx)(G.b,{exact:!0,to:"/detail/img1",children:Object($.jsx)(De,{src:"/RecommendImg/img1.jpg"})}),Object($.jsx)(G.b,{exact:!0,to:"/detail/img2",children:Object($.jsx)(De,{src:"/RecommendImg/img2.jpg"})}),Object($.jsx)(G.b,{exact:!0,to:"/detail/img3",children:Object($.jsx)(De,{src:"/RecommendImg/img3.jpg"})}),Object($.jsx)(G.b,{exact:!0,to:"/detail/img4",children:Object($.jsx)(De,{src:"/RecommendImg/img4.jpg"})}),Object($.jsx)(G.b,{exact:!0,to:"/detail/img5",children:Object($.jsx)(De,{src:"/RecommendImg/img5.jpg"})}),Object($.jsx)(G.b,{exact:!0,to:"/detail/img6",children:Object($.jsx)(De,{src:"/RecommendImg/img6.jpeg"})})]})]})},He=M.a.div(E||(E=Object(J.a)(["\n    position: absolute;\n    \n    left: 0;\n    background: url(/Images/home-background.png) center center/cover;\n    min-height: calc(100vh);\n    width: 100vw;\n    z-index: -2;\n\n"]))),Ve=function(){return Object(B.useEffect)((function(){document.title="Home | Disney"})),Object($.jsxs)($.Fragment,{children:[Object($.jsx)(he,{}),Object($.jsxs)(He,{children:[Object($.jsx)(Ae,{}),Object($.jsx)(Ne,{}),Object($.jsx)(Be,{})]})]})},Xe=t(41),We=t.n(Xe),Pe=t(52),Ue=t.n(Pe),Ce=t(53),Ge=t.n(Ce),Ye=M.a.div(S||(S=Object(J.a)(["\n    position: relative;\n    left: 5rem;\n    top: 10rem;\n    display:flex;\n    flex-direction:column;\n    padding:2rem;\n    width:auto;\n\n    @media(max-width:786px){\n        left: 0rem;\n        top:8rem;\n        padding:1rem;\n    }\n    \n\n"]))),Je=M.a.p(L||(L=Object(J.a)(["\nmax-width: 60rem;\n    margin-top: 2rem;\n    font-size: 1.2rem;\n    font-family: system-ui;\n    font-weight: 500;\n    letter-spacing: 0.2rem;\n    @media(max-width:786px){\n        font-size: 1rem;\n    }\n"]))),Me=M.a.p(N||(N=Object(J.a)(["\nmax-width: 70rem;\n    margin-top: 2rem;\n    font-size: 1.5rem;\n    font-family: system-ui;\n    font-weight: 700;\n    letter-spacing: 0.2rem;\n    @media(max-width:786px){\n        font-size: 1.3rem;\n    }\n"]))),Ke=M.a.div(T||(T=Object(J.a)(["\n    \n    display:flex;\n    justify-content:flex-start;\n    align-items:center;\n\n    a{\n        text-decoration:none;\n    }\n    \n\n"]))),Qe=M.a.button(_||(_=Object(J.a)(["\n    \n    height: 5rem;\n    width: 9rem;\n    outline: none;\n    border-radius: 0.5rem;\n    border:1px solid white;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    font-family: revert;\n    font-weight: bolder;\n    background-color: #2d3a36;\n    color: white;\n    transition:transform 450ms;\n    text-decoration:none;\n    svg{\n        font-size:3rem;\n    }\n\n    &:hover{\n        background-color:white;\n        color:black;\n        transform:scale(1.10);\n    }\n\n    @media(max-width:786px){\n        height: 4rem;\n    width: 7rem;\n    svg{\n        font-size:2rem;\n    }\n    }\n\n\n\n"]))),qe=M.a.button(F||(F=Object(J.a)(["\nmargin-left: 2rem;\n    height: 5rem;\n    width: 12rem;\n    outline: none;\n    border-radius: 0.5rem;\n    border:1px solid white;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    font-family: revert;\n    font-weight: bolder;\n    background-color: #2d3a36;\n    color: white;\n    transition:transform 450ms;\n    svg{\n        font-size:3rem;\n    }\n\n    &:hover{\n        background-color:white;\n        color:black;\n        transform:scale(1.10);\n    }\n\n    @media(max-width:786px){\n        height: 4rem;\n    width: 10rem;\n    svg{\n        font-size:2rem;\n    }\n    }\n\n\n"]))),Ze=M.a.button(D||(D=Object(J.a)(["\nmargin-left: 2rem;\n    height: 4rem;\n    width: 4rem;\n    outline: none;\n    border-radius: 4rem;\n    border:1px solid white;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    font-family: revert;\n    font-weight: bolder;\n    background-color: #2d3a36;\n    color: white;\n    transition:transform 450ms;\n    svg{\n        font-size:3rem;\n    }\n\n    &:hover{\n        background-color:white;\n        color:black;\n        transform:scale(1.10);\n    }\n\n"]))),$e=function(e){var n=e.imgNo,t={background:"url(/Detail/".concat(n,".jpg) no-repeat center center/cover"),height:"100vh",width:"100vw",position:"absolute",top:0,left:0,zIndex:-1,display:"flex",alignItems:"center"};return Object($.jsx)($.Fragment,{children:Object($.jsx)("div",{style:t,children:Object($.jsxs)(Ye,{children:[Object($.jsxs)(Ke,{children:[Object($.jsx)(G.b,{exact:!0,to:"/",children:Object($.jsxs)(Qe,{children:[Object($.jsx)(We.a,{}),"PLAY"]})}),Object($.jsx)(G.b,{exact:!0,to:"/",children:Object($.jsxs)(qe,{children:[Object($.jsx)(We.a,{}),"TRAILER"]})}),Object($.jsx)(G.b,{exact:!0,to:"/",children:Object($.jsx)(Ze,{children:Object($.jsx)(Ue.a,{})})}),Object($.jsx)(G.b,{exact:!0,to:"/",children:Object($.jsx)(Ze,{children:Object($.jsx)(Ge.a,{})})})]}),Object($.jsx)(Je,{children:"2hr 17min | 2017 | Fantasy, Animation, Comedy, Action , Horror"}),Object($.jsx)(Me,{children:"\xa9 2021 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved."})]})})})},en=function(){Object(B.useEffect)((function(){document.title="Movie | Disney"}));var e=Object(Y.g)().imgNo;return console.log(e),Object($.jsxs)($.Fragment,{children:[Object($.jsx)(he,{}),Object($.jsx)($e,{imgNo:e})]})},nn=function(){return Object($.jsx)(G.a,{children:Object($.jsxs)(Y.c,{children:[Object($.jsx)(Y.a,{exact:!0,path:"/",component:we}),Object($.jsx)(Y.a,{path:"/home",component:Ve}),Object($.jsx)(Y.a,{path:"/detail/:imgNo",component:en})]})})};t(88);V.a.render(Object($.jsx)(X.a,{store:C,children:Object($.jsx)(nn,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.28283837.chunk.js.map