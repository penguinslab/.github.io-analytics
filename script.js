document.addEventListener('DOMContentLoaded', function() {
    // ブラウザがChromeかどうかを確認する関数
    function isChrome() {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return userAgent.indexOf('chrome') !== -1 && userAgent.indexOf('edge') === -1 && userAgent.indexOf('opr') === -1;
    }

    // デバイスがモバイルかどうかを確認する関数
    function isMobile() {
        const userAgent = window.navigator.userAgent;
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    }

    if (isMobile()) {
        const message = document.createElement('p');
        message.textContent = "Please use Google Chrome on your PC/Mac to access it.";
        const iframeContainer = document.getElementById('iframe-container');
        iframeContainer.appendChild(message);
    } else {
        if (isChrome()) {
            // Chromeの場合のみiframeを作成
            const iframe = document.createElement('iframe');
            iframe.src = "https://penguinslab.streamlit.app/?embedded=true"; // 埋め込むページのURLを指定してください
            iframe.classList.add('chrome-iframe');

            // iframeをDOMに追加
            const iframeContainer = document.getElementById('iframe-container');
            iframeContainer.appendChild(iframe);
        } else {
            // Chrome以外の場合はメッセージを表示
            const message = document.createElement('p');
            message.textContent = "This content is only accessible through Google Chrome. Please use Google Chrome on your PC/Mac to access it.";
            const iframeContainer = document.getElementById('iframe-container');
            iframeContainer.appendChild(message);
        }
    }
});
