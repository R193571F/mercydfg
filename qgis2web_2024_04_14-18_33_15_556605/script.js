// Assume 'styles' contains your predefined marker styles
var legend = document.getElementById('legend');
for (var style in styles) {
    var name = style.name;
    var icon = style.icon;
    var div = document.createElement('div');
    div.innerHTML = '<img src="' + icon + '"> ' + name;
    legend.appendChild(div);
}
{
    
}
body>
   <style>
   html,body {
  height: 100%;
  padding: 0;
  margin: 0;
    font-family: arial;
  
}
  #title{
	   position: absolute;
	    top: 0%;
           left: 0%;
		width: 100%;
	   height: 7%;
	   background-color: #f1f3f4;
	   border: 1px solid darkgrey;	   
	  }
  #map{
	   position: absolute;
	    top: 7%;
           left: 20%;
		width: 80%;
	   height: 96%;
	   overflow: scroll;
      border: 0.5px solid #4CAF50;	   
	  }
	 
	

	  .ol-mouse-position{
	 top:97%;
	 right:20%;
	 position:absolute;
	 font-weight: bold;
	 }
     .layer-switcher.shown {
      max-height: 465px;
     }
    .tab-content {
	 position: relative;
	 top:1%;
     width:85%;
	 height:85%;
	 overflow: scroll;
	 border: 1px solid blue;
	       }
		
	 #legend{
	    z-index: 11;
		padding: 2px 4px;
		border: 1px solid grey;
	    position: absolute;
		bottom: 20%;
		height: 65%;
        overflow: scroll;
        width:20%; 
        left:0%;
		background-color: #ffffff;
		font-weight: bold;
	  }
    .ol-popup {
        position: absolute;
        background-color: white;
        -webkit-filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2));
        filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2));
        padding: 15px;
        border-radius: 10px;
        border: 1px solid #cccccc;
        bottom: 12px;
        left: -50px;
        min-width: 280px;