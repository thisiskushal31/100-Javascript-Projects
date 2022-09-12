// download image from html element

const media = document.querySelector(" . media ");
const input = document.querySelector(" input ");
const button = document.querySelector(" button ");

input.addEventListener("input", e => {
    e.preventDefault();
    let url = e.target.value;

    if (!url.trim()) return;

    fetchImage(url);
})

