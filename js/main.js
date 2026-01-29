/** SC JS - Florianópolis - Cool-modern with cyan and blue tones */
const STATE_CONFIG = {
  stateCode: 'sc',
  capital: 'Florianópolis',
  formspreeUrl: 'https://formspree.io/f/xscqbddb',
  colors: { primary: '#00bcd4', secondary: '#1e90ff', accent: '#87ceeb' },
  animations: {"enabled": true, "header": {"type": "germanicSlide", "duration": "0.7s", "easing": "ease-out", "delay": "0s"}, "sections": {"type": "europeanReveal", "duration": "1s", "easing": "ease-in-out", "stagger": "0.15s"}, "hero": {"type": "coastalParallax", "speed": 0.5, "direction": "vertical"}, "cards": {"type": "precisionLift", "clean": true, "organized": true}, "images": {"type": "beachReveal", "pristine": true, "duration": "1s"}},
  interactions: {"hover": "alpine-rise", "scroll": "coastal-flow", "transitions": "precise-ease", "click": "oktoberfest-cheer"},
  premiumEffects: ["alpine-gradient", "beach-shimmer", "cultural-blend", "clean-shadows"]
};

const SECTIONS = ["sc-index-section--map", "sc-index-section-frequently-asked-questions-about-living-in-", "sc-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
