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
  var wstring = getSetting('whitelist');
  var bstring = getSetting('blacklist');

  txtWhitelist.value = wstring;
  txtBlacklist.value = bstring;

  warray = parseStringToList(wstring);
  barray = parseStringToList(bstring);
}

/*
.then((tabs) => {
      return browser.storage.local.get(tabs[0].url);
    })
    .then((storedInfo) => {
      contentBox.textContent = storedInfo[Object.keys(storedInfo)[0]];
});
*/

function getSetting(param){
  var retVal = '';
  var gettingAllStorageItems = browser.storage.local.get(param).then((value) => {
    console.log(value);
    console.log(value['whitelist']);
  });

  return retVal;
}

function parseStringToList(str){
  return ['test','val'];
}

function save() {
  var obj = {};
  obj['whitelist'] = txtWhitelist.value;
  obj['blacklist'] = txtBlacklist.value;
  console.log(obj);
  browser.storage.local.set(obj);
}
