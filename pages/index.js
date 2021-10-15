import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ex est nisi! Aspernatur quidem dignissimos fuga eaque quo labore, rem suscipit consectetur, error mollitia magnam modi. Quas, odio possimus. Unde.</p>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero illum possimus, nesciunt eos, velit deserunt dolores iusto animi dolorem omnis non alias fuga error placeat in nam ipsam quo similique?</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
