{
	// Get elements to hide
	const appMainMenu = document.querySelector('.app__main-menu');
	const appStatusBar = document.querySelector('.app__status-bar');
	const sideBarPlaceholder = document.querySelector('.content-item-pane__sidebar-placeholder');
	const sideBar = document.querySelector('.content-item-pane__sidebar');
    
	// Functions to set status of the mode
	function setStatusOff(){
		chrome.storage.sync.set({modeStatus: false}, function() {
		});
	}

	function setStatusOn(){
		chrome.storage.sync.set({modeStatus: true}, function() {
		});
	}

	// Toggle appMainMenu

	if (appMainMenu.style.display === 'none'){
		appMainMenu.style.display = '';
		setStatusOff();
        
	} else {
		appMainMenu.style.display = 'none';
		setStatusOn();
	}

	// Toggle appStatusBar


	if (appStatusBar.style.display === 'none'){
		appStatusBar.style.display = '';
		setStatusOff();
	} else {
		appStatusBar.style.display = 'none';
		setStatusOn();
	}

	// Toggle sideBarPlaceholder


	if (sideBarPlaceholder.style.display === 'none'){
		sideBarPlaceholder.style.display = '';
		setStatusOff();
	} else {
		sideBarPlaceholder.style.display = 'none';
		setStatusOn();
	}
    
	// Toggle sideBar

	if (sideBar != null) {
		if (sideBar.style.display === 'none'){
			sideBar.style.display = '';
			setStatusOff();
		} else {
			sideBar.style.display = 'none';
			setStatusOn();
		}
	} else {
        
	}
}