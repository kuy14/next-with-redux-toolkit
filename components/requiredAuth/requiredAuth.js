import cookie from "js-cookie";

const requiredAuth = (Component) => {
  const AuthenticatedComponent = () => {
    const user = cookie.get("authKey");
    if (user) {
      return <Component />;
    }
    return null;
  };

  return AuthenticatedComponent;
};

export default requiredAuth;
