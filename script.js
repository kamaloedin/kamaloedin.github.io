const projects = [
  {
    id: 1,
    title: "Todo List App",
    img: "img/project1.jpg",
    link: "https://kamaloedin.github.io/todo-app",
    desc: "A simple CRUD web app built with javascript that can add lists that can be shown, edited, and deleted.",
    imgCredit: "https://unsplash.com/@glenncarstenspeters",
  },
  {
    id: 2,
    title: "Bookshelf App",
    img: "img/project2.jpg",
    link: "https://kamaloedin.github.io/bookshelf-app",
    desc: "A simple web app that use javascript to store books' data, group them, and make them searchable.",
    imgCredit: "https://unsplash.com/@pickawood",
  },
  {
    id: 3,
    title: "Website Page",
    img: "img/project3.jpg",
    link: "https://kamaloedin.github.io/website-page",
    desc: "A simple and clean website page built with HTML, CSS and Javascript with an article about front-end development as its content.",
    imgCredit: "https://unsplash.com/@le_buzz",
  },
  {
    id: 4,
    title: "Rock Paper Scissor",
    img: "img/project4.jpg",
    link: "https://kamaloedin.github.io/rps-game",
    desc: "A simple web-based version of Rock Paper Scissor game built with HTML, CSS, and Javascript.",
    imgCredit: "https://unsplash.com/@marcus_wallis",
  },
  {
    id: 5,
    title: "Portfolio Website",
    img: "img/project6.jpg",
    link: "https://kamaloedin.github.io/",
    desc: "A website page built with Bootstrap 5 containing some of the projects i have done. (This page)",
    imgCredit: "https://unsplash.com/@domenicoloia",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let cards = "";
  let row;
  const projectsContainer = document.getElementById("projects-container");
  for (project of projects) {
    if (project.id % 3 === 1) {
      row = document.createElement("div");
      row.classList.add("row", "text-center", "justify-content-center", "fs-5");
      projectsContainer.append(row);
      cards = "";
    }
    cards += getCard(project);
    row.innerHTML = cards;
  }
});

const getCard = (project) => {
  return `<div class="col-md-4 mb-4">
  <div class="card">
    <a class="card-link" href="${project.link}">
      <img src="${project.img}" class="card-img-top" alt="todo list image" />
    </a>
    <div class="card-body">
      <p class="card-text">${project.title}</p>

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#pdModal-${project.id}">Details</button>

      <div class="modal fade" id="pdModal-${project.id}" tabindex="-1" aria-labelledby="pdModal-${project.id}Label" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-md">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="projectDetailModalLabel">Details</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row justify-content-center">
                  <div class="col-9">
                  ${project.desc}
                  ${project.imgCredit}
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
};