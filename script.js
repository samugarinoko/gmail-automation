function createLink() {
  const to = document.getElementById('to').value;
  const subject = document.getElementById('subject').value;
  const body = document.getElementById('body').value;

  const url = `https://mail.google.com/mail/u/0/?to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&fs=1&tf=cm`;

  document.getElementById('mailLink').href = url;
  document.getElementById('mailLink').textContent = "このリンクをクリックしてメールを作成";
}
