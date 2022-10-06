axios.get('https://api.quotable.io/random').then(res => {
    content.textContent = res.data.content;
    author.textContent = res.data.author;
});