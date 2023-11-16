import React from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";

const VideoModal = ({
  videoUrl,
  isOpen,
  onRequestClose,
  currentTitle,
}) => {
  const youtubeOpts = {
    height: "390",
    width: "500",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="video-modal"
      overlayClassName="video-modal-overlay"
    >
      <div className="flex flex-col items-center">
        <ReactPlayer
          url={videoUrl}
          opts={youtubeOpts}
          allow="autoplay; encrypted-media"
          className=""
        />
        <div
          className="relative py-4 bg-zinc-950 w-full h-full"
          style={{ width: youtubeOpts.width }}
        >
          <span className="font-bold text-xl mx-6">{currentTitle}</span>
        </div>
      </div>
    </Modal>
  );
};

export default VideoModal;
