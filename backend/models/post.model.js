const db = require('../data/database');

class Post {
  constructor(title, summary, body, author, id) {
    this.title = title;
    this.summary = summary;
    this.body = body;
    this.author = author;

    if (id) {
      this.id = id;
    }
  }

  static async fetchAllPosts() {
    try {
      const query = `
        SELECT posts.*, authors.name AS author_name FROM posts
        INNER JOIN authors ON posts.author_id = authors.id
      `;

      const [posts,] = await db.query(query);
      return posts;
    } catch (error) {
      throw new Error(`Posts error on look up: ${error.message}`);
    }
  }

  async fetchSinglePost() {
    try {
      if (!this.id) {
        throw new Error('ID do post não definido');
      }

      const query = `
        SELECT posts.*, authors.name AS author_name, authors.email AS author_email FROM posts
        INNER JOIN authors ON posts.author_id = authors.id
        WHERE posts.post_id = ?
      `;

      const [post] = await db.query(query, [this.id]);

      if (post.length > 0) {
        this.title = post[0].title;
        this.summary = post[0].summary;
        this.body = post[0].body;
      }

      return post;
    } catch (error) {
      throw new Error(`Erro ao buscar post: ${error.message}`);
    }
  }

  static async fetchAllAuthors() {
    try {
      const query = `SELECT * FROM authors`;
      const [authors,] = await db.query(query);
      return authors;
    } catch (error) {
      throw new Error(`Authors error on look up: ${error.message}`);
    }
  }

  async save() {
    try {
      const query = `
          INSERT INTO posts (title, summary, body, author_id) 
          VALUES (?, ?, ?, ?)
        `;
      const values = [this.title, this.summary, this.body, this.author];
      const result = await db.query(query, values);
      this.id = result.insertId;
    } catch (error) {
      throw new Error(`Erro ao salvar post: ${error.message}`);
    }
  }
}

module.exports = Post;


// Update a Post
// Delete a Post


































// async function getAllPosts(req, res) {

//   res.render('posts-list', { posts: posts });
// }

// async function getSinglePost(req, res) {
//   const query = `
//     SELECT posts.*, authors.name AS author_name, authors.email AS author_email FROM posts
//     INNER JOIN authors ON posts.author_id = authors.id
//     WHERE posts.post_id = ?
//   `;

//   const [posts] = await db.query(query, [req.params.id]);

//   if (!posts || posts.length === 0) {
//     return res.status(404).render('404');
//   }

//   const postData = {
//     ...posts[0],
//     date: posts[0].date.toISOString(),
//     humanReadableDate: posts[0].date.toLocaleDateString('en-US', {
//       weekday: 'long',
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     }),
//   }

//   res.render('post-detail', { post: postData });
// }

// async function createNewPost(req, res) {
//   const data = [
//     req.body.title,
//     req.body.summary,
//     req.body.content,
//     req.body.author,

//   ];

//   await db.query('INSERT INTO blog.posts (title, summary, body, author_id) VALUES(?)', [
//     data,
//   ]);

//   res.redirect('/posts');
// }


// async function getSingleAuthor(req, res) {
//   const [authors] = await db.query('SELECT * FROM authors');

//   res.render('create-post', { authors: authors });

// }


// async function selectSinglePost(req, res) {
//   const query = `
//     SELECT * FROM posts WHERE posts.post_id = ?
//   `;

//   const [posts] = await db.query(query, [req.params.id]);

//   if (!posts || posts.length === 0) {
//     return res.status(404).render('404');
//   }

//   res.render('update-post', { post: posts[0] });
// }


// async function editPost(req, res) {
//   const query = `
//     UPDATE posts SET title = ?, summary = ?, body = ?
//     WHERE post_id = ?
//   `;

//   const [posts] = await db.query(query, [
//     req.body.title,
//     req.body.summary,
//     req.body.content,
//     req.params.id
//   ]);

//   if (!posts || posts.length === 0) {
//     return res.status(404).render('404')
//   };

//   res.redirect('/posts');
// }


// async function deletePost(req, res) {
//   const query = `
//     DELETE FROM posts WHERE post_id = ?
//   `;

//   const [posts] = await db.query(query, [req.params.id]);

//   res.redirect('/posts');
// }

