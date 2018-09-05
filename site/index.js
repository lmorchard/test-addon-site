const $$ = id => document.getElementById(id);

$$("theForm").addEventListener("submit", ev => ev.preventDefault());

$$("uploadButton").addEventListener("change", ev => {
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onload = ev => {
        $$("data").value = ev.target.result;
    };
    reader.readAsDataURL(file);
});

$$("setTheme1").addEventListener("click", () => {
    browser.theme.update({
      "images": {},
      "properties": {},
      "colors": {
        "toolbar": "rgb(255, 255, 0)",
        "toolbar_text": "rgb(0, 0, 0)",
        "accentcolor": "rgb(255, 0, 0)",
        "textcolor": "rgb(0, 0, 0)",
        "toolbar_field": "rgb(0, 0, 0)",
        "toolbar_field_text": "rgb(255, 255, 255)",
        "tab_line": "rgb(0, 0, 0)",
        "tab_loading": "rgb(0, 0, 0)"
      }
    });
});

$$("setTheme2").addEventListener("click", () => {
    browser.theme.update({
      "images": {},
      "properties": {},
      "colors": {
        "toolbar": "rgb(31, 34, 61)",
        "toolbar_text": "rgb(255, 255, 255)",
        "accentcolor": "rgb(8, 11, 33)",
        "textcolor": "rgb(215, 226, 239)",
        "toolbar_field": "rgb(54, 58, 89)",
        "toolbar_field_text": "rgb(255, 255, 255)",
        "tab_line": "rgb(205, 35, 185)",
        "tab_loading": "rgb(205, 35, 185)"
      }
    });
});
