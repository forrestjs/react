# v0.4.0

- removed reportWebVitals: the app should handle it directly, or it should be delegated to another service in order to fulfill SRP
- improved wrappers rendering
- moved the first DOM rendering to `$SERVICE_START` lifecycle hook

# v0.3.0

- `$REACT_ROOT_WRAPPER` accepts `component.props` to instrument the wrapper Element
