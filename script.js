function uploadPhoto() {
  const input = document.getElementById('photoInput');
  const gallery = document.getElementById('gallery');

  const file = input.files[0];
  if (!file) return;

  const img = document.createElement('img');
  img.src = URL.createObjectURL(file);

  gallery.appendChild(img);

  localStorage.setItem('gallery', gallery.innerHTML);
}

function uploadVideo() {
  const input = document.getElementById('videoInput');
  const videos = document.getElementById('videos');

  const file = input.files[0];
  if (!file) return;

  const video = document.createElement('video');
  video.controls = true;
  video.src = URL.createObjectURL(file);

  videos.appendChild(video);

  localStorage.setItem('videos', videos.innerHTML);
}

function publishArticle() {
  const title = document.getElementById('articleTitle').value;
  const content = document.getElementById('articleContent').value;

  const articles = JSON.parse(localStorage.getItem('articles') || '[]');

  articles.push({ title, content });

  localStorage.setItem('articles', JSON.stringify(articles));

  alert('Artikel berhasil dipublish');
}

window.onload = function () {

  const gallery = document.getElementById('gallery');
  if (gallery) {
    gallery.innerHTML = localStorage.getItem('gallery') || '';
  }

  const videos = document.getElementById('videos');
  if (videos) {
    videos.innerHTML = localStorage.getItem('videos') || '';
  }

  const articlesContainer = document.getElementById('articlesContainer');

  if (articlesContainer) {
    const articles = JSON.parse(localStorage.getItem('articles') || '[]');

    articles.forEach(article => {
      const div = document.createElement('div');
      div.className = 'article';

      div.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.content}</p>
      `;

      articlesContainer.appendChild(div);
    });
  }
}
