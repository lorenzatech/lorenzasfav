(function () {
  var S = window.SITE, page = document.body.dataset.page;
  var esc = function (t) { return String(t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var cats = S.categorias.slice().sort(function (a, b) { return a.orden - b.orden; });
  var prods = function (c) { return c.productos.map(function (id) { return S.productos.filter(function (p) { return p.id === id && p.estado === 'publicado'; })[0]; }).filter(Boolean); };
  var url = function (c) { return 'categoria.html?c=' + encodeURIComponent(c.id); };

  if (page === 'home') {
    document.getElementById('titulo').textContent = S.titulo;
    document.getElementById('intro').textContent = S.introduccion;
    var grid = document.getElementById('cats');
    grid.innerHTML = cats.map(function (c) {
      var n = prods(c).length;
      return '<li><div class="flip" data-href="' + url(c) + '" style="--tono:' + esc(c.tono) + '"><div class="flip__inner">' +
        '<button type="button" class="flip__front" aria-expanded="false" aria-label="' + esc(c.titulo) + ': ver descripción"><span class="flip__title">' + esc(c.titulo) + '</span></button>' +
        '<div class="flip__back"><p>' + esc(c.descripcion) + '</p><a class="btn" href="' + url(c) + '">Ver ' + esc(c.titulo.toLowerCase()) + '</a><span class="count">' + n + (n === 1 ? ' favorito' : ' favoritos') + '</span></div>' +
        '</div></div></li>';
    }).join('');
    var hover = matchMedia('(hover:hover) and (pointer:fine)').matches;
    grid.addEventListener('click', function (e) {
      var card = e.target.closest('.flip'); if (!card) return;
      if (e.target.closest('a')) return;
      if (e.target.closest('.flip__front')) {
        if (hover) { location.href = card.dataset.href; return; }
        grid.querySelectorAll('.flip.is-flipped').forEach(function (o) { if (o !== card) o.classList.remove('is-flipped'); });
        var on = card.classList.toggle('is-flipped');
        card.querySelector('.flip__front').setAttribute('aria-expanded', on);
      } else if (!hover) { card.classList.remove('is-flipped'); }
    });
  }

  if (page === 'categoria') {
    var id = new URLSearchParams(location.search).get('c');
    var c = cats.filter(function (x) { return x.id === id; })[0];
    var box = document.getElementById('productos');
    if (!c) {
      document.getElementById('titulo').textContent = 'Categoría no encontrada';
      box.innerHTML = '<p class="empty">No existe esa categoría. Vuelve al inicio y elige una de la lista.</p>';
      return;
    }
    document.title = c.titulo + ' | ' + S.titulo;
    document.getElementById('titulo').textContent = c.titulo;
    document.getElementById('desc').textContent = c.descripcion;
    var list = prods(c);
    box.innerHTML = list.length ? list.map(function (p) {
      var btn = p.enlace
        ? '<a class="btn" href="' + esc(p.enlace) + '" target="_blank" rel="noopener noreferrer">Conseguir<span class="sr"> ' + esc(p.nombre) + ' (se abre en otra pestaña)</span></a>'
        : '<span class="btn is-off" aria-disabled="true">Enlace pendiente</span>';
      return '<article class="postal"><img src="' + esc(p.imagen) + '" alt="' + esc(p.nombre) + '" loading="lazy">' +
        '<div class="postal__body"><h2>' + esc(p.nombre) + '</h2><p class="lead">' + esc(p.descripcion) + '</p>' +
        '<ul>' + p.razones.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul>' + btn + '</div></article>';
    }).join('') : '<p class="empty">Aún no hay favoritos publicados en esta categoría.</p>';
  }
})();
