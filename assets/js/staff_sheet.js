(function () {
    var app = "https://script.google.com/macros/s/AKfycbxAVukZVJT6563Ay29UPGAyo5FGDI9Ds4uigdz7Xs7egofrlgY/exec",
       output = '',
       xhr = new XMLHttpRequest();
    xhr.open('GET', app);
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) return;
      if (xhr.status == 200) {
         try {
             var r = JSON.parse(xhr.responseText),
                result = r["name"];
             for (var i = 0; i < result.length; i++){
                   var obj = 
                   '<img class="staffUserpic col-md-1" src="' + r["imageLink"][i] + '">' +
                    '<div class="staffName col-md-5">' + 
                            r["name"][i] + 
                    '</div>' +
                    '<div class="staffPosition col-md-6">' +
                            r["position"][i] + 
                    '</div>';
                   output += obj;
             }



         } catch(e) {}
      } 

      var lelel ='<div class="col-md-6">Ник</div><div class="col-md-6">Позиция</div>';

      const info = document.getElementById('staffInfo');
      info.innerHTML = lelel + output;
    }
    xhr.send()
 })()