document.querySelector("#load").addEventListener("click", load);

async function load() {
  let url = "https://jsonplaceholder.typicode.com/users";

  // fetch(url)
  //   .then(response => response.json())
  //   .then(data => {
  //     let ul = document.querySelector("#list");
  //     let html = data.map(
  //       item => `<li> ${item.id} ${item.name} (${item.email})</li>`
  //     );
  //     ul.insertAdjacentHTML("afterbegin", html.join(" "));
  //   });

  let response = await fetch(url);
  let data = await response.json();
  let ul = document.querySelector("#list");
  let html = data.map(
    item => `<li> ${item.id} ${item.name} (${item.email})</li>`
  );
  ul.insertAdjacentHTML("afterbegin", html.join(" "));
}
