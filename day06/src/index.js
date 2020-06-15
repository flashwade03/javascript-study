const download = require('./download');
import DataURI from "./data_uri";

(function open_store_url(){
  console.log(download());
  document.getElementById("my_text").innterHTML = download();

  console.log(DataURI.imagePath)
  console.log(DataURI.imagePath.get("play_btn").default);
  var img = document.getElementById("header");
  img.src = DataURI.imagePath.get("play_btn").default;
  console.log(img.src);
})();
