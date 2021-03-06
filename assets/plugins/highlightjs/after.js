// ============================================================================
// Highlight.js code blocks
//
// This adds the following to code blocks:
//  - copy button
//  - collapse larger code blocks
//  - bottom fade effect in collapsed state
//  - language label
//
// ============================================================================
hljs.initHighlightingOnLoad();

// ============================================================================
// add 'hljs-code' class to the code blocks
//
// ============================================================================
var blocks = document.querySelectorAll('pre');
Array.prototype.forEach.call(blocks, function (block) {
  block.classList.add('hljs-code');
});


// Collapsible Hugo code blocks
// by Jiri De Jagere, @JiriDJ
// https://github.com/jiridj/hugo-collapsible-code

const height = '320px'; // max-h-80

// inline SVG from https://heroicons.com/
const svgIconDuplicate = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>';
const svgIconPlus = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>';
const svgIconMinus = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" /></svg>';
const svgSelector = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>';

function toggleCodeblock(e) {
  var link = e.target;
  var cb = link.closest(".hljs-code");
  cb.classList.toggle('collapsed');
}

async function copyToClipboard(e) {
  var cb = e.target.closest(".hljs-code");
  const codeToCopy = cb.querySelector('code').innerText

  try {
    result = await navigator.permissions.query({ name: "clipboard-write" });
    if (result.state == "granted" || result.state == "prompt") {
      await navigator.clipboard.writeText(codeToCopy);
    }
  } catch (_) {
    copyBanner(e, 'fail');
  }
  finally {
    copyBanner(e, 'success');
  }
}


function copyBanner(e, r) {
  let bw = e.target.closest(".btn-wrapper");
  let sp = document.createElement('span');
  if (r === 'success') {
    sp.className = "copy-banner";
    sp.innerText = "copied!"
  } else {
    sp.className = "copy-banner fail";
    sp.innerText = "??? copying failed!"
  }
  // add copy information banner
  bw.prepend(sp);
  setTimeout(function() {
    // and remove it
    bw.removeChild(sp);
  }, 2000);
}


function processCodeBlocks() {  
  // codeblocks inside a `note` are excluded
  var codeblocks = document.querySelectorAll(':not(.note) > .hljs-code');  

  for (i = 0; i < codeblocks.length; i++) {
    var cb = codeblocks[i];
    // add button wrapper
    var bw = document.createElement('div');
    bw.className = 'btn-wrapper';
    cb.appendChild(bw);

    // collapse large code blocks
    if (cb.offsetHeight > parseInt(height, 10)) {
      cb.classList.add('collapsed')

      // add fade effect at bottom
      var fade = document.createElement('div');
      fade.className = 'bottom-fade';
      fade.addEventListener('click', toggleCodeblock);
      cb.appendChild(fade);

      // add expand/collapse button
      var btn = document.createElement('button');
      btn.className = "collapse-btn";
      btn.setAttribute('aria-label', 'expand/collapse');
      btn.innerHTML = svgSelector;
      btn.addEventListener('click', toggleCodeblock);
      bw.appendChild(btn);
    }

    // add copy button
    var btn = document.createElement('button');
    btn.className = "copy-btn";
    btn.setAttribute('aria-label', 'copy source');
    btn.innerHTML = svgIconDuplicate;
    btn.addEventListener('click', copyToClipboard);
    bw.appendChild(btn);


    // add language label
    var sp = document.createElement('span');
    sp.className = "language-label";
    // read language from the <code> element
    var hljs = cb.getElementsByTagName("code")[0];
    sp.innerHTML = hljs.result.language;
    bw.appendChild(sp);
  }

}


addEventListener('load', function () {
  processCodeBlocks();
});
