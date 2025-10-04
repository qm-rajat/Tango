import { Users } from 'lucide-react';
import TangoIcon from './TangoIcon';

const profiles = [
  { id: 1, name: 'Ap ♥ ☆', viewers: 695, image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
  { id: 2, name: 'MEER ◆', viewers: 582, image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
  { id: 3, name: 'Elina ♪', viewers: 651, image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
  { id: 4, name: 'Heer ♦', viewers: 484, image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
  { id: 5, name: 'RANJEET ♔', viewers: 886, image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
  { id: 6, name: 'Mickey ☆', viewers: 447, image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
  { id: 7, name: 'Sandy D...', viewers: 832, image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
  { id: 8, name: 'Aanchal', viewers: 833, image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
  { id: 9, name: 'Flora ♌', viewers: 721, image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
  { id: 10, name: 'Skyla ✨ ☆', viewers: 528, image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
  { id: 11, name: 'niral', viewers: 248, image: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
  { id: 12, name: 'Jasleen ♪', viewers: 348, image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' }
];

export default function ProfileCarousel() {
  // Duplicate profiles for seamless infinite scroll
  const duplicatedProfiles = [...profiles, ...profiles];

  return (
    <div className="relative w-full py-6 bg-gradient-to-t from-black/80 to-transparent">
      <div className="flex items-center space-x-2 mb-4 px-4">
        <TangoIcon size={24} className="animate-pulse" />
        <span className="text-white font-semibold">Trending Now</span>
      </div>
      
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-left">
          {duplicatedProfiles.map((profile, index) => (
            <div
              key={`${profile.id}-${index}`}
              className="flex-shrink-0 mx-2 relative group cursor-pointer"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-pink-500/50 group-hover:border-pink-400 transition-colors">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Live indicator */}
                <div className="absolute -top-1 -left-1 bg-pink-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                  LIVE
                </div>
              </div>
              
              <div className="mt-1 text-center">
                <p className="text-white text-xs font-medium truncate w-16" title={profile.name}>
                  {profile.name}
                </p>
                <div className="flex items-center justify-center space-x-1 mt-1">
                  <Users size={10} className="text-white/60" />
                  <span className="text-white/60 text-xs">{profile.viewers}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}