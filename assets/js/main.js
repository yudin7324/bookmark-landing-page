document.addEventListener('DOMContentLoaded', () => {
  const selectors = {
    HEADER: '.js-header',
    BURGER: '.js-burger',
    BODY: 'body',
    TABS: '.js-tabs',
    TABS_BTN: '.js-tabs-btn',
    TABS_SECTION: '.js-tabs-section'
  };
  const classes = {
    ACTIVE: 'active',
    NO_SCROLL: 'no-scroll'
  }

  const header = document.querySelector(selectors.HEADER);
  const burger = document.querySelector(selectors.BURGER);
  const body = document.querySelector(selectors.BODY);

  if(!header || !burger) return;

  burger.addEventListener('click', toggleNav);

  function toggleNav() {
    if(header.classList.contains(classes.ACTIVE)) {
      header.classList.remove(classes.ACTIVE);
      body.classList.remove(classes.NO_SCROLL);
    } else {
      header.classList.add(classes.ACTIVE);
      body.classList.add(classes.NO_SCROLL);
    }
  }

  const tabs = document.querySelector(selectors.TABS);

  if(!tabs) return;

  const tabsBtns = tabs.querySelectorAll(selectors.TABS_BTN);
  const tabsSections = tabs.querySelectorAll(selectors.TABS_SECTION);

  function setActiveTab(index) {
    tabsBtns.forEach((btn) => btn.classList.remove(classes.ACTIVE));
    tabsSections.forEach((section) => section.classList.remove(classes.ACTIVE));
  
    tabsBtns[index].classList.add(classes.ACTIVE);
    tabsSections[index].classList.add(classes.ACTIVE);
  }

  tabs.addEventListener('click', (event) => {
    const clickedBtn = event.target.closest(selectors.TABS_BTN);
    if (!clickedBtn) return;
  
    const index = Array.from(tabsBtns).indexOf(clickedBtn);

    if (index !== -1) {
      setActiveTab(index);
    }
  });
});
