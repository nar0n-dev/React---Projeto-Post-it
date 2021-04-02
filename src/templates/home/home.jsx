import { Component } from 'react';

import './styles.css';

import { loadPosts } from '../../utils/loadPosts';
import { ListPost } from '../../components/postList';
import { Button } from '../../components/button';
import { SearchInput } from '../../components/input';


class Home extends Component{
  // constructor(props){
  //   super(props);
  //// para não ter que bindar o this, use arrow function
  //   this.handlePClick = this.handlePClick.bind(this);

  //   this.state ={
  //     name: 'Natan Cardoso', 
  //     counter: 0, 
  //    };
    
  // }
  //Sem construtor
  state = {
    post: [],
    allpost:[],
    page: 0,
    postsPerPage: 3,
    searchValue: ''
  };

  async componentDidMount(){
     await this.loadPosts();
  }

  loadPosts = async () => {
    const {page, postsPerPage} = this.state;
    const postsAndphotos = await loadPosts();
    this.setState({
      post: postsAndphotos.slice(page, postsPerPage),
      allpost: postsAndphotos
    })
  }

  loadMorePosts = () => {
    const {page, postsPerPage, allpost, post} = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allpost.slice(nextPage, nextPage+postsPerPage)

    //Empurra o array espalhado para `post`
    post.push( ...nextPosts);

    //Atualiza a pagina com novas informacoes
    this.setState({
      post, 
      page: nextPage
    })
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({searchValue: value})
  }

  render(){

    const {post, page, allpost, postsPerPage, searchValue} = this.state;
    const noMorePost = page + postsPerPage >= allpost.length;
    const filteredPosts = !!searchValue ?
    allpost.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase())
    })
    :
    post;


    return (
      <div className="container">

        <SearchInput 
          value={searchValue}
          handleChange={this.handleChange}
        />
        {/* // !!variavel - converte o valor da variavel e bolean (!!) */}
        {!!searchValue && (
          <h1>Result search: {searchValue}</h1>
        )}
        {filteredPosts.length > 0 ? <ListPost post={filteredPosts}/> : `Ops! No result for: ${searchValue} `}
        

        {!searchValue &&(
          <Button
            text="Load more posts, please!"
            onClick={this.loadMorePosts}
            disabled={noMorePost}
          />
        )}
        
      </div> 
    )
  }
}

export default Home;