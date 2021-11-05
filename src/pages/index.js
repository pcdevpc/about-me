import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta property="og:image" content="%PUBLIC_URL%/preview.png" />
        <meta property="og:description" name="description" content={description} />
        <meta property="og:url" content="https://pcdevpc.github.io/about-me/" />
        <meta property="og:author" content="Paul Chun" />
      </Helmet>
      <App />
    </>
  );
};
