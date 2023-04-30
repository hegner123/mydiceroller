import { Provider, createStore, atom } from "jotai";
import PropTypes from "prop-types";

type AppProps = {
  children?: React.ReactNode;
};

const withAdvantage = atom(false);
const withDisadvantage = atom(false);
const appStore = createStore();

const JotaiProvider = ({ children }: AppProps) => {
  return <Provider store={appStore}>{children}</Provider>;
};

JotaiProvider.propTypes = {
  children: PropTypes.node,
};
export const DiceStates = {
  withAdvantage,
  withDisadvantage,
};
export default JotaiProvider;
