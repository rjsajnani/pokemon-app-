import React from 'react';

const useCapitalizedString = () => {
  const capitalizedString = React.useMemo(
    () => (string: string) => {
      return string ? string.charAt(0).toUpperCase() + string.slice(1) : '';
    },
    [],
  );

  return capitalizedString;
};

export default useCapitalizedString;
