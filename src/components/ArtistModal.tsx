import React from 'react';
import { X, Instagram, Radio } from 'lucide-react';
import { SpotifyIcon } from './SpotifyIcon';
import { Artist } from '../types';

interface ArtistModalProps {
  artist: Artist;
  onClose: () => void;
  performanceDay: string;
}

export function ArtistModal({ artist, onClose, performanceDay }: ArtistModalProps) {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-gray-900 rounded-lg max-w-2xl w-full relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full shadow-lg transform transition-transform hover:scale-110 z-50"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="relative h-64">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-32" />
        </div>

        <div className="p-6">
          <h3 className="text-3xl font-bold text-white mb-2">{artist.name}</h3>
          <p className="text-yellow-400 mb-4">{performanceDay} • {artist.time}</p>
          
          <p className="text-gray-300 mb-6">{artist.description}</p>
          
          <div className="flex gap-4">
            <a
              href={artist.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href={artist.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1DB954] transition-colors"
            >
              <SpotifyIcon />
            </a>
            <a
              href={artist.deezer}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              <Radio className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}