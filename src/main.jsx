(function() {
  const rootElement = document.getElementById('root');
  if (rootElement && window.App) {
    ReactDOM.render(React.createElement(window.App), rootElement);
  }
})();
