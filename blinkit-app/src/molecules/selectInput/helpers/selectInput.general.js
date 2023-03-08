export const addOption = ({ name, key }, index) => {
  if (index === 0)
    return (
      <option key={key} value={name} hidden>
        {name}
      </option>
    );
  return (
    <option key={key} value={name}>
      {name}
    </option>
  );
};
