const applyStyling = (key) => {
	const styling = document.createElement("link");
	styling.rel = "stylesheet";
	styling.type = "text/css";
	styling.href = chrome.runtime.getURL(`css/${key}.css`);

	document.documentElement.insertBefore(styling, null);
};

const loadStyling = async () => {
	await chrome.storage.local.get(
		{
			giveAwardsBtn: false,
			rpanAwards: true,
			commentsAndPostsAwards: true,
			getCoinsBtn: false,
			notInteractableAwards: false,
		},
		(userSettings) => {
			Object.entries(userSettings).forEach(([key, checked]) => {
				if (checked) {
					applyStyling(key);
				}
			});
		}
	);
};

loadStyling();
