import { useState } from "react";

const About = () => {

    const [count, setCount] = useState(0)

    return (
        <div className="about">
            <h1>Página Sobre ({count})</h1>

            <ul>
                <li><a href="/about/antonio">Antônio</a></li>
                <li><a href="/about/vinicius">Vinícius</a></li>
                <li><a href="/about/pedro">Pedro</a></li>
            </ul>

            <button onClick={() => setCount(prev => prev + 1)}>Aumentar</button>

        </div>
    )
}

export default About;