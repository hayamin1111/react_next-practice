import 'styles/globals.css';
import Layout from "components/layout";
// 全ページに反映できる。
// Appコンポーネントはページの初期化に使用されるもので、pageコンポーネントの親にあたる。
// しかしAppコンポーネントを直接カスタマイズはできないため、Appコンポーネントをオーバーライドするための「カスタムAppコンポーネント」を用意する。
// pages直下に_app.jsを作成すると「カスタムAppコンポーネント」として認識される。

//グローバルスタイルとしてfontawesomeを適用
import '@fortawesome/fontawesome-svg-core/styles.css';
//svgコアが個別にCSSを適用するのを無効化（アイコン表示後にFAのCSSが遅れて適用されるため、初期表示時に大きく表示されてしまう）
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

function MyApp({ Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
