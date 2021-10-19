const loadStyling = () => {
  const styling = document.createElement("link");
  styling.rel = "stylesheet";
  styling.type = "text/css";
  styling.href = chrome.runtime.getURL("no-awards.css");

  document.documentElement.insertBefore(styling, null);
};

loadStyling();
