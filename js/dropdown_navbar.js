let dropdownNavbar = () => {
    document.getElementById('dropdown-mine').classList.toggle('show');
  }

  let button = document.getElementsByClassName("dropdown-button");
  button[0].addEventListener("click", dropdownNavbar);

  window.onclick = function(event) {
    if (!event.target.matches(".dropdown-button")) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  }