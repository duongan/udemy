import { createContext } from 'react';

const MyContext = createContext({
  headerText: 'My name is An',
  bodyText: "I'm 33",
  footerText: 'I am single',
  updateHeaderText: () => {},
});

export default MyContext;
