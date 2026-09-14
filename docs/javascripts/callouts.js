// Transform Obsidian-style callouts (> [!type] Title) into native Material Admonitions
function transformObsidianCallouts() {
  var blockquotes = document.querySelectorAll(".md-typeset blockquote");
  blockquotes.forEach(function (bq) {
    var firstP = bq.querySelector("p");
    if (!firstP) return;

    var text = firstP.innerHTML;
    var match = text.match(/^\s*\[!(NOTE|INFO|SUCCESS|TIP|WARNING|DANGER|FAILURE|BUG|EXAMPLE|QUOTE|QUESTION|CAUTION)\](?:\s+(.*))?/i);
    if (!match) return;

    var type = match[1].toLowerCase();
    var rawTitle = match[2] || "";
    
    // Clean title from trailing breaks or newlines
    var title = rawTitle.replace(/<br\s*\/?>.*/i, "").trim();
    if (!title) {
      title = type.charAt(0).toUpperCase() + type.slice(1);
    }

    // Remove the [!type] header line from paragraph
    var restOfHTML = text.replace(/^\s*\[!.*?\](?:\s+[^\n<]*)?(?:<br\s*\/?>|\n)?/i, "").trim();
    if (restOfHTML) {
      firstP.innerHTML = restOfHTML;
    } else {
      firstP.remove();
    }

    var typeMap = {
      note: "note",
      info: "info",
      tip: "tip",
      success: "success",
      warning: "warning",
      danger: "danger",
      failure: "failure",
      bug: "bug",
      example: "example",
      quote: "quote",
      question: "question",
      caution: "warning"
    };

    var admClass = typeMap[type] || "note";
    var adm = document.createElement("div");
    adm.className = "admonition " + admClass;

    var titleP = document.createElement("p");
    titleP.className = "admonition-title";
    titleP.innerHTML = title;
    adm.appendChild(titleP);

    while (bq.firstChild) {
      adm.appendChild(bq.firstChild);
    }

    bq.parentNode.replaceChild(adm, bq);
  });
}

document.addEventListener("DOMContentLoaded", transformObsidianCallouts);

if (typeof document$ !== "undefined") {
  document$.subscribe(transformObsidianCallouts);
}
