const saveSettings = () => {
	// get all select elements
	const GIVE_AWARD_BTNS = document.getElementById("toggle-op1").checked;
	const RPAN_AWARDS = document.getElementById("toggle-op2").checked;
	const COMMENTS_AND_POSTS_AWARDS =
		document.getElementById("toggle-op3").checked;
	const GET_COINS_BTN = document.getElementById("toggle-op4").checked;

	// save select elements :checked value to browser local storage
	chrome.storage.local.set(
		{
			giveAwardsBtn: GIVE_AWARD_BTNS,
			rpanAwards: RPAN_AWARDS,
			commentsAndPostsAwards: COMMENTS_AND_POSTS_AWARDS,
			getCoinsBtn: GET_COINS_BTN,
		},
		() => {
			setTimeout(() => {
				// display the tooltip element (after 450ms) to let user know that settings were successfully saved
				const TOOLTIP =
					document.getElementsByClassName("tooltiptext")[0];
				TOOLTIP.style.visibility = "visible";
				TOOLTIP.style.opacity = 1;

				// hide the tooltip after 1300ms
				setTimeout(() => {
					TOOLTIP.style.visibility = "hidden";
					TOOLTIP.style.opacity = 0;
				}, 1300);
			}, 450);
		}
	);
};

// load all the select elements :checked value and assign it to the elements itself
const loadSettings = () => {
	chrome.storage.local.get(
		{
			giveAwardsBtn: false,
			rpanAwards: true,
			commentsAndPostsAwards: true,
			getCoinsBtn: false,
		},
		(settings) => {
			document.getElementById("toggle-op1").checked =
				settings.giveAwardsBtn;
			document.getElementById("toggle-op2").checked = settings.rpanAwards;
			document.getElementById("toggle-op3").checked =
				settings.commentsAndPostsAwards;
			document.getElementById("toggle-op4").checked =
				settings.getCoinsBtn;
		}
	);
};

document.addEventListener("DOMContentLoaded", loadSettings);
document
	.getElementsByClassName("save-btn")[0]
	.addEventListener("click", saveSettings);
