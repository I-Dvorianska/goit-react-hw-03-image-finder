(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{16:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(10),r=n.n(o),i=(n(16),n(8)),s=n(3),l=n(4),h=n(6),u=n(5),m=(n(17),n(11)),g=n.n(m),d=(n(38),n(1)),p=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={search:""},e.getSearchText=function(t){e.setState({search:t.currentTarget.value.trim()})},e.onSearchBtnClick=function(t){var n=e.props.onSubmit,a=e.state.search;t.preventDefault(),n(a)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.onSearchBtnClick,t=this.getSearchText,n=this.state;return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:e,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{onChange:t,className:"SearchForm-input",type:"text",value:n.search,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),n}(a.Component),j=(n(40),n(41),n(42),function(e){var t=e.id,n=e.webformatURL,a=e.selectImage,c=e.largeImageURL;return Object(d.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return a(c)},children:Object(d.jsx)("img",{src:n,alt:"",className:"ImageGalleryItem-image"})},t)}),b=function(e){var t=e.images,n=e.selected;return Object(d.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(d.jsx)(j,{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,selectImage:n},e.id)}))})},f=(n(43),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).onBtnClick=function(t,n){var a=e.props.page+1;e.props.onLoad(a)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.onBtnClick;return Object(d.jsx)("button",{type:"button",className:"Button",onClick:e,children:"Load more"})}}]),n}(a.Component)),O=(n(44),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).onEscClick=function(t){var n=e.props.onClick;"Escape"===t.code&&n()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onEscClick)}},{key:"render",value:function(){var e=this.props,t=e.onClick,n=e.image;return Object(d.jsx)("div",{className:"Overlay",onClick:t,children:Object(d.jsx)("div",{className:"Modal",children:Object(d.jsx)("img",{src:n,alt:""})})})}}]),n}(a.Component)),v=n(9);var x=function(e,t){return fetch("".concat("https://pixabay.com/api","/?q=").concat(e,"&page=").concat(t,"&key=").concat("22634549-5cdc48e9fdfcb009c2ce01724","&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041c\u044b \u043d\u0435 \u043d\u0430\u0448\u043b\u0438 \u0442\u0430\u043a\u043e\u0439 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ".concat(e)))}))},y=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={searchText:"",images:[],page:1,loading:!1,selectedImage:"null",showBtn:!1},e.notify=function(){return Object(v.b)("Here is no images to show")},e.scrollToBottom=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.getSearchFieldText=function(t){e.setState({searchText:t})},e.changePageNumber=function(t){e.setState({page:t})},e.selectImage=function(t){e.setState({selectedImage:t})},e.onClose=function(){e.setState({selectedImage:"null"})},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this,a=this.state,c=a.page,o=a.searchText;t.searchText!==o&&(this.setState({images:[],loading:!0}),x(o,1).then((function(e){var t=e.hits;return 0===t.length?n.notify():12===t.length?n.setState({images:t,loading:!1,showBtn:!0}):t.length<12?n.setState({images:t,loading:!1,showBtn:!1}):void 0}))),t.page!==c&&1!==c&&(this.setState({loading:!0}),x(o,c).then((function(e){var t=e.hits;t.length<12&&n.setState({showBtn:!1}),n.setState({images:[].concat(Object(i.a)(n.state.images),Object(i.a)(t)),loading:!1})})).finally(this.scrollToBottom))}},{key:"render",value:function(){var e=this.getSearchFieldText,t=this.changePageNumber,n=this.selectImage,a=this.onClose,c=this.state,o=c.images,r=c.page,i=c.loading,s=c.selectedImage,l=c.showBtn,h=o.length>0&&!i&&l;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{onSubmit:e}),Object(d.jsx)(v.a,{containerStyle:{top:300,left:0},toastOptions:{duration:2e3,style:{border:"2px solid #e60000",padding:"8px",color:"#e60000"}}}),o.length>0&&Object(d.jsx)(b,{images:o,selected:n}),i&&Object(d.jsx)("div",{className:"LoaderDiv",children:Object(d.jsx)(g.a,{type:"Circles",color:"#46c5f0",height:40,width:60,style:{marginLeft:"610px",marginTop:"20px",marginBottom:"20px"},timeout:1e3})}),"null"!==s&&Object(d.jsx)(O,{image:s,onClick:a}),h&&Object(d.jsx)(f,{page:r,onLoad:t})]})}}]),n}(a.Component);r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.50c9c490.chunk.js.map