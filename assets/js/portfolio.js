(function () {
	'use strict';

	var LINK_ICONS = {
		Android: 'fab fa-google-play',
		iOS: 'fab fa-app-store-ios',
		Steam: 'fab fa-steam',
		Website: 'fas fa-globe',
		'Itch-io': 'fab fa-itch-io',
		Video: 'fab fa-youtube'
	};

	var PROJECTS = {
		professional: [
			{
				id: 'empires-and-puzzles',
				title: 'Empires & Puzzles',
				date: 'Apr 2024 - Present',
				tag: 'Live · Small Giant Games',
				thumb: 'Resources/Images/EmpiresAndPuzzles.jpg',
				media: { type: 'video', src: 'Resources/Videos/EmpiresAndPuzzles.mp4', poster: 'Resources/Images/EmpiresAndPuzzles.jpg' },
				tagline: 'A fresh take on match-3 puzzle games, combining RPG elements, PvE quests and base-building, topped off with epic PvP duels, from 1v1 Raids to 100v100 Wars.',
				role: "I'm part of the development team on Empires & Puzzles. My main focus has been building new heroes and their abilities, and fixing bugs around the complex interactions between them.",
				links: [
					{ label: 'Android', url: 'https://play.google.com/store/apps/details?id=com.smallgiantgames.empires&hl=en_US' },
					{ label: 'Website', url: 'https://www.empiresandpuzzles.com/' }
				]
			},
			{
				id: 'boom-slingers',
				title: 'Boom Slingers',
				date: 'Jul 2023 - Apr 2024',
				tag: '2M+ players',
				thumb: 'Resources/Images/BoomSlingers.jpeg',
				media: { type: 'video', src: 'Resources/Videos/BoomSlingersTrailer.mp4', poster: 'Resources/Images/BoomSlingers.jpeg' },
				tagline: 'An explosive turn-based action game. Battle other Slingers and collect weapons, characters and emotes. Launched globally in 2020 with 2M+ players and an 8000+ member Discord.',
				role: 'I joined during live-ops and reworked UI across the project, supporting new feature development on both front-end and back-end, including a new-player tutorial flow and a timed-chest system for earning weapons.',
				links: [
					{ label: 'Android', url: 'https://play.google.com/store/apps/details?id=com.tuokio.boomslingers&hl=en_US' },
					{ label: 'iOS', url: 'https://apps.apple.com/gb/app/boom-slingers/id1507936643' },
					{ label: 'Steam', url: 'https://store.steampowered.com/app/2075050/Boom_Slingers/' }
				]
			},
			{
				id: 'apex-kings',
				title: 'Apex Kings',
				date: 'Nov 2022 - Jul 2023',
				tag: 'Car collecting & racing',
				thumb: 'Resources/Images/ApexKings.jpeg',
				media: { type: 'video', src: 'Resources/Videos/ApexKingsTrailer.mp4', poster: 'Resources/Images/ApexKings.jpeg' },
				tagline: 'A car-collecting and racing game backed by real brands. Collect cars and race them against real people.',
				role: 'I worked as a generalist programmer across the whole game, from client-side asset loading and feature work to front- and back-end features like data importing and account security. I also helped set up the game\'s CDN and a CI pipeline to automate builds.',
				links: [
					{ label: 'Website', url: 'https://apexkings.io/' }
				]
			},
			{
				id: 'sabreurs',
				title: 'Sabreurs - A Noble Duel',
				date: 'Steam · Unity',
				tag: 'PvP fencing',
				thumb: 'Resources/Images/Sabreurs.png',
				media: { type: 'image', src: 'Resources/Images/Sabreurs.png' },
				tagline: 'A complex player-versus-player fencing game built in Unity.',
				role: 'I built controller handling and input, player movement and an audio controller, and handled the UI menus. I also integrated Steamworks (Steam SDK) and learned a lot about publishing on different platforms.',
				links: [
					{ label: 'Steam', url: 'https://store.steampowered.com/app/921840/Sabreurs__A_Noble_Duel/' }
				]
			},
			{
				id: 'fast-flare',
				title: 'Fast Flare',
				date: 'Mobile · Unreal Engine 4',
				tag: 'C++ & Blueprints',
				thumb: 'Resources/Images/FastFlare.png',
				media: { type: 'video', src: 'Resources/Videos/FastFlare.mp4', poster: 'Resources/Images/FastFlare.png' },
				tagline: 'A fast-paced mobile game built in Unreal Engine 4.',
				role: 'I worked on gameplay elements like input handling, object pooling for map-piece generation and the scoring system. Built with both C++ and Blueprints, it was my first project using Unreal Engine and C++.',
				links: [
					{ label: 'Android', url: 'https://play.google.com/store/apps/details?id=com.FivePointStarDust.FastFlare&hl=fi' }
				]
			},
			{
				id: 'power-mage',
				title: 'Power Mage',
				date: 'PC · Unity',
				tag: 'School project',
				thumb: 'Resources/Images/PowerMage.PNG',
				media: { type: 'image', src: 'Resources/Images/PowerMage.PNG' },
				tagline: 'A fast-paced single-player 3D game where you play a powerful wizard in a magic castle, fighting enemies for score and seeking crystals to customize your spells.',
				role: "I created the spell-customization menu and runtime spell modifiers using Unity's ScriptableObjects. A team project during my studies at Kajaani University of Applied Sciences where I learned a lot about the overall game development process.",
				links: [
					{ label: 'Itch-io', url: 'https://ukkosstruck.itch.io/power-mage' }
				]
			}
		],

		gamejam: [
			{
				id: 'dot-garden',
				title: 'Dot Garden',
				date: 'Global Game Jam 2021',
				tag: 'Shaders',
				thumb: 'Resources/Images/DotGarden.jpg',
				media: { type: 'video', src: 'Resources/Videos/DotGardenTrailer.mp4', poster: 'Resources/Images/DotGarden.jpg' },
				tagline: 'A pointillism-style experience built with custom shaders, our entry to Global Game Jam 2021.',
				role: 'I created the shader used to visualize meshes as points, including per-mesh point-size and color randomization. A project I loved working on to hone my shader skills.',
				links: [
					{ label: 'Itch-io', url: 'https://tammukka.itch.io/dot-garden' }
				]
			},
			{
				id: 'bob-and-steve',
				title: 'Bob & Steve Climb an Abstract Mountain',
				date: 'GMTK Game Jam 2021',
				tag: 'Co-op',
				thumb: 'Resources/Videos/BobAndSteve.gif',
				media: { type: 'video', src: 'Resources/Videos/BobAndSteveGameplay.mp4', poster: 'Resources/Videos/BobAndSteve.gif' },
				tagline: 'A co-op climbing game where two players are connected and can only jump one at a time. Our GMTK 2021 entry, made with @kirstu.',
				role: "I wanted to learn new tools on this project, like Unity's new Input System and Collaborate. I wrote all the code and the core gameplay loop.",
				links: [
					{ label: 'Itch-io', url: 'https://kirstu.itch.io/bobandsteve' }
				]
			},
			{
				id: 'jantor',
				title: 'JANTOR',
				date: 'Ludum Dare 47 · 13th place',
				tag: 'GameMaker Studio 2',
				thumb: 'Resources/Images/JANTOR.png',
				media: { type: 'image', src: 'Resources/Videos/JANTOR.gif' },
				tagline: 'A boss-fight loop game and my first project built in GameMaker Studio 2. It placed 13th in Ludum Dare 47.',
				role: "I built the loop system that drives player movement and JANTOR's living, looping motion, plus JANTOR's attacks, phases and the core gameplay loop.",
				links: [
					{ label: 'Itch-io', url: 'https://tammukka.itch.io/jantor' }
				]
			},
			{
				id: 'transemission',
				title: 'Transemission',
				date: 'Global Game Jam 2018',
				tag: 'Audio-reactive',
				thumb: 'Resources/Images/Transemission.PNG',
				media: { type: 'image', src: 'Resources/Images/Transemission.PNG' },
				tagline: 'A rhythm game with a programmed, audio-reactive background, our Global Game Jam 2018 entry.',
				role: 'I built a tool to extract input from audio files and drive the background elements, amplifying the rhythm of the songs.',
				links: [
					{ label: 'Video', url: 'https://www.youtube.com/watch?v=HDH3eNEbiMU' }
				]
			}
		]
	};

	function el(tag, cls, html) {
		var node = document.createElement(tag);
		if (cls) node.className = cls;
		if (html != null) node.innerHTML = html;
		return node;
	}
	function mod(n, m) { return ((n % m) + m) % m; }

	function Carousel(root, items) {
		this.root = root;
		this.items = items;
		this.index = 0;
		this.cards = [];
		this.autoMs = 5500;
		this.timer = null;
		this.paused = false;
		this._build();
		this._bind();
		this.render();
		this.start();
	}

	Carousel.prototype._build = function () {
		var self = this;

		var stage = el('div', 'carousel-stage');
		this.items.forEach(function (p, i) {
			var card = el('button', 'card');
			card.type = 'button';
			card.setAttribute('aria-label', p.title);
			card.innerHTML =
				'<div class="card-thumb"><img src="' + p.thumb + '" alt="" loading="lazy" /></div>' +
				'<div class="card-body">' +
					'<span class="card-tag">' + p.tag + '</span>' +
					'<h3>' + p.title + '</h3>' +
					'<span class="card-date">' + p.date + '</span>' +
					'<span class="card-cta">View project <i class="fas fa-arrow-right"></i></span>' +
				'</div>';
			card.addEventListener('click', function () {
				if (i === self.index) { openModal(p); }
				else { self.goTo(i, true); }
			});
			stage.appendChild(card);
			self.cards.push(card);
		});
		this.stage = stage;

		var controls = el('div', 'carousel-controls');
		this.prevBtn = el('button', 'carousel-btn carousel-btn--prev', '<i class="fas fa-chevron-left"></i>');
		this.nextBtn = el('button', 'carousel-btn carousel-btn--next', '<i class="fas fa-chevron-right"></i>');
		this.prevBtn.type = this.nextBtn.type = 'button';
		this.prevBtn.setAttribute('aria-label', 'Previous project');
		this.nextBtn.setAttribute('aria-label', 'Next project');

		this.dots = el('div', 'carousel-dots');
		this.dotEls = this.items.map(function (p, i) {
			var d = el('button', 'dot');
			d.type = 'button';
			d.setAttribute('aria-label', 'Go to ' + p.title);
			d.addEventListener('click', function () { self.goTo(i, true); });
			self.dots.appendChild(d);
			return d;
		});

		controls.appendChild(this.prevBtn);
		controls.appendChild(this.dots);
		controls.appendChild(this.nextBtn);

		this.root.appendChild(stage);
		this.root.appendChild(controls);
	};

	Carousel.prototype._bind = function () {
		var self = this;
		this.prevBtn.addEventListener('click', function () { self.prev(true); });
		this.nextBtn.addEventListener('click', function () { self.next(true); });

		this.root.addEventListener('pointerenter', function () { self.paused = true; });
		this.root.addEventListener('pointerleave', function () { self.paused = false; });
		this.root.addEventListener('focusin', function () { self.paused = true; });
		this.root.addEventListener('focusout', function () { self.paused = false; });

		var startX = 0, dragging = false;
		this.stage.addEventListener('pointerdown', function (e) {
			dragging = true; startX = e.clientX; self.paused = true;
		});
		window.addEventListener('pointerup', function (e) {
			if (!dragging) return;
			dragging = false;
			var dx = e.clientX - startX;
			if (Math.abs(dx) > 50) { dx < 0 ? self.next(true) : self.prev(true); }
			self.paused = false;
		});
	};

	Carousel.prototype.render = function () {
		var n = this.items.length;
		var self = this;
		this.cards.forEach(function (card, i) {
			var offset = i - self.index;
			if (offset > n / 2) offset -= n;
			if (offset < -n / 2) offset += n;

			var abs = Math.abs(offset);
			card.style.setProperty('--offset', offset);
			card.classList.toggle('is-active', offset === 0);
			card.style.display = abs > 2 ? 'none' : '';
			card.style.zIndex = 100 - abs;
			card.tabIndex = offset === 0 ? 0 : -1;
		});
		this.dotEls.forEach(function (d, i) {
			d.classList.toggle('is-active', i === self.index);
		});
	};

	Carousel.prototype.goTo = function (i, user) {
		this.index = mod(i, this.items.length);
		this.render();
		if (user) this.restart();
	};
	Carousel.prototype.next = function (user) { this.goTo(this.index + 1, user); };
	Carousel.prototype.prev = function (user) { this.goTo(this.index - 1, user); };

	Carousel.prototype.start = function () {
		var self = this;
		this.stop();
		this.timer = setInterval(function () {
			if (!self.paused && self.active && !modalOpen) self.next(false);
		}, this.autoMs);
	};
	Carousel.prototype.stop = function () { if (this.timer) clearInterval(this.timer); };
	Carousel.prototype.restart = function () { this.start(); };

	var modal = document.getElementById('detailModal');
	var modalMedia = document.getElementById('modalMedia');
	var modalInfo = document.getElementById('modalInfo');
	var modalOpen = false;
	var lastFocused = null;

	function mediaMarkup(m) {
		if (m.type === 'video') {
			return '<video src="' + m.src + '" poster="' + (m.poster || '') + '" controls playsinline preload="metadata"></video>';
		}
		return '<img src="' + m.src + '" alt="" />';
	}

	function openModal(p) {
		lastFocused = document.activeElement;
		modalMedia.innerHTML = mediaMarkup(p.media);

		var links = p.links.map(function (l) {
			var icon = LINK_ICONS[l.label] || 'fas fa-external-link-alt';
			return '<a class="btn btn--primary" href="' + l.url + '" target="_blank" rel="noopener"><i class="' + icon + '"></i> ' + l.label + '</a>';
		}).join('');

		modalInfo.innerHTML =
			'<span class="modal-badge">' + p.date + '</span>' +
			'<h2>' + p.title + '</h2>' +
			'<p class="modal-tagline">' + p.tagline + '</p>' +
			'<div class="modal-role"><span class="role-label"><i class="fas fa-user-astronaut"></i> My role</span><p>' + p.role + '</p></div>' +
			'<div class="modal-links">' + links + '</div>';

		modal.classList.add('is-open');
		modal.setAttribute('aria-hidden', 'false');
		document.body.classList.add('no-scroll');
		modalOpen = true;
		var closeBtn = modal.querySelector('.modal-close');
		if (closeBtn) closeBtn.focus();
	}

	function closeModal() {
		modal.classList.remove('is-open');
		modal.setAttribute('aria-hidden', 'true');
		document.body.classList.remove('no-scroll');
		modalOpen = false;
		var v = modalMedia.querySelector('video');
		if (v) { v.pause(); }
		setTimeout(function () { modalMedia.innerHTML = ''; }, 300);
		if (lastFocused) lastFocused.focus();
	}

	modal.addEventListener('click', function (e) {
		if (e.target.closest('[data-close]')) closeModal();
	});
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape' && modalOpen) closeModal();
	});

	var views = {};
	document.querySelectorAll('.view').forEach(function (v) { views[v.dataset.view] = v; });
	var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
	var indicator = document.querySelector('.nav-indicator');
	var carousels = {};

	function currentRoute() {
		var h = location.hash.replace(/^#\/?/, '');
		return views[h] ? h : 'professional';
	}

	function moveIndicator(link) {
		if (!link || !indicator) return;
		indicator.style.width = link.offsetWidth + 'px';
		indicator.style.transform = 'translateX(' + link.offsetLeft + 'px)';
	}

	function setView(name) {
		Object.keys(views).forEach(function (k) {
			views[k].classList.toggle('is-active', k === name);
		});
		navLinks.forEach(function (l) {
			var on = l.dataset.view === name;
			l.classList.toggle('is-active', on);
			if (on) moveIndicator(l);
		});
		// tell carousels which one is active (so off-screen ones don't auto-advance)
		Object.keys(carousels).forEach(function (k) {
			carousels[k].active = (k === name);
		});
		document.body.setAttribute('data-route', name);
		window.scrollTo({ top: 0, behavior: 'auto' });
	}

	function route() { setView(currentRoute()); }

	function init() {
		document.querySelectorAll('[data-carousel]').forEach(function (node) {
			var key = node.dataset.carousel;
			carousels[key] = new Carousel(node, PROJECTS[key]);
		});

		window.addEventListener('hashchange', route);
		window.addEventListener('resize', function () {
			var on = document.querySelector('.nav-link.is-active');
			moveIndicator(on);
		});

		var toggle = document.getElementById('navToggle');
		var nav = document.getElementById('mainNav');
		toggle.addEventListener('click', function () {
			document.body.classList.toggle('nav-open');
		});
		navLinks.forEach(function (l) {
			l.addEventListener('click', function () { document.body.classList.remove('nav-open'); });
		});

		document.getElementById('year').textContent = new Date().getFullYear();

		if (!location.hash) location.replace('#/professional');
		route();
		setTimeout(route, 250);
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
