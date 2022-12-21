const avatar = document.querySelector('.avatar'),
	checkbox = document.querySelector('.checkbox'),
	nickname = document.querySelector('.nickname')

const getData = async () => {
	try {
		const response = await fetch('https://api.github.com/users/naf-fly')
		const data = await response.json()

		avatar.src = data.avatar_url
		nickname.textContent = data.login
	} catch (error) {
		console.log(`Ошибка ${error}`)
	}
}

checkbox.addEventListener('change', e => {
	if (e.target.checked) {
		getData()
		avatar.classList.remove('hide')
		nickname.classList.remove('hide')
	} else {
		avatar.classList.add('hide')
		nickname.classList.add('hide')
	}
})
