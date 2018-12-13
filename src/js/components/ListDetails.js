import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteArticle, fetchArticles, fetchArticle } from "../actions/articles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const mapDispatchToProps = dispatch => {
    // define as actions a executar quando existirem alterações locais que requerem atualização de state
    return {
        fetchArticle: article => dispatch(fetchArticle(article)),
    };
};

const mapStateToProps = state => {
    // define as props do componente consoante o state do redux
    return { article: state.article };
};

class ConnectedListDetails extends Component{

    constructor(){
        super();

    }

    componentDidMount()
    {
        const id = this.props.match.params.id;
        //console.log("id",id);

        this.props.fetchArticle({type: 'FETCH_ARTICLE', article: id});
        // chamada inicial para ir buscar os artigos
    }
    render(){

        const article = this.props.article.article;
        const title = article.title;
        const description = article.description;
        const date = article.created_at;

        //console.log("RENDER ARTICLE",article);

        return(
            <div className="col-sm-8 blog-main">
                <div className="blog-post">
                    <h2 className="blog-post-title">{title}  <button className="btn btn-danger btn-sm" onClick={() => this.clickAction(el)}>delete</button></h2>
                    <p className="blog-post-meta">{date} by <a href="#"></a></p>
                    <p>{description}</p>
                </div>
            </div>
       );
    }


}

const ListDetails = connect(mapStateToProps, mapDispatchToProps)(ConnectedListDetails);
export default ListDetails;