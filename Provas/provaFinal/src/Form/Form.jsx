import React from 'react';
import './Form.css'

const Form = () => {

	const handleClick = (event) => {
		event.preventDefault();
		const inputText = document.getElementById('inputField').value;

		if (inputText === '') {
			alert('Email em branco. Favor informa-lo');
			return;
		}

		else{
			const paragraph = document.querySelector('.form-container p');
			paragraph.textContent = inputText;

		}

	};

	return (
		<div className='form-container'>

		<form >
			<label htmlFor="inputField">Email:</label>
			<input type="email" id="inputField" />
			<button onClick={handleClick}>Enviar</button>
		</form>
		<p></p>
		</div>
	);
};

export default Form;
