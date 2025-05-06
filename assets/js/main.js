document.addEventListener('DOMContentLoaded', () => {
  const selectors = {
    HEADER: '.js-header',
    BURGER: '.js-burger',
    BODY: 'body',
    TABS: '.js-tabs',
    TABS_BTN: '.js-tabs-btn',
    TABS_SECTION: '.js-tabs-section',
    ACCORDION: '.js-accordion',
    ACCORDION_TITLE: '.js-accordion-title',
    ACCORDION_SECTION: '.js-accordion-section',
    FORM: '.js-form',
    FORM_FIELD: '.js-form-field',
    FORM_INPUT: '.js-form-input',
    FORM_ERROR: '.js-form-error',
  };
  const classes = {
    ACTIVE: 'active',
    NO_SCROLL: 'no-scroll',
    ERROR: 'error',
  }

  const header = document.querySelector(selectors.HEADER);
  const burger = document.querySelector(selectors.BURGER);
  const body = document.querySelector(selectors.BODY);
  const tabs = document.querySelector(selectors.TABS);
  const accordion = document.querySelector(selectors.ACCORDION);
  const form = document.querySelector(selectors.FORM);

  if(header && burger) {
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
  }

  if(tabs) {
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
  }

  if(accordion) {
    accordion.addEventListener('click', handleOpenSection);
    const sections = accordion.querySelectorAll(selectors.ACCORDION_SECTION);

    function handleOpenSection(event) {
      const title = event.target.closest(selectors.ACCORDION_TITLE);
      if (!title || !accordion.contains(title)) return;
      
      const item   = title.parentElement;
      const isOpen = item.classList.contains(classes.ACTIVE);
    
      sections.forEach((section) => section.classList.remove(classes.ACTIVE));
    
      if (!isOpen) {
        item.classList.add(classes.ACTIVE);
      }
    }
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector(selectors.FORM_INPUT);
      const error = form.querySelector(selectors.FORM_ERROR);
      const field = form.querySelector(selectors.FORM_FIELD);
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      input.classList.remove(classes.ERROR);
      error.classList.remove(classes.ERROR);
      field.classList.remove(classes.ERROR);

      if (!emailPattern.test(input.value.trim())) {
        input.classList.add(classes.ERROR);
        error.classList.add(classes.ERROR);
        field.classList.add(classes.ERROR);
      } else {
        form.submit();
      }
    });
  }
});
