class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error });
    console.error(error, errorInfo);
  }

  render() {
    const { render, fallback } = this.props;
    const { hasError, error } = this.state;

    if (hasError) {
      if (render) {
        return render(error);
      } else if (fallback) {
        return fallback;
      } else {
        return <DefaultErrorFallback />;
      }
    }

    return this.props.children;
  }
}

function DefaultErrorFallback() {
  return (
    <div style={{ color: "red", fontWeight: "bold" }}>
      Oops! Something went wrong.
    </div>
  );
}

export default ErrorBoundary;
