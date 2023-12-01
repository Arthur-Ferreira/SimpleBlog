const db = require('../data/database');

const Post = require('../models/post.model');


async function getAllPosts(req, res) {
  try {
    const posts = await Post.fetchAllPosts();
    res.render('posts-list', { posts });
  } catch (error) {
    console.error(error);
    res.status(500).render('500', { error: 'Internal Server Error' });
  }
}


async function getSinglePost(req, res) {
  try {
    const postId = req.params.id;
    if (!postId) {
      return res.status(400).render('400', { error: 'ID do post não fornecido' });
    }

    const post = new Post(null, null, null, null, postId);
    const result = await post.fetchSinglePost();

    if (!result || result.length === 0) {
      return res.status(404).render('404');
    }

    const postData = {
      title: result[0].title,
      author_name: result[0].author_name,
      summary: result[0].summary,
      body: result[0].body,
      date: result[0].date.toISOString(),
      humanReadableDate: result[0].date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };

    res.render('post-detail', { post: postData });
  } catch (error) {
    console.error(error);
    res.status(500).render('500', { error: 'Internal Server Error' });
  }
}


async function renderNewPostForm(req, res) {
  try {
    const authors = await Post.fetchAllAuthors();
    res.render('create-post', { authors: authors });
  } catch (error) {
    console.error(error);
    res.status(500).render('500', { error: 'Internal Server Error' });
  }
}


async function createNewPost(req, res) {
  const data = {
    title: req.body.title,
    summary: req.body.summary,
    body: req.body.content,
    author: req.body.author,
  };

  const post = new Post(data.title, data.summary, data.body, data.author);
  try {
    await post.save();
    res.redirect('/posts');
  } catch (error) {
    console.error(error);
    res.status(500).render('500', { error: 'Internal Server Error' });
  }
}







module.exports = {
  getAllPosts: getAllPosts,
  getSinglePost: getSinglePost,
  renderNewPostForm: renderNewPostForm,
  createNewPost: createNewPost,
}