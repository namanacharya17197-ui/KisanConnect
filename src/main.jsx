function mountKisanApp() {
  const rootElement = document.getElementById('root');
  if (rootElement && window.App && typeof ReactDOM !== 'undefined' && typeof React !== 'undefined') {
    try {
      ReactDOM.render(React.createElement(window.App), rootElement);
    } catch (err) {
      console.error("Mount error, retrying...", err);
      setTimeout(mountKisanApp, 100);
    }
  } else {
    setTimeout(mountKisanApp, 50);
  }
}

window.mountKisanApp = mountKisanApp;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountKisanApp);
} else {
  mountKisanApp();
}
