import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteArticle, fetchArticles } from "../actions/articles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ListDetails from "./ListDetails";

import FormArticles from "./Form";


const mapDispatchToProps = dispatch => {
    // define as actions a executar quando existirem alterações locais que requerem atualização de state
    return {
        deleteArticle: article => dispatch(deleteArticle(article)),
        fetchArticles: () => dispatch(fetchArticles()),
    };
};

const mapStateToProps = state => {
    // define as props do componente consoante o state do redux
    return { articles: state.articles };
};

class ConnectedList extends Component{

  constructor(){
      super();
    // definir o contexto da função "clickAction" para que possa aceder à propriedade "this"
      // https://medium.freecodecamp.org/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb
    this.clickAction = this.clickAction.bind(this);
  }

  clickAction(article) {
      // executar a função de apagar o artigo
    this.props.deleteArticle(article);
  }

  componentDidMount()
  {
      const articles = this.props.articles.articles;

      if(articles == 0){
          this.props.fetchArticles({type: 'FETCH_ARTICLES'});
      }
      // chamada inicial para ir buscar os artigos
  }


  render()
  {
    const articles = this.props.articles.articles;

      return (
          <div className="col-sm-8 blog-main">
                    {articles.map((el, index) => (
                        <div className="blog-post">
                            <h2 className="blog-post-title" key={index}>
                                <Link to={"/article/"+el.id}>{el.title}</Link>
                            </h2>
                        </div>
                    ))}

              <div className="col-md-4 offset-md-1"> <FormArticles /> </div>
          </div>

      );
    }
}

// executar a função connect do Redux para:
// 1) mapear o State do Redux à propriedades locais do componente (mapStateToProps)
// 2) mapear as ações a serem invocadas às ações locais nas props do componente (mapDispatchToProps)
const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;
