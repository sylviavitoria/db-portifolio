import fotodb from '../assets/portifolio-foto.jpg';

const FotoSection = () => {
  return (
    <div className="photo-section">
      <img
        src={fotodb}
        alt="Foto"
        className="profile-photo"
      />
    </div>
  );
};

export default FotoSection;