document.writeln('<style type="text/css">');

document.writeln('.bottomTips{left: 0; bottom: 0; right: 0; max-width: 640px; margin: auto;}');
// document.writeln('.innerTips { font-family: "Microsoft YaHei"; border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-radius: 5px; -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);/* background: #fff;-webkit-transform-origin: 0px 0px; transform-origin: 0px 0px; -webkit-transform: rotateX(90deg); transform: rotateX(90deg);*/ opacity: 1; }');
document.writeln('.innerTips img { border-top-left-radius: 10px; border-top-right-radius: 10px; opacity:1; }');
document.writeln('.bottomTips-a, .bottomTips-b{display: block; z-index:9999; position:fixed; left: 0;width: 100%; max-width: 640px; left: 0;right:0; margin: auto;}');
document.writeln('.bottomTips-a {bottom: 0;}');
document.writeln('.bottomTips-b {bottom: 0;}');

// document.writeln('.bottomTips-b{bottom: -6px;}');
document.writeln('.bottomTips-a a, .bottomTips-b a{display: block;position:absolute;}');
document.writeln('.bottomTips-a-a1{left:0;width:33%;bottom:0;padding:5% 0;}');
document.writeln('.bottomTips-a-a2{left:33%;width:33%;bottom:0;padding:5% 0;}');
document.writeln('.bottomTips-a-a3{left:67%;width:33%;bottom:0;padding:5% 0;}');
// document.writeln('.bottomTips-a-a4{width:100%;bottom:30%;padding:11% 0;}');
// document.writeln('.showTip { height: 60px; }');
document.writeln('.showTip .innerTips { opacity: 1; }');
// document.writeln('.hideTip { height: 0px; }');
document.writeln('.hideTip .innerTips { opacity: 0; }');

document.writeln('</style>');


function swet3(){
	
    var str=window.location.href;
    if(str.indexOf('#')!=-1){
	
	   var sHTML2 = [
			'<div id="bottomtips" class="bottomTips">',
            '   <div class="innerTips">',
            '       <div class="bottomTips-a">',
            '           <img src="js/fix-bottom2.png" class="responsive-img">',
            '           <a class="bottomTips-a-a4" href="javascript:void(0)" onclick="myChat()" target="_blank"></a>',
            '           <a class="bottomTips-a-a1" href="tel:0812-6262-1616" onclick="myChat()" target="_blank"></a>',
            '           <a class="bottomTips-a-a2" href="tel:0812-6262-1616" onclick="myChat()" target="_blank"></a>',
            '           <a class="bottomTips-a-a3" href="https://mqa.zoosnet.net/JS/LsJS.aspx?siteid=MQA87261512&float=1&lng=en"></a>',
            '       </div>',
            '   </div>',
            '</div>'].join('\r\n');
}
		
	
		
	   else{	var sHTML2 = [
			'<div id="bottomtips" class="bottomTips">',
            '   <div class="innerTips">',
            '       <div class="bottomTips-a">',
            '           <img src="https://4.bp.blogspot.com/-gstF-VQsNvo/XAn0U3H1NQI/AAAAAAAAAFo/rGMwsgwzx8Ejr3CmLPAY84L3D8K-SW1dQCLcBGAs/s1600/KONSULTASI%2BKLINIK%2BUTAMA%2BSENTOSA.png" onclick="myChat()" class="responsive-img">',
            '           <a class="bottomTips-a-a4" href="javascript:void(0)" onclick="myChat()" target="_blank"></a>',
            '           <a class="bottomTips-a-a1" href="tel:0812-6262-1616" target="_blank"></a>',
            '           <a class="bottomTips-a-a2" href="tel:0812-6262-1616" onclick="myChat()" target="_blank"></a>',
            '           <a class="bottomTips-a-a3" href="https://mqa.zoosnet.net/JS/LsJS.aspx?siteid=MQA87261512&float=1&lng=en"></a>',
            '       </div>',
            '   </div>',
            '</div>'].join('\r\n');
	   }

    var o = document.createElement('div');
    o.innerHTML = sHTML2;
    while (o.firstElementChild) {
        document.body.appendChild(o.firstElementChild);

    };
    T = {
        hasClass: function(d, a) {
            var c = d.className.split(/\s+/);
            for (var b = 0; b < c.length; b++) {
                if (c[b] == a) {
                    return true
                }
            }
            return false
        },
        addClass: function(b, a) {
            if (!this.hasClass(b, a)) {
                b.className += " " + a
            }
        },
        removeClass: function(d, a) {
            if (this.hasClass(d, a)) {
                var c = d.className.split(/\s+/);
                for (var b = 0; b < c.length; b++) {
                    if (c[b] == a) {
                        delete c[b]
                    }
                }
                d.className = c.join(" ")
            }
        }
    };

    function Bottomtips(options) {
        this.init(options);
    };

    Bottomtips.prototype = {

        constructor: Bottomtips,

        init: function(options) {
            this.item = options.item;
            this.itemInner = options.item.children[0];
            this.loop = typeof options.loop == "undefined" ? true : options.loop;
            this.showTime = typeof options.showTime == "undefined" ? 2000 : options.showTime;
            this.hideTime = typeof options.hideTime == "undefined" ? 3000 : options.hideTime;
            this.showTimer = null;
            this.hideTimer = null;
            this.preTimer = null;
            this.item.style.WebkitTransition = this.item.style.transition = this.itemInner.style.WebkitTransition = this.itemInner.style.transition = "0.5s";
            var me = this;
            var initTimer = setTimeout(function() {
                me.showTip();
            }, 1000);
        },

        showTip: function() {
            var me = this;
            T.addClass(me.item, "showTip");
            T.removeClass(me.item, "hideTip");

            clearTimeout(me.hideTimer);
            me.showTimer = setTimeout(function() {
                me.hideTip();
            }, me.showTime);

        },

        hideTip: function() {
            var me = this;
            T.removeClass(me.item, "showTip");
            T.addClass(me.item, "hideTip");
            me.item.style.visibility = me.itemInner.style.visibility = "hidden";

            if (me.loop) {
                clearTimeout(me.showTimer);

                me.preTimer = setTimeout(function() {
                    me.item.style.visibility = me.itemInner.style.visibility = "visible";
                }, me.hideTime - 100);

                me.hideTimer = setTimeout(function() {
                    me.showTip();
                }, me.hideTime);

            }
        },

    };
    var bottomtip = document.getElementById("bottomtips");

    new Bottomtips({
        item: bottomtip,
        loop: true
    });
    return false;
    delete o;
}
swet3();

document.writeln('<div class="bottomTips-b">');
// document.writeln('<img src="assets/js/img/img-bottom.png" class="responsive-img">');
document.writeln('<a class="bottomTips-a-a4" href="tel:081362621616" onclick="myChat()" target="_blank"></a>');
document.writeln('<a class="bottomTips-a-a1" href="tel:081362621616" onclick="myChat()" target="_blank"></a>');
document.writeln('<a class="bottomTips-a-a2" href="tel:081362621616" onclick="myChat()" target="_blank"></a>');
document.writeln('<a class="bottomTips-a-a3" href="https://mqa.zoosnet.net/LR/Chatpre.aspx?id=MQA87261512&lng=en"></a>');
document.writeln('</div>');
