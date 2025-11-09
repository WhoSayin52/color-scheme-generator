const form = document.querySelector('.color-form')
const colorBoxes = document.getElementsByClassName('color-box')
const colorHexBtns = document.getElementsByClassName('color-hex-btn')

document.addEventListener('click', (event) => {
	if (event.target.classList.contains('color-hex-btn')) {
		navigator.clipboard.writeText(event.target.textContent)
	}
})

form.addEventListener('submit', (event) => {
	event.preventDefault()

	const formData = new FormData(form);

	const color = formData.get('color').slice(1)
	const scheme = formData.get('scheme').toLowerCase()

	fetch(`https://www.thecolorapi.com/scheme?count=5&hex=${color}&mode=${scheme}`)
		.then((response) => response.json())
		.then((data) => {

			for (let i = 0; i < colorBoxes.length; ++i) {
				colorBoxes[i].style.backgroundColor = data.colors[i].hex.value
				colorHexBtns[i].textContent = data.colors[i].hex.value
			}

		})
})
