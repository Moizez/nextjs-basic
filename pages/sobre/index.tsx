import Script from "next/script";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";

import Button from "../../Components/Button";
import Layout from "../../Components/Layout";

const About = () => {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div className="sobre">
        <Head>
          <title>Sobre</title>
        </Head>
        <h1>Página Sobre ({count})</h1>
        Meu nome é {process.env.NEXT_PUBLIC_NOME_PUBLICO}
        <ul>
          <li>
            <Link href="/sobre/antonio" replace>
              Antonio
            </Link>
          </li>
          <li>
            <a href="/sobre/vinicius">Vinícius</a>
          </li>
          <li>
            <a href="/sobre/pedro">Pedro</a>
          </li>
        </ul>
        <Button title="Aumentar" onClick={() => setCount((prev) => prev + 1)} />
        <Script
          src="https://google-analytics.com/analytics.js"
          strategy="afterInteractive"
          // onLoad={() => window.alert('Carreguei!')}
        />
      </div>
    </Layout>
  );
};

export default About;
