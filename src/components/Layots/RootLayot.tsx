import Footer from "../Common/Footer/footer";
import Header from "../Common/Header/header";

export default function Layout({ children }: any) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
