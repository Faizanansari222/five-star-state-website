import { TEAM } from '../../data/siteData';
import SectionHeader from '../ui/SectionHeader';
import TeamCard from '../ui/TeamCard';

/**
 * Team section with a responsive grid of team member cards.
 */
export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="Our People"
          title="Meet Our Team"
          subtitle="The driving force behind our success — dedicated professionals committed to excellence."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
