import ReactMarkdown from 'react-markdown';

const resourcesContent = `

## Tools of the Trade
- ⚙️ **Scripts & JSON**: The core of every add-on I build  
- 🖌️ **Blockbench**: Crafting models and resource packs with ease  
- 🔍 **In-Game Debugging**: Finding and fixing issues on the spot  

## Power-Ups
- ⚡ **Fast Feedback Loop**: Quick testing and iteration  
- 🛡️ **Quality Assurance**: Clean, stable, and reliable content  
- 🧠 **Creative Problem Solving**: Turning ideas into fully playable features  
- 📲 **Always Active & Available**: Quick to respond and open to collaboration

## Learning Materials
- 📖 **Minecraft Script API Docs**: Official Microsoft docs for Bedrock scripting  
- 📚 **Microsoft Docs**: Staying up to date with new features and APIs  
- 💡 **Community Discords**: Sharing ideas and learning with other creators  

`;

export default function Resources() {
	return (
		<section id='resources' className='min-h-screen py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
			<h2 className='text-3xl sm:text-4xl font-bold mb-8 text-center text-white font-retro' style={{ textShadow: '2px 2px #000000' }}>
				Resources
			</h2>
			<div className='max-w-2xl mx-auto bg-gray-800 p-4 sm:p-6 rounded-lg border-4 border-gray-700'>
				<ReactMarkdown
					components={{
						h1: ({ node, ...props }) => <h1 className='text-2xl sm:text-3xl font-bold mb-4 text-yellow-300 font-retro' {...props} />,
						h2: ({ node, ...props }) => <h2 className='text-xl sm:text-2xl font-bold mt-6 mb-2 text-green-300 font-retro' {...props} />,
						ul: ({ node, ...props }) => <ul className='list-disc list-inside mb-4' {...props} />,
						li: ({ node, ...props }) => <li className='text-sm sm:text-base text-white font-retro mb-2' {...props} />,
					}}
				>
					{resourcesContent}
				</ReactMarkdown>
			</div>
		</section>
	);
}
