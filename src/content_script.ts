import { browser } from 'webextension-polyfill-ts';

function init() {
    browser.runtime.onMessage.addListener(
        (msg, sender) =>
            new Promise((resolve, reject) => {
                console.log('Received message', msg, 'from', sender);
                if (msg.color) {
                    console.log('Receive color = ' + msg.color);
                    document.body.style.backgroundColor = msg.color;
                }
                resolve('OK');
            })
    );
}

init();
