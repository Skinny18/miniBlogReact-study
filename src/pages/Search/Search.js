import styles from "./Search.modules.css"
//hooks
import { Link } from "react-router-dom"
import PostDetails from "../../components/PostDetails"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useQuery } from "../../hooks/useQuery"

const Search = () => {

  const query = useQuery()
  const search = query.get("q")

  const {documents: posts} = useFetchDocuments("posts", search)

  return (
    <div className="search_container">
      <h1>Search</h1>
      <div>
        {posts && posts.length === 0 && (
          <>
            <p>Nao foram encontrados posts...</p>
            <Link to="/" className="btn btn-dark">Voltar</Link>
          </>
        )}
        {posts && posts.map((post) =>(
          <PostDetails key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Search