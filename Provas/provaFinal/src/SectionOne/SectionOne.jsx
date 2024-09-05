import React from 'react';
import './SectionOne.css'

const SectionOne = (props) => {
	return 	<div className='sectionContainer'>
		<h1 className='title'>
		{props.Htext}
		</h1>

		<p className='subtitle'>
			{props.Ptext}
		</p>
	</div>;
}
export default SectionOne;