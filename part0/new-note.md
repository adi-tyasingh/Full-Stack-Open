```Mermaid
    sequenceDiagram
        participant browser;
        participant server;
        Note right of browser: When user submits form, a POST request is sent.
        browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
        activate server
        server-->>browser: URL Redirect
        deactivate server 
        Note left of server: The server redirects the browser to https://studies.cs.helsinki.fi/exampleapp/notes
        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes;
        activate server
        server-->>browser: HTML document
        deactivate server
        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
        activate server
        server-->>browser: the css file
        deactivate server
        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
        activate server
        server-->>browser: the JavaScript file
        deactivate server
        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
        activate server
        server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
        deactivate server
        Note left of server: The server sends an updated JSON file containing the new note and it's time stamp
    
```