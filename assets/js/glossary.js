/* Glossary terms
 *
 * Turns a word in the page text (like "gua sha") into a small clickable term with an
 * (i) icon. Clicking it opens a pop-up explaining what the term means.
 *
 * The explanation text lives HERE, once. If the wording ever needs to change, this file
 * is the only place to edit it — every page picks up the change automatically.
 *
 * To use it in a page:
 *   1. Wrap the word in the text:
 *        <a class="glossary-term" data-term="gua-sha" role="button" tabindex="0">gua
 *        sha<span class="icon solid fa-info-circle"></span></a>
 *   2. Make sure the page loads this file, after jQuery:
 *        <script src="assets/js/glossary.js"></script>
 *
 * If JavaScript doesn't run, the term simply reads as normal text — nothing breaks, and
 * the same information is always on the FAQ page as well.
 *
 * To add a new term later, add an entry to the list below and use its key as the
 * data-term in the page. No other code changes needed.
 */

(function () {
	var GLOSSARY = {
		'gua-sha': {
			title: 'What is gua sha?',
			body:
				'<p>Gua sha is a Traditional Chinese Medicine treatment method in which a ' +
				'smooth-edged instrument (gua sha tool) is used to scrape with long or short ' +
				'strokes to stimulate microcirculation of the soft tissues, increasing blood ' +
				'flow to those areas and releasing to the exterior. In our session, gua sha ' +
				'will be applied following some manual massage therapy, and will be used for ' +
				'the desired area (common areas include back, neck, shoulders, arms, and legs). ' +
				'Gua sha can be used for musculoskeletal pain relief, headaches and migraines, ' +
				'adhesions, or to ease connection of obstructed musculofascial lines of the ' +
				"body, and help to promote a return to your body's harmony.</p>" +
				'<h4>Gua sha contraindications</h4>' +
				'<ul>' +
				'<li>Blood thinners</li>' +
				'<li>Bleeding disorders (leukemia, anemia, thrombosis, etc)</li>' +
				'<li>Broken, sun burnt, or ulcerated skin</li>' +
				'<li>Local edema or directly on large blood vessels</li>' +
				'<li>Malignant tumors</li>' +
				'<li>Cardiovascular or cerebrovascular diseases</li>' +
				'<li>Acute trauma to the body (fractures, muscular injury, etc)</li>' +
				'</ul>' +
				'<h4>Some aftercare considerations</h4>' +
				'<p>Because gua sha is an opening treatment method, meaning it opens the pores ' +
				'and vessels to bring up and release internal accumulations, it is good practice ' +
				'to keep treatment areas covered and dry for the next day or so. It is ' +
				'recommended that you do not shower, go swimming, and cover up.</p>' +
				'<p><a href="FAQ.html#gua-sha">Read this in the FAQ</a></p>'
		}
	};

	var modal = null;
	var titleEl = null;
	var bodyEl = null;
	var closeEl = null;
	var lastFocused = null;

	function buildModal() {
		modal = document.createElement('div');
		modal.className = 'glossary-modal';
		modal.setAttribute('hidden', '');
		modal.innerHTML =
			'<div class="glossary-modal-backdrop" data-glossary-close></div>' +
			'<div class="glossary-modal-dialog" role="dialog" aria-modal="true" ' +
			'aria-labelledby="glossary-modal-title">' +
			'<button type="button" class="glossary-modal-close" data-glossary-close ' +
			'aria-label="Close">&times;</button>' +
			'<h3 id="glossary-modal-title"></h3>' +
			'<div class="glossary-modal-body"></div>' +
			'</div>';

		document.body.appendChild(modal);

		titleEl = modal.querySelector('#glossary-modal-title');
		bodyEl = modal.querySelector('.glossary-modal-body');
		closeEl = modal.querySelector('.glossary-modal-close');

		// Close on the X, or by clicking the dimmed area outside the box.
		modal.addEventListener('click', function (event) {
			if (event.target.hasAttribute('data-glossary-close')) {
				closeModal();
			}
		});

		// Close on Escape.
		document.addEventListener('keydown', function (event) {
			if (event.key === 'Escape' && !modal.hasAttribute('hidden')) {
				closeModal();
			}
		});
	}

	function openModal(term) {
		var entry = GLOSSARY[term];

		if (!entry) {
			return;
		}

		titleEl.innerHTML = entry.title;
		bodyEl.innerHTML = entry.body;

		lastFocused = document.activeElement;
		modal.removeAttribute('hidden');

		// Stop the page behind the pop-up from scrolling.
		document.body.classList.add('glossary-modal-open');

		// Always start at the top, even if the last one was scrolled down.
		modal.querySelector('.glossary-modal-dialog').scrollTop = 0;
		closeEl.focus();
	}

	function closeModal() {
		modal.setAttribute('hidden', '');
		document.body.classList.remove('glossary-modal-open');

		// Put the keyboard back where the visitor left off.
		if (lastFocused && lastFocused.focus) {
			lastFocused.focus();
		}
	}

	function ready(fn) {
		if (document.readyState !== 'loading') {
			fn();
		} else {
			document.addEventListener('DOMContentLoaded', fn);
		}
	}

	ready(function () {
		var terms = document.querySelectorAll('.glossary-term[data-term]');

		if (!terms.length) {
			return;
		}

		buildModal();

		for (var i = 0; i < terms.length; i++) {
			terms[i].addEventListener('click', function (event) {
				event.preventDefault();
				openModal(this.getAttribute('data-term'));
			});

			// Keyboard users: Enter or Space opens it too.
			terms[i].addEventListener('keydown', function (event) {
				if (event.key === 'Enter' || event.key === ' ') {
					event.preventDefault();
					openModal(this.getAttribute('data-term'));
				}
			});
		}
	});
})();
