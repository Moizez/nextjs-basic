import Head from "next/head";
import Layout from "../../Components/Layout";
import styles from "../../styles/Usuarios.module.css";
import requests from "../../services/requests";
import { TUser } from "../../types/TUser";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

type Props = {
  users: TUser[];
};

const Usuarios = ({ users, count }: Props) => {
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [userList, setUserList] = useState<TUser[]>(users);

  const handleLoadMore = async () => {
    if (!loading) {
      setLoading(true);

      const json = await axios.get(
        `/api/users?page=${pageCount + 1}&limit=${3}`
      );

      if (json.data.info.status) {
        setUserList([...userList, ...json?.data?.data]);
      }

      setLoading(false);
      setPageCount(pageCount + 1);
    }
  };

  return (
    <Layout>
      <div>
        <Head>
          <title>Usuários</title>
        </Head>

        <Link href={"/usuarios/novo"}>Novo Usuário</Link>

        <ul>
          {userList?.map((item, index) => (
            <li key={index}>{item?.name}</li>
          ))}
        </ul>
        {userList.length < count && (
          <button onClick={handleLoadMore}>Carregar mais</button>
        )}
      </div>
    </Layout>
  );
};

export default Usuarios;

export const getServerSideProps = async () => {
  const users = await requests.getUsersPerPage(0);

  return {
    props: {
      users: users.data,
      count: users.info.count,
    },
  };
};
