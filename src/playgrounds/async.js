const urls = [
  "htts://jsonplaceholder.typicode.com/users",
  "htts://jsonplaceholder.typicode.com/albums",
  "htts://jsonplaceholder.typicode.com/postss"
];

const loopUrls = url => {
  for (url of urls) {
    console.log(url);
  }
};

const getData = async function() {
  const arrayOfPromises = urls.map(url => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};
