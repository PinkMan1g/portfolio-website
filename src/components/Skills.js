import { SkillBar } from './ui';

const skills = [
  { name: 'Behavior Packs', level: 95, emoji: '📦' },
  { name: 'Resource Packs', level: 90, emoji: '🎨' },
  { name: 'Scripts', level: 100, emoji: '⚒️' },
  { name: 'UI / Forms', level: 85, emoji: '🧾' },
  { name: 'Commands / Functions', level: 90, emoji: '📜' },
  { name: 'Models', level: 85, emoji: '⛏️' },
  { name: 'Animations', level: 80, emoji: '🔴' },
  { name: 'Particles', level: 80, emoji: '📚' },
  { name: 'JSON Mastery', level: 100, emoji: '🧠' },
  { name: 'Testing / Debugging', level: 100, emoji: '🧪' },
  { name: 'Optimization', level: 100, emoji: '⚙️' },
];


export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl px-6 sm:px-8 md:px-12 py-6 sm:py-8 bg-gray-800 border-2 sm:border-4 border-gray-700">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center text-gray-300 font-retro">Skills</h2>
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill.name} level={skill.level} emoji={skill.emoji} />
        ))}
      </div>
    </section>
  );
}