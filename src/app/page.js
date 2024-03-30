import Image from "next/image";
import styles from "./page.module.css";
import img from "./images.jpeg";
import Link from "next/link";

export default async function Home() {
  return (
    <main className={styles.main}>
     WELCOME

            <div >
                <Link href={`/photo/1`}>
                    <Image
                        src={img}
                        alt={'img'}
                    />
                </Link>
            </div>


    </main>
  );
}

async function getData (){

}