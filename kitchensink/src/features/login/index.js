import LoginLogic from './LoginLogic';
// import { LoginWrapper } from "./LoginContext";

export const login = ({ registerAction }) => {
  registerAction({
    hook: '$REACT_ROOT_COMPONENT',
    handler: () => <LoginLogic />,
  });
  // registerAction({
  //   hook: "$REACT_ROOT_WRAPPER",
  //   handler: LoginWrapper
  // });
};
