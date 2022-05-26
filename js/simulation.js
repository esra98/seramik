var colorChosen = "M3"
var colorsUsed = {}
//seçilen rengi değiştirmek için:
document.getElementById("M3-color").addEventListener("click", function()
{ 
    document.getElementById("chosen-color").innerHTML = 'Color Chosen: <img src="../images/simulation/colors/M3.jpg">';
    colorChosen = "M3"
});
document.getElementById("PR2-color").addEventListener("click", function()
{ 
    document.getElementById("chosen-color").innerHTML = 'Color Chosen: <img src="../images/simulation/colors/PR2.jpg">';
    colorChosen = "PR2"
});
document.getElementById("PV2-color").addEventListener("click", function()
{ 
    document.getElementById("chosen-color").innerHTML = 'Color Chosen: <img src="../images/simulation/colors/PV2.jpg">';
    colorChosen = "PV2"
});
// seçilen alanın rengini değiştirmek için:
document.getElementById("_164440408").addEventListener("click", function()
{   
    var colorElement_164440408= colorChosen;
    document.getElementById("_164440408").style.fill='url(#'+colorElement_164440408+')';
    colorsUsed["colorElement_164440408"]=colorElement_164440408
    console.log(colorsUsed)
});
document.getElementById("_164454616").addEventListener("click", function()
{ 
    var colorElement_164454616= colorChosen;
    document.getElementById("_164454616").style.fill='url(#'+colorChosen+')';
    colorsUsed["colorElement_164454616"]=colorElement_164454616
    console.log(colorsUsed)
});
document.getElementById("_113196976").addEventListener("click", function()
{ 
    document.getElementById("_113196976").style.fill='url(#'+colorChosen+')';
});
document.getElementById("_113198776").addEventListener("click", function()
{ 
    document.getElementById("_113198776").style.fill='url(#'+colorChosen+')';
});
document.getElementById("_133911328").addEventListener("click", function()
{ 
    document.getElementById("_133911328").style.fill='url(#'+colorChosen+')';
});
document.getElementById("_164459680").addEventListener("click", function()
{ 
    document.getElementById("_164459680").style.fill='url(#'+colorChosen+')';
});
document.getElementById("_113193472").addEventListener("click", function()
{ 
    document.getElementById("_113193472").style.fill='url(#'+colorChosen+')';
});
document.getElementById("_113205280").addEventListener("click", function()
{ 
    document.getElementById("_113205280").style.fill='url(#'+colorChosen+')';
});
document.getElementById("_164460424").addEventListener("click", function()
{ 
    document.getElementById("_164460424").style.fill='url(#'+colorChosen+')';
});
document.getElementById("_113196712").addEventListener("click", function()
{ 
    document.getElementById("_113196712").style.fill='url(#'+colorChosen+')';
});
document.getElementById("_113190520").addEventListener("click", function()
{ 
    document.getElementById("_113190520").style.fill='url(#'+colorChosen+')';
});
document.getElementById("_113192680").addEventListener("click", function()
{ 
    document.getElementById("_113192680").style.fill='url(#'+colorChosen+')';
});
document.getElementById("_138364600").addEventListener("click", function()
{ 
    document.getElementById("_138364600").style.fill='url(#'+colorChosen+')';
});
document.getElementById("_164460376").addEventListener("click", function()
{ 
    document.getElementById("_164460376").style.fill='url(#'+colorChosen+')';
});
document.getElementById("_164455456").addEventListener("click", function()
{ 
    document.getElementById("_164455456").style.fill='url(#'+colorChosen+')';
});
document.getElementById("_164442184").addEventListener("click", function()
{ 
    document.getElementById("_164442184").style.fill='url(#'+colorChosen+')';
});
document.getElementById("_113198728").addEventListener("click", function()
{ 
    document.getElementById("_113198728").style.fill='url(#'+colorChosen+')';
});
document.getElementById("_97274960").addEventListener("click", function()
{ 
    document.getElementById("_97274960").style.fill='url(#'+colorChosen+')';
});
document.getElementById("_133920808").addEventListener("click", function()
{ 
    document.getElementById("_133920808").style.fill='url(#'+colorChosen+')';
});
document.getElementById("_113191792").addEventListener("click", function()
{ 
    document.getElementById("_113191792").style.fill='url(#'+colorChosen+')';
});
document.getElementById("_113201920").addEventListener("click", function()
{ 
    document.getElementById("_113201920").style.fill='url(#'+colorChosen+')';
});
document.getElementById("_133905112").addEventListener("click", function()
{ 
    document.getElementById("_133905112").style.fill='url(#'+colorChosen+')';
});
document.getElementById("_113203072").addEventListener("click", function()
{ 
    document.getElementById("_113203072").style.fill='url(#'+colorChosen+')';
});
document.getElementById("_164443816").addEventListener("click", function()
{ 
    document.getElementById("_164443816").style.fill='url(#'+colorChosen+')';
});


