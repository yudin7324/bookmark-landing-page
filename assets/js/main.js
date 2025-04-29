document.addEventListener('DOMContentLoaded', () => {
  const selectors = {
    NAV: '.js-nav',
    BURGER: '.js-burger',
    BODY: 'body',
  };
  const classes = {
    ACTIVE: 'active',
    NO_SCROLL: 'no-scroll'
  }

  const nav = document.querySelector(selectors.NAV);
  const burger = document.querySelector(selectors.BURGER);
  const body = document.querySelector(selectors.BODY);

  if(!nav || !burger) {
    return;
  }

  burger.addEventListener('click', toggleNav);

  function toggleNav() {
    if(nav.classList.contains(classes.ACTIVE)) {
      nav.classList.remove(classes.ACTIVE);
      burger.classList.remove(classes.ACTIVE);
      body.classList.remove(classes.NO_SCROLL);
    } else {
      nav.classList.add(classes.ACTIVE);
      burger.classList.add(classes.ACTIVE);
      body.classList.add(classes.NO_SCROLL);
    }
  }
});
