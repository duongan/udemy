import { Component } from 'react';
import MyContext from '../context/my-context';

class Form extends Component {
  static contextType = MyContext;

  constructor() {
    super();
    this.state = {
      headerText: '',
      bodyText: '',
      footerText: '',
    };
  }

  onSubmitHandler(event) {
    event.preventDefault();

    this.context.updateHeaderText({
      headerText: this.state.headerText,
      bodyText: this.state.bodyText,
      footerText: this.state.footerText,
    });
  }

  headerTextChangeHandler(event) {
    this.setState((prevState) => {
      return { headerText: event.target.value };
    });
  }

  bodyTextChangeHandler(event) {
    this.setState((prevState) => {
      return { bodyText: event.target.value };
    });
  }

  footerTextChangeHandler(event) {
    this.setState((prevState) => {
      return { footerText: event.target.value };
    });
  }

  render() {
    console.log('HEADER RENDERING', this.state);
    return (
      <form onSubmit={this.onSubmitHandler.bind(this)}>
        <div>
          <label htmlFor="header-text">Header Text</label>
          <input
            type="text"
            id="header-text"
            value={this.state.headerText}
            onChange={this.headerTextChangeHandler.bind(this)}
          />
        </div>
        <div>
          <label htmlFor="body-text">Body Text</label>
          <input
            type="text"
            id="body-text"
            value={this.state.bodyText}
            onChange={this.bodyTextChangeHandler.bind(this)}
          />
        </div>
        <div>
          <label htmlFor="footer-text">Footer Text</label>
          <input
            type="text"
            id="footer-text"
            value={this.state.footerText}
            onChange={this.footerTextChangeHandler.bind(this)}
          />
        </div>
        <button>Update</button>
      </form>
    );
  }
}

export default Form;
