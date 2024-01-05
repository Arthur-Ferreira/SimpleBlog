function AppLabel({forAttribute, children}) {
  return (
    <label htmlFor={forAttribute}>{children}</label>
  );
}

export default AppLabel;