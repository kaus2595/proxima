import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import { getArticlesQuery } from '../graphqlQueries/queries'


//Components
import ArticleDetails from './articleDetails';

class ArticleList extends Component{
	displayArticles(){
		var data = this.props.data;
		if(data.loading){
			return <div> loading Articles </div>
		} else {
			return data.contents.map(article => {
				return(
					<li key={article.id}> {article.heading} </li>
				);
			})
		}
	}
	render() {
		return (
			<div>
				<ul id="article-list">
					{this.displayArticles()}
				</ul>
				<ArticleDetails/>
			</div>
		);
	}
}

export default graphql(getArticlesQuery)(ArticleList);