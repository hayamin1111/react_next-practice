import 'styles/globals.css';
import Layout from "components/layout";
// 全ページに反映できる。
// Appコンポーネントはページの初期化に使用されるもので、pageコンポーネントの親にあたる。
// しかしAppコンポーネントを直接カスタマイズはできないため、Appコンポーネントをオーバーライドするための「カスタムAppコンポーネント」を用意する。
// pages直下に_app.jsを作成すると「カスタムAppコンポーネント」として認識される。

function MyApp({ Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
