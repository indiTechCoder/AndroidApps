//Copyright (C) Webbu Kobo Tokyo Japan All Rights Reserved
setInterval(timeProg,80);function timeProg(){timer++;offsetX(canvas);offsetY(canvas);if(flg==open){if(!ctx){alert("Let's Play the game with HTML5 browser!");if(document.documentElement.lang == 'ja')alert("HTML5対応ブラウザで遊んでねっ");flg =error;}ctx.clearRect(0,0,320,320);drawBase();drawGoei();drawUboat();drawOj();ctx.drawImage(simage, 0, 0, 320, 320, 0, 0, 320, 320);flg=ready;}else if(flg==ready){if(bflg==""){ctx.clearRect(0,0,320,320);drawBase();drawGoei();drawUboat();drawOj();ctx.drawImage(simage, 0, 0, 320, 320, 0, 0, 320, 320);}else if(bflg==start){ctx.clearRect(0,0,320,320);drawBase();drawGoei();drawUboat();drawOj();ctx.drawImage(aimage, 0, 0, 250, 50, 80, 150, 160, 35);ctx.drawImage(simage, 0, 0, 320, 320, 0, 0, 320, 320);}else if(bflg==link){ctx.clearRect(0,0,320,320);drawBase();drawGoei();drawUboat();drawOj();ctx.drawImage(aimage, 0, 0, 250, 50, 90, 295, 135, 23);ctx.drawImage(simage, 0, 0, 320, 320, 0, 0, 320, 320);}else{ctx.clearRect(0,0,320,320);drawBase();drawGoei();drawUboat();drawOj();ctx.drawImage(simage, 0, 0, 320, 320, 0, 0, 320, 320);}$("linfo").innerHTML = "";$("rinfo").innerHTML = "";}else if(flg==start){$("top_info2").style.display="block";$("top_info2").innerHTML = "Touch the panel to start!!";if(document.documentElement.lang == 'ja')$("top_info2").innerHTML = "パネルをタッチしてネ";$("linfo").innerHTML = "Score " + score;$("rinfo").innerHTML = "Life " + count;flg=touch;}else if(flg==touch){ctx.clearRect(0,0,320,320);drawBase();drawGoei();drawBomb();drawUboat();drawOj();atariCheck();bombCheck();$("linfo").innerHTML = "Score " + score;$("rinfo").innerHTML = "Life " + count;}else if(flg==bomb){ctx.clearRect(0,0,320,320);drawBase();drawGoei();drawUboat();drawOj();$("linfo").innerHTML = "Score " + score;$("rinfo").innerHTML = "Life " + count;}else if(flg==over){if(bflg == start){ctx.clearRect(0,0,320,320);drawBase();drawGoei();drawUboat();drawOj();ctx.drawImage(ovimage, 0, 0, 320, 320, 0, 0, 320, 320);ctx.drawImage(aimage, 0, 0, 250, 50, 80, 155, 160, 32);}else if(bflg == link){ctx.clearRect(0,0,320,320);drawBase();drawGoei();drawUboat();drawOj();ctx.drawImage(ovimage, 0, 0, 320, 320, 0, 0, 320, 320);ctx.drawImage(aimage, 0, 0, 250, 50, 80, 195, 160, 32);}else if(bflg == ready){ctx.clearRect(0,0,320,320);drawBase();drawGoei();drawUboat();drawOj();ctx.drawImage(ovimage, 0, 0, 320, 320, 0, 0, 320, 320);ctx.drawImage(aimage, 0, 0, 250, 50, 80, 233, 160, 32);}else{ctx.clearRect(0,0,320,320);drawBase();drawGoei();drawUboat();drawOj();ctx.drawImage(ovimage, 0, 0, 320, 320, 0, 0, 320, 320);}$("linfo").innerHTML = "Score " + score;$("rinfo").innerHTML = "Life " + count;}else if(flg==error){}}