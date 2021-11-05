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
        <meta
          property="og:image"
          name="image"
          content="https://raw.githubusercontent.com/pcdevpc/about-me/main/src/images/preview.PNG"
        />
        <meta property="og:description" name="description" content={description} />
        <meta property="og:url" name="url" content="https://pcdevpc.github.io/about-me/" />
        <meta property="og:author" name="author" content="Paul Chun" />
      </Helmet>
      <App />
    </>
  );
};
