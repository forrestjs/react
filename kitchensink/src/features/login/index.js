import { LoginLogic } from './LoginLogic';
import { LoginWrapper } from './LoginContext';

export const login = () => [
  {
    target: '$REACT_ROOT_COMPONENT',
    handler: (root) => ({ component: LoginLogic, props: { root } }),
  },
  {
    target: '$REACT_ROOT_WRAPPER',
    handler: { component: LoginWrapper },
  },
];
