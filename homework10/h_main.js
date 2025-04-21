const container = document.getElementById("container");
const search = document.getElementById("search-navbar");

async function fetchCountry(val = "") {
  let url =
    val != ""
      ? `https://www.freetestapi.com/api/v1/countries?search=${val}`
      : `https://www.freetestapi.com/api/v1/countries`;

  let res = await fetch(url);
  countries = await res.json();
  display();
}

fetchCountry();

function display() {
  let str = "";
  countries.map((val) => {
    str += `     <div
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            class="rounded-t-lg"
            src="${val.flag}"
            alt="Not Found Image"
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              ${val.name}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            ${val.capital}: ${val.currency}
          </p>
        </div>
      </div>
    `;
  });
  container.innerHTML = str;
}

search.oninput = () => {
  fetchCountry(search.value);
};
