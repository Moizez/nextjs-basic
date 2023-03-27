import { useRouter } from "next/router";
import { useEffect } from "react";

const AboutItem = () => {
  const router = useRouter();
  const {
    isFallback,
    pathname,
    push,
    replace,
    events,
    query: { slug },
  } = router;

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      alert(`Indo para ${url}`);
    };

    events.on("routeChangeComplete", handleRouteChange);

    return () => {
      events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <div>
      <h1>Página de {slug}</h1>
      <p>Pathname: {pathname}</p>
      <p>isFallback: {String(isFallback)}</p>
      <p>Pathname: {router.pathname}</p>
      <p>Pathname: {router.pathname}</p>

      <button
        onClick={() => {
          //   push("/sobre/antonio");
          replace("/sobre/antonio");
        }}
      >
        ir para a página de Antonio
      </button>
    </div>
  );
};

export default AboutItem;
