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
  // used only in new Reddit
  const NEW_AWARDS_BAR = document.getElementsByClassName(
    "_1wgnb6w6OJogtEV2N4B3lD"
  );
  for (let i = 0; i < NEW_AWARDS_BAR.length; i++) {
    NEW_AWARDS_BAR[i].style.display = "none";
  }

  // hide awards on cross-posted posts
  // used only in new Reddit
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

  // hide animated awards (both icon and the box-shadow arround the comment)
  // used only in new Reddit
  const ANIMATED_BOX = document.getElementsByClassName(
    "_3VH2iGVh92XtlKq0-eVoEN"
  );
  for (let i = 0; i < ANIMATED_BOX.length; i++) {
    ANIMATED_BOX[i].style.display = "none";
  }

  const ANIMATED_ICON = document.getElementsByClassName(
    "_28x1bnTjOY6zWZfooCxkKQ"
  );
  for (let i = 0; i < ANIMATED_ICON.length; i++) {
    ANIMATED_ICON[i].style.display = "none";
  }

  // hide background-gradient for comments with a lot of awards(?)
  // used only in new Reddit
  const BOX_WITH_GRADIENT = document.getElementsByClassName(
    "TmlaIdEplCzZ0F1aRGYQh"
  );
  for (let i = 0; i < BOX_WITH_GRADIENT.length; i++) {
    BOX_WITH_GRADIENT[i].style.background = "inherit";
  }
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
