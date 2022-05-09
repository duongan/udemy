import { Component } from 'react';
import MyContext from '../context/my-context';

class Body extends Component {
  static contextType = MyContext;
  render() {
    console.log('Body', this.context);
    return (
      <div>
        <h1>{this.context.bodyText}</h1>
      </div>
    );
  }
}

export default Body;
