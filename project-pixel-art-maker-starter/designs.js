// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  $('td').remove();
  $('tr').remove();
  var inputHeightValues = $("#inputHeight").val();
  var inputWidthValues = $('#inputWeight').val();
  let temp = '';
  for (let i = 0; i < inputHeightValues; i++) {
    temp += '<tr>';
    for (let i = 0; i < inputWidthValues; i++) {
      temp += '<td></td>';
    }
    temp += '</tr>';
  }
  $('#pixelCanvas').append(temp);
}
function listenTdClick() {
  $('td').click(function() {
    var currentColor = $(this).css("background-color").colorHex();
    var color = $("#colorPicker").val();
    console.log(currentColor,color);
    if (currentColor == color) {
      $(this).css("background-color",'#ffffff');
    }else {
      $(this).css("background-color",color);
    }

  });
}
$('#sizePicker').submit(function() {
  makeGrid()
  return false;
});
String.prototype.colorHex = function(){
    var that = this;
    //十六进制颜色值的正则表达式
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    // 如果是rgb颜色表示
    if (/^(rgb|RGB)/.test(that)) {
        var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
        var strHex = "#";
        for (var i=0; i<aColor.length; i++) {
            var hex = Number(aColor[i]).toString(16);
            if (hex === "0") {
                hex += hex;
            }
            strHex += hex;
        }
        if (strHex.length !== 7) {
            strHex = that;
        }
        return strHex;
    } else if (reg.test(that)) {
        var aNum = that.replace(/#/,"").split("");
        if (aNum.length === 6) {
            return that;
        } else if(aNum.length === 3) {
            var numHex = "#";
            for (var i=0; i<aNum.length; i+=1) {
                numHex += (aNum[i] + aNum[i]);
            }
            return numHex;
        }
    }
    return that;
};
