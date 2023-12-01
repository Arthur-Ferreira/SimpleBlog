const express = require('express');

const db = require('../data/database');
const postController = require('../controllers/post.controller');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/posts');
});

router.get('/posts', postController.getAllPosts);

router.post('/posts', postController.createNewPost);

router.get('/new-post', postController.renderNewPostForm);

router.get('/posts/:id', postController.getSinglePost);

router.get('/posts/:id/edit', async (req, res) => { });

router.post('/posts/:id/edit', async (req, res) => { });

router.post('/posts/:id/delete', async (req, res) => { });


module.exports = router