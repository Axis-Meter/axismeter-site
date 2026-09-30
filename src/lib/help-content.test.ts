import assert from 'node:assert/strict';
import { test } from 'node:test';
import { filterHelpArticles, helpArticleSchema, safeHelpLink } from './help-content';

test('rich text links allow useful destinations and reject executable or disguised URLs', () => {
  for (const link of ['/help', 'https://myaccount.axismeter.com/auth_clerk/sign-in', 'mailto:info@axismeter.com', 'tel:+12267025500']) assert.equal(safeHelpLink(link), link);
  for (const link of ['javascript:alert(1)', 'data:text/html,<script>', '//evil.test', '/\\evil.test', 'java\nscript:alert(1)', undefined]) assert.equal(safeHelpLink(link), undefined);
});

const article = {
  slug: 'reset-password', title: 'Reset your password', summary: 'Recover access to your account.', category: 'Account access', keywords: ['locked out'], searchText: 'Check your junk folder for the email code.', hasVideo: true,
};

test('search combines words across title, keywords and article body with the category filter', () => {
  assert.equal(filterHelpArticles([article], ' PASSWORD junk ', 'Account access').length, 1);
  assert.equal(filterHelpArticles([article], 'locked out', '').length, 1);
  assert.equal(filterHelpArticles([article], 'password', 'Bills and payments').length, 0);
  assert.equal(filterHelpArticles([article], 'invoice', '').length, 0);
});

test('article boundary rejects unsafe media URLs and malformed content', () => {
  const valid = { ...article, videoUrl: 'https://cdn.sanity.io/files/test/video.mp4', body: [{ _type: 'block', _key: 'intro', style: 'normal', children: [{ _type: 'span', _key: 'text', text: 'Hello', marks: [] }], markDefs: [] }] };
  assert.equal(helpArticleSchema.safeParse(valid).success, true);
  assert.equal(helpArticleSchema.safeParse({ ...valid, videoUrl: 'javascript:alert(1)' }).success, false);
  assert.equal(helpArticleSchema.safeParse({ ...valid, slug: '../admin' }).success, false);
  assert.equal(helpArticleSchema.safeParse({ ...valid, body: [] }).success, false);
});
