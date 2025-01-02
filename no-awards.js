console.log(`
███╗   ██╗ ██████╗     █████╗ ██╗    ██╗ █████╗ ██████╗ ██████╗ ███████╗
████╗  ██║██╔═══██╗   ██╔══██╗██║    ██║██╔══██╗██╔══██╗██╔══██╗██╔════╝
██╔██╗ ██║██║   ██║   ███████║██║ █╗ ██║███████║██║  ██║██║  ██║███████╗
██║╚██╗██║██║   ██║   ██╔══██║██║███╗██║██╔══██║██║  ██║██║  ██║╚════██║
██║ ╚████║╚██████╔╝██╗██║  ██║╚███╔███╔╝██║  ██║██████╔╝██████╔╝███████║
╚═╝  ╚═══╝ ╚═════╝ ╚═╝╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═════╝ ╚═════╝ ╚══════╝

Thanks for using No Awards For Reddit extension! Visit https://github.com/datguyducky/no-awards-fr for source-code
`);

// because Reddit uses infinite scroll we need to hide awards as the user scrolls, and for that we use MutationObserver
const targetNode = document.body;
const config = {
	attributes: false,
	childList: true,
	subtree: true,
};

// Callback function to execute when mutations are observed
const callback = (mutationsList, observer) => {
	// Award button on post - uses shadowRoot so some JS was needed
	const shredditPosts = document.querySelectorAll('shreddit-post');
		shredditPosts.forEach(post => {
		if (post.shadowRoot) {
			const awardButtons = post.shadowRoot.querySelectorAll('award-button');
			awardButtons.forEach(button => {
				button.style.display = 'none';
			});
		}
	});
		
	// Award button on post when viewing a feed (Popular tab for example or on a subreddit)
	const feedPosts = document.querySelectorAll('shreddit-feed');
	feedPosts.forEach(post => {
		if (post.shadowRoot) {
			const awardButtons = post.shadowRoot.querySelectorAll('award-button');
			awardButtons.forEach(button => {
				button.style.display = 'none';
			});
		}
	});

	// Gilded gold background on some comments with awards
	const comments = document.querySelectorAll('shreddit-comment');
	comments.forEach(comment => {
		if (comment.hasAttribute('award-count')) {
			comment.removeAttribute('award-count');
		}
	});
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);