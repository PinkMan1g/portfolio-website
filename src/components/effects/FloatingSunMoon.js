import React, { useRef, useEffect } from 'react';

const stages = [
	'🌑',
	'🌒',
	'🌓',
	'🌔', // Night (0-3)
	'🌅', // Sunrise (4)
	'☀️',
	'☀️',
	'☀️',
	'☀️',
	'☀️',
	'☀️',
	'☀️',
	'☀️',
	'☀️',
	'☀️',
	'☀️', // Day (5-15)
	'🌅', // Sunset (16)
	'🌕',
	'🌖',
	'🌗',
	'🌘', // Night (17-20)
];

export default function FloatingSunMoon({ time }) {
	const elementRef = useRef(null);

	const totalMinutes = time.hours * 60 + time.minutes;
	const currentStage = Math.floor((totalMinutes / 1440) * stages.length) % stages.length;

	useEffect(() => {
		if (elementRef.current) {
			const progress = totalMinutes / 1440; // 1440 minutes in a day

			// Calculate position on a circular path
			const angle = (progress - 0.25) * 2 * Math.PI; // Start at top (midnight)
			const x = Math.cos(angle);
			const y = Math.sin(angle);

			// Adjust the range to stay within the middle 90% of the screen width
			// and middle 70% of the screen height
			const adjustedX = ((x + 1) / 2) * 0.9 + 0.1;
			const adjustedY = ((y + 1) / 2) * 0.7 + 0.2;

			elementRef.current.style.left = `${adjustedX * window.innerWidth}px`;
			elementRef.current.style.top = `${adjustedY * window.innerHeight}px`;
		}
	}, [totalMinutes]);

	const handleClick = () => {
		window.open('https://github.com/PinkMan1g/About-Me/tree/main', '_blank');
	};

	return (
		<div ref={elementRef} className='fixed text-4xl z-40 transition-all duration-[833ms] ease-linear cursor-pointer' onClick={handleClick}>
			{stages[currentStage]}
		</div>
	);
}
