document.addEventListener("DOMContentLoaded", () => {
  const sidebarRoot = document.getElementById("sidebar-root");

  if (sidebarRoot) {
    // adjust path depending on where sidebar.html lives
    fetch("../sidebar/sidebar.html")  
      .then(res => res.text())
      .then(html => {
        sidebarRoot.innerHTML = html;

        // Highlight active link
        const links = sidebarRoot.querySelectorAll("a");
        links.forEach(link => {
          if (link.href === window.location.href) {
            link.classList.add("bg-[#0707418c]", "text-white");
          }
        });
      })
      .catch(err => console.error("Sidebar load failed:", err));
  }
});
