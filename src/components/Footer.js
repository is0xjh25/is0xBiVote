import React, { Fragment } from 'react';
import  Favicon from '../images/is0-favicon.png';
import './Footer.css';

const Footer = () => {
  return (
	<div id='footer-frame'>
		<div class='footer-section'>
			<div>
				ON GITHUB - <a href="https://github.com/users/is0xjh25/projects/11" target="_blank">is0xjh25/BiVote</a>
			</div>
			<div>
				CONTACT US - <a href="mailto:is0.jimhsiao@gmail.com">is0xTeam</a>
			</div>
		</div>
		<div class='footer-section'>
			<div>
				DEVELOPED BY - <a href="https://is0xjh25.github.io" target="_blank">is0xjh25</a>
			</div>
			<div>
				COPYRIGHT © 2022 BiVote, is0xjh25
			</div>
		</div>
		<div id='footer-logo'>
			<img id='footer-logo-image' src={Favicon} alt="is0-favicon"/>
		</div>
	</div>
  );
}

export default Footer;