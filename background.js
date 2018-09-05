console.log("HELLO WORLD");

browser.browserAction.onClicked.addListener(() => {
    console.log("CLICKED ON THE BUTTON");
    browser.tabs.create({
        active: true,
        url: "/site/index.html"
    });
});
