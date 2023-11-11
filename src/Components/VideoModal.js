// VideoModal.js
import ReactModal from "react-modal";

const VideoModal = ({ isOpen, closeModal }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Video Modal"
    >
      <div>
        <button onClick={closeModal}>Close</button>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/alCTLHlh47s"
          title="YouTube Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </ReactModal>
  );
};

export default VideoModal;
