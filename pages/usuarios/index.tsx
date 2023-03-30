import Head from "next/head";
import Layout from "../../Components/Layout";
import styles from "../../styles/Usuarios.module.css";
import requests from "../../services/requests";
import { TUser } from "../../types/TUser";

type Props = {
  users: TUser[];
};

const Usuarios = ({ users }: Props) => {
  return (
    <Layout>
      <div>
        <Head>
          <title>Usuários</title>
        </Head>
        <ul>
          {users?.map((item, index) => (
            <li key={index}>{item?.name}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Usuarios;

export const getServerSideProps = async () => {
  const users = await requests.getUsersPerPage(0);

  return {
    props: {
      users,
    },
  };
};
