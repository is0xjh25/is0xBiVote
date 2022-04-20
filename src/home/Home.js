import React from 'react';
import { useNavigate} from 'react-router-dom';
import { MdHowToVote } from 'react-icons/md';
import NavBar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import './Home.css';

const Home = () => {
	
	const navigate = useNavigate();

  return (
		<>
			<header>
				<NavBar/>
			</header>
			<main> 
				<div id='home-frame'>
					<div className='home-description'>
						<h6>What is BiVote...?</h6>
						<p>
							“I disapprove of what you say, but I will defend to the death your right to say it.” (Voltaire) is the spirit valued by Bivote. This is a platform htmlFor every human being to have an opportunity to speak out their thoughts and opinions. Therefore, don’t be shy, just shout out load.
						</p>
					</div>
					<div className='home-description'>
						<h6>How BiVote works...?</h6>
						<p>
						BiVote will weekly provide currently the most debatable topics in 4 areas, world, mystery, sport and entertainment. Every user can vote htmlFor “yes or no” in the first round. Then, htmlFor and aganist posts written by others would be shown, after reading, the user can start their second round voting. After the voting process, every user can publish one post htmlFor each vote to share thier precious opinions.
						</p>
					</div>
					<div className='home-description'>
						<span>Ready to go?</span> 
						<span>
							<button onClick={()=>navigate('/vote')}>
								Pick a topic  
								<MdHowToVote/>
							</button>
						</span>	
					</div>
				</div>
			</main>
		 	<footer>
				<Footer/>
			</footer> 
		</>
  );
};

export default Home;
