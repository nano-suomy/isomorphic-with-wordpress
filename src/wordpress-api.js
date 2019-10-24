import apiFetch from '@wordpress/api-fetch';

export const GetArticles = async () => {
    const res = await apiFetch({ url: `http://localhost:8080/wp-json/wp/v2/posts` });

    return { articles: res };
};
