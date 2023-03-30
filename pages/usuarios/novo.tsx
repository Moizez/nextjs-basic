import Head from "next/head";
import Layout from "../../Components/Layout";
import styles from "../../styles/Usuarios.module.css";
import requests from "../../services/requests";
import { TUser } from "../../types/TUser";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const NovoUsuario = () => {
  const route = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSaveForm = async () => {
    if (name && email) {
      const json = await axios.post("/api/users", { name, email });

      if (json.data.status) {
        route.push("/usuarios");
      } else {
        alert(json.data.error);
      }
    }
  };

  return (
    <Layout>
      <div>
        <Head>
          <title>Usuários</title>
        </Head>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
        />

        <input
          style={{ marginLeft: 20, marginRight: 20 }}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
        />

        <button onClick={handleSaveForm}>Cadastrar</button>
      </div>
    </Layout>
  );
};

export default NovoUsuario;
