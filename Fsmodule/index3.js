import {URL} from 'url';
const myURL = new URL( "https://example.com:8080/p/a/t/h?query=string#hash" );
    console.log(myURL.hash);
    console.log(myURL.host);
    console.log(myURL.hostname);
    console.log(myURL.port);
    console.log(myURL.toJSON);
    console.log(myURL.toString);
