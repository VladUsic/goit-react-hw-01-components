(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,function(t,e,a){t.exports={statsList:"StatsList_statsList__1bKVR",statItem:"StatsList_statItem__2q3fa",label:"StatsList_label__D-rjI",quantity:"StatsList_quantity__2mtTs"}},function(t,e,a){t.exports={statistics:"Statistics_statistics__2zqQp",title:"Statistics_title__17_M7",statList:"Statistics_statList__1qFq6",item:"Statistics_item__2OFvC",percentage:"Statistics_percentage__2PNGH"}},function(t,e,a){t.exports={profile:"Profile_profile__15I9R",avatar:"Profile_avatar__38hEz",name:"Profile_name__1eSmV"}},function(t,e,a){t.exports={item:"FriendListItem_item__3XVg0",status:"FriendListItem_status__2nAoZ",online:"FriendListItem_online__3P2yz",offline:"FriendListItem_offline__21Efl"}},function(t,e,a){t.exports={transactionHistory:"Transactions_transactionHistory__3RZbT",thead:"Transactions_thead__1882M",tbody:"Transactions_tbody__3aXiK",grey:"Transactions_grey__3KCHe",white:"Transactions_white__asVDN"}},function(t){t.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,function(t,e,a){t.exports={friendList:"FriendsList_friendList__2JyKJ",avatar:"FriendsList_avatar__1Ka6J"}},function(t){t.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(t){t.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(t){t.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,,function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),c=a(9),i=a.n(c),r=a(14),l=a(2),d=a.n(l),o=a(0),b=function(t){var e=t.followers,a=t.views,n=t.likes;return Object(o.jsxs)("ul",{className:d.a.statsList,children:[Object(o.jsxs)("li",{className:d.a.statItem,children:[Object(o.jsx)("span",{className:d.a.label,children:"Followers"}),Object(o.jsx)("span",{className:d.a.quantity,children:e})]}),Object(o.jsxs)("li",{className:d.a.statItem,children:[Object(o.jsx)("span",{className:d.a.label,children:"Views"}),Object(o.jsx)("span",{className:d.a.quantity,children:a})]}),Object(o.jsxs)("li",{className:d.a.statItem,children:[Object(o.jsx)("span",{className:d.a.label,children:"Likes"}),Object(o.jsx)("span",{className:d.a.quantity,children:n})]})]})},m=a(4),p=a.n(m),j=function(t){var e=t.name,a=t.tag,n=t.location,s=t.avatar,c=t.stats;return Object(o.jsxs)("div",{className:p.a.profile,children:[Object(o.jsxs)("div",{className:"description",children:[Object(o.jsx)("img",{src:s,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:p.a.avatar}),Object(o.jsx)("p",{className:p.a.name,children:e}),Object(o.jsx)("p",{className:p.a.tag,children:a}),Object(o.jsx)("p",{className:p.a.location,children:n})]}),Object(o.jsx)(b,Object(r.a)({},c))]})},u=a(3),f=a.n(u),h=function(t){var e=t.id,a=t.label,n=t.percentage;return Object(o.jsxs)("li",{className:f.a.item,children:[Object(o.jsx)("span",{className:f.a.label,children:a}),Object(o.jsx)("span",{class:f.a.percentage,children:n})]},e)},_=function(t){var e=t.items;return 0===e.length?null:Object(o.jsx)("ul",{className:f.a.statList,children:e.map(h)})},y=function(t){var e=t.items;return Object(o.jsxs)("section",{className:f.a.statistics,children:[Object(o.jsx)("h2",{className:f.a.title,children:"Upload stats"}),Object(o.jsx)(_,{items:e})]})},O=a(5),x=a.n(O),g=function(t){var e=t.id,a=t.avatar,n=t.name,s=t.isOnline?x.a.online:x.a.offline;return Object(o.jsxs)("li",{className:x.a.item,children:[Object(o.jsx)("span",{className:s}),Object(o.jsx)("img",{className:x.a.avatar,src:a,alt:a,width:"48"}),Object(o.jsx)("p",{className:x.a.name,children:n})]},e)},v=a(10),N=a.n(v),w=function(t){var e=t.friends;return 0===e.length?null:Object(o.jsx)("ul",{className:N.a.friendList,children:e.map(g)})},L=a(6),S=a.n(L),I=function(t,e){var a=t.id,n=t.type,s=t.amount,c=t.currency,i=e%2===1?S.a.grey:S.a.white;return Object(o.jsxs)("tr",{className:i,children:[Object(o.jsx)("td",{children:n}),Object(o.jsx)("td",{children:s}),Object(o.jsx)("td",{children:c})]},a)},J=function(t){var e=t.items;return 0===e.length?null:Object(o.jsx)("tbody",{className:S.a.body,children:e.map(I)})},F=function(t){var e=t.transactions;return Object(o.jsxs)("table",{className:S.a.transactionHistory,children:[Object(o.jsx)("thead",{className:S.a.thead,children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Type"}),Object(o.jsx)("th",{children:"Amount"}),Object(o.jsx)("th",{children:"Currency"})]})}),Object(o.jsx)(J,{items:e})]})},T=a(7),q=a(11),P=a(12),U=a(13);var K=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{name:T.name,tag:T.tag,location:T.location,avatar:T.avatar,stats:T.stats}),Object(o.jsx)(y,{items:q}),Object(o.jsx)(w,{friends:P}),Object(o.jsx)(F,{transactions:U})]})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(K,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.f9e3fbc6.chunk.js.map