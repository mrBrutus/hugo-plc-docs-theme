
// ============================================================================
// Branch selection (for imported sections)
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
    if ((branchUrl !== branchStored) && (branchUrl !== null))  {
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
// toc + header anchor tags
// ============================================================================
addEventListener('load', function () {
  htmlTableOfContents();
})


// ============================================================================
// adjustments for print
// ============================================================================
var details = document.getElementsByTagName('details')
window.onbeforeprint = (e) => {
  Array.prototype.forEach.call(details, function (detail) {
    detail.open = true
  })
}

window.onafterprint = (e) => {
  Array.prototype.forEach.call(details, function (detail) {
    detail.open = false
  })
}


// ============================================================================
// page animations
// ============================================================================
addEventListener('load', function () {
  // enable transitions after page is loaded
  document.body.classList.remove('notransition');
})


// ============================================================================
// keyboard bindings
// ============================================================================
document.onkeyup = function (e) {
  if (e.ctrlKey) {
    // page navigation using CTRL + arrow keys
    if (e.key == 'ArrowLeft') { clickElementById('prev') }
    if (e.key == 'ArrowRight') { clickElementById('next') }
    // focus search input
    if (e.key == '/') { focusElementById('search-input') }
  }
}


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
// light/dark theme toggle
// ============================================================================

// set switch state at load
var checkbox = document.getElementById('theme-switch');
if (checkbox) {
  checkbox.checked = (document.documentElement.classList.contains('dark'))
}

// watch for changes
addEventListener('load', function () {
  ts = document.getElementById('theme-switch');
  ts.addEventListener('change', function (e) {
    theme = (e.target.checked) ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    activateTheme(theme)
  });
});



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


// initial update
updateSidebar();


// ============================================================================
// side bar scroll position
//  - Remember the sidebar scroll position between page loads
// ============================================================================

let storedScrollPos = parseInt(sessionStorage.getItem('sidebar-scroll-pos'), 10);
let sidebarScroller = document.getElementById('sidebar');
let activeItem = sidebar.querySelector('.sidebar-item.active');

if (sidebarScroller && activeItem) {
  const activeItemOffset = activeItem.getBoundingClientRect().top - sidebarScroller.offsetTop;
  const scrollerHeight = sidebarScroller.offsetHeight;
  const activeItemHeight = activeItem.offsetHeight;
  const activeItemPadding = (scrollerHeight * 0.05)

  if (!isNaN(storedScrollPos)) {
    sidebarScroller.scrollTop = storedScrollPos;

    const scrollerPos = sidebarScroller.scrollTop;
    const activeItemPos = activeItemOffset - scrollerPos;

    // console.log('storedScrollPos: ' + Math.trunc(storedScrollPos));
    // console.log('activeItemOffset: ' + Math.trunc(activeItemOffset));
    // console.log('scrollerHeight: ' + Math.trunc(scrollerHeight));
    // console.log('activeItemHeight: ' + Math.trunc(activeItemHeight));
    // console.log('activeItemPos: ' + Math.trunc(activeItemPos));
    // console.log('scrollerPos: ' + Math.trunc(scrollerPos));

    // scroll into view
    if (activeItemPos < 0) {
      sidebarScroller.scrollTop = activeItemOffset - activeItemPadding;
    }

    if ((activeItemPos + activeItemHeight) > (scrollerHeight)) {
      sidebarScroller.scrollTop = (activeItemOffset + activeItemHeight - scrollerHeight) + activeItemPadding;
    }
  }
  else {
    sidebarScroller.scrollTop = activeItemOffset - activeItemPadding;
  }
}

window.addEventListener('pagehide', () => {
  sessionStorage.setItem('sidebar-scroll-pos', sidebarScroller.scrollTop);
});


// ============================================================================
// helpers
// ============================================================================

/**
 * Invoke `click` method for DOM element
 * @param {string} id
 */
 function clickElementById(id) {
  const l = document.getElementById(id)
  if (l) { l.click() }
}


/**
 * Invoke `focus` method for DOM element
 * @param {string} id
 */
function focusElementById(id) {
  const l = document.getElementById(id)
  if (l) { l.focus() }
}


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


/**
 * Generates a table of contents for your document based on the headings
 *  present. Anchors are injected into the document and the
 *  entries in the table of contents are linked to them. 
 *   - This is based on the code from Matthew Christopher Kastor-Inare III
 */
function htmlTableOfContents() {
  var doc = document;
  var toc = doc.getElementById('toc');
  var headings = [].slice.call(doc.body.querySelectorAll('h1, h2, h3, h4'));
  headings.forEach(function (heading) {
    var id = heading.id;
    if (id) {
      // add target to toc
      if (toc) {
        var link = doc.createElement('a');
        link.setAttribute('href', '#' + id);
        link.textContent = heading.textContent;
        var div = doc.createElement('div');
        div.setAttribute('class', 'toc_' + heading.tagName.toLowerCase());
        div.append(link);
        toc.append(div);
      }

      // insert anchor link
      var anchor = doc.createElement('a');
      anchor.setAttribute('aria-hidden', 'true');
      anchor.setAttribute('href', '#' + id);
      anchor.setAttribute('class', 'anchor');
      anchor.textContent = '#';
      heading.append(anchor);
    }
  });
}

try {
  module.exports = htmlTableOfContents;
} catch (e) {
  // module.exports is not defined
}
