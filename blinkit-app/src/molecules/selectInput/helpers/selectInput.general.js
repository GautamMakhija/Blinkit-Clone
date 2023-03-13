export const addOption =
  (fileterValue) =>
  ({ name, key }, index) => {
    if (index === 0)
      return (
        <option key={key} value={fileterValue} hidden>
          {fileterValue}
        </option>
      );
    return (
      <option key={key} value={name}>
        {name}
      </option>
    );
  };
