import Head from "next/head";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <>
      <Head>
        <title>PYRadar</title>
      </Head>
      <main className="min-h-screen bg-gray-100">
        <Dashboard />
      </main>
    </>
  );
}
