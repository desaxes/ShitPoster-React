"use strict";(self.webpackChunkfirst_project=self.webpackChunkfirst_project||[]).push([[532],{2926:function(e,s,n){n.d(s,{I:function(){return h}});var t=n(1413),o=n(5671),i=n(3144),r=n(136),a=n(7277),l=n(2791),c=n(8687),u=n(7689),d=n(184),f=function(e){return{auth:e.auth}},h=function(e){return(0,c.$j)(f)(function(s){(0,r.Z)(l,s);var n=(0,a.Z)(l);function l(){return(0,o.Z)(this,l),n.apply(this,arguments)}return(0,i.Z)(l,[{key:"render",value:function(){return!1===this.props.auth.isAuth?(0,d.jsx)(u.Fg,{to:"/login"}):(0,d.jsx)(e,(0,t.Z)({},this.props))}}]),l}(l.Component))}},8390:function(e,s,n){n.r(s),n.d(s,{default:function(){return T}});var t=n(1413),o=n(8687),i=n(81),r=n(2377),a=n(9719),l=n(8859),c=function(e){return e.profilePage.profileInfo},u=function(e){return e.profilePage.profileInfo.userId},d=function(e){return e.profilePage.status},f=n(8748),h=n(3433),p=n(2791),m=n(9309),x=n(1853),b=n(5115),j=n(4266),g=n(9439),I=n.p+"static/media/pencil.bc6981b19da5e5076b6b.png",v=n.p+"static/media/pencil_color.7de5f01a73dfe3fad255.png",N=n(1134),Z=n(184),P=function(e){var s=(0,N.cI)(),n=s.register,o=s.reset,i=(0,p.useState)(!1),r=(0,g.Z)(i,2),a=r[0],l=r[1],c=(0,p.useState)(!1),u=(0,g.Z)(c,2),d=u[0],f=u[1],h=function(e){f(e)};return(0,Z.jsxs)("div",{className:b.Z.status_field,children:[a?(0,Z.jsx)("form",{children:(0,Z.jsx)("input",(0,t.Z)((0,t.Z)({},n("status")),{},{autoFocus:!0,onBlur:function(s){l(!1),e.setStatus(e.authId,s.currentTarget.value),o()},maxLength:25,className:b.Z.status_input,placeholder:e.status}))}):(0,Z.jsx)("div",{children:(0,Z.jsx)("q",{children:e.status})}),e.profileId===e.authId&&(0,Z.jsx)("div",{className:b.Z.pencil_box,children:(0,Z.jsx)("img",{onClick:function(e){l(!0)},onMouseLeave:function(e){h(!1)},onMouseEnter:function(e){h(!0)},src:d?v:I,alt:""})})]})},k=n(4143),U=n(2103),_=n(8296),S=n(6312),q=n(8308),w=function(e){for(var s,n=(0,N.cI)({mode:"onSubmit"}),o=n.register,i=n.handleSubmit,r=n.reset,a=n.formState.errors,l=(0,h.Z)(e.posts).reverse().filter((function(s){return s.userId===e.profileInfo.userId})).map((function(e){return(0,Z.jsx)(j.Z,{postId:e.userId,id:e.id,name:e.name,avatar:e.avatar,time:e.time,postimage:e.postimage,posttext:e.posttext,like_count:e.like_count,comments:e.comments},e.id)})),c=0,u=0;u<l.length;u++){c+=l[u].props.like_count}return(0,Z.jsxs)("div",{className:b.Z.profile,children:[(0,Z.jsxs)("div",{className:b.Z.head,children:[(0,Z.jsx)("img",{className:b.Z.header,src:m,alt:"profile__header"}),(0,Z.jsx)("div",{className:"page-block",children:(0,Z.jsxs)(k.m,{defaultValue:"Profile",children:[(0,Z.jsxs)(k.m.List,{grow:!0,children:[(0,Z.jsx)(k.m.Tab,{value:"Profile",children:"Profile"}),(0,Z.jsx)(k.m.Tab,{value:"About",children:"About"}),(0,Z.jsx)(k.m.Tab,{value:"Subs",children:"Subs"})]}),(0,Z.jsx)(k.m.Panel,{pt:30,value:"Profile",children:(0,Z.jsxs)("div",{className:b.Z.info_block,children:[(0,Z.jsxs)("div",{className:b.Z.avatar_box,children:[(0,Z.jsx)("img",{className:b.Z.avatar,src:null===e.profileInfo.photos.large?x:e.profileInfo.photos.large,alt:"avatar"}),e.profileInfo.userId===e.authId&&(0,Z.jsx)("div",{className:b.Z.photo_btn,children:(0,Z.jsx)(U.S,{onChange:function(s){e.setPhoto(s),e.changeAuthPhoto(e.authId)},accept:"image/png,image/jpeg",children:function(e){return(0,Z.jsx)(_.z,(0,t.Z)((0,t.Z)({color:"red",variant:"subtle",size:"s",compact:!0},e),{},{children:"\ud83d\udcbe"}))}})})]}),(0,Z.jsxs)("div",{className:b.Z.info_inf,children:[(0,Z.jsx)("div",{className:b.Z.name,children:e.profileInfo.fullName}),(0,Z.jsx)(P,{setStatus:e.setStatus,profileId:e.profileInfo.userId,authId:e.authId,status:e.status}),(0,Z.jsxs)("div",{className:b.Z.desc_block,children:[(0,Z.jsx)("p",{className:b.Z.question,children:"Rating:"}),(0,Z.jsx)("p",{className:b.Z.answer,children:c})]}),(0,Z.jsxs)("div",{className:b.Z.desc_block,children:[(0,Z.jsx)("p",{className:b.Z.question,children:"Posts Counter:"}),(0,Z.jsx)("p",{className:b.Z.answer,children:l.length})]})]}),e.profileInfo.userId!=e.authId&&(0,Z.jsxs)("div",{className:b.Z.btn_block,children:[(0,Z.jsx)("div",{className:"quick-posting-btnbox",children:(0,Z.jsx)("button",{className:"quick-posting__btn",children:"Send Message"})}),(0,Z.jsx)("div",{className:"quick-posting-btnbox",children:(0,Z.jsx)("button",{className:"quick-posting__btn".concat(" ",e.profileInfo.followed&&b.Z.f_color),children:e.profileInfo.followed?"Unsubscribe":"Subscribe"})}),(0,Z.jsx)("div",{className:"quick-posting-btnbox",children:(0,Z.jsx)("button",{className:"quick-posting__btn",children:"Show Subs"})})]})]})}),(0,Z.jsxs)(k.m.Panel,{pt:30,value:"About",children:[(0,Z.jsxs)("p",{className:b.Z.about,children:["Full Name - ",null===e.profileInfo.fullName?"":e.profileInfo.fullName]}),null===e.profileInfo.aboutMe?(0,Z.jsx)("p",{className:b.Z.about,children:'"There could be a description of me here"'}):(0,Z.jsxs)("p",{className:b.Z.about,children:[" ",e.profileInfo.aboutMe]}),(0,Z.jsxs)("p",{className:b.Z.about,children:["Looking For A Job - ",!0===e.profileInfo.lookingForAJob?"Yes":"No"]}),null!=e.profileInfo.lookingForAJobDescription&&(0,Z.jsx)("p",{className:b.Z.about,children:e.profileInfo.lookingForAJobDescription}),(0,Z.jsxs)("div",{className:b.Z.accordion,children:[(0,Z.jsx)("h1",{className:b.Z.accordion_header,children:"Socials"}),(0,Z.jsx)("div",{className:b.Z.accordion_box,children:(0,Z.jsxs)(S.U,{defaultValue:"GitHub",children:[(0,Z.jsxs)(S.U.Item,{value:"GitHub",children:[(0,Z.jsx)(S.U.Control,{children:"GitHub"}),(0,Z.jsx)(S.U.Panel,{children:e.profileInfo.contacts.github})]}),(0,Z.jsxs)(S.U.Item,{value:"VK",children:[(0,Z.jsx)(S.U.Control,{children:"VK"}),(0,Z.jsx)(S.U.Panel,{children:e.profileInfo.contacts.vk})]}),(0,Z.jsxs)(S.U.Item,{value:"Facebook",children:[(0,Z.jsx)(S.U.Control,{children:"Facebook"}),(0,Z.jsx)(S.U.Panel,{children:e.profileInfo.contacts.facebook})]}),(0,Z.jsxs)(S.U.Item,{value:"Instagram",children:[(0,Z.jsx)(S.U.Control,{children:"Instagram"}),(0,Z.jsx)(S.U.Panel,{children:e.profileInfo.contacts.instagram})]}),(0,Z.jsxs)(S.U.Item,{value:"Twitter",children:[(0,Z.jsx)(S.U.Control,{children:"Twitter"}),(0,Z.jsx)(S.U.Panel,{children:e.profileInfo.contacts.twitter})]}),(0,Z.jsxs)(S.U.Item,{value:"Website",children:[(0,Z.jsx)(S.U.Control,{children:"Website"}),(0,Z.jsx)(S.U.Panel,{children:e.profileInfo.contacts.website})]}),(0,Z.jsxs)(S.U.Item,{value:"Youtube",children:[(0,Z.jsx)(S.U.Control,{children:"Youtube"}),(0,Z.jsx)(S.U.Panel,{children:e.profileInfo.contacts.youtube})]}),(0,Z.jsxs)(S.U.Item,{value:"MainLink",children:[(0,Z.jsx)(S.U.Control,{children:"MainLink"}),(0,Z.jsx)(S.U.Panel,{children:e.profileInfo.contacts.mainLink})]})]})})]})]}),(0,Z.jsx)(k.m.Panel,{pt:30,value:"Subs"})]})})]}),e.profileInfo.userId===e.authId&&(0,Z.jsxs)("form",{onSubmit:i((function(s){e.addPost(e.authId,e.login,e.authPhoto,"","Now",s.postText,0),r()})),className:"quick-posting page-block",children:[(0,Z.jsx)(q.g,(0,t.Z)((0,t.Z)({error:null===a||void 0===a||null===(s=a.postText)||void 0===s?void 0:s.message,label:"Quick Post",size:"xl"},o("postText",{required:"\u270e You must enter the text \u21d2",minLength:{value:10,message:"Min length is 10 symbols"}})),{},{placeholder:"Enter Text",className:"quick-posting-field"})),(0,Z.jsx)("div",{className:"quick-posting-btnbox",children:(0,Z.jsx)("input",{value:"Post",type:"submit",className:"quick-posting__btn"})})]}),(0,Z.jsx)("div",{className:"page-block",children:l})]})},C=n(7689),F=n(2926),T=(0,n(7781).qC)((0,o.$j)((function(e){return{posts:e.news.postData,profileInfo:c(e),userId:u(e),subscribeProgress:(0,f.FL)(e),status:d(e),authId:e.auth.id,authPhoto:e.auth.photo,login:e.auth.login}}),{addPost:r.q2,getUserProfile:i.et,setFollowedInfo:i.rG,following:a.mG,setStatus:i.Tf,setPhoto:i.UI,changeAuthPhoto:l.qt}),F.I)((function(e){var s=(0,C.UO)(),n=(0,C.s0)();return(0,p.useEffect)((function(){s.id?e.getUserProfile(s.id):n("/profile/"+e.authId)}),[s.id]),(0,Z.jsx)(w,(0,t.Z)({},e))}))},8748:function(e,s,n){n.d(s,{FL:function(){return l},FX:function(){return r},KA:function(){return t},ab:function(){return a},b7:function(){return o},zU:function(){return i}});var t=function(e){return e.subsPage.subsData},o=function(e){return e.subsPage.pageSize},i=function(e){return e.subsPage.pageNumber},r=function(e){return e.subsPage.totalCount},a=function(e){return e.subsPage.isFetching},l=function(e){return e.subsPage.subscribeProgress}}}]);
//# sourceMappingURL=532.b679c334.chunk.js.map