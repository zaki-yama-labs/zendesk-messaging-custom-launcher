const conversationBadge = document.querySelector("#conversation-badge");
const unreadIndicator = document.querySelector("#unread-indicator");

const populateUnreadIndicator = (count) => {
  if (!count) return resetUnreadIndicator();

  unreadIndicator.style.background = "#CC3333";
  unreadIndicator.innerHTML = count;
  conversationBadge.setAttribute("class", "tilt-animation");
};

const resetUnreadIndicator = () => {
  unreadIndicator.style.background = "black";
  unreadIndicator.innerHTML = 0;
  conversationBadge.setAttribute("class", "");
};

// unread Message on listener
zE("messenger:on", "unreadMessages", (count) => {
  populateUnreadIndicator(count);
});

// on page load always close widget
zE("messenger", "close");

conversationBadge.onclick = () => {
  // open widget
  zE("messenger", "open");
  // reset unread indicator
  resetUnreadIndicator();
};
