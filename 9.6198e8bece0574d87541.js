(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3AzP":function(e){e.exports={home:{featureProductList:[{deleted:!1,categoryId:"a13642a1-9ef8-4d20-b0e1-b501efa4b666",unavailable:!1,featureProduct:!0,thumbImage:"https://quiz-ocean.s3.us-east-2.amazonaws.com/survey-quiz/spiderman.jpg",id:"d11a3e13-7c5f-4b70-a02a-09e74c8f0152",price:"",description:"Do you know all of Spider-man or not? Take this interactive quiz and you will see the results in a matter of a few minutes! Good luck!!",name:"How well do you know Spider-man"},{deleted:!1,categoryId:"a13642a1-9ef8-4d20-b0e1-b501efa4b666",unavailable:!1,featureProduct:!0,thumbImage:"https://quiz-ocean.s3.us-east-2.amazonaws.com/survey-quiz/superheros/batman.JPG",id:"12ca372c-7cbd-44fc-86a0-dc26f9322101",price:"",description:"The Dark Knight has many secrets that you need to uncover in this gk questions quiz",name:"The Ultimate Dark Night Trivia"},{quantity:"1",deleted:!1,categoryId:"a13642a1-9ef8-4d20-b0e1-b501efa4b666",unavailable:!1,featureProduct:!0,thumbImage:"https://quiz-ocean.s3.us-east-2.amazonaws.com/survey-quiz/superheros/ironman.JPG",id:"8affce15-9dfc-47ac-89c5-f8c941a59033",price:"",description:"Do you consider yourself an expert in all things Iron-Man? This Iron Man Quiz will really tickle your brain cells. ",name:"Iron Man Quiz: Only A True Tony Stark Fan Will Pass",discount:"0"}],categoryProductList:[{id:"a13642a1-9ef8-4d20-b0e1-b501efa4b666",name:"Comics heroes",productList:[{deleted:!1,categoryId:"a13642a1-9ef8-4d20-b0e1-b501efa4b666",unavailable:!1,featureProduct:!0,thumbImage:"https://quiz-ocean.s3.us-east-2.amazonaws.com/survey-quiz/spiderman.jpg",id:"d11a3e13-7c5f-4b70-a02a-09e74c8f0152",price:"",description:"Do you know all of Spider-man or not? Take this interactive quiz and you will see the results in a matter of a few minutes! Good luck!!",name:"How well do you know Spider-man"},{deleted:!1,categoryId:"a13642a1-9ef8-4d20-b0e1-b501efa4b666",unavailable:!1,featureProduct:!0,thumbImage:"https://quiz-ocean.s3.us-east-2.amazonaws.com/survey-quiz/superheros/batman.JPG",id:"12ca372c-7cbd-44fc-86a0-dc26f9322101",price:"",description:"The Dark Knight has many secrets that you need to uncover in this gk questions quiz",name:"The Ultimate Dark Night Trivia"},{deleted:!1,categoryId:"a13642a1-9ef8-4d20-b0e1-b501efa4b666",thumbImage:"https://quiz-ocean.s3.us-east-2.amazonaws.com/survey-quiz/superheros/hulk.JPG",price:"",description:" Can you qualify the Incredible HULK quiz?",id:"9a0ad794-af81-42e3-beb1-c9a723b5a705",name:"Are you the hulk?"},{deleted:!1,categoryId:"a13642a1-9ef8-4d20-b0e1-b501efa4b666",unavailable:!1,featureProduct:!1,thumbImage:"https://quiz-ocean.s3.us-east-2.amazonaws.com/survey-quiz/superheros/superman.JPG",id:"aca751fb-7bcc-4304-a745-99eaf1f4765f",price:"",description:"How well do you know about DC Comics' most famous character? Test Your Superhero Knowledge In Our Superman Quiz.",name:"Think you know Superman"},{quantity:"1",deleted:!1,categoryId:"a13642a1-9ef8-4d20-b0e1-b501efa4b666",unavailable:!1,featureProduct:!0,thumbImage:"https://quiz-ocean.s3.us-east-2.amazonaws.com/survey-quiz/superheros/ironman.JPG",id:"8affce15-9dfc-47ac-89c5-f8c941a59033",price:"",description:"Do you consider yourself an expert in all things Iron-Man? This Iron Man Quiz will really tickle your brain cells. ",name:"Iron Man Quiz: Only A True Tony Stark Fan Will Pass",discount:"0"}]},{id:"66334235-842e-46e2-be1e-1507818f4d28",name:"Sports",productList:[{deleted:!1,categoryId:"66334235-842e-46e2-be1e-1507818f4d28",unavailable:!1,featureProduct:!1,thumbImage:"https://quiz-ocean.s3.us-east-2.amazonaws.com/survey-quiz/Cricket-Quiz.png",id:"32826c8e-bdcc-4c25-9bc1-4696feeb5830",price:"",name:"Cricket"}]},{id:"bf25c5cb-ccd9-46a7-a392-a249392fb75d",name:"General Knowledge",productList:[{deleted:!1,categoryId:"bf25c5cb-ccd9-46a7-a392-a249392fb75d",unavailable:!0,featureProduct:!0,thumbImage:"https://quiz-ocean.s3.us-east-2.amazonaws.com/survey-quiz/corona-virus.jpg",id:"b290678a-88b8-4710-8406-7e19d87e9ebd",price:"",name:"Corona Virus"}]}]},category:{categoryProductList:null},product:{categoryList:null,category:null,productList:null},detail:{productDetail:null},trivia:{productDetail:null,triviaQuizList:null}}},"uP/6":function(e,t,n){"use strict";n.r(t);var a,r=n("CcnG"),o=n("UsAD"),s=n("yGQT");!function(e){e.DASHBOARD_INIT="[DASHBOARD] Make Request",e.DASHBOARD_SUCCESS="[DASHBOARD_SUCCESS] Request success",e.DASHBOARD_FAILED="[DASHBOARD_FAILED] Request failed"}(a||(a={}));var i=function(){return function(){this.type=a.DASHBOARD_INIT}}(),u=function(){return function(e){this.dashboardData=e,this.type=a.DASHBOARD_SUCCESS}}(),l=function(){return function(){this.type=a.DASHBOARD_FAILED}}(),c=function(){function e(e){this.store$=e,this.inProgress$=this.store$.pipe(Object(s.w)((function(e){return e.dashboard.inProgress}))),this.dashboardData$=this.store$.pipe(Object(s.w)((function(e){return e.dashboard.dashboardData})))}return e.prototype.getDashboard=function(){this.store$.dispatch(new i)},e.ngInjectableDef=r.U({factory:function(){return new e(r.Y(s.n))},token:e,providedIn:"root"}),e}(),d=n("5IsW"),p=n("W+6E"),b=n("oO6F"),f=(n("6233"),function(){function e(e,t,n,a,r){this.db=e,this.cartHelperService=t,this.dashboardHelperService=n,this.router=a,this.dialog=r,this.inProgress$=this.dashboardHelperService.inProgress$,this.dashboardData$=this.dashboardHelperService.dashboardData$}return e.prototype.ngOnInit=function(){var e=this;this.pageLabel=d.a,window.scrollTo(0,0),this.productList=o,this.dashboardHelperService.getDashboard(),this.maxProductDisplayed=10,this.dashboardHelperService.dashboardData$.subscribe((function(t){e.categoryProductList=t.categoryProductList})),this.getTodo().subscribe((function(e){return console.log(e)}))},e.prototype.createTodo=function(){return this.db.list("trivia-8affce15-9dfc-47ac-89c5-f8c941a59033").push({home:{featureProductList:null,categoryProductList:null},category:{categoryProductList:null},product:{categoryList:null,category:null,productList:null},detail:{productDetail:null},trivia:{productDetail:{quantity:"1",deleted:!1,categoryId:"a13642a1-9ef8-4d20-b0e1-b501efa4b666",unavailable:!1,featureProduct:!0,thumbImage:"https://quiz-ocean.s3.us-east-2.amazonaws.com/survey-quiz/superheros/ironman.JPG",id:"8affce15-9dfc-47ac-89c5-f8c941a59033",price:"",description:"Do you consider yourself an expert in all things Iron-Man? This Iron Man Quiz will really tickle your brain cells. ",name:"Iron Man Quiz: Only A True Tony Stark Fan Will Pass",discount:"0"},triviaQuizList:[{question:"When did Iron Man first appear in comics?",id:"e4d09cf4-7d42-4e0c-bd8e-871e79b11c96",answers:[{answer:"1950",points:"0",status:"false"},{answer:"1963",points:"0",status:"false"},{answer:"1972",points:"0",status:"false"},{answer:"1976",points:"0",status:"false"}]},{question:"What was the name of the peacekeeping AI Stark built?",id:"8ebafcf4-f064-410c-9849-238cff0fbb5a",answers:[{answer:"Ultron",points:"0",status:"false"},{answer:"Thanos",points:"0",status:"false"},{answer:"Loki",points:"0",status:"false"},{answer:"Falcon",points:"0",status:"false"}]},{question:"Who did Iron Man face off against in Civil War?",id:"9733ae65-412d-4327-ac8e-20d94eca6044",answers:[{answer:"Ant man",points:"0",status:"false"},{answer:"Black Panther",points:"0",status:"false"},{answer:"Spiderman",points:"0",status:"false"},{answer:"Captain America",points:"0",status:"false"}]},{question:"What super-team is Iron Man a founding member of?",id:"727784d7-228d-4602-8f77-11cbada25312",answers:[{answer:"Destructor",points:"0",status:"false"},{answer:"Avengers",points:"0",status:"false"},{answer:"X- Team",points:"0",status:"false"},{answer:"Defenders",points:"0",status:"false"}]},{question:"What is the name of Tony Stark father?",id:"37b51c19-d78f-48ec-9dfa-64766af13d44",answers:[{answer:"Howard",points:"0",status:"false"},{answer:"Jason",points:"0",status:"false"},{answer:"Richard",points:"0",status:"false"},{answer:"Thomas",points:"0",status:"false"}]},{question:"What is the name of the device in Tony chest?",id:"c822cbd9-42d4-414c-88c5-375663ce431b",answers:[{answer:"Arc Cylender",points:"0",status:"false"},{answer:"Arc Reactor",points:"0",status:"false"},{answer:"Strak Reactor",points:"0",status:"false"},{answer:"Tony Cylender",points:"0",status:"false"}]},{question:"What is the name of Iron Man's computer system?",id:"5399aad3-eced-4c37-a10a-f1267a508a26",answers:[{answer:"Hogan",points:"0",status:"false"},{answer:"Rescue",points:"0",status:"false"},{answer:"Starker",points:"0",status:"false"},{answer:"Jarvis",points:"0",status:"false"}]},{question:"What is Pepper allergic to?",id:"dae921b3-b3f4-4bd3-82de-53c657ba40b6",answers:[{answer:"Peanuts",points:"0",status:"false"},{answer:"Mango",points:"0",status:"false"},{answer:"Strawberries",points:"0",status:"false"},{answer:"Apple",points:"0",status:"false"}]},{question:"What is the name of Tony Stark company?",id:"dc8756ce-935b-4de3-8aa7-e4e474bdfaeb",answers:[{answer:"Tony Corp",points:"0",status:"false"},{answer:"Strak Industries",points:"0",status:"false"},{answer:"Tony Industries",points:"0",status:"false"},{answer:"Stark Corp",points:"0",status:"false"}]}]}})},e.prototype.getTodo=function(){return this.db.list("category").valueChanges()},e.prototype.onScroll=function(){this.categoryProductList&&this.maxProductDisplayed<this.categoryProductList.length&&(this.maxProductDisplayed=this.maxProductDisplayed+10)},e.prototype.categorySelectAction=function(e){this.router.navigate(["product/",e])},e.prototype.productSelectAction=function(e){var t=this,n={id:e.id,name:e.name,quantity:e.quantity,thumbImage:e.thumbImage,unavailable:e.unavailable,description:e.description,price:e.price,productCount:"0"};this.dialog.open(p.a,{data:n}).afterClosed().subscribe((function(e){e&&t.router.navigate(["trivia-quiz/",n.id])}))},e}()),h=function(){return function(){}}(),m=n("pMnS"),g=n("Nygj"),y=n("+xVf"),w=n("U0Dd"),z=n("Ip0R"),v=n("dU8u"),P=n("3iKN"),D=n("ZYCi"),S=n("o3x0"),I=r.pb({encapsulation:0,styles:[[".dashboard-view[_ngcontent-%COMP%]{margin-top:70px}.dashboard-view[_ngcontent-%COMP%]   .dashboard-container[_ngcontent-%COMP%]{padding:30px}.marketing[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]{margin-bottom:1.5rem;text-align:center}.marketing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:400}.marketing[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-right:.75rem;margin-left:.75rem}.featurette-divider[_ngcontent-%COMP%]{margin:20px 0}.featurette-heading[_ngcontent-%COMP%]{font-weight:300;line-height:1;letter-spacing:-.05rem}@media (min-width:40em){.featurette-heading[_ngcontent-%COMP%]{font-size:50px}}@media (min-width:62em){.featurette-heading[_ngcontent-%COMP%]{margin-top:7rem}}"]],data:{}});function q(e){return r.Hb(0,[(e()(),r.rb(0,0,null,null,2,"div",[["class","product-info col-xl-2 col-lg-3 col-md-4 col-sm-6"]],null,null,null,null,null)),(e()(),r.rb(1,0,null,null,1,"app-product-info",[],null,[[null,"productSelectAction"]],(function(e,t,n){var a=!0;return"productSelectAction"===t&&(a=!1!==e.component.productSelectAction(n)&&a),a}),y.b,y.a)),r.qb(2,114688,null,0,w.a,[],{product:[0,"product"]},{productSelectAction:"productSelectAction"})],(function(e,t){e(t,2,0,t.context.$implicit)}),null)}function A(e){return r.Hb(0,[(e()(),r.rb(0,0,null,null,5,"div",[["class","dashboard-container"]],null,null,null,null,null)),(e()(),r.rb(1,0,null,null,0,"h3",[],[[8,"textContent",0]],null,null,null,null)),(e()(),r.rb(2,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(e()(),r.ib(16777216,null,null,2,null,q)),r.qb(4,278528,null,0,z.j,[r.Q,r.M,r.s],{ngForOf:[0,"ngForOf"]},null),r.Bb(131072,z.b,[r.h])],(function(e,t){var n=t.component;e(t,4,0,r.Gb(t,4,0,r.Ab(t,5).transform(n.dashboardData$)).featureProductList)}),(function(e,t){e(t,1,0,t.component.pageLabel["home.featureProduct"])}))}function k(e){return r.Hb(0,[(e()(),r.rb(0,0,null,null,2,"div",[["class","col-xl-2 col-lg-3 col-md-4 col-sm-6 mt-30"]],null,null,null,null,null)),(e()(),r.rb(1,0,null,null,1,"app-product-info",[],null,[[null,"productSelectAction"]],(function(e,t,n){var a=!0;return"productSelectAction"===t&&(a=!1!==e.component.productSelectAction(n)&&a),a}),y.b,y.a)),r.qb(2,114688,null,0,w.a,[],{product:[0,"product"]},{productSelectAction:"productSelectAction"})],(function(e,t){e(t,2,0,t.context.$implicit)}),null)}function O(e){return r.Hb(0,[(e()(),r.rb(0,0,null,null,5,"div",[["class","dashboard-container"]],null,null,null,null,null)),(e()(),r.rb(1,0,null,null,1,"h3",[["class","cursor-pointer"]],null,[[null,"click"]],(function(e,t,n){var a=!0;return"click"===t&&(a=!1!==e.component.categorySelectAction(e.context.$implicit.id)&&a),a}),null,null)),(e()(),r.Fb(2,null,["",""])),(e()(),r.rb(3,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(e()(),r.ib(16777216,null,null,1,null,k)),r.qb(5,278528,null,0,z.j,[r.Q,r.M,r.s],{ngForOf:[0,"ngForOf"]},null)],(function(e,t){e(t,5,0,t.context.$implicit.productList)}),(function(e,t){e(t,2,0,t.context.$implicit.name)}))}function C(e){return r.Hb(0,[(e()(),r.rb(0,0,null,null,8,"div",[["class","dashboard-view"]],null,null,null,null,null)),(e()(),r.ib(16777216,null,null,2,null,A)),r.qb(2,16384,null,0,z.k,[r.Q,r.M],{ngIf:[0,"ngIf"]},null),r.Bb(131072,z.b,[r.h]),(e()(),r.rb(4,0,null,null,4,"div",[["infiniteScroll",""]],null,[[null,"scrolled"]],(function(e,t,n){var a=!0;return"scrolled"===t&&(a=!1!==e.component.onScroll()&&a),a}),null,null)),r.qb(5,4866048,null,0,v.a,[r.k,r.z],{infiniteScrollDistance:[0,"infiniteScrollDistance"],infiniteScrollThrottle:[1,"infiniteScrollThrottle"]},{scrolled:"scrolled"}),(e()(),r.ib(16777216,null,null,2,null,O)),r.qb(7,278528,null,0,z.j,[r.Q,r.M,r.s],{ngForOf:[0,"ngForOf"]},null),r.Bb(0,z.p,[])],(function(e,t){var n=t.component;e(t,2,0,r.Gb(t,2,0,r.Ab(t,3).transform(n.dashboardData$)).featureProductList),e(t,5,0,2,50),e(t,7,0,r.Gb(t,7,0,r.Ab(t,8).transform(n.categoryProductList,0,n.maxProductDisplayed)))}),null)}function T(e){return r.Hb(0,[(e()(),r.rb(0,0,null,null,1,"app-dashboard-view",[],null,null,null,C,I)),r.qb(1,114688,null,0,f,[P.a,b.a,c,D.k,S.e],null,null)],(function(e,t){e(t,1,0)}),null)}var L=r.nb("app-dashboard-view",f,T,{},{},[]),M=n("gIcY"),_=n("mEXF"),H=n("lLAP"),x=n("dWZg"),j=n("OBdK"),R=n("phXh"),F=n("ATwL"),$=n("aDyJ"),G=n("mrSG"),B=n("jYNz"),W=n("F/XL"),J=n("6blF"),Q=n("15JJ"),U=n("67Y/"),N=n("9Z1F"),Y=n("teW0"),E=n("3AzP"),K=n("xuF4"),X=function(){function e(e,t){this.appConfig=e,this.baseService=t}return e.prototype.getDashboard=function(){return new J.a((function(e){e.next(E),e.complete()}))},e.prototype.mapDashboardResponse=function(e){return e.home?{featureProductList:this.mapProduct(e.home.featureProductList)||[],categoryProductList:e.home.categoryProductList||[]}:null},e.prototype.mapProduct=function(e){return e.map((function(e){return{name:e.name,id:e.id,categoryId:e.categoryId,price:e.price,description:e.description,quantity:e.quantity,thumbImage:e.thumbImage,discount:e.discount||0,productCount:e.productCount||0}}))},e.prototype.getHTTPRequest=function(){return{headers:"",params:"",body:{home:{featureProduct:d.b["home.featureProduct"],productCount:d.b["home.productCount"]}}}},e.ngInjectableDef=r.U({factory:function(){return new e(r.Y(K.a),r.Y(Y.a))},token:e,providedIn:"root"}),e}(),Z=function(){function e(e,t){var n=this;this.service=e,this.actions$=t,this.performDashboard$=this.actions$.pipe(Object(B.j)(a.DASHBOARD_INIT),Object(Q.a)((function(e){return n.service.getDashboard().pipe(Object(U.a)((function(e){return new u(n.service.mapDashboardResponse(e))})),Object(N.a)((function(e){return Object(W.a)(new l)})))})))}return e.ngInjectableDef=r.U({factory:function(){return new e(r.Y(X),r.Y(B.a))},token:e,providedIn:"root"}),G.__decorate([Object(B.c)(),G.__metadata("design:type",J.a)],e.prototype,"performDashboard$",void 0),e}(),V={inProgress:!1,error:!1,dashboardData:{featureProductList:null,categoryProductList:null}};function ee(e,t){switch(void 0===e&&(e=G.__assign({},V)),t.type){case a.DASHBOARD_INIT:return G.__assign({},e,{inProgress:!0,error:!1});case a.DASHBOARD_SUCCESS:return G.__assign({},e,{inProgress:!1,error:!1,dashboardData:t.dashboardData});case a.DASHBOARD_FAILED:return G.__assign({},e,{inProgress:!1,error:!0});default:return e}}var te=n("U1H4"),ne=n("Fzqc"),ae=n("Wf4p"),re=n("ZYjt"),oe=n("J12g"),se=n("SMsm"),ie=n("PCNd");n.d(t,"DashboardModuleNgFactory",(function(){return ue}));var ue=r.ob(h,[],(function(e){return r.yb([r.zb(512,r.j,r.db,[[8,[m.a,g.a,L]],[3,r.j],r.x]),r.zb(4608,M.p,M.p,[]),r.zb(4608,z.m,z.l,[r.u,[2,z.u]]),r.zb(4608,_.b,_.b,[]),r.zb(135680,H.a,H.a,[r.z,x.a]),r.zb(4608,j.e,j.e,[r.M]),r.zb(4608,R.a,R.a,[]),r.zb(4608,F.a,F.b,[]),r.zb(4608,$.b,$.a,[]),r.zb(4608,Z,Z,[X,B.a]),r.zb(1073742336,D.l,D.l,[[2,D.r],[2,D.k]]),r.zb(1024,B.p,(function(){return[[Z]]}),[]),r.zb(1024,B.h,(function(){return[[]]}),[]),r.zb(1024,B.q,(function(e,t,n){return[B.k(e,t,n)]}),[r.q,B.p,B.h]),r.zb(1024,s.H,(function(){return[{}]}),[]),r.zb(1024,s.j,(function(){return[{key:"dashboard",reducerFactory:s.s,metaReducers:[],initialState:void 0}]}),[]),r.zb(1024,s.I,s.O,[r.q,s.H,s.j]),r.zb(1024,s.G,(function(){return[ee]}),[]),r.zb(1024,s.J,(function(e){return[e]}),[s.G]),r.zb(1024,s.b,(function(e,t,n){return[s.P(e,t,n)]}),[r.q,s.G,s.J]),r.zb(1073873408,s.o,s.o,[s.I,s.b,s.g,s.p]),r.zb(1073742336,B.e,B.e,[B.f,B.q,[2,s.p],[2,s.o]]),r.zb(1073742336,M.n,M.n,[]),r.zb(1073742336,M.d,M.d,[]),r.zb(1073742336,z.c,z.c,[]),r.zb(1073742336,te.a,te.a,[]),r.zb(1073742336,_.a,_.a,[]),r.zb(1073742336,j.c,j.c,[]),r.zb(1073742336,ne.a,ne.a,[]),r.zb(1073742336,ae.b,ae.b,[[2,ae.a],[2,re.g]]),r.zb(1073742336,oe.a,oe.a,[]),r.zb(1073742336,se.a,se.a,[]),r.zb(1073742336,ie.a,ie.a,[]),r.zb(1073742336,v.b,v.b,[]),r.zb(1073742336,h,h,[]),r.zb(1024,D.i,(function(){return[[{path:"",component:f,pathMatch:"full"}]]}),[])])}))}}]);