const Post = require('../models/post.model');

test('Create a Post instance', () => {
  const post = new Post('Título', 'Resumo', 'Corpo', 'Autor', 1);
  expect(post).toBeInstanceOf(Post);
  expect(post.title).toBe('Título');
  expect(post.summary).toBe('Resumo');
  expect(post.body).toBe('Corpo');
  expect(post.author).toBe('Autor');
  expect(post.id).toBe(1);
});

test('Save a post on database', async () => {
  const post = new Post('Título', 'Resumo', 'Corpo', 'Autor');
  await post.save();
  expect(post.id).toBeDefined();
});
