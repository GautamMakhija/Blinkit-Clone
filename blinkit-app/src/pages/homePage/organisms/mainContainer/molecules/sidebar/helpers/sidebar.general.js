export const renderImgsWithNameInSidebar = ({ name, key, src }) => {
  return (
    <div key={key} className="sideBarDiv">
      <img src={src} alt={name} className="sideBarImg" />
      <p>{name}</p>
    </div>
  );
};
