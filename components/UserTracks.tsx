import { useGetUserTracks } from '@/hooks/user';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Ellipsis, Heart } from 'lucide-react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { usePlaybackControlsStore } from '@/store/PlaybackControlsStore';
import { usePlayAudioStore } from '@/store/PlayAudioStore';
import { useLikeTrack } from '@/hooks/track';
import { useQueryClient } from '@tanstack/react-query';

function UserTracks({ username }: { username: string }) {
  const { data: tracks } = useGetUserTracks(username);

  const {mutate: likeTrack} = useLikeTrack(false, username)
  const { openPlaybackControls, isOpen } = usePlaybackControlsStore();
  const { setAudioDetails, audioDetails } = usePlayAudioStore();
  const queryClient = useQueryClient()
  
  const pauseAudio = () => {
    audioDetails.audioRef?.current?.pause();
    setAudioDetails({ isPlaying: false });
  };

  console.log("tracks", tracks);
  
  const playAudio = (index: number) => {
    openPlaybackControls();
    setAudioDetails({
      title: tracks?.[index]?.title || "",
      artist: tracks?.[index]?.artist || "",
      duration: tracks?.[index]?.duration || "",
      coverImageUrl: tracks?.[index]?.coverImageUrl || null,
      audioFileUrl: tracks?.[index]?.audioFileUrl || "",
      isPlaying: true,
    });
  };

  const handlePlay = (index: number, isPlayingCurrentSong: boolean) => {
    if (isPlayingCurrentSong) {
      pauseAudio();
    } else if (isOpen && audioDetails.audioFileUrl === tracks?.[index]?.audioFileUrl) {
      setAudioDetails({ isPlaying: true });
    } else {
      playAudio(index);
    }
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 px-6">Tracks</h2>
      <div className="space-y-0 px-6">
        {tracks?.map((track, index) => {
          const isPlayingCurrentSong =
            audioDetails?.audioFileUrl === track?.audioFileUrl && audioDetails?.isPlaying;

          return (
            <div
              key={track?.id}
              className={`relative group flex flex-col p-4 ${
                index === 0 ? 'border-t border-gray-300' : ''
              } ${
                index !== tracks.length - 1 ? 'border-b border-gray-300' : ''
              } hover:bg-[#262626]`}
            >
              {/* Song Info */}
              <div className="flex items-center">
                {/* Slightly Rounded Image */}
                <div className="flex-shrink-0">
                  <img
                    src={track?.coverImageUrl || 'https://via.placeholder.com/60'}
                    alt="Cover"
                    className="w-16 h-16 rounded-lg"
                  />
                </div>
                {/* Song Details */}
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">{track?.title}</p>
                  <p className="text-white">{track?.artist || 'Unknown'}</p>
                </div>
              </div>

              {/* Buttons Section */}
              <div className="mt-4 flex justify-between items-center">
                {/* Like Button */}
                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="hover:bg-transparent hover:text-white text-[#6d6d6e]"
                    onClick={() => likeTrack(track?.id || "")}
                  >
                    <Heart
                      className="w-6 h-6"
                      fill={track?.hasLiked ? 'green' : 'none'}
                      stroke={track?.hasLiked ? 'green' : 'currentColor'}
                    />
                  </Button>

                  {/* More Icon */}
                  <Ellipsis className="w-5 h-5 text-[#6d6d6e] hover:text-white opacity-0 group-hover:opacity-100 cursor-pointer transition" />
                </div>

                {/* Play Button */}
                <button
                  className="w-10 h-10 bg-white text-black rounded-full hover:bg-gray-200 transition flex items-center justify-center"
                  onClick={() => handlePlay(index, isPlayingCurrentSong)}
                >
                  {isPlayingCurrentSong ? (
                    <FaPause className="text-black" />
                  ) : (
                    <FaPlay className="text-black" />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserTracks;
