const requiredAuth = (Component) => {
  const AuthenticatedComponent = () => {
    const user = true;
    if (user) {
      return <Component />;
    }
  };

  return AuthenticatedComponent;
};

export default requiredAuth;
