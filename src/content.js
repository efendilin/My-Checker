
/*global chrome*/
//var user_id;

window.addEventListener ("load", afterLoad, false);

function make_mark(target_td, drug_data) {
  if (drug_data[0]) {
    target_td.style.backgroundColor = drug_data[0];
  }


  if (drug_data[1]) {
    let tag = document.createElement("a");
    if (drug_data[1] === "?") {
      tag.href = "https://webfiles.pfizer.com/taiwan_paxlovid_hcp";
    }else{
      tag.href = "https://www.covid19-druginteractions.org/"
    }
    tag.target = "_blank"
    tag.innerText = drug_data[1];
    tag.style.fontSize = "x-large";
    target_td.appendChild(tag);
  }
}


function marking (table_rows, drug_list, drug_data) {
  //console.log("here")
  for (var i = 1; i < table_rows.length; i++) {
    //let founded = false;
    let keys = table_rows[i].querySelectorAll("td")[3].innerText.split(" ");
    for (var j = 0; j < keys.length; j++) {
      let key_result = drug_list.indexOf(keys[j].toLowerCase())
      //console.log(key_result)
      if (key_result !== -1) {
        console.log(key_result)
        make_mark(table_rows[i].querySelectorAll("td")[3], drug_data[key_result])
        break;
      }
    }
  }
}

function afterLoad (e) {
    let target = document.querySelector("title");
    let target_table = document.getElementById("ContentPlaceHolder1_gvList")
    console.log("page loaded")

    if (target.innerText.trim() === "衛生福利部中央健康保險署"&&target_table) {
      let target_table_rows = document.getElementById("ContentPlaceHolder1_gvList").querySelectorAll("tr");
      chrome.runtime.sendMessage({
        type:'ask_marking',
        origin:'content'
      });
      chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.type === "marking") {
          console.log("marking")
          //console.log(request.drug_list)
          marking(target_table_rows, request.drug_list, request.drug_data);
        }

      });
    }
}
