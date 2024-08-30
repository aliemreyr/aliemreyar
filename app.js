document.addEventListener("DOMContentLoaded", function () {
  // "Merhaba, ben Ali Emre" metnini göster
  var introOptions = {
    strings: ["Hello, I'm Ali Emre"],
    typeSpeed: 50,
    backSpeed: 25,
    startDelay: 500,
    loop: false,
    showCursor: false,
  };
  var typedIntro = new Typed("#typed-intro", introOptions);

  // "iOS Developer" metnini animasyon ile göster
  var roleOptions = {
    strings: ["- IOS Developer in Training -"],
    typeSpeed: 50,
    backSpeed: 25,
    startDelay: 2000,
    loop: false,
    showCursor: false,
  };
  var typedRole = new Typed("#typed-role", roleOptions);

  // "I've worked with Swift" metnini animasyon ile göster, "Swift" dinamik olarak değişsin
  var skillsOptions = {
    strings: ["I've worked with <span id='dynamic-skill'></span>"],
    typeSpeed: 50,
    backSpeed: 25,
    startDelay: 4000,
    loop: false,
    showCursor: false,
    onComplete: function () {
      var dynamicSkill = new Typed("#dynamic-skill", {
        strings: ["Swift", "C/C++", "CSS", "HTML", "JavaScript", "Git"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 1,
        loop: true,
        showCursor: false,
      });
    },
  };
  var typedSkills = new Typed("#typed-skills", skillsOptions);

  // Dinamik olarak değişen "Swift", "C++", "HTML", "CSS"
});
