"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  { src: "/Rhinoplasty1.mov", label: "Hair Restoration" },
  { src: "/Rhinoplasty2.mov", label: "Scalp Treatment" },
  { src: "/Rhinoplasty3.mov", label: "Before & After" },
];

const CosmeticVideoSection: React.FC = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [unmuteIndex, setUnmuteIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const firstVideoStarted = useRef(false);

  // Sync all video play/pause whenever playingIndex changes (for switching videos)
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (playingIndex === i) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [playingIndex]);

  // One-shot: start video 0 as soon as it has enough data
  const handleFirstVideoCanPlay = () => {
    if (!firstVideoStarted.current) {
      firstVideoStarted.current = true;
      videoRefs.current[0]?.play().catch(() => {});
    }
  };

  const togglePlay = (index: number) => {
    setPlayingIndex((prev) => (prev === index ? null : index));
  };

  const toggleAudio = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    const newUnmute = unmuteIndex === index ? null : index;
    setUnmuteIndex(newUnmute);
    videoRefs.current.forEach((v, i) => {
      if (v) v.muted = i !== newUnmute;
    });
  };

  const goTo = (index: number) => {
    const curr = videoRefs.current[mobileIndex];
    if (curr) curr.pause();
    setUnmuteIndex(null);
    setMobileIndex(index);
    setPlayingIndex(index);
  };

  const prevMobile = () => goTo((mobileIndex - 1 + videos.length) % videos.length);
  const nextMobile = () => goTo((mobileIndex + 1) % videos.length);

  return (
    <div
      style={{ backgroundColor: "white", fontFamily: "'Outfit', sans-serif" }}
      className="py-8 sm:py-10 lg:py-10 px-4 max-[470px]:py-6 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl max-[470px]:text-[30px] max-[325px]:text-[25px] font-bold text-center mb-4 text-[#180109]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 15 }}
        >
          See the Results in Action
        </motion.h2>

        <p className="text-sm sm:text-base lg:text-lg text-[#180109] text-center mb-8 sm:mb-10 max-w-2xl mx-auto">
          Watch real hair restoration transformations from our clinic
        </p>

        {/* ── DESKTOP: 3 columns ── */}
        <div className="hidden sm:flex gap-4 justify-center items-start">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              className="flex-1 flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div
                className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-[#7b5f43]/30"
                style={{ aspectRatio: "9 / 16", maxWidth: "380px" }}
              >
                <video
                  ref={(el) => { videoRefs.current[i] = el; }}
                  src={video.src}
                  muted
                  loop
                  playsInline
                  onCanPlay={i === 0 ? handleFirstVideoCanPlay : undefined}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Play / Pause overlay */}
                <div
                  className="absolute inset-0 flex items-end justify-start p-3 z-10 cursor-pointer"
                  onClick={() => togglePlay(i)}
                >
                  <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center shadow-lg hover:bg-black/70 transition-colors">
                    {playingIndex === i ? (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Audio toggle */}
                <button
                  onClick={(e) => toggleAudio(e, i)}
                  className="absolute bottom-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center shadow-md hover:bg-black/70 transition-colors"
                  aria-label={unmuteIndex === i ? "Mute" : "Unmute"}
                >
                  {unmuteIndex === i ? (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                      <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                    </svg>
                  )}
                </button>
              </div>
              <p className="mt-3 text-sm font-medium text-[#180109] text-center">
                {video.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── MOBILE: Carousel ── */}
        <div className="sm:hidden flex flex-col items-center">
          <div className="relative w-full flex items-center justify-center">
            <button
              onClick={prevMobile}
              className="absolute left-0 z-20 w-9 h-9 rounded-full bg-[#7b5f43]/80 flex items-center justify-center shadow-md"
              aria-label="Previous video"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={mobileIndex}
                className="flex flex-col items-center"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35 }}
              >
                <div
                  className="relative rounded-2xl overflow-hidden shadow-xl border border-[#7b5f43]/30"
                  style={{ aspectRatio: "9 / 16", width: "300px" }}
                >
                  <video
                    ref={(el) => { videoRefs.current[mobileIndex] = el; }}
                    src={videos[mobileIndex].src}
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Play / Pause overlay */}
                  <div
                    className="absolute inset-0 flex items-end justify-start p-3 z-10 cursor-pointer"
                    onClick={() => togglePlay(mobileIndex)}
                  >
                    <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center shadow-lg hover:bg-black/70 transition-colors">
                      {playingIndex === mobileIndex ? (
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Audio toggle */}
                  <button
                    onClick={(e) => toggleAudio(e, mobileIndex)}
                    className="absolute bottom-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center shadow-md hover:bg-black/70 transition-colors"
                    aria-label={unmuteIndex === mobileIndex ? "Mute" : "Unmute"}
                  >
                    {unmuteIndex === mobileIndex ? (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                        <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                      </svg>
                    )}
                  </button>
                </div>
                <p className="mt-3 text-sm font-medium text-[#180109] text-center">
                  {videos[mobileIndex].label}
                </p>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={nextMobile}
              className="absolute right-0 z-20 w-9 h-9 rounded-full bg-[#7b5f43]/80 flex items-center justify-center shadow-md"
              aria-label="Next video"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex gap-2 mt-5">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  mobileIndex === i ? "bg-[#7b5f43] scale-125" : "bg-[#a78c6d] opacity-50"
                }`}
                aria-label={`Go to video ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="#hairform">
            <button className="bg-[#7b5f43] cursor-pointer hover:bg-[#6b4f33] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Book Consultation
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default CosmeticVideoSection;
