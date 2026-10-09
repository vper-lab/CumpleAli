const main = document.querySelector('main');
const storageKey = 'alicia38-experiencia';
const names = { flotacion: 'Una sesión de flotación', pintura: 'Pinta un cuadro y brinda' };
let choice = null;
let storageAvailable = true;
let breathTimer;
try { const saved = localStorage.getItem(storageKey); if (Object.hasOwn(names, saved)) choice = saved; } catch { storageAvailable = false; }

function home() {
  return `<section class="intro"><span class="eyebrow"><span class="tiny-star" aria-hidden="true">✦</span> HOY LA PROTAGONISTA ERES TÚ</span><span class="big-age" aria-hidden="true">38</span><h1>Alicia, hay regalos<br>que <em>se viven.</em></h1><p>Felices 38, hermana. Este año, el regalo es un recuerdo por estrenar. Y la mejor parte: tú eliges.</p></section>
  <div class="choices"><a class="card water" href="#/flotacion"><div class="card-top"><span>PARA BAJAR LAS REVOLUCIONES</span><span class="card-number">01</span></div><h2>Que el mundo<br>espere un ratito.</h2><p>Una sesión de flotación. Agua, silencio y ese gustazo de no tener que hacer nada.</p><div class="card-bottom"><span class="pill">Modo desconexión</span><strong>Descubrir la flotación</strong></div></a>
  <a class="card paint" href="#/pintura"><div class="card-top"><span>PARA SOLTAR LA CREATIVIDAD</span><span class="card-number">02</span></div><h2>Un poco de arte.<br>Un brindis por ti.</h2><p>Pinta un cuadro y tómate una copa de vino. No hace falta talento: solo ganas de pasarlo bien.</p><div class="card-bottom"><span class="pill">Modo artista</span><strong>Descubrir pintura y vino</strong></div></a></div>
  <div class="after-cards"><p>Dos planes. Un regalo. <span>Todo el tiempo para decidir.</span></p></div>
  ${choice ? `<div class="saved"><span>Tu elección: <strong>${names[choice]}</strong></span><a href="#/celebracion">Ver mi regalo</a></div>` : ''}`;
}
const venues = {
  flotacion: [
    { name: 'Flotexperience', area: 'LAS TABLAS', address: 'C/ Campo de la Estrella, 7 · Madrid', description: 'Flotarios abiertos, sin cubierta, en un centro dedicado a la relajación. Su propuesta incluye música, iluminación de colores y proyección de estrellas. Unos 50 minutos de flotación y 75 minutos en total, con duchas.', url: 'https://flotexperience.es/' },
    { name: 'City Yoga Madrid', area: 'CUATRO CAMINOS / NUEVOS MINISTERIOS', address: 'C/ Artistas, 43 · Madrid', description: 'Una habitación privada con tanque de flotación y ducha, en una zona bien comunicada.', url: 'https://www.city-yoga.com/tanque-de-flotacion-madrid.html' }
  ],
  pintura: [
    { name: 'SOHO ART MADRID', area: 'CENTRO · LAS VISTILLAS', address: 'C/ de Don Pedro, 20 · Madrid', description: 'Taller guiado con pintura acrílica, materiales, vino y tapas. Un plan acogedor para crear tu propio cuadro.', url: 'https://www.sohoartmadrid.com/sipandpaint' },
    { name: 'Tinto y Tinta', area: 'DELICIAS', address: 'C/ Tomás Borrás, 2 · Madrid', description: 'Pintura fluorescente, música y vino, con una pequeña dinámica de escape room para romper el hielo.', url: 'https://tintoytinta.es/' }
  ]
};
function locations(type) {
  return `<section class="section"><div class="section-heading"><h2>¿Dónde lo vivimos?</h2><p>Dos lugares para elegir en Madrid.</p></div><div class="locations">${venues[type].map(v => `<article class="location"><span class="eyebrow">${v.area}</span><h3>${v.name}</h3><p>${v.address}</p><p>${v.description}</p><div class="location-links"><a href="${v.url}" target="_blank" rel="noopener noreferrer">Ver el centro<span class="sr-only"> (se abre en otra pestaña)</span></a><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.name + ' ' + v.address)}" target="_blank" rel="noopener noreferrer">Cómo llegar<span class="sr-only"> (se abre en otra pestaña)</span></a></div></article>`).join('')}</div><p class="note">La fecha y el centro los concretaremos juntos después de tu elección, según disponibilidad.</p></section>`;
}
function chooseBlock(type) { return `<section class="choose"><div><h2>¿Este es tu plan?</h2><p>El mejor regalo es el que te hace ilusión.</p></div><button class="btn" data-choose="${type}">Me quedo con esta experiencia</button></section><p class="note">Puedes cambiar de idea. Elegir aquí no realiza una reserva.</p>`; }
function floating() {
  return `<a class="back" href="#/">Volver a las dos experiencias</a><section class="detail-hero"><div><span class="eyebrow">EXPERIENCIA 01 · MODO DESCONEXIÓN</span><h1>Tu único plan:<br><em>dejarte flotar.</em></h1><p>Entras en un tanque con agua templada y una alta concentración de sales de Epsom. El agua sostiene tu cuerpo, mientras reduces el ruido y los estímulos del día. Tú solo tienes que encontrar tu postura y estar a gusto.</p><div class="tags"><span>Un ratito para ti</span><span>Agua templada</span><span>Sin prisas</span></div></div><div class="interactive"><span class="eyebrow">UN PEQUEÑO ADELANTO</span><div class="orb" id="orb"><span id="breath-label">A tu ritmo</span></div><p>Prueba una pausa: inspira 4 segundos<br>y suelta el aire durante 6.</p><button class="btn secondary" id="breathe" aria-pressed="false">Tomarme una pausa</button></div></section>
  <section class="section"><h2>Así será tu momento.</h2><div class="steps"><article><span class="step-num">01</span><h3>Llegas y te acomodas</h3><p>El centro te explica cómo funciona la sesión. Te duchas antes de entrar al agua.</p></article><article><span class="step-num">02</span><h3>Te dejas sostener</h3><p>Flotas sin hacer esfuerzo y encuentras tu postura. Según el centro, puedes elegir entre un flotario abierto o una cabina con la puerta abierta o cerrada.</p></article><article><span class="step-num">03</span><h3>Vuelves sin correr</h3><p>Una ducha al terminar y un momento para volver al mundo. El móvil puede esperar un poquito más.</p></article></div></section>
  <section class="section"><h2>Lo bonito de parar.</h2><div class="benefits"><article><h3>Desconectar del ruido</h3><p>Un entorno con menos estímulos para hacer una pausa en el ritmo del día.</p></article><article><h3>Descansar el cuerpo</h3><p>El agua sostiene tu peso y permite experimentar una sensación de ligereza.</p></article><article><h3>Un espacio para ti</h3><p>Un rato tranquilo, sin pantallas ni tareas, que puede ayudarte a sentirte relajada.</p></article></div><p class="note">Cada persona lo vive de manera distinta; estos son posibles efectos de bienestar, no resultados garantizados.</p></section>
  ${locations('flotacion')}<section class="section"><h2>Antes de flotar.</h2><details><summary>¿Qué diferencia hay entre los dos centros?</summary><p><strong>Flotexperience:</strong> en Las Tablas, ofrece flotarios abiertos sin cubierta, con opciones de música, iluminación de colores y proyección de estrellas.</p><p><strong>City Yoga:</strong> en Cuatro Caminos / Nuevos Ministerios, ofrece una cabina de flotación en una habitación privada con ducha. Puedes dejar la puerta abierta y mantener las luces encendidas.</p><p>Si te atrae un flotario sin cubierta, mira Flotexperience. Si te viene mejor una ubicación más céntrica, mira City Yoga.</p></details><details><summary>¿Cuánto dura la sesión?</summary><p><strong>Flotexperience:</strong> indica 50 minutos de flotación y unos 75 minutos en total, con las duchas incluidas.</p><p><strong>City Yoga:</strong> indica 50 minutos dentro del tanque, con unos 10 minutos antes y otros 10 después para prepararte y cambiarte.</p></details><details><summary>¿Qué tengo que llevar?</summary><p><strong>Flotexperience:</strong> explica que la sesión se realiza en una sala privada y que no es necesario usar bañador. Consultaremos qué material de ducha facilita.</p><p><strong>City Yoga:</strong> indica que proporciona toalla, tapones y productos de ducha.</p><p>Antes de ir, confirmaremos con el centro elegido qué necesitas llevar para estar cómoda.</p></details><details><summary>¿Y si me agobia el espacio cerrado?</summary><p><strong>Flotexperience:</strong> sus flotarios no tienen cubierta; el espacio sobre el agua queda abierto.</p><p><strong>City Yoga:</strong> puedes mantener la puerta de la cabina abierta y la luz encendida.</p><p>Comenta tus preferencias con el centro para preparar una sesión en la que te sientas a gusto.</p></details></section>${chooseBlock('flotacion')}`;
}
function painting() {
  return `<a class="back" href="#/">Volver a las dos experiencias</a><section class="detail-hero"><div><span class="eyebrow">EXPERIENCIA 02 · MODO ARTISTA</span><h1>Menos perfección.<br><em>Más diversión.</em></h1><p>Un lienzo en blanco, pinceles y una copa de vino. Un taller para probar, mezclar colores y disfrutar creando tu propio cuadro. Con ayuda para empezar y libertad para hacerlo tuyo.</p><div class="tags"><span>Sin experiencia previa</span><span>Materiales incluidos</span><span>Tu obra se va contigo</span></div></div><div class="interactive"><span class="eyebrow">CALIENTA ESOS PINCELES</span><canvas class="drawing" id="drawing" width="600" height="300" aria-label="Lienzo de práctica para dibujar con el dedo o el ratón"></canvas><div class="swatches" role="group" aria-label="Colores del pincel">${[['#7555c9','Violeta'],['#ed638a','Rosa'],['#2a9b91','Turquesa'],['#eaa82c','Amarillo']].map(([color,label],i)=>`<button class="swatch" style="background:${color}" data-color="${color}" aria-label="${label}" aria-pressed="${i === 0}"></button>`).join('')}</div><div class="paint-tools"><button class="text-button" id="clear-canvas">Empezar de nuevo</button><button class="text-button" id="paint-dab">Añadir un toque de color</button></div><p>Pinta con el dedo o el ratón. También puedes usar el botón para añadir color.</p></div></section>
  <section class="section"><h2>Tu tarde, en tres pinceladas.</h2><div class="steps"><article><span class="step-num">01</span><h3>Un lienzo y mil ideas</h3><p>Te preparan el material y te ayudan a empezar. No necesitas haber pintado antes.</p></article><article><span class="step-num">02</span><h3>Colores y un brindis</h3><p>Experimentas con la pintura mientras disfrutas del ambiente y de tu bebida.</p></article><article><span class="step-num">03</span><h3>Un recuerdo hecho por ti</h3><p>Te llevas tu obra a casa. Y una buena historia para contar cada vez que la mires.</p></article></div></section>
  ${locations('pintura')}<section class="section"><h2>Antes de sacar tu lado artista.</h2><details><summary>¿Tengo que saber pintar?</summary><p>Para nada. Ambos centros ofrecen opciones para principiantes. SOHO ART guía el taller paso a paso; Tinto y Tinta ofrece diseños con tutoriales en un ambiente de luces UV.</p></details><details><summary>¿Qué diferencia hay entre los dos lugares?</summary><p>SOHO ART propone pintura acrílica, vino y tapas en Las Vistillas. Tinto y Tinta en Delicias propone pintura fluorescente, música y una pequeña dinámica de escape room. Elige el ambiente que más te apetezca.</p></details><details><summary>¿Cuánto dura? ¿Hay bebida sin alcohol?</summary><p>SOHO ART publica talleres de unas 2 horas y media; Tinto y Tinta indica unos 135 minutos y opción sin alcohol. Consultaremos las bebidas disponibles y los detalles de la sesión al reservar.</p></details></section>${chooseBlock('pintura')}`;
}
function celebration() {
  if (!choice) return home();
  return `<section class="success"><span class="eyebrow">EL PRÓXIMO RECUERDO YA TIENE PLAN</span><span class="success-mark" aria-hidden="true">✦</span><h1>¡Por ti,<br><em>Alicia!</em></h1><p>38 años merecen algo que se disfrute.<br>Y este ratito lleva tu nombre.</p><article class="ticket"><span class="eyebrow">UN REGALO PARA VIVIR · ALICIA 38</span><h2>${names[choice]}</h2><p>${choice === 'flotacion' ? 'Vale por una pausa, un poco de silencio y el placer de dejarte llevar.' : 'Vale por una tarde de colores, un brindis y una obra con tu firma.'}</p><div class="ticket-bottom"><span>De tu hermano Victor</span><strong>Con todo mi cariño</strong></div></article><p>${storageAvailable ? 'Tu elección está guardada en este navegador.' : 'Tu elección se mantiene mientras esta página siga abierta; este navegador no permite guardarla.'}<br>Cuéntaselo a Victor y elegid juntos el lugar y la fecha.</p><div class="actions"><button class="btn" id="celebrate-again">Otro poquito de confeti</button><a class="btn secondary" href="#/">Explorar o cambiar mi elección</a></div><p class="note">Este recuerdo es parte del regalo; no es un bono emitido por el centro ni una reserva.</p></section>`;
}
function confetti() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const layer = document.querySelector('#confetti');
  layer.replaceChildren();
  for (let i=0;i<65;i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random()*100}%`;
    piece.style.background = ['#DED8F0','#F5D5C5','#E8DDB6','#BDA6D1'][i%4];
    piece.style.animationDelay = `${Math.random()*.65}s`;
    piece.style.animationDuration = `${2.5+Math.random()}s`;
    layer.append(piece);
  }
  setTimeout(()=>layer.replaceChildren(),4300);
}
function setupPainting() {
  const canvas = document.querySelector('#drawing');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  let color='#7555c9', drawing=false, pointerId=null;
  ctx.lineWidth=10; ctx.lineCap='round'; ctx.lineJoin='round';
  function point(e) { const r=canvas.getBoundingClientRect(); return [(e.clientX-r.left)*canvas.width/r.width,(e.clientY-r.top)*canvas.height/r.height]; }
  canvas.addEventListener('pointerdown',e=>{drawing=true;pointerId=e.pointerId;canvas.setPointerCapture(pointerId);const [x,y]=point(e);ctx.strokeStyle=color;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+.1,y+.1);ctx.stroke();});
  canvas.addEventListener('pointermove',e=>{if(!drawing || e.pointerId!==pointerId)return;ctx.lineTo(...point(e));ctx.stroke();});
  const stop=()=>{drawing=false;pointerId=null;};
  canvas.addEventListener('pointerup',stop);canvas.addEventListener('pointercancel',stop);canvas.addEventListener('lostpointercapture',stop);
  document.querySelectorAll('[data-color]').forEach(b=>b.addEventListener('click',()=>{color=b.dataset.color;document.querySelectorAll('[data-color]').forEach(s=>s.setAttribute('aria-pressed',String(s===b)));}));
  document.querySelector('#clear-canvas').addEventListener('click',()=>ctx.clearRect(0,0,canvas.width,canvas.height));
  document.querySelector('#paint-dab').addEventListener('click',()=>{ctx.fillStyle=color;ctx.beginPath();ctx.arc(35+Math.random()*530,35+Math.random()*230,12+Math.random()*18,0,Math.PI*2);ctx.fill();});
}
function render(moveFocus=true) {
  clearInterval(breathTimer);
  const route = location.hash.slice(1) || '/';
  const views = {'/':home,'/flotacion':floating,'/pintura':painting,'/celebracion':celebration};
  main.innerHTML = (views[route] || home)();
  document.title = `${route === '/flotacion' ? 'Tu sesión de flotación' : route === '/pintura' ? 'Pintura y vino' : route === '/celebracion' && choice ? 'Tu regalo elegido' : 'Alicia, esto va por ti'} · Alicia 38`;
  main.querySelectorAll('[data-choose]').forEach(b=>b.addEventListener('click',()=>{
    choice=b.dataset.choose;
    try { localStorage.setItem(storageKey,choice);storageAvailable=true; } catch { storageAvailable=false; }
    location.hash='/celebracion';
  }));
  const breathe=document.querySelector('#breathe');
  if(breathe)breathe.addEventListener('click',()=>{
    const on=breathe.getAttribute('aria-pressed')==='true';
    clearInterval(breathTimer);breathe.setAttribute('aria-pressed',String(!on));
    document.querySelector('#orb').classList.toggle('running',!on);
    breathe.textContent=on?'Tomarme una pausa':'Terminar la pausa';
    const label=document.querySelector('#breath-label');
    if(on){label.textContent='A tu ritmo';return;}
    let sec=0;const update=()=>{label.textContent=sec<4?`Inspira · ${4-sec}`:`Suelta · ${10-sec}`;sec=(sec+1)%10;};
    update();breathTimer=setInterval(update,1000);
  });
  setupPainting();
  document.querySelector('#celebrate-again')?.addEventListener('click',confetti);
  if(route==='/celebracion' && choice)confetti();
  if(moveFocus){window.scrollTo(0,0);main.focus({preventScroll:true});}
}
const letter=document.querySelector('#letter');
document.querySelector('.skip').addEventListener('click',e=>{e.preventDefault();main.focus();main.scrollIntoView();});
document.querySelector('#letter-open').addEventListener('click',()=>letter.showModal());
document.querySelector('#letter-close').addEventListener('click',()=>letter.close());
letter.addEventListener('click',e=>{const r=letter.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)letter.close();});
window.addEventListener('hashchange',()=>render());
render(false);
