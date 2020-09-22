console.log(
  "Thanks for using No awards for Reddit! \nGo to github.com/datguysheepy/no-awards-fr for source code"
);

// because Reddit (after redesign) uses infinite scroll we need to
// hide awards as the user scrolls, and for that we use MutationObserver

// target and config for the observer
const targetNode = document.body;
const config = {
  attributes: false,
  childList: true,
  subtree: true,
};

// Callback function to execute when mutations are observed
const callback = (mutationsList, observer) => {
  // hide awards on posts and comments
  const NEW_AWARDS_BAR = document.getElementsByClassName(
    "_1wgnb6w6OJogtEV2N4B3lD"
  );
  for (let i = 0; i < NEW_AWARDS_BAR.length; i++) {
    NEW_AWARDS_BAR[i].style.display = "none";
  }

  // hide awards on cross-posted posts
  const CROSS_POST_NEW_AWARDS_BAR = document.getElementsByClassName(
    "_3XoW0oYd5806XiOr24gGdb"
  );
  for (let i = 0; i < CROSS_POST_NEW_AWARDS_BAR.length; i++) {
    CROSS_POST_NEW_AWARDS_BAR[i].style.display = "none";
  }

  // hide awards at old.reddit.com (on posts and comments)
  const OLD_AWARDS_BAR = document.getElementsByClassName("awardings-bar");
  for (let i = 0; i < OLD_AWARDS_BAR.length; i++) {
    OLD_AWARDS_BAR[i].style.display = "none";
  }
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
