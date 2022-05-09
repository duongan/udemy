import { Component } from 'react';
import MyContext from '../context/my-context';

class Footer extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => {
          return (
            <div>
              <h1>{context.footerText}</h1>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default Footer;
