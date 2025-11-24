import { motion } from 'framer-motion';
import { ProjectBlock } from './ui';

const projects = [
	{
		title: 'Add-On Pending Release',
		emoji: '⏳',
		image: '/images/placeholder.png',
		description: 'Add-On that is currently under QA and is pending to be released soon.',
	},
	{
		title: 'Revive Add-On',
		emoji: '🌋',
		image: '/images/revive.png',
		link: 'https://www.minecraft.net/en-us/marketplace/pdp/cubical/revive-add--on/513a57fb-00b5-454a-966b-b8c75c54c613',
		description: "Add-On that created by me for Cubical Studios. It is based on intercepting player's death and allowing them to be revived by another players.",
	},
	{
		title: 'Alphabet Blocks Add-On',
		description:
			'Add-On created by me for Meraki Studios. I used custom block components to create interactive blocks that players can place and break.',
		link: 'https://www.bedrockexplorer.com/@meraki/alphabet-blocks-add-on',
		emoji: '🌋',
		image: '/images/alphabet_blocks.png',
	},
	{
		title: '30+ Biomes Hardcore World',
		description:
			'Hardcore world I created for The Craft Stars, featuring custom bosses, a kill quest system, unique potions, and new food items.',
		link: 'https://www.bedrockexplorer.com/@the-craft-stars/30-biomes-hardcore-world',
		emoji: '📘',
		image: '/images/30_biomes.png',
	},
	{
		title: 'Towers & Dungeons Add-On',
		description:
			'Add-On I contributed to for The Craft Stars, where I worked on custom entities and weapons.',
		link: 'https://www.bedrockexplorer.com/@the-craft-stars/towers-and-dungeons',
		emoji: '🔴',
		image: '/images/towers_dungeons.png',
	},
	{
		title: 'Vehicles+',
		description:
			'A dynamic world I created for DiamondCraft, featuring a variety of vehicles and a custom crafting system.',
		link: 'https://www.bedrockexplorer.com/@waypoint-studios/vehicles',
		emoji: '🐉',
		image: '/images/vehicles.png',
	},
	{
		title: 'Item Hunt',
		description: 'Mini game I created for Piki Studios.',
		link: 'https://bedrockexplorer.com/@piki-studios/item-hunt',
		emoji: '🌳',
		image: '/images/item_hunt.png',
	},
	{
		title: 'Morph',
		description:
			'Dynamic world I created for Pickaxe Studios, which has 49K+ reviews.',
		link: 'https://bedrockexplorer.com/@pickaxe-studios/morph',
		emoji: '🎨',
		image: '/images/morph.png',
	},
	{
		title: 'Weapons+',
		description:
			'Dynamic world I worked on for Kubo Studios, where I added custom weapons and tools.',
		link: 'https://bedrockexplorer.com/@kubo-studios/weapons',
		emoji: '🎨',
		image: '/images/weapons.png',
	},
	{
		title: 'Morph Into Mobs',
		description: 'Dynamic world I created for Kubo Studios.',
		link: 'https://www.minecraft.net/en-us/marketplace/pdp/kubo-studios/morph-into-mobs!-1.0/c8239277-4156-4cb3-8f8a-4e7a2d59ff94',
		emoji: '🎨',
		image: '/images/morph_1.png',
	},
	{
		title: 'Happy Town',
		description: 'Dynamic world I worked on for Kubo Studios.',
		link: 'https://www.minecraft.net/en-us/marketplace/pdp/kubo-studios/happy-town/35040e5c-1679-4233-84e5-a75b87e9de5b',
		emoji: '🎨',
		image: '/images/happy_town.png',
	},
];


export default function Projects() {
	return (
		<section id='projects' className='min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8'>
			<h2 className='text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-white font-retro'>Featured Projects</h2>
			<div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto'>
				{projects.map((project, index) => (
					<motion.div
						key={project.title}
						className='w-full flex justify-center'
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.2 }}
					>
						<div className='w-full sm:w-auto p-3 sm:p-4'>
							<ProjectBlock {...project} />
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
