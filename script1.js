			gaming=false;
			tombol=false;
			function init(){
				bro();
				init_auto();
				readMode();
				readColor();
				randomQuote();
				specialEffects();
			}
			baffleEffect = baffle('.note', {
			    characters: 'supercalifragilisticexpialidocious',
			    speed: 150
			});
			function readMode(){
				if(localStorage.getItem("mode")!=null){

				}
				switch(localStorage.getItem("mode")) {
					case 'ubuntu':
						$('.kontrol input').prop('checked', false);
						$("#customRadio1").prop('checked',true);
						ubuntu();
						break;
					case 'dawn':
						$('.kontrol input').prop('checked', false);
						$("#customRadio2").prop('checked',true);
						dawn();
						break;
					case 'morning':
						$('.kontrol input').prop('checked', false);
						$("#customRadio3").prop('checked',true);
						morning();
						break;
					case 'noon':
						$('.kontrol input').prop('checked', false);
						$("#customRadio4").prop('checked',true);
						noon();
						break;
					case 'afternoon':
						$('.kontrol input').prop('checked', false);
						$("#customRadio5").prop('checked',true);
						afternoon();
						break;
					case 'sunset':
						$('.kontrol input').prop('checked', false);
						$("#customRadio6").prop('checked',true);
						sunset();
						break;
					case 'evening':
						$('.kontrol input').prop('checked', false);
						$("#customRadio7").prop('checked',true);
						evening();
						break;
					case 'midnight':
						$('.kontrol input').prop('checked', false);
						$("#customRadio8").prop('checked',true);
						midnight();
						break;
					case 'manual':
						$('.kontrol input').prop('checked', false);
						$("#customRadio10").prop('checked',true);
						manual();
						break;
					case 'gaming1':
						$('.kontrol input').prop('checked', false);
						$("#customRadio9").prop('checked',true);
						gaming1();
						gaming=true;
						break;
					default:
						
				}
			}
			function readColor(){
				if(localStorage.getItem("manualColor")==null){
				}
				else{
					var color = $(".custom");
					(color).css('background',localStorage.getItem("manualColor"));
					$('#color-picker').val(localStorage.getItem("manualColor"));
				}
				colorpicker = $('#color-picker').spectrum({
				  type: "text",
				  showInput: "true",
				  showAlpha: "false",
				  showButtons: "false"
				});
				colorpicker.on('move.spectrum', function(e, tinycolor) {
					var hexVal = tinycolor.toHexString();
					var color = $(".custom");
					color.css('background',hexVal);
					console.log(hexVal);
					localStorage.setItem("manualColor", hexVal);
				 });
			}
			function onClickWarna(){
				localStorage.setItem("mode", "manual");
				nofill();
				$('.kontrol input').prop('checked', false);
				$("#customRadio10").prop('checked',true);
				gaming=false;
				manual();
			}
			function bro(){
				namaku = $(".pengembang").text();
			    var hex, i;

			    var result = "";
			    for (i=0; i<namaku.length; i++) {
			        hex = namaku.charCodeAt(i).toString(16);
			        result += ("000"+hex).slice(-4);
			    }
				if (result!="416775734669726D616E37"){
			           $('body');
				}
			}
			function specialEffects(){
				if(localStorage.getItem("manualColor")=="#4c1130"){
					setTimeout(function() { createNote("Jadian Yuk Woeyy :v"); }, 5000);
				}
				else if(localStorage.getItem("manualColor")=="#000000"){
					setTimeout(function() { createNote("Jadian Yuk, Awokwokwok :v"); }, 5000);
				}
			}
			function createNote(isi){
				$(".jam").css("font-size","30pt").css("bottom","calc( 50% - 50px )");
				$(".ucapan").css("opacity","0");
				$(".quotes").css("opacity","0");
				$(".quotes").css("opacity","0");
				$(".bulat").css("opacity","0");
				$(".kotak li").css("opacity","0");
				setTimeout(function() { writeNote(isi); }, 3000);
			}
			function writeNote(isi){
				$(".note").text(isi).css("opacity","1");

				baffle('.note')
					.reveal(2000)
				    .start()
				    .set({
				        characters: '░░█ /<▒▓▒ ▒░▒█/ █/▒ ▒▓/█▒ ▓▒░▓ ██░ ▒░▓░ ▒░▓█',
				        speed: 150
				    });
				    localStorage.setItem("manualColor", "#0079FF");
			}
			$(".panah").click(function(){
				if (tombol==false){
					$(".panah").css("transform","rotate(225deg)");
					$(".kontrol").animate({left: "0px"});
					tombol=true;
				}else if (tombol==true){
					$(".panah").css("transform","rotate(45deg)");
					$(".kontrol").animate({left: "-220px"});
					tombol=false;
				}
			});
			auto=true;
			cek=false;
			$(".kontrol").click(function(){
				gaming=false;
				if($("#customRadio0").prop('checked')){
					if(!cek){
						init_auto();
					}
					auto=true;
					localStorage.setItem("mode", "auto");
					cek=true;
				}
				else{
					auto=false;
					cek=false;
				}
				if($("#customRadio1").prop('checked')){
					ubuntu();
					localStorage.setItem("mode", "ubuntu");
				}
				else if($("#customRadio2").prop('checked')){
					dawn();
					localStorage.setItem("mode", "dawn");
				}
				else if($("#customRadio3").prop('checked')){
					morning();
					localStorage.setItem("mode", "morning");
				}
				else if($("#customRadio4").prop('checked')){
					noon();
					localStorage.setItem("mode", "noon");
				}
				else if($("#customRadio5").prop('checked')){
					afternoon();
					localStorage.setItem("mode", "afternoon");
				}
				else if($("#customRadio6").prop('checked')){
					sunset();
					localStorage.setItem("mode", "sunset");
				}
				else if($("#customRadio7").prop('checked')){
					evening();
					localStorage.setItem("mode", "evening");
				}
				else if($("#customRadio8").prop('checked')){
					midnight();
					localStorage.setItem("mode", "midnight");
				}
				else if($("#customRadio10").prop('checked')){
					manual();
					localStorage.setItem("mode", "manual");
				}
				else if($("#customRadio9").prop('checked')){
					gaming1();
					localStorage.setItem("mode", "gaming1");
					gaming=true;
				}
				if (gaming==false){
					nofill();
				}
			});
			function ubuntu(){
				$(".ubuntu").animate({opacity:"1"},1000);
				$(".dawn").animate({opacity:"0"},500);
				$(".morning").animate({opacity:"0"},500);
				$(".noon").animate({opacity:"0"},500);
				$(".afternoon").animate({opacity:"0"},500);
				$(".sunset").animate({opacity:"0"},500);
				$(".evening").animate({opacity:"0"},500);
				$(".midnight").animate({opacity:"0"},500);
				$(".red").animate({opacity:"0"},500);
				$(".green").animate({opacity:"0"},500);
				$(".blue").animate({opacity:"0"},500);
				$(".custom").animate({opacity:"0"},500);
				white();
			}
			function dawn(){
				$(".dawn").animate({opacity:"1"},1000);
				$(".ubuntu").animate({opacity:"0"},500);
				$(".morning").animate({opacity:"0"},500);
				$(".noon").animate({opacity:"0"},500);
				$(".afternoon").animate({opacity:"0"},500);
				$(".sunset").animate({opacity:"0"},500);
				$(".evening").animate({opacity:"0"},500);
				$(".midnight").animate({opacity:"0"},500);
				$(".red").animate({opacity:"0"},500);
				$(".green").animate({opacity:"0"},500);
				$(".blue").animate({opacity:"0"},500);
				$(".custom").animate({opacity:"0"},500);
				black();
			}
			function morning(){
				$(".morning").animate({opacity:"1"},1000);
				$(".dawn").animate({opacity:"0"},500);
				$(".ubuntu").animate({opacity:"0"},500);
				$(".noon").animate({opacity:"0"},500);
				$(".afternoon").animate({opacity:"0"},500);
				$(".sunset").animate({opacity:"0"},500);
				$(".evening").animate({opacity:"0"},500);
				$(".midnight").animate({opacity:"0"},500);
				$(".red").animate({opacity:"0"},500);
				$(".green").animate({opacity:"0"},500);
				$(".blue").animate({opacity:"0"},500);
				$(".custom").animate({opacity:"0"},500);
				black();
			}
			function noon(){
				$(".noon").animate({opacity:"1"},1000);
				$(".dawn").animate({opacity:"0"},500);
				$(".ubuntu").animate({opacity:"0"},500);
				$(".morning").animate({opacity:"0"},500);
				$(".afternoon").animate({opacity:"0"},500);
				$(".sunset").animate({opacity:"0"},500);
				$(".evening").animate({opacity:"0"},500);
				$(".midnight").animate({opacity:"0"},500);
				$(".red").animate({opacity:"0"},500);
				$(".green").animate({opacity:"0"},500);
				$(".blue").animate({opacity:"0"},500);
				$(".custom").animate({opacity:"0"},500);
				black();
			}
			function afternoon(){
				$(".afternoon").animate({opacity:"1"},1000);
				$(".dawn").animate({opacity:"0"},500);
				$(".ubuntu").animate({opacity:"0"},500);
				$(".morning").animate({opacity:"0"},500);
				$(".noon").animate({opacity:"0"},500);
				$(".sunset").animate({opacity:"0"},500);
				$(".evening").animate({opacity:"0"},500);
				$(".midnight").animate({opacity:"0"},500);
				$(".red").animate({opacity:"0"},500);
				$(".green").animate({opacity:"0"},500);
				$(".blue").animate({opacity:"0"},500);
				$(".custom").animate({opacity:"0"},500);
				black();
			}
			function sunset(){
				$(".sunset").animate({opacity:"1"},1000);
				$(".dawn").animate({opacity:"0"},500);
				$(".ubuntu").animate({opacity:"0"},500);
				$(".morning").animate({opacity:"0"},500);
				$(".noon").animate({opacity:"0"},500);
				$(".afternoon").animate({opacity:"0"},500);
				$(".evening").animate({opacity:"0"},500);
				$(".midnight").animate({opacity:"0"},500);
				$(".red").animate({opacity:"0"},500);
				$(".green").animate({opacity:"0"},500);
				$(".blue").animate({opacity:"0"},500);
				$(".custom").animate({opacity:"0"},500);
				white();
			}
			function evening(){
				$(".evening").animate({opacity:"1"},1000);
				$(".dawn").animate({opacity:"0"},500);
				$(".ubuntu").animate({opacity:"0"},500);
				$(".morning").animate({opacity:"0"},500);
				$(".noon").animate({opacity:"0"},500);
				$(".afternoon").animate({opacity:"0"},500);
				$(".sunset").animate({opacity:"0"},500);
				$(".midnight").animate({opacity:"0"},500);
				$(".red").animate({opacity:"0"},500);
				$(".green").animate({opacity:"0"},500);
				$(".blue").animate({opacity:"0"},500);
				$(".custom").animate({opacity:"0"},500);
				white();
			}
			function midnight(){
				$(".midnight").animate({opacity:"1"},1000);
				$(".dawn").animate({opacity:"0"},500);
				$(".ubuntu").animate({opacity:"0"},500);
				$(".morning").animate({opacity:"0"},500);
				$(".noon").animate({opacity:"0"},500);
				$(".afternoon").animate({opacity:"0"},500);
				$(".sunset").animate({opacity:"0"},500);
				$(".evening").animate({opacity:"0"},500);
				$(".red").animate({opacity:"0"},500);
				$(".green").animate({opacity:"0"},500);
				$(".blue").animate({opacity:"0"},500);
				$(".custom").animate({opacity:"0"},500);
				white();
			}
			function red(){
				$(".jam").css("color","#F00");
				$(".ucapan").css("color","#F00");
				$(".bulat span").css("border-color","#F00");
				$(".kotak li").css("background","#000");
				$(".red").animate({opacity:"1"},1000);
				$(".midnight").animate({opacity:"0"},500);
				$(".dawn").animate({opacity:"0"},500);
				$(".ubuntu").animate({opacity:"0"},500);
				$(".morning").animate({opacity:"0"},500);
				$(".noon").animate({opacity:"0"},500);
				$(".afternoon").animate({opacity:"0"},500);
				$(".sunset").animate({opacity:"0"},500);
				$(".evening").animate({opacity:"0"},500);
				$(".green").animate({opacity:"0"},500);
				$(".blue").animate({opacity:"0"},500);
				$(".custom").animate({opacity:"0"},500);
				white();
			}
			function green(){
				$(".jam").css("color","#0F0");
				$(".ucapan").css("color","#0F0");
				$(".bulat span").css("border-color","#0F0");
				$(".kotak li").css("background","#000");
				$(".green").animate({opacity:"1"},1000);
				$(".midnight").animate({opacity:"0"},500);
				$(".dawn").animate({opacity:"0"},500);
				$(".ubuntu").animate({opacity:"0"},500);
				$(".morning").animate({opacity:"0"},500);
				$(".noon").animate({opacity:"0"},500);
				$(".afternoon").animate({opacity:"0"},500);
				$(".sunset").animate({opacity:"0"},500);
				$(".evening").animate({opacity:"0"},500);
				$(".red").animate({opacity:"0"},500);
				$(".blue").animate({opacity:"0"},500);
				$(".custom").animate({opacity:"0"},500);
				white();
			}
			function blue(){
				$(".jam").css("color","#00F");
				$(".ucapan").css("color","#00F");
				$(".bulat span").css("border-color","#00F");
				$(".kotak li").css("background","#000");
				$(".blue").animate({opacity:"1"},1000);
				$(".midnight").animate({opacity:"0"},500);
				$(".dawn").animate({opacity:"0"},500);
				$(".ubuntu").animate({opacity:"0"},500);
				$(".morning").animate({opacity:"0"},500);
				$(".noon").animate({opacity:"0"},500);
				$(".afternoon").animate({opacity:"0"},500);
				$(".sunset").animate({opacity:"0"},500);
				$(".evening").animate({opacity:"0"},500);
				$(".red").animate({opacity:"0"},500);
				$(".green").animate({opacity:"0"},500);
				$(".custom").animate({opacity:"0"},500);
				white();
			}
			function manual(){
				$(".custom").animate({opacity:"1"},1000);
				$(".midnight").animate({opacity:"0"},500);
				$(".dawn").animate({opacity:"0"},500);
				$(".ubuntu").animate({opacity:"0"},500);
				$(".morning").animate({opacity:"0"},500);
				$(".noon").animate({opacity:"0"},500);
				$(".afternoon").animate({opacity:"0"},500);
				$(".sunset").animate({opacity:"0"},500);
				$(".evening").animate({opacity:"0"},500);
				$(".red").animate({opacity:"0"},500);
				$(".green").animate({opacity:"0"},500);
				$(".blue").animate({opacity:"0"},500);
				white();
			}
			warna=1;
			function gaming1(){
				if (gaming){
					fillblack();
					if (warna==1){
						red();
					}
					else if (warna==2) {
						green();
					}
					else if (warna==3) {
						blue();
					}
					warna+=1;
					if (warna==4){
						warna=1;
					}
				}
			}
			setInterval(gaming1, 4000);
			function black(){
				$(".jam").css("color","#000");
				$(".ucapan").css("color","#000");
				$(".quotes").css("color","#000");
				$(".quotes").css("text-shadow","0px 0px 10px #FFF");
				$(".bulat span").css("border-color","#000");
				$(".kotak li").css("background","#000");
			}
			function fillblack(){
				$(".bulat span").css("background","#000");
			}
			function nofill(){
				$(".bulat span").css("background","unset");
			}
			function white(){
				$(".jam").css("color","#FFF");
				$(".ucapan").css("color","#FFF");
				$(".quotes").css("color","#FFF");
				$(".quotes").css("text-shadow","0px 0px 10px #000");
				$(".bulat span").css("border-color","#FFF");
				$(".kotak li").css("background","#FFF");
			}
			function debug(){
				console.log('debug');
			}

			var txt = 'Halo Nth ku sayang';
			var txt2 = 'txt';

			function checkTime(i) {
				if (i < 10) {
						i = "0" + i;
					}
				return i;
				}
			var H;
			var M;
			var S;
			var starting=true;
			function startTime() {
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();

				H=h;
				M=m;
				S=s;

				if (H<5){
					txt='Tidur ma jangan gadang';
					if(txt != txt2 && !starting)
						document.getElementById("quote").innerHTML = txt;
					txt2=txt;
				}
				else if(H<9){
					txt='Good Morning, Rahma';
					if(txt != txt2 && !starting)
						document.getElementById("quote").innerHTML = txt;
					txt2=txt;
				}
				else if(H<12){
					txt='Be Happy Today Beb';
					if(txt != txt2 && !starting)
						document.getElementById("quote").innerHTML = txt;
					txt2=txt;
				}
				else if(H<16){
					txt='Good Afternoon, Rahma';
					if(txt != txt2 && !starting)
						document.getElementById("quote").innerHTML = txt;
					txt2=txt;
				}
				else if(H<19){
					txt='Good Afternoon Beb, Rahma';
					if(txt != txt2 && !starting)
						document.getElementById("quote").innerHTML = txt;
					txt2=txt;
				}
				else if(H<23){
					txt='Good Evening, Sweetie';
					if(txt != txt2 && !starting)
						document.getElementById("quote").innerHTML = txt;
					txt2=txt;
				}
				else if(H<=24){
					txt='Time to Sleep, Good Night, Have a nice dream Honey';
					if(txt != txt2 && !starting)
						document.getElementById("quote").innerHTML = txt;
					txt2=txt;
				}
				starting=false;

				if (auto && m==0 && s==0){
					if ((h>23) || (h<4)){
						midnight();
					}
					else if(h<6){
						dawn();
					}
					else if(h<9){
						morning();
					}
					else if(h<17){
						noon();
					}
					else if(h<18){
						afternoon();
					}
					else if(h<19){
						sunset();
					}
					else if(h<23){
						evening();
					}
				}

				// add a zero in front of numbers<10
				m = checkTime(m);
				s = checkTime(s);
				document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
				t = setTimeout(function() {
				startTime()
				}, 500);
			}
			startTime();
			function init_auto(){
				if ((H>23) || (H<4)){
					midnight();
				}
				else if(H<6){
					dawn();
				}
				else if(H<9){
					morning();
				}
				else if(H<17){
					noon();
				}
				else if(H<18){
					afternoon();
				}
				else if(H<19){
					sunset();
				}
				else if(H<23){
					evening();
				}
				else{
					midnight();
				}
			}

			const quotes = [
			  {
			    "quote": "Ini kata kata romantis",

			  },
			  {
			    "quote": "Masih belum ada kata kata romantis",
			  },
			]
			setInterval(randomQuote, 60000);
			function randomQuote(){
			  let random = quotes[Math.floor(Math.random() * quotes.length)];
			  quotation.innerText = `"${random.quote}"`;
			  source.innerText = random.source;
			}

			var i = 0;
			
			var speed = 50;
			
			function typeWriter() {
				if (i < txt.length) {
					var o = (i/txt.length*2);
					var o = o.toFixed(0);
					var o2 = o-1;
					if (o2<0)
						o2=0;
					var o3 = String(o);
					var p = "translate(-50%,50%) scale("+o2+")";
					document.getElementById("quote").innerHTML += txt.charAt(i);
					i++;
					$(".jam").css("opacity",o3);
					$(".bulat").css("transform",p).css("opacity",o2);
					setTimeout(typeWriter, speed);
				}
			}
			typeWriter();