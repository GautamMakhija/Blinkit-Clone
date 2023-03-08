export const addSpecialityContainer = ({
  src,
  name,
  title,
  description,
  key,
}) => {
  return (
    <div className="specialityContainer" key={key}>
      <div>
        <img src={src} alt={name} className="specialityImg" />
      </div>
      <p className="spacialityTitle">{title}</p>
      <p className="spacialityDescription">{description}</p>
    </div>
  );
};
