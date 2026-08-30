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
      className="reveal group text-center px-4 py-6"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Photo */}
      <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 xl:w-48 xl:h-48 mx-auto mb-5 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 bg-blue-50 flex items-center justify-center border-2 border-blue-100">
        <FiUser size={48} className="text-blue-300 sm:text-blue-400" />
        {/* Social overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
          <div className="flex gap-3">
            {member.socials?.facebook && (
              <a
                href={member.socials.facebook}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-blue-500 hover:text-white transition-all"
                aria-label={`${member.name} Facebook`}
              >
                <FiFacebook size={14} />
              </a>
            )}
            {member.socials?.linkedin && (
              <a
                href={member.socials.linkedin}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-blue-500 hover:text-white transition-all"
                aria-label={`${member.name} LinkedIn`}
              >
                <FiLinkedin size={14} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Info */}
      <h3 className="font-heading text-sm sm:text-base lg:text-lg font-bold text-navy group-hover:text-gold-dark transition-colors">
        {member.name}
      </h3>
      <p className="text-xs sm:text-sm text-gold font-medium mt-1">{member.role}</p>
    </div>
  );
}
