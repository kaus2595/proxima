import React, {Component} from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getArticlesQuery = gql`
{
	contents {
		id
		heading
	}
}`

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
			</div>
		);
	}
}

export default graphql(getArticlesQuery)(ArticleList);