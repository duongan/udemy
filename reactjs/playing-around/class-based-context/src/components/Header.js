import { Component } from 'react';
import MyContext from '../context/my-context';

class Header extends Component {
  render() {
    console.log('Header', this.context);
    return (
      <div>
        <h1>{this.context.headerText}</h1>
      </div>
    );
  }
}

Header.contextType = MyContext;

export default Header;
