import { LoginLogic } from './LoginLogic';
import { LoginWrapper } from './LoginContext';

export const login = ({ registerAction }) => {
  registerAction({
    hook: '$REACT_ROOT_COMPONENT',
    handler: (root) => ({ component: LoginLogic, props: { root } }),
  });

  registerAction({
    hook: '$REACT_ROOT_WRAPPER',
    handler: { component: LoginWrapper },
  });
};
