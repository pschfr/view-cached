chrome.contextMenus.create({
	title: "Google Web Cache",
	contexts:["page"],
	onclick: function(info) {
		chrome.tabs.create({
			url: "https://webcache.googleusercontent.com/search?q=cache:" + info.pageUrl
		})
	}
})

chrome.contextMenus.create({
	title: "Internet Archive Wayback Machine",
	contexts:["page"],
	onclick: function(info) {
		chrome.tabs.create({
			url: "https://web.archive.org/web/" + info.pageUrl
		})
	}
})
