import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/filipedev6.png',
      name: 'Filipe Rodrigues',
      role: 'Front-end Developer'
    },
    publishedAt: new Date("2023-04-21 19:24:30"),
    content: [
      {type: 'paragraph', content: 'Fala pessoal 👋'},
      {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
      {type: 'link', content: 'Acesse e deixe seu feedback 👉 devonlane.design'},
      {type: 'link', content: '#uiux'},
      {type: 'link', content: '#userexperience'}
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/marinapsvreis.png',
      name: 'Marina Portugal',
      role: 'Desenvolvedora Web Fullstack'
    },
    publishedAt: new Date("2023-04-21 19:19:00"),
    content: [
      {type: 'paragraph', content: 'Fala pessoal 👋'},
      {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
      {type: 'link', content: 'Acesse e deixe seu feedback 👉 devonlane.design'},
      {type: 'link', content: '#uiux'},
      {type: 'link', content: '#userexperience'}
    ]
  },
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post 
              key={post.id} 
              post={post}
            />
          ))}
        </main>
      </div>
    </>
  );
}
