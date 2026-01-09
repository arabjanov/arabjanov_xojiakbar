document.addEventListener("DOMContentLoaded", () => {

  const projects = [
    {
      img: "images/earth.jpg",
      link: "https://earth-umber.vercel.app/",
    },
    {
      img: "images/cub.jpg",
      link: "https://three-s.vercel.app/"
    }
  ];

  const container = document.getElementById("projects");

  projects.forEach(p => {
    const div = document.createElement("div");
    div.className = "project";
    div.style.backgroundImage = `url(${p.img})`;
    div.onclick = () => window.open(p.link, "_blank");
    container.appendChild(div);
  });

});
