var themeVariant = localStorage.getItem('theme') || 'light';

var themeVars = {
  light: {
    fontSize: '14px',
    fontFamily: 'sans-serif',
    background: 'transparent',
    lineColor: 'gray',
    textColor: 'gray',

    primaryColor: 'transparent',
    primaryBorderColor: 'gray',
    primaryTextColor: 'gray',

    secondaryColor: 'transparent',
    secondaryBorderColor: 'gray',
    secondaryTextColor: 'gray',

    tertiaryColor: 'transparent',
    tertiaryBorderColor: 'gray',
    tertiaryTextColor: 'gray',

    noteBorderColor: 'gray',
    noteTextColor: 'gray',
  },
  dark: {
    fontSize: '14px',
    fontFamily: 'sans-serif',
    background: 'transparent',
    lineColor: 'gray',
    textColor: 'gray',

    primaryColor: 'transparent',
    primaryBorderColor: 'red',
    primaryTextColor: 'gray',

    secondaryColor: 'transparent',
    secondaryBorderColor: 'gray',
    secondaryTextColor: 'gray',

    tertiaryColor: 'transparent',
    tertiaryBorderColor: 'gray',
    tertiaryTextColor: 'gray',

    noteBorderColor: 'gray',
    noteTextColor: 'gray',
  }
};



if (themeVariant === "dark") {
  mermaid.initialize({
    theme: 'base',
    securityLevel: 'antiscript',
    themeVariables: themeVars.dark,
  });
} else {
  mermaid.initialize({
    theme: 'base',
    securityLevel: 'antiscript',
    themeVariables: themeVars.light,
  });
}

var mermaids = [];
[].push.apply(mermaids, document.getElementsByClassName('language-mermaid'));
mermaids.forEach(function (elem) {
  var elemParentNode = elem.parentNode;

  if (elemParentNode !== document.body) {
    elemParentNode.parentNode.insertBefore(elem, elemParentNode);
    elemParentNode.parentNode.removeChild(elemParentNode);
  }

  var newElemWrapper = document.createElement('div');
  newElemWrapper.classList.add('mermaid');
  newElemWrapper.innerHTML = elem.innerHTML;
  elem.replaceWith(newElemWrapper);
});
// }
