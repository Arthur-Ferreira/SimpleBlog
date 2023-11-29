const db = require('../data/database');

const Post = require('../models/post.model');

const express = require('express');
const router = express.Router();


async function getAllPosts(req, res) {
  let posts;
  try {
    posts = await Post.fetchAllPosts();
  } catch (error) {
    console.log(error);
  }
  res.render('posts-list', { posts: posts });
}

async function getSinglePost(req, res) {
  const reqId = req.params.id;
  const post = new Post;

  let result;

  try {
    result = post.fetchSinglePost(reqId);
  } catch (error) {
    console.log(error);
    if (!result || result.length === 0) {
      return res.status(404).render('404');
    }
  }


  const postData = {
    ...result[0],
    date: result[0].date.toISOString(),
    humanReadableDate: result[0].date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
  }

  res.render('post-detail', { result: postData });
}

async function createNewPost(req, res) {
  const data = [
    req.body.title,
    req.body.summary,
    req.body.content,
    req.body.author,

  ];

  await db.query(query, [data,]);

  res.redirect('/posts');
}


async function getSingleAuthor(req, res) {
  const [authors] = await db.query('SELECT * FROM authors');

  res.render('create-post', { authors: authors });

}


async function selectSinglePost(req, res) {
  const [posts] = await db.query(query, [req.params.id]);

  if (!posts || posts.length === 0) {
    return res.status(404).render('404');
  }

  res.render('update-post', { post: posts[0] });
}


async function editPost(req, res) {

  const [posts] = await db.query(query, [
    req.body.title,
    req.body.summary,
    req.body.content,
    req.params.id
  ]);

  if (!posts || posts.length === 0) {
    return res.status(404).render('404')
  };

  res.redirect('/posts');
}


async function deletePost(req, res) {

  const [posts] = await db.query(query, [req.params.id]);

  res.redirect('/posts');
}


module.exports = {
  getAllPosts: getAllPosts,
  getSinglePost: getSinglePost,
  createNewPost: createNewPost,
  getSingleAuthor: getSingleAuthor,
  selectSinglePost: selectSinglePost,
  editPost: editPost,
  deletePost: deletePost
}