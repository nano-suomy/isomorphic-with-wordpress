import * as React from 'react';
import {GetArticles} from '../src/wordpress-api';

const Article = () => {
    const [articles, setArticles] = React.useState();

    React.useEffect(() => {
        (async () => {
            const { articles } = await GetArticles();
            setArticles(articles);
        })();
    }, []);

    if(!articles){
        return(<h1>Now Loading...</h1>);
    }else{
        console.log(articles);
    }

    return(<section>
        <div id="article">
            <h1 dangerouslySetInnerHTML={{
                __html: articles[2].title.rendered
            }}/>
            <div dangerouslySetInnerHTML={{
                __html: articles[2].content.rendered
            }}/>
        </div>
        <style jsx>{`
            section {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            #article {
                max-width: 75%;
                font-size: 24px;
            }
        `}</style>
    </section>);
}

export default Article;
