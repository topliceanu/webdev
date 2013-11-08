// Implementation of the bookmarklet code.
(function () {

    // 1. Build the payload for the ajax request.
    var payload = {
        url: window.location.href
    };

    // 2. Initiate AJAX request.
    var xhr = new window.XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert('Saved!');
        }
    };
    xhr.open('POST', 'https://demo-project-c9-alexandrutopliceanu.c9.io/items', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(payload));
})();

/*
 * Minified bookmarklet code.
 * javascript: (function(){var e={url:window.location.href};var t=new window.XMLHttpRequest;t.onreadystatechange=function(){if(t.readyState===4&&t.status===200){alert("Saved!")}};t.open("POST","https://demo-project-c9-alexandrutopliceanu.c9.io/items",true);t.setRequestHeader("Content-Type","application/json");t.send(JSON.stringify(e))})()
 */
