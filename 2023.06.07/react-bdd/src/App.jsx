import React, {useState} from 'react'
import ArticlesList from './components/ArticlesList'
import FormArticle from './components/FormArticle'

function App() {

  const [updateList, setUpdateList] = useState(false);

  return (
    <div>
      <FormArticle setUpdateList={setUpdateList}/>
      <ArticlesList setUpdateList={setUpdateList} updateList={updateList}/>
    </div>
  )
}

export default App