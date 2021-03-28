// ============================================================================
// Light/Dark Theme
//
// Switch between light and dark theme either by the page's toggle switch or
// by the OS dark mode setting (last one changed wins).
//  - setting memorized using localStorage
//  - dark mode added as CSS class 'dark' to the <HTML> element
//  - also switches the Highlight.js stylesheet
//  - uses light theme for printing
//
// ============================================================================

/**
 * Set theme for the page and activates the
 * corresponding `Highlight.js` stylesheet
 * @param {string} theme - theme selection (light/dark)
 */
let activateTheme = function (theme) {
  // dark theme adds css class 'dark' to the <html> element
  (theme === 'dark') ?
    document.documentElement.classList.add('dark') :
    document.documentElement.classList.remove('dark');

  // activate the corresponding Highlight.js stylesheet
  const hljsDarkCss = document.getElementById('hljsDarkCss');
  const hljsLightCss = document.getElementById('hljsLightCss');

  if (hljsDarkCss && hljsLightCss) {
    const isDark = (theme === 'dark')
    hljsLightCss.disabled = isDark;
    hljsDarkCss.disabled = !isDark;
  }

  // update theme toggle switch state
  var checkbox = document.getElementById('theme-switch');
  if (checkbox) {
    checkbox.checked = (theme === 'dark')
  }

};

const storedTheme = localStorage.getItem('theme')
const osDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
let theme = 'light'

if (storedTheme) {
  theme = storedTheme;
} else if (osDarkTheme) {
  theme = 'dark';
}
activateTheme(theme)


// Watch os dark mode
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
  theme = (e.matches) ? 'dark' : 'light'
  localStorage.removeItem('theme');
  activateTheme(theme)
});


// Use light theme for printing
window.onbeforeprint = (event) => {
  document.documentElement.classList.remove('dark');
};

window.onafterprint = (event) => {
  activateTheme(theme)
};
