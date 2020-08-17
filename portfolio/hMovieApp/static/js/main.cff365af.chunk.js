(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[0],{38:function(e,t,n){e.exports=n.p+"static/media/noPoster.ff4cebf1.png"},47:function(e,t,n){e.exports=n(75)},75:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(39),o=n.n(i),c=n(16),l=n(4),u=n(3),s=n(2);function p(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n"]);return p=function(){return e},e}function m(){var e=Object(u.a)(["\n  width: 80px;\n  height: 50px;\n  border-bottom: 3px solid\n    ",";\n  text-align: center;\n  transition: border-bottom 0.3s ease-in-out;\n"]);return m=function(){return e},e}function d(){var e=Object(u.a)(["\n  display: flex;\n"]);return d=function(){return e},e}function g(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  padding: 0px 10px;\n  color: white;\n  background-color: rgba(20, 20, 20, 1);\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n  z-index: 10;\n"]);return g=function(){return e},e}var v=s.c.header(g()),f=s.c.ul(d()),h=s.c.li(m(),(function(e){return e.current?"#3498db":"transparent"})),b=Object(s.c)(c.b)(p()),E=Object(l.g)((function(e){var t=e.location.pathname;return a.a.createElement(v,null,a.a.createElement(f,null,a.a.createElement(h,{current:"/"===t},a.a.createElement(b,{to:"/"},"Movie")),a.a.createElement(h,{current:"/tv"===t},a.a.createElement(b,{to:"/tv"},"TV")),a.a.createElement(h,{current:"/search"===t},a.a.createElement(b,{to:"/search"},"Search"))))})),x=n(7),y=n.n(x),_=n(10),j=n(11),O=n(12),k=n(13),w=n(14),S=n(43),T=n.n(S).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"10923b261ba94d897ac6b81148314a3f",language:"en-US"}}),M=function(){return T.get("movie/now_playing")},R=function(){return T.get("movie/upcoming")},U=function(){return T.get("movie/popular")},z=function(e){return T.get("movie/".concat(e),{params:{append_to_response:"videos"}})},C=function(e){return T.get("search/movie",{params:{query:encodeURIComponent(e)}})},A=function(){return T.get("tv/top_rated")},P=function(){return T.get("tv/popular")},F=function(){return T.get("tv/airing_today")},I=function(e){return T.get("tv/".concat(e),{params:{append_to_response:"videos"}})},V=function(e){return T.get("search/tv",{params:{query:encodeURIComponent(e)}})},N=n(9),B=n(15),D=n(21);function L(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  margin-top: 20px;\n  font-size: 28px;\n"]);return L=function(){return e},e}var q=s.c.div(L()),J=function(){return a.a.createElement(q,null,a.a.createElement("span",{role:"img","aria-label":"Loading"},a.a.createElement(B.a,{icon:D.a})))};function H(){var e=Object(u.a)(["\n  color: ",";\n"]);return H=function(){return e},e}function G(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]);return G=function(){return e},e}var K=s.c.div(G()),Q=s.c.span(H(),(function(e){return e.color})),W=function(e){var t=e.text,n=e.color;return a.a.createElement(K,null,a.a.createElement(Q,{color:n},t))};function X(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n  margin-top: 25px;\n"]);return X=function(){return e},e}function Y(){var e=Object(u.a)(["\n  font-size: 16px;\n  font-weight: 600;\n"]);return Y=function(){return e},e}function Z(){var e=Object(u.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return Z=function(){return e},e}var $=s.c.div(Z()),ee=s.c.span(Y()),te=s.c.div(X()),ne=function(e){var t=e.title,n=e.children;return a.a.createElement($,null,a.a.createElement(ee,null,t),a.a.createElement(te,null,n))},re=n(22);function ae(){var e=Object(u.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return ae=function(){return e},e}function ie(){var e=Object(u.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]);return ie=function(){return e},e}function oe(){var e=Object(u.a)(["\n  position: relative;\n  margin-bottom: 5px;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return oe=function(){return e},e}function ce(){var e=Object(u.a)(["\n  position: absolute;\n  right: 5px;\n  bottom: 5px;\n  opacity: 0;\n"]);return ce=function(){return e},e}function le(){var e=Object(u.a)(["\n  height: 180px;\n  border-radius: 4px;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n\n  transition: opacity 0.1s linear;\n"]);return le=function(){return e},e}function ue(){var e=Object(u.a)(["\n  font-size: 12px;\n"]);return ue=function(){return e},e}var se=s.c.div(ue()),pe=s.c.div(le(),(function(e){return e.bgUrl})),me=s.c.span(ce()),de=s.c.div(oe(),pe,me),ge=s.c.span(ie()),ve=s.c.span(ae()),fe=function(e){var t=e.id,r=e.title,i=e.imageUrl,o=e.rating,l=e.year,u=e.isMovie,s=void 0!==u&&u;return a.a.createElement(c.b,{to:s?"/movie/".concat(t):"/tv/".concat(t)},a.a.createElement(se,null,a.a.createElement(de,null,a.a.createElement(pe,{bgUrl:i?"https://image.tmdb.org/t/p/w300".concat(i):n(38)}),a.a.createElement(me,null,a.a.createElement("span",{role:"img","aria-label":"rating"},a.a.createElement(B.a,{icon:re.a,style:{color:"gold"}}))," ",o,"/10")),a.a.createElement(ge,null,r.length>18?"".concat(r.substring(0,18),"..."):r),a.a.createElement(ve,null,l)))};function he(){var e=Object(u.a)(["\n  padding: 20px;\n"]);return he=function(){return e},e}var be=s.c.div(he()),Ee=function(e){var t=e.nowPlaying,n=e.upcoming,r=e.popular,i=e.loading,o=e.error;return a.a.createElement(a.a.Fragment,null,a.a.createElement(N.a,null,a.a.createElement("title",null,"Movie | hMovieApp")),i?a.a.createElement(J,null):a.a.createElement(be,null,t&&t.length>0&&a.a.createElement(ne,{title:"Now Playing Movies"},t.map((function(e){return a.a.createElement(fe,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),n&&n.length>0&&a.a.createElement(ne,{title:"Upcoming Movies"},n.map((function(e){return a.a.createElement(fe,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),r&&r.length>0&&a.a.createElement(ne,{title:"Popular Movies"},r.map((function(e){return a.a.createElement(fe,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),o&&a.a.createElement(W,{text:o,color:"#e74c3c"})))},xe=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={nowPlaying:null,upcoming:null,popular:null,loading:!0,error:null},e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=Object(_.a)(y.a.mark((function e(){var t,n,r,a,i,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M();case 3:return t=e.sent,n=t.data.results,e.next=7,R();case 7:return r=e.sent,a=r.data.results,e.next=11,U();case 11:i=e.sent,o=i.data.results,this.setState({nowPlaying:n,upcoming:a,popular:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find Movie information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,r=e.popular,i=e.loading,o=e.error;return a.a.createElement(Ee,{nowPlaying:t,upcoming:n,popular:r,loading:i,error:o})}}]),n}(a.a.Component);function ye(){var e=Object(u.a)(["\n  padding: 20px;\n"]);return ye=function(){return e},e}var _e=s.c.div(ye()),je=function(e){var t=e.topRated,n=e.popular,r=e.airingToday,i=e.loading,o=e.error;return a.a.createElement(a.a.Fragment,null,a.a.createElement(N.a,null,a.a.createElement("title",null,"Movie | hMovieApp")),i?a.a.createElement(J,null):a.a.createElement(_e,null,a.a.createElement(N.a,null,a.a.createElement("title",null,"TV | hMovieApp")),t&&t.length>0&&a.a.createElement(ne,{title:"Top Rated TV Shows"},t.map((function(e){return a.a.createElement(fe,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),n&&n.length>0&&a.a.createElement(ne,{title:"Popular TV Shows"},n.map((function(e){return a.a.createElement(fe,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),r&&r.length>0&&a.a.createElement(ne,{title:"Airing Today TV Shows"},r.map((function(e){return a.a.createElement(fe,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),o&&a.a.createElement(W,{text:o,color:"#e74c3c"})))},Oe=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={topRated:null,popular:null,airingToday:null,loading:!0,error:null},e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=Object(_.a)(y.a.mark((function e(){var t,n,r,a,i,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A();case 3:return t=e.sent,n=t.data.results,e.next=7,P();case 7:return r=e.sent,a=r.data.results,e.next=11,F();case 11:i=e.sent,o=i.data.results,this.setState({topRated:n,popular:a,airingToday:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,r=e.airingToday,i=e.loading,o=e.error;return a.a.createElement(je,{topRated:t,popular:n,airingToday:r,loading:i,error:o})}}]),n}(a.a.Component);function ke(){var e=Object(u.a)(["\n  all: unset;\n  width: 100%;\n  font-size: 28px;\n"]);return ke=function(){return e},e}function we(){var e=Object(u.a)(["\n  width: 100%;\n  margin-bottom: 50px;\n"]);return we=function(){return e},e}function Se(){var e=Object(u.a)(["\n  padding: 20px;\n"]);return Se=function(){return e},e}var Te=s.c.div(Se()),Me=s.c.form(we()),Re=s.c.input(ke()),Ue=function(e){var t=e.searchTerm,n=e.movieResults,r=e.tvResults,i=e.loading,o=e.error,c=e.handleSubmit,l=e.updateTerm;return a.a.createElement(Te,null,a.a.createElement(N.a,null,a.a.createElement("title",null,"Search | hMovieApp")),a.a.createElement(Me,{onSubmit:c},a.a.createElement(Re,{placeholder:"Search Movie or TV Show...",value:t,onChange:l})),i?a.a.createElement(J,null):a.a.createElement(a.a.Fragment,null,n&&n.length>0&&a.a.createElement(ne,{title:"Movie Results"},n.map((function(e){return a.a.createElement(fe,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),r&&r.length>0&&a.a.createElement(ne,{title:"TV Results"},r.map((function(e){return a.a.createElement(fe,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),o&&a.a.createElement(W,{text:o,color:"#e74c3c"}),r&&n&&0===r.length&&0===n.length&&a.a.createElement(W,{text:"Nothing Found",color:"#95a5a6"})))},ze=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={searchTerm:"",movieResults:null,tvResults:null,loading:!1,error:null},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=Object(_.a)(y.a.mark((function t(){var n,r,a,i,o;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,e.setState({loading:!0}),t.prev=2,t.next=5,C(n);case 5:return r=t.sent,a=r.data.results,t.next=9,V(n);case 9:i=t.sent,o=i.data.results,e.setState({movieResults:a,tvResults:o}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),e.setState({error:"Can't find result"});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])}))),e}return Object(O.a)(n,[{key:"render",value:function(){var e=this.state,t=e.searchTerm,n=e.movieResults,r=e.tvResults,i=e.loading,o=e.error;return a.a.createElement(Ue,{searchTerm:t,movieResults:n,tvResults:r,loading:i,error:o,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(a.a.Component);function Ce(){var e=Object(u.a)(["\n  width: 50%;\n  font-size: 12px;\n  line-height: 1.5;\n  opacity: 0.7;\n"]);return Ce=function(){return e},e}function Ae(){var e=Object(u.a)(["\n  margin: 0 10px;\n"]);return Ae=function(){return e},e}function Pe(){var e=Object(u.a)([""]);return Pe=function(){return e},e}function Fe(){var e=Object(u.a)([""]);return Fe=function(){return e},e}function Ie(){var e=Object(u.a)(["\n  display: flex;\n  margin: 20px 0;\n"]);return Ie=function(){return e},e}function Ve(){var e=Object(u.a)(["\n  font-size: 32px;\n"]);return Ve=function(){return e},e}function Ne(){var e=Object(u.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]);return Ne=function(){return e},e}function Be(){var e=Object(u.a)(["\n  width: 30%;\n  height: 100%;\n  border-radius: 5px;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n"]);return Be=function(){return e},e}function De(){var e=Object(u.a)(["\n  display: flex;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n"]);return De=function(){return e},e}function Le(){var e=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n"]);return Le=function(){return e},e}function qe(){var e=Object(u.a)(["\n  position: relative;\n  width: 100%;\n  height: calc(100vh - 80px);\n  padding: 50px;\n"]);return qe=function(){return e},e}var Je=s.c.div(qe()),He=s.c.div(Le(),(function(e){return e.bgImage})),Ge=s.c.div(De()),Ke=s.c.div(Be(),(function(e){return e.bgImage})),Qe=s.c.div(Ne()),We=s.c.h3(Ve()),Xe=s.c.div(Ie()),Ye=s.c.span(Fe()),Ze=s.c.div(Pe()),$e=s.c.span(Ae()),et=s.c.p(Ce()),tt=function(e){for(var t=e.rating,n=[],r=0;r<5;++r)r<t?n.push(a.a.createElement(B.a,{key:r,icon:re.a,style:{color:"gold"}})):n.push(a.a.createElement(B.a,{key:r,icon:D.b,style:{color:"gold"}}));return n},nt=function(e){var t=e.result,r=e.loading,i=e.error;return r?a.a.createElement(a.a.Fragment,null,a.a.createElement(N.a,null,a.a.createElement("title",null,"Loading | hMovieApp")),a.a.createElement(J,null)):i?a.a.createElement(W,{text:i,color:"#e74c3c"}):a.a.createElement(Je,null,a.a.createElement(N.a,null,a.a.createElement("title",null,t.original_title?t.original_title:t.original_name," ","| hMovieApp")),a.a.createElement(He,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),a.a.createElement(Ge,null,a.a.createElement(Ke,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(38)}),a.a.createElement(Qe,null,a.a.createElement(We,null,t.original_title?t.original_title:t.original_name),a.a.createElement(Xe,null,a.a.createElement(Ye,null,t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)),a.a.createElement($e,null,"\x07"),a.a.createElement(Ye,null,t.runtime?t.runtime:t.episode_run_time[0]," min"),a.a.createElement($e,null,"\x07"),a.a.createElement(Ye,null,t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))),a.a.createElement($e,null,"\x07"),a.a.createElement(Ze,{title:t.vote_average},a.a.createElement(tt,{rating:Math.round(t.vote_average/2)}))),a.a.createElement(et,null,t.overview))))},rt=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(e){var r;Object(j.a)(this,n),r=t.call(this,e);var a=e.location.pathname;return r.state={result:null,isMovie:a.includes("/movie/"),loading:!0,error:null},r}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=Object(_.a)(y.a.mark((function e(){var t,n,r,a,i,o,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,r=t.history.push,a=Number(n),!isNaN(a)){e.next=4;break}return e.abrupt("return",r("/"));case 4:if(i=null,e.prev=5,!this.state.isMovie){e.next=14;break}return e.next=10,z(a);case 10:o=e.sent,i=o.data,e.next=18;break;case 14:return e.next=16,I(a);case 16:c=e.sent,i=c.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(5),this.setState({error:"Can't find anything"});case 23:return e.prev=23,this.setState({result:i,loading:!1}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[5,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.loading,r=e.error;return a.a.createElement(nt,{result:t,loading:n,error:r})}}]),n}(a.a.Component),at=function(){return a.a.createElement(c.a,null,a.a.createElement(a.a.Fragment,null,a.a.createElement(E,null),a.a.createElement(l.d,null,a.a.createElement(l.b,{path:"/",exact:!0,component:xe}),a.a.createElement(l.b,{path:"/tv",exact:!0,component:Oe}),a.a.createElement(l.b,{path:"/search",component:ze}),a.a.createElement(l.b,{path:"/movie/:id",component:rt}),a.a.createElement(l.b,{path:"/tv/:id",component:rt}),a.a.createElement(l.a,{from:"*",to:"/"}))))},it=n(46);function ot(){var e=Object(u.a)(["\n  ",";\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    padding-top: 50px;\n    color: white;\n    background-color: rgba(20, 20, 20, 1);\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 14px;\n  }\n"]);return ot=function(){return e},e}var ct=Object(s.a)(ot(),it.a);var lt=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(at,null),a.a.createElement(ct,null))};o.a.render(a.a.createElement(lt,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.cff365af.chunk.js.map