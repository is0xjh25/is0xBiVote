import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
		<div id='home-frame'>
			<div id='home-left'>
				<div className='home-description'>
					<h6>What is BiVote...?</h6>
					<p>
						“I disapprove of what you say, but I will defend to the death your right to say it.” (Voltaire) is the spirit valued by Bivote. This is a platform htmlFor every human being to have an opportunity to speak out their thoughts and opinions. Therefore, Don’t be shy, just shout out load.
					</p>
				</div>
				<div className='home-description'>
					<h6>How BiVote works...?</h6>
					<p>
					BiVote will weekly provide currently the most debatable topics in 4 areas, world, mystery, sport and entertainment. Every user can vote htmlFor “yes or no” in the first round. Then, htmlFor and aganist posts written by others would be shown, after reading, the user can start their second round voting. After the voting process, every user can publish one post htmlFor each vote to share thier precious opinions.
					</p>
				</div>
				<div className='home-description'>
					<h6>Ready to go? Pick a topic!<FaHandPointRight/></h6>
				</div>
			</div>
			<div id='home-right'>
				<button className='home-options-1 btn btn-outline-warning shadow'>
					WORLD
				</button>
				<button className='home-options-2 btn btn-outline-warning shadow'>
					SPORT
				</button>
				<button className='home-options-1 btn btn-outline-warning shadow'>
					MYSTERY
				</button>
				<button className='home-options-2 btn btn-outline-warning shadow'>
					ENTERTAINMENT
				</button>
			</div>
		</div>
  );
}

export default Home;
