
/*global chrome*/
//var user_id;

window.addEventListener ("load", afterLoad, false);

function make_mark(target_td, drug_data, result_list) {
  if (drug_data[0]) {
    target_td.style.backgroundColor = drug_data[0];
    if (result_list.hasOwnProperty(drug_data[0])) {
      result_list[drug_data[0]] += 1;
    }
  }
  let tag = document.createElement("a");
  if (drug_data[1] === "?") {
    tag.href = "https://webfiles.pfizer.com/taiwan_paxlovid_hcp";
  }else{
    tag.href = "https://www.covid19-druginteractions.org/"
  }
  tag.target = "_blank"
  tag.innerText = drug_data[1] + "🔗";
  tag.style.fontSize = "x-large";
  target_td.appendChild(tag);
  return result_list;
}


function marking (table_rows, drug_list, drug_data) {
  //console.log("here")
  let result_list = {red:0, orange:0, yellow:0}
  for (var i = 1; i < table_rows.length; i++) {
    let moderate_severe = false;
    for (var j = 0; j < drug_list.length; j++) {
      let durg_name = table_rows[i].querySelectorAll("td")[3].innerText.toLowerCase();
      let drug_result = durg_name.includes(drug_list[j])
      if (drug_result) {
        //console.log("find:" + j)
        if (drug_data[j][0] === 'red') {
          result_list = make_mark(table_rows[i].querySelectorAll("td")[3], drug_data[j], result_list)
          break;
        }else if (drug_data[j][0] === 'orange'){
          moderate_severe = true;
          result_list = make_mark(table_rows[i].querySelectorAll("td")[3], drug_data[j], result_list)
        }else if(!moderate_severe){
          result_list = make_mark(table_rows[i].querySelectorAll("td")[3], drug_data[j], result_list)
        }
      }
    }
  }
  if (result_list.red||result_list.orange||result_list.yellow) {
    chrome.runtime.sendMessage({
      type:'ask_notification',
      origin:'content',
      data:result_list
    });
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
