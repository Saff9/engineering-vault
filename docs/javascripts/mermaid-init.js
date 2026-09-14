document.addEventListener("DOMContentLoaded", function () {
  if (typeof mermaid !== "undefined") {
    var isDark = document.body.getAttribute("data-md-color-scheme") === "slate";
    mermaid.initialize({
      startOnLoad: true,
      theme: isDark ? "dark" : "default",
      securityLevel: "loose"
    });
  }
});

// Support instant navigation if enabled
if (typeof document$ !== "undefined") {
  document$.subscribe(function () {
    if (typeof mermaid !== "undefined") {
      mermaid.run({
        nodes: document.querySelectorAll(".mermaid")
      });
    }
  });
}
