export default reactRoot;
/**
 * @param {ForrestJSContext} ctx
 * @returns {Array.<ForrestJSExtension>}
 */
export function reactRoot({ registerAction, createExtension, getConfig, getContext, setContext, registerTargets, }: any): Array<ForrestJSExtension>;
export { useForrestJS, useGetContext, useGetConfig } from "./forrestjs-provider";
