const applyStylesToShadowElements = (root) => {
	const shredditPosts = root.querySelectorAll('shreddit-post');
	// Award button on post - uses shadowRoot so some JS was needed
	shredditPosts.forEach(post => {
		if (post.shadowRoot) {
			const awardButtons = post.shadowRoot.querySelectorAll('award-button');
			awardButtons.forEach(button => {
				button.style.display = 'none';
			});
		}
	});

	const feedPosts = root.querySelectorAll('shreddit-feed');
	// Award button on post when viewing a feed (Popular tab for example or on a subreddit)
	feedPosts.forEach(post => {
		if (post.shadowRoot) {
			const awardButtons = post.shadowRoot.querySelectorAll('award-button');
			awardButtons.forEach(button => {
				button.style.display = 'none';
			});
		}
	});
};

applyStylesToShadowElements(document);

