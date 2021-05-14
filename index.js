//document.querySelector("h1").innerHTML="hello";
var a=["m0.jpg","m1.jpg","m2.jpg","m3.jpg","m4.jpg"];
var c=["s1.m4a","s2.m4a","s3.m4a","s4.m4a","s5.mp3"];
var b=a.indexOf(document.querySelector(".im").getAttribute("src"));
var ply;
document.querySelector(".prev").addEventListener("click",function(){
  if (b==0){
    ply.pause();
    $(".im").hide();
    b=a.length-1;
    $(".im").attr("src",a[b]).fadeIn(500);
  }
  else{
    ply.pause();
    $(".im").hide();
    b=b-1;
    $(".im").attr("src",a[b]).fadeIn(500);
  }
});
document.querySelector(".nxt").addEventListener("click",function(){
  if (b==a.length-1){
    ply.pause();
    b=0;
    document.querySelector(".im").setAttribute("src",a[b]);
  }
  else{
    ply.pause();
    b=b+1;
    document.querySelector(".im").setAttribute("src",a[b]);
  }
});
var x="a";
document.querySelector(".play").addEventListener("click",function(){
  if (x==b){
    //alert((Math.ceil(ply.duration)-Math.ceil(ply.currentTime))*1000);
    setTimeout(
      function(){
        x="."
      },(Math.ceil(ply.duration)-Math.ceil(ply.currentTime))*1000
    );
}
  else{
    ply=new Audio(c[b]);
    ply.play();
    x=b;
  }
});
