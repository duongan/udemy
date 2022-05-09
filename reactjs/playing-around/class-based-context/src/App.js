import { Component } from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import MyContext from './context/my-context';

class App extends Component {
  constructor() {
    super();
    this.state = {
      headerText: 'Header Text',
      bodyText: 'Body Text',
      footerText: 'Footer Text',
    };
  }

  updateHeaderText(data) {
    // console.log(data);
    // console.log(this);
    const { headerText, bodyText, footerText } = data;
    this.setState({ headerText, bodyText, footerText });
  }

  render() {
    const { headerText, bodyText, footerText } = this.state;
    const context = {
      headerText,
      bodyText,
      footerText,
      updateHeaderText: this.updateHeaderText.bind(this),
    };
    return (
      <MyContext.Provider value={context}>
        <Form />
        <Header />
        <Body />
        <Footer />
      </MyContext.Provider>
    );
  }
}

export default App;
