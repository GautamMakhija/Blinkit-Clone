export const makeSpecialityContainer = ({
  src,
  name,
  title,
  description,
  key,
}) => {
  return (
    <div className="specialityContainer" key={key}>
      <img src={src} alt={name} className="specialityImg" />
      <p className="spacialityTitle">{title}</p>
      <p className="spacialityDescription">{description}</p>
    </div>
  );
};
