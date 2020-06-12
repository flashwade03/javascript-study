const download = require('./download');

(function open_store_url(){
  console.log(download());
  document.getElementById("my_text").innterHTML = download();
})();
