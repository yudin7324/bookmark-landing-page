document.addEventListener('DOMContentLoaded', () => {
  const selectors = {
    HEADER: '.js-header',
    BURGER: '.js-burger',
    BODY: 'body',
  };
  const classes = {
    ACTIVE: 'active',
    NO_SCROLL: 'no-scroll'
  }

  const header = document.querySelector(selectors.HEADER);
  const burger = document.querySelector(selectors.BURGER);
  const body = document.querySelector(selectors.BODY);

  if(!header || !burger) {
    return;
  }

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
});
