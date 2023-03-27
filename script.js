const jokeText = document.getElementById('joke-text');
const getJokeBtn = document.getElementById('get-joke-btn');

getJokeBtn.addEventListener('click', () => {
	fetch('https://official-joke-api.appspot.com/jokes/random')
		.then(response => response.json())
		.then(data => {
			jokeText.innerHTML = data.setup + "<br>" + data.punchline;
		})
		.catch(error => console.log(error));
});
