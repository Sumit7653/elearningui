const courses = {
  js: {
    title: "JavaScript Basics",
    videoSrc: "https://www.youtube.com/embed/PkZNo7MFNFg",
    storageKey: "jsProgress"
  },
  htmlcss: {
    title: "HTML & CSS"
    videoSrc: "https://www.youtube.com/embed/pQN-pnXPaVg",
    storageKey: "htmlcssProgress"
  },
  react: {
    title: "React Fundamentals",
    videoSrc: "https://www.youtube.com/embed/bMknfKXIFA8",
    storageKey: "reactProgress"
  }
};

const params = new URLSearchParams(window.location.search);
const courseId = params.get("course");

if (courseId && courses[courseId]) {
  const course = courses[courseId];
  document.getElementById("courseTitle").innerText = course.title;
  document.getElementById("courseVideo").src = course.videoSrc;

  const progressBar = document.getElementById("courseProgress");
  const progressText = document.getElementById("progressText");
  let progress = parseInt(localStorage.getItem(course.storageKey)) || 0;
  progressBar.value = progress;
  progressText.innerText = `${progress}% completed`;

  window.updateProgress = function () {
    progress = Math.min(progress + 10, 100);
    progressBar.value = progress;
    progressText.innerText = `${progress}% completed`;
    localStorage.setItem(course.storageKey, progress);
  };
}
