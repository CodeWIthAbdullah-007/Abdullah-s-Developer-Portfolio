(function () {
  document.documentElement.classList.add('js');
  var $ = function (s, c) { return (c || document).querySelector(s) }, $$ = function (s, c) { return [].slice.call((c || document).querySelectorAll(s)) };
  var root = document.documentElement;

  function setTheme(t) {
    root.setAttribute('data-theme', t); try { localStorage.setItem('theme', t) } catch (e) { }
    $('#bDark').classList.toggle('on', t === 'dark'); $('#bLight').classList.toggle('on', t === 'light')
  }
  var saved = null; try { saved = localStorage.getItem('theme') } catch (e) { }
  setTheme(saved || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
  $('#bDark').onclick = function () { setTheme('dark') }; $('#bLight').onclick = function () { setTheme('light') };

  var chips = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Next.js', 'Supabase', 'Responsive design', 'Figma', 'Git'];
  $('#chips').innerHTML = chips.map(function (c) { return '<div class="chip"><svg class="i"><use href="#code"/></svg>' + c + '</div>' }).join('');
  var bars = [['HTML / CSS', 100], ['JavaScript', 100], ['React.js', 30], ['Node.js', 25]];
  $('#bars').innerHTML = bars.map(function (b) { return '<div><div class="bar-top"><span>' + b[0] + '</span><span>' + b[1] + '%</span></div><div class="track"><div class="fill" data-w="' + b[1] + '"></div></div></div>' }).join('');
  var base = 'https://codewithabdullah-007.github.io/';
  var P = [['Dice game', 'Interactive JS game', 'HTML_-_CSS_-_JAVASCRIPT_DICE_ROLL_GAME/', 'dice-roll.PNG'],
  ['Todo app', 'Task manager', 'JAVASCRIPT_SMIT_-18-_TODO_LIST_CREATE/', 'Todo-App.PNG'],
  ['Stopwatch', 'Time-tracking tool', 'JAVASCRIPT_STOP_WATCH_SMIT_BATCH_-18-/', 'Stop-Watch.PNG'],
  ['Hotel website', 'Responsive design', 'Assignment_31/', 'Rebetro_Website.PNG'],
  ['Figma clone', 'Pixel-perfect design', 'JAVASCRIPT_SMIT_BATCH_18_ASSIGNMENT_9_FIGMA_CLONE/', 'Figma-Clone.PNG'],
  ['Student system', 'CRUD functionality', 'JAVASCRIPT_BATCH_18_ASSIGNMENT_9_STUDENT_MANAGMENT_SYSTEM/', 'Student-Portal.PNG']];
  $('#grid').innerHTML = P.map(function (p) { return '<a class="proj" href="' + base + p[2] + '" target="_blank" rel="noopener"><img src="images/' + p[3] + '" alt="' + p[0] + '" loading="lazy" onerror="this.onerror=null;this.src=\'https://placehold.co/600x450/0d1411/22c55e?text=' + encodeURIComponent(p[0]) + '\'"><span class="go"><svg class="i"><use href="#ext"/></svg></span><div class="ov"><h3>' + p[0] + '</h3><p>' + p[1] + '</p></div></a>' }).join('');
  $('#yr').textContent = new Date().getFullYear();

  var words = ['Full Stack Developer', 'Frontend Developer', 'JavaScript Developer', 'UI Builder'], wi = 0, ci = 0, del = false, el = $('#typed');
  (function tick() {
    var w = words[wi]; ci += del ? -1 : 1; el.textContent = w.slice(0, ci); var d = del ? 45 : 90;
    if (!del && ci === w.length) { del = true; d = 1500 } else if (del && ci === 0) { del = false; wi = (wi + 1) % words.length; d = 350 } setTimeout(tick, d)
  })();

  var hd = $('#header'), pb = $('#progress'), tp = $('#top'), secs = $$('main section'), lk = $$('.links a');
  function onScroll() {
    var y = window.scrollY, h = document.documentElement.scrollHeight - innerHeight;
    pb.style.width = (h > 0 ? y / h * 100 : 0) + '%'; hd.classList.toggle('scrolled', y > 30); tp.classList.toggle('show', y > 500);
    var cur = 'home'; secs.forEach(function (s) { if (y >= s.offsetTop - 160) cur = s.id });
    lk.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + cur) })
  }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  tp.onclick = function () { scrollTo({ top: 0, behavior: 'smooth' }) };

  var menu = $('#links'), bg = $('#burger');
  function tog(o) { menu.classList.toggle('open', o); bg.setAttribute('aria-expanded', o); bg.innerHTML = '<svg class="i"><use href="#' + (o ? 'x' : 'menu') + '"/></svg>' }
  bg.onclick = function () { tog(!menu.classList.contains('open')) };
  lk.forEach(function (a) { a.onclick = function () { tog(false) } });
  addEventListener('keydown', function (e) { if (e.key === 'Escape') tog(false) });

  function count(n) { var t = +n.dataset.count, s = performance.now(); (function f(now) { var p = Math.min((now - s) / 1400, 1); n.textContent = Math.round(t * (1 - Math.pow(1 - p, 3))) + '+'; if (p < 1) requestAnimationFrame(f) })(s) }
  function show(e) { e.classList.add('in'); $$('[data-count]', e).forEach(count); $$('.fill', e).forEach(function (f) { f.style.width = f.dataset.w + '%' }) }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { show(x.target); io.unobserve(x.target) } }) }, { threshold: .12 });
    $$('.rv').forEach(function (e) { io.observe(e) })
  } else { $$('.rv').forEach(show) }
  setTimeout(function () { $$('.rv:not(.in)').forEach(function (e) { var r = e.getBoundingClientRect(); if (r.top < innerHeight) show(e) }) }, 1200);

  if (matchMedia('(hover:hover) and (pointer:fine)').matches) {
    var dot = $('#dot'), ring = $('#ring'), mx = 0, my = 0, rx = 0, ry = 0;
    addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; dot.style.opacity = ring.style.opacity = 1; dot.style.transform = 'translate(' + mx + 'px,' + my + 'px)' });
    (function l() { rx += (mx - rx) * .16; ry += (my - ry) * .16; ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px)'; requestAnimationFrame(l) })();
    document.addEventListener('mouseover', function (e) { ring.classList.toggle('big', !!e.target.closest('a,button,.chip,.stat')) });
    $$('.proj').forEach(function (c) {
      c.addEventListener('mousemove', function (e) { var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; c.style.transform = 'perspective(800px) rotateY(' + x * 10 + 'deg) rotateX(' + -y * 10 + 'deg) translateY(-6px)' });
      c.addEventListener('mouseleave', function () { c.style.transform = '' })
    })
  }

  var form = $('#form'), toast = $('#toast');
  function say(m) { toast.textContent = m; toast.classList.add('show'); setTimeout(function () { toast.classList.remove('show') }, 3200) }
  form.addEventListener('submit', function (e) {
    e.preventDefault(); var b = $('button', form); b.disabled = true;
    fetch('https://formsubmit.co/ajax/mabdullahanwar85@gmail.com', { method: 'POST', headers: { 'Accept': 'application/json' }, body: new FormData(form) })
      .then(function (r) { if (!r.ok) throw 0; form.reset(); say('Message sent. I’ll reply soon!') })
      .catch(function () { form.submit() }).then(function () { b.disabled = false })
  });
})();
