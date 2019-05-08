var txtWhitelist = document.querySelector('#whitelist');
var txtBlacklist = document.querySelector('#blacklist');
var saveBtn = document.querySelector('#btnSave');

var barray = [];
var warray = [];

saveBtn.addEventListener('click', save);

function onError(error) {
  console.log(error);
}

initialize();

function initialize() {
  console.log(txtWhiteList);
  var wstring = getSetting('whitelist');
  var bstring = getSetting('blacklist');

  txtWhiteList.value = wstring;
  txtBlackList.value = bstring;

  warray = parseStringToList(wstring);
  barray = parseStringToList(bstring);
}

function getSetting(param){
  var retVal = '';
  var gettingAllStorageItems = browser.storage.local.get(param);
  gettingAllStorageItems.then((results) => {
    return results;
  }, onError);

  return retVal;
}

function parseStringToList(str){
  return ['test','val'];
}

function save() {
  browser.storage.local.set({ 'whitelist' : txtWhitelist.val });
  browser.storage.local.set({ 'blacklist' : txtBlacklist.val });
}

/* function to update notes */

function updateNote(delNote,newTitle,newBody) {
  var storingNote = browser.storage.local.set({ [newTitle] : newBody });
  storingNote.then(() => {
    if(delNote !== newTitle) {
      var removingNote = browser.storage.local.remove(delNote);
      removingNote.then(() => {
        displayNote(newTitle, newBody);
      }, onError);
    } else {
      displayNote(newTitle, newBody);
    }
  }, onError);
}
