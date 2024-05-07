import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='ko'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
// _document 페이지는 리액트 코드의 형식으로 작성되나 리액트의 useState와 같은 기능을 사용할 수는 없다.
