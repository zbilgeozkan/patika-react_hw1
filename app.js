import axios from 'axios';

export default async function getData(number) {
    const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + number);
    const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + number)

    const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        website: user.website,
        posts: posts.map(post => ({
            id: post.id,
            title: post.title,
            body: post.body
        }))
    }

    return userData;
};