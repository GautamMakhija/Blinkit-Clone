export const renderOption =
  (defaultValue, isFirstItemHidden) =>
  ({ name, key }, index) => {
    if (isFirstItemHidden === true && index === 0) {
      return (
        <option key={key} value={defaultValue} hidden>
          {name}
        </option>
      );
    }
    return (
      <option key={key} value={name}>
        {name}
      </option>
    );
  };

export const renderOptions = (values, defaultValue, isFirstItemHidden) => {
  return values.map(renderOption(defaultValue, isFirstItemHidden));
};
