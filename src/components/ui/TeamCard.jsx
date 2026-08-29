import { FiFacebook, FiLinkedin, FiUser } from 'react-icons/fi';
import useReveal from '../../hooks/useReveal';

/**
 * Single team member card with photo and social hover overlay.
 */
export default function TeamCard({ member, index }) {
  const ref = useReveal(0.1);

  return (
    <div
      ref={ref}
      className="reveal group text-center"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Photo */}
      <div className="relative w-48 h-48 mx-auto mb-5 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 bg-gray-100 flex items-center justify-center">
        <FiUser size={64} className="text-gray-300" />
        {/* Social overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
          <div className="flex gap-3">
            {member.socials?.facebook && (
              <a
                href={member.socials.facebook}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-all"
                aria-label={`${member.name} Facebook`}
              >
                <FiFacebook size={14} />
              </a>
            )}
            {member.socials?.linkedin && (
              <a
                href={member.socials.linkedin}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-all"
                aria-label={`${member.name} LinkedIn`}
              >
                <FiLinkedin size={14} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Info */}
      <h3 className="font-heading text-lg font-bold text-navy group-hover:text-gold-dark transition-colors">
        {member.name}
      </h3>
      <p className="text-sm text-gold font-medium mt-1">{member.role}</p>
    </div>
  );
}
