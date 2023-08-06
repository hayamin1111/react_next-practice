import Header from "components/header";
import Footer from "/components/footer";

export default function Layout({children}) {
  return (
    <>
      <Header />
      
      {/* Layoutコンポーネントの子要素（Hero）が渡ってくる */}
      <main>{children}</main>

      <Footer />
    </>
  )
}
