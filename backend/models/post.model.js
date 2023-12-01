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
      throw new Error(`Error on Post look up: ${error.message}`);
    }
  }

  static async fetchAllAuthors() {
    try {
      const query = `SELECT * FROM authors`;
      const [authors,] = await db.query(query);
      return authors;
    } catch (error) {
      throw new Error(`Error on Authors look up: ${error.message}`);
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
      throw new Error(`Error on Post save: ${error.message}`);
    }
  }
  // Update a Post
  // Delete a Post
  
  async delete() {
    try {
      if (!this.id) {
        throw new Error('Undefined Post ID');
      }
      
      const query = `DELETE FROM posts WHERE post_id = ?`;

      const [result] = await db.query(query, [this.id]);
    } catch (error) {
      throw new Error(`Error on Post delete: ${error.message}`);
    }
  }
}

module.exports = Post;

