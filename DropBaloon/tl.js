//Copyright (C) Webbu Kobo Tokyo Japan All Rights Reserved
setInterval(timeProg,100);function timeProg(){timer++;dtime++;offsetX(canvas);offsetY(canvas);if(flg==open){if(!ctx){alert("Let's Play the game with HTML5 browser!");if(document.documentElement.lang == 'ja')alert("HTML5対応ブラウザで遊んでねっ");flg =error2;}initBlock();flg=ready;}else if(flg==ready){if(btnFlg==""){drawTama();ctx.drawImage(simage, 0, 0, 320, 320, 0, 0, 320, 320);}$("rinfo").innerHTML = "";$("linfo").innerHTML = "";}else if(flg==start){if(timer>4){initBlock();drawTama();timer=0;$("rinfo").innerHTML = "Score " + score;flg=touch;}}else if(flg==touch){if(score>=1000 && score<2000){limitime=80;}else if(score>=2000){limitime=60;}if(dtime>limitime){timer=0;flg = zure2;}drawTama();for(var j=0;j<6;j++){if(Select[j]==12 && j<selectX){Select[j]=13;break;}else if(Select[j]==13 && j<selectX){Select[j]=11;break;}else if(Select[j]==13 && j>selectX){Select[j]=12;break;}else if(Select[j]==12 && j>selectX){Select[j]=11;break;}else  if(Select[j]!=0){Select[j]=11;break;}}$("rinfo").innerHTML = "Score " + score;}else if(flg==jump){drawTama();for(var j=0;j<6;j++){if(Select[j]==14){Select[j]=15;break;}else if(Select[j]==15){Select[j]=14;break;}}if(numY>selectY){jumpY-=jumpSp;numY--;}else{for(var j=0;j<6;j++){if(Select[j]!=0){Select[j]=16+Board[selectY][j]-1;Board[selectY][j]=0;}}jumpY+=jumpSp;flg=down;}$("rinfo").innerHTML = "Score " + score;}else if(flg==down){drawTama();if(numY<5){jumpY+=jumpSp/2;numY+=1/2;}else{for(var j=0;j<6;j++){if(Select[j]!=0){bSelect=Select[j]-10;Select[j]=21;flg=turn;}}}$("rinfo").innerHTML = "Score " + score;}else if(flg==turn){drawTama();drawBaloon();for(var j=0;j<6;j++){if(Select[j]==22 && j<selectX){Select[j]=23;break;}else if(Select[j]==23 && j<selectX){Select[j]=21;break;}else if(Select[j]==23 && j>selectX){Select[j]=22;break;}else if(Select[j]==22 && j>selectX){Select[j]=21;break;}}}else if(flg==release){drawTama();if(numY>selectY){drawBaloon();bjumpY-=baloonSp;numY--;}else{for(var j=0;j<6;j++){if(Select[j]!=0){Board[selectY][j]=bSelect-5;}}drawTama();bcheck=0;flg=check;}$("rinfo").innerHTML = "Score " + score;}else if(flg==check){for(var i=0;i<7;i++){for(var j=0;j<6;j++){num=0;if(Board[i][j]!=0){LineCheck(j,i);if(num>2){for(var m=0;m<7;m++){for(var n=0;n<6;n++){if(ChackBoard[m][n]==-1){Board[m][n]=24;ChackBoard[m][n]=0;}}}bcheck=1;}else{for(var m=0;m<7;m++){for(var n=0;n<6;n++){ChackBoard[m][n]=0;}}}}}}if(bcheck==1){bjumpY=0;change=0;timer=0;flg = del;}else{bjumpY=0;flg = touch;}$("rinfo").innerHTML = "Score " + score;}else if(flg==del){drawTama();if(timer>2){for(var i=0;i<7;i++){for(var j=0;j<6;j++){if(Board[i][j]==24){Board[i][j]=0;score += 10;}}}var bzure=0;for(var i=1;i<7;i++){for(var j=0;j<6;j++){if(Board[i][j]!=0 && Board[i-1][j]==0){bzure=1;for(var m=i;m<6;m++){zBoard[m][j] = Board[m][j];Board[m][j] = 0;}}}}if(bzure==1){timer=0;flg = zure;}else{for(var i=0;i<7;i++){for(var j=0;j<6;j++){if(zBoard[i][j]!=0){zBoard[i][j]=0;}}}flg = touch;}}$("rinfo").innerHTML = "Score " + score;}else if(flg==zure){drawTama();if(timer<2){drawZure();}else{for(var i=0;i<7;i++){for(var j=0;j<6;j++){if(zBoard[i][j]!=0){Board[i][j] =zBoard[i][j];zBoard[i][j]=0;}}}LineDrop();drawTama();bcheck=0;change=0;flg = check;}$("rinfo").innerHTML = "Score " + score;}else if(flg==zure2){if(timer<2){drawZure2();for(var j=0;j<6;j++){if(Select[j]==12 && j<selectX){Select[j]=13;break;}else if(Select[j]==13 && j<selectX){Select[j]=11;break;}else if(Select[j]==13 && j>selectX){Select[j]=12;break;}else if(Select[j]==12 && j>selectX){Select[j]=11;break;}else  if(Select[j]!=0){Select[j]=11;break;}}}else{var oflg=0;var bomb=[0,0,0,0,0,0];for(var j=0;j<6;j++){if(Board[6][j]!=0){Board[7][j]=24;oflg=1;}}if(oflg==1){for(var j=0;j<6;j++){if(Select[j]!=0)Select[j]=12;}OneLine();drawTama();ctx.drawImage(ovimage, 0, 0, 320, 320, 0, 0, 320, 320);flg = over;}else{OneLine();drawTama;dtime=0;flg = touch;}}}else if(flg==clear){}else if(flg==over){}else if(flg==error2){}}