function countDown(endTime) {
  
	let now = new Date().getTime();
  let distance = new Date(endTime).getTime() - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) return 'Vote is CLOSED';
 	return days + "D " + hours + "H "+ minutes + "M " + seconds + "S ";
};

export {
	countDown,
};