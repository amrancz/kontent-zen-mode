const mainControl = document.getElementById('mainControl');
const checkbox = document.getElementById('mainControlCheckbox');


chrome.storage.sync.get('modeStatus', function(data) {
	if (data.modeStatus === false) {
		checkbox.checked = false;
	} else {
		checkbox.checked = true;
	}
});

mainControl.onclick = function() {
    	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(
			tabs[0].id,
			{file: 'script.js'});
	});
};