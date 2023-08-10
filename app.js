let btn = document.querySelector("button");
let p = document.querySelector("p");

let url =
    "https://api.giphy.com/v1/gifs/search?api_key=2rddxVXGwWnRrspSKg7WyBS1jABXTgPm&q=hello&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";
let key = "2rddxVXGwWnRrspSKg7WyBS1jABXTgPm";

btn.addEventListener("click", () => {
    fetch(url, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${key}`,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            p.innerHTML = "";

            const randomIndex = Math.floor(Math.random() * data.data.length);
            const gifData = data.data[randomIndex];
            const gifUrl = gifData.images.original.url;

            const img = document.createElement("img");
            img.src = gifUrl;

            p.appendChild(img);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});
