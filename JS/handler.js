document
  .getElementById('title-change')
  .addEventListener('click', function changeTitle() {
    const heading = document.getElementById('page-title');
    heading.innerText = 'Button is using click handler';
  });

document.getElementById('login').addEventListener('click', function () {
  const userLogin = document.getElementById('user-login');
  userLogin.innerText = 'User logged in';
});
