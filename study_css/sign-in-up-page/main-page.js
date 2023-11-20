const signUpBtn = document.getElementById("signUp");
const signInBtn = document.getElementById("signIn");
const container = document.querySelector(".container");

const showAccountFinderBtn = document.getElementById("showAccountFinderBtn");
const mobileReturnBtn = document.getElementById("mobileReturnBtn");
const hiddenAccountFinder = document.querySelector(".div-for-movement");

const signUpButton = document.getElementById("signUpInCreateAccount");
const hiddenEmailCertification = document.querySelector(".div-for-movement");

let isHidden = true;
let isCertificationHidden = true;

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// 숨겨놓은 비밀번호찾기 컨테이너 로직
showAccountFinderBtn.addEventListener("click", () => {
  if (isHidden) {
    hiddenAccountFinder.classList.add("hidden-account-finder-active");
  } else if (!isHidden) {
    hiddenAccountFinder.classList.remove("hidden-account-finder-active");
  }
  isHidden = !isHidden;
});

signUpBtn.addEventListener("click", () => {
  if (!isHidden) {
    hiddenAccountFinder.classList.remove("hidden-account-finder-active");

    isHidden = true;
  }
});

mobileReturnBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!isHidden) {
    hiddenAccountFinder.classList.remove("hidden-account-finder-active");
    isHidden = true;
  }
});

signUpButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (isCertificationHidden) {
    hiddenEmailCertification.classList.add("hidden-email-certification-active");
  } else if (!isCertificationHidden) {
    hiddenEmailCertification.classList.remove(
      "hidden-email-certification-active"
    );
  }
  isCertificationHidden = !isCertificationHidden;
});

signInBtn.addEventListener("click", () => {
  if (!isCertificationHidden) {
    hiddenEmailCertification.classList.remove(
      "hidden-email-certification-active"
    );

    isCertificationHidden = true;
  }
});
