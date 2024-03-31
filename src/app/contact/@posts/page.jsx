import styles from "./style.module.css";


async function getData() {


    const data = await fetch(`https://project-next-l1g5.vercel.app/api/posts`, {
        method: 'GET',
        cache: 'no-store'
    });

    let r = await data.json()

    return r;
}

export default async function PostsSlot() {


    const postsList = await getData();


    return (
        <>
            <p>postList </p>
            {
                postsList && postsList.map(({title, body}, key) => (
                    <div key={key} className={styles.item}>
                        <h2>{title}</h2>
                        <p>{body}</p>
                    </div>))
            }

        </>
    )
}