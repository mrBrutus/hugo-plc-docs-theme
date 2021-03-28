// ============================================================================
// Light/Dark Theme toggle switch
//
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
// Highlight.js code blocks
//
// todo: some description.
//  - copy button
//  - collapse larger code blocks
//  - bottom fade effect in collapsed state
//  - todo: language label
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

const height = '208px'; // max-h-52

// inline SVG from https://heroicons.com/
const svgIconDuplicate = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>';
const svgIconPlus = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>';
const svgIconMinus = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" /></svg>';
const svgSelector = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>';

function toggleCodeblock(e) {
  var link = e.target;
  var cb = link.closest(".hljs-code");
  cb.classList.toggle('collapsed');
  if (cb.classList.contains('collapsed')) {

    // cb.scrollIntoView({ behavior: 'smooth', block: "nearest" });
    // todo: toggle svg


    //   // clipboard
    //   var clipInit = false;
    //   // var codeblocks = $("pre code:not(.no-copy)");
    //   // codeblocks.each(function () {

    //   $("pre code:not(.no-copy)").each(function () {
    //     var code = $(this),
    //       text = code.text();

    //     if (text.length > 5) {
    //       if (!clipInit) {
    //         var text;
    //         var clip = new Clipboard(".copy-btn", {
    //           text: function (trigger) {
    //             text = $(trigger)
    //               .prev("code")
    //               .text();
    //             return text.replace(/^\$\s/gm, "");
    //           }
    //         });

    //         clip.on("success", function (e) {
    //           e.clearSelection();
    //           $(e.trigger)
    //             .text("Copied to clipboard!")
    //             .addClass("copied");

    //           window.setTimeout(function () {
    //             $(e.trigger)
    //               .text("Copy")
    //               .removeClass("copied");
    //           }, 2000);
    //         });

    //         clip.on("error", function (e) {
    //           e.clearSelection();
    //           $(e.trigger).text("Error copying");

    //           window.setTimeout(function () {
    //             $(e.trigger).text("Copy");
    //           }, 1000);
    //         });

    //         clipInit = true;
    //       }

    //       // code.after('<span class="copy-btn">Copy</span>');
    //     }
    //   });

    // });


  }
}

function copyToClipboard(e) {
  var link = e.target;
  console.log('copy to clipboard');
  // todo: copy logic
}

function processCodeBlocks() {
  var codeblocks = document.querySelectorAll('.hljs-code');

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
      btn.innerHTML = svgSelector;
      btn.addEventListener('click', toggleCodeblock);
      bw.appendChild(btn);
    }

    // add copy button
    var btn = document.createElement('button');
    btn.className = "copy-btn";
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



// $(function () {

//   // clipboard
//   var clipInit = false;
//   // var codeblocks = $("pre code:not(.no-copy)");
//   // codeblocks.each(function () {

//   $("pre code:not(.no-copy)").each(function () {
//     var code = $(this),
//       text = code.text();

//     if (text.length > 5) {
//       if (!clipInit) {
//         var text;
//         var clip = new Clipboard(".copy-btn", {
//           text: function (trigger) {
//             text = $(trigger)
//               .prev("code")
//               .text();
//             return text.replace(/^\$\s/gm, "");
//           }
//         });

//         clip.on("success", function (e) {
//           e.clearSelection();
//           $(e.trigger)
//             .text("Copied to clipboard!")
//             .addClass("copied");

//           window.setTimeout(function () {
//             $(e.trigger)
//               .text("Copy")
//               .removeClass("copied");
//           }, 2000);
//         });

//         clip.on("error", function (e) {
//           e.clearSelection();
//           $(e.trigger).text("Error copying");

//           window.setTimeout(function () {
//             $(e.trigger).text("Copy");
//           }, 1000);
//         });

//         clipInit = true;
//       }

//       // code.after('<span class="copy-btn">Copy</span>');
//     }
//   });

// });
