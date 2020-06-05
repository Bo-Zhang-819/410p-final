window.onload = function() {
  var door = true;
  var skills = document.getElementById("skills");
  var skills_btn = document.getElementById("skills_btn");
  var skin = document.getElementById("skin");
  var skin_btn = document.getElementById("skin_btn");
  var background = document.getElementById("background");
  var background_btn = document.getElementById("background_btn");
  var dialog = document.getElementById("dialog");
  var searchValue = "";
  select.addEventListener("click", e => {
    if (door) {
      select_img.style.transform = "rotateX(" + 180 + "deg)";
      dialog.style.display = "block";
      door = false;
    } else {
      select_img.style.transform = "rotateX(" + 0 + "deg)";
      dialog.style.display = "none";
      door = true;
    }
  });
  dialog.onclick = () => {
    select_img.style.transform = "rotate(" + 0 + "deg)";
    dialog.style.display = "none";
    door = true;
  };
  skills_btn.addEventListener("click", () => {
    skills.style.display = "block";
    skin.style.display = "none";
    background.style.display = "none";
    skills.value = searchValue;
  });
  skin_btn.addEventListener("click", () => {
    skills.style.display = "none";
    skin.style.display = "block";
    background.style.display = "none";
    skin.value = searchValue;
  });
  background_btn.addEventListener("click", () => {
    skills.style.display = "none";
    skin.style.display = "none";
    background.style.display = "block";
    background.value = searchValue;
  });
  

  search(skills, "https://www.google.com/search?q=");
  search(skin, "https://magi.com/search?q=");
  search(background, "https://www.baidu.com/s?wd=");

};
