import PageHead from "./PageHead";
import Main from "./main";

export default function Home() {
  const pageTitle = "Launch a project";
  return (
    <>
      <PageHead title={pageTitle} />
      <Main />
    </>
  );
}
