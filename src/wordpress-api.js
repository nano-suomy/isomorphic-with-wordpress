import apiFetch from '@wordpress/api-fetch';

//const apiEndPoint = `http://localhost:8080`;

export const GetArticles = async () => {
    const res = await apiFetch({ url: `http://localhost:8080/wp-json/wp/v2/posts` });

    return { articles: res };
};
