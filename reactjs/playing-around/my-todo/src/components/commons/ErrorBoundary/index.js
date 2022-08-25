import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log('ErrorBoundary.getDerivedStateFromError', error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.group('ErrorBoundary -> componentDidCatch');
    console.log('error', error);
    console.log('errorInfo', errorInfo);
    console.groupEnd('ErrorBoundary -> componentDidCatch');
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
