function addCharacters() {
    // 入力された文字を取得
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // 既存の文字列（ここでは例として "Hello"）
    const originalText = "Hello";

    // 文字列を連結
    const newText = originalText + email + subject + message;

    // PHP にデータを送信 (POST メソッド)
    fetch('process.php', {
        method: 'POST',
        body: JSON.stringify({ newText })
    })
    .then(response => response.text())
    .then(data => {
        // PHP からの応答を表示
        document.getElementById('result').textContent = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
