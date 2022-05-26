/*global chrome*/
const interation_drug_list = ['codeine', 'piroxicam', 'propoxyphene', 'pethidine', 'alfuzosin', 'ranolazine', 'amiodarone', 'dronedarone',
 'flecainide', 'propafenone', 'quinidine', 'bepridil', 'lidocaine', 'apalutamide', 'abemaciclib', 'ceritinib', 'dasatinib', 'erlotinib', 'imatinib', 'encorafenib',
 'ibrutinib', 'ivosidenib', 'neratinib', 'venetoclax,', 'vinblastine,', 'ethinylestradiol', 'etonogestrel', 'levonorgestrel', 'norethisterone', 'norgestrel',
 'warfarin', 'rivaroxaban', 'carbamazepine', 'clonazepam', 'ethosuximide', 'phenobarbital', 'phenytoin', 'valproate', 'amitriptyline', 'clomipramine',
 'fluoxetine', 'glibenclamide', 'griseofulvin', 'bupropion', 'trazodone', 'voriconazole', 'ketoconazole', 'amodiaquine', 'artemether', 'artesunate',
 'lumefantrine', 'mefloquine', 'piperaquine', 'quinine', 'chlorpromazine', 'isavuconazonium', 'sulfate', 'itraconazole', 'colchicine', 'amprenavir',
 'atazanavir', 'darunavir', 'fosamprenavir', 'indinavir', 'nelfinavir', 'saquinavir', 'tipranavir', 'didanosine', 'delavirdine', 'efavirenz', 'lopinavir',
 'nevirapine', 'clarithromycin', 'clindamycin', 'delamanid', 'erythromycin', 'rifampin', 'bedaquiline', 'rifabutin', 'rifampicin', 'rifapentine', 'apixaban',
 'clopidogrel', 'dabigatran', 'edoxaban', 'lurasidone', 'pimozide', 'clozapine', 'haloperidol', 'risperidone', 'diazepam', 'quetiapine', 'amlodipine', 'verapamil',
 'diltiazem', 'felodipine', 'nicardipine', 'nifedipine', 'digoxin', 'isosorbide dinitrate', 'losartan', 'ciclosporin', 'everolimus', 'bosentan', 'dihydroergotamine',
 'ergotamine', 'methylergonovine', 'elbasvir', 'grazoprevir', 'glecaprevir', 'pibrentasvir', 'ombitasvir', 'paritaprevir', 'dasabuvir', 'sofosbuvir', 'velpatasvir',
 'voxilaprevir', 'lovastatin', 'simvastatin', 'ergometrine', 'atorvastatin', 'rosuvastatin', 'ethinyl estradiol', 'cyclosporine', 'tacrolimus', 'sirolimus', 'salmeterol',
 'fentanyl', 'methadone', 'sildenafil', 'triazolam', 'midazolam', 'budesonide', 'aprepitant', 'domperidone', 'loperamide', 'triamcinolone', 'morphine', 'oxycodone',
 'tramadol', 'aminophylline', 'diclofenac'];

const interation_drug_values = [['yellow', '⬤', ''], ['yellow', '⬤', ''], ['red', '?', ''], ['red', '?', ''], ['red', '?', ''], ['red', '?', ''], ['red', '⚠', ''],
['red', '?', ''], ['red', '?', ''], ['red', '?', ''], ['red', '?', ''], ['yellow', '?', ''], ['orange', '▢', ''], ['red', '?', ''], ['yellow', '?', ''],
['yellow', '?', ''], ['orange', '▢', ''], ['orange', '▢', ''], ['orange', '▢', ''], ['yellow', '?', ''], ['yellow', '?', ''], ['yellow', '?', ''], 
['yellow', '?', ''], ['yellow', '?', ''], ['orange', '▢', ''], ['yellow', '⬤', ''], ['yellow', '⬤', ''], ['yellow', '⬤', ''], ['yellow', '⬤', ''], ['yellow', '⬤', ''], 
['orange', '▢', ''], ['red', '⬤', ''], ['red', '❌', ''], ['red', '⬤', ''], ['orange', '▢', ''], ['red', '❌', ''], ['red', '❌', ''], ['yellow', '⬤', ''], ['yellow', '⬤', ''], 
['yellow', '⬤', ''], ['yellow', '⬤', ''], ['orange', '⬤', ''], ['yellow', '⬤', ''], ['yellow', '?', ''], ['yellow', '?', ''], ['orange', '▢', ''], ['orange', '⬤', ''], 
['orange', '▢', ''], ['yellow', '⬤', ''], ['yellow', '⬤', ''], ['orange', '⬤', ''], ['orange', '▢', ''], ['orange', '▢', ''], ['orange', '▢', ''], ['yellow', '⬤', ''], 
['yellow', '?', ''], ['yellow', '?', ''], ['orange', '⬤', ''], ['red', '?', ''], ['yellow', '?', ''], ['orange', '⬤', ''], ['orange', '⬤', ''], ['yellow', '?', ''], 
['yellow', '?', ''], ['yellow', '?', ''], ['yellow', '?', ''], ['yellow', '?', ''], ['yellow', '⬤', ''], ['yellow', '⬤', ''], ['yellow', '⬤', ''], ['orange', '⬤', ''], 
['yellow', '⬤', ''], ['orange', '⬤', ''], ['yellow', '⬤', ''], ['orange', '▢', ''], ['orange', '▢', ''], ['red', '?', ''], ['orange', '▢', ''], ['orange', '▢', ''], 
['red', '❌', ''], ['red', '❌', ''], ['red', '⬤', ''], ['red', '⬤', ''], ['orange', '⬤', ''], ['orange', '⬤', ''], ['red', '?', ''], ['red', '?', ''], ['red', '⬤', ''], 
['orange', '▢', ''], ['orange', '▢', ''], ['red', '', ''], ['yellow', '?', ''], ['orange', '', ''], ['orange', '⬤', ''], ['yellow', '?', ''], ['yellow', '?', ''], 
['yellow', '?', ''], ['orange', '⬤', ''], ['orange', '▢', ''], ['yellow', '⬤', ''], ['yellow', '⬤', ''], ['red', '⬤', ''], ['red', '⬤', ''], ['yellow', '?', ''], ['red', '?', ''], 
['red', '?', ''], ['red', '?', ''], ['yellow', '?', ''], ['yellow', '?', ''], ['red', '⬤', ''], ['red', '⬤', ''], ['red', '⬤', ''], ['red', '⬤', ''], ['yellow', '?', ''], 
['yellow', '?', ''], ['yellow', '?', ''], ['yellow', '?', ''], ['red', '⬤', ''], ['red', '⬤', ''], ['red', '⬤', ''], ['orange', '▢', ''], ['yellow', '?', ''], 
['yellow', '?', ''], ['yellow', '?', ''], ['yellow', '?', ''], ['yellow', '?', ''], ['red', '⬤', ''], ['orange', '▢', ''], ['yellow', '?', ''], ['red', '?', ''], 
['red', '?', ''], ['red', '⬤', ''], ['yellow', '⬤', ''], ['orange', '▢', ''], ['reg', '⬤', ''], ['orange', '⬤', ''], ['orange', '▢', ''], ['orange', '⬤', ''], 
['orange', '▢', ''], ['orange', '⬤', ''], ['yellow', '⬤', ''],  ['lime', '⬤', '']];


initDataAndListener();
console.log('insert checker');

chrome.runtime.onInstalled.addListener(function() {
  console.log('installing');
  chrome.storage.local.get(function(all_value) {
    if (!all_value.hasOwnProperty("seeting")) {
      console.log('installing data');
      chrome.storage.local.set({
        "seeting":{
          "isAutomatic":true,
          "UseLocal":false,
          "interation_drug_list":interation_drug_list,
          "interation_drug_values":interation_drug_values
        },
      },  function(result){
        console.log(result);
      });
      console.log("local data created");
      return;
    }
  });
});

function initDataAndListener() {

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    chrome.storage.local.get(null, function(items){
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
        return;
      }
      let seeting = items.seeting;
      console.log("get request");
      switch(request.type) {
        case "ask_marking":
          if (seeting["isAutomatic"]) {
            if (seeting["UseLocal"]) {
              console.log("use local data");
              chrome.tabs.sendMessage(sender.tab.id, {
                type:"marking",
                drug_list:interation_drug_list,
                drug_data:interation_drug_values
              }, {
                  frameId:sender.frameId
                });
            }
            else {
              console.log("use default data");
              chrome.tabs.sendMessage(sender.tab.id, {
                type:"marking",
                drug_list:interation_drug_list,
                drug_data:interation_drug_values
              }, {
                  frameId:sender.frameId
                });
            }
          }
          else{
            console.log("no need marking");
            chrome.tabs.sendMessage(sender.tab.id, {
              type:"no marking",
              drug_list:interation_drug_list,
              drug_data:interation_drug_values
            }, {
                frameId:sender.frameId
              });
          }
          break;
        case 'change_seeting':
          console.log("change seeting");
          seeting = request.info;
          console.log(request.info);
          chrome.storage.local.set({
            "seeting":request.info
          },  function(result){
            console.log(result);
          });
          break;
        default:
          console.log("wrong request");
          break;
      }
    });
  });
};