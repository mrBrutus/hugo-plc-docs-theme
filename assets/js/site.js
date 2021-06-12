
// ============================================================================
// Branche selection (for imported sections)
// ============================================================================

document.querySelectorAll('.branch-select').forEach(sel => {
  // initialize the branch selects
  initializeBranchSelect(sel);

  // when changing the selection
  sel.addEventListener('change', () => branchSelectChanged(sel));
})


/**
 * Handle branch selection changes
 */
function branchSelectChanged(sel) {
  // save to local storage
  optionToLocalStorage(sel)

  // simply reloading the page to reflect the new branch
  window.location.reload()
}



/**
 * Initialize the branch selection 
 */
function initializeBranchSelect(sel) {
  const section = sel.id

  // read and validate branch from local storage
  let branchStored = optionFromLocalStorage(sel)
  branchStored = (optionExists(sel, branchStored)) ? branchStored : null

  // read branch from url
  const branchUrl = branchFromUrl(section)

  // if available, the branch name stored in local storage is used
  if (branchStored) {
    if (branchUrl !== branchStored) {
      // change the url to reflect the stored branch
      updateBranchInUrl(branchStored, section)
    }
    else {
      // set the active option
      setOption(sel, branchStored)
    }
  }
  else {
    // the branch from the url will be used
    setOption(sel, branchUrl)
    // save to local storage
    optionToLocalStorage(sel)
  }
}



// ============================================================================
// page animations
// ============================================================================
addEventListener('load', function () {
  // enable transitions after page is loaded
  document.body.classList.remove('notransition');
})


// ============================================================================
// scroll back to top button
// ============================================================================

addEventListener('load', function () {
  let scrollTopButton = document.getElementById('scrollTopButton');
  scrollTopButton.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  // show when page is scrolled away from top
  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollTopButton.classList.add('show');
    } else {
      scrollTopButton.classList.remove('show');
    }
  };

})


// ============================================================================
// side bar
// ============================================================================

/**
* Update sidebar
*/
let updateSidebar = function () {
  sidebarShouldBeShown() ? showSidebar() : hideSidebar();
};


/**
 * Toggle the sidebar state 
 * - setting stored in sessionStorage variable
 */
let toggleSidebarState = function () {
  if (sidebarShouldBeShown()) {
    sessionStorage.removeItem('sidebar-show');
  } else {
    sessionStorage.setItem('sidebar-show', 'true');
  }
  updateSidebar();
};


/**
* Show the sidebar
*/
let showSidebar = function () {
  let sidebar = document.getElementById('sidebar');
  let overlay = document.getElementById('overlay');
  overlay.classList.add('show');
  sidebar.classList.add('show');
};


/**
 * Hide the sidebar
 */
let hideSidebar = function () {
  let sidebar = document.getElementById('sidebar');
  let overlay = document.getElementById('overlay');
  overlay.classList.remove('show');
  sidebar.classList.remove('show');
};


/**
* Returns true if sidebar should be shown, false if it shouldn't.
* @returns {boolean}
*/
let sidebarShouldBeShown = function () {
  return sessionStorage.getItem('sidebar-show') === 'true';
};



// Toggle mobile sidebar by menu button or overlay button
let toggleMenuButton = document.getElementById('toggleMenu');
toggleMenuButton.addEventListener('click', toggleSidebarState);
let overlayButton = document.getElementById('overlay');
overlayButton.addEventListener('click', toggleSidebarState);


// expand sidebar for current page
const pageUrl = location.origin + location.pathname
$('a').each(function () {
  if (this.href == pageUrl ) {
    $(this).addClass('active').parents('.collapse').addClass('show');
  }
});

// initial update
updateSidebar();


// ============================================================================
// side bar scroll position
//  - Remember the sidebar scroll position between page loads
// ============================================================================

let storedScrollTop = parseInt(sessionStorage.getItem('sidebar-scroll-top'), 10);
let sidebarScroller = document.getElementById('sidebar');
let selectedItem = sidebar.querySelector('.sidebar-item.active');

if (sidebarScroller && selectedItem) {
  if (!isNaN(storedScrollTop)) {
    sidebarScroller.scrollTop = storedScrollTop;
    // make sure it's into view
    if (selectedItem) {
      const itemTopPos = selectedItem.getBoundingClientRect().top;
      const scrollTopPos = sidebarScroller.scrollHeight;

      if (itemTopPos < sidebarScroller.offsetTop) {
        console.log("sidebar needs scroll down");
      }

      if ((itemTopPos + selectedItem.offsetHeight ) > (sidebarScroller.offsetTop + sidebarScroller.offsetHeight)) {
        console.log("sidebar needs scroll up");
      }

      // console.log(sidebarScroller.offsetTop);
      // console.log(sidebarScroller.offsetHeight);
      // console.log(sidebarScroller.scrollHeight);
      // console.log(sidebarScroller.scrollTop);
      // console.log(itemTopPos);
    }
  }
  else {
    // let selectedItem = sidebar.querySelector('.sidebar-item.active');
    sidebarScroller.scrollTop = selectedItem.offsetTop + sidebarScroller.offsetHeight * 0.8;
  }
}

window.addEventListener('pagehide', () => {
  sessionStorage.setItem('sidebar-scroll-top', sidebarScroller.scrollTop);
});


// ============================================================================
// helpers
// ============================================================================

/**
 * Checks if the option exists in the HTML <select> element
 * @param {HTMLSelectElement} selectElement
 * @param {string} optionValue
 * @return {boolean}
 */
function optionExists(selectElement, optionValue) {
  return !!Array.prototype.find.call(selectElement.options, function (option) {
    return option.value === optionValue;
  })
}


/**
 * Set the value for the HTML <select> element
 * @param {HTMLSelectElement} selectElement
 * @param {string} optionValue
 */
function setOption(selectElement, optionValue) {
  if (optionExists(selectElement, optionValue)) {
    selectElement.value = optionValue
  }
}


/**
* Save the selected HTML <select> option to local storage
* @param {HTMLSelectElement} selectElement
*/
function optionToLocalStorage(selectElement) {
  localStorage.setItem(selectElement.id, selectElement.value);
}


/**
* Get the saved HTML <select> option from local storage
* @param {HTMLSelectElement} selectElement
* @return {string}
*/
function optionFromLocalStorage(selectElement) {
  return localStorage.getItem(selectElement.id);
}


/**
* Update the url for the selected branch
* @param {string} branch the new branch e.g. `4.5.6`
* @param {string} prefix (optional) prefix for the branch string
* - e.g. `lib` for a url like `/foo-0.1.2/lib-1.2.3/bar-2.3.4/`
*/
function updateBranchInUrl(branch, section) {
  let url = window.location.href;

  const sectionUrlOld = section + '-' + branchFromUrl(section)
  const sectionUrlNew = section + '-' + branch

  // load new url
  url = url.replace(sectionUrlOld, sectionUrlNew)
  window.location.replace(url)
}


/**
 * Get the branch string from the URL
 * @param {string} section for the branch string
 * - e.g. `lib` for a url like `/foo-0.1.2/lib-1.2.3/bar-2.3.4/`
 * @return {string} branch string e.g. `1.2.3`
*/
function branchFromUrl(section) {
  const url = window.location.href;
  const re = section + '-(.*?)\/'
  const m = url.match(re);
  return m ? m[1] : null;
}
