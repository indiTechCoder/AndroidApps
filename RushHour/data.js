//Copyright (C) Webbu Kobo Tokyo Japan All Rights Reserved
var canvas = document.getElementById("game_canvas");var ctx = canvas.getContext("2d");var start_image ="start.png";if(document.documentElement.lang == 'ja')start_image ="startj.png";var simage = new Image();simage.src = start_image;var over_image ="over.png";var ovimage = new Image();ovimage.src = over_image;var clear_image ="clear.png";var cimage = new Image();cimage.src = clear_image;var active_image="active.png";var aimage = new Image();aimage.src = active_image;var oyachai_image="shopline.png";var oyimage = new Image();oyimage.src = oyachai_image;var back_image="back.png";var backimage = new Image();backimage.src = back_image;var social_image="social.png";var socialimage = new Image();socialimage.src = social_image;var Board = [[ 0, 0,13, 0, 0, 0],[23, 0, 0, 0, 0,53],[ 0, 0, 0, 0,60, 0],[50,60, 0, 0,40,30],[20,30,30,50,10,50],[50,60,40,60,50,30]];var ChackBoard = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];var zBoard = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];var sBoard = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];var New=[0,0,0,0,0,0];var timer= 0;var selectXY=[0,0];var select = 0;var selectX = 0;var selectY = 0;var time;var dtime=0;var limitime=90;var overFlg=0;var score= 0;var tama_w = 44;var tama_h = 64;var top_marg = 20;var disc_margX=7;var disc_margY=44-24;var disc_tumeX= 0;var disc_tumeY=24;var num;var bcheck=0;var change=0;var social_w = 125;var social_h = 34;var open  = 0;var ready = 1;var start = 2;var touch = 3;var jump  = 4;var down  = 5;var check = 6;var del   = 7;var zure  = 8;var zure2 = 9;var over  =10;var link  =11;var error2=12;var tweet =14;var face  =15;var flg = open;var btnFlg="";var offsetXY=[0,0];function offsetX(oj){offsetXY[0] = -(document.documentElement.scrollLeft || document.body.scrollLeft);while(oj){offsetXY[0] += oj.offsetLeft;oj = oj.offsetParent;}return}function offsetY(oj){offsetXY[1] = -top_marg - (document.documentElement.scrollTop || document.body.scrollTop);while(oj){offsetXY[1] += oj.offsetTop;oj = oj.offsetParent;}return;}