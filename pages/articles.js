import * as React from 'react';
import {GetArticles} from '../src/wordpress-api';

const Articles = () => {
    const [articles, setArticles] = React.useState();

    React.useEffect(() => {
        (async () => {
            const { articles } = await GetArticles();
            setArticles(articles);
        })();
    }, []);

    if(articles){
        console.log(articles);
    }

    return(<>
        <h1>This is our articles</h1>
        {articles ? articles[0].content.rendered : null}
    </>);
}

export default Articles;
