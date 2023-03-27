import Script from "next/script";
import { useState } from "react";
import Link from "next/link";

const About = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="sobre">
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
      <button onClick={() => setCount((prev) => prev + 1)}>Aumentar</button>
      <Script
        src="https://google-analytics.com/analytics.js"
        strategy="afterInteractive"
        // onLoad={() => window.alert('Carreguei!')}
      />
    </div>
  );
};

export default About;
