import styles from './Home.modules.css'

//hooks
import { useNavigate, Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import PostDetails from '../../components/PostDetails'


const Home = () => {

  const[query, setQuery] = useState("")
  const{documents:posts, loading} = useFetchDocuments("posts")

  const handleSubmit = (e) => {
    e.preventDefault()

    if(query){
      return Navigate(`/search?q=${query}`)
    }
  }

  return (
    <div className='home'>
        <h1>Posts mais recentes</h1>
        <form onSubmit={handleSubmit} className="search-form">
          <input type="text" placeholder='Ou busque por tags...' onChange={(e) => setQuery(e.target.value)}/>
          <button className='btn btn-dark'>Pesquisar</button>
        </form>

        <div>
          {loading && <p>Carregando...</p>}
          {posts && posts.map((post) => 
            <PostDetails key={post.id} post={post}/> )}
          {posts && posts.length === 0 && (
            <div className='noposts'>
              <p>Nao foram encontrados posts...</p>
              <Link to="/posts/create" className='btn'>Criar primeiro post</Link>
            </div>
          )}
        </div>
    </div>
  )
}

export default Home