import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';

type Props = DocumentProps & {
  // add custom document props
};

export default function Document(props: Props) {
  const lang = props.__NEXT_DATA__.locale || 'en';
  return (
    <Html lang={lang}>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="ChatGPT App"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
